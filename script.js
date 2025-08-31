
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault(); // prevent default jump
    const targetId = this.getAttribute("href"); // e.g. #about
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});


document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Thank you, " + name + "! Your message has been sent.");
  document.getElementById("contactForm").reset();
});
