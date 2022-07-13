const fadeOut = () => {
    const loaderWrapper = 
    document.querySelector('.carga');
    loaderWrapper.classList.add('fade');
}

window.addEventListener('load', fadeOut);