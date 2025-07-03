'use client';
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface MentorCardProps {
  initials: string;
  name: string;
  subject: string;
  message: string;
  timeAgo: string;
  isLiked: boolean;
  backgroundColor: string;
}

export default function MentorCard({
  initials,
  name,
  subject,
  message,
  timeAgo,
  isLiked,
  backgroundColor,
}: MentorCardProps) {
  const [liked, setLiked] = React.useState(isLiked);

  return (
    <Card
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(10px)",
        borderRadius: "16px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <CardContent sx={{ p: 2 }}>
        <Stack spacing={2}>
          {/* Header */}
          <Stack direction="row" spacing={2} alignItems="flex-start">
            <Avatar
              sx={{
                backgroundColor: backgroundColor,
                width: 36,
                height: 36,
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "white",
              }}
            >
              {initials}
            </Avatar>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="body2"
                sx={{ color: "white", fontWeight: 600, mb: 0.5 }}
              >
                {name}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "rgba(255,255,255,0.8)" }}
              >
                {subject}
              </Typography>
            </Box>
          </Stack>

          {/* Message */}
          <Typography
            variant="body2"
            sx={{
              color: "rgba(255,255,255,0.9)",
              lineHeight: 1.4,
              fontSize: "0.85rem",
            }}
          >
            "{message}"
          </Typography>

          {/* Footer */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="caption"
              sx={{ color: "rgba(255,255,255,0.7)" }}
            >
              {timeAgo}
            </Typography>
            <Stack direction="row" spacing={1}>
              <IconButton
                size="small"
                onClick={() => setLiked(!liked)}
                sx={{ color: liked ? "#EF4444" : "rgba(255,255,255,0.7)" }}
              >
                {liked ? (
                  <FavoriteIcon fontSize="small" />
                ) : (
                  <FavoriteBorderIcon fontSize="small" />
                )}
              </IconButton>
              <Typography
                variant="caption"
                sx={{
                  color: liked ? "#EF4444" : "rgba(255,255,255,0.7)",
                  alignSelf: "center",
                  fontSize: "0.75rem",
                }}
              >
                {liked ? "Beğen" : "Yanıtla"}
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
