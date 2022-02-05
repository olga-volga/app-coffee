import './search.scss';

const Search = () => {
    return (
        <section className="search">
			<div className="container">
				<div className="search__body">
					<div className="search-panel">
						<div className="search-panel__body">
							<label htmlFor="searchInput" className="search-panel__label">Looking for</label>
	  						<input type="text" id="searchInput" name="searchInput" placeholder="start typing here..." className="search-panel__input" />
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

export default Search;