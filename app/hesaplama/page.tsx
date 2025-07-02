"use client";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "next/link";
const TYTimage = "/TYT.png";
const AYTimage = "/AYT.png";

// Clickable Feature Card Component
interface CalculationCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  linkTo: string;
}

function CalculationCard({
  title,
  description,
  image,
  imageAlt,
  linkTo,
}: CalculationCardProps) {
  return (
    <Card
      component={Link}
      href={linkTo}
      sx={{
        height: "100%",
        p: 3,
        borderRadius: "12px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)",
        border: "2px solid #E5E7EB",
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
        textDecoration: "none",
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0px 12px 24px rgba(0, 0, 0, 0.15)",
          borderColor: "#FF9500",
        },
      }}
    >
      {/* Feature Image */}
      <Box
        sx={{
          width: "100%",
          height: 120,
          borderRadius: "12px",
          overflow: "hidden",
          mb: 1,
        }}
      >
        <Box
          component="img"
          src={image}
          alt={imageAlt}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
      </Box>

      {/* Title */}
      <Typography
        variant="h6"
        sx={{
          fontSize: "20px",
          fontWeight: 700,
          lineHeight: "28px",
          color: "#111827",
        }}
      >
        {title}
      </Typography>

      {/* Description */}
      <Typography
        variant="body2"
        sx={{
          fontSize: "14px",
          lineHeight: "20px",
          color: "#374151",
          flex: 1,
        }}
      >
        {description}
      </Typography>
    </Card>
  );
}

 const HesaplamaPage = () => {
  const calculationTools = [
    {
      title: "TYT Puan Hesaplama",
      description:
        "Temel Yeterlilik Testi puanınızı kolayca hesaplayın. Net sayınızı girerek TYT puanınızı öğrenin.",
      image: TYTimage,
      imageAlt: "TYT Puan Hesaplama",
      linkTo: "/hesaplama/tyt",
    },
    {
      title: "AYT Puan Hesaplama",
      description:
        "Alan Yeterlilik Testi puanınızı hesaplayın. Farklı alan türleri için detaylı puan hesaplama sistemi.",
      image: AYTimage,
      imageAlt: "AYT Puan Hesaplama",
      linkTo: "/hesaplama/ayt",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        minHeight: "100vh",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          background:
            "linear-gradient(135deg, rgba(255, 149, 0, 0.05) 0%, rgba(246, 235, 35, 0.05) 50%, #FFF8F0 100%)",
          py: { xs: 6, md: 8 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative Circles */}
        <Box
          sx={{
            position: "absolute",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(255, 149, 0, 0.15)",
            top: "10%",
            left: "5%",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            background: "rgba(246, 235, 35, 0.15)",
            top: "20%",
            right: "10%",
            zIndex: 0,
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            background: "rgba(255, 149, 0, 0.1)",
            bottom: "15%",
            left: "15%",
            zIndex: 0,
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Box sx={{ textAlign: "center", maxWidth: "800px", mx: "auto" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "32px", md: "48px" },
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#111827",
                mb: 3,
              }}
            >
              Puan Hesaplama Araçları
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                color: "#6B7280",
                lineHeight: 1.6,
                maxWidth: "600px",
                mx: "auto",
              }}
            >
              TYT ve AYT sınavlarınızdan aldığınız net sayıları ile puanlarınızı
              kolayca hesaplayın. Hedef üniversitenize ne kadar yakın olduğunuzu
              öğrenin.
            </Typography>
          </Box>
                  {/* Additional Info Section */}
        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Typography
            variant="h5"
            sx={{
              fontSize: "24px",
              fontWeight: 600,
              color: "#111827",
              mb: 3,
            }}
          >
            Nasıl Çalışır?
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 4,
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            <Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  color: "#374151",
                  lineHeight: 1.6,
                }}
              >
                <strong>1. Net Sayınızı Girin:</strong> Sınavda doğru
                cevapladığınız soru sayısından yanlış cevapları çıkararak net
                sayınızı hesaplayın.
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "16px",
                  color: "#374151",
                  lineHeight: 1.6,
                }}
              >
                <strong>2. Puanınızı Öğrenin:</strong> Sistemimiz güncel
                katsayıları kullanarak tahmini puanınızı anında hesaplar.
              </Typography>
            </Box>
          </Box>
        </Box>
        </Container>
      </Box>

      {/* Calculation Cards Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } ,margin: 'auto'}}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr' },
            gap: 4,
            justifyContent: 'center',
          }}
        >
          {calculationTools.map((tool, index) => (
            <Box key={index} sx={{ width: '100%' }}>
              <CalculationCard {...tool} />
            </Box>
          ))}
        </Box>


      </Container>
    </Box>
  );
}
export default HesaplamaPage;
