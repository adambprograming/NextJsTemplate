// Styles
import styles from "./page.module.scss";
// Public & Assets

// React/Next Functions

// Context & Actions

// Componenets
import Carousel from "@/components/carousel/carousel.component";
import CarouselItem from "@/components/carousel/carousel-item.component";
import Card from "@/components/card/card.component";
import Btn from "@/components/btn/btn.component";
import InteractiveChooser from "@/components/interactive-chooser/interactive-chooser.component";

const ServicesPage = () => {
  return (
    <main className={styles.main}>
      <InteractiveChooser />
    </main>
  );
};

export default ServicesPage;
