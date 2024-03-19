import styled from "@emotion/styled";
import { Box } from "@mui/material";
import theme from "../utils/theme";

export const BoxLng = styled(Box)(() => ({
  display: "flex",
  padding: "0.5rem 2rem",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: "auto",
  background: "linear-gradient(270deg, #A7488B 0%, #321B3F 100%)",
}));
export const PageContainer = styled(Box)(() => ({
  display: "flex",
  padding: "0.25rem 5rem 10rem 5rem",
  flexDirection: "column",
  alignItems: "flex-start",
  gap: "2rem",
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
