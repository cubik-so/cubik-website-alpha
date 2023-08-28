import {
  Button,
  Center,
  Container,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';

const LandingPage = () => {
  return (
    <Container
      h="100vh"
      maxW="5xl"
      bg={'black'}
      py={{ base: '7rem', md: '10rem' }}
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={3}
    >
      <Heading>Under Maintenance</Heading>
      <Text color={'white'} fontSize={'lg'} textAlign={'center'}>
        We are working on some upgrades. OPOS Hackathon voting will be back soon
      </Text>
    </Container>
  );
};

export default LandingPage;
