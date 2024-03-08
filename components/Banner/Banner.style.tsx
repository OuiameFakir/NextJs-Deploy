import styled from "@emotion/styled";
import { Box } from "@mui/material";
import theme from "../../utils/theme";

export const BannerContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  background: "white",
  [theme.breakpoints.down("xs")]: {
    display: "none",
  },
  "& img": {
    width: "100%",
    height: "100%",
  },
}));
