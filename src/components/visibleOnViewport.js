/*
    Verifica se um elemento está dentro do viewport verticalmente 
*/
export function visibleOnViewport(element, distance){
    const e = document.querySelector(element);
    const eHeight = e.getBoundingClientRect().height;
    let positionTop = Math.round(e.getBoundingClientRect().y);
    let positionBottom = Math.round(e.getBoundingClientRect().y) + eHeight;

    // Distancia do elemento a partir do bottom do viewport
    if(typeof distance === 'undefined'){
        distance = 0;
    }

    const data = {
        visible: null,
        positionTop: positionTop,
        positionBottom: positionBottom
    }

    if(positionTop <= (window.innerHeight - distance) && positionTop >= -(window.innerHeight)){
        data.visible = true;
    } else {
        data.visible = false;
    }
    return data;
}