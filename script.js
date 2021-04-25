function createButton(text) {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "btn";
    button.innerText = text;

    return button;
};

function createChat() {
    const container = document.createElement("div")
    container.className = "main-container"

    const chatContainer = document.createElement("div")
    chatContainer.className = "chat-field"

    const chat = document.createElement("ul")
    chat.innerHTML = "Чат с Ботом"

    const inputContainer = document.createElement("div")
    inputContainer.className = "input-container";
    const input = document.createElement("input")
    input.type = "text"
    input.className = "chat-input"
    const button = createButton("Отправить")

    chatContainer.appendChild(chat)

    inputContainer.appendChild(input);
    inputContainer.appendChild(button);

    container.appendChild(chatContainer);
    container.appendChild(inputContainer);

    document.body.appendChild(container)

    const botAnswers = new Map([
        ["привет", "привет!!"], ["хай", "хай"], ["ой все", "пока"], ["до свиданья", "увидимся"], ["как дела?", "нормально"],
        ["ghbdtn", "hello"], ["ку", "йоу"], ["нагугли", "google.com - сам нагугли"]
    ])

    async function chatting() {
        const botList = document.createElement("li")
        botList.className = "bot-list"

        async function botAnswer() {
            const value = input.value.toLowerCase();
            if (botAnswers.has(value)) {
                botList.innerHTML = botAnswers.get(value)
                chat.appendChild(botList)
            } else {
                botList.innerHTML = "Не могу ответить Вам!"
                chat.appendChild(botList)
            } input.value = ""
        }
        botAnswer()
    }

    function wait(delay) {
        return setTimeout(chatting, delay)
    }

    window.addEventListener("keypress", async function (event) {

        const keyName = event.key;
        if (keyName === "Enter") {
            const list = document.createElement("li")
            list.className = "list"
            list.innerHTML = input.value
            chat.appendChild(list);
            await wait(1000)
        }
    })

    button.addEventListener("click", async function () {

        const list = document.createElement("li")
        list.className = "list"
        list.innerHTML = input.value
        chat.appendChild(list);
        await wait(1000)
    })
    return container
}

createChat()