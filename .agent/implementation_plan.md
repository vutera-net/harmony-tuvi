# Implementation Plan - Phase 3: Advanced Features & UX Polish

This phase focuses on turning Harmony TuVi from a basic utility into a premium, interactive astrology experience. Key goals include accurate lunar calculations, personalized data, and deep cultural insights.

## Proposed Changes

### 1. Advanced Astrology Engine (Logic)
- [ ] **Accurate Lunar Conversion**: Replace the placeholder `solarToLunar` with a robust algorithm (handling leap months and offsets) in `src/lib/lunar-logic.ts`.
- [ ] **Fate Weight Interpretations**: Add detailed textual readings for each "Lượng Chỉ" outcome in `CanXuong.tsx`.
- [ ] **Daily Luck (Tử Vi Hàng Ngày)**: Logic to calculate basic daily fortunes based on user's birth year.

### 2. Personalization (Persistence)
- [ ] **LocalStorage Integration**: Save user's birth details so they persist across reloads and different modules (Calendar, Can Xuong, Bat Trach).
- [ ] **Dynamic Dashboard**: Home page updates with "Today's Message" for the specific user.

### 3. Zen UX Polish
- [ ] **Animated Transitions**: Implement global page transition effects using `framer-motion`.
- [ ] **Enhanced Bát Trạch UI**: A more visual, interactive compass design.
- [ ] **Dark Mode Styling**: Optimized Zen aesthetic for dark environments.

## Verification Plan

### Automated Tests
- [ ] Test lunar date conversion for 2026-2030 using Browser SubAgent.
- [ ] Verify `localStorage` persistence of user data across navigation items.

### Manual Verification
- [ ] Visual audit of Zen animations and accessibility checks.
- [ ] Review of astrological content and Vietnamese localizations.
