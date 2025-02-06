import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comentario.module.css";
import { Avatar } from "./Avatar";

export function Comentario() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/41119907?v=4" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Paulo Ricardo</strong>
              <time title="11 de maio as 8:13" dateTime="2022-05-11 08:13:10">
                Cerca de 1 hora atrás
              </time>
            </div>
            <button title="Excluir">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button title="Excluir">
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
