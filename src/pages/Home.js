import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Title from "../components/Title";
import Item from "../components/Item";
import Conceitos from "../Conceitos.json";
import { CgMathPercent } from "react-icons/cg";
import { PiMathOperations } from "react-icons/pi";

export default function Home() {

    const [ listaConceitos, setListaConceitos ] = useState(Conceitos.operacoes)

    const navigate = useNavigate()

    useEffect(() => {
        setListaConceitos(listaConceitos)
    }, [listaConceitos]);

    return (
        <div className="home">
            <Title titulo="Cálculos Matemáticos" />
            <br></br><br></br><br></br>
            <ul className="listaHome">
                <li>
                    <button className="btnHome" onClick={() => navigate('/OperFund')}><PiMathOperations /></button>
                </li>
                <li>
                    <button className="btnHome" onClick={() => navigate('/Porcentagem')}><CgMathPercent /></button>
                </li>
            </ul>
            <br></br><br></br>
            <section className="listaConceitos">
                {listaConceitos.map((conc, index) => (
                    <Item key={index} conceito={conc} />
                ))}
            </section>
        </div>
    )
    
}