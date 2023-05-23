import {useState} from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

const Recaptcha = () => {
  function onChange(value) {
    console.log('Captcha value:', value);
  }
  const [amount, setAmount] = useState(0);

  return (
    <div className="App">
      <ReCAPTCHA
        sitekey="6LdBwOEiAAAAACDQigHNED5KusyPfIs4iaf6qXv8"
        onChange={onChange}
      />
    </div>
  );
};

export default Recaptcha;