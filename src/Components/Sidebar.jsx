import { Avatar } from './Avatar';
import styles from './Sidebar.module.css';
import { PencilLine } from "@phosphor-icons/react";

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>            
            <img src='https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=50&w=500' className={styles.cover} />
            <div className={styles.perfil}>
                <Avatar src="https://github.com/pauloricardomartins.png"/>
                <strong>Paulo</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href='#' className='botao'>
                   <PencilLine size={20}/> Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
