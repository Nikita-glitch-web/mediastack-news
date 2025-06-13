import { Container, Typography } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import NewsList from "./components/NewsList/NewsList";
import NewsDetail from "./components/NewsDetail/NewsDetail";

export function App() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: 1,
          textAlign: "left",
          color: "primary.main",
          position: "relative",
          mb: 4,
          "&::after": {
            content: '""',
            display: "block",
            width: "100%",
            height: 4,
            borderRadius: 2,
            backgroundColor: "#87CEFA",
            margin: "8px auto 0",
          },
        }}
      >
        Latest News
      </Typography>

      <Routes>
        <Route path="/" element={<NewsList />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
    </Container>
  );
}
