import Head from "next/head";
import { Button, Table } from "@nextui-org/react";
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

                <div className="space-y-10">

                    <div className="rounded-xl bg-purple-100 p-6">
                        <h2 className="text-purple-400 text-4xl font-medium">Clients</h2>
                    </div>

                    <Button onClick={() => router.push("/clients/create")} icon={<i className="uil uil-plus-circle text-base"></i>} className="bg-purple-400">Create clients</Button>

                    <Table lined shadow={false} color="secondary" aria-label="Clients table" css={{ height: "auto", minWidth: "100%" }} selectionMode="none">
                        <Table.Header>
                            <Table.Column>First name</Table.Column>
                            <Table.Column>Last name</Table.Column>
                            <Table.Column>Email</Table.Column>
                            <Table.Column>Phone number</Table.Column>
                            <Table.Column>Date of birth</Table.Column>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Francis</Table.Cell>
                                <Table.Cell>Pinales</Table.Cell>
                                <Table.Cell>alsfdlasjdfk@gmail.com</Table.Cell>
                                <Table.Cell>8496364217</Table.Cell>
                                <Table.Cell>7/8/2022</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                        <Table.Pagination
                            noMargin
                            align="center"
                            rowsPerPage={3}
                            onPageChange={(page) => console.log({ page })}
                        />
                    </Table>

                </div>

            </Layout>

        </Fragment>
    );
}


export default Clients;