import { Image } from '@chakra-ui/image';
import { Flex } from '@chakra-ui/layout';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <Flex
      as="footer"
      w="100%"
      p="12"
      borderTop="1px solid"
      borderTopColor="gray.900"
      justifyContent="space-between"
    >
      <Image src="snx.png" />

      <Flex gap="4">
        <Link to="https://discord.com/invite/AEdUHzt">
          <Image src="discord.png" />
        </Link>
        <Link to="https://twitter.com/synthetix_io">
          <Image src="twitter.png" />
        </Link>
        <Link to="https://github.com/synthetixio">
          <Image src="github.png" />
        </Link>
      </Flex>
    </Flex>
  );
}
