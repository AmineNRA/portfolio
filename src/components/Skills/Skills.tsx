import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faNode, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { isMobile } from 'react-device-detect';

export function Skills() {
    return (
        <section>
            <h2 className="text-center text-white font-bold text-2xl my-10 gradient-text lg:text-6xl" id='skill'>Compétences en développement web</h2>

            <div className='flex justify-between md:justify-evenly lg:justify-center py-7'>

                <button title="HTML5" className='py-3 px-3 bg-buttonSkills rounded-xl shadow-xl lg:m-4'><FontAwesomeIcon icon={faHtml5} size={isMobile ? '2xl' : '5x'} color='orange' /></button>

                <button title="CSS3" className='py-3 px-3 bg-buttonSkills rounded-xl shadow-xl lg:m-4'><FontAwesomeIcon icon={faCss3Alt} size={isMobile ? '2xl' : '5x'} color='steelblue' /></button>

                <button title="Javascript" className='py-3 px-3 bg-buttonSkills rounded-xl shadow-xl lg:m-4'><FontAwesomeIcon icon={faJs} size={isMobile ? '2xl' : '5x'} color='yellow' /></button>

                <button title="NodeJS" className='py-3 px-3 bg-buttonSkills rounded-xl shadow-xl lg:m-4'><FontAwesomeIcon icon={faNode} size={isMobile ? '2xl' : '5x'} color='green' /></button>

                <button title="ReactJS" className='py-3 px-3 bg-buttonSkills rounded-xl shadow-xl lg:m-4'><FontAwesomeIcon icon={faReact} size={isMobile ? '2xl' : '5x'} color='cyan' /></button>

                <button title="Wordpress" className='py-3 px-3 bg-buttonSkills rounded-xl shadow-xl lg:m-4'><FontAwesomeIcon icon={faWordpress} size={isMobile ? '2xl' : '5x'} color='#87CEFA' /></button>
            </div>
            <p className="text-white max-w-[1000px] text-center m-auto leading-8 py-5 text-lg">
                En tant que développeur web passionné, je maîtrise les langages fondamentaux du web comme HTML, CSS et JavaScript, ainsi que des technologies modernes telles que React, Node.js et WordPress. Ces compétences me permettent de concevoir des interfaces intuitives, performantes et adaptées aux besoins spécifiques de chaque projet. Qu’il s’agisse d’intégration de maquettes, de création de sites vitrines ou de développement sur mesure, je m’appuie sur ces outils pour donner vie à des expériences web efficaces et sur-mesure.
            </p>

        </section>
    )
}