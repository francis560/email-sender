import { Navbar, Link, Button, Text } from "@nextui-org/react";


const Nav = () => {
    return (

        <Navbar isBordered variant="floating">

            <Navbar.Brand>
                {/* <AcmeLogo /> */}
                <Text b color="inherit" hideIn="xs">ACME</Text>
            </Navbar.Brand>
            <Navbar.Content activeColor="warning" enableCursorHighlight variant="underline-rounded" hideIn="xs">
                <Navbar.Link href="#">Features</Navbar.Link>
                <Navbar.Link href="#">Company</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Link color="inherit" href="#">Login</Navbar.Link>
                <Navbar.Item>
                    <Button color="none" className="text-white bg-purple-400" auto flat as={Link} href="#">Sign Up</Button>
                </Navbar.Item>
            </Navbar.Content>

        </Navbar>

    );
}


export default Nav;