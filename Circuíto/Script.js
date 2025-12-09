function sendMessage() {
        const input = document.getElementById("userInput");
        const msg = input.value.trim();
        if (msg === "") return;

        addMessage(msg, "user");
        

        setTimeout(() => {
            botResponse(msg);
        }, 500);
    }

    function addMessage(text, sender) {
        const messages = document.getElementById("messages");
        const div = document.createElement("div");
        div.classList.add("message", sender);
        div.innerText = text;
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
    }

    function botResponse(userMessage) {
        let response = "Não entendi, poderia repetir?";

        userMessage = userMessage.toLowerCase();

        if (userMessage.includes("oi") || userMessage.includes("olá")) {
            response = "Olá! Como posso ajudar?";
        } 
        else if (userMessage.includes("horário")) {
            response = "Nosso horário de atendimento é das 8h às 18h.";
        } 
        else if (userMessage.includes("site")) {
            response = "Claro! Nosso site está em constante atualização 😊";
        } 
        else if (userMessage.includes("tchau")) {
            response = "Até mais! Estou aqui se precisar.";
        }

        addMessage(response, "bot");
    }

    const sendButton = document.getElementById('sendButton');
        if (sendButton) {
            sendButton.addEventListener('click', sendMessage);
        }

    //O código acima é referente ao assistênte virtual.\\

  