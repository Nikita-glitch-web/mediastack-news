import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";

type Props = {
  title: string;
  description: string;
  url: string;
  source: string;
  published_at: string;
  image?: string;
};

export default function NewsCard({
  title,
  description,
  url,
  source,
  published_at,
  image,
}: Props) {
  const formattedDate = new Date(published_at).toLocaleString("uk-UA", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <CardMedia
        component="img"
        height="180"
        image={image || "https://placehold.co/600x400?text=No%20Photo"}
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description?.length > 140
            ? description.slice(0, 140) + "…"
            : description}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Source: {source} | {formattedDate}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </Button>
      </CardActions>
    </Card>
  );
}
