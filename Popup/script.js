var btn = document.querySelector('.btn');
var popup = document.querySelector('.popup');
var closeBtn = document.querySelector('.close-btn');

btn.addEventListener('click', function() {
    popup.classList.add('open-popup');
});

closeBtn.addEventListener('click', function() {
    popup.classList.remove('open-popup');
});
