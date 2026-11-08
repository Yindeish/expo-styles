/**
 * Naming-convention helpers.
 *
 * Every style key in this library is written in camelCase (e.g. `centerContent`,
 * `bgGray50`, `fadeInUp`). `withAliases` adds a snake_case twin for each of them
 * (`center_content`, `bg_gray_50`, `fade_in_up`), so developers can use whichever
 * convention they prefer. Both point to the exact same style/function, and both
 * are fully typed.
 *
 * Conversion rules:
 * - an uppercase letter starts a new word:  `centerContent` → `center_content`
 * - a number after a letter starts a new word: `gray50` → `gray_50`, `mt4` → `mt_4`
 * - keys that already contain `_` are left alone (`flex_1`, `opacity_0_5`, `_black`)
 */

type Digit = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
type IsUpper<C extends string> = C extends Digit ? false : C extends Uppercase<C> ? (C extends Lowercase<C> ? false : true) : false;
type IsDigit<C extends string> = C extends Digit ? true : false;

type Separator<C extends string, Prev extends string> = Prev extends ''
    ? ''
    : IsUpper<C> extends true
      ? '_'
      : IsDigit<C> extends true
        ? IsDigit<Prev> extends true
            ? ''
            : '_'
        : '';

/** Converts a camelCase string literal type to snake_case. */
export type SnakeCase<S extends string, Prev extends string = '', Acc extends string = ''> = S extends `${infer C}${infer Rest}`
    ? SnakeCase<Rest, C, `${Acc}${Separator<C, Prev>}${Lowercase<C>}`>
    : Acc;

type SnakeKeys<T> = {
    [K in keyof T as K extends string
        ? K extends `${string}_${string}`
            ? never
            : SnakeCase<K> extends K
              ? never
              : SnakeCase<K>
        : never]: T[K];
};

/** `T` plus a snake_case alias for every camelCase key. */
export type WithAliases<T> = T & SnakeKeys<T>;

/** Runtime equivalent of {@link SnakeCase}. */
export const toSnakeCase = (key: string): string =>
    key
        .replace(/([a-zA-Z])(\d)/g, '$1_$2')
        .replace(/([A-Z])/g, '_$1')
        .toLowerCase();

/** Returns a copy of `obj` with a snake_case alias added for each camelCase key. */
export function withAliases<T extends object>(obj: T): WithAliases<T> {
    const out: Record<string, unknown> = { ...(obj as Record<string, unknown>) };
    for (const key of Object.keys(obj)) {
        if (key.includes('_')) continue;
        const snake = toSnakeCase(key);
        if (snake !== key && !(snake in out)) {
            out[snake] = (obj as Record<string, unknown>)[key];
        }
    }
    return out as WithAliases<T>;
}
