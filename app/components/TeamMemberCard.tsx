import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

interface SocialLink {
  type: "linkedin" | "twitter" | "github";
  url: string;
}

interface TeamMemberCardProps {
  initials: string;
  name: string;
  position: string;
  description: string;
  avatarGradient: string[];
  positionColor: string;
  socialLinks?: SocialLink[];
}

const getSocialIcon = (type: string) => {
  switch (type) {
    case "linkedin":
      return <LinkedInIcon sx={{ fontSize: 16, color: "white" }} />;
    case "twitter":
      return <TwitterIcon sx={{ fontSize: 16, color: "white" }} />;
    case "github":
      return <GitHubIcon sx={{ fontSize: 16, color: "white" }} />;
    default:
      return null;
  }
};

const getSocialBackground = (type: string) => {
  switch (type) {
    case "linkedin":
      return "#0077B5";
    case "twitter":
      return "#1DA1F2";
    case "github":
      return "#333";
    default:
      return "#000";
  }
};

export default function TeamMemberCard({
  initials,
  name,
  position,
  description,
  avatarGradient,
  positionColor,
  socialLinks = [],
}: TeamMemberCardProps) {
  return (
    <Card
      sx={{
        borderRadius: "24px",
        p: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
        backgroundColor: "#FFF",
        boxShadow: "0px 24px 48px rgba(17, 24, 39, 0.25)",
        border: "none",
        minHeight: "400px",
        justifyContent: "space-between",
      }}
    >
      {/* Avatar */}
      <Avatar
        sx={{
          width: 120,
          height: 120,
          background: `linear-gradient(90deg, ${avatarGradient[0]} 0%, ${avatarGradient[1]} 100%)`,
          fontSize: "48px",
          fontWeight: 700,
          color: "white",
          fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
        }}
      >
        {initials}
      </Avatar>

      {/* Member Info */}
      <Box sx={{ textAlign: "center", flex: 1 }}>
        <Typography
          variant="h6"
          sx={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#111827",
            mb: 1,
            fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 600,
            color: positionColor,
            mb: 2,
            fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          {position}
        </Typography>

        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            color: "#6B7280",
            lineHeight: "20px",
            textAlign: "center",
            maxWidth: "280px",
            fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          {description}
        </Typography>
      </Box>

      {/* Social Links */}
      {socialLinks.length > 0 && (
        <Stack direction="row" spacing={1.5}>
          {socialLinks.map((link, index) => (
            <IconButton
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                backgroundColor: getSocialBackground(link.type),
                borderRadius: "16px",
                width: 32,
                height: 32,
                "&:hover": {
                  opacity: 0.8,
                },
              }}
            >
              {getSocialIcon(link.type)}
            </IconButton>
          ))}
        </Stack>
      )}
    </Card>
  );
}
