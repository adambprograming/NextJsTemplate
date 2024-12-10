// Styles
import styles from "./page.module.scss";
// Public & Assets
import HeroImg from "@/public/hero.png";
import IconPerformance from "@/components/svgs/services-benefits-icons/icon-performance.component";
import IconResponsiveness from "@/components/svgs/services-benefits-icons/icon-responsiveness.component";
import IconSeo from "@/components/svgs/services-benefits-icons/icon-seo.component";
import IconAuthenticity from "@/components/svgs/services-benefits-icons/icon-authenticity.component";
import Icon1 from "@/components/svgs/number-icons/icon-1.component";
import Icon2 from "@/components/svgs/number-icons/icon-2.component";
import Icon3 from "@/components/svgs/number-icons/icon-3.component";
import Icon4 from "@/components/svgs/number-icons/icon-4.component";
// React/Next Functions
import Image from "next/image";

// Context & Actions

// Componenets
import InteractiveChooser from "@/components/interactive-chooser/interactive-chooser.component";
import { FlipCard } from "@/components/card/card.component";
import Btn from "@/components/btn/btn.component";

const ServicesPage = () => {
  return (
    <main className={styles.main}>
      <section className={`${styles.chooser}`}>
        <InteractiveChooser />
      </section>
      <section className={`${styles.benefits}`}>
        <div className={`${styles.titleContainer}`}>
          <span>STANDARDY</span>
          <h1>
            Co <strong>splňuje</strong> každý můj projekt?
          </h1>
          <hr />
        </div>
        <div className={`${styles.contentContainer}`}>
          <FlipCard
            width="clamp(180px, 20vw, 200px)"
            height="clamp(180px, 20vw, 200px)"
            boxShadow=""
            borderSize="0"
            borderRadius="25px"
            bgColor="rgb(from var(--color-secondary) r g b / 0.3)"
            bgHoverColor="rgb(from var(--color-primary) r g b / 1)"
            flippedContent={
              <p className={`${styles.flipedContent}`}>
                Vaše webové stránky budou bleskově rychlé a snadno zvládnou vysoký
                provoz.
              </p>
            }
            hoverEffect="sticker"
          >
            <div className={`${styles.frontContent}`}>
              <IconPerformance alt="x" />
              <span className={`${styles.frontTitle}`}>Výkon</span>
            </div>
          </FlipCard>
          <FlipCard
            width="clamp(180px, 20vw, 200px)"
            height="clamp(180px, 20vw, 200px)"
            boxShadow=""
            borderSize="0"
            borderRadius="25px"
            bgColor="rgb(from var(--color-secondary) r g b / 0.3)"
            bgHoverColor="rgb(from var(--color-primary) r g b / 1)"
            flippedContent={
              <p className={`${styles.flipedContent}`}>
                Moderní design, který se přizpůsobí každému zařízení.
              </p>
            }
            hoverEffect="sticker"
          >
            <div className={`${styles.frontContent}`}>
              <IconResponsiveness alt="x" />
              <span className={`${styles.frontTitle}`}>Responsivita</span>
            </div>
          </FlipCard>
          <FlipCard
            width="clamp(180px, 20vw, 200px)"
            height="clamp(180px, 20vw, 200px)"
            boxShadow=""
            borderSize="0"
            borderRadius="25px"
            bgColor="rgb(from var(--color-secondary) r g b / 0.3)"
            bgHoverColor="rgb(from var(--color-primary) r g b / 1)"
            flippedContent={
              <p className={`${styles.flipedContent}`}>
                Pomůžeme vám vyniknout ve vyhledávačích a přilákat více zákazníků.
              </p>
            }
            hoverEffect="sticker"
          >
            <div className={`${styles.frontContent}`}>
              <IconSeo alt="x" />
              <span className={`${styles.frontTitle}`}>SEO</span>
            </div>
          </FlipCard>
          <FlipCard
            width="clamp(180px, 20vw, 200px)"
            height="clamp(180px, 20vw, 200px)"
            boxShadow=""
            borderSize="0"
            borderRadius="25px"
            bgColor="rgb(from var(--color-secondary) r g b / 0.3)"
            bgHoverColor="rgb(from var(--color-primary) r g b / 1)"
            flippedContent={
              <p className={`${styles.flipedContent}`}>
                Weby vytvořené na míru vašim potřebám a značce.
              </p>
            }
            hoverEffect="sticker"
          >
            <div className={`${styles.frontContent}`}>
              <IconAuthenticity alt="x" />
              <span className={`${styles.frontTitle}`}>Autentičnost</span>
            </div>
          </FlipCard>
        </div>
      </section>
      <section className={`${styles.process}`}>
        <div className={`${styles.titleContainer}`}>
          <span>PRŮBĚH</span>
          <h1>
            Jak bude naše <strong>spolupráce</strong> probíhat?
          </h1>
          <hr />
        </div>
        <ul>
          <li>
            <Icon1 />
            <div>
              <h6>Společně najdeme směr</h6>
              <hr />
              <p>
                Na první schůzce společně zjistíme, co přesně potřebujete.
                Nemusíte mít předem jasnou představu - společně najdeme to
                nejlepší řešení.
              </p>
            </div>
          </li>
          <li>
            <Icon2 />
            <div>
              <h6>Postavím Vaše řešení</h6>
              <hr />
              <p>
                Navrhnu a vytvořím projekt, která bude rychlý, responzivní a
                bude přesně odrážet váš brand.
              </p>
            </div>
          </li>
          <li>
            <Icon3 />
            <div>
              <h6>Doladíme vše k dokonalosti</h6>
              <hr />
              <p>
                Společně projdeme hotový projekt, získám od vás zpětnou vazbu a
                doupravím vše podle vašich představ.
              </p>
            </div>
          </li>
          <li>
            <Icon4 />
            <div>
              <h6>Postarám se i po spuštění</h6>
              <hr />
              <p>
                Po spuštění webu se postarám o aktualizace, údržbu a dlouhodobou
                podporu, abyste se mohli soustředit na své podnikání.
              </p>
            </div>
          </li>
        </ul>
      </section>
      <section className={`${styles.cta}`}>
        <div className={`${styles.imgContainer}`}>
          <Image src={HeroImg} alt="portrait" />
        </div>
        <div className={`${styles.contentContainer}`}>
          <div className={`${styles.titleContainer}`}>
            <span>SPOLUPRÁCE</span>
            <h1>
              Připraven realizovat <strong>Váš</strong> projekt?
            </h1>
            <hr />
          </div>
          <div className={`${styles.textContainer}`}>
            <p>
              Pokud hledáte webového vývojáře, který Vám vytvoří autentický, moderní
              a výkonný web na míru, jste na správném místě. Společně vytvoříme
              řešení, které bude nejen funkční, ale také vynikat v konkurenci.
            </p>
          </div>
          <Btn
            href="/kontakt"
            bgColor="var(--color-primary)"
            textColor="var(--color-text-reverse)"
            borderSize="none"
            borderRadius="15px"
            hoverEffect="scaleForward"
            >
            Kontaktujte mě
          </Btn>
        </div>
      </section>
      {/* <section className={`${styles.checkAlso}`}></section> */}
    </main>
  );
};

export default ServicesPage;
