import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

type Project = {
    title: string
    images: string[]
    link: string
    description: string
}

type Props = {
    open: boolean
    onClose: () => void
    project: Project | null
}

export default function ProjectModal({ open, onClose, project }: Props) {
    if (!project) return null

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                </DialogHeader>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-4"
                >
                    <div className="grid grid-cols-2 gap-2">
                        {project.images.map((img, i) => (
                            <img key={i} src={img} alt={`Screenshot ${i + 1}`} className="rounded-lg" />
                        ))}
                    </div>

                    <p className="text-sm text-muted-foreground">{project.description}</p>

                    <a href={project.link} rel="noopener noreferrer">
                        <Button className="mt-2">Voir le projet</Button>
                    </a>
                </motion.div>
            </DialogContent>
        </Dialog>
    )
}
