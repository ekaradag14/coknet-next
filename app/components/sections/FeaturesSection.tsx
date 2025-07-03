import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import Container from "@mui/material/Container";
const adaptifImage = "/icons/adaptif.png";
const mentorImage = "/icons/mentor.png";
const rehberlikImage = "/icons/rehberlik.png";
const hazirMisinImage = "/hazir-misin-min.png";
import FeatureHighlightsSection from "./FeatureHighlightsSection";

interface FeatureCardProps {
  title: string;
  description: string;
  stats: { value: string; label: string; color: string }[];
  gradientColors: string[];
  image: string;
  imageAlt: string;
}

function FeatureCard({
  title,
  description,
  stats,
  gradientColors,
  image,
  imageAlt,
}: FeatureCardProps) {
  return (
    <Card
      sx={{
        height: "100%",
        border: "1px solid #E5E7EB",
        borderRadius: "16px",
        backgroundColor: "#fff",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: "#FF9500",
          boxShadow: "0px 8px 24px 0px rgba(255, 149, 0, 0.15)",
        },
      }}
    >
      <CardContent
        sx={{ p: {xs:0,md:2}, height: "100%", display: "flex", flexDirection: "column" }}
      >
        <Box
          sx={{
            width: 120,
            height: 90,
            borderRadius: "12px",
            mb: 3,
            mx: "auto",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
              objectPosition: "center",
            }}
          />
        </Box>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            fontSize: "24px",
            lineHeight: "36px",
            color: "#111827",
            mb: 2,
            minHeight: "72px",
          }}
        >
          {title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: "#6B7280",
            fontSize: "16px",
            lineHeight: "24px",
            mb: 4,
            flex: 1,
          }}
        >
          {description}
        </Typography>

        <Stack direction="row" spacing={1} margin={'auto'} flexWrap="wrap" gap={1}>
          {stats.map((stat, index) => (
            <Stack key={index} direction="row" spacing={1} alignItems="center">
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  backgroundColor: '#787587',
                  fontSize: "12px",
                  fontWeight: 600,
                }}
              >
                {stat.value}
              </Avatar>
              <Typography
                variant="body2"
                sx={{
                  color: "#374151",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}

export default function FeaturesSection() {
  const features = [
    {
      title: "Adaptif Öğrenmenin Gücü",
      description:
        "Senin öğrenme tarzına, seviyene ve hatta moduna göre şekillenen plan. Çok Net sana özel bir öğretmen gibi, en verimli öğrenme deneyimini sunar.",
      stats: [
        { value: "98%", label: "Memnuniyet", color: "#EDE9FE" },
        { value: "5+", label: "Yıl Deneyim", color: "#EDE9FE" },
      ],
      gradientColors: ["#A855F7", "#F6EB23"],
      image: adaptifImage,
      imageAlt: "Adaptif Öğrenmenin Gücü",
    },
    {
      title: "Kişisel Yol Haritan: Hedefine Giden En Kısa Yol",
      description:
        'Artık "nereden başlayacağım?" derdi yok, yolun çok net!',
      stats: [
        { value: "1:1", label: "Birebir Ders", color: "#DBEAFE" },
        { value: "7/24", label: "Destek", color: "#DBEAFE" },
      ],
      gradientColors: ["#0891B2", "#1DB5BE"],
      image: mentorImage,
      imageAlt: "Kişisel Yol Haritan: Hedefine Giden En Kısa Yol",
    },
    {
      title: "Rehberlik Sistemi",
      description:
        "Psikolojik sağlamlık, motivasyon yönetimi ve hedef bilinci kazanmanız için profesyonel bir rehberlik sistemi.",
      stats: [
        { value: "85%", label: "Başarı Oranı", color: "#D1FAE5" },
        { value: "3K+", label: "Mezun", color: "#D1FAE5" },
      ],
      gradientColors: ["#059669", "#10B981"],
      image: rehberlikImage,
      imageAlt: "Rehberlik Sistemi",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
      }}
    >
      {/* Decorative gradient lines */}
      <Box
        sx={{
          position: "relative",
          mb: 6,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: {xs: -20, md: 0},
            right: {xs: -20, md: 0},
            height: "18px",
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, gray 50%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0.0) 100%, transparent)",
            opacity: 0.6,
            transform: "rotate(1.423deg)",
          },
          "&::after": {
            content: '""',
            position: "absolute", 
            top: {xs:"3px",md:"8px"},
            left: {xs: -20, md: 0},
            right: "50%",
            height: "19px",
            background:
              "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #F6EB23 40%,rgba(224, 187, 40, 0.6) 80%, rgba(0, 0, 0, 0.0) 100%, transparent)",
            opacity: 0.4,
            backdropFilter: "blur(50px)",
            transform: "rotate(-1.423deg)",
          },
        }}
      />

      <Container
        maxWidth="lg"
        sx={{   padding: {xs:"0 12px",md:"0 24px"} }}
      >
        {/* Empty header placeholder */}
        <Stack spacing={2} alignItems="center" sx={{ mb: 8 }}></Stack>

        {/* Feature Cards */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
            mb: 2,
            marginTop: 15, 
          }}
        >
          {features.map((feature, index) => (
            <Box key={index} sx={{ flex: 1 }}>
              <FeatureCard {...feature} />
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
}
