import { cn } from "@/lib/utils";
import React from "react";

const FAQItems = [
  {
    question: "Siapa saja yang bisa menggunakan SIWARGA?",
    answer:
      "SIWARGA dapat digunakan oleh seluruh warga terdaftar RT 04. Terdapat dua jenis akun: akun warga (memantau informasi pribadi) dan akun admin (pengurus RT mengelola data).",
  },
  {
    question: "Bagaimana cara mendaftar sebagai warga baru?",
    answer:
      "Warga baru mendaftar melalui halaman Daftar Warga dengan mengisi NIK, nomor rumah, dan data diri. Pengurus RT akan memverifikasi dan mengaktifkan akun dalam 1×24 jam.",
  },
  {
    question: "Apakah data pribadi saya aman?",
    answer:
      "Ya. Data warga dikelola secara lokal oleh pengurus RT dan hanya dapat diakses oleh admin terverifikasi. Warga hanya dapat melihat data miliknya sendiri.",
  },
  {
    question: "Apakah SIWARGA bisa diakses dari HP?",
    answer:
      "SIWARGA dirancang responsif dan dapat diakses nyaman melalui browser HP (Chrome, Safari, dll.) tanpa perlu mengunduh aplikasi. Tampilan warga dioptimalkan untuk layar mobile.",
  },
  {
    question: "Kapan iuran bulanan jatuh tempo?",
    answer:
      "Iuran bulanan sebesar Rp 25.000 jatuh tempo setiap tanggal 10. Pembayaran dapat dilakukan ke bendahara RT atau transfer ke rekening BRI RT 04 a.n. RT 04 Arjamukti.",
  },
];

const FAQSection = () => {
  return (
    <section>
      <div>
        <div className="text-center">
          {/* <SectionLabel className="mb-[14px]" icon={CircleQuestionMark}>
            FAQ
          </SectionLabel> */}
          <h2
            className={cn(
              "text-[clamp(32px,5vw,52px)] font-semibold leading-[1.15] tracking-[-0.5px] text-foreground",
            )}
          >
            Pertanyaan yang
            <br />
            <em className="italic text-primary">sering ditanyakan</em>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
