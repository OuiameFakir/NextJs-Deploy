"use client";
import React from "react";
import Back from "../../../../../../../components/Back/Back";
import Switcher from "@/app/[lng]/components/Swithcher/Switcher";
import {
  PanierContainer,
  TitlesContainerOffreConfig,
  ItemsContainer,
  BodyContainerConf,
  ButtonContainerConf,
  PanierArticlesContainer,
  PanierHeaderContainer,
  PanierCartContainer,
  PanierCartName,
  PanierPriceContainer,
  Price,
  Currency,
} from "../../../../../../../components/OffreConfig/offreConfiguration.style";
import { Titles } from "../../../../../../../components/Titles/Titles";
import NumberRadio from "../../../../../../../components/NumberRadio/NumberRadio";
import NewNumber from "../../../../../../../_assets/svgs/NewNumber.svg";
import Group from "../../../../../../../_assets/svgs/Group.svg";
import { PrimaryButton } from "../../../../../../../components/Button/Button";
import IconHolder from "../../../../../../../components/Icons/icon";
import ShoppingCart from "../../../../../../../_assets/svgs/ShoppingCartSimple.svg";
import { PageContainer } from "../../../../../../../components/PageContainer.style";
export default function offreConfig1({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return (
    <PageContainer>
      <span>
        <Switcher path="/prod/boutique/mobile/offreConfiguration1" />
      </span>
      <Back lng={lng} />
      <TitlesContainerOffreConfig>
        <Titles
          title={"Configuration de l’offre"}
          subtitle={
            "Veuillez configurer votre offre avec les options et paramètres ci-dessous"
          }
        />
      </TitlesContainerOffreConfig>
      <BodyContainerConf>
        <ItemsContainer>
          <NumberRadio
            icon={NewNumber}
            title="Je souhaite obtenir un nouveau numéro inwi"
            sub="Demandez un nouveau numéro"
          />
          <NumberRadio
            icon={Group}
            title="Je souhaite passer chez inwi sans changer de numéro"
            sub="Devenez client forfait mobile de inwi tout en gardant votre numéro en quelques clics"
          />
          <ButtonContainerConf>
            <PrimaryButton title={"Suivant"} />
          </ButtonContainerConf>
        </ItemsContainer>
        <PanierContainer>
          <PanierArticlesContainer>
            <PanierHeaderContainer>
              <PanierCartContainer>
                <IconHolder
                  width={24}
                  height={24}
                  icon={ShoppingCart}
                ></IconHolder>
                <PanierCartName>Panier</PanierCartName>
              </PanierCartContainer>
              <PanierPriceContainer>
                <Price>49</Price>
                <Currency>dhs TTC</Currency>
              </PanierPriceContainer>
            </PanierHeaderContainer>
          </PanierArticlesContainer>
        </PanierContainer>
      </BodyContainerConf>
    </PageContainer>
  );
}
