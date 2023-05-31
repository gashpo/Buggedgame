// header style
window.addEventListener('scroll', function (e) {
    let y = window.scrollY;
    let nav = document.querySelector('#navH');

    // 導覽列背景色切換
    if (y > 50) {
        nav.classList.add('nav_down')
    } else {
        nav.classList.remove('nav_down')
    }

})