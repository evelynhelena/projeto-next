import Layout from "../components/Layout";
import styles from "../styles/Estiloso.module.css";
const Estiloso = () => {
    return (
        <Layout title="Exemplo de css">
            <div className={styles.vermelho}>
            <h1>Estilo usando mudulos</h1>  
            </div>
        </Layout>
    );
}

export default Estiloso;
