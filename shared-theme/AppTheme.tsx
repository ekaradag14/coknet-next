import React, { useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { ThemeOptions } from "@mui/material/styles";
import { inputsCustomizations } from "./customizations/inputs";
import { dataDisplayCustomizations } from "./customizations/dataDisplay";
import { feedbackCustomizations } from "./customizations/feedback";
import { navigationCustomizations } from "./customizations/navigation";
import { surfacesCustomizations } from "./customizations/surfaces";
import { typography, shadows, shape } from "./themePrimitives";

interface AppThemeProps {
  children: React.ReactNode;
  /**
   * This is for the docs site. You can ignore it or remove it.
   */
  disableCustomTheme?: boolean;
  themeComponents?: ThemeOptions["components"];
}

export default function AppTheme(props: AppThemeProps) {
  const { children, disableCustomTheme, themeComponents } = props;
  const theme = useMemo(() => {
    return disableCustomTheme
      ? {}
      : createTheme({
          palette: {
            mode: "light",
            primary: {
              main: "#F6EB23",
              contrastText: "#FFFFFF",
            },
            secondary: {
              main: "#1DB5BE",
            },
            background: {
              default: "#FFFFFF",
              paper: "#FFFFFF",
            },
            text: {
              primary: "#111827",
              secondary: "#6B7280",
            },
          },
          typography,
          shadows,
          shape,
          components: {
            ...inputsCustomizations,
            ...dataDisplayCustomizations,
            ...feedbackCustomizations,
            ...navigationCustomizations,
            ...surfacesCustomizations,
            MuiCssBaseline: {
              styleOverrides: {
                "*": {
                  "& a": {
                    textDecoration: "none !important",
                  },
                  "& a:hover": {
                    textDecoration: "none !important",
                  },
                  "& a:focus": {
                    textDecoration: "none !important",
                  },
                  "& a:active": {
                    textDecoration: "none !important",
                  },
                  "& a:visited": {
                    textDecoration: "none !important",
                  },
                },
              },
            },
            ...themeComponents,
          },
        });
  }, [disableCustomTheme, themeComponents]);
  if (disableCustomTheme) {
    return <>{children}</>;
  }
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
