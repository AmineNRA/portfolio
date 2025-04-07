import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, EffectCoverflow } from "swiper/modules"
import { projects } from './projects';
import ProjectModal from "./ProjectModal"

import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/navigation"
import { useState } from "react";


export function Project() {
    const [selectedProject, setSelectedProject] = useState(null)
    const [open, setOpen] = useState(false)

    const handleOpen = (project) => {
        setSelectedProject(project)
        setOpen(true)
    }


    return (
        <>
            <h2 id="skills" className="text-center text-white font-bold text-2xl my-10">Mes projets</h2>
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
                className="w-full max-w-6xl"
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index} className="flex justify-center" onClick={() => handleOpen(project)}>
                        <img
                            src={project.img}
                            alt={`Projet ${index}`}
                            className="w-[300px] sm:w-[400px] h-[250px] sm:h-[300px] object-cover rounded-xl shadow-lg"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <ProjectModal
                open={open}
                onClose={() => setOpen(false)}
                project={selectedProject}
            />
        </>
    )
}