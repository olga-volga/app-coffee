import {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

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
        {id: 1, name: 'AROMISTICO Coffee 1 kg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', country: 'Brazil', price: 6.99},
        {id: 2, name: 'Solimo Coffee 2 kg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', country: 'Kenya', price: 10.73},
        {id: 3, name: 'Presto Coffee 1 kg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', country: 'Columbia', price: 15.99},
        {id: 4, name: 'Solimo Coffee 2 kg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', country: 'Kenya', price: 10.73},
        {id: 5, name: 'AROMISTICO Coffee 1 kg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', country: 'Brazil', price: 6.99},
        {id: 6, name: 'AROMISTICO Coffee 1 kg', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', country: 'Brazil', price: 6.99}
      ],
      search: '',
      filter: '',
      coffeeItem: {}
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
  updateCoffeeItem = (coffeeItem) => {
    this.setState({coffeeItem});
  }
  render() {
    const {data, search, filter, coffeeItem} = this.state;
    const cofeeList = this.filterCoffee(this.searchCoffee(data, search), filter);
    return (
      <Router>
        <div className="app">
        <Switch>
          {/*<!-- MAIN PAGE -->*/}
          <Route exact path="/">
            <Main />
            <About />
            <Best />
          </Route>
          {/*<!-- OUR COFFEE PAGE -->*/}
          <Route exact path="/coffee">
            <MainSecondary theme="coffee" title="Our Coffee" />
            <AboutSecondary img={aboutBeans} alt="coffee" title="About our beans" />
            <SectionDivider />
            <Search updateSearch={this.updateSearch} updateFilter={this.updateFilter} />
            <CoffeeList data={cofeeList} updateCoffeeItem={this.updateCoffeeItem} />
          </Route>
          {/*<!-- COFFEE ITEM PAGE -->*/}
          <Route exact path="/coffee/:coffeeId">
            <MainSecondary theme="coffee" title="Our Coffee" />
            <AboutCoffeeItem coffeeItem={coffeeItem}/>
          </Route>
          {/*<!-- FOR YOUR PLEASURE PAGE -->*/}
          <Route exact path="/pleasure">
            <MainSecondary theme="pleasure" title="For your pleasure" />
            <AboutSecondary img={aboutGoods} alt="coffee cup" title="About our goods" />
            <SectionDivider />
            <CoffeeList data={data} updateCoffeeItem={this.updateCoffeeItem} />
          </Route>
        </Switch>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
