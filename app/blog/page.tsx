"use client";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import BlogPostCard from "../components/cards/BlogPostCard";
import AuthorProfileCard from "../components/cards/AuthorProfileCard";
const blogHomeImage = "/blog-home.png";

export default function BlogPage() {
  const blogPosts = [
    {
      id: "universite-sinavi-hazirligi",
      title: "Üniversite Sınavına Hazırlık İpuçları",
      excerpt:
        "YKS'ye hazırlanırken dikkat etmeniz gereken en önemli noktalar ve etkili çalışma teknikleri hakkında detaylı rehber.",
      category: "eğitim",
      categoryColor: "#F6EB23",
      categoryBgColor: "#EDE9FE",
      authorName: "Ahmet Yılmaz",
      authorInitials: "A",
      publishDate: "15 Mart 2024",
      readTime: "8 dk",
      featured: true,
      variant: "horizontal" as const,
    },
    {
      id: "matematik-calisma-stratejileri",
      title: "Matematik Çalışma Stratejileri",
      excerpt:
        "Matematik dersinde başarılı olmak için kanıtlanmış yöntemler ve pratik öneriler.",
      category: "matematik",
      categoryColor: "#1DB5BE",
      categoryBgColor: "#DBEAFE",
      authorName: "Zeynep Kaya",
      authorInitials: "Z",
      publishDate: "12 Mart 2024",
      readTime: "6 dk",
      variant: "vertical" as const,
    },
    {
      id: "fizik-problemleri-cozme",
      title: "Fizik Problemlerini Çözme Teknikleri",
      excerpt:
        "Fizik sorularına sistematik yaklaşım ve problem çözme adımları.",
      category: "fizik",
      categoryColor: "#F59E0B",
      categoryBgColor: "#FEF3C7",
      authorName: "Mehmet Demir",
      authorInitials: "M",
      publishDate: "10 Mart 2024",
      readTime: "7 dk",
      variant: "vertical" as const,
    },
  ];

  const authors = [
    {
      name: "Ahmet Yılmaz",
      title: "Eğitim Uzmanı • 10+ yıl deneyim",
      bio: "Üniversite sınavlarına hazırlık konusunda uzmanlaşmış, binlerce öğrencinin başarısına katkıda bulunmuş deneyimli bir eğitimci.",
      initials: "A",
      avatarColor: "#F6EB23",
    },
    {
      name: "Zeynep Kaya",
      title: "Matematik Öğretmeni • 8+ yıl deneyim",
      bio: "Matematik alanında uzmanlaşmış, öğrencilerin sayısal derslerdeki başarısını artırmak için etkili yöntemler geliştiren öğretmen.",
      initials: "Z",
      avatarColor: "#1DB5BE",
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#FFF" }}>
      {/* Hero Section with Extended Background */}
      <Box
        sx={{
          background:
            "linear-gradient(90deg, rgba(255, 149, 0, 0.05) 0%, rgba(246, 235, 35, 0.05) 50%, #FFF8F0 100%)",
          position: "relative",
          overflow: "hidden",
          py: 10,
          pb: { xs: 6, md: 10 },
        }}
      >
        {/* Background Decorative Elements */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            background: "rgba(246, 235, 35, 0.1)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            background: "rgba(255, 149, 0, 0.1)",
          }}
        />
        {/* Additional decorative elements for extended section */}
        <Box
          sx={{
            position: "absolute",
            bottom: "150px",
            left: "20%",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "rgba(29, 181, 190, 0.08)",
          }}
        />

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            alignItems="center"
            justifyContent="space-between"
            sx={{ mb: 6 }}
          >
            {/* Left Content */}
            <Box sx={{ flex: 1, textAlign: "left" }}>
              <Stack spacing={3}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: { xs: "32px", md: "48px" },
                    fontWeight: 700,
                    color: "#111827",
                    lineHeight: { xs: "40px", md: "56px" },
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Blog
                </Typography>

                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 400,
                    color: "#374151",
                    lineHeight: "28px",
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                    maxWidth: "500px",
                  }}
                >
                  Eğitim dünyasından en güncel içerikler, uzman görüşleri ve
                  başarı hikayeleri.
                </Typography>
              </Stack>
            </Box>

            {/* Right Illustration */}
            <Box sx={{ flex: { xs: "none", md: "0 0 350px" } }}>
              <Box
                component="img"
                src={blogHomeImage}
                alt="Blog İllüstrasyon"
                sx={{
                  width: { xs: 250, md: 350 },
                  height: { xs: 200, md: 250 },
                  borderRadius: "16px",
                  mx: "auto",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </Box>
          </Stack>

          {/* Blog Posts */}
          <Stack
            spacing={4}
            sx={{ width: "100%", maxWidth: "1200px", mx: "auto", mb: 10 }}
          >
            {/* Featured Post */}
            <BlogPostCard {...blogPosts[0]} />

            {/* Other Posts */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
                gap: 4,
              }}
            >
              {blogPosts.slice(1).map((post, index) => (
                <BlogPostCard key={index} {...post} />
              ))}
            </Box>
          </Stack>

          {/* Authors Section - Now inside the colored background */}
          <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
            <Stack spacing={6}>
              {/* Section Header */}
              <Stack
                spacing={2}
                alignItems="center"
                sx={{ textAlign: "center" }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: "32px",
                    fontWeight: 700,
                    color: "#111827",
                    lineHeight: "40px",
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Blog Yazarlarımız
                </Typography>

                <Typography
                  sx={{
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "#6B7280",
                    lineHeight: "24px",
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  Alanında uzman eğitmenlerimizden değerli içerikler
                </Typography>
              </Stack>

              {/* Author Cards */}
              <Stack spacing={2}>
                {authors.map((author, index) => (
                  <AuthorProfileCard
                    key={index}
                    name={author.name}
                    title={author.title}
                    bio={author.bio}
                    initials={author.initials}
                    avatarColor={author.avatarColor}
                  />
                ))}
              </Stack>
            </Stack>
          </Container>
        </Container>
      </Box>
    </Box>
  );
}
