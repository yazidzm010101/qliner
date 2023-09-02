import { Container, HStack, Icon, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Outlet, Link as ReactLink, useLocation } from "react-router-dom";
import { PiBookOpenTextDuotone, PiClipboardTextDuotone } from "react-icons/pi";
import { ROUTE_PATH } from "~/router/path.js";
import useLayout from "~/hooks/useLayout";
import Cart from "~/pages/Cart";

const data = [
    {
        name: "Menu",
        to: ROUTE_PATH.index,
        icon: PiBookOpenTextDuotone,
    },
    {
        name: "Orders",
        to: ROUTE_PATH.orders,
        icon: PiClipboardTextDuotone,
    },
];

function Layout() {
    const { pathname } = useLocation();
    const { isFloating } = useLayout();
    const getNavColor = (to) => {
        return to == pathname ? "primary" : "#424242";
    };

    return (
        <>
            <HStack
                // rounded={isFloating && "xl"}
                // border={"1px solid rgba(0,0,0,0.03)"}
                // h={16}
                // spacing={8}
                // pos={"fixed"}
                // w={!isFloating && "full"}
                // maxW={"container.sm"}
                // bottom={(isFloating && 4) || 0}
                // left={"50%"}
                // transform={"translateX(-50%)"}
                // justifyContent={"center"}
                // px={4}
                // py={2}
                // bg={"white"}
                // zIndex={999}
                rounded={"xl"}
                border={"1px solid rgba(0,0,0,0.03)"}
                h={16}
                spacing={8}
                pos={"fixed"}
                maxW={"container.sm"}
                bottom={2}
                left={"50%"}
                transform={"translateX(-50%)"}
                justifyContent={"center"}
                px={4}
                py={2}
                bg={"white"}
                zIndex={999}
                style={{ boxShadow: "0 0.5rem 1.5rem rgba(0,0,0,0.3)" }}
            >
                {data.map((item, key) => (
                    <Link as={ReactLink} key={key} to={item.to}>
                        <VStack
                            spacing={0.5}
                            color={getNavColor(item.to)}
                            px={4}
                            py={1}
                            rounded={"xl"}
                            _hover={{ bg: "rgba(0,0,0,0.01)" }}
                        >
                            <Icon as={item.icon} h={"1.5rem"} w={"1.5rem"} />
                            <Text fontSize={"xs"}>{item.name}</Text>
                        </VStack>
                    </Link>
                ))}
            </HStack>
            <Container
                maxW={"container.sm"}
                mx={"auto"}
                h={"100vh"}
                overflowY={"scroll"}
                bg={"white"}
                shadow={"xl"}
                pb={24}
            >
                <Outlet />
            </Container>
        </>
    );
}

export default Layout;
