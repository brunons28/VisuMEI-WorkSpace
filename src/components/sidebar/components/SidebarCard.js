import {
  Button,
  Flex,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";

export default function SidebarDocs() {
  const bgColor = "linear-gradient(135deg, #15297c 0%, #2898ee 100%)";
  const borderColor = useColorModeValue("white", "navy.800");

  return (
    <Flex
      justify='center'
      direction='column'
      align='center'
      bg={bgColor}
      borderRadius='30px'
      me='20px'
      position='relative'>
      <Flex
        border='5px solid'
        borderColor={borderColor}
        bg='linear-gradient(135deg, #15297c 0%, #2898ee 100%)'
        borderRadius='50%'
        w='94px'
        h='94px'
        align='center'
        justify='center'
        mx='auto'
        position='absolute'
        left='50%'
        top='-47px'
        transform='translate(-50%, 0%)'>
       <svg width="820" height="344" viewBox="0 0 820 344" fill="none" xmlns="http://www.w3.org/2000/svg" style={{position: 'relative', left: 20, top: 5}}>
       <g filter="url(#filter0_d_2070_2175)">
       <path fill-rule="evenodd" clip-rule="evenodd" d="M438.204 0H190.172L147.164 30.2306V51.504L147.753 51.5141V220.831L145.995 222.094L65.2717 163.034V29.1109H4V191.46H4.1836L4.00026 191.687L139.376 290.731L140.033 289.921L140.092 289.99L211.97 250.481L211.97 175.785L211.97 175.778L212.506 52.6227L212.559 52.6236V36.9485H270.296V209.935L328.033 170.187V36.9485H389.305V133.239L453.522 110.845L453.522 36.9485L453.522 26.8716L453.522 16.7948L438.204 0Z" fill="white"/>
       </g>
       <defs>
       <filter id="filter0_d_2070_2175" x="0" y="0" width="457.521" height="298.731" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
       <feFlood flood-opacity="0" result="BackgroundImageFix"/>
       <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
       <feOffset dy="4"/>
       <feGaussianBlur stdDeviation="2"/>
       <feComposite in2="hardAlpha" operator="out"/>
       <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
       <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2070_2175"/>
       <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2070_2175" result="shape"/>
       </filter>
       </defs>
       </svg>
         

      </Flex>
      <Flex
        direction='column'
        mb='12px'
        align='center'
        justify='center'
        px='15px'
        pt='55px'>
        <Text
          fontSize={{ base: "lg", xl: "18px" }}
          color='white'
          fontWeight='bold'
          lineHeight='150%'
          textAlign='center'
          px='10px'
          mb='14px'>
          Atualização para a Versão PRO
        </Text>
        <Text
          fontSize='14px'
          color={"white"}
          px='10px'
          mb='14px'
          textAlign='center'>
          Melhore sua experiência de desenvolvimento utilizando a VisuMEI PRO!
        </Text>
      </Flex>
      <Link href='https://horizon-ui.com/pro'>
        <Button
          bg='whiteAlpha.300'
          _hover={{ bg: "whiteAlpha.200" }}
          _active={{ bg: "whiteAlpha.100" }}
          mb={{ sm: "16px", xl: "24px" }}
          color={"white"}
          fontWeight='regular'
          fontSize='sm'
          minW='185px'
          mx='auto'>
          Atualização para PRO
        </Button>
      </Link>
    </Flex>
  );
}
