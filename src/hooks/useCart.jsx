import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";

function useCart() {
    const queryClient = useQueryClient();
    const cartList = useQuery(["cart", "list"], {
        cacheTime: Infinity,
        staleTime: Infinity,
        initialData: [],
        enabled: true,
    });
    const appendCart = (data) =>
        queryClient.setQueryData(["cart", "list"], [...cartList.data, data]);
    const clearCart = () => queryClient.setQueryData(["cart", "list"], []);
    const removeCartItem = (index) =>
        queryClient.setQueryData(
            ["cart", "list"],
            [
                ...cartList.data.slice(0, index - 1),
                ...cartList.data.slice(index, cartList.data.length),
            ]
        );
    return { cartList: cartList.data, appendCart, clearCart, removeCartItem };
}

export default useCart;
