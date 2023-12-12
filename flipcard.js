// click the card and flip it
function clickFlipCard(outer2) {
    var card = outer2.querySelector(".card");
    card.classList.toggle("card-flipped");
    outer2.classList.toggle("card-outer2-active");
}

function hoverFlipCard(outer2) {
    outer2.classList.toggle("card-outer2-active");
}