"use client";
import { Box, FormControl, MenuItem, Select } from "@mui/material";

const Switcher = ({ path }: { path?: string }) => {
  return (
    <Box sx={{ width: "100px", marginTop: "20px", color: "white" }}>
      <FormControl
        fullWidth
        variant="standard"
        sx={{
          "& .MuiSelect-icon": { color: "white" },
          "& .MuiInputBase-input": { color: "white" },
          "& .MuiInput-underline:before": { borderBottom: "none" },
        }}
      >
        <Select
          labelId="Langues"
          id="Langues"
          value="langues"
          label="Langues"
          onChange={(e) => {
            const selectedLanguage = e.target.value;
            window.location.href = `/${selectedLanguage}/${path}`;
          }}
        >
          <MenuItem value="langues" selected>
            Langues
          </MenuItem>
          <MenuItem value="fr" selected>
            Français
          </MenuItem>
          <MenuItem value="ar">العربية</MenuItem>
          <MenuItem value="en">English</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
export default Switcher;
