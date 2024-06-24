import { Link as ReactRouterLink} from "react-router-dom";
import { Link as ChakraLink, Flex } from '@chakra-ui/react'

const links = 
[
    {
        to : "/",
        label : "HOME"
    },
    {
        to : "/about",
        label : "ABOUT"
    },
    {
        to : "/contact",
        label : "CONTACT"
    },
    {
        to : "/login",
        label : "LOGIN"
    }
];

function Navbar (){
  return (

    <Flex align="center"
          justify="space-evenly" 
          background="gray.300"
           padding="3">

       {links?.map((link) => (
          <ChakraLink as={ReactRouterLink} key={link.to} to={link.to} 
          color="gray.800">
            {link.label}
            </ChakraLink>
       ))
        
       }
    </Flex>
  );
}
  
export default Navbar 