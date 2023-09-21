import { Button } from '@chakra-ui/button';
import { Flex } from '@chakra-ui/layout';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  return (
    <Flex justifyContent="center" my="4">
      {location.pathname.includes('leaderboard') && (
        <Link to="/rules">
          <Button variant="outline">Rules</Button>
        </Link>
      )}
      {location.pathname.includes('rules') && (
        <Link to="/leaderboard">
          <Button variant="outline">Leaderboard</Button>
        </Link>
      )}
    </Flex>
  );
}
