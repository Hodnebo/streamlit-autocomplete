/*! For license information please see main.3a01ad58.js.LICENSE.txt */
(() => {
    "use strict";
    var t = {
        43: (t, e, n) => {
            t.exports = n(202)
        }, 123: t => {
            var e = Object.getOwnPropertySymbols, n = Object.prototype.hasOwnProperty,
                r = Object.prototype.propertyIsEnumerable;
            t.exports = function () {
                try {
                    if (!Object.assign) return !1;
                    var t = new String("abc");
                    if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                    for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
                    if ("0123456789" !== Object.getOwnPropertyNames(e).map((function (t) {
                        return e[t]
                    })).join("")) return !1;
                    var r = {};
                    return "abcdefghijklmnopqrst".split("").forEach((function (t) {
                        r[t] = t
                    })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                } catch (i) {
                    return !1
                }
            }() ? Object.assign : function (t, i) {
                for (var o, s, a = function (t) {
                    if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(t)
                }(t), l = 1; l < arguments.length; l++) {
                    for (var u in o = Object(arguments[l])) n.call(o, u) && (a[u] = o[u]);
                    if (e) {
                        s = e(o);
                        for (var c = 0; c < s.length; c++) r.call(o, s[c]) && (a[s[c]] = o[s[c]])
                    }
                }
                return a
            }
        }, 153: (t, e, n) => {
            n(123);
            var r = n(43), i = 60103;
            if (e.Fragment = 60107, "function" === typeof Symbol && Symbol.for) {
                var o = Symbol.for;
                i = o("react.element"), e.Fragment = o("react.fragment")
            }
            var s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                a = Object.prototype.hasOwnProperty, l = {key: !0, ref: !0, __self: !0, __source: !0};

            function u(t, e, n) {
                var r, o = {}, u = null, c = null;
                for (r in void 0 !== n && (u = "" + n), void 0 !== e.key && (u = "" + e.key), void 0 !== e.ref && (c = e.ref), e) a.call(e, r) && !l.hasOwnProperty(r) && (o[r] = e[r]);
                if (t && t.defaultProps) for (r in e = t.defaultProps) void 0 === o[r] && (o[r] = e[r]);
                return {$$typeof: i, type: t, key: u, ref: c, props: o, _owner: s.current}
            }

            e.jsx = u, e.jsxs = u
        }, 202: (t, e, n) => {
            var r = n(123), i = 60103, o = 60106;
            e.Fragment = 60107, e.StrictMode = 60108, e.Profiler = 60114;
            var s = 60109, a = 60110, l = 60112;
            e.Suspense = 60113;
            var u = 60115, c = 60116;
            if ("function" === typeof Symbol && Symbol.for) {
                var d = Symbol.for;
                i = d("react.element"), o = d("react.portal"), e.Fragment = d("react.fragment"), e.StrictMode = d("react.strict_mode"), e.Profiler = d("react.profiler"), s = d("react.provider"), a = d("react.context"), l = d("react.forward_ref"), e.Suspense = d("react.suspense"), u = d("react.memo"), c = d("react.lazy")
            }
            var f = "function" === typeof Symbol && Symbol.iterator;

            function h(t) {
                for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }

            var p = {
                isMounted: function () {
                    return !1
                }, enqueueForceUpdate: function () {
                }, enqueueReplaceState: function () {
                }, enqueueSetState: function () {
                }
            }, y = {};

            function b(t, e, n) {
                this.props = t, this.context = e, this.refs = y, this.updater = n || p
            }

            function m() {
            }

            function g(t, e, n) {
                this.props = t, this.context = e, this.refs = y, this.updater = n || p
            }

            b.prototype.isReactComponent = {}, b.prototype.setState = function (t, e) {
                if ("object" !== typeof t && "function" !== typeof t && null != t) throw Error(h(85));
                this.updater.enqueueSetState(this, t, e, "setState")
            }, b.prototype.forceUpdate = function (t) {
                this.updater.enqueueForceUpdate(this, t, "forceUpdate")
            }, m.prototype = b.prototype;
            var v = g.prototype = new m;
            v.constructor = g, r(v, b.prototype), v.isPureReactComponent = !0;
            var w = {current: null}, _ = Object.prototype.hasOwnProperty,
                S = {key: !0, ref: !0, __self: !0, __source: !0};

            function I(t, e, n) {
                var r, o = {}, s = null, a = null;
                if (null != e) for (r in void 0 !== e.ref && (a = e.ref), void 0 !== e.key && (s = "" + e.key), e) _.call(e, r) && !S.hasOwnProperty(r) && (o[r] = e[r]);
                var l = arguments.length - 2;
                if (1 === l) o.children = n; else if (1 < l) {
                    for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
                    o.children = u
                }
                if (t && t.defaultProps) for (r in l = t.defaultProps) void 0 === o[r] && (o[r] = l[r]);
                return {$$typeof: i, type: t, key: s, ref: a, props: o, _owner: w.current}
            }

            function x(t) {
                return "object" === typeof t && null !== t && t.$$typeof === i
            }

            var k = /\/+/g;

            function T(t, e) {
                return "object" === typeof t && null !== t && null != t.key ? function (t) {
                    var e = {"=": "=0", ":": "=2"};
                    return "$" + t.replace(/[=:]/g, (function (t) {
                        return e[t]
                    }))
                }("" + t.key) : e.toString(36)
            }

            function E(t, e, n, r, s) {
                var a = typeof t;
                "undefined" !== a && "boolean" !== a || (t = null);
                var l = !1;
                if (null === t) l = !0; else switch (a) {
                    case"string":
                    case"number":
                        l = !0;
                        break;
                    case"object":
                        switch (t.$$typeof) {
                            case i:
                            case o:
                                l = !0
                        }
                }
                if (l) return s = s(l = t), t = "" === r ? "." + T(l, 0) : r, Array.isArray(s) ? (n = "", null != t && (n = t.replace(k, "$&/") + "/"), E(s, e, n, "", (function (t) {
                    return t
                }))) : null != s && (x(s) && (s = function (t, e) {
                    return {$$typeof: i, type: t.type, key: e, ref: t.ref, props: t.props, _owner: t._owner}
                }(s, n + (!s.key || l && l.key === s.key ? "" : ("" + s.key).replace(k, "$&/") + "/") + t)), e.push(s)), 1;
                if (l = 0, r = "" === r ? "." : r + ":", Array.isArray(t)) for (var u = 0; u < t.length; u++) {
                    var c = r + T(a = t[u], u);
                    l += E(a, e, n, c, s)
                } else if (c = function (t) {
                    return null === t || "object" !== typeof t ? null : "function" === typeof (t = f && t[f] || t["@@iterator"]) ? t : null
                }(t), "function" === typeof c) for (t = c.call(t), u = 0; !(a = t.next()).done;) l += E(a = a.value, e, n, c = r + T(a, u++), s); else if ("object" === a) throw e = "" + t, Error(h(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
                return l
            }

            function C(t, e, n) {
                if (null == t) return t;
                var r = [], i = 0;
                return E(t, r, "", "", (function (t) {
                    return e.call(n, t, i++)
                })), r
            }

            function O(t) {
                if (-1 === t._status) {
                    var e = t._result;
                    e = e(), t._status = 0, t._result = e, e.then((function (e) {
                        0 === t._status && (e = e.default, t._status = 1, t._result = e)
                    }), (function (e) {
                        0 === t._status && (t._status = 2, t._result = e)
                    }))
                }
                if (1 === t._status) return t._result;
                throw t._result
            }

            var A = {current: null};

            function D() {
                var t = A.current;
                if (null === t) throw Error(h(321));
                return t
            }

            var B = {
                ReactCurrentDispatcher: A,
                ReactCurrentBatchConfig: {transition: 0},
                ReactCurrentOwner: w,
                IsSomeRendererActing: {current: !1},
                assign: r
            };
            e.Children = {
                map: C, forEach: function (t, e, n) {
                    C(t, (function () {
                        e.apply(this, arguments)
                    }), n)
                }, count: function (t) {
                    var e = 0;
                    return C(t, (function () {
                        e++
                    })), e
                }, toArray: function (t) {
                    return C(t, (function (t) {
                        return t
                    })) || []
                }, only: function (t) {
                    if (!x(t)) throw Error(h(143));
                    return t
                }
            }, e.Component = b, e.PureComponent = g, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B, e.cloneElement = function (t, e, n) {
                if (null === t || void 0 === t) throw Error(h(267, t));
                var o = r({}, t.props), s = t.key, a = t.ref, l = t._owner;
                if (null != e) {
                    if (void 0 !== e.ref && (a = e.ref, l = w.current), void 0 !== e.key && (s = "" + e.key), t.type && t.type.defaultProps) var u = t.type.defaultProps;
                    for (c in e) _.call(e, c) && !S.hasOwnProperty(c) && (o[c] = void 0 === e[c] && void 0 !== u ? u[c] : e[c])
                }
                var c = arguments.length - 2;
                if (1 === c) o.children = n; else if (1 < c) {
                    u = Array(c);
                    for (var d = 0; d < c; d++) u[d] = arguments[d + 2];
                    o.children = u
                }
                return {$$typeof: i, type: t.type, key: s, ref: a, props: o, _owner: l}
            }, e.createContext = function (t, e) {
                return void 0 === e && (e = null), (t = {
                    $$typeof: a,
                    _calculateChangedBits: e,
                    _currentValue: t,
                    _currentValue2: t,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = {$$typeof: s, _context: t}, t.Consumer = t
            }, e.createElement = I, e.createFactory = function (t) {
                var e = I.bind(null, t);
                return e.type = t, e
            }, e.createRef = function () {
                return {current: null}
            }, e.forwardRef = function (t) {
                return {$$typeof: l, render: t}
            }, e.isValidElement = x, e.lazy = function (t) {
                return {$$typeof: c, _payload: {_status: -1, _result: t}, _init: O}
            }, e.memo = function (t, e) {
                return {$$typeof: u, type: t, compare: void 0 === e ? null : e}
            }, e.useCallback = function (t, e) {
                return D().useCallback(t, e)
            }, e.useContext = function (t, e) {
                return D().useContext(t, e)
            }, e.useDebugValue = function () {
            }, e.useEffect = function (t, e) {
                return D().useEffect(t, e)
            }, e.useImperativeHandle = function (t, e, n) {
                return D().useImperativeHandle(t, e, n)
            }, e.useLayoutEffect = function (t, e) {
                return D().useLayoutEffect(t, e)
            }, e.useMemo = function (t, e) {
                return D().useMemo(t, e)
            }, e.useReducer = function (t, e, n) {
                return D().useReducer(t, e, n)
            }, e.useRef = function (t) {
                return D().useRef(t)
            }, e.useState = function (t) {
                return D().useState(t)
            }, e.version = "17.0.2"
        }, 219: (t, e, n) => {
            var r = n(763), i = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                }, o = {name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0},
                s = {$$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0}, a = {};

            function l(t) {
                return r.isMemo(t) ? s : a[t.$$typeof] || i
            }

            a[r.ForwardRef] = {
                $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0
            }, a[r.Memo] = s;
            var u = Object.defineProperty, c = Object.getOwnPropertyNames, d = Object.getOwnPropertySymbols,
                f = Object.getOwnPropertyDescriptor, h = Object.getPrototypeOf, p = Object.prototype;
            t.exports = function t(e, n, r) {
                if ("string" !== typeof n) {
                    if (p) {
                        var i = h(n);
                        i && i !== p && t(e, i, r)
                    }
                    var s = c(n);
                    d && (s = s.concat(d(n)));
                    for (var a = l(e), y = l(n), b = 0; b < s.length; ++b) {
                        var m = s[b];
                        if (!o[m] && (!r || !r[m]) && (!y || !y[m]) && (!a || !a[m])) {
                            var g = f(n, m);
                            try {
                                u(e, m, g)
                            } catch (v) {
                            }
                        }
                    }
                }
                return e
            }
        }, 234: (t, e) => {
            var n, r, i, o;
            if ("object" === typeof performance && "function" === typeof performance.now) {
                var s = performance;
                e.unstable_now = function () {
                    return s.now()
                }
            } else {
                var a = Date, l = a.now();
                e.unstable_now = function () {
                    return a.now() - l
                }
            }
            if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
                var u = null, c = null, d = function () {
                    if (null !== u) try {
                        var t = e.unstable_now();
                        u(!0, t), u = null
                    } catch (n) {
                        throw setTimeout(d, 0), n
                    }
                };
                n = function (t) {
                    null !== u ? setTimeout(n, 0, t) : (u = t, setTimeout(d, 0))
                }, r = function (t, e) {
                    c = setTimeout(t, e)
                }, i = function () {
                    clearTimeout(c)
                }, e.unstable_shouldYield = function () {
                    return !1
                }, o = e.unstable_forceFrameRate = function () {
                }
            } else {
                var f = window.setTimeout, h = window.clearTimeout;
                if ("undefined" !== typeof console) {
                    var p = window.cancelAnimationFrame;
                    "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), "function" !== typeof p && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")
                }
                var y = !1, b = null, m = -1, g = 5, v = 0;
                e.unstable_shouldYield = function () {
                    return e.unstable_now() >= v
                }, o = function () {
                }, e.unstable_forceFrameRate = function (t) {
                    0 > t || 125 < t ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : g = 0 < t ? Math.floor(1e3 / t) : 5
                };
                var w = new MessageChannel, _ = w.port2;
                w.port1.onmessage = function () {
                    if (null !== b) {
                        var t = e.unstable_now();
                        v = t + g;
                        try {
                            b(!0, t) ? _.postMessage(null) : (y = !1, b = null)
                        } catch (n) {
                            throw _.postMessage(null), n
                        }
                    } else y = !1
                }, n = function (t) {
                    b = t, y || (y = !0, _.postMessage(null))
                }, r = function (t, n) {
                    m = f((function () {
                        t(e.unstable_now())
                    }), n)
                }, i = function () {
                    h(m), m = -1
                }
            }

            function S(t, e) {
                var n = t.length;
                t.push(e);
                t:for (; ;) {
                    var r = n - 1 >>> 1, i = t[r];
                    if (!(void 0 !== i && 0 < k(i, e))) break t;
                    t[r] = e, t[n] = i, n = r
                }
            }

            function I(t) {
                return void 0 === (t = t[0]) ? null : t
            }

            function x(t) {
                var e = t[0];
                if (void 0 !== e) {
                    var n = t.pop();
                    if (n !== e) {
                        t[0] = n;
                        t:for (var r = 0, i = t.length; r < i;) {
                            var o = 2 * (r + 1) - 1, s = t[o], a = o + 1, l = t[a];
                            if (void 0 !== s && 0 > k(s, n)) void 0 !== l && 0 > k(l, s) ? (t[r] = l, t[a] = n, r = a) : (t[r] = s, t[o] = n, r = o); else {
                                if (!(void 0 !== l && 0 > k(l, n))) break t;
                                t[r] = l, t[a] = n, r = a
                            }
                        }
                    }
                    return e
                }
                return null
            }

            function k(t, e) {
                var n = t.sortIndex - e.sortIndex;
                return 0 !== n ? n : t.id - e.id
            }

            var T = [], E = [], C = 1, O = null, A = 3, D = !1, B = !1, N = !1;

            function M(t) {
                for (var e = I(E); null !== e;) {
                    if (null === e.callback) x(E); else {
                        if (!(e.startTime <= t)) break;
                        x(E), e.sortIndex = e.expirationTime, S(T, e)
                    }
                    e = I(E)
                }
            }

            function F(t) {
                if (N = !1, M(t), !B) if (null !== I(T)) B = !0, n(L); else {
                    var e = I(E);
                    null !== e && r(F, e.startTime - t)
                }
            }

            function L(t, n) {
                B = !1, N && (N = !1, i()), D = !0;
                var o = A;
                try {
                    for (M(n), O = I(T); null !== O && (!(O.expirationTime > n) || t && !e.unstable_shouldYield());) {
                        var s = O.callback;
                        if ("function" === typeof s) {
                            O.callback = null, A = O.priorityLevel;
                            var a = s(O.expirationTime <= n);
                            n = e.unstable_now(), "function" === typeof a ? O.callback = a : O === I(T) && x(T), M(n)
                        } else x(T);
                        O = I(T)
                    }
                    if (null !== O) var l = !0; else {
                        var u = I(E);
                        null !== u && r(F, u.startTime - n), l = !1
                    }
                    return l
                } finally {
                    O = null, A = o, D = !1
                }
            }

            var P = o;
            e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (t) {
                t.callback = null
            }, e.unstable_continueExecution = function () {
                B || D || (B = !0, n(L))
            }, e.unstable_getCurrentPriorityLevel = function () {
                return A
            }, e.unstable_getFirstCallbackNode = function () {
                return I(T)
            }, e.unstable_next = function (t) {
                switch (A) {
                    case 1:
                    case 2:
                    case 3:
                        var e = 3;
                        break;
                    default:
                        e = A
                }
                var n = A;
                A = e;
                try {
                    return t()
                } finally {
                    A = n
                }
            }, e.unstable_pauseExecution = function () {
            }, e.unstable_requestPaint = P, e.unstable_runWithPriority = function (t, e) {
                switch (t) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        t = 3
                }
                var n = A;
                A = t;
                try {
                    return e()
                } finally {
                    A = n
                }
            }, e.unstable_scheduleCallback = function (t, o, s) {
                var a = e.unstable_now();
                switch ("object" === typeof s && null !== s ? s = "number" === typeof (s = s.delay) && 0 < s ? a + s : a : s = a, t) {
                    case 1:
                        var l = -1;
                        break;
                    case 2:
                        l = 250;
                        break;
                    case 5:
                        l = 1073741823;
                        break;
                    case 4:
                        l = 1e4;
                        break;
                    default:
                        l = 5e3
                }
                return t = {
                    id: C++, callback: o, priorityLevel: t, startTime: s, expirationTime: l = s + l, sortIndex: -1
                }, s > a ? (t.sortIndex = s, S(E, t), null === I(T) && t === I(E) && (N ? i() : N = !0, r(F, s - a))) : (t.sortIndex = l, S(T, t), B || D || (B = !0, n(L))), t
            }, e.unstable_wrapCallback = function (t) {
                var e = A;
                return function () {
                    var n = A;
                    A = e;
                    try {
                        return t.apply(this, arguments)
                    } finally {
                        A = n
                    }
                }
            }
        }, 579: (t, e, n) => {
            t.exports = n(153)
        }, 730: (t, e, n) => {
            var r = n(43), i = n(123), o = n(853);

            function s(t) {
                for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }

            if (!r) throw Error(s(227));
            var a = new Set, l = {};

            function u(t, e) {
                c(t, e), c(t + "Capture", e)
            }

            function c(t, e) {
                for (l[t] = e, t = 0; t < e.length; t++) a.add(e[t])
            }

            var d = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                h = Object.prototype.hasOwnProperty, p = {}, y = {};

            function b(t, e, n, r, i, o, s) {
                this.acceptsBooleans = 2 === e || 3 === e || 4 === e, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = t, this.type = e, this.sanitizeURL = o, this.removeEmptyString = s
            }

            var m = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function (t) {
                m[t] = new b(t, 0, !1, t, null, !1, !1)
            })), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach((function (t) {
                var e = t[0];
                m[e] = new b(e, 1, !1, t[1], null, !1, !1)
            })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function (t) {
                m[t] = new b(t, 2, !1, t.toLowerCase(), null, !1, !1)
            })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function (t) {
                m[t] = new b(t, 2, !1, t, null, !1, !1)
            })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function (t) {
                m[t] = new b(t, 3, !1, t.toLowerCase(), null, !1, !1)
            })), ["checked", "multiple", "muted", "selected"].forEach((function (t) {
                m[t] = new b(t, 3, !0, t, null, !1, !1)
            })), ["capture", "download"].forEach((function (t) {
                m[t] = new b(t, 4, !1, t, null, !1, !1)
            })), ["cols", "rows", "size", "span"].forEach((function (t) {
                m[t] = new b(t, 6, !1, t, null, !1, !1)
            })), ["rowSpan", "start"].forEach((function (t) {
                m[t] = new b(t, 5, !1, t.toLowerCase(), null, !1, !1)
            }));
            var g = /[\-:]([a-z])/g;

            function v(t) {
                return t[1].toUpperCase()
            }

            function w(t, e, n, r) {
                var i = m.hasOwnProperty(e) ? m[e] : null;
                (null !== i ? 0 === i.type : !r && (2 < e.length && ("o" === e[0] || "O" === e[0]) && ("n" === e[1] || "N" === e[1]))) || (function (t, e, n, r) {
                    if (null === e || "undefined" === typeof e || function (t, e, n, r) {
                        if (null !== n && 0 === n.type) return !1;
                        switch (typeof e) {
                            case"function":
                            case"symbol":
                                return !0;
                            case"boolean":
                                return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (t = t.toLowerCase().slice(0, 5)) && "aria-" !== t);
                            default:
                                return !1
                        }
                    }(t, e, n, r)) return !0;
                    if (r) return !1;
                    if (null !== n) switch (n.type) {
                        case 3:
                            return !e;
                        case 4:
                            return !1 === e;
                        case 5:
                            return isNaN(e);
                        case 6:
                            return isNaN(e) || 1 > e
                    }
                    return !1
                }(e, n, i, r) && (n = null), r || null === i ? function (t) {
                    return !!h.call(y, t) || !h.call(p, t) && (f.test(t) ? y[t] = !0 : (p[t] = !0, !1))
                }(e) && (null === n ? t.removeAttribute(e) : t.setAttribute(e, "" + n)) : i.mustUseProperty ? t[i.propertyName] = null === n ? 3 !== i.type && "" : n : (e = i.attributeName, r = i.attributeNamespace, null === n ? t.removeAttribute(e) : (n = 3 === (i = i.type) || 4 === i && !0 === n ? "" : "" + n, r ? t.setAttributeNS(r, e, n) : t.setAttribute(e, n))))
            }

            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function (t) {
                var e = t.replace(g, v);
                m[e] = new b(e, 1, !1, t, null, !1, !1)
            })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function (t) {
                var e = t.replace(g, v);
                m[e] = new b(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1)
            })), ["xml:base", "xml:lang", "xml:space"].forEach((function (t) {
                var e = t.replace(g, v);
                m[e] = new b(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1)
            })), ["tabIndex", "crossOrigin"].forEach((function (t) {
                m[t] = new b(t, 1, !1, t.toLowerCase(), null, !1, !1)
            })), m.xlinkHref = new b("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function (t) {
                m[t] = new b(t, 1, !1, t.toLowerCase(), null, !0, !0)
            }));
            var _ = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, S = 60103, I = 60106, x = 60107, k = 60108,
                T = 60114, E = 60109, C = 60110, O = 60112, A = 60113, D = 60120, B = 60115, N = 60116, M = 60121,
                F = 60128, L = 60129, P = 60130, R = 60131;
            if ("function" === typeof Symbol && Symbol.for) {
                var U = Symbol.for;
                S = U("react.element"), I = U("react.portal"), x = U("react.fragment"), k = U("react.strict_mode"), T = U("react.profiler"), E = U("react.provider"), C = U("react.context"), O = U("react.forward_ref"), A = U("react.suspense"), D = U("react.suspense_list"), B = U("react.memo"), N = U("react.lazy"), M = U("react.block"), U("react.scope"), F = U("react.opaque.id"), L = U("react.debug_trace_mode"), P = U("react.offscreen"), R = U("react.legacy_hidden")
            }
            var z, j = "function" === typeof Symbol && Symbol.iterator;

            function V(t) {
                return null === t || "object" !== typeof t ? null : "function" === typeof (t = j && t[j] || t["@@iterator"]) ? t : null
            }

            function $(t) {
                if (void 0 === z) try {
                    throw Error()
                } catch (n) {
                    var e = n.stack.trim().match(/\n( *(at )?)/);
                    z = e && e[1] || ""
                }
                return "\n" + z + t
            }

            var W = !1;

            function H(t, e) {
                if (!t || W) return "";
                W = !0;
                var n = Error.prepareStackTrace;
                Error.prepareStackTrace = void 0;
                try {
                    if (e) if (e = function () {
                        throw Error()
                    }, Object.defineProperty(e.prototype, "props", {
                        set: function () {
                            throw Error()
                        }
                    }), "object" === typeof Reflect && Reflect.construct) {
                        try {
                            Reflect.construct(e, [])
                        } catch (l) {
                            var r = l
                        }
                        Reflect.construct(t, [], e)
                    } else {
                        try {
                            e.call()
                        } catch (l) {
                            r = l
                        }
                        t.call(e.prototype)
                    } else {
                        try {
                            throw Error()
                        } catch (l) {
                            r = l
                        }
                        t()
                    }
                } catch (l) {
                    if (l && r && "string" === typeof l.stack) {
                        for (var i = l.stack.split("\n"), o = r.stack.split("\n"), s = i.length - 1, a = o.length - 1; 1 <= s && 0 <= a && i[s] !== o[a];) a--;
                        for (; 1 <= s && 0 <= a; s--, a--) if (i[s] !== o[a]) {
                            if (1 !== s || 1 !== a) do {
                                if (s--, 0 > --a || i[s] !== o[a]) return "\n" + i[s].replace(" at new ", " at ")
                            } while (1 <= s && 0 <= a);
                            break
                        }
                    }
                } finally {
                    W = !1, Error.prepareStackTrace = n
                }
                return (t = t ? t.displayName || t.name : "") ? $(t) : ""
            }

            function Y(t) {
                switch (t.tag) {
                    case 5:
                        return $(t.type);
                    case 16:
                        return $("Lazy");
                    case 13:
                        return $("Suspense");
                    case 19:
                        return $("SuspenseList");
                    case 0:
                    case 2:
                    case 15:
                        return t = H(t.type, !1);
                    case 11:
                        return t = H(t.type.render, !1);
                    case 22:
                        return t = H(t.type._render, !1);
                    case 1:
                        return t = H(t.type, !0);
                    default:
                        return ""
                }
            }

            function Q(t) {
                if (null == t) return null;
                if ("function" === typeof t) return t.displayName || t.name || null;
                if ("string" === typeof t) return t;
                switch (t) {
                    case x:
                        return "Fragment";
                    case I:
                        return "Portal";
                    case T:
                        return "Profiler";
                    case k:
                        return "StrictMode";
                    case A:
                        return "Suspense";
                    case D:
                        return "SuspenseList"
                }
                if ("object" === typeof t) switch (t.$$typeof) {
                    case C:
                        return (t.displayName || "Context") + ".Consumer";
                    case E:
                        return (t._context.displayName || "Context") + ".Provider";
                    case O:
                        var e = t.render;
                        return e = e.displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                    case B:
                        return Q(t.type);
                    case M:
                        return Q(t._render);
                    case N:
                        e = t._payload, t = t._init;
                        try {
                            return Q(t(e))
                        } catch (n) {
                        }
                }
                return null
            }

            function K(t) {
                switch (typeof t) {
                    case"boolean":
                    case"number":
                    case"object":
                    case"string":
                    case"undefined":
                        return t;
                    default:
                        return ""
                }
            }

            function q(t) {
                var e = t.type;
                return (t = t.nodeName) && "input" === t.toLowerCase() && ("checkbox" === e || "radio" === e)
            }

            function G(t) {
                t._valueTracker || (t._valueTracker = function (t) {
                    var e = q(t) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
                        r = "" + t[e];
                    if (!t.hasOwnProperty(e) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                        var i = n.get, o = n.set;
                        return Object.defineProperty(t, e, {
                            configurable: !0, get: function () {
                                return i.call(this)
                            }, set: function (t) {
                                r = "" + t, o.call(this, t)
                            }
                        }), Object.defineProperty(t, e, {enumerable: n.enumerable}), {
                            getValue: function () {
                                return r
                            }, setValue: function (t) {
                                r = "" + t
                            }, stopTracking: function () {
                                t._valueTracker = null, delete t[e]
                            }
                        }
                    }
                }(t))
            }

            function J(t) {
                if (!t) return !1;
                var e = t._valueTracker;
                if (!e) return !0;
                var n = e.getValue(), r = "";
                return t && (r = q(t) ? t.checked ? "true" : "false" : t.value), (t = r) !== n && (e.setValue(t), !0)
            }

            function X(t) {
                if ("undefined" === typeof (t = t || ("undefined" !== typeof document ? document : void 0))) return null;
                try {
                    return t.activeElement || t.body
                } catch (e) {
                    return t.body
                }
            }

            function Z(t, e) {
                var n = e.checked;
                return i({}, e, {
                    defaultChecked: void 0,
                    defaultValue: void 0,
                    value: void 0,
                    checked: null != n ? n : t._wrapperState.initialChecked
                })
            }

            function tt(t, e) {
                var n = null == e.defaultValue ? "" : e.defaultValue,
                    r = null != e.checked ? e.checked : e.defaultChecked;
                n = K(null != e.value ? e.value : n), t._wrapperState = {
                    initialChecked: r,
                    initialValue: n,
                    controlled: "checkbox" === e.type || "radio" === e.type ? null != e.checked : null != e.value
                }
            }

            function et(t, e) {
                null != (e = e.checked) && w(t, "checked", e, !1)
            }

            function nt(t, e) {
                et(t, e);
                var n = K(e.value), r = e.type;
                if (null != n) "number" === r ? (0 === n && "" === t.value || t.value != n) && (t.value = "" + n) : t.value !== "" + n && (t.value = "" + n); else if ("submit" === r || "reset" === r) return void t.removeAttribute("value");
                e.hasOwnProperty("value") ? it(t, e.type, n) : e.hasOwnProperty("defaultValue") && it(t, e.type, K(e.defaultValue)), null == e.checked && null != e.defaultChecked && (t.defaultChecked = !!e.defaultChecked)
            }

            function rt(t, e, n) {
                if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
                    var r = e.type;
                    if (!("submit" !== r && "reset" !== r || void 0 !== e.value && null !== e.value)) return;
                    e = "" + t._wrapperState.initialValue, n || e === t.value || (t.value = e), t.defaultValue = e
                }
                "" !== (n = t.name) && (t.name = ""), t.defaultChecked = !!t._wrapperState.initialChecked, "" !== n && (t.name = n)
            }

            function it(t, e, n) {
                "number" === e && X(t.ownerDocument) === t || (null == n ? t.defaultValue = "" + t._wrapperState.initialValue : t.defaultValue !== "" + n && (t.defaultValue = "" + n))
            }

            function ot(t, e) {
                return t = i({children: void 0}, e), (e = function (t) {
                    var e = "";
                    return r.Children.forEach(t, (function (t) {
                        null != t && (e += t)
                    })), e
                }(e.children)) && (t.children = e), t
            }

            function st(t, e, n, r) {
                if (t = t.options, e) {
                    e = {};
                    for (var i = 0; i < n.length; i++) e["$" + n[i]] = !0;
                    for (n = 0; n < t.length; n++) i = e.hasOwnProperty("$" + t[n].value), t[n].selected !== i && (t[n].selected = i), i && r && (t[n].defaultSelected = !0)
                } else {
                    for (n = "" + K(n), e = null, i = 0; i < t.length; i++) {
                        if (t[i].value === n) return t[i].selected = !0, void (r && (t[i].defaultSelected = !0));
                        null !== e || t[i].disabled || (e = t[i])
                    }
                    null !== e && (e.selected = !0)
                }
            }

            function at(t, e) {
                if (null != e.dangerouslySetInnerHTML) throw Error(s(91));
                return i({}, e, {value: void 0, defaultValue: void 0, children: "" + t._wrapperState.initialValue})
            }

            function lt(t, e) {
                var n = e.value;
                if (null == n) {
                    if (n = e.children, e = e.defaultValue, null != n) {
                        if (null != e) throw Error(s(92));
                        if (Array.isArray(n)) {
                            if (!(1 >= n.length)) throw Error(s(93));
                            n = n[0]
                        }
                        e = n
                    }
                    null == e && (e = ""), n = e
                }
                t._wrapperState = {initialValue: K(n)}
            }

            function ut(t, e) {
                var n = K(e.value), r = K(e.defaultValue);
                null != n && ((n = "" + n) !== t.value && (t.value = n), null == e.defaultValue && t.defaultValue !== n && (t.defaultValue = n)), null != r && (t.defaultValue = "" + r)
            }

            function ct(t) {
                var e = t.textContent;
                e === t._wrapperState.initialValue && "" !== e && null !== e && (t.value = e)
            }

            var dt = "http://www.w3.org/1999/xhtml", ft = "http://www.w3.org/2000/svg";

            function ht(t) {
                switch (t) {
                    case"svg":
                        return "http://www.w3.org/2000/svg";
                    case"math":
                        return "http://www.w3.org/1998/Math/MathML";
                    default:
                        return "http://www.w3.org/1999/xhtml"
                }
            }

            function pt(t, e) {
                return null == t || "http://www.w3.org/1999/xhtml" === t ? ht(e) : "http://www.w3.org/2000/svg" === t && "foreignObject" === e ? "http://www.w3.org/1999/xhtml" : t
            }

            var yt, bt, mt = (bt = function (t, e) {
                if (t.namespaceURI !== ft || "innerHTML" in t) t.innerHTML = e; else {
                    for ((yt = yt || document.createElement("div")).innerHTML = "<svg>" + e.valueOf().toString() + "</svg>", e = yt.firstChild; t.firstChild;) t.removeChild(t.firstChild);
                    for (; e.firstChild;) t.appendChild(e.firstChild)
                }
            }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function (t, e, n, r) {
                MSApp.execUnsafeLocalFunction((function () {
                    return bt(t, e)
                }))
            } : bt);

            function gt(t, e) {
                if (e) {
                    var n = t.firstChild;
                    if (n && n === t.lastChild && 3 === n.nodeType) return void (n.nodeValue = e)
                }
                t.textContent = e
            }

            var vt = {
                animationIterationCount: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            }, wt = ["Webkit", "ms", "Moz", "O"];

            function _t(t, e, n) {
                return null == e || "boolean" === typeof e || "" === e ? "" : n || "number" !== typeof e || 0 === e || vt.hasOwnProperty(t) && vt[t] ? ("" + e).trim() : e + "px"
            }

            function St(t, e) {
                for (var n in t = t.style, e) if (e.hasOwnProperty(n)) {
                    var r = 0 === n.indexOf("--"), i = _t(n, e[n], r);
                    "float" === n && (n = "cssFloat"), r ? t.setProperty(n, i) : t[n] = i
                }
            }

            Object.keys(vt).forEach((function (t) {
                wt.forEach((function (e) {
                    e = e + t.charAt(0).toUpperCase() + t.substring(1), vt[e] = vt[t]
                }))
            }));
            var It = i({menuitem: !0}, {
                area: !0,
                base: !0,
                br: !0,
                col: !0,
                embed: !0,
                hr: !0,
                img: !0,
                input: !0,
                keygen: !0,
                link: !0,
                meta: !0,
                param: !0,
                source: !0,
                track: !0,
                wbr: !0
            });

            function xt(t, e) {
                if (e) {
                    if (It[t] && (null != e.children || null != e.dangerouslySetInnerHTML)) throw Error(s(137, t));
                    if (null != e.dangerouslySetInnerHTML) {
                        if (null != e.children) throw Error(s(60));
                        if ("object" !== typeof e.dangerouslySetInnerHTML || !("__html" in e.dangerouslySetInnerHTML)) throw Error(s(61))
                    }
                    if (null != e.style && "object" !== typeof e.style) throw Error(s(62))
                }
            }

            function kt(t, e) {
                if (-1 === t.indexOf("-")) return "string" === typeof e.is;
                switch (t) {
                    case"annotation-xml":
                    case"color-profile":
                    case"font-face":
                    case"font-face-src":
                    case"font-face-uri":
                    case"font-face-format":
                    case"font-face-name":
                    case"missing-glyph":
                        return !1;
                    default:
                        return !0
                }
            }

            function Tt(t) {
                return (t = t.target || t.srcElement || window).correspondingUseElement && (t = t.correspondingUseElement), 3 === t.nodeType ? t.parentNode : t
            }

            var Et = null, Ct = null, Ot = null;

            function At(t) {
                if (t = ri(t)) {
                    if ("function" !== typeof Et) throw Error(s(280));
                    var e = t.stateNode;
                    e && (e = oi(e), Et(t.stateNode, t.type, e))
                }
            }

            function Dt(t) {
                Ct ? Ot ? Ot.push(t) : Ot = [t] : Ct = t
            }

            function Bt() {
                if (Ct) {
                    var t = Ct, e = Ot;
                    if (Ot = Ct = null, At(t), e) for (t = 0; t < e.length; t++) At(e[t])
                }
            }

            function Nt(t, e) {
                return t(e)
            }

            function Mt(t, e, n, r, i) {
                return t(e, n, r, i)
            }

            function Ft() {
            }

            var Lt = Nt, Pt = !1, Rt = !1;

            function Ut() {
                null === Ct && null === Ot || (Ft(), Bt())
            }

            function zt(t, e) {
                var n = t.stateNode;
                if (null === n) return null;
                var r = oi(n);
                if (null === r) return null;
                n = r[e];
                t:switch (e) {
                    case"onClick":
                    case"onClickCapture":
                    case"onDoubleClick":
                    case"onDoubleClickCapture":
                    case"onMouseDown":
                    case"onMouseDownCapture":
                    case"onMouseMove":
                    case"onMouseMoveCapture":
                    case"onMouseUp":
                    case"onMouseUpCapture":
                    case"onMouseEnter":
                        (r = !r.disabled) || (r = !("button" === (t = t.type) || "input" === t || "select" === t || "textarea" === t)), t = !r;
                        break t;
                    default:
                        t = !1
                }
                if (t) return null;
                if (n && "function" !== typeof n) throw Error(s(231, e, typeof n));
                return n
            }

            var jt = !1;
            if (d) try {
                var Vt = {};
                Object.defineProperty(Vt, "passive", {
                    get: function () {
                        jt = !0
                    }
                }), window.addEventListener("test", Vt, Vt), window.removeEventListener("test", Vt, Vt)
            } catch (bt) {
                jt = !1
            }

            function $t(t, e, n, r, i, o, s, a, l) {
                var u = Array.prototype.slice.call(arguments, 3);
                try {
                    e.apply(n, u)
                } catch (c) {
                    this.onError(c)
                }
            }

            var Wt = !1, Ht = null, Yt = !1, Qt = null, Kt = {
                onError: function (t) {
                    Wt = !0, Ht = t
                }
            };

            function qt(t, e, n, r, i, o, s, a, l) {
                Wt = !1, Ht = null, $t.apply(Kt, arguments)
            }

            function Gt(t) {
                var e = t, n = t;
                if (t.alternate) for (; e.return;) e = e.return; else {
                    t = e;
                    do {
                        0 !== (1026 & (e = t).flags) && (n = e.return), t = e.return
                    } while (t)
                }
                return 3 === e.tag ? n : null
            }

            function Jt(t) {
                if (13 === t.tag) {
                    var e = t.memoizedState;
                    if (null === e && (null !== (t = t.alternate) && (e = t.memoizedState)), null !== e) return e.dehydrated
                }
                return null
            }

            function Xt(t) {
                if (Gt(t) !== t) throw Error(s(188))
            }

            function Zt(t) {
                if (t = function (t) {
                    var e = t.alternate;
                    if (!e) {
                        if (null === (e = Gt(t))) throw Error(s(188));
                        return e !== t ? null : t
                    }
                    for (var n = t, r = e; ;) {
                        var i = n.return;
                        if (null === i) break;
                        var o = i.alternate;
                        if (null === o) {
                            if (null !== (r = i.return)) {
                                n = r;
                                continue
                            }
                            break
                        }
                        if (i.child === o.child) {
                            for (o = i.child; o;) {
                                if (o === n) return Xt(i), t;
                                if (o === r) return Xt(i), e;
                                o = o.sibling
                            }
                            throw Error(s(188))
                        }
                        if (n.return !== r.return) n = i, r = o; else {
                            for (var a = !1, l = i.child; l;) {
                                if (l === n) {
                                    a = !0, n = i, r = o;
                                    break
                                }
                                if (l === r) {
                                    a = !0, r = i, n = o;
                                    break
                                }
                                l = l.sibling
                            }
                            if (!a) {
                                for (l = o.child; l;) {
                                    if (l === n) {
                                        a = !0, n = o, r = i;
                                        break
                                    }
                                    if (l === r) {
                                        a = !0, r = o, n = i;
                                        break
                                    }
                                    l = l.sibling
                                }
                                if (!a) throw Error(s(189))
                            }
                        }
                        if (n.alternate !== r) throw Error(s(190))
                    }
                    if (3 !== n.tag) throw Error(s(188));
                    return n.stateNode.current === n ? t : e
                }(t), !t) return null;
                for (var e = t; ;) {
                    if (5 === e.tag || 6 === e.tag) return e;
                    if (e.child) e.child.return = e, e = e.child; else {
                        if (e === t) break;
                        for (; !e.sibling;) {
                            if (!e.return || e.return === t) return null;
                            e = e.return
                        }
                        e.sibling.return = e.return, e = e.sibling
                    }
                }
                return null
            }

            function te(t, e) {
                for (var n = t.alternate; null !== e;) {
                    if (e === t || e === n) return !0;
                    e = e.return
                }
                return !1
            }

            var ee, ne, re, ie, oe = !1, se = [], ae = null, le = null, ue = null, ce = new Map, de = new Map, fe = [],
                he = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

            function pe(t, e, n, r, i) {
                return {blockedOn: t, domEventName: e, eventSystemFlags: 16 | n, nativeEvent: i, targetContainers: [r]}
            }

            function ye(t, e) {
                switch (t) {
                    case"focusin":
                    case"focusout":
                        ae = null;
                        break;
                    case"dragenter":
                    case"dragleave":
                        le = null;
                        break;
                    case"mouseover":
                    case"mouseout":
                        ue = null;
                        break;
                    case"pointerover":
                    case"pointerout":
                        ce.delete(e.pointerId);
                        break;
                    case"gotpointercapture":
                    case"lostpointercapture":
                        de.delete(e.pointerId)
                }
            }

            function be(t, e, n, r, i, o) {
                return null === t || t.nativeEvent !== o ? (t = pe(e, n, r, i, o), null !== e && (null !== (e = ri(e)) && ne(e)), t) : (t.eventSystemFlags |= r, e = t.targetContainers, null !== i && -1 === e.indexOf(i) && e.push(i), t)
            }

            function me(t) {
                var e = ni(t.target);
                if (null !== e) {
                    var n = Gt(e);
                    if (null !== n) if (13 === (e = n.tag)) {
                        if (null !== (e = Jt(n))) return t.blockedOn = e, void ie(t.lanePriority, (function () {
                            o.unstable_runWithPriority(t.priority, (function () {
                                re(n)
                            }))
                        }))
                    } else if (3 === e && n.stateNode.hydrate) return void (t.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                }
                t.blockedOn = null
            }

            function ge(t) {
                if (null !== t.blockedOn) return !1;
                for (var e = t.targetContainers; 0 < e.length;) {
                    var n = Ze(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
                    if (null !== n) return null !== (e = ri(n)) && ne(e), t.blockedOn = n, !1;
                    e.shift()
                }
                return !0
            }

            function ve(t, e, n) {
                ge(t) && n.delete(e)
            }

            function we() {
                for (oe = !1; 0 < se.length;) {
                    var t = se[0];
                    if (null !== t.blockedOn) {
                        null !== (t = ri(t.blockedOn)) && ee(t);
                        break
                    }
                    for (var e = t.targetContainers; 0 < e.length;) {
                        var n = Ze(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
                        if (null !== n) {
                            t.blockedOn = n;
                            break
                        }
                        e.shift()
                    }
                    null === t.blockedOn && se.shift()
                }
                null !== ae && ge(ae) && (ae = null), null !== le && ge(le) && (le = null), null !== ue && ge(ue) && (ue = null), ce.forEach(ve), de.forEach(ve)
            }

            function _e(t, e) {
                t.blockedOn === e && (t.blockedOn = null, oe || (oe = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, we)))
            }

            function Se(t) {
                function e(e) {
                    return _e(e, t)
                }

                if (0 < se.length) {
                    _e(se[0], t);
                    for (var n = 1; n < se.length; n++) {
                        var r = se[n];
                        r.blockedOn === t && (r.blockedOn = null)
                    }
                }
                for (null !== ae && _e(ae, t), null !== le && _e(le, t), null !== ue && _e(ue, t), ce.forEach(e), de.forEach(e), n = 0; n < fe.length; n++) (r = fe[n]).blockedOn === t && (r.blockedOn = null);
                for (; 0 < fe.length && null === (n = fe[0]).blockedOn;) me(n), null === n.blockedOn && fe.shift()
            }

            function Ie(t, e) {
                var n = {};
                return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n
            }

            var xe = {
                animationend: Ie("Animation", "AnimationEnd"),
                animationiteration: Ie("Animation", "AnimationIteration"),
                animationstart: Ie("Animation", "AnimationStart"),
                transitionend: Ie("Transition", "TransitionEnd")
            }, ke = {}, Te = {};

            function Ee(t) {
                if (ke[t]) return ke[t];
                if (!xe[t]) return t;
                var e, n = xe[t];
                for (e in n) if (n.hasOwnProperty(e) && e in Te) return ke[t] = n[e];
                return t
            }

            d && (Te = document.createElement("div").style, "AnimationEvent" in window || (delete xe.animationend.animation, delete xe.animationiteration.animation, delete xe.animationstart.animation), "TransitionEvent" in window || delete xe.transitionend.transition);
            var Ce = Ee("animationend"), Oe = Ee("animationiteration"), Ae = Ee("animationstart"),
                De = Ee("transitionend"), Be = new Map, Ne = new Map,
                Me = ["abort", "abort", Ce, "animationEnd", Oe, "animationIteration", Ae, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", De, "transitionEnd", "waiting", "waiting"];

            function Fe(t, e) {
                for (var n = 0; n < t.length; n += 2) {
                    var r = t[n], i = t[n + 1];
                    i = "on" + (i[0].toUpperCase() + i.slice(1)), Ne.set(r, e), Be.set(r, i), u(i, [r])
                }
            }

            (0, o.unstable_now)();
            var Le = 8;

            function Pe(t) {
                if (0 !== (1 & t)) return Le = 15, 1;
                if (0 !== (2 & t)) return Le = 14, 2;
                if (0 !== (4 & t)) return Le = 13, 4;
                var e = 24 & t;
                return 0 !== e ? (Le = 12, e) : 0 !== (32 & t) ? (Le = 11, 32) : 0 !== (e = 192 & t) ? (Le = 10, e) : 0 !== (256 & t) ? (Le = 9, 256) : 0 !== (e = 3584 & t) ? (Le = 8, e) : 0 !== (4096 & t) ? (Le = 7, 4096) : 0 !== (e = 4186112 & t) ? (Le = 6, e) : 0 !== (e = 62914560 & t) ? (Le = 5, e) : 67108864 & t ? (Le = 4, 67108864) : 0 !== (134217728 & t) ? (Le = 3, 134217728) : 0 !== (e = 805306368 & t) ? (Le = 2, e) : 0 !== (1073741824 & t) ? (Le = 1, 1073741824) : (Le = 8, t)
            }

            function Re(t, e) {
                var n = t.pendingLanes;
                if (0 === n) return Le = 0;
                var r = 0, i = 0, o = t.expiredLanes, s = t.suspendedLanes, a = t.pingedLanes;
                if (0 !== o) r = o, i = Le = 15; else if (0 !== (o = 134217727 & n)) {
                    var l = o & ~s;
                    0 !== l ? (r = Pe(l), i = Le) : 0 !== (a &= o) && (r = Pe(a), i = Le)
                } else 0 !== (o = n & ~s) ? (r = Pe(o), i = Le) : 0 !== a && (r = Pe(a), i = Le);
                if (0 === r) return 0;
                if (r = n & ((0 > (r = 31 - We(r)) ? 0 : 1 << r) << 1) - 1, 0 !== e && e !== r && 0 === (e & s)) {
                    if (Pe(e), i <= Le) return e;
                    Le = i
                }
                if (0 !== (e = t.entangledLanes)) for (t = t.entanglements, e &= r; 0 < e;) i = 1 << (n = 31 - We(e)), r |= t[n], e &= ~i;
                return r
            }

            function Ue(t) {
                return 0 !== (t = -1073741825 & t.pendingLanes) ? t : 1073741824 & t ? 1073741824 : 0
            }

            function ze(t, e) {
                switch (t) {
                    case 15:
                        return 1;
                    case 14:
                        return 2;
                    case 12:
                        return 0 === (t = je(24 & ~e)) ? ze(10, e) : t;
                    case 10:
                        return 0 === (t = je(192 & ~e)) ? ze(8, e) : t;
                    case 8:
                        return 0 === (t = je(3584 & ~e)) && (0 === (t = je(4186112 & ~e)) && (t = 512)), t;
                    case 2:
                        return 0 === (e = je(805306368 & ~e)) && (e = 268435456), e
                }
                throw Error(s(358, t))
            }

            function je(t) {
                return t & -t
            }

            function Ve(t) {
                for (var e = [], n = 0; 31 > n; n++) e.push(t);
                return e
            }

            function $e(t, e, n) {
                t.pendingLanes |= e;
                var r = e - 1;
                t.suspendedLanes &= r, t.pingedLanes &= r, (t = t.eventTimes)[e = 31 - We(e)] = n
            }

            var We = Math.clz32 ? Math.clz32 : function (t) {
                return 0 === t ? 32 : 31 - (He(t) / Ye | 0) | 0
            }, He = Math.log, Ye = Math.LN2;
            var Qe = o.unstable_UserBlockingPriority, Ke = o.unstable_runWithPriority, qe = !0;

            function Ge(t, e, n, r) {
                Pt || Ft();
                var i = Xe, o = Pt;
                Pt = !0;
                try {
                    Mt(i, t, e, n, r)
                } finally {
                    (Pt = o) || Ut()
                }
            }

            function Je(t, e, n, r) {
                Ke(Qe, Xe.bind(null, t, e, n, r))
            }

            function Xe(t, e, n, r) {
                var i;
                if (qe) if ((i = 0 === (4 & e)) && 0 < se.length && -1 < he.indexOf(t)) t = pe(null, t, e, n, r), se.push(t); else {
                    var o = Ze(t, e, n, r);
                    if (null === o) i && ye(t, r); else {
                        if (i) {
                            if (-1 < he.indexOf(t)) return t = pe(o, t, e, n, r), void se.push(t);
                            if (function (t, e, n, r, i) {
                                switch (e) {
                                    case"focusin":
                                        return ae = be(ae, t, e, n, r, i), !0;
                                    case"dragenter":
                                        return le = be(le, t, e, n, r, i), !0;
                                    case"mouseover":
                                        return ue = be(ue, t, e, n, r, i), !0;
                                    case"pointerover":
                                        var o = i.pointerId;
                                        return ce.set(o, be(ce.get(o) || null, t, e, n, r, i)), !0;
                                    case"gotpointercapture":
                                        return o = i.pointerId, de.set(o, be(de.get(o) || null, t, e, n, r, i)), !0
                                }
                                return !1
                            }(o, t, e, n, r)) return;
                            ye(t, r)
                        }
                        Fr(t, e, r, null, n)
                    }
                }
            }

            function Ze(t, e, n, r) {
                var i = Tt(r);
                if (null !== (i = ni(i))) {
                    var o = Gt(i);
                    if (null === o) i = null; else {
                        var s = o.tag;
                        if (13 === s) {
                            if (null !== (i = Jt(o))) return i;
                            i = null
                        } else if (3 === s) {
                            if (o.stateNode.hydrate) return 3 === o.tag ? o.stateNode.containerInfo : null;
                            i = null
                        } else o !== i && (i = null)
                    }
                }
                return Fr(t, e, r, i, n), null
            }

            var tn = null, en = null, nn = null;

            function rn() {
                if (nn) return nn;
                var t, e, n = en, r = n.length, i = "value" in tn ? tn.value : tn.textContent, o = i.length;
                for (t = 0; t < r && n[t] === i[t]; t++) ;
                var s = r - t;
                for (e = 1; e <= s && n[r - e] === i[o - e]; e++) ;
                return nn = i.slice(t, 1 < e ? 1 - e : void 0)
            }

            function on(t) {
                var e = t.keyCode;
                return "charCode" in t ? 0 === (t = t.charCode) && 13 === e && (t = 13) : t = e, 10 === t && (t = 13), 32 <= t || 13 === t ? t : 0
            }

            function sn() {
                return !0
            }

            function an() {
                return !1
            }

            function ln(t) {
                function e(e, n, r, i, o) {
                    for (var s in this._reactName = e, this._targetInst = r, this.type = n, this.nativeEvent = i, this.target = o, this.currentTarget = null, t) t.hasOwnProperty(s) && (e = t[s], this[s] = e ? e(i) : i[s]);
                    return this.isDefaultPrevented = (null != i.defaultPrevented ? i.defaultPrevented : !1 === i.returnValue) ? sn : an, this.isPropagationStopped = an, this
                }

                return i(e.prototype, {
                    preventDefault: function () {
                        this.defaultPrevented = !0;
                        var t = this.nativeEvent;
                        t && (t.preventDefault ? t.preventDefault() : "unknown" !== typeof t.returnValue && (t.returnValue = !1), this.isDefaultPrevented = sn)
                    }, stopPropagation: function () {
                        var t = this.nativeEvent;
                        t && (t.stopPropagation ? t.stopPropagation() : "unknown" !== typeof t.cancelBubble && (t.cancelBubble = !0), this.isPropagationStopped = sn)
                    }, persist: function () {
                    }, isPersistent: sn
                }), e
            }

            var un, cn, dn, fn = {
                    eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (t) {
                        return t.timeStamp || Date.now()
                    }, defaultPrevented: 0, isTrusted: 0
                }, hn = ln(fn), pn = i({}, fn, {view: 0, detail: 0}), yn = ln(pn), bn = i({}, pn, {
                    screenX: 0,
                    screenY: 0,
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0,
                    ctrlKey: 0,
                    shiftKey: 0,
                    altKey: 0,
                    metaKey: 0,
                    getModifierState: Cn,
                    button: 0,
                    buttons: 0,
                    relatedTarget: function (t) {
                        return void 0 === t.relatedTarget ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
                    },
                    movementX: function (t) {
                        return "movementX" in t ? t.movementX : (t !== dn && (dn && "mousemove" === t.type ? (un = t.screenX - dn.screenX, cn = t.screenY - dn.screenY) : cn = un = 0, dn = t), un)
                    },
                    movementY: function (t) {
                        return "movementY" in t ? t.movementY : cn
                    }
                }), mn = ln(bn), gn = ln(i({}, bn, {dataTransfer: 0})), vn = ln(i({}, pn, {relatedTarget: 0})),
                wn = ln(i({}, fn, {animationName: 0, elapsedTime: 0, pseudoElement: 0})), _n = i({}, fn, {
                    clipboardData: function (t) {
                        return "clipboardData" in t ? t.clipboardData : window.clipboardData
                    }
                }), Sn = ln(_n), In = ln(i({}, fn, {data: 0})), xn = {
                    Esc: "Escape",
                    Spacebar: " ",
                    Left: "ArrowLeft",
                    Up: "ArrowUp",
                    Right: "ArrowRight",
                    Down: "ArrowDown",
                    Del: "Delete",
                    Win: "OS",
                    Menu: "ContextMenu",
                    Apps: "ContextMenu",
                    Scroll: "ScrollLock",
                    MozPrintableKey: "Unidentified"
                }, kn = {
                    8: "Backspace",
                    9: "Tab",
                    12: "Clear",
                    13: "Enter",
                    16: "Shift",
                    17: "Control",
                    18: "Alt",
                    19: "Pause",
                    20: "CapsLock",
                    27: "Escape",
                    32: " ",
                    33: "PageUp",
                    34: "PageDown",
                    35: "End",
                    36: "Home",
                    37: "ArrowLeft",
                    38: "ArrowUp",
                    39: "ArrowRight",
                    40: "ArrowDown",
                    45: "Insert",
                    46: "Delete",
                    112: "F1",
                    113: "F2",
                    114: "F3",
                    115: "F4",
                    116: "F5",
                    117: "F6",
                    118: "F7",
                    119: "F8",
                    120: "F9",
                    121: "F10",
                    122: "F11",
                    123: "F12",
                    144: "NumLock",
                    145: "ScrollLock",
                    224: "Meta"
                }, Tn = {Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey"};

            function En(t) {
                var e = this.nativeEvent;
                return e.getModifierState ? e.getModifierState(t) : !!(t = Tn[t]) && !!e[t]
            }

            function Cn() {
                return En
            }

            var On = i({}, pn, {
                key: function (t) {
                    if (t.key) {
                        var e = xn[t.key] || t.key;
                        if ("Unidentified" !== e) return e
                    }
                    return "keypress" === t.type ? 13 === (t = on(t)) ? "Enter" : String.fromCharCode(t) : "keydown" === t.type || "keyup" === t.type ? kn[t.keyCode] || "Unidentified" : ""
                },
                code: 0,
                location: 0,
                ctrlKey: 0,
                shiftKey: 0,
                altKey: 0,
                metaKey: 0,
                repeat: 0,
                locale: 0,
                getModifierState: Cn,
                charCode: function (t) {
                    return "keypress" === t.type ? on(t) : 0
                },
                keyCode: function (t) {
                    return "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
                },
                which: function (t) {
                    return "keypress" === t.type ? on(t) : "keydown" === t.type || "keyup" === t.type ? t.keyCode : 0
                }
            }), An = ln(On), Dn = ln(i({}, bn, {
                pointerId: 0,
                width: 0,
                height: 0,
                pressure: 0,
                tangentialPressure: 0,
                tiltX: 0,
                tiltY: 0,
                twist: 0,
                pointerType: 0,
                isPrimary: 0
            })), Bn = ln(i({}, pn, {
                touches: 0,
                targetTouches: 0,
                changedTouches: 0,
                altKey: 0,
                metaKey: 0,
                ctrlKey: 0,
                shiftKey: 0,
                getModifierState: Cn
            })), Nn = ln(i({}, fn, {propertyName: 0, elapsedTime: 0, pseudoElement: 0})), Mn = i({}, bn, {
                deltaX: function (t) {
                    return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
                }, deltaY: function (t) {
                    return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
                }, deltaZ: 0, deltaMode: 0
            }), Fn = ln(Mn), Ln = [9, 13, 27, 32], Pn = d && "CompositionEvent" in window, Rn = null;
            d && "documentMode" in document && (Rn = document.documentMode);
            var Un = d && "TextEvent" in window && !Rn, zn = d && (!Pn || Rn && 8 < Rn && 11 >= Rn),
                jn = String.fromCharCode(32), Vn = !1;

            function $n(t, e) {
                switch (t) {
                    case"keyup":
                        return -1 !== Ln.indexOf(e.keyCode);
                    case"keydown":
                        return 229 !== e.keyCode;
                    case"keypress":
                    case"mousedown":
                    case"focusout":
                        return !0;
                    default:
                        return !1
                }
            }

            function Wn(t) {
                return "object" === typeof (t = t.detail) && "data" in t ? t.data : null
            }

            var Hn = !1;
            var Yn = {
                color: !0,
                date: !0,
                datetime: !0,
                "datetime-local": !0,
                email: !0,
                month: !0,
                number: !0,
                password: !0,
                range: !0,
                search: !0,
                tel: !0,
                text: !0,
                time: !0,
                url: !0,
                week: !0
            };

            function Qn(t) {
                var e = t && t.nodeName && t.nodeName.toLowerCase();
                return "input" === e ? !!Yn[t.type] : "textarea" === e
            }

            function Kn(t, e, n, r) {
                Dt(r), 0 < (e = Pr(e, "onChange")).length && (n = new hn("onChange", "change", null, n, r), t.push({
                    event: n, listeners: e
                }))
            }

            var qn = null, Gn = null;

            function Jn(t) {
                Or(t, 0)
            }

            function Xn(t) {
                if (J(ii(t))) return t
            }

            function Zn(t, e) {
                if ("change" === t) return e
            }

            var tr = !1;
            if (d) {
                var er;
                if (d) {
                    var nr = "oninput" in document;
                    if (!nr) {
                        var rr = document.createElement("div");
                        rr.setAttribute("oninput", "return;"), nr = "function" === typeof rr.oninput
                    }
                    er = nr
                } else er = !1;
                tr = er && (!document.documentMode || 9 < document.documentMode)
            }

            function ir() {
                qn && (qn.detachEvent("onpropertychange", or), Gn = qn = null)
            }

            function or(t) {
                if ("value" === t.propertyName && Xn(Gn)) {
                    var e = [];
                    if (Kn(e, Gn, t, Tt(t)), t = Jn, Pt) t(e); else {
                        Pt = !0;
                        try {
                            Nt(t, e)
                        } finally {
                            Pt = !1, Ut()
                        }
                    }
                }
            }

            function sr(t, e, n) {
                "focusin" === t ? (ir(), Gn = n, (qn = e).attachEvent("onpropertychange", or)) : "focusout" === t && ir()
            }

            function ar(t) {
                if ("selectionchange" === t || "keyup" === t || "keydown" === t) return Xn(Gn)
            }

            function lr(t, e) {
                if ("click" === t) return Xn(e)
            }

            function ur(t, e) {
                if ("input" === t || "change" === t) return Xn(e)
            }

            var cr = "function" === typeof Object.is ? Object.is : function (t, e) {
                return t === e && (0 !== t || 1 / t === 1 / e) || t !== t && e !== e
            }, dr = Object.prototype.hasOwnProperty;

            function fr(t, e) {
                if (cr(t, e)) return !0;
                if ("object" !== typeof t || null === t || "object" !== typeof e || null === e) return !1;
                var n = Object.keys(t), r = Object.keys(e);
                if (n.length !== r.length) return !1;
                for (r = 0; r < n.length; r++) if (!dr.call(e, n[r]) || !cr(t[n[r]], e[n[r]])) return !1;
                return !0
            }

            function hr(t) {
                for (; t && t.firstChild;) t = t.firstChild;
                return t
            }

            function pr(t, e) {
                var n, r = hr(t);
                for (t = 0; r;) {
                    if (3 === r.nodeType) {
                        if (n = t + r.textContent.length, t <= e && n >= e) return {node: r, offset: e - t};
                        t = n
                    }
                    t:{
                        for (; r;) {
                            if (r.nextSibling) {
                                r = r.nextSibling;
                                break t
                            }
                            r = r.parentNode
                        }
                        r = void 0
                    }
                    r = hr(r)
                }
            }

            function yr(t, e) {
                return !(!t || !e) && (t === e || (!t || 3 !== t.nodeType) && (e && 3 === e.nodeType ? yr(t, e.parentNode) : "contains" in t ? t.contains(e) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(e))))
            }

            function br() {
                for (var t = window, e = X(); e instanceof t.HTMLIFrameElement;) {
                    try {
                        var n = "string" === typeof e.contentWindow.location.href
                    } catch (r) {
                        n = !1
                    }
                    if (!n) break;
                    e = X((t = e.contentWindow).document)
                }
                return e
            }

            function mr(t) {
                var e = t && t.nodeName && t.nodeName.toLowerCase();
                return e && ("input" === e && ("text" === t.type || "search" === t.type || "tel" === t.type || "url" === t.type || "password" === t.type) || "textarea" === e || "true" === t.contentEditable)
            }

            var gr = d && "documentMode" in document && 11 >= document.documentMode, vr = null, wr = null, _r = null,
                Sr = !1;

            function Ir(t, e, n) {
                var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                Sr || null == vr || vr !== X(r) || ("selectionStart" in (r = vr) && mr(r) ? r = {
                    start: r.selectionStart, end: r.selectionEnd
                } : r = {
                    anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset
                }, _r && fr(_r, r) || (_r = r, 0 < (r = Pr(wr, "onSelect")).length && (e = new hn("onSelect", "select", null, e, n), t.push({
                    event: e, listeners: r
                }), e.target = vr)))
            }

            Fe("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), Fe("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), Fe(Me, 2);
            for (var xr = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), kr = 0; kr < xr.length; kr++) Ne.set(xr[kr], 0);
            c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
            var Tr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                Er = new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));

            function Cr(t, e, n) {
                var r = t.type || "unknown-event";
                t.currentTarget = n, function (t, e, n, r, i, o, a, l, u) {
                    if (qt.apply(this, arguments), Wt) {
                        if (!Wt) throw Error(s(198));
                        var c = Ht;
                        Wt = !1, Ht = null, Yt || (Yt = !0, Qt = c)
                    }
                }(r, e, void 0, t), t.currentTarget = null
            }

            function Or(t, e) {
                e = 0 !== (4 & e);
                for (var n = 0; n < t.length; n++) {
                    var r = t[n], i = r.event;
                    r = r.listeners;
                    t:{
                        var o = void 0;
                        if (e) for (var s = r.length - 1; 0 <= s; s--) {
                            var a = r[s], l = a.instance, u = a.currentTarget;
                            if (a = a.listener, l !== o && i.isPropagationStopped()) break t;
                            Cr(i, a, u), o = l
                        } else for (s = 0; s < r.length; s++) {
                            if (l = (a = r[s]).instance, u = a.currentTarget, a = a.listener, l !== o && i.isPropagationStopped()) break t;
                            Cr(i, a, u), o = l
                        }
                    }
                }
                if (Yt) throw t = Qt, Yt = !1, Qt = null, t
            }

            function Ar(t, e) {
                var n = si(e), r = t + "__bubble";
                n.has(r) || (Mr(e, t, 2, !1), n.add(r))
            }

            var Dr = "_reactListening" + Math.random().toString(36).slice(2);

            function Br(t) {
                t[Dr] || (t[Dr] = !0, a.forEach((function (e) {
                    Er.has(e) || Nr(e, !1, t, null), Nr(e, !0, t, null)
                })))
            }

            function Nr(t, e, n, r) {
                var i = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0, o = n;
                if ("selectionchange" === t && 9 !== n.nodeType && (o = n.ownerDocument), null !== r && !e && Er.has(t)) {
                    if ("scroll" !== t) return;
                    i |= 2, o = r
                }
                var s = si(o), a = t + "__" + (e ? "capture" : "bubble");
                s.has(a) || (e && (i |= 4), Mr(o, t, i, e), s.add(a))
            }

            function Mr(t, e, n, r) {
                var i = Ne.get(e);
                switch (void 0 === i ? 2 : i) {
                    case 0:
                        i = Ge;
                        break;
                    case 1:
                        i = Je;
                        break;
                    default:
                        i = Xe
                }
                n = i.bind(null, e, n, t), i = void 0, !jt || "touchstart" !== e && "touchmove" !== e && "wheel" !== e || (i = !0), r ? void 0 !== i ? t.addEventListener(e, n, {
                    capture: !0, passive: i
                }) : t.addEventListener(e, n, !0) : void 0 !== i ? t.addEventListener(e, n, {passive: i}) : t.addEventListener(e, n, !1)
            }

            function Fr(t, e, n, r, i) {
                var o = r;
                if (0 === (1 & e) && 0 === (2 & e) && null !== r) t:for (; ;) {
                    if (null === r) return;
                    var s = r.tag;
                    if (3 === s || 4 === s) {
                        var a = r.stateNode.containerInfo;
                        if (a === i || 8 === a.nodeType && a.parentNode === i) break;
                        if (4 === s) for (s = r.return; null !== s;) {
                            var l = s.tag;
                            if ((3 === l || 4 === l) && ((l = s.stateNode.containerInfo) === i || 8 === l.nodeType && l.parentNode === i)) return;
                            s = s.return
                        }
                        for (; null !== a;) {
                            if (null === (s = ni(a))) return;
                            if (5 === (l = s.tag) || 6 === l) {
                                r = o = s;
                                continue t
                            }
                            a = a.parentNode
                        }
                    }
                    r = r.return
                }
                !function (t, e, n) {
                    if (Rt) return t(e, n);
                    Rt = !0;
                    try {
                        return Lt(t, e, n)
                    } finally {
                        Rt = !1, Ut()
                    }
                }((function () {
                    var r = o, i = Tt(n), s = [];
                    t:{
                        var a = Be.get(t);
                        if (void 0 !== a) {
                            var l = hn, u = t;
                            switch (t) {
                                case"keypress":
                                    if (0 === on(n)) break t;
                                case"keydown":
                                case"keyup":
                                    l = An;
                                    break;
                                case"focusin":
                                    u = "focus", l = vn;
                                    break;
                                case"focusout":
                                    u = "blur", l = vn;
                                    break;
                                case"beforeblur":
                                case"afterblur":
                                    l = vn;
                                    break;
                                case"click":
                                    if (2 === n.button) break t;
                                case"auxclick":
                                case"dblclick":
                                case"mousedown":
                                case"mousemove":
                                case"mouseup":
                                case"mouseout":
                                case"mouseover":
                                case"contextmenu":
                                    l = mn;
                                    break;
                                case"drag":
                                case"dragend":
                                case"dragenter":
                                case"dragexit":
                                case"dragleave":
                                case"dragover":
                                case"dragstart":
                                case"drop":
                                    l = gn;
                                    break;
                                case"touchcancel":
                                case"touchend":
                                case"touchmove":
                                case"touchstart":
                                    l = Bn;
                                    break;
                                case Ce:
                                case Oe:
                                case Ae:
                                    l = wn;
                                    break;
                                case De:
                                    l = Nn;
                                    break;
                                case"scroll":
                                    l = yn;
                                    break;
                                case"wheel":
                                    l = Fn;
                                    break;
                                case"copy":
                                case"cut":
                                case"paste":
                                    l = Sn;
                                    break;
                                case"gotpointercapture":
                                case"lostpointercapture":
                                case"pointercancel":
                                case"pointerdown":
                                case"pointermove":
                                case"pointerout":
                                case"pointerover":
                                case"pointerup":
                                    l = Dn
                            }
                            var c = 0 !== (4 & e), d = !c && "scroll" === t,
                                f = c ? null !== a ? a + "Capture" : null : a;
                            c = [];
                            for (var h, p = r; null !== p;) {
                                var y = (h = p).stateNode;
                                if (5 === h.tag && null !== y && (h = y, null !== f && (null != (y = zt(p, f)) && c.push(Lr(p, y, h)))), d) break;
                                p = p.return
                            }
                            0 < c.length && (a = new l(a, u, null, n, i), s.push({event: a, listeners: c}))
                        }
                    }
                    if (0 === (7 & e)) {
                        if (l = "mouseout" === t || "pointerout" === t, (!(a = "mouseover" === t || "pointerover" === t) || 0 !== (16 & e) || !(u = n.relatedTarget || n.fromElement) || !ni(u) && !u[ti]) && (l || a) && (a = i.window === i ? i : (a = i.ownerDocument) ? a.defaultView || a.parentWindow : window, l ? (l = r, null !== (u = (u = n.relatedTarget || n.toElement) ? ni(u) : null) && (u !== (d = Gt(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (l = null, u = r), l !== u)) {
                            if (c = mn, y = "onMouseLeave", f = "onMouseEnter", p = "mouse", "pointerout" !== t && "pointerover" !== t || (c = Dn, y = "onPointerLeave", f = "onPointerEnter", p = "pointer"), d = null == l ? a : ii(l), h = null == u ? a : ii(u), (a = new c(y, p + "leave", l, n, i)).target = d, a.relatedTarget = h, y = null, ni(i) === r && ((c = new c(f, p + "enter", u, n, i)).target = h, c.relatedTarget = d, y = c), d = y, l && u) t:{
                                for (f = u, p = 0, h = c = l; h; h = Rr(h)) p++;
                                for (h = 0, y = f; y; y = Rr(y)) h++;
                                for (; 0 < p - h;) c = Rr(c), p--;
                                for (; 0 < h - p;) f = Rr(f), h--;
                                for (; p--;) {
                                    if (c === f || null !== f && c === f.alternate) break t;
                                    c = Rr(c), f = Rr(f)
                                }
                                c = null
                            } else c = null;
                            null !== l && Ur(s, a, l, c, !1), null !== u && null !== d && Ur(s, d, u, c, !0)
                        }
                        if ("select" === (l = (a = r ? ii(r) : window).nodeName && a.nodeName.toLowerCase()) || "input" === l && "file" === a.type) var b = Zn; else if (Qn(a)) if (tr) b = ur; else {
                            b = ar;
                            var m = sr
                        } else (l = a.nodeName) && "input" === l.toLowerCase() && ("checkbox" === a.type || "radio" === a.type) && (b = lr);
                        switch (b && (b = b(t, r)) ? Kn(s, b, n, i) : (m && m(t, a, r), "focusout" === t && (m = a._wrapperState) && m.controlled && "number" === a.type && it(a, "number", a.value)), m = r ? ii(r) : window, t) {
                            case"focusin":
                                (Qn(m) || "true" === m.contentEditable) && (vr = m, wr = r, _r = null);
                                break;
                            case"focusout":
                                _r = wr = vr = null;
                                break;
                            case"mousedown":
                                Sr = !0;
                                break;
                            case"contextmenu":
                            case"mouseup":
                            case"dragend":
                                Sr = !1, Ir(s, n, i);
                                break;
                            case"selectionchange":
                                if (gr) break;
                            case"keydown":
                            case"keyup":
                                Ir(s, n, i)
                        }
                        var g;
                        if (Pn) t:{
                            switch (t) {
                                case"compositionstart":
                                    var v = "onCompositionStart";
                                    break t;
                                case"compositionend":
                                    v = "onCompositionEnd";
                                    break t;
                                case"compositionupdate":
                                    v = "onCompositionUpdate";
                                    break t
                            }
                            v = void 0
                        } else Hn ? $n(t, n) && (v = "onCompositionEnd") : "keydown" === t && 229 === n.keyCode && (v = "onCompositionStart");
                        v && (zn && "ko" !== n.locale && (Hn || "onCompositionStart" !== v ? "onCompositionEnd" === v && Hn && (g = rn()) : (en = "value" in (tn = i) ? tn.value : tn.textContent, Hn = !0)), 0 < (m = Pr(r, v)).length && (v = new In(v, t, null, n, i), s.push({
                            event: v, listeners: m
                        }), g ? v.data = g : null !== (g = Wn(n)) && (v.data = g))), (g = Un ? function (t, e) {
                            switch (t) {
                                case"compositionend":
                                    return Wn(e);
                                case"keypress":
                                    return 32 !== e.which ? null : (Vn = !0, jn);
                                case"textInput":
                                    return (t = e.data) === jn && Vn ? null : t;
                                default:
                                    return null
                            }
                        }(t, n) : function (t, e) {
                            if (Hn) return "compositionend" === t || !Pn && $n(t, e) ? (t = rn(), nn = en = tn = null, Hn = !1, t) : null;
                            switch (t) {
                                case"paste":
                                default:
                                    return null;
                                case"keypress":
                                    if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
                                        if (e.char && 1 < e.char.length) return e.char;
                                        if (e.which) return String.fromCharCode(e.which)
                                    }
                                    return null;
                                case"compositionend":
                                    return zn && "ko" !== e.locale ? null : e.data
                            }
                        }(t, n)) && (0 < (r = Pr(r, "onBeforeInput")).length && (i = new In("onBeforeInput", "beforeinput", null, n, i), s.push({
                            event: i, listeners: r
                        }), i.data = g))
                    }
                    Or(s, e)
                }))
            }

            function Lr(t, e, n) {
                return {instance: t, listener: e, currentTarget: n}
            }

            function Pr(t, e) {
                for (var n = e + "Capture", r = []; null !== t;) {
                    var i = t, o = i.stateNode;
                    5 === i.tag && null !== o && (i = o, null != (o = zt(t, n)) && r.unshift(Lr(t, o, i)), null != (o = zt(t, e)) && r.push(Lr(t, o, i))), t = t.return
                }
                return r
            }

            function Rr(t) {
                if (null === t) return null;
                do {
                    t = t.return
                } while (t && 5 !== t.tag);
                return t || null
            }

            function Ur(t, e, n, r, i) {
                for (var o = e._reactName, s = []; null !== n && n !== r;) {
                    var a = n, l = a.alternate, u = a.stateNode;
                    if (null !== l && l === r) break;
                    5 === a.tag && null !== u && (a = u, i ? null != (l = zt(n, o)) && s.unshift(Lr(n, l, a)) : i || null != (l = zt(n, o)) && s.push(Lr(n, l, a))), n = n.return
                }
                0 !== s.length && t.push({event: e, listeners: s})
            }

            function zr() {
            }

            var jr = null, Vr = null;

            function $r(t, e) {
                switch (t) {
                    case"button":
                    case"input":
                    case"select":
                    case"textarea":
                        return !!e.autoFocus
                }
                return !1
            }

            function Wr(t, e) {
                return "textarea" === t || "option" === t || "noscript" === t || "string" === typeof e.children || "number" === typeof e.children || "object" === typeof e.dangerouslySetInnerHTML && null !== e.dangerouslySetInnerHTML && null != e.dangerouslySetInnerHTML.__html
            }

            var Hr = "function" === typeof setTimeout ? setTimeout : void 0,
                Yr = "function" === typeof clearTimeout ? clearTimeout : void 0;

            function Qr(t) {
                1 === t.nodeType ? t.textContent = "" : 9 === t.nodeType && (null != (t = t.body) && (t.textContent = ""))
            }

            function Kr(t) {
                for (; null != t; t = t.nextSibling) {
                    var e = t.nodeType;
                    if (1 === e || 3 === e) break
                }
                return t
            }

            function qr(t) {
                t = t.previousSibling;
                for (var e = 0; t;) {
                    if (8 === t.nodeType) {
                        var n = t.data;
                        if ("$" === n || "$!" === n || "$?" === n) {
                            if (0 === e) return t;
                            e--
                        } else "/$" === n && e++
                    }
                    t = t.previousSibling
                }
                return null
            }

            var Gr = 0;
            var Jr = Math.random().toString(36).slice(2), Xr = "__reactFiber$" + Jr, Zr = "__reactProps$" + Jr,
                ti = "__reactContainer$" + Jr, ei = "__reactEvents$" + Jr;

            function ni(t) {
                var e = t[Xr];
                if (e) return e;
                for (var n = t.parentNode; n;) {
                    if (e = n[ti] || n[Xr]) {
                        if (n = e.alternate, null !== e.child || null !== n && null !== n.child) for (t = qr(t); null !== t;) {
                            if (n = t[Xr]) return n;
                            t = qr(t)
                        }
                        return e
                    }
                    n = (t = n).parentNode
                }
                return null
            }

            function ri(t) {
                return !(t = t[Xr] || t[ti]) || 5 !== t.tag && 6 !== t.tag && 13 !== t.tag && 3 !== t.tag ? null : t
            }

            function ii(t) {
                if (5 === t.tag || 6 === t.tag) return t.stateNode;
                throw Error(s(33))
            }

            function oi(t) {
                return t[Zr] || null
            }

            function si(t) {
                var e = t[ei];
                return void 0 === e && (e = t[ei] = new Set), e
            }

            var ai = [], li = -1;

            function ui(t) {
                return {current: t}
            }

            function ci(t) {
                0 > li || (t.current = ai[li], ai[li] = null, li--)
            }

            function di(t, e) {
                li++, ai[li] = t.current, t.current = e
            }

            var fi = {}, hi = ui(fi), pi = ui(!1), yi = fi;

            function bi(t, e) {
                var n = t.type.contextTypes;
                if (!n) return fi;
                var r = t.stateNode;
                if (r && r.__reactInternalMemoizedUnmaskedChildContext === e) return r.__reactInternalMemoizedMaskedChildContext;
                var i, o = {};
                for (i in n) o[i] = e[i];
                return r && ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = e, t.__reactInternalMemoizedMaskedChildContext = o), o
            }

            function mi(t) {
                return null !== (t = t.childContextTypes) && void 0 !== t
            }

            function gi() {
                ci(pi), ci(hi)
            }

            function vi(t, e, n) {
                if (hi.current !== fi) throw Error(s(168));
                di(hi, e), di(pi, n)
            }

            function wi(t, e, n) {
                var r = t.stateNode;
                if (t = e.childContextTypes, "function" !== typeof r.getChildContext) return n;
                for (var o in r = r.getChildContext()) if (!(o in t)) throw Error(s(108, Q(e) || "Unknown", o));
                return i({}, n, r)
            }

            function _i(t) {
                return t = (t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext || fi, yi = hi.current, di(hi, t), di(pi, pi.current), !0
            }

            function Si(t, e, n) {
                var r = t.stateNode;
                if (!r) throw Error(s(169));
                n ? (t = wi(t, e, yi), r.__reactInternalMemoizedMergedChildContext = t, ci(pi), ci(hi), di(hi, t)) : ci(pi), di(pi, n)
            }

            var Ii = null, xi = null, ki = o.unstable_runWithPriority, Ti = o.unstable_scheduleCallback,
                Ei = o.unstable_cancelCallback, Ci = o.unstable_shouldYield, Oi = o.unstable_requestPaint,
                Ai = o.unstable_now, Di = o.unstable_getCurrentPriorityLevel, Bi = o.unstable_ImmediatePriority,
                Ni = o.unstable_UserBlockingPriority, Mi = o.unstable_NormalPriority, Fi = o.unstable_LowPriority,
                Li = o.unstable_IdlePriority, Pi = {}, Ri = void 0 !== Oi ? Oi : function () {
                }, Ui = null, zi = null, ji = !1, Vi = Ai(), $i = 1e4 > Vi ? Ai : function () {
                    return Ai() - Vi
                };

            function Wi() {
                switch (Di()) {
                    case Bi:
                        return 99;
                    case Ni:
                        return 98;
                    case Mi:
                        return 97;
                    case Fi:
                        return 96;
                    case Li:
                        return 95;
                    default:
                        throw Error(s(332))
                }
            }

            function Hi(t) {
                switch (t) {
                    case 99:
                        return Bi;
                    case 98:
                        return Ni;
                    case 97:
                        return Mi;
                    case 96:
                        return Fi;
                    case 95:
                        return Li;
                    default:
                        throw Error(s(332))
                }
            }

            function Yi(t, e) {
                return t = Hi(t), ki(t, e)
            }

            function Qi(t, e, n) {
                return t = Hi(t), Ti(t, e, n)
            }

            function Ki() {
                if (null !== zi) {
                    var t = zi;
                    zi = null, Ei(t)
                }
                qi()
            }

            function qi() {
                if (!ji && null !== Ui) {
                    ji = !0;
                    var t = 0;
                    try {
                        var e = Ui;
                        Yi(99, (function () {
                            for (; t < e.length; t++) {
                                var n = e[t];
                                do {
                                    n = n(!0)
                                } while (null !== n)
                            }
                        })), Ui = null
                    } catch (n) {
                        throw null !== Ui && (Ui = Ui.slice(t + 1)), Ti(Bi, Ki), n
                    } finally {
                        ji = !1
                    }
                }
            }

            var Gi = _.ReactCurrentBatchConfig;

            function Ji(t, e) {
                if (t && t.defaultProps) {
                    for (var n in e = i({}, e), t = t.defaultProps) void 0 === e[n] && (e[n] = t[n]);
                    return e
                }
                return e
            }

            var Xi = ui(null), Zi = null, to = null, eo = null;

            function no() {
                eo = to = Zi = null
            }

            function ro(t) {
                var e = Xi.current;
                ci(Xi), t.type._context._currentValue = e
            }

            function io(t, e) {
                for (; null !== t;) {
                    var n = t.alternate;
                    if ((t.childLanes & e) === e) {
                        if (null === n || (n.childLanes & e) === e) break;
                        n.childLanes |= e
                    } else t.childLanes |= e, null !== n && (n.childLanes |= e);
                    t = t.return
                }
            }

            function oo(t, e) {
                Zi = t, eo = to = null, null !== (t = t.dependencies) && null !== t.firstContext && (0 !== (t.lanes & e) && (Ps = !0), t.firstContext = null)
            }

            function so(t, e) {
                if (eo !== t && !1 !== e && 0 !== e) if ("number" === typeof e && 1073741823 !== e || (eo = t, e = 1073741823), e = {
                    context: t, observedBits: e, next: null
                }, null === to) {
                    if (null === Zi) throw Error(s(308));
                    to = e, Zi.dependencies = {lanes: 0, firstContext: e, responders: null}
                } else to = to.next = e;
                return t._currentValue
            }

            var ao = !1;

            function lo(t) {
                t.updateQueue = {
                    baseState: t.memoizedState,
                    firstBaseUpdate: null,
                    lastBaseUpdate: null,
                    shared: {pending: null},
                    effects: null
                }
            }

            function uo(t, e) {
                t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
                    baseState: t.baseState,
                    firstBaseUpdate: t.firstBaseUpdate,
                    lastBaseUpdate: t.lastBaseUpdate,
                    shared: t.shared,
                    effects: t.effects
                })
            }

            function co(t, e) {
                return {eventTime: t, lane: e, tag: 0, payload: null, callback: null, next: null}
            }

            function fo(t, e) {
                if (null !== (t = t.updateQueue)) {
                    var n = (t = t.shared).pending;
                    null === n ? e.next = e : (e.next = n.next, n.next = e), t.pending = e
                }
            }

            function ho(t, e) {
                var n = t.updateQueue, r = t.alternate;
                if (null !== r && n === (r = r.updateQueue)) {
                    var i = null, o = null;
                    if (null !== (n = n.firstBaseUpdate)) {
                        do {
                            var s = {
                                eventTime: n.eventTime,
                                lane: n.lane,
                                tag: n.tag,
                                payload: n.payload,
                                callback: n.callback,
                                next: null
                            };
                            null === o ? i = o = s : o = o.next = s, n = n.next
                        } while (null !== n);
                        null === o ? i = o = e : o = o.next = e
                    } else i = o = e;
                    return n = {
                        baseState: r.baseState,
                        firstBaseUpdate: i,
                        lastBaseUpdate: o,
                        shared: r.shared,
                        effects: r.effects
                    }, void (t.updateQueue = n)
                }
                null === (t = n.lastBaseUpdate) ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e
            }

            function po(t, e, n, r) {
                var o = t.updateQueue;
                ao = !1;
                var s = o.firstBaseUpdate, a = o.lastBaseUpdate, l = o.shared.pending;
                if (null !== l) {
                    o.shared.pending = null;
                    var u = l, c = u.next;
                    u.next = null, null === a ? s = c : a.next = c, a = u;
                    var d = t.alternate;
                    if (null !== d) {
                        var f = (d = d.updateQueue).lastBaseUpdate;
                        f !== a && (null === f ? d.firstBaseUpdate = c : f.next = c, d.lastBaseUpdate = u)
                    }
                }
                if (null !== s) {
                    for (f = o.baseState, a = 0, d = c = u = null; ;) {
                        l = s.lane;
                        var h = s.eventTime;
                        if ((r & l) === l) {
                            null !== d && (d = d.next = {
                                eventTime: h, lane: 0, tag: s.tag, payload: s.payload, callback: s.callback, next: null
                            });
                            t:{
                                var p = t, y = s;
                                switch (l = e, h = n, y.tag) {
                                    case 1:
                                        if ("function" === typeof (p = y.payload)) {
                                            f = p.call(h, f, l);
                                            break t
                                        }
                                        f = p;
                                        break t;
                                    case 3:
                                        p.flags = -4097 & p.flags | 64;
                                    case 0:
                                        if (null === (l = "function" === typeof (p = y.payload) ? p.call(h, f, l) : p) || void 0 === l) break t;
                                        f = i({}, f, l);
                                        break t;
                                    case 2:
                                        ao = !0
                                }
                            }
                            null !== s.callback && (t.flags |= 32, null === (l = o.effects) ? o.effects = [s] : l.push(s))
                        } else h = {
                            eventTime: h, lane: l, tag: s.tag, payload: s.payload, callback: s.callback, next: null
                        }, null === d ? (c = d = h, u = f) : d = d.next = h, a |= l;
                        if (null === (s = s.next)) {
                            if (null === (l = o.shared.pending)) break;
                            s = l.next, l.next = null, o.lastBaseUpdate = l, o.shared.pending = null
                        }
                    }
                    null === d && (u = f), o.baseState = u, o.firstBaseUpdate = c, o.lastBaseUpdate = d, Va |= a, t.lanes = a, t.memoizedState = f
                }
            }

            function yo(t, e, n) {
                if (t = e.effects, e.effects = null, null !== t) for (e = 0; e < t.length; e++) {
                    var r = t[e], i = r.callback;
                    if (null !== i) {
                        if (r.callback = null, r = n, "function" !== typeof i) throw Error(s(191, i));
                        i.call(r)
                    }
                }
            }

            var bo = (new r.Component).refs;

            function mo(t, e, n, r) {
                n = null === (n = n(r, e = t.memoizedState)) || void 0 === n ? e : i({}, e, n), t.memoizedState = n, 0 === t.lanes && (t.updateQueue.baseState = n)
            }

            var go = {
                isMounted: function (t) {
                    return !!(t = t._reactInternals) && Gt(t) === t
                }, enqueueSetState: function (t, e, n) {
                    t = t._reactInternals;
                    var r = hl(), i = pl(t), o = co(r, i);
                    o.payload = e, void 0 !== n && null !== n && (o.callback = n), fo(t, o), yl(t, i, r)
                }, enqueueReplaceState: function (t, e, n) {
                    t = t._reactInternals;
                    var r = hl(), i = pl(t), o = co(r, i);
                    o.tag = 1, o.payload = e, void 0 !== n && null !== n && (o.callback = n), fo(t, o), yl(t, i, r)
                }, enqueueForceUpdate: function (t, e) {
                    t = t._reactInternals;
                    var n = hl(), r = pl(t), i = co(n, r);
                    i.tag = 2, void 0 !== e && null !== e && (i.callback = e), fo(t, i), yl(t, r, n)
                }
            };

            function vo(t, e, n, r, i, o, s) {
                return "function" === typeof (t = t.stateNode).shouldComponentUpdate ? t.shouldComponentUpdate(r, o, s) : !e.prototype || !e.prototype.isPureReactComponent || (!fr(n, r) || !fr(i, o))
            }

            function wo(t, e, n) {
                var r = !1, i = fi, o = e.contextType;
                return "object" === typeof o && null !== o ? o = so(o) : (i = mi(e) ? yi : hi.current, o = (r = null !== (r = e.contextTypes) && void 0 !== r) ? bi(t, i) : fi), e = new e(n, o), t.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, e.updater = go, t.stateNode = e, e._reactInternals = t, r && ((t = t.stateNode).__reactInternalMemoizedUnmaskedChildContext = i, t.__reactInternalMemoizedMaskedChildContext = o), e
            }

            function _o(t, e, n, r) {
                t = e.state, "function" === typeof e.componentWillReceiveProps && e.componentWillReceiveProps(n, r), "function" === typeof e.UNSAFE_componentWillReceiveProps && e.UNSAFE_componentWillReceiveProps(n, r), e.state !== t && go.enqueueReplaceState(e, e.state, null)
            }

            function So(t, e, n, r) {
                var i = t.stateNode;
                i.props = n, i.state = t.memoizedState, i.refs = bo, lo(t);
                var o = e.contextType;
                "object" === typeof o && null !== o ? i.context = so(o) : (o = mi(e) ? yi : hi.current, i.context = bi(t, o)), po(t, n, i, r), i.state = t.memoizedState, "function" === typeof (o = e.getDerivedStateFromProps) && (mo(t, e, o, n), i.state = t.memoizedState), "function" === typeof e.getDerivedStateFromProps || "function" === typeof i.getSnapshotBeforeUpdate || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || (e = i.state, "function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), e !== i.state && go.enqueueReplaceState(i, i.state, null), po(t, n, i, r), i.state = t.memoizedState), "function" === typeof i.componentDidMount && (t.flags |= 4)
            }

            var Io = Array.isArray;

            function xo(t, e, n) {
                if (null !== (t = n.ref) && "function" !== typeof t && "object" !== typeof t) {
                    if (n._owner) {
                        if (n = n._owner) {
                            if (1 !== n.tag) throw Error(s(309));
                            var r = n.stateNode
                        }
                        if (!r) throw Error(s(147, t));
                        var i = "" + t;
                        return null !== e && null !== e.ref && "function" === typeof e.ref && e.ref._stringRef === i ? e.ref : (e = function (t) {
                            var e = r.refs;
                            e === bo && (e = r.refs = {}), null === t ? delete e[i] : e[i] = t
                        }, e._stringRef = i, e)
                    }
                    if ("string" !== typeof t) throw Error(s(284));
                    if (!n._owner) throw Error(s(290, t))
                }
                return t
            }

            function ko(t, e) {
                if ("textarea" !== t.type) throw Error(s(31, "[object Object]" === Object.prototype.toString.call(e) ? "object with keys {" + Object.keys(e).join(", ") + "}" : e))
            }

            function To(t) {
                function e(e, n) {
                    if (t) {
                        var r = e.lastEffect;
                        null !== r ? (r.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n, n.nextEffect = null, n.flags = 8
                    }
                }

                function n(n, r) {
                    if (!t) return null;
                    for (; null !== r;) e(n, r), r = r.sibling;
                    return null
                }

                function r(t, e) {
                    for (t = new Map; null !== e;) null !== e.key ? t.set(e.key, e) : t.set(e.index, e), e = e.sibling;
                    return t
                }

                function i(t, e) {
                    return (t = Ql(t, e)).index = 0, t.sibling = null, t
                }

                function o(e, n, r) {
                    return e.index = r, t ? null !== (r = e.alternate) ? (r = r.index) < n ? (e.flags = 2, n) : r : (e.flags = 2, n) : n
                }

                function a(e) {
                    return t && null === e.alternate && (e.flags = 2), e
                }

                function l(t, e, n, r) {
                    return null === e || 6 !== e.tag ? ((e = Jl(n, t.mode, r)).return = t, e) : ((e = i(e, n)).return = t, e)
                }

                function u(t, e, n, r) {
                    return null !== e && e.elementType === n.type ? ((r = i(e, n.props)).ref = xo(t, e, n), r.return = t, r) : ((r = Kl(n.type, n.key, n.props, null, t.mode, r)).ref = xo(t, e, n), r.return = t, r)
                }

                function c(t, e, n, r) {
                    return null === e || 4 !== e.tag || e.stateNode.containerInfo !== n.containerInfo || e.stateNode.implementation !== n.implementation ? ((e = Xl(n, t.mode, r)).return = t, e) : ((e = i(e, n.children || [])).return = t, e)
                }

                function d(t, e, n, r, o) {
                    return null === e || 7 !== e.tag ? ((e = ql(n, t.mode, r, o)).return = t, e) : ((e = i(e, n)).return = t, e)
                }

                function f(t, e, n) {
                    if ("string" === typeof e || "number" === typeof e) return (e = Jl("" + e, t.mode, n)).return = t, e;
                    if ("object" === typeof e && null !== e) {
                        switch (e.$$typeof) {
                            case S:
                                return (n = Kl(e.type, e.key, e.props, null, t.mode, n)).ref = xo(t, null, e), n.return = t, n;
                            case I:
                                return (e = Xl(e, t.mode, n)).return = t, e
                        }
                        if (Io(e) || V(e)) return (e = ql(e, t.mode, n, null)).return = t, e;
                        ko(t, e)
                    }
                    return null
                }

                function h(t, e, n, r) {
                    var i = null !== e ? e.key : null;
                    if ("string" === typeof n || "number" === typeof n) return null !== i ? null : l(t, e, "" + n, r);
                    if ("object" === typeof n && null !== n) {
                        switch (n.$$typeof) {
                            case S:
                                return n.key === i ? n.type === x ? d(t, e, n.props.children, r, i) : u(t, e, n, r) : null;
                            case I:
                                return n.key === i ? c(t, e, n, r) : null
                        }
                        if (Io(n) || V(n)) return null !== i ? null : d(t, e, n, r, null);
                        ko(t, n)
                    }
                    return null
                }

                function p(t, e, n, r, i) {
                    if ("string" === typeof r || "number" === typeof r) return l(e, t = t.get(n) || null, "" + r, i);
                    if ("object" === typeof r && null !== r) {
                        switch (r.$$typeof) {
                            case S:
                                return t = t.get(null === r.key ? n : r.key) || null, r.type === x ? d(e, t, r.props.children, i, r.key) : u(e, t, r, i);
                            case I:
                                return c(e, t = t.get(null === r.key ? n : r.key) || null, r, i)
                        }
                        if (Io(r) || V(r)) return d(e, t = t.get(n) || null, r, i, null);
                        ko(e, r)
                    }
                    return null
                }

                function y(i, s, a, l) {
                    for (var u = null, c = null, d = s, y = s = 0, b = null; null !== d && y < a.length; y++) {
                        d.index > y ? (b = d, d = null) : b = d.sibling;
                        var m = h(i, d, a[y], l);
                        if (null === m) {
                            null === d && (d = b);
                            break
                        }
                        t && d && null === m.alternate && e(i, d), s = o(m, s, y), null === c ? u = m : c.sibling = m, c = m, d = b
                    }
                    if (y === a.length) return n(i, d), u;
                    if (null === d) {
                        for (; y < a.length; y++) null !== (d = f(i, a[y], l)) && (s = o(d, s, y), null === c ? u = d : c.sibling = d, c = d);
                        return u
                    }
                    for (d = r(i, d); y < a.length; y++) null !== (b = p(d, i, y, a[y], l)) && (t && null !== b.alternate && d.delete(null === b.key ? y : b.key), s = o(b, s, y), null === c ? u = b : c.sibling = b, c = b);
                    return t && d.forEach((function (t) {
                        return e(i, t)
                    })), u
                }

                function b(i, a, l, u) {
                    var c = V(l);
                    if ("function" !== typeof c) throw Error(s(150));
                    if (null == (l = c.call(l))) throw Error(s(151));
                    for (var d = c = null, y = a, b = a = 0, m = null, g = l.next(); null !== y && !g.done; b++, g = l.next()) {
                        y.index > b ? (m = y, y = null) : m = y.sibling;
                        var v = h(i, y, g.value, u);
                        if (null === v) {
                            null === y && (y = m);
                            break
                        }
                        t && y && null === v.alternate && e(i, y), a = o(v, a, b), null === d ? c = v : d.sibling = v, d = v, y = m
                    }
                    if (g.done) return n(i, y), c;
                    if (null === y) {
                        for (; !g.done; b++, g = l.next()) null !== (g = f(i, g.value, u)) && (a = o(g, a, b), null === d ? c = g : d.sibling = g, d = g);
                        return c
                    }
                    for (y = r(i, y); !g.done; b++, g = l.next()) null !== (g = p(y, i, b, g.value, u)) && (t && null !== g.alternate && y.delete(null === g.key ? b : g.key), a = o(g, a, b), null === d ? c = g : d.sibling = g, d = g);
                    return t && y.forEach((function (t) {
                        return e(i, t)
                    })), c
                }

                return function (t, r, o, l) {
                    var u = "object" === typeof o && null !== o && o.type === x && null === o.key;
                    u && (o = o.props.children);
                    var c = "object" === typeof o && null !== o;
                    if (c) switch (o.$$typeof) {
                        case S:
                            t:{
                                for (c = o.key, u = r; null !== u;) {
                                    if (u.key === c) {
                                        if (7 === u.tag) {
                                            if (o.type === x) {
                                                n(t, u.sibling), (r = i(u, o.props.children)).return = t, t = r;
                                                break t
                                            }
                                        } else if (u.elementType === o.type) {
                                            n(t, u.sibling), (r = i(u, o.props)).ref = xo(t, u, o), r.return = t, t = r;
                                            break t
                                        }
                                        n(t, u);
                                        break
                                    }
                                    e(t, u), u = u.sibling
                                }
                                o.type === x ? ((r = ql(o.props.children, t.mode, l, o.key)).return = t, t = r) : ((l = Kl(o.type, o.key, o.props, null, t.mode, l)).ref = xo(t, r, o), l.return = t, t = l)
                            }
                            return a(t);
                        case I:
                            t:{
                                for (u = o.key; null !== r;) {
                                    if (r.key === u) {
                                        if (4 === r.tag && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
                                            n(t, r.sibling), (r = i(r, o.children || [])).return = t, t = r;
                                            break t
                                        }
                                        n(t, r);
                                        break
                                    }
                                    e(t, r), r = r.sibling
                                }
                                (r = Xl(o, t.mode, l)).return = t, t = r
                            }
                            return a(t)
                    }
                    if ("string" === typeof o || "number" === typeof o) return o = "" + o, null !== r && 6 === r.tag ? (n(t, r.sibling), (r = i(r, o)).return = t, t = r) : (n(t, r), (r = Jl(o, t.mode, l)).return = t, t = r), a(t);
                    if (Io(o)) return y(t, r, o, l);
                    if (V(o)) return b(t, r, o, l);
                    if (c && ko(t, o), "undefined" === typeof o && !u) switch (t.tag) {
                        case 1:
                        case 22:
                        case 0:
                        case 11:
                        case 15:
                            throw Error(s(152, Q(t.type) || "Component"))
                    }
                    return n(t, r)
                }
            }

            var Eo = To(!0), Co = To(!1), Oo = {}, Ao = ui(Oo), Do = ui(Oo), Bo = ui(Oo);

            function No(t) {
                if (t === Oo) throw Error(s(174));
                return t
            }

            function Mo(t, e) {
                switch (di(Bo, e), di(Do, t), di(Ao, Oo), t = e.nodeType) {
                    case 9:
                    case 11:
                        e = (e = e.documentElement) ? e.namespaceURI : pt(null, "");
                        break;
                    default:
                        e = pt(e = (t = 8 === t ? e.parentNode : e).namespaceURI || null, t = t.tagName)
                }
                ci(Ao), di(Ao, e)
            }

            function Fo() {
                ci(Ao), ci(Do), ci(Bo)
            }

            function Lo(t) {
                No(Bo.current);
                var e = No(Ao.current), n = pt(e, t.type);
                e !== n && (di(Do, t), di(Ao, n))
            }

            function Po(t) {
                Do.current === t && (ci(Ao), ci(Do))
            }

            var Ro = ui(0);

            function Uo(t) {
                for (var e = t; null !== e;) {
                    if (13 === e.tag) {
                        var n = e.memoizedState;
                        if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return e
                    } else if (19 === e.tag && void 0 !== e.memoizedProps.revealOrder) {
                        if (0 !== (64 & e.flags)) return e
                    } else if (null !== e.child) {
                        e.child.return = e, e = e.child;
                        continue
                    }
                    if (e === t) break;
                    for (; null === e.sibling;) {
                        if (null === e.return || e.return === t) return null;
                        e = e.return
                    }
                    e.sibling.return = e.return, e = e.sibling
                }
                return null
            }

            var zo = null, jo = null, Vo = !1;

            function $o(t, e) {
                var n = Hl(5, null, null, 0);
                n.elementType = "DELETED", n.type = "DELETED", n.stateNode = e, n.return = t, n.flags = 8, null !== t.lastEffect ? (t.lastEffect.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n
            }

            function Wo(t, e) {
                switch (t.tag) {
                    case 5:
                        var n = t.type;
                        return null !== (e = 1 !== e.nodeType || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e) && (t.stateNode = e, !0);
                    case 6:
                        return null !== (e = "" === t.pendingProps || 3 !== e.nodeType ? null : e) && (t.stateNode = e, !0);
                    default:
                        return !1
                }
            }

            function Ho(t) {
                if (Vo) {
                    var e = jo;
                    if (e) {
                        var n = e;
                        if (!Wo(t, e)) {
                            if (!(e = Kr(n.nextSibling)) || !Wo(t, e)) return t.flags = -1025 & t.flags | 2, Vo = !1, void (zo = t);
                            $o(zo, n)
                        }
                        zo = t, jo = Kr(e.firstChild)
                    } else t.flags = -1025 & t.flags | 2, Vo = !1, zo = t
                }
            }

            function Yo(t) {
                for (t = t.return; null !== t && 5 !== t.tag && 3 !== t.tag && 13 !== t.tag;) t = t.return;
                zo = t
            }

            function Qo(t) {
                if (t !== zo) return !1;
                if (!Vo) return Yo(t), Vo = !0, !1;
                var e = t.type;
                if (5 !== t.tag || "head" !== e && "body" !== e && !Wr(e, t.memoizedProps)) for (e = jo; e;) $o(t, e), e = Kr(e.nextSibling);
                if (Yo(t), 13 === t.tag) {
                    if (!(t = null !== (t = t.memoizedState) ? t.dehydrated : null)) throw Error(s(317));
                    t:{
                        for (t = t.nextSibling, e = 0; t;) {
                            if (8 === t.nodeType) {
                                var n = t.data;
                                if ("/$" === n) {
                                    if (0 === e) {
                                        jo = Kr(t.nextSibling);
                                        break t
                                    }
                                    e--
                                } else "$" !== n && "$!" !== n && "$?" !== n || e++
                            }
                            t = t.nextSibling
                        }
                        jo = null
                    }
                } else jo = zo ? Kr(t.stateNode.nextSibling) : null;
                return !0
            }

            function Ko() {
                jo = zo = null, Vo = !1
            }

            var qo = [];

            function Go() {
                for (var t = 0; t < qo.length; t++) qo[t]._workInProgressVersionPrimary = null;
                qo.length = 0
            }

            var Jo = _.ReactCurrentDispatcher, Xo = _.ReactCurrentBatchConfig, Zo = 0, ts = null, es = null, ns = null,
                rs = !1, is = !1;

            function os() {
                throw Error(s(321))
            }

            function ss(t, e) {
                if (null === e) return !1;
                for (var n = 0; n < e.length && n < t.length; n++) if (!cr(t[n], e[n])) return !1;
                return !0
            }

            function as(t, e, n, r, i, o) {
                if (Zo = o, ts = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, Jo.current = null === t || null === t.memoizedState ? Ns : Ms, t = n(r, i), is) {
                    o = 0;
                    do {
                        if (is = !1, !(25 > o)) throw Error(s(301));
                        o += 1, ns = es = null, e.updateQueue = null, Jo.current = Fs, t = n(r, i)
                    } while (is)
                }
                if (Jo.current = Bs, e = null !== es && null !== es.next, Zo = 0, ns = es = ts = null, rs = !1, e) throw Error(s(300));
                return t
            }

            function ls() {
                var t = {memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null};
                return null === ns ? ts.memoizedState = ns = t : ns = ns.next = t, ns
            }

            function us() {
                if (null === es) {
                    var t = ts.alternate;
                    t = null !== t ? t.memoizedState : null
                } else t = es.next;
                var e = null === ns ? ts.memoizedState : ns.next;
                if (null !== e) ns = e, es = t; else {
                    if (null === t) throw Error(s(310));
                    t = {
                        memoizedState: (es = t).memoizedState,
                        baseState: es.baseState,
                        baseQueue: es.baseQueue,
                        queue: es.queue,
                        next: null
                    }, null === ns ? ts.memoizedState = ns = t : ns = ns.next = t
                }
                return ns
            }

            function cs(t, e) {
                return "function" === typeof e ? e(t) : e
            }

            function ds(t) {
                var e = us(), n = e.queue;
                if (null === n) throw Error(s(311));
                n.lastRenderedReducer = t;
                var r = es, i = r.baseQueue, o = n.pending;
                if (null !== o) {
                    if (null !== i) {
                        var a = i.next;
                        i.next = o.next, o.next = a
                    }
                    r.baseQueue = i = o, n.pending = null
                }
                if (null !== i) {
                    i = i.next, r = r.baseState;
                    var l = a = o = null, u = i;
                    do {
                        var c = u.lane;
                        if ((Zo & c) === c) null !== l && (l = l.next = {
                            lane: 0,
                            action: u.action,
                            eagerReducer: u.eagerReducer,
                            eagerState: u.eagerState,
                            next: null
                        }), r = u.eagerReducer === t ? u.eagerState : t(r, u.action); else {
                            var d = {
                                lane: c,
                                action: u.action,
                                eagerReducer: u.eagerReducer,
                                eagerState: u.eagerState,
                                next: null
                            };
                            null === l ? (a = l = d, o = r) : l = l.next = d, ts.lanes |= c, Va |= c
                        }
                        u = u.next
                    } while (null !== u && u !== i);
                    null === l ? o = r : l.next = a, cr(r, e.memoizedState) || (Ps = !0), e.memoizedState = r, e.baseState = o, e.baseQueue = l, n.lastRenderedState = r
                }
                return [e.memoizedState, n.dispatch]
            }

            function fs(t) {
                var e = us(), n = e.queue;
                if (null === n) throw Error(s(311));
                n.lastRenderedReducer = t;
                var r = n.dispatch, i = n.pending, o = e.memoizedState;
                if (null !== i) {
                    n.pending = null;
                    var a = i = i.next;
                    do {
                        o = t(o, a.action), a = a.next
                    } while (a !== i);
                    cr(o, e.memoizedState) || (Ps = !0), e.memoizedState = o, null === e.baseQueue && (e.baseState = o), n.lastRenderedState = o
                }
                return [o, r]
            }

            function hs(t, e, n) {
                var r = e._getVersion;
                r = r(e._source);
                var i = e._workInProgressVersionPrimary;
                if (null !== i ? t = i === r : (t = t.mutableReadLanes, (t = (Zo & t) === t) && (e._workInProgressVersionPrimary = r, qo.push(e))), t) return n(e._source);
                throw qo.push(e), Error(s(350))
            }

            function ps(t, e, n, r) {
                var i = Ma;
                if (null === i) throw Error(s(349));
                var o = e._getVersion, a = o(e._source), l = Jo.current, u = l.useState((function () {
                    return hs(i, e, n)
                })), c = u[1], d = u[0];
                u = ns;
                var f = t.memoizedState, h = f.refs, p = h.getSnapshot, y = f.source;
                f = f.subscribe;
                var b = ts;
                return t.memoizedState = {refs: h, source: e, subscribe: r}, l.useEffect((function () {
                    h.getSnapshot = n, h.setSnapshot = c;
                    var t = o(e._source);
                    if (!cr(a, t)) {
                        t = n(e._source), cr(d, t) || (c(t), t = pl(b), i.mutableReadLanes |= t & i.pendingLanes), t = i.mutableReadLanes, i.entangledLanes |= t;
                        for (var r = i.entanglements, s = t; 0 < s;) {
                            var l = 31 - We(s), u = 1 << l;
                            r[l] |= t, s &= ~u
                        }
                    }
                }), [n, e, r]), l.useEffect((function () {
                    return r(e._source, (function () {
                        var t = h.getSnapshot, n = h.setSnapshot;
                        try {
                            n(t(e._source));
                            var r = pl(b);
                            i.mutableReadLanes |= r & i.pendingLanes
                        } catch (o) {
                            n((function () {
                                throw o
                            }))
                        }
                    }))
                }), [e, r]), cr(p, n) && cr(y, e) && cr(f, r) || ((t = {
                    pending: null, dispatch: null, lastRenderedReducer: cs, lastRenderedState: d
                }).dispatch = c = Ds.bind(null, ts, t), u.queue = t, u.baseQueue = null, d = hs(i, e, n), u.memoizedState = u.baseState = d), d
            }

            function ys(t, e, n) {
                return ps(us(), t, e, n)
            }

            function bs(t) {
                var e = ls();
                return "function" === typeof t && (t = t()), e.memoizedState = e.baseState = t, t = (t = e.queue = {
                    pending: null, dispatch: null, lastRenderedReducer: cs, lastRenderedState: t
                }).dispatch = Ds.bind(null, ts, t), [e.memoizedState, t]
            }

            function ms(t, e, n, r) {
                return t = {
                    tag: t, create: e, destroy: n, deps: r, next: null
                }, null === (e = ts.updateQueue) ? (e = {lastEffect: null}, ts.updateQueue = e, e.lastEffect = t.next = t) : null === (n = e.lastEffect) ? e.lastEffect = t.next = t : (r = n.next, n.next = t, t.next = r, e.lastEffect = t), t
            }

            function gs(t) {
                return t = {current: t}, ls().memoizedState = t
            }

            function vs() {
                return us().memoizedState
            }

            function ws(t, e, n, r) {
                var i = ls();
                ts.flags |= t, i.memoizedState = ms(1 | e, n, void 0, void 0 === r ? null : r)
            }

            function _s(t, e, n, r) {
                var i = us();
                r = void 0 === r ? null : r;
                var o = void 0;
                if (null !== es) {
                    var s = es.memoizedState;
                    if (o = s.destroy, null !== r && ss(r, s.deps)) return void ms(e, n, o, r)
                }
                ts.flags |= t, i.memoizedState = ms(1 | e, n, o, r)
            }

            function Ss(t, e) {
                return ws(516, 4, t, e)
            }

            function Is(t, e) {
                return _s(516, 4, t, e)
            }

            function xs(t, e) {
                return _s(4, 2, t, e)
            }

            function ks(t, e) {
                return "function" === typeof e ? (t = t(), e(t), function () {
                    e(null)
                }) : null !== e && void 0 !== e ? (t = t(), e.current = t, function () {
                    e.current = null
                }) : void 0
            }

            function Ts(t, e, n) {
                return n = null !== n && void 0 !== n ? n.concat([t]) : null, _s(4, 2, ks.bind(null, e, t), n)
            }

            function Es() {
            }

            function Cs(t, e) {
                var n = us();
                e = void 0 === e ? null : e;
                var r = n.memoizedState;
                return null !== r && null !== e && ss(e, r[1]) ? r[0] : (n.memoizedState = [t, e], t)
            }

            function Os(t, e) {
                var n = us();
                e = void 0 === e ? null : e;
                var r = n.memoizedState;
                return null !== r && null !== e && ss(e, r[1]) ? r[0] : (t = t(), n.memoizedState = [t, e], t)
            }

            function As(t, e) {
                var n = Wi();
                Yi(98 > n ? 98 : n, (function () {
                    t(!0)
                })), Yi(97 < n ? 97 : n, (function () {
                    var n = Xo.transition;
                    Xo.transition = 1;
                    try {
                        t(!1), e()
                    } finally {
                        Xo.transition = n
                    }
                }))
            }

            function Ds(t, e, n) {
                var r = hl(), i = pl(t), o = {lane: i, action: n, eagerReducer: null, eagerState: null, next: null},
                    s = e.pending;
                if (null === s ? o.next = o : (o.next = s.next, s.next = o), e.pending = o, s = t.alternate, t === ts || null !== s && s === ts) is = rs = !0; else {
                    if (0 === t.lanes && (null === s || 0 === s.lanes) && null !== (s = e.lastRenderedReducer)) try {
                        var a = e.lastRenderedState, l = s(a, n);
                        if (o.eagerReducer = s, o.eagerState = l, cr(l, a)) return
                    } catch (u) {
                    }
                    yl(t, i, r)
                }
            }

            var Bs = {
                readContext: so,
                useCallback: os,
                useContext: os,
                useEffect: os,
                useImperativeHandle: os,
                useLayoutEffect: os,
                useMemo: os,
                useReducer: os,
                useRef: os,
                useState: os,
                useDebugValue: os,
                useDeferredValue: os,
                useTransition: os,
                useMutableSource: os,
                useOpaqueIdentifier: os,
                unstable_isNewReconciler: !1
            }, Ns = {
                readContext: so, useCallback: function (t, e) {
                    return ls().memoizedState = [t, void 0 === e ? null : e], t
                }, useContext: so, useEffect: Ss, useImperativeHandle: function (t, e, n) {
                    return n = null !== n && void 0 !== n ? n.concat([t]) : null, ws(4, 2, ks.bind(null, e, t), n)
                }, useLayoutEffect: function (t, e) {
                    return ws(4, 2, t, e)
                }, useMemo: function (t, e) {
                    var n = ls();
                    return e = void 0 === e ? null : e, t = t(), n.memoizedState = [t, e], t
                }, useReducer: function (t, e, n) {
                    var r = ls();
                    return e = void 0 !== n ? n(e) : e, r.memoizedState = r.baseState = e, t = (t = r.queue = {
                        pending: null, dispatch: null, lastRenderedReducer: t, lastRenderedState: e
                    }).dispatch = Ds.bind(null, ts, t), [r.memoizedState, t]
                }, useRef: gs, useState: bs, useDebugValue: Es, useDeferredValue: function (t) {
                    var e = bs(t), n = e[0], r = e[1];
                    return Ss((function () {
                        var e = Xo.transition;
                        Xo.transition = 1;
                        try {
                            r(t)
                        } finally {
                            Xo.transition = e
                        }
                    }), [t]), n
                }, useTransition: function () {
                    var t = bs(!1), e = t[0];
                    return gs(t = As.bind(null, t[1])), [t, e]
                }, useMutableSource: function (t, e, n) {
                    var r = ls();
                    return r.memoizedState = {
                        refs: {getSnapshot: e, setSnapshot: null}, source: t, subscribe: n
                    }, ps(r, t, e, n)
                }, useOpaqueIdentifier: function () {
                    if (Vo) {
                        var t = !1, e = function (t) {
                            return {$$typeof: F, toString: t, valueOf: t}
                        }((function () {
                            throw t || (t = !0, n("r:" + (Gr++).toString(36))), Error(s(355))
                        })), n = bs(e)[1];
                        return 0 === (2 & ts.mode) && (ts.flags |= 516, ms(5, (function () {
                            n("r:" + (Gr++).toString(36))
                        }), void 0, null)), e
                    }
                    return bs(e = "r:" + (Gr++).toString(36)), e
                }, unstable_isNewReconciler: !1
            }, Ms = {
                readContext: so,
                useCallback: Cs,
                useContext: so,
                useEffect: Is,
                useImperativeHandle: Ts,
                useLayoutEffect: xs,
                useMemo: Os,
                useReducer: ds,
                useRef: vs,
                useState: function () {
                    return ds(cs)
                },
                useDebugValue: Es,
                useDeferredValue: function (t) {
                    var e = ds(cs), n = e[0], r = e[1];
                    return Is((function () {
                        var e = Xo.transition;
                        Xo.transition = 1;
                        try {
                            r(t)
                        } finally {
                            Xo.transition = e
                        }
                    }), [t]), n
                },
                useTransition: function () {
                    var t = ds(cs)[0];
                    return [vs().current, t]
                },
                useMutableSource: ys,
                useOpaqueIdentifier: function () {
                    return ds(cs)[0]
                },
                unstable_isNewReconciler: !1
            }, Fs = {
                readContext: so,
                useCallback: Cs,
                useContext: so,
                useEffect: Is,
                useImperativeHandle: Ts,
                useLayoutEffect: xs,
                useMemo: Os,
                useReducer: fs,
                useRef: vs,
                useState: function () {
                    return fs(cs)
                },
                useDebugValue: Es,
                useDeferredValue: function (t) {
                    var e = fs(cs), n = e[0], r = e[1];
                    return Is((function () {
                        var e = Xo.transition;
                        Xo.transition = 1;
                        try {
                            r(t)
                        } finally {
                            Xo.transition = e
                        }
                    }), [t]), n
                },
                useTransition: function () {
                    var t = fs(cs)[0];
                    return [vs().current, t]
                },
                useMutableSource: ys,
                useOpaqueIdentifier: function () {
                    return fs(cs)[0]
                },
                unstable_isNewReconciler: !1
            }, Ls = _.ReactCurrentOwner, Ps = !1;

            function Rs(t, e, n, r) {
                e.child = null === t ? Co(e, null, n, r) : Eo(e, t.child, n, r)
            }

            function Us(t, e, n, r, i) {
                n = n.render;
                var o = e.ref;
                return oo(e, i), r = as(t, e, n, r, o, i), null === t || Ps ? (e.flags |= 1, Rs(t, e, r, i), e.child) : (e.updateQueue = t.updateQueue, e.flags &= -517, t.lanes &= ~i, sa(t, e, i))
            }

            function zs(t, e, n, r, i, o) {
                if (null === t) {
                    var s = n.type;
                    return "function" !== typeof s || Yl(s) || void 0 !== s.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((t = Kl(n.type, null, r, e, e.mode, o)).ref = e.ref, t.return = e, e.child = t) : (e.tag = 15, e.type = s, js(t, e, s, r, i, o))
                }
                return s = t.child, 0 === (i & o) && (i = s.memoizedProps, (n = null !== (n = n.compare) ? n : fr)(i, r) && t.ref === e.ref) ? sa(t, e, o) : (e.flags |= 1, (t = Ql(s, r)).ref = e.ref, t.return = e, e.child = t)
            }

            function js(t, e, n, r, i, o) {
                if (null !== t && fr(t.memoizedProps, r) && t.ref === e.ref) {
                    if (Ps = !1, 0 === (o & i)) return e.lanes = t.lanes, sa(t, e, o);
                    0 !== (16384 & t.flags) && (Ps = !0)
                }
                return Ws(t, e, n, r, o)
            }

            function Vs(t, e, n) {
                var r = e.pendingProps, i = r.children, o = null !== t ? t.memoizedState : null;
                if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode) if (0 === (4 & e.mode)) e.memoizedState = {baseLanes: 0}, Il(e, n); else {
                    if (0 === (1073741824 & n)) return t = null !== o ? o.baseLanes | n : n, e.lanes = e.childLanes = 1073741824, e.memoizedState = {baseLanes: t}, Il(e, t), null;
                    e.memoizedState = {baseLanes: 0}, Il(e, null !== o ? o.baseLanes : n)
                } else null !== o ? (r = o.baseLanes | n, e.memoizedState = null) : r = n, Il(e, r);
                return Rs(t, e, i, n), e.child
            }

            function $s(t, e) {
                var n = e.ref;
                (null === t && null !== n || null !== t && t.ref !== n) && (e.flags |= 128)
            }

            function Ws(t, e, n, r, i) {
                var o = mi(n) ? yi : hi.current;
                return o = bi(e, o), oo(e, i), n = as(t, e, n, r, o, i), null === t || Ps ? (e.flags |= 1, Rs(t, e, n, i), e.child) : (e.updateQueue = t.updateQueue, e.flags &= -517, t.lanes &= ~i, sa(t, e, i))
            }

            function Hs(t, e, n, r, i) {
                if (mi(n)) {
                    var o = !0;
                    _i(e)
                } else o = !1;
                if (oo(e, i), null === e.stateNode) null !== t && (t.alternate = null, e.alternate = null, e.flags |= 2), wo(e, n, r), So(e, n, r, i), r = !0; else if (null === t) {
                    var s = e.stateNode, a = e.memoizedProps;
                    s.props = a;
                    var l = s.context, u = n.contextType;
                    "object" === typeof u && null !== u ? u = so(u) : u = bi(e, u = mi(n) ? yi : hi.current);
                    var c = n.getDerivedStateFromProps,
                        d = "function" === typeof c || "function" === typeof s.getSnapshotBeforeUpdate;
                    d || "function" !== typeof s.UNSAFE_componentWillReceiveProps && "function" !== typeof s.componentWillReceiveProps || (a !== r || l !== u) && _o(e, s, r, u), ao = !1;
                    var f = e.memoizedState;
                    s.state = f, po(e, r, s, i), l = e.memoizedState, a !== r || f !== l || pi.current || ao ? ("function" === typeof c && (mo(e, n, c, r), l = e.memoizedState), (a = ao || vo(e, n, a, r, f, l, u)) ? (d || "function" !== typeof s.UNSAFE_componentWillMount && "function" !== typeof s.componentWillMount || ("function" === typeof s.componentWillMount && s.componentWillMount(), "function" === typeof s.UNSAFE_componentWillMount && s.UNSAFE_componentWillMount()), "function" === typeof s.componentDidMount && (e.flags |= 4)) : ("function" === typeof s.componentDidMount && (e.flags |= 4), e.memoizedProps = r, e.memoizedState = l), s.props = r, s.state = l, s.context = u, r = a) : ("function" === typeof s.componentDidMount && (e.flags |= 4), r = !1)
                } else {
                    s = e.stateNode, uo(t, e), a = e.memoizedProps, u = e.type === e.elementType ? a : Ji(e.type, a), s.props = u, d = e.pendingProps, f = s.context, "object" === typeof (l = n.contextType) && null !== l ? l = so(l) : l = bi(e, l = mi(n) ? yi : hi.current);
                    var h = n.getDerivedStateFromProps;
                    (c = "function" === typeof h || "function" === typeof s.getSnapshotBeforeUpdate) || "function" !== typeof s.UNSAFE_componentWillReceiveProps && "function" !== typeof s.componentWillReceiveProps || (a !== d || f !== l) && _o(e, s, r, l), ao = !1, f = e.memoizedState, s.state = f, po(e, r, s, i);
                    var p = e.memoizedState;
                    a !== d || f !== p || pi.current || ao ? ("function" === typeof h && (mo(e, n, h, r), p = e.memoizedState), (u = ao || vo(e, n, u, r, f, p, l)) ? (c || "function" !== typeof s.UNSAFE_componentWillUpdate && "function" !== typeof s.componentWillUpdate || ("function" === typeof s.componentWillUpdate && s.componentWillUpdate(r, p, l), "function" === typeof s.UNSAFE_componentWillUpdate && s.UNSAFE_componentWillUpdate(r, p, l)), "function" === typeof s.componentDidUpdate && (e.flags |= 4), "function" === typeof s.getSnapshotBeforeUpdate && (e.flags |= 256)) : ("function" !== typeof s.componentDidUpdate || a === t.memoizedProps && f === t.memoizedState || (e.flags |= 4), "function" !== typeof s.getSnapshotBeforeUpdate || a === t.memoizedProps && f === t.memoizedState || (e.flags |= 256), e.memoizedProps = r, e.memoizedState = p), s.props = r, s.state = p, s.context = l, r = u) : ("function" !== typeof s.componentDidUpdate || a === t.memoizedProps && f === t.memoizedState || (e.flags |= 4), "function" !== typeof s.getSnapshotBeforeUpdate || a === t.memoizedProps && f === t.memoizedState || (e.flags |= 256), r = !1)
                }
                return Ys(t, e, n, r, o, i)
            }

            function Ys(t, e, n, r, i, o) {
                $s(t, e);
                var s = 0 !== (64 & e.flags);
                if (!r && !s) return i && Si(e, n, !1), sa(t, e, o);
                r = e.stateNode, Ls.current = e;
                var a = s && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
                return e.flags |= 1, null !== t && s ? (e.child = Eo(e, t.child, null, o), e.child = Eo(e, null, a, o)) : Rs(t, e, a, o), e.memoizedState = r.state, i && Si(e, n, !0), e.child
            }

            function Qs(t) {
                var e = t.stateNode;
                e.pendingContext ? vi(0, e.pendingContext, e.pendingContext !== e.context) : e.context && vi(0, e.context, !1), Mo(t, e.containerInfo)
            }

            var Ks, qs, Gs, Js, Xs = {dehydrated: null, retryLane: 0};

            function Zs(t, e, n) {
                var r, i = e.pendingProps, o = Ro.current, s = !1;
                return (r = 0 !== (64 & e.flags)) || (r = (null === t || null !== t.memoizedState) && 0 !== (2 & o)), r ? (s = !0, e.flags &= -65) : null !== t && null === t.memoizedState || void 0 === i.fallback || !0 === i.unstable_avoidThisFallback || (o |= 1), di(Ro, 1 & o), null === t ? (void 0 !== i.fallback && Ho(e), t = i.children, o = i.fallback, s ? (t = ta(e, t, o, n), e.child.memoizedState = {baseLanes: n}, e.memoizedState = Xs, t) : "number" === typeof i.unstable_expectedLoadTime ? (t = ta(e, t, o, n), e.child.memoizedState = {baseLanes: n}, e.memoizedState = Xs, e.lanes = 33554432, t) : ((n = Gl({
                    mode: "visible", children: t
                }, e.mode, n, null)).return = e, e.child = n)) : (t.memoizedState, s ? (i = na(t, e, i.children, i.fallback, n), s = e.child, o = t.child.memoizedState, s.memoizedState = null === o ? {baseLanes: n} : {baseLanes: o.baseLanes | n}, s.childLanes = t.childLanes & ~n, e.memoizedState = Xs, i) : (n = ea(t, e, i.children, n), e.memoizedState = null, n))
            }

            function ta(t, e, n, r) {
                var i = t.mode, o = t.child;
                return e = {
                    mode: "hidden", children: e
                }, 0 === (2 & i) && null !== o ? (o.childLanes = 0, o.pendingProps = e) : o = Gl(e, i, 0, null), n = ql(n, i, r, null), o.return = t, n.return = t, o.sibling = n, t.child = o, n
            }

            function ea(t, e, n, r) {
                var i = t.child;
                return t = i.sibling, n = Ql(i, {
                    mode: "visible", children: n
                }), 0 === (2 & e.mode) && (n.lanes = r), n.return = e, n.sibling = null, null !== t && (t.nextEffect = null, t.flags = 8, e.firstEffect = e.lastEffect = t), e.child = n
            }

            function na(t, e, n, r, i) {
                var o = e.mode, s = t.child;
                t = s.sibling;
                var a = {mode: "hidden", children: n};
                return 0 === (2 & o) && e.child !== s ? ((n = e.child).childLanes = 0, n.pendingProps = a, null !== (s = n.lastEffect) ? (e.firstEffect = n.firstEffect, e.lastEffect = s, s.nextEffect = null) : e.firstEffect = e.lastEffect = null) : n = Ql(s, a), null !== t ? r = Ql(t, r) : (r = ql(r, o, i, null)).flags |= 2, r.return = e, n.return = e, n.sibling = r, e.child = n, r
            }

            function ra(t, e) {
                t.lanes |= e;
                var n = t.alternate;
                null !== n && (n.lanes |= e), io(t.return, e)
            }

            function ia(t, e, n, r, i, o) {
                var s = t.memoizedState;
                null === s ? t.memoizedState = {
                    isBackwards: e, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i, lastEffect: o
                } : (s.isBackwards = e, s.rendering = null, s.renderingStartTime = 0, s.last = r, s.tail = n, s.tailMode = i, s.lastEffect = o)
            }

            function oa(t, e, n) {
                var r = e.pendingProps, i = r.revealOrder, o = r.tail;
                if (Rs(t, e, r.children, n), 0 !== (2 & (r = Ro.current))) r = 1 & r | 2, e.flags |= 64; else {
                    if (null !== t && 0 !== (64 & t.flags)) t:for (t = e.child; null !== t;) {
                        if (13 === t.tag) null !== t.memoizedState && ra(t, n); else if (19 === t.tag) ra(t, n); else if (null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === e) break t;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) break t;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                    r &= 1
                }
                if (di(Ro, r), 0 === (2 & e.mode)) e.memoizedState = null; else switch (i) {
                    case"forwards":
                        for (n = e.child, i = null; null !== n;) null !== (t = n.alternate) && null === Uo(t) && (i = n), n = n.sibling;
                        null === (n = i) ? (i = e.child, e.child = null) : (i = n.sibling, n.sibling = null), ia(e, !1, i, n, o, e.lastEffect);
                        break;
                    case"backwards":
                        for (n = null, i = e.child, e.child = null; null !== i;) {
                            if (null !== (t = i.alternate) && null === Uo(t)) {
                                e.child = i;
                                break
                            }
                            t = i.sibling, i.sibling = n, n = i, i = t
                        }
                        ia(e, !0, n, null, o, e.lastEffect);
                        break;
                    case"together":
                        ia(e, !1, null, null, void 0, e.lastEffect);
                        break;
                    default:
                        e.memoizedState = null
                }
                return e.child
            }

            function sa(t, e, n) {
                if (null !== t && (e.dependencies = t.dependencies), Va |= e.lanes, 0 !== (n & e.childLanes)) {
                    if (null !== t && e.child !== t.child) throw Error(s(153));
                    if (null !== e.child) {
                        for (n = Ql(t = e.child, t.pendingProps), e.child = n, n.return = e; null !== t.sibling;) t = t.sibling, (n = n.sibling = Ql(t, t.pendingProps)).return = e;
                        n.sibling = null
                    }
                    return e.child
                }
                return null
            }

            function aa(t, e) {
                if (!Vo) switch (t.tailMode) {
                    case"hidden":
                        e = t.tail;
                        for (var n = null; null !== e;) null !== e.alternate && (n = e), e = e.sibling;
                        null === n ? t.tail = null : n.sibling = null;
                        break;
                    case"collapsed":
                        n = t.tail;
                        for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                        null === r ? e || null === t.tail ? t.tail = null : t.tail.sibling = null : r.sibling = null
                }
            }

            function la(t, e, n) {
                var r = e.pendingProps;
                switch (e.tag) {
                    case 2:
                    case 16:
                    case 15:
                    case 0:
                    case 11:
                    case 7:
                    case 8:
                    case 12:
                    case 9:
                    case 14:
                        return null;
                    case 1:
                    case 17:
                        return mi(e.type) && gi(), null;
                    case 3:
                        return Fo(), ci(pi), ci(hi), Go(), (r = e.stateNode).pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== t && null !== t.child || (Qo(e) ? e.flags |= 4 : r.hydrate || (e.flags |= 256)), qs(e), null;
                    case 5:
                        Po(e);
                        var o = No(Bo.current);
                        if (n = e.type, null !== t && null != e.stateNode) Gs(t, e, n, r, o), t.ref !== e.ref && (e.flags |= 128); else {
                            if (!r) {
                                if (null === e.stateNode) throw Error(s(166));
                                return null
                            }
                            if (t = No(Ao.current), Qo(e)) {
                                r = e.stateNode, n = e.type;
                                var a = e.memoizedProps;
                                switch (r[Xr] = e, r[Zr] = a, n) {
                                    case"dialog":
                                        Ar("cancel", r), Ar("close", r);
                                        break;
                                    case"iframe":
                                    case"object":
                                    case"embed":
                                        Ar("load", r);
                                        break;
                                    case"video":
                                    case"audio":
                                        for (t = 0; t < Tr.length; t++) Ar(Tr[t], r);
                                        break;
                                    case"source":
                                        Ar("error", r);
                                        break;
                                    case"img":
                                    case"image":
                                    case"link":
                                        Ar("error", r), Ar("load", r);
                                        break;
                                    case"details":
                                        Ar("toggle", r);
                                        break;
                                    case"input":
                                        tt(r, a), Ar("invalid", r);
                                        break;
                                    case"select":
                                        r._wrapperState = {wasMultiple: !!a.multiple}, Ar("invalid", r);
                                        break;
                                    case"textarea":
                                        lt(r, a), Ar("invalid", r)
                                }
                                for (var u in xt(n, a), t = null, a) a.hasOwnProperty(u) && (o = a[u], "children" === u ? "string" === typeof o ? r.textContent !== o && (t = ["children", o]) : "number" === typeof o && r.textContent !== "" + o && (t = ["children", "" + o]) : l.hasOwnProperty(u) && null != o && "onScroll" === u && Ar("scroll", r));
                                switch (n) {
                                    case"input":
                                        G(r), rt(r, a, !0);
                                        break;
                                    case"textarea":
                                        G(r), ct(r);
                                        break;
                                    case"select":
                                    case"option":
                                        break;
                                    default:
                                        "function" === typeof a.onClick && (r.onclick = zr)
                                }
                                r = t, e.updateQueue = r, null !== r && (e.flags |= 4)
                            } else {
                                switch (u = 9 === o.nodeType ? o : o.ownerDocument, t === dt && (t = ht(n)), t === dt ? "script" === n ? ((t = u.createElement("div")).innerHTML = "<script><\/script>", t = t.removeChild(t.firstChild)) : "string" === typeof r.is ? t = u.createElement(n, {is: r.is}) : (t = u.createElement(n), "select" === n && (u = t, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : t = u.createElementNS(t, n), t[Xr] = e, t[Zr] = r, Ks(t, e, !1, !1), e.stateNode = t, u = kt(n, r), n) {
                                    case"dialog":
                                        Ar("cancel", t), Ar("close", t), o = r;
                                        break;
                                    case"iframe":
                                    case"object":
                                    case"embed":
                                        Ar("load", t), o = r;
                                        break;
                                    case"video":
                                    case"audio":
                                        for (o = 0; o < Tr.length; o++) Ar(Tr[o], t);
                                        o = r;
                                        break;
                                    case"source":
                                        Ar("error", t), o = r;
                                        break;
                                    case"img":
                                    case"image":
                                    case"link":
                                        Ar("error", t), Ar("load", t), o = r;
                                        break;
                                    case"details":
                                        Ar("toggle", t), o = r;
                                        break;
                                    case"input":
                                        tt(t, r), o = Z(t, r), Ar("invalid", t);
                                        break;
                                    case"option":
                                        o = ot(t, r);
                                        break;
                                    case"select":
                                        t._wrapperState = {wasMultiple: !!r.multiple}, o = i({}, r, {value: void 0}), Ar("invalid", t);
                                        break;
                                    case"textarea":
                                        lt(t, r), o = at(t, r), Ar("invalid", t);
                                        break;
                                    default:
                                        o = r
                                }
                                xt(n, o);
                                var c = o;
                                for (a in c) if (c.hasOwnProperty(a)) {
                                    var d = c[a];
                                    "style" === a ? St(t, d) : "dangerouslySetInnerHTML" === a ? null != (d = d ? d.__html : void 0) && mt(t, d) : "children" === a ? "string" === typeof d ? ("textarea" !== n || "" !== d) && gt(t, d) : "number" === typeof d && gt(t, "" + d) : "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && "autoFocus" !== a && (l.hasOwnProperty(a) ? null != d && "onScroll" === a && Ar("scroll", t) : null != d && w(t, a, d, u))
                                }
                                switch (n) {
                                    case"input":
                                        G(t), rt(t, r, !1);
                                        break;
                                    case"textarea":
                                        G(t), ct(t);
                                        break;
                                    case"option":
                                        null != r.value && t.setAttribute("value", "" + K(r.value));
                                        break;
                                    case"select":
                                        t.multiple = !!r.multiple, null != (a = r.value) ? st(t, !!r.multiple, a, !1) : null != r.defaultValue && st(t, !!r.multiple, r.defaultValue, !0);
                                        break;
                                    default:
                                        "function" === typeof o.onClick && (t.onclick = zr)
                                }
                                $r(n, r) && (e.flags |= 4)
                            }
                            null !== e.ref && (e.flags |= 128)
                        }
                        return null;
                    case 6:
                        if (t && null != e.stateNode) Js(t, e, t.memoizedProps, r); else {
                            if ("string" !== typeof r && null === e.stateNode) throw Error(s(166));
                            n = No(Bo.current), No(Ao.current), Qo(e) ? (r = e.stateNode, n = e.memoizedProps, r[Xr] = e, r.nodeValue !== n && (e.flags |= 4)) : ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Xr] = e, e.stateNode = r)
                        }
                        return null;
                    case 13:
                        return ci(Ro), r = e.memoizedState, 0 !== (64 & e.flags) ? (e.lanes = n, e) : (r = null !== r, n = !1, null === t ? void 0 !== e.memoizedProps.fallback && Qo(e) : n = null !== t.memoizedState, r && !n && 0 !== (2 & e.mode) && (null === t && !0 !== e.memoizedProps.unstable_avoidThisFallback || 0 !== (1 & Ro.current) ? 0 === Ua && (Ua = 3) : (0 !== Ua && 3 !== Ua || (Ua = 4), null === Ma || 0 === (134217727 & Va) && 0 === (134217727 & $a) || vl(Ma, La))), (r || n) && (e.flags |= 4), null);
                    case 4:
                        return Fo(), qs(e), null === t && Br(e.stateNode.containerInfo), null;
                    case 10:
                        return ro(e), null;
                    case 19:
                        if (ci(Ro), null === (r = e.memoizedState)) return null;
                        if (a = 0 !== (64 & e.flags), null === (u = r.rendering)) if (a) aa(r, !1); else {
                            if (0 !== Ua || null !== t && 0 !== (64 & t.flags)) for (t = e.child; null !== t;) {
                                if (null !== (u = Uo(t))) {
                                    for (e.flags |= 64, aa(r, !1), null !== (a = u.updateQueue) && (e.updateQueue = a, e.flags |= 4), null === r.lastEffect && (e.firstEffect = null), e.lastEffect = r.lastEffect, r = n, n = e.child; null !== n;) t = r, (a = n).flags &= 2, a.nextEffect = null, a.firstEffect = null, a.lastEffect = null, null === (u = a.alternate) ? (a.childLanes = 0, a.lanes = t, a.child = null, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = u.childLanes, a.lanes = u.lanes, a.child = u.child, a.memoizedProps = u.memoizedProps, a.memoizedState = u.memoizedState, a.updateQueue = u.updateQueue, a.type = u.type, t = u.dependencies, a.dependencies = null === t ? null : {
                                        lanes: t.lanes, firstContext: t.firstContext
                                    }), n = n.sibling;
                                    return di(Ro, 1 & Ro.current | 2), e.child
                                }
                                t = t.sibling
                            }
                            null !== r.tail && $i() > Qa && (e.flags |= 64, a = !0, aa(r, !1), e.lanes = 33554432)
                        } else {
                            if (!a) if (null !== (t = Uo(u))) {
                                if (e.flags |= 64, a = !0, null !== (n = t.updateQueue) && (e.updateQueue = n, e.flags |= 4), aa(r, !0), null === r.tail && "hidden" === r.tailMode && !u.alternate && !Vo) return null !== (e = e.lastEffect = r.lastEffect) && (e.nextEffect = null), null
                            } else 2 * $i() - r.renderingStartTime > Qa && 1073741824 !== n && (e.flags |= 64, a = !0, aa(r, !1), e.lanes = 33554432);
                            r.isBackwards ? (u.sibling = e.child, e.child = u) : (null !== (n = r.last) ? n.sibling = u : e.child = u, r.last = u)
                        }
                        return null !== r.tail ? (n = r.tail, r.rendering = n, r.tail = n.sibling, r.lastEffect = e.lastEffect, r.renderingStartTime = $i(), n.sibling = null, e = Ro.current, di(Ro, a ? 1 & e | 2 : 1 & e), n) : null;
                    case 23:
                    case 24:
                        return xl(), null !== t && null !== t.memoizedState !== (null !== e.memoizedState) && "unstable-defer-without-hiding" !== r.mode && (e.flags |= 4), null
                }
                throw Error(s(156, e.tag))
            }

            function ua(t) {
                switch (t.tag) {
                    case 1:
                        mi(t.type) && gi();
                        var e = t.flags;
                        return 4096 & e ? (t.flags = -4097 & e | 64, t) : null;
                    case 3:
                        if (Fo(), ci(pi), ci(hi), Go(), 0 !== (64 & (e = t.flags))) throw Error(s(285));
                        return t.flags = -4097 & e | 64, t;
                    case 5:
                        return Po(t), null;
                    case 13:
                        return ci(Ro), 4096 & (e = t.flags) ? (t.flags = -4097 & e | 64, t) : null;
                    case 19:
                        return ci(Ro), null;
                    case 4:
                        return Fo(), null;
                    case 10:
                        return ro(t), null;
                    case 23:
                    case 24:
                        return xl(), null;
                    default:
                        return null
                }
            }

            function ca(t, e) {
                try {
                    var n = "", r = e;
                    do {
                        n += Y(r), r = r.return
                    } while (r);
                    var i = n
                } catch (o) {
                    i = "\nError generating stack: " + o.message + "\n" + o.stack
                }
                return {value: t, source: e, stack: i}
            }

            function da(t, e) {
                try {
                    console.error(e.value)
                } catch (n) {
                    setTimeout((function () {
                        throw n
                    }))
                }
            }

            Ks = function (t, e) {
                for (var n = e.child; null !== n;) {
                    if (5 === n.tag || 6 === n.tag) t.appendChild(n.stateNode); else if (4 !== n.tag && null !== n.child) {
                        n.child.return = n, n = n.child;
                        continue
                    }
                    if (n === e) break;
                    for (; null === n.sibling;) {
                        if (null === n.return || n.return === e) return;
                        n = n.return
                    }
                    n.sibling.return = n.return, n = n.sibling
                }
            }, qs = function () {
            }, Gs = function (t, e, n, r) {
                var o = t.memoizedProps;
                if (o !== r) {
                    t = e.stateNode, No(Ao.current);
                    var s, a = null;
                    switch (n) {
                        case"input":
                            o = Z(t, o), r = Z(t, r), a = [];
                            break;
                        case"option":
                            o = ot(t, o), r = ot(t, r), a = [];
                            break;
                        case"select":
                            o = i({}, o, {value: void 0}), r = i({}, r, {value: void 0}), a = [];
                            break;
                        case"textarea":
                            o = at(t, o), r = at(t, r), a = [];
                            break;
                        default:
                            "function" !== typeof o.onClick && "function" === typeof r.onClick && (t.onclick = zr)
                    }
                    for (d in xt(n, r), n = null, o) if (!r.hasOwnProperty(d) && o.hasOwnProperty(d) && null != o[d]) if ("style" === d) {
                        var u = o[d];
                        for (s in u) u.hasOwnProperty(s) && (n || (n = {}), n[s] = "")
                    } else "dangerouslySetInnerHTML" !== d && "children" !== d && "suppressContentEditableWarning" !== d && "suppressHydrationWarning" !== d && "autoFocus" !== d && (l.hasOwnProperty(d) ? a || (a = []) : (a = a || []).push(d, null));
                    for (d in r) {
                        var c = r[d];
                        if (u = null != o ? o[d] : void 0, r.hasOwnProperty(d) && c !== u && (null != c || null != u)) if ("style" === d) if (u) {
                            for (s in u) !u.hasOwnProperty(s) || c && c.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                            for (s in c) c.hasOwnProperty(s) && u[s] !== c[s] && (n || (n = {}), n[s] = c[s])
                        } else n || (a || (a = []), a.push(d, n)), n = c; else "dangerouslySetInnerHTML" === d ? (c = c ? c.__html : void 0, u = u ? u.__html : void 0, null != c && u !== c && (a = a || []).push(d, c)) : "children" === d ? "string" !== typeof c && "number" !== typeof c || (a = a || []).push(d, "" + c) : "suppressContentEditableWarning" !== d && "suppressHydrationWarning" !== d && (l.hasOwnProperty(d) ? (null != c && "onScroll" === d && Ar("scroll", t), a || u === c || (a = [])) : "object" === typeof c && null !== c && c.$$typeof === F ? c.toString() : (a = a || []).push(d, c))
                    }
                    n && (a = a || []).push("style", n);
                    var d = a;
                    (e.updateQueue = d) && (e.flags |= 4)
                }
            }, Js = function (t, e, n, r) {
                n !== r && (e.flags |= 4)
            };
            var fa = "function" === typeof WeakMap ? WeakMap : Map;

            function ha(t, e, n) {
                (n = co(-1, n)).tag = 3, n.payload = {element: null};
                var r = e.value;
                return n.callback = function () {
                    Ja || (Ja = !0, Xa = r), da(0, e)
                }, n
            }

            function pa(t, e, n) {
                (n = co(-1, n)).tag = 3;
                var r = t.type.getDerivedStateFromError;
                if ("function" === typeof r) {
                    var i = e.value;
                    n.payload = function () {
                        return da(0, e), r(i)
                    }
                }
                var o = t.stateNode;
                return null !== o && "function" === typeof o.componentDidCatch && (n.callback = function () {
                    "function" !== typeof r && (null === Za ? Za = new Set([this]) : Za.add(this), da(0, e));
                    var t = e.stack;
                    this.componentDidCatch(e.value, {componentStack: null !== t ? t : ""})
                }), n
            }

            var ya = "function" === typeof WeakSet ? WeakSet : Set;

            function ba(t) {
                var e = t.ref;
                if (null !== e) if ("function" === typeof e) try {
                    e(null)
                } catch (n) {
                    jl(t, n)
                } else e.current = null
            }

            function ma(t, e) {
                switch (e.tag) {
                    case 0:
                    case 11:
                    case 15:
                    case 22:
                    case 5:
                    case 6:
                    case 4:
                    case 17:
                        return;
                    case 1:
                        if (256 & e.flags && null !== t) {
                            var n = t.memoizedProps, r = t.memoizedState;
                            e = (t = e.stateNode).getSnapshotBeforeUpdate(e.elementType === e.type ? n : Ji(e.type, n), r), t.__reactInternalSnapshotBeforeUpdate = e
                        }
                        return;
                    case 3:
                        return void (256 & e.flags && Qr(e.stateNode.containerInfo))
                }
                throw Error(s(163))
            }

            function ga(t, e, n) {
                switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                    case 22:
                        if (null !== (e = null !== (e = n.updateQueue) ? e.lastEffect : null)) {
                            t = e = e.next;
                            do {
                                if (3 === (3 & t.tag)) {
                                    var r = t.create;
                                    t.destroy = r()
                                }
                                t = t.next
                            } while (t !== e)
                        }
                        if (null !== (e = null !== (e = n.updateQueue) ? e.lastEffect : null)) {
                            t = e = e.next;
                            do {
                                var i = t;
                                r = i.next, 0 !== (4 & (i = i.tag)) && 0 !== (1 & i) && (Rl(n, t), Pl(n, t)), t = r
                            } while (t !== e)
                        }
                        return;
                    case 1:
                        return t = n.stateNode, 4 & n.flags && (null === e ? t.componentDidMount() : (r = n.elementType === n.type ? e.memoizedProps : Ji(n.type, e.memoizedProps), t.componentDidUpdate(r, e.memoizedState, t.__reactInternalSnapshotBeforeUpdate))), void (null !== (e = n.updateQueue) && yo(n, e, t));
                    case 3:
                        if (null !== (e = n.updateQueue)) {
                            if (t = null, null !== n.child) switch (n.child.tag) {
                                case 5:
                                case 1:
                                    t = n.child.stateNode
                            }
                            yo(n, e, t)
                        }
                        return;
                    case 5:
                        return t = n.stateNode, void (null === e && 4 & n.flags && $r(n.type, n.memoizedProps) && t.focus());
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 20:
                    case 21:
                    case 23:
                    case 24:
                        return;
                    case 13:
                        return void (null === n.memoizedState && (n = n.alternate, null !== n && (n = n.memoizedState, null !== n && (n = n.dehydrated, null !== n && Se(n)))))
                }
                throw Error(s(163))
            }

            function va(t, e) {
                for (var n = t; ;) {
                    if (5 === n.tag) {
                        var r = n.stateNode;
                        if (e) "function" === typeof (r = r.style).setProperty ? r.setProperty("display", "none", "important") : r.display = "none"; else {
                            r = n.stateNode;
                            var i = n.memoizedProps.style;
                            i = void 0 !== i && null !== i && i.hasOwnProperty("display") ? i.display : null, r.style.display = _t("display", i)
                        }
                    } else if (6 === n.tag) n.stateNode.nodeValue = e ? "" : n.memoizedProps; else if ((23 !== n.tag && 24 !== n.tag || null === n.memoizedState || n === t) && null !== n.child) {
                        n.child.return = n, n = n.child;
                        continue
                    }
                    if (n === t) break;
                    for (; null === n.sibling;) {
                        if (null === n.return || n.return === t) return;
                        n = n.return
                    }
                    n.sibling.return = n.return, n = n.sibling
                }
            }

            function wa(t, e) {
                if (xi && "function" === typeof xi.onCommitFiberUnmount) try {
                    xi.onCommitFiberUnmount(Ii, e)
                } catch (o) {
                }
                switch (e.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                    case 22:
                        if (null !== (t = e.updateQueue) && null !== (t = t.lastEffect)) {
                            var n = t = t.next;
                            do {
                                var r = n, i = r.destroy;
                                if (r = r.tag, void 0 !== i) if (0 !== (4 & r)) Rl(e, n); else {
                                    r = e;
                                    try {
                                        i()
                                    } catch (o) {
                                        jl(r, o)
                                    }
                                }
                                n = n.next
                            } while (n !== t)
                        }
                        break;
                    case 1:
                        if (ba(e), "function" === typeof (t = e.stateNode).componentWillUnmount) try {
                            t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount()
                        } catch (o) {
                            jl(e, o)
                        }
                        break;
                    case 5:
                        ba(e);
                        break;
                    case 4:
                        Ta(t, e)
                }
            }

            function _a(t) {
                t.alternate = null, t.child = null, t.dependencies = null, t.firstEffect = null, t.lastEffect = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.return = null, t.updateQueue = null
            }

            function Sa(t) {
                return 5 === t.tag || 3 === t.tag || 4 === t.tag
            }

            function Ia(t) {
                t:{
                    for (var e = t.return; null !== e;) {
                        if (Sa(e)) break t;
                        e = e.return
                    }
                    throw Error(s(160))
                }
                var n = e;
                switch (e = n.stateNode, n.tag) {
                    case 5:
                        var r = !1;
                        break;
                    case 3:
                    case 4:
                        e = e.containerInfo, r = !0;
                        break;
                    default:
                        throw Error(s(161))
                }
                16 & n.flags && (gt(e, ""), n.flags &= -17);
                t:e:for (n = t; ;) {
                    for (; null === n.sibling;) {
                        if (null === n.return || Sa(n.return)) {
                            n = null;
                            break t
                        }
                        n = n.return
                    }
                    for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
                        if (2 & n.flags) continue e;
                        if (null === n.child || 4 === n.tag) continue e;
                        n.child.return = n, n = n.child
                    }
                    if (!(2 & n.flags)) {
                        n = n.stateNode;
                        break t
                    }
                }
                r ? xa(t, n, e) : ka(t, n, e)
            }

            function xa(t, e, n) {
                var r = t.tag, i = 5 === r || 6 === r;
                if (i) t = i ? t.stateNode : t.stateNode.instance, e ? 8 === n.nodeType ? n.parentNode.insertBefore(t, e) : n.insertBefore(t, e) : (8 === n.nodeType ? (e = n.parentNode).insertBefore(t, n) : (e = n).appendChild(t), null !== (n = n._reactRootContainer) && void 0 !== n || null !== e.onclick || (e.onclick = zr)); else if (4 !== r && null !== (t = t.child)) for (xa(t, e, n), t = t.sibling; null !== t;) xa(t, e, n), t = t.sibling
            }

            function ka(t, e, n) {
                var r = t.tag, i = 5 === r || 6 === r;
                if (i) t = i ? t.stateNode : t.stateNode.instance, e ? n.insertBefore(t, e) : n.appendChild(t); else if (4 !== r && null !== (t = t.child)) for (ka(t, e, n), t = t.sibling; null !== t;) ka(t, e, n), t = t.sibling
            }

            function Ta(t, e) {
                for (var n, r, i = e, o = !1; ;) {
                    if (!o) {
                        o = i.return;
                        t:for (; ;) {
                            if (null === o) throw Error(s(160));
                            switch (n = o.stateNode, o.tag) {
                                case 5:
                                    r = !1;
                                    break t;
                                case 3:
                                case 4:
                                    n = n.containerInfo, r = !0;
                                    break t
                            }
                            o = o.return
                        }
                        o = !0
                    }
                    if (5 === i.tag || 6 === i.tag) {
                        t:for (var a = t, l = i, u = l; ;) if (wa(a, u), null !== u.child && 4 !== u.tag) u.child.return = u, u = u.child; else {
                            if (u === l) break t;
                            for (; null === u.sibling;) {
                                if (null === u.return || u.return === l) break t;
                                u = u.return
                            }
                            u.sibling.return = u.return, u = u.sibling
                        }
                        r ? (a = n, l = i.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(l) : a.removeChild(l)) : n.removeChild(i.stateNode)
                    } else if (4 === i.tag) {
                        if (null !== i.child) {
                            n = i.stateNode.containerInfo, r = !0, i.child.return = i, i = i.child;
                            continue
                        }
                    } else if (wa(t, i), null !== i.child) {
                        i.child.return = i, i = i.child;
                        continue
                    }
                    if (i === e) break;
                    for (; null === i.sibling;) {
                        if (null === i.return || i.return === e) return;
                        4 === (i = i.return).tag && (o = !1)
                    }
                    i.sibling.return = i.return, i = i.sibling
                }
            }

            function Ea(t, e) {
                switch (e.tag) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                    case 22:
                        var n = e.updateQueue;
                        if (null !== (n = null !== n ? n.lastEffect : null)) {
                            var r = n = n.next;
                            do {
                                3 === (3 & r.tag) && (t = r.destroy, r.destroy = void 0, void 0 !== t && t()), r = r.next
                            } while (r !== n)
                        }
                        return;
                    case 1:
                    case 12:
                    case 17:
                        return;
                    case 5:
                        if (null != (n = e.stateNode)) {
                            r = e.memoizedProps;
                            var i = null !== t ? t.memoizedProps : r;
                            t = e.type;
                            var o = e.updateQueue;
                            if (e.updateQueue = null, null !== o) {
                                for (n[Zr] = r, "input" === t && "radio" === r.type && null != r.name && et(n, r), kt(t, i), e = kt(t, r), i = 0; i < o.length; i += 2) {
                                    var a = o[i], l = o[i + 1];
                                    "style" === a ? St(n, l) : "dangerouslySetInnerHTML" === a ? mt(n, l) : "children" === a ? gt(n, l) : w(n, a, l, e)
                                }
                                switch (t) {
                                    case"input":
                                        nt(n, r);
                                        break;
                                    case"textarea":
                                        ut(n, r);
                                        break;
                                    case"select":
                                        t = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, null != (o = r.value) ? st(n, !!r.multiple, o, !1) : t !== !!r.multiple && (null != r.defaultValue ? st(n, !!r.multiple, r.defaultValue, !0) : st(n, !!r.multiple, r.multiple ? [] : "", !1))
                                }
                            }
                        }
                        return;
                    case 6:
                        if (null === e.stateNode) throw Error(s(162));
                        return void (e.stateNode.nodeValue = e.memoizedProps);
                    case 3:
                        return void ((n = e.stateNode).hydrate && (n.hydrate = !1, Se(n.containerInfo)));
                    case 13:
                        return null !== e.memoizedState && (Ya = $i(), va(e.child, !0)), void Ca(e);
                    case 19:
                        return void Ca(e);
                    case 23:
                    case 24:
                        return void va(e, null !== e.memoizedState)
                }
                throw Error(s(163))
            }

            function Ca(t) {
                var e = t.updateQueue;
                if (null !== e) {
                    t.updateQueue = null;
                    var n = t.stateNode;
                    null === n && (n = t.stateNode = new ya), e.forEach((function (e) {
                        var r = $l.bind(null, t, e);
                        n.has(e) || (n.add(e), e.then(r, r))
                    }))
                }
            }

            function Oa(t, e) {
                return null !== t && (null === (t = t.memoizedState) || null !== t.dehydrated) && (null !== (e = e.memoizedState) && null === e.dehydrated)
            }

            var Aa = Math.ceil, Da = _.ReactCurrentDispatcher, Ba = _.ReactCurrentOwner, Na = 0, Ma = null, Fa = null,
                La = 0, Pa = 0, Ra = ui(0), Ua = 0, za = null, ja = 0, Va = 0, $a = 0, Wa = 0, Ha = null, Ya = 0,
                Qa = 1 / 0;

            function Ka() {
                Qa = $i() + 500
            }

            var qa, Ga = null, Ja = !1, Xa = null, Za = null, tl = !1, el = null, nl = 90, rl = [], il = [], ol = null,
                sl = 0, al = null, ll = -1, ul = 0, cl = 0, dl = null, fl = !1;

            function hl() {
                return 0 !== (48 & Na) ? $i() : -1 !== ll ? ll : ll = $i()
            }

            function pl(t) {
                if (0 === (2 & (t = t.mode))) return 1;
                if (0 === (4 & t)) return 99 === Wi() ? 1 : 2;
                if (0 === ul && (ul = ja), 0 !== Gi.transition) {
                    0 !== cl && (cl = null !== Ha ? Ha.pendingLanes : 0), t = ul;
                    var e = 4186112 & ~cl;
                    return 0 === (e &= -e) && (0 === (e = (t = 4186112 & ~t) & -t) && (e = 8192)), e
                }
                return t = Wi(), 0 !== (4 & Na) && 98 === t ? t = ze(12, ul) : t = ze(t = function (t) {
                    switch (t) {
                        case 99:
                            return 15;
                        case 98:
                            return 10;
                        case 97:
                        case 96:
                            return 8;
                        case 95:
                            return 2;
                        default:
                            return 0
                    }
                }(t), ul), t
            }

            function yl(t, e, n) {
                if (50 < sl) throw sl = 0, al = null, Error(s(185));
                if (null === (t = bl(t, e))) return null;
                $e(t, e, n), t === Ma && ($a |= e, 4 === Ua && vl(t, La));
                var r = Wi();
                1 === e ? 0 !== (8 & Na) && 0 === (48 & Na) ? wl(t) : (ml(t, n), 0 === Na && (Ka(), Ki())) : (0 === (4 & Na) || 98 !== r && 99 !== r || (null === ol ? ol = new Set([t]) : ol.add(t)), ml(t, n)), Ha = t
            }

            function bl(t, e) {
                t.lanes |= e;
                var n = t.alternate;
                for (null !== n && (n.lanes |= e), n = t, t = t.return; null !== t;) t.childLanes |= e, null !== (n = t.alternate) && (n.childLanes |= e), n = t, t = t.return;
                return 3 === n.tag ? n.stateNode : null
            }

            function ml(t, e) {
                for (var n = t.callbackNode, r = t.suspendedLanes, i = t.pingedLanes, o = t.expirationTimes, a = t.pendingLanes; 0 < a;) {
                    var l = 31 - We(a), u = 1 << l, c = o[l];
                    if (-1 === c) {
                        if (0 === (u & r) || 0 !== (u & i)) {
                            c = e, Pe(u);
                            var d = Le;
                            o[l] = 10 <= d ? c + 250 : 6 <= d ? c + 5e3 : -1
                        }
                    } else c <= e && (t.expiredLanes |= u);
                    a &= ~u
                }
                if (r = Re(t, t === Ma ? La : 0), e = Le, 0 === r) null !== n && (n !== Pi && Ei(n), t.callbackNode = null, t.callbackPriority = 0); else {
                    if (null !== n) {
                        if (t.callbackPriority === e) return;
                        n !== Pi && Ei(n)
                    }
                    15 === e ? (n = wl.bind(null, t), null === Ui ? (Ui = [n], zi = Ti(Bi, qi)) : Ui.push(n), n = Pi) : 14 === e ? n = Qi(99, wl.bind(null, t)) : (n = function (t) {
                        switch (t) {
                            case 15:
                            case 14:
                                return 99;
                            case 13:
                            case 12:
                            case 11:
                            case 10:
                                return 98;
                            case 9:
                            case 8:
                            case 7:
                            case 6:
                            case 4:
                            case 5:
                                return 97;
                            case 3:
                            case 2:
                            case 1:
                                return 95;
                            case 0:
                                return 90;
                            default:
                                throw Error(s(358, t))
                        }
                    }(e), n = Qi(n, gl.bind(null, t))), t.callbackPriority = e, t.callbackNode = n
                }
            }

            function gl(t) {
                if (ll = -1, cl = ul = 0, 0 !== (48 & Na)) throw Error(s(327));
                var e = t.callbackNode;
                if (Ll() && t.callbackNode !== e) return null;
                var n = Re(t, t === Ma ? La : 0);
                if (0 === n) return null;
                var r = n, i = Na;
                Na |= 16;
                var o = El();
                for (Ma === t && La === r || (Ka(), kl(t, r)); ;) try {
                    Al();
                    break
                } catch (l) {
                    Tl(t, l)
                }
                if (no(), Da.current = o, Na = i, null !== Fa ? r = 0 : (Ma = null, La = 0, r = Ua), 0 !== (ja & $a)) kl(t, 0); else if (0 !== r) {
                    if (2 === r && (Na |= 64, t.hydrate && (t.hydrate = !1, Qr(t.containerInfo)), 0 !== (n = Ue(t)) && (r = Cl(t, n))), 1 === r) throw e = za, kl(t, 0), vl(t, n), ml(t, $i()), e;
                    switch (t.finishedWork = t.current.alternate, t.finishedLanes = n, r) {
                        case 0:
                        case 1:
                            throw Error(s(345));
                        case 2:
                        case 5:
                            Nl(t);
                            break;
                        case 3:
                            if (vl(t, n), (62914560 & n) === n && 10 < (r = Ya + 500 - $i())) {
                                if (0 !== Re(t, 0)) break;
                                if (((i = t.suspendedLanes) & n) !== n) {
                                    hl(), t.pingedLanes |= t.suspendedLanes & i;
                                    break
                                }
                                t.timeoutHandle = Hr(Nl.bind(null, t), r);
                                break
                            }
                            Nl(t);
                            break;
                        case 4:
                            if (vl(t, n), (4186112 & n) === n) break;
                            for (r = t.eventTimes, i = -1; 0 < n;) {
                                var a = 31 - We(n);
                                o = 1 << a, (a = r[a]) > i && (i = a), n &= ~o
                            }
                            if (n = i, 10 < (n = (120 > (n = $i() - n) ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Aa(n / 1960)) - n)) {
                                t.timeoutHandle = Hr(Nl.bind(null, t), n);
                                break
                            }
                            Nl(t);
                            break;
                        default:
                            throw Error(s(329))
                    }
                }
                return ml(t, $i()), t.callbackNode === e ? gl.bind(null, t) : null
            }

            function vl(t, e) {
                for (e &= ~Wa, e &= ~$a, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes; 0 < e;) {
                    var n = 31 - We(e), r = 1 << n;
                    t[n] = -1, e &= ~r
                }
            }

            function wl(t) {
                if (0 !== (48 & Na)) throw Error(s(327));
                if (Ll(), t === Ma && 0 !== (t.expiredLanes & La)) {
                    var e = La, n = Cl(t, e);
                    0 !== (ja & $a) && (n = Cl(t, e = Re(t, e)))
                } else n = Cl(t, e = Re(t, 0));
                if (0 !== t.tag && 2 === n && (Na |= 64, t.hydrate && (t.hydrate = !1, Qr(t.containerInfo)), 0 !== (e = Ue(t)) && (n = Cl(t, e))), 1 === n) throw n = za, kl(t, 0), vl(t, e), ml(t, $i()), n;
                return t.finishedWork = t.current.alternate, t.finishedLanes = e, Nl(t), ml(t, $i()), null
            }

            function _l(t, e) {
                var n = Na;
                Na |= 1;
                try {
                    return t(e)
                } finally {
                    0 === (Na = n) && (Ka(), Ki())
                }
            }

            function Sl(t, e) {
                var n = Na;
                Na &= -2, Na |= 8;
                try {
                    return t(e)
                } finally {
                    0 === (Na = n) && (Ka(), Ki())
                }
            }

            function Il(t, e) {
                di(Ra, Pa), Pa |= e, ja |= e
            }

            function xl() {
                Pa = Ra.current, ci(Ra)
            }

            function kl(t, e) {
                t.finishedWork = null, t.finishedLanes = 0;
                var n = t.timeoutHandle;
                if (-1 !== n && (t.timeoutHandle = -1, Yr(n)), null !== Fa) for (n = Fa.return; null !== n;) {
                    var r = n;
                    switch (r.tag) {
                        case 1:
                            null !== (r = r.type.childContextTypes) && void 0 !== r && gi();
                            break;
                        case 3:
                            Fo(), ci(pi), ci(hi), Go();
                            break;
                        case 5:
                            Po(r);
                            break;
                        case 4:
                            Fo();
                            break;
                        case 13:
                        case 19:
                            ci(Ro);
                            break;
                        case 10:
                            ro(r);
                            break;
                        case 23:
                        case 24:
                            xl()
                    }
                    n = n.return
                }
                Ma = t, Fa = Ql(t.current, null), La = Pa = ja = e, Ua = 0, za = null, Wa = $a = Va = 0
            }

            function Tl(t, e) {
                for (; ;) {
                    var n = Fa;
                    try {
                        if (no(), Jo.current = Bs, rs) {
                            for (var r = ts.memoizedState; null !== r;) {
                                var i = r.queue;
                                null !== i && (i.pending = null), r = r.next
                            }
                            rs = !1
                        }
                        if (Zo = 0, ns = es = ts = null, is = !1, Ba.current = null, null === n || null === n.return) {
                            Ua = 1, za = e, Fa = null;
                            break
                        }
                        t:{
                            var o = t, s = n.return, a = n, l = e;
                            if (e = La, a.flags |= 2048, a.firstEffect = a.lastEffect = null, null !== l && "object" === typeof l && "function" === typeof l.then) {
                                var u = l;
                                if (0 === (2 & a.mode)) {
                                    var c = a.alternate;
                                    c ? (a.updateQueue = c.updateQueue, a.memoizedState = c.memoizedState, a.lanes = c.lanes) : (a.updateQueue = null, a.memoizedState = null)
                                }
                                var d = 0 !== (1 & Ro.current), f = s;
                                do {
                                    var h;
                                    if (h = 13 === f.tag) {
                                        var p = f.memoizedState;
                                        if (null !== p) h = null !== p.dehydrated; else {
                                            var y = f.memoizedProps;
                                            h = void 0 !== y.fallback && (!0 !== y.unstable_avoidThisFallback || !d)
                                        }
                                    }
                                    if (h) {
                                        var b = f.updateQueue;
                                        if (null === b) {
                                            var m = new Set;
                                            m.add(u), f.updateQueue = m
                                        } else b.add(u);
                                        if (0 === (2 & f.mode)) {
                                            if (f.flags |= 64, a.flags |= 16384, a.flags &= -2981, 1 === a.tag) if (null === a.alternate) a.tag = 17; else {
                                                var g = co(-1, 1);
                                                g.tag = 2, fo(a, g)
                                            }
                                            a.lanes |= 1;
                                            break t
                                        }
                                        l = void 0, a = e;
                                        var v = o.pingCache;
                                        if (null === v ? (v = o.pingCache = new fa, l = new Set, v.set(u, l)) : void 0 === (l = v.get(u)) && (l = new Set, v.set(u, l)), !l.has(a)) {
                                            l.add(a);
                                            var w = Vl.bind(null, o, u, a);
                                            u.then(w, w)
                                        }
                                        f.flags |= 4096, f.lanes = e;
                                        break t
                                    }
                                    f = f.return
                                } while (null !== f);
                                l = Error((Q(a.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")
                            }
                            5 !== Ua && (Ua = 2), l = ca(l, a), f = s;
                            do {
                                switch (f.tag) {
                                    case 3:
                                        o = l, f.flags |= 4096, e &= -e, f.lanes |= e, ho(f, ha(0, o, e));
                                        break t;
                                    case 1:
                                        o = l;
                                        var _ = f.type, S = f.stateNode;
                                        if (0 === (64 & f.flags) && ("function" === typeof _.getDerivedStateFromError || null !== S && "function" === typeof S.componentDidCatch && (null === Za || !Za.has(S)))) {
                                            f.flags |= 4096, e &= -e, f.lanes |= e, ho(f, pa(f, o, e));
                                            break t
                                        }
                                }
                                f = f.return
                            } while (null !== f)
                        }
                        Bl(n)
                    } catch (I) {
                        e = I, Fa === n && null !== n && (Fa = n = n.return);
                        continue
                    }
                    break
                }
            }

            function El() {
                var t = Da.current;
                return Da.current = Bs, null === t ? Bs : t
            }

            function Cl(t, e) {
                var n = Na;
                Na |= 16;
                var r = El();
                for (Ma === t && La === e || kl(t, e); ;) try {
                    Ol();
                    break
                } catch (i) {
                    Tl(t, i)
                }
                if (no(), Na = n, Da.current = r, null !== Fa) throw Error(s(261));
                return Ma = null, La = 0, Ua
            }

            function Ol() {
                for (; null !== Fa;) Dl(Fa)
            }

            function Al() {
                for (; null !== Fa && !Ci();) Dl(Fa)
            }

            function Dl(t) {
                var e = qa(t.alternate, t, Pa);
                t.memoizedProps = t.pendingProps, null === e ? Bl(t) : Fa = e, Ba.current = null
            }

            function Bl(t) {
                var e = t;
                do {
                    var n = e.alternate;
                    if (t = e.return, 0 === (2048 & e.flags)) {
                        if (null !== (n = la(n, e, Pa))) return void (Fa = n);
                        if (24 !== (n = e).tag && 23 !== n.tag || null === n.memoizedState || 0 !== (1073741824 & Pa) || 0 === (4 & n.mode)) {
                            for (var r = 0, i = n.child; null !== i;) r |= i.lanes | i.childLanes, i = i.sibling;
                            n.childLanes = r
                        }
                        null !== t && 0 === (2048 & t.flags) && (null === t.firstEffect && (t.firstEffect = e.firstEffect), null !== e.lastEffect && (null !== t.lastEffect && (t.lastEffect.nextEffect = e.firstEffect), t.lastEffect = e.lastEffect), 1 < e.flags && (null !== t.lastEffect ? t.lastEffect.nextEffect = e : t.firstEffect = e, t.lastEffect = e))
                    } else {
                        if (null !== (n = ua(e))) return n.flags &= 2047, void (Fa = n);
                        null !== t && (t.firstEffect = t.lastEffect = null, t.flags |= 2048)
                    }
                    if (null !== (e = e.sibling)) return void (Fa = e);
                    Fa = e = t
                } while (null !== e);
                0 === Ua && (Ua = 5)
            }

            function Nl(t) {
                var e = Wi();
                return Yi(99, Ml.bind(null, t, e)), null
            }

            function Ml(t, e) {
                do {
                    Ll()
                } while (null !== el);
                if (0 !== (48 & Na)) throw Error(s(327));
                var n = t.finishedWork;
                if (null === n) return null;
                if (t.finishedWork = null, t.finishedLanes = 0, n === t.current) throw Error(s(177));
                t.callbackNode = null;
                var r = n.lanes | n.childLanes, i = r, o = t.pendingLanes & ~i;
                t.pendingLanes = i, t.suspendedLanes = 0, t.pingedLanes = 0, t.expiredLanes &= i, t.mutableReadLanes &= i, t.entangledLanes &= i, i = t.entanglements;
                for (var a = t.eventTimes, l = t.expirationTimes; 0 < o;) {
                    var u = 31 - We(o), c = 1 << u;
                    i[u] = 0, a[u] = -1, l[u] = -1, o &= ~c
                }
                if (null !== ol && 0 === (24 & r) && ol.has(t) && ol.delete(t), t === Ma && (Fa = Ma = null, La = 0), 1 < n.flags ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, r = n.firstEffect) : r = n : r = n.firstEffect, null !== r) {
                    if (i = Na, Na |= 32, Ba.current = null, jr = qe, mr(a = br())) {
                        if ("selectionStart" in a) l = {
                            start: a.selectionStart, end: a.selectionEnd
                        }; else t:if (l = (l = a.ownerDocument) && l.defaultView || window, (c = l.getSelection && l.getSelection()) && 0 !== c.rangeCount) {
                            l = c.anchorNode, o = c.anchorOffset, u = c.focusNode, c = c.focusOffset;
                            try {
                                l.nodeType, u.nodeType
                            } catch (T) {
                                l = null;
                                break t
                            }
                            var d = 0, f = -1, h = -1, p = 0, y = 0, b = a, m = null;
                            e:for (; ;) {
                                for (var g; b !== l || 0 !== o && 3 !== b.nodeType || (f = d + o), b !== u || 0 !== c && 3 !== b.nodeType || (h = d + c), 3 === b.nodeType && (d += b.nodeValue.length), null !== (g = b.firstChild);) m = b, b = g;
                                for (; ;) {
                                    if (b === a) break e;
                                    if (m === l && ++p === o && (f = d), m === u && ++y === c && (h = d), null !== (g = b.nextSibling)) break;
                                    m = (b = m).parentNode
                                }
                                b = g
                            }
                            l = -1 === f || -1 === h ? null : {start: f, end: h}
                        } else l = null;
                        l = l || {start: 0, end: 0}
                    } else l = null;
                    Vr = {focusedElem: a, selectionRange: l}, qe = !1, dl = null, fl = !1, Ga = r;
                    do {
                        try {
                            Fl()
                        } catch (T) {
                            if (null === Ga) throw Error(s(330));
                            jl(Ga, T), Ga = Ga.nextEffect
                        }
                    } while (null !== Ga);
                    dl = null, Ga = r;
                    do {
                        try {
                            for (a = t; null !== Ga;) {
                                var v = Ga.flags;
                                if (16 & v && gt(Ga.stateNode, ""), 128 & v) {
                                    var w = Ga.alternate;
                                    if (null !== w) {
                                        var _ = w.ref;
                                        null !== _ && ("function" === typeof _ ? _(null) : _.current = null)
                                    }
                                }
                                switch (1038 & v) {
                                    case 2:
                                        Ia(Ga), Ga.flags &= -3;
                                        break;
                                    case 6:
                                        Ia(Ga), Ga.flags &= -3, Ea(Ga.alternate, Ga);
                                        break;
                                    case 1024:
                                        Ga.flags &= -1025;
                                        break;
                                    case 1028:
                                        Ga.flags &= -1025, Ea(Ga.alternate, Ga);
                                        break;
                                    case 4:
                                        Ea(Ga.alternate, Ga);
                                        break;
                                    case 8:
                                        Ta(a, l = Ga);
                                        var S = l.alternate;
                                        _a(l), null !== S && _a(S)
                                }
                                Ga = Ga.nextEffect
                            }
                        } catch (T) {
                            if (null === Ga) throw Error(s(330));
                            jl(Ga, T), Ga = Ga.nextEffect
                        }
                    } while (null !== Ga);
                    if (_ = Vr, w = br(), v = _.focusedElem, a = _.selectionRange, w !== v && v && v.ownerDocument && yr(v.ownerDocument.documentElement, v)) {
                        null !== a && mr(v) && (w = a.start, void 0 === (_ = a.end) && (_ = w), "selectionStart" in v ? (v.selectionStart = w, v.selectionEnd = Math.min(_, v.value.length)) : (_ = (w = v.ownerDocument || document) && w.defaultView || window).getSelection && (_ = _.getSelection(), l = v.textContent.length, S = Math.min(a.start, l), a = void 0 === a.end ? S : Math.min(a.end, l), !_.extend && S > a && (l = a, a = S, S = l), l = pr(v, S), o = pr(v, a), l && o && (1 !== _.rangeCount || _.anchorNode !== l.node || _.anchorOffset !== l.offset || _.focusNode !== o.node || _.focusOffset !== o.offset) && ((w = w.createRange()).setStart(l.node, l.offset), _.removeAllRanges(), S > a ? (_.addRange(w), _.extend(o.node, o.offset)) : (w.setEnd(o.node, o.offset), _.addRange(w))))), w = [];
                        for (_ = v; _ = _.parentNode;) 1 === _.nodeType && w.push({
                            element: _, left: _.scrollLeft, top: _.scrollTop
                        });
                        for ("function" === typeof v.focus && v.focus(), v = 0; v < w.length; v++) (_ = w[v]).element.scrollLeft = _.left, _.element.scrollTop = _.top
                    }
                    qe = !!jr, Vr = jr = null, t.current = n, Ga = r;
                    do {
                        try {
                            for (v = t; null !== Ga;) {
                                var I = Ga.flags;
                                if (36 & I && ga(v, Ga.alternate, Ga), 128 & I) {
                                    w = void 0;
                                    var x = Ga.ref;
                                    if (null !== x) {
                                        var k = Ga.stateNode;
                                        Ga.tag, w = k, "function" === typeof x ? x(w) : x.current = w
                                    }
                                }
                                Ga = Ga.nextEffect
                            }
                        } catch (T) {
                            if (null === Ga) throw Error(s(330));
                            jl(Ga, T), Ga = Ga.nextEffect
                        }
                    } while (null !== Ga);
                    Ga = null, Ri(), Na = i
                } else t.current = n;
                if (tl) tl = !1, el = t, nl = e; else for (Ga = r; null !== Ga;) e = Ga.nextEffect, Ga.nextEffect = null, 8 & Ga.flags && ((I = Ga).sibling = null, I.stateNode = null), Ga = e;
                if (0 === (r = t.pendingLanes) && (Za = null), 1 === r ? t === al ? sl++ : (sl = 0, al = t) : sl = 0, n = n.stateNode, xi && "function" === typeof xi.onCommitFiberRoot) try {
                    xi.onCommitFiberRoot(Ii, n, void 0, 64 === (64 & n.current.flags))
                } catch (T) {
                }
                if (ml(t, $i()), Ja) throw Ja = !1, t = Xa, Xa = null, t;
                return 0 !== (8 & Na) || Ki(), null
            }

            function Fl() {
                for (; null !== Ga;) {
                    var t = Ga.alternate;
                    fl || null === dl || (0 !== (8 & Ga.flags) ? te(Ga, dl) && (fl = !0) : 13 === Ga.tag && Oa(t, Ga) && te(Ga, dl) && (fl = !0));
                    var e = Ga.flags;
                    0 !== (256 & e) && ma(t, Ga), 0 === (512 & e) || tl || (tl = !0, Qi(97, (function () {
                        return Ll(), null
                    }))), Ga = Ga.nextEffect
                }
            }

            function Ll() {
                if (90 !== nl) {
                    var t = 97 < nl ? 97 : nl;
                    return nl = 90, Yi(t, Ul)
                }
                return !1
            }

            function Pl(t, e) {
                rl.push(e, t), tl || (tl = !0, Qi(97, (function () {
                    return Ll(), null
                })))
            }

            function Rl(t, e) {
                il.push(e, t), tl || (tl = !0, Qi(97, (function () {
                    return Ll(), null
                })))
            }

            function Ul() {
                if (null === el) return !1;
                var t = el;
                if (el = null, 0 !== (48 & Na)) throw Error(s(331));
                var e = Na;
                Na |= 32;
                var n = il;
                il = [];
                for (var r = 0; r < n.length; r += 2) {
                    var i = n[r], o = n[r + 1], a = i.destroy;
                    if (i.destroy = void 0, "function" === typeof a) try {
                        a()
                    } catch (u) {
                        if (null === o) throw Error(s(330));
                        jl(o, u)
                    }
                }
                for (n = rl, rl = [], r = 0; r < n.length; r += 2) {
                    i = n[r], o = n[r + 1];
                    try {
                        var l = i.create;
                        i.destroy = l()
                    } catch (u) {
                        if (null === o) throw Error(s(330));
                        jl(o, u)
                    }
                }
                for (l = t.current.firstEffect; null !== l;) t = l.nextEffect, l.nextEffect = null, 8 & l.flags && (l.sibling = null, l.stateNode = null), l = t;
                return Na = e, Ki(), !0
            }

            function zl(t, e, n) {
                fo(t, e = ha(0, e = ca(n, e), 1)), e = hl(), null !== (t = bl(t, 1)) && ($e(t, 1, e), ml(t, e))
            }

            function jl(t, e) {
                if (3 === t.tag) zl(t, t, e); else for (var n = t.return; null !== n;) {
                    if (3 === n.tag) {
                        zl(n, t, e);
                        break
                    }
                    if (1 === n.tag) {
                        var r = n.stateNode;
                        if ("function" === typeof n.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Za || !Za.has(r))) {
                            var i = pa(n, t = ca(e, t), 1);
                            if (fo(n, i), i = hl(), null !== (n = bl(n, 1))) $e(n, 1, i), ml(n, i); else if ("function" === typeof r.componentDidCatch && (null === Za || !Za.has(r))) try {
                                r.componentDidCatch(e, t)
                            } catch (o) {
                            }
                            break
                        }
                    }
                    n = n.return
                }
            }

            function Vl(t, e, n) {
                var r = t.pingCache;
                null !== r && r.delete(e), e = hl(), t.pingedLanes |= t.suspendedLanes & n, Ma === t && (La & n) === n && (4 === Ua || 3 === Ua && (62914560 & La) === La && 500 > $i() - Ya ? kl(t, 0) : Wa |= n), ml(t, e)
            }

            function $l(t, e) {
                var n = t.stateNode;
                null !== n && n.delete(e), 0 === (e = 0) && (0 === (2 & (e = t.mode)) ? e = 1 : 0 === (4 & e) ? e = 99 === Wi() ? 1 : 2 : (0 === ul && (ul = ja), 0 === (e = je(62914560 & ~ul)) && (e = 4194304))), n = hl(), null !== (t = bl(t, e)) && ($e(t, e, n), ml(t, n))
            }

            function Wl(t, e, n, r) {
                this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null
            }

            function Hl(t, e, n, r) {
                return new Wl(t, e, n, r)
            }

            function Yl(t) {
                return !(!(t = t.prototype) || !t.isReactComponent)
            }

            function Ql(t, e) {
                var n = t.alternate;
                return null === n ? ((n = Hl(t.tag, e, t.key, t.mode)).elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = null === e ? null : {
                    lanes: e.lanes, firstContext: e.firstContext
                }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n
            }

            function Kl(t, e, n, r, i, o) {
                var a = 2;
                if (r = t, "function" === typeof t) Yl(t) && (a = 1); else if ("string" === typeof t) a = 5; else t:switch (t) {
                    case x:
                        return ql(n.children, i, o, e);
                    case L:
                        a = 8, i |= 16;
                        break;
                    case k:
                        a = 8, i |= 1;
                        break;
                    case T:
                        return (t = Hl(12, n, e, 8 | i)).elementType = T, t.type = T, t.lanes = o, t;
                    case A:
                        return (t = Hl(13, n, e, i)).type = A, t.elementType = A, t.lanes = o, t;
                    case D:
                        return (t = Hl(19, n, e, i)).elementType = D, t.lanes = o, t;
                    case P:
                        return Gl(n, i, o, e);
                    case R:
                        return (t = Hl(24, n, e, i)).elementType = R, t.lanes = o, t;
                    default:
                        if ("object" === typeof t && null !== t) switch (t.$$typeof) {
                            case E:
                                a = 10;
                                break t;
                            case C:
                                a = 9;
                                break t;
                            case O:
                                a = 11;
                                break t;
                            case B:
                                a = 14;
                                break t;
                            case N:
                                a = 16, r = null;
                                break t;
                            case M:
                                a = 22;
                                break t
                        }
                        throw Error(s(130, null == t ? t : typeof t, ""))
                }
                return (e = Hl(a, n, e, i)).elementType = t, e.type = r, e.lanes = o, e
            }

            function ql(t, e, n, r) {
                return (t = Hl(7, t, r, e)).lanes = n, t
            }

            function Gl(t, e, n, r) {
                return (t = Hl(23, t, r, e)).elementType = P, t.lanes = n, t
            }

            function Jl(t, e, n) {
                return (t = Hl(6, t, null, e)).lanes = n, t
            }

            function Xl(t, e, n) {
                return (e = Hl(4, null !== t.children ? t.children : [], t.key, e)).lanes = n, e.stateNode = {
                    containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation
                }, e
            }

            function Zl(t, e, n) {
                this.tag = e, this.containerInfo = t, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = Ve(0), this.expirationTimes = Ve(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ve(0), this.mutableSourceEagerHydrationData = null
            }

            function tu(t, e, n, r) {
                var i = e.current, o = hl(), a = pl(i);
                t:if (n) {
                    e:{
                        if (Gt(n = n._reactInternals) !== n || 1 !== n.tag) throw Error(s(170));
                        var l = n;
                        do {
                            switch (l.tag) {
                                case 3:
                                    l = l.stateNode.context;
                                    break e;
                                case 1:
                                    if (mi(l.type)) {
                                        l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                                        break e
                                    }
                            }
                            l = l.return
                        } while (null !== l);
                        throw Error(s(171))
                    }
                    if (1 === n.tag) {
                        var u = n.type;
                        if (mi(u)) {
                            n = wi(n, u, l);
                            break t
                        }
                    }
                    n = l
                } else n = fi;
                return null === e.context ? e.context = n : e.pendingContext = n, (e = co(o, a)).payload = {element: t}, null !== (r = void 0 === r ? null : r) && (e.callback = r), fo(i, e), yl(i, a, o), a
            }

            function eu(t) {
                return (t = t.current).child ? (t.child.tag, t.child.stateNode) : null
            }

            function nu(t, e) {
                if (null !== (t = t.memoizedState) && null !== t.dehydrated) {
                    var n = t.retryLane;
                    t.retryLane = 0 !== n && n < e ? n : e
                }
            }

            function ru(t, e) {
                nu(t, e), (t = t.alternate) && nu(t, e)
            }

            function iu(t, e, n) {
                var r = null != n && null != n.hydrationOptions && n.hydrationOptions.mutableSources || null;
                if (n = new Zl(t, e, null != n && !0 === n.hydrate), e = Hl(3, null, null, 2 === e ? 7 : 1 === e ? 3 : 0), n.current = e, e.stateNode = n, lo(e), t[ti] = n.current, Br(8 === t.nodeType ? t.parentNode : t), r) for (t = 0; t < r.length; t++) {
                    var i = (e = r[t])._getVersion;
                    i = i(e._source), null == n.mutableSourceEagerHydrationData ? n.mutableSourceEagerHydrationData = [e, i] : n.mutableSourceEagerHydrationData.push(e, i)
                }
                this._internalRoot = n
            }

            function ou(t) {
                return !(!t || 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType && (8 !== t.nodeType || " react-mount-point-unstable " !== t.nodeValue))
            }

            function su(t, e, n, r, i) {
                var o = n._reactRootContainer;
                if (o) {
                    var s = o._internalRoot;
                    if ("function" === typeof i) {
                        var a = i;
                        i = function () {
                            var t = eu(s);
                            a.call(t)
                        }
                    }
                    tu(e, s, t, i)
                } else {
                    if (o = n._reactRootContainer = function (t, e) {
                        if (e || (e = !(!(e = t ? 9 === t.nodeType ? t.documentElement : t.firstChild : null) || 1 !== e.nodeType || !e.hasAttribute("data-reactroot"))), !e) for (var n; n = t.lastChild;) t.removeChild(n);
                        return new iu(t, 0, e ? {hydrate: !0} : void 0)
                    }(n, r), s = o._internalRoot, "function" === typeof i) {
                        var l = i;
                        i = function () {
                            var t = eu(s);
                            l.call(t)
                        }
                    }
                    Sl((function () {
                        tu(e, s, t, i)
                    }))
                }
                return eu(s)
            }

            function au(t, e) {
                var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                if (!ou(e)) throw Error(s(200));
                return function (t, e, n) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: I, key: null == r ? null : "" + r, children: t, containerInfo: e, implementation: n
                    }
                }(t, e, null, n)
            }

            qa = function (t, e, n) {
                var r = e.lanes;
                if (null !== t) if (t.memoizedProps !== e.pendingProps || pi.current) Ps = !0; else {
                    if (0 === (n & r)) {
                        switch (Ps = !1, e.tag) {
                            case 3:
                                Qs(e), Ko();
                                break;
                            case 5:
                                Lo(e);
                                break;
                            case 1:
                                mi(e.type) && _i(e);
                                break;
                            case 4:
                                Mo(e, e.stateNode.containerInfo);
                                break;
                            case 10:
                                r = e.memoizedProps.value;
                                var i = e.type._context;
                                di(Xi, i._currentValue), i._currentValue = r;
                                break;
                            case 13:
                                if (null !== e.memoizedState) return 0 !== (n & e.child.childLanes) ? Zs(t, e, n) : (di(Ro, 1 & Ro.current), null !== (e = sa(t, e, n)) ? e.sibling : null);
                                di(Ro, 1 & Ro.current);
                                break;
                            case 19:
                                if (r = 0 !== (n & e.childLanes), 0 !== (64 & t.flags)) {
                                    if (r) return oa(t, e, n);
                                    e.flags |= 64
                                }
                                if (null !== (i = e.memoizedState) && (i.rendering = null, i.tail = null, i.lastEffect = null), di(Ro, Ro.current), r) break;
                                return null;
                            case 23:
                            case 24:
                                return e.lanes = 0, Vs(t, e, n)
                        }
                        return sa(t, e, n)
                    }
                    Ps = 0 !== (16384 & t.flags)
                } else Ps = !1;
                switch (e.lanes = 0, e.tag) {
                    case 2:
                        if (r = e.type, null !== t && (t.alternate = null, e.alternate = null, e.flags |= 2), t = e.pendingProps, i = bi(e, hi.current), oo(e, n), i = as(null, e, r, t, i, n), e.flags |= 1, "object" === typeof i && null !== i && "function" === typeof i.render && void 0 === i.$$typeof) {
                            if (e.tag = 1, e.memoizedState = null, e.updateQueue = null, mi(r)) {
                                var o = !0;
                                _i(e)
                            } else o = !1;
                            e.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null, lo(e);
                            var a = r.getDerivedStateFromProps;
                            "function" === typeof a && mo(e, r, a, t), i.updater = go, e.stateNode = i, i._reactInternals = e, So(e, r, t, n), e = Ys(null, e, r, !0, o, n)
                        } else e.tag = 0, Rs(null, e, i, n), e = e.child;
                        return e;
                    case 16:
                        i = e.elementType;
                        t:{
                            switch (null !== t && (t.alternate = null, e.alternate = null, e.flags |= 2), t = e.pendingProps, i = (o = i._init)(i._payload), e.type = i, o = e.tag = function (t) {
                                if ("function" === typeof t) return Yl(t) ? 1 : 0;
                                if (void 0 !== t && null !== t) {
                                    if ((t = t.$$typeof) === O) return 11;
                                    if (t === B) return 14
                                }
                                return 2
                            }(i), t = Ji(i, t), o) {
                                case 0:
                                    e = Ws(null, e, i, t, n);
                                    break t;
                                case 1:
                                    e = Hs(null, e, i, t, n);
                                    break t;
                                case 11:
                                    e = Us(null, e, i, t, n);
                                    break t;
                                case 14:
                                    e = zs(null, e, i, Ji(i.type, t), r, n);
                                    break t
                            }
                            throw Error(s(306, i, ""))
                        }
                        return e;
                    case 0:
                        return r = e.type, i = e.pendingProps, Ws(t, e, r, i = e.elementType === r ? i : Ji(r, i), n);
                    case 1:
                        return r = e.type, i = e.pendingProps, Hs(t, e, r, i = e.elementType === r ? i : Ji(r, i), n);
                    case 3:
                        if (Qs(e), r = e.updateQueue, null === t || null === r) throw Error(s(282));
                        if (r = e.pendingProps, i = null !== (i = e.memoizedState) ? i.element : null, uo(t, e), po(e, r, null, n), (r = e.memoizedState.element) === i) Ko(), e = sa(t, e, n); else {
                            if ((o = (i = e.stateNode).hydrate) && (jo = Kr(e.stateNode.containerInfo.firstChild), zo = e, o = Vo = !0), o) {
                                if (null != (t = i.mutableSourceEagerHydrationData)) for (i = 0; i < t.length; i += 2) (o = t[i])._workInProgressVersionPrimary = t[i + 1], qo.push(o);
                                for (n = Co(e, null, r, n), e.child = n; n;) n.flags = -3 & n.flags | 1024, n = n.sibling
                            } else Rs(t, e, r, n), Ko();
                            e = e.child
                        }
                        return e;
                    case 5:
                        return Lo(e), null === t && Ho(e), r = e.type, i = e.pendingProps, o = null !== t ? t.memoizedProps : null, a = i.children, Wr(r, i) ? a = null : null !== o && Wr(r, o) && (e.flags |= 16), $s(t, e), Rs(t, e, a, n), e.child;
                    case 6:
                        return null === t && Ho(e), null;
                    case 13:
                        return Zs(t, e, n);
                    case 4:
                        return Mo(e, e.stateNode.containerInfo), r = e.pendingProps, null === t ? e.child = Eo(e, null, r, n) : Rs(t, e, r, n), e.child;
                    case 11:
                        return r = e.type, i = e.pendingProps, Us(t, e, r, i = e.elementType === r ? i : Ji(r, i), n);
                    case 7:
                        return Rs(t, e, e.pendingProps, n), e.child;
                    case 8:
                    case 12:
                        return Rs(t, e, e.pendingProps.children, n), e.child;
                    case 10:
                        t:{
                            r = e.type._context, i = e.pendingProps, a = e.memoizedProps, o = i.value;
                            var l = e.type._context;
                            if (di(Xi, l._currentValue), l._currentValue = o, null !== a) if (l = a.value, 0 === (o = cr(l, o) ? 0 : 0 | ("function" === typeof r._calculateChangedBits ? r._calculateChangedBits(l, o) : 1073741823))) {
                                if (a.children === i.children && !pi.current) {
                                    e = sa(t, e, n);
                                    break t
                                }
                            } else for (null !== (l = e.child) && (l.return = e); null !== l;) {
                                var u = l.dependencies;
                                if (null !== u) {
                                    a = l.child;
                                    for (var c = u.firstContext; null !== c;) {
                                        if (c.context === r && 0 !== (c.observedBits & o)) {
                                            1 === l.tag && ((c = co(-1, n & -n)).tag = 2, fo(l, c)), l.lanes |= n, null !== (c = l.alternate) && (c.lanes |= n), io(l.return, n), u.lanes |= n;
                                            break
                                        }
                                        c = c.next
                                    }
                                } else a = 10 === l.tag && l.type === e.type ? null : l.child;
                                if (null !== a) a.return = l; else for (a = l; null !== a;) {
                                    if (a === e) {
                                        a = null;
                                        break
                                    }
                                    if (null !== (l = a.sibling)) {
                                        l.return = a.return, a = l;
                                        break
                                    }
                                    a = a.return
                                }
                                l = a
                            }
                            Rs(t, e, i.children, n), e = e.child
                        }
                        return e;
                    case 9:
                        return i = e.type, r = (o = e.pendingProps).children, oo(e, n), r = r(i = so(i, o.unstable_observedBits)), e.flags |= 1, Rs(t, e, r, n), e.child;
                    case 14:
                        return o = Ji(i = e.type, e.pendingProps), zs(t, e, i, o = Ji(i.type, o), r, n);
                    case 15:
                        return js(t, e, e.type, e.pendingProps, r, n);
                    case 17:
                        return r = e.type, i = e.pendingProps, i = e.elementType === r ? i : Ji(r, i), null !== t && (t.alternate = null, e.alternate = null, e.flags |= 2), e.tag = 1, mi(r) ? (t = !0, _i(e)) : t = !1, oo(e, n), wo(e, r, i), So(e, r, i, n), Ys(null, e, r, !0, t, n);
                    case 19:
                        return oa(t, e, n);
                    case 23:
                    case 24:
                        return Vs(t, e, n)
                }
                throw Error(s(156, e.tag))
            }, iu.prototype.render = function (t) {
                tu(t, this._internalRoot, null, null)
            }, iu.prototype.unmount = function () {
                var t = this._internalRoot, e = t.containerInfo;
                tu(null, t, null, (function () {
                    e[ti] = null
                }))
            }, ee = function (t) {
                13 === t.tag && (yl(t, 4, hl()), ru(t, 4))
            }, ne = function (t) {
                13 === t.tag && (yl(t, 67108864, hl()), ru(t, 67108864))
            }, re = function (t) {
                if (13 === t.tag) {
                    var e = hl(), n = pl(t);
                    yl(t, n, e), ru(t, n)
                }
            }, ie = function (t, e) {
                return e()
            }, Et = function (t, e, n) {
                switch (e) {
                    case"input":
                        if (nt(t, n), e = n.name, "radio" === n.type && null != e) {
                            for (n = t; n.parentNode;) n = n.parentNode;
                            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + e) + '][type="radio"]'), e = 0; e < n.length; e++) {
                                var r = n[e];
                                if (r !== t && r.form === t.form) {
                                    var i = oi(r);
                                    if (!i) throw Error(s(90));
                                    J(r), nt(r, i)
                                }
                            }
                        }
                        break;
                    case"textarea":
                        ut(t, n);
                        break;
                    case"select":
                        null != (e = n.value) && st(t, !!n.multiple, e, !1)
                }
            }, Nt = _l, Mt = function (t, e, n, r, i) {
                var o = Na;
                Na |= 4;
                try {
                    return Yi(98, t.bind(null, e, n, r, i))
                } finally {
                    0 === (Na = o) && (Ka(), Ki())
                }
            }, Ft = function () {
                0 === (49 & Na) && (function () {
                    if (null !== ol) {
                        var t = ol;
                        ol = null, t.forEach((function (t) {
                            t.expiredLanes |= 24 & t.pendingLanes, ml(t, $i())
                        }))
                    }
                    Ki()
                }(), Ll())
            }, Lt = function (t, e) {
                var n = Na;
                Na |= 2;
                try {
                    return t(e)
                } finally {
                    0 === (Na = n) && (Ka(), Ki())
                }
            };
            var lu = {Events: [ri, ii, oi, Dt, Bt, Ll, {current: !1}]},
                uu = {findFiberByHostInstance: ni, bundleType: 0, version: "17.0.2", rendererPackageName: "react-dom"},
                cu = {
                    bundleType: uu.bundleType,
                    version: uu.version,
                    rendererPackageName: uu.rendererPackageName,
                    rendererConfig: uu.rendererConfig,
                    overrideHookState: null,
                    overrideHookStateDeletePath: null,
                    overrideHookStateRenamePath: null,
                    overrideProps: null,
                    overridePropsDeletePath: null,
                    overridePropsRenamePath: null,
                    setSuspenseHandler: null,
                    scheduleUpdate: null,
                    currentDispatcherRef: _.ReactCurrentDispatcher,
                    findHostInstanceByFiber: function (t) {
                        return null === (t = Zt(t)) ? null : t.stateNode
                    },
                    findFiberByHostInstance: uu.findFiberByHostInstance || function () {
                        return null
                    },
                    findHostInstancesForRefresh: null,
                    scheduleRefresh: null,
                    scheduleRoot: null,
                    setRefreshHandler: null,
                    getCurrentFiber: null
                };
            if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                var du = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                if (!du.isDisabled && du.supportsFiber) try {
                    Ii = du.inject(cu), xi = du
                } catch (bt) {
                }
            }
            e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lu, e.createPortal = au, e.findDOMNode = function (t) {
                if (null == t) return null;
                if (1 === t.nodeType) return t;
                var e = t._reactInternals;
                if (void 0 === e) {
                    if ("function" === typeof t.render) throw Error(s(188));
                    throw Error(s(268, Object.keys(t)))
                }
                return t = null === (t = Zt(e)) ? null : t.stateNode
            }, e.flushSync = function (t, e) {
                var n = Na;
                if (0 !== (48 & n)) return t(e);
                Na |= 1;
                try {
                    if (t) return Yi(99, t.bind(null, e))
                } finally {
                    Na = n, Ki()
                }
            }, e.hydrate = function (t, e, n) {
                if (!ou(e)) throw Error(s(200));
                return su(null, t, e, !0, n)
            }, e.render = function (t, e, n) {
                if (!ou(e)) throw Error(s(200));
                return su(null, t, e, !1, n)
            }, e.unmountComponentAtNode = function (t) {
                if (!ou(t)) throw Error(s(40));
                return !!t._reactRootContainer && (Sl((function () {
                    su(null, null, t, !1, (function () {
                        t._reactRootContainer = null, t[ti] = null
                    }))
                })), !0)
            }, e.unstable_batchedUpdates = _l, e.unstable_createPortal = function (t, e) {
                return au(t, e, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
            }, e.unstable_renderSubtreeIntoContainer = function (t, e, n, r) {
                if (!ou(n)) throw Error(s(200));
                if (null == t || void 0 === t._reactInternals) throw Error(s(38));
                return su(t, e, n, !1, r)
            }, e.version = "17.0.2"
        }, 739: (t, e, n) => {
            var r = n(123), i = "function" === typeof Symbol && Symbol.for, o = i ? Symbol.for("react.element") : 60103,
                s = i ? Symbol.for("react.portal") : 60106, a = i ? Symbol.for("react.fragment") : 60107,
                l = i ? Symbol.for("react.strict_mode") : 60108, u = i ? Symbol.for("react.profiler") : 60114,
                c = i ? Symbol.for("react.provider") : 60109, d = i ? Symbol.for("react.context") : 60110,
                f = i ? Symbol.for("react.forward_ref") : 60112, h = i ? Symbol.for("react.suspense") : 60113,
                p = i ? Symbol.for("react.memo") : 60115, y = i ? Symbol.for("react.lazy") : 60116,
                b = "function" === typeof Symbol && Symbol.iterator;

            function m(t) {
                for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }

            var g = {
                isMounted: function () {
                    return !1
                }, enqueueForceUpdate: function () {
                }, enqueueReplaceState: function () {
                }, enqueueSetState: function () {
                }
            }, v = {};

            function w(t, e, n) {
                this.props = t, this.context = e, this.refs = v, this.updater = n || g
            }

            function _() {
            }

            function S(t, e, n) {
                this.props = t, this.context = e, this.refs = v, this.updater = n || g
            }

            w.prototype.isReactComponent = {}, w.prototype.setState = function (t, e) {
                if ("object" !== typeof t && "function" !== typeof t && null != t) throw Error(m(85));
                this.updater.enqueueSetState(this, t, e, "setState")
            }, w.prototype.forceUpdate = function (t) {
                this.updater.enqueueForceUpdate(this, t, "forceUpdate")
            }, _.prototype = w.prototype;
            var I = S.prototype = new _;
            I.constructor = S, r(I, w.prototype), I.isPureReactComponent = !0;
            var x = {current: null}, k = Object.prototype.hasOwnProperty,
                T = {key: !0, ref: !0, __self: !0, __source: !0};

            function E(t, e, n) {
                var r, i = {}, s = null, a = null;
                if (null != e) for (r in void 0 !== e.ref && (a = e.ref), void 0 !== e.key && (s = "" + e.key), e) k.call(e, r) && !T.hasOwnProperty(r) && (i[r] = e[r]);
                var l = arguments.length - 2;
                if (1 === l) i.children = n; else if (1 < l) {
                    for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
                    i.children = u
                }
                if (t && t.defaultProps) for (r in l = t.defaultProps) void 0 === i[r] && (i[r] = l[r]);
                return {$$typeof: o, type: t, key: s, ref: a, props: i, _owner: x.current}
            }

            function C(t) {
                return "object" === typeof t && null !== t && t.$$typeof === o
            }

            var O = /\/+/g, A = [];

            function D(t, e, n, r) {
                if (A.length) {
                    var i = A.pop();
                    return i.result = t, i.keyPrefix = e, i.func = n, i.context = r, i.count = 0, i
                }
                return {result: t, keyPrefix: e, func: n, context: r, count: 0}
            }

            function B(t) {
                t.result = null, t.keyPrefix = null, t.func = null, t.context = null, t.count = 0, 10 > A.length && A.push(t)
            }

            function N(t, e, n, r) {
                var i = typeof t;
                "undefined" !== i && "boolean" !== i || (t = null);
                var a = !1;
                if (null === t) a = !0; else switch (i) {
                    case"string":
                    case"number":
                        a = !0;
                        break;
                    case"object":
                        switch (t.$$typeof) {
                            case o:
                            case s:
                                a = !0
                        }
                }
                if (a) return n(r, t, "" === e ? "." + F(t, 0) : e), 1;
                if (a = 0, e = "" === e ? "." : e + ":", Array.isArray(t)) for (var l = 0; l < t.length; l++) {
                    var u = e + F(i = t[l], l);
                    a += N(i, u, n, r)
                } else if (null === t || "object" !== typeof t ? u = null : u = "function" === typeof (u = b && t[b] || t["@@iterator"]) ? u : null, "function" === typeof u) for (t = u.call(t), l = 0; !(i = t.next()).done;) a += N(i = i.value, u = e + F(i, l++), n, r); else if ("object" === i) throw n = "" + t, Error(m(31, "[object Object]" === n ? "object with keys {" + Object.keys(t).join(", ") + "}" : n, ""));
                return a
            }

            function M(t, e, n) {
                return null == t ? 0 : N(t, "", e, n)
            }

            function F(t, e) {
                return "object" === typeof t && null !== t && null != t.key ? function (t) {
                    var e = {"=": "=0", ":": "=2"};
                    return "$" + ("" + t).replace(/[=:]/g, (function (t) {
                        return e[t]
                    }))
                }(t.key) : e.toString(36)
            }

            function L(t, e) {
                t.func.call(t.context, e, t.count++)
            }

            function P(t, e, n) {
                var r = t.result, i = t.keyPrefix;
                t = t.func.call(t.context, e, t.count++), Array.isArray(t) ? R(t, r, n, (function (t) {
                    return t
                })) : null != t && (C(t) && (t = function (t, e) {
                    return {$$typeof: o, type: t.type, key: e, ref: t.ref, props: t.props, _owner: t._owner}
                }(t, i + (!t.key || e && e.key === t.key ? "" : ("" + t.key).replace(O, "$&/") + "/") + n)), r.push(t))
            }

            function R(t, e, n, r, i) {
                var o = "";
                null != n && (o = ("" + n).replace(O, "$&/") + "/"), M(t, P, e = D(e, o, r, i)), B(e)
            }

            var U = {current: null};

            function z() {
                var t = U.current;
                if (null === t) throw Error(m(321));
                return t
            }

            var j = {
                ReactCurrentDispatcher: U,
                ReactCurrentBatchConfig: {suspense: null},
                ReactCurrentOwner: x,
                IsSomeRendererActing: {current: !1},
                assign: r
            };
            e.Children = {
                map: function (t, e, n) {
                    if (null == t) return t;
                    var r = [];
                    return R(t, r, null, e, n), r
                }, forEach: function (t, e, n) {
                    if (null == t) return t;
                    M(t, L, e = D(null, null, e, n)), B(e)
                }, count: function (t) {
                    return M(t, (function () {
                        return null
                    }), null)
                }, toArray: function (t) {
                    var e = [];
                    return R(t, e, null, (function (t) {
                        return t
                    })), e
                }, only: function (t) {
                    if (!C(t)) throw Error(m(143));
                    return t
                }
            }, e.Component = w, e.Fragment = a, e.Profiler = u, e.PureComponent = S, e.StrictMode = l, e.Suspense = h, e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = j, e.cloneElement = function (t, e, n) {
                if (null === t || void 0 === t) throw Error(m(267, t));
                var i = r({}, t.props), s = t.key, a = t.ref, l = t._owner;
                if (null != e) {
                    if (void 0 !== e.ref && (a = e.ref, l = x.current), void 0 !== e.key && (s = "" + e.key), t.type && t.type.defaultProps) var u = t.type.defaultProps;
                    for (c in e) k.call(e, c) && !T.hasOwnProperty(c) && (i[c] = void 0 === e[c] && void 0 !== u ? u[c] : e[c])
                }
                var c = arguments.length - 2;
                if (1 === c) i.children = n; else if (1 < c) {
                    u = Array(c);
                    for (var d = 0; d < c; d++) u[d] = arguments[d + 2];
                    i.children = u
                }
                return {$$typeof: o, type: t.type, key: s, ref: a, props: i, _owner: l}
            }, e.createContext = function (t, e) {
                return void 0 === e && (e = null), (t = {
                    $$typeof: d,
                    _calculateChangedBits: e,
                    _currentValue: t,
                    _currentValue2: t,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = {$$typeof: c, _context: t}, t.Consumer = t
            }, e.createElement = E, e.createFactory = function (t) {
                var e = E.bind(null, t);
                return e.type = t, e
            }, e.createRef = function () {
                return {current: null}
            }, e.forwardRef = function (t) {
                return {$$typeof: f, render: t}
            }, e.isValidElement = C, e.lazy = function (t) {
                return {$$typeof: y, _ctor: t, _status: -1, _result: null}
            }, e.memo = function (t, e) {
                return {$$typeof: p, type: t, compare: void 0 === e ? null : e}
            }, e.useCallback = function (t, e) {
                return z().useCallback(t, e)
            }, e.useContext = function (t, e) {
                return z().useContext(t, e)
            }, e.useDebugValue = function () {
            }, e.useEffect = function (t, e) {
                return z().useEffect(t, e)
            }, e.useImperativeHandle = function (t, e, n) {
                return z().useImperativeHandle(t, e, n)
            }, e.useLayoutEffect = function (t, e) {
                return z().useLayoutEffect(t, e)
            }, e.useMemo = function (t, e) {
                return z().useMemo(t, e)
            }, e.useReducer = function (t, e, n) {
                return z().useReducer(t, e, n)
            }, e.useRef = function (t) {
                return z().useRef(t)
            }, e.useState = function (t) {
                return z().useState(t)
            }, e.version = "16.14.0"
        }, 763: (t, e, n) => {
            t.exports = n(983)
        }, 853: (t, e, n) => {
            t.exports = n(234)
        }, 904: (t, e, n) => {
            t.exports = n(739)
        }, 950: (t, e, n) => {
            !function t() {
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)
                } catch (e) {
                    console.error(e)
                }
            }(), t.exports = n(730)
        }, 983: (t, e) => {
            var n = "function" === typeof Symbol && Symbol.for, r = n ? Symbol.for("react.element") : 60103,
                i = n ? Symbol.for("react.portal") : 60106, o = n ? Symbol.for("react.fragment") : 60107,
                s = n ? Symbol.for("react.strict_mode") : 60108, a = n ? Symbol.for("react.profiler") : 60114,
                l = n ? Symbol.for("react.provider") : 60109, u = n ? Symbol.for("react.context") : 60110,
                c = n ? Symbol.for("react.async_mode") : 60111, d = n ? Symbol.for("react.concurrent_mode") : 60111,
                f = n ? Symbol.for("react.forward_ref") : 60112, h = n ? Symbol.for("react.suspense") : 60113,
                p = n ? Symbol.for("react.suspense_list") : 60120, y = n ? Symbol.for("react.memo") : 60115,
                b = n ? Symbol.for("react.lazy") : 60116, m = n ? Symbol.for("react.block") : 60121,
                g = n ? Symbol.for("react.fundamental") : 60117, v = n ? Symbol.for("react.responder") : 60118,
                w = n ? Symbol.for("react.scope") : 60119;

            function _(t) {
                if ("object" === typeof t && null !== t) {
                    var e = t.$$typeof;
                    switch (e) {
                        case r:
                            switch (t = t.type) {
                                case c:
                                case d:
                                case o:
                                case a:
                                case s:
                                case h:
                                    return t;
                                default:
                                    switch (t = t && t.$$typeof) {
                                        case u:
                                        case f:
                                        case b:
                                        case y:
                                        case l:
                                            return t;
                                        default:
                                            return e
                                    }
                            }
                        case i:
                            return e
                    }
                }
            }

            function S(t) {
                return _(t) === d
            }

            e.AsyncMode = c, e.ConcurrentMode = d, e.ContextConsumer = u, e.ContextProvider = l, e.Element = r, e.ForwardRef = f, e.Fragment = o, e.Lazy = b, e.Memo = y, e.Portal = i, e.Profiler = a, e.StrictMode = s, e.Suspense = h, e.isAsyncMode = function (t) {
                return S(t) || _(t) === c
            }, e.isConcurrentMode = S, e.isContextConsumer = function (t) {
                return _(t) === u
            }, e.isContextProvider = function (t) {
                return _(t) === l
            }, e.isElement = function (t) {
                return "object" === typeof t && null !== t && t.$$typeof === r
            }, e.isForwardRef = function (t) {
                return _(t) === f
            }, e.isFragment = function (t) {
                return _(t) === o
            }, e.isLazy = function (t) {
                return _(t) === b
            }, e.isMemo = function (t) {
                return _(t) === y
            }, e.isPortal = function (t) {
                return _(t) === i
            }, e.isProfiler = function (t) {
                return _(t) === a
            }, e.isStrictMode = function (t) {
                return _(t) === s
            }, e.isSuspense = function (t) {
                return _(t) === h
            }, e.isValidElementType = function (t) {
                return "string" === typeof t || "function" === typeof t || t === o || t === d || t === a || t === s || t === h || t === p || "object" === typeof t && null !== t && (t.$$typeof === b || t.$$typeof === y || t.$$typeof === l || t.$$typeof === u || t.$$typeof === f || t.$$typeof === g || t.$$typeof === v || t.$$typeof === w || t.$$typeof === m)
            }, e.typeOf = _
        }
    }, e = {};

    function n(r) {
        var i = e[r];
        if (void 0 !== i) return i.exports;
        var o = e[r] = {exports: {}};
        return t[r](o, o.exports, n), o.exports
    }

    n.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return n.d(e, {a: e}), e
    }, n.d = (t, e) => {
        for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {enumerable: !0, get: e[r]})
    }, n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
    var r, i, o, s, a, l, u, c, d, f = n(43), h = n(950), p = n(219), y = n.n(p), b = n(904);
    !function (t) {
        t[t.V1 = 0] = "V1", t[t.V2 = 1] = "V2", t[t.V3 = 2] = "V3", t[t.V4 = 3] = "V4", t[t.V5 = 4] = "V5"
    }(r || (r = {})), function (t) {
        t[t.Sparse = 0] = "Sparse", t[t.Dense = 1] = "Dense"
    }(i || (i = {})), function (t) {
        t[t.HALF = 0] = "HALF", t[t.SINGLE = 1] = "SINGLE", t[t.DOUBLE = 2] = "DOUBLE"
    }(o || (o = {})), function (t) {
        t[t.DAY = 0] = "DAY", t[t.MILLISECOND = 1] = "MILLISECOND"
    }(s || (s = {})), function (t) {
        t[t.SECOND = 0] = "SECOND", t[t.MILLISECOND = 1] = "MILLISECOND", t[t.MICROSECOND = 2] = "MICROSECOND", t[t.NANOSECOND = 3] = "NANOSECOND"
    }(a || (a = {})), function (t) {
        t[t.YEAR_MONTH = 0] = "YEAR_MONTH", t[t.DAY_TIME = 1] = "DAY_TIME", t[t.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO"
    }(l || (l = {})), function (t) {
        t[t.NONE = 0] = "NONE", t[t.Schema = 1] = "Schema", t[t.DictionaryBatch = 2] = "DictionaryBatch", t[t.RecordBatch = 3] = "RecordBatch", t[t.Tensor = 4] = "Tensor", t[t.SparseTensor = 5] = "SparseTensor"
    }(u || (u = {})), function (t) {
        t[t.NONE = 0] = "NONE", t[t.Null = 1] = "Null", t[t.Int = 2] = "Int", t[t.Float = 3] = "Float", t[t.Binary = 4] = "Binary", t[t.Utf8 = 5] = "Utf8", t[t.Bool = 6] = "Bool", t[t.Decimal = 7] = "Decimal", t[t.Date = 8] = "Date", t[t.Time = 9] = "Time", t[t.Timestamp = 10] = "Timestamp", t[t.Interval = 11] = "Interval", t[t.List = 12] = "List", t[t.Struct = 13] = "Struct", t[t.Union = 14] = "Union", t[t.FixedSizeBinary = 15] = "FixedSizeBinary", t[t.FixedSizeList = 16] = "FixedSizeList", t[t.Map = 17] = "Map", t[t.Dictionary = -1] = "Dictionary", t[t.Int8 = -2] = "Int8", t[t.Int16 = -3] = "Int16", t[t.Int32 = -4] = "Int32", t[t.Int64 = -5] = "Int64", t[t.Uint8 = -6] = "Uint8", t[t.Uint16 = -7] = "Uint16", t[t.Uint32 = -8] = "Uint32", t[t.Uint64 = -9] = "Uint64", t[t.Float16 = -10] = "Float16", t[t.Float32 = -11] = "Float32", t[t.Float64 = -12] = "Float64", t[t.DateDay = -13] = "DateDay", t[t.DateMillisecond = -14] = "DateMillisecond", t[t.TimestampSecond = -15] = "TimestampSecond", t[t.TimestampMillisecond = -16] = "TimestampMillisecond", t[t.TimestampMicrosecond = -17] = "TimestampMicrosecond", t[t.TimestampNanosecond = -18] = "TimestampNanosecond", t[t.TimeSecond = -19] = "TimeSecond", t[t.TimeMillisecond = -20] = "TimeMillisecond", t[t.TimeMicrosecond = -21] = "TimeMicrosecond", t[t.TimeNanosecond = -22] = "TimeNanosecond", t[t.DenseUnion = -23] = "DenseUnion", t[t.SparseUnion = -24] = "SparseUnion", t[t.IntervalDayTime = -25] = "IntervalDayTime", t[t.IntervalYearMonth = -26] = "IntervalYearMonth"
    }(c || (c = {})), function (t) {
        t[t.OFFSET = 0] = "OFFSET", t[t.DATA = 1] = "DATA", t[t.VALIDITY = 2] = "VALIDITY", t[t.TYPE = 3] = "TYPE"
    }(d || (d = {}));
    const [m, g] = (() => {
            const t = () => {
                throw new Error("BigInt is not available in this environment")
            };

            function e() {
                throw t()
            }

            return e.asIntN = () => {
                throw t()
            }, e.asUintN = () => {
                throw t()
            }, "undefined" !== typeof BigInt ? [BigInt, !0] : [e, !1]
        })(), [v, w] = (() => {
            const t = () => {
                throw new Error("BigInt64Array is not available in this environment")
            };
            return "undefined" !== typeof BigInt64Array ? [BigInt64Array, !0] : [class {
                static get BYTES_PER_ELEMENT() {
                    return 8
                }

                static of() {
                    throw t()
                }

                static from() {
                    throw t()
                }

                constructor() {
                    throw t()
                }
            }, !1]
        })(), [_, S] = (() => {
            const t = () => {
                throw new Error("BigUint64Array is not available in this environment")
            };
            return "undefined" !== typeof BigUint64Array ? [BigUint64Array, !0] : [class {
                static get BYTES_PER_ELEMENT() {
                    return 8
                }

                static of() {
                    throw t()
                }

                static from() {
                    throw t()
                }

                constructor() {
                    throw t()
                }
            }, !1]
        })(), I = t => "number" === typeof t, x = t => "boolean" === typeof t, k = t => "function" === typeof t,
        T = t => null != t && Object(t) === t, E = t => T(t) && k(t.then), C = t => T(t) && k(t[Symbol.iterator]),
        O = t => T(t) && k(t[Symbol.asyncIterator]), A = t => T(t) && T(t.schema),
        D = t => T(t) && "done" in t && "value" in t, B = t => T(t) && k(t.stat) && I(t.fd), N = t => T(t) && F(t.body),
        M = t => "_getDOMStream" in t && "_getNodeStream" in t, F = t => T(t) && k(t.cancel) && k(t.getReader) && !M(t),
        L = t => T(t) && k(t.read) && k(t.pipe) && x(t.readable) && !M(t);

    function P(t) {
        if (null === t) return "null";
        if (undefined === t) return "undefined";
        switch (typeof t) {
            case"number":
            case"bigint":
                return `${t}`;
            case"string":
                return `"${t}"`
        }
        return "function" === typeof t[Symbol.toPrimitive] ? t[Symbol.toPrimitive]("string") : ArrayBuffer.isView(t) ? t instanceof v || t instanceof _ ? `[${[...t].map((t => P(t)))}]` : `[${t}]` : ArrayBuffer.isView(t) ? `[${t}]` : JSON.stringify(t, ((t, e) => "bigint" === typeof e ? `${e}` : e))
    }

    function R(t, e, n, r) {
        return new (n || (n = Promise))((function (i, o) {
            function s(t) {
                try {
                    l(r.next(t))
                } catch (e) {
                    o(e)
                }
            }

            function a(t) {
                try {
                    l(r.throw(t))
                } catch (e) {
                    o(e)
                }
            }

            function l(t) {
                var e;
                t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function (t) {
                    t(e)
                }))).then(s, a)
            }

            l((r = r.apply(t, e || [])).next())
        }))
    }

    Object.create;

    function U(t) {
        var e = "function" === typeof Symbol && Symbol.iterator, n = e && t[e], r = 0;
        if (n) return n.call(t);
        if (t && "number" === typeof t.length) return {
            next: function () {
                return t && r >= t.length && (t = void 0), {value: t && t[r++], done: !t}
            }
        };
        throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function z(t) {
        return this instanceof z ? (this.v = t, this) : new z(t)
    }

    function j(t, e, n) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var r, i = n.apply(t, e || []), o = [];
        return r = Object.create(("function" === typeof AsyncIterator ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", (function (t) {
            return function (e) {
                return Promise.resolve(e).then(t, u)
            }
        })), r[Symbol.asyncIterator] = function () {
            return this
        }, r;

        function s(t, e) {
            i[t] && (r[t] = function (e) {
                return new Promise((function (n, r) {
                    o.push([t, e, n, r]) > 1 || a(t, e)
                }))
            }, e && (r[t] = e(r[t])))
        }

        function a(t, e) {
            try {
                (n = i[t](e)).value instanceof z ? Promise.resolve(n.value.v).then(l, u) : c(o[0][2], n)
            } catch (r) {
                c(o[0][3], r)
            }
            var n
        }

        function l(t) {
            a("next", t)
        }

        function u(t) {
            a("throw", t)
        }

        function c(t, e) {
            t(e), o.shift(), o.length && a(o[0][0], o[0][1])
        }
    }

    function V(t) {
        var e, n;
        return e = {}, r("next"), r("throw", (function (t) {
            throw t
        })), r("return"), e[Symbol.iterator] = function () {
            return this
        }, e;

        function r(r, i) {
            e[r] = t[r] ? function (e) {
                return (n = !n) ? {value: z(t[r](e)), done: !1} : i ? i(e) : e
            } : i
        }
    }

    function $(t) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var e, n = t[Symbol.asyncIterator];
        return n ? n.call(t) : (t = U(t), e = {}, r("next"), r("throw"), r("return"), e[Symbol.asyncIterator] = function () {
            return this
        }, e);

        function r(n) {
            e[n] = t[n] && function (e) {
                return new Promise((function (r, i) {
                    (function (t, e, n, r) {
                        Promise.resolve(r).then((function (e) {
                            t({value: e, done: n})
                        }), e)
                    })(r, i, (e = t[n](e)).done, e.value)
                }))
            }
        }
    }

    Object.create;
    "function" === typeof SuppressedError && SuppressedError;
    const W = new TextDecoder("utf-8"), H = t => W.decode(t), Y = new TextEncoder, Q = t => Y.encode(t),
        K = "undefined" !== typeof SharedArrayBuffer ? SharedArrayBuffer : ArrayBuffer;

    function q(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e.byteLength;
        const i = t.byteLength, o = new Uint8Array(t.buffer, t.byteOffset, i),
            s = new Uint8Array(e.buffer, e.byteOffset, Math.min(r, i));
        return o.set(s, n), t
    }

    function G(t, e) {
        const n = function (t) {
            const e = t[0] ? [t[0]] : [];
            let n, r, i, o;
            for (let s, a, l = 0, u = 0, c = t.length; ++l < c;) s = e[u], a = t[l], !s || !a || s.buffer !== a.buffer || a.byteOffset < s.byteOffset ? a && (e[++u] = a) : (({
                byteOffset: n, byteLength: i
            } = s), ({
                byteOffset: r, byteLength: o
            } = a), n + i < r || r + o < n ? a && (e[++u] = a) : e[u] = new Uint8Array(s.buffer, n, r - n + o));
            return e
        }(t), r = n.reduce(((t, e) => t + e.byteLength), 0);
        let i, o, s, a = 0, l = -1;
        const u = Math.min(e || Number.POSITIVE_INFINITY, r);
        for (const c = n.length; ++l < c;) {
            if (i = n[l], o = i.subarray(0, Math.min(i.length, u - a)), u <= a + o.length) {
                o.length < i.length ? n[l] = i.subarray(o.length) : o.length === i.length && l++, s ? q(s, o, a) : s = o;
                break
            }
            q(s || (s = new Uint8Array(u)), o, a), a += o.length
        }
        return [s || new Uint8Array(0), n.slice(l), r - (s ? s.byteLength : 0)]
    }

    function J(t, e) {
        let n = D(e) ? e.value : e;
        return n instanceof t ? t === Uint8Array ? new t(n.buffer, n.byteOffset, n.byteLength) : n : n ? ("string" === typeof n && (n = Q(n)), n instanceof ArrayBuffer || n instanceof K ? new t(n) : T(r = n) && k(r.clear) && k(r.bytes) && k(r.position) && k(r.setPosition) && k(r.capacity) && k(r.getBufferIdentifier) && k(r.createLong) ? J(t, n.bytes()) : ArrayBuffer.isView(n) ? n.byteLength <= 0 ? new t(0) : new t(n.buffer, n.byteOffset, n.byteLength / t.BYTES_PER_ELEMENT) : t.from(n)) : new t(0);
        var r
    }

    const X = t => J(Int32Array, t), Z = t => J(Uint8Array, t), tt = t => (t.next(), t);

    function* et(t, e) {
        const n = function* (t) {
                yield t
            },
            r = "string" === typeof e || ArrayBuffer.isView(e) || e instanceof ArrayBuffer || e instanceof K ? n(e) : C(e) ? e : n(e);
        return yield* tt(function* (e) {
            let n = null;
            do {
                n = e.next(yield J(t, n))
            } while (!n.done)
        }(r[Symbol.iterator]())), new t
    }

    function nt(t, e) {
        return j(this, arguments, (function* () {
            if (E(e)) return yield z(yield z(yield* V($(nt(t, yield z(e))))));
            const n = function (t) {
                    return j(this, arguments, (function* () {
                        yield yield z(yield z(t))
                    }))
                },
                r = "string" === typeof e || ArrayBuffer.isView(e) || e instanceof ArrayBuffer || e instanceof K ? n(e) : C(e) ? function (t) {
                    return j(this, arguments, (function* () {
                        yield z(yield* V($(tt(function* (t) {
                            let e = null;
                            do {
                                e = t.next(yield null === e || void 0 === e ? void 0 : e.value)
                            } while (!e.done)
                        }(t[Symbol.iterator]())))))
                    }))
                }(e) : O(e) ? e : n(e);
            return yield z(yield* V($(tt(function (e) {
                return j(this, arguments, (function* () {
                    let n = null;
                    do {
                        n = yield z(e.next(yield yield z(J(t, n))))
                    } while (!n.done)
                }))
            }(r[Symbol.asyncIterator]()))))), yield z(new t)
        }))
    }

    function rt(t, e, n) {
        if (0 !== t) {
            n = n.slice(0, e + 1);
            for (let r = -1; ++r <= e;) n[r] += t
        }
        return n
    }

    const it = Symbol.for("isArrowBigNum");

    function ot(t) {
        for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
        return 0 === n.length ? Object.setPrototypeOf(J(this.TypedArray, t), this.constructor.prototype) : Object.setPrototypeOf(new this.TypedArray(t, ...n), this.constructor.prototype)
    }

    function st() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return ot.apply(this, e)
    }

    function at() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return ot.apply(this, e)
    }

    function lt() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return ot.apply(this, e)
    }

    function ut(t) {
        const {buffer: e, byteOffset: n, length: r, signed: i} = t, o = new _(e, n, r),
            s = i && o[o.length - 1] & BigInt(1) << BigInt(63);
        let a = s ? BigInt(1) : BigInt(0), l = BigInt(0);
        if (s) {
            for (const t of o) a += ~t * (BigInt(1) << BigInt(32) * l++);
            a *= BigInt(-1)
        } else for (const u of o) a += u * (BigInt(1) << BigInt(32) * l++);
        return a
    }

    let ct, dt;

    function ft(t) {
        let e = "";
        const n = new Uint32Array(2);
        let r = new Uint16Array(t.buffer, t.byteOffset, t.byteLength / 2);
        const i = new Uint32Array((r = new Uint16Array(r).reverse()).buffer);
        let o = -1;
        const s = r.length - 1;
        do {
            for (n[0] = r[o = 0]; o < s;) r[o++] = n[1] = n[0] / 10, n[0] = (n[0] - 10 * n[1] << 16) + r[o];
            r[o] = n[1] = n[0] / 10, n[0] = n[0] - 10 * n[1], e = `${n[0]}${e}`
        } while (i[0] || i[1] || i[2] || i[3]);
        return null !== e && void 0 !== e ? e : "0"
    }

    ot.prototype[it] = !0, ot.prototype.toJSON = function () {
        return `"${ct(this)}"`
    }, ot.prototype.valueOf = function () {
        return ut(this)
    }, ot.prototype.toString = function () {
        return ct(this)
    }, ot.prototype[Symbol.toPrimitive] = function () {
        switch (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default") {
            case"number":
                return ut(this);
            case"string":
                return ct(this);
            case"default":
                return dt(this)
        }
        return ct(this)
    }, Object.setPrototypeOf(st.prototype, Object.create(Int32Array.prototype)), Object.setPrototypeOf(at.prototype, Object.create(Uint32Array.prototype)), Object.setPrototypeOf(lt.prototype, Object.create(Uint32Array.prototype)), Object.assign(st.prototype, ot.prototype, {
        constructor: st, signed: !0, TypedArray: Int32Array, BigIntArray: v
    }), Object.assign(at.prototype, ot.prototype, {
        constructor: at, signed: !1, TypedArray: Uint32Array, BigIntArray: _
    }), Object.assign(lt.prototype, ot.prototype, {
        constructor: lt, signed: !0, TypedArray: Uint32Array, BigIntArray: _
    }), g ? (dt = t => 8 === t.byteLength ? new t.BigIntArray(t.buffer, t.byteOffset, 1)[0] : ft(t), ct = t => 8 === t.byteLength ? `${new t.BigIntArray(t.buffer, t.byteOffset, 1)[0]}` : ft(t)) : (ct = ft, dt = ct);

    class ht {
        static new(t, e) {
            switch (e) {
                case!0:
                    return new st(t);
                case!1:
                    return new at(t)
            }
            switch (t.constructor) {
                case Int8Array:
                case Int16Array:
                case Int32Array:
                case v:
                    return new st(t)
            }
            return 16 === t.byteLength ? new lt(t) : new at(t)
        }

        static signed(t) {
            return new st(t)
        }

        static unsigned(t) {
            return new at(t)
        }

        static decimal(t) {
            return new lt(t)
        }

        constructor(t, e) {
            return ht.new(t, e)
        }
    }

    var pt, yt, bt, mt, gt, vt, wt, _t, St, It, xt, kt, Tt, Et, Ct, Ot, At, Dt, Bt, Nt;

    class Mt {
        static isNull(t) {
            return (null === t || void 0 === t ? void 0 : t.typeId) === c.Null
        }

        static isInt(t) {
            return (null === t || void 0 === t ? void 0 : t.typeId) === c.Int
        }

        static isFloat(t) {
            return (null === t || void 0 === t ? void 0 : t.typeId) === c.Float
        }

        static isBinary(t) {
            return (null === t || void 0 === t ? void 0 : t.typeId) === c.Binary
        }

        static isUtf8(t) {
            return (null === t || void 0 === t ? void 0 : t.typeId) === c.Utf8
        }

        static isBool(t) {
            return (null === t || void 0 === t ? void 0 : t.typeId) === c.Bool
        }

        static isDecimal(t) {
            return (null === t || void 0 === t ? void 0 : t.typeId) === c.Decimal
        }

        static isDate(t) {
            return (null === t || void 0 === t ? void 0 : t.typeId) === c.Date
        }

        static isTime(t) {
            return (null === t || void 0 === t ? void 0 : t.typeId) === c.Time
        }

        static isTimestamp(t) {
            return (null === t || void 0 === t ? void 0 : t.typeId) === c.Timestamp
        }

        static isInterval(t) {
            return (null === t || void 0 === t ? void 0 : t.typeId) === c.Interval
        }

        static isList(t) {
            return (null === t || void 0 === t ? void 0 : t.typeId) === c.List
        }

        static isStruct(t) {
            return (null === t || void 0 === t ? void 0 : t.typeId) === c.Struct
        }

        static isUnion(t) {
            return (null === t || void 0 === t ? void 0 : t.typeId) === c.Union
        }

        static isFixedSizeBinary(t) {
            return (null === t || void 0 === t ? void 0 : t.typeId) === c.FixedSizeBinary
        }

        static isFixedSizeList(t) {
            return (null === t || void 0 === t ? void 0 : t.typeId) === c.FixedSizeList
        }

        static isMap(t) {
            return (null === t || void 0 === t ? void 0 : t.typeId) === c.Map
        }

        static isDictionary(t) {
            return (null === t || void 0 === t ? void 0 : t.typeId) === c.Dictionary
        }

        static isDenseUnion(t) {
            return Mt.isUnion(t) && t.mode === i.Dense
        }

        static isSparseUnion(t) {
            return Mt.isUnion(t) && t.mode === i.Sparse
        }

        get typeId() {
            return c.NONE
        }
    }

    pt = Symbol.toStringTag, Mt[pt] = ((Nt = Mt.prototype).children = null, Nt.ArrayType = Array, Nt[Symbol.toStringTag] = "DataType");

    class Ft extends Mt {
        toString() {
            return "Null"
        }

        get typeId() {
            return c.Null
        }
    }

    yt = Symbol.toStringTag, Ft[yt] = (t => t[Symbol.toStringTag] = "Null")(Ft.prototype);

    class Lt extends Mt {
        constructor(t, e) {
            super(), this.isSigned = t, this.bitWidth = e
        }

        get typeId() {
            return c.Int
        }

        get ArrayType() {
            switch (this.bitWidth) {
                case 8:
                    return this.isSigned ? Int8Array : Uint8Array;
                case 16:
                    return this.isSigned ? Int16Array : Uint16Array;
                case 32:
                    return this.isSigned ? Int32Array : Uint32Array;
                case 64:
                    return this.isSigned ? v : _
            }
            throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)
        }

        toString() {
            return `${this.isSigned ? "I" : "Ui"}nt${this.bitWidth}`
        }
    }

    bt = Symbol.toStringTag, Lt[bt] = (t => (t.isSigned = null, t.bitWidth = null, t[Symbol.toStringTag] = "Int"))(Lt.prototype);

    class Pt extends Lt {
        constructor() {
            super(!0, 32)
        }

        get ArrayType() {
            return Int32Array
        }
    }

    Object.defineProperty(class extends Lt {
        constructor() {
            super(!0, 8)
        }

        get ArrayType() {
            return Int8Array
        }
    }.prototype, "ArrayType", {value: Int8Array}), Object.defineProperty(class extends Lt {
        constructor() {
            super(!0, 16)
        }

        get ArrayType() {
            return Int16Array
        }
    }.prototype, "ArrayType", {value: Int16Array}), Object.defineProperty(Pt.prototype, "ArrayType", {value: Int32Array}), Object.defineProperty(class extends Lt {
        constructor() {
            super(!0, 64)
        }

        get ArrayType() {
            return v
        }
    }.prototype, "ArrayType", {value: v}), Object.defineProperty(class extends Lt {
        constructor() {
            super(!1, 8)
        }

        get ArrayType() {
            return Uint8Array
        }
    }.prototype, "ArrayType", {value: Uint8Array}), Object.defineProperty(class extends Lt {
        constructor() {
            super(!1, 16)
        }

        get ArrayType() {
            return Uint16Array
        }
    }.prototype, "ArrayType", {value: Uint16Array}), Object.defineProperty(class extends Lt {
        constructor() {
            super(!1, 32)
        }

        get ArrayType() {
            return Uint32Array
        }
    }.prototype, "ArrayType", {value: Uint32Array}), Object.defineProperty(class extends Lt {
        constructor() {
            super(!1, 64)
        }

        get ArrayType() {
            return _
        }
    }.prototype, "ArrayType", {value: _});

    class Rt extends Mt {
        constructor(t) {
            super(), this.precision = t
        }

        get typeId() {
            return c.Float
        }

        get ArrayType() {
            switch (this.precision) {
                case o.HALF:
                    return Uint16Array;
                case o.SINGLE:
                    return Float32Array;
                case o.DOUBLE:
                    return Float64Array
            }
            throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)
        }

        toString() {
            return `Float${this.precision << 5 || 16}`
        }
    }

    mt = Symbol.toStringTag, Rt[mt] = (t => (t.precision = null, t[Symbol.toStringTag] = "Float"))(Rt.prototype);
    Object.defineProperty(class extends Rt {
        constructor() {
            super(o.HALF)
        }
    }.prototype, "ArrayType", {value: Uint16Array}), Object.defineProperty(class extends Rt {
        constructor() {
            super(o.SINGLE)
        }
    }.prototype, "ArrayType", {value: Float32Array}), Object.defineProperty(class extends Rt {
        constructor() {
            super(o.DOUBLE)
        }
    }.prototype, "ArrayType", {value: Float64Array});

    class Ut extends Mt {
        constructor() {
            super()
        }

        get typeId() {
            return c.Binary
        }

        toString() {
            return "Binary"
        }
    }

    gt = Symbol.toStringTag, Ut[gt] = (t => (t.ArrayType = Uint8Array, t[Symbol.toStringTag] = "Binary"))(Ut.prototype);

    class zt extends Mt {
        constructor() {
            super()
        }

        get typeId() {
            return c.Utf8
        }

        toString() {
            return "Utf8"
        }
    }

    vt = Symbol.toStringTag, zt[vt] = (t => (t.ArrayType = Uint8Array, t[Symbol.toStringTag] = "Utf8"))(zt.prototype);

    class jt extends Mt {
        constructor() {
            super()
        }

        get typeId() {
            return c.Bool
        }

        toString() {
            return "Bool"
        }
    }

    wt = Symbol.toStringTag, jt[wt] = (t => (t.ArrayType = Uint8Array, t[Symbol.toStringTag] = "Bool"))(jt.prototype);

    class Vt extends Mt {
        constructor(t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 128;
            super(), this.scale = t, this.precision = e, this.bitWidth = n
        }

        get typeId() {
            return c.Decimal
        }

        toString() {
            return `Decimal[${this.precision}e${this.scale > 0 ? "+" : ""}${this.scale}]`
        }
    }

    _t = Symbol.toStringTag, Vt[_t] = (t => (t.scale = null, t.precision = null, t.ArrayType = Uint32Array, t[Symbol.toStringTag] = "Decimal"))(Vt.prototype);

    class $t extends Mt {
        constructor(t) {
            super(), this.unit = t
        }

        get typeId() {
            return c.Date
        }

        toString() {
            return `Date${32 * (this.unit + 1)}<${s[this.unit]}>`
        }
    }

    St = Symbol.toStringTag, $t[St] = (t => (t.unit = null, t.ArrayType = Int32Array, t[Symbol.toStringTag] = "Date"))($t.prototype);

    class Wt extends Mt {
        constructor(t, e) {
            super(), this.unit = t, this.bitWidth = e
        }

        get typeId() {
            return c.Time
        }

        toString() {
            return `Time${this.bitWidth}<${a[this.unit]}>`
        }

        get ArrayType() {
            switch (this.bitWidth) {
                case 32:
                    return Int32Array;
                case 64:
                    return v
            }
            throw new Error(`Unrecognized ${this[Symbol.toStringTag]} type`)
        }
    }

    It = Symbol.toStringTag, Wt[It] = (t => (t.unit = null, t.bitWidth = null, t[Symbol.toStringTag] = "Time"))(Wt.prototype);

    class Ht extends Mt {
        constructor(t, e) {
            super(), this.unit = t, this.timezone = e
        }

        get typeId() {
            return c.Timestamp
        }

        toString() {
            return `Timestamp<${a[this.unit]}${this.timezone ? `, ${this.timezone}` : ""}>`
        }
    }

    xt = Symbol.toStringTag, Ht[xt] = (t => (t.unit = null, t.timezone = null, t.ArrayType = Int32Array, t[Symbol.toStringTag] = "Timestamp"))(Ht.prototype);

    class Yt extends Mt {
        constructor(t) {
            super(), this.unit = t
        }

        get typeId() {
            return c.Interval
        }

        toString() {
            return `Interval<${l[this.unit]}>`
        }
    }

    kt = Symbol.toStringTag, Yt[kt] = (t => (t.unit = null, t.ArrayType = Int32Array, t[Symbol.toStringTag] = "Interval"))(Yt.prototype);

    class Qt extends Mt {
        constructor(t) {
            super(), this.children = [t]
        }

        get typeId() {
            return c.List
        }

        toString() {
            return `List<${this.valueType}>`
        }

        get valueType() {
            return this.children[0].type
        }

        get valueField() {
            return this.children[0]
        }

        get ArrayType() {
            return this.valueType.ArrayType
        }
    }

    Tt = Symbol.toStringTag, Qt[Tt] = (t => (t.children = null, t[Symbol.toStringTag] = "List"))(Qt.prototype);

    class Kt extends Mt {
        constructor(t) {
            super(), this.children = t
        }

        get typeId() {
            return c.Struct
        }

        toString() {
            return `Struct<{${this.children.map((t => `${t.name}:${t.type}`)).join(", ")}}>`
        }
    }

    Et = Symbol.toStringTag, Kt[Et] = (t => (t.children = null, t[Symbol.toStringTag] = "Struct"))(Kt.prototype);

    class qt extends Mt {
        constructor(t, e, n) {
            super(), this.mode = t, this.children = n, this.typeIds = e = Int32Array.from(e), this.typeIdToChildIndex = e.reduce(((t, e, n) => (t[e] = n) && t || t), Object.create(null))
        }

        get typeId() {
            return c.Union
        }

        toString() {
            return `${this[Symbol.toStringTag]}<${this.children.map((t => `${t.type}`)).join(" | ")}>`
        }
    }

    Ct = Symbol.toStringTag, qt[Ct] = (t => (t.mode = null, t.typeIds = null, t.children = null, t.typeIdToChildIndex = null, t.ArrayType = Int8Array, t[Symbol.toStringTag] = "Union"))(qt.prototype);

    class Gt extends Mt {
        constructor(t) {
            super(), this.byteWidth = t
        }

        get typeId() {
            return c.FixedSizeBinary
        }

        toString() {
            return `FixedSizeBinary[${this.byteWidth}]`
        }
    }

    Ot = Symbol.toStringTag, Gt[Ot] = (t => (t.byteWidth = null, t.ArrayType = Uint8Array, t[Symbol.toStringTag] = "FixedSizeBinary"))(Gt.prototype);

    class Jt extends Mt {
        constructor(t, e) {
            super(), this.listSize = t, this.children = [e]
        }

        get typeId() {
            return c.FixedSizeList
        }

        get valueType() {
            return this.children[0].type
        }

        get valueField() {
            return this.children[0]
        }

        get ArrayType() {
            return this.valueType.ArrayType
        }

        toString() {
            return `FixedSizeList[${this.listSize}]<${this.valueType}>`
        }
    }

    At = Symbol.toStringTag, Jt[At] = (t => (t.children = null, t.listSize = null, t[Symbol.toStringTag] = "FixedSizeList"))(Jt.prototype);

    class Xt extends Mt {
        constructor(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            super(), this.children = [t], this.keysSorted = e
        }

        get typeId() {
            return c.Map
        }

        get keyType() {
            return this.children[0].type.children[0].type
        }

        get valueType() {
            return this.children[0].type.children[1].type
        }

        get childType() {
            return this.children[0].type
        }

        toString() {
            return `Map<{${this.children[0].type.children.map((t => `${t.name}:${t.type}`)).join(", ")}}>`
        }
    }

    Dt = Symbol.toStringTag, Xt[Dt] = (t => (t.children = null, t.keysSorted = null, t[Symbol.toStringTag] = "Map_"))(Xt.prototype);
    const Zt = (te = -1, () => ++te);
    var te;

    class ee extends Mt {
        constructor(t, e, n, r) {
            super(), this.indices = e, this.dictionary = t, this.isOrdered = r || !1, this.id = null == n ? Zt() : "number" === typeof n ? n : n.low
        }

        get typeId() {
            return c.Dictionary
        }

        get children() {
            return this.dictionary.children
        }

        get valueType() {
            return this.dictionary
        }

        get ArrayType() {
            return this.dictionary.ArrayType
        }

        toString() {
            return `Dictionary<${this.indices}, ${this.dictionary}>`
        }
    }

    function ne(t) {
        const e = t;
        switch (t.typeId) {
            case c.Decimal:
                return t.bitWidth / 32;
            case c.Timestamp:
                return 2;
            case c.Date:
            case c.Interval:
                return 1 + e.unit;
            case c.FixedSizeList:
                return e.listSize;
            case c.FixedSizeBinary:
                return e.byteWidth;
            default:
                return 1
        }
    }

    Bt = Symbol.toStringTag, ee[Bt] = (t => (t.id = null, t.indices = null, t.isOrdered = null, t.dictionary = null, t[Symbol.toStringTag] = "Dictionary"))(ee.prototype);

    class re {
        visitMany(t) {
            for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
            return t.map(((t, e) => this.visit(t, ...n.map((t => t[e])))))
        }

        visit() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return this.getVisitFn(e[0], !1).apply(this, e)
        }

        getVisitFn(t) {
            return function (t, e) {
                let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                if ("number" === typeof e) return ie(t, e, n);
                if ("string" === typeof e && e in c) return ie(t, c[e], n);
                if (e && e instanceof Mt) return ie(t, oe(e), n);
                if ((null === e || void 0 === e ? void 0 : e.type) && e.type instanceof Mt) return ie(t, oe(e.type), n);
                return ie(t, c.NONE, n)
            }(this, t, !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1])
        }

        getVisitFnByTypeId(t) {
            return ie(this, t, !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1])
        }

        visitNull(t) {
            return null
        }

        visitBool(t) {
            return null
        }

        visitInt(t) {
            return null
        }

        visitFloat(t) {
            return null
        }

        visitUtf8(t) {
            return null
        }

        visitBinary(t) {
            return null
        }

        visitFixedSizeBinary(t) {
            return null
        }

        visitDate(t) {
            return null
        }

        visitTimestamp(t) {
            return null
        }

        visitTime(t) {
            return null
        }

        visitDecimal(t) {
            return null
        }

        visitList(t) {
            return null
        }

        visitStruct(t) {
            return null
        }

        visitUnion(t) {
            return null
        }

        visitDictionary(t) {
            return null
        }

        visitInterval(t) {
            return null
        }

        visitFixedSizeList(t) {
            return null
        }

        visitMap(t) {
            return null
        }
    }

    function ie(t, e) {
        let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2], r = null;
        switch (e) {
            case c.Null:
                r = t.visitNull;
                break;
            case c.Bool:
                r = t.visitBool;
                break;
            case c.Int:
                r = t.visitInt;
                break;
            case c.Int8:
                r = t.visitInt8 || t.visitInt;
                break;
            case c.Int16:
                r = t.visitInt16 || t.visitInt;
                break;
            case c.Int32:
                r = t.visitInt32 || t.visitInt;
                break;
            case c.Int64:
                r = t.visitInt64 || t.visitInt;
                break;
            case c.Uint8:
                r = t.visitUint8 || t.visitInt;
                break;
            case c.Uint16:
                r = t.visitUint16 || t.visitInt;
                break;
            case c.Uint32:
                r = t.visitUint32 || t.visitInt;
                break;
            case c.Uint64:
                r = t.visitUint64 || t.visitInt;
                break;
            case c.Float:
                r = t.visitFloat;
                break;
            case c.Float16:
                r = t.visitFloat16 || t.visitFloat;
                break;
            case c.Float32:
                r = t.visitFloat32 || t.visitFloat;
                break;
            case c.Float64:
                r = t.visitFloat64 || t.visitFloat;
                break;
            case c.Utf8:
                r = t.visitUtf8;
                break;
            case c.Binary:
                r = t.visitBinary;
                break;
            case c.FixedSizeBinary:
                r = t.visitFixedSizeBinary;
                break;
            case c.Date:
                r = t.visitDate;
                break;
            case c.DateDay:
                r = t.visitDateDay || t.visitDate;
                break;
            case c.DateMillisecond:
                r = t.visitDateMillisecond || t.visitDate;
                break;
            case c.Timestamp:
                r = t.visitTimestamp;
                break;
            case c.TimestampSecond:
                r = t.visitTimestampSecond || t.visitTimestamp;
                break;
            case c.TimestampMillisecond:
                r = t.visitTimestampMillisecond || t.visitTimestamp;
                break;
            case c.TimestampMicrosecond:
                r = t.visitTimestampMicrosecond || t.visitTimestamp;
                break;
            case c.TimestampNanosecond:
                r = t.visitTimestampNanosecond || t.visitTimestamp;
                break;
            case c.Time:
                r = t.visitTime;
                break;
            case c.TimeSecond:
                r = t.visitTimeSecond || t.visitTime;
                break;
            case c.TimeMillisecond:
                r = t.visitTimeMillisecond || t.visitTime;
                break;
            case c.TimeMicrosecond:
                r = t.visitTimeMicrosecond || t.visitTime;
                break;
            case c.TimeNanosecond:
                r = t.visitTimeNanosecond || t.visitTime;
                break;
            case c.Decimal:
                r = t.visitDecimal;
                break;
            case c.List:
                r = t.visitList;
                break;
            case c.Struct:
                r = t.visitStruct;
                break;
            case c.Union:
                r = t.visitUnion;
                break;
            case c.DenseUnion:
                r = t.visitDenseUnion || t.visitUnion;
                break;
            case c.SparseUnion:
                r = t.visitSparseUnion || t.visitUnion;
                break;
            case c.Dictionary:
                r = t.visitDictionary;
                break;
            case c.Interval:
                r = t.visitInterval;
                break;
            case c.IntervalDayTime:
                r = t.visitIntervalDayTime || t.visitInterval;
                break;
            case c.IntervalYearMonth:
                r = t.visitIntervalYearMonth || t.visitInterval;
                break;
            case c.FixedSizeList:
                r = t.visitFixedSizeList;
                break;
            case c.Map:
                r = t.visitMap
        }
        if ("function" === typeof r) return r;
        if (!n) return () => null;
        throw new Error(`Unrecognized type '${c[e]}'`)
    }

    function oe(t) {
        switch (t.typeId) {
            case c.Null:
                return c.Null;
            case c.Int: {
                const {bitWidth: e, isSigned: n} = t;
                switch (e) {
                    case 8:
                        return n ? c.Int8 : c.Uint8;
                    case 16:
                        return n ? c.Int16 : c.Uint16;
                    case 32:
                        return n ? c.Int32 : c.Uint32;
                    case 64:
                        return n ? c.Int64 : c.Uint64
                }
                return c.Int
            }
            case c.Float:
                switch (t.precision) {
                    case o.HALF:
                        return c.Float16;
                    case o.SINGLE:
                        return c.Float32;
                    case o.DOUBLE:
                        return c.Float64
                }
                return c.Float;
            case c.Binary:
                return c.Binary;
            case c.Utf8:
                return c.Utf8;
            case c.Bool:
                return c.Bool;
            case c.Decimal:
                return c.Decimal;
            case c.Time:
                switch (t.unit) {
                    case a.SECOND:
                        return c.TimeSecond;
                    case a.MILLISECOND:
                        return c.TimeMillisecond;
                    case a.MICROSECOND:
                        return c.TimeMicrosecond;
                    case a.NANOSECOND:
                        return c.TimeNanosecond
                }
                return c.Time;
            case c.Timestamp:
                switch (t.unit) {
                    case a.SECOND:
                        return c.TimestampSecond;
                    case a.MILLISECOND:
                        return c.TimestampMillisecond;
                    case a.MICROSECOND:
                        return c.TimestampMicrosecond;
                    case a.NANOSECOND:
                        return c.TimestampNanosecond
                }
                return c.Timestamp;
            case c.Date:
                switch (t.unit) {
                    case s.DAY:
                        return c.DateDay;
                    case s.MILLISECOND:
                        return c.DateMillisecond
                }
                return c.Date;
            case c.Interval:
                switch (t.unit) {
                    case l.DAY_TIME:
                        return c.IntervalDayTime;
                    case l.YEAR_MONTH:
                        return c.IntervalYearMonth
                }
                return c.Interval;
            case c.Map:
                return c.Map;
            case c.List:
                return c.List;
            case c.Struct:
                return c.Struct;
            case c.Union:
                switch (t.mode) {
                    case i.Dense:
                        return c.DenseUnion;
                    case i.Sparse:
                        return c.SparseUnion
                }
                return c.Union;
            case c.FixedSizeBinary:
                return c.FixedSizeBinary;
            case c.FixedSizeList:
                return c.FixedSizeList;
            case c.Dictionary:
                return c.Dictionary
        }
        throw new Error(`Unrecognized type '${c[t.typeId]}'`)
    }

    re.prototype.visitInt8 = null, re.prototype.visitInt16 = null, re.prototype.visitInt32 = null, re.prototype.visitInt64 = null, re.prototype.visitUint8 = null, re.prototype.visitUint16 = null, re.prototype.visitUint32 = null, re.prototype.visitUint64 = null, re.prototype.visitFloat16 = null, re.prototype.visitFloat32 = null, re.prototype.visitFloat64 = null, re.prototype.visitDateDay = null, re.prototype.visitDateMillisecond = null, re.prototype.visitTimestampSecond = null, re.prototype.visitTimestampMillisecond = null, re.prototype.visitTimestampMicrosecond = null, re.prototype.visitTimestampNanosecond = null, re.prototype.visitTimeSecond = null, re.prototype.visitTimeMillisecond = null, re.prototype.visitTimeMicrosecond = null, re.prototype.visitTimeNanosecond = null, re.prototype.visitDenseUnion = null, re.prototype.visitSparseUnion = null, re.prototype.visitIntervalDayTime = null, re.prototype.visitIntervalYearMonth = null;
    const se = new Float64Array(1), ae = new Uint32Array(se.buffer);

    function le(t) {
        const e = (31744 & t) >> 10, n = (1023 & t) / 1024, r = Math.pow(-1, (32768 & t) >> 15);
        switch (e) {
            case 31:
                return r * (n ? Number.NaN : 1 / 0);
            case 0:
                return r * (n ? 6103515625e-14 * n : 0)
        }
        return r * Math.pow(2, e - 15) * (1 + n)
    }

    class ue extends re {
    }

    function ce(t) {
        return (e, n, r) => {
            if (e.setValid(n, null != r)) return t(e, n, r)
        }
    }

    const de = (t, e, n) => {
        t[e] = Math.trunc(n % 4294967296), t[e + 1] = Math.trunc(n / 4294967296)
    }, fe = (t, e, n, r) => {
        if (n + 1 < e.length) {
            const {[n]: i, [n + 1]: o} = e;
            t.set(r.subarray(0, o - i), i)
        }
    }, he = (t, e, n) => {
        let {values: r} = t;
        r[e] = n
    }, pe = (t, e, n) => {
        let {values: r} = t;
        r[e] = n
    }, ye = (t, e, n) => {
        let {values: r} = t;
        r[e] = function (t) {
            if (t !== t) return 32256;
            se[0] = t;
            const e = (2147483648 & ae[1]) >> 16 & 65535;
            let n = 2146435072 & ae[1], r = 0;
            return n >= 1089470464 ? ae[0] > 0 ? n = 31744 : (n = (2080374784 & n) >> 16, r = (1048575 & ae[1]) >> 10) : n <= 1056964608 ? (r = 1048576 + (1048575 & ae[1]), r = 1048576 + (r << (n >> 20) - 998) >> 21, n = 0) : (n = n - 1056964608 >> 10, r = 512 + (1048575 & ae[1]) >> 10), e | n | 65535 & r
        }(n)
    }, be = (t, e, n) => {
        let {values: r} = t;
        ((t, e, n) => {
            t[e] = Math.trunc(n / 864e5)
        })(r, e, n.valueOf())
    }, me = (t, e, n) => {
        let {values: r} = t;
        de(r, 2 * e, n.valueOf())
    }, ge = (t, e, n) => {
        let {values: r} = t;
        return de(r, 2 * e, n / 1e3)
    }, ve = (t, e, n) => {
        let {values: r} = t;
        return de(r, 2 * e, n)
    }, we = (t, e, n) => {
        let {values: r} = t;
        return ((t, e, n) => {
            t[e] = Math.trunc(1e3 * n % 4294967296), t[e + 1] = Math.trunc(1e3 * n / 4294967296)
        })(r, 2 * e, n)
    }, _e = (t, e, n) => {
        let {values: r} = t;
        return ((t, e, n) => {
            t[e] = Math.trunc(1e6 * n % 4294967296), t[e + 1] = Math.trunc(1e6 * n / 4294967296)
        })(r, 2 * e, n)
    }, Se = (t, e, n) => {
        let {values: r} = t;
        r[e] = n
    }, Ie = (t, e, n) => {
        let {values: r} = t;
        r[e] = n
    }, xe = (t, e, n) => {
        let {values: r} = t;
        r[e] = n
    }, ke = (t, e, n) => {
        let {values: r} = t;
        r[e] = n
    }, Te = (t, e, n) => {
        const r = t.type.typeIdToChildIndex[t.typeIds[e]], i = t.children[r];
        Ae.visit(i, t.valueOffsets[e], n)
    }, Ee = (t, e, n) => {
        const r = t.type.typeIdToChildIndex[t.typeIds[e]], i = t.children[r];
        Ae.visit(i, e, n)
    }, Ce = (t, e, n) => {
        let {values: r} = t;
        r.set(n.subarray(0, 2), 2 * e)
    }, Oe = (t, e, n) => {
        let {values: r} = t;
        r[e] = 12 * n[0] + n[1] % 12
    };
    ue.prototype.visitBool = ce(((t, e, n) => {
        let {offset: r, values: i} = t;
        const o = r + e;
        n ? i[o >> 3] |= 1 << o % 8 : i[o >> 3] &= ~(1 << o % 8)
    })), ue.prototype.visitInt = ce(he), ue.prototype.visitInt8 = ce(he), ue.prototype.visitInt16 = ce(he), ue.prototype.visitInt32 = ce(he), ue.prototype.visitInt64 = ce(he), ue.prototype.visitUint8 = ce(he), ue.prototype.visitUint16 = ce(he), ue.prototype.visitUint32 = ce(he), ue.prototype.visitUint64 = ce(he), ue.prototype.visitFloat = ce(((t, e, n) => {
        switch (t.type.precision) {
            case o.HALF:
                return ye(t, e, n);
            case o.SINGLE:
            case o.DOUBLE:
                return pe(t, e, n)
        }
    })), ue.prototype.visitFloat16 = ce(ye), ue.prototype.visitFloat32 = ce(pe), ue.prototype.visitFloat64 = ce(pe), ue.prototype.visitUtf8 = ce(((t, e, n) => {
        let {values: r, valueOffsets: i} = t;
        fe(r, i, e, Q(n))
    })), ue.prototype.visitBinary = ce(((t, e, n) => {
        let {values: r, valueOffsets: i} = t;
        return fe(r, i, e, n)
    })), ue.prototype.visitFixedSizeBinary = ce(((t, e, n) => {
        let {stride: r, values: i} = t;
        i.set(n.subarray(0, r), r * e)
    })), ue.prototype.visitDate = ce(((t, e, n) => {
        t.type.unit === s.DAY ? be(t, e, n) : me(t, e, n)
    })), ue.prototype.visitDateDay = ce(be), ue.prototype.visitDateMillisecond = ce(me), ue.prototype.visitTimestamp = ce(((t, e, n) => {
        switch (t.type.unit) {
            case a.SECOND:
                return ge(t, e, n);
            case a.MILLISECOND:
                return ve(t, e, n);
            case a.MICROSECOND:
                return we(t, e, n);
            case a.NANOSECOND:
                return _e(t, e, n)
        }
    })), ue.prototype.visitTimestampSecond = ce(ge), ue.prototype.visitTimestampMillisecond = ce(ve), ue.prototype.visitTimestampMicrosecond = ce(we), ue.prototype.visitTimestampNanosecond = ce(_e), ue.prototype.visitTime = ce(((t, e, n) => {
        switch (t.type.unit) {
            case a.SECOND:
                return Se(t, e, n);
            case a.MILLISECOND:
                return Ie(t, e, n);
            case a.MICROSECOND:
                return xe(t, e, n);
            case a.NANOSECOND:
                return ke(t, e, n)
        }
    })), ue.prototype.visitTimeSecond = ce(Se), ue.prototype.visitTimeMillisecond = ce(Ie), ue.prototype.visitTimeMicrosecond = ce(xe), ue.prototype.visitTimeNanosecond = ce(ke), ue.prototype.visitDecimal = ce(((t, e, n) => {
        let {values: r, stride: i} = t;
        r.set(n.subarray(0, i), i * e)
    })), ue.prototype.visitList = ce(((t, e, n) => {
        const r = t.children[0], i = t.valueOffsets, o = Ae.getVisitFn(r);
        if (Array.isArray(n)) for (let s = -1, a = i[e], l = i[e + 1]; a < l;) o(r, a++, n[++s]); else for (let s = -1, a = i[e], l = i[e + 1]; a < l;) o(r, a++, n.get(++s))
    })), ue.prototype.visitStruct = ce(((t, e, n) => {
        const r = t.type.children.map((t => Ae.getVisitFn(t.type))),
            i = n instanceof Map ? (o = e, s = n, (t, e, n, r) => e && t(e, o, s.get(n.name))) : n instanceof Kn ? ((t, e) => (n, r, i, o) => r && n(r, t, e.get(o)))(e, n) : Array.isArray(n) ? ((t, e) => (n, r, i, o) => r && n(r, t, e[o]))(e, n) : ((t, e) => (n, r, i, o) => r && n(r, t, e[i.name]))(e, n);
        var o, s;
        t.type.children.forEach(((e, n) => i(r[n], t.children[n], e, n)))
    })), ue.prototype.visitUnion = ce(((t, e, n) => {
        t.type.mode === i.Dense ? Te(t, e, n) : Ee(t, e, n)
    })), ue.prototype.visitDenseUnion = ce(Te), ue.prototype.visitSparseUnion = ce(Ee), ue.prototype.visitDictionary = ce(((t, e, n) => {
        var r;
        null === (r = t.dictionary) || void 0 === r || r.set(t.values[e], n)
    })), ue.prototype.visitInterval = ce(((t, e, n) => {
        t.type.unit === l.DAY_TIME ? Ce(t, e, n) : Oe(t, e, n)
    })), ue.prototype.visitIntervalDayTime = ce(Ce), ue.prototype.visitIntervalYearMonth = ce(Oe), ue.prototype.visitFixedSizeList = ce(((t, e, n) => {
        const {stride: r} = t, i = t.children[0], o = Ae.getVisitFn(i);
        if (Array.isArray(n)) for (let s = -1, a = e * r; ++s < r;) o(i, a + s, n[s]); else for (let s = -1, a = e * r; ++s < r;) o(i, a + s, n.get(s))
    })), ue.prototype.visitMap = ce(((t, e, n) => {
        const r = t.children[0], {valueOffsets: i} = t, o = Ae.getVisitFn(r);
        let {[e]: s, [e + 1]: a} = i;
        const l = n instanceof Map ? n.entries() : Object.entries(n);
        for (const u of l) if (o(r, s, u), ++s >= a) break
    }));
    const Ae = new ue, De = Symbol.for("parent"), Be = Symbol.for("rowIndex");

    class Ne {
        constructor(t, e) {
            return this[De] = t, this[Be] = e, new Proxy(this, new Fe)
        }

        toArray() {
            return Object.values(this.toJSON())
        }

        toJSON() {
            const t = this[Be], e = this[De], n = e.type.children, r = {};
            for (let i = -1, o = n.length; ++i < o;) r[n[i].name] = rn.visit(e.children[i], t);
            return r
        }

        toString() {
            return `{${[...this].map((t => {
                let [e, n] = t;
                return `${P(e)}: ${P(n)}`
            })).join(", ")}}`
        }

        [Symbol.for("nodejs.util.inspect.custom")]() {
            return this.toString()
        }

        [Symbol.iterator]() {
            return new Me(this[De], this[Be])
        }
    }

    class Me {
        constructor(t, e) {
            this.childIndex = 0, this.children = t.children, this.rowIndex = e, this.childFields = t.type.children, this.numChildren = this.childFields.length
        }

        [Symbol.iterator]() {
            return this
        }

        next() {
            const t = this.childIndex;
            return t < this.numChildren ? (this.childIndex = t + 1, {
                done: !1, value: [this.childFields[t].name, rn.visit(this.children[t], this.rowIndex)]
            }) : {done: !0, value: null}
        }
    }

    Object.defineProperties(Ne.prototype, {
        [Symbol.toStringTag]: {enumerable: !1, configurable: !1, value: "Row"},
        [De]: {writable: !0, enumerable: !1, configurable: !1, value: null},
        [Be]: {writable: !0, enumerable: !1, configurable: !1, value: -1}
    });

    class Fe {
        isExtensible() {
            return !1
        }

        deleteProperty() {
            return !1
        }

        preventExtensions() {
            return !0
        }

        ownKeys(t) {
            return t[De].type.children.map((t => t.name))
        }

        has(t, e) {
            return -1 !== t[De].type.children.findIndex((t => t.name === e))
        }

        getOwnPropertyDescriptor(t, e) {
            if (-1 !== t[De].type.children.findIndex((t => t.name === e))) return {
                writable: !0, enumerable: !0, configurable: !0
            }
        }

        get(t, e) {
            if (Reflect.has(t, e)) return t[e];
            const n = t[De].type.children.findIndex((t => t.name === e));
            if (-1 !== n) {
                const r = rn.visit(t[De].children[n], t[Be]);
                return Reflect.set(t, e, r), r
            }
        }

        set(t, e, n) {
            const r = t[De].type.children.findIndex((t => t.name === e));
            return -1 !== r ? (Ae.visit(t[De].children[r], t[Be], n), Reflect.set(t, e, n)) : !(!Reflect.has(t, e) && "symbol" !== typeof e) && Reflect.set(t, e, n)
        }
    }

    class Le extends re {
    }

    function Pe(t) {
        return (e, n) => e.getValid(n) ? t(e, n) : null
    }

    const Re = (t, e) => 4294967296 * t[e + 1] + (t[e] >>> 0), Ue = t => new Date(t), ze = (t, e, n) => {
        if (n + 1 >= e.length) return null;
        const r = e[n], i = e[n + 1];
        return t.subarray(r, i)
    }, je = (t, e) => {
        let {values: n} = t;
        return ((t, e) => Ue(((t, e) => 864e5 * t[e])(t, e)))(n, e)
    }, Ve = (t, e) => {
        let {values: n} = t;
        return ((t, e) => Ue(Re(t, e)))(n, 2 * e)
    }, $e = (t, e) => {
        let {stride: n, values: r} = t;
        return r[n * e]
    }, We = (t, e) => {
        let {values: n} = t;
        return n[e]
    }, He = (t, e) => {
        let {values: n} = t;
        return 1e3 * Re(n, 2 * e)
    }, Ye = (t, e) => {
        let {values: n} = t;
        return Re(n, 2 * e)
    }, Qe = (t, e) => {
        let {values: n} = t;
        return ((t, e) => t[e + 1] / 1e3 * 4294967296 + (t[e] >>> 0) / 1e3)(n, 2 * e)
    }, Ke = (t, e) => {
        let {values: n} = t;
        return ((t, e) => t[e + 1] / 1e6 * 4294967296 + (t[e] >>> 0) / 1e6)(n, 2 * e)
    }, qe = (t, e) => {
        let {values: n} = t;
        return n[e]
    }, Ge = (t, e) => {
        let {values: n} = t;
        return n[e]
    }, Je = (t, e) => {
        let {values: n} = t;
        return n[e]
    }, Xe = (t, e) => {
        let {values: n} = t;
        return n[e]
    }, Ze = (t, e) => {
        const n = t.type.typeIdToChildIndex[t.typeIds[e]], r = t.children[n];
        return rn.visit(r, t.valueOffsets[e])
    }, tn = (t, e) => {
        const n = t.type.typeIdToChildIndex[t.typeIds[e]], r = t.children[n];
        return rn.visit(r, e)
    }, en = (t, e) => {
        let {values: n} = t;
        return n.subarray(2 * e, 2 * (e + 1))
    }, nn = (t, e) => {
        let {values: n} = t;
        const r = n[e], i = new Int32Array(2);
        return i[0] = Math.trunc(r / 12), i[1] = Math.trunc(r % 12), i
    };
    Le.prototype.visitNull = Pe(((t, e) => null)), Le.prototype.visitBool = Pe(((t, e) => {
        let {offset: n, values: r} = t;
        const i = n + e;
        return 0 !== (r[i >> 3] & 1 << i % 8)
    })), Le.prototype.visitInt = Pe(((t, e) => {
        let {values: n} = t;
        return n[e]
    })), Le.prototype.visitInt8 = Pe($e), Le.prototype.visitInt16 = Pe($e), Le.prototype.visitInt32 = Pe($e), Le.prototype.visitInt64 = Pe(We), Le.prototype.visitUint8 = Pe($e), Le.prototype.visitUint16 = Pe($e), Le.prototype.visitUint32 = Pe($e), Le.prototype.visitUint64 = Pe(We), Le.prototype.visitFloat = Pe(((t, e) => {
        let {type: n, values: r} = t;
        return n.precision !== o.HALF ? r[e] : le(r[e])
    })), Le.prototype.visitFloat16 = Pe(((t, e) => {
        let {stride: n, values: r} = t;
        return le(r[n * e])
    })), Le.prototype.visitFloat32 = Pe($e), Le.prototype.visitFloat64 = Pe($e), Le.prototype.visitUtf8 = Pe(((t, e) => {
        let {values: n, valueOffsets: r} = t;
        const i = ze(n, r, e);
        return null !== i ? H(i) : null
    })), Le.prototype.visitBinary = Pe(((t, e) => {
        let {values: n, valueOffsets: r} = t;
        return ze(n, r, e)
    })), Le.prototype.visitFixedSizeBinary = Pe(((t, e) => {
        let {stride: n, values: r} = t;
        return r.subarray(n * e, n * (e + 1))
    })), Le.prototype.visitDate = Pe(((t, e) => t.type.unit === s.DAY ? je(t, e) : Ve(t, e))), Le.prototype.visitDateDay = Pe(je), Le.prototype.visitDateMillisecond = Pe(Ve), Le.prototype.visitTimestamp = Pe(((t, e) => {
        switch (t.type.unit) {
            case a.SECOND:
                return He(t, e);
            case a.MILLISECOND:
                return Ye(t, e);
            case a.MICROSECOND:
                return Qe(t, e);
            case a.NANOSECOND:
                return Ke(t, e)
        }
    })), Le.prototype.visitTimestampSecond = Pe(He), Le.prototype.visitTimestampMillisecond = Pe(Ye), Le.prototype.visitTimestampMicrosecond = Pe(Qe), Le.prototype.visitTimestampNanosecond = Pe(Ke), Le.prototype.visitTime = Pe(((t, e) => {
        switch (t.type.unit) {
            case a.SECOND:
                return qe(t, e);
            case a.MILLISECOND:
                return Ge(t, e);
            case a.MICROSECOND:
                return Je(t, e);
            case a.NANOSECOND:
                return Xe(t, e)
        }
    })), Le.prototype.visitTimeSecond = Pe(qe), Le.prototype.visitTimeMillisecond = Pe(Ge), Le.prototype.visitTimeMicrosecond = Pe(Je), Le.prototype.visitTimeNanosecond = Pe(Xe), Le.prototype.visitDecimal = Pe(((t, e) => {
        let {values: n, stride: r} = t;
        return ht.decimal(n.subarray(r * e, r * (e + 1)))
    })), Le.prototype.visitList = Pe(((t, e) => {
        const {valueOffsets: n, stride: r, children: i} = t, {[e * r]: o, [e * r + 1]: s} = n, a = i[0].slice(o, s - o);
        return new Kn([a])
    })), Le.prototype.visitStruct = Pe(((t, e) => new Ne(t, e))), Le.prototype.visitUnion = Pe(((t, e) => t.type.mode === i.Dense ? Ze(t, e) : tn(t, e))), Le.prototype.visitDenseUnion = Pe(Ze), Le.prototype.visitSparseUnion = Pe(tn), Le.prototype.visitDictionary = Pe(((t, e) => {
        var n;
        return null === (n = t.dictionary) || void 0 === n ? void 0 : n.get(t.values[e])
    })), Le.prototype.visitInterval = Pe(((t, e) => t.type.unit === l.DAY_TIME ? en(t, e) : nn(t, e))), Le.prototype.visitIntervalDayTime = Pe(en), Le.prototype.visitIntervalYearMonth = Pe(nn), Le.prototype.visitFixedSizeList = Pe(((t, e) => {
        const {stride: n, children: r} = t, i = r[0].slice(e * n, n);
        return new Kn([i])
    })), Le.prototype.visitMap = Pe(((t, e) => {
        const {valueOffsets: n, children: r} = t, {[e]: i, [e + 1]: o} = n, s = r[0];
        return new an(s.slice(i, o - i))
    }));
    const rn = new Le, on = Symbol.for("keys"), sn = Symbol.for("vals");

    class an {
        constructor(t) {
            return this[on] = new Kn([t.children[0]]).memoize(), this[sn] = t.children[1], new Proxy(this, new un)
        }

        [Symbol.iterator]() {
            return new ln(this[on], this[sn])
        }

        get size() {
            return this[on].length
        }

        toArray() {
            return Object.values(this.toJSON())
        }

        toJSON() {
            const t = this[on], e = this[sn], n = {};
            for (let r = -1, i = t.length; ++r < i;) n[t.get(r)] = rn.visit(e, r);
            return n
        }

        toString() {
            return `{${[...this].map((t => {
                let [e, n] = t;
                return `${P(e)}: ${P(n)}`
            })).join(", ")}}`
        }

        [Symbol.for("nodejs.util.inspect.custom")]() {
            return this.toString()
        }
    }

    class ln {
        constructor(t, e) {
            this.keys = t, this.vals = e, this.keyIndex = 0, this.numKeys = t.length
        }

        [Symbol.iterator]() {
            return this
        }

        next() {
            const t = this.keyIndex;
            return t === this.numKeys ? {done: !0, value: null} : (this.keyIndex++, {
                done: !1, value: [this.keys.get(t), rn.visit(this.vals, t)]
            })
        }
    }

    class un {
        isExtensible() {
            return !1
        }

        deleteProperty() {
            return !1
        }

        preventExtensions() {
            return !0
        }

        ownKeys(t) {
            return t[on].toArray().map(String)
        }

        has(t, e) {
            return t[on].includes(e)
        }

        getOwnPropertyDescriptor(t, e) {
            if (-1 !== t[on].indexOf(e)) return {writable: !0, enumerable: !0, configurable: !0}
        }

        get(t, e) {
            if (Reflect.has(t, e)) return t[e];
            const n = t[on].indexOf(e);
            if (-1 !== n) {
                const r = rn.visit(Reflect.get(t, sn), n);
                return Reflect.set(t, e, r), r
            }
        }

        set(t, e, n) {
            const r = t[on].indexOf(e);
            return -1 !== r ? (Ae.visit(Reflect.get(t, sn), r, n), Reflect.set(t, e, n)) : !!Reflect.has(t, e) && Reflect.set(t, e, n)
        }
    }

    let cn;

    function dn(t, e, n, r) {
        const {length: i = 0} = t;
        let o = "number" !== typeof e ? 0 : e, s = "number" !== typeof n ? i : n;
        return o < 0 && (o = (o % i + i) % i), s < 0 && (s = (s % i + i) % i), s < o && (cn = o, o = s, s = cn), s > i && (s = i), r ? r(t, o, s) : [o, s]
    }

    Object.defineProperties(an.prototype, {
        [Symbol.toStringTag]: {enumerable: !1, configurable: !1, value: "Row"},
        [on]: {writable: !0, enumerable: !1, configurable: !1, value: null},
        [sn]: {writable: !0, enumerable: !1, configurable: !1, value: null}
    });
    const fn = t => t !== t;

    function hn(t) {
        if ("object" !== typeof t || null === t) return fn(t) ? fn : e => e === t;
        if (t instanceof Date) {
            const e = t.valueOf();
            return t => t instanceof Date && t.valueOf() === e
        }
        return ArrayBuffer.isView(t) ? e => !!e && function (t, e) {
            let n = 0;
            const r = t.length;
            if (r !== e.length) return !1;
            if (r > 0) do {
                if (t[n] !== e[n]) return !1
            } while (++n < r);
            return !0
        }(t, e) : t instanceof Map ? function (t) {
            let e = -1;
            const n = [];
            for (const r of t.values()) n[++e] = hn(r);
            return pn(n)
        }(t) : Array.isArray(t) ? function (t) {
            const e = [];
            for (let n = -1, r = t.length; ++n < r;) e[n] = hn(t[n]);
            return pn(e)
        }(t) : t instanceof Kn ? function (t) {
            const e = [];
            for (let n = -1, r = t.length; ++n < r;) e[n] = hn(t.get(n));
            return pn(e)
        }(t) : function (t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            const n = Object.keys(t);
            if (!e && 0 === n.length) return () => !1;
            const r = [];
            for (let i = -1, o = n.length; ++i < o;) r[i] = hn(t[n[i]]);
            return pn(r, n)
        }(t, !0)
    }

    function pn(t, e) {
        return n => {
            if (!n || "object" !== typeof n) return !1;
            switch (n.constructor) {
                case Array:
                    return function (t, e) {
                        const n = t.length;
                        if (e.length !== n) return !1;
                        for (let r = -1; ++r < n;) if (!t[r](e[r])) return !1;
                        return !0
                    }(t, n);
                case Map:
                    return yn(t, n, n.keys());
                case an:
                case Ne:
                case Object:
                case void 0:
                    return yn(t, n, e || Object.keys(n))
            }
            return n instanceof Kn && function (t, e) {
                const n = t.length;
                if (e.length !== n) return !1;
                for (let r = -1; ++r < n;) if (!t[r](e.get(r))) return !1;
                return !0
            }(t, n)
        }
    }

    function yn(t, e, n) {
        const r = n[Symbol.iterator](), i = e instanceof Map ? e.keys() : Object.keys(e)[Symbol.iterator](),
            o = e instanceof Map ? e.values() : Object.values(e)[Symbol.iterator]();
        let s = 0;
        const a = t.length;
        let l = o.next(), u = r.next(), c = i.next();
        for (; s < a && !u.done && !c.done && !l.done && (u.value === c.value && t[s](l.value)); ++s, u = r.next(), c = i.next(), l = o.next()) ;
        return !!(s === a && u.done && c.done && l.done) || (r.return && r.return(), i.return && i.return(), o.return && o.return(), !1)
    }

    class bn {
        constructor() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                e = arguments.length > 1 ? arguments[1] : void 0;
            this.numChunks = t, this.getChunkIterator = e, this.chunkIndex = 0, this.chunkIterator = this.getChunkIterator(0)
        }

        next() {
            for (; this.chunkIndex < this.numChunks;) {
                const t = this.chunkIterator.next();
                if (!t.done) return t;
                ++this.chunkIndex < this.numChunks && (this.chunkIterator = this.getChunkIterator(this.chunkIndex))
            }
            return {done: !0, value: null}
        }

        [Symbol.iterator]() {
            return this
        }
    }

    function mn(t) {
        return t.reduce(((t, e) => t + e.nullCount), 0)
    }

    function gn(t) {
        return t.reduce(((t, e, n) => (t[n + 1] = t[n] + e.length, t)), new Uint32Array(t.length + 1))
    }

    function vn(t, e, n, r) {
        const i = [];
        for (let o = -1, s = t.length; ++o < s;) {
            const s = t[o], a = e[o], {length: l} = s;
            if (a >= r) break;
            if (n >= a + l) continue;
            if (a >= n && a + l <= r) {
                i.push(s);
                continue
            }
            const u = Math.max(0, n - a), c = Math.min(r - a, l);
            i.push(s.slice(u, c - u))
        }
        return 0 === i.length && i.push(t[0].slice(0, 0)), i
    }

    function wn(t, e, n, r) {
        let i = 0, o = 0, s = e.length - 1;
        do {
            if (i >= s - 1) return n < e[s] ? r(t, i, n - e[i]) : null;
            o = i + Math.trunc(.5 * (s - i)), n < e[o] ? s = o : i = o
        } while (i < s)
    }

    function _n(t, e) {
        return t.getValid(e)
    }

    function Sn(t) {
        function e(e, n, r) {
            return t(e[n], r)
        }

        return function (t) {
            return wn(this.data, this._offsets, t, e)
        }
    }

    function In(t) {
        let e;

        function n(n, r, i) {
            return t(n[r], i, e)
        }

        return function (t, r) {
            const i = this.data;
            e = r;
            const o = wn(i, this._offsets, t, n);
            return e = void 0, o
        }
    }

    function xn(t) {
        let e;

        function n(n, r, i) {
            let o = i, s = 0, a = 0;
            for (let l = r - 1, u = n.length; ++l < u;) {
                const r = n[l];
                if (~(s = t(r, e, o))) return a + s;
                o = 0, a += r.length
            }
            return -1
        }

        return function (t, r) {
            e = t;
            const i = this.data, o = "number" !== typeof r ? n(i, 0, 0) : wn(i, this._offsets, r, n);
            return e = void 0, o
        }
    }

    function kn(t, e, n, r) {
        return 0 !== (n & 1 << r)
    }

    function Tn(t, e, n, r) {
        return (n & 1 << r) >> r
    }

    function En(t, e, n) {
        const r = n.byteLength + 7 & -8;
        if (t > 0 || n.byteLength < r) {
            const i = new Uint8Array(r);
            return i.set(t % 8 === 0 ? n.subarray(t >> 3) : Cn(new On(n, t, e, null, kn)).subarray(0, r)), i
        }
        return n
    }

    function Cn(t) {
        const e = [];
        let n = 0, r = 0, i = 0;
        for (const s of t) s && (i |= 1 << r), 8 === ++r && (e[n++] = i, i = r = 0);
        (0 === n || r > 0) && (e[n++] = i);
        const o = new Uint8Array(e.length + 7 & -8);
        return o.set(e), o
    }

    class On {
        constructor(t, e, n, r, i) {
            this.bytes = t, this.length = n, this.context = r, this.get = i, this.bit = e % 8, this.byteIndex = e >> 3, this.byte = t[this.byteIndex++], this.index = 0
        }

        next() {
            return this.index < this.length ? (8 === this.bit && (this.bit = 0, this.byte = this.bytes[this.byteIndex++]), {value: this.get(this.context, this.index++, this.byte, this.bit++)}) : {
                done: !0, value: null
            }
        }

        [Symbol.iterator]() {
            return this
        }
    }

    function An(t, e, n) {
        if (n - e <= 0) return 0;
        if (n - e < 8) {
            let r = 0;
            for (const i of new On(t, e, n - e, t, Tn)) r += i;
            return r
        }
        const r = n >> 3 << 3, i = e + (e % 8 === 0 ? 0 : 8 - e % 8);
        return An(t, e, i) + An(t, r, n) + function (t, e, n) {
            let r = 0, i = Math.trunc(e);
            const o = new DataView(t.buffer, t.byteOffset, t.byteLength), s = void 0 === n ? t.byteLength : i + n;
            for (; s - i >= 4;) r += Dn(o.getUint32(i)), i += 4;
            for (; s - i >= 2;) r += Dn(o.getUint16(i)), i += 2;
            for (; s - i >= 1;) r += Dn(o.getUint8(i)), i += 1;
            return r
        }(t, i >> 3, r - i >> 3)
    }

    function Dn(t) {
        let e = Math.trunc(t);
        return e -= e >>> 1 & 1431655765, e = (858993459 & e) + (e >>> 2 & 858993459), 16843009 * (e + (e >>> 4) & 252645135) >>> 24
    }

    class Bn extends re {
    }

    function Nn(t, e, n) {
        if (void 0 === e) return -1;
        if (null === e) return function (t, e) {
            const {nullBitmap: n} = t;
            if (!n || t.nullCount <= 0) return -1;
            let r = 0;
            for (const i of new On(n, t.offset + (e || 0), t.length, n, kn)) {
                if (!i) return r;
                ++r
            }
            return -1
        }(t, n);
        const r = rn.getVisitFn(t), i = hn(e);
        for (let o = (n || 0) - 1, s = t.length; ++o < s;) if (i(r(t, o))) return o;
        return -1
    }

    function Mn(t, e, n) {
        const r = rn.getVisitFn(t), i = hn(e);
        for (let o = (n || 0) - 1, s = t.length; ++o < s;) if (i(r(t, o))) return o;
        return -1
    }

    Bn.prototype.visitNull = function (t, e) {
        return null === e && t.length > 0 ? 0 : -1
    }, Bn.prototype.visitBool = Nn, Bn.prototype.visitInt = Nn, Bn.prototype.visitInt8 = Nn, Bn.prototype.visitInt16 = Nn, Bn.prototype.visitInt32 = Nn, Bn.prototype.visitInt64 = Nn, Bn.prototype.visitUint8 = Nn, Bn.prototype.visitUint16 = Nn, Bn.prototype.visitUint32 = Nn, Bn.prototype.visitUint64 = Nn, Bn.prototype.visitFloat = Nn, Bn.prototype.visitFloat16 = Nn, Bn.prototype.visitFloat32 = Nn, Bn.prototype.visitFloat64 = Nn, Bn.prototype.visitUtf8 = Nn, Bn.prototype.visitBinary = Nn, Bn.prototype.visitFixedSizeBinary = Nn, Bn.prototype.visitDate = Nn, Bn.prototype.visitDateDay = Nn, Bn.prototype.visitDateMillisecond = Nn, Bn.prototype.visitTimestamp = Nn, Bn.prototype.visitTimestampSecond = Nn, Bn.prototype.visitTimestampMillisecond = Nn, Bn.prototype.visitTimestampMicrosecond = Nn, Bn.prototype.visitTimestampNanosecond = Nn, Bn.prototype.visitTime = Nn, Bn.prototype.visitTimeSecond = Nn, Bn.prototype.visitTimeMillisecond = Nn, Bn.prototype.visitTimeMicrosecond = Nn, Bn.prototype.visitTimeNanosecond = Nn, Bn.prototype.visitDecimal = Nn, Bn.prototype.visitList = Nn, Bn.prototype.visitStruct = Nn, Bn.prototype.visitUnion = Nn, Bn.prototype.visitDenseUnion = Mn, Bn.prototype.visitSparseUnion = Mn, Bn.prototype.visitDictionary = Nn, Bn.prototype.visitInterval = Nn, Bn.prototype.visitIntervalDayTime = Nn, Bn.prototype.visitIntervalYearMonth = Nn, Bn.prototype.visitFixedSizeList = Nn, Bn.prototype.visitMap = Nn;
    const Fn = new Bn;

    class Ln extends re {
    }

    function Pn(t) {
        const {type: e} = t;
        if (0 === t.nullCount && 1 === t.stride && (e.typeId === c.Timestamp || e instanceof Lt && 64 !== e.bitWidth || e instanceof Wt && 64 !== e.bitWidth || e instanceof Rt && e.precision !== o.HALF)) return new bn(t.data.length, (e => {
            const n = t.data[e];
            return n.values.subarray(0, n.length)[Symbol.iterator]()
        }));
        let n = 0;
        return new bn(t.data.length, (e => {
            const r = t.data[e].length, i = t.slice(n, n + r);
            return n += r, new Rn(i)
        }))
    }

    class Rn {
        constructor(t) {
            this.vector = t, this.index = 0
        }

        next() {
            return this.index < this.vector.length ? {value: this.vector.get(this.index++)} : {done: !0, value: null}
        }

        [Symbol.iterator]() {
            return this
        }
    }

    Ln.prototype.visitNull = Pn, Ln.prototype.visitBool = Pn, Ln.prototype.visitInt = Pn, Ln.prototype.visitInt8 = Pn, Ln.prototype.visitInt16 = Pn, Ln.prototype.visitInt32 = Pn, Ln.prototype.visitInt64 = Pn, Ln.prototype.visitUint8 = Pn, Ln.prototype.visitUint16 = Pn, Ln.prototype.visitUint32 = Pn, Ln.prototype.visitUint64 = Pn, Ln.prototype.visitFloat = Pn, Ln.prototype.visitFloat16 = Pn, Ln.prototype.visitFloat32 = Pn, Ln.prototype.visitFloat64 = Pn, Ln.prototype.visitUtf8 = Pn, Ln.prototype.visitBinary = Pn, Ln.prototype.visitFixedSizeBinary = Pn, Ln.prototype.visitDate = Pn, Ln.prototype.visitDateDay = Pn, Ln.prototype.visitDateMillisecond = Pn, Ln.prototype.visitTimestamp = Pn, Ln.prototype.visitTimestampSecond = Pn, Ln.prototype.visitTimestampMillisecond = Pn, Ln.prototype.visitTimestampMicrosecond = Pn, Ln.prototype.visitTimestampNanosecond = Pn, Ln.prototype.visitTime = Pn, Ln.prototype.visitTimeSecond = Pn, Ln.prototype.visitTimeMillisecond = Pn, Ln.prototype.visitTimeMicrosecond = Pn, Ln.prototype.visitTimeNanosecond = Pn, Ln.prototype.visitDecimal = Pn, Ln.prototype.visitList = Pn, Ln.prototype.visitStruct = Pn, Ln.prototype.visitUnion = Pn, Ln.prototype.visitDenseUnion = Pn, Ln.prototype.visitSparseUnion = Pn, Ln.prototype.visitDictionary = Pn, Ln.prototype.visitInterval = Pn, Ln.prototype.visitIntervalDayTime = Pn, Ln.prototype.visitIntervalYearMonth = Pn, Ln.prototype.visitFixedSizeList = Pn, Ln.prototype.visitMap = Pn;
    const Un = new Ln, zn = (t, e) => t + e;

    class jn extends re {
        visitNull(t, e) {
            return 0
        }

        visitInt(t, e) {
            return t.type.bitWidth / 8
        }

        visitFloat(t, e) {
            return t.type.ArrayType.BYTES_PER_ELEMENT
        }

        visitBool(t, e) {
            return 1 / 8
        }

        visitDecimal(t, e) {
            return t.type.bitWidth / 8
        }

        visitDate(t, e) {
            return 4 * (t.type.unit + 1)
        }

        visitTime(t, e) {
            return t.type.bitWidth / 8
        }

        visitTimestamp(t, e) {
            return t.type.unit === a.SECOND ? 4 : 8
        }

        visitInterval(t, e) {
            return 4 * (t.type.unit + 1)
        }

        visitStruct(t, e) {
            return t.children.reduce(((t, n) => t + Wn.visit(n, e)), 0)
        }

        visitFixedSizeBinary(t, e) {
            return t.type.byteWidth
        }

        visitMap(t, e) {
            return 8 + t.children.reduce(((t, n) => t + Wn.visit(n, e)), 0)
        }

        visitDictionary(t, e) {
            var n;
            return t.type.indices.bitWidth / 8 + ((null === (n = t.dictionary) || void 0 === n ? void 0 : n.getByteLength(t.values[e])) || 0)
        }
    }

    const Vn = (t, e) => {
        let {type: n, children: r, typeIds: i, valueOffsets: o} = t;
        const s = n.typeIdToChildIndex[i[e]];
        return 8 + Wn.visit(r[s], o[e])
    }, $n = (t, e) => {
        let {children: n} = t;
        return 4 + Wn.visitMany(n, n.map((() => e))).reduce(zn, 0)
    };
    jn.prototype.visitUtf8 = (t, e) => {
        let {valueOffsets: n} = t;
        return n[e + 1] - n[e] + 8
    }, jn.prototype.visitBinary = (t, e) => {
        let {valueOffsets: n} = t;
        return n[e + 1] - n[e] + 8
    }, jn.prototype.visitList = (t, e) => {
        let {valueOffsets: n, stride: r, children: i} = t;
        const o = i[0], {[e * r]: s} = n, {[e * r + 1]: a} = n, l = Wn.getVisitFn(o.type), u = o.slice(s, a - s);
        let c = 8;
        for (let d = -1, f = a - s; ++d < f;) c += l(u, d);
        return c
    }, jn.prototype.visitFixedSizeList = (t, e) => {
        let {stride: n, children: r} = t;
        const i = r[0], o = i.slice(e * n, n), s = Wn.getVisitFn(i.type);
        let a = 0;
        for (let l = -1, u = o.length; ++l < u;) a += s(o, l);
        return a
    }, jn.prototype.visitUnion = (t, e) => t.type.mode === i.Dense ? Vn(t, e) : $n(t, e), jn.prototype.visitDenseUnion = Vn, jn.prototype.visitSparseUnion = $n;
    const Wn = new jn;
    var Hn;
    const Yn = {}, Qn = {};

    class Kn {
        constructor(t) {
            var e, n, r;
            const i = t[0] instanceof Kn ? t.flatMap((t => t.data)) : t;
            if (0 === i.length || i.some((t => !(t instanceof Gn)))) throw new TypeError("Vector constructor expects an Array of Data instances.");
            const o = null === (e = i[0]) || void 0 === e ? void 0 : e.type;
            switch (i.length) {
                case 0:
                    this._offsets = [0];
                    break;
                case 1: {
                    const {get: t, set: e, indexOf: n, byteLength: r} = Yn[o.typeId], s = i[0];
                    this.isValid = t => _n(s, t), this.get = e => t(s, e), this.set = (t, n) => e(s, t, n), this.indexOf = t => n(s, t), this.getByteLength = t => r(s, t), this._offsets = [0, s.length];
                    break
                }
                default:
                    Object.setPrototypeOf(this, Qn[o.typeId]), this._offsets = gn(i)
            }
            this.data = i, this.type = o, this.stride = ne(o), this.numChildren = null !== (r = null === (n = o.children) || void 0 === n ? void 0 : n.length) && void 0 !== r ? r : 0, this.length = this._offsets[this._offsets.length - 1]
        }

        get byteLength() {
            return -1 === this._byteLength && (this._byteLength = this.data.reduce(((t, e) => t + e.byteLength), 0)), this._byteLength
        }

        get nullCount() {
            return -1 === this._nullCount && (this._nullCount = mn(this.data)), this._nullCount
        }

        get ArrayType() {
            return this.type.ArrayType
        }

        get [Symbol.toStringTag]() {
            return `${this.VectorName}<${this.type[Symbol.toStringTag]}>`
        }

        get VectorName() {
            return `${c[this.type.typeId]}Vector`
        }

        isValid(t) {
            return !1
        }

        get(t) {
            return null
        }

        set(t, e) {
        }

        indexOf(t, e) {
            return -1
        }

        includes(t, e) {
            return this.indexOf(t, e) > 0
        }

        getByteLength(t) {
            return 0
        }

        [Symbol.iterator]() {
            return Un.visit(this)
        }

        concat() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return new Kn(this.data.concat(e.flatMap((t => t.data)).flat(Number.POSITIVE_INFINITY)))
        }

        slice(t, e) {
            return new Kn(dn(this, t, e, ((t, e, n) => {
                let {data: r, _offsets: i} = t;
                return vn(r, i, e, n)
            })))
        }

        toJSON() {
            return [...this]
        }

        toArray() {
            const {type: t, data: e, length: n, stride: r, ArrayType: i} = this;
            switch (t.typeId) {
                case c.Int:
                case c.Float:
                case c.Decimal:
                case c.Time:
                case c.Timestamp:
                    switch (e.length) {
                        case 0:
                            return new i;
                        case 1:
                            return e[0].values.subarray(0, n * r);
                        default:
                            return e.reduce(((t, e) => {
                                let {values: n, length: i} = e;
                                return t.array.set(n.subarray(0, i * r), t.offset), t.offset += i * r, t
                            }), {array: new i(n * r), offset: 0}).array
                    }
            }
            return [...this]
        }

        toString() {
            return `[${[...this].join(",")}]`
        }

        getChild(t) {
            var e;
            return this.getChildAt(null === (e = this.type.children) || void 0 === e ? void 0 : e.findIndex((e => e.name === t)))
        }

        getChildAt(t) {
            return t > -1 && t < this.numChildren ? new Kn(this.data.map((e => {
                let {children: n} = e;
                return n[t]
            }))) : null
        }

        get isMemoized() {
            return !!Mt.isDictionary(this.type) && this.data[0].dictionary.isMemoized
        }

        memoize() {
            if (Mt.isDictionary(this.type)) {
                const t = new qn(this.data[0].dictionary), e = this.data.map((e => {
                    const n = e.clone();
                    return n.dictionary = t, n
                }));
                return new Kn(e)
            }
            return new qn(this)
        }

        unmemoize() {
            if (Mt.isDictionary(this.type) && this.isMemoized) {
                const t = this.data[0].dictionary.unmemoize(), e = this.data.map((e => {
                    const n = e.clone();
                    return n.dictionary = t, n
                }));
                return new Kn(e)
            }
            return this
        }
    }

    Hn = Symbol.toStringTag, Kn[Hn] = (t => {
        t.type = Mt.prototype, t.data = [], t.length = 0, t.stride = 1, t.numChildren = 0, t._nullCount = -1, t._byteLength = -1, t._offsets = new Uint32Array([0]), t[Symbol.isConcatSpreadable] = !0;
        const e = Object.keys(c).map((t => c[t])).filter((t => "number" === typeof t && t !== c.NONE));
        for (const n of e) {
            const e = rn.getVisitFnByTypeId(n), r = Ae.getVisitFnByTypeId(n), i = Fn.getVisitFnByTypeId(n),
                o = Wn.getVisitFnByTypeId(n);
            Yn[n] = {get: e, set: r, indexOf: i, byteLength: o}, Qn[n] = Object.create(t, {
                isValid: {value: Sn(_n)},
                get: {value: Sn(rn.getVisitFnByTypeId(n))},
                set: {value: In(Ae.getVisitFnByTypeId(n))},
                indexOf: {value: xn(Fn.getVisitFnByTypeId(n))},
                getByteLength: {value: Sn(Wn.getVisitFnByTypeId(n))}
            })
        }
        return "Vector"
    })(Kn.prototype);

    class qn extends Kn {
        constructor(t) {
            super(t.data);
            const e = this.get, n = this.set, r = this.slice, i = new Array(this.length);
            Object.defineProperty(this, "get", {
                value(t) {
                    const n = i[t];
                    if (void 0 !== n) return n;
                    const r = e.call(this, t);
                    return i[t] = r, r
                }
            }), Object.defineProperty(this, "set", {
                value(t, e) {
                    n.call(this, t, e), i[t] = e
                }
            }), Object.defineProperty(this, "slice", {value: (t, e) => new qn(r.call(this, t, e))}), Object.defineProperty(this, "isMemoized", {value: !0}), Object.defineProperty(this, "unmemoize", {value: () => new Kn(this.data)}), Object.defineProperty(this, "memoize", {value: () => this})
        }
    }

    class Gn {
        constructor(t, e, n, r, i) {
            let o, s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : [],
                a = arguments.length > 6 ? arguments[6] : void 0;
            this.type = t, this.children = s, this.dictionary = a, this.offset = Math.floor(Math.max(e || 0, 0)), this.length = Math.floor(Math.max(n || 0, 0)), this._nullCount = Math.floor(Math.max(r || 0, -1)), i instanceof Gn ? (this.stride = i.stride, this.values = i.values, this.typeIds = i.typeIds, this.nullBitmap = i.nullBitmap, this.valueOffsets = i.valueOffsets) : (this.stride = ne(t), i && ((o = i[0]) && (this.valueOffsets = o), (o = i[1]) && (this.values = o), (o = i[2]) && (this.nullBitmap = o), (o = i[3]) && (this.typeIds = o))), this.nullable = 0 !== this._nullCount && this.nullBitmap && this.nullBitmap.byteLength > 0
        }

        get typeId() {
            return this.type.typeId
        }

        get ArrayType() {
            return this.type.ArrayType
        }

        get buffers() {
            return [this.valueOffsets, this.values, this.nullBitmap, this.typeIds]
        }

        get byteLength() {
            let t = 0;
            const {valueOffsets: e, values: n, nullBitmap: r, typeIds: i} = this;
            return e && (t += e.byteLength), n && (t += n.byteLength), r && (t += r.byteLength), i && (t += i.byteLength), this.children.reduce(((t, e) => t + e.byteLength), t)
        }

        get nullCount() {
            let t, e = this._nullCount;
            return e <= -1 && (t = this.nullBitmap) && (this._nullCount = e = this.length - An(t, this.offset, this.offset + this.length)), e
        }

        getValid(t) {
            if (this.nullable && this.nullCount > 0) {
                const e = this.offset + t;
                return 0 !== (this.nullBitmap[e >> 3] & 1 << e % 8)
            }
            return !0
        }

        setValid(t, e) {
            if (!this.nullable) return e;
            if (!this.nullBitmap || this.nullBitmap.byteLength <= t >> 3) {
                const {nullBitmap: t} = this._changeLengthAndBackfillNullBitmap(this.length);
                Object.assign(this, {nullBitmap: t, _nullCount: 0})
            }
            const {nullBitmap: n, offset: r} = this, i = r + t >> 3, o = (r + t) % 8, s = n[i] >> o & 1;
            return e ? 0 === s && (n[i] |= 1 << o, this._nullCount = this.nullCount + 1) : 1 === s && (n[i] &= ~(1 << o), this._nullCount = this.nullCount - 1), e
        }

        clone() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.type,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.offset,
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.length,
                r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this._nullCount,
                i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : this,
                o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : this.children;
            return new Gn(t, e, n, r, i, o, this.dictionary)
        }

        slice(t, e) {
            const {stride: n, typeId: r, children: i} = this, o = +(0 === this._nullCount) - 1, s = 16 === r ? n : 1,
                a = this._sliceBuffers(t, e, n, r);
            return this.clone(this.type, this.offset + t, e, o, a, 0 === i.length || this.valueOffsets ? i : this._sliceChildren(i, s * t, s * e))
        }

        _changeLengthAndBackfillNullBitmap(t) {
            if (this.typeId === c.Null) return this.clone(this.type, 0, t, 0);
            const {length: e, nullCount: n} = this, r = new Uint8Array((t + 63 & -64) >> 3).fill(255, 0, e >> 3);
            r[e >> 3] = (1 << e - (-8 & e)) - 1, n > 0 && r.set(En(this.offset, e, this.nullBitmap), 0);
            const i = this.buffers;
            return i[d.VALIDITY] = r, this.clone(this.type, 0, t, n + (t - e), i)
        }

        _sliceBuffers(t, e, n, r) {
            let i;
            const {buffers: o} = this;
            return (i = o[d.TYPE]) && (o[d.TYPE] = i.subarray(t, t + e)), (i = o[d.OFFSET]) && (o[d.OFFSET] = i.subarray(t, t + e + 1)) || (i = o[d.DATA]) && (o[d.DATA] = 6 === r ? i : i.subarray(n * t, n * (t + e))), o
        }

        _sliceChildren(t, e, n) {
            return t.map((t => t.slice(e, n)))
        }
    }

    Gn.prototype.children = Object.freeze([]);

    class Jn extends re {
        visit(t) {
            return this.getVisitFn(t.type).call(this, t)
        }

        visitNull(t) {
            const {type: e, offset: n = 0, length: r = 0} = t;
            return new Gn(e, n, r, 0)
        }

        visitBool(t) {
            const {type: e, offset: n = 0} = t, r = Z(t.nullBitmap),
                i = J(e.ArrayType, t.data), {length: o = i.length >> 3, nullCount: s = (t.nullBitmap ? -1 : 0)} = t;
            return new Gn(e, n, o, s, [void 0, i, r])
        }

        visitInt(t) {
            const {type: e, offset: n = 0} = t, r = Z(t.nullBitmap), i = J(e.ArrayType, t.data), {
                length: o = i.length, nullCount: s = (t.nullBitmap ? -1 : 0)
            } = t;
            return new Gn(e, n, o, s, [void 0, i, r])
        }

        visitFloat(t) {
            const {type: e, offset: n = 0} = t, r = Z(t.nullBitmap), i = J(e.ArrayType, t.data), {
                length: o = i.length, nullCount: s = (t.nullBitmap ? -1 : 0)
            } = t;
            return new Gn(e, n, o, s, [void 0, i, r])
        }

        visitUtf8(t) {
            const {type: e, offset: n = 0} = t, r = Z(t.data), i = Z(t.nullBitmap),
                o = X(t.valueOffsets), {length: s = o.length - 1, nullCount: a = (t.nullBitmap ? -1 : 0)} = t;
            return new Gn(e, n, s, a, [o, r, i])
        }

        visitBinary(t) {
            const {type: e, offset: n = 0} = t, r = Z(t.data), i = Z(t.nullBitmap),
                o = X(t.valueOffsets), {length: s = o.length - 1, nullCount: a = (t.nullBitmap ? -1 : 0)} = t;
            return new Gn(e, n, s, a, [o, r, i])
        }

        visitFixedSizeBinary(t) {
            const {type: e, offset: n = 0} = t, r = Z(t.nullBitmap),
                i = J(e.ArrayType, t.data), {length: o = i.length / ne(e), nullCount: s = (t.nullBitmap ? -1 : 0)} = t;
            return new Gn(e, n, o, s, [void 0, i, r])
        }

        visitDate(t) {
            const {type: e, offset: n = 0} = t, r = Z(t.nullBitmap),
                i = J(e.ArrayType, t.data), {length: o = i.length / ne(e), nullCount: s = (t.nullBitmap ? -1 : 0)} = t;
            return new Gn(e, n, o, s, [void 0, i, r])
        }

        visitTimestamp(t) {
            const {type: e, offset: n = 0} = t, r = Z(t.nullBitmap),
                i = J(e.ArrayType, t.data), {length: o = i.length / ne(e), nullCount: s = (t.nullBitmap ? -1 : 0)} = t;
            return new Gn(e, n, o, s, [void 0, i, r])
        }

        visitTime(t) {
            const {type: e, offset: n = 0} = t, r = Z(t.nullBitmap),
                i = J(e.ArrayType, t.data), {length: o = i.length / ne(e), nullCount: s = (t.nullBitmap ? -1 : 0)} = t;
            return new Gn(e, n, o, s, [void 0, i, r])
        }

        visitDecimal(t) {
            const {type: e, offset: n = 0} = t, r = Z(t.nullBitmap),
                i = J(e.ArrayType, t.data), {length: o = i.length / ne(e), nullCount: s = (t.nullBitmap ? -1 : 0)} = t;
            return new Gn(e, n, o, s, [void 0, i, r])
        }

        visitList(t) {
            const {type: e, offset: n = 0, child: r} = t, i = Z(t.nullBitmap),
                o = X(t.valueOffsets), {length: s = o.length - 1, nullCount: a = (t.nullBitmap ? -1 : 0)} = t;
            return new Gn(e, n, s, a, [o, void 0, i], [r])
        }

        visitStruct(t) {
            const {type: e, offset: n = 0, children: r = []} = t, i = Z(t.nullBitmap), {
                length: o = r.reduce(((t, e) => {
                    let {length: n} = e;
                    return Math.max(t, n)
                }), 0), nullCount: s = (t.nullBitmap ? -1 : 0)
            } = t;
            return new Gn(e, n, o, s, [void 0, void 0, i], r)
        }

        visitUnion(t) {
            const {type: e, offset: n = 0, children: r = []} = t, i = Z(t.nullBitmap),
                o = J(e.ArrayType, t.typeIds), {length: s = o.length, nullCount: a = (t.nullBitmap ? -1 : 0)} = t;
            if (Mt.isSparseUnion(e)) return new Gn(e, n, s, a, [void 0, void 0, i, o], r);
            const l = X(t.valueOffsets);
            return new Gn(e, n, s, a, [l, void 0, i, o], r)
        }

        visitDictionary(t) {
            const {type: e, offset: n = 0} = t, r = Z(t.nullBitmap),
                i = J(e.indices.ArrayType, t.data), {dictionary: o = new Kn([(new Jn).visit({type: e.dictionary})])} = t, {
                    length: s = i.length, nullCount: a = (t.nullBitmap ? -1 : 0)
                } = t;
            return new Gn(e, n, s, a, [void 0, i, r], [], o)
        }

        visitInterval(t) {
            const {type: e, offset: n = 0} = t, r = Z(t.nullBitmap),
                i = J(e.ArrayType, t.data), {length: o = i.length / ne(e), nullCount: s = (t.nullBitmap ? -1 : 0)} = t;
            return new Gn(e, n, o, s, [void 0, i, r])
        }

        visitFixedSizeList(t) {
            const {type: e, offset: n = 0, child: r = (new Jn).visit({type: e.valueType})} = t,
                i = Z(t.nullBitmap), {length: o = r.length / ne(e), nullCount: s = (t.nullBitmap ? -1 : 0)} = t;
            return new Gn(e, n, o, s, [void 0, void 0, i], [r])
        }

        visitMap(t) {
            const {type: e, offset: n = 0, child: r = (new Jn).visit({type: e.childType})} = t, i = Z(t.nullBitmap),
                o = X(t.valueOffsets), {length: s = o.length - 1, nullCount: a = (t.nullBitmap ? -1 : 0)} = t;
            return new Gn(e, n, s, a, [o, void 0, i], [r])
        }
    }

    function Xn(t) {
        return (new Jn).visit(t)
    }

    class Zn {
        constructor() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                e = arguments.length > 1 ? arguments[1] : void 0, n = arguments.length > 2 ? arguments[2] : void 0;
            this.fields = t || [], this.metadata = e || new Map, n || (n = nr(t)), this.dictionaries = n
        }

        get [Symbol.toStringTag]() {
            return "Schema"
        }

        get names() {
            return this.fields.map((t => t.name))
        }

        toString() {
            return `Schema<{ ${this.fields.map(((t, e) => `${e}: ${t}`)).join(", ")} }>`
        }

        select(t) {
            const e = new Set(t), n = this.fields.filter((t => e.has(t.name)));
            return new Zn(n, this.metadata)
        }

        selectAt(t) {
            const e = t.map((t => this.fields[t])).filter(Boolean);
            return new Zn(e, this.metadata)
        }

        assign() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            const r = e[0] instanceof Zn ? e[0] : Array.isArray(e[0]) ? new Zn(e[0]) : new Zn(e), i = [...this.fields],
                o = er(er(new Map, this.metadata), r.metadata), s = r.fields.filter((t => {
                    const e = i.findIndex((e => e.name === t.name));
                    return !~e || (i[e] = t.clone({metadata: er(er(new Map, i[e].metadata), t.metadata)})) && !1
                })), a = nr(s, new Map);
            return new Zn([...i, ...s], o, new Map([...this.dictionaries, ...a]))
        }
    }

    Zn.prototype.fields = null, Zn.prototype.metadata = null, Zn.prototype.dictionaries = null;

    class tr {
        constructor(t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = arguments.length > 3 ? arguments[3] : void 0;
            this.name = t, this.type = e, this.nullable = n, this.metadata = r || new Map
        }

        static new() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            let [r, i, o, s] = e;
            return e[0] && "object" === typeof e[0] && (({name: r} = e[0]), void 0 === i && (i = e[0].type), void 0 === o && (o = e[0].nullable), void 0 === s && (s = e[0].metadata)), new tr(`${r}`, i, o, s)
        }

        get typeId() {
            return this.type.typeId
        }

        get [Symbol.toStringTag]() {
            return "Field"
        }

        toString() {
            return `${this.name}: ${this.type}`
        }

        clone() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            let [r, i, o, s] = e;
            return e[0] && "object" === typeof e[0] ? ({
                name: r = this.name, type: i = this.type, nullable: o = this.nullable, metadata: s = this.metadata
            } = e[0]) : [r = this.name, i = this.type, o = this.nullable, s = this.metadata] = e, tr.new(r, i, o, s)
        }
    }

    function er(t, e) {
        return new Map([...t || new Map, ...e || new Map])
    }

    function nr(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        for (let n = -1, r = t.length; ++n < r;) {
            const r = t[n].type;
            if (Mt.isDictionary(r)) if (e.has(r.id)) {
                if (e.get(r.id) !== r.dictionary) throw new Error("Cannot create Schema containing two different dictionaries with the same Id")
            } else e.set(r.id, r.dictionary);
            r.children && r.children.length > 0 && nr(r.children, e)
        }
        return e
    }

    tr.prototype.type = null, tr.prototype.name = null, tr.prototype.nullable = null, tr.prototype.metadata = null;

    class rr extends re {
        compareSchemas(t, e) {
            return t === e || e instanceof t.constructor && this.compareManyFields(t.fields, e.fields)
        }

        compareManyFields(t, e) {
            return t === e || Array.isArray(t) && Array.isArray(e) && t.length === e.length && t.every(((t, n) => this.compareFields(t, e[n])))
        }

        compareFields(t, e) {
            return t === e || e instanceof t.constructor && t.name === e.name && t.nullable === e.nullable && this.visit(t.type, e.type)
        }
    }

    function ir(t, e) {
        return e instanceof t.constructor
    }

    function or(t, e) {
        return t === e || ir(t, e)
    }

    function sr(t, e) {
        return t === e || ir(t, e) && t.bitWidth === e.bitWidth && t.isSigned === e.isSigned
    }

    function ar(t, e) {
        return t === e || ir(t, e) && t.precision === e.precision
    }

    function lr(t, e) {
        return t === e || ir(t, e) && t.unit === e.unit
    }

    function ur(t, e) {
        return t === e || ir(t, e) && t.unit === e.unit && t.timezone === e.timezone
    }

    function cr(t, e) {
        return t === e || ir(t, e) && t.unit === e.unit && t.bitWidth === e.bitWidth
    }

    function dr(t, e) {
        return t === e || ir(t, e) && t.mode === e.mode && t.typeIds.every(((t, n) => t === e.typeIds[n])) && hr.compareManyFields(t.children, e.children)
    }

    function fr(t, e) {
        return t === e || ir(t, e) && t.unit === e.unit
    }

    rr.prototype.visitNull = or, rr.prototype.visitBool = or, rr.prototype.visitInt = sr, rr.prototype.visitInt8 = sr, rr.prototype.visitInt16 = sr, rr.prototype.visitInt32 = sr, rr.prototype.visitInt64 = sr, rr.prototype.visitUint8 = sr, rr.prototype.visitUint16 = sr, rr.prototype.visitUint32 = sr, rr.prototype.visitUint64 = sr, rr.prototype.visitFloat = ar, rr.prototype.visitFloat16 = ar, rr.prototype.visitFloat32 = ar, rr.prototype.visitFloat64 = ar, rr.prototype.visitUtf8 = or, rr.prototype.visitBinary = or, rr.prototype.visitFixedSizeBinary = function (t, e) {
        return t === e || ir(t, e) && t.byteWidth === e.byteWidth
    }, rr.prototype.visitDate = lr, rr.prototype.visitDateDay = lr, rr.prototype.visitDateMillisecond = lr, rr.prototype.visitTimestamp = ur, rr.prototype.visitTimestampSecond = ur, rr.prototype.visitTimestampMillisecond = ur, rr.prototype.visitTimestampMicrosecond = ur, rr.prototype.visitTimestampNanosecond = ur, rr.prototype.visitTime = cr, rr.prototype.visitTimeSecond = cr, rr.prototype.visitTimeMillisecond = cr, rr.prototype.visitTimeMicrosecond = cr, rr.prototype.visitTimeNanosecond = cr, rr.prototype.visitDecimal = or, rr.prototype.visitList = function (t, e) {
        return t === e || ir(t, e) && t.children.length === e.children.length && hr.compareManyFields(t.children, e.children)
    }, rr.prototype.visitStruct = function (t, e) {
        return t === e || ir(t, e) && t.children.length === e.children.length && hr.compareManyFields(t.children, e.children)
    }, rr.prototype.visitUnion = dr, rr.prototype.visitDenseUnion = dr, rr.prototype.visitSparseUnion = dr, rr.prototype.visitDictionary = function (t, e) {
        return t === e || ir(t, e) && t.id === e.id && t.isOrdered === e.isOrdered && hr.visit(t.indices, e.indices) && hr.visit(t.dictionary, e.dictionary)
    }, rr.prototype.visitInterval = fr, rr.prototype.visitIntervalDayTime = fr, rr.prototype.visitIntervalYearMonth = fr, rr.prototype.visitFixedSizeList = function (t, e) {
        return t === e || ir(t, e) && t.listSize === e.listSize && t.children.length === e.children.length && hr.compareManyFields(t.children, e.children)
    }, rr.prototype.visitMap = function (t, e) {
        return t === e || ir(t, e) && t.keysSorted === e.keysSorted && t.children.length === e.children.length && hr.compareManyFields(t.children, e.children)
    };
    const hr = new rr;

    function pr(t, e) {
        return hr.compareSchemas(t, e)
    }

    var yr, br;

    class mr {
        constructor() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            switch (e.length) {
                case 2:
                    if ([this.schema] = e, !(this.schema instanceof Zn)) throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
                    if ([, this.data = Xn({
                        nullCount: 0,
                        type: new Kt(this.schema.fields),
                        children: this.schema.fields.map((t => Xn({type: t.type, nullCount: 0})))
                    })] = e, !(this.data instanceof Gn)) throw new TypeError("RecordBatch constructor expects a [Schema, Data] pair.");
                    [this.schema, this.data] = gr(this.schema, this.data.children);
                    break;
                case 1: {
                    const [t] = e, {
                            fields: n, children: r, length: i
                        } = Object.keys(t).reduce(((e, n, r) => (e.children[r] = t[n], e.length = Math.max(e.length, t[n].length), e.fields[r] = tr.new({
                            name: n, type: t[n].type, nullable: !0
                        }), e)), {length: 0, fields: new Array, children: new Array}), o = new Zn(n),
                        s = Xn({type: new Kt(n), length: i, children: r, nullCount: 0});
                    [this.schema, this.data] = gr(o, s.children, i);
                    break
                }
                default:
                    throw new TypeError("RecordBatch constructor expects an Object mapping names to child Data, or a [Schema, Data] pair.")
            }
        }

        get dictionaries() {
            return this._dictionaries || (this._dictionaries = vr(this.schema.fields, this.data.children))
        }

        get numCols() {
            return this.schema.fields.length
        }

        get numRows() {
            return this.data.length
        }

        get nullCount() {
            return this.data.nullCount
        }

        isValid(t) {
            return this.data.getValid(t)
        }

        get(t) {
            return rn.visit(this.data, t)
        }

        set(t, e) {
            return Ae.visit(this.data, t, e)
        }

        indexOf(t, e) {
            return Fn.visit(this.data, t, e)
        }

        getByteLength(t) {
            return Wn.visit(this.data, t)
        }

        [Symbol.iterator]() {
            return Un.visit(new Kn([this.data]))
        }

        toArray() {
            return [...this]
        }

        concat() {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
            return new Ir(this.schema, [this, ...e])
        }

        slice(t, e) {
            const [n] = new Kn([this.data]).slice(t, e).data;
            return new mr(this.schema, n)
        }

        getChild(t) {
            var e;
            return this.getChildAt(null === (e = this.schema.fields) || void 0 === e ? void 0 : e.findIndex((e => e.name === t)))
        }

        getChildAt(t) {
            return t > -1 && t < this.schema.fields.length ? new Kn([this.data.children[t]]) : null
        }

        setChild(t, e) {
            var n;
            return this.setChildAt(null === (n = this.schema.fields) || void 0 === n ? void 0 : n.findIndex((e => e.name === t)), e)
        }

        setChildAt(t, e) {
            let n = this.schema, r = this.data;
            if (t > -1 && t < this.numCols) {
                e || (e = new Kn([Xn({type: new Ft, length: this.numRows})]));
                const i = n.fields.slice(), o = r.children.slice(), s = i[t].clone({type: e.type});
                [i[t], o[t]] = [s, e.data[0]], n = new Zn(i, new Map(this.schema.metadata)), r = Xn({
                    type: new Kt(i), children: o
                })
            }
            return new mr(n, r)
        }

        select(t) {
            const e = this.schema.select(t), n = new Kt(e.fields), r = [];
            for (const i of t) {
                const t = this.schema.fields.findIndex((t => t.name === i));
                ~t && (r[t] = this.data.children[t])
            }
            return new mr(e, Xn({type: n, length: this.numRows, children: r}))
        }

        selectAt(t) {
            const e = this.schema.selectAt(t), n = t.map((t => this.data.children[t])).filter(Boolean),
                r = Xn({type: new Kt(e.fields), length: this.numRows, children: n});
            return new mr(e, r)
        }
    }

    function gr(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.reduce(((t, e) => Math.max(t, e.length)), 0);
        var r;
        const i = [...t.fields], o = [...e], s = (n + 63 & -64) >> 3;
        for (const [a, l] of t.fields.entries()) {
            const t = e[a];
            t && t.length === n || (i[a] = l.clone({nullable: !0}), o[a] = null !== (r = null === t || void 0 === t ? void 0 : t._changeLengthAndBackfillNullBitmap(n)) && void 0 !== r ? r : Xn({
                type: l.type, length: n, nullCount: n, nullBitmap: new Uint8Array(s)
            }))
        }
        return [t.assign(i), Xn({type: new Kt(i), length: n, children: o})]
    }

    function vr(t, e) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
        for (let r = -1, i = t.length; ++r < i;) {
            const i = t[r].type, o = e[r];
            if (Mt.isDictionary(i)) if (n.has(i.id)) {
                if (n.get(i.id) !== o.dictionary) throw new Error("Cannot create Schema containing two different dictionaries with the same Id")
            } else o.dictionary && n.set(i.id, o.dictionary);
            i.children && i.children.length > 0 && vr(i.children, o.children, n)
        }
        return n
    }

    yr = Symbol.toStringTag, mr[yr] = (t => (t._nullCount = -1, t[Symbol.isConcatSpreadable] = !0, "RecordBatch"))(mr.prototype);

    class wr extends mr {
        constructor(t) {
            const e = t.fields.map((t => Xn({type: t.type})));
            super(t, Xn({type: new Kt(t.fields), nullCount: 0, children: e}))
        }
    }

    function _r(t, e) {
        return function (t, e) {
            const n = [...t.fields], r = [], i = {numBatches: e.reduce(((t, e) => Math.max(t, e.length)), 0)};
            let o = 0, s = 0, a = -1;
            const l = e.length;
            let u, c = [];
            for (; i.numBatches-- > 0;) {
                for (s = Number.POSITIVE_INFINITY, a = -1; ++a < l;) c[a] = u = e[a].shift(), s = Math.min(s, u ? u.length : s);
                Number.isFinite(s) && (c = Sr(n, s, c, e, i), s > 0 && (r[o++] = Xn({
                    type: new Kt(n), length: s, nullCount: 0, children: c.slice()
                })))
            }
            return [t = t.assign(n), r.map((e => new mr(t, e)))]
        }(t, e.map((t => t.data.concat())))
    }

    function Sr(t, e, n, r, i) {
        var o;
        const s = (e + 63 & -64) >> 3;
        for (let a = -1, l = r.length; ++a < l;) {
            const l = n[a], u = null === l || void 0 === l ? void 0 : l.length;
            if (u >= e) u === e ? n[a] = l : (n[a] = l.slice(0, e), i.numBatches = Math.max(i.numBatches, r[a].unshift(l.slice(e, u - e)))); else {
                const r = t[a];
                t[a] = r.clone({nullable: !0}), n[a] = null !== (o = null === l || void 0 === l ? void 0 : l._changeLengthAndBackfillNullBitmap(e)) && void 0 !== o ? o : Xn({
                    type: r.type, length: e, nullCount: e, nullBitmap: new Uint8Array(s)
                })
            }
        }
        return n
    }

    class Ir {
        constructor() {
            for (var t, e, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            if (0 === r.length) return this.batches = [], this.schema = new Zn([]), this._offsets = [0], this;
            let o, s;
            r[0] instanceof Zn && (o = r.shift()), r[r.length - 1] instanceof Uint32Array && (s = r.pop());
            const a = t => {
                if (t) {
                    if (t instanceof mr) return [t];
                    if (t instanceof Ir) return t.batches;
                    if (t instanceof Gn) {
                        if (t.type instanceof Kt) return [new mr(new Zn(t.type.children), t)]
                    } else {
                        if (Array.isArray(t)) return t.flatMap((t => a(t)));
                        if ("function" === typeof t[Symbol.iterator]) return [...t].flatMap((t => a(t)));
                        if ("object" === typeof t) {
                            const e = Object.keys(t), n = e.map((e => new Kn([t[e]]))),
                                r = new Zn(e.map(((t, e) => new tr(String(t), n[e].type)))), [, i] = _r(r, n);
                            return 0 === i.length ? [new mr(t)] : i
                        }
                    }
                }
                return []
            }, l = r.flatMap((t => a(t)));
            if (o = null !== (e = null !== o && void 0 !== o ? o : null === (t = l[0]) || void 0 === t ? void 0 : t.schema) && void 0 !== e ? e : new Zn([]), !(o instanceof Zn)) throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
            for (const u of l) {
                if (!(u instanceof mr)) throw new TypeError("Table constructor expects a [Schema, RecordBatch[]] pair.");
                if (!pr(o, u.schema)) throw new TypeError("Table and inner RecordBatch schemas must be equivalent.")
            }
            this.schema = o, this.batches = l, this._offsets = null !== s && void 0 !== s ? s : gn(this.data)
        }

        get data() {
            return this.batches.map((t => {
                let {data: e} = t;
                return e
            }))
        }

        get numCols() {
            return this.schema.fields.length
        }

        get numRows() {
            return this.data.reduce(((t, e) => t + e.length), 0)
        }

        get nullCount() {
            return -1 === this._nullCount && (this._nullCount = mn(this.data)), this._nullCount
        }

        isValid(t) {
            return !1
        }

        get(t) {
            return null
        }

        set(t, e) {
        }

        indexOf(t, e) {
            return -1
        }

        getByteLength(t) {
            return 0
        }

        [Symbol.iterator]() {
            return this.batches.length > 0 ? Un.visit(new Kn(this.data)) : new Array(0)[Symbol.iterator]()
        }

        toArray() {
            return [...this]
        }

        toString() {
            return `[\n  ${this.toArray().join(",\n  ")}\n]`
        }

        concat() {
            const t = this.schema;
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
            const i = this.data.concat(n.flatMap((t => {
                let {data: e} = t;
                return e
            })));
            return new Ir(t, i.map((e => new mr(t, e))))
        }

        slice(t, e) {
            const n = this.schema;
            [t, e] = dn({length: this.numRows}, t, e);
            const r = vn(this.data, this._offsets, t, e);
            return new Ir(n, r.map((t => new mr(n, t))))
        }

        getChild(t) {
            return this.getChildAt(this.schema.fields.findIndex((e => e.name === t)))
        }

        getChildAt(t) {
            if (t > -1 && t < this.schema.fields.length) {
                const e = this.data.map((e => e.children[t]));
                if (0 === e.length) {
                    const {type: n} = this.schema.fields[t], r = Xn({type: n, length: 0, nullCount: 0});
                    e.push(r._changeLengthAndBackfillNullBitmap(this.numRows))
                }
                return new Kn(e)
            }
            return null
        }

        setChild(t, e) {
            var n;
            return this.setChildAt(null === (n = this.schema.fields) || void 0 === n ? void 0 : n.findIndex((e => e.name === t)), e)
        }

        setChildAt(t, e) {
            let n = this.schema, r = [...this.batches];
            if (t > -1 && t < this.numCols) {
                e || (e = new Kn([Xn({type: new Ft, length: this.numRows})]));
                const i = n.fields.slice(), o = i[t].clone({type: e.type}),
                    s = this.schema.fields.map(((t, e) => this.getChildAt(e)));
                [i[t], s[t]] = [o, e], [n, r] = _r(n, s)
            }
            return new Ir(n, r)
        }

        select(t) {
            const e = this.schema.fields.reduce(((t, e, n) => t.set(e.name, n)), new Map);
            return this.selectAt(t.map((t => e.get(t))).filter((t => t > -1)))
        }

        selectAt(t) {
            const e = this.schema.selectAt(t), n = this.batches.map((e => e.selectAt(t)));
            return new Ir(e, n)
        }

        assign(t) {
            const e = this.schema.fields, [n, r] = t.schema.fields.reduce(((t, n, r) => {
                const [i, o] = t, s = e.findIndex((t => t.name === n.name));
                return ~s ? o[s] = r : i.push(r), t
            }), [[], []]), i = this.schema.assign(t.schema), o = [...e.map(((t, e) => [e, r[e]])).map((e => {
                let [n, r] = e;
                return void 0 === r ? this.getChildAt(n) : t.getChildAt(r)
            })), ...n.map((e => t.getChildAt(e)))].filter(Boolean);
            return new Ir(..._r(i, o))
        }
    }

    br = Symbol.toStringTag, Ir[br] = (t => (t.schema = null, t.batches = [], t._offsets = new Uint32Array([0]), t._nullCount = -1, t[Symbol.isConcatSpreadable] = !0, t.isValid = Sn(_n), t.get = Sn(rn.getVisitFn(c.Struct)), t.set = In(Ae.getVisitFn(c.Struct)), t.indexOf = xn(Fn.getVisitFn(c.Struct)), t.getByteLength = Sn(Wn.getVisitFn(c.Struct)), "Table"))(Ir.prototype);

    class xr {
        constructor() {
            this.bb = null, this.bb_pos = 0
        }

        __init(t, e) {
            return this.bb_pos = t, this.bb = e, this
        }

        offset() {
            return this.bb.readInt64(this.bb_pos)
        }

        metaDataLength() {
            return this.bb.readInt32(this.bb_pos + 8)
        }

        bodyLength() {
            return this.bb.readInt64(this.bb_pos + 16)
        }

        static sizeOf() {
            return 24
        }

        static createBlock(t, e, n, r) {
            return t.prep(8, 24), t.writeInt64(r), t.pad(4), t.writeInt32(n), t.writeInt64(e), t.offset()
        }
    }

    const kr = new Int32Array(2), Tr = new Float32Array(kr.buffer), Er = new Float64Array(kr.buffer),
        Cr = 1 === new Uint16Array(new Uint8Array([1, 0]).buffer)[0];

    class Or {
        constructor(t, e) {
            this.low = 0 | t, this.high = 0 | e
        }

        static create(t, e) {
            return 0 == t && 0 == e ? Or.ZERO : new Or(t, e)
        }

        toFloat64() {
            return (this.low >>> 0) + 4294967296 * this.high
        }

        equals(t) {
            return this.low == t.low && this.high == t.high
        }
    }

    var Ar, Dr, Br, Nr, Mr;
    Or.ZERO = new Or(0, 0), function (t) {
        t[t.UTF8_BYTES = 1] = "UTF8_BYTES", t[t.UTF16_STRING = 2] = "UTF16_STRING"
    }(Ar || (Ar = {}));

    class Fr {
        constructor(t) {
            this.bytes_ = t, this.position_ = 0
        }

        static allocate(t) {
            return new Fr(new Uint8Array(t))
        }

        clear() {
            this.position_ = 0
        }

        bytes() {
            return this.bytes_
        }

        position() {
            return this.position_
        }

        setPosition(t) {
            this.position_ = t
        }

        capacity() {
            return this.bytes_.length
        }

        readInt8(t) {
            return this.readUint8(t) << 24 >> 24
        }

        readUint8(t) {
            return this.bytes_[t]
        }

        readInt16(t) {
            return this.readUint16(t) << 16 >> 16
        }

        readUint16(t) {
            return this.bytes_[t] | this.bytes_[t + 1] << 8
        }

        readInt32(t) {
            return this.bytes_[t] | this.bytes_[t + 1] << 8 | this.bytes_[t + 2] << 16 | this.bytes_[t + 3] << 24
        }

        readUint32(t) {
            return this.readInt32(t) >>> 0
        }

        readInt64(t) {
            return new Or(this.readInt32(t), this.readInt32(t + 4))
        }

        readUint64(t) {
            return new Or(this.readUint32(t), this.readUint32(t + 4))
        }

        readFloat32(t) {
            return kr[0] = this.readInt32(t), Tr[0]
        }

        readFloat64(t) {
            return kr[Cr ? 0 : 1] = this.readInt32(t), kr[Cr ? 1 : 0] = this.readInt32(t + 4), Er[0]
        }

        writeInt8(t, e) {
            this.bytes_[t] = e
        }

        writeUint8(t, e) {
            this.bytes_[t] = e
        }

        writeInt16(t, e) {
            this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8
        }

        writeUint16(t, e) {
            this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8
        }

        writeInt32(t, e) {
            this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8, this.bytes_[t + 2] = e >> 16, this.bytes_[t + 3] = e >> 24
        }

        writeUint32(t, e) {
            this.bytes_[t] = e, this.bytes_[t + 1] = e >> 8, this.bytes_[t + 2] = e >> 16, this.bytes_[t + 3] = e >> 24
        }

        writeInt64(t, e) {
            this.writeInt32(t, e.low), this.writeInt32(t + 4, e.high)
        }

        writeUint64(t, e) {
            this.writeUint32(t, e.low), this.writeUint32(t + 4, e.high)
        }

        writeFloat32(t, e) {
            Tr[0] = e, this.writeInt32(t, kr[0])
        }

        writeFloat64(t, e) {
            Er[0] = e, this.writeInt32(t, kr[Cr ? 0 : 1]), this.writeInt32(t + 4, kr[Cr ? 1 : 0])
        }

        getBufferIdentifier() {
            if (this.bytes_.length < this.position_ + 4 + 4) throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");
            let t = "";
            for (let e = 0; e < 4; e++) t += String.fromCharCode(this.readInt8(this.position_ + 4 + e));
            return t
        }

        __offset(t, e) {
            const n = t - this.readInt32(t);
            return e < this.readInt16(n) ? this.readInt16(n + e) : 0
        }

        __union(t, e) {
            return t.bb_pos = e + this.readInt32(e), t.bb = this, t
        }

        __string(t, e) {
            t += this.readInt32(t);
            const n = this.readInt32(t);
            let r = "", i = 0;
            if (t += 4, e === Ar.UTF8_BYTES) return this.bytes_.subarray(t, t + n);
            for (; i < n;) {
                let e;
                const n = this.readUint8(t + i++);
                if (n < 192) e = n; else {
                    const r = this.readUint8(t + i++);
                    if (n < 224) e = (31 & n) << 6 | 63 & r; else {
                        const o = this.readUint8(t + i++);
                        if (n < 240) e = (15 & n) << 12 | (63 & r) << 6 | 63 & o; else {
                            e = (7 & n) << 18 | (63 & r) << 12 | (63 & o) << 6 | 63 & this.readUint8(t + i++)
                        }
                    }
                }
                e < 65536 ? r += String.fromCharCode(e) : (e -= 65536, r += String.fromCharCode(55296 + (e >> 10), 56320 + (1023 & e)))
            }
            return r
        }

        __union_with_string(t, e) {
            return "string" === typeof t ? this.__string(e) : this.__union(t, e)
        }

        __indirect(t) {
            return t + this.readInt32(t)
        }

        __vector(t) {
            return t + this.readInt32(t) + 4
        }

        __vector_len(t) {
            return this.readInt32(t + this.readInt32(t))
        }

        __has_identifier(t) {
            if (4 != t.length) throw new Error("FlatBuffers: file identifier must be length 4");
            for (let e = 0; e < 4; e++) if (t.charCodeAt(e) != this.readInt8(this.position() + 4 + e)) return !1;
            return !0
        }

        createLong(t, e) {
            return Or.create(t, e)
        }

        createScalarList(t, e) {
            const n = [];
            for (let r = 0; r < e; ++r) null !== t(r) && n.push(t(r));
            return n
        }

        createObjList(t, e) {
            const n = [];
            for (let r = 0; r < e; ++r) {
                const e = t(r);
                null !== e && n.push(e.unpack())
            }
            return n
        }
    }

    class Lr {
        constructor(t) {
            let e;
            this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null, e = t || 1024, this.bb = Fr.allocate(e), this.space = e
        }

        clear() {
            this.bb.clear(), this.space = this.bb.capacity(), this.minalign = 1, this.vtable = null, this.vtable_in_use = 0, this.isNested = !1, this.object_start = 0, this.vtables = [], this.vector_num_elems = 0, this.force_defaults = !1, this.string_maps = null
        }

        forceDefaults(t) {
            this.force_defaults = t
        }

        dataBuffer() {
            return this.bb
        }

        asUint8Array() {
            return this.bb.bytes().subarray(this.bb.position(), this.bb.position() + this.offset())
        }

        prep(t, e) {
            t > this.minalign && (this.minalign = t);
            const n = 1 + ~(this.bb.capacity() - this.space + e) & t - 1;
            for (; this.space < n + t + e;) {
                const t = this.bb.capacity();
                this.bb = Lr.growByteBuffer(this.bb), this.space += this.bb.capacity() - t
            }
            this.pad(n)
        }

        pad(t) {
            for (let e = 0; e < t; e++) this.bb.writeInt8(--this.space, 0)
        }

        writeInt8(t) {
            this.bb.writeInt8(this.space -= 1, t)
        }

        writeInt16(t) {
            this.bb.writeInt16(this.space -= 2, t)
        }

        writeInt32(t) {
            this.bb.writeInt32(this.space -= 4, t)
        }

        writeInt64(t) {
            this.bb.writeInt64(this.space -= 8, t)
        }

        writeFloat32(t) {
            this.bb.writeFloat32(this.space -= 4, t)
        }

        writeFloat64(t) {
            this.bb.writeFloat64(this.space -= 8, t)
        }

        addInt8(t) {
            this.prep(1, 0), this.writeInt8(t)
        }

        addInt16(t) {
            this.prep(2, 0), this.writeInt16(t)
        }

        addInt32(t) {
            this.prep(4, 0), this.writeInt32(t)
        }

        addInt64(t) {
            this.prep(8, 0), this.writeInt64(t)
        }

        addFloat32(t) {
            this.prep(4, 0), this.writeFloat32(t)
        }

        addFloat64(t) {
            this.prep(8, 0), this.writeFloat64(t)
        }

        addFieldInt8(t, e, n) {
            (this.force_defaults || e != n) && (this.addInt8(e), this.slot(t))
        }

        addFieldInt16(t, e, n) {
            (this.force_defaults || e != n) && (this.addInt16(e), this.slot(t))
        }

        addFieldInt32(t, e, n) {
            (this.force_defaults || e != n) && (this.addInt32(e), this.slot(t))
        }

        addFieldInt64(t, e, n) {
            !this.force_defaults && e.equals(n) || (this.addInt64(e), this.slot(t))
        }

        addFieldFloat32(t, e, n) {
            (this.force_defaults || e != n) && (this.addFloat32(e), this.slot(t))
        }

        addFieldFloat64(t, e, n) {
            (this.force_defaults || e != n) && (this.addFloat64(e), this.slot(t))
        }

        addFieldOffset(t, e, n) {
            (this.force_defaults || e != n) && (this.addOffset(e), this.slot(t))
        }

        addFieldStruct(t, e, n) {
            e != n && (this.nested(e), this.slot(t))
        }

        nested(t) {
            if (t != this.offset()) throw new Error("FlatBuffers: struct must be serialized inline.")
        }

        notNested() {
            if (this.isNested) throw new Error("FlatBuffers: object serialization must not be nested.")
        }

        slot(t) {
            null !== this.vtable && (this.vtable[t] = this.offset())
        }

        offset() {
            return this.bb.capacity() - this.space
        }

        static growByteBuffer(t) {
            const e = t.capacity();
            if (3221225472 & e) throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");
            const n = e << 1, r = Fr.allocate(n);
            return r.setPosition(n - e), r.bytes().set(t.bytes(), n - e), r
        }

        addOffset(t) {
            this.prep(4, 0), this.writeInt32(this.offset() - t + 4)
        }

        startObject(t) {
            this.notNested(), null == this.vtable && (this.vtable = []), this.vtable_in_use = t;
            for (let e = 0; e < t; e++) this.vtable[e] = 0;
            this.isNested = !0, this.object_start = this.offset()
        }

        endObject() {
            if (null == this.vtable || !this.isNested) throw new Error("FlatBuffers: endObject called without startObject");
            this.addInt32(0);
            const t = this.offset();
            let e = this.vtable_in_use - 1;
            for (; e >= 0 && 0 == this.vtable[e]; e--) ;
            const n = e + 1;
            for (; e >= 0; e--) this.addInt16(0 != this.vtable[e] ? t - this.vtable[e] : 0);
            this.addInt16(t - this.object_start);
            const r = 2 * (n + 2);
            this.addInt16(r);
            let i = 0;
            const o = this.space;
            t:for (e = 0; e < this.vtables.length; e++) {
                const t = this.bb.capacity() - this.vtables[e];
                if (r == this.bb.readInt16(t)) {
                    for (let e = 2; e < r; e += 2) if (this.bb.readInt16(o + e) != this.bb.readInt16(t + e)) continue t;
                    i = this.vtables[e];
                    break
                }
            }
            return i ? (this.space = this.bb.capacity() - t, this.bb.writeInt32(this.space, i - t)) : (this.vtables.push(this.offset()), this.bb.writeInt32(this.bb.capacity() - t, this.offset() - t)), this.isNested = !1, t
        }

        finish(t, e, n) {
            const r = n ? 4 : 0;
            if (e) {
                const t = e;
                if (this.prep(this.minalign, 8 + r), 4 != t.length) throw new Error("FlatBuffers: file identifier must be length 4");
                for (let e = 3; e >= 0; e--) this.writeInt8(t.charCodeAt(e))
            }
            this.prep(this.minalign, 4 + r), this.addOffset(t), r && this.addInt32(this.bb.capacity() - this.space), this.bb.setPosition(this.space)
        }

        finishSizePrefixed(t, e) {
            this.finish(t, e, !0)
        }

        requiredField(t, e) {
            const n = this.bb.capacity() - t, r = n - this.bb.readInt32(n);
            if (!(0 != this.bb.readInt16(r + e))) throw new Error("FlatBuffers: field " + e + " must be set")
        }

        startVector(t, e, n) {
            this.notNested(), this.vector_num_elems = e, this.prep(4, t * e), this.prep(n, t * e)
        }

        endVector() {
            return this.writeInt32(this.vector_num_elems), this.offset()
        }

        createSharedString(t) {
            if (!t) return 0;
            if (this.string_maps || (this.string_maps = new Map), this.string_maps.has(t)) return this.string_maps.get(t);
            const e = this.createString(t);
            return this.string_maps.set(t, e), e
        }

        createString(t) {
            if (!t) return 0;
            let e;
            if (t instanceof Uint8Array) e = t; else {
                e = [];
                let n = 0;
                for (; n < t.length;) {
                    let r;
                    const i = t.charCodeAt(n++);
                    if (i < 55296 || i >= 56320) r = i; else {
                        r = (i << 10) + t.charCodeAt(n++) + -56613888
                    }
                    r < 128 ? e.push(r) : (r < 2048 ? e.push(r >> 6 & 31 | 192) : (r < 65536 ? e.push(r >> 12 & 15 | 224) : e.push(r >> 18 & 7 | 240, r >> 12 & 63 | 128), e.push(r >> 6 & 63 | 128)), e.push(63 & r | 128))
                }
            }
            this.addInt8(0), this.startVector(1, e.length, 1), this.bb.setPosition(this.space -= e.length);
            for (let n = 0, r = this.space, i = this.bb.bytes(); n < e.length; n++) i[r++] = e[n];
            return this.endVector()
        }

        createLong(t, e) {
            return Or.create(t, e)
        }

        createObjectOffset(t) {
            return null === t ? 0 : "string" === typeof t ? this.createString(t) : t.pack(this)
        }

        createObjectOffsetList(t) {
            const e = [];
            for (let n = 0; n < t.length; ++n) {
                const r = t[n];
                if (null === r) throw new Error("FlatBuffers: Argument for createObjectOffsetList cannot contain null.");
                e.push(this.createObjectOffset(r))
            }
            return e
        }

        createStructOffsetList(t, e) {
            return e(this, t.length), this.createObjectOffsetList(t), this.endVector()
        }
    }

    class Pr {
        constructor() {
            this.bb = null, this.bb_pos = 0
        }

        __init(t, e) {
            return this.bb_pos = t, this.bb = e, this
        }

        static getRootAsKeyValue(t, e) {
            return (e || new Pr).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static getSizePrefixedRootAsKeyValue(t, e) {
            return t.setPosition(t.position() + 4), (e || new Pr).__init(t.readInt32(t.position()) + t.position(), t)
        }

        key(t) {
            const e = this.bb.__offset(this.bb_pos, 4);
            return e ? this.bb.__string(this.bb_pos + e, t) : null
        }

        value(t) {
            const e = this.bb.__offset(this.bb_pos, 6);
            return e ? this.bb.__string(this.bb_pos + e, t) : null
        }

        static startKeyValue(t) {
            t.startObject(2)
        }

        static addKey(t, e) {
            t.addFieldOffset(0, e, 0)
        }

        static addValue(t, e) {
            t.addFieldOffset(1, e, 0)
        }

        static endKeyValue(t) {
            return t.endObject()
        }

        static createKeyValue(t, e, n) {
            return Pr.startKeyValue(t), Pr.addKey(t, e), Pr.addValue(t, n), Pr.endKeyValue(t)
        }
    }

    !function (t) {
        t[t.V1 = 0] = "V1", t[t.V2 = 1] = "V2", t[t.V3 = 2] = "V3", t[t.V4 = 3] = "V4", t[t.V5 = 4] = "V5"
    }(Dr || (Dr = {})), function (t) {
        t[t.Little = 0] = "Little", t[t.Big = 1] = "Big"
    }(Br || (Br = {})), function (t) {
        t[t.DenseArray = 0] = "DenseArray"
    }(Nr || (Nr = {}));

    class Rr {
        constructor() {
            this.bb = null, this.bb_pos = 0
        }

        __init(t, e) {
            return this.bb_pos = t, this.bb = e, this
        }

        static getRootAsInt(t, e) {
            return (e || new Rr).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static getSizePrefixedRootAsInt(t, e) {
            return t.setPosition(t.position() + 4), (e || new Rr).__init(t.readInt32(t.position()) + t.position(), t)
        }

        bitWidth() {
            const t = this.bb.__offset(this.bb_pos, 4);
            return t ? this.bb.readInt32(this.bb_pos + t) : 0
        }

        isSigned() {
            const t = this.bb.__offset(this.bb_pos, 6);
            return !!t && !!this.bb.readInt8(this.bb_pos + t)
        }

        static startInt(t) {
            t.startObject(2)
        }

        static addBitWidth(t, e) {
            t.addFieldInt32(0, e, 0)
        }

        static addIsSigned(t, e) {
            t.addFieldInt8(1, +e, 0)
        }

        static endInt(t) {
            return t.endObject()
        }

        static createInt(t, e, n) {
            return Rr.startInt(t), Rr.addBitWidth(t, e), Rr.addIsSigned(t, n), Rr.endInt(t)
        }
    }

    class Ur {
        constructor() {
            this.bb = null, this.bb_pos = 0
        }

        __init(t, e) {
            return this.bb_pos = t, this.bb = e, this
        }

        static getRootAsDictionaryEncoding(t, e) {
            return (e || new Ur).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static getSizePrefixedRootAsDictionaryEncoding(t, e) {
            return t.setPosition(t.position() + 4), (e || new Ur).__init(t.readInt32(t.position()) + t.position(), t)
        }

        id() {
            const t = this.bb.__offset(this.bb_pos, 4);
            return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0)
        }

        indexType(t) {
            const e = this.bb.__offset(this.bb_pos, 6);
            return e ? (t || new Rr).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null
        }

        isOrdered() {
            const t = this.bb.__offset(this.bb_pos, 8);
            return !!t && !!this.bb.readInt8(this.bb_pos + t)
        }

        dictionaryKind() {
            const t = this.bb.__offset(this.bb_pos, 10);
            return t ? this.bb.readInt16(this.bb_pos + t) : Nr.DenseArray
        }

        static startDictionaryEncoding(t) {
            t.startObject(4)
        }

        static addId(t, e) {
            t.addFieldInt64(0, e, t.createLong(0, 0))
        }

        static addIndexType(t, e) {
            t.addFieldOffset(1, e, 0)
        }

        static addIsOrdered(t, e) {
            t.addFieldInt8(2, +e, 0)
        }

        static addDictionaryKind(t, e) {
            t.addFieldInt16(3, e, Nr.DenseArray)
        }

        static endDictionaryEncoding(t) {
            return t.endObject()
        }
    }

    !function (t) {
        t[t.NONE = 0] = "NONE", t[t.Null = 1] = "Null", t[t.Int = 2] = "Int", t[t.FloatingPoint = 3] = "FloatingPoint", t[t.Binary = 4] = "Binary", t[t.Utf8 = 5] = "Utf8", t[t.Bool = 6] = "Bool", t[t.Decimal = 7] = "Decimal", t[t.Date = 8] = "Date", t[t.Time = 9] = "Time", t[t.Timestamp = 10] = "Timestamp", t[t.Interval = 11] = "Interval", t[t.List = 12] = "List", t[t.Struct_ = 13] = "Struct_", t[t.Union = 14] = "Union", t[t.FixedSizeBinary = 15] = "FixedSizeBinary", t[t.FixedSizeList = 16] = "FixedSizeList", t[t.Map = 17] = "Map", t[t.Duration = 18] = "Duration", t[t.LargeBinary = 19] = "LargeBinary", t[t.LargeUtf8 = 20] = "LargeUtf8", t[t.LargeList = 21] = "LargeList"
    }(Mr || (Mr = {}));

    class zr {
        constructor() {
            this.bb = null, this.bb_pos = 0
        }

        __init(t, e) {
            return this.bb_pos = t, this.bb = e, this
        }

        static getRootAsField(t, e) {
            return (e || new zr).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static getSizePrefixedRootAsField(t, e) {
            return t.setPosition(t.position() + 4), (e || new zr).__init(t.readInt32(t.position()) + t.position(), t)
        }

        name(t) {
            const e = this.bb.__offset(this.bb_pos, 4);
            return e ? this.bb.__string(this.bb_pos + e, t) : null
        }

        nullable() {
            const t = this.bb.__offset(this.bb_pos, 6);
            return !!t && !!this.bb.readInt8(this.bb_pos + t)
        }

        typeType() {
            const t = this.bb.__offset(this.bb_pos, 8);
            return t ? this.bb.readUint8(this.bb_pos + t) : Mr.NONE
        }

        type(t) {
            const e = this.bb.__offset(this.bb_pos, 10);
            return e ? this.bb.__union(t, this.bb_pos + e) : null
        }

        dictionary(t) {
            const e = this.bb.__offset(this.bb_pos, 12);
            return e ? (t || new Ur).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null
        }

        children(t, e) {
            const n = this.bb.__offset(this.bb_pos, 14);
            return n ? (e || new zr).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * t), this.bb) : null
        }

        childrenLength() {
            const t = this.bb.__offset(this.bb_pos, 14);
            return t ? this.bb.__vector_len(this.bb_pos + t) : 0
        }

        customMetadata(t, e) {
            const n = this.bb.__offset(this.bb_pos, 16);
            return n ? (e || new Pr).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * t), this.bb) : null
        }

        customMetadataLength() {
            const t = this.bb.__offset(this.bb_pos, 16);
            return t ? this.bb.__vector_len(this.bb_pos + t) : 0
        }

        static startField(t) {
            t.startObject(7)
        }

        static addName(t, e) {
            t.addFieldOffset(0, e, 0)
        }

        static addNullable(t, e) {
            t.addFieldInt8(1, +e, 0)
        }

        static addTypeType(t, e) {
            t.addFieldInt8(2, e, Mr.NONE)
        }

        static addType(t, e) {
            t.addFieldOffset(3, e, 0)
        }

        static addDictionary(t, e) {
            t.addFieldOffset(4, e, 0)
        }

        static addChildren(t, e) {
            t.addFieldOffset(5, e, 0)
        }

        static createChildrenVector(t, e) {
            t.startVector(4, e.length, 4);
            for (let n = e.length - 1; n >= 0; n--) t.addOffset(e[n]);
            return t.endVector()
        }

        static startChildrenVector(t, e) {
            t.startVector(4, e, 4)
        }

        static addCustomMetadata(t, e) {
            t.addFieldOffset(6, e, 0)
        }

        static createCustomMetadataVector(t, e) {
            t.startVector(4, e.length, 4);
            for (let n = e.length - 1; n >= 0; n--) t.addOffset(e[n]);
            return t.endVector()
        }

        static startCustomMetadataVector(t, e) {
            t.startVector(4, e, 4)
        }

        static endField(t) {
            return t.endObject()
        }
    }

    class jr {
        constructor() {
            this.bb = null, this.bb_pos = 0
        }

        __init(t, e) {
            return this.bb_pos = t, this.bb = e, this
        }

        static getRootAsSchema(t, e) {
            return (e || new jr).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static getSizePrefixedRootAsSchema(t, e) {
            return t.setPosition(t.position() + 4), (e || new jr).__init(t.readInt32(t.position()) + t.position(), t)
        }

        endianness() {
            const t = this.bb.__offset(this.bb_pos, 4);
            return t ? this.bb.readInt16(this.bb_pos + t) : Br.Little
        }

        fields(t, e) {
            const n = this.bb.__offset(this.bb_pos, 6);
            return n ? (e || new zr).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * t), this.bb) : null
        }

        fieldsLength() {
            const t = this.bb.__offset(this.bb_pos, 6);
            return t ? this.bb.__vector_len(this.bb_pos + t) : 0
        }

        customMetadata(t, e) {
            const n = this.bb.__offset(this.bb_pos, 8);
            return n ? (e || new Pr).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * t), this.bb) : null
        }

        customMetadataLength() {
            const t = this.bb.__offset(this.bb_pos, 8);
            return t ? this.bb.__vector_len(this.bb_pos + t) : 0
        }

        features(t) {
            const e = this.bb.__offset(this.bb_pos, 10);
            return e ? this.bb.readInt64(this.bb.__vector(this.bb_pos + e) + 8 * t) : this.bb.createLong(0, 0)
        }

        featuresLength() {
            const t = this.bb.__offset(this.bb_pos, 10);
            return t ? this.bb.__vector_len(this.bb_pos + t) : 0
        }

        static startSchema(t) {
            t.startObject(4)
        }

        static addEndianness(t, e) {
            t.addFieldInt16(0, e, Br.Little)
        }

        static addFields(t, e) {
            t.addFieldOffset(1, e, 0)
        }

        static createFieldsVector(t, e) {
            t.startVector(4, e.length, 4);
            for (let n = e.length - 1; n >= 0; n--) t.addOffset(e[n]);
            return t.endVector()
        }

        static startFieldsVector(t, e) {
            t.startVector(4, e, 4)
        }

        static addCustomMetadata(t, e) {
            t.addFieldOffset(2, e, 0)
        }

        static createCustomMetadataVector(t, e) {
            t.startVector(4, e.length, 4);
            for (let n = e.length - 1; n >= 0; n--) t.addOffset(e[n]);
            return t.endVector()
        }

        static startCustomMetadataVector(t, e) {
            t.startVector(4, e, 4)
        }

        static addFeatures(t, e) {
            t.addFieldOffset(3, e, 0)
        }

        static createFeaturesVector(t, e) {
            t.startVector(8, e.length, 8);
            for (let n = e.length - 1; n >= 0; n--) t.addInt64(e[n]);
            return t.endVector()
        }

        static startFeaturesVector(t, e) {
            t.startVector(8, e, 8)
        }

        static endSchema(t) {
            return t.endObject()
        }

        static finishSchemaBuffer(t, e) {
            t.finish(e)
        }

        static finishSizePrefixedSchemaBuffer(t, e) {
            t.finish(e, void 0, !0)
        }

        static createSchema(t, e, n, r, i) {
            return jr.startSchema(t), jr.addEndianness(t, e), jr.addFields(t, n), jr.addCustomMetadata(t, r), jr.addFeatures(t, i), jr.endSchema(t)
        }
    }

    class Vr {
        constructor() {
            this.bb = null, this.bb_pos = 0
        }

        __init(t, e) {
            return this.bb_pos = t, this.bb = e, this
        }

        static getRootAsFooter(t, e) {
            return (e || new Vr).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static getSizePrefixedRootAsFooter(t, e) {
            return t.setPosition(t.position() + 4), (e || new Vr).__init(t.readInt32(t.position()) + t.position(), t)
        }

        version() {
            const t = this.bb.__offset(this.bb_pos, 4);
            return t ? this.bb.readInt16(this.bb_pos + t) : Dr.V1
        }

        schema(t) {
            const e = this.bb.__offset(this.bb_pos, 6);
            return e ? (t || new jr).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null
        }

        dictionaries(t, e) {
            const n = this.bb.__offset(this.bb_pos, 8);
            return n ? (e || new xr).__init(this.bb.__vector(this.bb_pos + n) + 24 * t, this.bb) : null
        }

        dictionariesLength() {
            const t = this.bb.__offset(this.bb_pos, 8);
            return t ? this.bb.__vector_len(this.bb_pos + t) : 0
        }

        recordBatches(t, e) {
            const n = this.bb.__offset(this.bb_pos, 10);
            return n ? (e || new xr).__init(this.bb.__vector(this.bb_pos + n) + 24 * t, this.bb) : null
        }

        recordBatchesLength() {
            const t = this.bb.__offset(this.bb_pos, 10);
            return t ? this.bb.__vector_len(this.bb_pos + t) : 0
        }

        customMetadata(t, e) {
            const n = this.bb.__offset(this.bb_pos, 12);
            return n ? (e || new Pr).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * t), this.bb) : null
        }

        customMetadataLength() {
            const t = this.bb.__offset(this.bb_pos, 12);
            return t ? this.bb.__vector_len(this.bb_pos + t) : 0
        }

        static startFooter(t) {
            t.startObject(5)
        }

        static addVersion(t, e) {
            t.addFieldInt16(0, e, Dr.V1)
        }

        static addSchema(t, e) {
            t.addFieldOffset(1, e, 0)
        }

        static addDictionaries(t, e) {
            t.addFieldOffset(2, e, 0)
        }

        static startDictionariesVector(t, e) {
            t.startVector(24, e, 8)
        }

        static addRecordBatches(t, e) {
            t.addFieldOffset(3, e, 0)
        }

        static startRecordBatchesVector(t, e) {
            t.startVector(24, e, 8)
        }

        static addCustomMetadata(t, e) {
            t.addFieldOffset(4, e, 0)
        }

        static createCustomMetadataVector(t, e) {
            t.startVector(4, e.length, 4);
            for (let n = e.length - 1; n >= 0; n--) t.addOffset(e[n]);
            return t.endVector()
        }

        static startCustomMetadataVector(t, e) {
            t.startVector(4, e, 4)
        }

        static endFooter(t) {
            return t.endObject()
        }

        static finishFooterBuffer(t, e) {
            t.finish(e)
        }

        static finishSizePrefixedFooterBuffer(t, e) {
            t.finish(e, void 0, !0)
        }
    }

    var $r = Or, Wr = Lr, Hr = Fr;

    class Yr {
        constructor(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.V4,
                n = arguments.length > 2 ? arguments[2] : void 0, i = arguments.length > 3 ? arguments[3] : void 0;
            this.schema = t, this.version = e, n && (this._recordBatches = n), i && (this._dictionaryBatches = i)
        }

        static decode(t) {
            t = new Hr(Z(t));
            const e = Vr.getRootAsFooter(t), n = Zn.decode(e.schema());
            return new Qr(n, e)
        }

        static encode(t) {
            const e = new Wr, n = Zn.encode(e, t.schema);
            Vr.startRecordBatchesVector(e, t.numRecordBatches);
            for (const r of [...t.recordBatches()].slice().reverse()) Kr.encode(e, r);
            const i = e.endVector();
            Vr.startDictionariesVector(e, t.numDictionaries);
            for (const r of [...t.dictionaryBatches()].slice().reverse()) Kr.encode(e, r);
            const o = e.endVector();
            return Vr.startFooter(e), Vr.addSchema(e, n), Vr.addVersion(e, r.V4), Vr.addRecordBatches(e, i), Vr.addDictionaries(e, o), Vr.finishFooterBuffer(e, Vr.endFooter(e)), e.asUint8Array()
        }

        get numRecordBatches() {
            return this._recordBatches.length
        }

        get numDictionaries() {
            return this._dictionaryBatches.length
        }

        * recordBatches() {
            for (let t, e = -1, n = this.numRecordBatches; ++e < n;) (t = this.getRecordBatch(e)) && (yield t)
        }

        * dictionaryBatches() {
            for (let t, e = -1, n = this.numDictionaries; ++e < n;) (t = this.getDictionaryBatch(e)) && (yield t)
        }

        getRecordBatch(t) {
            return t >= 0 && t < this.numRecordBatches && this._recordBatches[t] || null
        }

        getDictionaryBatch(t) {
            return t >= 0 && t < this.numDictionaries && this._dictionaryBatches[t] || null
        }
    }

    class Qr extends Yr {
        constructor(t, e) {
            super(t, e.version()), this._footer = e
        }

        get numRecordBatches() {
            return this._footer.recordBatchesLength()
        }

        get numDictionaries() {
            return this._footer.dictionariesLength()
        }

        getRecordBatch(t) {
            if (t >= 0 && t < this.numRecordBatches) {
                const e = this._footer.recordBatches(t);
                if (e) return Kr.decode(e)
            }
            return null
        }

        getDictionaryBatch(t) {
            if (t >= 0 && t < this.numDictionaries) {
                const e = this._footer.dictionaries(t);
                if (e) return Kr.decode(e)
            }
            return null
        }
    }

    class Kr {
        constructor(t, e, n) {
            this.metaDataLength = t, this.offset = "number" === typeof n ? n : n.low, this.bodyLength = "number" === typeof e ? e : e.low
        }

        static decode(t) {
            return new Kr(t.metaDataLength(), t.bodyLength(), t.offset())
        }

        static encode(t, e) {
            const {metaDataLength: n} = e, r = new $r(e.offset, 0), i = new $r(e.bodyLength, 0);
            return xr.createBlock(t, r, n, i)
        }
    }

    const qr = {
        fromIterable: t => Gr(function* (t) {
            let e, n, r, i, o = !1, s = [], a = 0;

            function l() {
                return "peek" === r ? G(s, i)[0] : ([n, s, a] = G(s, i), n)
            }

            ({cmd: r, size: i} = yield null);
            const u = (c = t, et(Uint8Array, c))[Symbol.iterator]();
            var c;
            try {
                do {
                    if (({
                        done: e, value: n
                    } = Number.isNaN(i - a) ? u.next() : u.next(i - a)), !e && n.byteLength > 0 && (s.push(n), a += n.byteLength), e || i <= a) do {
                        ({cmd: r, size: i} = yield l())
                    } while (i < a)
                } while (!e)
            } catch (d) {
                (o = !0) && "function" === typeof u.throw && u.throw(d)
            } finally {
                !1 === o && "function" === typeof u.return && u.return(null)
            }
            return null
        }(t)), fromAsyncIterable: t => Gr(function (t) {
            return j(this, arguments, (function* () {
                let e, n, r, i, o = !1, s = [], a = 0;

                function l() {
                    return "peek" === r ? G(s, i)[0] : ([n, s, a] = G(s, i), n)
                }

                ({cmd: r, size: i} = yield yield z(null));
                const u = (c = t, nt(Uint8Array, c))[Symbol.asyncIterator]();
                var c;
                try {
                    do {
                        if (({
                            done: e, value: n
                        } = Number.isNaN(i - a) ? yield z(u.next()) : yield z(u.next(i - a))), !e && n.byteLength > 0 && (s.push(n), a += n.byteLength), e || i <= a) do {
                            ({cmd: r, size: i} = yield yield z(l()))
                        } while (i < a)
                    } while (!e)
                } catch (d) {
                    (o = !0) && "function" === typeof u.throw && (yield z(u.throw(d)))
                } finally {
                    !1 === o && "function" === typeof u.return && (yield z(u.return(new Uint8Array(0))))
                }
                return yield z(null)
            }))
        }(t)), fromDOMStream: t => Gr(function (t) {
            return j(this, arguments, (function* () {
                let e, n, r, i = !1, o = !1, s = [], a = 0;

                function l() {
                    return "peek" === n ? G(s, r)[0] : ([e, s, a] = G(s, r), e)
                }

                ({cmd: n, size: r} = yield yield z(null));
                const u = new Jr(t);
                try {
                    do {
                        if (({
                            done: i, value: e
                        } = Number.isNaN(r - a) ? yield z(u.read()) : yield z(u.read(r - a))), !i && e.byteLength > 0 && (s.push(Z(e)), a += e.byteLength), i || r <= a) do {
                            ({cmd: n, size: r} = yield yield z(l()))
                        } while (r < a)
                    } while (!i)
                } catch (c) {
                    (o = !0) && (yield z(u.cancel(c)))
                } finally {
                    !1 === o ? yield z(u.cancel()) : t.locked && u.releaseLock()
                }
                return yield z(null)
            }))
        }(t)), fromNodeStream: t => Gr(function (t) {
            return j(this, arguments, (function* () {
                const e = [];
                let n, r, i, o = "error", s = !1, a = null, l = 0, u = [];

                function c() {
                    return "peek" === n ? G(u, r)[0] : ([i, u, l] = G(u, r), i)
                }

                if (({
                    cmd: n, size: r
                } = yield yield z(null)), t.isTTY) return yield yield z(new Uint8Array(0)), yield z(null);
                try {
                    e[0] = Xr(t, "end"), e[1] = Xr(t, "error");
                    do {
                        if (e[2] = Xr(t, "readable"), [o, a] = yield z(Promise.race(e.map((t => t[2])))), "error" === o) break;
                        if ((s = "end" === o) || (Number.isFinite(r - l) ? (i = Z(t.read(r - l)), i.byteLength < r - l && (i = Z(t.read()))) : i = Z(t.read()), i.byteLength > 0 && (u.push(i), l += i.byteLength)), s || r <= l) do {
                            ({cmd: n, size: r} = yield yield z(c()))
                        } while (r < l)
                    } while (!s)
                } finally {
                    yield z(d(e, "error" === o ? a : null))
                }
                return yield z(null);

                function d(e, n) {
                    return i = u = null, new Promise(((r, i) => {
                        for (const [n, s] of e) t.off(n, s);
                        try {
                            const e = t.destroy;
                            e && e.call(t, n), n = void 0
                        } catch (o) {
                            n = o || n
                        } finally {
                            null != n ? i(n) : r()
                        }
                    }))
                }
            }))
        }(t)), toDOMStream(t, e) {
            throw new Error('"toDOMStream" not available in this environment')
        }, toNodeStream(t, e) {
            throw new Error('"toNodeStream" not available in this environment')
        }
    }, Gr = t => (t.next(), t);

    class Jr {
        constructor(t) {
            this.source = t, this.reader = null, this.reader = this.source.getReader(), this.reader.closed.catch((() => {
            }))
        }

        get closed() {
            return this.reader ? this.reader.closed.catch((() => {
            })) : Promise.resolve()
        }

        releaseLock() {
            this.reader && this.reader.releaseLock(), this.reader = null
        }

        cancel(t) {
            return R(this, void 0, void 0, (function* () {
                const {reader: e, source: n} = this;
                e && (yield e.cancel(t).catch((() => {
                }))), n && n.locked && this.releaseLock()
            }))
        }

        read(t) {
            return R(this, void 0, void 0, (function* () {
                if (0 === t) return {done: null == this.reader, value: new Uint8Array(0)};
                const e = yield this.reader.read();
                return !e.done && (e.value = Z(e)), e
            }))
        }
    }

    const Xr = (t, e) => {
        const n = t => r([e, t]);
        let r;
        return [e, n, new Promise((i => (r = i) && t.once(e, n)))]
    };
    const Zr = Object.freeze({done: !0, value: void 0});

    class ti {
        constructor(t) {
            this._json = t
        }

        get schema() {
            return this._json.schema
        }

        get batches() {
            return this._json.batches || []
        }

        get dictionaries() {
            return this._json.dictionaries || []
        }
    }

    class ei {
        tee() {
            return this._getDOMStream().tee()
        }

        pipe(t, e) {
            return this._getNodeStream().pipe(t, e)
        }

        pipeTo(t, e) {
            return this._getDOMStream().pipeTo(t, e)
        }

        pipeThrough(t, e) {
            return this._getDOMStream().pipeThrough(t, e)
        }

        _getDOMStream() {
            return this._DOMStream || (this._DOMStream = this.toDOMStream())
        }

        _getNodeStream() {
            return this._nodeStream || (this._nodeStream = this.toNodeStream())
        }
    }

    class ni extends ei {
        constructor() {
            super(), this._values = [], this.resolvers = [], this._closedPromise = new Promise((t => this._closedPromiseResolve = t))
        }

        get closed() {
            return this._closedPromise
        }

        cancel(t) {
            return R(this, void 0, void 0, (function* () {
                yield this.return(t)
            }))
        }

        write(t) {
            this._ensureOpen() && (this.resolvers.length <= 0 ? this._values.push(t) : this.resolvers.shift().resolve({
                done: !1, value: t
            }))
        }

        abort(t) {
            this._closedPromiseResolve && (this.resolvers.length <= 0 ? this._error = {error: t} : this.resolvers.shift().reject({
                done: !0, value: t
            }))
        }

        close() {
            if (this._closedPromiseResolve) {
                const {resolvers: t} = this;
                for (; t.length > 0;) t.shift().resolve(Zr);
                this._closedPromiseResolve(), this._closedPromiseResolve = void 0
            }
        }

        [Symbol.asyncIterator]() {
            return this
        }

        toDOMStream(t) {
            return qr.toDOMStream(this._closedPromiseResolve || this._error ? this : this._values, t)
        }

        toNodeStream(t) {
            return qr.toNodeStream(this._closedPromiseResolve || this._error ? this : this._values, t)
        }

        throw(t) {
            return R(this, void 0, void 0, (function* () {
                return yield this.abort(t), Zr
            }))
        }

        return(t) {
            return R(this, void 0, void 0, (function* () {
                return yield this.close(), Zr
            }))
        }

        read(t) {
            return R(this, void 0, void 0, (function* () {
                return (yield this.next(t, "read")).value
            }))
        }

        peek(t) {
            return R(this, void 0, void 0, (function* () {
                return (yield this.next(t, "peek")).value
            }))
        }

        next() {
            return this._values.length > 0 ? Promise.resolve({
                done: !1, value: this._values.shift()
            }) : this._error ? Promise.reject({
                done: !0, value: this._error.error
            }) : this._closedPromiseResolve ? new Promise(((t, e) => {
                this.resolvers.push({resolve: t, reject: e})
            })) : Promise.resolve(Zr)
        }

        _ensureOpen() {
            if (this._closedPromiseResolve) return !0;
            throw new Error("AsyncQueue is closed")
        }
    }

    class ri extends ni {
        write(t) {
            if ((t = Z(t)).byteLength > 0) return super.write(t)
        }

        toString() {
            return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? H(this.toUint8Array(!0)) : this.toUint8Array(!1).then(H)
        }

        toUint8Array() {
            return arguments.length > 0 && void 0 !== arguments[0] && arguments[0] ? G(this._values)[0] : (() => R(this, void 0, void 0, (function* () {
                var t, e;
                const n = [];
                let r = 0;
                try {
                    for (var i, o = $(this); !(i = yield o.next()).done;) {
                        const t = i.value;
                        n.push(t), r += t.byteLength
                    }
                } catch (s) {
                    t = {error: s}
                } finally {
                    try {
                        i && !i.done && (e = o.return) && (yield e.call(o))
                    } finally {
                        if (t) throw t.error
                    }
                }
                return G(n, r)[0]
            })))()
        }
    }

    class ii {
        constructor(t) {
            t && (this.source = new si(qr.fromIterable(t)))
        }

        [Symbol.iterator]() {
            return this
        }

        next(t) {
            return this.source.next(t)
        }

        throw(t) {
            return this.source.throw(t)
        }

        return(t) {
            return this.source.return(t)
        }

        peek(t) {
            return this.source.peek(t)
        }

        read(t) {
            return this.source.read(t)
        }
    }

    class oi {
        constructor(t) {
            t instanceof oi ? this.source = t.source : t instanceof ri ? this.source = new ai(qr.fromAsyncIterable(t)) : L(t) ? this.source = new ai(qr.fromNodeStream(t)) : F(t) ? this.source = new ai(qr.fromDOMStream(t)) : N(t) ? this.source = new ai(qr.fromDOMStream(t.body)) : C(t) ? this.source = new ai(qr.fromIterable(t)) : (E(t) || O(t)) && (this.source = new ai(qr.fromAsyncIterable(t)))
        }

        [Symbol.asyncIterator]() {
            return this
        }

        next(t) {
            return this.source.next(t)
        }

        throw(t) {
            return this.source.throw(t)
        }

        return(t) {
            return this.source.return(t)
        }

        get closed() {
            return this.source.closed
        }

        cancel(t) {
            return this.source.cancel(t)
        }

        peek(t) {
            return this.source.peek(t)
        }

        read(t) {
            return this.source.read(t)
        }
    }

    class si {
        constructor(t) {
            this.source = t
        }

        cancel(t) {
            this.return(t)
        }

        peek(t) {
            return this.next(t, "peek").value
        }

        read(t) {
            return this.next(t, "read").value
        }

        next(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "read";
            return this.source.next({cmd: e, size: t})
        }

        throw(t) {
            return Object.create(this.source.throw && this.source.throw(t) || Zr)
        }

        return(t) {
            return Object.create(this.source.return && this.source.return(t) || Zr)
        }
    }

    class ai {
        constructor(t) {
            this.source = t, this._closedPromise = new Promise((t => this._closedPromiseResolve = t))
        }

        cancel(t) {
            return R(this, void 0, void 0, (function* () {
                yield this.return(t)
            }))
        }

        get closed() {
            return this._closedPromise
        }

        read(t) {
            return R(this, void 0, void 0, (function* () {
                return (yield this.next(t, "read")).value
            }))
        }

        peek(t) {
            return R(this, void 0, void 0, (function* () {
                return (yield this.next(t, "peek")).value
            }))
        }

        next(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "read";
            return R(this, void 0, void 0, (function* () {
                return yield this.source.next({cmd: e, size: t})
            }))
        }

        throw(t) {
            return R(this, void 0, void 0, (function* () {
                const e = this.source.throw && (yield this.source.throw(t)) || Zr;
                return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(e)
            }))
        }

        return(t) {
            return R(this, void 0, void 0, (function* () {
                const e = this.source.return && (yield this.source.return(t)) || Zr;
                return this._closedPromiseResolve && this._closedPromiseResolve(), this._closedPromiseResolve = void 0, Object.create(e)
            }))
        }
    }

    class li extends ii {
        constructor(t, e) {
            super(), this.position = 0, this.buffer = Z(t), this.size = "undefined" === typeof e ? this.buffer.byteLength : e
        }

        readInt32(t) {
            const {buffer: e, byteOffset: n} = this.readAt(t, 4);
            return new DataView(e, n).getInt32(0, !0)
        }

        seek(t) {
            return this.position = Math.min(t, this.size), t < this.size
        }

        read(t) {
            const {buffer: e, size: n, position: r} = this;
            return e && r < n ? ("number" !== typeof t && (t = Number.POSITIVE_INFINITY), this.position = Math.min(n, r + Math.min(n - r, t)), e.subarray(r, this.position)) : null
        }

        readAt(t, e) {
            const n = this.buffer, r = Math.min(this.size, t + e);
            return n ? n.subarray(t, r) : new Uint8Array(e)
        }

        close() {
            this.buffer && (this.buffer = null)
        }

        throw(t) {
            return this.close(), {done: !0, value: t}
        }

        return(t) {
            return this.close(), {done: !0, value: t}
        }
    }

    class ui extends oi {
        constructor(t, e) {
            super(), this.position = 0, this._handle = t, "number" === typeof e ? this.size = e : this._pending = (() => R(this, void 0, void 0, (function* () {
                this.size = (yield t.stat()).size, delete this._pending
            })))()
        }

        readInt32(t) {
            return R(this, void 0, void 0, (function* () {
                const {buffer: e, byteOffset: n} = yield this.readAt(t, 4);
                return new DataView(e, n).getInt32(0, !0)
            }))
        }

        seek(t) {
            return R(this, void 0, void 0, (function* () {
                return this._pending && (yield this._pending), this.position = Math.min(t, this.size), t < this.size
            }))
        }

        read(t) {
            return R(this, void 0, void 0, (function* () {
                this._pending && (yield this._pending);
                const {_handle: e, size: n, position: r} = this;
                if (e && r < n) {
                    "number" !== typeof t && (t = Number.POSITIVE_INFINITY);
                    let i = r, o = 0, s = 0;
                    const a = Math.min(n, i + Math.min(n - i, t)),
                        l = new Uint8Array(Math.max(0, (this.position = a) - i));
                    for (; (i += s) < a && (o += s) < l.byteLength;) ({bytesRead: s} = yield e.read(l, o, l.byteLength - o, i));
                    return l
                }
                return null
            }))
        }

        readAt(t, e) {
            return R(this, void 0, void 0, (function* () {
                this._pending && (yield this._pending);
                const {_handle: n, size: r} = this;
                if (n && t + e < r) {
                    const i = Math.min(r, t + e), o = new Uint8Array(i - t);
                    return (yield n.read(o, 0, e, t)).buffer
                }
                return new Uint8Array(e)
            }))
        }

        close() {
            return R(this, void 0, void 0, (function* () {
                const t = this._handle;
                this._handle = null, t && (yield t.close())
            }))
        }

        throw(t) {
            return R(this, void 0, void 0, (function* () {
                return yield this.close(), {done: !0, value: t}
            }))
        }

        return(t) {
            return R(this, void 0, void 0, (function* () {
                return yield this.close(), {done: !0, value: t}
            }))
        }
    }

    function ci(t) {
        return t < 0 && (t = 4294967295 + t + 1), `0x${t.toString(16)}`
    }

    const di = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8];

    class fi {
        constructor(t) {
            this.buffer = t
        }

        high() {
            return this.buffer[1]
        }

        low() {
            return this.buffer[0]
        }

        _times(t) {
            const e = new Uint32Array([this.buffer[1] >>> 16, 65535 & this.buffer[1], this.buffer[0] >>> 16, 65535 & this.buffer[0]]),
                n = new Uint32Array([t.buffer[1] >>> 16, 65535 & t.buffer[1], t.buffer[0] >>> 16, 65535 & t.buffer[0]]);
            let r = e[3] * n[3];
            this.buffer[0] = 65535 & r;
            let i = r >>> 16;
            return r = e[2] * n[3], i += r, r = e[3] * n[2] >>> 0, i += r, this.buffer[0] += i << 16, this.buffer[1] = i >>> 0 < r ? 65536 : 0, this.buffer[1] += i >>> 16, this.buffer[1] += e[1] * n[3] + e[2] * n[2] + e[3] * n[1], this.buffer[1] += e[0] * n[3] + e[1] * n[2] + e[2] * n[1] + e[3] * n[0] << 16, this
        }

        _plus(t) {
            const e = this.buffer[0] + t.buffer[0] >>> 0;
            this.buffer[1] += t.buffer[1], e < this.buffer[0] >>> 0 && ++this.buffer[1], this.buffer[0] = e
        }

        lessThan(t) {
            return this.buffer[1] < t.buffer[1] || this.buffer[1] === t.buffer[1] && this.buffer[0] < t.buffer[0]
        }

        equals(t) {
            return this.buffer[1] === t.buffer[1] && this.buffer[0] == t.buffer[0]
        }

        greaterThan(t) {
            return t.lessThan(this)
        }

        hex() {
            return `${ci(this.buffer[1])} ${ci(this.buffer[0])}`
        }
    }

    class hi extends fi {
        times(t) {
            return this._times(t), this
        }

        plus(t) {
            return this._plus(t), this
        }

        static from(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Uint32Array(2);
            return hi.fromString("string" === typeof t ? t : t.toString(), e)
        }

        static fromNumber(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Uint32Array(2);
            return hi.fromString(t.toString(), e)
        }

        static fromString(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Uint32Array(2);
            const n = t.length, r = new hi(e);
            for (let i = 0; i < n;) {
                const e = 8 < n - i ? 8 : n - i,
                    o = new hi(new Uint32Array([Number.parseInt(t.slice(i, i + e), 10), 0])),
                    s = new hi(new Uint32Array([di[e], 0]));
                r.times(s), r.plus(o), i += e
            }
            return r
        }

        static convertArray(t) {
            const e = new Uint32Array(2 * t.length);
            for (let n = -1, r = t.length; ++n < r;) hi.from(t[n], new Uint32Array(e.buffer, e.byteOffset + 2 * n * 4, 2));
            return e
        }

        static multiply(t, e) {
            return new hi(new Uint32Array(t.buffer)).times(e)
        }

        static add(t, e) {
            return new hi(new Uint32Array(t.buffer)).plus(e)
        }
    }

    class pi extends fi {
        negate() {
            return this.buffer[0] = 1 + ~this.buffer[0], this.buffer[1] = ~this.buffer[1], 0 == this.buffer[0] && ++this.buffer[1], this
        }

        times(t) {
            return this._times(t), this
        }

        plus(t) {
            return this._plus(t), this
        }

        lessThan(t) {
            const e = this.buffer[1] | 0, n = t.buffer[1] | 0;
            return e < n || e === n && this.buffer[0] < t.buffer[0]
        }

        static from(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Uint32Array(2);
            return pi.fromString("string" === typeof t ? t : t.toString(), e)
        }

        static fromNumber(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Uint32Array(2);
            return pi.fromString(t.toString(), e)
        }

        static fromString(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Uint32Array(2);
            const n = t.startsWith("-"), r = t.length, i = new pi(e);
            for (let o = n ? 1 : 0; o < r;) {
                const e = 8 < r - o ? 8 : r - o,
                    n = new pi(new Uint32Array([Number.parseInt(t.slice(o, o + e), 10), 0])),
                    s = new pi(new Uint32Array([di[e], 0]));
                i.times(s), i.plus(n), o += e
            }
            return n ? i.negate() : i
        }

        static convertArray(t) {
            const e = new Uint32Array(2 * t.length);
            for (let n = -1, r = t.length; ++n < r;) pi.from(t[n], new Uint32Array(e.buffer, e.byteOffset + 2 * n * 4, 2));
            return e
        }

        static multiply(t, e) {
            return new pi(new Uint32Array(t.buffer)).times(e)
        }

        static add(t, e) {
            return new pi(new Uint32Array(t.buffer)).plus(e)
        }
    }

    class yi {
        constructor(t) {
            this.buffer = t
        }

        high() {
            return new pi(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2))
        }

        low() {
            return new pi(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset, 2))
        }

        negate() {
            return this.buffer[0] = 1 + ~this.buffer[0], this.buffer[1] = ~this.buffer[1], this.buffer[2] = ~this.buffer[2], this.buffer[3] = ~this.buffer[3], 0 == this.buffer[0] && ++this.buffer[1], 0 == this.buffer[1] && ++this.buffer[2], 0 == this.buffer[2] && ++this.buffer[3], this
        }

        times(t) {
            const e = new hi(new Uint32Array([this.buffer[3], 0])), n = new hi(new Uint32Array([this.buffer[2], 0])),
                r = new hi(new Uint32Array([this.buffer[1], 0])), i = new hi(new Uint32Array([this.buffer[0], 0])),
                o = new hi(new Uint32Array([t.buffer[3], 0])), s = new hi(new Uint32Array([t.buffer[2], 0])),
                a = new hi(new Uint32Array([t.buffer[1], 0])), l = new hi(new Uint32Array([t.buffer[0], 0]));
            let u = hi.multiply(i, l);
            this.buffer[0] = u.low();
            const c = new hi(new Uint32Array([u.high(), 0]));
            u = hi.multiply(r, l), c.plus(u), u = hi.multiply(i, a), c.plus(u), this.buffer[1] = c.low(), this.buffer[3] = c.lessThan(u) ? 1 : 0, this.buffer[2] = c.high();
            return new hi(new Uint32Array(this.buffer.buffer, this.buffer.byteOffset + 8, 2)).plus(hi.multiply(n, l)).plus(hi.multiply(r, a)).plus(hi.multiply(i, s)), this.buffer[3] += hi.multiply(e, l).plus(hi.multiply(n, a)).plus(hi.multiply(r, s)).plus(hi.multiply(i, o)).low(), this
        }

        plus(t) {
            const e = new Uint32Array(4);
            return e[3] = this.buffer[3] + t.buffer[3] >>> 0, e[2] = this.buffer[2] + t.buffer[2] >>> 0, e[1] = this.buffer[1] + t.buffer[1] >>> 0, e[0] = this.buffer[0] + t.buffer[0] >>> 0, e[0] < this.buffer[0] >>> 0 && ++e[1], e[1] < this.buffer[1] >>> 0 && ++e[2], e[2] < this.buffer[2] >>> 0 && ++e[3], this.buffer[3] = e[3], this.buffer[2] = e[2], this.buffer[1] = e[1], this.buffer[0] = e[0], this
        }

        hex() {
            return `${ci(this.buffer[3])} ${ci(this.buffer[2])} ${ci(this.buffer[1])} ${ci(this.buffer[0])}`
        }

        static multiply(t, e) {
            return new yi(new Uint32Array(t.buffer)).times(e)
        }

        static add(t, e) {
            return new yi(new Uint32Array(t.buffer)).plus(e)
        }

        static from(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Uint32Array(4);
            return yi.fromString("string" === typeof t ? t : t.toString(), e)
        }

        static fromNumber(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Uint32Array(4);
            return yi.fromString(t.toString(), e)
        }

        static fromString(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Uint32Array(4);
            const n = t.startsWith("-"), r = t.length, i = new yi(e);
            for (let o = n ? 1 : 0; o < r;) {
                const e = 8 < r - o ? 8 : r - o,
                    n = new yi(new Uint32Array([Number.parseInt(t.slice(o, o + e), 10), 0, 0, 0])),
                    s = new yi(new Uint32Array([di[e], 0, 0, 0]));
                i.times(s), i.plus(n), o += e
            }
            return n ? i.negate() : i
        }

        static convertArray(t) {
            const e = new Uint32Array(4 * t.length);
            for (let n = -1, r = t.length; ++n < r;) yi.from(t[n], new Uint32Array(e.buffer, e.byteOffset + 16 * n, 4));
            return e
        }
    }

    class bi extends re {
        constructor(t, e, n, r) {
            super(), this.nodesIndex = -1, this.buffersIndex = -1, this.bytes = t, this.nodes = e, this.buffers = n, this.dictionaries = r
        }

        visit(t) {
            return super.visit(t instanceof tr ? t.type : t)
        }

        visitNull(t) {
            let {length: e} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
            return Xn({type: t, length: e})
        }

        visitBool(t) {
            let {
                length: e, nullCount: n
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
            return Xn({type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t)})
        }

        visitInt(t) {
            let {
                length: e, nullCount: n
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
            return Xn({type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t)})
        }

        visitFloat(t) {
            let {
                length: e, nullCount: n
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
            return Xn({type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t)})
        }

        visitUtf8(t) {
            let {
                length: e, nullCount: n
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
            return Xn({
                type: t,
                length: e,
                nullCount: n,
                nullBitmap: this.readNullBitmap(t, n),
                valueOffsets: this.readOffsets(t),
                data: this.readData(t)
            })
        }

        visitBinary(t) {
            let {
                length: e, nullCount: n
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
            return Xn({
                type: t,
                length: e,
                nullCount: n,
                nullBitmap: this.readNullBitmap(t, n),
                valueOffsets: this.readOffsets(t),
                data: this.readData(t)
            })
        }

        visitFixedSizeBinary(t) {
            let {
                length: e, nullCount: n
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
            return Xn({type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t)})
        }

        visitDate(t) {
            let {
                length: e, nullCount: n
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
            return Xn({type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t)})
        }

        visitTimestamp(t) {
            let {
                length: e, nullCount: n
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
            return Xn({type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t)})
        }

        visitTime(t) {
            let {
                length: e, nullCount: n
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
            return Xn({type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t)})
        }

        visitDecimal(t) {
            let {
                length: e, nullCount: n
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
            return Xn({type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t)})
        }

        visitList(t) {
            let {
                length: e, nullCount: n
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
            return Xn({
                type: t,
                length: e,
                nullCount: n,
                nullBitmap: this.readNullBitmap(t, n),
                valueOffsets: this.readOffsets(t),
                child: this.visit(t.children[0])
            })
        }

        visitStruct(t) {
            let {
                length: e, nullCount: n
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
            return Xn({
                type: t,
                length: e,
                nullCount: n,
                nullBitmap: this.readNullBitmap(t, n),
                children: this.visitMany(t.children)
            })
        }

        visitUnion(t) {
            return t.mode === i.Sparse ? this.visitSparseUnion(t) : this.visitDenseUnion(t)
        }

        visitDenseUnion(t) {
            let {
                length: e, nullCount: n
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
            return Xn({
                type: t,
                length: e,
                nullCount: n,
                nullBitmap: this.readNullBitmap(t, n),
                typeIds: this.readTypeIds(t),
                valueOffsets: this.readOffsets(t),
                children: this.visitMany(t.children)
            })
        }

        visitSparseUnion(t) {
            let {
                length: e, nullCount: n
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
            return Xn({
                type: t,
                length: e,
                nullCount: n,
                nullBitmap: this.readNullBitmap(t, n),
                typeIds: this.readTypeIds(t),
                children: this.visitMany(t.children)
            })
        }

        visitDictionary(t) {
            let {
                length: e, nullCount: n
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
            return Xn({
                type: t,
                length: e,
                nullCount: n,
                nullBitmap: this.readNullBitmap(t, n),
                data: this.readData(t.indices),
                dictionary: this.readDictionary(t)
            })
        }

        visitInterval(t) {
            let {
                length: e, nullCount: n
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
            return Xn({type: t, length: e, nullCount: n, nullBitmap: this.readNullBitmap(t, n), data: this.readData(t)})
        }

        visitFixedSizeList(t) {
            let {
                length: e, nullCount: n
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
            return Xn({
                type: t,
                length: e,
                nullCount: n,
                nullBitmap: this.readNullBitmap(t, n),
                child: this.visit(t.children[0])
            })
        }

        visitMap(t) {
            let {
                length: e, nullCount: n
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextFieldNode();
            return Xn({
                type: t,
                length: e,
                nullCount: n,
                nullBitmap: this.readNullBitmap(t, n),
                valueOffsets: this.readOffsets(t),
                child: this.visit(t.children[0])
            })
        }

        nextFieldNode() {
            return this.nodes[++this.nodesIndex]
        }

        nextBufferRange() {
            return this.buffers[++this.buffersIndex]
        }

        readNullBitmap(t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.nextBufferRange();
            return e > 0 && this.readData(t, n) || new Uint8Array(0)
        }

        readOffsets(t, e) {
            return this.readData(t, e)
        }

        readTypeIds(t, e) {
            return this.readData(t, e)
        }

        readData(t) {
            let {
                length: e, offset: n
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextBufferRange();
            return this.bytes.subarray(n, n + e)
        }

        readDictionary(t) {
            return this.dictionaries.get(t.id)
        }
    }

    class mi extends bi {
        constructor(t, e, n, r) {
            super(new Uint8Array(0), e, n, r), this.sources = t
        }

        readNullBitmap(t, e) {
            let {offset: n} = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.nextBufferRange();
            return e <= 0 ? new Uint8Array(0) : Cn(this.sources[n])
        }

        readOffsets(t) {
            let {offset: e} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextBufferRange();
            return J(Uint8Array, J(Int32Array, this.sources[e]))
        }

        readTypeIds(t) {
            let {offset: e} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextBufferRange();
            return J(Uint8Array, J(t.ArrayType, this.sources[e]))
        }

        readData(t) {
            let {offset: e} = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.nextBufferRange();
            const {sources: n} = this;
            return Mt.isTimestamp(t) || (Mt.isInt(t) || Mt.isTime(t)) && 64 === t.bitWidth || Mt.isDate(t) && t.unit === s.MILLISECOND ? J(Uint8Array, pi.convertArray(n[e])) : Mt.isDecimal(t) ? J(Uint8Array, yi.convertArray(n[e])) : Mt.isBinary(t) || Mt.isFixedSizeBinary(t) ? function (t) {
                const e = t.join(""), n = new Uint8Array(e.length / 2);
                for (let r = 0; r < e.length; r += 2) n[r >> 1] = Number.parseInt(e.slice(r, r + 2), 16);
                return n
            }(n[e]) : Mt.isBool(t) ? Cn(n[e]) : Mt.isUtf8(t) ? Q(n[e].join("")) : J(Uint8Array, J(t.ArrayType, n[e].map((t => +t))))
        }
    }

    var gi, vi, wi, _i, Si, Ii, xi, ki;
    !function (t) {
        t[t.BUFFER = 0] = "BUFFER"
    }(gi || (gi = {})), function (t) {
        t[t.LZ4_FRAME = 0] = "LZ4_FRAME", t[t.ZSTD = 1] = "ZSTD"
    }(vi || (vi = {}));

    class Ti {
        constructor() {
            this.bb = null, this.bb_pos = 0
        }

        __init(t, e) {
            return this.bb_pos = t, this.bb = e, this
        }

        static getRootAsBodyCompression(t, e) {
            return (e || new Ti).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static getSizePrefixedRootAsBodyCompression(t, e) {
            return t.setPosition(t.position() + 4), (e || new Ti).__init(t.readInt32(t.position()) + t.position(), t)
        }

        codec() {
            const t = this.bb.__offset(this.bb_pos, 4);
            return t ? this.bb.readInt8(this.bb_pos + t) : vi.LZ4_FRAME
        }

        method() {
            const t = this.bb.__offset(this.bb_pos, 6);
            return t ? this.bb.readInt8(this.bb_pos + t) : gi.BUFFER
        }

        static startBodyCompression(t) {
            t.startObject(2)
        }

        static addCodec(t, e) {
            t.addFieldInt8(0, e, vi.LZ4_FRAME)
        }

        static addMethod(t, e) {
            t.addFieldInt8(1, e, gi.BUFFER)
        }

        static endBodyCompression(t) {
            return t.endObject()
        }

        static createBodyCompression(t, e, n) {
            return Ti.startBodyCompression(t), Ti.addCodec(t, e), Ti.addMethod(t, n), Ti.endBodyCompression(t)
        }
    }

    class Ei {
        constructor() {
            this.bb = null, this.bb_pos = 0
        }

        __init(t, e) {
            return this.bb_pos = t, this.bb = e, this
        }

        offset() {
            return this.bb.readInt64(this.bb_pos)
        }

        length() {
            return this.bb.readInt64(this.bb_pos + 8)
        }

        static sizeOf() {
            return 16
        }

        static createBuffer(t, e, n) {
            return t.prep(8, 16), t.writeInt64(n), t.writeInt64(e), t.offset()
        }
    }

    class Ci {
        constructor() {
            this.bb = null, this.bb_pos = 0
        }

        __init(t, e) {
            return this.bb_pos = t, this.bb = e, this
        }

        length() {
            return this.bb.readInt64(this.bb_pos)
        }

        nullCount() {
            return this.bb.readInt64(this.bb_pos + 8)
        }

        static sizeOf() {
            return 16
        }

        static createFieldNode(t, e, n) {
            return t.prep(8, 16), t.writeInt64(n), t.writeInt64(e), t.offset()
        }
    }

    class Oi {
        constructor() {
            this.bb = null, this.bb_pos = 0
        }

        __init(t, e) {
            return this.bb_pos = t, this.bb = e, this
        }

        static getRootAsRecordBatch(t, e) {
            return (e || new Oi).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static getSizePrefixedRootAsRecordBatch(t, e) {
            return t.setPosition(t.position() + 4), (e || new Oi).__init(t.readInt32(t.position()) + t.position(), t)
        }

        length() {
            const t = this.bb.__offset(this.bb_pos, 4);
            return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0)
        }

        nodes(t, e) {
            const n = this.bb.__offset(this.bb_pos, 6);
            return n ? (e || new Ci).__init(this.bb.__vector(this.bb_pos + n) + 16 * t, this.bb) : null
        }

        nodesLength() {
            const t = this.bb.__offset(this.bb_pos, 6);
            return t ? this.bb.__vector_len(this.bb_pos + t) : 0
        }

        buffers(t, e) {
            const n = this.bb.__offset(this.bb_pos, 8);
            return n ? (e || new Ei).__init(this.bb.__vector(this.bb_pos + n) + 16 * t, this.bb) : null
        }

        buffersLength() {
            const t = this.bb.__offset(this.bb_pos, 8);
            return t ? this.bb.__vector_len(this.bb_pos + t) : 0
        }

        compression(t) {
            const e = this.bb.__offset(this.bb_pos, 10);
            return e ? (t || new Ti).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null
        }

        static startRecordBatch(t) {
            t.startObject(4)
        }

        static addLength(t, e) {
            t.addFieldInt64(0, e, t.createLong(0, 0))
        }

        static addNodes(t, e) {
            t.addFieldOffset(1, e, 0)
        }

        static startNodesVector(t, e) {
            t.startVector(16, e, 8)
        }

        static addBuffers(t, e) {
            t.addFieldOffset(2, e, 0)
        }

        static startBuffersVector(t, e) {
            t.startVector(16, e, 8)
        }

        static addCompression(t, e) {
            t.addFieldOffset(3, e, 0)
        }

        static endRecordBatch(t) {
            return t.endObject()
        }
    }

    class Ai {
        constructor() {
            this.bb = null, this.bb_pos = 0
        }

        __init(t, e) {
            return this.bb_pos = t, this.bb = e, this
        }

        static getRootAsDictionaryBatch(t, e) {
            return (e || new Ai).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static getSizePrefixedRootAsDictionaryBatch(t, e) {
            return t.setPosition(t.position() + 4), (e || new Ai).__init(t.readInt32(t.position()) + t.position(), t)
        }

        id() {
            const t = this.bb.__offset(this.bb_pos, 4);
            return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0)
        }

        data(t) {
            const e = this.bb.__offset(this.bb_pos, 6);
            return e ? (t || new Oi).__init(this.bb.__indirect(this.bb_pos + e), this.bb) : null
        }

        isDelta() {
            const t = this.bb.__offset(this.bb_pos, 8);
            return !!t && !!this.bb.readInt8(this.bb_pos + t)
        }

        static startDictionaryBatch(t) {
            t.startObject(3)
        }

        static addId(t, e) {
            t.addFieldInt64(0, e, t.createLong(0, 0))
        }

        static addData(t, e) {
            t.addFieldOffset(1, e, 0)
        }

        static addIsDelta(t, e) {
            t.addFieldInt8(2, +e, 0)
        }

        static endDictionaryBatch(t) {
            return t.endObject()
        }
    }

    !function (t) {
        t[t.HALF = 0] = "HALF", t[t.SINGLE = 1] = "SINGLE", t[t.DOUBLE = 2] = "DOUBLE"
    }(wi || (wi = {}));

    class Di {
        constructor() {
            this.bb = null, this.bb_pos = 0
        }

        __init(t, e) {
            return this.bb_pos = t, this.bb = e, this
        }

        static getRootAsFloatingPoint(t, e) {
            return (e || new Di).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static getSizePrefixedRootAsFloatingPoint(t, e) {
            return t.setPosition(t.position() + 4), (e || new Di).__init(t.readInt32(t.position()) + t.position(), t)
        }

        precision() {
            const t = this.bb.__offset(this.bb_pos, 4);
            return t ? this.bb.readInt16(this.bb_pos + t) : wi.HALF
        }

        static startFloatingPoint(t) {
            t.startObject(1)
        }

        static addPrecision(t, e) {
            t.addFieldInt16(0, e, wi.HALF)
        }

        static endFloatingPoint(t) {
            return t.endObject()
        }

        static createFloatingPoint(t, e) {
            return Di.startFloatingPoint(t), Di.addPrecision(t, e), Di.endFloatingPoint(t)
        }
    }

    class Bi {
        constructor() {
            this.bb = null, this.bb_pos = 0
        }

        __init(t, e) {
            return this.bb_pos = t, this.bb = e, this
        }

        static getRootAsDecimal(t, e) {
            return (e || new Bi).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static getSizePrefixedRootAsDecimal(t, e) {
            return t.setPosition(t.position() + 4), (e || new Bi).__init(t.readInt32(t.position()) + t.position(), t)
        }

        precision() {
            const t = this.bb.__offset(this.bb_pos, 4);
            return t ? this.bb.readInt32(this.bb_pos + t) : 0
        }

        scale() {
            const t = this.bb.__offset(this.bb_pos, 6);
            return t ? this.bb.readInt32(this.bb_pos + t) : 0
        }

        bitWidth() {
            const t = this.bb.__offset(this.bb_pos, 8);
            return t ? this.bb.readInt32(this.bb_pos + t) : 128
        }

        static startDecimal(t) {
            t.startObject(3)
        }

        static addPrecision(t, e) {
            t.addFieldInt32(0, e, 0)
        }

        static addScale(t, e) {
            t.addFieldInt32(1, e, 0)
        }

        static addBitWidth(t, e) {
            t.addFieldInt32(2, e, 128)
        }

        static endDecimal(t) {
            return t.endObject()
        }

        static createDecimal(t, e, n, r) {
            return Bi.startDecimal(t), Bi.addPrecision(t, e), Bi.addScale(t, n), Bi.addBitWidth(t, r), Bi.endDecimal(t)
        }
    }

    !function (t) {
        t[t.DAY = 0] = "DAY", t[t.MILLISECOND = 1] = "MILLISECOND"
    }(_i || (_i = {}));

    class Ni {
        constructor() {
            this.bb = null, this.bb_pos = 0
        }

        __init(t, e) {
            return this.bb_pos = t, this.bb = e, this
        }

        static getRootAsDate(t, e) {
            return (e || new Ni).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static getSizePrefixedRootAsDate(t, e) {
            return t.setPosition(t.position() + 4), (e || new Ni).__init(t.readInt32(t.position()) + t.position(), t)
        }

        unit() {
            const t = this.bb.__offset(this.bb_pos, 4);
            return t ? this.bb.readInt16(this.bb_pos + t) : _i.MILLISECOND
        }

        static startDate(t) {
            t.startObject(1)
        }

        static addUnit(t, e) {
            t.addFieldInt16(0, e, _i.MILLISECOND)
        }

        static endDate(t) {
            return t.endObject()
        }

        static createDate(t, e) {
            return Ni.startDate(t), Ni.addUnit(t, e), Ni.endDate(t)
        }
    }

    !function (t) {
        t[t.SECOND = 0] = "SECOND", t[t.MILLISECOND = 1] = "MILLISECOND", t[t.MICROSECOND = 2] = "MICROSECOND", t[t.NANOSECOND = 3] = "NANOSECOND"
    }(Si || (Si = {}));

    class Mi {
        constructor() {
            this.bb = null, this.bb_pos = 0
        }

        __init(t, e) {
            return this.bb_pos = t, this.bb = e, this
        }

        static getRootAsTime(t, e) {
            return (e || new Mi).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static getSizePrefixedRootAsTime(t, e) {
            return t.setPosition(t.position() + 4), (e || new Mi).__init(t.readInt32(t.position()) + t.position(), t)
        }

        unit() {
            const t = this.bb.__offset(this.bb_pos, 4);
            return t ? this.bb.readInt16(this.bb_pos + t) : Si.MILLISECOND
        }

        bitWidth() {
            const t = this.bb.__offset(this.bb_pos, 6);
            return t ? this.bb.readInt32(this.bb_pos + t) : 32
        }

        static startTime(t) {
            t.startObject(2)
        }

        static addUnit(t, e) {
            t.addFieldInt16(0, e, Si.MILLISECOND)
        }

        static addBitWidth(t, e) {
            t.addFieldInt32(1, e, 32)
        }

        static endTime(t) {
            return t.endObject()
        }

        static createTime(t, e, n) {
            return Mi.startTime(t), Mi.addUnit(t, e), Mi.addBitWidth(t, n), Mi.endTime(t)
        }
    }

    class Fi {
        constructor() {
            this.bb = null, this.bb_pos = 0
        }

        __init(t, e) {
            return this.bb_pos = t, this.bb = e, this
        }

        static getRootAsTimestamp(t, e) {
            return (e || new Fi).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static getSizePrefixedRootAsTimestamp(t, e) {
            return t.setPosition(t.position() + 4), (e || new Fi).__init(t.readInt32(t.position()) + t.position(), t)
        }

        unit() {
            const t = this.bb.__offset(this.bb_pos, 4);
            return t ? this.bb.readInt16(this.bb_pos + t) : Si.SECOND
        }

        timezone(t) {
            const e = this.bb.__offset(this.bb_pos, 6);
            return e ? this.bb.__string(this.bb_pos + e, t) : null
        }

        static startTimestamp(t) {
            t.startObject(2)
        }

        static addUnit(t, e) {
            t.addFieldInt16(0, e, Si.SECOND)
        }

        static addTimezone(t, e) {
            t.addFieldOffset(1, e, 0)
        }

        static endTimestamp(t) {
            return t.endObject()
        }

        static createTimestamp(t, e, n) {
            return Fi.startTimestamp(t), Fi.addUnit(t, e), Fi.addTimezone(t, n), Fi.endTimestamp(t)
        }
    }

    !function (t) {
        t[t.YEAR_MONTH = 0] = "YEAR_MONTH", t[t.DAY_TIME = 1] = "DAY_TIME", t[t.MONTH_DAY_NANO = 2] = "MONTH_DAY_NANO"
    }(Ii || (Ii = {}));

    class Li {
        constructor() {
            this.bb = null, this.bb_pos = 0
        }

        __init(t, e) {
            return this.bb_pos = t, this.bb = e, this
        }

        static getRootAsInterval(t, e) {
            return (e || new Li).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static getSizePrefixedRootAsInterval(t, e) {
            return t.setPosition(t.position() + 4), (e || new Li).__init(t.readInt32(t.position()) + t.position(), t)
        }

        unit() {
            const t = this.bb.__offset(this.bb_pos, 4);
            return t ? this.bb.readInt16(this.bb_pos + t) : Ii.YEAR_MONTH
        }

        static startInterval(t) {
            t.startObject(1)
        }

        static addUnit(t, e) {
            t.addFieldInt16(0, e, Ii.YEAR_MONTH)
        }

        static endInterval(t) {
            return t.endObject()
        }

        static createInterval(t, e) {
            return Li.startInterval(t), Li.addUnit(t, e), Li.endInterval(t)
        }
    }

    !function (t) {
        t[t.Sparse = 0] = "Sparse", t[t.Dense = 1] = "Dense"
    }(xi || (xi = {}));

    class Pi {
        constructor() {
            this.bb = null, this.bb_pos = 0
        }

        __init(t, e) {
            return this.bb_pos = t, this.bb = e, this
        }

        static getRootAsUnion(t, e) {
            return (e || new Pi).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static getSizePrefixedRootAsUnion(t, e) {
            return t.setPosition(t.position() + 4), (e || new Pi).__init(t.readInt32(t.position()) + t.position(), t)
        }

        mode() {
            const t = this.bb.__offset(this.bb_pos, 4);
            return t ? this.bb.readInt16(this.bb_pos + t) : xi.Sparse
        }

        typeIds(t) {
            const e = this.bb.__offset(this.bb_pos, 6);
            return e ? this.bb.readInt32(this.bb.__vector(this.bb_pos + e) + 4 * t) : 0
        }

        typeIdsLength() {
            const t = this.bb.__offset(this.bb_pos, 6);
            return t ? this.bb.__vector_len(this.bb_pos + t) : 0
        }

        typeIdsArray() {
            const t = this.bb.__offset(this.bb_pos, 6);
            return t ? new Int32Array(this.bb.bytes().buffer, this.bb.bytes().byteOffset + this.bb.__vector(this.bb_pos + t), this.bb.__vector_len(this.bb_pos + t)) : null
        }

        static startUnion(t) {
            t.startObject(2)
        }

        static addMode(t, e) {
            t.addFieldInt16(0, e, xi.Sparse)
        }

        static addTypeIds(t, e) {
            t.addFieldOffset(1, e, 0)
        }

        static createTypeIdsVector(t, e) {
            t.startVector(4, e.length, 4);
            for (let n = e.length - 1; n >= 0; n--) t.addInt32(e[n]);
            return t.endVector()
        }

        static startTypeIdsVector(t, e) {
            t.startVector(4, e, 4)
        }

        static endUnion(t) {
            return t.endObject()
        }

        static createUnion(t, e, n) {
            return Pi.startUnion(t), Pi.addMode(t, e), Pi.addTypeIds(t, n), Pi.endUnion(t)
        }
    }

    class Ri {
        constructor() {
            this.bb = null, this.bb_pos = 0
        }

        __init(t, e) {
            return this.bb_pos = t, this.bb = e, this
        }

        static getRootAsFixedSizeBinary(t, e) {
            return (e || new Ri).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static getSizePrefixedRootAsFixedSizeBinary(t, e) {
            return t.setPosition(t.position() + 4), (e || new Ri).__init(t.readInt32(t.position()) + t.position(), t)
        }

        byteWidth() {
            const t = this.bb.__offset(this.bb_pos, 4);
            return t ? this.bb.readInt32(this.bb_pos + t) : 0
        }

        static startFixedSizeBinary(t) {
            t.startObject(1)
        }

        static addByteWidth(t, e) {
            t.addFieldInt32(0, e, 0)
        }

        static endFixedSizeBinary(t) {
            return t.endObject()
        }

        static createFixedSizeBinary(t, e) {
            return Ri.startFixedSizeBinary(t), Ri.addByteWidth(t, e), Ri.endFixedSizeBinary(t)
        }
    }

    class Ui {
        constructor() {
            this.bb = null, this.bb_pos = 0
        }

        __init(t, e) {
            return this.bb_pos = t, this.bb = e, this
        }

        static getRootAsFixedSizeList(t, e) {
            return (e || new Ui).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static getSizePrefixedRootAsFixedSizeList(t, e) {
            return t.setPosition(t.position() + 4), (e || new Ui).__init(t.readInt32(t.position()) + t.position(), t)
        }

        listSize() {
            const t = this.bb.__offset(this.bb_pos, 4);
            return t ? this.bb.readInt32(this.bb_pos + t) : 0
        }

        static startFixedSizeList(t) {
            t.startObject(1)
        }

        static addListSize(t, e) {
            t.addFieldInt32(0, e, 0)
        }

        static endFixedSizeList(t) {
            return t.endObject()
        }

        static createFixedSizeList(t, e) {
            return Ui.startFixedSizeList(t), Ui.addListSize(t, e), Ui.endFixedSizeList(t)
        }
    }

    class zi {
        constructor() {
            this.bb = null, this.bb_pos = 0
        }

        __init(t, e) {
            return this.bb_pos = t, this.bb = e, this
        }

        static getRootAsMap(t, e) {
            return (e || new zi).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static getSizePrefixedRootAsMap(t, e) {
            return t.setPosition(t.position() + 4), (e || new zi).__init(t.readInt32(t.position()) + t.position(), t)
        }

        keysSorted() {
            const t = this.bb.__offset(this.bb_pos, 4);
            return !!t && !!this.bb.readInt8(this.bb_pos + t)
        }

        static startMap(t) {
            t.startObject(1)
        }

        static addKeysSorted(t, e) {
            t.addFieldInt8(0, +e, 0)
        }

        static endMap(t) {
            return t.endObject()
        }

        static createMap(t, e) {
            return zi.startMap(t), zi.addKeysSorted(t, e), zi.endMap(t)
        }
    }

    !function (t) {
        t[t.NONE = 0] = "NONE", t[t.Schema = 1] = "Schema", t[t.DictionaryBatch = 2] = "DictionaryBatch", t[t.RecordBatch = 3] = "RecordBatch", t[t.Tensor = 4] = "Tensor", t[t.SparseTensor = 5] = "SparseTensor"
    }(ki || (ki = {}));

    class ji {
        constructor() {
            this.bb = null, this.bb_pos = 0
        }

        __init(t, e) {
            return this.bb_pos = t, this.bb = e, this
        }

        static getRootAsMessage(t, e) {
            return (e || new ji).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static getSizePrefixedRootAsMessage(t, e) {
            return t.setPosition(t.position() + 4), (e || new ji).__init(t.readInt32(t.position()) + t.position(), t)
        }

        version() {
            const t = this.bb.__offset(this.bb_pos, 4);
            return t ? this.bb.readInt16(this.bb_pos + t) : Dr.V1
        }

        headerType() {
            const t = this.bb.__offset(this.bb_pos, 6);
            return t ? this.bb.readUint8(this.bb_pos + t) : ki.NONE
        }

        header(t) {
            const e = this.bb.__offset(this.bb_pos, 8);
            return e ? this.bb.__union(t, this.bb_pos + e) : null
        }

        bodyLength() {
            const t = this.bb.__offset(this.bb_pos, 10);
            return t ? this.bb.readInt64(this.bb_pos + t) : this.bb.createLong(0, 0)
        }

        customMetadata(t, e) {
            const n = this.bb.__offset(this.bb_pos, 12);
            return n ? (e || new Pr).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos + n) + 4 * t), this.bb) : null
        }

        customMetadataLength() {
            const t = this.bb.__offset(this.bb_pos, 12);
            return t ? this.bb.__vector_len(this.bb_pos + t) : 0
        }

        static startMessage(t) {
            t.startObject(5)
        }

        static addVersion(t, e) {
            t.addFieldInt16(0, e, Dr.V1)
        }

        static addHeaderType(t, e) {
            t.addFieldInt8(1, e, ki.NONE)
        }

        static addHeader(t, e) {
            t.addFieldOffset(2, e, 0)
        }

        static addBodyLength(t, e) {
            t.addFieldInt64(3, e, t.createLong(0, 0))
        }

        static addCustomMetadata(t, e) {
            t.addFieldOffset(4, e, 0)
        }

        static createCustomMetadataVector(t, e) {
            t.startVector(4, e.length, 4);
            for (let n = e.length - 1; n >= 0; n--) t.addOffset(e[n]);
            return t.endVector()
        }

        static startCustomMetadataVector(t, e) {
            t.startVector(4, e, 4)
        }

        static endMessage(t) {
            return t.endObject()
        }

        static finishMessageBuffer(t, e) {
            t.finish(e)
        }

        static finishSizePrefixedMessageBuffer(t, e) {
            t.finish(e, void 0, !0)
        }

        static createMessage(t, e, n, r, i, o) {
            return ji.startMessage(t), ji.addVersion(t, e), ji.addHeaderType(t, n), ji.addHeader(t, r), ji.addBodyLength(t, i), ji.addCustomMetadata(t, o), ji.endMessage(t)
        }
    }

    class Vi {
        constructor() {
            this.bb = null, this.bb_pos = 0
        }

        __init(t, e) {
            return this.bb_pos = t, this.bb = e, this
        }

        static getRootAsNull(t, e) {
            return (e || new Vi).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static getSizePrefixedRootAsNull(t, e) {
            return t.setPosition(t.position() + 4), (e || new Vi).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static startNull(t) {
            t.startObject(0)
        }

        static endNull(t) {
            return t.endObject()
        }

        static createNull(t) {
            return Vi.startNull(t), Vi.endNull(t)
        }
    }

    class $i {
        constructor() {
            this.bb = null, this.bb_pos = 0
        }

        __init(t, e) {
            return this.bb_pos = t, this.bb = e, this
        }

        static getRootAsBinary(t, e) {
            return (e || new $i).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static getSizePrefixedRootAsBinary(t, e) {
            return t.setPosition(t.position() + 4), (e || new $i).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static startBinary(t) {
            t.startObject(0)
        }

        static endBinary(t) {
            return t.endObject()
        }

        static createBinary(t) {
            return $i.startBinary(t), $i.endBinary(t)
        }
    }

    class Wi {
        constructor() {
            this.bb = null, this.bb_pos = 0
        }

        __init(t, e) {
            return this.bb_pos = t, this.bb = e, this
        }

        static getRootAsBool(t, e) {
            return (e || new Wi).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static getSizePrefixedRootAsBool(t, e) {
            return t.setPosition(t.position() + 4), (e || new Wi).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static startBool(t) {
            t.startObject(0)
        }

        static endBool(t) {
            return t.endObject()
        }

        static createBool(t) {
            return Wi.startBool(t), Wi.endBool(t)
        }
    }

    class Hi {
        constructor() {
            this.bb = null, this.bb_pos = 0
        }

        __init(t, e) {
            return this.bb_pos = t, this.bb = e, this
        }

        static getRootAsUtf8(t, e) {
            return (e || new Hi).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static getSizePrefixedRootAsUtf8(t, e) {
            return t.setPosition(t.position() + 4), (e || new Hi).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static startUtf8(t) {
            t.startObject(0)
        }

        static endUtf8(t) {
            return t.endObject()
        }

        static createUtf8(t) {
            return Hi.startUtf8(t), Hi.endUtf8(t)
        }
    }

    class Yi {
        constructor() {
            this.bb = null, this.bb_pos = 0
        }

        __init(t, e) {
            return this.bb_pos = t, this.bb = e, this
        }

        static getRootAsList(t, e) {
            return (e || new Yi).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static getSizePrefixedRootAsList(t, e) {
            return t.setPosition(t.position() + 4), (e || new Yi).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static startList(t) {
            t.startObject(0)
        }

        static endList(t) {
            return t.endObject()
        }

        static createList(t) {
            return Yi.startList(t), Yi.endList(t)
        }
    }

    class Qi {
        constructor() {
            this.bb = null, this.bb_pos = 0
        }

        __init(t, e) {
            return this.bb_pos = t, this.bb = e, this
        }

        static getRootAsStruct_(t, e) {
            return (e || new Qi).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static getSizePrefixedRootAsStruct_(t, e) {
            return t.setPosition(t.position() + 4), (e || new Qi).__init(t.readInt32(t.position()) + t.position(), t)
        }

        static startStruct_(t) {
            t.startObject(0)
        }

        static endStruct_(t) {
            return t.endObject()
        }

        static createStruct_(t) {
            return Qi.startStruct_(t), Qi.endStruct_(t)
        }
    }

    var Ki = Or;
    const qi = new class extends re {
        visit(t, e) {
            return null == t || null == e ? void 0 : super.visit(t, e)
        }

        visitNull(t, e) {
            return Vi.startNull(e), Vi.endNull(e)
        }

        visitInt(t, e) {
            return Rr.startInt(e), Rr.addBitWidth(e, t.bitWidth), Rr.addIsSigned(e, t.isSigned), Rr.endInt(e)
        }

        visitFloat(t, e) {
            return Di.startFloatingPoint(e), Di.addPrecision(e, t.precision), Di.endFloatingPoint(e)
        }

        visitBinary(t, e) {
            return $i.startBinary(e), $i.endBinary(e)
        }

        visitBool(t, e) {
            return Wi.startBool(e), Wi.endBool(e)
        }

        visitUtf8(t, e) {
            return Hi.startUtf8(e), Hi.endUtf8(e)
        }

        visitDecimal(t, e) {
            return Bi.startDecimal(e), Bi.addScale(e, t.scale), Bi.addPrecision(e, t.precision), Bi.addBitWidth(e, t.bitWidth), Bi.endDecimal(e)
        }

        visitDate(t, e) {
            return Ni.startDate(e), Ni.addUnit(e, t.unit), Ni.endDate(e)
        }

        visitTime(t, e) {
            return Mi.startTime(e), Mi.addUnit(e, t.unit), Mi.addBitWidth(e, t.bitWidth), Mi.endTime(e)
        }

        visitTimestamp(t, e) {
            const n = t.timezone && e.createString(t.timezone) || void 0;
            return Fi.startTimestamp(e), Fi.addUnit(e, t.unit), void 0 !== n && Fi.addTimezone(e, n), Fi.endTimestamp(e)
        }

        visitInterval(t, e) {
            return Li.startInterval(e), Li.addUnit(e, t.unit), Li.endInterval(e)
        }

        visitList(t, e) {
            return Yi.startList(e), Yi.endList(e)
        }

        visitStruct(t, e) {
            return Qi.startStruct_(e), Qi.endStruct_(e)
        }

        visitUnion(t, e) {
            Pi.startTypeIdsVector(e, t.typeIds.length);
            const n = Pi.createTypeIdsVector(e, t.typeIds);
            return Pi.startUnion(e), Pi.addMode(e, t.mode), Pi.addTypeIds(e, n), Pi.endUnion(e)
        }

        visitDictionary(t, e) {
            const n = this.visit(t.indices, e);
            return Ur.startDictionaryEncoding(e), Ur.addId(e, new Ki(t.id, 0)), Ur.addIsOrdered(e, t.isOrdered), void 0 !== n && Ur.addIndexType(e, n), Ur.endDictionaryEncoding(e)
        }

        visitFixedSizeBinary(t, e) {
            return Ri.startFixedSizeBinary(e), Ri.addByteWidth(e, t.byteWidth), Ri.endFixedSizeBinary(e)
        }

        visitFixedSizeList(t, e) {
            return Ui.startFixedSizeList(e), Ui.addListSize(e, t.listSize), Ui.endFixedSizeList(e)
        }

        visitMap(t, e) {
            return zi.startMap(e), zi.addKeysSorted(e, t.keysSorted), zi.endMap(e)
        }
    };

    function Gi(t) {
        return new ao(t.count, Xi(t.columns), Zi(t.columns))
    }

    function Ji(t, e) {
        return (t.children || []).filter(Boolean).map((t => tr.fromJSON(t, e)))
    }

    function Xi(t) {
        return (t || []).reduce(((t, e) => {
            return [...t, new co(e.count, (n = e.VALIDITY, (n || []).reduce(((t, e) => t + +(0 === e)), 0))), ...Xi(e.children)];
            var n
        }), [])
    }

    function Zi(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
        for (let n = -1, r = (t || []).length; ++n < r;) {
            const r = t[n];
            r.VALIDITY && e.push(new uo(e.length, r.VALIDITY.length)), r.TYPE && e.push(new uo(e.length, r.TYPE.length)), r.OFFSET && e.push(new uo(e.length, r.OFFSET.length)), r.DATA && e.push(new uo(e.length, r.DATA.length)), e = Zi(r.children, e)
        }
        return e
    }

    function to(t) {
        return new Map(Object.entries(t || {}))
    }

    function eo(t) {
        return new Lt(t.isSigned, t.bitWidth)
    }

    function no(t, e) {
        const n = t.type.name;
        switch (n) {
            case"NONE":
            case"null":
                return new Ft;
            case"binary":
                return new Ut;
            case"utf8":
                return new zt;
            case"bool":
                return new jt;
            case"list":
                return new Qt((e || [])[0]);
            case"struct":
            case"struct_":
                return new Kt(e || [])
        }
        switch (n) {
            case"int": {
                const e = t.type;
                return new Lt(e.isSigned, e.bitWidth)
            }
            case"floatingpoint": {
                const e = t.type;
                return new Rt(o[e.precision])
            }
            case"decimal": {
                const e = t.type;
                return new Vt(e.scale, e.precision, e.bitWidth)
            }
            case"date": {
                const e = t.type;
                return new $t(s[e.unit])
            }
            case"time": {
                const e = t.type;
                return new Wt(a[e.unit], e.bitWidth)
            }
            case"timestamp": {
                const e = t.type;
                return new Ht(a[e.unit], e.timezone)
            }
            case"interval": {
                const e = t.type;
                return new Yt(l[e.unit])
            }
            case"union": {
                const n = t.type;
                return new qt(i[n.mode], n.typeIds || [], e || [])
            }
            case"fixedsizebinary": {
                const e = t.type;
                return new Gt(e.byteWidth)
            }
            case"fixedsizelist": {
                const n = t.type;
                return new Jt(n.listSize, (e || [])[0])
            }
            case"map": {
                const n = t.type;
                return new Xt((e || [])[0], n.keysSorted)
            }
        }
        throw new Error(`Unrecognized type: "${n}"`)
    }

    var ro = Or, io = Lr, oo = Fr;

    class so {
        constructor(t, e, n, r) {
            this._version = e, this._headerType = n, this.body = new Uint8Array(0), r && (this._createHeader = () => r), this._bodyLength = "number" === typeof t ? t : t.low
        }

        static fromJSON(t, e) {
            const n = new so(0, r.V4, e);
            return n._createHeader = function (t, e) {
                return () => {
                    switch (e) {
                        case u.Schema:
                            return Zn.fromJSON(t);
                        case u.RecordBatch:
                            return ao.fromJSON(t);
                        case u.DictionaryBatch:
                            return lo.fromJSON(t)
                    }
                    throw new Error(`Unrecognized Message type: { name: ${u[e]}, type: ${e} }`)
                }
            }(t, e), n
        }

        static decode(t) {
            t = new oo(Z(t));
            const e = ji.getRootAsMessage(t), n = e.bodyLength(), r = e.version(), i = e.headerType(),
                o = new so(n, r, i);
            return o._createHeader = function (t, e) {
                return () => {
                    switch (e) {
                        case u.Schema:
                            return Zn.decode(t.header(new jr));
                        case u.RecordBatch:
                            return ao.decode(t.header(new Oi), t.version());
                        case u.DictionaryBatch:
                            return lo.decode(t.header(new Ai), t.version())
                    }
                    throw new Error(`Unrecognized Message type: { name: ${u[e]}, type: ${e} }`)
                }
            }(e, i), o
        }

        static encode(t) {
            const e = new io;
            let n = -1;
            return t.isSchema() ? n = Zn.encode(e, t.header()) : t.isRecordBatch() ? n = ao.encode(e, t.header()) : t.isDictionaryBatch() && (n = lo.encode(e, t.header())), ji.startMessage(e), ji.addVersion(e, r.V4), ji.addHeader(e, n), ji.addHeaderType(e, t.headerType), ji.addBodyLength(e, new ro(t.bodyLength, 0)), ji.finishMessageBuffer(e, ji.endMessage(e)), e.asUint8Array()
        }

        static from(t) {
            let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            if (t instanceof Zn) return new so(0, r.V4, u.Schema, t);
            if (t instanceof ao) return new so(e, r.V4, u.RecordBatch, t);
            if (t instanceof lo) return new so(e, r.V4, u.DictionaryBatch, t);
            throw new Error(`Unrecognized Message header: ${t}`)
        }

        get type() {
            return this.headerType
        }

        get version() {
            return this._version
        }

        get headerType() {
            return this._headerType
        }

        get bodyLength() {
            return this._bodyLength
        }

        header() {
            return this._createHeader()
        }

        isSchema() {
            return this.headerType === u.Schema
        }

        isRecordBatch() {
            return this.headerType === u.RecordBatch
        }

        isDictionaryBatch() {
            return this.headerType === u.DictionaryBatch
        }
    }

    class ao {
        constructor(t, e, n) {
            this._nodes = e, this._buffers = n, this._length = "number" === typeof t ? t : t.low
        }

        get nodes() {
            return this._nodes
        }

        get length() {
            return this._length
        }

        get buffers() {
            return this._buffers
        }
    }

    class lo {
        constructor(t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._data = t, this._isDelta = n, this._id = "number" === typeof e ? e : e.low
        }

        get id() {
            return this._id
        }

        get data() {
            return this._data
        }

        get isDelta() {
            return this._isDelta
        }

        get length() {
            return this.data.length
        }

        get nodes() {
            return this.data.nodes
        }

        get buffers() {
            return this.data.buffers
        }
    }

    class uo {
        constructor(t, e) {
            this.offset = "number" === typeof t ? t : t.low, this.length = "number" === typeof e ? e : e.low
        }
    }

    class co {
        constructor(t, e) {
            this.length = "number" === typeof t ? t : t.low, this.nullCount = "number" === typeof e ? e : e.low
        }
    }

    function fo(t, e) {
        const n = [];
        for (let r, i = -1, o = -1, s = t.childrenLength(); ++i < s;) (r = t.children(i)) && (n[++o] = tr.decode(r, e));
        return n
    }

    function ho(t) {
        const e = new Map;
        if (t) for (let n, r, i = -1, o = Math.trunc(t.customMetadataLength()); ++i < o;) (n = t.customMetadata(i)) && null != (r = n.key()) && e.set(r, n.value());
        return e
    }

    function po(t) {
        return new Lt(t.isSigned(), t.bitWidth())
    }

    function yo(t, e) {
        const n = t.typeType();
        switch (n) {
            case Mr.NONE:
            case Mr.Null:
                return new Ft;
            case Mr.Binary:
                return new Ut;
            case Mr.Utf8:
                return new zt;
            case Mr.Bool:
                return new jt;
            case Mr.List:
                return new Qt((e || [])[0]);
            case Mr.Struct_:
                return new Kt(e || [])
        }
        switch (n) {
            case Mr.Int: {
                const e = t.type(new Rr);
                return new Lt(e.isSigned(), e.bitWidth())
            }
            case Mr.FloatingPoint: {
                const e = t.type(new Di);
                return new Rt(e.precision())
            }
            case Mr.Decimal: {
                const e = t.type(new Bi);
                return new Vt(e.scale(), e.precision(), e.bitWidth())
            }
            case Mr.Date: {
                const e = t.type(new Ni);
                return new $t(e.unit())
            }
            case Mr.Time: {
                const e = t.type(new Mi);
                return new Wt(e.unit(), e.bitWidth())
            }
            case Mr.Timestamp: {
                const e = t.type(new Fi);
                return new Ht(e.unit(), e.timezone())
            }
            case Mr.Interval: {
                const e = t.type(new Li);
                return new Yt(e.unit())
            }
            case Mr.Union: {
                const n = t.type(new Pi);
                return new qt(n.mode(), n.typeIdsArray() || [], e || [])
            }
            case Mr.FixedSizeBinary: {
                const e = t.type(new Ri);
                return new Gt(e.byteWidth())
            }
            case Mr.FixedSizeList: {
                const n = t.type(new Ui);
                return new Jt(n.listSize(), (e || [])[0])
            }
            case Mr.Map: {
                const n = t.type(new zi);
                return new Xt((e || [])[0], n.keysSorted())
            }
        }
        throw new Error(`Unrecognized type: "${Mr[n]}" (${n})`)
    }

    tr.encode = function (t, e) {
        let n = -1, r = -1, i = -1;
        const o = e.type;
        let s = e.typeId;
        Mt.isDictionary(o) ? (s = o.dictionary.typeId, i = qi.visit(o, t), r = qi.visit(o.dictionary, t)) : r = qi.visit(o, t);
        const a = (o.children || []).map((e => tr.encode(t, e))), l = zr.createChildrenVector(t, a),
            u = e.metadata && e.metadata.size > 0 ? zr.createCustomMetadataVector(t, [...e.metadata].map((e => {
                let [n, r] = e;
                const i = t.createString(`${n}`), o = t.createString(`${r}`);
                return Pr.startKeyValue(t), Pr.addKey(t, i), Pr.addValue(t, o), Pr.endKeyValue(t)
            }))) : -1;
        e.name && (n = t.createString(e.name));
        zr.startField(t), zr.addType(t, r), zr.addTypeType(t, s), zr.addChildren(t, l), zr.addNullable(t, !!e.nullable), -1 !== n && zr.addName(t, n);
        -1 !== i && zr.addDictionary(t, i);
        -1 !== u && zr.addCustomMetadata(t, u);
        return zr.endField(t)
    }, tr.decode = function (t, e) {
        let n, r, i, o, s, a;
        e && (a = t.dictionary()) ? e.has(n = a.id().low) ? (o = (o = a.indexType()) ? po(o) : new Pt, s = new ee(e.get(n), o, n, a.isOrdered()), r = new tr(t.name(), s, t.nullable(), ho(t))) : (o = (o = a.indexType()) ? po(o) : new Pt, e.set(n, i = yo(t, fo(t, e))), s = new ee(i, o, n, a.isOrdered()), r = new tr(t.name(), s, t.nullable(), ho(t))) : (i = yo(t, fo(t, e)), r = new tr(t.name(), i, t.nullable(), ho(t)));
        return r || null
    }, tr.fromJSON = function (t, e) {
        let n, r, i, o, s, a;
        return e && (o = t.dictionary) ? e.has(n = o.id) ? (r = (r = o.indexType) ? eo(r) : new Pt, a = new ee(e.get(n), r, n, o.isOrdered), i = new tr(t.name, a, t.nullable, to(t.customMetadata))) : (r = (r = o.indexType) ? eo(r) : new Pt, e.set(n, s = no(t, Ji(t, e))), a = new ee(s, r, n, o.isOrdered), i = new tr(t.name, a, t.nullable, to(t.customMetadata))) : (s = no(t, Ji(t, e)), i = new tr(t.name, s, t.nullable, to(t.customMetadata))), i || null
    }, Zn.encode = function (t, e) {
        const n = e.fields.map((e => tr.encode(t, e)));
        jr.startFieldsVector(t, n.length);
        const r = jr.createFieldsVector(t, n),
            i = e.metadata && e.metadata.size > 0 ? jr.createCustomMetadataVector(t, [...e.metadata].map((e => {
                let [n, r] = e;
                const i = t.createString(`${n}`), o = t.createString(`${r}`);
                return Pr.startKeyValue(t), Pr.addKey(t, i), Pr.addValue(t, o), Pr.endKeyValue(t)
            }))) : -1;
        jr.startSchema(t), jr.addFields(t, r), jr.addEndianness(t, bo ? Br.Little : Br.Big), -1 !== i && jr.addCustomMetadata(t, i);
        return jr.endSchema(t)
    }, Zn.decode = function (t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        const n = function (t, e) {
            const n = [];
            for (let r, i = -1, o = -1, s = t.fieldsLength(); ++i < s;) (r = t.fields(i)) && (n[++o] = tr.decode(r, e));
            return n
        }(t, e);
        return new Zn(n, ho(t), e)
    }, Zn.fromJSON = function (t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Map;
        return new Zn(function (t, e) {
            return (t.fields || []).filter(Boolean).map((t => tr.fromJSON(t, e)))
        }(t, e), to(t.customMetadata), e)
    }, ao.encode = function (t, e) {
        const n = e.nodes || [], r = e.buffers || [];
        Oi.startNodesVector(t, n.length);
        for (const s of n.slice().reverse()) co.encode(t, s);
        const i = t.endVector();
        Oi.startBuffersVector(t, r.length);
        for (const s of r.slice().reverse()) uo.encode(t, s);
        const o = t.endVector();
        return Oi.startRecordBatch(t), Oi.addLength(t, new ro(e.length, 0)), Oi.addNodes(t, i), Oi.addBuffers(t, o), Oi.endRecordBatch(t)
    }, ao.decode = function (t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.V4;
        if (null !== t.compression()) throw new Error("Record batch compression not implemented");
        return new ao(t.length(), function (t) {
            const e = [];
            for (let n, r = -1, i = -1, o = t.nodesLength(); ++r < o;) (n = t.nodes(r)) && (e[++i] = co.decode(n));
            return e
        }(t), function (t, e) {
            const n = [];
            for (let i, o = -1, s = -1, a = t.buffersLength(); ++o < a;) (i = t.buffers(o)) && (e < r.V4 && (i.bb_pos += 8 * (o + 1)), n[++s] = uo.decode(i));
            return n
        }(t, e))
    }, ao.fromJSON = Gi, lo.encode = function (t, e) {
        const n = ao.encode(t, e.data);
        return Ai.startDictionaryBatch(t), Ai.addId(t, new ro(e.id, 0)), Ai.addIsDelta(t, e.isDelta), Ai.addData(t, n), Ai.endDictionaryBatch(t)
    }, lo.decode = function (t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.V4;
        return new lo(ao.decode(t.data(), e), t.id(), t.isDelta())
    }, lo.fromJSON = function (t) {
        return new lo(Gi(t.data), t.id, t.isDelta)
    }, co.encode = function (t, e) {
        return Ci.createFieldNode(t, new ro(e.length, 0), new ro(e.nullCount, 0))
    }, co.decode = function (t) {
        return new co(t.length(), t.nullCount())
    }, uo.encode = function (t, e) {
        return Ei.createBuffer(t, new ro(e.offset, 0), new ro(e.length, 0))
    }, uo.decode = function (t) {
        return new uo(t.offset(), t.length())
    };
    const bo = (() => {
            const t = new ArrayBuffer(2);
            return new DataView(t).setInt16(0, 256, !0), 256 === new Int16Array(t)[0]
        })(), mo = t => `Expected ${u[t]} Message in stream, but was null or length 0.`,
        go = t => `Header pointer of flatbuffer-encoded ${u[t]} Message is null or length 0.`,
        vo = (t, e) => `Expected to read ${t} metadata bytes, but only read ${e}.`,
        wo = (t, e) => `Expected to read ${t} bytes for message body, but only read ${e}.`;

    class _o {
        constructor(t) {
            this.source = t instanceof ii ? t : new ii(t)
        }

        [Symbol.iterator]() {
            return this
        }

        next() {
            let t;
            return (t = this.readMetadataLength()).done || -1 === t.value && (t = this.readMetadataLength()).done || (t = this.readMetadata(t.value)).done ? Zr : t
        }

        throw(t) {
            return this.source.throw(t)
        }

        return(t) {
            return this.source.return(t)
        }

        readMessage(t) {
            let e;
            if ((e = this.next()).done) return null;
            if (null != t && e.value.headerType !== t) throw new Error(mo(t));
            return e.value
        }

        readMessageBody(t) {
            if (t <= 0) return new Uint8Array(0);
            const e = Z(this.source.read(t));
            if (e.byteLength < t) throw new Error(wo(t, e.byteLength));
            return e.byteOffset % 8 === 0 && e.byteOffset + e.byteLength <= e.buffer.byteLength ? e : e.slice()
        }

        readSchema() {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            const e = u.Schema, n = this.readMessage(e), r = null === n || void 0 === n ? void 0 : n.header();
            if (t && !r) throw new Error(go(e));
            return r
        }

        readMetadataLength() {
            const t = this.source.read(xo), e = t && new Fr(t),
                n = (null === e || void 0 === e ? void 0 : e.readInt32(0)) || 0;
            return {done: 0 === n, value: n}
        }

        readMetadata(t) {
            const e = this.source.read(t);
            if (!e) return Zr;
            if (e.byteLength < t) throw new Error(vo(t, e.byteLength));
            return {done: !1, value: so.decode(e)}
        }
    }

    class So {
        constructor(t, e) {
            this.source = t instanceof oi ? t : B(t) ? new ui(t, e) : new oi(t)
        }

        [Symbol.asyncIterator]() {
            return this
        }

        next() {
            return R(this, void 0, void 0, (function* () {
                let t;
                return (t = yield this.readMetadataLength()).done || -1 === t.value && (t = yield this.readMetadataLength()).done || (t = yield this.readMetadata(t.value)).done ? Zr : t
            }))
        }

        throw(t) {
            return R(this, void 0, void 0, (function* () {
                return yield this.source.throw(t)
            }))
        }

        return(t) {
            return R(this, void 0, void 0, (function* () {
                return yield this.source.return(t)
            }))
        }

        readMessage(t) {
            return R(this, void 0, void 0, (function* () {
                let e;
                if ((e = yield this.next()).done) return null;
                if (null != t && e.value.headerType !== t) throw new Error(mo(t));
                return e.value
            }))
        }

        readMessageBody(t) {
            return R(this, void 0, void 0, (function* () {
                if (t <= 0) return new Uint8Array(0);
                const e = Z(yield this.source.read(t));
                if (e.byteLength < t) throw new Error(wo(t, e.byteLength));
                return e.byteOffset % 8 === 0 && e.byteOffset + e.byteLength <= e.buffer.byteLength ? e : e.slice()
            }))
        }

        readSchema() {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return R(this, void 0, void 0, (function* () {
                const e = u.Schema, n = yield this.readMessage(e), r = null === n || void 0 === n ? void 0 : n.header();
                if (t && !r) throw new Error(go(e));
                return r
            }))
        }

        readMetadataLength() {
            return R(this, void 0, void 0, (function* () {
                const t = yield this.source.read(xo), e = t && new Fr(t),
                    n = (null === e || void 0 === e ? void 0 : e.readInt32(0)) || 0;
                return {done: 0 === n, value: n}
            }))
        }

        readMetadata(t) {
            return R(this, void 0, void 0, (function* () {
                const e = yield this.source.read(t);
                if (!e) return Zr;
                if (e.byteLength < t) throw new Error(vo(t, e.byteLength));
                return {done: !1, value: so.decode(e)}
            }))
        }
    }

    class Io extends _o {
        constructor(t) {
            super(new Uint8Array(0)), this._schema = !1, this._body = [], this._batchIndex = 0, this._dictionaryIndex = 0, this._json = t instanceof ti ? t : new ti(t)
        }

        next() {
            const {_json: t} = this;
            if (!this._schema) {
                this._schema = !0;
                return {done: !1, value: so.fromJSON(t.schema, u.Schema)}
            }
            if (this._dictionaryIndex < t.dictionaries.length) {
                const e = t.dictionaries[this._dictionaryIndex++];
                this._body = e.data.columns;
                return {done: !1, value: so.fromJSON(e, u.DictionaryBatch)}
            }
            if (this._batchIndex < t.batches.length) {
                const e = t.batches[this._batchIndex++];
                this._body = e.columns;
                return {done: !1, value: so.fromJSON(e, u.RecordBatch)}
            }
            return this._body = [], Zr
        }

        readMessageBody(t) {
            return function t(e) {
                return (e || []).reduce(((e, n) => [...e, ...n.VALIDITY && [n.VALIDITY] || [], ...n.TYPE && [n.TYPE] || [], ...n.OFFSET && [n.OFFSET] || [], ...n.DATA && [n.DATA] || [], ...t(n.children)]), [])
            }(this._body)
        }

        readMessage(t) {
            let e;
            if ((e = this.next()).done) return null;
            if (null != t && e.value.headerType !== t) throw new Error(mo(t));
            return e.value
        }

        readSchema() {
            const t = u.Schema, e = this.readMessage(t), n = null === e || void 0 === e ? void 0 : e.header();
            if (!e || !n) throw new Error(go(t));
            return n
        }
    }

    const xo = 4, ko = "ARROW1", To = new Uint8Array(6);
    for (let Ss = 0; Ss < 6; Ss += 1) To[Ss] = ko.codePointAt(Ss);

    function Eo(t) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        for (let n = -1, r = To.length; ++n < r;) if (To[n] !== t[e + n]) return !1;
        return !0
    }

    const Co = To.length, Oo = Co + xo, Ao = 2 * Co + xo;

    class Do extends ei {
        constructor(t) {
            super(), this._impl = t
        }

        get closed() {
            return this._impl.closed
        }

        get schema() {
            return this._impl.schema
        }

        get autoDestroy() {
            return this._impl.autoDestroy
        }

        get dictionaries() {
            return this._impl.dictionaries
        }

        get numDictionaries() {
            return this._impl.numDictionaries
        }

        get numRecordBatches() {
            return this._impl.numRecordBatches
        }

        get footer() {
            return this._impl.isFile() ? this._impl.footer : null
        }

        isSync() {
            return this._impl.isSync()
        }

        isAsync() {
            return this._impl.isAsync()
        }

        isFile() {
            return this._impl.isFile()
        }

        isStream() {
            return this._impl.isStream()
        }

        next() {
            return this._impl.next()
        }

        throw(t) {
            return this._impl.throw(t)
        }

        return(t) {
            return this._impl.return(t)
        }

        cancel() {
            return this._impl.cancel()
        }

        reset(t) {
            return this._impl.reset(t), this._DOMStream = void 0, this._nodeStream = void 0, this
        }

        open(t) {
            const e = this._impl.open(t);
            return E(e) ? e.then((() => this)) : this
        }

        readRecordBatch(t) {
            return this._impl.isFile() ? this._impl.readRecordBatch(t) : null
        }

        [Symbol.iterator]() {
            return this._impl[Symbol.iterator]()
        }

        [Symbol.asyncIterator]() {
            return this._impl[Symbol.asyncIterator]()
        }

        toDOMStream() {
            return qr.toDOMStream(this.isSync() ? {[Symbol.iterator]: () => this} : {[Symbol.asyncIterator]: () => this})
        }

        toNodeStream() {
            return qr.toNodeStream(this.isSync() ? {[Symbol.iterator]: () => this} : {[Symbol.asyncIterator]: () => this}, {objectMode: !0})
        }

        static throughNode(t) {
            throw new Error('"throughNode" not available in this environment')
        }

        static throughDOM(t, e) {
            throw new Error('"throughDOM" not available in this environment')
        }

        static from(t) {
            return t instanceof Do ? t : A(t) ? function (t) {
                return new Bo(new jo(t))
            }(t) : B(t) ? function (t) {
                return R(this, void 0, void 0, (function* () {
                    const {size: e} = yield t.stat(), n = new ui(t, e);
                    return e >= Ao && Eo(yield n.readAt(0, Co + 7 & -8)) ? new Fo(new zo(n)) : new No(new Ro(n))
                }))
            }(t) : E(t) ? (() => R(this, void 0, void 0, (function* () {
                return yield Do.from(yield t)
            })))() : N(t) || F(t) || L(t) || O(t) ? function (t) {
                return R(this, void 0, void 0, (function* () {
                    const e = yield t.peek(Co + 7 & -8);
                    return e && e.byteLength >= 4 ? Eo(e) ? new Mo(new Uo(yield t.read())) : new No(new Ro(t)) : new No(new Ro(function () {
                        return j(this, arguments, (function* () {
                        }))
                    }()))
                }))
            }(new oi(t)) : function (t) {
                const e = t.peek(Co + 7 & -8);
                return e && e.byteLength >= 4 ? Eo(e) ? new Mo(new Uo(t.read())) : new Bo(new Po(t)) : new Bo(new Po(function* () {
                }()))
            }(new ii(t))
        }

        static readAll(t) {
            return t instanceof Do ? t.isSync() ? $o(t) : Wo(t) : A(t) || ArrayBuffer.isView(t) || C(t) || D(t) ? $o(t) : Wo(t)
        }
    }

    class Bo extends Do {
        constructor(t) {
            super(t), this._impl = t
        }

        readAll() {
            return [...this]
        }

        [Symbol.iterator]() {
            return this._impl[Symbol.iterator]()
        }

        [Symbol.asyncIterator]() {
            return j(this, arguments, (function* () {
                yield z(yield* V($(this[Symbol.iterator]())))
            }))
        }
    }

    class No extends Do {
        constructor(t) {
            super(t), this._impl = t
        }

        readAll() {
            var t, e;
            return R(this, void 0, void 0, (function* () {
                const n = new Array;
                try {
                    for (var r, i = $(this); !(r = yield i.next()).done;) {
                        const t = r.value;
                        n.push(t)
                    }
                } catch (o) {
                    t = {error: o}
                } finally {
                    try {
                        r && !r.done && (e = i.return) && (yield e.call(i))
                    } finally {
                        if (t) throw t.error
                    }
                }
                return n
            }))
        }

        [Symbol.iterator]() {
            throw new Error("AsyncRecordBatchStreamReader is not Iterable")
        }

        [Symbol.asyncIterator]() {
            return this._impl[Symbol.asyncIterator]()
        }
    }

    class Mo extends Bo {
        constructor(t) {
            super(t), this._impl = t
        }
    }

    class Fo extends No {
        constructor(t) {
            super(t), this._impl = t
        }
    }

    class Lo {
        constructor() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : new Map;
            this.closed = !1, this.autoDestroy = !0, this._dictionaryIndex = 0, this._recordBatchIndex = 0, this.dictionaries = t
        }

        get numDictionaries() {
            return this._dictionaryIndex
        }

        get numRecordBatches() {
            return this._recordBatchIndex
        }

        isSync() {
            return !1
        }

        isAsync() {
            return !1
        }

        isFile() {
            return !1
        }

        isStream() {
            return !1
        }

        reset(t) {
            return this._dictionaryIndex = 0, this._recordBatchIndex = 0, this.schema = t, this.dictionaries = new Map, this
        }

        _loadRecordBatch(t, e) {
            const n = this._loadVectors(t, e, this.schema.fields),
                r = Xn({type: new Kt(this.schema.fields), length: t.length, children: n});
            return new mr(this.schema, r)
        }

        _loadDictionaryBatch(t, e) {
            const {id: n, isDelta: r} = t, {dictionaries: i, schema: o} = this, s = i.get(n);
            if (r || !s) {
                const i = o.dictionaries.get(n), a = this._loadVectors(t.data, e, [i]);
                return (s && r ? s.concat(new Kn(a)) : new Kn(a)).memoize()
            }
            return s.memoize()
        }

        _loadVectors(t, e, n) {
            return new bi(e, t.nodes, t.buffers, this.dictionaries).visitMany(n)
        }
    }

    class Po extends Lo {
        constructor(t, e) {
            super(e), this._reader = A(t) ? new Io(this._handle = t) : new _o(this._handle = t)
        }

        isSync() {
            return !0
        }

        isStream() {
            return !0
        }

        [Symbol.iterator]() {
            return this
        }

        cancel() {
            !this.closed && (this.closed = !0) && (this.reset()._reader.return(), this._reader = null, this.dictionaries = null)
        }

        open(t) {
            return this.closed || (this.autoDestroy = Vo(this, t), this.schema || (this.schema = this._reader.readSchema()) || this.cancel()), this
        }

        throw(t) {
            return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.throw(t) : Zr
        }

        return(t) {
            return !this.closed && this.autoDestroy && (this.closed = !0) ? this.reset()._reader.return(t) : Zr
        }

        next() {
            if (this.closed) return Zr;
            let t;
            const {_reader: e} = this;
            for (; t = this._readNextMessageAndValidate();) if (t.isSchema()) this.reset(t.header()); else {
                if (t.isRecordBatch()) {
                    this._recordBatchIndex++;
                    const n = t.header(), r = e.readMessageBody(t.bodyLength);
                    return {done: !1, value: this._loadRecordBatch(n, r)}
                }
                if (t.isDictionaryBatch()) {
                    this._dictionaryIndex++;
                    const n = t.header(), r = e.readMessageBody(t.bodyLength), i = this._loadDictionaryBatch(n, r);
                    this.dictionaries.set(n.id, i)
                }
            }
            return this.schema && 0 === this._recordBatchIndex ? (this._recordBatchIndex++, {
                done: !1, value: new wr(this.schema)
            }) : this.return()
        }

        _readNextMessageAndValidate(t) {
            return this._reader.readMessage(t)
        }
    }

    class Ro extends Lo {
        constructor(t, e) {
            super(e), this._reader = new So(this._handle = t)
        }

        isAsync() {
            return !0
        }

        isStream() {
            return !0
        }

        [Symbol.asyncIterator]() {
            return this
        }

        cancel() {
            return R(this, void 0, void 0, (function* () {
                !this.closed && (this.closed = !0) && (yield this.reset()._reader.return(), this._reader = null, this.dictionaries = null)
            }))
        }

        open(t) {
            return R(this, void 0, void 0, (function* () {
                return this.closed || (this.autoDestroy = Vo(this, t), this.schema || (this.schema = yield this._reader.readSchema()) || (yield this.cancel())), this
            }))
        }

        throw(t) {
            return R(this, void 0, void 0, (function* () {
                return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.throw(t) : Zr
            }))
        }

        return(t) {
            return R(this, void 0, void 0, (function* () {
                return !this.closed && this.autoDestroy && (this.closed = !0) ? yield this.reset()._reader.return(t) : Zr
            }))
        }

        next() {
            return R(this, void 0, void 0, (function* () {
                if (this.closed) return Zr;
                let t;
                const {_reader: e} = this;
                for (; t = yield this._readNextMessageAndValidate();) if (t.isSchema()) yield this.reset(t.header()); else {
                    if (t.isRecordBatch()) {
                        this._recordBatchIndex++;
                        const n = t.header(), r = yield e.readMessageBody(t.bodyLength);
                        return {done: !1, value: this._loadRecordBatch(n, r)}
                    }
                    if (t.isDictionaryBatch()) {
                        this._dictionaryIndex++;
                        const n = t.header(), r = yield e.readMessageBody(t.bodyLength),
                            i = this._loadDictionaryBatch(n, r);
                        this.dictionaries.set(n.id, i)
                    }
                }
                return this.schema && 0 === this._recordBatchIndex ? (this._recordBatchIndex++, {
                    done: !1, value: new wr(this.schema)
                }) : yield this.return()
            }))
        }

        _readNextMessageAndValidate(t) {
            return R(this, void 0, void 0, (function* () {
                return yield this._reader.readMessage(t)
            }))
        }
    }

    class Uo extends Po {
        constructor(t, e) {
            super(t instanceof li ? t : new li(t), e)
        }

        get footer() {
            return this._footer
        }

        get numDictionaries() {
            return this._footer ? this._footer.numDictionaries : 0
        }

        get numRecordBatches() {
            return this._footer ? this._footer.numRecordBatches : 0
        }

        isSync() {
            return !0
        }

        isFile() {
            return !0
        }

        open(t) {
            if (!this.closed && !this._footer) {
                this.schema = (this._footer = this._readFooter()).schema;
                for (const t of this._footer.dictionaryBatches()) t && this._readDictionaryBatch(this._dictionaryIndex++)
            }
            return super.open(t)
        }

        readRecordBatch(t) {
            var e;
            if (this.closed) return null;
            this._footer || this.open();
            const n = null === (e = this._footer) || void 0 === e ? void 0 : e.getRecordBatch(t);
            if (n && this._handle.seek(n.offset)) {
                const t = this._reader.readMessage(u.RecordBatch);
                if (null === t || void 0 === t ? void 0 : t.isRecordBatch()) {
                    const e = t.header(), n = this._reader.readMessageBody(t.bodyLength);
                    return this._loadRecordBatch(e, n)
                }
            }
            return null
        }

        _readDictionaryBatch(t) {
            var e;
            const n = null === (e = this._footer) || void 0 === e ? void 0 : e.getDictionaryBatch(t);
            if (n && this._handle.seek(n.offset)) {
                const t = this._reader.readMessage(u.DictionaryBatch);
                if (null === t || void 0 === t ? void 0 : t.isDictionaryBatch()) {
                    const e = t.header(), n = this._reader.readMessageBody(t.bodyLength),
                        r = this._loadDictionaryBatch(e, n);
                    this.dictionaries.set(e.id, r)
                }
            }
        }

        _readFooter() {
            const {_handle: t} = this, e = t.size - Oo, n = t.readInt32(e), r = t.readAt(e - n, n);
            return Yr.decode(r)
        }

        _readNextMessageAndValidate(t) {
            var e;
            if (this._footer || this.open(), this._footer && this._recordBatchIndex < this.numRecordBatches) {
                const n = null === (e = this._footer) || void 0 === e ? void 0 : e.getRecordBatch(this._recordBatchIndex);
                if (n && this._handle.seek(n.offset)) return this._reader.readMessage(t)
            }
            return null
        }
    }

    class zo extends Ro {
        constructor(t) {
            for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
            const i = "number" !== typeof n[0] ? n.shift() : void 0, o = n[0] instanceof Map ? n.shift() : void 0;
            super(t instanceof ui ? t : new ui(t, i), o)
        }

        get footer() {
            return this._footer
        }

        get numDictionaries() {
            return this._footer ? this._footer.numDictionaries : 0
        }

        get numRecordBatches() {
            return this._footer ? this._footer.numRecordBatches : 0
        }

        isFile() {
            return !0
        }

        isAsync() {
            return !0
        }

        open(t) {
            const e = Object.create(null, {open: {get: () => super.open}});
            return R(this, void 0, void 0, (function* () {
                if (!this.closed && !this._footer) {
                    this.schema = (this._footer = yield this._readFooter()).schema;
                    for (const t of this._footer.dictionaryBatches()) t && (yield this._readDictionaryBatch(this._dictionaryIndex++))
                }
                return yield e.open.call(this, t)
            }))
        }

        readRecordBatch(t) {
            var e;
            return R(this, void 0, void 0, (function* () {
                if (this.closed) return null;
                this._footer || (yield this.open());
                const n = null === (e = this._footer) || void 0 === e ? void 0 : e.getRecordBatch(t);
                if (n && (yield this._handle.seek(n.offset))) {
                    const t = yield this._reader.readMessage(u.RecordBatch);
                    if (null === t || void 0 === t ? void 0 : t.isRecordBatch()) {
                        const e = t.header(), n = yield this._reader.readMessageBody(t.bodyLength);
                        return this._loadRecordBatch(e, n)
                    }
                }
                return null
            }))
        }

        _readDictionaryBatch(t) {
            var e;
            return R(this, void 0, void 0, (function* () {
                const n = null === (e = this._footer) || void 0 === e ? void 0 : e.getDictionaryBatch(t);
                if (n && (yield this._handle.seek(n.offset))) {
                    const t = yield this._reader.readMessage(u.DictionaryBatch);
                    if (null === t || void 0 === t ? void 0 : t.isDictionaryBatch()) {
                        const e = t.header(), n = yield this._reader.readMessageBody(t.bodyLength),
                            r = this._loadDictionaryBatch(e, n);
                        this.dictionaries.set(e.id, r)
                    }
                }
            }))
        }

        _readFooter() {
            return R(this, void 0, void 0, (function* () {
                const {_handle: t} = this;
                t._pending && (yield t._pending);
                const e = t.size - Oo, n = yield t.readInt32(e), r = yield t.readAt(e - n, n);
                return Yr.decode(r)
            }))
        }

        _readNextMessageAndValidate(t) {
            return R(this, void 0, void 0, (function* () {
                if (this._footer || (yield this.open()), this._footer && this._recordBatchIndex < this.numRecordBatches) {
                    const e = this._footer.getRecordBatch(this._recordBatchIndex);
                    if (e && (yield this._handle.seek(e.offset))) return yield this._reader.readMessage(t)
                }
                return null
            }))
        }
    }

    class jo extends Po {
        constructor(t, e) {
            super(t, e)
        }

        _loadVectors(t, e, n) {
            return new mi(e, t.nodes, t.buffers, this.dictionaries).visitMany(n)
        }
    }

    function Vo(t, e) {
        return e && "boolean" === typeof e.autoDestroy ? e.autoDestroy : t.autoDestroy
    }

    function* $o(t) {
        const e = Do.from(t);
        try {
            if (!e.open({autoDestroy: !1}).closed) do {
                yield e
            } while (!e.reset().open().closed)
        } finally {
            e.cancel()
        }
    }

    function Wo(t) {
        return j(this, arguments, (function* () {
            const e = yield z(Do.from(t));
            try {
                if (!(yield z(e.open({autoDestroy: !1}))).closed) do {
                    yield yield z(e)
                } while (!(yield z(e.reset().open())).closed)
            } finally {
                yield z(e.cancel())
            }
        }))
    }

    class Ho extends re {
        constructor() {
            super(), this._byteLength = 0, this._nodes = [], this._buffers = [], this._bufferRegions = []
        }

        static assemble() {
            const t = e => e.flatMap((e => Array.isArray(e) ? t(e) : e instanceof mr ? e.data.children : e.data)),
                e = new Ho;
            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
            return e.visitMany(t(r)), e
        }

        visit(t) {
            if (t instanceof Kn) return this.visitMany(t.data), this;
            const {type: e} = t;
            if (!Mt.isDictionary(e)) {
                const {length: n, nullCount: r} = t;
                if (n > 2147483647) throw new RangeError("Cannot write arrays larger than 2^31 - 1 in length");
                Mt.isNull(e) || Yo.call(this, r <= 0 ? new Uint8Array(0) : En(t.offset, n, t.nullBitmap)), this.nodes.push(new co(n, r))
            }
            return super.visit(t)
        }

        visitNull(t) {
            return this
        }

        visitDictionary(t) {
            return this.visit(t.clone(t.type.indices))
        }

        get nodes() {
            return this._nodes
        }

        get buffers() {
            return this._buffers
        }

        get byteLength() {
            return this._byteLength
        }

        get bufferRegions() {
            return this._bufferRegions
        }
    }

    function Yo(t) {
        const e = t.byteLength + 7 & -8;
        return this.buffers.push(t), this.bufferRegions.push(new uo(this._byteLength, e)), this._byteLength += e, this
    }

    function Qo(t) {
        return Yo.call(this, t.values.subarray(0, t.length * t.stride))
    }

    function Ko(t) {
        const {length: e, values: n, valueOffsets: r} = t, i = r[0], o = r[e], s = Math.min(o - i, n.byteLength - i);
        return Yo.call(this, rt(-r[0], e, r)), Yo.call(this, n.subarray(i, i + s)), this
    }

    function qo(t) {
        const {length: e, valueOffsets: n} = t;
        return n && Yo.call(this, rt(n[0], e, n)), this.visit(t.children[0])
    }

    function Go(t) {
        return this.visitMany(t.type.children.map(((e, n) => t.children[n])).filter(Boolean))[0]
    }

    Ho.prototype.visitBool = function (t) {
        let e;
        return t.nullCount >= t.length ? Yo.call(this, new Uint8Array(0)) : (e = t.values) instanceof Uint8Array ? Yo.call(this, En(t.offset, t.length, e)) : Yo.call(this, Cn(t.values))
    }, Ho.prototype.visitInt = Qo, Ho.prototype.visitFloat = Qo, Ho.prototype.visitUtf8 = Ko, Ho.prototype.visitBinary = Ko, Ho.prototype.visitFixedSizeBinary = Qo, Ho.prototype.visitDate = Qo, Ho.prototype.visitTimestamp = Qo, Ho.prototype.visitTime = Qo, Ho.prototype.visitDecimal = Qo, Ho.prototype.visitList = qo, Ho.prototype.visitStruct = Go, Ho.prototype.visitUnion = function (t) {
        const {type: e, length: n, typeIds: r, valueOffsets: o} = t;
        if (Yo.call(this, r), e.mode === i.Sparse) return Go.call(this, t);
        if (e.mode === i.Dense) {
            if (t.offset <= 0) return Yo.call(this, o), Go.call(this, t);
            {
                const i = r.reduce(((t, e) => Math.max(t, e)), r[0]), s = new Int32Array(i + 1),
                    a = new Int32Array(i + 1).fill(-1), l = new Int32Array(n), u = rt(-o[0], n, o);
                for (let t, e, o = -1; ++o < n;) -1 === (e = a[t = r[o]]) && (e = a[t] = u[t]), l[o] = u[o] - e, ++s[t];
                Yo.call(this, l);
                for (let r, o = -1, c = e.children.length; ++o < c;) if (r = t.children[o]) {
                    const t = e.typeIds[o], i = Math.min(n, s[t]);
                    this.visit(r.slice(a[t], i))
                }
            }
        }
        return this
    }, Ho.prototype.visitInterval = Qo, Ho.prototype.visitFixedSizeList = qo, Ho.prototype.visitMap = qo;

    class Jo extends ei {
        constructor(t) {
            super(), this._position = 0, this._started = !1, this._sink = new ri, this._schema = null, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._dictionaryDeltaOffsets = new Map, T(t) || (t = {
                autoDestroy: !0, writeLegacyIpcFormat: !1
            }), this._autoDestroy = "boolean" !== typeof t.autoDestroy || t.autoDestroy, this._writeLegacyIpcFormat = "boolean" === typeof t.writeLegacyIpcFormat && t.writeLegacyIpcFormat
        }

        static throughNode(t) {
            throw new Error('"throughNode" not available in this environment')
        }

        static throughDOM(t, e) {
            throw new Error('"throughDOM" not available in this environment')
        }

        toString() {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return this._sink.toString(t)
        }

        toUint8Array() {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            return this._sink.toUint8Array(t)
        }

        writeAll(t) {
            return E(t) ? t.then((t => this.writeAll(t))) : O(t) ? es(this, t) : ts(this, t)
        }

        get closed() {
            return this._sink.closed
        }

        [Symbol.asyncIterator]() {
            return this._sink[Symbol.asyncIterator]()
        }

        toDOMStream(t) {
            return this._sink.toDOMStream(t)
        }

        toNodeStream(t) {
            return this._sink.toNodeStream(t)
        }

        close() {
            return this.reset()._sink.close()
        }

        abort(t) {
            return this.reset()._sink.abort(t)
        }

        finish() {
            return this._autoDestroy ? this.close() : this.reset(this._sink, this._schema), this
        }

        reset() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._sink,
                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            var n;
            return t === this._sink || t instanceof ri ? this._sink = t : (this._sink = new ri, t && (T(n = t) && k(n.abort) && k(n.getWriter) && !M(n)) ? this.toDOMStream({type: "bytes"}).pipeTo(t) : t && (t => T(t) && k(t.end) && k(t.write) && x(t.writable) && !M(t))(t) && this.toNodeStream({objectMode: !1}).pipe(t)), this._started && this._schema && this._writeFooter(this._schema), this._started = !1, this._dictionaryBlocks = [], this._recordBatchBlocks = [], this._dictionaryDeltaOffsets = new Map, e && pr(e, this._schema) || (null == e ? (this._position = 0, this._schema = null) : (this._started = !0, this._schema = e, this._writeSchema(e))), this
        }

        write(t) {
            let e = null;
            if (!this._sink) throw new Error("RecordBatchWriter is closed");
            if (null == t) return this.finish() && void 0;
            if (t instanceof Ir && !(e = t.schema)) return this.finish() && void 0;
            if (t instanceof mr && !(e = t.schema)) return this.finish() && void 0;
            if (e && !pr(e, this._schema)) {
                if (this._started && this._autoDestroy) return this.close();
                this.reset(this._sink, e)
            }
            t instanceof mr ? t instanceof wr || this._writeRecordBatch(t) : t instanceof Ir ? this.writeAll(t.batches) : C(t) && this.writeAll(t)
        }

        _writeMessage(t) {
            const e = (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8) - 1, n = so.encode(t),
                r = n.byteLength, i = this._writeLegacyIpcFormat ? 4 : 8, o = r + i + e & ~e, s = o - r - i;
            return t.headerType === u.RecordBatch ? this._recordBatchBlocks.push(new Kr(o, t.bodyLength, this._position)) : t.headerType === u.DictionaryBatch && this._dictionaryBlocks.push(new Kr(o, t.bodyLength, this._position)), this._writeLegacyIpcFormat || this._write(Int32Array.of(-1)), this._write(Int32Array.of(o - i)), r > 0 && this._write(n), this._writePadding(s)
        }

        _write(t) {
            if (this._started) {
                const e = Z(t);
                e && e.byteLength > 0 && (this._sink.write(e), this._position += e.byteLength)
            }
            return this
        }

        _writeSchema(t) {
            return this._writeMessage(so.from(t))
        }

        _writeFooter(t) {
            return this._writeLegacyIpcFormat ? this._write(Int32Array.of(0)) : this._write(Int32Array.of(-1, 0))
        }

        _writeMagic() {
            return this._write(To)
        }

        _writePadding(t) {
            return t > 0 ? this._write(new Uint8Array(t)) : this
        }

        _writeRecordBatch(t) {
            const {byteLength: e, nodes: n, bufferRegions: r, buffers: i} = Ho.assemble(t), o = new ao(t.numRows, n, r),
                s = so.from(o, e);
            return this._writeDictionaries(t)._writeMessage(s)._writeBodyBuffers(i)
        }

        _writeDictionaryBatch(t, e) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            this._dictionaryDeltaOffsets.set(e, t.length + (this._dictionaryDeltaOffsets.get(e) || 0));
            const {byteLength: r, nodes: i, bufferRegions: o, buffers: s} = Ho.assemble(new Kn([t])),
                a = new ao(t.length, i, o), l = new lo(a, e, n), u = so.from(l, r);
            return this._writeMessage(u)._writeBodyBuffers(s)
        }

        _writeBodyBuffers(t) {
            let e, n, r;
            for (let i = -1, o = t.length; ++i < o;) (e = t[i]) && (n = e.byteLength) > 0 && (this._write(e), (r = (n + 7 & -8) - n) > 0 && this._writePadding(r));
            return this
        }

        _writeDictionaries(t) {
            for (let [e, n] of t.dictionaries) {
                let t = this._dictionaryDeltaOffsets.get(e) || 0;
                if (0 === t || (n = null === n || void 0 === n ? void 0 : n.slice(t)).length > 0) for (const r of n.data) this._writeDictionaryBatch(r, e, t > 0), t += r.length
            }
            return this
        }
    }

    class Xo extends Jo {
        static writeAll(t, e) {
            const n = new Xo(e);
            return E(t) ? t.then((t => n.writeAll(t))) : O(t) ? es(n, t) : ts(n, t)
        }
    }

    class Zo extends Jo {
        static writeAll(t) {
            const e = new Zo;
            return E(t) ? t.then((t => e.writeAll(t))) : O(t) ? es(e, t) : ts(e, t)
        }

        constructor() {
            super(), this._autoDestroy = !0
        }

        _writeSchema(t) {
            return this._writeMagic()._writePadding(2)
        }

        _writeFooter(t) {
            const e = Yr.encode(new Yr(t, r.V4, this._recordBatchBlocks, this._dictionaryBlocks));
            return super._writeFooter(t)._write(e)._write(Int32Array.of(e.byteLength))._writeMagic()
        }
    }

    function ts(t, e) {
        let n = e;
        e instanceof Ir && (n = e.batches, t.reset(void 0, e.schema));
        for (const r of n) t.write(r);
        return t.finish()
    }

    function es(t, e) {
        var n, r, i, o;
        return R(this, void 0, void 0, (function* () {
            try {
                for (n = $(e); !(r = yield n.next()).done;) {
                    const e = r.value;
                    t.write(e)
                }
            } catch (s) {
                i = {error: s}
            } finally {
                try {
                    r && !r.done && (o = n.return) && (yield o.call(n))
                } finally {
                    if (i) throw i.error
                }
            }
            return t.finish()
        }))
    }

    function ns(t) {
        const e = Do.from(t);
        return E(e) ? e.then((t => ns(t))) : e.isAsync() ? e.readAll().then((t => new Ir(t))) : new Ir(e.readAll())
    }

    function rs(t) {
        return ("stream" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "stream") ? Xo : Zo).writeAll(t).toUint8Array(!0)
    }

    var is, os = function () {
        function t(t, e, n, r) {
            var i = this;
            this.getCell = function (t, e) {
                var n = t < i.headerRows && e < i.headerColumns, r = t >= i.headerRows && e < i.headerColumns,
                    o = t < i.headerRows && e >= i.headerColumns;
                if (n) {
                    var s = ["blank"];
                    return e > 0 && s.push("level" + t), {type: "blank", classNames: s.join(" "), content: ""}
                }
                if (o) return {
                    type: "columns",
                    classNames: (s = ["col_heading", "level" + t, "col" + (l = e - i.headerColumns)]).join(" "),
                    content: i.getContent(i.columnsTable, l, t)
                };
                if (r) {
                    s = ["row_heading", "level" + e, "row" + (a = t - i.headerRows)];
                    return {
                        type: "index",
                        id: "T_".concat(i.uuid, "level").concat(e, "_row").concat(a),
                        classNames: s.join(" "),
                        content: i.getContent(i.indexTable, a, e)
                    }
                }
                s = ["data", "row" + (a = t - i.headerRows), "col" + (l = e - i.headerColumns)];
                var a, l,
                    u = i.styler ? i.getContent(i.styler.displayValuesTable, a, l) : i.getContent(i.dataTable, a, l);
                return {
                    type: "data",
                    id: "T_".concat(i.uuid, "row").concat(a, "_col").concat(l),
                    classNames: s.join(" "),
                    content: u
                }
            }, this.getContent = function (t, e, n) {
                var r = t.getChildAt(n);
                return null === r ? "" : i.getColumnTypeId(t, n) === c.Timestamp ? i.nanosToDate(r.get(e)) : r.get(e)
            }, this.dataTable = ns(t), this.indexTable = ns(e), this.columnsTable = ns(n), this.styler = r ? {
                caption: r.caption, displayValuesTable: ns(r.displayValues), styles: r.styles, uuid: r.uuid
            } : void 0
        }

        return Object.defineProperty(t.prototype, "rows", {
            get: function () {
                return this.indexTable.numRows + this.columnsTable.numCols
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "columns", {
            get: function () {
                return this.indexTable.numCols + this.columnsTable.numRows
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "headerRows", {
            get: function () {
                return this.rows - this.dataRows
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "headerColumns", {
            get: function () {
                return this.columns - this.dataColumns
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "dataRows", {
            get: function () {
                return this.dataTable.numRows
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "dataColumns", {
            get: function () {
                return this.dataTable.numCols
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "uuid", {
            get: function () {
                return this.styler && this.styler.uuid
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "caption", {
            get: function () {
                return this.styler && this.styler.caption
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "styles", {
            get: function () {
                return this.styler && this.styler.styles
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "table", {
            get: function () {
                return this.dataTable
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "index", {
            get: function () {
                return this.indexTable
            }, enumerable: !1, configurable: !0
        }), Object.defineProperty(t.prototype, "columnTable", {
            get: function () {
                return this.columnsTable
            }, enumerable: !1, configurable: !0
        }), t.prototype.serialize = function () {
            return {data: rs(this.dataTable), index: rs(this.indexTable), columns: rs(this.columnsTable)}
        }, t.prototype.getColumnTypeId = function (t, e) {
            return t.schema.fields[e].type.typeId
        }, t.prototype.nanosToDate = function (t) {
            return new Date(t / 1e6)
        }, t
    }(), ss = function () {
        return ss = Object.assign || function (t) {
            for (var e, n = 1, r = arguments.length; n < r; n++) for (var i in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t
        }, ss.apply(this, arguments)
    };
    !function (t) {
        t.COMPONENT_READY = "streamlit:componentReady", t.SET_COMPONENT_VALUE = "streamlit:setComponentValue", t.SET_FRAME_HEIGHT = "streamlit:setFrameHeight"
    }(is || (is = {}));
    var as = function () {
        function t() {
        }

        return t.API_VERSION = 1, t.RENDER_EVENT = "streamlit:render", t.events = new EventTarget, t.registeredMessageListener = !1, t.setComponentReady = function () {
            t.registeredMessageListener || (window.addEventListener("message", t.onMessageEvent), t.registeredMessageListener = !0), t.sendBackMsg(is.COMPONENT_READY, {apiVersion: t.API_VERSION})
        }, t.setFrameHeight = function (e) {
            void 0 === e && (e = document.body.scrollHeight), e !== t.lastFrameHeight && (t.lastFrameHeight = e, t.sendBackMsg(is.SET_FRAME_HEIGHT, {height: e}))
        }, t.setComponentValue = function (e) {
            var n;
            e instanceof os ? (n = "dataframe", e = e.serialize()) : !function (t) {
                var e = !1;
                try {
                    e = t instanceof BigInt64Array || t instanceof BigUint64Array
                } catch (n) {
                }
                return t instanceof Int8Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array || e
            }(e) ? e instanceof ArrayBuffer ? (n = "bytes", e = new Uint8Array(e)) : n = "json" : (n = "bytes", e = new Uint8Array(e.buffer)), t.sendBackMsg(is.SET_COMPONENT_VALUE, {
                value: e, dataType: n
            })
        }, t.onMessageEvent = function (e) {
            if (e.data.type === t.RENDER_EVENT) t.onRenderMessage(e.data)
        }, t.onRenderMessage = function (e) {
            var n = e.args;
            null == n && (console.error("Got null args in onRenderMessage. This should never happen"), n = {});
            var r = e.dfs && e.dfs.length > 0 ? t.argsDataframeToObject(e.dfs) : {};
            n = ss(ss({}, n), r);
            var i = Boolean(e.disabled), o = e.theme;
            o && ls(o);
            var s = {disabled: i, args: n, theme: o}, a = new CustomEvent(t.RENDER_EVENT, {detail: s});
            t.events.dispatchEvent(a)
        }, t.argsDataframeToObject = function (e) {
            var n = e.map((function (e) {
                var n = e.key, r = e.value;
                return [n, t.toArrowTable(r)]
            }));
            return Object.fromEntries(n)
        }, t.toArrowTable = function (t) {
            var e, n = (e = t.data).data, r = e.index, i = e.columns, o = e.styler;
            return new os(n, r, i, o)
        }, t.sendBackMsg = function (t, e) {
            window.parent.postMessage(ss({isStreamlitMessage: !0, type: t}, e), "*")
        }, t
    }(), ls = function (t) {
        var e = document.createElement("style");
        document.head.appendChild(e), e.innerHTML = "\n    :root {\n      --primary-color: ".concat(t.primaryColor, ";\n      --background-color: ").concat(t.backgroundColor, ";\n      --secondary-background-color: ").concat(t.secondaryBackgroundColor, ";\n      --text-color: ").concat(t.textColor, ";\n      --font: ").concat(t.font, ";\n    }\n\n    body {\n      background-color: var(--background-color);\n      color: var(--text-color);\n    }\n  ")
    };
    var us = function () {
        var t = function (e, n) {
            return t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                t.__proto__ = e
            } || function (t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
            }, t(e, n)
        };
        return function (e, n) {
            if ("function" !== typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

            function r() {
                this.constructor = e
            }

            t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
        }
    }();
    !function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        us(e, t), e.prototype.componentDidMount = function () {
            as.setFrameHeight()
        }, e.prototype.componentDidUpdate = function () {
            as.setFrameHeight()
        }
    }(b.PureComponent);
    var cs = n(579);
    const ds = (t, e) => {
        if (!e || "" === e.trim()) return t;
        const n = t.toLowerCase(), r = e.toLowerCase().replace(/\s+/g, "");
        if (!n.replace(/\s+/g, "").includes(r)) return t;
        const i = n.indexOf(e.toLowerCase());
        if (i >= 0) {
            const n = t.substring(0, i), r = t.substring(i, i + e.length), o = t.substring(i + e.length);
            return (0, cs.jsxs)(cs.Fragment, {
                children: [n, (0, cs.jsx)("span", {
                    style: {
                        fontWeight: "bold", textDecoration: "underline"
                    }, children: r
                }), o]
            })
        }
        const o = [];
        let s = 0;
        const a = t.replace(/\s+/g, "").toLowerCase();
        for (let l = 0; l < a.length; l++) if (l + r.length <= a.length) {
            if (a.substring(l, l + r.length) === r) {
                let e = 0, n = 0, i = t.length;
                for (let o = 0; o < t.length; o++) if (!/\s/.test(t[o])) {
                    if (e === l && (n = o), e === l + r.length) {
                        i = o;
                        break
                    }
                    e++
                }
                s < n && o.push(t.substring(s, n)), o.push((0, cs.jsx)("span", {
                    style: {
                        fontWeight: "bold", textDecoration: "underline"
                    }, children: t.substring(n, i)
                }, l)), s = i;
                break
            }
        }
        return s < t.length && o.push(t.substring(s)), o.length > 0 ? (0, cs.jsx)(cs.Fragment, {children: o}) : t
    }, fs = t => {
        let {suggestion: e, isActive: n, onClick: r, onMouseEnter: i, isLast: o, index: s, searchQuery: a} = t;
        return (0, cs.jsx)("div", {
            className: "suggestion-item", "data-index": s, onClick: () => r(e), style: {
                padding: "0.75rem",
                cursor: "pointer",
                backgroundColor: n ? "#e6f7ff" : "white",
                color: n ? "#0066cc" : "#333333",
                borderBottom: o ? "none" : "1px solid #eee",
                transition: "background-color 0.2s ease",
                fontWeight: n ? "500" : "normal",
                fontSize: "0.95rem",
                display: "block",
                width: "100%",
                textAlign: "left",
                boxSizing: "border-box"
            }, onMouseEnter: i, children: a ? ds(e, a) : e
        }, e)
    }, hs = t => {
        let {suggestions: e, selectedIndex: n, onSelect: r, onHover: i, searchQuery: o} = t;
        return 0 === e.length ? (0, cs.jsx)("div", {
            style: {
                padding: "0.75rem",
                color: "#666",
                backgroundColor: "white",
                borderRadius: "4px",
                fontSize: "0.95rem",
                zIndex: 10001
            }, children: "No matching suggestions"
        }) : (0, cs.jsx)("div", {
            style: {
                backgroundColor: "white",
                borderRadius: "4px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                zIndex: 10001,
                position: "relative"
            }, children: e.map(((t, s) => (0, cs.jsx)(fs, {
                suggestion: t,
                isActive: s === n,
                onClick: r,
                onMouseEnter: () => i(s),
                isLast: s === e.length - 1,
                index: s,
                searchQuery: o
            }, t)))
        })
    }, ps = t => {
        var e, n, r, i, o;
        if (((t, e) => {
            const n = (0, f.useRef)(t), r = (0, f.useRef)(e);
            (0, f.useEffect)((() => {
                r.current = e
            }), [e]), (0, f.useEffect)((() => {
                const e = n.current;
                e !== t && (r.current(e, t), n.current = t, window.dispatchEvent(new CustomEvent("suggestionsListChanged", {
                    detail: {
                        prevCount: e, currentCount: t
                    }
                })))
            }), [t])
        })(t.activeSuggestions.length, (0, f.useCallback)(((e, n) => {
            n < e && t.suggestionsRef.current && t.suggestionsRef.current.getBoundingClientRect()
        }), [t.suggestionsRef])), function (t, e) {
            let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            const r = (0, f.useRef)(null), i = (0, f.useRef)(e);
            (0, f.useEffect)((() => {
                i.current = e
            }), [e]), (0, f.useEffect)((() => {
                if (!window.ResizeObserver || !t.current || !n) return;
                r.current && (r.current.disconnect(), r.current = null);
                const e = new ResizeObserver((t => {
                    for (const e of t) {
                        const {width: t, height: n} = e.contentRect;
                        i.current(t, n)
                    }
                }));
                return e.observe(t.current), r.current = e, () => {
                    r.current && (r.current.disconnect(), r.current = null)
                }
            }), [t, n])
        }(t.suggestionsRef, (0, f.useCallback)(((t, e) => {
            window.dispatchEvent(new CustomEvent("dropdownResized", {detail: {width: t, height: e}}))
        }), []), t.showSuggestions), e = t.suggestionsRef, n = t.selectedSuggestionIndex, r = ".suggestion-item", i = t.activeSuggestions.length, o = t.showSuggestions, (0, f.useEffect)((() => {
            if (!o || !e.current || 0 === i) return;
            const t = e.current.querySelector(`${r}[data-index="${n}"]`);
            if (!t) return;
            const s = e.current.getBoundingClientRect(), a = t.getBoundingClientRect(), l = a.top < s.top,
                u = a.bottom > s.bottom;
            l ? e.current.scrollTop += a.top - s.top : u && (e.current.scrollTop += a.bottom - s.bottom)
        }), [e, n, r, i, o]), !t.showSuggestions) return null;
        const s = (0, cs.jsx)("div", {
            ref: t.suggestionsRef,
            className: "suggestions-dropdown",
            "data-direction": t.dropdownDirection,
            "data-suggestion-count": t.activeSuggestions.length,
            style: {
                position: "absolute",
                top: t.position.top,
                bottom: "auto",
                left: t.position.left,
                width: t.position.width,
                maxHeight: "300px",
                overflowY: "auto",
                backgroundColor: "white",
                border: "1px solid #ccc",
                borderRadius: "0.25rem",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                zIndex: 1e4,
                margin: "down" === t.dropdownDirection ? "0.25rem 0 0 0" : "0 0 0.25rem 0"
            },
            children: (0, cs.jsx)(hs, {
                suggestions: t.activeSuggestions,
                selectedIndex: t.selectedSuggestionIndex,
                onSelect: t.onSelect,
                onHover: t.onHover,
                searchQuery: t.searchQuery
            })
        });
        return "up" === t.dropdownDirection ? h.createPortal(s, (() => {
            let t = document;
            try {
                window.parent && window.parent.document && (t = window.parent.document)
            } catch (n) {
                console.error("Cannot access parent document:", n)
            }
            let e = t.getElementById("suggestions-portal");
            return e || (e = t.createElement("div"), e.id = "suggestions-portal", t.body.appendChild(e)), e
        })()) : s
    }, ys = (t, e) => {
        const n = {fontFamily: "sans-serif", position: "relative", width: e, minHeight: "60px", zIndex: 1};
        return "bottom" === t ? {
            ...n,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "10px",
            backgroundColor: "white",
            borderTop: "1px solid #e6e6e6",
            zIndex: 1e3,
            width: "100%"
        } : n
    }, bs = "\u200b", ms = (t, e) => {
        const n = e.toLowerCase().trim(), r = n.replace(/\s+/g, "");
        if ("" === r) return t;
        const i = t.map((t => {
            const e = t, i = t.toLowerCase(), o = i.replace(/\s+/g, "");
            let s = 0;
            return s = i === n ? 100 : i.startsWith(n) ? 80 : o.startsWith(r) ? 70 : i.includes(n) ? 60 : o.includes(r) ? 50 : function (t, e) {
                const n = t.split(/\s+/), r = e.split(/\s+/);
                let i = 0;
                const o = n.filter((t => r.some((e => e.includes(t))))).length;
                if (o > 0) i = 30 + o / n.length * 20; else {
                    let n = 0;
                    for (let r = 0; r < e.length; r++) {
                        let i = 0;
                        for (let n = 0; n < t.length && r + n < e.length && e[r + n] === t[n]; n++) i++;
                        n = Math.max(n, i)
                    }
                    n >= 2 && (i = 10 + n / t.length * 10)
                }
                return i
            }(n, i), {suggestion: e, score: s}
        })).filter((t => t.score > 0)).sort(((t, e) => e.score - t.score));
        return i.map((t => t.suggestion))
    };
    const gs = (t, e, n, r) => {
        const [i, o] = (0, f.useState)(!1), [s, a] = (0, f.useState)([]), [l, u] = (0, f.useState)(null), [c, d] = (0, f.useState)(0), [h, p] = (0, f.useState)(-1), [y, b] = (0, f.useState)(""),
            m = (0, f.useRef)(new Set);
        (0, f.useEffect)((() => {
            const {triggerChar: i, triggerPos: s, textAfterTrigger: l} = ((t, e, n) => {
                let r = {triggerChar: null, triggerPos: -1, textAfterTrigger: ""};
                if (!t || 0 === e || !n || 0 === n.length) return r;
                let i = -1, o = null;
                for (let s = e - 1; s >= 0; s--) {
                    const e = t[s];
                    if (e !== bs && n.includes(e) && (0 === s || " " === t[s - 1] || "\n" === t[s - 1])) {
                        i = s, o = e;
                        break
                    }
                }
                return -1 !== i && o && (r.triggerChar = o, r.triggerPos = i, r.textAfterTrigger = t.substring(i + 1, e)), r
            })(t, e, n);
            if (-1 !== s && i) {
                if (m.current.has(s)) return void o(!1);
                if (t.indexOf(bs, s) > 0 && t.indexOf(bs, s) < e) return m.current.add(s), void o(!1);
                u(i), p(s), b(l);
                const n = r[i] || [], c = ms(n, l);
                return a(c), o(c.length > 0), void d(0)
            }
            o(!1), u(null), p(-1), b("")
        }), [t, e, n, r]);
        const g = (0, f.useCallback)((n => {
            if (!l || -1 === h) return null;
            const r = t.substring(0, h), i = t.substring(e), s = (t => t + bs)(n) + " ", a = r + l + s + i,
                u = ((t, e, n) => t + e.length + n.length + 2)(h, l, n);
            return m.current.add(h), o(!1), setTimeout((() => {
                o(!1)
            }), 0), {newValue: a, newCursorPos: u}
        }), [l, h, t, e]);
        (0, f.useEffect)((() => {
            t || m.current.clear()
        }), [t]);
        return {
            showSuggestions: i,
            activeSuggestions: s,
            selectedSuggestionIndex: c,
            setSelectedSuggestionIndex: d,
            handleSuggestionClick: g,
            handleKeyNavigation: t => {
                switch (t) {
                    case"ArrowDown":
                        return d((t => t < s.length - 1 ? t + 1 : 0)), !0;
                    case"ArrowUp":
                        return d((t => t > 0 ? t - 1 : s.length - 1)), !0;
                    case"Enter":
                    case"Tab":
                        return i && s.length > 0 && c >= 0 && c < s.length ? g(s[c]) : null;
                    case"Escape":
                        return o(!1), !0;
                    default:
                        return null
                }
            },
            setShowSuggestions: o,
            searchQuery: y
        }
    }, vs = (0, f.forwardRef)(((t, e) => {
        let {
            value: n,
            onChange: r,
            onKeyDown: i,
            placeholder: o,
            disabled: s,
            style: a,
            tagStyles: l = {},
            triggerChars: u = ["@", "#"]
        } = t;
        const [c, d] = (0, f.useState)([]), h = (0, f.useRef)(null), p = (0, f.useRef)(null);
        (0, f.useEffect)((() => {
            e && ("function" === typeof e ? e(p.current) : e.current = p.current)
        }), [e]), (0, f.useEffect)((() => {
            const t = [];
            let e = 0;
            for (; e < n.length;) {
                const r = u.reduce(((t, r) => {
                    const i = n.indexOf(r, e);
                    return -1 !== i && (-1 === t || i < t) ? i : t
                }), -1);
                if (-1 === r) break;
                const i = n.indexOf("\u200b", r);
                if (-1 !== i) {
                    const o = n.substring(r, i + 1), s = n[r];
                    t.push({text: o, triggerChar: s, start: r, end: i + 1}), e = i + 1
                } else e = r + 1
            }
            d(t)
        }), [n, u]);
        const y = (() => {
            const t = {
                padding: "0.5rem",
                fontFamily: "inherit",
                fontSize: "inherit",
                lineHeight: "normal",
                letterSpacing: "normal",
                border: "1px solid #ccc",
                borderRadius: "0.25rem", ...a
            };
            return {
                padding: t.padding,
                fontFamily: t.fontFamily,
                fontSize: t.fontSize,
                lineHeight: t.lineHeight,
                letterSpacing: t.letterSpacing,
                fontWeight: t.fontWeight,
                border: t.border,
                borderRadius: t.borderRadius
            }
        })(), b = {...y, boxSizing: "border-box", width: "100%"}, m = {
            ...b,
            background: "transparent",
            color: "transparent",
            caretColor: "black",
            position: "relative",
            zIndex: 1, ...a, ...y
        }, g = {
            ...b,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            pointerEvents: "none",
            backgroundColor: "transparent",
            overflow: "hidden",
            whiteSpace: "pre",
            borderColor: "transparent",
            zIndex: 1
        };
        return (0, cs.jsxs)("div", {
            ref: h, style: {position: "relative"}, children: [(0, cs.jsx)("input", {
                ref: p,
                type: "text",
                value: n,
                onChange: r,
                onKeyDown: t => {
                    i && i(t)
                },
                placeholder: o,
                disabled: s,
                style: m,
                autoComplete: "off",
                autoCorrect: "off",
                autoCapitalize: "off",
                spellCheck: "false"
            }), (0, cs.jsx)("div", {
                style: g, children: (() => {
                    if (!n) return (0, cs.jsx)("span", {style: {color: "#999"}, children: o});
                    const t = [];
                    let e = 0;
                    const r = [...c].sort(((t, e) => t.start - e.start));
                    for (const i of r) {
                        i.start > e && t.push((0, cs.jsx)("span", {children: n.substring(e, i.start)}, `text-${e}`));
                        const r = n.substring(i.start, i.end - 1),
                            o = l[i.triggerChar] || {backgroundColor: "#e8f0fe", color: "#1a73e8"};
                        t.push((0, cs.jsx)("span", {
                            style: {
                                backgroundColor: o.backgroundColor, color: o.color, borderRadius: "3px"
                            }, children: r
                        }, `tag-${i.start}`)), e = i.end
                    }
                    return e < n.length && t.push((0, cs.jsx)("span", {children: n.substring(e)}, `text-${e}`)), t
                })()
            })]
        })
    })), ws = function () {
        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "static";
        const e = document.createElement("style");
        return e.innerHTML = '\n    /* Basic styling for iframe and component visibility */\n    iframe.stCustomComponentV1 {\n      min-height: 60px !important;\n      overflow: visible !important;\n    }\n\n    /* Ensure suggestions are visible */\n    .suggestions-dropdown {\n      z-index: 9999 !important;\n      position: absolute !important;\n      background-color: white !important;\n      border: 1px solid #ccc !important;\n      border-radius: 4px !important;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2) !important;\n      max-height: 300px !important;\n      overflow-y: auto !important;\n      width: 100% !important;\n      pointer-events: auto !important;\n    }\n\n    /* Special handling for upward dropdowns */\n    .suggestions-dropdown[data-direction="up"] {\n      z-index: 10000 !important;\n      transform: translateY(-2px) !important;\n    }\n\n    /* Fix for Streamlit iframe rendering */\n    .element-container iframe {\n      overflow: visible !important;\n    }\n\n    /* Allow overflow for dropdowns */\n    .stApp {\n      overflow: visible !important;\n    }\n\n    /* Global portal container */\n    #suggestions-portal {\n      position: fixed;\n      z-index: 99999;\n      pointer-events: none;\n    }\n\n    /* Portal dropdown needs pointer events */\n    #suggestions-portal > div {\n      pointer-events: auto;\n    }\n  ', "bottom" === t && (e.innerHTML += "\n      body { padding-bottom: 70px !important; }\n      footer { display: none !important; }\n    "), document.head.appendChild(e), e
    }(), _s = function (t) {
        var e = function (e) {
            function n(t) {
                var n = e.call(this, t) || this;
                return n.componentDidMount = function () {
                    as.events.addEventListener(as.RENDER_EVENT, n.onRenderEvent), as.setComponentReady()
                }, n.componentDidUpdate = function () {
                    null != n.state.componentError && as.setFrameHeight()
                }, n.componentWillUnmount = function () {
                    as.events.removeEventListener(as.RENDER_EVENT, n.onRenderEvent)
                }, n.onRenderEvent = function (t) {
                    n.setState({renderData: t.detail})
                }, n.state = {renderData: void 0, componentError: void 0}, n
            }

            return us(n, e), n.prototype.render = function () {
                return null != this.state.componentError ? b.createElement("div", null, b.createElement("h1", null, "Component Error"), b.createElement("span", null, this.state.componentError.message)) : null == this.state.renderData ? null : b.createElement(t, {
                    width: window.innerWidth,
                    disabled: this.state.renderData.disabled,
                    args: this.state.renderData.args,
                    theme: this.state.renderData.theme
                })
            }, n.getDerivedStateFromError = function (t) {
                return {componentError: t}
            }, n
        }(b.PureComponent);
        return y()(e, t)
    }((t => {
        const e = (0, f.useRef)(null), n = (0, f.useRef)(null), r = (0, f.useRef)(null), i = (0, f.useRef)(!0),
            o = t.args, [s, a] = (0, f.useState)(!1), {
                value: l, cursorPosition: u, handleChange: c, handleSubmit: d, setValueAndCursor: h
            } = (t => {
                const [e, n] = (0, f.useState)(t || ""), [r, i] = (0, f.useState)(0), o = (0, f.useCallback)((t => {
                    as.setComponentValue(t)
                }), []), s = (0, f.useCallback)((() => {
                    e.trim() && (as.setComponentValue({value: e, submitted: !0}), n(""), i(0))
                }), [e]), a = (0, f.useCallback)((t => {
                    n(t.target.value), i(t.target.selectionStart || 0)
                }), []), l = (0, f.useCallback)(((t, e) => {
                    n(t), i(e)
                }), []);
                return {
                    value: e,
                    cursorPosition: r,
                    handleChange: a,
                    handleSubmit: s,
                    setValueAndCursor: l,
                    sendValueToStreamlit: o
                }
            })(o.value), {
                showSuggestions: p,
                activeSuggestions: y,
                selectedSuggestionIndex: b,
                setSelectedSuggestionIndex: m,
                handleSuggestionClick: g,
                handleKeyNavigation: v,
                searchQuery: w
            } = gs(l, u, o.trigger_chars, o.suggestions), {getDropdownPosition: _} = function (t, e, n) {
                let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "down";
                const [i, o] = (0, f.useState)(150), [s, a] = (0, f.useState)({
                    top: "up" === r ? "0px" : "100%", left: "0", width: "100%"
                }), l = (0, f.useRef)(i), u = (0, f.useCallback)((() => {
                    if (!t.current) return "up" === r ? {top: "0px", left: "0px", width: "100%"} : {
                        top: "100%", left: "0", width: "100%"
                    };
                    const e = t.current.getBoundingClientRect();
                    let n = e.top, o = e.left;
                    try {
                        if (window !== window.parent && "up" === r) {
                            const t = window.parent.document.querySelectorAll("iframe");
                            for (let e = 0; e < t.length; e++) try {
                                if (t[e].contentWindow === window) {
                                    const r = t[e].getBoundingClientRect();
                                    n += r.top, o += r.left;
                                    break
                                }
                            } catch (s) {
                            }
                        }
                    } catch (s) {
                        console.error("Error calculating position:", s)
                    }
                    return "up" === r ? {top: n - i + "px", left: o + "px", width: e.width + "px"} : {
                        top: "100%", left: "0", width: "100%"
                    }
                }), [r, i, t]), c = (0, f.useCallback)((t => {
                    t !== l.current && (l.current = t, o(t), a(u()))
                }), [u]);
                return (0, f.useEffect)((() => {
                    const t = t => {
                        n && e.current && requestAnimationFrame((() => {
                            var t;
                            const n = (null === (t = e.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) || 0;
                            n > 0 && c(n)
                        }))
                    };
                    return window.addEventListener("suggestionsListChanged", t), () => {
                        window.removeEventListener("suggestionsListChanged", t)
                    }
                }), [n, e, c]), (0, f.useEffect)((() => {
                    const t = t => {
                        const {height: e} = t.detail;
                        e > 0 && c(e)
                    };
                    return window.addEventListener("dropdownResized", t), () => {
                        window.removeEventListener("dropdownResized", t)
                    }
                }), [c]), (0, f.useEffect)((() => {
                    n && e.current && requestAnimationFrame((() => {
                        var t;
                        const n = (null === (t = e.current) || void 0 === t ? void 0 : t.getBoundingClientRect().height) || 0;
                        n > 0 && c(n)
                    }))
                }), [n, e, c]), {getDropdownPosition: () => s, dropdownHeight: i}
            }(n, r, p, o.dropdown_direction);
        ((t, e, n, r) => {
            (0, f.useEffect)((() => {
                as.setFrameHeight(60)
            }), []), (0, f.useEffect)((() => {
                if (t.current) {
                    let i = t.current.offsetHeight;
                    n && e.current && "down" === r && (i += Math.min(e.current.scrollHeight, 300) + 10), as.setFrameHeight(Math.max(i, 60))
                } else as.setFrameHeight(60)
            }), [n, t, e, r])
        })(e, r, p, o.dropdown_direction), (0, f.useEffect)((() => (i.current && (as.setFrameHeight(), i.current = !1, a(!0)), () => {
            ws && ws.remove()
        })), []);
        return (0, cs.jsxs)("div", {
            ref: e, style: ys(o.position, o.width), children: [(() => {
                return "hidden" === o.label_visibility || "collapsed" === o.label_visibility ? null : (0, cs.jsx)("label", {
                    htmlFor: "autocomplete-input", style: (t = o.label_visibility, {
                        display: "hidden" === t ? "none" : "block", marginBottom: "0.5rem", fontWeight: 600
                    }), children: o.label
                });
                var t
            })(), (0, cs.jsx)(vs, {
                ref: n, value: l, onChange: c, onKeyDown: t => {
                    if ("Enter" === t.key && o.on_submit && !p) return t.preventDefault(), void d();
                    const e = v(t.key);
                    !0 !== e ? e && "object" === typeof e && (t.preventDefault(), h(e.newValue, e.newCursorPos), setTimeout((() => {
                        n.current && (n.current.focus(), n.current.setSelectionRange(e.newCursorPos, e.newCursorPos))
                    }), 0)) : t.preventDefault()
                }, placeholder: o.placeholder, disabled: o.disabled, style: {
                    width: "100%",
                    padding: "0.5rem",
                    borderRadius: "0.25rem",
                    border: "1px solid #ccc",
                    fontSize: "1rem",
                    boxSizing: "border-box"
                }, tagStyles: o.tag_styles, triggerChars: o.trigger_chars
            }), (0, cs.jsx)(ps, {
                showSuggestions: p && s && !o.disabled,
                suggestionsRef: r,
                dropdownDirection: o.dropdown_direction,
                position: _(),
                activeSuggestions: y,
                selectedSuggestionIndex: b,
                onSelect: t => {
                    const e = g(t);
                    e && (h(e.newValue, e.newCursorPos), setTimeout((() => {
                        n.current && (n.current.focus(), n.current.setSelectionRange(e.newCursorPos, e.newCursorPos))
                    }), 0))
                },
                onHover: t => {
                    m(t)
                },
                searchQuery: w
            })]
        })
    }));
    h.render((0, cs.jsx)(f.StrictMode, {children: (0, cs.jsx)(_s, {})}), document.getElementById("root")), as.setComponentReady()
})();
//# sourceMappingURL=main.3a01ad58.js.map