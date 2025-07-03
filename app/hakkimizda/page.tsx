"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarIcon from "@mui/icons-material/Star";
import SecurityIcon from "@mui/icons-material/Security";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import GroupIcon from "@mui/icons-material/Group";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import PublicIcon from "@mui/icons-material/Public";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TimelineHowItStarted from "@/components/sections/TimelineHowItStarted";

interface ValueCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

function ValueCard({ title, description, icon, color }: ValueCardProps) {
  return (
    <Card
      sx={{
        p: 3,
        borderRadius: "16px",
        border: "1px solid #E5E7EB",
        backgroundColor: "#FFF",
        height: "100%",
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0px 12px 32px rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <Stack spacing={2.5}>
        <Avatar
          sx={{
            width: 56,
            height: 56,
            backgroundColor: `${color}15`,
            color: color,
            mb: 1,
          }}
        >
          {icon}
        </Avatar>

        <Typography
          variant="h6"
          sx={{
            fontSize: "18px",
            fontWeight: 700,
            lineHeight: "24px",
            color: "#111827",
            fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          {title}
        </Typography>

        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "22px",
            color: "#6B7280",
            fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          {description}
        </Typography>
      </Stack>
    </Card>
  );
}

const AboutPage = () => {
  const companyValues = [
    {
      title: "Öğrenci Başarısı Önceliğimizdir",
      description:
        "Her öğrencinin potansiyeline ulaşması için kişiselleştirilmiş, hedef odaklı bir deneyim sunarız.",
      icon: <StarIcon sx={{ fontSize: 28 }} />,
      color: "#FF9500",
    },
    {
      title: "Erişilebilir ve Eşit Eğitimi Savunuruz",
      description: "İnternet olan her yerde, eğitim herkesin hakkı deriz.",
      icon: <PublicIcon sx={{ fontSize: 28 }} />,
      color: "#10B981",
    },
    {
      title: "Teknoloji ile Eğitimi Birleştiririz",
      description:
        "Adaptif öğrenme, yapay zeka destekli takip ve interaktif içeriklerle eğitimi geleceğe taşırız.",
      icon: <IntegrationInstructionsIcon sx={{ fontSize: 28 }} />,
      color: "#8B5CF6",
    },
    {
      title: "Deneyimli Kadroyla Güçlüyüz",
      description:
        "Alanında uzman, YKS'ye yön veren öğretmenlerle kaliteli içerik üretiriz.",
      icon: <GroupIcon sx={{ fontSize: 28 }} />,
      color: "#1DB5BE",
    },
    {
      title: "Şeffaflık ve Sürekli İyileştirme",
      description:
        "Gerçek zamanlı başarı takibi, açık sınav analizleri ve öğrenci geri bildirimleriyle sürekli gelişiriz.",
      icon: <VisibilityIcon sx={{ fontSize: 28 }} />,
      color: "#F59E0B",
    },
    {
      title: "Aile ve Rehberliği Sürece Dahil Ederiz",
      description:
        "Veli panelleri ve uzman koçluk sistemimizle sadece öğrenciye değil, aileye de yol gösteririz.",
      icon: <FamilyRestroomIcon sx={{ fontSize: 28 }} />,
      color: "#EF4444",
    },
    {
      title: "Sorumluluğumuzun Farkındayız",
      description:
        "Eğitimde fırsat eşitliği ve kaliteyi bir araya getiren örnek bir dijital platform olma misyonuyla çalışırız.",
      icon: <SecurityIcon sx={{ fontSize: 28 }} />,
      color: "#6366F1",
    },
    {
      title: "Milli Eğitime Uyumlu, Geleceğe Hazırız",
      description:
        "MEB müfredatına tam uyumlu içeriklerle öğrencilere sadece sınav değil, hayat başarısı da kazandırırız.",
      icon: <CheckCircleIcon sx={{ fontSize: 28 }} />,
      color: "#059669",
    },
    {
      title: "Sonuç Odaklıyız",
      description:
        "Akademik başarı sistematik bir sürecin ürünüdür. Bu süreci bilimsel temellerle yönetiriz: ölçer, değerlendirir, geliştiririz.",
      icon: <TrendingUpIcon sx={{ fontSize: 28 }} />,
      color: "#DC2626",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#FFF",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decorative Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "200px",
          right: "80px",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "rgba(246, 235, 35, 0.15)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "-40px",
          left: "90px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(255, 149, 0, 0.15)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "100px",
          right: "50px",
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "rgba(29, 181, 190, 0.10)",
          zIndex: 0,
        }}
      />

      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 1,
          pt: 10,
          pb: 8,
        }}
      >
        {/* Header Section */}
        <Stack
          spacing={4}
          alignItems="center"
          sx={{

            mb: 8,
            maxWidth: "900px",
            mx: "auto",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "32px", md: "48px" },
              fontWeight: 700,
              color: "#111827",
              lineHeight: 1.2,
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              marginRight: "auto",
              width: "100%",
            }}
          >
            Hakkımızda
          </Typography>
          {/* Company Introduction */}
          <Box sx={{ maxWidth: "800px", textAlign: "left" }}>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: 400,
                color: "#374151",
                lineHeight: "28px",
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                mb: 3,
              }}
            >
              Günümüzün değişen öğrenme ihtiyaçlarına ve sınav hazırlık süreçlerine yanıt vermek üzere geliştirilmiş, öğrencinin ihtiyacını gerçekten anlayan bir öğrenme platformuyuz. Eğitim teknolojileri, yapay zeka, sınav analitiği ve dijital içerik üretimi alanlarında deneyimli uzman ekiplerimiz var. Sahayı biliyor, veriyi okuyor ve buna göre çözüm üretiyoruz.
              Platform, gelişmiş içerik altyapısıyla adaptif öğrenme modellerini merkeze alarak her öğrencinin ihtiyaçlarına özel, esnek ve verimli bir öğrenme deneyimi sunar.
              Kullanıcılarına yalnızca içerik sunmakla kalmayan ÇokNet, veri temelli geri bildirimlerle öğrenme sürecini şekillendirir, güçlü akademik takip mekanizmalarıyla öğrenciyi destekler.
              Köklerimiz der, vizyonu ileri olan bu sistem; teknoloji, pedagojik uzmanlık ve sahadaki deneyimin güçlü bir birleşimidir.
            </Typography>


          </Box>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "32px", md: "48px" },
              fontWeight: 700,
              color: "#111827",
              lineHeight: 1.2,
              textAlign: "right",
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              marginLeft: "auto",
              width: "100%",
            }}
          >
            Hikayemiz
          </Typography>
          <Box sx={{ maxWidth: "800px", textAlign: "left" }}>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: 400,
                textAlign: "right",
                color: "#374151",
                lineHeight: "28px",
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                mb: 3,
              }}
            >
              Türkiye'de her yıl milyonlarca öğrenci sınavlara hazırlanıyor. Hepsinin yolu, aynı konularla dolu kalabalık kaynaklardan, ezbere dayalı tekrarlarla ve birbirini kopyalayan sistemlerle kesişiyor.
              Biz bu yolu değiştirmek maksadıyla bir araya geldik. Farklı alanlarda uzman, sahayı çok iyi tanıyan, binlerce öğrenciyle yol yürümüş ekiplerle birlikte yola çıktık.
              Hedefimiz Netti: Her öğrencinin ihtiyacına göre şekillenen, güçlü bir akademik sistem kurmak. Ezber yerine anlayışın, kalabalık yerine kişiselleştirmenin, tesadüf yerine  veriye dayalı öğrenmenin olduğu bir sistem oluşturmak.
              İşte bu fikirle ÇokNet doğdu
              Adaptif öğrenme modelleriyle öğrenciyi tanıyan, içerik altyapısıyla rehberlik eden, akademik takiple destekleyen bir platform ÇokNet. Bugünün ihtiyaçlarını bilen, yarının eğitimini bugünden inşa etmeyi hedefleyen bir sistem.
              Çünkü şuna inanıyoruz: Doğru yapı, doğru içerik ve doğru destek bir araya geldiğinde, başarı sadece bir hedef değil, sürdürülebilir bir yolculuk olur.
            </Typography>
          </Box>
        </Stack>
        <TimelineHowItStarted />
        {/* Values Section */}
        <Box sx={{ mb: 8 }}>
          <Stack
            spacing={4}
            alignItems="center"
            sx={{
              textAlign: "center",
              mb: 6,
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "28px", md: "36px" },
                fontWeight: 700,
                color: "#111827",
                lineHeight: 1.2,
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              ÇOKNET'in Değerleri
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: 400,
                color: "#6B7280",
                lineHeight: "28px",
                maxWidth: "600px",
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Eğitim anlayışımızda güven, başarı ve teknoloji ön planda:
            </Typography>
          </Stack>

          {/* Values Grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                lg: "1fr 1fr 1fr",
              },
              gap: 4,
              mb: 6,
            }}
          >
            {companyValues.map((value, index) => (
              <ValueCard
                key={index}
                title={value.title}
                description={value.description}
                icon={value.icon}
                color={value.color}
              />
            ))}
          </Box>
        </Box>

        {/* Bottom CTA Section */}
        <Card
          sx={{
            background: "linear-gradient(135deg, #FF9500 0%, #F6EB23 100%)",
            borderRadius: "20px",
            p: { xs: 4, md: 6 },
            border: "none",
            textAlign: "center",
            color: "white",
            boxShadow: "0px 16px 48px rgba(255, 149, 0, 0.25)",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "24px", md: "32px" },
              fontWeight: 700,
              lineHeight: "40px",
              mb: 2,
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            Eğitimde Dijital Dönüşümün Öncüsüyüz
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "16px", md: "18px" },
              fontWeight: 400,
              lineHeight: "28px",
              mb: 4,
              maxWidth: "600px",
              mx: "auto",
              opacity: 0.95,
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            Her öğrencinin başarıya ulaşması için teknoloji ve eğitimi bir araya
            getiriyoruz. Geleceğin eğitim deneyimini bugünden yaşayın.
          </Typography>
        </Card>
      </Container>
    </Box>
  );
}
export default AboutPage;