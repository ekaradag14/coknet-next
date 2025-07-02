import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
const heroBackground = "/hero_background.svg";
const headerMinImage = "/header-min.png";

export default function HeroSection() {
  return (
    <Box
      id="hero"
      sx={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background SVG */}
      <Box
        component="img"
        src={heroBackground}
        alt=""
        sx={{
          position: "absolute",
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "90vh",

          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Main Hero Content */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            alignItems: "center",
            gap: { xs: 4, md: "20px" },
            width: "100%",
            flex: 1,
            minHeight: { xs: "auto", md: "80vh" },
          }}
        >
          {/* Left Content */}
          <Box
            sx={{
              flex: { xs: "none", md: "1" },
              width: { xs: "100%", md: "70%" },
            }}
          >
            <Stack spacing={4}>
              {/* Main Headline */}
              <Typography
                variant="h1"
                sx={{
                  fontSize: "clamp(2.5rem, 8vw, 4rem)",
                  fontWeight: 800,
                  color: "text.primary",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    fontWeight: 800,
                  }}
                >
                  <Typography
                    component="p"
                    sx={{
                      fontWeight: 800,
                      fontSize: "inherit",
                      lineHeight: 1.2,
                    }}
                  >
                    <strong>Başarın Bizim için Her Şeyden Önemli.</strong>
                  </Typography>
                </Box>
              </Typography>

              {/* Description */}
              <Typography
                variant="body1"
                sx={{
                  fontSize: "1.1rem",
                  color: "text.secondary",
                  lineHeight: 1.6,
                  maxWidth: "500px",
                }}
              >
                Seni sadece notlarınla değil, hayallerinle de tanıyoruz. Akıllı
                sistemimiz, seni analiz edip tamamen sana özel bir çalışma planı
                oluşturur. Böylece eksiklerini kapatır, özgüvenini adım adım
                geliştirirsin. Sadece sınavlara değil, hayata da hazırlanırsın
              </Typography>

              {/* CTA Buttons */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ pt: 2 }}
              >
                <Link href="/tanisma-formu" passHref >
                <Button
                  variant="outlined"
                  size="large"
                  sx={{
                    backgroundColor: "#FF9500",
                    color: "white",
                    border: "none",
                    borderRadius: "12px",
                    px: 4,
                    py: 1.5,
                    fontSize: "1rem",
                    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.18)",
                    fontWeight: 600,
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#E6850E",
                    },
                  }}
                >
                  Haydi Tanışalım!
                </Button>
                </Link>
              </Stack>

              {/* Privacy Notice */}
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ maxWidth: "400px" }}
              >
                Bilgilerinizi paylaşarak{" "}
                <Link href="#">
                  <span style={{ color: "rgba(255, 149, 0, 1)" }}>Gizlilik Politikası</span>
                </Link>{" "}
                ve{" "}
                <Link href="#">
                  <span style={{ color: "rgba(255, 149, 0, 1)" }}>Kullanım Şartları</span>
                </Link>
                'nı kabul etmiş olursunuz.
              </Typography>
            </Stack>
          </Box>

          {/* Right Content - Header Image */}
          <Box
            sx={{
              flex: { xs: "none", md: "1" },
              width: { xs: "100%", md: "30%" },
            }}
          >
            <Box
              component="img"
              src={headerMinImage}
              alt="ÇokNet Platform"
              sx={{
                width: "100%",
                height: "auto",
                maxWidth: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
