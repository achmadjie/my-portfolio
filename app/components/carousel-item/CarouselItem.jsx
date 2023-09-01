import React from "react";
import Image from "next/image";
import cor1 from "../../assets/caro1.jpg";
import data from "./CarouselData";
import styles from "./CarouselItem.module.css";

const imgCarousel = [
  {
    projectImage: "../../assets/caro1.jpg",
    projectName: "one",
    projectYear: 2023,
  },
  {
    projectImage: "../../assets/caro2.jpg",
    projectName: "two",
    projectYear: 2023,
  },
  {
    projectImage: "../../assets/caro3.jpg",
    projectName: "three",
    projectYear: 2023,
  },
  {
    projectImage: "../../assets/caro4.jpg",
    projectName: "four",
    projectYear: 2023,
  },
  {
    img5: "../../assets/caro5.jpg",
    projectName: "five",
    projectYear: 2023,
  },
];

const CarouselItem = (props) => {
  return (
    <div
      className={`${styles.carousel_container} d-flex gap-4 position-absolute `}
    >
      <div className={`position-relative ${styles.carousel}`}>
        <Image className={`${styles.card}`} src={this} alt="carousel-image-1" />
        <div className={`${styles.project_desc} d-flex position-absolute`}>
          <h4>{props.projectName}</h4>
          <h6>{props.projectYear}</h6>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;
