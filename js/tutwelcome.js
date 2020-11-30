var textWrapper = document.querySelector('.tutHead');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({
    loop: true
}).add({
    targets: '.tutHead .letter',
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 250 * i
}).add({
    targets: '.tutHead',
    opacity: 0,
    duration: 5,
    easing: "easeOutExpo",
    delay: 5
});
