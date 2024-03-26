"use client";
import styled from "@emotion/styled";
import { Box, TextField, Typography } from "@mui/material";
import theme from "../../../../../utils/theme";
export const SearchContainer = styled(Box)(() => ({
  width: "100%",
  height: "100%",
  padding: "1.25rem 2.5rem 2rem 2.5rem",
  borderRadius: "0.5rem",
  border: `0.0625rem solid ${theme.palette.customColors.gray[200]}`,
  gap: "1rem",
}));
export const SeachTitle = styled(Typography)(() => ({
  fontSize: "1.12rem",
  fontWeight: "600",
  lineHeight: "1.6875rem",
  color: `${theme.palette.customColors.purple[500]}`,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));
export const SeachLabelContiner = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  height: "auto",
  justifyContent: "space-between",
  alignItems: "center",
}));
export const TypoContainer = styled(Box)(() => ({
  display: "flex",
  height: "auto",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Omnes",
  fontSize: "1rem",
  fontWeight: "500",
  letterSpacing: "0em",
  color: `${theme.palette.customColors.gray[500]}`,
  padding: "1rem",
}));

export const ButtonContainer = styled(Box)(() => ({
  width: "30%",
  height: "auto",
  [theme.breakpoints.down("sm")]: {
    width: "45%",
  },
}));
export const AutoCompleteContainer = styled(Box)(() => ({
  width: "65%",
  height: "auto",
  [theme.breakpoints.down("sm")]: {
    width: "50%",
  },
}));
