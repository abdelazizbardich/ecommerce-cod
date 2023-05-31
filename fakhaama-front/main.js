const openMenu = document.querySelector("a.open-menu");
const closeMenu = document.querySelector("a.close-menu");
const megaMenu = document.querySelector('.mega-menu');
openMenu.addEventListener('click',(e)=>{
    e.preventDefault();
    closeMenu.style.display='block';
    openMenu.style.display='none';
    megaMenu.classList.add('open');
    console.log('openMenu',openMenu);
})
closeMenu.addEventListener('click',(e)=>{
    e.preventDefault();
    closeMenu.style.display='none';
    openMenu.style.display='block';
    megaMenu.classList.remove('open');
    console.log('openMenu',closeMenu);
})