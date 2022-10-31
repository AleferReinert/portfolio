export function toggleHeader(setFixed, setScrolling){
    const headerHeight = document.getElementById('header').clientHeight;
    let prev = window.pageYOffset;

    // Exibe o menu no hover
    document.addEventListener('mousemove', e => {
        if(e.clientY <= headerHeight){
            setFixed('fixed');

            if(window.pageYOffset > headerHeight) {
                setScrolling('scrolling-to-top');
            }
        }
    });

    // Oculta quando o scroll está indo para baixo
    window.addEventListener('scroll', () => {
        let current = window.pageYOffset;
        if(current <= headerHeight || prev > current){
            setFixed('fixed');
        } else {
            setFixed('');
        }

        // Altera o estilo quando o scroll está indo para cima
        if(current > headerHeight && current < prev){
            setScrolling('scrolling-to-top');
        } else {
            setScrolling('');
        }
        prev = current;
    });
}