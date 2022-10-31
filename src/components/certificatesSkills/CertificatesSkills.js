import iconLess from '../../img/less.svg';
import iconSass from '../../img/sass.svg';
import iconCss3 from '../../img/css3.svg';
import iconHtml5 from '../../img/html5.svg';
import iconJavascript from '../../img/javascript.svg';
import iconReact from '../../img/react.svg';
import iconJquery from '../../img/jquery.svg';
import iconGrunt from '../../img/grunt.svg';
import iconGulp from '../../img/gulp.svg';
import iconBootstrap from '../../img/bootstrap.svg';
import iconPhotoshop from '../../img/photoshop.svg';
import iconSql from '../../img/sql.svg';
import iconGit from '../../img/git.svg';

export function CertificatesSkills(props){
    return(
        <section id="certificates-skills" className="container" style={ props.minHeight }>
            <div className="content">
                <ul className="certificates">
                    <li>
                        <a  target="_blank"
                            rel="noreferrer"
                            title="Visualizar certificado"
                            href="https://edools-3-production.s3.amazonaws.com/org-6988/school-7227/certificates/enrollment-7244069/course-84414-bvrom.pdf"
                        >
                            <h2>CC50: Introdução à <br />Ciência da Computação</h2>
                            <p>Fundação Estudar | Setembro/2022</p>
                        </a>
                    </li>
                    <li>
                        <a  target="_blank"
                            rel="noreferrer"
                            title="Visualizar certificado"
                            href="https://www.unovacursos.com.br/certificados/14304132340741204202210"
                        >
                            <h2>Javascript <br />Para Iniciantes</h2>
                            <p>Unova Cursos | Outubro/2022</p>
                        </a>
                    </li>
                </ul>
                <ul className="skills">
                    <li title="HTML5"><img src={ iconHtml5 } alt="HTML 5" /></li>
                    <li title="CSS 3"><img src={ iconCss3 } alt="CSS 3" /></li>
                    <li title="LESS"><img src={ iconLess } alt="LESS" /></li>
                    <li title="SASS"><img src={ iconSass } alt="SASS" /></li>
                    <li title="JavaScript"><img src={ iconJavascript } alt="JavaScript" /></li>
                    <li title="React"><img src={ iconReact } alt="React" /></li>
                    <li title="JQuery"><img src={ iconJquery } alt="JQuery" /></li>
                    <li title="Grunt"><img src={ iconGrunt } alt="Grunt" /></li>
                    <li title="Gulp"><img src={ iconGulp } alt="Gulp" /></li>
                    <li title="Bootstrap"><img src={ iconBootstrap } alt="Bootstrap" /></li>
                    <li title="Git"><img src={ iconGit } alt="Git" /></li>
                    <li title="Photoshop"><img src={ iconPhotoshop } alt="Photoshop" /></li>
                    <li title="SQL"><img src={ iconSql } alt="SQL" /></li>
                </ul>
            </div>
        </section>
    )
}