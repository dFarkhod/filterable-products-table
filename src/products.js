import React, { useState, useEffect } from 'react'
import FilterableProductTable from './filterableProductTable';
const API_URL = 'http://www.amock.io/api/vd/products';

function Products() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                let jsonData = eval('(' + data + ')'); // eslint-disable-line
                setProducts(jsonData);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
                setIsLoading(false);
            });
    }, [])

    if (isLoading) {
        return <p>Iltimos, sabr qiling. Ma'lumot yuklanyapti...</p>;
    }
    else {
        return (<FilterableProductTable products={products} />);
    }
}

export default Products;