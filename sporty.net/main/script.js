document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll(".slide");

    // Показать первое изображение после загрузки DOM
    slides[0].style.display = "block";

    var currentSlide = 0;

    function showSlide() {
        slides.forEach(function(slide) {
            slide.style.display = "none";
        });
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = "block";
    }

    setInterval(showSlide, 3000); // Переключение слайдов каждые 3 секунды
});

function initMap() {
    // Создание объекта карты и его отображение в элементе с id="map"
    var map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 48.433, lng: 35.042 }, // Координаты центра карты
        zoom: 8 // Масштаб карты
    });
}