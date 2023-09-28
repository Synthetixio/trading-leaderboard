import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Kwenta, Polynomial } from './SVGS';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function Rules() {
  return (
    <Box overflow="hidden" position="relative">
      <Header />
      <Image
        src="/header-image.png"
        position="absolute"
        right="-300px"
        top="-20px"
        zIndex="-1"
      />
      <Flex flexDirection="column" p="10" gap="4">
        <Heading fontSize="60px">Legendary traders</Heading>
        <Heading fontSize="36px">
          Welcome to the Synthetix Perps <br /> v3 testnet trading competition
        </Heading>

      
        <Button colorScheme="cyan" w="fit-content" onClick={() => window.open('https://blog.synthetix.io/synthetix-perps-v3-testnet-trading-competition', '_blank')}>
        Learn More
        </Button>


        <Heading mt="100px">General instructions</Heading>
        <Text display={'flex'} fontWeight={'bold'}>
          1.&nbsp;
          <Text color="gray.500" fontWeight={'bold'}>
            Traders should have received testnet{' '}
            <Text
              display="inline"
              bg="linear-gradient(73.6deg, #34EDB3 2.11%, #00D1FF 100%)"
              backgroundClip="text"
              text-fill-color="transparent"
            >
              sUSD
            </Text>{' '}
            and{' '}
            <Text
              display="inline"
              bg="linear-gradient(73.6deg, #34EDB3 2.11%, #00D1FF 100%)"
              backgroundClip="text"
              text-fill-color="transparent"
            >
              ETH
            </Text>{' '}
            to their wallet on Base Goerli
          </Text>
        </Text>
        <Text display={'flex'} fontWeight={'bold'}>
          2.&nbsp;
          <Text color="gray.500" fontWeight={'bold'}>
            Swap sUSD in the{' '}
                  <Link to="https://synthetix-markets-prototype.vercel.app/spot/markets/ETH">
            <Text
              display="inline"
              bg="linear-gradient(73.6deg, #34EDB3 2.11%, #00D1FF 100%)"
              backgroundClip="text"
              text-fill-color="transparent"
            >
              Spot Market
            </Text>{' '}
            </Link>
            if you'd like to trade with coin margin
          </Text>
        </Text>
        <Text display={'flex'} fontWeight={'bold'} mb="8">
          3.&nbsp;
          <Text color="gray.500" fontWeight={'bold'}>
            Use one or both of the integrator front ends to trade:
          </Text>
        </Text>

        <Flex gap="2">
          <Link to="https://v3-perps.kwenta.io/market/?asset=sETH&accountType=cross_margin">
            <Flex
              h="270px"
              gap="5"
              bg="navy.700"
              flexDir="column"
              p="4"
              borderWidth="1px"
              borderStyle="solid"
              borderColor="gray.900"
              rounded={'base'}
            >
              <Flex justifyContent="space-between">
                <Kwenta />
                <Text
                  fontSize="xs"
                  bg="gray.700"
                  rounded="base"
                  h="fit-content"
                  p="1"
                >
                  Perps
                </Text>
              </Flex>
              <Heading>Kwenta</Heading>
              <Text color="gray.500">
                Trade crypto, forex, and commodities with up to 50x leverage and
                deep liquidity.
              </Text>
            </Flex>
          </Link>
          <Link to="https://trade.polynomial.finance/">
            <Flex
              h="270px"
              gap="5"
              bg="navy.700"
              flexDir="column"
              p="4"
              borderWidth="1px"
              borderStyle="solid"
              borderColor="gray.900"
              rounded={'base'}
            >
              <Flex justifyContent="space-between">
                <Polynomial />
                <Text
                  fontSize="xs"
                  bg="gray.700"
                  rounded="base"
                  h="fit-content"
                  p="1"
                >
                  Perps
                </Text>
              </Flex>
              <Heading>Polynomial</Heading>
              <Text color="gray.500">
                Trade perps with Polynomial's smart wallet to access up to 50x
                leverage.
              </Text>
            </Flex>
          </Link>
        </Flex>

        <Flex flexDir="column" my="16" gap="4">
          <Heading fontSize="36px">Rules</Heading>
          <Text display={'flex'} fontWeight={'bold'}>
            1.&nbsp;
            <Text color="gray.500" fontWeight={'bold'}>
              Competition period starts:{' '}
              <Text
                display="inline"
                bg="linear-gradient(73.6deg, #34EDB3 2.11%, #00D1FF 100%)"
                backgroundClip="text"
                text-fill-color="transparent"
              >
                1.1.1970
              </Text>
            </Text>
          </Text>
          <Text display={'flex'} fontWeight={'bold'}>
            2.&nbsp;
            <Text color="gray.500" fontWeight={'bold'}>
              Competition period ends:{' '}
              <Text
                display="inline"
                bg="linear-gradient(73.6deg, #34EDB3 2.11%, #00D1FF 100%)"
                backgroundClip="text"
                text-fill-color="transparent"
              >
                1.1.1970
              </Text>
            </Text>
          </Text>
          <Text display={'flex'} fontWeight={'bold'}>
            3.&nbsp;
            <Text color="gray.500" fontWeight={'bold'}>
              Report feedback to DISCORD LINK
            </Text>
          </Text>
          <Text display={'flex'} fontWeight={'bold'}>
            4.&nbsp;
            <Text color="gray.500" fontWeight={'bold'}>
              Traders can{' '}
              <Text
                display="inline"
                bg="linear-gradient(73.6deg, #34EDB3 2.11%, #00D1FF 100%)"
                backgroundClip="text"
                text-fill-color="transparent"
              >
                ONLY
              </Text>{' '}
              utilize the $100k sUSD and 0.25 eth they received at start fo competition
            </Text>
          </Text>
          <Text display={'flex'} fontWeight={'bold'}>
            5.&nbsp;
            <Text color="gray.500" fontWeight={'bold'}>
              Traders can use Margin from sUSD or any accepted synth, by
              swapping at Spot Market
            </Text>
          </Text>
          <Text display={'flex'} fontWeight={'bold'}>
            6.&nbsp;
            <Text color="gray.500" fontWeight={'bold'}>
              Traders cannot create or source more sUSD or other synths
            </Text>
          </Text>
          <Text display={'flex'} fontWeight={'bold'}>
            7.&nbsp;
            <Text color="gray.500" fontWeight={'bold'}>
              Trading should be done through integrator front ends or directly through
              contracts
            </Text>
          </Text>
        </Flex>
        <Flex
          bg="navy.700"
          borderWidth="1px"
          borderStyle="solid"
          borderColor="gray.900"
          rounded={'base'}
        >
          <Image src="/circle.png" w="300px" h="100%" />
          <Flex flexDirection="column" p="4">
            <Heading fontSize="36px" mb="2">
              Prizes
            </Heading>
            <Text>
              Prizes{' '}
              <Text
                display="inline"
                bg="linear-gradient(73.6deg, #34EDB3 2.11%, #00D1FF 100%)"
                backgroundClip="text"
                text-fill-color="transparent"
                fontWeight="bold"
              >
                $15k
              </Text>{' '}
              from Grants Council
            </Text>
            <Text>
              <Text
                display="inline"
                bg="linear-gradient(73.6deg, #34EDB3 2.11%, #00D1FF 100%)"
                backgroundClip="text"
                text-fill-color="transparent"
                fontWeight="bold"
              >
                15 $KWENTA
              </Text>{' '}
              from Kwenta
            </Text>
            <Text
              display="inline"
              bg="linear-gradient(73.6deg, #34EDB3 2.11%, #00D1FF 100%)"
              backgroundClip="text"
              text-fill-color="transparent"
              mb="2"
              fontWeight="bold"
            >
              10 specials
            </Text>
            <Text>
              Traders are scored based on{' '}
              <Text
                display="inline"
                bg="linear-gradient(73.6deg, #34EDB3 2.11%, #00D1FF 100%)"
                backgroundClip="text"
                text-fill-color="transparent"
                fontWeight="bold"
              >
                time weighted PnL %
              </Text>
              , above a minimum threshold Prizes are only for genuine trading
              activity, and Synthetix has sole and final discretion, including
              to eliminate any accounts participating in the competition.
            </Text>
            <Text fontWeight="bold" my="4">
              Bounties/Bugs/Feedback
            </Text>
            <Text>
              For contracts, the     <Link
                to="https://immunefi.com/bounty/synthetix/"
                style={{ textDecoration: 'underline' }}
              >Synthetix Immunify</Link> program applies, with a
              discount of 90%. For frontends, discuss with respective integrator. For
              keepers, there are no bounties.
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Footer />
    </Box>
  );
}
