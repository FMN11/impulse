import {
  CardWrapper,
  CardImage,
  CardTextWrapper,
  CardTextDate,
  CardTextTitle,
  CardTextBody,
  CardStatWrapper,
  CardStats,
  LinkText,
} from "./CardStyle";

export const Card = ({ title, date, imgUrl }) => {
  return (
    <CardWrapper>
      <CardImage background={imgUrl} />
      <CardTextWrapper>
        <CardTextDate>{date} может название зала?</CardTextDate>
        <CardTextTitle>{title}</CardTextTitle>
        <CardTextBody>
          Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae
          temporibus omnis illum maxime quod deserunt eligendi dolor
        </CardTextBody>
      </CardTextWrapper>
      <CardStatWrapper>
        <CardStats>
          <LinkText href="#">
            Тута тоже ссылка
          </LinkText>
        </CardStats>
        <CardStats>
          <LinkText href="#">и тута это ссылка </LinkText>
        </CardStats>
      </CardStatWrapper>
    </CardWrapper>
  );
};
