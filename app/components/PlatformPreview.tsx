import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

export default function PlatformPreview() {
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: 320,
        mx: "auto",
        p: 2,
      }}
    >
      {/* Main Platform Card */}
      <Card
        sx={{
          background: "#FFFFFF",
          borderRadius: "24px",
          overflow: "visible",
          position: "relative",
          boxShadow: "0px 24px 48px rgba(17, 24, 39, 0.25)",
          width: 320,
          height: 640,
        }}
      >
        <CardContent sx={{ p: 0, position: "relative" }}>
          {/* Background overlay with slight opacity */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundImage:
                "url('https://cdn.builder.io/api/v1/image/assets/TEMP/979e062cee45c8961fc0ce9cf09d8ddbd711ff17?placeholderIfAbsent=true')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.1,
              borderRadius: "24px",
            }}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
