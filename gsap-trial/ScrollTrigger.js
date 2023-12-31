/*!
 * ScrollTrigger 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

let e,
  t,
  r,
  i,
  s,
  o,
  a,
  n,
  l,
  c,
  d,
  p,
  h,
  g,
  u = () => e || ('undefined' != typeof window && (e = window.gsap) && e.registerPlugin && e),
  f = 1,
  m = [],
  v = [],
  y = [],
  x = Date.now,
  b = (e, t) => t,
  w = (e, t) => ~y.indexOf(e) && y[y.indexOf(e) + 1][t],
  _ = (e) => !!~d.indexOf(e),
  T = (e, t, r, i, s) => e.addEventListener(t, r, { passive: !i, capture: !!s }),
  S = (e, t, r, i) => e.removeEventListener(t, r, !!i),
  C = () => (p && p.isPressed) || v.cache++,
  k = (e, t) => {
    let r = (s) => {
      if (s || 0 === s) {
        f && (i.history.scrollRestoration = 'manual');
        let t = p && p.isPressed;
        (s = r.v = Math.round(s) || (p && p.iOS ? 1 : 0)), e(s), (r.cacheID = v.cache), t && b('ss', s);
      } else (t || v.cache !== r.cacheID || b('ref')) && ((r.cacheID = v.cache), (r.v = e()));
      return r.v + r.offset;
    };
    return (r.offset = 0), e && r;
  },
  E = {
    s: 'scrollLeft',
    p: 'left',
    p2: 'Left',
    os: 'right',
    os2: 'Right',
    d: 'width',
    d2: 'Width',
    a: 'x',
    sc: k(function (e) {
      return arguments.length
        ? i.scrollTo(e, P.sc())
        : i.pageXOffset || s.scrollLeft || o.scrollLeft || a.scrollLeft || 0;
    }),
  },
  P = {
    s: 'scrollTop',
    p: 'top',
    p2: 'Top',
    os: 'bottom',
    os2: 'Bottom',
    d: 'height',
    d2: 'Height',
    a: 'y',
    op: E,
    sc: k(function (e) {
      return arguments.length ? i.scrollTo(E.sc(), e) : i.pageYOffset || s.scrollTop || o.scrollTop || a.scrollTop || 0;
    }),
  },
  M = (t, r) =>
    ((r && r._ctx && r._ctx.selector) || e.utils.toArray)(t)[0] ||
    ('string' == typeof t && !1 !== e.config().nullTargetWarn ? console.warn('Element not found:', t) : null),
  O = (t, { s: r, sc: i }) => {
    _(t) && (t = s.scrollingElement || o);
    let a = v.indexOf(t),
      n = i === P.sc ? 1 : 2;
    !~a && (a = v.push(t) - 1), v[a + n] || T(t, 'scroll', C);
    let l = v[a + n],
      c =
        l ||
        (v[a + n] =
          k(w(t, r), !0) ||
          (_(t)
            ? i
            : k(function (e) {
                return arguments.length ? (t[r] = e) : t[r];
              })));
    return (c.target = t), l || (c.smooth = 'smooth' === e.getProperty(t, 'scrollBehavior')), c;
  },
  A = (e, t, r) => {
    let i = e,
      s = e,
      o = x(),
      a = o,
      n = t || 50,
      l = Math.max(500, 3 * n),
      c = (e, t) => {
        let l = x();
        t || l - o > n ? ((s = i), (i = e), (a = o), (o = l)) : r ? (i += e) : (i = s + ((e - s) / (l - a)) * (o - a));
      };
    return {
      update: c,
      reset: () => {
        (s = i = r ? 0 : i), (a = o = 0);
      },
      getVelocity: (e) => {
        let t = a,
          n = s,
          d = x();
        return (
          (e || 0 === e) && e !== i && c(e), o === a || d - a > l ? 0 : ((i + (r ? n : -n)) / ((r ? d : o) - t)) * 1e3
        );
      },
    };
  },
  R = (e, t) => (t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e),
  D = (e) => {
    let t = Math.max(...e),
      r = Math.min(...e);
    return Math.abs(t) >= Math.abs(r) ? t : r;
  },
  Y = () => {
    (c = e.core.globals().ScrollTrigger),
      c &&
        c.core &&
        (() => {
          let e = c.core,
            t = e.bridge || {},
            r = e._scrollers,
            i = e._proxies;
          r.push(...v), i.push(...y), (v = r), (y = i), (b = (e, r) => t[e](r));
        })();
  },
  I = (c) => (
    (e = c || u()),
    e &&
      'undefined' != typeof document &&
      document.body &&
      ((i = window),
      (s = document),
      (o = s.documentElement),
      (a = s.body),
      (d = [i, s, o, a]),
      (r = e.utils.clamp),
      (g = e.core.context || function () {}),
      (l = 'onpointerenter' in a ? 'pointer' : 'mouse'),
      (n = X.isTouch =
        i.matchMedia && i.matchMedia('(hover: none), (pointer: coarse)').matches
          ? 1
          : 'ontouchstart' in i || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
          ? 2
          : 0),
      (h = X.eventTypes =
        (
          'ontouchstart' in o
            ? 'touchstart,touchmove,touchcancel,touchend'
            : 'onpointerdown' in o
            ? 'pointerdown,pointermove,pointercancel,pointerup'
            : 'mousedown,mousemove,mouseup,mouseup'
        ).split(',')),
      setTimeout(() => (f = 0), 500),
      Y(),
      (t = 1)),
    t
  );
(E.op = P), (v.cache = 0);
class X {
  constructor(e) {
    this.init(e);
  }
  init(r) {
    t || I(e) || console.warn('Please gsap.registerPlugin(Observer)'), c || Y();
    let {
      tolerance: d,
      dragMinimum: u,
      type: f,
      target: v,
      lineHeight: y,
      debounce: b,
      preventDefault: w,
      onStop: k,
      onStopDelay: X,
      ignore: z,
      wheelSpeed: B,
      event: L,
      onDragStart: N,
      onDragEnd: F,
      onDrag: W,
      onPress: H,
      onRelease: q,
      onRight: U,
      onLeft: V,
      onUp: G,
      onDown: j,
      onChangeX: K,
      onChangeY: Z,
      onChange: $,
      onToggleX: J,
      onToggleY: Q,
      onHover: ee,
      onHoverEnd: te,
      onMove: re,
      ignoreCheck: ie,
      isNormalizer: se,
      onGestureStart: oe,
      onGestureEnd: ae,
      onWheel: ne,
      onEnable: le,
      onDisable: ce,
      onClick: de,
      scrollSpeed: pe,
      capture: he,
      allowClicks: ge,
      lockAxis: ue,
      onLockAxis: fe,
    } = r;
    (this.target = v = M(v) || o),
      (this.vars = r),
      z && (z = e.utils.toArray(z)),
      (d = d || 1e-9),
      (u = u || 0),
      (B = B || 1),
      (pe = pe || 1),
      (f = f || 'wheel,touch,pointer'),
      (b = !1 !== b),
      y || (y = parseFloat(i.getComputedStyle(a).lineHeight) || 22);
    let me,
      ve,
      ye,
      xe,
      be,
      we,
      _e,
      Te = this,
      Se = 0,
      Ce = 0,
      ke = O(v, E),
      Ee = O(v, P),
      Pe = ke(),
      Me = Ee(),
      Oe = ~f.indexOf('touch') && !~f.indexOf('pointer') && 'pointerdown' === h[0],
      Ae = _(v),
      Re = v.ownerDocument || s,
      De = [0, 0, 0],
      Ye = [0, 0, 0],
      Ie = 0,
      Xe = () => (Ie = x()),
      ze = (e, t) =>
        ((Te.event = e) && z && ~z.indexOf(e.target)) || (t && Oe && 'touch' !== e.pointerType) || (ie && ie(e, t)),
      Be = () => {
        let e = (Te.deltaX = D(De)),
          t = (Te.deltaY = D(Ye)),
          r = Math.abs(e) >= d,
          i = Math.abs(t) >= d;
        $ && (r || i) && $(Te, e, t, De, Ye),
          r &&
            (U && Te.deltaX > 0 && U(Te),
            V && Te.deltaX < 0 && V(Te),
            K && K(Te),
            J && Te.deltaX < 0 != Se < 0 && J(Te),
            (Se = Te.deltaX),
            (De[0] = De[1] = De[2] = 0)),
          i &&
            (j && Te.deltaY > 0 && j(Te),
            G && Te.deltaY < 0 && G(Te),
            Z && Z(Te),
            Q && Te.deltaY < 0 != Ce < 0 && Q(Te),
            (Ce = Te.deltaY),
            (Ye[0] = Ye[1] = Ye[2] = 0)),
          (xe || ye) && (re && re(Te), ye && (W(Te), (ye = !1)), (xe = !1)),
          we && !(we = !1) && fe && fe(Te),
          be && (ne(Te), (be = !1)),
          (me = 0);
      },
      Le = (e, t, r) => {
        (De[r] += e),
          (Ye[r] += t),
          Te._vx.update(e),
          Te._vy.update(t),
          b ? me || (me = requestAnimationFrame(Be)) : Be();
      },
      Ne = (e, t) => {
        ue && !_e && ((Te.axis = _e = Math.abs(e) > Math.abs(t) ? 'x' : 'y'), (we = !0)),
          'y' !== _e && ((De[2] += e), Te._vx.update(e, !0)),
          'x' !== _e && ((Ye[2] += t), Te._vy.update(t, !0)),
          b ? me || (me = requestAnimationFrame(Be)) : Be();
      },
      Fe = (e) => {
        if (ze(e, 1)) return;
        let t = (e = R(e, w)).clientX,
          r = e.clientY,
          i = t - Te.x,
          s = r - Te.y,
          o = Te.isDragging;
        (Te.x = t),
          (Te.y = r),
          (o || Math.abs(Te.startX - t) >= u || Math.abs(Te.startY - r) >= u) &&
            (W && (ye = !0), o || (Te.isDragging = !0), Ne(i, s), o || (N && N(Te)));
      },
      We = (Te.onPress = (e) => {
        ze(e, 1) ||
          (e && e.button) ||
          ((Te.axis = _e = null),
          ve.pause(),
          (Te.isPressed = !0),
          (e = R(e)),
          (Se = Ce = 0),
          (Te.startX = Te.x = e.clientX),
          (Te.startY = Te.y = e.clientY),
          Te._vx.reset(),
          Te._vy.reset(),
          T(se ? v : Re, h[1], Fe, w, !0),
          (Te.deltaX = Te.deltaY = 0),
          H && H(Te));
      }),
      He = (Te.onRelease = (t) => {
        if (ze(t, 1)) return;
        S(se ? v : Re, h[1], Fe, !0);
        let r = !isNaN(Te.y - Te.startY),
          s = Te.isDragging && (Math.abs(Te.x - Te.startX) > 3 || Math.abs(Te.y - Te.startY) > 3),
          o = R(t);
        !s &&
          r &&
          (Te._vx.reset(),
          Te._vy.reset(),
          w &&
            ge &&
            e.delayedCall(0.08, () => {
              if (x() - Ie > 300 && !t.defaultPrevented)
                if (t.target.click) t.target.click();
                else if (Re.createEvent) {
                  let e = Re.createEvent('MouseEvents');
                  e.initMouseEvent(
                    'click',
                    !0,
                    !0,
                    i,
                    1,
                    o.screenX,
                    o.screenY,
                    o.clientX,
                    o.clientY,
                    !1,
                    !1,
                    !1,
                    !1,
                    0,
                    null
                  ),
                    t.target.dispatchEvent(e);
                }
            })),
          (Te.isDragging = Te.isGesturing = Te.isPressed = !1),
          k && !se && ve.restart(!0),
          F && s && F(Te),
          q && q(Te, s);
      }),
      qe = (e) => e.touches && e.touches.length > 1 && (Te.isGesturing = !0) && oe(e, Te.isDragging),
      Ue = () => (Te.isGesturing = !1) || ae(Te),
      Ve = (e) => {
        if (ze(e)) return;
        let t = ke(),
          r = Ee();
        Le((t - Pe) * pe, (r - Me) * pe, 1), (Pe = t), (Me = r), k && ve.restart(!0);
      },
      Ge = (e) => {
        if (ze(e)) return;
        (e = R(e, w)), ne && (be = !0);
        let t = (1 === e.deltaMode ? y : 2 === e.deltaMode ? i.innerHeight : 1) * B;
        Le(e.deltaX * t, e.deltaY * t, 0), k && !se && ve.restart(!0);
      },
      je = (e) => {
        if (ze(e)) return;
        let t = e.clientX,
          r = e.clientY,
          i = t - Te.x,
          s = r - Te.y;
        (Te.x = t), (Te.y = r), (xe = !0), (i || s) && Ne(i, s);
      },
      Ke = (e) => {
        (Te.event = e), ee(Te);
      },
      Ze = (e) => {
        (Te.event = e), te(Te);
      },
      $e = (e) => ze(e) || (R(e, w) && de(Te));
    (ve = Te._dc =
      e
        .delayedCall(X || 0.25, () => {
          Te._vx.reset(), Te._vy.reset(), ve.pause(), k && k(Te);
        })
        .pause()),
      (Te.deltaX = Te.deltaY = 0),
      (Te._vx = A(0, 50, !0)),
      (Te._vy = A(0, 50, !0)),
      (Te.scrollX = ke),
      (Te.scrollY = Ee),
      (Te.isDragging = Te.isGesturing = Te.isPressed = !1),
      g(this),
      (Te.enable = (e) => (
        Te.isEnabled ||
          (T(Ae ? Re : v, 'scroll', C),
          f.indexOf('scroll') >= 0 && T(Ae ? Re : v, 'scroll', Ve, w, he),
          f.indexOf('wheel') >= 0 && T(v, 'wheel', Ge, w, he),
          ((f.indexOf('touch') >= 0 && n) || f.indexOf('pointer') >= 0) &&
            (T(v, h[0], We, w, he),
            T(Re, h[2], He),
            T(Re, h[3], He),
            ge && T(v, 'click', Xe, !1, !0),
            de && T(v, 'click', $e),
            oe && T(Re, 'gesturestart', qe),
            ae && T(Re, 'gestureend', Ue),
            ee && T(v, l + 'enter', Ke),
            te && T(v, l + 'leave', Ze),
            re && T(v, l + 'move', je)),
          (Te.isEnabled = !0),
          e && e.type && We(e),
          le && le(Te)),
        Te
      )),
      (Te.disable = () => {
        Te.isEnabled &&
          (m.filter((e) => e !== Te && _(e.target)).length || S(Ae ? Re : v, 'scroll', C),
          Te.isPressed && (Te._vx.reset(), Te._vy.reset(), S(se ? v : Re, h[1], Fe, !0)),
          S(Ae ? Re : v, 'scroll', Ve, he),
          S(v, 'wheel', Ge, he),
          S(v, h[0], We, he),
          S(Re, h[2], He),
          S(Re, h[3], He),
          S(v, 'click', Xe, !0),
          S(v, 'click', $e),
          S(Re, 'gesturestart', qe),
          S(Re, 'gestureend', Ue),
          S(v, l + 'enter', Ke),
          S(v, l + 'leave', Ze),
          S(v, l + 'move', je),
          (Te.isEnabled = Te.isPressed = Te.isDragging = !1),
          ce && ce(Te));
      }),
      (Te.kill = Te.revert =
        () => {
          Te.disable();
          let e = m.indexOf(Te);
          e >= 0 && m.splice(e, 1), p === Te && (p = 0);
        }),
      m.push(Te),
      se && _(v) && (p = Te),
      Te.enable(L);
  }
  get velocityX() {
    return this._vx.getVelocity();
  }
  get velocityY() {
    return this._vy.getVelocity();
  }
}
(X.version = '3.12.2'),
  (X.create = (e) => new X(e)),
  (X.register = I),
  (X.getAll = () => m.slice()),
  (X.getById = (e) => m.filter((t) => t.vars.id === e)[0]),
  u() && e.registerPlugin(X);
let z,
  B,
  L,
  N,
  F,
  W,
  H,
  q,
  U,
  V,
  G,
  j,
  K,
  Z,
  $,
  J,
  Q,
  ee,
  te,
  re,
  ie,
  se,
  oe,
  ae,
  ne,
  le,
  ce,
  de,
  pe,
  he,
  ge,
  ue,
  fe,
  me,
  ve,
  ye,
  xe = 1,
  be = Date.now,
  we = be(),
  _e = 0,
  Te = 0,
  Se = (e, t, r) => {
    let i = Be(e) && ('clamp(' === e.substr(0, 6) || e.indexOf('max') > -1);
    return (r['_' + t + 'Clamp'] = i), i ? e.substr(6, e.length - 7) : e;
  },
  Ce = (e, t) => (!t || (Be(e) && 'clamp(' === e.substr(0, 6)) ? e : 'clamp(' + e + ')'),
  ke = () => Te && requestAnimationFrame(ke),
  Ee = () => (Z = 1),
  Pe = () => (Z = 0),
  Me = (e) => e,
  Oe = (e) => Math.round(1e5 * e) / 1e5 || 0,
  Ae = () => 'undefined' != typeof window,
  Re = () => z || (Ae() && (z = window.gsap) && z.registerPlugin && z),
  De = (e) => !!~H.indexOf(e),
  Ye = (e) => ('Height' === e ? ge : L['inner' + e]) || F['client' + e] || W['client' + e],
  Ie = (e) =>
    w(e, 'getBoundingClientRect') || (De(e) ? () => ((It.width = L.innerWidth), (It.height = ge), It) : () => Ke(e)),
  Xe = (e, { s: t, d2: r, d: i, a: s }) =>
    Math.max(
      0,
      (t = 'scroll' + r) && (s = w(e, t)) ? s() - Ie(e)()[i] : De(e) ? (F[t] || W[t]) - Ye(r) : e[t] - e['offset' + r]
    ),
  ze = (e, t) => {
    for (let r = 0; r < te.length; r += 3) (!t || ~t.indexOf(te[r + 1])) && e(te[r], te[r + 1], te[r + 2]);
  },
  Be = (e) => 'string' == typeof e,
  Le = (e) => 'function' == typeof e,
  Ne = (e) => 'number' == typeof e,
  Fe = (e) => 'object' == typeof e,
  We = (e, t, r) => e && e.progress(t ? 0 : 1) && r && e.pause(),
  He = (e, t) => {
    if (e.enabled) {
      let r = t(e);
      r && r.totalTime && (e.callbackAnimation = r);
    }
  },
  qe = Math.abs,
  Ue = 'padding',
  Ve = 'px',
  Ge = (e) => L.getComputedStyle(e),
  je = (e, t) => {
    for (let r in t) r in e || (e[r] = t[r]);
    return e;
  },
  Ke = (e, t) => {
    let r =
        t &&
        'matrix(1, 0, 0, 1, 0, 0)' !== Ge(e)[$] &&
        z
          .to(e, {
            x: 0,
            y: 0,
            xPercent: 0,
            yPercent: 0,
            rotation: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            skewX: 0,
            skewY: 0,
          })
          .progress(1),
      i = e.getBoundingClientRect();
    return r && r.progress(0).kill(), i;
  },
  Ze = (e, { d2: t }) => e['offset' + t] || e['client' + t] || 0,
  $e = (e) => {
    let t,
      r = [],
      i = e.labels,
      s = e.duration();
    for (t in i) r.push(i[t] / s);
    return r;
  },
  Je = (e) => {
    let t = z.utils.snap(e),
      r = Array.isArray(e) && e.slice(0).sort((e, t) => e - t);
    return r
      ? (e, i, s = 0.001) => {
          let o;
          if (!i) return t(e);
          if (i > 0) {
            for (e -= s, o = 0; o < r.length; o++) if (r[o] >= e) return r[o];
            return r[o - 1];
          }
          for (o = r.length, e += s; o--; ) if (r[o] <= e) return r[o];
          return r[0];
        }
      : (r, i, s = 0.001) => {
          let o = t(r);
          return !i || Math.abs(o - r) < s || o - r < 0 == i < 0 ? o : t(i < 0 ? r - e : r + e);
        };
  },
  Qe = (e, t, r, i) => r.split(',').forEach((r) => e(t, r, i)),
  et = (e, t, r, i, s) => e.addEventListener(t, r, { passive: !i, capture: !!s }),
  tt = (e, t, r, i) => e.removeEventListener(t, r, !!i),
  rt = (e, t, r) => {
    (r = r && r.wheelHandler) && (e(t, 'wheel', r), e(t, 'touchmove', r));
  },
  it = { startColor: 'green', endColor: 'red', indent: 0, fontSize: '16px', fontWeight: 'normal' },
  st = { toggleActions: 'play', anticipatePin: 0 },
  ot = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  at = (e, t) => {
    if (Be(e)) {
      let r = e.indexOf('='),
        i = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
      ~r && (e.indexOf('%') > r && (i *= t / 100), (e = e.substr(0, r - 1))),
        (e = i + (e in ot ? ot[e] * t : ~e.indexOf('%') ? (parseFloat(e) * t) / 100 : parseFloat(e) || 0));
    }
    return e;
  },
  nt = (e, t, r, i, { startColor: s, endColor: o, fontSize: a, indent: n, fontWeight: l }, c, d, p) => {
    let h = N.createElement('div'),
      g = De(r) || 'fixed' === w(r, 'pinType'),
      u = -1 !== e.indexOf('scroller'),
      f = g ? W : r,
      m = -1 !== e.indexOf('start'),
      v = m ? s : o,
      y =
        'border-color:' +
        v +
        ';font-size:' +
        a +
        ';color:' +
        v +
        ';font-weight:' +
        l +
        ';pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;';
    return (
      (y += 'position:' + ((u || p) && g ? 'fixed;' : 'absolute;')),
      (u || p || !g) && (y += (i === P ? 'right' : 'bottom') + ':' + (c + parseFloat(n)) + 'px;'),
      d && (y += 'box-sizing:border-box;text-align:left;width:' + d.offsetWidth + 'px;'),
      (h._isStart = m),
      h.setAttribute('class', 'gsap-marker-' + e + (t ? ' marker-' + t : '')),
      (h.style.cssText = y),
      (h.innerText = t || 0 === t ? e + '-' + t : e),
      f.children[0] ? f.insertBefore(h, f.children[0]) : f.appendChild(h),
      (h._offset = h['offset' + i.op.d2]),
      lt(h, 0, i, m),
      h
    );
  },
  lt = (e, t, r, i) => {
    let s = { display: 'block' },
      o = r[i ? 'os2' : 'p2'],
      a = r[i ? 'p2' : 'os2'];
    (e._isFlipped = i),
      (s[r.a + 'Percent'] = i ? -100 : 0),
      (s[r.a] = i ? '1px' : 0),
      (s['border' + o + 'Width'] = 1),
      (s['border' + a + 'Width'] = 0),
      (s[r.p] = t + 'px'),
      z.set(e, s);
  },
  ct = [],
  dt = {},
  pt = () => be() - _e > 34 && (fe || (fe = requestAnimationFrame(Pt))),
  ht = () => {
    (!oe || !oe.isPressed || oe.startX > W.clientWidth) &&
      (v.cache++, oe ? fe || (fe = requestAnimationFrame(Pt)) : Pt(), _e || yt('scrollStart'), (_e = be()));
  },
  gt = () => {
    (le = L.innerWidth), (ne = L.innerHeight);
  },
  ut = () => {
    v.cache++,
      !K &&
        !se &&
        !N.fullscreenElement &&
        !N.webkitFullscreenElement &&
        (!ae || le !== L.innerWidth || Math.abs(L.innerHeight - ne) > 0.25 * L.innerHeight) &&
        q.restart(!0);
  },
  ft = {},
  mt = [],
  vt = () => tt(Wt, 'scrollEnd', vt) || Ct(!0),
  yt = (e) => (ft[e] && ft[e].map((e) => e())) || mt,
  xt = [],
  bt = (e) => {
    for (let t = 0; t < xt.length; t += 5)
      (!e || (xt[t + 4] && xt[t + 4].query === e)) &&
        ((xt[t].style.cssText = xt[t + 1]),
        xt[t].getBBox && xt[t].setAttribute('transform', xt[t + 2] || ''),
        (xt[t + 3].uncache = 1));
  },
  wt = (e, t) => {
    let r;
    for (J = 0; J < ct.length; J++) (r = ct[J]), !r || (t && r._ctx !== t) || (e ? r.kill(1) : r.revert(!0, !0));
    t && bt(t), t || yt('revert');
  },
  _t = (e, t) => {
    v.cache++,
      (t || !me) && v.forEach((e) => Le(e) && e.cacheID++ && (e.rec = 0)),
      Be(e) && (L.history.scrollRestoration = pe = e);
  },
  Tt = 0,
  St = () => {
    W.appendChild(he), (ge = he.offsetHeight || L.innerHeight), W.removeChild(he);
  },
  Ct = (e, t) => {
    if (_e && !e) return void et(Wt, 'scrollEnd', vt);
    St(), (me = Wt.isRefreshing = !0), v.forEach((e) => Le(e) && ++e.cacheID && (e.rec = e()));
    let r = yt('refreshInit');
    re && Wt.sort(),
      t || wt(),
      v.forEach((e) => {
        Le(e) && (e.smooth && (e.target.style.scrollBehavior = 'auto'), e(0));
      }),
      ct.slice(0).forEach((e) => e.refresh()),
      ct.forEach((e, t) => {
        if (e._subPinOffset && e.pin) {
          let t = e.vars.horizontal ? 'offsetWidth' : 'offsetHeight',
            r = e.pin[t];
          e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - r), e.refresh();
        }
      }),
      ct.forEach((e) => {
        let t = Xe(e.scroller, e._dir);
        ('max' === e.vars.end || (e._endClamp && e.end > t)) && e.setPositions(e.start, Math.max(e.start + 1, t), !0);
      }),
      r.forEach((e) => e && e.render && e.render(-1)),
      v.forEach((e) => {
        Le(e) &&
          (e.smooth && requestAnimationFrame(() => (e.target.style.scrollBehavior = 'smooth')), e.rec && e(e.rec));
      }),
      _t(pe, 1),
      q.pause(),
      Tt++,
      (me = 2),
      Pt(2),
      ct.forEach((e) => Le(e.vars.onRefresh) && e.vars.onRefresh(e)),
      (me = Wt.isRefreshing = !1),
      yt('refresh');
  },
  kt = 0,
  Et = 1,
  Pt = (e) => {
    if (!me || 2 === e) {
      (Wt.isUpdating = !0), ye && ye.update(0);
      let e = ct.length,
        t = be(),
        r = t - we >= 50,
        i = e && ct[0].scroll();
      if (
        ((Et = kt > i ? -1 : 1),
        me || (kt = i),
        r && (_e && !Z && t - _e > 200 && ((_e = 0), yt('scrollEnd')), (G = we), (we = t)),
        Et < 0)
      ) {
        for (J = e; J-- > 0; ) ct[J] && ct[J].update(0, r);
        Et = 1;
      } else for (J = 0; J < e; J++) ct[J] && ct[J].update(0, r);
      Wt.isUpdating = !1;
    }
    fe = 0;
  },
  Mt = [
    'left',
    'top',
    'bottom',
    'right',
    'marginBottom',
    'marginRight',
    'marginTop',
    'marginLeft',
    'display',
    'flexShrink',
    'float',
    'zIndex',
    'gridColumnStart',
    'gridColumnEnd',
    'gridRowStart',
    'gridRowEnd',
    'gridArea',
    'justifySelf',
    'alignSelf',
    'placeSelf',
    'order',
  ],
  Ot = Mt.concat([
    'width',
    'height',
    'boxSizing',
    'maxWidth',
    'maxHeight',
    'position',
    'margin',
    Ue,
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
  ]),
  At = (e, t, r, i) => {
    if (!e._gsap.swappedIn) {
      let s,
        o = Mt.length,
        a = t.style,
        n = e.style;
      for (; o--; ) (s = Mt[o]), (a[s] = r[s]);
      (a.position = 'absolute' === r.position ? 'absolute' : 'relative'),
        'inline' === r.display && (a.display = 'inline-block'),
        (n.bottom = n.right = 'auto'),
        (a.flexBasis = r.flexBasis || 'auto'),
        (a.overflow = 'visible'),
        (a.boxSizing = 'border-box'),
        (a.width = Ze(e, E) + Ve),
        (a.height = Ze(e, P) + Ve),
        (a.padding = n.margin = n.top = n.left = '0'),
        Dt(i),
        (n.width = n.maxWidth = r.width),
        (n.height = n.maxHeight = r.height),
        (n.padding = r.padding),
        e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)),
        (e._gsap.swappedIn = !0);
    }
  },
  Rt = /([A-Z])/g,
  Dt = (e) => {
    if (e) {
      let t,
        r,
        i = e.t.style,
        s = e.length,
        o = 0;
      for ((e.t._gsap || z.core.getCache(e.t)).uncache = 1; o < s; o += 2)
        (r = e[o + 1]), (t = e[o]), r ? (i[t] = r) : i[t] && i.removeProperty(t.replace(Rt, '-$1').toLowerCase());
    }
  },
  Yt = (e) => {
    let t = Ot.length,
      r = e.style,
      i = [],
      s = 0;
    for (; s < t; s++) i.push(Ot[s], r[Ot[s]]);
    return (i.t = e), i;
  },
  It = { left: 0, top: 0 },
  Xt = (e, t, r, i, s, o, a, n, l, c, d, p, h, g) => {
    Le(e) && (e = e(n)),
      Be(e) && 'max' === e.substr(0, 3) && (e = p + ('=' === e.charAt(4) ? at('0' + e.substr(3), r) : 0));
    let u,
      f,
      m,
      v = h ? h.time() : 0;
    if ((h && h.seek(0), isNaN(e) || (e = +e), Ne(e)))
      h && (e = z.utils.mapRange(h.scrollTrigger.start, h.scrollTrigger.end, 0, p, e)), a && lt(a, r, i, !0);
    else {
      Le(t) && (t = t(n));
      let o,
        d,
        p,
        h,
        g = (e || '0').split(' ');
      (m = M(t, n) || W),
        (o = Ke(m) || {}),
        (o && (o.left || o.top)) ||
          'none' !== Ge(m).display ||
          ((h = m.style.display),
          (m.style.display = 'block'),
          (o = Ke(m)),
          h ? (m.style.display = h) : m.style.removeProperty('display')),
        (d = at(g[0], o[i.d])),
        (p = at(g[1] || '0', r)),
        (e = o[i.p] - l[i.p] - c + d + s - p),
        a && lt(a, p, i, r - p < 20 || (a._isStart && p > 20)),
        (r -= r - p);
    }
    if ((g && ((n[g] = e || -0.001), e < 0 && (e = 0)), o)) {
      let t = e + r,
        s = o._isStart;
      (u = 'scroll' + i.d2),
        lt(o, t, i, (s && t > 20) || (!s && (d ? Math.max(W[u], F[u]) : o.parentNode[u]) <= t + 1)),
        d && ((l = Ke(a)), d && (o.style[i.op.p] = l[i.op.p] - i.op.m - o._offset + Ve));
    }
    return (
      h &&
        m &&
        ((u = Ke(m)), h.seek(p), (f = Ke(m)), (h._caScrollDist = u[i.p] - f[i.p]), (e = (e / h._caScrollDist) * p)),
      h && h.seek(v),
      h ? e : Math.round(e)
    );
  },
  zt = /(webkit|moz|length|cssText|inset)/i,
  Bt = (e, t, r, i) => {
    if (e.parentNode !== t) {
      let s,
        o,
        a = e.style;
      if (t === W) {
        for (s in ((e._stOrig = a.cssText), (o = Ge(e)), o))
          +s || zt.test(s) || !o[s] || 'string' != typeof a[s] || '0' === s || (a[s] = o[s]);
        (a.top = r), (a.left = i);
      } else a.cssText = e._stOrig;
      (z.core.getCache(e).uncache = 1), t.appendChild(e);
    }
  },
  Lt = (e, t, r) => {
    let i = t,
      s = i;
    return (t) => {
      let o = Math.round(e());
      return (
        o !== i && o !== s && Math.abs(o - i) > 3 && Math.abs(o - s) > 3 && ((t = o), r && r()), (s = i), (i = t), t
      );
    };
  },
  Nt = (e, t, r) => {
    let i = {};
    (i[t.p] = '+=' + r), z.set(e, i);
  },
  Ft = (e, t) => {
    let r = O(e, t),
      i = '_scroll' + t.p2,
      s = (t, o, a, n, l) => {
        let c = s.tween,
          d = o.onComplete,
          p = {};
        a = a || r();
        let h = Lt(r, a, () => {
          c.kill(), (s.tween = 0);
        });
        return (
          (l = (n && l) || 0),
          (n = n || t - a),
          c && c.kill(),
          (o[i] = t),
          (o.modifiers = p),
          (p[i] = () => h(a + n * c.ratio + l * c.ratio * c.ratio)),
          (o.onUpdate = () => {
            v.cache++, Pt();
          }),
          (o.onComplete = () => {
            (s.tween = 0), d && d.call(c);
          }),
          (c = s.tween = z.to(e, o)),
          c
        );
      };
    return (
      (e[i] = r),
      (r.wheelHandler = () => s.tween && s.tween.kill() && (s.tween = 0)),
      et(e, 'wheel', r.wheelHandler),
      Wt.isTouch && et(e, 'touchmove', r.wheelHandler),
      s
    );
  };
class Wt {
  constructor(e, t) {
    B || Wt.register(z) || console.warn('Please gsap.registerPlugin(ScrollTrigger)'), de(this), this.init(e, t);
  }
  init(e, t) {
    if (((this.progress = this.start = 0), this.vars && this.kill(!0, !0), !Te))
      return void (this.update = this.refresh = this.kill = Me);
    e = je(Be(e) || Ne(e) || e.nodeType ? { trigger: e } : e, st);
    let r,
      i,
      s,
      o,
      a,
      n,
      l,
      c,
      d,
      p,
      h,
      g,
      u,
      f,
      m,
      x,
      b,
      _,
      T,
      S,
      C,
      k,
      A,
      R,
      D,
      Y,
      I,
      X,
      B,
      H,
      q,
      j,
      $,
      Q,
      ee,
      te,
      se,
      oe,
      ae,
      {
        onUpdate: ne,
        toggleClass: le,
        id: ce,
        onToggle: de,
        onRefresh: pe,
        scrub: he,
        trigger: ge,
        pin: fe,
        pinSpacing: we,
        invalidateOnRefresh: ke,
        anticipatePin: Ee,
        onScrubComplete: Pe,
        onSnapComplete: Ae,
        once: Re,
        snap: ze,
        pinReparent: Qe,
        pinSpacer: rt,
        containerAnimation: ot,
        fastScrollEnd: lt,
        preventOverlaps: pt,
      } = e,
      gt = e.horizontal || (e.containerAnimation && !1 !== e.horizontal) ? E : P,
      ft = !he && 0 !== he,
      mt = M(e.scroller || L),
      yt = z.core.getCache(mt),
      xt = De(mt),
      bt = 'fixed' === ('pinType' in e ? e.pinType : w(mt, 'pinType') || (xt && 'fixed')),
      wt = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
      _t = ft && e.toggleActions.split(' '),
      St = 'markers' in e ? e.markers : st.markers,
      kt = xt ? 0 : parseFloat(Ge(mt)['border' + gt.p2 + 'Width']) || 0,
      Pt = this,
      Mt = e.onRefreshInit && (() => e.onRefreshInit(Pt)),
      Ot = ((e, t, { d: r, d2: i, a: s }) =>
        (s = w(e, 'getBoundingClientRect')) ? () => s()[r] : () => (t ? Ye(i) : e['client' + i]) || 0)(mt, xt, gt),
      Rt = ((e, t) => (!t || ~y.indexOf(e) ? Ie(e) : () => It))(mt, xt),
      zt = 0,
      Lt = 0,
      Ht = 0,
      qt = O(mt, gt);
    var Ut;
    if (
      ((Pt._startClamp = Pt._endClamp = !1),
      (Pt._dir = gt),
      (Ee *= 45),
      (Pt.scroller = mt),
      (Pt.scroll = ot ? ot.time.bind(ot) : qt),
      (o = qt()),
      (Pt.vars = e),
      (t = t || e.animation),
      'refreshPriority' in e && ((re = 1), -9999 === e.refreshPriority && (ye = Pt)),
      (yt.tweenScroll = yt.tweenScroll || { top: Ft(mt, P), left: Ft(mt, E) }),
      (Pt.tweenTo = r = yt.tweenScroll[gt.p]),
      (Pt.scrubDuration = (e) => {
        ($ = Ne(e) && e),
          $
            ? j
              ? j.duration(e)
              : (j = z.to(t, {
                  ease: 'expo',
                  totalProgress: '+=0',
                  duration: $,
                  paused: !0,
                  onComplete: () => Pe && Pe(Pt),
                }))
            : (j && j.progress(1).kill(), (j = 0));
      }),
      t &&
        ((t.vars.lazy = !1),
        (t._initted && !Pt.isReverted) ||
          (!1 !== t.vars.immediateRender && !1 !== e.immediateRender && t.duration() && t.render(0, !0, !0)),
        (Pt.animation = t.pause()),
        (t.scrollTrigger = Pt),
        Pt.scrubDuration(he),
        (H = 0),
        ce || (ce = t.vars.id)),
      ze &&
        ((Fe(ze) && !ze.push) || (ze = { snapTo: ze }),
        'scrollBehavior' in W.style && z.set(xt ? [W, F] : mt, { scrollBehavior: 'auto' }),
        v.forEach((e) => Le(e) && e.target === (xt ? N.scrollingElement || F : mt) && (e.smooth = !1)),
        (s = Le(ze.snapTo)
          ? ze.snapTo
          : 'labels' === ze.snapTo
          ? (
              (e) => (t) =>
                z.utils.snap($e(e), t)
            )(t)
          : 'labelsDirectional' === ze.snapTo
          ? ((Ut = t), (e, t) => Je($e(Ut))(e, t.direction))
          : !1 !== ze.directional
          ? (e, t) => Je(ze.snapTo)(e, be() - Lt < 500 ? 0 : t.direction)
          : z.utils.snap(ze.snapTo)),
        (Q = ze.duration || { min: 0.1, max: 2 }),
        (Q = Fe(Q) ? V(Q.min, Q.max) : V(Q, Q)),
        (ee = z
          .delayedCall(ze.delay || $ / 2 || 0.1, () => {
            let e = qt(),
              i = be() - Lt < 500,
              o = r.tween;
            if (!(i || Math.abs(Pt.getVelocity()) < 10) || o || Z || zt === e)
              Pt.isActive && zt !== e && ee.restart(!0);
            else {
              let a = (e - n) / f,
                c = t && !ft ? t.totalProgress() : a,
                d = i ? 0 : ((c - q) / (be() - G)) * 1e3 || 0,
                p = z.utils.clamp(-a, 1 - a, (qe(d / 2) * d) / 0.185),
                h = a + (!1 === ze.inertia ? 0 : p),
                g = V(0, 1, s(h, Pt)),
                u = Math.round(n + g * f),
                { onStart: m, onInterrupt: v, onComplete: y } = ze;
              if (e <= l && e >= n && u !== e) {
                if (o && !o._initted && o.data <= qe(u - e)) return;
                !1 === ze.inertia && (p = g - a),
                  r(
                    u,
                    {
                      duration: Q(qe((0.185 * Math.max(qe(h - c), qe(g - c))) / d / 0.05 || 0)),
                      ease: ze.ease || 'power3',
                      data: qe(u - e),
                      onInterrupt: () => ee.restart(!0) && v && v(Pt),
                      onComplete: () => {
                        Pt.update(),
                          (zt = qt()),
                          (H = q = t && !ft ? t.totalProgress() : Pt.progress),
                          Ae && Ae(Pt),
                          y && y(Pt);
                      },
                    },
                    e,
                    p * f,
                    u - e - p * f
                  ),
                  m && m(Pt, r.tween);
              }
            }
          })
          .pause())),
      ce && (dt[ce] = Pt),
      (ge = Pt.trigger = M(ge || (!0 !== fe && fe))),
      (ae = ge && ge._gsap && ge._gsap.stRevert),
      ae && (ae = ae(Pt)),
      (fe = !0 === fe ? ge : M(fe)),
      Be(le) && (le = { targets: ge, className: le }),
      fe &&
        (!1 === we ||
          'margin' === we ||
          (we = !(!we && fe.parentNode && fe.parentNode.style && 'flex' === Ge(fe.parentNode).display) && Ue),
        (Pt.pin = fe),
        (i = z.core.getCache(fe)),
        i.spacer
          ? (m = i.pinState)
          : (rt &&
              ((rt = M(rt)),
              rt && !rt.nodeType && (rt = rt.current || rt.nativeElement),
              (i.spacerIsNative = !!rt),
              rt && (i.spacerState = Yt(rt))),
            (i.spacer = _ = rt || N.createElement('div')),
            _.classList.add('pin-spacer'),
            ce && _.classList.add('pin-spacer-' + ce),
            (i.pinState = m = Yt(fe))),
        !1 !== e.force3D && z.set(fe, { force3D: !0 }),
        (Pt.spacer = _ = i.spacer),
        (B = Ge(fe)),
        (R = B[we + gt.os2]),
        (S = z.getProperty(fe)),
        (C = z.quickSetter(fe, gt.a, Ve)),
        At(fe, _, B),
        (b = Yt(fe))),
      St)
    ) {
      (g = Fe(St) ? je(St, it) : it),
        (p = nt('scroller-start', ce, mt, gt, g, 0)),
        (h = nt('scroller-end', ce, mt, gt, g, 0, p)),
        (T = p['offset' + gt.op.d2]);
      let e = M(w(mt, 'content') || mt);
      (c = this.markerStart = nt('start', ce, e, gt, g, T, 0, ot)),
        (d = this.markerEnd = nt('end', ce, e, gt, g, T, 0, ot)),
        ot && (oe = z.quickSetter([c, d], gt.a, Ve)),
        bt ||
          (y.length && !0 === w(mt, 'fixedMarkers')) ||
          (((e) => {
            let t = Ge(e).position;
            e.style.position = 'absolute' === t || 'fixed' === t ? t : 'relative';
          })(xt ? W : mt),
          z.set([p, h], { force3D: !0 }),
          (Y = z.quickSetter(p, gt.a, Ve)),
          (X = z.quickSetter(h, gt.a, Ve)));
    }
    if (ot) {
      let e = ot.vars.onUpdate,
        t = ot.vars.onUpdateParams;
      ot.eventCallback('onUpdate', () => {
        Pt.update(0, 0, 1), e && e.apply(ot, t || []);
      });
    }
    if (
      ((Pt.previous = () => ct[ct.indexOf(Pt) - 1]),
      (Pt.next = () => ct[ct.indexOf(Pt) + 1]),
      (Pt.revert = (e, r) => {
        if (!r) return Pt.kill(!0);
        let i = !1 !== e || !Pt.enabled,
          s = K;
        i !== Pt.isReverted &&
          (i && ((te = Math.max(qt(), Pt.scroll.rec || 0)), (Ht = Pt.progress), (se = t && t.progress())),
          c && [c, d, p, h].forEach((e) => (e.style.display = i ? 'none' : 'block')),
          i && ((K = Pt), Pt.update(i)),
          !fe ||
            (Qe && Pt.isActive) ||
            (i
              ? ((e, t, r) => {
                  Dt(r);
                  let i = e._gsap;
                  if (i.spacerIsNative) Dt(i.spacerState);
                  else if (e._gsap.swappedIn) {
                    let r = t.parentNode;
                    r && (r.insertBefore(e, t), r.removeChild(t));
                  }
                  e._gsap.swappedIn = !1;
                })(fe, _, m)
              : At(fe, _, Ge(fe), D)),
          i || Pt.update(i),
          (K = s),
          (Pt.isReverted = i));
      }),
      (Pt.refresh = (i, s, g, v) => {
        if ((K || !Pt.enabled) && !s) return;
        if (fe && i && _e) return void et(Wt, 'scrollEnd', vt);
        !me && Mt && Mt(Pt),
          (K = Pt),
          r.tween && !g && (r.tween.kill(), (r.tween = 0)),
          j && j.pause(),
          ke && t && t.revert({ kill: !1 }).invalidate(),
          Pt.isReverted || Pt.revert(!0, !0),
          (Pt._subPinOffset = !1);
        let y,
          w,
          T,
          C,
          R,
          Y,
          X,
          B,
          L,
          H,
          q,
          U,
          V,
          G = Ot(),
          Z = Rt(),
          $ = ot ? ot.duration() : Xe(mt, gt),
          J = f <= 0.01,
          Q = 0,
          re = v || 0,
          oe = Fe(g) ? g.end : e.end,
          ae = e.endTrigger || ge,
          ne = Fe(g) ? g.start : e.start || (0 !== e.start && ge ? (fe ? '0 0' : '0 100%') : 0),
          le = (Pt.pinnedContainer = e.pinnedContainer && M(e.pinnedContainer, Pt)),
          ce = (ge && Math.max(0, ct.indexOf(Pt))) || 0,
          de = ce;
        for (St && Fe(g) && ((U = z.getProperty(p, gt.p)), (V = z.getProperty(h, gt.p))); de--; )
          (Y = ct[de]),
            Y.end || Y.refresh(0, 1) || (K = Pt),
            (X = Y.pin),
            !X || (X !== ge && X !== fe && X !== le) || Y.isReverted || (H || (H = []), H.unshift(Y), Y.revert(!0, !0)),
            Y !== ct[de] && (ce--, de--);
        for (
          Le(ne) && (ne = ne(Pt)),
            ne = Se(ne, 'start', Pt),
            n =
              Xt(ne, ge, G, gt, qt(), c, p, Pt, Z, kt, bt, $, ot, Pt._startClamp && '_startClamp') || (fe ? -0.001 : 0),
            Le(oe) && (oe = oe(Pt)),
            Be(oe) &&
              !oe.indexOf('+=') &&
              (~oe.indexOf(' ')
                ? (oe = (Be(ne) ? ne.split(' ')[0] : '') + oe)
                : ((Q = at(oe.substr(2), G)),
                  (oe = Be(ne)
                    ? ne
                    : (ot ? z.utils.mapRange(0, ot.duration(), ot.scrollTrigger.start, ot.scrollTrigger.end, n) : n) +
                      Q),
                  (ae = ge))),
            oe = Se(oe, 'end', Pt),
            l =
              Math.max(
                n,
                Xt(
                  oe || (ae ? '100% 0' : $),
                  ae,
                  G,
                  gt,
                  qt() + Q,
                  d,
                  h,
                  Pt,
                  Z,
                  kt,
                  bt,
                  $,
                  ot,
                  Pt._endClamp && '_endClamp'
                )
              ) || -0.001,
            Q = 0,
            de = ce;
          de--;

        )
          (Y = ct[de]),
            (X = Y.pin),
            X &&
              Y.start - Y._pinPush <= n &&
              !ot &&
              Y.end > 0 &&
              ((y = Y.end - (Pt._startClamp ? Math.max(0, Y.start) : Y.start)),
              ((X === ge && Y.start - Y._pinPush < n) || X === le) && isNaN(ne) && (Q += y * (1 - Y.progress)),
              X === fe && (re += y));
        if (
          ((n += Q),
          (l += Q),
          Pt._startClamp && (Pt._startClamp += Q),
          Pt._endClamp && !me && ((Pt._endClamp = l || -0.001), (l = Math.min(l, Xe(mt, gt)))),
          (f = l - n || ((n -= 0.01) && 0.001)),
          J && (Ht = z.utils.clamp(0, 1, z.utils.normalize(n, l, te))),
          (Pt._pinPush = re),
          c && Q && ((y = {}), (y[gt.a] = '+=' + Q), le && (y[gt.p] = '-=' + qt()), z.set([c, d], y)),
          fe)
        )
          (y = Ge(fe)),
            (C = gt === P),
            (T = qt()),
            (k = parseFloat(S(gt.a)) + re),
            !$ &&
              l > 1 &&
              ((q = (xt ? N.scrollingElement || F : mt).style),
              (q = { style: q, value: q['overflow' + gt.a.toUpperCase()] }),
              xt &&
                'scroll' !== Ge(W)['overflow' + gt.a.toUpperCase()] &&
                (q.style['overflow' + gt.a.toUpperCase()] = 'scroll')),
            At(fe, _, y),
            (b = Yt(fe)),
            (w = Ke(fe, !0)),
            (B = bt && O(mt, C ? E : P)()),
            we &&
              ((D = [we + gt.os2, f + re + Ve]),
              (D.t = _),
              (de = we === Ue ? Ze(fe, gt) + f + re : 0),
              de && D.push(gt.d, de + Ve),
              Dt(D),
              le &&
                ct.forEach((e) => {
                  e.pin === le && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0);
                }),
              bt && qt(te)),
            bt &&
              ((R = {
                top: w.top + (C ? T - n : B) + Ve,
                left: w.left + (C ? B : T - n) + Ve,
                boxSizing: 'border-box',
                position: 'fixed',
              }),
              (R.width = R.maxWidth = Math.ceil(w.width) + Ve),
              (R.height = R.maxHeight = Math.ceil(w.height) + Ve),
              (R.margin = R.marginTop = R.marginRight = R.marginBottom = R.marginLeft = '0'),
              (R.padding = y.padding),
              (R.paddingTop = y.paddingTop),
              (R.paddingRight = y.paddingRight),
              (R.paddingBottom = y.paddingBottom),
              (R.paddingLeft = y.paddingLeft),
              (x = ((e, t, r) => {
                let i,
                  s = [],
                  o = e.length,
                  a = r ? 8 : 0;
                for (; a < o; a += 2) (i = e[a]), s.push(i, i in t ? t[i] : e[a + 1]);
                return (s.t = e.t), s;
              })(m, R, Qe)),
              me && qt(0)),
            t
              ? ((L = t._initted),
                ie(1),
                t.render(t.duration(), !0, !0),
                (A = S(gt.a) - k + f + re),
                (I = Math.abs(f - A) > 1),
                bt && I && x.splice(x.length - 2, 2),
                t.render(0, !0, !0),
                L || t.invalidate(!0),
                t.parent || t.totalTime(t.totalTime()),
                ie(0))
              : (A = f),
            q &&
              (q.value
                ? (q.style['overflow' + gt.a.toUpperCase()] = q.value)
                : q.style.removeProperty('overflow-' + gt.a));
        else if (ge && qt() && !ot)
          for (w = ge.parentNode; w && w !== W; )
            w._pinOffset && ((n -= w._pinOffset), (l -= w._pinOffset)), (w = w.parentNode);
        H && H.forEach((e) => e.revert(!1, !0)),
          (Pt.start = n),
          (Pt.end = l),
          (o = a = me ? te : qt()),
          ot || me || (o < te && qt(te), (Pt.scroll.rec = 0)),
          Pt.revert(!1, !0),
          (Lt = be()),
          ee && ((zt = -1), ee.restart(!0)),
          (K = 0),
          t && ft && (t._initted || se) && t.progress() !== se && t.progress(se || 0, !0).render(t.time(), !0, !0),
          (J || Ht !== Pt.progress || ot) &&
            (t && !ft && t.totalProgress(ot && n < -0.001 && !Ht ? z.utils.normalize(n, l, 0) : Ht, !0),
            (Pt.progress = J || (o - n) / f === Ht ? 0 : Ht)),
          fe && we && (_._pinOffset = Math.round(Pt.progress * A)),
          j && j.invalidate(),
          isNaN(U) ||
            ((U -= z.getProperty(p, gt.p)),
            (V -= z.getProperty(h, gt.p)),
            Nt(p, gt, U),
            Nt(c, gt, U - (v || 0)),
            Nt(h, gt, V),
            Nt(d, gt, V - (v || 0))),
          J && !me && Pt.update(),
          !pe || me || u || ((u = !0), pe(Pt), (u = !1));
      }),
      (Pt.getVelocity = () => ((qt() - a) / (be() - G)) * 1e3 || 0),
      (Pt.endAnimation = () => {
        We(Pt.callbackAnimation),
          t && (j ? j.progress(1) : t.paused() ? ft || We(t, Pt.direction < 0, 1) : We(t, t.reversed()));
      }),
      (Pt.labelToScroll = (e) => (t && t.labels && (n || Pt.refresh() || n) + (t.labels[e] / t.duration()) * f) || 0),
      (Pt.getTrailing = (e) => {
        let t = ct.indexOf(Pt),
          r = Pt.direction > 0 ? ct.slice(0, t).reverse() : ct.slice(t + 1);
        return (Be(e) ? r.filter((t) => t.vars.preventOverlaps === e) : r).filter((e) =>
          Pt.direction > 0 ? e.end <= n : e.start >= l
        );
      }),
      (Pt.update = (e, i, s) => {
        if (ot && !s && !e) return;
        let c,
          d,
          h,
          g,
          u,
          m,
          v,
          y,
          w = !0 === me ? te : Pt.scroll(),
          T = e ? 0 : (w - n) / f,
          S = T < 0 ? 0 : T > 1 ? 1 : T || 0,
          E = Pt.progress;
        if (
          (i && ((a = o), (o = ot ? qt() : w), ze && ((q = H), (H = t && !ft ? t.totalProgress() : S))),
          Ee && !S && fe && !K && !xe && _e && n < w + ((w - a) / (be() - G)) * Ee && (S = 1e-4),
          S !== E && Pt.enabled)
        ) {
          if (
            ((c = Pt.isActive = !!S && S < 1),
            (d = !!E && E < 1),
            (m = c !== d),
            (u = m || !!S != !!E),
            (Pt.direction = S > E ? 1 : -1),
            (Pt.progress = S),
            u &&
              !K &&
              ((h = S && !E ? 0 : 1 === S ? 1 : 1 === E ? 2 : 3),
              ft &&
                ((g = (!m && 'none' !== _t[h + 1] && _t[h + 1]) || _t[h]),
                (y = t && ('complete' === g || 'reset' === g || g in t)))),
            pt &&
              (m || y) &&
              (y || he || !t) &&
              (Le(pt) ? pt(Pt) : Pt.getTrailing(pt).forEach((e) => e.endAnimation())),
            ft ||
              (!j || K || xe
                ? t && t.totalProgress(S, !(!K || (!Lt && !e)))
                : (j._dp._time - j._start !== j._time && j.render(j._dp._time - j._start),
                  j.resetTo
                    ? j.resetTo('totalProgress', S, t._tTime / t._tDur)
                    : ((j.vars.totalProgress = S), j.invalidate().restart()))),
            fe)
          )
            if ((e && we && (_.style[we + gt.os2] = R), bt)) {
              if (u) {
                if (((v = !e && S > E && l + 1 > w && w + 1 >= Xe(mt, gt)), Qe))
                  if (e || (!c && !v)) Bt(fe, _);
                  else {
                    let e = Ke(fe, !0),
                      t = w - n;
                    Bt(fe, W, e.top + (gt === P ? t : 0) + Ve, e.left + (gt === P ? 0 : t) + Ve);
                  }
                Dt(c || v ? x : b), (I && S < 1 && c) || C(k + (1 !== S || v ? 0 : A));
              }
            } else C(Oe(k + A * S));
          ze && !r.tween && !K && !xe && ee.restart(!0),
            le &&
              (m || (Re && S && (S < 1 || !ue))) &&
              U(le.targets).forEach((e) => e.classList[c || Re ? 'add' : 'remove'](le.className)),
            ne && !ft && !e && ne(Pt),
            u && !K
              ? (ft &&
                  (y &&
                    ('complete' === g
                      ? t.pause().totalProgress(1)
                      : 'reset' === g
                      ? t.restart(!0).pause()
                      : 'restart' === g
                      ? t.restart(!0)
                      : t[g]()),
                  ne && ne(Pt)),
                (!m && ue) ||
                  (de && m && He(Pt, de),
                  wt[h] && He(Pt, wt[h]),
                  Re && (1 === S ? Pt.kill(!1, 1) : (wt[h] = 0)),
                  m || ((h = 1 === S ? 1 : 3), wt[h] && He(Pt, wt[h]))),
                lt &&
                  !c &&
                  Math.abs(Pt.getVelocity()) > (Ne(lt) ? lt : 2500) &&
                  (We(Pt.callbackAnimation), j ? j.progress(1) : We(t, 'reverse' === g ? 1 : !S, 1)))
              : ft && ne && !K && ne(Pt);
        }
        if (X) {
          let e = ot ? (w / ot.duration()) * (ot._caScrollDist || 0) : w;
          Y(e + (p._isFlipped ? 1 : 0)), X(e);
        }
        oe && oe((-w / ot.duration()) * (ot._caScrollDist || 0));
      }),
      (Pt.enable = (e, t) => {
        Pt.enabled ||
          ((Pt.enabled = !0),
          et(mt, 'resize', ut),
          xt || et(mt, 'scroll', ht),
          Mt && et(Wt, 'refreshInit', Mt),
          !1 !== e && ((Pt.progress = Ht = 0), (o = a = zt = qt())),
          !1 !== t && Pt.refresh());
      }),
      (Pt.getTween = (e) => (e && r ? r.tween : j)),
      (Pt.setPositions = (e, t, r, i) => {
        if (ot) {
          let r = ot.scrollTrigger,
            i = ot.duration(),
            s = r.end - r.start;
          (e = r.start + (s * e) / i), (t = r.start + (s * t) / i);
        }
        Pt.refresh(!1, !1, { start: Ce(e, r && !!Pt._startClamp), end: Ce(t, r && !!Pt._endClamp) }, i), Pt.update();
      }),
      (Pt.adjustPinSpacing = (e) => {
        if (D && e) {
          let t = D.indexOf(gt.d) + 1;
          (D[t] = parseFloat(D[t]) + e + Ve), (D[1] = parseFloat(D[1]) + e + Ve), Dt(D);
        }
      }),
      (Pt.disable = (e, t) => {
        if (
          Pt.enabled &&
          (!1 !== e && Pt.revert(!0, !0),
          (Pt.enabled = Pt.isActive = !1),
          t || (j && j.pause()),
          (te = 0),
          i && (i.uncache = 1),
          Mt && tt(Wt, 'refreshInit', Mt),
          ee && (ee.pause(), r.tween && r.tween.kill() && (r.tween = 0)),
          !xt)
        ) {
          let e = ct.length;
          for (; e--; ) if (ct[e].scroller === mt && ct[e] !== Pt) return;
          tt(mt, 'resize', ut), xt || tt(mt, 'scroll', ht);
        }
      }),
      (Pt.kill = (r, s) => {
        Pt.disable(r, s), j && !s && j.kill(), ce && delete dt[ce];
        let o = ct.indexOf(Pt);
        o >= 0 && ct.splice(o, 1),
          o === J && Et > 0 && J--,
          (o = 0),
          ct.forEach((e) => e.scroller === Pt.scroller && (o = 1)),
          o || me || (Pt.scroll.rec = 0),
          t && ((t.scrollTrigger = null), r && t.revert({ kill: !1 }), s || t.kill()),
          c && [c, d, p, h].forEach((e) => e.parentNode && e.parentNode.removeChild(e)),
          ye === Pt && (ye = 0),
          fe && (i && (i.uncache = 1), (o = 0), ct.forEach((e) => e.pin === fe && o++), o || (i.spacer = 0)),
          e.onKill && e.onKill(Pt);
      }),
      ct.push(Pt),
      Pt.enable(!1, !1),
      ae && ae(Pt),
      t && t.add && !f)
    ) {
      let e = Pt.update;
      (Pt.update = () => {
        (Pt.update = e), n || l || Pt.refresh();
      }),
        z.delayedCall(0.01, Pt.update),
        (f = 0.01),
        (n = l = 0);
    } else Pt.refresh();
    fe &&
      (() => {
        if (ve !== Tt) {
          let e = (ve = Tt);
          requestAnimationFrame(() => e === Tt && Ct(!0));
        }
      })();
  }
  static register(e) {
    return B || ((z = e || Re()), Ae() && window.document && Wt.enable(), (B = Te)), B;
  }
  static defaults(e) {
    if (e) for (let t in e) st[t] = e[t];
    return st;
  }
  static disable(e, t) {
    (Te = 0),
      ct.forEach((r) => r[t ? 'kill' : 'disable'](e)),
      tt(L, 'wheel', ht),
      tt(N, 'scroll', ht),
      clearInterval(j),
      tt(N, 'touchcancel', Me),
      tt(W, 'touchstart', Me),
      Qe(tt, N, 'pointerdown,touchstart,mousedown', Ee),
      Qe(tt, N, 'pointerup,touchend,mouseup', Pe),
      q.kill(),
      ze(tt);
    for (let e = 0; e < v.length; e += 3) rt(tt, v[e], v[e + 1]), rt(tt, v[e], v[e + 2]);
  }
  static enable() {
    if (
      ((L = window),
      (N = document),
      (F = N.documentElement),
      (W = N.body),
      z &&
        ((U = z.utils.toArray),
        (V = z.utils.clamp),
        (de = z.core.context || Me),
        (ie = z.core.suppressOverwrites || Me),
        (pe = L.history.scrollRestoration || 'auto'),
        (kt = L.pageYOffset),
        z.core.globals('ScrollTrigger', Wt),
        W))
    ) {
      (Te = 1),
        (he = document.createElement('div')),
        (he.style.height = '100vh'),
        (he.style.position = 'absolute'),
        St(),
        ke(),
        X.register(z),
        (Wt.isTouch = X.isTouch),
        (ce = X.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
        et(L, 'wheel', ht),
        (H = [L, N, F, W]),
        z.matchMedia
          ? ((Wt.matchMedia = (e) => {
              let t,
                r = z.matchMedia();
              for (t in e) r.add(t, e[t]);
              return r;
            }),
            z.addEventListener('matchMediaInit', () => wt()),
            z.addEventListener('matchMediaRevert', () => bt()),
            z.addEventListener('matchMedia', () => {
              Ct(0, 1), yt('matchMedia');
            }),
            z.matchMedia('(orientation: portrait)', () => (gt(), gt)))
          : console.warn('Requires GSAP 3.11.0 or later'),
        gt(),
        et(N, 'scroll', ht);
      let e,
        t,
        r = W.style,
        i = r.borderTopStyle,
        s = z.core.Animation.prototype;
      for (
        s.revert ||
          Object.defineProperty(s, 'revert', {
            value: function () {
              return this.time(-0.01, !0);
            },
          }),
          r.borderTopStyle = 'solid',
          e = Ke(W),
          P.m = Math.round(e.top + P.sc()) || 0,
          E.m = Math.round(e.left + E.sc()) || 0,
          i ? (r.borderTopStyle = i) : r.removeProperty('border-top-style'),
          j = setInterval(pt, 250),
          z.delayedCall(0.5, () => (xe = 0)),
          et(N, 'touchcancel', Me),
          et(W, 'touchstart', Me),
          Qe(et, N, 'pointerdown,touchstart,mousedown', Ee),
          Qe(et, N, 'pointerup,touchend,mouseup', Pe),
          $ = z.utils.checkPrefix('transform'),
          Ot.push($),
          B = be(),
          q = z.delayedCall(0.2, Ct).pause(),
          te = [
            N,
            'visibilitychange',
            () => {
              let e = L.innerWidth,
                t = L.innerHeight;
              N.hidden ? ((Q = e), (ee = t)) : (Q === e && ee === t) || ut();
            },
            N,
            'DOMContentLoaded',
            Ct,
            L,
            'load',
            Ct,
            L,
            'resize',
            ut,
          ],
          ze(et),
          ct.forEach((e) => e.enable(0, 1)),
          t = 0;
        t < v.length;
        t += 3
      )
        rt(tt, v[t], v[t + 1]), rt(tt, v[t], v[t + 2]);
    }
  }
  static config(e) {
    'limitCallbacks' in e && (ue = !!e.limitCallbacks);
    let t = e.syncInterval;
    (t && clearInterval(j)) || ((j = t) && setInterval(pt, t)),
      'ignoreMobileResize' in e && (ae = 1 === Wt.isTouch && e.ignoreMobileResize),
      'autoRefreshEvents' in e &&
        (ze(tt) || ze(et, e.autoRefreshEvents || 'none'), (se = -1 === (e.autoRefreshEvents + '').indexOf('resize')));
  }
  static scrollerProxy(e, t) {
    let r = M(e),
      i = v.indexOf(r),
      s = De(r);
    ~i && v.splice(i, s ? 6 : 2), t && (s ? y.unshift(L, t, W, t, F, t) : y.unshift(r, t));
  }
  static clearMatchMedia(e) {
    ct.forEach((t) => t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0));
  }
  static isInViewport(e, t, r) {
    let i = (Be(e) ? M(e) : e).getBoundingClientRect(),
      s = i[r ? 'width' : 'height'] * t || 0;
    return r ? i.right - s > 0 && i.left + s < L.innerWidth : i.bottom - s > 0 && i.top + s < L.innerHeight;
  }
  static positionInViewport(e, t, r) {
    Be(e) && (e = M(e));
    let i = e.getBoundingClientRect(),
      s = i[r ? 'width' : 'height'],
      o = null == t ? s / 2 : t in ot ? ot[t] * s : ~t.indexOf('%') ? (parseFloat(t) * s) / 100 : parseFloat(t) || 0;
    return r ? (i.left + o) / L.innerWidth : (i.top + o) / L.innerHeight;
  }
  static killAll(e) {
    if ((ct.slice(0).forEach((e) => 'ScrollSmoother' !== e.vars.id && e.kill()), !0 !== e)) {
      let e = ft.killAll || [];
      (ft = {}), e.forEach((e) => e());
    }
  }
}
(Wt.version = '3.12.2'),
  (Wt.saveStyles = (e) =>
    e
      ? U(e).forEach((e) => {
          if (e && e.style) {
            let t = xt.indexOf(e);
            t >= 0 && xt.splice(t, 5),
              xt.push(e, e.style.cssText, e.getBBox && e.getAttribute('transform'), z.core.getCache(e), de());
          }
        })
      : xt),
  (Wt.revert = (e, t) => wt(!e, t)),
  (Wt.create = (e, t) => new Wt(e, t)),
  (Wt.refresh = (e) => (e ? ut() : (B || Wt.register()) && Ct(!0))),
  (Wt.update = (e) => ++v.cache && Pt(!0 === e ? 2 : 0)),
  (Wt.clearScrollMemory = _t),
  (Wt.maxScroll = (e, t) => Xe(e, t ? E : P)),
  (Wt.getScrollFunc = (e, t) => O(M(e), t ? E : P)),
  (Wt.getById = (e) => dt[e]),
  (Wt.getAll = () => ct.filter((e) => 'ScrollSmoother' !== e.vars.id)),
  (Wt.isScrolling = () => !!_e),
  (Wt.snapDirectional = Je),
  (Wt.addEventListener = (e, t) => {
    let r = ft[e] || (ft[e] = []);
    ~r.indexOf(t) || r.push(t);
  }),
  (Wt.removeEventListener = (e, t) => {
    let r = ft[e],
      i = r && r.indexOf(t);
    i >= 0 && r.splice(i, 1);
  }),
  (Wt.batch = (e, t) => {
    let r,
      i = [],
      s = {},
      o = t.interval || 0.016,
      a = t.batchMax || 1e9,
      n = (e, t) => {
        let r = [],
          i = [],
          s = z
            .delayedCall(o, () => {
              t(r, i), (r = []), (i = []);
            })
            .pause();
        return (e) => {
          r.length || s.restart(!0), r.push(e.trigger), i.push(e), a <= r.length && s.progress(1);
        };
      };
    for (r in t) s[r] = 'on' === r.substr(0, 2) && Le(t[r]) && 'onRefreshInit' !== r ? n(0, t[r]) : t[r];
    return (
      Le(a) && ((a = a()), et(Wt, 'refresh', () => (a = t.batchMax()))),
      U(e).forEach((e) => {
        let t = {};
        for (r in s) t[r] = s[r];
        (t.trigger = e), i.push(Wt.create(t));
      }),
      i
    );
  });
let Ht,
  qt = (e, t, r, i) => (t > i ? e(i) : t < 0 && e(0), r > i ? (i - t) / (r - t) : r < 0 ? t / (t - r) : 1),
  Ut = (e, t) => {
    !0 === t
      ? e.style.removeProperty('touch-action')
      : (e.style.touchAction = !0 === t ? 'auto' : t ? 'pan-' + t + (X.isTouch ? ' pinch-zoom' : '') : 'none'),
      e === F && Ut(W, t);
  },
  Vt = { auto: 1, scroll: 1 },
  Gt = ({ event: e, target: t, axis: r }) => {
    let i,
      s = (e.changedTouches ? e.changedTouches[0] : e).target,
      o = s._gsap || z.core.getCache(s),
      a = be();
    if (!o._isScrollT || a - o._isScrollT > 2e3) {
      for (
        ;
        s &&
        s !== W &&
        ((s.scrollHeight <= s.clientHeight && s.scrollWidth <= s.clientWidth) ||
          (!Vt[(i = Ge(s)).overflowY] && !Vt[i.overflowX]));

      )
        s = s.parentNode;
      (o._isScroll = s && s !== t && !De(s) && (Vt[(i = Ge(s)).overflowY] || Vt[i.overflowX])), (o._isScrollT = a);
    }
    (o._isScroll || 'x' === r) && (e.stopPropagation(), (e._gsapAllow = !0));
  },
  jt = (e, t, r, i) =>
    X.create({
      target: e,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: t,
      onWheel: (i = i && Gt),
      onPress: i,
      onDrag: i,
      onScroll: i,
      onEnable: () => r && et(N, X.eventTypes[0], Zt, !1, !0),
      onDisable: () => tt(N, X.eventTypes[0], Zt, !0),
    }),
  Kt = /(input|label|select|textarea)/i,
  Zt = (e) => {
    let t = Kt.test(e.target.tagName);
    (t || Ht) && ((e._gsapAllow = !0), (Ht = t));
  },
  $t = (e) => {
    Fe(e) || (e = {}),
      (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
      e.type || (e.type = 'wheel,touch'),
      (e.debounce = !!e.debounce),
      (e.id = e.id || 'normalizer');
    let t,
      r,
      i,
      s,
      o,
      a,
      n,
      l,
      { normalizeScrollX: c, momentum: d, allowNestedScroll: p, onRelease: h } = e,
      g = M(e.target) || F,
      u = z.core.globals().ScrollSmoother,
      f = u && u.get(),
      m = ce && ((e.content && M(e.content)) || (f && !1 !== e.content && !f.smooth() && f.content())),
      y = O(g, P),
      x = O(g, E),
      b = 1,
      w =
        (X.isTouch && L.visualViewport ? L.visualViewport.scale * L.visualViewport.width : L.outerWidth) / L.innerWidth,
      _ = 0,
      T = Le(d) ? () => d(t) : () => d || 2.8,
      S = jt(g, e.type, !0, p),
      C = () => (s = !1),
      k = Me,
      A = Me,
      R = () => {
        (r = Xe(g, P)), (A = V(ce ? 1 : 0, r)), c && (k = V(0, Xe(g, E))), (i = Tt);
      },
      D = () => {
        (m._gsap.y = Oe(parseFloat(m._gsap.y) + y.offset) + 'px'),
          (m.style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' + parseFloat(m._gsap.y) + ', 0, 1)'),
          (y.offset = y.cacheID = 0);
      },
      Y = () => {
        R(), o.isActive() && o.vars.scrollY > r && (y() > r ? o.progress(1) && y(r) : o.resetTo('scrollY', r));
      };
    return (
      m && z.set(m, { y: '+=0' }),
      (e.ignoreCheck = (e) =>
        (ce &&
          'touchmove' === e.type &&
          (() => {
            if (s) {
              requestAnimationFrame(C);
              let e = Oe(t.deltaY / 2),
                r = A(y.v - e);
              if (m && r !== y.v + y.offset) {
                y.offset = r - y.v;
                let e = Oe((parseFloat(m && m._gsap.y) || 0) - y.offset);
                (m.style.transform = 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ' + e + ', 0, 1)'),
                  (m._gsap.y = e + 'px'),
                  (y.cacheID = v.cache),
                  Pt();
              }
              return !0;
            }
            y.offset && D(), (s = !0);
          })()) ||
        (b > 1.05 && 'touchstart' !== e.type) ||
        t.isGesturing ||
        (e.touches && e.touches.length > 1)),
      (e.onPress = () => {
        s = !1;
        let e = b;
        (b = Oe(((L.visualViewport && L.visualViewport.scale) || 1) / w)),
          o.pause(),
          e !== b && Ut(g, b > 1.01 || (!c && 'x')),
          (a = x()),
          (n = y()),
          R(),
          (i = Tt);
      }),
      (e.onRelease = e.onGestureStart =
        (e, t) => {
          if ((y.offset && D(), t)) {
            v.cache++;
            let t,
              i,
              s = T();
            c &&
              ((t = x()),
              (i = t + (0.05 * s * -e.velocityX) / 0.227),
              (s *= qt(x, t, i, Xe(g, E))),
              (o.vars.scrollX = k(i))),
              (t = y()),
              (i = t + (0.05 * s * -e.velocityY) / 0.227),
              (s *= qt(y, t, i, Xe(g, P))),
              (o.vars.scrollY = A(i)),
              o.invalidate().duration(s).play(0.01),
              ((ce && o.vars.scrollY >= r) || t >= r - 1) && z.to({}, { onUpdate: Y, duration: s });
          } else l.restart(!0);
          h && h(e);
        }),
      (e.onWheel = () => {
        o._ts && o.pause(), be() - _ > 1e3 && ((i = 0), (_ = be()));
      }),
      (e.onChange = (e, t, r, s, o) => {
        if ((Tt !== i && R(), t && c && x(k(s[2] === t ? a + (e.startX - e.x) : x() + t - s[1])), r)) {
          y.offset && D();
          let t = o[2] === r,
            i = t ? n + e.startY - e.y : y() + r - o[1],
            s = A(i);
          t && i !== s && (n += s - i), y(s);
        }
        (r || t) && Pt();
      }),
      (e.onEnable = () => {
        Ut(g, !c && 'x'),
          Wt.addEventListener('refresh', Y),
          et(L, 'resize', Y),
          y.smooth && ((y.target.style.scrollBehavior = 'auto'), (y.smooth = x.smooth = !1)),
          S.enable();
      }),
      (e.onDisable = () => {
        Ut(g, !0), tt(L, 'resize', Y), Wt.removeEventListener('refresh', Y), S.kill();
      }),
      (e.lockAxis = !1 !== e.lockAxis),
      (t = new X(e)),
      (t.iOS = ce),
      ce && !y() && y(1),
      ce && z.ticker.add(Me),
      (l = t._dc),
      (o = z.to(t, {
        ease: 'power4',
        paused: !0,
        scrollX: c ? '+=0.1' : '+=0',
        scrollY: '+=0.1',
        modifiers: { scrollY: Lt(y, y(), () => o.pause()) },
        onUpdate: Pt,
        onComplete: l.vars.onComplete,
      })),
      t
    );
  };
(Wt.sort = (e) =>
  ct.sort(
    e || ((e, t) => -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0)))
  )),
  (Wt.observe = (e) => new X(e)),
  (Wt.normalizeScroll = (e) => {
    if (void 0 === e) return oe;
    if (!0 === e && oe) return oe.enable();
    if (!1 === e) return oe && oe.kill();
    let t = e instanceof X ? e : $t(e);
    return oe && oe.target === t.target && oe.kill(), De(t.target) && (oe = t), t;
  }),
  (Wt.core = {
    _getVelocityProp: A,
    _inputObserver: jt,
    _scrollers: v,
    _proxies: y,
    bridge: {
      ss: () => {
        _e || yt('scrollStart'), (_e = be());
      },
      ref: () => K,
    },
  }),
  Re() && z.registerPlugin(Wt);
export default Wt;
export { Wt as ScrollTrigger };
