import styled from "@emotion/styled";
import { Box } from "@mui/material";
import theme from "../utils/theme";

export const BoxBody = styled(Box)(() => ({
  display: "flex",
  alignItems: "flex-start",
  gap: "1.5rem",
  alignSelf: "stretch",
  width: "100%",
  flexWrap: "wrap",
  [theme.breakpoints.down("xs")]: {
    justifyContent: "center",
  },
}));
