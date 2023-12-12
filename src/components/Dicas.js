export default function Dicas({ porc }) {

    return (
        <>
        { porc ? (
            <div className="dicas">
                <h3>Nesta página temos:</h3>
                <p>4 operações envolvendo porcentagem</p>
                <ul>
                    <li>Cálculo da porcentagem de um valor</li>
                    <li>Cálculo do total a partir de uma porcentagem e um valor dado</li>
                    <li>Cálculo da porcentagem de um valor em relação a outro</li>
                    <li>Cálculo da porcentagem de outra porcentagem</li>
                </ul>
            </div> ) : (
            <div className="dicas">
            <h3>Nesta página temos:</h3>
            <p>Cálculos envolvendo as 4 operações fundamentais</p>
            <ul>
                <li>Cálculo da adição de 2 valores</li>
                <li>Cálculo de subtração</li>
                <li>Cálculo de multiplicação</li>
                <li>Cálculo de divisão</li>
            </ul>
        </div> )}
        </>
    )
}