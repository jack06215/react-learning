// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Palette } from "@mui/material/styles";

// Read here for more detail:
// https://mui.com/material-ui/customization/palette/
declare module "@mui/material/styles" {
    interface Palette {
        textColor: {
            normal: string;
            blue: string;
            emphasis: string;
            disabled: string;
            error: string;
        };
        gradations: {
            primary: string;
            secondary: string;
            header: string;
            selectedBtn: string;
        };
        dividers: {
            onWhite: string;
        };
        backgrounds: {
            body: {
                mainLayer: string;
                secondLayer: string;
            };
            group: {
                header: string;
                list: string;
                page: string;
            };
            pale: {
                beige: string;
                blue: string;
            };
            surface: string;
        };
    }
    interface PaletteOptions {
        textColor: {
            normal: string;
            blue: string;
            emphasis: string;
            disabled: string;
            error: string;
        };
        gradations: {
            primary: string;
            secondary: string;
            header: string;
            selectedBtn: string;
        };
        dividers: {
            onWhite: string;
        };
        backgrounds: {
            body: {
                mainLayer: string;
                secondLayer: string;
            };
            group: {
                header: string;
                list: string;
                page: string;
            };
            pale: {
                beige: string;
                blue: string;
            };
            surface: string;
        };
    }
}
