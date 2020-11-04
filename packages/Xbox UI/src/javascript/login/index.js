function handlerLoadProfiles(profilesData) {
    const container = document.querySelector("#container_profiles");
    profilesData.map((profile, index) => {
        return container.innerHTML += (`<div class="card_large"
            onclick="handlerSelectProfile(${index})"
            onmouseover="debounce(handlerProfile,${index},1000)"
        >
            <div class="group_content">
                <img src='${profile.profile.avatar_url}'
                    alt="Avatar image" class="image_avatar element_focus" id="item${index}"/>
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
    const profileData = profilesData[index_profile]
    sessionStorage.setItem("profile", JSON.stringify(profileData))
    handlerShowBoxMessage(profileData.user.email)

}

function handlerProfile(index_profile) {
    const body = document.querySelector("body");
    const profileAvatar = `#item${index_profile}`;
    const profileSelected = profilesData[index_profile];

    handlerSetTheme(body, profileAvatar, profileSelected?.config?.system?.theme)
}

function handlerShowOthersOptions() {
    const container = document.querySelector("#container_profiles");

    container.innerHTML += ` <div class="card_large">
                <div class="group_content">
                    <button type="button" class="button_add">+</button>
                </div>

                <div class="group_content">
                    <div class="informations_avatar">
                        <span class="strong">Add New</span>
                    </div>
                </div>
            </div>
            <div class="card_large">
                <div class="group_content">
                    <button type="button" class="button_add"><i class="fa fa-user-times fa-lg" aria-hidden="true"></i></button>
                </div>

                <div class="group_content">
                    <div class="informations_avatar">
                        <span class="strong">Ignore session start</span>
                    </div>
                </div>
            </div>`
}

function setAuthenticate(password = "") {
    const profileData = JSON.parse(sessionStorage.getItem("profile"))
    if (profileData.user.password === password) {
        window.location.href = "./src/pages/home/index.html"
    } else {
        alert('Senha incorreta!')
        return false;
    }
}
