import s from './card.module.css'

export const Card = ({titulo, texto, imagem}) => {
    return (
        <div className={s.card}>
                    <div className={s.wrapImg}>
                        <img className={s.imagem} src={imagem} alt="Foto exemplo" />
                    </div>
                    <div className={s.wrapCardTexts}>
                        <h2 className={s.cardTitle}>{titulo}</h2>
                        <p className={s.cardText}>{texto}</p>
                    </div>
                </div> 
    )
}