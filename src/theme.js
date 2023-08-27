import { extendTheme } from "@chakra-ui/react";

const colorAlpha = {};
for (let i = 0; i <= 100; i += 5) {
    colorAlpha["primary." + i] = `rgba(245, 101, 101, ${i / 100})`;
    colorAlpha["secondary" + i] = `rgba(0, 108, 184, ${i / 100})`;
    colorAlpha["tertiary" + i] = `rgba(172, 196, 42, ${i / 100})`;
}

export default extendTheme({
    config: {
        initialColorMode: "light",
        useSystemColorMode: false,
    },
    fonts: {
        heading: '"DM Sans", sans-serif',
        body: '"DM Sans", sans-serif',
        mono: '"DM Sans", sans-serif',
    },
    breakpoints: {
        xs: "414px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",
    },
    colors: {
        "primary.Lighten": "#f57373",
        "primary.Darken": "#d15656",
        primary: "rgba(245, 101, 101)",
        secondary: "#006CB8",
        tertiary: "#ACC42A",
        ...colorAlpha,
    },
    semanticTokens: {
        colors: {
            "chakra-body-bg": {
                _light: "#FFF",
            },
        },
    },
    components: {
        Button: {
            variants: {
                primary: () => ({
                    background: "secondary",
                    color: "chakra-body-bg",
                    _hover: {
                        background: "#3182CE",
                    },
                }),
                secondary: () => ({
                    background: "tertiary",
                    color: "chakra-body-bg",
                    _hover: {
                        background: "#8fa12c",
                    },
                }),
                tertiary: () => ({
                    background: "transparent",
                    color: "#4A5568",
                    _hover: {
                        background: "#EDF2F7",
                    },
                }),
            },
        },
        Table: {
            variants: {
                headerBordered: {
                    thead: {
                        bg: "gray.100",
                        tr: {
                            th: {
                                borderColor: "gray.300",
                                borderTopWidth: "1px",
                                borderRightWidth: "1px",
                                borderBottomWidth: "1px",
                                borderLeftWidth: "1px",
                                fontSize: "12px",
                            },
                        },
                    },
                    tbody: {
                        tr: {
                            _hover: {
                                bg: "gray.50",
                            },
                            td: {
                                fontSize: "12px",
                            },
                        },
                    },
                },
            },
        },
    },
});
