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
import CircularProgress from "@mui/material/CircularProgress";
import { useState, useEffect } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  helpType: string;
}

interface ApiResponse {
  data?: {
    create_intro_submissions_item: any;
  };
  errors?: Array<{
    message: string;
  }>;
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

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

  const submitFormToAPI = async (formData: FormData, recaptchaToken: string): Promise<boolean> => {
    try {
      const response = await fetch('https://api.cok.net.tr/v1/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-captcha': recaptchaToken,
        },
        body: JSON.stringify({
          query: `
            mutation InsertIntroResponse($email: String = "", $first_name: String = "", $help_category: String = "", $last_name: String = "", $phone: String = "") {
              create_intro_submissions_item(data: {email: $email, first_name: $first_name, help_category: $help_category, last_name: $last_name, phone: $phone})
            }
          `,
          variables: {
            email: formData.email,
            first_name: formData.firstName,
            last_name: formData.lastName,
            help_category: formData.helpType,
            phone: formData.phone || "",
          }
        })
      });

      const result: ApiResponse = await response.json();

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      if (result.errors && result.errors.length > 0) {
        throw new Error(result.errors[0].message);
      }

      if (!result.data?.create_intro_submissions_item) {
        throw new Error('API response is missing expected data');
      }

      return true;
    } catch (error) {
      console.error('API submission error:', error);
      throw error;
    }
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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitError(null);
    
    if (!validateForm()) {
      return;
    }

    if (window.grecaptcha) {
      setIsLoading(true);
      try {
        const token = await new Promise<string>((resolve, reject) => {
          window.grecaptcha.ready(() => {
            window.grecaptcha.execute('6Leh3XQrAAAAAHq0f370q_OdYaBI_JcBuQBT0X0k', { action: 'submit' })
              .then(resolve)
              .catch(reject);
          });
        });

        setRecaptchaToken(token);
        
        const success = await submitFormToAPI(formData, token);
        if (success) {
          setIsSubmitted(true);
        }
      } catch (error) {
        console.error('Form submission error:', error);
        setSubmitError(error instanceof Error ? error.message : 'Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
      } finally {
        setIsLoading(false);
      }
    } else {
      setSubmitError('reCAPTCHA yüklenemedi. Lütfen sayfayı yenileyin.');
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

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Card
          sx={{
            mx: "auto",
            backgroundColor: "#FFF",
            borderRadius: "16px",
            border: "1px solid #E5E7EB",
            boxShadow:
              "0px 2px 4px 0px rgba(0, 0, 0, 0.06), 0px 4px 6px 0px rgba(0, 0, 0, 0.10)",
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 5 } }}>
            {!isSubmitted ? (
              <>
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
                    
                      mx: "auto",
                      mb: 3,
                    }}
                  >
                    Kişiye özel eğitim çözümlerimize hem öncelikli hem de indirimli olarak kayıt olmak için formu doldurun.
                    <br/>
                    İster öğrenci, ister bir ebeveyn ya da eğitim kurumu temsilcisi olun, her adımda yanınızdayız.

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

                  {/* Error Display */}
                  {submitError && (
                    <Alert
                      severity="error"
                      sx={{
                        mb: 3,
                        backgroundColor: "#FEF2F2",
                        border: "1px solid #F87171",
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
                          color: "#991B1B",
                          fontFamily:
                            "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                        }}
                      >
                        {submitError}
                      </Typography>
                    </Alert>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    fullWidth
                    variant="outlined"
                    disabled={isLoading}
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
                      "&:disabled": {
                        backgroundColor: "#F3F4F6",
                        color: "#9CA3AF",
                      },
                      mb: 3,
                    }}
                  >
                    {isLoading ? (
                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <CircularProgress size={20} sx={{ color: "#FFF" }} />
                        <span>Gönderiliyor...</span>
                      </Box>
                    ) : (
                      "Öncelikli Erişim Talebimi Gönder"
                    )}
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
                      href="/kullanici-sozlesmesi"
                      sx={{
                        color: "#FF9500",
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Kullanıcı Sözleşmemizi
                    </Link>{" "}
                    kabul etmiş olursunuz.
                  </Typography>
                </Box>
              </>
            ) : (
              /* Success Message */
              <Box sx={{ textAlign: "center", py: { xs: 4, md: 6 } }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "28px", md: "36px" },
                    fontWeight: 700,
                    lineHeight: "45px",
                    color: "#374151",
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    mb: 3,
                  }}
                >
                  Öncelikli erişim başvurunuzu aldık.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "20px",
                    fontWeight: 400,
                    lineHeight: "29.25px",
                    color: "#374151",
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    mx: "auto",
                  }}
                >
                  İlginize teşekkür ederiz.
                </Typography>
              </Box>
            )}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
export default TanismaFormuPage;