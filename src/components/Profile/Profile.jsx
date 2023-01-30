import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div>
      <img
        className={styles.img}
        src="https://kartinkin.net/pics/uploads/posts/2022-08/1660508634_7-kartinkin-net-p-oboi-visokogo-kachestva-krasivo-7.jpg"
      ></img>
      <div>ava + descr</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
