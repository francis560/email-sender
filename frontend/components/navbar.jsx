import { Navbar, Link, Button, Text } from "@nextui-org/react";
import { useRouter } from "next/router";


const Nav = () => {

    const router = useRouter();

    return (
        <Navbar isBordered variant="floating" disableShadow>

            <Navbar.Brand>
                {/* <AcmeLogo /> */}
                <Text b color="inherit" hideIn="xs">ACME</Text>
            </Navbar.Brand>
            <Navbar.Content activeColor="warning" enableCursorHighlight variant="underline-rounded" hideIn="xs">
                <Navbar.Link href="#">Features</Navbar.Link>
                <Navbar.Link href="#">Company</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content>
                <Navbar.Item>
                    <Button onClick={() => router.push("/login")} color="inherit" auto flat>Sign Up</Button>
                </Navbar.Item>
                <Navbar.Item>
                    <Button onClick={() => router.push("/signup")} color="none" className="text-white bg-purple-400" auto flat>Sign Up</Button>
                </Navbar.Item>
            </Navbar.Content>

        </Navbar>
    );
}


export default Nav;