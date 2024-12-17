import Image from "next/image";
import estilos from './sobre.module.css'
import img_sobre from '../../../public/img/sobre-image.jpg'
import img_sorveteria from '../../../public/img/sorveteria.jpg'




export default function Sobre() {
    return(

            <main>
                <section className={estilos.secao_Sobre}>
                    <h1>A GELATERIA</h1>
                </section>
                <section className={estilos.Container_Sobre_Conteudo_texto}>
                    <h2>Sobre Nós</h2>
                    <strong>Nós simplesmente amamos sorvete!</strong>
                    <p>
                    Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
                    <p>
                    Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.
                    </p>
                </section>
                <section   className={estilos.Container_Sobre_Conteudo_img} >
                    <Image src={img_sobre} alt="Sobre"/>
                    <Image src={img_sorveteria} alt="Sorveteria"/>

                </section>
            </main>

    )
    
};
