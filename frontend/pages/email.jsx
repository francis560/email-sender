import Head from "next/head";
import { Input, Button, Textarea } from "@nextui-org/react";
import { useRouter } from "next/router";
import { Fragment } from "react";


import Layout from "../layouts/layout";


const Email = () => {

    const router = useRouter();

    return (
        <Fragment>

            <Head>
                <title>Email</title>
            </Head>

            <Layout>

                <div className="space-y-10">

                    <div className="rounded-xl bg-purple-100 p-6">
                        <h2 className="text-purple-400 text-4xl font-medium">Email</h2>
                    </div>

                    <form>

                        <div className="space-y-4">

                            <div className="space-y-8">
                                <Input color="secondary" fullWidth={true} clearable bordered labelPlaceholder="For" type="text" />
                                <Input color="secondary" fullWidth={true} clearable bordered labelPlaceholder="Affair" type="text" />
                            </div>

                            <div>
                                <Textarea color="secondary" minRows={6} maxRows={6} fullWidth={true} clearable bordered label="Content" />
                            </div>

                            <Button className="text-purple-400 bg-purple-100 hover:bg-purple-400 hover:text-white">Send</Button>

                        </div>

                    </form>


                </div>

            </Layout>

        </Fragment>
    );
}


export default Email;