import { useState, useEffect } from 'react';
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

    return (
        <header id='header' className={`${fixed} ${scrolling} ${ready}`}>
            <Nav />
            <button title='Menu' className='toggle-menu' onClick={()=>setVisibilityMenuMobile('visible')}>
                <img src={process.env.PUBLIC_URL + '/img/icons/menu.svg'} alt='Menu' />
            </button>
            <MenuMobile visibility={visibilityMenuMobile} closeMenu={()=>setVisibilityMenuMobile('')} />
        </header>
    )
}