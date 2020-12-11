import React from 'react';
import logoType from '../../assets/img/form2_logo_type.svg'
import footerAmblem from '../../assets/img/form2_footer_amblem.svg'


const FooterLink = [
 {
    "id": 1,
    "name": "Pricing",
    "link": ""
  },
  {
    "id": 2,
    "name": "Company",
    "link": ""
  },
  {
    "id": 3,
    "name": "Blog",
    "link": ""
  },
  {
    "id": 4,
    "name": "Contact",
    "link": ""
  },
  {
    "id": 5,
    "name": "Status",
    "link": ""
  } 
]



const FooterColumn = FooterLink.map((FooterLink) => {

  return(
      <li key={FooterLink.id}> 
      <a href={FooterLink.link}>{FooterLink.name}</a>
    </li>
    )
       
} )





export default class Footer extends React.Component{
  render(){
    return(
      <footer>
        <div className={"footer-link"}>
          <ul>
            <img src={logoType} alt={"form2-logotype"}/>
            {FooterColumn}
          </ul>
          <ul>
            <h5>Features</h5>
            {FooterColumn}
          </ul>
          <ul>
            <h5>Platform Guides</h5>
            {FooterColumn}
          </ul>
          <ul>
            <h5>Security</h5>
            {FooterColumn}
          </ul>
        </div>
        <div className={"footer-copyright"}>
          <div>
            <p>@2020</p>
            <img src={footerAmblem} alt={"form2-amblem"}/>
            <p>Form2.io</p>
          </div>
          <div>
            <a href={""}>Terms & Conditions</a>
            <a href={""}>Privacy</a>
          </div>
        </div>
      </footer>
    )
  }
}