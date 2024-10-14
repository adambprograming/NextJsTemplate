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
import InteractiveChooser from "@/components/interactive-chooser/interactive-chooser.component";

const ServicesPage = () => {
  return (
    <main className={styles.main}>
      <InteractiveChooser />
      {/* <div className={styles.servicesPage}>
        <section className={styles.servicesOverview}>
          <h1>Our Services</h1>
          <p>
            At [Your Name], we specialize in delivering top-notch web
            development and e-commerce solutions tailored to meet the unique
            needs of each client. Whether you are looking to establish a robust
            online presence or enhance your current website, our expert services
            are designed to help you succeed in the digital world.
          </p>
        </section>

        <section className={styles.serviceDetail}>
          <h2>Website Development</h2>
          <p>
            Our website development services focus on creating visually
            appealing, user-friendly, and responsive websites. We use the latest
            technologies and best practices to ensure your website stands out
            and delivers a seamless user experience.
          </p>
          <div className={styles.subsection}>
            <h3>Custom Web Development</h3>
            <p>
              We provide bespoke web development services that cater to your
              business’s unique needs. Our team works closely with you to
              understand your goals and create a website that not only looks
              great but also performs flawlessly.
            </p>
          </div>
          <div className={styles.subsection}>
            <h3>Technologies Used</h3>
            <p>
              We leverage the power of modern technologies like HTML, CSS,
              JavaScript, React, Next.js, and Node.js to build high-quality
              websites that are both scalable and maintainable.
            </p>
          </div>
          <div className={styles.subsection}>
            <h3>Process Overview</h3>
            <p>
              Our development process includes an initial consultation to
              understand your needs, followed by the design phase, development,
              rigorous testing, and finally, the launch of your website.
            </p>
          </div>
        </section>

        <section className={styles.serviceDetail}>
          <h2>E-commerce Solutions</h2>
          <p>
            Elevate your online store with our comprehensive e-commerce
            solutions. We specialize in building and enhancing e-commerce
            websites that are secure, easy to manage, and optimized for sales.
          </p>
          <div className={styles.subsection}>
            <h3>Platforms</h3>
            <p>
              We work with leading e-commerce platforms such as Shopify,
              WooCommerce, and Magento to create powerful online stores.
            </p>
          </div>
          <div className={styles.subsection}>
            <h3>Features Offered</h3>
            <p>
              Our e-commerce solutions include seamless payment gateway
              integration, efficient inventory management, and custom shopping
              cart functionalities to ensure a smooth shopping experience for
              your customers.
            </p>
          </div>
          <div className={styles.subsection}>
            <h3>Example Projects</h3>
            <p>
              Check out our portfolio to see examples of successful e-commerce
              websites we’ve developed, featuring innovative designs and robust
              functionalities.
            </p>
          </div>
        </section>

        <section className={styles.serviceDetail}>
          <h2>Maintenance and Support</h2>
          <p>
            Keep your website running smoothly with our maintenance and support
            services. We offer regular updates, security checks, and technical
            support to ensure your website remains up-to-date and secure.
          </p>
          <div className={styles.subsection}>
            <h3>Regular Updates</h3>
            <p>
              We provide regular updates to ensure your website is always
              running on the latest software versions, with new features and
              improvements.
            </p>
          </div>
          <div className={styles.subsection}>
            <h3>Security Checks</h3>
            <p>
              Our team performs regular security checks and updates to protect
              your website from potential threats and vulnerabilities.
            </p>
          </div>
          <div className={styles.subsection}>
            <h3>Technical Support</h3>
            <p>
              We offer continuous technical support to address any issues that
              may arise, ensuring your website remains functional and reliable.
            </p>
          </div>
        </section>

        <section className={styles.serviceDetail}>
          <h2>SEO and Marketing</h2>
          <p>
            Increase your website’s visibility and attract more visitors with
            our SEO and digital marketing services. We employ proven strategies
            to improve your search engine rankings and drive targeted traffic to
            your site.
          </p>
          <div className={styles.subsection}>
            <h3>On-page SEO</h3>
            <p>
              Our on-page SEO services include optimizing your website’s
              keywords, meta tags, and content to improve your search engine
              rankings.
            </p>
          </div>
          <div className={styles.subsection}>
            <h3>Content Strategy</h3>
            <p>
              We develop a comprehensive content strategy to create engaging and
              relevant content that attracts and retains visitors.
            </p>
          </div>
          <div className={styles.subsection}>
            <h3>Digital Marketing</h3>
            <p>
              Our digital marketing services encompass social media marketing,
              email campaigns, and PPC advertising to drive targeted traffic to
              your website.
            </p>
          </div>
        </section>

        <section className={styles.contactCta}>
          <p>
            Ready to take your online presence to the next level?{" "}
            <a href="#contact">Contact us</a> today to discuss how we can help
            you achieve your goals.
          </p>
        </section>
      </div> */}
    </main>
  );
};

export default ServicesPage;
