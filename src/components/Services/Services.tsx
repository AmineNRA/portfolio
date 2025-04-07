import { useState } from "react";
import { motion, AnimatePresence } from "motion/react"
import { servicesObject } from './servicesObject';
import { ChevronDown, ChevronUp } from "lucide-react";

export function Services() {
    const [openSections, setOpenSections] = useState([false, false, false, false]);

    const toggleSection = (index: number) => {
        setOpenSections((prev) =>
            prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
        );
    };
    return (
        <>
            <h2 id="service" className="text-center text-white font-bold text-2xl my-10">Mes services</h2>
            {servicesObject.map((section, index) => (
                <div key={index} className={`text-white py-4 ${openSections[index] ? 'bg-headerViolet px-2 rounded-xl' : ''}`}>
                    <button
                        onClick={() => toggleSection(index)}
                        className="flex items-center justify-between w-full text-left"
                    >
                        <h3 className="text-lg font-semibold">  {section.title}</h3>
                        {openSections[index] ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    <AnimatePresence initial={false}>
                        {openSections[index] && (
                            <motion.div
                                key={`content-${index}`}
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden mt-2 text-white"
                            >
                                {section.content}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))

            }
        </>
    )
}