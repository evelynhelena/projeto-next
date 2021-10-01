import Link from 'next/link';
import styles from "../styles/Navegador.module.css";

const Navegador = (props) => {
    return (
        <Link href={props.destino}>
            <div className={styles.navegador} 
            style={{backgroundColor: props.color ?? 'dodgerblue'}}>
                {props.text}
            </div>
        </Link>
    );
}

export default Navegador;
