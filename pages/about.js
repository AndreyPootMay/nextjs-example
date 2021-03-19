import Head from 'next/head';
import Layout from '../src/components/layout';

function About() {
    return (
        <Layout>
            <Head>
                <title>About page!</title>
                <link rel="stylesheet" href="/favicon.ico" />
            </Head>
            About page
        </Layout>
    );
}

export default About;