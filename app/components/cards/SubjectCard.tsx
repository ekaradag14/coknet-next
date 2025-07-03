import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";

export interface SubjectData {
  name: string;
  totalQuestions: number;
  correct: number;
  wrong: number;
}

interface SubjectCardProps {
  subject: SubjectData;
  onUpdate: (field: "correct" | "wrong", value: number) => void;
  showNet?: boolean;
}

export default function SubjectCard({ subject, onUpdate, showNet = true }: SubjectCardProps) {
  const net = subject.correct - subject.wrong / 4;

  // Handlers to ensure correct + wrong <= totalQuestions
  const handleCorrectChange = (_: any, value: number | number[]) => {
    let correct = typeof value === 'number' ? value : subject.correct;
    onUpdate('correct', correct);
  };

  const handleWrongChange = (_: any, value: number | number[]) => {
    let wrong = typeof value === 'number' ? value : subject.wrong;
    onUpdate('wrong', wrong);
  };

  return (
    <Card
      sx={{
        borderRadius: "12px",
        border: "1px solid #E5E7EB",
        background: "white",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <CardContent sx={{ p: 3, height: "100%", display: "flex", flexDirection: "column" }}>
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <Typography variant="h6" sx={{ fontSize: "18px", fontWeight: 600, color: "#111827", lineHeight: "27px" }}>
            {subject.name}
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "14px", fontWeight: 500, color: "#6B7280", lineHeight: "21px" }}>
            Toplam {subject.totalQuestions} Soru
          </Typography>
        </Box>
        {/* Correct Answers */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 0.5, mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
              <Typography variant="body2" sx={{ fontSize: "14px", fontWeight: 500, color: "#374151", lineHeight: "21px", minWidth: 90 }}>
                Doğru Sayısı
              </Typography>
              <Typography variant="body2" sx={{ minWidth: 32, textAlign: 'center', fontWeight: 600, color: '#FFA500', fontSize: '16px', ml: 2 }}>
                {subject.correct}
              </Typography>
            </Box>
            <Slider
              value={subject.correct}
              min={0}
              max={subject.totalQuestions}
              step={1}
              onChange={handleCorrectChange}
              sx={{ color: "#FFA500", height: 4, width: '100%', '& .MuiSlider-thumb': { width: 18, height: 18, backgroundColor: '#FFA500', boxShadow: '0 0 0 4px rgba(255,165,0,0.15)', cursor: 'pointer', border: '2px solid white', }, '& .MuiSlider-track': { backgroundColor: '#FFA500', border: 'none', }, '& .MuiSlider-rail': { backgroundColor: '#E5E7EB', opacity: 1, }, '&:hover .MuiSlider-thumb': { boxShadow: '0 0 0 8px rgba(255,165,0,0.18)', }, }}
              aria-label="Doğru Sayısı"
            />
          </Box>
        </Box>
        {/* Wrong Answers */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 0.5, mb: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}>
              <Typography variant="body2" sx={{ fontSize: "14px", fontWeight: 500, color: "#374151", lineHeight: "21px", minWidth: 90 }}>
                Yanlış Sayısı
              </Typography>
              <Typography variant="body2" sx={{ minWidth: 32, textAlign: 'center', fontWeight: 600, color: '#FFA500', fontSize: '16px', ml: 2 }}>
                {subject.wrong}
              </Typography>
            </Box>
            <Slider
              value={subject.wrong}
              min={0}
              max={subject.totalQuestions}
              step={1}
              onChange={handleWrongChange}
              sx={{ color: "#FFA500", height: 4, width: '100%', '& .MuiSlider-thumb': { width: 18, height: 18, backgroundColor: '#FFA500', boxShadow: '0 0 0 4px rgba(255,165,0,0.15)', cursor: 'pointer', border: '2px solid white', }, '& .MuiSlider-track': { backgroundColor: '#FFA500', border: 'none', }, '& .MuiSlider-rail': { backgroundColor: '#E5E7EB', opacity: 1, }, '&:hover .MuiSlider-thumb': { boxShadow: '0 0 0 8px rgba(255,165,0,0.18)', }, }}
              aria-label="Yanlış Sayısı"
            />
          </Box>
        </Box>
        {/* Net Score Display */}
        {showNet && (
          <Box sx={{ p: 2, backgroundColor: "#F9FAFB", borderRadius: "8px", flex: 1, display: "flex", alignItems: "center", justifyContent: "space-between", mt: "auto" }}>
            <Typography variant="body2" sx={{ fontSize: "14px", fontWeight: 500, color: "#374151", lineHeight: "21px" }}>
              Net Sayısı:
            </Typography>
            <Typography variant="h6" sx={{ fontSize: "18px", fontWeight: 700, color: "#FF9500", lineHeight: "27px" }}>
              {net.toFixed(2)}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
} 