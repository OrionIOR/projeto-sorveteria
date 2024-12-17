import Image from "next/image"
import estilos from "./Topo.module.css"

import Logo from '../../../public/img/logo.png'
import Link from "next/link"

export default function Topo() {
    return(

            <header className={estilos.header_box}>
                    <div className={estilos.contaner_topo} >
                        <Image src={Logo} alt="Logo"/>
                        
                                                                       
                        <nav  >
                            <Link href='/'>HOME</Link>
                            <Link href='/Sabores'>SABORES</Link>
                            <Link href='/Sobre'>SOBRE</Link>

                        </nav>
                    </div>
                 
            </header>

    )
};
