import { useQuery } from "~/hooks/useQuery";
import React from "react";
import {
    AspectRatio,
    Box,
    Button,
    Fade,
    HStack,
    Icon,
    Image,
    Portal,
    ScaleFade,
    Text,
    VStack,
    useOutsideClick,
} from "@chakra-ui/react";
import { MdOutlineClose } from "react-icons/md";
import Counter from "~/components/Counter";
import { useRef } from "react";
import { useState } from "react";
import useCart from "~/hooks/useCart";

function CatalogueDetails({ id, onDismiss }) {
    const price = 1000;
    const image = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
    const [subtotal, setSubtotal] = useState(0);
    const [count, setCount] = useState(0);
    const { appendCart } = useCart();
    const ref = useRef();
    useOutsideClick({
        ref: ref,
        handler: onDismiss,
    });
    return (
        <Portal>
            <Box
                as={Fade}
                unmountOnExit
                in={!!id}
                bg={"blackAlpha.800"}
                pos={"fixed"}
                top={0}
                left={0}
                w={"full"}
                h={"100vh"}
                zIndex={1000}
            />
            <Box
                as={ScaleFade}
                ref={ref}
                unmountOnExit
                in={!!id}
                pos={"fixed"}
                top={0}
                left={0}
                w={"full"}
                h={"100vh"}
                overflowY={"auto"}
                bg={"white"}
                zIndex={1000}
            >
                <AspectRatio ratio={1} w={"full"}>
                    <Image src={image} />
                </AspectRatio>
                <VStack px={8} py={6} alignItems={"flex-start"} spacing={6}>
                    <Text fontSize={"xl"} fontWeight={"bold"} noOfLines={1}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Incidunt quasi saepe omnis rerum veniam
                        perferendis tempora libero eum, odio similique
                        reiciendis tempore dolor qui aspernatur aut sint.
                        Necessitatibus, deserunt et!
                    </Text>
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Et voluptates est corporis adipisci, nam eveniet hic
                        dolorum aliquid ipsam ratione molestiae doloribus? Sunt
                        repudiandae sit magni voluptate, architecto asperiores
                        harum!
                    </Text>
                    <Counter
                        onChange={(newValue) => {
                            setSubtotal(price * newValue);
                            setCount(newValue);
                        }}
                    />
                    <Text fontSize={"lg"} color={"primary"}>
                        {"IDR " +
                            String(subtotal || price).replace(
                                /\B(?=(\d{3})+(?!\d))/g,
                                ","
                            )}
                    </Text>
                    <Button
                        w={"full"}
                        bg={"primary"}
                        color={"white"}
                        rounded={"xl"}
                        size={"lg"}
                        onClick={() => appendCart({
                            name: "lorem ipsum",
                            price,
                            amount: subtotal,
                            image,
                            count,
                        })}
                    >
                        Add
                    </Button>
                </VStack>
                <Button
                    onClick={onDismiss}
                    variant={"primary"}
                    bg={"blackAlpha.500"}
                    rounded={"full"}
                    p={1}
                    m={1}
                    pos={"absolute"}
                    top={0}
                    right={0}
                >
                    <Icon h={6} w={6} as={MdOutlineClose} />
                </Button>
            </Box>
        </Portal>
    );
}

export default CatalogueDetails;
