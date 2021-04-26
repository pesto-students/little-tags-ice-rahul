import React from 'react'
import ImageContainer from '../ImageConatiner';
import { IMAGE_CONTAINER } from '../../constants';
import './OnDemand.scss'

const OnDemand = () => {

  return (
    <section className="OnDemand">
      <div className="title"> Most in Demand </div>
      <div className="gallery">
        <div className="gallery-left">
          <ImageContainer type={IMAGE_CONTAINER.TYPE.PRIMARY} className="margin-10" />
          <ImageContainer type={IMAGE_CONTAINER.TYPE.PRIMARY} className="margin-10" />
        </div>
        <div className="gallery-right">
          <ImageContainer type={IMAGE_CONTAINER.TYPE.SECONDARY} className="margin-10" />
          <ImageContainer type={IMAGE_CONTAINER.TYPE.SECONDARY} className="margin-10" />
        </div>
      </div>
    </section>
  );

}
export default OnDemand;