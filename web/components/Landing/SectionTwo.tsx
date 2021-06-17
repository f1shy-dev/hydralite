import React from 'react'
import styles from '~/styles/Index.module.scss'

const Segment = ({ subHeading, heading, description, vectorPath }) => {
    return (
        <div className={styles.sectionTwo__segment}>
            <div>
                <span className={styles.sectionTwo__segment_preHeading}>
                    {subHeading.toUpperCase()}
                </span>
                <h1 className={styles.sectionTwo__segment_heading}>
                    {heading}
                </h1>
                <p className={styles.sectionTwo__segment_description}>
                    {description}
                </p>
            </div>
            <img
                src={vectorPath}
                className={styles.sectionTwo__segment_vector}
            />
        </div>
    )
}

const SectionTwo = () => {
    return (
        <div className={styles.sectionTwo}>
            <Segment
                heading="Project Marketing"
                subHeading="Hassle Free Project Promotion"
                description="We use a state of the art algorithm to present open source developers with new, upcoming projects, like yours. Hydralite empowers the underdogs, so your project won't be left in the dark."
                vectorPath="/vectors/project-marketing-illustration.svg"
            />
            <div className={styles.sectionTwo__segment_seperator}></div>
            <Segment
                heading="Developer Discovery"
                subHeading="Networking Enhanced"
                description="Find, other like-minded developers who work with the same technologies as you do, and innovate through collaboration. Message developers whom you look up to, and learn from each other."
                vectorPath="/vectors/developer-discovery-illustration.svg"
            />
            <div className={styles.sectionTwo__segment_seperator}></div>
            <Segment
                heading="Integration"
                subHeading="Manage Everything From One Place"
                description="Use in-built source control, code collaboration, seamless server deployments, api testing, pilot releases, software deployments and marketing from the world's best providers. With tight integration with your favourite software, HydraLite can handle everything for you."
                vectorPath="/vectors/integrations-illustration.svg"
            />
        </div>
    )
}

export default SectionTwo
