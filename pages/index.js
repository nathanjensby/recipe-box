import Head from 'next/head';
import Layout from '../components/Layout';
import { ModalContext, useModal } from '../utils';

import styles from './Home.scss';

export default function Home() {
    const modalValue = useModal();

    return (
        <ModalContext.Provider value={modalValue}>
            <div className={styles.container}>
                <Head>
                    <title>Recipe Box</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Layout />
            </div>
        </ModalContext.Provider>
    );
}
