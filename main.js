!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);const i=()=>{const t=document.getElementById("main");for(;t.firstChild;)t.removeChild(t.firstChild)},o=(t,e,n)=>{const i=document.createElement(t),o=document.getElementById(e);return i.setAttribute("id",n),o.appendChild(i),n},a=(t,e,n)=>{const i=document.createElement("img"),o=document.getElementById(e);console.log(o),i.setAttribute("src",t),i.setAttribute("class",n),o.appendChild(i)},r=()=>{o("h1","main","aboutHeader"),o("div","main","croissantSection"),o("div","main","macaroonSection"),o("div","main","donutSection"),document.getElementById("aboutHeader").innerHTML="About us",a("../dist/img/about-croissant.jpg","croissantSection","croissant"),a("../dist/img/line_2.png","croissantSection","croissant_line"),o("p","croissantSection","croissantInfo"),document.getElementById("croissantInfo").innerHTML="Known in France as croissants de boulanger, this yeasted dough is layered with butter and given a succession of folds that create the distinctive profile of classic croissants. Light and airy and shatteringly crisp, with a deeply caramelized buttery flavor, these croissants are a labor of love that's absolutely worth the time.",o("p","macaroonSection","macaroonInfo"),document.getElementById("macaroonInfo").innerHTML="The macaron is considered to be the jewel of French pastries in Europe. Our macarons will delight ... First bite is a surprise. Second bite is the flavor. Third bite is the pleasure ... all adding up to create a mouthful of heaven! Our true French macarons are the perfect delicacy, original and elegant. They can simply be described as: Little luxuries that make people smile.",a("../dist/img/line_2.png","macaroonSection","macaroon_line"),a("../dist/img/about-macaroon.jpg","macaroonSection","macaroon"),a("../dist/img/about-donut.jpg","donutSection","donut"),a("../dist/img/line_2.png","donutSection","donut_line"),o("p","donutSection","donutInfo"),document.getElementById("donutInfo").innerHTML="Delicious, high quality ingredients. Seasonal flavors. Handmade fresh daily. We pride ourself on originality, using the highest quality all natural ingredients, and making everything in-house from scratch — all glazes, fillings, jams and toppings."},d=(t,e,n)=>{const i=document.createElement("img"),o=document.getElementById(e);console.log(o),i.setAttribute("src",t),i.setAttribute("class",n),o.appendChild(i)},_=(t,e,n,i,a,r,d)=>{o("tr",t,e),o("td",e,n),o("td",e,i),o("td",e,a),document.getElementById(i).innerHTML=r,document.getElementById(a).innerHTML=d},m=()=>{o("div","main","main_menu"),o("h1","main_menu","menuHeader"),document.getElementById("menuHeader").innerHTML="Menu",o("table","main_menu","menu_table"),_("menu_table","menu_tr_head","td_img","td_name","td_price","Name","Price"),_("menu_table","menu_tr_1","td_img_1","td_name_1","td_price_1","Vanilla croissant with sprinckles","10$"),d("../dist/img/croiss_1.png","td_img_1","croiss_1"),_("menu_table","menu_tr_2","td_img_2","td_name_2","td_price_2","Strawberry croissant with chockolate and sprinckles","10$"),d("../dist/img/croiss_5.png","td_img_2","croiss_2"),_("menu_table","menu_tr_3","td_img_3","td_name_3","td_price_3","Raspberry croissant with vanilla cream","10$"),d("../dist/img/croiss_3.png","td_img_3","croiss_3"),_("menu_table","menu_tr_4","td_img_4","td_name_4","td_price_4","Strawberry cheesecake macaron","7$"),d("../dist/img/pink_macaroon.png","td_img_4","macaroon_1"),_("menu_table","menu_tr_5","td_img_5","td_name_5","td_price_5","Mango white chocolate macaron","7$"),d("../dist/img/yellow_macaroon.png","td_img_5","macaroon_2"),_("menu_table","menu_tr_6","td_img_6","td_name_6","td_price_6","Lavender coconut macaron","7$"),d("../dist/img/violet_macaroon.png","td_img_6","macaroon_3"),_("menu_table","menu_tr_7","td_img_7","td_name_7","td_price_7","Lime & Gin coconut macaron","7$"),d("../dist/img/green_macaroon.png","td_img_7","macaroon_4"),_("menu_table","menu_tr_8","td_img_8","td_name_8","td_price_8","Mango coconut donut","5$"),d("../dist/img/donut_1.png","td_img_8","donut_1"),_("menu_table","menu_tr_9","td_img_9","td_name_9","td_price_9","Raspberry pistachio donut","5$"),d("../dist/img/donut_2.png","td_img_9","donut_2"),_("menu_table","menu_tr_10","td_img_10","td_name_10","td_price_10","Triple chocolate donut","5$"),d("../dist/img/donut_3.png","td_img_10","donut_3"),_("menu_table","menu_tr_11","td_img_11","td_name_11","td_price_11","Vanilla cherry donut","5$"),d("../dist/img/donut_4.png","td_img_11","donut_4"),_("menu_table","menu_tr_12","td_img_12","td_name_12","td_price_12","Prosecco donut","5$"),d("../dist/img/donut_5.png","td_img_12","donut_5"),_("menu_table","menu_tr_13","td_img_13","td_name_13","td_price_13","Strawberry chocolate donut","5$"),d("../dist/img/donut_6.png","td_img_13","donut_6"),_("menu_table","menu_tr_14","td_img_14","td_name_14","td_price_14","Blueberry coconut donut","5$"),d("../dist/img/donut_7.png","td_img_14","donut_7"),_("menu_table","menu_tr_15","td_img_15","td_name_15","td_price_15","Champagne panna cotta donut","5$"),d("../dist/img/donut_8.png","td_img_15","donut_8")},c=()=>{o("div","main","newone")},u=(t,e)=>{const n=document.createElement("button"),i=document.getElementById(e);n.innerHTML=t,n.setAttribute("id",t),i.appendChild(n)},s=(t,e,n)=>{const i=document.createElement("img"),o=document.getElementById(e);i.setAttribute("src",t),i.setAttribute("class",n),o.appendChild(i)};function l(t){i(),function(t){switch(t){case"Contact":c();break;case"About":r();break;case"Menu":m();break;default:r()}}(t)}document.getElementById("content"),o("div","content","firstSection"),o("div","firstSection","layer"),o("div","content","main"),o("div","layer","logo_img"),s("../dist/img/logo_2.png","logo_img","logo"),o("div","layer","buttons"),u("About","buttons"),u("Menu","buttons"),u("Contact","buttons"),function(){const t=document.getElementById("Menu"),e=document.getElementById("About"),n=document.getElementById("Contact"),i=document.getElementById("main");t.addEventListener("click",()=>{l("Menu"),i.scrollIntoView()}),e.addEventListener("click",()=>{l("About"),i.scrollIntoView()}),n.addEventListener("click",()=>{l("Contact"),i.scrollIntoView()})}(),l("About")}]);