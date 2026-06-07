const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
const form = document.querySelector(".contacts__form-inner");

burger.addEventListener("click", function () {
  nav.classList.toggle("hidden");
});

if (form) {
  form.addEventListener("submit", function (e) {
    const phone = form.querySelector('input[name="phone"]').value;
    const phoneRegex = /^[\d\s\+\-\(\)]{7,15}$/;

    if (!phoneRegex.test(phone)) {
      e.preventDefault();
      alert("Введите корректный номер телефона");
    }
  });
}
