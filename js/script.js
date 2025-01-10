/**
 * @copyright codewithsadee 2023
 * @author Sadee <codewithsadee24@gmail.com>
 */

"use strict";

/**
 * Light and dark mode
*/

const /**{NodeElement} */ $themeBtn = document.querySelector("[data-theme-btn]");
const /** {NodeElement} */ $HTML = document.documentElement;
let /** {Boolean \ String} */ isDark = window.matchMedia("(prefers-color-scheme:dark)").matches;

if (sessionStorage.getItem("theme")) {
    $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
    $HTML.dataset.theme = isDark ? "dark" : "light";
}

const changeTheme = () => {

    $HTML.dataset.theme =sessionStorage.getItem("theme") === "light" ? "dark" : "light";
    sessionStorage.setItem("theme", $HTML.dataset.theme);
}

$themeBtn.addEventListener("click", changeTheme);


/**
 * TAB
 */

const /** {NodeList} */ $tabBtn = document.querySelectorAll("[data-tab-btn]");
let /** {HTMLElement | null} */ lastActiveTab = document.querySelector("[data-tab-content]");
let /** {HTMLElement | null} */ lastActiveTabBtn = $tabBtn[0] || null;

$tabBtn.forEach(item => {
    item.addEventListener("click", function () {
        // Safeguard against null values
        if (lastActiveTab) lastActiveTab.classList.remove("active");
        if (lastActiveTabBtn) lastActiveTabBtn.classList.remove("active");

        // Correct template literal usage
        const $tabContent = document.querySelector(`[data-tab-content="${item.dataset.tabBtn}"]`);
        if ($tabContent) $tabContent.classList.add("active");
        this.classList.add("active");

        // Update last active references
        lastActiveTab = $tabContent;
        lastActiveTabBtn = this;
    });
});


