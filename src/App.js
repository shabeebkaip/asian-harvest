
import React, { Fragment, Component } from 'react';
import { Grid, List, ListItem,Link  } from '@material-ui/core';
import logo from './imageFiles/Elements/AH_LOGO-03.svg';
import ah_banner_gradient from './imageFiles/Elements/BANNER_DESIGN/AH_BANNER_GRADIENT_CIRCLE.png';
import AH_BANNER_CASHEWpack from './imageFiles/Elements/BANNER_DESIGN/AH_BANNER_CASHEWpack.png';
import AH_BANNER_LEAVES from './imageFiles/Elements/BANNER_DESIGN/AH_BANNER_LEAVES.png'
import banner_sky from './imageFiles/Elements/BANNER_DESIGN/AH_BANNER_SKY.png';
import cashewBack from './imageFiles/Elements/BANNER_DESIGN/AH_BANNER_CASHEW_BACK.png';
import cashewFront from './imageFiles/Elements/BANNER_DESIGN/AH_BANNER_CASHEW_FRONT.png';
import nuts from './imageFiles/Elements/BANNER_DESIGN/AH_BANNER_NUTS.png';
import AH_spoonCashew from './imageFiles/Elements/AH_spooncashew.png'; 
import './App.scss';
import emblems from './imageFiles/Elements/2_emblems.svg';
import "../node_modules/video-react/dist/video-react.css";
import ReactPlayer from 'react-player';
import { isMobile, BrowserView, MobileOnlyView ,MobileView} from 'react-device-detect';
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import AH_footer_logo from './imageFiles/Elements/AH_Footer_logo-01.svg';
import facebook from './imageFiles/Elements/facebook.svg';
import instagram from './imageFiles/Elements/instagram.svg';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import slide1 from './imageFiles/Elements/Recipe_Slide1.png';
import slide2 from './imageFiles/Elements/Recipe_Slide2.png';
import slide3 from './imageFiles/Elements/Recipe_Slide3.png';
import harvestingHealthiness from './imageFiles/Elements/AH_Footer_tagline.png';
import cashew1 from './imageFiles/Elements/Cashew 1.png';
import cashew2 from './imageFiles/Elements/Cashew2.png';
import leaf1 from './imageFiles/Elements/Leaf1.png';
import leaf2 from './imageFiles/Elements/Leaf2.png';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    return (
      <Fragment>
        <BrowserView>
          <div className="app" >
            <div className="fab-container" >
              <div className="fab-icon-holder">
                <p className="sailing_para fab-icon-text ">
                  <a className="fab-icon-link" href="https://api.whatsapp.com/send?phone=919526750675&text=Hello,%20I%20would%20like%20to%20know%20about%20your%20products." target="_blank">
                    <WhatsAppIcon size="sm" style={{position:'relative', top:'7px' , marginRight:'10px'}} /> 
                    How can I help you ? 
                  </a>
                </p>
              </div>
            </div>
            <div className="total-body">
              <Grid container  className="navigation-container" >
                <Grid item md={5} xs={12} lg={5} xl={5}  >
                  <img src={logo} alt="shabe" width={300} />
                </Grid>
                <Grid item md={7} xs={0} lg={7} xl={7} className="navigation-item " > 
                <List className="list-item" >
                  <ListItem>HOME</ListItem>
                  <ListItem>ABOUT US</ListItem>
                  <ListItem>RECIPES</ListItem>
                  <ListItem>PRODUCTS</ListItem>
                  <ListItem>CONTACT</ListItem>
                </List>
              </Grid> 
            </Grid>
            <Grid container spacing={0} className="animation-container" >
              <Grid item md={6} xs={12} >
                <span style={{position: "absolute",top: "161px",left: "15px",transform: 'rotate(-56deg)', }} className="cashew2">
                  <img src={cashew2} alt="cashew2" width ="93px" className="animate__animated animate__bounceInLeft" />
                </span>
                <h1 className="animate__animated animate__bounceInLeft real_cashews" >
                  REAL
                  <br/>
                  <span className="cashews" >CASHEWS</span><br/>
                  <span className="not_made" > 
                  <span >ARE NOT </span> <br/>
                    <span className="made" >MADE.</span>
                  </span>
                </h1>
              </Grid>
              <Grid item md={6} xs={12} style={{position:'relative'}}>
                <div className="" style={{position:'relative', top:'100px'}}>
                  <img src={ah_banner_gradient} alt="banner3" className="animate__animated animate__bounceIn img-position" />
                  <img src={AH_BANNER_LEAVES} alt="leaves"  className="animate__animated animate__bounceInDown img-position" />
                  <img src={banner_sky} alt="sky"   className="animate__animated animate__backInUp img-position" />
                  <img src={cashewBack} alt="cashew_back"  className="animate__animated animate__backInUp img-position" />
                  <img src={cashewFront} alt="cashew_front"  className="animate__animated animate__backInDown img-position" />
                  <img src={nuts} alt="nuts"  className="animate__animated animate__bounceInUp img-position" />
                  <img src={cashew2} alt="cashew2" width ="93px"  className="animate__animated animate__bounceInDown cashew2"  />
                  <img src={cashew1} alt="cashew1" width="120px"  className="animate__animated animate__bounceInDown cashew1"/>
                </div>
              </Grid> 
            </Grid>
            <Grid container  className="about-us-container">
              <Grid md={4}  style={{position:'relative'}}>
                <img src={AH_BANNER_CASHEWpack} alt="AH_BANNER_CASHEWpack"  className="cashew-pack" />
                <img src={leaf1} alt="leaf1" className="leaf1" />
              </Grid>
              <Grid md="8">
                <div id="#about" className="about-us-section " >
                  <h1 align="right" className="about_us" id="aboutus" >
                    ABOUT US.
                  </h1>
                  <h2 align="right" className="healthy_cashews">
                    It’s not about just a Cashew, it’s all<br/>
                    <span>about <span style={{color:'#1aaa4e'}}>healthy cashews.!</span></span>
                  </h2>
                  <p align="right" style={{lineHeight:"1.5", fontSize:'24px'}} className="sailing_para">
                    Sailing from Kollam, the eponymous city, the cashew capital of world exporting Lakhs of tonnes to USA, Japan, Saudi Arabia etc we marked our presence two decades back. We understood that our people,
                    despite being in a cashew hub are not getting the export quality
                    premium Cashew nuts. So they went for what was cheap.
                  </p>
                  <p align="right"  style={{lineHeight:'1.5', fontSize:'24px'}} className="sailing_para">
                  So we decided to serve our people the premium healthy nuts for what they can afford. We will serve you only the best. We value your Health as we know for sure that your health is our wealth.
                  </p>
                  <p align="right" style={{color:'#1aaa4e', fontSize:'24px'}} className="sailing_para"><strong>Harvest. Process. Produce</strong></p>
                </div>
              </Grid>
              <Grid md={12}>
                <div style={{marginLeft:'250px'}}>
                  <img  src={AH_spoonCashew} alt="AH_spoonCashew"  />
                  <img src={emblems} alt="emblems" style={{width:'319px',position:'relative', top:'100px' }} />
                  <img src={AH_BANNER_LEAVES} alt="leaves" style={{width:'1265px',position:'absolute', right:'1000px',  }}  />
                  <img src={cashew1} alt="cashew1" width="120px" style={{position:'relative', top:'-250px', left:'60rem', width:'150px'}}/>

                </div>
              </Grid>
            </Grid>
            <Grid container  >
              <Grid item md={12} style={{position:'relative'}} >
                <h1 align="center" style={{fontSize:'100px', fontWeight:'600'}} id="products" className="about_us">
                  Our Healthy<br/> 
                  <span style={{position:'relative', left:'50px'}}>Product.</span>
                </h1>
                <span style={{transform: 'rotate(-56deg)', position: "absolute", right:'50px', top:'100px' }}>
                  <img src={cashew2} alt="cashew2" width ="93px"/>
                </span>
              </Grid>
              <Grid item md={12}>
                <h2 align="center" style={{textTransform:"uppercase", fontWeight:'600'}} className="healthy_cashews"> It’s really hard to break a Cashew from it’s shell <br/> But now We made it easy for you.</h2>
              </Grid>
            </Grid>
            <Grid container style={{margin:"0px"}}>
            <ReactPlayer 
              width="100%"
              height="100%"
              url="https://www.facebook.com/412824289509386/videos/2912907732367114"
            /> 
            <Grid item md={1}> </Grid>
            <Grid item md={10} >
            <p align="center"  style={{fontSize:'30px',margin:'50px'}} className="healthy_cashews">
              We presents to you an alternative to the harmful junk foods that make you sick day by day. Lets say no to that and join the Asian Harvest Family for the change.
            </p>
            <p align="center" style={{fontSize:'30px', margin:'50px'}} className="healthy_cashews">
            We offer you more than what we take from you. Because we need
            a healthy and thoughtful world.
            </p>
            </Grid>
            <Grid item md={1}></Grid>
            <Grid container >
              <Grid item md={12}>
                <div className="slide-container">
                  <Slide>
                    <div className="each-slide">
                      <div style={{'backgroundImage': `url(${slide1})`, width:'100vw', height:'100vh', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
                      </div>
                    </div>
                    <div className="each-slide" >
                      <div style={{'backgroundImage': `url(${slide2})`, width:'100vw', height:'100vh', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
                      </div>
                    </div>
                    <div className="each-slide">
                      <div style={{'backgroundImage': `url(${slide3})`, width:'100vw', height:'100vh', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
                      </div>
                    </div>
                  </Slide>
                </div>
              </Grid>
            </Grid>
            </Grid>
            <Grid container style={{margin:'30px'}} >
              <Grid item md={10}>
                <h1 align="left" style={ isMobile ? {fontSize:'75px'}:{fontSize:'100px'}} className="about_us">
                  CONTACT US.
                </h1>
                <div>
                  <h2 className="healthy_cashews">ASIAN HARVEST LLP</h2>
                  <p style={{fontSize:'24px'}} className="sailing_para">Chathinamkulam, Chandanathope,</p>
                  <p style={{fontSize:'24px'}} className="sailing_para">Kollam - 14, Kerala, India.</p>
                  <p style={{fontSize:'24px'}} className="sailing_para"><a href="mailto:mail@asianharvest.in" target="_blank" style={{textDecoration:"none", color:'#000'}}><strong>mail@asianharvest.in</strong></a></p>
                </div>
                <div>
                  <h2 className="healthy_cashews">PLEASE GET IN TOUCH VIA PHONE:</h2>
                  <p style={{fontSize:'24px'}} className="sailing_para"><strong>+91 9526 750 675</strong></p>
                </div>
                <form className="form" style={{marginTop:'40px'}}>
                    <div className="form__group">
                      <label for="name" class="form__label sailing_para">Name <span style={{color:'#a0a0a0', fontWeight:"100"}}>Required</span></label>
                      <input type="text" class="form__input"  id="name" required /> 
                    </div>
                    <div className="form__group">
                      <label for="email" class="form__label sailing_para">Email <span style={{color:'#a0a0a0', fontWeight:"100"}} >Required</span></label>
                      <input type="text" class="form__input"  id="email" required /> 
                    </div>
                    <div className="form__group">
                      <label for="subject" class="form__label sailing_para">Subject</label>
                      <input type="text" class="form__input"  id="subject"  /> 
                    </div>
                    <div className="form__group">
                      <label for="message" class="form__label sailing_para">Message <span style={{color:'#a0a0a0', fontWeight:"100"}}>Required</span></label>
                      <textarea type="" class="form__input"  id="message"  row="10" /> 
                    </div>
                    <div class="form__group" style={{marginTop:'20px'}}>
                      <button class="btn btn--black healthy_cashews">Submit</button>
                    </div>
                </form>
              </Grid>
            </Grid> 
          </div>
          <footer style={{background:'#000', margin:'0px'}} className="footer">
            <Grid container >
              <Grid item md={3} >
                <div style={{marginTop:'30px', marginBottom:'30px'}}>
                <img src={AH_footer_logo} alt="footer" style={{width:'250px'}} />
                </div>
              </Grid>
              <Grid item md={3}>
                <div style={{color:'#fff', marginTop:'30px', marginBottom:'30px'}}>
                  <h2 className="healthy_cashews">FOLLOW US ON</h2>
                  <img src={facebook} alt="facebook" style={{width:'35px', paddingRight:'8px'}} />
                  <img src={instagram} alt="instagram" style={{width:'35px'}}/>
                  <p className="sailing_para">
                  © Asian Harvest LLP  2020 all rights reserved
                  designed by Barva digital agency.
                  </p>
                </div>
              </Grid>
              <Grid item md={6}>
                <div style={{marginTop:'100px',color:'#bdf289', marginRight:'35px', float:'right' }}>
                <img src={harvestingHealthiness} alt="harvesting" />
                </div>
              </Grid>
            </Grid>
          </footer>
        </div>
      </BrowserView>
      {isMobile ? 
        <Fragment>
          <div className="app">
          <div className="fab-container-mobile">
            <div className="fab-icon-holder">
              <p style={{position:'relative', top:'-25px', marginLeft:'5px', marginRight:'5px'}} className="sailing_para">
              <a style={{color:'#fff', textDecoration:'none'}} href="https://api.whatsapp.com/send?phone=919526750675&text=Hello,%20I%20would%20like%20to%20know%20about%20your%20products." target="_blank">
              <WhatsAppIcon size="sm" style={{position:'relative', top:'7px' , marginRight:'10px'}} /> 
              How can I help you ? 
              </a>
              </p>
            </div>
            </div>
          <Grid container>
            <Grid item xs={12} align="center" >
              <img src={logo} alt="shabe" width={250} style={{marginTop:"10px"}} />
            </Grid>
          </Grid>
          <Grid container style={{marginBottom:'250px'}}> 
            <Grid item xs={12} style={{position:"relative"}} >
              <div align="center" >
                <img src={ah_banner_gradient} alt="banner3" width="400" style={{position:"absolute", right:'7px'}} className="animate__animated animate__bounceIn" />
                <img src={AH_BANNER_LEAVES} alt="leaves" width="400" style={{position: 'absolute', right:'7px'}} className="animate__animated animate__bounceInDown" />
                <img src={banner_sky} alt="sky" width="400" style={{position:'absolute', right:'7px'}}  className="animate__animated animate__backInUp" />
                <img src={cashewBack} alt="cashew_back" width="400" style={{position: 'absolute', right:'7px'}} className="animate__animated animate__backInUp" />
                <img src={cashewFront} alt="cashew_front" width="400" style={{position:'absolute', right:'7px'}} className="animate__animated animate__backInDown" />
                <img src={nuts} alt="nuts" width="400" style={{ position:'absolute', right:'7px'}} className="animate__animated animate__bounceInUp" />
              </div>
            </Grid>
          </Grid>
          <Grid container style={{borderBottom:'1px solid #bdf289 '}}>
            <Grid item xs={12} >
              <h1 style={{fontSize:'60px', position:'relative', top:'62px', marginLeft:'14%' }} className="animate__animated animate__bounceInLeft real_cashews" >
                REAL
                <br/>
                <span style={{position:'relative', top:'-30px'}} >CASHEWS</span><br/>
                <span style={{fontWeight:'900', position:'relative', top:'-50px'}} className="not_made" > 
                <span >ARE NOT </span> <br/>
                <span style={{position:'relative', top:'-30px'}} >MADE.</span>
                </span>
              </h1>
            </Grid>
          </Grid>
          <Grid container style={{paddingBottom:'15px'}}>
            <Grid item xs={12}>
              <div id="#about" style={{marginLeft:'10px', borderBottom:'1px solid #bdf289'}} >
                <h1  style={{fontWeight:'900', fontSize:'60px' }} className="about_us" id="aboutus" >
                  ABOUT US.
                </h1>
                <h2 style={{ fontSize:'20px'}} className="healthy_cashews">
                  It’s not about just a Cashew, it’s all<br/>
                  <span>about <span style={{color:'#1aaa4e'}}>healthy cashews.!</span></span>
                </h2>
                <p style={{lineHeight:"1.5", fontSize:'20px', marginRight:'17px'}} className="sailing_para">
                  Sailing from Kollam, the eponymous city, the cashew capital of world  exporting Lakhs of tonnes to USA, Japan, Saudi Arabia etc we marked our presence two decades back. We understood that our people,
                  despite being in a cashew hub are not getting the export quality
                  premium Cashew nuts. So they went for what was cheap.
                </p>
                <p style={{lineHeight:'1.5', fontSize:'20px', marginRight:'17px'}} className="sailing_para">
                  So we decided to serve our people the premium healthy nuts for what they can afford. We will serve you only the best. We value your Health as we know for sure that your health is our wealth.
                </p>
                <p style={{color:'#1aaa4e', fontSize:'20px'}} className="sailing_para">
                  <strong>Harvest</strong>
                </p>
              </div>
            </Grid>
          </Grid>
          <Grid container style={{borderBottom:'1px solid #bdf289'}}>
            <Grid item xs={12} style={{margin:"10px"}}>
              <h1  style={{fontSize:'60px', fontWeight:'600'}} id="products" className="about_us">
                Our Healthy<br/> 
                <span>Product.</span>
              </h1>
            </Grid>
            <Grid item xs={12} style={{marginLeft:'10px'}}>
              <h2  style={{textTransform:"uppercase", fontWeight:'600'}} className="healthy_cashews"> It’s really hard to break a Cashew from it’s shell <br/> But now We made it easy for you.</h2>
            </Grid>
          </Grid>
          <Grid container >
            <Grid item xs={12}> 
              <ReactPlayer 
                width="100%"
                height="100%"
                url="https://www.facebook.com/412824289509386/videos/2912907732367114"asian
              /> 
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12} style={{margin:'10px'}}>
              <p style={{fontSize:'24px'}} className="healthy_cashews">
                We presents to you an alternative to the harmful junk foods that make you sick day by day. Lets say no to that and join the Asian Harvest Family for the change.
              </p>
              <p style={{fontSize:'24px'}} className="healthy_cashews">
                We offer you more than what we take from you. Because we need
                a healthy and thoughtful world.
              </p>
            </Grid>
          </Grid>
          <Grid container >
              <Grid item xs={12}>
                <div className="slide-container">
                  <Slide>
                    <div className="each-slide">
                      <div style={{'backgroundImage': `url(${slide1})`, width:'100vw', height:'100vh', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
                      </div>
                    </div>
                    <div className="each-slide" >
                      <div style={{'backgroundImage': `url(${slide2})`, width:'100vw', height:'100vh', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
                      </div>
                    </div>
                    <div className="each-slide">
                      <div style={{'backgroundImage': `url(${slide3})`, width:'100vw', height:'100vh', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
                      </div>
                    </div>
                  </Slide>
                </div>
              </Grid>
            </Grid>
          <Grid container>
            <Grid item xs={12} style={{marginLeft:'10px'}}>
              <h1 align="left" style={{fontSize:'60px', fontWeight:'600'}} className="about_us">
                CONTACT US.
              </h1>
              <div>
                <h2 className="healthy_cashews">ASIAN HARVEST LLP</h2>
                <p style={{fontSize:'24px'}} className="sailing_para">Chathinamkulam, Chandanathope,</p>
                <p style={{fontSize:'24px'}} className="sailing_para">Kollam - 14, Kerala, India.</p>
                <p style={{fontSize:'24px'}} className="sailing_para"><a href="mailto:mail@asianharvest.in" target="_blank" style={{textDecoration:"none", color:'#000'}}><strong>mail@asianharvest.in</strong></a></p>
              </div>
              <div>
                <h2 className="healthy_cashews">PLEASE GET IN TOUCH VIA PHONE:</h2>
                <p style={{fontSize:'24px'}} className="sailing_para"><strong>+91 9526 750 675</strong></p>
              </div>
              <form className="form-mobile" style={{marginTop:'40px'}}>
                <div className="form__group">
                  <label for="name" class="form__label sailing_para">Name <span style={{color:'#a0a0a0', fontWeight:"100"}}>Required</span></label>
                  <input type="text" class="form__input"  id="name" required /> 
                </div>
                <div className="form__group">
                  <label for="email" class="form__label sailing_para">Email <span style={{color:'#a0a0a0', fontWeight:"100"}} >Required</span></label>
                  <input type="text" class="form__input"  id="email" required /> 
                </div>
                <div className="form__group">
                  <label for="subject" class="form__label sailing_para">Subject</label>
                  <input type="text" class="form__input"  id="subject"  /> 
                </div>
                <div className="form__group">
                  <label for="message" class="form__label sailing_para">Message <span style={{color:'#a0a0a0', fontWeight:"100"}}>Required</span></label>
                  <textarea type="" class="form__input"  id="message"  row="10" /> 
                </div>
                <div class="form__group" style={{marginTop:'20px'}}>
                  <button class="btn btn--black healthy_cashews">Submit</button>
                </div>
              </form>
            </Grid>  
          </Grid>
        </div>
        <footer style={{background:'#000', margin:'0px', marginTop:'10px'}} className="footer">
          <Grid container >
            <Grid item xs={12}  align="center">
              <div style={{marginTop:'50px',marginBottom:'15px'}} >
                <img src={AH_footer_logo} alt="footer" style={{width:'250px'}} />
              </div>
            </Grid>
            <Grid item xs={12} style={{marginLeft:'20px', marginTop:'15px'}}>
              <div style={{color:'#fff', marginTop:'30px'}}>
                <h2 className="healthy_cashews">FOLLOW US ON</h2>
                <img src={facebook} alt="facebook" style={{width:'35px', paddingRight:'8px'}} />
                <img src={instagram} alt="instagram" style={{width:'35px'}}/>
                <p className="sailing_para">
                  © Asian Harvest LLP  2020 all rights reserved
                  designed by Barva digital agency.
                </p>
              </div>
              </Grid>
              <Grid item xs={12} style={{marginLeft:'20px'}}>
                <div style={{marginTop:'50px',color:'#bdf289', marginRight:'35px', marginBottom:'50px' }}>
                <img src={harvestingHealthiness} alt="harvesting" />
                </div>
              </Grid>
            </Grid>
          </footer>
        </Fragment>
        :null
      }
      </Fragment>
      
      
    );
  }
}
export default App;