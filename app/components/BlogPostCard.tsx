"use client"; 
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface BlogPostCardProps {
  id?: string;
  title: string;
  excerpt: string;
  category: string;
  categoryColor: string;
  categoryBgColor: string;
  authorName: string;
  authorInitials: string;
  publishDate: string;
  readTime: string;
  featured?: boolean;
  variant?: "horizontal" | "vertical";
}

export default function BlogPostCard({
  id,
  title,
  excerpt,
  category,
  categoryColor,
  categoryBgColor,
  authorName,
  authorInitials,
  publishDate,
  readTime,
  featured = false,
  variant = "vertical",
}: BlogPostCardProps) {
  const isHorizontal = variant === "horizontal";
  const router = useRouter();

  const handleCardClick = () => {
    router.push("/blog-detay");
  };

  return (
    <Card
      onClick={handleCardClick}
      sx={{
        borderRadius: "16px",
        backgroundColor: "#FFF",
        boxShadow: "0px 4px 16px rgba(17, 24, 39, 0.08)",
        border: "none",
        overflow: "hidden",
        display: "flex",
        flexDirection: isHorizontal ? "row" : "column",
        height: isHorizontal ? "275px" : "auto",
        cursor: "pointer",
        transition: "all 0.2s ease-in-out",
        "&:hover": {
          boxShadow: "0px 8px 24px rgba(17, 24, 39, 0.15)",
          transform: "translateY(-2px)",
        },
      }}
    >
      {/* Image Section */}
      <Box
        sx={{
          position: "relative",
          width: isHorizontal ? "347px" : "100%",
          height: isHorizontal ? "242px" : "240px",
          backgroundColor: "#F3F4F6",
          flexShrink: 0,
        }}
      >
        {/* Featured Badge */}
        {featured && (
          <Chip
            label="Öne Çıkan"
            sx={{
              position: "absolute",
              top: 16,
              left: 16,
              backgroundColor: "#FF9500",
              color: "white",
              fontSize: "12px",
              fontWeight: 600,
              border: 'none',
              height: "26px",
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              "& .MuiChip-label": {
                px: 1.5,
                py: 0.5,
              },
            }}
          />
        )}

        {/* Read Time Badge */}
        <Chip
          label={readTime}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(2px)",
            color: "#374151",
            fontSize: "12px",
            fontWeight: 500,
            height: "26px",
            fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            "& .MuiChip-label": {
              px: 1,
              py: 0.5,
            },
          }}
        />

        {/* Placeholder for image */}
        <Box
          sx={{
            width: "100%",
            height: "100%",
            backgroundColor: "#E5E7EB",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              color: "#9CA3AF",
              fontSize: "14px",
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            Blog İmage
          </Typography>
        </Box>
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          p: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
          minHeight: isHorizontal ? "242px" : "auto",
        }}
      >
        {/* Category and Content */}
        <Box sx={{ mb: 2 }}>
          <Chip
            label={category}
            sx={{
              backgroundColor: categoryBgColor,
              color: categoryColor,
              fontSize: "12px",
              fontWeight: 600,
              height: "26px",
              border: 'none',
              mb: 1.5,
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              textTransform: "capitalize",
              "& .MuiChip-label": {
                px: 1,
                py: 0.5,
              },
            }}
          />

          <Typography
            variant="h3"
            sx={{
              fontSize: isHorizontal ? "16px" : "18px",
              fontWeight: 700,
              color: "#111827",
              lineHeight: isHorizontal ? "24px" : "26px",
              mb: 1.5,
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            {title}
          </Typography>

          <Typography
            sx={{
              fontSize: isHorizontal ? "16px" : "14px",
              fontWeight: 400,
              color: "#6B7280",
              lineHeight: isHorizontal ? "24px" : "22px",
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            {excerpt}
          </Typography>
        </Box>

        {/* Author and Read More */}
        <Box
          sx={{
            borderTop: "1px solid #F3F4F6",
            pt: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Avatar
              sx={{
                width: 32,
                height: 32,
                backgroundColor: "#FF9500",
                fontSize: "14px",
                fontWeight: 600,
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              {authorInitials}
            </Avatar>

            <Box>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#111827",
                  lineHeight: "21px",
                  fontFamily:
                    "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                {authorName}
              </Typography>

              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 400,
                  color: "#6B7280",
                  lineHeight: "18px",
                  fontFamily:
                    "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                {publishDate}
              </Typography>
            </Box>
          </Stack>

          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleCardClick();
            }}
            endIcon={<ArrowForwardIcon sx={{ fontSize: 16 }} />}
            sx={{
              color: "#FF9500",
              fontSize: "14px",
              fontWeight: 600,
              textTransform: "none",
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              minWidth: "auto",
              p: 0,
              "&:hover": {
                backgroundColor: "transparent",
                color: "#FF3B30",
              },
            }}
          >
            Oku
          </Button>
        </Box>
      </Box>
    </Card>
  );
}
