import { element, addImg } from './elements';

const about = () => {
  element('h1', 'main', 'aboutHeader');
  element('div', 'main', 'croissantSection');
  element('div', 'main', 'macaroonSection');
  element('div', 'main', 'donutSection');

  document.getElementById('aboutHeader').innerHTML = 'About us';

  addImg('../dist/img/about-croissant.jpg', 'croissantSection', 'croissant');
  addImg('../dist/img/line_2.png', 'croissantSection', 'croissant_line');
  element('p', 'croissantSection', 'croissantInfo');
  document.getElementById('croissantInfo').innerHTML = "Known in France as croissants de boulanger, this yeasted dough is layered with butter and given a succession of folds that create the distinctive profile of classic croissants. Light and airy and shatteringly crisp, with a deeply caramelized buttery flavor, these croissants are a labor of love that's absolutely worth the time.";
  element('p', 'macaroonSection', 'macaroonInfo');
  document.getElementById('macaroonInfo').innerHTML = 'The macaron is considered to be the jewel of French pastries in Europe. Our macarons will delight ... First bite is a surprise. Second bite is the flavor. Third bite is the pleasure ... all adding up to create a mouthful of heaven! Our true French macarons are the perfect delicacy, original and elegant. They can simply be described as: Little luxuries that make people smile.';
  addImg('../dist/img/line_2.png', 'macaroonSection', 'macaroon_line');
  addImg('../dist/img/about-macaroon.jpg', 'macaroonSection', 'macaroon');
  addImg('../dist/img/about-donut.jpg', 'donutSection', 'donut');
  addImg('../dist/img/line_2.png', 'donutSection', 'donut_line');
  element('p', 'donutSection', 'donutInfo');
  document.getElementById('donutInfo').innerHTML = 'Delicious, high quality ingredients. Seasonal flavors. Handmade fresh daily. We pride ourself on originality, using the highest quality all natural ingredients, and making everything in-house from scratch — all glazes, fillings, jams and toppings.';
};

export { about };
