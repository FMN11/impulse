import {
  ContactContainer,
  ContactTextWrapper,
  PersonName,
} from "./ContactStyle";

const Contact = () => {
  return (
    <div id="contact" data-aos="fade-left">
      <ContactContainer>
        <h1>Контакт</h1>
        <ContactTextWrapper>
          <PersonName></PersonName>
          <p>Фотограф</p>
          <p>
            Телефон:{" "}
            <a href="#"></a>
          </p>
          <p>
            Адрес:{" "}
            <a href="#">
            </a>
          </p>
        </ContactTextWrapper>
      </ContactContainer>
    </div>
  );
};

export default Contact;
