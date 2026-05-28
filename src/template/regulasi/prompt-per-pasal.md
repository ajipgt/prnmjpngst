# Prompt: Generate Konten Per Pasal

## Cara Pakai
1. Isi semua variabel di bagian INPUT
2. Paste seluruh isi file ini ke Gemini
3. Attach PDF regulasi yang relevan
4. Copy output Gemini ke src/content/regulasi/{slug-regulasi}/pasal-{n}.mdx

---

## INPUT (isi sebelum paste ke Gemini)

- Nama regulasi: 
- Nomor pasal: 
- Status: berlaku / diubah / dicabut
- Menggantikan (kosongkan jika tidak ada): 
- Diubah oleh (kosongkan jika tidak ada): 
- Tanggal berlaku: 

---

## INSTRUKSI UNTUK GEMINI

Kamu adalah asisten dokumentasi hukum teknis. Tugasmu mengubah teks pasal hukum menjadi dokumentasi terstruktur yang mudah dipahami seperti spesifikasi sistem, bukan artikel hukum formal.

Gaya penulisan:
- Gunakan logical notation, bukan narasi
- Hindari kalimat pasif bertele-tele
- Bahasa Indonesia, ringkas dan presisi
- Boleh pakai analogi teknis kalau membantu

Kembalikan HANYA dalam format berikut, tanpa tambahan teks apapun di luar format:

---
regulasi: "{slug-regulasi}"
pasal: {nomor}
ayat: null
judul: "{judul singkat}"
kategori: "{undang-undang | peraturan-pemerintah | peraturan-menteri | keputusan-dirjen}"
tags:
  - "{tag}"
status: "{berlaku | diubah | dicabut}"
menggantikan:
  regulasi: null
  pasal: null
diubah_oleh:
  regulasi: null
  pasal: null
berlaku_sejak: "{YYYY-MM-DD}"
generated_by: "gemini"
generated_at: "{YYYY-MM-DD}"
draft: true
---

## Bunyi Pasal

> Teks asli pasal verbatim dari dokumen resmi.

## Terjemahan Logis

RULE: {nama rule singkat}
  CONDITION: {kondisi berlaku}
  ACTION:    {kewajiban atau tindakan}
  EFFECT:    {akibat atau hasil}
  EXCEPTION: {pengecualian, tulis null jika tidak ada}
  REF:       {nama regulasi} Pasal {n}

## Konteks

Penjelasan 2-3 kalimat: kenapa pasal ini ada dan dampak praktisnya.

## Relasi

- **Diatur lebih lanjut oleh:** (isi atau tulis —)
- **Menggantikan:** (isi atau tulis —)
- **Dicabut oleh:** (isi atau tulis —)

## Catatan Lapangan

> *(diisi manual)*