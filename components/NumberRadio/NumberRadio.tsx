import React from "react";
import {
  Container,
  InternContainer,
  RadioInput,
  Sub,
  Title,
  TitleContainer,
} from "./NumberRadio.style";
import IconHolder from "../Icons/icon";

function NumberRadio({
  icon,
  title,
  sub,
}: {
  icon: string;
  title: string;
  sub: string;
}) {
  return (
    <Container>
      <InternContainer>
        <IconHolder width={40} height={40} icon={icon}></IconHolder>
        <TitleContainer>
          <Title>{title}</Title>
          <Sub>{sub}</Sub>
        </TitleContainer>
        <RadioInput />
      </InternContainer>
    </Container>
  );
}

export default NumberRadio;
