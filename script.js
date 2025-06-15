// Mobile navigation toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    });
  });
}

// Contact form handling
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Basic validation
    if (!name || !email || !message) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Veuillez entrer une adresse email valide.");
      return;
    }

    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;

    submitBtn.innerHTML =
      '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
    submitBtn.disabled = true;

    // Simulate API call delay
    setTimeout(() => {
      // Hide form and show success message
      contactForm.style.display = "none";
      formSuccess.style.display = "block";

      // Reset form after success
      setTimeout(() => {
        contactForm.reset();
        contactForm.style.display = "block";
        formSuccess.style.display = "none";
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }, 5000);
    }, 2000);
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(15, 15, 35, 0.98)";
  } else {
    navbar.style.background = "rgba(15, 15, 35, 0.95)";
  }
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(
    ".skill-card, .project-card, .achievement-item, .timeline-item"
  );

  animatedElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// Project cards hover effects
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-5px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Skills cards hover effects
document.querySelectorAll(".skill-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.05)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Dynamic typing effect for hero title (optional enhancement)
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }

  type();
}

// Initialize typing effect on homepage
document.addEventListener("DOMContentLoaded", () => {
  const heroTitle = document.querySelector(".hero-title");
  if (
    (heroTitle && window.location.pathname.endsWith("index.html")) ||
    window.location.pathname === "/"
  ) {
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 80);
  }
});

// Progress bar for page loading
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => {
      loader.style.display = "none";
    }, 500);
  }
});

// Back to top button
const backToTop = document.createElement("button");
backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTop.className = "back-to-top";
backToTop.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #4a90e2, #357abd);
    color: white;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
`;

document.body.appendChild(backToTop);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.opacity = "1";
    backToTop.style.visibility = "visible";
  } else {
    backToTop.style.opacity = "0";
    backToTop.style.visibility = "hidden";
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Add hover effect to back to top button
backToTop.addEventListener("mouseenter", () => {
  backToTop.style.transform = "translateY(-2px)";
  backToTop.style.boxShadow = "0 6px 20px rgba(74, 144, 226, 0.4)";
});

backToTop.addEventListener("mouseleave", () => {
  backToTop.style.transform = "translateY(0)";
  backToTop.style.boxShadow = "0 4px 12px rgba(74, 144, 226, 0.3)";
});

// Enhanced form validation with real-time feedback
const formInputs = document.querySelectorAll(
  ".contact-form input, .contact-form textarea, .contact-form select"
);

formInputs.forEach((input) => {
  input.addEventListener("blur", validateField);
  input.addEventListener("input", clearError);
});

function validateField(e) {
  const field = e.target;
  const value = field.value.trim();

  // Remove existing error styling
  field.style.borderColor = "rgba(255, 255, 255, 0.2)";

  // Validate based on field type
  if (field.hasAttribute("required") && !value) {
    showFieldError(field, "Ce champ est obligatoire");
    return false;
  }

  if (field.type === "email" && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      showFieldError(field, "Veuillez entrer une adresse email valide");
      return false;
    }
  }

  return true;
}

function showFieldError(field, message) {
  field.style.borderColor = "#ef4444";

  // Remove existing error message
  const existingError = field.parentNode.querySelector(".field-error");
  if (existingError) {
    existingError.remove();
  }

  // Add error message
  const errorDiv = document.createElement("div");
  errorDiv.className = "field-error";
  errorDiv.style.cssText =
    "color: #ef4444; font-size: 0.875rem; margin-top: 0.25rem;";
  errorDiv.textContent = message;
  field.parentNode.appendChild(errorDiv);
}

function clearError(e) {
  const field = e.target;
  const errorMessage = field.parentNode.querySelector(".field-error");
  if (errorMessage) {
    errorMessage.remove();
    field.style.borderColor = "rgba(255, 255, 255, 0.2)";
  }
}

// Keyboard navigation enhancement
document.addEventListener("keydown", (e) => {
  // ESC key to close mobile menu
  if (e.key === "Escape" && navMenu && navMenu.classList.contains("active")) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }

  // Enter key to submit form
  if (e.key === "Enter" && e.target.tagName !== "TEXTAREA") {
    const form = e.target.closest("form");
    if (form) {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.click();
      }
    }
  }
});

// Performance optimization: Lazy loading for images
const images = document.querySelectorAll("img[data-src]");
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      img.removeAttribute("data-src");
      imageObserver.unobserve(img);
    }
  });
});

images.forEach((img) => imageObserver.observe(img));

// SAE Modal functionality
const showAllSaeBtn = document.getElementById("showAllSaeBtn");
const saeModal = document.getElementById("saeModal");
const modalClose = document.querySelector(".modal-close");

if (showAllSaeBtn && saeModal) {
  // Open modal
  showAllSaeBtn.addEventListener("click", () => {
    saeModal.style.display = "block";
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  });

  // Close modal when clicking the X
  if (modalClose) {
    modalClose.addEventListener("click", () => {
      saeModal.style.display = "none";
      document.body.style.overflow = "auto";
    });
  }

  // Close modal when clicking outside of it
  saeModal.addEventListener("click", (e) => {
    if (e.target === saeModal) {
      saeModal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });

  // Close modal with ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && saeModal.style.display === "block") {
      saeModal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
}
