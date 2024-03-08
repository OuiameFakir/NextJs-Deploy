"use client";
import Map from "../../../../../../../components/Map/map";
import Crosshair from "../../../../../../../_assets/images/Crosshair.png";

import { useMemo, useState } from "react";
import { useTranslation } from "@/app/i18n/client";

import { Libraries, useLoadScript } from "@react-google-maps/api";
import PageContainer from "../../../../../../../components/PageContainer";
import Switcher from "@/app/[lng]/components/Swithcher/Switcher";
import Back from "../../../../../../../components/Back/Back";
import {
  BodyContainerElig,
  MapContainer,
} from "../../../../../../../components/Elig/elig.style";
import { TiltlesCentred } from "../../../../../../../components/Titles/Titles";
import {
  AutoCompleteContainer,
  ButtonContainer,
  SeachLabelContiner,
  SeachTitle,
  SearchContainer,
  TypoContainer,
} from "@/app/[lng]/components/Search/SearchComponent.style";
import PlacesAutoComplete from "../../../../../../../components/Map/autoComplete";
import { PrimaryButton } from "../../../../../../../components/Button/Button";
import IconHolder from "../../../../../../../components/Icons/icon";

function Elig({ params: { lng } }: { params: { lng: string } }) {
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
    <PageContainer>
      <span>
        <Switcher path="/mobile/elig" />
      </span>
      <Back lng={lng} />
      <BodyContainerElig>
        <TiltlesCentred
          title={t("EligHeaderTitle")}
          subtitle={t("EligHeaderSubtitle")}
        />
        <SearchContainer>
          <SeachTitle>{t("SearchTitle")}</SeachTitle>
          <SeachLabelContiner>
            <AutoCompleteContainer>
              <PlacesAutoComplete
                lng={lng}
                onSelectPlace={(place) => setSelectedPlace(place)}
                isLoaded={isLoaded}
              />
            </AutoCompleteContainer>
            <TypoContainer>{t("SearchOU")}</TypoContainer>
            <ButtonContainer>
              <PrimaryButton
                title={t("SearchButtonTitle")}
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
  );
}

export default Elig;
