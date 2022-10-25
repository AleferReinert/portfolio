import googleHomepage from '../img/photoGoogleHomepage.png';
import metronome from '../img/photoMetronome.png';
import singlePage from '../img/photoSinglePage.png';
import ticTacToe from '../img/photoTicTacToe.png';
import timer from '../img/photoTimer.png';
import { ProjectItem } from "./ProjectItem";

export function Projects(){

    return(
        <section id="projects" className="container">
            <div>
                <ul>
                    <ProjectItem
                        name="Tic Tac Toe"
                        imageUrl={ticTacToe}
                        description="Jogo da velha feito a partir do tutorial do react."
                        skills="JSX React CSS"
                        pageUrl="https://aleferreinert.github.io/tic-tac-toe"
                        repositoryUrl="https://github.com/AleferReinert/tic-tac-toe"
                    />
                    <ProjectItem
                        name="Metronome"
                        imageUrl={metronome}
                        description="O metrônomo é um item obrigatório para qualquer músico, auxilia nos estudos e a tocar no tempo correto."
                        skills="HTML JavaScript CSS"
                        pageUrl="https://aleferreinert.github.io/metronome"
                        repositoryUrl="https://github.com/AleferReinert/metronome"
                    />
                    <ProjectItem
                        name="Single Page"
                        imageUrl={singlePage}
                        description="Um simples website genérico de página única."
                        skills="HTML JavaScript Less Gulp"
                        pageUrl="https://aleferreinert.github.io/single-page"
                        repositoryUrl="https://github.com/AleferReinert/single-page"
                    />
                    <ProjectItem
                        name="Timer"
                        imageUrl={timer}
                        description="Medição de intervalos de tempo."
                        skills="HTML JavaScript CSS"
                        pageUrl="https://aleferreinert.github.io/timer"
                        repositoryUrl="https://github.com/AleferReinert/timer"
                    />
                    <ProjectItem
                        name="Google Homepage"
                        imageUrl={googleHomepage}
                        description="Clone da página inicial de busca do Google (desktop)."
                        skills="HTML JavaScript CSS"
                        pageUrl="https://aleferreinert.github.io/google-homepage"
                        repositoryUrl="https://github.com/AleferReinert/google-homepage"
                    />
                </ul>
            </div>
        </section>
    )
}