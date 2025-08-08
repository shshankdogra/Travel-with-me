const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container form", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".feature__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".destination__card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".package__card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
  },
});
function simulatePayment() {
  const status = document.getElementById("payment-status");
  const success = document.getElementById("payment-success");

  status.classList.remove("hidden");
  success.classList.add("hidden");

  setTimeout(() => {
    status.classList.add("hidden");
    success.classList.remove("hidden");
  }, 3000);
}
document.addEventListener("DOMContentLoaded", function () {
  // ===== Join Us Modal =====
  const joinBtn = document.querySelector(".discount__btn .btn");
  const joinModal = document.getElementById("joinModal");
  const closeModal = document.getElementById("closeModal");

  joinBtn.addEventListener("click", () => {
    joinModal.classList.remove("hidden");
  });

  closeModal.addEventListener("click", () => {
    joinModal.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === joinModal) {
      joinModal.classList.add("hidden");
    }
  });

  // ===== Booking Modal =====
  const bookBtns = document.querySelectorAll(".package__card .btn");
  const bookingModal = document.getElementById("bookingModal");
  const closeBookingModal = document.getElementById("closeBookingModal");
  const packageNameText = document.getElementById("packageName");

  bookBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const packageTitle = e.target
        .closest(".package__card")
        .querySelector("h4").innerText;
      packageNameText.innerText = `Package: ${packageTitle}`;
      bookingModal.classList.remove("hidden");
    });
  });

  closeBookingModal.addEventListener("click", () => {
    bookingModal.classList.add("hidden");
  });

  window.addEventListener("click", (e) => {
    if (e.target === bookingModal) {
      bookingModal.classList.add("hidden");
    }
  });

  // ===== Swiper Init =====
  const swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPerView: 1,
  });
});
