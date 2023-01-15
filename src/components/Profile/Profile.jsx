import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={styles.content}>
      <img
        className={styles.img}
        src="https://kartinkin.net/pics/uploads/posts/2022-08/1660508634_7-kartinkin-net-p-oboi-visokogo-kachestva-krasivo-7.jpg"
      ></img>
      <div>ava + descr</div>
      <div>
        My post
        <div>New post</div>
        <div className={styles.posts}>
          <div className={styles.item}>Post 1</div>
          <div className={styles.item}>Post 2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
