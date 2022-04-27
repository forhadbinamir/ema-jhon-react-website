import { useEffect, useState } from "react"
import { getStoreData } from "../../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = getStoreData();
        const saveCart = []
        const keys = Object.keys(storedCart)
        fetch('http://localhost:5000/productKey', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(products => {
                // console.log(products)
                for (const id in storedCart) {
                    const addedProduct = products.find(product => product._id === id);
                    if (addedProduct) {
                        const quantity = storedCart[id];
                        addedProduct.quantity = quantity
                        saveCart.push(addedProduct)
                    }
                    setCart(saveCart)
                }
            })
    }, [products])
    return [cart, setCart]
}

export default useCart;