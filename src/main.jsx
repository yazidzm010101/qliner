import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "~/main.css";
import theme from "./theme.js";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
        },
    },
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <ChakraProvider theme={theme}>
                <QueryClientProvider client={queryClient}>
                    <App />
                </QueryClientProvider>
            </ChakraProvider>
        </BrowserRouter>
    </React.StrictMode>
);
