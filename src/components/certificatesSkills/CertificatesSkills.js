import { useEffect } from 'react';
import { showOnScroll } from '../showOnScroll';

const Certificate = props => {
    return (
        <li>
            <a target='_blank'
                rel='noreferrer'
                title='Visualizar certificado'
                href={props.url}
            >
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </a>
        </li>
    )
}

const Skill = props => {
    return (
        <li title={props.title}>
            <img src={process.env.PUBLIC_URL + '/img/skills/' + props.icon} alt={props.title} />
        </li>
    )
}

export function CertificatesSkills(props) {
    useEffect(() => {
        showOnScroll('#certificates-skills', 100);
    }, []);

    return (
        <section id='certificates-skills' className='container' style={props.minHeight}>
            <h1 className='title-default'>Certificados & Skills</h1>
            <div className='content'>
                <ul className='certificates'>
                    <Certificate
                        title='Javascript Para Iniciantes'
                        description='Unova Cursos | Outubro/2022'
                        url='https://www.unovacursos.com.br/certificados/14304132340741204202210'
                    />
                    <Certificate
                        title='CC50: Introdução à Ciência da Computação'
                        description='Fundação Estudar | Setembro/2022'
                        url='https://edools-3-production.s3.amazonaws.com/org-6988/school-7227/certificates/enrollment-7244069/course-84414-bvrom.pdf'
                    />
                    <li>
                        <h2>Formação Design Gráfico</h2>
                        <p>ProWay Informática | Fevereiro/2012</p>
                    </li>
                </ul>
                <ul className='skills'>
                    <Skill title='HTML 5' icon='html5.svg' />
                    <Skill title='CSS 3' icon='css3.svg' />
                    <Skill title='LESS' icon='less.svg' />
                    <Skill title='SASS' icon='sass.svg' />
                    <Skill title='JavaScript' icon='javascript.svg' />
                    <Skill title='React' icon='react.svg' />
                    <Skill title='JQuery' icon='jquery.svg' />
                    <Skill title='Grunt' icon='grunt.svg' />
                    <Skill title='Gulp' icon='gulp.svg' />
                    <Skill title='Bootstrap' icon='bootstrap.svg' />
                    <Skill title='Git' icon='git.svg' />
                    <Skill title='Photoshop' icon='photoshop.svg' />
                    <Skill title='SQL' icon='sql.svg' />
                </ul>
            </div>
        </section>
    )
}