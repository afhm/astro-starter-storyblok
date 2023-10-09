/*!
 * ScrollToPlugin 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

let e,
  t,
  l,
  o,
  r,
  s,
  n,
  i,
  p = () => 'undefined' != typeof window,
  a = () => e || (p() && (e = window.gsap) && e.registerPlugin && e),
  c = (e) => 'string' == typeof e,
  y = (e) => 'function' == typeof e,
  f = (e, t) => {
    let s = 'x' === t ? 'Width' : 'Height',
      n = 'scroll' + s,
      i = 'client' + s;
    return e === l || e === o || e === r
      ? Math.max(o[n], r[n]) - (l['inner' + s] || o[i] || r[i])
      : e[n] - e['offset' + s];
  },
  u = (e, t) => {
    let s = 'scroll' + ('x' === t ? 'Left' : 'Top');
    return (
      e === l && (null != e.pageXOffset ? (s = 'page' + t.toUpperCase() + 'Offset') : (e = null != o[s] ? o : r)),
      () => e[s]
    );
  },
  g = (e, t) => {
    if (!(e = s(e)[0]) || !e.getBoundingClientRect)
      return console.warn("scrollTo target doesn't exist. Using 0") || { x: 0, y: 0 };
    let n = e.getBoundingClientRect(),
      i = !t || t === l || t === r,
      p = i
        ? {
            top: o.clientTop - (l.pageYOffset || o.scrollTop || r.scrollTop || 0),
            left: o.clientLeft - (l.pageXOffset || o.scrollLeft || r.scrollLeft || 0),
          }
        : t.getBoundingClientRect(),
      a = { x: n.left - p.left, y: n.top - p.top };
    return !i && t && ((a.x += u(t, 'x')()), (a.y += u(t, 'y')())), a;
  },
  x = (e, t, l, o, r) =>
    isNaN(e) || 'object' == typeof e
      ? c(e) && '=' === e.charAt(1)
        ? parseFloat(e.substr(2)) * ('-' === e.charAt(0) ? -1 : 1) + o - r
        : 'max' === e
        ? f(t, l) - r
        : Math.min(f(t, l), g(e, t)[l] - r)
      : parseFloat(e) - r,
  d = () => {
    (e = a()),
      p() &&
        e &&
        'undefined' != typeof document &&
        document.body &&
        ((l = window),
        (r = document.body),
        (o = document.documentElement),
        (s = e.utils.toArray),
        e.config({ autoKillThreshold: 7 }),
        (n = e.config()),
        (t = 1));
  };
const T = {
  version: '3.12.2',
  name: 'scrollTo',
  rawVars: 1,
  register(t) {
    (e = t), d();
  },
  init(o, r, s, n, p) {
    t || d();
    let a = this,
      f = e.getProperty(o, 'scrollSnapType');
    (a.isWin = o === l),
      (a.target = o),
      (a.tween = s),
      (r = ((e, t, l, o) => {
        if ((y(e) && (e = e(t, l, o)), 'object' != typeof e))
          return c(e) && 'max' !== e && '=' !== e.charAt(1) ? { x: e, y: e } : { y: e };
        if (e.nodeType) return { y: e, x: e };
        {
          let r,
            s = {};
          for (r in e) s[r] = 'onAutoKill' !== r && y(e[r]) ? e[r](t, l, o) : e[r];
          return s;
        }
      })(r, n, o, p)),
      (a.vars = r),
      (a.autoKill = !!r.autoKill),
      (a.getX = u(o, 'x')),
      (a.getY = u(o, 'y')),
      (a.x = a.xPrev = a.getX()),
      (a.y = a.yPrev = a.getY()),
      i || (i = e.core.globals().ScrollTrigger),
      'smooth' === e.getProperty(o, 'scrollBehavior') && e.set(o, { scrollBehavior: 'auto' }),
      f && 'none' !== f && ((a.snap = 1), (a.snapInline = o.style.scrollSnapType), (o.style.scrollSnapType = 'none')),
      null != r.x
        ? (a.add(a, 'x', a.x, x(r.x, o, 'x', a.x, r.offsetX || 0), n, p), a._props.push('scrollTo_x'))
        : (a.skipX = 1),
      null != r.y
        ? (a.add(a, 'y', a.y, x(r.y, o, 'y', a.y, r.offsetY || 0), n, p), a._props.push('scrollTo_y'))
        : (a.skipY = 1);
  },
  render(e, t) {
    let o,
      r,
      s,
      p,
      a,
      c = t._pt,
      { target: y, tween: u, autoKill: g, xPrev: x, yPrev: d, isWin: T, snap: h, snapInline: k } = t;
    for (; c; ) c.r(e, c.d), (c = c._next);
    (o = T || !t.skipX ? t.getX() : x),
      (r = T || !t.skipY ? t.getY() : d),
      (s = r - d),
      (p = o - x),
      (a = n.autoKillThreshold),
      t.x < 0 && (t.x = 0),
      t.y < 0 && (t.y = 0),
      g &&
        (!t.skipX && (p > a || p < -a) && o < f(y, 'x') && (t.skipX = 1),
        !t.skipY && (s > a || s < -a) && r < f(y, 'y') && (t.skipY = 1),
        t.skipX &&
          t.skipY &&
          (u.kill(), t.vars.onAutoKill && t.vars.onAutoKill.apply(u, t.vars.onAutoKillParams || []))),
      T
        ? l.scrollTo(t.skipX ? o : t.x, t.skipY ? r : t.y)
        : (t.skipY || (y.scrollTop = t.y), t.skipX || (y.scrollLeft = t.x)),
      !h ||
        (1 !== e && 0 !== e) ||
        ((r = y.scrollTop),
        (o = y.scrollLeft),
        k ? (y.style.scrollSnapType = k) : y.style.removeProperty('scroll-snap-type'),
        (y.scrollTop = r + 1),
        (y.scrollLeft = o + 1),
        (y.scrollTop = r),
        (y.scrollLeft = o)),
      (t.xPrev = t.x),
      (t.yPrev = t.y),
      i && i.update();
  },
  kill(e) {
    let t = 'scrollTo' === e;
    (t || 'scrollTo_x' === e) && (this.skipX = 1), (t || 'scrollTo_y' === e) && (this.skipY = 1);
  },
};
(T.max = f), (T.getOffset = g), (T.buildGetter = u), a() && e.registerPlugin(T);
export default T;
export { T as ScrollToPlugin };
