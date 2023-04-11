const hamburgMenu = document.querySelector('section.menu-bar');
const menuList = document.querySelector('.nav-links');
const closeIcon = document.querySelector('.close');

hamburgMenu.addEventListener('click', () => {
  menuList.classList.toggle('visible');
});

document.querySelectorAll('.color').forEach((n) => n.addEventListener('click', () => {
  menuList.classList.remove('visible');
}));
closeIcon.addEventListener('click', () => {
  menuList.classList.remove('visible');
});