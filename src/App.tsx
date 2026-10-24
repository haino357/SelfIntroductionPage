import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { Contact } from './components/sections/Contact';
import { Hero } from './components/sections/Hero';
import { Links } from './components/sections/Links';
import { Socials } from './components/sections/Socials';

import type { FC } from 'react';
import './styles/variables.css';
import './styles/global.css';

export const App: FC = () => (
  <>
    <Header />
    <main id="main-content" className="container">
      <Hero />
      <Contact />
      <Socials />
      <Links />
    </main>
    <Footer />
  </>
);
