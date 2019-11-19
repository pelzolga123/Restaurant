import { element, addImg } from './elements';

const createTableRow = (parentId, trId, tdImgId, tdNameId, tdPriceId, tdNameV, tdPriceV) => {
  element('tr', parentId, trId);
  element('td', trId, tdImgId);
  element('td', trId, tdNameId);
  element('td', trId, tdPriceId);
  document.getElementById(tdNameId).innerHTML = tdNameV;
  document.getElementById(tdPriceId).innerHTML = tdPriceV;
};

const menu = () => {
  element('div', 'main', 'main_menu');
  element('h1', 'main_menu', 'menuHeader');
  document.getElementById('menuHeader').innerHTML = 'Menu';
  element('table', 'main_menu', 'menu_table');

  createTableRow('menu_table', 'menu_tr_head', 'td_img', 'td_name', 'td_price', 'Name', 'Price');

  createTableRow('menu_table', 'menu_tr_1', 'td_img_1', 'td_name_1', 'td_price_1', 'Vanilla croissant with sprinckles', '10$');
  addImg('https://pelzolga123.github.io/Restaurant/img/croiss_1.png', 'td_img_1', 'croiss_1');

  createTableRow('menu_table', 'menu_tr_2', 'td_img_2', 'td_name_2', 'td_price_2', 'Strawberry croissant with chockolate sprinckles', '10$');
  addImg('https://pelzolga123.github.io/Restaurant/img/croiss_5.png', 'td_img_2', 'croiss_2');

  createTableRow('menu_table', 'menu_tr_3', 'td_img_3', 'td_name_3', 'td_price_3', 'Raspberry croissant with vanilla cream', '10$');
  addImg('https://pelzolga123.github.io/Restaurant/img/croiss_3.png', 'td_img_3', 'croiss_3');

  createTableRow('menu_table', 'menu_tr_4', 'td_img_4', 'td_name_4', 'td_price_4', 'Strawberry cheesecake macaron', '7$');
  addImg('https://pelzolga123.github.io/Restaurant/img/pink_macaroon.png', 'td_img_4', 'macaroon_1');

  createTableRow('menu_table', 'menu_tr_5', 'td_img_5', 'td_name_5', 'td_price_5', 'Mango white chocolate macaron', '7$');
  addImg('https://pelzolga123.github.io/Restaurant/img/yellow_macaroon.png', 'td_img_5', 'macaroon_2');

  createTableRow('menu_table', 'menu_tr_6', 'td_img_6', 'td_name_6', 'td_price_6', 'Lavender coconut macaron', '7$');
  addImg('https://pelzolga123.github.io/Restaurant/img/violet_macaroon.png', 'td_img_6', 'macaroon_3');

  createTableRow('menu_table', 'menu_tr_7', 'td_img_7', 'td_name_7', 'td_price_7', 'Lime & Gin coconut macaron', '7$');
  addImg('https://pelzolga123.github.io/Restaurant/img/green_macaroon.png', 'td_img_7', 'macaroon_4');

  createTableRow('menu_table', 'menu_tr_8', 'td_img_8', 'td_name_8', 'td_price_8', 'Mango coconut donut', '5$');
  addImg('https://pelzolga123.github.io/Restaurant/img/donut_1.png', 'td_img_8', 'donut_1');

  createTableRow('menu_table', 'menu_tr_9', 'td_img_9', 'td_name_9', 'td_price_9', 'Raspberry pistachio donut', '5$');
  addImg('https://pelzolga123.github.io/Restaurant/img/donut_2.png', 'td_img_9', 'donut_2');

  createTableRow('menu_table', 'menu_tr_10', 'td_img_10', 'td_name_10', 'td_price_10', 'Triple chocolate donut', '5$');
  addImg('https://pelzolga123.github.io/Restaurant/img/donut_3.png', 'td_img_10', 'donut_3');

  createTableRow('menu_table', 'menu_tr_11', 'td_img_11', 'td_name_11', 'td_price_11', 'Vanilla cherry donut', '5$');
  addImg('https://pelzolga123.github.io/Restaurant/img/donut_4.png', 'td_img_11', 'donut_4');

  createTableRow('menu_table', 'menu_tr_12', 'td_img_12', 'td_name_12', 'td_price_12', 'Prosecco donut', '5$');
  addImg('https://pelzolga123.github.io/Restaurant/img/donut_5.png', 'td_img_12', 'donut_5');

  createTableRow('menu_table', 'menu_tr_13', 'td_img_13', 'td_name_13', 'td_price_13', 'Strawberry chocolate donut', '5$');
  addImg('https://pelzolga123.github.io/Restaurant/img/donut_6.png', 'td_img_13', 'donut_6');

  createTableRow('menu_table', 'menu_tr_14', 'td_img_14', 'td_name_14', 'td_price_14', 'Blueberry coconut donut', '5$');
  addImg('https://pelzolga123.github.io/Restaurant/img/donut_7.png', 'td_img_14', 'donut_7');

  createTableRow('menu_table', 'menu_tr_15', 'td_img_15', 'td_name_15', 'td_price_15', 'Champagne panna cotta donut', '5$');
  addImg('https://pelzolga123.github.io/Restaurant/img/donut_8.png', 'td_img_15', 'donut_8');
};
export default menu;
