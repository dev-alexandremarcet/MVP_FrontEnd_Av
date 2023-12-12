import { useEffect, useState } from "react";
import Title from "../components/Title";
import BtnVoltar from "../components/BtnVoltar";
import Dicas from "../components/Dicas";
import '../index.css';
import { CgMathPlus } from "react-icons/cg";
import { CgMathEqual } from "react-icons/cg";
import { CgMathMinus } from "react-icons/cg";
import { CgMathDivide } from "react-icons/cg";
import { LiaTimesSolid } from "react-icons/lia";

export default function OperFund() {

    const [ inputSoma1, setInputSoma1 ] = useState(0);
    const [ inputSoma2, setInputSoma2 ] = useState(0);

    const [ inputSub1, setInputSub1 ] = useState(0);
    const [ inputSub2, setInputSub2 ] = useState(0);

    const [ inputMult1, setInputMult1 ] = useState(0);
    const [ inputMult2, setInputMult2 ] = useState(0);

    const [ inputDiv1, setInputDiv1 ] = useState(0);
    const [ inputDiv2, setInputDiv2 ] = useState(1);

    const handleChangeSoma1 = (e) => {
        setInputSoma1(parseInt(e.target.value));
    }

    const handleChangeSoma2 = (e) => {
        setInputSoma2(parseInt(e.target.value));
    }

    const handleChangeSub1 = (e) => {
        setInputSub1(parseInt(e.target.value));
    }

    const handleChangeSub2 = (e) => {
        setInputSub2(parseInt(e.target.value));
    }

    const handleChangeMult1 = (e) => {
        setInputMult1(parseInt(e.target.value));
    }

    const handleChangeMult2 = (e) => {
        setInputMult2(parseInt(e.target.value));
    }

    const handleChangeDiv1 = (e) => {
        setInputDiv1(parseInt(e.target.value));
    }

    const handleChangeDiv2 = (e) => {
        setInputDiv2(parseInt(e.target.value));
    }

    useEffect(() => {
        setInputSoma1(inputSoma1)
    }, [inputSoma1]);

    useEffect(() => {
        setInputSoma2(inputSoma2)
    }, [inputSoma2]);

    useEffect(() => {
        setInputSub1(inputSub1)
    }, [inputSub1]);

    useEffect(() => {
        setInputSub2(inputSub2)
    }, [inputSub2]);

    useEffect(() => {
        setInputMult1(inputMult1)
    }, [inputMult1]);

    useEffect(() => {
        setInputMult2(inputMult2)
    }, [inputMult2]);

    useEffect(() => {
        setInputDiv1(inputDiv1)
    }, [inputDiv1]);

    useEffect(() => {
        setInputDiv2(inputDiv2)
    }, [inputDiv2]);

    return (
        <div>
            <Title titulo="Cálculos Matemáticos - Operações Fundamentais" />
            <br></br><br></br>
            <div className="operFund">
                <form className="frmSoma">
                    <input className="inputNum" id="inputSoma1" type="text" size="7" maxLength="7" onChange={handleChangeSoma1}></input>
                    <CgMathPlus />
                    <input className="inputNum" id="inputSoma2" type="text" size="7" maxLength="7" onChange={handleChangeSoma2}></input>
                    <CgMathEqual />
                    <input className="inputResult" type="text" size="7" maxLength="10" value={inputSoma1+inputSoma2} readOnly></input>
                </form>
            </div>
            <br></br>
            <div className="operFund">
                <form className="frmSub">
                    <input className="inputNum" id="inputSub1" type="text" size="7" maxLength="7" onChange={handleChangeSub1}></input>
                    <CgMathMinus />
                    <input className="inputNum" id="inputSub2" type="text" size="7" maxLength="7" onChange={handleChangeSub2}></input>
                    <CgMathEqual />
                    <input className="inputResult" type="text" size="7" maxLength="10" value={inputSub1-inputSub2} readOnly></input>
                </form>
            </div>
            <br></br>
            <div className="operFund">
                <form className="frmMult">
                    <input className="inputNum" id="inputMult1" type="text" size="7" maxLength="7" onChange={handleChangeMult1}></input>
                    <LiaTimesSolid />
                    <input className="inputNum" id="inputMult2" type="text" size="7" maxLength="7" onChange={handleChangeMult2}></input>
                    <CgMathEqual />
                    <input className="inputResult" type="text" size="7" maxLength="10" value={inputMult1*inputMult2} readOnly></input>
                </form>
            </div>
            <br></br>
            <div className="operFund">
                <form className="frmDiv">
                    <input className="inputNum" id="inputDiv1" type="text" size="7" maxLength="7" onChange={handleChangeDiv1}></input>
                    <CgMathDivide />
                    <input className="inputNum" id="inputDiv2" type="text" size="7" maxLength="7" onChange={handleChangeDiv2}></input>
                    <CgMathEqual />
                    <input className="inputResult" type="text" size="7" maxLength="10" value={inputDiv1/inputDiv2} readOnly></input>
                </form>
            </div>
            <br></br><br></br><br></br>
            <div className="voltarHome">
                <Dicas porc={0} />
                <BtnVoltar />
            </div>
        </div>    
    )
}