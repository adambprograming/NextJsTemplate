// Styles
// import styles from "./page.module.scss";
// Public & Assets
import FlagOfCs from "../../public/flags/Flag_of_the_Czech_Republic.png";
// React/Next Functions

// Context

// Componenets
import HeroSection from "@/containers/hero/hero.container";
import Btn from "@/components/btn/btn.component";

export default function Home() {
  return (
    <main>
      <HeroSection variant="first" imgSrc={FlagOfCs} title="Cus" />
      {/* <Btn
        borderColor="black"
        borderRadius="0px"
        borderSize="2px"
        bgColor="transparent"
        backdropFilter="blur(4px)"
        bgHoverColor="var(--color-primary)"
        textHoverColor="var(--color-text-reverse)"
        hoverEffect="colorFillBottom"
        fontFamily="var(--font-secondary)"
      >
        Klikni na me
      </Btn>
      <Btn
        href="https://ui-patterns.com/patterns"
        borderColor="black"
        borderRadius="15px"
        borderSize="0px"
        paddingOfBtn="5px 10px"
        bgColor="var(--color-background)"
        bgHoverColor="var(--color-secondary)"
        filter="drop-shadow(0 0 5px var(--black-50))"
        hoverEffect="bgHover"
      >
        ClickMe
      </Btn> */}
    </main>
  );
}
