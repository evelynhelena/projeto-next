import React from 'react';
import Cabecalho from '../components/Cabecalho';
import Layout from '../components/Layout';

const exemplo = () => {
    return (
      
        <Layout title="Utilizando components">
            <Cabecalho title="Titulo 1"/>
            <Cabecalho title="Titulo 2"/>
        </Layout>
        
    );
}

export default exemplo;
