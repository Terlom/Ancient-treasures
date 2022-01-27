import React from "react";
import productImgs1 from '../imgs/product1.png';
import productImgs2 from '../imgs/product2.png';
import productImgs3 from '../imgs/product3.png';
import ProductQuantity from "../components/ProductQuantity";
import CartPreview from "../components/CartPreview/CartPreview";


const Product = () => {
    const [product,setProduct] = React.useState(
        {
            id:1,
            name:'Handmade Stainless Steel Kings Chain Viking Geri And Freki Mjolnir Necklace',
            length: '60 CM (24 INCHES)',
            quantity: 5,
            price: 25.00,
            discount_price: 19.95,
            imgs: [productImgs1,productImgs2,productImgs3],
            description:
                <div className="product-info__description">
                    <h4>Handmade Chain Geri and Freki Viking Necklace with Thor Hammer Mjolnir!</h4>
                    <p>
                        The Kings chain was worn by Viking kings as a status symbol as the name applies.
                        This is a 100% handmade Stainless Steel Chain.
                        The crafting is a very time consuming process to put together the chain link by link.
                    </p>
                    <p>The hand made chain connects together with a lobster clamp.</p>
                </div>
        })

    return(
        <main>
            <div className="container product-container">
                <div className="product-images">
                    <img id={"selected-img"} className={"selected-img"} src={product.imgs[0]} alt="Selected img"/>
                    <div className="collection-imgs" id={"collection-imgs"}>
                        {
                            product.imgs.map(img => (<img className={"product-img"}  src={img}
                                                          alt="Product images"/>))
                        }
                    </div>
                </div>
                <div className="product-info">
                    <div className="mobile-container">
                        <h1 className={"product-info__name"}>{product.name}</h1>
                    </div>
                    <div className="order-block">
                        <div className="mobile-container">
                            <div className="uno">
                                <h2 className={"product-info__choose-length"}>Choose your length</h2>
                                <select className={"selected-parameters"} name="" id="">
                                    <option value={product.length}>{product.length}</option>
                                </select>
                            </div>
                            <div className="price">
                                <span className={"price__current-price"}>${product.discount_price}</span>
                                <span className={"price__annotation"}>Tax included</span>
                            </div>

                            <div className="product-info__actions">
                                <ProductQuantity
                                    quantity={product.quantity}
                                />
                                <button className={"add-to-cart"} >Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-container">
                        {
                            product.description
                        }
                    </div>
                </div>
            </div>

        </main>
    )
}
export default Product