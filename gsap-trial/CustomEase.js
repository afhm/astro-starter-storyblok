/*!
 * CustomEase 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

let e = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
  t = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,
  n = Math.PI / 180,
  s = Math.sin,
  i = Math.cos,
  o = Math.abs,
  r = Math.sqrt,
  a = (e) => Math.round(1e5 * e) / 1e5 || 0;
function l(e, t, a, l, h, c, g, u, f) {
  if (e === u && t === f) return;
  (a = o(a)), (l = o(l));
  let d = (h % 360) * n,
    x = i(d),
    p = s(d),
    y = Math.PI,
    m = 2 * y,
    w = (e - u) / 2,
    M = (t - f) / 2,
    C = x * w + p * M,
    E = -p * w + x * M,
    b = C * C,
    v = E * E,
    S = b / (a * a) + v / (l * l);
  S > 1 && ((a = r(S) * a), (l = r(S) * l));
  let N = a * a,
    L = l * l,
    P = (N * L - N * v - L * b) / (N * v + L * b);
  P < 0 && (P = 0);
  let A = (c === g ? -1 : 1) * r(P),
    O = A * ((a * E) / l),
    D = A * ((-l * C) / a),
    V = (e + u) / 2 + (x * O - p * D),
    T = (t + f) / 2 + (p * O + x * D),
    _ = (C - O) / a,
    j = (E - D) / l,
    q = (-C - O) / a,
    G = (-E - D) / l,
    I = _ * _ + j * j,
    R = (j < 0 ? -1 : 1) * Math.acos(_ / r(I)),
    W = (_ * G - j * q < 0 ? -1 : 1) * Math.acos((_ * q + j * G) / r(I * (q * q + G * G)));
  isNaN(W) && (W = y), !g && W > 0 ? (W -= m) : g && W < 0 && (W += m), (R %= m), (W %= m);
  let z,
    H = Math.ceil(o(W) / (m / 4)),
    Q = [],
    Z = W / H,
    U = ((4 / 3) * s(Z / 2)) / (1 + i(Z / 2)),
    Y = x * a,
    $ = p * a,
    k = p * -l,
    B = x * l;
  for (z = 0; z < H; z++)
    (C = i((h = R + z * Z))),
      (E = s(h)),
      (_ = i((h += Z))),
      (j = s(h)),
      Q.push(C - U * E, E + U * C, _ + U * j, j - U * _, _, j);
  for (z = 0; z < Q.length; z += 2)
    (C = Q[z]), (E = Q[z + 1]), (Q[z] = C * Y + E * k + V), (Q[z + 1] = C * $ + E * B + T);
  return (Q[z - 2] = u), (Q[z - 1] = f), Q;
}
let h,
  c,
  g = () => h || ('undefined' != typeof window && (h = window.gsap) && h.registerPlugin && h),
  u = () => {
    (h = g()), h ? (h.registerEase('_CE', E.create), (c = 1)) : console.warn('Please gsap.registerPlugin(CustomEase)');
  },
  f = (e) => ~~(1e3 * e + (e < 0 ? -0.5 : 0.5)) / 1e3,
  d = function () {
    return String.fromCharCode.apply(null, arguments);
  },
  x = d(103, 114, 101, 101, 110, 115, 111, 99, 107, 46, 99, 111, 109),
  p = d(103, 115, 97, 112, 46, 99, 111, 109),
  y = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}:?\d*$/,
  m = (function (e) {
    var t = 'undefined' != typeof window,
      n =
        0 === (t ? window.location.href : '').indexOf(d(102, 105, 108, 101, 58, 47, 47)) ||
        -1 !== e.indexOf(d(108, 111, 99, 97, 108, 104, 111, 115, 116)) ||
        y.test(e),
      s = [
        x,
        p,
        d(99, 111, 100, 101, 112, 101, 110, 46, 105, 111),
        d(99, 111, 100, 101, 112, 101, 110, 46, 112, 108, 117, 109, 98, 105, 110, 103),
        d(99, 111, 100, 101, 112, 101, 110, 46, 100, 101, 118),
        d(99, 111, 100, 101, 112, 101, 110, 46, 97, 112, 112),
        d(99, 111, 100, 101, 112, 101, 110, 46, 119, 101, 98, 115, 105, 116, 101),
        d(112, 101, 110, 115, 46, 99, 108, 111, 117, 100),
        d(99, 115, 115, 45, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109),
        d(99, 100, 112, 110, 46, 105, 111),
        d(112, 101, 110, 115, 46, 105, 111),
        d(103, 97, 110, 110, 111, 110, 46, 116, 118),
        d(99, 111, 100, 101, 99, 97, 110, 121, 111, 110, 46, 110, 101, 116),
        d(116, 104, 101, 109, 101, 102, 111, 114, 101, 115, 116, 46, 110, 101, 116),
        d(99, 101, 114, 101, 98, 114, 97, 120, 46, 99, 111, 46, 117, 107),
        d(116, 121, 109, 112, 97, 110, 117, 115, 46, 110, 101, 116),
        d(116, 119, 101, 101, 110, 109, 97, 120, 46, 99, 111, 109),
        d(112, 108, 110, 107, 114, 46, 99, 111),
        d(104, 111, 116, 106, 97, 114, 46, 99, 111, 109),
        d(119, 101, 98, 112, 97, 99, 107, 98, 105, 110, 46, 99, 111, 109),
        d(97, 114, 99, 104, 105, 118, 101, 46, 111, 114, 103),
        d(99, 111, 100, 101, 115, 97, 110, 100, 98, 111, 120, 46, 105, 111),
        d(99, 115, 98, 46, 97, 112, 112),
        d(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 99, 111, 109),
        d(115, 116, 97, 99, 107, 98, 108, 105, 116, 122, 46, 105, 111),
        d(99, 111, 100, 105, 101, 114, 46, 105, 111),
        d(109, 111, 116, 105, 111, 110, 116, 114, 105, 99, 107, 115, 46, 99, 111, 109),
        d(115, 116, 97, 99, 107, 111, 118, 101, 114, 102, 108, 111, 119, 46, 99, 111, 109),
        d(115, 116, 97, 99, 107, 101, 120, 99, 104, 97, 110, 103, 101, 46, 99, 111, 109),
        d(115, 116, 117, 100, 105, 111, 102, 114, 101, 105, 103, 104, 116, 46, 99, 111, 109),
        d(119, 101, 98, 99, 111, 110, 116, 97, 105, 110, 101, 114, 46, 105, 111),
        d(106, 115, 102, 105, 100, 100, 108, 101, 46, 110, 101, 116),
      ],
      i = function () {
        if (t)
          if ('loading' === document.readyState || 'interactive' === document.readyState)
            document.addEventListener('readystatechange', i);
          else {
            document.removeEventListener('readystatechange', i);
            var e = 'object' == typeof h ? h : t && window.gsap;
            t &&
              window.console &&
              !window._gsapWarned &&
              'object' == typeof e &&
              !1 !== e.config().trialWarn &&
              (console.log(
                d(37, 99, 87, 97, 114, 110, 105, 110, 103),
                d(
                  102,
                  111,
                  110,
                  116,
                  45,
                  115,
                  105,
                  122,
                  101,
                  58,
                  51,
                  48,
                  112,
                  120,
                  59,
                  99,
                  111,
                  108,
                  111,
                  114,
                  58,
                  114,
                  101,
                  100,
                  59
                )
              ),
              console.log(
                d(65, 32, 116, 114, 105, 97, 108, 32, 118, 101, 114, 115, 105, 111, 110, 32, 111, 102, 32) +
                  'CustomEase' +
                  d(
                    32,
                    105,
                    115,
                    32,
                    108,
                    111,
                    97,
                    100,
                    101,
                    100,
                    32,
                    116,
                    104,
                    97,
                    116,
                    32,
                    111,
                    110,
                    108,
                    121,
                    32,
                    119,
                    111,
                    114,
                    107,
                    115,
                    32,
                    108,
                    111,
                    99,
                    97,
                    108,
                    108,
                    121,
                    32,
                    97,
                    110,
                    100,
                    32,
                    111,
                    110,
                    32,
                    100,
                    111,
                    109,
                    97,
                    105,
                    110,
                    115,
                    32,
                    108,
                    105,
                    107,
                    101,
                    32,
                    99,
                    111,
                    100,
                    101,
                    112,
                    101,
                    110,
                    46,
                    105,
                    111,
                    32,
                    97,
                    110,
                    100,
                    32,
                    99,
                    111,
                    100,
                    101,
                    115,
                    97,
                    110,
                    100,
                    98,
                    111,
                    120,
                    46,
                    105,
                    111,
                    46,
                    32,
                    42,
                    42,
                    42,
                    32,
                    68,
                    79,
                    32,
                    78,
                    79,
                    84,
                    32,
                    68,
                    69,
                    80,
                    76,
                    79,
                    89,
                    32,
                    84,
                    72,
                    73,
                    83,
                    32,
                    70,
                    73,
                    76,
                    69,
                    32,
                    42,
                    42,
                    42,
                    32,
                    76,
                    111,
                    97,
                    100,
                    105,
                    110,
                    103,
                    32,
                    105,
                    116,
                    32,
                    111,
                    110,
                    32,
                    97,
                    110,
                    32,
                    117,
                    110,
                    97,
                    117,
                    116,
                    104,
                    111,
                    114,
                    105,
                    122,
                    101,
                    100,
                    32,
                    115,
                    105,
                    116,
                    101,
                    32,
                    118,
                    105,
                    111,
                    108,
                    97,
                    116,
                    101,
                    115,
                    32,
                    116,
                    104,
                    101,
                    32,
                    108,
                    105,
                    99,
                    101,
                    110,
                    115,
                    101,
                    32,
                    97,
                    110,
                    100,
                    32,
                    119,
                    105,
                    108,
                    108,
                    32,
                    99,
                    97,
                    117,
                    115,
                    101,
                    32,
                    97,
                    32,
                    114,
                    101,
                    100,
                    105,
                    114,
                    101,
                    99,
                    116,
                    46,
                    32,
                    80,
                    108,
                    101,
                    97,
                    115,
                    101,
                    32,
                    106,
                    111,
                    105,
                    110,
                    32,
                    67,
                    108,
                    117,
                    98,
                    32,
                    71,
                    114,
                    101,
                    101,
                    110,
                    83,
                    111,
                    99,
                    107,
                    32,
                    116,
                    111,
                    32,
                    103,
                    101,
                    116,
                    32,
                    102,
                    117,
                    108,
                    108,
                    32,
                    97,
                    99,
                    99,
                    101,
                    115,
                    115,
                    32,
                    116,
                    111,
                    32,
                    116,
                    104,
                    101,
                    32,
                    98,
                    111,
                    110,
                    117,
                    115,
                    32,
                    112,
                    108,
                    117,
                    103,
                    105,
                    110,
                    115,
                    32,
                    116,
                    104,
                    97,
                    116,
                    32,
                    98,
                    111,
                    111,
                    115,
                    116,
                    32,
                    121,
                    111,
                    117,
                    114,
                    32,
                    97,
                    110,
                    105,
                    109,
                    97,
                    116,
                    105,
                    111,
                    110,
                    32,
                    115,
                    117,
                    112,
                    101,
                    114,
                    112,
                    111,
                    119,
                    101,
                    114,
                    115,
                    46,
                    32,
                    68,
                    105,
                    115,
                    97,
                    98,
                    108,
                    101,
                    32,
                    116,
                    104,
                    105,
                    115,
                    32,
                    119,
                    97,
                    114,
                    110,
                    105,
                    110,
                    103,
                    32,
                    119,
                    105,
                    116,
                    104,
                    32,
                    103,
                    115,
                    97,
                    112,
                    46,
                    99,
                    111,
                    110,
                    102,
                    105,
                    103,
                    40,
                    123,
                    116,
                    114,
                    105,
                    97,
                    108,
                    87,
                    97,
                    114,
                    110,
                    58,
                    32,
                    102,
                    97,
                    108,
                    115,
                    101,
                    125,
                    41,
                    59
                  )
              ),
              console.log(
                d(
                  37,
                  99,
                  71,
                  101,
                  116,
                  32,
                  117,
                  110,
                  114,
                  101,
                  115,
                  116,
                  114,
                  105,
                  99,
                  116,
                  101,
                  100,
                  32,
                  102,
                  105,
                  108,
                  101,
                  115,
                  32,
                  97,
                  116,
                  32,
                  104,
                  116,
                  116,
                  112,
                  115,
                  58,
                  47,
                  47,
                  103,
                  114,
                  101,
                  101,
                  110,
                  115,
                  111,
                  99,
                  107,
                  46,
                  99,
                  111,
                  109,
                  47,
                  99,
                  108,
                  117,
                  98
                ),
                d(
                  102,
                  111,
                  110,
                  116,
                  45,
                  115,
                  105,
                  122,
                  101,
                  58,
                  49,
                  54,
                  112,
                  120,
                  59,
                  99,
                  111,
                  108,
                  111,
                  114,
                  58,
                  35,
                  52,
                  101,
                  57,
                  56,
                  49,
                  53
                )
              ),
              (window._gsapWarned = 1));
          }
      },
      o = s.length;
    for (setTimeout(i, 50); --o > -1; ) if (-1 !== e.indexOf(s[o])) return !0;
    return (
      n ||
      !setTimeout(function () {
        t &&
          (window.location.href =
            d(104, 116, 116, 112, 115, 58, 47, 47) +
            x +
            d(47, 114, 101, 113, 117, 105, 114, 101, 115, 45, 109, 101, 109, 98, 101, 114, 115, 104, 105, 112, 47) +
            '?plugin=CustomEase&source=trial');
      }, 4e3)
    );
  })('undefined' != typeof window ? window.location.host : ''),
  w = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
  M = /[cLlsSaAhHvVtTqQ]/g,
  C = function (e, t, n, s, i, o, r, a, l, h, c) {
    let g,
      u = (e + n) / 2,
      f = (t + s) / 2,
      d = (n + i) / 2,
      x = (s + o) / 2,
      p = (i + r) / 2,
      y = (o + a) / 2,
      m = (u + d) / 2,
      w = (f + x) / 2,
      M = (d + p) / 2,
      E = (x + y) / 2,
      b = (m + M) / 2,
      v = (w + E) / 2,
      S = r - e,
      N = a - t,
      L = Math.abs((n - r) * N - (s - a) * S),
      P = Math.abs((i - r) * N - (o - a) * S);
    return (
      h ||
        ((h = [
          { x: e, y: t },
          { x: r, y: a },
        ]),
        (c = 1)),
      h.splice(c || h.length - 1, 0, { x: b, y: v }),
      (L + P) * (L + P) > l * (S * S + N * N) &&
        ((g = h.length), C(e, t, u, f, m, w, b, v, l, h, c), C(b, v, M, E, p, y, r, a, l, h, c + 1 + (h.length - g))),
      h
    );
  };
class E {
  constructor(e, t, n) {
    c || u(), (this.id = e), m && this.setData(t, n);
  }
  setData(n, s) {
    s = s || {};
    let i,
      r,
      a,
      c,
      g,
      u,
      f,
      d,
      x,
      p = (n = n || '0,0,1,1').match(w),
      y = 1,
      m = [],
      E = [],
      b = s.precision || 1,
      v = b <= 1;
    if (
      ((this.data = n),
      (M.test(n) || (~n.indexOf('M') && n.indexOf('C') < 0)) &&
        (p = (function (n) {
          let s,
            i,
            r,
            a,
            h,
            c,
            g,
            u,
            f,
            d,
            x,
            p,
            y,
            m,
            w,
            M =
              (n + '')
                .replace(t, (e) => {
                  let t = +e;
                  return t < 1e-4 && t > -1e-4 ? 0 : t;
                })
                .match(e) || [],
            C = [],
            E = 0,
            b = 0,
            v = M.length,
            S = 0,
            N = 'ERROR: malformed path: ' + n,
            L = function (e, t, n, s) {
              (d = (n - e) / 3), (x = (s - t) / 3), g.push(e + d, t + x, n - d, s - x, n, s);
            };
          if (!n || !isNaN(M[0]) || isNaN(M[1])) return console.log(N), C;
          for (s = 0; s < v; s++)
            if (
              ((y = h),
              isNaN(M[s]) ? ((h = M[s].toUpperCase()), (c = h !== M[s])) : s--,
              (r = +M[s + 1]),
              (a = +M[s + 2]),
              c && ((r += E), (a += b)),
              s || ((u = r), (f = a)),
              'M' === h)
            )
              g && (g.length < 8 ? (C.length -= 1) : (S += g.length)),
                (E = u = r),
                (b = f = a),
                (g = [r, a]),
                C.push(g),
                (s += 2),
                (h = 'L');
            else if ('C' === h)
              g || (g = [0, 0]),
                c || (E = b = 0),
                g.push(r, a, E + 1 * M[s + 3], b + 1 * M[s + 4], (E += 1 * M[s + 5]), (b += 1 * M[s + 6])),
                (s += 6);
            else if ('S' === h)
              (d = E),
                (x = b),
                ('C' !== y && 'S' !== y) || ((d += E - g[g.length - 4]), (x += b - g[g.length - 3])),
                c || (E = b = 0),
                g.push(d, x, r, a, (E += 1 * M[s + 3]), (b += 1 * M[s + 4])),
                (s += 4);
            else if ('Q' === h)
              (d = E + (2 / 3) * (r - E)),
                (x = b + (2 / 3) * (a - b)),
                c || (E = b = 0),
                (E += 1 * M[s + 3]),
                (b += 1 * M[s + 4]),
                g.push(d, x, E + (2 / 3) * (r - E), b + (2 / 3) * (a - b), E, b),
                (s += 4);
            else if ('T' === h)
              (d = E - g[g.length - 4]),
                (x = b - g[g.length - 3]),
                g.push(
                  E + d,
                  b + x,
                  r + (2 / 3) * (E + 1.5 * d - r),
                  a + (2 / 3) * (b + 1.5 * x - a),
                  (E = r),
                  (b = a)
                ),
                (s += 2);
            else if ('H' === h) L(E, b, (E = r), b), (s += 1);
            else if ('V' === h) L(E, b, E, (b = r + (c ? b - E : 0))), (s += 1);
            else if ('L' === h || 'Z' === h)
              'Z' === h && ((r = u), (a = f), (g.closed = !0)),
                ('L' === h || o(E - r) > 0.5 || o(b - a) > 0.5) && (L(E, b, r, a), 'L' === h && (s += 2)),
                (E = r),
                (b = a);
            else if ('A' === h) {
              if (
                ((m = M[s + 4]),
                (w = M[s + 5]),
                (d = M[s + 6]),
                (x = M[s + 7]),
                (i = 7),
                m.length > 1 &&
                  (m.length < 3 ? ((x = d), (d = w), i--) : ((x = w), (d = m.substr(2)), (i -= 2)),
                  (w = m.charAt(1)),
                  (m = m.charAt(0))),
                (p = l(E, b, +M[s + 1], +M[s + 2], +M[s + 3], +m, +w, (c ? E : 0) + 1 * d, (c ? b : 0) + 1 * x)),
                (s += i),
                p)
              )
                for (i = 0; i < p.length; i++) g.push(p[i]);
              (E = g[g.length - 2]), (b = g[g.length - 1]);
            } else console.log(N);
          return (
            (s = g.length),
            s < 6 ? (C.pop(), (s = 0)) : g[0] === g[s - 2] && g[1] === g[s - 1] && (g.closed = !0),
            (C.totalPoints = S + s),
            C
          );
        })(n)[0]),
      (i = p.length),
      4 === i)
    )
      p.unshift(0, 0), p.push(1, 1), (i = 8);
    else if ((i - 2) % 6) throw 'Invalid CustomEase';
    for (
      (0 == +p[0] && 1 == +p[i - 2]) ||
        ((e, t, n) => {
          n || 0 === n || (n = Math.max(+e[e.length - 1], +e[1]));
          let s,
            i = -1 * +e[0],
            o = -n,
            r = e.length,
            a = 1 / (+e[r - 2] + i),
            l =
              -t ||
              (Math.abs(+e[r - 1] - +e[1]) < 0.01 * (+e[r - 2] - +e[0])
                ? ((e) => {
                    let t,
                      n = e.length,
                      s = 1e20;
                    for (t = 1; t < n; t += 6) +e[t] < s && (s = +e[t]);
                    return s;
                  })(e) + o
                : +e[r - 1] + o);
          for (l = l ? 1 / l : -a, s = 0; s < r; s += 2) (e[s] = (+e[s] + i) * a), (e[s + 1] = (+e[s + 1] + o) * l);
        })(p, s.height, s.originY),
        this.segment = p,
        c = 2;
      c < i;
      c += 6
    )
      (r = { x: +p[c - 2], y: +p[c - 1] }),
        (a = { x: +p[c + 4], y: +p[c + 5] }),
        m.push(r, a),
        C(r.x, r.y, +p[c], +p[c + 1], +p[c + 2], +p[c + 3], a.x, a.y, 1 / (2e5 * b), m, m.length - 1);
    for (i = m.length, c = 0; c < i; c++)
      (f = m[c]),
        (d = m[c - 1] || f),
        (f.x > d.x || (d.y !== f.y && d.x === f.x) || f === d) && f.x <= 1
          ? ((d.cx = f.x - d.x),
            (d.cy = f.y - d.y),
            (d.n = f),
            (d.nx = f.x),
            v && c > 1 && Math.abs(d.cy / d.cx - m[c - 2].cy / m[c - 2].cx) > 2 && (v = 0),
            d.cx < y &&
              (d.cx
                ? (y = d.cx)
                : ((d.cx = 0.001), c === i - 1 && ((d.x -= 0.001), (y = Math.min(y, 0.001)), (v = 0)))))
          : (m.splice(c--, 1), i--);
    if (((i = (1 / y + 1) | 0), (g = 1 / i), (u = 0), (f = m[0]), v)) {
      for (c = 0; c < i; c++)
        (x = c * g),
          f.nx < x && (f = m[++u]),
          (r = f.y + ((x - f.x) / f.cx) * f.cy),
          (E[c] = { x: x, cx: g, y: r, cy: 0, nx: 9 }),
          c && (E[c - 1].cy = r - E[c - 1].y);
      E[i - 1].cy = m[m.length - 1].y - r;
    } else {
      for (c = 0; c < i; c++) f.nx < c * g && (f = m[++u]), (E[c] = f);
      u < m.length - 1 && (E[c - 1] = m[m.length - 2]);
    }
    return (
      (this.ease = (e) => {
        let t = E[(e * i) | 0] || E[i - 1];
        return t.nx < e && (t = t.n), t.y + ((e - t.x) / t.cx) * t.cy;
      }),
      (this.ease.custom = this),
      this.id && h && h.registerEase(this.id, this.ease),
      this
    );
  }
  getSVGData(e) {
    return E.getSVGData(this, e);
  }
  static create(e, t, n) {
    return new E(e, t, n).ease;
  }
  static register(e) {
    (h = e), u();
  }
  static get(e) {
    return h.parseEase(e);
  }
  static getSVGData(e, t) {
    let n,
      s,
      i,
      o,
      r,
      l,
      c,
      g,
      u,
      d,
      x = (t = t || {}).width || 100,
      p = t.height || 100,
      y = t.x || 0,
      m = (t.y || 0) + p,
      w = h.utils.toArray(t.path)[0];
    if (
      (t.invert && ((p = -p), (m = 0)),
      'string' == typeof e && (e = h.parseEase(e)),
      e.custom && (e = e.custom),
      e instanceof E)
    )
      n = (function (e) {
        'number' == typeof e[0] && (e = [e]);
        let t,
          n,
          s,
          i,
          o = '',
          r = e.length;
        for (n = 0; n < r; n++) {
          for (i = e[n], o += 'M' + a(i[0]) + ',' + a(i[1]) + ' C', t = i.length, s = 2; s < t; s++)
            o +=
              a(i[s++]) + ',' + a(i[s++]) + ' ' + a(i[s++]) + ',' + a(i[s++]) + ' ' + a(i[s++]) + ',' + a(i[s]) + ' ';
          i.closed && (o += 'z');
        }
        return o;
      })(
        (function (e, t, n, s, i, o, r) {
          let a,
            l,
            h,
            c,
            g,
            u = e.length;
          for (; --u > -1; )
            for (a = e[u], l = a.length, h = 0; h < l; h += 2)
              (c = a[h]), (g = a[h + 1]), (a[h] = c * t + g * s + o), (a[h + 1] = c * n + g * i + r);
          return (e._dirty = 1), e;
        })([e.segment], x, 0, 0, -p, y, m)
      );
    else {
      for (
        n = [y, m],
          c = Math.max(5, 200 * (t.precision || 1)),
          o = 1 / c,
          c += 2,
          g = 5 / c,
          u = f(y + o * x),
          d = f(m + e(o) * -p),
          s = (d - m) / (u - y),
          i = 2;
        i < c;
        i++
      )
        (r = f(y + i * o * x)),
          (l = f(m + e(i * o) * -p)),
          (Math.abs((l - d) / (r - u) - s) > g || i === c - 1) && (n.push(u, d), (s = (l - d) / (r - u))),
          (u = r),
          (d = l);
      n = 'M' + n.join(',');
    }
    return w && w.setAttribute('d', n), n;
  }
}
g() && h.registerPlugin(E), (E.version = '3.12.2');
export default E;
export { E as CustomEase };
