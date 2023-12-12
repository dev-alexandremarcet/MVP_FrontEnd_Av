export default function Item(props) {
    
    const conceito = props.conceito

    return (
        <article className="conceito">
            <span>{conceito.nome}</span>
            <br></br>
            <ul>
                <li><span>{conceito.aplic1}</span></li>
                <li><span>{conceito.aplic2}</span></li>
            </ul>
        </article>
    )
}