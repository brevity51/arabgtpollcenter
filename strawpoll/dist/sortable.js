/*! For license information please see sortable.js.LICENSE.txt */
(() => {
  "use strict";
  function t(t, e) {
    var n = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(t);
      e &&
        (o = o.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        n.push.apply(n, o);
    }
    return n;
  }
  function e(e) {
    for (var n = 1; n < arguments.length; n++) {
      var i = null != arguments[n] ? arguments[n] : {};
      n % 2
        ? t(Object(i), !0).forEach(function (t) {
            o(e, t, i[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
        : t(Object(i)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
          });
    }
    return e;
  }
  function n(t) {
    return (
      (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      n(t)
    );
  }
  function o(t, e, n) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = n),
      t
    );
  }
  function i() {
    return (
      (i =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var o in n)
              Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
          }
          return t;
        }),
      i.apply(this, arguments)
    );
  }
  function r(t, e) {
    if (null == t) return {};
    var n,
      o,
      i = (function (t, e) {
        if (null == t) return {};
        var n,
          o,
          i = {},
          r = Object.keys(t);
        for (o = 0; o < r.length; o++)
          (n = r[o]), e.indexOf(n) >= 0 || (i[n] = t[n]);
        return i;
      })(t, e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(t);
      for (o = 0; o < r.length; o++)
        (n = r[o]),
          e.indexOf(n) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(t, n) && (i[n] = t[n]));
    }
    return i;
  }
  function a(t) {
    if ("undefined" != typeof window && window.navigator)
      return !!navigator.userAgent.match(t);
  }
  var l = a(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),
    s = a(/Edge/i),
    c = a(/firefox/i),
    u = a(/safari/i) && !a(/chrome/i) && !a(/android/i),
    d = a(/iP(ad|od|hone)/i),
    h = a(/chrome/i) && a(/android/i),
    f = { capture: !1, passive: !1 };
  function p(t, e, n) {
    t.addEventListener(e, n, !l && f);
  }
  function g(t, e, n) {
    t.removeEventListener(e, n, !l && f);
  }
  function v(t, e) {
    if (e) {
      if ((">" === e[0] && (e = e.substring(1)), t))
        try {
          if (t.matches) return t.matches(e);
          if (t.msMatchesSelector) return t.msMatchesSelector(e);
          if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
        } catch (t) {
          return !1;
        }
      return !1;
    }
  }
  function m(t) {
    return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
  }
  function b(t, e, n, o) {
    if (t) {
      n = n || document;
      do {
        if (
          (null != e &&
            (">" === e[0] ? t.parentNode === n && v(t, e) : v(t, e))) ||
          (o && t === n)
        )
          return t;
        if (t === n) break;
      } while ((t = m(t)));
    }
    return null;
  }
  var y,
    w = /\s+/g;
  function E(t, e, n) {
    if (t && e)
      if (t.classList) t.classList[n ? "add" : "remove"](e);
      else {
        var o = (" " + t.className + " ")
          .replace(w, " ")
          .replace(" " + e + " ", " ");
        t.className = (o + (n ? " " + e : "")).replace(w, " ");
      }
  }
  function D(t, e, n) {
    var o = t && t.style;
    if (o) {
      if (void 0 === n)
        return (
          document.defaultView && document.defaultView.getComputedStyle
            ? (n = document.defaultView.getComputedStyle(t, ""))
            : t.currentStyle && (n = t.currentStyle),
          void 0 === e ? n : n[e]
        );
      e in o || -1 !== e.indexOf("webkit") || (e = "-webkit-" + e),
        (o[e] = n + ("string" == typeof n ? "" : "px"));
    }
  }
  function S(t, e) {
    var n = "";
    if ("string" == typeof t) n = t;
    else
      do {
        var o = D(t, "transform");
        o && "none" !== o && (n = o + " " + n);
      } while (!e && (t = t.parentNode));
    var i =
      window.DOMMatrix ||
      window.WebKitCSSMatrix ||
      window.CSSMatrix ||
      window.MSCSSMatrix;
    return i && new i(n);
  }
  function _(t, e, n) {
    if (t) {
      var o = t.getElementsByTagName(e),
        i = 0,
        r = o.length;
      if (n) for (; i < r; i++) n(o[i], i);
      return o;
    }
    return [];
  }
  function T() {
    return document.scrollingElement || document.documentElement;
  }
  function C(t, e, n, o, i) {
    if (t.getBoundingClientRect || t === window) {
      var r, a, s, c, u, d, h;
      if (
        (t !== window && t.parentNode && t !== T()
          ? ((a = (r = t.getBoundingClientRect()).top),
            (s = r.left),
            (c = r.bottom),
            (u = r.right),
            (d = r.height),
            (h = r.width))
          : ((a = 0),
            (s = 0),
            (c = window.innerHeight),
            (u = window.innerWidth),
            (d = window.innerHeight),
            (h = window.innerWidth)),
        (e || n) && t !== window && ((i = i || t.parentNode), !l))
      )
        do {
          if (
            i &&
            i.getBoundingClientRect &&
            ("none" !== D(i, "transform") ||
              (n && "static" !== D(i, "position")))
          ) {
            var f = i.getBoundingClientRect();
            (a -= f.top + parseInt(D(i, "border-top-width"))),
              (s -= f.left + parseInt(D(i, "border-left-width"))),
              (c = a + r.height),
              (u = s + r.width);
            break;
          }
        } while ((i = i.parentNode));
      if (o && t !== window) {
        var p = S(i || t),
          g = p && p.a,
          v = p && p.d;
        p && ((c = (a /= v) + (d /= v)), (u = (s /= g) + (h /= g)));
      }
      return { top: a, left: s, bottom: c, right: u, width: h, height: d };
    }
  }
  function O(t, e, n) {
    for (var o = P(t, !0), i = C(t)[e]; o; ) {
      var r = C(o)[n];
      if (!("top" === n || "left" === n ? i >= r : i <= r)) return o;
      if (o === T()) break;
      o = P(o, !1);
    }
    return !1;
  }
  function x(t, e, n, o) {
    for (var i = 0, r = 0, a = t.children; r < a.length; ) {
      if (
        "none" !== a[r].style.display &&
        a[r] !== kt.ghost &&
        (o || a[r] !== kt.dragged) &&
        b(a[r], n.draggable, t, !1)
      ) {
        if (i === e) return a[r];
        i++;
      }
      r++;
    }
    return null;
  }
  function N(t, e) {
    for (
      var n = t.lastElementChild;
      n && (n === kt.ghost || "none" === D(n, "display") || (e && !v(n, e)));

    )
      n = n.previousElementSibling;
    return n || null;
  }
  function M(t, e) {
    var n = 0;
    if (!t || !t.parentNode) return -1;
    for (; (t = t.previousElementSibling); )
      "TEMPLATE" === t.nodeName.toUpperCase() ||
        t === kt.clone ||
        (e && !v(t, e)) ||
        n++;
    return n;
  }
  function I(t) {
    var e = 0,
      n = 0,
      o = T();
    if (t)
      do {
        var i = S(t),
          r = i.a,
          a = i.d;
        (e += t.scrollLeft * r), (n += t.scrollTop * a);
      } while (t !== o && (t = t.parentNode));
    return [e, n];
  }
  function P(t, e) {
    if (!t || !t.getBoundingClientRect) return T();
    var n = t,
      o = !1;
    do {
      if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
        var i = D(n);
        if (
          (n.clientWidth < n.scrollWidth &&
            ("auto" == i.overflowX || "scroll" == i.overflowX)) ||
          (n.clientHeight < n.scrollHeight &&
            ("auto" == i.overflowY || "scroll" == i.overflowY))
        ) {
          if (!n.getBoundingClientRect || n === document.body) return T();
          if (o || e) return n;
          o = !0;
        }
      }
    } while ((n = n.parentNode));
    return T();
  }
  function A(t, e) {
    return (
      Math.round(t.top) === Math.round(e.top) &&
      Math.round(t.left) === Math.round(e.left) &&
      Math.round(t.height) === Math.round(e.height) &&
      Math.round(t.width) === Math.round(e.width)
    );
  }
  function k(t, e) {
    return function () {
      if (!y) {
        var n = arguments,
          o = this;
        1 === n.length ? t.call(o, n[0]) : t.apply(o, n),
          (y = setTimeout(function () {
            y = void 0;
          }, e));
      }
    };
  }
  function X(t, e, n) {
    (t.scrollLeft += e), (t.scrollTop += n);
  }
  function Y(t) {
    var e = window.Polymer,
      n = window.jQuery || window.Zepto;
    return e && e.dom
      ? e.dom(t).cloneNode(!0)
      : n
      ? n(t).clone(!0)[0]
      : t.cloneNode(!0);
  }
  var R = "Sortable" + new Date().getTime();
  var B = [],
    F = { initializeByDefault: !0 },
    j = {
      mount: function (t) {
        for (var e in F) F.hasOwnProperty(e) && !(e in t) && (t[e] = F[e]);
        B.forEach(function (e) {
          if (e.pluginName === t.pluginName)
            throw "Sortable: Cannot mount plugin ".concat(
              t.pluginName,
              " more than once"
            );
        }),
          B.push(t);
      },
      pluginEvent: function (t, n, o) {
        var i = this;
        (this.eventCanceled = !1),
          (o.cancel = function () {
            i.eventCanceled = !0;
          });
        var r = t + "Global";
        B.forEach(function (i) {
          n[i.pluginName] &&
            (n[i.pluginName][r] && n[i.pluginName][r](e({ sortable: n }, o)),
            n.options[i.pluginName] &&
              n[i.pluginName][t] &&
              n[i.pluginName][t](e({ sortable: n }, o)));
        });
      },
      initializePlugins: function (t, e, n, o) {
        for (var r in (B.forEach(function (o) {
          var r = o.pluginName;
          if (t.options[r] || o.initializeByDefault) {
            var a = new o(t, e, t.options);
            (a.sortable = t),
              (a.options = t.options),
              (t[r] = a),
              i(n, a.defaults);
          }
        }),
        t.options))
          if (t.options.hasOwnProperty(r)) {
            var a = this.modifyOption(t, r, t.options[r]);
            void 0 !== a && (t.options[r] = a);
          }
      },
      getEventProperties: function (t, e) {
        var n = {};
        return (
          B.forEach(function (o) {
            "function" == typeof o.eventProperties &&
              i(n, o.eventProperties.call(e[o.pluginName], t));
          }),
          n
        );
      },
      modifyOption: function (t, e, n) {
        var o;
        return (
          B.forEach(function (i) {
            t[i.pluginName] &&
              i.optionListeners &&
              "function" == typeof i.optionListeners[e] &&
              (o = i.optionListeners[e].call(t[i.pluginName], n));
          }),
          o
        );
      },
    };
  var H = ["evt"],
    L = function (t, n) {
      var o =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        i = o.evt,
        a = r(o, H);
      j.pluginEvent.bind(kt)(
        t,
        n,
        e(
          {
            dragEl: z,
            parentEl: G,
            ghostEl: U,
            rootEl: V,
            nextEl: q,
            lastDownEl: Z,
            cloneEl: K,
            cloneHidden: Q,
            dragStarted: ut,
            putSortable: ot,
            activeSortable: kt.active,
            originalEvent: i,
            oldIndex: $,
            oldDraggableIndex: tt,
            newIndex: J,
            newDraggableIndex: et,
            hideGhostForTarget: Mt,
            unhideGhostForTarget: It,
            cloneNowHidden: function () {
              Q = !0;
            },
            cloneNowShown: function () {
              Q = !1;
            },
            dispatchSortableEvent: function (t) {
              W({ sortable: n, name: t, originalEvent: i });
            },
          },
          a
        )
      );
    };
  function W(t) {
    !(function (t) {
      var n = t.sortable,
        o = t.rootEl,
        i = t.name,
        r = t.targetEl,
        a = t.cloneEl,
        c = t.toEl,
        u = t.fromEl,
        d = t.oldIndex,
        h = t.newIndex,
        f = t.oldDraggableIndex,
        p = t.newDraggableIndex,
        g = t.originalEvent,
        v = t.putSortable,
        m = t.extraEventProperties;
      if ((n = n || (o && o[R]))) {
        var b,
          y = n.options,
          w = "on" + i.charAt(0).toUpperCase() + i.substr(1);
        !window.CustomEvent || l || s
          ? (b = document.createEvent("Event")).initEvent(i, !0, !0)
          : (b = new CustomEvent(i, { bubbles: !0, cancelable: !0 })),
          (b.to = c || o),
          (b.from = u || o),
          (b.item = r || o),
          (b.clone = a),
          (b.oldIndex = d),
          (b.newIndex = h),
          (b.oldDraggableIndex = f),
          (b.newDraggableIndex = p),
          (b.originalEvent = g),
          (b.pullMode = v ? v.lastPutMode : void 0);
        var E = e(e({}, m), j.getEventProperties(i, n));
        for (var D in E) b[D] = E[D];
        o && o.dispatchEvent(b), y[w] && y[w].call(n, b);
      }
    })(
      e(
        {
          putSortable: ot,
          cloneEl: K,
          targetEl: z,
          rootEl: V,
          oldIndex: $,
          oldDraggableIndex: tt,
          newIndex: J,
          newDraggableIndex: et,
        },
        t
      )
    );
  }
  var z,
    G,
    U,
    V,
    q,
    Z,
    K,
    Q,
    $,
    J,
    tt,
    et,
    nt,
    ot,
    it,
    rt,
    at,
    lt,
    st,
    ct,
    ut,
    dt,
    ht,
    ft,
    pt,
    gt = !1,
    vt = !1,
    mt = [],
    bt = !1,
    yt = !1,
    wt = [],
    Et = !1,
    Dt = [],
    St = "undefined" != typeof document,
    _t = d,
    Tt = s || l ? "cssFloat" : "float",
    Ct = St && !h && !d && "draggable" in document.createElement("div"),
    Ot = (function () {
      if (St) {
        if (l) return !1;
        var t = document.createElement("x");
        return (
          (t.style.cssText = "pointer-events:auto"),
          "auto" === t.style.pointerEvents
        );
      }
    })(),
    xt = function (t, e) {
      var n = D(t),
        o =
          parseInt(n.width) -
          parseInt(n.paddingLeft) -
          parseInt(n.paddingRight) -
          parseInt(n.borderLeftWidth) -
          parseInt(n.borderRightWidth),
        i = x(t, 0, e),
        r = x(t, 1, e),
        a = i && D(i),
        l = r && D(r),
        s = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + C(i).width,
        c = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + C(r).width;
      if ("flex" === n.display)
        return "column" === n.flexDirection ||
          "column-reverse" === n.flexDirection
          ? "vertical"
          : "horizontal";
      if ("grid" === n.display)
        return n.gridTemplateColumns.split(" ").length <= 1
          ? "vertical"
          : "horizontal";
      if (i && a.float && "none" !== a.float) {
        var u = "left" === a.float ? "left" : "right";
        return !r || ("both" !== l.clear && l.clear !== u)
          ? "horizontal"
          : "vertical";
      }
      return i &&
        ("block" === a.display ||
          "flex" === a.display ||
          "table" === a.display ||
          "grid" === a.display ||
          (s >= o && "none" === n[Tt]) ||
          (r && "none" === n[Tt] && s + c > o))
        ? "vertical"
        : "horizontal";
    },
    Nt = function (t) {
      function e(t, n) {
        return function (o, i, r, a) {
          var l =
            o.options.group.name &&
            i.options.group.name &&
            o.options.group.name === i.options.group.name;
          if (null == t && (n || l)) return !0;
          if (null == t || !1 === t) return !1;
          if (n && "clone" === t) return t;
          if ("function" == typeof t) return e(t(o, i, r, a), n)(o, i, r, a);
          var s = (n ? o : i).options.group.name;
          return (
            !0 === t ||
            ("string" == typeof t && t === s) ||
            (t.join && t.indexOf(s) > -1)
          );
        };
      }
      var o = {},
        i = t.group;
      (i && "object" == n(i)) || (i = { name: i }),
        (o.name = i.name),
        (o.checkPull = e(i.pull, !0)),
        (o.checkPut = e(i.put)),
        (o.revertClone = i.revertClone),
        (t.group = o);
    },
    Mt = function () {
      !Ot && U && D(U, "display", "none");
    },
    It = function () {
      !Ot && U && D(U, "display", "");
    };
  St &&
    document.addEventListener(
      "click",
      function (t) {
        if (vt)
          return (
            t.preventDefault(),
            t.stopPropagation && t.stopPropagation(),
            t.stopImmediatePropagation && t.stopImmediatePropagation(),
            (vt = !1),
            !1
          );
      },
      !0
    );
  var Pt = function (t) {
      if (z) {
        t = t.touches ? t.touches[0] : t;
        var e =
          ((i = t.clientX),
          (r = t.clientY),
          mt.some(function (t) {
            var e = t[R].options.emptyInsertThreshold;
            if (e && !N(t)) {
              var n = C(t),
                o = i >= n.left - e && i <= n.right + e,
                l = r >= n.top - e && r <= n.bottom + e;
              return o && l ? (a = t) : void 0;
            }
          }),
          a);
        if (e) {
          var n = {};
          for (var o in t) t.hasOwnProperty(o) && (n[o] = t[o]);
          (n.target = n.rootEl = e),
            (n.preventDefault = void 0),
            (n.stopPropagation = void 0),
            e[R]._onDragOver(n);
        }
      }
      var i, r, a;
    },
    At = function (t) {
      z && z.parentNode[R]._isOutsideThisEl(t.target);
    };
  function kt(t, n) {
    if (!t || !t.nodeType || 1 !== t.nodeType)
      throw "Sortable: `el` must be an HTMLElement, not ".concat(
        {}.toString.call(t)
      );
    (this.el = t), (this.options = n = i({}, n)), (t[R] = this);
    var o,
      r,
      a = {
        group: null,
        sort: !0,
        disabled: !1,
        store: null,
        handle: null,
        draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
        swapThreshold: 1,
        invertSwap: !1,
        invertedSwapThreshold: null,
        removeCloneOnHide: !0,
        direction: function () {
          return xt(t, this.options);
        },
        ghostClass: "sortable-ghost",
        chosenClass: "sortable-chosen",
        dragClass: "sortable-drag",
        ignore: "a, img",
        filter: null,
        preventOnFilter: !0,
        animation: 0,
        easing: null,
        setData: function (t, e) {
          t.setData("Text", e.textContent);
        },
        dropBubble: !1,
        dragoverBubble: !1,
        dataIdAttr: "data-id",
        delay: 0,
        delayOnTouchOnly: !1,
        touchStartThreshold:
          (Number.parseInt ? Number : window).parseInt(
            window.devicePixelRatio,
            10
          ) || 1,
        forceFallback: !1,
        fallbackClass: "sortable-fallback",
        fallbackOnBody: !1,
        fallbackTolerance: 0,
        fallbackOffset: { x: 0, y: 0 },
        supportPointer:
          !1 !== kt.supportPointer && "PointerEvent" in window && !u,
        emptyInsertThreshold: 5,
      };
    for (var l in (j.initializePlugins(this, t, a), a))
      !(l in n) && (n[l] = a[l]);
    for (var s in (Nt(n), this))
      "_" === s.charAt(0) &&
        "function" == typeof this[s] &&
        (this[s] = this[s].bind(this));
    (this.nativeDraggable = !n.forceFallback && Ct),
      this.nativeDraggable && (this.options.touchStartThreshold = 1),
      n.supportPointer
        ? p(t, "pointerdown", this._onTapStart)
        : (p(t, "mousedown", this._onTapStart),
          p(t, "touchstart", this._onTapStart)),
      this.nativeDraggable && (p(t, "dragover", this), p(t, "dragenter", this)),
      mt.push(this.el),
      n.store && n.store.get && this.sort(n.store.get(this) || []),
      i(
        this,
        ((r = []),
        {
          captureAnimationState: function () {
            (r = []),
              this.options.animation &&
                [].slice.call(this.el.children).forEach(function (t) {
                  if ("none" !== D(t, "display") && t !== kt.ghost) {
                    r.push({ target: t, rect: C(t) });
                    var n = e({}, r[r.length - 1].rect);
                    if (t.thisAnimationDuration) {
                      var o = S(t, !0);
                      o && ((n.top -= o.f), (n.left -= o.e));
                    }
                    t.fromRect = n;
                  }
                });
          },
          addAnimationState: function (t) {
            r.push(t);
          },
          removeAnimationState: function (t) {
            r.splice(
              (function (t, e) {
                for (var n in t)
                  if (t.hasOwnProperty(n))
                    for (var o in e)
                      if (e.hasOwnProperty(o) && e[o] === t[n][o])
                        return Number(n);
                return -1;
              })(r, { target: t }),
              1
            );
          },
          animateAll: function (t) {
            var e = this;
            if (!this.options.animation)
              return clearTimeout(o), void ("function" == typeof t && t());
            var n = !1,
              i = 0;
            r.forEach(function (t) {
              var o = 0,
                r = t.target,
                a = r.fromRect,
                l = C(r),
                s = r.prevFromRect,
                c = r.prevToRect,
                u = t.rect,
                d = S(r, !0);
              d && ((l.top -= d.f), (l.left -= d.e)),
                (r.toRect = l),
                r.thisAnimationDuration &&
                  A(s, l) &&
                  !A(a, l) &&
                  (u.top - l.top) / (u.left - l.left) ==
                    (a.top - l.top) / (a.left - l.left) &&
                  (o = (function (t, e, n, o) {
                    return (
                      (Math.sqrt(
                        Math.pow(e.top - t.top, 2) +
                          Math.pow(e.left - t.left, 2)
                      ) /
                        Math.sqrt(
                          Math.pow(e.top - n.top, 2) +
                            Math.pow(e.left - n.left, 2)
                        )) *
                      o.animation
                    );
                  })(u, s, c, e.options)),
                A(l, a) ||
                  ((r.prevFromRect = a),
                  (r.prevToRect = l),
                  o || (o = e.options.animation),
                  e.animate(r, u, l, o)),
                o &&
                  ((n = !0),
                  (i = Math.max(i, o)),
                  clearTimeout(r.animationResetTimer),
                  (r.animationResetTimer = setTimeout(function () {
                    (r.animationTime = 0),
                      (r.prevFromRect = null),
                      (r.fromRect = null),
                      (r.prevToRect = null),
                      (r.thisAnimationDuration = null);
                  }, o)),
                  (r.thisAnimationDuration = o));
            }),
              clearTimeout(o),
              n
                ? (o = setTimeout(function () {
                    "function" == typeof t && t();
                  }, i))
                : "function" == typeof t && t(),
              (r = []);
          },
          animate: function (t, e, n, o) {
            if (o) {
              D(t, "transition", ""), D(t, "transform", "");
              var i = S(this.el),
                r = i && i.a,
                a = i && i.d,
                l = (e.left - n.left) / (r || 1),
                s = (e.top - n.top) / (a || 1);
              (t.animatingX = !!l),
                (t.animatingY = !!s),
                D(t, "transform", "translate3d(" + l + "px," + s + "px,0)"),
                (this.forRepaintDummy = (function (t) {
                  return t.offsetWidth;
                })(t)),
                D(
                  t,
                  "transition",
                  "transform " +
                    o +
                    "ms" +
                    (this.options.easing ? " " + this.options.easing : "")
                ),
                D(t, "transform", "translate3d(0,0,0)"),
                "number" == typeof t.animated && clearTimeout(t.animated),
                (t.animated = setTimeout(function () {
                  D(t, "transition", ""),
                    D(t, "transform", ""),
                    (t.animated = !1),
                    (t.animatingX = !1),
                    (t.animatingY = !1);
                }, o));
            }
          },
        })
      );
  }
  function Xt(t, e, n, o, i, r, a, c) {
    var u,
      d,
      h = t[R],
      f = h.options.onMove;
    return (
      !window.CustomEvent || l || s
        ? (u = document.createEvent("Event")).initEvent("move", !0, !0)
        : (u = new CustomEvent("move", { bubbles: !0, cancelable: !0 })),
      (u.to = e),
      (u.from = t),
      (u.dragged = n),
      (u.draggedRect = o),
      (u.related = i || e),
      (u.relatedRect = r || C(e)),
      (u.willInsertAfter = c),
      (u.originalEvent = a),
      t.dispatchEvent(u),
      f && (d = f.call(h, u, a)),
      d
    );
  }
  function Yt(t) {
    t.draggable = !1;
  }
  function Rt() {
    Et = !1;
  }
  function Bt(t) {
    for (
      var e = t.tagName + t.className + t.src + t.href + t.textContent,
        n = e.length,
        o = 0;
      n--;

    )
      o += e.charCodeAt(n);
    return o.toString(36);
  }
  function Ft(t) {
    return setTimeout(t, 0);
  }
  function jt(t) {
    return clearTimeout(t);
  }
  (kt.prototype = {
    constructor: kt,
    _isOutsideThisEl: function (t) {
      this.el.contains(t) || t === this.el || (dt = null);
    },
    _getDirection: function (t, e) {
      return "function" == typeof this.options.direction
        ? this.options.direction.call(this, t, e, z)
        : this.options.direction;
    },
    _onTapStart: function (t) {
      if (t.cancelable) {
        var e = this,
          n = this.el,
          o = this.options,
          i = o.preventOnFilter,
          r = t.type,
          a =
            (t.touches && t.touches[0]) ||
            (t.pointerType && "touch" === t.pointerType && t),
          l = (a || t).target,
          s =
            (t.target.shadowRoot &&
              ((t.path && t.path[0]) ||
                (t.composedPath && t.composedPath()[0]))) ||
            l,
          c = o.filter;
        if (
          ((function (t) {
            Dt.length = 0;
            for (var e = t.getElementsByTagName("input"), n = e.length; n--; ) {
              var o = e[n];
              o.checked && Dt.push(o);
            }
          })(n),
          !z &&
            !(
              (/mousedown|pointerdown/.test(r) && 0 !== t.button) ||
              o.disabled
            ) &&
            !s.isContentEditable &&
            (this.nativeDraggable ||
              !u ||
              !l ||
              "SELECT" !== l.tagName.toUpperCase()) &&
            !(((l = b(l, o.draggable, n, !1)) && l.animated) || Z === l))
        ) {
          if ((($ = M(l)), (tt = M(l, o.draggable)), "function" == typeof c)) {
            if (c.call(this, t, l, this))
              return (
                W({
                  sortable: e,
                  rootEl: s,
                  name: "filter",
                  targetEl: l,
                  toEl: n,
                  fromEl: n,
                }),
                L("filter", e, { evt: t }),
                void (i && t.cancelable && t.preventDefault())
              );
          } else if (
            c &&
            (c = c.split(",").some(function (o) {
              if ((o = b(s, o.trim(), n, !1)))
                return (
                  W({
                    sortable: e,
                    rootEl: o,
                    name: "filter",
                    targetEl: l,
                    fromEl: n,
                    toEl: n,
                  }),
                  L("filter", e, { evt: t }),
                  !0
                );
            }))
          )
            return void (i && t.cancelable && t.preventDefault());
          (o.handle && !b(s, o.handle, n, !1)) ||
            this._prepareDragStart(t, a, l);
        }
      }
    },
    _prepareDragStart: function (t, e, n) {
      var o,
        i = this,
        r = i.el,
        a = i.options,
        u = r.ownerDocument;
      if (n && !z && n.parentNode === r) {
        var d = C(n);
        if (
          ((V = r),
          (G = (z = n).parentNode),
          (q = z.nextSibling),
          (Z = n),
          (nt = a.group),
          (kt.dragged = z),
          (it = {
            target: z,
            clientX: (e || t).clientX,
            clientY: (e || t).clientY,
          }),
          (st = it.clientX - d.left),
          (ct = it.clientY - d.top),
          (this._lastX = (e || t).clientX),
          (this._lastY = (e || t).clientY),
          (z.style["will-change"] = "all"),
          (o = function () {
            L("delayEnded", i, { evt: t }),
              kt.eventCanceled
                ? i._onDrop()
                : (i._disableDelayedDragEvents(),
                  !c && i.nativeDraggable && (z.draggable = !0),
                  i._triggerDragStart(t, e),
                  W({ sortable: i, name: "choose", originalEvent: t }),
                  E(z, a.chosenClass, !0));
          }),
          a.ignore.split(",").forEach(function (t) {
            _(z, t.trim(), Yt);
          }),
          p(u, "dragover", Pt),
          p(u, "mousemove", Pt),
          p(u, "touchmove", Pt),
          p(u, "mouseup", i._onDrop),
          p(u, "touchend", i._onDrop),
          p(u, "touchcancel", i._onDrop),
          c &&
            this.nativeDraggable &&
            ((this.options.touchStartThreshold = 4), (z.draggable = !0)),
          L("delayStart", this, { evt: t }),
          !a.delay ||
            (a.delayOnTouchOnly && !e) ||
            (this.nativeDraggable && (s || l)))
        )
          o();
        else {
          if (kt.eventCanceled) return void this._onDrop();
          p(u, "mouseup", i._disableDelayedDrag),
            p(u, "touchend", i._disableDelayedDrag),
            p(u, "touchcancel", i._disableDelayedDrag),
            p(u, "mousemove", i._delayedDragTouchMoveHandler),
            p(u, "touchmove", i._delayedDragTouchMoveHandler),
            a.supportPointer &&
              p(u, "pointermove", i._delayedDragTouchMoveHandler),
            (i._dragStartTimer = setTimeout(o, a.delay));
        }
      }
    },
    _delayedDragTouchMoveHandler: function (t) {
      var e = t.touches ? t.touches[0] : t;
      Math.max(
        Math.abs(e.clientX - this._lastX),
        Math.abs(e.clientY - this._lastY)
      ) >=
        Math.floor(
          this.options.touchStartThreshold /
            ((this.nativeDraggable && window.devicePixelRatio) || 1)
        ) && this._disableDelayedDrag();
    },
    _disableDelayedDrag: function () {
      z && Yt(z),
        clearTimeout(this._dragStartTimer),
        this._disableDelayedDragEvents();
    },
    _disableDelayedDragEvents: function () {
      var t = this.el.ownerDocument;
      g(t, "mouseup", this._disableDelayedDrag),
        g(t, "touchend", this._disableDelayedDrag),
        g(t, "touchcancel", this._disableDelayedDrag),
        g(t, "mousemove", this._delayedDragTouchMoveHandler),
        g(t, "touchmove", this._delayedDragTouchMoveHandler),
        g(t, "pointermove", this._delayedDragTouchMoveHandler);
    },
    _triggerDragStart: function (t, e) {
      (e = e || ("touch" == t.pointerType && t)),
        !this.nativeDraggable || e
          ? this.options.supportPointer
            ? p(document, "pointermove", this._onTouchMove)
            : p(document, e ? "touchmove" : "mousemove", this._onTouchMove)
          : (p(z, "dragend", this), p(V, "dragstart", this._onDragStart));
      try {
        document.selection
          ? Ft(function () {
              document.selection.empty();
            })
          : window.getSelection().removeAllRanges();
      } catch (t) {}
    },
    _dragStarted: function (t, e) {
      if (((gt = !1), V && z)) {
        L("dragStarted", this, { evt: e }),
          this.nativeDraggable && p(document, "dragover", At);
        var n = this.options;
        !t && E(z, n.dragClass, !1),
          E(z, n.ghostClass, !0),
          (kt.active = this),
          t && this._appendGhost(),
          W({ sortable: this, name: "start", originalEvent: e });
      } else this._nulling();
    },
    _emulateDragOver: function () {
      if (rt) {
        (this._lastX = rt.clientX), (this._lastY = rt.clientY), Mt();
        for (
          var t = document.elementFromPoint(rt.clientX, rt.clientY), e = t;
          t &&
          t.shadowRoot &&
          (t = t.shadowRoot.elementFromPoint(rt.clientX, rt.clientY)) !== e;

        )
          e = t;
        if ((z.parentNode[R]._isOutsideThisEl(t), e))
          do {
            if (
              e[R] &&
              e[R]._onDragOver({
                clientX: rt.clientX,
                clientY: rt.clientY,
                target: t,
                rootEl: e,
              }) &&
              !this.options.dragoverBubble
            )
              break;
            t = e;
          } while ((e = e.parentNode));
        It();
      }
    },
    _onTouchMove: function (t) {
      if (it) {
        var e = this.options,
          n = e.fallbackTolerance,
          o = e.fallbackOffset,
          i = t.touches ? t.touches[0] : t,
          r = U && S(U, !0),
          a = U && r && r.a,
          l = U && r && r.d,
          s = _t && pt && I(pt),
          c =
            (i.clientX - it.clientX + o.x) / (a || 1) +
            (s ? s[0] - wt[0] : 0) / (a || 1),
          u =
            (i.clientY - it.clientY + o.y) / (l || 1) +
            (s ? s[1] - wt[1] : 0) / (l || 1);
        if (!kt.active && !gt) {
          if (
            n &&
            Math.max(
              Math.abs(i.clientX - this._lastX),
              Math.abs(i.clientY - this._lastY)
            ) < n
          )
            return;
          this._onDragStart(t, !0);
        }
        if (U) {
          r
            ? ((r.e += c - (at || 0)), (r.f += u - (lt || 0)))
            : (r = { a: 1, b: 0, c: 0, d: 1, e: c, f: u });
          var d = "matrix("
            .concat(r.a, ",")
            .concat(r.b, ",")
            .concat(r.c, ",")
            .concat(r.d, ",")
            .concat(r.e, ",")
            .concat(r.f, ")");
          D(U, "webkitTransform", d),
            D(U, "mozTransform", d),
            D(U, "msTransform", d),
            D(U, "transform", d),
            (at = c),
            (lt = u),
            (rt = i);
        }
        t.cancelable && t.preventDefault();
      }
    },
    _appendGhost: function () {
      if (!U) {
        var t = this.options.fallbackOnBody ? document.body : V,
          e = C(z, !0, _t, !0, t),
          n = this.options;
        if (_t) {
          for (
            pt = t;
            "static" === D(pt, "position") &&
            "none" === D(pt, "transform") &&
            pt !== document;

          )
            pt = pt.parentNode;
          pt !== document.body && pt !== document.documentElement
            ? (pt === document && (pt = T()),
              (e.top += pt.scrollTop),
              (e.left += pt.scrollLeft))
            : (pt = T()),
            (wt = I(pt));
        }
        E((U = z.cloneNode(!0)), n.ghostClass, !1),
          E(U, n.fallbackClass, !0),
          E(U, n.dragClass, !0),
          D(U, "transition", ""),
          D(U, "transform", ""),
          D(U, "box-sizing", "border-box"),
          D(U, "margin", 0),
          D(U, "top", e.top),
          D(U, "left", e.left),
          D(U, "width", e.width),
          D(U, "height", e.height),
          D(U, "opacity", "0.8"),
          D(U, "position", _t ? "absolute" : "fixed"),
          D(U, "zIndex", "100000"),
          D(U, "pointerEvents", "none"),
          (kt.ghost = U),
          t.appendChild(U),
          D(
            U,
            "transform-origin",
            (st / parseInt(U.style.width)) * 100 +
              "% " +
              (ct / parseInt(U.style.height)) * 100 +
              "%"
          );
      }
    },
    _onDragStart: function (t, e) {
      var n = this,
        o = t.dataTransfer,
        i = n.options;
      L("dragStart", this, { evt: t }),
        kt.eventCanceled
          ? this._onDrop()
          : (L("setupClone", this),
            kt.eventCanceled ||
              (((K = Y(z)).draggable = !1),
              (K.style["will-change"] = ""),
              this._hideClone(),
              E(K, this.options.chosenClass, !1),
              (kt.clone = K)),
            (n.cloneId = Ft(function () {
              L("clone", n),
                kt.eventCanceled ||
                  (n.options.removeCloneOnHide || V.insertBefore(K, z),
                  n._hideClone(),
                  W({ sortable: n, name: "clone" }));
            })),
            !e && E(z, i.dragClass, !0),
            e
              ? ((vt = !0), (n._loopId = setInterval(n._emulateDragOver, 50)))
              : (g(document, "mouseup", n._onDrop),
                g(document, "touchend", n._onDrop),
                g(document, "touchcancel", n._onDrop),
                o &&
                  ((o.effectAllowed = "move"),
                  i.setData && i.setData.call(n, o, z)),
                p(document, "drop", n),
                D(z, "transform", "translateZ(0)")),
            (gt = !0),
            (n._dragStartId = Ft(n._dragStarted.bind(n, e, t))),
            p(document, "selectstart", n),
            (ut = !0),
            u && D(document.body, "user-select", "none"));
    },
    _onDragOver: function (t) {
      var n,
        o,
        i,
        r,
        a = this.el,
        l = t.target,
        s = this.options,
        c = s.group,
        u = kt.active,
        d = nt === c,
        h = s.sort,
        f = ot || u,
        p = this,
        g = !1;
      if (!Et) {
        if (
          (void 0 !== t.preventDefault && t.cancelable && t.preventDefault(),
          (l = b(l, s.draggable, a, !0)),
          j("dragOver"),
          kt.eventCanceled)
        )
          return g;
        if (
          z.contains(t.target) ||
          (l.animated && l.animatingX && l.animatingY) ||
          p._ignoreWhileAnimating === l
        )
          return Z(!1);
        if (
          ((vt = !1),
          u &&
            !s.disabled &&
            (d
              ? h || (i = G !== V)
              : ot === this ||
                ((this.lastPutMode = nt.checkPull(this, u, z, t)) &&
                  c.checkPut(this, u, z, t))))
        ) {
          if (
            ((r = "vertical" === this._getDirection(t, l)),
            (n = C(z)),
            j("dragOverValid"),
            kt.eventCanceled)
          )
            return g;
          if (i)
            return (
              (G = V),
              H(),
              this._hideClone(),
              j("revert"),
              kt.eventCanceled || (q ? V.insertBefore(z, q) : V.appendChild(z)),
              Z(!0)
            );
          var v = N(a, s.draggable);
          if (
            !v ||
            ((function (t, e, n) {
              var o = C(N(n.el, n.options.draggable));
              return e
                ? t.clientX > o.right + 10 ||
                    (t.clientX <= o.right &&
                      t.clientY > o.bottom &&
                      t.clientX >= o.left)
                : (t.clientX > o.right && t.clientY > o.top) ||
                    (t.clientX <= o.right && t.clientY > o.bottom + 10);
            })(t, r, this) &&
              !v.animated)
          ) {
            if (v === z) return Z(!1);
            if (
              (v && a === t.target && (l = v),
              l && (o = C(l)),
              !1 !== Xt(V, a, z, n, l, o, t, !!l))
            )
              return H(), a.appendChild(z), (G = a), K(), Z(!0);
          } else if (
            v &&
            (function (t, e, n) {
              var o = C(x(n.el, 0, n.options, !0));
              return e
                ? t.clientX < o.left - 10 ||
                    (t.clientY < o.top && t.clientX < o.right)
                : t.clientY < o.top - 10 ||
                    (t.clientY < o.bottom && t.clientX < o.left);
            })(t, r, this)
          ) {
            var m = x(a, 0, s, !0);
            if (m === z) return Z(!1);
            if (((o = C((l = m))), !1 !== Xt(V, a, z, n, l, o, t, !1)))
              return H(), a.insertBefore(z, m), (G = a), K(), Z(!0);
          } else if (l.parentNode === a) {
            o = C(l);
            var y,
              w,
              S,
              _ = z.parentNode !== a,
              T = !(function (t, e, n) {
                var o = n ? t.left : t.top,
                  i = n ? t.right : t.bottom,
                  r = n ? t.width : t.height,
                  a = n ? e.left : e.top,
                  l = n ? e.right : e.bottom,
                  s = n ? e.width : e.height;
                return o === a || i === l || o + r / 2 === a + s / 2;
              })(
                (z.animated && z.toRect) || n,
                (l.animated && l.toRect) || o,
                r
              ),
              I = r ? "top" : "left",
              P = O(l, "top", "top") || O(z, "top", "top"),
              A = P ? P.scrollTop : void 0;
            if (
              (dt !== l &&
                ((w = o[I]), (bt = !1), (yt = (!T && s.invertSwap) || _)),
              (y = (function (t, e, n, o, i, r, a, l) {
                var s = o ? t.clientY : t.clientX,
                  c = o ? n.height : n.width,
                  u = o ? n.top : n.left,
                  d = o ? n.bottom : n.right,
                  h = !1;
                if (!a)
                  if (l && ft < c * i) {
                    if (
                      (!bt &&
                        (1 === ht
                          ? s > u + (c * r) / 2
                          : s < d - (c * r) / 2) &&
                        (bt = !0),
                      bt)
                    )
                      h = !0;
                    else if (1 === ht ? s < u + ft : s > d - ft) return -ht;
                  } else if (
                    s > u + (c * (1 - i)) / 2 &&
                    s < d - (c * (1 - i)) / 2
                  )
                    return (function (t) {
                      return M(z) < M(t) ? 1 : -1;
                    })(e);
                return (h = h || a) &&
                  (s < u + (c * r) / 2 || s > d - (c * r) / 2)
                  ? s > u + c / 2
                    ? 1
                    : -1
                  : 0;
              })(
                t,
                l,
                o,
                r,
                T ? 1 : s.swapThreshold,
                null == s.invertedSwapThreshold
                  ? s.swapThreshold
                  : s.invertedSwapThreshold,
                yt,
                dt === l
              )),
              0 !== y)
            ) {
              var k = M(z);
              do {
                (k -= y), (S = G.children[k]);
              } while (S && ("none" === D(S, "display") || S === U));
            }
            if (0 === y || S === l) return Z(!1);
            (dt = l), (ht = y);
            var Y = l.nextElementSibling,
              B = !1,
              F = Xt(V, a, z, n, l, o, t, (B = 1 === y));
            if (!1 !== F)
              return (
                (1 !== F && -1 !== F) || (B = 1 === F),
                (Et = !0),
                setTimeout(Rt, 30),
                H(),
                B && !Y
                  ? a.appendChild(z)
                  : l.parentNode.insertBefore(z, B ? Y : l),
                P && X(P, 0, A - P.scrollTop),
                (G = z.parentNode),
                void 0 === w || yt || (ft = Math.abs(w - C(l)[I])),
                K(),
                Z(!0)
              );
          }
          if (a.contains(z)) return Z(!1);
        }
        return !1;
      }
      function j(s, c) {
        L(
          s,
          p,
          e(
            {
              evt: t,
              isOwner: d,
              axis: r ? "vertical" : "horizontal",
              revert: i,
              dragRect: n,
              targetRect: o,
              canSort: h,
              fromSortable: f,
              target: l,
              completed: Z,
              onMove: function (e, o) {
                return Xt(V, a, z, n, e, C(e), t, o);
              },
              changed: K,
            },
            c
          )
        );
      }
      function H() {
        j("dragOverAnimationCapture"),
          p.captureAnimationState(),
          p !== f && f.captureAnimationState();
      }
      function Z(e) {
        return (
          j("dragOverCompleted", { insertion: e }),
          e &&
            (d ? u._hideClone() : u._showClone(p),
            p !== f &&
              (E(z, ot ? ot.options.ghostClass : u.options.ghostClass, !1),
              E(z, s.ghostClass, !0)),
            ot !== p && p !== kt.active
              ? (ot = p)
              : p === kt.active && ot && (ot = null),
            f === p && (p._ignoreWhileAnimating = l),
            p.animateAll(function () {
              j("dragOverAnimationComplete"), (p._ignoreWhileAnimating = null);
            }),
            p !== f && (f.animateAll(), (f._ignoreWhileAnimating = null))),
          ((l === z && !z.animated) || (l === a && !l.animated)) && (dt = null),
          s.dragoverBubble ||
            t.rootEl ||
            l === document ||
            (z.parentNode[R]._isOutsideThisEl(t.target), !e && Pt(t)),
          !s.dragoverBubble && t.stopPropagation && t.stopPropagation(),
          (g = !0)
        );
      }
      function K() {
        (J = M(z)),
          (et = M(z, s.draggable)),
          W({
            sortable: p,
            name: "change",
            toEl: a,
            newIndex: J,
            newDraggableIndex: et,
            originalEvent: t,
          });
      }
    },
    _ignoreWhileAnimating: null,
    _offMoveEvents: function () {
      g(document, "mousemove", this._onTouchMove),
        g(document, "touchmove", this._onTouchMove),
        g(document, "pointermove", this._onTouchMove),
        g(document, "dragover", Pt),
        g(document, "mousemove", Pt),
        g(document, "touchmove", Pt);
    },
    _offUpEvents: function () {
      var t = this.el.ownerDocument;
      g(t, "mouseup", this._onDrop),
        g(t, "touchend", this._onDrop),
        g(t, "pointerup", this._onDrop),
        g(t, "touchcancel", this._onDrop),
        g(document, "selectstart", this);
    },
    _onDrop: function (t) {
      var e = this.el,
        n = this.options;
      (J = M(z)),
        (et = M(z, n.draggable)),
        L("drop", this, { evt: t }),
        (G = z && z.parentNode),
        (J = M(z)),
        (et = M(z, n.draggable)),
        kt.eventCanceled ||
          ((gt = !1),
          (yt = !1),
          (bt = !1),
          clearInterval(this._loopId),
          clearTimeout(this._dragStartTimer),
          jt(this.cloneId),
          jt(this._dragStartId),
          this.nativeDraggable &&
            (g(document, "drop", this), g(e, "dragstart", this._onDragStart)),
          this._offMoveEvents(),
          this._offUpEvents(),
          u && D(document.body, "user-select", ""),
          D(z, "transform", ""),
          t &&
            (ut &&
              (t.cancelable && t.preventDefault(),
              !n.dropBubble && t.stopPropagation()),
            U && U.parentNode && U.parentNode.removeChild(U),
            (V === G || (ot && "clone" !== ot.lastPutMode)) &&
              K &&
              K.parentNode &&
              K.parentNode.removeChild(K),
            z &&
              (this.nativeDraggable && g(z, "dragend", this),
              Yt(z),
              (z.style["will-change"] = ""),
              ut &&
                !gt &&
                E(z, ot ? ot.options.ghostClass : this.options.ghostClass, !1),
              E(z, this.options.chosenClass, !1),
              W({
                sortable: this,
                name: "unchoose",
                toEl: G,
                newIndex: null,
                newDraggableIndex: null,
                originalEvent: t,
              }),
              V !== G
                ? (J >= 0 &&
                    (W({
                      rootEl: G,
                      name: "add",
                      toEl: G,
                      fromEl: V,
                      originalEvent: t,
                    }),
                    W({
                      sortable: this,
                      name: "remove",
                      toEl: G,
                      originalEvent: t,
                    }),
                    W({
                      rootEl: G,
                      name: "sort",
                      toEl: G,
                      fromEl: V,
                      originalEvent: t,
                    }),
                    W({
                      sortable: this,
                      name: "sort",
                      toEl: G,
                      originalEvent: t,
                    })),
                  ot && ot.save())
                : J !== $ &&
                  J >= 0 &&
                  (W({
                    sortable: this,
                    name: "update",
                    toEl: G,
                    originalEvent: t,
                  }),
                  W({
                    sortable: this,
                    name: "sort",
                    toEl: G,
                    originalEvent: t,
                  })),
              kt.active &&
                ((null != J && -1 !== J) || ((J = $), (et = tt)),
                W({ sortable: this, name: "end", toEl: G, originalEvent: t }),
                this.save())))),
        this._nulling();
    },
    _nulling: function () {
      L("nulling", this),
        (V =
          z =
          G =
          U =
          q =
          K =
          Z =
          Q =
          it =
          rt =
          ut =
          J =
          et =
          $ =
          tt =
          dt =
          ht =
          ot =
          nt =
          kt.dragged =
          kt.ghost =
          kt.clone =
          kt.active =
            null),
        Dt.forEach(function (t) {
          t.checked = !0;
        }),
        (Dt.length = at = lt = 0);
    },
    handleEvent: function (t) {
      switch (t.type) {
        case "drop":
        case "dragend":
          this._onDrop(t);
          break;
        case "dragenter":
        case "dragover":
          z &&
            (this._onDragOver(t),
            (function (t) {
              t.dataTransfer && (t.dataTransfer.dropEffect = "move"),
                t.cancelable && t.preventDefault();
            })(t));
          break;
        case "selectstart":
          t.preventDefault();
      }
    },
    toArray: function () {
      for (
        var t,
          e = [],
          n = this.el.children,
          o = 0,
          i = n.length,
          r = this.options;
        o < i;
        o++
      )
        b((t = n[o]), r.draggable, this.el, !1) &&
          e.push(t.getAttribute(r.dataIdAttr) || Bt(t));
      return e;
    },
    sort: function (t, e) {
      var n = {},
        o = this.el;
      this.toArray().forEach(function (t, e) {
        var i = o.children[e];
        b(i, this.options.draggable, o, !1) && (n[t] = i);
      }, this),
        e && this.captureAnimationState(),
        t.forEach(function (t) {
          n[t] && (o.removeChild(n[t]), o.appendChild(n[t]));
        }),
        e && this.animateAll();
    },
    save: function () {
      var t = this.options.store;
      t && t.set && t.set(this);
    },
    closest: function (t, e) {
      return b(t, e || this.options.draggable, this.el, !1);
    },
    option: function (t, e) {
      var n = this.options;
      if (void 0 === e) return n[t];
      var o = j.modifyOption(this, t, e);
      (n[t] = void 0 !== o ? o : e), "group" === t && Nt(n);
    },
    destroy: function () {
      L("destroy", this);
      var t = this.el;
      (t[R] = null),
        g(t, "mousedown", this._onTapStart),
        g(t, "touchstart", this._onTapStart),
        g(t, "pointerdown", this._onTapStart),
        this.nativeDraggable &&
          (g(t, "dragover", this), g(t, "dragenter", this)),
        Array.prototype.forEach.call(
          t.querySelectorAll("[draggable]"),
          function (t) {
            t.removeAttribute("draggable");
          }
        ),
        this._onDrop(),
        this._disableDelayedDragEvents(),
        mt.splice(mt.indexOf(this.el), 1),
        (this.el = t = null);
    },
    _hideClone: function () {
      if (!Q) {
        if ((L("hideClone", this), kt.eventCanceled)) return;
        D(K, "display", "none"),
          this.options.removeCloneOnHide &&
            K.parentNode &&
            K.parentNode.removeChild(K),
          (Q = !0);
      }
    },
    _showClone: function (t) {
      if ("clone" === t.lastPutMode) {
        if (Q) {
          if ((L("showClone", this), kt.eventCanceled)) return;
          z.parentNode != V || this.options.group.revertClone
            ? q
              ? V.insertBefore(K, q)
              : V.appendChild(K)
            : V.insertBefore(K, z),
            this.options.group.revertClone && this.animate(z, K),
            D(K, "display", ""),
            (Q = !1);
        }
      } else this._hideClone();
    },
  }),
    St &&
      p(document, "touchmove", function (t) {
        (kt.active || gt) && t.cancelable && t.preventDefault();
      }),
    (kt.utils = {
      on: p,
      off: g,
      css: D,
      find: _,
      is: function (t, e) {
        return !!b(t, e, t, !1);
      },
      extend: function (t, e) {
        if (t && e) for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t;
      },
      throttle: k,
      closest: b,
      toggleClass: E,
      clone: Y,
      index: M,
      nextTick: Ft,
      cancelNextTick: jt,
      detectDirection: xt,
      getChild: x,
    }),
    (kt.get = function (t) {
      return t[R];
    }),
    (kt.mount = function () {
      for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
        n[o] = arguments[o];
      n[0].constructor === Array && (n = n[0]),
        n.forEach(function (t) {
          if (!t.prototype || !t.prototype.constructor)
            throw "Sortable: Mounted plugin must be a constructor function, not ".concat(
              {}.toString.call(t)
            );
          t.utils && (kt.utils = e(e({}, kt.utils), t.utils)), j.mount(t);
        });
    }),
    (kt.create = function (t, e) {
      return new kt(t, e);
    }),
    (kt.version = "1.14.0");
  var Ht,
    Lt,
    Wt,
    zt,
    Gt,
    Ut,
    Vt = [],
    qt = !1;
  function Zt() {
    Vt.forEach(function (t) {
      clearInterval(t.pid);
    }),
      (Vt = []);
  }
  function Kt() {
    clearInterval(Ut);
  }
  var Qt = k(function (t, e, n, o) {
      if (e.scroll) {
        var i,
          r = (t.touches ? t.touches[0] : t).clientX,
          a = (t.touches ? t.touches[0] : t).clientY,
          l = e.scrollSensitivity,
          s = e.scrollSpeed,
          c = T(),
          u = !1;
        Lt !== n &&
          ((Lt = n),
          Zt(),
          (Ht = e.scroll),
          (i = e.scrollFn),
          !0 === Ht && (Ht = P(n, !0)));
        var d = 0,
          h = Ht;
        do {
          var f = h,
            p = C(f),
            g = p.top,
            v = p.bottom,
            m = p.left,
            b = p.right,
            y = p.width,
            w = p.height,
            E = void 0,
            S = void 0,
            _ = f.scrollWidth,
            O = f.scrollHeight,
            x = D(f),
            N = f.scrollLeft,
            M = f.scrollTop;
          f === c
            ? ((E =
                y < _ &&
                ("auto" === x.overflowX ||
                  "scroll" === x.overflowX ||
                  "visible" === x.overflowX)),
              (S =
                w < O &&
                ("auto" === x.overflowY ||
                  "scroll" === x.overflowY ||
                  "visible" === x.overflowY)))
            : ((E =
                y < _ && ("auto" === x.overflowX || "scroll" === x.overflowX)),
              (S =
                w < O && ("auto" === x.overflowY || "scroll" === x.overflowY)));
          var I =
              E &&
              (Math.abs(b - r) <= l && N + y < _) -
                (Math.abs(m - r) <= l && !!N),
            A =
              S &&
              (Math.abs(v - a) <= l && M + w < O) -
                (Math.abs(g - a) <= l && !!M);
          if (!Vt[d]) for (var k = 0; k <= d; k++) Vt[k] || (Vt[k] = {});
          (Vt[d].vx == I && Vt[d].vy == A && Vt[d].el === f) ||
            ((Vt[d].el = f),
            (Vt[d].vx = I),
            (Vt[d].vy = A),
            clearInterval(Vt[d].pid),
            (0 == I && 0 == A) ||
              ((u = !0),
              (Vt[d].pid = setInterval(
                function () {
                  o && 0 === this.layer && kt.active._onTouchMove(Gt);
                  var e = Vt[this.layer].vy ? Vt[this.layer].vy * s : 0,
                    n = Vt[this.layer].vx ? Vt[this.layer].vx * s : 0;
                  ("function" == typeof i &&
                    "continue" !==
                      i.call(
                        kt.dragged.parentNode[R],
                        n,
                        e,
                        t,
                        Gt,
                        Vt[this.layer].el
                      )) ||
                    X(Vt[this.layer].el, n, e);
                }.bind({ layer: d }),
                24
              )))),
            d++;
        } while (e.bubbleScroll && h !== c && (h = P(h, !1)));
        qt = u;
      }
    }, 30),
    $t = function (t) {
      var e = t.originalEvent,
        n = t.putSortable,
        o = t.dragEl,
        i = t.activeSortable,
        r = t.dispatchSortableEvent,
        a = t.hideGhostForTarget,
        l = t.unhideGhostForTarget;
      if (e) {
        var s = n || i;
        a();
        var c =
            e.changedTouches && e.changedTouches.length
              ? e.changedTouches[0]
              : e,
          u = document.elementFromPoint(c.clientX, c.clientY);
        l(),
          s &&
            !s.el.contains(u) &&
            (r("spill"), this.onSpill({ dragEl: o, putSortable: n }));
      }
    };
  function Jt() {}
  function te() {}
  (Jt.prototype = {
    startIndex: null,
    dragStart: function (t) {
      var e = t.oldDraggableIndex;
      this.startIndex = e;
    },
    onSpill: function (t) {
      var e = t.dragEl,
        n = t.putSortable;
      this.sortable.captureAnimationState(), n && n.captureAnimationState();
      var o = x(this.sortable.el, this.startIndex, this.options);
      o ? this.sortable.el.insertBefore(e, o) : this.sortable.el.appendChild(e),
        this.sortable.animateAll(),
        n && n.animateAll();
    },
    drop: $t,
  }),
    i(Jt, { pluginName: "revertOnSpill" }),
    (te.prototype = {
      onSpill: function (t) {
        var e = t.dragEl,
          n = t.putSortable || this.sortable;
        n.captureAnimationState(),
          e.parentNode && e.parentNode.removeChild(e),
          n.animateAll();
      },
      drop: $t,
    }),
    i(te, { pluginName: "removeOnSpill" }),
    kt.mount(
      new (function () {
        function t() {
          for (var t in ((this.defaults = {
            scroll: !0,
            forceAutoScrollFallback: !1,
            scrollSensitivity: 30,
            scrollSpeed: 10,
            bubbleScroll: !0,
          }),
          this))
            "_" === t.charAt(0) &&
              "function" == typeof this[t] &&
              (this[t] = this[t].bind(this));
        }
        return (
          (t.prototype = {
            dragStarted: function (t) {
              var e = t.originalEvent;
              this.sortable.nativeDraggable
                ? p(document, "dragover", this._handleAutoScroll)
                : this.options.supportPointer
                ? p(document, "pointermove", this._handleFallbackAutoScroll)
                : e.touches
                ? p(document, "touchmove", this._handleFallbackAutoScroll)
                : p(document, "mousemove", this._handleFallbackAutoScroll);
            },
            dragOverCompleted: function (t) {
              var e = t.originalEvent;
              this.options.dragOverBubble ||
                e.rootEl ||
                this._handleAutoScroll(e);
            },
            drop: function () {
              this.sortable.nativeDraggable
                ? g(document, "dragover", this._handleAutoScroll)
                : (g(document, "pointermove", this._handleFallbackAutoScroll),
                  g(document, "touchmove", this._handleFallbackAutoScroll),
                  g(document, "mousemove", this._handleFallbackAutoScroll)),
                Kt(),
                Zt(),
                clearTimeout(y),
                (y = void 0);
            },
            nulling: function () {
              (Gt = Lt = Ht = qt = Ut = Wt = zt = null), (Vt.length = 0);
            },
            _handleFallbackAutoScroll: function (t) {
              this._handleAutoScroll(t, !0);
            },
            _handleAutoScroll: function (t, e) {
              var n = this,
                o = (t.touches ? t.touches[0] : t).clientX,
                i = (t.touches ? t.touches[0] : t).clientY,
                r = document.elementFromPoint(o, i);
              if (
                ((Gt = t),
                e || this.options.forceAutoScrollFallback || s || l || u)
              ) {
                Qt(t, this.options, r, e);
                var a = P(r, !0);
                !qt ||
                  (Ut && o === Wt && i === zt) ||
                  (Ut && Kt(),
                  (Ut = setInterval(function () {
                    var r = P(document.elementFromPoint(o, i), !0);
                    r !== a && ((a = r), Zt()), Qt(t, n.options, r, e);
                  }, 10)),
                  (Wt = o),
                  (zt = i));
              } else {
                if (!this.options.bubbleScroll || P(r, !0) === T())
                  return void Zt();
                Qt(t, this.options, P(r, !1), !1);
              }
            },
          }),
          i(t, { pluginName: "scroll", initializeByDefault: !0 })
        );
      })()
    ),
    kt.mount(te, Jt);
  const ee = kt;
  window.Sortable = ee;
})();
