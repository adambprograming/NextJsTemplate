// Styles
import styles from './carousel.module.scss';
// Public & Assets

// React/Next Functions

// Context & Actions

// Componenets

/*
INSTRUCTIONS

*/

const CarouselItem = ({children, height}) => {

    return (
        <div className={styles.carouselItem} style={{height: `${height}`}}>
            {children}
        </div>
    );
}

export default CarouselItem;