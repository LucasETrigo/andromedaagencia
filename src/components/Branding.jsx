import { card, middleImg } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const Branding = () => (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Diseño Gráfico y Branding
                {/* <br className='sm:block hidden' /> selecting the right cloud for
                your benefit */}
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                En Andrómeda trabajamos para conocer tu empresa, creando el
                concepto de marca, dándole un nombre, diseñando, y por último
                trazando la logística para lanzarla al mercado de manera
                exitosa.
                <br /> <br /> El pulso, la voz, la fortaleza y el rostro de tu
                Marca sustentan la vida de tu empresa. Nosotros nos encargamos
                de eso!
                <br /> <br /> Nuestro departamento de comercialización te brinda
                asesoramiento mostrándote cuáles son las fortalezas y
                debilidades de tu producto / servicio, indic cual camino es el
                óptimo para mejorarlo y llegar al objetivo que se desea.
            </p>

            {/* <Button styles={`mt-10`} /> */}
        </div>

        <div className={layout.sectionImg}>
            <img src={middleImg} alt='billing' className='w-[100%] h-[100%]' />
        </div>
    </section>
);

export default Branding;
