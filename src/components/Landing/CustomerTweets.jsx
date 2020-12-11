import React from 'react';
import {TwitterIcon} from '../../assets/icon/Icon'
import customerPhoto from '../../assets/img/customer_tweet_photo.jpg'


const TweetStorage = [
    {
        "photo": customerPhoto,
        "name": "Aaron Almaraz",
        "title": "CEO & Founder at Gearat",
        "message": "Time is the most precious thing you have when bootstrapping. You can't take time to ponder on design…"
    },

    {
        "photo": customerPhoto,
        "name": "Phet Putrie",
        "title": "Freelancer",
        "message": "Time is the most precious thing you have when bootstrapping. You can't take time to ponder on design…"
    },

    {
        "photo": customerPhoto,
        "name": "Waiapi Karaka",
        "title": "Designer, Freelancer",
        "message": "Time is the most precious thing you have when bootstrapping. You can't take time to ponder on design…"
    },

    {
        "photo": customerPhoto,
        "name": "Prescott MacCaffery",
        "title": "Writer",
        "message": "Time is the most precious thing you have when bootstrapping. You can't take time to ponder on design…"
    },

    {
        "photo": customerPhoto,
        "name": "Lara Madrigal",
        "title": "Marketing Specialist",
        "message": "Time is the most precious thing you have when bootstrapping. You can't take time to ponder on design…"
    },

    {
        "photo": customerPhoto,
        "name": "Marleah Eagleston",
        "title": "Founder at Spicenet",
        "message": "Time is the most precious thing you have when bootstrapping. You can't take time to ponder on design…"
    }
]


const Tweet = TweetStorage.map((TweetStorage) => {
    return(
        <div className={"tweet-card"}>
            <div className={"tweet-card-info"}>
                <img src={TweetStorage.photo}/>
                <div className={"tweet-card-info-name"}>
                    <h3>{TweetStorage.name}</h3>
                    <h4>{TweetStorage.title}</h4>
                </div>
                <TwitterIcon/>
            </div>
            <div className={"tweet-card-message"}>
                <p>{TweetStorage.message}</p>
            </div>
        </div>
    )
})
    



export default class CustomerTweets extends React.Component {

    render(){
        return(
          <div className={"customer-tweets"}>
            <h2>10,000+ people love us</h2>
            <div className={"tweets-wrapper"}>
                {Tweet}
            </div>
          </div>
        )
    }
}
    
  
