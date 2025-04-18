import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, EffectCoverflow } from "swiper/modules"
import { projects } from './projects';
import ProjectModal from "./ProjectModal"
import { useState } from "react";

type Project = {
    title: string
    images: string[]
    link: string
    github: string
    techno: string[]
    description: string
}

export function Project() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [open, setOpen] = useState(false)

    const handleOpen = (project: Project) => {
        setSelectedProject(project)
        setOpen(true)
    }


    return (
        <section className="lg:py-10">
            <h2 id="project" className="text-center text-white font-bold text-2xl my-10 lg:text-6xl gradient-text">Portfolio de sites web réalisés</h2>
            <Swiper
                modules={[Navigation, EffectCoverflow]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                navigation
                loop={true}
                breakpoints={{
                    0: {
                        slidesPerView: 1.2,
                        coverflowEffect: {
                            rotate: 30,
                            depth: 100,
                            modifier: 1,
                            slideShadows: false,
                        },
                    },
                    768: {
                        slidesPerView: 3,
                        coverflowEffect: {
                            rotate: 50,
                            depth: 200,
                            modifier: 1,
                            slideShadows: true,
                        },
                    },
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 200,
                    modifier: 1,
                    slideShadows: true,
                }}
                className="w-full max-w-7xl"
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index} className="flex justify-center" onClick={() => handleOpen(project)}>
                        <img
                            src={project.img}
                            alt={`Projet ${index}`}
                            className="sm:w-[400px] h-[250px] sm:h-[300px] object-cover rounded-xl shadow-lg hover:cursor-pointer"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <ProjectModal
                open={open}
                onClose={() => setOpen(false)}
                project={selectedProject}
            />
        </section>
    )
}