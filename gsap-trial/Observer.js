/*!
 * Observer 3.12.2
 * https://greensock.com
 *
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

let e,
  t,
  n,
  r,
  s,
  o,
  l,
  i,
  a,
  c,
  d,
  u,
  g,
  h,
  p = () => e || ('undefined' != typeof window && (e = window.gsap) && e.registerPlugin && e),
  v = 1,
  f = [],
  x = [],
  m = [],
  y = Date.now,
  b = (e, t) => t,
  w = (e, t) => ~m.indexOf(e) && m[m.indexOf(e) + 1][t],
  M = (e) => !!~d.indexOf(e),
  Y = (e, t, n, r, s) => e.addEventListener(t, n, { passive: !r, capture: !!s }),
  _ = (e, t, n, r) => e.removeEventListener(t, n, !!r),
  X = () => (u && u.isPressed) || x.cache++,
  D = (e, t) => {
    let n = (s) => {
      if (s || 0 === s) {
        v && (r.history.scrollRestoration = 'manual');
        let t = u && u.isPressed;
        (s = n.v = Math.round(s) || (u && u.iOS ? 1 : 0)), e(s), (n.cacheID = x.cache), t && b('ss', s);
      } else (t || x.cache !== n.cacheID || b('ref')) && ((n.cacheID = x.cache), (n.v = e()));
      return n.v + n.offset;
    };
    return (n.offset = 0), e && n;
  },
  T = {
    s: 'scrollLeft',
    p: 'left',
    p2: 'Left',
    os: 'right',
    os2: 'Right',
    d: 'width',
    d2: 'Width',
    a: 'x',
    sc: D(function (e) {
      return arguments.length
        ? r.scrollTo(e, E.sc())
        : r.pageXOffset || s.scrollLeft || o.scrollLeft || l.scrollLeft || 0;
    }),
  },
  E = {
    s: 'scrollTop',
    p: 'top',
    p2: 'Top',
    os: 'bottom',
    os2: 'Bottom',
    d: 'height',
    d2: 'Height',
    a: 'y',
    op: T,
    sc: D(function (e) {
      return arguments.length ? r.scrollTo(T.sc(), e) : r.pageYOffset || s.scrollTop || o.scrollTop || l.scrollTop || 0;
    }),
  },
  P = (t, n) =>
    ((n && n._ctx && n._ctx.selector) || e.utils.toArray)(t)[0] ||
    ('string' == typeof t && !1 !== e.config().nullTargetWarn ? console.warn('Element not found:', t) : null),
  O = (t, { s: n, sc: r }) => {
    M(t) && (t = s.scrollingElement || o);
    let l = x.indexOf(t),
      i = r === E.sc ? 1 : 2;
    !~l && (l = x.push(t) - 1), x[l + i] || Y(t, 'scroll', X);
    let a = x[l + i],
      c =
        a ||
        (x[l + i] =
          D(w(t, n), !0) ||
          (M(t)
            ? r
            : D(function (e) {
                return arguments.length ? (t[n] = e) : t[n];
              })));
    return (c.target = t), a || (c.smooth = 'smooth' === e.getProperty(t, 'scrollBehavior')), c;
  },
  k = (e, t, n) => {
    let r = e,
      s = e,
      o = y(),
      l = o,
      i = t || 50,
      a = Math.max(500, 3 * i),
      c = (e, t) => {
        let a = y();
        t || a - o > i ? ((s = r), (r = e), (l = o), (o = a)) : n ? (r += e) : (r = s + ((e - s) / (a - l)) * (o - l));
      };
    return {
      update: c,
      reset: () => {
        (s = r = n ? 0 : r), (l = o = 0);
      },
      getVelocity: (e) => {
        let t = l,
          i = s,
          d = y();
        return (
          (e || 0 === e) && e !== r && c(e), o === l || d - l > a ? 0 : ((r + (n ? i : -i)) / ((n ? d : o) - t)) * 1e3
        );
      },
    };
  },
  C = (e, t) => (t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e),
  L = (e) => {
    let t = Math.max(...e),
      n = Math.min(...e);
    return Math.abs(t) >= Math.abs(n) ? t : n;
  },
  S = () => {
    (c = e.core.globals().ScrollTrigger),
      c &&
        c.core &&
        (() => {
          let e = c.core,
            t = e.bridge || {},
            n = e._scrollers,
            r = e._proxies;
          n.push(...x), r.push(...m), (x = n), (m = r), (b = (e, n) => t[e](n));
        })();
  },
  A = (c) => (
    (e = c || p()),
    e &&
      'undefined' != typeof document &&
      document.body &&
      ((r = window),
      (s = document),
      (o = s.documentElement),
      (l = s.body),
      (d = [r, s, o, l]),
      (n = e.utils.clamp),
      (h = e.core.context || function () {}),
      (a = 'onpointerenter' in l ? 'pointer' : 'mouse'),
      (i = G.isTouch =
        r.matchMedia && r.matchMedia('(hover: none), (pointer: coarse)').matches
          ? 1
          : 'ontouchstart' in r || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
          ? 2
          : 0),
      (g = G.eventTypes =
        (
          'ontouchstart' in o
            ? 'touchstart,touchmove,touchcancel,touchend'
            : 'onpointerdown' in o
            ? 'pointerdown,pointermove,pointercancel,pointerup'
            : 'mousedown,mousemove,mouseup,mouseup'
        ).split(',')),
      setTimeout(() => (v = 0), 500),
      S(),
      (t = 1)),
    t
  );
(T.op = E), (x.cache = 0);
class G {
  constructor(e) {
    this.init(e);
  }
  init(n) {
    t || A(e) || console.warn('Please gsap.registerPlugin(Observer)'), c || S();
    let {
      tolerance: d,
      dragMinimum: p,
      type: v,
      target: x,
      lineHeight: m,
      debounce: b,
      preventDefault: w,
      onStop: D,
      onStopDelay: G,
      ignore: H,
      wheelSpeed: R,
      event: I,
      onDragStart: B,
      onDragEnd: F,
      onDrag: N,
      onPress: V,
      onRelease: W,
      onRight: q,
      onLeft: z,
      onUp: U,
      onDown: j,
      onChangeX: J,
      onChangeY: K,
      onChange: Q,
      onToggleX: Z,
      onToggleY: $,
      onHover: ee,
      onHoverEnd: te,
      onMove: ne,
      ignoreCheck: re,
      isNormalizer: se,
      onGestureStart: oe,
      onGestureEnd: le,
      onWheel: ie,
      onEnable: ae,
      onDisable: ce,
      onClick: de,
      scrollSpeed: ue,
      capture: ge,
      allowClicks: he,
      lockAxis: pe,
      onLockAxis: ve,
    } = n;
    (this.target = x = P(x) || o),
      (this.vars = n),
      H && (H = e.utils.toArray(H)),
      (d = d || 1e-9),
      (p = p || 0),
      (R = R || 1),
      (ue = ue || 1),
      (v = v || 'wheel,touch,pointer'),
      (b = !1 !== b),
      m || (m = parseFloat(r.getComputedStyle(l).lineHeight) || 22);
    let fe,
      xe,
      me,
      ye,
      be,
      we,
      Me,
      Ye = this,
      _e = 0,
      Xe = 0,
      De = O(x, T),
      Te = O(x, E),
      Ee = De(),
      Pe = Te(),
      Oe = ~v.indexOf('touch') && !~v.indexOf('pointer') && 'pointerdown' === g[0],
      ke = M(x),
      Ce = x.ownerDocument || s,
      Le = [0, 0, 0],
      Se = [0, 0, 0],
      Ae = 0,
      Ge = () => (Ae = y()),
      He = (e, t) =>
        ((Ye.event = e) && H && ~H.indexOf(e.target)) || (t && Oe && 'touch' !== e.pointerType) || (re && re(e, t)),
      Re = () => {
        let e = (Ye.deltaX = L(Le)),
          t = (Ye.deltaY = L(Se)),
          n = Math.abs(e) >= d,
          r = Math.abs(t) >= d;
        Q && (n || r) && Q(Ye, e, t, Le, Se),
          n &&
            (q && Ye.deltaX > 0 && q(Ye),
            z && Ye.deltaX < 0 && z(Ye),
            J && J(Ye),
            Z && Ye.deltaX < 0 != _e < 0 && Z(Ye),
            (_e = Ye.deltaX),
            (Le[0] = Le[1] = Le[2] = 0)),
          r &&
            (j && Ye.deltaY > 0 && j(Ye),
            U && Ye.deltaY < 0 && U(Ye),
            K && K(Ye),
            $ && Ye.deltaY < 0 != Xe < 0 && $(Ye),
            (Xe = Ye.deltaY),
            (Se[0] = Se[1] = Se[2] = 0)),
          (ye || me) && (ne && ne(Ye), me && (N(Ye), (me = !1)), (ye = !1)),
          we && !(we = !1) && ve && ve(Ye),
          be && (ie(Ye), (be = !1)),
          (fe = 0);
      },
      Ie = (e, t, n) => {
        (Le[n] += e),
          (Se[n] += t),
          Ye._vx.update(e),
          Ye._vy.update(t),
          b ? fe || (fe = requestAnimationFrame(Re)) : Re();
      },
      Be = (e, t) => {
        pe && !Me && ((Ye.axis = Me = Math.abs(e) > Math.abs(t) ? 'x' : 'y'), (we = !0)),
          'y' !== Me && ((Le[2] += e), Ye._vx.update(e, !0)),
          'x' !== Me && ((Se[2] += t), Ye._vy.update(t, !0)),
          b ? fe || (fe = requestAnimationFrame(Re)) : Re();
      },
      Fe = (e) => {
        if (He(e, 1)) return;
        let t = (e = C(e, w)).clientX,
          n = e.clientY,
          r = t - Ye.x,
          s = n - Ye.y,
          o = Ye.isDragging;
        (Ye.x = t),
          (Ye.y = n),
          (o || Math.abs(Ye.startX - t) >= p || Math.abs(Ye.startY - n) >= p) &&
            (N && (me = !0), o || (Ye.isDragging = !0), Be(r, s), o || (B && B(Ye)));
      },
      Ne = (Ye.onPress = (e) => {
        He(e, 1) ||
          (e && e.button) ||
          ((Ye.axis = Me = null),
          xe.pause(),
          (Ye.isPressed = !0),
          (e = C(e)),
          (_e = Xe = 0),
          (Ye.startX = Ye.x = e.clientX),
          (Ye.startY = Ye.y = e.clientY),
          Ye._vx.reset(),
          Ye._vy.reset(),
          Y(se ? x : Ce, g[1], Fe, w, !0),
          (Ye.deltaX = Ye.deltaY = 0),
          V && V(Ye));
      }),
      Ve = (Ye.onRelease = (t) => {
        if (He(t, 1)) return;
        _(se ? x : Ce, g[1], Fe, !0);
        let n = !isNaN(Ye.y - Ye.startY),
          s = Ye.isDragging && (Math.abs(Ye.x - Ye.startX) > 3 || Math.abs(Ye.y - Ye.startY) > 3),
          o = C(t);
        !s &&
          n &&
          (Ye._vx.reset(),
          Ye._vy.reset(),
          w &&
            he &&
            e.delayedCall(0.08, () => {
              if (y() - Ae > 300 && !t.defaultPrevented)
                if (t.target.click) t.target.click();
                else if (Ce.createEvent) {
                  let e = Ce.createEvent('MouseEvents');
                  e.initMouseEvent(
                    'click',
                    !0,
                    !0,
                    r,
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
          (Ye.isDragging = Ye.isGesturing = Ye.isPressed = !1),
          D && !se && xe.restart(!0),
          F && s && F(Ye),
          W && W(Ye, s);
      }),
      We = (e) => e.touches && e.touches.length > 1 && (Ye.isGesturing = !0) && oe(e, Ye.isDragging),
      qe = () => (Ye.isGesturing = !1) || le(Ye),
      ze = (e) => {
        if (He(e)) return;
        let t = De(),
          n = Te();
        Ie((t - Ee) * ue, (n - Pe) * ue, 1), (Ee = t), (Pe = n), D && xe.restart(!0);
      },
      Ue = (e) => {
        if (He(e)) return;
        (e = C(e, w)), ie && (be = !0);
        let t = (1 === e.deltaMode ? m : 2 === e.deltaMode ? r.innerHeight : 1) * R;
        Ie(e.deltaX * t, e.deltaY * t, 0), D && !se && xe.restart(!0);
      },
      je = (e) => {
        if (He(e)) return;
        let t = e.clientX,
          n = e.clientY,
          r = t - Ye.x,
          s = n - Ye.y;
        (Ye.x = t), (Ye.y = n), (ye = !0), (r || s) && Be(r, s);
      },
      Je = (e) => {
        (Ye.event = e), ee(Ye);
      },
      Ke = (e) => {
        (Ye.event = e), te(Ye);
      },
      Qe = (e) => He(e) || (C(e, w) && de(Ye));
    (xe = Ye._dc =
      e
        .delayedCall(G || 0.25, () => {
          Ye._vx.reset(), Ye._vy.reset(), xe.pause(), D && D(Ye);
        })
        .pause()),
      (Ye.deltaX = Ye.deltaY = 0),
      (Ye._vx = k(0, 50, !0)),
      (Ye._vy = k(0, 50, !0)),
      (Ye.scrollX = De),
      (Ye.scrollY = Te),
      (Ye.isDragging = Ye.isGesturing = Ye.isPressed = !1),
      h(this),
      (Ye.enable = (e) => (
        Ye.isEnabled ||
          (Y(ke ? Ce : x, 'scroll', X),
          v.indexOf('scroll') >= 0 && Y(ke ? Ce : x, 'scroll', ze, w, ge),
          v.indexOf('wheel') >= 0 && Y(x, 'wheel', Ue, w, ge),
          ((v.indexOf('touch') >= 0 && i) || v.indexOf('pointer') >= 0) &&
            (Y(x, g[0], Ne, w, ge),
            Y(Ce, g[2], Ve),
            Y(Ce, g[3], Ve),
            he && Y(x, 'click', Ge, !1, !0),
            de && Y(x, 'click', Qe),
            oe && Y(Ce, 'gesturestart', We),
            le && Y(Ce, 'gestureend', qe),
            ee && Y(x, a + 'enter', Je),
            te && Y(x, a + 'leave', Ke),
            ne && Y(x, a + 'move', je)),
          (Ye.isEnabled = !0),
          e && e.type && Ne(e),
          ae && ae(Ye)),
        Ye
      )),
      (Ye.disable = () => {
        Ye.isEnabled &&
          (f.filter((e) => e !== Ye && M(e.target)).length || _(ke ? Ce : x, 'scroll', X),
          Ye.isPressed && (Ye._vx.reset(), Ye._vy.reset(), _(se ? x : Ce, g[1], Fe, !0)),
          _(ke ? Ce : x, 'scroll', ze, ge),
          _(x, 'wheel', Ue, ge),
          _(x, g[0], Ne, ge),
          _(Ce, g[2], Ve),
          _(Ce, g[3], Ve),
          _(x, 'click', Ge, !0),
          _(x, 'click', Qe),
          _(Ce, 'gesturestart', We),
          _(Ce, 'gestureend', qe),
          _(x, a + 'enter', Je),
          _(x, a + 'leave', Ke),
          _(x, a + 'move', je),
          (Ye.isEnabled = Ye.isPressed = Ye.isDragging = !1),
          ce && ce(Ye));
      }),
      (Ye.kill = Ye.revert =
        () => {
          Ye.disable();
          let e = f.indexOf(Ye);
          e >= 0 && f.splice(e, 1), u === Ye && (u = 0);
        }),
      f.push(Ye),
      se && M(x) && (u = Ye),
      Ye.enable(I);
  }
  get velocityX() {
    return this._vx.getVelocity();
  }
  get velocityY() {
    return this._vy.getVelocity();
  }
}
(G.version = '3.12.2'),
  (G.create = (e) => new G(e)),
  (G.register = A),
  (G.getAll = () => f.slice()),
  (G.getById = (e) => f.filter((t) => t.vars.id === e)[0]),
  p() && e.registerPlugin(G);
export default G;
export {
  G as Observer,
  w as _getProxyProp,
  O as _getScrollFunc,
  P as _getTarget,
  k as _getVelocityProp,
  T as _horizontal,
  M as _isViewport,
  m as _proxies,
  x as _scrollers,
  E as _vertical,
};
