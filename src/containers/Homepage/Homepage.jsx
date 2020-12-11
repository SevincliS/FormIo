import React from 'react';
import { 
  Header,
  MobileHeader, 
  Footer, 
  Introduction, 
  Integrate, 
  AboutProduct,
  CustomerTweets,
  PricePlan,
} from '../../components'


export default class Homepage extends React.Component{

  state = {
    windowHeight: undefined,
    windowWidth: undefined
  }

  handleResize = () => this.setState({
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
  });

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  render(){
    return(
      <>
      {this.state.windowWidth < 992 ?
      <MobileHeader/> :
      <Header/> 
      }
      <Introduction/>
      <Integrate/>
      <AboutProduct/>
      <CustomerTweets/>
      <PricePlan/>
      <Footer/>
      </>
    )
  }
}

