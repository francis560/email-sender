import Head from "next/head";
import { Fragment } from "react";
import { Button, Input } from "@nextui-org/react";


import Layout from "../../layouts/layout";


const Create = () => {
    return (
        <Fragment>

            <Head>
                <title>Create clients</title>
            </Head>

            <Layout>


                <div className="space-y-10">

                    <Button className="bg-red-400">Send</Button>

                    <div className="space-x-4">
                        <Input color="secondary" clearable bordered labelPlaceholder="First name" type="text" />

                        <Input color="secondary" clearable bordered labelPlaceholder="Last name" type="text" />

                        <Input color="secondary" clearable bordered labelPlaceholder="Email" type="email" />

                        <Input color="secondary" clearable bordered labelPlaceholder="Phone number" type="number" />
                    </div>


                </div>
                
            </Layout>

        </Fragment>
    );
}


export default Create;