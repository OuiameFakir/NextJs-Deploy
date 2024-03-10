import { Typography, Box } from "@mui/material";
import { useTranslation } from "../i18n";
import Link from "next/link";

export default async function Home({
  params: { lng },
}: {
  params: {
    lng: string;
  };
}) {
  const { t } = await useTranslation(lng, "mobile");
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h5">Landing Page /prod</Typography>
      <Link href="/prod/boutique/mobile">MOBILE</Link>
    </Box>
  );
}
