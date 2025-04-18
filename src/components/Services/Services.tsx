import { useState } from "react";
import { motion, AnimatePresence } from "motion/react"
import { servicesObject } from './servicesObject';
import { ChevronDown, ChevronUp } from "lucide-react";
import { BrowserView, MobileView } from "react-device-detect";

export function Services() {
    const [openSections, setOpenSections] = useState([false, false, false, false]);

    const toggleSection = (index: number) => {
        setOpenSections((prev) =>
            prev.map((isOpen, i) => (i === index ? !isOpen : isOpen))
        );
    };
    return (
        <section>

            <h2 id="service" className="text-center text-white font-bold text-2xl lg:text-5xl my-10 gradient-text lg:text-6xl">Mes services</h2>

            <BrowserView>
                {servicesObject.map((section) => (
                    <div className="flex flex-col items-center py-7">
                        <h3 className="text-white font-bold text-center text-3xl py-4">{section.title}</h3>
                        <p className="text-white text-center max-w-[800px] text-lg">{section.content}</p>
                    </div>
                ))}
            </BrowserView>

            <MobileView>
                {servicesObject.map((section, index) => (

                    <div key={index} className={`text-white py-4  mx-auto ${openSections[index] ? 'bg-headerViolet px-2 rounded-xl' : ''}`}>

                        <button
                            onClick={() => toggleSection(index)}
                            className="flex items-center justify-between md:justify-center w-full text-left">

                            <h3 className="text-lg font-semibold md:pr-2 lg:hover:cursor-pointer">  {section.title}</h3>

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
                                    className="overflow-hidden mt-2 text-white lg:text-center"
                                >
                                    {section.content}
                                </motion.div>

                            )}
                        </AnimatePresence>

                    </div>
                ))

                }
            </MobileView>

        </section>
    )
}