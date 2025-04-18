import { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadSnowPreset } from "tsparticles-preset-snow"
import type { Engine } from "tsparticles-engine"

export default function SnowBackground() {
    const customInit = useCallback(async (engine: Engine) => {
        await loadSnowPreset(engine)
    }, [])

    return (
        <Particles
            id="tsparticles"
            init={customInit}
            options={{
                preset: "snow",
                background: {
                    color: "#13011B"
                },
                particles: {
                    color: { value: "#3D116C" },
                },
                fullScreen: {
                    enable: true,
                    zIndex: -1
                }
            }}
        />
    )
}
