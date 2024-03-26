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
  borderStartStartRadius: "0.75rem",
  borderStartEndRadius: "0.75rem",
}));
export const OfferName = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "-0.375rem",
}));
export const Price = styled(Box)(() => ({
  display: "flex ",
  fontFamily: `${theme.typography.fontFamily}`,
  flexDirection: "column",
  alignItems: "flex-end",
  gap: "-0.375rem",
}));
export const Title = styled(Typography)(() => ({
  color: `${theme.palette.customColors?.main}`,
  fontFamily: `${theme.typography.fontFamily}`,
  fontSize: "1.1rem",
  fontWeight: " 600",
  lineHeight: " 150%",
  // fontSize responsive
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.between("md", "xl_lg")]: {
    fontSize: "1.1rem",
  },
}));
export const Subtitle = styled(Typography)(() => ({
  color: `${theme.palette.customColors?.purple[100]}`,
  fontFamily: `${theme.typography.fontFamily}`,
  fontSize: "1.2rem",
  fontWeight: "600",
  lineHeight: " 150%",
  // fontSize responsive
  [theme.breakpoints.down("xs")]: {
    fontSize: "1.2rem",
  },
  [theme.breakpoints.between("md", "xl_lg")]: {
    fontSize: "1rem",
  },
}));
export const NumericalValue = styled(Typography)(() => ({
  color: `${theme.palette.customColors?.purple[100]}`,
  textAlign: "right",
  fontSize: "1.75rem",
  fontWeight: "600 ",
  lineHeight: "150%",
  // fontSize responsive
  [theme.breakpoints.down("xs")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.between("md", "xl_lg")]: {
    fontSize: "1.3rem",
  },
}));
export const Currency = styled(Typography)(() => ({
  color: `${theme.palette.customColors?.purple[100]}`,
  textAlign: "right",
  fontSize: "0.8rem",
  fontWeight: "500",
  lineHeight: "150%",
  // fontSize responsive
  [theme.breakpoints.between("md", "xl_lg")]: {
    fontSize: "0.7rem",
  },
}));
