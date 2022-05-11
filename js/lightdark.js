// this checks whether system dark mode is set 
let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");
// this checks for session storage telling to override
// the system preferences 
let theme = sessionStorage.getItem('theme');

if (systemInitiatedDark.matches) {
  document.getElementById("theme-toggle").innerHTML = "✶&#xFE0E;";
} else {
  document.getElementById("theme-toggle").innerHTML = "✶&#xFE0E;";
}

function prefersColorTest(systemInitiatedDark) {
  if (systemInitiatedDark.matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.getElementById("theme-toggle").innerHTML = "✶&#xFE0E;";
    // this clears the session storage 
    sessionStorage.setItem('theme', '');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById("theme-toggle").innerHTML = "✶&#xFE0E;";
    sessionStorage.setItem('theme', '');
  }
}
systemInitiatedDark.addListener(prefersColorTest);

function modeSwitcher() {
  // it’s important to check for overrides again 
  let theme = sessionStorage.getItem('theme');
  // checks if reader selected dark mode 
  if (theme === "dark") {
    document.documentElement.setAttribute('data-theme', 'light');
    sessionStorage.setItem('theme', 'light');
    document.getElementById("theme-toggle").innerHTML = "✶&#xFE0E;";
    // checks if reader selected light mode 
  } else if (theme === "light") {
    document.documentElement.setAttribute('data-theme', 'dark');
    sessionStorage.setItem('theme', 'dark');
    document.getElementById("theme-toggle").innerHTML = "✶&#xFE0E;";
    // checks if system set dark mode 
  } else if (systemInitiatedDark.matches) {
    document.documentElement.setAttribute('data-theme', 'light');
    sessionStorage.setItem('theme', 'light');
    document.getElementById("theme-toggle").innerHTML = "✶&#xFE0E;";
    // the only option left is system set light mode
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    sessionStorage.setItem('theme', 'dark');
    document.getElementById("theme-toggle").innerHTML = "✶&#xFE0E;";
  }
}

if (theme === "dark") {
  document.documentElement.setAttribute('data-theme', 'dark');
  sessionStorage.setItem('theme', 'dark');
  document.getElementById("theme-toggle").innerHTML = "✶&#xFE0E;";
} else if (theme === "light") {
  document.documentElement.setAttribute('data-theme', 'light');
  sessionStorage.setItem('theme', 'light');
  document.getElementById("theme-toggle").innerHTML = "✶&#xFE0E;";
}