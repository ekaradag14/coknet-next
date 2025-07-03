import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

interface LegalPageTemplateProps {
  title: string;
  lastUpdated?: string;
  children: React.ReactNode;
}

export default function LegalPageTemplate({
  title,
  lastUpdated,
  children,
}: LegalPageTemplateProps) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#FAFAFA",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: "60px",
          right: "80px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          backgroundColor: "rgba(246, 235, 35, 0.1)",
          zIndex: -1,
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: "100px",
          left: "60px",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          backgroundColor: "rgba(139, 92, 246, 0.1)",
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="md" sx={{ py: { xs: 4, md: 8 } }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              color: "#1A1A1A",
              mb: 2,
            }}
          >
            {title}
          </Typography>
          {lastUpdated && (
            <Typography
              variant="body2"
              sx={{
                color: "#6B7280",
                fontSize: "0.9rem",
              }}
            >
              Son güncelleme: {lastUpdated}
            </Typography>
          )}
        </Box>

        <Box
          sx={{
            backgroundColor: "#FFFFFF",
            borderRadius: "16px",
            p: { xs: 3, md: 5 },
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
            "& h2": {
              fontSize: { xs: "1.25rem", md: "1.5rem" },
              fontWeight: 600,
              color: "#1A1A1A",
              mt: 4,
              mb: 2,
              "&:first-of-type": {
                mt: 0,
              },
            },
            "& h3": {
              fontSize: { xs: "1.1rem", md: "1.25rem" },
              fontWeight: 600,
              color: "#1A1A1A",
              mt: 3,
              mb: 1.5,
            },
            "& p": {
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "#4B5563",
              mb: 2,
            },
            "& ul, & ol": {
              pl: 2,
              mb: 2,
              "& li": {
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "#4B5563",
                mb: 1,
              },
            },
            "& strong": {
              color: "#1A1A1A",
              fontWeight: 600,
            },
          }}
        >
          {children}
        </Box>
      </Container>
    </Box>
  );
}
