// Styles
import styles from "./page.module.scss";
// Public & Assets
import HeroImg from "@/public/hero.png";
import IconHtml from "../../public/techstack/html.svg";
import IconCss from "../../public/techstack/css.svg";
import IconSass from "../../public/techstack/scss.svg";
import IconJs from "../../public/techstack/js.svg";
import IconReact from "../../public/techstack/react.svg";
import IconNextjs from "../../public/techstack/nextjs.svg";
import IconGit from "../../public/techstack/git.svg";
import IconGithub from "../../public/techstack/github.svg";
import IconPython from "../../public/techstack/python.svg";
import IconFigma from "../../public/techstack/figma.svg";
// React/Next Functions
import Image from "next/image";
// Context & Actions

// Componenets
import { ShowcaseImg } from "@/components/showcase/showcase.component";

const Page = () => {
  const showcaseItems = [
    IconHtml,
    IconCss,
    IconSass,
    IconJs,
    IconReact,
    IconNextjs,
    IconGit,
    IconGithub,
    IconPython,
    IconFigma,
  ];
  return (
    <main className={styles.main}>
      <section className={`${styles.introduction}`}>
        <div className={`${styles.imgContainer}`}>
          <Image src={HeroImg} alt="portrait" />
        </div>
        <div className={`${styles.contentContainer}`}>
          <span>O MNĚ</span>
          <h1>
            Zdravím,
            <br />
            jsem <strong>webový</strong> vývojář
          </h1>
          <hr />
          <p>
            Adam Bartůšek specializuji se na moderní webové technologie. Nabízím
            komplexní služby vývoje webových stránek, e-shopů a webových
            aplikací, zaměřených na rychlost, funkčnost a uživatelskou
            přívětivost. Mojí prioritou je vytvořit řešení, která přesně
            odpovídají potřebám a cílům mých klientů.
          </p>
        </div>
      </section>
      <section className={`${styles.showcase}`}>
        <ShowcaseImg showcaseItems={showcaseItems} />
      </section>
      <section className={`${styles.specialization}`}>
        <span>O MNĚ</span>
        <h1>
          Zdravím,
          <br />
          jsem <strong>webový</strong> vývojář
        </h1>
        <hr />
        <p>
          Adam Bartůšek specializuji se na moderní webové technologie. Nabízím
          komplexní služby vývoje webových stránek, e-shopů a webových aplikací,
          zaměřených na rychlost, funkčnost a uživatelskou přívětivost. Mojí
          prioritou je vytvořit řešení, která přesně odpovídají potřebám a cílům
          mých klientů.
        </p>
      </section>
      <section className={`${styles.recommendation}`}>Section</section>
    </main>
  );
};

export default Page;
