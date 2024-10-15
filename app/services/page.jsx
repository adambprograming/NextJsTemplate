// Styles
import styles from "./page.module.scss";
// Public & Assets

// React/Next Functions

// Context & Actions

// Componenets
import InteractiveChooser from "@/components/interactive-chooser/interactive-chooser.component";

const ServicesPage = () => {
  return (
    <main className={styles.main}>
      <InteractiveChooser />
    </main>
  );
};

export default ServicesPage;
