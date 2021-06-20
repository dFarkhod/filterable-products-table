import SearchBar from './searchBar';
import ProductTable from './productTable';
import { useState } from 'react';

function FilterableProductTable(props) {
    const [filterText, setFilterText] = useState("");
    const [inStockOnly, setInStockOnly] = useState(false);

    function handleFilterTextChange(input) {
        setFilterText(input);
    }

    function handleInStockChange(input) {
        setInStockOnly(input);
    }

    return (
        <div>
            <SearchBar filterText={filterText} inStockOnly={inStockOnly} onFilterTextChange={(updatedFilterText) => handleFilterTextChange(updatedFilterText)} onInStockChange={(updatedInStockChange) => handleInStockChange(updatedInStockChange)} />
            <ProductTable products={props.products} filterText={filterText} inStockOnly={inStockOnly} />
        </div>
    );
}

export default FilterableProductTable;