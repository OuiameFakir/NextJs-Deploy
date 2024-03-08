import theme from "../../../utils/theme";
import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
export const PackageCardFooterContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  padding: "1.5rem",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "0.5rem",
  alignSelf: "stretch",
  background: `${theme.palette.customColors.main}`,
}));
export const ButtonChooseOffer = styled(Button)(() => ({
  display: "flex",
  padding: "0.75rem 2rem",
  justifyContent: "center",
  alignItems: "center",
  gap: " 0.5rem",
  alignSelf: "stretch",
  borderRadius: " 0.5rem",
  background: `${theme.palette.customColors.inwi[500]} var(--Inwi-500, #AD2184)`,
  boxShadow:
    " 0px 1px 2px -1px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
}));
export const BoxButton = styled(Box)(() => ({
  display: "flex",
  padding: "0.75rem 2rem",
  justifyContent: "center",
  alignItems: "center",
  gap: " 0.5rem",
  alignSelf: "stretch",
  borderRadius: " 0.5rem",
  background: `${theme.palette.customColors.inwi[500]}`,
  boxShadow:
    "0px 1px 2px -1px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
  width: "100%",
}));
export const TypoOffer = styled(Typography)(() => ({
  color: `${theme.palette.customColors.main}`,
  textAlign: "center",
  fontSize: "1rem",
  fontWeight: "600",
  lineHeight: "150%",
}));
export const ButtonReminder = styled(ButtonChooseOffer)(() => ({
  border: `1px solid ${theme.palette.customColors?.test}`,
  background: `${theme.palette.customColors?.main}`,
  boxShadow: "none",
}));
export const BoxButtonReminder = styled(BoxButton)(() => ({
  border: `1px solid ${theme.palette.customColors?.test}`,
  background: `${theme.palette.customColors?.main}`,
  boxShadow: "none",
}));
export const TypoReminder = styled(TypoOffer)(() => ({
  color: `${theme.palette.customColors?.purple[500]}`,
}));
