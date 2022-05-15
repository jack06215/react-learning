import { createTheme } from "@mui/material/styles";

const defaultTheme = createTheme({
    typography: {
        fontFamily: ["Noto Sans JP", "sans-serif", "-apple-system"].join(","),
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: false,
            },
        },
    },
    palette: {
        primary: {
            main: "#3E2BFF",
        },
        secondary: {
            main: "#D7432F",
        },
        textColor: {
            normal: "#666666",
            blue: "#6A7C97",
            disabled: "#66666666",
            emphasis: "#444444",
            error: "#D7432F",
        },
        dividers: { onWhite: "rgba(102, 102, 102, 0.08)" },
        gradations: {
            primary: "linear-gradient(90deg, #56CAF2 0%, #3E2BFF 100%)",
            secondary: "linear-gradient(90deg, #F2B251 0%, #D7432F 100%)",
            header: "linear-gradient(90deg, #3E2BFF 45.31%, #7F54F9 100%)",
            selectedBtn:
                "linear-gradient(180deg, #EAE4DF 0%, #CEDBE9 66.15%, #C5D7E4 100%)",
        },
        backgrounds: {
            body: {
                mainLayer:
                    "linear-gradient(180deg, #F4F4F4 0%, #EAEEF1 49.48%, #DAE6EE 100%)",
                secondLayer:
                    "linear-gradient(90deg, rgba(250, 250, 250, 0) 0%, rgba(232, 231, 234, 0.5) 100%)",
            },
            group: {
                header:
                    "linear-gradient(180deg, #EEEAE7 0%, #F1F0EE 65.62%, #ECEBEB 100%)",
                list: "linear-gradient(180deg, #ECEBEB 0%, #EBECED 14.58%, #DFE9F0 100%)",
                page: "linear-gradient(180deg, #EEEAE7 0%, #ECEBEB 26.28%, #DFE9F0 100%);",
            },
            pale: {
                beige: "#EDECEC",
                blue: "#F5F7FA",
            },
            surface: "#FAFAFA",
        },
    },
});

export default defaultTheme;
