import react from "react";
import {useDispatch} from "react-redux";

const Control = () => {
    const dispatch = useDispatch();
    const up = ()=>{
        dispatch({type:"UP"});
    }
    const down = ()=>{
        dispatch({type:"DOWN"});
    }
    return (
        <div id="pm">
            <input 
                onClick={up}
                type="button" 
                id="plus" 
                value="^" 
            />
            <input 
                onClick={down}
                type="button" 
                id="minus" 
                value="v" 
            />
        </div>
    )
}
export default Control;