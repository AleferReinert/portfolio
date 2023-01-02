import { ProjectItem } from "./ProjectItem";
import { showOnScroll } from '../showOnScroll';
import { useEffect } from 'react';

export function Projects() {
    useEffect(() => {
        showOnScroll('#projects .title-default', 100);
        showOnScroll('#projects li:nth-child(1)', 0);
        showOnScroll('#projects li:nth-child(2)', 100);
        showOnScroll('#projects li:nth-child(3)', 100);
        showOnScroll('#projects li:nth-child(4)', 100);
        showOnScroll('#projects li:nth-child(5)', 100);
        showOnScroll('#projects li:nth-child(6)', 100);
    },[]);

    return (
        <section id="projects" className="container">
            <h1 className="title-default">Projetos</h1>
            <ul>
                <ProjectItem
                    name="E-Commerce"
                    img='e-commerce.jpg'
                    description="Loja virtual responsiva (em desenvolvimento)."
                    skills="React Sass Bootstrap"
                    pageUrl="https://aleferreinert.github.io/react-commerce"
                    repositoryUrl="https://github.com/AleferReinert/react-commerce"
                />
                <ProjectItem
                    name="Single Page"
                    img='single-page.png'
                    description="Um simples website genérico de página única."
                    skills="HTML JavaScript Less Gulp"
                    pageUrl="https://aleferreinert.github.io/single-page"
                    repositoryUrl="https://github.com/AleferReinert/single-page"
                />
                <ProjectItem
                    name="Tic Tac Toe"
                    img='tic-tac-toe.png'
                    description="Jogo da velha feito a partir do tutorial do React."
                    skills="React JSX CSS"
                    pageUrl="https://aleferreinert.github.io/tic-tac-toe"
                    repositoryUrl="https://github.com/AleferReinert/tic-tac-toe"
                />
                <ProjectItem
                    name="Metronome"
                    img='metronome.png'
                    description="O metrônomo é um item obrigatório para qualquer músico, auxilia nos estudos e a tocar no tempo correto."
                    skills="HTML JavaScript CSS"
                    pageUrl="https://aleferreinert.github.io/metronome"
                    repositoryUrl="https://github.com/AleferReinert/metronome"
                />
                <ProjectItem
                    name="Timer"
                    img='timer.png'
                    description="Medição de intervalos de tempo."
                    skills="HTML JavaScript CSS"
                    pageUrl="https://aleferreinert.github.io/timer"
                    repositoryUrl="https://github.com/AleferReinert/timer"
                />
                <ProjectItem
                    name="Google Homepage"
                    img='google-homepage.png'
                    description="Clone da página inicial de busca do Google (desktop)."
                    skills="HTML JavaScript CSS"
                    pageUrl="https://aleferreinert.github.io/google-homepage"
                    repositoryUrl="https://github.com/AleferReinert/google-homepage"
                />
            </ul>
        </section>
    )
}