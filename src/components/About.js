import avatar from '../img/avatar.png';

export function About(props){
    return(
        <section id="about" className="container" style={ props.minHeight }>
            <div>
                <h1 className="title">
                    <span className="first-line">
                        Olá, meu nome é
                    </span>
                    <span>Alefer Reinert<br />
                        e sou desenvolvedor 
                        <span className="career"> front end</span>.
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
    )
}