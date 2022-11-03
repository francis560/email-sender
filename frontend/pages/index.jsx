import Head from "next/head";
import { Fragment } from "react";
import { Button } from "@nextui-org/react";


import Layout from "../layouts/layout";


const Home = () => {
    return (
        <Fragment>

            <Head>
                <title>Create Next App</title>
            </Head>

            <Layout>

                <div className="rounded-xl bg-purple-100 p-6">
                    <h2 className="text-purple-400 text-4xl font-medium">Welcome</h2>
                </div>

            </Layout>

        </Fragment>
    );
}


export default Home;