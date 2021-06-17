import React from 'react'
import styles from '~/styles/Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <img src="/logo.png" alt="" className={styles.footer__logo} />
        </div>
    )
}

export default Footer
