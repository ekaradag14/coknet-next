"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SubjectCard, { SubjectData } from "../../components/SubjectCard";

interface TYTResults {
  nets: { [key: string]: number };
  totalNet: number;
  rawScore: number;
  obpContribution: number;
  finalScore: number;
}

// Results Component
interface ResultsCardProps {
  results: TYTResults;
  obp: number;
  subjects: SubjectData[];
  onReset: () => void;
}

function ResultsCard({ results, obp, subjects, onReset }: ResultsCardProps) {
  const calculateBlank = (subject: SubjectData) => {
    return subject.totalQuestions - subject.correct - subject.wrong;
  };

  const calculateSuccessRate = (correct: number, total: number) => {
    return ((correct / total) * 100).toFixed(1);
  };

  const getScoreCategory = (percentage: number) => {
    if (percentage >= 80) return "Mükemmel";
    if (percentage >= 60) return "İyi";
    if (percentage >= 40) return "Orta";
    return "Geliştirilmeli";
  };

  const totalQuestions = subjects.reduce(
    (sum, subject) => sum + subject.totalQuestions,
    0,
  );
  const totalCorrect = subjects.reduce(
    (sum, subject) => sum + subject.correct,
    0,
  );
  const totalWrong = subjects.reduce((sum, subject) => sum + subject.wrong, 0);
  const totalBlank = totalQuestions - totalCorrect - totalWrong;
  const overallSuccessRate = (totalCorrect / totalQuestions) * 100;

  return (
    <Box>
      {/* Header */}
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "32px", md: "48px" },
            fontWeight: 700,
            lineHeight: "56px",
            letterSpacing: "-1px",
            color: "#111827",
            mb: 2,
            fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          TYT Puan Hesaplama Sonuçları
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "28px",
            color: "#374151",
            maxWidth: "597px",
            mx: "auto",
            fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          Detaylı TYT hesaplama sonuçlarınız aşağıda gösterilmektedir. Tüm net
          hesaplamaları ve puan dağılımları ÖSYM katsayıları ile hesaplanmıştır.
        </Typography>
      </Box>

      {/* Main Results Card */}
      <Card
        sx={{
          borderRadius: "12px",
          border: "1px solid #E5E7EB",
          boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
          overflow: "hidden",
          background: "white",
        }}
      >
        <CardContent sx={{ p: 4 }}>
          {/* Header with Status */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 4,
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

          {/* Subject Results Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: 3,
              mb: 4,
            }}
          >
            {subjects.map((subject, index) => {
              const net = results.nets[subject.name] || 0;
              const blank = calculateBlank(subject);

              return (
                <Box key={subject.name}>
                  <Card
                    sx={{
                      borderRadius: "12px",
                      border: "1px solid #E5E7EB",
                      backgroundColor: "#F9FAFB",
                 
                    }}
                  >
                    <CardContent sx={{ p: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          mb: 3,
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            fontSize: "18px",
                            fontWeight: 700,
                            color: "#111827",
                            fontFamily:
                              "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                          }}
                        >
                          {subject.name}
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
                          {subject.totalQuestions} Soru
                        </Typography>
                      </Box>

                      {/* Stats Row */}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-around",
                          mb: 3,
                        }}
                      >
                        <Box sx={{ textAlign: "center" }}>
                          <Typography
                            variant="h4"
                            sx={{
                              fontSize: "24px",
                              fontWeight: 700,
                              color: "#10B981",
                              lineHeight: "36px",
                              fontFamily:
                                "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                            }}
                          >
                            {subject.correct}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              fontSize: "12px",
                              color: "#6B7280",
                              fontFamily:
                                "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                            }}
                          >
                            Doğru
                          </Typography>
                        </Box>
                        <Box sx={{ textAlign: "center" }}>
                          <Typography
                            variant="h4"
                            sx={{
                              fontSize: "24px",
                              fontWeight: 700,
                              color: "#EF4444",
                              lineHeight: "36px",
                              fontFamily:
                                "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                            }}
                          >
                            {subject.wrong}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              fontSize: "12px",
                              color: "#6B7280",
                              fontFamily:
                                "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                            }}
                          >
                            Yanlış
                          </Typography>
                        </Box>
                        <Box sx={{ textAlign: "center" }}>
                          <Typography
                            variant="h4"
                            sx={{
                              fontSize: "24px",
                              fontWeight: 700,
                              color: "#6B7280",
                              lineHeight: "36px",
                              fontFamily:
                                "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                            }}
                          >
                            {blank}
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              fontSize: "12px",
                              color: "#6B7280",
                              fontFamily:
                                "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                            }}
                          >
                            Boş
                          </Typography>
                        </Box>
                      </Box>

                      {/* Net Score */}
                      <Card
                        sx={{
                          borderRadius: "8px",
                          border: "1px solid #E5E7EB",
                          backgroundColor: "#FFF",
                          p: 2,
                        }}
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
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
                            Net Sayısı:
                          </Typography>
                          <Typography
                            variant="h6"
                            sx={{
                              fontSize: "18px",
                              fontWeight: 700,
                              color: "#FF9500",
                              fontFamily:
                                "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                            }}
                          >
                            {net.toFixed(2)}
                          </Typography>
                        </Box>
                      </Card>
                    </CardContent>
                  </Card>
                </Box>
              );
            })}
          </Box>

          {/* Summary Results Section */}
          <Box sx={{ borderTop: "1px solid #E5E7EB", pt: 4, mb: 4 }}>
            <Typography
              variant="h6"
              sx={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#111827",
                mb: 4,
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Toplam Sonuçlar
            </Typography>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: 4,
              }}
            >
              {/* Left Summary Stats */}
              <Box>
                {[
                  {
                    label: "Toplam Doğru:",
                    value: totalCorrect,
                    color: "#10B981",
                  },
                  {
                    label: "Toplam Yanlış:",
                    value: totalWrong,
                    color: "#EF4444",
                  },
                  {
                    label: "Toplam Boş:",
                    value: totalBlank,
                    color: "#6B7280",
                  },
                  {
                    label: "Toplam Net:",
                    value: results.totalNet.toFixed(2),
                    color: "#FF9500",
                    isLarge: true,
                  },
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      borderBottom: index < 3 ? "1px solid #E5E7EB" : "none",
                      py: 2,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
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
                        {item.label}
                      </Typography>
                      <Typography
                        variant={item.isLarge ? "h5" : "h6"}
                        sx={{
                          fontSize: item.isLarge ? "24px" : "20px",
                          fontWeight: 700,
                          color: item.color,
                          fontFamily:
                            "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                      >
                        {item.value}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              {/* Right Score Cards */}
              <Box>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {/* Ham TYT Puanı */}
                  <Card
                    sx={{
                      borderRadius: "8px",
                      border: "1px solid #E5E7EB",
                      backgroundColor: "#FFF",
                      p: 2,
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#6B7280",
                        mb: 1,
                        fontFamily:
                          "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      Ham TYT Puanı
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontSize: "32px",
                        fontWeight: 700,
                        color: "#111827",
                        lineHeight: "48px",
                        mb: 0.5,
                        fontFamily:
                          "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      {results.rawScore.toFixed(2)}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: "12px",
                        color: "#9CA3AF",
                        fontFamily:
                          "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      100 + (Toplam Net × 3.33)
                    </Typography>
                  </Card>

                  {/* OBP Puanı */}
                  <Card
                    sx={{
                      borderRadius: "8px",
                      border: "1px solid #E5E7EB",
                      backgroundColor: "#FFF",
                      p: 2,
                      textAlign: "center",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#6B7280",
                        mb: 1,
                        fontFamily:
                          "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      OBP Puanınız
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        fontSize: "24px",
                        fontWeight: 700,
                        color: "#6366F1",
                        lineHeight: "36px",
                        mb: 0.5,
                        fontFamily:
                          "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      {obp}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        fontSize: "12px",
                        color: "#9CA3AF",
                        fontFamily:
                          "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      Ortaöğretim Başarı Puanı
                    </Typography>
                  </Card>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Final Score Section */}
          <Box
            sx={{
              borderRadius: "12px",
              background: "linear-gradient(90deg, #FF7A00 100%, #FF9500 0%)",
              p: 4,
              textAlign: "center",
              mb: 4,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: "24px",
                fontWeight: 700,
                color: "white",
                mb: 2,
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Final Yerleştirme Puanınız
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: "48px",
                fontWeight: 700,
                color: "white",
                lineHeight: "72px",
                mb: 1,
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              {results.finalScore.toFixed(2)}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "16px",
                color: "white",
                opacity: 0.9,
                mb: 0.5,
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              TYT Yerleştirme Puanı
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "14px",
                color: "white",
                opacity: 0.75,
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              (Ham TYT × 0.4) + (OBP × 0.6)
            </Typography>
          </Box>

          {/* Analysis Section */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 3,
              mb: 4,
            }}
          >
            {/* Performance Analysis */}
            <Box>
              <Card
                sx={{
                  borderRadius: "8px",
                  border: "1px solid #BAE6FD",
                  backgroundColor: "#F0F9FF",
                  p: 2,
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "#0EA5E9",
                    }}
                  />
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#0C4A6E",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Performans Analizi
                  </Typography>
                </Box>
                {subjects.map((subject) => (
                  <Typography
                    key={subject.name}
                    variant="caption"
                    sx={{
                      fontSize: "12px",
                      color: "#075985",
                      display: "block",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    {subject.name}: %
                    {calculateSuccessRate(
                      subject.correct,
                      subject.totalQuestions,
                    )}{" "}
                    başarı
                  </Typography>
                ))}
              </Card>
            </Box>

            {/* General Evaluation */}
            <Box>
              <Card
                sx={{
                  borderRadius: "8px",
                  border: "1px solid #BBF7D0",
                  backgroundColor: "#F0FDF4",
                  p: 2,
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}
                >
                  <Box
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "#22C55E",
                    }}
                  />
                  <Typography
                    variant="body2"
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
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: "12px",
                    color: "#166534",
                    display: "block",
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Toplam Net: {results.totalNet.toFixed(2)}/120
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: "12px",
                    color: "#166534",
                    display: "block",
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Başarı Oranı: %{overallSuccessRate.toFixed(1)}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: "12px",
                    color: "#166534",
                    display: "block",
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Puan Aralığı: {getScoreCategory(overallSuccessRate)}
                </Typography>
              </Card>
            </Box>
          </Box>

          {/* Calculation Details */}
          <Card
            sx={{
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              backgroundColor: "#F9FAFB",
              p: 3,
              mb: 4,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontSize: "16px",
                fontWeight: 600,
                color: "#111827",
                mb: 3,
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Hesaplama Detayları
            </Typography>

            {[
              {
                label: "Net Hesaplama Formülü:",
                value: "Net = Doğru - (Yanlış ÷ 4)",
              },
              {
                label: "Ham TYT Puanı Formülü:",
                value: "100 + (Toplam Net × 3.33)",
              },
              {
                label: "Yerleştirme Puanı Formülü:",
                value: "(Ham TYT × 0.4) + (OBP × 0.6)",
              },
            ].map((item, index) => (
              <Box
                key={index}
                sx={{
                  borderBottom: index < 2 ? "1px solid #E5E7EB" : "none",
                  py: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
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
                    {item.label}
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
                    {item.value}
                  </Typography>
                </Box>
              </Box>
            ))}

            <Typography
              variant="caption"
              sx={{
                fontSize: "12px",
                color: "#9CA3AF",
                display: "block",
                mt: 2,
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              * Bu hesaplamalar ÖSYM'nin resmi katsayılarına dayanmaktadır.
              Gerçek puanınız küçük farklılıklar gösterebilir.
            </Typography>
          </Card>

          {/* Recalculate Button */}
          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="outlined"
              onClick={onReset}
              sx={{
                width: "247px",
                height: "48px",
                backgroundColor: "#FF9500",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: 600,
                border: "none",
                color: "#FFF",
                textTransform: "none",
                boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
                "&:hover": {
                  backgroundColor: "#E6850E",
                },
              }}
            >
              Yeniden Hesapla
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

// Define coefficients separately
const SUBJECT_COEFFICIENTS: { [key: string]: number } = {
  "Türkçe": 1.32,
  "Matematik": 1.32,
  "Sosyal Bilgiler": 1.36,
  "Fen Bilimleri": 1.36,
};

export default function TYTPuanHesaplamaPage() {
  const [subjects, setSubjects] = useState<SubjectData[]>([
    {
      name: "Türkçe",
      totalQuestions: 40,
      correct: 0,
      wrong: 0,
    },
    {
      name: "Matematik",
      totalQuestions: 40,
      correct: 0,
      wrong: 0,
    },
    {
      name: "Sosyal Bilgiler",
      totalQuestions: 20,
      correct: 0,
      wrong: 0,
    },
    {
      name: "Fen Bilimleri",
      totalQuestions: 20,
      correct: 0,
      wrong: 0,
    },
  ]);

  const [obp, setObp] = useState<number | null>(null);
  const [results, setResults] = useState<TYTResults | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleSubjectUpdate = (
    index: number,
    field: "correct" | "wrong",
    value: number,
  ) => {
    const newSubjects = [...subjects];
    newSubjects[index][field] = value;
    setSubjects(newSubjects);
  };

  const isFormValid = () => {
    return (
      subjects.every(
        (subject) => subject.correct + subject.wrong <= subject.totalQuestions,
      ) &&
      typeof obp === 'number' &&
      obp >= 250 &&
      obp <= 500
    );
  };

  const calculateTYT = (shouldScroll = false) => {
    if (!isFormValid() || typeof obp !== 'number') return;

    const nets: { [key: string]: number } = {};
    let totalNet = 0;
    let rawScore = 100; // Base score

    subjects.forEach((subject) => {
      const net = subject.correct - subject.wrong / 4;
      nets[subject.name] = net;
      totalNet += net;
      rawScore += net * (SUBJECT_COEFFICIENTS[subject.name] || 1);
    });

    const obpContribution = obp * 0.12;
    const finalScore = rawScore + obpContribution;

    setResults({
      nets,
      totalNet,
      rawScore,
      obpContribution,
      finalScore,
    });

    if (shouldScroll) {
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  };

  // Auto-calculate when form is valid, but do NOT scroll
  useEffect(() => {
    if (isFormValid()) {
      calculateTYT(false);
    } else {
      setResults(null);
    }
  }, [subjects, obp]);

  // Move handleReset here, before return
  const handleReset = () => {
    setSubjects([
      {
        name: "Türkçe",
        totalQuestions: 40,
        correct: 0,
        wrong: 0,
      },
      {
        name: "Matematik",
        totalQuestions: 40,
        correct: 0,
        wrong: 0,
      },
      {
        name: "Sosyal Bilgiler",
        totalQuestions: 20,
        correct: 0,
        wrong: 0,
      },
      {
        name: "Fen Bilimleri",
        totalQuestions: 20,
        correct: 0,
        wrong: 0,
      },
    ]);
    setObp(null);
    setResults(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Box
      sx={{
        backgroundColor: "#FFFFFF",
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative Background Circles */}
      <Box
        sx={{
          position: "absolute",
          top: { xs: -60, md: -80 },
          left: { xs: -60, md: 80 },
          width: { xs: "160px", md: "220px" },
          height: { xs: "160px", md: "220px" },
          borderRadius: "50%",
          background: "rgba(246, 235, 35, 0.13)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: { xs: -40, md: -60 },
          right: { xs: -60, md: 90 },
          width: { xs: "200px", md: "320px" },
          height: { xs: "200px", md: "320px" },
          borderRadius: "50%",
          background: "rgba(255, 149, 0, 0.13)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 40, md: 120 },
          left: { xs: 10, md: 120 },
          width: { xs: "100px", md: "180px" },
          height: { xs: "100px", md: "180px" },
          borderRadius: "50%",
          background: "rgba(29, 181, 190, 0.09)",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: { xs: 10, md: 60 },
          right: { xs: 30, md: 120 },
          width: { xs: "80px", md: "140px" },
          height: { xs: "80px", md: "140px" },
          borderRadius: "50%",
          background: "rgba(246, 235, 35, 0.08)",
          zIndex: 0,
        }}
      />
      {/* Title Header and Description */}
      <Box
        sx={{
          textAlign: "center",
          maxWidth: "1200px",
          mx: "auto",
          pt: { xs: 6, md: 8 },
          pb: { xs: 2, md: 4 },
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "28px", md: "40px" },
            fontWeight: 700,
            color: "#111827",
            mb: 2,
          }}
        >
          📊 TYT Puan Hesaplama Aracı
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "16px",
            color: "#6B7280",
            lineHeight: 1.6,
          }}
        >
          Doğru ve yanlış sayılarını girerek TYT netlerinizi ve puanınızı hesaplayın. ÖSYM katsayıları kullanılarak gerçek puanınızı öğrenin.
        </Typography>
      </Box>
      {/* Main Content */}
      <Container  sx={{ maxWidth: 1200, py: 6 }}>
        {/* Calculator Section */}
        <Box sx={{ mb: 6 }}>
          {/* Subject Cards */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
              gap: 3,
              mb: 4,
            }}
          >
            {subjects.map((subject, index) => (
              <Box key={subject.name}>
                <SubjectCard
                  subject={subject}
                  onUpdate={(field, value) =>
                    handleSubjectUpdate(index, field, value)
                  }
                />
              </Box>
            ))}
          </Box>

          {/* OBP Input */}
          <Card
            sx={{
              borderRadius: "12px",
              border: "1px solid #E5E7EB",
              boxShadow: "0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
              background: "white",
              mb: 4,
            }}
          >
            <CardContent sx={{ p: 3, height: "100%" }}>
              <Typography
                variant="h6"
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                  color: "#111827",
                  lineHeight: "27px",
                  mb: 3,
                }}
              >
                Ortaöğretim Başarı Puanı (OBP)
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#374151",
                  lineHeight: "21px",
                  mb: 2,
                }}
              >
                OBP Puanınız
              </Typography>

              <TextField
                fullWidth
                type="number"
                value={obp === null ? '' : obp}
                onChange={(e) => setObp(e.target.value === '' ? null : Number(e.target.value))}
                placeholder="OBP puanınızı girin (250-500)"
                inputProps={{ min: 250, max: 500, step: 0.01 }}
                error={typeof obp !== 'number' || obp < 250 || obp > 500}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    height: "50px",
                    borderRadius: "8px",
                    "& input": {
                      fontSize: "16px",
                      padding: "14px 16px",
                      "&::placeholder": {
                        color: "#999",
                        fontSize: "16px",
                      },
                    },
                  },
                }}
              />
            </CardContent>
          </Card>

          {/* Calculate Button */}
          <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
            <Button
              variant="outlined"
              disabled={!isFormValid()}
              onClick={() => calculateTYT(true)}
              sx={{
                width: "190px",
                height: "56px",
                backgroundColor: "#FF9500",
                borderRadius: "8px",
                fontSize: "16px",
                border: "none",
                fontWeight: 600,
                color: "#FFF",
                textTransform: "none",
                boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
                "&:hover": {
                  backgroundColor: "#E6850E",
                  boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.1)",
                },
                "&:disabled": {
                  backgroundColor: "#E5E7EB",
                  color: "#9CA3AF",
                  border: 'none',
                },
              }}
            >
              Puanımı Hesapla
            </Button>
          </Box>
        </Box>

        {/* Results Section - Full Width Below Calculate Button */}
        <Box ref={resultsRef} sx={{ width: "100%" }}>
          {results && typeof obp === 'number' ? (
            <Box
              sx={{
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: -40,
                  left: 0,
                  right: 0,
                  opacity: 0.3,
                },
              }}
            >
              <ResultsCard results={results} obp={obp} subjects={subjects} onReset={handleReset} />
            </Box>
          ) : (
            <Card
              sx={{
                borderRadius: "16px",
                border: "2px dashed #E5E7EB",
                backgroundColor: "#F9FAFB",
                opacity: 0.7,
              }}
            >
              <CardContent sx={{ p: 4, textAlign: "center" }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                    color: "#6B7280",
                    mb: 2,
                  }}
                >
                  📋 Sonuçlarınız Burada Görünecek
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "14px",
                    color: "#9CA3AF",
                  }}
                >
                  Doğru ve yanlış sayılarınızı girip OBP değerinizi girdikten
                  sonra puanınız otomatik olarak hesaplanacak
                </Typography>
              </CardContent>
            </Card>
          )}
        </Box>
      </Container>
    </Box>
  );
}
