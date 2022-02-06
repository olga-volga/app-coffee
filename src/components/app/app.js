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

import aboutBeans from '../../img/about-beans.jpg';
import aboutGoods from '../../img/about-goods.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id: 1, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99},
        {id: 2, name: 'Solimo Coffee 2 kg', country: 'Kenya', price: 10.73},
        {id: 3, name: 'Presto Coffee 1 kg', country: 'Columbia', price: 15.99},
        {id: 4, name: 'Solimo Coffee 2 kg', country: 'Kenya', price: 10.73},
        {id: 5, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99},
        {id: 6, name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99}
      ],
      search: '',
      filter: ''
    }
  }
  updateSearch = (search) => {
    this.setState({search})
  }
  searchCoffee = (items, search) => {
    if (search.length === 0) {
      return items;
    }
    return items.filter(item => {
      return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1
    })
  }
  updateFilter = (filter) => {
    this.setState({filter})
  }
  filterCoffee = (items, filter) => {
    if(filter) {
      return items.filter(item => {
        return item.country === filter;
      });
    }
    return items;
  }
  render() {
    const {data, search, filter} = this.state;
    const cofeeList = this.filterCoffee(this.searchCoffee(data, search), filter);
    return (
      <div className="app">
        {/*<!-- MAIN PAGE -->*/}
        <Main />
        <About />
        <Best />
        <Footer />
  
        {/*<!-- OUR COFFEE PAGE -->*/}
        <MainSecondary theme="coffee" title="Our Coffee" />
        <AboutSecondary img={aboutBeans} alt="coffee" title="About our beans" />
        <SectionDivider />
        <Search updateSearch={this.updateSearch} updateFilter={this.updateFilter} />
        <CoffeeList data={cofeeList} />
        <Footer />

        {/*<!-- COFFEE ITEM PAGE -->*/}
        <MainSecondary theme="coffee" title="Our Coffee" />
        <AboutCoffeeItem />
        <Footer />

        {/*<!-- FOR YOUR PLEASURE PAGE -->*/}
        <MainSecondary theme="pleasure" title="For your pleasure" />
        <AboutSecondary img={aboutGoods} alt="coffee cup" title="About our goods" />
        <SectionDivider />
        <CoffeeList data={data} />
        <Footer />
      </div>
    );
  }
}

export default App;
