import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";

function useCart() {
    const queryClient = useQueryClient();
    const cartList = useQuery(["cart", "list"], {
        cacheTime: Infinity,
        staleTime: Infinity,
        initialData: JSON.parse(localStorage.getItem("cart-list") || "[]"),
        enabled: true,
    });

    const updateCart = (data, index) => {
        const newData = [
            ...cartList.data.slice(0, index),
            data,
            ...cartList.data.slice(index + 1, cartList.data.length),
        ];
        queryClient.setQueryData(["cart", "list"], newData);
        localStorage.setItem("cart-list", JSON.stringify(newData));
    };

    const appendCart = (data) => {
        const newData = [...cartList.data, data];
        queryClient.setQueryData(["cart", "list"], newData);
        localStorage.setItem("cart-list", JSON.stringify(newData));
    };

    const clearCart = () => {
        queryClient.setQueryData(["cart", "list"], []);
        localStorage.setItem("cart-list", null);
    };

    const removeCartItem = (index) => {
        const newData = [
            ...cartList.data.slice(0, index),
            ...cartList.data.slice(index + 1, cartList.data.length),
        ];
        queryClient.setQueryData(["cart", "list"], newData);
        localStorage.setItem("cart-list", JSON.stringify(newData));
    };

    return {
        cartList: cartList.data,
        appendCart,
        clearCart,
        updateCart,
        removeCartItem,
    };
}

export default useCart;
