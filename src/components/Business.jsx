import { features } from '../constants';
import styles, { layout } from '../style';
import Button from './Button';

const FeatureCard = ({ icon, title, content, index }) => (
    <div
        className={`flex flex-row p-6 rounded-[20px] ${
            index !== features.length - 1 ? 'mb-6' : 'mb-0'
        } feature-card`}
    >
        <div
            className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
        >
            <img
                src={icon}
                alt='star'
                className='w-[50%] h-[50%] object-contain'
            />
        </div>
        <div className='flex-1 flex flex-col ml-3'>
            <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1'>
                {title}
            </h4>
            <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
                {content}
            </p>
        </div>
    </div>
);

const Business = () => (
    <section id='features' className={layout.section}>
        <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>Qué hacemos?</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Contamos historias (storytelling), les damos experiencias
                consistentes, reales, auténticas y originales para atraerlos a
                tu marca. <br /> <br /> Nuestro compromiso es elaborar
                estrategias enfocadas a conquistar a tus clientes para que sean
                ellos los que te elijan a vos, transformándose en verdaderos
                embajadores de tu marca.
                <br /> <br /> Desarrollamos propuestas 360° en una experiencia
                back to back para proyectos a largo y mediano plazo.
                <br /> <br /> Como agencia somos conscientes de los cambios
                permanentes y es por eso que nos vamos adaptando para que tu
                empresa brille en la galaxia de las redes sociales.
                <br /> <br /> Nuestro servicio de marketing digital trabajan a
                360°. Qué quiere decir esto. Analizamos tu empresa 360° junto a
                todo nuestro equipo interdisciplinario. Las áreas se van
                complementando y retroalimentando en el trabajo diario.
                <br /> <br /> La mayor ventaja! Resolvemos todo lo necesario
                para la comunicación digital en{' '}
                <span className=' bg-gradient-to-br from-pink-500 via-[#f5eaef] to-pink-500 bg-clip-text text-center  font-medium tracking-tight text-transparent '>
                    ANDROMEDA,
                </span>{' '}
                trabajando en sinergia con las distintas áreas: Redes sociales,
                Área audiovisual, Diseño grafico, Marketing Digital.
            </p>

            <Button styles={`mt-10`} />
        </div>

        <div className={`${layout.sectionImg} flex-col`}>
            <h2 className={styles.heading2}>Qué ofrecemos?</h2>
            {features.map((feature, index) => (
                <FeatureCard key={feature.id} {...feature} index={index} />
            ))}
        </div>
    </section>
);

export default Business;
