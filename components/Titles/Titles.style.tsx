"use client";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import theme from "../../utils/theme";

export const TitlesHolder = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
}));

export const Title = styled(Typography)(() => ({
  color: `${theme.palette.customColors.inwi[500]}`,
  fontSize: "2.25rem",
  fontWeight: " 600",
  lineHeight: "150%",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.7rem",
  },
  [theme.breakpoints.between("md", "lg")]: {
    fontSize: "2rem",
  },
}));
export const Subtitle = styled(Typography)(() => ({
  color: `${theme.palette.customColors.gray[700]}`,
  fontSize: "1rem",
  fontWeight: "400",
  lineHeight: "150%",
}));
export const TitlesHolderCentred = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
}));
