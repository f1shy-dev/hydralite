import { Link } from '@chakra-ui/react'
import React from 'react'
import { FC } from 'react'
import styles from '~/styles/Button.module.scss'
import Icon from '~/components/Icon'
interface Props {
    color: 'accent' | 'muted' | 'black'
    text: string
    iconName?: any
    onClick?: () => any
    href?: string
}

const Button: FC<Props> = ({ color, text, onClick, iconName, href }) => {
    let colorClass
    switch (color) {
        case 'accent':
            colorClass = styles.button__accent
            break
        case 'muted':
            colorClass = styles.button__muted
            break
        case 'black':
            colorClass = styles.button__black
            break
    }

    if (!href) {
        return (
            <button
                className={`${styles.button} ${colorClass}`}
                onClick={onClick}
            >
                {iconName && (
                    <Icon name={iconName} className={styles.button__icon} />
                )}
                {text}
            </button>
        )
    }

    return (
        <Link href={href} style={{ textDecoration: 'none' }}>
            <a className={`${styles.button} ${colorClass}`}>
                {iconName && (
                    <Icon name={iconName} className={styles.button__icon} />
                )}
                {text}
            </a>
        </Link>
    )
}

export default Button
