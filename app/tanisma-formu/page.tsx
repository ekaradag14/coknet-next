"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Alert from "@mui/material/Alert";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import { useState, useEffect } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  helpType: string;
}

// @ts-ignore
declare global {
  interface Window {
    grecaptcha: any;
  }
}

const TanismaFormuPage = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    helpType: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const helpOptions = [
    {
      value: "student",
      title: "Öğrenci – Sınav hazırlığı",
      description:
        "Kişiselleştirilmiş sınav hazırlık programları ve mentor desteği",
    },
    {
      value: "parent",
      title: "Ebeveyn – Çocuğum için en iyi eğitim",
      description: "Çocuğunuzun akademik başarısı için özel eğitim planları",
    },
    {
      value: "institution",
      title: "Eğitim Kurumu – Öğrencilere kişiselleştirilmiş destek sağlamak",
      description: "Kurumunuz için toplu eğitim çözümleri ve analitik raporlar",
    },
  ];

  const handleChange =
    (field: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));

      // Clear error when user starts typing
      if (errors[field]) {
        setErrors((prev) => ({
          ...prev,
          [field]: "",
        }));
      }
    };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Ad alanı zorunludur";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Soyad alanı zorunludur";
    }

    if (!formData.email.trim()) {
      newErrors.email = "E-posta alanı zorunludur";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Geçerli bir e-posta adresi giriniz";
    }

    if (!formData.helpType) {
      newErrors.helpType = "Lütfen bir seçenek seçiniz";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    // Load reCAPTCHA v3 script
    const scriptId = 'recaptcha-v3-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.google.com/recaptcha/api.js?render=6Leh3XQrAAAAAHq0f370q_OdYaBI_JcBuQBT0X0k';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (window.grecaptcha) {
      window.grecaptcha.ready(() => {
        window.grecaptcha.execute('6Leh3XQrAAAAAHq0f370q_OdYaBI_JcBuQBT0X0k', { action: 'submit' }).then((token: string) => {
          setRecaptchaToken(token);

          if (validateForm()) {
            // ... your existing submit logic
            console.log("Form submitted:", formData);
            alert(
              "Formunuz başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.",
            );
          }
        });
      });
    } else {
      alert('reCAPTCHA yüklenemedi. Lütfen sayfayı yenileyin.');
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#FFF",
        py: { xs: 4, md: 8 },
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <Card
          sx={{
            maxWidth: 864,
            mx: "auto",
            backgroundColor: "#FFF",
            borderRadius: "16px",
            border: "1px solid #E5E7EB",
            boxShadow:
              "0px 2px 4px 0px rgba(0, 0, 0, 0.06), 0px 4px 6px 0px rgba(0, 0, 0, 0.10)",
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            {/* Header */}
            <Box sx={{ textAlign: "center", mb: 4 }}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "28px", md: "36px" },
                  fontWeight: 700,
                  lineHeight: "45px",
                  color: "#111827",
                  fontFamily:
                    "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  mb: 3,
                }}
              >
                Öncelikli Erişim Fırsatını Kaçırmayın!
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: "18px",
                  fontWeight: 400,
                  lineHeight: "29.25px",
                  color: "#374151",
                  fontFamily:
                    "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  maxWidth: "757px",
                  mx: "auto",
                  mb: 3,
                }}
              >
                ÇokNet ile öğrenme yolculuğunuzu keşfetmeye hazır mısınız?
                Öncelikli erişim fırsatından yararlanarak, kişiye özel eğitim
                çözümlerimize ilk adımı atabilirsiniz! İster öğrenci, ister bir
                ebeveyn ya da eğitim kurumu temsilcisi olun, her adımda
                yanınızdayız.
              </Typography>

              <Alert
                severity="warning"
                sx={{
                  backgroundColor: "#FEF3C7",
                  border: "1px solid #F59E0B",
                  borderRadius: "8px",
                  "& .MuiAlert-icon": {
                    display: "none",
                  },
                  "& .MuiAlert-message": {
                    width: "100%",
                    textAlign: "center",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "#92400E",
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Lütfen formu doldurun ve öncelikli erişim fırsatınızı
                  yakalayın!
                </Typography>
              </Alert>
            </Box>

            {/* Form */}
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
              {/* First Name */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#111827",
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    mb: 1,
                  }}
                >
                  Adınız *
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Adınızı buraya yazın"
                  value={formData.firstName}
                  onChange={handleChange("firstName")}
                  error={!!errors.firstName}
                  helperText={errors.firstName}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      height: "50px",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                      "& fieldset": {
                        borderColor: "#D1D5DB",
                      },
                      "&:hover fieldset": {
                        borderColor: "#FF9500",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#FF9500",
                      },
                    },
                    "& .MuiInputBase-input": {
                      fontSize: "16px",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    },
                  }}
                />
              </Box>

              {/* Last Name */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#111827",
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    mb: 1,
                  }}
                >
                  Soyadınız *
                </Typography>
                <TextField
                  fullWidth
                  placeholder="Soyadınızı buraya yazın"
                  value={formData.lastName}
                  onChange={handleChange("lastName")}
                  error={!!errors.lastName}
                  helperText={errors.lastName}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      height: "50px",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                      "& fieldset": {
                        borderColor: "#D1D5DB",
                      },
                      "&:hover fieldset": {
                        borderColor: "#FF9500",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#FF9500",
                      },
                    },
                    "& .MuiInputBase-input": {
                      fontSize: "16px",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    },
                  }}
                />
              </Box>

              {/* Email */}
              <Box sx={{ mb: 3 }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#111827",
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    mb: 1,
                  }}
                >
                  E-posta Adresiniz *
                </Typography>
                <TextField
                  fullWidth
                  type="email"
                  placeholder="Email adresinizi yazın"
                  value={formData.email}
                  onChange={handleChange("email")}
                  error={!!errors.email}
                  helperText={errors.email}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      height: "50px",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                      "& fieldset": {
                        borderColor: "#D1D5DB",
                      },
                      "&:hover fieldset": {
                        borderColor: "#FF9500",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#FF9500",
                      },
                    },
                    "& .MuiInputBase-input": {
                      fontSize: "16px",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    },
                  }}
                />
              </Box>

              {/* Phone (Optional) */}
              <Box sx={{ mb: 3 }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#111827",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    Telefon Numaranız
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "14px",
                      fontWeight: 400,
                      color: "#6B7280",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    }}
                  >
                    (isteğe bağlı)
                  </Typography>
                </Box>
                <TextField
                  fullWidth
                  placeholder="Telefon numaranızı yazın"
                  value={formData.phone}
                  onChange={handleChange("phone")}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                      height: "50px",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                      "& fieldset": {
                        borderColor: "#D1D5DB",
                      },
                      "&:hover fieldset": {
                        borderColor: "#FF9500",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#FF9500",
                      },
                    },
                    "& .MuiInputBase-input": {
                      fontSize: "16px",
                      fontFamily:
                        "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    },
                  }}
                />
              </Box>

              {/* Help Type Selection */}
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#111827",
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    mb: 2,
                  }}
                >
                  Hangi konuda yardımcı olabiliriz? *
                </Typography>

                <FormControl
                  component="fieldset"
                  fullWidth
                  error={!!errors.helpType}
                >
                  <RadioGroup
                    value={formData.helpType}
                    onChange={handleChange("helpType")}
                    sx={{ gap: 2 }}
                  >
                    {helpOptions.map((option) => (
                      <Box
                        key={option.value}
                        sx={{
                          border: "1px solid #D1D5DB",
                          borderRadius: "8px",
                          p: 2,
                          "&:has(input:checked)": {
                            borderColor: "#FF9500",
                            backgroundColor: "#FFF7ED",
                          },
                          "&:hover": {
                            borderColor: "#FF9500",
                          },
                        }}
                      >
                        <FormControlLabel
                          value={option.value}
                          control={
                            <Radio
                              sx={{
                                color: "#D1D5DB",
                                "&.Mui-checked": {
                                  color: "#FF9500",
                                },
                              }}
                            />
                          }
                          label={
                            <Box>
                              <Typography
                                sx={{
                                  fontSize: "16px",
                                  fontWeight: 600,
                                  color: "#111827",
                                  fontFamily:
                                    "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                                  mb: 0.5,
                                }}
                              >
                                {option.title}
                              </Typography>
                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  fontWeight: 400,
                                  color: "#6B7280",
                                  fontFamily:
                                    "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                                }}
                              >
                                {option.description}
                              </Typography>
                            </Box>
                          }
                          sx={{
                            margin: 0,
                            alignItems: "flex-start",
                            "& .MuiFormControlLabel-label": {
                              marginLeft: 1,
                            },
                          }}
                        />
                      </Box>
                    ))}
                  </RadioGroup>
                  {errors.helpType && (
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#d32f2f",
                        fontSize: "0.75rem",
                        mt: 1,
                        fontFamily:
                          "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                      }}
                    >
                      {errors.helpType}
                    </Typography>
                  )}
                </FormControl>
              </Box>

              {/* Submit Button */}
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{
                  backgroundColor: "#FF9500",
                  borderRadius: "8px",
                  height: "60px",
                  fontSize: "18px",
                  fontWeight: 600,
                  textTransform: "none",
                  color: "#FFF",
                  border: "none",
                  fontFamily:
                    "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  boxShadow: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
                  "&:hover": {
                    backgroundColor: "#E6850E",
                  },
                  mb: 3,
                }}
              >
                Öncelikli Erişim Talebimi Gönder
              </Button>

              {/* Privacy Notice */}
              <Typography
                variant="body2"
                sx={{
                  fontSize: "14px",
                  fontWeight: 400,
                  color: "#6B7280",
                  fontFamily:
                    "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  textAlign: "center",
                }}
              >
                Formunuzu göndererek,{" "}
                <Link
                  href="/gizlilik-politikasi"
                  sx={{
                    color: "#FF9500",
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Gizlilik Politikamızı
                </Link>{" "}
                ve{" "}
                <Link
                  href="/kullanim-sartlari"
                  sx={{
                    color: "#FF9500",
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  Kullanım Şartlarımızı
                </Link>{" "}
                kabul etmiş olursunuz.
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
export default TanismaFormuPage;