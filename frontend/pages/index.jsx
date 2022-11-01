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

                <Button className="bg-red-400">Enviar</Button>
                
            </Layout>

        </Fragment>
    );
}


export default Home;