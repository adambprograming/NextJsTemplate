'use client'
// Styles
import styles from './carousel.module.scss';
// Public & Assets

// React/Next Functions

// Context & Actions

// Componenets

/*
INSTRUCTIONS

*/

const CarouselItem = ({children, active, height}) => {
    return (
        <div onClick={() => {console.log(styles[active])}} className={`${styles.carouselItem} ${styles[active]}`} style={{height: `${height}`}}>
            {children}
        </div>
    );
}

export default CarouselItem;