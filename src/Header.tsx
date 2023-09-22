import { Image } from '@chakra-ui/image';
import { Flex, Text } from '@chakra-ui/layout';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  return (
    <Flex gap="4" my="4" as="header" px="4">
      <Link to="/">
        <Image src="/header.png" cursor="pointer" />
      </Link>
      <Link to="/">
        <Text
          fontWeight={700}
          color={location.pathname.length === 1 ? 'white' : 'gray.500'}
        >
          Rules
        </Text>
      </Link>

      <Link to="/leaderboard">
        <Text
          fontWeight={700}
          color={
            location.pathname.includes('leaderboard') ? 'white' : 'gray.500'
          }
        >
          Leaderboard
        </Text>
      </Link>
    </Flex>
  );
}
