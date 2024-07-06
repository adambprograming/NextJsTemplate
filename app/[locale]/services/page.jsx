// Styles
import styles from "./page.module.scss";
// Public & Assets
import img from "../../../public/hero.png";
// React/Next Functions
import Image from "next/image";
import Link from "next/link";
// Context & Actions

// Componenets
import Carousel from "@/components/carousel/carousel.component";
import CarouselItem from "@/components/carousel/carousel-item.component";

const ServicesPage = () => {
  return (
    <main className={styles.main}>
      <Carousel>
        <CarouselItem>
          <Link href="/">
            <Image src={img} alt="x"></Image>
          </Link>
        </CarouselItem>
        <CarouselItem>
          <Image src={img} alt="x"></Image>
        </CarouselItem>
        <CarouselItem>
          <Image src={img} alt="x"></Image>
        </CarouselItem>
      </Carousel>
    </main>
  );
};

export default ServicesPage;
