const html = document.querySelector("html");
const checkbox = document.querySelector("input[name=theme]");

const getStyle = (element, style) =>
  window.getComputedStyle(element).getPropertyValue(style);

const initialColors = {
  bg: getStyle(html, "--bg"),
  bgPrimary: getStyle(html, "--bg-primary"),
  bgSecondary: getStyle(html, "--bg-secondary"),
  bgHover: getStyle(html, "--bg-hover"),
  textColorHeader: getStyle(html, "--text-color-header"),
  textColorPrimary: getStyle(html, "--text-color-primary"),
  textColorSecondary: getStyle(html, "--text-color-secondary"),
};

const darkMode = {
  bg: "rgb(11, 10, 13)",
  bgPrimary: "rgba(255, 255, 255, .08)",
  bgSecondary: "rgba(255, 255, 255, .08)",
  bgHover: "rgb(11, 10, 13)",
  textColorHeader: "#9da2a7",
  textColorPrimary: "#7159c1",
  textColorSecondary: "#9da2a7",
};

const transformKey = (key) =>
  "--" + key.replace(/([A-Z])/g, "-$1").toLowerCase();

const changeColors = (colors) => {
  Object.keys(colors).map((key) =>
    html.style.setProperty(transformKey(key), colors[key])
  );
};

checkbox.addEventListener("change", ({ target }) => {
  target.checked ? changeColors(darkMode) : changeColors(initialColors);
});
