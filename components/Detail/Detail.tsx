"use client";
import IconHolder from "../Icons/icon";
import {
  DetailContainer,
  DetailTitles,
  TitleLeft,
  DetailWithSupportingTextContainer,
  SupportingTextContainer,
  SupportingText,
} from "./Detail.style";
import { Label } from "./Detail.style";
interface IDetailProps {
  icon: string;
  title: string;
  titleLeft: string;
  supportingText?: string;
}

export const Detail: React.FC<IDetailProps> = ({ icon, title, titleLeft }) => {
  return (
    <DetailContainer>
      <Label>
        <IconHolder icon={icon} width={20} height={20} />
        <DetailTitles>{title}</DetailTitles>
      </Label>
      <TitleLeft>{titleLeft}</TitleLeft>
    </DetailContainer>
  );
};

export const DetailWithSupportingText: React.FC<IDetailProps> = ({
  icon,
  title,
  titleLeft,
  supportingText,
}) => {
  return (
    <DetailWithSupportingTextContainer>
      <Detail icon={icon} title={title} titleLeft={titleLeft} />
      <SupportingTextContainer>
        <SupportingText>{supportingText}</SupportingText>
      </SupportingTextContainer>
    </DetailWithSupportingTextContainer>
  );
};
