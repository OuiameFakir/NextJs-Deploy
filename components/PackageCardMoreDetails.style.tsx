
import styled from "@emotion/styled";
import { Typography, Box } from "@mui/material";
import theme from "../utils/theme";

export const MoreDetailsContainer = styled(Box)(()=>
    `
    display: flex;
    padding: 0.75rem 1rem;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    align-self: stretch;
    border-bottom: var(--Counter, 1px) solid var(--Gray-200, #E5E7EB);
    opacity: var(--Counter, 1);
    background: var(--Gray-50, #F9FAFB);
    `
)
export const BoxMoreDetails = styled(Typography)(()=>
    `
        color: ${theme.palette.customColors.gray[900]};

        /* Omnes 16/Medium */
        font-family: Omnes;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: 150%; /* 1.5rem */
    `
)