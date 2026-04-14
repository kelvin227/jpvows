import FloatingMenu, { FloatingBottomMenu } from "@/components/Floatingmenu";
import "./globals.css";
import { Inter, Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata = {
  title: "Joy & Paul Wedding",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)} suppressHydrationWarning>
      <body className="dark font-light">
        <div >
          <FloatingMenu />
          {children}
          <FloatingBottomMenu />
          </div>
      </body>
    </html>
  );
}