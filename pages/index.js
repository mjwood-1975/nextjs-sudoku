import Head from 'next/head';
import Layout from '../components/layout';

export default function HomePage() {
    return (
        <Layout>
            <Head>
                <title>Vanilla Sudoku</title>
                <link rel="icon" href="/images/favicon.ico" />
            </Head>

            <header>
                <h1>~Vanilla Sudoku~</h1>
                <h3>Sometimes plain is the best flavor</h3>
            </header>

            <nav>
                nav
            </nav>

            <main>
                puzzle here
                <aside>
                    button things
                </aside>
            </main>

            <footer>
                <p>footer</p>
            </footer>
        </Layout>
    );
}
