import { Card } from './components/card'
import { Menu } from './components/menu'
import s from './Products.module.css'
import dados from './mock/produtos.json'


function Products(){
    return(
        <>
            <Menu />
            <section className={s.wrapproducts}>
                {dados.map((item) => {
                    return (
                        <div key={item.id}>
                            <Card
                            titulo={item.titulo}
                            texto={item.texto}
                            imagem={item.imagem} />
                        </div>
                    
                    )
                })}
             </section>
        </>
    )
}

export default Products