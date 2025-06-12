import {
  Card,
  CardMedia,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      component="a"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Read full article: ${title}`}
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        height: isMobile ? "auto" : 200,
        borderRadius: 3,
        boxShadow: 3,
        color: "inherit",
        textDecoration: "none",
        overflow: "hidden",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "scale(1.01)",
          boxShadow: 6,
        },
      }}
    >
      {image && (
        <CardMedia
          component="img"
          image={image}
          alt={title}
          sx={{
            width: isMobile ? "100%" : 160,
            height: isMobile ? 160 : "100%",
            objectFit: "cover",
            flexShrink: 0,
          }}
        />
      )}

      <Box
        sx={{
          flex: 1,
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minWidth: 0,
        }}
      >
        <Box>
          <Typography variant="caption" color="text.secondary" noWrap>
            {source}
          </Typography>

          <Typography
            variant="h6"
            component="h2"
            fontWeight={600}
            sx={{
              display: "-webkit-box",
              overflow: "hidden",
              textOverflow: "ellipsis",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              mb: 0.5,
            }}
          >
            {title}
          </Typography>

          {description && (
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: "-webkit-box",
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitLineClamp: isMobile ? 3 : 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {description}
            </Typography>
          )}
        </Box>

        <Typography variant="caption" color="text.secondary" sx={{ mt: 1 }}>
          {new Date(published_at).toLocaleDateString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </Typography>
      </Box>
    </Card>
  );
}
