import { AboutContainer, ImageContainer, AboutWrapper } from "./AboutStyle";
import cameraimg from "./../../img/about/about-me.jpg";

const About = () => {
  return (
    <div id="about">
      <AboutWrapper>
        <ImageContainer>
          <img src={cameraimg} alt="camera img" />
        </ImageContainer>
        <AboutContainer>
          <h1>
            Я честно <span>ХЗ</span>
          </h1>
          <p data-aos="fade-up">
            Что тут вообще можно написать
          </p>
          <p data-aos="fade-up">
            И нужна ли вообще эта секция?
          </p>
          <p data-aos="fade-up">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut animi
            repellendus officiis adipisci quae nihil nulla eaque provident
            labore delectus deleniti libero cumque placeat, doloremque, vitae
            eum dolorum incidunt molestiae! Molestias perspiciatis explicabo
            assumenda numquam dicta ducimus maxime, suscipit corrupti facilis
            hic ut esse adipisci id at, repudiandae, provident aperiam nisi
            molestiae. Vero dolorum repudiandae, nemo adipisci dolorem neque
            consequatur? Quae cupiditate dolor numquam molestias iusto sint
            dolores modi minus voluptatum accusamus placeat molestiae, culpa
            enim veritatis totam laboriosam amet consectetur, quisquam
            praesentium inventore? Officiis earum fuga non distinctio repellat?
            Obcaecati, voluptas. Sed deleniti ullam, itaque saepe modi
            necessitatibus cum sequi asperiores porro non alias impedit
            explicabo repellendus qui cumque voluptas quia architecto reiciendis
            dolorem voluptatem possimus magnam amet. Natus?
          </p>
        </AboutContainer>
      </AboutWrapper>
    </div>
  );
};

export default About;
