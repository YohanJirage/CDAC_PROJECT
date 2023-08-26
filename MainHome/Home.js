import "../script.js";

import "../style.css";

import images from "../images/index.js";

import video from "../images/about-vid.mp4";

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
      <section className="home" id="home">
        <div>
          <section
            className="swiper-slide slide"
            style={{
              background: `url(${images["home-slide-1.jpg"]}) no-repeat`,
            }}
          >
            <div className="content">
              <h3>we provide the best service</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur beatae iusto pariatur laborum magnam eos!
              </p>
              <a href="#about" className="btnn">
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
            <div className="content">
              <h3>making dreams come to life</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur beatae iusto pariatur laborum magnam eos!
              </p>
              <a href="#about" className="btnn">
                get started
              </a>
            </div>
          </section>
        </div>

        <div>
          <section
            className="swiper-slide slide"
            style={{
              background: `url(${images["home-slide-3.jpg"]}) no-repeat`,
            }}
          >
            <div className="content">
              <h3>from concept to creation</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Aspernatur beatae iusto pariatur laborum magnam eos!
              </p>
              <a href="#about" className="btnn">
                get started
              </a>
            </div>
          </section>
        </div>

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </section>

      <section className="about" id="about">
        <h1 className="heading"> about us </h1>

        <div className="row">
          <div className="video">
            <video src={video} play loop muted autoPlay volume={0}></video>
          </div>

          <div className="content">
            <h3>We will provide you the best work which you dreamt for!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et
              vero mollitia nemo corporis consequatur aspernatur distinctio
              dignissimos velit nam.
            </p>
            <a href="#services" className="btnn">
              read more
            </a>
          </div>
        </div>

        <div className="box-container">
          <div class="box">
            <h3>10+</h3>
            <p>years of experience</p>
          </div>

          <div className="box">
            <h3>1500+</h3>
            <p>project completed</p>
          </div>

          <div className="box">
            <h3>790+</h3>
            <p>satiesfied clients</p>
          </div>

          <div className="box">
            <h3>450+</h3>
            <p>active workers</p>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <h1 className="heading"> our services </h1>

        <div className="box-container">
          <div className="box">
            <img src={images["service-1.png"]} alt="" />
            <h3>building construction</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              necessitatibus.
            </p>
          </div>

          <div className="box">
            <img src={images["service-2.png"]} alt="" />
            <h3>house renovation</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              necessitatibus.
            </p>
          </div>

          <div className="box">
            <img src={images["service-3.png"]} alt="" />
            <h3>architechture design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              necessitatibus.
            </p>
          </div>

          <div className="box">
            <img src={images["service-4.png"]} alt="" />
            <h3>material supply</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              necessitatibus.
            </p>
          </div>

          <div className="box">
            <img src={images["service-5.png"]} alt="" />
            <h3>construction consultant</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              necessitatibus.
            </p>
          </div>

          <div className="box">
            <img src={images["service-6.png"]} alt="" />
            <h3>interior design</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              necessitatibus.
            </p>
          </div>

          <div className="box">
            <img src={images["service-7.png"]} alt="" />
            <h3>building maintenance</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              necessitatibus.
            </p>
          </div>

          <div className="box">
            <img src={images["service-8.png"]} alt="" />
            <h3>building renovation</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
              necessitatibus.
            </p>
          </div>
        </div>
      </section>

      <section className="projects" id="projects">
        <h1 className="heading"> our projects </h1>

        <div className="box-container">
          <a href={images["project-1.jpg"]} className="box">
            <div className="image">
              <img src={images["project-1.jpg"]} alt="" />
            </div>
            <div className="content">
              <div className="info">
                <h3>dream home</h3>
                <p>construction, design</p>
              </div>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </a>

          <a href={images["project-2.jpg"]} className="box">
            <div className="image">
              <img src={images["project-2.jpg"]} alt="" />
            </div>
            <div class="content">
              <div class="info">
                <h3>dream home</h3>
                <p>construction, design</p>
              </div>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </a>

          <a href={images["project-3.jpg"]} className="box">
            <div className="image">
              <img src={images["project-3.jpg"]} alt="" />
            </div>
            <div className="content">
              <div className="info">
                <h3>dream home</h3>
                <p>construction, design</p>
              </div>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </a>

          <a href={images["project-4.jpg"]} className="box">
            <div className="image">
              <img src={images["project-4.jpg"]} alt="" />
            </div>
            <div className="content">
              <div className="info">
                <h3>dream home</h3>
                <p>construction, design</p>
              </div>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </a>

          <a href={images["project-5.jpg"]} className="box">
            <div className="image">
              <img src={images["project-5.jpg"]} alt="" />
            </div>
            <div className="content">
              <div className="info">
                <h3>dream home</h3>
                <p>construction, design</p>
              </div>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </a>

          <a href={images["project-6.jpg"]} className="box">
            <div className="image">
              <img src={images["project-6.jpg"]} alt="" />
            </div>
            <div className="content">
              <div className="info">
                <h3>dream home</h3>
                <p>construction, design</p>
              </div>
              <FontAwesomeIcon
                width={100}
                height={"100%"}
                lassName="white-plus"
                icon={faPlus}
              />
            </div>
          </a>
        </div>
      </section>

      <section className="reviews">
        <h1 className="heading"> clients reviews </h1>

        <div className="swiper reviews-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                unde suscipit quis consequuntur, tempora corporis ex molestias
                dignissimos in cumque sunt ducimus voluptate inventore harum
                earum rem aperiam vel modi?
              </p>
              <div className="user">
                <img src={images["pic-1.png"]} alt="" />
                <div className="info">
                  <h3>john deo</h3>
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide slide">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                unde suscipit quis consequuntur, tempora corporis ex molestias
                dignissimos in cumque sunt ducimus voluptate inventore harum
                earum rem aperiam vel modi?
              </p>
              <div className="user">
                <img src={images["pic-2.png"]} alt="" />
                <div className="info">
                  <h3>john deo</h3>
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide slide">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                unde suscipit quis consequuntur, tempora corporis ex molestias
                dignissimos in cumque sunt ducimus voluptate inventore harum
                earum rem aperiam vel modi?
              </p>
              <div className="user">
                <img src={images["pic-3.png"]} alt="" />
                <div className="info">
                  <h3>john deo</h3>
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide slide">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                unde suscipit quis consequuntur, tempora corporis ex molestias
                dignissimos in cumque sunt ducimus voluptate inventore harum
                earum rem aperiam vel modi?
              </p>
              <div className="user">
                <img src={images["pic-4.png"]} alt="" />
                <div className="info">
                  <h3>john deo</h3>
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide slide">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                unde suscipit quis consequuntur, tempora corporis ex molestias
                dignissimos in cumque sunt ducimus voluptate inventore harum
                earum rem aperiam vel modi?
              </p>
              <div className="user">
                <img src={images["pic-5.png"]} alt="" />
                <div className="info">
                  <h3>john deo</h3>
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-slide slide">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
                unde suscipit quis consequuntur, tempora corporis ex molestias
                dignissimos in cumque sunt ducimus voluptate inventore harum
                earum rem aperiam vel modi?
              </p>
              <div className="user">
                <img src={images["pic-6.png"]} alt="" />
                <div className="info">
                  <h3>john deo</h3>
                  <div className="stars">
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                    <FontAwesomeIcon icon={faStar} className="golden-star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h1 className="heading"> contact us </h1>

        <div className="row">
          <iframe
            className="map"
            width="500"
            height="600"
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Kolhapur+(BuildMart)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/population/">Find Population on Map</a>
          </iframe>

          <form action="" method="" width="500" height="300">
            <h3>get in touch</h3>
            <input type="text" placeholder="name" className="box" />
            <input type="email" placeholder="email" className="box" />
            <input type="number" placeholder="phone" className="box" />
            <textarea
              name=""
              placeholder="message"
              className="box"
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <input type="submit" value="send message" className="btnn" />
          </form>
        </div>
      </section>

      <section className="blogs" id="blogs">
        <h1 className="heading"> our blogs </h1>

        <div className="swiper blogs-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide slide">
              <div className="image">
                <img src={images["blog-1.jpg"]} alt="" />
              </div>
              <div className="content">
                <h3>blog title goes here</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Assumenda, nobis!
                </p>
                <a href="#" className="btnn">
                  read more
                </a>
              </div>
            </div>

            <div className="swiper-slide slide">
              <div className="image">
                <img src={images["blog-2.jpg"]} alt="" />
              </div>
              <div className="content">
                <h3>blog title goes here</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Assumenda, nobis!
                </p>
                <a href="#" className="btnn">
                  read more
                </a>
              </div>
            </div>

            <div className="swiper-slide slide">
              <div className="image">
                <img src={images["blog-3.jpg"]} alt="" />
              </div>
              <div className="content">
                <h3>blog title goes here</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Assumenda, nobis!
                </p>
                <a href="#" className="btnn">
                  read more
                </a>
              </div>
            </div>

            <div className="swiper-slide slide">
              <div className="image">
                <img src={images["blog-4.jpg"]} alt="" />
              </div>
              <div className="content">
                <h3>blog title goes here</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Assumenda, nobis!
                </p>
                <a href="#" className="btnn">
                  read more
                </a>
              </div>
            </div>

            <div className="swiper-slide slide">
              <div className="image">
                <img src={images["blog-5.jpg"]} alt="" />
              </div>
              <div className="content">
                <h3>blog title goes here</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Assumenda, nobis!
                </p>
                <a href="#" className="btnn">
                  read more
                </a>
              </div>
            </div>

            <div className="swiper-slide slide">
              <div className="image">
                <img src={images["blog-6.jpg"]} alt="" />
              </div>
              <div className="content">
                <h3>blog title goes here</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Assumenda, nobis!
                </p>
                <a href="#" className="btnn">
                  read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
