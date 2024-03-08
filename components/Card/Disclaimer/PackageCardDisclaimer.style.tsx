import styled from "@emotion/styled";
import { Box } from "@mui/material";
import theme from "../../../utils/theme";

export const BoxDisclaimer = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
  borderRadius: "0.75rem",
  border: `1px solid ${theme.palette.customColors.gray[200]}`,
  background: `${theme.palette.customColors.main}`,
  boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
}));
