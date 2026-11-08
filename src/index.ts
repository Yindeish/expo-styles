import { view } from './view';
import { text } from './text';
import { img } from './img';
import { colors, palette, named as namedColors, tokens, overlays, social } from './colors';
import { anim } from './anim';

/*
 * Every module is available under a full name and a short alias:
 *
 *   view   ⇄ v
 *   text   ⇄ t
 *   img    ⇄ image ⇄ i
 *   colors ⇄ c
 *   anim   ⇄ a
 *
 * ...and the grouped object is available as `styles` or `s` (also the default export).
 */

/** Everything in one object: `styles.view.flex1`, `styles.v.flex1`, `styles.t.bold`, … */
export interface Styles {
    view: typeof view;
    v: typeof view;
    text: typeof text;
    t: typeof text;
    img: typeof img;
    image: typeof img;
    i: typeof img;
    colors: typeof colors;
    c: typeof colors;
    anim: typeof anim;
    a: typeof anim;
}

export const styles: Styles = {
    view,
    v: view,
    text,
    t: text,
    img,
    image: img,
    i: img,
    colors,
    c: colors,
    anim,
    a: anim,
};

/** Short alias of {@link styles}: `s.v.flex1`, `s.view.flex1`, `s.c.primary`, … */
export const s = styles;

export {
    view,
    view as v,
    text,
    text as t,
    img,
    img as image,
    img as i,
    colors,
    colors as c,
    anim,
    anim as a,
    palette,
    namedColors,
    tokens,
    overlays,
    social,
};

export { withAliases, toSnakeCase } from './utils';
export type { ColorToken } from './colors';
export type { AnimationName, MakeOptions } from './anim';
export type { SnakeCase, WithAliases } from './utils';

export default styles;
