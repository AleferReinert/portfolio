import iconFacebook from '../img/facebook.svg';
import iconGithub from '../img/github.svg';
import iconGmail from '../img/gmail.svg';
import iconLinkedin from '../img/linkedin.svg';
import iconWhatsapp from '../img/whatsapp.svg';
import iconYoutube from '../img/youtube.svg';

export function Social(){
    return(
        <nav id="social">
            <a href="https://www.facebook.com/AleferReinert" target="_blank" title="Facebook">
                <img src={ iconFacebook } alt="Facebook" />
            </a>
            <a href="https://github.com/AleferReinert" target="_blank" title="Github">
                <img src={ iconGithub } alt="Github" />
            </a>
            <a href="mailto:aleferreinert@gmail.com" target="_blank" title="Gmail">
                <img src={ iconGmail } alt="Gmail" />
            </a>
            <a href="https://www.linkedin.com/in/aleferreinert" target="_blank" title="Linkedin">
                <img src={ iconLinkedin } alt="Linkedin" />
            </a>
            <a href="https://wa.me/message/FSN72FDKNRO3O1" target="_blank" title="Whatsapp">
                <img src={ iconWhatsapp } alt="Whatsapp" />
            </a>
            <a href="https://www.youtube.com/AleferReinert" target="_blank" title="YouTube">
                <img src={ iconYoutube } alt="YouTube" />
            </a>
        </nav>
    )
}