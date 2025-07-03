'use client';

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import { useState } from "react";

interface SubjectScore {
  name: string;
  net: number;
  color: string;
}

interface AYTResultProps {
  subjectScores?: SubjectScore[];
  aytScore?: number;
  finalScore?: number;
  aytContribution?: number;
  tytContribution?: number;
  obpContribution?: number;
  scoreType?: string;
  successLevel?: string;
  recommendedField?: string;
  onRecalculate?: () => void;
}

export default function AYTResultComponent({
  subjectScores = [
    { name: "Matematik Net:", net: 10, color: "#10B981" },
    { name: "Fizik Net:", net: 4, color: "#10B981" },
    { name: "Kimya Net:", net: 4.25, color: "#10B981" },
    { name: "Biyoloji Net:", net: -0.75, color: "#EF4444" },
  ],
  aytScore = 52.14,
  finalScore = 220.14,
  aytContribution = 52.14,
  tytContribution = 120,
  obpContribution = 48,
  scoreType = "SAY",
  successLevel = "Orta",
  recommendedField = "Sayısal",
  onRecalculate,
}: AYTResultProps) {
  const [activeTab, setActiveTab] = useState("SAY");

  const tabs = [
    { id: "SAY", label: "SAY Puanı", active: true },
    { id: "EA", label: "EA Puanı", active: false },
    { id: "SOZ", label: "SOZ Puanı", active: false },
  ];

  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        backgroundColor: "#FFF",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "32px", md: "48px" },
              fontWeight: 700,
              lineHeight: { xs: "40px", md: "56px" },
              letterSpacing: "-1px",
              color: "#111827",
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              mb: 2,
            }}
          >
            AYT Puan Hesaplama Sonuçları
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: "28px",
              color: "#374151",
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              maxWidth: "596px",
              mx: "auto",
            }}
          >
            Detaylı AYT hesaplama sonuçlarınız aşağıda gösterilmektedir. Tüm net
            hesaplamaları ve puan dağılımları ÖSYM katsayıları ile
            hesaplanmıştır.
          </Typography>
        </Box>

        {/* Main Results Card */}
        <Card
          sx={{
            borderRadius: "12px",
            border: "1px solid #E5E7EB",
            boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
            mb: 4,
          }}
        >
          <CardContent sx={{ p: { xs: 2, md: 4 } }}>
            {/* Header with Status */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 3,
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontSize: "24px",
                  fontWeight: 700,
                  lineHeight: "32px",
                  color: "#111827",
                  fontFamily:
                    "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                Hesaplama Sonuçları
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    backgroundColor: "#10B981",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#374151",
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Hesaplama Tamamlandı
                </Typography>
              </Box>
            </Box>

            <Divider sx={{ mb: 3 }} />

            {/* Score Type Tabs */}
            <Box sx={{ mb: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  borderBottom: "1px solid #E5E7EB",
                  position: "relative",
                }}
              >
                {tabs.map((tab) => (
                  <Box
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    sx={{
                      position: "relative",
                      cursor: "pointer",
                      px: 3,
                      py: 1.5,
                      ...(activeTab === tab.id && {
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: -1,
                          left: 0,
                          right: 0,
                          height: 2,
                          backgroundColor: "#FF9500",
                        },
                      }),
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: activeTab === tab.id ? "#FF9500" : "#6B7280",
                        fontFamily:
                          "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                        textAlign: "center",
                      }}
                    >
                      {tab.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Subject Scores and AYT Score */}
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                gap: 3,
                mb: 4,
                p: 3,
                backgroundColor: "#F3F4F6",
                borderRadius: "12px",
                border: "1px solid #D1D5DB",
              }}
            >
              {/* Subject Scores */}
              <Box sx={{ flex: 1 }}>
                {subjectScores.map((subject, index) => (
                  <Box key={index}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        py: 2,
                        ...(index < subjectScores.length - 1 && {
                          borderBottom: "1px solid #E5E7EB",
                        }),
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "#374151",
                          fontFamily:
                            "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                      >
                        {subject.name}
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "20px",
                          fontWeight: 700,
                          color: subject.color,
                          fontFamily:
                            "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                      >
                        {subject.net}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              {/* AYT Score Card */}
              <Card
                sx={{
                  minWidth: { xs: "100%", md: "250px" },
                  border: "1px solid #E5E7EB",
                  backgroundColor: "#FFF",
                  borderRadius: "8px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 3,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "#6B7280",
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    mb: 1,
                  }}
                >
                  AYT Puanı
                </Typography>
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: "32px",
                    fontWeight: 700,
                    color: "#111827",
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    mb: 1,
                  }}
                >
                  {aytScore}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: "12px",
                    fontWeight: 400,
                    color: "#9CA3AF",
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  {scoreType} Puan Türü
                </Typography>
              </Card>
            </Box>
          </CardContent>
        </Card>

        {/* Final Score Section */}
        <Card
          sx={{
            background: "linear-gradient(90deg, #FF7A00 100%, #FF9500 0%)",
            borderRadius: "12px",
            mb: 4,
            color: "white",
          }}
        >
          <CardContent sx={{ textAlign: "center", py: { xs: 4, md: 6 } }}>
            <Typography
              variant="h5"
              sx={{
                fontSize: "24px",
                fontWeight: 700,
                lineHeight: "36px",
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                mb: 2,
              }}
            >
              Final Yerleştirme Puanınız
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "36px", md: "48px" },
                fontWeight: 700,
                lineHeight: "72px",
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                mb: 2,
              }}
            >
              {finalScore}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                opacity: 0.9,
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                mb: 1,
              }}
            >
              {scoreType} Yerleştirme Puanı
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "14px",
                fontWeight: 400,
                opacity: 0.75,
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              (AYT × 0.4) + (TYT × 0.4) + (OBP × 0.2)
            </Typography>
          </CardContent>
        </Card>

        {/* Info Cards Row */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3,
            mb: 4,
          }}
        >
          {/* Score Details Card */}
          <Card
            sx={{
              border: "1px solid #BAE6FD",
              backgroundColor: "#F0F9FF",
              borderRadius: "8px",
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#0EA5E9",
                    mr: 1,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#0C4A6E",
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Puan Detayları
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "12px",
                      color: "#075985",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    AYT Katkısı:
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "12px",
                      color: "#075985",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    {aytContribution}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "12px",
                      color: "#075985",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    TYT Katkısı:
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "12px",
                      color: "#075985",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    {tytContribution}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "12px",
                      color: "#075985",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    OBP Katkısı:
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "12px",
                      color: "#075985",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    {obpContribution}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* General Evaluation Card */}
          <Card
            sx={{
              border: "1px solid #BBF7D0",
              backgroundColor: "#F0FDF4",
              borderRadius: "8px",
            }}
          >
            <CardContent>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: "#22C55E",
                    mr: 1,
                  }}
                />
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#14532D",
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Genel Değerlendirme
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "12px",
                    color: "#166534",
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Puan Türü: {scoreType}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "12px",
                    color: "#166534",
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Başarı Durumu: {successLevel}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "12px",
                    color: "#166534",
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Önerilen Alan: {recommendedField}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>

        {/* Calculation Details */}
        <Card
          sx={{
            border: "1px solid #E5E7EB",
            backgroundColor: "#F9FAFB",
            borderRadius: "8px",
            mb: 4,
          }}
        >
          <CardContent>
            <Typography
              variant="h6"
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#111827",
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                mb: 3,
              }}
            >
              Hesaplama Detayları
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: 1.5,
                    borderBottom: "1px solid #E5E7EB",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#6B7280",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Net Hesaplama Formülü:
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "14px",
                      color: "#6B7280",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Net = Doğru - (Yanlış ÷ 4)
                  </Typography>
                </Box>
              </Box>

              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: 1.5,
                    borderBottom: "1px solid #E5E7EB",
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#6B7280",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    AYT Puanı Formülü:
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "14px",
                      color: "#6B7280",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Puan türüne göre değişir
                  </Typography>
                </Box>
              </Box>

              <Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    py: 1.5,
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#6B7280",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Yerleştirme Puanı Formülü:
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "14px",
                      color: "#6B7280",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    (AYT × 0.4) + (TYT × 0.4) + (OBP × 0.2)
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Typography
              variant="caption"
              sx={{
                fontSize: "12px",
                color: "#9CA3AF",
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                display: "block",
                mt: 2,
              }}
            >
              * Bu hesaplamalar ÖSYM'nin resmi katsayılarına dayanmaktadır.
              Gerçek puanınız küçük farklılıklar gösterebilir.
            </Typography>
          </CardContent>
        </Card>

        {/* Recalculate Button */}
        <Box sx={{ textAlign: "center" }}>
          <Button
            variant="outlined"
            onClick={onRecalculate}
            sx={{
              backgroundColor: "#FF9500",
              borderRadius: "8px",
              px: 4,
              py: 1.5,
              border: 'none',
              fontSize: "16px",
              fontWeight: 600,
              textTransform: "none",
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
              "&:hover": {
                backgroundColor: "#FF8500",
              },
            }}
          >
            Yeniden Hesapla
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
