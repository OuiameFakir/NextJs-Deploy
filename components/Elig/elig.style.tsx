"use client";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const BodyContainerElig = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  alignSelf: "stretch",
  width: "100%",
}));
export const MapContainer = styled(Box)(() => ({
  width: "100%",
  height: " 600px",
  top: "167px",
  borderRadius: "12px",
}));
export const AddressContainer = styled(Box)(() => ({
  width: "16.25rem",
  height: "8.625rem",
  position: "absolute",
  borderRadius: "0.5rem",
}));
