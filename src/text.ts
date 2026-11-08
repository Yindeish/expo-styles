import { StyleSheet, TextStyle } from 'react-native';
import { colors } from './colors';
import { withAliases } from './utils';

export const text = withAliases({
    ...StyleSheet.create({
        // Text sizes
        xxs: { fontSize: 8 },
        xs: { fontSize: 10 },
        ss: { fontSize: 12 },
        sm: { fontSize: 14 },
        base: { fontSize: 14 },
        md: { fontSize: 16 },
        lg: { fontSize: 18 },
        xl: { fontSize: 20 },
        xxl: { fontSize: 22 },
        xxxl: { fontSize: 24 },
        display1: { fontSize: 32 },
        display2: { fontSize: 28 },

        // Text colors
        _black: { color: colors.black },
        _white: { color: colors.white },
        _gray: { color: colors.gray500 },
        _22aacc: { color: colors.accent },
        _73138C: { color: colors.primaryLight },
        colorBlack: { color: colors.black },
        colorWhite: { color: colors.white },
        colorGray: { color: colors.gray500 },

        colorBrand: { color: colors.primary },
        colorBrandDark: { color: colors.primaryDark },
        colorBrandLight: { color: colors.primaryLight },
        colorSecondary: { color: colors.secondary },
        colorPrimary: { color: colors.textMain },
        colorMain: { color: colors.textMain },
        colorHeading: { color: colors.textHeading },
        colorSub: { color: colors.textSub },
        colorMuted: { color: colors.textMuted },
        colorError: { color: colors.error },
        colorSuccess: { color: colors.success },
        colorWarning: { color: colors.warning },

        // Font weights
        thin: { fontWeight: '100' },
        extraLight: { fontWeight: '200' },
        light: { fontWeight: '300' },
        regular: { fontWeight: '400' },
        medium: { fontWeight: '500' },
        semiBold: { fontWeight: '600' },
        bold: { fontWeight: '700' },
        extraBold: { fontWeight: '800' },
        black: { fontWeight: '900' },

        // Alignments
        left: { textAlign: 'left' },
        center: { textAlign: 'center' },
        right: { textAlign: 'right' },
        justify: { textAlign: 'justify' },

        // Decorations
        underline: { textDecorationLine: 'underline' },
        lineThrough: { textDecorationLine: 'line-through' },
        noDecoration: { textDecorationLine: 'none' },

        // Line heights
        leadingTight: { lineHeight: 14 },
        leadingSnug: { lineHeight: 18 },
        leadingNormal: { lineHeight: 22 },
        leadingRelaxed: { lineHeight: 26 },
        leadingLoose: { lineHeight: 30 },

        leadingXs: { lineHeight: 14 },
        leadingSm: { lineHeight: 18 },
        leadingMd: { lineHeight: 20 },
        leadingBase: { lineHeight: 20 },
        leadingLg: { lineHeight: 24 },
        leadingXl: { lineHeight: 28 },
        leading2Xl: { lineHeight: 32 },

        // Letter spacings
        trackingTight: { letterSpacing: -0.5 },
        trackingNormal: { letterSpacing: 0 },
        trackingWide: { letterSpacing: 0.5 },
        trackingWider: { letterSpacing: 1 },
        trackingWidest: { letterSpacing: 2 },

        // Transformations
        uppercase: { textTransform: 'uppercase' },
        lowercase: { textTransform: 'lowercase' },
        capitalize: { textTransform: 'capitalize' },
        noneTransform: { textTransform: 'none' },

        // Font styles
        italic: { fontStyle: 'italic' },
        notItalic: { fontStyle: 'normal' },

        // Margins
        m0: { margin: 0 },
        m1: { margin: 4 },
        m2: { margin: 8 },
        m3: { margin: 12 },
        m4: { margin: 16 },
        m5: { margin: 20 },
        m6: { margin: 24 },
        m7: { margin: 28 },
        m8: { margin: 32 },
        m9: { margin: 36 },
        m10: { margin: 40 },

        // Paddings
        p0: { padding: 0 },
        p1: { padding: 4 },
        p2: { padding: 8 },
        p3: { padding: 12 },
        p4: { padding: 16 },
        p5: { padding: 20 },
        p6: { padding: 24 },
        p7: { padding: 28 },
        p8: { padding: 32 },
        p9: { padding: 36 },
        p10: { padding: 40 },

        // Semantic typography presets
        titleLarge: {
            fontSize: 28,
            fontWeight: '700',
            color: colors.textHeading,
            lineHeight: 34,
        },
        titleMedium: {
            fontSize: 24,
            fontWeight: '600',
            color: colors.textHeading,
            lineHeight: 30,
        },
        titleSmall: {
            fontSize: 20,
            fontWeight: '600',
            color: colors.textHeading,
            lineHeight: 26,
        },
        subtitle: {
            fontSize: 16,
            fontWeight: '500',
            color: colors.textSub,
            lineHeight: 22,
        },
        bodyLarge: {
            fontSize: 16,
            fontWeight: '400',
            color: colors.textMain,
            lineHeight: 24,
        },
        body: {
            fontSize: 14,
            fontWeight: '400',
            color: colors.textMain,
            lineHeight: 20,
        },
        bodySmall: {
            fontSize: 12,
            fontWeight: '400',
            color: colors.textSub,
            lineHeight: 18,
        },
        caption: {
            fontSize: 11,
            fontWeight: '400',
            color: colors.textMuted,
            lineHeight: 14,
        },
        label: {
            fontSize: 14,
            fontWeight: '500',
            color: colors.textMain,
        },
        buttonText: {
            fontSize: 14,
            fontWeight: '600',
            color: colors.white,
        },
        buttonTextSecondary: {
            fontSize: 14,
            fontWeight: '600',
            color: colors.primary,
        },
        link: {
            fontSize: 14,
            fontWeight: '500',
            color: colors.secondary,
            textDecorationLine: 'underline',
        },
        linkSmall: {
            fontSize: 12,
            fontWeight: '500',
            color: colors.secondary,
        },
        errorText: {
            fontSize: 11,
            fontWeight: '400',
            color: colors.error,
        },
    }),

    // Dynamic style helper functions
    color: (value: string): TextStyle => ({
        color: value,
    }),
    size: (value: number): TextStyle => ({
        fontSize: value,
    }),
    weight: (value: TextStyle['fontWeight']): TextStyle => ({
        fontWeight: value,
    }),
    lineHeight: (value: number): TextStyle => ({
        lineHeight: value,
    }),
    letterSpacing: (value: number): TextStyle => ({
        letterSpacing: value,
    }),
    align: (value: TextStyle['textAlign']): TextStyle => ({
        textAlign: value,
    }),
    decorationLine: (value: TextStyle['textDecorationLine']): TextStyle => ({
        textDecorationLine: value,
    }),
    transform: (value: TextStyle['textTransform']): TextStyle => ({
        textTransform: value,
    }),
    m: (value: number) => ({ margin: value } as TextStyle),
    my: (value: number) => ({ marginTop: value, marginBottom: value } as TextStyle),
    mt: (value: number) => ({ marginTop: value } as TextStyle),
    mb: (value: number) => ({ marginBottom: value } as TextStyle),
    mx: (value: number) => ({ marginLeft: value, marginRight: value } as TextStyle),
    ml: (value: number) => ({ marginLeft: value } as TextStyle),
    mr: (value: number) => ({ marginRight: value } as TextStyle),
    p: (value: number) => ({ padding: value } as TextStyle),
    py: (value: number) => ({ paddingTop: value, paddingBottom: value } as TextStyle),
    pt: (value: number) => ({ paddingTop: value } as TextStyle),
    pb: (value: number) => ({ paddingBottom: value } as TextStyle),
    px: (value: number) => ({ paddingLeft: value, paddingRight: value } as TextStyle),
    pl: (value: number) => ({ paddingLeft: value } as TextStyle),
    pr: (value: number) => ({ paddingRight: value } as TextStyle),
});

/** Short alias: `t.bold` */
export const t = text;

export default text;
