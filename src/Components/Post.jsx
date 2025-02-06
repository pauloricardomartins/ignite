import styles from "./Post.module.css";
import { Comentario } from './Comentario'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://avatars.githubusercontent.com/u/41119907?v=4" className={styles.avatar} />
          <div className={styles.authorInfo}>
            <strong>Paulo Ricardo</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de maio as 8:13" dateTime="2022-05-11 08:13:10">
          Publicado a 1 hora
        </time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>
          <a href="#">jane.design/doctorcare</a>
        </p>
        <p>
                  <a href="#">#novoprojeto</a> {' '}
          <a href="#">#nlw</a> {' '}
          <a href="#">#rocketseat</a>
        </p>
          </div>
          
          <form className={styles.commentForm }>
              <strong>Deixe seu feedback</strong>
              <textarea placeholder="Deixe seu comentário"></textarea>
              <footer>
                <button type="submit">Publicar</button>
              </footer>
          </form>

          <div className={styles.commentList}>
            <Comentario/>
            <Comentario/>
            <Comentario/>              
          </div>
    </article>
  );
}
