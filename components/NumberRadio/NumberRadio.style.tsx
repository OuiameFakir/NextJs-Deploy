import { Box, Radio } from "@mui/material";
import styled from "@emotion/styled";
import theme from "../../utils/theme";

export const Container = styled(Box)({
  width: "100%",
  height: "100%",
  padding: "1rem",
  borderRadius: "0.5rem",
  gap: "1rem",
  boxShadow: "0px 1px 2px 0px #0000000D",
  border: "1px solid #E5E7EB",
});

export const InternContainer = styled(Box)({
  width: "100%",
  height: "100%",
  padding: "1rem",
  gap: "1rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const TitleContainer = styled(Box)({
  width: "100%",
  height: "100%",
  gap: "0.25rem",
});

export const Title = styled(Box)({
  fontFamily: `${theme.typography.fontFamily}`,
  fontSize: "1rem",
  fontWeight: "600",
  lineHeight: "1.25rem",
  letterSpacing: "Orem",
});

export const Sub = styled(Box)({
  fontFamily: `${theme.typography.fontFamily}`,
  fontSize: "0.81rem",
  fontWeight: "400",
  lineHeight: "1rem",
  letterSpacing: "Orem",
});

export const RadioInput = styled(Radio)({
  height: "20px",
  width: "20px",
  border: "2px solid #D1D5DB",
});
