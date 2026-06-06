document.querySelectorAll(".whatsapp-hosting").forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    const phoneNumber = "355682060333";
    const planName = this.dataset.plan;

    const message = `Pershendetje, jam i interesuar per ${planName}.`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  });
});