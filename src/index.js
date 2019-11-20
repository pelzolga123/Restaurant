import load from './load';
import about from './about';
import menu from './menu';
import contact from './contact';
import { element, addImg } from './elements';

const tabs = (name, divName) => {
  const btn = document.createElement('button');
  const div = document.getElementById(divName);
  btn.innerHTML = name;
  btn.setAttribute('id', name);
  div.appendChild(btn);
};

function pages(page) {
  switch (page) {
    case 'Contact':
      contact();
      break;

    case 'About':
      about();
      break;

    case 'Menu':
      menu();
      break;

    default:
      about();
      break;
  }
}

function main(id) {
  load();
  pages(id);
}

function buttons() {
  const btnMenu = document.getElementById('Menu');
  const btnAbout = document.getElementById('About');
  const btnContact = document.getElementById('Contact');
  const scroll = document.getElementById('main');

  btnMenu.addEventListener('click', () => {
    main('Menu');
    scroll.scrollIntoView();
  });

  btnAbout.addEventListener('click', () => {
    main('About');
    scroll.scrollIntoView();
  });

  btnContact.addEventListener('click', () => {
    main('Contact');
    scroll.scrollIntoView();
  });
}

function start() {
  element('div', 'content', 'firstSection');
  element('div', 'firstSection', 'layer');
  element('div', 'content', 'main');

  element('div', 'layer', 'logo_img');
  addImg('https://pelzolga123.github.io/Restaurant/img/logo.png', 'logo_img', 'logo');

  element('div', 'layer', 'buttons');
  tabs('About', 'buttons');
  tabs('Menu', 'buttons');
  tabs('Contact', 'buttons');

  buttons();
}

start();
main('About');
