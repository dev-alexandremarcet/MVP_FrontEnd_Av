import { useState, useEffect } from "react";
import Title from "../components/Title";
import BtnVoltar from "../components/BtnVoltar";
import Dicas from "../components/Dicas";
import { CgMathPercent } from "react-icons/cg";
import { CgMathEqual } from "react-icons/cg";
import '../index.css';

export default function Porcentagem() {

    const [ inputPorc1, setInputPorc1 ] = useState(0);
    const [ inputPorc2, setInputPorc2 ] = useState(0);

    const [ inputPorc3, setInputPorc3 ] = useState(0);
    const [ inputPorc4, setInputPorc4 ] = useState(1);

    const [ inputPorc5, setInputPorc5 ] = useState(0);
    const [ inputPorc6, setInputPorc6 ] = useState(1);

    const [ inputPorc7, setInputPorc7 ] = useState(0);
    const [ inputPorc8, setInputPorc8 ] = useState(0);

    const handleChangePorc1 = (e) => {
        setInputPorc1(parseInt(e.target.value));
    }

    const handleChangePorc2 = (e) => {
        setInputPorc2(parseInt(e.target.value));
    }

    const handleChangePorc3 = (e) => {
        setInputPorc3(parseInt(e.target.value));
    }

    const handleChangePorc4 = (e) => {
        setInputPorc4(parseInt(e.target.value));
    }

    const handleChangePorc5 = (e) => {
        setInputPorc5(parseInt(e.target.value));
    }

    const handleChangePorc6 = (e) => {
        setInputPorc6(parseInt(e.target.value));
    }

    const handleChangePorc7 = (e) => {
        setInputPorc7(parseInt(e.target.value));
    }

    const handleChangePorc8 = (e) => {
        setInputPorc8(parseInt(e.target.value));
    }

    useEffect(() => {
        setInputPorc1(inputPorc1)
    }, [inputPorc1]);

    useEffect(() => {
        setInputPorc2(inputPorc2)
    }, [inputPorc2]);

    useEffect(() => {
        setInputPorc3(inputPorc3)
    }, [inputPorc3]);

    useEffect(() => {
        setInputPorc4(inputPorc4)
    }, [inputPorc4]);

    useEffect(() => {
        setInputPorc5(inputPorc5)
    }, [inputPorc5]);

    useEffect(() => {
        setInputPorc6(inputPorc6)
    }, [inputPorc6]);

    useEffect(() => {
        setInputPorc7(inputPorc7)
    }, [inputPorc7]);

    useEffect(() => {
        setInputPorc8(inputPorc8)
    }, [inputPorc8]);

    return (
        <div>
            <Title titulo="Cálculos Matemáticos - Porcentagem" />
            <br></br>
            <div className="porcentagem">
                <form className="frmCalcPorc">
                    <input className="inputNum" id="inputPorc1" type="text" size="7" maxLength="7" onChange={handleChangePorc1}></input>
                    <CgMathPercent />
                    <span></span>
                    <p>de</p>
                    <span></span>
                    <input className="inputNum" id="inputPorc2" type="text" size="7" maxLength="7" onChange={handleChangePorc2}></input>
                    <CgMathEqual />
                    <input className="inputResult" type="text" size="7" maxLength="10" value={inputPorc1*inputPorc2/100} readOnly></input>
                </form>
            </div>
            <br></br>
            <div className="porcentagem">
                <form className="frmCalcPorc">
                    <input className="inputNum" id="inputPorc3" type="text" size="7" maxLength="7" onChange={handleChangePorc3}></input>
                    <CgMathEqual />
                    <input className="inputNum" id="inputPorc4" type="text" size="7" maxLength="7" onChange={handleChangePorc4}></input>
                    <CgMathPercent />
                    <span></span>
                    <p>de</p>
                    <span></span>
                    <input className="inputResult" type="text" size="7" maxLength="10" value={inputPorc3*100/inputPorc4} readOnly></input>
                </form>
            </div>
            <br></br>
            <div className="porcentagem">
                <form className="frmCalcPorc">
                    <input className="inputNum" id="inputPorc5" type="text" size="7" maxLength="7" onChange={handleChangePorc5}></input>
                    <p>é igual a quantos por cento de</p>
                    <input className="inputNum" id="inputPorc6" type="text" size="7" maxLength="7" onChange={handleChangePorc6}></input>
                    <p>?</p>
                    <input className="inputResult" type="text" size="7" maxLength="10" value={inputPorc5/inputPorc6*100} readOnly></input>
                    <CgMathPercent />
                </form>
            </div>
            <br></br>
            <div className="porcentagem">
                <form className="frmCalcPorc">
                    <input className="inputNum" id="inputPorc7" type="text" size="7" maxLength="7" onChange={handleChangePorc7}></input>
                    <CgMathPercent />
                    <span></span>
                    <p>de</p>
                    <span></span>
                    <input className="inputNum" id="inputPorc8" type="text" size="7" maxLength="7" onChange={handleChangePorc8}></input>
                    <CgMathPercent />
                    <CgMathEqual />
                    <input className="inputResult" type="text" size="7" maxLength="10" value={inputPorc7*inputPorc8/100} readOnly></input>
                    <CgMathPercent />
                </form>
            </div>
            <br></br>
            <div className="voltarHome">
                <Dicas porc={1} />
                <BtnVoltar />
            </div>
        </div>    
    )
}