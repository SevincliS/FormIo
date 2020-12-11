import React, {Component} from 'react';
import wordpressLogo from '../../assets/img/wordpress_logo.svg'
import vueLogo from '../../assets/img/vue_logo.svg'
import reactLogo from '../../assets/img/react_logo.svg'
import gatsbyLogo from '../../assets/img/gatsby_logo.svg'
import webflowLogo from '../../assets/img/webflow_logo.svg'
import mailchimpLogo from '../../assets/img/mailchimp_logo.svg'
import Slider from "react-slick";
import {PlayIcon} from '../../assets/icon/Icon'

 class IntegrateSlider extends Component {
    render() {
        const settings = {
          className: "center",
          centerMode: true,
          infinite: true,
          centerPadding: "60px",
          slidesToShow: 5,
          speed: 500,
          autoplaySpeed: 2000,
          autoplay: true,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
 
        };
        return (
          <div className={"integrate-slider"}>
            <Slider {...settings}>
              <div class={"integrate-slider-item"}>
                <img src={wordpressLogo} alt={"wordpress-logo"}/>
              </div>
              <div class={"integrate-slider-item"}>
                <img src={vueLogo} alt={"vue-logo"}/>
              </div>
              <div class={"integrate-slider-item"}>
                 <img src={reactLogo} alt={"react-logo"}/>
              </div>
              <div class={"integrate-slider-item"}>
                <img src={gatsbyLogo} alt={"gatsby-logo"}/>
              </div>
              <div class={"integrate-slider-item"}>
                <img src={webflowLogo} alt={"webflow-logo"}/>
              </div>
              <div class={"integrate-slider-item"}>
                <img src={mailchimpLogo} alt={"mailchimp-logo"}/>
              </div>
            </Slider>
          </div>
        );
      }
  }


  const Integrate = () => {
    return(
      <div className={"integrate"}>
          <h2>Solution made for you</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris posuere rutrum nisi, euismod commodo libero. </p>
        <IntegrateSlider/>
        <button className={"integrate-button"}><PlayIcon/>See Form2 in Action</button>
      </div>
    )
  
}

export default Integrate
