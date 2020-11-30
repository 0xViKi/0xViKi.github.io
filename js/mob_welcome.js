var textWrapper = document.querySelector('.mob_welcome');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({
    loop: false
}).add({
    targets: '.mob_welcome .letter',
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 250 * i
}).add({
    targets: '.mob_welcome',
    opacity: 0,
    duration: 5,
    easing: "easeOutExpo",
    delay: 5
});
