const navShow = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');
    
    menu.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');

        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else{
                link.style.animation = `linksFade .5s ease forwards ${index / 5 + 0.2}s`;
            }
        });
        menu.classList.toggle('close');
    });
};

navShow();
