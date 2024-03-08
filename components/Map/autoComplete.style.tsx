import { Grid, Typography } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../utils/theme";

export const GridContainer = styled(Grid)(() => ({
  alignItems: "center",
}));
export const GridIconItem = styled(Grid)(() => ({
  display: "flex",
  width: 44,
}));
export const GridTextItem = styled(Grid)(() => ({
  width: "calc(100% - 44px)",
  wordWrap: "break-word",
}));
export const OptionsTypography = styled(Typography)(() => ({
  variant: "body2",
  color: "text.secondary",
}));
