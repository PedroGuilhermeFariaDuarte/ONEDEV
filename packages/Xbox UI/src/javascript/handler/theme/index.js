function handlerSetTheme(body, element = false, theme) {
    body.style.background = `var(${theme?.name})`;

    if (element) {
        setThemeElement(element, theme, true, { attribute: "class", value: "image_avatar" });
    }
}

function setThemeElement(elementName, theme, scale = false, oldState) {
    const target = document.querySelector(elementName)

    if (handlerRemoveThemeElement(elementName, scale, oldState)) {
        target.classList.add(`${theme?.className}`)
        target.setAttribute("style", "")
        if (scale) target.style.transform = "scale(1.2)";
    }
}

function handlerRemoveThemeElement(elementName, scale = false, oldState = false) {

    document.querySelectorAll('.image_avatar, .card, .card_very_small, span, button').forEach(target => {
        const idTarget = `#${target.getAttribute("id")}`

        if (scale) target.style.transform = "scale(1)";

        if (idTarget !== elementName) {
            target.style.boxShadow = "none"
            target.style.animation = "none"
        }
    })

    return true;
}

function handlerSetThemeDetails(event) {
    const profileData = JSON.parse(sessionStorage.getItem("profile"))
    const theme = profileData.config?.system?.theme
    const card = event.currentTarget
    setThemeElement(`#${card.getAttribute("id")}`, theme, false, { attribute: "class", value: "card_very_small" })
}
