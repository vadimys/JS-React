import constants from "../../Constants";

export default function Agree({checked, handleChange}) {
    return (
        <div className="agree">
            <input className='checkbox-agree' type="checkbox" name={constants.AGREE_ID}
                   onChange={handleChange}
                   defaultChecked={checked}/>
            {constants.AGREE_TXT}
        </div>
    );
}
