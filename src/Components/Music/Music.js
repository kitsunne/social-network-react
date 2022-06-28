import React from "react";
import {
  FaAmazon,
  FaApple,
  FaSoundcloud,
  FaSpotify,
  FaYandex,
} from "react-icons/fa";
import { SiPandora } from "react-icons/si";
import styles from "./Music.module.css";

const Music = () => {
  return (
    <div className={styles.container}>
      <h1>Choose the right wave</h1>
      <div className={styles.items}>
        <a
          href="https://open.spotify.com/"
          target="_blank"
          className={styles.item}
        >
          <FaSpotify className={styles.icon} />
          Spotify
        </a>

        <a
          href="https://music.yandex.com/"
          target="_blank"
          className={styles.item}
        >
          <FaYandex className={styles.icon} />
          Yandex Music
        </a>

        <a
          href="https://music.apple.com/"
          target="_blank"
          className={styles.item}
        >
          <FaApple className={styles.icon} />
          Apple Music
        </a>

        <a
          href="https://soundcloud.com/"
          target="_blank"
          className={styles.item}
        >
          <FaSoundcloud className={styles.icon} />
          Sound Cloud
        </a>

        <a
          href="https://music.amazon.com/"
          target="_blank"
          className={styles.item}
        >
          <FaAmazon className={styles.icon} />
          Amazon Music
        </a>

        <a
          href="https://www.pandora.com/"
          target="_blank"
          className={styles.item}
        >
          <SiPandora className={styles.icon} />
          Pandora
        </a>
      </div>
    </div>
  );
};

export default Music;
