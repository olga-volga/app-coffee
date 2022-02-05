import {Component} from 'react';

import Main from '../main/main';
import About from '../about/about';
import Best from '../best/best';
import Footer from '../footer/footer';
import MainSecondary from '../main-secondary/main-secondary';
import AboutSecondary from '../about-secondary/about-secondary';
import SectionDivider from '../section-divider/section-divider';
import Search from '../search/search';
import CoffeeList from '../coffee-list/coffee-list';

import './app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: 6.99},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: 6.99},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99}
      ]
    }
  }
  render() {
    return (
      <div className="app">
        {/*<!-- MAIN PAGE -->*/}
        <Main />
        <About />
        <Best />
        <Footer />
  
        {/*<!-- OUR COFFEE PAGE -->*/}
        <MainSecondary />
        <AboutSecondary />
        <SectionDivider />
        <Search />
        <CoffeeList />
        <Footer />
      </div>
    );
  }
}

export default App;
