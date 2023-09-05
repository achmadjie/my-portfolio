import React from "react";
import { Convergence, Vollkorn } from "next/font/google";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsInstagram, BsGithub } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import snakeVector from "../../../public/snakes.svg";
import cubeVector from "../../../public/cubes.svg";
import "animate.css";
import blink from "../../../public/blink.svg";

import styles from "./Footer.module.css";

const conv = Convergence({
  subsets: ["latin"],
  weight: ["400"],
});

const vol = Vollkorn({
  subsets: ["latin"],
  weight: ["400"],
});

const Footer = () => {
  return (
    <div
      id="footer"
      className={`${styles.footer_section} position-relative d-flex flex-column align-items-center justify-center`}
    >
      <Image
        className={`position-absolute top-10 left-8 ${styles.cube_vector}`}
        src={cubeVector}
        alt="Cube-Vector"
      />
      <div
        className={`d-flex justify-center align-items-center position-relative ${styles.blink_title}`}
      >
        <div className={`${styles.blink_container} position-absolute`}>
          <Image
            className={`${styles.blink_img}`}
            src={blink}
            alt="blink-image"
          />
        </div>
        <h2 className={`${styles.footer_title} ${conv.className}`}>
          Get In Touch With Me
        </h2>
      </div>
      <div
        className={`${styles.footer_contact} ${vol.className} d-flex flex-column text-center`}
      >
        <span className={`${styles.contact_details}`}>
          <a href="mailto:achmdadjie@gmail.com">achmdadjie@gmail.com</a>
        </span>
        <span className={`${styles.contact_details}`}>
          <a href="https://goo.gl/maps/W3ZdLHtnfjVrZ4w96">Jakarta, Indonesia</a>
        </span>
      </div>
      <div className={`${styles.footer_socmed} d-flex flex-row`}>
        <Link href="https://www.facebook.com/achmadjieee">
          <FaFacebook className={`${styles.socmed_logo}`} />
        </Link>
        <Link href="https://www.instagram.com/achmadjie_">
          <BsInstagram className={`${styles.socmed_logo}`} />
        </Link>
        <Link href="https://www.linkedin.com/in/achmadjie">
          <FaLinkedin className={`${styles.socmed_logo}`} />
        </Link>
        <Link href="https://github.com/achmadjie">
          <BsGithub className={`${styles.socmed_logo}`} />
        </Link>
      </div>
      <div
        className={`${styles.copyright_section} ${conv.className} d-flex flex-column justify-center text-center position-absolute bottom-5`}
      >
        <span>©2023 Andi Achmad Adjie</span>
        <span>All Rights Reserved</span>
      </div>
      <Image
        className={`position-absolute bottom-0 right-0 ${styles.snake_vector}`}
        src={snakeVector}
        alt="Snake-Vector"
      />
    </div>
  );
};

export default Footer;
