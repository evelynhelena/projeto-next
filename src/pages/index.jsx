import Navegador from '../components/Navegador';
export default function Home(){
    return (
        <div style={{display: 'flex', justifyContent: 'center',alignItems: 'center', height: '100vh', flexWrap: 'wrap'}}>
            <Navegador destino="/estiloso" text="Estiloso" color="red"/>
            <Navegador destino="/exemplo" text="Exemplo" color="green"/>
            <Navegador destino="/jsx"  text="JSX" color="#881f88"/>
            <Navegador destino="/navegacao"  text="navegacao #01" color="#881f22"/>
        </div>
    )
} 