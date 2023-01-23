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
        <Post message="Hi, how are you?" likesCount="0" />
        <Post message="It's my first post" likesCount="23" />
      </div>
    </div>
  );
};

export default MyPosts;
