import iconGithub from '../img/github.svg';
import iconExternalLink from '../img/externalLink.svg';

export function ProjectItem(props){
    return(
        <li className="project">
            <div className="image">
                <a href={ props.pageUrl } target="_blank" rel="noreferrer" title="Website">
                    <img src={ props.imageUrl } alt="Website" />
                </a>
            </div>
            <div className="informations">
                <h2>{ props.name }</h2>
                <p>{ props.description }</p>
                <p className="skills">{ props.skills }</p>
                <nav className="nav">
                    <a href={ props.repositoryUrl } title="Repositório" target="_blank" rel="noreferrer">
                        <img src={ iconGithub } alt="Repositório" />
                    </a>
                    <a href={ props.pageUrl } title="Website" target="_blank" rel="noreferrer">
                        <img src={ iconExternalLink } alt="Website" />
                    </a>
                </nav>
            </div>
        </li>
    )
}