import constants from "./Constants";

export default function Password({handleChange}) {
    return (
        <input type="password" name={constants.PASSWORD_ID} placeholder={constants.PASSWORD_TXT} required={true}
               onChange={handleChange}/>
    );
}
