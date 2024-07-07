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
import Card from "@/components/card/card.component";
import Btn from "@/components/btn/btn.component";

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
      <Card width="100px" backdropFilter="blur(4px)" bgColor="transparent" opacity={0.5} bgHoverColor="rgb(from var(--color-secondary) r g b / 0.1" hoverEffect="bgHover">
        
      </Card>
      <Btn bgColor="blue" bgHoverColor="red" hoverEffect="bgHover">xd</Btn>
    </main>
  );
};

export default ServicesPage;
