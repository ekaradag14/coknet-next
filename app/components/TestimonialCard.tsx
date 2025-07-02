import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Rating from "@mui/material/Rating";

interface TestimonialCardProps {
  companyName: string;
  companyLogo?: string;
  testimonial: string;
  customerName: string;
  customerTitle: string;
  customerInitials: string;
  companyBadgeColor: string;
}

export default function TestimonialCard({
  companyName,
  testimonial,
  customerName,
  customerTitle,
  customerInitials,
  companyBadgeColor,
}: TestimonialCardProps) {
  return (
    <Card
      sx={{
        borderRadius: "24px",
        p: 4,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        backgroundColor: "#FFF",
        boxShadow: "0px 24px 48px rgba(17, 24, 39, 0.25)",
        border: "none",
        height: "272px",
        justifyContent: "space-between",
      }}
    >
      {/* Header with Company Badge and Rating */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            backgroundColor: companyBadgeColor,
            color: "white",
            px: 2,
            py: 1,
            borderRadius: "8px",
            fontSize: "14px",
            fontWeight: 700,
            fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          {companyName}
        </Box>

        <Rating
          value={5}
          readOnly
          size="small"
          sx={{
            color: "#000",
            "& .MuiRating-iconEmpty": {
              color: "#000",
            },
          }}
        />
      </Box>

      {/* Testimonial Text */}
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: 400,
          color: "#374151",
          lineHeight: "24px",
          fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
          flex: 1,
        }}
      >
        "{testimonial}"
      </Typography>

      {/* Customer Info */}
      <Stack direction="row" spacing={1.5} alignItems="center">
        <Avatar
          sx={{
            width: 40,
            height: 40,
            background: "linear-gradient(90deg, #F6EB23 0%, #4318D1 100%)",
            fontSize: "16px",
            fontWeight: 700,
            fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          {customerInitials}
        </Avatar>

        <Box>
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: 700,
              color: "#111827",
              lineHeight: "24px",
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            {customerName}
          </Typography>

          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: 400,
              color: "#6B7280",
              lineHeight: "21px",
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            {customerTitle}
          </Typography>
        </Box>
      </Stack>
    </Card>
  );
}
