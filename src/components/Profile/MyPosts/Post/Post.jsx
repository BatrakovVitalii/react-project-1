import styles from "./Post.module.css";

const Post = () => {
  return (
    <div className={styles.item}>
      <img
        src="https://www.imagensempng.com.br/wp-content/uploads/2021/08/Icone-usuario-Png.png"
        alt="avatar"
      />
      Post 1
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
