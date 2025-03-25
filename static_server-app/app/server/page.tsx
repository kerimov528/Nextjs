import React from "react";
import { Container, Typography, Card, CardContent } from "@mui/material";
import axios from "axios";
import ClientLazyUserDetails from "../components/ClientLazyUserDetails";

interface User {
  id: number;
  name: string;
  email: string;
}

// Force server-side rendering on every request
export const dynamic = "force-dynamic";

const ServerPage = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  const user: User = response.data;

  return (
    <Container maxWidth='sm' style={{ marginTop: "2rem" }}>
      <Typography variant='h4' gutterBottom>
        Server Side Rendered User
      </Typography>
      <Card>
        <CardContent>
          <Typography variant='h5'>{user.name}</Typography>
          <Typography variant='body1' gutterBottom>
            {user.email}
          </Typography>
          {/* Client component that lazy loads additional user details */}
          <ClientLazyUserDetails userId={user.id} />
        </CardContent>
      </Card>
    </Container>
  );
};

export default ServerPage;
