class Slider {

  #slidesContainerEl;
  #dotsContainerEl;

  constructor(domSelector, images, options) {
    const rootNode = document.querySelector(domSelector);
    if (!rootNode) {
      throw new Error('Incorrect root node!');
    }
    this.rootNode = rootNode;
    this.images = images;
    this.options = options; // || defaults
    // State
    this.currentSlideIndex = 0;
    this.currentLeftShift = 0;
  }

  init() {
    // Slides container
    const slidesContainerEl = document.createElement('div');
    slidesContainerEl.classList.add('slidesContainer');
    // Dots container
    const dotsContainerEl = document.createElement('div');
    dotsContainerEl.classList.add('dotsContainer');
    // Inflating slides and dots
    this.images.forEach(img => {
      const slideEl = document.createElement('div');
      slideEl.classList.add('slide');
      const imgEl = document.createElement('img');
      imgEl.src = img;
      slideEl.append(imgEl);
      slidesContainerEl.append(slideEl);

      const dotEl = document.createElement('div');
      dotEl.classList.add('dot');
      dotsContainerEl.append(dotEl);
    });

    // Navigation
    const navContainerEl = document.createElement('div');
    navContainerEl.classList.add('slidesNavigation');
    const leftArrow = document.createElement('div');
    leftArrow.classList.add('arrow', 'left');
    leftArrow.textContent = 'Prev';
    const rightArrow = document.createElement('div');
    rightArrow.classList.add('arrow', 'right');
    rightArrow.textContent = 'Next';
    navContainerEl.append(leftArrow, rightArrow);

    // Adding into DOM
    this.rootNode.append(navContainerEl, slidesContainerEl, dotsContainerEl);
    // Save link
    this.#slidesContainerEl = slidesContainerEl;
    this.#dotsContainerEl = dotsContainerEl;

    // Event listeners
    leftArrow.addEventListener('click', this.#slidePrev.bind(this));
    rightArrow.addEventListener('click', this.#slideNext.bind(this));
  }

  #slidePrev() {
    let targetSlideIndex = this.currentSlideIndex - 1;
    if (targetSlideIndex < 0) {
      targetSlideIndex = this.images.length - 1;
    }
    const newLeft = (-100 * targetSlideIndex);
    this.currentLeftShift = newLeft;
    this.#slidesContainerEl.style.left = newLeft + '%';
    this.currentSlideIndex = targetSlideIndex;
  }

  #slideNext() {
    let targetSlideIndex = this.currentSlideIndex + 1;
    if (targetSlideIndex === this.images.length) {
      targetSlideIndex = 0;
    }
    const newLeft = (-100 * targetSlideIndex);
    this.currentLeftShift = newLeft;
    this.#slidesContainerEl.style.left = newLeft + '%';
    this.currentSlideIndex = targetSlideIndex;
  }
}

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkS27iyLb_F_MQNX1ZSsAt39GMh1_gM0LpLQ&s',
  'https://cdn.fishki.net/upload/post/2022/09/17/4265074/tn/451237f7e654f398aabe255184e20f64.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ZFf286QHxalFb8A4ACXvOzY3gVXSrBX2Jw&s'
];

const slider = new Slider('.slider', images);
slider.init();