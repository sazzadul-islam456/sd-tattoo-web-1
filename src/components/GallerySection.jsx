import React, { useState } from "react";
import { galleryData } from "../data";
import { PhotoAlbum } from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { FaArrowRight } from "react-icons/fa";

const GallerySection = () => {
  const [index, setIndex] = useState(-1);
  const { title, images } = galleryData;

  const slides = images.map(({ original, width, height }) => ({
    src: original,
    width,
    height,
  }));

  const handlePhotoClick = (event, photo, index) => {
    setIndex(index);
  };

  return (
    <motion.section
      variants={fadeIn('up')}
      initial="hidden"
      animate="show"
      className="bg-[#f9f9f9] section relative mt-[40px] lg:mt-0"
    >
      <div className="container mx-auto">
        <motion.h2 
          variants={fadeIn('up')} 
          className="h2 max-w-[370px] lg:mb-20"
        >
          {title}
        </motion.h2>
      </div> 
      <motion.div 
        variants={fadeIn('up')} 
        className="mb-8 lg:mb-20"
      >
        <PhotoAlbum
          onClick={handlePhotoClick}
          layout="rows"
          photos={images}
        />
        <Lightbox
          slides={slides}
          styles={{ container: { backgroundColor: "rgba(0,0,0,.9)" } }}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </motion.div>
      <motion.div 
        variants={fadeIn('up')} 
        className="flex justify-center"
      >
        <button className="btn btn-lg btn-dark">
          <div className="">
            <h2>View all <div className="text-xl py-2 px-5"><FaArrowRight /></div></h2>
          </div>
        </button>
      </motion.div>
    </motion.section>
  );
};

export default GallerySection;
