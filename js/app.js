const header = document.querySelector(".header");
const intro = document.querySelector(".intro").scrollHeight;
// fixed header
window.addEventListener("scroll", checkScroll);
window.addEventListener("DomContentLoaded", checkScroll);

function checkScroll() {
    let scrollPos = window.scrollY;
    if (scrollPos > intro) {
        header.classList.add('header_active');
    } else {
        header.classList.remove('header_active');
    }
};
// Smooth scroll
$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var blockId = $(this).data('scroll'),
        blockOffset = $(blockId).offset().top;
    
    $("html, body").animate({
        scrollTop: blockOffset
    });
});
// Collapse
$("[data-collapse]").on("click", function(event) {
    event.preventDefault();
    let $this = $(this),
        blockId = $this.data('collapse');
        
    $(blockId).slideToggle();
    $this.toggleClass("active");
});
//slice
$("[data-slider]").slick({
    infinite: true,    
    slidesToShow: 1,
    slidesToScroll: 1
});