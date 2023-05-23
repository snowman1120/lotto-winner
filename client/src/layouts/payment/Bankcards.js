import {useState} from 'react';
import {connect} from 'react-redux';

// Material ui components
import MDButton from "components/MDButton";

import {Form, InputGroup, FormControl} from 'react-bootstrap';
import LottoTitle from 'layouts/title/Title';

import './Payment.css';

import mastercardImg from 'img/payments/mastercard.svg';
import visaImg from 'img/payments/visa.svg';
import paypalImg from 'img/payments/paypal.svg';
import googlepayImg from 'img/payments/g-pay.svg';
import applepayImg from 'img/payments/applepay.svg';

const title = "Choose your payment method";
const description_1 = "It is a long established fact that a reader will be distracted by";
const description_2 = "the readable content of a page";

const Bankcards = ({totalPayAmount}) => {
    const tax = 2;
    
    const [selectdMethod, setSelectedMethod] = useState();

    const [formData, setFormData] = useState({
        expireMonth: '',
        expireYear: ''
    });

    const onChangeMethod = (e) => {
        setSelectedMethod(e.target.id);
    }

    const getMethodImage = (method) => {
        switch(method) {
            case 'mastercard':
                return mastercardImg;
            case 'visa':
                return visaImg;
            case 'paypal':
                return paypalImg;
            case 'googlepay':
                return googlepayImg;
            case 'applepay':
                return applepayImg;
            default:
                break;
        }
    }

    const onChangeInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        });
    }

    const handlePay = () => {

    }

    return (
        <div>
            <LottoTitle title={title} description_1={description_1} description_2={description_2} />
            <div className='row payment-body'>
                <div className='col-md-6 col-xs-12'>
                    <div className='payment-methods'>
                        <div className='payment-label'>
                            Payment methods
                        </div>
                        <div className='payment-methods-radiogroup row'>
                            <div className='payment-one col-2'>
                                <Form.Check
                                    type="radio"
                                    name="paymentmethods"
                                    id="mastercard"
                                    onChange={onChangeMethod}
                                />
                                <img className='payment-method-image' src={mastercardImg} alt="" style={{height: 30}} />
                            </div>
                            <div className='payment-one col-2'>
                                <Form.Check
                                    type="radio"
                                    name="paymentmethods"
                                    id="visa"
                                    onChange={onChangeMethod}
                                />
                                <img className='payment-method-image' src={visaImg} alt="" style={{height: 16}} />
                            </div>
                            <div className='payment-one col-2'>
                                <Form.Check
                                    type="radio"
                                    name="paymentmethods"
                                    id="paypal"
                                    onChange={onChangeMethod}
                                />
                                <img className='payment-method-image' src={paypalImg} alt="" style={{height: 20}} />
                            </div>
                            <div className='payment-one col-2'>
                                <Form.Check
                                    type="radio"
                                    name="paymentmethods"
                                    id="googlepay"
                                    onChange={onChangeMethod}
                                />
                                <img className='payment-method-image' src={googlepayImg} alt="" style={{height: 23}} />
                            </div>
                            <div className='payment-one col-2'>
                                <Form.Check
                                    type="radio"
                                    name="paymentmethods"
                                    id="applepay"
                                    onChange={onChangeMethod}
                                />
                                <img className='payment-method-image' src={applepayImg} alt="" style={{height: 31}} />
                            </div>
                        </div>
                    </div>
                    <div className='cardholder-name'>
                        <div className='payment-label'>
                            Cardholder Name
                        </div>
                        <div className='payment-description'>
                            Enter the name, surname of the cardholder
                        </div>
                        <Form.Control placeholder="John Black" className='payment-input-1' />
                    </div>
                    <div className='card-number'>
                        <div className='payment-label'>
                            Card Number
                        </div>
                        <div className='payment-description'>
                            Enter the 16-digit card number on the card
                        </div>
                        <div className="input-group mb-2 payment-input-1">
                            <div className="input-group-prepend">
                            <img className='payment-method-image input-group-text' src={getMethodImage(selectdMethod)} alt="" style={{marginLeft: 0}} />
                            </div>
                            <input type="text" className="form-control" placeholder="0000-0000-0000-0000" />
                        </div>
                    </div>
                    <div className='cvv-number row'>
                        <div className='col-md-7 col-xs-12'>
                            <div className='payment-label'>
                                CVV Number
                            </div>
                            <div className='payment-description'>
                            Enter the 3-digit number on the card
                            </div>
                        </div>
                        <div className='col-md-5 col-xs-12'>
                            <input type="text" className="form-control cvv-number-input" placeholder="000" style={{display: 'flex', justifyContent: 'end'}} />
                        </div>
                    </div>
                    <div className='expire-date row'>
                        <div className='col-md-6 col-xs-12'>
                            <div className='payment-label'>
                                Expire Date
                            </div>
                            <div className='payment-description'>
                            Enter the expiration date of the card
                            </div>
                        </div>
                        <div className='col-md-6 col-xs-12 d-flex' style={{alignItems: 'center', display: 'flex', justifyContent: 'end'}}>
                            <input type="text" className="form-control expire-date-input" value={formData.expireMonth} name="expireMonth" placeholder="00" onChange={onChangeInput} />
                            <span style={{margin: '0 15px'}}>/</span>
                            <input type="text" className="form-control expire-date-input" value={formData.expireYear} name="expireYear" placeholder="00" onChange={onChangeInput} />
                        </div>
                    </div>
                </div>
                <div className='col-md-1'></div>
                <div className='col-md-5 col-xs-12'>
                    <div className='payment-info'>
                        <div>
                            <div className='payment-customer-name'>John Black</div>    
                        </div>
                        <div style={{marginBottom: '10px', display: 'flex'}}>
                            <span>0005</span>
                            <img src={getMethodImage(selectdMethod)} alt="" style={{height: 30}} />
                        </div>
                        <div style={{fontSize: '17px'}}>
                            {formData.expireMonth} / {formData.expireYear}
                        </div>
                        <div className='row' style={{marginTop: '20px'}}>
                            <div className='col-6'>
                                <div style={{fontSize: '17px', fontWeight: 700}}>Subtotal</div>
                                <div style={{fontSize: '17px', fontWeight: 400}}>$ {totalPayAmount}</div>
                            </div>
                            <div className='col-6'>
                                <div style={{fontSize: '17px', fontWeight: 700}}>Tax</div>
                                <div style={{fontSize: '17px', fontWeight: 400}}>$ {tax}</div>
                            </div>
                        </div>
                        <div style={{marginTop: '20px'}}>
                            <div style={{fontSize: '17px', fontWeight: 700}}>Description</div>
                            <div style={{fontSize: '17px', fontWeight: 400}}>Buying Lottery Tickets #</div>
                        </div>
                        <div style={{marginTop: '20px'}}>
                            <div style={{fontSize: '17px', fontWeight: 700}}>Total amount</div>
                            <div style={{fontSize: '17px', fontWeight: 400}}>$ {totalPayAmount + tax}</div>
                        </div>
                        <div style={{marginTop: '40px', display: 'flex', justifyContent: 'center'}}>
                            <MDButton className="ticket-group-buy-button" onClick={handlePay}>Buy Now</MDButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    totalPayAmount: state.prizepool.totalPayAmount
});

export default connect(mapStateToProps, {})(Bankcards);