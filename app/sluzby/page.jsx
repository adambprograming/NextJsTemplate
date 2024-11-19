// Styles
import styles from "./page.module.scss";
// Public & Assets

// React/Next Functions

// Context & Actions

// Componenets
import InteractiveChooser from "@/components/interactive-chooser/interactive-chooser.component";
import { FlipCard } from "@/components/card/card.component";

const ServicesPage = () => {
  return (
    <main className={styles.main}>
      <section className={`${styles.chooser}`}>
        <InteractiveChooser />
      </section>
      <section className={`${styles.benefits}`}>
        <FlipCard width="200px" height="200px" bgColor="" flippedContent={<>XDDD</>}>Výkon</FlipCard>
        <FlipCard width="200px" height="200px" bgColor="" flippedContent={<>XDDD</>}>Dostupnost</FlipCard>
        <FlipCard width="200px" height="200px" bgColor="" flippedContent={<>XDDD</>}>Responsivita</FlipCard>
        <FlipCard width="200px" height="200px" bgColor="" flippedContent={<>XDDD</>}>SEO</FlipCard>
        <FlipCard width="200px" height="200px" bgColor="" flippedContent={<>XDDD</>}>Autentičnost</FlipCard>
        <FlipCard width="200px" height="200px" bgColor="" flippedContent={<>XDDD</>}>??</FlipCard>
      </section>
      <section className={`${styles.process}`}>

      </section>
      <section className={`${styles.cta}`}>

      </section>
      <section className={`${styles.checkAlso}`}>

      </section>
    </main>
  );
};

export default ServicesPage;
