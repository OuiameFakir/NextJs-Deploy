import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import theme from "../../utils/theme";

export const DetailContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  alignSelf: "stretch",
  width: "100%",
}));
export const Label = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",
}));
export const DetailTitles = styled(Typography)(() => ({
  color: `${theme.palette.customColors.gray[700]}`,
  fontSize: "1rem",
  fontWeight: "500",
  lineHeight: "150%",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.9rem",
  },
  [theme.breakpoints.between("md", "xl_lg")]: {
    fontSize: "0.9rem",
  },
}));
export const TitleLeft = styled(Typography)(() => ({
  color: `${theme.palette.customColors.inwi[500]}`,
  textAlign: "right",
  fontSize: "1rem",
  fontWeight: "600",
  lineHeight: "150%",
  [theme.breakpoints.between("md", "xl_lg")]: {
    fontSize: "0.9rem",
  },
}));
export const DetailWithSupportingTextContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: " flex-start",
  gap: " 0.25rem",
  alignSelf: "stretch",
  width: "100%",
}));

export const SupportingTextContainer = styled(Box)(() => ({
  display: "flex",
  paddingLeft: "2rem",
  alignItems: "center",
  gap: " 0.625rem",
  alignSelf: "stretch",
}));
export const SupportingText = styled(Typography)(() => ({
  color: `${theme.palette.customColors.gray[500]}`,
  fontSize: "0.875rem",
  fontWeight: "500",
  lineHeight: "150%",
}));
