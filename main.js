function menuToggle() {
    let menuMobile = document.querySelector('#hero_area')

    if (menuMobile.style.width == '200px') {
        menuMobile.style.width = '0px'
    } else {
        menuMobile.style.width = '200px'
    }
}