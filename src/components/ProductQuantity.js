import React, {useState} from "react";

const ProductQuantity = (props) => {
    const [quantity, setQuantity] = useState(1);

    // let maxValue = props.quantity
    const decreaseQuantity = () => {
        if(quantity>1){
            setQuantity(quantity-1);
        }
    }

    const increaseQuantity = () => {
        if(quantity<5){
            setQuantity(quantity+1);
        }
    }
    return (
        <div className={"product-quantity"}>
            <button  onClick={decreaseQuantity} className={"product-quantity__decrease"} id={'decrease'}>-</button>
            <input
                className={"product-quantity__value"}
                id={'product-quantity__value'}
                type="number"
                value={quantity}
                min="1"
                max={props.quantity}
                step="1"
                required
            readOnly={true}/>
            <button onClick={increaseQuantity} className={"product-quantity__increase"}>+</button>
        </div>
    )
}
export default ProductQuantity