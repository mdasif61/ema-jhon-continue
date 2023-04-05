import { getShoppingCart } from "../utilities/fakedb";

const loadedProduct=async()=>{
    const allProducts=await fetch(`products.json`)
    const data=await allProducts.json();
    
    const local=getShoppingCart();

    let orderCart=[];
    for(const id in local){
        const addedCart=data.find(pd=>pd.id==id);
        if(addedCart){
            let quantity=local[id];
            addedCart.quantity=quantity;
            orderCart.push(addedCart);
        }
    }
    return orderCart;
}
export default loadedProduct;