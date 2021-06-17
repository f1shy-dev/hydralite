import React from 'react'
import styles from '~/styles/Index.module.scss'
import LottieAnimation from '../Lottie'
import lottie from '~/public/vectors/project-management-illustration.json'

const SectionOne = () => {
    return (
        <div className={styles.sectionOne}>
            <div className={styles.sectionOne__main}>
                <LottieAnimation
                    lotti={lottie}
                    height={500}
                    width={500}
                    className={styles.lottie}
                />
                <div className={styles.sectionOne__content}>
                    <span className={styles.sectionOne__preHeading}>
                        {'Intuitive, Fast, Powerful'.toUpperCase()}
                    </span>
                    <h1 className={styles.sectionOne__heading}>
                        Project Management
                    </h1>
                    <p
                        className={styles.sectionOne__description}
                        style={{ marginTop: '10px' }}
                    >
                        Hydralite enables easy, intuitive project management,
                        and allows for efficient and highly collaborative
                        feature planning and task management.
                        <br />
                        <br />
                        With source control, marketing, server hosting, api
                        testing, live code-collaboration and loads of other
                        goodies from your favourite software providers,
                        Hydralite can do it all!
                    </p>
                </div>
            </div>
            <div className={styles.sectionOne__featureContainer}>
                <div className={styles.sectionOne__feature}>
                    <h3>{'Task Boards'.toUpperCase()}</h3>
                    <p>
                        Seamlessly collaborate with task boards while enjoying
                        effeciency and performance analytics for all your team
                        members.
                        <br />
                        <br />
                        Set priorities and deadlines for all your tasks so you
                        can deliver software. Fast.
                    </p>
                </div>
                <span className={styles.sectionOne__featureSeperator}></span>
                <div className={styles.sectionOne__feature}>
                    <h3>{'Project Roadmap'.toUpperCase()}</h3>
                    <p>
                        Track and manage features you want for your next release
                        seamlessly through a roadmap.
                        <br />
                        <br />
                        Quickly deploy the latest version of your software to
                        your favourite providers with just 1 Click.
                    </p>
                </div>
                <span className={styles.sectionOne__featureSeperator}></span>
                <div className={styles.sectionOne__feature}>
                    <h3>{'Audio Rooms'.toUpperCase()}</h3>
                    <p>
                        Collaborate with the other developers and your teammates
                        and brainstorm the coolest features for your software.
                        <br />
                        <br />
                        Use task boards to plan the features you need for your
                        next release.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SectionOne
