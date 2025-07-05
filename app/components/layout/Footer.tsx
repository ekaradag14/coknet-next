import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/X";

// Add these arrays above the Footer component
const LEGAL_LINKS = [
  { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
  { label: "Kullanıcı Sözleşmesi", href: "/kullanici-sozlesmesi" },
  { label: "Çerez Politikası", href: "/cerez-politikasi" },
  { label: "KVKK Aydınlatma Metni", href: "/kvkk-aydinlatma-metni" },
  { label: "KVKK Açık Rıza Metni", href: "/kvkk-acik-riza-metni" },
  { label: "Açık Rıza Beyanı", href: "/acik-riza-beyani" },
  { label: "Sıkça Sorulan Sorular", href: "/sikca-sorulan-sorular" },
];

const QUICK_LINKS = [
  { label: "Anasayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Özellikler", href: "/ozellikler" },
  { label: "Faydaları", href: "/faydalari" },
  { label: "İletişim", href: "/iletisim" },
  { label: "YKS'ye Kalan Süre", href: "/yks-ye-kalan-sure" },
  { label: "EditEdtech", href: "https://www.editedtech.com/", external: true },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#111827",
        color: "white",
        position: "relative",
      }}
    >
      {/* Main Footer Content */}
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 4 },
            mb: 3,
          }}
        >
          {/* Contact Information */}
          <Box
            sx={{
              flex: { xs: "none", md: 1 },
              minWidth: { xs: "100%", md: "300px" },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#D1D5DB",
                fontSize: "16px",
                fontWeight: 500,
                mb: 2,
              }}
            >
              İletişim Bilgileri
            </Typography>

            <Stack spacing={2}>
              {/* Merged Address and Company Info */}
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <LocationOnIcon
                  sx={{ color: "white", fontSize: 18, mt: 0.2 }}
                />
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "white",
                      fontWeight: 400,
                      mb: 0.5,
                      fontSize: "14px",
                    }}
                  >
                    Merkez Ofis & Şirket Bilgileri
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#9CA3AF", fontSize: "13px" }}
                  >
                    Eğitimde Dijital İçerik Teknolojileri A.Ş.
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#9CA3AF", fontSize: "13px" }}
                  >
                    Reşitpaşa Mah. Katar Cad. İTÜ Arı Teknokent 3 Binası
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#9CA3AF", fontSize: "13px" }}
                  >
                    No:4 İç Kapı No:B105 Sarıyer/İstanbul
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#9CA3AF", fontSize: "13px" }}
                  >
                    Vergi No: 3260695971 - Sarıyer Vergi Dairesi
                  </Typography>
                </Box>
              </Stack>

              {/* Email */}
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <EmailIcon sx={{ color: "white", fontSize: 18, mt: 0.2 }} />
                <Box>
                  <Typography
                    variant="body1"
                    sx={{
                      color: "white",
                      fontWeight: 400,
                      mb: 0.5,
                      fontSize: "14px",
                    }}
                  >
                    E-posta
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#9CA3AF", fontSize: "13px" }}
                  >
                    info@cok.net.tr
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "#9CA3AF", fontSize: "13px" }}
                  >
                    destek@cok.net.tr
                  </Typography>
                </Box>
              </Stack>
            </Stack>

            {/* Social Media */}
            <Box sx={{ mt: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  color: "#D1D5DB",
                  fontSize: "16px",
                  fontWeight: 500,
                  mb: 2,
                }}
              >
                Sosyal Medya
              </Typography>
              <Stack direction="row" spacing={2} flexWrap="wrap">
                <IconButton
                  component="a"
                  href="https://www.youtube.com/@coknetiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: "#FF0000",
                    color: "white",
                    borderRadius: "8px",
                    border: "none",
                    width: 42,
                    height: 42,
                    "&:hover": { backgroundColor: "#cc0000" },
                  }}
                >
                  <YouTubeIcon sx={{ fontSize: 20 }} />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.instagram.com/coknetiz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    background:
                      "linear-gradient(45deg, #FFDD55 0%, #FF543E 50%, #C837AB 100%)",
                    color: "white",
                    borderRadius: "8px",
                    width: 42,
                    border: "none",
                    height: 42,
                    "&:hover": { opacity: 0.8 },
                  }}
                >
                  <InstagramIcon sx={{ fontSize: 20 }} />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://www.tiktok.com/@coknetiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: "#000000",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    width: 42,
                    height: 42,
                    "&:hover": { backgroundColor: "#333333" },
                  }}
                >
                  <img
                    src="/tiktok.png"
                    alt="TikTok"
                    width={18}
                    height={18}
                  />
                </IconButton>
                <IconButton
                  component="a"
                  href="https://x.com/bizcoknetiz"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: "#23272F",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    width: 42,
                    height: 42,
                    "&:hover": { backgroundColor: "#333" },
                  }}
                >
                  <TwitterIcon sx={{ fontSize: 20 }} />
                </IconButton>
              </Stack>
            </Box>
          </Box>

          {/* Links Sections */}
          <Box
            sx={{
              flex: { xs: "none", md: 2 },
              display: 'flex',
              flexDirection: { xs: 'row', md: 'row' },
              gap: { xs: 2, md: 4 },
              mt: { xs: 3, md: 0 },
            }}
          >
            {/* Legal Information */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  color: "#D1D5DB",
                  fontSize: "16px",
                  fontWeight: 500,
                  mb: 2,
                }}
              >
                Yasal Bilgiler
              </Typography>
              <Stack spacing={1}>
                {LEGAL_LINKS.map(link => (
                <Link
                    key={link.href}
                    href={link.href}
                  sx={{
                    color: "#9CA3AF",
                    textDecoration: "none",
                    fontSize: "14px",
                    "&:hover": { color: "white" },
                  }}
                >
                    {link.label}
                </Link>
                ))}
              </Stack>
            </Box>

            {/* Quick Access */}
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h6"
                sx={{
                  color: "#D1D5DB",
                  fontSize: "16px",
                  fontWeight: 500,
                  mb: 2,
                }}
              >
                Hızlı Erişim
              </Typography>
              <Stack spacing={1}>
                {QUICK_LINKS.map(link => (
                <Link
                    key={link.href}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  sx={{
                    color: "#9CA3AF",
                    textDecoration: "none",
                    fontSize: "14px",
                    "&:hover": { color: "white" },
                  }}
                >
                    {link.label}
                </Link>
                ))}
              </Stack>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: "#374151", my: 2 }} />

        {/* Simple Copyright */}
        <Box sx={{ textAlign: "center" }}>
          <Typography
            variant="body2"
            sx={{ color: "#6B7280", fontSize: "13px" }}
          >
            © 2025 EĞİTİMDE DİJİTAL İÇERİK TEKNOLOJİLERİ A.Ş. Tüm hakları
            saklıdır.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
