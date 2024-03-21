import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import parse from "autosuggest-highlight/parse";
import { useTranslation } from "@/app/i18n/client";
import { IPlaceType } from "../Map/types";
import { OptionsTypography } from "./autoComplete.style";
import { fetchPlacesFunction, handleAutocomplete } from "./utils";
import { useEffect, useMemo } from "react";

const autocompleteService = { current: null };

export default function PlacesAutoComplete({
  lng,
  onSelectPlace,
  isLoaded,
}: {
  lng: string;
  onSelectPlace: (place: any) => void;
  isLoaded: boolean;
}) {
  const [value, setValue] = React.useState<IPlaceType | null>(null);
  const [inputValue, setInputValue] = React.useState("");
  const [options, setOptions] = React.useState<readonly IPlaceType[]>([]);
  const loaded = React.useRef(false);
  const { t } = useTranslation(lng, "ftth");

  if (typeof window !== "undefined" && !loaded.current) {
    if (!document.querySelector("#google-maps")) {
      isLoaded;
    }
    loaded.current = true;
  }

  const fetch = useMemo(() => fetchPlacesFunction({ autocompleteService }), []);

  useEffect(() => {
    const cleanup = handleAutocomplete({
      inputValue,
      value,
      fetch,
      setOptions,
      autocompleteService,
    });
    return cleanup;
  }, [value, inputValue, fetch, setOptions]);

  return (
    <Autocomplete
      id="google-map"
      sx={{ width: "100%", height: "100%" }}
      getOptionLabel={(option) =>
        typeof option === "string" ? option : option.description
      }
      filterOptions={(x) => x}
      options={options}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={value}
      noOptionsText={t("Eligibility.NoSearchResult")}
      onChange={(event: any, newValue: IPlaceType | null) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
        if (newValue) {
          onSelectPlace(newValue);
        }
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={t("Eligibility.SearchLabel")}
          InputProps={{
            ...params.InputProps,
            endAdornment: null,
          }}
          fullWidth
          sx={{ height: "100%" }}
        />
      )}
      renderOption={(props, option) => {
        const matches =
          option.structured_formatting.main_text_matched_substrings || [];
        const parts = parse(
          option.structured_formatting.main_text,
          matches.map((match: any) => [
            match.offset,
            match.offset + match.length,
          ])
        );

        return (
          <li {...props} key={props.id}>
            <Box sx={{ display: "flex" }}>
              <LocationOnIcon sx={{ color: "darkgrey" }} />
              <Box sx={{ wordWrap: "break-word" }}>
                {parts.map((part, index) => (
                  <Box
                    key={index}
                    component="span"
                    sx={{ fontWeight: part.highlight ? "bold" : "regular" }}
                  >
                    {part.text}
                  </Box>
                ))}
                <OptionsTypography>
                  {option.structured_formatting.secondary_text}
                </OptionsTypography>
              </Box>
            </Box>
          </li>
        );
      }}
    />
  );
}
