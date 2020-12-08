import React from 'react'
import ATRAS from '../icons/back.svg'

export default function Atras() {

    function goBack() {
        window.history.back()
    }


    return (
        <div className="mt-3" >
            <button className="p-3 mx-5 btn Boton Boton3sin Jumbo6 Borde" onClick={goBack()}>
                <img src={ATRAS} className="IconoXS my-auto" alt="Volver atras" />
            </button>
        </div>
    )
}
