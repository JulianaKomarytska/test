import {useDispatch} from "react-redux";
import './style.sass'


const Button = ({children, payload}) => {
    const dispatch = useDispatch()
    return <button className={"btn"} onClick={_=> dispatch(payload())}>{children}</button>
}
export default Button