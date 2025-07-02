import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import FeaturesSection from "./FeaturesSection";
const product2 = "/product2.png";

export default function AboutCokNetSection() {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 8 },
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="lg">
        {/* Title and Description - now left aligned with image on right */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            gap: { xs: 4, md: 8 },
            mb: { xs: 6, md: 8 },
          }}
        >
          {/* Left: Text */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "32px", md: "40px" },
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#000",
                fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                mb: 4,
                textAlign: 'left',
              }}
            >
              ÇokNet Nedir?
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: 1.6,
                color: "#6B7280",
                fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                mb: 3,
                maxWidth: "761px",
                textAlign: 'left',
              }}
            >
              ÇokNet, her öğrencinin kendine özgü öğrenme ihtiyaçlarına göre
              bireyselleştirilmiş ve veri odaklı bir eğitim desteği sunar. Sürekli
              gelişim, kalıcı bilgi ve geri bildirim döngüsüyle her öğrenciyi
              başarılı kılmak için eğitim profesyonelleri tarafından
              tasarlanmıştır.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: 1.6,
                color: "#6B7280",
                fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                maxWidth: "743px",
                textAlign: 'left',
              }}
            >
              Her öğrenci, yeni bir dersin veya konunun başlangıcında farklı bilgi
              seviyelerine sahiptir. ÇokNet, her öğrenciye dinamik bir başarı yolu
              sunar.
            </Typography>
          </Box>
          {/* Right: Tilted Product Image */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: { xs: 'flex-start', md: 'flex-end' },
              alignItems: 'center',
              minWidth: 0,
              padding: { xs: 2, md: 0 },
            }}
          >
            <Box
              component="img"
              src={product2}
              alt="ÇokNet Ürün Ekran Görüntüsü"
              sx={{
                width: { xs: '100%', sm: 400, md: 500 },
                maxWidth: '100%',
        
                borderRadius: 2,
                boxShadow: "0px 8px 56px rgba(17, 24, 39, 0.2)",
                transform: 'rotate(8deg)',
                background: 'white',
                objectFit: 'contain',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'rotate(8deg) translateY(-8px)',
                }
              }}
            />
          </Box>
        </Box>
        {/* Use FeaturesSection directly here */}
        <FeaturesSection />
      </Container>
    </Box>
  );
}
