import './styles/variables.css';
import './styles/global.css';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Portfolio } from './components/sections/Portfolio';
import { Links } from './components/sections/Links';
import { Contact } from './components/sections/Contact';

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Skills />
                <Portfolio />
                <Links />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;
