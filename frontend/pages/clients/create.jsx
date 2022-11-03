import Head from "next/head";
import { Fragment } from "react";
import { useRouter } from "next/router";
import { Button, Input } from "@nextui-org/react";


import Layout from "../../layouts/layout";


const Create = () => {

    const router = useRouter();

    return (
        <Fragment>

            <Head>
                <title>Create clients</title>
            </Head>

            <Layout>


                <div className="space-y-10">

                    <Button onClick={() => router.push("/clients")} className="bg-purple-400" icon={<i className="uil uil-angle-left text-base"></i>}>Back</Button>

                    <div className="rounded-xl bg-purple-100 p-6">
                        <h2 className="text-purple-400 text-4xl font-medium">Create client</h2>
                    </div>

                    <div className="space-x-4">
                        <Input color="secondary" clearable bordered labelPlaceholder="First name" type="text" />

                        <Input color="secondary" clearable bordered labelPlaceholder="Last name" type="text" />

                        <Input color="secondary" clearable bordered labelPlaceholder="Email" type="email" />

                        <Input color="secondary" clearable bordered labelPlaceholder="Phone number" type="number" />

                        <Input color="secondary" clearable bordered labelPlaceholder="Date of birth" type="date" />
                    </div>

                    <Button className="text-purple-400 bg-purple-100 hover:bg-purple-400 hover:text-white">Send</Button>

                </div>
                
            </Layout>

        </Fragment>
    );
}


export default Create;