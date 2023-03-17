import { showOnScroll } from '../showOnScroll';
import { useEffect } from 'react';
import content from './content'

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
                {content.map((project, i) => {
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