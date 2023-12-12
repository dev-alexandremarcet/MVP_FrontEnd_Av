import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function BtnVoltar() {

    const navigate = useNavigate()
    
    return <button className="btnVoltar" onClick={() => navigate('/')}><FaHome /></button>

}