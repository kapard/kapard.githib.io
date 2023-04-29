const scroller = document.querySelector(".scroll");

let indicator = 0;

function scroll() {
    indicator -= 100/6;
    if (indicator <= -100/6*4)
        indicator = 0;
    scroller.style.transform = `translateX(${indicator}%)`
}
scroller.addEventListener("click", scroll);
