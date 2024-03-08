import {  Button, Box, Typography } from "@mui/material";
// import MuiButton from "@mui/material/Button";
import styled from "@emotion/styled";
import theme from "../../utils/theme";


export const ButtonStyled = styled(Button)(()=>
    `
    align-self: stretch;
    color: ${theme.palette.customColors.main};
        background: ${theme.palette.customColors.inwi[500]};
        display: flex;
        padding: 0.75rem 2rem;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        border-radius: 0.5rem;
        box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.10);
        width: 100%;
    `
)
// export const ButtonStyled = styled(Button)(()=>
//     `
//     align-self: stretch;
//     `
// )
export const BoxButtonStyled = styled(Box)(()=>
    `
        color: ${theme.palette.customColors.main};
        background: ${theme.palette.customColors.inwi[500]};
        display: flex;
        padding: 0.75rem 2rem;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        border-radius: 0.5rem;
        box-shadow: 0px 1px 2px -1px rgba(0, 0, 0, 0.10), 0px 1px 3px 0px rgba(0, 0, 0, 0.10);
        width: 100%;
    `
)
