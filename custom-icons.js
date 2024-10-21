var icons = {
  "O3":[0,0,42,32,"M3.556 21.333c-1.007 0-1.852-0.341-2.533-1.022s-1.022-1.526-1.022-2.533v-14.223c0-1.007 0.341-1.852 1.022-2.533s1.526-1.022 2.533-1.022h10.667c1.007 0 1.852 0.341 2.533 1.022s1.022 1.526 1.022 2.533v14.223c0 1.007-0.341 1.852-1.022 2.533s-1.526 1.022-2.533 1.022zM5.333 16h7.111v-10.667h-7.111z M24.889 32v-4.271h12.122v-4.271h-12.122v-4.271h12.122v-4.271h-12.122v-4.271h12.122c1.333 0 2.475 0.418 3.424 1.255s1.424 1.842 1.424 3.017v3.203c0 0.89-0.354 1.646-1.061 2.269s-1.566 0.934-2.576 0.934c1.010 0 1.869 0.311 2.576 0.934s1.061 1.379 1.061 2.269v3.203c0 1.175-0.475 2.18-1.424 3.017s-2.091 1.255-3.424 1.255z "],
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
