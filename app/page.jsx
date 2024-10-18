"use client"
// Styles
import styles from "./page.module.scss";
// Public & Assets
import HeroImg from "@/public/hero.png"
// React/Next Functions

// Context

// Componenets
import HeroSection from "@/containers/hero/hero.container";
import { Form, FormTitle, FormRow, FormBtnSubmit, FormInputName } from "@/components/form/form.component";
import InputFloatingLabel from "@/components/inputs/input-floatinglabel/input-floatinglabel.component";

export default function Home() {
  const handleSubmit = (formdata) => {
   console.log(formdata);
  }
  return (
    <main className={`${styles.main}`}>
      <HeroSection imgSrc={HeroImg} />
      <div style={{width: "450px"}}>

      <Form onSubmit={handleSubmit} borderRadiusOfInputsAndBtnsForm="5px" >
        <FormTitle>Xd</FormTitle>
        <FormRow>
          <FormInputName label="Jméno" />
        </FormRow>
        <FormBtnSubmit />
      </Form>
      </div>
    </main>
  );
}
