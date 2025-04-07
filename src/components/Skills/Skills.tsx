import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJs, faNode, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons';

export function Skills() {
    return (
        <section>
            <h2 className="text-center text-white font-bold text-2xl my-10" id='skill'>Mes compétences</h2>

            <div className='flex justify-between'>

                <button className='py-3 px-3 bg-buttonSkills rounded-xl shadow-xl'><FontAwesomeIcon icon={faHtml5} size='2xl' color='orange' /></button>

                <button className='py-3 px-3 bg-buttonSkills rounded-xl shadow-xl'><FontAwesomeIcon icon={faCss3Alt} size='2xl' color='steelblue' /></button>

                <button className='py-3 px-3 bg-buttonSkills rounded-xl shadow-xl'><FontAwesomeIcon icon={faJs} size='2xl' color='yellow' /></button>

                <button className='py-3 px-3 bg-buttonSkills rounded-xl shadow-xl'><FontAwesomeIcon icon={faNode} size='2xl' color='green' /></button>

                <button className='py-3 px-3 bg-buttonSkills rounded-xl shadow-xl'><FontAwesomeIcon icon={faReact} size='2xl' color='cyan' /></button>

                <button className='py-3 px-3 bg-buttonSkills rounded-xl shadow-xl'><FontAwesomeIcon icon={faWordpress} size='2xl' color='#87CEFA' /></button>
            </div>

        </section>
    )
}