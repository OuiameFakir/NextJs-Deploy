"use client";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Image from "next/image";
interface IIconHolderProps {
  width: number;
  height: number;
  icon: string;
}

const StyledIconHolder = styled(Box)<IIconHolderProps>(({ width, height }) => ({
  position: "relative",
  width: width,
  height: height,
}));

export const IconHolder: React.FC<IIconHolderProps> = ({
  width,
  height,
  icon,
}) => (
  <StyledIconHolder width={width} height={height} icon={icon}>
    <Image src={icon} alt="icon" width={width} height={height} />
  </StyledIconHolder>
);

export default IconHolder;
