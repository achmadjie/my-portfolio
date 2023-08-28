import React from 'react'
import Image from 'next/image'
import wave_vector from '../../../public/wave.svg'
import styles from './LatestProject.module.css'
function LatestProject() {
  return (
    <div className={`${styles.project_container} position-relative`}>
      <Image className={`${styles.background_vector} `} src={wave_vector} alt="wave-vector"/>
      <h2 className={`${styles.project_heading} position-absolute top-0`}>
        Latest Projects
      </h2>
    </div>
  )
}

export default LatestProject