import { useEffect, useState } from 'react';
import BuysBar from '../../components/buysBar';
import CardMain from '../../components/cards/main';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header';
import api from '../../services/api';
import * as style from './styles';

export default function Main() {
    const [dados, setDados] = useState([]);
    const [inTheCart, setInTheCart] = useState([]);
    const [viewBuys, setViewBuys] = useState(false);

    async function loadApi() {
        const response = await api.get('');
        setDados(response.data.products)
    }

    useEffect(() => {
        loadApi()
    }, []);

    return (
        <>
            <Header quantity={inTheCart.length} setViewBuys={setViewBuys} />
            <style.Main>
                <style.MainContent>
                    {dados.map((element, index) => (
                        <CardMain key={index}
                            element={element} inTheCart={inTheCart}
                            setInTheCart={setInTheCart}
                        />
                    ))}
                </style.MainContent>
            </style.Main>
            <Footer />
            {viewBuys && <BuysBar setInTheCart={setInTheCart} inTheCart={inTheCart} setViewBuys={setViewBuys} />}
        </>
    )
}