// "use client";

import { OutlinedButton, PrimaryButton } from "../../Button/Button";
import { PackageCardFooterContainer } from "./PackageCardFooter.style";
import { useTranslation } from "@/app/i18n/client";
function PackageCardFooter({ lng }: { lng: string }) {
  const { t } = useTranslation(lng, "common");
  return (
    <PackageCardFooterContainer>
      <PrimaryButton title={t("ButtonTitlePrimary")} />
      <OutlinedButton title={t("ButtonTitleOutlined")} />
    </PackageCardFooterContainer>
  );
}

export default PackageCardFooter;
