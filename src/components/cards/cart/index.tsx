import * as textComponents from '../../../stylesMain';
import { removeItem } from "../../../utils/cart";
import { removeComma } from '../../../utils/prices';
import NumberButton from "../../numberButton";
import * as style from "./styles";

export default function CardCart({ id, amount, photo, name, price, setInTheCart, inTheCart }) {
    type Constructor = {
        photo: string;
        name: any;
        price: any;
        amount: number;
        setInTheCart: any;
        inTheCart: any;
        id: number;
    };

    const Result = (props: Constructor) => {
        return (
            <style.Cart>
                <style.CartFirst>
                    <img src={props.photo} />
                    <textComponents.H4>{props.name}</textComponents.H4>
                </style.CartFirst>
                <style.CartSecund>
                    <NumberButton setInTheCart={setInTheCart} inTheCart={inTheCart} id={props.id} amount={props.amount} />
                    <textComponents.H5>R${removeComma(props.price)}</textComponents.H5>
                </style.CartSecund>
                <style.CloseButtonCart onClick={() => setInTheCart(removeItem(inTheCart, id))}>
                    <textComponents.H4>X</textComponents.H4>
                </style.CloseButtonCart>
            </style.Cart>
        )
    }

    return (
        <Result id={id} amount={amount} setInTheCart={setInTheCart} inTheCart={inTheCart} photo={photo} name={name} price={price} />
    )
}