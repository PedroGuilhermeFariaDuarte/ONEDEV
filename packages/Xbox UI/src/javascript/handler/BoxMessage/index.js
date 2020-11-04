let inputBoxValue = "";

function handlerShowBoxMessage(emailProfile) {
    document.querySelector("body").innerHTML += `<div class="boxMessage">
        <div class="boxMessage_group">
            <h1>Insira sua senha</h1>
            <span>Como você está acessando informações confidencias, é necessário verificar sua para ${emailProfile}</span>
        </div>
        <div class="boxMessage_group">
            <input type="password" class="input_box" placeholder="Sua senha"
                onfocus="debounce(handlerSetThemeDetails,event)"
                onchange="debounce(getValueInputBox,event)"
                id="inputBox">
                <div class="buttons_group">
                    <button type="button" id="button1" onmouseover="debounce(handlerSetThemeDetails,event)" onclick="handlerSetAuthenticate()">continuar</button>
                    <button type="button" id="button2" onmouseover="debounce(handlerSetThemeDetails,event)" onclick="setCloseBoxMessage()">voltar</button>
                </div>
        </div>
    </div>`
}

function setCloseBoxMessage() {
    document.querySelector(".boxMessage").remove()
}

function handlerSetAuthenticate() {
    setAuthenticate(inputBoxValue)
}

function getValueInputBox(event) {
    const target = event.currentTarget;
    inputBoxValue = target.value.trim()
}
