

class Slider {

  #rootNode;
  #imagesContainer;
  #currentSlideNum = 0;
  #currentShift = 0;

  constructor(rootNodeSelector, images) {
    const rootNode = document.querySelector(rootNodeSelector);
    if (!rootNode) {
      throw new Error('Incorrect root node!');
    }
    this.#rootNode = rootNode;
    this.images = images;
    this.#init();
  }

  // Shift formula: -1 * currentSlideNum * 100 + '%'
  navigateNext() {
    let targetSlide = this.#currentSlideNum + 1;
    if (targetSlide === this.images.length) {
      targetSlide = 0;
    }
    this.#currentSlideNum = targetSlide;
    const shiftValue =  -100 * this.#currentSlideNum;
    this.#currentShift = shiftValue;
    this.#imagesContainer.style.left = shiftValue + '%';
  }

  navigatePrev() {
    let targetSlide = this.#currentSlideNum - 1;
    if (targetSlide < 0) {
      targetSlide = this.images.length - 1;
    }
    this.#currentSlideNum = targetSlide;
    const shiftValue =  -100 * this.#currentSlideNum;
    this.#currentShift = shiftValue;
    this.#imagesContainer.style.left = shiftValue + '%';
  }

  #init() {
    const sliderContainerEl = document.createElement('div');
    sliderContainerEl.classList.add('sliderContainer');

    const slidesContainerEl = document.createElement('div');
    slidesContainerEl.classList.add('slidesContainer');

    const imagesContainerEl = document.createElement('div');
    imagesContainerEl.classList.add('imagesContainer');
    this.#imagesContainer = imagesContainerEl;

    // создать div.dotsContainer
    const dotsContainer = document.createElement('div');
    dotsContainer.classList.add('dotsContainer');

    // создать div.navigationContainer
    const navContainer = document.createElement('div');
    navContainer.classList.add('navContainer');
    const arrowLeft = document.createElement('div');
    arrowLeft.classList.add('arrow', 'arrowLeft');
    arrowLeft.textContent = 'Prev';
    const arrowRight = document.createElement('div');
    arrowRight.classList.add('arrow', 'arrowRight');
    arrowRight.textContent = 'Next';
    navContainer.append(arrowLeft, arrowRight);

    arrowLeft.addEventListener('click', this.navigatePrev.bind(this));
    arrowRight.addEventListener('click', this.navigateNext.bind(this));

    this.images.forEach( (img, idx) => {
      const imgEl = document.createElement('img');
      imgEl.src = img;
      imgEl.classList.add('slide');
      imagesContainerEl.append(imgEl);
      // создать элементы для точек: div.dot, и добавить в dotsContainer
      const dotEl = document.createElement('div');
      dotEl.classList.add('dot');
      dotEl.dataset.ordernum = idx;
      dotsContainer.append(dotEl);
    });

    slidesContainerEl.append(imagesContainerEl);
    sliderContainerEl.append(navContainer, slidesContainerEl, dotsContainer);

    this.#rootNode.append(sliderContainerEl);
  }
}


const sliderEl = new Slider('.slider', [
  'https://images.prom.ua/1029691327_w600_h600_labrador-retriver.jpg',
  'https://www.happypet.care/_next/image?url=https%3A%2F%2Fhappypetproduction.s3.ap-south-1.amazonaws.com%2FbreedFiles%2Fdog%2F64d6461c7712a1493d6bc279%2FgalleryImages%2Flarge_file_1725051198278.webp&w=1080&q=75',
  'https://cdn.wamiz.fr/cdn-cgi/image/format=auto,quality=80,width=532,height=532,fit=cover/animal/breed/dog/adult/66fd0ed8598bc632838841.jpg']);