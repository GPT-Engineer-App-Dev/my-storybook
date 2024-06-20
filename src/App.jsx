import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import AddPost from "./pages/AddPost.jsx";
import { useState } from "react";
import { Box, Flex, useColorMode, IconButton } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  const [posts, setPosts] = useState([]);

  const { colorMode, toggleColorMode } = useColorMode();

  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <Router>
      <Box p={4}>
        <Flex justify="flex-end">
          <IconButton
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            isRound
            size="md"
            alignSelf="flex-end"
            onClick={toggleColorMode}
          />
        </Flex>
      <Routes>
        <Route exact path="/" element={<Index posts={posts} />} />
        <Route path="/add-post" element={<AddPost onAddPost={handleAddPost} />} />
      </Routes>
      </Box>
    </Router>
  );
}

export default App;
