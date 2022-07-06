// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/profile/components/Information";

// Assets
export default function GeneralInformation(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const cardShadow = useColorModeValue(
    "0px 18px 40px rgba(112, 144, 176, 0.12)",
    "unset"
  );
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'>
        Sobre Mim 
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
        Tenho 36 anos de idade, moro na região central de São Paulo, tenho amor pela cozinha e amo fazer salgados de tipos variados, mas minha principal especialidade são os doces. Faço meu trabalho com muita dedicação e amor, porque a minha satisfação maior é ver a alegria dos meus clientes.  
      </Text>
      <SimpleGrid columns='2' gap='20px'>
        <Information
          boxShadow={cardShadow}
          title='Email'
          value='emailly@gmail.com'
        />
        <Information
          boxShadow={cardShadow}
          title='Telefone Residencial'
          value='(11) 8555-9560'
        />
        <Information
          boxShadow={cardShadow}
          title='Whatsapp'
          value='(11) 98566-8596'
        />
        <Information
          boxShadow={cardShadow}
          title='Cep'
          value='06584-026'
        />
        <Information
          boxShadow={cardShadow}
          title='Endereço'
          value='Rua Doutor Franscisco Borges Amaral'
        />
        <Information
          boxShadow={cardShadow}
          title='Número'
          value='3565 A'
        />
        
        <Information
          boxShadow={cardShadow}
          title='Bairro'
          value='JD. Esperança'
        />
         <Information
          boxShadow={cardShadow}
          title='CNPJ'
          value='435.987.678-99'
        />

      </SimpleGrid>
    </Card>
  );
}
