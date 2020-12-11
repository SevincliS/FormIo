import React from 'react';
import {CheckIcon, PlusIcon} from '../../assets/icon/Icon'


const PricePlanData = [
    {
        "title": "Free",
        "subtitle": "Good for personal projects and start getform world",
        "oldFeaturesTitle": "",
        "oldFeatures" : [],
        "features" : [
                    "1 endpoint",
                    "50 submissions/mo.",
                    "100MB file storage",
                    ],
        "price": [ {
            "month":"0",
            "yearly":"0",
                 }]
    },

    {
        "title": "Start",
        "subtitle": "Perfect for personal projects and freelancers",
        "oldFeaturesTitle": "Everything in Free plus:",
        "oldFeatures" : [
                    "5 endpoint",
                    "1.000 submissions/mo.",
                    "1GB file storage",
                    ],
        "features" : [
                    "CSV Export",
                    "Custom redirection",
                    "API",
                    "AJAX",
                    "Webhooks",
                        ],

        "price": [ {
            "month":"9",
            "yearly":"7.5",
                 }]
    },

    {
        "title": "Grow",
        "subtitle": "Make your forms more beautiful and on-brand",
        "oldFeaturesTitle": "Everything in Start plus:",
        "oldFeatures" : [
                    "15 endpoint",
                    "10.000 submissions/mo.",
                    "3GB file storage",
                    ],
        "features" : [
                    "Autoresponses",
                    "Custom Email Templates",
                        ],

        "price": [ {
            "month":"39",
            "yearly":"32.5",
                 }]
    },

    {
        "title": "Scale",
        "subtitle": "Scale form management with higher limits",
        "oldFeaturesTitle": "Everything in Grow plus:",
        "oldFeatures" : [
                    "Unlimited endpoints",
                    "100.000 submissions/mo.",
                    "10GB file storage",
                    ],
        "features" : [
                    "Priority Support",
                        ],

        "price": [ {
            "month":"99",
            "yearly":"82.5",
                 }]
    },

  
]

    class PriceRowWrapper extends React.Component  {

        
    render(){
        
        return (
            PricePlanData.map((priceCount) => {
                return (
                <div className={"price-row"}>
                    <div className={"price-row-title"}>
                        <h3>{priceCount.title}</h3>
                        <h4>{priceCount.subtitle}</h4>
                    </div>
                    <div className={"price-row-features"}>
                        <h5>{priceCount.oldFeaturesTitle}</h5>
                        <ul className={"price-row-old-features"}>
                            {priceCount.oldFeatures.map(oldFeatures =>  <li><CheckIcon/>{oldFeatures}</li>)}
                        </ul>
                        <ul>
                            {priceCount.features.map(features =>  <li><PlusIcon/>{features}</li>)}
                        </ul>
                    </div>
                    <div className={"price-row-price"}>
                            {priceCount.price.map(price => this.props.priceToggle 
                                ?  <div><p>{price.yearly}</p><h4>/month</h4><h5>Billed yearly</h5></div> 
                                : <div><p>{price.month}</p><h4>/month</h4><h5>Billed month</h5></div>  )}
                    </div> 
                    <button>Start 30 Days Free Trail</button>
                </div>
                    )
                })
            )
        }


    }







export default class PricePlan extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            style: {background: "white", borderRadius: 15, color: "#1B2537"},
            isYearToggleActive: false,
            isMonthToggleActive: true,

        }
    }


    yearToggle = () => {
        this.setState ({
            isYearToggleActive: true,
            isMonthToggleActive: false
        })
    }

    monthToggle = () => {
        this.setState ({
            isYearToggleActive: false,
            isMonthToggleActive: true
        })
    }


    render(){
        return(
          <div className={"price-plan"}>
              <div className={"price-plan-top-control"}>
                  <h2>Choose the right plan for your Form2</h2>
                  <div className={"price-plan-toggle"}>
                      <div onClick={this.yearToggle} style={this.state.isYearToggleActive ? this.state.style : null}  className={"price-plan-toggle-item"}>Yearly</div>
                      <div onClick={this.monthToggle} style={this.state.isMonthToggleActive ? this.state.style : null}  className={"price-plan-toggle-item"}>Monthly</div>
                  </div>
              </div>

                <PriceRowWrapper priceToggle = {this.state.isYearToggleActive}/>

          </div>
        )
    }
}