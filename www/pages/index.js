import React, { useState, useEffect } from 'react'
import axios from 'axios'

const API_URL = 'https://products-monorepo.samuelmartinssw.now.sh/api';

export default function Index() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const result = await axios.get(`${API_URL}/products.js`)
            setProducts(result.data)
        }

        fetchProducts()
    }, [])
    
    return (
        <div>
            <ul>
                {products.map(p => <li><b>Product name:</b> {p.name} | <b>Price:</b> {p.price}</li>)}
            </ul>
        </div>
    )
}