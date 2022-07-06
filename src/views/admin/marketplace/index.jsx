/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

// Custom components
import Banner from "views/admin/marketplace/components/Banner";
import TableTopCreators from "views/admin/marketplace/components/TableTopCreators";
import HistoryItem from "views/admin/marketplace/components/HistoryItem";
import NFT from "components/card/NFT";
import Card from "components/card/Card.js";

// Assets
import Nft1 from "assets/img/nfts/Nft1.png";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft3 from "assets/img/nfts/Nft3.png";
import Nft4 from "assets/img/nfts/Nft4.png";
import Nft5 from "assets/img/nfts/Nft5.png";
import Nft6 from "assets/img/nfts/Nft6.png";
import Avatar1 from "assets/img/avatars/avatar1.png";
import Avatar2 from "assets/img/avatars/avatar2.png";
import Avatar3 from "assets/img/avatars/avatar3.png";
import Avatar4 from "assets/img/avatars/avatar4.png";
import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableColumnsTopCreators";

export default function Marketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb='20px'
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}>
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}>
          <Banner />
          <Flex direction='column'>
            <Flex
              mt='45px'
              mb='20px'
              justifyContent='space-between'
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}>
              <Text color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
                Produtos mais Vendidos
              </Text>
              
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap='20px'>
              <NFT
                name='Bolo de Pote'
                author='Anunciado por Dona Maria do Carmo'
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={Nft1}
                currentbid='R$ 7.00'
                download='#'
              />
              <NFT
                name='Trufa de Maracujá'
                author='Anunciado por Dona Maria do Carmo'
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={Nft2}
                currentbid='R$ 3.00'
                download='#'
              />
              <NFT
                name='Torta de Amora'
                author='Anunciado por Dona Maria do Carmo'
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={Nft3}
                currentbid='R$ 15.00'
                download='#'
              />
            </SimpleGrid>
            <Text
              mt='45px'
              mb='36px'
              color={textColor}
              fontSize='2xl'
              ms='24px'
              fontWeight='700'>
              Produtos Adicionados Recentemente
            </Text>
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              gap='20px'
              mb={{ base: "20px", xl: "0px" }}>
              <NFT
                name='Cocada de Maracujá'
                author='By Peter Will'
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={Nft4}
                currentbid='R$ 7.00'
                download='#'
              />
              <NFT
                name='Pastel de Carne'
                author='By Mark Benjamin'
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={Nft5}
                currentbid='R$ 7.00'
                download='#'
              />
              <NFT
                name='Dogão'
                author='By Manny Gates'
                bidders={[
                  Avatar1,
                  Avatar2,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={Nft6}
                currentbid='R$ R$ 12.00'
                download='#'
              />
            </SimpleGrid>
          </Flex>
        </Flex>
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}>
          <Card px='0px' mb='20px'>
            <TableTopCreators
              tableData={tableDataTopCreators}
              columnsData={tableColumnsTopCreators}
            />
          </Card>
          <Card p='0px'>
            <Flex
              align={{ sm: "flex-start", lg: "center" }}
              justify='space-between'
              w='100%'
              px='22px'
              py='18px'>
              <Text color={textColor} fontSize='xl' fontWeight='600'>
                Meus Produtos
              </Text>
              <Button variant='action'>Ver Todos</Button>
            </Flex>

            <HistoryItem
              name='Torta de Frango'
              author='Anunciado por Dona Maria do Carmo'
              date='ago'
              image={Nft5}
              price='R$ 17.00'
            />
            <HistoryItem
              name='Bolo de Brigadeiro'
              author='Anunciado por Dona Maria do Carmo'
              date='58s ago'
              image={Nft1}
              price='R$ 20.00'
            />
            <HistoryItem
              name='Coxinha'
              author='Anunciado por Dona Maria do Carmo'
              date='1m ago'
              image={Nft2}
              price='R$ 2.00'
            />
            <HistoryItem
              name='Anunciado por Dona Maria do Carmo'
              author='By Peter Will'
              date='1m ago'
              image={Nft4}
              price='R$ 3.00'
            />
            <HistoryItem
              name='Picolé'
              author='Anunciado por Dona Maria do Carmo'
              date='2m ago'
              image={Nft3}
              price='R$ 2.50'
            />
            <HistoryItem
              name='Dogão'
              author='Anunciado por Dona Maria do Carmo'
              date='3m ago'
              image={Nft6}
              price='R$ 12.00'
            />
          </Card>
        </Flex>
      </Grid>
      {/* Delete Product */}
    </Box>
  );
}
