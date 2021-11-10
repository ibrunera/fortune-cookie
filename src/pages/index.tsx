import type { NextPage } from 'next';
import { useState } from 'react';
import styles from '../styles/Home.module.scss';

const fortune = [
  {
    id: 1,
    text: 'You will be successful in your work.',
  },
  {
    id: 2,
    text: 'You will be rich and famous',
  },
];

const Home: NextPage = () => {
  const [i, setI] = useState(0);

  return (
    <>
      <div className={styles.header}>
        <h1>HEADER</h1>
        <h1>OI</h1>
      </div>

      <div className={styles.container}>
        <button
          onClick={() => {
            setI(Math.floor(Math.random() * fortune.length));
          }}
        >
          COOKIE
        </button>
        <span>{fortune[i].text}</span>
      </div>

      <div className={styles.footer}>
        <h1>FOOTER</h1>
      </div>
    </>
  );
};

export default Home;
