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
import AboutCoffeeItem from '../about-coffee-item/about-coffee-item';

import './app.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 1, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99},
        {id: 2, name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: 6.99},
        {id: 3, name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: 6.99},
        {id: 4, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99},
        {id: 5, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99},
        {id: 6, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99}
      ]
    }
  }
  render() {
    const {data} = this.state;
    return (
      <div className="app">
        {/*<!-- MAIN PAGE -->*/}
        <Main />
        <About />
        <Best />
        <Footer />
  
        {/*<!-- OUR COFFEE PAGE -->*/}
        <MainSecondary theme="coffee" title="Our Coffee" />
        <AboutSecondary />
        <SectionDivider />
        <Search />
        <CoffeeList data={data} />
        <Footer />

        {/*<!-- COFFEE ITEM PAGE -->*/}
        <MainSecondary theme="coffee" title="Our Coffee" />
        <AboutCoffeeItem />
        <Footer />

        {/*<!-- FOR YOUR PLEASURE PAGE -->*/}
        <MainSecondary theme="pleasure" title="For your pleasure" />
      </div>
    );
  }
}

export default App;
