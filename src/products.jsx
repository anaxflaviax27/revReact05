import { Menu } from './components/menu'
import s from './products.module.css'
import florFoto from '/images.jpg'

function products(){
    return(
        <>

            <Menu/>
            <section className={s.wrapproducts}>

               <div className={s.card}>
                    <div className={s.wrapImg}>
                        <img className={s.imagem}  src={florFoto} alt="Foto exemplo" />
                    </div>
                    <div className={s.wrapCardTexts}>
                        <h2 className={s.cardTitle}>TITULO</h2>
                        <p className={s.cardText}>BLA BLA BLA BLA</p>
                    </div>
                </div> 
                
        </section>
        </>
    )
}

export default products