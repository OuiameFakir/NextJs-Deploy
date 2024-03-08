import { Box, styled } from "@mui/material";
import theme from "../../utils/theme";

export const MapDisclaimer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#111827",
  position: "absolute",
  bottom: 10,
  left: 10,
  zIndex: 100,
  padding: 6,
  borderRadius: 8,
  gap: 12,
  fontFamily: "Omnes",
  fontSize: "0.875rem",
  fontWeight: "500",
  color: "white",
  [theme.breakpoints.down("sm")]: {
    width: "75%",
  },
}));
