document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });

  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const message = document.querySelector("#message").value;
      const telegram_message = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
      fetch(`https://api.telegram.org/bot$7573597116:AAGExToje_wGYQrQyewS85v7rlaA3qyHwzc/sendMessage`, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  chat_id: 6797462730,
                  text: telegram_message
              })
      })
          .catch(error => {
              console.error('Error sending message:', error);
      });
  });
