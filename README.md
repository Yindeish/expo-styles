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
<View style={[view.card, view.rowBetween, view.gapMd]}>
  <Text style={text.titleSmall}>Hello 👋</Text>
</View>
```

- ✅ Pure JavaScript. No native code, no `pod install`, works in **Expo Go**
- ✅ Works on **iOS, Android, and Web**
- ✅ Fully typed, with autocomplete for every style key
- ✅ Static styles are created with `StyleSheet.create`
- ✅ Dynamic helpers for custom values: `view.p(18)`, `text.color('#f00')`, `view.size(48)`
- ✅ Ready-to-use **Reanimated** springs, timings, and enter/exit presets
- ✅ Import everything, or only what you need (`expo-styles/view`, `expo-styles/text`, …)

---

## 📚 Table of Contents

1. [Compatibility](#-compatibility)
2. [Installation](#-installation)
   - [Expo apps](#a-expo-apps-recommended)
   - [Bare React Native apps](#b-bare-react-native-apps)
3. [Quick Start](#-quick-start)
4. [Ways to Import](#-ways-to-import)
5. [How It Works (Combining Styles)](#-how-it-works-combining-styles)
6. [API Reference](#-api-reference)
   - [`colors`](#colors)
   - [`view`](#view)
   - [`text`](#text)
   - [`img`](#img)
   - [`anim`](#anim)
7. [Spacing Scale](#-spacing-scale)
8. [Recipes](#-recipes)
9. [TypeScript](#-typescript)
10. [Troubleshooting / FAQ](#-troubleshooting--faq)
11. [Contributing](#-contributing)
12. [Author](#-author)
13. [License](#-license)

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

## 📥 Ways to Import

```tsx
// 1) Named imports (recommended)
import { view, text, img, colors, anim } from 'expo-styles';

// 2) Default import: one object holding everything
import styles from 'expo-styles';
styles.view.card;
styles.text.titleLarge;

// 3) Named "styles" object (same as the default export)
import { styles } from 'expo-styles';

// 4) Sub-path imports: smaller, and no Reanimated needed for view/text/img/colors
import { view } from 'expo-styles/view';
import { text } from 'expo-styles/text';
import { img } from 'expo-styles/img';
import { colors } from 'expo-styles/colors';
import { anim } from 'expo-styles/anim'; // requires react-native-reanimated
```

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

## 📖 API Reference

### `colors`

A flat palette of design tokens. Use it anywhere a color string is expected.

```tsx
import { colors } from 'expo-styles';

<View style={{ backgroundColor: colors.primarySoft }} />
<Text style={text.color(colors.success)} />
```

| Group | Tokens |
| ----- | ------ |
| **Brand** | `primary` `#5A189A`, `primaryDark` `#47127A`, `primaryLight` `#73138C`, `primarySoft` `#F3E8FF`, `secondary` `#3C9AFB`, `secondaryDark` `#1E40AF`, `secondaryLight` `#93C5FD`, `accent` `#22aacc` |
| **Basics** | `white` `#FFFFFF`, `black` `#000000`, `transparent` |
| **Grays** | `gray50` `#F8FAFC`, `gray100` `#F1F5F9`, `gray200` `#E2E8F0`, `gray300` `#CBD5E1`, `gray400` `#94A3B8`, `gray500` `#64748B`, `gray600` `#475569`, `gray700` `#334155`, `gray800` `#1E293B`, `gray900` `#0F172A` |
| **UI tokens** | `textMain` `#1E293B`, `textHeading` `#333333`, `textSub` `#475569`, `textMuted` `#94A3B8`, `placeholder` `#94A3B8`, `borderDefault` `#E2E8F0`, `borderCard` `#F1F5F9`, `bgLight` `#F7F7F7`, `bgCanvas` `#F8FAFC`, `modalBackdrop` `rgba(0,0,0,0.5)`, `focusRing` `#ECDDFF` |
| **Semantic** | `success` `#10B981`, `successLight` `#D1FAE5`, `error` `#EF4444`, `errorLight` `#FEE2E2`, `warning` `#F59E0B`, `warningLight` `#FEF3C7`, `info` `#3B82F6`, `infoLight` `#DBEAFE` |
| **Extra** | `brandGreen` `#10D065`, `lavender` `#F2ECF9`, `deepPurple` `#320061`, `inputBg` `#F8F9FA`, `disabledButton` `#A898B8` |

---

### `view`

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
| `bg_black` `bg_white` `bg_red` `bg_green` `bg_blue` `bg_gray` `bg_transparent` | basic colors |
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

`opacity_1`, `opacity_0_75`, `opacity_0_5`, `opacity_0_25`, `opacity_0`, `overflowHidden`, `overflowVisible`, `hidden` (`display: 'none'`).

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

### `text`

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

### `img`

Styles for `Image` (and `expo-image`'s `Image` through its `style` prop).

| Group | Keys |
| ----- | ---- |
| Background | `_black`, `_white`, `_gray`, `_transparent` |
| Size | `wFull`, `hFull`, `minWFull`, `minHFull`, `wAuto`, `hAuto` |
| Object fit | `objectCover`, `objectContain`, `objectFill`, `objectScaleDown`, `objectNone` |
| Spacing | `m0`–`m10`, `p0`–`p10` |
| Radius | `roundedSm` (4), `roundedMd` (8), `roundedLg` (12), `roundedFull` (9999) |
| Borders | `borderWidthThin`, `borderWidthThick`, `borderColorBlack`, `borderColorWhite`, `borderColorGray` |
| Position | `absolute`, `relative`, `top0`, `left0`, `right0`, `bottom0` |
| Shadows | `shadowSm`, `shadowMd`, `shadowLg`, `shadowXl`, `shadow2Xl` |
| Opacity / visibility | `opacity_1`, `opacity_0_5`, `opacity_0`, `hidden` |

**Dynamic helpers:** `bg(c)`, `w(v)`, `h(v)`, `minW(v)`, `minH(v)`, `size(n)`, `object('cover' | 'contain' | 'fill' | 'scale-down' | 'none')`, `m`/`mx`/`my`/`mt`/`mb`/`ml`/`mr`, `p`/`px`/`py`/`pt`/`pb`/`pl`/`pr`, `rounded(n)`, `borderWidth(n)`, `borderColor(c)`, `border(c)`, `top`/`left`/`right`/`bottom`, `zIndex(n)`, `opacity(n)`.

```tsx
<Image source={avatar} style={[img.size(72), img.roundedFull, img.objectCover, img.border(colors.white)]} />
```

> `objectFit` requires React Native 0.73 or newer.

---

### `anim`

Animation helpers built on [react-native-reanimated](https://docs.swmansion.com/react-native-reanimated/). **Requires Reanimated.**

#### Configs

```ts
anim.springs.default   // { damping: 15, stiffness: 150 }
anim.springs.bouncy    // { damping: 10, stiffness: 100, mass: 0.9 }
anim.springs.stiff     // { damping: 20, stiffness: 300 }
anim.springs.gentle    // { damping: 25, stiffness: 120 }

anim.timings.fast      // 150ms
anim.timings.normal    // 300ms
anim.timings.slow      // 500ms
anim.timings.smooth    // 250ms, ease-out
```

#### Enter / exit presets (for `Animated.View`'s `entering` / `exiting`)

`fadeIn`, `fadeInDown`, `fadeInUp`, `fadeOut`, `fadeOutDown`, `fadeOutUp`, `slideInDown`, `slideInUp`, `slideInLeft`, `slideInRight`, `slideOutDown`, `slideOutUp`, `zoomIn`, `zoomOut`

#### Layout transitions (for `layout`)

`anim.layout.spring`, `anim.layout.normal`

#### Functions (work on the JS thread **and** inside worklets)

| Function | Description |
| -------- | ----------- |
| `anim.spring(toValue, config?)` | `withSpring` with the default spring |
| `anim.timing(toValue, config?)` | `withTiming`, 250ms ease-out by default |
| `anim.delay(ms, animation)` | `withDelay` |
| `anim.pulse(min = 0.96, max = 1.04, duration = 800)` | infinite back-and-forth pulse, good for `scale` |

#### Example

```tsx
import Animated, { useSharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { Pressable, Text } from 'react-native';
import { anim, view, text } from 'expo-styles';

export function BouncyButton() {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <Animated.View entering={anim.presets.fadeInUp} layout={anim.layout.spring} style={animatedStyle}>
      <Pressable
        style={view.buttonPrimary}
        onPressIn={() => (scale.value = anim.spring(0.95, anim.springs.stiff))}
        onPressOut={() => (scale.value = anim.spring(1, anim.springs.bouncy))}
      >
        <Text style={text.buttonText}>Press me</Text>
      </Pressable>
    </Animated.View>
  );
}
```

Pulse forever:

```tsx
const scale = useSharedValue(1);
useEffect(() => {
  scale.value = anim.pulse();
}, []);
```

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

The types ship with the package, so you don't need to install `@types/...`.

```ts
import type { ColorToken } from 'expo-styles';

function Badge({ tone }: { tone: ColorToken }) {
  return <View style={view.bg(colors[tone])} />;
}
```

Every key has autocomplete. Type `view.` or `text.` in your editor to browse them.

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
