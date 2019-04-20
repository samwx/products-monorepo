module.exports = (_, res) => {
    const products = [
        {
            name: 'iPhone x',
            price: '$999',
        },
        {
            name: 'JBL headphone',
            price: '$279',
        },
        {
            name: 'Playstation 4',
            price: '$299.99',
        }
    ]

    res.end(JSON.stringify(products))
}