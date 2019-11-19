const load = () => {  
  const main = document.getElementById('main');
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }
};
export { load };
