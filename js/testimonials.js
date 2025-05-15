    const testimonials = [
      {
        text: "Working with this team was a dream. They delivered high-quality work on time and always kept communication clear.",
        author: "John Doe",
        role: "UI/UX Designer",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg"
      },
      {
        text: "They brought our vision to life with elegance and functionality. We’ve already seen great results!",
        author: "Jane Smith",
        role: "Web Developer",
        avatar: "https://randomuser.me/api/portraits/women/65.jpg"
      },
      {
        text: "Absolutely thrilled with the professionalism and attention to detail. Would highly recommend to others!",
        author: "Carlos Rivera",
        role: "Marketing Manager",
        avatar: "https://randomuser.me/api/portraits/men/55.jpg"
      },
      {
        text: "Their creative approach set them apart. Every suggestion was thoughtful and grounded in strategy.",
        author: "Lisa Nguyen",
        role: "Product Manager",
        avatar: "https://randomuser.me/api/portraits/women/24.jpg"
      },
      {
        text: "Top-notch service from beginning to end. The team was knowledgeable, responsive, and talented.",
        author: "Amit Patel",
        role: "Entrepreneur",
        avatar: "https://randomuser.me/api/portraits/men/60.jpg"
      }
    ];

    const avatarPositions = [
      { top: "-30px", left: "-50px" },
      { bottom: "-50px", right: "140px" },
      { bottom: "30px", left: "-40px" },
      { bottom: "70px", right: "-60px" },
      { top: "-60px", right: "80px" }
    ];

    let currentTestimonial = 0;

    function showTestimonial(index) {
      const testimonial = testimonials[index];
      document.getElementById('testimonialText').textContent = testimonial.text;
      document.getElementById('testimonialAuthor').textContent = testimonial.author;
      document.getElementById('testimonialRole').textContent = testimonial.role;

      const avatarLayer = document.getElementById('avatarLayer');
      avatarLayer.innerHTML = '';

      testimonials.forEach((t, i) => {
        const img = document.createElement('img');
        img.src = t.avatar;
        img.className = 'avatar';
        if (i === index) img.classList.add('active');

        Object.assign(img.style, avatarPositions[i]);

        avatarLayer.appendChild(img);
      });

      document.querySelectorAll('.dot').forEach(dot => dot.classList.remove('active'));
      document.querySelectorAll('.dot')[index].classList.add('active');
    }

    function setupDots() {
      const dotsContainer = document.getElementById('testimonialDots');
      testimonials.forEach((_, idx) => {
        const dot = document.createElement('span');
        dot.className = 'dot';
        dot.addEventListener('click', () => {
          currentTestimonial = idx;
          showTestimonial(idx);
        });
        dotsContainer.appendChild(dot);
      });
    }

    setupDots();
    showTestimonial(currentTestimonial);

    setInterval(() => {
      currentTestimonial = (currentTestimonial + 1) % testimonials.length;
      showTestimonial(currentTestimonial);
    }, 5000);