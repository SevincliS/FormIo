import React from 'react';
import {AppleIcon, GooglePlayIcon} from '../../assets/icon/Icon'


class CreateForm extends React.Component {
  render(){
    return (
      <div className={"about-product-create-form"}>
        <div className={"about-product-create-form-text"}>
          <h2>Create your form easily</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere rutrum nisi, euismod commodo libero. Pellentesque magna neque, consectetur at mauris eu, malesuada tempus lectus. </p>
        </div>
        <div className={"about-product-create-form-img"}>
          <div className={"create-form-yellow-circle"}></div>
          <div className={"create-form-image-big"}>

          </div>
          <div className={"create-form-image-small"}>

          </div>

        </div>
      </div>
    )
  }
}

class WorkAnywhere extends React.Component {
  render(){
    return (
      <div className={"about-product-work-anywhere"}>
        <div className={"about-product-work-anywhere-img"}>
          <div className={"work-anywhere-blue-circle"}></div>
          <div className={"work-anywhere-image-big"}>

          </div>
          <div className={"work-anywhere-image-small"}>

          </div>

        </div>
        <div className={"about-product-work-anywhere-text"}>
          <h2>Work Anywhere, with any device</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere rutrum nisi, euismod commodo libero. Pellentesque magna neque, consectetur at mauris eu, malesuada tempus lectus.  </p>
          <button class={"work-anywhere-apple-button"}><AppleIcon/><span>Download on the<p>App Store</p></span></button>
          <button class={"work-anywhere-google-button"}><GooglePlayIcon/><span>Get it on<p>Google Play</p></span></button>
        </div>
      </div>
    )
  }
}





const AboutProduct = () => {
    return(
      <div className={"about-product"}>
    <CreateForm/>
    <WorkAnywhere/>
      </div>
    )
  
}

export default AboutProduct
