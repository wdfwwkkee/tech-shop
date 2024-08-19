import { Link } from "react-router-dom"
import Divider from "../Divider/Divider"
import Header from "../Header/Header"
import * as styled from './style.style'

const Authorized = () => {
  return (
    <>
        <Header />
        <Divider />
        <styled.Authorized>
            <div>To view this page u need to be authorized</div>
            <Link className="log-btn" to={'/login'}>Sign In</Link>
        </styled.Authorized>
    </>
  )
}

export default Authorized