import './App.scss';
import avatar from './img/avatar.png';
import socialFacebook from './img/social_facebook.svg';
import socialGithub from './img/social_github.svg';
import socialLinkedin from './img/social_linkedin.svg';
import socialWhatsapp from './img/social_whatsapp.svg';
import socialYoutube from './img/social_youtube.svg';

const sectionHeight = {
    height: window.innerHeight + 'px'
}


function App() {
    return (
        <div className="App">
            <header>
                <nav id="menu">
                    <a href="#about">Sobre mim</a>
                    <a href="#codes">Meus Códigos</a>
                    <a href="#contact">Contato</a>
                </nav>
            </header>
            <main>
                <section id="about" className="container" style={ sectionHeight }>
                    <div>
                        <h1>
                            Olá, meu nome é
                            <br />
                            <span>
                                Alefer Reinert
                                <br />
                                e sou desenvolvedor <span className="career">front end</span>.
                            </span>
                        </h1>
                        <p>
                            Nos meus mais de 5 anos de experiência, atuei principalmente no desenvolvimento de
                            e-commerces, websites, wordpress e e-mail marketing.
                        </p>
                        <p>
                            Aprendi HTML e CSS por conta própria, solidifiquei esse conhecimento 
                            no meu primeiro emprego na área,
                            onde também aprendi JQuery que era bem popular na época.
                            Hoje meu foco principal é o javascript.
                        </p>
                        <p>
                            Além de codificar, sou uma pessoa apaixonada por doguinhos, música e saúde mental.
                            Toco bateria desde criança e já tive algumas bandas, inclusive gravei um CD em 2021. :)
                        </p>
                    </div>
                    <div>
                        <img className="avatar" src={ avatar } alt="Avatar" />
                    </div>
                </section>
            </main>
            <aside>
                <nav id="social">
                    <a href="https://www.facebook.com/AleferReinert" target="_blank" title="Facebook">
                        <img src={ socialFacebook } alt="Facebook" />
                    </a>
                    <a href="https://github.com/AleferReinert" target="_blank" title="Github">
                        <img src={ socialGithub } alt="Github" />
                    </a>
                    <a href="https://www.linkedin.com/in/aleferreinert" target="_blank" title="Linkedin">
                        <img src={ socialLinkedin } alt="Linkedin" />
                    </a>
                    <a href="https://wa.me/message/FSN72FDKNRO3O1" target="_blank" title="Whatsapp">
                        <img src={ socialWhatsapp } alt="Whatsapp" />
                    </a>
                    <a href="https://www.youtube.com/AleferReinert" target="_blank" title="YouTube">
                        <img src={ socialYoutube } alt="YouTube" />
                    </a>
                </nav>
            </aside>
        </div>
    );
}

export default App;
