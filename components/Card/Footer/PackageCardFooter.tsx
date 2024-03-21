// "use client";

import { replace } from "lodash";
import { PrimaryButton } from "../../Button/Button";
import { PackageCardFooterContainer } from "./PackageCardFooter.style";
import { useTranslation } from "@/app/i18n/client";
function PackageCardFooter({ lng }: { lng: string }) {
  const { t } = useTranslation(lng, "common");
  return (
    <PackageCardFooterContainer>
      <PrimaryButton
        title={t("ButtonTitlePrimary")}
        handleClick={() => window.location.replace("/test-eligibility")}
      />
    </PackageCardFooterContainer>
  );
}

export default PackageCardFooter;
