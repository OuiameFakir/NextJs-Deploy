"use client";
import Map from "../../../../components/Map/map";
import Crosshair from "../../../../_assets/images/Crosshair.png";

import { useMemo, useState } from "react";
import { useTranslation } from "@/app/i18n/client";

import { Libraries, useLoadScript } from "@react-google-maps/api";
import Switcher from "@/app/[lng]/components/Swithcher/Switcher";
import Back from "../../../../components/Back/Back";
import {
  BodyContainerElig,
  MapContainer,
} from "../../../../components/Elig/elig.style";
import { TiltlesCentred } from "../../../../components/Titles/Titles";
import {
  AutoCompleteContainer,
  ButtonContainer,
  SeachLabelContiner,
  SeachTitle,
  SearchContainer,
  TypoContainer,
} from "@/app/[lng]/components/Search/SearchComponent.style";
import PlacesAutoComplete from "../../../../components/Map/autoComplete";
import { PrimaryButton } from "../../../../components/Button/Button";
import IconHolder from "../../../../components/Icons/icon";
import {
  BoxLng,
  PageContainer,
} from "../../../../components/PageContainer.style";

function Eligibitlity({ params: { lng } }: { params: { lng: string } }) {
  const { t } = useTranslation(lng, "ftth");
  const [isLocation, setIsLocation] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState(null);

  const libraries = useMemo(() => ["places", "geometry"], []);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
    libraries: libraries as Libraries | undefined,
    region: "MA",
  });

  const handleButtonLocationClick = () => {
    setIsLocation(true);
  };
  return (
    <>
      <BoxLng>
        <span>
          <Switcher path="/prod/boutique/mobile" />
        </span>
      </BoxLng>
      <PageContainer>
        <Back lng={lng} />
        <BodyContainerElig>
          <TiltlesCentred
            title={t("Eligibility.Title")}
            subtitle={t("Eligibility.Subtitle")}
          />
          <SearchContainer>
            <SeachTitle>{t("Eligibility.SearchTitle")}</SeachTitle>
            <SeachLabelContiner>
              <AutoCompleteContainer>
                <PlacesAutoComplete
                  lng={lng}
                  onSelectPlace={(place) => setSelectedPlace(place)}
                  isLoaded={isLoaded}
                />
              </AutoCompleteContainer>
              <TypoContainer>{t("Eligibility.SearchOU")}</TypoContainer>
              <ButtonContainer>
                <PrimaryButton
                  title={t("Eligibility.SearchButtonTitle")}
                  startIcon={
                    <IconHolder icon={Crosshair.src} width={20} height={20} />
                  }
                  handleClick={() => handleButtonLocationClick()}
                />
              </ButtonContainer>
            </SeachLabelContiner>
          </SearchContainer>
          <MapContainer>
            <Map
              isLocation={isLocation}
              setIsLocation={setIsLocation}
              selectedPlace={selectedPlace}
              setSelectedPlace={setSelectedPlace}
              isLoaded={isLoaded}
            />
          </MapContainer>
        </BodyContainerElig>
      </PageContainer>
    </>
  );
}

export default Eligibitlity;
