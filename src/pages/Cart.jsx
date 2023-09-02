import {
    AspectRatio,
    Badge,
    Box,
    Button,
    Fade,
    HStack,
    Icon,
    Image,
    Portal,
    ScaleFade,
    Stack,
    Tag,
    Text,
    VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { PiBasketDuotone } from "react-icons/pi";
import { IoMdClose } from "react-icons/io";
import useCart from "~/hooks/useCart";
import useLayout from "~/hooks/useLayout";
import { commify } from "~/utils/text_utils";

function Cart() {
    const { cartList, appendCart, removeCartItem, clearCart } = useCart();
    const { setIsFloating } = useLayout();
    const [isFullScreen, setIsFullScreen] = useState(false);
    const cartLength = cartList.length;
    const total = cartList.reduce(function (carry, item) {
        carry += item.amount || 0;
        return carry;
    }, 0);
    useEffect(() => {
        setIsFloating(cartLength == 0);
    }, [cartLength]);
    console.log(cartList);
    return (
        <Portal>
            <Box
                as={Fade}
                in={isFullScreen}
                top={0}
                left={0}
                bg={"blackAlpha.500"}
                w={"full"}
                h={"full"}
                pos={"fixed"}
                zIndex={1000}
                unmountOnExit
            />
            <Box
                zIndex={1000}
                pos={"fixed"}
                as={Fade}
                in={cartLength > 0}
                bottom={(!isFullScreen && 16) || 0}
                left={"50%"}
                transform={"translateX(-50%)"}
                w="full"
                transition={"all .2s ease-in-out"}
                h={(isFullScreen && "100vh") || 24}
                maxW={(isFullScreen && "container.sm") || "400px"}
                p={!isFullScreen && 4}
            >
                <Box
                    bg={"white"}
                    h={"full"}
                    overflow={"hidden"}
                    rounded={!isFullScreen && "xl"}
                    shadow={!isFullScreen && "md"}
                    border={!isFullScreen && "1px solid rgba(0,0,0,0.06)"}
                >
                    <HStack
                        onClick={() => setIsFullScreen(!isFullScreen)}
                        as={ScaleFade}
                        in={!isFullScreen}
                        unmountOnExit
                        h={"full"}
                        w={"full"}
                        alignItems={"stretch"}
                    >
                        <Box pos={"relative"}>
                            <AspectRatio ratio={1} w={16}>
                                <Icon
                                    color={"primary"}
                                    p={4}
                                    h={"full"}
                                    as={PiBasketDuotone}
                                />
                            </AspectRatio>
                            <Badge
                                bg={"primary"}
                                color={"white"}
                                rounded={"full"}
                                textAlign={"center"}
                                pos={"absolute"}
                                top={1}
                                right={1}
                                fontSize={"xs"}
                            >
                                {cartList.length}
                            </Badge>
                        </Box>
                        <VStack
                            w={"full"}
                            h={"full"}
                            bg={"primary.10"}
                            color={"primary"}
                            px={4}
                            justifyContent={"center"}
                            alignItems={"flex-start"}
                        >
                            <Text>{commify(total, "IDR")}</Text>
                        </VStack>
                    </HStack>
                    <Box
                        as={ScaleFade}
                        w={"full"}
                        h={"100vh"}
                        overflowY={"auto"}
                        in={isFullScreen}
                        unmountOnExit
                    >
                        <HStack
                            p={2}
                            w={"full"}
                            justifyContent={"space-between"}
                        >
                            <Text px={4} fontSize={"lg"} fontWeight={"bold"}>
                                Your bag
                            </Text>
                            <Button
                                rounded={"full"}
                                p={0}
                                variant={"unstyled"}
                                onClick={() => setIsFullScreen(false)}
                            >
                                <Icon as={IoMdClose} h={6} w={6} />
                            </Button>
                        </HStack>
                        <VStack px={6} w={"full"}>
                            {cartList.map((item) => (
                                <Stack
                                    w={"full"}
                                    _hover={{ cursor: "pointer" }}
                                    key={item.id}
                                    shadow={"none"}
                                    rounded={"2xl"}
                                    border={"1px solid rgba(0,0,0,0.1)"}
                                    pb={{ sm: 14 }}
                                    pos={"relative"}
                                    direction={{ base: "row", sm: "column" }}
                                    onClick={() =>
                                        setSearchParams({ id: item.id })
                                    }
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
                                            <AspectRatio
                                                ratio={1}
                                                w={{ base: 10, sm: 16 }}
                                            >
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
                        </VStack>
                    </Box>
                </Box>
            </Box>
        </Portal>
    );
}
export default Cart;
