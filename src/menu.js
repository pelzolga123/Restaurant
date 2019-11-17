const menu = () => {
    const menuContent = document.createElement('div');
    const main = document.getElementById('main')
    menuContent.innerHTML = 'Menu';
    main.appendChild(menuContent);
};
export { menu };