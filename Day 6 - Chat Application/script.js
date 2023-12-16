function sendMessage() {
 const messageInput = document.getElementById('message-input');
 const message = messageInput.value;

 if (message.trim() !== '') {
     displayMessage('You', message);
     messageInput.value = '';
 }
}

function displayMessage(user, message) {
 const chatMessages = document.getElementById('chat-messages');
 const messageDiv = document.createElement('div');
 messageDiv.innerHTML = `<strong>${user}:</strong> ${message}`;
 chatMessages.appendChild(messageDiv);
}
