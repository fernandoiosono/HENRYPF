import { useState } from 'react';
import style from './Preguntas.module.css';

const Preguntas = () => {

    const [ numPregunta, setNumPregunta ] = useState(() => 0);

    const handleRender = (num) => {
        if (numPregunta==num) return setNumPregunta(0);
        setNumPregunta(num)
    };

    return (
        <div className={style.preguntas}>
            <h1 className={style.preguntasFrec}>PREGUNTAS FRECUENTES</h1>
            <div className={style.divPregunta} onClick={() => handleRender(1)}>
                <h1 className={style.pregunta}>Tiempo de entrega</h1>
                {numPregunta==1 ? <h1 className={style.menos}>-</h1> : <h1 className={style.mas}>+</h1>}
            </div>
            {
                numPregunta==1 &&
                <div className={style.divRespuesta}>
                    <h1 className={style.respuesta}>3 días hábiles</h1>
                </div>
            }
            <div className={style.divPregunta} onClick={() => handleRender(2)}>
                <h1 className={style.pregunta}>Garantía de los equipos</h1>
                {numPregunta==2 ? <h1 className={style.menos}>-</h1> : <h1 className={style.mas}>+</h1>}
            </div>
            {
                numPregunta==2 &&
                <div className={style.divRespuesta}>
                    <h1 className={style.respuesta}>12 meses</h1>
                </div>
            }
            <div className={style.divPregunta} onClick={() => handleRender(3)}>
                <h1 className={style.pregunta}>Productos a crédito</h1>
                {numPregunta==3 ? <h1 className={style.menos}>-</h1> : <h1 className={style.mas}>+</h1>}
            </div>
            {
                numPregunta==3 &&
                <div className={style.divRespuesta}>
                    <h1 className={style.respuesta}>Compras solo de contado</h1>
                </div>
            }
        </div>
    )
};

export default Preguntas;