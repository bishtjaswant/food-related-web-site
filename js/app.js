$(document).ready(function(){
    var splide = new Splide(".splide",{
        type:"loop",
        perPage:3,
        gap:11,
        autoplay:true,
        interval:4000,
      });
    splide.mount();
});