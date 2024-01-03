import type { Metadata } from "next";
import "@/shared/styles/main.scss";
import {Header} from "@/widgets/header";
import {Get_user} from "@/entities/user";
import Store_provider from "@/shared/model/store/store_provider";
import {Montserrat} from "next/font/google"


const montserrat = Montserrat({subsets: ['latin']})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Store_provider >
      <body className={montserrat.className} id="__next">
        <Get_user />
        <Header />
        {children}
      </body>
      </Store_provider>
    </html>
  );
}
