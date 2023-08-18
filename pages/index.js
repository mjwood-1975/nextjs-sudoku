import Head from 'next/head';
import Layout from '../components/layout';

export default function HomePage() {
    return (
        <Layout>
            <Head>
                <title>Vanilla Sudoku</title>
                <link rel="icon" href="/images/favicon.ico" />
            </Head>
	        <div>
                <h1>Nextjs via nginx</h1>
                <p>Breaking ground</p>
            </div>
        </Layout>
    );
}
