import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

interface AuthorProfileCardProps {
  name: string;
  title: string;
  bio: string;
  initials: string;
  avatarColor: string;
}

export default function AuthorProfileCard({
  name,
  title,
  bio,
  initials,
  avatarColor,
}: AuthorProfileCardProps) {
  return (
    <Card
      sx={{
        borderRadius: "12px",
        p: 2.5,
        backgroundColor: "white",
        border: "none",
        boxShadow: "0px 4px 16px rgba(17, 24, 39, 0.08)",

        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {/* Author Header */}
      <Stack direction="row" spacing={1.5} alignItems="center">
        <Avatar
          sx={{
            width: 48,
            height: 48,
            backgroundColor: avatarColor,
            fontSize: "18px",
            fontWeight: 700,
            fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          {initials}
        </Avatar>

        <Box>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#111827",
              lineHeight: "24px",
              mb: 0.25,
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            {name}
          </Typography>

          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: 400,
              color: "#6B7280",
              lineHeight: "18px",
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            {title}
          </Typography>
        </Box>
      </Stack>

      {/* Bio */}
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: 400,
          color: "#374151",
          lineHeight: "20px",
          fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
        }}
      >
        {bio}
      </Typography>
    </Card>
  );
}
