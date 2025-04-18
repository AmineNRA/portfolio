import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import "swiper/swiper-bundle.css";

type Project = {
    title: string
    images: string[]
    link: string
    github: string
    techno: string[]
    description: string
}

type PropsModal = {
    open: boolean
    onClose: () => void
    project: Project | null
}

export default function ProjectModal({ open, onClose, project }: PropsModal) {
    if (!project) return null

    return (
        <Dialog open={open} onOpenChange={onClose} >

            <DialogContent className="max-w-2xl bg-mainViolet">

                <DialogClose asChild>
                    <button className="absolute right-7 top-4 text-white hover:text-red-500 transition cursor-pointer">
                        <X className="w-5 h-5" />
                    </button>
                </DialogClose>

                <DialogHeader>

                    <DialogTitle className="text-white text-center text-2xl">{project.title}</DialogTitle>

                </DialogHeader>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                >

                    <h3 className="text-white font-bold">Description :</h3>
                    <p className="text-sm text-muted-foreground text-white text-justify text-base/7">{project.description}</p>

                    <h3 className="text-white font-bold">Techno utilisées :</h3>
                    <ul>
                        {project.techno.map((techno, index) => (
                            <li key={index} className="text-white">{techno}</li>
                        ))}
                    </ul>

                    <div className="flex justify-between">

                        <a href={project.link}>
                            <Button className="mt-2 bg-headerViolet hover:cursor-pointer">Voir le projet</Button>
                        </a>

                        <a href={project.github}><Button className="mt-2 bg-headerViolet hover:cursor-pointer">Voir le repo</Button></a>

                    </div>

                </motion.div>

            </DialogContent>

        </Dialog>
    )
}
