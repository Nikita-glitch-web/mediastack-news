import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Button, Container } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LaunchIcon from "@mui/icons-material/Launch";
import { useEffect, useState } from "react";

type Article = {
  title: string;
  description: string;
  url: string;
  source: string;
  published_at: string;
  image?: string;
};

export default function NewsDetail() {
  const navigate = useNavigate();
  const location = useLocation();
  const [article, setArticle] = useState<Article | null>(null);

  useEffect(() => {
    if (location.state) {
      setArticle(location.state as Article);
    } else {
      setArticle(null);
    }
  }, [location.state]);

  if (article === null) {
    return (
      <Container sx={{ textAlign: "center", mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          News not found
        </Typography>
        <Button onClick={() => navigate(-1)} startIcon={<ArrowBackIcon />}>
          Back
        </Button>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Button
        onClick={() => navigate(-1)}
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 2 }}
      >
        Go Back
      </Button>

      <Box
        component="img"
        src={
          article.image || "https://via.placeholder.com/800x400?text=No+Image"
        }
        alt={article.title}
        sx={{
          width: "100%",
          borderRadius: 2,
          mb: 3,
          maxHeight: 400,
          objectFit: "cover",
        }}
      />

      <Typography variant="h4" gutterBottom fontWeight={700}>
        {article.title}
      </Typography>

      <Typography variant="subtitle1" gutterBottom color="text.secondary">
        {new Date(article.published_at).toLocaleDateString()} | {article.source}
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        {article.description || "Немає опису цієї новини."}
      </Typography>

      <Button
        variant="contained"
        color="primary"
        href={article.url}
        target="_blank"
        endIcon={<LaunchIcon />}
      >
        Read Full
      </Button>
    </Container>
  );
}
