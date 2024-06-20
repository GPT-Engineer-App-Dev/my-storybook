import { Container, Text, VStack, Heading, Box, Image, Link, Button, useColorModeValue } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Index = ({ posts, onDeletePost }) => {
  const bg = useColorModeValue("gray.100", "gray.700");

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg={bg} p={4} borderRadius="md">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Box boxSize="sm">
          <Image src="/images/blog-image.jpg" alt="Blog Image" borderRadius="md" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Hi! I'm a passionate writer and developer. Follow my journey as I share insights on technology, programming, and life.
        </Text>
        <Button as={RouterLink} to="/add-post" colorScheme="teal">Add New Post</Button>
        <VStack spacing={4} mt={8}>
          {posts.map((post, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
              <Heading fontSize="xl">{post.title}</Heading>
              <Text mt={4}>{post.content}</Text>
              <Button colorScheme="red" onClick={() => onDeletePost(index)}>Delete</Button>
            </Box>
          ))}
        </VStack>
        <VStack spacing={2}>
          <Link href="https://twitter.com" isExternal>
            <FaTwitter size="24px" />
          </Link>
          <Link href="https://github.com" isExternal>
            <FaGithub size="24px" />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <FaLinkedin size="24px" />
          </Link>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;