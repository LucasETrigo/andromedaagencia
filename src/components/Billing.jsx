import { apple, bill, google, lastImg } from '../assets';
import styles, { layout } from '../style';

const Billing = () => (
    <section id='product' className={layout.sectionReverse}>
        <div className={layout.sectionImgReverse}>
            <img
                src={lastImg}
                alt='billing'
                className='w-[100%] h-[100%] relative z-[5]'
            />

            {/* gradient start */}
            <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
            <div className='absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient' />
            {/* gradient end */}
        </div>

        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
                Manejo de <br className='sm:block hidden' />
                Redes Sociales
                <br className='sm:block hidden' /> (Community Manager)
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Publicamos y administramos canales de social media, creamos y
                comunicamos mensajes diseñados específicamente para
                distinguirte, apelando a los sentimientos, valores y emociones
                de tu marca. <br /> <br /> Para ello, es que realizamos un
                análisis profundo de cada cliente, sus objetivos, fortalezas y
                debilidades, y los asesoramos sobre las mejores alternativas
                para comunicar sus servicios y productos en las diferentes redes
                sociales.
                <br /> <br /> De esa forma es que creamos contenido
                especialmente pensado para su difusión en redes, así como
                también creamos estrategias puntuales acorde a sus necesidades y
                de esa forma ampliar la comunidad de followers y fans.
                <br /> <br /> Es nuestro trabajo, moderar y monitorear las
                redes, crear piezas originales y creativas, aumentar los
                seguidores de manera orgánica y también con estrategias de
                publicidad.
            </p>

            {/* <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
                <img
                    src={apple}
                    alt='google_play'
                    className='w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer'
                />
                <img
                    src={google}
                    alt='google_play'
                    className='w-[144.17px] h-[43.08px] object-contain cursor-pointer'
                />
            </div> */}
        </div>
    </section>
);

export default Billing;
