import React from 'react'

//bootstrap
import {LinkContainer} from 'react-router-bootstrap'
import {  ArrowLeftCircleFill} from 'react-bootstrap-icons';


export default function Garantia() {
    return (
    <>
        <LinkContainer to="/">
            <ArrowLeftCircleFill className="d-flex mt-3 ml-3" size={30}/>
        </LinkContainer> 
        <div className="container mt-5 text-left">
            <h3 >Garantía 2 Años (ampliable a 3 )</h3>
            <p className="mt-3">
                Desde la adquisición de tu nueva recreativa MiArcade comenzará el periodo de garantía de 2 AÑOS de duración para la totalidad de los materiales que intervienen en el correcto funcionamiento del sistema de juegos arcade a excepción de la placa Jamma Padora Box que consta de 1 año. Esta garantía te proporciona la capacidad para devolver cualquiera de estos materiales y que haya podido sufrir algún deterioro durante un uso normal de la recreativa en el periodo de garantía establecido. Igualmente podrán devolverse los materiales que presenten defectos de fabricación al recibir el pedido. Para estos casos, MiArcade te hará entrega de un nuevo material en las condiciones idóneas a cambio del material defectuoso siempre y cuando la reclamación se realice dentro del periodo de prueba establecido en 7 días naturales desde la recepción del pedido.

                <h6 className="mt-2"> A. PRODUCTOS CUBIERTOS POR ESTA GARANTÍA </h6>
                La garantía se aplica de forma íntegra a aspectos que intervienen en el correcto funcionamiento del sistema de juegos arcade y que denominamos «materiales tecnológicos». Estos componentes son los elementos que intervienen en el sistema de juegos recreativos y por tanto están cubiertos de plena garantía. Estos materiales son:

                Pantalla
                Ordenador
                Cableado interno
                Sistema Operativo y Software (Raspberry Pi y/o SD)
                Joysticks y Botones arcade
                Interface
                Sistema de Sonido
                
                <h6 className="mt-2"> B. LO QUE NO CUBRE LA GARANTÍA </h6>
                La garantía no se aplicará a aquellos elementos que no hayan sido tratados de forma correcta durante el periodo de uso, a no ser que quede demostrado que estos han sido recibidos con defectos de fabricación, entendiéndose de este modo que serán reclamados en el periodo de los 7 días naturales desde la recepción del pedido.

                Los elementos que quedan excluidos de garantía son:

                Vinilos adhesivos
                Piezas de Madera
                Material de ferretería para el montante del mueble
                
                <h6 className="mt-2"> C. EXTENSIONES DE LA GARANTÍA </h6>
                La garantía limitada de MiAcarde se aplica de forma exclusiva al comprador original de del la recreativa. Todas las garantías de MiArcade, incluyendo cualquier garantía implícita , sólo son válidas para el período de tiempo en el que la recreativa es de propiedad del comprador original. El «comprador original», a los efectos de esta garantía, es el primer comprador de la recreativa MiArcade o un distribuidor autorizado. Te aconsejamos conservar una copia de tu recibo como comprobante de la compra durante el periodo de garantía. La garantía de las recreativas MiArcade no son transferibles.

                <h6 className="mt-2"> D. RESPONSABILIDADES DEL CLIENTE </h6>
                En el caso de detectar algún defecto de fabricación, y con el fin de obtener el beneficio de esta garantía limitada de la recreativa, debes de hacer la devolución y proporcionar el comprobante de la fecha original de compra. Los gastos de envío que se requieran correran de parte del cliente. La de un defecto y cualquier reclamación deberá ser enviada a la dirección que se le facilitará en caso de reclamación.

                MiArcade se compromete a reparar o reemplazar (según corresponda) y devolverle su recreativa con las reparaciones pertinentes. Usted será responsable de los gastos de envío asociados a estos efectos.

                En los casos en el que la arcade sea sustituida o reparada, el plazo de garantía continuará su periodo de validez con fecha de inicio el mismo día que fué adquirida la máquina recreativa.

                <h6 className="mt-2"> E. ANULACIÓN DE LA GARANTÍA</h6>
                Cualquier dispositivo, componente o elemento que sea manipulado fuera de las condiciones para el uso, anulará de forma automática las condiciones de esta garatía, por lo que MiArcade no se responsabilizará de las deficiencias que pudiese originar este uso indebido del material. De tal modo, acciones como la copia o manipulación de tarjeta, manipulado del sistema de configuración,  cableado, componentes arcade, extracción de los vinilos y/o cantos t-molding anularán de forma automática la garantía.
            </p>
        </div>
    </>
    )
}
