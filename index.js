var currentSlide = 0;

function changeSlide(direction) {
    console.log("run");
    if (direction == 1) {
        getSlide(currentSlide).style.display = "none";
        getSlide(++currentSlide).style.display = "block";
    } else {
        getSlide(currentSlide).style.display = "none";
        getSlide(--currentSlide).style.display = "block";
    }
}

function getSlide(n) {
    array = document.getElementsByClassName("slide");
    if (!array.length > 1) {
        console.log("not long enough");
        return array[0];
    }
    if (n == array.length) {
        console.log("overflow");
        currentSlide = 0
        return array[currentSlide];
    }
    if (n == -1) {
        console.log("underflow");
        currentSlide = array.length-1
        return array[currentSlide];
    }
    return array[n];
}