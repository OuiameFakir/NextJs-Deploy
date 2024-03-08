import styled from "@emotion/styled";
import { Box } from "@mui/material";
import theme from "../../../utils/theme";
import Divider from "@mui/material/Divider";

export const PackageCardDetailsContainer = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  padding: "1.5rem 1.25rem",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.25rem",
  alignSelf: "stretch",
  borderBottom: `var(--Counter, 1px) solid ${theme.palette.customColors.main}`,
  background: `${theme.palette.customColors.main}`,
}));
export const StyledDivider = styled(Divider)(() => ({
  width: "100%",
  "&:last-child": {
    display: "none",
  },
}));
