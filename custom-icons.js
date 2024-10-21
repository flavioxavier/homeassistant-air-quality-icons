var icons = {
  "co2":[0,-960,960,960,"M440-360q-17 0-28.5-11.5T400-400v-160q0-17 11.5-28.5T440-600h120q17 0 28.5 11.5T600-560v160q0 17-11.5 28.5T560-360H440Zm20-60h80v-120h-80v120Zm-300 60q-17 0-28.5-11.5T120-400v-160q0-17 11.5-28.5T160-600h120q17 0 28.5 11.5T320-560v40h-60v-20h-80v120h80v-20h60v40q0 17-11.5 28.5T280-360H160Zm520 120v-100q0-17 11.5-28.5T720-380h80v-40H680v-60h140q17 0 28.5 11.5T860-440v60q0 17-11.5 28.5T820-340h-80v40h120v60H680Z "],
  "no2":[0,0,24,24,"M11 15c-0.283 0-0.521-0.096-0.712-0.288s-0.288-0.429-0.288-0.713v-4c0-0.283 0.096-0.521 0.288-0.713s0.429-0.288 0.712-0.288h3c0.283 0 0.521 0.096 0.712 0.288s0.288 0.429 0.288 0.713v4c0 0.283-0.096 0.521-0.288 0.713s-0.429 0.288-0.712 0.288zM11.5 13.5h2v-3h-2zM17 18v-2.5c0-0.283 0.096-0.521 0.288-0.712s0.429-0.288 0.712-0.288h2v-1h-3v-1.5h3.5c0.283 0 0.521 0.096 0.713 0.288s0.288 0.429 0.288 0.713v1.5c0 0.283-0.096 0.521-0.288 0.713s-0.429 0.288-0.713 0.288h-2v1h3v1.5z M3.006 15h1.25v-3.5l2.55 3.5h1.2v-6h-1.25v3.5l-2.5-3.5h-1.25z "],
  "o3":[0,0,24,24,"M7.074 14.581c-0.283 0-0.521-0.096-0.712-0.288s-0.288-0.429-0.288-0.713v-4c0-0.283 0.096-0.521 0.288-0.713s0.429-0.288 0.712-0.288h3c0.283 0 0.521 0.096 0.713 0.288s0.288 0.429 0.288 0.713v4c0 0.283-0.096 0.521-0.288 0.713s-0.429 0.288-0.713 0.288zM7.574 13.081h2v-3h-2z M13.074 17.581v-1.201h3.409v-1.201h-3.409v-1.201h3.409v-1.201h-3.409v-1.201h3.409c0.375 0 0.696 0.118 0.963 0.353s0.401 0.518 0.401 0.848v0.901c0 0.25-0.099 0.463-0.298 0.638s-0.44 0.263-0.724 0.263c0.284 0 0.526 0.088 0.724 0.263s0.298 0.388 0.298 0.638v0.901c0 0.33-0.134 0.613-0.401 0.848s-0.588 0.353-0.963 0.353z "],
  "so2":[0,0,24,24,"M11 15c-0.283 0-0.521-0.096-0.712-0.288s-0.288-0.429-0.288-0.713v-4c0-0.283 0.096-0.521 0.288-0.713s0.429-0.288 0.712-0.288h3c0.283 0 0.521 0.096 0.712 0.288s0.288 0.429 0.288 0.713v4c0 0.283-0.096 0.521-0.288 0.713s-0.429 0.288-0.712 0.288zM11.5 13.5h2v-3h-2zM17 18v-2.5c0-0.283 0.096-0.521 0.288-0.712s0.429-0.288 0.712-0.288h2v-1h-3v-1.5h3.5c0.283 0 0.521 0.096 0.713 0.288s0.288 0.429 0.288 0.713v1.5c0 0.283-0.096 0.521-0.288 0.713s-0.429 0.288-0.713 0.288h-2v1h3v1.5z M4.030 15c-0.283 0-0.521-0.096-0.712-0.288s-0.288-0.429-0.288-0.713v-1h1.5v0.5h2v-1h-2.5c-0.283 0-0.521-0.096-0.713-0.288s-0.288-0.429-0.288-0.713v-1.5c0-0.283 0.096-0.521 0.288-0.712s0.429-0.288 0.713-0.288h3c0.283 0 0.521 0.096 0.712 0.288s0.288 0.429 0.288 0.712v1h-1.5v-0.5h-2v1h2.5c0.283 0 0.521 0.096 0.712 0.288s0.288 0.429 0.288 0.713v1.5c0 0.283-0.096 0.521-0.288 0.713s-0.429 0.288-0.712 0.288z "],
  }

async function getIcon(name) {
  if (!(name in icons)) {
    console.log(`Icon "${name}" not available`);
    return '';
  }

  var svgDef = icons[name];
  var primaryPath = svgDef[4];
  return {
    path: primaryPath,
    viewBox: svgDef[0] + " " + svgDef[1] + " " + svgDef[2] + " " + svgDef[3]
  }

}

async function getIconList() {
  return Object.entries(icons).map(([icon]) => ({
    name: icon
  }));
}

window.customIconsets = window.customIconsets || {};
window.customIconsets["custom"] = getIcon;

window.customIcons = window.customIcons || {};
window.customIcons["custom"] = { getIcon, getIconList };
