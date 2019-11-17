const element = (elem, parent, id) =>{
    const newElem = document.createElement(elem);
    const parentElem = document.getElementById(parent);
    newElem.setAttribute('id', id);
    parentElem.appendChild(newElem);
    
    return id;
};
export { element };