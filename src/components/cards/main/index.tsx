import * as textComponents from '../../../stylesMain';
import { addToCard } from "../../../utils/cart";
import { removeComma } from "../../../utils/prices";
import Bag from "../../svg/bag";
import * as style from './styles';

export default function CardMain({ key, element, inTheCart, setInTheCart }) {
    type Constructor = {
        photo: string;
        name: string;
        price: string;
        description: string;
        inTheCart: any;
        setInTheCart: any;
        key: any;
    };

    const Result = (props: Constructor) => {
        return (
            <style.CardMain key={key}>
                <img src={props.photo} />
                <style.CardMainText>
                    <style.CardMainNamePrice>
                        <textComponents.H4>{props.name}</textComponents.H4>
                        <div>
                            <textComponents.H5>R${removeComma(props.price)}</textComponents.H5>
                        </div>
                    </style.CardMainNamePrice>
                    <textComponents.H6>{props.description}</textComponents.H6>
                </style.CardMainText>
                <textComponents.Button onClick={() => setInTheCart(addToCard(inTheCart, element))}>
                    <Bag />
                    COMPRAR
                </textComponents.Button>
            </style.CardMain>
        )
    }

    return (
        <Result key={key} setInTheCart={setInTheCart} inTheCart={inTheCart} photo={element.photo} name={element.name} price={element.price} description={element.description} />
    )
}