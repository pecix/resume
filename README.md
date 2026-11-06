# Artur Petrusiewicz – Senior Fullstack Developer (Interactive CV)

Nowoczesna, elegancka i w pełni responsywna strona CV przygotowana w czystym HTML5, CSS3 oraz Vanilla JavaScript, bez zbędnych zależności npm czy narzędzi budowania.

## 🚀 Cechy projektu
* **Dwujęzyczność (PL / EN):** Natychmiastowe przełączanie języka za pomocą przycisków w prawym górnym rogu z zapamiętywaniem preferencji w `localStorage`.
* **Dedykowany styl do druku i PDF (`@media print`):** Zoptymalizowany pod format A4 (automatyczne ukrywanie paska nawigacji, brak obciętych sekcji, estetyczne marginesy, czytelna typografia).
* **Wydzielone dane w `cv-data.js`:** Wszystkie informacje (doświadczenie, projekty, umiejętności, dane kontaktowe) znajdują się w jednym czytelnym pliku konfiguracyjnym.
* **100% Statyczny & Lekki:** Gotowy do natychmiastowego hostingu na **GitHub Pages**, Vercel, Netlify lub dowolnym serwerze WWW.

## 📂 Struktura plików
* `index.html` – Semantyczna struktura dokumentu CV.
* `styles.css` – Klasyczny styl wizualny oraz zaawansowane reguły `@media print`.
* `cv-data.js` – Struktura danych CV z pełnym tłumaczeniem (wersja polska i angielska).
* `app.js` – Skrypt renderujący treść i obsługujący przełączanie języków oraz drukowanie.

## 💻 Uruchomienie lokalne
Wystarczy otworzyć plik `index.html` w dowolnej przeglądarce internetowej lub uruchomić prosty serwer HTTP:
```bash
python3 -m http.server 8000
```
Następnie przejdź pod adres `http://localhost:8000`.

## 🌐 Publikacja na GitHub Pages
1. Przejdź do ustawień repozytorium na GitHubie: **Settings** -> **Pages**.
2. W sekcji **Build and deployment** wybierz gałąź `main` oraz folder `/ (root)`.
3. Kliknij **Save**. Twoja strona będzie dostępna publicznie pod adresem:
   `https://pecix.github.io/ag-test-resume/`