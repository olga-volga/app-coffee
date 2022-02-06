import {Component} from 'react';

import './search.scss';

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: ''
		}
	}
	changeValue = (e) => {
		const value = e.target.value;
		this.setState({value})
		this.props.updateSearch(value);
	}
	render() {
		return (
			<section className="search">
				<div className="container">
					<div className="search__body">
						<div className="search-panel">
							<div className="search-panel__body">
								<label htmlFor="searchInput" className="search-panel__label">Looking for</label>
								  <input 
								  	type="text" 
									id="searchInput"
									name="searchInput" 
									placeholder="start typing here..." 
									className="search-panel__input" 
									value={this.state.value}
									onChange={this.changeValue} />
							</div>
						</div>
						<div className="search-filter">
							<div className="search-filter__body">
								<p className="search-filter__label">Or filter</p>
								<div className="search-filter-btns">
									<button type="button" className="btn">Brazil</button>
									<button type="button" className="btn">Kenya</button>
									<button type="button" className="btn">Columbia</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Search;