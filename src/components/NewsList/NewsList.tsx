import { useEffect, useState } from "react";
import axios from "axios";
import { List, ListItem } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import NewsCard from "../NewsCard/NewsCard";

type Article = {
  title: string;
  description: string;
  url: string;
  source: string;
  published_at: string;
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
            limit: 10,
          },
        });
        setArticles(res.data.data);
      } catch (err) {
        console.error("error while receiving news:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <List>
      {(loading ? Array.from({ length: 6 }) : articles).map((item, i) => (
        <ListItem key={i} disablePadding sx={{ mb: 2 }}>
          {loading ? (
            <>
              <Skeleton
                variant="rectangular"
                height={140}
                width="100%"
                sx={{ mb: 1 }}
              />
              <Skeleton height={30} />
              <Skeleton height={20} width="60%" />
            </>
          ) : (
            <NewsCard {...(item as Article)} />
          )}
        </ListItem>
      ))}
    </List>
  );
}
