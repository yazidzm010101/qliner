import { useState } from "react";
import reactLogo from "~/assets/react.svg";
import viteLogo from "/vite.svg";
import "~/App.css";
import {
    AspectRatio,
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    GridItem,
    HStack,
    Image,
    SimpleGrid,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
import data from "./fake_menu.json";
import CatalogueDetails from "./CatalogueDetails";
import { useSearchParams } from "react-router-dom";
import useCart from "~/hooks/useCart";
import Cart from "./Cart";

function Catalogue() {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <>
            <SimpleGrid columns={{ base: 1, sm: 2 }} spacing={4} p={4}>
                {data.map((item) => (
                    <Stack
                        _hover={{ cursor: "pointer" }}
                        key={item.id}
                        shadow={"none"}
                        rounded={"2xl"}
                        border={"1px solid rgba(0,0,0,0.1)"}
                        pb={{ sm: 14 }}
                        pos={"relative"}
                        direction={{ base: "row", sm: "column" }}
                        onClick={() => setSearchParams({id: item.id})}
                    >
                        <AspectRatio
                            ratio={1}
                            h={{ base: "auto", sm: "auto" }}
                            w={{ base: "10rem", sm: "full" }}
                        >
                            <Image
                                w={"full"}
                                h={"full"}
                                objectFit={"cover"}
                                roundedLeft={"2xl"}
                                rounded={{ sm: "2xl" }}
                                src={
                                    "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
                                }
                            />
                        </AspectRatio>
                        <Box
                            px={{ base: 1, sm: 6 }}
                            py={3}
                            pt={{ base: 3, sm: 100 }}
                            pos={{ sm: "absolute" }}
                            bottom={{ sm: 0 }}
                            left={{ sm: 0 }}
                            w={"full"}
                            roundedLeft={{ base: "2xl", sm: 0 }}
                            roundedBottom={{ sm: "2xl" }}
                            bgGradient={{
                                sm: "linear(10deg, rgba(255,255,255,1) 40%,rgba(255,255,255,0.8) 50%, rgba(255,255,255,0.1) 70%, rgba(255,255,255,0) 100%)",
                            }}
                        >
                            <VStack
                                spacing={0.5}
                                alignItems={"start"}
                                h={"full"}
                            >
                                <Text>{item.name}</Text>
                                <Text color={"primary"}>
                                    {"IDR " +
                                        String(item.price).replace(
                                            /\B(?=(\d{3})+(?!\d))/g,
                                            ","
                                        )}
                                </Text>
                                <HStack
                                    marginTop={"auto"}
                                    justifyContent={"flex-end"}
                                    w={"full"}
                                    px={{ base: 2, sm: 0 }}
                                >
                                    <Button
                                        bgColor={"primary.10"}
                                        color={"primary"}
                                        rounded={"xl"}
                                        size={"sm"}
                                        px={6}
                                        marginLeft={"auto"}
                                    >
                                        Add
                                    </Button>
                                </HStack>
                            </VStack>
                        </Box>
                        {item.badge_image && (
                            <Box
                                pos={"absolute"}
                                top={0}
                                left={0}
                                rounded={"full"}
                                border={"2px solid orange"}
                                transform={{
                                    base: "translate(-40%, -20%)",
                                    sm: "translate(-20%, -10%)",
                                }}
                            >
                                <AspectRatio ratio={1} w={{ base: 10, sm: 16 }}>
                                    <Image
                                        rounded={"full"}
                                        src={item.badge_image}
                                        objectFit={"cover"}
                                    />
                                </AspectRatio>
                            </Box>
                        )}
                    </Stack>
                ))}
            </SimpleGrid>
            <CatalogueDetails id={searchParams.get('id')} onDismiss={() => setSearchParams({})}/>
            <Cart/>
        </>
    );
}

export default Catalogue;
