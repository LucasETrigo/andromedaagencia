import { card, middleImg } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const Prensa = () => (
    <section className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Prensa y Comunicación
                {/* <br className='sm:block hidden' /> selecting the right cloud for
                your benefit */}
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                La gestión de prensa permite el posicionamiento de la marca en
                los medios online y offline fidelizando a tus clientes actuales
                y atrayendo a potenciales.
                <br /> <br /> En base a tus necesidades creamos y confeccionamos
                la mejor estrategia para comunicar tus servicios, negocios,
                proyecto, productos, y así lograr posicionarte como referente en
                el área correspondiente.
                <br /> <br /> Somos el puente entre vos y los medios. Generamos
                toda la comunicación, desde placas, diseño, gacetillas, e
                información de interés y relevante para cada medio específico.
                Para ello, contamos con periodistas y comunicadores sociales que
                investigan, crean, envían y siguen la información de forma
                personalizada.
            </p>

            {/* <Button styles={`mt-10`} /> */}
        </div>

        <div className={layout.sectionImg}>
            <img src={middleImg} alt='billing' className='w-[100%] h-[100%]' />
        </div>
    </section>
);

export default Prensa;
