import { useDispatch, useSelector } from "react-redux"
import { initApiThunk } from "../store/component/action";

export default function Component() {

    const dispatch = useDispatch();
    const dataAPI = useSelector(state => state.component);

    const test = () => {
        dispatch(initApiThunk())
        console.log(dataAPI);
    }

    return ( 
        <>
        <button onClick={test}>click</button>
        </>
    )
   
}