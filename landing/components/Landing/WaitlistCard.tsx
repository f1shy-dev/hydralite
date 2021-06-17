import axios from 'axios'
import React, { ReactElement, useState } from 'react'
import sleep from 'util/sleep'
import styles from '~/styles/Index.module.scss'
import Icon from '../Icon'

const WaitlistCard = () => {
    const [email, setEmail] = useState('')
    const [submitValue, setSubmitValue] =
        useState<string | ReactElement>('Submit')

    async function handleSubmit(e) {
        e.preventDefault()
        const result = (
            await axios({
                method: 'POST',
                url: '/api/waitlist',
                data: {
                    email,
                },
            })
        ).data
        if (result.success) {
            setEmail('')
            setSubmitValue(<Icon name="checkmark_green" />)
            await sleep(2000)
            setSubmitValue('Submit')
        }
    }
    return (
        <div className={styles.waitlistCard}>
            <h3>{'What are you waiting for?'.toUpperCase()}</h3>
            <h1>Sign Up For The Waitlist!</h1>
            <div className={styles.waitlistCard__textbox}>
                <Icon name="at" />
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder={'email'.toUpperCase()}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <button
                        type="submit"
                        className={styles.waitlistCard__submit}
                    >
                        {submitValue}
                    </button>
                </form>
            </div>
            <span className={styles.waitlistCard__subText}>
                We promise to never spam you.
            </span>
        </div>
    )
}

export default WaitlistCard
