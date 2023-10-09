/*!
 * PixiPlugin 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

let t,
  r,
  e,
  i,
  o,
  l,
  s,
  n,
  a,
  u,
  h = () => 'undefined' != typeof window,
  c = () => t || (h() && (t = window.gsap) && t.registerPlugin && t),
  p = (t) => 'function' == typeof t,
  g = (t) => console.warn(t),
  d = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  f = 0.212671,
  b = 0.71516,
  x = 0.072169,
  m = (t) => (p(o[t]) ? o[t] : o.filters[t]),
  z = (t, r) => {
    let e,
      i,
      o = [],
      l = 0,
      s = 0;
    for (e = 0; e < 4; e++) {
      for (i = 0; i < 5; i++)
        (s = 4 === i ? t[l + 4] : 0),
          (o[l + i] = t[l] * r[i] + t[l + 1] * r[i + 5] + t[l + 2] * r[i + 10] + t[l + 3] * r[i + 15] + s);
      l += 5;
    }
    return o;
  },
  M = (t, r) => {
    let e = 1 - r,
      i = e * f,
      o = e * b,
      l = e * x;
    return z([i + r, o, l, 0, 0, i, o + r, l, 0, 0, i, o, l + r, 0, 0, 0, 0, 0, 1, 0], t);
  },
  w = (t, r, i) => {
    let o = e(r),
      l = o[0] / 255,
      s = o[1] / 255,
      n = o[2] / 255,
      a = 1 - i;
    return z(
      [
        a + i * l * f,
        i * l * b,
        i * l * x,
        0,
        0,
        i * s * f,
        a + i * s * b,
        i * s * x,
        0,
        0,
        i * n * f,
        i * n * b,
        a + i * n * x,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
      ],
      t
    );
  },
  A = (t, r) => {
    r *= Math.PI / 180;
    let e = Math.cos(r),
      i = Math.sin(r);
    return z(
      [
        f + e * (1 - f) + i * -f,
        b + e * -b + i * -b,
        x + e * -x + i * (1 - x),
        0,
        0,
        f + e * -f + 0.143 * i,
        b + 0.28484 * e + 0.14 * i,
        x + e * -x + -0.283 * i,
        0,
        0,
        f + e * -f + -0.787329 * i,
        b + e * -b + i * b,
        x + e * (1 - x) + i * x,
        0,
        0,
        0,
        0,
        0,
        1,
        0,
        0,
        0,
        0,
        0,
        1,
      ],
      t
    );
  },
  F = (t, r) => z([r, 0, 0, 0, 0.5 * (1 - r), 0, r, 0, 0, 0.5 * (1 - r), 0, 0, r, 0, 0.5 * (1 - r), 0, 0, 0, 1, 0], t),
  P = (t, r) => {
    let e,
      i = m(r),
      o = t.filters || [],
      l = o.length;
    for (i || g(r + ' not found. PixiPlugin.registerPIXI(PIXI)'); --l > -1; ) if (o[l] instanceof i) return o[l];
    return (e = new i()), 'BlurFilter' === r && (e.blur = 0), o.push(e), (t.filters = o), e;
  },
  _ = (t, r, e, i) => {
    r.add(e, t, e[t], i[t]), r._props.push(t);
  },
  y = (t, r) => {
    let e = new (m('ColorMatrixFilter'))();
    return (e.matrix = r), e.brightness(t, !0), e.matrix;
  },
  C = { contrast: 1, saturation: 1, colorizeAmount: 0, colorize: 'rgb(255,255,255)', hue: 0, brightness: 1 },
  I = (t, r, e) => {
    let i,
      o,
      l,
      s = P(t, 'ColorMatrixFilter'),
      n = (t._gsColorMatrixFilter =
        t._gsColorMatrixFilter ||
        ((t) => {
          let r,
            e = {};
          for (r in t) e[r] = t[r];
          return e;
        })(C)),
      a = r.combineCMF && !('colorMatrixFilter' in r && !r.colorMatrixFilter);
    (l = s.matrix),
      r.resolution && (s.resolution = r.resolution),
      r.matrix && r.matrix.length === l.length
        ? ((o = r.matrix),
          1 !== n.contrast && _('contrast', e, n, C),
          n.hue && _('hue', e, n, C),
          1 !== n.brightness && _('brightness', e, n, C),
          n.colorizeAmount && (_('colorize', e, n, C), _('colorizeAmount', e, n, C)),
          1 !== n.saturation && _('saturation', e, n, C))
        : ((o = d.slice()),
          null != r.contrast
            ? ((o = F(o, +r.contrast)), _('contrast', e, n, r))
            : 1 !== n.contrast && (a ? (o = F(o, n.contrast)) : _('contrast', e, n, C)),
          null != r.hue
            ? ((o = A(o, +r.hue)), _('hue', e, n, r))
            : n.hue && (a ? (o = A(o, n.hue)) : _('hue', e, n, C)),
          null != r.brightness
            ? ((o = y(+r.brightness, o)), _('brightness', e, n, r))
            : 1 !== n.brightness && (a ? (o = y(n.brightness, o)) : _('brightness', e, n, C)),
          null != r.colorize
            ? ((r.colorizeAmount = 'colorizeAmount' in r ? +r.colorizeAmount : 1),
              (o = w(o, r.colorize, r.colorizeAmount)),
              _('colorize', e, n, r),
              _('colorizeAmount', e, n, r))
            : n.colorizeAmount &&
              (a ? (o = w(o, n.colorize, n.colorizeAmount)) : (_('colorize', e, n, C), _('colorizeAmount', e, n, C))),
          null != r.saturation
            ? ((o = M(o, +r.saturation)), _('saturation', e, n, r))
            : 1 !== n.saturation && (a ? (o = M(o, n.saturation)) : _('saturation', e, n, C))),
      (i = o.length);
    for (; --i > -1; ) o[i] !== l[i] && e.add(l, i, l[i], o[i], 'colorMatrixFilter');
    e._props.push('colorMatrixFilter');
  },
  X = (t, { t: r, p: e, color: i, set: o }) => {
    o(r, e, (i[0] << 16) | (i[1] << 8) | i[2]);
  },
  v = (t, { g: r }) => {
    r && (r.dirty++, r.clearDirty++);
  },
  S = (t, r) => {
    r.t.visible = !!r.t.alpha;
  },
  O = (t, r, i, o) => {
    let n = t[r],
      a = e(p(n) ? t[r.indexOf('set') || !p(t['get' + r.substr(3)]) ? r : 'get' + r.substr(3)]() : n),
      u = e(i);
    (o._pt = new l(o._pt, t, r, 0, 0, X, { t: t, p: r, color: a, set: s(t, r) })),
      o.add(a, 0, a[0], u[0]),
      o.add(a, 1, a[1], u[1]),
      o.add(a, 2, a[2], u[2]);
  },
  D = { tint: 1, lineColor: 1, fillColor: 1 },
  Y = 'position,scale,skew,pivot,anchor,tilePosition,tileScale'.split(','),
  k = { x: 'position', y: 'position', tileX: 'tilePosition', tileY: 'tilePosition' },
  B = {
    colorMatrixFilter: 1,
    saturation: 1,
    contrast: 1,
    hue: 1,
    colorize: 1,
    colorizeAmount: 1,
    brightness: 1,
    combineCMF: 1,
  },
  E = Math.PI / 180,
  N = (t) => 'string' == typeof t,
  R = (t) => (N(t) && '=' === t.charAt(1) ? t.substr(0, 2) + parseFloat(t.substr(2)) * E : t * E),
  V = (t, r) => r.set(r.t, r.p, 1 === t ? r.e : Math.round(1e5 * (r.s + r.c * t)) / 1e5, r),
  j = (t, r, e, i, o, s) => {
    let n,
      a,
      u = 360 * (s ? E : 1),
      h = N(o),
      c = h && '=' === o.charAt(1) ? +(o.charAt(0) + '1') : 0,
      p = parseFloat(c ? o.substr(2) : o) * (s ? E : 1),
      g = c ? p * c : p - i,
      d = i + g;
    return (
      h &&
        ((n = o.split('_')[1]),
        'short' === n && ((g %= u), g !== g % (u / 2) && (g += g < 0 ? u : -u)),
        'cw' === n && g < 0
          ? (g = ((g + 1e10 * u) % u) - ~~(g / u) * u)
          : 'ccw' === n && g > 0 && (g = ((g - 1e10 * u) % u) - ~~(g / u) * u)),
      (t._pt = a = new l(t._pt, r, e, i, g, V)),
      (a.e = d),
      a
    );
  },
  G = () => {
    h() &&
      ((r = window),
      (t = c()),
      (o = i = o || r.PIXI),
      (n = o && o.VERSION && '4' === o.VERSION.charAt(0)),
      (e = (r) => t.utils.splitColor('0x' === (r + '').substr(0, 2) ? '#' + r.substr(2) : r)));
  };
for (a = 0; a < Y.length; a++) (u = Y[a]), (k[u + 'X'] = u), (k[u + 'Y'] = u);
const L = {
  version: '3.12.2',
  name: 'pixi',
  register(r, e, i) {
    (t = r), (l = i), (s = e.getSetter), G();
  },
  registerPIXI(t) {
    o = t;
  },
  init(t, r, e, i, s) {
    if ((o || G(), !(o && t instanceof o.DisplayObject))) return g(t), !1;
    let a, u, h, c, p, d, f, b, x;
    for (d in r) {
      if (((a = k[d]), (h = r[d]), a))
        (u = ~d
          .charAt(d.length - 1)
          .toLowerCase()
          .indexOf('x')
          ? 'x'
          : 'y'),
          this.add(t[a], u, t[a][u], 'skew' === a ? R(h) : h, 0, 0, 0, 0, 0, 1);
      else if ('scale' === d || 'anchor' === d || 'pivot' === d || 'tileScale' === d)
        this.add(t[d], 'x', t[d].x, h), this.add(t[d], 'y', t[d].y, h);
      else if ('rotation' === d || 'angle' === d) j(this, t, d, t[d], h, 'rotation' === d);
      else if (B[d]) c || (I(t, r.colorMatrixFilter || r, this), (c = !0));
      else if ('blur' === d || 'blurX' === d || 'blurY' === d || 'blurPadding' === d) {
        if (((p = P(t, 'BlurFilter')), this.add(p, d, p[d], h), 0 !== r.blurPadding))
          for (f = r.blurPadding || 2 * Math.max(p[d], h), b = t.filters.length; --b > -1; )
            t.filters[b].padding = Math.max(t.filters[b].padding, f);
      } else if (D[d])
        if (('lineColor' === d || 'fillColor' === d) && t instanceof o.Graphics)
          for (
            x = (t.geometry || t).graphicsData,
              this._pt = new l(this._pt, t, d, 0, 0, v, { g: t.geometry || t }),
              b = x.length;
            --b > -1;

          )
            O(n ? x[b] : x[b][d.substr(0, 4) + 'Style'], n ? d : 'color', h, this);
        else O(t, d, h, this);
      else
        'autoAlpha' === d
          ? ((this._pt = new l(this._pt, t, 'visible', 0, 0, S)),
            this.add(t, 'alpha', t.alpha, h),
            this._props.push('alpha', 'visible'))
          : 'resolution' !== d && this.add(t, d, 'get', h);
      this._props.push(d);
    }
  },
};
c() && t.registerPlugin(L);
export default L;
export { L as PixiPlugin };
