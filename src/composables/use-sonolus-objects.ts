import {
  mdiVolumeHigh,
  mdiCog,
  mdiPalette,
  mdiMusicNote,
  mdiImage,
  mdiFlash,
} from '@mdi/js'


export default function () {
    const sonolusObjects = [
        // Level
        { text: 'Sonolus.Server.Home.Levels.Header', icon: mdiMusicNote, to: "levels"},
        // Skin
        { text: 'Sonolus.Server.Home.Skins.Header', icon: mdiPalette, to: "skins" },
        // Background
        { text: 'Sonolus.Server.Home.Backgrounds.Header', icon: mdiImage, to: "backgrounds"},
        // Effect
        { text: 'Sonolus.Server.Home.Effects.Header', icon: mdiVolumeHigh, to: "effects" },
        // Particle
        { text: 'Sonolus.Server.Home.Particles.Header', icon: mdiFlash, to: "particles" },
        // Engine
        { text: 'Sonolus.Server.Home.Engines.Header', icon: mdiCog, to: "engines" },
    ]
    return sonolusObjects
}