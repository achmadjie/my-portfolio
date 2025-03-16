import React from "react";
import Image from "next/image";
import cor1 from "../../assets/wartalutim.jpg";
import cor2 from "../../assets/tin-dog.png";
import cor3 from "../../assets/cakery.png";
import cor4 from "../../assets/inagov.png";
// import cor5 from "../../assets/caro5.jpg";
// import wave_vector from '../../../public/wave.svg'
import Link from "next/link";

import { Convergence } from "next/font/google";
import styles from "./LatestProject.module.css";

const conv = Convergence({
  subsets: ["latin"],
  weight: ["400"],
});

// const imgCarousel = [
//   {
//     projectImage: "../../assets/caro1.jpg",
//     projectName: "one",
//     projectYear: 2023,
//   },
//   {
//     projectImage: "../../assets/caro2.jpg",
//     projectName: "two",
//     projectYear: 2023,
//   },
//   {
//     projectImage: "../../assets/caro3.jpg",
//     projectName: "three",
//     projectYear: 2023,
//   },
//   {
//     projectImage: "../../assets/caro4.jpg",
//     projectName: "four",
//     projectYear: 2023,
//   },
//   {
//     img5: "../../assets/caro5.jpg",
//     projectName: "five",
//     projectYear: 2023,
//   },
// ];

function LatestProject() {
  return (
    <div className={`${styles.project_container} position-relative`}>
      {/* <Image className={`${styles.background_vector} `} src={wave_vector} alt="wave-vector"/> */}
      <div className={`${styles.main_project} d-flex justify-center`}>
        <h2
          className={`${styles.project_heading} ${conv.className} position-absolute`}>
          Latest Projects
        </h2>
        <div
          className={`${styles.carousel_container} d-flex position-absolute ${conv.className}`}>
          <div className={`${styles.carousel_track} d-flex position-relative`}>
            <div className={`position-relative ${styles.carousel}`}>
              <Link href={"https://wartalutim-new-prototype.netlify.app/"}>
                <Image
                  className={`${styles.card}`}
                  src={cor1}
                  alt="carousel-image-1"
                />
              </Link>
              <div
                className={`${styles.project_desc} d-flex position-absolute`}>
                <h4>Wartalutim Website</h4>
                <h6>2023</h6>
              </div>
            </div>
            <div className={`position-relative ${styles.carousel}`}>
              <Link href={"https://tin-doggy.netlify.app/"}>
                <Image
                  className={`${styles.card}`}
                  src={cor2}
                  alt="carousel-image-2"
                />
              </Link>
              <div
                className={`${styles.project_desc} d-flex position-absolute`}>
                <h4>Tindog Website</h4>
                <h6>2023</h6>
              </div>
            </div>
            <div className={`position-relative ${styles.carousel}`}>
              <Link href={"https://genacakery.netlify.app/"}>
                <Image
                  className={`${styles.card}`}
                  src={cor3}
                  alt="carousel-image-3"
                />
              </Link>
              <div
                className={`${styles.project_desc} d-flex position-absolute`}>
                <h4>Gena&apos;s Cakery</h4>
                <h6>2022</h6>
              </div>
            </div>
            <div className={`position-relative ${styles.carousel}`}>
              <Image
                className={`${styles.card}`}
                src={cor4}
                alt="carousel-image-1"
              />
              <div
                className={`${styles.project_desc} d-flex position-absolute`}>
                <h4>INAgov Website</h4>
                <h6>2024</h6>
              </div>
            </div>
            {/* <div className={`position-relative ${styles.carousel}`}>
              <Image
                className={`${styles.card}`}
                src={cor5}
                alt="carousel-image-1"
              />
              <div
                className={`${styles.project_desc} d-flex position-absolute`}>
                <h4>One</h4>
                <h6>2023</h6>
              </div>
            </div> */}
            <div className={`position-relative ${styles.carousel}`}>
              <Link href={"https://wartalutim-new-prototype.netlify.app/"}>
                <Image
                  className={`${styles.card}`}
                  src={cor1}
                  alt="carousel-image-1"
                />
              </Link>
              <div
                className={`${styles.project_desc} d-flex position-absolute`}>
                <h4>Wartalutim Website</h4>
                <h6>2023</h6>
              </div>
            </div>
            <div className={`position-relative ${styles.carousel}`}>
              <Link href={"https://tin-doggy.netlify.app/"}>
                <Image
                  className={`${styles.card}`}
                  src={cor2}
                  alt="carousel-image-2"
                />
              </Link>
              <div
                className={`${styles.project_desc} d-flex position-absolute`}>
                <h4>Tindog Website</h4>
                <h6>2022</h6>
              </div>
            </div>
            <div className={`position-relative ${styles.carousel}`}>
              <Link href={"https://genacakery.netlify.app/"}>
                <Image
                  className={`${styles.card}`}
                  src={cor3}
                  alt="carousel-image-3"
                />
              </Link>
              <div
                className={`${styles.project_desc} d-flex position-absolute`}>
                <h4>Gena&apos;s Cakery</h4>
                <h6>2023</h6>
              </div>
            </div>
            <div className={`position-relative ${styles.carousel}`}>
              <Link href={"https://inagov.go.id/"}>
                <Image
                  className={`${styles.card}`}
                  src={cor4}
                  alt="carousel-image-4"
                />
              </Link>
              <div
                className={`${styles.project_desc} d-flex position-absolute`}>
                <h4>INAgov Website</h4>
                <h6>2024</h6>
              </div>
            </div>
            {/* <div className={`position-relative ${styles.carousel}`}>
              <Image
                className={`${styles.card}`}
                src={cor5}
                alt="carousel-image-1"
              />
              <div
                className={`${styles.project_desc} d-flex position-absolute`}
              >
                <h4>One</h4>
                <h6>2023</h6>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestProject;
