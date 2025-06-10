import Section from "./Section";
import Article from "./Article";
import Real  from "../imgs/greek.jpg";
import russian from "../imgs/Russian food.jpg";
import mexican from "../imgs/Mexican food.avif";
import kimchi from "../imgs/kimchi.jpg";

export default function Main() {
  return (
    <main>
      <Section>
        <Article
          h1element="Transform Your Life Today!"
          image={Real}
          alternative="Working out at FitLife Gym"
          imgClass="imgOne" articleClass="articleOne"
          paragraph={
            <>
              Lorem ipsum dolor sit amet consectetur adi,pisicing elit.
              Accusamus velit tempora commodi? <br />
              Perspiciatis accusantium nihil dignissimos temporibus aliquid
              tenetur itaque dolore eveniet <br />
              veritatis assumenda, voluptate eaque officia totam magnam ea?
            </>
          }
        />
      </Section>
      <Section>
        <Article
          h1element="Expert Trainers"
          image={russian}
          alternative="Expert fitness trainer coaching a client"
        />
        <Article
          image={mexican}
          h1element="Group Classes"
          alternative="Group fitness class in action"
        />
        <Article
          h1element="Modern Facilities"
          image={kimchi}
          alternative="Modern gym facilities"
        />
      </Section>
    </main>
  );
}
