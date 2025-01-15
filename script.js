const button = document.getElementById("movingButton");
const message = document.getElementById("message");
const whatsappButton = document.getElementById("whatsappButton");
const changeTextButton = document.getElementById("changeTextButton");
let attempts = 0;

button.addEventListener("click", () => {
  if (attempts < 5) {
    // Move the button
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    attempts++;
  } else {
    // Hide the main button and show the message and both new buttons
    button.style.display = "none";
    message.classList.add("show");
    whatsappButton.classList.add("show");
    changeTextButton.classList.add("show");
  }
});

// WhatsApp button click event
whatsappButton.addEventListener("click", () => {
  const phoneNumber = "+6283141373287"; // Replace with your phone number (e.g., +62 for Indonesia)
  const text = encodeURIComponent("Hayo lo, ngetik apa");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${text}`;
  window.open(whatsappUrl, "_blank");
});

// Change text button click event
changeTextButton.addEventListener("click", () => {
  message.textContent = "Dibilang jangan di pencet, Harus Iya pokoknya";
});
