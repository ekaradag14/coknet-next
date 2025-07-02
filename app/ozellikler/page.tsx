"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import AccordionSection from "../components/AccordionSection";
const bireyselCalismaPlaniImage = "/feature-cards/bireysel-calisma-plani.png";
const canliMentorDestegiImage = "/feature-cards/canli-mentor-destegi.png";
const kisiselEgitimIcerikleriImage = "/feature-cards/kisisel-egitim-icerikleri.png";
const rehberlikHizmetiImage = "/feature-cards/rehberlik-hizmeti.png";
const adaptifOgrenmeTeknolojisiImage = "/feature-cards/adaptif-ogrenme-teknolojisi.png";
const ebeveynBilgilendirmeSistemiImage = "/feature-cards/ebeveyn-bilgilendirme-sistemi.png";

const product1 = "/product1.png";
const product3 = "/product3.png";
const product4 = "/product4.png";
const product5 = "/product5.png";
const product6 = "/product6.png";
import Link from "next/link";

// Feature Card Component
interface FeatureCardProps {
  title: string;
  description: string;
  gradientColors: string[];
  image: string;
  imageAlt: string;
}


  const tabContent = [
    {
      id: "hedef-belirleme",
      label: "Hedef",
      title: "Kişiselleştirilmiş Hedef Belirleme",
      description:
        "Kayıt Olurken Hedefine Göre Özelleştirme\nKayıt sürecinde öğrencilerin hedefledikleri üniversite ve bölümleri seçerek platformun sunduğu içerikleri buna göre kişiselleştirmesi sağlanır.",
      features: [
        "Hedefe yönelik çalışma planı",
        "Üniversite ve bölüm filtreleme",
        "Burslu / Ücretsiz seçeneklerle detaylı seçim",
        "Kolay ve yönlendirici kayıt deneyimi",
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 3H21V7H3V3Z" fill="white" />
          <path d="M3 9H21V13H3V9Z" fill="white" />
          <path d="M3 15H15V19H3V15Z" fill="white" />
          <path d="M18 15H21V19H18V15Z" fill="white" />
        </svg>
      ),
    },
    {
      id: "genis-ders-yelpazesi",
      label: "Dersler",
      title: "Geniş Ders Yelpazesi",
      description:
        "Zengin Konu Seçenekleri\nÖğrenciler, TYT ve AYT düzeyinde birçok derse tek panel üzerinden kolayca erişebilir, tüm içerikleri bir arada görüntüleyebilir.",
      features: [
        "Tüm dersleri tek panelde görüntüleme",
        "TYT ve AYT etiketli içerik ayrımı",
        "Video, soru ve ödevle desteklenen kaynaklar",
        "Renk kodlu ders kartları ile kolay ayırt edilebilirlik",
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      id: "ozel-deneme-sinavlari",
      label: "Deneme",
      title: "Kişiye Özel Deneme Sınavları",
      description:
        "Sana Uygun Sınavlarla Başarıyı Artır\nSadece senin seviyene, hedeflerine ve eksik konularına göre hazırlanmış deneme sınavlarıyla daha etkili bir hazırlık süreci yaşa.",
      features: [
        "Akıllı algoritmalarla belirlenen soru setleri",
        "Doğru, yanlış, boş analizleriyle detaylı geri bildirim",
        "Her soru için anında çözüm videosu",
        "Başarı yüzdesi ve net hesaplama takibi",
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      id: "akilli-calisma-programi",
      label: "Program",
      title: "Akıllı Çalışma Programı",
      description:
        "Zamanını Verimli Yönet, Hedeflerine Ulaş\nKişisel hedeflerine göre şekillenen dinamik çalışma programıyla, günün hangi saatinde ne çalışacağını önceden planlayabilir ve ilerlemeni adım adım takip edebilirsin.",
      features: [
        "Günlük ve haftalık görev planlaması",
        "Tamamlanan içeriklerle anlık ilerleme takibi",
        "Video, test ve ödev bazlı içerik kontrolü",
        "Tüm dersleri tek ekrandan yönetme kolaylığı",
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      id: "detayli-sinav-analizi",
      label: "Analiz",
      title: "Detaylı Sınav Analizi",
      description:
        "Her Soruya Dair Performansını Görüntüle\nDeneme sınavlarından sonra verilen ayrıntılı analiz ekranı sayesinde, her ders özelinde doğru, yanlış ve boş sayını kolayca takip edebilir, hangi konularda gelişmen gerektiğini net şekilde görebilirsin.",
      features: [
        "Doğru / Yanlış / Boş dağılımı",
        "Her ders için ayrı net hesaplaması",
        "Geri dönüp Cevapları İncele seçeneği",
        "Gelişimini haftalık ve aylık bazda izleme imkânı",
      ],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z"
            fill="white"
          />
        </svg>
      ),
    },
  ];


function FeatureCard({
  title,
  description,
  gradientColors,
  image,
  imageAlt,
}: FeatureCardProps) {
  return (
    <Card
      sx={{
        height: "100%",
        p: 3,
        borderRadius: "12px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)",
        border: "none",
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
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

const FeaturesPage = () => {
  "use client";
  const [activeTab, setActiveTab] = useState(0);

  const tabImages = [product5, product1, product3, product4, product6];

  const features = [
    {
      title: "Eksiksiz Kitap Seti",
      description:
        "İhtiyacın olan her şey tek sette kapında. Dokuz video defterle dersler kalıcı hale gelir. Dokuz özgün soru bankasıyla farklı soru tiplerine hakim olursun.\n\nDokuz Hedefe Götüren Sınav (HGS) sayesinde bilgi seviyeni anında görürsün. TYT ve AYT branş denemeleriyle sınav pratiği yap. Paragraf ve problemler kitapları netlerini yükseltir.",
      gradientColors: ["#F6EB23", "#FF9500"],
      image: kisiselEgitimIcerikleriImage,
      imageAlt: "Eksiksiz Kitap Seti",
    },
    {
      title: "Tek Platformda Tüm İçerik",
      description:
        "Binlerce video ve yüz binlerce soru artık elinin altında. 5200'den fazla ders anlatım videosuyla konulara eksiksiz hakim olursun. 100.000'den fazla video çözümlü soru, takıldığında yanında.\n\nÇıkmış sorular ve yeni nesil içerikler, sınav formatına tam uyum sağlar.",
      gradientColors: ["#1DB5BE", "#0891B2"],
      image: bireyselCalismaPlaniImage,
      imageAlt: "Tek Platformda Tüm İçerik",
    },
    {
      title: "Yapay Zekâ Destekli Akıllı Öğrenme",
      description:
        "ÇokNet'in yapay zekâsı, öğrenmeyi sana özel şekillendirir. Kişiselleştirilmiş bir çalışma planı, hedeflerine odaklanmanı sağlar. Anlık başarı ve gelişim takibiyle ilerlemeni adım adım izlersin.\n\nAdaptif öğrenme modelimizle en verimli çalışma düzenini yakalarsın. Seviyene göre ders ve konu yönlendirmesiyle boşuna zaman kaybetmezsin.",
      gradientColors: ["#10B981", "#059669"],
      image: adaptifOgrenmeTeknolojisiImage,
      imageAlt: "Yapay Zekâ Destekli Akıllı Öğrenme",
    },
    {
      title: "Gerçekçi Deneme Sınavları",
      description:
        "Sınav ortamını evine taşıyoruz. Türkiye geneli online deneme sınavlarıyla rakiplerin arasındaki yerini görürsün. Altı TYT, beş AYT dijital deneme, sınav deneyimini pekiştirir. \n\nAnlık sıralama ve başarı analiziyle gelişimin somutlaşır, sonraki hamleni belirlersin.",
      gradientColors: ["#8B5CF6", "#F6EB23"],
      image: ebeveynBilgilendirmeSistemiImage,
      imageAlt: "Gerçekçi Deneme Sınavları",
    },
    {
      title: "Bireysel Rehberlik Desteği",
      description:
        "Bu yolda yalnız kalmazsın. Uzman rehberlerimiz hep yanında. Hedef odaklı bireysel planlamayla hayallerine doğru ilerlersin. Rehberlik videolarıyla doğru stratejileri öğrenir, motivasyonunu korursun.",
      gradientColors: ["#F59E0B", "#D97706"],
      image: rehberlikHizmetiImage,
      imageAlt: "Bireysel Rehberlik Desteği",
    },
  ];

  const detailedFeatures = [
    {
      title: "TYT Tüm Dersler AYT Sayısal Paketi",
      description: `
        <strong>Zengin İçerikli Kitap Seti</strong>
        <ul>
          <li>9 adet Video Defter</li>
          <li>9 Adet Özgün Soru Bankası</li>
          <li>9 Adet HGS (Hedefe Götüren Sınavlar)</li>
          <li>TYT Branş Denemeleri</li>
          <li>AYT Branş Denemeleri</li>
          <li>Paragraf kitabı</li>
          <li>Problemler kitabı</li>
        </ul>
        <strong>Tek platformda Kapsamlı Dijital İçerikler</strong>
        <ul>
          <li>5200+ ders anlatım videosu</li>
          <li>100.000+ video çözümlü soru</li>
          <li>Çıkmış ve yeni nesil soru içerikleri</li>
        </ul>
        <strong>ÇOKNET'in gelişmiş yapay zeka destekli altyapısıyla:</strong>
        <ul>
          <li>Öğrenciye Özel Çalışma Planı</li>
          <li>Anlık Başarı ve Gelişim Takibi</li>
          <li>Kişiselleştirilmiş (Adaptif) Öğrenme</li>
          <li>Seviyene Uygun Ders ve Konu Önerileri</li>
        </ul>
        <strong>Özgün ve yeni nesil deneme sınavları</strong>
        <ul>
          <li>Türkiye Geneli Deneme Sınavları</li>
          <li>Online 6 TYT + 5 AYT denemesi</li>
          <li>Anlık sıralama ve başarı düzeyi analizi</li>
        </ul>
        <strong>Kişiselleştirilmiş rehberlik</strong>
        <ul>
          <li>Hedef odaklı planlama ve motivasyon desteği</li>
          <li>Rehberlik videolarıyla doğru motivasyon</li>
        </ul>
      `,
    },
    {
      title: "TYT Tüm Dersler AYT Eşit Ağırlık Paketi",
      description: `
        <strong>Zengin İçerikli Kitap Seti</strong>
        <ul>
          <li>9 adet Video Defter</li>
          <li>9 Adet Özgün Soru Bankası</li>
          <li>9 Adet HGS (Hedefe Götüren Sınavlar)</li>
          <li>TYT Branş Denemeleri</li>
          <li>AYT Branş Denemeleri</li>
          <li>Paragraf kitabı</li>
          <li>Problemler kitabı</li>
        </ul>
        <strong>Tek platformda Kapsamlı Dijital İçerikler</strong>
        <ul>
          <li>5200+ ders anlatım videosu</li>
          <li>100.000+ video çözümlü soru</li>
          <li>Çıkmış ve yeni nesil soru içerikleri</li>
        </ul>
        <strong>ÇOKNET'in gelişmiş yapay zeka destekli altyapısıyla:</strong>
        <ul>
          <li>Öğrenciye Özel Çalışma Planı</li>
          <li>Anlık Başarı ve Gelişim Takibi</li>
          <li>Kişiselleştirilmiş (Adaptif) Öğrenme</li>
          <li>Seviyene Uygun Ders ve Konu Önerileri</li>
        </ul>
        <strong>Özgün ve yeni nesil deneme sınavları</strong>
        <ul>
          <li>Türkiye Geneli Deneme Sınavları</li>
          <li>6 TYT + 5 AYT denemesi</li>
          <li>Anlık sıralama ve başarı düzeyi analizi</li>
        </ul>
        <strong>Kişiselleştirilmiş rehberlik</strong>
        <ul>
          <li>Hedef odaklı planlama ve motivasyon desteği</li>
          <li>Rehberlik videolarıyla doğru motivasyon</li>
        </ul>
      `,
    },
    {
      title: "TYT Tüm Dersler AYT Sözel Paketi",
      description: `
        <strong>Zengin İçerikli Kitap Seti</strong>
        <ul>
          <li>9 adet Video Defter</li>
          <li>9 Adet Özgün Soru Bankası</li>
          <li>9 Adet HGS (Hedefe Götüren Sınavlar)</li>
          <li>TYT Branş Denemeleri</li>
          <li>AYT Branş Denemeleri</li>
          <li>Paragraf kitabı</li>
          <li>Problemler kitabı</li>
        </ul>
        <strong>Tek platformda Kapsamlı Dijital İçerikler</strong>
        <ul>
          <li>5200+ ders anlatım videosu</li>
          <li>100.000+ video çözümlü soru</li>
          <li>Çıkmış ve yeni nesil soru içerikleri</li>
        </ul>
        <strong>ÇOKNET'in gelişmiş yapay zeka destekli altyapısıyla:</strong>
        <ul>
          <li>Öğrenciye Özel Çalışma Planı</li>
          <li>Anlık Başarı ve Gelişim Takibi</li>
          <li>Kişiselleştirilmiş (Adaptif) Öğrenme</li>
          <li>Seviyene Uygun Ders ve Konu Önerileri</li>
        </ul>
        <strong>Özgün ve yeni nesil deneme sınavları</strong>
        <ul>
          <li>Türkiye Geneli Deneme Sınavları</li>
          <li>6 TYT + 5 AYT denemesi</li>
          <li>Anlık sıralama ve başarı düzeyi analizi</li>
        </ul>
        <strong>Kişiselleştirilmiş rehberlik</strong>
        <ul>
          <li>Hedef odaklı planlama ve motivasyon desteği</li>
          <li>Rehberlik videolarıyla doğru motivasyon</li>
        </ul>
      `,
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
      {/* Header Section */}
      <Container maxWidth="lg" sx={{ pt: { xs: 10, md: 16 }, pb: { xs: 6, md: 12 }, position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'flex-start', md: 'center' },
            justifyContent: 'space-between',
            gap: { xs: 4, md: 8 },
          }}
        >
          {/* Left: Text */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                color: '#111827',
                mb: 3,
                textAlign: 'left',
                lineHeight: 1.1,
              }}
            >
              Özellikler
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#374151',
                fontSize: { xs: '1.1rem', md: '1.25rem' },
                textAlign: 'left',
                maxWidth: 600,
              }}
            >
              Yapay zeka destekli eğitim platformumuzun sunduğu tüm özellikler ile başarıya ulaşın
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
            }}
          >
            <Box
              component="img"
              src={product1}
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
      </Container>
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
        {/* Feature Cards Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
            mb: 8,
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </Box>

        {/* Neler Sunuyoruz? Section (moved above AccordionSection) */}
        <Box
          sx={{
            backgroundColor: "#F9FAFB",
            borderRadius: "12px",
            p: { xs: 3, md: 4 },
            mb: 8,
          }}
        >
          {/* Header */}
          <Typography
            variant="h4"
            sx={{
              fontSize: "28px",
              fontWeight: 700,
              lineHeight: "36px",
              color: "#111827",
              textAlign: "center",
              mb: 2,
            }}
          >
            Neler Sunuyoruz?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "16px",
              lineHeight: "24px",
              color: "#374151",
              textAlign: "center",
              mb: 4,
              maxWidth: "700px",
              mx: "auto",
            }}
          >
            ÇokNet'in sunduğu tüm özellikleri görüntüleyin.
          </Typography>

          {/* Tab Navigation */}
          <Box
            sx={{
              backgroundColor: "#FFF",
              borderRadius: "12px",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.06)",
              p: 1,
              mb: 4,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              flexWrap: { xs: "nowrap", md: "wrap" },
              gap: 1,
              justifyContent: { xs: "stretch", md: "center" },
            }}
          >
            {tabContent.map((tab, index) => (
              <Button
                key={index}
                onClick={() => setActiveTab(index)}
                sx={{
                  backgroundColor:
                    activeTab === index ? "#FF9500" : "transparent",
                  color: activeTab === index ? "#FFF" : "#374151",
                  borderRadius: "8px",
                  px: 3,
                  py: 1.5,
                  fontSize: "14px",
                  fontWeight: 600,
                  textTransform: "none",
                  minWidth: { xs: "100%", md: "140px" },
                  width: { xs: "100%", md: "auto" },
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor:
                      activeTab === index
                        ? "#FF9500"
                        : "rgba(255, 149, 0, 0.1)",
                  },
                }}
              >
                {tab.icon}
                <span style={{ marginLeft: 8 }}>{tab.label}</span>
              </Button>
            ))}
          </Box>

          {/* Content Area */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: 4,
              mb: 4,
            }}
          >
            {/* Left Content */}
            <Box
              sx={{
                backgroundColor: "#FFF",
                borderRadius: "12px",
                boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.08)",
                p: 4,
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "8px",
                    background:
                      "linear-gradient(90deg, #FF9500 0%, #FF7A00 100%)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 2,
                  }}
                >
                  {tabContent[activeTab].icon}
                </Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "20px",
                    fontWeight: 700,
                    lineHeight: "28px",
                    color: "#111827",
                  }}
                >
                  {tabContent[activeTab].title}
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "14px",
                  lineHeight: "20px",
                  color: "#374151",
                  mb: 3,
                }}
              >
                {tabContent[activeTab].description}
              </Typography>
              <Stack spacing={1}>
                {tabContent[activeTab].features.map((item, index) => (
                  <Box
                    key={index}
                    sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                  >
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        backgroundColor: "#FF9500",
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "13px",
                        lineHeight: "19.5px",
                        color: "#374151",
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>

            {/* Right Image Card (replaces statistics) */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 2,
                boxShadow: '0px 8px 56px rgba(17, 24, 39, 0.2)',
                minHeight: 240,
                height: '100%',
                width: '100%',
                overflow: 'hidden',
              }}
            >
              <Box
                component="img"
                src={tabImages[activeTab]}
                alt={tabContent[activeTab].title}
                sx={{
                  width: '100%',
                  height: '100%',
                  maxHeight: 330,
                  borderRadius: 2,
                  boxShadow: 'none',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* Detaylı Özellik Açıklamaları Section (AccordionSection) */}
        <AccordionSection
          title="Detaylı Özellik Açıklamaları"
          items={detailedFeatures}
          backgroundColor="#F9FAFB"
        />

        {/* CTA Section */}
        <Box
          sx={{
            textAlign: "center",
            backgroundColor: "#F9FAFB",
            borderRadius: "16px",
            p: { xs: 3, md: 4 },
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: "32px",
              color: "#111827",
              mb: 2,
            }}
          >
            ÇokNet'i Denemeye Hazır Mısınız?
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "16px",
              lineHeight: "24px",
              color: "#374151",
              mb: 3,
              maxWidth: "500px",
              mx: "auto",
            }}
          >
            Yapay zeka destekli eğitim platformumuzla tanışın ve farkı hemen
            deneyimleyin.
          </Typography>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="outlined"
              component={Link}
              href="/tanisma-formu"
              sx={{
                backgroundColor: "#FF9500",
                borderRadius: "8px",
                px: 3,
                color: 'white',
                border: 'none',
                py: 1.5,
                fontSize: "16px",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#E6850E",
                },
              }}
            >
            Öncelikli Erişimi Kaçırma
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#FF9500",
                color: "#FF9500",
                borderRadius: "8px",
                px: 3,
                py: 1.5,
                fontSize: "16px",
                fontWeight: 600,
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "rgba(255, 149, 0, 0.05)",
                  borderColor: "#E6850E",
                },
              }}
            >
              Daha Fazla Bilgi
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
export default FeaturesPage;