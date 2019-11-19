import { element, addImg } from './elements';

const contact = () => {
  element('h1', 'main', 'contactHeader');
  document.getElementById('contactHeader').innerHTML = 'Contact us';
  element('div', 'main', 'formSection');
  element('form', 'formSection', 'contactForm');

  element('p', 'contactForm', 'nameP');
  element('label', 'nameP', 'nameLabel');
  document.getElementById('nameLabel').innerHTML = 'Name';
  document.getElementById('nameLabel').setAttribute('for', 'nameInput');

  element('input', 'nameP', 'nameInput');
  document.getElementById('nameInput').innerHTML = 'Name';
  document.getElementById('nameInput').setAttribute('type', 'text');

  element('p', 'contactForm', 'phoneP');
  element('label', 'phoneP', 'phoneLabel');
  document.getElementById('phoneLabel').innerHTML = 'Phone';
  document.getElementById('phoneLabel').setAttribute('for', 'phoneInput');

  element('input', 'phoneP', 'phoneInput');
  document.getElementById('phoneInput').setAttribute('type', 'tel');
  document.getElementById('phoneInput').setAttribute('pattern', '[0-9]{3}-[0-9]{2}-[0-9]{3}');

  element('p', 'contactForm', 'emailP');
  element('label', 'emailP', 'emailLabel');
  document.getElementById('emailLabel').innerHTML = 'Email';
  document.getElementById('emailLabel').setAttribute('for', 'emailInput');

  element('input', 'emailP', 'emailInput');
  document.getElementById('emailInput').innerHTML = 'Email';
  document.getElementById('emailInput').setAttribute('type', 'email');

  element('p', 'contactForm', 'messageP');
  element('label', 'messageP', 'messageLabel');
  document.getElementById('messageLabel').innerHTML = 'Message';
  document.getElementById('messageLabel').setAttribute('for', 'messageInput');

  element('input', 'messageP', 'messageInput');
  document.getElementById('messageInput').innerHTML = 'Message';
  document.getElementById('messageInput').setAttribute('type', 'text');

  element('input', 'contactForm', 'buttonInput');
  document.getElementById('buttonInput').setAttribute('type', 'submit');
  document.getElementById('buttonInput').value = 'Submit';

  element('div', 'main', 'infoSection');

  element('ul', 'infoSection', 'phoneInfo');
  element('li', 'phoneInfo', 'phoneHeader');
  document.getElementById('phoneHeader').innerHTML = 'Call us';
  element('li', 'phoneInfo', 'phone');
  document.getElementById('phone').innerHTML = '(032) 3453 456 445';

  element('ul', 'infoSection', 'emailInfo');
  element('li', 'emailInfo', 'emailHeader');
  document.getElementById('emailHeader').innerHTML = 'Email';
  element('li', 'emailInfo', 'email');
  document.getElementById('email').innerHTML = 'french-restaurant@gmail.com';

  element('ul', 'infoSection', 'addressInfo');
  element('li', 'addressInfo', 'addressHeader');
  document.getElementById('addressHeader').innerHTML = 'Address';
  element('li', 'addressInfo', 'address');
  document.getElementById('address').innerHTML = 'Somewhere in Paris';

  element('ul', 'infoSection', 'timeInfo');
  element('li', 'timeInfo', 'timeHeader');
  document.getElementById('timeHeader').innerHTML = 'Opening time';
  element('li', 'timeInfo', 'time_1');
  element('li', 'timeInfo', 'time_2');
  document.getElementById('time_1').innerHTML = 'Monday - Friday: 08:00 am - 08:30 pm';
  document.getElementById('time_2').innerHTML = 'Saturday - Sunday: 10:00 am - 16:30 pm';

  element('div', 'main', 'imgEnding');
  addImg('../dist/img/sweets_1.png', 'imgEnding', 'sweets_1');
  addImg('../dist/img/sweets_2.png', 'imgEnding', 'sweets_2');
  addImg('../dist/img/sweets_3.png', 'imgEnding', 'sweets_3');
};
export default contact;
