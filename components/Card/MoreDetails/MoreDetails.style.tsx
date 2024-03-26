import styled from "@emotion/styled";
import {
  Typography,
  Box,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import theme from "../../../utils/theme";

export const MoreDetailsContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "stretch",
  background: `${theme.palette.customColors.gray[50]}`,
  width: "100%",
}));
export const AccordionStyled = styled(Accordion)(() => ({
  // padding: "0.75rem 1rem",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "stretch",
  borderBottom: `var(--Counter, 1px) solid ${theme.palette.customColors.gray[200]}`,
  background: `${theme.palette.customColors.gray[50]}`,
  width: "100%",
}));
export const MoreDetailsTypo = styled(Typography)(() => ({
  color: `${theme.palette.customColors.gray[900]}`,
  fontSize: "0.9rem",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "150%",
}));
export const AccordDetails = styled(AccordionDetails)(() => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
}));
export const DetailsFees = styled(Box)(() => ({
  display: "flex",
  padding: " 1rem 1.25rem 1.5rem 1.25rem",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1.25rem",
  alignSelf: "stretch",
}));
export const FeesTitles = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  alignSelf: "stretch",
}));
export const Title1 = styled(Typography)(() => ({
  color: `${theme.palette.customColors.purple[500]}`,
  fontSize: "1rem",
  fontWeight: "500",
  lineHeight: "150%",
}));
export const Sub1 = styled(Typography)(() => ({
  color: `${theme.palette.customColors.gray[700]}`,
  fontSize: "0.875rem",
  fontWeight: "500",
  lineHeight: "150%",
}));

// New Try :
export const CardSecondaryAttributes = styled(Box)(() => ({
  display: "flex",
  padding: "1.5rem 1.25rem",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1.25rem",
  alignSelf: "stretch",
  borderBottom: `var(--Counter, 1px) solid ${theme.palette.customColors.gray[200]}`,
  background: `${theme.palette.customColors.gray[50]}`,
}));
export const DetailsOptions = styled(Box)(() => ({
  display: "flex",
  padding: "1rem 1.25rem 1.5rem 1.25rem",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "1.25rem",
  alignSelf: "stretch",
  borderBottom: `var(--Counter, 1px) solid var(--Gray-200, #E5E7EB)`,
  background: `var(--Gray-50, #F9FAFB)`,
}));
export const DetailsDisc = styled(Box)(() => ({
  display: "flex",
  padding: "0.75rem 1.5rem",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",
  alignSelf: "stretch",
  borderBottom: `var(--Counter, 1px) solid ${theme.palette.customColors.gray[200]}`,
  background: `${theme.palette.customColors.gray[100]}`,
  // TEXT
  color: `var(--Gray-600, #4B5563)`,
  textAlign: "center",
  fontSize: "0.875rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "150%",
  width: "100%",
}));
