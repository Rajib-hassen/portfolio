  // Animate progress bars
  const progressBars = document.querySelectorAll('.progress-bar');
  const circularProgresses = document.querySelectorAll('.circular-progress');

  progressBars.forEach(bar => {
    const progress = bar.getAttribute('data-progress');
    bar.style.width = `${progress}%`;
  });

  circularProgresses.forEach(circle => {
    const progress = circle.getAttribute('data-progress');
    circle.style.setProperty('--progress', `${progress}%`);
    const value = circle.querySelector('.progress-value');
    let start = 0;
    const end = parseInt(progress);
    const duration = 1500;
    const increment = end / (duration / 10);

    const timer = setInterval(() => {
      start += increment;
      value.textContent = `${Math.round(start)}%`;
      if (start >= end) {
        clearInterval(timer);
        value.textContent = `${end}%`;
      }
    }, 10);
  });

 
  // Filter Projects
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');

      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      // Filter projects
      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDescription = document.getElementById('lightbox-description');

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const imgSrc = card.querySelector('img').src;
      const title = card.querySelector('.project-title').textContent;
      const description = card.querySelector('.project-description').textContent;

      lightboxImg.src = imgSrc;
      lightboxTitle.textContent = title;
      lightboxDescription.textContent = description;
      lightbox.style.display = 'flex';
    });
  });

  // Close Lightbox
  document.querySelector('.close').addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });

  // Scroll-to-Top Button
  const scrollToTopBtn = document.getElementById('scroll-to-top');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.display = 'block';
    } else {
      scrollToTopBtn.style.display = 'none';
    }
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
