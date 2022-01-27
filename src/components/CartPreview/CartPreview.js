import productSmallImg from "../../imgs/product-small.png";
import ProductQuantity from "../ProductQuantity";

const closeCartPreview =()=>{
    const cartPreview = document.getElementById("cart-preview");
    cartPreview.style.display = 'none';
    document.body.style.overflow = 'auto';
}

const CartPreview = () =>{

    return(
            <aside className={"cart-preview"} id={"cart-preview"}>
                <div className="cart-preview__header">
                    <span>Cart (8 items)</span>
                    <div onClick={closeCartPreview} className="close-cart-preview"></div>
                </div>
                <div className={"selected-products"}>
                    <div className="cart-preview__product">
                        <img className={"product-smallImg"} src={productSmallImg} alt=""/>
                        <div className="selected-product-info">
                            <h5 className={"product-name"}>Handmade Stainless Steel Massive Wolf Chain with Odin’s Protection Charm - 50cm / 20in</h5>
                            <div className={"prices"}>
                                <span className={"discount-price"}>$19.95</span>
                                <span className={"old-price"}>$29.95</span>
                            </div>
                            <ProductQuantity/>
                        </div>
                    </div>
                </div>
                <div className="cart-preview__footer">
                    <div className={"subtotal"}>
                        <h4>Subtotal</h4>
                        <h4>$144.95</h4>
                    </div>
                    <div>
                        <button className={"view-cart"}>View cart</button>
                        <button className={"to-checkout"}>Proceed to checkout</button>
                    </div>
                </div>
            </aside>
    )
}

export default CartPreview