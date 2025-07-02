import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import SecurityIcon from "@mui/icons-material/Security";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Image from "next/image";
const product = "/product3.png";

// Reusable FeatureCard component
interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  listItems?: string[];
  avatarBg?: string;
  hoverColor?: string;
  hoverShadow?: string;
}

function FeatureCard({ icon, title, subtitle, description, listItems, avatarBg, hoverColor, hoverShadow }: FeatureCardProps) {
  return (
    <Card
      sx={{
        height: "100%",
        border: "2px solid #E5E7EB",
        borderRadius: "16px",
        boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.08)",
        backgroundColor: "#fff",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-4px)",
          borderColor: hoverColor,
          boxShadow: hoverShadow,
        },
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: { xs: "center", md: "flex-start" }, mb: 3 }}>
          <Box
            sx={{
              width: 56,
              height: 56,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mr: { xs: 0, md: 2 },
              mb: { xs: 2, md: 0 },
              p: 0,
              background: 'none',
              boxShadow: 'none',
            }}
          >
            {icon}
          </Box>
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                lineHeight: 1.5,
                color: "#111827",
                fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                mb: 0.5,
              }}
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                color: "#6B7280",
                fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              {subtitle}
            </Typography>
          </Box>
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: 1.6,
            color: "#374151",
            fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            textAlign: { xs: "center", md: "left" },
            mb: listItems ? 3 : 0,
          }}
        >
          {description}
        </Typography>
        {listItems && (
          <List sx={{ p: 0 }}>
            {listItems.map((item, idx) => (
              <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                <ListItemIcon sx={{ minWidth: 24 }}>
                  <FiberManualRecordIcon sx={{ fontSize: 6, color: "#10B981" }} />
                </ListItemIcon>
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#374151",
                    fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                />
              </ListItem>
            ))}
          </List>
        )}
      </CardContent>
    </Card>
  );
}

export default function FeatureHighlightsSection() {
  const featureCards = [
    {
      icon: <img src="/icons-mini/adaptif-ogrenmenin-gucu.png" alt="Adaptif Öğrenmenin Gücü" style={{ width: '100%', height: '100%' }} />,
      title: "Adaptif Öğrenmenin Gücü",
      subtitle: "Yapay zeka destekli sistem",
      description:
        "Öğrenme, statik bir süreç değildir. ÇokNet'in yapay zeka destekli adaptif öğrenme metodu ile içeriklerimiz, senin öğrenme tarzına, bilgi seviyene ve hatta moduna göre dinamik olarak kendini uyarlar. Sanki sana özel bir öğretmen her an yanında, en verimli öğrenme deneyimini sunmak için sürekli kendini yeniliyor.",
      avatarBg: "rgba(255, 59, 48, 0.16)",
      hoverColor: "#F87171",
      hoverShadow: "0px 8px 24px 0px rgba(248, 113, 113, 0.15)",
    },
    {
      icon: <img src="/icons-mini/anlik-performans-kocu.png" alt="Anlık Performans Koçun" style={{ width: '100%', height: '100%' }} />,
      title: "Anlık Performans Koçun",
      subtitle: "Kazanım bazlı analiz",
      description:
        "Sıradan sınavları unut. ÇokNet, kazanım bazlı derinlemesine analizlerle senin anlık bilgi düzeyini ve eksiklerini anında tespit eder. Güçlü yönlerini geliştirir, zayıf noktalarına ışık tutar. Gelişimini şeffaf raporlarla takip eder, bir sonraki adımın ne olacağını her an bilirsin.",
      avatarBg: "rgba(255, 149, 0, 0.16)",
      hoverColor: "#FDBA74",
      hoverShadow: "0px 8px 24px 0px rgba(253, 186, 116, 0.15)",
    },
    {
      icon: <img src="/icons-mini/kisisel-yol-haritan.png" alt="Kişisel Yol Haritan" style={{ width: '100%', height: '100%' }} />,
      title: "Kişisel Yol Haritan",
      subtitle: "Size özel ders planları",
      description:
        "Herkesin öğrenme tarzı biriciktir, senin de öyle. ÇokNet, sana özel oluşturulan ders planlarıyla hedefine adım adım ilerlemeni sağlar. Eksik konularına özel videolar, seçkin soru çözümleri ve interaktif içeriklerle öğrenme sürecini senin için maksimum verimle tasarlarız.",
      avatarBg: "rgba(245, 158, 11, 0.16)",
      hoverColor: "#FACC15",
      hoverShadow: "0px 8px 24px 0px rgba(250, 204, 21, 0.15)",
    },
    {
      icon: <img src="/icons-mini/coknet-rehberlik-sistemi.png" alt="ÇOKNET Rehberlik Sistemi" style={{ width: '100%', height: '100%' }} />,
      title: "ÇOKNET Rehberlik Sistemi",
      subtitle: "Profesyonel rehberlik",
      description:
        "Sadece sınava değil, hayata da hazırlanın! ÇOKNET'te başarı, sadece konu çalışmakla sınırlı değil. Öğrencilerimizin akademik başarısının yanı sıra, psikolojik sağlamlık, motivasyon yönetimi ve hedef bilinci kazanmaları için profesyonel bir rehberlik sistemi sunuyoruz.",
      avatarBg: "rgba(16, 185, 129, 0.16)",
      hoverColor: "#34D399",
      hoverShadow: "0px 8px 24px 0px rgba(52, 211, 153, 0.15)",
      listItems: [
        "Birebir mentor görüşmeleri",
        "Hedef belirleme ve takip",
        "Zaman yönetimi ve ders planlaması",
        "Sınav kaygısı ve stresle başa çıkma yolları",
      ],
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 4, md: 8 },
        backgroundColor: "#fff",
      }}
    >
      <Container maxWidth="lg">
        {/* Title Section - now right aligned with image on left */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            gap: { xs: 4, md: 8 },
            mb: { xs: 2, md: 8 },
          }}
        >
          {/* Left: Tilted Product Image */}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: { xs: 'flex-start', md: 'flex-start' },
              alignItems: 'center',
              minWidth: 0,
              px: { xs: 2, md: 0 },
            }}
          >
            <Box
              sx={{
                width: '100%',
                maxWidth: 500,
                borderRadius: 2,
                boxShadow: "0px 8px 56px rgba(17, 24, 39, 0.2)",
                background: 'white',
                overflow: 'hidden',
                transform: 'rotate(-8deg)',
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                  transform: 'rotate(-8deg) translateY(-8px)',
                },
              }}
            >
              <Image
                src={product}
                alt="ÇokNet Ürün Ekran Görüntüsü"
                width={500}
                height={320}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </Box>
          </Box>
          {/* Right: Text */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "32px", md: "48px" },
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#111827",
                fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                mb: 2,
                mt: 2,
                display: { xs: 'block', md: 'none' },
                textAlign: 'left',
              }}
            >
              ÇokNet ile Geleceğin Senin Kontrolünde
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "32px", md: "48px" },
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#111827",
                fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                mb: 1,
                display: { xs: 'none', md: 'block' },
                textAlign: 'right',
              }}
            >
              ÇokNet ile Geleceğin
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "32px", md: "48px" },
                fontWeight: 700,
                lineHeight: 1.2,
                color: "#111827",
                display: { xs: 'none', md: 'block' },
                fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                mb: 4,
                textAlign: 'right',
              }}
            >
              Senin Kontrolünde
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: 1.6,
                color: "#374151",
                fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                maxWidth: "581px",
                ml: { md: 'auto' },
                textAlign: {xs:'left',md:'right'},
              }}
            >
              Öğrenme yolculuğunda yanındayız, sadece bir sınav platformu değil, senin için tasarlanmış akıllı bir öğrenme partneri. İşte bu yüzden ÇokNet farkıyla hedeflerine ulaşacaksın:
            </Typography>
          </Box>
        </Box>

        {/* Feature Cards Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
            gap: 4,
            maxWidth: '1200px',
            pt:8,
            mx: 'auto',
          }}
        >
          {featureCards.map((props, idx) => (
            <FeatureCard key={props.title} {...props} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
