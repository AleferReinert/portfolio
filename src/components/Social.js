import { useEffect, useState } from 'react';
import iconFacebook from '../img/facebook.svg';
import iconGithub from '../img/github.svg';
import iconGmail from '../img/gmail.svg';
import iconLinkedin from '../img/linkedin.svg';
import iconWhatsapp from '../img/whatsapp.svg';
import iconYoutube from '../img/youtube.svg';

export function Social(){
    const [ready, setReady] = useState('');

    useEffect(() => {
        setReady('ready');
    }, []);
    return(
        <nav className={ `social ${ ready }`}>
            <a href="https://www.facebook.com/AleferReinert" target="_blank" title="Facebook" rel="noreferrer">
                <img src={ iconFacebook } alt="Facebook" />
            </a>
            <a href="https://github.com/AleferReinert" target="_blank" title="Github" rel="noreferrer">
                <img src={ iconGithub } alt="Github" />
            </a>
            <a href="mailto:aleferreinert@gmail.com" target="_blank" title="Gmail" rel="noreferrer">
                <img src={ iconGmail } alt="Gmail" />
            </a>
            <a href="https://www.linkedin.com/in/aleferreinert" target="_blank" title="Linkedin" rel="noreferrer">
                <img src={ iconLinkedin } alt="Linkedin" />
            </a>
            <a href="https://wa.me/message/FSN72FDKNRO3O1" target="_blank" title="Whatsapp" rel="noreferrer">
                <img src={ iconWhatsapp } alt="Whatsapp" />
            </a>
            <a href="https://www.youtube.com/AleferReinert" target="_blank" title="YouTube" rel="noreferrer">
                <img src={ iconYoutube } alt="YouTube" />
            </a>
        </nav>
    )
}