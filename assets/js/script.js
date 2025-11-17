// ===================================
// CRhub - JavaScript Principal
// ===================================

document.addEventListener("DOMContentLoaded", function () {
  // ===================================
  // Navbar Scroll Effect
  // ===================================
  const navbar = document.querySelector(".navbar");

  function updateNavbar() {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "rgba(51, 159, 215, 0.95)";
      navbar.style.backdropFilter = "blur(10px)";
    } else {
      navbar.style.backgroundColor = "rgba(51, 159, 215, 1)";
      navbar.style.backdropFilter = "none";
    }
  }

  window.addEventListener("scroll", updateNavbar);
  updateNavbar();

  // ===================================
  // Login Modal Handlers
  // ===================================

  // Toggle Password Visibility
  const togglePassword = document.getElementById("togglePassword");
  const loginPassword = document.getElementById("loginPassword");

  if (togglePassword && loginPassword) {
    togglePassword.addEventListener("click", function () {
      const type =
        loginPassword.getAttribute("type") === "password" ? "text" : "password";
      loginPassword.setAttribute("type", type);

      const icon = this.querySelector("i");
      icon.classList.toggle("bi-eye");
      icon.classList.toggle("bi-eye-slash");
    });
  }

  // Forgot Password Handler
  const forgotPasswordLink = document.querySelector(".forgot-password");
  if (forgotPasswordLink) {
    forgotPasswordLink.addEventListener("click", function (e) {
      e.preventDefault();

      let message = `Olá! Preciso de ajuda para recuperar minha senha do CRhub.%0A%0A`;
      const email = document.getElementById("loginEmail").value;

      if (email) {
        message += `Meu email cadastrado é: *${email}*%0A%0A`;
      }

      message += `Poderiam me ajudar com a recuperação?%0A%0AObrigado!`;

      const whatsappURL = `https://api.whatsapp.com/send?phone=5511999999999&text=${message}`;
      window.open(whatsappURL, "_blank");
    });
  }

  // Login Form Handler
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;
      const rememberMe = document.getElementById("rememberMe").checked;

      if (!email || !password) {
        alert("Por favor, preencha todos os campos.");
        return;
      }

      // Simular loading
      const submitButton = this.querySelector('button[type="submit"]');
      const originalText = submitButton.innerHTML;

      submitButton.innerHTML =
        '<i class="bi bi-hourglass-split me-2"></i>Verificando...';
      submitButton.disabled = true;

      // Simular verificação (em produção seria uma chamada para o backend)
      setTimeout(() => {
        // Para demonstração, vamos simular sucesso
        alert(
          "Funcionalidade em desenvolvimento!\n\nEm breve você poderá acessar o sistema CRhub completo."
        );

        // Reset do botão
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;

        // Fechar modal
        const modal = bootstrap.Modal.getInstance(
          document.getElementById("loginModal")
        );
        if (modal) {
          modal.hide();
        }

        // Limpar formulário
        loginForm.reset();
      }, 2000);
    });
  }

  // Clear form when modal is hidden
  const loginModal = document.getElementById("loginModal");
  if (loginModal) {
    loginModal.addEventListener("hidden.bs.modal", function () {
      const form = document.getElementById("loginForm");
      if (form) {
        form.reset();
      }

      // Reset password visibility
      const passwordField = document.getElementById("loginPassword");
      const toggleIcon = document.querySelector("#togglePassword i");

      if (passwordField && toggleIcon) {
        passwordField.setAttribute("type", "password");
        toggleIcon.classList.remove("bi-eye-slash");
        toggleIcon.classList.add("bi-eye");
      }
    });
  }

  // ===================================
  // Pricing Plan Handlers
  // ===================================
  const pricingButtons = document.querySelectorAll(".pricing-card .btn");

  pricingButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      const card = this.closest(".pricing-card");
      const planName = card.querySelector(".plan-name").textContent;
      const price = card.querySelector(".price").textContent;

      let message = `Olá! Tenho interesse no plano *${planName}* (R$ ${price}/mês).%0A%0A`;

      switch (planName) {
        case "Basic":
          message += `Gostaria de saber mais sobre o plano Basic para até 10 usuários.%0A%0A`;
          message += `Preciso de mais informações sobre:%0A`;
          message += `• Pipeline de vendas%0A`;
          message += `• Gestão de contatos%0A`;
          message += `• Relatórios básicos%0A%0A`;
          break;

        case "Standard":
          message += `Estou interessado no plano Standard com *integração WhatsApp*.%0A%0A`;
          message += `Gostaria de entender melhor:%0A`;
          message += `• Como funciona a integração direta com WhatsApp%0A`;
          message += `• Automações avançadas disponíveis%0A`;
          message += `• Relatórios avançados%0A%0A`;
          break;

        case "Professional":
          message += `Tenho interesse no plano Professional com *Inteligência Artificial*.%0A%0A`;
          message += `Preciso de uma consultoria especializada para entender:%0A`;
          message += `• Como a IA pode otimizar nossas vendas%0A`;
          message += `• Previsões de vendas com IA%0A`;
          message += `• Análise comportamental de clientes%0A%0A`;
          break;
      }

      message += `Quando podemos agendar uma demonstração?`;

      const whatsappURL = `https://api.whatsapp.com/send?phone=5511999999999&text=${message}`;
      window.open(whatsappURL, "_blank");
    });
  });

  // ===================================
  // WhatsApp Form Handler
  // ===================================
  const whatsappForm = document.getElementById("whatsappForm");

  if (whatsappForm) {
    whatsappForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = document.getElementById("nome").value;
      const empresa = document.getElementById("empresa").value;
      const servico = document.getElementById("servico").value;
      const mensagem = document.getElementById("mensagem").value;

      if (!nome || !servico) {
        alert("Por favor, preencha seu nome e selecione o tipo de serviço.");
        return;
      }

      const servicosMap = {
        demonstracao: "Demonstração do Sistema",
        consultoria: "Consultoria CRM",
        implementacao: "Implementação Completa",
        suporte: "Suporte Técnico",
        outros: "Outros Assuntos",
      };

      const servicoNome = servicosMap[servico] || servico;
      let whatsappMessage = `Olá! Meu nome é *${nome}*`;

      if (empresa) {
        whatsappMessage += ` e represento a empresa *${empresa}*`;
      }

      whatsappMessage += `.%0A%0AGostaria de saber mais sobre: *${servicoNome}*`;

      if (mensagem) {
        whatsappMessage += `%0A%0A*Mensagem:* ${mensagem}`;
      }

      whatsappMessage += `%0A%0AObrigado pelo contato!`;

      const whatsappURL = `https://api.whatsapp.com/send?phone=5511999999999&text=${whatsappMessage}`;
      window.open(whatsappURL, "_blank");

      whatsappForm.reset();
    });
  }

  // ===================================
  // Smooth Scroll e outras funcionalidades
  // ===================================
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");

      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          const navbarHeight = navbar.offsetHeight;
          const targetPosition = targetElement.offsetTop - navbarHeight - 20;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });

          const navbarToggler = document.querySelector(".navbar-toggler");
          const navbarCollapse = document.querySelector(".navbar-collapse");

          if (navbarToggler && navbarCollapse.classList.contains("show")) {
            navbarToggler.click();
          }
        }
      }
    });
  });

  // ===================================
  // Interface Slider
  // ===================================
  const slider = document.querySelector(".interface-slider");
  if (slider) {
    const slides = slider.querySelectorAll(".slide");
    const indicators = slider.querySelectorAll(".indicator");
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide) => slide.classList.remove("active"));
      indicators.forEach((indicator) => indicator.classList.remove("active"));

      currentSlide = index;
      if (slides[currentSlide]) slides[currentSlide].classList.add("active");
      if (indicators[currentSlide])
        indicators[currentSlide].classList.add("active");
    }

    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => showSlide(index));
    });

    setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length;
      showSlide(nextSlide);
    }, 4000);

    showSlide(0);
  }

  // ===================================
  // Highlight Plan Features
  // ===================================
  const planCards = document.querySelectorAll(".pricing-card");

  planCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      const features = this.querySelectorAll(".features-list li strong");
      features.forEach((feature) => {
        feature.style.color = "var(--primary-color)";
        feature.style.transform = "scale(1.05)";
      });
    });

    card.addEventListener("mouseleave", function () {
      const features = this.querySelectorAll(".features-list li strong");
      features.forEach((feature) => {
        feature.style.color = "";
        feature.style.transform = "";
      });
    });
  });
});
