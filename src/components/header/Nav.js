import { NavItem } from './NavItem.js';
import { useEffect } from 'react';
import { useState } from 'react';

export function Nav(){
    const [aboutActive, setAboutActive] = useState('');
    const [certificatesActive, setCertificatesActive] = useState('');
    const [projectsActive, setProjectsActive] = useState('');

    useEffect(() => {
        
        // Status de ativo no menu conforme rolagem
        let about = document.getElementById('about').getBoundingClientRect().height;
        let certificates = document.getElementById('certificates-skills').getBoundingClientRect().height + about;
        let projects = document.getElementById('projects').getBoundingClientRect().height + about + certificates;
        
        window.addEventListener('scroll', () => {
            let y = window.scrollY;
            y < about && y > 100 ? setAboutActive('active') : setAboutActive('');
            (y < certificates && y > about) ? setCertificatesActive('active') : setCertificatesActive('');
            (y < projects && y > certificates) ? setProjectsActive('active') : setProjectsActive('');
        })
    }, [])

    return(
        <nav className='nav'>
            <NavItem anchorId='about' itemName='Sobre mim' active={aboutActive} />
            <NavItem anchorId='certificates-skills' itemName='Certificados & Skills' active={certificatesActive} />
            <NavItem anchorId='projects' itemName='Projetos' active={projectsActive} />
        </nav>
    )
}