import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET
}

class Firebase {
  constructor(){
    app.initializeApp(config);
    this.db = app.database();
    this.auth = app.auth();
    this.googleAuthProvider = new app.auth.GoogleAuthProvider();
  }

  doGoogleSignIn = () => this.auth.signInWithPopup(this.googleAuthProvider);

  doSignOut = () => this.auth.signOut();

  user = (uid) => this.db.ref(`/users/${uid}`);

  cart = (uid) => this.db.ref(`/cart/${uid}`);

  address = (uid) => this.db.ref(`/address/${uid}`);

  order = (uid) => this.db.ref(`/order/${uid}`);

  onAuthChangeListener = (next, fallback) => {
    return this.auth.onAuthStateChanged(authUser => {
      if(authUser){
        Promise.all([
          this.user(authUser.uid).once('value'),
          this.cart(authUser.uid).once('value'),
          this.address(authUser.uid).once('value'),
          this.order(authUser.uid).once('value')
        ])
        .then((results)=> {
          const [ User, Cart, Address, Order ] = results;
          const dbUser = User.val();
          const user = {
            uid: authUser.uid,
            email: authUser.email,
            emailVerifed: authUser.emailVerified,
            ...dbUser
          }
          const cart = Cart.val();
          const address = Address.val();
          const order = Order.val();
          next(user, cart, address, order);
        })
      } else {
        fallback();
      }
    })
  }

}

export default Firebase;