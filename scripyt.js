function handleSubmit(event) {
    event.preventDefault(); // Impede o envio do formulário para simular um envio bem-sucedido

    // Pegando os dados do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simulando um envio com sucesso
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.textContent = `Obrigado, ${name}! Seu nome foi enviado com sucesso. Entraremos em contato em breve.`;
    responseMessage.textContent = `Obrigado, ${email}! Seu email foi enviado com sucesso. Entraremos em contato em breve.`;
    responseMessage.textContent = `Obrigado, ${message}! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.`;

    // Limpa o formulário
    document.getElementById("form").reset();
}
