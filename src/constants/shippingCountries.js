/** ISO 3166-1 alpha-2 country list for shipping (sorted by name). */
export const SHIPPING_COUNTRIES = [
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "NG", name: "Nigeria", flag: "🇳🇬" },
  { code: "MX", name: "Mexico", flag: "🇲🇽" },
  { code: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "IT", name: "Italy", flag: "🇮🇹" },
  { code: "ES", name: "Spain", flag: "🇪🇸" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱" },
  { code: "BE", name: "Belgium", flag: "🇧🇪" },
  { code: "CH", name: "Switzerland", flag: "🇨🇭" },
  { code: "AT", name: "Austria", flag: "🇦🇹" },
  { code: "SE", name: "Sweden", flag: "🇸🇪" },
  { code: "NO", name: "Norway", flag: "🇳🇴" },
  { code: "DK", name: "Denmark", flag: "🇩🇰" },
  { code: "FI", name: "Finland", flag: "🇫🇮" },
  { code: "PL", name: "Poland", flag: "🇵🇱" },
  { code: "CZ", name: "Czechia", flag: "🇨🇿" },
  { code: "IE", name: "Ireland", flag: "🇮🇪" },
  { code: "PT", name: "Portugal", flag: "🇵🇹" },
  { code: "GR", name: "Greece", flag: "🇬🇷" },
  { code: "TR", name: "Türkiye", flag: "🇹🇷" },
  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪" },
  { code: "SA", name: "Saudi Arabia", flag: "🇸🇦" },
  { code: "ZA", name: "South Africa", flag: "🇿🇦" },
  { code: "EG", name: "Egypt", flag: "🇪🇬" },
  { code: "KE", name: "Kenya", flag: "🇰🇪" },
  { code: "GH", name: "Ghana", flag: "🇬🇭" },
  { code: "AR", name: "Argentina", flag: "🇦🇷" },
  { code: "CL", name: "Chile", flag: "🇨🇱" },
  { code: "CO", name: "Colombia", flag: "🇨🇴" },
  { code: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "KR", name: "South Korea", flag: "🇰🇷" },
  { code: "CN", name: "China", flag: "🇨🇳" },
  { code: "HK", name: "Hong Kong SAR", flag: "🇭🇰" },
  { code: "SG", name: "Singapore", flag: "🇸🇬" },
  { code: "MY", name: "Malaysia", flag: "🇲🇾" },
  { code: "TH", name: "Thailand", flag: "🇹🇭" },
  { code: "VN", name: "Vietnam", flag: "🇻🇳" },
  { code: "PH", name: "Philippines", flag: "🇵🇭" },
  { code: "ID", name: "Indonesia", flag: "🇮🇩" },
  { code: "NZ", name: "New Zealand", flag: "🇳🇿" },
  { code: "RU", name: "Russia", flag: "🇷🇺" },
  { code: "UA", name: "Ukraine", flag: "🇺🇦" },
  { code: "IL", name: "Israel", flag: "🇮🇱" },
  { code: "PK", name: "Pakistan", flag: "🇵🇰" },
  { code: "BD", name: "Bangladesh", flag: "🇧🇩" },
].sort((a, b) => a.name.localeCompare(b.name));

const US = [
  ["AL", "Alabama"],
  ["AK", "Alaska"],
  ["AZ", "Arizona"],
  ["AR", "Arkansas"],
  ["CA", "California"],
  ["CO", "Colorado"],
  ["CT", "Connecticut"],
  ["DE", "Delaware"],
  ["DC", "District of Columbia"],
  ["FL", "Florida"],
  ["GA", "Georgia"],
  ["HI", "Hawaii"],
  ["ID", "Idaho"],
  ["IL", "Illinois"],
  ["IN", "Indiana"],
  ["IA", "Iowa"],
  ["KS", "Kansas"],
  ["KY", "Kentucky"],
  ["LA", "Louisiana"],
  ["ME", "Maine"],
  ["MD", "Maryland"],
  ["MA", "Massachusetts"],
  ["MI", "Michigan"],
  ["MN", "Minnesota"],
  ["MS", "Mississippi"],
  ["MO", "Missouri"],
  ["MT", "Montana"],
  ["NE", "Nebraska"],
  ["NV", "Nevada"],
  ["NH", "New Hampshire"],
  ["NJ", "New Jersey"],
  ["NM", "New Mexico"],
  ["NY", "New York"],
  ["NC", "North Carolina"],
  ["ND", "North Dakota"],
  ["OH", "Ohio"],
  ["OK", "Oklahoma"],
  ["OR", "Oregon"],
  ["PA", "Pennsylvania"],
  ["RI", "Rhode Island"],
  ["SC", "South Carolina"],
  ["SD", "South Dakota"],
  ["TN", "Tennessee"],
  ["TX", "Texas"],
  ["UT", "Utah"],
  ["VT", "Vermont"],
  ["VA", "Virginia"],
  ["WA", "Washington"],
  ["WV", "West Virginia"],
  ["WI", "Wisconsin"],
  ["WY", "Wyoming"],
].map(([code, name]) => ({ code, name }));

const CA = [
  ["AB", "Alberta"],
  ["BC", "British Columbia"],
  ["MB", "Manitoba"],
  ["NB", "New Brunswick"],
  ["NL", "Newfoundland and Labrador"],
  ["NS", "Nova Scotia"],
  ["NT", "Northwest Territories"],
  ["NU", "Nunavut"],
  ["ON", "Ontario"],
  ["PE", "Prince Edward Island"],
  ["QC", "Quebec"],
  ["SK", "Saskatchewan"],
  ["YT", "Yukon"],
].map(([code, name]) => ({ code, name }));

const AU = [
  ["ACT", "Australian Capital Territory"],
  ["NSW", "New South Wales"],
  ["NT", "Northern Territory"],
  ["QLD", "Queensland"],
  ["SA", "South Australia"],
  ["TAS", "Tasmania"],
  ["VIC", "Victoria"],
  ["WA", "Western Australia"],
].map(([code, name]) => ({ code, name }));

const NG = [
  ["AB", "Abia"],
  ["AD", "Adamawa"],
  ["AK", "Akwa Ibom"],
  ["AN", "Anambra"],
  ["BA", "Bauchi"],
  ["BY", "Bayelsa"],
  ["BE", "Benue"],
  ["BO", "Borno"],
  ["CR", "Cross River"],
  ["DE", "Delta"],
  ["EB", "Ebonyi"],
  ["ED", "Edo"],
  ["EK", "Ekiti"],
  ["EN", "Enugu"],
  ["FC", "Federal Capital Territory"],
  ["GO", "Gombe"],
  ["IM", "Imo"],
  ["JI", "Jigawa"],
  ["KD", "Kaduna"],
  ["KN", "Kano"],
  ["KT", "Katsina"],
  ["KE", "Kebbi"],
  ["KO", "Kogi"],
  ["KW", "Kwara"],
  ["LA", "Lagos"],
  ["NA", "Nasarawa"],
  ["NI", "Niger"],
  ["OG", "Ogun"],
  ["ON", "Ondo"],
  ["OS", "Osun"],
  ["OY", "Oyo"],
  ["PL", "Plateau"],
  ["RI", "Rivers"],
  ["SO", "Sokoto"],
  ["TA", "Taraba"],
  ["YO", "Yobe"],
  ["ZA", "Zamfara"],
].map(([code, name]) => ({ code, name }));

/** Subdivisions where we show a dropdown; other countries use free-text state/region. */
export const SUBDIVISIONS_BY_COUNTRY = {
  US,
  CA,
  AU,
  NG,
};

export function countryHasSubdivisions(countryCode) {
  const list = SUBDIVISIONS_BY_COUNTRY[countryCode];
  return Array.isArray(list) && list.length > 0;
}

export function getCountryName(countryCode) {
  if (!countryCode) return "";
  const row = SHIPPING_COUNTRIES.find((c) => c.code === countryCode);
  return row?.name ?? countryCode;
}

export function getSubdivisionLabel(countryCode, stateValue) {
  if (!stateValue || !countryCode) return "";
  const list = SUBDIVISIONS_BY_COUNTRY[countryCode];
  if (!list) return stateValue;
  const found = list.find((s) => s.code === stateValue);
  return found ? found.name : stateValue;
}

/** Label for the state/province field based on country. */
export function getStateRegionLabel(countryCode) {
  if (countryCode === "CA") return "Province / territory";
  if (countryCode === "AU") return "State / territory";
  if (countryCode === "US") return "State";
  if (countryCode === "NG") return "State";
  return "State / region";
}
