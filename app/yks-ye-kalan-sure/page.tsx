"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";
import EventNoteIcon from "@mui/icons-material/EventNote";

function YKSCountdown() {
  const YKS_DATE = new Date("2026-06-20T10:15:00+03:00");
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

// Helper component to render a row inside exam cards
const InfoRow = ({ label, value, valueColor }: { label: string; value: string; valueColor?: string }) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
    <Typography sx={{ color: '#6B7280', fontSize: 14 }}>{label}</Typography>
    <Typography sx={{ fontWeight: 600, fontSize: 14, color: valueColor || '#111827' }}>{value}</Typography>
  </Box>
);

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
      <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
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
          YKS'ye Kalan Süre | YKS Ne Zaman | YKS Sayaç
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

        {/* 2026 YKS Information */}
        <Box mt={6}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 700,
              color: '#FF9500',
              textAlign: 'center',
              mb: 2,
            }}
          >
            2026 YKS Geri Sayım Başladı
          </Typography>

          <Typography variant="body1" sx={{ mb: 2, color: '#374151' }}>
            2026 Yükseköğretim Kurumları Sınavı (YKS) maratonu için geri sayım hızlandı. TYT, AYT ve YDT oturumları 20–21 Haziran&nbsp;2026 tarihlerinde gerçekleştirilecek.
          </Typography>

          <Box component="ul" sx={{ pl: 3, mb: 3, color: '#374151' }}>
            <li>2026&nbsp;TYT&nbsp;– 20&nbsp;Haziran&nbsp;2026&nbsp;Cumartesi, 10:15</li>
            <li>2026&nbsp;AYT&nbsp;– 21&nbsp;Haziran&nbsp;2026&nbsp;Pazar, 10:15</li>
            <li>2026&nbsp;YDT&nbsp;– 21&nbsp;Haziran&nbsp;2026&nbsp;Pazar, 15:45</li>
          </Box>

          <Typography
            variant="h3"
            sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 600, mb: 1, color: '#23272F' }}
          >
            Başvuru Dönemi
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#374151' }}>
            Başvuruların 5&nbsp;Şubat&nbsp;2026 haftasında başlaması ve Şubat-Mart&nbsp;2026 boyunca devam etmesi bekleniyor. Adaylar başvurularını ÖSYM Başvuru Merkezleri aracılığıyla ya da&nbsp;
            <Link href="https://ais.osym.gov.tr" target="_blank" rel="noopener" underline="hover">
              ÖSYM&nbsp;AİS
            </Link>
            &nbsp;ve ÖSYM Aday İşlemleri Mobil Uygulaması üzerinden bireysel olarak yapabilecek.
          </Typography>

          <Typography
            variant="h3"
            sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 600, mb: 1, color: '#23272F' }}
          >
            Geç Başvuru
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: '#374151' }}>
            Zamanında başvuru yapamayan adaylar için Mart&nbsp;2026 içerisinde ilan edilecek ek günlerde geç başvuru imkânı tanınacak. Geç başvurular standart ücretten daha yüksek olduğu için işlemlerinizi ilk başvuru döneminde tamamlamanızı öneririz.
          </Typography>

          <Typography
            variant="h3"
            sx={{ fontSize: { xs: '1.25rem', md: '1.5rem' }, fontWeight: 600, mb: 1, color: '#23272F' }}
          >
            Sonuçların Açıklanması
          </Typography>
          <Typography variant="body1" sx={{ color: '#374151' }}>
            ÖSYM takvimine göre 2026&nbsp;YKS sonuçlarının 21&nbsp;Temmuz&nbsp;2026 tarihinde duyurulması bekleniyor; ancak kurum, önceki yıllarda olduğu gibi sonuçları planlanan tarihten daha erken yayımlayabilir.
          </Typography>
        </Box>

        {/* 2026 YKS Exam Cards */}
        <Box mt={8}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.75rem', md: '2.25rem' },
              fontWeight: 800,
              color: '#0F172A',
              textAlign: 'center',
              mb: 4,
            }}
          >
            2026 YKS Sınav Tarihleri
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
            {/* TYT Card */}
            <Paper
              elevation={0}
              sx={{
                border: '1px solid #E2E8F0',
                borderRadius: 2,
                p: 3,
                backgroundColor: '#fff',
                height: '100%',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box
                  sx={{
                    backgroundColor: '#FFEAD4',
                    borderRadius: 1.5,
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                  }}
                >
                  <InsertDriveFileIcon sx={{ color: '#FF9500' }} />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: '#111827' }}>
                    1. Oturum TYT
                  </Typography>
                  <Typography sx={{ fontSize: 14, color: '#6B7280' }}>
                    Temel Yeterlilik Testi
                  </Typography>
                </Box>
              </Box>

              <InfoRow label="Sınav Tarihi" value="20 Haziran 2026" />
              <InfoRow label="Sınav Günü" value="Cumartesi" />
              <InfoRow label="Saat" value="10:15" valueColor="#FF9500" />
              <InfoRow label="Sınav Süresi" value="165 dakika" />
            </Paper>

            {/* AYT Card */}
            <Paper
              elevation={0}
              sx={{
                border: '1px solid #E2E8F0',
                borderRadius: 2,
                p: 3,
                backgroundColor: '#fff',
                height: '100%',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box
                  sx={{
                    backgroundColor: '#FFEAD4',
                    borderRadius: 1.5,
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                  }}
                >
                  <QueryBuilderIcon sx={{ color: '#FFA000' }} />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: '#111827' }}>
                    2. Oturum AYT
                  </Typography>
                  <Typography sx={{ fontSize: 14, color: '#6B7280' }}>
                    Alan Yeterlilik Testi
                  </Typography>
                </Box>
              </Box>

              <InfoRow label="Sınav Tarihi" value="21 Haziran 2026" />
              <InfoRow label="Sınav Günü" value="Pazar" />
              <InfoRow label="Saat" value="10:15" valueColor="#FF9500" />
              <InfoRow label="Sınav Süresi" value="180 dakika" />
            </Paper>

            {/* YDT Card */}
            <Paper
              elevation={0}
              sx={{
                border: '1px solid #E2E8F0',
                borderRadius: 2,
                p: 3,
                backgroundColor: '#fff',
                height: '100%',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box
                  sx={{
                    backgroundColor: '#FFEAD4',
                    borderRadius: 1.5,
                    width: 40,
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mr: 2,
                  }}
                >
                  <EventNoteIcon sx={{ color: '#FFB300' }} />
                </Box>
                <Box>
                  <Typography sx={{ fontWeight: 700, color: '#111827' }}>
                    3. Oturum YDT
                  </Typography>
                  <Typography sx={{ fontSize: 14, color: '#6B7280' }}>
                    Yabancı Dil Testi
                  </Typography>
                </Box>
              </Box>

              <InfoRow label="Sınav Tarihi" value="21 Haziran 2026" />
              <InfoRow label="Sınav Günü" value="Pazar" />
              <InfoRow label="Saat" value="15:45" valueColor="#FF9500" />
              <InfoRow label="Sınav Süresi" value="120 dakika" />
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
} 
export default YKSKalanSurePage;