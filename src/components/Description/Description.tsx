import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

export function Description() {
    return (
        <section className='lg:flex lg:flex-col lg:items-center lg:h-[100vh] lg:justify-center'>

            <h1 id="description" className="font-bold text-4xl py-6 text-center gradient-text lg:hidden">Développeur Web & UI Designer</h1>

            <div className='lg:flex  lg:flex-row-reverse gap-40'>

                <img src="Adobe Express - file.webp" className="mx-auto w-[200px] h-[200px] rounded-full lg:w-[400px] lg:h-[400px] flex-1 " alt="" />

                <div className='flex flex-col flex-3 lg:max-w-[50vw]'>

                    <h1 className='hidden lg:block text-4xl font-bold pb-5 gradient-text'><span className='hidden lg:block pb-2 text-6xl leading-18 '>Développeur Web & UI Designer</span> Je transforme vos idées en expériences digitales</h1>

                    <p className="text-white text-justify py-4 text-sm/7 lg:text-2xl lg:pb-8">Développeur web spécialisé en interfaces modernes et performantes, je conçois des sites sur-mesure en HTML, CSS, JavaScript, Wordpress, Wix et Shopify. Curieux et passionné, j’aime transformer les idées en interfaces concrètes, optimisées et prêtes pour la production.</p>

                    <div className='lg:flex lg:gap-3'>

                        <a href="cv_amine_noura.pdf" className="text-textViolet font-bold py-1 px-2 border-2 border-textViolet rounded-full hover:bg-textViolet hover:text-white duration-300 hover:ease-in lg:text-xl" aria-label='Télécharger le cv'>Télécharger le CV</a>
                        <a href="https://github.com/AmineNRA" className='mx-2 text-textViolet hover:text-white duration-300 hover:ease-in lg:text-xl' aria-label='Visiter mon github'><FontAwesomeIcon icon={faGithub} size='2xl' aria-hidden='true' /></a>
                        <a href="https://github.com/AmineNRA" className='mx-2 text-textViolet hover:text-white duration-300 hover:ease-in lg:text-xl' aria-label='Visiter mon linkedin'><FontAwesomeIcon icon={faLinkedin} size='2xl' aria-hidden='true' /></a>

                    </div>
                </div>
            </div>
        </section>
    )
}