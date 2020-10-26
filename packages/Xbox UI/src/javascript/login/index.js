function handlerLoadProfiles(profilesData) {
    const container = document.querySelector("#container_profiles");
    profilesData.map((profile, index) => {
        return container.innerHTML += (`<div class="card_large" onclick="handlerSelectProfile(${index})" onmouseover="handlerSetTheme(${index})">
            <div class="group_content">
                <image src='${profile.profile.avatar_url}'
                    alt="Avatar image" class="image_avatar" id="item${index}"/>
            </div>
            <div class="group_content">
                <div class="informations_avatar">
                    <span class="strong">${profile.profile.gamertag}</span>
                    <span class="info">${profile.user.full_name}</span>
                    <span class="info"><span class="gamescore"></span> ${profile.profile.gamescore}</span>
                </div>
            </div>
        </div>`)
    })
}

function handlerSelectProfile(index_profile) {
    sessionStorage.setItem("profile", JSON.stringify(profilesData[index_profile]))
    window.location.href = "./src/pages/home/index.html"
}

function handlerSetTheme(index_profile) {
    const body = document.querySelector("body");
    const profileAvatar = document.querySelector(`#item${index_profile}`);
    const profileSelected = profilesData[index_profile];

    body.style.background = `var(${profileSelected?.config?.system?.theme?.name})`;

    if (handlerRemoveTheme()) {
        profileAvatar.classList.add(`${profileSelected?.config?.system?.theme?.className}`)
        profileAvatar.style.transform = "scale(1.2)";
    }

}

function handlerRemoveTheme() {
    document.querySelectorAll("img").forEach(item => {
        item.style.transform = "scale(1)";
        item.setAttribute("class", "image_avatar")
    })
    return true;
}
