import { addAndRemoveQnd } from "../../utils/cart";
import * as style from './styles';

export default function NumberButton({ setInTheCart, amount, inTheCart, id }) {
    type Constructor = {
        amount: number;
        inTheCart: any;
        setInTheCart: any;
        id: number;
    };

    const Result = (props: Constructor) => {
        return (
            <div className="amount-card">
                <style.NumberButtonH4>Qnd:</style.NumberButtonH4>
                <style.AmountButtuns>
                    <div onClick={() => setInTheCart(addAndRemoveQnd(inTheCart, id, "-"))}><style.NumberButtonSmall>-</style.NumberButtonSmall></div>
                    <style.AmountBorder><style.NumberButtonSmall>{props.amount}</style.NumberButtonSmall></style.AmountBorder>
                    <div onClick={() => setInTheCart(addAndRemoveQnd(inTheCart, id, "+"))}><style.NumberButtonSmall>+</style.NumberButtonSmall></div>
                </style.AmountButtuns>
            </div>
        )
    }
    return (
        <Result id={id} inTheCart={inTheCart} setInTheCart={setInTheCart} amount={amount} />
    )
}