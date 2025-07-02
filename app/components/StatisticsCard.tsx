import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

interface StatisticsCardProps {
  value: string;
  label: string;
}

export default function StatisticsCard({ value, label }: StatisticsCardProps) {
  return (
    <Card
      sx={{
        borderRadius: "16px",
        p: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
        backgroundColor: "#FFF",
        boxShadow: "0px 8px 24px rgba(17, 24, 39, 0.15)",
        border: "none",
        minHeight: "125px",
        justifyContent: "center",
        width: { xs: "180px", sm: "215px" },
      }}
    >
      <Typography
        sx={{
          fontSize: "32px",
          fontWeight: 700,
          color: "#FF9500",
          lineHeight: "48px",
          fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
        }}
      >
        {value}
      </Typography>

      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: 500,
          color: "#6B7280",
          textAlign: "center",
          lineHeight: "21px",
          fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
        }}
      >
        {label}
      </Typography>
    </Card>
  );
}
