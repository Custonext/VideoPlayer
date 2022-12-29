import * as React from 'react'
import Form from "./components/Form";
import "./styles.css";
import { ChakraProvider, extendTheme, useTheme } from '@chakra-ui/react'

const theme = {
  fonts:{
    heading: 'Comfortaa, Trebuchet MS, sans-serif',
    body: 'Inter,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',

  },
  shadows:{
    outline: 0,
  },
  styles: {
    
    global: {
      body:{
        color: 'gray.600',
        fontSize: '1rem',

      },
      a:{
        cursor: 'pointer',	
      },
      h1: {
        fontFamily:'Comfortaa, Trebuchet MS, sans-serif',

        fontSize: "2rem",
        fontWeight: "bold",
        color: 'gray.700',
        mt: "1",
        mb: "1",
      },
      h2: {
        fontFamily:'Comfortaa, Trebuchet MS, sans-serif',

        fontSize: "1.4rem",
        fontWeight: "bold",
        color: 'gray.700',
        mt: "1",
        mb: "1",
      },
      h3: {
        fontSize: "1.2rem",
        fontFamily:'Comfortaa, Trebuchet MS, sans-serif',

        fontWeight: "semibold",
        color: 'gray.700',
        mt: "1",
        mb: "1",
      },
      p: {
        fontSize: "1rem",
        lineHeight: "1.6rem",
      },
      blockquote: {
        borderLeftWidth:"0.2rem",
        padding: "0.5rem 2rem",
        margin: "2rem 0"
      },
      table: {
        fontVariantNumeric: "lining-nums tabular-nums",
        borderCollapse: "collapse",
        width: "full",
        my: 4,
        color: "gray.700"
      },
      th: {
        fontFamily: "heading",
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: "wider",
        textAlign: "start",
        lineHeight: 8
      },
      td: {
        textAlign: "start",
        lineHeight: 8
      },
      
      caption: {
        mt: 4,
        fontFamily: "heading",
        textAlign: "center",
        fontWeight: "light",
      },
      tbody: {
        tr: {
          "&:nth-of-type(odd)": {
            "th, td": {
              borderBottomWidth: "1px",
              borderColor: "gray.100",
            },
            td: {
              background: "gray.100",
            },
          },
        },
      },
      tfoot: {
        tr: {
          "&:last-of-type": {
            th: { borderBottomWidth: 0 },
          },
        },
      },
      ".blog": {
        h1: {
          fontSize: "2rem",
          fontFamily:'Comfortaa, Trebuchet MS, sans-serif',

          fontWeight: "bold",
          mt: "4",
          mb: "2",
        },
        h2: {
          fontFamily:'Comfortaa, Trebuchet MS, sans-serif',
          fontSize: "1.5rem",
          fontWeight: "bold",
          mt: "4",
          mb: "2",
        },
        h3: {
          fontFamily:'Comfortaa, Trebuchet MS, sans-serif',
          fontSize: "1.3rem",
          fontWeight: "semibold",
          mt: "4",
          mb: "2",
        },
        p: {
          fontSize: "1rem",
          marginBottom: 2,
        },
        ol: {
          ml: "6",
          my: "4",
        },
        ul: {
          ml: "6",
          my: "4",
        },
        li: {
          listStyle: 'none',
          lineHeight: "1.6",
          display: "flex",
          flexDirection: "row",
          _before: {
            content: ` url("data:image/svg+xml,%3Csvg stroke='red' fill='green' stroke-width='0' viewBox='0 0 16 16' height='1.4em' width='1.4em' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z'%3E%3C/path%3E%3Cpath d='M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z'%3E%3C/path%3E%3C/svg%3E")`,
            ml: -5,
            mr: 2,
            lineHeight: "2",
          },
        },
        a: {
          textDecoration: 'underline',
          _hover: {
            textDecoration: 'none'
        }
        }, 
      }  
    },
  },
  colors: {
    primary: {
      50: "#F2FFF6",
      100: "#B6FFCE",
      200: "#79FFA8",
      300: "#3DFF86",
      400: "#00ff66",
      500: "#00D150",
      600: "#00A33B",
      700: "#007528",
      800: "#004717",
      900: "#001A08"
    },
    secondary: {
      50: "#FFF6F2",
      100: "#FFD5C2",
      200: "#FFB791",
      300: "#FF9A61",
      400: "#FF7F31",
      500: "#FF6600",
      600: "#C64A00",
      700: "#8C3100",
      800: "#531B00",
      900: "#1A0800"
    },
    accent: {
      50: "#FFFFF2",
      100: "#FFFFC2",
      200: "#FFFF91",
      300: "#FFF961",
      400: "#FFEA31",
      500: "#ffd50d",
      600: "#C6B400",
      700: "#8C8B00",
      800: "#535300",
      900: "#1A1A00"
    },
    blue: {
      50: "#F2FBFF",
      100: "#C2EBFF",
      200: "#91DAFF",
      300: "#61C6FF",
      400: "#31B1FF",
      500: "#0099ff",
      600: "#007CC6",
      700: "#005B8C",
      800: "#003853",
      900: "#00121A"
    }
  },
  components: {
    Button:{
      baseStyle: {
        fontWeight: "medium",
      },
      sizes: {  
        sm: {
          fontSize: "0.8rem",  
          lineHeight: "0.8rem"
        },
        md: {
          fontSize: "0.95rem",  
          lineHeight: "0.95rem"
        },
      },
      variants:{
        light:{
          backgroundColor:'white',
          width:'100%',
          color:'primary.700',
          _hover: {
            backgroundColor:'gray.100',
          },
        },
        //* Button variant with sub div .chakra-button__icon that moves when hovered
        arrow:{
          backgroundColor:'white',
          width:'100%',
          color:'gray.700',
          '.chakra-button__icon': {
            transition: 'transform 0.2s ease-in-out',
            transform: 'translateX(0)',
          },
          _hover: {
            '.chakra-button__icon': {
              transform: 'translateX(5px)',
              transition: 'transform 0.2s ease-in-out',
            },
          },
        },
      }
    }
  },
};
const CustonextTheme = extendTheme(theme);

export default function App({divElement}) {
  const {formId,portalId} = divElement.dataset;
  
  return (
    <ChakraProvider theme={CustonextTheme}>
      <Form formId={formId} portalId={portalId} />
    </ChakraProvider>
  );
}