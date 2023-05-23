import {useState} from 'react';

import LottoTitle from 'layouts/title/Title';

const title = "Choose your payment method";
const description_1 = "It is a long established fact that a reader will be distracted by";
const description_2 = "the readable content of a page";

const Ewallets = () => {
    return (
        <div>
            <LottoTitle title={title} description_1={description_1} description_2={description_2} />
            
        </div>
    );
}

export default Ewallets;