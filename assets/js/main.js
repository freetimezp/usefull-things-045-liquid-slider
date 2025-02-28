const images = [
    "./assets/images/img-1.jpg",
    "./assets/images/img-2.jpg",
    "./assets/images/img-3.jpg"
];

const texts = [['UNLOCKED'], ['OFFBEAT'], ['ASTERIKS']];

rgbKineticSlider = new rgbKineticSlider({
    slideImages: images,
    itemsTitles: texts,

    backgroundDisplacementSprite: "http://hmongouachon.com/_demos/rgbKineticSlider/map-9.jpg",
    cursorDisplacementSprite: "http://hmongouachon.com/_demos/rgbKineticSlider/displace-circle.png",

    cursorScaleIntensity: 0.6,
    cursorMomentum: 0.14,

    swipe: true,
    swipeDistance: window.innerWidth * 0.4,
    swipeScaleIntensity: 2,

    slideTransitionDuration: 0.8,
    transitionScaleIntensity: 30,
    transitionScaleAmplitude: 160,

    nav: true,
    navElement: ".main-nav",

    imagesRgbEffect: false,

    textsDisplay: true,
    textTitleSize: 140,
    googleFonts: ['Playfair Display:700', 'Roboto:400'], // select google font to use
    textsTiltEffect: true,
    textsRgbEffect: true,
    textsRgbIntensity: 1
});
















