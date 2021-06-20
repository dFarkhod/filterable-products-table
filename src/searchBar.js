function SearchBar(props) {

    function handleFilterTextChange(e) {
      props.onFilterTextChange(e.target.value);
    }
    
    function handleInStockChange (e) {
      props.onInStockChange(e.target.checked);
    }
    
      return (
        <div>
          <input
            type="text"
            placeholder="Izlash..."
            value={props.filterText}
            onChange={handleFilterTextChange}/>
          <p>
            <input
              type="checkbox"
              checked={props.inStockOnly}
              id="onlyInStock" 
              name="onlyInStock"
              onChange={handleInStockChange} />
              <label htmlFor="onlyInStock">Faqat omborda mavjud bo'lgan maxsulotlar</label>
          </p>
        </div>
      );
    }


export default SearchBar;