import { useState, useEffect } from 'react';
import iconMenu from '../../img/menu.svg';
import { toggleHeader } from './toggleHeader';
import { Nav } from './Nav';
import { MenuMobile } from './MenuMobile';

export function Header() {
    const [fixed, setFixed] = useState('fixed'); // Exibe/oculta o header
    const [scrolling, setScrolling] = useState(''); // Altera o estilo do header quando a página está rolando para cima
    const [ready, setReady] = useState(''); // Elemento carregado, pronto para fazer animações
    const [visibilityMenuMobile, setVisibilityMenuMobile] = useState('');

    useEffect(() => {
        setReady('ready');
        toggleHeader(setFixed, setScrolling);
    }, []);

    function showMenu(){
        setVisibilityMenuMobile('visible');
    }

    function closeMenu(){
        setVisibilityMenuMobile('');
    }

    return (
        <header id="header" className={ `${fixed} ${scrolling} ${ready}` }>
            <Nav />
            <button title="Menu" className={ `toggle-menu` } onClick={ showMenu }>
                <img src={ iconMenu } alt="Menu" />
            </button>
            <MenuMobile visibility={ visibilityMenuMobile } closeMenu={ closeMenu } />
        </header>
    )
}