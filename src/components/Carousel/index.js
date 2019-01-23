import React from 'react';
import PropTypes from 'prop-types'

import { importAll, splitCamelCase } from '../../utilities/js'
import { CarouselProvider, Slider, Image, Slide, ButtonBack, ButtonNext, DotGroup, ButtonPlay } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import SliderImages from '../../Assets/Images/SliderImages/index'
import styles from './Carousel.module.css'

function Carousel(props) {

  const {
    title,
    variant,
    kind,
    ...restProps 
  } = props

  const AllImages = importAll(require.context('../../Assets/Images/SliderImages/', true, /\.(png|jpe?g|svg)$/));

  const Slides = SliderImages[variant].Images.map((image, index) =>
    <Slide 
      innerClassName={styles.Slide} 
      index={index}
      key={index}
      >
        <Image src={AllImages[image.SrcUrl]} alt={splitCamelCase(image.Text)} />
        <p className={styles.SlideText}>{splitCamelCase(image.Text)}</p>
    </Slide>
  );


  let SliderActions
  if (kind === "vertical") {
    SliderActions = (
      <div className={styles.VerticalSliderActions}>
        <DotGroup className={styles.Dots}/>
        <div className={styles.SliderControls}>
          <ButtonBack className={styles.Back} />
          <ButtonPlay 
            childrenPlaying="&#9632;" 
            childrenPaused="&#9654;" 
            className={styles.PlayPause} 
          />
          <ButtonNext className={styles.Next} />
        </div>
      </div>
    )
  } else {
    SliderActions = (
      <div className={styles.SliderActions}>
        <DotGroup className={styles.Dots}/>
        <div className={styles.SliderControls}>
          <ButtonBack className={styles.Back} />
          <ButtonPlay 
            childrenPlaying="&#9632;" 
            childrenPaused="&#9654;" 
            className={styles.PlayPause} 
          />
          <ButtonNext className={styles.Next} />
        </div>
      </div>
    )
  }
  
  // Trinary to define styles.Slider class
  // SliderClass = (kind = vertical) : VerticalSlider ? slider

  return (
    <div className={styles.Carousel}>
      <h3 className={styles.CarouselTitle}>{title}</h3>
      <CarouselProvider
        naturalSlideWidth={SliderImages[variant].width}
        naturalSlideHeight={SliderImages[variant].height}
        totalSlides={SliderImages[variant].Images.length}
        isPlaying
        interval='4000'
      >
        <Slider className={styles.Slider}>
          {Slides}
        </Slider>

        {SliderActions}
      </CarouselProvider>
    </div>
  )
}

Carousel.propTypes = {
  kind: PropTypes.string,
  title: PropTypes.string,
  variant: PropTypes.string.isRequired,
}

Carousel.defaultProps = {
  title: null,
  kind: 'horizontal'
}

export default Carousel
