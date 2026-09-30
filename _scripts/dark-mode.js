/*
  manages light/dark mode.
*/

{
  const chromeSelector =
    "header.background:not([data-dark-fixed]), footer.background:not([data-dark-fixed])";

  const setDarkMode = (value) => {
    const dark = `${value}` === "true" ? "true" : "false";

    document.documentElement.dataset.dark = dark;

    document.querySelectorAll(chromeSelector).forEach((element) => {
      element.dataset.dark = dark;
    });
  };

  const syncToggle = () => {
    const toggle = document.querySelector(".dark-toggle");

    if (toggle) {
      toggle.checked = document.documentElement.dataset.dark === "true";
    }
  };

  // immediately load saved (or default) mode before page renders
  setDarkMode(window.localStorage.getItem("dark-mode") ?? "false");

  const onReady = () => {
    setDarkMode(document.documentElement.dataset.dark);
    syncToggle();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", onReady, { once: true });
  } else {
    onReady();
  }

  window.addEventListener("load", onReady);

  // when user toggles mode button
  window.onDarkToggleChange = (event) => {
    const value = event.target.checked ? "true" : "false";
    setDarkMode(value);
    window.localStorage.setItem("dark-mode", value);
  };
}
