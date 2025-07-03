"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/X";
import { useState, useEffect } from "react";
import AccordionSection from "../components/ui/AccordionSection";
import IconButton from "@mui/material/IconButton";

// @ts-ignore
declare global {
  interface Window {
    grecaptcha: any;
  }
}

const ContactPage = () => {
  "use client";
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [expandedFAQ, setExpandedFAQ] = useState<string | false>(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  useEffect(() => {
    // Load reCAPTCHA v3 script
    const scriptId = 'recaptcha-v3-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.google.com/recaptcha/api.js?render=6Leh3XQrAAAAAHq0f370q_OdYaBI_JcBuQBT0X0k';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleInputChange = (field: string) => (event: any) => {
    setFormData((prev) => ({
      ...prev,
      [field]: event.target.value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    // Execute reCAPTCHA v3
    if (window.grecaptcha) {
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute('6Leh3XQrAAAAAHq0f370q_OdYaBI_JcBuQBT0X0k', { action: 'submit' }).then((token: string) => {
          setRecaptchaToken(token);
          // Now you can include the token in your form submission (e.g., send to backend)
          console.log('reCAPTCHA v3 token:', token);
          // ... your existing submit logic (e.g., send formData + token to API)
        });
      });
    } else {
      alert('reCAPTCHA yüklenemedi. Lütfen sayfayı yenileyin.');
    }
  };

  const handleFAQChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpandedFAQ(isExpanded ? panel : false);
    };

  const faqData = [
    {
      title: "ÇokNet Nedir?",
      description:
        "ÇokNet, YKS'ye hazırlanan öğrencilere yönelik kişiselleştirilmiş dijital bir öğrenme platformudur. Video içerikler, akademik takip sistemleri ve eğitim koçu desteği sunarak, öğrencilere sadece sınav başarısı değil, kişisel gelişim ve özgüven kazandırmayı amaçlar.",
    },
    {
      title: "ÇokNet Nasıl Çalışır?",
      description:
        "Öğrenciler, platforma giriş yaptıktan sonra, kişiye özel çalışma planları ile videoları izler, test çözer ve eğitim koçlarıyla birebir görüşmeler yaparak süreci takip eder. Adaptif öğrenme teknolojisi sayesinde her öğrenciye özgü, veri temelli geri bildirim sunulur ve sürekli destek sağlanır.",
    },
    {
      title: "Eğitim Koçu Kimdir, Ne Yapar?",
      description:
        "Eğitim koçları, öğrencinin sınav sürecinde motivasyonunu artırmak, hedeflerini belirlemek ve süreç takibini sağlamak için rehberlik eder. Koçlar, deneyimli öğretmenler veya bu süreçten geçmiş üniversite öğrencileri olabilir.",
    },
    {
      title: "Eğitim Koçlarıyla Nasıl İletişim Kurabilirim?",
      description:
        "Platform açıldıktan ve siz kayıt olduktan sonra, size uygun bir eğitim koçu atanır. Görüşmeler, platform üzerinden online olarak yapılır ve randevu alarak iletişime geçebilirsiniz.",
    },
    {
      title: "Görüşmeler Ne Sıklıkla Gerçekleşir?",
      description:
        "Çoğu zaman, ayda bir veya iki kez planlı birebir görüşmeler yapılır. İhtiyaca göre ek görüşme talepleri de değerlendirilebilir.",
    },
    {
      title: "Akademik İçerikler Kimler Tarafından Hazırlanıyor?",
      description:
        "İçerikler, alanında deneyimli öğretmenler ve eğitim uzmanları tarafından hazırlanır. Pedagojik doğruluğu yüksek ve sade, etkili materyaller kullanılır.",
    },
    {
      title: "Temel Anlatım ile Zenginleştirilmiş Anlatım Arasındaki Fark Nedir?",
      description:
        "Temel anlatımlar, konunun özünü sade bir şekilde sunarken; zenginleştirilmiş anlatımlar, daha fazla örnek, detay ve farklı bakış açıları sunarak daha derin bir öğrenme deneyimi sağlar.",
    },
    {
      title: "ÇokNet'te Hangi Dersler Yer Alıyor?",
      description:
        "ÇokNet, TYT ve AYT kapsamındaki tüm dersleri sunar: Türkçe, Matematik, Fizik, Kimya, Biyoloji, Tarih, Coğrafya, Felsefe, Din Kültürü ve Edebiyat gibi tüm alan dersleri mevcuttur.",
    },
    {
      title: "Rehberlik Hizmeti Neleri Kapsar?",
      description:
        "Rehberlik, motivasyon, sınav kaygısı, zaman yönetimi ve verimli ders çalışma yöntemleri gibi konularda video ve yazılı içerikler sunar.",
    },
    {
      title: "Sadece Rehberlik veya Sadece İçerik Hizmeti Alabilir Miyim?",
      description:
        "Evet, ÇokNet'te, video içerik, rehberlik hizmeti ya da her ikisini içeren paket seçenekleri olacak.",
    },
    {
      title: "Koçluk ve Rehberlik Hizmeti Arasında Fark Var Mı?",
      description:
        "Koçluk, öğrencinin hedef takibi ve süreç planlaması üzerine odaklanırken; rehberlik, psikolojik dayanıklılık, motivasyon ve öğrenme alışkanlıklarına odaklanır.",
    },
    {
      title: "Görüşme Sonrasında Takip Nasıl Sağlanır?",
      description:
        "Eğitim koçları, her görüşme sonrasında öğrencinin gelişim ve hedef durumunu platforma not alır. Bu sayede, öğrencinin süreci şeffaf ve sürekli izlenebilir hale gelir.",
    },
    {
      title: "Net Takibi Nasıl Yapılıyor?",
      description:
        "Öğrenciler, çözdükleri testlerin sonuçlarını sisteme işler. Bu sayede branş branş gelişim izlenebilir ve eğitim koçları, öğrenciye uygun yönlendirme yapar.",
    },
    {
      title: "Hatalı Yapılan Sorulara Yönelik Sistem Nasıl Çalışır?",
      description:
        "Hatalı sorular, özel bir havuza aktarılır ve eksik konular belirlenir. Öğrencilere, konu tekrar videoları ve çözüm görselleri sunulur.",
    },
    {
      title: "ÇokNet Hangi Cihazlarda Kullanılabilir?",
      description:
        "ÇokNet, bilgisayar ve mobil cihazlarla uyumlu olarak çalışır. Tüm içerikler ve görüşmeler mobil uyumludur.",
    },
    {
      title: "Destek Ya Da Teknik Bir Sorun Yaşarsam Ne Yapmalıyım?",
      description:
        "Teknik ya da içerik ile ilgili sorunlarınız için, platformdaki destek merkezi aracılığıyla yardım alabilirsiniz. Ayrıca, canlı destek modülü ile anında çözüm alabilirsiniz.",
    },
    {
      title: "Ücretli mi? Üyelik seçenekleri nelerdir?",
      description:
        "ÇokNet, farklı fiyat seçenekleri ile sunulacaktır. Güncel fiyatlar çok yakında burada olacak. Kurumsal ihtiyaçlar için bizimle e-posta üzerinden veya iletişim formumuzdan iletişime geçebilirsiniz.",
    },
  ];

  const SOCIAL_LINKS = [
    {
      label: "YouTube",
      href: "https://www.youtube.com/@coknetiz",
      icon: <YouTubeIcon sx={{ color: "white", fontSize: 20 }} />,
      sx: {
        backgroundColor: "#FF0000",
        color: "white",
        borderRadius: "8px",
        border: "none",
        width: 42,
        height: 42,
        "&:hover": { backgroundColor: "#cc0000" },
      },
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/coknetiz/",
      icon: <InstagramIcon sx={{ fontSize: 20, color: "white" }} />,
      sx: {
        background:
          "linear-gradient(45deg, #FFDD55 0%, #FF543E 50%, #C837AB 100%)",
        color: "white",
        borderRadius: "8px",
        width: 42,
        border: "none",
        height: 42,
        "&:hover": { opacity: 0.8 },
      },
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@coknetiz",
      icon: <img src="/tiktok.png" alt="TikTok" width={18} height={18} />,
      sx: {
        backgroundColor: "#000000",
        color: "white",
        border: "none",
        borderRadius: "8px",
        width: 42,
        height: 42,
        "&:hover": { backgroundColor: "#333333" },
      },
    },
    {
      label: "X",
      href: "https://x.com/bizcoknetiz",
      icon: <TwitterIcon sx={{ fontSize: 20, color: "white" }} />,
      sx: {
        backgroundColor: "#23272F",
        color: "white",
        border: "none",
        borderRadius: "8px",
        width: 42,
        height: 42,
        "&:hover": { backgroundColor: "#333" },
      },
    },
  ];

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(90deg, rgba(255, 149, 0, 0.05) 0%, rgba(246, 235, 35, 0.05) 50%, #FFF8F0 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decorative Elements - Positioned to cover full page */}
      <Box
        sx={{
          position: "absolute",
          top: -50,
          left: -50,
          width: "200px",
          height: "200px",
          borderRadius: "50%",
          background: "rgba(246, 235, 35, 0.1)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: -100,
          right: -100,
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(255, 149, 0, 0.1)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "30%",
          left: "10%",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: "rgba(29, 181, 190, 0.08)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "15%",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: "rgba(246, 235, 35, 0.06)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "40%",
          right: "5%",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          background: "rgba(255, 149, 0, 0.08)",
        }}
      />

      {/* Hero Section */}
      <Box sx={{ py: { xs: 6, md: 8 }, position: "relative", zIndex: 1 }}>
        <Container maxWidth="lg">
          {/* Header */}
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "32px", md: "48px" },
                fontWeight: 700,
                color: "#111827",
                mb: 2,
                lineHeight: { xs: "40px", md: "56px" },
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              İletişim
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "16px", md: "18px" },
                lineHeight: 1.6,
                color: "#374151",
                maxWidth: "600px",
                mx: "auto",
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Sorularınız mı var? Size yardımcı olmaktan mutluluk duyarız.
              Bizimle iletişime geçin ve en kısa sürede size dönüş yapalım.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Container
        maxWidth="lg"
        sx={{ py: { xs: 4, md: 6 }, position: "relative", zIndex: 1 }}
      >
        {/* Main Content Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", lg: "2fr 1fr" },
            gap: { xs: 3, md: 4 },
            mb: { xs: 4, md: 6 },
          }}
        >
          {/* Left Column - Form and Map */}
          <Stack spacing={{ xs: 3, md: 4 }}>
            {/* Contact Form */}
            <Card
              sx={{
                borderRadius: "16px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
                p: { xs: 3, md: 4 },
                backgroundColor: "#FFF",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "20px", md: "24px" },
                  fontWeight: 700,
                  color: "#111827",
                  mb: 3,
                }}
              >
                Mesaj Gönder
              </Typography>

              <Box component="form" onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  <Box>
                    <InputLabel
                      sx={{
                        color: "#374151",
                        fontWeight: 600,
                        fontSize: "14px",
                        mb: 1,
                      }}
                    >
                      Ad
                    </InputLabel>
                    <TextField
                      fullWidth
                      placeholder="Adınızı girin"
                      value={formData.firstName}
                      onChange={handleInputChange("firstName")}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "8px",
                        },
                      }}
                    />
                  </Box>
                  <Box>
                    <InputLabel
                      sx={{
                        color: "#374151",
                        fontWeight: 600,
                        fontSize: "14px",
                        mb: 1,
                      }}
                    >
                      Soyad
                    </InputLabel>
                    <TextField
                      fullWidth
                      placeholder="Soyadınızı girin"
                      value={formData.lastName}
                      onChange={handleInputChange("lastName")}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "8px",
                        },
                      }}
                    />
                  </Box>

                  <Box>
                    <InputLabel
                      sx={{
                        color: "#374151",
                        fontWeight: 600,
                        fontSize: "14px",
                        mb: 1,
                      }}
                    >
                      E-posta Adresi
                    </InputLabel>
                    <TextField
                      fullWidth
                      type="email"
                      placeholder="ornek@email.com"
                      value={formData.email}
                      onChange={handleInputChange("email")}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "8px",
                        },
                      }}
                    />
                  </Box>

                  <Box>
                    <InputLabel
                      sx={{
                        color: "#374151",
                        fontWeight: 600,
                        fontSize: "14px",
                        mb: 1,
                      }}
                    >
                      Konu
                    </InputLabel>
                    <FormControl fullWidth>
                      <Select
                        value={formData.subject}
                        onChange={handleInputChange("subject")}
                        displayEmpty
                        sx={{
                          borderRadius: "8px",
                        }}
                      >
                        <MenuItem value="">Konu seçin</MenuItem>
                        <MenuItem value="genel">Genel Bilgi</MenuItem>
                        <MenuItem value="teknik">Teknik Destek</MenuItem>
                        <MenuItem value="satış">Satış</MenuItem>
                        <MenuItem value="ise">İş Birliği</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>


                  <Box >
                    <InputLabel
                      sx={{
                        color: "#374151",
                        fontWeight: 600,
                        fontSize: "14px",
                        mb: 1,
                      }}
                    >
                      Mesajınız
                    </InputLabel>
                    <TextField
                      fullWidth
               
                      value={formData.message}
                      onChange={handleInputChange("message")}

                    />
                  </Box>
                  <Button
                    type="submit"
                    variant="outlined"
                    fullWidth
                    sx={{
                      backgroundColor: "#FF9500",
                      borderRadius: "8px",
                      py: 1.5,
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#fff",
                      border: 'none',
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: "#E6850E",
                      },
                    }}
                  >
                    Mesaj Gönder
                  </Button>
                </Stack>
              </Box>
            </Card>

            {/* Map Section */}
            <Card
              sx={{
                borderRadius: "16px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
                overflow: "hidden",
                backgroundColor: "#FFF",
              }}
            >
              <Box sx={{ p: { xs: 3, md: 4 }, pb: 0 }}>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "20px", md: "24px" },
                    fontWeight: 700,
                    color: "#111827",
                    mb: 2,
                  }}
                >
                  Konum
                </Typography>
              </Box>
              <Box
                component="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6012.612286568563!2d29.021577247786663!3d41.10600455604336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab56e894d24fb%3A0xb875349b5446d05d!2sAri%20Teknokent!5e0!3m2!1sen!2str!4v1751454265316!5m2!1sen!2str"
                sx={{
                  width: "100%",
                  height: "300px",
                  border: 0,
                  borderRadius: "16px",
                  filter: "grayscale(20%)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Card>
          </Stack>

          {/* Right Column - Contact Info and Social Media */}
          <Stack spacing={{ xs: 3, md: 4 }}>
            {/* Contact Information */}
            <Card
              sx={{
                borderRadius: "16px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
                p: { xs: 3, md: 4 },
                backgroundColor: "#FFF",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "20px", md: "24px" },
                  fontWeight: 700,
                  color: "#111827",
                  mb: 3,
                }}
              >
                İletişim Bilgileri
              </Typography>

              <Stack spacing={3}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Avatar
                    sx={{
                      backgroundColor: "rgba(255, 149, 0, 0.1)",
                      color: "#FF9500",
                      width: 40,
                      height: 40,
                    }}
                  >
                    <EmailIcon fontSize="small" />
                  </Avatar>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, mb: 0.5, fontSize: "16px" }}
                    >
                      E-posta
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#6B7280"
                      sx={{ fontSize: "14px" }}
                    >
                      info@coknet.com
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#6B7280"
                      sx={{ fontSize: "14px" }}
                    >
                      destek@coknet.com
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Avatar
                    sx={{
                      backgroundColor: "rgba(29, 181, 190, 0.1)",
                      color: "#1DB5BE",
                      width: 40,
                      height: 40,
                    }}
                  >
                    <PhoneIcon fontSize="small" />
                  </Avatar>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, mb: 0.5, fontSize: "16px" }}
                    >
                      Telefon
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#6B7280"
                      sx={{ fontSize: "14px" }}
                    >
                      +90 (212) 555 0123
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#6B7280"
                      sx={{ fontSize: "14px" }}
                    >
                      +90 (532) 555 0123
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Avatar
                    sx={{
                      backgroundColor: "rgba(34, 197, 94, 0.1)",
                      color: "#22C55E",
                      width: 40,
                      height: 40,
                    }}
                  >
                    <LocationOnIcon fontSize="small" />
                  </Avatar>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, mb: 0.5, fontSize: "16px" }}
                    >
                      Adres
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#6B7280"
                      sx={{ fontSize: "14px" }}
                    >
                      Maslak Mahallesi, Büyükdere Caddesi
                      <br />
                      No: 123, Kat: 5
                      <br />
                      34485 Sarıyer/İstanbul
                    </Typography>
                  </Box>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Avatar
                    sx={{
                      backgroundColor: "rgba(168, 85, 247, 0.1)",
                      color: "#A855F7",
                      width: 40,
                      height: 40,
                    }}
                  >
                    <AccessTimeIcon fontSize="small" />
                  </Avatar>
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, mb: 0.5, fontSize: "16px" }}
                    >
                      Çalışma Saatleri
                    </Typography>
                    <Typography
                      variant="body2"
                      color="#6B7280"
                      sx={{ fontSize: "14px" }}
                    >
                      Pazartesi - Cuma: 09:00 - 18:00
                      <br />
                      Cumartesi: 10:00 - 16:00
                      <br />
                      Pazar: Kapalı
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </Card>

            {/* Social Media */}
            <Card
              sx={{
                borderRadius: "16px",
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.08)",
                p: { xs: 3, md: 4 },
                backgroundColor: "#FFF",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "20px", md: "24px" },
                  fontWeight: 700,
                  color: "#111827",
                  mb: 3,
                }}
              >
                Sosyal Medya
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap">
                {SOCIAL_LINKS.map((item) => (
                  <IconButton
                    key={item.label}
                    component="a"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={item.sx}
                  >
                    {item.icon}
                  </IconButton>
                ))}
              </Stack>
            </Card>
          </Stack>
        </Box>

        {/* FAQ Section */}
        <AccordionSection
          title="Sıkça Sorulan Sorular"
          items={faqData}
          backgroundColor="rgba(255, 255, 255, 0.8)"
        />
      </Container>
    </Box>
  );
};

export default ContactPage;
