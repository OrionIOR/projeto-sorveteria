import styles from "./page.module.css";


import Img_bolas from "../../public/img/banner-sabores.jpg"
import Img_Eventos from "../../public/img/eventos-image.jpg"
import Img_Sobre from "../../public/img/sobre-image.jpg"
import Image from "next/image";

export default function Home() {
  return (
    <main>
    <section className={styles.secao_banner}>
      
          <h1>SORVETE ARTESANAL</h1>
       
      </section>

      <section className={styles.secao_produtos}>
      
        <Image className={styles.img} src={Img_bolas} alt="bolas"/>
        <div className={styles.box_texto}>
          <h2>
            Nossos produtos
          </h2>
          <strong> Novos e deliciosos!</strong>
          <p>
            Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!  
          </p>
        </div>
        
      </section>
      <section className={styles.secao_eventos}>
       
          <div className={styles.box_texto}>
               <h2>NOSSOS EVENTOS</h2>
                <strong>Delicias com sorvete!</strong>
                <p>
                  Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.
                </p>
          </div>
          <Image className={styles.img}  src={Img_Eventos} alt="Eventos"/>
       
      </section>  
      <section className={styles.secao_sobre}>
              <Image className={styles.img}  src={Img_Sobre} alt="sobre"/>
              <div className={styles.box_texto}>
                <h2>SOBRE NÓS</h2>
                <strong>Alegria em cada casquinha!</strong>
                <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.
                </p>
              </div>
      </section>
    </main>
  );
}
