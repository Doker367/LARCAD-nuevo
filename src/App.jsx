import React, { Suspense, lazy } from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Hardware from './components/Hardware/Hardware';
import Software from './components/Software/Software';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import CookieConsent from './components/CookieConsent/CookieConsent';

const Chatbot = lazy(() => import('./components/Chatbot/Chatbot'));

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Hardware />
        <Software />
        <Contact />
      </main>
      <Footer />
      <Suspense fallback={null}>
        <Chatbot />
      </Suspense>
      <CookieConsent />
    </ThemeProvider>
  );
}

export default App;
