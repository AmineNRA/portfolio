import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export function Description() {
    return (
        <section>
            <h1 id="description" className="font-bold text-2xl py-4 text-center text-white">Developpeur web</h1>
            <img src="6b77804f261a.webp" className="w-[250px] h-[250px] rounded-full mx-auto" alt="" />
            <p className="text-white text-justify py-4 text-sm/7">Compétent en HTML, CSS, JavaScript, et familier avec React et Node.js.
                Passionné par le développement, curieux et rapide à apprendre,
                prêt à contribuer et à évoluer dans des projets concrets.</p>
            <a href="cv_amine_noura.pdf" className="text-textViolet py-1 px-2 border-2 border-textViolet rounded-full">Télécharger le CV</a>
            <a href="https://github.com/AmineNRA" className='mx-2 text-textViolet'><FontAwesomeIcon icon={faGithub} size='2xl' /></a>
            <a href="https://github.com/AmineNRA" className='mx-2 text-textViolet'><FontAwesomeIcon icon={faLinkedin} size='2xl' /></a>
        </section>
    )
}