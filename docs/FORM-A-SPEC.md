# Form A — Client Consultation Intake (Spec & Direction)

**Jotform ID:** `261985830619065` (canonical — "the one Bri sends every new hair client")
**Embedded in:** `src/sections/Consult.tsx` via `salon.intakeForm.formUrl`
**Status of automation:** ⛔ **Agents are prohibited from creating/editing this form.** Per
`bri-launch-checklist`, there is *no automated substitute* for the manual go-live test, and
batch/API edits cause "the mapper [to drop] working rules" — i.e. they silently break the
conditional safety logic. This document is **direction for a human to build/verify in Jotform**;
it is reviewed against, not executed by, an agent.

---

## 1. Purpose
Every new hair client completes this before their first appointment so the stylist walks in
already knowing the client's hair. For **chemical/color services it is a safety gate that must
happen *before* the booking slot is confirmed**; for non-chemical services it follows booking.

## 2. Funnel ordering (this is a manual SEND process, not form logic)
| Service type | Order |
|---|---|
| **Chemical / color** (balayage, full color, correction, extensions install) | Consultation Form (chemical history + safety gating) → **Book** → upload photos → submit |
| **Non-chemical** (haircut, blowout, headspa, toner*) | **Book** → Consultation Form → upload hair + inspiration photos → describe outcome → submit |
| **Returning client** | Book → *Update* Consultation → upload new reference photos → submit |

Confirm your send flow matches: chemical clients get the link **before** booking; non-chemical **after**.

## 3. Fields

### Always shown
- Full name
- Phone
- Email
- **Service interest / type** ← this selector drives all conditional logic below
- Current hair condition (short text)
- Goals / desired outcome (long text)
- **Photo upload — current hair** (multiple)
- **Photo upload — inspiration** (multiple)
- Preferred contact method / best time (optional)

### Shown ONLY for chemical/color service selection (the safety gate)
- **Chemical history section** — previous color, lighteners, box dye, keratin/relaxer, dates
- **Safety section(s)** — allergies, sensitivities, scalp conditions, medications affecting hair
- **Henna / metallic dyes question** — explicit yes/no (metallic salts react dangerously with lightener)

### Returning-client path
- "New reference photos" upload; may skip full history if on file.

## 4. Notification to Bri (required)
On every submission, email the stylist (Bri) with the entry so she is prepped before the
appointment. Verify the notification email address and that submissions actually arrive.

## 5. THE GO-LIVE GATE (manual — only the owner can run this)
1. **Chemical test:** Open Form A → select a full-color / chemical service → submit a real test entry.
   Confirm **all** appear: chemical-history section, safety section(s), henna/metallic question.
2. **Inverse test:** Submit again with a non-chemical service (e.g. haircut). Confirm chemical
   history + safety + henna/metallic **stay hidden**. *(A gate that never hides is also broken.)*
3. Both pass → form is client-ready. If either fails → **one scoped single edit**, then re-run
   **both** tests. Do **not** batch edits.
4. Confirm the standalone form link opens/renders/submits and that **you receive** the submission.
5. **Delete test submissions** before going live.

## 6. Guardrails
- Do not send an unverified chemical-intake form to a real client to hit a date. The site can
  go live with **booking only**; the form ships to Bri once Section 5 passes.
- Jotform/Square iframes degrade performance → the site loads this form behind a click **facade**
  (`src/components/Facade.tsx`); keep that pattern.

---

## 7. Chemical services that must trigger the safety block (from Bri's live Square menu, 2026-10-10)

Each needs its own flat SHOW rule (`contains`, not `equals`) on the service selector, with the
option text matching the Square name exactly. Source of truth in code: `chemical: true` in
`src/config/salon.ts`. Bri's Form B intake listed only 5 — the five marked **NEW** were missing.

1. Dimensional Balayage
2. Partial Dimensional Balayage
3. Face Framing Foil — **NEW**
4. Full Color — **NEW**
5. Roots + Toner — **NEW**
6. Toner
7. Root Touch Up for Gray (STYLE INCLUDED)
8. Root Touch Up for Gray (NO STYLE)
9. Color Correction — **NEW**
10. Smoothing Treatment (INCA / VARO) — **NEW**

The go-live gate (Section 5) passes only when the chemical test is run against at least one
NEW service as well as an original one. Then set `intakeForm.chemicalGateVerified: true` in
config — that is the single switch that routes chemical-service CTAs to the form before booking.
