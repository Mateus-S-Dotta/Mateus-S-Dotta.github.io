import { useEffect, useState } from "react";
import * as textComponents from '../../stylesMain';
import { someAllPrice } from "../../utils/prices";
import CardCart from "../cards/cart";
import CloseCart from "../svg/closeCart";
import * as style from "./styles";

export default function BuysBar({ setViewBuys, inTheCart, setInTheCart }) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        setValue(someAllPrice(inTheCart));
    }, [inTheCart])

    type Constructor = {
        setViewBuys: any;
        inTheCart: any;
        setInTheCart: any;
    };

    const Result = (props: Constructor) => {
        return (
            <style.BuysBar>
                <style.BuysBarHeader>
                    <textComponents.H2>
                        Carrinho de compras
                    </textComponents.H2>
                    <style.BuysBarClose onClick={() => setViewBuys(false)}>
                        <CloseCart />
                    </style.BuysBarClose>
                </style.BuysBarHeader>
                <style.BuysBarContent>
                    {inTheCart.map((element) => (
                        <CardCart key={element.id}
                            setInTheCart={setInTheCart} inTheCart={inTheCart}
                            amount={element.amount} photo={element.photo} name={element.name}
                            price={element.price} id={element.id}
                        />
                    ))}
                </style.BuysBarContent>
                <style.BuysBarFooter>
                    <style.PurchaseData>
                        {inTheCart.length === 0
                            ?
                            <textComponents.H3>Nenhuma Compra</textComponents.H3>
                            :
                            <>
                                <textComponents.H3>Total:</textComponents.H3>
                                <textComponents.H3>R${value}</textComponents.H3>
                            </>
                        }
                    </style.PurchaseData>
                    <style.BuysBarFooterButton>
                        <textComponents.Span>
                            Finalizar Compra
                        </textComponents.Span>
                    </style.BuysBarFooterButton>
                </style.BuysBarFooter>
            </style.BuysBar>
        )
    }

    return (
        <Result setInTheCart={setInTheCart} setViewBuys={setViewBuys} inTheCart={inTheCart} />
    )
}