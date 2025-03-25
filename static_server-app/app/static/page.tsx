import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
} from "@mui/material";
import axios from "axios";
import ClientLazyPostDetails from "../components/ClientLazyPostDetails";

interface Post {
  id: number;
  title: string;
  body: string;
}

// This export sets ISR to revalidate the page every 60 seconds.
export const revalidate = 60;

const StaticPage = async () => {
  // Fetch posts (limited to 5 for demonstration)
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const posts: Post[] = response.data;

  return (
    <Container maxWidth='md' style={{ marginTop: "2rem" }}>
      <Typography variant='h4' gutterBottom>
        Static Generated Posts
      </Typography>
      <List>
        {posts.map((post) => (
          <ListItem key={post.id}>
            <Card style={{ width: "100%" }}>
              <CardContent>
                <Typography variant='h6'>{post.title}</Typography>
                <Typography variant='body2' gutterBottom>
                  {post.body}
                </Typography>
                {/* Client component that lazy loads post details */}
                <ClientLazyPostDetails postId={post.id} />
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default StaticPage;
