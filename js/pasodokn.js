var toggleDarkModeButton = document.getElementById("toggle-display-mode");
toggleDarkModeButton.addEventListener("click", toggleDisplayMode);

getStartMode();

function getStartMode() {
    if (localStorage.getItem("displayMode") != null) {
        if (localStorage.getItem("displayMode") == "dark") darkMode();
        else if (localStorage.getItem("displayMode") == "light") lightMode();
    } else {localStorage.getItem("displayMode") == "dark"};
}

function toggleDisplayMode() {
    var isDark = document.body.classList.contains("dark");
    if (isDark) lightMode();
    else darkMode();

  }

function darkMode(body) {
    var body = document.body;
    //Dark mode
    body.classList.remove("light");
    body.classList.add("dark");
    document.getElementById("logo").src = "images/dark.jpg";
    updateCodeDisplayMode(true);
    localStorage.setItem("displayMode", "dark");
}

function lightMode(body) {
    var body = document.body;
    //Light mode
    body.classList.add("light");
    body.classList.remove("dark");
    document.getElementById("logo").src = "images/light.jpg";
    updateCodeDisplayMode(false);
    localStorage.setItem("displayMode", "light");
}

function updateCodeDisplayMode(dark) {
    var codeBlocks = document.getElementsByName("code");
    codeBlocks.forEach(element => {
        element.classList.add(dark ? "dark" : "light")
        element.classList.remove(dark ? "light" : "dark")
    });
}