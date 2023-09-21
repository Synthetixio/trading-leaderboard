import { Flex, Heading } from '@chakra-ui/layout';
import { useState } from 'react';
import Rules from './Rules';
import Leaderboard from './Leaderboard';
import { Link } from 'react-router-dom';

function App() {
  const [page, setPage] = useState('');
  return (
    <>
      <Heading textColor="white" textAlign="center" pt="8">
        Synthetix V3 Trading Competition
      </Heading>
      <Flex justifyContent="space-evenly" alignItems="center" h="100vh">
        {page === 'rules' ? (
          <Rules />
        ) : page === 'leaderboard' ? (
          <Leaderboard />
        ) : (
          <>
            <Link to="/rules">
              <Flex
                h="200px"
                cursor="pointer"
                p="6"
                onClick={() => setPage('rules')}
                bgImage="linear-gradient(316deg, #50d8d7 0%, #923993 74%)"
                rounded="base"
                color="white"
                fontWeight="bold"
                w="40vw"
                justifyContent="center"
                alignItems="center"
                _hover={{ opacity: 0.7, transition: 'opacity 0.5s' }}
                fontSize="25px"
              >
                Rules
              </Flex>
            </Link>
            <Link to="/leaderboard">
              <Flex
                h="200px"
                cursor="pointer"
                p="6"
                onClick={() => setPage('leaderboard')}
                bgImage="linear-gradient(316deg, #923993 0%,#50d8d7 74%)"
                rounded="base"
                color="white"
                fontWeight="bold"
                w="40vw"
                alignItems="center"
                justifyContent="center"
                _hover={{ opacity: 0.7, transition: 'opacity 0.5s' }}
                fontSize="25px"
              >
                Leaderboard
              </Flex>
            </Link>
          </>
        )}
      </Flex>
    </>
  );
}

export default App;
