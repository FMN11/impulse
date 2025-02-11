import { OffertContainer } from "./OffertStyle";
import { Card } from "./Card/Card";
import styled from "styled-components";
import img01 from "./../../img/offert/img01.jpg";
import img02 from "./../../img/offert/img02.jpg";
import img03 from "./../../img/offert/img03.jpg";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

const Offert = () => {
  return (
    <div id="offert" data-aos="fade-left">
      <OffertContainer>
        <h1>Залы</h1>
        <CardContainer>
          <Card title={"Зал 1"} date={1} imgUrl={img01} />
          <Card title={"Зал 1"} date={12} imgUrl={img02} />
          <Card title={"зал 2"} date={20} imgUrl={img03} />
          <Card title={"Зал 2"} date={15} imgUrl={img02} />
          <Card title={"Зал 3"} date={24} imgUrl={img03} />
          <Card title={"зал 3"} date={30} imgUrl={img01} />
        </CardContainer>
      </OffertContainer>
    </div>
  );
};

export default Offert;
