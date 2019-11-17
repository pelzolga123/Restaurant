import { load } from "./load";
import { about } from './about';
import { menu } from './menu';
import { contact } from './contact';
import { element } from "./elements";


const tabs = (name, divName) => {
  const btn = document.createElement('button');
  const div = document.getElementById(divName);
  btn.innerHTML = name;
  btn.setAttribute('id', name);
  div.appendChild(btn);
}; 

const addImg = (url, divId, imgClass) =>{
  const img = document.createElement('img');
  const div = document.getElementById(divId);

  img.setAttribute('src', url);
  img.setAttribute('class', imgClass);

  div.appendChild(img);
};

function start (){
  
  const content = document.getElementById('content');
  
  element('div', 'content', 'firstSection');
  
  element('div','firstSection','layer')
  element('div', 'content', 'main');

  element('div', 'layer', 'logo_img');
  addImg('../dist/img/logo_2.png','logo_img', 'logo');

    element('div', 'layer', 'buttons')
    tabs('About', 'buttons');
    tabs('Menu', 'buttons');
    tabs('Contact', 'buttons');

    buttons();
}


function buttons(){
  const btnMenu = document.getElementById('Menu');
  const btnAbout = document.getElementById('About');
  const btnContact = document.getElementById('Contact');
  const scroll = document.getElementById('main');

  btnMenu.addEventListener('click', () => {
    testing('Menu');
    scroll.scrollIntoView();
  });

  btnAbout.addEventListener('click', () => {
    testing('About');
    scroll.scrollIntoView();
  });

  btnContact.addEventListener('click', () => {
    testing('Contact');
    scroll.scrollIntoView();
  });
}


function testing(id){
  load();
  pages(id);
}

function pages(page){

  switch (page){
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
start();
testing('About');
  