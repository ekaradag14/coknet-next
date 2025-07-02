'use client';
import { useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh",
        gap: 3,
        p: 3,
      }}
    >
      <Alert severity="error" sx={{ maxWidth: 600, width: "100%" }}>
        <Typography variant="h6" gutterBottom>
          Bir hata oluştu
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Beklenmeyen bir hata oluştu. Lütfen tekrar deneyin.
        </Typography>
        {error.digest && (
          <Typography variant="caption" color="text.secondary">
            Hata ID: {error.digest}
          </Typography>
        )}
      </Alert>
      
      <Button
        variant="contained"
        onClick={reset}
        sx={{ mt: 2 }}
      >
        Tekrar Dene
      </Button>
    </Box>
  );
} 