import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

const StyledLinearProgress = styled(LinearProgress)<{ barcolor: string }>(
  ({ barcolor }) => ({
    height: 6,
    borderRadius: 3,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    "& .MuiLinearProgress-bar": {
      borderRadius: 3,
      backgroundColor: barcolor || "#4ADE80",
    },
  }),
);

interface ProgressItemProps {
  subject: string;
  percentage: number;
  color: string;
}

function ProgressItem({ subject, percentage, color }: ProgressItemProps) {
  return (
    <Stack spacing={1}>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          variant="caption"
          sx={{ color: "rgba(255,255,255,0.9)", fontWeight: 500 }}
        >
          {subject}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "white", fontWeight: 700, fontSize: "1.1rem" }}
        >
          {percentage}%
        </Typography>
      </Stack>
      <StyledLinearProgress
        variant="determinate"
        value={percentage}
        barcolor={color}
      />
    </Stack>
  );
}

export default function ProgressWidget() {
  return (
    <Box
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        backdropFilter: "blur(10px)",
        borderRadius: "16px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        p: 2.5,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          color: "white",
          fontWeight: 600,
          mb: 2,
          textAlign: "center",
        }}
      >
        Bu Hafta İlerleme
      </Typography>

      <Stack spacing={2.5}>
        <ProgressItem subject="Matematik" percentage={85} color="#10B981" />
        <ProgressItem subject="Fizik" percentage={92} color="#10B981" />
        <ProgressItem subject="Kimya" percentage={78} color="#F59E0B" />
      </Stack>
    </Box>
  );
}
