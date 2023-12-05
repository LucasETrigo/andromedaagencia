import { card, middleImg } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Contenido Visual
                {/* <br className='sm:block hidden' /> selecting the right cloud for
                your benefit */}
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Contamos con un departamento de Visual (contenido digital y
                Diseño Gráfico / Branding).
                <br /> <br /> Diseñamos y generamos contenidos reales para tu
                marca. No nos gustan las imágenes compradas, por eso el
                contenido es producido por nosotros exclusivamente para tu
                empresa, permitiendo la conexión con tus clientes.
                <br /> <br />{' '}
                <span className='font-extrabold '>Qué hacemos:</span> videos,
                fotografía, motion graphics, animación, storytelling.
            </p>

            {/* <Button styles={`mt-10`} /> */}
        </div>

        <div className={layout.sectionImg}>
            <img src={middleImg} alt='billing' className='w-[100%] h-[100%]' />
        </div>
    </section>
);

export default CardDeal;
