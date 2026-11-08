# Changelog

All notable changes to this project will be documented in this file.
The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project uses [Semantic Versioning](https://semver.org/).

## [1.0.0] - 2026-11-08

### Added

- **Short aliases** for every module: `view`/`v`, `text`/`t`, `img`/`image`/`i`, `colors`/`c`, `anim`/`a`, and the grouped `styles`/`s` object (also the default export), e.g. `s.v.flex1`, `styles.view.flex1`, `v.flex1`.
- **snake_case aliases** for every camelCase key (`v.center_content`, `c.red_500`, `a.presets.fade_in_up`), fully typed. Also exported: `withAliases`, `toSnakeCase`, and the `SnakeCase` / `WithAliases` types.
- `view`: flexbox, gap, background, size, margin/padding, radius, border, position, shadow, opacity, and preset styles (card, buttons, inputs, screen containers), plus dynamic helpers.
- `text`: font sizes, weights, colors, alignment, decoration, line-height, letter-spacing, transforms, typography presets, and dynamic helpers.
- `img`: image sizing, `objectFit`, radius, border, shadow, and spacing styles, plus dynamic helpers.
- `colors`: 490+ colors, made up of design tokens, the full Tailwind CSS palette (22 hues × 11 shades), all 148 CSS named colors, translucent overlays, and social brand colors. Also exports the `ColorToken` type and the separate `tokens`, `palette`, `namedColors`, `overlays`, and `social` objects.
- `anim`: all 78 Reanimated entering/exiting animations as presets, `make()` for customised fresh instances, `stagger()` for lists, 10 layout transitions, 34 easings, spring/timing/duration configs, and worklet-safe helpers (`spring`, `timing`, `delay`, `sequence`, `repeat`, `decay`, `fadeIn`, `fadeOut`, `fadeTo`, `pulse`, `heartbeat`, `pop`, `shake`, `wiggle`, `bounce`, `float`, `blink`, `spin`, `rotateTo`, `flash`, `rubberBand`, `rubberBandY`, `tada`, `swing`, `stop`).
- Sub-path entry points: `expo-styles/view`, `/text`, `/img`, `/colors`, `/anim`.
