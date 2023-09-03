import { Button, HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { RxPlus, RxMinus } from "react-icons/rx";

function Counter({ initialValue = 0, onChange, size = "md" }) {
    const sizeMap = {
        sm: { p: '0.4rem !important', h: 3 },
        md: { p: 1, h: 5 },
        lg: { p: 1, h: 6 },
    };
    const [value, setValue] = useState(initialValue);
    const substractValue = () => {
        setValue(Math.max(0, value - 1));
        onChange && onChange(Math.max(0, value - 1));
    };
    const addValue = () => {
        setValue(value + 1);
        onChange && onChange(value + 1);
    };
    return (
        <HStack spacing={4}>
            <Button
                w={'max-content'}
                h={'max-content'}
                bg={"primary.10"}
                p={sizeMap[size].p}
                rounded={"full"}
                onClick={substractValue}
            >
                <Icon as={RxMinus} h={sizeMap[size].h} w={sizeMap[size].h} />
            </Button>
            <Text fontSize={"lg"}>{value}</Text>
            <Button
                w={'max-content'}
                h={'max-content'}
                bg={"primary"}
                color={"white"}
                p={sizeMap[size].p}
                rounded={"full"}
                onClick={addValue}
            >
                <Icon as={RxPlus} h={sizeMap[size].h} w={sizeMap[size].h} />
            </Button>
        </HStack>
    );
}

export default Counter;
