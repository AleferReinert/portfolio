import React from 'react';
import { MenuItem } from './MenuItem.js';
import iconMenu from '../img/menu.svg';

function toggleHeader(){
    let prev = window.pageYOffset;
    const header = document.getElementById('header');
    const headerHeight = header.clientHeight;
    document.querySelector('body').style.paddingTop = `${headerHeight}px`;

    // Exibe ou oculta o header conforme o usuário rola a opágina
    window.onscroll = function() {
        let current = window.pageYOffset;
        
        if(current <= header.clientHeight){
            header.classList.remove('active');
            header.style.top = '0px';
        }
        else if (prev > current) {
            header.classList.add('active');
            header.style.top = '0px';
        } else {
            header.style.top = `-${headerHeight}px`;
        }
        prev = current;
    }

    // Exibe o header no hover
    document.addEventListener('mousemove', 
        e => e.clientY <= headerHeight ? header.style.top = '0px' : ''
    )
}

export function Header() {
    React.useEffect(() => {
        toggleHeader();
        document.getElementById('header').classList.add('ready');
    }, []);
    return (
        <header id="header">
            <nav className="nav">
                <MenuItem anchorId="about" itemName="Sobre mim" />
                <MenuItem anchorId="certificates-skills" itemName="Certificados & Skills" />
                <MenuItem anchorId="projects" itemName="Projetos" />
            </nav>
            <button title="Menu" className="toggle-menu">
                <img src={ iconMenu } alt="Menu" />
            </button>
        </header>
    )
}