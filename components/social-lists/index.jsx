import React from "react";
import styles from "./social-lists.module.sass";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

export default function SocialLists({ data }) {
  return (
    <div id="social-lists-container" className={styles.social_lists_container}>
      <div className="container">
        <div className={styles.lists_container}>
          <ul
            className={`${styles.social_list} ${styles.left_list}`}
            data-aos="fade-right"
          >
            <li className={styles.social_list_item}>
              <a
                href={data.github}
                target={"_blank"}
                title="Github"
                className={styles.social_link}
                rel="noreferrer"
              >
                <FiGithub />
              </a>
            </li>
            <li className={styles.social_list_item}>
              <a
                href={data.linkedin}
                target={"_blank"}
                title="Linkedin"
                className={styles.social_link}
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>

            <li className={styles.social_list_item}>
              <a
                href={data.hashnode}
                target={"_blank"}
                title="Hashnode"
                className={styles.social_link}
                rel="noreferrer"
              >
                <SiHashnode />
              </a>
            </li>
          </ul>
          <ul
            className={`${styles.social_list} ${styles.right_list}`}
            data-aos="fade-left"
          >
            <li className={styles.social_list_item}>
              <a
                href={`mailto:${data.email}`}
                target={"_blank"}
                title="Gmail"
                className={styles.social_link}
                rel="noreferrer"
              >
                {data.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
