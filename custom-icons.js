var icons = {
  "no2":[0,0,32,32,"M15.667 9.333c-1.473 0-2.667 1.194-2.667 2.667v8c0 1.473 1.194 2.667 2.667 2.667h2.667c1.473 0 2.667-1.194 2.667-2.667v-8c0-1.473-1.194-2.667-2.667-2.667h-2.667zM15.667 12h2.667v8h-2.667v-8zM22.333 14v2h4v2h-2c-1.105 0-2 0.895-2 2v4h6v-2h-4v-2h2c1.105 0 2-0.895 2-2v-2c0-1.105-0.895-2-2-2z M3.667 9.333v13.333h2.667v-6.667l2.667 6.667h2.667v-13.333h-2.667v6.667l-2.667-6.667z "],
  "o3":[0,0,32,32,"M11 9.333c-1.473 0-2.667 1.194-2.667 2.667v8c0 1.473 1.194 2.667 2.667 2.667h2.667c1.473 0 2.667-1.194 2.667-2.667v-8c0-1.473-1.194-2.667-2.667-2.667h-2.667zM11 12h2.667v8h-2.667v-8z M23.667 22v-1.5c0-0.828-0.672-1.5-1.5-1.5 0.828 0 1.5-0.672 1.5-1.5v-1.5c0-1.11-0.9-2-2-2h-4v2h4v2h-2v2h2v2h-4v2h4c1.105 0 2-0.895 2-2z "],
  "so2":[0,0,32,32,"M15.621 9.333c-1.473 0-2.667 1.194-2.667 2.667v8c0 1.473 1.194 2.667 2.667 2.667h2.667c1.473 0 2.667-1.194 2.667-2.667v-8c0-1.473-1.194-2.667-2.667-2.667h-2.667zM15.621 12h2.667v8h-2.667v-8zM22.287 14v2h4v2h-2c-1.105 0-2 0.895-2 2v4h6v-2h-4v-2h2c1.105 0 2-0.895 2-2v-2c0-1.105-0.895-2-2-2z M6.379 9.333c-1.473 0-2.667 1.194-2.667 2.667v0 2.667c0 1.473 1.194 2.667 2.667 2.667v0h2.667v2.667h-5.333v2.667h5.333c1.473 0 2.667-1.194 2.667-2.667v0-2.667c0-1.473-1.194-2.667-2.667-2.667v0h-2.667v-2.667h5.333v-2.667z "],
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
