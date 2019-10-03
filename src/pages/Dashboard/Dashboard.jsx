import React from 'react';
import styles from './Dashboard.module.css';
import Header from '../../components/Header/Header';
import PartyCard from '../../components/PartyCard/PartyCard';
import Complex from '../../components/Complex/Complex';

const Dashboard = () => (
  <>
    <Header />
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <PartyCard />
        <Complex />
      </div>
    </div>
  </>
);

export default Dashboard;
