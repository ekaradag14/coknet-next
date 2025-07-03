"use client";
import HeroSection from "./components/sections/HeroSection";
import AboutCokNetSection from "./components/sections/AboutCokNetSection";
import IllustrationSection from "./components/sections/IllustrationSection";
import FeatureHighlightsSection from "./components/sections/FeatureHighlightsSection";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Image from "next/image";
import hazirMisinImage from "../public/hazir-misin-min.png";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutCokNetSection />
      <IllustrationSection />
      <FeatureHighlightsSection />
      {/* Hazır Mısın? Card at the bottom */}
      <Box sx={{ backgroundColor: "#fff", pb: 8,  px:{xs:2,md:0}, }}>
        <Card
          sx={{
            borderRadius: "20px",
            background: {
              xs: "linear-gradient(180deg, rgba(246, 218, 35, 0.88) 56.92%, #FFFFFF 100%)",
              md: "linear-gradient(90deg, rgba(246, 218, 35, 0.83) 56.92%, #FFFFFF 100%)",
            },
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            position: "relative",
            overflow: "hidden",
            border: "1px none rgba(0, 0, 0, 0.12)",
            maxWidth: { xs: '100%', md: 'lg' },
            mx: "auto",
          }}
        >
          <CardContent sx={{ py: 0 }}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={4}
              alignItems="center"
              justifyContent="space-between"
            >
              {/* Left Content */}
              <Box sx={{ flex: 1, textAlign: "left" }}>
                <Typography
                  variant="h3"
                  sx={{
                    color: "white",
                    fontSize: "32px",
                    fontWeight: 700,
                    lineHeight: "48px",
                    mb: 3,
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Hazır mısın?
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: "27px",
                    mb: 4,
                    maxWidth: "650px",
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Öğrencinin gelişimi düzenli izlenir, ihtiyacı olan her noktada yönlendirilir. Rehber öğretmenlerimiz akademik gelişime katkı sunarken, kişisel gelişiminizi de destekler. Hedefiniz ne olursa olsun, biz yanınızdayız. YKS'de başarı ÇOKNET ile sadece net değil, yön de kazanırsınız!
                </Typography>
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  alignItems={{ xs: "stretch", sm: "flex-start" }}
                >
                  <Button
                    variant="outlined"
                    sx={{
                      backgroundColor: "white",
                      borderColor: "white",
                      color: "#FF9500",
                      borderRadius: "12px",
                      borderWidth: "2px",
                      fontSize: "16px",
                      fontWeight: 700,
                      lineHeight: "24px",
                      textTransform: "none",
                      px: 4,
                      py: 2.25,
                      height: 60,
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                      "&:hover": {
                        backgroundColor: "white",
                        borderWidth: "2px",
                      },
                    }}
                    component="a"
                    href="/tanisma-formu"
                  >
                    Öncelikli Erişimi Kaçırma
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{
                      backgroundColor: "rgba(93, 93, 93, 0.2)",
                      borderColor: "white",
                      color: "white",
                      borderRadius: "12px",
                      borderWidth: "2px",
                      fontSize: "16px",
                      fontWeight: 700,
                      lineHeight: "24px",
                      textTransform: "none",
                      px: 4,
                      py: 2.25,
                      height: 60,
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                      "&:hover": {
                        backgroundColor: "#FF9500",
                        borderWidth: "2px",
                      },
                    }}
                  >
                    Faydalar Çok Net
                  </Button>
                </Stack>
              </Box>
              {/* Right Illustration */}
              <Box sx={{ flex: { xs: "none", md: "0 0 300px" }, height: "100%" }}>
                <Box
                  component={Image}
                  src={hazirMisinImage}
                  alt="Hazır Mısın"
                  sx={{
                    width: { xs: 280, md: 300 },
                    height: "350px",
                    borderRadius: "16px",
                    objectFit: "cover",
                    objectPosition: "center",
                    mx: "auto",
                    display: "block",
                  }}
                />
              </Box>
            </Stack>
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default HomePage;