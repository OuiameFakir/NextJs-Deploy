// Disclaimer.tsx
import React from "react";
import IconHolder from "../Icons/icon";
import whitePin from "../../_assets/images/WhitePin.png";
import { MapDisclaimer } from "./disclaimer.style";
import { Typography } from "@mui/material";
const Disclaimer: React.FC = () => {
  return (
    <div>
      <MapDisclaimer>
        <IconHolder width={16} height={20} icon={whitePin.src} />
        <Typography>
          Seuls les endroits avec des épingles sont éligibles à la fibre.
        </Typography>
      </MapDisclaimer>
    </div>
  );
};

export default Disclaimer;
