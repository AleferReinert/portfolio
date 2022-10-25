import { useEffect, useState } from "react";
import googleHomepage from '../img/photoGoogleHomepage.png';
import metronome from '../img/photoMetronome.png';
import singlePage from '../img/photoSinglePage.png';
import ticTacToe from '../img/photoTicTacToe.png';
import timer from '../img/photoTimer.png';
import { ProjectItem } from "./ProjectItem";

export function Projects(){

    return(
        <section id="projects" className="container">
            {/* <div>
                <h1 className="title">
                    Projetos
                </h1>
            </div> */}
            <div>
                <ul>
                    <ProjectItem
                        name="Tic Tac Toe"
                        imageUrl={ticTacToe}
                        description="Jogo da velha feito a partir do tutorial do react."
                        skills="JSX React CSS"
                        url="https://aleferreinert.github.io/tic-tac-toe"
                    />
                    <ProjectItem
                        name="Metronome"
                        imageUrl={metronome}
                        description="O metrônomo é um item obrigatório para qualquer músico, auxilia nos estudos e a tocar no tempo correto."
                        skills="HTML JavaScript CSS"
                        url="https://aleferreinert.github.io/metronome"
                    />
                    <ProjectItem
                        name="Single Page"
                        imageUrl={singlePage}
                        description="Um simples website genérico de página única."
                        skills="HTML JavaScript Less Gulp"
                        url="https://aleferreinert.github.io/single-page"
                    />
                    <ProjectItem
                        name="Timer"
                        imageUrl={timer}
                        description="Medição de intervalos de tempo."
                        skills="HTML JavaScript CSS"
                        url="https://aleferreinert.github.io/timer"
                    />
                    <ProjectItem
                        name="Google Homepage"
                        imageUrl={googleHomepage}
                        description="Clone da página inicial de busca do Google (desktop)."
                        skills="HTML JavaScript CSS"
                        url="https://aleferreinert.github.io/google-homepage"
                    />
                </ul>
            </div>
        </section>
    )
}