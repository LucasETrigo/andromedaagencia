import { feedback } from '../constants';
import styles from '../style';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => (
    <section
        id='clients'
        className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
        <div className='absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40' />

        <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
            <h2 className={styles.heading2}>Sobre Nosotras</h2>
            <div className='w-full md:mt-0 mt-6'>
                <p className={`${styles.paragraph} text-left max-w-[450px]`}>
                    Somos Andrómeda, una galaxia de brillantes y nuevas ideas
                    que siempre está en constante movimiento. Trabajamos con las
                    áreas para obtener un resultado 360° en la comunicación on
                    line de tu producto o servicio.
                    <br /> <br /> Porque creemos que las personas tenemos esa
                    capacidad innata de emocionarnos es que buscamos humanizar
                    el marketing mediante estrategias
                    <br /> <br />
                    Y… ¿esto cómo lo hacemos? Elaboramos contenidos enfocados a
                    conquistar a tus clientes para que sean ellos los que te
                    elijan a vos, transformándose en verdaderos embajadores de
                    tu marca. Para ello contamos historias (storytelling), ¡algo
                    que nos sale muy bien!, les damos experiencias consistentes,
                    reales, auténticas y originales para atraerlos a tu marca.
                    Estamos convencidas de que las plataformas sociales y el
                    contenido de calidad real son una fuente inagotable de
                    inspiración para llegar a las emociones de cada uno de tus
                    clientes actuales y potenciales.
                    <br /> <br /> Así es que nosotros buscamos que TÚ marca
                    llegue a cada uno de ellos, y que te elijan por el
                    compromiso, por la excelencia, por la experiencia y por todo
                    eso que te hace diferente al resto, con una estrategia y
                    contenido que seduzca a esa persona a elegir TÚ marca por
                    sobre la competencia.
                </p>
            </div>
        </div>

        <div className='flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]'>
            {feedback.map((card) => (
                <FeedbackCard key={card.id} {...card} />
            ))}
        </div>
    </section>
);

export default Testimonials;
