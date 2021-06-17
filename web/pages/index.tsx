import React, { useRef } from 'react'
import Button from '~/components/Button'
import styles from '~/styles/Index.module.scss'
import TextLoop from 'react-text-loop'
import { projectName } from '~/constants'
import SectionOne from '~/components/Landing/SectionOne'
import SectionTwo from '~/components/Landing/SectionTwo'
import Layout from '~/components/Layout'
import WaitlistCard from '~/components/Landing/WaitlistCard'
import scrollToRef from 'util/scrollToRef'

const Home = () => {
    const waitlistCardRef = useRef(null)
    const adjectives = ['Discover', 'Develop', 'Deliver', 'Deploy']
    return (
        <Layout navType="home" waitlistCardRef={waitlistCardRef}>
            <div className={styles.main}>
                <div className={styles.main__sub}>
                    <h1 className={styles.main__text}>
                        The Place for Developers <br />
                        to{' '}
                        <TextLoop interval={2000}>
                            {adjectives.map((word, index) => (
                                <span
                                    key={index}
                                    className={styles.main__text_Gradient}
                                >
                                    {word}
                                </span>
                            ))}
                        </TextLoop>{' '}
                        Software
                    </h1>
                    <p className={styles.main__description}>
                        {projectName} is the new open source platform for
                        project management and open source project discovery.
                    </p>
                    <div className={styles.main__buttons}>
                        <Button
                            text="View On Github"
                            color="black"
                            href="https://github.com/hydralite/hydralite"
                        />

                        <Button
                            color="accent"
                            text="Join Waitlist"
                            onClick={() => scrollToRef(waitlistCardRef)}
                        />
                    </div>
                </div>
            </div>
            <SectionOne />
            <SectionTwo />
            <div ref={waitlistCardRef}>
                <WaitlistCard />
            </div>
        </Layout>
    )
}

export default Home
