"use client";
// Styles
import styles from "./page.module.scss";
// Public & Assets
import HeroImg from "@/public/hero.png";
// React/Next Functions

// Context

// Componenets
import HeroSection from "@/containers/hero/hero.container";

export default function Home() {
  return (
    <main className={`${styles.main}`}>
      <HeroSection imgSrc={HeroImg} />
    </main>
  );
}
