import { Button, HStack, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import img from "../assests/1.jpg"
import { ColorModeSwitcher } from "../ColorModeSwitcher";

const Header = () => {
    return (
        <HStack p={"4"} shadow={"base"} bgColor={"white"} gap={'10'}>
            <Image src={img} h={10} w={10} borderRadius={50}  />
            <Button variant={"unstyled"} color={"black"}>
                <Link to="/">Home</Link>
            </Button>
            <Button variant={"unstyled"} color={"black"}>
                <Link to="/exchanges">Exchanges</Link>
            </Button>
            <Button variant={"unstyled"} color={"black"}>
                <Link to="/coins">Coins</Link>
            </Button>
            <ColorModeSwitcher />
        </HStack>
    );
};

export default Header;