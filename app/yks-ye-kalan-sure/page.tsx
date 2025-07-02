"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";

function YKSCountdown() {
  const YKS_DATE = new Date("2026-09-08T10:15:00+03:00");
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const diff = YKS_DATE.getTime() - now.getTime();
  const totalSeconds = Math.max(0, Math.floor(diff / 1000));
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        background: '#fff',
        border: '2px solid #FFE6B9',
        borderRadius: '14px',
        justifyContent: 'center',
        boxShadow: '0 2px 8px rgba(255, 149, 0, 0.06)',
        px: 1.5,
        py: 2.5,
        fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
        margin: 'auto',
      }}
    >
      <Typography sx={{ color: '#374151', fontWeight: 500, fontSize: 24, mr: 6 }}>
        YKS'ye Kalan
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', }}>
        <Box sx={{ textAlign: 'center' ,borderRight: '1px solid #E2E8F0',px:1 }}>
          <Typography sx={{ fontWeight: 700, fontSize: 30, color: '#23272F', lineHeight: 1 }}>{days}</Typography>
          <Typography sx={{ fontSize: 20, color: '#6B7280', fontWeight: 400, }}>Gün</Typography>
        </Box>
        <Box sx={{ textAlign: 'center',display: 'flex', flexDirection: 'column', alignItems: 'center',borderRight: '1px solid #E2E8F0',px:1 }}>
        <Typography sx={{ fontWeight: 700, fontSize:30, color: '#23272F', lineHeight: 1 }}>
          {hours}
        </Typography>
        <Typography sx={{ fontSize: 20, color: '#6B7280', fontWeight: 400 }}>Saat</Typography>  </Box>
        <Box sx={{ textAlign: 'center',display: 'flex', flexDirection: 'column', alignItems: 'center',borderRight: '1px solid #E2E8F0',px:1 }}>
        <Typography sx={{ fontWeight: 700, fontSize: 30, color: '#23272F', lineHeight: 1 }}>
          {minutes}
        </Typography>
        <Typography sx={{ fontSize: 20, color: '#6B7280', fontWeight: 400,}}>Dakika</Typography>  </Box>
            <Box sx={{ textAlign: 'center',display: 'flex', flexDirection: 'column', alignItems: 'center',px:1 }}>
        <Typography sx={{ fontWeight: 700, fontSize: 30, color: '#FF9500', lineHeight: 1 }}>
          {seconds}
        </Typography>
        <Typography sx={{ fontSize: 20, color: '#FF9500', fontWeight: 400, }}>Saniye</Typography>  </Box>
      </Box>
    </Box>
  );
}

const YKSKalanSurePage = () => {
  return (
    <Box sx={{ background: '#FFF8F0', minHeight: '100vh', py: 8, position: 'relative', overflow: 'hidden' }}>
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
      <Container maxWidth="sm" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 800,
            color: '#FF9500',
            textAlign: 'center',
            mb: 2,
          }}
        >
          YKS'ye Kalan Süre
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#374151',
            textAlign: 'center',
            mb: 5,
            fontSize: { xs: '1rem', md: '1.15rem' },
          }}
        >
          Sınav gününe ne kadar kaldığını aşağıdaki sayaçtan takip edebilirsin. Başarılar!
        </Typography>
        <YKSCountdown />
      </Container>
    </Box>
  );
} 
export default YKSKalanSurePage;