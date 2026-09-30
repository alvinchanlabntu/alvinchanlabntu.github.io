/*
  manages light/dark mode.
*/

{
  const setDarkMode = (value) => {
    const dark = `${value}`;

    document.documentElement.dataset.dark = dark;

    document
      .querySelectorAll(
        "header.background:not([data-dark-fixed]), footer.background:not([data-dark-fixed])"
      )
      .forEach((element) => {
        element.dataset.dark = dark;
      });
  };

  // immediately load saved (or default) mode before page renders
  setDarkMode(window.localStorage.getItem("dark-mode") ?? "false");

  const onLoad = () => {
    setDarkMode(document.documentElement.dataset.dark);

    // update toggle button to match loaded mode
    document.querySelector(".dark-toggle").checked =
      document.documentElement.dataset.dark === "true";
  };

  // after page loads
  window.addEventListener("load", onLoad);

  // when user toggles mode button
  window.onDarkToggleChange = (event) => {
    const value = event.target.checked;
    setDarkMode(value);
    window.localStorage.setItem("dark-mode", value);
  };
}
