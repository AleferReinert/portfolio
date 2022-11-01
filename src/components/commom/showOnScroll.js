import { visibleOnViewport } from './visibleOnViewport';

/*
    Exibe o elemento conforme o scroll
*/
export function showOnScroll(element, distance){
    const e = document.querySelector(element);

    window.addEventListener('scroll', () => {
        if(visibleOnViewport(element, distance).visible){
            e.classList.add('ready');
        }
    })
}