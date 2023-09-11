"use client";

import React from "react";
import Image from "next/image";
import profile_pic from "../../assets/profile_picture.png";
import normal_star from "../../../public/normal.svg";
import three_star from "../../../public/three.svg";
import small_star from "../../../public/small.svg";
import { BsArrowDown } from "react-icons/bs";
// import scroll_arrow from "../../../public/Arrow.svg"
import { TypeAnimation } from "react-type-animation";
import { Monomaniac_One, Vollkorn, Convergence } from "next/font/google";
import "animate.css";
// import { gsap } from "gsap";
import "./Headline.css";

const headlineFont = Monomaniac_One({
  subsets: ["latin"],
  weight: "400",
});

const headlineDesc = Vollkorn({
  subsets: ["latin"],
  weight: "400",
});

const conv = Convergence({
  subsets: ["latin"],
  weight: "400",
});

function Headline() {
  // React.useEffect(() => {

  // }, [])

  return (
    <div className="headline-container d-flex justify-center">
      <div className="d-flex justify-center main-container align-items-center position-relative">
        <Image
          className={`position-absolute star-top star-glow`}
          src={small_star}
          alt="small-star"
        />
        <Image
          className={`position-absolute star-left star-glow`}
          src={normal_star}
          alt="normal-star"
        />
        <Image
          className={`position-absolute star-bottom star-glow`}
          src={small_star}
          alt="small-star"
        />
        <Image
          className={`position-absolute star-right star-glow`}
          src={three_star}
          alt="three-star"
        />
        <div className="main-headline d-flex column-gap-4 justify-center align-items-center ">
          <Image
            className="profile-pic img-fluid"
            src={profile_pic}
            alt="headline-image"
          />
          <div className="tagline-container d-flex flex-column justify-center gap-2">
            <h1
              className={`${headlineFont.className} headline animate__bounceIn animate__repeat-2`}
            >
              Frontend Developer
            </h1>
            <p className={`${headlineDesc.className} headline-desc`}>
              <TypeAnimation
                preRenderFirstString={false}
                sequence={[
                  `I code beautifully simple things and I love what I do.`,
                  2000,
                  ``,
                  500,
                  // `I code beautifully simple things and I love to learn human behavior.`,
                  // 3000,
                ]}
                speed={30}
                repeat={Infinity}
                deletionSpeed={65}

                // omitDeletionAnimation={true}
              />
              {/* I code beautifully simple things and I love what I do. */}
            </p>
          </div>
        </div>
        <div className="d-flex keep-scroll-container position-absolute bottom-0 justify-center">
          <div className={`arrow-down position-relative`}>
            <BsArrowDown className={`keep-scroll-icon`} />
            {/* <Image className={`.keep-scroll-icon`} src={scroll_arrow} alt="arrow-scroll-down" /> */}
          </div>
          <span className={`keep-scroll-text ${conv.className}`}>
            Keep Scrolling
          </span>
        </div>
      </div>
    </div>
  );
}

export default Headline;
