import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    HStack,
    Icon,
    Spacer,
    Text,
    VStack,
} from "@chakra-ui/react";
import { BsFilePdf } from "react-icons/bs";
import React from "react";

const fake_data = {
    id: new Date().getTime().toString(),
    status: "Dine in",
    total: 100000,
    items: [
        {
            subtotal: 100000,
            items: [
                { name: "Luffy's Rendang Bowl", number: 3, amount: 150000 },
                { name: "Just Ocha", number: 3, amount: 30000 },
            ],
        },
    ],
};

function Orders({ id, items, status, total }) {
    id = fake_data.id;
    status = fake_data.status;
    items = fake_data.items;
    total = fake_data.total;
    return (
        <>
            <VStack
                px={6}
                py={4}
                my={6}
                bg={"primary.10"}
                rounded={"xl"}
                w={"full"}
                alignItems={"start"}
            >
                <HStack color={"gray.600"} w={"full"}>
                    <Text>ID #{id}</Text>
                    <Text marginStart={"auto"}>{status}</Text>
                </HStack>
                <Box
                    h={"4px"}
                    w={"full"}
                    opacity={0.5}
                    bgGradient={
                        "linear(-70deg,transparent 35%,#888 45%, #888 55%,transparent 65%)"
                    }
                    bgSize={"3px 1px"}
                />
                <Box>
                    <Text color={"primary.90"}>Total Payment</Text>
                    <Text
                        fontSize={"3xl"}
                        color={"primary"}
                        fontWeight={"black"}
                    >
                        {"IDR " +
                            String(total).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </Text>
                    <Text
                        fontSize={"sm"}
                        rounded={"xl"}
                        w={"full"}
                        color={"gray.500"}
                    >
                        Please, show this bill to the cashier after dine in
                    </Text>
                </Box>
                <Button
                    alignSelf={"flex-end"}
                    bg={"primary.90"}
                    rounded={"xl"}
                    color={"white"}
                    leftIcon={<Icon as={BsFilePdf} />}
                >
                    Save bill
                </Button>
            </VStack>
            {items.map((order, i) => (
                <OrderItem
                    id={i + 1}
                    data={order.items}
                    subtotal={order.subtotal}
                />
            ))}
        </>
    );
}

function OrderItem({ id, data, subtotal }) {
    return (
        <Card
            shadow={"unset"}
            border={"1px solid rgba(0,0,0,0.05)"}
            rounded={"xl"}
        >
            <CardHeader
                borderBottom={"1px solid rgba(0,0,0,0.05)"}
                py={3}
                fontWeight={"bold"}
            >
                Order #{id}
            </CardHeader>
            <CardBody>
                <VStack>
                    {data.map(({ name, number, amount }) => (
                        <HStack w={"full"}>
                            <Box
                                bgColor={"primary.10"}
                                rounded={"md"}
                                color={"primary"}
                                px={2}
                                py={1}
                            >
                                {number}x
                            </Box>
                            <Text>{name}</Text>
                            <Text marginStart={"auto"} color={"gray.500"}>
                                {"IDR " +
                                    String(amount).replace(
                                        /\B(?=(\d{3})+(?!\d))/g,
                                        ","
                                    )}
                            </Text>
                        </HStack>
                    ))}
                </VStack>
            </CardBody>
            <CardFooter borderTop={"1px solid rgba(0,0,0,0.05)"} py={3}>
                <HStack w={"full"}>
                    <Text>Subtotal</Text>
                    <Text marginStart={"auto"} fontWeight={"bold"}>
                        {"IDR " +
                            String(subtotal).replace(
                                /\B(?=(\d{3})+(?!\d))/g,
                                ","
                            )}
                    </Text>
                </HStack>
            </CardFooter>
        </Card>
    );
}

export default Orders;
