const element = (elem, parent, id) =>{
    const newElem = document.createElement(elem);
    const parentElem = document.getElementById(parent);
    newElem.setAttribute('id', id);
    parentElem.appendChild(newElem);
    
    return id;
};

const addImg = (url, divId, imgClass) =>{
    const img = document.createElement('img');
    const div = document.getElementById(divId);
    img.setAttribute('src', url);
    img.setAttribute('class', imgClass);

    div.appendChild(img);
};
export { element, addImg };