import React, { useContext } from 'react';
import styles from './Layout.scss';
import Footer from '../Footer';
import Card from '../Card';
import { mock_recipes } from '../../utils';
import RecipeModal from '../RecipeModal';

export const Layout = () => {
    return (
        <div className={styles.root}>
            <main>
                <h1 className={styles.title}>Recipe Box</h1>

                <p className={styles.description}>
                    A recipe app I told Betty I'd build for her ages ago.
                </p>

                <div className={styles.grid}>
                    {mock_recipes.map((recipe, index) => (
                        <Card key={index} recipe={recipe} id={index + 1} />
                    ))}
                </div>
            </main>
            <Footer />
            <RecipeModal />
        </div>
    );
};
