const navCheckbox = document.querySelector("#dropdown");

const navDropdown = document.querySelector("#desktop-nav");

function uncheckBox() {
    if(navCheckbox.checked === true) {
        navCheckbox.checked = false;
    } else {
        navCheckbox.checked = false;
    }
}

navDropdown.addEventListener("click", uncheckBox);