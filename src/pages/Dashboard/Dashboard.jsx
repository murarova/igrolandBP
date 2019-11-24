import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Dashboard.module.css';
import Header from '../../components/Header/Header';
import PartyCard from '../../components/PartyCard/PartyCard';
import Foto from '../../components/Foto/Foto';
import Prices from '../../components/Prices/Prices';

const Dashboard = () => (
    <div className={styles.wrapper}>
        <Header />
        <PartyCard />
        <Prices />
        <Foto />
        <Link to="/ruls" className={styles.rulesBtn}>
            Правила проведення ДР
        </Link>
    </div>
);

export default Dashboard;
