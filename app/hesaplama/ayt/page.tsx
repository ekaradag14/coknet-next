"use client";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";
import SubjectCard, { SubjectData } from "../../components/cards/SubjectCard";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Divider from "@mui/material/Divider";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import SSSSection from "../../components/ui/SSSSection";

const SUBJECTS = [
  // TYT Subjects
  { key: "tyt_turkce", name: "TYT Türkçe", total: 40 },
  { key: "tyt_matematik", name: "TYT Matematik", total: 40 },
  { key: "tyt_sosyal", name: "TYT Sosyal Bilgiler", total: 20 },
  { key: "tyt_fen", name: "TYT Fen Bilimleri", total: 20 },
  // AYT Subjects
  { key: "edebiyat", name: "AYT Türk Dili ve Edebiyatı", total: 24 },
  { key: "tarih1", name: "AYT Tarih-1", total: 10 },
  { key: "cografya1", name: "AYT Coğrafya-1", total: 6 },
  { key: "tarih2", name: "AYT Tarih-2", total: 11 },
  { key: "cografya2", name: "AYT Coğrafya-2", total: 11 },
  { key: "felsefe", name: "AYT Felsefe", total: 12 },
  { key: "din_felsefe", name: "AYT Din Kültürü / Felsefe", total: 6 },
  { key: "matematik", name: "AYT Matematik", total: 40 },
  { key: "fizik", name: "AYT Fizik", total: 14 },
  { key: "kimya", name: "AYT Kimya", total: 13 },
  { key: "biyoloji", name: "AYT Biyoloji", total: 13 },
  { key: "yabanci_dil", name: "AYT Yabancı Dil (İng.)", total: 80 },
];

const COEFFICIENTS = {
  SAY: {
    // TYT Subjects
    tyt_turkce: 1.11,
    tyt_matematik: 1.11,
    tyt_sosyal: 1.12,
    tyt_fen: 1.20,
    // AYT Subjects
    edebiyat: 0.0,
    tarih1: 0.0,
    cografya1: 0.0,
    tarih2: 0.0,
    cografya2: 0.0,
    felsefe: 0.0,
    din_felsefe: 0.0,
    matematik: 3.19,
    fizik: 2.43,
    kimya: 3.07,
    biyoloji: 2.51,
    yabanci_dil: 0.0,
  },
  SÖZ: {
    // TYT Subjects
    tyt_turkce: 1.23,
    tyt_matematik: 1.24,
    tyt_sosyal: 1.24,
    tyt_fen: 1.33,
    // AYT Subjects
    edebiyat: 3.06,
    tarih1: 2.57,
    cografya1: 2.74,
    tarih2: 3.16,
    cografya2: 2.82,
    felsefe: 3.85,
    din_felsefe: 3.13,
    matematik: 0.0,
    fizik: 0.0,
    kimya: 0.0,
    biyoloji: 0.0,
    yabanci_dil: 0.0,
  },
  EA: {
    // TYT Subjects
    tyt_turkce: 1.14,
    tyt_matematik: 1.15,
    tyt_sosyal: 1.15,
    tyt_fen: 1.23,
    // AYT Subjects
    edebiyat: 2.83,
    tarih1: 2.38,
    cografya1: 2.54,
    tarih2: 0.0,
    cografya2: 0.0,
    felsefe: 0.0,
    din_felsefe: 0.0,
    matematik: 3.28,
    fizik: 0.0,
    kimya: 0.0,
    biyoloji: 0.0,
    yabanci_dil: 0.0,
  },
  DİL: {
    // TYT Subjects
    tyt_turkce: 1.50,
    tyt_matematik: 1.50,
    tyt_sosyal: 1.51,
    tyt_fen: 1.62,
    // AYT Subjects
    edebiyat: 0.0,
    tarih1: 0.0,
    cografya1: 0.0,
    tarih2: 0.0,
    cografya2: 0.0,
    felsefe: 0.0,
    din_felsefe: 0.0,
    matematik: 0.0,
    fizik: 0.0,
    kimya: 0.0,
    biyoloji: 0.0,
    yabanci_dil: 2.61,
  },
};

const puanTurleri = [
  { value: "SAY", label: "SAY (Sayısal)" },
  { value: "SÖZ", label: "SÖZ (Sözel)" },
  { value: "EA", label: "EA (Eşit Ağırlık)" },
  { value: "DİL", label: "DİL (Yabancı Dil)" },
];

function calcNet(dogru: number, yanlis: number) {
  return dogru - yanlis / 4;
}

interface AYTResultsCardProps {
  answers: Record<string, { dogru: number; yanlis: number }>;
  subjects: typeof SUBJECTS;
  nets: Record<string, number>;
  obp: number;
  puanlar: Record<string, { ayt: number; yerPuan: number }>;
  onReset: () => void;
}

function AYTResultsCard({ answers, subjects, nets, obp, puanlar, onReset }: AYTResultsCardProps) {
  const [tab, setTab] = useState(0);
  const activeTur = puanTurleri[tab]?.value as "SAY" | "EA" | "SÖZ" | "DİL" || "SAY";
  const activePuan = puanlar[activeTur];
  // Netler for this puan türü
  const relevantNets = subjects
    .filter((s) => COEFFICIENTS[activeTur][s.key as keyof typeof COEFFICIENTS[typeof activeTur]] > 0)
    .map((s) => ({ ...s, net: nets[s.key] }));

  // Calculate total correct, wrong, blank
  const totalCorrect = subjects.reduce((sum, s) => sum + answers[s.key].dogru, 0);
  const totalWrong = subjects.reduce((sum, s) => sum + answers[s.key].yanlis, 0);
  const totalQuestions = subjects.reduce((sum, s) => sum + s.total, 0);
  const totalBlank = totalQuestions - totalCorrect - totalWrong;
  const overallSuccessRate = (totalCorrect / totalQuestions) * 100;
  const getScoreCategory = (percentage: number) => {
    if (percentage >= 80) return "Mükemmel";
    if (percentage >= 60) return "İyi";
    if (percentage >= 40) return "Orta";
    return "Geliştirilmeli";
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Card sx={{ borderRadius: "12px", border: "1px solid #E5E7EB", background: "white", mb: 4 }}>
        <CardContent sx={{ p: 4 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 700, fontSize: 24 }}>Hesaplama Sonuçları</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 12, height: 12, borderRadius: '50%', backgroundColor: '#10B981' }} />
              <Typography variant="body2" sx={{ color: '#10B981', fontWeight: 500 }}>Hesaplama Tamamlandı</Typography>
            </Box>
          </Box>
          {/* Tabs styled like BenefitsPage */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <Box sx={{ backgroundColor: '#F9FAFB', borderRadius: '12px', p: 0.5, display: 'inline-block' }}>
              <Tabs
                value={tab}
                onChange={(_, v) => setTab(v)}
                sx={{
                  minHeight: 'auto',
                  '& .MuiTabs-indicator': { display: 'none' },
                  '& .MuiTab-root': {
                    minHeight: 'auto',
                    px: 2.5,
                    py: 1.5,
                    margin: 0,
                    marginRight: 1,
                    fontSize: '14px',
                    fontWeight: 600,
                    textTransform: 'none',
                    color: '#6B7280',
                    borderRadius: '8px',
                    fontFamily: 'Inter, -apple-system, Roboto, Helvetica, sans-serif',
                    '&.Mui-selected': {
                      backgroundColor: '#FFF',
                      color: '#111827',
                      boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
                    },
                  },
                }}
              >
                {puanTurleri.map((tur, i) => (
                  <Tab key={tur.value} label={tur.label} />
                ))}
              </Tabs>
            </Box>
          </Box>
          <Divider sx={{ mb: 3 }} />
          {/* Netler Table + AYT Puan */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 3 }}>
            <Box sx={{ flex: 1, minWidth: 260 }}>
              {relevantNets.map((s) => (
                <Box key={s.key} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 1 }}>
                  <Typography sx={{ fontWeight: 500, color: '#374151' }}>{s.name} Net:</Typography>
                  <Typography sx={{ fontWeight: 700, color: s.net >= 0 ? '#10B981' : '#EF4444' }}>{s.net?.toFixed(2) ?? '-'}</Typography>
                </Box>
              ))}
            </Box>
            <Box sx={{ minWidth: 220, flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Card sx={{ p: 3, borderRadius: 2, background: '#F9FAFB', boxShadow: 'none', minWidth: 180, textAlign: 'center' }}>
                <Typography sx={{ fontWeight: 500, color: '#6B7280', mb: 1 }}>AYT Puanı</Typography>
                <Typography sx={{ fontWeight: 700, fontSize: 32, color: '#111827' }}>{activePuan.ayt.toFixed(2)}</Typography>
                <Typography sx={{ fontSize: 14, color: '#6B7280' }}>{activeTur} Puan Türü</Typography>
              </Card>
            </Box>
          </Box>
          {/* Final Yerleştirme Puanı */}
          <Box sx={{ my: 3 }}>
            <Card sx={{ background: 'linear-gradient(90deg, #FF7A00 100%, #FF9500 0%)', borderRadius: 2, p: 4, textAlign: 'center', boxShadow: 'none' }}>
              <Typography sx={{ color: 'white', fontWeight: 700, fontSize: 20, mb: 1 }}>Final Yerleştirme Puanınız</Typography>
              <Typography sx={{ color: 'white', fontWeight: 700, fontSize: 48, mb: 1 }}>{activePuan.yerPuan.toFixed(2)}</Typography>
              <Typography sx={{ color: 'white', fontSize: 16, opacity: 0.9, mb: 0.5 }}>{activeTur} Yerleştirme Puanı</Typography>
              <Typography sx={{ color: 'white', fontSize: 14, opacity: 0.75 }}>
                ({activeTur} × 1.0) + (OBP × 0.12)
              </Typography>
            </Card>
          </Box>
          {/* Puan Detayları & Genel Değerlendirme */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 3 }}>
            <Card sx={{
              flex: 1,
              minWidth: 220,
              background: '#F4FAFF',
              border: '2px solid #38BDF8',
              borderRadius: '12px',
              p: 3,
              boxShadow: 'none',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', background: '#38BDF8', mr: 1 }} />
                <Typography sx={{ fontWeight: 700, color: '#155A7A', fontSize: 18 }}>Puan Detayları</Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ color: '#155A7A', fontSize: 16 }}>AYT Katkısı:</Typography>
                  <Typography sx={{ fontWeight: 500, color: '#0284C7', fontSize: 16 }}>{activePuan.ayt.toFixed(2)}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography sx={{ color: '#155A7A', fontSize: 16 }}>OBP Katkısı:</Typography>
                  <Typography sx={{ fontWeight: 500, color: '#0284C7', fontSize: 16 }}>{(obp * 0.2).toFixed(2)}</Typography>
                </Box>
              </Box>
            </Card>
            <Card sx={{ flex: 1, minWidth: 220, background: '#F0FDF4', borderRadius: 2, p: 3, boxShadow: 'none' }}>
              <Typography sx={{ fontWeight: 600, color: '#16A34A', mb: 1 }}>Genel Değerlendirme</Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ color: '#166534' }}>Puan Türü:</Typography>
                  <Typography sx={{ fontWeight: 700 }}>{activeTur}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ color: '#166534' }}>Başarı Durumu:</Typography>
                  <Typography sx={{ fontWeight: 700 }}>{getScoreCategory(overallSuccessRate)}</Typography>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography sx={{ color: '#166534' }}>Önerilen Alan:</Typography>
                  <Typography sx={{ fontWeight: 700 }}>{activeTur === 'SAY' ? 'Sayısal' : activeTur === 'EA' ? 'Eşit Ağırlık' : 'Sözel'}</Typography>
                </Box>
              </Box>
            </Card>
          </Box>
          {/* Calculation Details */}
          <Card sx={{ borderRadius: 2, background: '#F9FAFB', p: 3, boxShadow: 'none', mb: 3 }}>
            <Typography sx={{ fontWeight: 600, color: '#111827', mb: 2 }}>Hesaplama Detayları</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3 }}>
              <Box sx={{ flex: 1, minWidth: 220 }}>
                <Typography sx={{ color: '#6B7280', fontSize: 14 }}>Net Hesaplama Formülü:</Typography>
                <Typography sx={{ color: '#374151', fontSize: 14, mb: 1 }}>Net = Doğru - (Yanlış ÷ 4)</Typography>
                <Typography sx={{ color: '#6B7280', fontSize: 14 }}>AYT Puan Formülü:</Typography>
                <Typography sx={{ color: '#374151', fontSize: 14, mb: 1 }}>Puan türüne göre değişir</Typography>
                <Typography sx={{ color: '#6B7280', fontSize: 14 }}>Yerleştirme Puanı Formülü:</Typography>
                <Typography sx={{ color: '#374151', fontSize: 14 }}>
                  ({activeTur} × 1.0) + (OBP × 0.12)
                </Typography>
              </Box>
            </Box>
            <Typography sx={{ color: '#9CA3AF', fontSize: 12, mt: 2 }}>
              * Bu hesaplamalar ÖSYM'nin resmi katsayılarına dayanmaktadır. Gerçek puanınız küçük farklılıklar gösterebilir.
            </Typography>
          </Card>
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Button
              variant="outlined"
              onClick={onReset}
              sx={{ width: 220,border: 'none', height: 48, backgroundColor: '#FF9500', borderRadius: '8px', fontSize: 16, fontWeight: 600, color: '#FFF', textTransform: 'none', boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)', '&:hover': { backgroundColor: '#E6850E' } }}
            >
              Yeniden Hesapla
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default function AYTPuanHesaplamaPage() {
  const [answers, setAnswers] = useState(
    SUBJECTS.reduce((acc, s) => {
      acc[s.key] = { dogru: 0, yanlis: 0 };
      return acc;
    }, {} as Record<string, { dogru: number; yanlis: number }>)
  );
  const [obp, setObp] = useState<number | null>(null);
  const [diplomaPuani, setDiplomaPuani] = useState<number | null>(null);
  const [halfCoefficient, setHalfCoefficient] = useState(false);
  const [vocationalBonus, setVocationalBonus] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [touched, setTouched] = useState(false);

  // Validation
  const obpValid = typeof obp === "number" && obp >= 250 && obp <= 500;
  const diplomaPuaniValid = typeof diplomaPuani === "number" && diplomaPuani >= 50 && diplomaPuani <= 100;
  const allSubjectsValid = SUBJECTS.every(
    (s) =>
      answers[s.key].dogru >= 0 &&
      answers[s.key].yanlis >= 0 &&
      answers[s.key].dogru + answers[s.key].yanlis <= s.total
  );
  const atLeastOneAnswered = SUBJECTS.some(
    (s) => answers[s.key].dogru > 0 || answers[s.key].yanlis > 0
  );
  
  // Only one of OBP or diploma puanı can be filled
  const obpOrDiplomaValid = (obpValid && !diplomaPuani) || (diplomaPuaniValid && !obp);
  const canCalculate = obpOrDiplomaValid && allSubjectsValid && atLeastOneAnswered;

  // Convert diploma puanı to OBP if needed
  const effectiveObp = obp || (diplomaPuani ? diplomaPuani * 5 : null);
  
  // Apply OBP coefficient adjustments
  const adjustedObp = effectiveObp ? 
    effectiveObp * (halfCoefficient ? 0.5 : 1) + (vocationalBonus ? 60 : 0) : null;

  // Netler
  const nets = SUBJECTS.reduce((acc, s) => {
    acc[s.key] = calcNet(answers[s.key].dogru, answers[s.key].yanlis);
    return acc;
  }, {} as Record<string, number>);

  // Puan hesaplama
  function calcAYTPuan(puanTuru: "SAY" | "EA" | "SÖZ" | "DİL") {
    // Base points for different fields
    const baseScores = {
      SAY: 133.28,
      EA: 132.28,
      SÖZ: 130.36,
      DİL: 110.58,
    };
    
    let ayt = baseScores[puanTuru];
    Object.entries(COEFFICIENTS[puanTuru]).forEach(([key, katsayi]) => {
      ayt += (nets[key] || 0) * katsayi;
    });
    return ayt;
  }

  function calcPlacementPuan(ayt: number, obp: number) {
    // Yerleştirme puanı = AYT puanı + OBP × 0.12
    return ayt + obp * 0.12;
  }

  // UI
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
          📝 AYT Puan Hesaplama Aracı
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: "16px",
            color: "#6B7280",
            lineHeight: 1.6,
          }}
        >
          Doğru ve yanlış sayılarını girerek AYT netlerinizi ve puanınızı hesaplayın. ÖSYM katsayıları kullanılarak gerçek puanınızı öğrenin.
        </Typography>
      </Box>
      {/* Main Content */}
      <Box sx={{ maxWidth: 1200, mx: "auto", px: 2, pb: 8, position: "relative", zIndex: 1 }}>
        {/* Subject Cards */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 3, mb: 4 }}>
          {SUBJECTS.map((s) => {
            const { dogru, yanlis } = answers[s.key];
            const subjectData: SubjectData = {
              name: s.name,
              totalQuestions: s.total,
              correct: dogru,
              wrong: yanlis,
            };
            return (
              <Box key={s.key}>
                <SubjectCard
                  subject={subjectData}
                  onUpdate={(field, value) => {
                    let newDogru = field === "correct" ? value : dogru;
                    let newYanlis = field === "wrong" ? value : yanlis;
                    // Enforce dogru + yanlis <= s.total
                    if (newDogru + newYanlis > s.total) {
                      if (field === "correct") newYanlis = s.total - newDogru;
                      else newDogru = s.total - newYanlis;
                    }
                    setAnswers((prev) => ({ ...prev, [s.key]: { dogru: newDogru, yanlis: newYanlis } }));
                    setTouched(true);
                  }}
                />
              </Box>
            );
          })}
        </Box>
        {/* OBP and Diploma Puanı Inputs */}
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 3, mb: 4 }}>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, fontSize: 16, mr: 1 }}>OBP</Typography>
              <Tooltip title="e-Okul'dan öğrenebilirsiniz. Min: 250, Max: 500">
                <InfoIcon fontSize="small" color="action" />
              </Tooltip>
            </Box>
            <TextField
              fullWidth
              type="number"
              value={obp === null ? '' : obp}
              onChange={e => {
                const value = e.target.value === '' ? null : Math.max(0, Number(e.target.value));
                setObp(value);
                if (value !== null) setDiplomaPuani(null); // Clear diploma puanı if OBP is entered
              }}
              placeholder="OBP puanınızı girin (250-500)"
              inputProps={{ min: 250, max: 500, step: 0.01 }}
              error={!obpValid && touched && obp !== null}
              disabled={diplomaPuani !== null}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, fontSize: 16, mr: 1 }}>Diploma Puanı</Typography>
              <Tooltip title="Diploma not ortalamanız (50-100). OBP'ye çevrilir (×5)">
                <InfoIcon fontSize="small" color="action" />
              </Tooltip>
            </Box>
            <TextField
              fullWidth
              type="number"
              value={diplomaPuani === null ? '' : diplomaPuani}
              onChange={e => {
                const value = e.target.value === '' ? null : Math.max(0, Number(e.target.value));
                setDiplomaPuani(value);
                if (value !== null) setObp(null); // Clear OBP if diploma puanı is entered
              }}
              placeholder="Diploma puanınızı girin (50-100)"
              inputProps={{ min: 50, max: 100, step: 0.01 }}
              error={!diplomaPuaniValid && touched && diplomaPuani !== null}
              disabled={obp !== null}
            />
          </Box>
        </Box>
        {/* OBP Coefficient Options */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, fontSize: 16, mb: 2, color: '#374151' }}>
            OBP Katsayı Seçenekleri
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={halfCoefficient}
                  onChange={(e) => setHalfCoefficient(e.target.checked)}
                  sx={{
                    color: '#6B7280',
                    '&.Mui-checked': {
                      color: '#FF9500',
                    },
                  }}
                />
              }
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ fontSize: 14, color: '#374151' }}>Önceki sene YKS puanları ile bir yükseköğretim programına yerleştim.</Typography>
                  <Tooltip title="Meslek lisesi mezunları için OBP'nin yarısı alınır">
                    <InfoIcon fontSize="small" color="action" sx={{ ml: 0.5 }} />
                  </Tooltip>
                </Box>
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={vocationalBonus}
                  onChange={(e) => setVocationalBonus(e.target.checked)}
                  sx={{
                    color: '#6B7280',
                    '&.Mui-checked': {
                      color: '#FF9500',
                    },
                  }}
                />
              }
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={{ fontSize: 14, color: '#374151' }}>Bir mesleğe yönelik program uygulayan ortaöğretim kurumundan mezun oldum.</Typography>
                  <Tooltip title="Meslek lisesi mezunları için ek 60 puan">
                    <InfoIcon fontSize="small" color="action" sx={{ ml: 0.5 }} />
                  </Tooltip>
                </Box>
              }
            />
          </Box>
        </Box>
        {/* Calculate Button */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
          <Button
                     variant="outlined"
            disabled={!canCalculate}
            onClick={() => { setShowResults(true); setTouched(true); }}
            sx={{
              width: "220px",
              height: "56px",
              backgroundColor: "#FF9500",
              borderRadius: "8px",
              fontSize: "16px",
              fontWeight: 600,
                border: 'none',
              color: "#FFF",
              textTransform: "none",
              boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
              "&:hover": { backgroundColor: "#E6850E" },
              "&:disabled": { backgroundColor: "#E5E7EB", color: "#9CA3AF", border: 'none' },
            }}
          >
            Hesapla
          </Button>
        </Box>
        {/* Results */}
        {showResults && canCalculate && (
          <AYTResultsCard
            answers={answers}
            subjects={SUBJECTS}
            nets={nets}
            obp={adjustedObp!}
            puanlar={puanTurleri.reduce((acc, tur) => {
              const ayt = calcAYTPuan(tur.value as "SAY" | "EA" | "SÖZ" | "DİL");
              const yerPuan = calcPlacementPuan(ayt, adjustedObp!);
              acc[tur.value] = { ayt, yerPuan };
              return acc;
            }, {} as Record<string, { ayt: number; yerPuan: number }>)}
            onReset={() => {
              setAnswers(SUBJECTS.reduce((acc, s) => { acc[s.key] = { dogru: 0, yanlis: 0 }; return acc; }, {} as Record<string, { dogru: number; yanlis: number }>));
              setObp(null);
              setDiplomaPuani(null);
              setHalfCoefficient(false);
              setVocationalBonus(false);
              setShowResults(false);
              setTouched(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </Box>
      <SSSSection />
    </Box>
  );
}
