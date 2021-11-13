import React from 'react';
import Slider from "react-animated-slider";
import { Link } from 'react-router-dom';
import './Banner.css';


const content = [
  {
    heading1: "Winter",
    heading2: "Collections",
    image: "https://i.ibb.co/mGLL4tm/badreddine-farhi-GWGPu-Qc-XTE4-unsplash.jpg",
  },
  {
    heading1: "Exclusive",
    heading2: "Collections",
    image: "https://i.ibb.co/qRBq4vH/joe-hepburn-mo-Jv-G-1-Aw-MU-unsplash.jpg",
  },
  {
    heading1: "New",
    heading2: "Arrivals",
    image: "https://i.ibb.co/cNP8MJk/laurenz-heymann-PWLJC7f-Azkg-unsplash.jpg",
  },
];
const Banner = () => {
  return (
    <div>
      <Slider autoplay={3000}>
        {content.map((item, index) => (
          <div
            key={index}
            style={{ background: `url('${item.image}') no-repeat center center`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="text-start caption">
              <h1 className="banner-caption mb-4">
                <span>
                  {item.heading1}
                </span>
                <br />
                <span>
                  {item.heading2}
                </span>
              </h1>
              <Link to='/exploreCollection'><button className="banner-button">SHOP COLLECTION <i class="fas fa-arrow-right ms-1"></i></button></Link>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;