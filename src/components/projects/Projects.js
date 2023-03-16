import { showOnScroll } from '../showOnScroll';
import { useEffect } from 'react';

const projects = [
    {
        name: 'Landing Page',
        image: 'landing-page.png',
        description: 'Projeto do curso "React Avançado: Crie aplicações com NextJS, Strapi e mais".',
        skills: 'React NextJS TypeScript StyledComponents Strapi',
        pageUrl: 'https://landing-page-ar.netlify.app',
        repositoryUrl: 'https://github.com/AleferReinert/landing-page'
    },
    {
        name: 'E-Commerce',
        image: 'e-commerce.jpg',
        description: 'Loja virtual responsiva (em desenvolvimento).',
        skills: 'React Sass Bootstrap',
        pageUrl: 'https://aleferreinert.github.io/react-commerce',
        repositoryUrl: 'https://github.com/AleferReinert/react-commerce'
    },
    {
        name: 'Single Page',
        image: 'single-page.png',
        description: 'Um simples website genérico de página única.',
        skills: 'HTML JavaScript Less Gulp',
        pageUrl: 'https://aleferreinert.github.io/single-page',
        repositoryUrl: 'https://github.com/AleferReinert/single-page'
    },
    {
        name: 'Tic Tac Toe',
        image: 'tic-tac-toe.png',
        description: 'Jogo da velha feito a partir do tutorial do React.',
        skills: 'React JSX CSS',
        pageUrl: 'https://aleferreinert.github.io/tic-tac-toe',
        repositoryUrl: 'https://github.com/AleferReinert/tic-tac-toe'
    },
    {
        name: 'Metronome',
        image: 'metronome.png',
        description: 'O metrônomo é um item obrigatório para qualquer músico, auxilia nos estudos e a tocar no tempo correto.',
        skills: 'HTML JavaScript CSS',
        pageUrl: 'https://aleferreinert.github.io/metronome',
        repositoryUrl: 'https://github.com/AleferReinert/metronome'
    },
    {
        name: 'Timer',
        image: 'timer.png',
        description: 'Medição de intervalos de tempo.',
        skills: 'HTML JavaScript CSS',
        pageUrl: 'https://aleferreinert.github.io/timer',
        repositoryUrl: 'https://github.com/AleferReinert/timer'
    },
    {
        name: 'Google Homepage',
        image: 'google-homepage.png',
        description: 'Clone da página inicial de busca do Google (desktop).',
        skills: 'HTML JavaScript CSS',
        pageUrl: 'https://aleferreinert.github.io/google-homepage',
        repositoryUrl: 'https://github.com/AleferReinert/google-homepage'
    }
];

export function Projects() {
    useEffect(() => {
        showOnScroll('#projects .title-default', 100);
        showOnScroll('#projects li:nth-child(1)', 0);
        showOnScroll('#projects li:nth-child(2)', 100);
        showOnScroll('#projects li:nth-child(3)', 100);
        showOnScroll('#projects li:nth-child(4)', 100);
        showOnScroll('#projects li:nth-child(5)', 100);
        showOnScroll('#projects li:nth-child(6)', 100);
        showOnScroll('#projects li:nth-child(7)', 100);
    }, []);

    return (
        <section id="projects" className="container">
            <h1 className="title-default">Projetos</h1>
            <ul>
                {projects.map((project, i) => {
                    return (
                        <li className="project" key={i}>
                            <div className="image">
                                <a href={project.pageUrl} target="_blank" rel="noreferrer" title="Website">
                                    <img src={process.env.PUBLIC_URL + '/img/projects/' + project.image} alt="Website" />
                                </a>
                            </div>
                            <div className="informations">
                                <h2 className="title">{project.name}</h2>
                                <p className="description">{project.description}</p>
                                <p className="skills">{project.skills}</p>
                                <nav className="nav">
                                    <a href={project.repositoryUrl} title="Repositório" target="_blank" rel="noreferrer">
                                        <img src={process.env.PUBLIC_URL + '/img/icons/github.svg'} alt="Repositório" />
                                    </a>
                                    <a href={project.pageUrl} title="Website" target="_blank" rel="noreferrer">
                                        <img src={process.env.PUBLIC_URL + '/img/icons/externalLink.svg'} alt="Website" />
                                    </a>
                                </nav>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </section>
    )
}