import React from 'react'
import facebook from './facebook.svg'
import twitter from './twitter.svg'
import instagram from './instagram.svg'
import styles from './Rodape.module.scss'


export default function Rodape() {
  return (
    <footer className={styles.rodape}>
        <ul className={styles.rodape__lista}>
            <li className={styles.rodape__item}>
                <a href='https://www.facebook.com'  target="_blank"  rel="noreferrer">
                    <img src={facebook} alt='Ícone do facebook' />
                </a>
            </li>
            <li className={styles.rodape__item}>
                <a href='https://twitter.com' target="_blank" rel="noreferrer">
                    <img src={twitter} alt='Ícone do Twitter' />
                </a>
            </li>
            <li className={styles.rodape__item}>
                <a href='https://www.instagram.com' target="_blank" rel="noreferrer">
                    <img src={instagram} alt='Ícone do Instagram' />
                </a>
            </li>
        </ul>
        <p>Desenvolvido por Arydiane Jardim <br/> no curso de React da Alura.</p>
    </footer>
  )
}
