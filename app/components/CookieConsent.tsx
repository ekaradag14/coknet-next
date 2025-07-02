'use client';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    setIsVisible(false);
    // Add cookie acceptance logic here
    localStorage.setItem("cookieConsent", "accepted");
  };

  const handleReject = () => {
    setIsVisible(false);
    // Add cookie rejection logic here
    localStorage.setItem("cookieConsent", "rejected");
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "#FFF",
        border: "1px solid #E5E7EB",
        boxShadow: "0px -4px 24px rgba(17, 24, 39, 0.10)",
        p: 3,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: { xs: "column", md: "row" },
        gap: { xs: 3, md: 0 },
        minHeight: "131px",
      }}
    >
      {/* Content Section */}
      <Box
        sx={{
          flex: 1,
          maxWidth: { xs: "100%", md: "672px" },
        }}
      >
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#111827",
            lineHeight: "28px",
            mb: 1,
            fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
          }}
        >
          Çerezleri ve gizliliğinizi önemsiyoruz
        </Typography>

        <Box sx={{ fontSize: "14px", lineHeight: "22.75px" }}>
          <Typography
            component="span"
            sx={{
              color: "#6B7280",
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            Web sitemizde deneyiminizi iyileştirmek için çerezler kullanıyoruz.
            Sitemizi kullanmaya devam ederek{" "}
          </Typography>

          <Link
            href="/gizlilik-politikasi"
            sx={{
              color: "#F6EB23",
              fontWeight: 600,
              textDecoration: "none",
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            Gizlilik Politikamızı
          </Link>

          <Typography
            component="span"
            sx={{
              color: "#6B7280",
              mx: 0.5,
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            ve
          </Typography>
          <Link
            href="/cerez-politikasi"
            sx={{
              color: "#F6EB23",
              fontWeight: 600,
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              textDecoration: "none",
              borderBottom: "none",
            }}
          >
            Çerez Politikamızı
          </Link>

          <Typography
            component="span"
            sx={{
              color: "#6B7280",
              ml: 0.5,
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            }}
          >
            kabul etmiş olursunuz.
          </Typography>
        </Box>
      </Box>

      {/* Buttons Section */}
      <Box
        sx={{
          display: "flex",
          gap: 1.5,
          flexShrink: 0,
        }}
      >
        <Button
          onClick={handleReject}
          sx={{
            border: "1px solid #E5E7EB",
            borderRadius: "8px",
            px: 3,
            py: 1.625,
            backgroundColor: "#FFF",
            color: "#374151",
            fontSize: "14px",
            fontWeight: 600,
            textTransform: "none",
            fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            "&:hover": {
              backgroundColor: "#F9FAFB",
              borderColor: "#D1D5DB",
            },
          }}
        >
          Reddet
        </Button>

        <Button
          onClick={handleAccept}
          sx={{
            backgroundColor: "#F6EB23",
            borderRadius: "8px",
            px: 3,
            py: 1.625,
            color: "#FFF",
            fontSize: "14px",
            fontWeight: 600,
            textTransform: "none",
            fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
            "&:hover": {
              backgroundColor: "#6D28D9",
            },
          }}
        >
          Kabul Et
        </Button>
      </Box>
    </Box>
  );
}
