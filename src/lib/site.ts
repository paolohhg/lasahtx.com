export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

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
