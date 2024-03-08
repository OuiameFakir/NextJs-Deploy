import React from "react";
import { AddressTitle } from "./Adress.style";
import { AddressButton } from "../Button/Button";

function PinAddress({ addressTitle }: { addressTitle: string }) {
  return (
    <div>
      <AddressTitle>{addressTitle}</AddressTitle>
      <AddressButton title="Confirmer l'emplacement" />
    </div>
  );
}

export default PinAddress;
