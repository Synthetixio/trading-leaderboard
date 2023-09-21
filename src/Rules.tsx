import { Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { Kwenta, Polynomial } from './SVGS';
import Header from './Header';

export default function Rules() {
  return (
    <>
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

        <Button colorScheme="cyan" w="fit-content">
          Learn More
        </Button>

        <Heading mt="100px">General instructions</Heading>
        <Text display={'flex'} fontWeight={'bold'}>
          1.&nbsp;
          <Text color="gray.500" fontWeight={'bold'}>
            Traders should have received{' '}
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
            to your trading wallet
          </Text>
        </Text>
        <Text display={'flex'} fontWeight={'bold'}>
          2.&nbsp;
          <Text color="gray.500" fontWeight={'bold'}>
            Use{' '}
            <Text
              display="inline"
              bg="linear-gradient(73.6deg, #34EDB3 2.11%, #00D1FF 100%)"
              backgroundClip="text"
              text-fill-color="transparent"
            >
              Spot Tab
            </Text>{' '}
            to trade sUSD into other synths
          </Text>
        </Text>
        <Text display={'flex'} fontWeight={'bold'} mb="8">
          3.&nbsp;
          <Text color="gray.500" fontWeight={'bold'}>
            Head to one of the integrator front ends to trade:
          </Text>
        </Text>

        <Flex gap="2">
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
              utilize the $100k susd and 0.25 eth they received at start
            </Text>
          </Text>
          <Text display={'flex'} fontWeight={'bold'}>
            5.&nbsp;
            <Text color="gray.500" fontWeight={'bold'}>
              Traders can use Margin from sUSD for any accepted synth, by
              swapping at Spot Swapper
            </Text>
          </Text>
          <Text display={'flex'} fontWeight={'bold'}>
            6.&nbsp;
            <Text color="gray.500" fontWeight={'bold'}>
              Traders cannot create or source more sUSD or other synth than the
              initial $100k
            </Text>
          </Text>
          <Text display={'flex'} fontWeight={'bold'}>
            7.&nbsp;
            <Text color="gray.500" fontWeight={'bold'}>
              Trading can be done through integrators, directly through
              contracts or the prototype (not recommended)
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
          <Flex flexDirection="column">
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
              to eliminate any accounts participating in the competition
            </Text>
            <Text fontWeight="bold" my="4">
              Bounties/Bugs/Feedback
            </Text>
            <Text>
              For contracts, using the Synthetix Immunify program scheme, with a
              discount of 90% For frontends, talk to respective integrator For
              keepers, no bounties
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
