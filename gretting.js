const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    gretting = document.querySelector(".js-grettings");

const USER_LS = "currentUser",
    SHOWING_CN = "showing",
    FORM_CN = "form",
    GRETTINGS_CN = "grettings";

function paintGretting(text) {
    gretting.classList.remove(GRETTINGS_CN);
    gretting.classList.add(SHOWING_CN);
    gretting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LS)
    if (currentUser === null) {

    } else {
        paintGretting(currentUser);
    }
}
function init() {
    loadName();
}

init();