import "../script.js";

import "../style.css";

import images from "../images/index.js";

import video from "../images/about-vid.mp4";
import { Carousel } from 'react-bootstrap';

// Importing ForntAwsome for icon and symbols
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faPlus } from "@fortawesome/free-solid-svg-icons";

import {
  faFacebookF as fabFacebookF,
  faTwitter as fabTwitter,
  faInstagram as fabInstagram,
  faLinkedin as fabLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faStar);

export default function Home() {
  return (
    <div>
{/* 
        <div> */}
            
            {/* <Carousel>
                <Carousel.Item data-interval="2000">
                    <img
                        className="d-block w-100 "
                        src={images["blog-10.jpg"]}
                        alt="Image 1"
                        object-fit="cover"

                    />
                </Carousel.Item>
                <Carousel.Item data-interval="2000">
                    <img
                        className="d-block w-100 "
                        src={images["home-slide-2.jpg"]}
                        alt="Image 2"
                        object-fit="cover"
                    />
                </Carousel.Item>
                <Carousel.Item data-interval="2000">
                    <img
                        className="d-block w-100"
                        src={images["blog-11.jpg"]}
                        alt="Image 3"
                        object-fit="cover"
                    />
                </Carousel.Item>
                <Carousel.Item data-interval="2000">
                    <img
                        className="d-block w-100 "
                        src={images["blog-9.jpg"]}
                        alt="Image 4"
                        object-fit="cover"
                    />
                </Carousel.Item>
            </Carousel>
            </div> */}











      {/* <section className="home" id="home">
        <div>
          <section
            className="swiper-slide slide"
            style={{
              background: `url(${images["home-slide-1.jpg"]}) no-repeat`,height:400,margin:5
            }}
          >
            <div className="content" style={{height:1000}}  >
              <h3 className="display-1">We provide the best service</h3>
              <p>
                We provide services like providing construction materials for individual customers as well as construction companies with affordable price
              </p>
              <a href="/login" className="btnn">
                get started
              </a>
            </div>
          </section>
        </div>
        <div>
          <section
            className="swiper-slide slide"
            style={{
              background: `url(${images["home-slide-2.jpg"]}) no-repeat`,
            }}
          >
            <div className="content" style={{height:1000}}  >
              <h3 className="display-3">making dreams come to life</h3>
              <p>
                We help you to build your dream home and ease your efforts to build it
              </p>
              {/* <a href="#about" className="btnn">
                get started
              </a> 
            </div>
          </section>
        </div>*/}

        <div>
          {/*<section
            className="swiper-slide slide"
            style={{
              background: `url(${images["home-slide-3.jpg"]}) no-repeat`,
            }}
          >
            <div className="content" style={{height:1000}}>
              <h3 className="display-3">from concept to creation</h3>
              <p>
              Building with vision, quality, and pride. Innovative renovation at your side. A once-in-a-lifetime project deserves timeless construction. Whatever your vision, we'll nail it for you!
              </p>
             <a href="#about" className="btnn">
                get started
              </a> 
            </div>
          </section> */}


              <div class="row">
                <div class="col-sm-4 mb-3 mb-sm-0">
                  <div class="card">
                  <img src={images["home-slide-1.jpg"]} style={{height:250}} class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Best services</h5>
                      <p class="card-text">We provide services like providing construction materials for individual customers as well as construction companies with affordable price</p>
                     
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="card">
                  <img src={images["Home1.jpeg"]} style={{height:250}} class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Dream home</h5>
                      <br/>
                      <p class="card-text">We help you to build your dream home <br/>and ease your efforts to build it</p>
                     
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="card">
                  <img src={images["home-slide-3.jpg"]} style={{height:250}} class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Our Priorities</h5>
                      <p class="card-text">Building with vision, quality, and pride. 
                                          Innovative renovation at your side. A once-in-a-lifetime project deserves timeless construction. 
                                          Whatever your vision, we'll nail it for you!
                      
                      </p>
                     
                    </div>
                  </div>
                </div>
              </div>



        </div>

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      {/* </section> */}

      

    

    

    </div>
  );
}
