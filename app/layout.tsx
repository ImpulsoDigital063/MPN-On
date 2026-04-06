import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

// Adicione NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX no seu .env.local
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const BASE_URL = "https://meuprimeironegocio.online";
const OG_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663305937026/Jey4huR4MGMLTE3MYskJ4P/eduardo_hero_left_nobg_9a391c6c.png";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "MPN-On | Meu Primeiro Negócio Online",
  description:
    "Aprenda a criar lojas online e fature do zero sem saber programar. Dois métodos reais: dropshipping e prestação de serviços. 29 aulas práticas. Garantia de 7 dias.",
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    title: "MPN-On | Meu Primeiro Negócio Online",
    description:
      "Aprenda a criar lojas online e fature do zero sem saber programar. Dois métodos reais, dois negócios prontos — garantia de 7 dias.",
    siteName: "MPN-On",
    locale: "pt_BR",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Eduardo Barros — MPN-On, Meu Primeiro Negócio Online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MPN-On | Meu Primeiro Negócio Online",
    description:
      "Aprenda a criar lojas online e fature do zero sem saber programar.",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Course",
      name: "MPN-On — Meu Primeiro Negócio Online",
      description:
        "Aprenda a criar lojas online e fature do zero sem saber programar. Dois métodos reais: dropshipping nacional e prestação de serviços de criação de lojas Shopify.",
      url: BASE_URL,
      provider: {
        "@type": "Person",
        name: "Eduardo Barros",
        url: BASE_URL,
      },
      offers: {
        "@type": "Offer",
        price: "297",
        priceCurrency: "BRL",
        availability: "https://schema.org/InStock",
        url: "https://pay.kiwify.com.br/JNVhxLE",
      },
      hasCourseInstance: {
        "@type": "CourseInstance",
        courseMode: "online",
        courseWorkload: "PT29H",
      },
    },
    {
      "@type": "Person",
      name: "Eduardo Barros",
      jobTitle: "Empreendedor Digital e Instrutor",
      description:
        "Criador da UrbanFeet e especialista em lojas Shopify. Cria em média 7 lojas por mês para negócios locais e ensina o método no MPN-On.",
      url: BASE_URL,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${sora.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}</Script>
          </>
        )}
      </body>
    </html>
  );
}
