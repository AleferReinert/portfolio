
import './App.scss';
import { Header } from './components/Header';
import { About } from './components/About';
import { CertificatesSkills } from './components/CertificatesSkills';
import { Projects } from './components/Projects';
import { Social } from './components/Social';

const sectionHeight = {
    minHeight: (window.innerHeight - 50) + 'px'
}

function App() {
    return (
        <div className="App">
            <Header itemName={'about'} />
            <main>
                <About minHeight={sectionHeight} />
                <CertificatesSkills minHeight={sectionHeight} />
                <Projects />
            </main>
            <aside>
                <Social />
            </aside>
        </div>
    );
}

export default App;
