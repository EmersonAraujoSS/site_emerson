// Animações e efeitos modernos
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas as funcionalidades
    initSmoothScrolling();
    initScrollAnimations();
    initTypingEffect();
    initParticleEffect();
    initMobileMenu();
    initContactForm();
    initFloatingWhatsApp();
    initHeaderScroll();
    initModernAnimations();
});

// Smooth scrolling para links de navegação
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Animações de scroll com Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');

                // Animação especial para estatísticas
                if (entry.target.classList.contains('stat-number')) {
                    animateCounter(entry.target);
                }

                // Animação especial para skills
                if (entry.target.classList.contains('skill-item')) {
                    animateSkillBar(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observar elementos para animação
    document.querySelectorAll('.fade-in, .stat-number, .skill-item, .service-card').forEach(el => {
        observer.observe(el);
    });
}

// Efeito de digitação no título hero
function initTypingEffect() {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '3px solid var(--primary-color)';

        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                // Piscar cursor por alguns segundos
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 2000);
            }
        };

        setTimeout(typeWriter, 1000);
    }
}

// Efeito de partículas no background
function initParticleEffect() {
    const hero = document.querySelector('.hero');
    if (hero) {
        // Criar partículas flutuantes
        for (let i = 0; i < 50; i++) {
            createParticle(hero);
        }
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: rgba(59, 130, 246, ${Math.random() * 0.5 + 0.2});
        border-radius: 50%;
        pointer-events: none;
        animation: float ${Math.random() * 10 + 10}s linear infinite;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        z-index: 1;
    `;
    container.appendChild(particle);
}

// Menu mobile
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            });
        });
    }
}

// Formulário de contato
function initContactForm() {
    const form = document.getElementById('contactForm');
    const whatsappButton = document.getElementById('whatsappSubmit');

    if (form && whatsappButton) {
        whatsappButton.addEventListener('click', function(e) {
            e.preventDefault();

            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const phone = formData.get('phone');
            const service = formData.get('service');
            const message = formData.get('message');

            // Validação
            if (!name || !email || !message) {
                showNotification('Por favor, preencha todos os campos obrigatórios!', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showNotification('Por favor, insira um email válido!', 'error');
                return;
            }

            // Organizar mensagem para WhatsApp
            let whatsappMessage = `Olá! Vim pelo site e gostaria de conversar sobre um projeto.\n\n`;
            whatsappMessage += `*Informações do Contato:*\n`;
            whatsappMessage += `*Nome:* ${name}\n`;
            whatsappMessage += `*Email:* ${email}\n`;

            if (phone) {
                whatsappMessage += `*Telefone:* ${phone}\n`;
            }

            if (service && service !== '') {
                const serviceNames = {
                    'site': 'Criação de Site',
                    'sistema': 'Sistema Web',
                    'fullstack': 'Desenvolvimento Full Stack',
                    'consultoria': 'Consultoria',
                    'outro': 'Outro'
                };
                whatsappMessage += `*Tipo de Serviço:* ${serviceNames[service] || service}\n`;
            }

            whatsappMessage += `\n*Mensagem:*\n${message}`;

            // Redirecionar para WhatsApp
            const whatsappURL = `https://wa.me/5592993975056?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappURL, '_blank');

            showNotification('Redirecionando para o WhatsApp...', 'success');

            // Limpar formulário após 2 segundos
            setTimeout(() => {
                form.reset();
            }, 2000);
        });
    }
}

// WhatsApp flutuante
function initFloatingWhatsApp() {
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const message = 'Olá! Gostaria de saber mais sobre seus serviços.';
            const whatsappURL = `https://wa.me/5592993975056?text=${encodeURIComponent(message)}`;
            window.open(whatsappURL, '_blank');
        });
    }
}

// Header dinâmico
function initHeaderScroll() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
            header.classList.add('scrolled');

            if (currentScrollY > lastScrollY) {
                header.classList.add('hidden');
            } else {
                header.classList.remove('hidden');
            }
        } else {
            header.classList.remove('scrolled', 'hidden');
        }

        lastScrollY = currentScrollY;
    });
}

// Animações modernas adicionais
function initModernAnimations() {
    // Animação de hover para cards de serviço
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) rotateX(5deg)';
            this.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotateX(0)';
        });
    });

    // Animação de ondas para botões
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Parallax suave para seções
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');

        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}

// Animação de contador para estatísticas
function animateCounter(element) {
    const target = parseInt(element.textContent);
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}

// Animação de barra de habilidades
function animateSkillBar(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateX(-20px)';

    setTimeout(() => {
        element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        element.style.opacity = '1';
        element.style.transform = 'translateX(0)';
    }, Math.random() * 200);
}

// Validação de email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Sistema de notificações
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? 'var(--gradient-primary)' : '#ef4444'};
        color: white;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow-lg);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    `;
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// CSS adicional para animações
const additionalCSS = `
    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-10px) rotate(1deg); }
        66% { transform: translateY(5px) rotate(-1deg); }
    }

    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    .animate-in {
        animation: slideInUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    }

    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .particle {
        animation: float 20s linear infinite;
    }
`;

// Adicionar CSS ao documento
const style = document.createElement('style');
style.textContent = additionalCSS;
document.head.appendChild(style);
