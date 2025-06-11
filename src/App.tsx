import { Container, Typography } from "@mui/material";
import NewsList from "./components/NewsList/NewsList";

export function App() {
  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Latest News
      </Typography>
      <NewsList />
    </Container>
  );
}
