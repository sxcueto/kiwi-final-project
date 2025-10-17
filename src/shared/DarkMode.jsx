//component for light and dark mode
import styles from "./DarkMode.module.css";

let darkMode = localStorage.getItem('darkmode')

const themeSwitch = document.getElementById('theme-switch')

const enableDarkMode = () => {
    document.body.classList.add("darkmode")
    localStorage.setItem('darkmode', 'active')
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkMode === 'active') enableDarkMode()

themeSwitch.addEventListener("click", () => {
    darkMode = localStorage.getItem('darkmode')
    darkMode !== "active" ? enableDarkMode() : disableDarkMode()
})