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
        if (scale) target.style.transform = "scale(1.2)";
    }
}

function handlerRemoveThemeElement(_elementName, scale = false, oldState = false) {

    document.querySelectorAll('.image_avatar, .card').forEach(target => {
        if (scale) target.style.transform = "scale(1)";
        target.setAttribute(oldState.attribute, oldState.value)
    })

    return true;
}
