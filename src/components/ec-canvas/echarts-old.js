!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(
        ((t =
          "undefined" != typeof globalThis ? globalThis : t || self).echarts =
          {})
      );
})(this, function (t) {
  "use strict";
  var v = function (t, e) {
    return (v =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array
        ? function (t, e) {
            t.__proto__ = e;
          }
        : function (t, e) {
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          }))(t, e);
  };
  function u(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError(
        "Class extends value " + String(e) + " is not a constructor or null"
      );
    function n() {
      this.constructor = t;
    }
    v(t, e),
      (t.prototype =
        null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
  }
  function _() {
    (this.firefox = !1),
      (this.ie = !1),
      (this.edge = !1),
      (this.newEdge = !1),
      (this.weChat = !1);
  }
  var b = new (function () {
    (this.browser = new _()),
      (this.node = !1),
      (this.wxa = !1),
      (this.worker = !1),
      (this.svgSupported = !1),
      (this.touchEventsSupported = !1),
      (this.pointerEventsSupported = !1),
      (this.domSupported = !1),
      (this.transformSupported = !1),
      (this.transform3dSupported = !1),
      (this.hasGlobalWindow = "undefined" != typeof window);
  })();
  "object" == typeof wx && "function" == typeof wx.getSystemInfoSync
    ? ((b.wxa = !0), (b.touchEventsSupported = !0))
    : "undefined" == typeof document && "undefined" != typeof self
    ? (b.worker = !0)
    : "undefined" == typeof navigator
    ? ((b.node = !0), (b.svgSupported = !0))
    : ((J = navigator.userAgent),
      (oe = (Ht = b).browser),
      (rt = J.match(/Firefox\/([\d.]+)/)),
      (P = J.match(/MSIE\s([\d.]+)/) || J.match(/Trident\/.+?rv:(([\d.]+))/)),
      (Q = J.match(/Edge?\/([\d.]+)/)),
      (J = /micromessenger/i.test(J)),
      rt && ((oe.firefox = !0), (oe.version = rt[1])),
      P && ((oe.ie = !0), (oe.version = P[1])),
      Q &&
        ((oe.edge = !0),
        (oe.version = Q[1]),
        (oe.newEdge = 18 < +Q[1].split(".")[0])),
      J && (oe.weChat = !0),
      (Ht.svgSupported = "undefined" != typeof SVGRect),
      (Ht.touchEventsSupported =
        "ontouchstart" in window && !oe.ie && !oe.edge),
      (Ht.pointerEventsSupported =
        "onpointerdown" in window && (oe.edge || (oe.ie && 11 <= +oe.version))),
      (Ht.domSupported = "undefined" != typeof document),
      (rt = document.documentElement.style),
      (Ht.transform3dSupported =
        ((oe.ie && "transition" in rt) ||
          oe.edge ||
          ("WebKitCSSMatrix" in window && "m11" in new WebKitCSSMatrix()) ||
          "MozPerspective" in rt) &&
        !("OTransition" in rt)),
      (Ht.transformSupported =
        Ht.transform3dSupported || (oe.ie && 9 <= +oe.version)));
  var K = "12px sans-serif";
  var x,
    w,
    M = (function (t) {
      var e = {};
      if ("undefined" != typeof JSON)
        for (var n = 0; n < t.length; n++) {
          var i = String.fromCharCode(n + 32),
            r = (t.charCodeAt(n) - 20) / 100;
          e[i] = r;
        }
      return e;
    })(
      "007LLmW'55;N0500LLLLLLLLLL00NNNLzWW\\\\WQb\\0FWLg\\bWb\\WQ\\WrWWQ000CL5LLFLL0LL**F*gLLLL5F0LF\\FFF5.5N"
    ),
    X = {
      createCanvas: function () {
        return (
          "undefined" != typeof document && document.createElement("canvas")
        );
      },
      measureText: function (t, e) {
        if ((x || ((n = X.createCanvas()), (x = n && n.getContext("2d"))), x))
          return w !== e && (w = x.font = e || K), x.measureText(t);
        t = t || "";
        var n = /(\d+)px/.exec((e = e || K)),
          i = (n && +n[1]) || 12,
          r = 0;
        if (0 <= e.indexOf("mono")) r = i * t.length;
        else
          for (var o = 0; o < t.length; o++) {
            var a = M[t[o]];
            r += null == a ? i : a * i;
          }
        return { width: r };
      },
      loadImage: function (t, e, n) {
        var i = new Image();
        return (i.onload = e), (i.onerror = n), (i.src = t), i;
      },
    };
  function T(t) {
    for (var e in X) t[e] && (X[e] = t[e]);
  }
  var C = lt(
      [
        "Function",
        "RegExp",
        "Date",
        "Error",
        "CanvasGradient",
        "CanvasPattern",
        "Image",
        "Canvas",
      ],
      function (t, e) {
        return (t["[object " + e + "]"] = !0), t;
      },
      {}
    ),
    k = lt(
      [
        "Int8",
        "Uint8",
        "Uint8Clamped",
        "Int16",
        "Uint16",
        "Int32",
        "Uint32",
        "Float32",
        "Float64",
      ],
      function (t, e) {
        return (t["[object " + e + "Array]"] = !0), t;
      },
      {}
    ),
    A = Object.prototype.toString,
    P = Array.prototype,
    Y = P.forEach,
    q = P.filter,
    Z = P.slice,
    $ = P.map,
    Q = function () {}.constructor,
    J = Q ? Q.prototype : null,
    tt = "__proto__",
    et = 2311;
  function nt() {
    return et++;
  }
  function it() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    "undefined" != typeof console && console.error.apply(console, t);
  }
  function y(t) {
    if (null == t || "object" != typeof t) return t;
    var e = t,
      n = A.call(t);
    if ("[object Array]" === n) {
      if (!kt(t))
        for (var e = [], i = 0, r = t.length; i < r; i++) e[i] = y(t[i]);
    } else if (k[n]) {
      if (!kt(t)) {
        var o = t.constructor;
        if (o.from) e = o.from(t);
        else
          for (e = new o(t.length), i = 0, r = t.length; i < r; i++)
            e[i] = t[i];
      }
    } else if (!C[n] && !kt(t) && !yt(t))
      for (var a in ((e = {}), t))
        t.hasOwnProperty(a) && a !== tt && (e[a] = y(t[a]));
    return e;
  }
  function d(t, e, n) {
    if (!O(e) || !O(t)) return n ? y(e) : t;
    for (var i in e) {
      var r, o;
      e.hasOwnProperty(i) &&
        i !== tt &&
        ((r = t[i]),
        !O((o = e[i])) ||
        !O(r) ||
        V(o) ||
        V(r) ||
        yt(o) ||
        yt(r) ||
        ft(o) ||
        ft(r) ||
        kt(o) ||
        kt(r)
          ? (!n && i in t) || (t[i] = y(e[i]))
          : d(r, o, n));
    }
    return t;
  }
  function L(t, e) {
    if (Object.assign) Object.assign(t, e);
    else for (var n in e) e.hasOwnProperty(n) && n !== tt && (t[n] = e[n]);
    return t;
  }
  function B(t, e, n) {
    for (var i = ht(e), r = 0; r < i.length; r++) {
      var o = i[r];
      (n ? null != e[o] : null == t[o]) && (t[o] = e[o]);
    }
    return t;
  }
  var rt = X.createCanvas;
  function I(t, e) {
    if (t) {
      if (t.indexOf) return t.indexOf(e);
      for (var n = 0, i = t.length; n < i; n++) if (t[n] === e) return n;
    }
    return -1;
  }
  function ot(t, e) {
    var n,
      i = t.prototype;
    function r() {}
    for (n in ((r.prototype = e.prototype), (t.prototype = new r()), i))
      i.hasOwnProperty(n) && (t.prototype[n] = i[n]);
    (t.prototype.constructor = t).superClass = e;
  }
  function at(t, e, n) {
    if (
      ((t = "prototype" in t ? t.prototype : t),
      (e = "prototype" in e ? e.prototype : e),
      Object.getOwnPropertyNames)
    )
      for (var i = Object.getOwnPropertyNames(e), r = 0; r < i.length; r++) {
        var o = i[r];
        "constructor" !== o &&
          (n ? null != e[o] : null == t[o]) &&
          (t[o] = e[o]);
      }
    else B(t, e, n);
  }
  function st(t) {
    return !!t && "string" != typeof t && "number" == typeof t.length;
  }
  function E(t, e, n) {
    if (t && e)
      if (t.forEach && t.forEach === Y) t.forEach(e, n);
      else if (t.length === +t.length)
        for (var i = 0, r = t.length; i < r; i++) e.call(n, t[i], i, t);
      else for (var o in t) t.hasOwnProperty(o) && e.call(n, t[o], o, t);
  }
  function F(t, e, n) {
    if (!t) return [];
    if (!e) return St(t);
    if (t.map && t.map === $) return t.map(e, n);
    for (var i = [], r = 0, o = t.length; r < o; r++)
      i.push(e.call(n, t[r], r, t));
    return i;
  }
  function lt(t, e, n, i) {
    if (t && e) {
      for (var r = 0, o = t.length; r < o; r++) n = e.call(i, n, t[r], r, t);
      return n;
    }
  }
  function ut(t, e, n) {
    if (!t) return [];
    if (!e) return St(t);
    if (t.filter && t.filter === q) return t.filter(e, n);
    for (var i = [], r = 0, o = t.length; r < o; r++)
      e.call(n, t[r], r, t) && i.push(t[r]);
    return i;
  }
  function ht(t) {
    if (!t) return [];
    if (Object.keys) return Object.keys(t);
    var e,
      n = [];
    for (e in t) t.hasOwnProperty(e) && n.push(e);
    return n;
  }
  var ct =
    J && S(J.bind)
      ? J.call.bind(J.bind)
      : function (t, e) {
          for (var n = [], i = 2; i < arguments.length; i++)
            n[i - 2] = arguments[i];
          return function () {
            return t.apply(e, n.concat(Z.call(arguments)));
          };
        };
  function pt(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    return function () {
      return t.apply(this, e.concat(Z.call(arguments)));
    };
  }
  function V(t) {
    return Array.isArray ? Array.isArray(t) : "[object Array]" === A.call(t);
  }
  function S(t) {
    return "function" == typeof t;
  }
  function H(t) {
    return "string" == typeof t;
  }
  function dt(t) {
    return "[object String]" === A.call(t);
  }
  function G(t) {
    return "number" == typeof t;
  }
  function O(t) {
    var e = typeof t;
    return "function" == e || (!!t && "object" == e);
  }
  function ft(t) {
    return !!C[A.call(t)];
  }
  function gt(t) {
    return !!k[A.call(t)];
  }
  function yt(t) {
    return (
      "object" == typeof t &&
      "number" == typeof t.nodeType &&
      "object" == typeof t.ownerDocument
    );
  }
  function mt(t) {
    return null != t.colorStops;
  }
  function vt(t) {
    return null != t.image;
  }
  function _t(t) {
    return "[object RegExp]" === A.call(t);
  }
  function xt(t) {
    return t != t;
  }
  function wt() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    for (var n = 0, i = t.length; n < i; n++) if (null != t[n]) return t[n];
  }
  function R(t, e) {
    return null != t ? t : e;
  }
  function bt(t, e, n) {
    return null != t ? t : null != e ? e : n;
  }
  function St(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    return Z.apply(t, e);
  }
  function Mt(t) {
    var e;
    return "number" == typeof t
      ? [t, t, t, t]
      : 2 === (e = t.length)
      ? [t[0], t[1], t[0], t[1]]
      : 3 === e
      ? [t[0], t[1], t[2], t[1]]
      : t;
  }
  function Tt(t, e) {
    if (!t) throw new Error(e);
  }
  function Ct(t) {
    return null == t
      ? null
      : "function" == typeof t.trim
      ? t.trim()
      : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
  }
  var It = "__ec_primitive__";
  function Dt(t) {
    t[It] = !0;
  }
  function kt(t) {
    return t[It];
  }
  (Lt.prototype.delete = function (t) {
    var e = this.has(t);
    return e && delete this.data[t], e;
  }),
    (Lt.prototype.has = function (t) {
      return this.data.hasOwnProperty(t);
    }),
    (Lt.prototype.get = function (t) {
      return this.data[t];
    }),
    (Lt.prototype.set = function (t, e) {
      return (this.data[t] = e), this;
    }),
    (Lt.prototype.keys = function () {
      return ht(this.data);
    }),
    (Lt.prototype.forEach = function (t) {
      var e,
        n = this.data;
      for (e in n) n.hasOwnProperty(e) && t(n[e], e);
    });
  var At = Lt,
    Pt = "function" == typeof Map;
  function Lt() {
    this.data = {};
  }
  (Rt.prototype.hasKey = function (t) {
    return this.data.has(t);
  }),
    (Rt.prototype.get = function (t) {
      return this.data.get(t);
    }),
    (Rt.prototype.set = function (t, e) {
      return this.data.set(t, e), e;
    }),
    (Rt.prototype.each = function (n, i) {
      this.data.forEach(function (t, e) {
        n.call(i, t, e);
      });
    }),
    (Rt.prototype.keys = function () {
      var t = this.data.keys();
      return Pt ? Array.from(t) : t;
    }),
    (Rt.prototype.removeKey = function (t) {
      this.data.delete(t);
    });
  var Ot = Rt;
  function Rt(t) {
    var n = V(t),
      i = ((this.data = new (Pt ? Map : At)()), this);
    function e(t, e) {
      n ? i.set(t, e) : i.set(e, t);
    }
    t instanceof Rt ? t.each(e) : t && E(t, e);
  }
  function N(t) {
    return new Ot(t);
  }
  function Nt(t, e) {
    for (
      var n = new t.constructor(t.length + e.length), i = 0;
      i < t.length;
      i++
    )
      n[i] = t[i];
    for (var r = t.length, i = 0; i < e.length; i++) n[i + r] = e[i];
    return n;
  }
  function Et(t, e) {
    var n,
      t = Object.create
        ? Object.create(t)
        : (((n = function () {}).prototype = t), new n());
    return e && L(t, e), t;
  }
  function zt(t) {
    t = t.style;
    (t.webkitUserSelect = "none"),
      (t.userSelect = "none"),
      (t.webkitTapHighlightColor = "rgba(0,0,0,0)"),
      (t["-webkit-touch-callout"] = "none");
  }
  function Bt(t, e) {
    return t.hasOwnProperty(e);
  }
  function Ft() {}
  var Vt = 180 / Math.PI,
    Ht = Object.freeze({
      __proto__: null,
      HashMap: Ot,
      RADIAN_TO_DEGREE: Vt,
      assert: Tt,
      bind: ct,
      clone: y,
      concatArray: Nt,
      createCanvas: rt,
      createHashMap: N,
      createObject: Et,
      curry: pt,
      defaults: B,
      disableUserSelect: zt,
      each: E,
      eqNaN: xt,
      extend: L,
      filter: ut,
      find: function (t, e, n) {
        if (t && e)
          for (var i = 0, r = t.length; i < r; i++)
            if (e.call(n, t[i], i, t)) return t[i];
      },
      guid: nt,
      hasOwn: Bt,
      indexOf: I,
      inherits: ot,
      isArray: V,
      isArrayLike: st,
      isBuiltInObject: ft,
      isDom: yt,
      isFunction: S,
      isGradientObject: mt,
      isImagePatternObject: vt,
      isNumber: G,
      isObject: O,
      isPrimitive: kt,
      isRegExp: _t,
      isString: H,
      isStringSafe: dt,
      isTypedArray: gt,
      keys: ht,
      logError: it,
      map: F,
      merge: d,
      mergeAll: function (t, e) {
        for (var n = t[0], i = 1, r = t.length; i < r; i++) n = d(n, t[i], e);
        return n;
      },
      mixin: at,
      noop: Ft,
      normalizeCssArray: Mt,
      reduce: lt,
      retrieve: wt,
      retrieve2: R,
      retrieve3: bt,
      setAsPrimitive: Dt,
      slice: St,
      trim: Ct,
    });
  function Gt(t, e) {
    return [(t = null == t ? 0 : t), (e = null == e ? 0 : e)];
  }
  function Wt(t) {
    return [t[0], t[1]];
  }
  function Ut(t, e, n) {
    return (t[0] = e[0] + n[0]), (t[1] = e[1] + n[1]), t;
  }
  function Xt(t, e, n) {
    return (t[0] = e[0] - n[0]), (t[1] = e[1] - n[1]), t;
  }
  function Yt(t) {
    return Math.sqrt(qt(t));
  }
  function qt(t) {
    return t[0] * t[0] + t[1] * t[1];
  }
  function Zt(t, e, n) {
    return (t[0] = e[0] * n), (t[1] = e[1] * n), t;
  }
  function jt(t, e) {
    var n = Yt(e);
    return (
      0 === n
        ? ((t[0] = 0), (t[1] = 0))
        : ((t[0] = e[0] / n), (t[1] = e[1] / n)),
      t
    );
  }
  function Kt(t, e) {
    return Math.sqrt(
      (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
    );
  }
  var $t = Kt;
  function Qt(t, e) {
    return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]);
  }
  var Jt = Qt;
  function te(t, e, n, i) {
    return (
      (t[0] = e[0] + i * (n[0] - e[0])), (t[1] = e[1] + i * (n[1] - e[1])), t
    );
  }
  function ee(t, e, n) {
    var i = e[0],
      e = e[1];
    return (
      (t[0] = n[0] * i + n[2] * e + n[4]),
      (t[1] = n[1] * i + n[3] * e + n[5]),
      t
    );
  }
  function ne(t, e, n) {
    return (t[0] = Math.min(e[0], n[0])), (t[1] = Math.min(e[1], n[1])), t;
  }
  function ie(t, e, n) {
    return (t[0] = Math.max(e[0], n[0])), (t[1] = Math.max(e[1], n[1])), t;
  }
  function re(t, e) {
    (this.target = t), (this.topTarget = e && e.topTarget);
  }
  var oe = Object.freeze({
      __proto__: null,
      add: Ut,
      applyTransform: ee,
      clone: Wt,
      copy: function (t, e) {
        return (t[0] = e[0]), (t[1] = e[1]), t;
      },
      create: Gt,
      dist: $t,
      distSquare: Jt,
      distance: Kt,
      distanceSquare: Qt,
      div: function (t, e, n) {
        return (t[0] = e[0] / n[0]), (t[1] = e[1] / n[1]), t;
      },
      dot: function (t, e) {
        return t[0] * e[0] + t[1] * e[1];
      },
      len: Yt,
      lenSquare: qt,
      length: Yt,
      lengthSquare: qt,
      lerp: te,
      max: ie,
      min: ne,
      mul: function (t, e, n) {
        return (t[0] = e[0] * n[0]), (t[1] = e[1] * n[1]), t;
      },
      negate: function (t, e) {
        return (t[0] = -e[0]), (t[1] = -e[1]), t;
      },
      normalize: jt,
      scale: Zt,
      scaleAndAdd: function (t, e, n, i) {
        return (t[0] = e[0] + n[0] * i), (t[1] = e[1] + n[1] * i), t;
      },
      set: function (t, e, n) {
        return (t[0] = e), (t[1] = n), t;
      },
      sub: Xt,
    }),
    ae =
      ((se.prototype._dragStart = function (t) {
        for (var e = t.target; e && !e.draggable; )
          e = e.parent || e.__hostTarget;
        e &&
          (((this._draggingTarget = e).dragging = !0),
          (this._x = t.offsetX),
          (this._y = t.offsetY),
          this.handler.dispatchToElement(new re(e, t), "dragstart", t.event));
      }),
      (se.prototype._drag = function (t) {
        var e,
          n,
          i,
          r,
          o = this._draggingTarget;
        o &&
          ((e = t.offsetX),
          (n = t.offsetY),
          (i = e - this._x),
          (r = n - this._y),
          (this._x = e),
          (this._y = n),
          o.drift(i, r, t),
          this.handler.dispatchToElement(new re(o, t), "drag", t.event),
          (i = this.handler.findHover(e, n, o).target),
          (r = this._dropTarget),
          o !== (this._dropTarget = i)) &&
          (r &&
            i !== r &&
            this.handler.dispatchToElement(new re(r, t), "dragleave", t.event),
          i) &&
          i !== r &&
          this.handler.dispatchToElement(new re(i, t), "dragenter", t.event);
      }),
      (se.prototype._dragEnd = function (t) {
        var e = this._draggingTarget;
        e && (e.dragging = !1),
          this.handler.dispatchToElement(new re(e, t), "dragend", t.event),
          this._dropTarget &&
            this.handler.dispatchToElement(
              new re(this._dropTarget, t),
              "drop",
              t.event
            ),
          (this._draggingTarget = null),
          (this._dropTarget = null);
      }),
      se);
  function se(t) {
    (this.handler = t).on("mousedown", this._dragStart, this),
      t.on("mousemove", this._drag, this),
      t.on("mouseup", this._dragEnd, this);
  }
  (ue.prototype.on = function (t, e, n, i) {
    this._$handlers || (this._$handlers = {});
    var r = this._$handlers;
    if (("function" == typeof e && ((i = n), (n = e), (e = null)), n && t)) {
      var o = this._$eventProcessor;
      null != e && o && o.normalizeQuery && (e = o.normalizeQuery(e)),
        r[t] || (r[t] = []);
      for (var a = 0; a < r[t].length; a++) if (r[t][a].h === n) return this;
      (o = {
        h: n,
        query: e,
        ctx: i || this,
        callAtLast: n.zrEventfulCallAtLast,
      }),
        (e = r[t].length - 1),
        (i = r[t][e]);
      i && i.callAtLast ? r[t].splice(e, 0, o) : r[t].push(o);
    }
    return this;
  }),
    (ue.prototype.isSilent = function (t) {
      var e = this._$handlers;
      return !e || !e[t] || !e[t].length;
    }),
    (ue.prototype.off = function (t, e) {
      var n = this._$handlers;
      if (n)
        if (t)
          if (e) {
            if (n[t]) {
              for (var i = [], r = 0, o = n[t].length; r < o; r++)
                n[t][r].h !== e && i.push(n[t][r]);
              n[t] = i;
            }
            n[t] && 0 === n[t].length && delete n[t];
          } else delete n[t];
        else this._$handlers = {};
      return this;
    }),
    (ue.prototype.trigger = function (t) {
      for (var e = [], n = 1; n < arguments.length; n++)
        e[n - 1] = arguments[n];
      if (this._$handlers) {
        var i = this._$handlers[t],
          r = this._$eventProcessor;
        if (i)
          for (var o = e.length, a = i.length, s = 0; s < a; s++) {
            var l = i[s];
            if (!r || !r.filter || null == l.query || r.filter(t, l.query))
              switch (o) {
                case 0:
                  l.h.call(l.ctx);
                  break;
                case 1:
                  l.h.call(l.ctx, e[0]);
                  break;
                case 2:
                  l.h.call(l.ctx, e[0], e[1]);
                  break;
                default:
                  l.h.apply(l.ctx, e);
              }
          }
        r && r.afterTrigger && r.afterTrigger(t);
      }
      return this;
    }),
    (ue.prototype.triggerWithContext = function (t) {
      for (var e = [], n = 1; n < arguments.length; n++)
        e[n - 1] = arguments[n];
      if (this._$handlers) {
        var i = this._$handlers[t],
          r = this._$eventProcessor;
        if (i)
          for (
            var o = e.length, a = e[o - 1], s = i.length, l = 0;
            l < s;
            l++
          ) {
            var u = i[l];
            if (!r || !r.filter || null == u.query || r.filter(t, u.query))
              switch (o) {
                case 0:
                  u.h.call(a);
                  break;
                case 1:
                  u.h.call(a, e[0]);
                  break;
                case 2:
                  u.h.call(a, e[0], e[1]);
                  break;
                default:
                  u.h.apply(a, e.slice(1, o - 1));
              }
          }
        r && r.afterTrigger && r.afterTrigger(t);
      }
      return this;
    });
  var le = ue;
  function ue(t) {
    t && (this._$eventProcessor = t);
  }
  var he = Math.log(2);
  function ce(t, e, n, i, r, o) {
    var a,
      s = i + "-" + r,
      l = t.length;
    if (o.hasOwnProperty(s)) return o[s];
    if (1 === e)
      return (a = Math.round(Math.log(((1 << l) - 1) & ~r) / he)), t[n][a];
    for (var u = i | (1 << n), h = n + 1; i & (1 << h); ) h++;
    for (var c = 0, p = 0, d = 0; p < l; p++) {
      var f = 1 << p;
      f & r ||
        ((c += (d % 2 ? -1 : 1) * t[n][p] * ce(t, e - 1, h, u, r | f, o)), d++);
    }
    return (o[s] = c);
  }
  function pe(t, e) {
    var n = [
        [t[0], t[1], 1, 0, 0, 0, -e[0] * t[0], -e[0] * t[1]],
        [0, 0, 0, t[0], t[1], 1, -e[1] * t[0], -e[1] * t[1]],
        [t[2], t[3], 1, 0, 0, 0, -e[2] * t[2], -e[2] * t[3]],
        [0, 0, 0, t[2], t[3], 1, -e[3] * t[2], -e[3] * t[3]],
        [t[4], t[5], 1, 0, 0, 0, -e[4] * t[4], -e[4] * t[5]],
        [0, 0, 0, t[4], t[5], 1, -e[5] * t[4], -e[5] * t[5]],
        [t[6], t[7], 1, 0, 0, 0, -e[6] * t[6], -e[6] * t[7]],
        [0, 0, 0, t[6], t[7], 1, -e[7] * t[6], -e[7] * t[7]],
      ],
      i = {},
      r = ce(n, 8, 0, 0, 0, i);
    if (0 !== r) {
      for (var o = [], a = 0; a < 8; a++)
        for (var s = 0; s < 8; s++)
          null == o[s] && (o[s] = 0),
            (o[s] +=
              ((((a + s) % 2 ? -1 : 1) *
                ce(n, 7, 0 === a ? 1 : 0, 1 << a, 1 << s, i)) /
                r) *
              e[a]);
      return function (t, e, n) {
        var i = e * o[6] + n * o[7] + 1;
        (t[0] = (e * o[0] + n * o[1] + o[2]) / i),
          (t[1] = (e * o[3] + n * o[4] + o[5]) / i);
      };
    }
  }
  var de = "___zrEVENTSAVED",
    fe = [];
  function ge(t, e, n, i, r) {
    if (e.getBoundingClientRect && b.domSupported && !ye(e)) {
      var o = e[de] || (e[de] = {}),
        e = (function (t, e, n) {
          for (
            var i = n ? "invTrans" : "trans",
              r = e[i],
              o = e.srcCoords,
              a = [],
              s = [],
              l = !0,
              u = 0;
            u < 4;
            u++
          ) {
            var h = t[u].getBoundingClientRect(),
              c = 2 * u,
              p = h.left,
              h = h.top;
            a.push(p, h),
              (l = l && o && p === o[c] && h === o[1 + c]),
              s.push(t[u].offsetLeft, t[u].offsetTop);
          }
          return l && r
            ? r
            : ((e.srcCoords = a), (e[i] = n ? pe(s, a) : pe(a, s)));
        })(
          (function (t, e) {
            var n = e.markers;
            if (!n) {
              n = e.markers = [];
              for (
                var i = ["left", "right"], r = ["top", "bottom"], o = 0;
                o < 4;
                o++
              ) {
                var a = document.createElement("div"),
                  s = o % 2,
                  l = (o >> 1) % 2;
                (a.style.cssText = [
                  "position: absolute",
                  "visibility: hidden",
                  "padding: 0",
                  "margin: 0",
                  "border-width: 0",
                  "user-select: none",
                  "width:0",
                  "height:0",
                  i[s] + ":0",
                  r[l] + ":0",
                  i[1 - s] + ":auto",
                  r[1 - l] + ":auto",
                  "",
                ].join("!important;")),
                  t.appendChild(a),
                  n.push(a);
              }
            }
            return n;
          })(e, o),
          o,
          r
        );
      if (e) return e(t, n, i), !0;
    }
    return !1;
  }
  function ye(t) {
    return "CANVAS" === t.nodeName.toUpperCase();
  }
  var me = /([&<>"'])/g,
    ve = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
  function _e(t) {
    return null == t
      ? ""
      : (t + "").replace(me, function (t, e) {
          return ve[e];
        });
  }
  var xe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    we = [],
    be = b.browser.firefox && +b.browser.version.split(".")[0] < 39;
  function Se(t, e, n, i) {
    return (
      (n = n || {}),
      i
        ? Me(t, e, n)
        : be && null != e.layerX && e.layerX !== e.offsetX
        ? ((n.zrX = e.layerX), (n.zrY = e.layerY))
        : null != e.offsetX
        ? ((n.zrX = e.offsetX), (n.zrY = e.offsetY))
        : Me(t, e, n),
      n
    );
  }
  function Me(t, e, n) {
    if (b.domSupported && t.getBoundingClientRect) {
      var i,
        r = e.clientX,
        e = e.clientY;
      if (ye(t))
        return (
          (i = t.getBoundingClientRect()),
          (n.zrX = r - i.left),
          (n.zrY = e - i.top)
        );
      if (ge(we, t, r, e)) return (n.zrX = we[0]), (n.zrY = we[1]);
    }
    n.zrX = n.zrY = 0;
  }
  function Te(t) {
    return t || window.event;
  }
  function Ce(t, e, n) {
    var i;
    return (
      null == (e = Te(e)).zrX &&
        ((i = e.type) && 0 <= i.indexOf("touch")
          ? (i = ("touchend" !== i ? e.targetTouches : e.changedTouches)[0]) &&
            Se(t, i, e, n)
          : (Se(t, e, e, n),
            (t =
              (t = (i = e).wheelDelta) ||
              ((n = i.deltaX),
              (i = i.deltaY),
              null == n || null == i
                ? t
                : 3 *
                  (0 !== i ? Math.abs(i) : Math.abs(n)) *
                  (0 < i || (!(i < 0) && 0 < n) ? -1 : 1))),
            (e.zrDelta = t ? t / 120 : -(e.detail || 0) / 3)),
        (i = e.button),
        null == e.which && void 0 !== i && xe.test(e.type)) &&
        (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0),
      e
    );
  }
  var Ie = function (t) {
      t.preventDefault(), t.stopPropagation(), (t.cancelBubble = !0);
    },
    De =
      ((ke.prototype.recognize = function (t, e, n) {
        return this._doTrack(t, e, n), this._recognize(t);
      }),
      (ke.prototype.clear = function () {
        return (this._track.length = 0), this;
      }),
      (ke.prototype._doTrack = function (t, e, n) {
        var i = t.touches;
        if (i) {
          for (
            var r = { points: [], touches: [], target: e, event: t },
              o = 0,
              a = i.length;
            o < a;
            o++
          ) {
            var s = i[o],
              l = Se(n, s, {});
            r.points.push([l.zrX, l.zrY]), r.touches.push(s);
          }
          this._track.push(r);
        }
      }),
      (ke.prototype._recognize = function (t) {
        for (var e in Pe)
          if (Pe.hasOwnProperty(e)) {
            e = Pe[e](this._track, t);
            if (e) return e;
          }
      }),
      ke);
  function ke() {
    this._track = [];
  }
  function Ae(t) {
    var e = t[1][0] - t[0][0],
      t = t[1][1] - t[0][1];
    return Math.sqrt(e * e + t * t);
  }
  var Pe = {
    pinch: function (t, e) {
      var n = t.length;
      if (n) {
        var i = (t[n - 1] || {}).points,
          n = (t[n - 2] || {}).points || i;
        if (n && 1 < n.length && i && 1 < i.length)
          return (
            (n = Ae(i) / Ae(n)),
            isFinite(n) || (n = 1),
            (e.pinchScale = n),
            (n = [(i[0][0] + i[1][0]) / 2, (i[0][1] + i[1][1]) / 2]),
            (e.pinchX = n[0]),
            (e.pinchY = n[1]),
            { type: "pinch", target: t[0].target, event: e }
          );
      }
    },
  };
  function Le() {
    return [1, 0, 0, 1, 0, 0];
  }
  function Oe(t) {
    return (
      (t[0] = 1), (t[1] = 0), (t[2] = 0), (t[3] = 1), (t[4] = 0), (t[5] = 0), t
    );
  }
  function Re(t, e) {
    return (
      (t[0] = e[0]),
      (t[1] = e[1]),
      (t[2] = e[2]),
      (t[3] = e[3]),
      (t[4] = e[4]),
      (t[5] = e[5]),
      t
    );
  }
  function Ne(t, e, n) {
    var i = e[0] * n[0] + e[2] * n[1],
      r = e[1] * n[0] + e[3] * n[1],
      o = e[0] * n[2] + e[2] * n[3],
      a = e[1] * n[2] + e[3] * n[3],
      s = e[0] * n[4] + e[2] * n[5] + e[4],
      n = e[1] * n[4] + e[3] * n[5] + e[5];
    return (
      (t[0] = i), (t[1] = r), (t[2] = o), (t[3] = a), (t[4] = s), (t[5] = n), t
    );
  }
  function Ee(t, e, n) {
    return (
      (t[0] = e[0]),
      (t[1] = e[1]),
      (t[2] = e[2]),
      (t[3] = e[3]),
      (t[4] = e[4] + n[0]),
      (t[5] = e[5] + n[1]),
      t
    );
  }
  function ze(t, e, n) {
    var i = e[0],
      r = e[2],
      o = e[4],
      a = e[1],
      s = e[3],
      e = e[5],
      l = Math.sin(n),
      n = Math.cos(n);
    return (
      (t[0] = i * n + a * l),
      (t[1] = -i * l + a * n),
      (t[2] = r * n + s * l),
      (t[3] = -r * l + n * s),
      (t[4] = n * o + l * e),
      (t[5] = n * e - l * o),
      t
    );
  }
  function Be(t, e, n) {
    var i = n[0],
      n = n[1];
    return (
      (t[0] = e[0] * i),
      (t[1] = e[1] * n),
      (t[2] = e[2] * i),
      (t[3] = e[3] * n),
      (t[4] = e[4] * i),
      (t[5] = e[5] * n),
      t
    );
  }
  function Fe(t, e) {
    var n = e[0],
      i = e[2],
      r = e[4],
      o = e[1],
      a = e[3],
      e = e[5],
      s = n * a - o * i;
    return s
      ? ((t[0] = a * (s = 1 / s)),
        (t[1] = -o * s),
        (t[2] = -i * s),
        (t[3] = n * s),
        (t[4] = (i * e - a * r) * s),
        (t[5] = (o * r - n * e) * s),
        t)
      : null;
  }
  var Ve = Object.freeze({
      __proto__: null,
      clone: function (t) {
        var e = Le();
        return Re(e, t), e;
      },
      copy: Re,
      create: Le,
      identity: Oe,
      invert: Fe,
      mul: Ne,
      rotate: ze,
      scale: Be,
      translate: Ee,
    }),
    z =
      ((e.prototype.copy = function (t) {
        return (this.x = t.x), (this.y = t.y), this;
      }),
      (e.prototype.clone = function () {
        return new e(this.x, this.y);
      }),
      (e.prototype.set = function (t, e) {
        return (this.x = t), (this.y = e), this;
      }),
      (e.prototype.equal = function (t) {
        return t.x === this.x && t.y === this.y;
      }),
      (e.prototype.add = function (t) {
        return (this.x += t.x), (this.y += t.y), this;
      }),
      (e.prototype.scale = function (t) {
        (this.x *= t), (this.y *= t);
      }),
      (e.prototype.scaleAndAdd = function (t, e) {
        (this.x += t.x * e), (this.y += t.y * e);
      }),
      (e.prototype.sub = function (t) {
        return (this.x -= t.x), (this.y -= t.y), this;
      }),
      (e.prototype.dot = function (t) {
        return this.x * t.x + this.y * t.y;
      }),
      (e.prototype.len = function () {
        return Math.sqrt(this.x * this.x + this.y * this.y);
      }),
      (e.prototype.lenSquare = function () {
        return this.x * this.x + this.y * this.y;
      }),
      (e.prototype.normalize = function () {
        var t = this.len();
        return (this.x /= t), (this.y /= t), this;
      }),
      (e.prototype.distance = function (t) {
        var e = this.x - t.x,
          t = this.y - t.y;
        return Math.sqrt(e * e + t * t);
      }),
      (e.prototype.distanceSquare = function (t) {
        var e = this.x - t.x,
          t = this.y - t.y;
        return e * e + t * t;
      }),
      (e.prototype.negate = function () {
        return (this.x = -this.x), (this.y = -this.y), this;
      }),
      (e.prototype.transform = function (t) {
        var e, n;
        if (t)
          return (
            (e = this.x),
            (n = this.y),
            (this.x = t[0] * e + t[2] * n + t[4]),
            (this.y = t[1] * e + t[3] * n + t[5]),
            this
          );
      }),
      (e.prototype.toArray = function (t) {
        return (t[0] = this.x), (t[1] = this.y), t;
      }),
      (e.prototype.fromArray = function (t) {
        (this.x = t[0]), (this.y = t[1]);
      }),
      (e.set = function (t, e, n) {
        (t.x = e), (t.y = n);
      }),
      (e.copy = function (t, e) {
        (t.x = e.x), (t.y = e.y);
      }),
      (e.len = function (t) {
        return Math.sqrt(t.x * t.x + t.y * t.y);
      }),
      (e.lenSquare = function (t) {
        return t.x * t.x + t.y * t.y;
      }),
      (e.dot = function (t, e) {
        return t.x * e.x + t.y * e.y;
      }),
      (e.add = function (t, e, n) {
        (t.x = e.x + n.x), (t.y = e.y + n.y);
      }),
      (e.sub = function (t, e, n) {
        (t.x = e.x - n.x), (t.y = e.y - n.y);
      }),
      (e.scale = function (t, e, n) {
        (t.x = e.x * n), (t.y = e.y * n);
      }),
      (e.scaleAndAdd = function (t, e, n, i) {
        (t.x = e.x + n.x * i), (t.y = e.y + n.y * i);
      }),
      (e.lerp = function (t, e, n, i) {
        var r = 1 - i;
        (t.x = r * e.x + i * n.x), (t.y = r * e.y + i * n.y);
      }),
      e);
  function e(t, e) {
    (this.x = t || 0), (this.y = e || 0);
  }
  var He = Math.min,
    Ge = Math.max,
    We = new z(),
    Ue = new z(),
    Xe = new z(),
    Ye = new z(),
    qe = new z(),
    Ze = new z(),
    W =
      ((je.prototype.union = function (t) {
        var e = He(t.x, this.x),
          n = He(t.y, this.y);
        isFinite(this.x) && isFinite(this.width)
          ? (this.width = Ge(t.x + t.width, this.x + this.width) - e)
          : (this.width = t.width),
          isFinite(this.y) && isFinite(this.height)
            ? (this.height = Ge(t.y + t.height, this.y + this.height) - n)
            : (this.height = t.height),
          (this.x = e),
          (this.y = n);
      }),
      (je.prototype.applyTransform = function (t) {
        je.applyTransform(this, this, t);
      }),
      (je.prototype.calculateTransform = function (t) {
        var e = t.width / this.width,
          n = t.height / this.height,
          i = Le();
        return (
          Ee(i, i, [-this.x, -this.y]),
          Be(i, i, [e, n]),
          Ee(i, i, [t.x, t.y]),
          i
        );
      }),
      (je.prototype.intersect = function (t, e) {
        if (!t) return !1;
        t instanceof je || (t = je.create(t));
        var n,
          i,
          r,
          o,
          a,
          s,
          l,
          u,
          h = this,
          c = h.x,
          p = h.x + h.width,
          d = h.y,
          h = h.y + h.height,
          f = t.x,
          g = t.x + t.width,
          y = t.y,
          t = t.y + t.height,
          m = !(p < f || g < c || h < y || t < d);
        return (
          e &&
            ((n = 1 / 0),
            (i = 0),
            (r = Math.abs(p - f)),
            (o = Math.abs(g - c)),
            (a = Math.abs(h - y)),
            (s = Math.abs(t - d)),
            (l = Math.min(r, o)),
            (u = Math.min(a, s)),
            p < f || g < c
              ? i < l && ((i = l), r < o ? z.set(Ze, -r, 0) : z.set(Ze, o, 0))
              : l < n && ((n = l), r < o ? z.set(qe, r, 0) : z.set(qe, -o, 0)),
            h < y || t < d
              ? i < u && ((i = u), a < s ? z.set(Ze, 0, -a) : z.set(Ze, 0, s))
              : l < n && ((n = l), a < s ? z.set(qe, 0, a) : z.set(qe, 0, -s))),
          e && z.copy(e, m ? qe : Ze),
          m
        );
      }),
      (je.prototype.contain = function (t, e) {
        var n = this;
        return (
          t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height
        );
      }),
      (je.prototype.clone = function () {
        return new je(this.x, this.y, this.width, this.height);
      }),
      (je.prototype.copy = function (t) {
        je.copy(this, t);
      }),
      (je.prototype.plain = function () {
        return { x: this.x, y: this.y, width: this.width, height: this.height };
      }),
      (je.prototype.isFinite = function () {
        return (
          isFinite(this.x) &&
          isFinite(this.y) &&
          isFinite(this.width) &&
          isFinite(this.height)
        );
      }),
      (je.prototype.isZero = function () {
        return 0 === this.width || 0 === this.height;
      }),
      (je.create = function (t) {
        return new je(t.x, t.y, t.width, t.height);
      }),
      (je.copy = function (t, e) {
        (t.x = e.x), (t.y = e.y), (t.width = e.width), (t.height = e.height);
      }),
      (je.applyTransform = function (t, e, n) {
        var i, r, o, a;
        n
          ? n[1] < 1e-5 && -1e-5 < n[1] && n[2] < 1e-5 && -1e-5 < n[2]
            ? ((i = n[0]),
              (r = n[3]),
              (o = n[4]),
              (a = n[5]),
              (t.x = e.x * i + o),
              (t.y = e.y * r + a),
              (t.width = e.width * i),
              (t.height = e.height * r),
              t.width < 0 && ((t.x += t.width), (t.width = -t.width)),
              t.height < 0 && ((t.y += t.height), (t.height = -t.height)))
            : ((We.x = Xe.x = e.x),
              (We.y = Ye.y = e.y),
              (Ue.x = Ye.x = e.x + e.width),
              (Ue.y = Xe.y = e.y + e.height),
              We.transform(n),
              Ye.transform(n),
              Ue.transform(n),
              Xe.transform(n),
              (t.x = He(We.x, Ue.x, Xe.x, Ye.x)),
              (t.y = He(We.y, Ue.y, Xe.y, Ye.y)),
              (o = Ge(We.x, Ue.x, Xe.x, Ye.x)),
              (a = Ge(We.y, Ue.y, Xe.y, Ye.y)),
              (t.width = o - t.x),
              (t.height = a - t.y))
          : t !== e && je.copy(t, e);
      }),
      je);
  function je(t, e, n, i) {
    n < 0 && ((t += n), (n = -n)),
      i < 0 && ((e += i), (i = -i)),
      (this.x = t),
      (this.y = e),
      (this.width = n),
      (this.height = i);
  }
  var Ke = "silent";
  function $e() {
    Ie(this.event);
  }
  function Qe(t, e) {
    (this.x = t), (this.y = e);
  }
  u(sn, (tn = le)),
    (sn.prototype.dispose = function () {}),
    (sn.prototype.setCursor = function () {});
  var Je,
    tn,
    en = sn,
    nn = [
      "click",
      "dblclick",
      "mousewheel",
      "mouseout",
      "mouseup",
      "mousedown",
      "mousemove",
      "contextmenu",
    ],
    rn = new W(0, 0, 0, 0),
    on =
      (u(an, (Je = le)),
      (an.prototype.setHandlerProxy = function (e) {
        this.proxy && this.proxy.dispose(),
          e &&
            (E(
              nn,
              function (t) {
                e.on && e.on(t, this[t], this);
              },
              this
            ),
            (e.handler = this)),
          (this.proxy = e);
      }),
      (an.prototype.mousemove = function (t) {
        var e = t.zrX,
          n = t.zrY,
          i = un(this, e, n),
          r = this._hovered,
          o = r.target,
          i =
            (o && !o.__zr && (o = (r = this.findHover(r.x, r.y)).target),
            (this._hovered = i ? new Qe(e, n) : this.findHover(e, n))),
          e = i.target,
          n = this.proxy;
        n.setCursor && n.setCursor(e ? e.cursor : "default"),
          o && e !== o && this.dispatchToElement(r, "mouseout", t),
          this.dispatchToElement(i, "mousemove", t),
          e && e !== o && this.dispatchToElement(i, "mouseover", t);
      }),
      (an.prototype.mouseout = function (t) {
        var e = t.zrEventControl;
        "only_globalout" !== e &&
          this.dispatchToElement(this._hovered, "mouseout", t),
          "no_globalout" !== e &&
            this.trigger("globalout", { type: "globalout", event: t });
      }),
      (an.prototype.resize = function () {
        this._hovered = new Qe(0, 0);
      }),
      (an.prototype.dispatch = function (t, e) {
        t = this[t];
        t && t.call(this, e);
      }),
      (an.prototype.dispose = function () {
        this.proxy.dispose(),
          (this.storage = null),
          (this.proxy = null),
          (this.painter = null);
      }),
      (an.prototype.setCursorStyle = function (t) {
        var e = this.proxy;
        e.setCursor && e.setCursor(t);
      }),
      (an.prototype.dispatchToElement = function (t, e, n) {
        var i = (t = t || {}).target;
        if (!i || !i.silent) {
          for (
            var r = "on" + e,
              o = {
                type: e,
                event: n,
                target: (t = t).target,
                topTarget: t.topTarget,
                cancelBubble: !1,
                offsetX: n.zrX,
                offsetY: n.zrY,
                gestureEvent: n.gestureEvent,
                pinchX: n.pinchX,
                pinchY: n.pinchY,
                pinchScale: n.pinchScale,
                wheelDelta: n.zrDelta,
                zrByTouch: n.zrByTouch,
                which: n.which,
                stop: $e,
              };
            i &&
            (i[r] && (o.cancelBubble = !!i[r].call(i, o)),
            i.trigger(e, o),
            (i = i.__hostTarget || i.parent),
            !o.cancelBubble);

          );
          o.cancelBubble ||
            (this.trigger(e, o),
            this.painter &&
              this.painter.eachOtherLayer &&
              this.painter.eachOtherLayer(function (t) {
                "function" == typeof t[r] && t[r].call(t, o),
                  t.trigger && t.trigger(e, o);
              }));
        }
      }),
      (an.prototype.findHover = function (t, e, n) {
        var i = this.storage.getDisplayList(),
          r = new Qe(t, e);
        if ((ln(i, r, t, e, n), this._pointerSize && !r.target)) {
          for (
            var o = [],
              a = this._pointerSize,
              s = a / 2,
              l = new W(t - s, e - s, a, a),
              u = i.length - 1;
            0 <= u;
            u--
          ) {
            var h = i[u];
            h === n ||
              h.ignore ||
              h.ignoreCoarsePointer ||
              (h.parent && h.parent.ignoreCoarsePointer) ||
              (rn.copy(h.getBoundingRect()),
              h.transform && rn.applyTransform(h.transform),
              rn.intersect(l) && o.push(h));
          }
          if (o.length)
            for (var c = Math.PI / 12, p = 2 * Math.PI, d = 0; d < s; d += 4)
              for (var f = 0; f < p; f += c)
                if (
                  (ln(o, r, t + d * Math.cos(f), e + d * Math.sin(f), n),
                  r.target)
                )
                  return r;
        }
        return r;
      }),
      (an.prototype.processGesture = function (t, e) {
        this._gestureMgr || (this._gestureMgr = new De());
        var n = this._gestureMgr,
          i =
            ("start" === e && n.clear(),
            n.recognize(
              t,
              this.findHover(t.zrX, t.zrY, null).target,
              this.proxy.dom
            ));
        "end" === e && n.clear(),
          i &&
            ((e = i.type),
            (t.gestureEvent = e),
            ((n = new Qe()).target = i.target),
            this.dispatchToElement(n, e, i.event));
      }),
      an);
  function an(t, e, n, i, r) {
    var o = Je.call(this) || this;
    return (
      (o._hovered = new Qe(0, 0)),
      (o.storage = t),
      (o.painter = e),
      (o.painterRoot = i),
      (o._pointerSize = r),
      (n = n || new en()),
      (o.proxy = null),
      o.setHandlerProxy(n),
      (o._draggingMgr = new ae(o)),
      o
    );
  }
  function sn() {
    var t = (null !== tn && tn.apply(this, arguments)) || this;
    return (t.handler = null), t;
  }
  function ln(t, e, n, i, r) {
    for (var o = t.length - 1; 0 <= o; o--) {
      var a = t[o],
        s = void 0;
      if (
        a !== r &&
        !a.ignore &&
        (s = (function (t, e, n) {
          if (t[t.rectHover ? "rectContain" : "contain"](e, n)) {
            for (var i = t, r = void 0, o = !1; i; ) {
              if (!(o = i.ignoreClip ? !0 : o)) {
                var a = i.getClipPath();
                if (a && !a.contain(e, n)) return !1;
                i.silent && (r = !0);
              }
              i = i.__hostTarget || i.parent;
            }
            return !r || Ke;
          }
          return !1;
        })(a, n, i)) &&
        (e.topTarget || (e.topTarget = a), s !== Ke)
      ) {
        e.target = a;
        break;
      }
    }
  }
  function un(t, e, n) {
    t = t.painter;
    return e < 0 || e > t.getWidth() || n < 0 || n > t.getHeight();
  }
  E(
    ["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"],
    function (a) {
      on.prototype[a] = function (t) {
        var e,
          n,
          i = t.zrX,
          r = t.zrY,
          o = un(this, i, r);
        if (
          (("mouseup" === a && o) || (n = (e = this.findHover(i, r)).target),
          "mousedown" === a)
        )
          (this._downEl = n),
            (this._downPoint = [t.zrX, t.zrY]),
            (this._upEl = n);
        else if ("mouseup" === a) this._upEl = n;
        else if ("click" === a) {
          if (
            this._downEl !== this._upEl ||
            !this._downPoint ||
            4 < $t(this._downPoint, [t.zrX, t.zrY])
          )
            return;
          this._downPoint = null;
        }
        this.dispatchToElement(e, a, t);
      };
    }
  );
  var hn = 32,
    cn = 7;
  function pn(t, e, n, i) {
    var r = e + 1;
    if (r === n) return 1;
    if (i(t[r++], t[e]) < 0) {
      for (; r < n && i(t[r], t[r - 1]) < 0; ) r++;
      var o = t,
        a = e,
        s = r;
      for (s--; a < s; ) {
        var l = o[a];
        (o[a++] = o[s]), (o[s--] = l);
      }
    } else for (; r < n && 0 <= i(t[r], t[r - 1]); ) r++;
    return r - e;
  }
  function dn(t, e, n, i, r) {
    for (i === e && i++; i < n; i++) {
      for (var o, a = t[i], s = e, l = i; s < l; )
        r(a, t[(o = (s + l) >>> 1)]) < 0 ? (l = o) : (s = 1 + o);
      var u = i - s;
      switch (u) {
        case 3:
          t[s + 3] = t[s + 2];
        case 2:
          t[s + 2] = t[s + 1];
        case 1:
          t[s + 1] = t[s];
          break;
        default:
          for (; 0 < u; ) (t[s + u] = t[s + u - 1]), u--;
      }
      t[s] = a;
    }
  }
  function fn(t, e, n, i, r, o) {
    var a = 0,
      s = 0,
      l = 1;
    if (0 < o(t, e[n + r])) {
      for (s = i - r; l < s && 0 < o(t, e[n + r + l]); )
        (l = 1 + ((a = l) << 1)) <= 0 && (l = s);
      s < l && (l = s), (a += r), (l += r);
    } else {
      for (s = r + 1; l < s && o(t, e[n + r - l]) <= 0; )
        (l = 1 + ((a = l) << 1)) <= 0 && (l = s);
      (i = a), (a = r - (l = s < l ? s : l)), (l = r - i);
    }
    for (a++; a < l; ) {
      var u = a + ((l - a) >>> 1);
      0 < o(t, e[n + u]) ? (a = u + 1) : (l = u);
    }
    return l;
  }
  function gn(t, e, n, i, r, o) {
    var a = 0,
      s = 0,
      l = 1;
    if (o(t, e[n + r]) < 0) {
      for (s = r + 1; l < s && o(t, e[n + r - l]) < 0; )
        (l = 1 + ((a = l) << 1)) <= 0 && (l = s);
      var u = a,
        a = r - (l = s < l ? s : l),
        l = r - u;
    } else {
      for (s = i - r; l < s && 0 <= o(t, e[n + r + l]); )
        (l = 1 + ((a = l) << 1)) <= 0 && (l = s);
      s < l && (l = s), (a += r), (l += r);
    }
    for (a++; a < l; ) {
      var h = a + ((l - a) >>> 1);
      o(t, e[n + h]) < 0 ? (l = h) : (a = h + 1);
    }
    return l;
  }
  function yn(t, e, n, i) {
    var f,
      g,
      o,
      a,
      y,
      s,
      m,
      r = (i = i || t.length) - (n = n || 0);
    if (!(r < 2)) {
      var l = 0;
      if (r < hn) dn(t, n, i, n + (l = pn(t, n, i, e)), e);
      else {
        (g = e),
          (y = cn),
          (s = 0),
          (f = t).length,
          (m = []),
          (o = []),
          (a = []);
        var u,
          h = {
            mergeRuns: function () {
              for (; 1 < s; ) {
                var t = s - 2;
                if (
                  (1 <= t && a[t - 1] <= a[t] + a[t + 1]) ||
                  (2 <= t && a[t - 2] <= a[t] + a[t - 1])
                )
                  a[t - 1] < a[t + 1] && t--;
                else if (a[t] > a[t + 1]) break;
                p(t);
              }
            },
            forceMergeRuns: function () {
              for (; 1 < s; ) {
                var t = s - 2;
                0 < t && a[t - 1] < a[t + 1] && t--, p(t);
              }
            },
            pushRun: function (t, e) {
              (o[s] = t), (a[s] = e), (s += 1);
            },
          },
          c = (function (t) {
            for (var e = 0; hn <= t; ) (e |= 1 & t), (t >>= 1);
            return t + e;
          })(r);
        do {} while (
          ((l = pn(t, n, i, e)) < c &&
            (dn(t, n, n + (u = c < (u = r) ? c : r), n + l, e), (l = u)),
          h.pushRun(n, l),
          h.mergeRuns(),
          (n += l),
          0 !== (r -= l))
        );
        h.forceMergeRuns();
      }
    }
    function p(t) {
      var e = o[t],
        n = a[t],
        i = o[t + 1],
        r = a[t + 1],
        t =
          ((a[t] = n + r),
          t === s - 3 && ((o[t + 1] = o[t + 2]), (a[t + 1] = a[t + 2])),
          s--,
          gn(f[i], f, e, n, 0, g));
      (e += t),
        0 != (n -= t) &&
          0 !== (r = fn(f[e + n - 1], f, i, r, r - 1, g)) &&
          (n <= r
            ? function (t, e, n, i) {
                for (var r = 0, r = 0; r < e; r++) m[r] = f[t + r];
                var o = 0,
                  a = n,
                  s = t;
                if (((f[s++] = f[a++]), 0 == --i))
                  for (r = 0; r < e; r++) f[s + r] = m[o + r];
                else {
                  if (1 === e) {
                    for (r = 0; r < i; r++) f[s + r] = f[a + r];
                    return (f[s + i] = m[o]);
                  }
                  for (var l, u, h, c = y; ; ) {
                    (u = l = 0), (h = !1);
                    do {
                      if (g(f[a], m[o]) < 0) {
                        if (((f[s++] = f[a++]), u++, (l = 0) == --i)) {
                          h = !0;
                          break;
                        }
                      } else if (((f[s++] = m[o++]), l++, (u = 0), 1 == --e)) {
                        h = !0;
                        break;
                      }
                    } while ((l | u) < c);
                    if (h) break;
                    do {
                      if (0 !== (l = gn(f[a], m, o, e, 0, g))) {
                        for (r = 0; r < l; r++) f[s + r] = m[o + r];
                        if (((s += l), (o += l), (e -= l) <= 1)) {
                          h = !0;
                          break;
                        }
                      }
                      if (((f[s++] = f[a++]), 0 == --i)) {
                        h = !0;
                        break;
                      }
                      if (0 !== (u = fn(m[o], f, a, i, 0, g))) {
                        for (r = 0; r < u; r++) f[s + r] = f[a + r];
                        if (((s += u), (a += u), 0 == (i -= u))) {
                          h = !0;
                          break;
                        }
                      }
                      if (((f[s++] = m[o++]), 1 == --e)) {
                        h = !0;
                        break;
                      }
                    } while ((c--, cn <= l || cn <= u));
                    if (h) break;
                    c < 0 && (c = 0), (c += 2);
                  }
                  if (((y = c) < 1 && (y = 1), 1 === e)) {
                    for (r = 0; r < i; r++) f[s + r] = f[a + r];
                    f[s + i] = m[o];
                  } else {
                    if (0 === e) throw new Error();
                    for (r = 0; r < e; r++) f[s + r] = m[o + r];
                  }
                }
              }
            : function (t, e, n, i) {
                for (var r = 0, r = 0; r < i; r++) m[r] = f[n + r];
                var o = t + e - 1,
                  a = i - 1,
                  s = n + i - 1,
                  l = 0,
                  u = 0;
                if (((f[s--] = f[o--]), 0 == --e))
                  for (l = s - (i - 1), r = 0; r < i; r++) f[l + r] = m[r];
                else {
                  if (1 === i) {
                    for (
                      u = 1 + (s -= e), l = 1 + (o -= e), r = e - 1;
                      0 <= r;
                      r--
                    )
                      f[u + r] = f[l + r];
                    return (f[s] = m[a]);
                  }
                  for (var h = y; ; ) {
                    var c = 0,
                      p = 0,
                      d = !1;
                    do {
                      if (g(m[a], f[o]) < 0) {
                        if (((f[s--] = f[o--]), c++, (p = 0) == --e)) {
                          d = !0;
                          break;
                        }
                      } else if (((f[s--] = m[a--]), p++, (c = 0), 1 == --i)) {
                        d = !0;
                        break;
                      }
                    } while ((c | p) < h);
                    if (d) break;
                    do {
                      if (0 != (c = e - gn(m[a], f, t, e, e - 1, g))) {
                        for (
                          e -= c, u = 1 + (s -= c), l = 1 + (o -= c), r = c - 1;
                          0 <= r;
                          r--
                        )
                          f[u + r] = f[l + r];
                        if (0 === e) {
                          d = !0;
                          break;
                        }
                      }
                      if (((f[s--] = m[a--]), 1 == --i)) {
                        d = !0;
                        break;
                      }
                      if (0 != (p = i - fn(f[o], m, 0, i, i - 1, g))) {
                        for (
                          i -= p, u = 1 + (s -= p), l = 1 + (a -= p), r = 0;
                          r < p;
                          r++
                        )
                          f[u + r] = m[l + r];
                        if (i <= 1) {
                          d = !0;
                          break;
                        }
                      }
                      if (((f[s--] = f[o--]), 0 == --e)) {
                        d = !0;
                        break;
                      }
                    } while ((h--, cn <= c || cn <= p));
                    if (d) break;
                    h < 0 && (h = 0), (h += 2);
                  }
                  if (((y = h) < 1 && (y = 1), 1 === i)) {
                    for (
                      u = 1 + (s -= e), l = 1 + (o -= e), r = e - 1;
                      0 <= r;
                      r--
                    )
                      f[u + r] = f[l + r];
                    f[s] = m[a];
                  } else {
                    if (0 === i) throw new Error();
                    for (l = s - (i - 1), r = 0; r < i; r++) f[l + r] = m[r];
                  }
                }
              })(e, n, i, r);
    }
  }
  var mn = 1,
    vn = 4,
    _n = !1;
  function xn() {
    _n ||
      ((_n = !0),
      console.warn(
        "z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"
      ));
  }
  function wn(t, e) {
    return t.zlevel === e.zlevel
      ? t.z === e.z
        ? t.z2 - e.z2
        : t.z - e.z
      : t.zlevel - e.zlevel;
  }
  (Sn.prototype.traverse = function (t, e) {
    for (var n = 0; n < this._roots.length; n++) this._roots[n].traverse(t, e);
  }),
    (Sn.prototype.getDisplayList = function (t, e) {
      e = e || !1;
      var n = this._displayList;
      return (!t && n.length) || this.updateDisplayList(e), n;
    }),
    (Sn.prototype.updateDisplayList = function (t) {
      this._displayListLen = 0;
      for (
        var e = this._roots, n = this._displayList, i = 0, r = e.length;
        i < r;
        i++
      )
        this._updateAndAddDisplayable(e[i], null, t);
      (n.length = this._displayListLen), yn(n, wn);
    }),
    (Sn.prototype._updateAndAddDisplayable = function (t, e, n) {
      if (!t.ignore || n) {
        t.beforeUpdate(), t.update(), t.afterUpdate();
        var i = t.getClipPath();
        if (t.ignoreClip) e = null;
        else if (i) {
          e = e ? e.slice() : [];
          for (var r = i, o = t; r; )
            (r.parent = o),
              r.updateTransform(),
              e.push(r),
              (r = (o = r).getClipPath());
        }
        if (t.childrenRef) {
          for (var a = t.childrenRef(), s = 0; s < a.length; s++) {
            var l = a[s];
            t.__dirty && (l.__dirty |= mn),
              this._updateAndAddDisplayable(l, e, n);
          }
          t.__dirty = 0;
        } else {
          i = t;
          e && e.length
            ? (i.__clipPaths = e)
            : i.__clipPaths && 0 < i.__clipPaths.length && (i.__clipPaths = []),
            isNaN(i.z) && (xn(), (i.z = 0)),
            isNaN(i.z2) && (xn(), (i.z2 = 0)),
            isNaN(i.zlevel) && (xn(), (i.zlevel = 0)),
            (this._displayList[this._displayListLen++] = i);
        }
        (i = t.getDecalElement && t.getDecalElement()),
          (i =
            (i && this._updateAndAddDisplayable(i, e, n),
            t.getTextGuideLine())),
          (i =
            (i && this._updateAndAddDisplayable(i, e, n), t.getTextContent()));
        i && this._updateAndAddDisplayable(i, e, n);
      }
    }),
    (Sn.prototype.addRoot = function (t) {
      (t.__zr && t.__zr.storage === this) || this._roots.push(t);
    }),
    (Sn.prototype.delRoot = function (t) {
      if (t instanceof Array)
        for (var e = 0, n = t.length; e < n; e++) this.delRoot(t[e]);
      else {
        var i = I(this._roots, t);
        0 <= i && this._roots.splice(i, 1);
      }
    }),
    (Sn.prototype.delAllRoots = function () {
      (this._roots = []), (this._displayList = []), (this._displayListLen = 0);
    }),
    (Sn.prototype.getRoots = function () {
      return this._roots;
    }),
    (Sn.prototype.dispose = function () {
      (this._displayList = null), (this._roots = null);
    });
  var bn = Sn;
  function Sn() {
    (this._roots = []),
      (this._displayList = []),
      (this._displayListLen = 0),
      (this.displayableSortFunc = wn);
  }
  var Mn =
      (b.hasGlobalWindow &&
        ((window.requestAnimationFrame &&
          window.requestAnimationFrame.bind(window)) ||
          (window.msRequestAnimationFrame &&
            window.msRequestAnimationFrame.bind(window)) ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame)) ||
      function (t) {
        return setTimeout(t, 16);
      },
    Tn = {
      linear: function (t) {
        return t;
      },
      quadraticIn: function (t) {
        return t * t;
      },
      quadraticOut: function (t) {
        return t * (2 - t);
      },
      quadraticInOut: function (t) {
        return (t *= 2) < 1 ? 0.5 * t * t : -0.5 * (--t * (t - 2) - 1);
      },
      cubicIn: function (t) {
        return t * t * t;
      },
      cubicOut: function (t) {
        return --t * t * t + 1;
      },
      cubicInOut: function (t) {
        return (t *= 2) < 1 ? 0.5 * t * t * t : 0.5 * ((t -= 2) * t * t + 2);
      },
      quarticIn: function (t) {
        return t * t * t * t;
      },
      quarticOut: function (t) {
        return 1 - --t * t * t * t;
      },
      quarticInOut: function (t) {
        return (t *= 2) < 1
          ? 0.5 * t * t * t * t
          : -0.5 * ((t -= 2) * t * t * t - 2);
      },
      quinticIn: function (t) {
        return t * t * t * t * t;
      },
      quinticOut: function (t) {
        return --t * t * t * t * t + 1;
      },
      quinticInOut: function (t) {
        return (t *= 2) < 1
          ? 0.5 * t * t * t * t * t
          : 0.5 * ((t -= 2) * t * t * t * t + 2);
      },
      sinusoidalIn: function (t) {
        return 1 - Math.cos((t * Math.PI) / 2);
      },
      sinusoidalOut: function (t) {
        return Math.sin((t * Math.PI) / 2);
      },
      sinusoidalInOut: function (t) {
        return 0.5 * (1 - Math.cos(Math.PI * t));
      },
      exponentialIn: function (t) {
        return 0 === t ? 0 : Math.pow(1024, t - 1);
      },
      exponentialOut: function (t) {
        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t);
      },
      exponentialInOut: function (t) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : (t *= 2) < 1
          ? 0.5 * Math.pow(1024, t - 1)
          : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
      },
      circularIn: function (t) {
        return 1 - Math.sqrt(1 - t * t);
      },
      circularOut: function (t) {
        return Math.sqrt(1 - --t * t);
      },
      circularInOut: function (t) {
        return (t *= 2) < 1
          ? -0.5 * (Math.sqrt(1 - t * t) - 1)
          : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
      },
      elasticIn: function (t) {
        var e,
          n = 0.1;
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : ((e =
              !n || n < 1
                ? ((n = 1), 0.1)
                : (0.4 * Math.asin(1 / n)) / (2 * Math.PI)),
            -n *
              Math.pow(2, 10 * --t) *
              Math.sin(((t - e) * (2 * Math.PI)) / 0.4));
      },
      elasticOut: function (t) {
        var e,
          n = 0.1;
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : ((e =
              !n || n < 1
                ? ((n = 1), 0.1)
                : (0.4 * Math.asin(1 / n)) / (2 * Math.PI)),
            n *
              Math.pow(2, -10 * t) *
              Math.sin(((t - e) * (2 * Math.PI)) / 0.4) +
              1);
      },
      elasticInOut: function (t) {
        var e,
          n = 0.1;
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : ((e =
              !n || n < 1
                ? ((n = 1), 0.1)
                : (0.4 * Math.asin(1 / n)) / (2 * Math.PI)),
            (t *= 2) < 1
              ? n *
                Math.pow(2, 10 * --t) *
                Math.sin(((t - e) * (2 * Math.PI)) / 0.4) *
                -0.5
              : n *
                  Math.pow(2, -10 * --t) *
                  Math.sin(((t - e) * (2 * Math.PI)) / 0.4) *
                  0.5 +
                1);
      },
      backIn: function (t) {
        return t * t * (2.70158 * t - 1.70158);
      },
      backOut: function (t) {
        return --t * t * (2.70158 * t + 1.70158) + 1;
      },
      backInOut: function (t) {
        var e = 2.5949095;
        return (t *= 2) < 1
          ? t * t * ((1 + e) * t - e) * 0.5
          : 0.5 * ((t -= 2) * t * ((1 + e) * t + e) + 2);
      },
      bounceIn: function (t) {
        return 1 - Tn.bounceOut(1 - t);
      },
      bounceOut: function (t) {
        return t < 1 / 2.75
          ? 7.5625 * t * t
          : t < 2 / 2.75
          ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
          : t < 2.5 / 2.75
          ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
          : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
      },
      bounceInOut: function (t) {
        return t < 0.5
          ? 0.5 * Tn.bounceIn(2 * t)
          : 0.5 * Tn.bounceOut(2 * t - 1) + 0.5;
      },
    },
    Cn = Math.pow,
    In = Math.sqrt,
    Dn = 1e-8,
    kn = In(3),
    An = 1 / 3,
    Pn = Gt(),
    Ln = Gt(),
    On = Gt();
  function Rn(t) {
    return -Dn < t && t < Dn;
  }
  function Nn(t) {
    return Dn < t || t < -Dn;
  }
  function En(t, e, n, i, r) {
    var o = 1 - r;
    return o * o * (o * t + 3 * r * e) + r * r * (r * i + 3 * o * n);
  }
  function zn(t, e, n, i, r) {
    var o = 1 - r;
    return 3 * (((e - t) * o + 2 * (n - e) * r) * o + (i - n) * r * r);
  }
  function Bn(t, e, n, i, r, o) {
    var a,
      s,
      i = i + 3 * (e - n) - t,
      n = 3 * (n - 2 * e + t),
      e = 3 * (e - t),
      t = t - r,
      r = n * n - 3 * i * e,
      l = n * e - 9 * i * t,
      t = e * e - 3 * n * t,
      u = 0;
    return (
      Rn(r) && Rn(l)
        ? Rn(n)
          ? (o[0] = 0)
          : 0 <= (s = -e / n) && s <= 1 && (o[u++] = s)
        : Rn((e = l * l - 4 * r * t))
        ? ((a = -(t = l / r) / 2),
          0 <= (s = -n / i + t) && s <= 1 && (o[u++] = s),
          0 <= a && a <= 1 && (o[u++] = a))
        : 0 < e
        ? ((e = r * n + 1.5 * i * (-l - (t = In(e)))),
          0 <=
            (s =
              (-n -
                ((t =
                  (t = r * n + 1.5 * i * (-l + t)) < 0
                    ? -Cn(-t, An)
                    : Cn(t, An)) +
                  (e = e < 0 ? -Cn(-e, An) : Cn(e, An)))) /
              (3 * i)) &&
            s <= 1 &&
            (o[u++] = s))
        : ((t = (2 * r * n - 3 * i * l) / (2 * In(r * r * r))),
          (e = Math.acos(t) / 3),
          (s = (-n - 2 * (l = In(r)) * (t = Math.cos(e))) / (3 * i)),
          (a = (-n + l * (t + kn * Math.sin(e))) / (3 * i)),
          (r = (-n + l * (t - kn * Math.sin(e))) / (3 * i)),
          0 <= s && s <= 1 && (o[u++] = s),
          0 <= a && a <= 1 && (o[u++] = a),
          0 <= r && r <= 1 && (o[u++] = r)),
      u
    );
  }
  function Fn(t, e, n, i, r) {
    var o,
      a = 6 * n - 12 * e + 6 * t,
      i = 9 * e + 3 * i - 3 * t - 9 * n,
      n = 3 * e - 3 * t,
      e = 0;
    return (
      Rn(i)
        ? Nn(a) && 0 <= (o = -n / a) && o <= 1 && (r[e++] = o)
        : Rn((t = a * a - 4 * i * n))
        ? (r[0] = -a / (2 * i))
        : 0 < t &&
          ((t = (-a - (n = In(t))) / (2 * i)),
          0 <= (o = (-a + n) / (2 * i)) && o <= 1 && (r[e++] = o),
          0 <= t) &&
          t <= 1 &&
          (r[e++] = t),
      e
    );
  }
  function Vn(t, e, n, i, r, o) {
    var a = (e - t) * r + t,
      e = (n - e) * r + e,
      n = (i - n) * r + n,
      s = (e - a) * r + a,
      e = (n - e) * r + e,
      r = (e - s) * r + s;
    (o[0] = t),
      (o[1] = a),
      (o[2] = s),
      (o[3] = r),
      (o[4] = r),
      (o[5] = e),
      (o[6] = n),
      (o[7] = i);
  }
  function Hn(t, e, n, i, r, o, a, s, l, u, h) {
    var c,
      p,
      d,
      f,
      g = 0.005,
      y = 1 / 0;
    (Pn[0] = l), (Pn[1] = u);
    for (var m = 0; m < 1; m += 0.05)
      (Ln[0] = En(t, n, r, a, m)),
        (Ln[1] = En(e, i, o, s, m)),
        (d = Jt(Pn, Ln)) < y && ((c = m), (y = d));
    for (var y = 1 / 0, v = 0; v < 32 && !(g < 1e-4); v++)
      (p = c + g),
        (Ln[0] = En(t, n, r, a, (f = c - g))),
        (Ln[1] = En(e, i, o, s, f)),
        (d = Jt(Ln, Pn)),
        0 <= f && d < y
          ? ((c = f), (y = d))
          : ((On[0] = En(t, n, r, a, p)),
            (On[1] = En(e, i, o, s, p)),
            (f = Jt(On, Pn)),
            p <= 1 && f < y ? ((c = p), (y = f)) : (g *= 0.5));
    return h && ((h[0] = En(t, n, r, a, c)), (h[1] = En(e, i, o, s, c))), In(y);
  }
  function Gn(t, e, n, i) {
    var r = 1 - i;
    return r * (r * t + 2 * i * e) + i * i * n;
  }
  function Wn(t, e, n, i) {
    return 2 * ((1 - i) * (e - t) + i * (n - e));
  }
  function Un(t, e, n) {
    n = t + n - 2 * e;
    return 0 == n ? 0.5 : (t - e) / n;
  }
  function Xn(t, e, n, i, r) {
    var o = (e - t) * i + t,
      e = (n - e) * i + e,
      i = (e - o) * i + o;
    (r[0] = t), (r[1] = o), (r[2] = i), (r[3] = i), (r[4] = e), (r[5] = n);
  }
  function Yn(t, e, n, i, r, o, a, s, l) {
    var u,
      h = 0.005,
      c = 1 / 0;
    (Pn[0] = a), (Pn[1] = s);
    for (var p = 0; p < 1; p += 0.05)
      (Ln[0] = Gn(t, n, r, p)),
        (Ln[1] = Gn(e, i, o, p)),
        (y = Jt(Pn, Ln)) < c && ((u = p), (c = y));
    for (var c = 1 / 0, d = 0; d < 32 && !(h < 1e-4); d++) {
      var f = u - h,
        g = u + h,
        y = ((Ln[0] = Gn(t, n, r, f)), (Ln[1] = Gn(e, i, o, f)), Jt(Ln, Pn));
      0 <= f && y < c
        ? ((u = f), (c = y))
        : ((On[0] = Gn(t, n, r, g)),
          (On[1] = Gn(e, i, o, g)),
          (f = Jt(On, Pn)),
          g <= 1 && f < c ? ((u = g), (c = f)) : (h *= 0.5));
    }
    return l && ((l[0] = Gn(t, n, r, u)), (l[1] = Gn(e, i, o, u))), In(c);
  }
  var qn = /cubic-bezier\(([0-9,\.e ]+)\)/;
  function Zn(t) {
    t = t && qn.exec(t);
    if (t) {
      var e,
        t = t[1].split(","),
        n = +Ct(t[0]),
        i = +Ct(t[1]),
        r = +Ct(t[2]),
        o = +Ct(t[3]);
      if (!isNaN(n + i + r + o))
        return (
          (e = []),
          function (t) {
            return t <= 0
              ? 0
              : 1 <= t
              ? 1
              : Bn(0, n, r, 1, t, e) && En(0, i, o, 1, e[0]);
          }
        );
    }
  }
  (Kn.prototype.step = function (t, e) {
    if (
      (this._inited ||
        ((this._startTime = t + this._delay), (this._inited = !0)),
      !this._paused)
    ) {
      var n = this._life,
        i = t - this._startTime - this._pausedTime,
        r = i / n,
        o = (r < 0 && (r = 0), (r = Math.min(r, 1)), this.easingFunc),
        o = o ? o(r) : r;
      if ((this.onframe(o), 1 === r)) {
        if (!this.loop) return !0;
        (this._startTime = t - (i % n)),
          (this._pausedTime = 0),
          this.onrestart();
      }
      return !1;
    }
    this._pausedTime += e;
  }),
    (Kn.prototype.pause = function () {
      this._paused = !0;
    }),
    (Kn.prototype.resume = function () {
      this._paused = !1;
    }),
    (Kn.prototype.setEasing = function (t) {
      (this.easing = t), (this.easingFunc = S(t) ? t : Tn[t] || Zn(t));
    });
  var jn = Kn;
  function Kn(t) {
    (this._inited = !1),
      (this._startTime = 0),
      (this._pausedTime = 0),
      (this._paused = !1),
      (this._life = t.life || 1e3),
      (this._delay = t.delay || 0),
      (this.loop = t.loop || !1),
      (this.onframe = t.onframe || Ft),
      (this.ondestroy = t.ondestroy || Ft),
      (this.onrestart = t.onrestart || Ft),
      t.easing && this.setEasing(t.easing);
  }
  function $n(t) {
    this.value = t;
  }
  (Jn.prototype.insert = function (t) {
    t = new $n(t);
    return this.insertEntry(t), t;
  }),
    (Jn.prototype.insertEntry = function (t) {
      this.head
        ? (((this.tail.next = t).prev = this.tail),
          (t.next = null),
          (this.tail = t))
        : (this.head = this.tail = t),
        this._len++;
    }),
    (Jn.prototype.remove = function (t) {
      var e = t.prev,
        n = t.next;
      e ? (e.next = n) : (this.head = n),
        n ? (n.prev = e) : (this.tail = e),
        (t.next = t.prev = null),
        this._len--;
    }),
    (Jn.prototype.len = function () {
      return this._len;
    }),
    (Jn.prototype.clear = function () {
      (this.head = this.tail = null), (this._len = 0);
    });
  var Qn = Jn;
  function Jn() {
    this._len = 0;
  }
  (ei.prototype.put = function (t, e) {
    var n,
      i,
      r = this._list,
      o = this._map,
      a = null;
    return (
      null == o[t] &&
        ((i = r.len()),
        (n = this._lastRemovedEntry),
        i >= this._maxSize &&
          0 < i &&
          ((i = r.head),
          r.remove(i),
          delete o[i.key],
          (a = i.value),
          (this._lastRemovedEntry = i)),
        n ? (n.value = e) : (n = new $n(e)),
        (n.key = t),
        r.insertEntry(n),
        (o[t] = n)),
      a
    );
  }),
    (ei.prototype.get = function (t) {
      var t = this._map[t],
        e = this._list;
      if (null != t)
        return t !== e.tail && (e.remove(t), e.insertEntry(t)), t.value;
    }),
    (ei.prototype.clear = function () {
      this._list.clear(), (this._map = {});
    }),
    (ei.prototype.len = function () {
      return this._list.len();
    });
  var ti = ei;
  function ei(t) {
    (this._list = new Qn()),
      (this._maxSize = 10),
      (this._map = {}),
      (this._maxSize = t);
  }
  var ni = {
    transparent: [0, 0, 0, 0],
    aliceblue: [240, 248, 255, 1],
    antiquewhite: [250, 235, 215, 1],
    aqua: [0, 255, 255, 1],
    aquamarine: [127, 255, 212, 1],
    azure: [240, 255, 255, 1],
    beige: [245, 245, 220, 1],
    bisque: [255, 228, 196, 1],
    black: [0, 0, 0, 1],
    blanchedalmond: [255, 235, 205, 1],
    blue: [0, 0, 255, 1],
    blueviolet: [138, 43, 226, 1],
    brown: [165, 42, 42, 1],
    burlywood: [222, 184, 135, 1],
    cadetblue: [95, 158, 160, 1],
    chartreuse: [127, 255, 0, 1],
    chocolate: [210, 105, 30, 1],
    coral: [255, 127, 80, 1],
    cornflowerblue: [100, 149, 237, 1],
    cornsilk: [255, 248, 220, 1],
    crimson: [220, 20, 60, 1],
    cyan: [0, 255, 255, 1],
    darkblue: [0, 0, 139, 1],
    darkcyan: [0, 139, 139, 1],
    darkgoldenrod: [184, 134, 11, 1],
    darkgray: [169, 169, 169, 1],
    darkgreen: [0, 100, 0, 1],
    darkgrey: [169, 169, 169, 1],
    darkkhaki: [189, 183, 107, 1],
    darkmagenta: [139, 0, 139, 1],
    darkolivegreen: [85, 107, 47, 1],
    darkorange: [255, 140, 0, 1],
    darkorchid: [153, 50, 204, 1],
    darkred: [139, 0, 0, 1],
    darksalmon: [233, 150, 122, 1],
    darkseagreen: [143, 188, 143, 1],
    darkslateblue: [72, 61, 139, 1],
    darkslategray: [47, 79, 79, 1],
    darkslategrey: [47, 79, 79, 1],
    darkturquoise: [0, 206, 209, 1],
    darkviolet: [148, 0, 211, 1],
    deeppink: [255, 20, 147, 1],
    deepskyblue: [0, 191, 255, 1],
    dimgray: [105, 105, 105, 1],
    dimgrey: [105, 105, 105, 1],
    dodgerblue: [30, 144, 255, 1],
    firebrick: [178, 34, 34, 1],
    floralwhite: [255, 250, 240, 1],
    forestgreen: [34, 139, 34, 1],
    fuchsia: [255, 0, 255, 1],
    gainsboro: [220, 220, 220, 1],
    ghostwhite: [248, 248, 255, 1],
    gold: [255, 215, 0, 1],
    goldenrod: [218, 165, 32, 1],
    gray: [128, 128, 128, 1],
    green: [0, 128, 0, 1],
    greenyellow: [173, 255, 47, 1],
    grey: [128, 128, 128, 1],
    honeydew: [240, 255, 240, 1],
    hotpink: [255, 105, 180, 1],
    indianred: [205, 92, 92, 1],
    indigo: [75, 0, 130, 1],
    ivory: [255, 255, 240, 1],
    khaki: [240, 230, 140, 1],
    lavender: [230, 230, 250, 1],
    lavenderblush: [255, 240, 245, 1],
    lawngreen: [124, 252, 0, 1],
    lemonchiffon: [255, 250, 205, 1],
    lightblue: [173, 216, 230, 1],
    lightcoral: [240, 128, 128, 1],
    lightcyan: [224, 255, 255, 1],
    lightgoldenrodyellow: [250, 250, 210, 1],
    lightgray: [211, 211, 211, 1],
    lightgreen: [144, 238, 144, 1],
    lightgrey: [211, 211, 211, 1],
    lightpink: [255, 182, 193, 1],
    lightsalmon: [255, 160, 122, 1],
    lightseagreen: [32, 178, 170, 1],
    lightskyblue: [135, 206, 250, 1],
    lightslategray: [119, 136, 153, 1],
    lightslategrey: [119, 136, 153, 1],
    lightsteelblue: [176, 196, 222, 1],
    lightyellow: [255, 255, 224, 1],
    lime: [0, 255, 0, 1],
    limegreen: [50, 205, 50, 1],
    linen: [250, 240, 230, 1],
    magenta: [255, 0, 255, 1],
    maroon: [128, 0, 0, 1],
    mediumaquamarine: [102, 205, 170, 1],
    mediumblue: [0, 0, 205, 1],
    mediumorchid: [186, 85, 211, 1],
    mediumpurple: [147, 112, 219, 1],
    mediumseagreen: [60, 179, 113, 1],
    mediumslateblue: [123, 104, 238, 1],
    mediumspringgreen: [0, 250, 154, 1],
    mediumturquoise: [72, 209, 204, 1],
    mediumvioletred: [199, 21, 133, 1],
    midnightblue: [25, 25, 112, 1],
    mintcream: [245, 255, 250, 1],
    mistyrose: [255, 228, 225, 1],
    moccasin: [255, 228, 181, 1],
    navajowhite: [255, 222, 173, 1],
    navy: [0, 0, 128, 1],
    oldlace: [253, 245, 230, 1],
    olive: [128, 128, 0, 1],
    olivedrab: [107, 142, 35, 1],
    orange: [255, 165, 0, 1],
    orangered: [255, 69, 0, 1],
    orchid: [218, 112, 214, 1],
    palegoldenrod: [238, 232, 170, 1],
    palegreen: [152, 251, 152, 1],
    paleturquoise: [175, 238, 238, 1],
    palevioletred: [219, 112, 147, 1],
    papayawhip: [255, 239, 213, 1],
    peachpuff: [255, 218, 185, 1],
    peru: [205, 133, 63, 1],
    pink: [255, 192, 203, 1],
    plum: [221, 160, 221, 1],
    powderblue: [176, 224, 230, 1],
    purple: [128, 0, 128, 1],
    red: [255, 0, 0, 1],
    rosybrown: [188, 143, 143, 1],
    royalblue: [65, 105, 225, 1],
    saddlebrown: [139, 69, 19, 1],
    salmon: [250, 128, 114, 1],
    sandybrown: [244, 164, 96, 1],
    seagreen: [46, 139, 87, 1],
    seashell: [255, 245, 238, 1],
    sienna: [160, 82, 45, 1],
    silver: [192, 192, 192, 1],
    skyblue: [135, 206, 235, 1],
    slateblue: [106, 90, 205, 1],
    slategray: [112, 128, 144, 1],
    slategrey: [112, 128, 144, 1],
    snow: [255, 250, 250, 1],
    springgreen: [0, 255, 127, 1],
    steelblue: [70, 130, 180, 1],
    tan: [210, 180, 140, 1],
    teal: [0, 128, 128, 1],
    thistle: [216, 191, 216, 1],
    tomato: [255, 99, 71, 1],
    turquoise: [64, 224, 208, 1],
    violet: [238, 130, 238, 1],
    wheat: [245, 222, 179, 1],
    white: [255, 255, 255, 1],
    whitesmoke: [245, 245, 245, 1],
    yellow: [255, 255, 0, 1],
    yellowgreen: [154, 205, 50, 1],
  };
  function ii(t) {
    return (t = Math.round(t)) < 0 ? 0 : 255 < t ? 255 : t;
  }
  function ri(t) {
    return t < 0 ? 0 : 1 < t ? 1 : t;
  }
  function oi(t) {
    return t.length && "%" === t.charAt(t.length - 1)
      ? ii((parseFloat(t) / 100) * 255)
      : ii(parseInt(t, 10));
  }
  function ai(t) {
    return t.length && "%" === t.charAt(t.length - 1)
      ? ri(parseFloat(t) / 100)
      : ri(parseFloat(t));
  }
  function si(t, e, n) {
    return (
      n < 0 ? (n += 1) : 1 < n && --n,
      6 * n < 1
        ? t + (e - t) * n * 6
        : 2 * n < 1
        ? e
        : 3 * n < 2
        ? t + (e - t) * (2 / 3 - n) * 6
        : t
    );
  }
  function li(t, e, n) {
    return t + (e - t) * n;
  }
  function ui(t, e, n, i, r) {
    return (t[0] = e), (t[1] = n), (t[2] = i), (t[3] = r), t;
  }
  function hi(t, e) {
    return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), (t[3] = e[3]), t;
  }
  var ci = new ti(20),
    pi = null;
  function di(t, e) {
    pi && hi(pi, e), (pi = ci.put(t, pi || e.slice()));
  }
  function fi(t, e) {
    if (t) {
      e = e || [];
      var n = ci.get(t);
      if (n) return hi(e, n);
      n = (t += "").replace(/ /g, "").toLowerCase();
      if (n in ni) return hi(e, ni[n]), di(t, e), e;
      var i = n.length;
      if ("#" === n.charAt(0))
        return 4 === i || 5 === i
          ? 0 <= (r = parseInt(n.slice(1, 4), 16)) && r <= 4095
            ? (ui(
                e,
                ((3840 & r) >> 4) | ((3840 & r) >> 8),
                (240 & r) | ((240 & r) >> 4),
                (15 & r) | ((15 & r) << 4),
                5 === i ? parseInt(n.slice(4), 16) / 15 : 1
              ),
              di(t, e),
              e)
            : void ui(e, 0, 0, 0, 1)
          : 7 === i || 9 === i
          ? 0 <= (r = parseInt(n.slice(1, 7), 16)) && r <= 16777215
            ? (ui(
                e,
                (16711680 & r) >> 16,
                (65280 & r) >> 8,
                255 & r,
                9 === i ? parseInt(n.slice(7), 16) / 255 : 1
              ),
              di(t, e),
              e)
            : void ui(e, 0, 0, 0, 1)
          : void 0;
      var r = n.indexOf("("),
        o = n.indexOf(")");
      if (-1 !== r && o + 1 === i) {
        var i = n.substr(0, r),
          a = n.substr(r + 1, o - (r + 1)).split(","),
          s = 1;
        switch (i) {
          case "rgba":
            if (4 !== a.length)
              return 3 === a.length
                ? ui(e, +a[0], +a[1], +a[2], 1)
                : ui(e, 0, 0, 0, 1);
            s = ai(a.pop());
          case "rgb":
            return 3 <= a.length
              ? (ui(
                  e,
                  oi(a[0]),
                  oi(a[1]),
                  oi(a[2]),
                  3 === a.length ? s : ai(a[3])
                ),
                di(t, e),
                e)
              : void ui(e, 0, 0, 0, 1);
          case "hsla":
            return 4 !== a.length
              ? void ui(e, 0, 0, 0, 1)
              : ((a[3] = ai(a[3])), gi(a, e), di(t, e), e);
          case "hsl":
            return 3 !== a.length
              ? void ui(e, 0, 0, 0, 1)
              : (gi(a, e), di(t, e), e);
          default:
            return;
        }
      }
      ui(e, 0, 0, 0, 1);
    }
  }
  function gi(t, e) {
    var n = (((parseFloat(t[0]) % 360) + 360) % 360) / 360,
      i = ai(t[1]),
      r = ai(t[2]),
      i = r <= 0.5 ? r * (i + 1) : r + i - r * i,
      r = 2 * r - i;
    return (
      ui(
        (e = e || []),
        ii(255 * si(r, i, n + 1 / 3)),
        ii(255 * si(r, i, n)),
        ii(255 * si(r, i, n - 1 / 3)),
        1
      ),
      4 === t.length && (e[3] = t[3]),
      e
    );
  }
  function yi(t, e) {
    var n = fi(t);
    if (n) {
      for (var i = 0; i < 3; i++)
        (n[i] = e < 0 ? (n[i] * (1 - e)) | 0 : ((255 - n[i]) * e + n[i]) | 0),
          255 < n[i] ? (n[i] = 255) : n[i] < 0 && (n[i] = 0);
      return _i(n, 4 === n.length ? "rgba" : "rgb");
    }
  }
  function mi(t, e, n) {
    var i, r, o;
    if (e && e.length && 0 <= t && t <= 1)
      return (
        (n = n || []),
        (t = t * (e.length - 1)),
        (i = Math.floor(t)),
        (o = Math.ceil(t)),
        (r = e[i]),
        (e = e[o]),
        (n[0] = ii(li(r[0], e[0], (o = t - i)))),
        (n[1] = ii(li(r[1], e[1], o))),
        (n[2] = ii(li(r[2], e[2], o))),
        (n[3] = ri(li(r[3], e[3], o))),
        n
      );
  }
  function vi(t, e, n) {
    var i, r, o, a;
    if (e && e.length && 0 <= t && t <= 1)
      return (
        (t = t * (e.length - 1)),
        (i = Math.floor(t)),
        (r = Math.ceil(t)),
        (a = fi(e[i])),
        (e = fi(e[r])),
        (a = _i(
          [
            ii(li(a[0], e[0], (o = t - i))),
            ii(li(a[1], e[1], o)),
            ii(li(a[2], e[2], o)),
            ri(li(a[3], e[3], o)),
          ],
          "rgba"
        )),
        n ? { color: a, leftIndex: i, rightIndex: r, value: t } : a
      );
  }
  function _i(t, e) {
    var n;
    if (t && t.length)
      return (
        (n = t[0] + "," + t[1] + "," + t[2]),
        ("rgba" !== e && "hsva" !== e && "hsla" !== e) || (n += "," + t[3]),
        e + "(" + n + ")"
      );
  }
  function xi(t, e) {
    t = fi(t);
    return t
      ? ((0.299 * t[0] + 0.587 * t[1] + 0.114 * t[2]) * t[3]) / 255 +
          (1 - t[3]) * e
      : 0;
  }
  var wi = Object.freeze({
    __proto__: null,
    fastLerp: mi,
    fastMapToColor: mi,
    lerp: vi,
    lift: yi,
    lum: xi,
    mapToColor: vi,
    modifyAlpha: function (t, e) {
      if ((t = fi(t)) && null != e) return (t[3] = ri(e)), _i(t, "rgba");
    },
    modifyHSL: function (t, e, n, i) {
      var r = fi(t);
      if (t)
        return (
          (r = (function (t) {
            var e, n, i, r, o, a, s, l, u, h;
            if (t)
              return (
                (h = t[0] / 255),
                (n = t[1] / 255),
                (i = t[2] / 255),
                (s = Math.min(h, n, i)),
                (o = ((r = Math.max(h, n, i)) + s) / 2),
                0 == (u = r - s)
                  ? (a = e = 0)
                  : ((a = o < 0.5 ? u / (r + s) : u / (2 - r - s)),
                    (s = ((r - h) / 6 + u / 2) / u),
                    (l = ((r - n) / 6 + u / 2) / u),
                    (u = ((r - i) / 6 + u / 2) / u),
                    h === r
                      ? (e = u - l)
                      : n === r
                      ? (e = 1 / 3 + s - u)
                      : i === r && (e = 2 / 3 + l - s),
                    e < 0 && (e += 1),
                    1 < e && --e),
                (h = [360 * e, a, o]),
                null != t[3] && h.push(t[3]),
                h
              );
          })(r)),
          null != e &&
            (r[0] = ((t = e), (t = Math.round(t)) < 0 ? 0 : 360 < t ? 360 : t)),
          null != n && (r[1] = ai(n)),
          null != i && (r[2] = ai(i)),
          _i(gi(r), "rgba")
        );
    },
    parse: fi,
    random: function () {
      return _i(
        [
          Math.round(255 * Math.random()),
          Math.round(255 * Math.random()),
          Math.round(255 * Math.random()),
        ],
        "rgb"
      );
    },
    stringify: _i,
    toHex: function (t) {
      if ((t = fi(t)))
        return ((1 << 24) + (t[0] << 16) + (t[1] << 8) + +t[2])
          .toString(16)
          .slice(1);
    },
  });
  b.hasGlobalWindow && S(window.btoa);
  var bi = Array.prototype.slice;
  function Si(t, e, n) {
    return (e - t) * n + t;
  }
  function Mi(t, e, n, i) {
    for (var r = e.length, o = 0; o < r; o++) t[o] = Si(e[o], n[o], i);
    return t;
  }
  function Ti(t, e, n, i) {
    for (var r = e.length, o = 0; o < r; o++) t[o] = e[o] + n[o] * i;
    return t;
  }
  function Ci(t, e, n, i) {
    for (var r = e.length, o = r && e[0].length, a = 0; a < r; a++) {
      t[a] || (t[a] = []);
      for (var s = 0; s < o; s++) t[a][s] = e[a][s] + n[a][s] * i;
    }
    return t;
  }
  function Ii(t) {
    if (st(t)) {
      var e = t.length;
      if (st(t[0])) {
        for (var n = [], i = 0; i < e; i++) n.push(bi.call(t[i]));
        return n;
      }
      return bi.call(t);
    }
    return t;
  }
  function Di(t) {
    return (
      (t[0] = Math.floor(t[0]) || 0),
      (t[1] = Math.floor(t[1]) || 0),
      (t[2] = Math.floor(t[2]) || 0),
      (t[3] = null == t[3] ? 1 : t[3]),
      "rgba(" + t.join(",") + ")"
    );
  }
  function ki(t) {
    return 4 === t || 5 === t;
  }
  function Ai(t) {
    return 1 === t || 2 === t;
  }
  var Pi = [0, 0, 0, 0],
    Li =
      ((Ni.prototype.isFinished = function () {
        return this._finished;
      }),
      (Ni.prototype.setFinished = function () {
        (this._finished = !0),
          this._additiveTrack && this._additiveTrack.setFinished();
      }),
      (Ni.prototype.needsAnimate = function () {
        return 1 <= this.keyframes.length;
      }),
      (Ni.prototype.getAdditiveTrack = function () {
        return this._additiveTrack;
      }),
      (Ni.prototype.addKeyframe = function (t, e, n) {
        this._needsSort = !0;
        var i,
          r = this.keyframes,
          o = r.length,
          a = !1,
          s = 6,
          l = e,
          u =
            (st(e)
              ? ((1 == (s = i = st((i = e) && i[0]) ? 2 : 1) && !G(e[0])) ||
                  (2 == i && !G(e[0][0]))) &&
                (a = !0)
              : G(e) && !xt(e)
              ? (s = 0)
              : H(e)
              ? isNaN(+e)
                ? (i = fi(e)) && ((l = i), (s = 3))
                : (s = 0)
              : mt(e) &&
                (((u = L({}, l)).colorStops = F(e.colorStops, function (t) {
                  return { offset: t.offset, color: fi(t.color) };
                })),
                "linear" === e.type ? (s = 4) : "radial" === e.type && (s = 5),
                (l = u)),
            0 === o
              ? (this.valType = s)
              : (s === this.valType && 6 !== s) || (a = !0),
            (this.discrete = this.discrete || a),
            { time: t, value: l, rawValue: e, percent: 0 });
        return (
          n && ((u.easing = n), (u.easingFunc = S(n) ? n : Tn[n] || Zn(n))),
          r.push(u),
          u
        );
      }),
      (Ni.prototype.prepare = function (t, e) {
        var n = this.keyframes;
        this._needsSort &&
          n.sort(function (t, e) {
            return t.time - e.time;
          });
        for (
          var i = this.valType,
            r = n.length,
            o = n[r - 1],
            a = this.discrete,
            s = Ai(i),
            l = ki(i),
            u = 0;
          u < r;
          u++
        ) {
          var h = n[u],
            c = h.value,
            p = o.value;
          if (((h.percent = h.time / t), !a))
            if (s && u !== r - 1) {
              h = void 0;
              d = void 0;
              f = void 0;
              g = void 0;
              y = void 0;
              m = void 0;
              v = void 0;
              _ = void 0;
              x = void 0;
              h = c;
              var d = p;
              var f = i;
              var g = h,
                y = d;
              if (g.push && y.push) {
                var h = g.length,
                  m = y.length;
                if (h !== m)
                  if (m < h) g.length = m;
                  else
                    for (var v = h; v < m; v++)
                      g.push(1 === f ? y[v] : bi.call(y[v]));
                for (var _ = g[0] && g[0].length, v = 0; v < g.length; v++)
                  if (1 === f) isNaN(g[v]) && (g[v] = y[v]);
                  else
                    for (var x = 0; x < _; x++)
                      isNaN(g[v][x]) && (g[v][x] = y[v][x]);
              }
            } else if (l) {
              d = void 0;
              h = void 0;
              w = void 0;
              b = void 0;
              S = void 0;
              M = void 0;
              T = void 0;
              d = c.colorStops;
              h = p.colorStops;
              for (
                var w = d.length,
                  b = h.length,
                  S = b < w ? h : d,
                  h = Math.min(w, b),
                  M = S[h - 1] || { color: [0, 0, 0, 0], offset: 0 },
                  T = h;
                T < Math.max(w, b);
                T++
              )
                S.push({ offset: M.offset, color: M.color.slice() });
            }
        }
        if (
          !a &&
          5 !== i &&
          e &&
          this.needsAnimate() &&
          e.needsAnimate() &&
          i === e.valType &&
          !e._finished
        ) {
          this._additiveTrack = e;
          for (var C = n[0].value, u = 0; u < r; u++)
            0 === i
              ? (n[u].additiveValue = n[u].value - C)
              : 3 === i
              ? (n[u].additiveValue = Ti([], n[u].value, C, -1))
              : Ai(i) &&
                (n[u].additiveValue = (1 === i ? Ti : Ci)(
                  [],
                  n[u].value,
                  C,
                  -1
                ));
        }
      }),
      (Ni.prototype.step = function (t, e) {
        if (!this._finished) {
          this._additiveTrack &&
            this._additiveTrack._finished &&
            (this._additiveTrack = null);
          var n,
            i,
            r,
            o,
            a,
            s = null != this._additiveTrack,
            l = s ? "additiveValue" : "value",
            u = this.valType,
            h = this.keyframes,
            c = h.length,
            p = this.propName,
            d = 3 === u,
            f = this._lastFr,
            g = Math.min;
          if (1 === c) i = r = h[0];
          else {
            if (e < 0) n = 0;
            else if (e < this._lastFrP) {
              for (n = g(f + 1, c - 1); 0 <= n && !(h[n].percent <= e); n--);
              n = g(n, c - 2);
            } else {
              for (n = f; n < c && !(h[n].percent > e); n++);
              n = g(n - 1, c - 2);
            }
            (r = h[n + 1]), (i = h[n]);
          }
          i &&
            r &&
            ((this._lastFr = n),
            (this._lastFrP = e),
            (f = r.percent - i.percent),
            (o = 0 == f ? 1 : g((e - i.percent) / f, 1)),
            r.easingFunc && (o = r.easingFunc(o)),
            (g = s ? this._additiveValue : d ? Pi : t[p]),
            (Ai(u) || d) && (g = g || (this._additiveValue = [])),
            this.discrete
              ? (t[p] = (o < 1 ? i : r).rawValue)
              : Ai(u)
              ? (1 === u
                  ? Mi
                  : function (t, e, n, i) {
                      for (
                        var r = e.length, o = r && e[0].length, a = 0;
                        a < r;
                        a++
                      ) {
                        t[a] || (t[a] = []);
                        for (var s = 0; s < o; s++)
                          t[a][s] = Si(e[a][s], n[a][s], i);
                      }
                    })(g, i[l], r[l], o)
              : ki(u)
              ? ((f = i[l]),
                (a = r[l]),
                (t[p] = {
                  type: (u = 4 === u) ? "linear" : "radial",
                  x: Si(f.x, a.x, o),
                  y: Si(f.y, a.y, o),
                  colorStops: F(f.colorStops, function (t, e) {
                    e = a.colorStops[e];
                    return {
                      offset: Si(t.offset, e.offset, o),
                      color: Di(Mi([], t.color, e.color, o)),
                    };
                  }),
                  global: a.global,
                }),
                u
                  ? ((t[p].x2 = Si(f.x2, a.x2, o)),
                    (t[p].y2 = Si(f.y2, a.y2, o)))
                  : (t[p].r = Si(f.r, a.r, o)))
              : d
              ? (Mi(g, i[l], r[l], o), s || (t[p] = Di(g)))
              : ((u = Si(i[l], r[l], o)),
                s ? (this._additiveValue = u) : (t[p] = u)),
            s) &&
            this._addToTarget(t);
        }
      }),
      (Ni.prototype._addToTarget = function (t) {
        var e = this.valType,
          n = this.propName,
          i = this._additiveValue;
        0 === e
          ? (t[n] = t[n] + i)
          : 3 === e
          ? (fi(t[n], Pi), Ti(Pi, Pi, i, 1), (t[n] = Di(Pi)))
          : 1 === e
          ? Ti(t[n], t[n], i, 1)
          : 2 === e && Ci(t[n], t[n], i, 1);
      }),
      Ni),
    Oi =
      ((Ri.prototype.getMaxTime = function () {
        return this._maxTime;
      }),
      (Ri.prototype.getDelay = function () {
        return this._delay;
      }),
      (Ri.prototype.getLoop = function () {
        return this._loop;
      }),
      (Ri.prototype.getTarget = function () {
        return this._target;
      }),
      (Ri.prototype.changeTarget = function (t) {
        this._target = t;
      }),
      (Ri.prototype.when = function (t, e, n) {
        return this.whenWithKeys(t, e, ht(e), n);
      }),
      (Ri.prototype.whenWithKeys = function (t, e, n, i) {
        for (var r = this._tracks, o = 0; o < n.length; o++) {
          var a = n[o];
          if (!(l = r[a])) {
            var s,
              l = (r[a] = new Li(a)),
              u = void 0,
              h = this._getAdditiveTrack(a);
            if (
              (h
                ? ((u = (s = (s = h.keyframes)[s.length - 1]) && s.value),
                  3 === h.valType && (u = u && Di(u)))
                : (u = this._target[a]),
              null == u)
            )
              continue;
            0 < t && l.addKeyframe(0, Ii(u), i), this._trackKeys.push(a);
          }
          l.addKeyframe(t, Ii(e[a]), i);
        }
        return (this._maxTime = Math.max(this._maxTime, t)), this;
      }),
      (Ri.prototype.pause = function () {
        this._clip.pause(), (this._paused = !0);
      }),
      (Ri.prototype.resume = function () {
        this._clip.resume(), (this._paused = !1);
      }),
      (Ri.prototype.isPaused = function () {
        return !!this._paused;
      }),
      (Ri.prototype.duration = function (t) {
        return (this._maxTime = t), (this._force = !0), this;
      }),
      (Ri.prototype._doneCallback = function () {
        this._setTracksFinished(), (this._clip = null);
        var t = this._doneCbs;
        if (t) for (var e = t.length, n = 0; n < e; n++) t[n].call(this);
      }),
      (Ri.prototype._abortedCallback = function () {
        this._setTracksFinished();
        var t = this.animation,
          e = this._abortedCbs;
        if ((t && t.removeClip(this._clip), (this._clip = null), e))
          for (var n = 0; n < e.length; n++) e[n].call(this);
      }),
      (Ri.prototype._setTracksFinished = function () {
        for (
          var t = this._tracks, e = this._trackKeys, n = 0;
          n < e.length;
          n++
        )
          t[e[n]].setFinished();
      }),
      (Ri.prototype._getAdditiveTrack = function (t) {
        var e,
          n = this._additiveAnimators;
        if (n)
          for (var i = 0; i < n.length; i++) {
            var r = n[i].getTrack(t);
            r && (e = r);
          }
        return e;
      }),
      (Ri.prototype.start = function (t) {
        if (!(0 < this._started)) {
          this._started = 1;
          for (
            var e, o = this, a = [], n = this._maxTime || 0, i = 0;
            i < this._trackKeys.length;
            i++
          ) {
            var r = this._trackKeys[i],
              s = this._tracks[r],
              r = this._getAdditiveTrack(r),
              l = s.keyframes,
              u = l.length;
            s.prepare(n, r),
              s.needsAnimate() &&
                (!this._allowDiscrete && s.discrete
                  ? ((r = l[u - 1]) && (o._target[s.propName] = r.rawValue),
                    s.setFinished())
                  : a.push(s));
          }
          return (
            a.length || this._force
              ? ((e = new jn({
                  life: n,
                  loop: this._loop,
                  delay: this._delay || 0,
                  onframe: function (t) {
                    o._started = 2;
                    var e = o._additiveAnimators;
                    if (e) {
                      for (var n = !1, i = 0; i < e.length; i++)
                        if (e[i]._clip) {
                          n = !0;
                          break;
                        }
                      n || (o._additiveAnimators = null);
                    }
                    for (i = 0; i < a.length; i++) a[i].step(o._target, t);
                    var r = o._onframeCbs;
                    if (r) for (i = 0; i < r.length; i++) r[i](o._target, t);
                  },
                  ondestroy: function () {
                    o._doneCallback();
                  },
                })),
                (this._clip = e),
                this.animation && this.animation.addClip(e),
                t && e.setEasing(t))
              : this._doneCallback(),
            this
          );
        }
      }),
      (Ri.prototype.stop = function (t) {
        var e;
        this._clip &&
          ((e = this._clip), t && e.onframe(1), this._abortedCallback());
      }),
      (Ri.prototype.delay = function (t) {
        return (this._delay = t), this;
      }),
      (Ri.prototype.during = function (t) {
        return (
          t &&
            (this._onframeCbs || (this._onframeCbs = []),
            this._onframeCbs.push(t)),
          this
        );
      }),
      (Ri.prototype.done = function (t) {
        return (
          t && (this._doneCbs || (this._doneCbs = []), this._doneCbs.push(t)),
          this
        );
      }),
      (Ri.prototype.aborted = function (t) {
        return (
          t &&
            (this._abortedCbs || (this._abortedCbs = []),
            this._abortedCbs.push(t)),
          this
        );
      }),
      (Ri.prototype.getClip = function () {
        return this._clip;
      }),
      (Ri.prototype.getTrack = function (t) {
        return this._tracks[t];
      }),
      (Ri.prototype.getTracks = function () {
        var e = this;
        return F(this._trackKeys, function (t) {
          return e._tracks[t];
        });
      }),
      (Ri.prototype.stopTracks = function (t, e) {
        if (!t.length || !this._clip) return !0;
        for (
          var n = this._tracks, i = this._trackKeys, r = 0;
          r < t.length;
          r++
        ) {
          var o = n[t[r]];
          o &&
            !o.isFinished() &&
            (e
              ? o.step(this._target, 1)
              : 1 === this._started && o.step(this._target, 0),
            o.setFinished());
        }
        for (var a = !0, r = 0; r < i.length; r++)
          if (!n[i[r]].isFinished()) {
            a = !1;
            break;
          }
        return a && this._abortedCallback(), a;
      }),
      (Ri.prototype.saveTo = function (t, e, n) {
        if (t) {
          e = e || this._trackKeys;
          for (var i = 0; i < e.length; i++) {
            var r = e[i],
              o = this._tracks[r];
            o &&
              !o.isFinished() &&
              (o = (o = o.keyframes)[n ? 0 : o.length - 1]) &&
              (t[r] = Ii(o.rawValue));
          }
        }
      }),
      (Ri.prototype.__changeFinalValue = function (t, e) {
        e = e || ht(t);
        for (var n = 0; n < e.length; n++) {
          var i,
            r = e[n],
            o = this._tracks[r];
          o &&
            1 < (i = o.keyframes).length &&
            ((i = i.pop()),
            o.addKeyframe(i.time, t[r]),
            o.prepare(this._maxTime, o.getAdditiveTrack()));
        }
      }),
      Ri);
  function Ri(t, e, n, i) {
    (this._tracks = {}),
      (this._trackKeys = []),
      (this._maxTime = 0),
      (this._started = 0),
      (this._clip = null),
      (this._target = t),
      (this._loop = e) && i
        ? it("Can' use additive animation on looped animation.")
        : ((this._additiveAnimators = i), (this._allowDiscrete = n));
  }
  function Ni(t) {
    (this.keyframes = []),
      (this.discrete = !1),
      (this._invalid = !1),
      (this._needsSort = !1),
      (this._lastFr = 0),
      (this._lastFrP = 0),
      (this.propName = t);
  }
  function Ei() {
    return new Date().getTime();
  }
  u(Fi, (zi = le)),
    (Fi.prototype.addClip = function (t) {
      t.animation && this.removeClip(t),
        this._head
          ? (((this._tail.next = t).prev = this._tail),
            (t.next = null),
            (this._tail = t))
          : (this._head = this._tail = t),
        (t.animation = this);
    }),
    (Fi.prototype.addAnimator = function (t) {
      t.animation = this;
      t = t.getClip();
      t && this.addClip(t);
    }),
    (Fi.prototype.removeClip = function (t) {
      var e, n;
      t.animation &&
        ((e = t.prev),
        (n = t.next),
        e ? (e.next = n) : (this._head = n),
        n ? (n.prev = e) : (this._tail = e),
        (t.next = t.prev = t.animation = null));
    }),
    (Fi.prototype.removeAnimator = function (t) {
      var e = t.getClip();
      e && this.removeClip(e), (t.animation = null);
    }),
    (Fi.prototype.update = function (t) {
      for (
        var e = Ei() - this._pausedTime, n = e - this._time, i = this._head;
        i;

      )
        var r = i.next,
          i = (i.step(e, n) && (i.ondestroy(), this.removeClip(i)), r);
      (this._time = e),
        t ||
          (this.trigger("frame", n), this.stage.update && this.stage.update());
    }),
    (Fi.prototype._startLoop = function () {
      var e = this;
      (this._running = !0),
        Mn(function t() {
          e._running && (Mn(t), !e._paused) && e.update();
        });
    }),
    (Fi.prototype.start = function () {
      this._running ||
        ((this._time = Ei()), (this._pausedTime = 0), this._startLoop());
    }),
    (Fi.prototype.stop = function () {
      this._running = !1;
    }),
    (Fi.prototype.pause = function () {
      this._paused || ((this._pauseStart = Ei()), (this._paused = !0));
    }),
    (Fi.prototype.resume = function () {
      this._paused &&
        ((this._pausedTime += Ei() - this._pauseStart), (this._paused = !1));
    }),
    (Fi.prototype.clear = function () {
      for (var t = this._head; t; ) {
        var e = t.next;
        (t.prev = t.next = t.animation = null), (t = e);
      }
      this._head = this._tail = null;
    }),
    (Fi.prototype.isFinished = function () {
      return null == this._head;
    }),
    (Fi.prototype.animate = function (t, e) {
      (e = e || {}), this.start();
      t = new Oi(t, e.loop);
      return this.addAnimator(t), t;
    });
  var zi,
    Bi = Fi;
  function Fi(t) {
    var e = zi.call(this) || this;
    return (
      (e._running = !1),
      (e._time = 0),
      (e._pausedTime = 0),
      (e._pauseStart = 0),
      (e._paused = !1),
      (e.stage = (t = t || {}).stage || {}),
      e
    );
  }
  var Vi,
    Hi = b.domSupported,
    Gi =
      ((Vi = { pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1 }),
      {
        mouse: (n = [
          "click",
          "dblclick",
          "mousewheel",
          "wheel",
          "mouseout",
          "mouseup",
          "mousedown",
          "mousemove",
          "contextmenu",
        ]),
        touch: ["touchstart", "touchend", "touchmove"],
        pointer: F(n, function (t) {
          var e = t.replace("mouse", "pointer");
          return Vi.hasOwnProperty(e) ? e : t;
        }),
      }),
    Wi = ["mousemove", "mouseup"],
    Ui = ["pointermove", "pointerup"],
    Xi = !1;
  function Yi(t) {
    t = t.pointerType;
    return "pen" === t || "touch" === t;
  }
  function qi(t) {
    t && (t.zrByTouch = !0);
  }
  function Zi(t, e) {
    for (
      var n = e, i = !1;
      n &&
      9 !== n.nodeType &&
      !(i = n.domBelongToZr || (n !== e && n === t.painterRoot));

    )
      n = n.parentNode;
    return i;
  }
  var ji = function (t, e) {
      (this.stopPropagation = Ft),
        (this.stopImmediatePropagation = Ft),
        (this.preventDefault = Ft),
        (this.type = e.type),
        (this.target = this.currentTarget = t.dom),
        (this.pointerType = e.pointerType),
        (this.clientX = e.clientX),
        (this.clientY = e.clientY);
    },
    Ki = {
      mousedown: function (t) {
        (t = Ce(this.dom, t)),
          (this.__mayPointerCapture = [t.zrX, t.zrY]),
          this.trigger("mousedown", t);
      },
      mousemove: function (t) {
        t = Ce(this.dom, t);
        var e = this.__mayPointerCapture;
        !e ||
          (t.zrX === e[0] && t.zrY === e[1]) ||
          this.__togglePointerCapture(!0),
          this.trigger("mousemove", t);
      },
      mouseup: function (t) {
        (t = Ce(this.dom, t)),
          this.__togglePointerCapture(!1),
          this.trigger("mouseup", t);
      },
      mouseout: function (t) {
        Zi(this, (t = Ce(this.dom, t)).toElement || t.relatedTarget) ||
          (this.__pointerCapturing && (t.zrEventControl = "no_globalout"),
          this.trigger("mouseout", t));
      },
      wheel: function (t) {
        (Xi = !0), (t = Ce(this.dom, t)), this.trigger("mousewheel", t);
      },
      mousewheel: function (t) {
        Xi || ((t = Ce(this.dom, t)), this.trigger("mousewheel", t));
      },
      touchstart: function (t) {
        qi((t = Ce(this.dom, t))),
          (this.__lastTouchMoment = new Date()),
          this.handler.processGesture(t, "start"),
          Ki.mousemove.call(this, t),
          Ki.mousedown.call(this, t);
      },
      touchmove: function (t) {
        qi((t = Ce(this.dom, t))),
          this.handler.processGesture(t, "change"),
          Ki.mousemove.call(this, t);
      },
      touchend: function (t) {
        qi((t = Ce(this.dom, t))),
          this.handler.processGesture(t, "end"),
          Ki.mouseup.call(this, t),
          +new Date() - +this.__lastTouchMoment < 300 && Ki.click.call(this, t);
      },
      pointerdown: function (t) {
        Ki.mousedown.call(this, t);
      },
      pointermove: function (t) {
        Yi(t) || Ki.mousemove.call(this, t);
      },
      pointerup: function (t) {
        Ki.mouseup.call(this, t);
      },
      pointerout: function (t) {
        Yi(t) || Ki.mouseout.call(this, t);
      },
    },
    $i =
      (E(["click", "dblclick", "contextmenu"], function (e) {
        Ki[e] = function (t) {
          (t = Ce(this.dom, t)), this.trigger(e, t);
        };
      }),
      {
        pointermove: function (t) {
          Yi(t) || $i.mousemove.call(this, t);
        },
        pointerup: function (t) {
          $i.mouseup.call(this, t);
        },
        mousemove: function (t) {
          this.trigger("mousemove", t);
        },
        mouseup: function (t) {
          var e = this.__pointerCapturing;
          this.__togglePointerCapture(!1),
            this.trigger("mouseup", t),
            e &&
              ((t.zrEventControl = "only_globalout"),
              this.trigger("mouseout", t));
        },
      });
  function Qi(i, r) {
    var o = r.domHandlers;
    b.pointerEventsSupported
      ? E(Gi.pointer, function (e) {
          tr(r, e, function (t) {
            o[e].call(i, t);
          });
        })
      : (b.touchEventsSupported &&
          E(Gi.touch, function (n) {
            tr(r, n, function (t) {
              var e;
              o[n].call(i, t),
                ((e = r).touching = !0),
                null != e.touchTimer &&
                  (clearTimeout(e.touchTimer), (e.touchTimer = null)),
                (e.touchTimer = setTimeout(function () {
                  (e.touching = !1), (e.touchTimer = null);
                }, 700));
            });
          }),
        E(Gi.mouse, function (e) {
          tr(r, e, function (t) {
            (t = Te(t)), r.touching || o[e].call(i, t);
          });
        }));
  }
  function Ji(i, r) {
    function t(n) {
      tr(
        r,
        n,
        function (t) {
          var e;
          (t = Te(t)),
            Zi(i, t.target) ||
              ((e = t),
              (t = Ce(i.dom, new ji(i, e), !0)),
              r.domHandlers[n].call(i, t));
        },
        { capture: !0 }
      );
    }
    b.pointerEventsSupported ? E(Ui, t) : b.touchEventsSupported || E(Wi, t);
  }
  function tr(t, e, n, i) {
    (t.mounted[e] = n),
      (t.listenerOpts[e] = i),
      t.domTarget.addEventListener(e, n, i);
  }
  function er(t) {
    var e,
      n,
      i,
      r,
      o,
      a = t.mounted;
    for (e in a)
      a.hasOwnProperty(e) &&
        ((n = t.domTarget),
        (i = e),
        (r = a[e]),
        (o = t.listenerOpts[e]),
        n.removeEventListener(i, r, o));
    t.mounted = {};
  }
  function nr(t, e) {
    (this.mounted = {}),
      (this.listenerOpts = {}),
      (this.touching = !1),
      (this.domTarget = t),
      (this.domHandlers = e);
  }
  u(or, (ir = le)),
    (or.prototype.dispose = function () {
      er(this._localHandlerScope), Hi && er(this._globalHandlerScope);
    }),
    (or.prototype.setCursor = function (t) {
      this.dom.style && (this.dom.style.cursor = t || "default");
    }),
    (or.prototype.__togglePointerCapture = function (t) {
      var e;
      (this.__mayPointerCapture = null),
        Hi &&
          +this.__pointerCapturing ^ +t &&
          ((this.__pointerCapturing = t),
          (e = this._globalHandlerScope),
          t ? Ji(this, e) : er(e));
    });
  var ir,
    rr = or;
  function or(t, e) {
    var n = ir.call(this) || this;
    return (
      (n.__pointerCapturing = !1),
      (n.dom = t),
      (n.painterRoot = e),
      (n._localHandlerScope = new nr(t, Ki)),
      Hi && (n._globalHandlerScope = new nr(document, $i)),
      Qi(n, n._localHandlerScope),
      n
    );
  }
  var n = 1,
    ar = (n = b.hasGlobalWindow
      ? Math.max(
          window.devicePixelRatio ||
            (window.screen &&
              window.screen.deviceXDPI / window.screen.logicalXDPI) ||
            1,
          1
        )
      : n),
    sr = "#333",
    lr = "#ccc",
    ur = Oe;
  function hr(t) {
    return 5e-5 < t || t < -5e-5;
  }
  var cr = [],
    pr = [],
    dr = Le(),
    fr = Math.abs,
    gr =
      ((yr.prototype.getLocalTransform = function (t) {
        return yr.getLocalTransform(this, t);
      }),
      (yr.prototype.setPosition = function (t) {
        (this.x = t[0]), (this.y = t[1]);
      }),
      (yr.prototype.setScale = function (t) {
        (this.scaleX = t[0]), (this.scaleY = t[1]);
      }),
      (yr.prototype.setSkew = function (t) {
        (this.skewX = t[0]), (this.skewY = t[1]);
      }),
      (yr.prototype.setOrigin = function (t) {
        (this.originX = t[0]), (this.originY = t[1]);
      }),
      (yr.prototype.needLocalTransform = function () {
        return (
          hr(this.rotation) ||
          hr(this.x) ||
          hr(this.y) ||
          hr(this.scaleX - 1) ||
          hr(this.scaleY - 1) ||
          hr(this.skewX) ||
          hr(this.skewY)
        );
      }),
      (yr.prototype.updateTransform = function () {
        var t = this.parent && this.parent.transform,
          e = this.needLocalTransform(),
          n = this.transform;
        e || t
          ? ((n = n || Le()),
            e ? this.getLocalTransform(n) : ur(n),
            t && (e ? Ne(n, t, n) : Re(n, t)),
            (this.transform = n),
            this._resolveGlobalScaleRatio(n))
          : n && (ur(n), (this.invTransform = null));
      }),
      (yr.prototype._resolveGlobalScaleRatio = function (t) {
        var e,
          n,
          i = this.globalScaleRatio;
        null != i &&
          1 !== i &&
          (this.getGlobalScale(cr),
          (n = ((cr[1] - (n = cr[1] < 0 ? -1 : 1)) * i + n) / cr[1] || 0),
          (t[0] *= i =
            ((cr[0] - (e = cr[0] < 0 ? -1 : 1)) * i + e) / cr[0] || 0),
          (t[1] *= i),
          (t[2] *= n),
          (t[3] *= n)),
          (this.invTransform = this.invTransform || Le()),
          Fe(this.invTransform, t);
      }),
      (yr.prototype.getComputedTransform = function () {
        for (var t = this, e = []; t; ) e.push(t), (t = t.parent);
        for (; (t = e.pop()); ) t.updateTransform();
        return this.transform;
      }),
      (yr.prototype.setLocalTransform = function (t) {
        var e, n, i, r;
        t &&
          ((r = t[0] * t[0] + t[1] * t[1]),
          (i = t[2] * t[2] + t[3] * t[3]),
          (e = Math.atan2(t[1], t[0])),
          (n = Math.PI / 2 + e - Math.atan2(t[3], t[2])),
          (i = Math.sqrt(i) * Math.cos(n)),
          (r = Math.sqrt(r)),
          (this.skewX = n),
          (this.skewY = 0),
          (this.rotation = -e),
          (this.x = +t[4]),
          (this.y = +t[5]),
          (this.scaleX = r),
          (this.scaleY = i),
          (this.originX = 0),
          (this.originY = 0));
      }),
      (yr.prototype.decomposeTransform = function () {
        var t, e, n;
        this.transform &&
          ((e = this.parent),
          (t = this.transform),
          e && e.transform && (Ne(pr, e.invTransform, t), (t = pr)),
          (e = this.originX),
          (n = this.originY),
          (e || n) &&
            ((dr[4] = e),
            (dr[5] = n),
            Ne(pr, t, dr),
            (pr[4] -= e),
            (pr[5] -= n),
            (t = pr)),
          this.setLocalTransform(t));
      }),
      (yr.prototype.getGlobalScale = function (t) {
        var e = this.transform;
        return (
          (t = t || []),
          e
            ? ((t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1])),
              (t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3])),
              e[0] < 0 && (t[0] = -t[0]),
              e[3] < 0 && (t[1] = -t[1]))
            : ((t[0] = 1), (t[1] = 1)),
          t
        );
      }),
      (yr.prototype.transformCoordToLocal = function (t, e) {
        (t = [t, e]), (e = this.invTransform);
        return e && ee(t, t, e), t;
      }),
      (yr.prototype.transformCoordToGlobal = function (t, e) {
        (t = [t, e]), (e = this.transform);
        return e && ee(t, t, e), t;
      }),
      (yr.prototype.getLineScale = function () {
        var t = this.transform;
        return t && 1e-10 < fr(t[0] - 1) && 1e-10 < fr(t[3] - 1)
          ? Math.sqrt(fr(t[0] * t[3] - t[2] * t[1]))
          : 1;
      }),
      (yr.prototype.copyTransform = function (t) {
        for (var e = this, n = t, i = 0; i < mr.length; i++) {
          var r = mr[i];
          e[r] = n[r];
        }
      }),
      (yr.getLocalTransform = function (t, e) {
        e = e || [];
        var n = t.originX || 0,
          i = t.originY || 0,
          r = t.scaleX,
          o = t.scaleY,
          a = t.anchorX,
          s = t.anchorY,
          l = t.rotation || 0,
          u = t.x,
          h = t.y,
          c = t.skewX ? Math.tan(t.skewX) : 0,
          t = t.skewY ? Math.tan(-t.skewY) : 0;
        return (
          n || i || a || s
            ? ((e[4] = -(a = n + a) * r - c * (s = i + s) * o),
              (e[5] = -s * o - t * a * r))
            : (e[4] = e[5] = 0),
          (e[0] = r),
          (e[3] = o),
          (e[1] = t * r),
          (e[2] = c * o),
          l && ze(e, e, l),
          (e[4] += n + u),
          (e[5] += i + h),
          e
        );
      }),
      (yr.initDefaultProps =
        (((n = yr.prototype).scaleX = n.scaleY = n.globalScaleRatio = 1),
        void (n.x =
          n.y =
          n.originX =
          n.originY =
          n.skewX =
          n.skewY =
          n.rotation =
          n.anchorX =
          n.anchorY =
            0))),
      yr);
  function yr() {}
  var mr = [
    "x",
    "y",
    "originX",
    "originY",
    "anchorX",
    "anchorY",
    "rotation",
    "scaleX",
    "scaleY",
    "skewX",
    "skewY",
  ];
  var vr = {};
  function _r(t, e) {
    var n = vr[(e = e || K)],
      i = (n = n || (vr[e] = new ti(500))).get(t);
    return null == i && ((i = X.measureText(t, e).width), n.put(t, i)), i;
  }
  function xr(t, e, n, i) {
    (t = _r(t, e)), (e = Mr(e)), (n = br(0, t, n)), (i = Sr(0, e, i));
    return new W(n, i, t, e);
  }
  function wr(t, e, n, i) {
    var r = ((t || "") + "").split("\n");
    if (1 === r.length) return xr(r[0], e, n, i);
    for (var o = new W(0, 0, 0, 0), a = 0; a < r.length; a++) {
      var s = xr(r[a], e, n, i);
      0 === a ? o.copy(s) : o.union(s);
    }
    return o;
  }
  function br(t, e, n) {
    return "right" === n ? (t -= e) : "center" === n && (t -= e / 2), t;
  }
  function Sr(t, e, n) {
    return "middle" === n ? (t -= e / 2) : "bottom" === n && (t -= e), t;
  }
  function Mr(t) {
    return _r("国", t);
  }
  function Tr(t, e) {
    return "string" == typeof t
      ? 0 <= t.lastIndexOf("%")
        ? (parseFloat(t) / 100) * e
        : parseFloat(t)
      : t;
  }
  function Cr(t, e, n) {
    var i = e.position || "inside",
      r = null != e.distance ? e.distance : 5,
      o = n.height,
      a = n.width,
      s = o / 2,
      l = n.x,
      u = n.y,
      h = "left",
      c = "top";
    if (i instanceof Array)
      (l += Tr(i[0], n.width)), (u += Tr(i[1], n.height)), (c = h = null);
    else
      switch (i) {
        case "left":
          (l -= r), (u += s), (h = "right"), (c = "middle");
          break;
        case "right":
          (l += r + a), (u += s), (c = "middle");
          break;
        case "top":
          (l += a / 2), (u -= r), (h = "center"), (c = "bottom");
          break;
        case "bottom":
          (l += a / 2), (u += o + r), (h = "center");
          break;
        case "inside":
          (l += a / 2), (u += s), (h = "center"), (c = "middle");
          break;
        case "insideLeft":
          (l += r), (u += s), (c = "middle");
          break;
        case "insideRight":
          (l += a - r), (u += s), (h = "right"), (c = "middle");
          break;
        case "insideTop":
          (l += a / 2), (u += r), (h = "center");
          break;
        case "insideBottom":
          (l += a / 2), (u += o - r), (h = "center"), (c = "bottom");
          break;
        case "insideTopLeft":
          (l += r), (u += r);
          break;
        case "insideTopRight":
          (l += a - r), (u += r), (h = "right");
          break;
        case "insideBottomLeft":
          (l += r), (u += o - r), (c = "bottom");
          break;
        case "insideBottomRight":
          (l += a - r), (u += o - r), (h = "right"), (c = "bottom");
      }
    return (
      ((t = t || {}).x = l), (t.y = u), (t.align = h), (t.verticalAlign = c), t
    );
  }
  var Ir,
    Dr = "__zr_normal__",
    kr = mr.concat(["ignore"]),
    Ar = lt(
      mr,
      function (t, e) {
        return (t[e] = !0), t;
      },
      { ignore: !1 }
    ),
    Pr = {},
    Lr = new W(0, 0, 0, 0),
    n =
      ((i.prototype._init = function (t) {
        this.attr(t);
      }),
      (i.prototype.drift = function (t, e, n) {
        switch (this.draggable) {
          case "horizontal":
            e = 0;
            break;
          case "vertical":
            t = 0;
        }
        var i = this.transform;
        ((i = i || (this.transform = [1, 0, 0, 1, 0, 0]))[4] += t),
          (i[5] += e),
          this.decomposeTransform(),
          this.markRedraw();
      }),
      (i.prototype.beforeUpdate = function () {}),
      (i.prototype.afterUpdate = function () {}),
      (i.prototype.update = function () {
        this.updateTransform(), this.__dirty && this.updateInnerText();
      }),
      (i.prototype.updateInnerText = function (t) {
        var e,
          n,
          i,
          r,
          o,
          a,
          s,
          l,
          u,
          h,
          c = this._textContent;
        !c ||
          (c.ignore && !t) ||
          (this.textConfig || (this.textConfig = {}),
          (l = (t = this.textConfig).local),
          (i = n = void 0),
          (r = !1),
          ((e = c.innerTransformable).parent = l ? this : null),
          (h = !1),
          e.copyTransform(c),
          null != t.position &&
            ((u = Lr),
            t.layoutRect
              ? u.copy(t.layoutRect)
              : u.copy(this.getBoundingRect()),
            l || u.applyTransform(this.transform),
            this.calculateTextPosition
              ? this.calculateTextPosition(Pr, t, u)
              : Cr(Pr, t, u),
            (e.x = Pr.x),
            (e.y = Pr.y),
            (n = Pr.align),
            (i = Pr.verticalAlign),
            (o = t.origin)) &&
            null != t.rotation &&
            ((s = a = void 0),
            (s =
              "center" === o
                ? ((a = 0.5 * u.width), 0.5 * u.height)
                : ((a = Tr(o[0], u.width)), Tr(o[1], u.height))),
            (h = !0),
            (e.originX = -e.x + a + (l ? 0 : u.x)),
            (e.originY = -e.y + s + (l ? 0 : u.y))),
          null != t.rotation && (e.rotation = t.rotation),
          (o = t.offset) &&
            ((e.x += o[0]),
            (e.y += o[1]),
            h || ((e.originX = -o[0]), (e.originY = -o[1]))),
          (a =
            null == t.inside
              ? "string" == typeof t.position &&
                0 <= t.position.indexOf("inside")
              : t.inside),
          (s =
            this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {})),
          (h = u = l = void 0),
          a && this.canBeInsideText()
            ? ((l = t.insideFill),
              (u = t.insideStroke),
              (null != l && "auto" !== l) || (l = this.getInsideTextFill()),
              (null != u && "auto" !== u) ||
                ((u = this.getInsideTextStroke(l)), (h = !0)))
            : ((l = t.outsideFill),
              (u = t.outsideStroke),
              (null != l && "auto" !== l) || (l = this.getOutsideFill()),
              (null != u && "auto" !== u) ||
                ((u = this.getOutsideStroke(l)), (h = !0))),
          ((l = l || "#000") === s.fill &&
            u === s.stroke &&
            h === s.autoStroke &&
            n === s.align &&
            i === s.verticalAlign) ||
            ((r = !0),
            (s.fill = l),
            (s.stroke = u),
            (s.autoStroke = h),
            (s.align = n),
            (s.verticalAlign = i),
            c.setDefaultTextStyle(s)),
          (c.__dirty |= mn),
          r && c.dirtyStyle(!0));
      }),
      (i.prototype.canBeInsideText = function () {
        return !0;
      }),
      (i.prototype.getInsideTextFill = function () {
        return "#fff";
      }),
      (i.prototype.getInsideTextStroke = function (t) {
        return "#000";
      }),
      (i.prototype.getOutsideFill = function () {
        return this.__zr && this.__zr.isDarkMode() ? lr : sr;
      }),
      (i.prototype.getOutsideStroke = function (t) {
        for (
          var e = this.__zr && this.__zr.getBackgroundColor(),
            n = "string" == typeof e && fi(e),
            i = (n = n || [255, 255, 255, 1])[3],
            r = this.__zr.isDarkMode(),
            o = 0;
          o < 3;
          o++
        )
          n[o] = n[o] * i + (r ? 0 : 255) * (1 - i);
        return (n[3] = 1), _i(n, "rgba");
      }),
      (i.prototype.traverse = function (t, e) {}),
      (i.prototype.attrKV = function (t, e) {
        "textConfig" === t
          ? this.setTextConfig(e)
          : "textContent" === t
          ? this.setTextContent(e)
          : "clipPath" === t
          ? this.setClipPath(e)
          : "extra" === t
          ? ((this.extra = this.extra || {}), L(this.extra, e))
          : (this[t] = e);
      }),
      (i.prototype.hide = function () {
        (this.ignore = !0), this.markRedraw();
      }),
      (i.prototype.show = function () {
        (this.ignore = !1), this.markRedraw();
      }),
      (i.prototype.attr = function (t, e) {
        if ("string" == typeof t) this.attrKV(t, e);
        else if (O(t))
          for (var n = ht(t), i = 0; i < n.length; i++) {
            var r = n[i];
            this.attrKV(r, t[r]);
          }
        return this.markRedraw(), this;
      }),
      (i.prototype.saveCurrentToNormalState = function (t) {
        this._innerSaveToNormal(t);
        for (var e = this._normalState, n = 0; n < this.animators.length; n++) {
          var i = this.animators[n],
            r = i.__fromStateTransition;
          i.getLoop() ||
            (r && r !== Dr) ||
            ((r = (r = i.targetName) ? e[r] : e), i.saveTo(r));
        }
      }),
      (i.prototype._innerSaveToNormal = function (t) {
        var e = (e = this._normalState) || (this._normalState = {});
        t.textConfig && !e.textConfig && (e.textConfig = this.textConfig),
          this._savePrimaryToNormal(t, e, kr);
      }),
      (i.prototype._savePrimaryToNormal = function (t, e, n) {
        for (var i = 0; i < n.length; i++) {
          var r = n[i];
          null == t[r] || r in e || (e[r] = this[r]);
        }
      }),
      (i.prototype.hasState = function () {
        return 0 < this.currentStates.length;
      }),
      (i.prototype.getState = function (t) {
        return this.states[t];
      }),
      (i.prototype.ensureState = function (t) {
        var e = this.states;
        return e[t] || (e[t] = {}), e[t];
      }),
      (i.prototype.clearStates = function (t) {
        this.useState(Dr, !1, t);
      }),
      (i.prototype.useState = function (t, e, n, i) {
        var r = t === Dr;
        if (this.hasState() || !r) {
          var o,
            a = this.currentStates,
            s = this.stateTransition;
          if (!(0 <= I(a, t)) || (!e && 1 !== a.length)) {
            if (
              (o =
                (o = this.stateProxy && !r ? this.stateProxy(t) : o) ||
                (this.states && this.states[t])) ||
              r
            )
              return (
                r || this.saveCurrentToNormalState(o),
                (a = !!((o && o.hoverLayer) || i)) &&
                  this._toggleHoverLayerFlag(!0),
                this._applyStateObj(
                  t,
                  o,
                  this._normalState,
                  e,
                  !n && !this.__inHover && s && 0 < s.duration,
                  s
                ),
                (i = this._textContent),
                (s = this._textGuide),
                i && i.useState(t, e, n, a),
                s && s.useState(t, e, n, a),
                r
                  ? ((this.currentStates = []), (this._normalState = {}))
                  : e
                  ? this.currentStates.push(t)
                  : (this.currentStates = [t]),
                this._updateAnimationTargets(),
                this.markRedraw(),
                !a &&
                  this.__inHover &&
                  (this._toggleHoverLayerFlag(!1), (this.__dirty &= ~mn)),
                o
              );
            it("State " + t + " not exists.");
          }
        }
      }),
      (i.prototype.useStates = function (t, e, n) {
        if (t.length) {
          var i = [],
            r = this.currentStates,
            o = t.length,
            a = o === r.length;
          if (a)
            for (var s = 0; s < o; s++)
              if (t[s] !== r[s]) {
                a = !1;
                break;
              }
          if (!a) {
            for (s = 0; s < o; s++) {
              var l = t[s],
                u = void 0;
              (u =
                (u = this.stateProxy ? this.stateProxy(l, t) : u) ||
                this.states[l]) && i.push(u);
            }
            var h = i[o - 1],
              h = !!((h && h.hoverLayer) || n),
              n = (h && this._toggleHoverLayerFlag(!0), this._mergeStates(i)),
              c = this.stateTransition,
              n =
                (this.saveCurrentToNormalState(n),
                this._applyStateObj(
                  t.join(","),
                  n,
                  this._normalState,
                  !1,
                  !e && !this.__inHover && c && 0 < c.duration,
                  c
                ),
                this._textContent),
              c = this._textGuide;
            n && n.useStates(t, e, h),
              c && c.useStates(t, e, h),
              this._updateAnimationTargets(),
              (this.currentStates = t.slice()),
              this.markRedraw(),
              !h &&
                this.__inHover &&
                (this._toggleHoverLayerFlag(!1), (this.__dirty &= ~mn));
          }
        } else this.clearStates();
      }),
      (i.prototype._updateAnimationTargets = function () {
        for (var t = 0; t < this.animators.length; t++) {
          var e = this.animators[t];
          e.targetName && e.changeTarget(this[e.targetName]);
        }
      }),
      (i.prototype.removeState = function (t) {
        var e,
          t = I(this.currentStates, t);
        0 <= t &&
          ((e = this.currentStates.slice()).splice(t, 1), this.useStates(e));
      }),
      (i.prototype.replaceState = function (t, e, n) {
        var i = this.currentStates.slice(),
          t = I(i, t),
          r = 0 <= I(i, e);
        0 <= t ? (r ? i.splice(t, 1) : (i[t] = e)) : n && !r && i.push(e),
          this.useStates(i);
      }),
      (i.prototype.toggleState = function (t, e) {
        e ? this.useState(t, !0) : this.removeState(t);
      }),
      (i.prototype._mergeStates = function (t) {
        for (var e, n = {}, i = 0; i < t.length; i++) {
          var r = t[i];
          L(n, r), r.textConfig && L((e = e || {}), r.textConfig);
        }
        return e && (n.textConfig = e), n;
      }),
      (i.prototype._applyStateObj = function (t, e, n, i, r, o) {
        var a = !(e && i);
        e && e.textConfig
          ? ((this.textConfig = L({}, (i ? this : n).textConfig)),
            L(this.textConfig, e.textConfig))
          : a && n.textConfig && (this.textConfig = n.textConfig);
        for (var s = {}, l = !1, u = 0; u < kr.length; u++) {
          var h = kr[u],
            c = r && Ar[h];
          e && null != e[h]
            ? c
              ? ((l = !0), (s[h] = e[h]))
              : (this[h] = e[h])
            : a &&
              null != n[h] &&
              (c ? ((l = !0), (s[h] = n[h])) : (this[h] = n[h]));
        }
        if (!r)
          for (u = 0; u < this.animators.length; u++) {
            var p = this.animators[u],
              d = p.targetName;
            p.getLoop() || p.__changeFinalValue(d ? (e || n)[d] : e || n);
          }
        l && this._transitionState(t, s, o);
      }),
      (i.prototype._attachComponent = function (t) {
        var e;
        (t.__zr && !t.__hostTarget) ||
          (t !== this &&
            ((e = this.__zr) && t.addSelfToZr(e),
            (t.__zr = e),
            (t.__hostTarget = this)));
      }),
      (i.prototype._detachComponent = function (t) {
        t.__zr && t.removeSelfFromZr(t.__zr),
          (t.__zr = null),
          (t.__hostTarget = null);
      }),
      (i.prototype.getClipPath = function () {
        return this._clipPath;
      }),
      (i.prototype.setClipPath = function (t) {
        this._clipPath && this._clipPath !== t && this.removeClipPath(),
          this._attachComponent(t),
          (this._clipPath = t),
          this.markRedraw();
      }),
      (i.prototype.removeClipPath = function () {
        var t = this._clipPath;
        t &&
          (this._detachComponent(t),
          (this._clipPath = null),
          this.markRedraw());
      }),
      (i.prototype.getTextContent = function () {
        return this._textContent;
      }),
      (i.prototype.setTextContent = function (t) {
        var e = this._textContent;
        e !== t &&
          (e && e !== t && this.removeTextContent(),
          (t.innerTransformable = new gr()),
          this._attachComponent(t),
          (this._textContent = t),
          this.markRedraw());
      }),
      (i.prototype.setTextConfig = function (t) {
        this.textConfig || (this.textConfig = {}),
          L(this.textConfig, t),
          this.markRedraw();
      }),
      (i.prototype.removeTextConfig = function () {
        (this.textConfig = null), this.markRedraw();
      }),
      (i.prototype.removeTextContent = function () {
        var t = this._textContent;
        t &&
          ((t.innerTransformable = null),
          this._detachComponent(t),
          (this._textContent = null),
          (this._innerTextDefaultStyle = null),
          this.markRedraw());
      }),
      (i.prototype.getTextGuideLine = function () {
        return this._textGuide;
      }),
      (i.prototype.setTextGuideLine = function (t) {
        this._textGuide && this._textGuide !== t && this.removeTextGuideLine(),
          this._attachComponent(t),
          (this._textGuide = t),
          this.markRedraw();
      }),
      (i.prototype.removeTextGuideLine = function () {
        var t = this._textGuide;
        t &&
          (this._detachComponent(t),
          (this._textGuide = null),
          this.markRedraw());
      }),
      (i.prototype.markRedraw = function () {
        this.__dirty |= mn;
        var t = this.__zr;
        t && (this.__inHover ? t.refreshHover() : t.refresh()),
          this.__hostTarget && this.__hostTarget.markRedraw();
      }),
      (i.prototype.dirty = function () {
        this.markRedraw();
      }),
      (i.prototype._toggleHoverLayerFlag = function (t) {
        this.__inHover = t;
        var e = this._textContent,
          n = this._textGuide;
        e && (e.__inHover = t), n && (n.__inHover = t);
      }),
      (i.prototype.addSelfToZr = function (t) {
        if (this.__zr !== t) {
          this.__zr = t;
          var e = this.animators;
          if (e)
            for (var n = 0; n < e.length; n++) t.animation.addAnimator(e[n]);
          this._clipPath && this._clipPath.addSelfToZr(t),
            this._textContent && this._textContent.addSelfToZr(t),
            this._textGuide && this._textGuide.addSelfToZr(t);
        }
      }),
      (i.prototype.removeSelfFromZr = function (t) {
        if (this.__zr) {
          this.__zr = null;
          var e = this.animators;
          if (e)
            for (var n = 0; n < e.length; n++) t.animation.removeAnimator(e[n]);
          this._clipPath && this._clipPath.removeSelfFromZr(t),
            this._textContent && this._textContent.removeSelfFromZr(t),
            this._textGuide && this._textGuide.removeSelfFromZr(t);
        }
      }),
      (i.prototype.animate = function (t, e, n) {
        var i = t ? this[t] : this,
          i = new Oi(i, e, n);
        return t && (i.targetName = t), this.addAnimator(i, t), i;
      }),
      (i.prototype.addAnimator = function (n, t) {
        var e = this.__zr,
          i = this;
        n
          .during(function () {
            i.updateDuringAnimation(t);
          })
          .done(function () {
            var t = i.animators,
              e = I(t, n);
            0 <= e && t.splice(e, 1);
          }),
          this.animators.push(n),
          e && e.animation.addAnimator(n),
          e && e.wakeUp();
      }),
      (i.prototype.updateDuringAnimation = function (t) {
        this.markRedraw();
      }),
      (i.prototype.stopAnimation = function (t, e) {
        for (var n = this.animators, i = n.length, r = [], o = 0; o < i; o++) {
          var a = n[o];
          t && t !== a.scope ? r.push(a) : a.stop(e);
        }
        return (this.animators = r), this;
      }),
      (i.prototype.animateTo = function (t, e, n) {
        Rr(this, t, e, n);
      }),
      (i.prototype.animateFrom = function (t, e, n) {
        Rr(this, t, e, n, !0);
      }),
      (i.prototype._transitionState = function (t, e, n, i) {
        for (var r = Rr(this, e, n, i), o = 0; o < r.length; o++)
          r[o].__fromStateTransition = t;
      }),
      (i.prototype.getBoundingRect = function () {
        return null;
      }),
      (i.prototype.getPaintRect = function () {
        return null;
      }),
      (i.initDefaultProps =
        (((Ir = i.prototype).type = "element"),
        (Ir.name = ""),
        (Ir.ignore =
          Ir.silent =
          Ir.isGroup =
          Ir.draggable =
          Ir.dragging =
          Ir.ignoreClip =
          Ir.__inHover =
            !1),
        (Ir.__dirty = mn),
        void (
          Object.defineProperty &&
          (Or("position", "_legacyPos", "x", "y"),
          Or("scale", "_legacyScale", "scaleX", "scaleY"),
          Or("origin", "_legacyOrigin", "originX", "originY"))
        ))),
      i);
  function i(t) {
    (this.id = et++),
      (this.animators = []),
      (this.currentStates = []),
      (this.states = {}),
      this._init(t);
  }
  function Or(t, e, n, i) {
    function r(e, t) {
      Object.defineProperty(t, 0, {
        get: function () {
          return e[n];
        },
        set: function (t) {
          e[n] = t;
        },
      }),
        Object.defineProperty(t, 1, {
          get: function () {
            return e[i];
          },
          set: function (t) {
            e[i] = t;
          },
        });
    }
    Object.defineProperty(Ir, t, {
      get: function () {
        return this[e] || r(this, (this[e] = [])), this[e];
      },
      set: function (t) {
        (this[n] = t[0]), (this[i] = t[1]), (this[e] = t), r(this, t);
      },
    });
  }
  function Rr(t, e, n, i, r) {
    function o() {
      (u = !0), --l <= 0 && (u ? h && h() : c && c());
    }
    function a() {
      --l <= 0 && (u ? h && h() : c && c());
    }
    var s = [],
      l =
        (!(function t(e, n, i, r, o, a, s, l) {
          for (
            var u = ht(r),
              h = o.duration,
              c = o.delay,
              p = o.additive,
              d = o.setToFinal,
              f = !O(a),
              g = e.animators,
              y = [],
              m = 0;
            m < u.length;
            m++
          ) {
            var v = u[m],
              _ = r[v];
            null != _ && null != i[v] && (f || a[v])
              ? !O(_) || st(_) || mt(_)
                ? y.push(v)
                : n
                ? l || ((i[v] = _), e.updateDuringAnimation(n))
                : t(e, v, i[v], _, o, a && a[v], s, l)
              : l || ((i[v] = _), e.updateDuringAnimation(n), y.push(v));
          }
          var x = y.length;
          if (!p && x)
            for (var w = 0; w < g.length; w++) {
              var b;
              (S = g[w]).targetName === n &&
                S.stopTracks(y) &&
                ((b = I(g, S)), g.splice(b, 1));
            }
          if (
            (o.force ||
              (x = (y = ut(y, function (t) {
                return !zr(r[t], i[t]);
              })).length),
            0 < x || (o.force && !s.length))
          ) {
            var S,
              M = void 0,
              T = void 0,
              C = void 0;
            if (l)
              for (T = {}, d && (M = {}), w = 0; w < x; w++)
                (T[(v = y[w])] = i[v]), d ? (M[v] = r[v]) : (i[v] = r[v]);
            else if (d)
              for (C = {}, w = 0; w < x; w++)
                (C[(v = y[w])] = Ii(i[v])), Er(i, r, v);
            ((S = new Oi(
              i,
              !1,
              !1,
              p
                ? ut(g, function (t) {
                    return t.targetName === n;
                  })
                : null
            )).targetName = n),
              o.scope && (S.scope = o.scope),
              d && M && S.whenWithKeys(0, M, y),
              C && S.whenWithKeys(0, C, y),
              S.whenWithKeys(null == h ? 500 : h, l ? T : r, y).delay(c || 0),
              e.addAnimator(S, n),
              s.push(S);
          }
        })(t, "", t, e, (n = n || {}), i, s, r),
        s.length),
      u = !1,
      h = n.done,
      c = n.aborted;
    l || (h && h()),
      0 < s.length &&
        n.during &&
        s[0].during(function (t, e) {
          n.during(e);
        });
    for (var p = 0; p < s.length; p++) {
      var d = s[p];
      d.done(o),
        d.aborted(a),
        n.force && d.duration(n.duration),
        d.start(n.easing);
    }
    return s;
  }
  function Nr(t, e, n) {
    for (var i = 0; i < n; i++) t[i] = e[i];
  }
  function Er(t, e, n) {
    if (st(e[n]))
      if ((st(t[n]) || (t[n] = []), gt(e[n]))) {
        var i = e[n].length;
        t[n].length !== i &&
          ((t[n] = new e[n].constructor(i)), Nr(t[n], e[n], i));
      } else {
        var r = e[n],
          o = t[n],
          a = r.length;
        if (st(r[0]))
          for (var s = r[0].length, l = 0; l < a; l++)
            o[l]
              ? Nr(o[l], r[l], s)
              : (o[l] = Array.prototype.slice.call(r[l]));
        else Nr(o, r, a);
        o.length = r.length;
      }
    else t[n] = e[n];
  }
  function zr(t, e) {
    return (
      t === e ||
      (st(t) &&
        st(e) &&
        (function (t, e) {
          var n = t.length;
          if (n !== e.length) return !1;
          for (var i = 0; i < n; i++) if (t[i] !== e[i]) return !1;
          return !0;
        })(t, e))
    );
  }
  at(n, le), at(n, gr);
  u(Vr, (Br = n)),
    (Vr.prototype.childrenRef = function () {
      return this._children;
    }),
    (Vr.prototype.children = function () {
      return this._children.slice();
    }),
    (Vr.prototype.childAt = function (t) {
      return this._children[t];
    }),
    (Vr.prototype.childOfName = function (t) {
      for (var e = this._children, n = 0; n < e.length; n++)
        if (e[n].name === t) return e[n];
    }),
    (Vr.prototype.childCount = function () {
      return this._children.length;
    }),
    (Vr.prototype.add = function (t) {
      return (
        t &&
          t !== this &&
          t.parent !== this &&
          (this._children.push(t), this._doAdd(t)),
        this
      );
    }),
    (Vr.prototype.addBefore = function (t, e) {
      var n;
      return (
        t &&
          t !== this &&
          t.parent !== this &&
          e &&
          e.parent === this &&
          0 <= (e = (n = this._children).indexOf(e)) &&
          (n.splice(e, 0, t), this._doAdd(t)),
        this
      );
    }),
    (Vr.prototype.replace = function (t, e) {
      t = I(this._children, t);
      return 0 <= t && this.replaceAt(e, t), this;
    }),
    (Vr.prototype.replaceAt = function (t, e) {
      var n = this._children,
        i = n[e];
      return (
        t &&
          t !== this &&
          t.parent !== this &&
          t !== i &&
          ((n[e] = t),
          (i.parent = null),
          (n = this.__zr) && i.removeSelfFromZr(n),
          this._doAdd(t)),
        this
      );
    }),
    (Vr.prototype._doAdd = function (t) {
      t.parent && t.parent.remove(t);
      var e = (t.parent = this).__zr;
      e && e !== t.__zr && t.addSelfToZr(e), e && e.refresh();
    }),
    (Vr.prototype.remove = function (t) {
      var e = this.__zr,
        n = this._children,
        i = I(n, t);
      return (
        i < 0 ||
          (n.splice(i, 1),
          (t.parent = null),
          e && t.removeSelfFromZr(e),
          e && e.refresh()),
        this
      );
    }),
    (Vr.prototype.removeAll = function () {
      for (var t = this._children, e = this.__zr, n = 0; n < t.length; n++) {
        var i = t[n];
        e && i.removeSelfFromZr(e), (i.parent = null);
      }
      return (t.length = 0), this;
    }),
    (Vr.prototype.eachChild = function (t, e) {
      for (var n = this._children, i = 0; i < n.length; i++) {
        var r = n[i];
        t.call(e, r, i);
      }
      return this;
    }),
    (Vr.prototype.traverse = function (t, e) {
      for (var n = 0; n < this._children.length; n++) {
        var i = this._children[n],
          r = t.call(e, i);
        i.isGroup && !r && i.traverse(t, e);
      }
      return this;
    }),
    (Vr.prototype.addSelfToZr = function (t) {
      Br.prototype.addSelfToZr.call(this, t);
      for (var e = 0; e < this._children.length; e++)
        this._children[e].addSelfToZr(t);
    }),
    (Vr.prototype.removeSelfFromZr = function (t) {
      Br.prototype.removeSelfFromZr.call(this, t);
      for (var e = 0; e < this._children.length; e++)
        this._children[e].removeSelfFromZr(t);
    }),
    (Vr.prototype.getBoundingRect = function (t) {
      for (
        var e = new W(0, 0, 0, 0),
          n = t || this._children,
          i = [],
          r = null,
          o = 0;
        o < n.length;
        o++
      ) {
        var a,
          s = n[o];
        s.ignore ||
          s.invisible ||
          ((a = s.getBoundingRect()),
          (s = s.getLocalTransform(i))
            ? (W.applyTransform(e, a, s), (r = r || e.clone()).union(e))
            : (r = r || a.clone()).union(a));
      }
      return r || e;
    });
  var Br,
    Fr = Vr;
  function Vr(t) {
    var e = Br.call(this) || this;
    return (e.isGroup = !0), (e._children = []), e.attr(t), e;
  }
  Fr.prototype.type = "group";
  var Hr = {},
    Gr = {};
  (Ur.prototype.add = function (t) {
    t && (this.storage.addRoot(t), t.addSelfToZr(this), this.refresh());
  }),
    (Ur.prototype.remove = function (t) {
      t && (this.storage.delRoot(t), t.removeSelfFromZr(this), this.refresh());
    }),
    (Ur.prototype.configLayer = function (t, e) {
      this.painter.configLayer && this.painter.configLayer(t, e),
        this.refresh();
    }),
    (Ur.prototype.setBackgroundColor = function (t) {
      this.painter.setBackgroundColor && this.painter.setBackgroundColor(t),
        this.refresh(),
        (this._backgroundColor = t),
        (this._darkMode = (function (t) {
          if (t) {
            if ("string" == typeof t) return xi(t, 1) < 0.4;
            if (t.colorStops) {
              for (var e = t.colorStops, n = 0, i = e.length, r = 0; r < i; r++)
                n += xi(e[r].color, 1);
              return (n /= i) < 0.4;
            }
          }
          return !1;
        })(t));
    }),
    (Ur.prototype.getBackgroundColor = function () {
      return this._backgroundColor;
    }),
    (Ur.prototype.setDarkMode = function (t) {
      this._darkMode = t;
    }),
    (Ur.prototype.isDarkMode = function () {
      return this._darkMode;
    }),
    (Ur.prototype.refreshImmediately = function (t) {
      t || this.animation.update(!0),
        (this._needsRefresh = !1),
        this.painter.refresh(),
        (this._needsRefresh = !1);
    }),
    (Ur.prototype.refresh = function () {
      (this._needsRefresh = !0), this.animation.start();
    }),
    (Ur.prototype.flush = function () {
      this._flush(!1);
    }),
    (Ur.prototype._flush = function (t) {
      var e,
        n = Ei(),
        t =
          (this._needsRefresh && ((e = !0), this.refreshImmediately(t)),
          this._needsRefreshHover && ((e = !0), this.refreshHoverImmediately()),
          Ei());
      e
        ? ((this._stillFrameAccum = 0),
          this.trigger("rendered", { elapsedTime: t - n }))
        : 0 < this._sleepAfterStill &&
          (this._stillFrameAccum++,
          this._stillFrameAccum > this._sleepAfterStill) &&
          this.animation.stop();
    }),
    (Ur.prototype.setSleepAfterStill = function (t) {
      this._sleepAfterStill = t;
    }),
    (Ur.prototype.wakeUp = function () {
      this.animation.start(), (this._stillFrameAccum = 0);
    }),
    (Ur.prototype.refreshHover = function () {
      this._needsRefreshHover = !0;
    }),
    (Ur.prototype.refreshHoverImmediately = function () {
      (this._needsRefreshHover = !1),
        this.painter.refreshHover &&
          "canvas" === this.painter.getType() &&
          this.painter.refreshHover();
    }),
    (Ur.prototype.resize = function (t) {
      this.painter.resize((t = t || {}).width, t.height), this.handler.resize();
    }),
    (Ur.prototype.clearAnimation = function () {
      this.animation.clear();
    }),
    (Ur.prototype.getWidth = function () {
      return this.painter.getWidth();
    }),
    (Ur.prototype.getHeight = function () {
      return this.painter.getHeight();
    }),
    (Ur.prototype.setCursorStyle = function (t) {
      this.handler.setCursorStyle(t);
    }),
    (Ur.prototype.findHover = function (t, e) {
      return this.handler.findHover(t, e);
    }),
    (Ur.prototype.on = function (t, e, n) {
      return this.handler.on(t, e, n), this;
    }),
    (Ur.prototype.off = function (t, e) {
      this.handler.off(t, e);
    }),
    (Ur.prototype.trigger = function (t, e) {
      this.handler.trigger(t, e);
    }),
    (Ur.prototype.clear = function () {
      for (var t = this.storage.getRoots(), e = 0; e < t.length; e++)
        t[e] instanceof Fr && t[e].removeSelfFromZr(this);
      this.storage.delAllRoots(), this.painter.clear();
    }),
    (Ur.prototype.dispose = function () {
      var t;
      this.animation.stop(),
        this.clear(),
        this.storage.dispose(),
        this.painter.dispose(),
        this.handler.dispose(),
        (this.animation = this.storage = this.painter = this.handler = null),
        (t = this.id),
        delete Gr[t];
    });
  var Wr = Ur;
  function Ur(t, e, n) {
    var i = this,
      r =
        ((this._sleepAfterStill = 10),
        (this._stillFrameAccum = 0),
        (this._needsRefresh = !0),
        (this._needsRefreshHover = !0),
        (this._darkMode = !1),
        (n = n || {}),
        (this.dom = e),
        (this.id = t),
        new bn()),
      o = n.renderer || "canvas",
      o =
        (Hr[o] || (o = ht(Hr)[0]),
        (n.useDirtyRect = null != n.useDirtyRect && n.useDirtyRect),
        new Hr[o](e, r, n, t)),
      e = n.ssr || o.ssrOnly;
    (this.storage = r), (this.painter = o);
    var a,
      t = b.node || b.worker || e ? null : new rr(o.getViewportRoot(), o.root),
      s = n.useCoarsePointer;
    (null == s || "auto" === s ? b.touchEventsSupported : s) &&
      (a = R(n.pointerSize, 44)),
      (this.handler = new on(r, o, t, o.root, a)),
      (this.animation = new Bi({
        stage: {
          update: e
            ? null
            : function () {
                return i._flush(!0);
              },
        },
      })),
      e || this.animation.start();
  }
  function Xr(t, e) {
    t = new Wr(et++, t, e);
    return (Gr[t.id] = t);
  }
  function Yr(t, e) {
    Hr[t] = e;
  }
  var qr = Object.freeze({
      __proto__: null,
      dispose: function (t) {
        t.dispose();
      },
      disposeAll: function () {
        for (var t in Gr) Gr.hasOwnProperty(t) && Gr[t].dispose();
        Gr = {};
      },
      getInstance: function (t) {
        return Gr[t];
      },
      init: Xr,
      registerPainter: Yr,
      version: "5.4.4",
    }),
    Zr = 20;
  function jr(t, e, n, i) {
    var r = e[0],
      e = e[1],
      o = n[0],
      n = n[1],
      a = e - r,
      s = n - o;
    if (0 == a) return 0 == s ? o : (o + n) / 2;
    if (i)
      if (0 < a) {
        if (t <= r) return o;
        if (e <= t) return n;
      } else {
        if (r <= t) return o;
        if (t <= e) return n;
      }
    else {
      if (t === r) return o;
      if (t === e) return n;
    }
    return ((t - r) / a) * s + o;
  }
  function Kr(t, e) {
    switch (t) {
      case "center":
      case "middle":
        t = "50%";
        break;
      case "left":
      case "top":
        t = "0%";
        break;
      case "right":
      case "bottom":
        t = "100%";
    }
    return H(t)
      ? t.replace(/^\s+|\s+$/g, "").match(/%$/)
        ? (parseFloat(t) / 100) * e
        : parseFloat(t)
      : null == t
      ? NaN
      : +t;
  }
  function $r(t, e, n) {
    return (
      null == e && (e = 10),
      (e = Math.min(Math.max(0, e), Zr)),
      (t = (+t).toFixed(e)),
      n ? t : +t
    );
  }
  function Qr(t) {
    if (((t = +t), isNaN(t))) return 0;
    if (1e-14 < t)
      for (var e = 1, n = 0; n < 15; n++, e *= 10)
        if (Math.round(t * e) / e === t) return n;
    return Jr(t);
  }
  function Jr(t) {
    var t = t.toString().toLowerCase(),
      e = t.indexOf("e"),
      n = 0 < e ? +t.slice(e + 1) : 0,
      e = 0 < e ? e : t.length,
      t = t.indexOf(".");
    return Math.max(0, (t < 0 ? 0 : e - 1 - t) - n);
  }
  function to(t, e) {
    var n = Math.log,
      i = Math.LN10,
      t = Math.floor(n(t[1] - t[0]) / i),
      n = Math.round(n(Math.abs(e[1] - e[0])) / i),
      e = Math.min(Math.max(-t + n, 0), 20);
    return isFinite(e) ? e : 20;
  }
  function eo(t, e) {
    var n = lt(
      t,
      function (t, e) {
        return t + (isNaN(e) ? 0 : e);
      },
      0
    );
    if (0 === n) return [];
    for (
      var i = Math.pow(10, e),
        e = F(t, function (t) {
          return ((isNaN(t) ? 0 : t) / n) * i * 100;
        }),
        r = 100 * i,
        o = F(e, function (t) {
          return Math.floor(t);
        }),
        a = lt(
          o,
          function (t, e) {
            return t + e;
          },
          0
        ),
        s = F(e, function (t, e) {
          return t - o[e];
        });
      a < r;

    ) {
      for (
        var l = Number.NEGATIVE_INFINITY, u = null, h = 0, c = s.length;
        h < c;
        ++h
      )
        s[h] > l && ((l = s[h]), (u = h));
      ++o[u], (s[u] = 0), ++a;
    }
    return F(o, function (t) {
      return t / i;
    });
  }
  function no(t) {
    var e = 2 * Math.PI;
    return ((t % e) + e) % e;
  }
  function io(t) {
    return -1e-4 < t && t < 1e-4;
  }
  var ro =
    /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/;
  function oo(t) {
    var e, n;
    return t instanceof Date
      ? t
      : H(t)
      ? (e = ro.exec(t))
        ? e[8]
          ? ((n = +e[4] || 0),
            "Z" !== e[8].toUpperCase() && (n -= +e[8].slice(0, 3)),
            new Date(
              Date.UTC(
                +e[1],
                +(e[2] || 1) - 1,
                +e[3] || 1,
                n,
                +(e[5] || 0),
                +e[6] || 0,
                e[7] ? +e[7].substring(0, 3) : 0
              )
            ))
          : new Date(
              +e[1],
              +(e[2] || 1) - 1,
              +e[3] || 1,
              +e[4] || 0,
              +(e[5] || 0),
              +e[6] || 0,
              e[7] ? +e[7].substring(0, 3) : 0
            )
        : new Date(NaN)
      : null == t
      ? new Date(NaN)
      : new Date(Math.round(t));
  }
  function ao(t) {
    return Math.pow(10, so(t));
  }
  function so(t) {
    var e;
    return 0 === t
      ? 0
      : ((e = Math.floor(Math.log(t) / Math.LN10)),
        10 <= t / Math.pow(10, e) && e++,
        e);
  }
  function lo(t, e) {
    var n = so(t),
      i = Math.pow(10, n),
      r = t / i;
    return (
      (t =
        (e
          ? r < 1.5
            ? 1
            : r < 2.5
            ? 2
            : r < 4
            ? 3
            : r < 7
            ? 5
            : 10
          : r < 1
          ? 1
          : r < 2
          ? 2
          : r < 3
          ? 3
          : r < 5
          ? 5
          : 10) * i),
      -20 <= n ? +t.toFixed(n < 0 ? -n : 0) : t
    );
  }
  function uo(t) {
    var e = parseFloat(t);
    return e == t && (0 !== e || !H(t) || t.indexOf("x") <= 0) ? e : NaN;
  }
  function ho(t) {
    return !isNaN(uo(t));
  }
  function co() {
    return Math.round(9 * Math.random());
  }
  function po(t, e) {
    return null == t
      ? e
      : null == e
      ? t
      : (t * e) /
        (function t(e, n) {
          return 0 === n ? e : t(n, e % n);
        })(t, e);
  }
  function f(t) {
    throw new Error(t);
  }
  function fo(t, e, n) {
    return (e - t) * n + t;
  }
  var go = "series\0",
    yo = "\0_ec_\0";
  function mo(t) {
    return t instanceof Array ? t : null == t ? [] : [t];
  }
  function vo(t, e, n) {
    if (t) {
      (t[e] = t[e] || {}),
        (t.emphasis = t.emphasis || {}),
        (t.emphasis[e] = t.emphasis[e] || {});
      for (var i = 0, r = n.length; i < r; i++) {
        var o = n[i];
        !t.emphasis[e].hasOwnProperty(o) &&
          t[e].hasOwnProperty(o) &&
          (t.emphasis[e][o] = t[e][o]);
      }
    }
  }
  var _o = [
    "fontStyle",
    "fontWeight",
    "fontSize",
    "fontFamily",
    "rich",
    "tag",
    "color",
    "textBorderColor",
    "textBorderWidth",
    "width",
    "height",
    "lineHeight",
    "align",
    "verticalAlign",
    "baseline",
    "shadowColor",
    "shadowBlur",
    "shadowOffsetX",
    "shadowOffsetY",
    "textShadowColor",
    "textShadowBlur",
    "textShadowOffsetX",
    "textShadowOffsetY",
    "backgroundColor",
    "borderColor",
    "borderWidth",
    "borderRadius",
    "padding",
  ];
  function xo(t) {
    return !O(t) || V(t) || t instanceof Date ? t : t.value;
  }
  function wo(t, n, e) {
    var a,
      i,
      r,
      o,
      s,
      l,
      u,
      h,
      c,
      p,
      d = "normalMerge" === e,
      f = "replaceMerge" === e,
      g = "replaceAll" === e,
      y = ((t = t || []), (n = (n || []).slice()), N()),
      e =
        (E(n, function (t, e) {
          O(t) || (n[e] = null);
        }),
        (function (t, e, n) {
          var i = [];
          if ("replaceAll" !== n)
            for (var r = 0; r < t.length; r++) {
              var o = t[r];
              o && null != o.id && e.set(o.id, r),
                i.push({
                  existing: "replaceMerge" === n || Co(o) ? null : o,
                  newOption: null,
                  keyInfo: null,
                  brandNew: null,
                });
            }
          return i;
        })(t, y, e));
    return (
      (d || f) &&
        ((u = e),
        (h = t),
        (c = y),
        E((p = n), function (t, e) {
          var n, i, r;
          t &&
            null != t.id &&
            ((n = So(t.id)), null != (i = c.get(n))) &&
            (Tt(!(r = u[i]).newOption, 'Duplicated option on id "' + n + '".'),
            (r.newOption = t),
            (r.existing = h[i]),
            (p[e] = null));
        })),
      d &&
        ((s = e),
        E((l = n), function (t, e) {
          if (t && null != t.name)
            for (var n = 0; n < s.length; n++) {
              var i = s[n].existing;
              if (
                !s[n].newOption &&
                i &&
                (null == i.id || null == t.id) &&
                !Co(t) &&
                !Co(i) &&
                bo("name", i, t)
              )
                return (s[n].newOption = t), void (l[e] = null);
            }
        })),
      d || f
        ? ((r = e),
          (o = f),
          E(n, function (t) {
            if (t) {
              for (
                var e, n = 0;
                (e = r[n]) &&
                (e.newOption ||
                  Co(e.existing) ||
                  (e.existing && null != t.id && !bo("id", t, e.existing)));

              )
                n++;
              e
                ? ((e.newOption = t), (e.brandNew = o))
                : r.push({
                    newOption: t,
                    brandNew: o,
                    existing: null,
                    keyInfo: null,
                  }),
                n++;
            }
          }))
        : g &&
          ((i = e),
          E(n, function (t) {
            i.push({
              newOption: t,
              brandNew: !0,
              existing: null,
              keyInfo: null,
            });
          })),
      (t = e),
      (a = N()),
      E(t, function (t) {
        var e = t.existing;
        e && a.set(e.id, t);
      }),
      E(t, function (t) {
        var e = t.newOption;
        Tt(
          !e || null == e.id || !a.get(e.id) || a.get(e.id) === t,
          "id duplicates: " + (e && e.id)
        ),
          e && null != e.id && a.set(e.id, t),
          t.keyInfo || (t.keyInfo = {});
      }),
      E(t, function (t, e) {
        var n = t.existing,
          i = t.newOption,
          r = t.keyInfo;
        if (O(i)) {
          if (((r.name = null != i.name ? So(i.name) : n ? n.name : go + e), n))
            r.id = So(n.id);
          else if (null != i.id) r.id = So(i.id);
          else
            for (var o = 0; (r.id = "\0" + r.name + "\0" + o++), a.get(r.id); );
          a.set(r.id, t);
        }
      }),
      e
    );
  }
  function bo(t, e, n) {
    (e = Mo(e[t], null)), (n = Mo(n[t], null));
    return null != e && null != n && e === n;
  }
  function So(t) {
    return Mo(t, "");
  }
  function Mo(t, e) {
    return null == t ? e : H(t) ? t : G(t) || dt(t) ? t + "" : e;
  }
  function To(t) {
    t = t.name;
    return !(!t || !t.indexOf(go));
  }
  function Co(t) {
    return t && null != t.id && 0 === So(t.id).indexOf(yo);
  }
  function Io(t, r, o) {
    E(t, function (t) {
      var e,
        n,
        i = t.newOption;
      O(i) &&
        ((t.keyInfo.mainType = r),
        (t.keyInfo.subType =
          ((e = r),
          (i = i),
          (t = t.existing),
          (n = o),
          i.type || (t ? t.subType : n.determineSubType(e, i)))));
    });
  }
  function Do(e, t) {
    return null != t.dataIndexInside
      ? t.dataIndexInside
      : null != t.dataIndex
      ? V(t.dataIndex)
        ? F(t.dataIndex, function (t) {
            return e.indexOfRawIndex(t);
          })
        : e.indexOfRawIndex(t.dataIndex)
      : null != t.name
      ? V(t.name)
        ? F(t.name, function (t) {
            return e.indexOfName(t);
          })
        : e.indexOfName(t.name)
      : void 0;
  }
  function ko() {
    var e = "__ec_inner_" + Ao++;
    return function (t) {
      return t[e] || (t[e] = {});
    };
  }
  var Ao = co();
  function Po(n, t, i) {
    var t = Lo(t, i),
      e = t.mainTypeSpecified,
      r = t.queryOptionMap,
      o = t.others,
      a = i ? i.defaultMainType : null;
    return (
      !e && a && r.set(a, {}),
      r.each(function (t, e) {
        t = Ro(n, e, t, {
          useDefault: a === e,
          enableAll: !i || null == i.enableAll || i.enableAll,
          enableNone: !i || null == i.enableNone || i.enableNone,
        });
        (o[e + "Models"] = t.models), (o[e + "Model"] = t.models[0]);
      }),
      o
    );
  }
  function Lo(t, r) {
    var e = H(t) ? (((e = {})[t + "Index"] = 0), e) : t,
      o = N(),
      a = {},
      s = !1;
    return (
      E(e, function (t, e) {
        var n, i;
        "dataIndex" !== e && "dataIndexInside" !== e
          ? ((n = (i = e.match(/^(\w+)(Index|Id|Name)$/) || [])[1]),
            (i = (i[2] || "").toLowerCase()),
            !n ||
              !i ||
              (r && r.includeMainTypes && I(r.includeMainTypes, n) < 0) ||
              ((s = s || !!n), ((o.get(n) || o.set(n, {}))[i] = t)))
          : (a[e] = t);
      }),
      { mainTypeSpecified: s, queryOptionMap: o, others: a }
    );
  }
  var Oo = { useDefault: !0, enableAll: !1, enableNone: !1 };
  function Ro(t, e, n, i) {
    i = i || Oo;
    var r = n.index,
      o = n.id,
      n = n.name,
      a = { models: null, specified: null != r || null != o || null != n };
    return (
      a.specified
        ? "none" === r || !1 === r
          ? (Tt(
              i.enableNone,
              '`"none"` or `false` is not a valid value on index option.'
            ),
            (a.models = []))
          : ("all" === r &&
              (Tt(i.enableAll, '`"all"` is not a valid value on index option.'),
              (r = o = n = null)),
            (a.models = t.queryComponents({
              mainType: e,
              index: r,
              id: o,
              name: n,
            })))
        : ((r = void 0),
          (a.models = i.useDefault && (r = t.getComponent(e)) ? [r] : [])),
      a
    );
  }
  function No(t, e, n) {
    t.setAttribute ? t.setAttribute(e, n) : (t[e] = n);
  }
  function Eo(t, e, n, i, r) {
    var o = null == e || "auto" === e;
    if (null == i) return i;
    if (G(i))
      return $r((p = fo(n || 0, i, r)), o ? Math.max(Qr(n || 0), Qr(i)) : e);
    if (H(i)) return r < 1 ? n : i;
    for (
      var a = [], s = n, l = i, u = Math.max(s ? s.length : 0, l.length), h = 0;
      h < u;
      ++h
    ) {
      var c,
        p,
        d = t.getDimensionInfo(h);
      d && "ordinal" === d.type
        ? (a[h] = (r < 1 && s ? s : l)[h])
        : ((p = fo((d = s && s[h] ? s[h] : 0), (c = l[h]), r)),
          (a[h] = $r(p, o ? Math.max(Qr(d), Qr(c)) : e)));
    }
    return a;
  }
  var zo = ".",
    Bo = "___EC__COMPONENT__CONTAINER___",
    Fo = "___EC__EXTENDED_CLASS___";
  function Vo(t) {
    var e = { main: "", sub: "" };
    return (
      t && ((t = t.split(zo)), (e.main = t[0] || ""), (e.sub = t[1] || "")), e
    );
  }
  function Ho(t) {
    (t.$constructor = t).extend = function (t) {
      var e,
        n,
        i,
        r = this;
      return (
        S((i = r)) && /^class\s/.test(Function.prototype.toString.call(i))
          ? (u(o, (n = r)), (e = o))
          : ot(
              (e = function () {
                (t.$constructor || r).apply(this, arguments);
              }),
              this
            ),
        L(e.prototype, t),
        (e[Fo] = !0),
        (e.extend = this.extend),
        (e.superCall = Uo),
        (e.superApply = Xo),
        (e.superClass = r),
        e
      );
      function o() {
        return n.apply(this, arguments) || this;
      }
    };
  }
  function Go(t, e) {
    t.extend = e.extend;
  }
  var Wo = Math.round(10 * Math.random());
  function Uo(t, e) {
    for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
    return this.superClass.prototype[e].apply(t, n);
  }
  function Xo(t, e, n) {
    return this.superClass.prototype[e].apply(t, n);
  }
  function Yo(t) {
    var r = {};
    (t.registerClass = function (t) {
      var e,
        n = t.type || t.prototype.type;
      return (
        n &&
          (Tt(
            /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test((e = n)),
            'componentType "' + e + '" illegal'
          ),
          (e = Vo((t.prototype.type = n))).sub
            ? e.sub !== Bo &&
              (((n = r[e.main]) && n[Bo]) || ((n = r[e.main] = {})[Bo] = !0),
              (n[e.sub] = t))
            : (r[e.main] = t)),
        t
      );
    }),
      (t.getClass = function (t, e, n) {
        var i = r[t];
        if ((i && i[Bo] && (i = e ? i[e] : null), n && !i))
          throw new Error(
            e
              ? "Component " +
                t +
                "." +
                (e || "") +
                " is used but not imported."
              : t + ".type should be specified."
          );
        return i;
      }),
      (t.getClassesByMainType = function (t) {
        var t = Vo(t),
          n = [],
          t = r[t.main];
        return (
          t && t[Bo]
            ? E(t, function (t, e) {
                e !== Bo && n.push(t);
              })
            : n.push(t),
          n
        );
      }),
      (t.hasClass = function (t) {
        t = Vo(t);
        return !!r[t.main];
      }),
      (t.getAllClassMainTypes = function () {
        var n = [];
        return (
          E(r, function (t, e) {
            n.push(e);
          }),
          n
        );
      }),
      (t.hasSubTypes = function (t) {
        (t = Vo(t)), (t = r[t.main]);
        return t && t[Bo];
      });
  }
  function qo(a, s) {
    for (var t = 0; t < a.length; t++) a[t][1] || (a[t][1] = a[t][0]);
    return (
      (s = s || !1),
      function (t, e, n) {
        for (var i = {}, r = 0; r < a.length; r++) {
          var o = a[r][1];
          (e && 0 <= I(e, o)) ||
            (n && I(n, o) < 0) ||
            (null != (o = t.getShallow(o, s)) && (i[a[r][0]] = o));
        }
        return i;
      }
    );
  }
  var Zo = qo([
      ["fill", "color"],
      ["shadowBlur"],
      ["shadowOffsetX"],
      ["shadowOffsetY"],
      ["opacity"],
      ["shadowColor"],
    ]),
    jo =
      ((Ko.prototype.getAreaStyle = function (t, e) {
        return Zo(this, t, e);
      }),
      Ko);
  function Ko() {}
  var $o = new ti(50);
  function Qo(t, e, n, i, r) {
    return t
      ? "string" == typeof t
        ? ((e && e.__zrImageSrc === t) ||
            !n ||
            ((n = { hostEl: n, cb: i, cbPayload: r }),
            (i = $o.get(t))
              ? ta((e = i.image)) || i.pending.push(n)
              : (((e = X.loadImage(t, Jo, Jo)).__zrImageSrc = t),
                $o.put(t, (e.__cachedImgObj = { image: e, pending: [n] })))),
          e)
        : t
      : e;
  }
  function Jo() {
    var t = this.__cachedImgObj;
    this.onload = this.onerror = this.__cachedImgObj = null;
    for (var e = 0; e < t.pending.length; e++) {
      var n = t.pending[e],
        i = n.cb;
      i && i(this, n.cbPayload), n.hostEl.dirty();
    }
    t.pending.length = 0;
  }
  function ta(t) {
    return t && t.width && t.height;
  }
  var ea = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g;
  function na(t, e, n, i, r) {
    if (!e) return "";
    var o = (t + "").split("\n");
    r = ia(e, n, i, r);
    for (var a = 0, s = o.length; a < s; a++) o[a] = ra(o[a], r);
    return o.join("\n");
  }
  function ia(t, e, n, i) {
    var r = L({}, (i = i || {})),
      o =
        ((r.font = e),
        (n = R(n, "...")),
        (r.maxIterations = R(i.maxIterations, 2)),
        (r.minChar = R(i.minChar, 0))),
      a = ((r.cnCharWidth = _r("国", e)), (r.ascCharWidth = _r("a", e)));
    r.placeholder = R(i.placeholder, "");
    for (var s = (t = Math.max(0, t - 1)), l = 0; l < o && a <= s; l++) s -= a;
    i = _r(n, e);
    return (
      s < i && ((n = ""), (i = 0)),
      (s = t - i),
      (r.ellipsis = n),
      (r.ellipsisWidth = i),
      (r.contentWidth = s),
      (r.containerWidth = t),
      r
    );
  }
  function ra(t, e) {
    var n = e.containerWidth,
      i = e.font,
      r = e.contentWidth;
    if (!n) return "";
    var o = _r(t, i);
    if (!(o <= n)) {
      for (var a = 0; ; a++) {
        if (o <= r || a >= e.maxIterations) {
          t += e.ellipsis;
          break;
        }
        var s =
            0 === a
              ? (function (t, e, n, i) {
                  for (var r = 0, o = 0, a = t.length; o < a && r < e; o++) {
                    var s = t.charCodeAt(o);
                    r += 0 <= s && s <= 127 ? n : i;
                  }
                  return o;
                })(t, r, e.ascCharWidth, e.cnCharWidth)
              : 0 < o
              ? Math.floor((t.length * r) / o)
              : 0,
          o = _r((t = t.substr(0, s)), i);
      }
      "" === t && (t = e.placeholder);
    }
    return t;
  }
  function oa() {
    (this.width = 0),
      (this.height = 0),
      (this.contentWidth = 0),
      (this.contentHeight = 0),
      (this.outerWidth = 0),
      (this.outerHeight = 0),
      (this.lines = []);
  }
  var aa = function () {},
    sa = function (t) {
      (this.tokens = []), t && (this.tokens = t);
    };
  function la(t, e) {
    var n = new oa();
    if ((null != t && (t += ""), t)) {
      for (
        var i,
          r = e.width,
          o = e.height,
          a = e.overflow,
          s =
            ("break" !== a && "breakAll" !== a) || null == r
              ? null
              : { width: r, accumWidth: 0, breakAll: "breakAll" === a },
          l = (ea.lastIndex = 0);
        null != (i = ea.exec(t));

      ) {
        var u = i.index;
        l < u && ua(n, t.substring(l, u), e, s),
          ua(n, i[2], e, s, i[1]),
          (l = ea.lastIndex);
      }
      l < t.length && ua(n, t.substring(l, t.length), e, s);
      var h,
        c = [],
        p = 0,
        d = 0,
        f = e.padding,
        g = "truncate" === a,
        y = "truncate" === e.lineOverflow;
      t: for (var m = 0; m < n.lines.length; m++) {
        for (
          var v = n.lines[m], _ = 0, x = 0, w = 0;
          w < v.tokens.length;
          w++
        ) {
          var b = ((k = v.tokens[w]).styleName && e.rich[k.styleName]) || {},
            S = (k.textPadding = b.padding),
            M = S ? S[1] + S[3] : 0,
            T = (k.font = b.font || e.font),
            C = ((k.contentHeight = Mr(T)), R(b.height, k.contentHeight));
          if (
            ((k.innerHeight = C),
            S && (C += S[0] + S[2]),
            (k.height = C),
            (k.lineHeight = bt(b.lineHeight, e.lineHeight, C)),
            (k.align = (b && b.align) || e.align),
            (k.verticalAlign = (b && b.verticalAlign) || "middle"),
            y && null != o && p + k.lineHeight > o)
          ) {
            0 < w
              ? ((v.tokens = v.tokens.slice(0, w)),
                P(v, x, _),
                (n.lines = n.lines.slice(0, m + 1)))
              : (n.lines = n.lines.slice(0, m));
            break t;
          }
          var I,
            S = b.width,
            D = null == S || "auto" === S;
          "string" == typeof S && "%" === S.charAt(S.length - 1)
            ? ((k.percentWidth = S),
              c.push(k),
              (k.contentWidth = _r(k.text, T)))
            : (D &&
                (S = (S = b.backgroundColor) && S.image) &&
                ((I = void 0),
                ta(
                  (S =
                    "string" == typeof (h = S) ? (I = $o.get(h)) && I.image : h)
                )) &&
                (k.width = Math.max(k.width, (S.width * C) / S.height)),
              null != (I = g && null != r ? r - x : null) && I < k.width
                ? !D || I < M
                  ? ((k.text = ""), (k.width = k.contentWidth = 0))
                  : ((k.text = na(k.text, I - M, T, e.ellipsis, {
                      minChar: e.truncateMinChar,
                    })),
                    (k.width = k.contentWidth = _r(k.text, T)))
                : (k.contentWidth = _r(k.text, T))),
            (k.width += M),
            (x += k.width),
            b && (_ = Math.max(_, k.lineHeight));
        }
        P(v, x, _);
      }
      for (
        n.outerWidth = n.width = R(r, d),
          n.outerHeight = n.height = R(o, p),
          n.contentHeight = p,
          n.contentWidth = d,
          f && ((n.outerWidth += f[1] + f[3]), (n.outerHeight += f[0] + f[2])),
          m = 0;
        m < c.length;
        m++
      ) {
        var k,
          A = (k = c[m]).percentWidth;
        k.width = (parseInt(A, 10) / 100) * n.width;
      }
    }
    return n;
    function P(t, e, n) {
      (t.width = e), (t.lineHeight = n), (p += n), (d = Math.max(d, e));
    }
  }
  function ua(t, e, n, i, r) {
    var o,
      a,
      s = "" === e,
      l = (r && n.rich[r]) || {},
      u = t.lines,
      h = l.font || n.font,
      c = !1;
    i
      ? ((n = (t = l.padding) ? t[1] + t[3] : 0),
        null != l.width && "auto" !== l.width
          ? ((t = Tr(l.width, i.width) + n),
            0 < u.length &&
              t + i.accumWidth > i.width &&
              ((o = e.split("\n")), (c = !0)),
            (i.accumWidth = t))
          : ((t = ca(e, h, i.width, i.breakAll, i.accumWidth)),
            (i.accumWidth = t.accumWidth + n),
            (a = t.linesWidths),
            (o = t.lines)))
      : (o = e.split("\n"));
    for (var p = 0; p < o.length; p++) {
      var d,
        f,
        g = o[p],
        y = new aa();
      (y.styleName = r),
        (y.text = g),
        (y.isLineHolder = !g && !s),
        "number" == typeof l.width
          ? (y.width = l.width)
          : (y.width = a ? a[p] : _r(g, h)),
        p || c
          ? u.push(new sa([y]))
          : 1 ===
              (f = (d = (u[u.length - 1] || (u[0] = new sa())).tokens)
                .length) && d[0].isLineHolder
          ? (d[0] = y)
          : (!g && f && !s) || d.push(y);
    }
  }
  var ha = lt(
    ",&?/;] ".split(""),
    function (t, e) {
      return (t[e] = !0), t;
    },
    {}
  );
  function ca(t, e, n, i, r) {
    for (
      var o, a = [], s = [], l = "", u = "", h = 0, c = 0, p = 0;
      p < t.length;
      p++
    ) {
      var d,
        f,
        g = t.charAt(p);
      "\n" !== g
        ? ((d = _r(g, e)),
          (f = !(
            i ||
            ((f = void 0),
            !(
              (32 <= (f = (f = o = g).charCodeAt(0)) && f <= 591) ||
              (880 <= f && f <= 4351) ||
              (4608 <= f && f <= 5119) ||
              (7680 <= f && f <= 8303)
            )) ||
            ha[o]
          )),
          (a.length ? n < c + d : n < r + c + d)
            ? c
              ? (l || u) &&
                (c = f
                  ? (l || ((l = u), (u = ""), (c = h = 0)),
                    a.push(l),
                    s.push(c - h),
                    (u += g),
                    (l = ""),
                    (h += d))
                  : (u && ((l += u), (u = ""), (h = 0)),
                    a.push(l),
                    s.push(c),
                    (l = g),
                    d))
              : f
              ? (a.push(u), s.push(h), (u = g), (h = d))
              : (a.push(g), s.push(d))
            : ((c += d),
              f
                ? ((u += g), (h += d))
                : (u && ((l += u), (u = ""), (h = 0)), (l += g))))
        : (u && ((l += u), (c += h)),
          a.push(l),
          s.push(c),
          (u = l = ""),
          (c = h = 0));
    }
    return (
      a.length || l || ((l = t), (u = ""), (h = 0)),
      u && (l += u),
      l && (a.push(l), s.push(c)),
      1 === a.length && (c += r),
      { accumWidth: c, lines: a, linesWidths: s }
    );
  }
  var pa,
    da = "__zr_style_" + Math.round(10 * Math.random()),
    fa = {
      shadowBlur: 0,
      shadowOffsetX: 0,
      shadowOffsetY: 0,
      shadowColor: "#000",
      opacity: 1,
      blend: "source-over",
    },
    ga = {
      style: {
        shadowBlur: !0,
        shadowOffsetX: !0,
        shadowOffsetY: !0,
        shadowColor: !0,
        opacity: !0,
      },
    },
    ya = ((fa[da] = !0), ["z", "z2", "invisible"]),
    ma = ["invisible"],
    n =
      (u(r, (pa = n)),
      (r.prototype._init = function (t) {
        for (var e = ht(t), n = 0; n < e.length; n++) {
          var i = e[n];
          "style" === i
            ? this.useStyle(t[i])
            : pa.prototype.attrKV.call(this, i, t[i]);
        }
        this.style || this.useStyle({});
      }),
      (r.prototype.beforeBrush = function () {}),
      (r.prototype.afterBrush = function () {}),
      (r.prototype.innerBeforeBrush = function () {}),
      (r.prototype.innerAfterBrush = function () {}),
      (r.prototype.shouldBePainted = function (t, e, n, i) {
        var r,
          o = this.transform;
        if (
          this.ignore ||
          this.invisible ||
          0 === this.style.opacity ||
          (this.culling &&
            ((r = this),
            (t = t),
            (e = e),
            va.copy(r.getBoundingRect()),
            r.transform && va.applyTransform(r.transform),
            (_a.width = t),
            (_a.height = e),
            !va.intersect(_a))) ||
          (o && !o[0] && !o[3])
        )
          return !1;
        if (n && this.__clipPaths)
          for (var a = 0; a < this.__clipPaths.length; ++a)
            if (this.__clipPaths[a].isZeroArea()) return !1;
        if (i && this.parent)
          for (var s = this.parent; s; ) {
            if (s.ignore) return !1;
            s = s.parent;
          }
        return !0;
      }),
      (r.prototype.contain = function (t, e) {
        return this.rectContain(t, e);
      }),
      (r.prototype.traverse = function (t, e) {
        t.call(e, this);
      }),
      (r.prototype.rectContain = function (t, e) {
        t = this.transformCoordToLocal(t, e);
        return this.getBoundingRect().contain(t[0], t[1]);
      }),
      (r.prototype.getPaintRect = function () {
        var t,
          e,
          n,
          i,
          r,
          o = this._paintRect;
        return (
          (this._paintRect && !this.__dirty) ||
            ((r = this.transform),
            (t = this.getBoundingRect()),
            (e = (i = this.style).shadowBlur || 0),
            (n = i.shadowOffsetX || 0),
            (i = i.shadowOffsetY || 0),
            (o = this._paintRect || (this._paintRect = new W(0, 0, 0, 0))),
            r ? W.applyTransform(o, t, r) : o.copy(t),
            (e || n || i) &&
              ((o.width += 2 * e + Math.abs(n)),
              (o.height += 2 * e + Math.abs(i)),
              (o.x = Math.min(o.x, o.x + n - e)),
              (o.y = Math.min(o.y, o.y + i - e))),
            (r = this.dirtyRectTolerance),
            o.isZero()) ||
            ((o.x = Math.floor(o.x - r)),
            (o.y = Math.floor(o.y - r)),
            (o.width = Math.ceil(o.width + 1 + 2 * r)),
            (o.height = Math.ceil(o.height + 1 + 2 * r))),
          o
        );
      }),
      (r.prototype.setPrevPaintRect = function (t) {
        t
          ? ((this._prevPaintRect = this._prevPaintRect || new W(0, 0, 0, 0)),
            this._prevPaintRect.copy(t))
          : (this._prevPaintRect = null);
      }),
      (r.prototype.getPrevPaintRect = function () {
        return this._prevPaintRect;
      }),
      (r.prototype.animateStyle = function (t) {
        return this.animate("style", t);
      }),
      (r.prototype.updateDuringAnimation = function (t) {
        "style" === t ? this.dirtyStyle() : this.markRedraw();
      }),
      (r.prototype.attrKV = function (t, e) {
        "style" !== t
          ? pa.prototype.attrKV.call(this, t, e)
          : this.style
          ? this.setStyle(e)
          : this.useStyle(e);
      }),
      (r.prototype.setStyle = function (t, e) {
        return (
          "string" == typeof t ? (this.style[t] = e) : L(this.style, t),
          this.dirtyStyle(),
          this
        );
      }),
      (r.prototype.dirtyStyle = function (t) {
        t || this.markRedraw(),
          (this.__dirty |= 2),
          this._rect && (this._rect = null);
      }),
      (r.prototype.dirty = function () {
        this.dirtyStyle();
      }),
      (r.prototype.styleChanged = function () {
        return !!(2 & this.__dirty);
      }),
      (r.prototype.styleUpdated = function () {
        this.__dirty &= -3;
      }),
      (r.prototype.createStyle = function (t) {
        return Et(fa, t);
      }),
      (r.prototype.useStyle = function (t) {
        t[da] || (t = this.createStyle(t)),
          this.__inHover ? (this.__hoverStyle = t) : (this.style = t),
          this.dirtyStyle();
      }),
      (r.prototype.isStyleObject = function (t) {
        return t[da];
      }),
      (r.prototype._innerSaveToNormal = function (t) {
        pa.prototype._innerSaveToNormal.call(this, t);
        var e = this._normalState;
        t.style &&
          !e.style &&
          (e.style = this._mergeStyle(this.createStyle(), this.style)),
          this._savePrimaryToNormal(t, e, ya);
      }),
      (r.prototype._applyStateObj = function (t, e, n, i, r, o) {
        pa.prototype._applyStateObj.call(this, t, e, n, i, r, o);
        var a,
          s = !(e && i);
        if (
          (e && e.style
            ? r
              ? i
                ? (a = e.style)
                : ((a = this._mergeStyle(this.createStyle(), n.style)),
                  this._mergeStyle(a, e.style))
              : ((a = this._mergeStyle(
                  this.createStyle(),
                  (i ? this : n).style
                )),
                this._mergeStyle(a, e.style))
            : s && (a = n.style),
          a)
        )
          if (r) {
            var l = this.style;
            if (((this.style = this.createStyle(s ? {} : l)), s))
              for (var u = ht(l), h = 0; h < u.length; h++)
                (p = u[h]) in a && ((a[p] = a[p]), (this.style[p] = l[p]));
            for (var c = ht(a), h = 0; h < c.length; h++) {
              var p = c[h];
              this.style[p] = this.style[p];
            }
            this._transitionState(
              t,
              { style: a },
              o,
              this.getAnimationStyleProps()
            );
          } else this.useStyle(a);
        var d = this.__inHover ? ma : ya;
        for (h = 0; h < d.length; h++)
          (p = d[h]),
            e && null != e[p]
              ? (this[p] = e[p])
              : s && null != n[p] && (this[p] = n[p]);
      }),
      (r.prototype._mergeStates = function (t) {
        for (
          var e, n = pa.prototype._mergeStates.call(this, t), i = 0;
          i < t.length;
          i++
        ) {
          var r = t[i];
          r.style && this._mergeStyle((e = e || {}), r.style);
        }
        return e && (n.style = e), n;
      }),
      (r.prototype._mergeStyle = function (t, e) {
        return L(t, e), t;
      }),
      (r.prototype.getAnimationStyleProps = function () {
        return ga;
      }),
      (r.initDefaultProps =
        (((n = r.prototype).type = "displayable"),
        (n.invisible = !1),
        (n.z = 0),
        (n.z2 = 0),
        (n.zlevel = 0),
        (n.culling = !1),
        (n.cursor = "pointer"),
        (n.rectHover = !1),
        (n.incremental = !1),
        (n._rect = null),
        (n.dirtyRectTolerance = 0),
        void (n.__dirty = 2 | mn))),
      r),
    va = new W(0, 0, 0, 0),
    _a = new W(0, 0, 0, 0);
  function r(t) {
    return pa.call(this, t) || this;
  }
  var xa = Math.min,
    wa = Math.max,
    ba = Math.sin,
    Sa = Math.cos,
    Ma = 2 * Math.PI,
    Ta = Gt(),
    Ca = Gt(),
    Ia = Gt();
  function Da(t, e, n, i, r, o) {
    (r[0] = xa(t, n)), (r[1] = xa(e, i)), (o[0] = wa(t, n)), (o[1] = wa(e, i));
  }
  var ka = [],
    Aa = [];
  var U = { M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7 },
    Pa = [],
    La = [],
    Oa = [],
    Ra = [],
    Na = [],
    Ea = [],
    za = Math.min,
    Ba = Math.max,
    Fa = Math.cos,
    Va = Math.sin,
    Ha = Math.abs,
    Ga = Math.PI,
    Wa = 2 * Ga,
    Ua = "undefined" != typeof Float32Array,
    Xa = [];
  function Ya(t) {
    return ((Math.round((t / Ga) * 1e8) / 1e8) % 2) * Ga;
  }
  (o.prototype.increaseVersion = function () {
    this._version++;
  }),
    (o.prototype.getVersion = function () {
      return this._version;
    }),
    (o.prototype.setScale = function (t, e, n) {
      0 < (n = n || 0) &&
        ((this._ux = Ha(n / ar / t) || 0), (this._uy = Ha(n / ar / e) || 0));
    }),
    (o.prototype.setDPR = function (t) {
      this.dpr = t;
    }),
    (o.prototype.setContext = function (t) {
      this._ctx = t;
    }),
    (o.prototype.getContext = function () {
      return this._ctx;
    }),
    (o.prototype.beginPath = function () {
      return this._ctx && this._ctx.beginPath(), this.reset(), this;
    }),
    (o.prototype.reset = function () {
      this._saveData && (this._len = 0),
        this._pathSegLen && ((this._pathSegLen = null), (this._pathLen = 0)),
        this._version++;
    }),
    (o.prototype.moveTo = function (t, e) {
      return (
        this._drawPendingPt(),
        this.addData(U.M, t, e),
        this._ctx && this._ctx.moveTo(t, e),
        (this._x0 = t),
        (this._y0 = e),
        (this._xi = t),
        (this._yi = e),
        this
      );
    }),
    (o.prototype.lineTo = function (t, e) {
      var n = Ha(t - this._xi),
        i = Ha(e - this._yi),
        r = n > this._ux || i > this._uy;
      return (
        this.addData(U.L, t, e),
        this._ctx && r && this._ctx.lineTo(t, e),
        r
          ? ((this._xi = t), (this._yi = e), (this._pendingPtDist = 0))
          : (r = n * n + i * i) > this._pendingPtDist &&
            ((this._pendingPtX = t),
            (this._pendingPtY = e),
            (this._pendingPtDist = r)),
        this
      );
    }),
    (o.prototype.bezierCurveTo = function (t, e, n, i, r, o) {
      return (
        this._drawPendingPt(),
        this.addData(U.C, t, e, n, i, r, o),
        this._ctx && this._ctx.bezierCurveTo(t, e, n, i, r, o),
        (this._xi = r),
        (this._yi = o),
        this
      );
    }),
    (o.prototype.quadraticCurveTo = function (t, e, n, i) {
      return (
        this._drawPendingPt(),
        this.addData(U.Q, t, e, n, i),
        this._ctx && this._ctx.quadraticCurveTo(t, e, n, i),
        (this._xi = n),
        (this._yi = i),
        this
      );
    }),
    (o.prototype.arc = function (t, e, n, i, r, o) {
      this._drawPendingPt(),
        (Xa[0] = i),
        (Xa[1] = r),
        (s = o),
        (l = Ya((a = Xa)[0])) < 0 && (l += Wa),
        (h = l - a[0]),
        (u = a[1]),
        (u += h),
        !s && Wa <= u - l
          ? (u = l + Wa)
          : s && Wa <= l - u
          ? (u = l - Wa)
          : !s && u < l
          ? (u = l + (Wa - Ya(l - u)))
          : s && l < u && (u = l - (Wa - Ya(u - l))),
        (a[0] = l),
        (a[1] = u);
      var a,
        s,
        l,
        u,
        h = (r = Xa[1]) - (i = Xa[0]);
      return (
        this.addData(U.A, t, e, n, n, i, h, 0, o ? 0 : 1),
        this._ctx && this._ctx.arc(t, e, n, i, r, o),
        (this._xi = Fa(r) * n + t),
        (this._yi = Va(r) * n + e),
        this
      );
    }),
    (o.prototype.arcTo = function (t, e, n, i, r) {
      return (
        this._drawPendingPt(), this._ctx && this._ctx.arcTo(t, e, n, i, r), this
      );
    }),
    (o.prototype.rect = function (t, e, n, i) {
      return (
        this._drawPendingPt(),
        this._ctx && this._ctx.rect(t, e, n, i),
        this.addData(U.R, t, e, n, i),
        this
      );
    }),
    (o.prototype.closePath = function () {
      this._drawPendingPt(), this.addData(U.Z);
      var t = this._ctx,
        e = this._x0,
        n = this._y0;
      return t && t.closePath(), (this._xi = e), (this._yi = n), this;
    }),
    (o.prototype.fill = function (t) {
      t && t.fill(), this.toStatic();
    }),
    (o.prototype.stroke = function (t) {
      t && t.stroke(), this.toStatic();
    }),
    (o.prototype.len = function () {
      return this._len;
    }),
    (o.prototype.setData = function (t) {
      var e = t.length;
      (this.data && this.data.length === e) ||
        !Ua ||
        (this.data = new Float32Array(e));
      for (var n = 0; n < e; n++) this.data[n] = t[n];
      this._len = e;
    }),
    (o.prototype.appendPath = function (t) {
      for (
        var e = (t = t instanceof Array ? t : [t]).length,
          n = 0,
          i = this._len,
          r = 0;
        r < e;
        r++
      )
        n += t[r].len();
      for (
        Ua &&
          this.data instanceof Float32Array &&
          (this.data = new Float32Array(i + n)),
          r = 0;
        r < e;
        r++
      )
        for (var o = t[r].data, a = 0; a < o.length; a++) this.data[i++] = o[a];
      this._len = i;
    }),
    (o.prototype.addData = function (t, e, n, i, r, o, a, s, l) {
      if (this._saveData) {
        var u = this.data;
        this._len + arguments.length > u.length &&
          (this._expandData(), (u = this.data));
        for (var h = 0; h < arguments.length; h++)
          u[this._len++] = arguments[h];
      }
    }),
    (o.prototype._drawPendingPt = function () {
      0 < this._pendingPtDist &&
        (this._ctx && this._ctx.lineTo(this._pendingPtX, this._pendingPtY),
        (this._pendingPtDist = 0));
    }),
    (o.prototype._expandData = function () {
      if (!(this.data instanceof Array)) {
        for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
        this.data = t;
      }
    }),
    (o.prototype.toStatic = function () {
      var t;
      this._saveData &&
        (this._drawPendingPt(), (t = this.data) instanceof Array) &&
        ((t.length = this._len), Ua) &&
        11 < this._len &&
        (this.data = new Float32Array(t));
    }),
    (o.prototype.getBoundingRect = function () {
      (Oa[0] = Oa[1] = Na[0] = Na[1] = Number.MAX_VALUE),
        (Ra[0] = Ra[1] = Ea[0] = Ea[1] = -Number.MAX_VALUE);
      for (
        var t, e, n, i = this.data, r = 0, o = 0, a = 0, s = 0, l = 0;
        l < this._len;

      ) {
        var u = i[l++],
          h = 1 === l;
        switch ((h && ((a = r = i[l]), (s = o = i[l + 1])), u)) {
          case U.M:
            (r = a = i[l++]),
              (o = s = i[l++]),
              (Na[0] = a),
              (Na[1] = s),
              (Ea[0] = a),
              (Ea[1] = s);
            break;
          case U.L:
            Da(r, o, i[l], i[l + 1], Na, Ea), (r = i[l++]), (o = i[l++]);
            break;
          case U.C:
            C =
              T =
              M =
              S =
              b =
              w =
              x =
              _ =
              v =
              m =
              y =
              g =
              f =
              d =
              p =
              c =
                void 0;
            var c = r,
              p = o,
              d = i[l++],
              f = i[l++],
              g = i[l++],
              y = i[l++],
              m = i[l],
              v = i[l + 1],
              _ = Na,
              x = Ea,
              w = Fn,
              b = En,
              S = w(c, d, g, m, ka);
            (_[0] = 1 / 0), (_[1] = 1 / 0), (x[0] = -1 / 0), (x[1] = -1 / 0);
            for (var M = 0; M < S; M++) {
              var T = b(c, d, g, m, ka[M]);
              (_[0] = xa(T, _[0])), (x[0] = wa(T, x[0]));
            }
            for (S = w(p, f, y, v, Aa), M = 0; M < S; M++) {
              var C = b(p, f, y, v, Aa[M]);
              (_[1] = xa(C, _[1])), (x[1] = wa(C, x[1]));
            }
            (_[0] = xa(c, _[0])),
              (x[0] = wa(c, x[0])),
              (_[0] = xa(m, _[0])),
              (x[0] = wa(m, x[0])),
              (_[1] = xa(p, _[1])),
              (x[1] = wa(p, x[1])),
              (_[1] = xa(v, _[1])),
              (x[1] = wa(v, x[1])),
              (r = i[l++]),
              (o = i[l++]);
            break;
          case U.Q:
            (w = r),
              (t = o),
              (L = i[l++]),
              (D = i[l++]),
              (P = i[l]),
              (e = i[l + 1]),
              (A = Na),
              (O = Ea),
              (n = k = n = I = void 0),
              (I = Gn),
              (n = wa(xa((k = Un)(w, L, P), 1), 0)),
              (k = wa(xa(k(t, D, e), 1), 0)),
              (L = I(w, L, P, n)),
              (n = I(t, D, e, k)),
              (A[0] = xa(w, P, L)),
              (A[1] = xa(t, e, n)),
              (O[0] = wa(w, P, L)),
              (O[1] = wa(t, e, n)),
              (r = i[l++]),
              (o = i[l++]);
            break;
          case U.A:
            var I = i[l++],
              D = i[l++],
              k = i[l++],
              A = i[l++],
              P = i[l++],
              L = i[l++] + P,
              O = ((l += 1), !i[l++]);
            h && ((a = Fa(P) * k + I), (s = Va(P) * A + D)),
              (function (t, e, n, i, r, o, a, s, l) {
                var u = ne,
                  h = ie,
                  c = Math.abs(r - o);
                if (c % Ma < 1e-4 && 1e-4 < c)
                  return (
                    (s[0] = t - n),
                    (s[1] = e - i),
                    (l[0] = t + n),
                    (l[1] = e + i)
                  );
                (Ta[0] = Sa(r) * n + t),
                  (Ta[1] = ba(r) * i + e),
                  (Ca[0] = Sa(o) * n + t),
                  (Ca[1] = ba(o) * i + e),
                  u(s, Ta, Ca),
                  h(l, Ta, Ca),
                  (r %= Ma) < 0 && (r += Ma),
                  (o %= Ma) < 0 && (o += Ma),
                  o < r && !a ? (o += Ma) : r < o && a && (r += Ma),
                  a && ((c = o), (o = r), (r = c));
                for (var p = 0; p < o; p += Math.PI / 2)
                  r < p &&
                    ((Ia[0] = Sa(p) * n + t),
                    (Ia[1] = ba(p) * i + e),
                    u(s, Ia, s),
                    h(l, Ia, l));
              })(I, D, k, A, P, L, O, Na, Ea),
              (r = Fa(L) * k + I),
              (o = Va(L) * A + D);
            break;
          case U.R:
            Da(
              (a = r = i[l++]),
              (s = o = i[l++]),
              a + i[l++],
              s + i[l++],
              Na,
              Ea
            );
            break;
          case U.Z:
            (r = a), (o = s);
        }
        ne(Oa, Oa, Na), ie(Ra, Ra, Ea);
      }
      return (
        0 === l && (Oa[0] = Oa[1] = Ra[0] = Ra[1] = 0),
        new W(Oa[0], Oa[1], Ra[0] - Oa[0], Ra[1] - Oa[1])
      );
    }),
    (o.prototype._calculateLength = function () {
      var t = this.data,
        e = this._len,
        n = this._ux,
        i = this._uy,
        r = 0,
        o = 0,
        a = 0,
        s = 0;
      this._pathSegLen || (this._pathSegLen = []);
      for (var l = this._pathSegLen, u = 0, h = 0, c = 0; c < e; ) {
        var p = t[c++],
          d = 1 === c,
          f = (d && ((a = r = t[c]), (s = o = t[c + 1])), -1);
        switch (p) {
          case U.M:
            (r = a = t[c++]), (o = s = t[c++]);
            break;
          case U.L:
            var g = t[c++],
              y = (_ = t[c++]) - o;
            (Ha((I = g - r)) > n || Ha(y) > i || c === e - 1) &&
              ((f = Math.sqrt(I * I + y * y)), (r = g), (o = _));
            break;
          case U.C:
            var m = t[c++],
              v = t[c++],
              _ = ((g = t[c++]), t[c++]),
              x = t[c++],
              w = t[c++],
              f = (function (t, e, n, i, r, o, a, s, l) {
                for (var u = t, h = e, c = 0, p = 1 / l, d = 1; d <= l; d++) {
                  var f = d * p,
                    g = En(t, n, r, a, f),
                    f = En(e, i, o, s, f),
                    y = g - u,
                    m = f - h;
                  (c += Math.sqrt(y * y + m * m)), (u = g), (h = f);
                }
                return c;
              })(r, o, m, v, g, _, x, w, 10),
              r = x,
              o = w;
            break;
          case U.Q:
            (f = (function (t, e, n, i, r, o, a) {
              for (var s = t, l = e, u = 0, h = 1 / a, c = 1; c <= a; c++) {
                var p = c * h,
                  d = Gn(t, n, r, p),
                  p = Gn(e, i, o, p),
                  f = d - s,
                  g = p - l;
                (u += Math.sqrt(f * f + g * g)), (s = d), (l = p);
              }
              return u;
            })(
              r,
              o,
              (m = t[c++]),
              (v = t[c++]),
              (g = t[c++]),
              (_ = t[c++]),
              10
            )),
              (r = g),
              (o = _);
            break;
          case U.A:
            var x = t[c++],
              w = t[c++],
              b = t[c++],
              S = t[c++],
              M = t[c++],
              T = t[c++],
              C = T + M;
            (c += 1),
              t[c++],
              d && ((a = Fa(M) * b + x), (s = Va(M) * S + w)),
              (f = Ba(b, S) * za(Wa, Math.abs(T))),
              (r = Fa(C) * b + x),
              (o = Va(C) * S + w);
            break;
          case U.R:
            (a = r = t[c++]), (s = o = t[c++]), (f = 2 * t[c++] + 2 * t[c++]);
            break;
          case U.Z:
            var I = a - r,
              y = s - o;
            (f = Math.sqrt(I * I + y * y)), (r = a), (o = s);
        }
        0 <= f && (u += l[h++] = f);
      }
      return (this._pathLen = u);
    }),
    (o.prototype.rebuildPath = function (t, e) {
      var n,
        i,
        r,
        o,
        a,
        s,
        l,
        u,
        h = this.data,
        E = this._ux,
        z = this._uy,
        B = this._len,
        c = e < 1,
        p = 0,
        d = 0,
        f = 0;
      if (
        !c ||
        (this._pathSegLen || this._calculateLength(),
        (a = this._pathSegLen),
        (s = e * this._pathLen))
      )
        t: for (var g = 0; g < B; ) {
          var y,
            m = h[g++],
            F = 1 === g;
          switch (
            (F && ((n = r = h[g]), (i = o = h[g + 1])),
            m !== U.L && 0 < f && (t.lineTo(l, u), (f = 0)),
            m)
          ) {
            case U.M:
              (n = r = h[g++]), (i = o = h[g++]), t.moveTo(r, o);
              break;
            case U.L:
              var v = h[g++],
                _ = h[g++],
                x = Ha(v - r),
                w = Ha(_ - o);
              if (E < x || z < w) {
                if (c) {
                  if (p + (y = a[d++]) > s) {
                    var b = (s - p) / y;
                    t.lineTo(r * (1 - b) + v * b, o * (1 - b) + _ * b);
                    break t;
                  }
                  p += y;
                }
                t.lineTo(v, _), (r = v), (o = _), (f = 0);
              } else {
                x = x * x + w * w;
                f < x && ((l = v), (u = _), (f = x));
              }
              break;
            case U.C:
              var S = h[g++],
                M = h[g++],
                T = h[g++],
                C = h[g++],
                w = h[g++],
                x = h[g++];
              if (c) {
                if (p + (y = a[d++]) > s) {
                  Vn(r, S, T, w, (b = (s - p) / y), Pa),
                    Vn(o, M, C, x, b, La),
                    t.bezierCurveTo(Pa[1], La[1], Pa[2], La[2], Pa[3], La[3]);
                  break t;
                }
                p += y;
              }
              t.bezierCurveTo(S, M, T, C, w, x), (r = w), (o = x);
              break;
            case U.Q:
              if (((S = h[g++]), (M = h[g++]), (T = h[g++]), (C = h[g++]), c)) {
                if (p + (y = a[d++]) > s) {
                  Xn(r, S, T, (b = (s - p) / y), Pa),
                    Xn(o, M, C, b, La),
                    t.quadraticCurveTo(Pa[1], La[1], Pa[2], La[2]);
                  break t;
                }
                p += y;
              }
              t.quadraticCurveTo(S, M, T, C), (r = T), (o = C);
              break;
            case U.A:
              var I = h[g++],
                D = h[g++],
                k = h[g++],
                A = h[g++],
                P = h[g++],
                L = h[g++],
                O = h[g++],
                V = !h[g++],
                H = A < k ? k : A,
                R = 0.001 < Ha(k - A),
                N = P + L,
                G = !1;
              if (
                (c &&
                  (p + (y = a[d++]) > s &&
                    ((N = P + (L * (s - p)) / y), (G = !0)),
                  (p += y)),
                R && t.ellipse
                  ? t.ellipse(I, D, k, A, O, P, N, V)
                  : t.arc(I, D, H, P, N, V),
                G)
              )
                break t;
              F && ((n = Fa(P) * k + I), (i = Va(P) * A + D)),
                (r = Fa(N) * k + I),
                (o = Va(N) * A + D);
              break;
            case U.R:
              (n = r = h[g]), (i = o = h[g + 1]), (v = h[g++]), (_ = h[g++]);
              (L = h[g++]), (R = h[g++]);
              if (c) {
                if (p + (y = a[d++]) > s) {
                  O = s - p;
                  t.moveTo(v, _),
                    t.lineTo(v + za(O, L), _),
                    0 < (O -= L) && t.lineTo(v + L, _ + za(O, R)),
                    0 < (O -= R) && t.lineTo(v + Ba(L - O, 0), _ + R),
                    0 < (O -= L) && t.lineTo(v, _ + Ba(R - O, 0));
                  break t;
                }
                p += y;
              }
              t.rect(v, _, L, R);
              break;
            case U.Z:
              if (c) {
                if (p + (y = a[d++]) > s) {
                  t.lineTo(
                    r * (1 - (b = (s - p) / y)) + n * b,
                    o * (1 - b) + i * b
                  );
                  break t;
                }
                p += y;
              }
              t.closePath(), (r = n), (o = i);
          }
        }
    }),
    (o.prototype.clone = function () {
      var t = new o(),
        e = this.data;
      return (
        (t.data = e.slice ? e.slice() : Array.prototype.slice.call(e)),
        (t._len = this._len),
        t
      );
    }),
    (o.CMD = U),
    (o.initDefaultProps =
      (((uu = o.prototype)._saveData = !0),
      (uu._ux = 0),
      (uu._uy = 0),
      (uu._pendingPtDist = 0),
      void (uu._version = 0)));
  var qa = o;
  function o(t) {
    (this.dpr = 1),
      (this._xi = 0),
      (this._yi = 0),
      (this._x0 = 0),
      (this._y0 = 0),
      (this._len = 0),
      t && (this._saveData = !1),
      this._saveData && (this.data = []);
  }
  function Za(t, e, n, i, r, o, a) {
    var s;
    if (0 !== r)
      return (
        (s = 0),
        !(
          (e + (r = r) < a && i + r < a) ||
          (a < e - r && a < i - r) ||
          (t + r < o && n + r < o) ||
          (o < t - r && o < n - r)
        ) &&
          (t === n
            ? Math.abs(o - t) <= r / 2
            : ((o =
                (s = (e - i) / (t - n)) * o - a + (t * i - n * e) / (t - n)) *
                o) /
                (s * s + 1) <=
              ((r / 2) * r) / 2)
      );
  }
  var ja = 2 * Math.PI;
  function Ka(t) {
    return (t %= ja) < 0 && (t += ja), t;
  }
  var $a = 2 * Math.PI;
  function Qa(t, e, n, i, r, o) {
    return (e < o && i < o) || (o < e && o < i) || i === e
      ? 0
      : (n = (o = (o - e) / (i - e)) * (n - t) + t) === r
      ? 1 / 0
      : r < n
      ? 1 != o && 0 != o
        ? i < e
          ? 1
          : -1
        : i < e
        ? 0.5
        : -0.5
      : 0;
  }
  var Ja = qa.CMD,
    ts = 2 * Math.PI,
    es = 1e-4;
  var ns = [-1, -1, -1],
    is = [-1, -1];
  function rs(t, e, n, i, r, o, a, s, l, u) {
    if (
      (e < u && i < u && o < u && s < u) ||
      (u < e && u < i && u < o && u < s)
    )
      return 0;
    var h = Bn(e, i, o, s, u, ns);
    if (0 === h) return 0;
    for (var c, p = 0, d = -1, f = void 0, g = void 0, y = 0; y < h; y++) {
      var m = ns[y],
        v = 0 === m || 1 === m ? 0.5 : 1;
      En(t, n, r, a, m) < l ||
        (d < 0 &&
          ((d = Fn(e, i, o, s, is)),
          is[1] < is[0] &&
            1 < d &&
            ((c = void 0), (c = is[0]), (is[0] = is[1]), (is[1] = c)),
          (f = En(e, i, o, s, is[0])),
          1 < d) &&
          (g = En(e, i, o, s, is[1])),
        2 === d
          ? m < is[0]
            ? (p += f < e ? v : -v)
            : m < is[1]
            ? (p += g < f ? v : -v)
            : (p += s < g ? v : -v)
          : m < is[0]
          ? (p += f < e ? v : -v)
          : (p += s < f ? v : -v));
    }
    return p;
  }
  function os(t, e, n, i, r, o, a, s) {
    if ((e < s && i < s && o < s) || (s < e && s < i && s < o)) return 0;
    (c = ns),
      (h = (l = e) - 2 * (u = i) + (h = o)),
      (u = 2 * (u - l)),
      (l -= s = s),
      (s = 0),
      Rn(h)
        ? Nn(u) && 0 <= (p = -l / u) && p <= 1 && (c[s++] = p)
        : Rn((l = u * u - 4 * h * l))
        ? 0 <= (p = -u / (2 * h)) && p <= 1 && (c[s++] = p)
        : 0 < l &&
          ((d = (-u - (l = In(l))) / (2 * h)),
          0 <= (p = (-u + l) / (2 * h)) && p <= 1 && (c[s++] = p),
          0 <= d) &&
          d <= 1 &&
          (c[s++] = d);
    var l,
      u,
      h,
      c,
      p,
      d,
      f = s;
    if (0 === f) return 0;
    var g = Un(e, i, o);
    if (0 <= g && g <= 1) {
      for (var y = 0, m = Gn(e, i, o, g), v = 0; v < f; v++) {
        var _ = 0 === ns[v] || 1 === ns[v] ? 0.5 : 1;
        Gn(t, n, r, ns[v]) < a ||
          (ns[v] < g ? (y += m < e ? _ : -_) : (y += o < m ? _ : -_));
      }
      return y;
    }
    return (
      (_ = 0 === ns[0] || 1 === ns[0] ? 0.5 : 1),
      Gn(t, n, r, ns[0]) < a ? 0 : o < e ? _ : -_
    );
  }
  function as(t, e, n, i, r) {
    for (
      var o, a = t.data, s = t.len(), l = 0, u = 0, h = 0, c = 0, p = 0, d = 0;
      d < s;

    ) {
      var f = a[d++],
        g = 1 === d;
      switch (
        (f === Ja.M && 1 < d && (n || (l += Qa(u, h, c, p, i, r))),
        g && ((c = u = a[d]), (p = h = a[d + 1])),
        f)
      ) {
        case Ja.M:
          (u = c = a[d++]), (h = p = a[d++]);
          break;
        case Ja.L:
          if (n) {
            if (Za(u, h, a[d], a[d + 1], e, i, r)) return !0;
          } else l += Qa(u, h, a[d], a[d + 1], i, r) || 0;
          (u = a[d++]), (h = a[d++]);
          break;
        case Ja.C:
          if (n) {
            if (
              (function (t, e, n, i, r, o, a, s, l, u, h) {
                if (0 !== l)
                  return (
                    !(
                      (e + (l = l) < h &&
                        i + l < h &&
                        o + l < h &&
                        s + l < h) ||
                      (h < e - l && h < i - l && h < o - l && h < s - l) ||
                      (t + l < u && n + l < u && r + l < u && a + l < u) ||
                      (u < t - l && u < n - l && u < r - l && u < a - l)
                    ) && Hn(t, e, n, i, r, o, a, s, u, h, null) <= l / 2
                  );
              })(u, h, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], e, i, r)
            )
              return !0;
          } else
            l +=
              rs(u, h, a[d++], a[d++], a[d++], a[d++], a[d], a[d + 1], i, r) ||
              0;
          (u = a[d++]), (h = a[d++]);
          break;
        case Ja.Q:
          if (n) {
            if (
              (function (t, e, n, i, r, o, a, s, l) {
                if (0 !== a)
                  return (
                    !(
                      (e + (a = a) < l && i + a < l && o + a < l) ||
                      (l < e - a && l < i - a && l < o - a) ||
                      (t + a < s && n + a < s && r + a < s) ||
                      (s < t - a && s < n - a && s < r - a)
                    ) && Yn(t, e, n, i, r, o, s, l, null) <= a / 2
                  );
              })(u, h, a[d++], a[d++], a[d], a[d + 1], e, i, r)
            )
              return !0;
          } else l += os(u, h, a[d++], a[d++], a[d], a[d + 1], i, r) || 0;
          (u = a[d++]), (h = a[d++]);
          break;
        case Ja.A:
          var y = a[d++],
            m = a[d++],
            v = a[d++],
            _ = a[d++],
            x = a[d++],
            w = a[d++],
            b = ((d += 1), !!(1 - a[d++])),
            S = Math.cos(x) * v + y,
            M = Math.sin(x) * _ + m,
            T =
              (g ? ((c = S), (p = M)) : (l += Qa(u, h, S, M, i, r)),
              ((i - y) * _) / v + y);
          if (n) {
            if (
              (function (t, e, n, i, r, o, a, s, l) {
                if (0 !== a)
                  return (
                    (a = a),
                    (s -= t),
                    (l -= e),
                    !(n < (t = Math.sqrt(s * s + l * l)) - a || t + a < n) &&
                      (Math.abs(i - r) % $a < 1e-4 ||
                        ((r = o
                          ? ((e = i), (i = Ka(r)), Ka(e))
                          : ((i = Ka(i)), Ka(r))) < i && (r += $a),
                        (t = Math.atan2(l, s)) < 0 && (t += $a),
                        i <= t && t <= r) ||
                        (i <= t + $a && t + $a <= r))
                  );
              })(y, m, _, x, x + w, b, e, T, r)
            )
              return !0;
          } else
            l += (function (t, e, n, i, r, o, a, s) {
              if ((s -= e) > n || s < -n) return 0;
              var e = Math.sqrt(n * n - s * s);
              if (((ns[0] = -e), (ns[1] = e), (n = Math.abs(i - r)) < 1e-4))
                return 0;
              if (ts - 1e-4 <= n)
                return (
                  (r = ts),
                  (h = o ? 1 : -1),
                  a >= ns[(i = 0)] + t && a <= ns[1] + t ? h : 0
                );
              r < i && ((e = i), (i = r), (r = e)),
                i < 0 && ((i += ts), (r += ts));
              for (var l = 0, u = 0; u < 2; u++) {
                var h,
                  c = ns[u];
                a < c + t &&
                  ((h = o ? 1 : -1),
                  (i <= (c = (c = Math.atan2(s, c)) < 0 ? ts + c : c) &&
                    c <= r) ||
                    (i <= c + ts && c + ts <= r)) &&
                  (l += h = c > Math.PI / 2 && c < 1.5 * Math.PI ? -h : h);
              }
              return l;
            })(y, m, _, x, x + w, b, T, r);
          (u = Math.cos(x + w) * v + y), (h = Math.sin(x + w) * _ + m);
          break;
        case Ja.R:
          if (
            ((c = u = a[d++]),
            (p = h = a[d++]),
            (S = c + a[d++]),
            (M = p + a[d++]),
            n)
          ) {
            if (
              Za(c, p, S, p, e, i, r) ||
              Za(S, p, S, M, e, i, r) ||
              Za(S, M, c, M, e, i, r) ||
              Za(c, M, c, p, e, i, r)
            )
              return !0;
          } else l = (l += Qa(S, p, S, M, i, r)) + Qa(c, M, c, p, i, r);
          break;
        case Ja.Z:
          if (n) {
            if (Za(u, h, c, p, e, i, r)) return !0;
          } else l += Qa(u, h, c, p, i, r);
          (u = c), (h = p);
      }
    }
    return (
      n ||
        ((t = h), (o = p), Math.abs(t - o) < es) ||
        (l += Qa(u, h, c, p, i, r) || 0),
      0 !== l
    );
  }
  var ss,
    ls = B(
      {
        fill: "#000",
        stroke: null,
        strokePercent: 1,
        fillOpacity: 1,
        strokeOpacity: 1,
        lineDashOffset: 0,
        lineWidth: 1,
        lineCap: "butt",
        miterLimit: 10,
        strokeNoScale: !1,
        strokeFirst: !1,
      },
      fa
    ),
    us = {
      style: B(
        {
          fill: !0,
          stroke: !0,
          strokePercent: !0,
          fillOpacity: !0,
          strokeOpacity: !0,
          lineDashOffset: !0,
          lineWidth: !0,
          miterLimit: !0,
        },
        ga.style
      ),
    },
    hs = mr.concat(["invisible", "culling", "z", "z2", "zlevel", "parent"]),
    j =
      (u(a, (ss = n)),
      (a.prototype.update = function () {
        var e = this,
          t = (ss.prototype.update.call(this), this.style);
        if (t.decal) {
          var n,
            i = (this._decalEl = this._decalEl || new a()),
            r =
              (i.buildPath === a.prototype.buildPath &&
                (i.buildPath = function (t) {
                  e.buildPath(t, e.shape);
                }),
              (i.silent = !0),
              i.style);
          for (n in t) r[n] !== t[n] && (r[n] = t[n]);
          (r.fill = t.fill ? t.decal : null),
            (r.decal = null),
            (r.shadowColor = null),
            t.strokeFirst && (r.stroke = null);
          for (var o = 0; o < hs.length; ++o) i[hs[o]] = this[hs[o]];
          i.__dirty |= mn;
        } else this._decalEl && (this._decalEl = null);
      }),
      (a.prototype.getDecalElement = function () {
        return this._decalEl;
      }),
      (a.prototype._init = function (t) {
        var e = ht(t),
          n = ((this.shape = this.getDefaultShape()), this.getDefaultStyle());
        n && this.useStyle(n);
        for (var i = 0; i < e.length; i++) {
          var r = e[i],
            o = t[r];
          "style" === r
            ? this.style
              ? L(this.style, o)
              : this.useStyle(o)
            : "shape" === r
            ? L(this.shape, o)
            : ss.prototype.attrKV.call(this, r, o);
        }
        this.style || this.useStyle({});
      }),
      (a.prototype.getDefaultStyle = function () {
        return null;
      }),
      (a.prototype.getDefaultShape = function () {
        return {};
      }),
      (a.prototype.canBeInsideText = function () {
        return this.hasFill();
      }),
      (a.prototype.getInsideTextFill = function () {
        var t,
          e = this.style.fill;
        if ("none" !== e) {
          if (H(e)) return 0.5 < (t = xi(e, 0)) ? sr : 0.2 < t ? "#eee" : lr;
          if (e) return lr;
        }
        return sr;
      }),
      (a.prototype.getInsideTextStroke = function (t) {
        var e = this.style.fill;
        if (H(e)) {
          var n = this.__zr;
          if (!(!n || !n.isDarkMode()) == xi(t, 0) < 0.4) return e;
        }
      }),
      (a.prototype.buildPath = function (t, e, n) {}),
      (a.prototype.pathUpdated = function () {
        this.__dirty &= ~vn;
      }),
      (a.prototype.getUpdatedPathProxy = function (t) {
        return (
          this.path || this.createPathProxy(),
          this.path.beginPath(),
          this.buildPath(this.path, this.shape, t),
          this.path
        );
      }),
      (a.prototype.createPathProxy = function () {
        this.path = new qa(!1);
      }),
      (a.prototype.hasStroke = function () {
        var t = this.style,
          e = t.stroke;
        return !(null == e || "none" === e || !(0 < t.lineWidth));
      }),
      (a.prototype.hasFill = function () {
        var t = this.style.fill;
        return null != t && "none" !== t;
      }),
      (a.prototype.getBoundingRect = function () {
        var t,
          e,
          n = this._rect,
          i = this.style,
          r = !n;
        return (
          r &&
            ((t = !1),
            this.path || ((t = !0), this.createPathProxy()),
            (e = this.path),
            (t || this.__dirty & vn) &&
              (e.beginPath(),
              this.buildPath(e, this.shape, !1),
              this.pathUpdated()),
            (n = e.getBoundingRect())),
          (this._rect = n),
          this.hasStroke() && this.path && 0 < this.path.len()
            ? ((t = this._rectStroke || (this._rectStroke = n.clone())),
              (this.__dirty || r) &&
                (t.copy(n),
                (e = i.strokeNoScale ? this.getLineScale() : 1),
                (r = i.lineWidth),
                this.hasFill() ||
                  ((i = this.strokeContainThreshold),
                  (r = Math.max(r, null == i ? 4 : i))),
                1e-10 < e) &&
                ((t.width += r / e),
                (t.height += r / e),
                (t.x -= r / e / 2),
                (t.y -= r / e / 2)),
              t)
            : n
        );
      }),
      (a.prototype.contain = function (t, e) {
        var n = this.transformCoordToLocal(t, e),
          i = this.getBoundingRect(),
          r = this.style;
        if (((t = n[0]), (e = n[1]), i.contain(t, e))) {
          n = this.path;
          if (this.hasStroke()) {
            (i = r.lineWidth), (r = r.strokeNoScale ? this.getLineScale() : 1);
            if (
              1e-10 < r &&
              (this.hasFill() || (i = Math.max(i, this.strokeContainThreshold)),
              as(n, i / r, !0, t, e))
            )
              return !0;
          }
          if (this.hasFill()) return as(n, 0, !1, t, e);
        }
        return !1;
      }),
      (a.prototype.dirtyShape = function () {
        (this.__dirty |= vn),
          this._rect && (this._rect = null),
          this._decalEl && this._decalEl.dirtyShape(),
          this.markRedraw();
      }),
      (a.prototype.dirty = function () {
        this.dirtyStyle(), this.dirtyShape();
      }),
      (a.prototype.animateShape = function (t) {
        return this.animate("shape", t);
      }),
      (a.prototype.updateDuringAnimation = function (t) {
        "style" === t
          ? this.dirtyStyle()
          : "shape" === t
          ? this.dirtyShape()
          : this.markRedraw();
      }),
      (a.prototype.attrKV = function (t, e) {
        "shape" === t ? this.setShape(e) : ss.prototype.attrKV.call(this, t, e);
      }),
      (a.prototype.setShape = function (t, e) {
        var n = (n = this.shape) || (this.shape = {});
        return (
          "string" == typeof t ? (n[t] = e) : L(n, t), this.dirtyShape(), this
        );
      }),
      (a.prototype.shapeChanged = function () {
        return !!(this.__dirty & vn);
      }),
      (a.prototype.createStyle = function (t) {
        return Et(ls, t);
      }),
      (a.prototype._innerSaveToNormal = function (t) {
        ss.prototype._innerSaveToNormal.call(this, t);
        var e = this._normalState;
        t.shape && !e.shape && (e.shape = L({}, this.shape));
      }),
      (a.prototype._applyStateObj = function (t, e, n, i, r, o) {
        ss.prototype._applyStateObj.call(this, t, e, n, i, r, o);
        var a,
          s = !(e && i);
        if (
          (e && e.shape
            ? r
              ? i
                ? (a = e.shape)
                : ((a = L({}, n.shape)), L(a, e.shape))
              : ((a = L({}, (i ? this : n).shape)), L(a, e.shape))
            : s && (a = n.shape),
          a)
        )
          if (r) {
            this.shape = L({}, this.shape);
            for (var l = {}, u = ht(a), h = 0; h < u.length; h++) {
              var c = u[h];
              "object" == typeof a[c] ? (this.shape[c] = a[c]) : (l[c] = a[c]);
            }
            this._transitionState(t, { shape: l }, o);
          } else (this.shape = a), this.dirtyShape();
      }),
      (a.prototype._mergeStates = function (t) {
        for (
          var e, n = ss.prototype._mergeStates.call(this, t), i = 0;
          i < t.length;
          i++
        ) {
          var r = t[i];
          r.shape && this._mergeStyle((e = e || {}), r.shape);
        }
        return e && (n.shape = e), n;
      }),
      (a.prototype.getAnimationStyleProps = function () {
        return us;
      }),
      (a.prototype.isZeroArea = function () {
        return !1;
      }),
      (a.extend = function (n) {
        u(r, (i = a)),
          (r.prototype.getDefaultStyle = function () {
            return y(n.style);
          }),
          (r.prototype.getDefaultShape = function () {
            return y(n.shape);
          });
        var i,
          t,
          e = r;
        function r(t) {
          var e = i.call(this, t) || this;
          return n.init && n.init.call(e, t), e;
        }
        for (t in n) "function" == typeof n[t] && (e.prototype[t] = n[t]);
        return e;
      }),
      (a.initDefaultProps =
        (((uu = a.prototype).type = "path"),
        (uu.strokeContainThreshold = 5),
        (uu.segmentIgnoreThreshold = 0),
        (uu.subPixelOptimize = !1),
        (uu.autoBatch = !1),
        void (uu.__dirty = 2 | mn | vn))),
      a);
  function a(t) {
    return ss.call(this, t) || this;
  }
  var cs,
    ps = B(
      {
        strokeFirst: !0,
        font: K,
        x: 0,
        y: 0,
        textAlign: "left",
        textBaseline: "top",
        miterLimit: 2,
      },
      ls
    ),
    ds =
      (u(fs, (cs = n)),
      (fs.prototype.hasStroke = function () {
        var t = this.style,
          e = t.stroke;
        return null != e && "none" !== e && 0 < t.lineWidth;
      }),
      (fs.prototype.hasFill = function () {
        var t = this.style.fill;
        return null != t && "none" !== t;
      }),
      (fs.prototype.createStyle = function (t) {
        return Et(ps, t);
      }),
      (fs.prototype.setBoundingRect = function (t) {
        this._rect = t;
      }),
      (fs.prototype.getBoundingRect = function () {
        var t,
          e = this.style;
        return (
          this._rect ||
            (null != (t = e.text) ? (t += "") : (t = ""),
            ((t = wr(t, e.font, e.textAlign, e.textBaseline)).x += e.x || 0),
            (t.y += e.y || 0),
            this.hasStroke() &&
              ((e = e.lineWidth),
              (t.x -= e / 2),
              (t.y -= e / 2),
              (t.width += e),
              (t.height += e)),
            (this._rect = t)),
          this._rect
        );
      }),
      (fs.initDefaultProps = void (fs.prototype.dirtyRectTolerance = 10)),
      fs);
  function fs() {
    return (null !== cs && cs.apply(this, arguments)) || this;
  }
  ds.prototype.type = "tspan";
  var gs = B({ x: 0, y: 0 }, fa),
    ys = {
      style: B(
        {
          x: !0,
          y: !0,
          width: !0,
          height: !0,
          sx: !0,
          sy: !0,
          sWidth: !0,
          sHeight: !0,
        },
        ga.style
      ),
    };
  u(_s, (ms = n)),
    (_s.prototype.createStyle = function (t) {
      return Et(gs, t);
    }),
    (_s.prototype._getSize = function (t) {
      var e,
        n = this.style,
        i = n[t];
      return null != i
        ? i
        : (i =
            (i = n.image) && "string" != typeof i && i.width && i.height
              ? n.image
              : this.__image)
        ? null == (e = n[(n = "width" === t ? "height" : "width")])
          ? i[t]
          : (i[t] / i[n]) * e
        : 0;
    }),
    (_s.prototype.getWidth = function () {
      return this._getSize("width");
    }),
    (_s.prototype.getHeight = function () {
      return this._getSize("height");
    }),
    (_s.prototype.getAnimationStyleProps = function () {
      return ys;
    }),
    (_s.prototype.getBoundingRect = function () {
      var t = this.style;
      return (
        this._rect ||
          (this._rect = new W(
            t.x || 0,
            t.y || 0,
            this.getWidth(),
            this.getHeight()
          )),
        this._rect
      );
    });
  var ms,
    vs = _s;
  function _s() {
    return (null !== ms && ms.apply(this, arguments)) || this;
  }
  vs.prototype.type = "image";
  var xs = Math.round;
  function ws(t, e, n) {
    var i, r, o;
    if (e)
      return (
        (i = e.x1),
        (r = e.x2),
        (o = e.y1),
        (e = e.y2),
        (t.x1 = i),
        (t.x2 = r),
        (t.y1 = o),
        (t.y2 = e),
        (n = n && n.lineWidth) &&
          (xs(2 * i) === xs(2 * r) && (t.x1 = t.x2 = Ss(i, n, !0)),
          xs(2 * o) === xs(2 * e)) &&
          (t.y1 = t.y2 = Ss(o, n, !0)),
        t
      );
  }
  function bs(t, e, n) {
    var i, r, o;
    if (e)
      return (
        (i = e.x),
        (r = e.y),
        (o = e.width),
        (e = e.height),
        (t.x = i),
        (t.y = r),
        (t.width = o),
        (t.height = e),
        (n = n && n.lineWidth) &&
          ((t.x = Ss(i, n, !0)),
          (t.y = Ss(r, n, !0)),
          (t.width = Math.max(Ss(i + o, n, !1) - t.x, 0 === o ? 0 : 1)),
          (t.height = Math.max(Ss(r + e, n, !1) - t.y, 0 === e ? 0 : 1))),
        t
      );
  }
  function Ss(t, e, n) {
    var i;
    return e
      ? ((i = xs(2 * t)) + xs(e)) % 2 == 0
        ? i / 2
        : (i + (n ? 1 : -1)) / 2
      : t;
  }
  function Ms() {
    (this.x = 0), (this.y = 0), (this.width = 0), (this.height = 0);
  }
  var Ts,
    Cs = {},
    Is =
      (u(Ds, (Ts = j)),
      (Ds.prototype.getDefaultShape = function () {
        return new Ms();
      }),
      (Ds.prototype.buildPath = function (t, e) {
        var n, i, r, o, a, s, l, u, h, c, p, d, f, g;
        this.subPixelOptimize
          ? ((n = (a = bs(Cs, e, this.style)).x),
            (i = a.y),
            (r = a.width),
            (o = a.height),
            (a.r = e.r),
            (e = a))
          : ((n = e.x), (i = e.y), (r = e.width), (o = e.height)),
          e.r
            ? ((a = t),
              (p = (e = e).x),
              (d = e.y),
              (f = e.width),
              (g = e.height),
              (e = e.r),
              f < 0 && ((p += f), (f = -f)),
              g < 0 && ((d += g), (g = -g)),
              "number" == typeof e
                ? (s = l = u = h = e)
                : e instanceof Array
                ? 1 === e.length
                  ? (s = l = u = h = e[0])
                  : 2 === e.length
                  ? ((s = u = e[0]), (l = h = e[1]))
                  : 3 === e.length
                  ? ((s = e[0]), (l = h = e[1]), (u = e[2]))
                  : ((s = e[0]), (l = e[1]), (u = e[2]), (h = e[3]))
                : (s = l = u = h = 0),
              f < s + l && ((s *= f / (c = s + l)), (l *= f / c)),
              f < u + h && ((u *= f / (c = u + h)), (h *= f / c)),
              g < l + u && ((l *= g / (c = l + u)), (u *= g / c)),
              g < s + h && ((s *= g / (c = s + h)), (h *= g / c)),
              a.moveTo(p + s, d),
              a.lineTo(p + f - l, d),
              0 !== l && a.arc(p + f - l, d + l, l, -Math.PI / 2, 0),
              a.lineTo(p + f, d + g - u),
              0 !== u && a.arc(p + f - u, d + g - u, u, 0, Math.PI / 2),
              a.lineTo(p + h, d + g),
              0 !== h && a.arc(p + h, d + g - h, h, Math.PI / 2, Math.PI),
              a.lineTo(p, d + s),
              0 !== s && a.arc(p + s, d + s, s, Math.PI, 1.5 * Math.PI))
            : t.rect(n, i, r, o);
      }),
      (Ds.prototype.isZeroArea = function () {
        return !this.shape.width || !this.shape.height;
      }),
      Ds);
  function Ds(t) {
    return Ts.call(this, t) || this;
  }
  Is.prototype.type = "rect";
  var ks,
    As = { fill: "#000" },
    Ps = {
      style: B(
        {
          fill: !0,
          stroke: !0,
          fillOpacity: !0,
          strokeOpacity: !0,
          lineWidth: !0,
          fontSize: !0,
          lineHeight: !0,
          width: !0,
          height: !0,
          textShadowColor: !0,
          textShadowBlur: !0,
          textShadowOffsetX: !0,
          textShadowOffsetY: !0,
          backgroundColor: !0,
          padding: !0,
          borderColor: !0,
          borderWidth: !0,
          borderRadius: !0,
        },
        ga.style
      ),
    },
    Ls =
      (u(Es, (ks = n)),
      (Es.prototype.childrenRef = function () {
        return this._children;
      }),
      (Es.prototype.update = function () {
        ks.prototype.update.call(this),
          this.styleChanged() && this._updateSubTexts();
        for (var t = 0; t < this._children.length; t++) {
          var e = this._children[t];
          (e.zlevel = this.zlevel),
            (e.z = this.z),
            (e.z2 = this.z2),
            (e.culling = this.culling),
            (e.cursor = this.cursor),
            (e.invisible = this.invisible);
        }
      }),
      (Es.prototype.updateTransform = function () {
        var t = this.innerTransformable;
        t
          ? (t.updateTransform(), t.transform && (this.transform = t.transform))
          : ks.prototype.updateTransform.call(this);
      }),
      (Es.prototype.getLocalTransform = function (t) {
        var e = this.innerTransformable;
        return e
          ? e.getLocalTransform(t)
          : ks.prototype.getLocalTransform.call(this, t);
      }),
      (Es.prototype.getComputedTransform = function () {
        return (
          this.__hostTarget &&
            (this.__hostTarget.getComputedTransform(),
            this.__hostTarget.updateInnerText(!0)),
          ks.prototype.getComputedTransform.call(this)
        );
      }),
      (Es.prototype._updateSubTexts = function () {
        var t;
        (this._childCursor = 0),
          Bs((t = this.style)),
          E(t.rich, Bs),
          this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(),
          (this._children.length = this._childCursor),
          this.styleUpdated();
      }),
      (Es.prototype.addSelfToZr = function (t) {
        ks.prototype.addSelfToZr.call(this, t);
        for (var e = 0; e < this._children.length; e++)
          this._children[e].__zr = t;
      }),
      (Es.prototype.removeSelfFromZr = function (t) {
        ks.prototype.removeSelfFromZr.call(this, t);
        for (var e = 0; e < this._children.length; e++)
          this._children[e].__zr = null;
      }),
      (Es.prototype.getBoundingRect = function () {
        if ((this.styleChanged() && this._updateSubTexts(), !this._rect)) {
          for (
            var t = new W(0, 0, 0, 0),
              e = this._children,
              n = [],
              i = null,
              r = 0;
            r < e.length;
            r++
          ) {
            var o = e[r],
              a = o.getBoundingRect(),
              o = o.getLocalTransform(n);
            o
              ? (t.copy(a), t.applyTransform(o), (i = i || t.clone()).union(t))
              : (i = i || a.clone()).union(a);
          }
          this._rect = i || t;
        }
        return this._rect;
      }),
      (Es.prototype.setDefaultTextStyle = function (t) {
        this._defaultStyle = t || As;
      }),
      (Es.prototype.setTextContent = function (t) {}),
      (Es.prototype._mergeStyle = function (t, e) {
        var n, i;
        return (
          e &&
            ((n = e.rich),
            (i = t.rich || (n && {})),
            L(t, e),
            n && i ? (this._mergeRich(i, n), (t.rich = i)) : i && (t.rich = i)),
          t
        );
      }),
      (Es.prototype._mergeRich = function (t, e) {
        for (var n = ht(e), i = 0; i < n.length; i++) {
          var r = n[i];
          (t[r] = t[r] || {}), L(t[r], e[r]);
        }
      }),
      (Es.prototype.getAnimationStyleProps = function () {
        return Ps;
      }),
      (Es.prototype._getOrCreateChild = function (t) {
        var e = this._children[this._childCursor];
        return (
          (e && e instanceof t) || (e = new t()),
          ((this._children[this._childCursor++] = e).__zr = this.__zr),
          (e.parent = this),
          e
        );
      }),
      (Es.prototype._updatePlainTexts = function () {
        var t,
          e = this.style,
          n = e.font || K,
          i = e.padding,
          r = (function (t, e) {
            null != t && (t += "");
            var n,
              i = e.overflow,
              r = e.padding,
              o = e.font,
              a = "truncate" === i,
              s = Mr(o),
              l = R(e.lineHeight, s),
              u = !!e.backgroundColor,
              h = "truncate" === e.lineOverflow,
              c = e.width,
              i =
                (n =
                  null == c || ("break" !== i && "breakAll" !== i)
                    ? t
                      ? t.split("\n")
                      : []
                    : t
                    ? ca(t, e.font, c, "breakAll" === i, 0).lines
                    : []).length * l,
              p = R(e.height, i);
            if (
              (p < i && h && ((h = Math.floor(p / l)), (n = n.slice(0, h))),
              t && a && null != c)
            )
              for (
                var d = ia(c, o, e.ellipsis, {
                    minChar: e.truncateMinChar,
                    placeholder: e.placeholder,
                  }),
                  f = 0;
                f < n.length;
                f++
              )
                n[f] = ra(n[f], d);
            for (var h = p, g = 0, f = 0; f < n.length; f++)
              g = Math.max(_r(n[f], o), g);
            return (
              null == c && (c = g),
              (t = g),
              r && ((h += r[0] + r[2]), (t += r[1] + r[3]), (c += r[1] + r[3])),
              {
                lines: n,
                height: p,
                outerWidth: (t = u ? c : t),
                outerHeight: h,
                lineHeight: l,
                calculatedLineHeight: s,
                contentWidth: g,
                contentHeight: i,
                width: c,
              }
            );
          })(Gs(e), e),
          o = Ws(e),
          a = !!e.backgroundColor,
          s = r.outerHeight,
          l = r.outerWidth,
          u = r.contentWidth,
          h = r.lines,
          c = r.lineHeight,
          p = this._defaultStyle,
          d = e.x || 0,
          f = e.y || 0,
          g = e.align || p.align || "left",
          y = e.verticalAlign || p.verticalAlign || "top",
          m = d,
          v = Sr(f, r.contentHeight, y);
        (o || i) &&
          ((t = br(d, l, g)), (f = Sr(f, s, y)), o) &&
          this._renderBackground(e, e, t, f, l, s),
          (v += c / 2),
          i &&
            ((m = Hs(d, g, i)),
            "top" === y ? (v += i[0]) : "bottom" === y && (v -= i[2]));
        for (
          var _ = 0,
            o = !1,
            x = Vs((("fill" in e) ? e : ((o = !0), p)).fill),
            w = Fs(
              ("stroke" in e)
                ? e.stroke
                : a || (p.autoStroke && !o)
                ? null
                : ((_ = 2), p.stroke)
            ),
            b = 0 < e.textShadowBlur,
            S =
              null != e.width &&
              ("truncate" === e.overflow ||
                "break" === e.overflow ||
                "breakAll" === e.overflow),
            M = r.calculatedLineHeight,
            T = 0;
          T < h.length;
          T++
        ) {
          var C = this._getOrCreateChild(ds),
            I = C.createStyle();
          C.useStyle(I),
            (I.text = h[T]),
            (I.x = m),
            (I.y = v),
            g && (I.textAlign = g),
            (I.textBaseline = "middle"),
            (I.opacity = e.opacity),
            (I.strokeFirst = !0),
            b &&
              ((I.shadowBlur = e.textShadowBlur || 0),
              (I.shadowColor = e.textShadowColor || "transparent"),
              (I.shadowOffsetX = e.textShadowOffsetX || 0),
              (I.shadowOffsetY = e.textShadowOffsetY || 0)),
            (I.stroke = w),
            (I.fill = x),
            w &&
              ((I.lineWidth = e.lineWidth || _),
              (I.lineDash = e.lineDash),
              (I.lineDashOffset = e.lineDashOffset || 0)),
            (I.font = n),
            zs(I, e),
            (v += c),
            S &&
              C.setBoundingRect(
                new W(
                  br(I.x, e.width, I.textAlign),
                  Sr(I.y, M, I.textBaseline),
                  u,
                  M
                )
              );
        }
      }),
      (Es.prototype._updateRichTexts = function () {
        var t = this.style,
          e = la(Gs(t), t),
          n = e.width,
          i = e.outerWidth,
          r = e.outerHeight,
          o = t.padding,
          a = t.x || 0,
          s = t.y || 0,
          l = this._defaultStyle,
          u = t.align || l.align,
          l = t.verticalAlign || l.verticalAlign,
          a = br(a, i, u),
          u = Sr(s, r, l),
          h = a,
          c = u,
          p = (o && ((h += o[3]), (c += o[0])), h + n);
        Ws(t) && this._renderBackground(t, t, a, u, i, r);
        for (var d = !!t.backgroundColor, f = 0; f < e.lines.length; f++) {
          for (
            var g = e.lines[f],
              y = g.tokens,
              m = y.length,
              v = g.lineHeight,
              _ = g.width,
              x = 0,
              w = h,
              b = p,
              S = m - 1,
              M = void 0;
            x < m && (!(M = y[x]).align || "left" === M.align);

          )
            this._placeToken(M, t, v, c, w, "left", d),
              (_ -= M.width),
              (w += M.width),
              x++;
          for (; 0 <= S && "right" === (M = y[S]).align; )
            this._placeToken(M, t, v, c, b, "right", d),
              (_ -= M.width),
              (b -= M.width),
              S--;
          for (w += (n - (w - h) - (p - b) - _) / 2; x <= S; )
            (M = y[x]),
              this._placeToken(M, t, v, c, w + M.width / 2, "center", d),
              (w += M.width),
              x++;
          c += v;
        }
      }),
      (Es.prototype._placeToken = function (t, e, n, i, r, o, a) {
        var s = e.rich[t.styleName] || {},
          l = ((s.text = t.text), t.verticalAlign),
          u = i + n / 2,
          l =
            ("top" === l
              ? (u = i + t.height / 2)
              : "bottom" === l && (u = i + n - t.height / 2),
            !t.isLineHolder &&
              Ws(s) &&
              this._renderBackground(
                s,
                e,
                "right" === o
                  ? r - t.width
                  : "center" === o
                  ? r - t.width / 2
                  : r,
                u - t.height / 2,
                t.width,
                t.height
              ),
            !!s.backgroundColor),
          i = t.textPadding,
          n =
            (i &&
              ((r = Hs(r, o, i)),
              (u -= t.height / 2 - i[0] - t.innerHeight / 2)),
            this._getOrCreateChild(ds)),
          i = n.createStyle(),
          h = (n.useStyle(i), this._defaultStyle),
          c = !1,
          p = 0,
          d = Vs(("fill" in s ? s : "fill" in e ? e : ((c = !0), h)).fill),
          l = Fs(
            "stroke" in s
              ? s.stroke
              : "stroke" in e
              ? e.stroke
              : l || a || (h.autoStroke && !c)
              ? null
              : ((p = 2), h.stroke)
          ),
          a = 0 < s.textShadowBlur || 0 < e.textShadowBlur,
          c =
            ((i.text = t.text),
            (i.x = r),
            (i.y = u),
            a &&
              ((i.shadowBlur = s.textShadowBlur || e.textShadowBlur || 0),
              (i.shadowColor =
                s.textShadowColor || e.textShadowColor || "transparent"),
              (i.shadowOffsetX =
                s.textShadowOffsetX || e.textShadowOffsetX || 0),
              (i.shadowOffsetY =
                s.textShadowOffsetY || e.textShadowOffsetY || 0)),
            (i.textAlign = o),
            (i.textBaseline = "middle"),
            (i.font = t.font || K),
            (i.opacity = bt(s.opacity, e.opacity, 1)),
            zs(i, s),
            l &&
              ((i.lineWidth = bt(s.lineWidth, e.lineWidth, p)),
              (i.lineDash = R(s.lineDash, e.lineDash)),
              (i.lineDashOffset = e.lineDashOffset || 0),
              (i.stroke = l)),
            d && (i.fill = d),
            t.contentWidth),
          h = t.contentHeight;
        n.setBoundingRect(
          new W(br(i.x, c, i.textAlign), Sr(i.y, h, i.textBaseline), c, h)
        );
      }),
      (Es.prototype._renderBackground = function (t, e, n, i, r, o) {
        var a,
          s,
          l,
          u,
          h = t.backgroundColor,
          c = t.borderWidth,
          p = t.borderColor,
          d = h && h.image,
          f = h && !d,
          g = t.borderRadius,
          y = this,
          g =
            ((f || t.lineHeight || (c && p)) &&
              ((a = this._getOrCreateChild(Is)).useStyle(a.createStyle()),
              (a.style.fill = null),
              ((u = a.shape).x = n),
              (u.y = i),
              (u.width = r),
              (u.height = o),
              (u.r = g),
              a.dirtyShape()),
            f
              ? (((l = a.style).fill = h || null),
                (l.fillOpacity = R(t.fillOpacity, 1)))
              : d &&
                (((s = this._getOrCreateChild(vs)).onload = function () {
                  y.dirtyStyle();
                }),
                ((u = s.style).image = h.image),
                (u.x = n),
                (u.y = i),
                (u.width = r),
                (u.height = o)),
            c &&
              p &&
              (((l = a.style).lineWidth = c),
              (l.stroke = p),
              (l.strokeOpacity = R(t.strokeOpacity, 1)),
              (l.lineDash = t.borderDash),
              (l.lineDashOffset = t.borderDashOffset || 0),
              (a.strokeContainThreshold = 0),
              a.hasFill()) &&
              a.hasStroke() &&
              ((l.strokeFirst = !0), (l.lineWidth *= 2)),
            (a || s).style);
        (g.shadowBlur = t.shadowBlur || 0),
          (g.shadowColor = t.shadowColor || "transparent"),
          (g.shadowOffsetX = t.shadowOffsetX || 0),
          (g.shadowOffsetY = t.shadowOffsetY || 0),
          (g.opacity = bt(t.opacity, e.opacity, 1));
      }),
      (Es.makeFont = function (t) {
        var e,
          n = "";
        return (
          ((n =
            null != (e = t).fontSize || e.fontFamily || e.fontWeight
              ? [
                  t.fontStyle,
                  t.fontWeight,
                  "string" != typeof (e = t.fontSize) ||
                  (-1 === e.indexOf("px") &&
                    -1 === e.indexOf("rem") &&
                    -1 === e.indexOf("em"))
                    ? isNaN(+e)
                      ? "12px"
                      : e + "px"
                    : e,
                  t.fontFamily || "sans-serif",
                ].join(" ")
              : n) &&
            Ct(n)) ||
          t.textFont ||
          t.font
        );
      }),
      Es),
    Os = { left: !0, right: 1, center: 1 },
    Rs = { top: 1, bottom: 1, middle: 1 },
    Ns = ["fontStyle", "fontWeight", "fontSize", "fontFamily"];
  function Es(t) {
    var e = ks.call(this) || this;
    return (
      (e.type = "text"),
      (e._children = []),
      (e._defaultStyle = As),
      e.attr(t),
      e
    );
  }
  function zs(t, e) {
    for (var n = 0; n < Ns.length; n++) {
      var i = Ns[n],
        r = e[i];
      null != r && (t[i] = r);
    }
  }
  function Bs(t) {
    var e;
    t &&
      ((t.font = Ls.makeFont(t)),
      (e = t.align),
      (t.align =
        null == (e = "middle" === e ? "center" : e) || Os[e] ? e : "left"),
      (e = t.verticalAlign),
      (t.verticalAlign =
        null == (e = "center" === e ? "middle" : e) || Rs[e] ? e : "top"),
      t.padding) &&
      (t.padding = Mt(t.padding));
  }
  function Fs(t, e) {
    return null == t || e <= 0 || "transparent" === t || "none" === t
      ? null
      : t.image || t.colorStops
      ? "#000"
      : t;
  }
  function Vs(t) {
    return null == t || "none" === t
      ? null
      : t.image || t.colorStops
      ? "#000"
      : t;
  }
  function Hs(t, e, n) {
    return "right" === e
      ? t - n[1]
      : "center" === e
      ? t + n[3] / 2 - n[1] / 2
      : t + n[3];
  }
  function Gs(t) {
    t = t.text;
    return null != t && (t += ""), t;
  }
  function Ws(t) {
    return !!(
      t.backgroundColor ||
      t.lineHeight ||
      (t.borderWidth && t.borderColor)
    );
  }
  var D = ko(),
    Us = 1,
    Xs = {},
    Ys = ko(),
    qs = ko(),
    Zs = 0,
    js = 1,
    Ks = 2,
    $s = ["emphasis", "blur", "select"],
    Qs = ["normal", "emphasis", "blur", "select"],
    Js = "highlight",
    tl = "downplay",
    el = "select",
    nl = "unselect",
    il = "toggleSelect";
  function rl(t) {
    return null != t && "none" !== t;
  }
  var ol = new ti(100);
  function al(t) {
    var e;
    return H(t)
      ? ((e = ol.get(t)) || ((e = yi(t, -0.1)), ol.put(t, e)), e)
      : mt(t)
      ? (((e = L({}, t)).colorStops = F(t.colorStops, function (t) {
          return { offset: t.offset, color: yi(t.color, -0.1) };
        })),
        e)
      : t;
  }
  function sl(t, e, n) {
    t.onHoverStateChange &&
      (t.hoverState || 0) !== n &&
      t.onHoverStateChange(e),
      (t.hoverState = n);
  }
  function ll(t) {
    sl(t, "emphasis", Ks);
  }
  function ul(t) {
    t.hoverState === Ks && sl(t, "normal", Zs);
  }
  function hl(t) {
    sl(t, "blur", js);
  }
  function cl(t) {
    t.hoverState === js && sl(t, "normal", Zs);
  }
  function pl(t) {
    t.selected = !0;
  }
  function dl(t) {
    t.selected = !1;
  }
  function fl(t, e, n) {
    e(t, n);
  }
  function gl(t, e, n) {
    fl(t, e, n),
      t.isGroup &&
        t.traverse(function (t) {
          fl(t, e, n);
        });
  }
  function yl(t, e) {
    switch (e) {
      case "emphasis":
        t.hoverState = Ks;
        break;
      case "normal":
        t.hoverState = Zs;
        break;
      case "blur":
        t.hoverState = js;
        break;
      case "select":
        t.selected = !0;
    }
  }
  function ml(t, e, n) {
    var i = 0 <= I(t.currentStates, e),
      r = t.style.opacity,
      t = i
        ? null
        : (function (t, e, n, i) {
            for (var r = t.style, o = {}, a = 0; a < e.length; a++) {
              var s = e[a],
                l = r[s];
              o[s] = null == l ? i && i[s] : l;
            }
            for (a = 0; a < t.animators.length; a++) {
              var u = t.animators[a];
              u.__fromStateTransition &&
                u.__fromStateTransition.indexOf(n) < 0 &&
                "style" === u.targetName &&
                u.saveTo(o, e);
            }
            return o;
          })(t, ["opacity"], e, { opacity: 1 }),
      e = (n = n || {}).style || {};
    return (
      null == e.opacity &&
        ((n = L({}, n)),
        (e = L({ opacity: i ? r : 0.1 * t.opacity }, e)),
        (n.style = e)),
      n
    );
  }
  function vl(t, e) {
    var n,
      i,
      r,
      o,
      a,
      s = this.states[t];
    if (this.style) {
      if ("emphasis" === t)
        return (
          (n = this),
          (i = s),
          (e = (e = e) && 0 <= I(e, "select")),
          (a = !1),
          n instanceof j &&
            ((r = Ys(n)),
            (o = (e && r.selectFill) || r.normalFill),
            (e = (e && r.selectStroke) || r.normalStroke),
            rl(o) || rl(e)) &&
            ("inherit" === (r = (i = i || {}).style || {}).fill
              ? ((a = !0), (i = L({}, i)), ((r = L({}, r)).fill = o))
              : !rl(r.fill) && rl(o)
              ? ((a = !0), (i = L({}, i)), ((r = L({}, r)).fill = al(o)))
              : !rl(r.stroke) &&
                rl(e) &&
                (a || ((i = L({}, i)), (r = L({}, r))), (r.stroke = al(e))),
            (i.style = r)),
          i &&
            null == i.z2 &&
            (a || (i = L({}, i)),
            (o = n.z2EmphasisLift),
            (i.z2 = n.z2 + (null != o ? o : 10))),
          i
        );
      if ("blur" === t) return ml(this, t, s);
      if ("select" === t)
        return (
          (e = this),
          (r = s) &&
            null == r.z2 &&
            ((r = L({}, r)),
            (a = e.z2SelectLift),
            (r.z2 = e.z2 + (null != a ? a : 9))),
          r
        );
    }
    return s;
  }
  function _l(t) {
    t.stateProxy = vl;
    var e = t.getTextContent(),
      t = t.getTextGuideLine();
    e && (e.stateProxy = vl), t && (t.stateProxy = vl);
  }
  function xl(t, e) {
    Il(t, e) || t.__highByOuter || gl(t, ll);
  }
  function wl(t, e) {
    Il(t, e) || t.__highByOuter || gl(t, ul);
  }
  function bl(t, e) {
    (t.__highByOuter |= 1 << (e || 0)), gl(t, ll);
  }
  function Sl(t, e) {
    (t.__highByOuter &= ~(1 << (e || 0))) || gl(t, ul);
  }
  function Ml(t) {
    gl(t, cl);
  }
  function Tl(t) {
    gl(t, pl);
  }
  function Cl(t) {
    gl(t, dl);
  }
  function Il(t, e) {
    return t.__highDownSilentOnTouch && e.zrByTouch;
  }
  function Dl(r) {
    var e = r.getModel(),
      o = [],
      a = [];
    e.eachComponent(function (t, e) {
      var n = qs(e),
        t = "series" === t,
        i = t ? r.getViewOfSeriesModel(e) : r.getViewOfComponentModel(e);
      t || a.push(i),
        n.isBlured &&
          (i.group.traverse(function (t) {
            cl(t);
          }),
          t) &&
          o.push(e),
        (n.isBlured = !1);
    }),
      E(a, function (t) {
        t && t.toggleBlurSeries && t.toggleBlurSeries(o, !1, e);
      });
  }
  function kl(t, o, a, s) {
    var l,
      u,
      h,
      n = s.getModel();
    function c(t, e) {
      for (var n = 0; n < e.length; n++) {
        var i = t.getItemGraphicEl(e[n]);
        i && Ml(i);
      }
    }
    (a = a || "coordinateSystem"),
      null != t &&
        o &&
        "none" !== o &&
        ((l = n.getSeriesByIndex(t)),
        (u = l.coordinateSystem) && u.master && (u = u.master),
        (h = []),
        n.eachSeries(function (t) {
          var e = l === t,
            n = t.coordinateSystem;
          if (
            (n && n.master && (n = n.master),
            !(
              ("series" === a && !e) ||
              ("coordinateSystem" === a && !(n && u ? n === u : e)) ||
              ("series" === o && e)
            ))
          ) {
            if (
              (s.getViewOfSeriesModel(t).group.traverse(function (t) {
                (t.__highByOuter && e && "self" === o) || hl(t);
              }),
              st(o))
            )
              c(t.getData(), o);
            else if (O(o))
              for (var i = ht(o), r = 0; r < i.length; r++)
                c(t.getData(i[r]), o[i[r]]);
            h.push(t), (qs(t).isBlured = !0);
          }
        }),
        n.eachComponent(function (t, e) {
          "series" !== t &&
            (t = s.getViewOfComponentModel(e)) &&
            t.toggleBlurSeries &&
            t.toggleBlurSeries(h, !0, n);
        }));
  }
  function Al(t, e, n) {
    null != t &&
      null != e &&
      (t = n.getModel().getComponent(t, e)) &&
      ((qs(t).isBlured = !0), (e = n.getViewOfComponentModel(t))) &&
      e.focusBlurEnabled &&
      e.group.traverse(function (t) {
        hl(t);
      });
  }
  function Pl(t, e, n, i) {
    var r = { focusSelf: !1, dispatchers: null };
    if (null == t || "series" === t || null == e || null == n) return r;
    t = i.getModel().getComponent(t, e);
    if (!t) return r;
    e = i.getViewOfComponentModel(t);
    if (!e || !e.findHighDownDispatchers) return r;
    for (var o, a = e.findHighDownDispatchers(n), s = 0; s < a.length; s++)
      if ("self" === D(a[s]).focus) {
        o = !0;
        break;
      }
    return { focusSelf: o, dispatchers: a };
  }
  function Ll(i) {
    E(i.getAllData(), function (t) {
      var e = t.data,
        n = t.type;
      e.eachItemGraphicEl(function (t, e) {
        (i.isSelected(e, n) ? Tl : Cl)(t);
      });
    });
  }
  function Ol(t, e, n) {
    Bl(t, !0), gl(t, _l);
    (t = D(t)),
      null != e
        ? ((t.focus = e), (t.blurScope = n))
        : t.focus && (t.focus = null);
  }
  function Rl(t, e, n, i) {
    i ? Bl(t, !1) : Ol(t, e, n);
  }
  var Nl = ["emphasis", "blur", "select"],
    El = {
      itemStyle: "getItemStyle",
      lineStyle: "getLineStyle",
      areaStyle: "getAreaStyle",
    };
  function zl(t, e, n, i) {
    n = n || "itemStyle";
    for (var r = 0; r < Nl.length; r++) {
      var o = Nl[r],
        a = e.getModel([o, n]);
      t.ensureState(o).style = i ? i(a) : a[El[n]]();
    }
  }
  function Bl(t, e) {
    var e = !1 === e,
      n = t;
    t.highDownSilentOnTouch &&
      (n.__highDownSilentOnTouch = t.highDownSilentOnTouch),
      (e && !n.__highDownDispatcher) ||
        ((n.__highByOuter = n.__highByOuter || 0),
        (n.__highDownDispatcher = !e));
  }
  function Fl(t) {
    return !(!t || !t.__highDownDispatcher);
  }
  function Vl(t) {
    t = t.type;
    return t === el || t === nl || t === il;
  }
  function Hl(t) {
    t = t.type;
    return t === Js || t === tl;
  }
  var Gl = qa.CMD,
    Wl = [[], [], []],
    Ul = Math.sqrt,
    Xl = Math.atan2;
  var Yl = Math.sqrt,
    ql = Math.sin,
    Zl = Math.cos,
    jl = Math.PI;
  function Kl(t) {
    return Math.sqrt(t[0] * t[0] + t[1] * t[1]);
  }
  function $l(t, e) {
    return (t[0] * e[0] + t[1] * e[1]) / (Kl(t) * Kl(e));
  }
  function Ql(t, e) {
    return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos($l(t, e));
  }
  function Jl(t, e, n, i, r, o, a, s, l, u, h) {
    var l = l * (jl / 180),
      c = (Zl(l) * (t - n)) / 2 + (ql(l) * (e - i)) / 2,
      p = (-1 * ql(l) * (t - n)) / 2 + (Zl(l) * (e - i)) / 2,
      d = (c * c) / (a * a) + (p * p) / (s * s),
      d =
        (1 < d && ((a *= Yl(d)), (s *= Yl(d))),
        (r === o ? -1 : 1) *
          Yl(
            (a * a * (s * s) - a * a * (p * p) - s * s * (c * c)) /
              (a * a * (p * p) + s * s * (c * c))
          ) || 0),
      r = (d * a * p) / s,
      d = (d * -s * c) / a,
      t = (t + n) / 2 + Zl(l) * r - ql(l) * d,
      n = (e + i) / 2 + ql(l) * r + Zl(l) * d,
      e = Ql([1, 0], [(c - r) / a, (p - d) / s]),
      i = [(c - r) / a, (p - d) / s],
      c = [(-1 * c - r) / a, (-1 * p - d) / s],
      r = Ql(i, c);
    $l(i, c) <= -1 && (r = jl),
      (r = 1 <= $l(i, c) ? 0 : r) < 0 &&
        ((p = Math.round((r / jl) * 1e6) / 1e6), (r = 2 * jl + (p % 2) * jl)),
      h.addData(u, t, n, a, s, e, r, l, o);
  }
  var tu = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi,
    eu = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g;
  u(ru, (nu = j)), (ru.prototype.applyTransform = function (t) {});
  var nu,
    iu = ru;
  function ru() {
    return (null !== nu && nu.apply(this, arguments)) || this;
  }
  function ou(t) {
    return null != t.setData;
  }
  function au(t, e) {
    var S = (function (t) {
        var e = new qa();
        if (t) {
          var n,
            i = 0,
            r = 0,
            o = i,
            a = r,
            s = qa.CMD,
            l = t.match(tu);
          if (l) {
            for (var u = 0; u < l.length; u++) {
              for (
                var h = l[u],
                  c = h.charAt(0),
                  p = void 0,
                  d = h.match(eu) || [],
                  f = d.length,
                  g = 0;
                g < f;
                g++
              )
                d[g] = parseFloat(d[g]);
              for (var y = 0; y < f; ) {
                var m = void 0,
                  v = void 0,
                  _ = void 0,
                  x = void 0,
                  w = void 0,
                  b = void 0,
                  S = void 0,
                  M = i,
                  T = r,
                  C = void 0,
                  I = void 0;
                switch (c) {
                  case "l":
                    (i += d[y++]), (r += d[y++]), (p = s.L), e.addData(p, i, r);
                    break;
                  case "L":
                    (i = d[y++]), (r = d[y++]), (p = s.L), e.addData(p, i, r);
                    break;
                  case "m":
                    (i += d[y++]),
                      (r += d[y++]),
                      (p = s.M),
                      e.addData(p, i, r),
                      (o = i),
                      (a = r),
                      (c = "l");
                    break;
                  case "M":
                    (i = d[y++]),
                      (r = d[y++]),
                      (p = s.M),
                      e.addData(p, i, r),
                      (o = i),
                      (a = r),
                      (c = "L");
                    break;
                  case "h":
                    (i += d[y++]), (p = s.L), e.addData(p, i, r);
                    break;
                  case "H":
                    (i = d[y++]), (p = s.L), e.addData(p, i, r);
                    break;
                  case "v":
                    (r += d[y++]), (p = s.L), e.addData(p, i, r);
                    break;
                  case "V":
                    (r = d[y++]), (p = s.L), e.addData(p, i, r);
                    break;
                  case "C":
                    (p = s.C),
                      e.addData(
                        p,
                        d[y++],
                        d[y++],
                        d[y++],
                        d[y++],
                        d[y++],
                        d[y++]
                      ),
                      (i = d[y - 2]),
                      (r = d[y - 1]);
                    break;
                  case "c":
                    (p = s.C),
                      e.addData(
                        p,
                        d[y++] + i,
                        d[y++] + r,
                        d[y++] + i,
                        d[y++] + r,
                        d[y++] + i,
                        d[y++] + r
                      ),
                      (i += d[y - 2]),
                      (r += d[y - 1]);
                    break;
                  case "S":
                    (m = i),
                      (v = r),
                      (C = e.len()),
                      (I = e.data),
                      n === s.C && ((m += i - I[C - 4]), (v += r - I[C - 3])),
                      (p = s.C),
                      (M = d[y++]),
                      (T = d[y++]),
                      (i = d[y++]),
                      (r = d[y++]),
                      e.addData(p, m, v, M, T, i, r);
                    break;
                  case "s":
                    (m = i),
                      (v = r),
                      (C = e.len()),
                      (I = e.data),
                      n === s.C && ((m += i - I[C - 4]), (v += r - I[C - 3])),
                      (p = s.C),
                      (M = i + d[y++]),
                      (T = r + d[y++]),
                      (i += d[y++]),
                      (r += d[y++]),
                      e.addData(p, m, v, M, T, i, r);
                    break;
                  case "Q":
                    (M = d[y++]),
                      (T = d[y++]),
                      (i = d[y++]),
                      (r = d[y++]),
                      (p = s.Q),
                      e.addData(p, M, T, i, r);
                    break;
                  case "q":
                    (M = d[y++] + i),
                      (T = d[y++] + r),
                      (i += d[y++]),
                      (r += d[y++]),
                      (p = s.Q),
                      e.addData(p, M, T, i, r);
                    break;
                  case "T":
                    (m = i),
                      (v = r),
                      (C = e.len()),
                      (I = e.data),
                      n === s.Q && ((m += i - I[C - 4]), (v += r - I[C - 3])),
                      (i = d[y++]),
                      (r = d[y++]),
                      (p = s.Q),
                      e.addData(p, m, v, i, r);
                    break;
                  case "t":
                    (m = i),
                      (v = r),
                      (C = e.len()),
                      (I = e.data),
                      n === s.Q && ((m += i - I[C - 4]), (v += r - I[C - 3])),
                      (i += d[y++]),
                      (r += d[y++]),
                      (p = s.Q),
                      e.addData(p, m, v, i, r);
                    break;
                  case "A":
                    (_ = d[y++]),
                      (x = d[y++]),
                      (w = d[y++]),
                      (b = d[y++]),
                      (S = d[y++]),
                      Jl(
                        (M = i),
                        (T = r),
                        (i = d[y++]),
                        (r = d[y++]),
                        b,
                        S,
                        _,
                        x,
                        w,
                        (p = s.A),
                        e
                      );
                    break;
                  case "a":
                    (_ = d[y++]),
                      (x = d[y++]),
                      (w = d[y++]),
                      (b = d[y++]),
                      (S = d[y++]),
                      Jl(
                        (M = i),
                        (T = r),
                        (i += d[y++]),
                        (r += d[y++]),
                        b,
                        S,
                        _,
                        x,
                        w,
                        (p = s.A),
                        e
                      );
                }
              }
              ("z" !== c && "Z" !== c) ||
                ((p = s.Z), e.addData(p), (i = o), (r = a)),
                (n = p);
            }
            e.toStatic();
          }
        }
        return e;
      })(t),
      t = L({}, e);
    return (
      (t.buildPath = function (t) {
        var e;
        ou(t)
          ? (t.setData(S.data), (e = t.getContext()) && t.rebuildPath(e, 1))
          : S.rebuildPath((e = t), 1);
      }),
      (t.applyTransform = function (t) {
        var e = S,
          n = t;
        if (n) {
          for (
            var i,
              r,
              o,
              a,
              s = e.data,
              l = e.len(),
              u = Gl.M,
              h = Gl.C,
              c = Gl.L,
              p = Gl.R,
              d = Gl.A,
              f = Gl.Q,
              g = 0,
              y = 0;
            g < l;

          ) {
            switch (((i = s[g++]), (y = g), (r = 0), i)) {
              case u:
              case c:
                r = 1;
                break;
              case h:
                r = 3;
                break;
              case f:
                r = 2;
                break;
              case d:
                var m = n[4],
                  v = n[5],
                  _ = Ul(n[0] * n[0] + n[1] * n[1]),
                  x = Ul(n[2] * n[2] + n[3] * n[3]),
                  w = Xl(-n[1] / x, n[0] / _);
                (s[g] *= _),
                  (s[g++] += m),
                  (s[g] *= x),
                  (s[g++] += v),
                  (s[g++] *= _),
                  (s[g++] *= x),
                  (s[g++] += w),
                  (s[g++] += w),
                  (y = g += 2);
                break;
              case p:
                (a[0] = s[g++]),
                  (a[1] = s[g++]),
                  ee(a, a, n),
                  (s[y++] = a[0]),
                  (s[y++] = a[1]),
                  (a[0] += s[g++]),
                  (a[1] += s[g++]),
                  ee(a, a, n),
                  (s[y++] = a[0]),
                  (s[y++] = a[1]);
            }
            for (o = 0; o < r; o++) {
              var b = Wl[o];
              (b[0] = s[g++]),
                (b[1] = s[g++]),
                ee(b, b, n),
                (s[y++] = b[0]),
                (s[y++] = b[1]);
            }
          }
          e.increaseVersion();
        }
        this.dirtyShape();
      }),
      t
    );
  }
  function su() {
    (this.cx = 0), (this.cy = 0), (this.r = 0);
  }
  u(hu, (lu = j)),
    (hu.prototype.getDefaultShape = function () {
      return new su();
    }),
    (hu.prototype.buildPath = function (t, e) {
      t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI);
    });
  var lu,
    uu = hu;
  function hu(t) {
    return lu.call(this, t) || this;
  }
  uu.prototype.type = "circle";
  function cu() {
    (this.cx = 0), (this.cy = 0), (this.rx = 0), (this.ry = 0);
  }
  u(fu, (pu = j)),
    (fu.prototype.getDefaultShape = function () {
      return new cu();
    }),
    (fu.prototype.buildPath = function (t, e) {
      var n = e.cx,
        i = e.cy,
        r = e.rx,
        e = e.ry,
        o = 0.5522848 * r,
        a = 0.5522848 * e;
      t.moveTo(n - r, i),
        t.bezierCurveTo(n - r, i - a, n - o, i - e, n, i - e),
        t.bezierCurveTo(n + o, i - e, n + r, i - a, n + r, i),
        t.bezierCurveTo(n + r, i + a, n + o, i + e, n, i + e),
        t.bezierCurveTo(n - o, i + e, n - r, i + a, n - r, i),
        t.closePath();
    });
  var pu,
    du = fu;
  function fu(t) {
    return pu.call(this, t) || this;
  }
  du.prototype.type = "ellipse";
  var gu = Math.PI,
    yu = 2 * gu,
    mu = Math.sin,
    vu = Math.cos,
    _u = Math.acos,
    xu = Math.atan2,
    wu = Math.abs,
    bu = Math.sqrt,
    Su = Math.max,
    Mu = Math.min,
    Tu = 1e-4;
  function Cu(t, e, n, i, r, o, a) {
    var s = t - n,
      l = e - i,
      a = (a ? o : -o) / bu(s * s + l * l),
      l = a * l,
      a = -a * s,
      s = t + l,
      t = e + a,
      e = n + l,
      n = i + a,
      i = (s + e) / 2,
      u = (t + n) / 2,
      h = e - s,
      c = n - t,
      p = h * h + c * c,
      o = r - o,
      s = s * n - e * t,
      n = (c < 0 ? -1 : 1) * bu(Su(0, o * o * p - s * s)),
      e = (s * c - h * n) / p,
      t = (-s * h - c * n) / p,
      d = (s * c + h * n) / p,
      s = (-s * h + c * n) / p,
      h = e - i,
      c = t - u,
      n = d - i,
      p = s - u;
    return (
      n * n + p * p < h * h + c * c && ((e = d), (t = s)),
      { cx: e, cy: t, x0: -l, y0: -a, x1: e * (r / o - 1), y1: t * (r / o - 1) }
    );
  }
  function Iu(t, e) {
    var n,
      i,
      r,
      o,
      a,
      s,
      l,
      u,
      h,
      c,
      p,
      d,
      f,
      g,
      y,
      m,
      v,
      _,
      x,
      w,
      b,
      S,
      M,
      T,
      C,
      I,
      D,
      k,
      A,
      P,
      L = Su(e.r, 0),
      O = Su(e.r0 || 0, 0),
      R = 0 < L;
    (R || 0 < O) &&
      (R || ((L = O), (O = 0)),
      L < O && ((R = L), (L = O), (O = R)),
      (R = e.startAngle),
      (n = e.endAngle),
      isNaN(R) ||
        isNaN(n) ||
        ((i = e.cx),
        (r = e.cy),
        (o = !!e.clockwise),
        (w = wu(n - R)),
        Tu < (a = yu < w && w % yu) && (w = a),
        Tu < L
          ? yu - Tu < w
            ? (t.moveTo(i + L * vu(R), r + L * mu(R)),
              t.arc(i, r, L, R, n, !o),
              Tu < O &&
                (t.moveTo(i + O * vu(n), r + O * mu(n)),
                t.arc(i, r, O, n, R, o)))
            : ((g =
                f =
                d =
                p =
                S =
                b =
                c =
                h =
                I =
                C =
                T =
                M =
                u =
                l =
                s =
                a =
                  void 0),
              (y = L * vu(R)),
              (m = L * mu(R)),
              (v = O * vu(n)),
              (_ = O * mu(n)),
              (x = Tu < w) &&
                ((e = e.cornerRadius) &&
                  ((a = (e = (function (t) {
                    if (V(t)) {
                      var e = t.length;
                      if (!e) return t;
                      e =
                        1 === e
                          ? [t[0], t[0], 0, 0]
                          : 2 === e
                          ? [t[0], t[0], t[1], t[1]]
                          : 3 === e
                          ? t.concat(t[2])
                          : t;
                    } else e = [t, t, t, t];
                    return e;
                  })(e))[0]),
                  (s = e[1]),
                  (l = e[2]),
                  (u = e[3])),
                (e = wu(L - O) / 2),
                (M = Mu(e, l)),
                (T = Mu(e, u)),
                (C = Mu(e, a)),
                (I = Mu(e, s)),
                (b = h = Su(M, T)),
                (S = c = Su(C, I)),
                Tu < h || Tu < c) &&
                ((p = L * vu(n)),
                (d = L * mu(n)),
                (f = O * vu(R)),
                (g = O * mu(R)),
                w < gu) &&
                (e = (function (t, e, n, i, r, o, a, s) {
                  var l = (s = s - o) * (n = n - t) - (a = a - r) * (i = i - e);
                  if (!(l * l < Tu))
                    return [
                      t + (l = (a * (e - o) - s * (t - r)) / l) * n,
                      e + l * i,
                    ];
                })(y, m, f, g, p, d, v, _)) &&
                ((M = y - e[0]),
                (T = m - e[1]),
                (C = p - e[0]),
                (I = d - e[1]),
                (w =
                  1 /
                  mu(
                    _u(
                      (M * C + T * I) / (bu(M * M + T * T) * bu(C * C + I * I))
                    ) / 2
                  )),
                (M = bu(e[0] * e[0] + e[1] * e[1])),
                (b = Mu(h, (L - M) / (1 + w))),
                (S = Mu(c, (O - M) / (w - 1)))),
              x
                ? Tu < b
                  ? ((D = Mu(l, b)),
                    (k = Mu(u, b)),
                    (A = Cu(f, g, y, m, L, D, o)),
                    (P = Cu(p, d, v, _, L, k, o)),
                    t.moveTo(i + A.cx + A.x0, r + A.cy + A.y0),
                    b < h && D === k
                      ? t.arc(
                          i + A.cx,
                          r + A.cy,
                          b,
                          xu(A.y0, A.x0),
                          xu(P.y0, P.x0),
                          !o
                        )
                      : (0 < D &&
                          t.arc(
                            i + A.cx,
                            r + A.cy,
                            D,
                            xu(A.y0, A.x0),
                            xu(A.y1, A.x1),
                            !o
                          ),
                        t.arc(
                          i,
                          r,
                          L,
                          xu(A.cy + A.y1, A.cx + A.x1),
                          xu(P.cy + P.y1, P.cx + P.x1),
                          !o
                        ),
                        0 < k &&
                          t.arc(
                            i + P.cx,
                            r + P.cy,
                            k,
                            xu(P.y1, P.x1),
                            xu(P.y0, P.x0),
                            !o
                          )))
                  : (t.moveTo(i + y, r + m), t.arc(i, r, L, R, n, !o))
                : t.moveTo(i + y, r + m),
              Tu < O && x
                ? Tu < S
                  ? ((D = Mu(a, S)),
                    (A = Cu(v, _, p, d, O, -(k = Mu(s, S)), o)),
                    (P = Cu(y, m, f, g, O, -D, o)),
                    t.lineTo(i + A.cx + A.x0, r + A.cy + A.y0),
                    S < c && D === k
                      ? t.arc(
                          i + A.cx,
                          r + A.cy,
                          S,
                          xu(A.y0, A.x0),
                          xu(P.y0, P.x0),
                          !o
                        )
                      : (0 < k &&
                          t.arc(
                            i + A.cx,
                            r + A.cy,
                            k,
                            xu(A.y0, A.x0),
                            xu(A.y1, A.x1),
                            !o
                          ),
                        t.arc(
                          i,
                          r,
                          O,
                          xu(A.cy + A.y1, A.cx + A.x1),
                          xu(P.cy + P.y1, P.cx + P.x1),
                          o
                        ),
                        0 < D &&
                          t.arc(
                            i + P.cx,
                            r + P.cy,
                            D,
                            xu(P.y1, P.x1),
                            xu(P.y0, P.x0),
                            !o
                          )))
                  : (t.lineTo(i + v, r + _), t.arc(i, r, O, n, R, o))
                : t.lineTo(i + v, r + _))
          : t.moveTo(i, r),
        t.closePath()));
  }
  function Du() {
    (this.cx = 0),
      (this.cy = 0),
      (this.r0 = 0),
      (this.r = 0),
      (this.startAngle = 0),
      (this.endAngle = 2 * Math.PI),
      (this.clockwise = !0),
      (this.cornerRadius = 0);
  }
  u(Pu, (ku = j)),
    (Pu.prototype.getDefaultShape = function () {
      return new Du();
    }),
    (Pu.prototype.buildPath = function (t, e) {
      Iu(t, e);
    }),
    (Pu.prototype.isZeroArea = function () {
      return (
        this.shape.startAngle === this.shape.endAngle ||
        this.shape.r === this.shape.r0
      );
    });
  var ku,
    Au = Pu;
  function Pu(t) {
    return ku.call(this, t) || this;
  }
  Au.prototype.type = "sector";
  function Lu() {
    (this.cx = 0), (this.cy = 0), (this.r = 0), (this.r0 = 0);
  }
  u(Nu, (Ou = j)),
    (Nu.prototype.getDefaultShape = function () {
      return new Lu();
    }),
    (Nu.prototype.buildPath = function (t, e) {
      var n = e.cx,
        i = e.cy,
        r = 2 * Math.PI;
      t.moveTo(n + e.r, i),
        t.arc(n, i, e.r, 0, r, !1),
        t.moveTo(n + e.r0, i),
        t.arc(n, i, e.r0, 0, r, !0);
    });
  var Ou,
    Ru = Nu;
  function Nu(t) {
    return Ou.call(this, t) || this;
  }
  function Eu(t, e, n) {
    var i = e.smooth,
      r = e.points;
    if (r && 2 <= r.length) {
      if (i) {
        var o = (function (t, e, n, i) {
          var r,
            o,
            a = [],
            s = [],
            l = [],
            u = [];
          if (i) {
            for (
              var h = [1 / 0, 1 / 0], c = [-1 / 0, -1 / 0], p = 0, d = t.length;
              p < d;
              p++
            )
              ne(h, h, t[p]), ie(c, c, t[p]);
            ne(h, h, i[0]), ie(c, c, i[1]);
          }
          for (p = 0, d = t.length; p < d; p++) {
            var f = t[p];
            if (n) (r = t[p ? p - 1 : d - 1]), (o = t[(p + 1) % d]);
            else {
              if (0 === p || p === d - 1) {
                a.push(Wt(t[p]));
                continue;
              }
              (r = t[p - 1]), (o = t[p + 1]);
            }
            Xt(s, o, r), Zt(s, s, e);
            var g = Kt(f, r),
              y = Kt(f, o),
              m = g + y,
              m =
                (0 !== m && ((g /= m), (y /= m)),
                Zt(l, s, -g),
                Zt(u, s, y),
                Ut([], f, l)),
              g = Ut([], f, u);
            i && (ie(m, m, h), ne(m, m, c), ie(g, g, h), ne(g, g, c)),
              a.push(m),
              a.push(g);
          }
          return n && a.push(a.shift()), a;
        })(r, i, n, e.smoothConstraint);
        t.moveTo(r[0][0], r[0][1]);
        for (var a = r.length, s = 0; s < (n ? a : a - 1); s++) {
          var l = o[2 * s],
            u = o[2 * s + 1],
            h = r[(s + 1) % a];
          t.bezierCurveTo(l[0], l[1], u[0], u[1], h[0], h[1]);
        }
      } else {
        t.moveTo(r[0][0], r[0][1]);
        for (var s = 1, c = r.length; s < c; s++) t.lineTo(r[s][0], r[s][1]);
      }
      n && t.closePath();
    }
  }
  Ru.prototype.type = "ring";
  function zu() {
    (this.points = null), (this.smooth = 0), (this.smoothConstraint = null);
  }
  u(Vu, (Bu = j)),
    (Vu.prototype.getDefaultShape = function () {
      return new zu();
    }),
    (Vu.prototype.buildPath = function (t, e) {
      Eu(t, e, !0);
    });
  var Bu,
    Fu = Vu;
  function Vu(t) {
    return Bu.call(this, t) || this;
  }
  Fu.prototype.type = "polygon";
  function Hu() {
    (this.points = null),
      (this.percent = 1),
      (this.smooth = 0),
      (this.smoothConstraint = null);
  }
  u(Uu, (Gu = j)),
    (Uu.prototype.getDefaultStyle = function () {
      return { stroke: "#000", fill: null };
    }),
    (Uu.prototype.getDefaultShape = function () {
      return new Hu();
    }),
    (Uu.prototype.buildPath = function (t, e) {
      Eu(t, e, !1);
    });
  var Gu,
    Wu = Uu;
  function Uu(t) {
    return Gu.call(this, t) || this;
  }
  Wu.prototype.type = "polyline";
  function Xu() {
    (this.x1 = 0),
      (this.y1 = 0),
      (this.x2 = 0),
      (this.y2 = 0),
      (this.percent = 1);
  }
  var Yu,
    qu = {},
    Zu =
      (u(ju, (Yu = j)),
      (ju.prototype.getDefaultStyle = function () {
        return { stroke: "#000", fill: null };
      }),
      (ju.prototype.getDefaultShape = function () {
        return new Xu();
      }),
      (ju.prototype.buildPath = function (t, e) {
        o = (
          this.subPixelOptimize
            ? ((n = (o = ws(qu, e, this.style)).x1), (i = o.y1), (r = o.x2), o)
            : ((n = e.x1), (i = e.y1), (r = e.x2), e)
        ).y2;
        var n,
          i,
          r,
          o,
          e = e.percent;
        0 !== e &&
          (t.moveTo(n, i),
          e < 1 && ((r = n * (1 - e) + r * e), (o = i * (1 - e) + o * e)),
          t.lineTo(r, o));
      }),
      (ju.prototype.pointAt = function (t) {
        var e = this.shape;
        return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t];
      }),
      ju);
  function ju(t) {
    return Yu.call(this, t) || this;
  }
  Zu.prototype.type = "line";
  function Ku() {
    (this.x1 = 0),
      (this.y1 = 0),
      (this.x2 = 0),
      (this.y2 = 0),
      (this.cpx1 = 0),
      (this.cpy1 = 0),
      (this.percent = 1);
  }
  var $u = [];
  function Qu(t, e, n) {
    var i = t.cpx2,
      r = t.cpy2;
    return null != i || null != r
      ? [
          (n ? zn : En)(t.x1, t.cpx1, t.cpx2, t.x2, e),
          (n ? zn : En)(t.y1, t.cpy1, t.cpy2, t.y2, e),
        ]
      : [
          (n ? Wn : Gn)(t.x1, t.cpx1, t.x2, e),
          (n ? Wn : Gn)(t.y1, t.cpy1, t.y2, e),
        ];
  }
  u(eh, (Ju = j)),
    (eh.prototype.getDefaultStyle = function () {
      return { stroke: "#000", fill: null };
    }),
    (eh.prototype.getDefaultShape = function () {
      return new Ku();
    }),
    (eh.prototype.buildPath = function (t, e) {
      var n = e.x1,
        i = e.y1,
        r = e.x2,
        o = e.y2,
        a = e.cpx1,
        s = e.cpy1,
        l = e.cpx2,
        u = e.cpy2,
        e = e.percent;
      0 !== e &&
        (t.moveTo(n, i),
        null == l || null == u
          ? (e < 1 &&
              (Xn(n, a, r, e, $u),
              (a = $u[1]),
              (r = $u[2]),
              Xn(i, s, o, e, $u),
              (s = $u[1]),
              (o = $u[2])),
            t.quadraticCurveTo(a, s, r, o))
          : (e < 1 &&
              (Vn(n, a, l, r, e, $u),
              (a = $u[1]),
              (l = $u[2]),
              (r = $u[3]),
              Vn(i, s, u, o, e, $u),
              (s = $u[1]),
              (u = $u[2]),
              (o = $u[3])),
            t.bezierCurveTo(a, s, l, u, r, o)));
    }),
    (eh.prototype.pointAt = function (t) {
      return Qu(this.shape, t, !1);
    }),
    (eh.prototype.tangentAt = function (t) {
      t = Qu(this.shape, t, !0);
      return jt(t, t);
    });
  var Ju,
    th = eh;
  function eh(t) {
    return Ju.call(this, t) || this;
  }
  th.prototype.type = "bezier-curve";
  function nh() {
    (this.cx = 0),
      (this.cy = 0),
      (this.r = 0),
      (this.startAngle = 0),
      (this.endAngle = 2 * Math.PI),
      (this.clockwise = !0);
  }
  u(oh, (ih = j)),
    (oh.prototype.getDefaultStyle = function () {
      return { stroke: "#000", fill: null };
    }),
    (oh.prototype.getDefaultShape = function () {
      return new nh();
    }),
    (oh.prototype.buildPath = function (t, e) {
      var n = e.cx,
        i = e.cy,
        r = Math.max(e.r, 0),
        o = e.startAngle,
        a = e.endAngle,
        e = e.clockwise,
        s = Math.cos(o),
        l = Math.sin(o);
      t.moveTo(s * r + n, l * r + i), t.arc(n, i, r, o, a, !e);
    });
  var ih,
    rh = oh;
  function oh(t) {
    return ih.call(this, t) || this;
  }
  rh.prototype.type = "arc";
  u(lh, (ah = j)),
    (lh.prototype._updatePathDirty = function () {
      for (
        var t = this.shape.paths, e = this.shapeChanged(), n = 0;
        n < t.length;
        n++
      )
        e = e || t[n].shapeChanged();
      e && this.dirtyShape();
    }),
    (lh.prototype.beforeBrush = function () {
      this._updatePathDirty();
      for (
        var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0;
        n < t.length;
        n++
      )
        t[n].path || t[n].createPathProxy(),
          t[n].path.setScale(e[0], e[1], t[n].segmentIgnoreThreshold);
    }),
    (lh.prototype.buildPath = function (t, e) {
      for (var n = e.paths || [], i = 0; i < n.length; i++)
        n[i].buildPath(t, n[i].shape, !0);
    }),
    (lh.prototype.afterBrush = function () {
      for (var t = this.shape.paths || [], e = 0; e < t.length; e++)
        t[e].pathUpdated();
    }),
    (lh.prototype.getBoundingRect = function () {
      return (
        this._updatePathDirty.call(this), j.prototype.getBoundingRect.call(this)
      );
    });
  var ah,
    sh = lh;
  function lh() {
    var t = (null !== ah && ah.apply(this, arguments)) || this;
    return (t.type = "compound"), t;
  }
  hh.prototype.addColorStop = function (t, e) {
    this.colorStops.push({ offset: t, color: e });
  };
  var uh = hh;
  function hh(t) {
    this.colorStops = t || [];
  }
  u(dh, (ch = uh));
  var ch,
    ph = dh;
  function dh(t, e, n, i, r, o) {
    r = ch.call(this, r) || this;
    return (
      (r.x = null == t ? 0 : t),
      (r.y = null == e ? 0 : e),
      (r.x2 = null == n ? 1 : n),
      (r.y2 = null == i ? 0 : i),
      (r.type = "linear"),
      (r.global = o || !1),
      r
    );
  }
  u(gh, (fh = uh));
  var fh,
    uh = gh;
  function gh(t, e, n, i, r) {
    i = fh.call(this, i) || this;
    return (
      (i.x = null == t ? 0.5 : t),
      (i.y = null == e ? 0.5 : e),
      (i.r = null == n ? 0.5 : n),
      (i.type = "radial"),
      (i.global = r || !1),
      i
    );
  }
  var yh = [0, 0],
    mh = [0, 0],
    vh = new z(),
    _h = new z(),
    xh =
      ((wh.prototype.fromBoundingRect = function (t, e) {
        var n = this._corners,
          i = this._axes,
          r = t.x,
          o = t.y,
          a = r + t.width,
          t = o + t.height;
        if ((n[0].set(r, o), n[1].set(a, o), n[2].set(a, t), n[3].set(r, t), e))
          for (var s = 0; s < 4; s++) n[s].transform(e);
        for (
          z.sub(i[0], n[1], n[0]),
            z.sub(i[1], n[3], n[0]),
            i[0].normalize(),
            i[1].normalize(),
            s = 0;
          s < 2;
          s++
        )
          this._origin[s] = i[s].dot(n[0]);
      }),
      (wh.prototype.intersect = function (t, e) {
        var n = !0,
          i = !e;
        return (
          vh.set(1 / 0, 1 / 0),
          _h.set(0, 0),
          (!this._intersectCheckOneSide(this, t, vh, _h, i, 1) &&
            ((n = !1), i)) ||
            (!this._intersectCheckOneSide(t, this, vh, _h, i, -1) &&
              ((n = !1), i)) ||
            i ||
            z.copy(e, n ? vh : _h),
          n
        );
      }),
      (wh.prototype._intersectCheckOneSide = function (t, e, n, i, r, o) {
        for (var a = !0, s = 0; s < 2; s++) {
          var l = this._axes[s];
          if (
            (this._getProjMinMaxOnAxis(s, t._corners, yh),
            this._getProjMinMaxOnAxis(s, e._corners, mh),
            yh[1] < mh[0] || mh[1] < yh[0])
          ) {
            if (((a = !1), r)) return a;
            var u = Math.abs(mh[0] - yh[1]),
              h = Math.abs(yh[0] - mh[1]);
            Math.min(u, h) > i.len() &&
              (u < h ? z.scale(i, l, -u * o) : z.scale(i, l, h * o));
          } else
            n &&
              ((u = Math.abs(mh[0] - yh[1])),
              (h = Math.abs(yh[0] - mh[1])),
              Math.min(u, h) < n.len()) &&
              (u < h ? z.scale(n, l, u * o) : z.scale(n, l, -h * o));
        }
        return a;
      }),
      (wh.prototype._getProjMinMaxOnAxis = function (t, e, n) {
        for (
          var i = this._axes[t],
            r = this._origin,
            o = e[0].dot(i) + r[t],
            a = o,
            s = o,
            l = 1;
          l < e.length;
          l++
        )
          var u = e[l].dot(i) + r[t], a = Math.min(u, a), s = Math.max(u, s);
        (n[0] = a), (n[1] = s);
      }),
      wh);
  function wh(t, e) {
    (this._corners = []), (this._axes = []), (this._origin = [0, 0]);
    for (var n = 0; n < 4; n++) this._corners[n] = new z();
    for (n = 0; n < 2; n++) this._axes[n] = new z();
    t && this.fromBoundingRect(t, e);
  }
  var bh,
    Sh = [],
    n =
      (u(Mh, (bh = n)),
      (Mh.prototype.traverse = function (t, e) {
        t.call(e, this);
      }),
      (Mh.prototype.useStyle = function () {
        this.style = {};
      }),
      (Mh.prototype.getCursor = function () {
        return this._cursor;
      }),
      (Mh.prototype.innerAfterBrush = function () {
        this._cursor = this._displayables.length;
      }),
      (Mh.prototype.clearDisplaybles = function () {
        (this._displayables = []),
          (this._temporaryDisplayables = []),
          (this._cursor = 0),
          this.markRedraw(),
          (this.notClear = !1);
      }),
      (Mh.prototype.clearTemporalDisplayables = function () {
        this._temporaryDisplayables = [];
      }),
      (Mh.prototype.addDisplayable = function (t, e) {
        (e ? this._temporaryDisplayables : this._displayables).push(t),
          this.markRedraw();
      }),
      (Mh.prototype.addDisplayables = function (t, e) {
        e = e || !1;
        for (var n = 0; n < t.length; n++) this.addDisplayable(t[n], e);
      }),
      (Mh.prototype.getDisplayables = function () {
        return this._displayables;
      }),
      (Mh.prototype.getTemporalDisplayables = function () {
        return this._temporaryDisplayables;
      }),
      (Mh.prototype.eachPendingDisplayable = function (t) {
        for (var e = this._cursor; e < this._displayables.length; e++)
          t && t(this._displayables[e]);
        for (e = 0; e < this._temporaryDisplayables.length; e++)
          t && t(this._temporaryDisplayables[e]);
      }),
      (Mh.prototype.update = function () {
        this.updateTransform();
        for (var t, e = this._cursor; e < this._displayables.length; e++)
          ((t = this._displayables[e]).parent = this),
            t.update(),
            (t.parent = null);
        for (e = 0; e < this._temporaryDisplayables.length; e++)
          ((t = this._temporaryDisplayables[e]).parent = this),
            t.update(),
            (t.parent = null);
      }),
      (Mh.prototype.getBoundingRect = function () {
        if (!this._rect) {
          for (
            var t = new W(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0;
            e < this._displayables.length;
            e++
          ) {
            var n = this._displayables[e],
              i = n.getBoundingRect().clone();
            n.needLocalTransform() && i.applyTransform(n.getLocalTransform(Sh)),
              t.union(i);
          }
          this._rect = t;
        }
        return this._rect;
      }),
      (Mh.prototype.contain = function (t, e) {
        var n = this.transformCoordToLocal(t, e);
        if (this.getBoundingRect().contain(n[0], n[1]))
          for (var i = 0; i < this._displayables.length; i++)
            if (this._displayables[i].contain(t, e)) return !0;
        return !1;
      }),
      Mh);
  function Mh() {
    var t = (null !== bh && bh.apply(this, arguments)) || this;
    return (
      (t.notClear = !0),
      (t.incremental = !0),
      (t._displayables = []),
      (t._temporaryDisplayables = []),
      (t._cursor = 0),
      t
    );
  }
  var Th = ko();
  function Ch(t, e, n, i, r, o, a) {
    var s,
      l,
      u,
      h,
      c,
      p,
      d = !1,
      f =
        (S(r)
          ? ((a = o), (o = r), (r = null))
          : O(r) &&
            ((o = r.cb),
            (a = r.during),
            (d = r.isFrom),
            (l = r.removeOpt),
            (r = r.dataIndex)),
        "leave" === t),
      g =
        (f || e.stopAnimation("leave"),
        (p = t),
        (s = r),
        (l = f ? l || {} : null),
        (i =
          (g = i) && i.getAnimationDelayParams
            ? i.getAnimationDelayParams(e, r)
            : null),
        g &&
          g.ecModel &&
          (u = (u = g.ecModel.getUpdatePayload()) && u.animation),
        (p = "update" === p),
        g && g.isAnimationEnabled()
          ? ((c = h = r = void 0),
            (c = l
              ? ((r = R(l.duration, 200)), (h = R(l.easing, "cubicOut")), 0)
              : ((r = g.getShallow(
                  p ? "animationDurationUpdate" : "animationDuration"
                )),
                (h = g.getShallow(
                  p ? "animationEasingUpdate" : "animationEasing"
                )),
                g.getShallow(p ? "animationDelayUpdate" : "animationDelay"))),
            S(
              (c =
                u &&
                (null != u.duration && (r = u.duration),
                null != u.easing && (h = u.easing),
                null != u.delay)
                  ? u.delay
                  : c)
            ) && (c = c(s, i)),
            { duration: (r = S(r) ? r(s) : r) || 0, delay: c, easing: h })
          : null);
    g && 0 < g.duration
      ? ((p = {
          duration: g.duration,
          delay: g.delay || 0,
          easing: g.easing,
          done: o,
          force: !!o || !!a,
          setToFinal: !f,
          scope: t,
          during: a,
        }),
        d ? e.animateFrom(n, p) : e.animateTo(n, p))
      : (e.stopAnimation(), d || e.attr(n), a && a(1), o && o());
  }
  function Ih(t, e, n, i, r, o) {
    Ch("update", t, e, n, i, r, o);
  }
  function Dh(t, e, n, i, r, o) {
    Ch("enter", t, e, n, i, r, o);
  }
  function kh(t) {
    if (!t.__zr) return !0;
    for (var e = 0; e < t.animators.length; e++)
      if ("leave" === t.animators[e].scope) return !0;
    return !1;
  }
  function Ah(t, e, n, i, r, o) {
    kh(t) || Ch("leave", t, e, n, i, r, o);
  }
  function Ph(t, e, n, i) {
    t.removeTextContent(),
      t.removeTextGuideLine(),
      Ah(t, { style: { opacity: 0 } }, e, n, i);
  }
  function Lh(t, e, n) {
    function i() {
      t.parent && t.parent.remove(t);
    }
    t.isGroup
      ? t.traverse(function (t) {
          t.isGroup || Ph(t, e, n, i);
        })
      : Ph(t, e, n, i);
  }
  function Oh(t) {
    Th(t).oldStyle = t.style;
  }
  var Rh = Math.max,
    Nh = Math.min,
    Eh = {};
  function zh(t) {
    return j.extend(t);
  }
  var Bh = function (t, e) {
    var n,
      i = au(t, e);
    return u(r, (n = iu)), r;
    function r(t) {
      t = n.call(this, t) || this;
      return (
        (t.applyTransform = i.applyTransform), (t.buildPath = i.buildPath), t
      );
    }
  };
  function Fh(t, e) {
    return Bh(t, e);
  }
  function Vh(t, e) {
    Eh[t] = e;
  }
  function Hh(t) {
    if (Eh.hasOwnProperty(t)) return Eh[t];
  }
  function Gh(t, e, n, i) {
    t = new iu(au(t, e));
    return (
      n && ("center" === i && (n = Uh(n, t.getBoundingRect())), Yh(t, n)), t
    );
  }
  function Wh(t, e, n) {
    var i = new vs({
      style: { image: t, x: e.x, y: e.y, width: e.width, height: e.height },
      onload: function (t) {
        "center" === n &&
          ((t = { width: t.width, height: t.height }), i.setStyle(Uh(e, t)));
      },
    });
    return i;
  }
  function Uh(t, e) {
    var e = e.width / e.height,
      n = t.height * e,
      e = n <= t.width ? t.height : (n = t.width) / e;
    return {
      x: t.x + t.width / 2 - n / 2,
      y: t.y + t.height / 2 - e / 2,
      width: n,
      height: e,
    };
  }
  function Xh(t, e) {
    for (var n = [], i = t.length, r = 0; r < i; r++) {
      var o = t[r];
      n.push(o.getUpdatedPathProxy(!0));
    }
    return (
      (e = new j(e)).createPathProxy(),
      (e.buildPath = function (t) {
        var e;
        ou(t) && (t.appendPath(n), (e = t.getContext())) && t.rebuildPath(e, 1);
      }),
      e
    );
  }
  function Yh(t, e) {
    t.applyTransform &&
      ((e = t.getBoundingRect().calculateTransform(e)), t.applyTransform(e));
  }
  function qh(t, e) {
    return ws(t, t, { lineWidth: e }), t;
  }
  var Zh = Ss;
  function jh(t, e) {
    for (var n = Oe([]); t && t !== e; )
      Ne(n, t.getLocalTransform(), n), (t = t.parent);
    return n;
  }
  function Kh(t, e, n) {
    return (
      e && !st(e) && (e = gr.getLocalTransform(e)),
      ee([], t, (e = n ? Fe([], e) : e))
    );
  }
  function $h(t) {
    return !t.isGroup;
  }
  function Qh(t, e, i) {
    var n, r;
    function o(t) {
      var e = { x: t.x, y: t.y, rotation: t.rotation };
      return null != t.shape && (e.shape = L({}, t.shape)), e;
    }
    t &&
      e &&
      ((n = {}),
      t.traverse(function (t) {
        $h(t) && t.anid && (n[t.anid] = t);
      }),
      (r = n),
      e.traverse(function (t) {
        var e, n;
        $h(t) &&
          t.anid &&
          (e = r[t.anid]) &&
          ((n = o(t)), t.attr(o(e)), Ih(t, n, i, D(t).dataIndex));
      }));
  }
  function Jh(t, n) {
    return F(t, function (t) {
      var e = t[0],
        e = Rh(e, n.x),
        t = ((e = Nh(e, n.x + n.width)), t[1]),
        t = Rh(t, n.y);
      return [e, Nh(t, n.y + n.height)];
    });
  }
  function tc(t, e) {
    var n = Rh(t.x, e.x),
      i = Nh(t.x + t.width, e.x + e.width),
      r = Rh(t.y, e.y),
      t = Nh(t.y + t.height, e.y + e.height);
    if (n <= i && r <= t) return { x: n, y: r, width: i - n, height: t - r };
  }
  function ec(t, e, n) {
    var e = L({ rectHover: !0 }, e),
      i = (e.style = { strokeNoScale: !0 });
    if (((n = n || { x: -1, y: -1, width: 2, height: 2 }), t))
      return 0 === t.indexOf("image://")
        ? ((i.image = t.slice(8)), B(i, n), new vs(e))
        : Gh(t.replace("path://", ""), e, n, "center");
  }
  function nc(t, e, n, i, r, o, a, s) {
    var l,
      n = n - t,
      i = i - e,
      a = a - r,
      s = s - o,
      u = a * i - n * s;
    return !(
      ((l = u) <= 1e-6 && -1e-6 <= l) ||
      (r = ((l = t - r) * i - n * (t = e - o)) / u) < 0 ||
      1 < r ||
      (i = (l * s - a * t) / u) < 0 ||
      1 < i
    );
  }
  function ic(t) {
    var e = t.itemTooltipOption,
      n = t.componentModel,
      i = t.itemName,
      e = H(e) ? { formatter: e } : e,
      r = n.mainType,
      n = n.componentIndex,
      o = { componentType: r, name: i, $vars: ["name"] },
      a = ((o[r + "Index"] = n), t.formatterParamsExtra),
      t =
        (a &&
          E(ht(a), function (t) {
            Bt(o, t) || ((o[t] = a[t]), o.$vars.push(t));
          }),
        D(t.el));
    (t.componentMainType = r),
      (t.componentIndex = n),
      (t.tooltipConfig = {
        name: i,
        option: B({ content: i, formatterParams: o }, e),
      });
  }
  function rc(t, e) {
    var n;
    (n = t.isGroup ? e(t) : n) || t.traverse(e);
  }
  function oc(t, e) {
    if (t)
      if (V(t)) for (var n = 0; n < t.length; n++) rc(t[n], e);
      else rc(t, e);
  }
  Vh("circle", uu),
    Vh("ellipse", du),
    Vh("sector", Au),
    Vh("ring", Ru),
    Vh("polygon", Fu),
    Vh("polyline", Wu),
    Vh("rect", Is),
    Vh("line", Zu),
    Vh("bezierCurve", th),
    Vh("arc", rh);
  var ac = Object.freeze({
      __proto__: null,
      Arc: rh,
      BezierCurve: th,
      BoundingRect: W,
      Circle: uu,
      CompoundPath: sh,
      Ellipse: du,
      Group: Fr,
      Image: vs,
      IncrementalDisplayable: n,
      Line: Zu,
      LinearGradient: ph,
      OrientedBoundingRect: xh,
      Path: j,
      Point: z,
      Polygon: Fu,
      Polyline: Wu,
      RadialGradient: uh,
      Rect: Is,
      Ring: Ru,
      Sector: Au,
      Text: Ls,
      applyTransform: Kh,
      clipPointsByRect: Jh,
      clipRectByRect: tc,
      createIcon: ec,
      extendPath: Fh,
      extendShape: zh,
      getShapeClass: Hh,
      getTransform: jh,
      groupTransition: Qh,
      initProps: Dh,
      isElementRemoved: kh,
      lineLineIntersect: nc,
      linePolygonIntersect: function (t, e, n, i, r) {
        for (var o = 0, a = r[r.length - 1]; o < r.length; o++) {
          var s = r[o];
          if (nc(t, e, n, i, s[0], s[1], a[0], a[1])) return !0;
          a = s;
        }
      },
      makeImage: Wh,
      makePath: Gh,
      mergePath: Xh,
      registerShape: Vh,
      removeElement: Ah,
      removeElementWithFadeOut: Lh,
      resizePath: Yh,
      setTooltipConfig: ic,
      subPixelOptimize: Zh,
      subPixelOptimizeLine: qh,
      subPixelOptimizeRect: function (t) {
        return bs(t.shape, t.shape, t.style), t;
      },
      transformDirection: function (t, e, n) {
        var i =
            0 === e[4] || 0 === e[5] || 0 === e[0]
              ? 1
              : Math.abs((2 * e[4]) / e[0]),
          r =
            0 === e[4] || 0 === e[5] || 0 === e[2]
              ? 1
              : Math.abs((2 * e[4]) / e[2]),
          i = Kh(
            [
              "left" === t ? -i : "right" === t ? i : 0,
              "top" === t ? -r : "bottom" === t ? r : 0,
            ],
            e,
            n
          );
        return Math.abs(i[0]) > Math.abs(i[1])
          ? 0 < i[0]
            ? "right"
            : "left"
          : 0 < i[1]
          ? "bottom"
          : "top";
      },
      traverseElements: oc,
      updateProps: Ih,
    }),
    sc = {};
  function lc(t, e) {
    for (var n = 0; n < $s.length; n++) {
      var i = $s[n],
        r = e[i],
        i = t.ensureState(i);
      (i.style = i.style || {}), (i.style.text = r);
    }
    var o = t.currentStates.slice();
    t.clearStates(!0), t.setStyle({ text: e.normal }), t.useStates(o, !0);
  }
  function uc(t, e, n) {
    for (
      var i,
        r = t.labelFetcher,
        o = t.labelDataIndex,
        a = t.labelDimIndex,
        s = e.normal,
        l = {
          normal: (i =
            null ==
            (i = r
              ? r.getFormattedLabel(
                  o,
                  "normal",
                  null,
                  a,
                  s && s.get("formatter"),
                  null != n ? { interpolatedValue: n } : null
                )
              : i)
              ? S(t.defaultText)
                ? t.defaultText(o, t, n)
                : t.defaultText
              : i),
        },
        u = 0;
      u < $s.length;
      u++
    ) {
      var h = $s[u],
        c = e[h];
      l[h] = R(
        r ? r.getFormattedLabel(o, h, null, a, c && c.get("formatter")) : null,
        i
      );
    }
    return l;
  }
  function hc(t, e, n, i) {
    n = n || sc;
    for (var r = t instanceof Ls, o = !1, a = 0; a < Qs.length; a++)
      if ((p = e[Qs[a]]) && p.getShallow("show")) {
        o = !0;
        break;
      }
    var s = r ? t : t.getTextContent();
    if (o) {
      r ||
        (s || ((s = new Ls()), t.setTextContent(s)),
        t.stateProxy && (s.stateProxy = t.stateProxy));
      var l = uc(n, e),
        u = e.normal,
        h = !!u.getShallow("show"),
        c = pc(u, i && i.normal, n, !1, !r);
      for (
        c.text = l.normal, r || t.setTextConfig(dc(u, n, !1)), a = 0;
        a < $s.length;
        a++
      ) {
        var p,
          d,
          f,
          g = $s[a];
        (p = e[g]) &&
          ((d = s.ensureState(g)),
          (f = !!R(p.getShallow("show"), h)) != h && (d.ignore = !f),
          (d.style = pc(p, i && i[g], n, !0, !r)),
          (d.style.text = l[g]),
          r || (t.ensureState(g).textConfig = dc(p, n, !0)));
      }
      (s.silent = !!u.getShallow("silent")),
        null != s.style.x && (c.x = s.style.x),
        null != s.style.y && (c.y = s.style.y),
        (s.ignore = !h),
        s.useStyle(c),
        s.dirty(),
        n.enableTextSetter &&
          (vc(s).setLabelText = function (t) {
            t = uc(n, e, t);
            lc(s, t);
          });
    } else s && (s.ignore = !0);
    t.dirty();
  }
  function cc(t, e) {
    for (
      var n = { normal: t.getModel((e = e || "label")) }, i = 0;
      i < $s.length;
      i++
    ) {
      var r = $s[i];
      n[r] = t.getModel([r, e]);
    }
    return n;
  }
  function pc(t, e, n, i, r) {
    var o,
      a = {},
      s = a,
      l = t,
      u = n,
      h = i,
      c = r;
    u = u || sc;
    var p,
      t = l.ecModel,
      d = t && t.option.textStyle,
      f = (function (t) {
        for (var e; t && t !== t.ecModel; ) {
          var n = (t.option || sc).rich;
          if (n) {
            e = e || {};
            for (var i = ht(n), r = 0; r < i.length; r++) e[i[r]] = 1;
          }
          t = t.parentModel;
        }
        return e;
      })(l);
    if (f)
      for (var g in ((p = {}), f))
        f.hasOwnProperty(g) &&
          ((o = l.getModel(["rich", g])),
          mc((p[g] = {}), o, d, u, h, c, !1, !0));
    return (
      p && (s.rich = p),
      (t = l.get("overflow")) && (s.overflow = t),
      null != (t = l.get("minMargin")) && (s.margin = t),
      mc(s, l, d, u, h, c, !0, !1),
      e && L(a, e),
      a
    );
  }
  function dc(t, e, n) {
    e = e || {};
    var i = {},
      r = t.getShallow("rotate"),
      o = R(t.getShallow("distance"), n ? null : 5),
      a = t.getShallow("offset");
    return (
      null !=
        (n =
          "outside" === (n = t.getShallow("position") || (n ? null : "inside"))
            ? e.defaultOutsidePosition || "top"
            : n) && (i.position = n),
      null != a && (i.offset = a),
      null != r && ((r *= Math.PI / 180), (i.rotation = r)),
      null != o && (i.distance = o),
      (i.outsideFill =
        "inherit" === t.get("color") ? e.inheritColor || null : "auto"),
      i
    );
  }
  var fc = [
      "fontStyle",
      "fontWeight",
      "fontSize",
      "fontFamily",
      "textShadowColor",
      "textShadowBlur",
      "textShadowOffsetX",
      "textShadowOffsetY",
    ],
    gc = [
      "align",
      "lineHeight",
      "width",
      "height",
      "tag",
      "verticalAlign",
      "ellipsis",
    ],
    yc = [
      "padding",
      "borderWidth",
      "borderRadius",
      "borderDashOffset",
      "backgroundColor",
      "borderColor",
      "shadowColor",
      "shadowBlur",
      "shadowOffsetX",
      "shadowOffsetY",
    ];
  function mc(t, e, n, i, r, o, a, s) {
    n = (!r && n) || sc;
    var l = i && i.inheritColor,
      u = e.getShallow("color"),
      h = e.getShallow("textBorderColor"),
      c = R(e.getShallow("opacity"), n.opacity),
      u =
        (("inherit" !== u && "auto" !== u) || (u = l || null),
        ("inherit" !== h && "auto" !== h) || (h = l || null),
        o || ((u = u || n.color), (h = h || n.textBorderColor)),
        null != u && (t.fill = u),
        null != h && (t.stroke = h),
        R(e.getShallow("textBorderWidth"), n.textBorderWidth)),
      h =
        (null != u && (t.lineWidth = u),
        R(e.getShallow("textBorderType"), n.textBorderType)),
      u =
        (null != h && (t.lineDash = h),
        R(e.getShallow("textBorderDashOffset"), n.textBorderDashOffset));
    null != u && (t.lineDashOffset = u),
      null != (c = r || null != c || s ? c : i && i.defaultOpacity) &&
        (t.opacity = c),
      r || o || (null == t.fill && i.inheritColor && (t.fill = i.inheritColor));
    for (var p = 0; p < fc.length; p++) {
      var d = fc[p];
      null != (f = R(e.getShallow(d), n[d])) && (t[d] = f);
    }
    for (p = 0; p < gc.length; p++)
      (d = gc[p]), null != (f = e.getShallow(d)) && (t[d] = f);
    if (
      (null == t.verticalAlign &&
        null != (h = e.getShallow("baseline")) &&
        (t.verticalAlign = h),
      !a || !i.disableBox)
    ) {
      for (p = 0; p < yc.length; p++) {
        var f,
          d = yc[p];
        null != (f = e.getShallow(d)) && (t[d] = f);
      }
      u = e.getShallow("borderType");
      null != u && (t.borderDash = u),
        ("auto" !== t.backgroundColor && "inherit" !== t.backgroundColor) ||
          !l ||
          (t.backgroundColor = l),
        ("auto" !== t.borderColor && "inherit" !== t.borderColor) ||
          !l ||
          (t.borderColor = l);
    }
  }
  var vc = ko();
  var _c = ["textStyle", "color"],
    xc = [
      "fontStyle",
      "fontWeight",
      "fontSize",
      "fontFamily",
      "padding",
      "lineHeight",
      "rich",
      "width",
      "height",
      "overflow",
    ],
    wc = new Ls(),
    Zh =
      ((bc.prototype.getTextColor = function (t) {
        var e = this.ecModel;
        return this.getShallow("color") || (!t && e ? e.get(_c) : null);
      }),
      (bc.prototype.getFont = function () {
        return (
          (t = {
            fontStyle: this.getShallow("fontStyle"),
            fontWeight: this.getShallow("fontWeight"),
            fontSize: this.getShallow("fontSize"),
            fontFamily: this.getShallow("fontFamily"),
          }),
          (e = (e = this.ecModel) && e.getModel("textStyle")),
          Ct(
            [
              t.fontStyle || (e && e.getShallow("fontStyle")) || "",
              t.fontWeight || (e && e.getShallow("fontWeight")) || "",
              (t.fontSize || (e && e.getShallow("fontSize")) || 12) + "px",
              t.fontFamily || (e && e.getShallow("fontFamily")) || "sans-serif",
            ].join(" ")
          )
        );
        var t, e;
      }),
      (bc.prototype.getTextRect = function (t) {
        for (
          var e = {
              text: t,
              verticalAlign:
                this.getShallow("verticalAlign") || this.getShallow("baseline"),
            },
            n = 0;
          n < xc.length;
          n++
        )
          e[xc[n]] = this.getShallow(xc[n]);
        return wc.useStyle(e), wc.update(), wc.getBoundingRect();
      }),
      bc);
  function bc() {}
  var Sc = [
      ["lineWidth", "width"],
      ["stroke", "color"],
      ["opacity"],
      ["shadowBlur"],
      ["shadowOffsetX"],
      ["shadowOffsetY"],
      ["shadowColor"],
      ["lineDash", "type"],
      ["lineDashOffset", "dashOffset"],
      ["lineCap", "cap"],
      ["lineJoin", "join"],
      ["miterLimit"],
    ],
    Mc = qo(Sc),
    Tc =
      ((Cc.prototype.getLineStyle = function (t) {
        return Mc(this, t);
      }),
      Cc);
  function Cc() {}
  var Ic = [
      ["fill", "color"],
      ["stroke", "borderColor"],
      ["lineWidth", "borderWidth"],
      ["opacity"],
      ["shadowBlur"],
      ["shadowOffsetX"],
      ["shadowOffsetY"],
      ["shadowColor"],
      ["lineDash", "borderType"],
      ["lineDashOffset", "borderDashOffset"],
      ["lineCap", "borderCap"],
      ["lineJoin", "borderJoin"],
      ["miterLimit", "borderMiterLimit"],
    ],
    Dc = qo(Ic),
    kc =
      ((Ac.prototype.getItemStyle = function (t, e) {
        return Dc(this, t, e);
      }),
      Ac);
  function Ac() {}
  (Oc.prototype.init = function (t, e, n) {
    for (var i = 3; i < arguments.length; i++) i - 3, 0;
  }),
    (Oc.prototype.mergeOption = function (t, e) {
      d(this.option, t, !0);
    }),
    (Oc.prototype.get = function (t, e) {
      return null == t
        ? this.option
        : this._doGet(this.parsePath(t), !e && this.parentModel);
    }),
    (Oc.prototype.getShallow = function (t, e) {
      var n = this.option,
        n = null == n ? n : n[t];
      return (
        null != n || e || ((e = this.parentModel) && (n = e.getShallow(t))), n
      );
    }),
    (Oc.prototype.getModel = function (t, e) {
      var n = null != t,
        t = n ? this.parsePath(t) : null;
      return new Oc(
        n ? this._doGet(t) : this.option,
        (e =
          e ||
          (this.parentModel &&
            this.parentModel.getModel(this.resolveParentPath(t)))),
        this.ecModel
      );
    }),
    (Oc.prototype.isEmpty = function () {
      return null == this.option;
    }),
    (Oc.prototype.restoreData = function () {}),
    (Oc.prototype.clone = function () {
      return new this.constructor(y(this.option));
    }),
    (Oc.prototype.parsePath = function (t) {
      return "string" == typeof t ? t.split(".") : t;
    }),
    (Oc.prototype.resolveParentPath = function (t) {
      return t;
    }),
    (Oc.prototype.isAnimationEnabled = function () {
      if (!b.node && this.option)
        return null != this.option.animation
          ? !!this.option.animation
          : this.parentModel
          ? this.parentModel.isAnimationEnabled()
          : void 0;
    }),
    (Oc.prototype._doGet = function (t, e) {
      var n = this.option;
      if (t) {
        for (
          var i = 0;
          i < t.length &&
          (!t[i] || null != (n = n && "object" == typeof n ? n[t[i]] : null));
          i++
        );
        null == n &&
          e &&
          (n = e._doGet(this.resolveParentPath(t), e.parentModel));
      }
      return n;
    });
  var Pc,
    Lc = Oc;
  function Oc(t, e, n) {
    (this.parentModel = e), (this.ecModel = n), (this.option = t);
  }
  Ho(Lc),
    (jc = Lc),
    (Pc = ["__\0is_clz", Wo++].join("_")),
    (jc.prototype[Pc] = !0),
    (jc.isInstance = function (t) {
      return !(!t || !t[Pc]);
    }),
    at(Lc, Tc),
    at(Lc, kc),
    at(Lc, jo),
    at(Lc, Zh);
  var Rc = Math.round(10 * Math.random());
  function Nc(t) {
    return [t || "", Rc++].join("_");
  }
  function Ec(t, e) {
    return d(d({}, t, !0), e, !0);
  }
  var zc = "ZH",
    Bc = "EN",
    Fc = Bc,
    Vc = {},
    Hc = {},
    Gc =
      b.domSupported &&
      -1 <
        (
          document.documentElement.lang ||
          navigator.language ||
          navigator.browserLanguage
        )
          .toUpperCase()
          .indexOf(zc)
        ? zc
        : Fc;
  function Wc(t, e) {
    (t = t.toUpperCase()), (Hc[t] = new Lc(e)), (Vc[t] = e);
  }
  Wc(Bc, {
    time: {
      month: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      monthAbbr: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      dayOfWeek: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      dayOfWeekAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    },
    legend: { selector: { all: "All", inverse: "Inv" } },
    toolbox: {
      brush: {
        title: {
          rect: "Box Select",
          polygon: "Lasso Select",
          lineX: "Horizontally Select",
          lineY: "Vertically Select",
          keep: "Keep Selections",
          clear: "Clear Selections",
        },
      },
      dataView: { title: "Data View", lang: ["Data View", "Close", "Refresh"] },
      dataZoom: { title: { zoom: "Zoom", back: "Zoom Reset" } },
      magicType: {
        title: {
          line: "Switch to Line Chart",
          bar: "Switch to Bar Chart",
          stack: "Stack",
          tiled: "Tile",
        },
      },
      restore: { title: "Restore" },
      saveAsImage: {
        title: "Save as Image",
        lang: ["Right Click to Save Image"],
      },
    },
    series: {
      typeNames: {
        pie: "Pie chart",
        bar: "Bar chart",
        line: "Line chart",
        scatter: "Scatter plot",
        effectScatter: "Ripple scatter plot",
        radar: "Radar chart",
        tree: "Tree",
        treemap: "Treemap",
        boxplot: "Boxplot",
        candlestick: "Candlestick",
        k: "K line chart",
        heatmap: "Heat map",
        map: "Map",
        parallel: "Parallel coordinate map",
        lines: "Line graph",
        graph: "Relationship graph",
        sankey: "Sankey diagram",
        funnel: "Funnel chart",
        gauge: "Gauge",
        pictorialBar: "Pictorial bar",
        themeRiver: "Theme River Map",
        sunburst: "Sunburst",
      },
    },
    aria: {
      general: {
        withTitle: 'This is a chart about "{title}"',
        withoutTitle: "This is a chart",
      },
      series: {
        single: {
          prefix: "",
          withName: " with type {seriesType} named {seriesName}.",
          withoutName: " with type {seriesType}.",
        },
        multiple: {
          prefix: ". It consists of {seriesCount} series count.",
          withName:
            " The {seriesId} series is a {seriesType} representing {seriesName}.",
          withoutName: " The {seriesId} series is a {seriesType}.",
          separator: { middle: "", end: "" },
        },
      },
      data: {
        allData: "The data is as follows: ",
        partialData: "The first {displayCnt} items are: ",
        withName: "the data for {name} is {value}",
        withoutName: "{value}",
        separator: { middle: ", ", end: ". " },
      },
    },
  }),
    Wc(zc, {
      time: {
        month: [
          "一月",
          "二月",
          "三月",
          "四月",
          "五月",
          "六月",
          "七月",
          "八月",
          "九月",
          "十月",
          "十一月",
          "十二月",
        ],
        monthAbbr: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        dayOfWeek: [
          "星期日",
          "星期一",
          "星期二",
          "星期三",
          "星期四",
          "星期五",
          "星期六",
        ],
        dayOfWeekAbbr: ["日", "一", "二", "三", "四", "五", "六"],
      },
      legend: { selector: { all: "全选", inverse: "反选" } },
      toolbox: {
        brush: {
          title: {
            rect: "矩形选择",
            polygon: "圈选",
            lineX: "横向选择",
            lineY: "纵向选择",
            keep: "保持选择",
            clear: "清除选择",
          },
        },
        dataView: { title: "数据视图", lang: ["数据视图", "关闭", "刷新"] },
        dataZoom: { title: { zoom: "区域缩放", back: "区域缩放还原" } },
        magicType: {
          title: {
            line: "切换为折线图",
            bar: "切换为柱状图",
            stack: "切换为堆叠",
            tiled: "切换为平铺",
          },
        },
        restore: { title: "还原" },
        saveAsImage: { title: "保存为图片", lang: ["右键另存为图片"] },
      },
      series: {
        typeNames: {
          pie: "饼图",
          bar: "柱状图",
          line: "折线图",
          scatter: "散点图",
          effectScatter: "涟漪散点图",
          radar: "雷达图",
          tree: "树图",
          treemap: "矩形树图",
          boxplot: "箱型图",
          candlestick: "K线图",
          k: "K线图",
          heatmap: "热力图",
          map: "地图",
          parallel: "平行坐标图",
          lines: "线图",
          graph: "关系图",
          sankey: "桑基图",
          funnel: "漏斗图",
          gauge: "仪表盘图",
          pictorialBar: "象形柱图",
          themeRiver: "主题河流图",
          sunburst: "旭日图",
        },
      },
      aria: {
        general: {
          withTitle: "这是一个关于“{title}”的图表。",
          withoutTitle: "这是一个图表，",
        },
        series: {
          single: {
            prefix: "",
            withName: "图表类型是{seriesType}，表示{seriesName}。",
            withoutName: "图表类型是{seriesType}。",
          },
          multiple: {
            prefix: "它由{seriesCount}个图表系列组成。",
            withName:
              "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
            withoutName: "第{seriesId}个系列是一个{seriesType}，",
            separator: { middle: "；", end: "。" },
          },
        },
        data: {
          allData: "其数据是——",
          partialData: "其中，前{displayCnt}项是——",
          withName: "{name}的数据是{value}",
          withoutName: "{value}",
          separator: { middle: "，", end: "" },
        },
      },
    });
  var Uc = 1e3,
    Xc = 60 * Uc,
    Yc = 60 * Xc,
    qc = 24 * Yc,
    Wo = 365 * qc,
    Zc = {
      year: "{yyyy}",
      month: "{MMM}",
      day: "{d}",
      hour: "{HH}:{mm}",
      minute: "{HH}:{mm}",
      second: "{HH}:{mm}:{ss}",
      millisecond: "{HH}:{mm}:{ss} {SSS}",
      none: "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss} {SSS}",
    },
    jc = "{yyyy}-{MM}-{dd}",
    Kc = {
      year: "{yyyy}",
      month: "{yyyy}-{MM}",
      day: jc,
      hour: jc + " " + Zc.hour,
      minute: jc + " " + Zc.minute,
      second: jc + " " + Zc.second,
      millisecond: Zc.none,
    },
    $c = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
    Qc = [
      "year",
      "half-year",
      "quarter",
      "month",
      "week",
      "half-week",
      "day",
      "half-day",
      "quarter-day",
      "hour",
      "minute",
      "second",
      "millisecond",
    ];
  function Jc(t, e) {
    return "0000".substr(0, e - (t += "").length) + t;
  }
  function tp(t) {
    switch (t) {
      case "half-year":
      case "quarter":
        return "month";
      case "week":
      case "half-week":
        return "day";
      case "half-day":
      case "quarter-day":
        return "hour";
      default:
        return t;
    }
  }
  function ep(t, e, n, i) {
    var t = oo(t),
      r = t[rp(n)](),
      o = t[op(n)]() + 1,
      a = Math.floor((o - 1) / 3) + 1,
      s = t[ap(n)](),
      l = t["get" + (n ? "UTC" : "") + "Day"](),
      u = t[sp(n)](),
      h = ((u - 1) % 12) + 1,
      c = t[lp(n)](),
      p = t[up(n)](),
      t = t[hp(n)](),
      n = (i instanceof Lc ? i : Hc[i || Gc] || Hc[Fc]).getModel("time"),
      i = n.get("month"),
      d = n.get("monthAbbr"),
      f = n.get("dayOfWeek"),
      n = n.get("dayOfWeekAbbr");
    return (e || "")
      .replace(/{yyyy}/g, r + "")
      .replace(/{yy}/g, Jc((r % 100) + "", 2))
      .replace(/{Q}/g, a + "")
      .replace(/{MMMM}/g, i[o - 1])
      .replace(/{MMM}/g, d[o - 1])
      .replace(/{MM}/g, Jc(o, 2))
      .replace(/{M}/g, o + "")
      .replace(/{dd}/g, Jc(s, 2))
      .replace(/{d}/g, s + "")
      .replace(/{eeee}/g, f[l])
      .replace(/{ee}/g, n[l])
      .replace(/{e}/g, l + "")
      .replace(/{HH}/g, Jc(u, 2))
      .replace(/{H}/g, u + "")
      .replace(/{hh}/g, Jc(h + "", 2))
      .replace(/{h}/g, h + "")
      .replace(/{mm}/g, Jc(c, 2))
      .replace(/{m}/g, c + "")
      .replace(/{ss}/g, Jc(p, 2))
      .replace(/{s}/g, p + "")
      .replace(/{SSS}/g, Jc(t, 3))
      .replace(/{S}/g, t + "");
  }
  function np(t, e) {
    var t = oo(t),
      n = t[op(e)]() + 1,
      i = t[ap(e)](),
      r = t[sp(e)](),
      o = t[lp(e)](),
      a = t[up(e)](),
      t = 0 === t[hp(e)](),
      e = t && 0 === a,
      a = e && 0 === o,
      o = a && 0 === r,
      r = o && 1 === i;
    return r && 1 === n
      ? "year"
      : r
      ? "month"
      : o
      ? "day"
      : a
      ? "hour"
      : e
      ? "minute"
      : t
      ? "second"
      : "millisecond";
  }
  function ip(t, e, n) {
    var i = G(t) ? oo(t) : t;
    switch ((e = e || np(t, n))) {
      case "year":
        return i[rp(n)]();
      case "half-year":
        return 6 <= i[op(n)]() ? 1 : 0;
      case "quarter":
        return Math.floor((i[op(n)]() + 1) / 4);
      case "month":
        return i[op(n)]();
      case "day":
        return i[ap(n)]();
      case "half-day":
        return i[sp(n)]() / 24;
      case "hour":
        return i[sp(n)]();
      case "minute":
        return i[lp(n)]();
      case "second":
        return i[up(n)]();
      case "millisecond":
        return i[hp(n)]();
    }
  }
  function rp(t) {
    return t ? "getUTCFullYear" : "getFullYear";
  }
  function op(t) {
    return t ? "getUTCMonth" : "getMonth";
  }
  function ap(t) {
    return t ? "getUTCDate" : "getDate";
  }
  function sp(t) {
    return t ? "getUTCHours" : "getHours";
  }
  function lp(t) {
    return t ? "getUTCMinutes" : "getMinutes";
  }
  function up(t) {
    return t ? "getUTCSeconds" : "getSeconds";
  }
  function hp(t) {
    return t ? "getUTCMilliseconds" : "getMilliseconds";
  }
  function cp(t) {
    return t ? "setUTCMonth" : "setMonth";
  }
  function pp(t) {
    return t ? "setUTCDate" : "setDate";
  }
  function dp(t) {
    return t ? "setUTCHours" : "setHours";
  }
  function fp(t) {
    return t ? "setUTCMinutes" : "setMinutes";
  }
  function gp(t) {
    return t ? "setUTCSeconds" : "setSeconds";
  }
  function yp(t) {
    return t ? "setUTCMilliseconds" : "setMilliseconds";
  }
  function mp(t) {
    var e;
    return ho(t)
      ? (e = (t + "").split("."))[0].replace(
          /(\d{1,3})(?=(?:\d{3})+(?!\d))/g,
          "$1,"
        ) + (1 < e.length ? "." + e[1] : "")
      : H(t)
      ? t
      : "-";
  }
  function vp(t, e) {
    return (
      (t = (t || "").toLowerCase().replace(/-(.)/g, function (t, e) {
        return e.toUpperCase();
      })),
      (t = e ? t && t.charAt(0).toUpperCase() + t.slice(1) : t)
    );
  }
  var _p = Mt;
  function xp(t, e, n) {
    function i(t) {
      return t && Ct(t) ? t : "-";
    }
    function r(t) {
      return null != t && !isNaN(t) && isFinite(t);
    }
    var o = "time" === e,
      a = t instanceof Date;
    if (o || a) {
      var o = o ? oo(t) : t;
      if (!isNaN(+o)) return ep(o, "{yyyy}-{MM}-{dd} {HH}:{mm}:{ss}", n);
      if (a) return "-";
    }
    return "ordinal" === e
      ? dt(t)
        ? i(t)
        : G(t) && r(t)
        ? t + ""
        : "-"
      : r((o = uo(t)))
      ? mp(o)
      : dt(t)
      ? i(t)
      : "boolean" == typeof t
      ? t + ""
      : "-";
  }
  function wp(t, e) {
    return "{" + t + (null == e ? "" : e) + "}";
  }
  var bp = ["a", "b", "c", "d", "e", "f", "g"];
  function Sp(t, e, n) {
    var i = (e = V(e) ? e : [e]).length;
    if (!i) return "";
    for (var r = e[0].$vars || [], o = 0; o < r.length; o++) {
      var a = bp[o];
      t = t.replace(wp(a), wp(a, 0));
    }
    for (var s = 0; s < i; s++)
      for (var l = 0; l < r.length; l++) {
        var u = e[s][r[l]];
        t = t.replace(wp(bp[l], s), n ? _e(u) : u);
      }
    return t;
  }
  function Mp(t, e) {
    var t = H(t) ? { color: t, extraCssText: e } : t || {},
      n = t.color,
      i = t.type,
      r = ((e = t.extraCssText), t.renderMode || "html");
    return n
      ? "html" === r
        ? "subItem" === i
          ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' +
            _e(n) +
            ";" +
            (e || "") +
            '"></span>'
          : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' +
            _e(n) +
            ";" +
            (e || "") +
            '"></span>'
        : {
            renderMode: r,
            content: "{" + (t.markerId || "markerX") + "|}  ",
            style:
              "subItem" === i
                ? { width: 4, height: 4, borderRadius: 2, backgroundColor: n }
                : {
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: n,
                  },
          }
      : "";
  }
  function Tp(t, e) {
    return (
      (e = e || "transparent"),
      H(t) ? t : (O(t) && t.colorStops && (t.colorStops[0] || {}).color) || e
    );
  }
  function Cp(t, e) {
    var n;
    "_blank" === e || "blank" === e
      ? (((n = window.open()).opener = null), (n.location.href = t))
      : window.open(t, e);
  }
  var Ip = E,
    Dp = ["left", "right", "top", "bottom", "width", "height"],
    kp = [
      ["width", "left", "right"],
      ["height", "top", "bottom"],
    ];
  function Ap(a, s, l, u, h) {
    var c = 0,
      p = 0,
      d = (null == u && (u = 1 / 0), null == h && (h = 1 / 0), 0);
    s.eachChild(function (t, e) {
      var n,
        i,
        r,
        o = t.getBoundingRect(),
        e = s.childAt(e + 1),
        e = e && e.getBoundingRect();
      (d =
        "horizontal" === a
          ? ((r = o.width + (e ? -e.x + o.x : 0)),
            (n = c + r) > u || t.newline
              ? ((c = 0), (n = r), (p += d + l), o.height)
              : Math.max(d, o.height))
          : ((r = o.height + (e ? -e.y + o.y : 0)),
            (i = p + r) > h || t.newline
              ? ((c += d + l), (p = 0), (i = r), o.width)
              : Math.max(d, o.width))),
        t.newline ||
          ((t.x = c),
          (t.y = p),
          t.markRedraw(),
          "horizontal" === a ? (c = n + l) : (p = i + l));
    });
  }
  var Pp = Ap;
  function Lp(t, e, n) {
    n = _p(n || 0);
    var i = e.width,
      r = e.height,
      o = Kr(t.left, i),
      a = Kr(t.top, r),
      e = Kr(t.right, i),
      s = Kr(t.bottom, r),
      l = Kr(t.width, i),
      u = Kr(t.height, r),
      h = n[2] + n[0],
      c = n[1] + n[3],
      p = t.aspect;
    switch (
      (isNaN(l) && (l = i - e - c - o),
      isNaN(u) && (u = r - s - h - a),
      null != p &&
        (isNaN(l) && isNaN(u) && (i / r < p ? (l = 0.8 * i) : (u = 0.8 * r)),
        isNaN(l) && (l = p * u),
        isNaN(u)) &&
        (u = l / p),
      isNaN(o) && (o = i - e - l - c),
      isNaN(a) && (a = r - s - u - h),
      t.left || t.right)
    ) {
      case "center":
        o = i / 2 - l / 2 - n[3];
        break;
      case "right":
        o = i - l - c;
    }
    switch (t.top || t.bottom) {
      case "middle":
      case "center":
        a = r / 2 - u / 2 - n[0];
        break;
      case "bottom":
        a = r - u - h;
    }
    (o = o || 0),
      (a = a || 0),
      isNaN(l) && (l = i - c - o - (e || 0)),
      isNaN(u) && (u = r - h - a - (s || 0));
    p = new W(o + n[3], a + n[0], l, u);
    return (p.margin = n), p;
  }
  function Op(t) {
    t = t.layoutMode || t.constructor.layoutMode;
    return O(t) ? t : t ? { type: t } : null;
  }
  function Rp(l, u, t) {
    var h = t && t.ignoreSize,
      t = (V(h) || (h = [h, h]), n(kp[0], 0)),
      e = n(kp[1], 1);
    function n(t, e) {
      var n = {},
        i = 0,
        r = {},
        o = 0;
      if (
        (Ip(t, function (t) {
          r[t] = l[t];
        }),
        Ip(t, function (t) {
          c(u, t) && (n[t] = r[t] = u[t]), p(n, t) && i++, p(r, t) && o++;
        }),
        h[e])
      )
        p(u, t[1]) ? (r[t[2]] = null) : p(u, t[2]) && (r[t[1]] = null);
      else if (2 !== o && i) {
        if (!(2 <= i))
          for (var a = 0; a < t.length; a++) {
            var s = t[a];
            if (!c(n, s) && c(l, s)) {
              n[s] = l[s];
              break;
            }
          }
        return n;
      }
      return r;
    }
    function c(t, e) {
      return t.hasOwnProperty(e);
    }
    function p(t, e) {
      return null != t[e] && "auto" !== t[e];
    }
    function i(t, e, n) {
      Ip(t, function (t) {
        e[t] = n[t];
      });
    }
    i(kp[0], l, t), i(kp[1], l, e);
  }
  function Np(t) {
    return (
      (e = {}),
      (n = t) &&
        e &&
        Ip(Dp, function (t) {
          n.hasOwnProperty(t) && (e[t] = n[t]);
        }),
      e
    );
    var e, n;
  }
  pt(Ap, "vertical"), pt(Ap, "horizontal");
  var Ep,
    zp,
    Bp,
    Fp,
    Vp = ko(),
    g =
      (u(Hp, (Ep = Lc)),
      (Hp.prototype.init = function (t, e, n) {
        this.mergeDefaultAndTheme(t, n);
      }),
      (Hp.prototype.mergeDefaultAndTheme = function (t, e) {
        var n = Op(this),
          i = n ? Np(t) : {};
        d(t, e.getTheme().get(this.mainType)),
          d(t, this.getDefaultOption()),
          n && Rp(t, i, n);
      }),
      (Hp.prototype.mergeOption = function (t, e) {
        d(this.option, t, !0);
        var n = Op(this);
        n && Rp(this.option, t, n);
      }),
      (Hp.prototype.optionUpdated = function (t, e) {}),
      (Hp.prototype.getDefaultOption = function () {
        var t = this.constructor;
        if (!(e = t) || !e[Fo]) return t.defaultOption;
        var e = Vp(this);
        if (!e.defaultOption) {
          for (var n = [], i = t; i; ) {
            var r = i.prototype.defaultOption;
            r && n.push(r), (i = i.superClass);
          }
          for (var o = {}, a = n.length - 1; 0 <= a; a--) o = d(o, n[a], !0);
          e.defaultOption = o;
        }
        return e.defaultOption;
      }),
      (Hp.prototype.getReferringComponents = function (t, e) {
        var n = t + "Id";
        return Ro(
          this.ecModel,
          t,
          { index: this.get(t + "Index", !0), id: this.get(n, !0) },
          e
        );
      }),
      (Hp.prototype.getBoxLayoutParams = function () {
        return {
          left: this.get("left"),
          top: this.get("top"),
          right: this.get("right"),
          bottom: this.get("bottom"),
          width: this.get("width"),
          height: this.get("height"),
        };
      }),
      (Hp.prototype.getZLevelKey = function () {
        return "";
      }),
      (Hp.prototype.setZLevel = function (t) {
        this.option.zlevel = t;
      }),
      (Hp.protoInitialize =
        (((Tc = Hp.prototype).type = "component"),
        (Tc.id = ""),
        (Tc.name = ""),
        (Tc.mainType = ""),
        (Tc.subType = ""),
        void (Tc.componentIndex = 0))),
      Hp);
  function Hp(t, e, n) {
    t = Ep.call(this, t, e, n) || this;
    return (t.uid = Nc("ec_cpt_model")), t;
  }
  function Gp(t, e) {
    return t[e] || (t[e] = { predecessor: [], successor: [] }), t[e];
  }
  Go(g, Lc),
    Yo(g),
    (Fp = {}),
    ((Bp = g).registerSubTypeDefaulter = function (t, e) {
      t = Vo(t);
      Fp[t.main] = e;
    }),
    (Bp.determineSubType = function (t, e) {
      var n,
        i = e.type;
      return (
        i || ((n = Vo(t).main), Bp.hasSubTypes(t) && Fp[n] && (i = Fp[n](e))), i
      );
    }),
    (zp = function (t) {
      var e = [];
      return (
        E(g.getClassesByMainType(t), function (t) {
          e = e.concat(t.dependencies || t.prototype.dependencies || []);
        }),
        (e = F(e, function (t) {
          return Vo(t).main;
        })),
        "dataset" !== t && I(e, "dataset") <= 0 && e.unshift("dataset"),
        e
      );
    }),
    (g.topologicalTravel = function (t, e, n, i) {
      if (t.length) {
        (c = {}),
          (p = []),
          E((h = e), function (n) {
            var e,
              i,
              r = Gp(c, n),
              t =
                ((t = r.originalDeps = zp(n)),
                (e = h),
                (i = []),
                E(t, function (t) {
                  0 <= I(e, t) && i.push(t);
                }),
                i);
            (r.entryCount = t.length),
              0 === r.entryCount && p.push(n),
              E(t, function (t) {
                I(r.predecessor, t) < 0 && r.predecessor.push(t);
                var e = Gp(c, t);
                I(e.successor, t) < 0 && e.successor.push(n);
              });
          });
        var e = { graph: c, noEntryList: p },
          r = e.graph,
          o = e.noEntryList,
          a = {};
        for (
          E(t, function (t) {
            a[t] = !0;
          });
          o.length;

        ) {
          var s = o.pop(),
            l = r[s],
            u = !!a[s];
          u && (n.call(i, s, l.originalDeps.slice()), delete a[s]),
            E(l.successor, u ? f : d);
        }
        E(a, function () {
          throw new Error("");
        });
      }
      var h, c, p;
      function d(t) {
        r[t].entryCount--, 0 === r[t].entryCount && o.push(t);
      }
      function f(t) {
        (a[t] = !0), d(t);
      }
    });
  var kc = "",
    jo =
      ("undefined" != typeof navigator && (kc = navigator.platform || ""),
      "rgba(0, 0, 0, 0.2)"),
    Wp = {
      darkMode: "auto",
      colorBy: "series",
      color: [
        "#5470c6",
        "#91cc75",
        "#fac858",
        "#ee6666",
        "#73c0de",
        "#3ba272",
        "#fc8452",
        "#9a60b4",
        "#ea7ccc",
      ],
      gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
      aria: {
        decal: {
          decals: [
            {
              color: jo,
              dashArrayX: [1, 0],
              dashArrayY: [2, 5],
              symbolSize: 1,
              rotation: Math.PI / 6,
            },
            {
              color: jo,
              symbol: "circle",
              dashArrayX: [
                [8, 8],
                [0, 8, 8, 0],
              ],
              dashArrayY: [6, 0],
              symbolSize: 0.8,
            },
            {
              color: jo,
              dashArrayX: [1, 0],
              dashArrayY: [4, 3],
              rotation: -Math.PI / 4,
            },
            {
              color: jo,
              dashArrayX: [
                [6, 6],
                [0, 6, 6, 0],
              ],
              dashArrayY: [6, 0],
            },
            {
              color: jo,
              dashArrayX: [
                [1, 0],
                [1, 6],
              ],
              dashArrayY: [1, 0, 6, 0],
              rotation: Math.PI / 4,
            },
            {
              color: jo,
              symbol: "triangle",
              dashArrayX: [
                [9, 9],
                [0, 9, 9, 0],
              ],
              dashArrayY: [7, 2],
              symbolSize: 0.75,
            },
          ],
        },
      },
      textStyle: {
        fontFamily: kc.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "normal",
      },
      blendMode: null,
      stateAnimation: { duration: 300, easing: "cubicOut" },
      animation: "auto",
      animationDuration: 1e3,
      animationDurationUpdate: 500,
      animationEasing: "cubicInOut",
      animationEasingUpdate: "cubicInOut",
      animationThreshold: 2e3,
      progressiveThreshold: 3e3,
      progressive: 400,
      hoverLayerThreshold: 3e3,
      useUTC: !1,
    },
    Up = N([
      "tooltip",
      "label",
      "itemName",
      "itemId",
      "itemGroupId",
      "seriesName",
    ]),
    Xp = "original",
    Yp = "arrayRows",
    qp = "objectRows",
    Zp = "keyedColumns",
    jp = "typedArray",
    Kp = "unknown",
    $p = "column",
    Qp = "row",
    Jp = { Must: 1, Might: 2, Not: 3 },
    td = ko();
  function ed(n, t, e) {
    var r,
      i,
      o,
      a,
      s,
      l = {},
      u = id(t);
    return (
      u &&
        n &&
        ((o = []),
        (a = []),
        (t = t.ecModel),
        (t = td(t).datasetMap),
        (u = u.uid + "_" + e.seriesLayoutBy),
        E((n = n.slice()), function (t, e) {
          t = O(t) ? t : (n[e] = { name: t });
          "ordinal" === t.type && null == r && ((r = e), (i = c(t))),
            (l[t.name] = []);
        }),
        (s = t.get(u) || t.set(u, { categoryWayDim: i, valueWayDim: 0 })),
        E(n, function (t, e) {
          var n,
            i = t.name,
            t = c(t);
          null == r
            ? ((n = s.valueWayDim),
              h(l[i], n, t),
              h(a, n, t),
              (s.valueWayDim += t))
            : r === e
            ? (h(l[i], 0, t), h(o, 0, t))
            : ((n = s.categoryWayDim),
              h(l[i], n, t),
              h(a, n, t),
              (s.categoryWayDim += t));
        }),
        o.length && (l.itemName = o),
        a.length) &&
        (l.seriesName = a),
      l
    );
    function h(t, e, n) {
      for (var i = 0; i < n; i++) t.push(e + i);
    }
    function c(t) {
      t = t.dimsDef;
      return t ? t.length : 1;
    }
  }
  function nd(t, l, u) {
    var h,
      c,
      p,
      e = {};
    return (
      id(t) &&
        ((c = l.sourceFormat),
        (p = l.dimensionsDefine),
        (c !== qp && c !== Zp) ||
          E(p, function (t, e) {
            "name" === (O(t) ? t.name : t) && (h = e);
          }),
        (t = (function () {
          for (
            var t = {}, e = {}, n = [], i = 0, r = Math.min(5, u);
            i < r;
            i++
          ) {
            var o = od(l.data, c, l.seriesLayoutBy, p, l.startIndex, i),
              a = (n.push(o), o === Jp.Not);
            if (
              (a && null == t.v && i !== h && (t.v = i),
              (null != t.n && t.n !== t.v && (a || n[t.n] !== Jp.Not)) ||
                (t.n = i),
              s(t) && n[t.n] !== Jp.Not)
            )
              return t;
            a ||
              (o === Jp.Might && null == e.v && i !== h && (e.v = i),
              null != e.n && e.n !== e.v) ||
              (e.n = i);
          }
          function s(t) {
            return null != t.v && null != t.n;
          }
          return s(t) ? t : s(e) ? e : null;
        })())) &&
        ((e.value = [t.v]),
        (t = null != h ? h : t.n),
        (e.itemName = [t]),
        (e.seriesName = [t])),
      e
    );
  }
  function id(t) {
    if (!t.get("data", !0))
      return Ro(
        t.ecModel,
        "dataset",
        { index: t.get("datasetIndex", !0), id: t.get("datasetId", !0) },
        Oo
      ).models[0];
  }
  function rd(t, e) {
    return od(
      t.data,
      t.sourceFormat,
      t.seriesLayoutBy,
      t.dimensionsDefine,
      t.startIndex,
      e
    );
  }
  function od(t, e, n, i, r, o) {
    var a, s, l;
    if (!gt(t)) {
      if (
        (i && (O((i = i[o])) ? ((s = i.name), (l = i.type)) : H(i) && (s = i)),
        null != l)
      )
        return "ordinal" === l ? Jp.Must : Jp.Not;
      if (e === Yp) {
        var u = t;
        if (n === Qp) {
          for (var h = u[o], c = 0; c < (h || []).length && c < 5; c++)
            if (null != (a = m(h[r + c]))) return a;
        } else
          for (c = 0; c < u.length && c < 5; c++) {
            var p = u[r + c];
            if (p && null != (a = m(p[o]))) return a;
          }
      } else if (e === qp) {
        var d = t;
        if (!s) return Jp.Not;
        for (c = 0; c < d.length && c < 5; c++)
          if ((g = d[c]) && null != (a = m(g[s]))) return a;
      } else if (e === Zp) {
        if (!s) return Jp.Not;
        if (!(h = t[s]) || gt(h)) return Jp.Not;
        for (c = 0; c < h.length && c < 5; c++)
          if (null != (a = m(h[c]))) return a;
      } else if (e === Xp)
        for (var f = t, c = 0; c < f.length && c < 5; c++) {
          var g = f[c],
            y = xo(g);
          if (!V(y)) return Jp.Not;
          if (null != (a = m(y[o]))) return a;
        }
    }
    return Jp.Not;
    function m(t) {
      var e = H(t);
      return null != t && isFinite(t) && "" !== t
        ? e
          ? Jp.Might
          : Jp.Not
        : e && "-" !== t
        ? Jp.Must
        : void 0;
    }
  }
  var ad = N();
  var sd = ko(),
    ld =
      (ko(),
      (ud.prototype.getColorFromPalette = function (t, e, n) {
        var i = mo(this.get("color", !0)),
          r = this.get("colorLayer", !0),
          o = this,
          a = sd;
        return (
          (a = a((e = e || o))),
          (o = a.paletteIdx || 0),
          (e = a.paletteNameMap = a.paletteNameMap || {}).hasOwnProperty(t)
            ? e[t]
            : (r =
                (r =
                  null != n && r
                    ? (function (t, e) {
                        for (var n = t.length, i = 0; i < n; i++)
                          if (t[i].length > e) return t[i];
                        return t[n - 1];
                      })(r, n)
                    : i) || i) && r.length
            ? ((n = r[o]),
              t && (e[t] = n),
              (a.paletteIdx = (o + 1) % r.length),
              n)
            : void 0
        );
      }),
      (ud.prototype.clearColorPalette = function () {
        var t, e;
        ((e = sd)((t = this)).paletteIdx = 0), (e(t).paletteNameMap = {});
      }),
      ud);
  function ud() {}
  var hd,
    cd,
    pd,
    dd,
    fd = "\0_ec_inner",
    gd =
      (u(s, (dd = Lc)),
      (s.prototype.init = function (t, e, n, i, r, o) {
        (i = i || {}),
          (this.option = null),
          (this._theme = new Lc(i)),
          (this._locale = new Lc(r)),
          (this._optionManager = o);
      }),
      (s.prototype.setOption = function (t, e, n) {
        e = vd(e);
        this._optionManager.setOption(t, n, e), this._resetOption(null, e);
      }),
      (s.prototype.resetOption = function (t, e) {
        return this._resetOption(t, vd(e));
      }),
      (s.prototype._resetOption = function (t, e) {
        var n,
          i = !1,
          r = this._optionManager;
        return (
          (t && "recreate" !== t) ||
            ((n = r.mountOption("recreate" === t)),
            this.option && "recreate" !== t
              ? (this.restoreData(), this._mergeOption(n, e))
              : pd(this, n),
            (i = !0)),
          ("timeline" !== t && "media" !== t) || this.restoreData(),
          (t && "recreate" !== t && "timeline" !== t) ||
            ((n = r.getTimelineOption(this)) &&
              ((i = !0), this._mergeOption(n, e))),
          (t && "recreate" !== t && "media" !== t) ||
            ((n = r.getMediaOption(this)).length &&
              E(
                n,
                function (t) {
                  (i = !0), this._mergeOption(t, e);
                },
                this
              )),
          i
        );
      }),
      (s.prototype.mergeOption = function (t) {
        this._mergeOption(t, null);
      }),
      (s.prototype._mergeOption = function (i, t) {
        var r = this.option,
          h = this._componentsMap,
          c = this._componentsCount,
          n = [],
          o = N(),
          p = t && t.replaceMergeMainTypeMap;
        (td(this).datasetMap = N()),
          E(i, function (t, e) {
            null != t &&
              (g.hasClass(e)
                ? e && (n.push(e), o.set(e, !0))
                : (r[e] = null == r[e] ? y(t) : d(r[e], t, !0)));
          }),
          p &&
            p.each(function (t, e) {
              g.hasClass(e) && !o.get(e) && (n.push(e), o.set(e, !0));
            }),
          g.topologicalTravel(
            n,
            g.getAllClassMainTypes(),
            function (o) {
              (t = this), (n = mo(i[(e = o)]));
              var t = (e = (e = ad.get(e)) && e(t)) ? n.concat(e) : n,
                e = h.get(o),
                n = wo(
                  e,
                  t,
                  e
                    ? p && p.get(o)
                      ? "replaceMerge"
                      : "normalMerge"
                    : "replaceAll"
                );
              Io(n, o, g), (r[o] = null), h.set(o, null), c.set(o, 0);
              var a,
                s = [],
                l = [],
                u = 0;
              E(
                n,
                function (t, e) {
                  var n = t.existing,
                    i = t.newOption;
                  if (i) {
                    var r = g.getClass(o, t.keyInfo.subType, !("series" === o));
                    if (!r) return;
                    if ("tooltip" === o) {
                      if (a) return;
                      a = !0;
                    }
                    n && n.constructor === r
                      ? ((n.name = t.keyInfo.name),
                        n.mergeOption(i, this),
                        n.optionUpdated(i, !1))
                      : ((e = L({ componentIndex: e }, t.keyInfo)),
                        L((n = new r(i, this, this, e)), e),
                        t.brandNew && (n.__requireNewView = !0),
                        n.init(i, this, this),
                        n.optionUpdated(null, !0));
                  } else
                    n && (n.mergeOption({}, this), n.optionUpdated({}, !1));
                  n
                    ? (s.push(n.option), l.push(n), u++)
                    : (s.push(void 0), l.push(void 0));
                },
                this
              ),
                (r[o] = s),
                h.set(o, l),
                c.set(o, u),
                "series" === o && hd(this);
            },
            this
          ),
          this._seriesIndices || hd(this);
      }),
      (s.prototype.getOption = function () {
        var a = y(this.option);
        return (
          E(a, function (t, e) {
            if (g.hasClass(e)) {
              for (var n = mo(t), i = n.length, r = !1, o = i - 1; 0 <= o; o--)
                n[o] && !Co(n[o]) ? (r = !0) : ((n[o] = null), r || i--);
              (n.length = i), (a[e] = n);
            }
          }),
          delete a[fd],
          a
        );
      }),
      (s.prototype.getTheme = function () {
        return this._theme;
      }),
      (s.prototype.getLocaleModel = function () {
        return this._locale;
      }),
      (s.prototype.setUpdatePayload = function (t) {
        this._payload = t;
      }),
      (s.prototype.getUpdatePayload = function () {
        return this._payload;
      }),
      (s.prototype.getComponent = function (t, e) {
        var n = this._componentsMap.get(t);
        if (n) {
          t = n[e || 0];
          if (t) return t;
          if (null == e)
            for (var i = 0; i < n.length; i++) if (n[i]) return n[i];
        }
      }),
      (s.prototype.queryComponents = function (t) {
        var e,
          n,
          i,
          r,
          o,
          a = t.mainType;
        return a &&
          ((n = t.index),
          (i = t.id),
          (r = t.name),
          (o = this._componentsMap.get(a))) &&
          o.length
          ? (null != n
              ? ((e = []),
                E(mo(n), function (t) {
                  o[t] && e.push(o[t]);
                }))
              : (e =
                  null != i
                    ? yd("id", i, o)
                    : null != r
                    ? yd("name", r, o)
                    : ut(o, function (t) {
                        return !!t;
                      })),
            md(e, t))
          : [];
      }),
      (s.prototype.findComponents = function (t) {
        var e,
          n = t.query,
          i = t.mainType,
          r =
            ((r = i + "Index"),
            (o = i + "Id"),
            (e = i + "Name"),
            !n || (null == n[r] && null == n[o] && null == n[e])
              ? null
              : { mainType: i, index: n[r], id: n[o], name: n[e] }),
          o = md(
            r
              ? this.queryComponents(r)
              : ut(this._componentsMap.get(i), function (t) {
                  return !!t;
                }),
            t
          );
        return t.filter ? ut(o, t.filter) : o;
      }),
      (s.prototype.eachComponent = function (t, e, n) {
        var i = this._componentsMap;
        if (S(t)) {
          var r = e,
            o = t;
          i.each(function (t, e) {
            for (var n = 0; t && n < t.length; n++) {
              var i = t[n];
              i && o.call(r, e, i, i.componentIndex);
            }
          });
        } else
          for (
            var a = H(t) ? i.get(t) : O(t) ? this.findComponents(t) : null,
              s = 0;
            a && s < a.length;
            s++
          ) {
            var l = a[s];
            l && e.call(n, l, l.componentIndex);
          }
      }),
      (s.prototype.getSeriesByName = function (t) {
        var e = Mo(t, null);
        return ut(this._componentsMap.get("series"), function (t) {
          return !!t && null != e && t.name === e;
        });
      }),
      (s.prototype.getSeriesByIndex = function (t) {
        return this._componentsMap.get("series")[t];
      }),
      (s.prototype.getSeriesByType = function (e) {
        return ut(this._componentsMap.get("series"), function (t) {
          return !!t && t.subType === e;
        });
      }),
      (s.prototype.getSeries = function () {
        return ut(this._componentsMap.get("series"), function (t) {
          return !!t;
        });
      }),
      (s.prototype.getSeriesCount = function () {
        return this._componentsCount.get("series");
      }),
      (s.prototype.eachSeries = function (n, i) {
        cd(this),
          E(
            this._seriesIndices,
            function (t) {
              var e = this._componentsMap.get("series")[t];
              n.call(i, e, t);
            },
            this
          );
      }),
      (s.prototype.eachRawSeries = function (e, n) {
        E(this._componentsMap.get("series"), function (t) {
          t && e.call(n, t, t.componentIndex);
        });
      }),
      (s.prototype.eachSeriesByType = function (n, i, r) {
        cd(this),
          E(
            this._seriesIndices,
            function (t) {
              var e = this._componentsMap.get("series")[t];
              e.subType === n && i.call(r, e, t);
            },
            this
          );
      }),
      (s.prototype.eachRawSeriesByType = function (t, e, n) {
        return E(this.getSeriesByType(t), e, n);
      }),
      (s.prototype.isSeriesFiltered = function (t) {
        return cd(this), null == this._seriesIndicesMap.get(t.componentIndex);
      }),
      (s.prototype.getCurrentSeriesIndices = function () {
        return (this._seriesIndices || []).slice();
      }),
      (s.prototype.filterSeries = function (n, i) {
        cd(this);
        var r = [];
        E(
          this._seriesIndices,
          function (t) {
            var e = this._componentsMap.get("series")[t];
            n.call(i, e, t) && r.push(t);
          },
          this
        ),
          (this._seriesIndices = r),
          (this._seriesIndicesMap = N(r));
      }),
      (s.prototype.restoreData = function (n) {
        hd(this);
        var t = this._componentsMap,
          i = [];
        t.each(function (t, e) {
          g.hasClass(e) && i.push(e);
        }),
          g.topologicalTravel(i, g.getAllClassMainTypes(), function (e) {
            E(t.get(e), function (t) {
              !t ||
                ("series" === e &&
                  (function (t, e) {
                    {
                      var n, i;
                      if (e)
                        return (
                          (n = e.seriesIndex),
                          (i = e.seriesId),
                          (e = e.seriesName),
                          (null != n && t.componentIndex !== n) ||
                            (null != i && t.id !== i) ||
                            (null != e && t.name !== e)
                        );
                    }
                  })(t, n)) ||
                t.restoreData();
            });
          });
      }),
      (s.internalField =
        ((hd = function (t) {
          var e = (t._seriesIndices = []);
          E(t._componentsMap.get("series"), function (t) {
            t && e.push(t.componentIndex);
          }),
            (t._seriesIndicesMap = N(e));
        }),
        (cd = function (t) {}),
        void (pd = function (t, e) {
          (t.option = {}),
            (t.option[fd] = 1),
            (t._componentsMap = N({ series: [] })),
            (t._componentsCount = N());
          var n,
            i,
            r = e.aria;
          O(r) && null == r.enabled && (r.enabled = !0),
            (n = e),
            (r = t._theme.option),
            (i = n.color && !n.colorLayer),
            E(r, function (t, e) {
              ("colorLayer" === e && i) ||
                g.hasClass(e) ||
                ("object" == typeof t
                  ? (n[e] = n[e] ? d(n[e], t, !1) : y(t))
                  : null == n[e] && (n[e] = t));
            }),
            d(e, Wp, !1),
            t._mergeOption(e, null);
        }))),
      s);
  function s() {
    return (null !== dd && dd.apply(this, arguments)) || this;
  }
  function yd(e, t, n) {
    var i, r;
    return V(t)
      ? ((i = N()),
        E(t, function (t) {
          null != t && null != Mo(t, null) && i.set(t, !0);
        }),
        ut(n, function (t) {
          return t && i.get(t[e]);
        }))
      : ((r = Mo(t, null)),
        ut(n, function (t) {
          return t && null != r && t[e] === r;
        }));
  }
  function md(t, e) {
    return e.hasOwnProperty("subType")
      ? ut(t, function (t) {
          return t && t.subType === e.subType;
        })
      : t;
  }
  function vd(t) {
    var e = N();
    return (
      t &&
        E(mo(t.replaceMerge), function (t) {
          e.set(t, !0);
        }),
      { replaceMergeMainTypeMap: e }
    );
  }
  at(gd, ld);
  function _d(e) {
    E(
      xd,
      function (t) {
        this[t] = ct(e[t], e);
      },
      this
    );
  }
  var xd = [
      "getDom",
      "getZr",
      "getWidth",
      "getHeight",
      "getDevicePixelRatio",
      "dispatchAction",
      "isSSR",
      "isDisposed",
      "on",
      "off",
      "getDataURL",
      "getConnectedDataURL",
      "getOption",
      "getId",
      "updateLabelLayout",
    ],
    wd = {},
    bd =
      ((Sd.prototype.create = function (n, i) {
        var r = [];
        E(wd, function (t, e) {
          t = t.create(n, i);
          r = r.concat(t || []);
        }),
          (this._coordinateSystems = r);
      }),
      (Sd.prototype.update = function (e, n) {
        E(this._coordinateSystems, function (t) {
          t.update && t.update(e, n);
        });
      }),
      (Sd.prototype.getCoordinateSystems = function () {
        return this._coordinateSystems.slice();
      }),
      (Sd.register = function (t, e) {
        wd[t] = e;
      }),
      (Sd.get = function (t) {
        return wd[t];
      }),
      Sd);
  function Sd() {
    this._coordinateSystems = [];
  }
  var Md = /^(min|max)?(.+)$/,
    Td =
      ((Cd.prototype.setOption = function (t, e, n) {
        t &&
          (E(mo(t.series), function (t) {
            t && t.data && gt(t.data) && Dt(t.data);
          }),
          E(mo(t.dataset), function (t) {
            t && t.source && gt(t.source) && Dt(t.source);
          })),
          (t = y(t));
        var i,
          r,
          o,
          a,
          s,
          l,
          u,
          h,
          c,
          p,
          d = this._optionBackup,
          t =
            ((i = e),
            (r = !d),
            (s = []),
            (t = (e = t).baseOption),
            (l = e.timeline),
            (u = e.options),
            (h = e.media),
            (c = !!e.media),
            (p = !!(u || l || (t && t.timeline))),
            t
              ? (a = t).timeline || (a.timeline = l)
              : ((p || c) && (e.options = e.media = null), (a = e)),
            c &&
              V(h) &&
              E(h, function (t) {
                t && t.option && (t.query ? s.push(t) : (o = o || t));
              }),
            f(a),
            E(u, f),
            E(s, function (t) {
              return f(t.option);
            }),
            {
              baseOption: a,
              timelineOptions: u || [],
              mediaDefault: o,
              mediaList: s,
            });
        function f(e) {
          E(i, function (t) {
            t(e, r);
          });
        }
        (this._newBaseOption = t.baseOption),
          d
            ? (t.timelineOptions.length &&
                (d.timelineOptions = t.timelineOptions),
              t.mediaList.length && (d.mediaList = t.mediaList),
              t.mediaDefault && (d.mediaDefault = t.mediaDefault))
            : (this._optionBackup = t);
      }),
      (Cd.prototype.mountOption = function (t) {
        var e = this._optionBackup;
        return (
          (this._timelineOptions = e.timelineOptions),
          (this._mediaList = e.mediaList),
          (this._mediaDefault = e.mediaDefault),
          (this._currentMediaIndices = []),
          y(t ? e.baseOption : this._newBaseOption)
        );
      }),
      (Cd.prototype.getTimelineOption = function (t) {
        var e,
          n = this._timelineOptions;
        return (e =
          n.length && (t = t.getComponent("timeline"))
            ? y(n[t.getCurrentIndex()])
            : e);
      }),
      (Cd.prototype.getMediaOption = function (t) {
        var e,
          n,
          i = this._api.getWidth(),
          r = this._api.getHeight(),
          o = this._mediaList,
          a = this._mediaDefault,
          s = [],
          l = [];
        if (o.length || a) {
          for (var u = 0, h = o.length; u < h; u++)
            !(function (t, e, n) {
              var i = { width: e, height: n, aspectratio: e / n },
                r = !0;
              return (
                E(t, function (t, e) {
                  var n,
                    e = e.match(Md);
                  e &&
                    e[1] &&
                    e[2] &&
                    ((n = e[1]),
                    (e = e[2].toLowerCase()),
                    (e = i[e]),
                    (t = t),
                    ("min" === (n = n)
                      ? t <= e
                      : "max" === n
                      ? e <= t
                      : e === t) || (r = !1));
                }),
                r
              );
            })(o[u].query, i, r) || s.push(u);
          (s = !s.length && a ? [-1] : s).length &&
            ((e = s),
            (n = this._currentMediaIndices),
            e.join(",") !== n.join(",")) &&
            (l = F(s, function (t) {
              return y((-1 === t ? a : o[t]).option);
            })),
            (this._currentMediaIndices = s);
        }
        return l;
      }),
      Cd);
  function Cd(t) {
    (this._timelineOptions = []),
      (this._mediaList = []),
      (this._currentMediaIndices = []),
      (this._api = t);
  }
  var Id = E,
    Dd = O,
    kd = [
      "areaStyle",
      "lineStyle",
      "nodeStyle",
      "linkStyle",
      "chordStyle",
      "label",
      "labelLine",
    ];
  function Ad(t) {
    var e = t && t.itemStyle;
    if (e)
      for (var n = 0, i = kd.length; n < i; n++) {
        var r = kd[n],
          o = e.normal,
          a = e.emphasis;
        o &&
          o[r] &&
          ((t[r] = t[r] || {}),
          t[r].normal ? d(t[r].normal, o[r]) : (t[r].normal = o[r]),
          (o[r] = null)),
          a &&
            a[r] &&
            ((t[r] = t[r] || {}),
            t[r].emphasis ? d(t[r].emphasis, a[r]) : (t[r].emphasis = a[r]),
            (a[r] = null));
      }
  }
  function Pd(t, e, n) {
    var i, r;
    t &&
      t[e] &&
      (t[e].normal || t[e].emphasis) &&
      ((i = t[e].normal),
      (r = t[e].emphasis),
      i &&
        (n ? ((t[e].normal = t[e].emphasis = null), B(t[e], i)) : (t[e] = i)),
      r) &&
      ((t.emphasis = t.emphasis || {}),
      (t.emphasis[e] = r).focus && (t.emphasis.focus = r.focus),
      r.blurScope) &&
      (t.emphasis.blurScope = r.blurScope);
  }
  function Ld(t) {
    Pd(t, "itemStyle"),
      Pd(t, "lineStyle"),
      Pd(t, "areaStyle"),
      Pd(t, "label"),
      Pd(t, "labelLine"),
      Pd(t, "upperLabel"),
      Pd(t, "edgeLabel");
  }
  function Od(t, e) {
    var n = Dd(t) && t[e],
      i = Dd(n) && n.textStyle;
    if (i)
      for (var r = 0, o = _o.length; r < o; r++) {
        var a = _o[r];
        i.hasOwnProperty(a) && (n[a] = i[a]);
      }
  }
  function Rd(t) {
    t && (Ld(t), Od(t, "label"), t.emphasis) && Od(t.emphasis, "label");
  }
  function Nd(t) {
    return V(t) ? t : t ? [t] : [];
  }
  function Ed(t) {
    return (V(t) ? t[0] : t) || {};
  }
  function zd(e, t) {
    Id(Nd(e.series), function (t) {
      if (Dd(t))
        if (Dd(t)) {
          Ad(t),
            Ld(t),
            Od(t, "label"),
            Od(t, "upperLabel"),
            Od(t, "edgeLabel"),
            t.emphasis &&
              (Od(t.emphasis, "label"),
              Od(t.emphasis, "upperLabel"),
              Od(t.emphasis, "edgeLabel"));
          var e = t.markPoint,
            n = (e && (Ad(e), Rd(e)), t.markLine),
            i = (n && (Ad(n), Rd(n)), t.markArea),
            r = (i && Rd(i), t.data);
          if ("graph" === t.type) {
            var r = r || t.nodes,
              o = t.links || t.edges;
            if (o && !gt(o)) for (var a = 0; a < o.length; a++) Rd(o[a]);
            E(t.categories, function (t) {
              Ld(t);
            });
          }
          if (r && !gt(r)) for (a = 0; a < r.length; a++) Rd(r[a]);
          if ((e = t.markPoint) && e.data)
            for (var s = e.data, a = 0; a < s.length; a++) Rd(s[a]);
          if ((n = t.markLine) && n.data) {
            var l = n.data;
            for (a = 0; a < l.length; a++)
              V(l[a]) ? (Rd(l[a][0]), Rd(l[a][1])) : Rd(l[a]);
          }
          "gauge" === t.type
            ? (Od(t, "axisLabel"), Od(t, "title"), Od(t, "detail"))
            : "treemap" === t.type
            ? (Pd(t.breadcrumb, "itemStyle"),
              E(t.levels, function (t) {
                Ld(t);
              }))
            : "tree" === t.type && Ld(t.leaves);
        }
    });
    var n = [
      "xAxis",
      "yAxis",
      "radiusAxis",
      "angleAxis",
      "singleAxis",
      "parallelAxis",
      "radar",
    ];
    t && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"),
      Id(n, function (t) {
        Id(Nd(e[t]), function (t) {
          t && (Od(t, "axisLabel"), Od(t.axisPointer, "label"));
        });
      }),
      Id(Nd(e.parallel), function (t) {
        t = t && t.parallelAxisDefault;
        Od(t, "axisLabel"), Od(t && t.axisPointer, "label");
      }),
      Id(Nd(e.calendar), function (t) {
        Pd(t, "itemStyle"),
          Od(t, "dayLabel"),
          Od(t, "monthLabel"),
          Od(t, "yearLabel");
      }),
      Id(Nd(e.radar), function (t) {
        Od(t, "name"),
          t.name &&
            null == t.axisName &&
            ((t.axisName = t.name), delete t.name),
          null != t.nameGap &&
            null == t.axisNameGap &&
            ((t.axisNameGap = t.nameGap), delete t.nameGap);
      }),
      Id(Nd(e.geo), function (t) {
        Dd(t) &&
          (Rd(t),
          Id(Nd(t.regions), function (t) {
            Rd(t);
          }));
      }),
      Id(Nd(e.timeline), function (t) {
        Rd(t), Pd(t, "label"), Pd(t, "itemStyle"), Pd(t, "controlStyle", !0);
        t = t.data;
        V(t) &&
          E(t, function (t) {
            O(t) && (Pd(t, "label"), Pd(t, "itemStyle"));
          });
      }),
      Id(Nd(e.toolbox), function (t) {
        Pd(t, "iconStyle"),
          Id(t.feature, function (t) {
            Pd(t, "iconStyle");
          });
      }),
      Od(Ed(e.axisPointer), "label"),
      Od(Ed(e.tooltip).axisPointer, "label");
  }
  function Bd(e) {
    e &&
      E(Fd, function (t) {
        t[0] in e && !(t[1] in e) && (e[t[1]] = e[t[0]]);
      });
  }
  var Fd = [
      ["x", "left"],
      ["y", "top"],
      ["x2", "right"],
      ["y2", "bottom"],
    ],
    Vd = [
      "grid",
      "geo",
      "parallel",
      "legend",
      "toolbox",
      "title",
      "visualMap",
      "dataZoom",
      "timeline",
    ],
    Hd = [
      ["borderRadius", "barBorderRadius"],
      ["borderColor", "barBorderColor"],
      ["borderWidth", "barBorderWidth"],
    ];
  function Gd(t) {
    var e = t && t.itemStyle;
    if (e)
      for (var n = 0; n < Hd.length; n++) {
        var i = Hd[n][1],
          r = Hd[n][0];
        null != e[i] && (e[r] = e[i]);
      }
  }
  function Wd(t) {
    t &&
      "edge" === t.alignTo &&
      null != t.margin &&
      null == t.edgeDistance &&
      (t.edgeDistance = t.margin);
  }
  function Ud(t) {
    t && t.downplay && !t.blur && (t.blur = t.downplay);
  }
  function Xd(e, t) {
    zd(e, t),
      (e.series = mo(e.series)),
      E(e.series, function (t) {
        if (O(t)) {
          var e,
            n = t.type;
          if ("line" === n) null != t.clipOverflow && (t.clip = t.clipOverflow);
          else if ("pie" === n || "gauge" === n) {
            if (
              (null != t.clockWise && (t.clockwise = t.clockWise),
              Wd(t.label),
              (e = t.data) && !gt(e))
            )
              for (var i = 0; i < e.length; i++) Wd(e[i]);
            null != t.hoverOffset &&
              ((t.emphasis = t.emphasis || {}),
              (t.emphasis.scaleSize = null)) &&
              (t.emphasis.scaleSize = t.hoverOffset);
          } else if ("gauge" === n) {
            var r = (function (t, e) {
              for (
                var n = e.split(","), i = t, r = 0;
                r < n.length && null != (i = i && i[n[r]]);
                r++
              );
              return i;
            })(t, "pointer.color");
            if (null != r) {
              var o = t;
              var a = "itemStyle.color";
              var s = void 0;
              for (var l, u = a.split(","), h = o, c = 0; c < u.length - 1; c++)
                null == h[(l = u[c])] && (h[l] = {}), (h = h[l]);
              (!s && null != h[u[c]]) || (h[u[c]] = r);
            }
          } else if ("bar" === n) {
            if (
              (Gd(t),
              Gd(t.backgroundStyle),
              Gd(t.emphasis),
              (e = t.data) && !gt(e))
            )
              for (i = 0; i < e.length; i++)
                "object" == typeof e[i] &&
                  (Gd(e[i]), Gd(e[i] && e[i].emphasis));
          } else
            "sunburst" === n
              ? ((a = t.highlightPolicy) &&
                  ((t.emphasis = t.emphasis || {}),
                  t.emphasis.focus || (t.emphasis.focus = a)),
                Ud(t),
                (function t(e, n) {
                  if (e)
                    for (var i = 0; i < e.length; i++)
                      n(e[i]), e[i] && t(e[i].children, n);
                })(t.data, Ud))
              : "graph" === n || "sankey" === n
              ? (o = t) &&
                null != o.focusNodeAdjacency &&
                ((o.emphasis = o.emphasis || {}), null == o.emphasis.focus) &&
                (o.emphasis.focus = "adjacency")
              : "map" === n &&
                (t.mapType && !t.map && (t.map = t.mapType), t.mapLocation) &&
                B(t, t.mapLocation);
          null != t.hoverAnimation &&
            ((t.emphasis = t.emphasis || {}), t.emphasis) &&
            null == t.emphasis.scale &&
            (t.emphasis.scale = t.hoverAnimation),
            Bd(t);
        }
      }),
      e.dataRange && (e.visualMap = e.dataRange),
      E(Vd, function (t) {
        t = e[t];
        t &&
          E((t = V(t) ? t : [t]), function (t) {
            Bd(t);
          });
      });
  }
  function Yd(_) {
    E(_, function (p, d) {
      var f = [],
        g = [NaN, NaN],
        t = [p.stackResultDimension, p.stackedOverDimension],
        y = p.data,
        m = p.isStackedByIndex,
        v = p.seriesModel.get("stackStrategy") || "samesign";
      y.modify(t, function (t, e, n) {
        var i,
          r,
          o = y.get(p.stackedDimension, n);
        if (isNaN(o)) return g;
        m ? (r = y.getRawIndex(n)) : (i = y.get(p.stackedByDimension, n));
        for (var a, s, l, u = NaN, h = d - 1; 0 <= h; h--) {
          var c = _[h];
          if (0 <= (r = m ? r : c.data.rawIndexOf(c.stackedByDimension, i))) {
            c = c.data.getByRawIndex(c.stackResultDimension, r);
            if (
              "all" === v ||
              ("positive" === v && 0 < c) ||
              ("negative" === v && c < 0) ||
              ("samesign" === v && 0 <= o && 0 < c) ||
              ("samesign" === v && o <= 0 && c < 0)
            ) {
              (a = o),
                (s = c),
                (l = void 0),
                (l = Math.max(Qr(a), Qr(s))),
                (a += s),
                (o = Zr < l ? a : $r(a, l)),
                (u = c);
              break;
            }
          }
        }
        return (f[0] = o), (f[1] = u), f;
      });
    });
  }
  var qd,
    Zd,
    jd = function (t) {
      (this.data = t.data || (t.sourceFormat === Zp ? {} : [])),
        (this.sourceFormat = t.sourceFormat || Kp),
        (this.seriesLayoutBy = t.seriesLayoutBy || $p),
        (this.startIndex = t.startIndex || 0),
        (this.dimensionsDetectedCount = t.dimensionsDetectedCount),
        (this.metaRawOption = t.metaRawOption);
      var e = (this.dimensionsDefine = t.dimensionsDefine);
      if (e)
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          null == i.type && rd(this, n) === Jp.Must && (i.type = "ordinal");
        }
    };
  function Kd(t) {
    return t instanceof jd;
  }
  function $d(t, e, n) {
    n = n || Jd(t);
    var i = e.seriesLayoutBy,
      r = (function (t, e, n, i, r) {
        var o, a;
        if (!t)
          return {
            dimensionsDefine: tf(r),
            startIndex: a,
            dimensionsDetectedCount: o,
          };
        {
          var s;
          e === Yp
            ? ((s = t),
              "auto" === i || null == i
                ? ef(
                    function (t) {
                      null != t &&
                        "-" !== t &&
                        (H(t) ? null == a && (a = 1) : (a = 0));
                    },
                    n,
                    s,
                    10
                  )
                : (a = G(i) ? i : i ? 1 : 0),
              r ||
                1 !== a ||
                ((r = []),
                ef(
                  function (t, e) {
                    r[e] = null != t ? t + "" : "";
                  },
                  n,
                  s,
                  1 / 0
                )),
              (o = r
                ? r.length
                : n === Qp
                ? s.length
                : s[0]
                ? s[0].length
                : null))
            : e === qp
            ? (r =
                r ||
                (function (t) {
                  for (var e, n = 0; n < t.length && !(e = t[n++]); );
                  if (e) return ht(e);
                })(t))
            : e === Zp
            ? r ||
              ((r = []),
              E(t, function (t, e) {
                r.push(e);
              }))
            : e === Xp && ((i = xo(t[0])), (o = (V(i) && i.length) || 1));
        }
        return {
          startIndex: a,
          dimensionsDefine: tf(r),
          dimensionsDetectedCount: o,
        };
      })(t, n, i, e.sourceHeader, e.dimensions);
    return new jd({
      data: t,
      sourceFormat: n,
      seriesLayoutBy: i,
      dimensionsDefine: r.dimensionsDefine,
      startIndex: r.startIndex,
      dimensionsDetectedCount: r.dimensionsDetectedCount,
      metaRawOption: y(e),
    });
  }
  function Qd(t) {
    return new jd({ data: t, sourceFormat: gt(t) ? jp : Xp });
  }
  function Jd(t) {
    var e = Kp;
    if (gt(t)) e = jp;
    else if (V(t)) {
      0 === t.length && (e = Yp);
      for (var n = 0, i = t.length; n < i; n++) {
        var r = t[n];
        if (null != r) {
          if (V(r)) {
            e = Yp;
            break;
          }
          if (O(r)) {
            e = qp;
            break;
          }
        }
      }
    } else if (O(t))
      for (var o in t)
        if (Bt(t, o) && st(t[o])) {
          e = Zp;
          break;
        }
    return e;
  }
  function tf(t) {
    var i;
    if (t)
      return (
        (i = N()),
        F(t, function (t, e) {
          var n,
            t = {
              name: (t = O(t) ? t : { name: t }).name,
              displayName: t.displayName,
              type: t.type,
            };
          return (
            null != t.name &&
              ((t.name += ""),
              null == t.displayName && (t.displayName = t.name),
              (n = i.get(t.name))
                ? (t.name += "-" + n.count++)
                : i.set(t.name, { count: 1 })),
            t
          );
        })
      );
  }
  function ef(t, e, n, i) {
    if (e === Qp)
      for (var r = 0; r < n.length && r < i; r++) t(n[r] ? n[r][0] : null, r);
    else for (var o = n[0] || [], r = 0; r < o.length && r < i; r++) t(o[r], r);
  }
  function nf(t) {
    t = t.sourceFormat;
    return t === qp || t === Zp;
  }
  (lf.prototype.getSource = function () {
    return this._source;
  }),
    (lf.prototype.count = function () {
      return 0;
    }),
    (lf.prototype.getItem = function (t, e) {}),
    (lf.prototype.appendData = function (t) {}),
    (lf.prototype.clean = function () {}),
    (lf.protoInitialize =
      (((Zh = lf.prototype).pure = !1), void (Zh.persistent = !0))),
    (lf.internalField =
      ((Zd = function (t, e, n) {
        var i,
          r = n.sourceFormat,
          o = n.seriesLayoutBy,
          a = n.startIndex,
          n = n.dimensionsDefine;
        L(t, qd[_f(r, o)]),
          r === jp
            ? ((t.getItem = rf), (t.count = af), (t.fillStorage = of))
            : ((i = pf(r, o)),
              (t.getItem = ct(i, null, e, a, n)),
              (i = gf(r, o)),
              (t.count = ct(i, null, e, a, n)));
      }),
      (rf = function (t, e) {
        (t -= this._offset), (e = e || []);
        for (
          var n = this._data, i = this._dimSize, r = i * t, o = 0;
          o < i;
          o++
        )
          e[o] = n[r + o];
        return e;
      }),
      (of = function (t, e, n, i) {
        for (var r = this._data, o = this._dimSize, a = 0; a < o; a++) {
          for (
            var s = i[a],
              l = null == s[0] ? 1 / 0 : s[0],
              u = null == s[1] ? -1 / 0 : s[1],
              h = e - t,
              c = n[a],
              p = 0;
            p < h;
            p++
          ) {
            var d = r[p * o + a];
            (c[t + p] = d) < l && (l = d), u < d && (u = d);
          }
          (s[0] = l), (s[1] = u);
        }
      }),
      (af = function () {
        return this._data ? this._data.length / this._dimSize : 0;
      }),
      ((Zh = {})[Yp + "_" + $p] = { pure: !0, appendData: uf }),
      (Zh[Yp + "_" + Qp] = {
        pure: !0,
        appendData: function () {
          throw new Error(
            'Do not support appendData when set seriesLayoutBy: "row".'
          );
        },
      }),
      (Zh[qp] = { pure: !0, appendData: uf }),
      (Zh[Zp] = {
        pure: !0,
        appendData: function (t) {
          var r = this._data;
          E(t, function (t, e) {
            for (var n = r[e] || (r[e] = []), i = 0; i < (t || []).length; i++)
              n.push(t[i]);
          });
        },
      }),
      (Zh[Xp] = { appendData: uf }),
      (Zh[jp] = {
        persistent: !1,
        pure: !0,
        appendData: function (t) {
          this._data = t;
        },
        clean: function () {
          (this._offset += this.count()), (this._data = null);
        },
      }),
      void (qd = Zh)));
  var rf,
    of,
    af,
    sf = lf;
  function lf(t, e) {
    var t = Kd(t) ? t : Qd(t),
      n = ((this._source = t), (this._data = t.data));
    t.sourceFormat === jp &&
      ((this._offset = 0), (this._dimSize = e), (this._data = n)),
      Zd(this, n, t);
  }
  function uf(t) {
    for (var e = 0; e < t.length; e++) this._data.push(t[e]);
  }
  function hf(t, e, n, i) {
    return t[i];
  }
  ((jc = {})[Yp + "_" + $p] = function (t, e, n, i) {
    return t[i + e];
  }),
    (jc[Yp + "_" + Qp] = function (t, e, n, i, r) {
      i += e;
      for (var o = r || [], a = t, s = 0; s < a.length; s++) {
        var l = a[s];
        o[s] = l ? l[i] : null;
      }
      return o;
    }),
    (jc[qp] = hf),
    (jc[Zp] = function (t, e, n, i, r) {
      for (var o = r || [], a = 0; a < n.length; a++) {
        var s = t[n[a].name];
        o[a] = s ? s[i] : null;
      }
      return o;
    }),
    (jc[Xp] = hf);
  var cf = jc;
  function pf(t, e) {
    return cf[_f(t, e)];
  }
  function df(t, e, n) {
    return t.length;
  }
  ((Tc = {})[Yp + "_" + $p] = function (t, e, n) {
    return Math.max(0, t.length - e);
  }),
    (Tc[Yp + "_" + Qp] = function (t, e, n) {
      t = t[0];
      return t ? Math.max(0, t.length - e) : 0;
    }),
    (Tc[qp] = df),
    (Tc[Zp] = function (t, e, n) {
      t = t[n[0].name];
      return t ? t.length : 0;
    }),
    (Tc[Xp] = df);
  var ff = Tc;
  function gf(t, e) {
    return ff[_f(t, e)];
  }
  function yf(t, e, n) {
    return t[e];
  }
  ((jo = {})[Yp] = yf),
    (jo[qp] = function (t, e, n) {
      return t[n];
    }),
    (jo[Zp] = yf),
    (jo[Xp] = function (t, e, n) {
      t = xo(t);
      return t instanceof Array ? t[e] : t;
    }),
    (jo[jp] = yf);
  var mf = jo;
  function vf(t) {
    return mf[t];
  }
  function _f(t, e) {
    return t === Yp ? t + "_" + e : t;
  }
  function xf(t, e, n) {
    if (t) {
      var i,
        r,
        e = t.getRawDataItem(e);
      if (null != e)
        return (
          (i = (r = t.getStore()).getSource().sourceFormat),
          null != n
            ? ((t = t.getDimensionIndex(n)),
              (n = r.getDimensionProperty(t)),
              vf(i)(e, t, n))
            : ((r = e), i === Xp ? xo(e) : r)
        );
    }
  }
  var wf = /\{@(.+?)\}/g,
    kc =
      ((bf.prototype.getDataParams = function (t, e) {
        var n = this.getData(e),
          i = this.getRawValue(t, e),
          r = n.getRawIndex(t),
          o = n.getName(t),
          a = n.getRawDataItem(t),
          s = n.getItemVisual(t, "style"),
          t = s && s[n.getItemVisual(t, "drawType") || "fill"],
          s = s && s.stroke,
          l = this.mainType,
          u = "series" === l,
          n = n.userOutput && n.userOutput.get();
        return {
          componentType: l,
          componentSubType: this.subType,
          componentIndex: this.componentIndex,
          seriesType: u ? this.subType : null,
          seriesIndex: this.seriesIndex,
          seriesId: u ? this.id : null,
          seriesName: u ? this.name : null,
          name: o,
          dataIndex: r,
          data: a,
          dataType: e,
          value: i,
          color: t,
          borderColor: s,
          dimensionNames: n ? n.fullDimensions : null,
          encode: n ? n.encode : null,
          $vars: ["seriesName", "name", "value"],
        };
      }),
      (bf.prototype.getFormattedLabel = function (i, t, e, n, r, o) {
        t = t || "normal";
        var a = this.getData(e),
          e = this.getDataParams(i, e);
        return (
          o && (e.value = o.interpolatedValue),
          null != n && V(e.value) && (e.value = e.value[n]),
          S(
            (r =
              r ||
              a
                .getItemModel(i)
                .get(
                  "normal" === t
                    ? ["label", "formatter"]
                    : [t, "label", "formatter"]
                ))
          )
            ? ((e.status = t), (e.dimensionIndex = n), r(e))
            : H(r)
            ? Sp(r, e).replace(wf, function (t, e) {
                var n = e.length,
                  n =
                    ("[" === e.charAt(0) &&
                      "]" === e.charAt(n - 1) &&
                      (e = +e.slice(1, n - 1)),
                    xf(a, i, e));
                return null !=
                  (n =
                    o &&
                    V(o.interpolatedValue) &&
                    0 <= (e = a.getDimensionIndex(e))
                      ? o.interpolatedValue[e]
                      : n)
                  ? n + ""
                  : "";
              })
            : void 0
        );
      }),
      (bf.prototype.getRawValue = function (t, e) {
        return xf(this.getData(e), t);
      }),
      (bf.prototype.formatTooltip = function (t, e, n) {}),
      bf);
  function bf() {}
  function Sf(t) {
    var e, n;
    return O(t) ? t.type && (n = t) : (e = t), { text: e, frag: n };
  }
  function Mf(t) {
    return new Tf(t);
  }
  (Cf.prototype.perform = function (t) {
    var e,
      n = this._upstream,
      i = t && t.skip;
    this._dirty &&
      n &&
      ((o = this.context).data = o.outputData = n.context.outputData),
      this.__pipeline && (this.__pipeline.currentTask = this),
      this._plan && !i && (e = this._plan(this.context));
    var r,
      o = u(this._modBy),
      a = this._modDataCount || 0,
      s = u(t && t.modBy),
      l = (t && t.modDataCount) || 0;
    function u(t) {
      return (t = 1 <= t ? t : 1);
    }
    (o === s && a === l) || (e = "reset"),
      (!this._dirty && "reset" !== e) ||
        ((this._dirty = !1), (r = this._doReset(i))),
      (this._modBy = s),
      (this._modDataCount = l);
    o = t && t.step;
    if (
      ((this._dueEnd = n
        ? n._outputDueEnd
        : this._count
        ? this._count(this.context)
        : 1 / 0),
      this._progress)
    ) {
      var h = this._dueIndex,
        c = Math.min(null != o ? this._dueIndex + o : 1 / 0, this._dueEnd);
      if (!i && (r || h < c)) {
        var p = this._progress;
        if (V(p))
          for (var d = 0; d < p.length; d++) this._doProgress(p[d], h, c, s, l);
        else this._doProgress(p, h, c, s, l);
      }
      this._dueIndex = c;
      a = null != this._settedOutputEnd ? this._settedOutputEnd : c;
      this._outputDueEnd = a;
    } else
      this._dueIndex = this._outputDueEnd =
        null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;
    return this.unfinished();
  }),
    (Cf.prototype.dirty = function () {
      (this._dirty = !0), this._onDirty && this._onDirty(this.context);
    }),
    (Cf.prototype._doProgress = function (t, e, n, i, r) {
      Of.reset(e, n, i, r),
        (this._callingProgress = t),
        this._callingProgress(
          { start: e, end: n, count: n - e, next: Of.next },
          this.context
        );
    }),
    (Cf.prototype._doReset = function (t) {
      (this._dueIndex = this._outputDueEnd = this._dueEnd = 0),
        (this._settedOutputEnd = null),
        !t &&
          this._reset &&
          ((e = this._reset(this.context)) &&
            e.progress &&
            ((n = e.forceFirstProgress), (e = e.progress)),
          V(e)) &&
          !e.length &&
          (e = null),
        (this._progress = e),
        (this._modBy = this._modDataCount = null);
      var e,
        n,
        t = this._downstream;
      return t && t.dirty(), n;
    }),
    (Cf.prototype.unfinished = function () {
      return this._progress && this._dueIndex < this._dueEnd;
    }),
    (Cf.prototype.pipe = function (t) {
      (this._downstream === t && !this._dirty) ||
        (((this._downstream = t)._upstream = this), t.dirty());
    }),
    (Cf.prototype.dispose = function () {
      this._disposed ||
        (this._upstream && (this._upstream._downstream = null),
        this._downstream && (this._downstream._upstream = null),
        (this._dirty = !1),
        (this._disposed = !0));
    }),
    (Cf.prototype.getUpstream = function () {
      return this._upstream;
    }),
    (Cf.prototype.getDownstream = function () {
      return this._downstream;
    }),
    (Cf.prototype.setOutputEnd = function (t) {
      this._outputDueEnd = this._settedOutputEnd = t;
    });
  var Tf = Cf;
  function Cf(t) {
    (this._reset = (t = t || {}).reset),
      (this._plan = t.plan),
      (this._count = t.count),
      (this._onDirty = t.onDirty),
      (this._dirty = !0);
  }
  var If,
    Df,
    kf,
    Af,
    Pf,
    Lf,
    Of = (Lf = {
      reset: function (t, e, n, i) {
        (Df = t),
          (If = e),
          (kf = n),
          (Af = i),
          (Pf = Math.ceil(Af / kf)),
          (Lf.next = 1 < kf && 0 < Af ? Nf : Rf);
      },
    });
  function Rf() {
    return Df < If ? Df++ : null;
  }
  function Nf() {
    var t = (Df % Pf) * kf + Math.ceil(Df / Pf),
      t = If <= Df ? null : t < Af ? t : Df;
    return Df++, t;
  }
  function Ef(t, e) {
    e = e && e.type;
    return "ordinal" === e
      ? t
      : null ==
          (t = "time" !== e || G(t) || null == t || "-" === t ? t : +oo(t)) ||
        "" === t
      ? NaN
      : +t;
  }
  var zf = N({
    number: function (t) {
      return parseFloat(t);
    },
    time: function (t) {
      return +oo(t);
    },
    trim: function (t) {
      return H(t) ? Ct(t) : t;
    },
  });
  function Bf(t) {
    return zf.get(t);
  }
  var Ff = {
      lt: function (t, e) {
        return t < e;
      },
      lte: function (t, e) {
        return t <= e;
      },
      gt: function (t, e) {
        return e < t;
      },
      gte: function (t, e) {
        return e <= t;
      },
    },
    Vf =
      ((Wf.prototype.evaluate = function (t) {
        return G(t)
          ? this._opFn(t, this._rvalFloat)
          : this._opFn(uo(t), this._rvalFloat);
      }),
      Wf),
    Hf =
      ((Gf.prototype.evaluate = function (t, e) {
        var n = G(t) ? t : uo(t),
          i = G(e) ? e : uo(e),
          r = isNaN(n),
          o = isNaN(i);
        return (
          r && (n = this._incomparable),
          o && (i = this._incomparable),
          r &&
            o &&
            ((r = H(t)), (o = H(e)), r && (n = o ? t : 0), o) &&
            (i = r ? e : 0),
          n < i ? this._resultLT : i < n ? -this._resultLT : 0
        );
      }),
      Gf);
  function Gf(t, e) {
    t = "desc" === t;
    (this._resultLT = t ? 1 : -1),
      (this._incomparable =
        "min" === (e = null == e ? (t ? "min" : "max") : e) ? -1 / 0 : 1 / 0);
  }
  function Wf(t, e) {
    G(e) || f(""), (this._opFn = Ff[t]), (this._rvalFloat = uo(e));
  }
  Xf.prototype.evaluate = function (t) {
    var e,
      n = t === this._rval;
    return (
      n ||
        (e = typeof t) === this._rvalTypeof ||
        ("number" != e && "number" !== this._rvalTypeof) ||
        (n = uo(t) === this._rvalFloat),
      this._isEQ ? n : !n
    );
  };
  var Uf = Xf;
  function Xf(t, e) {
    (this._rval = e),
      (this._isEQ = t),
      (this._rvalTypeof = typeof e),
      (this._rvalFloat = uo(e));
  }
  (qf.prototype.getRawData = function () {
    throw new Error("not supported");
  }),
    (qf.prototype.getRawDataItem = function (t) {
      throw new Error("not supported");
    }),
    (qf.prototype.cloneRawData = function () {}),
    (qf.prototype.getDimensionInfo = function (t) {}),
    (qf.prototype.cloneAllDimensionInfo = function () {}),
    (qf.prototype.count = function () {}),
    (qf.prototype.retrieveValue = function (t, e) {}),
    (qf.prototype.retrieveValueFromItem = function (t, e) {}),
    (qf.prototype.convertValue = Ef);
  var Yf = qf;
  function qf() {}
  function Zf(t) {
    return tg(t.sourceFormat) || f(""), t.data;
  }
  function jf(t) {
    var e = t.sourceFormat,
      n = t.data;
    if ((tg(e) || f(""), e === Yp)) {
      for (var i = [], r = 0, o = n.length; r < o; r++) i.push(n[r].slice());
      return i;
    }
    if (e === qp) {
      for (i = [], r = 0, o = n.length; r < o; r++) i.push(L({}, n[r]));
      return i;
    }
  }
  function Kf(t, e, n) {
    if (null != n)
      return G(n) || (!isNaN(n) && !Bt(e, n)) ? t[n] : Bt(e, n) ? e[n] : void 0;
  }
  function $f(t) {
    return y(t);
  }
  var Qf = N();
  function Jf(t, e) {
    var n = mo(t),
      t = n.length;
    t || f("");
    for (var i = 0, r = t; i < r; i++)
      (e = (function (t, i) {
        i.length || f(""), O(t) || f("");
        var e = t.type,
          d = Qf.get(e),
          e =
            (d || f(""),
            F(i, function (t) {
              var e = t,
                t = d,
                n = new Yf(),
                i = e.data,
                r = (n.sourceFormat = e.sourceFormat),
                o = e.startIndex,
                a = (e.seriesLayoutBy !== $p && f(""), []),
                s = {};
              if ((h = e.dimensionsDefine))
                E(h, function (t, e) {
                  var n = t.name,
                    e = { index: e, name: n, displayName: t.displayName };
                  a.push(e), null != n && (Bt(s, n) && f(""), (s[n] = e));
                });
              else
                for (var l = 0; l < e.dimensionsDetectedCount; l++)
                  a.push({ index: l });
              var u = pf(r, $p),
                h =
                  (t.__isBuiltIn &&
                    ((n.getRawDataItem = function (t) {
                      return u(i, o, a, t);
                    }),
                    (n.getRawData = ct(Zf, null, e))),
                  (n.cloneRawData = ct(jf, null, e)),
                  gf(r, $p)),
                c = ((n.count = ct(h, null, i, o, a)), vf(r)),
                p =
                  ((n.retrieveValue = function (t, e) {
                    t = u(i, o, a, t);
                    return p(t, e);
                  }),
                  (n.retrieveValueFromItem = function (t, e) {
                    var n;
                    return null != t && (n = a[e]) ? c(t, e, n.name) : void 0;
                  }));
              return (
                (n.getDimensionInfo = ct(Kf, null, a, s)),
                (n.cloneAllDimensionInfo = ct($f, null, a)),
                n
              );
            }));
        return F(
          mo(
            d.transform({
              upstream: e[0],
              upstreamList: e,
              config: y(t.config),
            })
          ),
          function (t, e) {
            O(t) || f(""), t.data || f(""), tg(Jd(t.data)) || f("");
            var n = i[0],
              e =
                n && 0 === e && !t.dimensions
                  ? ((e = n.startIndex) &&
                      (t.data = n.data.slice(0, e).concat(t.data)),
                    {
                      seriesLayoutBy: $p,
                      sourceHeader: e,
                      dimensions: n.metaRawOption.dimensions,
                    })
                  : {
                      seriesLayoutBy: $p,
                      sourceHeader: 0,
                      dimensions: t.dimensions,
                    };
            return $d(t.data, e, null);
          }
        );
      })(n[i], e)),
        i !== r - 1 && (e.length = Math.max(e.length, 1));
    return e;
  }
  function tg(t) {
    return t === Yp || t === qp;
  }
  var eg,
    Zh = "undefined",
    ng = typeof Uint32Array == Zh ? Array : Uint32Array,
    ig = typeof Uint16Array == Zh ? Array : Uint16Array,
    rg = typeof Int32Array == Zh ? Array : Int32Array,
    jc = typeof Float64Array == Zh ? Array : Float64Array,
    og = { float: jc, int: rg, ordinal: Array, number: Array, time: jc };
  function ag(t) {
    return 65535 < t ? ng : ig;
  }
  function sg() {
    return [1 / 0, -1 / 0];
  }
  function lg(t, e, n, i, r) {
    n = og[n || "float"];
    if (r) {
      var o = t[e],
        a = o && o.length;
      if (a !== i) {
        for (var s = new n(i), l = 0; l < a; l++) s[l] = o[l];
        t[e] = s;
      }
    } else t[e] = new n(i);
  }
  (l.prototype.initData = function (t, e, n) {
    (this._provider = t),
      (this._chunks = []),
      (this._indices = null),
      (this.getRawIndex = this._getRawIdxIdentity);
    var i = t.getSource(),
      r = (this.defaultDimValueGetter = eg[i.sourceFormat]);
    (this._dimValueGetter = n || r),
      (this._rawExtent = []),
      nf(i),
      (this._dimensions = F(e, function (t) {
        return { type: t.type, property: t.property };
      })),
      this._initDataFromProvider(0, t.count());
  }),
    (l.prototype.getProvider = function () {
      return this._provider;
    }),
    (l.prototype.getSource = function () {
      return this._provider.getSource();
    }),
    (l.prototype.ensureCalculationDimension = function (t, e) {
      var n = this._calcDimNameToIdx,
        i = this._dimensions,
        r = n.get(t);
      if (null != r) {
        if (i[r].type === e) return r;
      } else r = i.length;
      return (
        (i[r] = { type: e }),
        n.set(t, r),
        (this._chunks[r] = new og[e || "float"](this._rawCount)),
        (this._rawExtent[r] = sg()),
        r
      );
    }),
    (l.prototype.collectOrdinalMeta = function (t, e) {
      var n = this._chunks[t],
        i = this._dimensions[t],
        r = this._rawExtent,
        o = i.ordinalOffset || 0,
        a = n.length;
      0 === o && (r[t] = sg());
      for (var s = r[t], l = o; l < a; l++) {
        var u = (n[l] = e.parseAndCollect(n[l]));
        isNaN(u) || ((s[0] = Math.min(u, s[0])), (s[1] = Math.max(u, s[1])));
      }
      (i.ordinalMeta = e), (i.ordinalOffset = a), (i.type = "ordinal");
    }),
    (l.prototype.getOrdinalMeta = function (t) {
      return this._dimensions[t].ordinalMeta;
    }),
    (l.prototype.getDimensionProperty = function (t) {
      t = this._dimensions[t];
      return t && t.property;
    }),
    (l.prototype.appendData = function (t) {
      var e = this._provider,
        n = this.count(),
        t = (e.appendData(t), e.count());
      return (
        e.persistent || (t += n),
        n < t && this._initDataFromProvider(n, t, !0),
        [n, t]
      );
    }),
    (l.prototype.appendValues = function (t, e) {
      for (
        var n = this._chunks,
          i = this._dimensions,
          r = i.length,
          o = this._rawExtent,
          a = this.count(),
          s = a + Math.max(t.length, e || 0),
          l = 0;
        l < r;
        l++
      )
        lg(n, l, (d = i[l]).type, s, !0);
      for (var u = [], h = a; h < s; h++)
        for (var c = h - a, p = 0; p < r; p++) {
          var d = i[p],
            f = eg.arrayRows.call(this, t[c] || u, d.property, c, p),
            g = ((n[p][h] = f), o[p]);
          f < g[0] && (g[0] = f), f > g[1] && (g[1] = f);
        }
      return { start: a, end: (this._rawCount = this._count = s) };
    }),
    (l.prototype._initDataFromProvider = function (t, e, n) {
      for (
        var i = this._provider,
          r = this._chunks,
          o = this._dimensions,
          a = o.length,
          s = this._rawExtent,
          l = F(o, function (t) {
            return t.property;
          }),
          u = 0;
        u < a;
        u++
      ) {
        var h = o[u];
        s[u] || (s[u] = sg()), lg(r, u, h.type, e, n);
      }
      if (i.fillStorage) i.fillStorage(t, e, r, s);
      else
        for (var c = [], p = t; p < e; p++)
          for (var c = i.getItem(p, c), d = 0; d < a; d++) {
            var f = r[d],
              g = this._dimValueGetter(c, l[d], p, d),
              f = ((f[p] = g), s[d]);
            g < f[0] && (f[0] = g), g > f[1] && (f[1] = g);
          }
      !i.persistent && i.clean && i.clean(),
        (this._rawCount = this._count = e),
        (this._extent = []);
    }),
    (l.prototype.count = function () {
      return this._count;
    }),
    (l.prototype.get = function (t, e) {
      return 0 <= e && e < this._count && (t = this._chunks[t])
        ? t[this.getRawIndex(e)]
        : NaN;
    }),
    (l.prototype.getValues = function (t, e) {
      var n = [],
        i = [];
      if (null == e) {
        (e = t), (t = []);
        for (var r = 0; r < this._dimensions.length; r++) i.push(r);
      } else i = t;
      for (var r = 0, o = i.length; r < o; r++) n.push(this.get(i[r], e));
      return n;
    }),
    (l.prototype.getByRawIndex = function (t, e) {
      return 0 <= e && e < this._rawCount && (t = this._chunks[t]) ? t[e] : NaN;
    }),
    (l.prototype.getSum = function (t) {
      var e = 0;
      if (this._chunks[t])
        for (var n = 0, i = this.count(); n < i; n++) {
          var r = this.get(t, n);
          isNaN(r) || (e += r);
        }
      return e;
    }),
    (l.prototype.getMedian = function (t) {
      var e = [],
        t =
          (this.each([t], function (t) {
            isNaN(t) || e.push(t);
          }),
          e.sort(function (t, e) {
            return t - e;
          })),
        n = this.count();
      return 0 === n
        ? 0
        : n % 2 == 1
        ? t[(n - 1) / 2]
        : (t[n / 2] + t[n / 2 - 1]) / 2;
    }),
    (l.prototype.indexOfRawIndex = function (t) {
      if (!(t >= this._rawCount || t < 0)) {
        if (!this._indices) return t;
        var e = this._indices,
          n = e[t];
        if (null != n && n < this._count && n === t) return t;
        for (var i = 0, r = this._count - 1; i <= r; ) {
          var o = ((i + r) / 2) | 0;
          if (e[o] < t) i = 1 + o;
          else {
            if (!(e[o] > t)) return o;
            r = o - 1;
          }
        }
      }
      return -1;
    }),
    (l.prototype.indicesOfNearest = function (t, e, n) {
      var i = this._chunks[t],
        r = [];
      if (i) {
        null == n && (n = 1 / 0);
        for (
          var o = 1 / 0, a = -1, s = 0, l = 0, u = this.count();
          l < u;
          l++
        ) {
          var h = e - i[this.getRawIndex(l)],
            c = Math.abs(h);
          c <= n &&
            ((c < o || (c === o && 0 <= h && a < 0)) &&
              ((o = c), (a = h), (s = 0)),
            h === a) &&
            (r[s++] = l);
        }
        r.length = s;
      }
      return r;
    }),
    (l.prototype.getIndices = function () {
      var t = this._indices;
      if (t) {
        var e = t.constructor,
          n = this._count;
        if (e === Array) for (var i = new e(n), r = 0; r < n; r++) i[r] = t[r];
        else i = new e(t.buffer, 0, n);
      } else
        for (
          i = new (e = ag(this._rawCount))(this.count()), r = 0;
          r < i.length;
          r++
        )
          i[r] = r;
      return i;
    }),
    (l.prototype.filter = function (t, e) {
      if (!this._count) return this;
      for (
        var n = this.clone(),
          i = n.count(),
          r = new (ag(n._rawCount))(i),
          o = [],
          a = t.length,
          s = 0,
          l = t[0],
          u = n._chunks,
          h = 0;
        h < i;
        h++
      ) {
        var c = void 0,
          p = n.getRawIndex(h);
        if (0 === a) c = e(h);
        else if (1 === a) c = e(u[l][p], h);
        else {
          for (var d = 0; d < a; d++) o[d] = u[t[d]][p];
          (o[d] = h), (c = e.apply(null, o));
        }
        c && (r[s++] = p);
      }
      return (
        s < i && (n._indices = r),
        (n._count = s),
        (n._extent = []),
        n._updateGetRawIdx(),
        n
      );
    }),
    (l.prototype.selectRange = function (t) {
      var e = this.clone(),
        n = e._count;
      if (!n) return this;
      var i = ht(t),
        r = i.length;
      if (!r) return this;
      var o = e.count(),
        a = new (ag(e._rawCount))(o),
        s = 0,
        l = i[0],
        u = t[l][0],
        h = t[l][1],
        c = e._chunks,
        l = !1;
      if (!e._indices) {
        var p = 0;
        if (1 === r) {
          for (var d = c[i[0]], f = 0; f < n; f++)
            (((v = d[f]) >= u && v <= h) || isNaN(v)) && (a[s++] = p), p++;
          l = !0;
        } else if (2 === r) {
          for (
            var d = c[i[0]], g = c[i[1]], y = t[i[1]][0], m = t[i[1]][1], f = 0;
            f < n;
            f++
          ) {
            var v = d[f],
              _ = g[f];
            ((u <= v && v <= h) || isNaN(v)) &&
              ((y <= _ && _ <= m) || isNaN(_)) &&
              (a[s++] = p),
              p++;
          }
          l = !0;
        }
      }
      if (!l)
        if (1 === r)
          for (f = 0; f < o; f++) {
            var x = e.getRawIndex(f);
            (((v = c[i[0]][x]) >= u && v <= h) || isNaN(v)) && (a[s++] = x);
          }
        else
          for (f = 0; f < o; f++) {
            for (var w = !0, b = ((x = e.getRawIndex(f)), 0); b < r; b++) {
              var S = i[b];
              ((v = c[S][x]) < t[S][0] || v > t[S][1]) && (w = !1);
            }
            w && (a[s++] = e.getRawIndex(f));
          }
      return (
        s < o && (e._indices = a),
        (e._count = s),
        (e._extent = []),
        e._updateGetRawIdx(),
        e
      );
    }),
    (l.prototype.map = function (t, e) {
      var n = this.clone(t);
      return this._updateDims(n, t, e), n;
    }),
    (l.prototype.modify = function (t, e) {
      this._updateDims(this, t, e);
    }),
    (l.prototype._updateDims = function (t, e, n) {
      for (
        var i = t._chunks,
          r = [],
          o = e.length,
          a = t.count(),
          s = [],
          l = t._rawExtent,
          u = 0;
        u < e.length;
        u++
      )
        l[e[u]] = sg();
      for (var h = 0; h < a; h++) {
        for (var c = t.getRawIndex(h), p = 0; p < o; p++) s[p] = i[e[p]][c];
        s[o] = h;
        var d = n && n.apply(null, s);
        if (null != d)
          for (
            "object" != typeof d && ((r[0] = d), (d = r)), u = 0;
            u < d.length;
            u++
          ) {
            var f = e[u],
              g = d[u],
              y = l[f],
              f = i[f];
            f && (f[c] = g), g < y[0] && (y[0] = g), g > y[1] && (y[1] = g);
          }
      }
    }),
    (l.prototype.lttbDownSample = function (t, e) {
      var n,
        i = this.clone([t], !0),
        r = i._chunks[t],
        o = this.count(),
        a = 0,
        s = Math.floor(1 / e),
        l = this.getRawIndex(0),
        u = new (ag(this._rawCount))(Math.min(2 * (Math.ceil(o / s) + 2), o));
      u[a++] = l;
      for (var h = 1; h < o - 1; h += s) {
        for (
          var c = Math.min(h + s, o - 1),
            p = Math.min(h + 2 * s, o),
            d = (p + c) / 2,
            f = 0,
            g = c;
          g < p;
          g++
        ) {
          var y = r[(M = this.getRawIndex(g))];
          isNaN(y) || (f += y);
        }
        f /= p - c;
        for (
          var c = h,
            m = Math.min(h + s, o),
            v = h - 1,
            _ = r[l],
            x = -1,
            w = c,
            b = -1,
            S = 0,
            g = c;
          g < m;
          g++
        ) {
          var M,
            y = r[(M = this.getRawIndex(g))];
          isNaN(y)
            ? (S++, b < 0 && (b = M))
            : (n = Math.abs((v - d) * (y - _) - (v - g) * (f - _))) > x &&
              ((x = n), (w = M));
        }
        0 < S && S < m - c && ((u[a++] = Math.min(b, w)), (w = Math.max(b, w))),
          (l = u[a++] = w);
      }
      return (
        (u[a++] = this.getRawIndex(o - 1)),
        (i._count = a),
        (i._indices = u),
        (i.getRawIndex = this._getRawIdx),
        i
      );
    }),
    (l.prototype.downSample = function (t, e, n, i) {
      for (
        var r = this.clone([t], !0),
          o = r._chunks,
          a = [],
          s = Math.floor(1 / e),
          l = o[t],
          u = this.count(),
          h = (r._rawExtent[t] = sg()),
          c = new (ag(this._rawCount))(Math.ceil(u / s)),
          p = 0,
          d = 0;
        d < u;
        d += s
      ) {
        u - d < s && (a.length = s = u - d);
        for (var f = 0; f < s; f++) {
          var g = this.getRawIndex(d + f);
          a[f] = l[g];
        }
        var y = n(a),
          m = this.getRawIndex(Math.min(d + i(a, y) || 0, u - 1));
        (l[m] = y) < h[0] && (h[0] = y), y > h[1] && (h[1] = y), (c[p++] = m);
      }
      return (r._count = p), (r._indices = c), r._updateGetRawIdx(), r;
    }),
    (l.prototype.each = function (t, e) {
      if (this._count)
        for (
          var n = t.length, i = this._chunks, r = 0, o = this.count();
          r < o;
          r++
        ) {
          var a = this.getRawIndex(r);
          switch (n) {
            case 0:
              e(r);
              break;
            case 1:
              e(i[t[0]][a], r);
              break;
            case 2:
              e(i[t[0]][a], i[t[1]][a], r);
              break;
            default:
              for (var s = 0, l = []; s < n; s++) l[s] = i[t[s]][a];
              (l[s] = r), e.apply(null, l);
          }
        }
    }),
    (l.prototype.getDataExtent = function (t) {
      var e = this._chunks[t],
        n = sg();
      if (!e) return n;
      var i,
        r = this.count();
      if (!this._indices) return this._rawExtent[t].slice();
      if ((i = this._extent[t])) return i.slice();
      for (var o = (i = n)[0], a = i[1], s = 0; s < r; s++) {
        var l = e[this.getRawIndex(s)];
        l < o && (o = l), a < l && (a = l);
      }
      return (this._extent[t] = i = [o, a]);
    }),
    (l.prototype.getRawDataItem = function (t) {
      var e = this.getRawIndex(t);
      if (this._provider.persistent) return this._provider.getItem(e);
      for (var n = [], i = this._chunks, r = 0; r < i.length; r++)
        n.push(i[r][e]);
      return n;
    }),
    (l.prototype.clone = function (t, e) {
      var n,
        i,
        r = new l(),
        o = this._chunks,
        a =
          t &&
          lt(
            t,
            function (t, e) {
              return (t[e] = !0), t;
            },
            {}
          );
      if (a)
        for (var s = 0; s < o.length; s++)
          r._chunks[s] = a[s]
            ? ((n = o[s]),
              (i = void 0),
              (i = n.constructor) === Array ? n.slice() : new i(n))
            : o[s];
      else r._chunks = o;
      return (
        this._copyCommonProps(r),
        e || (r._indices = this._cloneIndices()),
        r._updateGetRawIdx(),
        r
      );
    }),
    (l.prototype._copyCommonProps = function (t) {
      (t._count = this._count),
        (t._rawCount = this._rawCount),
        (t._provider = this._provider),
        (t._dimensions = this._dimensions),
        (t._extent = y(this._extent)),
        (t._rawExtent = y(this._rawExtent));
    }),
    (l.prototype._cloneIndices = function () {
      if (this._indices) {
        var t = this._indices.constructor,
          e = void 0;
        if (t === Array)
          for (var n = this._indices.length, e = new t(n), i = 0; i < n; i++)
            e[i] = this._indices[i];
        else e = new t(this._indices);
        return e;
      }
      return null;
    }),
    (l.prototype._getRawIdxIdentity = function (t) {
      return t;
    }),
    (l.prototype._getRawIdx = function (t) {
      return t < this._count && 0 <= t ? this._indices[t] : -1;
    }),
    (l.prototype._updateGetRawIdx = function () {
      this.getRawIndex = this._indices
        ? this._getRawIdx
        : this._getRawIdxIdentity;
    }),
    (l.internalField = void (eg = {
      arrayRows: hg,
      objectRows: function (t, e, n, i) {
        return Ef(t[e], this._dimensions[i]);
      },
      keyedColumns: hg,
      original: function (t, e, n, i) {
        t = t && (null == t.value ? t : t.value);
        return Ef(t instanceof Array ? t[i] : t, this._dimensions[i]);
      },
      typedArray: function (t, e, n, i) {
        return t[i];
      },
    }));
  var ug = l;
  function l() {
    (this._chunks = []),
      (this._rawExtent = []),
      (this._extent = []),
      (this._count = 0),
      (this._rawCount = 0),
      (this._calcDimNameToIdx = N());
  }
  function hg(t, e, n, i) {
    return Ef(t[i], this._dimensions[i]);
  }
  (pg.prototype.dirty = function () {
    this._setLocalSource([], []), (this._storeList = []), (this._dirty = !0);
  }),
    (pg.prototype._setLocalSource = function (t, e) {
      (this._sourceList = t),
        (this._upstreamSignList = e),
        this._versionSignBase++,
        9e10 < this._versionSignBase && (this._versionSignBase = 0);
    }),
    (pg.prototype._getVersionSign = function () {
      return this._sourceHost.uid + "_" + this._versionSignBase;
    }),
    (pg.prototype.prepareSource = function () {
      this._isDirty() && (this._createSource(), (this._dirty = !1));
    }),
    (pg.prototype._createSource = function () {
      this._setLocalSource([], []);
      var t,
        e,
        n,
        i,
        r,
        o,
        a,
        s = this._sourceHost,
        l = this._getUpstreamSourceManagers(),
        u = !!l.length;
      fg(s)
        ? ((i = s),
          (r = t = o = void 0),
          (e = u
            ? ((e = l[0]).prepareSource(),
              (o = (r = e.getSource()).data),
              (t = r.sourceFormat),
              [e._getVersionSign()])
            : ((t = gt((o = i.get("data", !0))) ? jp : Xp), [])),
          (i = this._getSourceMetaRawOption() || {}),
          (r = (r && r.metaRawOption) || {}),
          (a = R(i.seriesLayoutBy, r.seriesLayoutBy) || null),
          (n = R(i.sourceHeader, r.sourceHeader)),
          (i = R(i.dimensions, r.dimensions)),
          (r =
            a !== r.seriesLayoutBy || !!n != !!r.sourceHeader || i
              ? [
                  $d(
                    o,
                    { seriesLayoutBy: a, sourceHeader: n, dimensions: i },
                    t
                  ),
                ]
              : []))
        : ((o = s),
          (e = u
            ? ((r = (a = this._applyTransform(l)).sourceList),
              a.upstreamSignList)
            : ((r = [
                $d(o.get("source", !0), this._getSourceMetaRawOption(), null),
              ]),
              []))),
        this._setLocalSource(r, e);
    }),
    (pg.prototype._applyTransform = function (t) {
      var e,
        n = this._sourceHost,
        i = n.get("transform", !0),
        r = n.get("fromTransformResult", !0),
        o = (null != r && 1 !== t.length && gg(""), []),
        a = [];
      return (
        E(t, function (t) {
          t.prepareSource();
          var e = t.getSource(r || 0);
          null == r || e || gg(""), o.push(e), a.push(t._getVersionSign());
        }),
        i
          ? (e = Jf(i, o, n.componentIndex))
          : null != r &&
            (e = [
              new jd({
                data: (t = o[0]).data,
                sourceFormat: t.sourceFormat,
                seriesLayoutBy: t.seriesLayoutBy,
                dimensionsDefine: y(t.dimensionsDefine),
                startIndex: t.startIndex,
                dimensionsDetectedCount: t.dimensionsDetectedCount,
              }),
            ]),
        { sourceList: e, upstreamSignList: a }
      );
    }),
    (pg.prototype._isDirty = function () {
      if (this._dirty) return !0;
      for (
        var t = this._getUpstreamSourceManagers(), e = 0;
        e < t.length;
        e++
      ) {
        var n = t[e];
        if (n._isDirty() || this._upstreamSignList[e] !== n._getVersionSign())
          return !0;
      }
    }),
    (pg.prototype.getSource = function (t) {
      var e = this._sourceList[(t = t || 0)];
      return (
        e || ((e = this._getUpstreamSourceManagers())[0] && e[0].getSource(t))
      );
    }),
    (pg.prototype.getSharedDataStore = function (t) {
      var e = t.makeStoreSchema();
      return this._innerGetDataStore(e.dimensions, t.source, e.hash);
    }),
    (pg.prototype._innerGetDataStore = function (t, e, n) {
      var i,
        r = this._storeList,
        o = r[0],
        r = (o = o || (r[0] = {}))[n];
      return (
        r ||
          ((i = this._getUpstreamSourceManagers()[0]),
          fg(this._sourceHost) && i
            ? (r = i._innerGetDataStore(t, e, n))
            : (r = new ug()).initData(new sf(e, t.length), t),
          (o[n] = r)),
        r
      );
    }),
    (pg.prototype._getUpstreamSourceManagers = function () {
      var t,
        e = this._sourceHost;
      return fg(e)
        ? (t = id(e))
          ? [t.getSourceManager()]
          : []
        : F(
            (t = e).get("transform", !0) || t.get("fromTransformResult", !0)
              ? Ro(
                  t.ecModel,
                  "dataset",
                  {
                    index: t.get("fromDatasetIndex", !0),
                    id: t.get("fromDatasetId", !0),
                  },
                  Oo
                ).models
              : [],
            function (t) {
              return t.getSourceManager();
            }
          );
    }),
    (pg.prototype._getSourceMetaRawOption = function () {
      var t,
        e,
        n,
        i = this._sourceHost;
      return (
        fg(i)
          ? ((t = i.get("seriesLayoutBy", !0)),
            (e = i.get("sourceHeader", !0)),
            (n = i.get("dimensions", !0)))
          : this._getUpstreamSourceManagers().length ||
            ((t = (i = i).get("seriesLayoutBy", !0)),
            (e = i.get("sourceHeader", !0)),
            (n = i.get("dimensions", !0))),
        { seriesLayoutBy: t, sourceHeader: e, dimensions: n }
      );
    });
  var cg = pg;
  function pg(t) {
    (this._sourceList = []),
      (this._storeList = []),
      (this._upstreamSignList = []),
      (this._versionSignBase = 0),
      (this._dirty = !0),
      (this._sourceHost = t);
  }
  function dg(t) {
    t.option.transform && Dt(t.option.transform);
  }
  function fg(t) {
    return "series" === t.mainType;
  }
  function gg(t) {
    throw new Error(t);
  }
  var yg = "line-height:1";
  function mg(t, e) {
    var n = t.color || "#6e7079",
      i = t.fontSize || 12,
      r = t.fontWeight || "400",
      o = t.color || "#464646",
      a = t.fontSize || 14,
      t = t.fontWeight || "900";
    return "html" === e
      ? {
          nameStyle:
            "font-size:" +
            _e(i + "") +
            "px;color:" +
            _e(n) +
            ";font-weight:" +
            _e(r + ""),
          valueStyle:
            "font-size:" +
            _e(a + "") +
            "px;color:" +
            _e(o) +
            ";font-weight:" +
            _e(t + ""),
        }
      : {
          nameStyle: { fontSize: i, fill: n, fontWeight: r },
          valueStyle: { fontSize: a, fill: o, fontWeight: t },
        };
  }
  var vg = [0, 10, 20, 30],
    _g = ["", "\n", "\n\n", "\n\n\n"];
  function xg(t, e) {
    return (e.type = t), e;
  }
  function wg(t) {
    return "section" === t.type;
  }
  function bg(t) {
    return wg(t) ? Sg : Mg;
  }
  function Sg(i, r, t, o) {
    var n,
      e = r.noHeader,
      a =
        ((l = (function n(t) {
          var i, e, r;
          return wg(t)
            ? ((i = 0),
              (e = t.blocks.length),
              (r = 1 < e || (0 < e && !t.noHeader)),
              E(t.blocks, function (t) {
                var e = n(t);
                i <= e && (i = e + +(r && (!e || (wg(t) && !t.noHeader))));
              }),
              i)
            : 0;
        })(r)),
        { html: vg[l], richText: _g[l] }),
      s = [],
      l = r.blocks || [],
      u = (Tt(!l || V(l)), (l = l || []), i.orderMode),
      h =
        (r.sortBlocks &&
          u &&
          ((l = l.slice()),
          Bt((h = { valueAsc: "asc", valueDesc: "desc" }), u)
            ? ((n = new Hf(h[u], null)),
              l.sort(function (t, e) {
                return n.evaluate(t.sortParam, e.sortParam);
              }))
            : "seriesDesc" === u && l.reverse()),
        E(l, function (t, e) {
          var n = r.valueFormatter,
            n = bg(t)(
              n ? L(L({}, i), { valueFormatter: n }) : i,
              t,
              0 < e ? a.html : 0,
              o
            );
          null != n && s.push(n);
        }),
        "richText" === i.renderMode
          ? s.join(a.richText)
          : Cg(s.join(""), e ? t : a.html));
    return e
      ? h
      : ((u = xp(r.header, "ordinal", i.useUTC)),
        (l = mg(o, i.renderMode).nameStyle),
        "richText" === i.renderMode
          ? Ig(i, u, l) + a.richText + h
          : Cg(
              '<div style="' + l + ";" + yg + ';">' + _e(u) + "</div>" + h,
              t
            ));
  }
  function Mg(t, e, n, i) {
    var r,
      o,
      a,
      s,
      l = t.renderMode,
      u = e.noName,
      h = e.noValue,
      c = !e.markerType,
      p = e.name,
      d = t.useUTC,
      f =
        e.valueFormatter ||
        t.valueFormatter ||
        function (t) {
          return F((t = V(t) ? t : [t]), function (t, e) {
            return xp(t, V(o) ? o[e] : o, d);
          });
        };
    if (!u || !h)
      return (
        (r = c
          ? ""
          : t.markupStyleCreator.makeTooltipMarker(
              e.markerType,
              e.markerColor || "#333",
              l
            )),
        (p = u ? "" : xp(p, "ordinal", d)),
        (o = e.valueType),
        (f = h ? [] : f(e.value)),
        (e = !c || !u),
        (a = !c && u),
        (i = mg(i, l)),
        (s = i.nameStyle),
        (i = i.valueStyle),
        "richText" === l
          ? (c ? "" : r) +
            (u ? "" : Ig(t, p, s)) +
            (h
              ? ""
              : (function (t, e, n, i, r) {
                  (r = [r]), (i = i ? 10 : 20);
                  return (
                    n && r.push({ padding: [0, 0, 0, i], align: "right" }),
                    t.markupStyleCreator.wrapRichTextStyle(
                      V(e) ? e.join("  ") : e,
                      r
                    )
                  );
                })(t, f, e, a, i))
          : Cg(
              (c ? "" : r) +
                (u
                  ? ""
                  : '<span style="' +
                    s +
                    ";" +
                    (!c ? "margin-left:2px" : "") +
                    '">' +
                    _e(p) +
                    "</span>") +
                (h
                  ? ""
                  : (function (t, e, n, i) {
                      e = e
                        ? "float:right;margin-left:" + (n ? "10px" : "20px")
                        : "";
                      return (
                        (t = V(t) ? t : [t]),
                        '<span style="' +
                          e +
                          ";" +
                          i +
                          '">' +
                          F(t, _e).join("&nbsp;&nbsp;") +
                          "</span>"
                      );
                    })(f, e, a, i)),
              n
            )
      );
  }
  function Tg(t, e, n, i, r, o) {
    if (t)
      return bg(t)(
        {
          useUTC: r,
          renderMode: n,
          orderMode: i,
          markupStyleCreator: e,
          valueFormatter: t.valueFormatter,
        },
        t,
        0,
        o
      );
  }
  function Cg(t, e) {
    return (
      '<div style="margin: ' +
      e +
      "px 0 0;" +
      yg +
      ';">' +
      t +
      '<div style="clear:both"></div></div>'
    );
  }
  function Ig(t, e, n) {
    return t.markupStyleCreator.wrapRichTextStyle(e, n);
  }
  function Dg(t, e) {
    t = t.get("padding");
    return null != t ? t : "richText" === e ? [8, 10] : 10;
  }
  (Ag.prototype._generateStyleName = function () {
    return "__EC_aUTo_" + this._nextStyleNameId++;
  }),
    (Ag.prototype.makeTooltipMarker = function (t, e, n) {
      var i = "richText" === n ? this._generateStyleName() : null,
        e = Mp({ color: e, type: t, renderMode: n, markerId: i });
      return H(e) ? e : ((this.richTextStyles[i] = e.style), e.content);
    }),
    (Ag.prototype.wrapRichTextStyle = function (t, e) {
      var n = {},
        e =
          (V(e)
            ? E(e, function (t) {
                return L(n, t);
              })
            : L(n, e),
          this._generateStyleName());
      return (this.richTextStyles[e] = n), "{" + e + "|" + t + "}";
    });
  var kg = Ag;
  function Ag() {
    (this.richTextStyles = {}), (this._nextStyleNameId = co());
  }
  function Pg(t) {
    var e,
      n,
      i,
      r,
      o,
      a,
      s,
      l,
      u,
      h,
      c,
      p = t.series,
      d = t.dataIndex,
      t = t.multipleSeries,
      f = p.getData(),
      g = f.mapDimensionsAll("defaultedTooltip"),
      y = g.length,
      m = p.getRawValue(d),
      v = V(m),
      _ =
        ((_ = d),
        Tp((w = p).getData().getItemVisual(_, "style")[w.visualDrawType]));
    function x(t, e) {
      e = s.getDimensionInfo(e);
      e &&
        !1 !== e.otherDims.tooltip &&
        (l
          ? c.push(
              xg("nameValue", {
                markerType: "subItem",
                markerColor: a,
                name: e.displayName,
                value: t,
                valueType: e.type,
              })
            )
          : (u.push(t), h.push(e.type)));
    }
    1 < y || (v && !y)
      ? ((w = m),
        (r = d),
        (o = g),
        (a = _),
        (s = p.getData()),
        (l = lt(
          w,
          function (t, e, n) {
            n = s.getDimensionInfo(n);
            return t || (n && !1 !== n.tooltip && null != n.displayName);
          },
          !1
        )),
        (u = []),
        (h = []),
        (c = []),
        o.length
          ? E(o, function (t) {
              x(xf(s, r, t), t);
            })
          : E(w, x),
        (e = (o = { inlineValues: u, inlineValueTypes: h, blocks: c })
          .inlineValueTypes),
        (n = o.blocks),
        (i = (o = o.inlineValues)[0]))
      : y
      ? ((w = f.getDimensionInfo(g[0])), (i = o = xf(f, d, g[0])), (e = w.type))
      : (i = o = v ? m[0] : m);
    var y = To(p),
      g = (y && p.name) || "",
      w = f.getName(d),
      v = t ? g : w;
    return xg("section", {
      header: g,
      noHeader: t || !y,
      sortParam: i,
      blocks: [
        xg("nameValue", {
          markerType: "item",
          markerColor: _,
          name: v,
          noName: !Ct(v),
          value: o,
          valueType: e,
        }),
      ].concat(n || []),
    });
  }
  var Lg = ko();
  function Og(t, e) {
    return t.getName(e) || t.getId(e);
  }
  u(h, (Rg = g)),
    (h.prototype.init = function (t, e, n) {
      (this.seriesIndex = this.componentIndex),
        (this.dataTask = Mf({ count: zg, reset: Bg })),
        (this.dataTask.context = { model: this }),
        this.mergeDefaultAndTheme(t, n),
        (Lg(this).sourceManager = new cg(this)).prepareSource();
      t = this.getInitialData(t, n);
      Vg(t, this),
        (this.dataTask.context.data = t),
        (Lg(this).dataBeforeProcessed = t),
        Eg(this),
        this._initSelectedMapFromData(t);
    }),
    (h.prototype.mergeDefaultAndTheme = function (t, e) {
      var n = Op(this),
        i = n ? Np(t) : {},
        r = this.subType;
      g.hasClass(r),
        d(t, e.getTheme().get(this.subType)),
        d(t, this.getDefaultOption()),
        vo(t, "label", ["show"]),
        this.fillDataTextStyle(t.data),
        n && Rp(t, i, n);
    }),
    (h.prototype.mergeOption = function (t, e) {
      (t = d(this.option, t, !0)), this.fillDataTextStyle(t.data);
      var n = Op(this),
        n = (n && Rp(this.option, t, n), Lg(this).sourceManager),
        n = (n.dirty(), n.prepareSource(), this.getInitialData(t, e));
      Vg(n, this),
        this.dataTask.dirty(),
        (this.dataTask.context.data = n),
        (Lg(this).dataBeforeProcessed = n),
        Eg(this),
        this._initSelectedMapFromData(n);
    }),
    (h.prototype.fillDataTextStyle = function (t) {
      if (t && !gt(t))
        for (var e = ["show"], n = 0; n < t.length; n++)
          t[n] && t[n].label && vo(t[n], "label", e);
    }),
    (h.prototype.getInitialData = function (t, e) {}),
    (h.prototype.appendData = function (t) {
      this.getRawData().appendData(t.data);
    }),
    (h.prototype.getData = function (t) {
      var e = Gg(this);
      return e
        ? ((e = e.context.data), null == t ? e : e.getLinkedData(t))
        : Lg(this).data;
    }),
    (h.prototype.getAllData = function () {
      var t = this.getData();
      return t && t.getLinkedDataAll ? t.getLinkedDataAll() : [{ data: t }];
    }),
    (h.prototype.setData = function (t) {
      var e,
        n = Gg(this);
      n &&
        (((e = n.context).outputData = t), n !== this.dataTask) &&
        (e.data = t),
        (Lg(this).data = t);
    }),
    (h.prototype.getEncode = function () {
      var t = this.get("encode", !0);
      if (t) return N(t);
    }),
    (h.prototype.getSourceManager = function () {
      return Lg(this).sourceManager;
    }),
    (h.prototype.getSource = function () {
      return this.getSourceManager().getSource();
    }),
    (h.prototype.getRawData = function () {
      return Lg(this).dataBeforeProcessed;
    }),
    (h.prototype.getColorBy = function () {
      return this.get("colorBy") || "series";
    }),
    (h.prototype.isColorBySeries = function () {
      return "series" === this.getColorBy();
    }),
    (h.prototype.getBaseAxis = function () {
      var t = this.coordinateSystem;
      return t && t.getBaseAxis && t.getBaseAxis();
    }),
    (h.prototype.formatTooltip = function (t, e, n) {
      return Pg({ series: this, dataIndex: t, multipleSeries: e });
    }),
    (h.prototype.isAnimationEnabled = function () {
      var t = this.ecModel;
      return (
        !!(!b.node || (t && t.ssr)) &&
        !!(t =
          (t = this.getShallow("animation")) &&
          this.getData().count() > this.getShallow("animationThreshold")
            ? !1
            : t)
      );
    }),
    (h.prototype.restoreData = function () {
      this.dataTask.dirty();
    }),
    (h.prototype.getColorFromPalette = function (t, e, n) {
      var i = this.ecModel;
      return (
        ld.prototype.getColorFromPalette.call(this, t, e, n) ||
        i.getColorFromPalette(t, e, n)
      );
    }),
    (h.prototype.coordDimToDataDim = function (t) {
      return this.getRawData().mapDimensionsAll(t);
    }),
    (h.prototype.getProgressive = function () {
      return this.get("progressive");
    }),
    (h.prototype.getProgressiveThreshold = function () {
      return this.get("progressiveThreshold");
    }),
    (h.prototype.select = function (t, e) {
      this._innerSelect(this.getData(e), t);
    }),
    (h.prototype.unselect = function (t, e) {
      var n = this.option.selectedMap;
      if (n) {
        var i = this.option.selectedMode,
          r = this.getData(e);
        if ("series" === i || "all" === n)
          (this.option.selectedMap = {}), (this._selectedDataIndicesMap = {});
        else
          for (var o = 0; o < t.length; o++) {
            var a = Og(r, t[o]);
            (n[a] = !1), (this._selectedDataIndicesMap[a] = -1);
          }
      }
    }),
    (h.prototype.toggleSelect = function (t, e) {
      for (var n = [], i = 0; i < t.length; i++)
        (n[0] = t[i]),
          this.isSelected(t[i], e) ? this.unselect(n, e) : this.select(n, e);
    }),
    (h.prototype.getSelectedDataIndices = function () {
      if ("all" === this.option.selectedMap)
        return [].slice.call(this.getData().getIndices());
      for (
        var t = this._selectedDataIndicesMap, e = ht(t), n = [], i = 0;
        i < e.length;
        i++
      ) {
        var r = t[e[i]];
        0 <= r && n.push(r);
      }
      return n;
    }),
    (h.prototype.isSelected = function (t, e) {
      var n = this.option.selectedMap;
      return (
        !!n &&
        ((e = this.getData(e)), "all" === n || n[Og(e, t)]) &&
        !e.getItemModel(t).get(["select", "disabled"])
      );
    }),
    (h.prototype.isUniversalTransitionEnabled = function () {
      var t;
      return (
        !!this.__universalTransitionEnabled ||
        (!!(t = this.option.universalTransition) &&
          (!0 === t || (t && t.enabled)))
      );
    }),
    (h.prototype._innerSelect = function (t, e) {
      var n,
        i = this.option,
        r = i.selectedMode,
        o = e.length;
      if (r && o)
        if ("series" === r) i.selectedMap = "all";
        else if ("multiple" === r) {
          O(i.selectedMap) || (i.selectedMap = {});
          for (var a = i.selectedMap, s = 0; s < o; s++) {
            var l = e[s];
            (a[(n = Og(t, l))] = !0),
              (this._selectedDataIndicesMap[n] = t.getRawIndex(l));
          }
        } else
          ("single" !== r && !0 !== r) ||
            ((n = Og(t, (r = e[o - 1]))),
            (i.selectedMap = (((i = {})[n] = !0), i)),
            (this._selectedDataIndicesMap =
              (((i = {})[n] = t.getRawIndex(r)), i)));
    }),
    (h.prototype._initSelectedMapFromData = function (n) {
      var i;
      this.option.selectedMap ||
        ((i = []),
        n.hasItemOption &&
          n.each(function (t) {
            var e = n.getRawDataItem(t);
            e && e.selected && i.push(t);
          }),
        0 < i.length && this._innerSelect(n, i));
    }),
    (h.registerClass = function (t) {
      return g.registerClass(t);
    }),
    (h.protoInitialize =
      (((Tc = h.prototype).type = "series.__base__"),
      (Tc.seriesIndex = 0),
      (Tc.ignoreStyleOnData = !1),
      (Tc.hasSymbolVisual = !1),
      (Tc.defaultSymbol = "circle"),
      (Tc.visualStyleAccessPath = "itemStyle"),
      void (Tc.visualDrawType = "fill")));
  var Rg,
    Ng = h;
  function h() {
    var t = (null !== Rg && Rg.apply(this, arguments)) || this;
    return (t._selectedDataIndicesMap = {}), t;
  }
  function Eg(t) {
    var e,
      n,
      i = t.name;
    To(t) ||
      (t.name =
        ((t = (e = (t = t).getRawData()).mapDimensionsAll("seriesName")),
        (n = []),
        E(t, function (t) {
          t = e.getDimensionInfo(t);
          t.displayName && n.push(t.displayName);
        }),
        n.join(" ") || i));
  }
  function zg(t) {
    return t.model.getRawData().count();
  }
  function Bg(t) {
    t = t.model;
    return t.setData(t.getRawData().cloneShallow()), Fg;
  }
  function Fg(t, e) {
    e.outputData &&
      t.end > e.outputData.count() &&
      e.model.getRawData().cloneShallow(e.outputData);
  }
  function Vg(e, n) {
    E(Nt(e.CHANGABLE_METHODS, e.DOWNSAMPLE_METHODS), function (t) {
      e.wrapMethod(t, pt(Hg, n));
    });
  }
  function Hg(t, e) {
    t = Gg(t);
    return t && t.setOutputEnd((e || this).count()), e;
  }
  function Gg(t) {
    var e,
      n = (t.ecModel || {}).scheduler,
      n = n && n.getPipeline(t.uid);
    if (n)
      return (n = n.currentTask) && (e = n.agentStubMap) ? e.get(t.uid) : n;
  }
  at(Ng, kc), at(Ng, ld), Go(Ng, g);
  (Ug.prototype.init = function (t, e) {}),
    (Ug.prototype.render = function (t, e, n, i) {}),
    (Ug.prototype.dispose = function (t, e) {}),
    (Ug.prototype.updateView = function (t, e, n, i) {}),
    (Ug.prototype.updateLayout = function (t, e, n, i) {}),
    (Ug.prototype.updateVisual = function (t, e, n, i) {}),
    (Ug.prototype.toggleBlurSeries = function (t, e, n) {}),
    (Ug.prototype.eachRendered = function (t) {
      var e = this.group;
      e && e.traverse(t);
    });
  var Wg = Ug;
  function Ug() {
    (this.group = new Fr()), (this.uid = Nc("viewComponent"));
  }
  function Xg() {
    var o = ko();
    return function (t) {
      var e = o(t),
        t = t.pipelineContext,
        n = !!e.large,
        i = !!e.progressiveRender,
        r = (e.large = !(!t || !t.large)),
        e = (e.progressiveRender = !(!t || !t.progressiveRender));
      return !(n == r && i == e) && "reset";
    };
  }
  Ho(Wg), Yo(Wg);
  var Yg = ko(),
    qg = Xg(),
    Zg =
      ((jg.prototype.init = function (t, e) {}),
      (jg.prototype.render = function (t, e, n, i) {}),
      (jg.prototype.highlight = function (t, e, n, i) {
        t = t.getData(i && i.dataType);
        t && $g(t, i, "emphasis");
      }),
      (jg.prototype.downplay = function (t, e, n, i) {
        t = t.getData(i && i.dataType);
        t && $g(t, i, "normal");
      }),
      (jg.prototype.remove = function (t, e) {
        this.group.removeAll();
      }),
      (jg.prototype.dispose = function (t, e) {}),
      (jg.prototype.updateView = function (t, e, n, i) {
        this.render(t, e, n, i);
      }),
      (jg.prototype.updateLayout = function (t, e, n, i) {
        this.render(t, e, n, i);
      }),
      (jg.prototype.updateVisual = function (t, e, n, i) {
        this.render(t, e, n, i);
      }),
      (jg.prototype.eachRendered = function (t) {
        oc(this.group, t);
      }),
      (jg.markUpdateMethod = function (t, e) {
        Yg(t).updateMethod = e;
      }),
      (jg.protoInitialize = void (jg.prototype.type = "chart")),
      jg);
  function jg() {
    (this.group = new Fr()),
      (this.uid = Nc("viewChart")),
      (this.renderTask = Mf({ plan: Qg, reset: Jg })),
      (this.renderTask.context = { view: this });
  }
  function Kg(t, e, n) {
    t && Fl(t) && ("emphasis" === e ? bl : Sl)(t, n);
  }
  function $g(e, t, n) {
    var i,
      r = Do(e, t),
      o =
        t && null != t.highlightKey
          ? ((t = t.highlightKey),
            (i = null == (i = Xs[t]) && Us <= 32 ? (Xs[t] = Us++) : i))
          : null;
    null != r
      ? E(mo(r), function (t) {
          Kg(e.getItemGraphicEl(t), n, o);
        })
      : e.eachItemGraphicEl(function (t) {
          Kg(t, n, o);
        });
  }
  function Qg(t) {
    return qg(t.model);
  }
  function Jg(t) {
    var e = t.model,
      n = t.ecModel,
      i = t.api,
      r = t.payload,
      o = e.pipelineContext.progressiveRender,
      t = t.view,
      a = r && Yg(r).updateMethod,
      o = o ? "incrementalPrepareRender" : a && t[a] ? a : "render";
    return "render" !== o && t[o](e, n, i, r), ty[o];
  }
  Ho(Zg), Yo(Zg);
  var ty = {
      incrementalPrepareRender: {
        progress: function (t, e) {
          e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload);
        },
      },
      render: {
        forceFirstProgress: !0,
        progress: function (t, e) {
          e.view.render(e.model, e.ecModel, e.api, e.payload);
        },
      },
    },
    ey = "\0__throttleOriginMethod",
    ny = "\0__throttleRate",
    iy = "\0__throttleType";
  function ry(t, r, o) {
    var a,
      s,
      l,
      u,
      h,
      c = 0,
      p = 0,
      d = null;
    function f() {
      (p = new Date().getTime()), (d = null), t.apply(l, u || []);
    }
    r = r || 0;
    function e() {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      (a = new Date().getTime()), (l = this), (u = t);
      var n = h || r,
        i = h || o;
      (h = null),
        (s = a - (i ? c : p) - n),
        clearTimeout(d),
        i ? (d = setTimeout(f, n)) : 0 <= s ? f() : (d = setTimeout(f, -s)),
        (c = a);
    }
    return (
      (e.clear = function () {
        d && (clearTimeout(d), (d = null));
      }),
      (e.debounceNextCall = function (t) {
        h = t;
      }),
      e
    );
  }
  function oy(t, e, n, i) {
    var r = t[e];
    if (r) {
      var o = r[ey] || r,
        a = r[iy];
      if (r[ny] !== n || a !== i) {
        if (null == n || !i) return (t[e] = o);
        ((r = t[e] = ry(o, n, "debounce" === i))[ey] = o),
          (r[iy] = i),
          (r[ny] = n);
      }
    }
  }
  function ay(t, e) {
    var n = t[e];
    n && n[ey] && (n.clear && n.clear(), (t[e] = n[ey]));
  }
  var sy = ko(),
    ly = { itemStyle: qo(Ic, !0), lineStyle: qo(Sc, !0) },
    uy = { lineStyle: "stroke", itemStyle: "fill" };
  function hy(t, e) {
    return (
      t.visualStyleMapper ||
      ly[e] ||
      (console.warn("Unknown style type '" + e + "'."), ly.itemStyle)
    );
  }
  function cy(t, e) {
    return (
      t.visualDrawType ||
      uy[e] ||
      (console.warn("Unknown style type '" + e + "'."), "fill")
    );
  }
  var jo = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function (r, t) {
        var e = r.getData(),
          n = r.visualStyleAccessPath || "itemStyle",
          i = r.getModel(n),
          o = hy(r, n)(i),
          i = i.getShallow("decal"),
          a = (i && (e.setVisual("decal", i), (i.dirty = !0)), cy(r, n)),
          i = o[a],
          s = S(i) ? i : null,
          n = "auto" === o.fill || "auto" === o.stroke;
        if (
          ((o[a] && !s && !n) ||
            ((i = r.getColorFromPalette(r.name, null, t.getSeriesCount())),
            o[a] || ((o[a] = i), e.setVisual("colorFromPalette", !0)),
            (o.fill = "auto" === o.fill || S(o.fill) ? i : o.fill),
            (o.stroke = "auto" === o.stroke || S(o.stroke) ? i : o.stroke)),
          e.setVisual("style", o),
          e.setVisual("drawType", a),
          !t.isSeriesFiltered(r) && s)
        )
          return (
            e.setVisual("colorFromPalette", !1),
            {
              dataEach: function (t, e) {
                var n = r.getDataParams(e),
                  i = L({}, o);
                (i[a] = s(n)), t.setItemVisual(e, "style", i);
              },
            }
          );
      },
    },
    py = new Lc(),
    Zh = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function (t, e) {
        var i, r, o;
        if (!t.ignoreStyleOnData && !e.isSeriesFiltered(t))
          return (
            (e = t.getData()),
            (i = t.visualStyleAccessPath || "itemStyle"),
            (r = hy(t, i)),
            (o = e.getVisual("drawType")),
            {
              dataEach: e.hasItemOption
                ? function (t, e) {
                    var n = t.getRawDataItem(e);
                    n &&
                      n[i] &&
                      ((py.option = n[i]),
                      (n = r(py)),
                      L(t.ensureUniqueItemVisual(e, "style"), n),
                      py.option.decal &&
                        (t.setItemVisual(e, "decal", py.option.decal),
                        (py.option.decal.dirty = !0)),
                      o in n) &&
                      t.setItemVisual(e, "colorFromPalette", !1);
                  }
                : null,
            }
          );
      },
    },
    jc = {
      performRawSeries: !0,
      overallReset: function (e) {
        var i = N();
        e.eachSeries(function (t) {
          var e,
            n = t.getColorBy();
          t.isColorBySeries() ||
            ((n = t.type + "-" + n),
            (e = i.get(n)) || i.set(n, (e = {})),
            (sy(t).scope = e));
        }),
          e.eachSeries(function (i) {
            var r, o, a, s, t, l;
            i.isColorBySeries() ||
              e.isSeriesFiltered(i) ||
              ((r = i.getRawData()),
              (o = {}),
              (a = i.getData()),
              (s = sy(i).scope),
              (t = i.visualStyleAccessPath || "itemStyle"),
              (l = cy(i, t)),
              a.each(function (t) {
                var e = a.getRawIndex(t);
                o[e] = t;
              }),
              r.each(function (t) {
                var e,
                  n = o[t];
                a.getItemVisual(n, "colorFromPalette") &&
                  ((n = a.ensureUniqueItemVisual(n, "style")),
                  (t = r.getName(t) || t + ""),
                  (e = r.count()),
                  (n[l] = i.getColorFromPalette(t, s, e)));
              }));
          });
      },
    },
    dy = Math.PI;
  (gy.prototype.restoreData = function (t, e) {
    t.restoreData(e),
      this._stageTaskMap.each(function (t) {
        t = t.overallTask;
        t && t.dirty();
      });
  }),
    (gy.prototype.getPerformArgs = function (t, e) {
      var n, i;
      if (t.__pipeline)
        return (
          (i = (n = this._pipelineMap.get(t.__pipeline.id)).context),
          {
            step: (e =
              !e &&
              n.progressiveEnabled &&
              (!i || i.progressiveRender) &&
              t.__idxInPipeline > n.blockIndex
                ? n.step
                : null),
            modBy: null != (t = i && i.modDataCount) ? Math.ceil(t / e) : null,
            modDataCount: t,
          }
        );
    }),
    (gy.prototype.getPipeline = function (t) {
      return this._pipelineMap.get(t);
    }),
    (gy.prototype.updateStreamModes = function (t, e) {
      var n = this._pipelineMap.get(t.uid),
        i = t.getData().count(),
        e =
          n.progressiveEnabled &&
          e.incrementalPrepareRender &&
          i >= n.threshold,
        r = t.get("large") && i >= t.get("largeThreshold"),
        i = "mod" === t.get("progressiveChunkMode") ? i : null;
      t.pipelineContext = n.context = {
        progressiveRender: e,
        modDataCount: i,
        large: r,
      };
    }),
    (gy.prototype.restorePipelines = function (t) {
      var i = this,
        r = (i._pipelineMap = N());
      t.eachSeries(function (t) {
        var e = t.getProgressive(),
          n = t.uid;
        r.set(n, {
          id: n,
          head: null,
          tail: null,
          threshold: t.getProgressiveThreshold(),
          progressiveEnabled:
            e && !(t.preventIncremental && t.preventIncremental()),
          blockIndex: -1,
          step: Math.round(e || 700),
          count: 0,
        }),
          i._pipe(t, t.dataTask);
      });
    }),
    (gy.prototype.prepareStageTasks = function () {
      var n = this._stageTaskMap,
        i = this.api.getModel(),
        r = this.api;
      E(
        this._allHandlers,
        function (t) {
          var e = n.get(t.uid) || n.set(t.uid, {});
          Tt(!(t.reset && t.overallReset), ""),
            t.reset && this._createSeriesStageTask(t, e, i, r),
            t.overallReset && this._createOverallStageTask(t, e, i, r);
        },
        this
      );
    }),
    (gy.prototype.prepareView = function (t, e, n, i) {
      var r = t.renderTask,
        o = r.context;
      (o.model = e),
        (o.ecModel = n),
        (o.api = i),
        (r.__block = !t.incrementalPrepareRender),
        this._pipe(e, r);
    }),
    (gy.prototype.performDataProcessorTasks = function (t, e) {
      this._performStageTasks(this._dataProcessorHandlers, t, e, { block: !0 });
    }),
    (gy.prototype.performVisualTasks = function (t, e, n) {
      this._performStageTasks(this._visualHandlers, t, e, n);
    }),
    (gy.prototype._performStageTasks = function (t, s, l, u) {
      u = u || {};
      var h = !1,
        c = this;
      function p(t, e) {
        return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id));
      }
      E(t, function (i, t) {
        var e, n, r, o, a;
        (u.visualType && u.visualType !== i.visualType) ||
          ((e = (n = c._stageTaskMap.get(i.uid)).seriesTaskMap),
          (n = n.overallTask)
            ? ((o = n.agentStubMap).each(function (t) {
                p(u, t) && (t.dirty(), (r = !0));
              }),
              r && n.dirty(),
              c.updatePayload(n, l),
              (a = c.getPerformArgs(n, u.block)),
              o.each(function (t) {
                t.perform(a);
              }),
              n.perform(a) && (h = !0))
            : e &&
              e.each(function (t, e) {
                p(u, t) && t.dirty();
                var n = c.getPerformArgs(t, u.block);
                (n.skip =
                  !i.performRawSeries && s.isSeriesFiltered(t.context.model)),
                  c.updatePayload(t, l),
                  t.perform(n) && (h = !0);
              }));
      }),
        (this.unfinished = h || this.unfinished);
    }),
    (gy.prototype.performSeriesTasks = function (t) {
      var e;
      t.eachSeries(function (t) {
        e = t.dataTask.perform() || e;
      }),
        (this.unfinished = e || this.unfinished);
    }),
    (gy.prototype.plan = function () {
      this._pipelineMap.each(function (t) {
        var e = t.tail;
        do {
          if (e.__block) {
            t.blockIndex = e.__idxInPipeline;
            break;
          }
        } while ((e = e.getUpstream()));
      });
    }),
    (gy.prototype.updatePayload = function (t, e) {
      "remain" !== e && (t.context.payload = e);
    }),
    (gy.prototype._createSeriesStageTask = function (n, t, i, r) {
      var o = this,
        a = t.seriesTaskMap,
        s = (t.seriesTaskMap = N()),
        t = n.seriesType,
        e = n.getTargetSeries;
      function l(t) {
        var e = t.uid,
          e = s.set(
            e,
            (a && a.get(e)) || Mf({ plan: xy, reset: wy, count: My })
          );
        (e.context = {
          model: t,
          ecModel: i,
          api: r,
          useClearVisual: n.isVisual && !n.isLayout,
          plan: n.plan,
          reset: n.reset,
          scheduler: o,
        }),
          o._pipe(t, e);
      }
      n.createOnAllSeries
        ? i.eachRawSeries(l)
        : t
        ? i.eachRawSeriesByType(t, l)
        : e && e(i, r).each(l);
    }),
    (gy.prototype._createOverallStageTask = function (t, e, n, i) {
      var r = this,
        o = (e.overallTask = e.overallTask || Mf({ reset: yy })),
        a =
          ((o.context = {
            ecModel: n,
            api: i,
            overallReset: t.overallReset,
            scheduler: r,
          }),
          o.agentStubMap),
        s = (o.agentStubMap = N()),
        e = t.seriesType,
        l = t.getTargetSeries,
        u = !0,
        h = !1;
      function c(t) {
        var e = t.uid,
          e = s.set(
            e,
            (a && a.get(e)) || ((h = !0), Mf({ reset: my, onDirty: _y }))
          );
        (e.context = { model: t, overallProgress: u }),
          (e.agent = o),
          (e.__block = u),
          r._pipe(t, e);
      }
      Tt(!t.createOnAllSeries, ""),
        e
          ? n.eachRawSeriesByType(e, c)
          : l
          ? l(n, i).each(c)
          : ((u = !1), E(n.getSeries(), c)),
        h && o.dirty();
    }),
    (gy.prototype._pipe = function (t, e) {
      (t = t.uid), (t = this._pipelineMap.get(t));
      t.head || (t.head = e),
        t.tail && t.tail.pipe(e),
        ((t.tail = e).__idxInPipeline = t.count++),
        (e.__pipeline = t);
    }),
    (gy.wrapStageHandler = function (t, e) {
      return (
        ((t = S(t)
          ? {
              overallReset: t,
              seriesType: (function (t) {
                Ty = null;
                try {
                  t(Cy, Iy);
                } catch (t) {}
                return Ty;
              })(t),
            }
          : t).uid = Nc("stageHandler")),
        e && (t.visualType = e),
        t
      );
    });
  var fy = gy;
  function gy(t, e, n, i) {
    (this._stageTaskMap = N()),
      (this.ecInstance = t),
      (this.api = e),
      (n = this._dataProcessorHandlers = n.slice()),
      (i = this._visualHandlers = i.slice()),
      (this._allHandlers = n.concat(i));
  }
  function yy(t) {
    t.overallReset(t.ecModel, t.api, t.payload);
  }
  function my(t) {
    return t.overallProgress && vy;
  }
  function vy() {
    this.agent.dirty(), this.getDownstream().dirty();
  }
  function _y() {
    this.agent && this.agent.dirty();
  }
  function xy(t) {
    return t.plan ? t.plan(t.model, t.ecModel, t.api, t.payload) : null;
  }
  function wy(t) {
    t.useClearVisual && t.data.clearAllVisual();
    t = t.resetDefines = mo(t.reset(t.model, t.ecModel, t.api, t.payload));
    return 1 < t.length
      ? F(t, function (t, e) {
          return Sy(e);
        })
      : by;
  }
  var by = Sy(0);
  function Sy(o) {
    return function (t, e) {
      var n = e.data,
        i = e.resetDefines[o];
      if (i && i.dataEach)
        for (var r = t.start; r < t.end; r++) i.dataEach(n, r);
      else i && i.progress && i.progress(t, n);
    };
  }
  function My(t) {
    return t.data.count();
  }
  var Ty,
    Cy = {},
    Iy = {};
  function Dy(t, e) {
    for (var n in e.prototype) t[n] = Ft;
  }
  Dy(Cy, gd),
    Dy(Iy, _d),
    (Cy.eachSeriesByType = Cy.eachRawSeriesByType =
      function (t) {
        Ty = t;
      }),
    (Cy.eachComponent = function (t) {
      "series" === t.mainType && t.subType && (Ty = t.subType);
    });
  function ky() {
    return {
      axisLine: { lineStyle: { color: Ay } },
      splitLine: { lineStyle: { color: "#484753" } },
      splitArea: {
        areaStyle: {
          color: ["rgba(255,255,255,0.02)", "rgba(255,255,255,0.05)"],
        },
      },
      minorSplitLine: { lineStyle: { color: "#20203B" } },
    };
  }
  var Tc = [
      "#37A2DA",
      "#32C5E9",
      "#67E0E3",
      "#9FE6B8",
      "#FFDB5C",
      "#ff9f7f",
      "#fb7293",
      "#E062AE",
      "#E690D1",
      "#e7bcf3",
      "#9d96f5",
      "#8378EA",
      "#96BFFF",
    ],
    kc = {
      color: Tc,
      colorLayer: [
        ["#37A2DA", "#ffd85c", "#fd7b5f"],
        ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"],
        [
          "#37A2DA",
          "#32C5E9",
          "#9FE6B8",
          "#FFDB5C",
          "#ff9f7f",
          "#fb7293",
          "#e7bcf3",
          "#8378EA",
          "#96BFFF",
        ],
        Tc,
      ],
    },
    Ay = "#B9B8CE",
    Ic = "#100C2A",
    Sc = [
      "#4992ff",
      "#7cffb2",
      "#fddd60",
      "#ff6e76",
      "#58d9f9",
      "#05c091",
      "#ff8a45",
      "#8d48e3",
      "#dd79ff",
    ],
    Tc = {
      darkMode: !0,
      color: Sc,
      backgroundColor: Ic,
      axisPointer: {
        lineStyle: { color: "#817f91" },
        crossStyle: { color: "#817f91" },
        label: { color: "#fff" },
      },
      legend: { textStyle: { color: Ay } },
      textStyle: { color: Ay },
      title: {
        textStyle: { color: "#EEF1FA" },
        subtextStyle: { color: "#B9B8CE" },
      },
      toolbox: { iconStyle: { borderColor: Ay } },
      dataZoom: {
        borderColor: "#71708A",
        textStyle: { color: Ay },
        brushStyle: { color: "rgba(135,163,206,0.3)" },
        handleStyle: { color: "#353450", borderColor: "#C5CBE3" },
        moveHandleStyle: { color: "#B0B6C3", opacity: 0.3 },
        fillerColor: "rgba(135,163,206,0.2)",
        emphasis: {
          handleStyle: { borderColor: "#91B7F2", color: "#4D587D" },
          moveHandleStyle: { color: "#636D9A", opacity: 0.7 },
        },
        dataBackground: {
          lineStyle: { color: "#71708A", width: 1 },
          areaStyle: { color: "#71708A" },
        },
        selectedDataBackground: {
          lineStyle: { color: "#87A3CE" },
          areaStyle: { color: "#87A3CE" },
        },
      },
      visualMap: { textStyle: { color: Ay } },
      timeline: {
        lineStyle: { color: Ay },
        label: { color: Ay },
        controlStyle: { color: Ay, borderColor: Ay },
      },
      calendar: {
        itemStyle: { color: Ic },
        dayLabel: { color: Ay },
        monthLabel: { color: Ay },
        yearLabel: { color: Ay },
      },
      timeAxis: ky(),
      logAxis: ky(),
      valueAxis: ky(),
      categoryAxis: ky(),
      line: { symbol: "circle" },
      graph: { color: Sc },
      gauge: {
        title: { color: Ay },
        axisLine: { lineStyle: { color: [[1, "rgba(207,212,219,0.2)"]] } },
        axisLabel: { color: Ay },
        detail: { color: "#EEF1FA" },
      },
      candlestick: {
        itemStyle: {
          color: "#f64e56",
          color0: "#54ea92",
          borderColor: "#f64e56",
          borderColor0: "#54ea92",
        },
      },
    },
    Py =
      ((Tc.categoryAxis.splitLine.show = !1),
      (Ly.prototype.normalizeQuery = function (t) {
        var e,
          a,
          s,
          l = {},
          u = {},
          h = {};
        return (
          H(t)
            ? ((e = Vo(t)),
              (l.mainType = e.main || null),
              (l.subType = e.sub || null))
            : ((a = ["Index", "Name", "Id"]),
              (s = { name: 1, dataIndex: 1, dataType: 1 }),
              E(t, function (t, e) {
                for (var n = !1, i = 0; i < a.length; i++) {
                  var r = a[i],
                    o = e.lastIndexOf(r);
                  0 < o &&
                    o === e.length - r.length &&
                    "data" !== (o = e.slice(0, o)) &&
                    ((l.mainType = o), (l[r.toLowerCase()] = t), (n = !0));
                }
                s.hasOwnProperty(e) && ((u[e] = t), (n = !0)), n || (h[e] = t);
              })),
          { cptQuery: l, dataQuery: u, otherQuery: h }
        );
      }),
      (Ly.prototype.filter = function (t, e) {
        var n,
          i,
          r,
          o,
          a,
          s = this.eventInfo;
        return (
          !s ||
          ((n = s.targetEl),
          (i = s.packedEvent),
          (r = s.model),
          (s = s.view),
          !r) ||
          !s ||
          ((o = e.cptQuery),
          (a = e.dataQuery),
          l(o, r, "mainType") &&
            l(o, r, "subType") &&
            l(o, r, "index", "componentIndex") &&
            l(o, r, "name") &&
            l(o, r, "id") &&
            l(a, i, "name") &&
            l(a, i, "dataIndex") &&
            l(a, i, "dataType") &&
            (!s.filterForExposedEvent ||
              s.filterForExposedEvent(t, e.otherQuery, n, i)))
        );
        function l(t, e, n, i) {
          return null == t[n] || e[i || n] === t[n];
        }
      }),
      (Ly.prototype.afterTrigger = function () {
        this.eventInfo = null;
      }),
      Ly);
  function Ly() {}
  var Oy = ["symbol", "symbolSize", "symbolRotate", "symbolOffset"],
    Ry = Oy.concat(["symbolKeepAspect"]),
    Ic = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function (a, t) {
        var e = a.getData();
        if (
          (a.legendIcon && e.setVisual("legendIcon", a.legendIcon),
          a.hasSymbolVisual)
        ) {
          for (var s, n = {}, l = {}, i = !1, r = 0; r < Oy.length; r++) {
            var o = Oy[r],
              u = a.get(o);
            S(u) ? ((i = !0), (l[o] = u)) : (n[o] = u);
          }
          if (
            ((n.symbol = n.symbol || a.defaultSymbol),
            e.setVisual(
              L(
                {
                  legendIcon: a.legendIcon || n.symbol,
                  symbolKeepAspect: a.get("symbolKeepAspect"),
                },
                n
              )
            ),
            !t.isSeriesFiltered(a))
          )
            return (
              (s = ht(l)),
              {
                dataEach: i
                  ? function (t, e) {
                      for (
                        var n = a.getRawValue(e), i = a.getDataParams(e), r = 0;
                        r < s.length;
                        r++
                      ) {
                        var o = s[r];
                        t.setItemVisual(e, o, l[o](n, i));
                      }
                    }
                  : null,
              }
            );
        }
      },
    },
    Sc = {
      createOnAllSeries: !0,
      performRawSeries: !0,
      reset: function (t, e) {
        if (t.hasSymbolVisual && !e.isSeriesFiltered(t))
          return {
            dataEach: t.getData().hasItemOption
              ? function (t, e) {
                  for (var n = t.getItemModel(e), i = 0; i < Ry.length; i++) {
                    var r = Ry[i],
                      o = n.getShallow(r, !0);
                    null != o && t.setItemVisual(e, r, o);
                  }
                }
              : null,
          };
      },
    };
  function Ny(o, t) {
    E(
      [
        [o + "ToggleSelect", "toggleSelect"],
        [o + "Select", "select"],
        [o + "UnSelect", "unselect"],
      ],
      function (r) {
        t(r[0], function (t, e, n) {
          var i;
          (t = L({}, t)),
            n.dispatchAction(
              L(t, {
                type: r[1],
                seriesIndex:
                  ((n = t),
                  (i = []),
                  e.eachComponent(
                    { mainType: "series", subType: o, query: n },
                    function (t) {
                      i.push(t.seriesIndex);
                    }
                  ),
                  i),
              })
            );
        });
      }
    );
  }
  function Ey(t, e, s, n, l) {
    var u = t + e;
    s.isSilent(u) ||
      n.eachComponent({ mainType: "series", subType: "pie" }, function (t) {
        for (
          var e,
            n,
            i = t.seriesIndex,
            r = t.option.selectedMap,
            o = l.selected,
            a = 0;
          a < o.length;
          a++
        )
          o[a].seriesIndex === i &&
            ((n = Do((e = t.getData()), l.fromActionPayload)),
            s.trigger(u, {
              type: u,
              seriesId: t.id,
              name: V(n) ? e.getName(n[0]) : e.getName(n),
              selected: H(r) ? r : L({}, r),
            }));
      });
  }
  function zy(t, e, n) {
    for (var i; t && (!e(t) || ((i = t), !n)); ) t = t.__hostTarget || t.parent;
    return i;
  }
  var By = Math.round(9 * Math.random()),
    Fy = "function" == typeof Object.defineProperty,
    Vy =
      ((Hy.prototype.get = function (t) {
        return this._guard(t)[this._id];
      }),
      (Hy.prototype.set = function (t, e) {
        t = this._guard(t);
        return (
          Fy
            ? Object.defineProperty(t, this._id, {
                value: e,
                enumerable: !1,
                configurable: !0,
              })
            : (t[this._id] = e),
          this
        );
      }),
      (Hy.prototype.delete = function (t) {
        return !!this.has(t) && (delete this._guard(t)[this._id], !0);
      }),
      (Hy.prototype.has = function (t) {
        return !!this._guard(t)[this._id];
      }),
      (Hy.prototype._guard = function (t) {
        if (t !== Object(t))
          throw TypeError("Value of WeakMap is not a non-null object.");
        return t;
      }),
      Hy);
  function Hy() {
    this._id = "__ec_inner_" + By++;
  }
  var Gy = j.extend({
      type: "triangle",
      shape: { cx: 0, cy: 0, width: 0, height: 0 },
      buildPath: function (t, e) {
        var n = e.cx,
          i = e.cy,
          r = e.width / 2,
          e = e.height / 2;
        t.moveTo(n, i - e),
          t.lineTo(n + r, i + e),
          t.lineTo(n - r, i + e),
          t.closePath();
      },
    }),
    Wy = j.extend({
      type: "diamond",
      shape: { cx: 0, cy: 0, width: 0, height: 0 },
      buildPath: function (t, e) {
        var n = e.cx,
          i = e.cy,
          r = e.width / 2,
          e = e.height / 2;
        t.moveTo(n, i - e),
          t.lineTo(n + r, i),
          t.lineTo(n, i + e),
          t.lineTo(n - r, i),
          t.closePath();
      },
    }),
    Uy = j.extend({
      type: "pin",
      shape: { x: 0, y: 0, width: 0, height: 0 },
      buildPath: function (t, e) {
        var n = e.x,
          i = e.y,
          r = (e.width / 5) * 3,
          e = Math.max(r, e.height),
          r = r / 2,
          o = (r * r) / (e - r),
          e = i - e + r + o,
          a = Math.asin(o / r),
          s = Math.cos(a) * r,
          l = Math.sin(a),
          u = Math.cos(a),
          h = 0.6 * r,
          c = 0.7 * r;
        t.moveTo(n - s, e + o),
          t.arc(n, e, r, Math.PI - a, 2 * Math.PI + a),
          t.bezierCurveTo(n + s - l * h, e + o + u * h, n, i - c, n, i),
          t.bezierCurveTo(n, i - c, n - s + l * h, e + o + u * h, n - s, e + o),
          t.closePath();
      },
    }),
    Xy = j.extend({
      type: "arrow",
      shape: { x: 0, y: 0, width: 0, height: 0 },
      buildPath: function (t, e) {
        var n = e.height,
          i = e.width,
          r = e.x,
          e = e.y,
          i = (i / 3) * 2;
        t.moveTo(r, e),
          t.lineTo(r + i, e + n),
          t.lineTo(r, e + (n / 4) * 3),
          t.lineTo(r - i, e + n),
          t.lineTo(r, e),
          t.closePath();
      },
    }),
    Yy = {
      line: function (t, e, n, i, r) {
        (r.x1 = t), (r.y1 = e + i / 2), (r.x2 = t + n), (r.y2 = e + i / 2);
      },
      rect: function (t, e, n, i, r) {
        (r.x = t), (r.y = e), (r.width = n), (r.height = i);
      },
      roundRect: function (t, e, n, i, r) {
        (r.x = t),
          (r.y = e),
          (r.width = n),
          (r.height = i),
          (r.r = Math.min(n, i) / 4);
      },
      square: function (t, e, n, i, r) {
        n = Math.min(n, i);
        (r.x = t), (r.y = e), (r.width = n), (r.height = n);
      },
      circle: function (t, e, n, i, r) {
        (r.cx = t + n / 2), (r.cy = e + i / 2), (r.r = Math.min(n, i) / 2);
      },
      diamond: function (t, e, n, i, r) {
        (r.cx = t + n / 2), (r.cy = e + i / 2), (r.width = n), (r.height = i);
      },
      pin: function (t, e, n, i, r) {
        (r.x = t + n / 2), (r.y = e + i / 2), (r.width = n), (r.height = i);
      },
      arrow: function (t, e, n, i, r) {
        (r.x = t + n / 2), (r.y = e + i / 2), (r.width = n), (r.height = i);
      },
      triangle: function (t, e, n, i, r) {
        (r.cx = t + n / 2), (r.cy = e + i / 2), (r.width = n), (r.height = i);
      },
    },
    qy = {},
    Zy =
      (E(
        {
          line: Zu,
          rect: Is,
          roundRect: Is,
          square: Is,
          circle: uu,
          diamond: Wy,
          pin: Uy,
          arrow: Xy,
          triangle: Gy,
        },
        function (t, e) {
          qy[e] = new t();
        }
      ),
      j.extend({
        type: "symbol",
        shape: { symbolType: "", x: 0, y: 0, width: 0, height: 0 },
        calculateTextPosition: function (t, e, n) {
          var t = Cr(t, e, n),
            i = this.shape;
          return (
            i &&
              "pin" === i.symbolType &&
              "inside" === e.position &&
              (t.y = n.y + 0.4 * n.height),
            t
          );
        },
        buildPath: function (t, e, n) {
          var i,
            r = e.symbolType;
          "none" !== r &&
            ((i = (i = qy[r]) || qy[(r = "rect")]),
            Yy[r](e.x, e.y, e.width, e.height, i.shape),
            i.buildPath(t, i.shape, n));
        },
      }));
  function jy(t, e) {
    var n;
    "image" !== this.type &&
      ((n = this.style),
      this.__isEmptyBrush
        ? ((n.stroke = t), (n.fill = e || "#fff"), (n.lineWidth = 2))
        : "line" === this.shape.symbolType
        ? (n.stroke = t)
        : (n.fill = t),
      this.markRedraw());
  }
  function Ky(t, e, n, i, r, o, a) {
    var s = 0 === t.indexOf("empty");
    return (
      ((a =
        0 ===
        (t = s ? t.substr(5, 1).toLowerCase() + t.substr(6) : t).indexOf(
          "image://"
        )
          ? Wh(t.slice(8), new W(e, n, i, r), a ? "center" : "cover")
          : 0 === t.indexOf("path://")
          ? Gh(t.slice(7), {}, new W(e, n, i, r), a ? "center" : "cover")
          : new Zy({
              shape: { symbolType: t, x: e, y: n, width: i, height: r },
            })).__isEmptyBrush = s),
      (a.setColor = jy),
      o && a.setColor(o),
      a
    );
  }
  function $y(t, e) {
    if (null != t)
      return [
        Kr((t = V(t) ? t : [t, t])[0], e[0]) || 0,
        Kr(R(t[1], t[0]), e[1]) || 0,
      ];
  }
  function Qy(t) {
    return isFinite(t);
  }
  function Jy(t, e, n) {
    for (
      var i,
        r,
        o,
        a,
        s,
        l,
        u,
        h,
        c,
        p =
          "radial" === e.type
            ? ((i = t),
              (r = e),
              (a = (o = n).width),
              (s = o.height),
              (l = Math.min(a, s)),
              (u = null == r.x ? 0.5 : r.x),
              (h = null == r.y ? 0.5 : r.y),
              (c = null == r.r ? 0.5 : r.r),
              r.global || ((u = u * a + o.x), (h = h * s + o.y), (c *= l)),
              (u = Qy(u) ? u : 0.5),
              (h = Qy(h) ? h : 0.5),
              (c = 0 <= c && Qy(c) ? c : 0.5),
              i.createRadialGradient(u, h, 0, u, h, c))
            : ((r = t),
              (a = n),
              (o = null == (s = e).x ? 0 : s.x),
              (l = null == s.x2 ? 1 : s.x2),
              (i = null == s.y ? 0 : s.y),
              (u = null == s.y2 ? 0 : s.y2),
              s.global ||
                ((o = o * a.width + a.x),
                (l = l * a.width + a.x),
                (i = i * a.height + a.y),
                (u = u * a.height + a.y)),
              (o = Qy(o) ? o : 0),
              (l = Qy(l) ? l : 1),
              (i = Qy(i) ? i : 0),
              (u = Qy(u) ? u : 0),
              r.createLinearGradient(o, i, l, u)),
        d = e.colorStops,
        f = 0;
      f < d.length;
      f++
    )
      p.addColorStop(d[f].offset, d[f].color);
    return p;
  }
  function tm(t) {
    return parseInt(t, 10);
  }
  function em(t, e, n) {
    var i = ["width", "height"][e],
      r = ["clientWidth", "clientHeight"][e],
      o = ["paddingLeft", "paddingTop"][e],
      e = ["paddingRight", "paddingBottom"][e];
    return null != n[i] && "auto" !== n[i]
      ? parseFloat(n[i])
      : ((n = document.defaultView.getComputedStyle(t)),
        ((t[r] || tm(n[i]) || tm(t.style[i])) -
          (tm(n[o]) || 0) -
          (tm(n[e]) || 0)) |
          0);
  }
  function nm(t) {
    var e,
      n = t.style,
      i =
        n.lineDash &&
        0 < n.lineWidth &&
        ((r = n.lineDash),
        (i = n.lineWidth),
        r && "solid" !== r && 0 < i
          ? "dashed" === r
            ? [4 * i, 2 * i]
            : "dotted" === r
            ? [i]
            : G(r)
            ? [r]
            : V(r)
            ? r
            : null
          : null),
      r = n.lineDashOffset;
    return (
      i &&
        (e = n.strokeNoScale && t.getLineScale ? t.getLineScale() : 1) &&
        1 !== e &&
        ((i = F(i, function (t) {
          return t / e;
        })),
        (r /= e)),
      [i, r]
    );
  }
  var im = new qa(!0);
  function rm(t) {
    var e = t.stroke;
    return !(null == e || "none" === e || !(0 < t.lineWidth));
  }
  function om(t) {
    return "string" == typeof t && "none" !== t;
  }
  function am(t) {
    t = t.fill;
    return null != t && "none" !== t;
  }
  function sm(t, e) {
    var n;
    null != e.fillOpacity && 1 !== e.fillOpacity
      ? ((n = t.globalAlpha),
        (t.globalAlpha = e.fillOpacity * e.opacity),
        t.fill(),
        (t.globalAlpha = n))
      : t.fill();
  }
  function lm(t, e) {
    var n;
    null != e.strokeOpacity && 1 !== e.strokeOpacity
      ? ((n = t.globalAlpha),
        (t.globalAlpha = e.strokeOpacity * e.opacity),
        t.stroke(),
        (t.globalAlpha = n))
      : t.stroke();
  }
  function um(t, e, n) {
    var n = Qo(e.image, e.__image, n);
    if (ta(n))
      return (
        (t = t.createPattern(n, e.repeat || "repeat")),
        "function" == typeof DOMMatrix &&
          t &&
          t.setTransform &&
          ((n = new DOMMatrix()).translateSelf(e.x || 0, e.y || 0),
          n.rotateSelf(0, 0, (e.rotation || 0) * Vt),
          n.scaleSelf(e.scaleX || 1, e.scaleY || 1),
          t.setTransform(n)),
        t
      );
  }
  var hm = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"],
    cm = [
      ["lineCap", "butt"],
      ["lineJoin", "miter"],
      ["miterLimit", 10],
    ];
  function pm(t, e, n, i, r) {
    var o,
      a = !1;
    if (!i && e === (n = n || {})) return !1;
    (!i && e.opacity === n.opacity) ||
      (_m(t, r),
      (a = !0),
      (o = Math.max(Math.min(e.opacity, 1), 0)),
      (t.globalAlpha = isNaN(o) ? fa.opacity : o)),
      (!i && e.blend === n.blend) ||
        (a || (_m(t, r), (a = !0)),
        (t.globalCompositeOperation = e.blend || fa.blend));
    for (var s = 0; s < hm.length; s++) {
      var l = hm[s];
      (!i && e[l] === n[l]) ||
        (a || (_m(t, r), (a = !0)), (t[l] = t.dpr * (e[l] || 0)));
    }
    return (
      (!i && e.shadowColor === n.shadowColor) ||
        (a || (_m(t, r), (a = !0)),
        (t.shadowColor = e.shadowColor || fa.shadowColor)),
      a
    );
  }
  function dm(t, e, n, i, r) {
    var o = xm(e, r.inHover),
      a = i ? null : (n && xm(n, r.inHover)) || {};
    if (o !== a) {
      var s = pm(t, o, a, i, r);
      (i || o.fill !== a.fill) &&
        (s || (_m(t, r), (s = !0)), om(o.fill)) &&
        (t.fillStyle = o.fill),
        (i || o.stroke !== a.stroke) &&
          (s || (_m(t, r), (s = !0)), om(o.stroke)) &&
          (t.strokeStyle = o.stroke),
        (!i && o.opacity === a.opacity) ||
          (s || (_m(t, r), (s = !0)),
          (t.globalAlpha = null == o.opacity ? 1 : o.opacity)),
        e.hasStroke() &&
          ((n =
            o.lineWidth /
            (o.strokeNoScale && e.getLineScale ? e.getLineScale() : 1)),
          t.lineWidth !== n) &&
          (s || (_m(t, r), (s = !0)), (t.lineWidth = n));
      for (var l = 0; l < cm.length; l++) {
        var u = cm[l],
          h = u[0];
        (!i && o[h] === a[h]) ||
          (s || (_m(t, r), (s = !0)), (t[h] = o[h] || u[1]));
      }
    }
  }
  function fm(t, e) {
    var e = e.transform,
      n = t.dpr || 1;
    e
      ? t.setTransform(
          n * e[0],
          n * e[1],
          n * e[2],
          n * e[3],
          n * e[4],
          n * e[5]
        )
      : t.setTransform(n, 0, 0, n, 0, 0);
  }
  var gm = 1,
    ym = 2,
    mm = 3,
    vm = 4;
  function _m(t, e) {
    e.batchFill && t.fill(),
      e.batchStroke && t.stroke(),
      (e.batchFill = ""),
      (e.batchStroke = "");
  }
  function xm(t, e) {
    return (e && t.__hoverStyle) || t.style;
  }
  function wm(t, e) {
    bm(t, e, { inHover: !1, viewWidth: 0, viewHeight: 0 }, !0);
  }
  function bm(t, e, n, E) {
    var i = e.transform;
    if (!e.shouldBePainted(n.viewWidth, n.viewHeight, !1, !1))
      return (e.__dirty &= ~mn), (e.__isRendered = !1);
    var r,
      o,
      a,
      s,
      l,
      u,
      h,
      c,
      p,
      d,
      f,
      g,
      y,
      m,
      v,
      _,
      x,
      w,
      b,
      S,
      M,
      T,
      C,
      I = e.__clipPaths,
      D = n.prevElClipPaths,
      k = !1,
      A = !1;
    if (
      !D ||
      (function (t, e) {
        if (t !== e && (t || e)) {
          if (!t || !e || t.length !== e.length) return 1;
          for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return 1;
        }
      })(I, D)
    ) {
      if (
        (D &&
          D.length &&
          (_m(t, n),
          t.restore(),
          (A = k = !0),
          (n.prevElClipPaths = null),
          (n.allClipped = !1),
          (n.prevEl = null)),
        I && I.length)
      ) {
        _m(t, n), t.save();
        var z = I,
          B = t;
        D = n;
        for (var F = !1, V = 0; V < z.length; V++) {
          var H = z[V],
            F = F || H.isZeroArea();
          fm(B, H), B.beginPath(), H.buildPath(B, H.shape), B.clip();
        }
        (D.allClipped = F), (k = !0);
      }
      n.prevElClipPaths = I;
    }
    if (n.allClipped) e.__isRendered = !1;
    else {
      e.beforeBrush && e.beforeBrush(), e.innerBeforeBrush();
      var D = n.prevEl,
        P =
          (D || (A = k = !0),
          e instanceof j &&
            e.autoBatch &&
            ((I = e.style),
            (P = am(I)),
            (C = rm(I)),
            !(
              I.lineDash ||
              !(+P ^ +C) ||
              (P && "string" != typeof I.fill) ||
              (C && "string" != typeof I.stroke) ||
              I.strokePercent < 1 ||
              I.strokeOpacity < 1 ||
              I.fillOpacity < 1
            ))),
        k =
          (k ||
          ((C = i),
          (I = D.transform),
          C && I
            ? C[0] !== I[0] ||
              C[1] !== I[1] ||
              C[2] !== I[2] ||
              C[3] !== I[3] ||
              C[4] !== I[4] ||
              C[5] !== I[5]
            : C || I)
            ? (_m(t, n), fm(t, e))
            : P || _m(t, n),
          xm(e, n.inHover));
      if (e instanceof j)
        n.lastDrawType !== gm && ((A = !0), (n.lastDrawType = gm)),
          dm(t, e, D, A, n),
          (P && (n.batchFill || n.batchStroke)) || t.beginPath(),
          (i = t),
          (I = e),
          (O = P),
          (y = rm((a = k))),
          (m = am(a)),
          (v = a.strokePercent),
          (_ = v < 1),
          (x = !I.path),
          (I.silent && !_) || !x || I.createPathProxy(),
          (w = I.path || im),
          (b = I.__dirty),
          O ||
            ((s = a.fill),
            (T = a.stroke),
            (l = m && !!s.colorStops),
            (u = y && !!T.colorStops),
            (h = m && !!s.image),
            (c = y && !!T.image),
            (M = g = f = d = p = void 0),
            (l || u) && (M = I.getBoundingRect()),
            l &&
              ((p = b ? Jy(i, s, M) : I.__canvasFillGradient),
              (I.__canvasFillGradient = p)),
            u &&
              ((d = b ? Jy(i, T, M) : I.__canvasStrokeGradient),
              (I.__canvasStrokeGradient = d)),
            h &&
              ((f =
                b || !I.__canvasFillPattern
                  ? um(i, s, I)
                  : I.__canvasFillPattern),
              (I.__canvasFillPattern = f)),
            c &&
              ((g =
                b || !I.__canvasStrokePattern
                  ? um(i, T, I)
                  : I.__canvasStrokePattern),
              (I.__canvasStrokePattern = f)),
            l ? (i.fillStyle = p) : h && (f ? (i.fillStyle = f) : (m = !1)),
            u
              ? (i.strokeStyle = d)
              : c && (g ? (i.strokeStyle = g) : (y = !1))),
          (M = I.getGlobalScale()),
          w.setScale(M[0], M[1], I.segmentIgnoreThreshold),
          i.setLineDash && a.lineDash && ((S = (s = nm(I))[0]), (L = s[1])),
          (T = !0),
          (x || b & vn) &&
            (w.setDPR(i.dpr),
            _ ? w.setContext(null) : (w.setContext(i), (T = !1)),
            w.reset(),
            I.buildPath(w, I.shape, O),
            w.toStatic(),
            I.pathUpdated()),
          T && w.rebuildPath(i, _ ? v : 1),
          S && (i.setLineDash(S), (i.lineDashOffset = L)),
          O ||
            (a.strokeFirst
              ? (y && lm(i, a), m && sm(i, a))
              : (m && sm(i, a), y && lm(i, a))),
          S && i.setLineDash([]),
          P && ((n.batchFill = k.fill || ""), (n.batchStroke = k.stroke || ""));
      else if (e instanceof ds)
        n.lastDrawType !== mm && ((A = !0), (n.lastDrawType = mm)),
          dm(t, e, D, A, n),
          (l = t),
          (p = e),
          null != (f = (h = k).text) && (f += ""),
          f &&
            ((l.font = h.font || K),
            (l.textAlign = h.textAlign),
            (l.textBaseline = h.textBaseline),
            (d = u = void 0),
            l.setLineDash && h.lineDash && ((u = (p = nm(p))[0]), (d = p[1])),
            u && (l.setLineDash(u), (l.lineDashOffset = d)),
            h.strokeFirst
              ? (rm(h) && l.strokeText(f, h.x, h.y),
                am(h) && l.fillText(f, h.x, h.y))
              : (am(h) && l.fillText(f, h.x, h.y),
                rm(h) && l.strokeText(f, h.x, h.y)),
            u) &&
            l.setLineDash([]);
      else if (e instanceof vs)
        n.lastDrawType !== ym && ((A = !0), (n.lastDrawType = ym)),
          (c = D),
          (g = A),
          pm(t, xm(e, (M = n).inHover), c && xm(c, M.inHover), g, M),
          (s = t),
          (x = k),
          (I = (b = e).__image = Qo(x.image, b.__image, b, b.onload)) &&
            ta(I) &&
            ((T = x.x || 0),
            (w = x.y || 0),
            (_ = b.getWidth()),
            (b = b.getHeight()),
            (v = I.width / I.height),
            null == _ && null != b
              ? (_ = b * v)
              : null == b && null != _
              ? (b = _ / v)
              : null == _ && null == b && ((_ = I.width), (b = I.height)),
            x.sWidth && x.sHeight
              ? ((r = x.sx || 0),
                (o = x.sy || 0),
                s.drawImage(I, r, o, x.sWidth, x.sHeight, T, w, _, b))
              : x.sx && x.sy
              ? ((v = _ - (r = x.sx)),
                (x = b - (o = x.sy)),
                s.drawImage(I, r, o, v, x, T, w, _, b))
              : s.drawImage(I, T, w, _, b));
      else if (e.getTemporalDisplayables) {
        n.lastDrawType !== vm && ((A = !0), (n.lastDrawType = vm));
        {
          var G = t;
          var L = e;
          var O = n;
          var W = L.getDisplayables(),
            U = L.getTemporalDisplayables();
          G.save();
          var R,
            X,
            Y = {
              prevElClipPaths: null,
              prevEl: null,
              allClipped: !1,
              viewWidth: O.viewWidth,
              viewHeight: O.viewHeight,
              inHover: O.inHover,
            };
          for (R = L.getCursor(), X = W.length; R < X; R++)
            (N = W[R]).beforeBrush && N.beforeBrush(),
              N.innerBeforeBrush(),
              bm(G, N, Y, R === X - 1),
              N.innerAfterBrush(),
              N.afterBrush && N.afterBrush(),
              (Y.prevEl = N);
          for (var N, q = 0, Z = U.length; q < Z; q++)
            (N = U[q]).beforeBrush && N.beforeBrush(),
              N.innerBeforeBrush(),
              bm(G, N, Y, q === Z - 1),
              N.innerAfterBrush(),
              N.afterBrush && N.afterBrush(),
              (Y.prevEl = N);
          L.clearTemporalDisplayables(), (L.notClear = !0), G.restore();
        }
      }
      P && E && _m(t, n),
        e.innerAfterBrush(),
        e.afterBrush && e.afterBrush(),
        ((n.prevEl = e).__dirty = 0),
        (e.__isRendered = !0);
    }
  }
  var Sm = new Vy(),
    Mm = new ti(100),
    Tm = [
      "symbol",
      "symbolSize",
      "symbolKeepAspect",
      "color",
      "backgroundColor",
      "dashArrayX",
      "dashArrayY",
      "maxTileWidth",
      "maxTileHeight",
    ];
  function Cm(t, e) {
    if ("none" === t) return null;
    var n = e.getDevicePixelRatio(),
      i = e.getZr(),
      r = "svg" === i.painter.type,
      e = (t.dirty && Sm.delete(t), Sm.get(t));
    if (e) return e;
    for (
      var o,
        a = B(t, {
          symbol: "rect",
          symbolSize: 1,
          symbolKeepAspect: !0,
          color: "rgba(0, 0, 0, 0.2)",
          backgroundColor: null,
          dashArrayX: 5,
          dashArrayY: 5,
          rotation: 0,
          maxTileWidth: 512,
          maxTileHeight: 512,
        }),
        e =
          ("none" === a.backgroundColor && (a.backgroundColor = null),
          { repeat: "repeat" }),
        s = e,
        l = [n],
        u = !0,
        h = 0;
      h < Tm.length;
      ++h
    ) {
      var c = a[Tm[h]];
      if (null != c && !V(c) && !H(c) && !G(c) && "boolean" != typeof c) {
        u = !1;
        break;
      }
      l.push(c);
    }
    u &&
      ((o = l.join(",") + (r ? "-svg" : "")), (v = Mm.get(o))) &&
      (r ? (s.svgElement = v) : (s.image = v));
    var p,
      d = (function t(e) {
        if (!e || 0 === e.length) return [[0, 0]];
        if (G(e)) return [[(o = Math.ceil(e)), o]];
        for (var n = !0, i = 0; i < e.length; ++i)
          if (!G(e[i])) {
            n = !1;
            break;
          }
        if (n) return t([e]);
        var r = [];
        for (i = 0; i < e.length; ++i) {
          var o;
          G(e[i])
            ? ((o = Math.ceil(e[i])), r.push([o, o]))
            : (o = F(e[i], function (t) {
                return Math.ceil(t);
              })).length %
                2 ==
              1
            ? r.push(o.concat(o))
            : r.push(o);
        }
        return r;
      })(a.dashArrayX),
      f = (function (t) {
        if (!t || ("object" == typeof t && 0 === t.length)) return [0, 0];
        if (G(t)) return [(e = Math.ceil(t)), e];
        var e = F(t, function (t) {
          return Math.ceil(t);
        });
        return t.length % 2 ? e.concat(e) : e;
      })(a.dashArrayY),
      g = (function t(e) {
        if (!e || 0 === e.length) return [["rect"]];
        if (H(e)) return [[e]];
        for (var n = !0, i = 0; i < e.length; ++i)
          if (!H(e[i])) {
            n = !1;
            break;
          }
        if (n) return t([e]);
        var r = [];
        for (i = 0; i < e.length; ++i) H(e[i]) ? r.push([e[i]]) : r.push(e[i]);
        return r;
      })(a.symbol),
      y = F(d, Im),
      m = Im(f),
      v = !r && X.createCanvas(),
      _ = r && { tag: "g", attrs: {}, key: "dcl", children: [] },
      x = (function () {
        for (var t = 1, e = 0, n = y.length; e < n; ++e) t = po(t, y[e]);
        for (var i = 1, e = 0, n = g.length; e < n; ++e) i = po(i, g[e].length);
        t *= i;
        var r = m * y.length * g.length;
        return {
          width: Math.max(1, Math.min(t, a.maxTileWidth)),
          height: Math.max(1, Math.min(r, a.maxTileHeight)),
        };
      })();
    v &&
      ((v.width = x.width * n),
      (v.height = x.height * n),
      (p = v.getContext("2d"))),
      p &&
        (p.clearRect(0, 0, v.width, v.height), a.backgroundColor) &&
        ((p.fillStyle = a.backgroundColor),
        p.fillRect(0, 0, v.width, v.height));
    for (var w = 0, b = 0; b < f.length; ++b) w += f[b];
    if (!(w <= 0))
      for (var S, M = -m, T = 0, C = 0, I = 0; M < x.height; ) {
        if (T % 2 == 0) {
          for (
            var D = (C / 2) % g.length, k = 0, A = 0, P = 0;
            k < 2 * x.width;

          ) {
            for (var L, O, R, E, N, z = 0, b = 0; b < d[I].length; ++b)
              z += d[I][b];
            if (z <= 0) break;
            A % 2 == 0 &&
              ((O = 0.5 * (1 - a.symbolSize)),
              (L = k + d[I][A] * O),
              (O = M + f[T] * O),
              (R = d[I][A] * a.symbolSize),
              (E = f[T] * a.symbolSize),
              (N = (P / 2) % g[D].length),
              (L = L),
              (N = g[D][N]),
              (S = void 0),
              (N = Ky(
                N,
                L * (S = r ? 1 : n),
                O * S,
                R * S,
                E * S,
                a.color,
                a.symbolKeepAspect
              )),
              r
                ? (L = i.painter.renderOneToVNode(N)) && _.children.push(L)
                : wm(p, N)),
              (k += d[I][A]),
              ++P,
              ++A === d[I].length && (A = 0);
          }
          ++I === d.length && (I = 0);
        }
        (M += f[T]), ++C, ++T === f.length && (T = 0);
      }
    return (
      u && Mm.put(o, v || _),
      (s.image = v),
      (s.svgElement = _),
      (s.svgWidth = x.width),
      (s.svgHeight = x.height),
      (e.rotation = a.rotation),
      (e.scaleX = e.scaleY = r ? 1 : 1 / n),
      Sm.set(t, e),
      (t.dirty = !1),
      e
    );
  }
  function Im(t) {
    for (var e = 0, n = 0; n < t.length; ++n) e += t[n];
    return t.length % 2 == 1 ? 2 * e : e;
  }
  var Dm = new le(),
    km = {};
  var Wy = {
      PROCESSOR: { FILTER: 1e3, SERIES_FILTER: 800, STATISTIC: 5e3 },
      VISUAL: {
        LAYOUT: 1e3,
        PROGRESSIVE_LAYOUT: 1100,
        GLOBAL: 2e3,
        CHART: 3e3,
        POST_CHART_LAYOUT: 4600,
        COMPONENT: 4e3,
        BRUSH: 5e3,
        CHART_ITEM: 4500,
        ARIA: 6e3,
        DECAL: 7e3,
      },
    },
    Am = "__flagInMainProcess",
    Pm = "__pendingUpdate",
    Lm = "__needsUpdateStatus",
    Om = /^[a-zA-Z0-9_]+$/,
    Rm = "__connectUpdateStatus";
  function Nm(n) {
    return function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      if (!this.isDisposed()) return zm(this, n, t);
      this.id;
    };
  }
  function Em(n) {
    return function () {
      for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
      return zm(this, n, t);
    };
  }
  function zm(t, e, n) {
    return (n[0] = n[0] && n[0].toLowerCase()), le.prototype[e].apply(t, n);
  }
  u(r0, (n0 = le));
  var Bm,
    Fm,
    Vm,
    Hm,
    Gm,
    Wm,
    Um,
    Xm,
    Ym,
    qm,
    Zm,
    jm,
    Km,
    $m,
    Qm,
    Jm,
    t0,
    e0,
    n0,
    i0 = r0,
    Uy = i0.prototype;
  function r0() {
    return (null !== n0 && n0.apply(this, arguments)) || this;
  }
  (Uy.on = Em("on")), (Uy.off = Em("off"));
  u(c, (o0 = le)),
    (c.prototype._onframe = function () {
      if (!this._disposed) {
        e0(this);
        var t = this._scheduler;
        if (this[Pm]) {
          var e = this[Pm].silent;
          this[Am] = !0;
          try {
            Bm(this), Hm.update.call(this, null, this[Pm].updateParams);
          } catch (t) {
            throw ((this[Am] = !1), (this[Pm] = null), t);
          }
          this._zr.flush(),
            (this[Am] = !1),
            (this[Pm] = null),
            Xm.call(this, e),
            Ym.call(this, e);
        } else if (t.unfinished) {
          var n = 1,
            i = this._model,
            r = this._api;
          t.unfinished = !1;
          do {
            var o = +new Date();
          } while (
            (t.performSeriesTasks(i),
            t.performDataProcessorTasks(i),
            Wm(this, i),
            t.performVisualTasks(i),
            $m(this, this._model, r, "remain", {}),
            0 < (n -= +new Date() - o) && t.unfinished)
          );
          t.unfinished || this._zr.flush();
        }
      }
    }),
    (c.prototype.getDom = function () {
      return this._dom;
    }),
    (c.prototype.getId = function () {
      return this.id;
    }),
    (c.prototype.getZr = function () {
      return this._zr;
    }),
    (c.prototype.isSSR = function () {
      return this._ssr;
    }),
    (c.prototype.setOption = function (t, e, n) {
      if (!this[Am])
        if (this._disposed) this.id;
        else {
          O(e) &&
            ((n = e.lazyUpdate),
            (i = e.silent),
            (r = e.replaceMerge),
            (o = e.transition),
            (e = e.notMerge)),
            (this[Am] = !0),
            (this._model && !e) ||
              ((e = new Td(this._api)),
              (a = this._theme),
              ((s = this._model = new gd()).scheduler = this._scheduler),
              (s.ssr = this._ssr),
              s.init(null, null, null, a, this._locale, e)),
            this._model.setOption(t, { replaceMerge: r }, y0);
          var i,
            r,
            o,
            a,
            s = { seriesTransition: o, optionChanged: !0 };
          if (n)
            (this[Pm] = { silent: i, updateParams: s }),
              (this[Am] = !1),
              this.getZr().wakeUp();
          else {
            try {
              Bm(this), Hm.update.call(this, null, s);
            } catch (t) {
              throw ((this[Pm] = null), (this[Am] = !1), t);
            }
            this._ssr || this._zr.flush(),
              (this[Pm] = null),
              (this[Am] = !1),
              Xm.call(this, i),
              Ym.call(this, i);
          }
        }
    }),
    (c.prototype.setTheme = function () {}),
    (c.prototype.getModel = function () {
      return this._model;
    }),
    (c.prototype.getOption = function () {
      return this._model && this._model.getOption();
    }),
    (c.prototype.getWidth = function () {
      return this._zr.getWidth();
    }),
    (c.prototype.getHeight = function () {
      return this._zr.getHeight();
    }),
    (c.prototype.getDevicePixelRatio = function () {
      return (
        this._zr.painter.dpr ||
        (b.hasGlobalWindow && window.devicePixelRatio) ||
        1
      );
    }),
    (c.prototype.getRenderedCanvas = function (t) {
      return this.renderToCanvas(t);
    }),
    (c.prototype.renderToCanvas = function (t) {
      return this._zr.painter.getRenderedCanvas({
        backgroundColor:
          (t = t || {}).backgroundColor || this._model.get("backgroundColor"),
        pixelRatio: t.pixelRatio || this.getDevicePixelRatio(),
      });
    }),
    (c.prototype.renderToSVGString = function (t) {
      return this._zr.painter.renderToString({
        useViewBox: (t = t || {}).useViewBox,
      });
    }),
    (c.prototype.getSvgDataURL = function () {
      var t;
      if (b.svgSupported)
        return (
          E((t = this._zr).storage.getDisplayList(), function (t) {
            t.stopAnimation(null, !0);
          }),
          t.painter.toDataURL()
        );
    }),
    (c.prototype.getDataURL = function (t) {
      var e, n, i, r;
      if (!this._disposed)
        return (
          (r = (t = t || {}).excludeComponents),
          (e = this._model),
          (n = []),
          (i = this),
          E(r, function (t) {
            e.eachComponent({ mainType: t }, function (t) {
              t = i._componentsMap[t.__viewId];
              t.group.ignore || (n.push(t), (t.group.ignore = !0));
            });
          }),
          (r =
            "svg" === this._zr.painter.getType()
              ? this.getSvgDataURL()
              : this.renderToCanvas(t).toDataURL(
                  "image/" + ((t && t.type) || "png")
                )),
          E(n, function (t) {
            t.group.ignore = !1;
          }),
          r
        );
      this.id;
    }),
    (c.prototype.getConnectedDataURL = function (i) {
      var r, o, a, s, l, u, h, c, p, e, t, n, d, f, g;
      if (!this._disposed)
        return (
          (r = "svg" === i.type),
          (o = this.group),
          (a = Math.min),
          (s = Math.max),
          w0[o]
            ? ((u = l = 1 / 0),
              (c = h = -1 / 0),
              (p = []),
              (e = (i && i.pixelRatio) || this.getDevicePixelRatio()),
              E(x0, function (t, e) {
                var n;
                t.group === o &&
                  ((n = r
                    ? t.getZr().painter.getSvgDom().innerHTML
                    : t.renderToCanvas(y(i))),
                  (t = t.getDom().getBoundingClientRect()),
                  (l = a(t.left, l)),
                  (u = a(t.top, u)),
                  (h = s(t.right, h)),
                  (c = s(t.bottom, c)),
                  p.push({ dom: n, left: t.left, top: t.top }));
              }),
              (t = (h *= e) - (l *= e)),
              (n = (c *= e) - (u *= e)),
              (d = X.createCanvas()),
              (f = Xr(d, { renderer: r ? "svg" : "canvas" })).resize({
                width: t,
                height: n,
              }),
              r
                ? ((g = ""),
                  E(p, function (t) {
                    var e = t.left - l,
                      n = t.top - u;
                    g +=
                      '<g transform="translate(' +
                      e +
                      "," +
                      n +
                      ')">' +
                      t.dom +
                      "</g>";
                  }),
                  (f.painter.getSvgRoot().innerHTML = g),
                  i.connectedBackgroundColor &&
                    f.painter.setBackgroundColor(i.connectedBackgroundColor),
                  f.refreshImmediately(),
                  f.painter.toDataURL())
                : (i.connectedBackgroundColor &&
                    f.add(
                      new Is({
                        shape: { x: 0, y: 0, width: t, height: n },
                        style: { fill: i.connectedBackgroundColor },
                      })
                    ),
                  E(p, function (t) {
                    t = new vs({
                      style: {
                        x: t.left * e - l,
                        y: t.top * e - u,
                        image: t.dom,
                      },
                    });
                    f.add(t);
                  }),
                  f.refreshImmediately(),
                  d.toDataURL("image/" + ((i && i.type) || "png"))))
            : this.getDataURL(i)
        );
      this.id;
    }),
    (c.prototype.convertToPixel = function (t, e) {
      return Gm(this, "convertToPixel", t, e);
    }),
    (c.prototype.convertFromPixel = function (t, e) {
      return Gm(this, "convertFromPixel", t, e);
    }),
    (c.prototype.containPixel = function (t, i) {
      var r;
      if (!this._disposed)
        return (
          E(
            Po(this._model, t),
            function (t, n) {
              0 <= n.indexOf("Models") &&
                E(
                  t,
                  function (t) {
                    var e = t.coordinateSystem;
                    e && e.containPoint
                      ? (r = r || !!e.containPoint(i))
                      : "seriesModels" === n &&
                        (e = this._chartsMap[t.__viewId]) &&
                        e.containPoint &&
                        (r = r || e.containPoint(i, t));
                  },
                  this
                );
            },
            this
          ),
          !!r
        );
      this.id;
    }),
    (c.prototype.getVisual = function (t, e) {
      var t = Po(this._model, t, { defaultMainType: "series" }),
        n = t.seriesModel.getData(),
        t = t.hasOwnProperty("dataIndexInside")
          ? t.dataIndexInside
          : t.hasOwnProperty("dataIndex")
          ? n.indexOfRawIndex(t.dataIndex)
          : null;
      if (null != t) {
        var i = n,
          r = t,
          o = e;
        switch (o) {
          case "color":
            return i.getItemVisual(r, "style")[i.getVisual("drawType")];
          case "opacity":
            return i.getItemVisual(r, "style").opacity;
          case "symbol":
          case "symbolSize":
          case "liftZ":
            return i.getItemVisual(r, o);
        }
      } else {
        var a = n,
          s = e;
        switch (s) {
          case "color":
            return a.getVisual("style")[a.getVisual("drawType")];
          case "opacity":
            return a.getVisual("style").opacity;
          case "symbol":
          case "symbolSize":
          case "liftZ":
            return a.getVisual(s);
        }
      }
    }),
    (c.prototype.getViewOfComponentModel = function (t) {
      return this._componentsMap[t.__viewId];
    }),
    (c.prototype.getViewOfSeriesModel = function (t) {
      return this._chartsMap[t.__viewId];
    }),
    (c.prototype._initEvents = function () {
      var t,
        n,
        i,
        s = this;
      E(p0, function (a) {
        function t(t) {
          var n,
            e,
            i,
            r = s.getModel(),
            o = t.target;
          "globalout" === a
            ? (n = {})
            : o &&
              zy(
                o,
                function (t) {
                  var e,
                    t = D(t);
                  return t && null != t.dataIndex
                    ? ((e = t.dataModel || r.getSeriesByIndex(t.seriesIndex)),
                      (n =
                        (e && e.getDataParams(t.dataIndex, t.dataType, o)) ||
                        {}),
                      1)
                    : t.eventData && ((n = L({}, t.eventData)), 1);
                },
                !0
              ),
            n &&
              ((e = n.componentType),
              (i = n.componentIndex),
              ("markLine" !== e && "markPoint" !== e && "markArea" !== e) ||
                ((e = "series"), (i = n.seriesIndex)),
              (i =
                (e = e && null != i && r.getComponent(e, i)) &&
                s["series" === e.mainType ? "_chartsMap" : "_componentsMap"][
                  e.__viewId
                ]),
              (n.event = t),
              (n.type = a),
              (s._$eventProcessor.eventInfo = {
                targetEl: o,
                packedEvent: n,
                model: e,
                view: i,
              }),
              s.trigger(a, n));
        }
        (t.zrEventfulCallAtLast = !0), s._zr.on(a, t, s);
      }),
        E(f0, function (t, e) {
          s._messageCenter.on(
            e,
            function (t) {
              this.trigger(e, t);
            },
            s
          );
        }),
        E(["selectchanged"], function (e) {
          s._messageCenter.on(
            e,
            function (t) {
              this.trigger(e, t);
            },
            s
          );
        }),
        (t = this._messageCenter),
        (i = (n = this)._api),
        t.on("selectchanged", function (t) {
          var e = i.getModel();
          t.isFromClick
            ? (Ey("map", "selectchanged", n, e, t),
              Ey("pie", "selectchanged", n, e, t))
            : "select" === t.fromAction
            ? (Ey("map", "selected", n, e, t), Ey("pie", "selected", n, e, t))
            : "unselect" === t.fromAction &&
              (Ey("map", "unselected", n, e, t),
              Ey("pie", "unselected", n, e, t));
        });
    }),
    (c.prototype.isDisposed = function () {
      return this._disposed;
    }),
    (c.prototype.clear = function () {
      this._disposed ? this.id : this.setOption({ series: [] }, !0);
    }),
    (c.prototype.dispose = function () {
      var t, e, n;
      this._disposed
        ? this.id
        : ((this._disposed = !0),
          this.getDom() && No(this.getDom(), M0, ""),
          (e = (t = this)._api),
          (n = t._model),
          E(t._componentsViews, function (t) {
            t.dispose(n, e);
          }),
          E(t._chartsViews, function (t) {
            t.dispose(n, e);
          }),
          t._zr.dispose(),
          (t._dom =
            t._model =
            t._chartsMap =
            t._componentsMap =
            t._chartsViews =
            t._componentsViews =
            t._scheduler =
            t._api =
            t._zr =
            t._throttledZrFlush =
            t._theme =
            t._coordSysMgr =
            t._messageCenter =
              null),
          delete x0[t.id]);
    }),
    (c.prototype.resize = function (t) {
      if (!this[Am])
        if (this._disposed) this.id;
        else {
          this._zr.resize(t);
          var e = this._model;
          if ((this._loadingFX && this._loadingFX.resize(), e)) {
            var e = e.resetOption("media"),
              n = t && t.silent;
            this[Pm] &&
              (null == n && (n = this[Pm].silent), (e = !0), (this[Pm] = null)),
              (this[Am] = !0);
            try {
              e && Bm(this),
                Hm.update.call(this, {
                  type: "resize",
                  animation: L({ duration: 0 }, t && t.animation),
                });
            } catch (t) {
              throw ((this[Am] = !1), t);
            }
            (this[Am] = !1), Xm.call(this, n), Ym.call(this, n);
          }
        }
    }),
    (c.prototype.showLoading = function (t, e) {
      this._disposed
        ? this.id
        : (O(t) && ((e = t), (t = "")),
          (t = t || "default"),
          this.hideLoading(),
          _0[t] &&
            ((t = _0[t](this._api, e)),
            (e = this._zr),
            (this._loadingFX = t),
            e.add(t)));
    }),
    (c.prototype.hideLoading = function () {
      this._disposed
        ? this.id
        : (this._loadingFX && this._zr.remove(this._loadingFX),
          (this._loadingFX = null));
    }),
    (c.prototype.makeActionFromEvent = function (t) {
      var e = L({}, t);
      return (e.type = f0[t.type]), e;
    }),
    (c.prototype.dispatchAction = function (t, e) {
      var n;
      this._disposed
        ? this.id
        : (O(e) || (e = { silent: !!e }),
          d0[t.type] &&
            this._model &&
            (this[Am]
              ? this._pendingActions.push(t)
              : ((n = e.silent),
                Um.call(this, t, n),
                (t = e.flush)
                  ? this._zr.flush()
                  : !1 !== t && b.browser.weChat && this._throttledZrFlush(),
                Xm.call(this, n),
                Ym.call(this, n))));
    }),
    (c.prototype.updateLabelLayout = function () {
      Dm.trigger("series:layoutlabels", this._model, this._api, {
        updatedSeries: [],
      });
    }),
    (c.prototype.appendData = function (t) {
      var e;
      this._disposed
        ? this.id
        : ((e = t.seriesIndex),
          this.getModel().getSeriesByIndex(e).appendData(t),
          (this._scheduler.unfinished = !0),
          this.getZr().wakeUp());
    }),
    (c.internalField =
      ((Bm = function (t) {
        var e = t._scheduler;
        e.restorePipelines(t._model),
          e.prepareStageTasks(),
          Fm(t, !0),
          Fm(t, !1),
          e.plan();
      }),
      (Fm = function (t, r) {
        for (
          var o = t._model,
            a = t._scheduler,
            s = r ? t._componentsViews : t._chartsViews,
            l = r ? t._componentsMap : t._chartsMap,
            u = t._zr,
            h = t._api,
            e = 0;
          e < s.length;
          e++
        )
          s[e].__alive = !1;
        function n(t) {
          var e,
            n = t.__requireNewView,
            i = ((t.__requireNewView = !1), "_ec_" + t.id + "_" + t.type),
            n = !n && l[i];
          n ||
            ((e = Vo(t.type)),
            (n = new (
              r ? Wg.getClass(e.main, e.sub) : Zg.getClass(e.sub)
            )()).init(o, h),
            (l[i] = n),
            s.push(n),
            u.add(n.group)),
            (t.__viewId = n.__id = i),
            (n.__alive = !0),
            (n.__model = t),
            (n.group.__ecComponentInfo = {
              mainType: t.mainType,
              index: t.componentIndex,
            }),
            r || a.prepareView(n, t, o, h);
        }
        for (
          r
            ? o.eachComponent(function (t, e) {
                "series" !== t && n(e);
              })
            : o.eachSeries(n),
            e = 0;
          e < s.length;

        ) {
          var i = s[e];
          i.__alive
            ? e++
            : (r || i.renderTask.dispose(),
              u.remove(i.group),
              i.dispose(o, h),
              s.splice(e, 1),
              l[i.__id] === i && delete l[i.__id],
              (i.__id = i.group.__ecComponentInfo = null));
        }
      }),
      (Vm = function (p, e, d, n, t) {
        var i,
          f,
          r = p._model;
        function o(t) {
          t && t.__alive && t[e] && t[e](t.__model, r, p._api, d);
        }
        r.setUpdatePayload(d),
          n
            ? (((i = {})[n + "Id"] = d[n + "Id"]),
              (i[n + "Index"] = d[n + "Index"]),
              (i[n + "Name"] = d[n + "Name"]),
              (i = { mainType: n, query: i }),
              t && (i.subType = t),
              null != (t = d.excludeSeriesId) &&
                ((f = N()),
                E(mo(t), function (t) {
                  t = Mo(t, null);
                  null != t && f.set(t, !0);
                })),
              r &&
                r.eachComponent(
                  i,
                  function (t) {
                    if (!f || null == f.get(t.id))
                      if (Hl(d))
                        if (t instanceof Ng) {
                          if (
                            d.type === Js &&
                            !d.notBlur &&
                            !t.get(["emphasis", "disabled"])
                          ) {
                            var e = t,
                              n = d,
                              i = p._api,
                              r = e.seriesIndex,
                              o = e.getData(n.dataType);
                            if (o) {
                              var n = (V((n = Do(o, n))) ? n[0] : n) || 0,
                                a = o.getItemGraphicEl(n);
                              if (!a)
                                for (var s = o.count(), l = 0; !a && l < s; )
                                  a = o.getItemGraphicEl(l++);
                              a
                                ? kl(r, (n = D(a)).focus, n.blurScope, i)
                                : ((n = e.get(["emphasis", "focus"])),
                                  (e = e.get(["emphasis", "blurScope"])),
                                  null != n && kl(r, n, e, i));
                            }
                          }
                        } else
                          (n = (r = Pl(
                            t.mainType,
                            t.componentIndex,
                            d.name,
                            p._api
                          )).focusSelf),
                            (e = r.dispatchers),
                            d.type === Js &&
                              n &&
                              !d.notBlur &&
                              Al(t.mainType, t.componentIndex, p._api),
                            e &&
                              E(e, function (t) {
                                (d.type === Js ? bl : Sl)(t);
                              });
                      else
                        Vl(d) &&
                          t instanceof Ng &&
                          ((i = t),
                          (u = d),
                          p._api,
                          Vl(u) &&
                            ((h = u.dataType),
                            V((c = Do(i.getData(h), u))) || (c = [c]),
                            i[
                              u.type === il
                                ? "toggleSelect"
                                : u.type === el
                                ? "select"
                                : "unselect"
                            ](c, h)),
                          Ll(t),
                          t0(p));
                    var u, h, c;
                  },
                  p
                ),
              r &&
                r.eachComponent(
                  i,
                  function (t) {
                    (f && null != f.get(t.id)) ||
                      o(
                        p["series" === n ? "_chartsMap" : "_componentsMap"][
                          t.__viewId
                        ]
                      );
                  },
                  p
                ))
            : E([].concat(p._componentsViews).concat(p._chartsViews), o);
      }),
      (Hm = {
        prepareAndUpdate: function (t) {
          Bm(this),
            Hm.update.call(this, t, { optionChanged: null != t.newOption });
        },
        update: function (t, e) {
          var n = this._model,
            i = this._api,
            r = this._zr,
            o = this._coordSysMgr,
            a = this._scheduler;
          n &&
            (n.setUpdatePayload(t),
            a.restoreData(n, t),
            a.performSeriesTasks(n),
            o.create(n, i),
            a.performDataProcessorTasks(n, t),
            Wm(this, n),
            o.update(n, i),
            s0(n),
            a.performVisualTasks(n, t),
            jm(this, n, i, t, e),
            (o = n.get("backgroundColor") || "transparent"),
            (a = n.get("darkMode")),
            r.setBackgroundColor(o),
            null != a && "auto" !== a && r.setDarkMode(a),
            Dm.trigger("afterupdate", n, i));
        },
        updateTransform: function (n) {
          var i,
            r,
            o = this,
            a = this._model,
            s = this._api;
          a &&
            (a.setUpdatePayload(n),
            (i = []),
            a.eachComponent(function (t, e) {
              "series" !== t &&
                (t = o.getViewOfComponentModel(e)) &&
                t.__alive &&
                (!t.updateTransform ||
                  ((e = t.updateTransform(e, a, s, n)) && e.update)) &&
                i.push(t);
            }),
            (r = N()),
            a.eachSeries(function (t) {
              var e = o._chartsMap[t.__viewId];
              (!e.updateTransform ||
                ((e = e.updateTransform(t, a, s, n)) && e.update)) &&
                r.set(t.uid, 1);
            }),
            s0(a),
            this._scheduler.performVisualTasks(a, n, {
              setDirty: !0,
              dirtyMap: r,
            }),
            $m(this, a, s, n, {}, r),
            Dm.trigger("afterupdate", a, s));
        },
        updateView: function (t) {
          var e = this._model;
          e &&
            (e.setUpdatePayload(t),
            Zg.markUpdateMethod(t, "updateView"),
            s0(e),
            this._scheduler.performVisualTasks(e, t, { setDirty: !0 }),
            jm(this, e, this._api, t, {}),
            Dm.trigger("afterupdate", e, this._api));
        },
        updateVisual: function (n) {
          var i = this,
            r = this._model;
          r &&
            (r.setUpdatePayload(n),
            r.eachSeries(function (t) {
              t.getData().clearAllVisual();
            }),
            Zg.markUpdateMethod(n, "updateVisual"),
            s0(r),
            this._scheduler.performVisualTasks(r, n, {
              visualType: "visual",
              setDirty: !0,
            }),
            r.eachComponent(function (t, e) {
              "series" !== t &&
                (t = i.getViewOfComponentModel(e)) &&
                t.__alive &&
                t.updateVisual(e, r, i._api, n);
            }),
            r.eachSeries(function (t) {
              i._chartsMap[t.__viewId].updateVisual(t, r, i._api, n);
            }),
            Dm.trigger("afterupdate", r, this._api));
        },
        updateLayout: function (t) {
          Hm.update.call(this, t);
        },
      }),
      (Gm = function (t, e, n, i) {
        if (t._disposed) t.id;
        else
          for (
            var r = t._model,
              o = t._coordSysMgr.getCoordinateSystems(),
              a = Po(r, n),
              s = 0;
            s < o.length;
            s++
          ) {
            var l = o[s];
            if (l[e] && null != (l = l[e](r, a, i))) return l;
          }
      }),
      (Wm = function (t, e) {
        var n = t._chartsMap,
          i = t._scheduler;
        e.eachSeries(function (t) {
          i.updateStreamModes(t, n[t.__viewId]);
        });
      }),
      (Um = function (i, t) {
        var r = this,
          e = this.getModel(),
          n = i.type,
          o = i.escapeConnect,
          a = d0[n],
          s = a.actionInfo,
          l = (s.update || "update").split(":"),
          u = l.pop(),
          h = null != l[0] && Vo(l[0]),
          l = ((this[Am] = !0), [i]),
          c = !1;
        i.batch &&
          ((c = !0),
          (l = F(i.batch, function (t) {
            return ((t = B(L({}, t), i)).batch = null), t;
          })));
        var p = [],
          d = Vl(i),
          f = Hl(i);
        if (
          (f && Dl(this._api),
          E(l, function (t) {
            var e, n;
            ((y = (y = a.action(t, r._model, r._api)) || L({}, t)).type =
              s.event || y.type),
              p.push(y),
              f
                ? ((e = (n = Lo(i)).queryOptionMap),
                  (n = n.mainTypeSpecified ? e.keys()[0] : "series"),
                  Vm(r, u, t, n),
                  t0(r))
                : d
                ? (Vm(r, u, t, "series"), t0(r))
                : h && Vm(r, u, t, h.main, h.sub);
          }),
          "none" !== u && !f && !d && !h)
        )
          try {
            this[Pm]
              ? (Bm(this), Hm.update.call(this, i), (this[Pm] = null))
              : Hm[u].call(this, i);
          } catch (i) {
            throw ((this[Am] = !1), i);
          }
        var g,
          y = c ? { type: s.event || n, escapeConnect: o, batch: p } : p[0];
        (this[Am] = !1),
          t ||
            ((l = this._messageCenter).trigger(y.type, y),
            d &&
              ((c = {
                type: "selectchanged",
                escapeConnect: o,
                selected:
                  ((g = []),
                  e.eachSeries(function (n) {
                    E(n.getAllData(), function (t) {
                      t.data;
                      var t = t.type,
                        e = n.getSelectedDataIndices();
                      0 < e.length &&
                        ((e = { dataIndex: e, seriesIndex: n.seriesIndex }),
                        null != t && (e.dataType = t),
                        g.push(e));
                    });
                  }),
                  g),
                isFromClick: i.isFromClick || !1,
                fromAction: i.type,
                fromActionPayload: i,
              }),
              l.trigger(c.type, c)));
      }),
      (Xm = function (t) {
        for (var e = this._pendingActions; e.length; ) {
          var n = e.shift();
          Um.call(this, n, t);
        }
      }),
      (Ym = function (t) {
        t || this.trigger("updated");
      }),
      (qm = function (e, n) {
        e.on("rendered", function (t) {
          n.trigger("rendered", t),
            !e.animation.isFinished() ||
              n[Pm] ||
              n._scheduler.unfinished ||
              n._pendingActions.length ||
              n.trigger("finished");
        });
      }),
      (Zm = function (t, a) {
        t.on("mouseover", function (t) {
          var e,
            n,
            i,
            r,
            o = zy(t.target, Fl);
          o &&
            ((o = o),
            (e = t),
            (t = a._api),
            (n = D(o)),
            (i = (r = Pl(
              n.componentMainType,
              n.componentIndex,
              n.componentHighDownName,
              t
            )).dispatchers),
            (r = r.focusSelf),
            i
              ? (r && Al(n.componentMainType, n.componentIndex, t),
                E(i, function (t) {
                  return xl(t, e);
                }))
              : (kl(n.seriesIndex, n.focus, n.blurScope, t),
                "self" === n.focus &&
                  Al(n.componentMainType, n.componentIndex, t),
                xl(o, e)),
            t0(a));
        })
          .on("mouseout", function (t) {
            var e,
              n,
              i = zy(t.target, Fl);
            i &&
              ((i = i),
              (e = t),
              Dl((t = a._api)),
              (n = Pl(
                (n = D(i)).componentMainType,
                n.componentIndex,
                n.componentHighDownName,
                t
              ).dispatchers)
                ? E(n, function (t) {
                    return wl(t, e);
                  })
                : wl(i, e),
              t0(a));
          })
          .on("click", function (t) {
            var e,
              t = zy(
                t.target,
                function (t) {
                  return null != D(t).dataIndex;
                },
                !0
              );
            t &&
              ((e = t.selected ? "unselect" : "select"),
              (t = D(t)),
              a._api.dispatchAction({
                type: e,
                dataType: t.dataType,
                dataIndexInside: t.dataIndex,
                seriesIndex: t.seriesIndex,
                isFromClick: !0,
              }));
          });
      }),
      (jm = function (t, e, n, i, r) {
        var o, a, s, l, u, h, c;
        (u = []),
          (c = !(h = [])),
          (o = e).eachComponent(function (t, e) {
            var n = e.get("zlevel") || 0,
              i = e.get("z") || 0,
              r = e.getZLevelKey();
            (c = c || !!r),
              ("series" === t ? h : u).push({
                zlevel: n,
                z: i,
                idx: e.componentIndex,
                type: t,
                key: r,
              });
          }),
          c &&
            (yn((l = u.concat(h)), function (t, e) {
              return t.zlevel === e.zlevel ? t.z - e.z : t.zlevel - e.zlevel;
            }),
            E(l, function (t) {
              var e = o.getComponent(t.type, t.idx),
                n = t.zlevel,
                t = t.key;
              null != a && (n = Math.max(a, n)),
                t
                  ? (n === a && t !== s && n++, (s = t))
                  : s && (n === a && n++, (s = "")),
                (a = n),
                e.setZLevel(n);
            })),
          Km(t, e, n, i, r),
          E(t._chartsViews, function (t) {
            t.__alive = !1;
          }),
          $m(t, e, n, i, r),
          E(t._chartsViews, function (t) {
            t.__alive || t.remove(e, n);
          });
      }),
      (Km = function (t, n, i, r, e, o) {
        E(o || t._componentsViews, function (t) {
          var e = t.__model;
          h0(0, t), t.render(e, n, i, r), u0(e, t), c0(e, t);
        });
      }),
      ($m = function (r, t, e, o, n, a) {
        var i,
          s,
          l,
          u,
          h = r._scheduler,
          c =
            ((n = L(n || {}, { updatedSeries: t.getSeries() })),
            Dm.trigger("series:beforeupdate", t, e, n),
            !1);
        t.eachSeries(function (t) {
          var e,
            n = r._chartsMap[t.__viewId],
            i = ((n.__alive = !0), n.renderTask);
          h.updatePayload(i, o),
            h0(0, n),
            a && a.get(t.uid) && i.dirty(),
            i.perform(h.getPerformArgs(i)) && (c = !0),
            (n.group.silent = !!t.get("silent")),
            (i = n),
            (e = t.get("blendMode") || null),
            i.eachRendered(function (t) {
              t.isGroup || (t.style.blend = e);
            }),
            Ll(t);
        }),
          (h.unfinished = c || h.unfinished),
          Dm.trigger("series:layoutlabels", t, e, n),
          Dm.trigger("series:transition", t, e, n),
          t.eachSeries(function (t) {
            var e = r._chartsMap[t.__viewId];
            u0(t, e), c0(t, e);
          }),
          (s = t),
          (l = (i = r)._zr.storage),
          (u = 0),
          l.traverse(function (t) {
            t.isGroup || u++;
          }),
          u > s.get("hoverLayerThreshold") &&
            !b.node &&
            !b.worker &&
            s.eachSeries(function (t) {
              t.preventUsingHoverLayer ||
                ((t = i._chartsMap[t.__viewId]).__alive &&
                  t.eachRendered(function (t) {
                    t.states.emphasis && (t.states.emphasis.hoverLayer = !0);
                  }));
            }),
          Dm.trigger("series:afterupdate", t, e, n);
      }),
      (t0 = function (t) {
        (t[Lm] = !0), t.getZr().wakeUp();
      }),
      (e0 = function (t) {
        t[Lm] &&
          (t.getZr().storage.traverse(function (t) {
            kh(t) || l0(t);
          }),
          (t[Lm] = !1));
      }),
      (Qm = function (n) {
        return (
          u(t, (e = _d)),
          (t.prototype.getCoordinateSystems = function () {
            return n._coordSysMgr.getCoordinateSystems();
          }),
          (t.prototype.getComponentByElement = function (t) {
            for (; t; ) {
              var e = t.__ecComponentInfo;
              if (null != e) return n._model.getComponent(e.mainType, e.index);
              t = t.parent;
            }
          }),
          (t.prototype.enterEmphasis = function (t, e) {
            bl(t, e), t0(n);
          }),
          (t.prototype.leaveEmphasis = function (t, e) {
            Sl(t, e), t0(n);
          }),
          (t.prototype.enterBlur = function (t) {
            gl(t, hl), t0(n);
          }),
          (t.prototype.leaveBlur = function (t) {
            Ml(t), t0(n);
          }),
          (t.prototype.enterSelect = function (t) {
            Tl(t), t0(n);
          }),
          (t.prototype.leaveSelect = function (t) {
            Cl(t), t0(n);
          }),
          (t.prototype.getModel = function () {
            return n.getModel();
          }),
          (t.prototype.getViewOfComponentModel = function (t) {
            return n.getViewOfComponentModel(t);
          }),
          (t.prototype.getViewOfSeriesModel = function (t) {
            return n.getViewOfSeriesModel(t);
          }),
          new t(n)
        );
        function t() {
          return (null !== e && e.apply(this, arguments)) || this;
        }
        var e;
      }),
      void (Jm = function (i) {
        function r(t, e) {
          for (var n = 0; n < t.length; n++) t[n][Rm] = e;
        }
        E(f0, function (t, e) {
          i._messageCenter.on(e, function (t) {
            var e, n;
            !w0[i.group] ||
              0 === i[Rm] ||
              (t && t.escapeConnect) ||
              ((e = i.makeActionFromEvent(t)),
              (n = []),
              E(x0, function (t) {
                t !== i && t.group === i.group && n.push(t);
              }),
              r(n, 0),
              E(n, function (t) {
                1 !== t[Rm] && t.dispatchAction(e);
              }),
              r(n, 2));
          });
        });
      })));
  var o0,
    a0 = c,
    Xy = a0.prototype;
  function c(t, e, n) {
    var i = o0.call(this, new Py()) || this,
      t =
        ((i._chartsViews = []),
        (i._chartsMap = {}),
        (i._componentsViews = []),
        (i._componentsMap = {}),
        (i._pendingActions = []),
        (n = n || {}),
        H(e) && (e = v0[e]),
        (i._dom = t),
        (i._zr = Xr(t, {
          renderer: n.renderer || "canvas",
          devicePixelRatio: n.devicePixelRatio,
          width: n.width,
          height: n.height,
          ssr: n.ssr,
          useDirtyRect: R(n.useDirtyRect, !1),
          useCoarsePointer: R(n.useCoarsePointer, "auto"),
          pointerSize: n.pointerSize,
        }))),
      n =
        ((i._ssr = n.ssr),
        (i._throttledZrFlush = ry(ct(t.flush, t), 17)),
        (e = y(e)) && Xd(e, !0),
        (i._theme = e),
        (i._locale = H((e = n.locale || Gc))
          ? ((n = Vc[e.toUpperCase()] || {}),
            e === zc || e === Bc ? y(n) : d(y(n), y(Vc[Fc]), !1))
          : d(y(e), y(Vc[Fc]), !1)),
        (i._coordSysMgr = new bd()),
        (i._api = Qm(i)));
    function r(t, e) {
      return t.__prio - e.__prio;
    }
    return (
      yn(m0, r),
      yn(g0, r),
      (i._scheduler = new fy(i, n, g0, m0)),
      (i._messageCenter = new i0()),
      i._initEvents(),
      (i.resize = ct(i.resize, i)),
      t.animation.on("frame", i._onframe, i),
      qm(t, i),
      Zm(t, i),
      Dt(i),
      i
    );
  }
  function s0(t) {
    t.clearColorPalette(),
      t.eachSeries(function (t) {
        t.clearColorPalette();
      });
  }
  function l0(t) {
    for (var e = [], n = t.currentStates, i = 0; i < n.length; i++) {
      var r = n[i];
      "emphasis" !== r && "blur" !== r && "select" !== r && e.push(r);
    }
    t.selected && t.states.select && e.push("select"),
      t.hoverState === Ks && t.states.emphasis
        ? e.push("emphasis")
        : t.hoverState === js && t.states.blur && e.push("blur"),
      t.useStates(e);
  }
  function u0(t, e) {
    var n, i;
    t.preventAutoZ ||
      ((n = t.get("z") || 0),
      (i = t.get("zlevel") || 0),
      e.eachRendered(function (t) {
        return (
          (function t(e, n, i, r) {
            var o = e.getTextContent(),
              a = e.getTextGuideLine();
            if (e.isGroup)
              for (var s = e.childrenRef(), l = 0; l < s.length; l++)
                r = Math.max(t(s[l], n, i, r), r);
            else (e.z = n), (e.zlevel = i), (r = Math.max(e.z2, r));
            o && ((o.z = n), (o.zlevel = i), isFinite(r)) && (o.z2 = r + 2),
              a &&
                ((o = e.textGuideLineConfig),
                (a.z = n),
                (a.zlevel = i),
                isFinite(r)) &&
                (a.z2 = r + (o && o.showAbove ? 1 : -1));
            return r;
          })(t, n, i, -1 / 0),
          !0
        );
      }));
  }
  function h0(t, e) {
    e.eachRendered(function (t) {
      var e, n;
      kh(t) ||
        ((e = t.getTextContent()),
        (n = t.getTextGuideLine()),
        t.stateTransition && (t.stateTransition = null),
        e && e.stateTransition && (e.stateTransition = null),
        n && n.stateTransition && (n.stateTransition = null),
        t.hasState()
          ? ((t.prevStates = t.currentStates), t.clearStates())
          : t.prevStates && (t.prevStates = null));
    });
  }
  function c0(t, e) {
    var n = t.getModel("stateAnimation"),
      r = t.isAnimationEnabled(),
      t = n.get("duration"),
      o =
        0 < t
          ? { duration: t, delay: n.get("delay"), easing: n.get("easing") }
          : null;
    e.eachRendered(function (t) {
      var e, n, i;
      t.states &&
        t.states.emphasis &&
        (kh(t) ||
          (t instanceof j &&
            (((i = Ys((n = t))).normalFill = n.style.fill),
            (i.normalStroke = n.style.stroke),
            (n = n.states.select || {}),
            (i.selectFill = (n.style && n.style.fill) || null),
            (i.selectStroke = (n.style && n.style.stroke) || null)),
          t.__dirty && (i = t.prevStates) && t.useStates(i),
          r &&
            ((t.stateTransition = o),
            (n = t.getTextContent()),
            (e = t.getTextGuideLine()),
            n && (n.stateTransition = o),
            e) &&
            (e.stateTransition = o),
          t.__dirty && l0(t)));
    });
  }
  (Xy.on = Nm("on")),
    (Xy.off = Nm("off")),
    (Xy.one = function (i, r, t) {
      var o = this;
      this.on.call(
        this,
        i,
        function t() {
          for (var e = [], n = 0; n < arguments.length; n++)
            e[n] = arguments[n];
          r && r.apply && r.apply(this, e), o.off(i, t);
        },
        t
      );
    });
  var p0 = [
    "click",
    "dblclick",
    "mouseover",
    "mouseout",
    "mousemove",
    "mousedown",
    "mouseup",
    "globalout",
    "contextmenu",
  ];
  var d0 = {},
    f0 = {},
    g0 = [],
    y0 = [],
    m0 = [],
    v0 = {},
    _0 = {},
    x0 = {},
    w0 = {},
    b0 = +new Date(),
    S0 = +new Date(),
    M0 = "_echarts_instance_";
  function T0(t) {
    w0[t] = !1;
  }
  Gy = T0;
  function C0(t) {
    return x0[((e = M0), (t = t).getAttribute ? t.getAttribute(e) : t[e])];
    var e;
  }
  function I0(t, e) {
    v0[t] = e;
  }
  function D0(t) {
    I(y0, t) < 0 && y0.push(t);
  }
  function k0(t, e) {
    B0(g0, t, e, 2e3);
  }
  function A0(t) {
    L0("afterinit", t);
  }
  function P0(t) {
    L0("afterupdate", t);
  }
  function L0(t, e) {
    Dm.on(t, e);
  }
  function O0(t, e, n) {
    S(e) && ((n = e), (e = ""));
    var i = O(t) ? t.type : [t, (t = { event: e })][0];
    (t.event = (t.event || i).toLowerCase()),
      (e = t.event),
      f0[e] ||
        (Tt(Om.test(i) && Om.test(e)),
        d0[i] || (d0[i] = { action: n, actionInfo: t }),
        (f0[e] = i));
  }
  function R0(t, e) {
    bd.register(t, e);
  }
  function N0(t, e) {
    B0(m0, t, e, 1e3, "layout");
  }
  function E0(t, e) {
    B0(m0, t, e, 3e3, "visual");
  }
  var z0 = [];
  function B0(t, e, n, i, r) {
    (S(e) || O(e)) && ((n = e), (e = i)),
      0 <= I(z0, n) ||
        (z0.push(n),
        ((i = fy.wrapStageHandler(n, r)).__prio = e),
        (i.__raw = n),
        t.push(i));
  }
  function F0(t, e) {
    _0[t] = e;
  }
  function V0(t, e, n) {
    var i = km.registerMap;
    i && i(t, e, n);
  }
  function H0(t) {
    var e = (t = y(t)).type,
      n = (e || f(""), e.split(":")),
      i = (2 !== n.length && f(""), !1);
    "echarts" === n[0] && ((e = n[1]), (i = !0)),
      (t.__isBuiltIn = i),
      Qf.set(e, t);
  }
  E0(2e3, jo),
    E0(4500, Zh),
    E0(4500, jc),
    E0(2e3, Ic),
    E0(4500, Sc),
    E0(7e3, function (e, i) {
      e.eachRawSeries(function (t) {
        var n;
        !e.isSeriesFiltered(t) &&
          ((n = t.getData()).hasItemVisual() &&
            n.each(function (t) {
              var e = n.getItemVisual(t, "decal");
              e && (n.ensureUniqueItemVisual(t, "style").decal = Cm(e, i));
            }),
          (t = n.getVisual("decal"))) &&
          (n.getVisual("style").decal = Cm(t, i));
      });
    }),
    D0(Xd),
    k0(900, function (t) {
      var i = N();
      t.eachSeries(function (t) {
        var e,
          n = t.get("stack");
        n &&
          ((n = i.get(n) || i.set(n, [])),
          (t = {
            stackResultDimension: (e = t.getData()).getCalculationInfo(
              "stackResultDimension"
            ),
            stackedOverDimension: e.getCalculationInfo("stackedOverDimension"),
            stackedDimension: e.getCalculationInfo("stackedDimension"),
            stackedByDimension: e.getCalculationInfo("stackedByDimension"),
            isStackedByIndex: e.getCalculationInfo("isStackedByIndex"),
            data: e,
            seriesModel: t,
          }).stackedDimension) &&
          (t.isStackedByIndex || t.stackedByDimension) &&
          (n.length &&
            e.setCalculationInfo(
              "stackedOnSeries",
              n[n.length - 1].seriesModel
            ),
          n.push(t));
      }),
        i.each(Yd);
    }),
    F0("default", function (i, r) {
      B((r = r || {}), {
        text: "loading",
        textColor: "#000",
        fontSize: 12,
        fontWeight: "normal",
        fontStyle: "normal",
        fontFamily: "sans-serif",
        maskColor: "rgba(255, 255, 255, 0.8)",
        showSpinner: !0,
        color: "#5470c6",
        spinnerRadius: 10,
        lineWidth: 5,
        zlevel: 0,
      });
      var t = new Fr(),
        o = new Is({ style: { fill: r.maskColor }, zlevel: r.zlevel, z: 1e4 });
      t.add(o);
      var a,
        s = new Ls({
          style: {
            text: r.text,
            fill: r.textColor,
            fontSize: r.fontSize,
            fontWeight: r.fontWeight,
            fontStyle: r.fontStyle,
            fontFamily: r.fontFamily,
          },
          zlevel: r.zlevel,
          z: 10001,
        }),
        l = new Is({
          style: { fill: "none" },
          textContent: s,
          textConfig: { position: "right", distance: 10 },
          zlevel: r.zlevel,
          z: 10001,
        });
      return (
        t.add(l),
        r.showSpinner &&
          ((a = new rh({
            shape: {
              startAngle: -dy / 2,
              endAngle: -dy / 2 + 0.1,
              r: r.spinnerRadius,
            },
            style: {
              stroke: r.color,
              lineCap: "round",
              lineWidth: r.lineWidth,
            },
            zlevel: r.zlevel,
            z: 10001,
          }))
            .animateShape(!0)
            .when(1e3, { endAngle: (3 * dy) / 2 })
            .start("circularInOut"),
          a
            .animateShape(!0)
            .when(1e3, { startAngle: (3 * dy) / 2 })
            .delay(300)
            .start("circularInOut"),
          t.add(a)),
        (t.resize = function () {
          var t = s.getBoundingRect().width,
            e = r.showSpinner ? r.spinnerRadius : 0,
            t =
              (i.getWidth() - 2 * e - (r.showSpinner && t ? 10 : 0) - t) / 2 -
              (r.showSpinner && t ? 0 : 5 + t / 2) +
              (r.showSpinner ? 0 : t / 2) +
              (t ? 0 : e),
            n = i.getHeight() / 2;
          r.showSpinner && a.setShape({ cx: t, cy: n }),
            l.setShape({ x: t - e, y: n - e, width: 2 * e, height: 2 * e }),
            o.setShape({
              x: 0,
              y: 0,
              width: i.getWidth(),
              height: i.getHeight(),
            });
        }),
        t.resize(),
        t
      );
    }),
    O0({ type: Js, event: Js, update: Js }, Ft),
    O0({ type: tl, event: tl, update: tl }, Ft),
    O0({ type: el, event: el, update: el }, Ft),
    O0({ type: nl, event: nl, update: nl }, Ft),
    O0({ type: il, event: il, update: il }, Ft),
    I0("light", kc),
    I0("dark", Tc);
  function G0(t) {
    return null == t ? 0 : t.length || 1;
  }
  function W0(t) {
    return t;
  }
  (X0.prototype.add = function (t) {
    return (this._add = t), this;
  }),
    (X0.prototype.update = function (t) {
      return (this._update = t), this;
    }),
    (X0.prototype.updateManyToOne = function (t) {
      return (this._updateManyToOne = t), this;
    }),
    (X0.prototype.updateOneToMany = function (t) {
      return (this._updateOneToMany = t), this;
    }),
    (X0.prototype.updateManyToMany = function (t) {
      return (this._updateManyToMany = t), this;
    }),
    (X0.prototype.remove = function (t) {
      return (this._remove = t), this;
    }),
    (X0.prototype.execute = function () {
      this[this._diffModeMultiple ? "_executeMultiple" : "_executeOneToOne"]();
    }),
    (X0.prototype._executeOneToOne = function () {
      var t = this._old,
        e = this._new,
        n = {},
        i = new Array(t.length),
        r = new Array(e.length);
      this._initIndexMap(t, null, i, "_oldKeyGetter"),
        this._initIndexMap(e, n, r, "_newKeyGetter");
      for (var o = 0; o < t.length; o++) {
        var a,
          s = i[o],
          l = n[s],
          u = G0(l);
        1 < u
          ? ((a = l.shift()),
            1 === l.length && (n[s] = l[0]),
            this._update && this._update(a, o))
          : 1 === u
          ? ((n[s] = null), this._update && this._update(l, o))
          : this._remove && this._remove(o);
      }
      this._performRestAdd(r, n);
    }),
    (X0.prototype._executeMultiple = function () {
      var t = this._old,
        e = this._new,
        n = {},
        i = {},
        r = [],
        o = [];
      this._initIndexMap(t, n, r, "_oldKeyGetter"),
        this._initIndexMap(e, i, o, "_newKeyGetter");
      for (var a = 0; a < r.length; a++) {
        var s = r[a],
          l = n[s],
          u = i[s],
          h = G0(l),
          c = G0(u);
        if (1 < h && 1 === c)
          this._updateManyToOne && this._updateManyToOne(u, l), (i[s] = null);
        else if (1 === h && 1 < c)
          this._updateOneToMany && this._updateOneToMany(u, l), (i[s] = null);
        else if (1 === h && 1 === c)
          this._update && this._update(u, l), (i[s] = null);
        else if (1 < h && 1 < c)
          this._updateManyToMany && this._updateManyToMany(u, l), (i[s] = null);
        else if (1 < h)
          for (var p = 0; p < h; p++) this._remove && this._remove(l[p]);
        else this._remove && this._remove(l);
      }
      this._performRestAdd(o, i);
    }),
    (X0.prototype._performRestAdd = function (t, e) {
      for (var n = 0; n < t.length; n++) {
        var i = t[n],
          r = e[i],
          o = G0(r);
        if (1 < o) for (var a = 0; a < o; a++) this._add && this._add(r[a]);
        else 1 === o && this._add && this._add(r);
        e[i] = null;
      }
    }),
    (X0.prototype._initIndexMap = function (t, e, n, i) {
      for (var r = this._diffModeMultiple, o = 0; o < t.length; o++) {
        var a,
          s,
          l = "_ec_" + this[i](t[o], o);
        r || (n[o] = l),
          e &&
            (0 === (s = G0((a = e[l])))
              ? ((e[l] = o), r && n.push(l))
              : 1 === s
              ? (e[l] = [a, o])
              : a.push(o));
      }
    });
  var U0 = X0;
  function X0(t, e, n, i, r, o) {
    (this._old = t),
      (this._new = e),
      (this._oldKeyGetter = n || W0),
      (this._newKeyGetter = i || W0),
      (this.context = r),
      (this._diffModeMultiple = "multiple" === o);
  }
  (q0.prototype.get = function () {
    return {
      fullDimensions: this._getFullDimensionNames(),
      encode: this._encode,
    };
  }),
    (q0.prototype._getFullDimensionNames = function () {
      return (
        this._cachedDimNames ||
          (this._cachedDimNames = this._schema
            ? this._schema.makeOutputDimensionNames()
            : []),
        this._cachedDimNames
      );
    });
  var Y0 = q0;
  function q0(t, e) {
    (this._encode = t), (this._schema = e);
  }
  function Z0(o, t) {
    var e = {},
      a = (e.encode = {}),
      s = N(),
      l = [],
      u = [],
      h = {},
      i =
        (E(o.dimensions, function (t) {
          var e,
            n,
            i = o.getDimensionInfo(t),
            r = i.coordDim;
          r &&
            ((e = i.coordDimIndex),
            (j0(a, r)[e] = t),
            i.isExtraCoord ||
              (s.set(r, 1),
              "ordinal" !== (n = i.type) && "time" !== n && (l[0] = t),
              (j0(h, r)[e] = o.getDimensionIndex(i.name))),
            i.defaultTooltip) &&
            u.push(t),
            Up.each(function (t, e) {
              var n = j0(a, e),
                e = i.otherDims[e];
              null != e && !1 !== e && (n[e] = i.name);
            });
        }),
        []),
      r = {},
      n =
        (s.each(function (t, e) {
          var n = a[e];
          (r[e] = n[0]), (i = i.concat(n));
        }),
        (e.dataDimsOnCoord = i),
        (e.dataDimIndicesOnCoord = F(i, function (t) {
          return o.getDimensionInfo(t).storeDimIndex;
        })),
        (e.encodeFirstDimNotExtra = r),
        a.label),
      n = (n && n.length && (l = n.slice()), a.tooltip);
    return (
      n && n.length ? (u = n.slice()) : u.length || (u = l.slice()),
      (a.defaultedLabel = l),
      (a.defaultedTooltip = u),
      (e.userOutput = new Y0(h, t)),
      e
    );
  }
  function j0(t, e) {
    return t.hasOwnProperty(e) || (t[e] = []), t[e];
  }
  var K0 = function (t) {
      (this.otherDims = {}), null != t && L(this, t);
    },
    $0 = ko(),
    Q0 = { float: "f", int: "i", ordinal: "o", number: "n", time: "t" },
    J0 =
      ((tv.prototype.isDimensionOmitted = function () {
        return this._dimOmitted;
      }),
      (tv.prototype._updateDimOmitted = function (t) {
        !(this._dimOmitted = t) ||
          this._dimNameMap ||
          (this._dimNameMap = iv(this.source));
      }),
      (tv.prototype.getSourceDimensionIndex = function (t) {
        return R(this._dimNameMap.get(t), -1);
      }),
      (tv.prototype.getSourceDimension = function (t) {
        var e = this.source.dimensionsDefine;
        if (e) return e[t];
      }),
      (tv.prototype.makeStoreSchema = function () {
        for (
          var t = this._fullDimCount,
            e = nf(this.source),
            n = !(30 < t),
            i = "",
            r = [],
            o = 0,
            a = 0;
          o < t;
          o++
        ) {
          var s,
            l = void 0,
            u = void 0,
            h = void 0,
            c = this.dimensions[a];
          c && c.storeDimIndex === o
            ? ((l = e ? c.name : null), (u = c.type), (h = c.ordinalMeta), a++)
            : (s = this.getSourceDimension(o)) &&
              ((l = e ? s.name : null), (u = s.type)),
            r.push({ property: l, type: u, ordinalMeta: h }),
            !e ||
              null == l ||
              (c && c.isCalculationCoord) ||
              (i += n ? l.replace(/\`/g, "`1").replace(/\$/g, "`2") : l),
            (i = i + "$" + (Q0[u] || "f")),
            h && (i += h.uid),
            (i += "$");
        }
        var p = this.source;
        return {
          dimensions: r,
          hash: [p.seriesLayoutBy, p.startIndex, i].join("$$"),
        };
      }),
      (tv.prototype.makeOutputDimensionNames = function () {
        for (var t = [], e = 0, n = 0; e < this._fullDimCount; e++) {
          var i = void 0,
            r = this.dimensions[n];
          r && r.storeDimIndex === e
            ? (r.isCalculationCoord || (i = r.name), n++)
            : (r = this.getSourceDimension(e)) && (i = r.name),
            t.push(i);
        }
        return t;
      }),
      (tv.prototype.appendCalculationDimension = function (t) {
        this.dimensions.push(t),
          (t.isCalculationCoord = !0),
          this._fullDimCount++,
          this._updateDimOmitted(!0);
      }),
      tv);
  function tv(t) {
    (this.dimensions = t.dimensions),
      (this._dimOmitted = t.dimensionOmitted),
      (this.source = t.source),
      (this._fullDimCount = t.fullDimensionCount),
      this._updateDimOmitted(t.dimensionOmitted);
  }
  function ev(t) {
    return t instanceof J0;
  }
  function nv(t) {
    for (var e = N(), n = 0; n < (t || []).length; n++) {
      var i = t[n],
        i = O(i) ? i.name : i;
      null != i && null == e.get(i) && e.set(i, n);
    }
    return e;
  }
  function iv(t) {
    var e = $0(t);
    return e.dimNameMap || (e.dimNameMap = nv(t.dimensionsDefine));
  }
  var rv,
    ov,
    av,
    sv,
    lv,
    uv,
    hv,
    cv = O,
    pv = F,
    dv = "undefined" == typeof Int32Array ? Array : Int32Array,
    fv = [
      "hasItemOption",
      "_nameList",
      "_idList",
      "_invertedIndicesMap",
      "_dimSummary",
      "userOutput",
      "_rawData",
      "_dimValueGetter",
      "_nameDimIdx",
      "_idDimIdx",
      "_nameRepeatCount",
    ],
    gv = ["_approximateExtent"],
    yv =
      ((p.prototype.getDimension = function (t) {
        var e;
        return null == (e = this._recognizeDimIndex(t))
          ? t
          : ((e = t),
            this._dimOmitted
              ? null != (t = this._dimIdxToName.get(e))
                ? t
                : (t = this._schema.getSourceDimension(e))
                ? t.name
                : void 0
              : this.dimensions[e]);
      }),
      (p.prototype.getDimensionIndex = function (t) {
        var e = this._recognizeDimIndex(t);
        return null != e
          ? e
          : null == t
          ? -1
          : (e = this._getDimInfo(t))
          ? e.storeDimIndex
          : this._dimOmitted
          ? this._schema.getSourceDimensionIndex(t)
          : -1;
      }),
      (p.prototype._recognizeDimIndex = function (t) {
        if (
          G(t) ||
          (null != t &&
            !isNaN(t) &&
            !this._getDimInfo(t) &&
            (!this._dimOmitted || this._schema.getSourceDimensionIndex(t) < 0))
        )
          return +t;
      }),
      (p.prototype._getStoreDimIndex = function (t) {
        return this.getDimensionIndex(t);
      }),
      (p.prototype.getDimensionInfo = function (t) {
        return this._getDimInfo(this.getDimension(t));
      }),
      (p.prototype._initGetDimensionInfo = function (t) {
        var e = this._dimInfos;
        this._getDimInfo = t
          ? function (t) {
              return e.hasOwnProperty(t) ? e[t] : void 0;
            }
          : function (t) {
              return e[t];
            };
      }),
      (p.prototype.getDimensionsOnCoord = function () {
        return this._dimSummary.dataDimsOnCoord.slice();
      }),
      (p.prototype.mapDimension = function (t, e) {
        var n = this._dimSummary;
        return null == e
          ? n.encodeFirstDimNotExtra[t]
          : (n = n.encode[t])
          ? n[e]
          : null;
      }),
      (p.prototype.mapDimensionsAll = function (t) {
        return (this._dimSummary.encode[t] || []).slice();
      }),
      (p.prototype.getStore = function () {
        return this._store;
      }),
      (p.prototype.initData = function (t, e, n) {
        var i,
          r,
          o = this;
        (i = t instanceof ug ? t : i) ||
          ((r = this.dimensions),
          (t = Kd(t) || st(t) ? new sf(t, r.length) : t),
          (i = new ug()),
          (r = pv(r, function (t) {
            return { type: o._dimInfos[t].type, property: t };
          })),
          i.initData(t, r, n)),
          (this._store = i),
          (this._nameList = (e || []).slice()),
          (this._idList = []),
          (this._nameRepeatCount = {}),
          this._doInit(0, i.count()),
          (this._dimSummary = Z0(this, this._schema)),
          (this.userOutput = this._dimSummary.userOutput);
      }),
      (p.prototype.appendData = function (t) {
        t = this._store.appendData(t);
        this._doInit(t[0], t[1]);
      }),
      (p.prototype.appendValues = function (t, e) {
        var t = this._store.appendValues(t, e.length),
          n = t.start,
          i = t.end,
          r = this._shouldMakeIdFromName();
        if ((this._updateOrdinalMeta(), e))
          for (var o = n; o < i; o++)
            (this._nameList[o] = e[o - n]), r && hv(this, o);
      }),
      (p.prototype._updateOrdinalMeta = function () {
        for (
          var t = this._store, e = this.dimensions, n = 0;
          n < e.length;
          n++
        ) {
          var i = this._dimInfos[e[n]];
          i.ordinalMeta && t.collectOrdinalMeta(i.storeDimIndex, i.ordinalMeta);
        }
      }),
      (p.prototype._shouldMakeIdFromName = function () {
        var t = this._store.getProvider();
        return (
          null == this._idDimIdx &&
          t.getSource().sourceFormat !== jp &&
          !t.fillStorage
        );
      }),
      (p.prototype._doInit = function (t, e) {
        if (!(e <= t)) {
          var n = this._store.getProvider(),
            i = (this._updateOrdinalMeta(), this._nameList),
            r = this._idList;
          if (n.getSource().sourceFormat === Xp && !n.pure)
            for (var o = [], a = t; a < e; a++) {
              var s = n.getItem(a, o);
              this.hasItemOption ||
                !O((l = s)) ||
                l instanceof Array ||
                (this.hasItemOption = !0),
                s &&
                  ((l = s.name),
                  null == i[a] && null != l && (i[a] = Mo(l, null)),
                  (s = s.id),
                  null == r[a]) &&
                  null != s &&
                  (r[a] = Mo(s, null));
            }
          if (this._shouldMakeIdFromName()) for (a = t; a < e; a++) hv(this, a);
          rv(this);
        }
        var l;
      }),
      (p.prototype.getApproximateExtent = function (t) {
        return (
          this._approximateExtent[t] ||
          this._store.getDataExtent(this._getStoreDimIndex(t))
        );
      }),
      (p.prototype.setApproximateExtent = function (t, e) {
        (e = this.getDimension(e)), (this._approximateExtent[e] = t.slice());
      }),
      (p.prototype.getCalculationInfo = function (t) {
        return this._calculationInfo[t];
      }),
      (p.prototype.setCalculationInfo = function (t, e) {
        cv(t) ? L(this._calculationInfo, t) : (this._calculationInfo[t] = e);
      }),
      (p.prototype.getName = function (t) {
        var t = this.getRawIndex(t),
          e = this._nameList[t];
        return (e =
          null ==
          (e =
            null == e && null != this._nameDimIdx
              ? av(this, this._nameDimIdx, t)
              : e)
            ? ""
            : e);
      }),
      (p.prototype._getCategory = function (t, e) {
        (e = this._store.get(t, e)), (t = this._store.getOrdinalMeta(t));
        return t ? t.categories[e] : e;
      }),
      (p.prototype.getId = function (t) {
        return ov(this, this.getRawIndex(t));
      }),
      (p.prototype.count = function () {
        return this._store.count();
      }),
      (p.prototype.get = function (t, e) {
        var n = this._store,
          t = this._dimInfos[t];
        if (t) return n.get(t.storeDimIndex, e);
      }),
      (p.prototype.getByRawIndex = function (t, e) {
        var n = this._store,
          t = this._dimInfos[t];
        if (t) return n.getByRawIndex(t.storeDimIndex, e);
      }),
      (p.prototype.getIndices = function () {
        return this._store.getIndices();
      }),
      (p.prototype.getDataExtent = function (t) {
        return this._store.getDataExtent(this._getStoreDimIndex(t));
      }),
      (p.prototype.getSum = function (t) {
        return this._store.getSum(this._getStoreDimIndex(t));
      }),
      (p.prototype.getMedian = function (t) {
        return this._store.getMedian(this._getStoreDimIndex(t));
      }),
      (p.prototype.getValues = function (t, e) {
        var n = this,
          i = this._store;
        return V(t)
          ? i.getValues(
              pv(t, function (t) {
                return n._getStoreDimIndex(t);
              }),
              e
            )
          : i.getValues(t);
      }),
      (p.prototype.hasValue = function (t) {
        for (
          var e = this._dimSummary.dataDimIndicesOnCoord, n = 0, i = e.length;
          n < i;
          n++
        )
          if (isNaN(this._store.get(e[n], t))) return !1;
        return !0;
      }),
      (p.prototype.indexOfName = function (t) {
        for (var e = 0, n = this._store.count(); e < n; e++)
          if (this.getName(e) === t) return e;
        return -1;
      }),
      (p.prototype.getRawIndex = function (t) {
        return this._store.getRawIndex(t);
      }),
      (p.prototype.indexOfRawIndex = function (t) {
        return this._store.indexOfRawIndex(t);
      }),
      (p.prototype.rawIndexOf = function (t, e) {
        t = (t && this._invertedIndicesMap[t])[e];
        return null == t || isNaN(t) ? -1 : t;
      }),
      (p.prototype.indicesOfNearest = function (t, e, n) {
        return this._store.indicesOfNearest(this._getStoreDimIndex(t), e, n);
      }),
      (p.prototype.each = function (t, e, n) {
        S(t) && ((n = e), (e = t), (t = []));
        (n = n || this), (t = pv(sv(t), this._getStoreDimIndex, this));
        this._store.each(t, n ? ct(e, n) : e);
      }),
      (p.prototype.filterSelf = function (t, e, n) {
        S(t) && ((n = e), (e = t), (t = []));
        (n = n || this), (t = pv(sv(t), this._getStoreDimIndex, this));
        return (this._store = this._store.filter(t, n ? ct(e, n) : e)), this;
      }),
      (p.prototype.selectRange = function (n) {
        var i = this,
          r = {};
        return (
          E(ht(n), function (t) {
            var e = i._getStoreDimIndex(t);
            r[e] = n[t];
          }),
          (this._store = this._store.selectRange(r)),
          this
        );
      }),
      (p.prototype.mapArray = function (t, e, n) {
        S(t) && ((n = e), (e = t), (t = []));
        var i = [];
        return (
          this.each(
            t,
            function () {
              i.push(e && e.apply(this, arguments));
            },
            (n = n || this)
          ),
          i
        );
      }),
      (p.prototype.map = function (t, e, n, i) {
        (n = n || i || this),
          (i = pv(sv(t), this._getStoreDimIndex, this)),
          (t = uv(this));
        return (t._store = this._store.map(i, n ? ct(e, n) : e)), t;
      }),
      (p.prototype.modify = function (t, e, n, i) {
        (n = n || i || this), (i = pv(sv(t), this._getStoreDimIndex, this));
        this._store.modify(i, n ? ct(e, n) : e);
      }),
      (p.prototype.downSample = function (t, e, n, i) {
        var r = uv(this);
        return (
          (r._store = this._store.downSample(
            this._getStoreDimIndex(t),
            e,
            n,
            i
          )),
          r
        );
      }),
      (p.prototype.lttbDownSample = function (t, e) {
        var n = uv(this);
        return (
          (n._store = this._store.lttbDownSample(this._getStoreDimIndex(t), e)),
          n
        );
      }),
      (p.prototype.getRawDataItem = function (t) {
        return this._store.getRawDataItem(t);
      }),
      (p.prototype.getItemModel = function (t) {
        var e = this.hostModel,
          t = this.getRawDataItem(t);
        return new Lc(t, e, e && e.ecModel);
      }),
      (p.prototype.diff = function (e) {
        var n = this;
        return new U0(
          e ? e.getStore().getIndices() : [],
          this.getStore().getIndices(),
          function (t) {
            return ov(e, t);
          },
          function (t) {
            return ov(n, t);
          }
        );
      }),
      (p.prototype.getVisual = function (t) {
        var e = this._visual;
        return e && e[t];
      }),
      (p.prototype.setVisual = function (t, e) {
        (this._visual = this._visual || {}),
          cv(t) ? L(this._visual, t) : (this._visual[t] = e);
      }),
      (p.prototype.getItemVisual = function (t, e) {
        (t = this._itemVisuals[t]), (t = t && t[e]);
        return null == t ? this.getVisual(e) : t;
      }),
      (p.prototype.hasItemVisual = function () {
        return 0 < this._itemVisuals.length;
      }),
      (p.prototype.ensureUniqueItemVisual = function (t, e) {
        var n = this._itemVisuals,
          i = n[t],
          n = (i = i || (n[t] = {}))[e];
        return (
          null == n &&
            (V((n = this.getVisual(e)))
              ? (n = n.slice())
              : cv(n) && (n = L({}, n)),
            (i[e] = n)),
          n
        );
      }),
      (p.prototype.setItemVisual = function (t, e, n) {
        var i = this._itemVisuals[t] || {};
        (this._itemVisuals[t] = i), cv(e) ? L(i, e) : (i[e] = n);
      }),
      (p.prototype.clearAllVisual = function () {
        (this._visual = {}), (this._itemVisuals = []);
      }),
      (p.prototype.setLayout = function (t, e) {
        cv(t) ? L(this._layout, t) : (this._layout[t] = e);
      }),
      (p.prototype.getLayout = function (t) {
        return this._layout[t];
      }),
      (p.prototype.getItemLayout = function (t) {
        return this._itemLayouts[t];
      }),
      (p.prototype.setItemLayout = function (t, e, n) {
        this._itemLayouts[t] = n ? L(this._itemLayouts[t] || {}, e) : e;
      }),
      (p.prototype.clearItemLayouts = function () {
        this._itemLayouts.length = 0;
      }),
      (p.prototype.setItemGraphicEl = function (t, e) {
        var n,
          i,
          r,
          o,
          a = this.hostModel && this.hostModel.seriesIndex;
        (n = a),
          (i = this.dataType),
          (r = t),
          (a = e) &&
            (((o = D(a)).dataIndex = r),
            (o.dataType = i),
            (o.seriesIndex = n),
            "group" === a.type) &&
            a.traverse(function (t) {
              t = D(t);
              (t.seriesIndex = n), (t.dataIndex = r), (t.dataType = i);
            }),
          (this._graphicEls[t] = e);
      }),
      (p.prototype.getItemGraphicEl = function (t) {
        return this._graphicEls[t];
      }),
      (p.prototype.eachItemGraphicEl = function (n, i) {
        E(this._graphicEls, function (t, e) {
          t && n && n.call(i, t, e);
        });
      }),
      (p.prototype.cloneShallow = function (t) {
        return (
          (t =
            t ||
            new p(
              this._schema || pv(this.dimensions, this._getDimInfo, this),
              this.hostModel
            )),
          lv(t, this),
          (t._store = this._store),
          t
        );
      }),
      (p.prototype.wrapMethod = function (t, e) {
        var n = this[t];
        S(n) &&
          ((this.__wrappedMethods = this.__wrappedMethods || []),
          this.__wrappedMethods.push(t),
          (this[t] = function () {
            var t = n.apply(this, arguments);
            return e.apply(this, [t].concat(St(arguments)));
          }));
      }),
      (p.internalField =
        ((rv = function (a) {
          var s = a._invertedIndicesMap;
          E(s, function (t, e) {
            var n = a._dimInfos[e],
              i = n.ordinalMeta,
              r = a._store;
            if (i) {
              t = s[e] = new dv(i.categories.length);
              for (var o = 0; o < t.length; o++) t[o] = -1;
              for (o = 0; o < r.count(); o++) t[r.get(n.storeDimIndex, o)] = o;
            }
          });
        }),
        (av = function (t, e, n) {
          return Mo(t._getCategory(e, n), null);
        }),
        (ov = function (t, e) {
          var n = t._idList[e];
          return (n =
            null ==
            (n = null == n && null != t._idDimIdx ? av(t, t._idDimIdx, e) : n)
              ? "e\0\0" + e
              : n);
        }),
        (sv = function (t) {
          return (t = V(t) ? t : null != t ? [t] : []);
        }),
        (uv = function (t) {
          var e = new p(
            t._schema || pv(t.dimensions, t._getDimInfo, t),
            t.hostModel
          );
          return lv(e, t), e;
        }),
        (lv = function (e, n) {
          E(fv.concat(n.__wrappedMethods || []), function (t) {
            n.hasOwnProperty(t) && (e[t] = n[t]);
          }),
            (e.__wrappedMethods = n.__wrappedMethods),
            E(gv, function (t) {
              e[t] = y(n[t]);
            }),
            (e._calculationInfo = L({}, n._calculationInfo));
        }),
        void (hv = function (t, e) {
          var n = t._nameList,
            i = t._idList,
            r = t._nameDimIdx,
            o = t._idDimIdx,
            a = n[e],
            s = i[e];
          null == a && null != r && (n[e] = a = av(t, r, e)),
            null == s && null != o && (i[e] = s = av(t, o, e)),
            null == s &&
              null != a &&
              ((s = a),
              1 < (r = (n = t._nameRepeatCount)[a] = (n[a] || 0) + 1) &&
                (s += "__ec__" + r),
              (i[e] = s));
        }))),
      p);
  function p(t, e) {
    (this.type = "list"),
      (this._dimOmitted = !1),
      (this._nameList = []),
      (this._idList = []),
      (this._visual = {}),
      (this._layout = {}),
      (this._itemVisuals = []),
      (this._itemLayouts = []),
      (this._graphicEls = []),
      (this._approximateExtent = {}),
      (this._calculationInfo = {}),
      (this.hasItemOption = !1),
      (this.TRANSFERABLE_METHODS = [
        "cloneShallow",
        "downSample",
        "lttbDownSample",
        "map",
      ]),
      (this.CHANGABLE_METHODS = ["filterSelf", "selectRange"]);
    var n = !(this.DOWNSAMPLE_METHODS = ["downSample", "lttbDownSample"]);
    ev(t)
      ? ((r = t.dimensions),
        (this._dimOmitted = t.isDimensionOmitted()),
        (this._schema = t))
      : ((n = !0), (r = t));
    for (
      var i, r = r || ["x", "y"], o = {}, a = [], s = {}, l = !1, u = {}, h = 0;
      h < r.length;
      h++
    ) {
      var c = r[h],
        c = H(c) ? new K0({ name: c }) : c instanceof K0 ? c : new K0(c),
        p = c.name,
        d =
          ((c.type = c.type || "float"),
          c.coordDim || ((c.coordDim = p), (c.coordDimIndex = 0)),
          (c.otherDims = c.otherDims || {}));
      a.push(p),
        null != u[p] && (l = !0),
        (o[p] = c).createInvertedIndices && (s[p] = []),
        0 === d.itemName && (this._nameDimIdx = h),
        0 === d.itemId && (this._idDimIdx = h),
        n && (c.storeDimIndex = h);
    }
    (this.dimensions = a),
      (this._dimInfos = o),
      this._initGetDimensionInfo(l),
      (this.hostModel = e),
      (this._invertedIndicesMap = s),
      this._dimOmitted &&
        ((i = this._dimIdxToName = N()),
        E(a, function (t) {
          i.set(o[t].storeDimIndex, t);
        }));
  }
  function mv(t, e) {
    Kd(t) || (t = Qd(t));
    for (
      var n,
        i,
        r = (e = e || {}).coordDimensions || [],
        o = e.dimensionsDefine || t.dimensionsDefine || [],
        a = N(),
        s = [],
        l =
          ((u = t),
          (n = r),
          (p = e.dimensionsCount),
          (i = Math.max(
            u.dimensionsDetectedCount || 1,
            n.length,
            o.length,
            p || 0
          )),
          E(n, function (t) {
            O(t) && (t = t.dimsDef) && (i = Math.max(i, t.length));
          }),
          i),
        u = e.canOmitUnusedDimensions && 30 < l,
        h = o === t.dimensionsDefine,
        c = h ? iv(t) : nv(o),
        p = e.encodeDefine,
        d = N((p = !p && e.encodeDefaulter ? e.encodeDefaulter(t, l) : p)),
        f = new rg(l),
        g = 0;
      g < f.length;
      g++
    )
      f[g] = -1;
    function y(t) {
      var e,
        n,
        i,
        r = f[t];
      return r < 0
        ? ((e = O((e = o[t])) ? e : { name: e }),
          (n = new K0()),
          null != (i = e.name) &&
            null != c.get(i) &&
            (n.name = n.displayName = i),
          null != e.type && (n.type = e.type),
          null != e.displayName && (n.displayName = e.displayName),
          (f[t] = s.length),
          (n.storeDimIndex = t),
          s.push(n),
          n)
        : s[r];
    }
    if (!u) for (g = 0; g < l; g++) y(g);
    d.each(function (t, n) {
      var i,
        t = mo(t).slice();
      1 === t.length && !H(t[0]) && t[0] < 0
        ? d.set(n, !1)
        : ((i = d.set(n, [])),
          E(t, function (t, e) {
            t = H(t) ? c.get(t) : t;
            null != t && t < l && v(y((i[e] = t)), n, e);
          }));
    });
    var m = 0;
    function v(t, e, n) {
      null != Up.get(e)
        ? (t.otherDims[e] = n)
        : ((t.coordDim = e), (t.coordDimIndex = n), a.set(e, !0));
    }
    E(r, function (t) {
      H(t)
        ? ((o = t), (r = {}))
        : ((o = (r = t).name),
          (t = r.ordinalMeta),
          (r.ordinalMeta = null),
          ((r = L({}, r)).ordinalMeta = t),
          (n = r.dimsDef),
          (i = r.otherDims),
          (r.name =
            r.coordDim =
            r.coordDimIndex =
            r.dimsDef =
            r.otherDims =
              null));
      var n,
        i,
        r,
        o,
        e = d.get(o);
      if (!1 !== e) {
        if (!(e = mo(e)).length)
          for (var a = 0; a < ((n && n.length) || 1); a++) {
            for (; m < l && null != y(m).coordDim; ) m++;
            m < l && e.push(m++);
          }
        E(e, function (t, e) {
          t = y(t);
          h && null != r.type && (t.type = r.type),
            v(B(t, r), o, e),
            null == t.name &&
              n &&
              (O((e = n[e])) || (e = { name: e }),
              (t.name = t.displayName = e.name),
              (t.defaultTooltip = e.defaultTooltip)),
            i && B(t.otherDims, i);
        });
      }
    });
    var _ = e.generateCoord,
      x = null != (w = e.generateCoordCount),
      w = _ ? w || 1 : 0,
      b = _ || "value";
    function S(t) {
      null == t.name && (t.name = t.coordDim);
    }
    if (u)
      E(s, function (t) {
        S(t);
      }),
        s.sort(function (t, e) {
          return t.storeDimIndex - e.storeDimIndex;
        });
    else
      for (var M = 0; M < l; M++) {
        var T = y(M);
        null == T.coordDim &&
          ((T.coordDim = (function (t, e, n) {
            if (n || e.hasKey(t)) {
              for (var i = 0; e.hasKey(t + i); ) i++;
              t += i;
            }
            return e.set(t, !0), t;
          })(b, a, x)),
          (T.coordDimIndex = 0),
          (!_ || w <= 0) && (T.isExtraCoord = !0),
          w--),
          S(T),
          null != T.type ||
            (rd(t, M) !== Jp.Must &&
              (!T.isExtraCoord ||
                (null == T.otherDims.itemName &&
                  null == T.otherDims.seriesName))) ||
            (T.type = "ordinal");
      }
    for (var C = s, I = N(), D = 0; D < C.length; D++) {
      var k = C[D],
        A = k.name,
        P = I.get(A) || 0;
      0 < P && (k.name = A + (P - 1)), P++, I.set(A, P);
    }
    return new J0({
      source: t,
      dimensions: s,
      fullDimensionCount: l,
      dimensionOmitted: u,
    });
  }
  function vv(t) {
    (this.coordSysDims = []),
      (this.axisMap = N()),
      (this.categoryAxisMap = N()),
      (this.coordSysName = t);
  }
  var _v = {
    cartesian2d: function (t, e, n, i) {
      var r = t.getReferringComponents("xAxis", Oo).models[0],
        t = t.getReferringComponents("yAxis", Oo).models[0];
      (e.coordSysDims = ["x", "y"]),
        n.set("x", r),
        n.set("y", t),
        xv(r) && (i.set("x", r), (e.firstCategoryDimIndex = 0)),
        xv(t) &&
          (i.set("y", t), null == e.firstCategoryDimIndex) &&
          (e.firstCategoryDimIndex = 1);
    },
    singleAxis: function (t, e, n, i) {
      t = t.getReferringComponents("singleAxis", Oo).models[0];
      (e.coordSysDims = ["single"]),
        n.set("single", t),
        xv(t) && (i.set("single", t), (e.firstCategoryDimIndex = 0));
    },
    polar: function (t, e, n, i) {
      var t = t.getReferringComponents("polar", Oo).models[0],
        r = t.findAxisModel("radiusAxis"),
        t = t.findAxisModel("angleAxis");
      (e.coordSysDims = ["radius", "angle"]),
        n.set("radius", r),
        n.set("angle", t),
        xv(r) && (i.set("radius", r), (e.firstCategoryDimIndex = 0)),
        xv(t) &&
          (i.set("angle", t), null == e.firstCategoryDimIndex) &&
          (e.firstCategoryDimIndex = 1);
    },
    geo: function (t, e, n, i) {
      e.coordSysDims = ["lng", "lat"];
    },
    parallel: function (t, i, r, o) {
      var a = t.ecModel,
        t = a.getComponent("parallel", t.get("parallelIndex")),
        s = (i.coordSysDims = t.dimensions.slice());
      E(t.parallelAxisIndex, function (t, e) {
        var t = a.getComponent("parallelAxis", t),
          n = s[e];
        r.set(n, t),
          xv(t) &&
            (o.set(n, t), null == i.firstCategoryDimIndex) &&
            (i.firstCategoryDimIndex = e);
      });
    },
  };
  function xv(t) {
    return "category" === t.get("type");
  }
  function wv(t, e, n) {
    var i,
      r,
      o,
      a = (n = n || {}).byIndex,
      s = n.stackedCoordDimension;
    ev(e.schema)
      ? ((r = e.schema), (i = r.dimensions), (o = e.store))
      : (i = e);
    var l,
      u,
      h,
      c,
      p,
      d,
      f = !(!t || !t.get("stack"));
    return (
      E(i, function (t, e) {
        H(t) && (i[e] = t = { name: t }),
          f &&
            !t.isExtraCoord &&
            (a || l || !t.ordinalMeta || (l = t),
            u ||
              "ordinal" === t.type ||
              "time" === t.type ||
              (s && s !== t.coordDim) ||
              (u = t));
      }),
      !u || a || l || (a = !0),
      u &&
        ((h = "__\0ecstackresult_" + t.id),
        (c = "__\0ecstackedover_" + t.id),
        l && (l.createInvertedIndices = !0),
        (p = u.coordDim),
        (n = u.type),
        (d = 0),
        E(i, function (t) {
          t.coordDim === p && d++;
        }),
        (e = {
          name: h,
          coordDim: p,
          coordDimIndex: d,
          type: n,
          isExtraCoord: !0,
          isCalculationCoord: !0,
          storeDimIndex: i.length,
        }),
        (t = {
          name: c,
          coordDim: c,
          coordDimIndex: d + 1,
          type: n,
          isExtraCoord: !0,
          isCalculationCoord: !0,
          storeDimIndex: i.length + 1,
        }),
        r
          ? (o &&
              ((e.storeDimIndex = o.ensureCalculationDimension(c, n)),
              (t.storeDimIndex = o.ensureCalculationDimension(h, n))),
            r.appendCalculationDimension(e),
            r.appendCalculationDimension(t))
          : (i.push(e), i.push(t))),
      {
        stackedDimension: u && u.name,
        stackedByDimension: l && l.name,
        isStackedByIndex: a,
        stackedOverDimension: c,
        stackResultDimension: h,
      }
    );
  }
  function bv(t, e) {
    return !!e && e === t.getCalculationInfo("stackedDimension");
  }
  function Sv(t, e) {
    return bv(t, e) ? t.getCalculationInfo("stackResultDimension") : e;
  }
  function Mv(t, e, n) {
    n = n || {};
    var i,
      r,
      o,
      a,
      s,
      l,
      u = e.getSourceManager(),
      h = !1,
      t =
        (t
          ? ((h = !0), (i = Qd(t)))
          : (h = (i = u.getSource()).sourceFormat === Xp),
        (function (t) {
          var e = t.get("coordinateSystem"),
            n = new vv(e);
          if ((e = _v[e])) return e(t, n, n.axisMap, n.categoryAxisMap), n;
        })(e)),
      c =
        ((l = t),
        (c = (c = e).get("coordinateSystem")),
        (c = bd.get(c)),
        (p = (p =
          l && l.coordSysDims
            ? F(l.coordSysDims, function (t) {
                var e = { name: t },
                  t = l.axisMap.get(t);
                return (
                  t &&
                    ((t = t.get("type")),
                    (e.type =
                      "category" === (t = t)
                        ? "ordinal"
                        : "time" === t
                        ? "time"
                        : "float")),
                  e
                );
              })
            : p) ||
          (c &&
            (c.getDimensionsInfo
              ? c.getDimensionsInfo()
              : c.dimensions.slice())) || ["x", "y"])),
      p = n.useEncodeDefaulter,
      p = S(p) ? p : p ? pt(ed, c, e) : null,
      c = {
        coordDimensions: c,
        generateCoord: n.generateCoord,
        encodeDefine: e.getEncode(),
        encodeDefaulter: p,
        canOmitUnusedDimensions: !h,
      },
      p = mv(i, c),
      d =
        ((c = p.dimensions),
        (r = n.createInvertedIndices),
        (o = t) &&
          E(c, function (t, e) {
            var n = t.coordDim,
              n = o.categoryAxisMap.get(n);
            n &&
              (null == a && (a = e), (t.ordinalMeta = n.getOrdinalMeta()), r) &&
              (t.createInvertedIndices = !0),
              null != t.otherDims.itemName && (s = !0);
          }),
        s || null == a || (c[a].otherDims.itemName = 0),
        a),
      n = h ? null : u.getSharedDataStore(p),
      t = wv(e, { schema: p, store: n }),
      c = new yv(p, e),
      p =
        (c.setCalculationInfo(t),
        null == d ||
        (u = i).sourceFormat !== Xp ||
        V(
          xo(
            (function (t) {
              for (var e = 0; e < t.length && null == t[e]; ) e++;
              return t[e];
            })(u.data || [])
          )
        )
          ? null
          : function (t, e, n, i) {
              return i === d ? n : this.defaultDimValueGetter(t, e, n, i);
            });
    return (c.hasItemOption = !1), c.initData(h ? i : n, null, p), c;
  }
  (Cv.prototype.getSetting = function (t) {
    return this._setting[t];
  }),
    (Cv.prototype.unionExtent = function (t) {
      var e = this._extent;
      t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]);
    }),
    (Cv.prototype.unionExtentFromData = function (t, e) {
      this.unionExtent(t.getApproximateExtent(e));
    }),
    (Cv.prototype.getExtent = function () {
      return this._extent.slice();
    }),
    (Cv.prototype.setExtent = function (t, e) {
      var n = this._extent;
      isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e);
    }),
    (Cv.prototype.isInExtentRange = function (t) {
      return this._extent[0] <= t && this._extent[1] >= t;
    }),
    (Cv.prototype.isBlank = function () {
      return this._isBlank;
    }),
    (Cv.prototype.setBlank = function (t) {
      this._isBlank = t;
    });
  var Tv = Cv;
  function Cv(t) {
    (this._setting = t || {}), (this._extent = [1 / 0, -1 / 0]);
  }
  Yo(Tv);
  var Iv = 0,
    Dv =
      ((kv.createByAxisModel = function (t) {
        var t = t.option,
          e = t.data,
          e = e && F(e, Av);
        return new kv({
          categories: e,
          needCollect: !e,
          deduplication: !1 !== t.dedplication,
        });
      }),
      (kv.prototype.getOrdinal = function (t) {
        return this._getOrCreateMap().get(t);
      }),
      (kv.prototype.parseAndCollect = function (t) {
        var e,
          n,
          i = this._needCollect;
        return H(t) || i
          ? (i && !this._deduplication
              ? ((e = this.categories.length), (this.categories[e] = t))
              : null == (e = (n = this._getOrCreateMap()).get(t)) &&
                (i
                  ? ((e = this.categories.length),
                    (this.categories[e] = t),
                    n.set(t, e))
                  : (e = NaN)),
            e)
          : t;
      }),
      (kv.prototype._getOrCreateMap = function () {
        return this._map || (this._map = N(this.categories));
      }),
      kv);
  function kv(t) {
    (this.categories = t.categories || []),
      (this._needCollect = t.needCollect),
      (this._deduplication = t.deduplication),
      (this.uid = ++Iv);
  }
  function Av(t) {
    return O(t) && null != t.value ? t.value : t + "";
  }
  function Pv(t) {
    return "interval" === t.type || "log" === t.type;
  }
  function Lv(t, e, n, i) {
    var r = {},
      o = t[1] - t[0],
      o = (r.interval = lo(o / e, !0)),
      e =
        (null != n && o < n && (o = r.interval = n),
        null != i && i < o && (o = r.interval = i),
        (r.intervalPrecision = Rv(o)));
    return (
      (n = r.niceTickExtent =
        [$r(Math.ceil(t[0] / o) * o, e), $r(Math.floor(t[1] / o) * o, e)]),
      (i = t),
      isFinite(n[0]) || (n[0] = i[0]),
      isFinite(n[1]) || (n[1] = i[1]),
      Nv(n, 0, i),
      Nv(n, 1, i),
      n[0] > n[1] && (n[0] = n[1]),
      r
    );
  }
  function Ov(t) {
    var e = Math.pow(10, so(t)),
      t = t / e;
    return (
      t ? (2 === t ? (t = 3) : 3 === t ? (t = 5) : (t *= 2)) : (t = 1),
      $r(t * e)
    );
  }
  function Rv(t) {
    return Qr(t) + 2;
  }
  function Nv(t, e, n) {
    t[e] = Math.max(Math.min(t[e], n[1]), n[0]);
  }
  function Ev(t, e) {
    return t >= e[0] && t <= e[1];
  }
  function zv(t, e) {
    return e[1] === e[0] ? 0.5 : (t - e[0]) / (e[1] - e[0]);
  }
  function Bv(t, e) {
    return t * (e[1] - e[0]) + e[0];
  }
  u(Hv, (Fv = Tv)),
    (Hv.prototype.parse = function (t) {
      return null == t
        ? NaN
        : H(t)
        ? this._ordinalMeta.getOrdinal(t)
        : Math.round(t);
    }),
    (Hv.prototype.contain = function (t) {
      return (
        Ev((t = this.parse(t)), this._extent) &&
        null != this._ordinalMeta.categories[t]
      );
    }),
    (Hv.prototype.normalize = function (t) {
      return zv((t = this._getTickNumber(this.parse(t))), this._extent);
    }),
    (Hv.prototype.scale = function (t) {
      return (t = Math.round(Bv(t, this._extent))), this.getRawOrdinalNumber(t);
    }),
    (Hv.prototype.getTicks = function () {
      for (var t = [], e = this._extent, n = e[0]; n <= e[1]; )
        t.push({ value: n }), n++;
      return t;
    }),
    (Hv.prototype.getMinorTicks = function (t) {}),
    (Hv.prototype.setSortInfo = function (t) {
      if (null != t) {
        for (
          var e = t.ordinalNumbers,
            n = (this._ordinalNumbersByTick = []),
            i = (this._ticksByOrdinalNumber = []),
            r = 0,
            o = this._ordinalMeta.categories.length,
            a = Math.min(o, e.length);
          r < a;
          ++r
        ) {
          var s = e[r];
          i[(n[r] = s)] = r;
        }
        for (var l = 0; r < o; ++r) {
          for (; null != i[l]; ) l++;
          n.push(l), (i[l] = r);
        }
      } else this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null;
    }),
    (Hv.prototype._getTickNumber = function (t) {
      var e = this._ticksByOrdinalNumber;
      return e && 0 <= t && t < e.length ? e[t] : t;
    }),
    (Hv.prototype.getRawOrdinalNumber = function (t) {
      var e = this._ordinalNumbersByTick;
      return e && 0 <= t && t < e.length ? e[t] : t;
    }),
    (Hv.prototype.getLabel = function (t) {
      if (!this.isBlank())
        return (
          (t = this.getRawOrdinalNumber(t.value)),
          null == (t = this._ordinalMeta.categories[t]) ? "" : t + ""
        );
    }),
    (Hv.prototype.count = function () {
      return this._extent[1] - this._extent[0] + 1;
    }),
    (Hv.prototype.unionExtentFromData = function (t, e) {
      this.unionExtent(t.getApproximateExtent(e));
    }),
    (Hv.prototype.isInExtentRange = function (t) {
      return (
        (t = this._getTickNumber(t)),
        this._extent[0] <= t && this._extent[1] >= t
      );
    }),
    (Hv.prototype.getOrdinalMeta = function () {
      return this._ordinalMeta;
    }),
    (Hv.prototype.calcNiceTicks = function () {}),
    (Hv.prototype.calcNiceExtent = function () {}),
    (Hv.type = "ordinal");
  var Fv,
    Vv = Hv;
  function Hv(t) {
    var t = Fv.call(this, t) || this,
      e = ((t.type = "ordinal"), t.getSetting("ordinalMeta"));
    return (
      V((e = e || new Dv({}))) &&
        (e = new Dv({
          categories: F(e, function (t) {
            return O(t) ? t.value : t;
          }),
        })),
      (t._ordinalMeta = e),
      (t._extent = t.getSetting("extent") || [0, e.categories.length - 1]),
      t
    );
  }
  Tv.registerClass(Vv);
  var Gv,
    Wv = $r,
    Uv =
      (u(Xv, (Gv = Tv)),
      (Xv.prototype.parse = function (t) {
        return t;
      }),
      (Xv.prototype.contain = function (t) {
        return Ev(t, this._extent);
      }),
      (Xv.prototype.normalize = function (t) {
        return zv(t, this._extent);
      }),
      (Xv.prototype.scale = function (t) {
        return Bv(t, this._extent);
      }),
      (Xv.prototype.setExtent = function (t, e) {
        var n = this._extent;
        isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e));
      }),
      (Xv.prototype.unionExtent = function (t) {
        var e = this._extent;
        t[0] < e[0] && (e[0] = t[0]),
          t[1] > e[1] && (e[1] = t[1]),
          this.setExtent(e[0], e[1]);
      }),
      (Xv.prototype.getInterval = function () {
        return this._interval;
      }),
      (Xv.prototype.setInterval = function (t) {
        (this._interval = t),
          (this._niceExtent = this._extent.slice()),
          (this._intervalPrecision = Rv(t));
      }),
      (Xv.prototype.getTicks = function (t) {
        var e = this._interval,
          n = this._extent,
          i = this._niceExtent,
          r = this._intervalPrecision,
          o = [];
        if (e) {
          n[0] < i[0] &&
            o.push(t ? { value: Wv(i[0] - e, r) } : { value: n[0] });
          for (
            var a = i[0];
            a <= i[1] &&
            (o.push({ value: a }),
            (a = Wv(a + e, r)) !== o[o.length - 1].value);

          )
            if (1e4 < o.length) return [];
          var s = o.length ? o[o.length - 1].value : i[1];
          n[1] > s && o.push(t ? { value: Wv(s + e, r) } : { value: n[1] });
        }
        return o;
      }),
      (Xv.prototype.getMinorTicks = function (t) {
        for (
          var e = this.getTicks(!0), n = [], i = this.getExtent(), r = 1;
          r < e.length;
          r++
        ) {
          for (
            var o = e[r],
              a = e[r - 1],
              s = 0,
              l = [],
              u = (o.value - a.value) / t;
            s < t - 1;

          ) {
            var h = Wv(a.value + (s + 1) * u);
            h > i[0] && h < i[1] && l.push(h), s++;
          }
          n.push(l);
        }
        return n;
      }),
      (Xv.prototype.getLabel = function (t, e) {
        return null == t
          ? ""
          : (null == (e = e && e.precision)
              ? (e = Qr(t.value) || 0)
              : "auto" === e && (e = this._intervalPrecision),
            mp(Wv(t.value, e, !0)));
      }),
      (Xv.prototype.calcNiceTicks = function (t, e, n) {
        t = t || 5;
        var i = this._extent,
          r = i[1] - i[0];
        isFinite(r) &&
          (r < 0 && i.reverse(),
          (r = Lv(i, t, e, n)),
          (this._intervalPrecision = r.intervalPrecision),
          (this._interval = r.interval),
          (this._niceExtent = r.niceTickExtent));
      }),
      (Xv.prototype.calcNiceExtent = function (t) {
        var e = this._extent,
          n =
            (e[0] === e[1] &&
              (0 !== e[0]
                ? ((n = Math.abs(e[0])),
                  t.fixMax || (e[1] += n / 2),
                  (e[0] -= n / 2))
                : (e[1] = 1)),
            e[1] - e[0]),
          n =
            (isFinite(n) || ((e[0] = 0), (e[1] = 1)),
            this.calcNiceTicks(t.splitNumber, t.minInterval, t.maxInterval),
            this._interval);
        t.fixMin || (e[0] = Wv(Math.floor(e[0] / n) * n)),
          t.fixMax || (e[1] = Wv(Math.ceil(e[1] / n) * n));
      }),
      (Xv.prototype.setNiceExtent = function (t, e) {
        this._niceExtent = [t, e];
      }),
      (Xv.type = "interval"),
      Xv);
  function Xv() {
    var t = (null !== Gv && Gv.apply(this, arguments)) || this;
    return (
      (t.type = "interval"), (t._interval = 0), (t._intervalPrecision = 2), t
    );
  }
  Tv.registerClass(Uv);
  var Yv = "undefined" != typeof Float32Array,
    qv = Yv ? Float32Array : Array;
  function Zv(t) {
    return V(t) ? (Yv ? new Float32Array(t) : t) : new qv(t);
  }
  var jv = "__ec_stack_";
  function Kv(t) {
    return t.get("stack") || jv + t.seriesIndex;
  }
  function $v(t) {
    return t.dim + t.index;
  }
  function Qv(t, e) {
    var n = [];
    return (
      e.eachSeriesByType(t, function (t) {
        e_(t) && n.push(t);
      }),
      n
    );
  }
  function Jv(t) {
    var a,
      d,
      l = (function (t) {
        var e,
          l = {},
          n =
            (E(t, function (t) {
              var e = t.coordinateSystem.getBaseAxis();
              if ("time" === e.type || "value" === e.type)
                for (
                  var t = t.getData(),
                    n = e.dim + "_" + e.index,
                    i = t.getDimensionIndex(t.mapDimension(e.dim)),
                    r = t.getStore(),
                    o = 0,
                    a = r.count();
                  o < a;
                  ++o
                ) {
                  var s = r.get(i, o);
                  l[n] ? l[n].push(s) : (l[n] = [s]);
                }
            }),
            {});
        for (e in l)
          if (l.hasOwnProperty(e)) {
            var i = l[e];
            if (i) {
              i.sort(function (t, e) {
                return t - e;
              });
              for (var r = null, o = 1; o < i.length; ++o) {
                var a = i[o] - i[o - 1];
                0 < a && (r = null === r ? a : Math.min(r, a));
              }
              n[e] = r;
            }
          }
        return n;
      })(t),
      u = [];
    return (
      E(t, function (t) {
        var e,
          n = t.coordinateSystem.getBaseAxis(),
          i = n.getExtent(),
          r =
            ((e =
              "category" === n.type
                ? n.getBandWidth()
                : "value" === n.type || "time" === n.type
                ? ((e = n.dim + "_" + n.index),
                  (e = l[e]),
                  (r = Math.abs(i[1] - i[0])),
                  (o = n.scale.getExtent()),
                  (o = Math.abs(o[1] - o[0])),
                  e ? (r / o) * e : r)
                : ((o = t.getData()), Math.abs(i[1] - i[0]) / o.count())),
            Kr(t.get("barWidth"), e)),
          i = Kr(t.get("barMaxWidth"), e),
          o = Kr(t.get("barMinWidth") || (n_(t) ? 0.5 : 1), e),
          a = t.get("barGap"),
          s = t.get("barCategoryGap");
        u.push({
          bandWidth: e,
          barWidth: r,
          barMaxWidth: i,
          barMinWidth: o,
          barGap: a,
          barCategoryGap: s,
          axisKey: $v(n),
          stackId: Kv(t),
        });
      }),
      (a = {}),
      E(u, function (t, e) {
        var n = t.axisKey,
          i = t.bandWidth,
          i = a[n] || {
            bandWidth: i,
            remainedWidth: i,
            autoWidthCount: 0,
            categoryGap: null,
            gap: "20%",
            stacks: {},
          },
          r = i.stacks,
          n = ((a[n] = i), t.stackId),
          o =
            (r[n] || i.autoWidthCount++,
            (r[n] = r[n] || { width: 0, maxWidth: 0 }),
            t.barWidth),
          o =
            (o &&
              !r[n].width &&
              ((r[n].width = o),
              (o = Math.min(i.remainedWidth, o)),
              (i.remainedWidth -= o)),
            t.barMaxWidth),
          o = (o && (r[n].maxWidth = o), t.barMinWidth),
          r = (o && (r[n].minWidth = o), t.barGap),
          n = (null != r && (i.gap = r), t.barCategoryGap);
        null != n && (i.categoryGap = n);
      }),
      (d = {}),
      E(a, function (t, n) {
        d[n] = {};
        var e = t.stacks,
          i = t.bandWidth,
          r = t.categoryGap,
          o =
            (null == r &&
              ((o = ht(e).length), (r = Math.max(35 - 4 * o, 15) + "%")),
            Kr(r, i)),
          a = Kr(t.gap, 1),
          s = t.remainedWidth,
          l = t.autoWidthCount,
          u = (s - o) / (l + (l - 1) * a),
          u = Math.max(u, 0);
        E(e, function (t) {
          var e,
            n = t.maxWidth,
            i = t.minWidth;
          t.width
            ? ((e = t.width),
              n && (e = Math.min(e, n)),
              i && (e = Math.max(e, i)),
              (t.width = e),
              (s -= e + a * e),
              l--)
            : ((e = u),
              n && n < e && (e = Math.min(n, s)),
              (e = i && e < i ? i : e) !== u &&
                ((t.width = e), (s -= e + a * e), l--));
        }),
          (u = (s - o) / (l + (l - 1) * a)),
          (u = Math.max(u, 0));
        var h,
          c = 0,
          p =
            (E(e, function (t, e) {
              t.width || (t.width = u), (c += (h = t).width * (1 + a));
            }),
            h && (c -= h.width * a),
            -c / 2);
        E(e, function (t, e) {
          (d[n][e] = d[n][e] || { bandWidth: i, offset: p, width: t.width }),
            (p += t.width * (1 + a));
        });
      }),
      d
    );
  }
  function t_(t, e) {
    var t = Qv(t, e),
      r = Jv(t);
    E(t, function (t) {
      var e = t.getData(),
        n = t.coordinateSystem.getBaseAxis(),
        t = Kv(t),
        n = r[$v(n)][t],
        t = n.offset,
        i = n.width;
      e.setLayout({ bandWidth: n.bandWidth, offset: t, size: i });
    });
  }
  function e_(t) {
    return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type;
  }
  function n_(t) {
    return t.pipelineContext && t.pipelineContext.large;
  }
  u(a_, (i_ = Uv)),
    (a_.prototype.getLabel = function (t) {
      var e = this.getSetting("useUTC");
      return ep(
        t.value,
        Kc[
          (function (t) {
            switch (t) {
              case "year":
              case "month":
                return "day";
              case "millisecond":
                return "millisecond";
              default:
                return "second";
            }
          })(tp(this._minLevelUnit))
        ] || Kc.second,
        e,
        this.getSetting("locale")
      );
    }),
    (a_.prototype.getFormattedLabel = function (t, e, n) {
      var i = this.getSetting("useUTC"),
        r = this.getSetting("locale"),
        o = null;
      if (H(n)) o = n;
      else if (S(n)) o = n(t.value, e, { level: t.level });
      else {
        var a = L({}, Zc);
        if (0 < t.level)
          for (var s = 0; s < $c.length; ++s)
            a[$c[s]] = "{primary|" + a[$c[s]] + "}";
        var l = n ? (!1 === n.inherit ? n : B(n, a)) : a,
          u = np(t.value, i);
        if (l[u]) o = l[u];
        else if (l.inherit) {
          for (s = Qc.indexOf(u) - 1; 0 <= s; --s)
            if (l[u]) {
              o = l[u];
              break;
            }
          o = o || a.none;
        }
        V(o) &&
          ((e =
            null == t.level ? 0 : 0 <= t.level ? t.level : o.length + t.level),
          (o = o[(e = Math.min(e, o.length - 1))]));
      }
      return ep(new Date(t.value), o, i, r);
    }),
    (a_.prototype.getTicks = function () {
      var t = this._interval,
        e = this._extent,
        n = [];
      return (
        t &&
          (n.push({ value: e[0], level: 0 }),
          (t = this.getSetting("useUTC")),
          (t = (function (t, b, S, M) {
            var e = Qc,
              n = 0;
            function i(t, e, n) {
              var i,
                r,
                o = [],
                a = !e.length;
              if (
                !(function (t, e, n, i) {
                  function r(t) {
                    return ip(c, t, i) === ip(p, t, i);
                  }
                  function o() {
                    return r("year");
                  }
                  function a() {
                    return o() && r("month");
                  }
                  function s() {
                    return a() && r("day");
                  }
                  function l() {
                    return s() && r("hour");
                  }
                  function u() {
                    return l() && r("minute");
                  }
                  function h() {
                    return u() && r("second");
                  }
                  var c = oo(e),
                    p = oo(n);
                  switch (t) {
                    case "year":
                      return o();
                    case "month":
                      return a();
                    case "day":
                      return s();
                    case "hour":
                      return l();
                    case "minute":
                      return u();
                    case "second":
                      return h();
                    case "millisecond":
                      return h() && r("millisecond");
                  }
                })(tp(t), M[0], M[1], S)
              ) {
                a &&
                  (e = [
                    {
                      value: (function (t, e, n) {
                        var i = new Date(t);
                        switch (tp(e)) {
                          case "year":
                          case "month":
                            i[cp(n)](0);
                          case "day":
                            i[pp(n)](1);
                          case "hour":
                            i[dp(n)](0);
                          case "minute":
                            i[fp(n)](0);
                          case "second":
                            i[gp(n)](0), i[yp(n)](0);
                        }
                        return i.getTime();
                      })(new Date(M[0]), t, S),
                    },
                    { value: M[1] },
                  ]);
                for (var s = 0; s < e.length - 1; s++) {
                  var l = e[s].value,
                    u = e[s + 1].value;
                  if (l !== u) {
                    var h = void 0,
                      c = void 0,
                      p = void 0;
                    switch (t) {
                      case "year":
                        (h = Math.max(1, Math.round(b / qc / 365))),
                          (c = rp(S)),
                          (p = S ? "setUTCFullYear" : "setFullYear");
                        break;
                      case "half-year":
                      case "quarter":
                      case "month":
                        (r = b),
                          (h =
                            6 < (r /= 30 * qc) ? 6 : 3 < r ? 3 : 2 < r ? 2 : 1),
                          (c = op(S)),
                          (p = cp(S));
                        break;
                      case "week":
                      case "half-week":
                      case "day":
                        (r = b),
                          (h =
                            16 < (r /= qc)
                              ? 16
                              : 7.5 < r
                              ? 7
                              : 3.5 < r
                              ? 4
                              : 1.5 < r
                              ? 2
                              : 1),
                          (c = ap(S)),
                          (p = pp(S));
                        break;
                      case "half-day":
                      case "quarter-day":
                      case "hour":
                        (i = b),
                          (h =
                            12 < (i /= Yc)
                              ? 12
                              : 6 < i
                              ? 6
                              : 3.5 < i
                              ? 4
                              : 2 < i
                              ? 2
                              : 1),
                          (c = sp(S)),
                          (p = dp(S));
                        break;
                      case "minute":
                        (h = s_(b, !0)), (c = lp(S)), (p = fp(S));
                        break;
                      case "second":
                        (h = s_(b, !1)), (c = up(S)), (p = gp(S));
                        break;
                      case "millisecond":
                        (h = lo(b, !0)), (c = hp(S)), (p = yp(S));
                    }
                    w = x = _ = v = m = y = g = f = d = void 0;
                    for (
                      var d = h,
                        f = l,
                        g = u,
                        y = c,
                        m = p,
                        v = o,
                        _ = new Date(f),
                        x = f,
                        w = _[y]();
                      x < g && x <= M[1];

                    )
                      v.push({ value: x }), _[m]((w += d)), (x = _.getTime());
                    v.push({ value: x, notAdd: !0 }),
                      "year" === t &&
                        1 < n.length &&
                        0 === s &&
                        n.unshift({ value: n[0].value - h });
                  }
                }
                for (s = 0; s < o.length; s++) n.push(o[s]);
              }
            }
            for (
              var r = [], o = [], a = 0, s = 0, l = 0;
              l < e.length && n++ < 1e4;
              ++l
            ) {
              var u = tp(e[l]);
              if (
                (function (t) {
                  return t === tp(t);
                })(e[l]) &&
                (i(e[l], r[r.length - 1] || [], o),
                u !== (e[l + 1] ? tp(e[l + 1]) : null))
              ) {
                if (o.length) {
                  (s = a),
                    o.sort(function (t, e) {
                      return t.value - e.value;
                    });
                  for (var h = [], c = 0; c < o.length; ++c) {
                    var p = o[c].value;
                    (0 !== c && o[c - 1].value === p) ||
                      (h.push(o[c]), p >= M[0] && p <= M[1] && a++);
                  }
                  u = (M[1] - M[0]) / b;
                  if (1.5 * u < a && u / 1.5 < s) break;
                  if ((r.push(h), u < a || t === e[l])) break;
                }
                o = [];
              }
            }
            var d = ut(
                F(r, function (t) {
                  return ut(t, function (t) {
                    return t.value >= M[0] && t.value <= M[1] && !t.notAdd;
                  });
                }),
                function (t) {
                  return 0 < t.length;
                }
              ),
              f = [],
              g = d.length - 1;
            for (l = 0; l < d.length; ++l)
              for (var y = d[l], m = 0; m < y.length; ++m)
                f.push({ value: y[m].value, level: g - l });
            f.sort(function (t, e) {
              return t.value - e.value;
            });
            var v = [];
            for (l = 0; l < f.length; ++l)
              (0 !== l && f[l].value === f[l - 1].value) || v.push(f[l]);
            return v;
          })(this._minLevelUnit, this._approxInterval, t, e)),
          (n = n.concat(t)).push({ value: e[1], level: 0 })),
        n
      );
    }),
    (a_.prototype.calcNiceExtent = function (t) {
      var e,
        n = this._extent;
      n[0] === n[1] && ((n[0] -= qc), (n[1] += qc)),
        n[1] === -1 / 0 &&
          n[0] === 1 / 0 &&
          ((e = new Date()),
          (n[1] = +new Date(e.getFullYear(), e.getMonth(), e.getDate())),
          (n[0] = n[1] - qc)),
        this.calcNiceTicks(t.splitNumber, t.minInterval, t.maxInterval);
    }),
    (a_.prototype.calcNiceTicks = function (t, e, n) {
      var i = this._extent,
        i = i[1] - i[0],
        i =
          ((this._approxInterval = i / (t = t || 10)),
          null != e && this._approxInterval < e && (this._approxInterval = e),
          null != n && this._approxInterval > n && (this._approxInterval = n),
          o_.length),
        t = Math.min(
          (function (t, e, n, i) {
            for (; n < i; ) {
              var r = (n + i) >>> 1;
              t[r][1] < e ? (n = 1 + r) : (i = r);
            }
            return n;
          })(o_, this._approxInterval, 0, i),
          i - 1
        );
      (this._interval = o_[t][1]),
        (this._minLevelUnit = o_[Math.max(t - 1, 0)][0]);
    }),
    (a_.prototype.parse = function (t) {
      return G(t) ? t : +oo(t);
    }),
    (a_.prototype.contain = function (t) {
      return Ev(this.parse(t), this._extent);
    }),
    (a_.prototype.normalize = function (t) {
      return zv(this.parse(t), this._extent);
    }),
    (a_.prototype.scale = function (t) {
      return Bv(t, this._extent);
    }),
    (a_.type = "time");
  var i_,
    r_ = a_,
    o_ = [
      ["second", Uc],
      ["minute", Xc],
      ["hour", Yc],
      ["quarter-day", 6 * Yc],
      ["half-day", 12 * Yc],
      ["day", 1.2 * qc],
      ["half-week", 3.5 * qc],
      ["week", 7 * qc],
      ["month", 31 * qc],
      ["quarter", 95 * qc],
      ["half-year", Wo / 2],
      ["year", Wo],
    ];
  function a_(t) {
    t = i_.call(this, t) || this;
    return (t.type = "time"), t;
  }
  function s_(t, e) {
    return 30 < (t /= e ? Xc : Uc)
      ? 30
      : 20 < t
      ? 20
      : 15 < t
      ? 15
      : 10 < t
      ? 10
      : 5 < t
      ? 5
      : 2 < t
      ? 2
      : 1;
  }
  Tv.registerClass(r_);
  var l_,
    u_ = Tv.prototype,
    h_ = Uv.prototype,
    c_ = $r,
    p_ = Math.floor,
    d_ = Math.ceil,
    f_ = Math.pow,
    g_ = Math.log,
    y_ =
      (u(m_, (l_ = Tv)),
      (m_.prototype.getTicks = function (t) {
        var e = this._originalScale,
          n = this._extent,
          i = e.getExtent();
        return F(
          h_.getTicks.call(this, t),
          function (t) {
            var t = t.value,
              e = $r(f_(this.base, t)),
              e = t === n[0] && this._fixMin ? v_(e, i[0]) : e;
            return { value: t === n[1] && this._fixMax ? v_(e, i[1]) : e };
          },
          this
        );
      }),
      (m_.prototype.setExtent = function (t, e) {
        var n = g_(this.base);
        (t = g_(Math.max(0, t)) / n),
          (e = g_(Math.max(0, e)) / n),
          h_.setExtent.call(this, t, e);
      }),
      (m_.prototype.getExtent = function () {
        var t = this.base,
          e = u_.getExtent.call(this),
          t =
            ((e[0] = f_(t, e[0])),
            (e[1] = f_(t, e[1])),
            this._originalScale.getExtent());
        return (
          this._fixMin && (e[0] = v_(e[0], t[0])),
          this._fixMax && (e[1] = v_(e[1], t[1])),
          e
        );
      }),
      (m_.prototype.unionExtent = function (t) {
        this._originalScale.unionExtent(t);
        var e = this.base;
        (t[0] = g_(t[0]) / g_(e)),
          (t[1] = g_(t[1]) / g_(e)),
          u_.unionExtent.call(this, t);
      }),
      (m_.prototype.unionExtentFromData = function (t, e) {
        this.unionExtent(t.getApproximateExtent(e));
      }),
      (m_.prototype.calcNiceTicks = function (t) {
        t = t || 10;
        var e = this._extent,
          n = e[1] - e[0];
        if (!(n == 1 / 0 || n <= 0)) {
          var i = ao(n);
          for (
            (t / n) * i <= 0.5 && (i *= 10);
            !isNaN(i) && Math.abs(i) < 1 && 0 < Math.abs(i);

          )
            i *= 10;
          t = [$r(d_(e[0] / i) * i), $r(p_(e[1] / i) * i)];
          (this._interval = i), (this._niceExtent = t);
        }
      }),
      (m_.prototype.calcNiceExtent = function (t) {
        h_.calcNiceExtent.call(this, t),
          (this._fixMin = t.fixMin),
          (this._fixMax = t.fixMax);
      }),
      (m_.prototype.parse = function (t) {
        return t;
      }),
      (m_.prototype.contain = function (t) {
        return Ev((t = g_(t) / g_(this.base)), this._extent);
      }),
      (m_.prototype.normalize = function (t) {
        return zv((t = g_(t) / g_(this.base)), this._extent);
      }),
      (m_.prototype.scale = function (t) {
        return (t = Bv(t, this._extent)), f_(this.base, t);
      }),
      (m_.type = "log"),
      m_),
    Vy = y_.prototype;
  function m_() {
    var t = (null !== l_ && l_.apply(this, arguments)) || this;
    return (
      (t.type = "log"),
      (t.base = 10),
      (t._originalScale = new Uv()),
      (t._interval = 0),
      t
    );
  }
  function v_(t, e) {
    return c_(t, Qr(e));
  }
  (Vy.getMinorTicks = h_.getMinorTicks),
    (Vy.getLabel = h_.getLabel),
    Tv.registerClass(y_);
  (x_.prototype._prepareParams = function (t, e, n) {
    n[1] < n[0] && (n = [NaN, NaN]),
      (this._dataMin = n[0]),
      (this._dataMax = n[1]);
    var i = (this._isOrdinal = "ordinal" === t.type),
      r =
        ((this._needCrossZero =
          "interval" === t.type && e.getNeedCrossZero && e.getNeedCrossZero()),
        (this._modelMinRaw = e.get("min", !0))),
      r =
        (S(r)
          ? (this._modelMinNum = S_(t, r({ min: n[0], max: n[1] })))
          : "dataMin" !== r && (this._modelMinNum = S_(t, r)),
        (this._modelMaxRaw = e.get("max", !0)));
    S(r)
      ? (this._modelMaxNum = S_(t, r({ min: n[0], max: n[1] })))
      : "dataMax" !== r && (this._modelMaxNum = S_(t, r)),
      i
        ? (this._axisDataLen = e.getCategories().length)
        : "boolean" ==
            typeof (t = V((n = e.get("boundaryGap")))
              ? n
              : [n || 0, n || 0])[0] || "boolean" == typeof t[1]
        ? (this._boundaryGapInner = [0, 0])
        : (this._boundaryGapInner = [Tr(t[0], 1), Tr(t[1], 1)]);
  }),
    (x_.prototype.calculate = function () {
      var t = this._isOrdinal,
        e = this._dataMin,
        n = this._dataMax,
        i = this._axisDataLen,
        r = this._boundaryGapInner,
        o = t ? null : n - e || Math.abs(e),
        a = "dataMin" === this._modelMinRaw ? e : this._modelMinNum,
        s = "dataMax" === this._modelMaxRaw ? n : this._modelMaxNum,
        l = null != a,
        u = null != s,
        e =
          (null == a && (a = t ? (i ? 0 : NaN) : e - r[0] * o),
          null == s && (s = t ? (i ? i - 1 : NaN) : n + r[1] * o),
          (null != a && isFinite(a)) || (a = NaN),
          (null != s && isFinite(s)) || (s = NaN),
          xt(a) || xt(s) || (t && !i)),
        n =
          (this._needCrossZero &&
            (a = 0 < a && 0 < s && !l ? 0 : a) < 0 &&
            s < 0 &&
            !u &&
            (s = 0),
          this._determinedMin),
        r = this._determinedMax;
      return (
        null != n && ((a = n), (l = !0)),
        null != r && ((s = r), (u = !0)),
        { min: a, max: s, minFixed: l, maxFixed: u, isBlank: e }
      );
    }),
    (x_.prototype.modifyDataMinMax = function (t, e) {
      this[b_[t]] = e;
    }),
    (x_.prototype.setDeterminedMinMax = function (t, e) {
      this[w_[t]] = e;
    }),
    (x_.prototype.freeze = function () {
      this.frozen = !0;
    });
  var __ = x_;
  function x_(t, e, n) {
    this._prepareParams(t, e, n);
  }
  var w_ = { min: "_determinedMin", max: "_determinedMax" },
    b_ = { min: "_dataMin", max: "_dataMax" };
  function S_(t, e) {
    return null == e ? null : xt(e) ? NaN : t.parse(e);
  }
  function M_(t, e) {
    var n,
      i,
      r,
      o,
      a,
      s,
      l = t.type,
      u =
        ((c = e),
        (u = (h = t).getExtent()),
        (
          h.rawExtentInfo || ((c = new __(h, c, u)), (h.rawExtentInfo = c))
        ).calculate()),
      h = (t.setBlank(u.isBlank), u.min),
      c = u.max,
      t = e.ecModel;
    return (
      t &&
        "time" === l &&
        ((l = Qv("bar", t)),
        (n = !1),
        E(l, function (t) {
          n = n || t.getBaseAxis() === e.axis;
        }),
        n) &&
        ((t = Jv(l)),
        (l = h),
        (i = c),
        (t = t),
        (s = (s = (r = e).axis.getExtent())[1] - s[0]),
        (h = (t =
          void 0 ===
          (t = (function (t, e, n) {
            if (t && e)
              return null != (t = t[$v(e)]) && null != n ? t[Kv(n)] : t;
          })(t, r.axis))
            ? { min: l, max: i }
            : ((o = 1 / 0),
              E(t, function (t) {
                o = Math.min(t.offset, o);
              }),
              (a = -1 / 0),
              E(t, function (t) {
                a = Math.max(t.offset + t.width, a);
              }),
              (o = Math.abs(o)),
              (a = Math.abs(a)),
              {
                min: (l -=
                  (o / (r = o + a)) *
                  (s = (t = i - l) / (1 - (o + a) / s) - t)),
                max: (i += (a / r) * s),
              })).min),
        (c = t.max)),
      { extent: [h, c], fixMin: u.minFixed, fixMax: u.maxFixed }
    );
  }
  function T_(t, e) {
    var n = M_(t, e),
      i = n.extent,
      r = e.get("splitNumber"),
      o = (t instanceof y_ && (t.base = e.get("logBase")), t.type),
      a = e.get("interval"),
      o = "interval" === o || "time" === o;
    t.setExtent(i[0], i[1]),
      t.calcNiceExtent({
        splitNumber: r,
        fixMin: n.fixMin,
        fixMax: n.fixMax,
        minInterval: o ? e.get("minInterval") : null,
        maxInterval: o ? e.get("maxInterval") : null,
      }),
      null != a && t.setInterval && t.setInterval(a);
  }
  function C_(t, e) {
    if ((e = e || t.get("type")))
      switch (e) {
        case "category":
          return new Vv({
            ordinalMeta: t.getOrdinalMeta
              ? t.getOrdinalMeta()
              : t.getCategories(),
            extent: [1 / 0, -1 / 0],
          });
        case "time":
          return new r_({
            locale: t.ecModel.getLocaleModel(),
            useUTC: t.ecModel.get("useUTC"),
          });
        default:
          return new (Tv.getClass(e) || Uv)();
      }
  }
  function I_(n) {
    var i,
      r,
      e,
      t = n.getLabelModel().get("formatter"),
      o = "category" === n.type ? n.scale.getExtent()[0] : null;
    return "time" === n.scale.type
      ? ((r = t),
        function (t, e) {
          return n.scale.getFormattedLabel(t, e, r);
        })
      : H(t)
      ? ((e = t),
        function (t) {
          t = n.scale.getLabel(t);
          return e.replace("{value}", null != t ? t : "");
        })
      : S(t)
      ? ((i = t),
        function (t, e) {
          return (
            null != o && (e = t.value - o),
            i(D_(n, t), e, null != t.level ? { level: t.level } : null)
          );
        })
      : function (t) {
          return n.scale.getLabel(t);
        };
  }
  function D_(t, e) {
    return "category" === t.type ? t.scale.getLabel(e) : e.value;
  }
  function k_(t) {
    var e,
      n,
      i,
      r = t.model,
      o = t.scale;
    if (r.get(["axisLabel", "show"]) && !o.isBlank()) {
      var a,
        s,
        l = o.getExtent(),
        u = o instanceof Vv ? o.count() : (a = o.getTicks()).length,
        h = t.getLabelModel(),
        c = I_(t),
        p = 1;
      40 < u && (p = Math.ceil(u / 40));
      for (var d = 0; d < u; d += p) {
        var f = c(a ? a[d] : { value: l[0] + d }, d),
          g =
            ((f = h.getTextRect(f)),
            (e = h.get("rotate") || 0),
            (n = i = g = n = void 0),
            (e = (e * Math.PI) / 180),
            (n = f.width),
            (g = f.height),
            (i = n * Math.abs(Math.cos(e)) + Math.abs(g * Math.sin(e))),
            (n = n * Math.abs(Math.sin(e)) + Math.abs(g * Math.cos(e))),
            new W(f.x, f.y, i, n));
        s ? s.union(g) : (s = g);
      }
      return s;
    }
  }
  function A_(t) {
    t = t.get("interval");
    return null == t ? "auto" : t;
  }
  function P_(t) {
    return "category" === t.type && 0 === A_(t.getLabelModel());
  }
  (O_.prototype.getNeedCrossZero = function () {
    return !this.option.scale;
  }),
    (O_.prototype.getCoordSysModel = function () {});
  var L_ = O_;
  function O_() {}
  var Uy = Object.freeze({
      __proto__: null,
      createDimensions: function (t, e) {
        return mv(t, e).dimensions;
      },
      createList: function (t) {
        return Mv(null, t);
      },
      createScale: function (t, e) {
        var n = e;
        return (
          (e = C_((n = e instanceof Lc ? n : new Lc(e)))).setExtent(t[0], t[1]),
          T_(e, n),
          e
        );
      },
      createSymbol: Ky,
      createTextStyle: function (t, e) {
        return pc(t, null, null, "normal" !== (e = e || {}).state);
      },
      dataStack: {
        isDimensionStacked: bv,
        enableDataStack: wv,
        getStackedDimension: Sv,
      },
      enableHoverEmphasis: Ol,
      getECData: D,
      getLayoutRect: Lp,
      mixinAxisModelCommonMethods: function (t) {
        at(t, L_);
      },
    }),
    R_ = [],
    N_ = {
      registerPreprocessor: D0,
      registerProcessor: k0,
      registerPostInit: A0,
      registerPostUpdate: P0,
      registerUpdateLifecycle: L0,
      registerAction: O0,
      registerCoordinateSystem: R0,
      registerLayout: N0,
      registerVisual: E0,
      registerTransform: H0,
      registerLoading: F0,
      registerMap: V0,
      registerImpl: function (t, e) {
        km[t] = e;
      },
      PRIORITY: Wy,
      ComponentModel: g,
      ComponentView: Wg,
      SeriesModel: Ng,
      ChartView: Zg,
      registerComponentModel: function (t) {
        g.registerClass(t);
      },
      registerComponentView: function (t) {
        Wg.registerClass(t);
      },
      registerSeriesModel: function (t) {
        Ng.registerClass(t);
      },
      registerChartView: function (t) {
        Zg.registerClass(t);
      },
      registerSubTypeDefaulter: function (t, e) {
        g.registerSubTypeDefaulter(t, e);
      },
      registerPainter: function (t, e) {
        Yr(t, e);
      },
    };
  function E_(t) {
    V(t)
      ? E(t, function (t) {
          E_(t);
        })
      : 0 <= I(R_, t) ||
        (R_.push(t), (t = S(t) ? { install: t } : t).install(N_));
  }
  var z_ = 1e-8;
  function B_(t, e) {
    return Math.abs(t - e) < z_;
  }
  function F_(t, e, n) {
    var i = 0,
      r = t[0];
    if (r) {
      for (var o = 1; o < t.length; o++) {
        var a = t[o];
        (i += Qa(r[0], r[1], a[0], a[1], e, n)), (r = a);
      }
      var s = t[0];
      return (
        (B_(r[0], s[0]) && B_(r[1], s[1])) ||
          (i += Qa(r[0], r[1], s[0], s[1], e, n)),
        0 !== i
      );
    }
  }
  var V_ = [];
  function H_(t, e) {
    for (var n = 0; n < t.length; n++) ee(t[n], t[n], e);
  }
  function G_(t, e, n, i) {
    for (var r = 0; r < t.length; r++) {
      var o = t[r];
      (o = i ? i.project(o) : o) &&
        isFinite(o[0]) &&
        isFinite(o[1]) &&
        (ne(e, e, o), ie(n, n, o));
    }
  }
  (W_.prototype.setCenter = function (t) {
    this._center = t;
  }),
    (W_.prototype.getCenter = function () {
      return this._center || (this._center = this.calcCenter());
    });
  Xy = W_;
  function W_(t) {
    this.name = t;
  }
  function U_(t, e) {
    (this.type = "polygon"), (this.exterior = t), (this.interiors = e);
  }
  function X_(t) {
    (this.type = "linestring"), (this.points = t);
  }
  u(j_, (Y_ = Xy)),
    (j_.prototype.calcCenter = function () {
      for (var t, e, n = this.geometries, i = 0, r = 0; r < n.length; r++) {
        var o = n[r],
          a = o.exterior,
          a = a && a.length;
        i < a && ((t = o), (i = a));
      }
      if (t) {
        for (
          var s = t.exterior,
            l = 0,
            u = 0,
            h = 0,
            c = s.length,
            p = s[c - 1][0],
            d = s[c - 1][1],
            f = 0;
          f < c;
          f++
        ) {
          var g = s[f][0],
            y = s[f][1],
            m = p * y - g * d;
          (l += m), (u += (p + g) * m), (h += (d + y) * m), (p = g), (d = y);
        }
        return l ? [u / l / 3, h / l / 3, l] : [s[0][0] || 0, s[0][1] || 0];
      }
      return [(e = this.getBoundingRect()).x + e.width / 2, e.y + e.height / 2];
    }),
    (j_.prototype.getBoundingRect = function (e) {
      var n,
        i,
        t = this._rect;
      return (
        (t && !e) ||
          ((n = [1 / 0, 1 / 0]),
          (i = [-1 / 0, -1 / 0]),
          E(this.geometries, function (t) {
            "polygon" === t.type
              ? G_(t.exterior, n, i, e)
              : E(t.points, function (t) {
                  G_(t, n, i, e);
                });
          }),
          (isFinite(n[0]) &&
            isFinite(n[1]) &&
            isFinite(i[0]) &&
            isFinite(i[1])) ||
            (n[0] = n[1] = i[0] = i[1] = 0),
          (t = new W(n[0], n[1], i[0] - n[0], i[1] - n[1])),
          e) ||
          (this._rect = t),
        t
      );
    }),
    (j_.prototype.contain = function (t) {
      var e = this.getBoundingRect(),
        n = this.geometries;
      if (e.contain(t[0], t[1]))
        t: for (var i = 0, r = n.length; i < r; i++) {
          var o = n[i];
          if ("polygon" === o.type) {
            var a = o.exterior,
              s = o.interiors;
            if (F_(a, t[0], t[1])) {
              for (var l = 0; l < (s ? s.length : 0); l++)
                if (F_(s[l], t[0], t[1])) continue t;
              return !0;
            }
          }
        }
      return !1;
    }),
    (j_.prototype.transformTo = function (t, e, n, i) {
      var r = this.getBoundingRect(),
        o = r.width / r.height;
      n ? (i = i || n / o) : (n = o * i);
      for (
        var o = new W(t, e, n, i),
          a = r.calculateTransform(o),
          s = this.geometries,
          l = 0;
        l < s.length;
        l++
      ) {
        var u = s[l];
        "polygon" === u.type
          ? (H_(u.exterior, a),
            E(u.interiors, function (t) {
              H_(t, a);
            }))
          : E(u.points, function (t) {
              H_(t, a);
            });
      }
      (r = this._rect).copy(o),
        (this._center = [r.x + r.width / 2, r.y + r.height / 2]);
    }),
    (j_.prototype.cloneShallow = function (t) {
      t = new j_(
        (t = null == t ? this.name : t),
        this.geometries,
        this._center
      );
      return (t._rect = this._rect), (t.transformTo = null), t;
    });
  var Y_,
    q_,
    Z_ = j_;
  function j_(t, e, n) {
    t = Y_.call(this, t) || this;
    return (
      (t.type = "geoJSON"),
      (t.geometries = e),
      (t._center = n && [n[0], n[1]]),
      t
    );
  }
  function K_(t, e) {
    t = q_.call(this, t) || this;
    return (t.type = "geoSVG"), (t._elOnlyForCalculate = e), t;
  }
  function $_(t, e, n) {
    for (var i = 0; i < t.length; i++) t[i] = Q_(t[i], e[i], n);
  }
  function Q_(t, e, n) {
    for (var i = [], r = e[0], o = e[1], a = 0; a < t.length; a += 2) {
      var s = ((s = t.charCodeAt(a) - 64) >> 1) ^ -(1 & s),
        l = ((l = t.charCodeAt(a + 1) - 64) >> 1) ^ -(1 & l),
        r = (s += r),
        o = (l += o);
      i.push([s / n, l / n]);
    }
    return i;
  }
  function J_(t, o) {
    return F(
      ut(
        (t = (e = t).UTF8Encoding
          ? (null == (r = (n = e).UTF8Scale) && (r = 1024),
            E(n.features, function (t) {
              var e = t.geometry,
                n = e.encodeOffsets,
                i = e.coordinates;
              if (n)
                switch (e.type) {
                  case "LineString":
                    e.coordinates = Q_(i, n, r);
                    break;
                  case "Polygon":
                  case "MultiLineString":
                    $_(i, n, r);
                    break;
                  case "MultiPolygon":
                    E(i, function (t, e) {
                      return $_(t, n[e], r);
                    });
                }
            }),
            (n.UTF8Encoding = !1),
            n)
          : e).features,
        function (t) {
          return (
            t.geometry && t.properties && 0 < t.geometry.coordinates.length
          );
        }
      ),
      function (t) {
        var e = t.properties,
          n = t.geometry,
          i = [];
        switch (n.type) {
          case "Polygon":
            var r = n.coordinates;
            i.push(new U_(r[0], r.slice(1)));
            break;
          case "MultiPolygon":
            E(n.coordinates, function (t) {
              t[0] && i.push(new U_(t[0], t.slice(1)));
            });
            break;
          case "LineString":
            i.push(new X_([n.coordinates]));
            break;
          case "MultiLineString":
            i.push(new X_(n.coordinates));
        }
        t = new Z_(e[o || "name"], i, e.cp);
        return (t.properties = e), t;
      }
    );
    var e, n, r;
  }
  u(K_, (q_ = Xy)),
    (K_.prototype.calcCenter = function () {
      for (
        var t = this._elOnlyForCalculate,
          e = t.getBoundingRect(),
          e = [e.x + e.width / 2, e.y + e.height / 2],
          n = Oe(V_),
          i = t;
        i && !i.isGeoSVGGraphicRoot;

      )
        Ne(n, i.getLocalTransform(), n), (i = i.parent);
      return Fe(n, n), ee(e, e, n), e;
    });
  var jo = Object.freeze({
      __proto__: null,
      MAX_SAFE_INTEGER: 9007199254740991,
      asc: function (t) {
        return (
          t.sort(function (t, e) {
            return t - e;
          }),
          t
        );
      },
      getPercentWithPrecision: function (t, e, n) {
        return (t[e] && eo(t, n)[e]) || 0;
      },
      getPixelPrecision: to,
      getPrecision: Qr,
      getPrecisionSafe: Jr,
      isNumeric: ho,
      isRadianAroundZero: io,
      linearMap: jr,
      nice: lo,
      numericToNumber: uo,
      parseDate: oo,
      quantile: function (t, e) {
        var e = (t.length - 1) * e + 1,
          n = Math.floor(e),
          i = +t[n - 1];
        return (e = e - n) ? i + e * (t[n] - i) : i;
      },
      quantity: ao,
      quantityExponent: so,
      reformIntervals: function (t) {
        t.sort(function (t, e) {
          return (function t(e, n, i) {
            return (
              e.interval[i] < n.interval[i] ||
              (e.interval[i] === n.interval[i] &&
                (e.close[i] - n.close[i] == (i ? -1 : 1) || (!i && t(e, n, 1))))
            );
          })(t, e, 0)
            ? -1
            : 1;
        });
        for (var e = -1 / 0, n = 1, i = 0; i < t.length; ) {
          for (var r = t[i].interval, o = t[i].close, a = 0; a < 2; a++)
            r[a] <= e && ((r[a] = e), (o[a] = a ? 1 : 1 - n)),
              (e = r[a]),
              (n = o[a]);
          r[0] === r[1] && o[0] * o[1] != 1 ? t.splice(i, 1) : i++;
        }
        return t;
      },
      remRadian: no,
      round: $r,
    }),
    Zh = Object.freeze({ __proto__: null, format: ep, parse: oo }),
    jc = Object.freeze({
      __proto__: null,
      Arc: rh,
      BezierCurve: th,
      BoundingRect: W,
      Circle: uu,
      CompoundPath: sh,
      Ellipse: du,
      Group: Fr,
      Image: vs,
      IncrementalDisplayable: n,
      Line: Zu,
      LinearGradient: ph,
      Polygon: Fu,
      Polyline: Wu,
      RadialGradient: uh,
      Rect: Is,
      Ring: Ru,
      Sector: Au,
      Text: Ls,
      clipPointsByRect: Jh,
      clipRectByRect: tc,
      createIcon: ec,
      extendPath: Fh,
      extendShape: zh,
      getShapeClass: Hh,
      getTransform: jh,
      initProps: Dh,
      makeImage: Wh,
      makePath: Gh,
      mergePath: Xh,
      registerShape: Vh,
      resizePath: Yh,
      updateProps: Ih,
    }),
    Ic = Object.freeze({
      __proto__: null,
      addCommas: mp,
      capitalFirst: function (t) {
        return t && t.charAt(0).toUpperCase() + t.substr(1);
      },
      encodeHTML: _e,
      formatTime: function (t, e, n) {
        ("week" !== t &&
          "month" !== t &&
          "quarter" !== t &&
          "half-year" !== t &&
          "year" !== t) ||
          (t = "MM-dd\nyyyy");
        var i = (e = oo(e))[(n = n ? "getUTC" : "get") + "FullYear"](),
          r = e[n + "Month"]() + 1,
          o = e[n + "Date"](),
          a = e[n + "Hours"](),
          s = e[n + "Minutes"](),
          l = e[n + "Seconds"](),
          e = e[n + "Milliseconds"]();
        return t
          .replace("MM", Jc(r, 2))
          .replace("M", r)
          .replace("yyyy", i)
          .replace("yy", Jc((i % 100) + "", 2))
          .replace("dd", Jc(o, 2))
          .replace("d", o)
          .replace("hh", Jc(a, 2))
          .replace("h", a)
          .replace("mm", Jc(s, 2))
          .replace("m", s)
          .replace("ss", Jc(l, 2))
          .replace("s", l)
          .replace("SSS", Jc(e, 3));
      },
      formatTpl: Sp,
      getTextRect: function (t, e, n, i, r, o, a, s) {
        return new Ls({
          style: {
            text: t,
            font: e,
            align: n,
            verticalAlign: i,
            padding: r,
            rich: o,
            overflow: a ? "truncate" : null,
            lineHeight: s,
          },
        }).getBoundingRect();
      },
      getTooltipMarker: Mp,
      normalizeCssArray: _p,
      toCamelCase: vp,
      truncateText: na,
    }),
    Sc = Object.freeze({
      __proto__: null,
      bind: ct,
      clone: y,
      curry: pt,
      defaults: B,
      each: E,
      extend: L,
      filter: ut,
      indexOf: I,
      inherits: ot,
      isArray: V,
      isFunction: S,
      isObject: O,
      isString: H,
      map: F,
      merge: d,
      reduce: lt,
    }),
    t1 = ko();
  function e1(t) {
    return "category" === t.type
      ? ((r = (e = t).getLabelModel()),
        (o = i1(e, r)),
        !r.get("show") || e.scale.isBlank()
          ? { labels: [], labelCategoryInterval: o.labelCategoryInterval }
          : o)
      : ((r = (n = t).scale.getTicks()),
        (i = I_(n)),
        {
          labels: F(r, function (t, e) {
            return {
              level: t.level,
              formattedLabel: i(t, e),
              rawLabel: n.scale.getLabel(t),
              tickValue: t.value,
            };
          }),
        });
    var n, i, e, r, o;
  }
  function n1(t, e) {
    var n, i, r, o, a, s;
    return "category" === t.type
      ? ((e = e),
        (o = r1((n = t), "ticks")),
        (a = A_(e)),
        (s = o1(o, a)) ||
          ((e.get("show") && !n.scale.isBlank()) || (i = []),
          (i = S(a)
            ? l1(n, a, !0)
            : "auto" === a
            ? ((s = i1(n, n.getLabelModel())),
              (r = s.labelCategoryInterval),
              F(s.labels, function (t) {
                return t.tickValue;
              }))
            : s1(n, (r = a), !0)),
          a1(o, a, { ticks: i, tickCategoryInterval: r })))
      : {
          ticks: F(t.scale.getTicks(), function (t) {
            return t.value;
          }),
        };
  }
  function i1(t, e) {
    var n,
      i = r1(t, "labels"),
      e = A_(e);
    return (
      o1(i, e) ||
      a1(i, e, {
        labels: S(e)
          ? l1(t, e)
          : s1(
              t,
              (n =
                "auto" === e
                  ? null != (t = t1((i = t)).autoInterval)
                    ? t
                    : (t1(i).autoInterval = i.calculateCategoryInterval())
                  : e)
            ),
        labelCategoryInterval: n,
      })
    );
  }
  function r1(t, e) {
    return t1(t)[e] || (t1(t)[e] = []);
  }
  function o1(t, e) {
    for (var n = 0; n < t.length; n++) if (t[n].key === e) return t[n].value;
  }
  function a1(t, e, n) {
    return t.push({ key: e, value: n }), n;
  }
  function s1(t, e, n) {
    var i = I_(t),
      r = t.scale,
      o = r.getExtent(),
      a = t.getLabelModel(),
      s = [],
      l = Math.max((e || 0) + 1, 1),
      e = o[0],
      u = r.count(),
      u =
        (0 !== e &&
          1 < l &&
          2 < u / l &&
          (e = Math.round(Math.ceil(e / l) * l)),
        P_(t)),
      t = a.get("showMinLabel") || u,
      a = a.get("showMaxLabel") || u;
    t && e !== o[0] && c(o[0]);
    for (var h = e; h <= o[1]; h += l) c(h);
    function c(t) {
      var e = { value: t };
      s.push(
        n ? t : { formattedLabel: i(e), rawLabel: r.getLabel(e), tickValue: t }
      );
    }
    return a && h - l !== o[1] && c(o[1]), s;
  }
  function l1(t, i, r) {
    var o = t.scale,
      a = I_(t),
      s = [];
    return (
      E(o.getTicks(), function (t) {
        var e = o.getLabel(t),
          n = t.value;
        i(t.value, e) &&
          s.push(r ? n : { formattedLabel: a(t), rawLabel: e, tickValue: n });
      }),
      s
    );
  }
  var u1 = [0, 1],
    kc =
      ((h1.prototype.contain = function (t) {
        var e = this._extent,
          n = Math.min(e[0], e[1]),
          e = Math.max(e[0], e[1]);
        return n <= t && t <= e;
      }),
      (h1.prototype.containData = function (t) {
        return this.scale.contain(t);
      }),
      (h1.prototype.getExtent = function () {
        return this._extent.slice();
      }),
      (h1.prototype.getPixelPrecision = function (t) {
        return to(t || this.scale.getExtent(), this._extent);
      }),
      (h1.prototype.setExtent = function (t, e) {
        var n = this._extent;
        (n[0] = t), (n[1] = e);
      }),
      (h1.prototype.dataToCoord = function (t, e) {
        var n = this._extent,
          i = this.scale;
        return (
          (t = i.normalize(t)),
          this.onBand && "ordinal" === i.type && c1((n = n.slice()), i.count()),
          jr(t, u1, n, e)
        );
      }),
      (h1.prototype.coordToData = function (t, e) {
        var n = this._extent,
          i = this.scale,
          i =
            (this.onBand &&
              "ordinal" === i.type &&
              c1((n = n.slice()), i.count()),
            jr(t, n, u1, e));
        return this.scale.scale(i);
      }),
      (h1.prototype.pointToData = function (t, e) {}),
      (h1.prototype.getTicksCoords = function (t) {
        var e,
          n,
          i,
          r,
          o = (t = t || {}).tickModel || this.getTickModel(),
          a = F(
            n1(this, o).ticks,
            function (t) {
              return {
                coord: this.dataToCoord(
                  "ordinal" === this.scale.type
                    ? this.scale.getRawOrdinalNumber(t)
                    : t
                ),
                tickValue: t,
              };
            },
            this
          ),
          s = this,
          l = a,
          o = o.get("alignWithLabel"),
          t = t.clamp,
          u = l.length;
        function h(t, e) {
          return (t = $r(t)), (e = $r(e)), r ? e < t : t < e;
        }
        return (
          s.onBand &&
            !o &&
            u &&
            ((o = s.getExtent()),
            1 === u
              ? ((l[0].coord = o[0]), (e = l[1] = { coord: o[1] }))
              : ((n = l[u - 1].tickValue - l[0].tickValue),
                (i = (l[u - 1].coord - l[0].coord) / n),
                E(l, function (t) {
                  t.coord -= i / 2;
                }),
                (n = 1 + s.scale.getExtent()[1] - l[u - 1].tickValue),
                (e = { coord: l[u - 1].coord + i * n }),
                l.push(e)),
            (r = o[0] > o[1]),
            h(l[0].coord, o[0]) && (t ? (l[0].coord = o[0]) : l.shift()),
            t && h(o[0], l[0].coord) && l.unshift({ coord: o[0] }),
            h(o[1], e.coord) && (t ? (e.coord = o[1]) : l.pop()),
            t) &&
            h(e.coord, o[1]) &&
            l.push({ coord: o[1] }),
          a
        );
      }),
      (h1.prototype.getMinorTicksCoords = function () {
        var t;
        return "ordinal" === this.scale.type
          ? []
          : ((t = this.model.getModel("minorTick").get("splitNumber")),
            F(
              this.scale.getMinorTicks((t = 0 < t && t < 100 ? t : 5)),
              function (t) {
                return F(
                  t,
                  function (t) {
                    return { coord: this.dataToCoord(t), tickValue: t };
                  },
                  this
                );
              },
              this
            ));
      }),
      (h1.prototype.getViewLabels = function () {
        return e1(this).labels;
      }),
      (h1.prototype.getLabelModel = function () {
        return this.model.getModel("axisLabel");
      }),
      (h1.prototype.getTickModel = function () {
        return this.model.getModel("axisTick");
      }),
      (h1.prototype.getBandWidth = function () {
        var t = this._extent,
          e = this.scale.getExtent(),
          e = e[1] - e[0] + (this.onBand ? 1 : 0),
          t = (0 === e && (e = 1), Math.abs(t[1] - t[0]));
        return Math.abs(t) / e;
      }),
      (h1.prototype.calculateCategoryInterval = function () {
        r = (n = d = this).getLabelModel();
        var t = {
            axisRotate: n.getRotate
              ? n.getRotate()
              : n.isHorizontal && !n.isHorizontal()
              ? 90
              : 0,
            labelRotate: r.get("rotate") || 0,
            font: r.getFont(),
          },
          e = I_(d),
          n = ((t.axisRotate - t.labelRotate) / 180) * Math.PI,
          i = (r = d.scale).getExtent(),
          r = r.count();
        if (i[1] - i[0] < 1) return 0;
        var o = 1;
        40 < r && (o = Math.max(1, Math.floor(r / 40)));
        for (
          var a = i[0],
            s = d.dataToCoord(a + 1) - d.dataToCoord(a),
            l = Math.abs(s * Math.cos(n)),
            s = Math.abs(s * Math.sin(n)),
            u = 0,
            h = 0;
          a <= i[1];
          a += o
        )
          var c =
              1.3 * (p = wr(e({ value: a }), t.font, "center", "top")).width,
            p = 1.3 * p.height,
            u = Math.max(u, c, 7),
            h = Math.max(h, p, 7);
        var n = u / l,
          l = h / s,
          s =
            (isNaN(n) && (n = 1 / 0),
            isNaN(l) && (l = 1 / 0),
            Math.max(0, Math.floor(Math.min(n, l)))),
          n = t1(d.model),
          l = d.getExtent(),
          d = n.lastAutoInterval,
          f = n.lastTickCount;
        return (
          null != d &&
          null != f &&
          Math.abs(d - s) <= 1 &&
          Math.abs(f - r) <= 1 &&
          s < d &&
          n.axisExtent0 === l[0] &&
          n.axisExtent1 === l[1]
            ? (s = d)
            : ((n.lastTickCount = r),
              (n.lastAutoInterval = s),
              (n.axisExtent0 = l[0]),
              (n.axisExtent1 = l[1])),
          s
        );
      }),
      h1);
  function h1(t, e, n) {
    (this.onBand = !1),
      (this.inverse = !1),
      (this.dim = t),
      (this.scale = e),
      (this._extent = n || [0, 0]);
  }
  function c1(t, e) {
    e = (t[1] - t[0]) / e / 2;
    (t[0] += e), (t[1] -= e);
  }
  var p1 = 2 * Math.PI,
    d1 = qa.CMD,
    f1 = ["top", "right", "bottom", "left"];
  function g1(t, e, n, i, r, o, a, s) {
    var l = r - t,
      u = o - e,
      n = n - t,
      i = i - e,
      h = Math.sqrt(n * n + i * i),
      l = (l * (n /= h) + u * (i /= h)) / h,
      u = (s && (l = Math.min(Math.max(l, 0), 1)), (a[0] = t + (l *= h) * n)),
      s = (a[1] = e + l * i);
    return Math.sqrt((u - r) * (u - r) + (s - o) * (s - o));
  }
  function y1(t, e, n, i, r, o, a) {
    n < 0 && ((t += n), (n = -n)), i < 0 && ((e += i), (i = -i));
    (n = t + n),
      (i = e + i),
      (t = a[0] = Math.min(Math.max(r, t), n)),
      (n = a[1] = Math.min(Math.max(o, e), i));
    return Math.sqrt((t - r) * (t - r) + (n - o) * (n - o));
  }
  var m1 = [];
  function v1(t, e, n) {
    for (
      var i,
        r,
        o,
        a,
        s,
        l,
        u,
        h,
        c,
        p = 0,
        d = 0,
        f = 0,
        g = 0,
        y = 1 / 0,
        m = e.data,
        v = t.x,
        _ = t.y,
        x = 0;
      x < m.length;

    ) {
      var w = m[x++],
        b = (1 === x && ((f = p = m[x]), (g = d = m[x + 1])), y);
      switch (w) {
        case d1.M:
          (p = f = m[x++]), (d = g = m[x++]);
          break;
        case d1.L:
          (b = g1(p, d, m[x], m[x + 1], v, _, m1, !0)),
            (p = m[x++]),
            (d = m[x++]);
          break;
        case d1.C:
          (b = Hn(
            p,
            d,
            m[x++],
            m[x++],
            m[x++],
            m[x++],
            m[x],
            m[x + 1],
            v,
            _,
            m1
          )),
            (p = m[x++]),
            (d = m[x++]);
          break;
        case d1.Q:
          (b = Yn(p, d, m[x++], m[x++], m[x], m[x + 1], v, _, m1)),
            (p = m[x++]),
            (d = m[x++]);
          break;
        case d1.A:
          var S = m[x++],
            M = m[x++],
            T = m[x++],
            C = m[x++],
            I = m[x++],
            D = m[x++],
            k = ((x += 1), !!(1 - m[x++])),
            A = Math.cos(I) * T + S,
            P = Math.sin(I) * C + M;
          x <= 1 && ((f = A), (g = P)),
            (P = (A = I) + D),
            (k = k),
            (a = ((v - (i = S)) * (o = C)) / T + S),
            (s = _),
            (l = m1),
            (c = h = u = void 0),
            (a -= i),
            (s -= r = M),
            (u = Math.sqrt(a * a + s * s)),
            (h = (a /= u) * o + i),
            (c = (s /= u) * o + r),
            (b =
              Math.abs(A - P) % p1 < 1e-4 ||
              ((P = k ? ((k = A), (A = Ka(P)), Ka(k)) : ((A = Ka(A)), Ka(P))) <
                A && (P += p1),
              (k = Math.atan2(s, a)) < 0 && (k += p1),
              A <= k && k <= P) ||
              (A <= k + p1 && k + p1 <= P)
                ? ((l[0] = h), (l[1] = c), u - o)
                : (c =
                    ((k = o * Math.cos(A) + i) - a) * (k - a) +
                    ((h = o * Math.sin(A) + r) - s) * (h - s)) <
                  (i =
                    ((u = o * Math.cos(P) + i) - a) * (u - a) +
                    ((A = o * Math.sin(P) + r) - s) * (A - s))
                ? ((l[0] = k), (l[1] = h), Math.sqrt(c))
                : ((l[0] = u), (l[1] = A), Math.sqrt(i))),
            (p = Math.cos(I + D) * T + S),
            (d = Math.sin(I + D) * C + M);
          break;
        case d1.R:
          b = y1((f = p = m[x++]), (g = d = m[x++]), m[x++], m[x++], v, _, m1);
          break;
        case d1.Z:
          (b = g1(p, d, f, g, v, _, m1, !0)), (p = f), (d = g);
      }
      b < y && ((y = b), n.set(m1[0], m1[1]));
    }
    return y;
  }
  var _1 = new z(),
    x1 = new z(),
    w1 = new z(),
    b1 = new z(),
    S1 = new z();
  function M1(t, e) {
    if (t) {
      var n = t.getTextGuideLine(),
        i = t.getTextContent();
      if (i && n) {
        var r = t.textGuideLineConfig || {},
          o = [
            [0, 0],
            [0, 0],
            [0, 0],
          ],
          a = r.candidates || f1,
          s = i.getBoundingRect().clone(),
          l = (s.applyTransform(i.getComputedTransform()), 1 / 0),
          u = r.anchor,
          h = t.getComputedTransform(),
          c = h && Fe([], h),
          p = e.get("length2") || 0;
        u && w1.copy(u);
        for (var d = 0; d < a.length; d++) {
          x = _ = v = m = y = g = f = void 0;
          var f = a[d],
            g = 0,
            y = s,
            m = _1,
            v = b1,
            _ = y.width,
            x = y.height;
          switch (f) {
            case "top":
              m.set(y.x + _ / 2, y.y - g), v.set(0, -1);
              break;
            case "bottom":
              m.set(y.x + _ / 2, y.y + x + g), v.set(0, 1);
              break;
            case "left":
              m.set(y.x - g, y.y + x / 2), v.set(-1, 0);
              break;
            case "right":
              m.set(y.x + _ + g, y.y + x / 2), v.set(1, 0);
          }
          z.scaleAndAdd(x1, _1, b1, p), x1.transform(c);
          (f = t.getBoundingRect()),
            (f = u
              ? u.distance(x1)
              : t instanceof j
              ? v1(x1, t.path, w1)
              : ((b = w1),
                (w = y1((w = f).x, f.y, f.width, f.height, x1.x, x1.y, m1)),
                b.set(m1[0], m1[1]),
                w));
          f < l &&
            ((l = f),
            x1.transform(h),
            w1.transform(h),
            w1.toArray(o[0]),
            x1.toArray(o[1]),
            _1.toArray(o[2]));
        }
        I1(o, e.get("minTurnAngle")), n.setShape({ points: o });
      }
    }
    var w, b;
  }
  var T1 = [],
    C1 = new z();
  function I1(t, e) {
    var n, i;
    e <= 180 &&
      0 < e &&
      ((e = (e / 180) * Math.PI),
      _1.fromArray(t[0]),
      x1.fromArray(t[1]),
      w1.fromArray(t[2]),
      z.sub(b1, _1, x1),
      z.sub(S1, w1, x1),
      (i = b1.len()),
      (n = S1.len()),
      i < 0.001 ||
        n < 0.001 ||
        (b1.scale(1 / i),
        S1.scale(1 / n),
        (i = b1.dot(S1)),
        Math.cos(e) < i &&
          ((n = g1(x1.x, x1.y, w1.x, w1.y, _1.x, _1.y, T1, !1)),
          C1.fromArray(T1),
          C1.scaleAndAdd(S1, n / Math.tan(Math.PI - e)),
          (i =
            w1.x !== x1.x
              ? (C1.x - x1.x) / (w1.x - x1.x)
              : (C1.y - x1.y) / (w1.y - x1.y)),
          isNaN(i) ||
            (i < 0 ? z.copy(C1, x1) : 1 < i && z.copy(C1, w1),
            C1.toArray(t[1])))));
  }
  function D1(t, e, n, i) {
    var r = "normal" === n,
      n = r ? t : t.ensureState(n),
      e = ((n.ignore = e), i.get("smooth")),
      e =
        (e && !0 === e && (e = 0.3),
        (n.shape = n.shape || {}),
        0 < e && (n.shape.smooth = e),
        i.getModel("lineStyle").getLineStyle());
    r ? t.useStyle(e) : (n.style = e);
  }
  function k1(t, e) {
    var n = e.smooth,
      i = e.points;
    if (i)
      if ((t.moveTo(i[0][0], i[0][1]), 0 < n && 3 <= i.length)) {
        var e = $t(i[0], i[1]),
          r = $t(i[1], i[2]);
        e && r
          ? ((n = Math.min(e, r) * n),
            (e = te([], i[1], i[0], n / e)),
            (n = te([], i[1], i[2], n / r)),
            (r = te([], e, n, 0.5)),
            t.bezierCurveTo(e[0], e[1], e[0], e[1], r[0], r[1]),
            t.bezierCurveTo(n[0], n[1], n[0], n[1], i[2][0], i[2][1]))
          : (t.lineTo(i[1][0], i[1][1]), t.lineTo(i[2][0], i[2][1]));
      } else for (var o = 1; o < i.length; o++) t.lineTo(i[o][0], i[o][1]);
  }
  function A1(t, e, n) {
    var i = t.getTextGuideLine(),
      r = t.getTextContent();
    if (r) {
      for (
        var o = e.normal, a = o.get("show"), s = r.ignore, l = 0;
        l < Qs.length;
        l++
      ) {
        var u,
          h = Qs[l],
          c = e[h],
          p = "normal" === h;
        c &&
          ((u = c.get("show")),
          (p ? s : R(r.states[h] && r.states[h].ignore, s)) || !R(u, a)
            ? (u = p ? i : i && i.states[h]) && (u.ignore = !0)
            : (i ||
                ((i = new Wu()),
                t.setTextGuideLine(i),
                p || (!s && a) || D1(i, !0, "normal", e.normal),
                t.stateProxy && (i.stateProxy = t.stateProxy)),
              D1(i, !1, h, c)));
      }
      i &&
        (B(i.style, n),
        (i.style.fill = null),
        (n = o.get("showAbove")),
        ((t.textGuideLineConfig = t.textGuideLineConfig || {}).showAbove =
          n || !1),
        (i.buildPath = k1));
    } else i && t.removeTextGuideLine();
  }
  function P1(t, e) {
    for (
      var n = { normal: t.getModel((e = e || "labelLine")) }, i = 0;
      i < $s.length;
      i++
    ) {
      var r = $s[i];
      n[r] = t.getModel([r, e]);
    }
    return n;
  }
  function L1(t) {
    for (var e = [], n = 0; n < t.length; n++) {
      var i,
        r,
        o,
        a,
        s,
        l,
        u = t[n];
      u.defaultAttr.ignore ||
        ((r = (i = u.label).getComputedTransform()),
        (o = i.getBoundingRect()),
        (a = !r || (r[1] < 1e-5 && r[2] < 1e-5)),
        (l = i.style.margin || 0),
        (s = o.clone()).applyTransform(r),
        (s.x -= l / 2),
        (s.y -= l / 2),
        (s.width += l),
        (s.height += l),
        (l = a ? new xh(o, r) : null),
        e.push({
          label: i,
          labelLine: u.labelLine,
          rect: s,
          localRect: o,
          obb: l,
          priority: u.priority,
          defaultAttr: u.defaultAttr,
          layoutOption: u.computedLayoutOption,
          axisAligned: a,
          transform: r,
        }));
    }
    return e;
  }
  function O1(s, l, u, t, e, n) {
    var h = s.length;
    if (!(h < 2)) {
      s.sort(function (t, e) {
        return t.rect[l] - e.rect[l];
      });
      for (var i, r = 0, o = !1, a = [], c = 0, p = 0; p < h; p++) {
        var d = s[p],
          f = d.rect,
          d =
            ((i = f[l] - r) < 0 && ((f[l] -= i), (d.label[l] -= i), (o = !0)),
            Math.max(-i, 0));
        a.push(d), (c += d), (r = f[l] + f[u]);
      }
      0 < c && n && w(-c / h, 0, h);
      var g,
        y,
        m = s[0],
        v = s[h - 1];
      return (
        _(),
        g < 0 && b(-g, 0.8),
        y < 0 && b(y, 0.8),
        _(),
        x(g, y, 1),
        x(y, g, -1),
        _(),
        g < 0 && S(-g),
        y < 0 && S(y),
        o
      );
    }
    function _() {
      (g = m.rect[l] - t), (y = e - v.rect[l] - v.rect[u]);
    }
    function x(t, e, n) {
      t < 0 &&
        (0 < (e = Math.min(e, -t))
          ? (w(e * n, 0, h), (e = e + t) < 0 && b(-e * n, 1))
          : b(-t * n, 1));
    }
    function w(t, e, n) {
      0 !== t && (o = !0);
      for (var i = e; i < n; i++) {
        var r = s[i];
        (r.rect[l] += t), (r.label[l] += t);
      }
    }
    function b(t, e) {
      for (var n = [], i = 0, r = 1; r < h; r++) {
        var o = s[r - 1].rect,
          o = Math.max(s[r].rect[l] - o[l] - o[u], 0);
        n.push(o), (i += o);
      }
      if (i) {
        var a = Math.min(Math.abs(t) / i, e);
        if (0 < t) for (r = 0; r < h - 1; r++) w(n[r] * a, 0, r + 1);
        else for (r = h - 1; 0 < r; r--) w(-n[r - 1] * a, r, h);
      }
    }
    function S(t) {
      var e = t < 0 ? -1 : 1;
      t = Math.abs(t);
      for (var n = Math.ceil(t / (h - 1)), i = 0; i < h - 1; i++)
        if ((0 < e ? w(n, 0, i + 1) : w(-n, h - i - 1, h), (t -= n) <= 0))
          return;
    }
  }
  function R1(t, e, n, i) {
    return O1(t, "y", "height", e, n, i);
  }
  function N1(t) {
    var e = [],
      n =
        (t.sort(function (t, e) {
          return e.priority - t.priority;
        }),
        new W(0, 0, 0, 0));
    function i(t) {
      var e;
      t.ignore ||
        (null == (e = t.ensureState("emphasis")).ignore && (e.ignore = !1)),
        (t.ignore = !0);
    }
    for (var r = 0; r < t.length; r++) {
      var o = t[r],
        a = o.axisAligned,
        s = o.localRect,
        l = o.transform,
        u = o.label,
        h = o.labelLine;
      n.copy(o.rect),
        (n.width -= 0.1),
        (n.height -= 0.1),
        (n.x += 0.05),
        (n.y += 0.05);
      for (var c = o.obb, p = !1, d = 0; d < e.length; d++) {
        var f = e[d];
        if (n.intersect(f.rect)) {
          if (a && f.axisAligned) {
            p = !0;
            break;
          }
          if (
            (f.obb || (f.obb = new xh(f.localRect, f.transform)),
            (c = c || new xh(s, l)).intersect(f.obb))
          ) {
            p = !0;
            break;
          }
        }
      }
      p
        ? (i(u), h && i(h))
        : (u.attr("ignore", o.defaultAttr.ignore),
          h && h.attr("ignore", o.defaultAttr.labelGuideIgnore),
          e.push(o));
    }
  }
  function E1(t, e) {
    var n = t.label,
      e = e && e.getTextGuideLine();
    return {
      dataIndex: t.dataIndex,
      dataType: t.dataType,
      seriesIndex: t.seriesModel.seriesIndex,
      text: t.label.style.text,
      rect: t.hostRect,
      labelRect: t.rect,
      align: n.style.align,
      verticalAlign: n.style.verticalAlign,
      labelLinePoints: (function (t) {
        if (t) {
          for (var e = [], n = 0; n < t.length; n++) e.push(t[n].slice());
          return e;
        }
      })(e && e.shape.points),
    };
  }
  var z1 = ["align", "verticalAlign", "width", "height", "fontSize"],
    B1 = new gr(),
    F1 = ko(),
    V1 = ko();
  function H1(t, e, n) {
    for (var i = 0; i < n.length; i++) {
      var r = n[i];
      null != e[r] && (t[r] = e[r]);
    }
  }
  var G1 = ["x", "y", "rotation"],
    W1 =
      ((U1.prototype.clearLabels = function () {
        (this._labelList = []), (this._chartViewList = []);
      }),
      (U1.prototype._addLabel = function (t, e, n, i, r) {
        var o = i.style,
          a = i.__hostTarget.textConfig || {},
          s = i.getComputedTransform(),
          l = i.getBoundingRect().plain();
        W.applyTransform(l, l, s),
          s
            ? B1.setLocalTransform(s)
            : ((B1.x = B1.y = B1.rotation = B1.originX = B1.originY = 0),
              (B1.scaleX = B1.scaleY = 1)),
          (B1.rotation = Ka(B1.rotation));
        var u,
          s = i.__hostTarget,
          h =
            (s &&
              ((u = s.getBoundingRect().plain()),
              (h = s.getComputedTransform()),
              W.applyTransform(u, u, h)),
            u && s.getTextGuideLine());
        this._labelList.push({
          label: i,
          labelLine: h,
          seriesModel: n,
          dataIndex: t,
          dataType: e,
          layoutOption: r,
          computedLayoutOption: null,
          rect: l,
          hostRect: u,
          priority: u ? u.width * u.height : 0,
          defaultAttr: {
            ignore: i.ignore,
            labelGuideIgnore: h && h.ignore,
            x: B1.x,
            y: B1.y,
            scaleX: B1.scaleX,
            scaleY: B1.scaleY,
            rotation: B1.rotation,
            style: {
              x: o.x,
              y: o.y,
              align: o.align,
              verticalAlign: o.verticalAlign,
              width: o.width,
              height: o.height,
              fontSize: o.fontSize,
            },
            cursor: i.cursor,
            attachedPos: a.position,
            attachedRot: a.rotation,
          },
        });
      }),
      (U1.prototype.addLabelsOfSeries = function (t) {
        var n = this,
          i = (this._chartViewList.push(t), t.__model),
          r = i.get("labelLayout");
        (S(r) || ht(r).length) &&
          t.group.traverse(function (t) {
            if (t.ignore) return !0;
            var e = t.getTextContent(),
              t = D(t);
            e &&
              !e.disableLabelLayout &&
              n._addLabel(t.dataIndex, t.dataType, i, e, r);
          });
      }),
      (U1.prototype.updateLayoutConfig = function (t) {
        var e = t.getWidth(),
          n = t.getHeight();
        for (var i = 0; i < this._labelList.length; i++) {
          var r = this._labelList[i],
            o = r.label,
            a = o.__hostTarget,
            s = r.defaultAttr,
            l = void 0,
            l =
              (S(r.layoutOption) ? r.layoutOption(E1(r, a)) : r.layoutOption) ||
              {},
            u = ((r.computedLayoutOption = l), Math.PI / 180),
            h =
              (a &&
                a.setTextConfig({
                  local: !1,
                  position: null != l.x || null != l.y ? null : s.attachedPos,
                  rotation: null != l.rotate ? l.rotate * u : s.attachedRot,
                  offset: [l.dx || 0, l.dy || 0],
                }),
              !1);
          null != l.x
            ? ((o.x = Kr(l.x, e)), o.setStyle("x", 0), (h = !0))
            : ((o.x = s.x), o.setStyle("x", s.style.x)),
            null != l.y
              ? ((o.y = Kr(l.y, n)), o.setStyle("y", 0), (h = !0))
              : ((o.y = s.y), o.setStyle("y", s.style.y)),
            l.labelLinePoints &&
              (c = a.getTextGuideLine()) &&
              (c.setShape({ points: l.labelLinePoints }), (h = !1)),
            (F1(o).needsUpdateLabelLine = h),
            (o.rotation = null != l.rotate ? l.rotate * u : s.rotation),
            (o.scaleX = s.scaleX),
            (o.scaleY = s.scaleY);
          for (var c, p = 0; p < z1.length; p++) {
            var d = z1[p];
            o.setStyle(d, (null != l[d] ? l : s.style)[d]);
          }
          l.draggable
            ? ((o.draggable = !0),
              (o.cursor = "move"),
              a &&
                ((c = r.seriesModel),
                null != r.dataIndex &&
                  (c = r.seriesModel
                    .getData(r.dataType)
                    .getItemModel(r.dataIndex)),
                o.on(
                  "drag",
                  (function (t, e) {
                    return function () {
                      M1(t, e);
                    };
                  })(a, c.getModel("labelLine"))
                )))
            : (o.off("drag"), (o.cursor = s.cursor));
        }
      }),
      (U1.prototype.layout = function (t) {
        var e,
          n = t.getWidth(),
          t = t.getHeight(),
          i = L1(this._labelList),
          r = ut(i, function (t) {
            return "shiftX" === t.layoutOption.moveOverlap;
          }),
          o = ut(i, function (t) {
            return "shiftY" === t.layoutOption.moveOverlap;
          });
        O1(r, "x", "width", 0, n, e),
          R1(o, 0, t),
          N1(
            ut(i, function (t) {
              return t.layoutOption.hideOverlap;
            })
          );
      }),
      (U1.prototype.processLabelsOverall = function () {
        var a = this;
        E(this._chartViewList, function (t) {
          var i = t.__model,
            r = t.ignoreLabelLineUpdate,
            o = i.isAnimationEnabled();
          t.group.traverse(function (t) {
            if (t.ignore && !t.forceLabelAnimation) return !0;
            var e = !r,
              n = t.getTextContent();
            (e = !e && n ? F1(n).needsUpdateLabelLine : e) &&
              a._updateLabelLine(t, i),
              o && a._animateLabels(t, i);
          });
        });
      }),
      (U1.prototype._updateLabelLine = function (t, e) {
        var n = t.getTextContent(),
          i = D(t),
          r = i.dataIndex;
        n &&
          null != r &&
          ((e = (n = e.getData(i.dataType)).getItemModel(r)),
          (i = {}),
          (r = n.getItemVisual(r, "style")) &&
            ((n = n.getVisual("drawType")), (i.stroke = r[n])),
          (r = e.getModel("labelLine")),
          A1(t, P1(e), i),
          M1(t, r));
      }),
      (U1.prototype._animateLabels = function (t, e) {
        var n,
          i,
          r,
          o,
          a,
          s,
          l,
          u,
          h,
          c,
          p,
          d,
          f,
          g = t.getTextContent(),
          y = t.getTextGuideLine();
        !g ||
          (!t.forceLabelAnimation &&
            (g.ignore || g.invisible || t.disableLabelAnimation || kh(t))) ||
          ((d = (f = F1(g)).oldLayout),
          (n = (i = D(t)).dataIndex),
          (s = { x: g.x, y: g.y, rotation: g.rotation }),
          (i = e.getData(i.dataType)),
          d
            ? (g.attr(d),
              (t = t.prevStates) &&
                (0 <= I(t, "select") && g.attr(f.oldLayoutSelect),
                0 <= I(t, "emphasis")) &&
                g.attr(f.oldLayoutEmphasis),
              Ih(g, s, e, n))
            : (g.attr(s),
              vc(g).valueAnimation ||
                ((t = R(g.style.opacity, 1)),
                (g.style.opacity = 0),
                Dh(g, { style: { opacity: t } }, e, n))),
          (f.oldLayout = s),
          g.states.select &&
            (H1((t = f.oldLayoutSelect = {}), s, G1),
            H1(t, g.states.select, G1)),
          g.states.emphasis &&
            (H1((t = f.oldLayoutEmphasis = {}), s, G1),
            H1(t, g.states.emphasis, G1)),
          (o = n),
          (a = i),
          (l = s = e),
          (p = vc((r = g))).valueAnimation &&
            p.prevValue !== p.value &&
            ((u = p.defaultInterpolatedText),
            (h = R(p.interpolatedValue, p.prevValue)),
            (c = p.value),
            (r.percent = 0),
            (null == p.prevValue ? Dh : Ih)(
              r,
              { percent: 1 },
              s,
              o,
              null,
              function (t) {
                var e = Eo(a, p.precision, h, c, t),
                  t =
                    ((p.interpolatedValue = 1 === t ? null : e),
                    uc(
                      {
                        labelDataIndex: o,
                        labelFetcher: l,
                        defaultText: u ? u(e) : e + "",
                      },
                      p.statesModels,
                      e
                    ));
                lc(r, t);
              }
            ))),
          !y ||
            y.ignore ||
            y.invisible ||
            ((d = (f = V1(y)).oldLayout),
            (t = { points: y.shape.points }),
            d
              ? (y.attr({ shape: d }), Ih(y, { shape: t }, e))
              : (y.setShape(t),
                (y.style.strokePercent = 0),
                Dh(y, { style: { strokePercent: 1 } }, e)),
            (f.oldLayout = t));
      }),
      U1);
  function U1() {
    (this._labelList = []), (this._chartViewList = []);
  }
  var X1 = ko();
  function Y1(t) {
    t.registerUpdateLifecycle("series:beforeupdate", function (t, e, n) {
      (X1(e).labelManager || (X1(e).labelManager = new W1())).clearLabels();
    }),
      t.registerUpdateLifecycle("series:layoutlabels", function (t, e, n) {
        var i = X1(e).labelManager;
        n.updatedSeries.forEach(function (t) {
          i.addLabelsOfSeries(e.getViewOfSeriesModel(t));
        }),
          i.updateLayoutConfig(e),
          i.layout(e),
          i.processLabelsOverall();
      });
  }
  function q1(t, e, n) {
    var i = X.createCanvas(),
      r = e.getWidth(),
      e = e.getHeight(),
      o = i.style;
    return (
      o &&
        ((o.position = "absolute"),
        (o.left = "0"),
        (o.top = "0"),
        (o.width = r + "px"),
        (o.height = e + "px"),
        i.setAttribute("data-zr-dom-id", t)),
      (i.width = r * n),
      (i.height = e * n),
      i
    );
  }
  E_(Y1);
  u(K1, (Z1 = le)),
    (K1.prototype.getElementCount = function () {
      return this.__endIndex - this.__startIndex;
    }),
    (K1.prototype.afterBrush = function () {
      (this.__prevStartIndex = this.__startIndex),
        (this.__prevEndIndex = this.__endIndex);
    }),
    (K1.prototype.initContext = function () {
      (this.ctx = this.dom.getContext("2d")), (this.ctx.dpr = this.dpr);
    }),
    (K1.prototype.setUnpainted = function () {
      this.__firstTimePaint = !0;
    }),
    (K1.prototype.createBackBuffer = function () {
      var t = this.dpr;
      (this.domBack = q1("back-" + this.id, this.painter, t)),
        (this.ctxBack = this.domBack.getContext("2d")),
        1 !== t && this.ctxBack.scale(t, t);
    }),
    (K1.prototype.createRepaintRects = function (t, e, n, i) {
      if (this.__firstTimePaint) return (this.__firstTimePaint = !1), null;
      var r,
        l = [],
        u = this.maxRepaintRectCount,
        h = !1,
        c = new W(0, 0, 0, 0);
      function o(t) {
        if (t.isFinite() && !t.isZero())
          if (0 === l.length) (e = new W(0, 0, 0, 0)).copy(t), l.push(e);
          else {
            for (var e, n = !1, i = 1 / 0, r = 0, o = 0; o < l.length; ++o) {
              var a = l[o];
              if (a.intersect(t)) {
                var s = new W(0, 0, 0, 0);
                s.copy(a), s.union(t), (l[o] = s), (n = !0);
                break;
              }
              h &&
                (c.copy(t),
                c.union(a),
                (s = t.width * t.height),
                (a = a.width * a.height),
                (a = c.width * c.height - s - a) < i) &&
                ((i = a), (r = o));
            }
            h && (l[r].union(t), (n = !0)),
              n || ((e = new W(0, 0, 0, 0)).copy(t), l.push(e)),
              (h = h || l.length >= u);
          }
      }
      for (var a, s = this.__startIndex; s < this.__endIndex; ++s)
        (p = t[s]) &&
          ((f = p.shouldBePainted(n, i, !0, !0)),
          (d =
            p.__isRendered && (p.__dirty & mn || !f)
              ? p.getPrevPaintRect()
              : null) && o(d),
          (a =
            f && (p.__dirty & mn || !p.__isRendered)
              ? p.getPaintRect()
              : null)) &&
          o(a);
      for (s = this.__prevStartIndex; s < this.__prevEndIndex; ++s) {
        var p,
          d,
          f = (p = e[s]).shouldBePainted(n, i, !0, !0);
        !p ||
          (f && p.__zr) ||
          !p.__isRendered ||
          ((d = p.getPrevPaintRect()) && o(d));
      }
      do {
        for (r = !1, s = 0; s < l.length; )
          if (l[s].isZero()) l.splice(s, 1);
          else {
            for (var g = s + 1; g < l.length; )
              l[s].intersect(l[g])
                ? ((r = !0), l[s].union(l[g]), l.splice(g, 1))
                : g++;
            s++;
          }
      } while (r);
      return (this._paintRects = l);
    }),
    (K1.prototype.debugGetPaintRects = function () {
      return (this._paintRects || []).slice();
    }),
    (K1.prototype.resize = function (t, e) {
      var n = this.dpr,
        i = this.dom,
        r = i.style,
        o = this.domBack;
      r && ((r.width = t + "px"), (r.height = e + "px")),
        (i.width = t * n),
        (i.height = e * n),
        o &&
          ((o.width = t * n), (o.height = e * n), 1 !== n) &&
          this.ctxBack.scale(n, n);
    }),
    (K1.prototype.clear = function (t, o, e) {
      var n = this.dom,
        a = this.ctx,
        i = n.width,
        r = n.height,
        s = ((o = o || this.clearColor), this.motionBlur && !t),
        l = this.lastFrameAlpha,
        u = this.dpr,
        h = this,
        c =
          (s &&
            (this.domBack || this.createBackBuffer(),
            (this.ctxBack.globalCompositeOperation = "copy"),
            this.ctxBack.drawImage(n, 0, 0, i / u, r / u)),
          this.domBack);
      function p(t, e, n, i) {
        var r;
        a.clearRect(t, e, n, i),
          o &&
            "transparent" !== o &&
            ((r = void 0),
            mt(o)
              ? ((r =
                  ((o.global || (o.__width === n && o.__height === i)) &&
                    o.__canvasGradient) ||
                  Jy(a, o, { x: 0, y: 0, width: n, height: i })),
                (o.__canvasGradient = r),
                (o.__width = n),
                (o.__height = i))
              : vt(o) &&
                ((o.scaleX = o.scaleX || u),
                (o.scaleY = o.scaleY || u),
                (r = um(a, o, {
                  dirty: function () {
                    h.setUnpainted(), h.__painter.refresh();
                  },
                }))),
            a.save(),
            (a.fillStyle = r || o),
            a.fillRect(t, e, n, i),
            a.restore()),
          s &&
            (a.save(),
            (a.globalAlpha = l),
            a.drawImage(c, t, e, n, i),
            a.restore());
      }
      !e || s
        ? p(0, 0, i, r)
        : e.length &&
          E(e, function (t) {
            p(t.x * u, t.y * u, t.width * u, t.height * u);
          });
    });
  var Z1,
    j1 = K1;
  function K1(t, e, n) {
    var i,
      r = Z1.call(this) || this,
      t =
        ((r.motionBlur = !1),
        (r.lastFrameAlpha = 0.7),
        (r.dpr = 1),
        (r.virtual = !1),
        (r.config = {}),
        (r.incremental = !1),
        (r.zlevel = 0),
        (r.maxRepaintRectCount = 5),
        (r.__dirty = !0),
        (r.__firstTimePaint = !0),
        (r.__used = !1),
        (r.__drawIndex = 0),
        (r.__startIndex = 0),
        (r.__endIndex = 0),
        (r.__prevStartIndex = null),
        (r.__prevEndIndex = null),
        (n = n || ar),
        "string" == typeof t ? (i = q1(t, e, n)) : O(t) && (t = (i = t).id),
        (r.id = t),
        (r.dom = i).style);
    return (
      t &&
        (zt(i),
        (i.onselectstart = function () {
          return !1;
        }),
        (t.padding = "0"),
        (t.margin = "0"),
        (t.borderWidth = "0")),
      (r.painter = e),
      (r.dpr = n),
      r
    );
  }
  var $1 = 314159;
  (m.prototype.getType = function () {
    return "canvas";
  }),
    (m.prototype.isSingleCanvas = function () {
      return this._singleCanvas;
    }),
    (m.prototype.getViewportRoot = function () {
      return this._domRoot;
    }),
    (m.prototype.getViewportRootOffset = function () {
      var t = this.getViewportRoot();
      if (t)
        return { offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0 };
    }),
    (m.prototype.refresh = function (t) {
      var e = this.storage.getDisplayList(!0),
        n = this._prevDisplayList,
        i = this._zlevelList;
      (this._redrawId = Math.random()),
        this._paintList(e, n, t, this._redrawId);
      for (var r = 0; r < i.length; r++) {
        var o,
          a = i[r],
          a = this._layers[a];
        !a.__builtin__ &&
          a.refresh &&
          ((o = 0 === r ? this._backgroundColor : null), a.refresh(o));
      }
      return (
        this._opts.useDirtyRect && (this._prevDisplayList = e.slice()), this
      );
    }),
    (m.prototype.refreshHover = function () {
      this._paintHoverList(this.storage.getDisplayList(!1));
    }),
    (m.prototype._paintHoverList = function (t) {
      var e = t.length,
        n = this._hoverlayer;
      if ((n && n.clear(), e)) {
        for (
          var i,
            r = {
              inHover: !0,
              viewWidth: this._width,
              viewHeight: this._height,
            },
            o = 0;
          o < e;
          o++
        ) {
          var a = t[o];
          a.__inHover &&
            ((n = n || (this._hoverlayer = this.getLayer(1e5))),
            i || (i = n.ctx).save(),
            bm(i, a, r, o === e - 1));
        }
        i && i.restore();
      }
    }),
    (m.prototype.getHoverLayer = function () {
      return this.getLayer(1e5);
    }),
    (m.prototype.paintOne = function (t, e) {
      wm(t, e);
    }),
    (m.prototype._paintList = function (t, e, n, i) {
      var r, o, a;
      this._redrawId === i &&
        ((n = n || !1),
        this._updateLayerStatus(t),
        (r = (o = this._doPaintList(t, e, n)).finished),
        (o = o.needsRefreshHover),
        this._needsManuallyCompositing && this._compositeManually(),
        o && this._paintHoverList(t),
        r
          ? this.eachLayer(function (t) {
              t.afterBrush && t.afterBrush();
            })
          : ((a = this),
            Mn(function () {
              a._paintList(t, e, n, i);
            })));
    }),
    (m.prototype._compositeManually = function () {
      var e = this.getLayer($1).ctx,
        n = this._domRoot.width,
        i = this._domRoot.height;
      e.clearRect(0, 0, n, i),
        this.eachBuiltinLayer(function (t) {
          t.virtual && e.drawImage(t.dom, 0, 0, n, i);
        });
    }),
    (m.prototype._doPaintList = function (d, f, g) {
      for (
        var y = this, m = [], v = this._opts.useDirtyRect, t = 0;
        t < this._zlevelList.length;
        t++
      ) {
        var e = this._zlevelList[t],
          e = this._layers[e];
        e.__builtin__ &&
          e !== this._hoverlayer &&
          (e.__dirty || g) &&
          m.push(e);
      }
      for (var _ = !0, x = !1, w = this, n = 0; n < m.length; n++)
        !(function (t) {
          function e(t) {
            var e = {
              inHover: !1,
              allClipped: !1,
              prevEl: null,
              viewWidth: y._width,
              viewHeight: y._height,
            };
            for (i = s; i < r.__endIndex; i++) {
              var n = d[i];
              if (
                (n.__inHover && (x = !0),
                y._doPaintEl(n, r, v, t, e, i === r.__endIndex - 1),
                l && 15 < Date.now() - u)
              )
                break;
            }
            e.prevElClipPaths && o.restore();
          }
          var i,
            n,
            r = m[t],
            o = r.ctx,
            a = v && r.createRepaintRects(d, f, w._width, w._height),
            s = g ? r.__startIndex : r.__drawIndex,
            l = !g && r.incremental && Date.now,
            u = l && Date.now(),
            t = r.zlevel === w._zlevelList[0] ? w._backgroundColor : null;
          (r.__startIndex !== r.__endIndex &&
            (s !== r.__startIndex ||
              ((n = d[s]).incremental && n.notClear && !g))) ||
            r.clear(!1, t, a),
            -1 === s &&
              (console.error("For some unknown reason. drawIndex is -1"),
              (s = r.__startIndex));
          if (a)
            if (0 === a.length) i = r.__endIndex;
            else
              for (var h = w.dpr, c = 0; c < a.length; ++c) {
                var p = a[c];
                o.save(),
                  o.beginPath(),
                  o.rect(p.x * h, p.y * h, p.width * h, p.height * h),
                  o.clip(),
                  e(p),
                  o.restore();
              }
          else o.save(), e(), o.restore();
          (r.__drawIndex = i), r.__drawIndex < r.__endIndex && (_ = !1);
        })(n);
      return (
        b.wxa &&
          E(this._layers, function (t) {
            t && t.ctx && t.ctx.draw && t.ctx.draw();
          }),
        { finished: _, needsRefreshHover: x }
      );
    }),
    (m.prototype._doPaintEl = function (t, e, n, i, r, o) {
      e = e.ctx;
      n
        ? ((n = t.getPaintRect()),
          (!i || (n && n.intersect(i))) &&
            (bm(e, t, r, o), t.setPrevPaintRect(n)))
        : bm(e, t, r, o);
    }),
    (m.prototype.getLayer = function (t, e) {
      this._singleCanvas && !this._needsManuallyCompositing && (t = $1);
      var n = this._layers[t];
      return (
        n ||
          (((n = new j1("zr_" + t, this, this.dpr)).zlevel = t),
          (n.__builtin__ = !0),
          this._layerConfig[t]
            ? d(n, this._layerConfig[t], !0)
            : this._layerConfig[t - 0.01] &&
              d(n, this._layerConfig[t - 0.01], !0),
          e && (n.virtual = e),
          this.insertLayer(t, n),
          n.initContext()),
        n
      );
    }),
    (m.prototype.insertLayer = function (t, e) {
      var n,
        i = this._layers,
        r = this._zlevelList,
        o = r.length,
        a = this._domRoot,
        s = null,
        l = -1;
      if (
        !i[t] &&
        (n = e) &&
        (n.__builtin__ ||
          ("function" == typeof n.resize && "function" == typeof n.refresh))
      ) {
        if (0 < o && t > r[0]) {
          for (l = 0; l < o - 1 && !(r[l] < t && r[l + 1] > t); l++);
          s = i[r[l]];
        }
        r.splice(l + 1, 0, t),
          (i[t] = e).virtual ||
            (s
              ? (n = s.dom).nextSibling
                ? a.insertBefore(e.dom, n.nextSibling)
                : a.appendChild(e.dom)
              : a.firstChild
              ? a.insertBefore(e.dom, a.firstChild)
              : a.appendChild(e.dom)),
          (e.__painter = this);
      }
    }),
    (m.prototype.eachLayer = function (t, e) {
      for (var n = this._zlevelList, i = 0; i < n.length; i++) {
        var r = n[i];
        t.call(e, this._layers[r], r);
      }
    }),
    (m.prototype.eachBuiltinLayer = function (t, e) {
      for (var n = this._zlevelList, i = 0; i < n.length; i++) {
        var r = n[i],
          o = this._layers[r];
        o.__builtin__ && t.call(e, o, r);
      }
    }),
    (m.prototype.eachOtherLayer = function (t, e) {
      for (var n = this._zlevelList, i = 0; i < n.length; i++) {
        var r = n[i],
          o = this._layers[r];
        o.__builtin__ || t.call(e, o, r);
      }
    }),
    (m.prototype.getLayers = function () {
      return this._layers;
    }),
    (m.prototype._updateLayerStatus = function (t) {
      function e(t) {
        r && (r.__endIndex !== t && (r.__dirty = !0), (r.__endIndex = t));
      }
      if (
        (this.eachBuiltinLayer(function (t, e) {
          t.__dirty = t.__used = !1;
        }),
        this._singleCanvas)
      )
        for (var n = 1; n < t.length; n++)
          if ((s = t[n]).zlevel !== t[n - 1].zlevel || s.incremental) {
            this._needsManuallyCompositing = !0;
            break;
          }
      for (var i, r = null, o = 0, a = 0; a < t.length; a++) {
        var s,
          l = (s = t[a]).zlevel,
          u = void 0;
        i !== l && ((i = l), (o = 0)),
          s.incremental
            ? (((u = this.getLayer(
                l + 0.001,
                this._needsManuallyCompositing
              )).incremental = !0),
              (o = 1))
            : (u = this.getLayer(
                l + (0 < o ? 0.01 : 0),
                this._needsManuallyCompositing
              )),
          u.__builtin__ ||
            it("ZLevel " + l + " has been used by unkown layer " + u.id),
          u !== r &&
            ((u.__used = !0),
            u.__startIndex !== a && (u.__dirty = !0),
            (u.__startIndex = a),
            u.incremental ? (u.__drawIndex = -1) : (u.__drawIndex = a),
            e(a),
            (r = u)),
          s.__dirty & mn &&
            !s.__inHover &&
            ((u.__dirty = !0), u.incremental) &&
            u.__drawIndex < 0 &&
            (u.__drawIndex = a);
      }
      e(a),
        this.eachBuiltinLayer(function (t, e) {
          !t.__used &&
            0 < t.getElementCount() &&
            ((t.__dirty = !0),
            (t.__startIndex = t.__endIndex = t.__drawIndex = 0)),
            t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex);
        });
    }),
    (m.prototype.clear = function () {
      return this.eachBuiltinLayer(this._clearLayer), this;
    }),
    (m.prototype._clearLayer = function (t) {
      t.clear();
    }),
    (m.prototype.setBackgroundColor = function (t) {
      (this._backgroundColor = t),
        E(this._layers, function (t) {
          t.setUnpainted();
        });
    }),
    (m.prototype.configLayer = function (t, e) {
      if (e) {
        var n = this._layerConfig;
        n[t] ? d(n[t], e, !0) : (n[t] = e);
        for (var i = 0; i < this._zlevelList.length; i++) {
          var r = this._zlevelList[i];
          (r !== t && r !== t + 0.01) || d(this._layers[r], n[t], !0);
        }
      }
    }),
    (m.prototype.delLayer = function (t) {
      var e = this._layers,
        n = this._zlevelList,
        i = e[t];
      i &&
        (i.dom.parentNode.removeChild(i.dom),
        delete e[t],
        n.splice(I(n, t), 1));
    }),
    (m.prototype.resize = function (t, e) {
      if (this._domRoot.style) {
        var n = this._domRoot,
          i = ((n.style.display = "none"), this._opts),
          r = this.root;
        if (
          (null != t && (i.width = t),
          null != e && (i.height = e),
          (t = em(r, 0, i)),
          (e = em(r, 1, i)),
          (n.style.display = ""),
          this._width !== t || e !== this._height)
        ) {
          for (var o in ((n.style.width = t + "px"),
          (n.style.height = e + "px"),
          this._layers))
            this._layers.hasOwnProperty(o) && this._layers[o].resize(t, e);
          this.refresh(!0);
        }
        (this._width = t), (this._height = e);
      } else {
        if (null == t || null == e) return;
        (this._width = t), (this._height = e), this.getLayer($1).resize(t, e);
      }
      return this;
    }),
    (m.prototype.clearLayer = function (t) {
      t = this._layers[t];
      t && t.clear();
    }),
    (m.prototype.dispose = function () {
      (this.root.innerHTML = ""),
        (this.root = this.storage = this._domRoot = this._layers = null);
    }),
    (m.prototype.getRenderedCanvas = function (t) {
      if (this._singleCanvas && !this._compositeManually)
        return this._layers[$1].dom;
      var e = new j1("image", this, (t = t || {}).pixelRatio || this.dpr),
        n =
          (e.initContext(),
          e.clear(!1, t.backgroundColor || this._backgroundColor),
          e.ctx);
      if (t.pixelRatio <= this.dpr) {
        this.refresh();
        var i = e.dom.width,
          r = e.dom.height;
        this.eachLayer(function (t) {
          t.__builtin__
            ? n.drawImage(t.dom, 0, 0, i, r)
            : t.renderToCanvas && (n.save(), t.renderToCanvas(n), n.restore());
        });
      } else
        for (
          var o = {
              inHover: !1,
              viewWidth: this._width,
              viewHeight: this._height,
            },
            a = this.storage.getDisplayList(!0),
            s = 0,
            l = a.length;
          s < l;
          s++
        ) {
          var u = a[s];
          bm(n, u, o, s === l - 1);
        }
      return e.dom;
    }),
    (m.prototype.getWidth = function () {
      return this._width;
    }),
    (m.prototype.getHeight = function () {
      return this._height;
    });
  var Q1 = m;
  function m(t, e, n, i) {
    (this.type = "canvas"),
      (this._zlevelList = []),
      (this._prevDisplayList = []),
      (this._layers = {}),
      (this._layerConfig = {}),
      (this._needsManuallyCompositing = !1),
      (this.type = "canvas");
    var r,
      o,
      a = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase(),
      e =
        ((this._opts = n = L({}, n || {})),
        (this.dpr = n.devicePixelRatio || ar),
        (this._singleCanvas = a),
        (this.root = t).style && (zt(t), (t.innerHTML = "")),
        (this.storage = e),
        this._zlevelList),
      s = ((this._prevDisplayList = []), this._layers);
    a
      ? ((r = (a = t).width),
        (o = a.height),
        null != n.width && (r = n.width),
        null != n.height && (o = n.height),
        (this.dpr = n.devicePixelRatio || 1),
        (a.width = r * this.dpr),
        (a.height = o * this.dpr),
        (this._width = r),
        (this._height = o),
        ((r = new j1(a, this, this.dpr)).__builtin__ = !0),
        r.initContext(),
        ((s[$1] = r).zlevel = $1),
        e.push($1),
        (this._domRoot = t))
      : ((this._width = em(t, 0, n)),
        (this._height = em(t, 1, n)),
        (r = this._domRoot =
          ((o = this._width),
          (a = this._height),
          ((s = document.createElement("div")).style.cssText =
            [
              "position:relative",
              "width:" + o + "px",
              "height:" + a + "px",
              "padding:0",
              "margin:0",
              "border-width:0",
            ].join(";") + ";"),
          s)),
        t.appendChild(r));
  }
  u(ex, (J1 = g)),
    (ex.prototype.init = function (t, e, n) {
      J1.prototype.init.call(this, t, e, n),
        (this._sourceManager = new cg(this)),
        dg(this);
    }),
    (ex.prototype.mergeOption = function (t, e) {
      J1.prototype.mergeOption.call(this, t, e), dg(this);
    }),
    (ex.prototype.optionUpdated = function () {
      this._sourceManager.dirty();
    }),
    (ex.prototype.getSourceManager = function () {
      return this._sourceManager;
    }),
    (ex.type = "dataset"),
    (ex.defaultOption = { seriesLayoutBy: $p });
  var J1,
    tx = ex;
  function ex() {
    var t = (null !== J1 && J1.apply(this, arguments)) || this;
    return (t.type = "dataset"), t;
  }
  u(rx, (nx = Wg)), (rx.type = "dataset");
  var nx,
    ix = rx;
  function rx() {
    var t = (null !== nx && nx.apply(this, arguments)) || this;
    return (t.type = "dataset"), t;
  }
  function ox(t) {
    t.registerComponentModel(tx), t.registerComponentView(ix);
  }
  E_([
    function (t) {
      t.registerPainter("canvas", Q1);
    },
    ox,
  ]),
    E_(Y1);
  var ax = {
      average: function (t) {
        for (var e = 0, n = 0, i = 0; i < t.length; i++)
          isNaN(t[i]) || ((e += t[i]), n++);
        return 0 === n ? NaN : e / n;
      },
      sum: function (t) {
        for (var e = 0, n = 0; n < t.length; n++) e += t[n] || 0;
        return e;
      },
      max: function (t) {
        for (var e = -1 / 0, n = 0; n < t.length; n++) t[n] > e && (e = t[n]);
        return isFinite(e) ? e : NaN;
      },
      min: function (t) {
        for (var e = 1 / 0, n = 0; n < t.length; n++) t[n] < e && (e = t[n]);
        return isFinite(e) ? e : NaN;
      },
      nearest: function (t) {
        return t[0];
      },
    },
    sx = function (t) {
      return Math.round(t.length / 2);
    };
  function lx(t) {
    return {
      seriesType: t,
      reset: function (t, e, n) {
        var i,
          r = t.getData(),
          o = t.get("sampling"),
          a = t.coordinateSystem,
          s = r.count();
        10 < s &&
          "cartesian2d" === a.type &&
          o &&
          ((i = a.getBaseAxis()),
          (a = a.getOtherAxis(i)),
          (i = i.getExtent()),
          (n = n.getDevicePixelRatio()),
          (i = Math.abs(i[1] - i[0]) * (n || 1)),
          (n = Math.round(s / i)),
          isFinite(n)) &&
          1 < n &&
          ("lttb" === o &&
            t.setData(r.lttbDownSample(r.mapDimension(a.dim), 1 / n)),
          (s = void 0),
          H(o) ? (s = ax[o]) : S(o) && (s = o),
          s) &&
          t.setData(r.downSample(r.mapDimension(a.dim), 1 / n, s, sx));
      },
    };
  }
  u(hx, (ux = Ng)),
    (hx.prototype.getInitialData = function (t, e) {
      return Mv(null, this, { useEncodeDefaulter: !0 });
    }),
    (hx.prototype.getMarkerPosition = function (t, c, e) {
      var p,
        d,
        n = this.coordinateSystem;
      return n && n.clampData
        ? ((p = n.clampData(t)),
          (d = n.dataToPoint(p)),
          e
            ? E(n.getAxes(), function (t, e) {
                if ("category" === t.type && null != c) {
                  var n = t.getTicksCoords(),
                    i = p[e],
                    r = "x1" === c[e] || "y1" === c[e];
                  if ((r && (i += 1), !(n.length < 2)))
                    if (2 === n.length)
                      d[e] = t.toGlobalCoord(t.getExtent()[r ? 1 : 0]);
                    else {
                      for (
                        var o = void 0, a = void 0, s = 1, l = 0;
                        l < n.length;
                        l++
                      ) {
                        var u = n[l].coord,
                          h =
                            l === n.length - 1
                              ? n[l - 1].tickValue + s
                              : n[l].tickValue;
                        if (h === i) {
                          a = u;
                          break;
                        }
                        if (h < i) o = u;
                        else if (null != o && i < h) {
                          a = (u + o) / 2;
                          break;
                        }
                        1 === l && (s = h - n[0].tickValue);
                      }
                      null == a && (a = (o ? n[n.length - 1] : n[0]).coord),
                        (d[e] = t.toGlobalCoord(a));
                    }
                }
              })
            : ((e = (t = this.getData()).getLayout("offset")),
              (t = t.getLayout("size")),
              (n = n.getBaseAxis().isHorizontal() ? 0 : 1),
              (d[n] += e + t / 2)),
          d)
        : [NaN, NaN];
    }),
    (hx.type = "series.__base_bar__"),
    (hx.defaultOption = {
      z: 2,
      coordinateSystem: "cartesian2d",
      legendHoverLink: !0,
      barMinHeight: 0,
      barMinAngle: 0,
      large: !1,
      largeThreshold: 400,
      progressive: 3e3,
      progressiveChunkMode: "mod",
    });
  var ux,
    Tc = hx;
  function hx() {
    var t = (null !== ux && ux.apply(this, arguments)) || this;
    return (t.type = hx.type), t;
  }
  Ng.registerClass(Tc);
  u(dx, (cx = Tc)),
    (dx.prototype.getInitialData = function () {
      return Mv(null, this, {
        useEncodeDefaulter: !0,
        createInvertedIndices: !!this.get("realtimeSort", !0) || null,
      });
    }),
    (dx.prototype.getProgressive = function () {
      return !!this.get("large") && this.get("progressive");
    }),
    (dx.prototype.getProgressiveThreshold = function () {
      var t = this.get("progressiveThreshold"),
        e = this.get("largeThreshold");
      return (t = t < e ? e : t);
    }),
    (dx.prototype.brushSelector = function (t, e, n) {
      return n.rect(e.getItemLayout(t));
    }),
    (dx.type = "series.bar"),
    (dx.dependencies = ["grid", "polar"]),
    (dx.defaultOption = Ec(Tc.defaultOption, {
      clip: !0,
      roundCap: !1,
      showBackground: !1,
      backgroundStyle: {
        color: "rgba(180, 180, 180, 0.2)",
        borderColor: null,
        borderWidth: 0,
        borderType: "solid",
        borderRadius: 0,
        shadowBlur: 0,
        shadowColor: null,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        opacity: 1,
      },
      select: { itemStyle: { borderColor: "#212121" } },
      realtimeSort: !1,
    }));
  var cx,
    px = dx;
  function dx() {
    var t = (null !== cx && cx.apply(this, arguments)) || this;
    return (t.type = dx.type), t;
  }
  function fx(t, e, n, i, r) {
    var o = t.getArea(),
      a = o.x,
      s = o.y,
      l = o.width,
      o = o.height,
      u = n.get(["lineStyle", "width"]) || 2,
      h =
        ((a -= u / 2),
        (s -= u / 2),
        (l += u),
        (o += u),
        (a = Math.floor(a)),
        (l = Math.round(l)),
        new Is({ shape: { x: a, y: s, width: l, height: o } }));
    return (
      e &&
        ((e = (u = t.getBaseAxis()).isHorizontal()),
        (t = u.inverse),
        e
          ? (t && (h.shape.x += l), (h.shape.width = 0))
          : (t || (h.shape.y += o), (h.shape.height = 0)),
        (u = S(r)
          ? function (t) {
              r(t, h);
            }
          : null),
        Dh(h, { shape: { width: l, height: o, x: a, y: s } }, n, null, i, u)),
      h
    );
  }
  function gx(t, e, n) {
    var i = t.getArea(),
      r = $r(i.r0, 1),
      o = $r(i.r, 1),
      a = new Au({
        shape: {
          cx: $r(t.cx, 1),
          cy: $r(t.cy, 1),
          r0: r,
          r: o,
          startAngle: i.startAngle,
          endAngle: i.endAngle,
          clockwise: i.clockwise,
        },
      });
    return (
      e &&
        ("angle" === t.getBaseAxis().dim
          ? (a.shape.endAngle = i.startAngle)
          : (a.shape.r = r),
        Dh(a, { shape: { endAngle: i.endAngle, r: o } }, n)),
      a
    );
  }
  function yx() {
    (this.cx = 0),
      (this.cy = 0),
      (this.r0 = 0),
      (this.r = 0),
      (this.startAngle = 0),
      (this.endAngle = 2 * Math.PI),
      (this.clockwise = !0);
  }
  u(_x, (mx = j)),
    (_x.prototype.getDefaultShape = function () {
      return new yx();
    }),
    (_x.prototype.buildPath = function (t, e) {
      var n = e.cx,
        i = e.cy,
        r = Math.max(e.r0 || 0, 0),
        o = Math.max(e.r, 0),
        a = 0.5 * (o - r),
        s = r + a,
        l = e.startAngle,
        u = e.endAngle,
        e = e.clockwise,
        h = 2 * Math.PI,
        c = e ? u - l < h : l - u < h,
        h = (c || (l = u - (e ? h : -h)), Math.cos(l)),
        p = Math.sin(l),
        d = Math.cos(u),
        f = Math.sin(u);
      c
        ? (t.moveTo(h * r + n, p * r + i),
          t.arc(h * s + n, p * s + i, a, -Math.PI + l, l, !e))
        : t.moveTo(h * o + n, p * o + i),
        t.arc(n, i, o, l, u, !e),
        t.arc(d * s + n, f * s + i, a, u - 2 * Math.PI, u - Math.PI, !e),
        0 !== r && t.arc(n, i, r, u, l, e);
    });
  var mx,
    vx = _x;
  function _x(t) {
    t = mx.call(this, t) || this;
    return (t.type = "sausage"), t;
  }
  function xx(t, e) {
    return t.type === e;
  }
  function bx(t, e) {
    var n,
      i = t.mapDimensionsAll("defaultedLabel"),
      r = i.length;
    if (1 === r) return null != (n = xf(t, e, i[0])) ? n + "" : null;
    if (r) {
      for (var o = [], a = 0; a < i.length; a++) o.push(xf(t, e, i[a]));
      return o.join(" ");
    }
  }
  function Sx(t, e) {
    var n = t.mapDimensionsAll("defaultedLabel");
    if (!V(e)) return e + "";
    for (var i = [], r = 0; r < n.length; r++) {
      var o = t.getDimensionIndex(n[r]);
      0 <= o && i.push(e[o]);
    }
    return i.join(" ");
  }
  function Mx(t, e, n) {
    return e * Math.sin(t) * (n ? -1 : 1);
  }
  function Tx(t, e, n) {
    return e * Math.cos(t) * (n ? 1 : -1);
  }
  function Cx(t, e, n) {
    t = t.get("borderRadius");
    if (null == t) return n ? { cornerRadius: 0 } : null;
    V(t) || (t = [t, t, t, t]);
    var i = Math.abs(e.r || 0 - e.r0 || 0);
    return {
      cornerRadius: F(t, function (t) {
        return Tr(t, i);
      }),
    };
  }
  var Ix = Math.max,
    Dx = Math.min;
  u(Ox, (kx = Zg)),
    (Ox.prototype.render = function (t, e, n, i) {
      (this._model = t),
        this._removeOnRenderedListener(n),
        this._updateDrawMode(t);
      var r = t.get("coordinateSystem");
      ("cartesian2d" !== r && "polar" !== r) ||
        ((this._progressiveEls = null),
        this._isLargeDraw
          ? this._renderLarge(t, e, n)
          : this._renderNormal(t, e, n, i));
    }),
    (Ox.prototype.incrementalPrepareRender = function (t) {
      this._clear(), this._updateDrawMode(t), this._updateLargeClip(t);
    }),
    (Ox.prototype.incrementalRender = function (t, e) {
      (this._progressiveEls = []), this._incrementalRenderLarge(t, e);
    }),
    (Ox.prototype.eachRendered = function (t) {
      oc(this._progressiveEls || this.group, t);
    }),
    (Ox.prototype._updateDrawMode = function (t) {
      t = t.pipelineContext.large;
      (null != this._isLargeDraw && t === this._isLargeDraw) ||
        ((this._isLargeDraw = t), this._clear());
    }),
    (Ox.prototype._renderNormal = function (a, t, e, n) {
      var s,
        i,
        r,
        l = this.group,
        u = a.getData(),
        h = this._data,
        c = a.coordinateSystem,
        p = c.getBaseAxis(),
        d =
          ("cartesian2d" === c.type
            ? (s = p.isHorizontal())
            : "polar" === c.type && (s = "angle" === p.dim),
          a.isAnimationEnabled() ? a : null),
        f = (function (t, e) {
          var t = t.get("realtimeSort", !0),
            n = e.getBaseAxis();
          if (t && "category" === n.type && "cartesian2d" === e.type)
            return { baseAxis: n, otherAxis: e.getOtherAxis(n) };
        })(a, c),
        g = (f && this._enableRealtimeSort(f, u, e), a.get("clip", !0) || f),
        y =
          ((e = u),
          (r = (i = c).getArea && i.getArea()),
          !xx(i, "cartesian2d") ||
            ("category" === (i = i.getBaseAxis()).type && i.onBand) ||
            ((e = e.getLayout("bandWidth")),
            i.isHorizontal()
              ? ((r.x -= e), (r.width += 2 * e))
              : ((r.y -= e), (r.height += 2 * e))),
          r),
        m = (l.removeClipPath(), a.get("roundCap", !0)),
        v = a.get("showBackground", !0),
        _ = a.getModel("backgroundStyle"),
        x = _.get("borderRadius") || 0,
        w = [],
        b = this._backgroundEls,
        S = n && n.isInitSort,
        M = n && "changeAxisOrder" === n.type;
      function T(t) {
        var e = Fx[c.type](u, t),
          n =
            ((n = s),
            new ("polar" === c.type ? Au : Is)({
              shape: Zx(n, e, c),
              silent: !0,
              z2: 0,
            }));
        return (
          n.useStyle(_.getItemStyle()),
          "cartesian2d" === c.type
            ? n.setShape("r", x)
            : n.setShape("cornerRadius", x),
          (w[t] = n)
        );
      }
      u.diff(h)
        .add(function (t) {
          var e,
            n,
            i = u.getItemModel(t),
            r = Fx[c.type](u, t, i);
          v && T(t),
            u.hasValue(t) &&
              Bx[c.type](r) &&
              ((e = !1),
              g && (e = Px[c.type](y, r)),
              (n = Lx[c.type](a, u, t, r, s, d, p.model, !1, m)),
              f && (n.forceLabelAnimation = !0),
              Hx(n, u, t, i, r, a, s, "polar" === c.type),
              S
                ? n.attr({ shape: r })
                : f
                ? Rx(f, d, n, r, t, s, !1, !1)
                : Dh(n, { shape: r }, a, t),
              u.setItemGraphicEl(t, n),
              l.add(n),
              (n.ignore = e));
        })
        .update(function (t, e) {
          var n,
            i = u.getItemModel(t),
            r = Fx[c.type](u, t, i),
            o =
              (v &&
                ((o = void 0),
                0 === b.length
                  ? (o = T(e))
                  : ((o = b[e]).useStyle(_.getItemStyle()),
                    "cartesian2d" === c.type
                      ? o.setShape("r", x)
                      : o.setShape("cornerRadius", x),
                    (w[t] = o)),
                (n = Fx[c.type](u, t)),
                Ih(o, { shape: Zx(s, n, c) }, d, t)),
              h.getItemGraphicEl(e));
          u.hasValue(t) && Bx[c.type](r)
            ? ((n = !1),
              g && (n = Px[c.type](y, r)) && l.remove(o),
              o ? Oh(o) : (o = Lx[c.type](a, u, t, r, s, d, p.model, !!o, m)),
              f && (o.forceLabelAnimation = !0),
              M
                ? (e = o.getTextContent()) &&
                  null != (e = vc(e)).prevValue &&
                  (e.prevValue = e.value)
                : Hx(o, u, t, i, r, a, s, "polar" === c.type),
              S
                ? o.attr({ shape: r })
                : f
                ? Rx(f, d, o, r, t, s, !0, M)
                : Ih(o, { shape: r }, a, t, null),
              u.setItemGraphicEl(t, o),
              (o.ignore = n),
              l.add(o))
            : l.remove(o);
        })
        .remove(function (t) {
          var e = h.getItemGraphicEl(t);
          e && Lh(e, a, t);
        })
        .execute();
      var o = this._backgroundGroup || (this._backgroundGroup = new Fr());
      o.removeAll();
      for (var C = 0; C < w.length; ++C) o.add(w[C]);
      l.add(o), (this._backgroundEls = w), (this._data = u);
    }),
    (Ox.prototype._renderLarge = function (t, e, n) {
      this._clear(), Yx(t, this.group), this._updateLargeClip(t);
    }),
    (Ox.prototype._incrementalRenderLarge = function (t, e) {
      this._removeBackground(), Yx(e, this.group, this._progressiveEls, !0);
    }),
    (Ox.prototype._updateLargeClip = function (t) {
      var e,
        n,
        i =
          t.get("clip", !0) &&
          ((i = t.coordinateSystem),
          (r = !1),
          (t = t),
          i
            ? "polar" === i.type
              ? gx(i, r, t)
              : "cartesian2d" === i.type
              ? fx(i, r, t, e, n)
              : null
            : null),
        r = this.group;
      i ? r.setClipPath(i) : r.removeClipPath();
    }),
    (Ox.prototype._enableRealtimeSort = function (t, e, n) {
      var i,
        r,
        o = this;
      e.count() &&
        ((i = t.baseAxis),
        this._isFirstFrame
          ? (this._dispatchInitSort(e, t, n), (this._isFirstFrame = !1))
          : ((r = function (t) {
              (t = e.getItemGraphicEl(t)), (t = t && t.shape);
              return (
                (t && Math.abs(i.isHorizontal() ? t.height : t.width)) || 0
              );
            }),
            (this._onRendered = function () {
              o._updateSortWithinSameData(e, r, i, n);
            }),
            n.getZr().on("rendered", this._onRendered)));
    }),
    (Ox.prototype._dataSort = function (t, e, i) {
      var r = [];
      return (
        t.each(t.mapDimension(e.dim), function (t, e) {
          var n = i(e);
          r.push({
            dataIndex: e,
            mappedValue: null == n ? NaN : n,
            ordinalNumber: t,
          });
        }),
        r.sort(function (t, e) {
          return e.mappedValue - t.mappedValue;
        }),
        {
          ordinalNumbers: F(r, function (t) {
            return t.ordinalNumber;
          }),
        }
      );
    }),
    (Ox.prototype._isOrderChangedWithinSameData = function (t, e, n) {
      for (
        var i = n.scale,
          r = t.mapDimension(n.dim),
          o = Number.MAX_VALUE,
          a = 0,
          s = i.getOrdinalMeta().categories.length;
        a < s;
        ++a
      ) {
        var l = t.rawIndexOf(r, i.getRawOrdinalNumber(a)),
          l = l < 0 ? Number.MIN_VALUE : e(t.indexOfRawIndex(l));
        if (o < l) return !0;
        o = l;
      }
      return !1;
    }),
    (Ox.prototype._isOrderDifferentInView = function (t, e) {
      for (
        var n = e.scale,
          e = n.getExtent(),
          i = Math.max(0, e[0]),
          r = Math.min(e[1], n.getOrdinalMeta().categories.length - 1);
        i <= r;
        ++i
      )
        if (t.ordinalNumbers[i] !== n.getRawOrdinalNumber(i)) return !0;
    }),
    (Ox.prototype._updateSortWithinSameData = function (t, e, n, i) {
      this._isOrderChangedWithinSameData(t, e, n) &&
        ((t = this._dataSort(t, n, e)), this._isOrderDifferentInView(t, n)) &&
        (this._removeOnRenderedListener(i),
        i.dispatchAction({
          type: "changeAxisOrder",
          componentType: n.dim + "Axis",
          axisId: n.index,
          sortInfo: t,
        }));
    }),
    (Ox.prototype._dispatchInitSort = function (e, n, t) {
      var i = n.baseAxis,
        r = this._dataSort(e, i, function (t) {
          return e.get(e.mapDimension(n.otherAxis.dim), t);
        });
      t.dispatchAction({
        type: "changeAxisOrder",
        componentType: i.dim + "Axis",
        isInitSort: !0,
        axisId: i.index,
        sortInfo: r,
      });
    }),
    (Ox.prototype.remove = function (t, e) {
      this._clear(this._model), this._removeOnRenderedListener(e);
    }),
    (Ox.prototype.dispose = function (t, e) {
      this._removeOnRenderedListener(e);
    }),
    (Ox.prototype._removeOnRenderedListener = function (t) {
      this._onRendered &&
        (t.getZr().off("rendered", this._onRendered),
        (this._onRendered = null));
    }),
    (Ox.prototype._clear = function (e) {
      var t = this.group,
        n = this._data;
      e && e.isAnimationEnabled() && n && !this._isLargeDraw
        ? (this._removeBackground(),
          (this._backgroundEls = []),
          n.eachItemGraphicEl(function (t) {
            Lh(t, e, D(t).dataIndex);
          }))
        : t.removeAll(),
        (this._data = null),
        (this._isFirstFrame = !0);
    }),
    (Ox.prototype._removeBackground = function () {
      this.group.remove(this._backgroundGroup), (this._backgroundGroup = null);
    }),
    (Ox.type = "bar");
  var kx,
    Ax = Ox,
    Px = {
      cartesian2d: function (t, e) {
        var n = e.width < 0 ? -1 : 1,
          i = e.height < 0 ? -1 : 1,
          r =
            (n < 0 && ((e.x += e.width), (e.width = -e.width)),
            i < 0 && ((e.y += e.height), (e.height = -e.height)),
            t.x + t.width),
          o = t.y + t.height,
          a = Ix(e.x, t.x),
          s = Dx(e.x + e.width, r),
          t = Ix(e.y, t.y),
          l = Dx(e.y + e.height, o),
          u = s < a,
          h = l < t;
        return (
          (e.x = u && r < a ? s : a),
          (e.y = h && o < t ? l : t),
          (e.width = u ? 0 : s - a),
          (e.height = h ? 0 : l - t),
          n < 0 && ((e.x += e.width), (e.width = -e.width)),
          i < 0 && ((e.y += e.height), (e.height = -e.height)),
          u || h
        );
      },
      polar: function (t, e) {
        var n,
          i = e.r0 <= e.r ? 1 : -1,
          r = (i < 0 && ((n = e.r), (e.r = e.r0), (e.r0 = n)), Dx(e.r, t.r)),
          t = Ix(e.r0, t.r0),
          r = (e.r = r) - (e.r0 = t) < 0;
        return i < 0 && ((n = e.r), (e.r = e.r0), (e.r0 = n)), r;
      },
    },
    Lx = {
      cartesian2d: function (t, e, n, i, r, o, a, s, l) {
        i = new Is({ shape: L({}, i), z2: 1 });
        return (
          (i.__dataIndex = n),
          (i.name = "item"),
          o && (i.shape[r ? "height" : "width"] = 0),
          i
        );
      },
      polar: function (t, e, n, i, r, o, a, s, l) {
        var w,
          b,
          l = !r && l ? vx : Au,
          u = new l({ shape: i, z2: 1 }),
          h = ((u.name = "item"), Vx(r));
        return (
          (u.calculateTextPosition =
            ((w = h),
            (b = ({ isRoundCap: l === vx } || {}).isRoundCap),
            function (t, e, n) {
              var i = e.position;
              if (!i || i instanceof Array) return Cr(t, e, n);
              var i = w(i),
                r = null != e.distance ? e.distance : 5,
                o = this.shape,
                a = o.cx,
                s = o.cy,
                l = o.r,
                u = o.r0,
                h = (l + u) / 2,
                c = o.startAngle,
                p = o.endAngle,
                d = (c + p) / 2,
                f = b ? Math.abs(l - u) / 2 : 0,
                g = Math.cos,
                y = Math.sin,
                m = a + l * g(c),
                v = s + l * y(c),
                _ = "left",
                x = "top";
              switch (i) {
                case "startArc":
                  (m = a + (u - r) * g(d)),
                    (v = s + (u - r) * y(d)),
                    (_ = "center"),
                    (x = "top");
                  break;
                case "insideStartArc":
                  (m = a + (u + r) * g(d)),
                    (v = s + (u + r) * y(d)),
                    (_ = "center"),
                    (x = "bottom");
                  break;
                case "startAngle":
                  (m = a + h * g(c) + Mx(c, r + f, !1)),
                    (v = s + h * y(c) + Tx(c, r + f, !1)),
                    (_ = "right"),
                    (x = "middle");
                  break;
                case "insideStartAngle":
                  (m = a + h * g(c) + Mx(c, f - r, !1)),
                    (v = s + h * y(c) + Tx(c, f - r, !1)),
                    (_ = "left"),
                    (x = "middle");
                  break;
                case "middle":
                  (m = a + h * g(d)),
                    (v = s + h * y(d)),
                    (_ = "center"),
                    (x = "middle");
                  break;
                case "endArc":
                  (m = a + (l + r) * g(d)),
                    (v = s + (l + r) * y(d)),
                    (_ = "center"),
                    (x = "bottom");
                  break;
                case "insideEndArc":
                  (m = a + (l - r) * g(d)),
                    (v = s + (l - r) * y(d)),
                    (_ = "center"),
                    (x = "top");
                  break;
                case "endAngle":
                  (m = a + h * g(p) + Mx(p, r + f, !0)),
                    (v = s + h * y(p) + Tx(p, r + f, !0)),
                    (_ = "left"),
                    (x = "middle");
                  break;
                case "insideEndAngle":
                  (m = a + h * g(p) + Mx(p, f - r, !0)),
                    (v = s + h * y(p) + Tx(p, f - r, !0)),
                    (_ = "right"),
                    (x = "middle");
                  break;
                default:
                  return Cr(t, e, n);
              }
              return (
                ((t = t || {}).x = m),
                (t.y = v),
                (t.align = _),
                (t.verticalAlign = x),
                t
              );
            })),
          o &&
            ((h = {}),
            (u.shape[(l = r ? "r" : "endAngle")] = r ? i.r0 : i.startAngle),
            (h[l] = i[l]),
            (s ? Ih : Dh)(u, { shape: h }, o)),
          u
        );
      },
    };
  function Ox() {
    var t = kx.call(this) || this;
    return (t.type = Ox.type), (t._isFirstFrame = !0), t;
  }
  function Rx(t, e, n, i, r, o, a, s) {
    var l,
      o = o
        ? ((l = { x: i.x, width: i.width }), { y: i.y, height: i.height })
        : ((l = { y: i.y, height: i.height }), { x: i.x, width: i.width });
    s || (a ? Ih : Dh)(n, { shape: o }, e, r, null),
      (a ? Ih : Dh)(n, { shape: l }, e ? t.baseAxis.model : null, r);
  }
  function Nx(t, e) {
    for (var n = 0; n < e.length; n++) if (!isFinite(t[e[n]])) return 1;
  }
  var Ex = ["x", "y", "width", "height"],
    zx = ["cx", "cy", "r", "startAngle", "endAngle"],
    Bx = {
      cartesian2d: function (t) {
        return !Nx(t, Ex);
      },
      polar: function (t) {
        return !Nx(t, zx);
      },
    },
    Fx = {
      cartesian2d: function (t, e, n) {
        var t = t.getItemLayout(e),
          i =
            n &&
            ((e = t), (i = (n = n).get(["itemStyle", "borderColor"]))) &&
            "none" !== i
              ? ((i = n.get(["itemStyle", "borderWidth"]) || 0),
                (n = isNaN(e.width) ? Number.MAX_VALUE : Math.abs(e.width)),
                (e = isNaN(e.height) ? Number.MAX_VALUE : Math.abs(e.height)),
                Math.min(i, n, e))
              : 0,
          n = 0 < t.width ? 1 : -1,
          e = 0 < t.height ? 1 : -1;
        return {
          x: t.x + (n * i) / 2,
          y: t.y + (e * i) / 2,
          width: t.width - n * i,
          height: t.height - e * i,
        };
      },
      polar: function (t, e, n) {
        t = t.getItemLayout(e);
        return {
          cx: t.cx,
          cy: t.cy,
          r0: t.r0,
          r: t.r,
          startAngle: t.startAngle,
          endAngle: t.endAngle,
          clockwise: t.clockwise,
        };
      },
    };
  function Vx(t) {
    return (
      (e = t ? "Arc" : "Angle"),
      function (t) {
        switch (t) {
          case "start":
          case "insideStart":
          case "end":
          case "insideEnd":
            return t + e;
          default:
            return t;
        }
      }
    );
    var e;
  }
  function Hx(t, e, n, i, r, o, a, s) {
    var l = e.getItemVisual(n, "style"),
      u =
        (s
          ? o.get("roundCap") ||
            (L((u = t.shape), Cx(i.getModel("itemStyle"), u, !0)),
            t.setShape(u))
          : ((u = i.get(["itemStyle", "borderRadius"]) || 0),
            t.setShape("r", u)),
        t.useStyle(l),
        i.getShallow("cursor")),
      u =
        (u && t.attr("cursor", u),
        s
          ? a
            ? r.r >= r.r0
              ? "endArc"
              : "startArc"
            : r.endAngle >= r.startAngle
            ? "endAngle"
            : "startAngle"
          : a
          ? 0 <= r.height
            ? "bottom"
            : "top"
          : 0 <= r.width
          ? "right"
          : "left"),
      h = cc(i),
      l =
        (hc(t, h, {
          labelFetcher: o,
          labelDataIndex: n,
          defaultText: bx(o.getData(), n),
          inheritColor: l.fill,
          defaultOpacity: l.opacity,
          defaultOutsidePosition: u,
        }),
        t.getTextContent()),
      h =
        (s &&
          l &&
          ((s = i.get(["label", "position"])),
          (t.textConfig.inside = "middle" === s || null),
          (function (t, e, n, i) {
            if (G(i)) t.setTextConfig({ rotation: i });
            else if (V(e)) t.setTextConfig({ rotation: 0 });
            else {
              var r,
                i = t.shape,
                o = i.clockwise ? i.startAngle : i.endAngle,
                a = i.clockwise ? i.endAngle : i.startAngle,
                s = (o + a) / 2,
                i = n(e);
              switch (i) {
                case "startArc":
                case "insideStartArc":
                case "middle":
                case "insideEndArc":
                case "endArc":
                  r = s;
                  break;
                case "startAngle":
                case "insideStartAngle":
                  r = o;
                  break;
                case "endAngle":
                case "insideEndAngle":
                  r = a;
                  break;
                default:
                  return t.setTextConfig({ rotation: 0 });
              }
              n = 1.5 * Math.PI - r;
              "middle" === i &&
                n > Math.PI / 2 &&
                n < 1.5 * Math.PI &&
                (n -= Math.PI),
                t.setTextConfig({ rotation: n });
            }
          })(t, "outside" === s ? u : s, Vx(a), i.get(["label", "rotate"]))),
        (u = l),
        (s = h),
        (a = o.getRawValue(n)),
        (l = function (t) {
          return Sx(e, t);
        }),
        u &&
          (((u = vc(u)).prevValue = u.value),
          (u.value = a),
          (a = s.normal),
          (u.valueAnimation = a.get("valueAnimation")),
          u.valueAnimation) &&
          ((u.precision = a.get("precision")),
          (u.defaultInterpolatedText = l),
          (u.statesModels = s)),
        i.getModel(["emphasis"]));
    Rl(t, h.get("focus"), h.get("blurScope"), h.get("disabled")),
      zl(t, i),
      null != (o = r).startAngle &&
        null != o.endAngle &&
        o.startAngle === o.endAngle &&
        ((t.style.fill = "none"),
        (t.style.stroke = "none"),
        E(t.states, function (t) {
          t.style && (t.style.fill = t.style.stroke = "none");
        }));
  }
  function Gx() {}
  u(Xx, (Wx = j)),
    (Xx.prototype.getDefaultShape = function () {
      return new Gx();
    }),
    (Xx.prototype.buildPath = function (t, e) {
      for (
        var n = e.points,
          i = this.baseDimIdx,
          r = 1 - this.baseDimIdx,
          o = [],
          a = [],
          s = this.barWidth,
          l = 0;
        l < n.length;
        l += 3
      )
        (a[i] = s),
          (a[r] = n[l + 2]),
          (o[i] = n[l + i]),
          (o[r] = n[l + r]),
          t.rect(o[0], o[1], a[0], a[1]);
    });
  var Wx,
    Ux = Xx;
  function Xx(t) {
    t = Wx.call(this, t) || this;
    return (t.type = "largeBar"), t;
  }
  function Yx(t, e, n, i) {
    var r = t.getData(),
      o = r.getLayout("valueAxisHorizontal") ? 1 : 0,
      a = r.getLayout("largeDataIndices"),
      s = r.getLayout("size"),
      l = t.getModel("backgroundStyle"),
      u = r.getLayout("largeBackgroundPoints"),
      l =
        (u &&
          (((u = new Ux({
            shape: { points: u },
            incremental: !!i,
            silent: !0,
            z2: 0,
          })).baseDimIdx = o),
          (u.largeDataIndices = a),
          (u.barWidth = s),
          u.useStyle(l.getItemStyle()),
          e.add(u),
          n) &&
          n.push(u),
        new Ux({
          shape: { points: r.getLayout("largePoints") },
          incremental: !!i,
          ignoreCoarsePointer: !0,
          z2: 1,
        }));
    (l.baseDimIdx = o),
      (l.largeDataIndices = a),
      (l.barWidth = s),
      e.add(l),
      l.useStyle(r.getVisual("style")),
      (D(l).seriesIndex = t.seriesIndex),
      t.get("silent") || (l.on("mousedown", qx), l.on("mousemove", qx)),
      n && n.push(l);
  }
  var qx = ry(
    function (t) {
      t = (function (t, e, n) {
        for (
          var i = t.baseDimIdx,
            r = 1 - i,
            o = t.shape.points,
            a = t.largeDataIndices,
            s = [],
            l = [],
            u = t.barWidth,
            h = 0,
            c = o.length / 3;
          h < c;
          h++
        ) {
          var p = 3 * h;
          if (
            ((l[i] = u),
            (l[r] = o[2 + p]),
            (s[i] = o[p + i]),
            (s[r] = o[p + r]),
            l[r] < 0 && ((s[r] += l[r]), (l[r] = -l[r])),
            s[0] <= e && e <= s[0] + l[0] && s[1] <= n && n <= s[1] + l[1])
          )
            return a[h];
        }
        return -1;
      })(this, t.offsetX, t.offsetY);
      D(this).dataIndex = 0 <= t ? t : null;
    },
    30,
    !1
  );
  function Zx(t, e, n) {
    var i, r;
    return xx(n, "cartesian2d")
      ? ((r = e),
        (i = n.getArea()),
        {
          x: (t ? r : i).x,
          y: (t ? i : r).y,
          width: (t ? r : i).width,
          height: (t ? i : r).height,
        })
      : ((r = e),
        {
          cx: (i = n.getArea()).cx,
          cy: i.cy,
          r0: (t ? i : r).r0,
          r: (t ? i : r).r,
          startAngle: t ? r.startAngle : 0,
          endAngle: t ? r.endAngle : 2 * Math.PI,
        });
  }
  E_(function (t) {
    t.registerChartView(Ax),
      t.registerSeriesModel(px),
      t.registerLayout(t.PRIORITY.VISUAL.LAYOUT, pt(t_, "bar")),
      t.registerLayout(t.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, {
        seriesType: "bar",
        plan: Xg(),
        reset: function (t) {
          var e, x, n, w, b, S, i, r, M, T, C, I, D, k, A, P;
          if (e_(t))
            return (
              (e = t.getData()),
              (i = (x = t.coordinateSystem).getBaseAxis()),
              (n = x.getOtherAxis(i)),
              (w = e.getDimensionIndex(e.mapDimension(n.dim))),
              (b = e.getDimensionIndex(e.mapDimension(i.dim))),
              (S = t.get("showBackground", !0)),
              (i = e.mapDimension(n.dim)),
              (r = e.getCalculationInfo("stackResultDimension")),
              (M = bv(e, i) && !!e.getCalculationInfo("stackedOnSeries")),
              (T = n.isHorizontal()),
              (C = n.toGlobalCoord(n.dataToCoord("log" === n.type ? 1 : 0))),
              (I = n_(t)),
              (D = t.get("barMinHeight") || 0),
              (k = r && e.getDimensionIndex(r)),
              (A = e.getLayout("size")),
              (P = e.getLayout("offset")),
              {
                progress: function (t, e) {
                  for (
                    var n,
                      i = t.count,
                      r = I && Zv(3 * i),
                      o = I && S && Zv(3 * i),
                      a = I && Zv(i),
                      s = x.master.getRect(),
                      l = T ? s.width : s.height,
                      u = e.getStore(),
                      h = 0;
                    null != (n = t.next());

                  ) {
                    var c,
                      p = u.get(M ? k : w, n),
                      d = u.get(b, n),
                      f = C,
                      g = void 0,
                      y = (M && (g = +p - u.get(w, n)), void 0),
                      m = void 0,
                      v = void 0,
                      _ = void 0;
                    T
                      ? ((c = x.dataToPoint([p, d])),
                        (y = f = M ? x.dataToPoint([g, d])[0] : f),
                        (m = c[1] + P),
                        (v = c[0] - f),
                        (_ = A),
                        Math.abs(v) < D && (v = (v < 0 ? -1 : 1) * D))
                      : ((c = x.dataToPoint([d, p])),
                        M && (f = x.dataToPoint([d, g])[1]),
                        (y = c[0] + P),
                        (m = f),
                        (v = A),
                        (_ = c[1] - f),
                        Math.abs(_) < D && (_ = (_ <= 0 ? -1 : 1) * D)),
                      I
                        ? ((r[h] = y),
                          (r[h + 1] = m),
                          (r[h + 2] = T ? v : _),
                          o &&
                            ((o[h] = T ? s.x : y),
                            (o[h + 1] = T ? m : s.y),
                            (o[h + 2] = l)),
                          (a[n] = n))
                        : e.setItemLayout(n, {
                            x: y,
                            y: m,
                            width: v,
                            height: _,
                          }),
                      (h += 3);
                  }
                  I &&
                    e.setLayout({
                      largePoints: r,
                      largeDataIndices: a,
                      largeBackgroundPoints: o,
                      valueAxisHorizontal: T,
                    });
                },
              }
            );
        },
      }),
      t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC, lx("bar")),
      t.registerAction(
        { type: "changeAxisOrder", event: "changeAxisOrder", update: "update" },
        function (e, t) {
          var n = e.componentType || "series";
          t.eachComponent({ mainType: n, query: e }, function (t) {
            e.sortInfo && t.axis.setCategorySortInfo(e.sortInfo);
          });
        }
      );
  });
  u($x, (jx = Ng)),
    ($x.prototype.getInitialData = function (t) {
      return Mv(null, this, { useEncodeDefaulter: !0 });
    }),
    ($x.prototype.getLegendIcon = function (t) {
      var e = new Fr(),
        n = Ky(
          "line",
          0,
          t.itemHeight / 2,
          t.itemWidth,
          0,
          t.lineStyle.stroke,
          !1
        ),
        n =
          (e.add(n),
          n.setStyle(t.lineStyle),
          this.getData().getVisual("symbol")),
        i = this.getData().getVisual("symbolRotate"),
        n = "none" === n ? "circle" : n,
        r = 0.8 * t.itemHeight,
        r = Ky(
          n,
          (t.itemWidth - r) / 2,
          (t.itemHeight - r) / 2,
          r,
          r,
          t.itemStyle.fill
        ),
        i =
          (e.add(r),
          r.setStyle(t.itemStyle),
          "inherit" === t.iconRotate ? i : t.iconRotate || 0);
      return (
        (r.rotation = (i * Math.PI) / 180),
        r.setOrigin([t.itemWidth / 2, t.itemHeight / 2]),
        -1 < n.indexOf("empty") &&
          ((r.style.stroke = r.style.fill),
          (r.style.fill = "#fff"),
          (r.style.lineWidth = 2)),
        e
      );
    }),
    ($x.type = "series.line"),
    ($x.dependencies = ["grid", "polar"]),
    ($x.defaultOption = {
      z: 3,
      coordinateSystem: "cartesian2d",
      legendHoverLink: !0,
      clip: !0,
      label: { position: "top" },
      endLabel: { show: !1, valueAnimation: !0, distance: 8 },
      lineStyle: { width: 2, type: "solid" },
      emphasis: { scale: !0 },
      step: !1,
      smooth: !1,
      smoothMonotone: null,
      symbol: "emptyCircle",
      symbolSize: 4,
      symbolRotate: null,
      showSymbol: !0,
      showAllSymbol: "auto",
      connectNulls: !1,
      sampling: "none",
      animationEasing: "linear",
      progressive: 0,
      hoverLayerThreshold: 1 / 0,
      universalTransition: { divideShape: "clone" },
      triggerLineEvent: !1,
    });
  var jx,
    Kx = $x;
  function $x() {
    var t = (null !== jx && jx.apply(this, arguments)) || this;
    return (t.type = $x.type), (t.hasSymbolVisual = !0), t;
  }
  u(tw, (Qx = Fr)),
    (tw.prototype._createSymbol = function (t, e, n, i, r) {
      this.removeAll();
      r = Ky(t, -1, -1, 2, 2, null, r);
      r.attr({ z2: 100, culling: !0, scaleX: i[0] / 2, scaleY: i[1] / 2 }),
        (r.drift = ew),
        (this._symbolType = t),
        this.add(r);
    }),
    (tw.prototype.stopSymbolAnimation = function (t) {
      this.childAt(0).stopAnimation(null, t);
    }),
    (tw.prototype.getSymbolType = function () {
      return this._symbolType;
    }),
    (tw.prototype.getSymbolPath = function () {
      return this.childAt(0);
    }),
    (tw.prototype.highlight = function () {
      bl(this.childAt(0));
    }),
    (tw.prototype.downplay = function () {
      Sl(this.childAt(0));
    }),
    (tw.prototype.setZ = function (t, e) {
      var n = this.childAt(0);
      (n.zlevel = t), (n.z = e);
    }),
    (tw.prototype.setDraggable = function (t, e) {
      var n = this.childAt(0);
      (n.draggable = t), (n.cursor = !e && t ? "move" : n.cursor);
    }),
    (tw.prototype.updateData = function (t, e, n, i) {
      this.silent = !1;
      var r,
        o,
        a,
        s = t.getItemVisual(e, "symbol") || "circle",
        l = t.hostModel,
        u = tw.getSymbolSize(t, e),
        h = s !== this._symbolType,
        c = i && i.disableAnimation;
      h
        ? ((r = t.getItemVisual(e, "symbolKeepAspect")),
          this._createSymbol(s, t, e, u, r))
        : (((a = this.childAt(0)).silent = !1),
          (o = { scaleX: u[0] / 2, scaleY: u[1] / 2 }),
          c ? a.attr(o) : Ih(a, o, l, e),
          Oh(a)),
        this._updateCommon(t, e, u, n, i),
        h &&
          ((a = this.childAt(0)),
          c ||
            ((o = {
              scaleX: this._sizeX,
              scaleY: this._sizeY,
              style: { opacity: a.style.opacity },
            }),
            (a.scaleX = a.scaleY = 0),
            (a.style.opacity = 0),
            Dh(a, o, l, e))),
        c && this.childAt(0).stopAnimation("leave");
    }),
    (tw.prototype._updateCommon = function (e, t, n, i, r) {
      var o,
        a,
        s,
        l,
        u,
        h,
        c,
        p,
        d = this.childAt(0),
        f = e.hostModel,
        g =
          (i &&
            ((o = i.emphasisItemStyle),
            (s = i.blurItemStyle),
            (a = i.selectItemStyle),
            (l = i.focus),
            (u = i.blurScope),
            (c = i.labelStatesModels),
            (p = i.hoverScale),
            (y = i.cursorStyle),
            (h = i.emphasisDisabled)),
          (i && !e.hasItemOption) ||
            ((o = (g = (i =
              i && i.itemModel ? i.itemModel : e.getItemModel(t)).getModel(
              "emphasis"
            ))
              .getModel("itemStyle")
              .getItemStyle()),
            (a = i.getModel(["select", "itemStyle"]).getItemStyle()),
            (s = i.getModel(["blur", "itemStyle"]).getItemStyle()),
            (l = g.get("focus")),
            (u = g.get("blurScope")),
            (h = g.get("disabled")),
            (c = cc(i)),
            (p = g.getShallow("scale")),
            (y = i.getShallow("cursor"))),
          e.getItemVisual(t, "symbolRotate")),
        i =
          (d.attr("rotation", ((g || 0) * Math.PI) / 180 || 0),
          $y(e.getItemVisual(t, "symbolOffset"), n)),
        g =
          (i && ((d.x = i[0]), (d.y = i[1])),
          y && d.attr("cursor", y),
          e.getItemVisual(t, "style")),
        i = g.fill,
        y =
          (d instanceof vs
            ? ((y = d.style),
              d.useStyle(
                L(
                  {
                    image: y.image,
                    x: y.x,
                    y: y.y,
                    width: y.width,
                    height: y.height,
                  },
                  g
                )
              ))
            : (d.__isEmptyBrush ? d.useStyle(L({}, g)) : d.useStyle(g),
              (d.style.decal = null),
              d.setColor(i, r && r.symbolInnerColor),
              (d.style.strokeNoScale = !0)),
          e.getItemVisual(t, "liftZ")),
        m = this._z2,
        v =
          (null != y
            ? null == m && ((this._z2 = d.z2), (d.z2 += y))
            : null != m && ((d.z2 = m), (this._z2 = null)),
          r && r.useNameLabel),
        y =
          (hc(d, c, {
            labelFetcher: f,
            labelDataIndex: t,
            defaultText: function (t) {
              return v ? e.getName(t) : bx(e, t);
            },
            inheritColor: i,
            defaultOpacity: g.opacity,
          }),
          (this._sizeX = n[0] / 2),
          (this._sizeY = n[1] / 2),
          d.ensureState("emphasis")),
        m =
          ((y.style = o),
          (d.ensureState("select").style = a),
          (d.ensureState("blur").style = s),
          null == p || !0 === p
            ? Math.max(1.1, 3 / this._sizeY)
            : isFinite(p) && 0 < p
            ? +p
            : 1);
      (y.scaleX = this._sizeX * m),
        (y.scaleY = this._sizeY * m),
        this.setSymbolScale(1),
        Rl(this, l, u, h);
    }),
    (tw.prototype.setSymbolScale = function (t) {
      this.scaleX = this.scaleY = t;
    }),
    (tw.prototype.fadeOut = function (t, e, n) {
      var i = this.childAt(0),
        r = D(this).dataIndex,
        o = n && n.animation;
      (this.silent = i.silent = !0),
        n && n.fadeLabel
          ? (n = i.getTextContent()) &&
            Ah(n, { style: { opacity: 0 } }, e, {
              dataIndex: r,
              removeOpt: o,
              cb: function () {
                i.removeTextContent();
              },
            })
          : i.removeTextContent(),
        Ah(i, { style: { opacity: 0 }, scaleX: 0, scaleY: 0 }, e, {
          dataIndex: r,
          cb: t,
          removeOpt: o,
        });
    }),
    (tw.getSymbolSize = function (t, e) {
      return [
        (t = V((t = t.getItemVisual(e, "symbolSize"))) ? t : [+t, +t])[0] || 0,
        t[1] || 0,
      ];
    });
  var Qx,
    Jx = tw;
  function tw(t, e, n, i) {
    var r = Qx.call(this) || this;
    return r.updateData(t, e, n, i), r;
  }
  function ew(t, e) {
    this.parent.drift(t, e);
  }
  function nw(t, e, n, i) {
    return (
      e &&
      !isNaN(e[0]) &&
      !isNaN(e[1]) &&
      (!i.isIgnore || !i.isIgnore(n)) &&
      (!i.clipShape || i.clipShape.contain(e[0], e[1])) &&
      "none" !== t.getItemVisual(n, "symbol")
    );
  }
  function iw(t) {
    return (t = null == t || O(t) ? t : { isIgnore: t }) || {};
  }
  function rw(t) {
    var t = t.hostModel,
      e = t.getModel("emphasis");
    return {
      emphasisItemStyle: e.getModel("itemStyle").getItemStyle(),
      blurItemStyle: t.getModel(["blur", "itemStyle"]).getItemStyle(),
      selectItemStyle: t.getModel(["select", "itemStyle"]).getItemStyle(),
      focus: e.get("focus"),
      blurScope: e.get("blurScope"),
      emphasisDisabled: e.get("disabled"),
      hoverScale: e.get("scale"),
      labelStatesModels: cc(t),
      cursorStyle: t.get("cursor"),
    };
  }
  (aw.prototype.updateData = function (o, a) {
    (this._progressiveEls = null), (a = iw(a));
    var s = this.group,
      l = o.hostModel,
      u = this._data,
      h = this._SymbolCtor,
      c = a.disableAnimation,
      p = rw(o),
      d = { disableAnimation: c },
      f =
        a.getSymbolPoint ||
        function (t) {
          return o.getItemLayout(t);
        };
    u || s.removeAll(),
      o
        .diff(u)
        .add(function (t) {
          var e,
            n = f(t);
          nw(o, n, t, a) &&
            ((e = new h(o, t, p, d)).setPosition(n),
            o.setItemGraphicEl(t, e),
            s.add(e));
        })
        .update(function (t, e) {
          var n,
            i,
            e = u.getItemGraphicEl(e),
            r = f(t);
          nw(o, r, t, a)
            ? ((n = o.getItemVisual(t, "symbol") || "circle"),
              (i = e && e.getSymbolType && e.getSymbolType()),
              !e || (i && i !== n)
                ? (s.remove(e), (e = new h(o, t, p, d)).setPosition(r))
                : (e.updateData(o, t, p, d),
                  (i = { x: r[0], y: r[1] }),
                  c ? e.attr(i) : Ih(e, i, l)),
              s.add(e),
              o.setItemGraphicEl(t, e))
            : s.remove(e);
        })
        .remove(function (t) {
          var e = u.getItemGraphicEl(t);
          e &&
            e.fadeOut(function () {
              s.remove(e);
            }, l);
        })
        .execute(),
      (this._getSymbolPoint = f),
      (this._data = o);
  }),
    (aw.prototype.updateLayout = function () {
      var n = this,
        t = this._data;
      t &&
        t.eachItemGraphicEl(function (t, e) {
          e = n._getSymbolPoint(e);
          t.setPosition(e), t.markRedraw();
        });
    }),
    (aw.prototype.incrementalPrepareUpdate = function (t) {
      (this._seriesScope = rw(t)), (this._data = null), this.group.removeAll();
    }),
    (aw.prototype.incrementalUpdate = function (t, e, n) {
      function i(t) {
        t.isGroup ||
          ((t.incremental = !0), (t.ensureState("emphasis").hoverLayer = !0));
      }
      (this._progressiveEls = []), (n = iw(n));
      for (var r = t.start; r < t.end; r++) {
        var o,
          a = e.getItemLayout(r);
        nw(e, a, r, n) &&
          ((o = new this._SymbolCtor(e, r, this._seriesScope)).traverse(i),
          o.setPosition(a),
          this.group.add(o),
          e.setItemGraphicEl(r, o),
          this._progressiveEls.push(o));
      }
    }),
    (aw.prototype.eachRendered = function (t) {
      oc(this._progressiveEls || this.group, t);
    }),
    (aw.prototype.remove = function (t) {
      var e = this.group,
        n = this._data;
      n && t
        ? n.eachItemGraphicEl(function (t) {
            t.fadeOut(function () {
              e.remove(t);
            }, n.hostModel);
          })
        : e.removeAll();
    });
  var ow = aw;
  function aw(t) {
    (this.group = new Fr()), (this._SymbolCtor = t || Jx);
  }
  function sw(t, e, n) {
    var i = t.getBaseAxis(),
      r = t.getOtherAxis(i),
      n =
        ((n = n),
        (a = 0),
        (o = (o = r).scale.getExtent()),
        "start" === n
          ? (a = o[0])
          : "end" === n
          ? (a = o[1])
          : G(n) && !isNaN(n)
          ? (a = n)
          : 0 < o[0]
          ? (a = o[0])
          : o[1] < 0 && (a = o[1]),
        a),
      o = i.dim,
      a = r.dim,
      i = e.mapDimension(a),
      r = e.mapDimension(o),
      s = "x" === a || "radius" === a ? 1 : 0,
      t = F(t.dimensions, function (t) {
        return e.mapDimension(t);
      }),
      l = !1,
      u = e.getCalculationInfo("stackResultDimension");
    return (
      bv(e, t[0]) && ((l = !0), (t[0] = u)),
      bv(e, t[1]) && ((l = !0), (t[1] = u)),
      {
        dataDimsForPoint: t,
        valueStart: n,
        valueAxisDim: a,
        baseAxisDim: o,
        stacked: !!l,
        valueDim: i,
        baseDim: r,
        baseDataOffset: s,
        stackedOverDimension: e.getCalculationInfo("stackedOverDimension"),
      }
    );
  }
  function lw(t, e, n, i) {
    var r = NaN,
      o =
        (t.stacked &&
          (r = n.get(n.getCalculationInfo("stackedOverDimension"), i)),
        isNaN(r) && (r = t.valueStart),
        t.baseDataOffset),
      a = [];
    return (a[o] = n.get(t.baseDim, i)), (a[1 - o] = r), e.dataToPoint(a);
  }
  var uw = Math.min,
    hw = Math.max;
  function cw(t, e) {
    return isNaN(t) || isNaN(e);
  }
  function pw(t, e, n, i, r, o, a, s, l) {
    for (var u, h, c, p, d = n, f = 0; f < i; f++) {
      var g = e[2 * d],
        y = e[2 * d + 1];
      if (r <= d || d < 0) break;
      if (cw(g, y)) {
        if (l) {
          d += o;
          continue;
        }
        break;
      }
      if (d === n) t[0 < o ? "moveTo" : "lineTo"](g, y), (c = g), (p = y);
      else {
        var m = g - u,
          v = y - h;
        if (m * m + v * v < 0.5) {
          d += o;
          continue;
        }
        if (0 < a) {
          for (
            var _ = d + o, x = e[2 * _], w = e[2 * _ + 1];
            x === g && w === y && f < i;

          )
            f++,
              (d += o),
              (x = e[2 * (_ += o)]),
              (w = e[2 * _ + 1]),
              (g = e[2 * d]),
              (y = e[2 * d + 1]);
          var b = f + 1;
          if (l)
            for (; cw(x, w) && b < i; )
              b++, (x = e[2 * (_ += o)]), (w = e[2 * _ + 1]);
          var S,
            M,
            T,
            C,
            I,
            D,
            k,
            A,
            P,
            m = 0,
            v = 0,
            L = void 0,
            O = void 0;
          i <= b || cw(x, w)
            ? ((k = g), (A = y))
            : ((m = x - u),
              (v = w - h),
              (S = g - u),
              (M = x - g),
              (T = y - h),
              (C = w - y),
              (D = I = void 0),
              (O =
                "x" === s
                  ? ((k = g - (P = 0 < m ? 1 : -1) * (I = Math.abs(S)) * a),
                    (A = y),
                    (L = g + P * (D = Math.abs(M)) * a),
                    y)
                  : "y" === s
                  ? ((k = g),
                    (A = y - (P = 0 < v ? 1 : -1) * (I = Math.abs(T)) * a),
                    (L = g),
                    y + P * (D = Math.abs(C)) * a)
                  : ((I = Math.sqrt(S * S + T * T)),
                    (k =
                      g -
                      m *
                        a *
                        (1 - (S = (D = Math.sqrt(M * M + C * C)) / (D + I)))),
                    (A = y - v * a * (1 - S)),
                    (O = y + v * a * S),
                    (L = uw((L = g + m * a * S), hw(x, g))),
                    (O = uw(O, hw(w, y))),
                    (L = hw(L, uw(x, g))),
                    (A = y - ((v = (O = hw(O, uw(w, y))) - y) * I) / D),
                    (k = uw((k = g - ((m = L - g) * I) / D), hw(u, g))),
                    (A = uw(A, hw(h, y))),
                    (L = g + ((m = g - (k = hw(k, uw(u, g)))) * D) / I),
                    y + ((v = y - (A = hw(A, uw(h, y)))) * D) / I))),
            t.bezierCurveTo(c, p, k, A, g, y),
            (c = L),
            (p = O);
        } else t.lineTo(g, y);
      }
      (u = g), (h = y), (d += o);
    }
    return f;
  }
  function dw() {
    (this.smooth = 0), (this.smoothConstraint = !0);
  }
  u(yw, (fw = j)),
    (yw.prototype.getDefaultStyle = function () {
      return { stroke: "#000", fill: null };
    }),
    (yw.prototype.getDefaultShape = function () {
      return new dw();
    }),
    (yw.prototype.buildPath = function (t, e) {
      var n = e.points,
        i = 0,
        r = n.length / 2;
      if (e.connectNulls) {
        for (; 0 < r && cw(n[2 * r - 2], n[2 * r - 1]); r--);
        for (; i < r && cw(n[2 * i], n[2 * i + 1]); i++);
      }
      for (; i < r; )
        i +=
          pw(t, n, i, r, r, 1, e.smooth, e.smoothMonotone, e.connectNulls) + 1;
    }),
    (yw.prototype.getPointOn = function (t, e) {
      this.path ||
        (this.createPathProxy(), this.buildPath(this.path, this.shape));
      for (
        var n, i, r = this.path.data, o = qa.CMD, a = "x" === e, s = [], l = 0;
        l < r.length;

      ) {
        var u,
          h = void 0,
          c = void 0;
        switch (r[l++]) {
          case o.M:
            (n = r[l++]), (i = r[l++]);
            break;
          case o.L:
            var p,
              h = r[l++],
              c = r[l++];
            if ((u = a ? (t - n) / (h - n) : (t - i) / (c - i)) <= 1 && 0 <= u)
              return (
                (p = a ? (c - i) * u + i : (h - n) * u + n), a ? [t, p] : [p, t]
              );
            (n = h), (i = c);
            break;
          case o.C:
            (h = r[l++]), (c = r[l++]);
            var d = r[l++],
              f = r[l++],
              g = r[l++],
              y = r[l++],
              m = a ? Bn(n, h, d, g, t, s) : Bn(i, c, f, y, t, s);
            if (0 < m)
              for (var v = 0; v < m; v++) {
                var _ = s[v];
                if (_ <= 1 && 0 <= _)
                  return (
                    (p = a ? En(i, c, f, y, _) : En(n, h, d, g, _)),
                    a ? [t, p] : [p, t]
                  );
              }
            (n = g), (i = y);
        }
      }
    });
  var fw,
    gw = yw;
  function yw(t) {
    t = fw.call(this, t) || this;
    return (t.type = "ec-polyline"), t;
  }
  u(bw, (vw = dw));
  var mw,
    vw,
    _w = bw,
    xw =
      (u(ww, (mw = j)),
      (ww.prototype.getDefaultShape = function () {
        return new _w();
      }),
      (ww.prototype.buildPath = function (t, e) {
        var n = e.points,
          i = e.stackedOnPoints,
          r = 0,
          o = n.length / 2,
          a = e.smoothMonotone;
        if (e.connectNulls) {
          for (; 0 < o && cw(n[2 * o - 2], n[2 * o - 1]); o--);
          for (; r < o && cw(n[2 * r], n[2 * r + 1]); r++);
        }
        for (; r < o; ) {
          var s = pw(t, n, r, o, o, 1, e.smooth, a, e.connectNulls);
          pw(t, i, r + s - 1, s, o, -1, e.stackedOnSmooth, a, e.connectNulls),
            (r += s + 1),
            t.closePath();
        }
      }),
      ww);
  function ww(t) {
    t = mw.call(this, t) || this;
    return (t.type = "ec-polygon"), t;
  }
  function bw() {
    return (null !== vw && vw.apply(this, arguments)) || this;
  }
  function Sw(t, e) {
    if (t.length === e.length) {
      for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return;
      return 1;
    }
  }
  function Mw(t) {
    for (
      var e = 1 / 0, n = 1 / 0, i = -1 / 0, r = -1 / 0, o = 0;
      o < t.length;

    ) {
      var a = t[o++],
        s = t[o++];
      isNaN(a) || ((e = Math.min(a, e)), (i = Math.max(a, i))),
        isNaN(s) || ((n = Math.min(s, n)), (r = Math.max(s, r)));
    }
    return [
      [e, n],
      [i, r],
    ];
  }
  function Tw(t, e) {
    var t = Mw(t),
      n = t[0],
      t = t[1],
      e = Mw(e),
      i = e[0],
      e = e[1];
    return Math.max(
      Math.abs(n[0] - i[0]),
      Math.abs(n[1] - i[1]),
      Math.abs(t[0] - e[0]),
      Math.abs(t[1] - e[1])
    );
  }
  function Cw(t) {
    return G(t) ? t : t ? 0.5 : 0;
  }
  function Iw(t, e, n, i) {
    var e = e.getBaseAxis(),
      r = "x" === e.dim || "radius" === e.dim ? 0 : 1,
      o = [],
      a = 0,
      s = [],
      l = [],
      u = [],
      h = [];
    if (i) {
      for (a = 0; a < t.length; a += 2)
        isNaN(t[a]) || isNaN(t[a + 1]) || h.push(t[a], t[a + 1]);
      t = h;
    }
    for (a = 0; a < t.length - 2; a += 2)
      switch (
        ((u[0] = t[a + 2]),
        (u[1] = t[a + 3]),
        (l[0] = t[a]),
        (l[1] = t[a + 1]),
        o.push(l[0], l[1]),
        n)
      ) {
        case "end":
          (s[r] = u[r]), (s[1 - r] = l[1 - r]), o.push(s[0], s[1]);
          break;
        case "middle":
          var c = [];
          (s[r] = c[r] = (l[r] + u[r]) / 2),
            (s[1 - r] = l[1 - r]),
            (c[1 - r] = u[1 - r]),
            o.push(s[0], s[1]),
            o.push(c[0], c[1]);
          break;
        default:
          (s[r] = l[r]), (s[1 - r] = u[1 - r]), o.push(s[0], s[1]);
      }
    return o.push(t[a++], t[a++]), o;
  }
  function Dw(t, e, n) {
    var i = t.getVisual("visualMeta");
    if (i && i.length && t.count() && "cartesian2d" === e.type) {
      for (var r, o, a = i.length - 1; 0 <= a; a--) {
        var s = t.getDimensionInfo(i[a].dimension);
        if ("x" === (r = s && s.coordDim) || "y" === r) {
          o = i[a];
          break;
        }
      }
      if (o) {
        var l = e.getAxis(r),
          e = F(o.stops, function (t) {
            return {
              coord: l.toGlobalCoord(l.dataToCoord(t.value)),
              color: t.color,
            };
          }),
          u = e.length,
          h = o.outerColors.slice(),
          n =
            (u && e[0].coord > e[u - 1].coord && (e.reverse(), h.reverse()),
            (function (t, e) {
              var n,
                i,
                r = [],
                o = t.length;
              function a(t, e, n) {
                var i = t.coord;
                return {
                  coord: n,
                  color: vi((n - i) / (e.coord - i), [t.color, e.color]),
                };
              }
              for (var s = 0; s < o; s++) {
                var l = t[s],
                  u = l.coord;
                if (u < 0) n = l;
                else {
                  if (e < u) {
                    i
                      ? r.push(a(i, l, e))
                      : n && r.push(a(n, l, 0), a(n, l, e));
                    break;
                  }
                  n && (r.push(a(n, l, 0)), (n = null)), r.push(l), (i = l);
                }
              }
              return r;
            })(e, "x" === r ? n.getWidth() : n.getHeight())),
          c = n.length;
        if (!c && u)
          return e[0].coord < 0 ? h[1] || e[u - 1].color : h[0] || e[0].color;
        var p = n[0].coord - 10,
          u = n[c - 1].coord + 10,
          d = u - p;
        if (d < 0.001) return "transparent";
        E(n, function (t) {
          t.offset = (t.coord - p) / d;
        }),
          n.push({
            offset: c ? n[c - 1].offset : 0.5,
            color: h[1] || "transparent",
          }),
          n.unshift({
            offset: c ? n[0].offset : 0.5,
            color: h[0] || "transparent",
          });
        e = new ph(0, 0, 0, 0, n, !0);
        return (e[r] = p), (e[r + "2"] = u), e;
      }
    }
  }
  function kw(t, e, n) {
    var t = t.get("showAllSymbol"),
      i = "auto" === t;
    if (!t || i) {
      var r,
        o,
        a = n.getAxesByScale("ordinal")[0];
      if (
        a &&
        (!i ||
          !(function (t, e) {
            var n = t.getExtent(),
              i = Math.abs(n[1] - n[0]) / t.scale.count();
            isNaN(i) && (i = 0);
            for (
              var r = e.count(), o = Math.max(1, Math.round(r / 5)), a = 0;
              a < r;
              a += o
            )
              if (1.5 * Jx.getSymbolSize(e, a)[t.isHorizontal() ? 1 : 0] > i)
                return;
            return 1;
          })(a, e))
      )
        return (
          (r = e.mapDimension(a.dim)),
          (o = {}),
          E(a.getViewLabels(), function (t) {
            t = a.scale.getRawOrdinalNumber(t.tickValue);
            o[t] = 1;
          }),
          function (t) {
            return !o.hasOwnProperty(e.get(r, t));
          }
        );
    }
  }
  function Aw(t) {
    for (
      var e, n, i = t.length / 2;
      0 < i && ((e = t[2 * i - 2]), (n = t[2 * i - 1]), isNaN(e) || isNaN(n));
      i--
    );
    return i - 1;
  }
  function Pw(t, e) {
    return [t[2 * e], t[2 * e + 1]];
  }
  function Lw(t) {
    if (t.get(["endLabel", "show"])) return 1;
    for (var e = 0; e < $s.length; e++)
      if (t.get([$s[e], "endLabel", "show"])) return 1;
  }
  function Ow(n, i, e, t) {
    var r, o, a, s, l, u, h, c, p;
    return xx(i, "cartesian2d")
      ? ((r = t.getModel("endLabel")),
        (o = r.get("valueAnimation")),
        (a = t.getData()),
        (s = { lastFrameIndex: 0 }),
        (l = Lw(t)
          ? function (t, e) {
              n._endLabelOnDuring(t, e, a, s, o, r, i);
            }
          : null),
        (u = i.getBaseAxis().isHorizontal()),
        (h = fx(
          i,
          e,
          t,
          function () {
            var t = n._endLabel;
            t &&
              e &&
              null != s.originalX &&
              t.attr({ x: s.originalX, y: s.originalY });
          },
          l
        )),
        t.get("clip", !0) ||
          ((c = h.shape),
          (p = Math.max(c.width, c.height)),
          u
            ? ((c.y -= p), (c.height += 2 * p))
            : ((c.x -= p), (c.width += 2 * p))),
        l && l(1, h),
        h)
      : gx(i, e, t);
  }
  u(Ew, (Rw = Zg)),
    (Ew.prototype.init = function () {
      var t = new Fr(),
        e = new ow();
      this.group.add(e.group), (this._symbolDraw = e), (this._lineGroup = t);
    }),
    (Ew.prototype.render = function (t, e, n) {
      var i = this,
        r = t.coordinateSystem,
        o = this.group,
        a = t.getData(),
        s = t.getModel("lineStyle"),
        l = t.getModel("areaStyle"),
        u = a.getLayout("points") || [],
        h = "polar" === r.type,
        c = this._coordSys,
        p = this._symbolDraw,
        d = this._polyline,
        f = this._polygon,
        g = this._lineGroup,
        e = !e.ssr && t.isAnimationEnabled(),
        y = !l.isEmpty(),
        m = l.get("origin"),
        v = sw(r, a, m),
        v =
          y &&
          (function (t, e, n) {
            if (!n.valueDim) return [];
            for (var i = e.count(), r = Zv(2 * i), o = 0; o < i; o++) {
              var a = lw(n, t, e, o);
              (r[2 * o] = a[0]), (r[2 * o + 1] = a[1]);
            }
            return r;
          })(r, a, v),
        _ = t.get("showSymbol"),
        x = t.get("connectNulls"),
        w = _ && !h && kw(t, a, r),
        b = this._data;
      b &&
        b.eachItemGraphicEl(function (t, e) {
          t.__temp && (o.remove(t), b.setItemGraphicEl(e, null));
        }),
        _ || p.remove(),
        o.add(g);
      function S(t) {
        i._changePolyState(t);
      }
      var M,
        T = !h && t.get("step"),
        C =
          (r &&
            r.getArea &&
            t.get("clip", !0) &&
            (null != (M = r.getArea()).width
              ? ((M.x -= 0.1),
                (M.y -= 0.1),
                (M.width += 0.2),
                (M.height += 0.2))
              : M.r0 && ((M.r0 -= 0.5), (M.r += 0.5))),
          (this._clipShapeForSymbol = M),
          Dw(a, r, n) || a.getVisual("style")[a.getVisual("drawType")]),
        c =
          (d && c.type === r.type && T === this._step
            ? (y && !f
                ? (f = this._newPolygon(u, v))
                : f && !y && (g.remove(f), (f = this._polygon = null)),
              h || this._initOrUpdateEndLabel(t, r, Tp(C)),
              (c = g.getClipPath())
                ? Dh(c, { shape: Ow(this, r, !1, t).shape }, t)
                : g.setClipPath(Ow(this, r, !0, t)),
              _ &&
                p.updateData(a, {
                  isIgnore: w,
                  clipShape: M,
                  disableAnimation: !0,
                  getSymbolPoint: function (t) {
                    return [u[2 * t], u[2 * t + 1]];
                  },
                }),
              (Sw(this._stackedOnPoints, v) && Sw(this._points, u)) ||
                (e
                  ? this._doUpdateAnimation(a, v, r, n, T, m, x)
                  : (T && ((u = Iw(u, r, T, x)), (v = v && Iw(v, r, T, x))),
                    d.setShape({ points: u }),
                    f && f.setShape({ points: u, stackedOnPoints: v }))))
            : (_ &&
                p.updateData(a, {
                  isIgnore: w,
                  clipShape: M,
                  disableAnimation: !0,
                  getSymbolPoint: function (t) {
                    return [u[2 * t], u[2 * t + 1]];
                  },
                }),
              e && this._initSymbolLabelAnimation(a, r, M),
              T && ((u = Iw(u, r, T, x)), (v = v && Iw(v, r, T, x))),
              (d = this._newPolyline(u)),
              y
                ? (f = this._newPolygon(u, v))
                : f && (g.remove(f), (f = this._polygon = null)),
              h || this._initOrUpdateEndLabel(t, r, Tp(C)),
              g.setClipPath(Ow(this, r, !0, t))),
          t.getModel("emphasis")),
        n = c.get("focus"),
        _ = c.get("blurScope"),
        p = c.get("disabled"),
        w =
          (d.useStyle(
            B(s.getLineStyle(), { fill: "none", stroke: C, lineJoin: "bevel" })
          ),
          zl(d, t, "lineStyle"),
          0 < d.style.lineWidth &&
            "bolder" === t.get(["emphasis", "lineStyle", "width"]) &&
            (d.getState("emphasis").style.lineWidth = +d.style.lineWidth + 1),
          (D(d).seriesIndex = t.seriesIndex),
          Rl(d, n, _, p),
          Cw(t.get("smooth"))),
        e = t.get("smoothMonotone");
      d.setShape({ smooth: w, smoothMonotone: e, connectNulls: x }),
        f &&
          ((M = a.getCalculationInfo("stackedOnSeries")),
          (y = 0),
          f.useStyle(
            B(l.getAreaStyle(), {
              fill: C,
              opacity: 0.7,
              lineJoin: "bevel",
              decal: a.getVisual("style").decal,
            })
          ),
          M && (y = Cw(M.get("smooth"))),
          f.setShape({
            smooth: w,
            stackedOnSmooth: y,
            smoothMonotone: e,
            connectNulls: x,
          }),
          zl(f, t, "areaStyle"),
          (D(f).seriesIndex = t.seriesIndex),
          Rl(f, n, _, p));
      a.eachItemGraphicEl(function (t) {
        t && (t.onHoverStateChange = S);
      }),
        (this._polyline.onHoverStateChange = S),
        (this._data = a),
        (this._coordSys = r),
        (this._stackedOnPoints = v),
        (this._points = u),
        (this._step = T),
        (this._valueOrigin = m),
        t.get("triggerLineEvent") &&
          (this.packEventData(t, d), f) &&
          this.packEventData(t, f);
    }),
    (Ew.prototype.packEventData = function (t, e) {
      D(e).eventData = {
        componentType: "series",
        componentSubType: "line",
        componentIndex: t.componentIndex,
        seriesIndex: t.seriesIndex,
        seriesName: t.name,
        seriesType: "line",
      };
    }),
    (Ew.prototype.highlight = function (t, e, n, i) {
      var r = t.getData(),
        o = Do(r, i);
      if (
        (this._changePolyState("emphasis"),
        !(o instanceof Array) && null != o && 0 <= o)
      ) {
        var a = r.getLayout("points"),
          s = r.getItemGraphicEl(o);
        if (!s) {
          var l = a[2 * o],
            a = a[2 * o + 1];
          if (isNaN(l) || isNaN(a)) return;
          if (
            this._clipShapeForSymbol &&
            !this._clipShapeForSymbol.contain(l, a)
          )
            return;
          var u = t.get("zlevel") || 0,
            h = t.get("z") || 0,
            l =
              (((s = new Jx(r, o)).x = l),
              (s.y = a),
              s.setZ(u, h),
              s.getSymbolPath().getTextContent());
          l && ((l.zlevel = u), (l.z = h), (l.z2 = this._polyline.z2 + 1)),
            (s.__temp = !0),
            r.setItemGraphicEl(o, s),
            s.stopSymbolAnimation(!0),
            this.group.add(s);
        }
        s.highlight();
      } else Zg.prototype.highlight.call(this, t, e, n, i);
    }),
    (Ew.prototype.downplay = function (t, e, n, i) {
      var r,
        o = t.getData(),
        a = Do(o, i);
      this._changePolyState("normal"),
        null != a && 0 <= a
          ? (r = o.getItemGraphicEl(a)) &&
            (r.__temp
              ? (o.setItemGraphicEl(a, null), this.group.remove(r))
              : r.downplay())
          : Zg.prototype.downplay.call(this, t, e, n, i);
    }),
    (Ew.prototype._changePolyState = function (t) {
      var e = this._polygon;
      yl(this._polyline, t), e && yl(e, t);
    }),
    (Ew.prototype._newPolyline = function (t) {
      var e = this._polyline;
      return (
        e && this._lineGroup.remove(e),
        (e = new gw({
          shape: { points: t },
          segmentIgnoreThreshold: 2,
          z2: 10,
        })),
        this._lineGroup.add(e),
        (this._polyline = e)
      );
    }),
    (Ew.prototype._newPolygon = function (t, e) {
      var n = this._polygon;
      return (
        n && this._lineGroup.remove(n),
        (n = new xw({
          shape: { points: t, stackedOnPoints: e },
          segmentIgnoreThreshold: 2,
        })),
        this._lineGroup.add(n),
        (this._polygon = n)
      );
    }),
    (Ew.prototype._initSymbolLabelAnimation = function (t, l, u) {
      var h,
        c,
        e = l.getBaseAxis(),
        p = e.inverse,
        e =
          ("cartesian2d" === l.type
            ? ((h = e.isHorizontal()), (c = !1))
            : "polar" === l.type && ((h = "angle" === e.dim), (c = !0)),
          t.hostModel),
        d = e.get("animationDuration"),
        f = (S(d) && (d = d(null)), e.get("animationDelay") || 0),
        g = S(f) ? f(null) : f;
      t.eachItemGraphicEl(function (t, e) {
        var n,
          i,
          r,
          o,
          a,
          s = t;
        s &&
          ((o = [t.x, t.y]),
          (a = i = n = void 0),
          u &&
            (a = c
              ? ((r = u),
                (o = l.pointToCoord(o)),
                h
                  ? ((n = r.startAngle),
                    (i = r.endAngle),
                    (-o[1] / 180) * Math.PI)
                  : ((n = r.r0), (i = r.r), o[0]))
              : h
              ? ((n = u.x), (i = u.x + u.width), t.x)
              : ((n = u.y + u.height), (i = u.y), t.y)),
          (r = i === n ? 0 : (a - n) / (i - n)),
          p && (r = 1 - r),
          (o = S(f) ? f(e) : d * r + g),
          (a = (t = s.getSymbolPath()).getTextContent()),
          s.attr({ scaleX: 0, scaleY: 0 }),
          s.animateTo(
            { scaleX: 1, scaleY: 1 },
            { duration: 200, setToFinal: !0, delay: o }
          ),
          a &&
            a.animateFrom(
              { style: { opacity: 0 } },
              { duration: 300, delay: o }
            ),
          (t.disableLabelAnimation = !0));
      });
    }),
    (Ew.prototype._initOrUpdateEndLabel = function (t, e, n) {
      var i,
        r,
        o,
        a = t.getModel("endLabel");
      Lw(t)
        ? ((i = t.getData()),
          (r = this._polyline),
          (o = i.getLayout("points"))
            ? (this._endLabel ||
                (((this._endLabel = new Ls({ z2: 200 })).ignoreClip = !0),
                r.setTextContent(this._endLabel),
                (r.disableLabelAnimation = !0)),
              0 <= (o = Aw(o)) &&
                (hc(
                  r,
                  cc(t, "endLabel"),
                  {
                    inheritColor: n,
                    labelFetcher: t,
                    labelDataIndex: o,
                    defaultText: function (t, e, n) {
                      return null != n ? Sx(i, n) : bx(i, t);
                    },
                    enableTextSetter: !0,
                  },
                  ((n = a),
                  (o = (t = (t = e).getBaseAxis()).isHorizontal()),
                  (t = t.inverse),
                  (a = o ? (t ? "right" : "left") : "center"),
                  (o = o ? "middle" : t ? "top" : "bottom"),
                  {
                    normal: {
                      align: n.get("align") || a,
                      verticalAlign: n.get("verticalAlign") || o,
                    },
                  })
                ),
                (r.textConfig.position = null)))
            : (r.removeTextContent(), (this._endLabel = null)))
        : this._endLabel &&
          (this._polyline.removeTextContent(), (this._endLabel = null));
    }),
    (Ew.prototype._endLabelOnDuring = function (t, e, n, i, r, o, a) {
      var s,
        l,
        u,
        h,
        c,
        p,
        d,
        f,
        g,
        y,
        m = this._endLabel,
        v = this._polyline;
      m &&
        (t < 1 &&
          null == i.originalX &&
          ((i.originalX = m.x), (i.originalY = m.y)),
        (s = n.getLayout("points")),
        (g = (l = n.hostModel).get("connectNulls")),
        (u = o.get("precision")),
        (o = o.get("distance") || 0),
        (c = (a = a.getBaseAxis()).isHorizontal()),
        (a = a.inverse),
        (e = e.shape),
        (h = (c ? o : 0) * (a ? -1 : 1)),
        (o = (c ? 0 : -o) * (a ? -1 : 1)),
        (d = void 0),
        1 <=
        (f =
          (p = (c = (function (t, e, n) {
            for (
              var i,
                r,
                o = t.length / 2,
                a = "x" === n ? 0 : 1,
                s = 0,
                l = -1,
                u = 0;
              u < o;
              u++
            )
              if (((r = t[2 * u + a]), !isNaN(r) && !isNaN(t[2 * u + 1 - a]))) {
                if (0 !== u) {
                  if ((i <= e && e <= r) || (e <= i && r <= e)) {
                    l = u;
                    break;
                  }
                  s = u;
                }
                i = r;
              }
            return { range: [s, l], t: (e - i) / (r - i) };
          })(
            s,
            (a = a ? (c ? e.x : e.y + e.height) : c ? e.x + e.width : e.y),
            (e = c ? "x" : "y")
          )).range)[1] - p[0])
          ? (1 < f && !g
              ? ((y = Pw(s, p[0])),
                m.attr({ x: y[0] + h, y: y[1] + o }),
                r && (d = l.getRawValue(p[0])))
              : ((y = v.getPointOn(a, e)) &&
                  m.attr({ x: y[0] + h, y: y[1] + o }),
                (f = l.getRawValue(p[0])),
                (g = l.getRawValue(p[1])),
                r && (d = Eo(n, u, f, g, c.t))),
            (i.lastFrameIndex = p[0]))
          : ((y = Pw(s, (v = 1 === t || 0 < i.lastFrameIndex ? p[0] : 0))),
            r && (d = l.getRawValue(v)),
            m.attr({ x: y[0] + h, y: y[1] + o })),
        r) &&
        "function" == typeof (a = vc(m)).setLabelText &&
        a.setLabelText(d);
    }),
    (Ew.prototype._doUpdateAnimation = function (t, e, n, i, r, o, a) {
      var s = this._polyline,
        l = this._polygon,
        u = t.hostModel,
        e = (function (t, e, n, i, r, o) {
          (a = []),
            e
              .diff(t)
              .add(function (t) {
                a.push({ cmd: "+", idx: t });
              })
              .update(function (t, e) {
                a.push({ cmd: "=", idx: e, idx1: t });
              })
              .remove(function (t) {
                a.push({ cmd: "-", idx: t });
              })
              .execute();
          for (
            var a,
              s = a,
              l = [],
              u = [],
              h = [],
              c = [],
              p = [],
              d = [],
              f = [],
              g = sw(r, e, o),
              y = t.getLayout("points") || [],
              m = e.getLayout("points") || [],
              v = 0;
            v < s.length;
            v++
          ) {
            var _ = s[v],
              x = !0,
              w = void 0;
            switch (_.cmd) {
              case "=":
                var b = 2 * _.idx,
                  w = 2 * _.idx1,
                  S = y[b],
                  M = y[1 + b],
                  T = m[w],
                  C = m[w + 1];
                (isNaN(S) || isNaN(M)) && ((S = T), (M = C)),
                  l.push(S, M),
                  u.push(T, C),
                  h.push(n[b], n[1 + b]),
                  c.push(i[w], i[w + 1]),
                  f.push(e.getRawIndex(_.idx1));
                break;
              case "+":
                (S = _.idx),
                  (M = g.dataDimsForPoint),
                  (T = r.dataToPoint([e.get(M[0], S), e.get(M[1], S)])),
                  (C =
                    ((w = 2 * S),
                    l.push(T[0], T[1]),
                    u.push(m[w], m[w + 1]),
                    lw(g, r, e, S)));
                h.push(C[0], C[1]),
                  c.push(i[w], i[w + 1]),
                  f.push(e.getRawIndex(S));
                break;
              case "-":
                x = !1;
            }
            x && (p.push(_), d.push(d.length));
          }
          d.sort(function (t, e) {
            return f[t] - f[e];
          });
          for (
            var I = Zv((o = l.length)),
              D = Zv(o),
              k = Zv(o),
              A = Zv(o),
              P = [],
              v = 0;
            v < d.length;
            v++
          ) {
            var L = d[v],
              O = 2 * v,
              R = 2 * L;
            (I[O] = l[R]),
              (I[1 + O] = l[1 + R]),
              (D[O] = u[R]),
              (D[1 + O] = u[1 + R]),
              (k[O] = h[R]),
              (k[1 + O] = h[1 + R]),
              (A[O] = c[R]),
              (A[1 + O] = c[1 + R]),
              (P[v] = p[L]);
          }
          return {
            current: I,
            next: D,
            stackedOnCurrent: k,
            stackedOnNext: A,
            status: P,
          };
        })(
          this._data,
          t,
          this._stackedOnPoints,
          e,
          this._coordSys,
          this._valueOrigin
        ),
        h = e.current,
        c = e.stackedOnCurrent,
        p = e.next,
        d = e.stackedOnNext;
      if (
        (r &&
          ((h = Iw(e.current, n, r, a)),
          (c = Iw(e.stackedOnCurrent, n, r, a)),
          (p = Iw(e.next, n, r, a)),
          (d = Iw(e.stackedOnNext, n, r, a))),
        3e3 < Tw(h, p) || (l && 3e3 < Tw(c, d)))
      )
        s.stopAnimation(),
          s.setShape({ points: p }),
          l &&
            (l.stopAnimation(), l.setShape({ points: p, stackedOnPoints: d }));
      else {
        (s.shape.__points = e.current), (s.shape.points = h);
        n = { shape: { points: p } };
        e.current !== h && (n.shape.__points = e.next),
          s.stopAnimation(),
          Ih(s, n, u),
          l &&
            (l.setShape({ points: h, stackedOnPoints: c }),
            l.stopAnimation(),
            Ih(l, { shape: { stackedOnPoints: d } }, u),
            s.shape.points !== l.shape.points) &&
            (l.shape.points = s.shape.points);
        for (var f, g = [], y = e.status, m = 0; m < y.length; m++)
          "=" === y[m].cmd &&
            (f = t.getItemGraphicEl(y[m].idx1)) &&
            g.push({ el: f, ptIdx: m });
        s.animators &&
          s.animators.length &&
          s.animators[0].during(function () {
            l && l.dirtyShape();
            for (var t = s.shape.__points, e = 0; e < g.length; e++) {
              var n = g[e].el,
                i = 2 * g[e].ptIdx;
              (n.x = t[i]), (n.y = t[1 + i]), n.markRedraw();
            }
          });
      }
    }),
    (Ew.prototype.remove = function (t) {
      var n = this.group,
        i = this._data;
      this._lineGroup.removeAll(),
        this._symbolDraw.remove(!0),
        i &&
          i.eachItemGraphicEl(function (t, e) {
            t.__temp && (n.remove(t), i.setItemGraphicEl(e, null));
          }),
        (this._polyline =
          this._polygon =
          this._coordSys =
          this._points =
          this._stackedOnPoints =
          this._endLabel =
          this._data =
            null);
    }),
    (Ew.type = "line");
  var Rw,
    Nw = Ew;
  function Ew() {
    return (null !== Rw && Rw.apply(this, arguments)) || this;
  }
  E_(function (t) {
    var i;
    t.registerChartView(Nw),
      t.registerSeriesModel(Kx),
      t.registerLayout(
        ((i = !0),
        {
          seriesType: "line",
          plan: Xg(),
          reset: function (t) {
            var h,
              e,
              c,
              p,
              d,
              n = t.getData(),
              f = t.coordinateSystem,
              t = t.pipelineContext,
              g = i || t.large;
            if (f)
              return (
                (t = F(f.dimensions, function (t) {
                  return n.mapDimension(t);
                }).slice(0, 2)),
                (h = t.length),
                (e = n.getCalculationInfo("stackResultDimension")),
                bv(n, t[0]) && (t[0] = e),
                bv(n, t[1]) && (t[1] = e),
                (c = n.getStore()),
                (p = n.getDimensionIndex(t[0])),
                (d = n.getDimensionIndex(t[1])),
                h && {
                  progress: function (t, e) {
                    for (
                      var n = t.end - t.start,
                        i = g && Zv(n * h),
                        r = [],
                        o = [],
                        a = t.start,
                        s = 0;
                      a < t.end;
                      a++
                    ) {
                      var l,
                        u = void 0;
                      (u =
                        1 === h
                          ? ((l = c.get(p, a)), f.dataToPoint(l, null, o))
                          : ((r[0] = c.get(p, a)),
                            (r[1] = c.get(d, a)),
                            f.dataToPoint(r, null, o))),
                        g
                          ? ((i[s++] = u[0]), (i[s++] = u[1]))
                          : e.setItemLayout(a, u.slice());
                    }
                    g && e.setLayout("points", i);
                  },
                }
              );
          },
        })
      ),
      t.registerVisual({
        seriesType: "line",
        reset: function (t) {
          var e = t.getData(),
            t = t.getModel("lineStyle").getLineStyle();
          t && !t.stroke && (t.stroke = e.getVisual("style").fill),
            e.setVisual("legendLineStyle", t);
        },
      }),
      t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC, lx("line"));
  });
  var zw = 2 * Math.PI,
    Bw = Math.PI / 180;
  function Fw(t, e) {
    return Lp(t.getBoxLayoutParams(), {
      width: e.getWidth(),
      height: e.getHeight(),
    });
  }
  function Vw(t, e) {
    var n = Fw(t, e),
      i = t.get("center"),
      r = t.get("radius");
    V(r) || (r = [0, r]);
    var o,
      a = Kr(n.width, e.getWidth()),
      e = Kr(n.height, e.getHeight()),
      s = Math.min(a, e),
      l = Kr(r[0], s / 2),
      r = Kr(r[1], s / 2),
      s = t.coordinateSystem;
    return (
      (s = s
        ? ((o = (t = s.dataToPoint(i))[0] || 0), t[1] || 0)
        : ((o = Kr((i = V(i) ? i : [i, i])[0], a) + n.x), Kr(i[1], e) + n.y)),
      { cx: o, cy: s, r0: l, r: r }
    );
  }
  function Hw(t, e, S) {
    e.eachSeriesByType(t, function (t) {
      var n,
        r = t.getData(),
        e = r.mapDimension("value"),
        i = Fw(t, S),
        o = Vw(t, S),
        a = o.cx,
        s = o.cy,
        l = o.r,
        u = o.r0,
        h = -t.get("startAngle") * Bw,
        c = t.get("minAngle") * Bw,
        p = 0,
        d =
          (r.each(e, function (t) {
            isNaN(t) || p++;
          }),
          r.getSum(e)),
        f = (Math.PI / (d || p)) * 2,
        g = t.get("clockwise"),
        y = t.get("roseType"),
        m = t.get("stillShowZeroSum"),
        v = r.getDataExtent(e),
        _ = ((v[0] = 0), zw),
        x = 0,
        w = h,
        b = g ? 1 : -1;
      r.setLayout({ viewRect: i, r: l }),
        r.each(e, function (t, e) {
          var n, i;
          isNaN(t)
            ? r.setItemLayout(e, {
                angle: NaN,
                startAngle: NaN,
                endAngle: NaN,
                clockwise: g,
                cx: a,
                cy: s,
                r0: u,
                r: y ? NaN : l,
              })
            : ((n = "area" !== y ? (0 === d && m ? f : t * f) : zw / p) < c
                ? (_ -= n = c)
                : (x += t),
              (i = w + b * n),
              r.setItemLayout(e, {
                angle: n,
                startAngle: w,
                endAngle: i,
                clockwise: g,
                cx: a,
                cy: s,
                r0: u,
                r: y ? jr(t, v, [u, l]) : l,
              }),
              (w = i));
        }),
        _ < zw &&
          p &&
          (_ <= 0.001
            ? ((n = zw / p),
              r.each(e, function (t, e) {
                isNaN(t) ||
                  (((t = r.getItemLayout(e)).angle = n),
                  (t.startAngle = h + b * e * n),
                  (t.endAngle = h + b * (e + 1) * n));
              }))
            : ((f = _ / x),
              (w = h),
              r.each(e, function (t, e) {
                isNaN(t) ||
                  ((t = (e = r.getItemLayout(e)).angle === c ? c : t * f),
                  (e.startAngle = w),
                  (e.endAngle = w + b * t),
                  (w += b * t));
              })));
    });
  }
  var Gw = Math.PI / 180;
  function Ww(t, s, l, u, h, e, n, i, r, o) {
    if (!(t.length < 2)) {
      for (var a, c = t.length, p = 0; p < c; p++)
        "outer" === t[p].position &&
          "labelLine" === t[p].labelAlignTo &&
          ((a = t[p].label.x - o),
          (t[p].linePoints[1][0] += a),
          (t[p].label.x = o));
      if (R1(t, r, r + n)) {
        for (
          var d,
            f,
            g,
            y,
            m,
            v = t,
            _ = { list: [], maxY: 0 },
            x = { list: [], maxY: 0 },
            w = 0;
          w < v.length;
          w++
        )
          "none" === v[w].labelAlignTo &&
            ((f = (d = v[w]).label.y > l ? x : _),
            (g = Math.abs(d.label.y - l)) >= f.maxY &&
              ((m = d.label.x - s - d.len2 * h),
              (y = u + d.len),
              (m =
                Math.abs(m) < y
                  ? Math.sqrt((g * g) / (1 - (m * m) / y / y))
                  : y),
              (f.rB = m),
              (f.maxY = g)),
            f.list.push(d));
        b(_), b(x);
      }
    }
    function b(t) {
      for (var e = t.rB, n = e * e, i = 0; i < t.list.length; i++) {
        var r = t.list[i],
          o = Math.abs(r.label.y - l),
          a = u + r.len,
          a = a * a,
          o = Math.sqrt((1 - Math.abs((o * o) / n)) * a),
          a = s + (o + r.len2) * h,
          o = a - r.label.x;
        Uw(r, r.targetTextWidth - o * h, !0), (r.label.x = a);
      }
    }
  }
  function Uw(t, e, n) {
    var i, r, o, a, s, l, u;
    void 0 === n && (n = !1),
      null == t.labelStyleWidth &&
        ((s = (i = t.label).style),
        (r = t.rect),
        (l = s.backgroundColor),
        (u = (u = s.padding) ? u[1] + u[3] : 0),
        (s = s.overflow),
        e < (o = r.width + (l ? 0 : u)) || n) &&
        ((a = r.height),
        s && s.match("break")
          ? (i.setStyle("backgroundColor", null),
            i.setStyle("width", e - u),
            (s = i.getBoundingRect()),
            i.setStyle("width", Math.ceil(s.width)),
            i.setStyle("backgroundColor", l))
          : ((s = e - u),
            (l = !(e < o) && (!n || s > t.unconstrainedWidth) ? null : s),
            i.setStyle("width", l)),
        (u = i.getBoundingRect()),
        (r.width = u.width),
        (e = (i.style.margin || 0) + 2.1),
        (r.height = u.height + e),
        (r.y -= (r.height - a) / 2));
  }
  function Xw(t) {
    return "center" === t.position;
  }
  function Yw(t) {
    var S,
      M,
      T = t.getData(),
      C = [],
      I = !1,
      D = (t.get("minShowLabelAngle") || 0) * Gw,
      e = T.getLayout("viewRect"),
      k = T.getLayout("r"),
      A = e.width,
      P = e.x,
      n = e.y,
      e = e.height;
    function L(t) {
      t.ignore = !0;
    }
    if (
      (T.each(function (t) {
        var e,
          n,
          i,
          r,
          o,
          a,
          s,
          l,
          u,
          h,
          c,
          p = T.getItemGraphicEl(t),
          d = p.shape,
          f = p.getTextContent(),
          g = p.getTextGuideLine(),
          t = T.getItemModel(t),
          y = t.getModel("label"),
          m = y.get("position") || t.get(["emphasis", "label", "position"]),
          v = y.get("distanceToLabelLine"),
          _ = y.get("alignTo"),
          x = Kr(y.get("edgeDistance"), A),
          w = y.get("bleedMargin"),
          t = t.getModel("labelLine"),
          b = Kr(t.get("length"), A);
        (e = Kr(t.get("length2"), A)),
          Math.abs(d.endAngle - d.startAngle) < D
            ? (E(f.states, L),
              (f.ignore = !0),
              g && (E(g.states, L), (g.ignore = !0)))
            : (function (t) {
                if (!t.ignore) return 1;
                for (var e in t.states) if (!1 === t.states[e].ignore) return 1;
              })(f) &&
              ((c = (d.startAngle + d.endAngle) / 2),
              (n = Math.cos(c)),
              (i = Math.sin(c)),
              (S = d.cx),
              (M = d.cy),
              (r = "inside" === m || "inner" === m),
              (l =
                "center" === m
                  ? ((o = d.cx), (a = d.cy), "center")
                  : ((o =
                      (l = (r ? ((d.r + d.r0) / 2) * n : d.r * n) + S) + 3 * n),
                    (a =
                      (u = (r ? ((d.r + d.r0) / 2) * i : d.r * i) + M) + 3 * i),
                    r ||
                      ((s = l + n * (b + k - d.r)),
                      (d = u + i * (b + k - d.r)),
                      (h = s + (n < 0 ? -1 : 1) * e),
                      (o =
                        "edge" === _
                          ? n < 0
                            ? P + x
                            : P + A - x
                          : h + (n < 0 ? -v : v)),
                      (s = [
                        [l, u],
                        [s, (a = d)],
                        [h, d],
                      ])),
                    r
                      ? "center"
                      : "edge" === _
                      ? 0 < n
                        ? "right"
                        : "left"
                      : 0 < n
                      ? "left"
                      : "right")),
              (u = Math.PI),
              (h = 0),
              G((d = y.get("rotate")))
                ? (h = d * (u / 180))
                : "center" === m
                ? (h = 0)
                : "radial" === d || !0 === d
                ? (h = n < 0 ? -c + u : -c)
                : "tangential" === d &&
                  "outside" !== m &&
                  "outer" !== m &&
                  ((y = Math.atan2(n, i)) < 0 && (y = 2 * u + y),
                  (h = (y = 0 < i ? u + y : y) - u)),
              (I = !!h),
              (f.x = o),
              (f.y = a),
              (f.rotation = h),
              f.setStyle({ verticalAlign: "middle" }),
              r
                ? (f.setStyle({ align: l }),
                  (c = f.states.select) && ((c.x += f.x), (c.y += f.y)))
                : ((d = f.getBoundingRect().clone()).applyTransform(
                    f.getComputedTransform()
                  ),
                  (y = (f.style.margin || 0) + 2.1),
                  (d.y -= y / 2),
                  (d.height += y),
                  C.push({
                    label: f,
                    labelLine: g,
                    position: m,
                    len: b,
                    len2: e,
                    minTurnAngle: t.get("minTurnAngle"),
                    maxSurfaceAngle: t.get("maxSurfaceAngle"),
                    surfaceNormal: new z(n, i),
                    linePoints: s,
                    textAlign: l,
                    labelDistance: v,
                    labelAlignTo: _,
                    edgeDistance: x,
                    bleedMargin: w,
                    rect: d,
                    unconstrainedWidth: d.width,
                    labelStyleWidth: f.style.width,
                  })),
              p.setTextConfig({ inside: r }));
      }),
      !I && t.get("avoidLabelOverlap"))
    ) {
      for (
        var i = C,
          r = S,
          o = ((t = M), k),
          a = A,
          s = P,
          l,
          u,
          h,
          c,
          p,
          d,
          f = [],
          g = [],
          y = Number.MAX_VALUE,
          m = -Number.MAX_VALUE,
          v = 0;
        v < i.length;
        v++
      ) {
        var _ = i[v].label;
        Xw(i[v]) ||
          (_.x < r
            ? ((y = Math.min(y, _.x)), f)
            : ((m = Math.max(m, _.x)), g)
          ).push(i[v]);
      }
      for (v = 0; v < i.length; v++)
        !Xw((u = i[v])) &&
          u.linePoints &&
          null == u.labelStyleWidth &&
          ((_ = u.label),
          (h = u.linePoints),
          (l = void 0),
          (l =
            "edge" === u.labelAlignTo
              ? _.x < r
                ? h[2][0] - u.labelDistance - s - u.edgeDistance
                : s + a - u.edgeDistance - h[2][0] - u.labelDistance
              : "labelLine" === u.labelAlignTo
              ? _.x < r
                ? y - s - u.bleedMargin
                : s + a - m - u.bleedMargin
              : _.x < r
              ? _.x - s - u.bleedMargin
              : s + a - _.x - u.bleedMargin),
          (u.targetTextWidth = l),
          Uw(u, l));
      for (
        Ww(g, r, t, o, 1, 0, e, 0, n, m),
          Ww(f, r, t, o, -1, 0, e, 0, n, y),
          v = 0;
        v < i.length;
        v++
      )
        !Xw((u = i[v])) &&
          u.linePoints &&
          ((_ = u.label),
          (h = u.linePoints),
          (c = "edge" === u.labelAlignTo),
          (p = (p = _.style.padding) ? p[1] + p[3] : 0),
          (p = _.style.backgroundColor ? 0 : p),
          (p = u.rect.width + p),
          (d = h[1][0] - h[2][0]),
          c
            ? _.x < r
              ? (h[2][0] = s + u.edgeDistance + p + u.labelDistance)
              : (h[2][0] = s + a - u.edgeDistance - p - u.labelDistance)
            : (_.x < r
                ? (h[2][0] = _.x + u.labelDistance)
                : (h[2][0] = _.x - u.labelDistance),
              (h[1][0] = h[2][0] + d)),
          (h[1][1] = h[2][1] = _.y));
    }
    for (var x = 0; x < C.length; x++) {
      var w,
        b = C[x],
        O = b.label,
        R = b.labelLine,
        N = isNaN(O.x) || isNaN(O.y);
      O &&
        (O.setStyle({ align: b.textAlign }),
        N && (E(O.states, L), (O.ignore = !0)),
        (w = O.states.select)) &&
        ((w.x += O.x), (w.y += O.y)),
        R &&
          ((w = b.linePoints),
          N || !w
            ? (E(R.states, L), (R.ignore = !0))
            : (I1(w, b.minTurnAngle),
              (function (t, e, n) {
                if (n <= 180 && 0 < n) {
                  (n = (n / 180) * Math.PI),
                    _1.fromArray(t[0]),
                    x1.fromArray(t[1]),
                    w1.fromArray(t[2]),
                    z.sub(b1, x1, _1),
                    z.sub(S1, w1, x1);
                  var i = b1.len(),
                    r = S1.len();
                  if (
                    !(i < 0.001 || r < 0.001) &&
                    (b1.scale(1 / i), S1.scale(1 / r), b1.dot(e) < Math.cos(n))
                  ) {
                    (i = g1(x1.x, x1.y, w1.x, w1.y, _1.x, _1.y, T1, !1)),
                      (r = (C1.fromArray(T1), Math.PI / 2)),
                      (e = r + Math.acos(S1.dot(e)) - n);
                    if (r <= e) z.copy(C1, w1);
                    else {
                      C1.scaleAndAdd(S1, i / Math.tan(Math.PI / 2 - e));
                      n =
                        w1.x !== x1.x
                          ? (C1.x - x1.x) / (w1.x - x1.x)
                          : (C1.y - x1.y) / (w1.y - x1.y);
                      if (isNaN(n)) return;
                      n < 0 ? z.copy(C1, x1) : 1 < n && z.copy(C1, w1);
                    }
                    C1.toArray(t[1]);
                  }
                }
              })(w, b.surfaceNormal, b.maxSurfaceAngle),
              R.setShape({ points: w }),
              (O.__hostTarget.textGuideLineConfig = {
                anchor: new z(w[0][0], w[0][1]),
              })));
    }
  }
  u(Qw, (Zw = Au)),
    (Qw.prototype.updateData = function (t, e, n, i) {
      var r = this,
        o = t.hostModel,
        a = t.getItemModel(e),
        s = a.getModel("emphasis"),
        l = t.getItemLayout(e),
        u = L(Cx(a.getModel("itemStyle"), l, !0), l);
      isNaN(u.startAngle)
        ? r.setShape(u)
        : (i
            ? (r.setShape(u),
              (i = o.getShallow("animationType")),
              o.ecModel.ssr
                ? (Dh(r, { scaleX: 0, scaleY: 0 }, o, {
                    dataIndex: e,
                    isFrom: !0,
                  }),
                  (r.originX = u.cx),
                  (r.originY = u.cy))
                : "scale" === i
                ? ((r.shape.r = l.r0), Dh(r, { shape: { r: l.r } }, o, e))
                : null != n
                ? (r.setShape({ startAngle: n, endAngle: n }),
                  Dh(
                    r,
                    {
                      shape: { startAngle: l.startAngle, endAngle: l.endAngle },
                    },
                    o,
                    e
                  ))
                : ((r.shape.endAngle = l.startAngle),
                  Ih(r, { shape: { endAngle: l.endAngle } }, o, e)))
            : (Oh(r), Ih(r, { shape: u }, o, e)),
          r.useStyle(t.getItemVisual(e, "style")),
          zl(r, a),
          (i = (l.startAngle + l.endAngle) / 2),
          (n = o.get("selectedOffset")),
          (u = Math.cos(i) * n),
          (i = Math.sin(i) * n),
          (n = a.getShallow("cursor")) && r.attr("cursor", n),
          this._updateLabel(o, t, e),
          (r.ensureState("emphasis").shape = L(
            { r: l.r + ((s.get("scale") && s.get("scaleSize")) || 0) },
            Cx(s.getModel("itemStyle"), l)
          )),
          L(r.ensureState("select"), {
            x: u,
            y: i,
            shape: Cx(a.getModel(["select", "itemStyle"]), l),
          }),
          L(r.ensureState("blur"), {
            shape: Cx(a.getModel(["blur", "itemStyle"]), l),
          }),
          (n = r.getTextGuideLine()),
          (o = r.getTextContent()),
          n && L(n.ensureState("select"), { x: u, y: i }),
          L(o.ensureState("select"), { x: u, y: i }),
          Rl(this, s.get("focus"), s.get("blurScope"), s.get("disabled")));
    }),
    (Qw.prototype._updateLabel = function (t, e, n) {
      var i = e.getItemModel(n),
        r = i.getModel("labelLine"),
        o = e.getItemVisual(n, "style"),
        a = o && o.fill,
        o = o && o.opacity,
        e =
          (hc(this, cc(i), {
            labelFetcher: e.hostModel,
            labelDataIndex: n,
            inheritColor: a,
            defaultOpacity: o,
            defaultText: t.getFormattedLabel(n, "normal") || e.getName(n),
          }),
          this.getTextContent()),
        n =
          (this.setTextConfig({ position: null, rotation: null }),
          e.attr({ z2: 10 }),
          t.get(["label", "position"]));
      "outside" !== n && "outer" !== n
        ? this.removeTextGuideLine()
        : (this.getTextGuideLine() ||
            ((e = new Wu()), this.setTextGuideLine(e)),
          A1(this, P1(i), {
            stroke: a,
            opacity: bt(r.get(["lineStyle", "opacity"]), o, 1),
          }));
    });
  var qw,
    Zw,
    jw = Qw,
    Kw =
      (u($w, (qw = Zg)),
      ($w.prototype.render = function (e, t, n, i) {
        var r,
          o = e.getData(),
          a = this._data,
          s = this.group;
        if (!a && 0 < o.count()) {
          for (
            var l = o.getItemLayout(0), u = 1;
            isNaN(l && l.startAngle) && u < o.count();
            ++u
          )
            l = o.getItemLayout(u);
          l && (r = l.startAngle);
        }
        this._emptyCircleSector && s.remove(this._emptyCircleSector),
          0 === o.count() &&
            e.get("showEmptyCircle") &&
            ((n = new Au({ shape: Vw(e, n) })).useStyle(
              e.getModel("emptyCircleStyle").getItemStyle()
            ),
            (this._emptyCircleSector = n),
            s.add(n)),
          o
            .diff(a)
            .add(function (t) {
              var e = new jw(o, t, r);
              o.setItemGraphicEl(t, e), s.add(e);
            })
            .update(function (t, e) {
              e = a.getItemGraphicEl(e);
              e.updateData(o, t, r),
                e.off("click"),
                s.add(e),
                o.setItemGraphicEl(t, e);
            })
            .remove(function (t) {
              Lh(a.getItemGraphicEl(t), e, t);
            })
            .execute(),
          Yw(e),
          "expansion" !== e.get("animationTypeUpdate") && (this._data = o);
      }),
      ($w.prototype.dispose = function () {}),
      ($w.prototype.containPoint = function (t, e) {
        var n,
          e = e.getData().getItemLayout(0);
        if (e)
          return (
            (n = t[0] - e.cx),
            (t = t[1] - e.cy),
            (n = Math.sqrt(n * n + t * t)) <= e.r && n >= e.r0
          );
      }),
      ($w.type = "pie"),
      $w);
  function $w() {
    var t = (null !== qw && qw.apply(this, arguments)) || this;
    return (t.ignoreLabelLineUpdate = !0), t;
  }
  function Qw(t, e, n) {
    var i = Zw.call(this) || this,
      r = ((i.z2 = 2), new Ls());
    return i.setTextContent(r), i.updateData(t, e, n, !0), i;
  }
  (tb.prototype.getAllNames = function () {
    var t = this._getRawData();
    return t.mapArray(t.getName);
  }),
    (tb.prototype.containName = function (t) {
      return 0 <= this._getRawData().indexOfName(t);
    }),
    (tb.prototype.indexOfName = function (t) {
      return this._getDataWithEncodedVisual().indexOfName(t);
    }),
    (tb.prototype.getItemVisual = function (t, e) {
      return this._getDataWithEncodedVisual().getItemVisual(t, e);
    });
  var Jw = tb;
  function tb(t, e) {
    (this._getDataWithEncodedVisual = t), (this._getRawData = e);
  }
  var eb,
    nb = ko(),
    ib =
      (u(rb, (eb = Ng)),
      (rb.prototype.init = function (t) {
        eb.prototype.init.apply(this, arguments),
          (this.legendVisualProvider = new Jw(
            ct(this.getData, this),
            ct(this.getRawData, this)
          )),
          this._defaultLabelLine(t);
      }),
      (rb.prototype.mergeOption = function () {
        eb.prototype.mergeOption.apply(this, arguments);
      }),
      (rb.prototype.getInitialData = function () {
        return (
          (e = V(
            (e = {
              coordDimensions: ["value"],
              encodeDefaulter: pt(nd, (t = this)),
            })
          )
            ? { coordDimensions: e }
            : L({ encodeDefine: t.getEncode() }, e)),
          (i = t.getSource()),
          (e = mv(i, e).dimensions),
          (e = new yv(e, t)).initData(i, n),
          e
        );
        var t, e, n, i;
      }),
      (rb.prototype.getDataParams = function (t) {
        var e,
          n = this.getData(),
          i = nb(n),
          r = i.seats,
          i =
            (r ||
              ((e = []),
              n.each(n.mapDimension("value"), function (t) {
                e.push(t);
              }),
              (r = i.seats = eo(e, n.hostModel.get("percentPrecision")))),
            eb.prototype.getDataParams.call(this, t));
        return (i.percent = r[t] || 0), i.$vars.push("percent"), i;
      }),
      (rb.prototype._defaultLabelLine = function (t) {
        vo(t, "labelLine", ["show"]);
        var e = t.labelLine,
          n = t.emphasis.labelLine;
        (e.show = e.show && t.label.show),
          (n.show = n.show && t.emphasis.label.show);
      }),
      (rb.type = "series.pie"),
      (rb.defaultOption = {
        z: 2,
        legendHoverLink: !0,
        colorBy: "data",
        center: ["50%", "50%"],
        radius: [0, "75%"],
        clockwise: !0,
        startAngle: 90,
        minAngle: 0,
        minShowLabelAngle: 0,
        selectedOffset: 10,
        percentPrecision: 2,
        stillShowZeroSum: !0,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        width: null,
        height: null,
        label: {
          rotate: 0,
          show: !0,
          overflow: "truncate",
          position: "outer",
          alignTo: "none",
          edgeDistance: "25%",
          bleedMargin: 10,
          distanceToLabelLine: 5,
        },
        labelLine: {
          show: !0,
          length: 15,
          length2: 15,
          smooth: !1,
          minTurnAngle: 90,
          maxSurfaceAngle: 90,
          lineStyle: { width: 1, type: "solid" },
        },
        itemStyle: { borderWidth: 1, borderJoin: "round" },
        showEmptyCircle: !0,
        emptyCircleStyle: { color: "lightgray", opacity: 1 },
        labelLayout: { hideOverlap: !0 },
        emphasis: { scale: !0, scaleSize: 5 },
        avoidLabelOverlap: !0,
        animationType: "expansion",
        animationDuration: 1e3,
        animationTypeUpdate: "transition",
        animationEasingUpdate: "cubicInOut",
        animationDurationUpdate: 500,
        animationEasing: "cubicInOut",
      }),
      rb);
  function rb() {
    return (null !== eb && eb.apply(this, arguments)) || this;
  }
  E_(function (t) {
    t.registerChartView(Kw),
      t.registerSeriesModel(ib),
      Ny("pie", t.registerAction),
      t.registerLayout(pt(Hw, "pie")),
      t.registerProcessor({
        seriesType: "pie",
        reset: function (t, e) {
          var i,
            r = e.findComponents({ mainType: "legend" });
          r &&
            r.length &&
            (i = t.getData()).filterSelf(function (t) {
              for (var e = i.getName(t), n = 0; n < r.length; n++)
                if (!r[n].isSelected(e)) return !1;
              return !0;
            });
        },
      }),
      t.registerProcessor({
        seriesType: "pie",
        reset: function (t, e) {
          var n = t.getData();
          n.filterSelf(function (t) {
            var e = n.mapDimension("value"),
              e = n.get(e, t);
            return !(G(e) && !isNaN(e) && e < 0);
          });
        },
      });
  });
  u(sb, (ob = g)),
    (sb.type = "grid"),
    (sb.dependencies = ["xAxis", "yAxis"]),
    (sb.layoutMode = "box"),
    (sb.defaultOption = {
      show: !1,
      z: 0,
      left: "10%",
      top: 60,
      right: "10%",
      bottom: 70,
      containLabel: !1,
      backgroundColor: "rgba(0,0,0,0)",
      borderWidth: 1,
      borderColor: "#ccc",
    });
  var ob,
    ab = sb;
  function sb() {
    return (null !== ob && ob.apply(this, arguments)) || this;
  }
  u(hb, (lb = g)),
    (hb.prototype.getCoordSysModel = function () {
      return this.getReferringComponents("grid", Oo).models[0];
    }),
    (hb.type = "cartesian2dAxis");
  var lb,
    ub = hb;
  function hb() {
    return (null !== lb && lb.apply(this, arguments)) || this;
  }
  at(ub, L_);
  var Wo = {
      show: !0,
      z: 0,
      inverse: !1,
      name: "",
      nameLocation: "end",
      nameRotate: null,
      nameTruncate: { maxWidth: null, ellipsis: "...", placeholder: "." },
      nameTextStyle: {},
      nameGap: 15,
      silent: !1,
      triggerEvent: !1,
      tooltip: { show: !1 },
      axisPointer: {},
      axisLine: {
        show: !0,
        onZero: !0,
        onZeroAxisIndex: null,
        lineStyle: { color: "#6E7079", width: 1, type: "solid" },
        symbol: ["none", "none"],
        symbolSize: [10, 15],
      },
      axisTick: { show: !0, inside: !1, length: 5, lineStyle: { width: 1 } },
      axisLabel: {
        show: !0,
        inside: !1,
        rotate: 0,
        showMinLabel: null,
        showMaxLabel: null,
        margin: 8,
        fontSize: 12,
      },
      splitLine: {
        show: !0,
        lineStyle: { color: ["#E0E6F1"], width: 1, type: "solid" },
      },
      splitArea: {
        show: !1,
        areaStyle: {
          color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"],
        },
      },
    },
    Vy = d(
      {
        boundaryGap: !0,
        deduplication: null,
        splitLine: { show: !1 },
        axisTick: { alignWithLabel: !1, interval: "auto" },
        axisLabel: { interval: "auto" },
      },
      Wo
    ),
    Xy = d(
      {
        boundaryGap: [0, 0],
        axisLine: { show: "auto" },
        axisTick: { show: "auto" },
        splitNumber: 5,
        minorTick: { show: !1, splitNumber: 5, length: 3, lineStyle: {} },
        minorSplitLine: { show: !1, lineStyle: { color: "#F4F7FD", width: 1 } },
      },
      Wo
    ),
    cb = {
      category: Vy,
      value: Xy,
      time: d(
        {
          splitNumber: 6,
          axisLabel: {
            showMinLabel: !1,
            showMaxLabel: !1,
            rich: { primary: { fontWeight: "bold" } },
          },
          splitLine: { show: !1 },
        },
        Xy
      ),
      log: B({ logBase: 10 }, Xy),
    },
    pb = { value: 1, category: 1, time: 1, log: 1 };
  function db(o, a, s, l) {
    E(pb, function (t, r) {
      var e,
        n = d(d({}, cb[r], !0), l, !0),
        n =
          (u(i, (e = s)),
          (i.prototype.mergeDefaultAndTheme = function (t, e) {
            var n = Op(this),
              i = n ? Np(t) : {};
            d(t, e.getTheme().get(r + "Axis")),
              d(t, this.getDefaultOption()),
              (t.type = fb(t)),
              n && Rp(t, i, n);
          }),
          (i.prototype.optionUpdated = function () {
            "category" === this.option.type &&
              (this.__ordinalMeta = Dv.createByAxisModel(this));
          }),
          (i.prototype.getCategories = function (t) {
            var e = this.option;
            if ("category" === e.type)
              return t ? e.data : this.__ordinalMeta.categories;
          }),
          (i.prototype.getOrdinalMeta = function () {
            return this.__ordinalMeta;
          }),
          (i.type = a + "Axis." + r),
          (i.defaultOption = n),
          i);
      function i() {
        var t = (null !== e && e.apply(this, arguments)) || this;
        return (t.type = a + "Axis." + r), t;
      }
      o.registerComponentModel(n);
    }),
      o.registerSubTypeDefaulter(a + "Axis", fb);
  }
  function fb(t) {
    return t.type || (t.data ? "category" : "value");
  }
  function gb(t) {
    (this.type = "cartesian"),
      (this._dimList = []),
      (this._axes = {}),
      (this.name = t || "");
  }
  (gb.prototype.getAxis = function (t) {
    return this._axes[t];
  }),
    (gb.prototype.getAxes = function () {
      return F(
        this._dimList,
        function (t) {
          return this._axes[t];
        },
        this
      );
    }),
    (gb.prototype.getAxesByScale = function (e) {
      return (
        (e = e.toLowerCase()),
        ut(this.getAxes(), function (t) {
          return t.scale.type === e;
        })
      );
    }),
    (gb.prototype.addAxis = function (t) {
      var e = t.dim;
      (this._axes[e] = t), this._dimList.push(e);
    });
  var yb = ["x", "y"];
  function mb(t) {
    return "interval" === t.type || "time" === t.type;
  }
  u(xb, (vb = gb)),
    (xb.prototype.calcAffineTransform = function () {
      this._transform = this._invTransform = null;
      var t,
        e,
        n,
        i,
        r = this.getAxis("x").scale,
        o = this.getAxis("y").scale;
      mb(r) &&
        mb(o) &&
        ((r = r.getExtent()),
        (o = o.getExtent()),
        (i = this.dataToPoint([r[0], o[0]])),
        (e = this.dataToPoint([r[1], o[1]])),
        (t = r[1] - r[0]),
        (n = o[1] - o[0]),
        t) &&
        n &&
        ((t = (e[0] - i[0]) / t),
        (e = (e[1] - i[1]) / n),
        (n = i[0] - r[0] * t),
        (r = i[1] - o[0] * e),
        (i = this._transform = [t, 0, 0, e, n, r]),
        (this._invTransform = Fe([], i)));
    }),
    (xb.prototype.getBaseAxis = function () {
      return (
        this.getAxesByScale("ordinal")[0] ||
        this.getAxesByScale("time")[0] ||
        this.getAxis("x")
      );
    }),
    (xb.prototype.containPoint = function (t) {
      var e = this.getAxis("x"),
        n = this.getAxis("y");
      return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]));
    }),
    (xb.prototype.containData = function (t) {
      return (
        this.getAxis("x").containData(t[0]) &&
        this.getAxis("y").containData(t[1])
      );
    }),
    (xb.prototype.containZone = function (t, e) {
      var t = this.dataToPoint(t),
        e = this.dataToPoint(e),
        n = this.getArea(),
        e = new W(t[0], t[1], e[0] - t[0], e[1] - t[1]);
      return n.intersect(e);
    }),
    (xb.prototype.dataToPoint = function (t, e, n) {
      n = n || [];
      var i,
        r = t[0],
        o = t[1];
      return this._transform &&
        null != r &&
        isFinite(r) &&
        null != o &&
        isFinite(o)
        ? ee(n, t, this._transform)
        : ((t = this.getAxis("x")),
          (i = this.getAxis("y")),
          (n[0] = t.toGlobalCoord(t.dataToCoord(r, e))),
          (n[1] = i.toGlobalCoord(i.dataToCoord(o, e))),
          n);
    }),
    (xb.prototype.clampData = function (t, e) {
      var n = this.getAxis("x").scale,
        i = this.getAxis("y").scale,
        r = n.getExtent(),
        o = i.getExtent(),
        n = n.parse(t[0]),
        i = i.parse(t[1]);
      return (
        ((e = e || [])[0] = Math.min(
          Math.max(Math.min(r[0], r[1]), n),
          Math.max(r[0], r[1])
        )),
        (e[1] = Math.min(
          Math.max(Math.min(o[0], o[1]), i),
          Math.max(o[0], o[1])
        )),
        e
      );
    }),
    (xb.prototype.pointToData = function (t, e) {
      var n,
        i,
        r = [];
      return this._invTransform
        ? ee(r, t, this._invTransform)
        : ((n = this.getAxis("x")),
          (i = this.getAxis("y")),
          (r[0] = n.coordToData(n.toLocalCoord(t[0]), e)),
          (r[1] = i.coordToData(i.toLocalCoord(t[1]), e)),
          r);
    }),
    (xb.prototype.getOtherAxis = function (t) {
      return this.getAxis("x" === t.dim ? "y" : "x");
    }),
    (xb.prototype.getArea = function () {
      var t = this.getAxis("x").getGlobalExtent(),
        e = this.getAxis("y").getGlobalExtent(),
        n = Math.min(t[0], t[1]),
        i = Math.min(e[0], e[1]),
        t = Math.max(t[0], t[1]) - n,
        e = Math.max(e[0], e[1]) - i;
      return new W(n, i, t, e);
    });
  var vb,
    _b = xb;
  function xb() {
    var t = (null !== vb && vb.apply(this, arguments)) || this;
    return (t.type = "cartesian2d"), (t.dimensions = yb), t;
  }
  u(Sb, (wb = kc)),
    (Sb.prototype.isHorizontal = function () {
      var t = this.position;
      return "top" === t || "bottom" === t;
    }),
    (Sb.prototype.getGlobalExtent = function (t) {
      var e = this.getExtent();
      return (
        (e[0] = this.toGlobalCoord(e[0])),
        (e[1] = this.toGlobalCoord(e[1])),
        t && e[0] > e[1] && e.reverse(),
        e
      );
    }),
    (Sb.prototype.pointToData = function (t, e) {
      return this.coordToData(
        this.toLocalCoord(t["x" === this.dim ? 0 : 1]),
        e
      );
    }),
    (Sb.prototype.setCategorySortInfo = function (t) {
      if ("category" !== this.type) return !1;
      (this.model.option.categorySortInfo = t), this.scale.setSortInfo(t);
    });
  var wb,
    bb = Sb;
  function Sb(t, e, n, i, r) {
    t = wb.call(this, t, e, n) || this;
    return (
      (t.index = 0), (t.type = i || "value"), (t.position = r || "bottom"), t
    );
  }
  function Mb(t, e, n) {
    n = n || {};
    var t = t.coordinateSystem,
      i = e.axis,
      r = {},
      o = i.getAxesOnZeroOf()[0],
      a = i.position,
      s = o ? "onZero" : a,
      i = i.dim,
      t = t.getRect(),
      t = [t.x, t.x + t.width, t.y, t.y + t.height],
      l = { left: 0, right: 1, top: 0, bottom: 1, onZero: 2 },
      u = e.get("offset") || 0,
      u = "x" === i ? [t[2] - u, t[3] + u] : [t[0] - u, t[1] + u],
      h =
        (o &&
          ((h = o.toGlobalCoord(o.dataToCoord(0))),
          (u[l.onZero] = Math.max(Math.min(h, u[1]), u[0]))),
        (r.position = ["y" === i ? u[l[s]] : t[0], "x" === i ? u[l[s]] : t[3]]),
        (r.rotation = (Math.PI / 2) * ("x" === i ? 0 : 1)),
        (r.labelDirection =
          r.tickDirection =
          r.nameDirection =
            { top: -1, bottom: 1, left: -1, right: 1 }[a]),
        (r.labelOffset = o ? u[l[a]] - u[l.onZero] : 0),
        e.get(["axisTick", "inside"]) && (r.tickDirection = -r.tickDirection),
        wt(n.labelInside, e.get(["axisLabel", "inside"])) &&
          (r.labelDirection = -r.labelDirection),
        e.get(["axisLabel", "rotate"]));
    return (r.labelRotate = "top" === s ? -h : h), (r.z2 = 1), r;
  }
  function Tb(t) {
    return "cartesian2d" === t.get("coordinateSystem");
  }
  function Cb(i) {
    var r = { xAxisModel: null, yAxisModel: null };
    return (
      E(r, function (t, e) {
        var n = e.replace(/Model$/, ""),
          n = i.getReferringComponents(n, Oo).models[0];
        r[e] = n;
      }),
      r
    );
  }
  var Ib = Math.log;
  (kb.prototype.getRect = function () {
    return this._rect;
  }),
    (kb.prototype.update = function (t, e) {
      var n = this._axesMap;
      function i(t) {
        var d,
          e = ht(t),
          n = e.length;
        if (n) {
          for (var i = [], r = n - 1; 0 <= r; r--) {
            var o = t[+e[r]],
              a = o.model,
              s = o.scale;
            Pv(s) && a.get("alignTicks") && null == a.get("interval")
              ? i.push(o)
              : (T_(s, a), Pv(s) && (d = o));
          }
          i.length &&
            (d || T_((d = i.pop()).scale, d.model),
            E(i, function (t) {
              var e = t.scale,
                t = t.model,
                n = d.scale,
                i = Uv.prototype,
                r = i.getTicks.call(n),
                o = i.getTicks.call(n, !0),
                a = r.length - 1,
                n = i.getInterval.call(n),
                s = (t = M_(e, t)).extent,
                l = t.fixMin,
                t = t.fixMax,
                u =
                  ("log" === e.type &&
                    ((u = Ib(e.base)), (s = [Ib(s[0]) / u, Ib(s[1]) / u])),
                  e.setExtent(s[0], s[1]),
                  e.calcNiceExtent({ splitNumber: a, fixMin: l, fixMax: t }),
                  i.getExtent.call(e)),
                h =
                  (l && (s[0] = u[0]),
                  t && (s[1] = u[1]),
                  i.getInterval.call(e)),
                c = s[0],
                p = s[1];
              if (l && t) h = (p - c) / a;
              else if (l)
                for (
                  p = s[0] + h * a;
                  p < s[1] && isFinite(p) && isFinite(s[1]);

                )
                  (h = Ov(h)), (p = s[0] + h * a);
              else if (t)
                for (
                  c = s[1] - h * a;
                  c > s[0] && isFinite(c) && isFinite(s[0]);

                )
                  (h = Ov(h)), (c = s[1] - h * a);
              else {
                u = (h = e.getTicks().length - 1 > a ? Ov(h) : h) * a;
                (c = $r((p = Math.ceil(s[1] / h) * h) - u)) < 0 && 0 <= s[0]
                  ? ((c = 0), (p = $r(u)))
                  : 0 < p && s[1] <= 0 && ((p = 0), (c = -$r(u)));
              }
              (l = (r[0].value - o[0].value) / n),
                (t = (r[a].value - o[a].value) / n),
                i.setExtent.call(e, c + h * l, p + h * t),
                i.setInterval.call(e, h),
                (l || t) && i.setNiceExtent.call(e, c + h, p - h);
            }));
        }
      }
      this._updateScale(t, this.model), i(n.x), i(n.y);
      var r = {};
      E(n.x, function (t) {
        Pb(n, "y", t, r);
      }),
        E(n.y, function (t) {
          Pb(n, "x", t, r);
        }),
        this.resize(this.model, e);
    }),
    (kb.prototype.resize = function (t, e, n) {
      var i = t.getBoxLayoutParams(),
        n = !n && t.get("containLabel"),
        a = Lp(i, { width: e.getWidth(), height: e.getHeight() }),
        r = ((this._rect = a), this._axesList);
      function o() {
        E(r, function (t) {
          var e,
            n,
            i = t.isHorizontal(),
            r = i ? [0, a.width] : [0, a.height],
            o = t.inverse ? 1 : 0;
          t.setExtent(r[o], r[1 - o]),
            (r = t),
            (e = i ? a.x : a.y),
            (o = r.getExtent()),
            (n = o[0] + o[1]),
            (r.toGlobalCoord =
              "x" === r.dim
                ? function (t) {
                    return t + e;
                  }
                : function (t) {
                    return n - t + e;
                  }),
            (r.toLocalCoord =
              "x" === r.dim
                ? function (t) {
                    return t - e;
                  }
                : function (t) {
                    return n - t + e;
                  });
        });
      }
      o(),
        n &&
          (E(r, function (t) {
            var e, n, i;
            t.model.get(["axisLabel", "inside"]) ||
              ((e = k_(t)) &&
                ((n = t.isHorizontal() ? "height" : "width"),
                (i = t.model.get(["axisLabel", "margin"])),
                (a[n] -= e[n] + i),
                "top" === t.position
                  ? (a.y += e.height + i)
                  : "left" === t.position && (a.x += e.width + i)));
          }),
          o()),
        E(this._coordsList, function (t) {
          t.calcAffineTransform();
        });
    }),
    (kb.prototype.getAxis = function (t, e) {
      t = this._axesMap[t];
      if (null != t) return t[e || 0];
    }),
    (kb.prototype.getAxes = function () {
      return this._axesList.slice();
    }),
    (kb.prototype.getCartesian = function (t, e) {
      if (null != t && null != e) return this._coordsMap["x" + t + "y" + e];
      O(t) && ((e = t.yAxisIndex), (t = t.xAxisIndex));
      for (var n = 0, i = this._coordsList; n < i.length; n++)
        if (i[n].getAxis("x").index === t || i[n].getAxis("y").index === e)
          return i[n];
    }),
    (kb.prototype.getCartesians = function () {
      return this._coordsList.slice();
    }),
    (kb.prototype.convertToPixel = function (t, e, n) {
      e = this._findConvertTarget(e);
      return e.cartesian
        ? e.cartesian.dataToPoint(n)
        : e.axis
        ? e.axis.toGlobalCoord(e.axis.dataToCoord(n))
        : null;
    }),
    (kb.prototype.convertFromPixel = function (t, e, n) {
      e = this._findConvertTarget(e);
      return e.cartesian
        ? e.cartesian.pointToData(n)
        : e.axis
        ? e.axis.coordToData(e.axis.toLocalCoord(n))
        : null;
    }),
    (kb.prototype._findConvertTarget = function (t) {
      var e,
        n,
        i = t.seriesModel,
        r =
          t.xAxisModel ||
          (i && i.getReferringComponents("xAxis", Oo).models[0]),
        o =
          t.yAxisModel ||
          (i && i.getReferringComponents("yAxis", Oo).models[0]),
        t = t.gridModel,
        a = this._coordsList;
      return (
        i
          ? I(a, (e = i.coordinateSystem)) < 0 && (e = null)
          : r && o
          ? (e = this.getCartesian(r.componentIndex, o.componentIndex))
          : r
          ? (n = this.getAxis("x", r.componentIndex))
          : o
          ? (n = this.getAxis("y", o.componentIndex))
          : t && t.coordinateSystem === this && (e = this._coordsList[0]),
        { cartesian: e, axis: n }
      );
    }),
    (kb.prototype.containPoint = function (t) {
      var e = this._coordsList[0];
      if (e) return e.containPoint(t);
    }),
    (kb.prototype._initCartesian = function (o, t, e) {
      var a = this,
        s = this,
        l = { left: !1, right: !1, top: !1, bottom: !1 },
        u = { x: {}, y: {} },
        h = { x: 0, y: 0 };
      function n(r) {
        return function (t, e) {
          var n, i;
          Ab(t, o) &&
            ((n = t.get("position")),
            "x" === r
              ? "top" !== n &&
                "bottom" !== n &&
                (n = l.bottom ? "top" : "bottom")
              : "left" !== n &&
                "right" !== n &&
                (n = l.left ? "right" : "left"),
            (l[n] = !0),
            (i =
              "category" ===
              (n = new bb(r, C_(t), [0, 0], t.get("type"), n)).type),
            (n.onBand = i && t.get("boundaryGap")),
            (n.inverse = t.get("inverse")),
            ((t.axis = n).model = t),
            (n.grid = s),
            (n.index = e),
            s._axesList.push(n),
            (u[r][e] = n),
            h[r]++);
        };
      }
      t.eachComponent("xAxis", n("x"), this),
        t.eachComponent("yAxis", n("y"), this),
        h.x && h.y
          ? E((this._axesMap = u).x, function (i, r) {
              E(u.y, function (t, e) {
                var e = "x" + r + "y" + e,
                  n = new _b(e);
                (n.master = a),
                  (n.model = o),
                  (a._coordsMap[e] = n),
                  a._coordsList.push(n),
                  n.addAxis(i),
                  n.addAxis(t);
              });
            })
          : ((this._axesMap = {}), (this._axesList = []));
    }),
    (kb.prototype._updateScale = function (t, i) {
      function r(e, n) {
        var i, t, r;
        E(
          ((i = e),
          (t = n.dim),
          (r = {}),
          E(i.mapDimensionsAll(t), function (t) {
            r[Sv(i, t)] = !0;
          }),
          ht(r)),
          function (t) {
            n.scale.unionExtentFromData(e, t);
          }
        );
      }
      E(this._axesList, function (t) {
        var e;
        t.scale.setExtent(1 / 0, -1 / 0),
          "category" === t.type &&
            ((e = t.model.get("categorySortInfo")), t.scale.setSortInfo(e));
      }),
        t.eachSeries(function (t) {
          var e, n;
          Tb(t) &&
            ((n = (e = Cb(t)).xAxisModel), (e = e.yAxisModel), Ab(n, i)) &&
            Ab(e, i) &&
            ((n = this.getCartesian(n.componentIndex, e.componentIndex)),
            (e = t.getData()),
            (t = n.getAxis("x")),
            (n = n.getAxis("y")),
            r(e, t),
            r(e, n));
        }, this);
    }),
    (kb.prototype.getTooltipAxes = function (n) {
      var i = [],
        r = [];
      return (
        E(this.getCartesians(), function (t) {
          var e = null != n && "auto" !== n ? t.getAxis(n) : t.getBaseAxis(),
            t = t.getOtherAxis(e);
          I(i, e) < 0 && i.push(e), I(r, t) < 0 && r.push(t);
        }),
        { baseAxes: i, otherAxes: r }
      );
    }),
    (kb.create = function (i, r) {
      var o = [];
      return (
        i.eachComponent("grid", function (t, e) {
          var n = new kb(t, i, r);
          (n.name = "grid_" + e),
            n.resize(t, r, !0),
            (t.coordinateSystem = n),
            o.push(n);
        }),
        i.eachSeries(function (t) {
          var e, n, i;
          Tb(t) &&
            ((e = (n = Cb(t)).xAxisModel),
            (n = n.yAxisModel),
            (i = e.getCoordSysModel().coordinateSystem),
            (t.coordinateSystem = i.getCartesian(
              e.componentIndex,
              n.componentIndex
            )));
        }),
        o
      );
    }),
    (kb.dimensions = yb);
  var Db = kb;
  function kb(t, e, n) {
    (this.type = "grid"),
      (this._coordsMap = {}),
      (this._coordsList = []),
      (this._axesMap = {}),
      (this._axesList = []),
      (this.axisPointerEnabled = !0),
      (this.dimensions = yb),
      this._initCartesian(t, e, n),
      (this.model = t);
  }
  function Ab(t, e) {
    return t.getCoordSysModel() === e;
  }
  function Pb(t, e, n, i) {
    n.getAxesOnZeroOf = function () {
      return r ? [r] : [];
    };
    var r,
      o = t[e],
      t = n.model,
      e = t.get(["axisLine", "onZero"]),
      n = t.get(["axisLine", "onZeroAxisIndex"]);
    if (e) {
      if (null != n) Lb(o[n]) && (r = o[n]);
      else
        for (var a in o)
          if (o.hasOwnProperty(a) && Lb(o[a]) && !i[s(o[a])]) {
            r = o[a];
            break;
          }
      r && (i[s(r)] = !0);
    }
    function s(t) {
      return t.dim + "_" + t.index;
    }
  }
  function Lb(t) {
    return (
      t &&
      "category" !== t.type &&
      "time" !== t.type &&
      ((e = (t = (t = t).scale.getExtent())[0]),
      (t = t[1]),
      !((0 < e && 0 < t) || (e < 0 && t < 0)))
    );
    var e;
  }
  var Ob = Math.PI,
    Rb =
      ((Eb.prototype.hasBuilder = function (t) {
        return !!Nb[t];
      }),
      (Eb.prototype.add = function (t) {
        Nb[t](this.opt, this.axisModel, this.group, this._transformGroup);
      }),
      (Eb.prototype.getGroup = function () {
        return this.group;
      }),
      (Eb.innerTextLayout = function (t, e, n) {
        var i,
          e = no(e - t),
          t = io(e)
            ? ((i = 0 < n ? "top" : "bottom"), "center")
            : io(e - Ob)
            ? ((i = 0 < n ? "bottom" : "top"), "center")
            : ((i = "middle"),
              0 < e && e < Ob
                ? 0 < n
                  ? "right"
                  : "left"
                : 0 < n
                ? "left"
                : "right");
        return { rotation: e, textAlign: t, textVerticalAlign: i };
      }),
      (Eb.makeAxisEventDataBase = function (t) {
        var e = { componentType: t.mainType, componentIndex: t.componentIndex };
        return (e[t.mainType + "Index"] = t.componentIndex), e;
      }),
      (Eb.isLabelSilent = function (t) {
        var e = t.get("tooltip");
        return t.get("silent") || !(t.get("triggerEvent") || (e && e.show));
      }),
      Eb),
    Nb = {
      axisLine: function (i, t, r, e) {
        var o,
          a,
          s,
          l,
          u,
          h,
          c,
          n = t.get(["axisLine", "show"]);
        (n =
          "auto" === n && i.handleAutoShown
            ? i.handleAutoShown("axisLine")
            : n) &&
          ((n = t.axis.getExtent()),
          (e = e.transform),
          (o = [n[0], 0]),
          (a = [n[1], 0]),
          (s = a[0] < o[0]),
          e && (ee(o, o, e), ee(a, a, e)),
          (l = L(
            { lineCap: "round" },
            t.getModel(["axisLine", "lineStyle"]).getLineStyle()
          )),
          qh(
            (n = new Zu({
              shape: { x1: o[0], y1: o[1], x2: a[0], y2: a[1] },
              style: l,
              strokeContainThreshold: i.strokeContainThreshold || 5,
              silent: !0,
              z2: 1,
            })).shape,
            n.style.lineWidth
          ),
          (n.anid = "line"),
          r.add(n),
          null != (u = t.get(["axisLine", "symbol"]))) &&
          ((e = t.get(["axisLine", "symbolSize"])),
          H(u) && (u = [u, u]),
          (H(e) || G(e)) && (e = [e, e]),
          (n = $y(t.get(["axisLine", "symbolOffset"]) || 0, e)),
          (h = e[0]),
          (c = e[1]),
          E(
            [
              { rotate: i.rotation + Math.PI / 2, offset: n[0], r: 0 },
              {
                rotate: i.rotation - Math.PI / 2,
                offset: n[1],
                r: Math.sqrt(
                  (o[0] - a[0]) * (o[0] - a[0]) + (o[1] - a[1]) * (o[1] - a[1])
                ),
              },
            ],
            function (t, e) {
              var n;
              "none" !== u[e] &&
                null != u[e] &&
                ((e = Ky(u[e], -h / 2, -c / 2, h, c, l.stroke, !0)),
                (n = t.r + t.offset),
                e.attr({
                  rotation: t.rotate,
                  x: (t = s ? a : o)[0] + n * Math.cos(i.rotation),
                  y: t[1] - n * Math.sin(i.rotation),
                  silent: !0,
                  z2: 11,
                }),
                r.add(e));
            }
          ));
      },
      axisTickLabel: function (t, e, n, i) {
        var r,
          o,
          a,
          s = (function (t, e, n, i) {
            var r = n.axis,
              o = n.getModel("axisTick"),
              a = o.get("show");
            if (
              (a =
                "auto" === a && i.handleAutoShown
                  ? i.handleAutoShown("axisTick")
                  : a) &&
              !r.scale.isBlank()
            ) {
              for (
                var a = o.getModel("lineStyle"),
                  i = i.tickDirection * o.get("length"),
                  s = Vb(
                    r.getTicksCoords(),
                    e.transform,
                    i,
                    B(a.getLineStyle(), {
                      stroke: n.get(["axisLine", "lineStyle", "color"]),
                    }),
                    "ticks"
                  ),
                  l = 0;
                l < s.length;
                l++
              )
                t.add(s[l]);
              return s;
            }
          })(n, i, e, t),
          l = (function (l, u, h, c) {
            var p = h.axis;
            {
              var d, f, t, e, g, y, m, v, _;
              if (
                wt(c.axisLabelShow, h.get(["axisLabel", "show"])) &&
                !p.scale.isBlank()
              )
                return (
                  (d = h.getModel("axisLabel")),
                  (f = d.get("margin")),
                  (t = p.getViewLabels()),
                  (e = ((wt(c.labelRotate, d.get("rotate")) || 0) * Ob) / 180),
                  (g = Rb.innerTextLayout(c.rotation, e, c.labelDirection)),
                  (y = h.getCategories && h.getCategories(!0)),
                  (m = []),
                  (v = Rb.isLabelSilent(h)),
                  (_ = h.get("triggerEvent")),
                  E(t, function (t, e) {
                    var n =
                        "ordinal" === p.scale.type
                          ? p.scale.getRawOrdinalNumber(t.tickValue)
                          : t.tickValue,
                      i = t.formattedLabel,
                      r = t.rawLabel,
                      o = d,
                      a =
                        (o =
                          y && y[n] && O((a = y[n])) && a.textStyle
                            ? new Lc(a.textStyle, d, h.ecModel)
                            : o).getTextColor() ||
                        h.get(["axisLine", "lineStyle", "color"]),
                      s = p.dataToCoord(n),
                      s = new Ls({
                        x: s,
                        y: c.labelOffset + c.labelDirection * f,
                        rotation: g.rotation,
                        silent: v,
                        z2: 10 + (t.level || 0),
                        style: pc(o, {
                          text: i,
                          align: o.getShallow("align", !0) || g.textAlign,
                          verticalAlign:
                            o.getShallow("verticalAlign", !0) ||
                            o.getShallow("baseline", !0) ||
                            g.textVerticalAlign,
                          fill: S(a)
                            ? a(
                                "category" === p.type
                                  ? r
                                  : "value" === p.type
                                  ? n + ""
                                  : n,
                                e
                              )
                            : a,
                        }),
                      });
                    (s.anid = "label_" + n),
                      _ &&
                        (((t = Rb.makeAxisEventDataBase(h)).targetType =
                          "axisLabel"),
                        (t.value = r),
                        (t.tickIndex = e),
                        "category" === p.type && (t.dataIndex = n),
                        (D(s).eventData = t)),
                      u.add(s),
                      s.updateTransform(),
                      m.push(s),
                      l.add(s),
                      s.decomposeTransform();
                  }),
                  m
                );
            }
          })(n, i, e, t),
          u = e,
          h = l,
          c =
            (P_(u.axis) ||
              ((d = u.get(["axisLabel", "showMinLabel"])),
              (u = u.get(["axisLabel", "showMaxLabel"])),
              (s = s || []),
              (y = (h = h || [])[0]),
              (f = h[1]),
              (r = h[h.length - 1]),
              (h = h[h.length - 2]),
              (o = s[0]),
              (g = s[1]),
              (a = s[s.length - 1]),
              (s = s[s.length - 2]),
              !1 === d
                ? (zb(y), zb(o))
                : Bb(y, f) && (d ? (zb(f), zb(g)) : (zb(y), zb(o))),
              !1 === u
                ? (zb(r), zb(a))
                : Bb(h, r) && (u ? (zb(h), zb(s)) : (zb(r), zb(a)))),
            n),
          p = i,
          d = e,
          f = t.tickDirection,
          g = d.axis,
          y = d.getModel("minorTick");
        if (y.get("show") && !g.scale.isBlank()) {
          var m = g.getMinorTicksCoords();
          if (m.length)
            for (
              var g = y.getModel("lineStyle"),
                v = f * y.get("length"),
                _ = B(
                  g.getLineStyle(),
                  B(d.getModel("axisTick").getLineStyle(), {
                    stroke: d.get(["axisLine", "lineStyle", "color"]),
                  })
                ),
                x = 0;
              x < m.length;
              x++
            )
              for (
                var w = Vb(m[x], p.transform, v, _, "minorticks_" + x), b = 0;
                b < w.length;
                b++
              )
                c.add(w[b]);
        }
        e.get(["axisLabel", "hideOverlap"]) &&
          N1(
            L1(
              F(l, function (t) {
                return {
                  label: t,
                  priority: t.z2,
                  defaultAttr: { ignore: t.ignore },
                };
              })
            )
          );
      },
      axisName: function (t, e, n, i) {
        var r,
          o,
          a,
          s,
          l,
          u,
          h,
          c,
          p = wt(t.axisName, e.get("name"));
        p &&
          ((l = e.get("nameLocation")),
          (s = t.nameDirection),
          (o = e.getModel("nameTextStyle")),
          (u = e.get("nameGap") || 0),
          (a = (h = e.axis.getExtent())[0] > h[1] ? -1 : 1),
          (a = [
            "start" === l
              ? h[0] - a * u
              : "end" === l
              ? h[1] + a * u
              : (h[0] + h[1]) / 2,
            Fb(l) ? t.labelOffset + s * u : 0,
          ]),
          null != (u = e.get("nameRotate")) && (u = (u * Ob) / 180),
          Fb(l)
            ? (r = Rb.innerTextLayout(
                t.rotation,
                null != u ? u : t.rotation,
                s
              ))
            : ((s = t.rotation),
              (l = l),
              (h = h),
              (u = no((u = u || 0) - s)),
              (s = h[0] > h[1]),
              (h = ("start" === l && !s) || ("start" !== l && s)),
              (l = io(u - Ob / 2)
                ? ((c = h ? "bottom" : "top"), "center")
                : io(u - 1.5 * Ob)
                ? ((c = h ? "top" : "bottom"), "center")
                : ((c = "middle"),
                  u < 1.5 * Ob && Ob / 2 < u
                    ? h
                      ? "left"
                      : "right"
                    : h
                    ? "right"
                    : "left")),
              (r = { rotation: u, textAlign: l, textVerticalAlign: c }),
              null == (c = t.axisNameAvailableWidth) ||
                ((c = Math.abs(c / Math.sin(r.rotation))), isFinite(c)) ||
                (c = null)),
          (s = o.getFont()),
          (u = (h = e.get("nameTruncate", !0) || {}).ellipsis),
          (l = wt(t.nameTruncateMaxWidth, h.maxWidth, c)),
          ic({
            el: (t = new Ls({
              x: a[0],
              y: a[1],
              rotation: r.rotation,
              silent: Rb.isLabelSilent(e),
              style: pc(o, {
                text: p,
                font: s,
                overflow: "truncate",
                width: l,
                ellipsis: u,
                fill:
                  o.getTextColor() || e.get(["axisLine", "lineStyle", "color"]),
                align: o.get("align") || r.textAlign,
                verticalAlign: o.get("verticalAlign") || r.textVerticalAlign,
              }),
              z2: 1,
            })),
            componentModel: e,
            itemName: p,
          }),
          (t.__fullText = p),
          (t.anid = "name"),
          e.get("triggerEvent") &&
            (((h = Rb.makeAxisEventDataBase(e)).targetType = "axisName"),
            (h.name = p),
            (D(t).eventData = h)),
          i.add(t),
          t.updateTransform(),
          n.add(t),
          t.decomposeTransform());
      },
    };
  function Eb(t, e) {
    (this.group = new Fr()),
      (this.opt = e),
      (this.axisModel = t),
      B(e, {
        labelOffset: 0,
        nameDirection: 1,
        tickDirection: 1,
        labelDirection: 1,
        silent: !0,
        handleAutoShown: function () {
          return !0;
        },
      });
    t = new Fr({ x: e.position[0], y: e.position[1], rotation: e.rotation });
    t.updateTransform(), (this._transformGroup = t);
  }
  function zb(t) {
    t && (t.ignore = !0);
  }
  function Bb(t, e) {
    var n,
      i = t && t.getBoundingRect().clone(),
      r = e && e.getBoundingRect().clone();
    if (i && r)
      return (
        ze((n = Oe([])), n, -t.rotation),
        i.applyTransform(Ne([], n, t.getLocalTransform())),
        r.applyTransform(Ne([], n, e.getLocalTransform())),
        i.intersect(r)
      );
  }
  function Fb(t) {
    return "middle" === t || "center" === t;
  }
  function Vb(t, e, n, i, r) {
    for (var o = [], a = [], s = [], l = 0; l < t.length; l++) {
      var u = t[l].coord,
        u =
          ((a[0] = u),
          (s[(a[1] = 0)] = u),
          (s[1] = n),
          e && (ee(a, a, e), ee(s, s, e)),
          new Zu({
            shape: { x1: a[0], y1: a[1], x2: s[0], y2: s[1] },
            style: i,
            z2: 2,
            autoBatch: !0,
            silent: !0,
          }));
      qh(u.shape, u.style.lineWidth),
        (u.anid = r + "_" + t[l].tickValue),
        o.push(u);
    }
    return o;
  }
  function Hb(t, e) {
    var r,
      h,
      c,
      o,
      p,
      d,
      f,
      n = {
        axesInfo: {},
        seriesInvolved: !1,
        coordSysAxesInfo: {},
        coordSysMap: {},
      };
    return (
      (h = n),
      (e = e),
      (o = (c = t).getComponent("tooltip")),
      (p = c.getComponent("axisPointer")),
      (d = p.get("link", !0) || []),
      (f = []),
      E(e.getCoordinateSystems(), function (s) {
        var l, u, t, e, n;
        function i(t, e, n) {
          var i,
            r,
            o = n.model.getModel("axisPointer", p),
            a = o.get("show");
          a &&
            ("auto" !== a || t || Ub(o)) &&
            (null == e && (e = o.get("triggerTooltip")),
            (a = (o = t
              ? (function (t, e, n, i, r, o) {
                  var a = e.getModel("axisPointer"),
                    s = {},
                    e =
                      (E(
                        [
                          "type",
                          "snap",
                          "lineStyle",
                          "shadowStyle",
                          "label",
                          "animation",
                          "animationDurationUpdate",
                          "animationEasingUpdate",
                          "z",
                        ],
                        function (t) {
                          s[t] = y(a.get(t));
                        }
                      ),
                      (s.snap = "category" !== t.type && !!o),
                      "cross" === a.get("type") && (s.type = "line"),
                      s.label || (s.label = {}));
                  null == e.show && (e.show = !1),
                    "cross" === r &&
                      ((r = a.get(["label", "show"])),
                      (e.show = null == r || r),
                      o ||
                        ((r = s.lineStyle = a.get("crossStyle")) &&
                          B(e, r.textStyle)));
                  return t.model.getModel("axisPointer", new Lc(s, n, i));
                })(n, u, p, c, t, e)
              : o).get("snap")),
            (t = o.get("triggerEmphasis")),
            (i = Xb(n.model)),
            (r = e || a || "category" === n.type),
            (e = h.axesInfo[i] =
              {
                key: i,
                axis: n,
                coordSys: s,
                axisPointerModel: o,
                triggerTooltip: e,
                triggerEmphasis: t,
                involveSeries: r,
                snap: a,
                useHandle: Ub(o),
                seriesModels: [],
                linkGroup: null,
              }),
            (l[i] = e),
            (h.seriesInvolved = h.seriesInvolved || r),
            null !=
              (t = (function (t, e) {
                for (var n = e.model, i = e.dim, r = 0; r < t.length; r++) {
                  var o = t[r] || {};
                  if (
                    Gb(o[i + "AxisId"], n.id) ||
                    Gb(o[i + "AxisIndex"], n.componentIndex) ||
                    Gb(o[i + "AxisName"], n.name)
                  )
                    return r;
                }
              })(d, n))) &&
            (((a = f[t] || (f[t] = { axesInfo: {} })).axesInfo[i] = e),
            (a.mapper = d[t].mapper),
            (e.linkGroup = a));
        }
        s.axisPointerEnabled &&
          ((t = Xb(s.model)),
          (l = h.coordSysAxesInfo[t] = {}),
          (u = (h.coordSysMap[t] = s).model.getModel("tooltip", o)),
          E(s.getAxes(), pt(i, !1, null)),
          s.getTooltipAxes) &&
          o &&
          u.get("show") &&
          ((t = "axis" === u.get("trigger")),
          (e = "cross" === u.get(["axisPointer", "type"])),
          (n = s.getTooltipAxes(u.get(["axisPointer", "axis"]))),
          (t || e) && E(n.baseAxes, pt(i, !e || "cross", t)),
          e) &&
          E(n.otherAxes, pt(i, "cross", !1));
      }),
      n.seriesInvolved &&
        ((r = n),
        t.eachSeries(function (n) {
          var i = n.coordinateSystem,
            t = n.get(["tooltip", "trigger"], !0),
            e = n.get(["tooltip", "show"], !0);
          i &&
            "none" !== t &&
            !1 !== t &&
            "item" !== t &&
            !1 !== e &&
            !1 !== n.get(["axisPointer", "show"], !0) &&
            E(r.coordSysAxesInfo[Xb(i.model)], function (t) {
              var e = t.axis;
              i.getAxis(e.dim) === e &&
                (t.seriesModels.push(n),
                null == t.seriesDataCount && (t.seriesDataCount = 0),
                (t.seriesDataCount += n.getData().count()));
            });
        })),
      n
    );
  }
  function Gb(t, e) {
    return "all" === t || (V(t) && 0 <= I(t, e)) || t === e;
  }
  function Wb(t) {
    var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
    return e && e.axesInfo[Xb(t)];
  }
  function Ub(t) {
    return !!t.get(["handle", "show"]);
  }
  function Xb(t) {
    return t.type + "||" + t.id;
  }
  var Yb,
    qb = {},
    Zb =
      (u(jb, (Yb = Wg)),
      (jb.prototype.render = function (t, e, n, i) {
        var r, o, a, s, l, u;
        this.axisPointerClass &&
          (r = Wb((r = t))) &&
          ((l = r.axisPointerModel),
          (o = r.axis.scale),
          (a = l.option),
          (u = l.get("status")),
          null != (s = l.get("value")) && (s = o.parse(s)),
          (l = Ub(l)),
          null == u && (a.status = l ? "show" : "hide"),
          (u = o.getExtent().slice())[0] > u[1] && u.reverse(),
          (s = null == s || s > u[1] ? u[1] : s) < u[0] && (s = u[0]),
          (a.value = s),
          l) &&
          (a.status = r.axis.scale.isBlank() ? "hide" : "show"),
          Yb.prototype.render.apply(this, arguments),
          this._doUpdateAxisPointerClass(t, n, !0);
      }),
      (jb.prototype.updateAxisPointer = function (t, e, n, i) {
        this._doUpdateAxisPointerClass(t, n, !1);
      }),
      (jb.prototype.remove = function (t, e) {
        var n = this._axisPointer;
        n && n.remove(e);
      }),
      (jb.prototype.dispose = function (t, e) {
        this._disposeAxisPointer(e),
          Yb.prototype.dispose.apply(this, arguments);
      }),
      (jb.prototype._doUpdateAxisPointerClass = function (t, e, n) {
        var i,
          r = jb.getAxisPointerClass(this.axisPointerClass);
        r &&
          ((i = (i = Wb((i = t))) && i.axisPointerModel)
            ? (this._axisPointer || (this._axisPointer = new r())).render(
                t,
                i,
                e,
                n
              )
            : this._disposeAxisPointer(e));
      }),
      (jb.prototype._disposeAxisPointer = function (t) {
        this._axisPointer && this._axisPointer.dispose(t),
          (this._axisPointer = null);
      }),
      (jb.registerAxisPointerClass = function (t, e) {
        qb[t] = e;
      }),
      (jb.getAxisPointerClass = function (t) {
        return t && qb[t];
      }),
      (jb.type = "axis"),
      jb);
  function jb() {
    var t = (null !== Yb && Yb.apply(this, arguments)) || this;
    return (t.type = jb.type), t;
  }
  var Kb = ko();
  var $b,
    Qb,
    Jb = ["axisLine", "axisTickLabel", "axisName"],
    tS = ["splitArea", "splitLine", "minorSplitLine"],
    th =
      (u(rS, (Qb = Zb)),
      (rS.prototype.render = function (i, t, e, n) {
        this.group.removeAll();
        var r,
          o,
          a = this._axisGroup;
        (this._axisGroup = new Fr()),
          this.group.add(this._axisGroup),
          i.get("show") &&
            ((o = Mb((r = i.getCoordSysModel()), i)),
            (o = new Rb(
              i,
              L(
                {
                  handleAutoShown: function (t) {
                    for (
                      var e = r.coordinateSystem.getCartesians(), n = 0;
                      n < e.length;
                      n++
                    )
                      if (Pv(e[n].getOtherAxis(i.axis).scale)) return !0;
                    return !1;
                  },
                },
                o
              )
            )),
            E(Jb, o.add, o),
            this._axisGroup.add(o.getGroup()),
            E(
              tS,
              function (t) {
                i.get([t, "show"]) && eS[t](this, this._axisGroup, i, r);
              },
              this
            ),
            (n && "changeAxisOrder" === n.type && n.isInitSort) ||
              Qh(a, this._axisGroup, i),
            Qb.prototype.render.call(this, i, t, e, n));
      }),
      (rS.prototype.remove = function () {
        Kb(this).splitAreaColors = null;
      }),
      (rS.type = "cartesianAxis"),
      rS),
    eS = {
      splitLine: function (t, e, n, i) {
        var r = n.axis;
        if (!r.scale.isBlank())
          for (
            var n = n.getModel("splitLine"),
              o = n.getModel("lineStyle"),
              a = V((a = o.get("color"))) ? a : [a],
              s = i.coordinateSystem.getRect(),
              l = r.isHorizontal(),
              u = 0,
              h = r.getTicksCoords({ tickModel: n }),
              c = [],
              p = [],
              d = o.getLineStyle(),
              f = 0;
            f < h.length;
            f++
          ) {
            var g = r.toGlobalCoord(h[f].coord),
              g =
                (l
                  ? ((c[0] = g),
                    (c[1] = s.y),
                    (p[0] = g),
                    (p[1] = s.y + s.height))
                  : ((c[0] = s.x),
                    (c[1] = g),
                    (p[0] = s.x + s.width),
                    (p[1] = g)),
                u++ % a.length),
              y = h[f].tickValue,
              y = new Zu({
                anid: null != y ? "line_" + h[f].tickValue : null,
                autoBatch: !0,
                shape: { x1: c[0], y1: c[1], x2: p[0], y2: p[1] },
                style: B({ stroke: a[g] }, d),
                silent: !0,
              });
            qh(y.shape, d.lineWidth), e.add(y);
          }
      },
      minorSplitLine: function (t, e, n, i) {
        var r = n.axis,
          n = n.getModel("minorSplitLine").getModel("lineStyle"),
          o = i.coordinateSystem.getRect(),
          a = r.isHorizontal(),
          s = r.getMinorTicksCoords();
        if (s.length)
          for (
            var l = [], u = [], h = n.getLineStyle(), c = 0;
            c < s.length;
            c++
          )
            for (var p = 0; p < s[c].length; p++) {
              var d = r.toGlobalCoord(s[c][p].coord),
                d =
                  (a
                    ? ((l[0] = d),
                      (l[1] = o.y),
                      (u[0] = d),
                      (u[1] = o.y + o.height))
                    : ((l[0] = o.x),
                      (l[1] = d),
                      (u[0] = o.x + o.width),
                      (u[1] = d)),
                  new Zu({
                    anid: "minor_line_" + s[c][p].tickValue,
                    autoBatch: !0,
                    shape: { x1: l[0], y1: l[1], x2: u[0], y2: u[1] },
                    style: h,
                    silent: !0,
                  }));
              qh(d.shape, h.lineWidth), e.add(d);
            }
      },
      splitArea: function (t, e, n, i) {
        var r = e,
          e = i,
          o = (i = n).axis;
        if (!o.scale.isBlank()) {
          var i = i.getModel("splitArea"),
            n = i.getModel("areaStyle"),
            a = n.get("color"),
            s = e.coordinateSystem.getRect(),
            l = o.getTicksCoords({ tickModel: i, clamp: !0 });
          if (l.length) {
            var u = a.length,
              h = Kb(t).splitAreaColors,
              c = N(),
              p = 0;
            if (h)
              for (var d = 0; d < l.length; d++) {
                var f = h.get(l[d].tickValue);
                if (null != f) {
                  p = (f + (u - 1) * d) % u;
                  break;
                }
              }
            for (
              var g = o.toGlobalCoord(l[0].coord),
                y = n.getAreaStyle(),
                a = V(a) ? a : [a],
                d = 1;
              d < l.length;
              d++
            ) {
              var m = o.toGlobalCoord(l[d].coord),
                v = void 0,
                _ = void 0,
                x = void 0,
                w = void 0,
                g = o.isHorizontal()
                  ? ((v = g), (_ = s.y), (w = s.height), v + (x = m - v))
                  : ((v = s.x), (_ = g), (x = s.width), _ + (w = m - _)),
                m = l[d - 1].tickValue;
              null != m && c.set(m, p),
                r.add(
                  new Is({
                    anid: null != m ? "area_" + m : null,
                    shape: { x: v, y: _, width: x, height: w },
                    style: B({ fill: a[p] }, y),
                    autoBatch: !0,
                    silent: !0,
                  })
                ),
                (p = (p + 1) % u);
            }
            Kb(t).splitAreaColors = c;
          }
        }
      },
    },
    nS = (u(iS, ($b = th)), (iS.type = "xAxis"), iS);
  function iS() {
    var t = (null !== $b && $b.apply(this, arguments)) || this;
    return (t.type = iS.type), t;
  }
  function rS() {
    var t = (null !== Qb && Qb.apply(this, arguments)) || this;
    return (t.type = rS.type), (t.axisPointerClass = "CartesianAxisPointer"), t;
  }
  u(sS, (oS = th)), (sS.type = "yAxis");
  var oS,
    aS = sS;
  function sS() {
    var t = (null !== oS && oS.apply(this, arguments)) || this;
    return (t.type = nS.type), t;
  }
  u(cS, (lS = Wg)),
    (cS.prototype.render = function (t, e) {
      this.group.removeAll(),
        t.get("show") &&
          this.group.add(
            new Is({
              shape: t.coordinateSystem.getRect(),
              style: B({ fill: t.get("backgroundColor") }, t.getItemStyle()),
              silent: !0,
              z2: -1,
            })
          );
    }),
    (cS.type = "grid");
  var lS,
    uS = cS,
    hS = { offset: 0 };
  function cS() {
    var t = (null !== lS && lS.apply(this, arguments)) || this;
    return (t.type = "grid"), t;
  }
  E_(function (t) {
    t.registerComponentView(uS),
      t.registerComponentModel(ab),
      t.registerCoordinateSystem("cartesian2d", Db),
      db(t, "x", ub, hS),
      db(t, "y", ub, hS),
      t.registerComponentView(nS),
      t.registerComponentView(aS),
      t.registerPreprocessor(function (t) {
        t.xAxis && t.yAxis && !t.grid && (t.grid = {});
      });
  });
  u(mS, (dS = g)),
    (mS.type = "title"),
    (mS.defaultOption = {
      z: 6,
      show: !0,
      text: "",
      target: "blank",
      subtext: "",
      subtarget: "blank",
      left: 0,
      top: 0,
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc",
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      textStyle: { fontSize: 18, fontWeight: "bold", color: "#464646" },
      subtextStyle: { fontSize: 12, color: "#6E7079" },
    });
  var pS,
    dS,
    fS = mS,
    gS =
      (u(yS, (pS = Wg)),
      (yS.prototype.render = function (t, e, n) {
        var i, r, o, a, s, l, u, h, c;
        this.group.removeAll(),
          t.get("show") &&
            ((i = this.group),
            (u = t.getModel("textStyle")),
            (r = t.getModel("subtextStyle")),
            (h = t.get("textAlign")),
            (c = R(t.get("textBaseline"), t.get("textVerticalAlign"))),
            (s = (u = new Ls({
              style: pc(
                u,
                { text: t.get("text"), fill: u.getTextColor() },
                { disableBox: !0 }
              ),
              z2: 10,
            })).getBoundingRect()),
            (l = t.get("subtext")),
            (r = new Ls({
              style: pc(
                r,
                {
                  text: l,
                  fill: r.getTextColor(),
                  y: s.height + t.get("itemGap"),
                  verticalAlign: "top",
                },
                { disableBox: !0 }
              ),
              z2: 10,
            })),
            (o = t.get("link")),
            (a = t.get("sublink")),
            (s = t.get("triggerEvent", !0)),
            (u.silent = !o && !s),
            (r.silent = !a && !s),
            o &&
              u.on("click", function () {
                Cp(o, "_" + t.get("target"));
              }),
            a &&
              r.on("click", function () {
                Cp(a, "_" + t.get("subtarget"));
              }),
            (D(u).eventData = D(r).eventData =
              s
                ? { componentType: "title", componentIndex: t.componentIndex }
                : null),
            i.add(u),
            l && i.add(r),
            (s = i.getBoundingRect()),
            ((l = t.getBoxLayoutParams()).width = s.width),
            (l.height = s.height),
            (l = Lp(
              l,
              { width: n.getWidth(), height: n.getHeight() },
              t.get("padding")
            )),
            h ||
              ("right" ===
              (h =
                "middle" === (h = t.get("left") || t.get("right"))
                  ? "center"
                  : h)
                ? (l.x += l.width)
                : "center" === h && (l.x += l.width / 2)),
            c ||
              ("bottom" ===
              (c =
                "center" === (c = t.get("top") || t.get("bottom"))
                  ? "middle"
                  : c)
                ? (l.y += l.height)
                : "middle" === c && (l.y += l.height / 2),
              (c = c || "top")),
            (i.x = l.x),
            (i.y = l.y),
            i.markRedraw(),
            u.setStyle((n = { align: h, verticalAlign: c })),
            r.setStyle(n),
            (s = i.getBoundingRect()),
            (u = l.margin),
            ((h = t.getItemStyle(["color", "opacity"])).fill =
              t.get("backgroundColor")),
            (c = new Is({
              shape: {
                x: s.x - u[3],
                y: s.y - u[0],
                width: s.width + u[1] + u[3],
                height: s.height + u[0] + u[2],
                r: t.get("borderRadius"),
              },
              style: h,
              subPixelOptimize: !0,
              silent: !0,
            })),
            i.add(c));
      }),
      (yS.type = "title"),
      yS);
  function yS() {
    var t = (null !== pS && pS.apply(this, arguments)) || this;
    return (t.type = yS.type), t;
  }
  function mS() {
    var t = (null !== dS && dS.apply(this, arguments)) || this;
    return (
      (t.type = mS.type), (t.layoutMode = { type: "box", ignoreSize: !0 }), t
    );
  }
  E_(function (t) {
    t.registerComponentModel(fS), t.registerComponentView(gS);
  });
  u(xS, (vS = g)),
    (xS.prototype.init = function (t, e, n) {
      this.mergeDefaultAndTheme(t, n),
        (t.selected = t.selected || {}),
        this._updateSelector(t);
    }),
    (xS.prototype.mergeOption = function (t, e) {
      vS.prototype.mergeOption.call(this, t, e), this._updateSelector(t);
    }),
    (xS.prototype._updateSelector = function (t) {
      var n = t.selector,
        i = this.ecModel;
      V((n = !0 === n ? (t.selector = ["all", "inverse"]) : n)) &&
        E(n, function (t, e) {
          H(t) && (t = { type: t }),
            (n[e] = d(
              t,
              ((e = i),
              "all" === (t = t.type)
                ? {
                    type: "all",
                    title: e
                      .getLocaleModel()
                      .get(["legend", "selector", "all"]),
                  }
                : "inverse" === t
                ? {
                    type: "inverse",
                    title: e
                      .getLocaleModel()
                      .get(["legend", "selector", "inverse"]),
                  }
                : void 0)
            ));
        });
    }),
    (xS.prototype.optionUpdated = function () {
      this._updateData(this.ecModel);
      var t = this._data;
      if (t[0] && "single" === this.get("selectedMode")) {
        for (var e = !1, n = 0; n < t.length; n++) {
          var i = t[n].get("name");
          if (this.isSelected(i)) {
            this.select(i), (e = !0);
            break;
          }
        }
        e || this.select(t[0].get("name"));
      }
    }),
    (xS.prototype._updateData = function (i) {
      var r = [],
        o = [],
        t =
          (i.eachRawSeries(function (t) {
            var e,
              n = t.name;
            o.push(n),
              t.legendVisualProvider &&
              ((n = t.legendVisualProvider.getAllNames()),
              i.isSeriesFiltered(t) || (o = o.concat(n)),
              n.length)
                ? (r = r.concat(n))
                : (e = !0),
              e && To(t) && r.push(t.name);
          }),
          (this._availableNames = o),
          this.get("data") || r),
        e = N(),
        t = F(
          t,
          function (t) {
            return (
              (H(t) || G(t)) && (t = { name: t }),
              e.get(t.name)
                ? null
                : (e.set(t.name, !0), new Lc(t, this, this.ecModel))
            );
          },
          this
        );
      this._data = ut(t, function (t) {
        return !!t;
      });
    }),
    (xS.prototype.getData = function () {
      return this._data;
    }),
    (xS.prototype.select = function (t) {
      var e = this.option.selected;
      "single" === this.get("selectedMode") &&
        E(this._data, function (t) {
          e[t.get("name")] = !1;
        }),
        (e[t] = !0);
    }),
    (xS.prototype.unSelect = function (t) {
      "single" !== this.get("selectedMode") && (this.option.selected[t] = !1);
    }),
    (xS.prototype.toggleSelected = function (t) {
      var e = this.option.selected;
      e.hasOwnProperty(t) || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t);
    }),
    (xS.prototype.allSelect = function () {
      var t = this._data,
        e = this.option.selected;
      E(t, function (t) {
        e[t.get("name", !0)] = !0;
      });
    }),
    (xS.prototype.inverseSelect = function () {
      var t = this._data,
        e = this.option.selected;
      E(t, function (t) {
        t = t.get("name", !0);
        e.hasOwnProperty(t) || (e[t] = !0), (e[t] = !e[t]);
      });
    }),
    (xS.prototype.isSelected = function (t) {
      var e = this.option.selected;
      return !(e.hasOwnProperty(t) && !e[t]) && 0 <= I(this._availableNames, t);
    }),
    (xS.prototype.getOrient = function () {
      return "vertical" === this.get("orient")
        ? { index: 1, name: "vertical" }
        : { index: 0, name: "horizontal" };
    }),
    (xS.type = "legend.plain"),
    (xS.dependencies = ["series"]),
    (xS.defaultOption = {
      z: 4,
      show: !0,
      orient: "horizontal",
      left: "center",
      top: 0,
      align: "auto",
      backgroundColor: "rgba(0,0,0,0)",
      borderColor: "#ccc",
      borderRadius: 0,
      borderWidth: 0,
      padding: 5,
      itemGap: 10,
      itemWidth: 25,
      itemHeight: 14,
      symbolRotate: "inherit",
      symbolKeepAspect: !0,
      inactiveColor: "#ccc",
      inactiveBorderColor: "#ccc",
      inactiveBorderWidth: "auto",
      itemStyle: {
        color: "inherit",
        opacity: "inherit",
        borderColor: "inherit",
        borderWidth: "auto",
        borderCap: "inherit",
        borderJoin: "inherit",
        borderDashOffset: "inherit",
        borderMiterLimit: "inherit",
      },
      lineStyle: {
        width: "auto",
        color: "inherit",
        inactiveColor: "#ccc",
        inactiveWidth: 2,
        opacity: "inherit",
        type: "inherit",
        cap: "inherit",
        join: "inherit",
        dashOffset: "inherit",
        miterLimit: "inherit",
      },
      textStyle: { color: "#333" },
      selectedMode: !0,
      selector: !1,
      selectorLabel: {
        show: !0,
        borderRadius: 10,
        padding: [3, 5, 3, 5],
        fontSize: 12,
        fontFamily: "sans-serif",
        color: "#666",
        borderWidth: 1,
        borderColor: "#666",
      },
      emphasis: {
        selectorLabel: { show: !0, color: "#eee", backgroundColor: "#666" },
      },
      selectorPosition: "auto",
      selectorItemGap: 7,
      selectorButtonGap: 10,
      tooltip: { show: !1 },
    });
  var vS,
    _S = xS;
  function xS() {
    var t = (null !== vS && vS.apply(this, arguments)) || this;
    return (
      (t.type = xS.type), (t.layoutMode = { type: "box", ignoreSize: !0 }), t
    );
  }
  var wS,
    bS = pt,
    SS = E,
    MS = Fr,
    TS =
      (u(CS, (wS = Wg)),
      (CS.prototype.init = function () {
        this.group.add((this._contentGroup = new MS())),
          this.group.add((this._selectorGroup = new MS())),
          (this._isFirstRender = !0);
      }),
      (CS.prototype.getContentGroup = function () {
        return this._contentGroup;
      }),
      (CS.prototype.getSelectorGroup = function () {
        return this._selectorGroup;
      }),
      (CS.prototype.render = function (t, e, n) {
        var i,
          r,
          o,
          a,
          s,
          l = this._isFirstRender;
        (this._isFirstRender = !1),
          this.resetInner(),
          t.get("show", !0) &&
            ((r = t.get("align")),
            (i = t.get("orient")),
            (r && "auto" !== r) ||
              (r =
                "right" === t.get("left") && "vertical" === i
                  ? "right"
                  : "left"),
            (a = t.get("selector", !0)),
            (s = t.get("selectorPosition", !0)),
            this.renderInner(
              r,
              t,
              e,
              n,
              a,
              i,
              (s =
                !a || (s && "auto" !== s)
                  ? s
                  : "horizontal" === i
                  ? "end"
                  : "start")
            ),
            (o = Lp(
              (e = t.getBoxLayoutParams()),
              (i = { width: n.getWidth(), height: n.getHeight() }),
              (n = t.get("padding"))
            )),
            (o = Lp(
              B(
                {
                  width: (r = this.layoutInner(t, r, o, l, a, s)).width,
                  height: r.height,
                },
                e
              ),
              i,
              n
            )),
            (this.group.x = o.x - r.x),
            (this.group.y = o.y - r.y),
            this.group.markRedraw(),
            this.group.add(
              (this._backgroundEl =
                ((l = r),
                (s = _p((a = t).get("padding"))),
                ((e = a.getItemStyle(["color", "opacity"])).fill =
                  a.get("backgroundColor")),
                new Is({
                  shape: {
                    x: l.x - s[3],
                    y: l.y - s[0],
                    width: l.width + s[1] + s[3],
                    height: l.height + s[0] + s[2],
                    r: a.get("borderRadius"),
                  },
                  style: e,
                  silent: !0,
                  z2: -1,
                })))
            ));
      }),
      (CS.prototype.resetInner = function () {
        this.getContentGroup().removeAll(),
          this._backgroundEl && this.group.remove(this._backgroundEl),
          this.getSelectorGroup().removeAll();
      }),
      (CS.prototype.renderInner = function (s, l, u, h, t, e, n) {
        var c = this.getContentGroup(),
          p = N(),
          d = l.get("selectedMode"),
          f = [];
        u.eachRawSeries(function (t) {
          t.get("legendHoverLink") || f.push(t.id);
        }),
          SS(
            l.getData(),
            function (r, o) {
              var t,
                e,
                n,
                i,
                a = r.get("name");
              this.newlineDisabled || ("" !== a && "\n" !== a)
                ? ((t = u.getSeriesByName(a)[0]),
                  p.get(a) ||
                    (t
                      ? ((e =
                          (i = t.getData()).getVisual("legendLineStyle") || {}),
                        (n = i.getVisual("legendIcon")),
                        (i = i.getVisual("style")),
                        this._createItem(t, a, o, r, l, s, e, i, n, d, h)
                          .on("click", bS(IS, a, null, h, f))
                          .on("mouseover", bS(kS, t.name, null, h, f))
                          .on("mouseout", bS(AS, t.name, null, h, f)),
                        p.set(a, !0))
                      : u.eachRawSeries(function (t) {
                          var e, n, i;
                          !p.get(a) &&
                            t.legendVisualProvider &&
                            (n = t.legendVisualProvider).containName(a) &&
                            ((i = n.indexOfName(a)),
                            (e = n.getItemVisual(i, "style")),
                            (n = n.getItemVisual(i, "legendIcon")),
                            (i = fi(e.fill)) &&
                              0 === i[3] &&
                              ((i[3] = 0.2),
                              (e = L(L({}, e), { fill: _i(i, "rgba") }))),
                            this._createItem(t, a, o, r, l, s, {}, e, n, d, h)
                              .on("click", bS(IS, null, a, h, f))
                              .on("mouseover", bS(kS, null, a, h, f))
                              .on("mouseout", bS(AS, null, a, h, f)),
                            p.set(a, !0));
                        }, this)))
                : (((e = new MS()).newline = !0), c.add(e));
            },
            this
          ),
          t && this._createSelector(t, l, h, e, n);
      }),
      (CS.prototype._createSelector = function (t, i, r, e, n) {
        var o = this.getSelectorGroup();
        SS(t, function (t) {
          var e = t.type,
            n = new Ls({
              style: { x: 0, y: 0, align: "center", verticalAlign: "middle" },
              onclick: function () {
                r.dispatchAction({
                  type: "all" === e ? "legendAllSelect" : "legendInverseSelect",
                });
              },
            });
          o.add(n),
            hc(
              n,
              {
                normal: i.getModel("selectorLabel"),
                emphasis: i.getModel(["emphasis", "selectorLabel"]),
              },
              { defaultText: t.title }
            ),
            Ol(n);
        });
      }),
      (CS.prototype._createItem = function (t, e, n, i, r, o, a, s, l, u, h) {
        var c = t.visualDrawType,
          p = r.get("itemWidth"),
          d = r.get("itemHeight"),
          f = r.isSelected(e),
          g = i.get("symbolRotate"),
          y = i.get("symbolKeepAspect"),
          m = i.get("icon"),
          a = (function (t, e, n, i, r, o, a) {
            function s(n, i) {
              "auto" === n.lineWidth && (n.lineWidth = 0 < i.lineWidth ? 2 : 0),
                SS(n, function (t, e) {
                  "inherit" === n[e] && (n[e] = i[e]);
                });
            }
            var l = e.getModel("itemStyle"),
              u = l.getItemStyle(),
              t = 0 === t.lastIndexOf("empty", 0) ? "fill" : "stroke",
              l = l.getShallow("decal"),
              l =
                ((u.decal = l && "inherit" !== l ? Cm(l, a) : i.decal),
                "inherit" === u.fill && (u.fill = i[r]),
                "inherit" === u.stroke && (u.stroke = i[t]),
                "inherit" === u.opacity &&
                  (u.opacity = ("fill" === r ? i : n).opacity),
                s(u, i),
                e.getModel("lineStyle")),
              a = l.getLineStyle();
            s(a, n),
              "auto" === u.fill && (u.fill = i.fill),
              "auto" === u.stroke && (u.stroke = i.fill),
              "auto" === a.stroke && (a.stroke = i.fill),
              o ||
                ((r = e.get("inactiveBorderWidth")),
                (n = u[t]),
                (u.lineWidth =
                  "auto" === r ? (0 < i.lineWidth && n ? 2 : 0) : u.lineWidth),
                (u.fill = e.get("inactiveColor")),
                (u.stroke = e.get("inactiveBorderColor")),
                (a.stroke = l.get("inactiveColor")),
                (a.lineWidth = l.get("inactiveWidth")));
            return { itemStyle: u, lineStyle: a };
          })((l = m || l || "roundRect"), i, a, s, c, f, h),
          s = new MS(),
          c = i.getModel("textStyle"),
          m =
            (!S(t.getLegendIcon) || (m && "inherit" !== m)
              ? ((h =
                  "inherit" === m && t.getData().getVisual("symbol")
                    ? "inherit" === g
                      ? t.getData().getVisual("symbolRotate")
                      : g
                    : 0),
                s.add(
                  ((m = {
                    itemWidth: p,
                    itemHeight: d,
                    icon: l,
                    iconRotate: h,
                    itemStyle: a.itemStyle,
                    lineStyle: a.lineStyle,
                    symbolKeepAspect: y,
                  }),
                  (h = m.icon || "roundRect"),
                  (v = Ky(
                    h,
                    0,
                    0,
                    m.itemWidth,
                    m.itemHeight,
                    m.itemStyle.fill,
                    m.symbolKeepAspect
                  )).setStyle(m.itemStyle),
                  (v.rotation = ((m.iconRotate || 0) * Math.PI) / 180),
                  v.setOrigin([m.itemWidth / 2, m.itemHeight / 2]),
                  -1 < h.indexOf("empty") &&
                    ((v.style.stroke = v.style.fill),
                    (v.style.fill = "#fff"),
                    (v.style.lineWidth = 2)),
                  v)
                ))
              : s.add(
                  t.getLegendIcon({
                    itemWidth: p,
                    itemHeight: d,
                    icon: l,
                    iconRotate: g,
                    itemStyle: a.itemStyle,
                    lineStyle: a.lineStyle,
                    symbolKeepAspect: y,
                  })
                ),
            "left" === o ? p + 5 : -5),
          h = o,
          v = r.get("formatter"),
          t = e,
          l =
            (H(v) && v
              ? (t = v.replace("{name}", null != e ? e : ""))
              : S(v) && (t = v(e)),
            f ? c.getTextColor() : i.get("inactiveColor")),
          g =
            (s.add(
              new Ls({
                style: pc(
                  c,
                  {
                    text: t,
                    x: m,
                    y: d / 2,
                    fill: l,
                    align: h,
                    verticalAlign: "middle",
                  },
                  { inheritColor: l }
                ),
              })
            ),
            new Is({ shape: s.getBoundingRect(), invisible: !0 })),
          a = i.getModel("tooltip");
        return (
          a.get("show") &&
            ic({
              el: g,
              componentModel: r,
              itemName: e,
              itemTooltipOption: a.option,
            }),
          s.add(g),
          s.eachChild(function (t) {
            t.silent = !0;
          }),
          (g.silent = !u),
          this.getContentGroup().add(s),
          Ol(s),
          (s.__legendDataIndex = n),
          s
        );
      }),
      (CS.prototype.layoutInner = function (t, e, n, i, r, o) {
        var a,
          s,
          l,
          u,
          h,
          c = this.getContentGroup(),
          p = this.getSelectorGroup(),
          n =
            (Pp(t.get("orient"), c, t.get("itemGap"), n.width, n.height),
            c.getBoundingRect()),
          d = [-n.x, -n.y];
        return (
          p.markRedraw(),
          c.markRedraw(),
          r
            ? (Pp("horizontal", p, t.get("selectorItemGap", !0)),
              (a = [-(r = p.getBoundingRect()).x, -r.y]),
              (s = t.get("selectorButtonGap", !0)),
              (l = 0 === (t = t.getOrient().index) ? "width" : "height"),
              (u = 0 === t ? "height" : "width"),
              (h = 0 === t ? "y" : "x"),
              "end" === o ? (a[t] += n[l] + s) : (d[t] += r[l] + s),
              (a[1 - t] += n[u] / 2 - r[u] / 2),
              (p.x = a[0]),
              (p.y = a[1]),
              (c.x = d[0]),
              (c.y = d[1]),
              ((o = { x: 0, y: 0 })[l] = n[l] + s + r[l]),
              (o[u] = Math.max(n[u], r[u])),
              (o[h] = Math.min(0, r[h] + a[1 - t])),
              o)
            : ((c.x = d[0]), (c.y = d[1]), this.group.getBoundingRect())
        );
      }),
      (CS.prototype.remove = function () {
        this.getContentGroup().removeAll(), (this._isFirstRender = !0);
      }),
      (CS.type = "legend.plain"),
      CS);
  function CS() {
    var t = (null !== wS && wS.apply(this, arguments)) || this;
    return (t.type = CS.type), (t.newlineDisabled = !1), t;
  }
  function IS(t, e, n, i) {
    AS(t, e, n, i),
      n.dispatchAction({ type: "legendToggleSelect", name: null != t ? t : e }),
      kS(t, e, n, i);
  }
  function DS(t) {
    for (
      var e, n = t.getZr().storage.getDisplayList(), i = 0, r = n.length;
      i < r && !(e = n[i].states.emphasis);

    )
      i++;
    return e && e.hoverLayer;
  }
  function kS(t, e, n, i) {
    DS(n) ||
      n.dispatchAction({
        type: "highlight",
        seriesName: t,
        name: e,
        excludeSeriesId: i,
      });
  }
  function AS(t, e, n, i) {
    DS(n) ||
      n.dispatchAction({
        type: "downplay",
        seriesName: t,
        name: e,
        excludeSeriesId: i,
      });
  }
  function PS(t) {
    var n = t.findComponents({ mainType: "legend" });
    n &&
      n.length &&
      t.filterSeries(function (t) {
        for (var e = 0; e < n.length; e++)
          if (!n[e].isSelected(t.name)) return !1;
        return !0;
      });
  }
  function LS(t, e, n) {
    var i,
      r = {},
      o = "toggleSelected" === t;
    return (
      n.eachComponent("legend", function (n) {
        o && null != i
          ? n[i ? "select" : "unSelect"](e.name)
          : "allSelect" === t || "inverseSelect" === t
          ? n[t]()
          : (n[t](e.name), (i = n.isSelected(e.name))),
          E(n.getData(), function (t) {
            var e,
              t = t.get("name");
            "\n" !== t &&
              "" !== t &&
              ((e = n.isSelected(t)),
              r.hasOwnProperty(t) ? (r[t] = r[t] && e) : (r[t] = e));
          });
      }),
      "allSelect" === t || "inverseSelect" === t
        ? { selected: r }
        : { name: e.name, selected: r }
    );
  }
  function OS(t) {
    t.registerComponentModel(_S),
      t.registerComponentView(TS),
      t.registerProcessor(t.PRIORITY.PROCESSOR.SERIES_FILTER, PS),
      t.registerSubTypeDefaulter("legend", function () {
        return "plain";
      }),
      (t = t).registerAction(
        "legendToggleSelect",
        "legendselectchanged",
        pt(LS, "toggleSelected")
      ),
      t.registerAction(
        "legendAllSelect",
        "legendselectall",
        pt(LS, "allSelect")
      ),
      t.registerAction(
        "legendInverseSelect",
        "legendinverseselect",
        pt(LS, "inverseSelect")
      ),
      t.registerAction("legendSelect", "legendselected", pt(LS, "select")),
      t.registerAction(
        "legendUnSelect",
        "legendunselected",
        pt(LS, "unSelect")
      );
  }
  u(ES, (RS = _S)),
    (ES.prototype.setScrollDataIndex = function (t) {
      this.option.scrollDataIndex = t;
    }),
    (ES.prototype.init = function (t, e, n) {
      var i = Np(t);
      RS.prototype.init.call(this, t, e, n), zS(this, t, i);
    }),
    (ES.prototype.mergeOption = function (t, e) {
      RS.prototype.mergeOption.call(this, t, e), zS(this, this.option, t);
    }),
    (ES.type = "legend.scroll"),
    (ES.defaultOption = Ec(_S.defaultOption, {
      scrollDataIndex: 0,
      pageButtonItemGap: 5,
      pageButtonGap: null,
      pageButtonPosition: "end",
      pageFormatter: "{current}/{total}",
      pageIcons: {
        horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
        vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"],
      },
      pageIconColor: "#2f4554",
      pageIconInactiveColor: "#aaa",
      pageIconSize: 15,
      pageTextStyle: { color: "#333" },
      animationDurationUpdate: 800,
    }));
  var RS,
    NS = ES;
  function ES() {
    var t = (null !== RS && RS.apply(this, arguments)) || this;
    return (t.type = ES.type), t;
  }
  function zS(t, e, n) {
    var i = [1, 1];
    (i[t.getOrient().index] = 0), Rp(e, n, { type: "box", ignoreSize: !!i });
  }
  var BS,
    FS = Fr,
    VS = ["width", "height"],
    HS = ["x", "y"],
    GS =
      (u(WS, (BS = TS)),
      (WS.prototype.init = function () {
        BS.prototype.init.call(this),
          this.group.add((this._containerGroup = new FS())),
          this._containerGroup.add(this.getContentGroup()),
          this.group.add((this._controllerGroup = new FS()));
      }),
      (WS.prototype.resetInner = function () {
        BS.prototype.resetInner.call(this),
          this._controllerGroup.removeAll(),
          this._containerGroup.removeClipPath(),
          (this._containerGroup.__rectSize = null);
      }),
      (WS.prototype.renderInner = function (t, i, e, r, n, o, a) {
        var s = this,
          l =
            (BS.prototype.renderInner.call(this, t, i, e, r, n, o, a),
            this._controllerGroup),
          t = i.get("pageIconSize", !0),
          u = V(t) ? t : [t, t],
          e = (h("pagePrev", 0), i.getModel("pageTextStyle"));
        function h(t, e) {
          var n = t + "DataIndex",
            e = ec(
              i.get("pageIcons", !0)[i.getOrient().name][e],
              { onclick: ct(s._pageGo, s, n, i, r) },
              { x: -u[0] / 2, y: -u[1] / 2, width: u[0], height: u[1] }
            );
          (e.name = t), l.add(e);
        }
        l.add(
          new Ls({
            name: "pageText",
            style: {
              text: "xx/xx",
              fill: e.getTextColor(),
              font: e.getFont(),
              verticalAlign: "middle",
              align: "center",
            },
            silent: !0,
          })
        ),
          h("pageNext", 1);
      }),
      (WS.prototype.layoutInner = function (t, e, n, i, r, o) {
        var a = this.getSelectorGroup(),
          s = t.getOrient().index,
          l = VS[s],
          u = HS[s],
          h = VS[1 - s],
          c = HS[1 - s],
          p =
            (r && Pp("horizontal", a, t.get("selectorItemGap", !0)),
            t.get("selectorButtonGap", !0)),
          d = a.getBoundingRect(),
          f = [-d.x, -d.y],
          g = y(n),
          n =
            (r && (g[l] = n[l] - d[l] - p),
            this._layoutContentAndController(t, i, g, s, l, h, c, u));
        return (
          r &&
            ("end" === o
              ? (f[s] += n[l] + p)
              : ((t = d[l] + p), (f[s] -= t), (n[u] -= t)),
            (n[l] += d[l] + p),
            (f[1 - s] += n[c] + n[h] / 2 - d[h] / 2),
            (n[h] = Math.max(n[h], d[h])),
            (n[c] = Math.min(n[c], d[c] + f[1 - s])),
            (a.x = f[0]),
            (a.y = f[1]),
            a.markRedraw()),
          n
        );
      }),
      (WS.prototype._layoutContentAndController = function (
        t,
        e,
        n,
        i,
        r,
        o,
        a,
        s
      ) {
        var l = this.getContentGroup(),
          u = this._containerGroup,
          h = this._controllerGroup,
          c =
            (Pp(
              t.get("orient"),
              l,
              t.get("itemGap"),
              i ? n.width : null,
              i ? null : n.height
            ),
            Pp("horizontal", h, t.get("pageButtonItemGap", !0)),
            l.getBoundingRect()),
          p = h.getBoundingRect(),
          d = (this._showController = c[r] > n[r]),
          f = [-c.x, -c.y],
          e = (e || (f[i] = l[s]), [0, 0]),
          s = [-p.x, -p.y],
          g = R(t.get("pageButtonGap", !0), t.get("itemGap", !0)),
          f =
            (d &&
              ("end" === t.get("pageButtonPosition", !0)
                ? (s[i] += n[r] - p[r])
                : (e[i] += p[r] + g)),
            (s[1 - i] += c[o] / 2 - p[o] / 2),
            l.setPosition(f),
            u.setPosition(e),
            h.setPosition(s),
            { x: 0, y: 0 }),
          c =
            ((f[r] = (d ? n : c)[r]),
            (f[o] = Math.max(c[o], p[o])),
            (f[a] = Math.min(0, p[a] + s[1 - i])),
            (u.__rectSize = n[r]),
            d
              ? (((e = { x: 0, y: 0 })[r] = Math.max(n[r] - p[r] - g, 0)),
                (e[o] = f[o]),
                u.setClipPath(new Is({ shape: e })),
                (u.__rectSize = e[r]))
              : h.eachChild(function (t) {
                  t.attr({ invisible: !0, silent: !0 });
                }),
            this._getPageInfo(t));
        return (
          null != c.pageIndex &&
            Ih(
              l,
              { x: c.contentPosition[0], y: c.contentPosition[1] },
              d ? t : null
            ),
          this._updatePageInfoView(t, c),
          f
        );
      }),
      (WS.prototype._pageGo = function (t, e, n) {
        t = this._getPageInfo(e)[t];
        null != t &&
          n.dispatchAction({
            type: "legendScroll",
            scrollDataIndex: t,
            legendId: e.id,
          });
      }),
      (WS.prototype._updatePageInfoView = function (n, i) {
        var r = this._controllerGroup,
          t =
            (E(["pagePrev", "pageNext"], function (t) {
              var e = null != i[t + "DataIndex"],
                t = r.childOfName(t);
              t &&
                (t.setStyle(
                  "fill",
                  e
                    ? n.get("pageIconColor", !0)
                    : n.get("pageIconInactiveColor", !0)
                ),
                (t.cursor = e ? "pointer" : "default"));
            }),
            r.childOfName("pageText")),
          e = n.get("pageFormatter"),
          o = i.pageIndex,
          o = null != o ? o + 1 : 0,
          a = i.pageCount;
        t &&
          e &&
          t.setStyle(
            "text",
            H(e)
              ? e
                  .replace("{current}", null == o ? "" : o + "")
                  .replace("{total}", null == a ? "" : a + "")
              : e({ current: o, total: a })
          );
      }),
      (WS.prototype._getPageInfo = function (t) {
        var e = t.get("scrollDataIndex", !0),
          n = this.getContentGroup(),
          i = this._containerGroup.__rectSize,
          t = t.getOrient().index,
          r = VS[t],
          o = HS[t],
          e = this._findTargetItemIndex(e),
          a = n.children(),
          s = a[e],
          l = a.length,
          u = l ? 1 : 0,
          h = {
            contentPosition: [n.x, n.y],
            pageCount: u,
            pageIndex: u - 1,
            pagePrevDataIndex: null,
            pageNextDataIndex: null,
          };
        if (s) {
          n = g(s);
          h.contentPosition[t] = -n.s;
          for (var c = e + 1, p = n, d = n, f = null; c <= l; ++c)
            ((!(f = g(a[c])) && d.e > p.s + i) || (f && !y(f, p.s))) &&
              (p = d.i > p.i ? d : f) &&
              (null == h.pageNextDataIndex && (h.pageNextDataIndex = p.i),
              ++h.pageCount),
              (d = f);
          for (c = e - 1, d = p = n, f = null; -1 <= c; --c)
            ((f = g(a[c])) && y(d, f.s)) ||
              !(p.i < d.i) ||
              ((d = p),
              null == h.pagePrevDataIndex && (h.pagePrevDataIndex = p.i),
              ++h.pageCount,
              ++h.pageIndex),
              (p = f);
        }
        return h;
        function g(t) {
          var e, n;
          if (t)
            return {
              s: (n = (e = t.getBoundingRect())[o] + t[o]),
              e: n + e[r],
              i: t.__legendDataIndex,
            };
        }
        function y(t, e) {
          return t.e >= e && t.s <= e + i;
        }
      }),
      (WS.prototype._findTargetItemIndex = function (n) {
        return this._showController
          ? (this.getContentGroup().eachChild(function (t, e) {
              t = t.__legendDataIndex;
              null == r && null != t && (r = e), t === n && (i = e);
            }),
            null != i ? i : r)
          : 0;
        var i, r;
      }),
      (WS.type = "legend.scroll"),
      WS);
  function WS() {
    var t = (null !== BS && BS.apply(this, arguments)) || this;
    return (
      (t.type = WS.type), (t.newlineDisabled = !0), (t._currentIndex = 0), t
    );
  }
  E_(function (t) {
    E_(OS),
      t.registerComponentModel(NS),
      t.registerComponentView(GS),
      t.registerAction("legendScroll", "legendscroll", function (t, e) {
        var n = t.scrollDataIndex;
        null != n &&
          e.eachComponent(
            { mainType: "legend", subType: "scroll", query: t },
            function (t) {
              t.setScrollDataIndex(n);
            }
          );
      });
  });
  var US = ko(),
    XS = y,
    YS = ct;
  function qS() {
    (this._dragging = !1), (this.animationThreshold = 15);
  }
  function ZS(t, e, n, i) {
    !(function n(i, t) {
      {
        var r;
        if (O(i) && O(t))
          return (
            (r = !0),
            E(t, function (t, e) {
              r = r && n(i[e], t);
            }),
            !!r
          );
      }
      return i === t;
    })(US(n).lastProp, i) &&
      ((US(n).lastProp = i), e ? Ih(n, i, t) : (n.stopAnimation(), n.attr(i)));
  }
  function jS(t, e) {
    t[e.get(["label", "show"]) ? "show" : "hide"]();
  }
  function KS(t) {
    return { x: t.x || 0, y: t.y || 0, rotation: t.rotation || 0 };
  }
  function $S(t, e, n) {
    var i = e.get("z"),
      r = e.get("zlevel");
    t &&
      t.traverse(function (t) {
        "group" !== t.type &&
          (null != i && (t.z = i), null != r && (t.zlevel = r), (t.silent = n));
      });
  }
  function QS(t, e, n, i, r) {
    var o = JS(n.get("value"), e.axis, e.ecModel, n.get("seriesDataIndices"), {
        precision: n.get(["label", "precision"]),
        formatter: n.get(["label", "formatter"]),
      }),
      n = n.getModel("label"),
      a = _p(n.get("padding") || 0),
      s = n.getFont(),
      l = wr(o, s),
      u = r.position,
      h = l.width + a[1] + a[3],
      l = l.height + a[0] + a[2],
      c = r.align,
      c =
        ("right" === c && (u[0] -= h),
        "center" === c && (u[0] -= h / 2),
        r.verticalAlign),
      i =
        ("bottom" === c && (u[1] -= l),
        "middle" === c && (u[1] -= l / 2),
        (r = u),
        (c = h),
        (h = l),
        (i = (l = i).getWidth()),
        (l = l.getHeight()),
        (r[0] = Math.min(r[0] + c, i) - c),
        (r[1] = Math.min(r[1] + h, l) - h),
        (r[0] = Math.max(r[0], 0)),
        (r[1] = Math.max(r[1], 0)),
        n.get("backgroundColor"));
    (i && "auto" !== i) || (i = e.get(["axisLine", "lineStyle", "color"])),
      (t.label = {
        x: u[0],
        y: u[1],
        style: pc(n, {
          text: o,
          font: s,
          fill: n.getTextColor(),
          padding: a,
          backgroundColor: i,
        }),
        z2: 10,
      });
  }
  function JS(t, e, n, i, r) {
    t = e.scale.parse(t);
    var o,
      a = e.scale.getLabel({ value: t }, { precision: r.precision }),
      r = r.formatter;
    return (
      r &&
        ((o = {
          value: D_(e, { value: t }),
          axisDimension: e.dim,
          axisIndex: e.index,
          seriesData: [],
        }),
        E(i, function (t) {
          var e = n.getSeriesByIndex(t.seriesIndex),
            t = t.dataIndexInside,
            e = e && e.getDataParams(t);
          e && o.seriesData.push(e);
        }),
        H(r) ? (a = r.replace("{value}", a)) : S(r) && (a = r(o))),
      a
    );
  }
  function tM(t, e, n) {
    var i = Le();
    return (
      ze(i, i, n.rotation),
      Ee(i, i, n.position),
      Kh(
        [
          t.dataToCoord(e),
          (n.labelOffset || 0) + (n.labelDirection || 1) * (n.labelMargin || 0),
        ],
        i
      )
    );
  }
  (qS.prototype.render = function (t, e, n, i) {
    var r,
      o,
      a = e.get("value"),
      s = e.get("status");
    (this._axisModel = t),
      (this._axisPointerModel = e),
      (this._api = n),
      (!i && this._lastValue === a && this._lastStatus === s) ||
        ((this._lastValue = a),
        (this._lastStatus = s),
        (i = this._group),
        (r = this._handle),
        s && "hide" !== s
          ? (i && i.show(),
            r && r.show(),
            this.makeElOption((s = {}), a, t, e, n),
            (o = s.graphicKey) !== this._lastGraphicKey && this.clear(n),
            (this._lastGraphicKey = o),
            (o = this._moveAnimation = this.determineAnimation(t, e)),
            i
              ? ((o = pt(ZS, e, o)),
                this.updatePointerEl(i, s, o),
                this.updateLabelEl(i, s, o, e))
              : ((i = this._group = new Fr()),
                this.createPointerEl(i, s, t, e),
                this.createLabelEl(i, s, t, e),
                n.getZr().add(i)),
            $S(i, e, !0),
            this._renderHandle(a))
          : (i && i.hide(), r && r.hide()));
  }),
    (qS.prototype.remove = function (t) {
      this.clear(t);
    }),
    (qS.prototype.dispose = function (t) {
      this.clear(t);
    }),
    (qS.prototype.determineAnimation = function (t, e) {
      var n,
        i = e.get("animation"),
        r = t.axis,
        o = "category" === r.type,
        e = e.get("snap");
      return (
        !(!e && !o) &&
        ("auto" === i || null == i
          ? ((n = this.animationThreshold),
            (o && r.getBandWidth() > n) ||
              (!!e &&
                ((o = Wb(t).seriesDataCount),
                (e = r.getExtent()),
                Math.abs(e[0] - e[1]) / o > n)))
          : !0 === i)
      );
    }),
    (qS.prototype.makeElOption = function (t, e, n, i, r) {}),
    (qS.prototype.createPointerEl = function (t, e, n, i) {
      var r = e.pointer;
      r && ((r = US(t).pointerEl = new ac[r.type](XS(e.pointer))), t.add(r));
    }),
    (qS.prototype.createLabelEl = function (t, e, n, i) {
      e.label &&
        ((e = US(t).labelEl = new Ls(XS(e.label))), t.add(e), jS(e, i));
    }),
    (qS.prototype.updatePointerEl = function (t, e, n) {
      t = US(t).pointerEl;
      t &&
        e.pointer &&
        (t.setStyle(e.pointer.style), n(t, { shape: e.pointer.shape }));
    }),
    (qS.prototype.updateLabelEl = function (t, e, n, i) {
      t = US(t).labelEl;
      t &&
        (t.setStyle(e.label.style),
        n(t, { x: e.label.x, y: e.label.y }),
        jS(t, i));
    }),
    (qS.prototype._renderHandle = function (t) {
      var e, n, i, r, o, a;
      !this._dragging &&
        this.updateHandleTransform &&
        ((n = this._axisPointerModel),
        (i = this._api.getZr()),
        (r = this._handle),
        (o = n.getModel("handle")),
        (a = n.get("status")),
        o.get("show") && a && "hide" !== a
          ? (this._handle ||
              ((e = !0),
              (r = this._handle =
                ec(o.get("icon"), {
                  cursor: "move",
                  draggable: !0,
                  onmousemove: function (t) {
                    Ie(t.event);
                  },
                  onmousedown: YS(this._onHandleDragMove, this, 0, 0),
                  drift: YS(this._onHandleDragMove, this),
                  ondragend: YS(this._onHandleDragEnd, this),
                })),
              i.add(r)),
            $S(r, n, !1),
            r.setStyle(
              o.getItemStyle(null, [
                "color",
                "borderColor",
                "borderWidth",
                "opacity",
                "shadowColor",
                "shadowBlur",
                "shadowOffsetX",
                "shadowOffsetY",
              ])
            ),
            V((a = o.get("size"))) || (a = [a, a]),
            (r.scaleX = a[0] / 2),
            (r.scaleY = a[1] / 2),
            oy(
              this,
              "_doDispatchAxisPointer",
              o.get("throttle") || 0,
              "fixRate"
            ),
            this._moveHandleToValue(t, e))
          : (r && i.remove(r), (this._handle = null)));
    }),
    (qS.prototype._moveHandleToValue = function (t, e) {
      ZS(
        this._axisPointerModel,
        !e && this._moveAnimation,
        this._handle,
        KS(this.getHandleTransform(t, this._axisModel, this._axisPointerModel))
      );
    }),
    (qS.prototype._onHandleDragMove = function (t, e) {
      var n = this._handle;
      n &&
        ((this._dragging = !0),
        (t = this.updateHandleTransform(
          KS(n),
          [t, e],
          this._axisModel,
          this._axisPointerModel
        )),
        (this._payloadInfo = t),
        n.stopAnimation(),
        n.attr(KS(t)),
        (US(n).lastProp = null),
        this._doDispatchAxisPointer());
    }),
    (qS.prototype._doDispatchAxisPointer = function () {
      var t, e;
      this._handle &&
        ((t = this._payloadInfo),
        (e = this._axisModel),
        this._api.dispatchAction({
          type: "updateAxisPointer",
          x: t.cursorPoint[0],
          y: t.cursorPoint[1],
          tooltipOption: t.tooltipOption,
          axesInfo: [{ axisDim: e.axis.dim, axisIndex: e.componentIndex }],
        }));
    }),
    (qS.prototype._onHandleDragEnd = function () {
      var t;
      (this._dragging = !1),
        this._handle &&
          ((t = this._axisPointerModel.get("value")),
          this._moveHandleToValue(t),
          this._api.dispatchAction({ type: "hideTip" }));
    }),
    (qS.prototype.clear = function (t) {
      (this._lastValue = null), (this._lastStatus = null);
      var t = t.getZr(),
        e = this._group,
        n = this._handle;
      t &&
        e &&
        ((this._lastGraphicKey = null),
        e && t.remove(e),
        n && t.remove(n),
        (this._group = null),
        (this._handle = null),
        (this._payloadInfo = null)),
        ay(this, "_doDispatchAxisPointer");
    }),
    (qS.prototype.doClear = function () {}),
    (qS.prototype.buildLabel = function (t, e, n) {
      return { x: t[(n = n || 0)], y: t[1 - n], width: e[n], height: e[1 - n] };
    });
  u(iM, (eM = qS)),
    (iM.prototype.makeElOption = function (t, e, n, i, r) {
      var o,
        a,
        s = n.axis,
        l = s.grid,
        u = i.get("type"),
        h = rM(l, s).getOtherAxis(s).getGlobalExtent(),
        c = s.toGlobalCoord(s.dataToCoord(e, !0)),
        p =
          (u &&
            "none" !== u &&
            ((o = (a = i).get("type")),
            (a = a.getModel(o + "Style")),
            "line" === o
              ? ((p = a.getLineStyle()).fill = null)
              : "shadow" === o && ((p = a.getAreaStyle()).stroke = null),
            (o = p),
            ((a = oM[u](s, c, h)).style = o),
            (t.graphicKey = a.type),
            (t.pointer = a)),
          Mb(l.model, n));
      (u = e),
        (s = t),
        (c = p),
        (h = n),
        (o = i),
        (a = r),
        (l = Rb.innerTextLayout(c.rotation, 0, c.labelDirection)),
        (c.labelMargin = o.get(["label", "margin"])),
        QS(s, h, o, a, {
          position: tM(h.axis, u, c),
          align: l.textAlign,
          verticalAlign: l.textVerticalAlign,
        });
    }),
    (iM.prototype.getHandleTransform = function (t, e, n) {
      var i = Mb(e.axis.grid.model, e, { labelInside: !1 }),
        n = ((i.labelMargin = n.get(["handle", "margin"])), tM(e.axis, t, i));
      return {
        x: n[0],
        y: n[1],
        rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0),
      };
    }),
    (iM.prototype.updateHandleTransform = function (t, e, n, i) {
      var n = n.axis,
        r = n.grid,
        o = n.getGlobalExtent(!0),
        r = rM(r, n).getOtherAxis(n).getGlobalExtent(),
        n = "x" === n.dim ? 0 : 1,
        a = [t.x, t.y],
        e =
          ((a[n] += e[n]),
          (a[n] = Math.min(o[1], a[n])),
          (a[n] = Math.max(o[0], a[n])),
          (r[1] + r[0]) / 2),
        o = [e, e];
      return (
        (o[n] = a[n]),
        {
          x: a[0],
          y: a[1],
          rotation: t.rotation,
          cursorPoint: o,
          tooltipOption: [{ verticalAlign: "middle" }, { align: "center" }][n],
        }
      );
    });
  var eM,
    nM = iM;
  function iM() {
    return (null !== eM && eM.apply(this, arguments)) || this;
  }
  function rM(t, e) {
    var n = {};
    return (n[e.dim + "AxisIndex"] = e.index), t.getCartesian(n);
  }
  var oM = {
    line: function (t, e, n) {
      return {
        type: "Line",
        subPixelOptimize: !0,
        shape:
          ((i = [e, n[0]]),
          (e = [e, n[1]]),
          (n = aM(t)),
          { x1: i[(n = n || 0)], y1: i[1 - n], x2: e[n], y2: e[1 - n] }),
      };
      var i;
    },
    shadow: function (t, e, n) {
      var i = Math.max(1, t.getBandWidth()),
        r = n[1] - n[0];
      return {
        type: "Rect",
        shape:
          ((e = [e - i / 2, n[0]]),
          (n = [i, r]),
          (i = aM(t)),
          { x: e[(i = i || 0)], y: e[1 - i], width: n[i], height: n[1 - i] }),
      };
    },
  };
  function aM(t) {
    return "x" === t.dim ? 0 : 1;
  }
  u(uM, (sM = g)),
    (uM.type = "axisPointer"),
    (uM.defaultOption = {
      show: "auto",
      z: 50,
      type: "line",
      snap: !1,
      triggerTooltip: !0,
      triggerEmphasis: !0,
      value: null,
      status: null,
      link: [],
      animation: null,
      animationDurationUpdate: 200,
      lineStyle: { color: "#B9BEC9", width: 1, type: "dashed" },
      shadowStyle: { color: "rgba(210,219,238,0.2)" },
      label: {
        show: !0,
        formatter: null,
        precision: "auto",
        margin: 3,
        color: "#fff",
        padding: [5, 7, 5, 7],
        backgroundColor: "auto",
        borderColor: null,
        borderWidth: 0,
        borderRadius: 3,
      },
      handle: {
        show: !1,
        icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
        size: 45,
        margin: 50,
        color: "#333",
        shadowBlur: 3,
        shadowColor: "#aaa",
        shadowOffsetX: 0,
        shadowOffsetY: 2,
        throttle: 40,
      },
    });
  var sM,
    lM = uM;
  function uM() {
    var t = (null !== sM && sM.apply(this, arguments)) || this;
    return (t.type = uM.type), t;
  }
  var hM = ko(),
    cM = E;
  function pM(t, e, n) {
    var i, c, p;
    function r(t, h) {
      c.on(t, function (e) {
        n = p;
        var n,
          i,
          t,
          r,
          o,
          a,
          s,
          l = {
            dispatchAction: u,
            pendings: (i = { showTip: [], hideTip: [] }),
          };
        function u(t) {
          var e = i[t.type];
          e ? e.push(t) : ((t.dispatchAction = u), n.dispatchAction(t));
        }
        cM(hM(c).records, function (t) {
          t && h(t, e, l.dispatchAction);
        }),
          (r = p),
          (a = (t = l.pendings).showTip.length),
          (s = t.hideTip.length),
          a ? (o = t.showTip[a - 1]) : s && (o = t.hideTip[s - 1]),
          o && ((o.dispatchAction = null), r.dispatchAction(o));
      });
    }
    b.node ||
      ((i = e.getZr()),
      hM(i).records || (hM(i).records = {}),
      (p = e),
      hM((c = i)).initialized ||
        ((hM(c).initialized = !0),
        r("click", pt(fM, "click")),
        r("mousemove", pt(fM, "mousemove")),
        r("globalout", dM)),
      ((hM(i).records[t] || (hM(i).records[t] = {})).handler = n));
  }
  function dM(t, e, n) {
    t.handler("leave", null, n);
  }
  function fM(t, e, n, i) {
    e.handler(t, n, i);
  }
  function gM(t, e) {
    b.node ||
      ((e = e.getZr()), (hM(e).records || {})[t] && (hM(e).records[t] = null));
  }
  u(vM, (yM = Wg)),
    (vM.prototype.render = function (t, e, n) {
      var e = e.getComponent("tooltip"),
        i =
          t.get("triggerOn") || (e && e.get("triggerOn")) || "mousemove|click";
      pM("axisPointer", n, function (t, e, n) {
        "none" !== i &&
          ("leave" === t || 0 <= i.indexOf(t)) &&
          n({
            type: "updateAxisPointer",
            currTrigger: t,
            x: e && e.offsetX,
            y: e && e.offsetY,
          });
      });
    }),
    (vM.prototype.remove = function (t, e) {
      gM("axisPointer", e);
    }),
    (vM.prototype.dispose = function (t, e) {
      gM("axisPointer", e);
    }),
    (vM.type = "axisPointer");
  var yM,
    mM = vM;
  function vM() {
    var t = (null !== yM && yM.apply(this, arguments)) || this;
    return (t.type = vM.type), t;
  }
  function _M(t, e) {
    var n,
      i,
      r,
      o,
      a = [],
      s = t.seriesIndex;
    return null == s ||
      !(e = e.getSeriesByIndex(s)) ||
      null == (s = Do((n = e.getData()), t)) ||
      s < 0 ||
      V(s)
      ? { point: [] }
      : ((i = n.getItemGraphicEl(s)),
        (r = e.coordinateSystem),
        e.getTooltipPosition
          ? (a = e.getTooltipPosition(s) || [])
          : r && r.dataToPoint
          ? (a = t.isStacked
              ? ((e = r.getBaseAxis()),
                (t = r.getOtherAxis(e).dim),
                (e = e.dim),
                (t = "x" === t || "radius" === t ? 1 : 0),
                (e = n.mapDimension(e)),
                ((o = [])[t] = n.get(e, s)),
                (o[1 - t] = n.get(
                  n.getCalculationInfo("stackResultDimension"),
                  s
                )),
                r.dataToPoint(o) || [])
              : r.dataToPoint(
                  n.getValues(
                    F(r.dimensions, function (t) {
                      return n.mapDimension(t);
                    }),
                    s
                  )
                ) || [])
          : i &&
            ((e = i.getBoundingRect().clone()).applyTransform(i.transform),
            (a = [e.x + e.width / 2, e.y + e.height / 2])),
        { point: a, el: i });
  }
  var xM = ko();
  function wM(t, e, n) {
    var o,
      a,
      i,
      s,
      l,
      r,
      u,
      h,
      c,
      p,
      d,
      f,
      g,
      y,
      m = t.currTrigger,
      v = [t.x, t.y],
      _ = t,
      x = t.dispatchAction || ct(n.dispatchAction, n),
      w = e.getComponent("axisPointer").coordSysAxesInfo;
    if (w)
      return (
        CM(v) &&
          (v = _M(
            { seriesIndex: _.seriesIndex, dataIndex: _.dataIndex },
            e
          ).point),
        (o = CM(v)),
        (a = _.axesInfo),
        (i = w.axesInfo),
        (s = "leave" === m || CM(v)),
        (l = {}),
        (e = { list: [], map: {} }),
        (u = { showPointer: pt(SM, (r = {})), showTooltip: pt(MM, e) }),
        E(w.coordSysMap, function (t, e) {
          var r = o || t.containPoint(v);
          E(w.coordSysAxesInfo[e], function (t, e) {
            var n = t.axis,
              i = (function (t, e) {
                for (var n = 0; n < (t || []).length; n++) {
                  var i = t[n];
                  if (
                    e.axis.dim === i.axisDim &&
                    e.axis.model.componentIndex === i.axisIndex
                  )
                    return i;
                }
              })(a, t);
            s ||
              !r ||
              (a && !i) ||
              (null !=
                (i = null != (i = i && i.value) || o ? i : n.pointToData(v)) &&
                bM(t, i, u, !1, l));
          });
        }),
        (h = {}),
        E(i, function (n, t) {
          var i = n.linkGroup;
          i &&
            !r[t] &&
            E(i.axesInfo, function (t, e) {
              var e = r[e];
              t !== n &&
                e &&
                ((e = e.value),
                i.mapper && (e = n.axis.scale.parse(i.mapper(e, TM(t), TM(n)))),
                (h[n.key] = e));
            });
        }),
        E(h, function (t, e) {
          bM(i[e], t, u, !0, l);
        }),
        (g = r),
        (_ = i),
        (y = l.axesInfo = []),
        E(_, function (t, e) {
          var n = t.axisPointerModel.option,
            e = g[e];
          e
            ? (t.useHandle || (n.status = "show"),
              (n.value = e.value),
              (n.seriesDataIndices = (e.payloadBatch || []).slice()))
            : t.useHandle || (n.status = "hide"),
            "show" === n.status &&
              y.push({
                axisDim: t.axis.dim,
                axisIndex: t.axis.model.componentIndex,
                value: n.value,
              });
        }),
        (m = e),
        (_ = t),
        (e = x),
        !CM((t = v)) && m.list.length
          ? ((x =
              ((m.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] ||
              {}),
            e({
              type: "showTip",
              escapeConnect: !0,
              x: t[0],
              y: t[1],
              tooltipOption: _.tooltipOption,
              position: _.position,
              dataIndexInside: x.dataIndexInside,
              dataIndex: x.dataIndex,
              seriesIndex: x.seriesIndex,
              dataByCoordSys: m.list,
            }))
          : e({ type: "hideTip" }),
        (t = i),
        (x = (_ = n).getZr()),
        (m = "axisPointerLastHighlights"),
        (c = xM(x)[m] || {}),
        (p = xM(x)[m] = {}),
        E(t, function (t, e) {
          var n = t.axisPointerModel.option;
          "show" === n.status &&
            t.triggerEmphasis &&
            E(n.seriesDataIndices, function (t) {
              var e = t.seriesIndex + " | " + t.dataIndex;
              p[e] = t;
            });
        }),
        (d = []),
        (f = []),
        E(c, function (t, e) {
          p[e] || f.push(t);
        }),
        E(p, function (t, e) {
          c[e] || d.push(t);
        }),
        f.length &&
          _.dispatchAction({
            type: "downplay",
            escapeConnect: !0,
            notBlur: !0,
            batch: f,
          }),
        d.length &&
          _.dispatchAction({
            type: "highlight",
            escapeConnect: !0,
            notBlur: !0,
            batch: d,
          }),
        l
      );
  }
  function bM(t, e, n, i, r) {
    var o,
      a,
      s,
      l,
      u,
      h,
      c,
      p,
      d,
      f,
      g = t.axis;
    !g.scale.isBlank() &&
      g.containData(e) &&
      (t.involveSeries
        ? ((l = e),
          (u = t.axis),
          (h = u.dim),
          (c = l),
          (p = []),
          (d = Number.MAX_VALUE),
          (f = -1),
          E(t.seriesModels, function (e, t) {
            var n,
              i = e.getData().mapDimensionsAll(h);
            if (e.getAxisTooltipData)
              var r = e.getAxisTooltipData(i, l, u),
                o = r.dataIndices,
                r = r.nestestValue;
            else {
              if (
                !(o = e
                  .getData()
                  .indicesOfNearest(
                    i[0],
                    l,
                    "category" === u.type ? 0.5 : null
                  )).length
              )
                return;
              r = e.getData().get(i[0], o[0]);
            }
            null != r &&
              isFinite(r) &&
              ((i = l - r), (n = Math.abs(i)) <= d) &&
              ((n < d || (0 <= i && f < 0)) &&
                ((d = n), (f = i), (c = r), (p.length = 0)),
              E(o, function (t) {
                p.push({
                  seriesIndex: e.seriesIndex,
                  dataIndexInside: t,
                  dataIndex: e.getData().getRawIndex(t),
                });
              }));
          }),
          (s = (o = { payloadBatch: p, snapToValue: c }).snapToValue),
          (a = o.payloadBatch)[0] && null == r.seriesIndex && L(r, a[0]),
          !i && t.snap && g.containData(s) && null != s && (e = s),
          n.showPointer(t, e, a),
          n.showTooltip(t, o, s))
        : n.showPointer(t, e));
  }
  function SM(t, e, n, i) {
    t[e.key] = { value: n, payloadBatch: i };
  }
  function MM(t, e, n, i) {
    var r,
      o,
      n = n.payloadBatch,
      a = e.axis,
      s = a.model,
      l = e.axisPointerModel;
    e.triggerTooltip &&
      n.length &&
      ((r = Xb((e = e.coordSys.model))),
      (o = t.map[r]) ||
        ((o = t.map[r] =
          {
            coordSysId: e.id,
            coordSysIndex: e.componentIndex,
            coordSysType: e.type,
            coordSysMainType: e.mainType,
            dataByAxis: [],
          }),
        t.list.push(o)),
      o.dataByAxis.push({
        axisDim: a.dim,
        axisIndex: s.componentIndex,
        axisType: s.type,
        axisId: s.id,
        value: i,
        valueLabelOpt: {
          precision: l.get(["label", "precision"]),
          formatter: l.get(["label", "formatter"]),
        },
        seriesDataIndices: n.slice(),
      }));
  }
  function TM(t) {
    var e = t.axis.model,
      n = {},
      t = (n.axisDim = t.axis.dim);
    return (
      (n.axisIndex = n[t + "AxisIndex"] = e.componentIndex),
      (n.axisName = n[t + "AxisName"] = e.name),
      (n.axisId = n[t + "AxisId"] = e.id),
      n
    );
  }
  function CM(t) {
    return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1]);
  }
  function IM(t) {
    Zb.registerAxisPointerClass("CartesianAxisPointer", nM),
      t.registerComponentModel(lM),
      t.registerComponentView(mM),
      t.registerPreprocessor(function (t) {
        var e;
        t &&
          ((t.axisPointer && 0 !== t.axisPointer.length) ||
            (t.axisPointer = {}),
          (e = t.axisPointer.link)) &&
          !V(e) &&
          (t.axisPointer.link = [e]);
      }),
      t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC, function (t, e) {
        t.getComponent("axisPointer").coordSysAxesInfo = Hb(t, e);
      }),
      t.registerAction(
        {
          type: "updateAxisPointer",
          event: "updateAxisPointer",
          update: ":updateAxisPointer",
        },
        wM
      );
  }
  u(AM, (DM = g)),
    (AM.type = "tooltip"),
    (AM.dependencies = ["axisPointer"]),
    (AM.defaultOption = {
      z: 60,
      show: !0,
      showContent: !0,
      trigger: "item",
      triggerOn: "mousemove|click",
      alwaysShowContent: !1,
      displayMode: "single",
      renderMode: "auto",
      confine: null,
      showDelay: 0,
      hideDelay: 100,
      transitionDuration: 0.4,
      enterable: !1,
      backgroundColor: "#fff",
      shadowBlur: 10,
      shadowColor: "rgba(0, 0, 0, .2)",
      shadowOffsetX: 1,
      shadowOffsetY: 2,
      borderRadius: 4,
      borderWidth: 1,
      padding: null,
      extraCssText: "",
      axisPointer: {
        type: "line",
        axis: "auto",
        animation: "auto",
        animationDurationUpdate: 200,
        animationEasingUpdate: "exponentialOut",
        crossStyle: { color: "#999", width: 1, type: "dashed", textStyle: {} },
      },
      textStyle: { color: "#666", fontSize: 14 },
    });
  var DM,
    kM = AM;
  function AM() {
    var t = (null !== DM && DM.apply(this, arguments)) || this;
    return (t.type = AM.type), t;
  }
  function PM(t) {
    var e = t.get("confine");
    return null != e ? e : "richText" === t.get("renderMode");
  }
  function LM(t) {
    if (b.domSupported)
      for (
        var e = document.documentElement.style, n = 0, i = t.length;
        n < i;
        n++
      )
        if (t[n] in e) return t[n];
  }
  var OM = LM([
    "transform",
    "webkitTransform",
    "OTransform",
    "MozTransform",
    "msTransform",
  ]);
  function RM(t, e) {
    if (!t) return e;
    e = vp(e, !0);
    var n = t.indexOf(e);
    return (t = -1 === n ? e : "-" + t.slice(0, n) + "-" + e).toLowerCase();
  }
  var NM = RM(
      LM([
        "webkitTransition",
        "transition",
        "OTransition",
        "MozTransition",
        "msTransition",
      ]),
      "transition"
    ),
    EM = RM(OM, "transform"),
    zM =
      "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;" +
      (b.transform3dSupported ? "will-change:transform;" : "");
  function BM(t, e, n) {
    var i,
      t = t.toFixed(0) + "px",
      e = e.toFixed(0) + "px";
    return b.transformSupported
      ? ((i =
          "translate" +
          ((i = b.transform3dSupported) ? "3d" : "") +
          "(" +
          t +
          "," +
          e +
          (i ? ",0" : "") +
          ")"),
        n
          ? "top:0;left:0;" + EM + ":" + i + ";"
          : [
              ["top", 0],
              ["left", 0],
              [OM, i],
            ])
      : n
      ? "top:" + e + ";left:" + t + ";"
      : [
          ["top", e],
          ["left", t],
        ];
  }
  function FM(i, t, e) {
    var n,
      r,
      o = [],
      a = i.get("transitionDuration"),
      s = i.get("backgroundColor"),
      l = i.get("shadowBlur"),
      u = i.get("shadowColor"),
      h = i.get("shadowOffsetX"),
      c = i.get("shadowOffsetY"),
      p = i.getModel("textStyle"),
      d = Dg(i, "html");
    return (
      o.push("box-shadow:" + (h + "px " + c + "px " + l + "px " + u)),
      t &&
        a &&
        o.push(
          ((u =
            "opacity" +
            (l =
              " " + (h = a) / 2 + "s " + (c = "cubic-bezier(0.23,1,0.32,1)")) +
            ",visibility" +
            l),
          e ||
            ((l = " " + h + "s " + c),
            (u += b.transformSupported
              ? "," + EM + l
              : ",left" + l + ",top" + l)),
          NM + ":" + u)
        ),
      s && o.push("background-color:" + s),
      E(["width", "color", "radius"], function (t) {
        var e = "border-" + t,
          n = vp(e),
          n = i.get(n);
        null != n && o.push(e + ":" + n + ("color" === t ? "" : "px"));
      }),
      o.push(
        ((r = []),
        (t = (n = p).get("fontSize")),
        (a = n.getTextColor()) && r.push("color:" + a),
        r.push("font:" + n.getFont()),
        t && r.push("line-height:" + Math.round((3 * t) / 2) + "px"),
        (a = n.get("textShadowColor")),
        (t = n.get("textShadowBlur") || 0),
        (e = n.get("textShadowOffsetX") || 0),
        (h = n.get("textShadowOffsetY") || 0),
        a &&
          t &&
          r.push("text-shadow:" + e + "px " + h + "px " + t + "px " + a),
        E(["decoration", "align"], function (t) {
          var e = n.get(t);
          e && r.push("text-" + t + ":" + e);
        }),
        r.join(";"))
      ),
      null != d && o.push("padding:" + _p(d).join("px ") + "px"),
      o.join(";") + ";"
    );
  }
  function VM(t, e, n, i, r) {
    var o,
      a,
      s = e && e.painter;
    n
      ? (n = s && s.getViewportRoot()) &&
        ((o = t), (a = document.body), ge(fe, n, i, r, !0)) &&
        ge(o, a, fe[0], fe[1])
      : ((t[0] = i),
        (t[1] = r),
        (n = s && s.getViewportRootOffset()) &&
          ((t[0] += n.offsetLeft), (t[1] += n.offsetTop))),
      (t[2] = t[0] / e.getWidth()),
      (t[3] = t[1] / e.getHeight());
  }
  (GM.prototype.update = function (t) {
    var e = this._container,
      n =
        ((n = "position"),
        (i =
          (i = e).currentStyle ||
          (document.defaultView && document.defaultView.getComputedStyle(i)))
          ? n
            ? i[n]
            : i
          : null),
      i = e.style,
      e =
        ("absolute" !== i.position &&
          "absolute" !== n &&
          (i.position = "relative"),
        t.get("alwaysShowContent"));
    e && this._moveIfResized(),
      (this._alwaysShowContent = e),
      (this.el.className = t.get("className") || "");
  }),
    (GM.prototype.show = function (t, e) {
      clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
      var n = this.el,
        i = n.style,
        r = this._styleCoord;
      n.innerHTML
        ? (i.cssText =
            zM +
            FM(t, !this._firstShow, this._longHide) +
            BM(r[0], r[1], !0) +
            "border-color:" +
            Tp(e) +
            ";" +
            (t.get("extraCssText") || "") +
            ";pointer-events:" +
            (this._enterable ? "auto" : "none"))
        : (i.display = "none"),
        (this._show = !0),
        (this._firstShow = !1),
        (this._longHide = !1);
    }),
    (GM.prototype.setContent = function (t, e, n, i, r) {
      var o,
        a,
        s,
        l,
        u,
        h = this.el;
      if (null != t) {
        var c = "";
        if (
          (H(r) &&
            "item" === n.get("trigger") &&
            !PM(n) &&
            ((n = n),
            (i = i),
            (c =
              H((r = r)) && "inside" !== r
                ? ((o = n.get("backgroundColor")),
                  (n = n.get("borderWidth")),
                  (i = Tp(i)),
                  (r =
                    "left" === (r = r)
                      ? "right"
                      : "right" === r
                      ? "left"
                      : "top" === r
                      ? "bottom"
                      : "top"),
                  (p = Math.max(1.5 * Math.round(n), 6)),
                  (a = ""),
                  (s = EM + ":"),
                  -1 < I(["left", "right"], r)
                    ? ((a += "top:50%"),
                      (s +=
                        "translateY(-50%) rotate(" +
                        (u = "left" == r ? -225 : -45) +
                        "deg)"))
                    : ((a += "left:50%"),
                      (s +=
                        "translateX(-50%) rotate(" +
                        (u = "top" == r ? 225 : 45) +
                        "deg)")),
                  (u = (u * Math.PI) / 180),
                  (u =
                    (l = p + n) * Math.abs(Math.cos(u)) +
                    l * Math.abs(Math.sin(u))),
                  (i = i + " solid " + n + "px;"),
                  '<div style="' +
                    [
                      "position:absolute;width:" +
                        p +
                        "px;height:" +
                        p +
                        "px;z-index:-1;",
                      (a +=
                        ";" +
                        r +
                        ":-" +
                        Math.round(
                          100 *
                            ((u - Math.SQRT2 * n) / 2 +
                              Math.SQRT2 * n -
                              (u - l) / 2)
                        ) /
                          100 +
                        "px") +
                        ";" +
                        s +
                        ";",
                      "border-bottom:" + i,
                      "border-right:" + i,
                      "background-color:" + o + ";",
                    ].join("") +
                    '"></div>')
                : "")),
          H(t))
        )
          h.innerHTML = t + c;
        else if (t) {
          (h.innerHTML = ""), V(t) || (t = [t]);
          for (var p, d = 0; d < t.length; d++)
            yt(t[d]) && t[d].parentNode !== h && h.appendChild(t[d]);
          c &&
            h.childNodes.length &&
            (((p = document.createElement("div")).innerHTML = c),
            h.appendChild(p));
        }
      } else h.innerHTML = "";
    }),
    (GM.prototype.setEnterable = function (t) {
      this._enterable = t;
    }),
    (GM.prototype.getSize = function () {
      var t = this.el;
      return [t.offsetWidth, t.offsetHeight];
    }),
    (GM.prototype.moveTo = function (t, e) {
      var n,
        i = this._styleCoord;
      VM(i, this._zr, this._appendToBody, t, e),
        null != i[0] &&
          null != i[1] &&
          ((n = this.el.style),
          E(BM(i[0], i[1]), function (t) {
            n[t[0]] = t[1];
          }));
    }),
    (GM.prototype._moveIfResized = function () {
      var t = this._styleCoord[2],
        e = this._styleCoord[3];
      this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight());
    }),
    (GM.prototype.hide = function () {
      var t = this,
        e = this.el.style;
      (e.visibility = "hidden"),
        (e.opacity = "0"),
        b.transform3dSupported && (e.willChange = ""),
        (this._show = !1),
        (this._longHideTimeout = setTimeout(function () {
          return (t._longHide = !0);
        }, 500));
    }),
    (GM.prototype.hideLater = function (t) {
      !this._show ||
        (this._inContent && this._enterable) ||
        this._alwaysShowContent ||
        (t
          ? ((this._hideDelay = t),
            (this._show = !1),
            (this._hideTimeout = setTimeout(ct(this.hide, this), t)))
          : this.hide());
    }),
    (GM.prototype.isShow = function () {
      return this._show;
    }),
    (GM.prototype.dispose = function () {
      this.el.parentNode.removeChild(this.el);
    });
  var HM = GM;
  function GM(t, e, n) {
    if (
      ((this._show = !1),
      (this._styleCoord = [0, 0, 0, 0]),
      (this._enterable = !0),
      (this._alwaysShowContent = !1),
      (this._firstShow = !0),
      (this._longHide = !0),
      b.wxa)
    )
      return null;
    var i = document.createElement("div"),
      r = ((i.domBelongToZr = !0), (this.el = i), (this._zr = e.getZr())),
      n = (this._appendToBody = n && n.appendToBody),
      o =
        (VM(this._styleCoord, r, n, e.getWidth() / 2, e.getHeight() / 2),
        (n ? document.body : t).appendChild(i),
        (this._container = t),
        this);
    (i.onmouseenter = function () {
      o._enterable && (clearTimeout(o._hideTimeout), (o._show = !0)),
        (o._inContent = !0);
    }),
      (i.onmousemove = function (t) {
        var e;
        (t = t || window.event),
          o._enterable ||
            ((e = r.handler),
            Ce(r.painter.getViewportRoot(), t, !0),
            e.dispatch("mousemove", t));
      }),
      (i.onmouseleave = function () {
        (o._inContent = !1),
          o._enterable && o._show && o.hideLater(o._hideDelay);
      });
  }
  (UM.prototype.update = function (t) {
    t = t.get("alwaysShowContent");
    t && this._moveIfResized(), (this._alwaysShowContent = t);
  }),
    (UM.prototype.show = function () {
      this._hideTimeout && clearTimeout(this._hideTimeout),
        this.el.show(),
        (this._show = !0);
    }),
    (UM.prototype.setContent = function (t, e, n, i, r) {
      var o = this,
        a =
          (O(t) && f(""),
          this.el && this._zr.remove(this.el),
          n.getModel("textStyle")),
        s =
          ((this.el = new Ls({
            style: {
              rich: e.richTextStyles,
              text: t,
              lineHeight: 22,
              borderWidth: 1,
              borderColor: i,
              textShadowColor: a.get("textShadowColor"),
              fill: n.get(["textStyle", "color"]),
              padding: Dg(n, "richText"),
              verticalAlign: "top",
              align: "left",
            },
            z: n.get("z"),
          })),
          E(
            [
              "backgroundColor",
              "borderRadius",
              "shadowColor",
              "shadowBlur",
              "shadowOffsetX",
              "shadowOffsetY",
            ],
            function (t) {
              o.el.style[t] = n.get(t);
            }
          ),
          E(
            ["textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"],
            function (t) {
              o.el.style[t] = a.get(t) || 0;
            }
          ),
          this._zr.add(this.el),
          this);
      this.el.on("mouseover", function () {
        s._enterable && (clearTimeout(s._hideTimeout), (s._show = !0)),
          (s._inContent = !0);
      }),
        this.el.on("mouseout", function () {
          s._enterable && s._show && s.hideLater(s._hideDelay),
            (s._inContent = !1);
        });
    }),
    (UM.prototype.setEnterable = function (t) {
      this._enterable = t;
    }),
    (UM.prototype.getSize = function () {
      var t = this.el,
        e = this.el.getBoundingRect(),
        t = YM(t.style);
      return [e.width + t.left + t.right, e.height + t.top + t.bottom];
    }),
    (UM.prototype.moveTo = function (t, e) {
      var n,
        i,
        r = this.el;
      r &&
        (qM((i = this._styleCoord), this._zr, t, e),
        (t = i[0]),
        (e = i[1]),
        (n = XM((i = r.style).borderWidth || 0)),
        (i = YM(i)),
        (r.x = t + n + i.left),
        (r.y = e + n + i.top),
        r.markRedraw());
    }),
    (UM.prototype._moveIfResized = function () {
      var t = this._styleCoord[2],
        e = this._styleCoord[3];
      this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight());
    }),
    (UM.prototype.hide = function () {
      this.el && this.el.hide(), (this._show = !1);
    }),
    (UM.prototype.hideLater = function (t) {
      !this._show ||
        (this._inContent && this._enterable) ||
        this._alwaysShowContent ||
        (t
          ? ((this._hideDelay = t),
            (this._show = !1),
            (this._hideTimeout = setTimeout(ct(this.hide, this), t)))
          : this.hide());
    }),
    (UM.prototype.isShow = function () {
      return this._show;
    }),
    (UM.prototype.dispose = function () {
      this._zr.remove(this.el);
    });
  var WM = UM;
  function UM(t) {
    (this._show = !1),
      (this._styleCoord = [0, 0, 0, 0]),
      (this._alwaysShowContent = !1),
      (this._enterable = !0),
      (this._zr = t.getZr()),
      qM(this._styleCoord, this._zr, t.getWidth() / 2, t.getHeight() / 2);
  }
  function XM(t) {
    return Math.max(0, t);
  }
  function YM(t) {
    var e = XM(t.shadowBlur || 0),
      n = XM(t.shadowOffsetX || 0),
      t = XM(t.shadowOffsetY || 0);
    return {
      left: XM(e - n),
      right: XM(e + n),
      top: XM(e - t),
      bottom: XM(e + t),
    };
  }
  function qM(t, e, n, i) {
    (t[0] = n),
      (t[1] = i),
      (t[2] = t[0] / e.getWidth()),
      (t[3] = t[1] / e.getHeight());
  }
  var ZM,
    jM = new Is({ shape: { x: -1, y: -1, width: 2, height: 2 } }),
    KM =
      (u($M, (ZM = Wg)),
      ($M.prototype.init = function (t, e) {
        var n;
        !b.node &&
          e.getDom() &&
          ((t = t.getComponent("tooltip")),
          (n = this._renderMode =
            "auto" === (n = t.get("renderMode"))
              ? b.domSupported
                ? "html"
                : "richText"
              : n || "html"),
          (this._tooltipContent =
            "richText" === n
              ? new WM(e)
              : new HM(e.getDom(), e, {
                  appendToBody: t.get("appendToBody", !0),
                })));
      }),
      ($M.prototype.render = function (t, e, n) {
        !b.node &&
          n.getDom() &&
          (this.group.removeAll(),
          (this._tooltipModel = t),
          (this._ecModel = e),
          (this._api = n),
          (e = this._tooltipContent).update(t),
          e.setEnterable(t.get("enterable")),
          this._initGlobalListener(),
          this._keepShow(),
          "richText" !== this._renderMode && t.get("transitionDuration")
            ? oy(this, "_updatePosition", 50, "fixRate")
            : ay(this, "_updatePosition"));
      }),
      ($M.prototype._initGlobalListener = function () {
        var i = this._tooltipModel.get("triggerOn");
        pM(
          "itemTooltip",
          this._api,
          ct(function (t, e, n) {
            "none" !== i &&
              (0 <= i.indexOf(t)
                ? this._tryShow(e, n)
                : "leave" === t && this._hide(n));
          }, this)
        );
      }),
      ($M.prototype._keepShow = function () {
        var t,
          e = this._tooltipModel,
          n = this._ecModel,
          i = this._api,
          r = e.get("triggerOn");
        null != this._lastX &&
          null != this._lastY &&
          "none" !== r &&
          "click" !== r &&
          ((t = this),
          clearTimeout(this._refreshUpdateTimeout),
          (this._refreshUpdateTimeout = setTimeout(function () {
            i.isDisposed() ||
              t.manuallyShowTip(e, n, i, {
                x: t._lastX,
                y: t._lastY,
                dataByCoordSys: t._lastDataByCoordSys,
              });
          })));
      }),
      ($M.prototype.manuallyShowTip = function (t, e, n, i) {
        var r, o, a, s;
        i.from !== this.uid &&
          !b.node &&
          n.getDom() &&
          ((r = JM(i, n)),
          (this._ticket = ""),
          (s = i.dataByCoordSys),
          (o = (function (n, t, e) {
            var i = Lo(n).queryOptionMap,
              r = i.keys()[0];
            if (r && "series" !== r) {
              var o,
                t = Ro(t, r, i.get(r), {
                  useDefault: !1,
                  enableAll: !1,
                  enableNone: !1,
                }).models[0];
              if (t)
                return (
                  e.getViewOfComponentModel(t).group.traverse(function (t) {
                    var e = D(t).tooltipConfig;
                    if (e && e.name === n.name) return (o = t), !0;
                  }),
                  o
                    ? {
                        componentMainType: r,
                        componentIndex: t.componentIndex,
                        el: o,
                      }
                    : void 0
                );
            }
          })(i, e, n))
            ? ((a = o.el.getBoundingRect().clone()).applyTransform(
                o.el.transform
              ),
              this._tryShow(
                {
                  offsetX: a.x + a.width / 2,
                  offsetY: a.y + a.height / 2,
                  target: o.el,
                  position: i.position,
                  positionDefault: "bottom",
                },
                r
              ))
            : i.tooltip && null != i.x && null != i.y
            ? (((a = jM).x = i.x),
              (a.y = i.y),
              a.update(),
              (D(a).tooltipConfig = { name: null, option: i.tooltip }),
              this._tryShow({ offsetX: i.x, offsetY: i.y, target: a }, r))
            : s
            ? this._tryShow(
                {
                  offsetX: i.x,
                  offsetY: i.y,
                  position: i.position,
                  dataByCoordSys: s,
                  tooltipOption: i.tooltipOption,
                },
                r
              )
            : null != i.seriesIndex
            ? this._manuallyAxisShowTip(t, e, n, i) ||
              ((a = (o = _M(i, e)).point[0]),
              (s = o.point[1]),
              null != a &&
                null != s &&
                this._tryShow(
                  {
                    offsetX: a,
                    offsetY: s,
                    target: o.el,
                    position: i.position,
                    positionDefault: "bottom",
                  },
                  r
                ))
            : null != i.x &&
              null != i.y &&
              (n.dispatchAction({ type: "updateAxisPointer", x: i.x, y: i.y }),
              this._tryShow(
                {
                  offsetX: i.x,
                  offsetY: i.y,
                  position: i.position,
                  target: n.getZr().findHover(i.x, i.y).target,
                },
                r
              )));
      }),
      ($M.prototype.manuallyHideTip = function (t, e, n, i) {
        var r = this._tooltipContent;
        this._tooltipModel && r.hideLater(this._tooltipModel.get("hideDelay")),
          (this._lastX = this._lastY = this._lastDataByCoordSys = null),
          i.from !== this.uid && this._hide(JM(i, n));
      }),
      ($M.prototype._manuallyAxisShowTip = function (t, e, n, i) {
        var r = i.seriesIndex,
          o = i.dataIndex,
          a = e.getComponent("axisPointer").coordSysAxesInfo;
        if (null != r && null != o && null != a) {
          a = e.getSeriesByIndex(r);
          if (
            a &&
            "axis" ===
              QM(
                [
                  a.getData().getItemModel(o),
                  a,
                  (a.coordinateSystem || {}).model,
                ],
                this._tooltipModel
              ).get("trigger")
          )
            return (
              n.dispatchAction({
                type: "updateAxisPointer",
                seriesIndex: r,
                dataIndex: o,
                position: i.position,
              }),
              !0
            );
        }
      }),
      ($M.prototype._tryShow = function (t, e) {
        var n,
          i,
          r,
          o = t.target;
        this._tooltipModel &&
          ((this._lastX = t.offsetX),
          (this._lastY = t.offsetY),
          (n = t.dataByCoordSys) && n.length
            ? this._showAxisTooltip(n, t)
            : o
            ? (zy(
                o,
                function (t) {
                  return null != D(t).dataIndex
                    ? ((i = t), 1)
                    : null != D(t).tooltipConfig && ((r = t), 1);
                },
                !(this._lastDataByCoordSys = null)
              ),
              i
                ? this._showSeriesItemTooltip(t, i, e)
                : r
                ? this._showComponentItemTooltip(t, r, e)
                : this._hide(e))
            : ((this._lastDataByCoordSys = null), this._hide(e)));
      }),
      ($M.prototype._showOrMove = function (t, e) {
        t = t.get("showDelay");
        (e = ct(e, this)),
          clearTimeout(this._showTimout),
          0 < t ? (this._showTimout = setTimeout(e, t)) : e();
      }),
      ($M.prototype._showAxisTooltip = function (t, e) {
        var u = this._ecModel,
          h = this._tooltipModel,
          n = [e.offsetX, e.offsetY],
          i = QM([e.tooltipOption], h),
          c = this._renderMode,
          p = [],
          d = xg("section", { blocks: [], noHeader: !0 }),
          f = [],
          g = new kg(),
          r =
            (E(t, function (t) {
              E(t.dataByAxis, function (r) {
                var o,
                  a,
                  s = u.getComponent(r.axisDim + "Axis", r.axisIndex),
                  l = r.value;
                s &&
                  null != l &&
                  ((o = JS(l, s.axis, u, r.seriesDataIndices, r.valueLabelOpt)),
                  (a = xg("section", {
                    header: o,
                    noHeader: !Ct(o),
                    sortBlocks: !0,
                    blocks: [],
                  })),
                  d.blocks.push(a),
                  E(r.seriesDataIndices, function (t) {
                    var e,
                      n = u.getSeriesByIndex(t.seriesIndex),
                      t = t.dataIndexInside,
                      i = n.getDataParams(t);
                    i.dataIndex < 0 ||
                      ((i.axisDim = r.axisDim),
                      (i.axisIndex = r.axisIndex),
                      (i.axisType = r.axisType),
                      (i.axisId = r.axisId),
                      (i.axisValue = D_(s.axis, { value: l })),
                      (i.axisValueLabel = o),
                      (i.marker = g.makeTooltipMarker("item", Tp(i.color), c)),
                      (e = (t = Sf(n.formatTooltip(t, !0, null))).frag) &&
                        ((n = QM([n], h).get("valueFormatter")),
                        a.blocks.push(n ? L({ valueFormatter: n }, e) : e)),
                      t.text && f.push(t.text),
                      p.push(i));
                  }));
              });
            }),
            d.blocks.reverse(),
            f.reverse(),
            e.position),
          e = i.get("order"),
          e = Tg(d, g, c, e, u.get("useUTC"), i.get("textStyle")),
          e = (e && f.unshift(e), "richText" === c ? "\n\n" : "<br/>"),
          o = f.join(e);
        this._showOrMove(i, function () {
          this._updateContentNotChangedOnAxis(t, p)
            ? this._updatePosition(i, r, n[0], n[1], this._tooltipContent, p)
            : this._showTooltipContent(
                i,
                o,
                p,
                Math.random() + "",
                n[0],
                n[1],
                r,
                null,
                g
              );
        });
      }),
      ($M.prototype._showSeriesItemTooltip = function (t, e, n) {
        var i,
          r,
          o,
          a,
          s,
          l = this._ecModel,
          e = D(e),
          u = e.seriesIndex,
          h = l.getSeriesByIndex(u),
          c = e.dataModel || h,
          p = e.dataIndex,
          e = e.dataType,
          d = c.getData(e),
          f = this._renderMode,
          g = t.positionDefault,
          y = QM(
            [d.getItemModel(p), c, h && (h.coordinateSystem || {}).model],
            this._tooltipModel,
            g ? { position: g } : null
          ),
          h = y.get("trigger");
        (null != h && "item" !== h) ||
          ((i = c.getDataParams(p, e)),
          (r = new kg()),
          (i.marker = r.makeTooltipMarker("item", Tp(i.color), f)),
          (g = Sf(c.formatTooltip(p, !1, e))),
          (h = y.get("order")),
          (e = y.get("valueFormatter")),
          (o = g.frag),
          (a = o
            ? Tg(
                e ? L({ valueFormatter: e }, o) : o,
                r,
                f,
                h,
                l.get("useUTC"),
                y.get("textStyle")
              )
            : g.text),
          (s = "item_" + c.name + "_" + p),
          this._showOrMove(y, function () {
            this._showTooltipContent(
              y,
              a,
              i,
              s,
              t.offsetX,
              t.offsetY,
              t.position,
              t.target,
              r
            );
          }),
          n({
            type: "showTip",
            dataIndexInside: p,
            dataIndex: d.getRawIndex(p),
            seriesIndex: u,
            from: this.uid,
          }));
      }),
      ($M.prototype._showComponentItemTooltip = function (e, n, t) {
        var i = D(n),
          r = i.tooltipConfig.option || {},
          o = [(r = H(r) ? { content: r, formatter: r } : r)],
          i = this._ecModel.getComponent(i.componentMainType, i.componentIndex),
          i =
            (i && o.push(i),
            o.push({ formatter: r.content }),
            e.positionDefault),
          a = QM(o, this._tooltipModel, i ? { position: i } : null),
          s = a.get("content"),
          l = Math.random() + "",
          u = new kg();
        this._showOrMove(a, function () {
          var t = y(a.get("formatterParams") || {});
          this._showTooltipContent(
            a,
            s,
            t,
            l,
            e.offsetX,
            e.offsetY,
            e.position,
            n,
            u
          );
        }),
          t({ type: "showTip", from: this.uid });
      }),
      ($M.prototype._showTooltipContent = function (n, t, i, e, r, o, a, s, l) {
        var u, h, c, p, d;
        (this._ticket = ""),
          n.get("showContent") &&
            n.get("show") &&
            ((u = this._tooltipContent).setEnterable(n.get("enterable")),
            (h = n.get("formatter")),
            (a = a || n.get("position")),
            (t = t),
            (c = this._getNearestPoint(
              [r, o],
              i,
              n.get("trigger"),
              n.get("borderColor")
            ).color),
            h &&
              (t = H(h)
                ? ((p = n.ecModel.get("useUTC")),
                  (t = h),
                  Sp(
                    (t =
                      (d = V(i) ? i[0] : i) &&
                      d.axisType &&
                      0 <= d.axisType.indexOf("time")
                        ? ep(d.axisValue, t, p)
                        : t),
                    i,
                    !0
                  ))
                : S(h)
                ? ((d = ct(function (t, e) {
                    t === this._ticket &&
                      (u.setContent(e, l, n, c, a),
                      this._updatePosition(n, a, r, o, u, i, s));
                  }, this)),
                  (this._ticket = e),
                  h(i, e, d))
                : h),
            u.setContent(t, l, n, c, a),
            u.show(n, c),
            this._updatePosition(n, a, r, o, u, i, s));
      }),
      ($M.prototype._getNearestPoint = function (t, e, n, i) {
        return "axis" === n || V(e)
          ? { color: i || ("html" === this._renderMode ? "#fff" : "none") }
          : V(e)
          ? void 0
          : { color: i || e.color || e.borderColor };
      }),
      ($M.prototype._updatePosition = function (t, e, n, i, r, o, a) {
        var s,
          l,
          u,
          h,
          c = this._api.getWidth(),
          p = this._api.getHeight(),
          d = ((e = e || t.get("position")), r.getSize()),
          f = t.get("align"),
          g = t.get("verticalAlign"),
          y = a && a.getBoundingRect().clone();
        a && y.applyTransform(a.transform),
          V(
            (e = S(e)
              ? e([n, i], o, r.el, y, {
                  viewSize: [c, p],
                  contentSize: d.slice(),
                })
              : e)
          )
            ? ((n = Kr(e[0], c)), (i = Kr(e[1], p)))
            : O(e)
            ? (((o = e).width = d[0]),
              (o.height = d[1]),
              (n = (o = Lp(o, { width: c, height: p })).x),
              (i = o.y),
              (g = f = null))
            : (i =
                ((n = (s =
                  H(e) && a
                    ? (function (t, e, n, i) {
                        var r = n[0],
                          o = n[1],
                          a = Math.ceil(Math.SQRT2 * i) + 8,
                          s = 0,
                          l = 0,
                          u = e.width,
                          h = e.height;
                        switch (t) {
                          case "inside":
                            (s = e.x + u / 2 - r / 2),
                              (l = e.y + h / 2 - o / 2);
                            break;
                          case "top":
                            (s = e.x + u / 2 - r / 2), (l = e.y - o - a);
                            break;
                          case "bottom":
                            (s = e.x + u / 2 - r / 2), (l = e.y + h + a);
                            break;
                          case "left":
                            (s = e.x - r - a), (l = e.y + h / 2 - o / 2);
                            break;
                          case "right":
                            (s = e.x + u + a), (l = e.y + h / 2 - o / 2);
                        }
                        return [s, l];
                      })(e, y, d, t.get("borderWidth"))
                    : ((o = n),
                      (a = i),
                      (e = c),
                      (y = p),
                      (l = f ? null : 20),
                      (u = g ? null : 20),
                      (h = (h = r).getSize()),
                      (s = h[0]),
                      (h = h[1]),
                      null != l &&
                        (e < o + s + l + 2 ? (o -= s + l) : (o += l)),
                      null != u && (y < a + h + u ? (a -= h + u) : (a += u)),
                      [o, a]))[0]),
                s[1])),
          f && (n -= tT(f) ? d[0] / 2 : "right" === f ? d[0] : 0),
          g && (i -= tT(g) ? d[1] / 2 : "bottom" === g ? d[1] : 0),
          PM(t) &&
            ((e = n),
            (l = i),
            (y = c),
            (h = p),
            (u = (u = r).getSize()),
            (o = u[0]),
            (u = u[1]),
            (e = Math.min(e + o, y) - o),
            (l = Math.min(l + u, h) - u),
            (n = (s = [(e = Math.max(e, 0)), (l = Math.max(l, 0))])[0]),
            (i = s[1])),
          r.moveTo(n, i);
      }),
      ($M.prototype._updateContentNotChangedOnAxis = function (n, o) {
        var t = this._lastDataByCoordSys,
          a = this._cbParamsList,
          s = !!t && t.length === n.length;
        return (
          s &&
            E(t, function (t, e) {
              var t = t.dataByAxis || [],
                r = (n[e] || {}).dataByAxis || [];
              (s = s && t.length === r.length) &&
                E(t, function (t, e) {
                  var e = r[e] || {},
                    n = t.seriesDataIndices || [],
                    i = e.seriesDataIndices || [];
                  (s =
                    s &&
                    t.value === e.value &&
                    t.axisType === e.axisType &&
                    t.axisId === e.axisId &&
                    n.length === i.length) &&
                    E(n, function (t, e) {
                      e = i[e];
                      s =
                        s &&
                        t.seriesIndex === e.seriesIndex &&
                        t.dataIndex === e.dataIndex;
                    }),
                    a &&
                      E(t.seriesDataIndices, function (t) {
                        var t = t.seriesIndex,
                          e = o[t],
                          t = a[t];
                        e && t && t.data !== e.data && (s = !1);
                      });
                });
            }),
          (this._lastDataByCoordSys = n),
          (this._cbParamsList = o),
          !!s
        );
      }),
      ($M.prototype._hide = function (t) {
        (this._lastDataByCoordSys = null),
          t({ type: "hideTip", from: this.uid });
      }),
      ($M.prototype.dispose = function (t, e) {
        !b.node &&
          e.getDom() &&
          (ay(this, "_updatePosition"),
          this._tooltipContent.dispose(),
          gM("itemTooltip", e));
      }),
      ($M.type = "tooltip"),
      $M);
  function $M() {
    var t = (null !== ZM && ZM.apply(this, arguments)) || this;
    return (t.type = $M.type), t;
  }
  function QM(t, e, n) {
    for (
      var i = e.ecModel,
        r = n ? ((r = new Lc(n, i, i)), new Lc(e.option, r, i)) : e,
        o = t.length - 1;
      0 <= o;
      o--
    ) {
      var a = t[o];
      a &&
        (a = H((a = a instanceof Lc ? a.get("tooltip", !0) : a))
          ? { formatter: a }
          : a) &&
        (r = new Lc(a, r, i));
    }
    return r;
  }
  function JM(t, e) {
    return t.dispatchAction || ct(e.dispatchAction, e);
  }
  function tT(t) {
    return "center" === t || "middle" === t;
  }
  E_(function (t) {
    E_(IM),
      t.registerComponentModel(kM),
      t.registerComponentView(KM),
      t.registerAction(
        {
          type: "showTip",
          event: "showTip",
          update: "tooltip:manuallyShowTip",
        },
        Ft
      ),
      t.registerAction(
        {
          type: "hideTip",
          event: "hideTip",
          update: "tooltip:manuallyHideTip",
        },
        Ft
      );
  }),
    E_(ox);
  var eT = {
      value: "eq",
      "<": "lt",
      "<=": "lte",
      ">": "gt",
      ">=": "gte",
      "=": "eq",
      "!=": "ne",
      "<>": "ne",
    },
    nT =
      ((dT.prototype.evaluate = function (t) {
        var e = typeof t;
        return H(e)
          ? this._condVal.test(t)
          : !!G(e) && this._condVal.test(t + "");
      }),
      dT),
    iT =
      ((pT.prototype.evaluate = function () {
        return this.value;
      }),
      pT),
    rT =
      ((cT.prototype.evaluate = function () {
        for (var t = this.children, e = 0; e < t.length; e++)
          if (!t[e].evaluate()) return !1;
        return !0;
      }),
      cT),
    oT =
      ((hT.prototype.evaluate = function () {
        for (var t = this.children, e = 0; e < t.length; e++)
          if (t[e].evaluate()) return !0;
        return !1;
      }),
      hT),
    aT =
      ((uT.prototype.evaluate = function () {
        return !this.child.evaluate();
      }),
      uT),
    sT =
      ((lT.prototype.evaluate = function () {
        for (
          var t = !!this.valueParser,
            e = (0, this.getValue)(this.valueGetterParam),
            n = t ? this.valueParser(e) : null,
            i = 0;
          i < this.subCondList.length;
          i++
        )
          if (!this.subCondList[i].evaluate(t ? n : e)) return !1;
        return !0;
      }),
      lT);
  function lT() {}
  function uT() {}
  function hT() {}
  function cT() {}
  function pT() {}
  function dT(t) {
    null == (this._condVal = H(t) ? new RegExp(t) : _t(t) ? t : null) && f("");
  }
  function fT(t, e) {
    var n;
    if (!0 === t || !1 === t) return ((n = new iT()).value = t), n;
    {
      if ((yT(t) || f(""), t.and)) return gT("and", t, e);
      if (t.or) return gT("or", t, e);
      if (t.not)
        (n = e),
          yT((o = (o = t).not)) || f(""),
          ((l = new aT()).child = fT(o, n)),
          l.child || f("");
      else {
        for (
          var i = t,
            r = e,
            o = r.prepareGetValue(i),
            a = [],
            s = ht(i),
            l = i.parser,
            u = l ? Bf(l) : null,
            h = 0;
          h < s.length;
          h++
        ) {
          var c,
            p = s[h];
          "parser" === p ||
            r.valueGetterAttrMap.get(p) ||
            ((c = Bt(eT, p) ? eT[p] : p),
            (p = i[p]),
            (p = u ? u(p) : p),
            (c =
              (function (t, e) {
                return "eq" === t || "ne" === t
                  ? new Uf("eq" === t, e)
                  : Bt(Ff, t)
                  ? new Vf(t, e)
                  : null;
              })(c, p) ||
              ("reg" === c && new nT(p))) || f(""),
            a.push(c));
        }
        a.length || f(""),
          ((l = new sT()).valueGetterParam = o),
          (l.valueParser = u),
          (l.getValue = r.getValue),
          (l.subCondList = a);
      }
      return l;
    }
  }
  function gT(t, e, n) {
    (e = e[t]),
      V(e) || f(""),
      e.length || f(""),
      (t = new ("and" === t ? rT : oT)());
    return (
      (t.children = F(e, function (t) {
        return fT(t, n);
      })),
      t.children.length || f(""),
      t
    );
  }
  function yT(t) {
    return O(t) && !st(t);
  }
  vT.prototype.evaluate = function () {
    return this._cond.evaluate();
  };
  var mT = vT;
  function vT(t, e) {
    this._cond = fT(t, e);
  }
  var _T = {
      type: "echarts:filter",
      transform: function (t) {
        for (
          var e,
            n,
            i = t.upstream,
            r =
              ((t = t.config),
              (n = {
                valueGetterAttrMap: N({ dimension: !0 }),
                prepareGetValue: function (t) {
                  var e = t.dimension,
                    t = (Bt(t, "dimension") || f(""), i.getDimensionInfo(e));
                  return t || f(""), { dimIdx: t.index };
                },
                getValue: function (t) {
                  return i.retrieveValueFromItem(e, t.dimIdx);
                },
              }),
              new mT(t, n)),
            o = [],
            a = 0,
            s = i.count();
          a < s;
          a++
        )
          (e = i.getRawDataItem(a)), r.evaluate() && o.push(e);
        return { data: o };
      },
    },
    xT = {
      type: "echarts:sort",
      transform: function (t) {
        var a = t.upstream,
          t = t.config,
          t = mo(t),
          s = (t.length || f(""), []),
          t =
            (E(t, function (t) {
              var e = t.dimension,
                n = t.order,
                i = t.parser,
                t = t.incomparable,
                e =
                  (null == e && f(""),
                  "asc" !== n && "desc" !== n && f(""),
                  t && "min" !== t && "max" !== t && f(""),
                  "asc" !== n && "desc" !== n && f(""),
                  a.getDimensionInfo(e)),
                r = (e || f(""), i ? Bf(i) : null);
              i && !r && f(""),
                s.push({
                  dimIdx: e.index,
                  parser: r,
                  comparator: new Hf(n, t),
                });
            }),
            a.sourceFormat);
        t !== Yp && t !== qp && f("");
        for (var e = [], n = 0, i = a.count(); n < i; n++)
          e.push(a.getRawDataItem(n));
        return (
          e.sort(function (t, e) {
            for (var n = 0; n < s.length; n++) {
              var i = s[n],
                r = a.retrieveValueFromItem(t, i.dimIdx),
                o = a.retrieveValueFromItem(e, i.dimIdx),
                i =
                  (i.parser && ((r = i.parser(r)), (o = i.parser(o))),
                  i.comparator.evaluate(r, o));
              if (0 !== i) return i;
            }
            return 0;
          }),
          { data: e }
        );
      },
    };
  E_(function (t) {
    t.registerTransform(_T), t.registerTransform(xT);
  }),
    (t.Axis = kc),
    (t.ChartView = Zg),
    (t.ComponentModel = g),
    (t.ComponentView = Wg),
    (t.List = yv),
    (t.Model = Lc),
    (t.PRIORITY = Wy),
    (t.SeriesModel = Ng),
    (t.color = wi),
    (t.connect = function (e) {
      var t;
      return (
        V(e) &&
          ((t = e),
          (e = null),
          E(t, function (t) {
            null != t.group && (e = t.group);
          }),
          (e = e || "g_" + S0++),
          E(t, function (t) {
            t.group = e;
          })),
        (w0[e] = !0),
        e
      );
    }),
    (t.dataTool = {}),
    (t.dependencies = { zrender: "5.4.4" }),
    (t.disConnect = Gy),
    (t.disconnect = T0),
    (t.dispose = function (t) {
      H(t) ? (t = x0[t]) : t instanceof a0 || (t = C0(t)),
        t instanceof a0 && !t.isDisposed() && t.dispose();
    }),
    (t.env = b),
    (t.extendChartView = function (t) {
      return (t = Zg.extend(t)), Zg.registerClass(t), t;
    }),
    (t.extendComponentModel = function (t) {
      return (t = g.extend(t)), g.registerClass(t), t;
    }),
    (t.extendComponentView = function (t) {
      return (t = Wg.extend(t)), Wg.registerClass(t), t;
    }),
    (t.extendSeriesModel = function (t) {
      return (t = Ng.extend(t)), Ng.registerClass(t), t;
    }),
    (t.format = Ic),
    (t.getCoordinateSystemDimensions = function (t) {
      if ((t = bd.get(t)))
        return t.getDimensionsInfo
          ? t.getDimensionsInfo()
          : t.dimensions.slice();
    }),
    (t.getInstanceByDom = C0),
    (t.getInstanceById = function (t) {
      return x0[t];
    }),
    (t.getMap = function (t) {
      var e = km.getMap;
      return e && e(t);
    }),
    (t.graphic = jc),
    (t.helper = Uy),
    (t.init = function (t, e, n) {
      var i = !(n && n.ssr);
      if (i) {
        var r = C0(t);
        if (r) return r;
      }
      return (
        ((r = new a0(t, e, n)).id = "ec_" + b0++),
        (x0[r.id] = r),
        i && No(t, M0, r.id),
        Jm(r),
        Dm.trigger("afterinit", r),
        r
      );
    }),
    (t.innerDrawElementOnCanvas = wm),
    (t.matrix = Ve),
    (t.number = jo),
    (t.parseGeoJSON = J_),
    (t.parseGeoJson = J_),
    (t.registerAction = O0),
    (t.registerCoordinateSystem = R0),
    (t.registerLayout = N0),
    (t.registerLoading = F0),
    (t.registerLocale = Wc),
    (t.registerMap = V0),
    (t.registerPostInit = A0),
    (t.registerPostUpdate = P0),
    (t.registerPreprocessor = D0),
    (t.registerProcessor = k0),
    (t.registerTheme = I0),
    (t.registerTransform = H0),
    (t.registerUpdateLifecycle = L0),
    (t.registerVisual = E0),
    (t.setCanvasCreator = function (t) {
      T({ createCanvas: t });
    }),
    (t.setPlatformAPI = T),
    (t.throttle = ry),
    (t.time = Zh),
    (t.use = E_),
    (t.util = Sc),
    (t.vector = oe),
    (t.version = "5.4.3"),
    (t.zrUtil = Ht),
    (t.zrender = qr);
});
