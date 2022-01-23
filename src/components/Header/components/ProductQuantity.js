import React from "react";

const ProductQuantity = (props) => {
    let input = document.getElementById('product-quantity__value');
    const decreaseQuantity = () => {
        input.stepDown();
    }

    const increaseQuantity = () => {
        input.stepUp();
    }
    return (
        <div className={"product-quantity"}>
            <button  onClick={decreaseQuantity} className={"product-quantity__decrease"} id={'decrease'}>-</button>
            <input
                className={"product-quantity__value"}
                id={'product-quantity__value'}
                type="number"
                value="2"
                min="1"
                max="25"
                step="1"
                required
            readOnly={true}/>
            <button onClick={increaseQuantity} className={"product-quantity__increase"}>+</button>
        </div>
    )
}
export default ProductQuantity