import { Button, HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { RxPlus, RxMinus } from "react-icons/rx";

function Counter({ initialValue = 0, onChange }) {
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
                bg={"primary.10"}
                p={1}
                rounded={"full"}
                onClick={substractValue}
            >
                <Icon as={RxMinus} h={5} w={5} />
            </Button>
            <Text fontSize={"lg"}>{value}</Text>
            <Button bg={"primary"} color={"white"} p={1} rounded={"full"} onClick={addValue}>
                <Icon as={RxPlus} h={5} w={5} />
            </Button>
        </HStack>
    );
}

export default Counter;
