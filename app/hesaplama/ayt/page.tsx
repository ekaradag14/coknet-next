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

const SUBJECTS = [
  { key: "matematik", name: "Matematik", total: 40 },
  { key: "fizik", name: "Fizik", total: 14 },
  { key: "kimya", name: "Kimya", total: 13 },
  { key: "biyoloji", name: "Biyoloji", total: 13 },
  { key: "edebiyat", name: "Edebiyat", total: 24 },
  { key: "tarih1", name: "Tarih-1", total: 10 },
  { key: "cografya1", name: "Coğrafya-1", total: 6 },
  { key: "tarih2", name: "Tarih-2", total: 11 },
  { key: "cografya2", name: "Coğrafya-2", total: 11 },
  { key: "felsefe_din", name: "Felsefe Grubu + Din", total: 12 },
];

const COEFFICIENTS = {
  SAY: {
    matematik: 3.0,
    fizik: 2.85,
    kimya: 3.07,
    biyoloji: 3.07,
  },
  EA: {
    matematik: 3.0,
    edebiyat: 3.0,
    tarih1: 2.8,
    cografya1: 3.33,
  },
  SOZ: {
    edebiyat: 3.0,
    tarih1: 2.8,
    cografya1: 3.33,
    tarih2: 2.91,
    cografya2: 2.91,
    felsefe_din: 3.33,
  },
};

const PUAN_TURLERI = ["SAY", "EA", "SOZ"];

function calcNet(dogru: number, yanlis: number) {
  return dogru - yanlis / 4;
}

interface AYTResultsCardProps {
  answers: Record<string, { dogru: number; yanlis: number }>;
  subjects: typeof SUBJECTS;
  nets: Record<string, number>;
  obp: number;
  tyt: number;
  puanlar: { [tur: string]: { ayt: number; yerPuan: number } };
  onReset: () => void;
}

function AYTResultsCard({ answers, subjects, nets, obp, tyt, puanlar, onReset }: AYTResultsCardProps) {
  const [tab, setTab] = useState(0);
  const PUAN_TURLERI = Object.keys(puanlar) as (keyof typeof COEFFICIENTS)[];
  const activeTur = PUAN_TURLERI[tab];
  const activePuan = puanlar[activeTur];
  // Netler for this puan türü
  const netKeys = Object.keys(COEFFICIENTS[activeTur] || {});

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
                {PUAN_TURLERI.map((tur, i) => (
                  <Tab key={tur} label={tur + ' Puanı'} />
                ))}
              </Tabs>
            </Box>
          </Box>
          <Divider sx={{ mb: 3 }} />
          {/* Netler Table + AYT Puan */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mb: 3 }}>
            <Box sx={{ flex: 1, minWidth: 260 }}>
              {netKeys.map((key) => (
                <Box key={key} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', py: 1 }}>
                  <Typography sx={{ fontWeight: 500, color: '#374151' }}>{subjects.find(s => s.key === key)?.name} Net:</Typography>
                  <Typography sx={{ fontWeight: 700, color: nets[key] >= 0 ? '#10B981' : '#EF4444' }}>{nets[key]?.toFixed(2) ?? '-'}</Typography>
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
                ({activeTur} × 0.4) + (TYT × 0.4) + (OBP × 0.2)
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
                  <Typography sx={{ color: '#155A7A', fontSize: 16 }}>TYT Katkısı:</Typography>
                  <Typography sx={{ fontWeight: 500, color: '#0284C7', fontSize: 16 }}>{(tyt * 0.4).toFixed(2)}</Typography>
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
                  ({activeTur} × 0.4) + (TYT × 0.4) + (OBP × 0.2)
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
  const [tyt, setTyt] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [touched, setTouched] = useState(false);

  // Validation
  const obpValid = typeof obp === "number" && obp >= 250 && obp <= 500;
  const tytValid = typeof tyt === "number" && tyt >= 100 && tyt <= 500;
  const allSubjectsValid = SUBJECTS.every(
    (s) =>
      answers[s.key].dogru >= 0 &&
      answers[s.key].yanlis >= 0 &&
      answers[s.key].dogru + answers[s.key].yanlis <= s.total
  );
  const atLeastOneAnswered = SUBJECTS.some(
    (s) => answers[s.key].dogru > 0 || answers[s.key].yanlis > 0
  );
  const canCalculate = obpValid && tytValid && allSubjectsValid && atLeastOneAnswered;

  // Netler
  const nets = SUBJECTS.reduce((acc, s) => {
    acc[s.key] = calcNet(answers[s.key].dogru, answers[s.key].yanlis);
    return acc;
  }, {} as Record<string, number>);

  // Puan hesaplama
  function calcAYTPuan(puanTuru: "SAY" | "EA" | "SOZ") {
    let ayt = 0;
    Object.entries(COEFFICIENTS[puanTuru]).forEach(([key, katsayi]) => {
      ayt += (nets[key] || 0) * katsayi;
    });
    return ayt;
  }

  function calcPlacementPuan(ayt: number, tyt: number, obp: number) {
    return ayt + tyt * 0.4 + obp * 0.12;
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
        {/* OBP and TYT Inputs */}
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
              onChange={e => setObp(e.target.value === '' ? null : Math.max(0, Number(e.target.value)))}
              placeholder="OBP puanınızı girin (250-500)"
              inputProps={{ min: 250, max: 500, step: 0.01 }}
              error={!obpValid && touched}
            />
          </Box>
          <Box sx={{ flex: 1 }}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 600, fontSize: 16, mr: 1 }}>TYT Puanı</Typography>
              <Tooltip title="Geçerli TYT puanınız (en az 150 gereklidir)">
                <InfoIcon fontSize="small" color="action" />
              </Tooltip>
            </Box>
            <TextField
              fullWidth
              type="number"
              value={tyt === null ? '' : tyt}
              onChange={e => setTyt(e.target.value === '' ? null : Math.max(0, Number(e.target.value)))}
              placeholder="TYT puanınızı girin (100-500)"
              inputProps={{ min: 100, max: 500, step: 0.01 }}
              error={!tytValid && touched}
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
            obp={obp!}
            tyt={tyt!}
            puanlar={PUAN_TURLERI.reduce((acc, tur) => {
              const ayt = calcAYTPuan(tur as any);
              const yerPuan = calcPlacementPuan(ayt, tyt!, obp!);
              acc[tur] = { ayt, yerPuan };
              return acc;
            }, {} as any)}
            onReset={() => {
              setAnswers(SUBJECTS.reduce((acc, s) => { acc[s.key] = { dogru: 0, yanlis: 0 }; return acc; }, {} as Record<string, { dogru: number; yanlis: number }>));
              setObp(null);
              setTyt(null);
              setShowResults(false);
              setTouched(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}
      </Box>
    </Box>
  );
}
