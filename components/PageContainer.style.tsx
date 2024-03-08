import styled from "@emotion/styled";
import { Box } from "@mui/material";
import theme from "../utils/theme";

export const BoxHead = styled(Box)(() => ({
  display: "flex",
  padding: "0.25rem 5rem 10rem 5rem",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "3rem",
  flex: "1 0 0",
  alignSelf: "stretch",
  background: `${theme.palette.customColors.main}`,
  [theme.breakpoints.down("xs")]: {
    padding: "0.25rem 3rem",
  },
  [theme.breakpoints.between("xs", "md")]: {
    padding: "0.25rem 1rem",
  },
}));
