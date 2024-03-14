import React from 'react';
import { Brand, CTA, Navbar } from './components';
import { AboutMe, Blog, Features, Footer, Header, Possibility } from './containers';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
        <div>
          <Brand />
          <AboutMe />
          <Features />
          <Possibility />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
