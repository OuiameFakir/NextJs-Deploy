import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../utils/theme";

export const TitlesContainerOffreConfig = styled(Box)({
  width: "100%",
  height: "100%",
  padding: "0rem 8.4375rem",
});

export const BodyContainerConf = styled(Box)({
  width: "100%",
  height: "100%",
  padding: "0rem 8.4375rem",
  display: "flex",
  gap: "2.5rem",
});

export const ItemsContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "520px",
  height: "100%",
  gap: "0.75rem",
});

export const ButtonContainerConf = styled(Box)({
  width: "100%",
  height: "2.5rem",
  padding: " 0.5rem, 1.5rem",
  borderRadius: "0.5rem ",
  border: "none",
  gap: "0.5rem",
  opacity: "0.4px",
});

export const PanierContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "360px",
  height: "100%",
  gap: "1rem",
});

export const PanierArticlesContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  borderRadius: "0.5rem",
  border: "1px solid #E5E7EB",
  boxShadow: "0px 1px 2px 0px #0000000D",
  background: `${theme.palette.customColors.main}`,
});

export const PanierHeaderContainer = styled(Box)({
  display: "flex",
  width: "100%",
  height: "5.43rem",
  borderStartStartRadius: "0.5rem",
  borderStartEndRadius: "0.5rem",
  background: `${theme.palette.customColors.purple[500]}`,
  padding: "0.75rem 1rem",
  justifyContent: "space-between",
  alignItems: "center",
});

export const PanierCartContainer = styled(Box)({
  display: "flex",
  width: "5.31rem",
  height: "1.7rem",
  gap: "0.5rem",
});

export const PanierCartName = styled(Typography)({
  fontFamily: `${theme.typography.fontFamily}`,
  fontSize: "1.125rem",
  fontWeight: " 600",
  lineHeight: "1.63rem",
  letterSpacing: "0em",
  color: `${theme.palette.customColors.main}`,
  textAlign: "left",
});

export const PanierPriceContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "4.124rem",
  height: "3.94rem",
  padding: "0rem 0rem 0.5rem 0rem",
});

export const Price = styled(Typography)({
  fontFamily: `${theme.typography.fontFamily}`,
  fontSize: "1.175rem",
  fontWeight: " 600",
  lineHeight: "2.625rem",
  letterSpacing: "0em",
  color: `${theme.palette.customColors.main}`,
  textAlign: "center",
});

export const Currency = styled(Typography)({
  fontFamily: `${theme.typography.fontFamily}`,
  fontSize: "0.857rem",
  fontWeight: " 600",
  lineHeight: "1.31rem",
  letterSpacing: "0em",
  color: `${theme.palette.customColors.main}`,
  textAlign: "center",
});

