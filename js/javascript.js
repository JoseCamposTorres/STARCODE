window.addEventListener('scroll', function() {
    const scrollLine = document.querySelector('.scroll-line');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollTop / maxScroll) * 100;
    
    // Ajustar el ancho de la línea basado en el scroll
    scrollLine.style.width = `${scrollPercentage}%`;
});