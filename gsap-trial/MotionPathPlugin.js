/*!
 * MotionPathPlugin 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

let t = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
  e = /(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
  n = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
  r = /(^[#\.][a-z]|[a-y][a-z])/i,
  l = Math.PI / 180,
  o = 180 / Math.PI,
  s = Math.sin,
  i = Math.cos,
  a = Math.abs,
  h = Math.sqrt,
  g = Math.atan2,
  p = (t) => 'string' == typeof t,
  f = (t) => 'number' == typeof t,
  u = {},
  c = {},
  d = (t) => Math.round(((t + 1e8) % 1) * 1e5) / 1e5 || (t < 0 ? 0 : 1),
  m = (t) => Math.round(1e5 * t) / 1e5 || 0,
  y = (t) => Math.round(1e10 * t) / 1e10 || 0,
  x = (t, e, n, r) => {
    let l = t[e],
      o = 1 === r ? 6 : _(l, n, r);
    if (o && o + n + 2 < l.length) return t.splice(e, 0, l.slice(0, n + o + 2)), l.splice(0, n + o), 1;
  },
  w = (t, e, n) => {
    let r = t.length,
      l = ~~(n * r);
    if (t[l] > e) {
      for (; --l && t[l] > e; );
      l < 0 && (l = 0);
    } else for (; t[++l] < e && l < r; );
    return l < r ? l : r - 1;
  },
  b = (t, e) => (
    (e.totalLength = t.totalLength),
    t.samples
      ? ((e.samples = t.samples.slice(0)),
        (e.lookup = t.lookup.slice(0)),
        (e.minLength = t.minLength),
        (e.resolution = t.resolution))
      : t.totalPoints && (e.totalPoints = t.totalPoints),
    e
  ),
  L = (t, e) => {
    let n = t.length,
      r = t[n - 1] || [],
      l = r.length;
    n && e[0] === r[l - 2] && e[1] === r[l - 1] && ((e = r.concat(e.slice(2))), n--), (t[n] = e);
  };
function P(t) {
  let e,
    n = (t = (p(t) && r.test(t) && document.querySelector(t)) || t).getAttribute ? t : 0;
  return n && (t = t.getAttribute('d'))
    ? (n._gsPath || (n._gsPath = {}), (e = n._gsPath[t]), e && !e._dirty ? e : (n._gsPath[t] = I(t)))
    : t
    ? p(t)
      ? I(t)
      : f(t[0])
      ? [t]
      : t
    : console.warn('Expecting a <path> element or an SVG path data string');
}
function v(t) {
  let e,
    n = 0;
  for (t.reverse(); n < t.length; n += 2) (e = t[n]), (t[n] = t[n + 1]), (t[n + 1] = e);
  t.reversed = !t.reversed;
}
let N = { rect: 'rx,ry,x,y,width,height', circle: 'r,cx,cy', ellipse: 'rx,ry,cx,cy', line: 'x1,x2,y1,y2' };
function M(t, n) {
  let r,
    l,
    o,
    s,
    i,
    a,
    h,
    g,
    p,
    f,
    u,
    c,
    d,
    m,
    y,
    x,
    w,
    b,
    L,
    P,
    v,
    M,
    C = t.tagName.toLowerCase(),
    T = 0.552284749831;
  return 'path' !== C && t.getBBox
    ? ((a = ((t, e) => {
        let n,
          r = document.createElementNS('http://www.w3.org/2000/svg', 'path'),
          l = [].slice.call(t.attributes),
          o = l.length;
        for (e = ',' + e + ','; --o > -1; )
          (n = l[o].nodeName.toLowerCase()), e.indexOf(',' + n + ',') < 0 && r.setAttributeNS(null, n, l[o].nodeValue);
        return r;
      })(t, 'x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points')),
      (M = ((t, e) => {
        let n = e ? e.split(',') : [],
          r = {},
          l = n.length;
        for (; --l > -1; ) r[n[l]] = +t.getAttribute(n[l]) || 0;
        return r;
      })(t, N[C])),
      'rect' === C
        ? ((s = M.rx),
          (i = M.ry || s),
          (l = M.x),
          (o = M.y),
          (f = M.width - 2 * s),
          (u = M.height - 2 * i),
          s || i
            ? ((c = l + s * (1 - T)),
              (d = l + s),
              (m = d + f),
              (y = m + s * T),
              (x = m + s),
              (w = o + i * (1 - T)),
              (b = o + i),
              (L = b + u),
              (P = L + i * T),
              (v = L + i),
              (r =
                'M' +
                x +
                ',' +
                b +
                ' V' +
                L +
                ' C' +
                [
                  x,
                  P,
                  y,
                  v,
                  m,
                  v,
                  m - (m - d) / 3,
                  v,
                  d + (m - d) / 3,
                  v,
                  d,
                  v,
                  c,
                  v,
                  l,
                  P,
                  l,
                  L,
                  l,
                  L - (L - b) / 3,
                  l,
                  b + (L - b) / 3,
                  l,
                  b,
                  l,
                  w,
                  c,
                  o,
                  d,
                  o,
                  d + (m - d) / 3,
                  o,
                  m - (m - d) / 3,
                  o,
                  m,
                  o,
                  y,
                  o,
                  x,
                  w,
                  x,
                  b,
                ].join(',') +
                'z'))
            : (r = 'M' + (l + f) + ',' + o + ' v' + u + ' h' + -f + ' v' + -u + ' h' + f + 'z'))
        : 'circle' === C || 'ellipse' === C
        ? ('circle' === C ? ((s = i = M.r), (g = s * T)) : ((s = M.rx), (i = M.ry), (g = i * T)),
          (l = M.cx),
          (o = M.cy),
          (h = s * T),
          (r =
            'M' +
            (l + s) +
            ',' +
            o +
            ' C' +
            [
              l + s,
              o + g,
              l + h,
              o + i,
              l,
              o + i,
              l - h,
              o + i,
              l - s,
              o + g,
              l - s,
              o,
              l - s,
              o - g,
              l - h,
              o - i,
              l,
              o - i,
              l + h,
              o - i,
              l + s,
              o - g,
              l + s,
              o,
            ].join(',') +
            'z'))
        : 'line' === C
        ? (r = 'M' + M.x1 + ',' + M.y1 + ' L' + M.x2 + ',' + M.y2)
        : ('polyline' !== C && 'polygon' !== C) ||
          ((p = (t.getAttribute('points') + '').match(e) || []),
          (l = p.shift()),
          (o = p.shift()),
          (r = 'M' + l + ',' + o + ' L' + p.join(',')),
          'polygon' === C && (r += ',' + l + ',' + o + 'z')),
      a.setAttribute('d', X((a._gsRawPath = I(r)))),
      n && t.parentNode && (t.parentNode.insertBefore(a, t), t.parentNode.removeChild(t)),
      a)
    : t;
}
function C(t, e, n) {
  let r,
    l = t[e],
    s = t[e + 2],
    i = t[e + 4];
  return (
    (l += (s - l) * n),
    (s += (i - s) * n),
    (l += (s - l) * n),
    (r = s + (i + (t[e + 6] - i) * n - s) * n - l),
    (l = t[e + 1]),
    (s = t[e + 3]),
    (i = t[e + 5]),
    (l += (s - l) * n),
    (s += (i - s) * n),
    (l += (s - l) * n),
    m(g(s + (i + (t[e + 7] - i) * n - s) * n - l, r) * o)
  );
}
function T(t, e, n) {
  (n = void 0 === n ? 1 : y(n) || 0), (e = y(e) || 0);
  let r = Math.max(0, ~~(a(n - e) - 1e-8)),
    l = (function (t) {
      let e = [],
        n = 0;
      for (; n < t.length; n++) e[n] = b(t[n], t[n].slice(0));
      return b(t, e);
    })(t);
  if (
    (e > n &&
      ((e = 1 - e),
      (n = 1 - n),
      ((t, e) => {
        let n = t.length;
        for (e || t.reverse(); n--; ) t[n].reversed || v(t[n]);
      })(l),
      (l.totalLength = 0)),
    e < 0 || n < 0)
  ) {
    let t = Math.abs(~~Math.min(e, n)) + 1;
    (e += t), (n += t);
  }
  l.totalLength || S(l);
  let o,
    s,
    i,
    h,
    g,
    p,
    f,
    d,
    m = n > 1,
    w = B(l, e, u, !0),
    P = B(l, n, c),
    N = P.segment,
    M = w.segment,
    T = P.segIndex,
    A = w.segIndex,
    O = P.i,
    R = w.i,
    E = A === T,
    I = O === R && E;
  if (m || r) {
    for (
      o = T < A || (E && O < R) || (I && P.t < w.t),
        x(l, A, R, w.t) && (A++, o || (T++, I ? ((P.t = (P.t - w.t) / (1 - w.t)), (O = 0)) : E && (O -= R))),
        Math.abs(1 - (n - e)) < 1e-5 ? (T = A - 1) : !P.t && T ? T-- : x(l, T, O, P.t) && o && A++,
        1 === w.t && (A = (A + 1) % l.length),
        g = [],
        p = l.length,
        f = 1 + p * r,
        d = A,
        f += (p - A + T) % p,
        h = 0;
      h < f;
      h++
    )
      L(g, l[d++ % p]);
    l = g;
  } else if (((i = 1 === P.t ? 6 : _(N, O, P.t)), e !== n))
    for (
      s = _(M, R, I ? w.t / P.t : w.t),
        E && (i += s),
        N.splice(O + i + 2),
        (s || R) && M.splice(0, R + s),
        h = l.length;
      h--;

    )
      (h < A || h > T) && l.splice(h, 1);
  else
    (N.angle = C(N, O + i, 0)),
      (O += i),
      (w = N[O]),
      (P = N[O + 1]),
      (N.length = N.totalLength = 0),
      (N.totalPoints = l.totalPoints = 8),
      N.push(w, P, w, P, w, P, w, P);
  return (l.totalLength = 0), l;
}
function A(t, e, n) {
  (e = e || 0), t.samples || ((t.samples = []), (t.lookup = []));
  let r,
    l,
    o,
    s,
    i,
    g,
    p,
    f,
    u,
    c,
    d,
    m,
    y,
    x,
    w,
    b,
    L,
    P = ~~t.resolution || 12,
    v = 1 / P,
    N = n ? e + 6 * n + 1 : t.length,
    M = t[e],
    C = t[e + 1],
    T = e ? (e / 6) * P : 0,
    A = t.samples,
    S = t.lookup,
    _ = (e ? t.minLength : 1e8) || 1e8,
    B = A[T + n * P - 1],
    O = e ? A[T - 1] : 0;
  for (A.length = S.length = 0, l = e + 2; l < N; l += 6) {
    if (
      ((o = t[l + 4] - M),
      (s = t[l + 2] - M),
      (i = t[l] - M),
      (f = t[l + 5] - C),
      (u = t[l + 3] - C),
      (c = t[l + 1] - C),
      (g = p = d = m = 0),
      a(o) < 0.01 && a(f) < 0.01 && a(i) + a(c) < 0.01)
    )
      t.length > 8 && (t.splice(l, 6), (l -= 6), (N -= 6));
    else
      for (r = 1; r <= P; r++)
        (x = v * r),
          (y = 1 - x),
          (g = p - (p = (x * x * o + 3 * y * (x * s + y * i)) * x)),
          (d = m - (m = (x * x * f + 3 * y * (x * u + y * c)) * x)),
          (b = h(d * d + g * g)),
          b < _ && (_ = b),
          (O += b),
          (A[T++] = O);
    (M += o), (C += f);
  }
  if (B) for (B -= O; T < A.length; T++) A[T] += B;
  if (A.length && _) {
    if (((t.totalLength = L = A[A.length - 1] || 0), (t.minLength = _), L / _ < 9999))
      for (b = w = 0, r = 0; r < L; r += _) S[b++] = A[w] < r ? ++w : w;
  } else t.totalLength = A[0] = 0;
  return e ? O - A[e / 2 - 1] : O;
}
function S(t, e) {
  let n, r, l;
  for (l = n = r = 0; l < t.length; l++) (t[l].resolution = ~~e || 12), (r += t[l].length), (n += A(t[l]));
  return (t.totalPoints = r), (t.totalLength = n), t;
}
function _(t, e, n) {
  if (n <= 0 || n >= 1) return 0;
  let r = t[e],
    l = t[e + 1],
    o = t[e + 2],
    s = t[e + 3],
    i = t[e + 4],
    a = t[e + 5],
    h = r + (o - r) * n,
    g = o + (i - o) * n,
    p = l + (s - l) * n,
    f = s + (a - s) * n,
    u = h + (g - h) * n,
    c = p + (f - p) * n,
    d = i + (t[e + 6] - i) * n,
    y = a + (t[e + 7] - a) * n;
  return (
    (g += (d - g) * n),
    (f += (y - f) * n),
    t.splice(e + 2, 4, m(h), m(p), m(u), m(c), m(u + (g - u) * n), m(c + (f - c) * n), m(g), m(f), m(d), m(y)),
    t.samples && t.samples.splice(((e / 6) * t.resolution) | 0, 0, 0, 0, 0, 0, 0, 0),
    6
  );
}
function B(t, e, n, r) {
  (n = n || {}), t.totalLength || S(t), (e < 0 || e > 1) && (e = d(e));
  let l,
    o,
    s,
    i,
    a,
    h,
    g,
    p = 0,
    f = t[0];
  if (e)
    if (1 === e) (g = 1), (p = t.length - 1), (f = t[p]), (h = f.length - 8);
    else {
      if (t.length > 1) {
        for (s = t.totalLength * e, a = h = 0; (a += t[h++].totalLength) < s; ) p = h;
        (f = t[p]), (i = a - f.totalLength), (e = (s - i) / (a - i) || 0);
      }
      (l = f.samples),
        (o = f.resolution),
        (s = f.totalLength * e),
        (h = f.lookup.length ? f.lookup[~~(s / f.minLength)] || 0 : w(l, s, e)),
        (i = h ? l[h - 1] : 0),
        (a = l[h]),
        a < s && ((i = a), (a = l[++h])),
        (g = (1 / o) * ((s - i) / (a - i) + (h % o))),
        (h = 6 * ~~(h / o)),
        r && 1 === g && (h + 6 < f.length ? ((h += 6), (g = 0)) : p + 1 < t.length && ((h = g = 0), (f = t[++p])));
    }
  else (g = h = p = 0), (f = t[0]);
  return (n.t = g), (n.i = h), (n.path = t), (n.segment = f), (n.segIndex = p), n;
}
function O(t, e, n, r) {
  let l,
    o,
    s,
    i,
    a,
    h,
    g,
    p,
    f,
    u = t[0],
    c = r || {};
  if (((e < 0 || e > 1) && (e = d(e)), u.lookup || S(t), t.length > 1)) {
    for (s = t.totalLength * e, a = h = 0; (a += t[h++].totalLength) < s; ) u = t[h];
    (i = a - u.totalLength), (e = (s - i) / (a - i) || 0);
  }
  return (
    (l = u.samples),
    (o = u.resolution),
    (s = u.totalLength * e),
    (h = u.lookup.length ? u.lookup[e < 1 ? ~~(s / u.minLength) : u.lookup.length - 1] || 0 : w(l, s, e)),
    (i = h ? l[h - 1] : 0),
    (a = l[h]),
    a < s && ((i = a), (a = l[++h])),
    (g = (1 / o) * ((s - i) / (a - i) + (h % o)) || 0),
    (f = 1 - g),
    (h = 6 * ~~(h / o)),
    (p = u[h]),
    (c.x = m((g * g * (u[h + 6] - p) + 3 * f * (g * (u[h + 4] - p) + f * (u[h + 2] - p))) * g + p)),
    (c.y = m((g * g * (u[h + 7] - (p = u[h + 1])) + 3 * f * (g * (u[h + 5] - p) + f * (u[h + 3] - p))) * g + p)),
    n && (c.angle = u.totalLength ? C(u, h, g >= 1 ? 1 - 1e-9 : g || 1e-9) : u.angle || 0),
    c
  );
}
function R(t, e, n, r, l, o, s) {
  let i,
    a,
    h,
    g,
    p,
    f = t.length;
  for (; --f > -1; )
    for (i = t[f], a = i.length, h = 0; h < a; h += 2)
      (g = i[h]), (p = i[h + 1]), (i[h] = g * e + p * r + o), (i[h + 1] = g * n + p * l + s);
  return (t._dirty = 1), t;
}
function E(t, e, n, r, o, g, p, f, u) {
  if (t === f && e === u) return;
  (n = a(n)), (r = a(r));
  let c = (o % 360) * l,
    d = i(c),
    m = s(c),
    y = Math.PI,
    x = 2 * y,
    w = (t - f) / 2,
    b = (e - u) / 2,
    L = d * w + m * b,
    P = -m * w + d * b,
    v = L * L,
    N = P * P,
    M = v / (n * n) + N / (r * r);
  M > 1 && ((n = h(M) * n), (r = h(M) * r));
  let C = n * n,
    T = r * r,
    A = (C * T - C * N - T * v) / (C * N + T * v);
  A < 0 && (A = 0);
  let S = (g === p ? -1 : 1) * h(A),
    _ = S * ((n * P) / r),
    B = S * ((-r * L) / n),
    O = (t + f) / 2 + (d * _ - m * B),
    R = (e + u) / 2 + (m * _ + d * B),
    E = (L - _) / n,
    I = (P - B) / r,
    k = (-L - _) / n,
    z = (-P - B) / r,
    X = E * E + I * I,
    Y = (I < 0 ? -1 : 1) * Math.acos(E / h(X)),
    V = (E * z - I * k < 0 ? -1 : 1) * Math.acos((E * k + I * z) / h(X * (k * k + z * z)));
  isNaN(V) && (V = y), !p && V > 0 ? (V -= x) : p && V < 0 && (V += x), (Y %= x), (V %= x);
  let j,
    q = Math.ceil(a(V) / (x / 4)),
    F = [],
    G = V / q,
    Z = ((4 / 3) * s(G / 2)) / (1 + i(G / 2)),
    H = d * n,
    U = m * n,
    D = m * -r,
    Q = d * r;
  for (j = 0; j < q; j++)
    (L = i((o = Y + j * G))),
      (P = s(o)),
      (E = i((o += G))),
      (I = s(o)),
      F.push(L - Z * P, P + Z * L, E + Z * I, I - Z * E, E, I);
  for (j = 0; j < F.length; j += 2)
    (L = F[j]), (P = F[j + 1]), (F[j] = L * H + P * D + O), (F[j + 1] = L * U + P * Q + R);
  return (F[j - 2] = f), (F[j - 1] = u), F;
}
function I(e) {
  let r,
    l,
    o,
    s,
    i,
    h,
    g,
    p,
    f,
    u,
    c,
    d,
    m,
    y,
    x,
    w =
      (e + '')
        .replace(n, (t) => {
          let e = +t;
          return e < 1e-4 && e > -1e-4 ? 0 : e;
        })
        .match(t) || [],
    b = [],
    L = 0,
    P = 0,
    v = w.length,
    N = 0,
    M = 'ERROR: malformed path: ' + e,
    C = function (t, e, n, r) {
      (u = (n - t) / 3), (c = (r - e) / 3), g.push(t + u, e + c, n - u, r - c, n, r);
    };
  if (!e || !isNaN(w[0]) || isNaN(w[1])) return console.log(M), b;
  for (r = 0; r < v; r++)
    if (
      ((m = i),
      isNaN(w[r]) ? ((i = w[r].toUpperCase()), (h = i !== w[r])) : r--,
      (o = +w[r + 1]),
      (s = +w[r + 2]),
      h && ((o += L), (s += P)),
      r || ((p = o), (f = s)),
      'M' === i)
    )
      g && (g.length < 8 ? (b.length -= 1) : (N += g.length)),
        (L = p = o),
        (P = f = s),
        (g = [o, s]),
        b.push(g),
        (r += 2),
        (i = 'L');
    else if ('C' === i)
      g || (g = [0, 0]),
        h || (L = P = 0),
        g.push(o, s, L + 1 * w[r + 3], P + 1 * w[r + 4], (L += 1 * w[r + 5]), (P += 1 * w[r + 6])),
        (r += 6);
    else if ('S' === i)
      (u = L),
        (c = P),
        ('C' !== m && 'S' !== m) || ((u += L - g[g.length - 4]), (c += P - g[g.length - 3])),
        h || (L = P = 0),
        g.push(u, c, o, s, (L += 1 * w[r + 3]), (P += 1 * w[r + 4])),
        (r += 4);
    else if ('Q' === i)
      (u = L + (2 / 3) * (o - L)),
        (c = P + (2 / 3) * (s - P)),
        h || (L = P = 0),
        (L += 1 * w[r + 3]),
        (P += 1 * w[r + 4]),
        g.push(u, c, L + (2 / 3) * (o - L), P + (2 / 3) * (s - P), L, P),
        (r += 4);
    else if ('T' === i)
      (u = L - g[g.length - 4]),
        (c = P - g[g.length - 3]),
        g.push(L + u, P + c, o + (2 / 3) * (L + 1.5 * u - o), s + (2 / 3) * (P + 1.5 * c - s), (L = o), (P = s)),
        (r += 2);
    else if ('H' === i) C(L, P, (L = o), P), (r += 1);
    else if ('V' === i) C(L, P, L, (P = o + (h ? P - L : 0))), (r += 1);
    else if ('L' === i || 'Z' === i)
      'Z' === i && ((o = p), (s = f), (g.closed = !0)),
        ('L' === i || a(L - o) > 0.5 || a(P - s) > 0.5) && (C(L, P, o, s), 'L' === i && (r += 2)),
        (L = o),
        (P = s);
    else if ('A' === i) {
      if (
        ((y = w[r + 4]),
        (x = w[r + 5]),
        (u = w[r + 6]),
        (c = w[r + 7]),
        (l = 7),
        y.length > 1 &&
          (y.length < 3 ? ((c = u), (u = x), l--) : ((c = x), (u = y.substr(2)), (l -= 2)),
          (x = y.charAt(1)),
          (y = y.charAt(0))),
        (d = E(L, P, +w[r + 1], +w[r + 2], +w[r + 3], +y, +x, (h ? L : 0) + 1 * u, (h ? P : 0) + 1 * c)),
        (r += l),
        d)
      )
        for (l = 0; l < d.length; l++) g.push(d[l]);
      (L = g[g.length - 2]), (P = g[g.length - 1]);
    } else console.log(M);
  return (
    (r = g.length),
    r < 6 ? (b.pop(), (r = 0)) : g[0] === g[r - 2] && g[1] === g[r - 1] && (g.closed = !0),
    (b.totalPoints = N + r),
    b
  );
}
function k(t, e = 1) {
  let n = t[0],
    r = 0,
    l = [n, r],
    o = 2;
  for (; o < t.length; o += 2) l.push(n, r, t[o], (r = ((t[o] - n) * e) / 2), (n = t[o]), -r);
  return l;
}
function z(t, e) {
  a(t[0] - t[2]) < 1e-4 && a(t[1] - t[3]) < 1e-4 && (t = t.slice(2));
  let n,
    r,
    l,
    o,
    s,
    i,
    g,
    p,
    f,
    u,
    c,
    d,
    y,
    x,
    w,
    b = t.length - 2,
    L = +t[0],
    P = +t[1],
    v = +t[2],
    N = +t[3],
    M = [L, P, L, P],
    C = v - L,
    T = N - P,
    A = Math.abs(t[b] - L) < 0.001 && Math.abs(t[b + 1] - P) < 0.001;
  for (
    A && (t.push(v, N), (v = L), (N = P), (L = t[b - 2]), (P = t[b - 1]), t.unshift(L, P), (b += 4)),
      e = e || 0 === e ? +e : 1,
      l = 2;
    l < b;
    l += 2
  )
    (n = L),
      (r = P),
      (L = v),
      (P = N),
      (v = +t[l + 2]),
      (N = +t[l + 3]),
      (L === v && P === N) ||
        ((o = C),
        (s = T),
        (C = v - L),
        (T = N - P),
        (i = h(o * o + s * s)),
        (g = h(C * C + T * T)),
        (p = h((C / g + o / i) ** 2 + (T / g + s / i) ** 2)),
        (f = ((i + g) * e * 0.25) / p),
        (u = L - (L - n) * (i ? f / i : 0)),
        (c = L + (v - L) * (g ? f / g : 0)),
        (d = L - (u + (((c - u) * ((3 * i) / (i + g) + 0.5)) / 4 || 0))),
        (y = P - (P - r) * (i ? f / i : 0)),
        (x = P + (N - P) * (g ? f / g : 0)),
        (w = P - (y + (((x - y) * ((3 * i) / (i + g) + 0.5)) / 4 || 0))),
        (L === n && P === r) || M.push(m(u + d), m(y + w), m(L), m(P), m(c + d), m(x + w)));
  return (
    L !== v || P !== N || M.length < 4 ? M.push(m(v), m(N), m(v), m(N)) : (M.length -= 2),
    2 === M.length ? M.push(L, P, L, P, L, P) : A && (M.splice(0, 6), (M.length = M.length - 6)),
    M
  );
}
function X(t) {
  f(t[0]) && (t = [t]);
  let e,
    n,
    r,
    l,
    o = '',
    s = t.length;
  for (n = 0; n < s; n++) {
    for (l = t[n], o += 'M' + m(l[0]) + ',' + m(l[1]) + ' C', e = l.length, r = 2; r < e; r++)
      o += m(l[r++]) + ',' + m(l[r++]) + ' ' + m(l[r++]) + ',' + m(l[r++]) + ' ' + m(l[r++]) + ',' + m(l[r]) + ' ';
    l.closed && (o += 'z');
  }
  return o;
}
let Y,
  V,
  j,
  q,
  F,
  G,
  Z,
  H,
  U,
  D = 'transform',
  Q = D + 'Origin',
  W = (t) => {
    let e = t.ownerDocument || t;
    !(D in t.style) && 'msTransform' in t.style && ((D = 'msTransform'), (Q = D + 'Origin'));
    for (; e.parentNode && (e = e.parentNode); );
    if (((V = window), (Z = new lt()), e)) {
      (Y = e),
        (j = e.documentElement),
        (q = e.body),
        (H = Y.createElementNS('http://www.w3.org/2000/svg', 'g')),
        (H.style.transform = 'none');
      let t = e.createElement('div'),
        n = e.createElement('div');
      q.appendChild(t),
        t.appendChild(n),
        (t.style.position = 'static'),
        (t.style[D] = 'translate3d(0,0,1px)'),
        (U = n.offsetParent !== t),
        q.removeChild(t);
    }
    return e;
  },
  $ = [],
  J = [],
  K = (t) => t.ownerSVGElement || ('svg' === (t.tagName + '').toLowerCase() ? t : null),
  tt = (t) => 'fixed' === V.getComputedStyle(t).position || ((t = t.parentNode) && 1 === t.nodeType ? tt(t) : void 0),
  et = (t, e) => {
    if (t.parentNode && (Y || W(t))) {
      let n = K(t),
        r = n ? n.getAttribute('xmlns') || 'http://www.w3.org/2000/svg' : 'http://www.w3.org/1999/xhtml',
        l = n ? (e ? 'rect' : 'g') : 'div',
        o = 2 !== e ? 0 : 100,
        s = 3 === e ? 100 : 0,
        i = 'position:absolute;display:block;pointer-events:none;margin:0;padding:0;',
        a = Y.createElementNS ? Y.createElementNS(r.replace(/^https/, 'http'), l) : Y.createElement(l);
      return (
        e &&
          (n
            ? (G || (G = et(t)),
              a.setAttribute('width', 0.01),
              a.setAttribute('height', 0.01),
              a.setAttribute('transform', 'translate(' + o + ',' + s + ')'),
              G.appendChild(a))
            : (F || ((F = et(t)), (F.style.cssText = i)),
              (a.style.cssText = i + 'width:0.1px;height:0.1px;top:' + s + 'px;left:' + o + 'px'),
              F.appendChild(a))),
        a
      );
    }
    throw 'Need document and parent.';
  },
  nt = (t, e) => {
    let n,
      r,
      l,
      o,
      s,
      i,
      a = K(t),
      h = t === a,
      g = a ? $ : J,
      p = t.parentNode;
    if (t === V) return t;
    if ((g.length || g.push(et(t, 1), et(t, 2), et(t, 3)), (n = a ? G : F), a))
      h
        ? ((l = ((t) => {
            let e,
              n = t.getCTM();
            return (
              n ||
                ((e = t.style[D]),
                (t.style[D] = 'none'),
                t.appendChild(H),
                (n = H.getCTM()),
                t.removeChild(H),
                e ? (t.style[D] = e) : t.style.removeProperty(D.replace(/([A-Z])/g, '-$1').toLowerCase())),
              n || Z.clone()
            );
          })(t)),
          (o = -l.e / l.a),
          (s = -l.f / l.d),
          (r = Z))
        : t.getBBox
        ? ((l = t.getBBox()),
          (r = t.transform ? t.transform.baseVal : {}),
          (r = r.numberOfItems
            ? r.numberOfItems > 1
              ? ((t) => {
                  let e = new lt(),
                    n = 0;
                  for (; n < t.numberOfItems; n++) e.multiply(t.getItem(n).matrix);
                  return e;
                })(r)
              : r.getItem(0).matrix
            : Z),
          (o = r.a * l.x + r.c * l.y),
          (s = r.b * l.x + r.d * l.y))
        : ((r = new lt()), (o = s = 0)),
        e && 'g' === t.tagName.toLowerCase() && (o = s = 0),
        (h ? a : p).appendChild(n),
        n.setAttribute(
          'transform',
          'matrix(' + r.a + ',' + r.b + ',' + r.c + ',' + r.d + ',' + (r.e + o) + ',' + (r.f + s) + ')'
        );
    else {
      if (((o = s = 0), U))
        for (r = t.offsetParent, l = t; l && (l = l.parentNode) && l !== r && l.parentNode; )
          (V.getComputedStyle(l)[D] + '').length > 4 && ((o = l.offsetLeft), (s = l.offsetTop), (l = 0));
      if (((i = V.getComputedStyle(t)), 'absolute' !== i.position && 'fixed' !== i.position))
        for (r = t.offsetParent; p && p !== r; ) (o += p.scrollLeft || 0), (s += p.scrollTop || 0), (p = p.parentNode);
      (l = n.style),
        (l.top = t.offsetTop - s + 'px'),
        (l.left = t.offsetLeft - o + 'px'),
        (l[D] = i[D]),
        (l[Q] = i[Q]),
        (l.position = 'fixed' === i.position ? 'fixed' : 'absolute'),
        t.parentNode.appendChild(n);
    }
    return n;
  },
  rt = (t, e, n, r, l, o, s) => ((t.a = e), (t.b = n), (t.c = r), (t.d = l), (t.e = o), (t.f = s), t);
class lt {
  constructor(t = 1, e = 0, n = 0, r = 1, l = 0, o = 0) {
    rt(this, t, e, n, r, l, o);
  }
  inverse() {
    let { a: t, b: e, c: n, d: r, e: l, f: o } = this,
      s = t * r - e * n || 1e-10;
    return rt(this, r / s, -e / s, -n / s, t / s, (n * o - r * l) / s, -(t * o - e * l) / s);
  }
  multiply(t) {
    let { a: e, b: n, c: r, d: l, e: o, f: s } = this,
      i = t.a,
      a = t.c,
      h = t.b,
      g = t.d,
      p = t.e,
      f = t.f;
    return rt(this, i * e + h * r, i * n + h * l, a * e + g * r, a * n + g * l, o + p * e + f * r, s + p * n + f * l);
  }
  clone() {
    return new lt(this.a, this.b, this.c, this.d, this.e, this.f);
  }
  equals(t) {
    let { a: e, b: n, c: r, d: l, e: o, f: s } = this;
    return e === t.a && n === t.b && r === t.c && l === t.d && o === t.e && s === t.f;
  }
  apply(t, e = {}) {
    let { x: n, y: r } = t,
      { a: l, b: o, c: s, d: i, e: a, f: h } = this;
    return (e.x = n * l + r * s + a || 0), (e.y = n * o + r * i + h || 0), e;
  }
}
function ot(t, e, n, r) {
  if (!t || !t.parentNode || (Y || W(t)).documentElement === t) return new lt();
  let l = ((t) => {
      let e, n;
      for (; t && t !== q; )
        (n = t._gsap),
          n && n.uncache && n.get(t, 'x'),
          n &&
            !n.scaleX &&
            !n.scaleY &&
            n.renderTransform &&
            ((n.scaleX = n.scaleY = 1e-4), n.renderTransform(1, n), e ? e.push(n) : (e = [n])),
          (t = t.parentNode);
      return e;
    })(t),
    o = K(t) ? $ : J,
    s = nt(t, n),
    i = o[0].getBoundingClientRect(),
    a = o[1].getBoundingClientRect(),
    h = o[2].getBoundingClientRect(),
    g = s.parentNode,
    p = !r && tt(t),
    f = new lt(
      (a.left - i.left) / 100,
      (a.top - i.top) / 100,
      (h.left - i.left) / 100,
      (h.top - i.top) / 100,
      i.left + (p ? 0 : V.pageXOffset || Y.scrollLeft || j.scrollLeft || q.scrollLeft || 0),
      i.top + (p ? 0 : V.pageYOffset || Y.scrollTop || j.scrollTop || q.scrollTop || 0)
    );
  if ((g.removeChild(s), l)) for (i = l.length; i--; ) (a = l[i]), (a.scaleX = a.scaleY = 0), a.renderTransform(1, a);
  return e ? f.inverse() : f;
}
let st,
  it,
  at,
  ht,
  gt,
  pt,
  ft = 'x,translateX,left,marginLeft,xPercent'.split(','),
  ut = 'y,translateY,top,marginTop,yPercent'.split(','),
  ct = Math.PI / 180,
  dt = (t, e, n, r) => {
    let l,
      o = e.length,
      s = 2 === r ? 0 : r,
      i = 0;
    for (; i < o; i++) (t[s] = l = parseFloat(e[i][n])), 2 === r && (t[s + 1] = 0), (s += 2);
    return t;
  },
  mt = (t, e, n) => parseFloat(t._gsap.get(t, e, n || 'px')) || 0,
  yt = (t) => {
    let e,
      n = t[0],
      r = t[1];
    for (e = 2; e < t.length; e += 2) (n = t[e] += n), (r = t[e + 1] += r);
  },
  xt = (t, e, n, r, l, o, s, i, a) => {
    if ('cubic' === s.type) e = [e];
    else {
      !1 !== s.fromCurrent && e.unshift(mt(n, r, i), l ? mt(n, l, a) : 0),
        s.relative && yt(e),
        (e = [(l ? z : k)(e, s.curviness)]);
    }
    return (
      (e = o(vt(e, n, s))),
      Nt(t, n, r, e, 'x', i),
      l && Nt(t, n, l, e, 'y', a),
      S(e, s.resolution || (0 === s.curviness ? 20 : 12))
    );
  },
  wt = (t) => t,
  bt = /[-+\.]*\d+\.?(?:e-|e\+)?\d*/g,
  Lt = (t, e, n) => {
    let r,
      l = ot(t),
      o = 0,
      s = 0;
    return (
      'svg' === (t.tagName + '').toLowerCase()
        ? ((r = t.viewBox.baseVal),
          r.width || (r = { width: +t.getAttribute('width'), height: +t.getAttribute('height') }))
        : (r = e && t.getBBox && t.getBBox()),
      e &&
        'auto' !== e &&
        ((o = e.push ? e[0] * (r ? r.width : t.offsetWidth || 0) : e.x),
        (s = e.push ? e[1] * (r ? r.height : t.offsetHeight || 0) : e.y)),
      n.apply(o || s ? l.apply({ x: o, y: s }) : { x: l.e, y: l.f })
    );
  },
  Pt = (t, e, n, r) => {
    let l,
      o = ot(t.parentNode, !0, !0),
      s = o.clone().multiply(ot(e)),
      i = Lt(t, n, o),
      { x: a, y: h } = Lt(e, r, o);
    return (
      (s.e = s.f = 0),
      'auto' === r &&
        e.getTotalLength &&
        'path' === e.tagName.toLowerCase() &&
        ((l = e.getAttribute('d').match(bt) || []), (l = s.apply({ x: +l[0], y: +l[1] })), (a += l.x), (h += l.y)),
      l && ((l = s.apply(e.getBBox())), (a -= l.x), (h -= l.y)),
      (s.e = a - i.x),
      (s.f = h - i.y),
      s
    );
  },
  vt = (t, e, { align: n, matrix: r, offsetX: l, offsetY: o, alignOrigin: s }) => {
    let i,
      a,
      h,
      g = t[0][0],
      p = t[0][1],
      f = mt(e, 'x'),
      u = mt(e, 'y');
    return t && t.length
      ? (n &&
          ('self' === n || (i = ht(n)[0] || e) === e
            ? R(t, 1, 0, 0, 1, f - g, u - p)
            : (s && !1 !== s[2]
                ? st.set(e, { transformOrigin: 100 * s[0] + '% ' + 100 * s[1] + '%' })
                : (s = [mt(e, 'xPercent') / -100, mt(e, 'yPercent') / -100]),
              (a = Pt(e, i, s, 'auto')),
              (h = a.apply({ x: g, y: p })),
              R(t, a.a, a.b, a.c, a.d, f + a.e - (h.x - a.e), u + a.f - (h.y - a.f)))),
        r ? R(t, r.a, r.b, r.c, r.d, r.e, r.f) : (l || o) && R(t, 1, 0, 0, 1, l || 0, o || 0),
        t)
      : P('M0,0L0,0');
  },
  Nt = (t, e, n, r, l, o) => {
    let s = e._gsap,
      i = s.harness,
      a = i && i.aliases && i.aliases[n],
      h = a && a.indexOf(',') < 0 ? a : n,
      g = (t._pt = new it(t._pt, e, h, 0, 0, wt, 0, s.set(e, h, t)));
    (g.u = at(s.get(e, h, o)) || 0), (g.path = r), (g.pp = l), t._props.push(h);
  };
const Mt = {
  version: '3.12.2',
  name: 'motionPath',
  register(t, e, n) {
    (st = t),
      (at = st.utils.getUnit),
      (ht = st.utils.toArray),
      (gt = st.core.getStyleSaver),
      (pt = st.core.reverting || function () {}),
      (it = n);
  },
  init(t, e, n) {
    if (!st) return console.warn('Please gsap.registerPlugin(MotionPathPlugin)'), !1;
    ('object' == typeof e && !e.style && e.path) || (e = { path: e });
    let r,
      l,
      o = [],
      { path: s, autoRotate: i, unitX: a, unitY: h, x: g, y: p } = e,
      f = s[0],
      u = ((c = e.start), (d = 'end' in e ? e.end : 1), (t) => (c || 1 !== d ? T(t, c, d) : t));
    var c, d;
    if (
      ((this.rawPaths = o),
      (this.target = t),
      (this.tween = n),
      (this.styles = gt && gt(t, 'transform')),
      (this.rotate = i || 0 === i) &&
        ((this.rOffset = parseFloat(i) || 0),
        (this.radians = !!e.useRadians),
        (this.rProp = e.rotation || 'rotation'),
        (this.rSet = t._gsap.set(t, this.rProp, this)),
        (this.ru = at(t._gsap.get(t, this.rProp)) || 0)),
      Array.isArray(s) && !('closed' in s) && 'number' != typeof f)
    ) {
      for (l in f) !g && ~ft.indexOf(l) ? (g = l) : !p && ~ut.indexOf(l) && (p = l);
      for (l in (g && p
        ? o.push(xt(this, dt(dt([], s, g, 0), s, p, 1), t, g, p, u, e, a || at(s[0][g]), h || at(s[0][p])))
        : (g = p = 0),
      f))
        l !== g && l !== p && o.push(xt(this, dt([], s, l, 2), t, l, 0, u, e, at(s[0][l])));
    } else
      (r = u(vt(P(e.path), t, e))),
        S(r, e.resolution),
        o.push(r),
        Nt(this, t, e.x || 'x', r, 'x', e.unitX || 'px'),
        Nt(this, t, e.y || 'y', r, 'y', e.unitY || 'px');
  },
  render(t, e) {
    let n = e.rawPaths,
      r = n.length,
      l = e._pt;
    if (e.tween._time || !pt()) {
      for (t > 1 ? (t = 1) : t < 0 && (t = 0); r--; ) O(n[r], t, !r && e.rotate, n[r]);
      for (; l; ) l.set(l.t, l.p, l.path[l.pp] + l.u, l.d, t), (l = l._next);
      e.rotate && e.rSet(e.target, e.rProp, n[0].angle * (e.radians ? ct : 1) + e.rOffset + e.ru, e, t);
    } else e.styles.revert();
  },
  getLength: (t) => S(P(t)).totalLength,
  sliceRawPath: T,
  getRawPath: P,
  pointsToSegment: z,
  stringToRawPath: I,
  rawPathToString: X,
  transformRawPath: R,
  getGlobalMatrix: ot,
  getPositionOnPath: O,
  cacheRawPathMeasurements: S,
  convertToPath: (t, e) => ht(t).map((t) => M(t, !1 !== e)),
  convertCoordinates(t, e, n) {
    let r = ot(e, !0, !0).multiply(ot(t));
    return n ? r.apply(n) : r;
  },
  getAlignMatrix: Pt,
  getRelativePosition(t, e, n, r) {
    let l = Pt(t, e, n, r);
    return { x: l.e, y: l.f };
  },
  arrayToRawPath(t, e) {
    let n = dt(dt([], t, (e = e || {}).x || 'x', 0), t, e.y || 'y', 1);
    return e.relative && yt(n), ['cubic' === e.type ? n : z(n, e.curviness)];
  },
};
(st || ('undefined' != typeof window && (st = window.gsap) && st.registerPlugin && st)) && st.registerPlugin(Mt);
export default Mt;
export { Mt as MotionPathPlugin };
