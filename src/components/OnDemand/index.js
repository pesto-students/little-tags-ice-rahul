import React from 'react'
import ImageContainer from '../ImageConatiner';
import { IMAGE_CONTAINER } from '../../constants';
import { Link } from 'react-router-dom';
import MensClothing from '../../global/assets/images/mens-clothing.png';
import Jewellery from '../../global/assets/images/jewellery.jpeg';
import WomensClothing from '../../global/assets/images/womens-clothing.jpeg';
import ElectronicGadgets from '../../global/assets/images/electronic-gadgets.jpeg';
import './OnDemand.scss'

const OnDemand = () => {

  return (
    <section className="OnDemand">
      <div className="title"> Most in Demand </div>
      <div className="gallery">
        <div className="gallery-left">
          <Link to="/product/Men's Clothing" className="cursor-pointer decoration-none w-100"><ImageContainer type={IMAGE_CONTAINER.TYPE.PRIMARY} className="margin-10 cursor-pointer" link={MensClothing} title="Mens Clothing" /></Link>
          <Link to="/product/Jewelery" className="cursor-pointer decoration-none w-100"><ImageContainer type={IMAGE_CONTAINER.TYPE.PRIMARY} className="margin-10 cursor-pointer" link={Jewellery} title="Jewellery" /></Link>
        </div>
        <div className="gallery-right">
          <Link to="/product/Women's Clothing" className="cursor-pointer decoration-none w-100"><ImageContainer type={IMAGE_CONTAINER.TYPE.SECONDARY} className="margin-10 cursor-pointer" link={WomensClothing} title="Womens Clothing" /></Link>
          <Link to="/product/Electronics" className="cursor-pointer decoration-none w-100"><ImageContainer type={IMAGE_CONTAINER.TYPE.SECONDARY} className="margin-10 cursor-pointer" link={ElectronicGadgets} title="Electronic Gadgets" /></Link>
        </div>
      </div>
    </section>
  );

}
export default OnDemand;