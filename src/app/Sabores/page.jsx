import Image from "next/image";

import estilo from './sabores.module.css'

import img_Sabor_Oreo from "../../../public/img/sabor-oreo.png";
import img_Sabor_Pistache from "../../../public/img/sabor-pistache.png";
import img_Sabor_cookies_avela from "../../../public/img/sabor-cookies-avela.png";
import img_Sabor_Kiwi from "../../../public/img/sorbet-kiwi.png";
import img_Sabor_Morango from "../../../public/img/sorbet-morango.png";
import img_Sabor_Limao from "../../../public/img/sorbet-limao.png";





export default function Sabores() {
    return(
        <main>
         <section className={estilo.secao_Sabores_Banner}>
                <h1>NOSSOS SABORES</h1>            
         </section>
         <section className={estilo.secao_Sabores}>
                <div className={estilo.secao_Sabores_Conteudo}>
                    <h2>SABORES DE SORVETE</h2>
                
                    <div className={estilo.Sabores_Conteudo_cards}>
                        <div className={estilo.Sabores_Card}>
                            <Image src={img_Sabor_Oreo} alt="oreo"/>
                            <h3>
                            Sorvete de Oreo</h3>
                            <p>
                            Delicioso sorvete sabor Oreo. Uma explosão de sabor.
                            </p>
                        </div>

                        <div className={estilo.Sabores_Card}>
                            <Image src={img_Sabor_Pistache} alt="pistache"/>
                            <h3>
                            Sorvete Pistache
                            </h3>
                            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                        </div>
                        <div className={estilo.Sabores_Card}>
                            <Image src={img_Sabor_cookies_avela} alt="cookies com avelã"/>
                            <h3>Sorvete Cookies & Avelã</h3>
                            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                        </div>
                        <div className={estilo.Sabores_Card}>
                            <Image src={img_Sabor_Kiwi} alt="Kiwi"/>
                            <h3>Sorvete de Kiwi</h3>
                            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                        </div>
                        <div className={estilo.Sabores_Card}>
                            <Image src={img_Sabor_Morango} alt="Morango"/>
                            <h3>Sorvete de Morango</h3>
                            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                        </div>
                        <div className={estilo.Sabores_Card}>
                            <Image src={img_Sabor_Limao} alt="Limão"/>
                            <h3>Sorvete de Limão Siciliano</h3>
                            <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                        </div>


                    </div>
                </div>

         </section>
         </main>
    );
    
};