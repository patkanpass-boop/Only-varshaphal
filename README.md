# Varshaphal — Tajika annual chart

An offline, single-page Varshaphal (Tajika annual horoscope) calculator. Enter birth details and a year, and it casts the Varsha Pravesh chart at the birth place and reads it by the rules of **Tajika Nilakanthi** and **B.V. Raman's *Varshaphal***. It also covers the Muntha, the five office-bearers and the year lord, Panchavargiya, Dwadasavargiya and Harsha bala, the 16 Tajika yogas, 44 sahams with event timing, the Patyayini and Mudda dashas with sub-periods, month-entry charts, and predictions for all twelve houses.

Everything runs in the browser. Nothing is sent anywhere.

## Quick start

- **Use it:** open `index.html` in any browser, or enable GitHub Pages (below).
- **Test it:** `npm test` (Node 18+, no dependencies to install).
- **Rebuild after editing `src/`:** `npm run build`, which regenerates `index.html`.

## Put it on GitHub

1. Create an empty repository and upload the contents of this folder, keeping the `.github` folder.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Every push to `main` runs the tests and publishes `index.html`. The **Actions** tab shows the test log. A failing test stops the deploy.

## Project layout

| Path | What it holds |
|---|---|
| `index.html` | The built app (single file, works offline) |
| `src/astro.js` | Astronomy: VSOP87 Sun, Meeus Moon, planets, Lagna, bhavas, sign rising times, panchang, Vimshottari |
| `src/tajika-data.js` | Tajika tables (hadda, tri-rashi, orbs, sahams) and paraphrased result texts, each with its source |
| `src/tajika.js` | Tajika engine: relationships, balas, aspects, year lord, yogas, sahams, dashas, months |
| `src/phala.js` | Rule-based predictions; every factor carries its source |
| `src/ui.js`, `src/styles.css`, `src/index.template.html` | Interface |
| `tests/run.js` | 108 checks against Swiss Ephemeris and the books' own worked examples |
| `docs/VARSHAPHAL-KNOWLEDGE.md` | Every concept and calculation technique taken from the books, with references |

## Two traditions

The **Birth details** form lets you choose between two traditions:

- **Tajika Nilakanthi** (default):
  - Friendship comes from position in the annual chart.
  - A friend gets ¾ of the points and a neutral planet ½.
  - The Tajika drekkana is used for strength.
  - Ithasala uses the faster planet's orb.
  - The year lord follows Nilakantha's rule.
- **B.V. Raman:**
  - Kesava's two-camp friendship.
  - A friend gets ½ of the points.
  - The Parashari drekkana is used for strength.
  - Ithasala uses overlapping orbs.
  - The year lord is the planet with a favourable aspect on the Lagna, before the strongest.

The Ithasala orb can also be set on its own.

## Accuracy

| Check | Agreement |
|---|---|
| Sun | within 0.3″ of Swiss Ephemeris |
| Moon | within 4″ |
| Lagna and bhava cusps | exact |
| Other planets | within about 1.5′ |
| Varsha Pravesh | within 15 seconds |
| Raman's five dated examples | within 3.5 minutes (his times came from a year-length table) |

## Sources

- *Tajika Nilakanthi*, Chowkhamba edition with Hindi tika.
- B.V. Raman, *Varshaphal or the Hindu Progressed Horoscope*.
- Two short notes on Varshaphal and Tajik astrology.
- For reading the year against the birth chart: Raman's *How to Judge a Horoscope* and *Ashtakavarga System of Prediction*.

Result texts in the app are paraphrased.
