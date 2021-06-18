import React from 'react'

//bootstrap
import {LinkContainer} from 'react-router-bootstrap'
import {  ArrowLeftCircleFill} from 'react-bootstrap-icons';

export default function Comprar() {
    return (
    <>
        <LinkContainer to="/">
            <ArrowLeftCircleFill className="d-flex mt-3 ml-3" size={30}/>
        </LinkContainer>    
        <div className="container mt-5 text-left"  style={{ minHeight:'60vh'}}>
            <h3>Comprar máquinas Arcade multijuegos nunca fue tan fácil</h3>
            <div className="mt-3" >

                <p className="mt-3">
                Llega el momento de la verdad: decidirse a comprar una maquinita arcade multijuegos. Cuando lo tenemos claro, surge otra duda ¿cuál elegir? Esto también es muy fácil en MiArcade, gracias a nuestro personalizador. Lo primero es elegir el tamaño de nuestra recreativa: Arcade, bartop, combo o consola.  Éstos son los modelos más populares de entre todos los tipos de muebles arcade que existen y también los más prácticos, que se adaptan a cualquier lugar. 
                </p>
                <p className="mt-3">
                Elegido el tamaño, toca decidir el diseño. Nosotros damos algunas opciones, pero se puede pedir también uno personalizado. Sabemos que comprar una recreativa arcade no es cualquier cosa y la elegida debe ser la perfecta para cada uno. Por ese motivo también damos la opción de elegir los botones y de los joysticks. ¡Para gustos los colores y cada uno puede comprar la máquina arcade que quiera!
                </p>
                <p className="mt-3">
                Una vez diseñada y personalizada la recreativa, llega el momento de confirmar el pedido con una opción más: ampliar la garantía de la arcade a dos años. Si se desea, eso incrementará el precio de la máquina, que podrá verse finalmente en el siguiente paso. En este punto, también se confirmarán los gastos de envío que serán más o menos en función de la ciudad de destino. Hacemos un exhaustivo trabajo para empaquetar cada máquina de la mejor manera posible y asegurarnos, gracias también a que trabajamos con los mejores servicios de transporte, de que llegue en perfectas condiciones.
                </p>
            </div>
        </div>
    </>    
    )
}
