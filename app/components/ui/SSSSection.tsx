import Box from "@mui/material/Box";
import AccordionSection from "./AccordionSection";

const faqData = [
  {
    title: "ÇokNet Nedir?",
    description:
      "ÇokNet, YKS'ye hazırlanan öğrencilere yönelik kişiselleştirilmiş dijital bir öğrenme platformudur. Video içerikler, akademik takip sistemleri ve eğitim koçu desteği sunarak, öğrencilere sadece sınav başarısı değil, kişisel gelişim ve özgüven kazandırmayı amaçlar.",
  },
  {
    title: "ÇokNet Nasıl Çalışır?",
    description:
      "Öğrenciler, platforma giriş yaptıktan sonra, kişiye özel çalışma planları ile videoları izler, test çözer ve eğitim koçlarıyla birebir görüşmeler yaparak süreci takip eder. Adaptif öğrenme teknolojisi sayesinde her öğrenciye özgü, veri temelli geri bildirim sunulur ve sürekli destek sağlanır.",
  },
  {
    title: "Eğitim Koçu Kimdir, Ne Yapar?",
    description:
      "Eğitim koçları, öğrencinin sınav sürecinde motivasyonunu artırmak, hedeflerini belirlemek ve süreç takibini sağlamak için rehberlik eder. Koçlar, deneyimli öğretmenler veya bu süreçten geçmiş üniversite öğrencileri olabilir.",
  },
  {
    title: "Eğitim Koçlarıyla Nasıl İletişim Kurabilirim?",
    description:
      "Platform açıldıktan ve siz kayıt olduktan sonra, size uygun bir eğitim koçu atanır. Görüşmeler, platform üzerinden online olarak yapılır ve randevu alarak iletişime geçebilirsiniz.",
  },
  {
    title: "Görüşmeler Ne Sıklıkla Gerçekleşir?",
    description:
      "Çoğu zaman, ayda bir veya iki kez planlı birebir görüşmeler yapılır. İhtiyaca göre ek görüşme talepleri de değerlendirilebilir.",
  },
  {
    title: "Akademik İçerikler Kimler Tarafından Hazırlanıyor?",
    description:
      "İçerikler, alanında deneyimli öğretmenler ve eğitim uzmanları tarafından hazırlanır. Pedagojik doğruluğu yüksek ve sade, etkili materyaller kullanılır.",
  },
  {
    title: "Temel Anlatım ile Zenginleştirilmiş Anlatım Arasındaki Fark Nedir?",
    description:
      "Temel anlatımlar, konunun özünü sade bir şekilde sunarken; zenginleştirilmiş anlatımlar, daha fazla örnek, detay ve farklı bakış açıları sunarak daha derin bir öğrenme deneyimi sağlar.",
  },
  {
    title: "ÇokNet'te Hangi Dersler Yer Alıyor?",
    description:
      "ÇokNet, TYT ve AYT kapsamındaki tüm dersleri sunar: Türkçe, Matematik, Fizik, Kimya, Biyoloji, Tarih, Coğrafya, Felsefe, Din Kültürü ve Edebiyat gibi tüm alan dersleri mevcuttur.",
  },
  {
    title: "Rehberlik Hizmeti Neleri Kapsar?",
    description:
      "Rehberlik, motivasyon, sınav kaygısı, zaman yönetimi ve verimli ders çalışma yöntemleri gibi konularda video ve yazılı içerikler sunar.",
  },
  {
    title: "Sadece Rehberlik veya Sadece İçerik Hizmeti Alabilir Miyim?",
    description:
      "Evet, ÇokNet'te, video içerik, rehberlik hizmeti ya da her ikisini içeren paket seçenekleri olacak.",
  },
  {
    title: "Koçluk ve Rehberlik Hizmeti Arasında Fark Var Mı?",
    description:
      "Koçluk, öğrencinin hedef takibi ve süreç planlaması üzerine odaklanırken; rehberlik, psikolojik dayanıklılık, motivasyon ve öğrenme alışkanlıklarına odaklanır.",
  },
  {
    title: "Görüşme Sonrasında Takip Nasıl Sağlanır?",
    description:
      "Eğitim koçları, her görüşme sonrasında öğrencinin gelişim ve hedef durumunu platforma not alır. Bu sayede, öğrencinin süreci şeffaf ve sürekli izlenebilir hale gelir.",
  },
  {
    title: "Net Takibi Nasıl Yapılıyor?",
    description:
      "Öğrenciler, çözdükleri testlerin sonuçlarını sisteme işler. Bu sayede branş branş gelişim izlenebilir ve eğitim koçları, öğrenciye uygun yönlendirme yapar.",
  },
  {
    title: "Hatalı Yapılan Sorulara Yönelik Sistem Nasıl Çalışır?",
    description:
      "Hatalı sorular, özel bir havuza aktarılır ve eksik konular belirlenir. Öğrencilere, konu tekrar videoları ve çözüm görselleri sunulur.",
  },
  {
    title: "ÇokNet Hangi Cihazlarda Kullanılabilir?",
    description:
      "ÇokNet, bilgisayar ve mobil cihazlarla uyumlu olarak çalışır. Tüm içerikler ve görüşmeler mobil uyumludur.",
  },
  {
    title: "Destek Ya Da Teknik Bir Sorun Yaşarsam Ne Yapmalıyım?",
    description:
      "Teknik ya da içerik ile ilgili sorunlarınız için, platformdaki destek merkezi aracılığıyla yardım alabilirsiniz. Ayrıca, canlı destek modülü ile anında çözüm alabilirsiniz.",
  },
  {
    title: "Ücretli mi? Üyelik seçenekleri nelerdir?",
    description:
      "ÇokNet, farklı fiyat seçenekleri ile sunulacaktır. Güncel fiyatlar çok yakında burada olacak. Kurumsal ihtiyaçlar için bizimle e-posta üzerinden veya iletişim formumuzdan iletişime geçebilirsiniz.",
  },
];

export default function SSSSection({ noTitle }: { noTitle?: boolean }) {
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", px: noTitle ? 0 : 2, pb: 8, mt: noTitle ? 0 : 8 }}>
      <AccordionSection
        title={noTitle ? "" : "Sıkça Sorulan Sorular"}
        items={faqData}
        backgroundColor="rgba(255, 255, 255, 0.8)"
      />
    </Box>
  );
} 