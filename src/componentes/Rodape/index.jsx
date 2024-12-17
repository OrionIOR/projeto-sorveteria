import estilos from './Rodape.module.css'

import Image from 'next/image'

import logo from '../../../public/img/logo.png'

export default function Rodape() {
    
return(

<footer className={estilos.footer_box}>
    <div className={estilos.container_rodape}>
        <Image src={logo} alt='Logo'/>
        <div>
            <h3>ENDEREÇO</h3>
            <p>Av. Bernardino de Campos, 98</p>
            <p>São Paulo, SP 12345-678
            </p>
        </div>
        <div>
            <h3>CONTATO</h3>
            <p>info@meusite.com</p>
            <p>Tel: (11) 3456-7890</p>
        </div>
        <div>
            <h3>HORÁRIOS</h3>
            <p>ABERTO TODOS OS DIAS</p>
            <p>10:00 - 22:00</p>
        </div>

    </div>
    <p className={estilos.dev}>Gelateria. Orgulhosamente desenvolvido por "nome do desenvolvedor"</p>

</footer>
);

};
