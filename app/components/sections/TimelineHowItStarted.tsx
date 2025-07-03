import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Divider, useTheme } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import ModeStandbyIcon from '@mui/icons-material/ModeStandby';
import DrawIcon from '@mui/icons-material/Draw';

const steps = [
  {
    icon: (
      <SearchIcon sx={{ color: '#fff', fontSize: 40 }} />
    ),
    title: "Sorun Belirlendi",
    description:
      "Herkes sınava aynı şekilde hazırlanıyor ama herkes farklı öğreniyor. Bu uyumsuzluk göz ardı ediliyordu.",
  },
  {
    icon: (
      <Diversity3Icon sx={{ color: '#fff', fontSize: 40 }} />
    ),
    title: "Ekipler Buluştu",
    description:
      "Yıllardır eğitimde yapay zeka, dijital içerik, sınav sistemleri ve yayıncılık alanında çalışan farklı ekipler bir araya geldi.",
  },
  {
    icon: (
      <ModeStandbyIcon sx={{ color: '#fff', fontSize: 40 }} />
    ),
    title: "Ortak Hedef",
    description:
      "Bireyselleşmiş, sürdürülebilir ve güçlü bir öğrenme sistemi kurmak. Ezberi değil kavrayışı esas almak.",
  },
  {
    icon: (
      <DrawIcon sx={{ color: '#fff', fontSize: 40 }} />
    ),
    title: "Sistem Tasarlandı",
    description:
      "Öğrencinin güçlü ve zayıf yanlarını tanıyan, ona göre hareket eden bir platform oluşturuldu.",
  },
];

const TimelineHowItStarted = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ width: "100%", py: { xs: 4, md: 8 }, px: { xs: 0, md: 2 } }}>
      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: "28px", md: "36px" },
          fontWeight: 700,
          color: "#111827",
          textAlign: "center",
          mb: 1,
          fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
        }}
      >
        ÇokNet Nasıl Ortaya Çıktı?
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "16px", md: "18px" },
          color: "#6B7280",
          textAlign: "center",
          mb: { xs: 4, md: 8 },
          fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
        }}
      >
        Bireyselleşmiş eğitimin doğuş hikayesi
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "stretch" : "flex-start",
          justifyContent: "space-between",
          gap: isMobile ? 4 : 0,
          position: "relative",
          width: "100%",
          minHeight: isMobile ? 120 * steps.length : undefined,
          mx: isMobile ? "auto" : 0,
          maxWidth: isMobile ? "400px" : "100%",
        }}
      >
        {/* Timeline Line */}
        <Box
          sx={{
            position: "absolute",
            top: isMobile ? 0 : 38,
            left: isMobile ? 32 : 0,
            width: isMobile ? '2px' : "100%",
            height: isMobile ? '100%' : 7,
            background: "#FFA500",
            opacity: 0.3,
            zIndex: 0,
            mx: isMobile ? 0 : "auto",
            my: isMobile ? 0 : undefined,
            borderRadius: 2,
          }}
        />
        {steps.map((step, idx) => {
          if (isMobile) {
            return (
              <Box
                key={idx}
                sx={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  mb: idx !== steps.length - 1 ? 6 : 0,
                  width: '100%',
                  minHeight: 120,
                }}
              >
                {/* Icon centered on the vertical line at left */}
                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 2,
                    width: 64,
                    height: 64,
                    background: "#FFA500",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0px 4px 16px rgba(255, 149, 0, 0.10)",
                    flexShrink: 0,
                    ml: 0,
                    mr: 2,
                  }}
                >
                  {step.icon}
                </Box>
                {/* Text block always to the right of the icon */}
                <Box
                  sx={{
                    flex: 1,
                    pl: 2,
                    textAlign: 'left',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontSize: "20px",
                      color: "#111827",
                      mb: 1,
                      fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      color: "#374151",
                      fontWeight: 400,
                      fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                      maxWidth: 240,
                    }}
                  >
                    {step.description}
                  </Typography>
                </Box>
              </Box>
            );
          }
          // Desktop: everything centered as before
          return (
            <Box
              key={idx}
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
                zIndex: 1,
                mb: idx !== steps.length - 1 ? 6 : 0,
              }}
            >
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  background: "#FFA500",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mb: 2,
                  boxShadow: "0px 4px 16px rgba(255, 149, 0, 0.10)",
                }}
              >
                {step.icon}
              </Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  fontSize: "20px",
                  color: "#111827",
                  textAlign: "center",
                  mb: 1,
                  fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                {step.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  color: "#374151",
                  textAlign: "center",
                  fontWeight: 400,
                  fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  maxWidth: 240,
                }}
              >
                {step.description}
              </Typography>
            </Box>
          );
        })}
      </Box>
      <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  fontSize: "27px",
                  color: "#111827",
                  textAlign: "center",
                  mt: 4,
                mb:1,
                  fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                }}
              >
                     Ve artık buradayız
      </Typography>
      <Typography
                sx={{
                  fontSize: "15px",
                  color: "#374151",
                  textAlign: "center",
          fontWeight: 400,
          mb: 8,
                  fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                 
                }}
              >
               Öğrencilerin yanındayız. Sadece sınav için değil, gerçekten öğrenmeyi kolaylaştırmak için.
              </Typography>
<Divider/>
    </Box>
  );
};

export default TimelineHowItStarted; 