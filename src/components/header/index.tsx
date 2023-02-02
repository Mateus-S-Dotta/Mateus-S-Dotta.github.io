import * as textComponents from '../../stylesMain';
import CartSvg from "../svg/cart";
import * as style from './styles';

export default function Header({ quantity, setViewBuys }) {
    return (
        <style.HeaderStyled>
            <style.HeaderText>
                <textComponents.H1>
                    MKS
                </textComponents.H1>
                <textComponents.P>
                    Sistemas
                </textComponents.P>
            </style.HeaderText>
            <style.OpenBuysButton onClick={() => setViewBuys(true)}>
                < CartSvg />
                <textComponents.Strong>
                    {quantity}
                </textComponents.Strong>
            </style.OpenBuysButton>
        </style.HeaderStyled>
    )
}