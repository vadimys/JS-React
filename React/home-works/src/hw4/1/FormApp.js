import {useState} from 'react'
import constants from "./components/Constants";
import Password from "./components/Password";
import Login from "./components/Login";
import Submit from "./components/Submit";
import Agree from "./components/Agree";
import "./FormApp.css";

export default function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [checked] = useState(true);
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false);
        }, 3000)
    }

    const onChange = event => {
        if (event.target.name === constants.AGREE_ID) {
            console.log(event.target.checked);
        }

        if (event.target.name === constants.LOGIN_ID) {
            validate(event.target.value, constants.EMAIL_REGEXP, setEmail);
        }

        if (event.target.name === constants.PASSWORD_ID) {
            validate(event.target.value, constants.PASSWORD_REGEXP, setPassword);
        }

        if (email && password) {
            setDisabled(false);
        }
    }

    const validate = (value, regExp, setData) => {
        const isOk = regExp.test(value);

        if (isOk) {
            setData(value);
        }
    }

    return (
        <div className="login-form">
            <h2>{constants.TITLE_TXT}</h2>
            {submitting && <div>Submitting Form...</div>}
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <Login handleChange={onChange}/><br/>
                    <Password handleChange={onChange}/>
                </fieldset>
                <Submit disabled={disabled}/><br/>
                <Agree checked={checked} handleChange={onChange}/>
            </form>
        </div>
    );
}
