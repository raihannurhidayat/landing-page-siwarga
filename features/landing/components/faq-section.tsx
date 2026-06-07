import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Accordion as AccordionPrimitive } from "radix-ui";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CircleQuestionMark, MinusIcon, PlusIcon } from "lucide-react";
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

const AccordionPlusMinusIconDemo = () => {
  return (
    <Accordion
      type="single"
      collapsible
      className='w-full border-0 [&>*>[data-slot="accordion-content"]]:px-0'
      defaultValue="item-1"
    >
      {FAQItems.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
              data-slot="accordion-trigger"
              className="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 border border-transparent px-2 py-2.5 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-3 disabled:pointer-events-none disabled:opacity-50"
            >
              {item.question}
              <PlusIcon className="text-muted-foreground pointer-events-none block size-4 shrink-0 transition-transform duration-500 in-data-open:hidden" />
              <MinusIcon className="text-muted-foreground pointer-events-none hidden size-4 shrink-0 transition-transform duration-500 in-data-open:block" />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionContent className="text-muted-foreground px-2">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

const FAQSection = () => {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-275 px-6">
        <div className="text-center">
          <Badge className="inline-flex items-center gap-1.5 rounded-[20px] border px-3.5 py-1.25 text-[12px] font-semibold uppercase tracking-[0.4px] border-primary/20 bg-secondary text-primary">
            <CircleQuestionMark /> <span className="text-primary">FAQ</span>
          </Badge>
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

        <div className="mx-auto mt-12 max-w-175">
          <Accordion type="single" collapsible>
            {FAQItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-[16px]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-[14px]">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
