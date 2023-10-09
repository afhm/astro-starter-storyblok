/*!
 * Flip 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

let e,
  t,
  i,
  s,
  a,
  n,
  l,
  r,
  o,
  h = 'transform',
  p = h + 'Origin',
  d = (a) => {
    let n = a.ownerDocument || a;
    !(h in a.style) && 'msTransform' in a.style && ((h = 'msTransform'), (p = h + 'Origin'));
    for (; n.parentNode && (n = n.parentNode); );
    if (((t = window), (l = new S()), n)) {
      (e = n),
        (i = n.documentElement),
        (s = n.body),
        (r = e.createElementNS('http://www.w3.org/2000/svg', 'g')),
        (r.style.transform = 'none');
      let t = n.createElement('div'),
        a = n.createElement('div');
      s.appendChild(t),
        t.appendChild(a),
        (t.style.position = 'static'),
        (t.style[h] = 'translate3d(0,0,1px)'),
        (o = a.offsetParent !== t),
        s.removeChild(t);
    }
    return n;
  },
  c = [],
  m = [],
  f = () => t.pageYOffset || e.scrollTop || i.scrollTop || s.scrollTop || 0,
  u = () => t.pageXOffset || e.scrollLeft || i.scrollLeft || s.scrollLeft || 0,
  g = (e) => e.ownerSVGElement || ('svg' === (e.tagName + '').toLowerCase() ? e : null),
  y = (e) => 'fixed' === t.getComputedStyle(e).position || ((e = e.parentNode) && 1 === e.nodeType ? y(e) : void 0),
  b = (t, i) => {
    if (t.parentNode && (e || d(t))) {
      let s = g(t),
        l = s ? s.getAttribute('xmlns') || 'http://www.w3.org/2000/svg' : 'http://www.w3.org/1999/xhtml',
        r = s ? (i ? 'rect' : 'g') : 'div',
        o = 2 !== i ? 0 : 100,
        h = 3 === i ? 100 : 0,
        p = 'position:absolute;display:block;pointer-events:none;margin:0;padding:0;',
        d = e.createElementNS ? e.createElementNS(l.replace(/^https/, 'http'), r) : e.createElement(r);
      return (
        i &&
          (s
            ? (n || (n = b(t)),
              d.setAttribute('width', 0.01),
              d.setAttribute('height', 0.01),
              d.setAttribute('transform', 'translate(' + o + ',' + h + ')'),
              n.appendChild(d))
            : (a || ((a = b(t)), (a.style.cssText = p)),
              (d.style.cssText = p + 'width:0.1px;height:0.1px;top:' + h + 'px;left:' + o + 'px'),
              a.appendChild(d))),
        d
      );
    }
    throw 'Need document and parent.';
  },
  x = (e) => {
    let t,
      i = e.getCTM();
    return (
      i ||
        ((t = e.style[h]),
        (e.style[h] = 'none'),
        e.appendChild(r),
        (i = r.getCTM()),
        e.removeChild(r),
        t ? (e.style[h] = t) : e.style.removeProperty(h.replace(/([A-Z])/g, '-$1').toLowerCase())),
      i || l.clone()
    );
  },
  w = (e, i) => {
    let s,
      r,
      d,
      f,
      u,
      y,
      w = g(e),
      v = e === w,
      C = w ? c : m,
      k = e.parentNode;
    if (e === t) return e;
    if ((C.length || C.push(b(e, 1), b(e, 2), b(e, 3)), (s = w ? n : a), w))
      v
        ? ((d = x(e)), (f = -d.e / d.a), (u = -d.f / d.d), (r = l))
        : e.getBBox
        ? ((d = e.getBBox()),
          (r = e.transform ? e.transform.baseVal : {}),
          (r = r.numberOfItems
            ? r.numberOfItems > 1
              ? ((e) => {
                  let t = new S(),
                    i = 0;
                  for (; i < e.numberOfItems; i++) t.multiply(e.getItem(i).matrix);
                  return t;
                })(r)
              : r.getItem(0).matrix
            : l),
          (f = r.a * d.x + r.c * d.y),
          (u = r.b * d.x + r.d * d.y))
        : ((r = new S()), (f = u = 0)),
        i && 'g' === e.tagName.toLowerCase() && (f = u = 0),
        (v ? w : k).appendChild(s),
        s.setAttribute(
          'transform',
          'matrix(' + r.a + ',' + r.b + ',' + r.c + ',' + r.d + ',' + (r.e + f) + ',' + (r.f + u) + ')'
        );
    else {
      if (((f = u = 0), o))
        for (r = e.offsetParent, d = e; d && (d = d.parentNode) && d !== r && d.parentNode; )
          (t.getComputedStyle(d)[h] + '').length > 4 && ((f = d.offsetLeft), (u = d.offsetTop), (d = 0));
      if (((y = t.getComputedStyle(e)), 'absolute' !== y.position && 'fixed' !== y.position))
        for (r = e.offsetParent; k && k !== r; ) (f += k.scrollLeft || 0), (u += k.scrollTop || 0), (k = k.parentNode);
      (d = s.style),
        (d.top = e.offsetTop - u + 'px'),
        (d.left = e.offsetLeft - f + 'px'),
        (d[h] = y[h]),
        (d[p] = y[p]),
        (d.position = 'fixed' === y.position ? 'fixed' : 'absolute'),
        e.parentNode.appendChild(s);
    }
    return s;
  },
  v = (e, t, i, s, a, n, l) => ((e.a = t), (e.b = i), (e.c = s), (e.d = a), (e.e = n), (e.f = l), e);
class S {
  constructor(e = 1, t = 0, i = 0, s = 1, a = 0, n = 0) {
    v(this, e, t, i, s, a, n);
  }
  inverse() {
    let { a: e, b: t, c: i, d: s, e: a, f: n } = this,
      l = e * s - t * i || 1e-10;
    return v(this, s / l, -t / l, -i / l, e / l, (i * n - s * a) / l, -(e * n - t * a) / l);
  }
  multiply(e) {
    let { a: t, b: i, c: s, d: a, e: n, f: l } = this,
      r = e.a,
      o = e.c,
      h = e.b,
      p = e.d,
      d = e.e,
      c = e.f;
    return v(this, r * t + h * s, r * i + h * a, o * t + p * s, o * i + p * a, n + d * t + c * s, l + d * i + c * a);
  }
  clone() {
    return new S(this.a, this.b, this.c, this.d, this.e, this.f);
  }
  equals(e) {
    let { a: t, b: i, c: s, d: a, e: n, f: l } = this;
    return t === e.a && i === e.b && s === e.c && a === e.d && n === e.e && l === e.f;
  }
  apply(e, t = {}) {
    let { x: i, y: s } = e,
      { a: a, b: n, c: l, d: r, e: o, f: h } = this;
    return (t.x = i * a + s * l + o || 0), (t.y = i * n + s * r + h || 0), t;
  }
}
function C(t, i, a, n) {
  if (!t || !t.parentNode || (e || d(t)).documentElement === t) return new S();
  let l = ((e) => {
      let t, i;
      for (; e && e !== s; )
        (i = e._gsap),
          i && i.uncache && i.get(e, 'x'),
          i &&
            !i.scaleX &&
            !i.scaleY &&
            i.renderTransform &&
            ((i.scaleX = i.scaleY = 1e-4), i.renderTransform(1, i), t ? t.push(i) : (t = [i])),
          (e = e.parentNode);
      return t;
    })(t),
    r = g(t) ? c : m,
    o = w(t, a),
    h = r[0].getBoundingClientRect(),
    p = r[1].getBoundingClientRect(),
    b = r[2].getBoundingClientRect(),
    x = o.parentNode,
    v = !n && y(t),
    C = new S(
      (p.left - h.left) / 100,
      (p.top - h.top) / 100,
      (b.left - h.left) / 100,
      (b.top - h.top) / 100,
      h.left + (v ? 0 : u()),
      h.top + (v ? 0 : f())
    );
  if ((x.removeChild(o), l)) for (h = l.length; h--; ) (p = l[h]), (p.scaleX = p.scaleY = 0), p.renderTransform(1, p);
  return i ? C.inverse() : C;
}
let k,
  V,
  E,
  L,
  _,
  B,
  I,
  P,
  N = 1,
  T = (e, t) => e.actions.forEach((e) => e.vars[t] && e.vars[t](e)),
  X = {},
  O = 180 / Math.PI,
  M = Math.PI / 180,
  Y = {},
  A = {},
  R = {},
  z = (e) => ('string' == typeof e ? e.split(' ').join('').split(',') : e),
  D = z('onStart,onUpdate,onComplete,onReverseComplete,onInterrupt'),
  F = z(
    'transform,transformOrigin,width,height,position,top,left,opacity,zIndex,maxWidth,maxHeight,minWidth,minHeight'
  ),
  H = (e) => k(e)[0] || console.warn('Element not found:', e),
  W = (e) => Math.round(1e4 * e) / 1e4 || 0,
  q = (e, t, i) => e.forEach((e) => e.classList[i](t)),
  j = {
    zIndex: 1,
    kill: 1,
    simple: 1,
    spin: 1,
    clearProps: 1,
    targets: 1,
    toggleClass: 1,
    onComplete: 1,
    onUpdate: 1,
    onInterrupt: 1,
    onStart: 1,
    delay: 1,
    repeat: 1,
    repeatDelay: 1,
    yoyo: 1,
    scale: 1,
    fade: 1,
    absolute: 1,
    props: 1,
    onEnter: 1,
    onLeave: 1,
    custom: 1,
    paused: 1,
    nested: 1,
    prune: 1,
    absoluteOnLeave: 1,
  },
  J = { zIndex: 1, simple: 1, clearProps: 1, scale: 1, absolute: 1, fitChild: 1, getVars: 1, props: 1 },
  U = (e) => e.replace(/([A-Z])/g, '-$1').toLowerCase(),
  Z = (e, t) => {
    let i,
      s = {};
    for (i in e) t[i] || (s[i] = e[i]);
    return s;
  },
  $ = {},
  G = (e) => {
    let t = ($[e] = z(e));
    return (R[e] = t.concat(F)), t;
  },
  K = (e, t, i = 0) => {
    let s = e.parentNode,
      a = 1e3 * 10 ** i * (t ? -1 : 1),
      n = t ? 900 * -a : 0;
    for (; e; ) (n += a), (e = e.previousSibling);
    return s ? n + K(s, t, i + 1) : n;
  },
  Q = (e, t, i) => (e.forEach((e) => (e.d = K(i ? e.element : e.t, t))), e.sort((e, t) => e.d - t.d), e),
  ee = (e, t) => {
    let i,
      s,
      a = e.element.style,
      n = (e.css = e.css || []),
      l = t.length;
    for (; l--; ) (i = t[l]), (s = a[i] || a.getPropertyValue(i)), n.push(s ? i : A[i] || (A[i] = U(i)), s);
    return a;
  },
  te = (e) => {
    let t = e.css,
      i = e.element.style,
      s = 0;
    for (e.cache.uncache = 1; s < t.length; s += 2) t[s + 1] ? (i[t[s]] = t[s + 1]) : i.removeProperty(t[s]);
    !t[t.indexOf('transform') + 1] &&
      i.translate &&
      (i.removeProperty('translate'), i.removeProperty('scale'), i.removeProperty('rotate'));
  },
  ie = (e, t) => {
    e.forEach((e) => (e.a.cache.uncache = 1)), t || e.finalStates.forEach(te);
  },
  se = 'paddingTop,paddingRight,paddingBottom,paddingLeft,gridArea,transition'.split(','),
  ae = (e, t, i) => {
    let s,
      a,
      n,
      { element: l, width: r, height: o, uncache: h, getProp: p } = e,
      d = l.style,
      c = 4;
    if (('object' != typeof t && (t = e), E && 1 !== i))
      return E._abs.push({ t: l, b: e, a: e, sd: 0 }), E._final.push(() => (e.cache.uncache = 1) && te(e)), l;
    for (
      a = 'none' === p('display'),
        (e.isVisible && !a) ||
          (a && (ee(e, ['display']).display = t.display),
          (e.matrix = t.matrix),
          (e.width = r = e.width || t.width),
          (e.height = o = e.height || t.height)),
        ee(e, se),
        n = window.getComputedStyle(l);
      c--;

    )
      d[se[c]] = n[se[c]];
    if (
      ((d.gridArea = '1 / 1 / 1 / 1'),
      (d.transition = 'none'),
      (d.position = 'absolute'),
      (d.width = r + 'px'),
      (d.height = o + 'px'),
      d.top || (d.top = '0px'),
      d.left || (d.left = '0px'),
      h)
    )
      s = new Se(l);
    else if (((s = Z(e, Y)), (s.position = 'absolute'), e.simple)) {
      let e = l.getBoundingClientRect();
      s.matrix = new S(1, 0, 0, 1, e.left + u(), e.top + f());
    } else s.matrix = C(l, !1, !1, !0);
    return (s = de(s, e, !0)), (e.x = B(s.x, 0.01)), (e.y = B(s.y, 0.01)), l;
  },
  ne = (e, t) => (
    !0 !== t &&
      ((t = k(t)),
      (e = e.filter((e) => {
        if (-1 !== t.indexOf((e.sd < 0 ? e.b : e.a).element)) return !0;
        e.t._gsap.renderTransform(1),
          e.b.isVisible && ((e.t.style.width = e.b.width + 'px'), (e.t.style.height = e.b.height + 'px'));
      }))),
    e
  ),
  le = (e) => Q(e, !0).forEach((e) => (e.a.isVisible || e.b.isVisible) && ae(e.sd < 0 ? e.b : e.a, e.b, 1)),
  re = (e, t, i, s) =>
    e instanceof Se
      ? e
      : e instanceof ve
      ? ((e, t) => (t && e.idLookup[re(t).id]) || e.elementStates[0])(e, s)
      : new Se('string' == typeof e ? H(e) || console.warn(e + ' not found') : e, t, i),
  oe = (e, t) => {
    let i,
      s = e.style || e;
    for (i in t) s[i] = t[i];
  },
  he = (e) => e.map((e) => e.element),
  pe = (e, t, i) => e && t.length && i.add(e(he(t), i, new ve(t, 0, !0)), 0),
  de = (e, t, i, s, a, n) => {
    let l,
      r,
      o,
      h,
      p,
      d,
      c,
      { element: m, cache: f, parent: u, x: g, y: y } = e,
      { width: b, height: x, scaleX: w, scaleY: v, rotation: S, bounds: E } = t,
      L = n && I && I(m, 'transform'),
      _ = e,
      { e: P, f: N } = t.matrix,
      T =
        e.bounds.width !== E.width ||
        e.bounds.height !== E.height ||
        e.scaleX !== w ||
        e.scaleY !== v ||
        e.rotation !== S,
      X = !T && e.simple && t.simple && !a;
    return (
      X || !u
        ? ((w = v = 1), (S = l = 0))
        : ((p = ((e) => {
            let t = e._gsap || V.core.getCache(e);
            return t.gmCache === V.ticker.frame
              ? t.gMatrix
              : ((t.gmCache = V.ticker.frame), (t.gMatrix = C(e, !0, !1, !0)));
          })(u)),
          (d = p.clone().multiply(t.ctm ? t.matrix.clone().multiply(t.ctm) : t.matrix)),
          (S = W(Math.atan2(d.b, d.a) * O)),
          (l = W(Math.atan2(d.c, d.d) * O + S) % 360),
          (w = Math.sqrt(d.a ** 2 + d.b ** 2)),
          (v = Math.sqrt(d.c ** 2 + d.d ** 2) * Math.cos(l * M)),
          a &&
            ((a = k(a)[0]),
            (h = V.getProperty(a)),
            (c = a.getBBox && 'function' == typeof a.getBBox && a.getBBox()),
            (_ = {
              scaleX: h('scaleX'),
              scaleY: h('scaleY'),
              width: c ? c.width : Math.ceil(parseFloat(h('width', 'px'))),
              height: c ? c.height : parseFloat(h('height', 'px')),
            })),
          (f.rotation = S + 'deg'),
          (f.skewX = l + 'deg')),
      i
        ? ((w *= b !== _.width && _.width ? b / _.width : 1),
          (v *= x !== _.height && _.height ? x / _.height : 1),
          (f.scaleX = w),
          (f.scaleY = v))
        : ((b = B((b * w) / _.scaleX, 0)),
          (x = B((x * v) / _.scaleY, 0)),
          (m.style.width = b + 'px'),
          (m.style.height = x + 'px')),
      s && oe(m, t.props),
      X || !u
        ? ((g += P - e.matrix.e), (y += N - e.matrix.f))
        : T || u !== t.parent
        ? (f.renderTransform(1, f),
          (d = C(a || m, !1, !1, !0)),
          (r = p.apply({ x: d.e, y: d.f })),
          (o = p.apply({ x: P, y: N })),
          (g += o.x - r.x),
          (y += o.y - r.y))
        : ((p.e = p.f = 0), (o = p.apply({ x: P - e.matrix.e, y: N - e.matrix.f })), (g += o.x), (y += o.y)),
      (g = B(g, 0.02)),
      (y = B(y, 0.02)),
      !n || n instanceof Se ? ((f.x = g + 'px'), (f.y = y + 'px'), f.renderTransform(1, f)) : L && L.revert(),
      n &&
        ((n.x = g),
        (n.y = y),
        (n.rotation = S),
        (n.skewX = l),
        i ? ((n.scaleX = w), (n.scaleY = v)) : ((n.width = b), (n.height = x))),
      n || f
    );
  },
  ce = (e, t) => (e instanceof ve ? e : new ve(e, t)),
  me = (e, t, i) => {
    let s = e.idLookup[i],
      a = e.alt[i];
    return !a.isVisible || ((t.getElementState(a.element) || a).isVisible && s.isVisible) ? s : a;
  },
  fe = [],
  ue = 'width,height,overflowX,overflowY'.split(','),
  ge = (e) => {
    if (e !== P) {
      let t = _.style,
        i = _.clientWidth === window.outerWidth,
        s = _.clientHeight === window.outerHeight,
        a = 4;
      if (e && (i || s)) {
        for (; a--; ) fe[a] = t[ue[a]];
        i && ((t.width = _.clientWidth + 'px'), (t.overflowY = 'hidden')),
          s && ((t.height = _.clientHeight + 'px'), (t.overflowX = 'hidden')),
          (P = e);
      } else if (P) {
        for (; a--; ) fe[a] ? (t[ue[a]] = fe[a]) : t.removeProperty(U(ue[a]));
        P = e;
      }
    }
  },
  ye = (e, t, i, s) => {
    (e instanceof ve && t instanceof ve) || console.warn('Not a valid state object.'), (i = i || {});
    let a,
      n,
      l,
      r,
      o,
      h,
      p,
      d,
      c,
      m,
      f,
      u,
      g,
      y,
      {
        clearProps: b,
        onEnter: x,
        onLeave: w,
        absolute: v,
        absoluteOnLeave: S,
        custom: k,
        delay: L,
        paused: _,
        repeat: B,
        repeatDelay: I,
        yoyo: P,
        toggleClass: N,
        nested: T,
        zIndex: X,
        scale: O,
        fade: M,
        stagger: Y,
        spin: A,
        prune: z,
      } = i,
      H = ('props' in i ? i : e).props,
      W = Z(i, j),
      U = V.timeline({ delay: L, paused: _, repeat: B, repeatDelay: I, yoyo: P, data: 'isFlip' }),
      K = W,
      te = [],
      se = [],
      ae = [],
      re = [],
      oe = !0 === A ? 1 : A || 0,
      he = 'function' == typeof A ? A : () => oe,
      ce = e.interrupted || t.interrupted,
      fe = U[1 !== s ? 'to' : 'from'];
    for (n in t.idLookup)
      (f = t.alt[n] ? me(t, e, n) : t.idLookup[n]),
        (o = f.element),
        (m = e.idLookup[n]),
        e.alt[n] && o === m.element && (e.alt[n].isVisible || !f.isVisible) && (m = e.alt[n]),
        m
          ? ((h = { t: o, b: m, a: f, sd: m.element === o ? 0 : f.isVisible ? 1 : -1 }),
            ae.push(h),
            h.sd &&
              (h.sd < 0 && ((h.b = f), (h.a = m)),
              ce && ee(h.b, H ? R[H] : F),
              M && ae.push((h.swap = { t: m.element, b: h.b, a: h.a, sd: -h.sd, swap: h }))),
            (o._flip = m.element._flip = E ? E.timeline : U))
          : f.isVisible &&
            (ae.push({ t: o, b: Z(f, { isVisible: 1 }), a: f, sd: 0, entering: 1 }), (o._flip = E ? E.timeline : U));
    H && ($[H] || G(H)).forEach((e) => (W[e] = (t) => ae[t].a.props[e])),
      (ae.finalStates = c = []),
      (u = () => {
        for (Q(ae), ge(!0), r = 0; r < ae.length; r++)
          (h = ae[r]),
            (g = h.a),
            (y = h.b),
            !z || g.isDifferent(y) || h.entering
              ? ((o = h.t),
                T && !(h.sd < 0) && r && (g.matrix = C(o, !1, !1, !0)),
                y.isVisible && g.isVisible
                  ? (h.sd < 0
                      ? ((p = new Se(o, H, e.simple)),
                        de(p, g, O, 0, 0, p),
                        (p.matrix = C(o, !1, !1, !0)),
                        (p.css = h.b.css),
                        (h.a = g = p),
                        M && (o.style.opacity = ce ? y.opacity : g.opacity),
                        Y && re.push(o))
                      : h.sd > 0 && M && (o.style.opacity = ce ? g.opacity - y.opacity : '0'),
                    de(g, y, O, H))
                  : y.isVisible !== g.isVisible &&
                    (y.isVisible
                      ? g.isVisible || ((y.css = g.css), se.push(y), ae.splice(r--, 1), v && T && de(g, y, O, H))
                      : (g.isVisible && te.push(g), ae.splice(r--, 1))),
                O ||
                  ((o.style.maxWidth = Math.max(g.width, y.width) + 'px'),
                  (o.style.maxHeight = Math.max(g.height, y.height) + 'px'),
                  (o.style.minWidth = Math.min(g.width, y.width) + 'px'),
                  (o.style.minHeight = Math.min(g.height, y.height) + 'px')),
                T && N && o.classList.add(N))
              : ae.splice(r--, 1),
            c.push(g);
        let t;
        if (
          (N && ((t = c.map((e) => e.element)), T && t.forEach((e) => e.classList.remove(N))),
          ge(!1),
          O
            ? ((W.scaleX = (e) => ae[e].a.scaleX), (W.scaleY = (e) => ae[e].a.scaleY))
            : ((W.width = (e) => ae[e].a.width + 'px'),
              (W.height = (e) => ae[e].a.height + 'px'),
              (W.autoRound = i.autoRound || !1)),
          (W.x = (e) => ae[e].a.x + 'px'),
          (W.y = (e) => ae[e].a.y + 'px'),
          (W.rotation = (e) => ae[e].a.rotation + (A ? 360 * he(e, d[e], d) : 0)),
          (W.skewX = (e) => ae[e].a.skewX),
          (d = ae.map((e) => e.t)),
          (X || 0 === X) &&
            ((W.modifiers = { zIndex: () => X }), (W.zIndex = X), (W.immediateRender = !1 !== i.immediateRender)),
          M && (W.opacity = (e) => (ae[e].sd < 0 ? 0 : ae[e].sd > 0 ? ae[e].a.opacity : '+=0')),
          re.length)
        ) {
          Y = V.utils.distribute(Y);
          let e = d.slice(re.length);
          W.stagger = (t, i) => Y(~re.indexOf(i) ? d.indexOf(ae[t].swap.t) : t, i, e);
        }
        if ((D.forEach((e) => i[e] && U.eventCallback(e, i[e], i[e + 'Params'])), k && d.length))
          for (n in ((K = Z(W, j)), 'scale' in k && ((k.scaleX = k.scaleY = k.scale), delete k.scale), k))
            (a = Z(k[n], J)),
              (a[n] = W[n]),
              !('duration' in a) && 'duration' in W && (a.duration = W.duration),
              (a.stagger = W.stagger),
              fe.call(U, d, a, 0),
              delete K[n];
        (d.length || se.length || te.length) &&
          (N && U.add(() => q(t, N, U._zTime < 0 ? 'remove' : 'add'), 0) && !_ && q(t, N, 'add'),
          d.length && fe.call(U, d, K, 0)),
          pe(x, te, U),
          pe(w, se, U);
        let s = E && E.timeline;
        s && (s.add(U, 0), E._final.push(() => ie(ae, !b))),
          (l = U.duration()),
          U.call(() => {
            let e = U.time() >= l;
            e && !s && ie(ae, !b), N && q(t, N, e ? 'remove' : 'add');
          });
      }),
      S && (v = ae.filter((e) => !e.sd && !e.a.isVisible && e.b.isVisible).map((e) => e.a.element)),
      E ? (v && E._abs.push(...ne(ae, v)), E._run.push(u)) : (v && le(ne(ae, v)), u());
    let ue = E ? E.timeline : U;
    return (ue.revert = () => xe(ue, 1, 1)), ue;
  },
  be = (e) => {
    e.vars.onInterrupt && e.vars.onInterrupt.apply(e, e.vars.onInterruptParams || []),
      e.getChildren(!0, !1, !0).forEach(be);
  },
  xe = (e, t, i) => {
    if (e && e.progress() < 1 && (!e.paused() || i)) return t && (be(e), t < 2 && e.progress(1), e.kill()), !0;
  },
  we = (e) => {
    let t,
      i = (e.idLookup = {}),
      s = (e.alt = {}),
      a = e.elementStates,
      n = a.length;
    for (; n--; ) (t = a[n]), i[t.id] ? (s[t.id] = t) : (i[t.id] = t);
  };
class ve {
  constructor(e, t, i) {
    if (((this.props = t && t.props), (this.simple = !(!t || !t.simple)), i))
      (this.targets = he(e)), (this.elementStates = e), we(this);
    else {
      this.targets = k(e);
      let i = t && (!1 === t.kill || (t.batch && !t.kill));
      E && !i && E._kill.push(this), this.update(i || !!E);
    }
  }
  update(e) {
    return (
      (this.elementStates = this.targets.map((e) => new Se(e, this.props, this.simple))),
      we(this),
      this.interrupt(e),
      this.recordInlineStyles(),
      this
    );
  }
  clear() {
    return (this.targets.length = this.elementStates.length = 0), we(this), this;
  }
  fit(e, t, i) {
    let s,
      a,
      n = Q(this.elementStates.slice(0), !1, !0),
      l = (e || this).idLookup,
      r = 0;
    for (; r < n.length; r++)
      (s = n[r]),
        i && (s.matrix = C(s.element, !1, !1, !0)),
        (a = l[s.id]),
        a && de(s, a, t, !0, 0, s),
        (s.matrix = C(s.element, !1, !1, !0));
    return this;
  }
  getProperty(e, t) {
    let i = this.getElementState(e) || Y;
    return (t in i ? i : i.props || Y)[t];
  }
  add(e) {
    let t,
      i,
      s,
      a = e.targets.length,
      n = this.idLookup,
      l = this.alt;
    for (; a--; )
      (i = e.elementStates[a]),
        (s = n[i.id]),
        s && (i.element === s.element || (l[i.id] && l[i.id].element === i.element))
          ? ((t = this.elementStates.indexOf(i.element === s.element ? s : l[i.id])),
            this.targets.splice(t, 1, e.targets[a]),
            this.elementStates.splice(t, 1, i))
          : (this.targets.push(e.targets[a]), this.elementStates.push(i));
    return e.interrupted && (this.interrupted = !0), e.simple || (this.simple = !1), we(this), this;
  }
  compare(e) {
    let t,
      i,
      s,
      a,
      n,
      l,
      r,
      o,
      h = e.idLookup,
      p = this.idLookup,
      d = [],
      c = [],
      m = [],
      f = [],
      u = [],
      g = e.alt,
      y = this.alt,
      b = (e, t, i) => (e.isVisible !== t.isVisible ? (e.isVisible ? m : f) : e.isVisible ? c : d).push(i) && u.push(i),
      x = (e, t, i) => u.indexOf(i) < 0 && b(e, t, i);
    for (s in h)
      (n = g[s]),
        (l = y[s]),
        (t = n ? me(e, this, s) : h[s]),
        (a = t.element),
        (i = p[s]),
        l
          ? ((o = i.isVisible || (!l.isVisible && a === i.element) ? i : l),
            (r = !n || t.isVisible || n.isVisible || o.element !== n.element ? t : n),
            r.isVisible && o.isVisible && r.element !== o.element
              ? ((r.isDifferent(o) ? c : d).push(r.element, o.element), u.push(r.element, o.element))
              : b(r, o, r.element),
            n && r.element === n.element && (n = h[s]),
            x(r.element !== i.element && n ? n : r, i, i.element),
            x(n && n.element === l.element ? n : r, l, l.element),
            n && x(n, l.element === n.element ? l : i, n.element))
          : (i ? (i.isDifferent(t) ? b(t, i, a) : d.push(a)) : m.push(a), n && x(n, i, n.element));
    for (s in p) h[s] || (f.push(p[s].element), y[s] && f.push(y[s].element));
    return { changed: c, unchanged: d, enter: m, leave: f };
  }
  recordInlineStyles() {
    let e = R[this.props] || F,
      t = this.elementStates.length;
    for (; t--; ) ee(this.elementStates[t], e);
  }
  interrupt(e) {
    let t = [];
    this.targets.forEach((i) => {
      let s = i._flip,
        a = xe(s, e ? 0 : 1);
      e && a && t.indexOf(s) < 0 && s.add(() => this.updateVisibility()), a && t.push(s);
    }),
      !e && t.length && this.updateVisibility(),
      this.interrupted || (this.interrupted = !!t.length);
  }
  updateVisibility() {
    this.elementStates.forEach((e) => {
      let t = e.element.getBoundingClientRect();
      (e.isVisible = !!(t.width || t.height || t.top || t.left)), (e.uncache = 1);
    });
  }
  getElementState(e) {
    return this.elementStates[this.targets.indexOf(H(e))];
  }
  makeAbsolute() {
    return Q(this.elementStates.slice(0), !0, !0).map(ae);
  }
}
class Se {
  constructor(e, t, i) {
    (this.element = e), this.update(t, i);
  }
  isDifferent(e) {
    let t = this.bounds,
      i = e.bounds;
    return (
      t.top !== i.top ||
      t.left !== i.left ||
      t.width !== i.width ||
      t.height !== i.height ||
      !this.matrix.equals(e.matrix) ||
      this.opacity !== e.opacity ||
      (this.props && e.props && JSON.stringify(this.props) !== JSON.stringify(e.props))
    );
  }
  update(e, t) {
    let i = this.element,
      s = V.getProperty(i),
      a = V.core.getCache(i),
      n = i.getBoundingClientRect(),
      l = i.getBBox && 'function' == typeof i.getBBox && 'svg' !== i.nodeName.toLowerCase() && i.getBBox(),
      r = t ? new S(1, 0, 0, 1, n.left + u(), n.top + f()) : C(i, !1, !1, !0);
    (this.getProp = s),
      (this.element = i),
      (this.id = ((e) => {
        let t = e.getAttribute('data-flip-id');
        return t || e.setAttribute('data-flip-id', (t = 'auto-' + N++)), t;
      })(i)),
      (this.matrix = r),
      (this.cache = a),
      (this.bounds = n),
      (this.isVisible = !!(n.width || n.height || n.left || n.top)),
      (this.display = s('display')),
      (this.position = s('position')),
      (this.parent = i.parentNode),
      (this.x = s('x')),
      (this.y = s('y')),
      (this.scaleX = a.scaleX),
      (this.scaleY = a.scaleY),
      (this.rotation = s('rotation')),
      (this.skewX = s('skewX')),
      (this.opacity = s('opacity')),
      (this.width = l ? l.width : B(s('width', 'px'), 0.04)),
      (this.height = l ? l.height : B(s('height', 'px'), 0.04)),
      e &&
        ((e, t) => {
          let i = V.getProperty(e.element, null, 'native'),
            s = (e.props = {}),
            a = t.length;
          for (; a--; ) s[t[a]] = (i(t[a]) + '').trim();
          s.zIndex && (s.zIndex = parseFloat(s.zIndex) || 0);
        })(this, $[e] || G(e)),
      (this.ctm = i.getCTM && 'svg' === i.nodeName.toLowerCase() && x(i).inverse()),
      (this.simple = t || (1 === W(r.a) && !W(r.b) && !W(r.c) && 1 === W(r.d))),
      (this.uncache = 0);
  }
}
class Ce {
  constructor(e, t) {
    (this.vars = e), (this.batch = t), (this.states = []), (this.timeline = t.timeline);
  }
  getStateById(e) {
    let t = this.states.length;
    for (; t--; ) if (this.states[t].idLookup[e]) return this.states[t];
  }
  kill() {
    this.batch.remove(this);
  }
}
class ke {
  constructor(e) {
    (this.id = e),
      (this.actions = []),
      (this._kill = []),
      (this._final = []),
      (this._abs = []),
      (this._run = []),
      (this.data = {}),
      (this.state = new ve()),
      (this.timeline = V.timeline());
  }
  add(e) {
    let t = this.actions.filter((t) => t.vars === e);
    return t.length ? t[0] : ((t = new Ce('function' == typeof e ? { animate: e } : e, this)), this.actions.push(t), t);
  }
  remove(e) {
    let t = this.actions.indexOf(e);
    return t >= 0 && this.actions.splice(t, 1), this;
  }
  getState(e) {
    let t = E,
      i = L;
    return (
      (E = this),
      this.state.clear(),
      (this._kill.length = 0),
      this.actions.forEach((t) => {
        t.vars.getState && ((t.states.length = 0), (L = t), (t.state = t.vars.getState(t))),
          e && t.states.forEach((e) => this.state.add(e));
      }),
      (L = i),
      (E = t),
      this.killConflicts(),
      this
    );
  }
  animate() {
    let e,
      t,
      i = E,
      s = this.timeline,
      a = this.actions.length;
    for (
      E = this,
        s.clear(),
        this._abs.length = this._final.length = this._run.length = 0,
        this.actions.forEach((e) => {
          e.vars.animate && e.vars.animate(e);
          let t,
            i,
            s = e.vars.onEnter,
            a = e.vars.onLeave,
            n = e.targets;
          n &&
            n.length &&
            (s || a) &&
            ((t = new ve()),
            e.states.forEach((e) => t.add(e)),
            (i = t.compare(Ve.getState(n))),
            i.enter.length && s && s(i.enter),
            i.leave.length && a && a(i.leave));
        }),
        le(this._abs),
        this._run.forEach((e) => e()),
        t = s.duration(),
        e = this._final.slice(0),
        s.add(() => {
          t <= s.time() && (e.forEach((e) => e()), T(this, 'onComplete'));
        }),
        E = i;
      a--;

    )
      this.actions[a].vars.once && this.actions[a].kill();
    return T(this, 'onStart'), s.restart(), this;
  }
  loadState(e) {
    e || (e = () => 0);
    let t = [];
    return (
      this.actions.forEach((i) => {
        if (i.vars.loadState) {
          let s,
            a = (n) => {
              n && (i.targets = n), (s = t.indexOf(a)), ~s && (t.splice(s, 1), t.length || e());
            };
          t.push(a), i.vars.loadState(a);
        }
      }),
      t.length || e(),
      this
    );
  }
  setState() {
    return this.actions.forEach((e) => (e.targets = e.vars.setState && e.vars.setState(e))), this;
  }
  killConflicts(e) {
    return this.state.interrupt(e), this._kill.forEach((t) => t.interrupt(e)), this;
  }
  run(e, t) {
    return (
      this !== E &&
        (e || this.getState(t),
        this.loadState(() => {
          this._killed || (this.setState(), this.animate());
        })),
      this
    );
  }
  clear(e) {
    this.state.clear(), e || (this.actions.length = 0);
  }
  getStateById(e) {
    let t,
      i = this.actions.length;
    for (; i--; ) if (((t = this.actions[i].getStateById(e)), t)) return t;
    return this.state.idLookup[e] && this.state;
  }
  kill() {
    (this._killed = 1), this.clear(), delete X[this.id];
  }
}
class Ve {
  static getState(e, t) {
    let i = ce(e, t);
    return L && L.states.push(i), t && t.batch && Ve.batch(t.batch).state.add(i), i;
  }
  static from(e, t) {
    return (
      'clearProps' in (t = t || {}) || (t.clearProps = !0),
      ye(e, ce(t.targets || e.targets, { props: t.props || e.props, simple: t.simple, kill: !!t.kill }), t, -1)
    );
  }
  static to(e, t) {
    return ye(e, ce(t.targets || e.targets, { props: t.props || e.props, simple: t.simple, kill: !!t.kill }), t, 1);
  }
  static fromTo(e, t, i) {
    return ye(e, t, i);
  }
  static fit(e, t, i) {
    let s = i ? Z(i, J) : {},
      { absolute: a, scale: n, getVars: l, props: r, runBackwards: o, onComplete: h, simple: p } = i || s,
      d = i && i.fitChild && H(i.fitChild),
      c = re(t, r, p, e),
      m = re(e, 0, p, c),
      f = r ? R[r] : F;
    return (
      r && oe(s, c.props),
      o &&
        (ee(m, f),
        'immediateRender' in s || (s.immediateRender = !0),
        (s.onComplete = function () {
          te(m), h && h.apply(this, arguments);
        })),
      a && ae(m, c),
      (s = de(m, c, n || d, r, d, s.duration || l ? s : 0)),
      l ? s : s.duration ? V.to(m.element, s) : null
    );
  }
  static makeAbsolute(e, t) {
    return (e instanceof ve ? e : new ve(e, t)).makeAbsolute();
  }
  static batch(e) {
    return e || (e = 'default'), X[e] || (X[e] = new ke(e));
  }
  static killFlipsOf(e, t) {
    (e instanceof ve ? e.targets : k(e)).forEach((e) => e && xe(e._flip, !1 !== t ? 1 : 2));
  }
  static isFlipping(e) {
    let t = Ve.getByTarget(e);
    return !!t && t.isActive();
  }
  static getByTarget(e) {
    return (H(e) || Y)._flip;
  }
  static getElementState(e, t) {
    return new Se(H(e), t);
  }
  static convertCoordinates(e, t, i) {
    let s = C(t, !0, !0).multiply(C(e));
    return i ? s.apply(i) : s;
  }
  static register(e) {
    if (((_ = 'undefined' != typeof document && document.body), _)) {
      (V = e), d(_), (k = V.utils.toArray), (I = V.core.getStyleSaver);
      let t = V.utils.snap(0.1);
      B = (e, i) => t(parseFloat(e) + i);
    }
  }
}
(Ve.version = '3.12.2'), 'undefined' != typeof window && window.gsap && window.gsap.registerPlugin(Ve);
export default Ve;
export { Ve as Flip };
