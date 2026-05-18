const productionSiteUrl = "https://www.lasahtx.com";

function normalizeSiteUrl(url: string | undefined): string {
  const normalized = (url ?? productionSiteUrl).trim().replace(/\/+$/, "");
  if (
    !normalized ||
    normalized === "https://lasahtx.com" ||
    normalized.endsWith(".vercel.app")
  ) {
    return productionSiteUrl;
  }
  return normalized;
}

export const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

export const pickupLocation = {
  name: "Pok Pok Po",
  streetAddress: "3201 Louisiana St, Suite 108",
  addressLocality: "Houston",
  addressRegion: "TX",
  postalCode: "77006",
  addressCountry: "US",
};

export const pickupAddressLines = [
  pickupLocation.streetAddress,
  `${pickupLocation.addressLocality}, ${pickupLocation.addressRegion} ${pickupLocation.postalCode}`,
];

export const pickupAddressSingleLine = `${pickupLocation.name}, ${pickupAddressLines.join(", ")}`;
