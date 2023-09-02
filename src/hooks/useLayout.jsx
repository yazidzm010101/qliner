import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";

function useLayout() {
    const queryClient = useQueryClient();
    const isFloating = useQuery(["nav", "floating"], {
        cacheTime: Infinity,
        staleTime: Infinity,
        initialData: true,
        enabled: true,
    });
    const setIsFloating = (data) =>
        queryClient.setQueryData(["nav", "floating"], data);
    return { isFloating: isFloating.data, setIsFloating };
}

export default useLayout;
