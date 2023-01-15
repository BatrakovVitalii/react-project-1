import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My post
      <div>
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button>Add post</button>
      </div>
      <div className={styles.posts}>
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default MyPosts;