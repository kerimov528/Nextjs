"use client";
import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import axios from "axios";

interface LazyPostDetailsProps {
  postId: number;
}

interface Comment {
  id: number;
  name: string;
  body: string;
}

const LazyPostDetails: React.FC<LazyPostDetailsProps> = ({ postId }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments?_limit=2`
      );
      setComments(response.data);
    };
    fetchComments();
  }, [postId]);

  return (
    <div style={{ marginTop: "1rem" }}>
      <Typography variant='subtitle1'>Comments:</Typography>
      {comments.map((comment) => (
        <Typography key={comment.id} variant='body2'>
          {comment.name}: {comment.body}
        </Typography>
      ))}
    </div>
  );
};

export default LazyPostDetails;
