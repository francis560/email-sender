import Head from "next/head";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/router";
import { Fragment } from "react";


import Layout from "../layouts/layout";


const Clients = () => {

    const router = useRouter();

    return (
        <Fragment>

            <Head>
                <title>Clients</title>
            </Head>

            <Layout>

                <h1>hola usurarios</h1>

                <Button onClick={() => router.push("/clients/create")} className="bg-purple-400">Create clients</Button>

            </Layout>

        </Fragment>
    );
}


export default Clients;