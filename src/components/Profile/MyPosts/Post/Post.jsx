import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.item}>
      <img
        src="https://www.imagensempng.com.br/wp-content/uploads/2021/08/Icone-usuario-Png.png"
        alt="avatar"
      />
      {props.message}
      <div>
        <span>Like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
