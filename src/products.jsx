import { Menu } from './components/menu'
import s from './products.module.css'

function products(){
    return(
        <>

            <Menu/>
            <section className={s.wrapproducts}>

               <div className={s.card}>
                    <div className={s.wrapImg}>
                        <img className={s.imagem}  src="" alt="" />
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