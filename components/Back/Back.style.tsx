import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import MuiLink from "@mui/material/Link";
import theme from "../../utils/theme";

export const BoxReturn = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "0.25rem",
  width: "100%",
}));
export const LinkReturn = styled(Typography)(() => ({
  color: `${theme.palette.customColors?.gray[800]}`,
  fontSize: " 0.875rem",
  fontWeight: "600",
  lineHeight: "150%",
}));
