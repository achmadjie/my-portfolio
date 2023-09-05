// "use client";

import React from "react";
import Image from "next/image";
import tornado from "../../../public/tornado.svg";
import scrib from "../../../public/Scribble.svg";
import smile_arrow from "../../../public/smile-arrow.svg";
// import { TypeAnimation } from "react-type-animation";
import { Vollkorn } from "next/font/google";
// import { gsap } from "gsap";
import styles from "./Description.module.css";

const descText = Vollkorn({
  subsets: ["latin"],
  weight: ["500"],
});

function Description() {
  return (
    <div
      id="desc" className={`${styles.desc_section} position-relative w-100 d-flex justify-center align-items-center`}
    >
      <Image
        className={`${styles.vector_left} ${styles.vector}`}
        src={tornado}
        alt="tornado-vector"
      />
      <div
        className={`${styles.desc_with_scrib} d-flex flex-column align-items-center`}
      >
        <div className={`${styles.desc_container} d-flex flex-column gap-4`}>
          <h2 className={`${descText.className} ${styles.heading_text}`}>
            Hi, <span className={`${styles.heading_name}`}>Andi&apos;s </span>
            here. Obviously!
          </h2>
          <p className={`${descText.className} ${styles.desc_text}`}>
            {/* <TypeAnimation
              sequence={[
                `Passionate about web development with a focus on frontend expertise. Proficient across diverse technologies and programming languages. Competent in crafting dynamic, responsive websites, leveraging frameworks like React.js and Bootstrap. Proven record of improving user satisfaction across multiple sites.
                
                For whatever reason it is you are here, welcome 😎`,
                6000,
                "",
              ]}
              speed={90}
              repeat={Infinity}
              // deletionSpeed={70}
              omitDeletionAnimation={true}
            /> */}
            Passionate about web development with a focus on frontend
            expertise. Proficient across diverse technologies and programming
            languages. Competent in crafting dynamic, responsive websites,
            leveraging frameworks like React.js and Bootstrap. Proven record of
            improving user satisfaction across multiple sites.
          </p>
          <p className={`${descText.className} ${styles.desc_text}`}></p>
        </div>
        <Image
          className={`${styles.scrib_vector}`}
          src={scrib}
          alt="scribble-vector"
        />
      </div>
      <Image
        className={`${styles.vector} ${styles.vector_right} `}
        src={smile_arrow}
        alt="smile-arrow-vector"
      />
    </div>
  );
}

export default Description;
