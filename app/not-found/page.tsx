"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Link from "next/link";
import ArticleIcon from "@mui/icons-material/Article";
import EmailIcon from "@mui/icons-material/Email";

const   NotFoundPage = () => {
  "use client";
  return (
    <Box
      sx={{
        backgroundColor: "#FFF",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
        {/* Main 404 Content */}
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          {/* Large 404 Number */}
          <Typography
            sx={{
              fontSize: { xs: "80px", md: "120px" },
              fontWeight: 700,
              lineHeight: { xs: "80px", md: "120px" },
              color: "#FF9500",
              mb: { xs: 2, md: 3 },
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            404
          </Typography>

          {/* Title */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "32px", md: "48px" },
              fontWeight: 700,
              lineHeight: { xs: "40px", md: "57.6px" },
              letterSpacing: "-1px",
              color: "#111827",
              mb: { xs: 2, md: 3 },
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            Sayfa Bulunamadı
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "28.8px",
              color: "#374151",
              mb: { xs: 4, md: 5 },
              maxWidth: "474px",
              mx: "auto",
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            Aradığınız sayfa mevcut değil veya taşınmış olabilir. Ana sayfaya
            dönebilir veya aşağıdaki bağlantıları kullanabilirsiniz.
          </Typography>

          {/* Main CTA Button */}
          <Button
            component={Link}
            href="/"
            variant="contained"
            sx={{
              backgroundColor: "#FF9500",
              color: "#FFF",
              borderRadius: "8px",
              px: { xs: 3, md: 4 },
              py: 2,
              fontSize: "16px",
              fontWeight: 600,
              lineHeight: "24px",
              textTransform: "none",
              minWidth: "180px",
              height: "56px",
              boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              "&:hover": {
                backgroundColor: "#E6850E",
              },
            }}
          >
            Ana Sayfaya Dön
          </Button>
        </Box>

        {/* Feature Cards */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: { xs: 3, md: 4 },
            maxWidth: "600px",
            mx: "auto",
            mb: { xs: 4, md: 6 },
          }}
        >
          {/* Özellikler Card */}
          <Card
            sx={{
              borderRadius: "12px",
              border: "1px solid #E5E7EB",
              backgroundColor: "#F9FAFB",
              width: "244px",
              height: "204px",
              position: "relative",
              textAlign: "center",
              transition: "all 0.2s ease",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.12)",
              },
            }}
          >
            {/* Icon positioned at top center */}
            <Avatar
              sx={{
                width: 48,
                height: 48,
                backgroundColor: "rgba(255, 149, 0, 0.16)",
                position: "absolute",
                left: "98px",
                top: "25px",
              }}
            >
              <ArticleIcon sx={{ color: "#000", fontSize: 24 }} />
            </Avatar>

            {/* Title */}
            <Typography
              variant="h6"
              sx={{
                position: "absolute",
                left: "87px",
                top: "89px",
                width: "73px",
                height: "24px",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "24px",
                color: "#111827",
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Özellikler
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                position: "absolute",
                left: "25px",
                top: "121px",
                width: "193px",
                height: "21px",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "21px",
                color: "#6B7280",
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Platform özelliklerini keşfedin
            </Typography>

            {/* Action Link */}
            <Button
              component={Link}
              href="/ozellikler"
              sx={{
                position: "absolute",
                left: "75px",
                top: "158px",
                width: "94px",
                height: "21px",
                color: "#FF9500",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "21px",
                textTransform: "none",
                p: 0,
                minWidth: "auto",
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                "&:hover": {
                  backgroundColor: "transparent",
                  textDecoration: "underline",
                },
              }}
            >
              Özellikleri Gör
            </Button>
          </Card>

          {/* İletişim Card */}
          <Card
            sx={{
              borderRadius: "12px",
              border: "1px solid #E5E7EB",
              backgroundColor: "#F9FAFB",
              width: "244px",
              height: "204px",
              position: "relative",
              textAlign: "center",
              transition: "all 0.2s ease",
              "&:hover": {
                transform: "translateY(-2px)",
                boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.12)",
              },
            }}
          >
            {/* Icon positioned at top center */}
            <Avatar
              sx={{
                width: 48,
                height: 48,
                backgroundColor: "#FEF3C7",
                position: "absolute",
                left: "98px",
                top: "25px",
              }}
            >
              <EmailIcon sx={{ color: "#000", fontSize: 24 }} />
            </Avatar>

            {/* Title */}
            <Typography
              variant="h6"
              sx={{
                position: "absolute",
                left: "94px",
                top: "89px",
                width: "56px",
                height: "24px",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "24px",
                color: "#111827",
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              İletişim
            </Typography>

            {/* Description */}
            <Typography
              sx={{
                position: "absolute",
                left: "49px",
                top: "121px",
                width: "146px",
                height: "21px",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "21px",
                color: "#6B7280",
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Bizimle iletişime geçin
            </Typography>

            {/* Action Link */}
            <Button
              component={Link}
              href="/iletisim"
              sx={{
                position: "absolute",
                left: "77px",
                top: "158px",
                width: "91px",
                height: "21px",
                color: "#FF9500",
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: "21px",
                textTransform: "none",
                p: 0,
                minWidth: "auto",
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                "&:hover": {
                  backgroundColor: "transparent",
                  textDecoration: "underline",
                },
              }}
            >
              İletişim Kurun
            </Button>
          </Card>
        </Box>

        {/* Footer Copyright */}
        <Box sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "18px",
              color: "#9CA3AF",
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            © 2024 ÇokNet. Tüm hakları saklıdır.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
export default NotFoundPage;