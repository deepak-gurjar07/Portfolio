const scriptURL = 'https://script.google.com/macros/s/AKfycbzbROEiefaY3IqiBiGxyVFvMmYDk1dazr6E8vk78ZIi2E3mZtohCUa75R5SJCg-B5c0yg/exec'
const form = document.forms['contact-form']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      msg.innerHTML = "Success!"
      setTimeout(function () {
        msg.innerHTML = ""
      }, 5000);
      form.reset()

    })
    .catch(error => console.error('Error!', error.message))
})

window.addEventListener("hashchange", function() {
var sectionId = window.location.hash.substring(1);
var sections = document.querySelectorAll(".section");
sections.forEach(function(section) {
section.style.display = "none";
});
var activeSection = document.getElementById(sectionId);
if (activeSection) {
activeSection.style.display = "block";
}
});

function about(){
    window.location.replace("about.html");
}