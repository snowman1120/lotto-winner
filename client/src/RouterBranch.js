
import { Route, Routes, Redirect } from 'react-router-dom';

import Main from 'layouts/main/Main';
import BuyTickets from 'layouts/main/BuyTickets';
import Aboutus from 'layouts/aboutus/Aboutus';
import Login from 'layouts/auth/login/Login';
import Register from 'layouts/auth/register/Register';
import Bankcards from 'layouts/payment/Bankcards';
import Ewallets from 'layouts/payment/Ewallets';

import Recaptcha from 'layouts/auth/Recaptcha';

import Test from 'layouts/test/Test';

const RouterBranch = () => {
    return (
        <Routes>
            <Route path="/" element={<BuyTickets />} />
            {/* <Redirect from="/main" to="/" /> */}
            
            <Route path="/main" element={<BuyTickets />} />
            <Route path="/buytickets" element={<BuyTickets />} />
            <Route path='/aboutus' element={<Aboutus />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path="/bankcards" element={<Bankcards />} />
            <Route path='/ewallets' element={<Ewallets />} />

            <Route path='/recaptcha' element={<Recaptcha />} />

            <Route path='/test' element={<Test />} />
        </Routes>
    )
}

export default RouterBranch;