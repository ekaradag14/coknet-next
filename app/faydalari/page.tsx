"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useState } from "react";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PersonIcon from "@mui/icons-material/Person";
import FlexibilityIcon from "@mui/icons-material/Tune";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import TimelineIcon from "@mui/icons-material/Timeline";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`benefits-tabpanel-${index}`}
      aria-labelledby={`benefits-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
    </div>
  );
}

interface BenefitItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

function BenefitItem({ title, description, icon, color }: BenefitItemProps) {
  return (
    <Box sx={{ mb: 3 }}>
      <Stack direction="row" spacing={2} alignItems="flex-start" sx={{ mb: 1 }}>
        <Avatar
          sx={{
            width: 32,
            height: 32,
            backgroundColor: color,
            flexShrink: 0,
          }}
        >
          {icon}
        </Avatar>
        <Typography
          variant="h6"
          sx={{
            fontSize: "16px",
            fontWeight: 600,
            lineHeight: "24px",
            color: "#111827",
          }}
        >
          {title}
        </Typography>
      </Stack>
      <Typography
        variant="body2"
        sx={{
          fontSize: "14px",
          lineHeight: "20px",
          color: "#374151",
          ml: 6, // Align with title after avatar
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

const BenefitsPage = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const studentBenefits = [
    {
      title: "Kişisel Çalışma Planı",
      description:
        "Hedeflerinize ve bilgi seviyenize göre şekillenmiş ders programları.",
      icon: <PersonIcon sx={{ color: "white", fontSize: 18 }} />,
      color: "#FF9500",
    },
    {
      title: "Anlık Öğrenci Analizi",
      description:
        "Denemeler ve sistem içi etkileşimlerle düzenli gelişim takibi.",
      icon: <AssessmentIcon sx={{ color: "white", fontSize: 18 }} />,
      color: "#1DB5BE",
    },
    {
      title: "Adaptif Öğrenme Altyapısı",
      description:
        "Öğrenme hızınıza ve eksiklerinize otomatik uyum sağlayan içerikler.",
      icon: <TrendingUpIcon sx={{ color: "white", fontSize: 18 }} />,
      color: "#10B981",
    },
    {
      title: "Yapay Zeka Destekli Rehberlik",
      description: "Eksiklerinizi analiz eder, tamamlama için öneriler sunar.",
      icon: <SupportAgentIcon sx={{ color: "white", fontSize: 18 }} />,
      color: "#8B5CF6",
    },
    {
      title: "Zengin Video ve Soru Arşivi",
      description:
        "5200+ ders videosu ve 100.000+ video çözümlü soruyla konuları pekiştirirsiniz.",
      icon: <LibraryBooksIcon sx={{ color: "white", fontSize: 18 }} />,
      color: "#F59E0B",
    },
    {
      title: "Güncel Soru Formatları",
      description:
        "Çıkmış ve MEB uyumlu yeni nesil sorularla sınav pratiğinizi artırırsınız.",
      icon: <MenuBookIcon sx={{ color: "white", fontSize: 18 }} />,
      color: "#EF4444",
    },
    {
      title: "Türkiye Geneli Denemeler",
      description:
        "TYT ve AYT denemeleriyle sıralamanızı takip eder, sınav stratejilerinizi geliştirirsiniz.",
      icon: <TimelineIcon sx={{ color: "white", fontSize: 18 }} />,
      color: "#6366F1",
    },
    {
      title: "Kapsamlı Kitap Desteği",
      description:
        "Video defterler, soru bankaları ve Hedefe Götüren Sınavlar ile basılı kaynak desteği sağlar.",
      icon: <MenuBookIcon sx={{ color: "white", fontSize: 18 }} />,
      color: "#059669",
    },
    {
      title: "Bire Bir Koçluk",
      description:
        "Özel koçluk görüşmeleriyle motivasyonunuz artar, hedefleriniz netleşir.",
      icon: <SupervisorAccountIcon sx={{ color: "white", fontSize: 18 }} />,
      color: "#DC2626",
    },
    {
      title: "Net Artırıcı Kamplar",
      description:
        "Paragraf, problemler ve yaz kamplarıyla net sayınız doğrudan yükselir.",
      icon: <FlexibilityIcon sx={{ color: "white", fontSize: 18 }} />,
      color: "#7C3AED",
    },
  ];

  const parentBenefits = [
    {
      title: "Anlık Gelişim Takibi",
      description:
        "Veli paneli üzerinden çocuğunuzun ders izleme süresini, soru sayısını, deneme sonuçlarını anlık takip edebilirsiniz.",
      icon: <TimelineIcon sx={{ color: "white", fontSize: 18 }} />,
      color: "#FF9500",
    },
    {
      title: "Güvenli Eğitim",
      description:
        "Tüm içerikler tek sistemde olduğu için ek kaynak arama derdiniz olmaz.",
      icon: <MenuBookIcon sx={{ color: "white", fontSize: 18 }} />,
      color: "#10B981",
    },
    {
      title: "Yapay Zeka ile Eksik Tespiti",
      description:
        "Sistemin belirlediği analizlerle çocuğunuzun nereye odaklanması gerektiğini net görürsünüz.",
      icon: <AssessmentIcon sx={{ color: "white", fontSize: 18 }} />,
      color: "#8B5CF6",
    },
    {
      title: "Rehberlik ve Koçluk Desteğiyle İç Huzuru",
      description:
        "Çocuğunuzun yalnız olmadığını, sürecin uzmanlarca yönetildiğini bilirsiniz.",
      icon: <SupportAgentIcon sx={{ color: "white", fontSize: 18 }} />,
      color: "#1DB5BE",
    },
    {
      title: "Deneme Sonuçlarıyla Hedefe Yakınlık",
      description:
        "Türkiye geneli sıralamalar ve analizlerle çocuğunuzun ilerlemesini objektif izlersiniz.",
      icon: <TrendingUpIcon sx={{ color: "white", fontSize: 18 }} />,
      color: "#F59E0B",
    },
    {
      title: "Zaman ve Kaynak Tasarrufu",
      description:
        "Farklı platform veya kurslara ihtiyaç duymadan, evden tüm içeriklere erişim sağlarsınız.",
      icon: <FlexibilityIcon sx={{ color: "white", fontSize: 18 }} />,
      color: "#EF4444",
    },
    {
      title: "Motivasyon Sürekliliği",
      description:
        "Düzenli takip ve bildirimlerle çocuğunuzun motivasyonu yüksek kalır, siz de sürecin içinde olursunuz.",
      icon: <PersonIcon sx={{ color: "white", fontSize: 18 }} />,
      color: "#6366F1",
    },
    {
      title: "Güvenilir Rehberlik",
      description:
        "Rehberlik videoları ve özel planlarla eğitim sürecinin pedagojik olarak doğru ilerlediğinden emin olursunuz.",
      icon: <SupervisorAccountIcon sx={{ color: "white", fontSize: 18 }} />,
      color: "#059669",
    },
  ];

  const coknetValues = [
    {
      title: "Kişiye Özel Eğitim Planı",
      description:
        "Her öğrenciye özel, yapay zeka destekli ders çalışma planı.",
      icon: <PersonIcon sx={{ color: "white", fontSize: 16 }} />,
      color: "#8B5CF6",
    },
    {
      title: "Esnek ve Etkili Öğrenme Seçenekleri",
      description:
        "5 farklı çalışma modu, video çözümlü sorular, quizler, mini testler ve canlı rehberlik ile öğrencilere her ortamda destek.",
      icon: <FlexibilityIcon sx={{ color: "white", fontSize: 16 }} />,
      color: "#10B981",
    },
    {
      title: "Gelişmiş İçerik ve Kaynaklar",
      description:
        "Kazanımlandırılmış soru havuzları, konu anlatım kitapları, online deneme sınavları ve daha fazlası.",
      icon: <LibraryBooksIcon sx={{ color: "white", fontSize: 16 }} />,
      color: "#F59E0B",
    },
    {
      title: "Ebeveyn Desteği",
      description:
        "AVBES sayesinde, veliler öğrencilerinin gelişimlerini gerçek zamanlı olarak takip edebilir.",
      icon: <SupervisorAccountIcon sx={{ color: "white", fontSize: 16 }} />,
      color: "#EF4444",
    },
    {
      title: "Sürekli Gelişim",
      description:
        "Hata Defterim, Kişiye Özel Soru Bankası ve Enneagram testleri ile her öğrencinin öğrenme süreci sürekli iyileştirilir.",
      icon: <TimelineIcon sx={{ color: "white", fontSize: 16 }} />,
      color: "#1DB5BE",
    },
    {
      title: "Öğrenci Odaklı Rehberlik ve Koçluk",
      description:
        "Bir Bilene Sor ve Masterclass çözümleri ile öğrencilere sürekli rehberlik ve koçluk desteği sunulur.",
      icon: <SupportAgentIcon sx={{ color: "white", fontSize: 16 }} />,
      color: "#A855F7",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#FFF",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Background Circles */}
      <Box
        sx={{
          position: "absolute",
          top: "250px",
          left: "100px",
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
          right: "90px",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          background: "rgba(255, 149, 0, 0.15)",
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
          spacing={3}
          alignItems="center"
          sx={{
            textAlign: "center",
            mb: 8,
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "32px", md: "48px" },
              fontWeight: 700,
              color: "#111827",
              lineHeight: 1,
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            Faydaları
          </Typography>

          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              color: "#374151",
              lineHeight: "28px",
              textAlign: "center",
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            ÇokNet platformunun öğrenciler, veliler ve eğitim sürecine sağladığı
            kapsamlı faydaları keşfedin
          </Typography>
        </Stack>

        {/* Navigation Tabs */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 8,
          }}
        >
          <Box
            sx={{
              backgroundColor: "#F9FAFB",
              borderRadius: "12px",
              p: 0.5,
              display: "inline-block",
            }}
          >
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              sx={{
                minHeight: "auto",
                "& .MuiTabs-indicator": {
                  display: "none",
                },
                "& .MuiTab-root": {
                  minHeight: "auto",
                  px: 2.5,
                  py: 1.5,
                  margin: 0,  
                  marginRight: 1,
                  fontSize: "14px",
                  fontWeight: 600,
                  textTransform: "none",
                  color: "#6B7280",
                  borderRadius: "8px",
                  fontFamily:
                    "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  "&.Mui-selected": {
                    backgroundColor: "#FFF",
                    color: "#111827",
                    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                  },
                },
              }}
            >
              <Tab label="Öğrenciye Ne Kazandırır?" />
              <Tab label="Veliler İçin Faydalar" />
            </Tabs>
          </Box>
        </Box>

        {/* Tab Panels */}
        <Box sx={{ mb: 8 }}>
          {/* Student Benefits Tab */}
          <TabPanel value={selectedTab} index={0}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "28px",
                  fontWeight: 700,
                  lineHeight: "36px",
                  color: "#111827",
                  textAlign: "center",
                  mb: 2,
                  fontFamily:
                    "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                ÇOKNET Öğrenciye Ne Kazandırır?
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#6B7280",
                  lineHeight: "24px",
                  textAlign: "center",
                  mb: 4,
                  fontFamily:
                    "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                ÇOKNET size özel bir öğrenme deneyimi sunar:
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                  gap: 3,
                  maxWidth: "1000px",
                  mx: "auto",
                }}
              >
                {studentBenefits.map((benefit, index) => (
                  <BenefitItem key={index} {...benefit} />
                ))}
              </Box>
            </Box>
          </TabPanel>

          {/* Parent Benefits Tab */}
          <TabPanel value={selectedTab} index={1}>
            <Box>
              <Typography
                variant="h4"
                sx={{
                  fontSize: "28px",
                  fontWeight: 700,
                  lineHeight: "36px",
                  color: "#111827",
                  textAlign: "center",
                  mb: 2,
                  fontFamily:
                    "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                Veliler İçin ÇOKNET'in Faydaları
              </Typography>
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: 400,
                  color: "#6B7280",
                  lineHeight: "24px",
                  textAlign: "center",
                  mb: 4,
                  fontFamily:
                    "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                ÇOKNET, velilere de süreçte tam destek sunar:
              </Typography>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                  gap: 3,
                  maxWidth: "1000px",
                  mx: "auto",
                }}
              >
                {parentBenefits.map((benefit, index) => (
                  <BenefitItem key={index} {...benefit} />
                ))}
              </Box>
            </Box>
          </TabPanel>
        </Box>

      </Container>
    </Box>
  );
}
export default BenefitsPage;