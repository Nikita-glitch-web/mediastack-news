import { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import NewsCard from "../NewsCard/NewsCard";

type Article = {
  title: string;
  description: string;
  url: string;
  source: string;
  published_at: string;
  image?: string;
};

const API_KEY = import.meta.env.VITE_MEDIASTACK_API_KEY;

export default function NewsList() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await axios.get("http://api.mediastack.com/v1/news", {
          params: {
            access_key: API_KEY,
            countries: "us",
            languages: "en",
            sort: "published_desc",
            limit: 15,
          },
        });
        setArticles(res.data.data);
      } catch (err) {
        console.error("Error while receiving news:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const content = (loading ? Array.from({ length: 8 }) : articles).map(
    (item, i) => (
      <Box key={i} sx={{ breakInside: "avoid" }}>
        {loading ? (
          <Box sx={{ mb: 3 }}>
            <Skeleton variant="rectangular" height={200} sx={{ mb: 2 }} />
            <Skeleton height={28} width="90%" />
            <Skeleton height={20} width="70%" />
          </Box>
        ) : (
          <NewsCard {...(item as Article)} />
        )}
      </Box>
    )
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        px: { xs: 1, sm: 2 },
        py: 3,
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1500,
          display: "grid",
          gap: 6,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
          },
        }}
      >
        {content}
      </Box>
    </Box>
  );
}
