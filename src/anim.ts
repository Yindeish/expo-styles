import {
    BounceIn,
    BounceInDown,
    BounceInLeft,
    BounceInRight,
    BounceInUp,
    BounceOut,
    BounceOutDown,
    BounceOutLeft,
    BounceOutRight,
    BounceOutUp,
    CurvedTransition,
    Easing,
    EntryExitTransition,
    FadeIn,
    FadeInDown,
    FadeInLeft,
    FadeInRight,
    FadeInUp,
    FadeOut,
    FadeOutDown,
    FadeOutLeft,
    FadeOutRight,
    FadeOutUp,
    FadingTransition,
    FlipInEasyX,
    FlipInEasyY,
    FlipInXDown,
    FlipInXUp,
    FlipInYLeft,
    FlipInYRight,
    FlipOutEasyX,
    FlipOutEasyY,
    FlipOutXDown,
    FlipOutXUp,
    FlipOutYLeft,
    FlipOutYRight,
    JumpingTransition,
    LightSpeedInLeft,
    LightSpeedInRight,
    LightSpeedOutLeft,
    LightSpeedOutRight,
    LinearTransition,
    PinwheelIn,
    PinwheelOut,
    RollInLeft,
    RollInRight,
    RollOutLeft,
    RollOutRight,
    RotateInDownLeft,
    RotateInDownRight,
    RotateInUpLeft,
    RotateInUpRight,
    RotateOutDownLeft,
    RotateOutDownRight,
    RotateOutUpLeft,
    RotateOutUpRight,
    SequencedTransition,
    SlideInDown,
    SlideInLeft,
    SlideInRight,
    SlideInUp,
    SlideOutDown,
    SlideOutLeft,
    SlideOutRight,
    SlideOutUp,
    StretchInX,
    StretchInY,
    StretchOutX,
    StretchOutY,
    ZoomIn,
    ZoomInDown,
    ZoomInEasyDown,
    ZoomInEasyUp,
    ZoomInLeft,
    ZoomInRight,
    ZoomInRotate,
    ZoomInUp,
    ZoomOut,
    ZoomOutDown,
    ZoomOutEasyDown,
    ZoomOutEasyUp,
    ZoomOutLeft,
    ZoomOutRight,
    ZoomOutRotate,
    ZoomOutUp,
    cancelAnimation,
    withDecay,
    withDelay,
    withRepeat,
    withSequence,
    withSpring,
    withTiming,
} from 'react-native-reanimated';
import type { WithDecayConfig, WithSpringConfig, WithTimingConfig } from 'react-native-reanimated';
import { withAliases } from './utils';

/* -------------------------------------------------------------------------- */
/*                                   Configs                                  */
/* -------------------------------------------------------------------------- */

/** Easing curves for `withTiming` / `anim.timing` / `anim.make(..., { easing })`. */
const easings = withAliases({
    linear: Easing.linear,
    ease: Easing.ease,
    easeIn: Easing.in(Easing.ease),
    easeOut: Easing.out(Easing.ease),
    easeInOut: Easing.inOut(Easing.ease),
    quadIn: Easing.in(Easing.quad),
    quadOut: Easing.out(Easing.quad),
    quadInOut: Easing.inOut(Easing.quad),
    cubicIn: Easing.in(Easing.cubic),
    cubicOut: Easing.out(Easing.cubic),
    cubicInOut: Easing.inOut(Easing.cubic),
    sinIn: Easing.in(Easing.sin),
    sinOut: Easing.out(Easing.sin),
    sinInOut: Easing.inOut(Easing.sin),
    expoIn: Easing.in(Easing.exp),
    expoOut: Easing.out(Easing.exp),
    expoInOut: Easing.inOut(Easing.exp),
    circleIn: Easing.in(Easing.circle),
    circleOut: Easing.out(Easing.circle),
    circleInOut: Easing.inOut(Easing.circle),
    backIn: Easing.in(Easing.back(1.7)),
    backOut: Easing.out(Easing.back(1.7)),
    backInOut: Easing.inOut(Easing.back(1.7)),
    elasticIn: Easing.in(Easing.elastic(1)),
    elasticOut: Easing.out(Easing.elastic(1)),
    elasticInOut: Easing.inOut(Easing.elastic(1)),
    bounceIn: Easing.in(Easing.bounce),
    bounceOut: Easing.out(Easing.bounce),
    bounceInOut: Easing.inOut(Easing.bounce),
    /** Material "standard" curve */
    standard: Easing.bezier(0.4, 0, 0.2, 1),
    /** Material "decelerate" curve (entering elements) */
    decelerate: Easing.bezier(0, 0, 0.2, 1),
    /** Material "accelerate" curve (exiting elements) */
    accelerate: Easing.bezier(0.4, 0, 1, 1),
    /** iOS-like smooth curve */
    smooth: Easing.bezier(0.25, 0.1, 0.25, 1),
    /** Snappy overshoot */
    overshoot: Easing.bezier(0.34, 1.56, 0.64, 1),
});

/** Spring configs for `withSpring` / `anim.spring`. */
const springs = withAliases({
    default: { damping: 15, stiffness: 150 } as WithSpringConfig,
    bouncy: { damping: 10, stiffness: 100, mass: 0.9 } as WithSpringConfig,
    stiff: { damping: 20, stiffness: 300 } as WithSpringConfig,
    gentle: { damping: 25, stiffness: 120 } as WithSpringConfig,
    wobbly: { damping: 8, stiffness: 180 } as WithSpringConfig,
    snappy: { damping: 18, stiffness: 400, mass: 0.8 } as WithSpringConfig,
    slow: { damping: 20, stiffness: 60 } as WithSpringConfig,
    molasses: { damping: 30, stiffness: 40, mass: 1.2 } as WithSpringConfig,
    noBounce: { damping: 30, stiffness: 200, overshootClamping: true } as WithSpringConfig,
});

/** Timing configs for `withTiming` / `anim.timing`. */
const timings = withAliases({
    instant: { duration: 0 } as WithTimingConfig,
    fastest: { duration: 100, easing: Easing.bezier(0.25, 0.1, 0.25, 1) } as WithTimingConfig,
    fast: { duration: 150, easing: Easing.bezier(0.25, 0.1, 0.25, 1) } as WithTimingConfig,
    smooth: { duration: 250, easing: Easing.out(Easing.ease) } as WithTimingConfig,
    normal: { duration: 300, easing: Easing.bezier(0.25, 0.1, 0.25, 1) } as WithTimingConfig,
    slow: { duration: 500, easing: Easing.bezier(0.25, 0.1, 0.25, 1) } as WithTimingConfig,
    slower: { duration: 800, easing: Easing.bezier(0.25, 0.1, 0.25, 1) } as WithTimingConfig,
    slowest: { duration: 1200, easing: Easing.bezier(0.25, 0.1, 0.25, 1) } as WithTimingConfig,
    linear: { duration: 300, easing: Easing.linear } as WithTimingConfig,
    easeIn: { duration: 300, easing: Easing.in(Easing.ease) } as WithTimingConfig,
    easeOut: { duration: 300, easing: Easing.out(Easing.ease) } as WithTimingConfig,
    easeInOut: { duration: 300, easing: Easing.inOut(Easing.ease) } as WithTimingConfig,
});

/** Default durations (ms) used by the ready-made presets. */
const durations = withAliases({
    instant: 0,
    fastest: 100,
    fast: 150,
    normal: 300,
    slow: 500,
    slower: 800,
    slowest: 1200,
});

/* -------------------------------------------------------------------------- */
/*                         Entering / exiting animations                       */
/* -------------------------------------------------------------------------- */

/** Every Reanimated entering animation (raw builder classes). */
const enteringBuilders = {
    fadeIn: FadeIn,
    fadeInUp: FadeInUp,
    fadeInDown: FadeInDown,
    fadeInLeft: FadeInLeft,
    fadeInRight: FadeInRight,
    slideInUp: SlideInUp,
    slideInDown: SlideInDown,
    slideInLeft: SlideInLeft,
    slideInRight: SlideInRight,
    zoomIn: ZoomIn,
    zoomInUp: ZoomInUp,
    zoomInDown: ZoomInDown,
    zoomInLeft: ZoomInLeft,
    zoomInRight: ZoomInRight,
    zoomInRotate: ZoomInRotate,
    zoomInEasyUp: ZoomInEasyUp,
    zoomInEasyDown: ZoomInEasyDown,
    bounceIn: BounceIn,
    bounceInUp: BounceInUp,
    bounceInDown: BounceInDown,
    bounceInLeft: BounceInLeft,
    bounceInRight: BounceInRight,
    flipInXUp: FlipInXUp,
    flipInXDown: FlipInXDown,
    flipInYLeft: FlipInYLeft,
    flipInYRight: FlipInYRight,
    flipInEasyX: FlipInEasyX,
    flipInEasyY: FlipInEasyY,
    lightSpeedInLeft: LightSpeedInLeft,
    lightSpeedInRight: LightSpeedInRight,
    pinwheelIn: PinwheelIn,
    rollInLeft: RollInLeft,
    rollInRight: RollInRight,
    rotateInDownLeft: RotateInDownLeft,
    rotateInDownRight: RotateInDownRight,
    rotateInUpLeft: RotateInUpLeft,
    rotateInUpRight: RotateInUpRight,
    stretchInX: StretchInX,
    stretchInY: StretchInY,
};

/** Every Reanimated exiting animation (raw builder classes). */
const exitingBuilders = {
    fadeOut: FadeOut,
    fadeOutUp: FadeOutUp,
    fadeOutDown: FadeOutDown,
    fadeOutLeft: FadeOutLeft,
    fadeOutRight: FadeOutRight,
    slideOutUp: SlideOutUp,
    slideOutDown: SlideOutDown,
    slideOutLeft: SlideOutLeft,
    slideOutRight: SlideOutRight,
    zoomOut: ZoomOut,
    zoomOutUp: ZoomOutUp,
    zoomOutDown: ZoomOutDown,
    zoomOutLeft: ZoomOutLeft,
    zoomOutRight: ZoomOutRight,
    zoomOutRotate: ZoomOutRotate,
    zoomOutEasyUp: ZoomOutEasyUp,
    zoomOutEasyDown: ZoomOutEasyDown,
    bounceOut: BounceOut,
    bounceOutUp: BounceOutUp,
    bounceOutDown: BounceOutDown,
    bounceOutLeft: BounceOutLeft,
    bounceOutRight: BounceOutRight,
    flipOutXUp: FlipOutXUp,
    flipOutXDown: FlipOutXDown,
    flipOutYLeft: FlipOutYLeft,
    flipOutYRight: FlipOutYRight,
    flipOutEasyX: FlipOutEasyX,
    flipOutEasyY: FlipOutEasyY,
    lightSpeedOutLeft: LightSpeedOutLeft,
    lightSpeedOutRight: LightSpeedOutRight,
    pinwheelOut: PinwheelOut,
    rollOutLeft: RollOutLeft,
    rollOutRight: RollOutRight,
    rotateOutDownLeft: RotateOutDownLeft,
    rotateOutDownRight: RotateOutDownRight,
    rotateOutUpLeft: RotateOutUpLeft,
    rotateOutUpRight: RotateOutUpRight,
    stretchOutX: StretchOutX,
    stretchOutY: StretchOutY,
};

const builders = withAliases({ ...enteringBuilders, ...exitingBuilders });

type Builders = typeof builders;
/** Name of any entering/exiting animation, e.g. `'fadeInUp'` or `'fade_in_up'`. */
export type AnimationName = keyof Builders;

/** Options for {@link make}. */
export interface MakeOptions {
    /** Duration in ms (default: 300 for entering, 200 for exiting). */
    duration?: number;
    /** Delay before starting, in ms. */
    delay?: number;
    /** Use a spring instead of timing. `true` uses the default spring. */
    spring?: boolean | { damping?: number; stiffness?: number; mass?: number };
    /** Custom easing (ignored when `spring` is set). Tip: use `anim.easings.*`. */
    easing?: Parameters<typeof FadeIn.easing>[0];
    /** Called on the UI thread when the animation finishes. */
    onFinish?: (finished: boolean) => void;
}

const exitingNames = new Set<string>(Object.keys(withAliases(exitingBuilders)));

/**
 * Creates a **fresh** entering/exiting animation with your own options.
 * Always returns a new instance, so it is safe to customise per component.
 *
 * @example
 * <Animated.View entering={anim.make('fadeInUp', { duration: 400, delay: 100 })} />
 */
function make<K extends AnimationName>(name: K, options: MakeOptions = {}): InstanceType<Builders[K]> {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Builder = builders[name] as any;
    const exiting = exitingNames.has(name as string);
    let b = Builder.duration(options.duration ?? (exiting ? 200 : 300));
    if (options.delay) b = b.delay(options.delay);
    if (options.spring) {
        b = b.springify();
        if (typeof options.spring === 'object') {
            if (options.spring.damping !== undefined) b = b.damping(options.spring.damping);
            if (options.spring.stiffness !== undefined) b = b.stiffness(options.spring.stiffness);
            if (options.spring.mass !== undefined) b = b.mass(options.spring.mass);
        }
    } else if (options.easing) {
        b = b.easing(options.easing);
    }
    if (options.onFinish) b = b.withCallback(options.onFinish);
    return b;
}

/**
 * Staggered entering/exiting animation for list items.
 *
 * @example
 * {items.map((item, index) => (
 *   <Animated.View key={item.id} entering={anim.stagger('fadeInUp', index)} />
 * ))}
 */
function stagger<K extends AnimationName>(
    name: K,
    index: number,
    options: Omit<MakeOptions, 'delay'> & { step?: number; startDelay?: number } = {}
): InstanceType<Builders[K]> {
    const { step = 60, startDelay = 0, ...rest } = options;
    return make(name, { ...rest, delay: startDelay + index * step });
}

/** Builds the ready-made preset object. Presets are shared: use `anim.make` to customise. */
function buildPresets() {
    const springified = new Set(['fadeInUp', 'fadeInDown', 'zoomIn']);
    const out = {} as { [K in keyof typeof enteringBuilders | keyof typeof exitingBuilders]: InstanceType<Builders[K]> };
    for (const name of Object.keys(enteringBuilders) as (keyof typeof enteringBuilders)[]) {
        const m = make(name, { duration: name === 'fadeIn' || name === 'zoomIn' ? 250 : 300, spring: springified.has(name) });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (out as any)[name] = m;
    }
    for (const name of Object.keys(exitingBuilders) as (keyof typeof exitingBuilders)[]) {
        const m = make(name, { duration: name.startsWith('slideOut') ? 250 : 200 });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (out as any)[name] = m;
    }
    return withAliases(out);
}

/* -------------------------------------------------------------------------- */
/*                              Layout transitions                             */
/* -------------------------------------------------------------------------- */

/** Ready-made layout transitions for the `layout` prop. */
const layout = withAliases({
    normal: LinearTransition.duration(250),
    linear: LinearTransition.duration(250),
    spring: LinearTransition.springify().damping(15).stiffness(150),
    bouncy: LinearTransition.springify().damping(10).stiffness(100),
    fading: FadingTransition.duration(250),
    sequenced: SequencedTransition.duration(300),
    sequencedReverse: SequencedTransition.duration(300).reverse(),
    jumping: JumpingTransition.duration(300),
    curved: CurvedTransition.duration(300),
    entryExit: EntryExitTransition.entering(FadeIn.duration(250)).exiting(FadeOut.duration(200)),
});

/* -------------------------------------------------------------------------- */
/*                           Shared value animations                           */
/* -------------------------------------------------------------------------- */
// All helpers below are worklets: use them from the JS thread (e.g. in onPress)
// or inside useAnimatedStyle / useDerivedValue / gesture callbacks.

type AnyAnimation = Parameters<typeof withDelay>[1];

/** Spring to a value. */
const spring = (toValue: number, config?: WithSpringConfig) => {
    'worklet';
    return withSpring(toValue, config ?? { damping: 15, stiffness: 150 });
};

/** Timing animation to a value (250ms ease-out by default). */
const timing = (toValue: number, config?: WithTimingConfig) => {
    'worklet';
    return withTiming(toValue, config ?? { duration: 250, easing: Easing.out(Easing.ease) });
};

/** Wait `duration` ms, then run `nextAnimation`. */
const delay = <T extends AnyAnimation>(duration: number, nextAnimation: T) => {
    'worklet';
    return withDelay(duration, nextAnimation);
};

/** Run animations one after another. */
const sequence = (...animations: number[]) => {
    'worklet';
    return withSequence(...animations);
};

/** Repeat an animation. `count = -1` repeats forever; `reverse` plays it back and forth. */
const repeat = <T extends AnyAnimation>(animation: T, count = -1, reverse = false) => {
    'worklet';
    return withRepeat(animation, count, reverse);
};

/** Momentum ("fling") animation, e.g. after a pan gesture. */
const decay = (config: WithDecayConfig) => {
    'worklet';
    return withDecay(config);
};

/** Fade to fully visible (use for `opacity`). */
const fadeIn = (duration = 250) => {
    'worklet';
    return withTiming(1, { duration, easing: Easing.out(Easing.ease) });
};

/** Fade to invisible (use for `opacity`). */
const fadeOut = (duration = 200) => {
    'worklet';
    return withTiming(0, { duration, easing: Easing.in(Easing.ease) });
};

/** Fade to any opacity. */
const fadeTo = (value: number, duration = 250) => {
    'worklet';
    return withTiming(value, { duration, easing: Easing.inOut(Easing.ease) });
};

/** Infinite gentle scale up/down (use for `scale`). */
const pulse = (scaleMin = 0.96, scaleMax = 1.04, duration = 800) => {
    'worklet';
    return withRepeat(withSequence(withTiming(scaleMax, { duration }), withTiming(scaleMin, { duration })), -1, true);
};

/** Infinite "lub-dub" heartbeat (use for `scale`). */
const heartbeat = (scale = 1.15, duration = 150, pause = 700) => {
    'worklet';
    return withRepeat(
        withSequence(
            withTiming(scale, { duration }),
            withTiming(1, { duration }),
            withTiming(scale, { duration }),
            withTiming(1, { duration }),
            withDelay(pause, withTiming(1, { duration: 0 }))
        ),
        -1,
        false
    );
};

/** Short "pop" (scale up then settle back to 1). */
const pop = (scale = 1.2, duration = 120) => {
    'worklet';
    return withSequence(withTiming(scale, { duration }), withSpring(1, { damping: 10, stiffness: 200 }));
};

/** Horizontal shake, e.g. for a wrong password (use for `translateX`). */
const shake = (offset = 10, count = 4, duration = 50) => {
    'worklet';
    return withSequence(
        withTiming(-offset, { duration: duration / 2 }),
        withRepeat(withTiming(offset, { duration }), count, true),
        withTiming(0, { duration: duration / 2 })
    );
};

/** Rotation wiggle in degrees (use as `rotate: \`${value}deg\``). */
const wiggle = (angle = 8, count = 4, duration = 60) => {
    'worklet';
    return withSequence(
        withTiming(-angle, { duration: duration / 2 }),
        withRepeat(withTiming(angle, { duration }), count, true),
        withTiming(0, { duration: duration / 2 })
    );
};

/** Infinite bounce up and down (use for `translateY`). Negative height = upward. */
const bounce = (height = -12, duration = 300) => {
    'worklet';
    return withRepeat(
        withSequence(
            withTiming(height, { duration, easing: Easing.out(Easing.quad) }),
            withTiming(0, { duration, easing: Easing.in(Easing.quad) })
        ),
        -1,
        false
    );
};

/** Infinite slow float up and down (use for `translateY`). */
const float = (distance = 6, duration = 1500) => {
    'worklet';
    return withRepeat(withTiming(-distance, { duration, easing: Easing.inOut(Easing.sin) }), -1, true);
};

/** Infinite opacity blink (use for `opacity`). */
const blink = (min = 0.2, duration = 500) => {
    'worklet';
    return withRepeat(withTiming(min, { duration }), -1, true);
};

/** Infinite 0 → 360 rotation in degrees, e.g. for loaders (use as `rotate: \`${value}deg\``). */
const spin = (duration = 1000, clockwise = true) => {
    'worklet';
    return withRepeat(withTiming(clockwise ? 360 : -360, { duration, easing: Easing.linear }), -1, false);
};

/** Single rotation to an angle in degrees. */
const rotateTo = (degrees: number, duration = 300) => {
    'worklet';
    return withTiming(degrees, { duration, easing: Easing.inOut(Easing.ease) });
};

/** Single 0 → 1 → 0 flash, e.g. highlight a changed value (use for `opacity`). */
const flash = (duration = 150, times = 2) => {
    'worklet';
    return withRepeat(withSequence(withTiming(0.2, { duration }), withTiming(1, { duration })), times, false);
};

/** Rubber-band stretch (use for `scaleX`, pair with `rubberBandY` for `scaleY`). */
const rubberBand = (duration = 120) => {
    'worklet';
    return withSequence(
        withTiming(1.25, { duration }),
        withTiming(0.75, { duration }),
        withTiming(1.15, { duration }),
        withTiming(0.95, { duration }),
        withTiming(1.05, { duration }),
        withTiming(1, { duration })
    );
};

/** Companion of `rubberBand` for `scaleY`. */
const rubberBandY = (duration = 120) => {
    'worklet';
    return withSequence(
        withTiming(0.75, { duration }),
        withTiming(1.25, { duration }),
        withTiming(0.85, { duration }),
        withTiming(1.05, { duration }),
        withTiming(0.95, { duration }),
        withTiming(1, { duration })
    );
};

/** "Tada!" attention seeker (use for `rotate` in degrees). */
const tada = (angle = 3, duration = 100) => {
    'worklet';
    return withSequence(
        withTiming(-angle, { duration }),
        withRepeat(withSequence(withTiming(angle, { duration }), withTiming(-angle, { duration })), 3, false),
        withTiming(0, { duration })
    );
};

/** Swing like a hanging sign (use for `rotate` in degrees). */
const swing = (angle = 15, duration = 200) => {
    'worklet';
    return withSequence(
        withTiming(angle, { duration }),
        withTiming(-angle * 0.66, { duration }),
        withTiming(angle * 0.33, { duration }),
        withTiming(-angle * 0.2, { duration }),
        withTiming(0, { duration })
    );
};

/** Stop any running animation on a shared value. */
const stop = cancelAnimation;

/* -------------------------------------------------------------------------- */

export const anim = withAliases({
    // configs
    easings,
    springs,
    timings,
    durations,

    // entering / exiting
    presets: buildPresets(),
    builders,
    make,
    stagger,

    // layout
    layout,

    // shared value helpers
    spring,
    timing,
    delay,
    sequence,
    repeat,
    decay,
    fadeIn,
    fadeOut,
    fadeTo,
    pulse,
    heartbeat,
    pop,
    shake,
    wiggle,
    bounce,
    float,
    blink,
    spin,
    rotateTo,
    flash,
    rubberBand,
    rubberBandY,
    tada,
    swing,
    stop,
});

/** Short alias: `a.presets.fadeIn` */
export const a = anim;

export default anim;
