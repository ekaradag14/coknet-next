'use client';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";
// @ts-ignore
import "swiper/css/pagination";
const eslekEgitimImage = "/esnek-egitim-coknet-min.jpeg";
const basariImage = "/basari-icin-her-adimda-fin-min.jpeg";
import { useTheme, useMediaQuery } from "@mui/material";

const slides = [
  {
    heading: "Öğrenmek Hiç Bu Kadar Kişisel Olmamıştı",
    description: (
      <>
        YKS'de başarı adaptif öğrenmeyle çok net.<br />
        Her öğrencinin yolu farklıdır; biz bu yolu sana göre şekillendiriyoruz. Zorlukları birlikte aşıyor, size en uygun tempoyu birlikte yakalıyoruz.
      </>
    ),
    image: eslekEgitimImage,
    alt: "Öğrenmek Hiç Bu Kadar Kişisel Olmamıştı",
  },
  {
    heading: "Çok Net Farkla Hedefine Ulaş!",
    description: (
      <>
        <ul style={{ paddingLeft: 20, margin: 0 }}>
          <li><b>Bireysel Mentörlük:</b> Uzman bir rehber her zaman yanında.</li>
          <li><b>Sana Özel Çalışma Planı:</b> Hayallerine giden yol, sadece sana özel çizildi.</li>
          <li><b>Sürekli Performans Takibi:</b> Nereden nereye geldiğini gör, motive olmaya devam et.</li>
        </ul>
      </>
    ),
    image: basariImage,
    alt: "Çok Net Farkla Hedefine Ulaş!",
  },
];

export default function IllustrationSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        width: "100%",
        py: 2,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={!isMobile}
          pagination={isMobile ? { clickable: true } : false}
          spaceBetween={70}
          slidesPerView={1}
          style={{ width: "100%", padding: isMobile ? 0 : "0 70px", height: "450px" }}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={{ xs: 4, md: 8 }}
                alignItems="center"
                justifyContent="space-between"
              >
                {/* Text Content */}
                <Box
                  sx={{
                    flex: { xs: "none", md: "1" },
                    maxWidth: { xs: "100%", md: "48%" },
                    paddingLeft: { xs: 0, md: "20px" },
                  }}
                >
                  <Stack spacing={3}>
                    {/* Heading */}
                    <Typography
                      variant="h2"
                      sx={{
                        fontSize: { xs: "32px", md: "40px" },
                        fontWeight: 700,
                        color: "text.primary",
                        lineHeight: 1.2,
                      }}
                    >
                      {slide.heading}
                    </Typography>

                    {/* Description */}
                    {typeof slide.description === 'string' ? (
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "1.125rem",
                          color: "text.secondary",
                          lineHeight: 1.6,
                          mt: 3,
                        }}
                      >
                        {slide.description}
                      </Typography>
                    ) : (
                      <Box sx={{ mt: 3 }}>{slide.description}</Box>
                    )}

                    {/* Feature List */}
                    <Stack spacing={2}>
                      <Stack direction="row" spacing={2} alignItems="center">
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            backgroundColor: "#F6EB23",
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: "16px",
                            color: "#374151",
                            fontWeight: 500,
                          }}
                        >
                          Bireysel Mentörlük
                        </Typography>
                      </Stack>

                      <Stack direction="row" spacing={2} alignItems="center">
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            backgroundColor: "#1DB5BE",
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: "16px",
                            color: "#374151",
                            fontWeight: 500,
                          }}
                        >
                          Kişiselleş Çalışma Planı
                        </Typography>
                      </Stack>

                      <Stack direction="row" spacing={2} alignItems="center">
                        <Box
                          sx={{
                            width: 8,
                            height: 8,
                            borderRadius: "50%",
                            backgroundColor: "#10B981",
                          }}
                        />
                        <Typography
                          variant="body2"
                          sx={{
                            fontSize: "16px",
                            color: "#374151",
                            fontWeight: 500,
                          }}
                        >
                          Sürekli Performans Takibi
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </Box>

                {/* Illustration */}
                <Box
                  sx={{
                    flex: { xs: "none", md: "1" },
                    maxWidth: { xs: "100%", md: "38%" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: { xs: "24px 0", md: "54px 0" },
                  }}
                >
                  <Box
                    component="img"
                    src={slide.image}
                    alt={slide.alt}
                    sx={{
                      width: { xs: 220, md: 320 },
                      height: { xs: 220, md: 320 },
                      borderRadius: "20px",
                      objectFit: "cover",
                      objectPosition: "center",
                      boxShadow: "0px 20px 40px rgba(255, 125, 0, 0.2)",
                    }}
                  />
                </Box>
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
      <style>{`
        .swiper-button-next, .swiper-button-prev {
          color: #FF7D00;
          background: #fff;
          border-radius: 50%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
          width: 60px;
          height: 60px;
          top: 50%;
          transform: translateY(-50%);
        }
        .swiper-button-next {
          right: 8px;
      
          transition: box-shadow 0.2s ease;
        }
        .swiper-button-next:hover {
          box-shadow: 0 0 8px rgba(255, 125, 0, 0.5);
        }
        .swiper-button-prev {
          left: 8px;
          transition: box-shadow 0.2s ease;
        }
        .swiper-button-prev:hover {
          box-shadow: 0 0 8px rgba(255, 125, 0, 0.5);
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 20px;
        }
        @media (max-width: 900px) {
          .swiper-button-next, .swiper-button-prev {
            display: none !important;
          }
          .swiper-pagination {
            display: flex !important;
            justify-content: center;
            align-items: center;
            bottom: 8px !important;
          }
        }
        .swiper-pagination-bullet {
          background: #FF7D00;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #FF7D00;
          opacity: 1;
        }
      `}</style>
    </Box>
  );
}
