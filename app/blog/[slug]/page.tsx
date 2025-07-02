"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";

import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Link from "next/link";
import { useState } from "react";

export default function BlogDetailPage() {
  const [showTableOfContents, setShowTableOfContents] = useState(true);

  const tableOfContents = [
    "1. Giriş ve Genel Bakış",
    "2. Çalışma Planı Oluşturma",
    "3. Etkili Çalışma Teknikleri",
    "4. Motivasyon ve Stres Yönetimi",
    "5. Sınav Günü Stratejileri",
    "6. Sonuç ve Öneriler",
  ];

  const scheduleData = [
    { time: "06:00 - 08:00", subject: "Matematik" },
    { time: "09:00 - 11:00", subject: "Fen Bilimleri" },
    { time: "14:00 - 16:00", subject: "Türkçe" },
    { time: "19:00 - 21:00", subject: "Sosyal Bilimler" },
  ];

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#FFF" }}>
      {/* Background Elements */}
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "linear-gradient(90deg, #EDE9FE 100%, #F2F7FF 0%)",
          zIndex: -2,
        }}
      />
      <Box
        sx={{
          position: "fixed",
          top: "-48px",
          right: "100px",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "rgba(124, 58, 237, 0.1)",
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          position: "fixed",
          bottom: "100px",
          left: "-100px",
          width: "275px",
          height: "200px",
          borderRadius: "50%",
          background: "rgba(29, 181, 190, 0.1)",
          zIndex: -1,
        }}
      />

      <Container maxWidth="lg" sx={{ py: 4 }}>
        {/* Main Article Card */}
        <Card
          sx={{
            borderRadius: "16px",
            backgroundColor: "#FFF",
            boxShadow: "0px 4px 16px rgba(17, 24, 39, 0.08)",
            border: "none",
            overflow: "hidden",
            mb: 4,
          }}
        >
          {/* Hero Image Section */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "400px",
              backgroundColor: "#E5E7EB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Featured Badge */}
            <Chip
              label="Öne Çıkan"
              sx={{
                position: "absolute",
                top: 24,
                left: 33,
                backgroundColor: "#F6EB23",
                color: "white",
                fontSize: "12px",
                fontWeight: 600,
                height: "26px",
                borderRadius: "20px",
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            />

            {/* Read Time Badge */}
            <Chip
              label="8 dk"
              sx={{
                position: "absolute",
                top: 24,
                right: 33,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(2px)",
                color: "#374151",
                fontSize: "14px",
                fontWeight: 500,
                height: "33px",
                borderRadius: "16px",
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            />

            {/* Placeholder for blog image */}
            <Typography
              sx={{
                color: "#9CA3AF",
                fontSize: "18px",
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Eğitim Blog
            </Typography>
          </Box>

          {/* Article Content */}
          <Box sx={{ p: { xs: 3, md: 6 } }}>
            {/* Category */}
            <Chip
              label="egitim"
              sx={{
                backgroundColor: "#EDE9FE",
                color: "#F6EB23",
                fontSize: "14px",
                fontWeight: 600,
                height: "33px",
                mb: 3,
                textTransform: "capitalize",
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            />

            {/* Title */}
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "28px", md: "40px" },
                fontWeight: 700,
                color: "#111827",
                lineHeight: { xs: "36px", md: "48px" },
                mb: 3,
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Üniversite Sınavına Hazırlık İpuçları
            </Typography>

            {/* Excerpt */}
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: 400,
                color: "#6B7280",
                lineHeight: "28px",
                mb: 3,
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              YKS'ye hazırlanırken dikkat etmeniz gereken en önemli noktalar ve
              etkili çalışma teknikleri hakkında detaylı rehber.
            </Typography>

            {/* Author Section */}
            <Box
              sx={{
                borderTop: "1px solid #F3F4F6",
                pt: 3,
                mb: 4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: { xs: "column", sm: "row" },
                gap: { xs: 2, sm: 0 },
              }}
            >
              <Stack direction="row" spacing={1.5} alignItems="center">
                <Avatar
                  sx={{
                    width: 48,
                    height: 48,
                    backgroundColor: "#F6EB23",
                    fontSize: "20px",
                    fontWeight: 600,
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  A
                </Avatar>

                <Box>
                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontWeight: 600,
                      color: "#111827",
                      lineHeight: "24px",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Ahmet Yılmaz
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#6B7280",
                      lineHeight: "21px",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    15 Mart 2024
                  </Typography>
                </Box>
              </Stack>

              <Button
                startIcon={
                  showTableOfContents ? <ExpandLessIcon /> : <ExpandMoreIcon />
                }
                onClick={() => setShowTableOfContents(!showTableOfContents)}
                sx={{
                  backgroundColor: "#F9FAFB",
                  color: "#374151",
                  borderRadius: "8px",
                  px: 2,
                  py: 1,
                  fontSize: "14px",
                  fontWeight: 500,
                  textTransform: "none",
                  fontFamily:
                    "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  "&:hover": {
                    backgroundColor: "#F3F4F6",
                  },
                }}
              >
                İçindekiler
              </Button>
            </Box>

            {/* Table of Contents */}
            {showTableOfContents && (
              <Card
                sx={{
                  backgroundColor: "#F9FAFB",
                  border: "1px solid #E5E7EB",
                  borderRadius: "12px",
                  p: 4,
                  mb: 6,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#111827",
                    mb: 3,
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  İçindekiler
                </Typography>

                <Stack spacing={2}>
                  {tableOfContents.map((item, index) => (
                    <Typography
                      key={index}
                      sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#6B7280",
                        lineHeight: "21px",
                        fontFamily:
                          "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                        cursor: "pointer",
                        "&:hover": {
                          color: "#374151",
                        },
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Stack>
              </Card>
            )}

            {/* Article Sections */}
            <Stack spacing={6}>
              {/* Section 1: Giriş ve Genel Bakış */}
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#111827",
                    lineHeight: "42px",
                    mb: 3,
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Giriş ve Genel Bakış
                </Typography>

                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#374151",
                    lineHeight: "28px",
                    mb: 3,
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Üniversite sınavına hazırlanmak, öğrencilerin hayatındaki en
                  kritik dönemlerden biridir. YKS (Yükseköğretim Kurumları
                  Sınavı), Türkiye'deki milyonlarca öğrencinin geleceklerini
                  şekillendiren önemli bir sınavdır. Bu süreçte doğru
                  stratejiler ve etkili çalışma yöntemleri kullanmak, başarıya
                  ulaşmanın anahtarıdır.
                </Typography>

                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#374151",
                    lineHeight: "28px",
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Bu rehberde, üniversite sınavına hazırlanırken dikkat etmeniz
                  gereken en önemli noktaları ve kanıtlanmış etkili çalışma
                  tekniklerini detaylı bir şekilde ele alacağız. Uzman görüşleri
                  ve başarılı öğrencilerin deneyimlerinden yola çıkarak
                  hazırlanan bu içerik, sınav sürecinizi daha verimli ve
                  stressiz hale getirmenize yardımcı olacaktır.
                </Typography>
              </Box>

              {/* Section 2: Çalışma Planı Oluşturma */}
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#111827",
                    lineHeight: "42px",
                    mb: 3,
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Çalışma Planı Oluşturma
                </Typography>

                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#374151",
                    lineHeight: "28px",
                    mb: 4,
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Başarılı bir sınav hazırlığının temelinde iyi planlanmış bir
                  çalışma programı yatar. Rastgele çalışmak yerine, sistematik
                  bir yaklaşım benimser ve hedeflerinizi net bir şekilde
                  belirlerseniz, çok daha etkili sonuçlar elde edebilirsiniz.
                </Typography>

                {/* Subsection: Hedef Belirleme */}
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "22px",
                    fontWeight: 600,
                    color: "#111827",
                    lineHeight: "33px",
                    mb: 2,
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Hedef Belirleme
                </Typography>

                <Stack spacing={1} sx={{ mb: 4, ml: 3 }}>
                  {[
                    "Hedeflediğiniz üniversite ve bölümü belirleyin",
                    "Geçen yılın taban puanlarını araştırın",
                    "Mevcut seviyenizi objektif olarak değerlendirin",
                    "Kısa vadeli (haftalık) ve uzun vadeli (aylık) hedefler koyun",
                  ].map((item, index) => (
                    <Typography
                      key={index}
                      sx={{
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "#374151",
                        lineHeight: "28px",
                        fontFamily:
                          "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                        "&::before": {
                          content: '"•"',
                          color: "#F6EB23",
                          fontWeight: "bold",
                          display: "inline-block",
                          width: "1em",
                          marginLeft: "-1em",
                        },
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Stack>

                {/* Subsection: Zaman Yönetimi */}
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "22px",
                    fontWeight: 600,
                    color: "#111827",
                    lineHeight: "33px",
                    mb: 2,
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Zaman Yönetimi
                </Typography>

                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#374151",
                    lineHeight: "28px",
                    mb: 4,
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Etkili zaman yönetimi, sınav başarısının en kritik
                  faktörlerinden biridir. Günlük çalışma saatlerinizi dengeli
                  bir şekilde dağıtarak, hem verimli hem de sürdürülebilir bir
                  tempo yakalayabilirsiniz.
                </Typography>

                {/* Daily Schedule Example */}
                <Typography
                  variant="h4"
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#111827",
                    lineHeight: "27px",
                    mb: 2,
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Örnek Günlük Program
                </Typography>

                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                    gap: 2,
                    mb: 4,
                  }}
                >
                  {scheduleData.map((item, index) => (
                    <Box key={index}>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "#6B7280",
                          lineHeight: "21px",
                          fontFamily:
                            "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                      >
                        {item.time}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontWeight: 400,
                          color: "#374151",
                          lineHeight: "24px",
                          fontFamily:
                            "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                      >
                        {item.subject}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              {/* Section 3: Etkili Çalışma Teknikleri */}
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#111827",
                    lineHeight: "42px",
                    mb: 3,
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Etkili Çalışma Teknikleri
                </Typography>

                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#374151",
                    lineHeight: "28px",
                    mb: 4,
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Doğru çalışma teknikleri kullanmak, aynı sürede çok daha fazla
                  bilgiyi öğrenmenizi ve kalıcı hale getirmenizi sağlar. İşte
                  kanıtlanmış en etkili yöntemler:
                </Typography>

                {/* Pomodoro Technique */}
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "20px",
                    fontWeight: 600,
                    color: "#111827",
                    lineHeight: "30px",
                    mb: 2,
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Pomodoro Tekniği
                </Typography>

                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#374151",
                    lineHeight: "24px",
                    mb: 1,
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  25 dakika odaklanmış çalışma, 5 dakika mola şeklinde döngüler
                  halinde çalışın.
                </Typography>

                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#6B7280",
                    lineHeight: "21px",
                    ml: 3,
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    "&::before": {
                      content: '"✓"',
                      color: "#10B981",
                      fontWeight: "bold",
                      display: "inline-block",
                      width: "1em",
                      marginLeft: "-1em",
                    },
                  }}
                >
                  Dikkat dağınıklığını önler
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
