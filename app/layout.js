// app/layout.js
import { Inter, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const ibmPlexArabic = IBM_Plex_Sans_Arabic({ 
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex"
});

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="ltr">
      {/* دمج المتغيرات الخاصة بالخطوط في جسم الصفحة */}
      <body className={`${inter.variable} ${ibmPlexArabic.variable} font-sans bg-gray-50 text-slate-900`} >
        {children}
      </body>
    </html>
  );
}