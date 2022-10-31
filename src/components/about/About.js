import { useEffect } from 'react';

// Retorna orientação do dispositivo
function orientationDevice(){
    return window.screen.width > window.screen.height ? 'landscape' : 'portrait';
}
window.addEventListener('resize', function(){
    orientationDevice();
});

export function About(){

    useEffect(() => {
        document.getElementById('about').classList.add('ready');
        if(orientationDevice() === 'landscape'){
            document.getElementById('about').style.minHeight = `${window.innerHeight - 50}px`;
        }
    }, []);

    return(
        <section id="about" className="container">
            <div>
                <h1 className="title">
                    <span className="first-line">
                        Olá, meu nome é
                    </span>
                    <span className="second-line">Alefer Reinert</span>
                    <span className="third-line">e sou desenvolvedor <span className="career"> front end</span>.
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
        </section>
    )
}