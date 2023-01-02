export function ProjectItem(props){
    return(
        <li className="project">
            <div className="image">
                <a href={ props.pageUrl } target="_blank" rel="noreferrer" title="Website">
                    <img src={ process.env.PUBLIC_URL + '/img/projects/' + props.img } alt="Website" />
                </a>
            </div>
            <div className="informations">
                <h2 className="title">{ props.name }</h2>
                <p className="description">{ props.description }</p>
                <p className="skills">{ props.skills }</p>
                <nav className="nav">
                    <a href={ props.repositoryUrl } title="Repositório" target="_blank" rel="noreferrer">
                        <img src={ process.env.PUBLIC_URL + '/img/icons/github.svg' } alt="Repositório" />
                    </a>
                    <a href={ props.pageUrl } title="Website" target="_blank" rel="noreferrer">
                        <img src={ process.env.PUBLIC_URL + '/img/icons/externalLink.svg' } alt="Website" />
                    </a>
                </nav>
            </div>
        </li>
    )
}