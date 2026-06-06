document.querySelectorAll(".whatsapp-btn").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    const phoneNumber = "355682060333";
    const packageName = this.dataset.package;

    const message = `Pershendetje, jam i interesuar per ${packageName}.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  });
});