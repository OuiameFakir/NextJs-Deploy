import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import theme from "../../../utils/theme";

export const CardHeaderContainer = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  padding: "1.25rem 1.5rem",
  justifyContent: "space-between",
  alignItems: "center",
  alignSelf: "stretch",
  background: `${theme.palette.customColors?.purple[600]}`,
}));
export const OfferName = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "-0.375rem",
}));
export const Price = styled(Box)(() => ({
  display: "flex ",
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "-0.375rem",
}));
export const Title = styled(Typography)(() => ({
  color: `${theme.palette.customColors?.main}`,
  fontSize: "1.25rem",
  fontWeight: " 600",
  lineHeight: " 150%",
  // fontSize responsive
  [theme.breakpoints.down("md")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.between("md", "xl_lg")]: {
    fontSize: "1.2rem",
  },
}));
export const Subtitle = styled(Typography)(() => ({
  color: `${theme.palette.customColors?.purple[100]}`,
  fontSize: "1.5rem",
  fontWeight: "600",
  lineHeight: " 150%",
  // fontSize responsive
  [theme.breakpoints.down("md")]: {
    fontSize: "1.25rem",
  },
  [theme.breakpoints.between("md", "xl_lg")]: {
    fontSize: "1.25rem",
  },
}));
export const NumericalValue = styled(Typography)(() => ({
  color: `${theme.palette.customColors?.purple[100]}`,
  textAlign: "right",
  fontSize: "2.25rem",
  fontWeight: "600 ",
  lineHeight: "150%",
  // fontSize responsive
  [theme.breakpoints.down("md")]: {
    fontSize: "2.1rem",
  },
  [theme.breakpoints.between("md", "xl_lg")]: {
    fontSize: "2.1rem",
  },
}));
export const Currency = styled(Typography)(() => ({
  color: `${theme.palette.customColors?.purple[100]}`,
  textAlign: "right",
  fontSize: "0.875rem",
  fontWeight: "500",
  lineHeight: "150%",
  // fontSize responsive
  [theme.breakpoints.down("md")]: {
    fontSize: "0.8rem",
  },
  [theme.breakpoints.between("md", "xl_lg")]: {
    fontSize: "0.8rem",
  },
}));
