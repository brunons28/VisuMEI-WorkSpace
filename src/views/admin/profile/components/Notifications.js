// Chakra imports
import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
// Custom components
import SwitchField from "components/fields/SwitchField";
import Menu from "components/menu/MainMenu";

export default function Notifications(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  return (
    <Card mb='20px' {...rest}>
      <Flex align='center' w='100%' justify='space-between' mb='30px'>
        <Text
          color={textColorPrimary}
          fontWeight='bold'
          fontSize='2xl'
          mb='4px'>
          Notificações
        </Text>
        <Menu />
      </Flex>
      <SwitchField
        isChecked={true}
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='1'
        label='Notificações de atualização de itens'
      />
      <SwitchField
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='2'
        label='Notificações de comentários'
      />
      <SwitchField
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='3'
        label='Notificação de avaliação do comprador'ions
      />
      <SwitchField
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='4'
        label='Notificações de lembretes de classificação'
      />
      <SwitchField
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='5'
        label='Meetups near you notifications'
      />
      <SwitchField
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='6'
        label='Notificações de notícias da empresa'
      />
      <SwitchField
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='7'
        label='New launches and projects'
      />
      <SwitchField
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='8'
        label='Monthly product changes'
      />
      <SwitchField
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='9'
        label='Subscribe to newsletter'
      />
      <SwitchField
        reversed={true}
        fontSize='sm'
        mb='20px'
        id='10'
        label='Email me when someone follows me'
      />
    </Card>
  );
}
