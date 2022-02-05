import Main from '../main/main';
import About from '../about/about';
import Best from '../best/best';
import Footer from '../footer/footer';

import './app.scss';

function App() {
  return (
    <div className="app">
      <Main />
      <About />
      <Best />
      <Footer />
    </div>
  );
}

export default App;
