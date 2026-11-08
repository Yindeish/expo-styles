# expo-styles

[![npm version](https://img.shields.io/npm/v/expo-styles.svg?style=flat-square)](https://www.npmjs.com/package/expo-styles)
[![npm downloads](https://img.shields.io/npm/dm/expo-styles.svg?style=flat-square)](https://www.npmjs.com/package/expo-styles)
[![license](https://img.shields.io/npm/l/expo-styles.svg?style=flat-square)](./LICENSE)
[![platforms](https://img.shields.io/badge/platforms-iOS%20%7C%20Android%20%7C%20Web-blue?style=flat-square)](#-compatibility)
[![Expo Go](https://img.shields.io/badge/Expo%20Go-supported-000020?style=flat-square&logo=expo)](#-compatibility)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-3178C6?style=flat-square&logo=typescript&logoColor=white)](#-typescript)

**Ready-made, type-safe style utilities for Expo and React Native.**
It gives you a utility-first set of layout, spacing, typography, color, border, shadow, and image styles, plus Reanimated animation presets. You stop writing the same `StyleSheet.create` blocks in every screen and compose styles like this:

```tsx
import { v, t } from 'expo-styles';

<View style={[v.card, v.rowBetween, v.gapMd]}>
  <Text style={t.titleSmall}>Hello 👋</Text>
</View>
```

- ✅ Pure JavaScript. No native code, no `pod install`, works in **Expo Go**
- ✅ Works on **iOS, Android, and Web**
- ✅ Fully typed, with autocomplete for every style key
- ✅ Static styles are created with `StyleSheet.create`
- ✅ Dynamic helpers for custom values: `view.p(18)`, `text.color('#f00')`, `view.size(48)`
- ✅ **Short aliases** for everything: `styles` ⇄ `s`, `view` ⇄ `v`, `text` ⇄ `t`, `img` ⇄ `image` ⇄ `i`, `colors` ⇄ `c`, `anim` ⇄ `a`
- ✅ **camelCase _and_ snake_case** for every key: `v.centerContent` ⇄ `v.center_content`, `c.red500` ⇄ `c.red_500`
- ✅ **490+ colors**: your design tokens, the full Tailwind palette, all 148 CSS named colors, overlays, and social brand colors
- ✅ **Every Reanimated entering/exiting animation** (78 presets), 10 layout transitions, 30+ easings, plus helpers like `shake`, `pulse`, `spin`, `heartbeat`, `stagger`
- ✅ Import everything, or only what you need (`expo-styles/view`, `expo-styles/text`, …)

---

## 📚 Table of Contents

1. [Compatibility](#-compatibility)
2. [Installation](#-installation)
   - [Expo apps](#a-expo-apps-recommended)
   - [Bare React Native apps](#b-bare-react-native-apps)
3. [Quick Start](#-quick-start)
4. [Ways to Import (Aliases)](#-ways-to-import-aliases)
5. [Naming Conventions: camelCase & snake_case](#-naming-conventions-camelcase--snake_case)
6. [How It Works (Combining Styles)](#-how-it-works-combining-styles)
7. [Using the Library Well (Best Practices)](#-using-the-library-well-best-practices)
8. [API Reference](#-api-reference)
   - [`colors` / `c`](#colors--c)
   - [`view` / `v`](#view--v)
   - [`text` / `t`](#text--t)
   - [`img` / `image` / `i`](#img--image--i)
   - [`anim` / `a`](#anim--a)
9. [Spacing Scale](#-spacing-scale)
10. [Recipes](#-recipes)
11. [TypeScript](#-typescript)
12. [Troubleshooting / FAQ](#-troubleshooting--faq)
13. [Contributing](#-contributing)
14. [Author](#-author)
15. [License](#-license)

---

## ✅ Compatibility

| Platform / Tool | Supported |
| --------------- | :-------: |
| iOS             | ✅ |
| Android         | ✅ |
| Web (react-native-web / Expo Web) | ✅ |
| Expo Go         | ✅ |
| Expo dev builds / EAS | ✅ |
| Bare React Native CLI | ✅ |
| New Architecture (Fabric) | ✅ (pure JS) |

**Requirements**

| Dependency | Version | Needed for |
| ---------- | ------- | ---------- |
| `react-native` | `>= 0.73` | Everything |
| `react` | any version supported by your React Native | Everything |
| `react-native-reanimated` | `>= 3.0` | Only the `anim` module and the main `expo-styles` entry |

> 💡 If you don't want Reanimated, import from the sub-paths (`expo-styles/view`, `expo-styles/text`, `expo-styles/img`, `expo-styles/colors`). They don't depend on Reanimated. See [Ways to Import](#-ways-to-import).

---

## 📦 Installation

### A) Expo apps (recommended)

**Step 1: Install the package**

```bash
npx expo install expo-styles
```

**Step 2: Install Reanimated** (skip this if your project already has it; the default Expo template includes it)

```bash
npx expo install react-native-reanimated
```

> `npx expo install` picks the Reanimated version that matches your Expo SDK. Use it instead of a plain `npm install`.
> On Expo SDK 54+ (Reanimated 4), it also asks for `react-native-worklets`. Install it the same way: `npx expo install react-native-worklets`.

**Step 3: Restart the bundler with a clean cache**

```bash
npx expo start -c
```

That's it. Expo's Babel preset already includes the Reanimated plugin, so you don't need any extra config.

---

### B) Bare React Native apps

**Step 1: Install the package**

```bash
# npm
npm install expo-styles

# yarn
yarn add expo-styles

# pnpm
pnpm add expo-styles

# bun
bun add expo-styles
```

**Step 2: Install Reanimated** (skip this if you only use the `view` / `text` / `img` / `colors` sub-paths)

Follow the official guide: <https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/getting-started>

In short:

```bash
npm install react-native-reanimated
# Reanimated 4+ also needs:
npm install react-native-worklets
```

Then add the Babel plugin as the **last** item in `babel.config.js`:

```js
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    // Reanimated 4+:
    'react-native-worklets/plugin',
    // Reanimated 3.x: use 'react-native-reanimated/plugin' instead
  ],
};
```

**Step 3: Install iOS pods** (needed for Reanimated)

```bash
cd ios && pod install && cd ..
```

**Step 4: Restart Metro with a clean cache**

```bash
npx react-native start --reset-cache
```

---

## 🚀 Quick Start

```tsx
import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { view, text, img, colors } from 'expo-styles';

export default function ProfileCard() {
  return (
    <View style={[view.screenContainer, view.pagePadded, view.pt6]}>
      <View style={[view.card, view.rowStart, view.gapMd]}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }}
          style={[img.size(56), img.roundedFull, img.objectCover]}
        />

        <View style={[view.flex1, view.gapXs]}>
          <Text style={text.titleSmall}>Ada Lovelace</Text>
          <Text style={text.bodySmall}>Mathematician · Writer</Text>
        </View>
      </View>

      <Pressable style={[view.buttonPrimary, view.mt6]}>
        <Text style={text.buttonText}>Follow</Text>
      </Pressable>

      <Text style={[text.caption, text.center, view.mt3, { color: colors.gray500 }]}>
        Joined 2026
      </Text>
    </View>
  );
}
```

---

## 📥 Ways to Import (Aliases)

Every module has a **full name** and a **short alias**. Use whichever you like. They are the *same object*.

| Module | Full name | Aliases | Inside `styles` / `s` |
| ------ | --------- | ------- | --------------------- |
| View styles | `view` | `v` | `styles.view`, `styles.v`, `s.view`, `s.v` |
| Text styles | `text` | `t` | `styles.text`, `styles.t`, `s.text`, `s.t` |
| Image styles | `img` | `image`, `i` | `styles.img`, `styles.image`, `styles.i`, `s.img`, `s.i` |
| Colors | `colors` | `c` | `styles.colors`, `styles.c`, `s.colors`, `s.c` |
| Animations | `anim` | `a` | `styles.anim`, `styles.a`, `s.anim`, `s.a` |
| Everything | `styles` | `s`, default export | — |

### Option 1: Import the modules directly (recommended)

You **don't** have to write `styles.` or `s.` in front of anything:

```tsx
import { v, t, i, c, a } from 'expo-styles';         // short
import { view, text, img, colors, anim } from 'expo-styles'; // or full names

<View style={[v.flex1, v.center]} />          // same as view.flex1, view.center
<Text style={[t.bold, t.color(c.primary)]} /> // same as text.bold, text.color(colors.primary)
<Image style={[i.roundedFull, i.size(40)]} /> // same as img.roundedFull, img.size(40)
<Animated.View entering={a.presets.fadeIn} /> // same as anim.presets.fadeIn
```

You can mix full names and aliases in the same file: `import { v, text, c } from 'expo-styles'`.

### Option 2: One object for everything

```tsx
import s from 'expo-styles';            // default export
// or: import { s } from 'expo-styles';
// or: import styles from 'expo-styles';
// or: import { styles } from 'expo-styles';

s.v.flex1         // = s.view.flex1 = styles.v.flex1 = styles.view.flex1
s.t.bold          // = s.text.bold
s.i.roundedFull   // = s.img.roundedFull = s.image.roundedFull
s.c.primary       // = s.colors.primary
s.a.presets.fadeIn
```

### Option 3: Sub-path imports (smaller; no Reanimated needed for view/text/img/colors)

```tsx
import { view, v } from 'expo-styles/view';
import { text, t } from 'expo-styles/text';
import { img, image, i } from 'expo-styles/img';
import { colors, c } from 'expo-styles/colors';
import { anim, a } from 'expo-styles/anim'; // requires react-native-reanimated
```

Each sub-path also has a default export: `import v from 'expo-styles/view'`.

> 💡 **Name clash?** If `t` collides with your i18n `t()` function, or `i` with a loop variable, rename it on import:
> `import { t as tx, i as im } from 'expo-styles'`, or just use the full names `text` / `img`.

---

## 🐍 Naming Conventions: camelCase & snake_case

Teams write names differently, so **every key works in both camelCase and snake_case**. Both forms point to the exact same style or function, and both autocomplete in your editor.

```tsx
v.centerContent   ⇄  v.center_content
v.rowBetween      ⇄  v.row_between
v.bgGray50        ⇄  v.bg_gray_50
v.mt4             ⇄  v.mt_4
v.gap2Xl          ⇄  v.gap_2_xl
v.roundedTr(8)    ⇄  v.rounded_tr(8)
t.titleLarge      ⇄  t.title_large
t.semiBold        ⇄  t.semi_bold
i.objectCover     ⇄  i.object_cover
c.primaryDark     ⇄  c.primary_dark
c.red500          ⇄  c.red_500
c.aliceBlue       ⇄  c.alice_blue
a.presets.fadeInUp       ⇄  a.presets.fade_in_up
a.make('bounceInLeft')   ⇄  a.make('bounce_in_left')
```

**How a camelCase key becomes snake_case:**

1. An uppercase letter starts a new word: `centerContent` → `center_content`
2. A number after a letter starts a new word: `gray50` → `gray_50`, `mt10` → `mt_10`
3. Keys that already contain `_` stay as they are: `flex_1`, `opacity_0_5`, `_black`

> 💡 Pick one style per project and stick with it. Mixing both in one file works, but it's harder to read.

---

## 🧩 How It Works (Combining Styles)

Each module has two kinds of entries:

1. **Static styles.** These are pre-built with `StyleSheet.create`. Use them as properties:
   `view.flex1`, `view.p4`, `text.bold`, `img.roundedFull`
2. **Dynamic helpers.** These are functions that take your own value:
   `view.p(18)`, `view.bg('#ff0')`, `text.size(17)`, `img.size(64)`

Combine any number of them with an array. React Native merges them **left to right**, so later entries win:

```tsx
<View style={[view.card, view.p(24), isActive && view.borderColorPrimary]} />
```

You can also mix in your own inline or `StyleSheet` styles:

```tsx
<Text style={[text.body, { letterSpacing: 0.3 }, myStyles.custom]} />
```

---

## 🎯 Using the Library Well (Best Practices)

**1. Reach for static keys first, dynamic helpers second.**
Static keys (`v.p4`, `t.bold`) are created once with `StyleSheet.create` and reused. Dynamic helpers (`v.p(18)`) create a small object on each render. That's fine, but keep them for values that aren't on the scale.

```tsx
<View style={v.p4} />     // ✅ 16px, from the scale
<View style={v.p(18)} />  // ✅ fine for a one-off value
```

**2. Compose with arrays; put overrides last.**

```tsx
<View style={[v.card, v.rowBetween, v.gapMd, selected && v.borderColorPrimary]} />
```

Falsy values (`false`, `null`, `undefined`) in the array are ignored, so conditional styles are easy.

**3. Use presets for whole components, utilities for adjustments.**
Start with `v.card`, `v.buttonPrimary`, `v.inputWrapper`, `t.titleLarge`, or `t.body`, then fine-tune with utilities like `v.mt4` or `t.center`.

**4. Use color tokens, not raw hex.**
`c.primary`, `c.textMuted`, and `c.error` keep your app consistent and make re-theming easy. Reach for the palette (`c.blue500`) or named colors (`c.tomato`) for one-offs.

**5. Build your own reusable styles on top.**

```tsx
// ui/styles.ts
import { StyleSheet } from 'react-native';
import { c } from 'expo-styles';

export const ui = StyleSheet.create({
  pill: { paddingHorizontal: 12, paddingVertical: 6, borderRadius: 999, backgroundColor: c.primarySoft },
});

// Screen.tsx
<View style={[ui.pill, v.selfStart]} />
```

**6. Keep long style arrays readable.** Define them once outside the component:

```tsx
const row = [v.rowBetween, v.px4, v.py3, v.borderB(c.gray100)];

function Item() {
  return <View style={row} />;
}
```

**7. Animations: presets for mount/unmount, helpers for interactions.**
- Something appears or disappears → `entering={a.presets.fadeInUp}` / `exiting={a.presets.fadeOut}`
- List items → `entering={a.stagger('fadeInUp', index)}`
- Size or position change in a list → `layout={a.layout.spring}`
- Press, error, or attention effects → shared values with `a.spring`, `a.shake`, `a.pulse`, …
- Need custom options → `a.make('zoomIn', { duration: 400, delay: 100 })`. **Don't** chain methods on `a.presets.*`: the presets are shared, so chaining would change them everywhere.

**8. Import from sub-paths if you don't use animations.**
`import { v } from 'expo-styles/view'` never touches Reanimated.

---

## 📖 API Reference

### `colors` / `c`

**490+ colors in one flat, typed object** (about 900 keys once you count the snake_case aliases). Use them anywhere a color string is expected.

```tsx
import { c } from 'expo-styles'; // or { colors }

<View style={{ backgroundColor: c.primarySoft }} />
<Text style={t.color(c.success)} />
<View style={v.bg(c.blue_500)} />        // Tailwind palette, snake_case
<View style={v.bg(c.rebeccaPurple)} />   // CSS named color
<View style={v.bg(c.black50)} />         // 50% black overlay
```

The object contains these groups (each key also has a snake_case alias):

#### 1. Design tokens

| Group | Tokens |
| ----- | ------ |
| **Brand** | `primary` `#5A189A`, `primaryDark` `#47127A`, `primaryLight` `#73138C`, `primarySoft` `#F3E8FF`, `secondary` `#3C9AFB`, `secondaryDark` `#1E40AF`, `secondaryLight` `#93C5FD`, `accent` `#22aacc` |
| **Basics** | `white` `#FFFFFF`, `black` `#000000`, `transparent` |
| **Grays** (slate-toned) | `gray50` `#F8FAFC`, `gray100` `#F1F5F9`, `gray200` `#E2E8F0`, `gray300` `#CBD5E1`, `gray400` `#94A3B8`, `gray500` `#64748B`, `gray600` `#475569`, `gray700` `#334155`, `gray800` `#1E293B`, `gray900` `#0F172A`, `gray950` `#020617` |
| **UI** | `textMain` `#1E293B`, `textHeading` `#333333`, `textSub` `#475569`, `textMuted` `#94A3B8`, `textInverse` `#FFFFFF`, `placeholder` `#94A3B8`, `borderDefault` `#E2E8F0`, `borderCard` `#F1F5F9`, `borderStrong` `#CBD5E1`, `divider` `#E2E8F0`, `bgLight` `#F7F7F7`, `bgCanvas` `#F8FAFC`, `bgDark` `#0F172A`, `surface` `#FFFFFF`, `surfaceDark` `#1E293B`, `modalBackdrop` `rgba(0,0,0,0.5)`, `focusRing` `#ECDDFF`, `disabled` `#CBD5E1`, `disabledText` `#94A3B8` |
| **Semantic** | `success` `#10B981`, `successLight` `#D1FAE5`, `successDark` `#047857`, `error` / `danger` `#EF4444`, `errorLight` `#FEE2E2`, `errorDark` `#B91C1C`, `warning` `#F59E0B`, `warningLight` `#FEF3C7`, `warningDark` `#B45309`, `info` `#3B82F6`, `infoLight` `#DBEAFE`, `infoDark` `#1D4ED8` |
| **Extra** | `brandGreen` `#10D065`, `lavender` `#F2ECF9`, `deepPurple` `#320061`, `inputBg` `#F8F9FA`, `disabledButton` `#A898B8` |

#### 2. Full Tailwind CSS palette (242 colors)

Every hue in shades `50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950`, named `<hue><shade>`:

`slate` · `coolGray` · `zinc` · `neutral` · `stone` · `red` · `orange` · `amber` · `yellow` · `lime` · `green` · `emerald` · `teal` · `cyan` · `sky` · `blue` · `indigo` · `violet` · `purple` · `fuchsia` · `pink` · `rose`

```ts
c.red500        // '#EF4444'
c.emerald_600   // '#059669'
c.coolGray200   // Tailwind's "gray" scale
```

> ℹ️ `gray50`–`gray950` are the library's slate-toned grays, kept for backwards compatibility. Tailwind's own `gray` scale is available as **`coolGray50`–`coolGray950`**.

#### 3. All 148 CSS named colors (camelCased)

`aliceBlue`, `antiqueWhite`, `aqua`, `aquamarine`, `azure`, `beige`, `bisque`, `blanchedAlmond`, `blue`, `blueViolet`, `brown`, `burlyWood`, `cadetBlue`, `chartreuse`, `chocolate`, `coral`, `cornflowerBlue`, `cornsilk`, `crimson`, `cyan`, `darkBlue`, … `tomato`, `turquoise`, `violet`, `wheat`, `whiteSmoke`, `yellow`, `yellowGreen`.
They match the CSS spec exactly (e.g. `c.tomato` → `#FF6347`, `c.rebecca_purple` → `#663399`).

> ℹ️ Design tokens win when a name exists in more than one group. `c.lavender` is the brand token `#F2ECF9`; the CSS `lavender` (`#E6E6FA`) is available as `namedColors.lavender`.

#### 4. Overlays (translucent)

`black5`, `black10`, `black20` … `black90` and `white5`, `white10` … `white90` (`rgba` with that % opacity). Great for scrims, pressed states, and glass effects.

#### 5. Social / brand colors

`facebook`, `messenger`, `instagram`, `whatsapp`, `twitter`, `xBlack`, `linkedin`, `youtube`, `tiktok`, `snapchat`, `pinterest`, `reddit`, `discord`, `telegram`, `slack`, `github`, `google`, `googleRed`, `googleYellow`, `googleGreen`, `apple`, `microsoft`, `spotify`, `twitch`, `paypal`, `stripe`

#### Groups as separate objects

```ts
import { tokens, palette, namedColors, overlays, social } from 'expo-styles';
```

---

### `view` / `v`

Styles for `View`, `Pressable`, `ScrollView` (`contentContainerStyle`), `SafeAreaView`, and similar components.

#### Flexbox & layout

| Key | Style |
| --- | ----- |
| `flex1` / `flex_1` | `flex: 1` |
| `flexGrow1` · `flexShrink1` · `flexNoGrow` · `flexNoShrink` | `flexGrow: 1` · `flexShrink: 1` · `flexGrow: 0` · `flexShrink: 0` |
| `flexRow` / `row` | `flexDirection: 'row'` |
| `flexCol` / `col` | `flexDirection: 'column'` |
| `flexWrap` · `flexNowrap` | `flexWrap: 'wrap'` · `'nowrap'` |
| `center` / `centerContent` | center on both axes |
| `rowCenter` | row + center both axes |
| `rowBetween` | row + `alignItems: center` + `space-between` |
| `rowAround` · `rowEvenly` | row + center + `space-around` / `space-evenly` |
| `rowStart` · `rowEnd` | row + center + `flex-start` / `flex-end` |
| `colCenter` | column + center both axes |
| `colBetween` | column + `space-between` |
| `colStart` · `colEnd` | column aligned to start / end |
| `itemsStart` `itemsCenter` `itemsEnd` `itemsStretch` | `alignItems` |
| `justifyStart` `justifyCenter` `justifyEnd` `justifyBetween` `justifyAround` `justifyEvenly` | `justifyContent` |
| `selfAuto` `selfStart` `selfEnd` `selfCenter` `selfStretch` | `alignSelf` |

#### Gap

| Key | `gap` |
| --- | --- |
| `gapNone` | 0 |
| `gapXs` | 4 |
| `gapSm` | 8 |
| `gapMd` | 12 |
| `gapLg` | 16 |
| `gapXl` | 20 |
| `gap2Xl` | 24 |
| `gap3Xl` | 32 |

#### Backgrounds

| Key | Color |
| --- | ----- |
| `bgPrimary` `bgPrimaryDark` `bgPrimaryLight` `bgPrimarySoft` `bgSecondary` | brand colors |
| `bgSurface` | white |
| `bgGray50` `bgGray100` `bgGray200` | light grays |
| `bgErrorLight` `bgSuccessLight` `bgWarningLight` | soft semantic backgrounds |
| `bgModalBackdrop` | `rgba(0,0,0,0.5)` |
| `bgBlack` `bgWhite` `bgRed` `bgGreen` `bgBlue` `bgGray` `bgTransparent` (or `bg_black`, `bg_white`, …) | basic colors |
| `bg_22aacc` `bg_73138C` `bg_F7F7F7` | hex shortcuts |

#### Size

| Key | Style |
| --- | ----- |
| `wFull` · `hFull` | `width` / `height: '100%'` |
| `minWFull` · `minHFull` | `minWidth` / `minHeight: '100%'` |
| `fullSize` | width and height `100%` |
| `wAuto` · `hAuto` | `width` / `height: 'auto'` |

#### Margin & padding (static)

See the [Spacing Scale](#-spacing-scale): `1 = 4px`, `2 = 8px`, … `10 = 40px`.

| Prefix | Property | Available steps |
| ------ | -------- | --------------- |
| `m` | `margin` | 0–10 |
| `mx` | `marginHorizontal` | 1–6, plus `mxAuto` |
| `my` | `marginVertical` | 1–6 |
| `mt` / `mb` | `marginTop` / `marginBottom` | 1–6, 8, 10 |
| `p` | `padding` | 0–10 |
| `px` / `py` | `paddingHorizontal` / `paddingVertical` | 1–6, 8 |
| `pt` / `pb` | `paddingTop` / `paddingBottom` | 1, 2, 3, 4, 6, 8, 10 |

Examples: `view.m4` → `margin: 16`, `view.px5` → `paddingHorizontal: 20`, `view.mt10` → `marginTop: 40`.

#### Border radius & borders

| Key | Style |
| --- | ----- |
| `roundedXs` `roundedSm` `roundedMd` `roundedLg` `roundedXl` `rounded2Xl` `rounded3Xl` | radius 2 / 4 / 8 / 12 / 16 / 20 / 24 |
| `roundedFull` | radius 9999 (pill / circle) |
| `borderWidthThin` · `borderWidthThick` · `borderNone` | width 1 / 2 / 0 |
| `borderColorBlack` `borderColorWhite` `borderColorGray` `borderColorPrimary` `borderColorError` | border colors |

#### Position

`absolute`, `relative`, `top0`, `left0`, `right0`, `bottom0`, `inset0` (all four edges set to 0).

#### Shadows

Each preset sets the iOS/Web `shadow*` props **and** Android `elevation`.

| Key | Strength |
| --- | -------- |
| `shadowNone` | removes the shadow |
| `shadowSm` | subtle (elevation 1) |
| `shadowMd` | medium (elevation 3) |
| `shadowLg` | large (elevation 6) |
| `shadowXl` | extra large (elevation 12) |
| `shadow2Xl` | heavy (elevation 16) |

> ⚠️ On iOS, a shadow needs a `backgroundColor` on the same view to render well.

#### Opacity, overflow & visibility

`opacity100` / `opacity_1`, `opacity75` / `opacity_0_75`, `opacity50` / `opacity_0_5`, `opacity25` / `opacity_0_25`, `opacity0` / `opacity_0`, `overflowHidden`, `overflowVisible`, `hidden` (`display: 'none'`).

#### Presets (ready-made components)

| Key | What it gives you |
| --- | ----------------- |
| `screenContainer` | `flex: 1`, full width, white background |
| `pagePadded` | full width, 16px horizontal padding |
| `card` | white card, radius 12, padding 16, light border and soft shadow |
| `buttonBase` | 46px tall, full-width, centered row, radius 10 |
| `buttonPrimary` | `buttonBase` + primary background |
| `buttonSecondary` | `buttonBase` + white background + primary border |
| `inputWrapper` | 46px input container with a gray border |
| `inputWrapperError` | same as `inputWrapper`, with a red border |

#### Dynamic helpers

| Helper | Example | Result |
| ------ | ------- | ------ |
| `bg(color)` | `view.bg('#111')` | `backgroundColor` |
| `w(v)` · `h(v)` | `view.w('50%')`, `view.h(120)` | `width` / `height` (number, `'NN%'`, or `'auto'`) |
| `minW(v)` `maxW(v)` `minH(v)` `maxH(v)` | `view.maxW(480)` | min/max sizes |
| `size(n)` | `view.size(40)` | width and height = n |
| `gap(n)` · `gapX(n)` · `gapY(n)` | `view.gap(10)` | `gap` / `columnGap` / `rowGap` |
| `m` `mx` `my` `mt` `mb` `ml` `mr` | `view.mx(18)` | margins |
| `p` `px` `py` `pt` `pb` `pl` `pr` | `view.p(18)` | paddings |
| `rounded(n)` | `view.rounded(14)` | `borderRadius` |
| `roundedT` `roundedB` `roundedL` `roundedR` | `view.roundedT(20)` | radius on one side |
| `roundedTl` `roundedTr` `roundedBl` `roundedBr` | `view.roundedTr(8)` | radius on one corner |
| `border(color, width = 1)` | `view.border(colors.gray200)` | border color and width |
| `borderT` / `borderTop` `borderB` `borderL` `borderR` `(color, width = 1)` | `view.borderB('#eee')` | one-side border |
| `borderWidth(n)` `borderColor(c)` | `view.borderWidth(2)` | border props |
| `borderTWidth` `borderBWidth` `borderLWidth` `borderRWidth` | `view.borderBWidth(1)` | one-side width |
| `top` `left` `right` `bottom` | `view.top(10)` | position offsets |
| `zIndex(n)` | `view.zIndex(10)` | `zIndex` |
| `opacity(n)` | `view.opacity(0.6)` | `opacity` |
| `shadowColor(c)` `shadowOpacity(n)` `shadowRadius(n)` `shadowElevation(n)` | `view.shadowRadius(10)` | shadow props |
| `shadowX(n)` `shadowY(n)` `shadowXY(x, y)` | `view.shadowY(4)` | `shadowOffset` |

---

### `text` / `t`

Styles for `Text` and `TextInput`.

#### Font sizes

| Key | px | | Key | px |
| --- | -- | - | --- | -- |
| `xxs` | 8 | | `lg` | 18 |
| `xs` | 10 | | `xl` | 20 |
| `ss` | 12 | | `xxl` | 22 |
| `sm` / `base` | 14 | | `xxxl` | 24 |
| `md` | 16 | | `display2` | 28 |
| | | | `display1` | 32 |

#### Font weights

`thin` (100), `extraLight` (200), `light` (300), `regular` (400), `medium` (500), `semiBold` (600), `bold` (700), `extraBold` (800), `black` (900)

> ⚠️ `text.black` is **font weight 900**. For black-colored text, use `text._black`.

#### Colors

| Key | Color |
| --- | ----- |
| `colorBrand` `colorBrandDark` `colorBrandLight` `colorSecondary` | brand |
| `colorPrimary` / `colorMain` | main text `#1E293B` |
| `colorHeading` | `#333333` |
| `colorSub` | `#475569` |
| `colorMuted` | `#94A3B8` |
| `colorError` `colorSuccess` `colorWarning` | semantic |
| `colorBlack` `colorWhite` `colorGray` | basics |
| `_black` `_white` `_gray` `_22aacc` `_73138C` | shortcuts |

#### Alignment, decoration, transform, style

- Align: `left`, `center`, `right`, `justify`
- Decoration: `underline`, `lineThrough`, `noDecoration`
- Transform: `uppercase`, `lowercase`, `capitalize`, `noneTransform`
- Style: `italic`, `notItalic`

#### Line height & letter spacing

| Key | lineHeight | | Key | letterSpacing |
| --- | --- | - | --- | --- |
| `leadingTight` / `leadingXs` | 14 | | `trackingTight` | -0.5 |
| `leadingSnug` / `leadingSm` | 18 | | `trackingNormal` | 0 |
| `leadingMd` / `leadingBase` | 20 | | `trackingWide` | 0.5 |
| `leadingNormal` | 22 | | `trackingWider` | 1 |
| `leadingLg` | 24 | | `trackingWidest` | 2 |
| `leadingRelaxed` | 26 | | | |
| `leadingXl` | 28 | | | |
| `leadingLoose` | 30 | | | |
| `leading2Xl` | 32 | | | |

#### Spacing

`m0`–`m10` and `p0`–`p10`, using the same [spacing scale](#-spacing-scale).

#### Typography presets

| Key | Size / Weight / Color |
| --- | --------------------- |
| `titleLarge` | 28 / 700 / heading |
| `titleMedium` | 24 / 600 / heading |
| `titleSmall` | 20 / 600 / heading |
| `subtitle` | 16 / 500 / sub |
| `bodyLarge` | 16 / 400 / main |
| `body` | 14 / 400 / main |
| `bodySmall` | 12 / 400 / sub |
| `caption` | 11 / 400 / muted |
| `label` | 14 / 500 / main |
| `buttonText` | 14 / 600 / white |
| `buttonTextSecondary` | 14 / 600 / primary |
| `link` | 14 / 500 / secondary, underlined |
| `linkSmall` | 12 / 500 / secondary |
| `errorText` | 11 / 400 / error |

#### Dynamic helpers

| Helper | Example |
| ------ | ------- |
| `color(c)` | `text.color(colors.primary)` |
| `size(n)` | `text.size(17)` |
| `weight(w)` | `text.weight('600')` |
| `lineHeight(n)` | `text.lineHeight(26)` |
| `letterSpacing(n)` | `text.letterSpacing(0.2)` |
| `align(a)` | `text.align('center')` |
| `decorationLine(d)` | `text.decorationLine('underline')` |
| `transform(t)` | `text.transform('uppercase')` |
| `m` `mx` `my` `mt` `mb` `ml` `mr` | `text.mt(6)` |
| `p` `px` `py` `pt` `pb` `pl` `pr` | `text.px(4)` |

---

### `img` / `image` / `i`

Styles for `Image` (and `expo-image`'s `Image` through its `style` prop).

| Group | Keys |
| ----- | ---- |
| Background | `bgBlack`, `bgWhite`, `bgGray`, `bgTransparent` (also `_black`, `_white`, `_gray`, `_transparent`) |
| Size | `wFull`, `hFull`, `minWFull`, `minHFull`, `wAuto`, `hAuto` |
| Object fit | `objectCover`, `objectContain`, `objectFill`, `objectScaleDown`, `objectNone` |
| Spacing | `m0`–`m10`, `p0`–`p10` |
| Radius | `roundedSm` (4), `roundedMd` (8), `roundedLg` (12), `roundedFull` (9999) |
| Borders | `borderWidthThin`, `borderWidthThick`, `borderColorBlack`, `borderColorWhite`, `borderColorGray` |
| Position | `absolute`, `relative`, `top0`, `left0`, `right0`, `bottom0` |
| Shadows | `shadowSm`, `shadowMd`, `shadowLg`, `shadowXl`, `shadow2Xl` |
| Opacity / visibility | `opacity100` / `opacity_1`, `opacity50` / `opacity_0_5`, `opacity0` / `opacity_0`, `hidden` |

**Dynamic helpers:** `bg(c)`, `w(v)`, `h(v)`, `minW(v)`, `minH(v)`, `size(n)`, `object('cover' | 'contain' | 'fill' | 'scale-down' | 'none')`, `m`/`mx`/`my`/`mt`/`mb`/`ml`/`mr`, `p`/`px`/`py`/`pt`/`pb`/`pl`/`pr`, `rounded(n)`, `borderWidth(n)`, `borderColor(c)`, `border(c)`, `top`/`left`/`right`/`bottom`, `zIndex(n)`, `opacity(n)`.

```tsx
<Image source={avatar} style={[img.size(72), img.roundedFull, img.objectCover, img.border(colors.white)]} />
```

> `objectFit` requires React Native 0.73 or newer.

---

### `anim` / `a`

Animation helpers built on [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/). **Requires Reanimated.**
It covers every Reanimated layout animation, plus ready-made value animations for common interactions.

| Part | What it's for | Used with |
| ---- | ------------- | --------- |
| `a.presets.*` | Ready-made enter/exit animations | `entering` / `exiting` props |
| `a.make(name, options)` | Customised enter/exit animations | `entering` / `exiting` props |
| `a.stagger(name, index)` | List items appearing one after another | `entering` / `exiting` props |
| `a.layout.*` | Animate size/position changes | `layout` prop |
| `a.spring()`, `a.shake()`, `a.pulse()`, … | Animate a shared value | `useSharedValue` + `useAnimatedStyle` |
| `a.springs.*`, `a.timings.*`, `a.easings.*`, `a.durations.*` | Reusable configs | anything above, or your own `withSpring` / `withTiming` |

#### 1. Enter / exit presets: `a.presets.*`

Put them on any `Animated.View` / `Animated.Text` / `Animated.Image`:

```tsx
import Animated from 'react-native-reanimated';
import { a } from 'expo-styles';

{visible && (
  <Animated.View entering={a.presets.fadeInUp} exiting={a.presets.fadeOut}>
    …
  </Animated.View>
)}
```

**All 39 entering presets:**

| Family | Presets |
| ------ | ------- |
| Fade | `fadeIn`, `fadeInUp`, `fadeInDown`, `fadeInLeft`, `fadeInRight` |
| Slide | `slideInUp`, `slideInDown`, `slideInLeft`, `slideInRight` |
| Zoom | `zoomIn`, `zoomInUp`, `zoomInDown`, `zoomInLeft`, `zoomInRight`, `zoomInRotate`, `zoomInEasyUp`, `zoomInEasyDown` |
| Bounce | `bounceIn`, `bounceInUp`, `bounceInDown`, `bounceInLeft`, `bounceInRight` |
| Flip | `flipInXUp`, `flipInXDown`, `flipInYLeft`, `flipInYRight`, `flipInEasyX`, `flipInEasyY` |
| Light speed | `lightSpeedInLeft`, `lightSpeedInRight` |
| Pinwheel | `pinwheelIn` |
| Roll | `rollInLeft`, `rollInRight` |
| Rotate | `rotateInDownLeft`, `rotateInDownRight`, `rotateInUpLeft`, `rotateInUpRight` |
| Stretch | `stretchInX`, `stretchInY` |

**All 39 exiting presets:** the same families with `Out`: `fadeOut`, `fadeOutUp`, …, `slideOutDown`, …, `zoomOutRotate`, …, `bounceOutLeft`, …, `flipOutYRight`, …, `lightSpeedOutLeft`, `pinwheelOut`, `rollOutRight`, `rotateOutUpLeft`, `stretchOutX`, `stretchOutY`.

Default durations: entering 300ms (`fadeIn` and `zoomIn` 250ms), exiting 200ms (`slideOut*` 250ms). `fadeInUp`, `fadeInDown`, and `zoomIn` use a spring.

#### 2. Custom enter / exit: `a.make(name, options)`

Returns a **fresh** animation every time, so it's safe to customise:

```tsx
<Animated.View
  entering={a.make('bounceInLeft', {
    duration: 500,       // ms
    delay: 150,          // ms
    spring: true,        // or { damping: 12, stiffness: 120, mass: 1 }
    // easing: a.easings.backOut,  // used when spring is not set
    onFinish: (finished) => { 'worklet'; },
  })}
/>
```

`name` is any preset name above, in camelCase or snake_case (`'bounce_in_left'`).

#### 3. Staggered lists: `a.stagger(name, index, options?)`

```tsx
{items.map((item, index) => (
  <Animated.View key={item.id} entering={a.stagger('fadeInUp', index)}>
    <Text>{item.title}</Text>
  </Animated.View>
))}
```

Options: everything from `make` (except `delay`), plus `step` (ms between items, default `60`) and `startDelay` (default `0`).

#### 4. Layout transitions: `a.layout.*`

When an item's size or position changes (an item is added or removed, or the content expands), add `layout`:

```tsx
<Animated.View layout={a.layout.spring}>…</Animated.View>
```

| Key | Effect |
| --- | ------ |
| `normal` / `linear` | smooth 250ms move |
| `spring` | springy move |
| `bouncy` | extra-springy move |
| `fading` | fade out at the old spot, fade in at the new one |
| `sequenced` / `sequencedReverse` | move X then Y (or Y then X) |
| `jumping` | small jump into place |
| `curved` | moves along a curve |
| `entryExit` | fades out then back in |

#### 5. Value animations (for shared values)

All of these are **worklets**. Call them from event handlers (JS thread) **or** inside `useAnimatedStyle`, `useDerivedValue`, and gesture callbacks.

| Function | Animates | Description |
| -------- | -------- | ----------- |
| `a.spring(to, config?)` | any | spring to a value (default `{ damping: 15, stiffness: 150 }`) |
| `a.timing(to, config?)` | any | timing to a value (250ms ease-out by default) |
| `a.delay(ms, animation)` | any | wait, then run `animation` |
| `a.sequence(...animations)` | any | run one after another |
| `a.repeat(animation, count = -1, reverse = false)` | any | repeat (`-1` = forever) |
| `a.decay({ velocity, clamp? })` | position | momentum "fling" after a gesture |
| `a.fadeIn(ms = 250)` / `a.fadeOut(ms = 200)` | `opacity` | to 1 / to 0 |
| `a.fadeTo(value, ms = 250)` | `opacity` | to any opacity |
| `a.pulse(min = 0.96, max = 1.04, ms = 800)` | `scale` | gentle infinite pulse |
| `a.heartbeat(scale = 1.15, ms = 150, pause = 700)` | `scale` | infinite "lub-dub" |
| `a.pop(scale = 1.2, ms = 120)` | `scale` | quick pop, then settle back |
| `a.rubberBand()` + `a.rubberBandY()` | `scaleX` + `scaleY` | rubber-band stretch |
| `a.shake(offset = 10, count = 4, ms = 50)` | `translateX` | "wrong password" shake |
| `a.bounce(height = -12, ms = 300)` | `translateY` | infinite bounce |
| `a.float(distance = 6, ms = 1500)` | `translateY` | slow infinite floating |
| `a.wiggle(angle = 8, count = 4, ms = 60)` | `rotate` (deg) | quick wiggle |
| `a.tada(angle = 3, ms = 100)` | `rotate` (deg) | "tada!" attention seeker |
| `a.swing(angle = 15, ms = 200)` | `rotate` (deg) | swing like a hanging sign |
| `a.spin(ms = 1000, clockwise = true)` | `rotate` (deg) | infinite 360° spin (loaders) |
| `a.rotateTo(deg, ms = 300)` | `rotate` (deg) | rotate to an angle |
| `a.blink(min = 0.2, ms = 500)` | `opacity` | infinite blink |
| `a.flash(ms = 150, times = 2)` | `opacity` | quick flash highlight |
| `a.stop(sharedValue)` | — | cancel a running animation |

**How to use them:**

```tsx
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { a, v, t } from 'expo-styles';

export function PasswordField() {
  const x = useSharedValue(0);       // 1. create a shared value
  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: x.value }], // 2. use it in an animated style
  }));

  const onWrongPassword = () => {
    x.value = a.shake();             // 3. assign an animation to it
  };

  return <Animated.View style={[v.inputWrapper, style]} />;
}
```

Spinner:

```tsx
const deg = useSharedValue(0);
useEffect(() => {
  deg.value = a.spin(900);
  return () => a.stop(deg);
}, []);
const style = useAnimatedStyle(() => ({ transform: [{ rotate: `${deg.value}deg` }] }));
```

Press feedback:

```tsx
const scale = useSharedValue(1);
const style = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));

<Pressable
  onPressIn={() => (scale.value = a.spring(0.95, a.springs.stiff))}
  onPressOut={() => (scale.value = a.spring(1, a.springs.bouncy))}
>
  <Animated.View style={[v.buttonPrimary, style]}>
    <Text style={t.buttonText}>Press me</Text>
  </Animated.View>
</Pressable>
```

Combine helpers:

```tsx
// wait 300ms, then fade in, then pulse forever
opacity.value = a.delay(300, a.fadeIn());
scale.value = a.sequence(a.pop(), a.repeat(a.timing(1.05, a.timings.slow), -1, true));
```

#### 6. Configs

```ts
// Springs (for a.spring / withSpring)
a.springs.default   // { damping: 15, stiffness: 150 }
a.springs.bouncy    // { damping: 10, stiffness: 100, mass: 0.9 }
a.springs.stiff     // { damping: 20, stiffness: 300 }
a.springs.gentle    // { damping: 25, stiffness: 120 }
a.springs.wobbly    // { damping: 8,  stiffness: 180 }
a.springs.snappy    // { damping: 18, stiffness: 400, mass: 0.8 }
a.springs.slow      // { damping: 20, stiffness: 60 }
a.springs.molasses  // { damping: 30, stiffness: 40, mass: 1.2 }
a.springs.noBounce  // no overshoot

// Timings (for a.timing / withTiming)
a.timings.instant (0ms) · fastest (100) · fast (150) · smooth (250, ease-out) · normal (300)
a.timings.slow (500) · slower (800) · slowest (1200)
a.timings.linear · easeIn · easeOut · easeInOut  (300ms each)

// Durations (plain numbers, in ms)
a.durations.instant · fastest · fast · normal · slow · slower · slowest

// Easings
a.easings.linear · ease · easeIn · easeOut · easeInOut
a.easings.quadIn/Out/InOut · cubicIn/Out/InOut · sinIn/Out/InOut · expoIn/Out/InOut · circleIn/Out/InOut
a.easings.backIn/Out/InOut · elasticIn/Out/InOut · bounceIn/Out/InOut
a.easings.standard · decelerate · accelerate (Material) · smooth (iOS-like) · overshoot
```

Use them with your own Reanimated code too: `withTiming(1, a.timings.slow)`, `withSpring(0, a.springs.wobbly)`, `withTiming(1, { duration: 400, easing: a.easings.backOut })`.

#### 7. Raw builders

`a.builders.fadeIn` … `a.builders.stretchOutY` are the original Reanimated classes (`FadeIn`, …), if you want to use Reanimated's own chain API: `a.builders.fadeIn.duration(600).delay(100)`.

---

## 📏 Spacing Scale

All numbered margin and padding keys use a **4px** scale:

| Step | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
| ---- | - | - | - | - | - | - | - | - | - | - | -- |
| px   | 0 | 4 | 8 | 12 | 16 | 20 | 24 | 28 | 32 | 36 | 40 |

For any other value, use a dynamic helper: `view.p(18)`, `view.mt(50)`.

---

## 🍳 Recipes

### Full screen with a header row

```tsx
<SafeAreaView style={view.screenContainer}>
  <View style={[view.rowBetween, view.px4, view.py3, view.borderB(colors.gray100)]}>
    <Text style={text.titleSmall}>Inbox</Text>
    <Text style={text.link}>Edit</Text>
  </View>
</SafeAreaView>
```

### Form input with error state

```tsx
<View style={view.gapXs}>
  <Text style={text.label}>Email</Text>
  <View style={hasError ? view.inputWrapperError : view.inputWrapper}>
    <TextInput placeholder="you@example.com" placeholderTextColor={colors.placeholder} style={text.body} />
  </View>
  {hasError && <Text style={text.errorText}>Please enter a valid email</Text>}
</View>
```

### Modal backdrop

```tsx
<View style={[view.absolute, view.inset0, view.bgModalBackdrop, view.center]}>
  <View style={[view.card, view.w('85%')]}>
    <Text style={text.titleSmall}>Are you sure?</Text>
  </View>
</View>
```

### Circle avatar with status dot

```tsx
<View style={[view.relative, view.size(48)]}>
  <Image source={avatar} style={[img.size(48), img.roundedFull]} />
  <View style={[view.absolute, view.right0, view.bottom0, view.size(12), view.roundedFull, view.bg(colors.success), view.border(colors.white, 2)]} />
</View>
```

### Extending the palette with your own theme

```ts
// theme.ts
import { colors as base } from 'expo-styles';

export const colors = {
  ...base,
  primary: '#0EA5E9', // override
  brandPink: '#EC4899', // add
} as const;
```

> Static presets such as `view.bgPrimary` keep using the built-in palette. For overridden colors, use the dynamic helpers: `view.bg(colors.primary)`, `text.color(colors.primary)`.

---

## 🟦 TypeScript

The types ship with the package, so you don't need to install `@types/...`. Every key autocompletes, including the snake_case aliases.

```tsx
import { v, c, a, type ColorToken, type AnimationName, type MakeOptions } from 'expo-styles';

// ColorToken = any color key: 'primary' | 'red500' | 'red_500' | 'aliceBlue' | …
function Badge({ tone }: { tone: ColorToken }) {
  return <View style={v.bg(c[tone])} />;
}

// AnimationName = any entering/exiting preset name, in either case
function FadeBox({ anim = 'fadeIn', ...opts }: { anim?: AnimationName } & MakeOptions) {
  return <Animated.View entering={a.make(anim, opts)} />;
}
```

Also exported: `SnakeCase<'someKey'>` (→ `'some_key'`), `WithAliases<T>`, and the runtime helpers `withAliases(obj)` and `toSnakeCase(str)`. Use them to give your own style objects both naming styles:

```ts
import { StyleSheet } from 'react-native';
import { withAliases } from 'expo-styles';

export const ui = withAliases(StyleSheet.create({ primaryPill: { borderRadius: 999 } }));
ui.primaryPill; ui.primary_pill; // both work
```

---

## 🛠 Troubleshooting / FAQ

<details>
<summary><b>"Unable to resolve module react-native-reanimated"</b></summary>

Install Reanimated (`npx expo install react-native-reanimated`), or import only from the sub-paths that don't need it: `expo-styles/view`, `expo-styles/text`, `expo-styles/img`, `expo-styles/colors`.
</details>

<details>
<summary><b>"[Reanimated] Failed to create a worklet" / animations crash</b></summary>

- **Expo:** restart with `npx expo start -c`.
- **Bare RN:** make sure the Reanimated or Worklets Babel plugin is the **last** plugin in `babel.config.js`, then run `npx react-native start --reset-cache`.
</details>

<details>
<summary><b>Shadows don't show on Android</b></summary>

Android uses `elevation`, which every shadow preset sets. The view also needs a background color, for example `[view.card]` or `[view.shadowMd, view.bgSurface]`.
</details>

<details>
<summary><b>Shadows don't show on iOS</b></summary>

Give the view a `backgroundColor` and make sure it doesn't also have `overflowHidden`, which clips the shadow. To get rounded, clipped content plus a shadow, wrap it in an outer shadow view.
</details>

<details>
<summary><b><code>t</code> / <code>i</code> / <code>c</code> clashes with another variable</b></summary>

Rename it on import (`import { t as tx } from 'expo-styles'`), or use the full names (`text`, `img`, `colors`).
</details>

<details>
<summary><b>Changing <code>a.presets.fadeIn.duration(...)</code> affected every screen</b></summary>

Presets are shared instances, and Reanimated's chain methods change the instance itself. Use `a.make('fadeIn', { duration: 600 })` to get a fresh, customised animation.
</details>

<details>
<summary><b>Does this work with Expo Go?</b></summary>

Yes. It's pure JavaScript, and Reanimated ships inside Expo Go.
</details>

<details>
<summary><b>Does it work with NativeWind / Tamagui / styled-components?</b></summary>

Yes. These are plain React Native style objects, so you can combine them with anything that accepts a `style` prop.
</details>

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repo: <https://github.com/Yindeish/expo-styles>
2. Create a branch: `git checkout -b feat/my-feature`
3. Install deps: `npm install`
4. Make your changes in `src/`
5. Check everything: `npm run typecheck && npm run build`
6. Commit: `git commit -m "feat: add my feature"`
7. Push and open a Pull Request

Found a bug? [Open an issue](https://github.com/Yindeish/expo-styles/issues).

---

## 👤 Author

**Yindeish**

- GitHub: [@Yindeish](https://github.com/Yindeish)
- Email: [adeshinaadam03@gmail.com](mailto:adeshinaadam03@gmail.com)

If this package saves you time, please ⭐️ [star the repo](https://github.com/Yindeish/expo-styles). It really helps!

---

## 📄 License

[MIT](./LICENSE) © 2026 Yindeish
# expo-styles
