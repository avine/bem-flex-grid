function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
function $c977bb2ab633c24c$export$942ed9735dae0de1() {
    const output = document.querySelector('.demo-layout__readme');
    if (output) {
        const btn = document.createElement('a');
        btn.innerHTML = '&longleftarrow; back';
        btn.href = '../demo.html';
        btn.className = 'demo-layout__back-button';
        output.appendChild(btn);
    }
}


var $d24923853890643b$exports = {};
/*
 Highcharts JS v9.2.1 (2021-08-19)

 (c) 2009-2021 Torstein Honsi

 License: www.highcharts.com/license
*/ 'use strict';
(function(aa, M) {
    "object" === "object" && $d24923853890643b$exports ? (M["default"] = M, $d24923853890643b$exports = aa.document ? M(aa) : M) : "function" === typeof define && define.amd ? define("highcharts/highcharts", function() {
        return M(aa);
    }) : (aa.Highcharts && aa.Highcharts.error(16, !0), aa.Highcharts = M(aa));
})("undefined" !== typeof window ? window : $d24923853890643b$exports, function(aa) {
    function M(r, a, C, E) {
        r.hasOwnProperty(a) || (r[a] = E.apply(null, C));
    }
    var a3 = {
    };
    M(a3, "Core/Globals.js", [], function() {
        var r = "undefined" !== typeof aa ? aa : "undefined" !== typeof window ? window : {
        }, a1;
        (function(a2) {
            a2.SVG_NS = "http://www.w3.org/2000/svg";
            a2.product = "Highcharts";
            a2.version = "9.2.1";
            a2.win = r;
            a2.doc = a2.win.document;
            a2.svg = a2.doc && a2.doc.createElementNS && !!a2.doc.createElementNS(a2.SVG_NS, "svg").createSVGRect;
            a2.userAgent = a2.win.navigator && a2.win.navigator.userAgent || "";
            a2.isChrome = -1 !== a2.userAgent.indexOf("Chrome");
            a2.isFirefox = -1 !== a2.userAgent.indexOf("Firefox");
            a2.isMS = /(edge|msie|trident)/i.test(a2.userAgent) && !a2.win.opera;
            a2.isSafari = !a2.isChrome && -1 !== a2.userAgent.indexOf("Safari");
            a2.isTouchDevice = /(Mobile|Android|Windows Phone)/.test(a2.userAgent);
            a2.isWebKit = -1 !== a2.userAgent.indexOf("AppleWebKit");
            a2.deg2rad = 2 * Math.PI / 360;
            a2.hasBidiBug = a2.isFirefox && 4 > parseInt(a2.userAgent.split("Firefox/")[1], 10);
            a2.hasTouch = !!a2.win.TouchEvent;
            a2.marginNames = [
                "plotTop",
                "marginRight",
                "marginBottom",
                "plotLeft"
            ];
            a2.noop = function() {
            };
            a2.supportsPassiveEvents = (function() {
                var r1 = !1;
                if (!a2.isMS) {
                    var w = Object.defineProperty({
                    }, "passive", {
                        get: function() {
                            r1 = !0;
                        }
                    });
                    a2.win.addEventListener && a2.win.removeEventListener && (a2.win.addEventListener("testPassive", a2.noop, w), a2.win.removeEventListener("testPassive", a2.noop, w));
                }
                return r1;
            })();
            a2.charts = [];
            a2.dateFormats = {
            };
            a2.seriesTypes = {
            };
            a2.symbolSizes = {
            };
            a2.chartCount = 0;
        })(a1 || (a1 = {
        }));
        return a1;
    });
    M(a3, "Core/Utilities.js", [
        a3["Core/Globals.js"]
    ], function(a1) {
        function r(b, d, e, p) {
            var y = d ? "Highcharts error" : "Highcharts warning";
            32 === b && (b = y + ": Deprecated member");
            var F = m(b), c = F ? y + " #" + b + ": www.highcharts.com/errors/" + b + "/" : b.toString();
            if ("undefined" !== typeof p) {
                var k = "";
                F && (c += "?");
                I(p, function(b1, K) {
                    k += "\n - " + K + ": " + b1;
                    F && (c += encodeURI(K) + "=" + encodeURI(b1));
                });
                c += k;
            }
            B(a1, "displayError", {
                chart: e,
                code: b,
                message: c,
                params: p
            }, function() {
                if (d) throw Error(c);
                h.console && -1 === r.messages.indexOf(c) && console.warn(c);
            });
            r.messages.push(c);
        }
        function C(b, d) {
            var y = {
            };
            I(b, function(h, c) {
                if (J(b[c], !0) && !b.nodeType && d[c]) h = C(b[c], d[c]), Object.keys(h).length && (y[c] = h);
                else if (J(b[c]) || b[c] !== d[c]) y[c] = b[c];
            });
            return y;
        }
        function E(b, d) {
            return parseInt(b, d || 10);
        }
        function z(b) {
            return "string" === typeof b;
        }
        function x(b) {
            b = Object.prototype.toString.call(b);
            return "[object Array]" === b || "[object Array Iterator]" === b;
        }
        function J(b, d) {
            return !!b && "object" === typeof b && (!d || !x(b));
        }
        function u(b) {
            return J(b) && "number" === typeof b.nodeType;
        }
        function n(b) {
            var d = b && b.constructor;
            return !(!J(b, !0) || u(b) || !d || !d.name || "Object" === d.name);
        }
        function m(b) {
            return "number" === typeof b && !isNaN(b) && Infinity > b && -Infinity < b;
        }
        function g(b) {
            return "undefined" !== typeof b && null !== b;
        }
        function c(b, d, h) {
            var y;
            z(d) ? g(h) ? b.setAttribute(d, h) : b && b.getAttribute && ((y = b.getAttribute(d)) || "class" !== d || (y = b.getAttribute(d + "Name"))) : I(d, function(d1, y1) {
                b.setAttribute(y1, d1);
            });
            return y;
        }
        function e(b, d) {
            var y;
            b || (b = {
            });
            for(y in d)b[y] = d[y];
            return b;
        }
        function l() {
            for(var b = arguments, d = b.length, h = 0; h < d; h++){
                var c1 = b[h];
                if ("undefined" !== typeof c1 && null !== c1) return c1;
            }
        }
        function f(b, d) {
            a1.isMS && !a1.svg && d && "undefined" !== typeof d.opacity && (d.filter = "alpha(opacity=" + 100 * d.opacity + ")");
            e(b.style, d);
        }
        function v(b, d, h, c2, p) {
            b = t.createElement(b);
            d && e(b, d);
            p && f(b, {
                padding: "0",
                border: "none",
                margin: "0"
            });
            h && f(b, h);
            c2 && c2.appendChild(b);
            return b;
        }
        function q(b, d) {
            return parseFloat(b.toPrecision(d || 14));
        }
        function k(b, d, c2) {
            var y = a1.getStyle || k;
            if ("width" === d) return d = Math.min(b.offsetWidth, b.scrollWidth), c2 = b.getBoundingClientRect && b.getBoundingClientRect().width, c2 < d && c2 >= d - 1 && (d = Math.floor(c2)), Math.max(0, d - (y(b, "padding-left", !0) || 0) - (y(b, "padding-right", !0) || 0));
            if ("height" === d) return Math.max(0, Math.min(b.offsetHeight, b.scrollHeight) - (y(b, "padding-top", !0) || 0) - (y(b, "padding-bottom", !0) || 0));
            h.getComputedStyle || r(27, !0);
            if (b = h.getComputedStyle(b, void 0)) {
                var e1 = b.getPropertyValue(d);
                l(c2, "opacity" !== d) && (e1 = E(e1));
            }
            return e1;
        }
        function I(b, d, h) {
            for(var y in b)Object.hasOwnProperty.call(b, y) && d.call(h || b[y], b[y], y, b);
        }
        function D(b, d, h) {
            function y(d1, H) {
                var K = b.removeEventListener || a1.removeEventListenerPolyfill;
                K && K.call(b, d1, H, !1);
            }
            function c2(h1) {
                var H;
                if (b.nodeName) {
                    if (d) {
                        var K = {
                        };
                        K[d] = !0;
                    } else K = h1;
                    I(K, function(b1, d1) {
                        if (h1[d1]) for(H = h1[d1].length; H--;)y(d1, h1[d1][H].fn);
                    });
                }
            }
            var e2 = "function" === typeof b && b.prototype || b;
            if (Object.hasOwnProperty.call(e2, "hcEvents")) {
                var p = e2.hcEvents;
                d ? (e2 = p[d] || [], h ? (p[d] = e2.filter(function(b1) {
                    return h !== b1.fn;
                }), y(d, h)) : (c2(p), p[d] = [])) : (c2(p), delete e2.hcEvents);
            }
        }
        function B(b, d, h, c2) {
            h = h || {
            };
            if (t.createEvent && (b.dispatchEvent || b.fireEvent && b !== a1)) {
                var y = t.createEvent("Events");
                y.initEvent(d, !0, !0);
                h = e(y, h);
                b.dispatchEvent ? b.dispatchEvent(h) : b.fireEvent(d, h);
            } else if (b.hcEvents) {
                h.target || e(h, {
                    preventDefault: function() {
                        h.defaultPrevented = !0;
                    },
                    target: b,
                    type: d
                });
                y = [];
                for(var p = b, k1 = !1; p.hcEvents;)Object.hasOwnProperty.call(p, "hcEvents") && p.hcEvents[d] && (y.length && (k1 = !0), y.unshift.apply(y, p.hcEvents[d])), p = Object.getPrototypeOf(p);
                k1 && y.sort(function(b1, d1) {
                    return b1.order - d1.order;
                });
                y.forEach(function(d1) {
                    !1 === d1.fn.call(b, h) && h.preventDefault();
                });
            }
            c2 && !h.defaultPrevented && c2.call(b, h);
        }
        var O = a1.charts, t = a1.doc, h = a1.win;
        (r || (r = {
        })).messages = [];
        var d;
        Math.easeInOutSine = function(b) {
            return -0.5 * (Math.cos(Math.PI * b) - 1);
        };
        var b = Array.prototype.find ? function(b1, d1) {
            return b1.find(d1);
        } : function(b1, d1) {
            var h1, y = b1.length;
            for(h1 = 0; h1 < y; h1++)if (d1(b1[h1], h1)) return b1[h1];
        };
        I({
            map: "map",
            each: "forEach",
            grep: "filter",
            reduce: "reduce",
            some: "some"
        }, function(b1, d1) {
            a1[d1] = function(h1) {
                var y;
                r(32, !1, void 0, (y = {
                }, y["Highcharts." + d1] = "use Array." + b1, y));
                return Array.prototype[b1].apply(h1, [].slice.call(arguments, 1));
            };
        });
        var p, G = function() {
            var b1 = Math.random().toString(36).substring(2, 9) + "-", d1 = 0;
            return function() {
                return "highcharts-" + (p ? "" : b1) + d1++;
            };
        }();
        h.jQuery && (h.jQuery.fn.highcharts = function() {
            var b1 = [].slice.call(arguments);
            if (this[0]) return b1[0] ? (new a1[(z(b1[0]) ? b1.shift() : "Chart")](this[0], b1[0], b1[1]), this) : O[c(this[0], "data-highcharts-chart")];
        });
        b = {
            addEvent: function(b1, d1, h1, c2) {
                (void 0) === c2 && (c2 = {
                });
                var y = "function" === typeof b1 && b1.prototype || b1;
                Object.hasOwnProperty.call(y, "hcEvents") || (y.hcEvents = {
                });
                y = y.hcEvents;
                a1.Point && b1 instanceof a1.Point && b1.series && b1.series.chart && (b1.series.chart.runTrackerClick = !0);
                var p1 = b1.addEventListener || a1.addEventListenerPolyfill;
                p1 && p1.call(b1, d1, h1, a1.supportsPassiveEvents ? {
                    passive: (void 0) === c2.passive ? -1 !== d1.indexOf("touch") : c2.passive,
                    capture: !1
                } : !1);
                y[d1] || (y[d1] = []);
                y[d1].push({
                    fn: h1,
                    order: "number" === typeof c2.order ? c2.order : Infinity
                });
                y[d1].sort(function(b2, d2) {
                    return b2.order - d2.order;
                });
                return function() {
                    D(b1, d1, h1);
                };
            },
            arrayMax: function(b1) {
                for(var d1 = b1.length, h1 = b1[0]; d1--;)b1[d1] > h1 && (h1 = b1[d1]);
                return h1;
            },
            arrayMin: function(b1) {
                for(var d1 = b1.length, h1 = b1[0]; d1--;)b1[d1] < h1 && (h1 = b1[d1]);
                return h1;
            },
            attr: c,
            clamp: function(b1, d1, h1) {
                return b1 > d1 ? b1 < h1 ? b1 : h1 : d1;
            },
            cleanRecursively: C,
            clearTimeout: function(b1) {
                g(b1) && clearTimeout(b1);
            },
            correctFloat: q,
            createElement: v,
            css: f,
            defined: g,
            destroyObjectProperties: function(b1, d1) {
                I(b1, function(h1, c2) {
                    h1 && h1 !== d1 && h1.destroy && h1.destroy();
                    delete b1[c2];
                });
            },
            discardElement: function(b1) {
                d || (d = v("div"));
                b1 && d.appendChild(b1);
                d.innerHTML = "";
            },
            erase: function(b1, d1) {
                for(var h1 = b1.length; h1--;)if (b1[h1] === d1) {
                    b1.splice(h1, 1);
                    break;
                }
            },
            error: r,
            extend: e,
            extendClass: function(b1, d1) {
                var h1 = function() {
                };
                h1.prototype = new b1;
                e(h1.prototype, d1);
                return h1;
            },
            find: b,
            fireEvent: B,
            getMagnitude: function(b1) {
                return Math.pow(10, Math.floor(Math.log(b1) / Math.LN10));
            },
            getNestedProperty: function(b1, d1) {
                for(b1 = b1.split("."); b1.length && g(d1);){
                    var c2 = b1.shift();
                    if ("undefined" === typeof c2 || "__proto__" === c2) return;
                    d1 = d1[c2];
                    if (!g(d1) || "function" === typeof d1 || "number" === typeof d1.nodeType || d1 === h) return;
                }
                return d1;
            },
            getStyle: k,
            inArray: function(b1, d1, h1) {
                r(32, !1, void 0, {
                    "Highcharts.inArray": "use Array.indexOf"
                });
                return d1.indexOf(b1, h1);
            },
            isArray: x,
            isClass: n,
            isDOMElement: u,
            isFunction: function(b1) {
                return "function" === typeof b1;
            },
            isNumber: m,
            isObject: J,
            isString: z,
            keys: function(b1) {
                r(32, !1, void 0, {
                    "Highcharts.keys": "use Object.keys"
                });
                return Object.keys(b1);
            },
            merge: function() {
                var b1, d1 = arguments, h1 = {
                }, c3 = function(b2, d2) {
                    "object" !== typeof b2 && (b2 = {
                    });
                    I(d2, function(h2, H) {
                        "__proto__" !== H && "constructor" !== H && (!J(h2, !0) || n(h2) || u(h2) ? b2[H] = d2[H] : b2[H] = c3(b2[H] || {
                        }, h2));
                    });
                    return b2;
                };
                !0 === d1[0] && (h1 = d1[1], d1 = Array.prototype.slice.call(d1, 2));
                var p1 = d1.length;
                for(b1 = 0; b1 < p1; b1++)h1 = c3(h1, d1[b1]);
                return h1;
            },
            normalizeTickInterval: function(b1, d1, h1, c3, p1) {
                var e2 = b1;
                h1 = l(h1, 1);
                var k2 = b1 / h1;
                d1 || (d1 = p1 ? [
                    1,
                    1.2,
                    1.5,
                    2,
                    2.5,
                    3,
                    4,
                    5,
                    6,
                    8,
                    10
                ] : [
                    1,
                    2,
                    2.5,
                    5,
                    10
                ], !1 === c3 && (1 === h1 ? d1 = d1.filter(function(b2) {
                    return 0 === b2 % 1;
                }) : 0.1 >= h1 && (d1 = [
                    1 / h1
                ])));
                for(c3 = 0; c3 < d1.length && !(e2 = d1[c3], p1 && e2 * h1 >= b1 || !p1 && k2 <= (d1[c3] + (d1[c3 + 1] || d1[c3])) / 2); c3++);
                return e2 = q(e2 * h1, -Math.round(Math.log(0.001) / Math.LN10));
            },
            objectEach: I,
            offset: function(b1) {
                var d1 = t.documentElement;
                b1 = b1.parentElement || b1.parentNode ? b1.getBoundingClientRect() : {
                    top: 0,
                    left: 0,
                    width: 0,
                    height: 0
                };
                return {
                    top: b1.top + (h.pageYOffset || d1.scrollTop) - (d1.clientTop || 0),
                    left: b1.left + (h.pageXOffset || d1.scrollLeft) - (d1.clientLeft || 0),
                    width: b1.width,
                    height: b1.height
                };
            },
            pad: function(b1, d1, h1) {
                return Array((d1 || 2) + 1 - String(b1).replace("-", "").length).join(h1 || "0") + b1;
            },
            pick: l,
            pInt: E,
            relativeLength: function(b1, d1, h1) {
                return /%$/.test(b1) ? d1 * parseFloat(b1) / 100 + (h1 || 0) : parseFloat(b1);
            },
            removeEvent: D,
            splat: function(b1) {
                return x(b1) ? b1 : [
                    b1
                ];
            },
            stableSort: function(b1, d1) {
                var h1 = b1.length, c3, p1;
                for(p1 = 0; p1 < h1; p1++)b1[p1].safeI = p1;
                b1.sort(function(b2, h2) {
                    c3 = d1(b2, h2);
                    return 0 === c3 ? b2.safeI - h2.safeI : c3;
                });
                for(p1 = 0; p1 < h1; p1++)delete b1[p1].safeI;
            },
            syncTimeout: function(b1, d1, h1) {
                if (0 < d1) return setTimeout(b1, d1, h1);
                b1.call(0, h1);
                return -1;
            },
            timeUnits: {
                millisecond: 1,
                second: 1000,
                minute: 60000,
                hour: 3600000,
                day: 86400000,
                week: 604800000,
                month: 2419200000,
                year: 31449600000
            },
            uniqueKey: G,
            useSerialIds: function(b1) {
                return p = l(b1, p);
            },
            wrap: function(b1, d1, h1) {
                var c3 = b1[d1];
                b1[d1] = function() {
                    var b2 = Array.prototype.slice.call(arguments), d2 = arguments, p1 = this;
                    p1.proceed = function() {
                        c3.apply(p1, arguments.length ? arguments : d2);
                    };
                    b2.unshift(c3);
                    b2 = h1.apply(this, b2);
                    p1.proceed = null;
                    return b2;
                };
            }
        };
        return b;
    });
    M(a3, "Core/Color/Palette.js", [], function() {
        return {
            colors: "#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" "),
            backgroundColor: "#ffffff",
            neutralColor100: "#000000",
            neutralColor80: "#333333",
            neutralColor60: "#666666",
            neutralColor40: "#999999",
            neutralColor20: "#cccccc",
            neutralColor10: "#e6e6e6",
            neutralColor5: "#f2f2f2",
            neutralColor3: "#f7f7f7",
            highlightColor100: "#003399",
            highlightColor80: "#335cad",
            highlightColor60: "#6685c2",
            highlightColor20: "#ccd6eb",
            highlightColor10: "#e6ebf5",
            positiveColor: "#06b535",
            negativeColor: "#f21313"
        };
    });
    M(a3, "Core/Chart/ChartDefaults.js", [
        a3["Core/Color/Palette.js"]
    ], function(a1) {
        return {
            panning: {
                enabled: !1,
                type: "x"
            },
            styledMode: !1,
            borderRadius: 0,
            colorCount: 10,
            defaultSeriesType: "line",
            ignoreHiddenSeries: !0,
            spacing: [
                10,
                10,
                15,
                10
            ],
            resetZoomButton: {
                theme: {
                    zIndex: 6
                },
                position: {
                    align: "right",
                    x: -10,
                    y: 10
                }
            },
            zoomBySingleTouch: !1,
            width: null,
            height: null,
            borderColor: a1.highlightColor80,
            backgroundColor: a1.backgroundColor,
            plotBorderColor: a1.neutralColor20
        };
    });
    M(a3, "Core/Color/Color.js", [
        a3["Core/Globals.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w) {
        var r = w.isNumber, E = w.merge, z = w.pInt;
        w = (function() {
            function x(r1) {
                this.rgba = [
                    NaN,
                    NaN,
                    NaN,
                    NaN
                ];
                this.input = r1;
                var u = a1.Color;
                if (u && u !== x) return new u(r1);
                if (!(this instanceof x)) return new x(r1);
                this.init(r1);
            }
            x.parse = function(a2) {
                return a2 ? new x(a2) : x.None;
            };
            x.prototype.init = function(a2) {
                var u;
                if ("object" === typeof a2 && "undefined" !== typeof a2.stops) this.stops = a2.stops.map(function(c3) {
                    return new x(c3[1]);
                });
                else if ("string" === typeof a2) {
                    this.input = a2 = x.names[a2.toLowerCase()] || a2;
                    if ("#" === a2.charAt(0)) {
                        var n = a2.length;
                        var m = parseInt(a2.substr(1), 16);
                        7 === n ? u = [
                            (m & 16711680) >> 16,
                            (m & 65280) >> 8,
                            m & 255,
                            1
                        ] : 4 === n && (u = [
                            (m & 3840) >> 4 | (m & 3840) >> 8,
                            (m & 240) >> 4 | m & 240,
                            (m & 15) << 4 | m & 15,
                            1
                        ]);
                    }
                    if (!u) for(m = x.parsers.length; (m--) && !u;){
                        var g = x.parsers[m];
                        (n = g.regex.exec(a2)) && (u = g.parse(n));
                    }
                }
                u && (this.rgba = u);
            };
            x.prototype.get = function(a2) {
                var u = this.input, n = this.rgba;
                if ("object" === typeof u && "undefined" !== typeof this.stops) {
                    var m = E(u);
                    m.stops = [].slice.call(m.stops);
                    this.stops.forEach(function(g, c3) {
                        m.stops[c3] = [
                            m.stops[c3][0],
                            g.get(a2)
                        ];
                    });
                    return m;
                }
                return n && r(n[0]) ? "rgb" === a2 || !a2 && 1 === n[3] ? "rgb(" + n[0] + "," + n[1] + "," + n[2] + ")" : "a" === a2 ? "" + n[3] : "rgba(" + n.join(",") + ")" : u;
            };
            x.prototype.brighten = function(a2) {
                var u = this.rgba;
                if (this.stops) this.stops.forEach(function(m) {
                    m.brighten(a2);
                });
                else if (r(a2) && 0 !== a2) for(var n = 0; 3 > n; n++)u[n] += z(255 * a2), 0 > u[n] && (u[n] = 0), 255 < u[n] && (u[n] = 255);
                return this;
            };
            x.prototype.setOpacity = function(a2) {
                this.rgba[3] = a2;
                return this;
            };
            x.prototype.tweenTo = function(a2, u) {
                var n = this.rgba, m = a2.rgba;
                if (!r(n[0]) || !r(m[0])) return a2.input || "none";
                a2 = 1 !== m[3] || 1 !== n[3];
                return (a2 ? "rgba(" : "rgb(") + Math.round(m[0] + (n[0] - m[0]) * (1 - u)) + "," + Math.round(m[1] + (n[1] - m[1]) * (1 - u)) + "," + Math.round(m[2] + (n[2] - m[2]) * (1 - u)) + (a2 ? "," + (m[3] + (n[3] - m[3]) * (1 - u)) : "") + ")";
            };
            x.names = {
                white: "#ffffff",
                black: "#000000"
            };
            x.parsers = [
                {
                    regex: /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,
                    parse: function(a2) {
                        return [
                            z(a2[1]),
                            z(a2[2]),
                            z(a2[3]),
                            parseFloat(a2[4], 10)
                        ];
                    }
                },
                {
                    regex: /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,
                    parse: function(a2) {
                        return [
                            z(a2[1]),
                            z(a2[2]),
                            z(a2[3]),
                            1
                        ];
                    }
                }
            ];
            x.None = new x("");
            return x;
        })();
        return w;
    });
    M(a3, "Core/Time.js", [
        a3["Core/Globals.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w) {
        var r = a1.win, E = w.defined, z = w.error, x = w.extend, J = w.isObject, u = w.merge, n = w.objectEach, m = w.pad, g = w.pick, c3 = w.splat, e2 = w.timeUnits, l = a1.isSafari && r.Intl && r.Intl.DateTimeFormat.prototype.formatRange, f = a1.isSafari && r.Intl && !r.Intl.DateTimeFormat.prototype.formatRange;
        w = (function() {
            function v(c4) {
                this.options = {
                };
                this.variableTimezone = this.useUTC = !1;
                this.Date = r.Date;
                this.getTimezoneOffset = this.timezoneOffsetFunction();
                this.update(c4);
            }
            v.prototype.get = function(c4, e3) {
                if (this.variableTimezone || this.timezoneOffset) {
                    var k2 = e3.getTime(), f1 = k2 - this.getTimezoneOffset(e3);
                    e3.setTime(f1);
                    c4 = e3["getUTC" + c4]();
                    e3.setTime(k2);
                    return c4;
                }
                return this.useUTC ? e3["getUTC" + c4]() : e3["get" + c4]();
            };
            v.prototype.set = function(c4, e3, f2) {
                if (this.variableTimezone || this.timezoneOffset) {
                    if ("Milliseconds" === c4 || "Seconds" === c4 || "Minutes" === c4 && 0 === this.getTimezoneOffset(e3) % 3600000) return e3["setUTC" + c4](f2);
                    var k3 = this.getTimezoneOffset(e3);
                    k3 = e3.getTime() - k3;
                    e3.setTime(k3);
                    e3["setUTC" + c4](f2);
                    c4 = this.getTimezoneOffset(e3);
                    k3 = e3.getTime() + c4;
                    return e3.setTime(k3);
                }
                return this.useUTC || l && "FullYear" === c4 ? e3["setUTC" + c4](f2) : e3["set" + c4](f2);
            };
            v.prototype.update = function(c4) {
                var e3 = g(c4 && c4.useUTC, !0);
                this.options = c4 = u(!0, this.options || {
                }, c4);
                this.Date = c4.Date || r.Date || Date;
                this.timezoneOffset = (this.useUTC = e3) && c4.timezoneOffset;
                this.getTimezoneOffset = this.timezoneOffsetFunction();
                this.variableTimezone = e3 && !(!c4.getTimezoneOffset && !c4.timezone);
            };
            v.prototype.makeTime = function(c4, e3, l1, v1, B, a2) {
                if (this.useUTC) {
                    var k4 = this.Date.UTC.apply(0, arguments);
                    var h = this.getTimezoneOffset(k4);
                    k4 += h;
                    var d = this.getTimezoneOffset(k4);
                    h !== d ? k4 += d - h : h - 3600000 !== this.getTimezoneOffset(k4 - 3600000) || f || (k4 -= 3600000);
                } else k4 = new this.Date(c4, e3, g(l1, 1), g(v1, 0), g(B, 0), g(a2, 0)).getTime();
                return k4;
            };
            v.prototype.timezoneOffsetFunction = function() {
                var c4 = this, e3 = this.options, f2 = e3.moment || r.moment;
                if (!this.useUTC) return function(c5) {
                    return 60000 * new Date(c5.toString()).getTimezoneOffset();
                };
                if (e3.timezone) {
                    if (f2) return function(c5) {
                        return 60000 * -f2.tz(c5, e3.timezone).utcOffset();
                    };
                    z(25);
                }
                return this.useUTC && e3.getTimezoneOffset ? function(c5) {
                    return 60000 * e3.getTimezoneOffset(c5.valueOf());
                } : function() {
                    return 60000 * (c4.timezoneOffset || 0);
                };
            };
            v.prototype.dateFormat = function(c4, e3, f2) {
                if (!E(e3) || isNaN(e3)) return a1.defaultOptions.lang && a1.defaultOptions.lang.invalidDate || "";
                c4 = g(c4, "%Y-%m-%d %H:%M:%S");
                var k5 = this, l1 = new this.Date(e3), q = this.get("Hours", l1), t = this.get("Day", l1), h = this.get("Date", l1), d = this.get("Month", l1), b = this.get("FullYear", l1), p = a1.defaultOptions.lang, G = p && p.weekdays, y = p && p.shortWeekdays;
                l1 = x({
                    a: y ? y[t] : G[t].substr(0, 3),
                    A: G[t],
                    d: m(h),
                    e: m(h, 2, " "),
                    w: t,
                    b: p.shortMonths[d],
                    B: p.months[d],
                    m: m(d + 1),
                    o: d + 1,
                    y: b.toString().substr(2, 2),
                    Y: b,
                    H: m(q),
                    k: q,
                    I: m(q % 12 || 12),
                    l: q % 12 || 12,
                    M: m(this.get("Minutes", l1)),
                    p: 12 > q ? "AM" : "PM",
                    P: 12 > q ? "am" : "pm",
                    S: m(l1.getSeconds()),
                    L: m(Math.floor(e3 % 1000), 3)
                }, a1.dateFormats);
                n(l1, function(b1, d1) {
                    for(; -1 !== c4.indexOf("%" + d1);)c4 = c4.replace("%" + d1, "function" === typeof b1 ? b1.call(k5, e3) : b1);
                });
                return f2 ? c4.substr(0, 1).toUpperCase() + c4.substr(1) : c4;
            };
            v.prototype.resolveDTLFormat = function(e3) {
                return J(e3, !0) ? e3 : (e3 = c3(e3), {
                    main: e3[0],
                    from: e3[1],
                    to: e3[2]
                });
            };
            v.prototype.getTimeTicks = function(c4, k5, f2, l1) {
                var q = this, v1 = [], t = {
                }, h = new q.Date(k5), d = c4.unitRange, b = c4.count || 1, p;
                l1 = g(l1, 1);
                if (E(k5)) {
                    q.set("Milliseconds", h, d >= e2.second ? 0 : b * Math.floor(q.get("Milliseconds", h) / b));
                    d >= e2.second && q.set("Seconds", h, d >= e2.minute ? 0 : b * Math.floor(q.get("Seconds", h) / b));
                    d >= e2.minute && q.set("Minutes", h, d >= e2.hour ? 0 : b * Math.floor(q.get("Minutes", h) / b));
                    d >= e2.hour && q.set("Hours", h, d >= e2.day ? 0 : b * Math.floor(q.get("Hours", h) / b));
                    d >= e2.day && q.set("Date", h, d >= e2.month ? 1 : Math.max(1, b * Math.floor(q.get("Date", h) / b)));
                    if (d >= e2.month) {
                        q.set("Month", h, d >= e2.year ? 0 : b * Math.floor(q.get("Month", h) / b));
                        var G = q.get("FullYear", h);
                    }
                    d >= e2.year && q.set("FullYear", h, G - G % b);
                    d === e2.week && (G = q.get("Day", h), q.set("Date", h, q.get("Date", h) - G + l1 + (G < l1 ? -7 : 0)));
                    G = q.get("FullYear", h);
                    l1 = q.get("Month", h);
                    var y = q.get("Date", h), a2 = q.get("Hours", h);
                    k5 = h.getTime();
                    !q.variableTimezone && q.useUTC || !E(f2) || (p = f2 - k5 > 4 * e2.month || q.getTimezoneOffset(k5) !== q.getTimezoneOffset(f2));
                    k5 = h.getTime();
                    for(h = 1; k5 < f2;)v1.push(k5), k5 = d === e2.year ? q.makeTime(G + h * b, 0) : d === e2.month ? q.makeTime(G, l1 + h * b) : !p || d !== e2.day && d !== e2.week ? p && d === e2.hour && 1 < b ? q.makeTime(G, l1, y, a2 + h * b) : k5 + d * b : q.makeTime(G, l1, y + h * b * (d === e2.day ? 1 : 7)), h++;
                    v1.push(k5);
                    d <= e2.hour && 10000 > v1.length && v1.forEach(function(b1) {
                        0 === b1 % 1800000 && "000000000" === q.dateFormat("%H%M%S%L", b1) && (t[b1] = "day");
                    });
                }
                v1.info = x(c4, {
                    higherRanks: t,
                    totalRange: d * b
                });
                return v1;
            };
            v.prototype.getDateFormat = function(c4, k5, f2, g1) {
                var l1 = this.dateFormat("%m-%d %H:%M:%S.%L", k5), q = {
                    millisecond: 15,
                    second: 12,
                    minute: 9,
                    hour: 6,
                    day: 3
                }, t = "millisecond";
                for(h in e2){
                    if (c4 === e2.week && +this.dateFormat("%w", k5) === f2 && "00:00:00.000" === l1.substr(6)) {
                        var h = "week";
                        break;
                    }
                    if (e2[h] > c4) {
                        h = t;
                        break;
                    }
                    if (q[h] && l1.substr(q[h]) !== "01-01 00:00:00.000".substr(q[h])) break;
                    "week" !== h && (t = h);
                }
                if (h) var d = this.resolveDTLFormat(g1[h]).main;
                return d;
            };
            return v;
        })();
        return w;
    });
    M(a3, "Core/DefaultOptions.js", [
        a3["Core/Chart/ChartDefaults.js"],
        a3["Core/Color/Color.js"],
        a3["Core/Globals.js"],
        a3["Core/Color/Palette.js"],
        a3["Core/Time.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w, C, E, z, x) {
        w = w.parse;
        var r = x.merge, u = {
            colors: E.colors,
            symbols: [
                "circle",
                "diamond",
                "square",
                "triangle",
                "triangle-down"
            ],
            lang: {
                loading: "Loading...",
                months: "January February March April May June July August September October November December".split(" "),
                shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                weekdays: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                decimalPoint: ".",
                numericSymbols: "kMGTPE".split(""),
                resetZoom: "Reset zoom",
                resetZoomTitle: "Reset zoom level 1:1",
                thousandsSep: " "
            },
            global: {
            },
            time: {
                Date: void 0,
                getTimezoneOffset: void 0,
                timezone: void 0,
                timezoneOffset: 0,
                useUTC: !0
            },
            chart: a1,
            title: {
                text: "Chart title",
                align: "center",
                margin: 15,
                widthAdjust: -44
            },
            subtitle: {
                text: "",
                align: "center",
                widthAdjust: -44
            },
            caption: {
                margin: 15,
                text: "",
                align: "left",
                verticalAlign: "bottom"
            },
            plotOptions: {
            },
            labels: {
                style: {
                    position: "absolute",
                    color: E.neutralColor80
                }
            },
            legend: {
                enabled: !0,
                align: "center",
                alignColumns: !0,
                className: "highcharts-no-tooltip",
                layout: "horizontal",
                labelFormatter: function() {
                    return this.name;
                },
                borderColor: E.neutralColor40,
                borderRadius: 0,
                navigation: {
                    activeColor: E.highlightColor100,
                    inactiveColor: E.neutralColor20
                },
                itemStyle: {
                    color: E.neutralColor80,
                    cursor: "pointer",
                    fontSize: "12px",
                    fontWeight: "bold",
                    textOverflow: "ellipsis"
                },
                itemHoverStyle: {
                    color: E.neutralColor100
                },
                itemHiddenStyle: {
                    color: E.neutralColor20
                },
                shadow: !1,
                itemCheckboxStyle: {
                    position: "absolute",
                    width: "13px",
                    height: "13px"
                },
                squareSymbol: !0,
                symbolPadding: 5,
                verticalAlign: "bottom",
                x: 0,
                y: 0,
                title: {
                    style: {
                        fontWeight: "bold"
                    }
                }
            },
            loading: {
                labelStyle: {
                    fontWeight: "bold",
                    position: "relative",
                    top: "45%"
                },
                style: {
                    position: "absolute",
                    backgroundColor: E.backgroundColor,
                    opacity: 0.5,
                    textAlign: "center"
                }
            },
            tooltip: {
                enabled: !0,
                animation: C.svg,
                borderRadius: 3,
                dateTimeLabelFormats: {
                    millisecond: "%A, %b %e, %H:%M:%S.%L",
                    second: "%A, %b %e, %H:%M:%S",
                    minute: "%A, %b %e, %H:%M",
                    hour: "%A, %b %e, %H:%M",
                    day: "%A, %b %e, %Y",
                    week: "Week from %A, %b %e, %Y",
                    month: "%B %Y",
                    year: "%Y"
                },
                footerFormat: "",
                headerShape: "callout",
                hideDelay: 500,
                padding: 8,
                shape: "callout",
                shared: !1,
                snap: C.isTouchDevice ? 25 : 10,
                headerFormat: '<span style="font-size: 10px">{point.key}</span><br/>',
                pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',
                backgroundColor: w(E.neutralColor3).setOpacity(0.85).get(),
                borderWidth: 1,
                shadow: !0,
                stickOnContact: !1,
                style: {
                    color: E.neutralColor80,
                    cursor: "default",
                    fontSize: "12px",
                    whiteSpace: "nowrap"
                },
                useHTML: !1
            },
            credits: {
                enabled: !0,
                href: "https://www.highcharts.com?credits",
                position: {
                    align: "right",
                    x: -10,
                    verticalAlign: "bottom",
                    y: -5
                },
                style: {
                    cursor: "pointer",
                    color: E.neutralColor40,
                    fontSize: "9px"
                },
                text: "Highcharts.com"
            }
        };
        u.chart.styledMode = !1;
        var n = new z(r(u.global, u.time));
        a1 = {
            defaultOptions: u,
            defaultTime: n,
            getOptions: function() {
                return u;
            },
            setOptions: function(a3) {
                r(!0, u, a3);
                if (a3.time || a3.global) C.time ? C.time.update(r(u.global, u.time, a3.global, a3.time)) : C.time = n;
                return u;
            }
        };
        return a1;
    });
    M(a3, "Core/Animation/Fx.js", [
        a3["Core/Color/Color.js"],
        a3["Core/Globals.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w, C) {
        var r = a1.parse, z = w.win, x = C.isNumber, J = C.objectEach;
        return (function() {
            function a3(a4, m, g) {
                this.pos = NaN;
                this.options = m;
                this.elem = a4;
                this.prop = g;
            }
            a3.prototype.dSetter = function() {
                var a4 = this.paths, m = a4 && a4[0];
                a4 = a4 && a4[1];
                var g = this.now || 0, c3 = [];
                if (1 !== g && m && a4) {
                    if (m.length === a4.length && 1 > g) for(var e2 = 0; e2 < a4.length; e2++){
                        for(var l = m[e2], f2 = a4[e2], v = [], q = 0; q < f2.length; q++){
                            var k5 = l[q], I = f2[q];
                            x(k5) && x(I) && ("A" !== f2[0] || 4 !== q && 5 !== q) ? v[q] = k5 + g * (I - k5) : v[q] = I;
                        }
                        c3.push(v);
                    }
                    else c3 = a4;
                } else c3 = this.toD || [];
                this.elem.attr("d", c3, void 0, !0);
            };
            a3.prototype.update = function() {
                var a4 = this.elem, m = this.prop, g = this.now, c3 = this.options.step;
                if (this[m + "Setter"]) this[m + "Setter"]();
                else a4.attr ? a4.element && a4.attr(m, g, null, !0) : a4.style[m] = g + this.unit;
                c3 && c3.call(a4, g, this);
            };
            a3.prototype.run = function(n, m, g) {
                var c3 = this, e3 = c3.options, l = function(e4) {
                    return l.stopped ? !1 : c3.step(e4);
                }, f3 = z.requestAnimationFrame || function(c4) {
                    setTimeout(c4, 13);
                }, v = function() {
                    for(var c4 = 0; c4 < a3.timers.length; c4++)a3.timers[c4]() || a3.timers.splice(c4--, 1);
                    a3.timers.length && f3(v);
                };
                n !== m || this.elem["forceAnimate:" + this.prop] ? (this.startTime = +new Date, this.start = n, this.end = m, this.unit = g, this.now = this.start, this.pos = 0, l.elem = this.elem, l.prop = this.prop, l() && 1 === a3.timers.push(l) && f3(v)) : (delete e3.curAnim[this.prop], e3.complete && 0 === Object.keys(e3.curAnim).length && e3.complete.call(this.elem));
            };
            a3.prototype.step = function(a4) {
                var m = +new Date, g = this.options, c3 = this.elem, e3 = g.complete, l = g.duration, f3 = g.curAnim;
                if (c3.attr && !c3.element) a4 = !1;
                else if (a4 || m >= l + this.startTime) {
                    this.now = this.end;
                    this.pos = 1;
                    this.update();
                    var v = f3[this.prop] = !0;
                    J(f3, function(c4) {
                        !0 !== c4 && (v = !1);
                    });
                    v && e3 && e3.call(c3);
                    a4 = !1;
                } else this.pos = g.easing((m - this.startTime) / l), this.now = this.start + (this.end - this.start) * this.pos, this.update(), a4 = !0;
                return a4;
            };
            a3.prototype.initPath = function(a4, m, g) {
                function c3(c4, e3) {
                    for(; c4.length < D;){
                        var f3 = c4[0], h = e3[D - c4.length];
                        h && "M" === f3[0] && (c4[0] = "C" === h[0] ? [
                            "C",
                            f3[1],
                            f3[2],
                            f3[1],
                            f3[2],
                            f3[1],
                            f3[2]
                        ] : [
                            "L",
                            f3[1],
                            f3[2]
                        ]);
                        c4.unshift(f3);
                        v && (f3 = c4.pop(), c4.push(c4[c4.length - 1], f3));
                    }
                }
                function e3(c4, e4) {
                    for(; c4.length < D;)if (e4 = c4[Math.floor(c4.length / q) - 1].slice(), "C" === e4[0] && (e4[1] = e4[5], e4[2] = e4[6]), v) {
                        var f4 = c4[Math.floor(c4.length / q)].slice();
                        c4.splice(c4.length / 2, 0, e4, f4);
                    } else c4.push(e4);
                }
                var l = a4.startX, f5 = a4.endX;
                g = g.slice();
                var v = a4.isArea, q = v ? 2 : 1;
                m = m && m.slice();
                if (!m) return [
                    g,
                    g
                ];
                if (l && f5 && f5.length) {
                    for(a4 = 0; a4 < l.length; a4++)if (l[a4] === f5[0]) {
                        var k6 = a4;
                        break;
                    } else if (l[0] === f5[f5.length - l.length + a4]) {
                        k6 = a4;
                        var I = !0;
                        break;
                    } else if (l[l.length - 1] === f5[f5.length - l.length + a4]) {
                        k6 = l.length - a4;
                        break;
                    }
                    "undefined" === typeof k6 && (m = []);
                }
                if (m.length && x(k6)) {
                    var D = g.length + k6 * q;
                    I ? (c3(m, g), e3(g, m)) : (c3(g, m), e3(m, g));
                }
                return [
                    m,
                    g
                ];
            };
            a3.prototype.fillSetter = function() {
                a3.prototype.strokeSetter.apply(this, arguments);
            };
            a3.prototype.strokeSetter = function() {
                this.elem.attr(this.prop, r(this.start).tweenTo(r(this.end), this.pos), null, !0);
            };
            a3.timers = [];
            return a3;
        })();
    });
    M(a3, "Core/Animation/AnimationUtilities.js", [
        a3["Core/Animation/Fx.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w) {
        function r(c3) {
            return n(c3) ? m({
                duration: 500,
                defer: 0
            }, c3) : {
                duration: c3 ? 500 : 0,
                defer: 0
            };
        }
        function E(c3, g) {
            for(var e3 = a1.timers.length; e3--;)a1.timers[e3].elem !== c3 || g && g !== a1.timers[e3].prop || (a1.timers[e3].stopped = !0);
        }
        var z = w.defined, x = w.getStyle, J = w.isArray, u = w.isNumber, n = w.isObject, m = w.merge, g = w.objectEach, c3 = w.pick;
        return {
            animate: function(c4, l, f5) {
                var e3, q = "", k7, I;
                if (!n(f5)) {
                    var D = arguments;
                    f5 = {
                        duration: D[2],
                        easing: D[3],
                        complete: D[4]
                    };
                }
                u(f5.duration) || (f5.duration = 400);
                f5.easing = "function" === typeof f5.easing ? f5.easing : Math[f5.easing] || Math.easeInOutSine;
                f5.curAnim = m(l);
                g(l, function(g1, v) {
                    E(c4, v);
                    I = new a1(c4, f5, v);
                    k7 = void 0;
                    "d" === v && J(l.d) ? (I.paths = I.initPath(c4, c4.pathArray, l.d), I.toD = l.d, e3 = 0, k7 = 1) : c4.attr ? e3 = c4.attr(v) : (e3 = parseFloat(x(c4, v)) || 0, "opacity" !== v && (q = "px"));
                    k7 || (k7 = g1);
                    "string" === typeof k7 && k7.match("px") && (k7 = k7.replace(/px/g, ""));
                    I.run(e3, k7, q);
                });
            },
            animObject: r,
            getDeferredAnimation: function(c4, g1, f5) {
                var e3 = r(g1), a3 = 0, k7 = 0;
                (f5 ? [
                    f5
                ] : c4.series).forEach(function(c5) {
                    c5 = r(c5.options.animation);
                    a3 = g1 && z(g1.defer) ? e3.defer : Math.max(a3, c5.duration + c5.defer);
                    k7 = Math.min(e3.duration, c5.duration);
                });
                c4.renderer.forExport && (a3 = 0);
                return {
                    defer: Math.max(0, a3 - k7),
                    duration: Math.min(a3, k7)
                };
            },
            setAnimation: function(e3, g1) {
                g1.renderer.globalAnimation = c3(e3, g1.options.chart.animation, !0);
            },
            stop: E
        };
    });
    M(a3, "Core/Renderer/HTML/AST.js", [
        a3["Core/Globals.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w) {
        var r = a1.SVG_NS, E = w.attr, z = w.createElement, x = w.discardElement, J = w.error, u = w.isString, n = w.objectEach, m = w.splat;
        try {
            var g = !!(new DOMParser).parseFromString("", "text/html");
        } catch (c3) {
            g = !1;
        }
        w = (function() {
            function c3(c4) {
                this.nodes = "string" === typeof c4 ? this.parseMarkup(c4) : c4;
            }
            c3.filterUserAttributes = function(e3) {
                n(e3, function(g1, f5) {
                    var a3 = !0;
                    -1 === c3.allowedAttributes.indexOf(f5) && (a3 = !1);
                    -1 !== [
                        "background",
                        "dynsrc",
                        "href",
                        "lowsrc",
                        "src"
                    ].indexOf(f5) && (a3 = u(g1) && c3.allowedReferences.some(function(c4) {
                        return 0 === g1.indexOf(c4);
                    }));
                    a3 || (J("Highcharts warning: Invalid attribute '" + f5 + "' in config"), delete e3[f5]);
                });
                return e3;
            };
            c3.setElementHTML = function(e3, g1) {
                e3.innerHTML = "";
                g1 && new c3(g1).addToDOM(e3);
            };
            c3.prototype.addToDOM = function(e3) {
                function g1(e4, l) {
                    var f5;
                    m(e4).forEach(function(e5) {
                        var k7 = e5.tagName, q = e5.textContent ? a1.doc.createTextNode(e5.textContent) : void 0;
                        if (k7) {
                            if ("#text" === k7) var v = q;
                            else if (-1 !== c3.allowedTags.indexOf(k7)) {
                                k7 = a1.doc.createElementNS("svg" === k7 ? r : l.namespaceURI || r, k7);
                                var m1 = e5.attributes || {
                                };
                                n(e5, function(c4, h) {
                                    "tagName" !== h && "attributes" !== h && "children" !== h && "textContent" !== h && (m1[h] = c4);
                                });
                                E(k7, c3.filterUserAttributes(m1));
                                q && k7.appendChild(q);
                                g1(e5.children || [], k7);
                                v = k7;
                            } else J("Highcharts warning: Invalid tagName '" + k7 + "' in config");
                        }
                        v && l.appendChild(v);
                        f5 = v;
                    });
                    return f5;
                }
                return g1(this.nodes, e3);
            };
            c3.prototype.parseMarkup = function(c4) {
                var e3 = [];
                c4 = c4.trim();
                if (g) c4 = (new DOMParser).parseFromString(c4, "text/html");
                else {
                    var f5 = z("div");
                    f5.innerHTML = c4;
                    c4 = {
                        body: f5
                    };
                }
                var a3 = function(c5, e4) {
                    var f6 = c5.nodeName.toLowerCase(), k7 = {
                        tagName: f6
                    };
                    "#text" === f6 && (k7.textContent = c5.textContent || "");
                    if (f6 = c5.attributes) {
                        var g1 = {
                        };
                        [].forEach.call(f6, function(c6) {
                            g1[c6.name] = c6.value;
                        });
                        k7.attributes = g1;
                    }
                    if (c5.childNodes.length) {
                        var l = [];
                        [].forEach.call(c5.childNodes, function(c6) {
                            a3(c6, l);
                        });
                        l.length && (k7.children = l);
                    }
                    e4.push(k7);
                };
                [].forEach.call(c4.body.childNodes, function(c5) {
                    return a3(c5, e3);
                });
                f5 && x(f5);
                return e3;
            };
            c3.allowedAttributes = "aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class clip-path color colspan cx cy d dx dy disabled fill height href id in markerHeight markerWidth offset opacity orient padding paddingLeft paddingRight patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style tableValues result rowspan summary target tabindex text-align textAnchor textLength type valign width x x1 x2 y y1 y2 zIndex".split(" ");
            c3.allowedReferences = "https:// http:// mailto: / ../ ./ #".split(" ");
            c3.allowedTags = "a b br button caption circle clipPath code dd defs div dl dt em feComponentTransfer feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup svg table text thead tbody tspan td th tr u ul #text".split(" ");
            return c3;
        })();
        return w;
    });
    M(a3, "Core/FormatUtilities.js", [
        a3["Core/DefaultOptions.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w) {
        function r(a3, g2, c3, e3) {
            a3 = +a3 || 0;
            g2 = +g2;
            var l = E.lang, f6 = (a3.toString().split(".")[1] || "").split("e")[0].length, v = a3.toString().split("e"), q = g2;
            if (-1 === g2) g2 = Math.min(f6, 20);
            else if (!J(g2)) g2 = 2;
            else if (g2 && v[1] && 0 > v[1]) {
                var k7 = g2 + +v[1];
                0 <= k7 ? (v[0] = (+v[0]).toExponential(k7).split("e")[0], g2 = k7) : (v[0] = v[0].split(".")[0] || 0, a3 = 20 > g2 ? (v[0] * Math.pow(10, v[1])).toFixed(g2) : 0, v[1] = 0);
            }
            k7 = (Math.abs(v[1] ? v[0] : a3) + Math.pow(10, -Math.max(g2, f6) - 1)).toFixed(g2);
            f6 = String(n(k7));
            var m2 = 3 < f6.length ? f6.length % 3 : 0;
            c3 = u(c3, l.decimalPoint);
            e3 = u(e3, l.thousandsSep);
            a3 = (0 > a3 ? "-" : "") + (m2 ? f6.substr(0, m2) + e3 : "");
            a3 = 0 > +v[1] && !q ? "0" : a3 + f6.substr(m2).replace(/(\d{3})(?=\d)/g, "$1" + e3);
            g2 && (a3 += c3 + k7.slice(-g2));
            v[1] && 0 !== +a3 && (a3 += "e" + v[1]);
            return a3;
        }
        var E = a1.defaultOptions, z = a1.defaultTime, x = w.getNestedProperty, J = w.isNumber, u = w.pick, n = w.pInt;
        return {
            dateFormat: function(a3, g2, c3) {
                return z.dateFormat(a3, g2, c3);
            },
            format: function(a3, g2, c3) {
                var e3 = "{", l = !1, f6 = /f$/, v = /\.([0-9])/, q = E.lang, k8 = c3 && c3.time || z;
                c3 = c3 && c3.numberFormatter || r;
                for(var m2 = []; a3;){
                    var D = a3.indexOf(e3);
                    if (-1 === D) break;
                    var B = a3.slice(0, D);
                    if (l) {
                        B = B.split(":");
                        e3 = x(B.shift() || "", g2);
                        if (B.length && "number" === typeof e3) {
                            if (B = B.join(":"), f6.test(B)) {
                                var u1 = parseInt((B.match(v) || [
                                    "",
                                    "-1"
                                ])[1], 10);
                                null !== e3 && (e3 = c3(e3, u1, q.decimalPoint, -1 < B.indexOf(",") ? q.thousandsSep : ""));
                            } else e3 = k8.dateFormat(B, e3);
                        }
                        m2.push(e3);
                    } else m2.push(B);
                    a3 = a3.slice(D + 1);
                    e3 = (l = !l) ? "}" : "{";
                }
                m2.push(a3);
                return m2.join("");
            },
            numberFormat: r
        };
    });
    M(a3, "Core/Renderer/RendererUtilities.js", [
        a3["Core/Utilities.js"]
    ], function(a1) {
        var r = a1.clamp, C = a1.pick, E = a1.stableSort, z;
        (function(a3) {
            function x(a4, n, m2) {
                var g2 = a4, c3 = g2.reducedLen || n, e3 = function(c4, e4) {
                    return (e4.rank || 0) - (c4.rank || 0);
                }, l = function(c4, e4) {
                    return c4.target - e4.target;
                }, f6, v = !0, q = [], k8 = 0;
                for(f6 = a4.length; f6--;)k8 += a4[f6].size;
                if (k8 > c3) {
                    E(a4, e3);
                    for(k8 = f6 = 0; k8 <= c3;)k8 += a4[f6].size, f6++;
                    q = a4.splice(f6 - 1, a4.length);
                }
                E(a4, l);
                for(a4 = a4.map(function(c4) {
                    return {
                        size: c4.size,
                        targets: [
                            c4.target
                        ],
                        align: C(c4.align, 0.5)
                    };
                }); v;){
                    for(f6 = a4.length; f6--;)c3 = a4[f6], e3 = (Math.min.apply(0, c3.targets) + Math.max.apply(0, c3.targets)) / 2, c3.pos = r(e3 - c3.size * c3.align, 0, n - c3.size);
                    f6 = a4.length;
                    for(v = !1; f6--;)0 < f6 && a4[f6 - 1].pos + a4[f6 - 1].size > a4[f6].pos && (a4[f6 - 1].size += a4[f6].size, a4[f6 - 1].targets = a4[f6 - 1].targets.concat(a4[f6].targets), a4[f6 - 1].align = 0.5, a4[f6 - 1].pos + a4[f6 - 1].size > n && (a4[f6 - 1].pos = n - a4[f6 - 1].size), a4.splice(f6, 1), v = !0);
                }
                g2.push.apply(g2, q);
                f6 = 0;
                a4.some(function(c4) {
                    var e4 = 0;
                    return (c4.targets || []).some(function() {
                        g2[f6].pos = c4.pos + e4;
                        if ("undefined" !== typeof m2 && Math.abs(g2[f6].pos - g2[f6].target) > m2) return g2.slice(0, f6 + 1).forEach(function(c5) {
                            return delete c5.pos;
                        }), g2.reducedLen = (g2.reducedLen || n) - 0.1 * n, g2.reducedLen > 0.1 * n && x(g2, n, m2), !0;
                        e4 += g2[f6].size;
                        f6++;
                        return !1;
                    });
                });
                E(g2, l);
                return g2;
            }
            a3.distribute = x;
        })(z || (z = {
        }));
        return z;
    });
    M(a3, "Core/Renderer/SVG/SVGElement.js", [
        a3["Core/Animation/AnimationUtilities.js"],
        a3["Core/Renderer/HTML/AST.js"],
        a3["Core/Color/Color.js"],
        a3["Core/Globals.js"],
        a3["Core/Color/Palette.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w, C, E, z, x) {
        var r = a1.animate, u2 = a1.animObject, n = a1.stop, m2 = E.deg2rad, g2 = E.doc, c3 = E.noop, e3 = E.svg, l = E.SVG_NS, f6 = E.win, v = x.addEvent, q = x.attr, k8 = x.createElement, I = x.css, D = x.defined, B = x.erase, O = x.extend, t = x.fireEvent, h = x.isArray, d = x.isFunction, b = x.isNumber, p = x.isString, G = x.merge, y = x.objectEach, L = x.pick, F = x.pInt, P = x.syncTimeout, S = x.uniqueKey;
        a1 = (function() {
            function a3() {
                this.element = void 0;
                this.onEvents = {
                };
                this.opacity = 1;
                this.renderer = void 0;
                this.SVG_NS = l;
                this.symbolCustomAttribs = "x y width height r start end innerR anchorX anchorY rounded".split(" ");
            }
            a3.prototype._defaultGetter = function(b1) {
                b1 = L(this[b1 + "Value"], this[b1], this.element ? this.element.getAttribute(b1) : null, 0);
                /^[\-0-9\.]+$/.test(b1) && (b1 = parseFloat(b1));
                return b1;
            };
            a3.prototype._defaultSetter = function(b1, d1, c4) {
                c4.setAttribute(d1, b1);
            };
            a3.prototype.add = function(b1) {
                var d1 = this.renderer, c4 = this.element;
                b1 && (this.parentGroup = b1);
                this.parentInverted = b1 && b1.inverted;
                "undefined" !== typeof this.textStr && "text" === this.element.nodeName && d1.buildText(this);
                this.added = !0;
                if (!b1 || b1.handleZ || this.zIndex) var K = this.zIndexSetter();
                K || (b1 ? b1.element : d1.box).appendChild(c4);
                if (this.onAdd) this.onAdd();
                return this;
            };
            a3.prototype.addClass = function(b1, d1) {
                var c4 = d1 ? "" : this.attr("class") || "";
                b1 = (b1 || "").split(/ /g).reduce(function(b2, d2) {
                    -1 === c4.indexOf(d2) && b2.push(d2);
                    return b2;
                }, c4 ? [
                    c4
                ] : []).join(" ");
                b1 !== c4 && this.attr("class", b1);
                return this;
            };
            a3.prototype.afterSetters = function() {
                this.doTransform && (this.updateTransform(), this.doTransform = !1);
            };
            a3.prototype.align = function(b1, d1, c4) {
                var K = {
                }, h1 = this.renderer, H = h1.alignedObjects, a4, e4, A;
                if (b1) {
                    if (this.alignOptions = b1, this.alignByTranslate = d1, !c4 || p(c4)) this.alignTo = a4 = c4 || "renderer", B(H, this), H.push(this), c4 = void 0;
                } else b1 = this.alignOptions, d1 = this.alignByTranslate, a4 = this.alignTo;
                c4 = L(c4, h1[a4], "scrollablePlotBox" === a4 ? h1.plotBox : void 0, h1);
                a4 = b1.align;
                var f7 = b1.verticalAlign;
                h1 = (c4.x || 0) + (b1.x || 0);
                H = (c4.y || 0) + (b1.y || 0);
                "right" === a4 ? e4 = 1 : "center" === a4 && (e4 = 2);
                e4 && (h1 += (c4.width - (b1.width || 0)) / e4);
                K[d1 ? "translateX" : "x"] = Math.round(h1);
                "bottom" === f7 ? A = 1 : "middle" === f7 && (A = 2);
                A && (H += (c4.height - (b1.height || 0)) / A);
                K[d1 ? "translateY" : "y"] = Math.round(H);
                this[this.placed ? "animate" : "attr"](K);
                this.placed = !0;
                this.alignAttr = K;
                return this;
            };
            a3.prototype.alignSetter = function(b1) {
                var d1 = {
                    left: "start",
                    center: "middle",
                    right: "end"
                };
                d1[b1] && (this.alignValue = b1, this.element.setAttribute("text-anchor", d1[b1]));
            };
            a3.prototype.animate = function(b1, d1, c4) {
                var h1 = this, H = u2(L(d1, this.renderer.globalAnimation, !0));
                d1 = H.defer;
                L(g2.hidden, g2.msHidden, g2.webkitHidden, !1) && (H.duration = 0);
                0 !== H.duration ? (c4 && (H.complete = c4), P(function() {
                    h1.element && r(h1, b1, H);
                }, d1)) : (this.attr(b1, void 0, c4), y(b1, function(b2, d2) {
                    H.step && H.step.call(this, b2, {
                        prop: d2,
                        pos: 1,
                        elem: this
                    });
                }, this));
                return this;
            };
            a3.prototype.applyTextOutline = function(b1) {
                var d1 = this.element;
                -1 !== b1.indexOf("contrast") && (b1 = b1.replace(/contrast/g, this.renderer.getContrast(d1.style.fill)));
                var c4 = b1.split(" ");
                b1 = c4[c4.length - 1];
                if ((c4 = c4[0]) && "none" !== c4 && E.svg) {
                    this.fakeTS = !0;
                    this.ySetter = this.xSetter;
                    c4 = c4.replace(/(^[\d\.]+)(.*?)$/g, function(b2, d2, c5) {
                        return 2 * Number(d2) + c5;
                    });
                    this.removeTextOutline();
                    var h1 = g2.createElementNS(l, "tspan");
                    q(h1, {
                        "class": "highcharts-text-outline",
                        fill: b1,
                        stroke: b1,
                        "stroke-width": c4,
                        "stroke-linejoin": "round"
                    });
                    [].forEach.call(d1.childNodes, function(b2) {
                        var d2 = b2.cloneNode(!0);
                        d2.removeAttribute && [
                            "fill",
                            "stroke",
                            "stroke-width",
                            "stroke"
                        ].forEach(function(b3) {
                            return d2.removeAttribute(b3);
                        });
                        h1.appendChild(d2);
                    });
                    var a4 = g2.createElementNS(l, "tspan");
                    a4.textContent = "\u200b";
                    [
                        "x",
                        "y"
                    ].forEach(function(b2) {
                        var c5 = d1.getAttribute(b2);
                        c5 && a4.setAttribute(b2, c5);
                    });
                    h1.appendChild(a4);
                    d1.insertBefore(h1, d1.firstChild);
                }
            };
            a3.prototype.attr = function(b1, d1, c4, h2) {
                var K = this.element, H = this.symbolCustomAttribs, a5, e4 = this, A, p1;
                if ("string" === typeof b1 && "undefined" !== typeof d1) {
                    var f7 = b1;
                    b1 = {
                    };
                    b1[f7] = d1;
                }
                "string" === typeof b1 ? e4 = (this[b1 + "Getter"] || this._defaultGetter).call(this, b1, K) : (y(b1, function(d2, c5) {
                    A = !1;
                    h2 || n(this, c5);
                    this.symbolName && -1 !== H.indexOf(c5) && (a5 || (this.symbolAttr(b1), a5 = !0), A = !0);
                    !this.rotation || "x" !== c5 && "y" !== c5 || (this.doTransform = !0);
                    A || (p1 = this[c5 + "Setter"] || this._defaultSetter, p1.call(this, d2, c5, K), !this.styledMode && this.shadows && /^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(c5) && this.updateShadows(c5, d2, p1));
                }, this), this.afterSetters());
                c4 && c4.call(this);
                return e4;
            };
            a3.prototype.clip = function(b1) {
                return this.attr("clip-path", b1 ? "url(" + this.renderer.url + "#" + b1.id + ")" : "none");
            };
            a3.prototype.crisp = function(b1, d1) {
                d1 = d1 || b1.strokeWidth || 0;
                var c4 = Math.round(d1) % 2 / 2;
                b1.x = Math.floor(b1.x || this.x || 0) + c4;
                b1.y = Math.floor(b1.y || this.y || 0) + c4;
                b1.width = Math.floor((b1.width || this.width || 0) - 2 * c4);
                b1.height = Math.floor((b1.height || this.height || 0) - 2 * c4);
                D(b1.strokeWidth) && (b1.strokeWidth = d1);
                return b1;
            };
            a3.prototype.complexColor = function(b1, d1, c4) {
                var K = this.renderer, a5, H, e4, p1, A, f8, k9, g3, l1, q1, v1 = [], F1;
                t(this.renderer, "complexColor", {
                    args: arguments
                }, function() {
                    b1.radialGradient ? H = "radialGradient" : b1.linearGradient && (H = "linearGradient");
                    if (H) {
                        e4 = b1[H];
                        A = K.gradients;
                        f8 = b1.stops;
                        l1 = c4.radialReference;
                        h(e4) && (b1[H] = e4 = {
                            x1: e4[0],
                            y1: e4[1],
                            x2: e4[2],
                            y2: e4[3],
                            gradientUnits: "userSpaceOnUse"
                        });
                        "radialGradient" === H && l1 && !D(e4.gradientUnits) && (p1 = e4, e4 = G(e4, K.getRadialAttr(l1, p1), {
                            gradientUnits: "userSpaceOnUse"
                        }));
                        y(e4, function(b2, d2) {
                            "id" !== d2 && v1.push(d2, b2);
                        });
                        y(f8, function(b2) {
                            v1.push(b2);
                        });
                        v1 = v1.join(",");
                        if (A[v1]) q1 = A[v1].attr("id");
                        else {
                            e4.id = q1 = S();
                            var N = A[v1] = K.createElement(H).attr(e4).add(K.defs);
                            N.radAttr = p1;
                            N.stops = [];
                            f8.forEach(function(b2) {
                                0 === b2[1].indexOf("rgba") ? (a5 = C.parse(b2[1]), k9 = a5.get("rgb"), g3 = a5.get("a")) : (k9 = b2[1], g3 = 1);
                                b2 = K.createElement("stop").attr({
                                    offset: b2[0],
                                    "stop-color": k9,
                                    "stop-opacity": g3
                                }).add(N);
                                N.stops.push(b2);
                            });
                        }
                        F1 = "url(" + K.url + "#" + q1 + ")";
                        c4.setAttribute(d1, F1);
                        c4.gradient = v1;
                        b1.toString = function() {
                            return F1;
                        };
                    }
                });
            };
            a3.prototype.css = function(b1) {
                var d1 = this.styles, c4 = {
                }, h2 = this.element, a5 = [
                    "textOutline",
                    "textOverflow",
                    "width"
                ], p1 = "", f8 = !d1;
                b1 && b1.color && (b1.fill = b1.color);
                d1 && y(b1, function(b2, h3) {
                    d1 && d1[h3] !== b2 && (c4[h3] = b2, f8 = !0);
                });
                if (f8) {
                    d1 && (b1 = O(d1, c4));
                    if (b1) {
                        if (null === b1.width || "auto" === b1.width) delete this.textWidth;
                        else if ("text" === h2.nodeName.toLowerCase() && b1.width) var k9 = this.textWidth = F(b1.width);
                    }
                    this.styles = b1;
                    k9 && !e3 && this.renderer.forExport && delete b1.width;
                    if (h2.namespaceURI === this.SVG_NS) {
                        var A = function(b2, d2) {
                            return "-" + d2.toLowerCase();
                        };
                        y(b1, function(b2, d2) {
                            -1 === a5.indexOf(d2) && (p1 += d2.replace(/([A-Z])/g, A) + ":" + b2 + ";");
                        });
                        p1 && q(h2, "style", p1);
                    } else I(h2, b1);
                    this.added && ("text" === this.element.nodeName && this.renderer.buildText(this), b1 && b1.textOutline && this.applyTextOutline(b1.textOutline));
                }
                return this;
            };
            a3.prototype.dashstyleSetter = function(b1) {
                var d1 = this["stroke-width"];
                "inherit" === d1 && (d1 = 1);
                if (b1 = b1 && b1.toLowerCase()) {
                    var c4 = b1.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                    for(b1 = c4.length; b1--;)c4[b1] = "" + F(c4[b1]) * L(d1, NaN);
                    b1 = c4.join(",").replace(/NaN/g, "none");
                    this.element.setAttribute("stroke-dasharray", b1);
                }
            };
            a3.prototype.destroy = function() {
                var b1 = this, d1 = b1.element || {
                }, c5 = b1.renderer, h2 = d1.ownerSVGElement, a5 = c5.isSVG && "SPAN" === d1.nodeName && b1.parentGroup || void 0;
                d1.onclick = d1.onmouseout = d1.onmouseover = d1.onmousemove = d1.point = null;
                n(b1);
                if (b1.clipPath && h2) {
                    var e4 = b1.clipPath;
                    [].forEach.call(h2.querySelectorAll("[clip-path],[CLIP-PATH]"), function(b2) {
                        -1 < b2.getAttribute("clip-path").indexOf(e4.element.id) && b2.removeAttribute("clip-path");
                    });
                    b1.clipPath = e4.destroy();
                }
                if (b1.stops) {
                    for(h2 = 0; h2 < b1.stops.length; h2++)b1.stops[h2].destroy();
                    b1.stops.length = 0;
                    b1.stops = void 0;
                }
                b1.safeRemoveChild(d1);
                for(c5.styledMode || b1.destroyShadows(); a5 && a5.div && 0 === a5.div.childNodes.length;)d1 = a5.parentGroup, b1.safeRemoveChild(a5.div), delete a5.div, a5 = d1;
                b1.alignTo && B(c5.alignedObjects, b1);
                y(b1, function(d2, c6) {
                    b1[c6] && b1[c6].parentGroup === b1 && b1[c6].destroy && b1[c6].destroy();
                    delete b1[c6];
                });
            };
            a3.prototype.destroyShadows = function() {
                (this.shadows || []).forEach(function(b1) {
                    this.safeRemoveChild(b1);
                }, this);
                this.shadows = void 0;
            };
            a3.prototype.destroyTextPath = function(b1, d1) {
                var c5 = b1.getElementsByTagName("text")[0];
                if (c5) {
                    if (c5.removeAttribute("dx"), c5.removeAttribute("dy"), d1.element.setAttribute("id", ""), this.textPathWrapper && c5.getElementsByTagName("textPath").length) {
                        for(b1 = this.textPathWrapper.element.childNodes; b1.length;)c5.appendChild(b1[0]);
                        c5.removeChild(this.textPathWrapper.element);
                    }
                } else if (b1.getAttribute("dx") || b1.getAttribute("dy")) b1.removeAttribute("dx"), b1.removeAttribute("dy");
                this.textPathWrapper && (this.textPathWrapper = this.textPathWrapper.destroy());
            };
            a3.prototype.dSetter = function(b1, d1, c5) {
                h(b1) && ("string" === typeof b1[0] && (b1 = this.renderer.pathToSegments(b1)), this.pathArray = b1, b1 = b1.reduce(function(b2, d2, c6) {
                    return d2 && d2.join ? (c6 ? b2 + " " : "") + d2.join(" ") : (d2 || "").toString();
                }, ""));
                /(NaN| {2}|^$)/.test(b1) && (b1 = "M 0 0");
                this[d1] !== b1 && (c5.setAttribute(d1, b1), this[d1] = b1);
            };
            a3.prototype.fadeOut = function(b1) {
                var d1 = this;
                d1.animate({
                    opacity: 0
                }, {
                    duration: L(b1, 150),
                    complete: function() {
                        d1.attr({
                            y: -9999
                        }).hide();
                    }
                });
            };
            a3.prototype.fillSetter = function(b1, d1, c5) {
                "string" === typeof b1 ? c5.setAttribute(d1, b1) : b1 && this.complexColor(b1, d1, c5);
            };
            a3.prototype.getBBox = function(b1, c5) {
                var h2 = this.renderer, K = this.element, e5 = this.styles, p1 = this.textStr, f8 = h2.cache, k10 = h2.cacheKeys, A = K.namespaceURI === this.SVG_NS;
                c5 = L(c5, this.rotation, 0);
                var g3 = h2.styledMode ? K && a3.prototype.getStyle.call(K, "font-size") : e5 && e5.fontSize, y1;
                if (D(p1)) {
                    var G1 = p1.toString();
                    -1 === G1.indexOf("<") && (G1 = G1.replace(/[0-9]/g, "0"));
                    G1 += [
                        "",
                        c5,
                        g3,
                        this.textWidth,
                        e5 && e5.textOverflow,
                        e5 && e5.fontWeight
                    ].join();
                }
                G1 && !b1 && (y1 = f8[G1]);
                if (!y1) {
                    if (A || h2.forExport) {
                        try {
                            var l1 = this.fakeTS && function(b2) {
                                var d1 = K.querySelector(".highcharts-text-outline");
                                d1 && I(d1, {
                                    display: b2
                                });
                            };
                            d(l1) && l1("none");
                            y1 = K.getBBox ? O({
                            }, K.getBBox()) : {
                                width: K.offsetWidth,
                                height: K.offsetHeight
                            };
                            d(l1) && l1("");
                        } catch (Y) {
                        }
                        if (!y1 || 0 > y1.width) y1 = {
                            width: 0,
                            height: 0
                        };
                    } else y1 = this.htmlGetBBox();
                    h2.isSVG && (b1 = y1.width, h2 = y1.height, A && (y1.height = h2 = ({
                        "11px,17": 14,
                        "13px,20": 16
                    })[e5 && e5.fontSize + "," + Math.round(h2)] || h2), c5 && (e5 = c5 * m2, y1.width = Math.abs(h2 * Math.sin(e5)) + Math.abs(b1 * Math.cos(e5)), y1.height = Math.abs(h2 * Math.cos(e5)) + Math.abs(b1 * Math.sin(e5))));
                    if (G1 && ("" === p1 || 0 < y1.height)) {
                        for(; 250 < k10.length;)delete f8[k10.shift()];
                        f8[G1] || k10.push(G1);
                        f8[G1] = y1;
                    }
                }
                return y1;
            };
            a3.prototype.getStyle = function(b1) {
                return f6.getComputedStyle(this.element || this, "").getPropertyValue(b1);
            };
            a3.prototype.hasClass = function(b1) {
                return -1 !== ("" + this.attr("class")).split(" ").indexOf(b1);
            };
            a3.prototype.hide = function(b1) {
                b1 ? this.attr({
                    y: -9999
                }) : this.attr({
                    visibility: "hidden"
                });
                return this;
            };
            a3.prototype.htmlGetBBox = function() {
                return {
                    height: 0,
                    width: 0,
                    x: 0,
                    y: 0
                };
            };
            a3.prototype.init = function(b1, d1) {
                this.element = "span" === d1 ? k8(d1) : g2.createElementNS(this.SVG_NS, d1);
                this.renderer = b1;
                t(this, "afterInit");
            };
            a3.prototype.invert = function(b1) {
                this.inverted = b1;
                this.updateTransform();
                return this;
            };
            a3.prototype.on = function(b1, d1) {
                var c5 = this.onEvents;
                if (c5[b1]) c5[b1]();
                c5[b1] = v(this.element, b1, d1);
                return this;
            };
            a3.prototype.opacitySetter = function(b1, d1, c5) {
                this.opacity = b1 = Number(Number(b1).toFixed(3));
                c5.setAttribute(d1, b1);
            };
            a3.prototype.removeClass = function(b1) {
                return this.attr("class", ("" + this.attr("class")).replace(p(b1) ? new RegExp("(^| )" + b1 + "( |$)") : b1, " ").replace(/ +/g, " ").trim());
            };
            a3.prototype.removeTextOutline = function() {
                var b1 = this.element.querySelector("tspan.highcharts-text-outline");
                b1 && this.safeRemoveChild(b1);
            };
            a3.prototype.safeRemoveChild = function(b1) {
                var d1 = b1.parentNode;
                d1 && d1.removeChild(b1);
            };
            a3.prototype.setRadialReference = function(b1) {
                var d1 = this.element.gradient && this.renderer.gradients[this.element.gradient];
                this.element.radialReference = b1;
                d1 && d1.radAttr && d1.animate(this.renderer.getRadialAttr(b1, d1.radAttr));
                return this;
            };
            a3.prototype.setTextPath = function(d1, h2) {
                var a5 = this.element, K = this.text ? this.text.element : a5, e5 = {
                    textAnchor: "text-anchor"
                }, p1 = !1, f8 = this.textPathWrapper, k10 = !f8;
                h2 = G(!0, {
                    enabled: !0,
                    attributes: {
                        dy: -5,
                        startOffset: "50%",
                        textAnchor: "middle"
                    }
                }, h2);
                var A = w.filterUserAttributes(h2.attributes);
                if (d1 && h2 && h2.enabled) {
                    f8 && null === f8.element.parentNode ? (k10 = !0, f8 = f8.destroy()) : f8 && this.removeTextOutline.call(f8.parentGroup);
                    this.options && this.options.padding && (A.dx = -this.options.padding);
                    f8 || (this.textPathWrapper = f8 = this.renderer.createElement("textPath"), p1 = !0);
                    var g3 = f8.element;
                    (h2 = d1.element.getAttribute("id")) || d1.element.setAttribute("id", h2 = S());
                    if (k10) for(K.setAttribute("y", 0), b(A.dx) && K.setAttribute("x", -A.dx), d1 = [].slice.call(K.childNodes), k10 = 0; k10 < d1.length; k10++){
                        var l2 = d1[k10];
                        l2.nodeType !== Node.TEXT_NODE && "tspan" !== l2.nodeName || g3.appendChild(l2);
                    }
                    p1 && f8 && f8.add({
                        element: K
                    });
                    g3.setAttributeNS("http://www.w3.org/1999/xlink", "href", this.renderer.url + "#" + h2);
                    D(A.dy) && (g3.parentNode.setAttribute("dy", A.dy), delete A.dy);
                    D(A.dx) && (g3.parentNode.setAttribute("dx", A.dx), delete A.dx);
                    y(A, function(b1, d2) {
                        g3.setAttribute(e5[d2] || d2, b1);
                    });
                    a5.removeAttribute("transform");
                    this.removeTextOutline.call(f8);
                    this.text && !this.renderer.styledMode && this.attr({
                        fill: "none",
                        "stroke-width": 0
                    });
                    this.applyTextOutline = this.updateTransform = c3;
                } else f8 && (delete this.updateTransform, delete this.applyTextOutline, this.destroyTextPath(a5, d1), this.updateTransform(), this.options && this.options.rotation && this.applyTextOutline(this.options.style.textOutline));
                return this;
            };
            a3.prototype.shadow = function(b1, d1, c5) {
                var h2 = [], a5 = this.element, e5 = this.oldShadowOptions, H = {
                    color: z.neutralColor100,
                    offsetX: this.parentInverted ? -1 : 1,
                    offsetY: this.parentInverted ? -1 : 1,
                    opacity: 0.15,
                    width: 3
                }, p1 = !1, A;
                !0 === b1 ? A = H : "object" === typeof b1 && (A = O(H, b1));
                A && (A && e5 && y(A, function(b2, d2) {
                    b2 !== e5[d2] && (p1 = !0);
                }), p1 && this.destroyShadows(), this.oldShadowOptions = A);
                if (!A) this.destroyShadows();
                else if (!this.shadows) {
                    var f8 = A.opacity / A.width;
                    var k10 = this.parentInverted ? "translate(" + A.offsetY + ", " + A.offsetX + ")" : "translate(" + A.offsetX + ", " + A.offsetY + ")";
                    for(H = 1; H <= A.width; H++){
                        var g4 = a5.cloneNode(!1);
                        var G2 = 2 * A.width + 1 - 2 * H;
                        q(g4, {
                            stroke: b1.color || z.neutralColor100,
                            "stroke-opacity": f8 * H,
                            "stroke-width": G2,
                            transform: k10,
                            fill: "none"
                        });
                        g4.setAttribute("class", (g4.getAttribute("class") || "") + " highcharts-shadow");
                        c5 && (q(g4, "height", Math.max(q(g4, "height") - G2, 0)), g4.cutHeight = G2);
                        d1 ? d1.element.appendChild(g4) : a5.parentNode && a5.parentNode.insertBefore(g4, a5);
                        h2.push(g4);
                    }
                    this.shadows = h2;
                }
                return this;
            };
            a3.prototype.show = function(b1) {
                return this.attr({
                    visibility: b1 ? "inherit" : "visible"
                });
            };
            a3.prototype.strokeSetter = function(b1, d1, c5) {
                this[d1] = b1;
                this.stroke && this["stroke-width"] ? (a3.prototype.fillSetter.call(this, this.stroke, "stroke", c5), c5.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0) : "stroke-width" === d1 && 0 === b1 && this.hasStroke ? (c5.removeAttribute("stroke"), this.hasStroke = !1) : this.renderer.styledMode && this["stroke-width"] && (c5.setAttribute("stroke-width", this["stroke-width"]), this.hasStroke = !0);
            };
            a3.prototype.strokeWidth = function() {
                if (!this.renderer.styledMode) return this["stroke-width"] || 0;
                var b1 = this.getStyle("stroke-width"), d1 = 0;
                if (b1.indexOf("px") === b1.length - 2) d1 = F(b1);
                else if ("" !== b1) {
                    var c5 = g2.createElementNS(l, "rect");
                    q(c5, {
                        width: b1,
                        "stroke-width": 0
                    });
                    this.element.parentNode.appendChild(c5);
                    d1 = c5.getBBox().width;
                    c5.parentNode.removeChild(c5);
                }
                return d1;
            };
            a3.prototype.symbolAttr = function(b1) {
                var d1 = this;
                "x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function(c6) {
                    d1[c6] = L(b1[c6], d1[c6]);
                });
                d1.attr({
                    d: d1.renderer.symbols[d1.symbolName](d1.x, d1.y, d1.width, d1.height, d1)
                });
            };
            a3.prototype.textSetter = function(b1) {
                b1 !== this.textStr && (delete this.textPxLength, this.textStr = b1, this.added && this.renderer.buildText(this));
            };
            a3.prototype.titleSetter = function(b1) {
                var d1 = this.element, c6 = d1.getElementsByTagName("title")[0] || g2.createElementNS(this.SVG_NS, "title");
                d1.insertBefore ? d1.insertBefore(c6, d1.firstChild) : d1.appendChild(c6);
                c6.textContent = String(L(b1, "")).replace(/<[^>]*>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
            };
            a3.prototype.toFront = function() {
                var b1 = this.element;
                b1.parentNode.appendChild(b1);
                return this;
            };
            a3.prototype.translate = function(b1, d1) {
                return this.attr({
                    translateX: b1,
                    translateY: d1
                });
            };
            a3.prototype.updateShadows = function(b1, d1, c6) {
                var h2 = this.shadows;
                if (h2) for(var a5 = h2.length; a5--;)c6.call(h2[a5], "height" === b1 ? Math.max(d1 - (h2[a5].cutHeight || 0), 0) : "d" === b1 ? this.d : d1, b1, h2[a5]);
            };
            a3.prototype.updateTransform = function() {
                var b1 = this.scaleX, d1 = this.scaleY, c6 = this.inverted, h2 = this.rotation, a5 = this.matrix, e5 = this.element, p1 = this.translateX || 0, f9 = this.translateY || 0;
                c6 && (p1 += this.width, f9 += this.height);
                p1 = [
                    "translate(" + p1 + "," + f9 + ")"
                ];
                D(a5) && p1.push("matrix(" + a5.join(",") + ")");
                c6 ? p1.push("rotate(90) scale(-1,1)") : h2 && p1.push("rotate(" + h2 + " " + L(this.rotationOriginX, e5.getAttribute("x"), 0) + " " + L(this.rotationOriginY, e5.getAttribute("y") || 0) + ")");
                (D(b1) || D(d1)) && p1.push("scale(" + L(b1, 1) + " " + L(d1, 1) + ")");
                p1.length && e5.setAttribute("transform", p1.join(" "));
            };
            a3.prototype.visibilitySetter = function(b1, d1, c6) {
                "inherit" === b1 ? c6.removeAttribute(d1) : this[d1] !== b1 && c6.setAttribute(d1, b1);
                this[d1] = b1;
            };
            a3.prototype.xGetter = function(b1) {
                "circle" === this.element.nodeName && ("x" === b1 ? b1 = "cx" : "y" === b1 && (b1 = "cy"));
                return this._defaultGetter(b1);
            };
            a3.prototype.zIndexSetter = function(b1, d1) {
                var c6 = this.renderer, h2 = this.parentGroup, a5 = (h2 || c6).element || c6.box, e5 = this.element;
                c6 = a5 === c6.box;
                var p1 = !1;
                var f9 = this.added;
                var A;
                D(b1) ? (e5.setAttribute("data-z-index", b1), b1 = +b1, this[d1] === b1 && (f9 = !1)) : D(this[d1]) && e5.removeAttribute("data-z-index");
                this[d1] = b1;
                if (f9) {
                    (b1 = this.zIndex) && h2 && (h2.handleZ = !0);
                    d1 = a5.childNodes;
                    for(A = d1.length - 1; 0 <= A && !p1; A--){
                        h2 = d1[A];
                        f9 = h2.getAttribute("data-z-index");
                        var k11 = !D(f9);
                        if (h2 !== e5) {
                            if (0 > b1 && k11 && !c6 && !A) a5.insertBefore(e5, d1[A]), p1 = !0;
                            else if (F(f9) <= b1 || k11 && (!D(b1) || 0 <= b1)) a5.insertBefore(e5, d1[A + 1] || null), p1 = !0;
                        }
                    }
                    p1 || (a5.insertBefore(e5, d1[c6 ? 3 : 0] || null), p1 = !0);
                }
                return p1;
            };
            return a3;
        })();
        a1.prototype["stroke-widthSetter"] = a1.prototype.strokeSetter;
        a1.prototype.yGetter = a1.prototype.xGetter;
        a1.prototype.matrixSetter = a1.prototype.rotationOriginXSetter = a1.prototype.rotationOriginYSetter = a1.prototype.rotationSetter = a1.prototype.scaleXSetter = a1.prototype.scaleYSetter = a1.prototype.translateXSetter = a1.prototype.translateYSetter = a1.prototype.verticalAlignSetter = function(b1, d1) {
            this[d1] = b1;
            this.doTransform = !0;
        };
        return a1;
    });
    M(a3, "Core/Renderer/RendererRegistry.js", [
        a3["Core/Globals.js"]
    ], function(a1) {
        var r;
        (function(r1) {
            r1.rendererTypes = {
            };
            var w;
            r1.getRendererType = function(a3) {
                (void 0) === a3 && (a3 = w);
                return r1.rendererTypes[a3] || r1.rendererTypes[w];
            };
            r1.registerRendererType = function(C, x, E) {
                r1.rendererTypes[C] = x;
                if (!w || E) w = C, a1.Renderer = x;
            };
        })(r || (r = {
        }));
        return r;
    });
    M(a3, "Core/Renderer/SVG/SVGLabel.js", [
        a3["Core/Renderer/SVG/SVGElement.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w) {
        var r = this && this.__extends || function() {
            var a3 = function(g2, c3) {
                a3 = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(c6, a5) {
                    c6.__proto__ = a5;
                } || function(c6, a5) {
                    for(var e3 in a5)a5.hasOwnProperty(e3) && (c6[e3] = a5[e3]);
                };
                return a3(g2, c3);
            };
            return function(g2, c3) {
                function e3() {
                    this.constructor = g2;
                }
                a3(g2, c3);
                g2.prototype = null === c3 ? Object.create(c3) : (e3.prototype = c3.prototype, new e3);
            };
        }(), E = w.defined, z = w.extend, x = w.isNumber, J = w.merge, u2 = w.pick, n = w.removeEvent;
        return (function(m2) {
            function g2(c3, a3, l3, f6, v, q, k8, I, D, B) {
                var e3 = m2.call(this) || this;
                e3.paddingLeftSetter = e3.paddingSetter;
                e3.paddingRightSetter = e3.paddingSetter;
                e3.init(c3, "g");
                e3.textStr = a3;
                e3.x = l3;
                e3.y = f6;
                e3.anchorX = q;
                e3.anchorY = k8;
                e3.baseline = D;
                e3.className = B;
                e3.addClass("button" === B ? "highcharts-no-tooltip" : "highcharts-label");
                B && e3.addClass("highcharts-" + B);
                e3.text = c3.text(void 0, 0, 0, I).attr({
                    zIndex: 1
                });
                var t;
                "string" === typeof v && ((t = /^url\((.*?)\)$/.test(v)) || e3.renderer.symbols[v]) && (e3.symbolKey = v);
                e3.bBox = g2.emptyBBox;
                e3.padding = 3;
                e3.baselineOffset = 0;
                e3.needsBox = c3.styledMode || t;
                e3.deferredAttr = {
                };
                e3.alignFactor = 0;
                return e3;
            }
            r(g2, m2);
            g2.prototype.alignSetter = function(c3) {
                c3 = ({
                    left: 0,
                    center: 0.5,
                    right: 1
                })[c3];
                c3 !== this.alignFactor && (this.alignFactor = c3, this.bBox && x(this.xSetting) && this.attr({
                    x: this.xSetting
                }));
            };
            g2.prototype.anchorXSetter = function(c3, a3) {
                this.anchorX = c3;
                this.boxAttr(a3, Math.round(c3) - this.getCrispAdjust() - this.xSetting);
            };
            g2.prototype.anchorYSetter = function(c3, a3) {
                this.anchorY = c3;
                this.boxAttr(a3, c3 - this.ySetting);
            };
            g2.prototype.boxAttr = function(c3, a3) {
                this.box ? this.box.attr(c3, a3) : this.deferredAttr[c3] = a3;
            };
            g2.prototype.css = function(c3) {
                if (c3) {
                    var e3 = {
                    };
                    c3 = J(c3);
                    g2.textProps.forEach(function(a3) {
                        "undefined" !== typeof c3[a3] && (e3[a3] = c3[a3], delete c3[a3]);
                    });
                    this.text.css(e3);
                    var l3 = "width" in e3;
                    "fontSize" in e3 || "fontWeight" in e3 ? this.updateTextPadding() : l3 && this.updateBoxSize();
                }
                return a1.prototype.css.call(this, c3);
            };
            g2.prototype.destroy = function() {
                n(this.element, "mouseenter");
                n(this.element, "mouseleave");
                this.text && this.text.destroy();
                this.box && (this.box = this.box.destroy());
                a1.prototype.destroy.call(this);
            };
            g2.prototype.fillSetter = function(c3, a3) {
                c3 && (this.needsBox = !0);
                this.fill = c3;
                this.boxAttr(a3, c3);
            };
            g2.prototype.getBBox = function() {
                this.textStr && 0 === this.bBox.width && 0 === this.bBox.height && this.updateBoxSize();
                var c3 = this.padding, a3 = u2(this.paddingLeft, c3);
                return {
                    width: this.width,
                    height: this.height,
                    x: this.bBox.x - a3,
                    y: this.bBox.y - c3
                };
            };
            g2.prototype.getCrispAdjust = function() {
                return this.renderer.styledMode && this.box ? this.box.strokeWidth() % 2 / 2 : (this["stroke-width"] ? parseInt(this["stroke-width"], 10) : 0) % 2 / 2;
            };
            g2.prototype.heightSetter = function(c3) {
                this.heightSetting = c3;
            };
            g2.prototype.onAdd = function() {
                var c3 = this.textStr;
                this.text.add(this);
                this.attr({
                    text: E(c3) ? c3 : "",
                    x: this.x,
                    y: this.y
                });
                this.box && E(this.anchorX) && this.attr({
                    anchorX: this.anchorX,
                    anchorY: this.anchorY
                });
            };
            g2.prototype.paddingSetter = function(c3, a3) {
                x(c3) ? c3 !== this[a3] && (this[a3] = c3, this.updateTextPadding()) : this[a3] = void 0;
            };
            g2.prototype.rSetter = function(c3, a3) {
                this.boxAttr(a3, c3);
            };
            g2.prototype.shadow = function(c3) {
                c3 && !this.renderer.styledMode && (this.updateBoxSize(), this.box && this.box.shadow(c3));
                return this;
            };
            g2.prototype.strokeSetter = function(c3, a3) {
                this.stroke = c3;
                this.boxAttr(a3, c3);
            };
            g2.prototype["stroke-widthSetter"] = function(c3, a3) {
                c3 && (this.needsBox = !0);
                this["stroke-width"] = c3;
                this.boxAttr(a3, c3);
            };
            g2.prototype["text-alignSetter"] = function(c3) {
                this.textAlign = c3;
            };
            g2.prototype.textSetter = function(c3) {
                "undefined" !== typeof c3 && this.text.attr({
                    text: c3
                });
                this.updateTextPadding();
            };
            g2.prototype.updateBoxSize = function() {
                var c3 = this.text.element.style, a3 = {
                }, l4 = this.padding, f6 = this.bBox = x(this.widthSetting) && x(this.heightSetting) && !this.textAlign || !E(this.text.textStr) ? g2.emptyBBox : this.text.getBBox();
                this.width = this.getPaddedWidth();
                this.height = (this.heightSetting || f6.height || 0) + 2 * l4;
                c3 = this.renderer.fontMetrics(c3 && c3.fontSize, this.text);
                this.baselineOffset = l4 + Math.min((this.text.firstLineMetrics || c3).b, f6.height || Infinity);
                this.heightSetting && (this.baselineOffset += (this.heightSetting - c3.h) / 2);
                this.needsBox && (this.box || (l4 = this.box = this.symbolKey ? this.renderer.symbol(this.symbolKey) : this.renderer.rect(), l4.addClass(("button" === this.className ? "" : "highcharts-label-box") + (this.className ? " highcharts-" + this.className + "-box" : "")), l4.add(this)), l4 = this.getCrispAdjust(), a3.x = l4, a3.y = (this.baseline ? -this.baselineOffset : 0) + l4, a3.width = Math.round(this.width), a3.height = Math.round(this.height), this.box.attr(z(a3, this.deferredAttr)), this.deferredAttr = {
                });
            };
            g2.prototype.updateTextPadding = function() {
                var c3 = this.text;
                this.updateBoxSize();
                var a3 = this.baseline ? 0 : this.baselineOffset, g5 = u2(this.paddingLeft, this.padding);
                E(this.widthSetting) && this.bBox && ("center" === this.textAlign || "right" === this.textAlign) && (g5 += ({
                    center: 0.5,
                    right: 1
                })[this.textAlign] * (this.widthSetting - this.bBox.width));
                if (g5 !== c3.x || a3 !== c3.y) c3.attr("x", g5), c3.hasBoxWidthChanged && (this.bBox = c3.getBBox(!0)), "undefined" !== typeof a3 && c3.attr("y", a3);
                c3.x = g5;
                c3.y = a3;
            };
            g2.prototype.widthSetter = function(c3) {
                this.widthSetting = x(c3) ? c3 : void 0;
            };
            g2.prototype.getPaddedWidth = function() {
                var c3 = this.padding, a3 = u2(this.paddingLeft, c3);
                c3 = u2(this.paddingRight, c3);
                return (this.widthSetting || this.bBox.width || 0) + a3 + c3;
            };
            g2.prototype.xSetter = function(c3) {
                this.x = c3;
                this.alignFactor && (c3 -= this.alignFactor * this.getPaddedWidth(), this["forceAnimate:x"] = !0);
                this.xSetting = Math.round(c3);
                this.attr("translateX", this.xSetting);
            };
            g2.prototype.ySetter = function(c3) {
                this.ySetting = this.y = Math.round(c3);
                this.attr("translateY", this.ySetting);
            };
            g2.emptyBBox = {
                width: 0,
                height: 0,
                x: 0,
                y: 0
            };
            g2.textProps = "color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(" ");
            return g2;
        })(a1);
    });
    M(a3, "Core/Renderer/SVG/Symbols.js", [
        a3["Core/Utilities.js"]
    ], function(a1) {
        function r(a3, n, m2, g2, c3) {
            var e5 = [];
            if (c3) {
                var l4 = c3.start || 0, f6 = J(c3.r, m2);
                m2 = J(c3.r, g2 || m2);
                var v = (c3.end || 0) - 0.001;
                g2 = c3.innerR;
                var q = J(c3.open, 0.001 > Math.abs((c3.end || 0) - l4 - 2 * Math.PI)), k8 = Math.cos(l4), I = Math.sin(l4), D = Math.cos(v), B = Math.sin(v);
                l4 = J(c3.longArc, 0.001 > v - l4 - Math.PI ? 0 : 1);
                e5.push([
                    "M",
                    a3 + f6 * k8,
                    n + m2 * I
                ], [
                    "A",
                    f6,
                    m2,
                    0,
                    l4,
                    J(c3.clockwise, 1),
                    a3 + f6 * D,
                    n + m2 * B
                ]);
                z(g2) && e5.push(q ? [
                    "M",
                    a3 + g2 * D,
                    n + g2 * B
                ] : [
                    "L",
                    a3 + g2 * D,
                    n + g2 * B
                ], [
                    "A",
                    g2,
                    g2,
                    0,
                    l4,
                    z(c3.clockwise) ? 1 - c3.clockwise : 0,
                    a3 + g2 * k8,
                    n + g2 * I
                ]);
                q || e5.push([
                    "Z"
                ]);
            }
            return e5;
        }
        function C(a3, n, m2, g2, c3) {
            return c3 && c3.r ? E(a3, n, m2, g2, c3) : [
                [
                    "M",
                    a3,
                    n
                ],
                [
                    "L",
                    a3 + m2,
                    n
                ],
                [
                    "L",
                    a3 + m2,
                    n + g2
                ],
                [
                    "L",
                    a3,
                    n + g2
                ],
                [
                    "Z"
                ]
            ];
        }
        function E(a3, n, m2, g2, c3) {
            c3 = c3 && c3.r || 0;
            return [
                [
                    "M",
                    a3 + c3,
                    n
                ],
                [
                    "L",
                    a3 + m2 - c3,
                    n
                ],
                [
                    "C",
                    a3 + m2,
                    n,
                    a3 + m2,
                    n,
                    a3 + m2,
                    n + c3
                ],
                [
                    "L",
                    a3 + m2,
                    n + g2 - c3
                ],
                [
                    "C",
                    a3 + m2,
                    n + g2,
                    a3 + m2,
                    n + g2,
                    a3 + m2 - c3,
                    n + g2
                ],
                [
                    "L",
                    a3 + c3,
                    n + g2
                ],
                [
                    "C",
                    a3,
                    n + g2,
                    a3,
                    n + g2,
                    a3,
                    n + g2 - c3
                ],
                [
                    "L",
                    a3,
                    n + c3
                ],
                [
                    "C",
                    a3,
                    n,
                    a3,
                    n,
                    a3 + c3,
                    n
                ]
            ];
        }
        var z = a1.defined, x = a1.isNumber, J = a1.pick;
        return {
            arc: r,
            callout: function(a3, n, m2, g2, c3) {
                var e5 = Math.min(c3 && c3.r || 0, m2, g2), l5 = e5 + 6, f9 = c3 && c3.anchorX;
                c3 = c3 && c3.anchorY || 0;
                var v = E(a3, n, m2, g2, {
                    r: e5
                });
                if (!x(f9)) return v;
                a3 + f9 >= m2 ? c3 > n + l5 && c3 < n + g2 - l5 ? v.splice(3, 1, [
                    "L",
                    a3 + m2,
                    c3 - 6
                ], [
                    "L",
                    a3 + m2 + 6,
                    c3
                ], [
                    "L",
                    a3 + m2,
                    c3 + 6
                ], [
                    "L",
                    a3 + m2,
                    n + g2 - e5
                ]) : v.splice(3, 1, [
                    "L",
                    a3 + m2,
                    g2 / 2
                ], [
                    "L",
                    f9,
                    c3
                ], [
                    "L",
                    a3 + m2,
                    g2 / 2
                ], [
                    "L",
                    a3 + m2,
                    n + g2 - e5
                ]) : 0 >= a3 + f9 ? c3 > n + l5 && c3 < n + g2 - l5 ? v.splice(7, 1, [
                    "L",
                    a3,
                    c3 + 6
                ], [
                    "L",
                    a3 - 6,
                    c3
                ], [
                    "L",
                    a3,
                    c3 - 6
                ], [
                    "L",
                    a3,
                    n + e5
                ]) : v.splice(7, 1, [
                    "L",
                    a3,
                    g2 / 2
                ], [
                    "L",
                    f9,
                    c3
                ], [
                    "L",
                    a3,
                    g2 / 2
                ], [
                    "L",
                    a3,
                    n + e5
                ]) : c3 && c3 > g2 && f9 > a3 + l5 && f9 < a3 + m2 - l5 ? v.splice(5, 1, [
                    "L",
                    f9 + 6,
                    n + g2
                ], [
                    "L",
                    f9,
                    n + g2 + 6
                ], [
                    "L",
                    f9 - 6,
                    n + g2
                ], [
                    "L",
                    a3 + e5,
                    n + g2
                ]) : c3 && 0 > c3 && f9 > a3 + l5 && f9 < a3 + m2 - l5 && v.splice(1, 1, [
                    "L",
                    f9 - 6,
                    n
                ], [
                    "L",
                    f9,
                    n - 6
                ], [
                    "L",
                    f9 + 6,
                    n
                ], [
                    "L",
                    m2 - e5,
                    n
                ]);
                return v;
            },
            circle: function(a3, n, m2, g2) {
                return r(a3 + m2 / 2, n + g2 / 2, m2 / 2, g2 / 2, {
                    start: 0.5 * Math.PI,
                    end: 2.5 * Math.PI,
                    open: !1
                });
            },
            diamond: function(a3, n, m2, g2) {
                return [
                    [
                        "M",
                        a3 + m2 / 2,
                        n
                    ],
                    [
                        "L",
                        a3 + m2,
                        n + g2 / 2
                    ],
                    [
                        "L",
                        a3 + m2 / 2,
                        n + g2
                    ],
                    [
                        "L",
                        a3,
                        n + g2 / 2
                    ],
                    [
                        "Z"
                    ]
                ];
            },
            rect: C,
            roundedRect: E,
            square: C,
            triangle: function(a3, n, m2, g2) {
                return [
                    [
                        "M",
                        a3 + m2 / 2,
                        n
                    ],
                    [
                        "L",
                        a3 + m2,
                        n + g2
                    ],
                    [
                        "L",
                        a3,
                        n + g2
                    ],
                    [
                        "Z"
                    ]
                ];
            },
            "triangle-down": function(a3, n, m2, g2) {
                return [
                    [
                        "M",
                        a3,
                        n
                    ],
                    [
                        "L",
                        a3 + m2,
                        n
                    ],
                    [
                        "L",
                        a3 + m2 / 2,
                        n + g2
                    ],
                    [
                        "Z"
                    ]
                ];
            }
        };
    });
    M(a3, "Core/Renderer/SVG/TextBuilder.js", [
        a3["Core/Renderer/HTML/AST.js"],
        a3["Core/Globals.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w, C) {
        var r = w.doc, z = w.SVG_NS, x = C.attr, J = C.isString, u2 = C.objectEach, n = C.pick;
        return (function() {
            function m2(a3) {
                var c3 = a3.styles;
                this.renderer = a3.renderer;
                this.svgElement = a3;
                this.width = a3.textWidth;
                this.textLineHeight = c3 && c3.lineHeight;
                this.textOutline = c3 && c3.textOutline;
                this.ellipsis = !(!c3 || "ellipsis" !== c3.textOverflow);
                this.noWrap = !(!c3 || "nowrap" !== c3.whiteSpace);
                this.fontSize = c3 && c3.fontSize;
            }
            m2.prototype.buildSVG = function() {
                var g2 = this.svgElement, c3 = g2.element, e5 = g2.renderer, l5 = n(g2.textStr, "").toString(), f9 = -1 !== l5.indexOf("<"), v = c3.childNodes;
                e5 = this.width && !g2.added && e5.box;
                var q = /<br.*?>/g, k12 = [
                    l5,
                    this.ellipsis,
                    this.noWrap,
                    this.textLineHeight,
                    this.textOutline,
                    this.fontSize,
                    this.width
                ].join();
                if (k12 !== g2.textCache) {
                    g2.textCache = k12;
                    delete g2.actualWidth;
                    for(k12 = v.length; k12--;)c3.removeChild(v[k12]);
                    f9 || this.ellipsis || this.width || -1 !== l5.indexOf(" ") && (!this.noWrap || q.test(l5)) ? "" !== l5 && (e5 && e5.appendChild(c3), l5 = new a1(l5), this.modifyTree(l5.nodes), l5.addToDOM(g2.element), this.modifyDOM(), this.ellipsis && -1 !== (c3.textContent || "").indexOf("\u2026") && g2.attr("title", this.unescapeEntities(g2.textStr || "", [
                        "&lt;",
                        "&gt;"
                    ])), e5 && e5.removeChild(c3)) : c3.appendChild(r.createTextNode(this.unescapeEntities(l5)));
                    J(this.textOutline) && g2.applyTextOutline && g2.applyTextOutline(this.textOutline);
                }
            };
            m2.prototype.modifyDOM = function() {
                var a3 = this, c3 = this.svgElement, e5 = x(c3.element, "x");
                c3.firstLineMetrics = void 0;
                for(var l5; l5 = c3.element.firstChild;)if (/^[\s\u200B]*$/.test(l5.textContent || " ")) c3.element.removeChild(l5);
                else break;
                [].forEach.call(c3.element.querySelectorAll("tspan.highcharts-br"), function(f9, g2) {
                    f9.nextSibling && f9.previousSibling && (0 === g2 && 1 === f9.previousSibling.nodeType && (c3.firstLineMetrics = c3.renderer.fontMetrics(void 0, f9.previousSibling)), x(f9, {
                        dy: a3.getLineHeight(f9.nextSibling),
                        x: e5
                    }));
                });
                var f9 = this.width || 0;
                if (f9) {
                    var v = function(k12, g2) {
                        var l6 = k12.textContent || "", q = l6.replace(/([^\^])-/g, "$1- ").split(" "), v1 = !a3.noWrap && (1 < q.length || 1 < c3.element.childNodes.length), t = a3.getLineHeight(g2), h2 = 0, d = c3.actualWidth;
                        if (a3.ellipsis) l6 && a3.truncate(k12, l6, void 0, 0, Math.max(0, f9 - parseInt(a3.fontSize || 12, 10)), function(b, d1) {
                            return b.substring(0, d1) + "\u2026";
                        });
                        else if (v1) {
                            l6 = [];
                            for(v1 = []; g2.firstChild && g2.firstChild !== k12;)v1.push(g2.firstChild), g2.removeChild(g2.firstChild);
                            for(; q.length;)q.length && !a3.noWrap && 0 < h2 && (l6.push(k12.textContent || ""), k12.textContent = q.join(" ").replace(/- /g, "-")), a3.truncate(k12, void 0, q, 0 === h2 ? d || 0 : 0, f9, function(b, d1) {
                                return q.slice(0, d1).join(" ").replace(/- /g, "-");
                            }), d = c3.actualWidth, h2++;
                            v1.forEach(function(b) {
                                g2.insertBefore(b, k12);
                            });
                            l6.forEach(function(b) {
                                g2.insertBefore(r.createTextNode(b), k12);
                                b = r.createElementNS(z, "tspan");
                                b.textContent = "\u200b";
                                x(b, {
                                    dy: t,
                                    x: e5
                                });
                                g2.insertBefore(b, k12);
                            });
                        }
                    }, q = function(a5) {
                        [].slice.call(a5.childNodes).forEach(function(e6) {
                            e6.nodeType === Node.TEXT_NODE ? v(e6, a5) : (-1 !== e6.className.baseVal.indexOf("highcharts-br") && (c3.actualWidth = 0), q(e6));
                        });
                    };
                    q(c3.element);
                }
            };
            m2.prototype.getLineHeight = function(a3) {
                var c3;
                a3 = a3.nodeType === Node.TEXT_NODE ? a3.parentElement : a3;
                this.renderer.styledMode || (c3 = a3 && /(px|em)$/.test(a3.style.fontSize) ? a3.style.fontSize : this.fontSize || this.renderer.style.fontSize || 12);
                return this.textLineHeight ? parseInt(this.textLineHeight.toString(), 10) : this.renderer.fontMetrics(c3, a3 || this.svgElement.element).h;
            };
            m2.prototype.modifyTree = function(a3) {
                var c3 = this, e5 = function(g2, f9) {
                    var l5 = g2.tagName, q = c3.renderer.styledMode, k12 = g2.attributes || {
                    };
                    if ("b" === l5 || "strong" === l5) q ? k12["class"] = "highcharts-strong" : k12.style = "font-weight:bold;" + (k12.style || "");
                    else if ("i" === l5 || "em" === l5) q ? k12["class"] = "highcharts-emphasized" : k12.style = "font-style:italic;" + (k12.style || "");
                    J(k12.style) && (k12.style = k12.style.replace(/(;| |^)color([ :])/, "$1fill$2"));
                    "br" === l5 && (k12["class"] = "highcharts-br", g2.textContent = "\u200b", (f9 = a3[f9 + 1]) && f9.textContent && (f9.textContent = f9.textContent.replace(/^ +/gm, "")));
                    "#text" !== l5 && "a" !== l5 && (g2.tagName = "tspan");
                    g2.attributes = k12;
                    g2.children && g2.children.filter(function(c6) {
                        return "#text" !== c6.tagName;
                    }).forEach(e5);
                };
                a3.forEach(e5);
            };
            m2.prototype.truncate = function(a3, c3, e5, l5, f9, v) {
                var g2 = this.svgElement, k12 = g2.renderer, m3 = g2.rotation, D = [], B = e5 ? 1 : 0, n1 = (c3 || e5 || "").length, t = n1, h2, d = function(b, d1) {
                    d1 = d1 || b;
                    var h3 = a3.parentNode;
                    if (h3 && "undefined" === typeof D[d1]) {
                        if (h3.getSubStringLength) try {
                            D[d1] = l5 + h3.getSubStringLength(0, e5 ? d1 + 1 : d1);
                        } catch (L) {
                        }
                        else k12.getSpanWidth && (a3.textContent = v(c3 || e5, b), D[d1] = l5 + k12.getSpanWidth(g2, a3));
                    }
                    return D[d1];
                };
                g2.rotation = 0;
                var b = d(a3.textContent.length);
                if (l5 + b > f9) {
                    for(; B <= n1;)t = Math.ceil((B + n1) / 2), e5 && (h2 = v(e5, t)), b = d(t, h2 && h2.length - 1), B === n1 ? B = n1 + 1 : b > f9 ? n1 = t - 1 : B = t;
                    0 === n1 ? a3.textContent = "" : c3 && n1 === c3.length - 1 || (a3.textContent = h2 || v(c3 || e5, t));
                }
                e5 && e5.splice(0, t);
                g2.actualWidth = b;
                g2.rotation = m3;
            };
            m2.prototype.unescapeEntities = function(a3, c3) {
                u2(this.renderer.escapes, function(e5, g2) {
                    c3 && -1 !== c3.indexOf(e5) || (a3 = a3.toString().replace(new RegExp(e5, "g"), g2));
                });
                return a3;
            };
            return m2;
        })();
    });
    M(a3, "Core/Renderer/SVG/SVGRenderer.js", [
        a3["Core/Renderer/HTML/AST.js"],
        a3["Core/Color/Color.js"],
        a3["Core/Globals.js"],
        a3["Core/Color/Palette.js"],
        a3["Core/Renderer/RendererRegistry.js"],
        a3["Core/Renderer/SVG/SVGElement.js"],
        a3["Core/Renderer/SVG/SVGLabel.js"],
        a3["Core/Renderer/SVG/Symbols.js"],
        a3["Core/Renderer/SVG/TextBuilder.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w, C, E, z, x, J, u2, n, m2) {
        var g2 = C.charts, c3 = C.deg2rad, e5 = C.doc, l5 = C.isFirefox, f9 = C.isMS, v = C.isWebKit, q = C.noop, k12 = C.SVG_NS, I = C.symbolSizes, D = C.win, B = m2.addEvent, r = m2.attr, t = m2.createElement, h2 = m2.css, d = m2.defined, b = m2.destroyObjectProperties, p = m2.extend, G3 = m2.isArray, y = m2.isNumber, L = m2.isObject, F = m2.isString, P = m2.merge, S = m2.pick, Q = m2.pInt, V = m2.uniqueKey, fa;
        C = (function() {
            function H(b1, d1, c6, a3, h3, e6, p1) {
                this.width = this.url = this.style = this.isSVG = this.imgCount = this.height = this.gradients = this.globalAnimation = this.defs = this.chartIndex = this.cacheKeys = this.cache = this.boxWrapper = this.box = this.alignedObjects = void 0;
                this.init(b1, d1, c6, a3, h3, e6, p1);
            }
            H.prototype.init = function(b1, d1, c6, a3, p1, A, H1) {
                var K = this.createElement("svg").attr({
                    version: "1.1",
                    "class": "highcharts-root"
                }), f10 = K.element;
                H1 || K.css(this.getStyle(a3));
                b1.appendChild(f10);
                r(b1, "dir", "ltr");
                -1 === b1.innerHTML.indexOf("xmlns") && r(f10, "xmlns", this.SVG_NS);
                this.isSVG = !0;
                this.box = f10;
                this.boxWrapper = K;
                this.alignedObjects = [];
                this.url = this.getReferenceURL();
                this.createElement("desc").add().element.appendChild(e5.createTextNode("Created with Highcharts 9.2.1"));
                this.defs = this.createElement("defs").add();
                this.allowHTML = A;
                this.forExport = p1;
                this.styledMode = H1;
                this.gradients = {
                };
                this.cache = {
                };
                this.cacheKeys = [];
                this.imgCount = 0;
                this.setSize(d1, c6, !1);
                var k13;
                l5 && b1.getBoundingClientRect && (d1 = function() {
                    h2(b1, {
                        left: 0,
                        top: 0
                    });
                    k13 = b1.getBoundingClientRect();
                    h2(b1, {
                        left: Math.ceil(k13.left) - k13.left + "px",
                        top: Math.ceil(k13.top) - k13.top + "px"
                    });
                }, d1(), this.unSubPixelFix = B(D, "resize", d1));
            };
            H.prototype.definition = function(b1) {
                return new a1([
                    b1
                ]).addToDOM(this.defs.element);
            };
            H.prototype.getReferenceURL = function() {
                if ((l5 || v) && e5.getElementsByTagName("base").length) {
                    if (!d(fa)) {
                        var b1 = V();
                        b1 = new a1([
                            {
                                tagName: "svg",
                                attributes: {
                                    width: 8,
                                    height: 8
                                },
                                children: [
                                    {
                                        tagName: "defs",
                                        children: [
                                            {
                                                tagName: "clipPath",
                                                attributes: {
                                                    id: b1
                                                },
                                                children: [
                                                    {
                                                        tagName: "rect",
                                                        attributes: {
                                                            width: 4,
                                                            height: 4
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        tagName: "rect",
                                        attributes: {
                                            id: "hitme",
                                            width: 8,
                                            height: 8,
                                            "clip-path": "url(#" + b1 + ")",
                                            fill: "rgba(0,0,0,0.001)"
                                        }
                                    }
                                ]
                            }
                        ]).addToDOM(e5.body);
                        h2(b1, {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            zIndex: 900000
                        });
                        var c6 = e5.elementFromPoint(6, 6);
                        fa = "hitme" === (c6 && c6.id);
                        e5.body.removeChild(b1);
                    }
                    if (fa) return D.location.href.split("#")[0].replace(/<[^>]*>/g, "").replace(/([\('\)])/g, "\\$1").replace(/ /g, "%20");
                }
                return "";
            };
            H.prototype.getStyle = function(b2) {
                return this.style = p({
                    fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',
                    fontSize: "12px"
                }, b2);
            };
            H.prototype.setStyle = function(b2) {
                this.boxWrapper.css(this.getStyle(b2));
            };
            H.prototype.isHidden = function() {
                return !this.boxWrapper.getBBox().width;
            };
            H.prototype.destroy = function() {
                var d1 = this.defs;
                this.box = null;
                this.boxWrapper = this.boxWrapper.destroy();
                b(this.gradients || {
                });
                this.gradients = null;
                d1 && (this.defs = d1.destroy());
                this.unSubPixelFix && this.unSubPixelFix();
                return this.alignedObjects = null;
            };
            H.prototype.createElement = function(b2) {
                var d1 = new this.Element;
                d1.init(this, b2);
                return d1;
            };
            H.prototype.getRadialAttr = function(b2, d1) {
                return {
                    cx: b2[0] - b2[2] / 2 + (d1.cx || 0) * b2[2],
                    cy: b2[1] - b2[2] / 2 + (d1.cy || 0) * b2[2],
                    r: (d1.r || 0) * b2[2]
                };
            };
            H.prototype.buildText = function(b2) {
                new n(b2).buildSVG();
            };
            H.prototype.getContrast = function(b2) {
                b2 = w.parse(b2).rgba;
                b2[0] *= 1;
                b2[1] *= 1.2;
                b2[2] *= 0.5;
                return 459 < b2[0] + b2[1] + b2[2] ? "#000000" : "#FFFFFF";
            };
            H.prototype.button = function(b2, d1, c7, h3, e6, A, H1, k13, g5, y1) {
                var K = this.label(b2, d1, c7, g5, void 0, void 0, y1, void 0, "button"), G4 = this.styledMode, l6 = 0, t1 = e6 ? P(e6) : {
                };
                b2 = t1 && t1.style || {
                };
                t1 = a1.filterUserAttributes(t1);
                K.attr(P({
                    padding: 8,
                    r: 2
                }, t1));
                if (!G4) {
                    t1 = P({
                        fill: E.neutralColor3,
                        stroke: E.neutralColor20,
                        "stroke-width": 1,
                        style: {
                            color: E.neutralColor80,
                            cursor: "pointer",
                            fontWeight: "normal"
                        }
                    }, {
                        style: b2
                    }, t1);
                    var N = t1.style;
                    delete t1.style;
                    A = P(t1, {
                        fill: E.neutralColor10
                    }, a1.filterUserAttributes(A || {
                    }));
                    var q1 = A.style;
                    delete A.style;
                    H1 = P(t1, {
                        fill: E.highlightColor10,
                        style: {
                            color: E.neutralColor100,
                            fontWeight: "bold"
                        }
                    }, a1.filterUserAttributes(H1 || {
                    }));
                    var v1 = H1.style;
                    delete H1.style;
                    k13 = P(t1, {
                        style: {
                            color: E.neutralColor20
                        }
                    }, a1.filterUserAttributes(k13 || {
                    }));
                    var F1 = k13.style;
                    delete k13.style;
                }
                B(K.element, f9 ? "mouseover" : "mouseenter", function() {
                    3 !== l6 && K.setState(1);
                });
                B(K.element, f9 ? "mouseout" : "mouseleave", function() {
                    3 !== l6 && K.setState(l6);
                });
                K.setState = function(b3) {
                    1 !== b3 && (K.state = l6 = b3);
                    K.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-" + [
                        "normal",
                        "hover",
                        "pressed",
                        "disabled"
                    ][b3 || 0]);
                    G4 || K.attr([
                        t1,
                        A,
                        H1,
                        k13
                    ][b3 || 0]).css([
                        N,
                        q1,
                        v1,
                        F1
                    ][b3 || 0]);
                };
                G4 || K.attr(t1).css(p({
                    cursor: "default"
                }, N));
                return K.on("touchstart", function(b3) {
                    return b3.stopPropagation();
                }).on("click", function(b3) {
                    3 !== l6 && h3.call(K, b3);
                });
            };
            H.prototype.crispLine = function(b2, c7, a3) {
                (void 0) === a3 && (a3 = "round");
                var h3 = b2[0], e6 = b2[1];
                d(h3[1]) && h3[1] === e6[1] && (h3[1] = e6[1] = Math[a3](h3[1]) - c7 % 2 / 2);
                d(h3[2]) && h3[2] === e6[2] && (h3[2] = e6[2] = Math[a3](h3[2]) + c7 % 2 / 2);
                return b2;
            };
            H.prototype.path = function(b2) {
                var d1 = this.styledMode ? {
                } : {
                    fill: "none"
                };
                G3(b2) ? d1.d = b2 : L(b2) && p(d1, b2);
                return this.createElement("path").attr(d1);
            };
            H.prototype.circle = function(b2, d1, c7) {
                b2 = L(b2) ? b2 : "undefined" === typeof b2 ? {
                } : {
                    x: b2,
                    y: d1,
                    r: c7
                };
                d1 = this.createElement("circle");
                d1.xSetter = d1.ySetter = function(b3, d2, c8) {
                    c8.setAttribute("c" + d2, b3);
                };
                return d1.attr(b2);
            };
            H.prototype.arc = function(b2, d1, c7, a3, h3, e6) {
                L(b2) ? (a3 = b2, d1 = a3.y, c7 = a3.r, b2 = a3.x) : a3 = {
                    innerR: a3,
                    start: h3,
                    end: e6
                };
                b2 = this.symbol("arc", b2, d1, c7, c7, a3);
                b2.r = c7;
                return b2;
            };
            H.prototype.rect = function(b2, d1, c7, a3, h3, e6) {
                h3 = L(b2) ? b2.r : h3;
                var p1 = this.createElement("rect");
                b2 = L(b2) ? b2 : "undefined" === typeof b2 ? {
                } : {
                    x: b2,
                    y: d1,
                    width: Math.max(c7, 0),
                    height: Math.max(a3, 0)
                };
                this.styledMode || ("undefined" !== typeof e6 && (b2["stroke-width"] = e6, b2 = p1.crisp(b2)), b2.fill = "none");
                h3 && (b2.r = h3);
                p1.rSetter = function(b3, d2, c8) {
                    p1.r = b3;
                    r(c8, {
                        rx: b3,
                        ry: b3
                    });
                };
                p1.rGetter = function() {
                    return p1.r || 0;
                };
                return p1.attr(b2);
            };
            H.prototype.setSize = function(b2, d1, c7) {
                this.width = b2;
                this.height = d1;
                this.boxWrapper.animate({
                    width: b2,
                    height: d1
                }, {
                    step: function() {
                        this.attr({
                            viewBox: "0 0 " + this.attr("width") + " " + this.attr("height")
                        });
                    },
                    duration: S(c7, !0) ? void 0 : 0
                });
                this.alignElements();
            };
            H.prototype.g = function(b2) {
                var d1 = this.createElement("g");
                return b2 ? d1.attr({
                    "class": "highcharts-" + b2
                }) : d1;
            };
            H.prototype.image = function(b2, d1, c7, a3, h3, e6) {
                var A = {
                    preserveAspectRatio: "none"
                }, H1 = function(b3, d2) {
                    b3.setAttributeNS ? b3.setAttributeNS("http://www.w3.org/1999/xlink", "href", d2) : b3.setAttribute("hc-svg-href", d2);
                };
                1 < arguments.length && p(A, {
                    x: d1,
                    y: c7,
                    width: a3,
                    height: h3
                });
                var f10 = this.createElement("image").attr(A);
                A = function(d2) {
                    H1(f10.element, b2);
                    e6.call(f10, d2);
                };
                if (e6) {
                    H1(f10.element, "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==");
                    var K = new D.Image;
                    B(K, "load", A);
                    K.src = b2;
                    K.complete && A({
                    });
                } else H1(f10.element, b2);
                return f10;
            };
            H.prototype.symbol = function(b2, c7, a3, H1, f10, A) {
                var K = this, k13 = /^url\((.*?)\)$/, y1 = k13.test(b2), G4 = !y1 && (this.symbols[b2] ? b2 : "circle"), l6 = G4 && this.symbols[G4], q2;
                if (l6) {
                    "number" === typeof c7 && (q2 = l6.call(this.symbols, Math.round(c7 || 0), Math.round(a3 || 0), H1 || 0, f10 || 0, A));
                    var v2 = this.path(q2);
                    K.styledMode || v2.attr("fill", "none");
                    p(v2, {
                        symbolName: G4 || void 0,
                        x: c7,
                        y: a3,
                        width: H1,
                        height: f10
                    });
                    A && p(v2, A);
                } else if (y1) {
                    var F2 = b2.match(k13)[1];
                    var m3 = v2 = this.image(F2);
                    m3.imgwidth = S(I[F2] && I[F2].width, A && A.width);
                    m3.imgheight = S(I[F2] && I[F2].height, A && A.height);
                    var L1 = function(b3) {
                        return b3.attr({
                            width: b3.width,
                            height: b3.height
                        });
                    };
                    [
                        "width",
                        "height"
                    ].forEach(function(b3) {
                        m3[b3 + "Setter"] = function(b4, c8) {
                            var a5 = this["img" + c8];
                            this[c8] = b4;
                            d(a5) && (A && "within" === A.backgroundSize && this.width && this.height && (a5 = Math.round(a5 * Math.min(this.width / this.imgwidth, this.height / this.imgheight))), this.element && this.element.setAttribute(c8, a5), this.alignByTranslate || (b4 = ((this[c8] || 0) - a5) / 2, this.attr("width" === c8 ? {
                                translateX: b4
                            } : {
                                translateY: b4
                            })));
                        };
                    });
                    d(c7) && m3.attr({
                        x: c7,
                        y: a3
                    });
                    m3.isImg = !0;
                    d(m3.imgwidth) && d(m3.imgheight) ? L1(m3) : (m3.attr({
                        width: 0,
                        height: 0
                    }), t("img", {
                        onload: function() {
                            var b3 = g2[K.chartIndex];
                            0 === this.width && (h2(this, {
                                position: "absolute",
                                top: "-999em"
                            }), e5.body.appendChild(this));
                            I[F2] = {
                                width: this.width,
                                height: this.height
                            };
                            m3.imgwidth = this.width;
                            m3.imgheight = this.height;
                            m3.element && L1(m3);
                            this.parentNode && this.parentNode.removeChild(this);
                            K.imgCount--;
                            if (!K.imgCount && b3 && !b3.hasLoaded) b3.onload();
                        },
                        src: F2
                    }), this.imgCount++);
                }
                return v2;
            };
            H.prototype.clipRect = function(b2, d1, c7, a3) {
                var h3 = V() + "-", e6 = this.createElement("clipPath").attr({
                    id: h3
                }).add(this.defs);
                b2 = this.rect(b2, d1, c7, a3, 0).add(e6);
                b2.id = h3;
                b2.clipPath = e6;
                b2.count = 0;
                return b2;
            };
            H.prototype.text = function(b2, c7, a3, h3) {
                var e6 = {
                };
                if (h3 && (this.allowHTML || !this.forExport)) return this.html(b2, c7, a3);
                e6.x = Math.round(c7 || 0);
                a3 && (e6.y = Math.round(a3));
                d(b2) && (e6.text = b2);
                b2 = this.createElement("text").attr(e6);
                if (!h3 || this.forExport && !this.allowHTML) b2.xSetter = function(b3, d1, c8) {
                    for(var a5 = c8.getElementsByTagName("tspan"), h4 = c8.getAttribute(d1), e7 = 0, p1; e7 < a5.length; e7++)p1 = a5[e7], p1.getAttribute(d1) === h4 && p1.setAttribute(d1, b3);
                    c8.setAttribute(d1, b3);
                };
                return b2;
            };
            H.prototype.fontMetrics = function(b2, d1) {
                b2 = !this.styledMode && /px/.test(b2) || !D.getComputedStyle ? b2 || d1 && d1.style && d1.style.fontSize || this.style && this.style.fontSize : d1 && x.prototype.getStyle.call(d1, "font-size");
                b2 = /px/.test(b2) ? Q(b2) : 12;
                d1 = 24 > b2 ? b2 + 3 : Math.round(1.2 * b2);
                return {
                    h: d1,
                    b: Math.round(0.8 * d1),
                    f: b2
                };
            };
            H.prototype.rotCorr = function(b2, d1, a3) {
                var h3 = b2;
                d1 && a3 && (h3 = Math.max(h3 * Math.cos(d1 * c3), 4));
                return {
                    x: -b2 / 3 * Math.sin(d1 * c3),
                    y: h3
                };
            };
            H.prototype.pathToSegments = function(b2) {
                for(var d1 = [], c7 = [], a3 = {
                    A: 8,
                    C: 7,
                    H: 2,
                    L: 3,
                    M: 3,
                    Q: 5,
                    S: 5,
                    T: 3,
                    V: 2
                }, h3 = 0; h3 < b2.length; h3++)F(c7[0]) && y(b2[h3]) && c7.length === a3[c7[0].toUpperCase()] && b2.splice(h3, 0, c7[0].replace("M", "L").replace("m", "l")), "string" === typeof b2[h3] && (c7.length && d1.push(c7.slice(0)), c7.length = 0), c7.push(b2[h3]);
                d1.push(c7.slice(0));
                return d1;
            };
            H.prototype.label = function(b2, d1, c7, a3, h3, e6, p1, H1, f10) {
                return new J(this, b2, d1, c7, a3, h3, e6, p1, H1, f10);
            };
            H.prototype.alignElements = function() {
                this.alignedObjects.forEach(function(b2) {
                    return b2.align();
                });
            };
            return H;
        })();
        p(C.prototype, {
            Element: x,
            SVG_NS: k12,
            escapes: {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "'": "&#39;",
                '"': "&quot;"
            },
            symbols: u2,
            draw: q
        });
        z.registerRendererType("svg", C, !0);
        return C;
    });
    M(a3, "Core/Renderer/HTML/HTMLElement.js", [
        a3["Core/Globals.js"],
        a3["Core/Renderer/SVG/SVGElement.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w, C) {
        var r = this && this.__extends || function() {
            var c3 = function(a3, e5) {
                c3 = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(c7, a5) {
                    c7.__proto__ = a5;
                } || function(c7, a5) {
                    for(var e6 in a5)a5.hasOwnProperty(e6) && (c7[e6] = a5[e6]);
                };
                return c3(a3, e5);
            };
            return function(a3, e5) {
                function f9() {
                    this.constructor = a3;
                }
                c3(a3, e5);
                a3.prototype = null === e5 ? Object.create(e5) : (f9.prototype = e5.prototype, new f9);
            };
        }(), z = a1.isFirefox, x = a1.isMS, J = a1.isWebKit, u2 = a1.win, n = C.css, m2 = C.defined, g2 = C.extend, c3 = C.pick, e5 = C.pInt;
        return (function(a3) {
            function f9() {
                return null !== a3 && a3.apply(this, arguments) || this;
            }
            r(f9, a3);
            f9.compose = function(c7) {
                if (-1 === f9.composedClasses.indexOf(c7)) {
                    f9.composedClasses.push(c7);
                    var a5 = f9.prototype, e6 = c7.prototype;
                    e6.getSpanCorrection = a5.getSpanCorrection;
                    e6.htmlCss = a5.htmlCss;
                    e6.htmlGetBBox = a5.htmlGetBBox;
                    e6.htmlUpdateTransform = a5.htmlUpdateTransform;
                    e6.setSpanRotation = a5.setSpanRotation;
                }
                return c7;
            };
            f9.prototype.getSpanCorrection = function(c7, a6, e7) {
                this.xCorr = -c7 * e7;
                this.yCorr = -a6;
            };
            f9.prototype.htmlCss = function(a6) {
                var e7 = "SPAN" === this.element.tagName && a6 && "width" in a6, f10 = c3(e7 && a6.width, void 0);
                if (e7) {
                    delete a6.width;
                    this.textWidth = f10;
                    var l5 = !0;
                }
                a6 && "ellipsis" === a6.textOverflow && (a6.whiteSpace = "nowrap", a6.overflow = "hidden");
                this.styles = g2(this.styles, a6);
                n(this.element, a6);
                l5 && this.htmlUpdateTransform();
                return this;
            };
            f9.prototype.htmlGetBBox = function() {
                var c7 = this.element;
                return {
                    x: c7.offsetLeft,
                    y: c7.offsetTop,
                    width: c7.offsetWidth,
                    height: c7.offsetHeight
                };
            };
            f9.prototype.htmlUpdateTransform = function() {
                if (this.added) {
                    var c7 = this.renderer, a6 = this.element, f10 = this.translateX || 0, g5 = this.translateY || 0, l6 = this.x || 0, B = this.y || 0, r1 = this.textAlign || "left", t = {
                        left: 0,
                        center: 0.5,
                        right: 1
                    }[r1], h2 = this.styles;
                    h2 = h2 && h2.whiteSpace;
                    n(a6, {
                        marginLeft: f10,
                        marginTop: g5
                    });
                    !c7.styledMode && this.shadows && this.shadows.forEach(function(b2) {
                        n(b2, {
                            marginLeft: f10 + 1,
                            marginTop: g5 + 1
                        });
                    });
                    this.inverted && [].forEach.call(a6.childNodes, function(b2) {
                        c7.invertChild(b2, a6);
                    });
                    if ("SPAN" === a6.tagName) {
                        var d = this.rotation, b2 = this.textWidth && e5(this.textWidth), p = [
                            d,
                            r1,
                            a6.innerHTML,
                            this.textWidth,
                            this.textAlign
                        ].join(), G3 = void 0;
                        (G3 = b2 !== this.oldTextWidth) && !(G3 = b2 > this.oldTextWidth) && ((G3 = this.textPxLength) || (n(a6, {
                            width: "",
                            whiteSpace: h2 || "nowrap"
                        }), G3 = a6.offsetWidth), G3 = G3 > b2);
                        G3 && (/[ \-]/.test(a6.textContent || a6.innerText) || "ellipsis" === a6.style.textOverflow) ? (n(a6, {
                            width: b2 + "px",
                            display: "block",
                            whiteSpace: h2 || "normal"
                        }), this.oldTextWidth = b2, this.hasBoxWidthChanged = !0) : this.hasBoxWidthChanged = !1;
                        p !== this.cTT && (G3 = c7.fontMetrics(a6.style.fontSize, a6).b, !m2(d) || d === (this.oldRotation || 0) && r1 === this.oldAlign || this.setSpanRotation(d, t, G3), this.getSpanCorrection(!m2(d) && this.textPxLength || a6.offsetWidth, G3, t, d, r1));
                        n(a6, {
                            left: l6 + (this.xCorr || 0) + "px",
                            top: B + (this.yCorr || 0) + "px"
                        });
                        this.cTT = p;
                        this.oldRotation = d;
                        this.oldAlign = r1;
                    }
                } else this.alignOnAdd = !0;
            };
            f9.prototype.setSpanRotation = function(c8, a7, e7) {
                var f11 = {
                }, g6 = x && !/Edge/.test(u2.navigator.userAgent) ? "-ms-transform" : J ? "-webkit-transform" : z ? "MozTransform" : u2.opera ? "-o-transform" : void 0;
                g6 && (f11[g6] = f11.transform = "rotate(" + c8 + "deg)", f11[g6 + (z ? "Origin" : "-origin")] = f11.transformOrigin = 100 * a7 + "% " + e7 + "px", n(this.element, f11));
            };
            f9.composedClasses = [];
            return f9;
        })(w);
    });
    M(a3, "Core/Renderer/HTML/HTMLRenderer.js", [
        a3["Core/Renderer/HTML/AST.js"],
        a3["Core/Renderer/SVG/SVGElement.js"],
        a3["Core/Renderer/SVG/SVGRenderer.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w, C, E) {
        var r2 = this && this.__extends || function() {
            var a3 = function(g2, c3) {
                a3 = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(a7, c8) {
                    a7.__proto__ = c8;
                } || function(a7, c8) {
                    for(var e5 in c8)c8.hasOwnProperty(e5) && (a7[e5] = c8[e5]);
                };
                return a3(g2, c3);
            };
            return function(g2, c3) {
                function e5() {
                    this.constructor = g2;
                }
                a3(g2, c3);
                g2.prototype = null === c3 ? Object.create(c3) : (e5.prototype = c3.prototype, new e5);
            };
        }(), x = E.attr, J = E.createElement, u2 = E.extend, n = E.pick;
        return (function(m2) {
            function g2() {
                return null !== m2 && m2.apply(this, arguments) || this;
            }
            r2(g2, m2);
            g2.compose = function(c3) {
                -1 === g2.composedClasses.indexOf(c3) && (g2.composedClasses.push(c3), c3.prototype.html = g2.prototype.html);
                return c3;
            };
            g2.prototype.html = function(c3, e5, g6) {
                var f9 = this.createElement("span"), l7 = f9.element, q2 = f9.renderer, k12 = q2.isSVG, m4 = function(c8, a3) {
                    [
                        "opacity",
                        "visibility"
                    ].forEach(function(e7) {
                        c8[e7 + "Setter"] = function(f11, h3, d) {
                            var b3 = c8.div ? c8.div.style : a3;
                            w.prototype[e7 + "Setter"].call(this, f11, h3, d);
                            b3 && (b3[h3] = f11);
                        };
                    });
                    c8.addedSetters = !0;
                };
                f9.textSetter = function(c8) {
                    c8 !== this.textStr && (delete this.bBox, delete this.oldTextWidth, a1.setElementHTML(this.element, n(c8, "")), this.textStr = c8, f9.doTransform = !0);
                };
                k12 && m4(f9, f9.element.style);
                f9.xSetter = f9.ySetter = f9.alignSetter = f9.rotationSetter = function(c8, a3) {
                    "align" === a3 ? f9.alignValue = f9.textAlign = c8 : f9[a3] = c8;
                    f9.doTransform = !0;
                };
                f9.afterSetters = function() {
                    this.doTransform && (this.htmlUpdateTransform(), this.doTransform = !1);
                };
                f9.attr({
                    text: c3,
                    x: Math.round(e5),
                    y: Math.round(g6)
                }).css({
                    position: "absolute"
                });
                q2.styledMode || f9.css({
                    fontFamily: this.style.fontFamily,
                    fontSize: this.style.fontSize
                });
                l7.style.whiteSpace = "nowrap";
                f9.css = f9.htmlCss;
                k12 && (f9.add = function(c8) {
                    var a3 = q2.box.parentNode, e7 = [];
                    if (this.parentGroup = c8) {
                        var g7 = c8.div;
                        if (!g7) {
                            for(; c8;)e7.push(c8), c8 = c8.parentGroup;
                            e7.reverse().forEach(function(c9) {
                                function d(b3, d1) {
                                    c9[d1] = b3;
                                    "translateX" === d1 ? k13.left = b3 + "px" : k13.top = b3 + "px";
                                    c9.doTransform = !0;
                                }
                                var b3 = x(c9.element, "class"), h3 = c9.styles || {
                                };
                                g7 = c9.div = c9.div || J("div", b3 ? {
                                    className: b3
                                } : void 0, {
                                    position: "absolute",
                                    left: (c9.translateX || 0) + "px",
                                    top: (c9.translateY || 0) + "px",
                                    display: c9.display,
                                    opacity: c9.opacity,
                                    cursor: h3.cursor,
                                    pointerEvents: h3.pointerEvents,
                                    visibility: c9.visibility
                                }, g7 || a3);
                                var k13 = g7.style;
                                u2(c9, {
                                    classSetter: function(b4) {
                                        return function(d1) {
                                            this.element.setAttribute("class", d1);
                                            b4.className = d1;
                                        };
                                    }(g7),
                                    on: function() {
                                        e7[0].div && f9.on.apply({
                                            element: e7[0].div,
                                            onEvents: c9.onEvents
                                        }, arguments);
                                        return c9;
                                    },
                                    translateXSetter: d,
                                    translateYSetter: d
                                });
                                c9.addedSetters || m4(c9);
                            });
                        }
                    } else g7 = a3;
                    g7.appendChild(l7);
                    f9.added = !0;
                    f9.alignOnAdd && f9.htmlUpdateTransform();
                    return f9;
                });
                return f9;
            };
            g2.composedClasses = [];
            return g2;
        })(C);
    });
    M(a3, "Core/Axis/AxisDefaults.js", [
        a3["Core/Color/Palette.js"]
    ], function(a1) {
        var r2;
        (function(r3) {
            r3.defaultXAxisOptions = {
                alignTicks: !0,
                allowDecimals: void 0,
                panningEnabled: !0,
                zIndex: 2,
                zoomEnabled: !0,
                dateTimeLabelFormats: {
                    millisecond: {
                        main: "%H:%M:%S.%L",
                        range: !1
                    },
                    second: {
                        main: "%H:%M:%S",
                        range: !1
                    },
                    minute: {
                        main: "%H:%M",
                        range: !1
                    },
                    hour: {
                        main: "%H:%M",
                        range: !1
                    },
                    day: {
                        main: "%e. %b"
                    },
                    week: {
                        main: "%e. %b"
                    },
                    month: {
                        main: "%b '%y"
                    },
                    year: {
                        main: "%Y"
                    }
                },
                endOnTick: !1,
                gridLineDashStyle: "Solid",
                gridZIndex: 1,
                labels: {
                    autoRotation: void 0,
                    autoRotationLimit: 80,
                    distance: void 0,
                    enabled: !0,
                    indentation: 10,
                    overflow: "justify",
                    padding: 5,
                    reserveSpace: void 0,
                    rotation: void 0,
                    staggerLines: 0,
                    step: 0,
                    useHTML: !1,
                    x: 0,
                    zIndex: 7,
                    style: {
                        color: a1.neutralColor60,
                        cursor: "default",
                        fontSize: "11px"
                    }
                },
                maxPadding: 0.01,
                minorGridLineDashStyle: "Solid",
                minorTickLength: 2,
                minorTickPosition: "outside",
                minPadding: 0.01,
                offset: void 0,
                opposite: !1,
                reversed: void 0,
                reversedStacks: !1,
                showEmpty: !0,
                showFirstLabel: !0,
                showLastLabel: !0,
                startOfWeek: 1,
                startOnTick: !1,
                tickLength: 10,
                tickPixelInterval: 100,
                tickmarkPlacement: "between",
                tickPosition: "outside",
                title: {
                    align: "middle",
                    rotation: 0,
                    useHTML: !1,
                    x: 0,
                    y: 0,
                    style: {
                        color: a1.neutralColor60
                    }
                },
                type: "linear",
                uniqueNames: !0,
                visible: !0,
                minorGridLineColor: a1.neutralColor5,
                minorGridLineWidth: 1,
                minorTickColor: a1.neutralColor40,
                lineColor: a1.highlightColor20,
                lineWidth: 1,
                gridLineColor: a1.neutralColor10,
                gridLineWidth: void 0,
                tickColor: a1.highlightColor20
            };
            r3.defaultYAxisOptions = {
                reversedStacks: !0,
                endOnTick: !0,
                maxPadding: 0.05,
                minPadding: 0.05,
                tickPixelInterval: 72,
                showLastLabel: !0,
                labels: {
                    x: -8
                },
                startOnTick: !0,
                title: {
                    rotation: 270,
                    text: "Values"
                },
                stackLabels: {
                    animation: {
                    },
                    allowOverlap: !1,
                    enabled: !1,
                    crop: !0,
                    overflow: "justify",
                    formatter: function() {
                        var a3 = this.axis.chart.numberFormatter;
                        return a3(this.total, -1);
                    },
                    style: {
                        color: a1.neutralColor100,
                        fontSize: "11px",
                        fontWeight: "bold",
                        textOutline: "1px contrast"
                    }
                },
                gridLineWidth: 1,
                lineWidth: 0
            };
            r3.defaultLeftAxisOptions = {
                labels: {
                    x: -15
                },
                title: {
                    rotation: 270
                }
            };
            r3.defaultRightAxisOptions = {
                labels: {
                    x: 15
                },
                title: {
                    rotation: 90
                }
            };
            r3.defaultBottomAxisOptions = {
                labels: {
                    autoRotation: [
                        -45
                    ],
                    x: 0
                },
                margin: 15,
                title: {
                    rotation: 0
                }
            };
            r3.defaultTopAxisOptions = {
                labels: {
                    autoRotation: [
                        -45
                    ],
                    x: 0
                },
                margin: 15,
                title: {
                    rotation: 0
                }
            };
        })(r2 || (r2 = {
        }));
        return r2;
    });
    M(a3, "Core/Foundation.js", [
        a3["Core/Utilities.js"]
    ], function(a1) {
        var r2 = a1.addEvent, C = a1.isFunction, E = a1.objectEach, z = a1.removeEvent;
        return {
            registerEventOptions: function(a3, w) {
                a3.eventOptions = a3.eventOptions || {
                };
                E(w.events, function(u2, n) {
                    a3.eventOptions[n] !== u2 && (a3.eventOptions[n] && (z(a3, n, a3.eventOptions[n]), delete a3.eventOptions[n]), C(u2) && (a3.eventOptions[n] = u2, r2(a3, n, u2)));
                });
            }
        };
    });
    M(a3, "Core/Axis/Tick.js", [
        a3["Core/FormatUtilities.js"],
        a3["Core/Globals.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w, C) {
        var r2 = w.deg2rad, z = C.clamp, x = C.correctFloat, J = C.defined, u2 = C.destroyObjectProperties, n = C.extend, m2 = C.fireEvent, g2 = C.isNumber, c3 = C.merge, e5 = C.objectEach, l7 = C.pick;
        w = (function() {
            function f9(c8, a3, e7, f11, g6) {
                this.isNewLabel = this.isNew = !0;
                this.axis = c8;
                this.pos = a3;
                this.type = e7 || "";
                this.parameters = g6 || {
                };
                this.tickmarkOffset = this.parameters.tickmarkOffset;
                this.options = this.parameters.options;
                m2(this, "init");
                e7 || f11 || this.addLabel();
            }
            f9.prototype.addLabel = function() {
                var c8 = this, e7 = c8.axis, f11 = e7.options, I = e7.chart, D = e7.categories, B = e7.logarithmic, r3 = e7.names, t = c8.pos, h3 = l7(c8.options && c8.options.labels, f11.labels), d = e7.tickPositions, b3 = t === d[0], p = t === d[d.length - 1], G4 = (!h3.step || 1 === h3.step) && 1 === e7.tickInterval;
                d = d.info;
                var y = c8.label, L2;
                D = this.parameters.category || (D ? l7(D[t], r3[t], t) : t);
                B && g2(D) && (D = x(B.lin2log(D)));
                if (e7.dateTime) {
                    if (d) {
                        var F3 = I.time.resolveDTLFormat(f11.dateTimeLabelFormats[!f11.grid && d.higherRanks[t] || d.unitName]);
                        var P = F3.main;
                    } else g2(D) && (P = e7.dateTime.getXDateFormat(D, f11.dateTimeLabelFormats || {
                    }));
                }
                c8.isFirst = b3;
                c8.isLast = p;
                var S = {
                    axis: e7,
                    chart: I,
                    dateTimeLabelFormat: P,
                    isFirst: b3,
                    isLast: p,
                    pos: t,
                    tick: c8,
                    tickPositionInfo: d,
                    value: D
                };
                m2(this, "labelFormat", S);
                var Q = function(b4) {
                    return h3.formatter ? h3.formatter.call(b4, b4) : h3.format ? (b4.text = e7.defaultLabelFormatter.call(b4), a1.format(h3.format, b4, I)) : e7.defaultLabelFormatter.call(b4, b4);
                };
                f11 = Q.call(S, S);
                var u3 = F3 && F3.list;
                c8.shortenLabel = u3 ? function() {
                    for(L2 = 0; L2 < u3.length; L2++)if (n(S, {
                        dateTimeLabelFormat: u3[L2]
                    }), y.attr({
                        text: Q.call(S, S)
                    }), y.getBBox().width < e7.getSlotWidth(c8) - 2 * h3.padding) return;
                    y.attr({
                        text: ""
                    });
                } : void 0;
                G4 && e7._addedPlotLB && c8.moveLabel(f11, h3);
                J(y) || c8.movedLabel ? y && y.textStr !== f11 && !G4 && (!y.textWidth || h3.style.width || y.styles.width || y.css({
                    width: null
                }), y.attr({
                    text: f11
                }), y.textPxLength = y.getBBox().width) : (c8.label = y = c8.createLabel({
                    x: 0,
                    y: 0
                }, f11, h3), c8.rotation = 0);
            };
            f9.prototype.createLabel = function(a3, e7, f11) {
                var g6 = this.axis, k12 = g6.chart;
                if (a3 = J(e7) && f11.enabled ? k12.renderer.text(e7, a3.x, a3.y, f11.useHTML).add(g6.labelGroup) : null) k12.styledMode || a3.css(c3(f11.style)), a3.textPxLength = a3.getBBox().width;
                return a3;
            };
            f9.prototype.destroy = function() {
                u2(this, this.axis);
            };
            f9.prototype.getPosition = function(c8, a3, e7, f11) {
                var g6 = this.axis, k12 = g6.chart, l8 = f11 && k12.oldChartHeight || k12.chartHeight;
                c8 = {
                    x: c8 ? x(g6.translate(a3 + e7, null, null, f11) + g6.transB) : g6.left + g6.offset + (g6.opposite ? (f11 && k12.oldChartWidth || k12.chartWidth) - g6.right - g6.left : 0),
                    y: c8 ? l8 - g6.bottom + g6.offset - (g6.opposite ? g6.height : 0) : x(l8 - g6.translate(a3 + e7, null, null, f11) - g6.transB)
                };
                c8.y = z(c8.y, -100000, 100000);
                m2(this, "afterGetPosition", {
                    pos: c8
                });
                return c8;
            };
            f9.prototype.getLabelPosition = function(c8, a3, e7, f11, g6, l8, n1, t) {
                var h3 = this.axis, d = h3.transA, b3 = h3.isLinked && h3.linkedParent ? h3.linkedParent.reversed : h3.reversed, p = h3.staggerLines, k12 = h3.tickRotCorr || {
                    x: 0,
                    y: 0
                }, y = f11 || h3.reserveSpaceDefault ? 0 : -h3.labelOffset * ("center" === h3.labelAlign ? 0.5 : 1), q2 = {
                }, F4 = g6.y;
                J(F4) || (F4 = 0 === h3.side ? e7.rotation ? -8 : -e7.getBBox().height : 2 === h3.side ? k12.y + 8 : Math.cos(e7.rotation * r2) * (k12.y - e7.getBBox(!1, 0).height / 2));
                c8 = c8 + g6.x + y + k12.x - (l8 && f11 ? l8 * d * (b3 ? -1 : 1) : 0);
                a3 = a3 + F4 - (l8 && !f11 ? l8 * d * (b3 ? 1 : -1) : 0);
                p && (e7 = n1 / (t || 1) % p, h3.opposite && (e7 = p - e7 - 1), a3 += h3.labelOffset / p * e7);
                q2.x = c8;
                q2.y = Math.round(a3);
                m2(this, "afterGetLabelPosition", {
                    pos: q2,
                    tickmarkOffset: l8,
                    index: n1
                });
                return q2;
            };
            f9.prototype.getLabelSize = function() {
                return this.label ? this.label.getBBox()[this.axis.horiz ? "height" : "width"] : 0;
            };
            f9.prototype.getMarkPath = function(c8, a3, e7, f11, g6, l8) {
                return l8.crispLine([
                    [
                        "M",
                        c8,
                        a3
                    ],
                    [
                        "L",
                        c8 + (g6 ? 0 : -e7),
                        a3 + (g6 ? e7 : 0)
                    ]
                ], f11);
            };
            f9.prototype.handleOverflow = function(c8) {
                var a3 = this.axis, e7 = a3.options.labels, f11 = c8.x, g6 = a3.chart.chartWidth, m4 = a3.chart.spacing, v3 = l7(a3.labelLeft, Math.min(a3.pos, m4[3]));
                m4 = l7(a3.labelRight, Math.max(a3.isRadial ? 0 : a3.pos + a3.len, g6 - m4[1]));
                var t = this.label, h3 = this.rotation, d = {
                    left: 0,
                    center: 0.5,
                    right: 1
                }[a3.labelAlign || t.attr("align")], b3 = t.getBBox().width, p = a3.getSlotWidth(this), G4 = {
                }, y = p, L2 = 1, F4;
                if (h3 || "justify" !== e7.overflow) 0 > h3 && f11 - d * b3 < v3 ? F4 = Math.round(f11 / Math.cos(h3 * r2) - v3) : 0 < h3 && f11 + d * b3 > m4 && (F4 = Math.round((g6 - f11) / Math.cos(h3 * r2)));
                else if (g6 = f11 + (1 - d) * b3, f11 - d * b3 < v3 ? y = c8.x + y * (1 - d) - v3 : g6 > m4 && (y = m4 - c8.x + y * d, L2 = -1), y = Math.min(p, y), y < p && "center" === a3.labelAlign && (c8.x += L2 * (p - y - d * (p - Math.min(b3, y)))), b3 > y || a3.autoRotation && (t.styles || {
                }).width) F4 = y;
                F4 && (this.shortenLabel ? this.shortenLabel() : (G4.width = Math.floor(F4) + "px", (e7.style || {
                }).textOverflow || (G4.textOverflow = "ellipsis"), t.css(G4)));
            };
            f9.prototype.moveLabel = function(c8, a3) {
                var f11 = this, g6 = f11.label, l8 = f11.axis, m4 = l8.reversed, q2 = !1;
                g6 && g6.textStr === c8 ? (f11.movedLabel = g6, q2 = !0, delete f11.label) : e5(l8.ticks, function(a7) {
                    q2 || a7.isNew || a7 === f11 || !a7.label || a7.label.textStr !== c8 || (f11.movedLabel = a7.label, q2 = !0, a7.labelPos = f11.movedLabel.xy, delete a7.label);
                });
                if (!q2 && (f11.labelPos || g6)) {
                    var t = f11.labelPos || g6.xy;
                    g6 = l8.horiz ? m4 ? 0 : l8.width + l8.left : t.x;
                    l8 = l8.horiz ? t.y : m4 ? l8.width + l8.left : 0;
                    f11.movedLabel = f11.createLabel({
                        x: g6,
                        y: l8
                    }, c8, a3);
                    f11.movedLabel && f11.movedLabel.attr({
                        opacity: 0
                    });
                }
            };
            f9.prototype.render = function(a3, c8, e7) {
                var f11 = this.axis, g6 = f11.horiz, k12 = this.pos, q2 = l7(this.tickmarkOffset, f11.tickmarkOffset);
                k12 = this.getPosition(g6, k12, q2, c8);
                q2 = k12.x;
                var t = k12.y;
                f11 = g6 && q2 === f11.pos + f11.len || !g6 && t === f11.pos ? -1 : 1;
                g6 = l7(e7, this.label && this.label.newOpacity, 1);
                e7 = l7(e7, 1);
                this.isActive = !0;
                this.renderGridLine(c8, e7, f11);
                this.renderMark(k12, e7, f11);
                this.renderLabel(k12, c8, g6, a3);
                this.isNew = !1;
                m2(this, "afterRender");
            };
            f9.prototype.renderGridLine = function(c8, a3, e7) {
                var f11 = this.axis, g6 = f11.options, k12 = {
                }, m4 = this.pos, t = this.type, h3 = l7(this.tickmarkOffset, f11.tickmarkOffset), d = f11.chart.renderer, b3 = this.gridLine, p = g6.gridLineWidth, G4 = g6.gridLineColor, y = g6.gridLineDashStyle;
                "minor" === this.type && (p = g6.minorGridLineWidth, G4 = g6.minorGridLineColor, y = g6.minorGridLineDashStyle);
                b3 || (f11.chart.styledMode || (k12.stroke = G4, k12["stroke-width"] = p || 0, k12.dashstyle = y), t || (k12.zIndex = 1), c8 && (a3 = 0), this.gridLine = b3 = d.path().attr(k12).addClass("highcharts-" + (t ? t + "-" : "") + "grid-line").add(f11.gridGroup));
                if (b3 && (e7 = f11.getPlotLinePath({
                    value: m4 + h3,
                    lineWidth: b3.strokeWidth() * e7,
                    force: "pass",
                    old: c8
                }))) b3[c8 || this.isNew ? "attr" : "animate"]({
                    d: e7,
                    opacity: a3
                });
            };
            f9.prototype.renderMark = function(c8, a3, e7) {
                var f11 = this.axis, g6 = f11.options, k12 = f11.chart.renderer, m4 = this.type, t = f11.tickSize(m4 ? m4 + "Tick" : "tick"), h3 = c8.x;
                c8 = c8.y;
                var d = l7(g6["minor" !== m4 ? "tickWidth" : "minorTickWidth"], !m4 && f11.isXAxis ? 1 : 0);
                g6 = g6["minor" !== m4 ? "tickColor" : "minorTickColor"];
                var b3 = this.mark, p = !b3;
                t && (f11.opposite && (t[0] = -t[0]), b3 || (this.mark = b3 = k12.path().addClass("highcharts-" + (m4 ? m4 + "-" : "") + "tick").add(f11.axisGroup), f11.chart.styledMode || b3.attr({
                    stroke: g6,
                    "stroke-width": d
                })), b3[p ? "attr" : "animate"]({
                    d: this.getMarkPath(h3, c8, t[0], b3.strokeWidth() * e7, f11.horiz, k12),
                    opacity: a3
                }));
            };
            f9.prototype.renderLabel = function(c8, a3, e7, f11) {
                var k12 = this.axis, m4 = k12.horiz, q2 = k12.options, t = this.label, h3 = q2.labels, d = h3.step;
                k12 = l7(this.tickmarkOffset, k12.tickmarkOffset);
                var b3 = c8.x;
                c8 = c8.y;
                var p = !0;
                t && g2(b3) && (t.xy = c8 = this.getLabelPosition(b3, c8, t, m4, h3, k12, f11, d), this.isFirst && !this.isLast && !q2.showFirstLabel || this.isLast && !this.isFirst && !q2.showLastLabel ? p = !1 : !m4 || h3.step || h3.rotation || a3 || 0 === e7 || this.handleOverflow(c8), d && f11 % d && (p = !1), p && g2(c8.y) ? (c8.opacity = e7, t[this.isNewLabel ? "attr" : "animate"](c8), this.isNewLabel = !1) : (t.attr("y", -9999), this.isNewLabel = !0));
            };
            f9.prototype.replaceMovedLabel = function() {
                var c8 = this.label, a3 = this.axis, e7 = a3.reversed;
                if (c8 && !this.isNew) {
                    var f11 = a3.horiz ? e7 ? a3.left : a3.width + a3.left : c8.xy.x;
                    e7 = a3.horiz ? c8.xy.y : e7 ? a3.width + a3.top : a3.top;
                    c8.animate({
                        x: f11,
                        y: e7,
                        opacity: 0
                    }, void 0, c8.destroy);
                    delete this.label;
                }
                a3.isDirty = !0;
                this.label = this.movedLabel;
                delete this.movedLabel;
            };
            return f9;
        })();
        return w;
    });
    M(a3, "Core/Axis/Axis.js", [
        a3["Core/Animation/AnimationUtilities.js"],
        a3["Core/Axis/AxisDefaults.js"],
        a3["Core/Color/Color.js"],
        a3["Core/Color/Palette.js"],
        a3["Core/DefaultOptions.js"],
        a3["Core/Foundation.js"],
        a3["Core/Globals.js"],
        a3["Core/Axis/Tick.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w, C, E, z, x, J, u2, n) {
        var m2 = a1.animObject, g2 = z.defaultOptions, c3 = x.registerEventOptions, e5 = J.deg2rad, l7 = n.arrayMax, f9 = n.arrayMin, v3 = n.clamp, q2 = n.correctFloat, k12 = n.defined, r2 = n.destroyObjectProperties, D = n.erase, B = n.error, O = n.extend, t = n.fireEvent, h3 = n.getMagnitude, d = n.isArray, b3 = n.isNumber, p = n.isString, G4 = n.merge, y = n.normalizeTickInterval, L2 = n.objectEach, F4 = n.pick, P = n.relativeLength, S = n.removeEvent, Q = n.splat, V = n.syncTimeout;
        a1 = (function() {
            function a3(b4, a7) {
                this.zoomEnabled = this.width = this.visible = this.userOptions = this.translationSlope = this.transB = this.transA = this.top = this.ticks = this.tickRotCorr = this.tickPositions = this.tickmarkOffset = this.tickInterval = this.tickAmount = this.side = this.series = this.right = this.positiveValuesOnly = this.pos = this.pointRangePadding = this.pointRange = this.plotLinesAndBandsGroups = this.plotLinesAndBands = this.paddedTicks = this.overlap = this.options = this.offset = this.names = this.minPixelPadding = this.minorTicks = this.minorTickInterval = this.min = this.maxLabelLength = this.max = this.len = this.left = this.labelFormatter = this.labelEdge = this.isLinked = this.height = this.hasVisibleSeries = this.hasNames = this.eventOptions = this.coll = this.closestPointRange = this.chart = this.categories = this.bottom = this.alternateBands = void 0;
                this.init(b4, a7);
            }
            a3.prototype.init = function(a7, d1) {
                var h4 = d1.isX;
                this.chart = a7;
                this.horiz = a7.inverted && !this.isZAxis ? !h4 : h4;
                this.isXAxis = h4;
                this.coll = this.coll || (h4 ? "xAxis" : "yAxis");
                t(this, "init", {
                    userOptions: d1
                });
                this.opposite = F4(d1.opposite, this.opposite);
                this.side = F4(d1.side, this.side, this.horiz ? this.opposite ? 0 : 2 : this.opposite ? 1 : 3);
                this.setOptions(d1);
                var e7 = this.options, f12 = e7.labels, p1 = e7.type;
                this.userOptions = d1;
                this.minPixelPadding = 0;
                this.reversed = F4(e7.reversed, this.reversed);
                this.visible = e7.visible;
                this.zoomEnabled = e7.zoomEnabled;
                this.hasNames = "category" === p1 || !0 === e7.categories;
                this.categories = e7.categories || this.hasNames;
                this.names || (this.names = [], this.names.keys = {
                });
                this.plotLinesAndBandsGroups = {
                };
                this.positiveValuesOnly = !!this.logarithmic;
                this.isLinked = k12(e7.linkedTo);
                this.ticks = {
                };
                this.labelEdge = [];
                this.minorTicks = {
                };
                this.plotLinesAndBands = [];
                this.alternateBands = {
                };
                this.len = 0;
                this.minRange = this.userMinRange = e7.minRange || e7.maxZoom;
                this.range = e7.range;
                this.offset = e7.offset || 0;
                this.min = this.max = null;
                d1 = F4(e7.crosshair, Q(a7.options.tooltip.crosshairs)[h4 ? 0 : 1]);
                this.crosshair = !0 === d1 ? {
                } : d1;
                -1 === a7.axes.indexOf(this) && (h4 ? a7.axes.splice(a7.xAxis.length, 0, this) : a7.axes.push(this), a7[this.coll].push(this));
                this.series = this.series || [];
                a7.inverted && !this.isZAxis && h4 && "undefined" === typeof this.reversed && (this.reversed = !0);
                this.labelRotation = b3(f12.rotation) ? f12.rotation : void 0;
                c3(this, e7);
                t(this, "afterInit");
            };
            a3.prototype.setOptions = function(b4) {
                this.options = G4(w.defaultXAxisOptions, "yAxis" === this.coll && w.defaultYAxisOptions, [
                    w.defaultTopAxisOptions,
                    w.defaultRightAxisOptions,
                    w.defaultBottomAxisOptions,
                    w.defaultLeftAxisOptions
                ][this.side], G4(g2[this.coll], b4));
                t(this, "afterSetOptions", {
                    userOptions: b4
                });
            };
            a3.prototype.defaultLabelFormatter = function(a7) {
                var d1 = this.axis;
                a7 = this.chart.numberFormatter;
                var c8 = b3(this.value) ? this.value : NaN, e7 = d1.chart.time, h4 = this.dateTimeLabelFormat, f12 = g2.lang, p1 = f12.numericSymbols;
                f12 = f12.numericSymbolMagnitude || 1000;
                var H = d1.logarithmic ? Math.abs(c8) : d1.tickInterval, y1 = p1 && p1.length;
                if (d1.categories) var k13 = "" + this.value;
                else if (h4) k13 = e7.dateFormat(h4, c8);
                else if (y1 && 1000 <= H) for(; (y1--) && "undefined" === typeof k13;)d1 = Math.pow(f12, y1 + 1), H >= d1 && 0 === 10 * c8 % d1 && null !== p1[y1] && 0 !== c8 && (k13 = a7(c8 / d1, -1) + p1[y1]);
                "undefined" === typeof k13 && (k13 = 10000 <= Math.abs(c8) ? a7(c8, -1) : a7(c8, -1, void 0, ""));
                return k13;
            };
            a3.prototype.getSeriesExtremes = function() {
                var a7 = this, d1 = a7.chart, c8;
                t(this, "getSeriesExtremes", null, function() {
                    a7.hasVisibleSeries = !1;
                    a7.dataMin = a7.dataMax = a7.threshold = null;
                    a7.softThreshold = !a7.isXAxis;
                    a7.stacking && a7.stacking.buildStacks();
                    a7.series.forEach(function(e7) {
                        if (e7.visible || !d1.options.chart.ignoreHiddenSeries) {
                            var h4 = e7.options, f12 = h4.threshold;
                            a7.hasVisibleSeries = !0;
                            a7.positiveValuesOnly && 0 >= f12 && (f12 = null);
                            if (a7.isXAxis) {
                                if (h4 = e7.xData, h4.length) {
                                    h4 = a7.logarithmic ? h4.filter(a7.validatePositiveValue) : h4;
                                    c8 = e7.getXExtremes(h4);
                                    var p1 = c8.min;
                                    var g6 = c8.max;
                                    b3(p1) || p1 instanceof Date || (h4 = h4.filter(b3), c8 = e7.getXExtremes(h4), p1 = c8.min, g6 = c8.max);
                                    h4.length && (a7.dataMin = Math.min(F4(a7.dataMin, p1), p1), a7.dataMax = Math.max(F4(a7.dataMax, g6), g6));
                                }
                            } else if (e7 = e7.applyExtremes(), b3(e7.dataMin) && (p1 = e7.dataMin, a7.dataMin = Math.min(F4(a7.dataMin, p1), p1)), b3(e7.dataMax) && (g6 = e7.dataMax, a7.dataMax = Math.max(F4(a7.dataMax, g6), g6)), k12(f12) && (a7.threshold = f12), !h4.softThreshold || a7.positiveValuesOnly) a7.softThreshold = !1;
                        }
                    });
                });
                t(this, "afterGetSeriesExtremes");
            };
            a3.prototype.translate = function(a7, d1, c8, e7, h5, f13) {
                var p2 = this.linkedParent || this, g8 = e7 && p2.old ? p2.old.min : p2.min, H = p2.minPixelPadding;
                h5 = (p2.isOrdinal || p2.brokenAxis && p2.brokenAxis.hasBreaks || p2.logarithmic && h5) && p2.lin2val;
                var K = 1, y1 = 0;
                e7 = e7 && p2.old ? p2.old.transA : p2.transA;
                e7 || (e7 = p2.transA);
                c8 && (K *= -1, y1 = p2.len);
                p2.reversed && (K *= -1, y1 -= K * (p2.sector || p2.len));
                d1 ? (a7 = (a7 * K + y1 - H) / e7 + g8, h5 && (a7 = p2.lin2val(a7))) : (h5 && (a7 = p2.val2lin(a7)), a7 = b3(g8) ? K * (a7 - g8) * e7 + y1 + K * H + (b3(f13) ? e7 * f13 : 0) : void 0);
                return a7;
            };
            a3.prototype.toPixels = function(b4, a7) {
                return this.translate(b4, !1, !this.horiz, null, !0) + (a7 ? 0 : this.pos);
            };
            a3.prototype.toValue = function(b4, a7) {
                return this.translate(b4 - (a7 ? 0 : this.pos), !0, !this.horiz, null, !0);
            };
            a3.prototype.getPlotLinePath = function(a7) {
                function d1(b4, a8, d2) {
                    if ("pass" !== m4 && b4 < a8 || b4 > d2) m4 ? b4 = v3(b4, a8, d2) : r3 = !0;
                    return b4;
                }
                var c8 = this, e7 = c8.chart, h5 = c8.left, f13 = c8.top, p2 = a7.old, g8 = a7.value, H = a7.lineWidth, y1 = p2 && e7.oldChartHeight || e7.chartHeight, k13 = p2 && e7.oldChartWidth || e7.chartWidth, G5 = c8.transB, l8 = a7.translatedValue, m4 = a7.force, L3, q3, n1, B1, r3;
                a7 = {
                    value: g8,
                    lineWidth: H,
                    old: p2,
                    force: m4,
                    acrossPanes: a7.acrossPanes,
                    translatedValue: l8
                };
                t(this, "getPlotLinePath", a7, function(a8) {
                    l8 = F4(l8, c8.translate(g8, null, null, p2));
                    l8 = v3(l8, -100000, 100000);
                    L3 = n1 = Math.round(l8 + G5);
                    q3 = B1 = Math.round(y1 - l8 - G5);
                    b3(l8) ? c8.horiz ? (q3 = f13, B1 = y1 - c8.bottom, L3 = n1 = d1(L3, h5, h5 + c8.width)) : (L3 = h5, n1 = k13 - c8.right, q3 = B1 = d1(q3, f13, f13 + c8.height)) : (r3 = !0, m4 = !1);
                    a8.path = r3 && !m4 ? null : e7.renderer.crispLine([
                        [
                            "M",
                            L3,
                            q3
                        ],
                        [
                            "L",
                            n1,
                            B1
                        ]
                    ], H || 1);
                });
                return a7.path;
            };
            a3.prototype.getLinearTickPositions = function(b4, a7, d1) {
                var c8 = q2(Math.floor(a7 / b4) * b4);
                d1 = q2(Math.ceil(d1 / b4) * b4);
                var e7 = [], h5;
                q2(c8 + b4) === c8 && (h5 = 20);
                if (this.single) return [
                    a7
                ];
                for(a7 = c8; a7 <= d1;){
                    e7.push(a7);
                    a7 = q2(a7 + b4, h5);
                    if (a7 === f13) break;
                    var f13 = a7;
                }
                return e7;
            };
            a3.prototype.getMinorTickInterval = function() {
                var b4 = this.options;
                return !0 === b4.minorTicks ? F4(b4.minorTickInterval, "auto") : !1 === b4.minorTicks ? null : b4.minorTickInterval;
            };
            a3.prototype.getMinorTickPositions = function() {
                var b4 = this.options, a7 = this.tickPositions, d1 = this.minorTickInterval, c8 = this.pointRangePadding || 0, e7 = this.min - c8;
                c8 = this.max + c8;
                var h5 = c8 - e7, f14 = [];
                if (h5 && h5 / d1 < this.len / 3) {
                    var p2 = this.logarithmic;
                    if (p2) this.paddedTicks.forEach(function(b5, a8, c9) {
                        a8 && f14.push.apply(f14, p2.getLogTickPositions(d1, c9[a8 - 1], c9[a8], !0));
                    });
                    else if (this.dateTime && "auto" === this.getMinorTickInterval()) f14 = f14.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(d1), e7, c8, b4.startOfWeek));
                    else for(b4 = e7 + (a7[0] - e7) % d1; b4 <= c8 && b4 !== f14[0]; b4 += d1)f14.push(b4);
                }
                0 !== f14.length && this.trimTicks(f14);
                return f14;
            };
            a3.prototype.adjustForMinRange = function() {
                var b4 = this.options, a7 = this.logarithmic, d1 = this.min, c8 = this.max, e7 = 0, h5, p3, g8, y1;
                this.isXAxis && "undefined" === typeof this.minRange && !a7 && (k12(b4.min) || k12(b4.max) ? this.minRange = null : (this.series.forEach(function(b5) {
                    g8 = b5.xData;
                    y1 = b5.xIncrement ? 1 : g8.length - 1;
                    if (1 < g8.length) for(h5 = y1; 0 < h5; h5--)if (p3 = g8[h5] - g8[h5 - 1], !e7 || p3 < e7) e7 = p3;
                }), this.minRange = Math.min(5 * e7, this.dataMax - this.dataMin)));
                if (c8 - d1 < this.minRange) {
                    var G5 = this.dataMax - this.dataMin >= this.minRange;
                    var t1 = this.minRange;
                    var m4 = (t1 - c8 + d1) / 2;
                    m4 = [
                        d1 - m4,
                        F4(b4.min, d1 - m4)
                    ];
                    G5 && (m4[2] = this.logarithmic ? this.logarithmic.log2lin(this.dataMin) : this.dataMin);
                    d1 = l7(m4);
                    c8 = [
                        d1 + t1,
                        F4(b4.max, d1 + t1)
                    ];
                    G5 && (c8[2] = a7 ? a7.log2lin(this.dataMax) : this.dataMax);
                    c8 = f9(c8);
                    c8 - d1 < t1 && (m4[0] = c8 - t1, m4[1] = F4(b4.min, c8 - t1), d1 = l7(m4));
                }
                this.min = d1;
                this.max = c8;
            };
            a3.prototype.getClosest = function() {
                var b4;
                this.categories ? b4 = 1 : this.series.forEach(function(a7) {
                    var d1 = a7.closestPointRange, c8 = a7.visible || !a7.chart.options.chart.ignoreHiddenSeries;
                    !a7.noSharedTooltip && k12(d1) && c8 && (b4 = k12(b4) ? Math.min(b4, d1) : d1);
                });
                return b4;
            };
            a3.prototype.nameToX = function(b4) {
                var a7 = d(this.categories), c8 = a7 ? this.categories : this.names, e7 = b4.options.x;
                b4.series.requireSorting = !1;
                k12(e7) || (e7 = this.options.uniqueNames ? a7 ? c8.indexOf(b4.name) : F4(c8.keys[b4.name], -1) : b4.series.autoIncrement());
                if (-1 === e7) {
                    if (!a7) var h5 = c8.length;
                } else h5 = e7;
                "undefined" !== typeof h5 && (this.names[h5] = b4.name, this.names.keys[b4.name] = h5);
                return h5;
            };
            a3.prototype.updateNames = function() {
                var b4 = this, a7 = this.names;
                0 < a7.length && (Object.keys(a7.keys).forEach(function(b5) {
                    delete a7.keys[b5];
                }), a7.length = 0, this.minRange = this.userMinRange, (this.series || []).forEach(function(a8) {
                    a8.xIncrement = null;
                    if (!a8.points || a8.isDirtyData) b4.max = Math.max(b4.max, a8.xData.length - 1), a8.processData(), a8.generatePoints();
                    a8.data.forEach(function(d1, c8) {
                        if (d1 && d1.options && "undefined" !== typeof d1.name) {
                            var e7 = b4.nameToX(d1);
                            "undefined" !== typeof e7 && e7 !== d1.x && (d1.x = e7, a8.xData[c8] = e7);
                        }
                    });
                }));
            };
            a3.prototype.setAxisTranslation = function() {
                var b4 = this, a7 = b4.max - b4.min, d1 = b4.linkedParent, c8 = !!b4.categories, e8 = b4.isXAxis, h5 = b4.axisPointRange || 0, f14 = 0, g8 = 0, y1 = b4.transA;
                if (e8 || c8 || h5) {
                    var k13 = b4.getClosest();
                    d1 ? (f14 = d1.minPointOffset, g8 = d1.pointRangePadding) : b4.series.forEach(function(a8) {
                        var d2 = c8 ? 1 : e8 ? F4(a8.options.pointRange, k13, 0) : b4.axisPointRange || 0, A = a8.options.pointPlacement;
                        h5 = Math.max(h5, d2);
                        if (!b4.single || c8) a8 = a8.is("xrange") ? !e8 : e8, f14 = Math.max(f14, a8 && p(A) ? 0 : d2 / 2), g8 = Math.max(g8, a8 && "on" === A ? 0 : d2);
                    });
                    d1 = b4.ordinal && b4.ordinal.slope && k13 ? b4.ordinal.slope / k13 : 1;
                    b4.minPointOffset = f14 *= d1;
                    b4.pointRangePadding = g8 *= d1;
                    b4.pointRange = Math.min(h5, b4.single && c8 ? 1 : a7);
                    e8 && (b4.closestPointRange = k13);
                }
                b4.translationSlope = b4.transA = y1 = b4.staticScale || b4.len / (a7 + g8 || 1);
                b4.transB = b4.horiz ? b4.left : b4.bottom;
                b4.minPixelPadding = y1 * f14;
                t(this, "afterSetAxisTranslation");
            };
            a3.prototype.minFromRange = function() {
                return this.max - this.range;
            };
            a3.prototype.setTickInterval = function(a7) {
                var d1 = this, c8 = d1.chart, e8 = d1.logarithmic, f14 = d1.options, p3 = d1.isXAxis, g8 = d1.isLinked, l8 = f14.tickPixelInterval, G6 = d1.categories, H = d1.softThreshold, m5 = f14.maxPadding, L3 = f14.minPadding, n1 = f14.tickInterval, v4 = b3(d1.threshold) ? d1.threshold : null;
                d1.dateTime || G6 || g8 || this.getTickAmount();
                var r3 = F4(d1.userMin, f14.min);
                var P1 = F4(d1.userMax, f14.max);
                if (g8) {
                    d1.linkedParent = c8[d1.coll][f14.linkedTo];
                    var D1 = d1.linkedParent.getExtremes();
                    d1.min = F4(D1.min, D1.dataMin);
                    d1.max = F4(D1.max, D1.dataMax);
                    f14.type !== d1.linkedParent.options.type && B(11, 1, c8);
                } else {
                    if (H && k12(v4)) {
                        if (d1.dataMin >= v4) D1 = v4, L3 = 0;
                        else if (d1.dataMax <= v4) {
                            var I = v4;
                            m5 = 0;
                        }
                    }
                    d1.min = F4(r3, D1, d1.dataMin);
                    d1.max = F4(P1, I, d1.dataMax);
                }
                e8 && (d1.positiveValuesOnly && !a7 && 0 >= Math.min(d1.min, F4(d1.dataMin, d1.min)) && B(10, 1, c8), d1.min = q2(e8.log2lin(d1.min), 16), d1.max = q2(e8.log2lin(d1.max), 16));
                d1.range && k12(d1.max) && (d1.userMin = d1.min = r3 = Math.max(d1.dataMin, d1.minFromRange()), d1.userMax = P1 = d1.max, d1.range = null);
                t(d1, "foundExtremes");
                d1.beforePadding && d1.beforePadding();
                d1.adjustForMinRange();
                !(G6 || d1.axisPointRange || d1.stacking && d1.stacking.usePercentage || g8) && k12(d1.min) && k12(d1.max) && (c8 = d1.max - d1.min) && (!k12(r3) && L3 && (d1.min -= c8 * L3), !k12(P1) && m5 && (d1.max += c8 * m5));
                b3(d1.userMin) || (b3(f14.softMin) && f14.softMin < d1.min && (d1.min = r3 = f14.softMin), b3(f14.floor) && (d1.min = Math.max(d1.min, f14.floor)));
                b3(d1.userMax) || (b3(f14.softMax) && f14.softMax > d1.max && (d1.max = P1 = f14.softMax), b3(f14.ceiling) && (d1.max = Math.min(d1.max, f14.ceiling)));
                H && k12(d1.dataMin) && (v4 = v4 || 0, !k12(r3) && d1.min < v4 && d1.dataMin >= v4 ? d1.min = d1.options.minRange ? Math.min(v4, d1.max - d1.minRange) : v4 : !k12(P1) && d1.max > v4 && d1.dataMax <= v4 && (d1.max = d1.options.minRange ? Math.max(v4, d1.min + d1.minRange) : v4));
                b3(d1.min) && b3(d1.max) && !this.chart.polar && d1.min > d1.max && (k12(d1.options.min) ? d1.max = d1.min : k12(d1.options.max) && (d1.min = d1.max));
                d1.tickInterval = d1.min === d1.max || "undefined" === typeof d1.min || "undefined" === typeof d1.max ? 1 : g8 && d1.linkedParent && !n1 && l8 === d1.linkedParent.options.tickPixelInterval ? n1 = d1.linkedParent.tickInterval : F4(n1, this.tickAmount ? (d1.max - d1.min) / Math.max(this.tickAmount - 1, 1) : void 0, G6 ? 1 : (d1.max - d1.min) * l8 / Math.max(d1.len, l8));
                p3 && !a7 && (d1.series.forEach(function(b4) {
                    b4.forceCrop = b4.forceCropping && b4.forceCropping();
                    b4.processData(d1.min !== (d1.old && d1.old.min) || d1.max !== (d1.old && d1.old.max));
                }), t(this, "postProcessData"));
                d1.setAxisTranslation();
                t(this, "initialAxisTranslation");
                d1.pointRange && !n1 && (d1.tickInterval = Math.max(d1.pointRange, d1.tickInterval));
                a7 = F4(f14.minTickInterval, d1.dateTime && !d1.series.some(function(b4) {
                    return b4.noSharedTooltip;
                }) ? d1.closestPointRange : 0);
                !n1 && d1.tickInterval < a7 && (d1.tickInterval = a7);
                d1.dateTime || d1.logarithmic || n1 || (d1.tickInterval = y(d1.tickInterval, void 0, h3(d1.tickInterval), F4(f14.allowDecimals, 0.5 > d1.tickInterval || (void 0) !== this.tickAmount), !!this.tickAmount));
                this.tickAmount || (d1.tickInterval = d1.unsquish());
                this.setTickPositions();
            };
            a3.prototype.setTickPositions = function() {
                var b4 = this.options, d1 = b4.tickPositions, a7 = this.getMinorTickInterval(), c8 = this.hasVerticalPanning(), e8 = "colorAxis" === this.coll, h5 = (e8 || !c8) && b4.startOnTick;
                c8 = (e8 || !c8) && b4.endOnTick;
                e8 = b4.tickPositioner;
                this.tickmarkOffset = this.categories && "between" === b4.tickmarkPlacement && 1 === this.tickInterval ? 0.5 : 0;
                this.minorTickInterval = "auto" === a7 && this.tickInterval ? this.tickInterval / 5 : a7;
                this.single = this.min === this.max && k12(this.min) && !this.tickAmount && (parseInt(this.min, 10) === this.min || !1 !== b4.allowDecimals);
                this.tickPositions = a7 = d1 && d1.slice();
                !a7 && (this.ordinal && this.ordinal.positions || !((this.max - this.min) / this.tickInterval > Math.max(2 * this.len, 200)) ? a7 = this.dateTime ? this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval, b4.units), this.min, this.max, b4.startOfWeek, this.ordinal && this.ordinal.positions, this.closestPointRange, !0) : this.logarithmic ? this.logarithmic.getLogTickPositions(this.tickInterval, this.min, this.max) : this.getLinearTickPositions(this.tickInterval, this.min, this.max) : (a7 = [
                    this.min,
                    this.max
                ], B(19, !1, this.chart)), a7.length > this.len && (a7 = [
                    a7[0],
                    a7.pop()
                ], a7[0] === a7[1] && (a7.length = 1)), this.tickPositions = a7, e8 && (e8 = e8.apply(this, [
                    this.min,
                    this.max
                ]))) && (this.tickPositions = a7 = e8);
                this.paddedTicks = a7.slice(0);
                this.trimTicks(a7, h5, c8);
                this.isLinked || (this.single && 2 > a7.length && !this.categories && !this.series.some(function(b5) {
                    return b5.is("heatmap") && "between" === b5.options.pointPlacement;
                }) && (this.min -= 0.5, this.max += 0.5), d1 || e8 || this.adjustTickAmount());
                t(this, "afterSetTickPositions");
            };
            a3.prototype.trimTicks = function(b4, d1, a7) {
                var c8 = b4[0], e8 = b4[b4.length - 1], h5 = !this.isOrdinal && this.minPointOffset || 0;
                t(this, "trimTicks");
                if (!this.isLinked) {
                    if (d1 && -Infinity !== c8) this.min = c8;
                    else for(; this.min - h5 > b4[0];)b4.shift();
                    if (a7) this.max = e8;
                    else for(; this.max + h5 < b4[b4.length - 1];)b4.pop();
                    0 === b4.length && k12(c8) && !this.options.tickPositions && b4.push((e8 + c8) / 2);
                }
            };
            a3.prototype.alignToOthers = function() {
                var b4 = {
                }, d1 = this.options, a7;
                !1 !== this.chart.options.chart.alignTicks && d1.alignTicks && !1 !== d1.startOnTick && !1 !== d1.endOnTick && !this.logarithmic && this.chart[this.coll].forEach(function(d2) {
                    var c8 = d2.options;
                    c8 = [
                        d2.horiz ? c8.left : c8.top,
                        c8.width,
                        c8.height,
                        c8.pane
                    ].join();
                    d2.series.length && (b4[c8] ? a7 = !0 : b4[c8] = 1);
                });
                return a7;
            };
            a3.prototype.getTickAmount = function() {
                var b4 = this.options, d1 = b4.tickPixelInterval, a7 = b4.tickAmount;
                !k12(b4.tickInterval) && !a7 && this.len < d1 && !this.isRadial && !this.logarithmic && b4.startOnTick && b4.endOnTick && (a7 = 2);
                !a7 && this.alignToOthers() && (a7 = Math.ceil(this.len / d1) + 1);
                4 > a7 && (this.finalTickAmt = a7, a7 = 5);
                this.tickAmount = a7;
            };
            a3.prototype.adjustTickAmount = function() {
                var d1 = this.options, a7 = this.tickInterval, c8 = this.tickPositions, e8 = this.tickAmount, h5 = this.finalTickAmt, f14 = c8 && c8.length, p3 = F4(this.threshold, this.softThreshold ? 0 : null);
                if (this.hasData() && b3(this.min) && b3(this.max)) {
                    if (f14 < e8) {
                        for(; c8.length < e8;)c8.length % 2 || this.min === p3 ? c8.push(q2(c8[c8.length - 1] + a7)) : c8.unshift(q2(c8[0] - a7));
                        this.transA *= (f14 - 1) / (e8 - 1);
                        this.min = d1.startOnTick ? c8[0] : Math.min(this.min, c8[0]);
                        this.max = d1.endOnTick ? c8[c8.length - 1] : Math.max(this.max, c8[c8.length - 1]);
                    } else f14 > e8 && (this.tickInterval *= 2, this.setTickPositions());
                    if (k12(h5)) {
                        for(a7 = d1 = c8.length; a7--;)(3 === h5 && 1 === a7 % 2 || 2 >= h5 && 0 < a7 && a7 < d1 - 1) && c8.splice(a7, 1);
                        this.finalTickAmt = void 0;
                    }
                }
            };
            a3.prototype.setScale = function() {
                var b4 = !1, d1 = !1;
                this.series.forEach(function(a7) {
                    b4 = b4 || a7.isDirtyData || a7.isDirty;
                    d1 = d1 || a7.xAxis && a7.xAxis.isDirty || !1;
                });
                this.setAxisSize();
                var a7 = this.len !== (this.old && this.old.len);
                a7 || b4 || d1 || this.isLinked || this.forceRedraw || this.userMin !== (this.old && this.old.userMin) || this.userMax !== (this.old && this.old.userMax) || this.alignToOthers() ? (this.stacking && this.stacking.resetStacks(), this.forceRedraw = !1, this.getSeriesExtremes(), this.setTickInterval(), this.isDirty || (this.isDirty = a7 || this.min !== (this.old && this.old.min) || this.max !== (this.old && this.old.max))) : this.stacking && this.stacking.cleanStacks();
                b4 && this.panningState && (this.panningState.isDirty = !0);
                t(this, "afterSetScale");
            };
            a3.prototype.setExtremes = function(b4, d1, a7, c8, e8) {
                var h5 = this, f14 = h5.chart;
                a7 = F4(a7, !0);
                h5.series.forEach(function(b5) {
                    delete b5.kdTree;
                });
                e8 = O(e8, {
                    min: b4,
                    max: d1
                });
                t(h5, "setExtremes", e8, function() {
                    h5.userMin = b4;
                    h5.userMax = d1;
                    h5.eventArgs = e8;
                    a7 && f14.redraw(c8);
                });
            };
            a3.prototype.zoom = function(b4, d1) {
                var a7 = this, c8 = this.dataMin, e8 = this.dataMax, h5 = this.options, f14 = Math.min(c8, F4(h5.min, c8)), p3 = Math.max(e8, F4(h5.max, e8));
                b4 = {
                    newMin: b4,
                    newMax: d1
                };
                t(this, "zoom", b4, function(b5) {
                    var d2 = b5.newMin, h6 = b5.newMax;
                    if (d2 !== a7.min || h6 !== a7.max) a7.allowZoomOutside || (k12(c8) && (d2 < f14 && (d2 = f14), d2 > p3 && (d2 = p3)), k12(e8) && (h6 < f14 && (h6 = f14), h6 > p3 && (h6 = p3))), a7.displayBtn = "undefined" !== typeof d2 || "undefined" !== typeof h6, a7.setExtremes(d2, h6, !1, void 0, {
                        trigger: "zoom"
                    });
                    b5.zoomed = !0;
                });
                return b4.zoomed;
            };
            a3.prototype.setAxisSize = function() {
                var b4 = this.chart, d1 = this.options, a7 = d1.offsets || [
                    0,
                    0,
                    0,
                    0
                ], c8 = this.horiz, e8 = this.width = Math.round(P(F4(d1.width, b4.plotWidth - a7[3] + a7[1]), b4.plotWidth)), h5 = this.height = Math.round(P(F4(d1.height, b4.plotHeight - a7[0] + a7[2]), b4.plotHeight)), f14 = this.top = Math.round(P(F4(d1.top, b4.plotTop + a7[0]), b4.plotHeight, b4.plotTop));
                d1 = this.left = Math.round(P(F4(d1.left, b4.plotLeft + a7[3]), b4.plotWidth, b4.plotLeft));
                this.bottom = b4.chartHeight - h5 - f14;
                this.right = b4.chartWidth - e8 - d1;
                this.len = Math.max(c8 ? e8 : h5, 0);
                this.pos = c8 ? d1 : f14;
            };
            a3.prototype.getExtremes = function() {
                var b4 = this.logarithmic;
                return {
                    min: b4 ? q2(b4.lin2log(this.min)) : this.min,
                    max: b4 ? q2(b4.lin2log(this.max)) : this.max,
                    dataMin: this.dataMin,
                    dataMax: this.dataMax,
                    userMin: this.userMin,
                    userMax: this.userMax
                };
            };
            a3.prototype.getThreshold = function(b4) {
                var d1 = this.logarithmic, a7 = d1 ? d1.lin2log(this.min) : this.min;
                d1 = d1 ? d1.lin2log(this.max) : this.max;
                null === b4 || -Infinity === b4 ? b4 = a7 : Infinity === b4 ? b4 = d1 : a7 > b4 ? b4 = a7 : d1 < b4 && (b4 = d1);
                return this.translate(b4, 0, 1, 0, 1);
            };
            a3.prototype.autoLabelAlign = function(b4) {
                var d1 = (F4(b4, 0) - 90 * this.side + 720) % 360;
                b4 = {
                    align: "center"
                };
                t(this, "autoLabelAlign", b4, function(b5) {
                    15 < d1 && 165 > d1 ? b5.align = "right" : 195 < d1 && 345 > d1 && (b5.align = "left");
                });
                return b4.align;
            };
            a3.prototype.tickSize = function(b4) {
                var d1 = this.options, a7 = F4(d1["tick" === b4 ? "tickWidth" : "minorTickWidth"], "tick" === b4 && this.isXAxis && !this.categories ? 1 : 0), c8 = d1["tick" === b4 ? "tickLength" : "minorTickLength"];
                if (a7 && c8) {
                    "inside" === d1[b4 + "Position"] && (c8 = -c8);
                    var e8 = [
                        c8,
                        a7
                    ];
                }
                b4 = {
                    tickSize: e8
                };
                t(this, "afterTickSize", b4);
                return b4.tickSize;
            };
            a3.prototype.labelMetrics = function() {
                var b4 = this.tickPositions && this.tickPositions[0] || 0;
                return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize, this.ticks[b4] && this.ticks[b4].label);
            };
            a3.prototype.unsquish = function() {
                var d1 = this.options.labels, a7 = this.horiz, c8 = this.tickInterval, h5 = this.len / (((this.categories ? 1 : 0) + this.max - this.min) / c8), f14 = d1.rotation, p3 = this.labelMetrics(), g8 = Math.max(this.max - this.min, 0), y1 = function(b4) {
                    var d2 = b4 / (h5 || 1);
                    d2 = 1 < d2 ? Math.ceil(d2) : 1;
                    d2 * c8 > g8 && Infinity !== b4 && Infinity !== h5 && g8 && (d2 = Math.ceil(g8 / c8));
                    return q2(d2 * c8);
                }, k14 = c8, l8, G6, t2 = Number.MAX_VALUE;
                if (a7) {
                    if (!d1.staggerLines && !d1.step) {
                        if (b3(f14)) var m5 = [
                            f14
                        ];
                        else h5 < d1.autoRotationLimit && (m5 = d1.autoRotation);
                    }
                    m5 && m5.forEach(function(b4) {
                        if (b4 === f14 || b4 && -90 <= b4 && 90 >= b4) {
                            G6 = y1(Math.abs(p3.h / Math.sin(e5 * b4)));
                            var d2 = G6 + Math.abs(b4 / 360);
                            d2 < t2 && (t2 = d2, l8 = b4, k14 = G6);
                        }
                    });
                } else d1.step || (k14 = y1(p3.h));
                this.autoRotation = m5;
                this.labelRotation = F4(l8, b3(f14) ? f14 : 0);
                return k14;
            };
            a3.prototype.getSlotWidth = function(d1) {
                var a7 = this.chart, c8 = this.horiz, e9 = this.options.labels, h5 = Math.max(this.tickPositions.length - (this.categories ? 0 : 1), 1), f14 = a7.margin[3];
                if (d1 && b3(d1.slotWidth)) return d1.slotWidth;
                if (c8 && 2 > e9.step) return e9.rotation ? 0 : (this.staggerLines || 1) * this.len / h5;
                if (!c8) {
                    d1 = e9.style.width;
                    if ((void 0) !== d1) return parseInt(String(d1), 10);
                    if (f14) return f14 - a7.spacing[3];
                }
                return 0.33 * a7.chartWidth;
            };
            a3.prototype.renderUnsquish = function() {
                var b4 = this.chart, d1 = b4.renderer, a7 = this.tickPositions, c8 = this.ticks, e9 = this.options.labels, h5 = e9.style, f14 = this.horiz, g8 = this.getSlotWidth(), y1 = Math.max(1, Math.round(g8 - 2 * e9.padding)), k14 = {
                }, G6 = this.labelMetrics(), l8 = h5.textOverflow, t2 = 0;
                p(e9.rotation) || (k14.rotation = e9.rotation || 0);
                a7.forEach(function(b5) {
                    b5 = c8[b5];
                    b5.movedLabel && b5.replaceMovedLabel();
                    b5 && b5.label && b5.label.textPxLength > t2 && (t2 = b5.label.textPxLength);
                });
                this.maxLabelLength = t2;
                if (this.autoRotation) t2 > y1 && t2 > G6.h ? k14.rotation = this.labelRotation : this.labelRotation = 0;
                else if (g8) {
                    var m6 = y1;
                    if (!l8) {
                        var F5 = "clip";
                        for(y1 = a7.length; !f14 && y1--;){
                            var L3 = a7[y1];
                            if (L3 = c8[L3].label) L3.styles && "ellipsis" === L3.styles.textOverflow ? L3.css({
                                textOverflow: "clip"
                            }) : L3.textPxLength > g8 && L3.css({
                                width: g8 + "px"
                            }), L3.getBBox().height > this.len / a7.length - (G6.h - G6.f) && (L3.specificTextOverflow = "ellipsis");
                        }
                    }
                }
                k14.rotation && (m6 = t2 > 0.5 * b4.chartHeight ? 0.33 * b4.chartHeight : t2, l8 || (F5 = "ellipsis"));
                if (this.labelAlign = e9.align || this.autoLabelAlign(this.labelRotation)) k14.align = this.labelAlign;
                a7.forEach(function(b5) {
                    var d3 = (b5 = c8[b5]) && b5.label, a8 = h5.width, e10 = {
                    };
                    d3 && (d3.attr(k14), b5.shortenLabel ? b5.shortenLabel() : m6 && !a8 && "nowrap" !== h5.whiteSpace && (m6 < d3.textPxLength || "SPAN" === d3.element.tagName) ? (e10.width = m6 + "px", l8 || (e10.textOverflow = d3.specificTextOverflow || F5), d3.css(e10)) : d3.styles && d3.styles.width && !e10.width && !a8 && d3.css({
                        width: null
                    }), delete d3.specificTextOverflow, b5.rotation = k14.rotation);
                }, this);
                this.tickRotCorr = d1.rotCorr(G6.b, this.labelRotation || 0, 0 !== this.side);
            };
            a3.prototype.hasData = function() {
                return this.series.some(function(b4) {
                    return b4.hasData();
                }) || this.options.showEmpty && k12(this.min) && k12(this.max);
            };
            a3.prototype.addTitle = function(b4) {
                var d1 = this.chart.renderer, a7 = this.horiz, c8 = this.opposite, e9 = this.options.title, h5 = this.chart.styledMode, f14;
                this.axisTitle || ((f14 = e9.textAlign) || (f14 = (a7 ? {
                    low: "left",
                    middle: "center",
                    high: "right"
                } : {
                    low: c8 ? "right" : "left",
                    middle: "center",
                    high: c8 ? "left" : "right"
                })[e9.align]), this.axisTitle = d1.text(e9.text || "", 0, 0, e9.useHTML).attr({
                    zIndex: 7,
                    rotation: e9.rotation,
                    align: f14
                }).addClass("highcharts-axis-title"), h5 || this.axisTitle.css(G4(e9.style)), this.axisTitle.add(this.axisGroup), this.axisTitle.isNew = !0);
                h5 || e9.style.width || this.isRadial || this.axisTitle.css({
                    width: this.len + "px"
                });
                this.axisTitle[b4 ? "show" : "hide"](b4);
            };
            a3.prototype.generateTick = function(b4) {
                var d1 = this.ticks;
                d1[b4] ? d1[b4].addLabel() : d1[b4] = new u2(this, b4);
            };
            a3.prototype.getOffset = function() {
                var b4 = this, d1 = this, a7 = d1.chart, c8 = a7.renderer, e9 = d1.options, h5 = d1.tickPositions, f14 = d1.ticks, p3 = d1.horiz, g8 = d1.side, y1 = a7.inverted && !d1.isZAxis ? [
                    1,
                    0,
                    3,
                    2
                ][g8] : g8, G6 = d1.hasData(), l8 = e9.title, m7 = e9.labels, q3 = a7.axisOffset;
                a7 = a7.clipOffset;
                var v4 = [
                    -1,
                    1,
                    1,
                    -1
                ][g8], n1 = e9.className, B1 = d1.axisParent, r3, P1 = 0, D2 = 0, ca = 0;
                d1.showAxis = r3 = G6 || e9.showEmpty;
                d1.staggerLines = d1.horiz && m7.staggerLines || void 0;
                if (!d1.axisGroup) {
                    var ia = function(d3, a8, e10) {
                        return c8.g(d3).attr({
                            zIndex: e10
                        }).addClass("highcharts-" + b4.coll.toLowerCase() + a8 + " " + (b4.isRadial ? "highcharts-radial-axis" + a8 + " " : "") + (n1 || "")).add(B1);
                    };
                    d1.gridGroup = ia("grid", "-grid", e9.gridZIndex);
                    d1.axisGroup = ia("axis", "", e9.zIndex);
                    d1.labelGroup = ia("axis-labels", "-labels", m7.zIndex);
                }
                G6 || d1.isLinked ? (h5.forEach(function(b5) {
                    d1.generateTick(b5);
                }), d1.renderUnsquish(), d1.reserveSpaceDefault = 0 === g8 || 2 === g8 || ({
                    1: "left",
                    3: "right"
                })[g8] === d1.labelAlign, F4(m7.reserveSpace, "center" === d1.labelAlign ? !0 : null, d1.reserveSpaceDefault) && h5.forEach(function(b5) {
                    ca = Math.max(f14[b5].getLabelSize(), ca);
                }), d1.staggerLines && (ca *= d1.staggerLines), d1.labelOffset = ca * (d1.opposite ? -1 : 1)) : L2(f14, function(b5, d3) {
                    b5.destroy();
                    delete f14[d3];
                });
                if (l8 && l8.text && !1 !== l8.enabled && (d1.addTitle(r3), r3 && !1 !== l8.reserveSpace)) {
                    d1.titleOffset = P1 = d1.axisTitle.getBBox()[p3 ? "height" : "width"];
                    var I = l8.offset;
                    D2 = k12(I) ? 0 : F4(l8.margin, p3 ? 5 : 10);
                }
                d1.renderLine();
                d1.offset = v4 * F4(e9.offset, q3[g8] ? q3[g8] + (e9.margin || 0) : 0);
                d1.tickRotCorr = d1.tickRotCorr || {
                    x: 0,
                    y: 0
                };
                l8 = 0 === g8 ? -d1.labelMetrics().h : 2 === g8 ? d1.tickRotCorr.y : 0;
                G6 = Math.abs(ca) + D2;
                ca && (G6 = G6 - l8 + v4 * (p3 ? F4(m7.y, d1.tickRotCorr.y + 8 * v4) : m7.x));
                d1.axisTitleMargin = F4(I, G6);
                d1.getMaxLabelDimensions && (d1.maxLabelDimensions = d1.getMaxLabelDimensions(f14, h5));
                p3 = this.tickSize("tick");
                q3[g8] = Math.max(q3[g8], (d1.axisTitleMargin || 0) + P1 + v4 * d1.offset, G6, h5 && h5.length && p3 ? p3[0] + v4 * d1.offset : 0);
                e9 = e9.offset ? 0 : 2 * Math.floor(d1.axisLine.strokeWidth() / 2);
                a7[y1] = Math.max(a7[y1], e9);
                t(this, "afterGetOffset");
            };
            a3.prototype.getLinePath = function(b4) {
                var d1 = this.chart, a7 = this.opposite, c8 = this.offset, e9 = this.horiz, h5 = this.left + (a7 ? this.width : 0) + c8;
                c8 = d1.chartHeight - this.bottom - (a7 ? this.height : 0) + c8;
                a7 && (b4 *= -1);
                return d1.renderer.crispLine([
                    [
                        "M",
                        e9 ? this.left : h5,
                        e9 ? c8 : this.top
                    ],
                    [
                        "L",
                        e9 ? d1.chartWidth - this.right : h5,
                        e9 ? c8 : d1.chartHeight - this.bottom
                    ]
                ], b4);
            };
            a3.prototype.renderLine = function() {
                this.axisLine || (this.axisLine = this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup), this.chart.styledMode || this.axisLine.attr({
                    stroke: this.options.lineColor,
                    "stroke-width": this.options.lineWidth,
                    zIndex: 7
                }));
            };
            a3.prototype.getTitlePosition = function() {
                var b4 = this.horiz, d1 = this.left, a7 = this.top, c8 = this.len, e9 = this.options.title, h5 = b4 ? d1 : a7, f14 = this.opposite, p3 = this.offset, g8 = e9.x, y1 = e9.y, k14 = this.axisTitle, G6 = this.chart.renderer.fontMetrics(e9.style.fontSize, k14);
                k14 = Math.max(k14.getBBox(null, 0).height - G6.h - 1, 0);
                c8 = ({
                    low: h5 + (b4 ? 0 : c8),
                    middle: h5 + c8 / 2,
                    high: h5 + (b4 ? c8 : 0)
                })[e9.align];
                d1 = (b4 ? a7 + this.height : d1) + (b4 ? 1 : -1) * (f14 ? -1 : 1) * this.axisTitleMargin + [
                    -k14,
                    k14,
                    G6.f,
                    -k14
                ][this.side];
                b4 = {
                    x: b4 ? c8 + g8 : d1 + (f14 ? this.width : 0) + p3 + g8,
                    y: b4 ? d1 + y1 - (f14 ? this.height : 0) + p3 : c8 + y1
                };
                t(this, "afterGetTitlePosition", {
                    titlePosition: b4
                });
                return b4;
            };
            a3.prototype.renderMinorTick = function(b4, d1) {
                var a7 = this.minorTicks;
                a7[b4] || (a7[b4] = new u2(this, b4, "minor"));
                d1 && a7[b4].isNew && a7[b4].render(null, !0);
                a7[b4].render(null, !1, 1);
            };
            a3.prototype.renderTick = function(b4, d1, a7) {
                var c8 = this.ticks;
                if (!this.isLinked || b4 >= this.min && b4 <= this.max || this.grid && this.grid.isColumn) c8[b4] || (c8[b4] = new u2(this, b4)), a7 && c8[b4].isNew && c8[b4].render(d1, !0, -1), c8[b4].render(d1);
            };
            a3.prototype.render = function() {
                var d1 = this, a7 = d1.chart, c8 = d1.logarithmic, e9 = d1.options, h5 = d1.isLinked, f14 = d1.tickPositions, p3 = d1.axisTitle, g8 = d1.ticks, y1 = d1.minorTicks, k14 = d1.alternateBands, G6 = e9.stackLabels, l8 = e9.alternateGridColor, F6 = d1.tickmarkOffset, q3 = d1.axisLine, v4 = d1.showAxis, n1 = m2(a7.renderer.globalAnimation), B1, r3;
                d1.labelEdge.length = 0;
                d1.overlap = !1;
                [
                    g8,
                    y1,
                    k14
                ].forEach(function(b4) {
                    L2(b4, function(b5) {
                        b5.isActive = !1;
                    });
                });
                if (d1.hasData() || h5) {
                    var P1 = d1.chart.hasRendered && d1.old && b3(d1.old.min);
                    d1.minorTickInterval && !d1.categories && d1.getMinorTickPositions().forEach(function(b4) {
                        d1.renderMinorTick(b4, P1);
                    });
                    f14.length && (f14.forEach(function(b4, a8) {
                        d1.renderTick(b4, a8, P1);
                    }), F6 && (0 === d1.min || d1.single) && (g8[-1] || (g8[-1] = new u2(d1, -1, null, !0)), g8[-1].render(-1)));
                    l8 && f14.forEach(function(b4, e10) {
                        r3 = "undefined" !== typeof f14[e10 + 1] ? f14[e10 + 1] + F6 : d1.max - F6;
                        0 === e10 % 2 && b4 < d1.max && r3 <= d1.max + (a7.polar ? -F6 : F6) && (k14[b4] || (k14[b4] = new J.PlotLineOrBand(d1)), B1 = b4 + F6, k14[b4].options = {
                            from: c8 ? c8.lin2log(B1) : B1,
                            to: c8 ? c8.lin2log(r3) : r3,
                            color: l8,
                            className: "highcharts-alternate-grid"
                        }, k14[b4].render(), k14[b4].isActive = !0);
                    });
                    d1._addedPlotLB || (d1._addedPlotLB = !0, (e9.plotLines || []).concat(e9.plotBands || []).forEach(function(b4) {
                        d1.addPlotBandOrLine(b4);
                    }));
                }
                [
                    g8,
                    y1,
                    k14
                ].forEach(function(b4) {
                    var d3 = [], c9 = n1.duration;
                    L2(b4, function(b5, a8) {
                        b5.isActive || (b5.render(a8, !1, 0), b5.isActive = !1, d3.push(a8));
                    });
                    V(function() {
                        for(var a8 = d3.length; a8--;)b4[d3[a8]] && !b4[d3[a8]].isActive && (b4[d3[a8]].destroy(), delete b4[d3[a8]]);
                    }, b4 !== k14 && a7.hasRendered && c9 ? c9 : 0);
                });
                q3 && (q3[q3.isPlaced ? "animate" : "attr"]({
                    d: this.getLinePath(q3.strokeWidth())
                }), q3.isPlaced = !0, q3[v4 ? "show" : "hide"](v4));
                p3 && v4 && (e9 = d1.getTitlePosition(), b3(e9.y) ? (p3[p3.isNew ? "attr" : "animate"](e9), p3.isNew = !1) : (p3.attr("y", -9999), p3.isNew = !0));
                G6 && G6.enabled && d1.stacking && d1.stacking.renderStackTotals();
                d1.old = {
                    len: d1.len,
                    max: d1.max,
                    min: d1.min,
                    transA: d1.transA,
                    userMax: d1.userMax,
                    userMin: d1.userMin
                };
                d1.isDirty = !1;
                t(this, "afterRender");
            };
            a3.prototype.redraw = function() {
                this.visible && (this.render(), this.plotLinesAndBands.forEach(function(b4) {
                    b4.render();
                }));
                this.series.forEach(function(b4) {
                    b4.isDirty = !0;
                });
            };
            a3.prototype.getKeepProps = function() {
                return this.keepProps || a3.keepProps;
            };
            a3.prototype.destroy = function(b4) {
                var d1 = this, a7 = d1.plotLinesAndBands, c8 = this.eventOptions;
                t(this, "destroy", {
                    keepEvents: b4
                });
                b4 || S(d1);
                [
                    d1.ticks,
                    d1.minorTicks,
                    d1.alternateBands
                ].forEach(function(b5) {
                    r2(b5);
                });
                if (a7) for(b4 = a7.length; b4--;)a7[b4].destroy();
                "axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function(b5) {
                    d1[b5] && (d1[b5] = d1[b5].destroy());
                });
                for(var e9 in d1.plotLinesAndBandsGroups)d1.plotLinesAndBandsGroups[e9] = d1.plotLinesAndBandsGroups[e9].destroy();
                L2(d1, function(b5, a8) {
                    -1 === d1.getKeepProps().indexOf(a8) && delete d1[a8];
                });
                this.eventOptions = c8;
            };
            a3.prototype.drawCrosshair = function(b4, d1) {
                var a7 = this.crosshair, c8 = F4(a7 && a7.snap, !0), e9 = this.chart, h5, f14 = this.cross;
                t(this, "drawCrosshair", {
                    e: b4,
                    point: d1
                });
                b4 || (b4 = this.cross && this.cross.e);
                if (a7 && !1 !== (k12(d1) || !c8)) {
                    c8 ? k12(d1) && (h5 = F4("colorAxis" !== this.coll ? d1.crosshairPos : null, this.isXAxis ? d1.plotX : this.len - d1.plotY)) : h5 = b4 && (this.horiz ? b4.chartX - this.pos : this.len - b4.chartY + this.pos);
                    if (k12(h5)) {
                        var p3 = {
                            value: d1 && (this.isXAxis ? d1.x : F4(d1.stackY, d1.y)),
                            translatedValue: h5
                        };
                        e9.polar && O(p3, {
                            isCrosshair: !0,
                            chartX: b4 && b4.chartX,
                            chartY: b4 && b4.chartY,
                            point: d1
                        });
                        p3 = this.getPlotLinePath(p3) || null;
                    }
                    if (!k12(p3)) {
                        this.hideCrosshair();
                        return;
                    }
                    c8 = this.categories && !this.isRadial;
                    f14 || (this.cross = f14 = e9.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-" + (c8 ? "category " : "thin ") + (a7.className || "")).attr({
                        zIndex: F4(a7.zIndex, 2)
                    }).add(), e9.styledMode || (f14.attr({
                        stroke: a7.color || (c8 ? C.parse(E.highlightColor20).setOpacity(0.25).get() : E.neutralColor20),
                        "stroke-width": F4(a7.width, 1)
                    }).css({
                        "pointer-events": "none"
                    }), a7.dashStyle && f14.attr({
                        dashstyle: a7.dashStyle
                    })));
                    f14.show().attr({
                        d: p3
                    });
                    c8 && !a7.width && f14.attr({
                        "stroke-width": this.transA
                    });
                    this.cross.e = b4;
                } else this.hideCrosshair();
                t(this, "afterDrawCrosshair", {
                    e: b4,
                    point: d1
                });
            };
            a3.prototype.hideCrosshair = function() {
                this.cross && this.cross.hide();
                t(this, "afterHideCrosshair");
            };
            a3.prototype.hasVerticalPanning = function() {
                var b4 = this.chart.options.chart.panning;
                return !!(b4 && b4.enabled && /y/.test(b4.type));
            };
            a3.prototype.validatePositiveValue = function(d1) {
                return b3(d1) && 0 < d1;
            };
            a3.prototype.update = function(b4, d1) {
                var a7 = this.chart;
                b4 = G4(this.userOptions, b4);
                this.destroy(!0);
                this.init(a7, b4);
                a7.isDirtyBox = !0;
                F4(d1, !0) && a7.redraw();
            };
            a3.prototype.remove = function(b4) {
                for(var d1 = this.chart, a7 = this.coll, c8 = this.series, e9 = c8.length; e9--;)c8[e9] && c8[e9].remove(!1);
                D(d1.axes, this);
                D(d1[a7], this);
                d1[a7].forEach(function(b5, d3) {
                    b5.options.index = b5.userOptions.index = d3;
                });
                this.destroy();
                d1.isDirtyBox = !0;
                F4(b4, !0) && d1.redraw();
            };
            a3.prototype.setTitle = function(b4, d1) {
                this.update({
                    title: b4
                }, d1);
            };
            a3.prototype.setCategories = function(b4, d1) {
                this.update({
                    categories: b4
                }, d1);
            };
            a3.defaultOptions = w.defaultXAxisOptions;
            a3.keepProps = "extKey hcEvents names series userMax userMin".split(" ");
            return a3;
        })();
        return a1;
    });
    M(a3, "Core/Axis/DateTimeAxis.js", [
        a3["Core/Utilities.js"]
    ], function(a1) {
        var r2 = a1.addEvent, C = a1.getMagnitude, E = a1.normalizeTickInterval, z = a1.timeUnits, x;
        (function(a3) {
            function u2() {
                return this.chart.time.getTimeTicks.apply(this.chart.time, arguments);
            }
            function n(a7) {
                "datetime" !== a7.userOptions.type ? this.dateTime = void 0 : this.dateTime || (this.dateTime = new g2(this));
            }
            var m2 = [];
            a3.compose = function(a7) {
                -1 === m2.indexOf(a7) && (m2.push(a7), a7.keepProps.push("dateTime"), a7.prototype.getTimeTicks = u2, r2(a7, "init", n));
                return a7;
            };
            var g2 = function() {
                function a7(a8) {
                    this.axis = a8;
                }
                a7.prototype.normalizeTimeTickInterval = function(a8, c3) {
                    var e5 = c3 || [
                        [
                            "millisecond",
                            [
                                1,
                                2,
                                5,
                                10,
                                20,
                                25,
                                50,
                                100,
                                200,
                                500
                            ]
                        ],
                        [
                            "second",
                            [
                                1,
                                2,
                                5,
                                10,
                                15,
                                30
                            ]
                        ],
                        [
                            "minute",
                            [
                                1,
                                2,
                                5,
                                10,
                                15,
                                30
                            ]
                        ],
                        [
                            "hour",
                            [
                                1,
                                2,
                                3,
                                4,
                                6,
                                8,
                                12
                            ]
                        ],
                        [
                            "day",
                            [
                                1,
                                2
                            ]
                        ],
                        [
                            "week",
                            [
                                1,
                                2
                            ]
                        ],
                        [
                            "month",
                            [
                                1,
                                2,
                                3,
                                4,
                                6
                            ]
                        ],
                        [
                            "year",
                            null
                        ]
                    ];
                    c3 = e5[e5.length - 1];
                    var g8 = z[c3[0]], l7 = c3[1], k12;
                    for(k12 = 0; k12 < e5.length && !(c3 = e5[k12], g8 = z[c3[0]], l7 = c3[1], e5[k12 + 1] && a8 <= (g8 * l7[l7.length - 1] + z[e5[k12 + 1][0]]) / 2); k12++);
                    g8 === z.year && a8 < 5 * g8 && (l7 = [
                        1,
                        2,
                        5
                    ]);
                    a8 = E(a8 / g8, l7, "year" === c3[0] ? Math.max(C(a8 / g8), 1) : 1);
                    return {
                        unitRange: g8,
                        count: a8,
                        unitName: c3[0]
                    };
                };
                a7.prototype.getXDateFormat = function(a8, c3) {
                    var e5 = this.axis;
                    return e5.closestPointRange ? e5.chart.time.getDateFormat(e5.closestPointRange, a8, e5.options.startOfWeek, c3) || c3.year : c3.day;
                };
                return a7;
            }();
            a3.Additions = g2;
        })(x || (x = {
        }));
        return x;
    });
    M(a3, "Core/Axis/LogarithmicAxis.js", [
        a3["Core/Utilities.js"]
    ], function(a1) {
        var r2 = a1.addEvent, C = a1.getMagnitude, E = a1.normalizeTickInterval, z = a1.pick, x;
        (function(a3) {
            function u2(a7) {
                var c3 = this.logarithmic;
                "logarithmic" !== a7.userOptions.type ? this.logarithmic = void 0 : c3 || (this.logarithmic = new g2(this));
            }
            function n() {
                var a7 = this.logarithmic;
                a7 && (this.lin2val = function(c3) {
                    return a7.lin2log(c3);
                }, this.val2lin = function(c3) {
                    return a7.log2lin(c3);
                });
            }
            var m2 = [];
            a3.compose = function(a7) {
                -1 === m2.indexOf(a7) && (m2.push(a7), a7.keepProps.push("logarithmic"), r2(a7, "init", u2), r2(a7, "afterInit", n));
                return a7;
            };
            var g2 = function() {
                function a7(a8) {
                    this.axis = a8;
                }
                a7.prototype.getLogTickPositions = function(a8, c3, f9, g8) {
                    var e5 = this.axis, k12 = e5.len, l7 = e5.options, m7 = [];
                    g8 || (this.minorAutoInterval = void 0);
                    if (0.5 <= a8) a8 = Math.round(a8), m7 = e5.getLinearTickPositions(a8, c3, f9);
                    else if (0.08 <= a8) {
                        var n1 = Math.floor(c3), v3, t2 = l7 = void 0;
                        for(k12 = 0.3 < a8 ? [
                            1,
                            2,
                            4
                        ] : 0.15 < a8 ? [
                            1,
                            2,
                            4,
                            6,
                            8
                        ] : [
                            1,
                            2,
                            3,
                            4,
                            5,
                            6,
                            7,
                            8,
                            9
                        ]; n1 < f9 + 1 && !t2; n1++){
                            var h3 = k12.length;
                            for(v3 = 0; v3 < h3 && !t2; v3++){
                                var d1 = this.log2lin(this.lin2log(n1) * k12[v3]);
                                d1 > c3 && (!g8 || l7 <= f9) && "undefined" !== typeof l7 && m7.push(l7);
                                l7 > f9 && (t2 = !0);
                                l7 = d1;
                            }
                        }
                    } else c3 = this.lin2log(c3), f9 = this.lin2log(f9), a8 = g8 ? e5.getMinorTickInterval() : l7.tickInterval, a8 = z("auto" === a8 ? null : a8, this.minorAutoInterval, l7.tickPixelInterval / (g8 ? 5 : 1) * (f9 - c3) / ((g8 ? k12 / e5.tickPositions.length : k12) || 1)), a8 = E(a8, void 0, C(a8)), m7 = e5.getLinearTickPositions(a8, c3, f9).map(this.log2lin), g8 || (this.minorAutoInterval = a8 / 5);
                    g8 || (e5.tickInterval = a8);
                    return m7;
                };
                a7.prototype.lin2log = function(a8) {
                    return Math.pow(10, a8);
                };
                a7.prototype.log2lin = function(a8) {
                    return Math.log(a8) / Math.LN10;
                };
                return a7;
            }();
            a3.Additions = g2;
        })(x || (x = {
        }));
        return x;
    });
    M(a3, "Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js", [
        a3["Core/Utilities.js"]
    ], function(a1) {
        var r2 = a1.erase, C = a1.extend, E = a1.isNumber, z;
        (function(a3) {
            var x = [], u2;
            a3.compose = function(a7, g2) {
                u2 || (u2 = a7);
                -1 === x.indexOf(g2) && (x.push(g2), C(g2.prototype, n2.prototype));
                return g2;
            };
            var n2 = function() {
                function a7() {
                }
                a7.prototype.getPlotBandPath = function(a8, c3, e5) {
                    (void 0) === e5 && (e5 = this.options);
                    var g2 = this.getPlotLinePath({
                        value: c3,
                        force: !0,
                        acrossPanes: e5.acrossPanes
                    }), f9 = [], m2 = this.horiz;
                    c3 = !E(this.min) || !E(this.max) || a8 < this.min && c3 < this.min || a8 > this.max && c3 > this.max;
                    a8 = this.getPlotLinePath({
                        value: a8,
                        force: !0,
                        acrossPanes: e5.acrossPanes
                    });
                    e5 = 1;
                    if (a8 && g2) {
                        if (c3) {
                            var q2 = a8.toString() === g2.toString();
                            e5 = 0;
                        }
                        for(c3 = 0; c3 < a8.length; c3 += 2){
                            var k12 = a8[c3], n3 = a8[c3 + 1], r3 = g2[c3], B = g2[c3 + 1];
                            "M" !== k12[0] && "L" !== k12[0] || "M" !== n3[0] && "L" !== n3[0] || "M" !== r3[0] && "L" !== r3[0] || "M" !== B[0] && "L" !== B[0] || (m2 && r3[1] === k12[1] ? (r3[1] += e5, B[1] += e5) : m2 || r3[2] !== k12[2] || (r3[2] += e5, B[2] += e5), f9.push([
                                "M",
                                k12[1],
                                k12[2]
                            ], [
                                "L",
                                n3[1],
                                n3[2]
                            ], [
                                "L",
                                B[1],
                                B[2]
                            ], [
                                "L",
                                r3[1],
                                r3[2]
                            ], [
                                "Z"
                            ]));
                            f9.isFlat = q2;
                        }
                    }
                    return f9;
                };
                a7.prototype.addPlotBand = function(a8) {
                    return this.addPlotBandOrLine(a8, "plotBands");
                };
                a7.prototype.addPlotLine = function(a8) {
                    return this.addPlotBandOrLine(a8, "plotLines");
                };
                a7.prototype.addPlotBandOrLine = function(a8, c3) {
                    var e5 = this, g2 = this.userOptions, f9 = new u2(this, a8);
                    this.visible && (f9 = f9.render());
                    if (f9) {
                        this._addedPlotLB || (this._addedPlotLB = !0, (g2.plotLines || []).concat(g2.plotBands || []).forEach(function(a9) {
                            e5.addPlotBandOrLine(a9);
                        }));
                        if (c3) {
                            var m2 = g2[c3] || [];
                            m2.push(a8);
                            g2[c3] = m2;
                        }
                        this.plotLinesAndBands.push(f9);
                    }
                    return f9;
                };
                a7.prototype.removePlotBandOrLine = function(a8) {
                    var c3 = this.plotLinesAndBands, e5 = this.options, g2 = this.userOptions;
                    if (c3) {
                        for(var f9 = c3.length; f9--;)c3[f9].id === a8 && c3[f9].destroy();
                        [
                            e5.plotLines || [],
                            g2.plotLines || [],
                            e5.plotBands || [],
                            g2.plotBands || []
                        ].forEach(function(c8) {
                            for(f9 = c8.length; f9--;)(c8[f9] || {
                            }).id === a8 && r2(c8, c8[f9]);
                        });
                    }
                };
                a7.prototype.removePlotBand = function(a8) {
                    this.removePlotBandOrLine(a8);
                };
                a7.prototype.removePlotLine = function(a8) {
                    this.removePlotBandOrLine(a8);
                };
                return a7;
            }();
        })(z || (z = {
        }));
        return z;
    });
    M(a3, "Core/Axis/PlotLineOrBand/PlotLineOrBand.js", [
        a3["Core/Color/Palette.js"],
        a3["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w, C) {
        var r2 = C.arrayMax, z = C.arrayMin, x = C.defined, J = C.destroyObjectProperties, u2 = C.erase, n2 = C.fireEvent, m7 = C.merge, g2 = C.objectEach, c3 = C.pick;
        C = (function() {
            function e5(a3, c8) {
                this.axis = a3;
                c8 && (this.options = c8, this.id = c8.id);
            }
            e5.compose = function(a3) {
                return w.compose(e5, a3);
            };
            e5.prototype.render = function() {
                n2(this, "render");
                var e9 = this, f14 = e9.axis, v4 = f14.horiz, q3 = f14.logarithmic, k14 = e9.options, r4 = k14.color, D2 = c3(k14.zIndex, 0), B = k14.events, u3 = {
                }, t3 = f14.chart.renderer, h5 = k14.label, d3 = e9.label, b3 = k14.to, p4 = k14.from, G4 = k14.value, y = e9.svgElem, L2 = [], F4 = x(p4) && x(b3);
                L2 = x(G4);
                var P2 = !y, S = {
                    "class": "highcharts-plot-" + (F4 ? "band " : "line ") + (k14.className || "")
                }, Q = F4 ? "bands" : "lines";
                q3 && (p4 = q3.log2lin(p4), b3 = q3.log2lin(b3), G4 = q3.log2lin(G4));
                f14.chart.styledMode || (L2 ? (S.stroke = r4 || a1.neutralColor40, S["stroke-width"] = c3(k14.width, 1), k14.dashStyle && (S.dashstyle = k14.dashStyle)) : F4 && (S.fill = r4 || a1.highlightColor10, k14.borderWidth && (S.stroke = k14.borderColor, S["stroke-width"] = k14.borderWidth)));
                u3.zIndex = D2;
                Q += "-" + D2;
                (q3 = f14.plotLinesAndBandsGroups[Q]) || (f14.plotLinesAndBandsGroups[Q] = q3 = t3.g("plot-" + Q).attr(u3).add());
                P2 && (e9.svgElem = y = t3.path().attr(S).add(q3));
                if (L2) L2 = f14.getPlotLinePath({
                    value: G4,
                    lineWidth: y.strokeWidth(),
                    acrossPanes: k14.acrossPanes
                });
                else if (F4) L2 = f14.getPlotBandPath(p4, b3, k14);
                else return;
                !e9.eventsAdded && B && (g2(B, function(b4, d4) {
                    y.on(d4, function(b5) {
                        B[d4].apply(e9, [
                            b5
                        ]);
                    });
                }), e9.eventsAdded = !0);
                (P2 || !y.d) && L2 && L2.length ? y.attr({
                    d: L2
                }) : y && (L2 ? (y.show(!0), y.animate({
                    d: L2
                })) : y.d && (y.hide(), d3 && (e9.label = d3 = d3.destroy())));
                h5 && (x(h5.text) || x(h5.formatter)) && L2 && L2.length && 0 < f14.width && 0 < f14.height && !L2.isFlat ? (h5 = m7({
                    align: v4 && F4 && "center",
                    x: v4 ? !F4 && 4 : 10,
                    verticalAlign: !v4 && F4 && "middle",
                    y: v4 ? F4 ? 16 : 10 : F4 ? 6 : -4,
                    rotation: v4 && !F4 && 90
                }, h5), this.renderLabel(h5, L2, F4, D2)) : d3 && d3.hide();
                return e9;
            };
            e5.prototype.renderLabel = function(a3, c8, e9, g8) {
                var f14 = this.axis, l7 = f14.chart.renderer, q3 = this.label;
                q3 || (this.label = q3 = l7.text(this.getLabelText(a3), 0, 0, a3.useHTML).attr({
                    align: a3.textAlign || a3.align,
                    rotation: a3.rotation,
                    "class": "highcharts-plot-" + (e9 ? "band" : "line") + "-label " + (a3.className || ""),
                    zIndex: g8
                }).add(), f14.chart.styledMode || q3.css(m7({
                    textOverflow: "ellipsis"
                }, a3.style)));
                g8 = c8.xBounds || [
                    c8[0][1],
                    c8[1][1],
                    e9 ? c8[2][1] : c8[0][1]
                ];
                c8 = c8.yBounds || [
                    c8[0][2],
                    c8[1][2],
                    e9 ? c8[2][2] : c8[0][2]
                ];
                e9 = z(g8);
                l7 = z(c8);
                q3.align(a3, !1, {
                    x: e9,
                    y: l7,
                    width: r2(g8) - e9,
                    height: r2(c8) - l7
                });
                q3.alignValue && "left" !== q3.alignValue || q3.css({
                    width: (90 === q3.rotation ? f14.height - (q3.alignAttr.y - f14.top) : f14.width - (q3.alignAttr.x - f14.left)) + "px"
                });
                q3.show(!0);
            };
            e5.prototype.getLabelText = function(a3) {
                return x(a3.formatter) ? a3.formatter.call(this) : a3.text;
            };
            e5.prototype.destroy = function() {
                u2(this.axis.plotLinesAndBands, this);
                delete this.axis;
                J(this);
            };
            return e5;
        })();
        return C;
    });
    M(a3, "Core/Tooltip.js", [
        a3["Core/FormatUtilities.js"],
        a3["Core/Globals.js"],
        a3["Core/Color/Palette.js"],
        a3["Core/Renderer/RendererUtilities.js"],
        a3["Core/Renderer/RendererRegistry.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w, C, E, z1, x) {
        var r2 = a1.format, u2 = w.doc, n2 = E.distribute, m7 = x.addEvent, g2 = x.clamp, c3 = x.css, e5 = x.defined, l7 = x.discardElement, f14 = x.extend, v4 = x.fireEvent, q3 = x.isArray, k14 = x.isNumber, I = x.isString, D2 = x.merge, B = x.pick, O = x.splat, t3 = x.syncTimeout;
        a1 = (function() {
            function a3(a7, b3) {
                this.container = void 0;
                this.crosshairs = [];
                this.distance = 0;
                this.isHidden = !0;
                this.isSticky = !1;
                this.now = {
                };
                this.options = {
                };
                this.outside = !1;
                this.chart = a7;
                this.init(a7, b3);
            }
            a3.prototype.applyFilter = function() {
                var a7 = this.chart;
                a7.renderer.definition({
                    tagName: "filter",
                    attributes: {
                        id: "drop-shadow-" + a7.index,
                        opacity: 0.5
                    },
                    children: [
                        {
                            tagName: "feGaussianBlur",
                            attributes: {
                                "in": "SourceAlpha",
                                stdDeviation: 1
                            }
                        },
                        {
                            tagName: "feOffset",
                            attributes: {
                                dx: 1,
                                dy: 1
                            }
                        },
                        {
                            tagName: "feComponentTransfer",
                            children: [
                                {
                                    tagName: "feFuncA",
                                    attributes: {
                                        type: "linear",
                                        slope: 0.3
                                    }
                                }
                            ]
                        },
                        {
                            tagName: "feMerge",
                            children: [
                                {
                                    tagName: "feMergeNode"
                                },
                                {
                                    tagName: "feMergeNode",
                                    attributes: {
                                        "in": "SourceGraphic"
                                    }
                                }
                            ]
                        }
                    ]
                });
            };
            a3.prototype.bodyFormatter = function(a7) {
                return a7.map(function(b3) {
                    var a8 = b3.series.tooltipOptions;
                    return (a8[(b3.point.formatPrefix || "point") + "Formatter"] || b3.point.tooltipFormatter).call(b3.point, a8[(b3.point.formatPrefix || "point") + "Format"] || "");
                });
            };
            a3.prototype.cleanSplit = function(a7) {
                this.chart.series.forEach(function(b3) {
                    var d3 = b3 && b3.tt;
                    d3 && (!d3.isActive || a7 ? b3.tt = d3.destroy() : d3.isActive = !1);
                });
            };
            a3.prototype.defaultFormatter = function(a7) {
                var b3 = this.points || O(this);
                var d3 = [
                    a7.tooltipFooterHeaderFormatter(b3[0])
                ];
                d3 = d3.concat(a7.bodyFormatter(b3));
                d3.push(a7.tooltipFooterHeaderFormatter(b3[0], !0));
                return d3;
            };
            a3.prototype.destroy = function() {
                this.label && (this.label = this.label.destroy());
                this.split && this.tt && (this.cleanSplit(this.chart, !0), this.tt = this.tt.destroy());
                this.renderer && (this.renderer = this.renderer.destroy(), l7(this.container));
                x.clearTimeout(this.hideTimer);
                x.clearTimeout(this.tooltipTimeout);
            };
            a3.prototype.getAnchor = function(a7, b3) {
                var d3 = this.chart, c8 = d3.pointer, e9 = d3.inverted, h5 = d3.plotTop, f15 = d3.plotLeft, g8, k15, t4 = 0, l8 = 0;
                a7 = O(a7);
                this.followPointer && b3 ? ("undefined" === typeof b3.chartX && (b3 = c8.normalize(b3)), c8 = [
                    b3.chartX - f15,
                    b3.chartY - h5
                ]) : a7[0].tooltipPos ? c8 = a7[0].tooltipPos : (a7.forEach(function(b4) {
                    g8 = b4.series.yAxis;
                    k15 = b4.series.xAxis;
                    t4 += b4.plotX || 0;
                    l8 += b4.plotLow ? (b4.plotLow + (b4.plotHigh || 0)) / 2 : b4.plotY || 0;
                    k15 && g8 && (e9 ? (t4 += h5 + d3.plotHeight - k15.len - k15.pos, l8 += f15 + d3.plotWidth - g8.len - g8.pos) : (t4 += k15.pos - f15, l8 += g8.pos - h5));
                }), t4 /= a7.length, l8 /= a7.length, c8 = [
                    e9 ? d3.plotWidth - l8 : t4,
                    e9 ? d3.plotHeight - t4 : l8
                ], this.shared && 1 < a7.length && b3 && (e9 ? c8[0] = b3.chartX - f15 : c8[1] = b3.chartY - h5));
                return c8.map(Math.round);
            };
            a3.prototype.getLabel = function() {
                var a7 = this, b3 = this.chart.styledMode, h5 = this.options, f15 = "tooltip" + (e5(h5.className) ? " " + h5.className : ""), g8 = h5.style.pointerEvents || (!this.followPointer && h5.stickOnContact ? "auto" : "none"), k15 = function() {
                    a7.inContact = !0;
                }, t4 = function(b4) {
                    var d3 = a7.chart.hoverSeries;
                    a7.inContact = a7.shouldStickOnContact() && a7.chart.pointer.inClass(b4.relatedTarget, "highcharts-tooltip");
                    if (!a7.inContact && d3 && d3.onMouseOut) d3.onMouseOut();
                }, l8, q4 = this.chart.renderer;
                if (!this.label) {
                    if (this.outside) {
                        var n4 = this.chart.options.chart.style, v5 = z1.getRendererType();
                        this.container = l8 = w.doc.createElement("div");
                        l8.className = "highcharts-tooltip-container";
                        c3(l8, {
                            position: "absolute",
                            top: "1px",
                            pointerEvents: g8,
                            zIndex: Math.max(this.options.style.zIndex || 0, (n4 && n4.zIndex || 0) + 3)
                        });
                        m7(l8, "mouseenter", k15);
                        m7(l8, "mouseleave", t4);
                        w.doc.body.appendChild(l8);
                        this.renderer = q4 = new v5(l8, 0, 0, n4, void 0, void 0, q4.styledMode);
                    }
                    this.split ? this.label = q4.g(f15) : (this.label = q4.label("", 0, 0, h5.shape, void 0, void 0, h5.useHTML, void 0, f15).attr({
                        padding: h5.padding,
                        r: h5.borderRadius
                    }), b3 || this.label.attr({
                        fill: h5.backgroundColor,
                        "stroke-width": h5.borderWidth
                    }).css(h5.style).css({
                        pointerEvents: g8
                    }).shadow(h5.shadow));
                    b3 && h5.shadow && (this.applyFilter(), this.label.attr({
                        filter: "url(#drop-shadow-" + this.chart.index + ")"
                    }));
                    if (a7.outside && !a7.split) {
                        var r4 = this.label, B1 = r4.xSetter, D3 = r4.ySetter;
                        r4.xSetter = function(b4) {
                            B1.call(r4, a7.distance);
                            l8.style.left = b4 + "px";
                        };
                        r4.ySetter = function(b4) {
                            D3.call(r4, a7.distance);
                            l8.style.top = b4 + "px";
                        };
                    }
                    this.label.on("mouseenter", k15).on("mouseleave", t4).attr({
                        zIndex: 8
                    }).add();
                }
                return this.label;
            };
            a3.prototype.getPosition = function(a7, b3, c8) {
                var d3 = this.chart, e9 = this.distance, h5 = {
                }, f15 = d3.inverted && c8.h || 0, g8 = this.outside, p4 = g8 ? u2.documentElement.clientWidth - 2 * e9 : d3.chartWidth, k15 = g8 ? Math.max(u2.body.scrollHeight, u2.documentElement.scrollHeight, u2.body.offsetHeight, u2.documentElement.offsetHeight, u2.documentElement.clientHeight) : d3.chartHeight, l8 = d3.pointer.getChartPosition(), t4 = function(h6) {
                    var f16 = "x" === h6;
                    return [
                        h6,
                        f16 ? p4 : k15,
                        f16 ? a7 : b3
                    ].concat(g8 ? [
                        f16 ? a7 * l8.scaleX : b3 * l8.scaleY,
                        f16 ? l8.left - e9 + (c8.plotX + d3.plotLeft) * l8.scaleX : l8.top - e9 + (c8.plotY + d3.plotTop) * l8.scaleY,
                        0,
                        f16 ? p4 : k15
                    ] : [
                        f16 ? a7 : b3,
                        f16 ? c8.plotX + d3.plotLeft : c8.plotY + d3.plotTop,
                        f16 ? d3.plotLeft : d3.plotTop,
                        f16 ? d3.plotLeft + d3.plotWidth : d3.plotTop + d3.plotHeight
                    ]);
                }, m8 = t4("y"), q4 = t4("x"), n5, v6 = !this.followPointer && B(c8.ttBelow, !d3.inverted === !!c8.negative), r5 = function(b4, a8, d4, c9, p5, k16, y) {
                    var t5 = g8 ? "y" === b4 ? e9 * l8.scaleY : e9 * l8.scaleX : e9, G4 = (d4 - c9) / 2, A = c9 < p5 - e9, m9 = p5 + e9 + c9 < a8, F4 = p5 - t5 - d4 + G4;
                    p5 = p5 + t5 - G4;
                    if (v6 && m9) h5[b4] = p5;
                    else if (!v6 && A) h5[b4] = F4;
                    else if (A) h5[b4] = Math.min(y - c9, 0 > F4 - f15 ? F4 : F4 - f15);
                    else if (m9) h5[b4] = Math.max(k16, p5 + f15 + d4 > a8 ? p5 : p5 + f15);
                    else return !1;
                }, D4 = function(b4, a8, d4, c9, f16) {
                    var g9;
                    f16 < e9 || f16 > a8 - e9 ? g9 = !1 : h5[b4] = f16 < d4 / 2 ? 1 : f16 > a8 - c9 / 2 ? a8 - c9 - 2 : f16 - d4 / 2;
                    return g9;
                }, A = function(b4) {
                    var a8 = m8;
                    m8 = q4;
                    q4 = a8;
                    n5 = b4;
                }, U = function() {
                    !1 !== r5.apply(0, m8) ? !1 !== D4.apply(0, q4) || n5 || (A(!0), U()) : n5 ? h5.x = h5.y = 0 : (A(!0), U());
                };
                (d3.inverted || 1 < this.len) && A();
                U();
                return h5;
            };
            a3.prototype.hide = function(a7) {
                var b3 = this;
                x.clearTimeout(this.hideTimer);
                a7 = B(a7, this.options.hideDelay);
                this.isHidden || (this.hideTimer = t3(function() {
                    b3.getLabel().fadeOut(a7 ? void 0 : a7);
                    b3.isHidden = !0;
                }, a7));
            };
            a3.prototype.init = function(a7, b3) {
                this.chart = a7;
                this.options = b3;
                this.crosshairs = [];
                this.now = {
                    x: 0,
                    y: 0
                };
                this.isHidden = !0;
                this.split = b3.split && !a7.inverted && !a7.polar;
                this.shared = b3.shared || this.split;
                this.outside = B(b3.outside, !(!a7.scrollablePixelsX && !a7.scrollablePixelsY));
            };
            a3.prototype.shouldStickOnContact = function() {
                return !(this.followPointer || !this.options.stickOnContact);
            };
            a3.prototype.isStickyOnContact = function() {
                return !(!this.shouldStickOnContact() || !this.inContact);
            };
            a3.prototype.move = function(a7, b3, c8, e9) {
                var d3 = this, h5 = d3.now, g8 = !1 !== d3.options.animation && !d3.isHidden && (1 < Math.abs(a7 - h5.x) || 1 < Math.abs(b3 - h5.y)), p4 = d3.followPointer || 1 < d3.len;
                f14(h5, {
                    x: g8 ? (2 * h5.x + a7) / 3 : a7,
                    y: g8 ? (h5.y + b3) / 2 : b3,
                    anchorX: p4 ? void 0 : g8 ? (2 * h5.anchorX + c8) / 3 : c8,
                    anchorY: p4 ? void 0 : g8 ? (h5.anchorY + e9) / 2 : e9
                });
                d3.getLabel().attr(h5);
                d3.drawTracker();
                g8 && (x.clearTimeout(this.tooltipTimeout), this.tooltipTimeout = setTimeout(function() {
                    d3 && d3.move(a7, b3, c8, e9);
                }, 32));
            };
            a3.prototype.refresh = function(a7, b3) {
                var d3 = this.chart, c8 = this.options, e9 = O(a7), h5 = e9[0], f15 = [], g8 = c8.formatter || this.defaultFormatter, k15 = this.shared, l8 = d3.styledMode, t4 = {
                };
                if (c8.enabled) {
                    x.clearTimeout(this.hideTimer);
                    this.followPointer = !this.split && h5.series.tooltipOptions.followPointer;
                    var m8 = this.getAnchor(a7, b3), n5 = m8[0], r5 = m8[1];
                    !k15 || !q3(a7) && a7.series && a7.series.noSharedTooltip ? t4 = h5.getLabelConfig() : (d3.pointer.applyInactiveState(e9), e9.forEach(function(b4) {
                        b4.setState("hover");
                        f15.push(b4.getLabelConfig());
                    }), t4 = {
                        x: h5.category,
                        y: h5.y
                    }, t4.points = f15);
                    this.len = f15.length;
                    a7 = g8.call(t4, this);
                    g8 = h5.series;
                    this.distance = B(g8.tooltipOptions.distance, 16);
                    if (!1 === a7) this.hide();
                    else {
                        if (this.split) this.renderSplit(a7, e9);
                        else if (e9 = n5, k15 = r5, b3 && d3.pointer.isDirectTouch && (e9 = b3.chartX - d3.plotLeft, k15 = b3.chartY - d3.plotTop), d3.polar || !1 === g8.options.clip || g8.shouldShowTooltip(e9, k15)) b3 = this.getLabel(), c8.style.width && !l8 || b3.css({
                            width: this.chart.spacingBox.width + "px"
                        }), b3.attr({
                            text: a7 && a7.join ? a7.join("") : a7
                        }), b3.removeClass(/highcharts-color-[\d]+/g).addClass("highcharts-color-" + B(h5.colorIndex, g8.colorIndex)), l8 || b3.attr({
                            stroke: c8.borderColor || h5.color || g8.color || C.neutralColor60
                        }), this.updatePosition({
                            plotX: n5,
                            plotY: r5,
                            negative: h5.negative,
                            ttBelow: h5.ttBelow,
                            h: m8[2] || 0
                        });
                        else {
                            this.hide();
                            return;
                        }
                        this.isHidden && this.label && this.label.attr({
                            opacity: 1
                        }).show();
                        this.isHidden = !1;
                    }
                    v4(this, "refresh");
                }
            };
            a3.prototype.renderSplit = function(a7, b3) {
                function d3(b4, a8, d4, e9, h5) {
                    (void 0) === h5 && (h5 = !0);
                    d4 ? (a8 = Y ? 0 : J, b4 = g2(b4 - e9 / 2, N.left, N.right - e9 - (c8.outside ? T : 0))) : (a8 -= da, b4 = h5 ? b4 - e9 - z2 : b4 + z2, b4 = g2(b4, h5 ? b4 : N.left, N.right));
                    return {
                        x: b4,
                        y: a8
                    };
                }
                var c8 = this, e9 = c8.chart, h5 = c8.chart, k15 = h5.chartWidth, l8 = h5.chartHeight, t4 = h5.plotHeight, m9 = h5.plotLeft, q4 = h5.plotTop, r6 = h5.pointer, v6 = h5.scrollablePixelsY;
                v6 = (void 0) === v6 ? 0 : v6;
                var D4 = h5.scrollablePixelsX, x1 = h5.scrollingContainer;
                x1 = (void 0) === x1 ? {
                    scrollLeft: 0,
                    scrollTop: 0
                } : x1;
                var w1 = x1.scrollLeft;
                x1 = x1.scrollTop;
                var O1 = h5.styledMode, z2 = c8.distance, A = c8.options, U = c8.options.positioner, N = c8.outside && "number" !== typeof D4 ? u2.documentElement.getBoundingClientRect() : {
                    left: w1,
                    right: w1 + k15,
                    top: x1,
                    bottom: x1 + l8
                }, W = c8.getLabel(), X = this.renderer || e9.renderer, Y = !(!e9.xAxis[0] || !e9.xAxis[0].opposite);
                e9 = r6.getChartPosition();
                var T = e9.left;
                e9 = e9.top;
                var da = q4 + x1, E1 = 0, J = t4 - v6;
                I(a7) && (a7 = [
                    !1,
                    a7
                ]);
                a7 = a7.slice(0, b3.length + 1).reduce(function(a8, e10, h6) {
                    if (!1 !== e10 && "" !== e10) {
                        h6 = b3[h6 - 1] || {
                            isHeader: !0,
                            plotX: b3[0].plotX,
                            plotY: t4,
                            series: {
                            }
                        };
                        var f15 = h6.isHeader, p4 = f15 ? c8 : h6.series;
                        e10 = e10.toString();
                        var k16 = p4.tt, l9 = h6.isHeader;
                        var y = h6.series;
                        var G4 = "highcharts-color-" + B(h6.colorIndex, y.colorIndex, "none");
                        k16 || (k16 = {
                            padding: A.padding,
                            r: A.borderRadius
                        }, O1 || (k16.fill = A.backgroundColor, k16["stroke-width"] = A.borderWidth), k16 = X.label("", 0, 0, A[l9 ? "headerShape" : "shape"], void 0, void 0, A.useHTML).addClass((l9 ? "highcharts-tooltip-header " : "") + "highcharts-tooltip-box " + G4).attr(k16).add(W));
                        k16.isActive = !0;
                        k16.attr({
                            text: e10
                        });
                        O1 || k16.css(A.style).shadow(A.shadow).attr({
                            stroke: A.borderColor || h6.color || y.color || C.neutralColor80
                        });
                        p4 = p4.tt = k16;
                        l9 = p4.getBBox();
                        e10 = l9.width + p4.strokeWidth();
                        f15 && (E1 = l9.height, J += E1, Y && (da -= E1));
                        y = h6.plotX;
                        y = (void 0) === y ? 0 : y;
                        G4 = h6.plotY;
                        G4 = (void 0) === G4 ? 0 : G4;
                        k16 = h6.series;
                        if (h6.isHeader) {
                            y = m9 + y;
                            var F4 = q4 + t4 / 2;
                        } else {
                            var n6 = k16.xAxis, ca = k16.yAxis;
                            y = n6.pos + g2(y, -z2, n6.len + z2);
                            k16.shouldShowTooltip(0, ca.pos - q4 + G4, {
                                ignoreX: !0
                            }) && (F4 = ca.pos + G4);
                        }
                        y = g2(y, N.left - z2, N.right + z2);
                        "number" === typeof F4 ? (l9 = l9.height + 1, G4 = U ? U.call(c8, e10, l9, h6) : d3(y, F4, f15, e10), a8.push({
                            align: U ? 0 : void 0,
                            anchorX: y,
                            anchorY: F4,
                            boxWidth: e10,
                            point: h6,
                            rank: B(G4.rank, f15 ? 1 : 0),
                            size: l9,
                            target: G4.y,
                            tt: p4,
                            x: G4.x
                        })) : p4.isActive = !1;
                    }
                    return a8;
                }, []);
                !U && a7.some(function(b4) {
                    var a8 = (c8.outside ? T : 0) + b4.anchorX;
                    return a8 < N.left && a8 + b4.boxWidth < N.right ? !0 : a8 < T - N.left + b4.boxWidth && N.right - a8 > a8;
                }) && (a7 = a7.map(function(b4) {
                    var a8 = d3(b4.anchorX, b4.anchorY, b4.point.isHeader, b4.boxWidth, !1);
                    return f14(b4, {
                        target: a8.y,
                        x: a8.x
                    });
                }));
                c8.cleanSplit();
                n2(a7, J);
                var ba = T, ea = T;
                a7.forEach(function(b4) {
                    var a8 = b4.x, d4 = b4.boxWidth;
                    b4 = b4.isHeader;
                    b4 || (c8.outside && T + a8 < ba && (ba = T + a8), !b4 && c8.outside && ba + d4 > ea && (ea = T + a8));
                });
                a7.forEach(function(b4) {
                    var a8 = b4.x, d4 = b4.anchorX, e10 = b4.pos, h6 = b4.point.isHeader;
                    e10 = {
                        visibility: "undefined" === typeof e10 ? "hidden" : "inherit",
                        x: a8,
                        y: e10 + da,
                        anchorX: d4,
                        anchorY: b4.anchorY
                    };
                    if (c8.outside && a8 < d4) {
                        var f16 = T - ba;
                        0 < f16 && (h6 || (e10.x = a8 + f16, e10.anchorX = d4 + f16), h6 && (e10.x = (ea - ba) / 2, e10.anchorX = d4 + f16));
                    }
                    b4.tt.attr(e10);
                });
                a7 = c8.container;
                v6 = c8.renderer;
                c8.outside && a7 && v6 && (h5 = W.getBBox(), v6.setSize(h5.width + h5.x, h5.height + h5.y, !1), a7.style.left = ba + "px", a7.style.top = e9 + "px");
            };
            a3.prototype.drawTracker = function() {
                if (this.followPointer || !this.options.stickOnContact) this.tracker && this.tracker.destroy();
                else {
                    var a7 = this.chart, b3 = this.label, c8 = this.shared ? a7.hoverPoints : a7.hoverPoint;
                    if (b3 && c8) {
                        var e9 = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        };
                        c8 = this.getAnchor(c8);
                        var h5 = b3.getBBox();
                        c8[0] += a7.plotLeft - b3.translateX;
                        c8[1] += a7.plotTop - b3.translateY;
                        e9.x = Math.min(0, c8[0]);
                        e9.y = Math.min(0, c8[1]);
                        e9.width = 0 > c8[0] ? Math.max(Math.abs(c8[0]), h5.width - c8[0]) : Math.max(Math.abs(c8[0]), h5.width);
                        e9.height = 0 > c8[1] ? Math.max(Math.abs(c8[1]), h5.height - Math.abs(c8[1])) : Math.max(Math.abs(c8[1]), h5.height);
                        this.tracker ? this.tracker.attr(e9) : (this.tracker = b3.renderer.rect(e9).addClass("highcharts-tracker").add(b3), a7.styledMode || this.tracker.attr({
                            fill: "rgba(0,0,0,0)"
                        }));
                    }
                }
            };
            a3.prototype.styledModeFormat = function(a8) {
                return a8.replace('style="font-size: 10px"', 'class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g, 'class="highcharts-color-{$1.colorIndex}"');
            };
            a3.prototype.tooltipFooterHeaderFormatter = function(a8, b4) {
                var d3 = a8.series, c9 = d3.tooltipOptions, e10 = d3.xAxis, h6 = e10 && e10.dateTime;
                e10 = {
                    isFooter: b4,
                    labelConfig: a8
                };
                var f17 = c9.xDateFormat, g8 = c9[b4 ? "footerFormat" : "headerFormat"];
                v4(this, "headerFormatter", e10, function(b5) {
                    h6 && !f17 && k14(a8.key) && (f17 = h6.getXDateFormat(a8.key, c9.dateTimeLabelFormats));
                    h6 && f17 && (a8.point && a8.point.tooltipDateKeys || [
                        "key"
                    ]).forEach(function(b6) {
                        g8 = g8.replace("{point." + b6 + "}", "{point." + b6 + ":" + f17 + "}");
                    });
                    d3.chart.styledMode && (g8 = this.styledModeFormat(g8));
                    b5.text = r2(g8, {
                        point: a8,
                        series: d3
                    }, this.chart);
                });
                return e10.text;
            };
            a3.prototype.update = function(a8) {
                this.destroy();
                D2(!0, this.chart.options.tooltip.userOptions, a8);
                this.init(this.chart, D2(!0, this.options, a8));
            };
            a3.prototype.updatePosition = function(a8) {
                var b4 = this.chart, d3 = this.options, e10 = b4.pointer, h6 = this.getLabel();
                e10 = e10.getChartPosition();
                var f17 = (d3.positioner || this.getPosition).call(this, h6.width, h6.height, a8), g8 = a8.plotX + b4.plotLeft;
                a8 = a8.plotY + b4.plotTop;
                if (this.outside) {
                    d3 = d3.borderWidth + 2 * this.distance;
                    this.renderer.setSize(h6.width + d3, h6.height + d3, !1);
                    if (1 !== e10.scaleX || 1 !== e10.scaleY) c3(this.container, {
                        transform: "scale(" + e10.scaleX + ", " + e10.scaleY + ")"
                    }), g8 *= e10.scaleX, a8 *= e10.scaleY;
                    g8 += e10.left - f17.x;
                    a8 += e10.top - f17.y;
                }
                this.move(Math.round(f17.x), Math.round(f17.y || 0), g8, a8);
            };
            return a3;
        })();
        return a1;
    });
    M(a3, "Core/Series/Point.js", [
        a3["Core/Renderer/HTML/AST.js"],
        a3["Core/Animation/AnimationUtilities.js"],
        a3["Core/DefaultOptions.js"],
        a3["Core/FormatUtilities.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w, C, E, z) {
        var r2 = w.animObject, J = C.defaultOptions, u2 = E.format, n2 = z.addEvent, m7 = z.defined, g2 = z.erase, c3 = z.extend, e5 = z.fireEvent, l7 = z.getNestedProperty, f14 = z.isArray, v4 = z.isFunction, q3 = z.isNumber, k14 = z.isObject, I = z.merge, D2 = z.objectEach, B2 = z.pick, O = z.syncTimeout, t3 = z.removeEvent, h6 = z.uniqueKey;
        w = (function() {
            function d3() {
                this.colorIndex = this.category = void 0;
                this.formatPrefix = "point";
                this.id = void 0;
                this.isNull = !1;
                this.percentage = this.options = this.name = void 0;
                this.selected = !1;
                this.total = this.series = void 0;
                this.visible = !0;
                this.x = void 0;
            }
            d3.prototype.animateBeforeDestroy = function() {
                var b4 = this, a3 = {
                    x: b4.startXPos,
                    opacity: 0
                }, d4 = b4.getGraphicalProps();
                d4.singular.forEach(function(d5) {
                    b4[d5] = b4[d5].animate("dataLabel" === d5 ? {
                        x: b4[d5].startXPos,
                        y: b4[d5].startYPos,
                        opacity: 0
                    } : a3);
                });
                d4.plural.forEach(function(a8) {
                    b4[a8].forEach(function(a9) {
                        a9.element && a9.animate(c3({
                            x: b4.startXPos
                        }, a9.startYPos ? {
                            x: a9.startXPos,
                            y: a9.startYPos
                        } : {
                        }));
                    });
                });
            };
            d3.prototype.applyOptions = function(b4, a3) {
                var e10 = this.series, h7 = e10.options.pointValKey || e10.pointValKey;
                b4 = d3.prototype.optionsToObject.call(this, b4);
                c3(this, b4);
                this.options = this.options ? c3(this.options, b4) : b4;
                b4.group && delete this.group;
                b4.dataLabels && delete this.dataLabels;
                h7 && (this.y = d3.prototype.getNestedProperty.call(this, h7));
                this.formatPrefix = (this.isNull = B2(this.isValid && !this.isValid(), null === this.x || !q3(this.y))) ? "null" : "point";
                this.selected && (this.state = "select");
                "name" in this && "undefined" === typeof a3 && e10.xAxis && e10.xAxis.hasNames && (this.x = e10.xAxis.nameToX(this));
                "undefined" === typeof this.x && e10 ? this.x = "undefined" === typeof a3 ? e10.autoIncrement() : a3 : q3(b4.x) && e10.options.relativeXValue && (this.x = e10.autoIncrement(b4.x));
                return this;
            };
            d3.prototype.destroy = function() {
                function b4() {
                    if (a8.graphic || a8.dataLabel || a8.dataLabels) t3(a8), a8.destroyElements();
                    for(f17 in a8)a8[f17] = null;
                }
                var a8 = this, d4 = a8.series, c9 = d4.chart;
                d4 = d4.options.dataSorting;
                var e10 = c9.hoverPoints, h7 = r2(a8.series.chart.renderer.globalAnimation), f17;
                a8.legendItem && c9.legend.destroyItem(a8);
                e10 && (a8.setState(), g2(e10, a8), e10.length || (c9.hoverPoints = null));
                if (a8 === c9.hoverPoint) a8.onMouseOut();
                d4 && d4.enabled ? (this.animateBeforeDestroy(), O(b4, h7.duration)) : b4();
                c9.pointCount--;
            };
            d3.prototype.destroyElements = function(b4) {
                var a8 = this;
                b4 = a8.getGraphicalProps(b4);
                b4.singular.forEach(function(b5) {
                    a8[b5] = a8[b5].destroy();
                });
                b4.plural.forEach(function(b5) {
                    a8[b5].forEach(function(b6) {
                        b6.element && b6.destroy();
                    });
                    delete a8[b5];
                });
            };
            d3.prototype.firePointEvent = function(b4, a8, d4) {
                var c9 = this, h7 = this.series.options;
                (h7.point.events[b4] || c9.options && c9.options.events && c9.options.events[b4]) && c9.importEvents();
                "click" === b4 && h7.allowPointSelect && (d4 = function(b5) {
                    c9.select && c9.select(null, b5.ctrlKey || b5.metaKey || b5.shiftKey);
                });
                e5(c9, b4, a8, d4);
            };
            d3.prototype.getClassName = function() {
                return "highcharts-point" + (this.selected ? " highcharts-point-select" : "") + (this.negative ? " highcharts-negative" : "") + (this.isNull ? " highcharts-null-point" : "") + ("undefined" !== typeof this.colorIndex ? " highcharts-color-" + this.colorIndex : "") + (this.options.className ? " " + this.options.className : "") + (this.zone && this.zone.className ? " " + this.zone.className.replace("highcharts-negative", "") : "");
            };
            d3.prototype.getGraphicalProps = function(b4) {
                var a8 = this, d4 = [], c9 = {
                    singular: [],
                    plural: []
                }, e10;
                b4 = b4 || {
                    graphic: 1,
                    dataLabel: 1
                };
                b4.graphic && d4.push("graphic", "upperGraphic", "shadowGroup");
                b4.dataLabel && d4.push("dataLabel", "dataLabelUpper", "connector");
                for(e10 = d4.length; e10--;){
                    var h7 = d4[e10];
                    a8[h7] && c9.singular.push(h7);
                }
                [
                    "dataLabel",
                    "connector"
                ].forEach(function(d5) {
                    var e11 = d5 + "s";
                    b4[d5] && a8[e11] && c9.plural.push(e11);
                });
                return c9;
            };
            d3.prototype.getLabelConfig = function() {
                return {
                    x: this.category,
                    y: this.y,
                    color: this.color,
                    colorIndex: this.colorIndex,
                    key: this.name || this.category,
                    series: this.series,
                    point: this,
                    percentage: this.percentage,
                    total: this.total || this.stackTotal
                };
            };
            d3.prototype.getNestedProperty = function(b4) {
                if (b4) return 0 === b4.indexOf("custom.") ? l7(b4, this.options) : this[b4];
            };
            d3.prototype.getZone = function() {
                var b4 = this.series, a8 = b4.zones;
                b4 = b4.zoneAxis || "y";
                var d4, c9 = 0;
                for(d4 = a8[c9]; this[b4] >= d4.value;)d4 = a8[++c9];
                this.nonZonedColor || (this.nonZonedColor = this.color);
                this.color = d4 && d4.color && !this.options.color ? d4.color : this.nonZonedColor;
                return d4;
            };
            d3.prototype.hasNewShapeType = function() {
                return (this.graphic && (this.graphic.symbolName || this.graphic.element.nodeName)) !== this.shapeType;
            };
            d3.prototype.init = function(b4, a8, d4) {
                this.series = b4;
                this.applyOptions(a8, d4);
                this.id = m7(this.id) ? this.id : h6();
                this.resolveColor();
                b4.chart.pointCount++;
                e5(this, "afterInit");
                return this;
            };
            d3.prototype.optionsToObject = function(b4) {
                var a8 = this.series, c9 = a8.options.keys, e10 = c9 || a8.pointArrayMap || [
                    "y"
                ], h8 = e10.length, g8 = {
                }, k15 = 0, l8 = 0;
                if (q3(b4) || null === b4) g8[e10[0]] = b4;
                else if (f14(b4)) for(!c9 && b4.length > h8 && (a8 = typeof b4[0], "string" === a8 ? g8.name = b4[0] : "number" === a8 && (g8.x = b4[0]), k15++); l8 < h8;)c9 && "undefined" === typeof b4[k15] || (0 < e10[l8].indexOf(".") ? d3.prototype.setNestedProperty(g8, b4[k15], e10[l8]) : g8[e10[l8]] = b4[k15]), k15++, l8++;
                else "object" === typeof b4 && (g8 = b4, b4.dataLabels && (a8._hasPointLabels = !0), b4.marker && (a8._hasPointMarkers = !0));
                return g8;
            };
            d3.prototype.resolveColor = function() {
                var b4 = this.series, a8 = b4.chart.styledMode;
                var d4 = b4.chart.options.chart.colorCount;
                delete this.nonZonedColor;
                if (b4.options.colorByPoint) {
                    if (!a8) {
                        d4 = b4.options.colors || b4.chart.options.colors;
                        var c9 = d4[b4.colorCounter];
                        d4 = d4.length;
                    }
                    a8 = b4.colorCounter;
                    b4.colorCounter++;
                    b4.colorCounter === d4 && (b4.colorCounter = 0);
                } else a8 || (c9 = b4.color), a8 = b4.colorIndex;
                this.colorIndex = B2(this.options.colorIndex, a8);
                this.color = B2(this.options.color, c9);
            };
            d3.prototype.setNestedProperty = function(b4, a8, d4) {
                d4.split(".").reduce(function(b5, d5, c10, e10) {
                    b5[d5] = e10.length - 1 === c10 ? a8 : k14(b5[d5], !0) ? b5[d5] : {
                    };
                    return b5[d5];
                }, b4);
                return b4;
            };
            d3.prototype.tooltipFormatter = function(b4) {
                var a8 = this.series, d4 = a8.tooltipOptions, c10 = B2(d4.valueDecimals, ""), e10 = d4.valuePrefix || "", h8 = d4.valueSuffix || "";
                a8.chart.styledMode && (b4 = a8.chart.tooltip.styledModeFormat(b4));
                (a8.pointArrayMap || [
                    "y"
                ]).forEach(function(a9) {
                    a9 = "{point." + a9;
                    if (e10 || h8) b4 = b4.replace(RegExp(a9 + "}", "g"), e10 + a9 + "}" + h8);
                    b4 = b4.replace(RegExp(a9 + "}", "g"), a9 + ":,." + c10 + "f}");
                });
                return u2(b4, {
                    point: this,
                    series: this.series
                }, a8.chart);
            };
            d3.prototype.update = function(b4, a8, d4, c10) {
                function e10() {
                    h8.applyOptions(b4);
                    var c11 = g8 && h8.hasDummyGraphic;
                    c11 = null === h8.y ? !c11 : c11;
                    g8 && c11 && (h8.graphic = g8.destroy(), delete h8.hasDummyGraphic);
                    k14(b4, !0) && (g8 && g8.element && b4 && b4.marker && "undefined" !== typeof b4.marker.symbol && (h8.graphic = g8.destroy()), b4 && b4.dataLabels && h8.dataLabel && (h8.dataLabel = h8.dataLabel.destroy()), h8.connector && (h8.connector = h8.connector.destroy()));
                    t4 = h8.index;
                    f17.updateParallelArrays(h8, t4);
                    l8.data[t4] = k14(l8.data[t4], !0) || k14(b4, !0) ? h8.options : B2(b4, l8.data[t4]);
                    f17.isDirty = f17.isDirtyData = !0;
                    !f17.fixedBox && f17.hasCartesianSeries && (p5.isDirtyBox = !0);
                    "point" === l8.legendType && (p5.isDirtyLegend = !0);
                    a8 && p5.redraw(d4);
                }
                var h8 = this, f17 = h8.series, g8 = h8.graphic, p5 = f17.chart, l8 = f17.options, t4;
                a8 = B2(a8, !0);
                !1 === c10 ? e10() : h8.firePointEvent("update", {
                    options: b4
                }, e10);
            };
            d3.prototype.remove = function(b4, a8) {
                this.series.removePoint(this.series.data.indexOf(this), b4, a8);
            };
            d3.prototype.select = function(b4, a8) {
                var d4 = this, c10 = d4.series, e10 = c10.chart;
                this.selectedStaging = b4 = B2(b4, !d4.selected);
                d4.firePointEvent(b4 ? "select" : "unselect", {
                    accumulate: a8
                }, function() {
                    d4.selected = d4.options.selected = b4;
                    c10.options.data[c10.data.indexOf(d4)] = d4.options;
                    d4.setState(b4 && "select");
                    a8 || e10.getSelectedPoints().forEach(function(b5) {
                        var a9 = b5.series;
                        b5.selected && b5 !== d4 && (b5.selected = b5.options.selected = !1, a9.options.data[a9.data.indexOf(b5)] = b5.options, b5.setState(e10.hoverPoints && a9.options.inactiveOtherPoints ? "inactive" : ""), b5.firePointEvent("unselect"));
                    });
                });
                delete this.selectedStaging;
            };
            d3.prototype.onMouseOver = function(b4) {
                var a8 = this.series.chart, d4 = a8.pointer;
                b4 = b4 ? d4.normalize(b4) : d4.getChartCoordinatesFromPoint(this, a8.inverted);
                d4.runPointActions(b4, this);
            };
            d3.prototype.onMouseOut = function() {
                var b4 = this.series.chart;
                this.firePointEvent("mouseOut");
                this.series.options.inactiveOtherPoints || (b4.hoverPoints || []).forEach(function(b5) {
                    b5.setState();
                });
                b4.hoverPoints = b4.hoverPoint = null;
            };
            d3.prototype.importEvents = function() {
                if (!this.hasImportedEvents) {
                    var b4 = this, a8 = I(b4.series.options.point, b4.options).events;
                    b4.events = a8;
                    D2(a8, function(a9, d4) {
                        v4(a9) && n2(b4, d4, a9);
                    });
                    this.hasImportedEvents = !0;
                }
            };
            d3.prototype.setState = function(b5, d4) {
                var h8 = this.series, f17 = this.state, g8 = h8.options.states[b5 || "normal"] || {
                }, k15 = J.plotOptions[h8.type].marker && h8.options.marker, p5 = k15 && !1 === k15.enabled, l8 = k15 && k15.states && k15.states[b5 || "normal"] || {
                }, t4 = !1 === l8.enabled, m9 = this.marker || {
                }, n7 = h8.chart, v6 = k15 && h8.markerAttribs, r6 = h8.halo, D4, I1 = h8.stateMarkerGraphic;
                b5 = b5 || "";
                if (!(b5 === this.state && !d4 || this.selected && "select" !== b5 || !1 === g8.enabled || b5 && (t4 || p5 && !1 === l8.enabled) || b5 && m9.states && m9.states[b5] && !1 === m9.states[b5].enabled)) {
                    this.state = b5;
                    v6 && (D4 = h8.markerAttribs(this, b5));
                    if (this.graphic && !this.hasDummyGraphic) {
                        f17 && this.graphic.removeClass("highcharts-point-" + f17);
                        b5 && this.graphic.addClass("highcharts-point-" + b5);
                        if (!n7.styledMode) {
                            var u3 = h8.pointAttribs(this, b5);
                            var x = B2(n7.options.chart.animation, g8.animation);
                            h8.options.inactiveOtherPoints && q3(u3.opacity) && ((this.dataLabels || []).forEach(function(b6) {
                                b6 && b6.animate({
                                    opacity: u3.opacity
                                }, x);
                            }), this.connector && this.connector.animate({
                                opacity: u3.opacity
                            }, x));
                            this.graphic.animate(u3, x);
                        }
                        D4 && this.graphic.animate(D4, B2(n7.options.chart.animation, l8.animation, k15.animation));
                        I1 && I1.hide();
                    } else {
                        if (b5 && l8) {
                            f17 = m9.symbol || h8.symbol;
                            I1 && I1.currentSymbol !== f17 && (I1 = I1.destroy());
                            if (D4) {
                                if (I1) I1[d4 ? "animate" : "attr"]({
                                    x: D4.x,
                                    y: D4.y
                                });
                                else f17 && (h8.stateMarkerGraphic = I1 = n7.renderer.symbol(f17, D4.x, D4.y, D4.width, D4.height).add(h8.markerGroup), I1.currentSymbol = f17);
                            }
                            !n7.styledMode && I1 && I1.attr(h8.pointAttribs(this, b5));
                        }
                        I1 && (I1[b5 && this.isInside ? "show" : "hide"](), I1.element.point = this, I1.addClass(this.getClassName(), !0));
                    }
                    g8 = g8.halo;
                    D4 = (I1 = this.graphic || I1) && I1.visibility || "inherit";
                    g8 && g8.size && I1 && "hidden" !== D4 && !this.isCluster ? (r6 || (h8.halo = r6 = n7.renderer.path().add(I1.parentGroup)), r6.show()[d4 ? "animate" : "attr"]({
                        d: this.haloPath(g8.size)
                    }), r6.attr({
                        "class": "highcharts-halo highcharts-color-" + B2(this.colorIndex, h8.colorIndex) + (this.className ? " " + this.className : ""),
                        visibility: D4,
                        zIndex: -1
                    }), r6.point = this, n7.styledMode || r6.attr(c3({
                        fill: this.color || h8.color,
                        "fill-opacity": g8.opacity
                    }, a1.filterUserAttributes(g8.attributes || {
                    })))) : r6 && r6.point && r6.point.haloPath && r6.animate({
                        d: r6.point.haloPath(0)
                    }, null, r6.hide);
                    e5(this, "afterSetState", {
                        state: b5
                    });
                }
            };
            d3.prototype.haloPath = function(b5) {
                return this.series.chart.renderer.symbols.circle(Math.floor(this.plotX) - b5, this.plotY - b5, 2 * b5, 2 * b5);
            };
            return d3;
        })();
        return w;
    });
    M(a3, "Core/Pointer.js", [
        a3["Core/Color/Color.js"],
        a3["Core/Globals.js"],
        a3["Core/Color/Palette.js"],
        a3["Core/Tooltip.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w, C, E, z) {
        var r2 = a1.parse, J = w.charts, u2 = w.noop, n2 = z.addEvent, m7 = z.attr, g2 = z.css, c3 = z.defined, e5 = z.extend, l7 = z.find, f14 = z.fireEvent, v4 = z.isNumber, q3 = z.isObject, k14 = z.objectEach, I1 = z.offset, D2 = z.pick, B2 = z.splat;
        a1 = (function() {
            function a9(a10, c10) {
                this.lastValidTouch = {
                };
                this.pinchDown = [];
                this.runChartClick = !1;
                this.eventsToUnbind = [];
                this.chart = a10;
                this.hasDragged = !1;
                this.options = c10;
                this.init(a10, c10);
            }
            a9.prototype.applyInactiveState = function(a10) {
                var c10 = [], d3;
                (a10 || []).forEach(function(b5) {
                    d3 = b5.series;
                    c10.push(d3);
                    d3.linkedParent && c10.push(d3.linkedParent);
                    d3.linkedSeries && (c10 = c10.concat(d3.linkedSeries));
                    d3.navigatorSeries && c10.push(d3.navigatorSeries);
                });
                this.chart.series.forEach(function(b5) {
                    -1 === c10.indexOf(b5) ? b5.setState("inactive", !0) : b5.options.inactiveOtherPoints && b5.setAllPointsToState("inactive");
                });
            };
            a9.prototype.destroy = function() {
                var c10 = this;
                this.eventsToUnbind.forEach(function(a10) {
                    return a10();
                });
                this.eventsToUnbind = [];
                w.chartCount || (a9.unbindDocumentMouseUp && (a9.unbindDocumentMouseUp = a9.unbindDocumentMouseUp()), a9.unbindDocumentTouchEnd && (a9.unbindDocumentTouchEnd = a9.unbindDocumentTouchEnd()));
                clearInterval(c10.tooltipTimeout);
                k14(c10, function(a10, d3) {
                    c10[d3] = void 0;
                });
            };
            a9.prototype.drag = function(a10) {
                var c10 = this.chart, d3 = c10.options.chart, b5 = this.zoomHor, e10 = this.zoomVert, f17 = c10.plotLeft, g8 = c10.plotTop, k15 = c10.plotWidth, l8 = c10.plotHeight, t3 = this.mouseDownX || 0, m9 = this.mouseDownY || 0, n7 = q3(d3.panning) ? d3.panning && d3.panning.enabled : d3.panning, v6 = d3.panKey && a10[d3.panKey + "Key"], B3 = a10.chartX, D4 = a10.chartY, I1 = this.selectionMarker;
                if (!I1 || !I1.touch) {
                    if (B3 < f17 ? B3 = f17 : B3 > f17 + k15 && (B3 = f17 + k15), D4 < g8 ? D4 = g8 : D4 > g8 + l8 && (D4 = g8 + l8), this.hasDragged = Math.sqrt(Math.pow(t3 - B3, 2) + Math.pow(m9 - D4, 2)), 10 < this.hasDragged) {
                        var u4 = c10.isInsidePlot(t3 - f17, m9 - g8, {
                            visiblePlotOnly: !0
                        });
                        c10.hasCartesianSeries && (this.zoomX || this.zoomY) && u4 && !v6 && !I1 && (this.selectionMarker = I1 = c10.renderer.rect(f17, g8, b5 ? 1 : k15, e10 ? 1 : l8, 0).attr({
                            "class": "highcharts-selection-marker",
                            zIndex: 7
                        }).add(), c10.styledMode || I1.attr({
                            fill: d3.selectionMarkerFill || r2(C.highlightColor80).setOpacity(0.25).get()
                        }));
                        I1 && b5 && (b5 = B3 - t3, I1.attr({
                            width: Math.abs(b5),
                            x: (0 < b5 ? 0 : b5) + t3
                        }));
                        I1 && e10 && (b5 = D4 - m9, I1.attr({
                            height: Math.abs(b5),
                            y: (0 < b5 ? 0 : b5) + m9
                        }));
                        u4 && !I1 && n7 && c10.pan(a10, d3.panning);
                    }
                }
            };
            a9.prototype.dragStart = function(a10) {
                var c10 = this.chart;
                c10.mouseIsDown = a10.type;
                c10.cancelClick = !1;
                c10.mouseDownX = this.mouseDownX = a10.chartX;
                c10.mouseDownY = this.mouseDownY = a10.chartY;
            };
            a9.prototype.drop = function(a10) {
                var h6 = this, d3 = this.chart, b5 = this.hasPinched;
                if (this.selectionMarker) {
                    var k15 = {
                        originalEvent: a10,
                        xAxis: [],
                        yAxis: []
                    }, l8 = this.selectionMarker, t3 = l8.attr ? l8.attr("x") : l8.x, m9 = l8.attr ? l8.attr("y") : l8.y, q4 = l8.attr ? l8.attr("width") : l8.width, n7 = l8.attr ? l8.attr("height") : l8.height, r6;
                    if (this.hasDragged || b5) d3.axes.forEach(function(d4) {
                        if (d4.zoomEnabled && c3(d4.min) && (b5 || h6[({
                            xAxis: "zoomX",
                            yAxis: "zoomY"
                        })[d4.coll]]) && v4(t3) && v4(m9)) {
                            var e10 = d4.horiz, f17 = "touchend" === a10.type ? d4.minPixelPadding : 0, g8 = d4.toValue((e10 ? t3 : m9) + f17);
                            e10 = d4.toValue((e10 ? t3 + q4 : m9 + n7) - f17);
                            k15[d4.coll].push({
                                axis: d4,
                                min: Math.min(g8, e10),
                                max: Math.max(g8, e10)
                            });
                            r6 = !0;
                        }
                    }), r6 && f14(d3, "selection", k15, function(a11) {
                        d3.zoom(e5(a11, b5 ? {
                            animation: !1
                        } : null));
                    });
                    v4(d3.index) && (this.selectionMarker = this.selectionMarker.destroy());
                    b5 && this.scaleGroups();
                }
                d3 && v4(d3.index) && (g2(d3.container, {
                    cursor: d3._cursor
                }), d3.cancelClick = 10 < this.hasDragged, d3.mouseIsDown = this.hasDragged = this.hasPinched = !1, this.pinchDown = []);
            };
            a9.prototype.findNearestKDPoint = function(a10, c10, d3) {
                var b5 = this.chart, e11 = b5.hoverPoint;
                b5 = b5.tooltip;
                if (e11 && b5 && b5.isStickyOnContact()) return e11;
                var h6;
                a10.forEach(function(b6) {
                    var a11 = !(b6.noSharedTooltip && c10) && 0 > b6.options.findNearestPointBy.indexOf("y");
                    b6 = b6.searchPoint(d3, a11);
                    if ((a11 = q3(b6, !0) && b6.series) && !(a11 = !q3(h6, !0))) {
                        a11 = h6.distX - b6.distX;
                        var e12 = h6.dist - b6.dist, f18 = (b6.series.group && b6.series.group.zIndex) - (h6.series.group && h6.series.group.zIndex);
                        a11 = 0 < (0 !== a11 && c10 ? a11 : 0 !== e12 ? e12 : 0 !== f18 ? f18 : h6.series.index > b6.series.index ? -1 : 1);
                    }
                    a11 && (h6 = b6);
                });
                return h6;
            };
            a9.prototype.getChartCoordinatesFromPoint = function(a10, c10) {
                var d3 = a10.series, b5 = d3.xAxis;
                d3 = d3.yAxis;
                var e11 = a10.shapeArgs;
                if (b5 && d3) {
                    var h6 = D2(a10.clientX, a10.plotX), f19 = a10.plotY || 0;
                    a10.isNode && e11 && v4(e11.x) && v4(e11.y) && (h6 = e11.x, f19 = e11.y);
                    return c10 ? {
                        chartX: d3.len + d3.pos - f19,
                        chartY: b5.len + b5.pos - h6
                    } : {
                        chartX: h6 + b5.pos,
                        chartY: f19 + d3.pos
                    };
                }
                if (e11 && e11.x && e11.y) return {
                    chartX: e11.x,
                    chartY: e11.y
                };
            };
            a9.prototype.getChartPosition = function() {
                if (this.chartPosition) return this.chartPosition;
                var a10 = this.chart.container, c10 = I1(a10);
                this.chartPosition = {
                    left: c10.left,
                    top: c10.top,
                    scaleX: 1,
                    scaleY: 1
                };
                var d3 = a10.offsetWidth;
                a10 = a10.offsetHeight;
                2 < d3 && 2 < a10 && (this.chartPosition.scaleX = c10.width / d3, this.chartPosition.scaleY = c10.height / a10);
                return this.chartPosition;
            };
            a9.prototype.getCoordinates = function(a10) {
                var c10 = {
                    xAxis: [],
                    yAxis: []
                };
                this.chart.axes.forEach(function(d3) {
                    c10[d3.isXAxis ? "xAxis" : "yAxis"].push({
                        axis: d3,
                        value: d3.toValue(a10[d3.horiz ? "chartX" : "chartY"])
                    });
                });
                return c10;
            };
            a9.prototype.getHoverData = function(a10, c10, d3, b5, e11, g9) {
                var h8 = [];
                b5 = !(!b5 || !a10);
                var k17 = {
                    chartX: g9 ? g9.chartX : void 0,
                    chartY: g9 ? g9.chartY : void 0,
                    shared: e11
                };
                f14(this, "beforeGetHoverData", k17);
                var p5 = c10 && !c10.stickyTracking ? [
                    c10
                ] : d3.filter(function(b6) {
                    return k17.filter ? k17.filter(b6) : b6.visible && !(!e11 && b6.directTouch) && D2(b6.options.enableMouseTracking, !0) && b6.stickyTracking;
                });
                var t4 = b5 || !g9 ? a10 : this.findNearestKDPoint(p5, e11, g9);
                c10 = t4 && t4.series;
                t4 && (e11 && !c10.noSharedTooltip ? (p5 = d3.filter(function(b6) {
                    return k17.filter ? k17.filter(b6) : b6.visible && !(!e11 && b6.directTouch) && D2(b6.options.enableMouseTracking, !0) && !b6.noSharedTooltip;
                }), p5.forEach(function(b6) {
                    var a11 = l7(b6.points, function(b7) {
                        return b7.x === t4.x && !b7.isNull;
                    });
                    q3(a11) && (b6.chart.isBoosting && (a11 = b6.getPoint(a11)), h8.push(a11));
                })) : h8.push(t4));
                k17 = {
                    hoverPoint: t4
                };
                f14(this, "afterGetHoverData", k17);
                return {
                    hoverPoint: k17.hoverPoint,
                    hoverSeries: c10,
                    hoverPoints: h8
                };
            };
            a9.prototype.getPointFromEvent = function(a10) {
                a10 = a10.target;
                for(var c10; a10 && !c10;)c10 = a10.point, a10 = a10.parentNode;
                return c10;
            };
            a9.prototype.onTrackerMouseOut = function(a10) {
                a10 = a10.relatedTarget || a10.toElement;
                var c10 = this.chart.hoverSeries;
                this.isDirectTouch = !1;
                if (!(!c10 || !a10 || c10.stickyTracking || this.inClass(a10, "highcharts-tooltip") || this.inClass(a10, "highcharts-series-" + c10.index) && this.inClass(a10, "highcharts-tracker"))) c10.onMouseOut();
            };
            a9.prototype.inClass = function(a10, c10) {
                for(var d3; a10;){
                    if (d3 = m7(a10, "class")) {
                        if (-1 !== d3.indexOf(c10)) return !0;
                        if (-1 !== d3.indexOf("highcharts-container")) return !1;
                    }
                    a10 = a10.parentNode;
                }
            };
            a9.prototype.init = function(a10, c10) {
                this.options = c10;
                this.chart = a10;
                this.runChartClick = !(!c10.chart.events || !c10.chart.events.click);
                this.pinchDown = [];
                this.lastValidTouch = {
                };
                E && (a10.tooltip = new E(a10, c10.tooltip), this.followTouchMove = D2(c10.tooltip.followTouchMove, !0));
                this.setDOMEvents();
            };
            a9.prototype.normalize = function(a10, c10) {
                var d3 = a10.touches, b5 = d3 ? d3.length ? d3.item(0) : D2(d3.changedTouches, a10.changedTouches)[0] : a10;
                c10 || (c10 = this.getChartPosition());
                d3 = b5.pageX - c10.left;
                b5 = b5.pageY - c10.top;
                d3 /= c10.scaleX;
                b5 /= c10.scaleY;
                return e5(a10, {
                    chartX: Math.round(d3),
                    chartY: Math.round(b5)
                });
            };
            a9.prototype.onContainerClick = function(a10) {
                var c10 = this.chart, d3 = c10.hoverPoint;
                a10 = this.normalize(a10);
                var b5 = c10.plotLeft, g9 = c10.plotTop;
                c10.cancelClick || (d3 && this.inClass(a10.target, "highcharts-tracker") ? (f14(d3.series, "click", e5(a10, {
                    point: d3
                })), c10.hoverPoint && d3.firePointEvent("click", a10)) : (e5(a10, this.getCoordinates(a10)), c10.isInsidePlot(a10.chartX - b5, a10.chartY - g9, {
                    visiblePlotOnly: !0
                }) && f14(c10, "click", a10)));
            };
            a9.prototype.onContainerMouseDown = function(a10) {
                var c10 = 1 === ((a10.buttons || a10.button) & 1);
                a10 = this.normalize(a10);
                if (w.isFirefox && 0 !== a10.button) this.onContainerMouseMove(a10);
                if ("undefined" === typeof a10.button || c10) this.zoomOption(a10), c10 && a10.preventDefault && a10.preventDefault(), this.dragStart(a10);
            };
            a9.prototype.onContainerMouseLeave = function(c10) {
                var e11 = J[D2(a9.hoverChartIndex, -1)], d3 = this.chart.tooltip;
                d3 && d3.shouldStickOnContact() && this.inClass(c10.relatedTarget, "highcharts-tooltip-container") || (c10 = this.normalize(c10), e11 && (c10.relatedTarget || c10.toElement) && (e11.pointer.reset(), e11.pointer.chartPosition = void 0), d3 && !d3.isHidden && this.reset());
            };
            a9.prototype.onContainerMouseEnter = function(a10) {
                delete this.chartPosition;
            };
            a9.prototype.onContainerMouseMove = function(a10) {
                var c10 = this.chart;
                a10 = this.normalize(a10);
                this.setHoverChartIndex();
                a10.preventDefault || (a10.returnValue = !1);
                ("mousedown" === c10.mouseIsDown || this.touchSelect(a10)) && this.drag(a10);
                c10.openMenu || !this.inClass(a10.target, "highcharts-tracker") && !c10.isInsidePlot(a10.chartX - c10.plotLeft, a10.chartY - c10.plotTop, {
                    visiblePlotOnly: !0
                }) || (this.inClass(a10.target, "highcharts-no-tooltip") ? this.reset(!1, 0) : this.runPointActions(a10));
            };
            a9.prototype.onDocumentTouchEnd = function(c10) {
                var e11 = J[D2(a9.hoverChartIndex, -1)];
                e11 && e11.pointer.drop(c10);
            };
            a9.prototype.onContainerTouchMove = function(a10) {
                if (this.touchSelect(a10)) this.onContainerMouseMove(a10);
                else this.touch(a10);
            };
            a9.prototype.onContainerTouchStart = function(a10) {
                if (this.touchSelect(a10)) this.onContainerMouseDown(a10);
                else this.zoomOption(a10), this.touch(a10, !0);
            };
            a9.prototype.onDocumentMouseMove = function(a10) {
                var c10 = this.chart, d3 = this.chartPosition;
                a10 = this.normalize(a10, d3);
                var b5 = c10.tooltip;
                !d3 || b5 && b5.isStickyOnContact() || c10.isInsidePlot(a10.chartX - c10.plotLeft, a10.chartY - c10.plotTop, {
                    visiblePlotOnly: !0
                }) || this.inClass(a10.target, "highcharts-tracker") || this.reset();
            };
            a9.prototype.onDocumentMouseUp = function(c10) {
                var e11 = J[D2(a9.hoverChartIndex, -1)];
                e11 && e11.pointer.drop(c10);
            };
            a9.prototype.pinch = function(a10) {
                var c10 = this, d3 = c10.chart, b5 = c10.pinchDown, f20 = a10.touches || [], g9 = f20.length, k17 = c10.lastValidTouch, l10 = c10.hasZoom, m10 = {
                }, t4 = 1 === g9 && (c10.inClass(a10.target, "highcharts-tracker") && d3.runTrackerClick || c10.runChartClick), q5 = {
                }, n8 = c10.selectionMarker;
                1 < g9 ? c10.initiated = !0 : 1 === g9 && this.followTouchMove && (c10.initiated = !1);
                l10 && c10.initiated && !t4 && !1 !== a10.cancelable && a10.preventDefault();
                [].map.call(f20, function(b6) {
                    return c10.normalize(b6);
                });
                "touchstart" === a10.type ? ([].forEach.call(f20, function(a11, d4) {
                    b5[d4] = {
                        chartX: a11.chartX,
                        chartY: a11.chartY
                    };
                }), k17.x = [
                    b5[0].chartX,
                    b5[1] && b5[1].chartX
                ], k17.y = [
                    b5[0].chartY,
                    b5[1] && b5[1].chartY
                ], d3.axes.forEach(function(b6) {
                    if (b6.zoomEnabled) {
                        var a11 = d3.bounds[b6.horiz ? "h" : "v"], c11 = b6.minPixelPadding, e11 = b6.toPixels(Math.min(D2(b6.options.min, b6.dataMin), b6.dataMin)), h8 = b6.toPixels(Math.max(D2(b6.options.max, b6.dataMax), b6.dataMax)), f21 = Math.max(e11, h8);
                        a11.min = Math.min(b6.pos, Math.min(e11, h8) - c11);
                        a11.max = Math.max(b6.pos + b6.len, f21 + c11);
                    }
                }), c10.res = !0) : c10.followTouchMove && 1 === g9 ? this.runPointActions(c10.normalize(a10)) : b5.length && (n8 || (c10.selectionMarker = n8 = e5({
                    destroy: u2,
                    touch: !0
                }, d3.plotBox)), c10.pinchTranslate(b5, f20, m10, n8, q5, k17), c10.hasPinched = l10, c10.scaleGroups(m10, q5), c10.res && (c10.res = !1, this.reset(!1, 0)));
            };
            a9.prototype.pinchTranslate = function(a10, c10, d3, b5, e13, f20) {
                this.zoomHor && this.pinchTranslateDirection(!0, a10, c10, d3, b5, e13, f20);
                this.zoomVert && this.pinchTranslateDirection(!1, a10, c10, d3, b5, e13, f20);
            };
            a9.prototype.pinchTranslateDirection = function(a10, c10, d3, b5, e13, f20, g9, k17) {
                var h9 = this.chart, l10 = a10 ? "x" : "y", p5 = a10 ? "X" : "Y", m10 = "chart" + p5, y = a10 ? "width" : "height", t4 = h9["plot" + (a10 ? "Left" : "Top")], q5 = h9.inverted, n8 = h9.bounds[a10 ? "h" : "v"], r7 = 1 === c10.length, v6 = c10[0][m10], B3 = !r7 && c10[1][m10];
                c10 = function() {
                    "number" === typeof I2 && 20 < Math.abs(v6 - B3) && (D4 = k17 || Math.abs(N - I2) / Math.abs(v6 - B3));
                    A = (t4 - N) / D4 + v6;
                    G6 = h9["plot" + (a10 ? "Width" : "Height")] / D4;
                };
                var G6, A, D4 = k17 || 1, N = d3[0][m10], I2 = !r7 && d3[1][m10];
                c10();
                d3 = A;
                if (d3 < n8.min) {
                    d3 = n8.min;
                    var L2 = !0;
                } else d3 + G6 > n8.max && (d3 = n8.max - G6, L2 = !0);
                L2 ? (N -= 0.8 * (N - g9[l10][0]), "number" === typeof I2 && (I2 -= 0.8 * (I2 - g9[l10][1])), c10()) : g9[l10] = [
                    N,
                    I2
                ];
                q5 || (f20[l10] = A - t4, f20[y] = G6);
                f20 = q5 ? 1 / D4 : D4;
                e13[y] = G6;
                e13[l10] = d3;
                b5[q5 ? a10 ? "scaleY" : "scaleX" : "scale" + p5] = D4;
                b5["translate" + p5] = f20 * t4 + (N - f20 * v6);
            };
            a9.prototype.reset = function(a10, c10) {
                var d3 = this.chart, b5 = d3.hoverSeries, e13 = d3.hoverPoint, h9 = d3.hoverPoints, f20 = d3.tooltip, g9 = f20 && f20.shared ? h9 : e13;
                a10 && g9 && B2(g9).forEach(function(b6) {
                    b6.series.isCartesian && "undefined" === typeof b6.plotX && (a10 = !1);
                });
                if (a10) f20 && g9 && B2(g9).length && (f20.refresh(g9), f20.shared && h9 ? h9.forEach(function(b6) {
                    b6.setState(b6.state, !0);
                    b6.series.isCartesian && (b6.series.xAxis.crosshair && b6.series.xAxis.drawCrosshair(null, b6), b6.series.yAxis.crosshair && b6.series.yAxis.drawCrosshair(null, b6));
                }) : e13 && (e13.setState(e13.state, !0), d3.axes.forEach(function(b6) {
                    b6.crosshair && e13.series[b6.coll] === b6 && b6.drawCrosshair(null, e13);
                })));
                else {
                    if (e13) e13.onMouseOut();
                    h9 && h9.forEach(function(b6) {
                        b6.setState();
                    });
                    if (b5) b5.onMouseOut();
                    f20 && f20.hide(c10);
                    this.unDocMouseMove && (this.unDocMouseMove = this.unDocMouseMove());
                    d3.axes.forEach(function(b6) {
                        b6.hideCrosshair();
                    });
                    this.hoverX = d3.hoverPoints = d3.hoverPoint = null;
                }
            };
            a9.prototype.runPointActions = function(c10, e13) {
                var d3 = this.chart, b5 = d3.tooltip && d3.tooltip.options.enabled ? d3.tooltip : void 0, h9 = b5 ? b5.shared : !1, f20 = e13 || d3.hoverPoint, g9 = f20 && f20.series || d3.hoverSeries;
                e13 = this.getHoverData(f20, g9, d3.series, (!c10 || "touchmove" !== c10.type) && (!!e13 || g9 && g9.directTouch && this.isDirectTouch), h9, c10);
                f20 = e13.hoverPoint;
                g9 = e13.hoverSeries;
                var k17 = e13.hoverPoints;
                e13 = g9 && g9.tooltipOptions.followPointer && !g9.tooltipOptions.split;
                h9 = h9 && g9 && !g9.noSharedTooltip;
                if (f20 && (f20 !== d3.hoverPoint || b5 && b5.isHidden)) {
                    (d3.hoverPoints || []).forEach(function(b6) {
                        -1 === k17.indexOf(b6) && b6.setState();
                    });
                    if (d3.hoverSeries !== g9) g9.onMouseOver();
                    this.applyInactiveState(k17);
                    (k17 || []).forEach(function(b6) {
                        b6.setState("hover");
                    });
                    d3.hoverPoint && d3.hoverPoint.firePointEvent("mouseOut");
                    if (!f20.series) return;
                    d3.hoverPoints = k17;
                    d3.hoverPoint = f20;
                    f20.firePointEvent("mouseOver");
                    b5 && b5.refresh(h9 ? k17 : f20, c10);
                } else e13 && b5 && !b5.isHidden && (f20 = b5.getAnchor([
                    {
                    }
                ], c10), d3.isInsidePlot(f20[0], f20[1], {
                    visiblePlotOnly: !0
                }) && b5.updatePosition({
                    plotX: f20[0],
                    plotY: f20[1]
                }));
                this.unDocMouseMove || (this.unDocMouseMove = n2(d3.container.ownerDocument, "mousemove", function(b6) {
                    var d4 = J[a9.hoverChartIndex];
                    if (d4) d4.pointer.onDocumentMouseMove(b6);
                }), this.eventsToUnbind.push(this.unDocMouseMove));
                d3.axes.forEach(function(b6) {
                    var a10 = D2((b6.crosshair || {
                    }).snap, !0), e14;
                    a10 && ((e14 = d3.hoverPoint) && e14.series[b6.coll] === b6 || (e14 = l7(k17, function(a12) {
                        return a12.series[b6.coll] === b6;
                    })));
                    e14 || !a10 ? b6.drawCrosshair(c10, e14) : b6.hideCrosshair();
                });
            };
            a9.prototype.scaleGroups = function(a10, c10) {
                var d3 = this.chart;
                d3.series.forEach(function(b5) {
                    var e13 = a10 || b5.getPlotBox();
                    b5.xAxis && b5.xAxis.zoomEnabled && b5.group && (b5.group.attr(e13), b5.markerGroup && (b5.markerGroup.attr(e13), b5.markerGroup.clip(c10 ? d3.clipRect : null)), b5.dataLabelsGroup && b5.dataLabelsGroup.attr(e13));
                });
                d3.clipRect.attr(c10 || d3.clipBox);
            };
            a9.prototype.setDOMEvents = function() {
                var c10 = this, e13 = this.chart.container, d3 = e13.ownerDocument;
                e13.onmousedown = this.onContainerMouseDown.bind(this);
                e13.onmousemove = this.onContainerMouseMove.bind(this);
                e13.onclick = this.onContainerClick.bind(this);
                this.eventsToUnbind.push(n2(e13, "mouseenter", this.onContainerMouseEnter.bind(this)));
                this.eventsToUnbind.push(n2(e13, "mouseleave", this.onContainerMouseLeave.bind(this)));
                a9.unbindDocumentMouseUp || (a9.unbindDocumentMouseUp = n2(d3, "mouseup", this.onDocumentMouseUp.bind(this)));
                for(var b5 = this.chart.renderTo.parentElement; b5 && "BODY" !== b5.tagName;)this.eventsToUnbind.push(n2(b5, "scroll", function() {
                    delete c10.chartPosition;
                })), b5 = b5.parentElement;
                w.hasTouch && (this.eventsToUnbind.push(n2(e13, "touchstart", this.onContainerTouchStart.bind(this), {
                    passive: !1
                })), this.eventsToUnbind.push(n2(e13, "touchmove", this.onContainerTouchMove.bind(this), {
                    passive: !1
                })), a9.unbindDocumentTouchEnd || (a9.unbindDocumentTouchEnd = n2(d3, "touchend", this.onDocumentTouchEnd.bind(this), {
                    passive: !1
                })));
            };
            a9.prototype.setHoverChartIndex = function() {
                var c10 = this.chart, e13 = w.charts[D2(a9.hoverChartIndex, -1)];
                if (e13 && e13 !== c10) e13.pointer.onContainerMouseLeave({
                    relatedTarget: !0
                });
                e13 && e13.mouseIsDown || (a9.hoverChartIndex = c10.index);
            };
            a9.prototype.touch = function(a10, c10) {
                var d3 = this.chart, b5;
                this.setHoverChartIndex();
                if (1 === a10.touches.length) {
                    if (a10 = this.normalize(a10), (b5 = d3.isInsidePlot(a10.chartX - d3.plotLeft, a10.chartY - d3.plotTop, {
                        visiblePlotOnly: !0
                    })) && !d3.openMenu) {
                        c10 && this.runPointActions(a10);
                        if ("touchmove" === a10.type) {
                            c10 = this.pinchDown;
                            var e13 = c10[0] ? 4 <= Math.sqrt(Math.pow(c10[0].chartX - a10.chartX, 2) + Math.pow(c10[0].chartY - a10.chartY, 2)) : !1;
                        }
                        D2(e13, !0) && this.pinch(a10);
                    } else c10 && this.reset();
                } else 2 === a10.touches.length && this.pinch(a10);
            };
            a9.prototype.touchSelect = function(a10) {
                return !(!this.chart.options.chart.zoomBySingleTouch || !a10.touches || 1 !== a10.touches.length);
            };
            a9.prototype.zoomOption = function(a10) {
                var c10 = this.chart, d3 = c10.options.chart;
                c10 = c10.inverted;
                var b5 = d3.zoomType || "";
                /touch/.test(a10.type) && (b5 = D2(d3.pinchType, b5));
                this.zoomX = a10 = /x/.test(b5);
                this.zoomY = d3 = /y/.test(b5);
                this.zoomHor = a10 && !c10 || d3 && c10;
                this.zoomVert = d3 && !c10 || a10 && c10;
                this.hasZoom = a10 || d3;
            };
            return a9;
        })();
        return a1;
    });
    M(a3, "Core/MSPointer.js", [
        a3["Core/Globals.js"],
        a3["Core/Pointer.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w, C) {
        function r2() {
            var a9 = [];
            a9.item = function(a10) {
                return this[a10];
            };
            e5(f14, function(c3) {
                a9.push({
                    pageX: c3.pageX,
                    pageY: c3.pageY,
                    target: c3.target
                });
            });
            return a9;
        }
        function z(a9, c3, e5, f14) {
            var g2 = J[w.hoverChartIndex || NaN];
            "touch" !== a9.pointerType && a9.pointerType !== a9.MSPOINTER_TYPE_TOUCH || !g2 || (g2 = g2.pointer, f14(a9), g2[c3]({
                type: e5,
                target: a9.currentTarget,
                preventDefault: n2,
                touches: r2()
            }));
        }
        var x = this && this.__extends || function() {
            var a9 = function(c3, e5) {
                a9 = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(a10, c10) {
                    a10.__proto__ = c10;
                } || function(a10, c10) {
                    for(var e14 in c10)c10.hasOwnProperty(e14) && (a10[e14] = c10[e14]);
                };
                return a9(c3, e5);
            };
            return function(c3, e5) {
                function f14() {
                    this.constructor = c3;
                }
                a9(c3, e5);
                c3.prototype = null === e5 ? Object.create(e5) : (f14.prototype = e5.prototype, new f14);
            };
        }(), J = a1.charts, u2 = a1.doc, n2 = a1.noop, m7 = a1.win, g2 = C.addEvent, c3 = C.css, e5 = C.objectEach, l7 = C.removeEvent, f14 = {
        }, v4 = !!m7.PointerEvent;
        return (function(e14) {
            function k14() {
                return null !== e14 && e14.apply(this, arguments) || this;
            }
            x(k14, e14);
            k14.isRequired = function() {
                return !(a1.hasTouch || !m7.PointerEvent && !m7.MSPointerEvent);
            };
            k14.prototype.batchMSEvents = function(a9) {
                a9(this.chart.container, v4 ? "pointerdown" : "MSPointerDown", this.onContainerPointerDown);
                a9(this.chart.container, v4 ? "pointermove" : "MSPointerMove", this.onContainerPointerMove);
                a9(u2, v4 ? "pointerup" : "MSPointerUp", this.onDocumentPointerUp);
            };
            k14.prototype.destroy = function() {
                this.batchMSEvents(l7);
                e14.prototype.destroy.call(this);
            };
            k14.prototype.init = function(a9, f20) {
                e14.prototype.init.call(this, a9, f20);
                this.hasZoom && c3(a9.container, {
                    "-ms-touch-action": "none",
                    "touch-action": "none"
                });
            };
            k14.prototype.onContainerPointerDown = function(a9) {
                z(a9, "onContainerTouchStart", "touchstart", function(a10) {
                    f14[a10.pointerId] = {
                        pageX: a10.pageX,
                        pageY: a10.pageY,
                        target: a10.currentTarget
                    };
                });
            };
            k14.prototype.onContainerPointerMove = function(a9) {
                z(a9, "onContainerTouchMove", "touchmove", function(a10) {
                    f14[a10.pointerId] = {
                        pageX: a10.pageX,
                        pageY: a10.pageY
                    };
                    f14[a10.pointerId].target || (f14[a10.pointerId].target = a10.currentTarget);
                });
            };
            k14.prototype.onDocumentPointerUp = function(a9) {
                z(a9, "onDocumentTouchEnd", "touchend", function(a10) {
                    delete f14[a10.pointerId];
                });
            };
            k14.prototype.setDOMEvents = function() {
                e14.prototype.setDOMEvents.call(this);
                (this.hasZoom || this.followTouchMove) && this.batchMSEvents(g2);
            };
            return k14;
        })(w);
    });
    M(a3, "Core/Legend/Legend.js", [
        a3["Core/Animation/AnimationUtilities.js"],
        a3["Core/FormatUtilities.js"],
        a3["Core/Globals.js"],
        a3["Core/Series/Point.js"],
        a3["Core/Renderer/RendererUtilities.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w, C, E, z, x) {
        var r2 = a1.animObject, u2 = a1.setAnimation, n2 = w.format;
        a1 = C.isFirefox;
        var m7 = C.marginNames;
        C = C.win;
        var g2 = z.distribute, c3 = x.addEvent, e5 = x.createElement, l7 = x.css, f14 = x.defined, v4 = x.discardElement, q3 = x.find, k14 = x.fireEvent, I = x.isNumber, D2 = x.merge, B2 = x.pick, O = x.relativeLength, t4 = x.stableSort, h9 = x.syncTimeout;
        z = x.wrap;
        x = (function() {
            function a9(a10, d3) {
                this.allItems = [];
                this.contentGroup = this.box = void 0;
                this.display = !1;
                this.group = void 0;
                this.offsetWidth = this.maxLegendWidth = this.maxItemWidth = this.legendWidth = this.legendHeight = this.lastLineHeight = this.lastItemY = this.itemY = this.itemX = this.itemMarginTop = this.itemMarginBottom = this.itemHeight = this.initialItemY = 0;
                this.options = {
                };
                this.padding = 0;
                this.pages = [];
                this.proximate = !1;
                this.scrollGroup = void 0;
                this.widthOption = this.totalItemWidth = this.titleHeight = this.symbolWidth = this.symbolHeight = 0;
                this.chart = a10;
                this.init(a10, d3);
            }
            a9.prototype.init = function(a10, d3) {
                this.chart = a10;
                this.setOptions(d3);
                d3.enabled && (this.render(), c3(this.chart, "endResize", function() {
                    this.legend.positionCheckboxes();
                }), this.proximate ? this.unchartrender = c3(this.chart, "render", function() {
                    this.legend.proximatePositions();
                    this.legend.positionItems();
                }) : this.unchartrender && this.unchartrender());
            };
            a9.prototype.setOptions = function(a10) {
                var b5 = B2(a10.padding, 8);
                this.options = a10;
                this.chart.styledMode || (this.itemStyle = a10.itemStyle, this.itemHiddenStyle = D2(this.itemStyle, a10.itemHiddenStyle));
                this.itemMarginTop = a10.itemMarginTop || 0;
                this.itemMarginBottom = a10.itemMarginBottom || 0;
                this.padding = b5;
                this.initialItemY = b5 - 5;
                this.symbolWidth = B2(a10.symbolWidth, 16);
                this.pages = [];
                this.proximate = "proximate" === a10.layout && !this.chart.inverted;
                this.baseline = void 0;
            };
            a9.prototype.update = function(a10, d3) {
                var b5 = this.chart;
                this.setOptions(D2(!0, this.options, a10));
                this.destroy();
                b5.isDirtyLegend = b5.isDirtyBox = !0;
                B2(d3, !0) && b5.redraw();
                k14(this, "afterUpdate");
            };
            a9.prototype.colorizeItem = function(a10, d3) {
                a10.legendGroup[d3 ? "removeClass" : "addClass"]("highcharts-legend-item-hidden");
                if (!this.chart.styledMode) {
                    var b5 = this.options, c10 = a10.legendItem, e14 = a10.legendLine, h10 = a10.legendSymbol, f20 = this.itemHiddenStyle.color;
                    b5 = d3 ? b5.itemStyle.color : f20;
                    var g9 = d3 ? a10.color || f20 : f20, l10 = a10.options && a10.options.marker, p5 = {
                        fill: g9
                    };
                    c10 && c10.css({
                        fill: b5,
                        color: b5
                    });
                    e14 && e14.attr({
                        stroke: g9
                    });
                    h10 && (l10 && h10.isMarker && (p5 = a10.pointAttribs(), d3 || (p5.stroke = p5.fill = f20)), h10.attr(p5));
                }
                k14(this, "afterColorizeItem", {
                    item: a10,
                    visible: d3
                });
            };
            a9.prototype.positionItems = function() {
                this.allItems.forEach(this.positionItem, this);
                this.chart.isResizing || this.positionCheckboxes();
            };
            a9.prototype.positionItem = function(a10) {
                var b6 = this, d3 = this.options, c12 = d3.symbolPadding, e15 = !d3.rtl, h11 = a10._legendItemPos;
                d3 = h11[0];
                h11 = h11[1];
                var g10 = a10.checkbox, l11 = a10.legendGroup;
                l11 && l11.element && (c12 = {
                    translateX: e15 ? d3 : this.legendWidth - d3 - 2 * c12 - 4,
                    translateY: h11
                }, e15 = function() {
                    k14(b6, "afterPositionItem", {
                        item: a10
                    });
                }, f14(l11.translateY) ? l11.animate(c12, void 0, e15) : (l11.attr(c12), e15()));
                g10 && (g10.x = d3, g10.y = h11);
            };
            a9.prototype.destroyItem = function(a10) {
                var b6 = a10.checkbox;
                [
                    "legendItem",
                    "legendLine",
                    "legendSymbol",
                    "legendGroup"
                ].forEach(function(b7) {
                    a10[b7] && (a10[b7] = a10[b7].destroy());
                });
                b6 && v4(a10.checkbox);
            };
            a9.prototype.destroy = function() {
                function a10(a12) {
                    this[a12] && (this[a12] = this[a12].destroy());
                }
                this.getAllItems().forEach(function(b6) {
                    [
                        "legendItem",
                        "legendGroup"
                    ].forEach(a10, b6);
                });
                "clipRect up down pager nav box title group".split(" ").forEach(a10, this);
                this.display = null;
            };
            a9.prototype.positionCheckboxes = function() {
                var a10 = this.group && this.group.alignAttr, d3 = this.clipHeight || this.legendHeight, c12 = this.titleHeight;
                if (a10) {
                    var e15 = a10.translateY;
                    this.allItems.forEach(function(b6) {
                        var h11 = b6.checkbox;
                        if (h11) {
                            var f22 = e15 + c12 + h11.y + (this.scrollOffset || 0) + 3;
                            l7(h11, {
                                left: a10.translateX + b6.checkboxOffset + h11.x - 20 + "px",
                                top: f22 + "px",
                                display: this.proximate || f22 > e15 - 6 && f22 < e15 + d3 - 6 ? "" : "none"
                            });
                        }
                    }, this);
                }
            };
            a9.prototype.renderTitle = function() {
                var a10 = this.options, d3 = this.padding, c12 = a10.title, e16 = 0;
                c12.text && (this.title || (this.title = this.chart.renderer.label(c12.text, d3 - 3, d3 - 4, null, null, null, a10.useHTML, null, "legend-title").attr({
                    zIndex: 1
                }), this.chart.styledMode || this.title.css(c12.style), this.title.add(this.group)), c12.width || this.title.css({
                    width: this.maxLegendWidth + "px"
                }), a10 = this.title.getBBox(), e16 = a10.height, this.offsetWidth = a10.width, this.contentGroup.attr({
                    translateY: e16
                }));
                this.titleHeight = e16;
            };
            a9.prototype.setText = function(a10) {
                var b6 = this.options;
                a10.legendItem.attr({
                    text: b6.labelFormat ? n2(b6.labelFormat, a10, this.chart) : b6.labelFormatter.call(a10)
                });
            };
            a9.prototype.renderItem = function(a10) {
                var b6 = this.chart, d3 = b6.renderer, c12 = this.options, e16 = this.symbolWidth, h11 = c12.symbolPadding || 0, f23 = this.itemStyle, g10 = this.itemHiddenStyle, k17 = "horizontal" === c12.layout ? B2(c12.itemDistance, 20) : 0, l11 = !c12.rtl, m10 = !a10.series, n8 = !m10 && a10.series.drawLegendSymbol ? a10.series : a10, q5 = n8.options, t5 = this.createCheckboxForItem && q5 && q5.showCheckbox, v6 = c12.useHTML, r7 = a10.options.className, I1 = a10.legendItem;
                q5 = e16 + h11 + k17 + (t5 ? 20 : 0);
                I1 || (a10.legendGroup = d3.g("legend-item").addClass("highcharts-" + n8.type + "-series highcharts-color-" + a10.colorIndex + (r7 ? " " + r7 : "") + (m10 ? " highcharts-series-" + a10.index : "")).attr({
                    zIndex: 1
                }).add(this.scrollGroup), a10.legendItem = I1 = d3.text("", l11 ? e16 + h11 : -h11, this.baseline || 0, v6), b6.styledMode || I1.css(D2(a10.visible ? f23 : g10)), I1.attr({
                    align: l11 ? "left" : "right",
                    zIndex: 2
                }).add(a10.legendGroup), this.baseline || (this.fontMetrics = d3.fontMetrics(b6.styledMode ? 12 : f23.fontSize, I1), this.baseline = this.fontMetrics.f + 3 + this.itemMarginTop, I1.attr("y", this.baseline), this.symbolHeight = c12.symbolHeight || this.fontMetrics.f, c12.squareSymbol && (this.symbolWidth = B2(c12.symbolWidth, Math.max(this.symbolHeight, 16)), q5 = this.symbolWidth + h11 + k17 + (t5 ? 20 : 0), l11 && I1.attr("x", this.symbolWidth + h11))), n8.drawLegendSymbol(this, a10), this.setItemEvents && this.setItemEvents(a10, I1, v6));
                t5 && !a10.checkbox && this.createCheckboxForItem && this.createCheckboxForItem(a10);
                this.colorizeItem(a10, a10.visible);
                !b6.styledMode && f23.width || I1.css({
                    width: (c12.itemWidth || this.widthOption || b6.spacingBox.width) - q5 + "px"
                });
                this.setText(a10);
                b6 = I1.getBBox();
                a10.itemWidth = a10.checkboxOffset = c12.itemWidth || a10.legendItemWidth || b6.width + q5;
                this.maxItemWidth = Math.max(this.maxItemWidth, a10.itemWidth);
                this.totalItemWidth += a10.itemWidth;
                this.itemHeight = a10.itemHeight = Math.round(a10.legendItemHeight || b6.height || this.symbolHeight);
            };
            a9.prototype.layoutItem = function(a10) {
                var b6 = this.options, d3 = this.padding, c12 = "horizontal" === b6.layout, e16 = a10.itemHeight, h11 = this.itemMarginBottom, f23 = this.itemMarginTop, g10 = c12 ? B2(b6.itemDistance, 20) : 0, k17 = this.maxLegendWidth;
                b6 = b6.alignColumns && this.totalItemWidth > k17 ? this.maxItemWidth : a10.itemWidth;
                c12 && this.itemX - d3 + b6 > k17 && (this.itemX = d3, this.lastLineHeight && (this.itemY += f23 + this.lastLineHeight + h11), this.lastLineHeight = 0);
                this.lastItemY = f23 + this.itemY + h11;
                this.lastLineHeight = Math.max(e16, this.lastLineHeight);
                a10._legendItemPos = [
                    this.itemX,
                    this.itemY
                ];
                c12 ? this.itemX += b6 : (this.itemY += f23 + e16 + h11, this.lastLineHeight = e16);
                this.offsetWidth = this.widthOption || Math.max((c12 ? this.itemX - d3 - (a10.checkbox ? 0 : g10) : b6) + d3, this.offsetWidth);
            };
            a9.prototype.getAllItems = function() {
                var a10 = [];
                this.chart.series.forEach(function(b6) {
                    var d3 = b6 && b6.options;
                    b6 && B2(d3.showInLegend, f14(d3.linkedTo) ? !1 : void 0, !0) && (a10 = a10.concat(b6.legendItems || ("point" === d3.legendType ? b6.data : b6)));
                });
                k14(this, "afterGetAllItems", {
                    allItems: a10
                });
                return a10;
            };
            a9.prototype.getAlignment = function() {
                var a10 = this.options;
                return this.proximate ? a10.align.charAt(0) + "tv" : a10.floating ? "" : a10.align.charAt(0) + a10.verticalAlign.charAt(0) + a10.layout.charAt(0);
            };
            a9.prototype.adjustMargins = function(a10, d3) {
                var b6 = this.chart, c12 = this.options, e16 = this.getAlignment();
                e16 && [
                    /(lth|ct|rth)/,
                    /(rtv|rm|rbv)/,
                    /(rbh|cb|lbh)/,
                    /(lbv|lm|ltv)/
                ].forEach(function(h11, g10) {
                    h11.test(e16) && !f14(a10[g10]) && (b6[m7[g10]] = Math.max(b6[m7[g10]], b6.legend[(g10 + 1) % 2 ? "legendHeight" : "legendWidth"] + [
                        1,
                        -1,
                        -1,
                        1
                    ][g10] * c12[g10 % 2 ? "x" : "y"] + B2(c12.margin, 12) + d3[g10] + (b6.titleOffset[g10] || 0)));
                });
            };
            a9.prototype.proximatePositions = function() {
                var a10 = this.chart, d3 = [], c12 = "left" === this.options.align;
                this.allItems.forEach(function(b6) {
                    var e16;
                    var h11 = c12;
                    if (b6.yAxis) {
                        b6.xAxis.options.reversed && (h11 = !h11);
                        b6.points && (e16 = q3(h11 ? b6.points : b6.points.slice(0).reverse(), function(a12) {
                            return I(a12.plotY);
                        }));
                        h11 = this.itemMarginTop + b6.legendItem.getBBox().height + this.itemMarginBottom;
                        var f23 = b6.yAxis.top - a10.plotTop;
                        b6.visible ? (e16 = e16 ? e16.plotY : b6.yAxis.height, e16 += f23 - 0.3 * h11) : e16 = f23 + b6.yAxis.height;
                        d3.push({
                            target: e16,
                            size: h11,
                            item: b6
                        });
                    }
                }, this);
                g2(d3, a10.plotHeight).forEach(function(b6) {
                    b6.item._legendItemPos && (b6.item._legendItemPos[1] = a10.plotTop - a10.spacing[0] + b6.pos);
                });
            };
            a9.prototype.render = function() {
                var a10 = this.chart, d3 = a10.renderer, c12 = this.options, e16 = this.padding, h11 = this.getAllItems(), f24 = this.group, g10 = this.box;
                this.itemX = e16;
                this.itemY = this.initialItemY;
                this.lastItemY = this.offsetWidth = 0;
                this.widthOption = O(c12.width, a10.spacingBox.width - e16);
                var l11 = a10.spacingBox.width - 2 * e16 - c12.x;
                -1 < [
                    "rm",
                    "lm"
                ].indexOf(this.getAlignment().substring(0, 2)) && (l11 /= 2);
                this.maxLegendWidth = this.widthOption || l11;
                f24 || (this.group = f24 = d3.g("legend").addClass(c12.className || "").attr({
                    zIndex: 7
                }).add(), this.contentGroup = d3.g().attr({
                    zIndex: 1
                }).add(f24), this.scrollGroup = d3.g().add(this.contentGroup));
                this.renderTitle();
                t4(h11, function(a12, b6) {
                    return (a12.options && a12.options.legendIndex || 0) - (b6.options && b6.options.legendIndex || 0);
                });
                c12.reversed && h11.reverse();
                this.allItems = h11;
                this.display = l11 = !!h11.length;
                this.itemHeight = this.totalItemWidth = this.maxItemWidth = this.lastLineHeight = 0;
                h11.forEach(this.renderItem, this);
                h11.forEach(this.layoutItem, this);
                h11 = (this.widthOption || this.offsetWidth) + e16;
                var m10 = this.lastItemY + this.lastLineHeight + this.titleHeight;
                m10 = this.handleOverflow(m10);
                m10 += e16;
                g10 || (this.box = g10 = d3.rect().addClass("highcharts-legend-box").attr({
                    r: c12.borderRadius
                }).add(f24), g10.isNew = !0);
                a10.styledMode || g10.attr({
                    stroke: c12.borderColor,
                    "stroke-width": c12.borderWidth || 0,
                    fill: c12.backgroundColor || "none"
                }).shadow(c12.shadow);
                0 < h11 && 0 < m10 && (g10[g10.isNew ? "attr" : "animate"](g10.crisp.call({
                }, {
                    x: 0,
                    y: 0,
                    width: h11,
                    height: m10
                }, g10.strokeWidth())), g10.isNew = !1);
                g10[l11 ? "show" : "hide"]();
                a10.styledMode && "none" === f24.getStyle("display") && (h11 = m10 = 0);
                this.legendWidth = h11;
                this.legendHeight = m10;
                l11 && this.align();
                this.proximate || this.positionItems();
                k14(this, "afterRender");
            };
            a9.prototype.align = function(a10) {
                (void 0) === a10 && (a10 = this.chart.spacingBox);
                var b6 = this.chart, d3 = this.options, c12 = a10.y;
                /(lth|ct|rth)/.test(this.getAlignment()) && 0 < b6.titleOffset[0] ? c12 += b6.titleOffset[0] : /(lbh|cb|rbh)/.test(this.getAlignment()) && 0 < b6.titleOffset[2] && (c12 -= b6.titleOffset[2]);
                c12 !== a10.y && (a10 = D2(a10, {
                    y: c12
                }));
                this.group.align(D2(d3, {
                    width: this.legendWidth,
                    height: this.legendHeight,
                    verticalAlign: this.proximate ? "top" : d3.verticalAlign
                }), !0, a10);
            };
            a9.prototype.handleOverflow = function(a10) {
                var b6 = this, d3 = this.chart, c12 = d3.renderer, e16 = this.options, h11 = e16.y, f24 = "top" === e16.verticalAlign, g10 = this.padding, k17 = e16.maxHeight, l11 = e16.navigation, m10 = B2(l11.animation, !0), n8 = l11.arrowSize || 12, q5 = this.pages, t5 = this.allItems, v6 = function(a12) {
                    "number" === typeof a12 ? N.attr({
                        height: a12
                    }) : N && (b6.clipRect = N.destroy(), b6.contentGroup.clip());
                    b6.contentGroup.div && (b6.contentGroup.div.style.clip = a12 ? "rect(" + g10 + "px,9999px," + (g10 + a12) + "px,0)" : "auto");
                }, r7 = function(a12) {
                    b6[a12] = c12.circle(0, 0, 1.3 * n8).translate(n8 / 2, n8 / 2).add(U);
                    d3.styledMode || b6[a12].attr("fill", "rgba(0,0,0,0.0001)");
                    return b6[a12];
                }, I1, A;
                h11 = d3.spacingBox.height + (f24 ? -h11 : h11) - g10;
                var U = this.nav, N = this.clipRect;
                "horizontal" !== e16.layout || "middle" === e16.verticalAlign || e16.floating || (h11 /= 2);
                k17 && (h11 = Math.min(h11, k17));
                q5.length = 0;
                a10 && 0 < h11 && a10 > h11 && !1 !== l11.enabled ? (this.clipHeight = I1 = Math.max(h11 - 20 - this.titleHeight - g10, 0), this.currentPage = B2(this.currentPage, 1), this.fullHeight = a10, t5.forEach(function(a12, b7) {
                    var d4 = a12._legendItemPos[1], c13 = Math.round(a12.legendItem.getBBox().height), e17 = q5.length;
                    if (!e17 || d4 - q5[e17 - 1] > I1 && (A || d4) !== q5[e17 - 1]) q5.push(A || d4), e17++;
                    a12.pageIx = e17 - 1;
                    A && (t5[b7 - 1].pageIx = e17 - 1);
                    b7 === t5.length - 1 && d4 + c13 - q5[e17 - 1] > I1 && d4 !== A && (q5.push(d4), a12.pageIx = e17);
                    d4 !== A && (A = d4);
                }), N || (N = b6.clipRect = c12.clipRect(0, g10, 9999, 0), b6.contentGroup.clip(N)), v6(I1), U || (this.nav = U = c12.g().attr({
                    zIndex: 1
                }).add(this.group), this.up = c12.symbol("triangle", 0, 0, n8, n8).add(U), r7("upTracker").on("click", function() {
                    b6.scroll(-1, m10);
                }), this.pager = c12.text("", 15, 10).addClass("highcharts-legend-navigation"), d3.styledMode || this.pager.css(l11.style), this.pager.add(U), this.down = c12.symbol("triangle-down", 0, 0, n8, n8).add(U), r7("downTracker").on("click", function() {
                    b6.scroll(1, m10);
                })), b6.scroll(0), a10 = h11) : U && (v6(), this.nav = U.destroy(), this.scrollGroup.attr({
                    translateY: 1
                }), this.clipHeight = 0);
                return a10;
            };
            a9.prototype.scroll = function(a10, d3) {
                var b6 = this, c12 = this.chart, e16 = this.pages, f24 = e16.length, g10 = this.clipHeight, l11 = this.options.navigation, m10 = this.pager, p6 = this.padding, n8 = this.currentPage + a10;
                n8 > f24 && (n8 = f24);
                0 < n8 && ("undefined" !== typeof d3 && u2(d3, c12), this.nav.attr({
                    translateX: p6,
                    translateY: g10 + this.padding + 7 + this.titleHeight,
                    visibility: "visible"
                }), [
                    this.up,
                    this.upTracker
                ].forEach(function(a12) {
                    a12.attr({
                        "class": 1 === n8 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                    });
                }), m10.attr({
                    text: n8 + "/" + f24
                }), [
                    this.down,
                    this.downTracker
                ].forEach(function(a12) {
                    a12.attr({
                        x: 18 + this.pager.getBBox().width,
                        "class": n8 === f24 ? "highcharts-legend-nav-inactive" : "highcharts-legend-nav-active"
                    });
                }, this), c12.styledMode || (this.up.attr({
                    fill: 1 === n8 ? l11.inactiveColor : l11.activeColor
                }), this.upTracker.css({
                    cursor: 1 === n8 ? "default" : "pointer"
                }), this.down.attr({
                    fill: n8 === f24 ? l11.inactiveColor : l11.activeColor
                }), this.downTracker.css({
                    cursor: n8 === f24 ? "default" : "pointer"
                })), this.scrollOffset = -e16[n8 - 1] + this.initialItemY, this.scrollGroup.animate({
                    translateY: this.scrollOffset
                }), this.currentPage = n8, this.positionCheckboxes(), a10 = r2(B2(d3, c12.renderer.globalAnimation, !0)), h9(function() {
                    k14(b6, "afterScroll", {
                        currentPage: n8
                    });
                }, a10.duration));
            };
            a9.prototype.setItemEvents = function(a10, d3, c12) {
                var b6 = this, e16 = b6.chart.renderer.boxWrapper, h11 = a10 instanceof E, f24 = "highcharts-legend-" + (h11 ? "point" : "series") + "-active", g10 = b6.chart.styledMode, l11 = function(d4) {
                    b6.allItems.forEach(function(b7) {
                        a10 !== b7 && [
                            b7
                        ].concat(b7.linkedSeries || []).forEach(function(a12) {
                            a12.setState(d4, !h11);
                        });
                    });
                };
                (c12 ? [
                    d3,
                    a10.legendSymbol
                ] : [
                    a10.legendGroup
                ]).forEach(function(c13) {
                    if (c13) c13.on("mouseover", function() {
                        a10.visible && l11("inactive");
                        a10.setState("hover");
                        a10.visible && e16.addClass(f24);
                        g10 || d3.css(b6.options.itemHoverStyle);
                    }).on("mouseout", function() {
                        b6.chart.styledMode || d3.css(D2(a10.visible ? b6.itemStyle : b6.itemHiddenStyle));
                        l11("");
                        e16.removeClass(f24);
                        a10.setState();
                    }).on("click", function(b7) {
                        var d4 = function() {
                            a10.setVisible && a10.setVisible();
                            l11(a10.visible ? "inactive" : "");
                        };
                        e16.removeClass(f24);
                        b7 = {
                            browserEvent: b7
                        };
                        a10.firePointEvent ? a10.firePointEvent("legendItemClick", b7, d4) : k14(a10, "legendItemClick", b7, d4);
                    });
                });
            };
            a9.prototype.createCheckboxForItem = function(a10) {
                a10.checkbox = e5("input", {
                    type: "checkbox",
                    className: "highcharts-legend-checkbox",
                    checked: a10.selected,
                    defaultChecked: a10.selected
                }, this.options.itemCheckboxStyle, this.chart.container);
                c3(a10.checkbox, "click", function(b6) {
                    k14(a10.series || a10, "checkboxClick", {
                        checked: b6.target.checked,
                        item: a10
                    }, function() {
                        a10.select();
                    });
                });
            };
            return a9;
        })();
        (/Trident\/7\.0/.test(C.navigator && C.navigator.userAgent) || a1) && z(x.prototype, "positionItem", function(a9, b6) {
            var d3 = this, c12 = function() {
                b6._legendItemPos && a9.call(d3, b6);
            };
            c12();
            d3.bubbleLegend || setTimeout(c12);
        });
        return x;
    });
    M(a3, "Core/Series/SeriesRegistry.js", [
        a3["Core/Globals.js"],
        a3["Core/DefaultOptions.js"],
        a3["Core/Series/Point.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w, C, E) {
        var r2 = w.defaultOptions, x = E.error, J = E.extendClass, u2 = E.merge, n2;
        (function(m7) {
            function g2(a9, e5) {
                var c3 = r2.plotOptions || {
                }, f14 = e5.defaultOptions;
                e5.prototype.pointClass || (e5.prototype.pointClass = C);
                e5.prototype.type = a9;
                f14 && (c3[a9] = f14);
                m7.seriesTypes[a9] = e5;
            }
            m7.seriesTypes = a1.seriesTypes;
            m7.getSeries = function(a9, e5) {
                (void 0) === e5 && (e5 = {
                });
                var c3 = a9.options.chart;
                c3 = e5.type || c3.type || c3.defaultSeriesType || "";
                var f14 = m7.seriesTypes[c3];
                m7 || x(17, !0, a9, {
                    missingModuleFor: c3
                });
                c3 = new f14;
                "function" === typeof c3.init && c3.init(a9, e5);
                return c3;
            };
            m7.registerSeriesType = g2;
            m7.seriesType = function(a9, e5, l7, f14, n8) {
                var c3 = r2.plotOptions || {
                };
                e5 = e5 || "";
                c3[a9] = u2(c3[e5], l7);
                g2(a9, J(m7.seriesTypes[e5] || function() {
                }, f14));
                m7.seriesTypes[a9].prototype.type = a9;
                n8 && (m7.seriesTypes[a9].prototype.pointClass = J(C, n8));
                return m7.seriesTypes[a9];
            };
        })(n2 || (n2 = {
        }));
        return n2;
    });
    M(a3, "Core/Chart/Chart.js", [
        a3["Core/Animation/AnimationUtilities.js"],
        a3["Core/Axis/Axis.js"],
        a3["Core/FormatUtilities.js"],
        a3["Core/Foundation.js"],
        a3["Core/Globals.js"],
        a3["Core/Legend/Legend.js"],
        a3["Core/MSPointer.js"],
        a3["Core/DefaultOptions.js"],
        a3["Core/Color/Palette.js"],
        a3["Core/Pointer.js"],
        a3["Core/Renderer/RendererRegistry.js"],
        a3["Core/Series/SeriesRegistry.js"],
        a3["Core/Renderer/SVG/SVGRenderer.js"],
        a3["Core/Time.js"],
        a3["Core/Utilities.js"],
        a3["Core/Renderer/HTML/AST.js"]
    ], function(a1, w, C, E, z, x, J, u2, n2, m7, g2, c3, e5, l7, f14, v4) {
        var q3 = a1.animate, k14 = a1.animObject, r2 = a1.setAnimation, D2 = C.numberFormat, B2 = E.registerEventOptions, O = z.charts, t4 = z.doc, h9 = z.marginNames, d3 = z.svg, b6 = z.win, p6 = u2.defaultOptions, G6 = u2.defaultTime, y = c3.seriesTypes, L4 = f14.addEvent, F6 = f14.attr, P2 = f14.cleanRecursively, S = f14.createElement, Q = f14.css, V = f14.defined, fa = f14.discardElement, H = f14.erase, K = f14.error, M1 = f14.extend, ha = f14.find, R = f14.fireEvent, Z = f14.getStyle, A = f14.isArray, U = f14.isNumber, N = f14.isObject, W = f14.isString, X = f14.merge, Y = f14.objectEach, T = f14.pick, da = f14.pInt, ka = f14.relativeLength, ja = f14.removeEvent, ba = f14.splat, ea = f14.syncTimeout, ma = f14.uniqueKey;
        a1 = (function() {
            function a9(a10, b7, d4) {
                this.series = this.renderTo = this.renderer = this.pointer = this.pointCount = this.plotWidth = this.plotTop = this.plotLeft = this.plotHeight = this.plotBox = this.options = this.numberFormatter = this.margin = this.legend = this.labelCollectors = this.isResizing = this.index = this.eventOptions = this.container = this.colorCounter = this.clipBox = this.chartWidth = this.chartHeight = this.bounds = this.axisOffset = this.axes = void 0;
                this.sharedClips = {
                };
                this.yAxis = this.xAxis = this.userOptions = this.titleOffset = this.time = this.symbolCounter = this.spacingBox = this.spacing = void 0;
                this.getArgs(a10, b7, d4);
            }
            a9.chart = function(b7, d4, c12) {
                return new a9(b7, d4, c12);
            };
            a9.prototype.getArgs = function(a10, b7, d4) {
                W(a10) || a10.nodeName ? (this.renderTo = a10, this.init(b7, d4)) : this.init(a10, b7);
            };
            a9.prototype.init = function(a10, b7) {
                var d4 = a10.plotOptions || {
                };
                R(this, "init", {
                    args: arguments
                }, function() {
                    var c12 = X(p6, a10), e16 = c12.chart;
                    Y(c12.plotOptions, function(a12, b8) {
                        N(a12) && (a12.tooltip = d4[b8] && X(d4[b8].tooltip) || void 0);
                    });
                    c12.tooltip.userOptions = a10.chart && a10.chart.forExport && a10.tooltip.userOptions || a10.tooltip;
                    this.userOptions = a10;
                    this.margin = [];
                    this.spacing = [];
                    this.bounds = {
                        h: {
                        },
                        v: {
                        }
                    };
                    this.labelCollectors = [];
                    this.callback = b7;
                    this.isResizing = 0;
                    this.options = c12;
                    this.axes = [];
                    this.series = [];
                    this.time = a10.time && Object.keys(a10.time).length ? new l7(a10.time) : z.time;
                    this.numberFormatter = e16.numberFormatter || D2;
                    this.styledMode = e16.styledMode;
                    this.hasCartesianSeries = e16.showAxes;
                    this.index = O.length;
                    O.push(this);
                    z.chartCount++;
                    B2(this, e16);
                    this.xAxis = [];
                    this.yAxis = [];
                    this.pointCount = this.colorCounter = this.symbolCounter = 0;
                    R(this, "afterInit");
                    this.firstRender();
                });
            };
            a9.prototype.initSeries = function(a10) {
                var b7 = this.options.chart;
                b7 = a10.type || b7.type || b7.defaultSeriesType;
                var d4 = y[b7];
                d4 || K(17, !0, this, {
                    missingModuleFor: b7
                });
                b7 = new d4;
                "function" === typeof b7.init && b7.init(this, a10);
                return b7;
            };
            a9.prototype.setSeriesData = function() {
                this.getSeriesOrderByLinks().forEach(function(a10) {
                    a10.points || a10.data || !a10.enabledDataSorting || a10.setData(a10.options.data, !1);
                });
            };
            a9.prototype.getSeriesOrderByLinks = function() {
                return this.series.concat().sort(function(a10, b7) {
                    return a10.linkedSeries.length || b7.linkedSeries.length ? b7.linkedSeries.length - a10.linkedSeries.length : 0;
                });
            };
            a9.prototype.orderSeries = function(a10) {
                var b7 = this.series;
                a10 = a10 || 0;
                for(var d4 = b7.length; a10 < d4; ++a10)b7[a10] && (b7[a10].index = a10, b7[a10].name = b7[a10].getName());
            };
            a9.prototype.isInsidePlot = function(a10, b7, d4) {
                (void 0) === d4 && (d4 = {
                });
                var c12 = this.inverted, e16 = this.plotBox, h11 = this.plotLeft, f24 = this.plotTop, g10 = this.scrollablePlotBox, k17 = 0;
                var l11 = 0;
                d4.visiblePlotOnly && this.scrollingContainer && (l11 = this.scrollingContainer, k17 = l11.scrollLeft, l11 = l11.scrollTop);
                var m10 = d4.series;
                e16 = d4.visiblePlotOnly && g10 || e16;
                g10 = d4.inverted ? b7 : a10;
                b7 = d4.inverted ? a10 : b7;
                a10 = {
                    x: g10,
                    y: b7,
                    isInsidePlot: !0
                };
                if (!d4.ignoreX) {
                    var A1 = m10 && (c12 ? m10.yAxis : m10.xAxis) || {
                        pos: h11,
                        len: Infinity
                    };
                    g10 = d4.paneCoordinates ? A1.pos + g10 : h11 + g10;
                    g10 >= Math.max(k17 + h11, A1.pos) && g10 <= Math.min(k17 + h11 + e16.width, A1.pos + A1.len) || (a10.isInsidePlot = !1);
                }
                !d4.ignoreY && a10.isInsidePlot && (c12 = m10 && (c12 ? m10.xAxis : m10.yAxis) || {
                    pos: f24,
                    len: Infinity
                }, d4 = d4.paneCoordinates ? c12.pos + b7 : f24 + b7, d4 >= Math.max(l11 + f24, c12.pos) && d4 <= Math.min(l11 + f24 + e16.height, c12.pos + c12.len) || (a10.isInsidePlot = !1));
                R(this, "afterIsInsidePlot", a10);
                return a10.isInsidePlot;
            };
            a9.prototype.redraw = function(a10) {
                R(this, "beforeRedraw");
                var b7 = this.hasCartesianSeries ? this.axes : this.colorAxis || [], d4 = this.series, c12 = this.pointer, e16 = this.legend, h11 = this.userOptions.legend, f24 = this.renderer, g10 = f24.isHidden(), k17 = [], l11 = this.isDirtyBox, m10 = this.isDirtyLegend;
                this.setResponsive && this.setResponsive(!1);
                r2(this.hasRendered ? a10 : !1, this);
                g10 && this.temporaryDisplay();
                this.layOutTitles();
                for(a10 = d4.length; a10--;){
                    var A2 = d4[a10];
                    if (A2.options.stacking || A2.options.centerInCategory) {
                        var p7 = !0;
                        if (A2.isDirty) {
                            var n8 = !0;
                            break;
                        }
                    }
                }
                if (n8) for(a10 = d4.length; a10--;)A2 = d4[a10], A2.options.stacking && (A2.isDirty = !0);
                d4.forEach(function(a12) {
                    a12.isDirty && ("point" === a12.options.legendType ? ("function" === typeof a12.updateTotals && a12.updateTotals(), m10 = !0) : h11 && (h11.labelFormatter || h11.labelFormat) && (m10 = !0));
                    a12.isDirtyData && R(a12, "updatedData");
                });
                m10 && e16 && e16.options.enabled && (e16.render(), this.isDirtyLegend = !1);
                p7 && this.getStacks();
                b7.forEach(function(a12) {
                    a12.updateNames();
                    a12.setScale();
                });
                this.getMargins();
                b7.forEach(function(a12) {
                    a12.isDirty && (l11 = !0);
                });
                b7.forEach(function(a12) {
                    var b8 = a12.min + "," + a12.max;
                    a12.extKey !== b8 && (a12.extKey = b8, k17.push(function() {
                        R(a12, "afterSetExtremes", M1(a12.eventArgs, a12.getExtremes()));
                        delete a12.eventArgs;
                    }));
                    (l11 || p7) && a12.redraw();
                });
                l11 && this.drawChartBox();
                R(this, "predraw");
                d4.forEach(function(a12) {
                    (l11 || a12.isDirty) && a12.visible && a12.redraw();
                    a12.isDirtyData = !1;
                });
                c12 && c12.reset(!0);
                f24.draw();
                R(this, "redraw");
                R(this, "render");
                g10 && this.temporaryDisplay(!0);
                k17.forEach(function(a12) {
                    a12.call();
                });
            };
            a9.prototype.get = function(a10) {
                function b7(b8) {
                    return b8.id === a10 || b8.options && b8.options.id === a10;
                }
                for(var d4 = this.series, c12 = ha(this.axes, b7) || ha(this.series, b7), e16 = 0; !c12 && e16 < d4.length; e16++)c12 = ha(d4[e16].points || [], b7);
                return c12;
            };
            a9.prototype.getAxes = function() {
                var a10 = this, b7 = this.options, d4 = b7.xAxis = ba(b7.xAxis || {
                });
                b7 = b7.yAxis = ba(b7.yAxis || {
                });
                R(this, "getAxes");
                d4.forEach(function(a12, b8) {
                    a12.index = b8;
                    a12.isX = !0;
                });
                b7.forEach(function(a12, b8) {
                    a12.index = b8;
                });
                d4.concat(b7).forEach(function(b8) {
                    new w(a10, b8);
                });
                R(this, "afterGetAxes");
            };
            a9.prototype.getSelectedPoints = function() {
                return this.series.reduce(function(a10, b7) {
                    b7.getPointsCollection().forEach(function(b8) {
                        T(b8.selectedStaging, b8.selected) && a10.push(b8);
                    });
                    return a10;
                }, []);
            };
            a9.prototype.getSelectedSeries = function() {
                return this.series.filter(function(a10) {
                    return a10.selected;
                });
            };
            a9.prototype.setTitle = function(a10, b7, d4) {
                this.applyDescription("title", a10);
                this.applyDescription("subtitle", b7);
                this.applyDescription("caption", void 0);
                this.layOutTitles(d4);
            };
            a9.prototype.applyDescription = function(a10, b7) {
                var d4 = this, c12 = "title" === a10 ? {
                    color: n2.neutralColor80,
                    fontSize: this.options.isStock ? "16px" : "18px"
                } : {
                    color: n2.neutralColor60
                };
                c12 = this.options[a10] = X(!this.styledMode && {
                    style: c12
                }, this.options[a10], b7);
                var e16 = this[a10];
                e16 && b7 && (this[a10] = e16 = e16.destroy());
                c12 && !e16 && (e16 = this.renderer.text(c12.text, 0, 0, c12.useHTML).attr({
                    align: c12.align,
                    "class": "highcharts-" + a10,
                    zIndex: c12.zIndex || 4
                }).add(), e16.update = function(b8) {
                    d4[({
                        title: "setTitle",
                        subtitle: "setSubtitle",
                        caption: "setCaption"
                    })[a10]](b8);
                }, this.styledMode || e16.css(c12.style), this[a10] = e16);
            };
            a9.prototype.layOutTitles = function(a10) {
                var b7 = [
                    0,
                    0,
                    0
                ], d4 = this.renderer, c12 = this.spacingBox;
                [
                    "title",
                    "subtitle",
                    "caption"
                ].forEach(function(a12) {
                    var e16 = this[a12], h11 = this.options[a12], f24 = h11.verticalAlign || "top";
                    a12 = "title" === a12 ? "top" === f24 ? -3 : 0 : "top" === f24 ? b7[0] + 2 : 0;
                    var g10;
                    if (e16) {
                        this.styledMode || (g10 = h11.style && h11.style.fontSize);
                        g10 = d4.fontMetrics(g10, e16).b;
                        e16.css({
                            width: (h11.width || c12.width + (h11.widthAdjust || 0)) + "px"
                        });
                        var k17 = Math.round(e16.getBBox(h11.useHTML).height);
                        e16.align(M1({
                            y: "bottom" === f24 ? g10 : a12 + g10,
                            height: k17
                        }, h11), !1, "spacingBox");
                        h11.floating || ("top" === f24 ? b7[0] = Math.ceil(b7[0] + k17) : "bottom" === f24 && (b7[2] = Math.ceil(b7[2] + k17)));
                    }
                }, this);
                b7[0] && "top" === (this.options.title.verticalAlign || "top") && (b7[0] += this.options.title.margin);
                b7[2] && "bottom" === this.options.caption.verticalAlign && (b7[2] += this.options.caption.margin);
                var e16 = !this.titleOffset || this.titleOffset.join(",") !== b7.join(",");
                this.titleOffset = b7;
                R(this, "afterLayOutTitles");
                !this.isDirtyBox && e16 && (this.isDirtyBox = this.isDirtyLegend = e16, this.hasRendered && T(a10, !0) && this.isDirtyBox && this.redraw());
            };
            a9.prototype.getChartSize = function() {
                var a10 = this.options.chart, b7 = a10.width;
                a10 = a10.height;
                var d4 = this.renderTo;
                V(b7) || (this.containerWidth = Z(d4, "width"));
                V(a10) || (this.containerHeight = Z(d4, "height"));
                this.chartWidth = Math.max(0, b7 || this.containerWidth || 600);
                this.chartHeight = Math.max(0, ka(a10, this.chartWidth) || (1 < this.containerHeight ? this.containerHeight : 400));
            };
            a9.prototype.temporaryDisplay = function(a10) {
                var b7 = this.renderTo;
                if (a10) for(; b7 && b7.style;)b7.hcOrigStyle && (Q(b7, b7.hcOrigStyle), delete b7.hcOrigStyle), b7.hcOrigDetached && (t4.body.removeChild(b7), b7.hcOrigDetached = !1), b7 = b7.parentNode;
                else for(; b7 && b7.style;){
                    t4.body.contains(b7) || b7.parentNode || (b7.hcOrigDetached = !0, t4.body.appendChild(b7));
                    if ("none" === Z(b7, "display", !1) || b7.hcOricDetached) b7.hcOrigStyle = {
                        display: b7.style.display,
                        height: b7.style.height,
                        overflow: b7.style.overflow
                    }, a10 = {
                        display: "block",
                        overflow: "hidden"
                    }, b7 !== this.renderTo && (a10.height = 0), Q(b7, a10), b7.offsetWidth || b7.style.setProperty("display", "block", "important");
                    b7 = b7.parentNode;
                    if (b7 === t4.body) break;
                }
            };
            a9.prototype.setClassName = function(a10) {
                this.container.className = "highcharts-container " + (a10 || "");
            };
            a9.prototype.getContainer = function() {
                var a10 = this.options, b7 = a10.chart, c12 = ma(), h11, f24 = this.renderTo;
                f24 || (this.renderTo = f24 = b7.renderTo);
                W(f24) && (this.renderTo = f24 = t4.getElementById(f24));
                f24 || K(13, !0, this);
                var k18 = da(F6(f24, "data-highcharts-chart"));
                U(k18) && O[k18] && O[k18].hasRendered && O[k18].destroy();
                F6(f24, "data-highcharts-chart", this.index);
                f24.innerHTML = "";
                b7.skipClone || f24.offsetWidth || this.temporaryDisplay();
                this.getChartSize();
                k18 = this.chartWidth;
                var l11 = this.chartHeight;
                Q(f24, {
                    overflow: "hidden"
                });
                this.styledMode || (h11 = M1({
                    position: "relative",
                    overflow: "hidden",
                    width: k18 + "px",
                    height: l11 + "px",
                    textAlign: "left",
                    lineHeight: "normal",
                    zIndex: 0,
                    "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                    userSelect: "none",
                    "touch-action": "manipulation",
                    outline: "none"
                }, b7.style || {
                }));
                this.container = c12 = S("div", {
                    id: c12
                }, h11, f24);
                this._cursor = c12.style.cursor;
                this.renderer = new (b7.renderer || !d3 ? g2.getRendererType(b7.renderer) : e5)(c12, k18, l11, void 0, b7.forExport, a10.exporting && a10.exporting.allowHTML, this.styledMode);
                r2(void 0, this);
                this.setClassName(b7.className);
                if (this.styledMode) for(var m10 in a10.defs)this.renderer.definition(a10.defs[m10]);
                else this.renderer.setStyle(b7.style);
                this.renderer.chartIndex = this.index;
                R(this, "afterGetContainer");
            };
            a9.prototype.getMargins = function(a10) {
                var b7 = this.spacing, d4 = this.margin, c12 = this.titleOffset;
                this.resetMargins();
                c12[0] && !V(d4[0]) && (this.plotTop = Math.max(this.plotTop, c12[0] + b7[0]));
                c12[2] && !V(d4[2]) && (this.marginBottom = Math.max(this.marginBottom, c12[2] + b7[2]));
                this.legend && this.legend.display && this.legend.adjustMargins(d4, b7);
                R(this, "getMargins");
                a10 || this.getAxisMargins();
            };
            a9.prototype.getAxisMargins = function() {
                var a10 = this, b7 = a10.axisOffset = [
                    0,
                    0,
                    0,
                    0
                ], d4 = a10.colorAxis, c12 = a10.margin, e16 = function(a12) {
                    a12.forEach(function(a13) {
                        a13.visible && a13.getOffset();
                    });
                };
                a10.hasCartesianSeries ? e16(a10.axes) : d4 && d4.length && e16(d4);
                h9.forEach(function(d5, e17) {
                    V(c12[e17]) || (a10[d5] += b7[e17]);
                });
                a10.setChartSize();
            };
            a9.prototype.reflow = function(a10) {
                var d4 = this, c12 = d4.options.chart, e16 = d4.renderTo, h11 = V(c12.width) && V(c12.height), g10 = c12.width || Z(e16, "width");
                c12 = c12.height || Z(e16, "height");
                e16 = a10 ? a10.target : b6;
                delete d4.pointer.chartPosition;
                if (!h11 && !d4.isPrinting && g10 && c12 && (e16 === b6 || e16 === t4)) {
                    if (g10 !== d4.containerWidth || c12 !== d4.containerHeight) f14.clearTimeout(d4.reflowTimeout), d4.reflowTimeout = ea(function() {
                        d4.container && d4.setSize(void 0, void 0, !1);
                    }, a10 ? 100 : 0);
                    d4.containerWidth = g10;
                    d4.containerHeight = c12;
                }
            };
            a9.prototype.setReflow = function(a10) {
                var d4 = this;
                !1 === a10 || this.unbindReflow ? !1 === a10 && this.unbindReflow && (this.unbindReflow = this.unbindReflow()) : (this.unbindReflow = L4(b6, "resize", function(a12) {
                    d4.options && d4.reflow(a12);
                }), L4(this, "destroy", this.unbindReflow));
            };
            a9.prototype.setSize = function(a10, b7, d4) {
                var c12 = this, e16 = c12.renderer;
                c12.isResizing += 1;
                r2(d4, c12);
                d4 = e16.globalAnimation;
                c12.oldChartHeight = c12.chartHeight;
                c12.oldChartWidth = c12.chartWidth;
                "undefined" !== typeof a10 && (c12.options.chart.width = a10);
                "undefined" !== typeof b7 && (c12.options.chart.height = b7);
                c12.getChartSize();
                c12.styledMode || (d4 ? q3 : Q)(c12.container, {
                    width: c12.chartWidth + "px",
                    height: c12.chartHeight + "px"
                }, d4);
                c12.setChartSize(!0);
                e16.setSize(c12.chartWidth, c12.chartHeight, d4);
                c12.axes.forEach(function(a12) {
                    a12.isDirty = !0;
                    a12.setScale();
                });
                c12.isDirtyLegend = !0;
                c12.isDirtyBox = !0;
                c12.layOutTitles();
                c12.getMargins();
                c12.redraw(d4);
                c12.oldChartHeight = null;
                R(c12, "resize");
                ea(function() {
                    c12 && R(c12, "endResize", null, function() {
                        --c12.isResizing;
                    });
                }, k14(d4).duration);
            };
            a9.prototype.setChartSize = function(a10) {
                var b7 = this.inverted, d4 = this.renderer, c12 = this.chartWidth, e16 = this.chartHeight, h11 = this.options.chart, f24 = this.spacing, g10 = this.clipOffset, k18, l11, m10, A3;
                this.plotLeft = k18 = Math.round(this.plotLeft);
                this.plotTop = l11 = Math.round(this.plotTop);
                this.plotWidth = m10 = Math.max(0, Math.round(c12 - k18 - this.marginRight));
                this.plotHeight = A3 = Math.max(0, Math.round(e16 - l11 - this.marginBottom));
                this.plotSizeX = b7 ? A3 : m10;
                this.plotSizeY = b7 ? m10 : A3;
                this.plotBorderWidth = h11.plotBorderWidth || 0;
                this.spacingBox = d4.spacingBox = {
                    x: f24[3],
                    y: f24[0],
                    width: c12 - f24[3] - f24[1],
                    height: e16 - f24[0] - f24[2]
                };
                this.plotBox = d4.plotBox = {
                    x: k18,
                    y: l11,
                    width: m10,
                    height: A3
                };
                b7 = 2 * Math.floor(this.plotBorderWidth / 2);
                c12 = Math.ceil(Math.max(b7, g10[3]) / 2);
                e16 = Math.ceil(Math.max(b7, g10[0]) / 2);
                this.clipBox = {
                    x: c12,
                    y: e16,
                    width: Math.floor(this.plotSizeX - Math.max(b7, g10[1]) / 2 - c12),
                    height: Math.max(0, Math.floor(this.plotSizeY - Math.max(b7, g10[2]) / 2 - e16))
                };
                a10 || (this.axes.forEach(function(a12) {
                    a12.setAxisSize();
                    a12.setAxisTranslation();
                }), d4.alignElements());
                R(this, "afterSetChartSize", {
                    skipAxes: a10
                });
            };
            a9.prototype.resetMargins = function() {
                R(this, "resetMargins");
                var a10 = this, b7 = a10.options.chart;
                [
                    "margin",
                    "spacing"
                ].forEach(function(d4) {
                    var c12 = b7[d4], e16 = N(c12) ? c12 : [
                        c12,
                        c12,
                        c12,
                        c12
                    ];
                    [
                        "Top",
                        "Right",
                        "Bottom",
                        "Left"
                    ].forEach(function(c13, h11) {
                        a10[d4][h11] = T(b7[d4 + c13], e16[h11]);
                    });
                });
                h9.forEach(function(b8, d4) {
                    a10[b8] = T(a10.margin[d4], a10.spacing[d4]);
                });
                a10.axisOffset = [
                    0,
                    0,
                    0,
                    0
                ];
                a10.clipOffset = [
                    0,
                    0,
                    0,
                    0
                ];
            };
            a9.prototype.drawChartBox = function() {
                var a10 = this.options.chart, b7 = this.renderer, d4 = this.chartWidth, c12 = this.chartHeight, e16 = this.styledMode, h11 = this.plotBGImage, f24 = a10.backgroundColor, g10 = a10.plotBackgroundColor, k18 = a10.plotBackgroundImage, l11 = this.plotLeft, m10 = this.plotTop, A3 = this.plotWidth, p8 = this.plotHeight, n9 = this.plotBox, q5 = this.clipRect, N1 = this.clipBox, t5 = this.chartBackground, v6 = this.plotBackground, r7 = this.plotBorder, B3, y1 = "animate";
                t5 || (this.chartBackground = t5 = b7.rect().addClass("highcharts-background").add(), y1 = "attr");
                if (e16) var I = B3 = t5.strokeWidth();
                else {
                    I = a10.borderWidth || 0;
                    B3 = I + (a10.shadow ? 8 : 0);
                    f24 = {
                        fill: f24 || "none"
                    };
                    if (I || t5["stroke-width"]) f24.stroke = a10.borderColor, f24["stroke-width"] = I;
                    t5.attr(f24).shadow(a10.shadow);
                }
                t5[y1]({
                    x: B3 / 2,
                    y: B3 / 2,
                    width: d4 - B3 - I % 2,
                    height: c12 - B3 - I % 2,
                    r: a10.borderRadius
                });
                y1 = "animate";
                v6 || (y1 = "attr", this.plotBackground = v6 = b7.rect().addClass("highcharts-plot-background").add());
                v6[y1](n9);
                e16 || (v6.attr({
                    fill: g10 || "none"
                }).shadow(a10.plotShadow), k18 && (h11 ? (k18 !== h11.attr("href") && h11.attr("href", k18), h11.animate(n9)) : this.plotBGImage = b7.image(k18, l11, m10, A3, p8).add()));
                q5 ? q5.animate({
                    width: N1.width,
                    height: N1.height
                }) : this.clipRect = b7.clipRect(N1);
                y1 = "animate";
                r7 || (y1 = "attr", this.plotBorder = r7 = b7.rect().addClass("highcharts-plot-border").attr({
                    zIndex: 1
                }).add());
                e16 || r7.attr({
                    stroke: a10.plotBorderColor,
                    "stroke-width": a10.plotBorderWidth || 0,
                    fill: "none"
                });
                r7[y1](r7.crisp({
                    x: l11,
                    y: m10,
                    width: A3,
                    height: p8
                }, -r7.strokeWidth()));
                this.isDirtyBox = !1;
                R(this, "afterDrawChartBox");
            };
            a9.prototype.propFromSeries = function() {
                var a10 = this, b7 = a10.options.chart, d4 = a10.options.series, c12, e16, h11;
                [
                    "inverted",
                    "angular",
                    "polar"
                ].forEach(function(f24) {
                    e16 = y[b7.type || b7.defaultSeriesType];
                    h11 = b7[f24] || e16 && e16.prototype[f24];
                    for(c12 = d4 && d4.length; !h11 && c12--;)(e16 = y[d4[c12].type]) && e16.prototype[f24] && (h11 = !0);
                    a10[f24] = h11;
                });
            };
            a9.prototype.linkSeries = function() {
                var a10 = this, b7 = a10.series;
                b7.forEach(function(a12) {
                    a12.linkedSeries.length = 0;
                });
                b7.forEach(function(b8) {
                    var d4 = b8.options.linkedTo;
                    W(d4) && (d4 = ":previous" === d4 ? a10.series[b8.index - 1] : a10.get(d4)) && d4.linkedParent !== b8 && (d4.linkedSeries.push(b8), b8.linkedParent = d4, d4.enabledDataSorting && b8.setDataSortingOptions(), b8.visible = T(b8.options.visible, d4.options.visible, b8.visible));
                });
                R(this, "afterLinkSeries");
            };
            a9.prototype.renderSeries = function() {
                this.series.forEach(function(a10) {
                    a10.translate();
                    a10.render();
                });
            };
            a9.prototype.renderLabels = function() {
                var a10 = this, b7 = a10.options.labels;
                b7.items && b7.items.forEach(function(d4) {
                    var c12 = M1(b7.style, d4.style), e16 = da(c12.left) + a10.plotLeft, h11 = da(c12.top) + a10.plotTop + 12;
                    delete c12.left;
                    delete c12.top;
                    a10.renderer.text(d4.html, e16, h11).attr({
                        zIndex: 2
                    }).css(c12).add();
                });
            };
            a9.prototype.render = function() {
                var a10 = this.axes, b7 = this.colorAxis, d4 = this.renderer, c12 = this.options, e16 = function(a12) {
                    a12.forEach(function(a13) {
                        a13.visible && a13.render();
                    });
                }, h11 = 0;
                this.setTitle();
                this.legend = new x(this, c12.legend);
                this.getStacks && this.getStacks();
                this.getMargins(!0);
                this.setChartSize();
                c12 = this.plotWidth;
                a10.some(function(a12) {
                    if (a12.horiz && a12.visible && a12.options.labels.enabled && a12.series.length) return h11 = 21, !0;
                });
                var f24 = this.plotHeight = Math.max(this.plotHeight - h11, 0);
                a10.forEach(function(a12) {
                    a12.setScale();
                });
                this.getAxisMargins();
                var g10 = 1.1 < c12 / this.plotWidth, k18 = 1.05 < f24 / this.plotHeight;
                if (g10 || k18) a10.forEach(function(a12) {
                    (a12.horiz && g10 || !a12.horiz && k18) && a12.setTickInterval(!0);
                }), this.getMargins();
                this.drawChartBox();
                this.hasCartesianSeries ? e16(a10) : b7 && b7.length && e16(b7);
                this.seriesGroup || (this.seriesGroup = d4.g("series-group").attr({
                    zIndex: 3
                }).add());
                this.renderSeries();
                this.renderLabels();
                this.addCredits();
                this.setResponsive && this.setResponsive();
                this.hasRendered = !0;
            };
            a9.prototype.addCredits = function(a10) {
                var d4 = this, c12 = X(!0, this.options.credits, a10);
                c12.enabled && !this.credits && (this.credits = this.renderer.text(c12.text + (this.mapCredits || ""), 0, 0).addClass("highcharts-credits").on("click", function() {
                    c12.href && (b6.location.href = c12.href);
                }).attr({
                    align: c12.position.align,
                    zIndex: 8
                }), d4.styledMode || this.credits.css(c12.style), this.credits.add().align(c12.position), this.credits.update = function(a12) {
                    d4.credits = d4.credits.destroy();
                    d4.addCredits(a12);
                });
            };
            a9.prototype.destroy = function() {
                var a10 = this, b7 = a10.axes, d4 = a10.series, c12 = a10.container, e16 = c12 && c12.parentNode, h11;
                R(a10, "destroy");
                a10.renderer.forExport ? H(O, a10) : O[a10.index] = void 0;
                z.chartCount--;
                a10.renderTo.removeAttribute("data-highcharts-chart");
                ja(a10);
                for(h11 = b7.length; h11--;)b7[h11] = b7[h11].destroy();
                this.scroller && this.scroller.destroy && this.scroller.destroy();
                for(h11 = d4.length; h11--;)d4[h11] = d4[h11].destroy();
                "title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function(b8) {
                    var d5 = a10[b8];
                    d5 && d5.destroy && (a10[b8] = d5.destroy());
                });
                c12 && (c12.innerHTML = "", ja(c12), e16 && fa(c12));
                Y(a10, function(b8, d5) {
                    delete a10[d5];
                });
            };
            a9.prototype.firstRender = function() {
                var a10 = this, b7 = a10.options;
                if (!a10.isReadyToRender || a10.isReadyToRender()) {
                    a10.getContainer();
                    a10.resetMargins();
                    a10.setChartSize();
                    a10.propFromSeries();
                    a10.getAxes();
                    (A(b7.series) ? b7.series : []).forEach(function(b8) {
                        a10.initSeries(b8);
                    });
                    a10.linkSeries();
                    a10.setSeriesData();
                    R(a10, "beforeRender");
                    m7 && (J.isRequired() ? a10.pointer = new J(a10, b7) : a10.pointer = new m7(a10, b7));
                    a10.render();
                    a10.pointer.getChartPosition();
                    if (!a10.renderer.imgCount && !a10.hasLoaded) a10.onload();
                    a10.temporaryDisplay(!0);
                }
            };
            a9.prototype.onload = function() {
                this.callbacks.concat([
                    this.callback
                ]).forEach(function(a10) {
                    a10 && "undefined" !== typeof this.index && a10.apply(this, [
                        this
                    ]);
                }, this);
                R(this, "load");
                R(this, "render");
                V(this.index) && this.setReflow(this.options.chart.reflow);
                this.hasLoaded = !0;
            };
            a9.prototype.addSeries = function(a10, b7, d4) {
                var c12 = this, e16;
                a10 && (b7 = T(b7, !0), R(c12, "addSeries", {
                    options: a10
                }, function() {
                    e16 = c12.initSeries(a10);
                    c12.isDirtyLegend = !0;
                    c12.linkSeries();
                    e16.enabledDataSorting && e16.setData(a10.data, !1);
                    R(c12, "afterAddSeries", {
                        series: e16
                    });
                    b7 && c12.redraw(d4);
                }));
                return e16;
            };
            a9.prototype.addAxis = function(a10, b7, d4, c12) {
                return this.createAxis(b7 ? "xAxis" : "yAxis", {
                    axis: a10,
                    redraw: d4,
                    animation: c12
                });
            };
            a9.prototype.addColorAxis = function(a10, b7, d4) {
                return this.createAxis("colorAxis", {
                    axis: a10,
                    redraw: b7,
                    animation: d4
                });
            };
            a9.prototype.createAxis = function(a10, b7) {
                a10 = new w(this, X(b7.axis, {
                    index: this[a10].length,
                    isX: "xAxis" === a10
                }));
                T(b7.redraw, !0) && this.redraw(b7.animation);
                return a10;
            };
            a9.prototype.showLoading = function(a10) {
                var b7 = this, d4 = b7.options, c12 = d4.loading, e16 = function() {
                    h11 && Q(h11, {
                        left: b7.plotLeft + "px",
                        top: b7.plotTop + "px",
                        width: b7.plotWidth + "px",
                        height: b7.plotHeight + "px"
                    });
                }, h11 = b7.loadingDiv, f24 = b7.loadingSpan;
                h11 || (b7.loadingDiv = h11 = S("div", {
                    className: "highcharts-loading highcharts-loading-hidden"
                }, null, b7.container));
                f24 || (b7.loadingSpan = f24 = S("span", {
                    className: "highcharts-loading-inner"
                }, null, h11), L4(b7, "redraw", e16));
                h11.className = "highcharts-loading";
                v4.setElementHTML(f24, T(a10, d4.lang.loading, ""));
                b7.styledMode || (Q(h11, M1(c12.style, {
                    zIndex: 10
                })), Q(f24, c12.labelStyle), b7.loadingShown || (Q(h11, {
                    opacity: 0,
                    display: ""
                }), q3(h11, {
                    opacity: c12.style.opacity || 0.5
                }, {
                    duration: c12.showDuration || 0
                })));
                b7.loadingShown = !0;
                e16();
            };
            a9.prototype.hideLoading = function() {
                var a10 = this.options, b7 = this.loadingDiv;
                b7 && (b7.className = "highcharts-loading highcharts-loading-hidden", this.styledMode || q3(b7, {
                    opacity: 0
                }, {
                    duration: a10.loading.hideDuration || 100,
                    complete: function() {
                        Q(b7, {
                            display: "none"
                        });
                    }
                }));
                this.loadingShown = !1;
            };
            a9.prototype.update = function(a10, b7, d4, c12) {
                var e16 = this, h11 = {
                    credits: "addCredits",
                    title: "setTitle",
                    subtitle: "setSubtitle",
                    caption: "setCaption"
                }, f24 = a10.isResponsiveOptions, g10 = [], k18, m10;
                R(e16, "update", {
                    options: a10
                });
                f24 || e16.setResponsive(!1, !0);
                a10 = P2(a10, e16.options);
                e16.userOptions = X(e16.userOptions, a10);
                var A3 = a10.chart;
                if (A3) {
                    X(!0, e16.options.chart, A3);
                    "className" in A3 && e16.setClassName(A3.className);
                    "reflow" in A3 && e16.setReflow(A3.reflow);
                    if ("inverted" in A3 || "polar" in A3 || "type" in A3) {
                        e16.propFromSeries();
                        var p8 = !0;
                    }
                    "alignTicks" in A3 && (p8 = !0);
                    "events" in A3 && B2(this, A3);
                    Y(A3, function(a12, b8) {
                        -1 !== e16.propsRequireUpdateSeries.indexOf("chart." + b8) && (k18 = !0);
                        -1 !== e16.propsRequireDirtyBox.indexOf(b8) && (e16.isDirtyBox = !0);
                        -1 !== e16.propsRequireReflow.indexOf(b8) && (f24 ? e16.isDirtyBox = !0 : m10 = !0);
                    });
                    !e16.styledMode && A3.style && e16.renderer.setStyle(e16.options.chart.style || {
                    });
                }
                !e16.styledMode && a10.colors && (this.options.colors = a10.colors);
                a10.time && (this.time === G6 && (this.time = new l7(a10.time)), X(!0, e16.options.time, a10.time));
                Y(a10, function(b8, d5) {
                    if (e16[d5] && "function" === typeof e16[d5].update) e16[d5].update(b8, !1);
                    else if ("function" === typeof e16[h11[d5]]) e16[h11[d5]](b8);
                    else "colors" !== d5 && -1 === e16.collectionsWithUpdate.indexOf(d5) && X(!0, e16.options[d5], a10[d5]);
                    "chart" !== d5 && -1 !== e16.propsRequireUpdateSeries.indexOf(d5) && (k18 = !0);
                });
                this.collectionsWithUpdate.forEach(function(b8) {
                    if (a10[b8]) {
                        var c13 = [];
                        e16[b8].forEach(function(a12, b9) {
                            a12.options.isInternal || c13.push(T(a12.options.index, b9));
                        });
                        ba(a10[b8]).forEach(function(a12, h12) {
                            var f25 = V(a12.id), g11;
                            f25 && (g11 = e16.get(a12.id));
                            !g11 && e16[b8] && (g11 = e16[b8][c13 ? c13[h12] : h12]) && f25 && V(g11.options.id) && (g11 = void 0);
                            g11 && g11.coll === b8 && (g11.update(a12, !1), d4 && (g11.touched = !0));
                            !g11 && d4 && e16.collectionsWithInit[b8] && (e16.collectionsWithInit[b8][0].apply(e16, [
                                a12
                            ].concat(e16.collectionsWithInit[b8][1] || []).concat([
                                !1
                            ])).touched = !0);
                        });
                        d4 && e16[b8].forEach(function(a12) {
                            a12.touched || a12.options.isInternal ? delete a12.touched : g10.push(a12);
                        });
                    }
                });
                g10.forEach(function(a12) {
                    a12.chart && a12.remove && a12.remove(!1);
                });
                p8 && e16.axes.forEach(function(a12) {
                    a12.update({
                    }, !1);
                });
                k18 && e16.getSeriesOrderByLinks().forEach(function(a12) {
                    a12.chart && a12.update({
                    }, !1);
                }, this);
                p8 = A3 && A3.width;
                A3 = A3 && (W(A3.height) ? ka(A3.height, p8 || e16.chartWidth) : A3.height);
                m10 || U(p8) && p8 !== e16.chartWidth || U(A3) && A3 !== e16.chartHeight ? e16.setSize(p8, A3, c12) : T(b7, !0) && e16.redraw(c12);
                R(e16, "afterUpdate", {
                    options: a10,
                    redraw: b7,
                    animation: c12
                });
            };
            a9.prototype.setSubtitle = function(a10, b7) {
                this.applyDescription("subtitle", a10);
                this.layOutTitles(b7);
            };
            a9.prototype.setCaption = function(a10, b7) {
                this.applyDescription("caption", a10);
                this.layOutTitles(b7);
            };
            a9.prototype.showResetZoom = function() {
                function a10() {
                    b7.zoomOut();
                }
                var b7 = this, d4 = p6.lang, c12 = b7.options.chart.resetZoomButton, e16 = c12.theme, h11 = e16.states, f24 = "chart" === c12.relativeTo || "spacingBox" === c12.relativeTo ? null : "scrollablePlotBox";
                R(this, "beforeShowResetZoom", null, function() {
                    b7.resetZoomButton = b7.renderer.button(d4.resetZoom, null, null, a10, e16, h11 && h11.hover).attr({
                        align: c12.position.align,
                        title: d4.resetZoomTitle
                    }).addClass("highcharts-reset-zoom").add().align(c12.position, !1, f24);
                });
                R(this, "afterShowResetZoom");
            };
            a9.prototype.zoomOut = function() {
                R(this, "selection", {
                    resetSelection: !0
                }, this.zoom);
            };
            a9.prototype.zoom = function(a10) {
                var b7 = this, d4 = b7.pointer, c12 = b7.inverted ? d4.mouseDownX : d4.mouseDownY, e16 = !1, h11;
                !a10 || a10.resetSelection ? (b7.axes.forEach(function(a12) {
                    h11 = a12.zoom();
                }), d4.initiated = !1) : a10.xAxis.concat(a10.yAxis).forEach(function(a12) {
                    var f24 = a12.axis, g10 = b7.inverted ? f24.left : f24.top, k18 = b7.inverted ? g10 + f24.width : g10 + f24.height, l11 = f24.isXAxis, A3 = !1;
                    if (!l11 && c12 >= g10 && c12 <= k18 || l11 || !V(c12)) A3 = !0;
                    d4[l11 ? "zoomX" : "zoomY"] && A3 && (h11 = f24.zoom(a12.min, a12.max), f24.displayBtn && (e16 = !0));
                });
                var f24 = b7.resetZoomButton;
                e16 && !f24 ? b7.showResetZoom() : !e16 && N(f24) && (b7.resetZoomButton = f24.destroy());
                h11 && b7.redraw(T(b7.options.chart.animation, a10 && a10.animation, 100 > b7.pointCount));
            };
            a9.prototype.pan = function(a10, b7) {
                var d4 = this, c12 = d4.hoverPoints;
                b7 = "object" === typeof b7 ? b7 : {
                    enabled: b7,
                    type: "x"
                };
                var e16 = d4.options.chart, h11 = d4.options.mapNavigation && d4.options.mapNavigation.enabled;
                e16 && e16.panning && (e16.panning = b7);
                var f24 = b7.type, g10;
                R(this, "pan", {
                    originalEvent: a10
                }, function() {
                    c12 && c12.forEach(function(a12) {
                        a12.setState();
                    });
                    var b8 = d4.xAxis;
                    "xy" === f24 ? b8 = b8.concat(d4.yAxis) : "y" === f24 && (b8 = d4.yAxis);
                    var e17 = {
                    };
                    b8.forEach(function(b9) {
                        if (b9.options.panningEnabled && !b9.options.isInternal) {
                            var c14 = b9.horiz, k18 = a10[c14 ? "chartX" : "chartY"];
                            c14 = c14 ? "mouseDownX" : "mouseDownY";
                            var l11 = d4[c14], A3 = b9.minPointOffset || 0, m10 = b9.reversed && !d4.inverted || !b9.reversed && d4.inverted ? -1 : 1, p9 = b9.getExtremes(), n9 = b9.toValue(l11 - k18, !0) + A3 * m10, q5 = b9.toValue(l11 + b9.len - k18, !0) - (A3 * m10 || b9.isXAxis && b9.pointRangePadding || 0), t5 = q5 < n9;
                            m10 = b9.hasVerticalPanning();
                            l11 = t5 ? q5 : n9;
                            n9 = t5 ? n9 : q5;
                            var N1 = b9.panningState;
                            !m10 || b9.isXAxis || N1 && !N1.isDirty || b9.series.forEach(function(a12) {
                                var b10 = a12.getProcessedData(!0);
                                b10 = a12.getExtremes(b10.yData, !0);
                                N1 || (N1 = {
                                    startMin: Number.MAX_VALUE,
                                    startMax: -Number.MAX_VALUE
                                });
                                U(b10.dataMin) && U(b10.dataMax) && (N1.startMin = Math.min(T(a12.options.threshold, Infinity), b10.dataMin, N1.startMin), N1.startMax = Math.max(T(a12.options.threshold, -Infinity), b10.dataMax, N1.startMax));
                            });
                            m10 = Math.min(T(N1 && N1.startMin, p9.dataMin), A3 ? p9.min : b9.toValue(b9.toPixels(p9.min) - b9.minPixelPadding));
                            q5 = Math.max(T(N1 && N1.startMax, p9.dataMax), A3 ? p9.max : b9.toValue(b9.toPixels(p9.max) + b9.minPixelPadding));
                            b9.panningState = N1;
                            b9.isOrdinal || (A3 = m10 - l11, 0 < A3 && (n9 += A3, l11 = m10), A3 = n9 - q5, 0 < A3 && (n9 = q5, l11 -= A3), b9.series.length && l11 !== p9.min && n9 !== p9.max && l11 >= m10 && n9 <= q5 && (b9.setExtremes(l11, n9, !1, !1, {
                                trigger: "pan"
                            }), d4.resetZoomButton || h11 || l11 === m10 || n9 === q5 || !f24.match("y") || (d4.showResetZoom(), b9.displayBtn = !1), g10 = !0), e17[c14] = k18);
                        }
                    });
                    Y(e17, function(a12, b9) {
                        d4[b9] = a12;
                    });
                    g10 && d4.redraw(!1);
                    Q(d4.container, {
                        cursor: "move"
                    });
                });
            };
            return a9;
        })();
        M1(a1.prototype, {
            callbacks: [],
            collectionsWithInit: {
                xAxis: [
                    a1.prototype.addAxis,
                    [
                        !0
                    ]
                ],
                yAxis: [
                    a1.prototype.addAxis,
                    [
                        !1
                    ]
                ],
                series: [
                    a1.prototype.addSeries
                ]
            },
            collectionsWithUpdate: [
                "xAxis",
                "yAxis",
                "series"
            ],
            propsRequireDirtyBox: "backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),
            propsRequireReflow: "margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
            propsRequireUpdateSeries: "chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" ")
        });
        return a1;
    });
    M(a3, "Core/Legend/LegendSymbol.js", [
        a3["Core/Utilities.js"]
    ], function(a1) {
        var r2 = a1.merge, C = a1.pick, E;
        (function(a9) {
            a9.drawLineMarker = function(a10) {
                var x = this.options, u2 = a10.symbolWidth, n2 = a10.symbolHeight, m7 = n2 / 2, g2 = this.chart.renderer, c3 = this.legendGroup;
                a10 = a10.baseline - Math.round(0.3 * a10.fontMetrics.b);
                var e5 = {
                }, l7 = x.marker;
                this.chart.styledMode || (e5 = {
                    "stroke-width": x.lineWidth || 0
                }, x.dashStyle && (e5.dashstyle = x.dashStyle));
                this.legendLine = g2.path([
                    [
                        "M",
                        0,
                        a10
                    ],
                    [
                        "L",
                        u2,
                        a10
                    ]
                ]).addClass("highcharts-graph").attr(e5).add(c3);
                l7 && !1 !== l7.enabled && u2 && (x = Math.min(C(l7.radius, m7), m7), 0 === this.symbol.indexOf("url") && (l7 = r2(l7, {
                    width: n2,
                    height: n2
                }), x = 0), this.legendSymbol = u2 = g2.symbol(this.symbol, u2 / 2 - x, a10 - x, 2 * x, 2 * x, l7).addClass("highcharts-point").add(c3), u2.isMarker = !0);
            };
            a9.drawRectangle = function(a10, r7) {
                var u2 = a10.symbolHeight, n2 = a10.options.squareSymbol;
                r7.legendSymbol = this.chart.renderer.rect(n2 ? (a10.symbolWidth - u2) / 2 : 0, a10.baseline - u2 + 1, n2 ? u2 : a10.symbolWidth, u2, C(a10.options.symbolRadius, u2 / 2)).addClass("highcharts-point").attr({
                    zIndex: 3
                }).add(r7.legendGroup);
            };
        })(E || (E = {
        }));
        return E;
    });
    M(a3, "Core/Series/SeriesDefaults.js", [
        a3["Core/Color/Palette.js"]
    ], function(a1) {
        return {
            lineWidth: 2,
            allowPointSelect: !1,
            crisp: !0,
            showCheckbox: !1,
            animation: {
                duration: 1000
            },
            events: {
            },
            marker: {
                enabledThreshold: 2,
                lineColor: a1.backgroundColor,
                lineWidth: 0,
                radius: 4,
                states: {
                    normal: {
                        animation: !0
                    },
                    hover: {
                        animation: {
                            duration: 50
                        },
                        enabled: !0,
                        radiusPlus: 2,
                        lineWidthPlus: 1
                    },
                    select: {
                        fillColor: a1.neutralColor20,
                        lineColor: a1.neutralColor100,
                        lineWidth: 2
                    }
                }
            },
            point: {
                events: {
                }
            },
            dataLabels: {
                animation: {
                },
                align: "center",
                defer: !0,
                formatter: function() {
                    var a9 = this.series.chart.numberFormatter;
                    return "number" !== typeof this.y ? "" : a9(this.y, -1);
                },
                padding: 5,
                style: {
                    fontSize: "11px",
                    fontWeight: "bold",
                    color: "contrast",
                    textOutline: "1px contrast"
                },
                verticalAlign: "bottom",
                x: 0,
                y: 0
            },
            cropThreshold: 300,
            opacity: 1,
            pointRange: 0,
            softThreshold: !0,
            states: {
                normal: {
                    animation: !0
                },
                hover: {
                    animation: {
                        duration: 50
                    },
                    lineWidthPlus: 1,
                    marker: {
                    },
                    halo: {
                        size: 10,
                        opacity: 0.25
                    }
                },
                select: {
                    animation: {
                        duration: 0
                    }
                },
                inactive: {
                    animation: {
                        duration: 50
                    },
                    opacity: 0.2
                }
            },
            stickyTracking: !0,
            turboThreshold: 1000,
            findNearestPointBy: "x"
        };
    });
    M(a3, "Core/Series/Series.js", [
        a3["Core/Animation/AnimationUtilities.js"],
        a3["Core/DefaultOptions.js"],
        a3["Core/Foundation.js"],
        a3["Core/Globals.js"],
        a3["Core/Legend/LegendSymbol.js"],
        a3["Core/Color/Palette.js"],
        a3["Core/Series/Point.js"],
        a3["Core/Series/SeriesDefaults.js"],
        a3["Core/Series/SeriesRegistry.js"],
        a3["Core/Renderer/SVG/SVGElement.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w, C, E, z, x, J, u2, n2, m7, g2) {
        var c3 = a1.animObject, e5 = a1.setAnimation, l7 = w.defaultOptions, f14 = C.registerEventOptions, v4 = E.hasTouch, q3 = E.svg, k14 = E.win, r2 = n2.seriesTypes, D2 = g2.addEvent, B2 = g2.arrayMax, O = g2.arrayMin, t4 = g2.clamp, h9 = g2.cleanRecursively, d3 = g2.correctFloat, b6 = g2.defined, p6 = g2.erase, G6 = g2.error, y = g2.extend, L4 = g2.find, F6 = g2.fireEvent, P2 = g2.getNestedProperty, S = g2.isArray, Q = g2.isNumber, V = g2.isString, M1 = g2.merge, H1 = g2.objectEach, K = g2.pick, la = g2.removeEvent, ha = g2.splat, R = g2.syncTimeout;
        a1 = (function() {
            function a9() {
                this.zones = this.yAxis = this.xAxis = this.userOptions = this.tooltipOptions = this.processedYData = this.processedXData = this.points = this.options = this.linkedSeries = this.index = this.eventsToUnbind = this.eventOptions = this.data = this.chart = this._i = void 0;
            }
            a9.prototype.init = function(a10, b7) {
                F6(this, "init", {
                    options: b7
                });
                var d4 = this, c12 = a10.series;
                this.eventsToUnbind = [];
                d4.chart = a10;
                d4.options = d4.setOptions(b7);
                b7 = d4.options;
                d4.linkedSeries = [];
                d4.bindAxes();
                y(d4, {
                    name: b7.name,
                    state: "",
                    visible: !1 !== b7.visible,
                    selected: !0 === b7.selected
                });
                f14(this, b7);
                var e16 = b7.events;
                if (e16 && e16.click || b7.point && b7.point.events && b7.point.events.click || b7.allowPointSelect) a10.runTrackerClick = !0;
                d4.getColor();
                d4.getSymbol();
                d4.parallelArrays.forEach(function(a12) {
                    d4[a12 + "Data"] || (d4[a12 + "Data"] = []);
                });
                d4.isCartesian && (a10.hasCartesianSeries = !0);
                var h11;
                c12.length && (h11 = c12[c12.length - 1]);
                d4._i = K(h11 && h11._i, -1) + 1;
                d4.opacity = d4.options.opacity;
                a10.orderSeries(this.insert(c12));
                b7.dataSorting && b7.dataSorting.enabled ? d4.setDataSortingOptions() : d4.points || d4.data || d4.setData(b7.data, !1);
                F6(this, "afterInit");
            };
            a9.prototype.is = function(a10) {
                return r2[a10] && this instanceof r2[a10];
            };
            a9.prototype.insert = function(a10) {
                var b7 = this.options.index, d4;
                if (Q(b7)) {
                    for(d4 = a10.length; d4--;)if (b7 >= K(a10[d4].options.index, a10[d4]._i)) {
                        a10.splice(d4 + 1, 0, this);
                        break;
                    }
                    -1 === d4 && a10.unshift(this);
                    d4 += 1;
                } else a10.push(this);
                return K(d4, a10.length - 1);
            };
            a9.prototype.bindAxes = function() {
                var a10 = this, b7 = a10.options, d4 = a10.chart, c12;
                F6(this, "bindAxes", null, function() {
                    (a10.axisTypes || []).forEach(function(e16) {
                        var h11 = 0;
                        d4[e16].forEach(function(d5) {
                            c12 = d5.options;
                            if (b7[e16] === h11 && !c12.isInternal || "undefined" !== typeof b7[e16] && b7[e16] === c12.id || "undefined" === typeof b7[e16] && 0 === c12.index) a10.insert(d5.series), a10[e16] = d5, d5.isDirty = !0;
                            c12.isInternal || h11++;
                        });
                        a10[e16] || a10.optionalAxis === e16 || G6(18, !0, d4);
                    });
                });
                F6(this, "afterBindAxes");
            };
            a9.prototype.updateParallelArrays = function(a10, b7) {
                var d4 = a10.series, c12 = arguments, e16 = Q(b7) ? function(c15) {
                    var e17 = "y" === c15 && d4.toYData ? d4.toYData(a10) : a10[c15];
                    d4[c15 + "Data"][b7] = e17;
                } : function(a12) {
                    Array.prototype[b7].apply(d4[a12 + "Data"], Array.prototype.slice.call(c12, 2));
                };
                d4.parallelArrays.forEach(e16);
            };
            a9.prototype.hasData = function() {
                return this.visible && "undefined" !== typeof this.dataMax && "undefined" !== typeof this.dataMin || this.visible && this.yData && 0 < this.yData.length;
            };
            a9.prototype.autoIncrement = function(a10) {
                var b7 = this.options, d4 = b7.pointIntervalUnit, c12 = b7.relativeXValue, e16 = this.chart.time, h11 = this.xIncrement, f24;
                h11 = K(h11, b7.pointStart, 0);
                this.pointInterval = f24 = K(this.pointInterval, b7.pointInterval, 1);
                c12 && Q(a10) && (f24 *= a10);
                d4 && (b7 = new e16.Date(h11), "day" === d4 ? e16.set("Date", b7, e16.get("Date", b7) + f24) : "month" === d4 ? e16.set("Month", b7, e16.get("Month", b7) + f24) : "year" === d4 && e16.set("FullYear", b7, e16.get("FullYear", b7) + f24), f24 = b7.getTime() - h11);
                if (c12 && Q(a10)) return h11 + f24;
                this.xIncrement = h11 + f24;
                return h11;
            };
            a9.prototype.setDataSortingOptions = function() {
                var a10 = this.options;
                y(this, {
                    requireSorting: !1,
                    sorted: !1,
                    enabledDataSorting: !0,
                    allowDG: !1
                });
                b6(a10.pointRange) || (a10.pointRange = 1);
            };
            a9.prototype.setOptions = function(a10) {
                var d4 = this.chart, c12 = d4.options, e16 = c12.plotOptions, h11 = d4.userOptions || {
                };
                a10 = M1(a10);
                d4 = d4.styledMode;
                var f24 = {
                    plotOptions: e16,
                    userOptions: a10
                };
                F6(this, "setOptions", f24);
                var g10 = f24.plotOptions[this.type], k19 = h11.plotOptions || {
                };
                this.userOptions = f24.userOptions;
                h11 = M1(g10, e16.series, h11.plotOptions && h11.plotOptions[this.type], a10);
                this.tooltipOptions = M1(l7.tooltip, l7.plotOptions.series && l7.plotOptions.series.tooltip, l7.plotOptions[this.type].tooltip, c12.tooltip.userOptions, e16.series && e16.series.tooltip, e16[this.type].tooltip, a10.tooltip);
                this.stickyTracking = K(a10.stickyTracking, k19[this.type] && k19[this.type].stickyTracking, k19.series && k19.series.stickyTracking, this.tooltipOptions.shared && !this.noSharedTooltip ? !0 : h11.stickyTracking);
                null === g10.marker && delete h11.marker;
                this.zoneAxis = h11.zoneAxis;
                e16 = this.zones = (h11.zones || []).slice();
                !h11.negativeColor && !h11.negativeFillColor || h11.zones || (c12 = {
                    value: h11[this.zoneAxis + "Threshold"] || h11.threshold || 0,
                    className: "highcharts-negative"
                }, d4 || (c12.color = h11.negativeColor, c12.fillColor = h11.negativeFillColor), e16.push(c12));
                e16.length && b6(e16[e16.length - 1].value) && e16.push(d4 ? {
                } : {
                    color: this.color,
                    fillColor: this.fillColor
                });
                F6(this, "afterSetOptions", {
                    options: h11
                });
                return h11;
            };
            a9.prototype.getName = function() {
                return K(this.options.name, "Series " + (this.index + 1));
            };
            a9.prototype.getCyclic = function(a10, d4, c12) {
                var e16 = this.chart, h11 = this.userOptions, f24 = a10 + "Index", g10 = a10 + "Counter", k19 = c12 ? c12.length : K(e16.options.chart[a10 + "Count"], e16[a10 + "Count"]);
                if (!d4) {
                    var l12 = K(h11[f24], h11["_" + f24]);
                    b6(l12) || (e16.series.length || (e16[g10] = 0), h11["_" + f24] = l12 = e16[g10] % k19, e16[g10] += 1);
                    c12 && (d4 = c12[l12]);
                }
                "undefined" !== typeof l12 && (this[f24] = l12);
                this[a10] = d4;
            };
            a9.prototype.getColor = function() {
                this.chart.styledMode ? this.getCyclic("color") : this.options.colorByPoint ? this.color = x.neutralColor20 : this.getCyclic("color", this.options.color || l7.plotOptions[this.type].color, this.chart.options.colors);
            };
            a9.prototype.getPointsCollection = function() {
                return (this.hasGroupedData ? this.points : this.data) || [];
            };
            a9.prototype.getSymbol = function() {
                this.getCyclic("symbol", this.options.marker.symbol, this.chart.options.symbols);
            };
            a9.prototype.findPointIndex = function(a10, b7) {
                var d4 = a10.id, c12 = a10.x, e16 = this.points, h11 = this.options.dataSorting, f24, g10;
                if (d4) h11 = this.chart.get(d4), h11 instanceof J && (f24 = h11);
                else if (this.linkedParent || this.enabledDataSorting || this.options.relativeXValue) {
                    if (f24 = function(b8) {
                        return !b8.touched && b8.index === a10.index;
                    }, h11 && h11.matchByName ? f24 = function(b8) {
                        return !b8.touched && b8.name === a10.name;
                    } : this.options.relativeXValue && (f24 = function(b8) {
                        return !b8.touched && b8.options.x === a10.x;
                    }), f24 = L4(e16, f24), !f24) return;
                }
                if (f24) {
                    var k19 = f24 && f24.index;
                    "undefined" !== typeof k19 && (g10 = !0);
                }
                "undefined" === typeof k19 && Q(c12) && (k19 = this.xData.indexOf(c12, b7));
                -1 !== k19 && "undefined" !== typeof k19 && this.cropped && (k19 = k19 >= this.cropStart ? k19 - this.cropStart : k19);
                !g10 && Q(k19) && e16[k19] && e16[k19].touched && (k19 = void 0);
                return k19;
            };
            a9.prototype.updateData = function(a10, d4) {
                var c12 = this.options, e16 = c12.dataSorting, h11 = this.points, f24 = [], g10 = this.requireSorting, k20 = a10.length === h11.length, l13, m11, A4, p10 = !0;
                this.xIncrement = null;
                a10.forEach(function(a12, d5) {
                    var m12 = b6(a12) && this.pointClass.prototype.optionsToObject.call({
                        series: this
                    }, a12) || {
                    }, p11 = m12.x;
                    if (m12.id || Q(p11)) {
                        if (m12 = this.findPointIndex(m12, A4), -1 === m12 || "undefined" === typeof m12 ? f24.push(a12) : h11[m12] && a12 !== c12.data[m12] ? (h11[m12].update(a12, !1, null, !1), h11[m12].touched = !0, g10 && (A4 = m12 + 1)) : h11[m12] && (h11[m12].touched = !0), !k20 || d5 !== m12 || e16 && e16.enabled || this.hasDerivedData) l13 = !0;
                    } else f24.push(a12);
                }, this);
                if (l13) for(a10 = h11.length; a10--;)(m11 = h11[a10]) && !m11.touched && m11.remove && m11.remove(!1, d4);
                else !k20 || e16 && e16.enabled ? p10 = !1 : (a10.forEach(function(a12, b7) {
                    a12 !== h11[b7].y && h11[b7].update && h11[b7].update(a12, !1, null, !1);
                }), f24.length = 0);
                h11.forEach(function(a12) {
                    a12 && (a12.touched = !1);
                });
                if (!p10) return !1;
                f24.forEach(function(a12) {
                    this.addPoint(a12, !1, null, null, !1);
                }, this);
                null === this.xIncrement && this.xData && this.xData.length && (this.xIncrement = B2(this.xData), this.autoIncrement());
                return !0;
            };
            a9.prototype.setData = function(a10, b7, d4, c12) {
                var e16 = this, h11 = e16.points, f24 = h11 && h11.length || 0, g10 = e16.options, k20 = e16.chart, l13 = g10.dataSorting, m11 = e16.xAxis, A4 = g10.turboThreshold, p10 = this.xData, n10 = this.yData, q6 = e16.pointArrayMap;
                q6 = q6 && q6.length;
                var t6 = g10.keys, v6, r7 = 0, B3 = 1, y1 = null;
                a10 = a10 || [];
                var N2 = a10.length;
                b7 = K(b7, !0);
                l13 && l13.enabled && (a10 = this.sortData(a10));
                !1 !== c12 && N2 && f24 && !e16.cropped && !e16.hasGroupedData && e16.visible && !e16.isSeriesBoosting && (v6 = this.updateData(a10, d4));
                if (!v6) {
                    e16.xIncrement = null;
                    e16.colorCounter = 0;
                    this.parallelArrays.forEach(function(a12) {
                        e16[a12 + "Data"].length = 0;
                    });
                    if (A4 && N2 > A4) {
                        if (y1 = e16.getFirstValidPoint(a10), Q(y1)) for(d4 = 0; d4 < N2; d4++)p10[d4] = this.autoIncrement(), n10[d4] = a10[d4];
                        else if (S(y1)) {
                            if (q6) for(d4 = 0; d4 < N2; d4++)c12 = a10[d4], p10[d4] = c12[0], n10[d4] = c12.slice(1, q6 + 1);
                            else for(t6 && (r7 = t6.indexOf("x"), B3 = t6.indexOf("y"), r7 = 0 <= r7 ? r7 : 0, B3 = 0 <= B3 ? B3 : 1), d4 = 0; d4 < N2; d4++)c12 = a10[d4], p10[d4] = c12[r7], n10[d4] = c12[B3];
                        } else G6(12, !1, k20);
                    } else for(d4 = 0; d4 < N2; d4++)"undefined" !== typeof a10[d4] && (c12 = {
                        series: e16
                    }, e16.pointClass.prototype.applyOptions.apply(c12, [
                        a10[d4]
                    ]), e16.updateParallelArrays(c12, d4));
                    n10 && V(n10[0]) && G6(14, !0, k20);
                    e16.data = [];
                    e16.options.data = e16.userOptions.data = a10;
                    for(d4 = f24; d4--;)h11[d4] && h11[d4].destroy && h11[d4].destroy();
                    m11 && (m11.minRange = m11.userMinRange);
                    e16.isDirty = k20.isDirtyBox = !0;
                    e16.isDirtyData = !!h11;
                    d4 = !1;
                }
                "point" === g10.legendType && (this.processData(), this.generatePoints());
                b7 && k20.redraw(d4);
            };
            a9.prototype.sortData = function(a10) {
                var d4 = this, c12 = d4.options.dataSorting.sortKey || "y", e16 = function(a12, d5) {
                    return b6(d5) && a12.pointClass.prototype.optionsToObject.call({
                        series: a12
                    }, d5) || {
                    };
                };
                a10.forEach(function(b7, c15) {
                    a10[c15] = e16(d4, b7);
                    a10[c15].index = c15;
                }, this);
                a10.concat().sort(function(a12, b7) {
                    a12 = P2(c12, a12);
                    b7 = P2(c12, b7);
                    return b7 < a12 ? -1 : b7 > a12 ? 1 : 0;
                }).forEach(function(a12, b7) {
                    a12.x = b7;
                }, this);
                d4.linkedSeries && d4.linkedSeries.forEach(function(b7) {
                    var d5 = b7.options, c15 = d5.data;
                    d5.dataSorting && d5.dataSorting.enabled || !c15 || (c15.forEach(function(d6, h11) {
                        c15[h11] = e16(b7, d6);
                        a10[h11] && (c15[h11].x = a10[h11].x, c15[h11].index = h11);
                    }), b7.setData(c15, !1));
                });
                return a10;
            };
            a9.prototype.getProcessedData = function(a10) {
                var b7 = this.xAxis, d4 = this.options, c12 = d4.cropThreshold, e16 = a10 || this.getExtremesFromAll || d4.getExtremesFromAll, h11 = this.isCartesian;
                a10 = b7 && b7.val2lin;
                d4 = !(!b7 || !b7.logarithmic);
                var f24 = 0, g10 = this.xData, k20 = this.yData, l13 = this.requireSorting;
                var m11 = !1;
                var A4 = g10.length;
                if (b7) {
                    m11 = b7.getExtremes();
                    var p10 = m11.min;
                    var n10 = m11.max;
                    m11 = b7.categories && !b7.names.length;
                }
                if (h11 && this.sorted && !e16 && (!c12 || A4 > c12 || this.forceCrop)) {
                    if (g10[A4 - 1] < p10 || g10[0] > n10) g10 = [], k20 = [];
                    else if (this.yData && (g10[0] < p10 || g10[A4 - 1] > n10)) {
                        var q6 = this.cropData(this.xData, this.yData, p10, n10);
                        g10 = q6.xData;
                        k20 = q6.yData;
                        f24 = q6.start;
                        q6 = !0;
                    }
                }
                for(c12 = g10.length || 1; --c12;)if (b7 = d4 ? a10(g10[c12]) - a10(g10[c12 - 1]) : g10[c12] - g10[c12 - 1], 0 < b7 && ("undefined" === typeof t6 || b7 < t6)) var t6 = b7;
                else 0 > b7 && l13 && !m11 && (G6(15, !1, this.chart), l13 = !1);
                return {
                    xData: g10,
                    yData: k20,
                    cropped: q6,
                    cropStart: f24,
                    closestPointRange: t6
                };
            };
            a9.prototype.processData = function(a10) {
                var b7 = this.xAxis;
                if (this.isCartesian && !this.isDirty && !b7.isDirty && !this.yAxis.isDirty && !a10) return !1;
                a10 = this.getProcessedData();
                this.cropped = a10.cropped;
                this.cropStart = a10.cropStart;
                this.processedXData = a10.xData;
                this.processedYData = a10.yData;
                this.closestPointRange = this.basePointRange = a10.closestPointRange;
            };
            a9.prototype.cropData = function(a10, b7, d4, c12, e16) {
                var h11 = a10.length, f24, g10 = 0, k20 = h11;
                e16 = K(e16, this.cropShoulder);
                for(f24 = 0; f24 < h11; f24++)if (a10[f24] >= d4) {
                    g10 = Math.max(0, f24 - e16);
                    break;
                }
                for(d4 = f24; d4 < h11; d4++)if (a10[d4] > c12) {
                    k20 = d4 + e16;
                    break;
                }
                return {
                    xData: a10.slice(g10, k20),
                    yData: b7.slice(g10, k20),
                    start: g10,
                    end: k20
                };
            };
            a9.prototype.generatePoints = function() {
                var a10 = this.options, b7 = a10.data, d4 = this.processedXData, c12 = this.processedYData, e16 = this.pointClass, h11 = d4.length, f24 = this.cropStart || 0, g10 = this.hasGroupedData, k20 = a10.keys, l13 = [];
                a10 = a10.dataGrouping && a10.dataGrouping.groupAll ? f24 : 0;
                var m11, p11, n11 = this.data;
                if (!n11 && !g10) {
                    var q7 = [];
                    q7.length = b7.length;
                    n11 = this.data = q7;
                }
                k20 && g10 && (this.options.keys = !1);
                for(p11 = 0; p11 < h11; p11++){
                    q7 = f24 + p11;
                    if (g10) {
                        var t6 = (new e16).init(this, [
                            d4[p11]
                        ].concat(ha(c12[p11])));
                        t6.dataGroup = this.groupMap[a10 + p11];
                        t6.dataGroup.options && (t6.options = t6.dataGroup.options, y(t6, t6.dataGroup.options), delete t6.dataLabels);
                    } else (t6 = n11[q7]) || "undefined" === typeof b7[q7] || (n11[q7] = t6 = (new e16).init(this, b7[q7], d4[p11]));
                    t6 && (t6.index = g10 ? a10 + p11 : q7, l13[p11] = t6);
                }
                this.options.keys = k20;
                if (n11 && (h11 !== (m11 = n11.length) || g10)) for(p11 = 0; p11 < m11; p11++)p11 !== f24 || g10 || (p11 += h11), n11[p11] && (n11[p11].destroyElements(), n11[p11].plotX = void 0);
                this.data = n11;
                this.points = l13;
                F6(this, "afterGeneratePoints");
            };
            a9.prototype.getXExtremes = function(a10) {
                return {
                    min: O(a10),
                    max: B2(a10)
                };
            };
            a9.prototype.getExtremes = function(a10, b7) {
                var d4 = this.xAxis, c12 = this.yAxis, e16 = this.processedXData || this.xData, h11 = [], f24 = this.requireSorting ? this.cropShoulder : 0;
                c12 = c12 ? c12.positiveValuesOnly : !1;
                var g10, k20 = 0, l13 = 0, m11 = 0;
                a10 = a10 || this.stackedYData || this.processedYData || [];
                var p11 = a10.length;
                if (d4) {
                    var n11 = d4.getExtremes();
                    k20 = n11.min;
                    l13 = n11.max;
                }
                for(g10 = 0; g10 < p11; g10++){
                    var A4 = e16[g10];
                    n11 = a10[g10];
                    var q8 = (Q(n11) || S(n11)) && (n11.length || 0 < n11 || !c12);
                    A4 = b7 || this.getExtremesFromAll || this.options.getExtremesFromAll || this.cropped || !d4 || (e16[g10 + f24] || A4) >= k20 && (e16[g10 - f24] || A4) <= l13;
                    if (q8 && A4) {
                        if (q8 = n11.length) for(; q8--;)Q(n11[q8]) && (h11[m11++] = n11[q8]);
                        else h11[m11++] = n11;
                    }
                }
                a10 = {
                    dataMin: O(h11),
                    dataMax: B2(h11)
                };
                F6(this, "afterGetExtremes", {
                    dataExtremes: a10
                });
                return a10;
            };
            a9.prototype.applyExtremes = function() {
                var a10 = this.getExtremes();
                this.dataMin = a10.dataMin;
                this.dataMax = a10.dataMax;
                return a10;
            };
            a9.prototype.getFirstValidPoint = function(a10) {
                for(var b7 = a10.length, d4 = 0, c12 = null; null === c12 && d4 < b7;)c12 = a10[d4], d4++;
                return c12;
            };
            a9.prototype.translate = function() {
                this.processedXData || this.processData();
                this.generatePoints();
                var a10 = this.options, c12 = a10.stacking, e16 = this.xAxis, h11 = e16.categories, f24 = this.enabledDataSorting, g10 = this.yAxis, k20 = this.points, l13 = k20.length, m11 = !!this.modifyValue, p11 = this.pointPlacementToXValue(), n12 = !!p11, q9 = a10.threshold, v6 = a10.startFromThreshold ? q9 : 0, r7 = this.zoneAxis || "y", B3, y1, I = Number.MAX_VALUE;
                for(B3 = 0; B3 < l13; B3++){
                    var D4 = k20[B3], u5 = D4.x, G7 = void 0, x1 = void 0, w1 = D4.y, L5 = D4.low, z1 = c12 && g10.stacking && g10.stacking.stacks[(this.negStacks && w1 < (v6 ? 0 : q9) ? "-" : "") + this.stackKey];
                    if (g10.positiveValuesOnly && !g10.validatePositiveValue(w1) || e16.positiveValuesOnly && !e16.validatePositiveValue(u5)) D4.isNull = !0;
                    D4.plotX = y1 = d3(t4(e16.translate(u5, 0, 0, 0, 1, p11, "flags" === this.type), -100000, 100000));
                    if (c12 && this.visible && z1 && z1[u5]) {
                        var C1 = this.getStackIndicator(C1, u5, this.index);
                        D4.isNull || (G7 = z1[u5], x1 = G7.points[C1.key]);
                    }
                    S(x1) && (L5 = x1[0], w1 = x1[1], L5 === v6 && C1.key === z1[u5].base && (L5 = K(Q(q9) && q9, g10.min)), g10.positiveValuesOnly && 0 >= L5 && (L5 = null), D4.total = D4.stackTotal = G7.total, D4.percentage = G7.total && D4.y / G7.total * 100, D4.stackY = w1, this.irregularWidths || G7.setOffset(this.pointXOffset || 0, this.barW || 0));
                    D4.yBottom = b6(L5) ? t4(g10.translate(L5, 0, 1, 0, 1), -100000, 100000) : null;
                    m11 && (w1 = this.modifyValue(w1, D4));
                    D4.plotY = void 0;
                    Q(w1) && (G7 = g10.translate(w1, !1, !0, !1, !0), "undefined" !== typeof G7 && (D4.plotY = t4(G7, -100000, 100000)));
                    D4.isInside = this.isPointInside(D4);
                    D4.clientX = n12 ? d3(e16.translate(u5, 0, 0, 0, 1, p11)) : y1;
                    D4.negative = D4[r7] < (a10[r7 + "Threshold"] || q9 || 0);
                    D4.category = h11 && "undefined" !== typeof h11[D4.x] ? h11[D4.x] : D4.x;
                    if (!D4.isNull && !1 !== D4.visible) {
                        "undefined" !== typeof H2 && (I = Math.min(I, Math.abs(y1 - H2)));
                        var H2 = y1;
                    }
                    D4.zone = this.zones.length && D4.getZone();
                    !D4.graphic && this.group && f24 && (D4.isNew = !0);
                }
                this.closestPointRangePx = I;
                F6(this, "afterTranslate");
            };
            a9.prototype.getValidPoints = function(a10, b7, d4) {
                var c12 = this.chart;
                return (a10 || this.points || []).filter(function(a12) {
                    return b7 && !c12.isInsidePlot(a12.plotX, a12.plotY, {
                        inverted: c12.inverted
                    }) ? !1 : !1 !== a12.visible && (d4 || !a12.isNull);
                });
            };
            a9.prototype.getClipBox = function(a10, b7) {
                var d4 = this.options, c12 = this.chart, e16 = c12.inverted, h11 = this.xAxis, f24 = h11 && this.yAxis, g10 = c12.options.chart.scrollablePlotArea || {
                };
                a10 && !1 === d4.clip && f24 ? a10 = e16 ? {
                    y: -c12.chartWidth + f24.len + f24.pos,
                    height: c12.chartWidth,
                    width: c12.chartHeight,
                    x: -c12.chartHeight + h11.len + h11.pos
                } : {
                    y: -f24.pos,
                    height: c12.chartHeight,
                    width: c12.chartWidth,
                    x: -h11.pos
                } : (a10 = this.clipBox || c12.clipBox, b7 && (a10.width = c12.plotSizeX, a10.x = (c12.scrollablePixelsX || 0) * (g10.scrollPositionX || 0)));
                return b7 ? {
                    width: a10.width,
                    x: a10.x
                } : a10;
            };
            a9.prototype.getSharedClipKey = function(a10) {
                if (this.sharedClipKey) return this.sharedClipKey;
                var b7 = [
                    a10 && a10.duration,
                    a10 && a10.easing,
                    a10 && a10.defer,
                    this.getClipBox(a10).height,
                    this.options.xAxis,
                    this.options.yAxis
                ].join();
                if (!1 !== this.options.clip || a10) this.sharedClipKey = b7;
                return b7;
            };
            a9.prototype.setClip = function(a10) {
                var b7 = this.chart, d4 = this.options, c12 = b7.renderer, e16 = b7.inverted, h11 = this.clipBox, f24 = this.getClipBox(a10), g10 = this.getSharedClipKey(a10), k20 = b7.sharedClips[g10], l13 = b7.sharedClips[g10 + "m"];
                a10 && (f24.width = 0, e16 && (f24.x = b7.plotHeight + (!1 !== d4.clip ? 0 : b7.plotTop)));
                k20 ? b7.hasLoaded || k20.attr(f24) : (a10 && (b7.sharedClips[g10 + "m"] = l13 = c12.clipRect(e16 ? (b7.plotSizeX || 0) + 99 : -99, e16 ? -b7.plotLeft : -b7.plotTop, 99, e16 ? b7.chartWidth : b7.chartHeight)), b7.sharedClips[g10] = k20 = c12.clipRect(f24), k20.count = {
                    length: 0
                });
                a10 && !k20.count[this.index] && (k20.count[this.index] = !0, k20.count.length += 1);
                if (!1 !== d4.clip || a10) this.group.clip(a10 || h11 ? k20 : b7.clipRect), this.markerGroup.clip(l13);
                a10 || (k20.count[this.index] && (delete k20.count[this.index], --k20.count.length), 0 === k20.count.length && (h11 || (b7.sharedClips[g10] = k20.destroy()), l13 && (b7.sharedClips[g10 + "m"] = l13.destroy())));
            };
            a9.prototype.animate = function(a10) {
                var b7 = this.chart, d4 = c3(this.options.animation), e16 = this.sharedClipKey;
                if (a10) this.setClip(d4);
                else if (e16) {
                    a10 = b7.sharedClips[e16];
                    e16 = b7.sharedClips[e16 + "m"];
                    var h11 = this.getClipBox(d4, !0);
                    a10 && a10.animate(h11, d4);
                    e16 && e16.animate({
                        width: h11.width + 99,
                        x: h11.x - (b7.inverted ? 0 : 99)
                    }, d4);
                }
            };
            a9.prototype.afterAnimate = function() {
                this.setClip();
                F6(this, "afterAnimate");
                this.finishedAnimating = !0;
            };
            a9.prototype.drawPoints = function() {
                var a10 = this.points, b7 = this.chart, d4 = this.options.marker, c12 = this[this.specialGroup] || this.markerGroup, e16 = this.xAxis, h12 = K(d4.enabled, !e16 || e16.isRadial ? !0 : null, this.closestPointRangePx >= d4.enabledThreshold * d4.radius), f24, g10;
                if (!1 !== d4.enabled || this._hasPointMarkers) for(f24 = 0; f24 < a10.length; f24++){
                    var k20 = a10[f24];
                    var l13 = (g10 = k20.graphic) ? "animate" : "attr";
                    var m11 = k20.marker || {
                    };
                    var p11 = !!k20.marker;
                    if ((h12 && "undefined" === typeof m11.enabled || m11.enabled) && !k20.isNull && !1 !== k20.visible) {
                        var n12 = K(m11.symbol, this.symbol, "rect");
                        var q9 = this.markerAttribs(k20, k20.selected && "select");
                        this.enabledDataSorting && (k20.startXPos = e16.reversed ? -(q9.width || 0) : e16.width);
                        var t7 = !1 !== k20.isInside;
                        g10 ? g10[t7 ? "show" : "hide"](t7).animate(q9) : t7 && (0 < (q9.width || 0) || k20.hasImage) && (k20.graphic = g10 = b7.renderer.symbol(n12, q9.x, q9.y, q9.width, q9.height, p11 ? m11 : d4).add(c12), this.enabledDataSorting && b7.hasRendered && (g10.attr({
                            x: k20.startXPos
                        }), l13 = "animate"));
                        g10 && "animate" === l13 && g10[t7 ? "show" : "hide"](t7).animate(q9);
                        if (g10 && !b7.styledMode) g10[l13](this.pointAttribs(k20, k20.selected && "select"));
                        g10 && g10.addClass(k20.getClassName(), !0);
                    } else g10 && (k20.graphic = g10.destroy());
                }
            };
            a9.prototype.markerAttribs = function(a10, b7) {
                var d4 = this.options, c12 = d4.marker, e16 = a10.marker || {
                }, h12 = e16.symbol || c12.symbol, f24 = K(e16.radius, c12.radius);
                b7 && (c12 = c12.states[b7], b7 = e16.states && e16.states[b7], f24 = K(b7 && b7.radius, c12 && c12.radius, f24 + (c12 && c12.radiusPlus || 0)));
                a10.hasImage = h12 && 0 === h12.indexOf("url");
                a10.hasImage && (f24 = 0);
                a10 = {
                    x: d4.crisp ? Math.floor(a10.plotX - f24) : a10.plotX - f24,
                    y: a10.plotY - f24
                };
                f24 && (a10.width = a10.height = 2 * f24);
                return a10;
            };
            a9.prototype.pointAttribs = function(a10, b7) {
                var d4 = this.options.marker, c12 = a10 && a10.options, e16 = c12 && c12.marker || {
                }, h12 = c12 && c12.color, f24 = a10 && a10.color, g10 = a10 && a10.zone && a10.zone.color, k21 = this.color;
                a10 = K(e16.lineWidth, d4.lineWidth);
                c12 = 1;
                k21 = h12 || g10 || f24 || k21;
                h12 = e16.fillColor || d4.fillColor || k21;
                f24 = e16.lineColor || d4.lineColor || k21;
                b7 = b7 || "normal";
                d4 = d4.states[b7];
                b7 = e16.states && e16.states[b7] || {
                };
                a10 = K(b7.lineWidth, d4.lineWidth, a10 + K(b7.lineWidthPlus, d4.lineWidthPlus, 0));
                h12 = b7.fillColor || d4.fillColor || h12;
                f24 = b7.lineColor || d4.lineColor || f24;
                c12 = K(b7.opacity, d4.opacity, c12);
                return {
                    stroke: f24,
                    "stroke-width": a10,
                    fill: h12,
                    opacity: c12
                };
            };
            a9.prototype.destroy = function(a10) {
                var b7 = this, d4 = b7.chart, c12 = /AppleWebKit\/533/.test(k14.navigator.userAgent), e16 = b7.data || [], h12, f24, l14, n13;
                F6(b7, "destroy");
                this.removeEvents(a10);
                (b7.axisTypes || []).forEach(function(a12) {
                    (n13 = b7[a12]) && n13.series && (p6(n13.series, b7), n13.isDirty = n13.forceRedraw = !0);
                });
                b7.legendItem && b7.chart.legend.destroyItem(b7);
                for(f24 = e16.length; f24--;)(l14 = e16[f24]) && l14.destroy && l14.destroy();
                b7.clips && b7.clips.forEach(function(a12) {
                    return a12.destroy();
                });
                g2.clearTimeout(b7.animationTimeout);
                H1(b7, function(a12, b8) {
                    a12 instanceof m7 && !a12.survive && (h12 = c12 && "group" === b8 ? "hide" : "destroy", a12[h12]());
                });
                d4.hoverSeries === b7 && (d4.hoverSeries = void 0);
                p6(d4.series, b7);
                d4.orderSeries();
                H1(b7, function(d5, c15) {
                    a10 && "hcEvents" === c15 || delete b7[c15];
                });
            };
            a9.prototype.applyZones = function() {
                var a10 = this, b7 = this.chart, d4 = b7.renderer, c12 = this.zones, e16 = this.clips || [], h12 = this.graph, f24 = this.area, g10 = Math.max(b7.chartWidth, b7.chartHeight), k21 = this[(this.zoneAxis || "y") + "Axis"], l14 = b7.inverted, m12, p12, n13, q10, v6, r7, B3, y1, D5 = !1;
                if (c12.length && (h12 || f24) && k21 && "undefined" !== typeof k21.min) {
                    var I = k21.reversed;
                    var F7 = k21.horiz;
                    h12 && !this.showLine && h12.hide();
                    f24 && f24.hide();
                    var u6 = k21.getExtremes();
                    c12.forEach(function(c15, A5) {
                        m12 = I ? F7 ? b7.plotWidth : 0 : F7 ? 0 : k21.toPixels(u6.min) || 0;
                        m12 = t4(K(p12, m12), 0, g10);
                        p12 = t4(Math.round(k21.toPixels(K(c15.value, u6.max), !0) || 0), 0, g10);
                        D5 && (m12 = p12 = k21.toPixels(u6.max));
                        q10 = Math.abs(m12 - p12);
                        v6 = Math.min(m12, p12);
                        r7 = Math.max(m12, p12);
                        k21.isXAxis ? (n13 = {
                            x: l14 ? r7 : v6,
                            y: 0,
                            width: q10,
                            height: g10
                        }, F7 || (n13.x = b7.plotHeight - n13.x)) : (n13 = {
                            x: 0,
                            y: l14 ? r7 : v6,
                            width: g10,
                            height: q10
                        }, F7 && (n13.y = b7.plotWidth - n13.y));
                        l14 && d4.isVML && (n13 = k21.isXAxis ? {
                            x: 0,
                            y: I ? v6 : r7,
                            height: n13.width,
                            width: b7.chartWidth
                        } : {
                            x: n13.y - b7.plotLeft - b7.spacingBox.x,
                            y: 0,
                            width: n13.height,
                            height: b7.chartHeight
                        });
                        e16[A5] ? e16[A5].animate(n13) : e16[A5] = d4.clipRect(n13);
                        B3 = a10["zone-area-" + A5];
                        y1 = a10["zone-graph-" + A5];
                        h12 && y1 && y1.clip(e16[A5]);
                        f24 && B3 && B3.clip(e16[A5]);
                        D5 = c15.value > u6.max;
                        a10.resetZones && 0 === p12 && (p12 = void 0);
                    });
                    this.clips = e16;
                } else a10.visible && (h12 && h12.show(!0), f24 && f24.show(!0));
            };
            a9.prototype.invertGroups = function(a10) {
                function b7() {
                    [
                        "group",
                        "markerGroup"
                    ].forEach(function(b8) {
                        d4[b8] && (c12.renderer.isVML && d4[b8].attr({
                            width: d4.yAxis.len,
                            height: d4.xAxis.len
                        }), d4[b8].width = d4.yAxis.len, d4[b8].height = d4.xAxis.len, d4[b8].invert(d4.isRadialSeries ? !1 : a10));
                    });
                }
                var d4 = this, c12 = d4.chart;
                d4.xAxis && (d4.eventsToUnbind.push(D2(c12, "resize", b7)), b7(), d4.invertGroups = b7);
            };
            a9.prototype.plotGroup = function(a10, d4, c12, e16, h12) {
                var f24 = this[a10], g10 = !f24;
                c12 = {
                    visibility: c12,
                    zIndex: e16 || 0.1
                };
                "undefined" === typeof this.opacity || this.chart.styledMode || "inactive" === this.state || (c12.opacity = this.opacity);
                g10 && (this[a10] = f24 = this.chart.renderer.g().add(h12));
                f24.addClass("highcharts-" + d4 + " highcharts-series-" + this.index + " highcharts-" + this.type + "-series " + (b6(this.colorIndex) ? "highcharts-color-" + this.colorIndex + " " : "") + (this.options.className || "") + (f24.hasClass("highcharts-tracker") ? " highcharts-tracker" : ""), !0);
                f24.attr(c12)[g10 ? "attr" : "animate"](this.getPlotBox());
                return f24;
            };
            a9.prototype.getPlotBox = function() {
                var a10 = this.chart, b7 = this.xAxis, d4 = this.yAxis;
                a10.inverted && (b7 = d4, d4 = this.xAxis);
                return {
                    translateX: b7 ? b7.left : a10.plotLeft,
                    translateY: d4 ? d4.top : a10.plotTop,
                    scaleX: 1,
                    scaleY: 1
                };
            };
            a9.prototype.removeEvents = function(a10) {
                a10 || la(this);
                this.eventsToUnbind.length && (this.eventsToUnbind.forEach(function(a12) {
                    a12();
                }), this.eventsToUnbind.length = 0);
            };
            a9.prototype.render = function() {
                var a10 = this, b7 = a10.chart, d4 = a10.options, e16 = c3(d4.animation), h12 = a10.visible ? "inherit" : "hidden", f24 = d4.zIndex, g10 = a10.hasRendered, k21 = b7.seriesGroup, l14 = b7.inverted, m12 = !a10.finishedAnimating && b7.renderer.isSVG && e16.duration;
                F6(this, "render");
                var p12 = a10.plotGroup("group", "series", h12, f24, k21);
                a10.markerGroup = a10.plotGroup("markerGroup", "markers", h12, f24, k21);
                m12 && a10.animate && a10.animate(!0);
                p12.inverted = K(a10.invertible, a10.isCartesian) ? l14 : !1;
                a10.drawGraph && (a10.drawGraph(), a10.applyZones());
                a10.visible && a10.drawPoints();
                a10.drawDataLabels && a10.drawDataLabels();
                a10.redrawPoints && a10.redrawPoints();
                a10.drawTracker && !1 !== a10.options.enableMouseTracking && a10.drawTracker();
                a10.invertGroups(l14);
                !1 === d4.clip || a10.sharedClipKey || g10 || p12.clip(b7.clipRect);
                m12 && a10.animate && a10.animate();
                g10 || (m12 && e16.defer && (m12 += e16.defer), a10.animationTimeout = R(function() {
                    a10.afterAnimate();
                }, m12 || 0));
                a10.isDirty = !1;
                a10.hasRendered = !0;
                F6(a10, "afterRender");
            };
            a9.prototype.redraw = function() {
                var a10 = this.chart, b7 = this.isDirty || this.isDirtyData, d4 = this.group, c12 = this.xAxis, e16 = this.yAxis;
                d4 && (a10.inverted && d4.attr({
                    width: a10.plotWidth,
                    height: a10.plotHeight
                }), d4.animate({
                    translateX: K(c12 && c12.left, a10.plotLeft),
                    translateY: K(e16 && e16.top, a10.plotTop)
                }));
                this.translate();
                this.render();
                b7 && delete this.kdTree;
            };
            a9.prototype.searchPoint = function(a10, b7) {
                var d4 = this.xAxis, c12 = this.yAxis, e16 = this.chart.inverted;
                return this.searchKDTree({
                    clientX: e16 ? d4.len - a10.chartY + d4.pos : a10.chartX - d4.pos,
                    plotY: e16 ? c12.len - a10.chartX + c12.pos : a10.chartY - c12.pos
                }, b7, a10);
            };
            a9.prototype.buildKDTree = function(a10) {
                function b7(a12, c12, e16) {
                    var h12 = a12 && a12.length;
                    if (h12) {
                        var f24 = d4.kdAxisArray[c12 % e16];
                        a12.sort(function(a13, b8) {
                            return a13[f24] - b8[f24];
                        });
                        h12 = Math.floor(h12 / 2);
                        return {
                            point: a12[h12],
                            left: b7(a12.slice(0, h12), c12 + 1, e16),
                            right: b7(a12.slice(h12 + 1), c12 + 1, e16)
                        };
                    }
                }
                this.buildingKdTree = !0;
                var d4 = this, c12 = -1 < d4.options.findNearestPointBy.indexOf("y") ? 2 : 1;
                delete d4.kdTree;
                R(function() {
                    d4.kdTree = b7(d4.getValidPoints(null, !d4.directTouch), c12, c12);
                    d4.buildingKdTree = !1;
                }, d4.options.kdNow || a10 && "touchstart" === a10.type ? 0 : 1);
            };
            a9.prototype.searchKDTree = function(a10, d4, c12) {
                function e16(a12, d5, c15, l14) {
                    var m12 = d5.point, p12 = h12.kdAxisArray[c15 % l14], n13 = m12, q10 = b6(a12[f25]) && b6(m12[f25]) ? Math.pow(a12[f25] - m12[f25], 2) : null;
                    var t8 = b6(a12[g10]) && b6(m12[g10]) ? Math.pow(a12[g10] - m12[g10], 2) : null;
                    t8 = (q10 || 0) + (t8 || 0);
                    m12.dist = b6(t8) ? Math.sqrt(t8) : Number.MAX_VALUE;
                    m12.distX = b6(q10) ? Math.sqrt(q10) : Number.MAX_VALUE;
                    p12 = a12[p12] - m12[p12];
                    t8 = 0 > p12 ? "left" : "right";
                    q10 = 0 > p12 ? "right" : "left";
                    d5[t8] && (t8 = e16(a12, d5[t8], c15 + 1, l14), n13 = t8[k21] < n13[k21] ? t8 : m12);
                    d5[q10] && Math.sqrt(p12 * p12) < n13[k21] && (a12 = e16(a12, d5[q10], c15 + 1, l14), n13 = a12[k21] < n13[k21] ? a12 : n13);
                    return n13;
                }
                var h12 = this, f25 = this.kdAxisArray[0], g10 = this.kdAxisArray[1], k21 = d4 ? "distX" : "dist";
                d4 = -1 < h12.options.findNearestPointBy.indexOf("y") ? 2 : 1;
                this.kdTree || this.buildingKdTree || this.buildKDTree(c12);
                if (this.kdTree) return e16(a10, this.kdTree, d4, d4);
            };
            a9.prototype.pointPlacementToXValue = function() {
                var a10 = this.options, b7 = a10.pointRange, d4 = this.xAxis;
                a10 = a10.pointPlacement;
                "between" === a10 && (a10 = d4.reversed ? -0.5 : 0.5);
                return Q(a10) ? a10 * (b7 || d4.pointRange) : 0;
            };
            a9.prototype.isPointInside = function(a10) {
                return "undefined" !== typeof a10.plotY && "undefined" !== typeof a10.plotX && 0 <= a10.plotY && a10.plotY <= this.yAxis.len && 0 <= a10.plotX && a10.plotX <= this.xAxis.len;
            };
            a9.prototype.drawTracker = function() {
                var a10 = this, b7 = a10.options, d4 = b7.trackByArea, c12 = [].concat(d4 ? a10.areaPath : a10.graphPath), e16 = a10.chart, h12 = e16.pointer, f25 = e16.renderer, g10 = e16.options.tooltip.snap, k21 = a10.tracker, l14 = function(b8) {
                    if (e16.hoverSeries !== a10) a10.onMouseOver();
                }, m12 = "rgba(192,192,192," + (q3 ? 0.0001 : 0.002) + ")";
                k21 ? k21.attr({
                    d: c12
                }) : a10.graph && (a10.tracker = f25.path(c12).attr({
                    visibility: a10.visible ? "visible" : "hidden",
                    zIndex: 2
                }).addClass(d4 ? "highcharts-tracker-area" : "highcharts-tracker-line").add(a10.group), e16.styledMode || a10.tracker.attr({
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round",
                    stroke: m12,
                    fill: d4 ? m12 : "none",
                    "stroke-width": a10.graph.strokeWidth() + (d4 ? 0 : 2 * g10)
                }), [
                    a10.tracker,
                    a10.markerGroup,
                    a10.dataLabelsGroup
                ].forEach(function(a12) {
                    if (a12 && (a12.addClass("highcharts-tracker").on("mouseover", l14).on("mouseout", function(a13) {
                        h12.onTrackerMouseOut(a13);
                    }), b7.cursor && !e16.styledMode && a12.css({
                        cursor: b7.cursor
                    }), v4)) a12.on("touchstart", l14);
                }));
                F6(this, "afterDrawTracker");
            };
            a9.prototype.addPoint = function(a10, b7, d4, c12, e16) {
                var h12 = this.options, f25 = this.data, g10 = this.chart, k21 = this.xAxis;
                k21 = k21 && k21.hasNames && k21.names;
                var l14 = h12.data, m12 = this.xData, p12;
                b7 = K(b7, !0);
                var n13 = {
                    series: this
                };
                this.pointClass.prototype.applyOptions.apply(n13, [
                    a10
                ]);
                var q10 = n13.x;
                var t8 = m12.length;
                if (this.requireSorting && q10 < m12[t8 - 1]) for(p12 = !0; t8 && m12[t8 - 1] > q10;)t8--;
                this.updateParallelArrays(n13, "splice", t8, 0, 0);
                this.updateParallelArrays(n13, t8);
                k21 && n13.name && (k21[q10] = n13.name);
                l14.splice(t8, 0, a10);
                p12 && (this.data.splice(t8, 0, null), this.processData());
                "point" === h12.legendType && this.generatePoints();
                d4 && (f25[0] && f25[0].remove ? f25[0].remove(!1) : (f25.shift(), this.updateParallelArrays(n13, "shift"), l14.shift()));
                !1 !== e16 && F6(this, "addPoint", {
                    point: n13
                });
                this.isDirtyData = this.isDirty = !0;
                b7 && g10.redraw(c12);
            };
            a9.prototype.removePoint = function(a10, b7, d4) {
                var c12 = this, h12 = c12.data, f25 = h12[a10], g10 = c12.points, k21 = c12.chart, l14 = function() {
                    g10 && g10.length === h12.length && g10.splice(a10, 1);
                    h12.splice(a10, 1);
                    c12.options.data.splice(a10, 1);
                    c12.updateParallelArrays(f25 || {
                        series: c12
                    }, "splice", a10, 1);
                    f25 && f25.destroy();
                    c12.isDirty = !0;
                    c12.isDirtyData = !0;
                    b7 && k21.redraw();
                };
                e5(d4, k21);
                b7 = K(b7, !0);
                f25 ? f25.firePointEvent("remove", null, l14) : l14();
            };
            a9.prototype.remove = function(a10, b7, d4, c12) {
                function e16() {
                    h12.destroy(c12);
                    f25.isDirtyLegend = f25.isDirtyBox = !0;
                    f25.linkSeries();
                    K(a10, !0) && f25.redraw(b7);
                }
                var h12 = this, f25 = h12.chart;
                !1 !== d4 ? F6(h12, "remove", null, e16) : e16();
            };
            a9.prototype.update = function(a10, b7) {
                a10 = h9(a10, this.userOptions);
                F6(this, "update", {
                    options: a10
                });
                var d4 = this, c12 = d4.chart, e16 = d4.userOptions, f25 = d4.initialType || d4.type, g10 = c12.options.plotOptions, k21 = r2[f25].prototype, l14 = d4.finishedAnimating && {
                    animation: !1
                }, m12 = {
                }, p12, n13 = [
                    "eventOptions",
                    "navigatorSeries",
                    "baseSeries"
                ], q10 = a10.type || e16.type || c12.options.chart.type, t8 = !(this.hasDerivedData || q10 && q10 !== this.type || "undefined" !== typeof a10.pointStart || "undefined" !== typeof a10.pointInterval || "undefined" !== typeof a10.relativeXValue || d4.hasOptionChanged("dataGrouping") || d4.hasOptionChanged("pointStart") || d4.hasOptionChanged("pointInterval") || d4.hasOptionChanged("pointIntervalUnit") || d4.hasOptionChanged("keys"));
                q10 = q10 || f25;
                t8 && (n13.push("data", "isDirtyData", "points", "processedXData", "processedYData", "xIncrement", "cropped", "_hasPointMarkers", "_hasPointLabels", "clips", "nodes", "layout", "mapMap", "mapData", "minY", "maxY", "minX", "maxX"), !1 !== a10.visible && n13.push("area", "graph"), d4.parallelArrays.forEach(function(a12) {
                    n13.push(a12 + "Data");
                }), a10.data && (a10.dataSorting && y(d4.options.dataSorting, a10.dataSorting), this.setData(a10.data, !1)));
                a10 = M1(e16, l14, {
                    index: "undefined" === typeof e16.index ? d4.index : e16.index,
                    pointStart: K(g10 && g10.series && g10.series.pointStart, e16.pointStart, d4.xData[0])
                }, !t8 && {
                    data: d4.options.data
                }, a10);
                t8 && a10.data && (a10.data = d4.options.data);
                n13 = [
                    "group",
                    "markerGroup",
                    "dataLabelsGroup",
                    "transformGroup"
                ].concat(n13);
                n13.forEach(function(a12) {
                    n13[a12] = d4[a12];
                    delete d4[a12];
                });
                g10 = !1;
                if (r2[q10]) {
                    if (g10 = q10 !== d4.type, d4.remove(!1, !1, !1, !0), g10) {
                        if (Object.setPrototypeOf) Object.setPrototypeOf(d4, r2[q10].prototype);
                        else {
                            l14 = Object.hasOwnProperty.call(d4, "hcEvents") && d4.hcEvents;
                            for(p12 in k21)d4[p12] = void 0;
                            y(d4, r2[q10].prototype);
                            l14 ? d4.hcEvents = l14 : delete d4.hcEvents;
                        }
                    }
                } else G6(17, !0, c12, {
                    missingModuleFor: q10
                });
                n13.forEach(function(a12) {
                    d4[a12] = n13[a12];
                });
                d4.init(c12, a10);
                if (t8 && this.points) {
                    var v6 = d4.options;
                    !1 === v6.visible ? (m12.graphic = 1, m12.dataLabel = 1) : d4._hasPointLabels || (a10 = v6.marker, k21 = v6.dataLabels, !a10 || !1 !== a10.enabled && (e16.marker && e16.marker.symbol) === a10.symbol || (m12.graphic = 1), k21 && !1 === k21.enabled && (m12.dataLabel = 1));
                    this.points.forEach(function(a12) {
                        a12 && a12.series && (a12.resolveColor(), Object.keys(m12).length && a12.destroyElements(m12), !1 === v6.showInLegend && a12.legendItem && c12.legend.destroyItem(a12));
                    }, this);
                }
                d4.initialType = f25;
                c12.linkSeries();
                g10 && d4.linkedSeries.length && (d4.isDirtyData = !0);
                F6(this, "afterUpdate");
                K(b7, !0) && c12.redraw(t8 ? void 0 : !1);
            };
            a9.prototype.setName = function(a10) {
                this.name = this.options.name = this.userOptions.name = a10;
                this.chart.isDirtyLegend = !0;
            };
            a9.prototype.hasOptionChanged = function(a10) {
                var b7 = this.options[a10], d4 = this.chart.options.plotOptions, c12 = this.userOptions[a10];
                return c12 ? b7 !== c12 : b7 !== K(d4 && d4[this.type] && d4[this.type][a10], d4 && d4.series && d4.series[a10], b7);
            };
            a9.prototype.onMouseOver = function() {
                var a10 = this.chart, b7 = a10.hoverSeries;
                a10.pointer.setHoverChartIndex();
                if (b7 && b7 !== this) b7.onMouseOut();
                this.options.events.mouseOver && F6(this, "mouseOver");
                this.setState("hover");
                a10.hoverSeries = this;
            };
            a9.prototype.onMouseOut = function() {
                var a10 = this.options, b7 = this.chart, d4 = b7.tooltip, c12 = b7.hoverPoint;
                b7.hoverSeries = null;
                if (c12) c12.onMouseOut();
                this && a10.events.mouseOut && F6(this, "mouseOut");
                !d4 || this.stickyTracking || d4.shared && !this.noSharedTooltip || d4.hide();
                b7.series.forEach(function(a12) {
                    a12.setState("", !0);
                });
            };
            a9.prototype.setState = function(a10, b7) {
                var d4 = this, c12 = d4.options, e16 = d4.graph, h12 = c12.inactiveOtherPoints, f25 = c12.states, g10 = K(f25[a10 || "normal"] && f25[a10 || "normal"].animation, d4.chart.options.chart.animation), k21 = c12.lineWidth, l14 = 0, m12 = c12.opacity;
                a10 = a10 || "";
                if (d4.state !== a10 && ([
                    d4.group,
                    d4.markerGroup,
                    d4.dataLabelsGroup
                ].forEach(function(b8) {
                    b8 && (d4.state && b8.removeClass("highcharts-series-" + d4.state), a10 && b8.addClass("highcharts-series-" + a10));
                }), d4.state = a10, !d4.chart.styledMode)) {
                    if (f25[a10] && !1 === f25[a10].enabled) return;
                    a10 && (k21 = f25[a10].lineWidth || k21 + (f25[a10].lineWidthPlus || 0), m12 = K(f25[a10].opacity, m12));
                    if (e16 && !e16.dashstyle) for(c12 = {
                        "stroke-width": k21
                    }, e16.animate(c12, g10); d4["zone-graph-" + l14];)d4["zone-graph-" + l14].animate(c12, g10), l14 += 1;
                    h12 || [
                        d4.group,
                        d4.markerGroup,
                        d4.dataLabelsGroup,
                        d4.labelBySeries
                    ].forEach(function(a12) {
                        a12 && a12.animate({
                            opacity: m12
                        }, g10);
                    });
                }
                b7 && h12 && d4.points && d4.setAllPointsToState(a10 || void 0);
            };
            a9.prototype.setAllPointsToState = function(a10) {
                this.points.forEach(function(b7) {
                    b7.setState && b7.setState(a10);
                });
            };
            a9.prototype.setVisible = function(a10, b7) {
                var d4 = this, c12 = d4.chart, e16 = d4.legendItem, h12 = c12.options.chart.ignoreHiddenSeries, f25 = d4.visible, g10 = (d4.visible = a10 = d4.options.visible = d4.userOptions.visible = "undefined" === typeof a10 ? !f25 : a10) ? "show" : "hide";
                [
                    "group",
                    "dataLabelsGroup",
                    "markerGroup",
                    "tracker",
                    "tt"
                ].forEach(function(a12) {
                    if (d4[a12]) d4[a12][g10]();
                });
                if (c12.hoverSeries === d4 || (c12.hoverPoint && c12.hoverPoint.series) === d4) d4.onMouseOut();
                e16 && c12.legend.colorizeItem(d4, a10);
                d4.isDirty = !0;
                d4.options.stacking && c12.series.forEach(function(a12) {
                    a12.options.stacking && a12.visible && (a12.isDirty = !0);
                });
                d4.linkedSeries.forEach(function(b8) {
                    b8.setVisible(a10, !1);
                });
                h12 && (c12.isDirtyBox = !0);
                F6(d4, g10);
                !1 !== b7 && c12.redraw();
            };
            a9.prototype.show = function() {
                this.setVisible(!0);
            };
            a9.prototype.hide = function() {
                this.setVisible(!1);
            };
            a9.prototype.select = function(a10) {
                this.selected = a10 = this.options.selected = "undefined" === typeof a10 ? !this.selected : a10;
                this.checkbox && (this.checkbox.checked = a10);
                F6(this, a10 ? "select" : "unselect");
            };
            a9.prototype.shouldShowTooltip = function(a10, b7, d4) {
                (void 0) === d4 && (d4 = {
                });
                d4.series = this;
                d4.visiblePlotOnly = !0;
                return this.chart.isInsidePlot(a10, b7, d4);
            };
            a9.defaultOptions = u2;
            return a9;
        })();
        y(a1.prototype, {
            axisTypes: [
                "xAxis",
                "yAxis"
            ],
            coll: "series",
            colorCounter: 0,
            cropShoulder: 1,
            directTouch: !1,
            drawLegendSymbol: z.drawLineMarker,
            isCartesian: !0,
            kdAxisArray: [
                "clientX",
                "plotY"
            ],
            parallelArrays: [
                "x",
                "y"
            ],
            pointClass: J,
            requireSorting: !0,
            sorted: !0
        });
        n2.series = a1;
        return a1;
    });
    M(a3, "Extensions/ScrollablePlotArea.js", [
        a3["Core/Animation/AnimationUtilities.js"],
        a3["Core/Axis/Axis.js"],
        a3["Core/Chart/Chart.js"],
        a3["Core/Series/Series.js"],
        a3["Core/Renderer/RendererRegistry.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w2, C2, E, z2, x2) {
        var r2 = a1.stop, u2 = x2.addEvent, n2 = x2.createElement, m7 = x2.merge, g2 = x2.pick;
        u2(C2, "afterSetChartSize", function(a9) {
            var c3 = this.options.chart.scrollablePlotArea, g10 = c3 && c3.minWidth;
            c3 = c3 && c3.minHeight;
            if (!this.renderer.forExport) {
                if (g10) {
                    if (this.scrollablePixelsX = g10 = Math.max(0, g10 - this.chartWidth)) {
                        this.scrollablePlotBox = this.renderer.scrollablePlotBox = m7(this.plotBox);
                        this.plotBox.width = this.plotWidth += g10;
                        this.inverted ? this.clipBox.height += g10 : this.clipBox.width += g10;
                        var f14 = {
                            1: {
                                name: "right",
                                value: g10
                            }
                        };
                    }
                } else c3 && (this.scrollablePixelsY = g10 = Math.max(0, c3 - this.chartHeight)) && (this.scrollablePlotBox = this.renderer.scrollablePlotBox = m7(this.plotBox), this.plotBox.height = this.plotHeight += g10, this.inverted ? this.clipBox.width += g10 : this.clipBox.height += g10, f14 = {
                    2: {
                        name: "bottom",
                        value: g10
                    }
                });
                f14 && !a9.skipAxes && this.axes.forEach(function(a10) {
                    f14[a10.side] ? a10.getPlotLinePath = function() {
                        var c12 = f14[a10.side].name, e5 = this[c12];
                        this[c12] = e5 - f14[a10.side].value;
                        var g11 = w2.prototype.getPlotLinePath.apply(this, arguments);
                        this[c12] = e5;
                        return g11;
                    } : (a10.setAxisSize(), a10.setAxisTranslation());
                });
            }
        });
        u2(C2, "render", function() {
            this.scrollablePixelsX || this.scrollablePixelsY ? (this.setUpScrolling && this.setUpScrolling(), this.applyFixed()) : this.fixedDiv && this.applyFixed();
        });
        C2.prototype.setUpScrolling = function() {
            var a9 = this, e5 = {
                WebkitOverflowScrolling: "touch",
                overflowX: "hidden",
                overflowY: "hidden"
            };
            this.scrollablePixelsX && (e5.overflowX = "auto");
            this.scrollablePixelsY && (e5.overflowY = "auto");
            this.scrollingParent = n2("div", {
                className: "highcharts-scrolling-parent"
            }, {
                position: "relative"
            }, this.renderTo);
            this.scrollingContainer = n2("div", {
                className: "highcharts-scrolling"
            }, e5, this.scrollingParent);
            u2(this.scrollingContainer, "scroll", function() {
                a9.pointer && delete a9.pointer.chartPosition;
            });
            this.innerContainer = n2("div", {
                className: "highcharts-inner-container"
            }, null, this.scrollingContainer);
            this.innerContainer.appendChild(this.container);
            this.setUpScrolling = null;
        };
        C2.prototype.moveFixedElements = function() {
            var a9 = this.container, e5 = this.fixedRenderer, g10 = ".highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-drillup-button .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "), f25;
            this.scrollablePixelsX && !this.inverted ? f25 = ".highcharts-yaxis" : this.scrollablePixelsX && this.inverted ? f25 = ".highcharts-xaxis" : this.scrollablePixelsY && !this.inverted ? f25 = ".highcharts-xaxis" : this.scrollablePixelsY && this.inverted && (f25 = ".highcharts-yaxis");
            f25 && g10.push(f25 + ":not(.highcharts-radial-axis)", f25 + "-labels:not(.highcharts-radial-axis-labels)");
            g10.forEach(function(c3) {
                [].forEach.call(a9.querySelectorAll(c3), function(a10) {
                    (a10.namespaceURI === e5.SVG_NS ? e5.box : e5.box.parentNode).appendChild(a10);
                    a10.style.pointerEvents = "auto";
                });
            });
        };
        C2.prototype.applyFixed = function() {
            var a9 = !this.fixedDiv, e5 = this.options.chart, l7 = e5.scrollablePlotArea, f25 = z2.getRendererType();
            a9 ? (this.fixedDiv = n2("div", {
                className: "highcharts-fixed"
            }, {
                position: "absolute",
                overflow: "hidden",
                pointerEvents: "none",
                zIndex: (e5.style && e5.style.zIndex || 0) + 2,
                top: 0
            }, null, !0), this.scrollingContainer && this.scrollingContainer.parentNode.insertBefore(this.fixedDiv, this.scrollingContainer), this.renderTo.style.overflow = "visible", this.fixedRenderer = e5 = new f25(this.fixedDiv, this.chartWidth, this.chartHeight, this.options.chart.style), this.scrollableMask = e5.path().attr({
                fill: this.options.chart.backgroundColor || "#fff",
                "fill-opacity": g2(l7.opacity, 0.85),
                zIndex: -1
            }).addClass("highcharts-scrollable-mask").add(), u2(this, "afterShowResetZoom", this.moveFixedElements), u2(this, "afterDrilldown", this.moveFixedElements), u2(this, "afterLayOutTitles", this.moveFixedElements)) : this.fixedRenderer.setSize(this.chartWidth, this.chartHeight);
            if (this.scrollableDirty || a9) this.scrollableDirty = !1, this.moveFixedElements();
            e5 = this.chartWidth + (this.scrollablePixelsX || 0);
            f25 = this.chartHeight + (this.scrollablePixelsY || 0);
            r2(this.container);
            this.container.style.width = e5 + "px";
            this.container.style.height = f25 + "px";
            this.renderer.boxWrapper.attr({
                width: e5,
                height: f25,
                viewBox: [
                    0,
                    0,
                    e5,
                    f25
                ].join(" ")
            });
            this.chartBackground.attr({
                width: e5,
                height: f25
            });
            this.scrollingContainer.style.height = this.chartHeight + "px";
            a9 && (l7.scrollPositionX && (this.scrollingContainer.scrollLeft = this.scrollablePixelsX * l7.scrollPositionX), l7.scrollPositionY && (this.scrollingContainer.scrollTop = this.scrollablePixelsY * l7.scrollPositionY));
            f25 = this.axisOffset;
            a9 = this.plotTop - f25[0] - 1;
            l7 = this.plotLeft - f25[3] - 1;
            e5 = this.plotTop + this.plotHeight + f25[2] + 1;
            f25 = this.plotLeft + this.plotWidth + f25[1] + 1;
            var m12 = this.plotLeft + this.plotWidth - (this.scrollablePixelsX || 0), q3 = this.plotTop + this.plotHeight - (this.scrollablePixelsY || 0);
            a9 = this.scrollablePixelsX ? [
                [
                    "M",
                    0,
                    a9
                ],
                [
                    "L",
                    this.plotLeft - 1,
                    a9
                ],
                [
                    "L",
                    this.plotLeft - 1,
                    e5
                ],
                [
                    "L",
                    0,
                    e5
                ],
                [
                    "Z"
                ],
                [
                    "M",
                    m12,
                    a9
                ],
                [
                    "L",
                    this.chartWidth,
                    a9
                ],
                [
                    "L",
                    this.chartWidth,
                    e5
                ],
                [
                    "L",
                    m12,
                    e5
                ],
                [
                    "Z"
                ]
            ] : this.scrollablePixelsY ? [
                [
                    "M",
                    l7,
                    0
                ],
                [
                    "L",
                    l7,
                    this.plotTop - 1
                ],
                [
                    "L",
                    f25,
                    this.plotTop - 1
                ],
                [
                    "L",
                    f25,
                    0
                ],
                [
                    "Z"
                ],
                [
                    "M",
                    l7,
                    q3
                ],
                [
                    "L",
                    l7,
                    this.chartHeight
                ],
                [
                    "L",
                    f25,
                    this.chartHeight
                ],
                [
                    "L",
                    f25,
                    q3
                ],
                [
                    "Z"
                ]
            ] : [
                [
                    "M",
                    0,
                    0
                ]
            ];
            "adjustHeight" !== this.redrawTrigger && this.scrollableMask.attr({
                d: a9
            });
        };
        u2(w2, "afterInit", function() {
            this.chart.scrollableDirty = !0;
        });
        u2(E, "show", function() {
            this.chart.scrollableDirty = !0;
        });
    });
    M(a3, "Core/Axis/StackingAxis.js", [
        a3["Core/Animation/AnimationUtilities.js"],
        a3["Core/Axis/Axis.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w2, C2) {
        var r2 = a1.getDeferredAnimation, z2 = C2.addEvent, x2 = C2.destroyObjectProperties, J = C2.fireEvent, u2 = C2.isNumber, n2 = C2.objectEach, m7;
        (function(a9) {
            function c3() {
                var a10 = this.stacking;
                if (a10) {
                    var c12 = a10.stacks;
                    n2(c12, function(a12, e5) {
                        x2(a12);
                        c12[e5] = null;
                    });
                    a10 && a10.stackTotalGroup && a10.stackTotalGroup.destroy();
                }
            }
            function e5() {
                this.stacking || (this.stacking = new f25(this));
            }
            var g2 = [];
            a9.compose = function(a10) {
                -1 === g2.indexOf(a10) && (g2.push(a10), z2(a10, "init", e5), z2(a10, "destroy", c3));
                return a10;
            };
            var f25 = function() {
                function a10(a12) {
                    this.oldStacks = {
                    };
                    this.stacks = {
                    };
                    this.stacksTouched = 0;
                    this.axis = a12;
                }
                a10.prototype.buildStacks = function() {
                    var a12 = this.axis, c15 = a12.series, e16 = a12.options.reversedStacks, f26 = c15.length, g10;
                    if (!a12.isXAxis) {
                        this.usePercentage = !1;
                        for(g10 = f26; g10--;){
                            var l7 = c15[e16 ? g10 : f26 - g10 - 1];
                            l7.setStackedPoints();
                            l7.setGroupedPoints();
                        }
                        for(g10 = 0; g10 < f26; g10++)c15[g10].modifyStacks();
                        J(a12, "afterBuildStacks");
                    }
                };
                a10.prototype.cleanStacks = function() {
                    if (!this.axis.isXAxis) {
                        if (this.oldStacks) var a12 = this.stacks = this.oldStacks;
                        n2(a12, function(a13) {
                            n2(a13, function(a14) {
                                a14.cumulative = a14.total;
                            });
                        });
                    }
                };
                a10.prototype.resetStacks = function() {
                    var a13 = this, c15 = a13.stacks;
                    a13.axis.isXAxis || n2(c15, function(c16) {
                        n2(c16, function(e16, f26) {
                            u2(e16.touched) && e16.touched < a13.stacksTouched ? (e16.destroy(), delete c16[f26]) : (e16.total = null, e16.cumulative = null);
                        });
                    });
                };
                a10.prototype.renderStackTotals = function() {
                    var a13 = this.axis, c15 = a13.chart, e16 = c15.renderer, f26 = this.stacks;
                    a13 = r2(c15, a13.options.stackLabels && a13.options.stackLabels.animation || !1);
                    var g10 = this.stackTotalGroup = this.stackTotalGroup || e16.g("stack-labels").attr({
                        visibility: "visible",
                        zIndex: 6,
                        opacity: 0
                    }).add();
                    g10.translate(c15.plotLeft, c15.plotTop);
                    n2(f26, function(a14) {
                        n2(a14, function(a15) {
                            a15.render(g10);
                        });
                    });
                    g10.animate({
                        opacity: 1
                    }, a13);
                };
                return a10;
            }();
            a9.Additions = f25;
        })(m7 || (m7 = {
        }));
        return m7;
    });
    M(a3, "Extensions/Stacking.js", [
        a3["Core/Axis/Axis.js"],
        a3["Core/Chart/Chart.js"],
        a3["Core/FormatUtilities.js"],
        a3["Core/Globals.js"],
        a3["Core/Series/Series.js"],
        a3["Core/Axis/StackingAxis.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w2, C2, E, z2, x2, J) {
        var r2 = C2.format, n2 = J.correctFloat, m7 = J.defined, g2 = J.destroyObjectProperties, c3 = J.isArray, e5 = J.isNumber, l14 = J.objectEach, f25 = J.pick, v4 = function() {
            function a9(a10, c15, e16, f26, g10) {
                var k14 = a10.chart.inverted;
                this.axis = a10;
                this.isNegative = e16;
                this.options = c15 = c15 || {
                };
                this.x = f26;
                this.total = null;
                this.points = {
                };
                this.hasValidPoints = !1;
                this.stack = g10;
                this.rightCliff = this.leftCliff = 0;
                this.alignOptions = {
                    align: c15.align || (k14 ? e16 ? "left" : "right" : "center"),
                    verticalAlign: c15.verticalAlign || (k14 ? "middle" : e16 ? "bottom" : "top"),
                    y: c15.y,
                    x: c15.x
                };
                this.textAlign = c15.textAlign || (k14 ? e16 ? "right" : "left" : "center");
            }
            a9.prototype.destroy = function() {
                g2(this, this.axis);
            };
            a9.prototype.render = function(a10) {
                var c15 = this.axis.chart, e16 = this.options, g10 = e16.format;
                g10 = g10 ? r2(g10, this, c15) : e16.formatter.call(this);
                this.label ? this.label.attr({
                    text: g10,
                    visibility: "hidden"
                }) : (this.label = c15.renderer.label(g10, null, null, e16.shape, null, null, e16.useHTML, !1, "stack-labels"), g10 = {
                    r: e16.borderRadius || 0,
                    text: g10,
                    rotation: e16.rotation,
                    padding: f25(e16.padding, 5),
                    visibility: "hidden"
                }, c15.styledMode || (g10.fill = e16.backgroundColor, g10.stroke = e16.borderColor, g10["stroke-width"] = e16.borderWidth, this.label.css(e16.style)), this.label.attr(g10), this.label.added || this.label.add(a10));
                this.label.labelrank = c15.plotSizeY;
            };
            a9.prototype.setOffset = function(a10, c15, g10, l15, n13) {
                var k14 = this.axis, h9 = k14.chart;
                l15 = k14.translate(k14.stacking.usePercentage ? 100 : l15 ? l15 : this.total, 0, 0, 0, 1);
                g10 = k14.translate(g10 ? g10 : 0);
                g10 = m7(l15) && Math.abs(l15 - g10);
                a10 = f25(n13, h9.xAxis[0].translate(this.x)) + a10;
                k14 = m7(l15) && this.getStackBox(h9, this, a10, l15, c15, g10, k14);
                c15 = this.label;
                g10 = this.isNegative;
                a10 = "justify" === f25(this.options.overflow, "justify");
                var d3 = this.textAlign;
                c15 && k14 && (n13 = c15.getBBox(), l15 = c15.padding, d3 = "left" === d3 ? h9.inverted ? -l15 : l15 : "right" === d3 ? n13.width : h9.inverted && "center" === d3 ? n13.width / 2 : h9.inverted ? g10 ? n13.width + l15 : -l15 : n13.width / 2, g10 = h9.inverted ? n13.height / 2 : g10 ? -l15 : n13.height, this.alignOptions.x = f25(this.options.x, 0), this.alignOptions.y = f25(this.options.y, 0), k14.x -= d3, k14.y -= g10, c15.align(this.alignOptions, null, k14), h9.isInsidePlot(c15.alignAttr.x + d3 - this.alignOptions.x, c15.alignAttr.y + g10 - this.alignOptions.y) ? c15.show() : (c15.alignAttr.y = -9999, a10 = !1), a10 && z2.prototype.justifyDataLabel.call(this.axis, c15, this.alignOptions, c15.alignAttr, n13, k14), c15.attr({
                    x: c15.alignAttr.x,
                    y: c15.alignAttr.y
                }), f25(!a10 && this.options.crop, !0) && ((h9 = e5(c15.x) && e5(c15.y) && h9.isInsidePlot(c15.x - l15 + c15.width, c15.y) && h9.isInsidePlot(c15.x + l15, c15.y)) || c15.hide()));
            };
            a9.prototype.getStackBox = function(a10, c15, e16, f26, g10, l15, h9) {
                var d3 = c15.axis.reversed, b6 = a10.inverted, k14 = h9.height + h9.pos - (b6 ? a10.plotLeft : a10.plotTop);
                c15 = c15.isNegative && !d3 || !c15.isNegative && d3;
                return {
                    x: b6 ? c15 ? f26 - h9.right : f26 - l15 + h9.pos - a10.plotLeft : e16 + a10.xAxis[0].transB - a10.plotLeft,
                    y: b6 ? h9.height - e16 - g10 : c15 ? k14 - f26 - l15 : k14 - f26,
                    width: b6 ? l15 : g10,
                    height: b6 ? g10 : l15
                };
            };
            return a9;
        }();
        w2.prototype.getStacks = function() {
            var a9 = this, c15 = a9.inverted;
            a9.yAxis.forEach(function(a10) {
                a10.stacking && a10.stacking.stacks && a10.hasVisibleSeries && (a10.stacking.oldStacks = a10.stacking.stacks);
            });
            a9.series.forEach(function(e16) {
                var g10 = e16.xAxis && e16.xAxis.options || {
                };
                !e16.options.stacking || !0 !== e16.visible && !1 !== a9.options.chart.ignoreHiddenSeries || (e16.stackKey = [
                    e16.type,
                    f25(e16.options.stack, ""),
                    c15 ? g10.top : g10.left,
                    c15 ? g10.height : g10.width
                ].join());
            });
        };
        x2.compose(a1);
        z2.prototype.setGroupedPoints = function() {
            var a9 = this.yAxis.stacking;
            this.options.centerInCategory && (this.is("column") || this.is("columnrange")) && !this.options.stacking && 1 < this.chart.series.length ? z2.prototype.setStackedPoints.call(this, "group") : a9 && l14(a9.stacks, function(c15, e16) {
                "group" === e16.slice(-5) && (l14(c15, function(a10) {
                    return a10.destroy();
                }), delete a9.stacks[e16]);
            });
        };
        z2.prototype.setStackedPoints = function(a9) {
            var e16 = a9 || this.options.stacking;
            if (e16 && (!0 === this.visible || !1 === this.chart.options.chart.ignoreHiddenSeries)) {
                var g10 = this.processedXData, l15 = this.processedYData, q3 = [], r7 = l15.length, t4 = this.options, h9 = t4.threshold, d3 = f25(t4.startFromThreshold && h9, 0);
                t4 = t4.stack;
                a9 = a9 ? this.type + "," + e16 : this.stackKey;
                var b6 = "-" + a9, p6 = this.negStacks, u2 = this.yAxis, y = u2.stacking.stacks, x3 = u2.stacking.oldStacks, F6, w3;
                u2.stacking.stacksTouched += 1;
                for(w3 = 0; w3 < r7; w3++){
                    var z3 = g10[w3];
                    var C3 = l15[w3];
                    var E1 = this.getStackIndicator(E1, z3, this.index);
                    var J1 = E1.key;
                    var H1 = (F6 = p6 && C3 < (d3 ? 0 : h9)) ? b6 : a9;
                    y[H1] || (y[H1] = {
                    });
                    y[H1][z3] || (x3[H1] && x3[H1][z3] ? (y[H1][z3] = x3[H1][z3], y[H1][z3].total = null) : y[H1][z3] = new v4(u2, u2.options.stackLabels, F6, z3, t4));
                    H1 = y[H1][z3];
                    null !== C3 ? (H1.points[J1] = H1.points[this.index] = [
                        f25(H1.cumulative, d3)
                    ], m7(H1.cumulative) || (H1.base = J1), H1.touched = u2.stacking.stacksTouched, 0 < E1.index && !1 === this.singleStacks && (H1.points[J1][0] = H1.points[this.index + "," + z3 + ",0"][0])) : H1.points[J1] = H1.points[this.index] = null;
                    "percent" === e16 ? (F6 = F6 ? a9 : b6, p6 && y[F6] && y[F6][z3] ? (F6 = y[F6][z3], H1.total = F6.total = Math.max(F6.total, H1.total) + Math.abs(C3) || 0) : H1.total = n2(H1.total + (Math.abs(C3) || 0))) : "group" === e16 ? (c3(C3) && (C3 = C3[0]), null !== C3 && (H1.total = (H1.total || 0) + 1)) : H1.total = n2(H1.total + (C3 || 0));
                    H1.cumulative = "group" === e16 ? (H1.total || 1) - 1 : f25(H1.cumulative, d3) + (C3 || 0);
                    null !== C3 && (H1.points[J1].push(H1.cumulative), q3[w3] = H1.cumulative, H1.hasValidPoints = !0);
                }
                "percent" === e16 && (u2.stacking.usePercentage = !0);
                "group" !== e16 && (this.stackedYData = q3);
                u2.stacking.oldStacks = {
                };
            }
        };
        z2.prototype.modifyStacks = function() {
            var a9 = this, c15 = a9.stackKey, e16 = a9.yAxis.stacking.stacks, f26 = a9.processedXData, g11, l16 = a9.options.stacking;
            a9[l16 + "Stacker"] && [
                c15,
                "-" + c15
            ].forEach(function(c16) {
                for(var h12 = f26.length, d4, b7; h12--;)if (d4 = f26[h12], g11 = a9.getStackIndicator(g11, d4, a9.index, c16), b7 = (d4 = e16[c16] && e16[c16][d4]) && d4.points[g11.key]) a9[l16 + "Stacker"](b7, d4, h12);
            });
        };
        z2.prototype.percentStacker = function(a9, c15, e16) {
            c15 = c15.total ? 100 / c15.total : 0;
            a9[0] = n2(a9[0] * c15);
            a9[1] = n2(a9[1] * c15);
            this.stackedYData[e16] = a9[1];
        };
        z2.prototype.getStackIndicator = function(a9, c15, e16, f26) {
            !m7(a9) || a9.x !== c15 || f26 && a9.key !== f26 ? a9 = {
                x: c15,
                index: 0,
                key: f26
            } : a9.index++;
            a9.key = [
                e16,
                c15,
                a9.index
            ].join();
            return a9;
        };
        E.StackItem = v4;
        return E.StackItem;
    });
    M(a3, "Series/Line/LineSeries.js", [
        a3["Core/Color/Palette.js"],
        a3["Core/Series/Series.js"],
        a3["Core/Series/SeriesRegistry.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w2, C2, E2) {
        var r2 = this && this.__extends || function() {
            var a9 = function(n2, m7) {
                a9 = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(a10, c3) {
                    a10.__proto__ = c3;
                } || function(a10, c3) {
                    for(var e5 in c3)c3.hasOwnProperty(e5) && (a10[e5] = c3[e5]);
                };
                return a9(n2, m7);
            };
            return function(n2, m7) {
                function g2() {
                    this.constructor = n2;
                }
                a9(n2, m7);
                n2.prototype = null === m7 ? Object.create(m7) : (g2.prototype = m7.prototype, new g2);
            };
        }(), x2 = E2.defined, J2 = E2.merge;
        E2 = (function(u7) {
            function n2() {
                var a9 = null !== u7 && u7.apply(this, arguments) || this;
                a9.data = void 0;
                a9.options = void 0;
                a9.points = void 0;
                return a9;
            }
            r2(n2, u7);
            n2.prototype.drawGraph = function() {
                var m7 = this, g2 = this.options, c3 = (this.gappedPath || this.getGraphPath).call(this), e5 = this.chart.styledMode, l14 = [
                    [
                        "graph",
                        "highcharts-graph"
                    ]
                ];
                e5 || l14[0].push(g2.lineColor || this.color || a1.neutralColor20, g2.dashStyle);
                l14 = m7.getZonesGraphs(l14);
                l14.forEach(function(a9, l16) {
                    var f25 = a9[0], k14 = m7[f25], n13 = k14 ? "animate" : "attr";
                    k14 ? (k14.endX = m7.preventGraphAnimation ? null : c3.xMap, k14.animate({
                        d: c3
                    })) : c3.length && (m7[f25] = k14 = m7.chart.renderer.path(c3).addClass(a9[1]).attr({
                        zIndex: 1
                    }).add(m7.group));
                    k14 && !e5 && (f25 = {
                        stroke: a9[2],
                        "stroke-width": g2.lineWidth,
                        fill: m7.fillGraph && m7.color || "none"
                    }, a9[3] ? f25.dashstyle = a9[3] : "square" !== g2.linecap && (f25["stroke-linecap"] = f25["stroke-linejoin"] = "round"), k14[n13](f25).shadow(2 > l16 && g2.shadow));
                    k14 && (k14.startX = c3.xMap, k14.isArea = c3.isArea);
                });
            };
            n2.prototype.getGraphPath = function(a9, g2, c3) {
                var e5 = this, l14 = e5.options, f25 = [], m7 = [], n13, k14 = l14.step;
                a9 = a9 || e5.points;
                var r8 = a9.reversed;
                r8 && a9.reverse();
                (k14 = ({
                    right: 1,
                    center: 2
                })[k14] || k14 && 3) && r8 && (k14 = 4 - k14);
                a9 = this.getValidPoints(a9, !1, !(l14.connectNulls && !g2 && !c3));
                a9.forEach(function(q10, r9) {
                    var v4 = q10.plotX, t8 = q10.plotY, h12 = a9[r9 - 1];
                    (q10.leftCliff || h12 && h12.rightCliff) && !c3 && (n13 = !0);
                    q10.isNull && !x2(g2) && 0 < r9 ? n13 = !l14.connectNulls : q10.isNull && !g2 ? n13 = !0 : (0 === r9 || n13 ? r9 = [
                        [
                            "M",
                            q10.plotX,
                            q10.plotY
                        ]
                    ] : e5.getPointSpline ? r9 = [
                        e5.getPointSpline(a9, q10, r9)
                    ] : k14 ? (r9 = 1 === k14 ? [
                        [
                            "L",
                            h12.plotX,
                            t8
                        ]
                    ] : 2 === k14 ? [
                        [
                            "L",
                            (h12.plotX + v4) / 2,
                            h12.plotY
                        ],
                        [
                            "L",
                            (h12.plotX + v4) / 2,
                            t8
                        ]
                    ] : [
                        [
                            "L",
                            v4,
                            h12.plotY
                        ]
                    ], r9.push([
                        "L",
                        v4,
                        t8
                    ])) : r9 = [
                        [
                            "L",
                            v4,
                            t8
                        ]
                    ], m7.push(q10.x), k14 && (m7.push(q10.x), 2 === k14 && m7.push(q10.x)), f25.push.apply(f25, r9), n13 = !1);
                });
                f25.xMap = m7;
                return e5.graphPath = f25;
            };
            n2.prototype.getZonesGraphs = function(a9) {
                this.zones.forEach(function(g2, c3) {
                    c3 = [
                        "zone-graph-" + c3,
                        "highcharts-graph highcharts-zone-graph-" + c3 + " " + (g2.className || "")
                    ];
                    this.chart.styledMode || c3.push(g2.color || this.color, g2.dashStyle || this.options.dashStyle);
                    a9.push(c3);
                }, this);
                return a9;
            };
            n2.defaultOptions = J2(w2.defaultOptions, {
            });
            return n2;
        })(w2);
        C2.registerSeriesType("line", E2);
        return E2;
    });
    M(a3, "Series/Area/AreaSeries.js", [
        a3["Core/Color/Color.js"],
        a3["Core/Legend/LegendSymbol.js"],
        a3["Core/Series/SeriesRegistry.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w2, C2, E2) {
        var r2 = this && this.__extends || function() {
            var a9 = function(c3, e5) {
                a9 = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(a10, c15) {
                    a10.__proto__ = c15;
                } || function(a10, c15) {
                    for(var e16 in c15)c15.hasOwnProperty(e16) && (a10[e16] = c15[e16]);
                };
                return a9(c3, e5);
            };
            return function(c3, e5) {
                function g2() {
                    this.constructor = c3;
                }
                a9(c3, e5);
                c3.prototype = null === e5 ? Object.create(e5) : (g2.prototype = e5.prototype, new g2);
            };
        }(), x2 = a1.parse, J2 = C2.seriesTypes.line;
        a1 = E2.extend;
        var u7 = E2.merge, n2 = E2.objectEach, m7 = E2.pick;
        E2 = (function(a9) {
            function c3() {
                var c15 = null !== a9 && a9.apply(this, arguments) || this;
                c15.data = void 0;
                c15.options = void 0;
                c15.points = void 0;
                return c15;
            }
            r2(c3, a9);
            c3.prototype.drawGraph = function() {
                this.areaPath = [];
                a9.prototype.drawGraph.apply(this);
                var c15 = this, g2 = this.areaPath, f25 = this.options, n13 = [
                    [
                        "area",
                        "highcharts-area",
                        this.color,
                        f25.fillColor
                    ]
                ];
                this.zones.forEach(function(a10, e5) {
                    n13.push([
                        "zone-area-" + e5,
                        "highcharts-area highcharts-zone-area-" + e5 + " " + a10.className,
                        a10.color || c15.color,
                        a10.fillColor || f25.fillColor
                    ]);
                });
                n13.forEach(function(a10) {
                    var e5 = a10[0], l14 = c15[e5], n14 = l14 ? "animate" : "attr", q10 = {
                    };
                    l14 ? (l14.endX = c15.preventGraphAnimation ? null : g2.xMap, l14.animate({
                        d: g2
                    })) : (q10.zIndex = 0, l14 = c15[e5] = c15.chart.renderer.path(g2).addClass(a10[1]).add(c15.group), l14.isArea = !0);
                    c15.chart.styledMode || (q10.fill = m7(a10[3], x2(a10[2]).setOpacity(m7(f25.fillOpacity, 0.75)).get()));
                    l14[n14](q10);
                    l14.startX = g2.xMap;
                    l14.shiftUnit = f25.step ? 2 : 1;
                });
            };
            c3.prototype.getGraphPath = function(a10) {
                var c15 = J2.prototype.getGraphPath, e5 = this.options, g2 = e5.stacking, n13 = this.yAxis, k14, r8 = [], u8 = [], B2 = this.index, x4 = n13.stacking.stacks[this.stackKey], t8 = e5.threshold, h12 = Math.round(n13.getThreshold(e5.threshold));
                e5 = m7(e5.connectNulls, "percent" === g2);
                var d4 = function(b7, d5, c16) {
                    var e16 = a10[b7];
                    b7 = g2 && x4[e16.x].points[B2];
                    var f25 = e16[c16 + "Null"] || 0;
                    c16 = e16[c16 + "Cliff"] || 0;
                    e16 = !0;
                    if (c16 || f25) {
                        var k21 = (f25 ? b7[0] : b7[1]) + c16;
                        var l14 = b7[0] + c16;
                        e16 = !!f25;
                    } else !g2 && a10[d5] && a10[d5].isNull && (k21 = l14 = t8);
                    "undefined" !== typeof k21 && (u8.push({
                        plotX: p12,
                        plotY: null === k21 ? h12 : n13.getThreshold(k21),
                        isNull: e16,
                        isCliff: !0
                    }), r8.push({
                        plotX: p12,
                        plotY: null === l14 ? h12 : n13.getThreshold(l14),
                        doCurve: !1
                    }));
                };
                a10 = a10 || this.points;
                g2 && (a10 = this.getStackPoints(a10));
                for(k14 = 0; k14 < a10.length; k14++){
                    g2 || (a10[k14].leftCliff = a10[k14].rightCliff = a10[k14].leftNull = a10[k14].rightNull = void 0);
                    var b7 = a10[k14].isNull;
                    var p12 = m7(a10[k14].rectPlotX, a10[k14].plotX);
                    var G6 = g2 ? m7(a10[k14].yBottom, h12) : h12;
                    if (!b7 || e5) e5 || d4(k14, k14 - 1, "left"), b7 && !g2 && e5 || (u8.push(a10[k14]), r8.push({
                        x: k14,
                        plotX: p12,
                        plotY: G6
                    })), e5 || d4(k14, k14 + 1, "right");
                }
                k14 = c15.call(this, u8, !0, !0);
                r8.reversed = !0;
                b7 = c15.call(this, r8, !0, !0);
                (G6 = b7[0]) && "M" === G6[0] && (b7[0] = [
                    "L",
                    G6[1],
                    G6[2]
                ]);
                b7 = k14.concat(b7);
                b7.length && b7.push([
                    "Z"
                ]);
                c15 = c15.call(this, u8, !1, e5);
                b7.xMap = k14.xMap;
                this.areaPath = b7;
                return c15;
            };
            c3.prototype.getStackPoints = function(a10) {
                var c15 = this, e5 = [], g2 = [], r8 = this.xAxis, k14 = this.yAxis, u8 = k14.stacking.stacks[this.stackKey], x4 = {
                }, B2 = k14.series, w4 = B2.length, t8 = k14.options.reversedStacks ? 1 : -1, h12 = B2.indexOf(c15);
                a10 = a10 || this.points;
                if (this.options.stacking) {
                    for(var d4 = 0; d4 < a10.length; d4++)a10[d4].leftNull = a10[d4].rightNull = void 0, x4[a10[d4].x] = a10[d4];
                    n2(u8, function(a13, b8) {
                        null !== a13.total && g2.push(b8);
                    });
                    g2.sort(function(a13, b8) {
                        return a13 - b8;
                    });
                    var b8 = B2.map(function(a13) {
                        return a13.visible;
                    });
                    g2.forEach(function(a13, d5) {
                        var f25 = 0, l16, n13;
                        if (x4[a13] && !x4[a13].isNull) e5.push(x4[a13]), [
                            -1,
                            1
                        ].forEach(function(e16) {
                            var f26 = 1 === e16 ? "rightNull" : "leftNull", k22 = 0, m12 = u8[g2[d5 + e16]];
                            if (m12) for(var p13 = h12; 0 <= p13 && p13 < w4;){
                                var r9 = B2[p13].index;
                                l16 = m12.points[r9];
                                l16 || (r9 === c15.index ? x4[a13][f26] = !0 : b8[p13] && (n13 = u8[a13].points[r9]) && (k22 -= n13[1] - n13[0]));
                                p13 += t8;
                            }
                            x4[a13][1 === e16 ? "rightCliff" : "leftCliff"] = k22;
                        });
                        else {
                            for(var p13 = h12; 0 <= p13 && p13 < w4;){
                                if (l16 = u8[a13].points[B2[p13].index]) {
                                    f25 = l16[1];
                                    break;
                                }
                                p13 += t8;
                            }
                            f25 = m7(f25, 0);
                            f25 = k14.translate(f25, 0, 1, 0, 1);
                            e5.push({
                                isNull: !0,
                                plotX: r8.translate(a13, 0, 0, 0, 1),
                                x: a13,
                                plotY: f25,
                                yBottom: f25
                            });
                        }
                    });
                }
                return e5;
            };
            c3.defaultOptions = u7(J2.defaultOptions, {
                threshold: 0
            });
            return c3;
        })(J2);
        a1(E2.prototype, {
            singleStacks: !1,
            drawLegendSymbol: w2.drawRectangle
        });
        C2.registerSeriesType("area", E2);
        return E2;
    });
    M(a3, "Series/Spline/SplineSeries.js", [
        a3["Core/Series/SeriesRegistry.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w2) {
        var r2 = this && this.__extends || function() {
            var a9 = function(r8, n2) {
                a9 = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(a10, g2) {
                    a10.__proto__ = g2;
                } || function(a10, g2) {
                    for(var c3 in g2)g2.hasOwnProperty(c3) && (a10[c3] = g2[c3]);
                };
                return a9(r8, n2);
            };
            return function(r8, n2) {
                function m7() {
                    this.constructor = r8;
                }
                a9(r8, n2);
                r8.prototype = null === n2 ? Object.create(n2) : (m7.prototype = n2.prototype, new m7);
            };
        }(), E2 = a1.seriesTypes.line, z2 = w2.merge, x2 = w2.pick;
        w2 = (function(a9) {
            function u7() {
                var n2 = null !== a9 && a9.apply(this, arguments) || this;
                n2.data = void 0;
                n2.options = void 0;
                n2.points = void 0;
                return n2;
            }
            r2(u7, a9);
            u7.prototype.getPointSpline = function(a10, m7, g2) {
                var c3 = m7.plotX || 0, e5 = m7.plotY || 0, l16 = a10[g2 - 1];
                g2 = a10[g2 + 1];
                if (l16 && !l16.isNull && !1 !== l16.doCurve && !m7.isCliff && g2 && !g2.isNull && !1 !== g2.doCurve && !m7.isCliff) {
                    a10 = l16.plotY || 0;
                    var f25 = g2.plotX || 0;
                    g2 = g2.plotY || 0;
                    var n2 = 0;
                    var r8 = (1.5 * c3 + (l16.plotX || 0)) / 2.5;
                    var k14 = (1.5 * e5 + a10) / 2.5;
                    f25 = (1.5 * c3 + f25) / 2.5;
                    var u8 = (1.5 * e5 + g2) / 2.5;
                    f25 !== r8 && (n2 = (u8 - k14) * (f25 - c3) / (f25 - r8) + e5 - u8);
                    k14 += n2;
                    u8 += n2;
                    k14 > a10 && k14 > e5 ? (k14 = Math.max(a10, e5), u8 = 2 * e5 - k14) : k14 < a10 && k14 < e5 && (k14 = Math.min(a10, e5), u8 = 2 * e5 - k14);
                    u8 > g2 && u8 > e5 ? (u8 = Math.max(g2, e5), k14 = 2 * e5 - u8) : u8 < g2 && u8 < e5 && (u8 = Math.min(g2, e5), k14 = 2 * e5 - u8);
                    m7.rightContX = f25;
                    m7.rightContY = u8;
                }
                m7 = [
                    "C",
                    x2(l16.rightContX, l16.plotX, 0),
                    x2(l16.rightContY, l16.plotY, 0),
                    x2(r8, c3, 0),
                    x2(k14, e5, 0),
                    c3,
                    e5
                ];
                l16.rightContX = l16.rightContY = void 0;
                return m7;
            };
            u7.defaultOptions = z2(E2.defaultOptions);
            return u7;
        })(E2);
        a1.registerSeriesType("spline", w2);
        return w2;
    });
    M(a3, "Series/AreaSpline/AreaSplineSeries.js", [
        a3["Series/Area/AreaSeries.js"],
        a3["Series/Spline/SplineSeries.js"],
        a3["Core/Legend/LegendSymbol.js"],
        a3["Core/Series/SeriesRegistry.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w2, C2, E2, z2) {
        var r2 = this && this.__extends || function() {
            var a9 = function(g2, c3) {
                a9 = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(a10, c15) {
                    a10.__proto__ = c15;
                } || function(a10, c15) {
                    for(var e5 in c15)c15.hasOwnProperty(e5) && (a10[e5] = c15[e5]);
                };
                return a9(g2, c3);
            };
            return function(g2, c3) {
                function e5() {
                    this.constructor = g2;
                }
                a9(g2, c3);
                g2.prototype = null === c3 ? Object.create(c3) : (e5.prototype = c3.prototype, new e5);
            };
        }(), J2 = a1.prototype, u7 = z2.extend, n13 = z2.merge;
        z2 = (function(m7) {
            function g2() {
                var a9 = null !== m7 && m7.apply(this, arguments) || this;
                a9.data = void 0;
                a9.points = void 0;
                a9.options = void 0;
                return a9;
            }
            r2(g2, m7);
            g2.defaultOptions = n13(w2.defaultOptions, a1.defaultOptions);
            return g2;
        })(w2);
        u7(z2.prototype, {
            getGraphPath: J2.getGraphPath,
            getStackPoints: J2.getStackPoints,
            drawGraph: J2.drawGraph,
            drawLegendSymbol: C2.drawRectangle
        });
        E2.registerSeriesType("areaspline", z2);
        return z2;
    });
    M(a3, "Series/Column/ColumnSeries.js", [
        a3["Core/Animation/AnimationUtilities.js"],
        a3["Core/Color/Color.js"],
        a3["Core/Globals.js"],
        a3["Core/Legend/LegendSymbol.js"],
        a3["Core/Color/Palette.js"],
        a3["Core/Series/Series.js"],
        a3["Core/Series/SeriesRegistry.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w2, C2, E2, z2, x2, J2, u7) {
        var n13 = this && this.__extends || function() {
            var a9 = function(c3, d5) {
                a9 = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(a10, d6) {
                    a10.__proto__ = d6;
                } || function(a10, d6) {
                    for(var b9 in d6)d6.hasOwnProperty(b9) && (a10[b9] = d6[b9]);
                };
                return a9(c3, d5);
            };
            return function(c3, d5) {
                function b9() {
                    this.constructor = c3;
                }
                a9(c3, d5);
                c3.prototype = null === d5 ? Object.create(d5) : (b9.prototype = d5.prototype, new b9);
            };
        }(), m7 = a1.animObject, g2 = w2.parse, c3 = C2.hasTouch;
        a1 = C2.noop;
        var e5 = u7.clamp, l16 = u7.css, f26 = u7.defined, r2 = u7.extend, q10 = u7.fireEvent, k22 = u7.isArray, I = u7.isNumber, D2 = u7.merge, B2 = u7.pick, O = u7.objectEach;
        u7 = (function(a9) {
            function h12() {
                var d5 = null !== a9 && a9.apply(this, arguments) || this;
                d5.borderWidth = void 0;
                d5.data = void 0;
                d5.group = void 0;
                d5.options = void 0;
                d5.points = void 0;
                return d5;
            }
            n13(h12, a9);
            h12.prototype.animate = function(a10) {
                var b9 = this, d5 = this.yAxis, c15 = b9.options, h13 = this.chart.inverted, f27 = {
                }, g11 = h13 ? "translateX" : "translateY";
                if (a10) f27.scaleY = 0.001, a10 = e5(d5.toPixels(c15.threshold), d5.pos, d5.pos + d5.len), h13 ? f27.translateX = a10 - d5.len : f27.translateY = a10, b9.clipBox && b9.setClip(), b9.group.attr(f27);
                else {
                    var k23 = Number(b9.group.attr(g11));
                    b9.group.animate({
                        scaleY: 1
                    }, r2(m7(b9.options.animation), {
                        step: function(a13, c16) {
                            b9.group && (f27[g11] = k23 + c16.pos * (d5.pos - k23), b9.group.attr(f27));
                        }
                    }));
                }
            };
            h12.prototype.init = function(d5, b9) {
                a9.prototype.init.apply(this, arguments);
                var c15 = this;
                d5 = c15.chart;
                d5.hasRendered && d5.series.forEach(function(a10) {
                    a10.type === c15.type && (a10.isDirty = !0);
                });
            };
            h12.prototype.getColumnMetrics = function() {
                var a10 = this, b9 = a10.options, c15 = a10.xAxis, e16 = a10.yAxis, h13 = c15.options.reversedStacks;
                h13 = c15.reversed && !h13 || !c15.reversed && h13;
                var f27 = {
                }, g11, k24 = 0;
                !1 === b9.grouping ? k24 = 1 : a10.chart.series.forEach(function(b10) {
                    var d5 = b10.yAxis, c16 = b10.options;
                    if (b10.type === a10.type && (b10.visible || !a10.chart.options.chart.ignoreHiddenSeries) && e16.len === d5.len && e16.pos === d5.pos) {
                        if (c16.stacking && "group" !== c16.stacking) {
                            g11 = b10.stackKey;
                            "undefined" === typeof f27[g11] && (f27[g11] = k24++);
                            var h14 = f27[g11];
                        } else !1 !== c16.grouping && (h14 = k24++);
                        b10.columnIndex = h14;
                    }
                });
                var l17 = Math.min(Math.abs(c15.transA) * (c15.ordinal && c15.ordinal.slope || b9.pointRange || c15.closestPointRange || c15.tickInterval || 1), c15.len), m12 = l17 * b9.groupPadding, n14 = (l17 - 2 * m12) / (k24 || 1);
                b9 = Math.min(b9.maxPointWidth || c15.len, B2(b9.pointWidth, n14 * (1 - 2 * b9.pointPadding)));
                a10.columnMetrics = {
                    width: b9,
                    offset: (n14 - b9) / 2 + (m12 + ((a10.columnIndex || 0) + (h13 ? 1 : 0)) * n14 - l17 / 2) * (h13 ? -1 : 1),
                    paddedWidth: n14,
                    columnCount: k24
                };
                return a10.columnMetrics;
            };
            h12.prototype.crispCol = function(a10, b9, c15, e16) {
                var d5 = this.chart, h13 = this.borderWidth, f27 = -(h13 % 2 ? 0.5 : 0);
                h13 = h13 % 2 ? 0.5 : 1;
                d5.inverted && d5.renderer.isVML && (h13 += 1);
                this.options.crisp && (c15 = Math.round(a10 + c15) + f27, a10 = Math.round(a10) + f27, c15 -= a10);
                e16 = Math.round(b9 + e16) + h13;
                f27 = 0.5 >= Math.abs(b9) && 0.5 < e16;
                b9 = Math.round(b9) + h13;
                e16 -= b9;
                f27 && e16 && (--b9, e16 += 1);
                return {
                    x: a10,
                    y: b9,
                    width: c15,
                    height: e16
                };
            };
            h12.prototype.adjustForMissingColumns = function(a10, b9, c15, e16) {
                var d5 = this, h13 = this.options.stacking;
                if (!c15.isNull && 1 < e16.columnCount) {
                    var f27 = 0, g11 = 0;
                    O(this.yAxis.stacking && this.yAxis.stacking.stacks, function(a13) {
                        if ("number" === typeof c15.x && (a13 = a13[c15.x.toString()])) {
                            var b10 = a13.points[d5.index], e17 = a13.total;
                            h13 ? (b10 && (f27 = g11), a13.hasValidPoints && g11++) : k22(b10) && (f27 = b10[1], g11 = e17 || 0);
                        }
                    });
                    a10 = (c15.plotX || 0) + ((g11 - 1) * e16.paddedWidth + b9) / 2 - b9 - f27 * e16.paddedWidth;
                }
                return a10;
            };
            h12.prototype.translate = function() {
                var a10 = this, b9 = a10.chart, c15 = a10.options, h13 = a10.dense = 2 > a10.closestPointRange * a10.xAxis.transA;
                h13 = a10.borderWidth = B2(c15.borderWidth, h13 ? 0 : 1);
                var g12 = a10.xAxis, k24 = a10.yAxis, l17 = c15.threshold, m12 = a10.translatedThreshold = k24.getThreshold(l17), n14 = B2(c15.minPointLength, 5), r10 = a10.getColumnMetrics(), t8 = r10.width, q11 = a10.pointXOffset = r10.offset, v4 = a10.dataMin, u9 = a10.dataMax, w4 = a10.barW = Math.max(t8, 1 + 2 * h13);
                b9.inverted && (m12 -= 0.5);
                c15.pointPadding && (w4 = Math.ceil(w4));
                x2.prototype.translate.apply(a10);
                a10.points.forEach(function(d5) {
                    var h15 = B2(d5.yBottom, m12), p14 = 999 + Math.abs(h15), y = d5.plotX || 0;
                    p14 = e5(d5.plotY, -p14, k24.len + p14);
                    var x4 = Math.min(p14, h15), F8 = Math.max(p14, h15) - x4, D5 = t8, G8 = y + q11, z4 = w4;
                    n14 && Math.abs(F8) < n14 && (F8 = n14, y = !k24.reversed && !d5.negative || k24.reversed && d5.negative, I(l17) && I(u9) && d5.y === l17 && u9 <= l17 && (k24.min || 0) < l17 && (v4 !== u9 || (k24.max || 0) <= l17) && (y = !y), x4 = Math.abs(x4 - m12) > n14 ? h15 - n14 : m12 - (y ? n14 : 0));
                    f26(d5.options.pointWidth) && (D5 = z4 = Math.ceil(d5.options.pointWidth), G8 -= Math.round((D5 - t8) / 2));
                    c15.centerInCategory && (G8 = a10.adjustForMissingColumns(G8, D5, d5, r10));
                    d5.barX = G8;
                    d5.pointWidth = D5;
                    d5.tooltipPos = b9.inverted ? [
                        e5(k24.len + k24.pos - b9.plotLeft - p14, k24.pos - b9.plotLeft, k24.len + k24.pos - b9.plotLeft),
                        g12.len + g12.pos - b9.plotTop - G8 - z4 / 2,
                        F8
                    ] : [
                        g12.left - b9.plotLeft + G8 + z4 / 2,
                        e5(p14 + k24.pos - b9.plotTop, k24.pos - b9.plotTop, k24.len + k24.pos - b9.plotTop),
                        F8
                    ];
                    d5.shapeType = a10.pointClass.prototype.shapeType || "rect";
                    d5.shapeArgs = a10.crispCol.apply(a10, d5.isNull ? [
                        G8,
                        m12,
                        z4,
                        0
                    ] : [
                        G8,
                        x4,
                        z4,
                        F8
                    ]);
                });
            };
            h12.prototype.drawGraph = function() {
                this.group[this.dense ? "addClass" : "removeClass"]("highcharts-dense-data");
            };
            h12.prototype.pointAttribs = function(a10, b9) {
                var d5 = this.options, c15 = this.pointAttrToOptions || {
                }, e16 = c15.stroke || "borderColor", h13 = c15["stroke-width"] || "borderWidth", f28 = a10 && a10.color || this.color, k24 = a10 && a10[e16] || d5[e16] || f28;
                c15 = a10 && a10.options.dashStyle || d5.dashStyle;
                var l17 = a10 && a10[h13] || d5[h13] || this[h13] || 0, m12 = B2(a10 && a10.opacity, d5.opacity, 1);
                if (a10 && this.zones.length) {
                    var n14 = a10.getZone();
                    f28 = a10.options.color || n14 && (n14.color || a10.nonZonedColor) || this.color;
                    n14 && (k24 = n14.borderColor || k24, c15 = n14.dashStyle || c15, l17 = n14.borderWidth || l17);
                }
                b9 && a10 && (a10 = D2(d5.states[b9], a10.options.states && a10.options.states[b9] || {
                }), b9 = a10.brightness, f28 = a10.color || "undefined" !== typeof b9 && g2(f28).brighten(a10.brightness).get() || f28, k24 = a10[e16] || k24, l17 = a10[h13] || l17, c15 = a10.dashStyle || c15, m12 = B2(a10.opacity, m12));
                e16 = {
                    fill: f28,
                    stroke: k24,
                    "stroke-width": l17,
                    opacity: m12
                };
                c15 && (e16.dashstyle = c15);
                return e16;
            };
            h12.prototype.drawPoints = function() {
                var a10 = this, b9 = this.chart, c15 = a10.options, e16 = b9.renderer, h13 = c15.animationLimit || 250, f28;
                a10.points.forEach(function(d5) {
                    var g12 = d5.graphic, k24 = !!g12, l17 = g12 && b9.pointCount < h13 ? "animate" : "attr";
                    if (I(d5.plotY) && null !== d5.y) {
                        f28 = d5.shapeArgs;
                        g12 && d5.hasNewShapeType() && (g12 = g12.destroy());
                        a10.enabledDataSorting && (d5.startXPos = a10.xAxis.reversed ? -(f28 ? f28.width || 0 : 0) : a10.xAxis.width);
                        g12 || (d5.graphic = g12 = e16[d5.shapeType](f28).add(d5.group || a10.group)) && a10.enabledDataSorting && b9.hasRendered && b9.pointCount < h13 && (g12.attr({
                            x: d5.startXPos
                        }), k24 = !0, l17 = "animate");
                        if (g12 && k24) g12[l17](D2(f28));
                        if (c15.borderRadius) g12[l17]({
                            r: c15.borderRadius
                        });
                        b9.styledMode || g12[l17](a10.pointAttribs(d5, d5.selected && "select")).shadow(!1 !== d5.allowShadow && c15.shadow, null, c15.stacking && !c15.borderRadius);
                        g12 && (g12.addClass(d5.getClassName(), !0), g12.attr({
                            visibility: d5.visible ? "inherit" : "hidden"
                        }));
                    } else g12 && (d5.graphic = g12.destroy());
                });
            };
            h12.prototype.drawTracker = function() {
                var a10 = this, b9 = a10.chart, e16 = b9.pointer, h13 = function(a13) {
                    var b11 = e16.getPointFromEvent(a13);
                    "undefined" !== typeof b11 && (e16.isDirectTouch = !0, b11.onMouseOver(a13));
                }, f28;
                a10.points.forEach(function(a13) {
                    f28 = k22(a13.dataLabels) ? a13.dataLabels : a13.dataLabel ? [
                        a13.dataLabel
                    ] : [];
                    a13.graphic && (a13.graphic.element.point = a13);
                    f28.forEach(function(b11) {
                        b11.div ? b11.div.point = a13 : b11.element.point = a13;
                    });
                });
                a10._hasTracking || (a10.trackerGroups.forEach(function(d5) {
                    if (a10[d5]) {
                        a10[d5].addClass("highcharts-tracker").on("mouseover", h13).on("mouseout", function(a13) {
                            e16.onTrackerMouseOut(a13);
                        });
                        if (c3) a10[d5].on("touchstart", h13);
                        !b9.styledMode && a10.options.cursor && a10[d5].css(l16).css({
                            cursor: a10.options.cursor
                        });
                    }
                }), a10._hasTracking = !0);
                q10(this, "afterDrawTracker");
            };
            h12.prototype.remove = function() {
                var a10 = this, b9 = a10.chart;
                b9.hasRendered && b9.series.forEach(function(b11) {
                    b11.type === a10.type && (b11.isDirty = !0);
                });
                x2.prototype.remove.apply(a10, arguments);
            };
            h12.defaultOptions = D2(x2.defaultOptions, {
                borderRadius: 0,
                centerInCategory: !1,
                groupPadding: 0.2,
                marker: null,
                pointPadding: 0.1,
                minPointLength: 0,
                cropThreshold: 50,
                pointRange: null,
                states: {
                    hover: {
                        halo: !1,
                        brightness: 0.1
                    },
                    select: {
                        color: z2.neutralColor20,
                        borderColor: z2.neutralColor100
                    }
                },
                dataLabels: {
                    align: void 0,
                    verticalAlign: void 0,
                    y: void 0
                },
                startFromThreshold: !0,
                stickyTracking: !1,
                tooltip: {
                    distance: 6
                },
                threshold: 0,
                borderColor: z2.backgroundColor
            });
            return h12;
        })(x2);
        r2(u7.prototype, {
            cropShoulder: 0,
            directTouch: !0,
            drawLegendSymbol: E2.drawRectangle,
            getSymbol: a1,
            negStacks: !0,
            trackerGroups: [
                "group",
                "dataLabelsGroup"
            ]
        });
        J2.registerSeriesType("column", u7);
        return u7;
    });
    M(a3, "Core/Series/DataLabel.js", [
        a3["Core/Animation/AnimationUtilities.js"],
        a3["Core/FormatUtilities.js"],
        a3["Core/Color/Palette.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w2, C2, E2) {
        var r2 = a1.getDeferredAnimation, x2 = w2.format, J2 = E2.defined, u7 = E2.extend, n13 = E2.fireEvent, m7 = E2.isArray, g2 = E2.merge, c3 = E2.objectEach, e5 = E2.pick, l16 = E2.splat, f26;
        (function(a9) {
            function f28(a10, c15, b9, f29, g12) {
                var d5 = this, h12 = this.chart, k22 = this.isCartesian && h12.inverted, l17 = this.enabledDataSorting, m12 = e5(a10.dlBox && a10.dlBox.centerX, a10.plotX, -9999), n15 = e5(a10.plotY, -9999), p14 = c15.getBBox(), r10 = b9.rotation, t8 = b9.align, q10 = h12.isInsidePlot(m12, Math.round(n15), {
                    inverted: k22,
                    paneCoordinates: !0,
                    series: d5
                }), v4 = function(b11) {
                    l17 && d5.xAxis && !B2 && d5.setDataLabelStartPos(a10, c15, g12, q10, b11);
                }, B2 = "justify" === e5(b9.overflow, l17 ? "none" : "justify"), x4 = this.visible && !1 !== a10.visible && (a10.series.forceDL || l17 && !B2 || q10 || e5(b9.inside, !!this.options.stacking) && f29 && h12.isInsidePlot(m12, k22 ? f29.x + 1 : f29.y + f29.height - 1, {
                    inverted: k22,
                    paneCoordinates: !0,
                    series: d5
                }));
                if (x4) {
                    var w4 = h12.renderer.fontMetrics(h12.styledMode ? void 0 : b9.style.fontSize, c15).b;
                    f29 = u7({
                        x: k22 ? this.yAxis.len - n15 : m12,
                        y: Math.round(k22 ? this.xAxis.len - m12 : n15),
                        width: 0,
                        height: 0
                    }, f29);
                    u7(b9, {
                        width: p14.width,
                        height: p14.height
                    });
                    r10 ? (B2 = !1, m12 = h12.renderer.rotCorr(w4, r10), m12 = {
                        x: f29.x + (b9.x || 0) + f29.width / 2 + m12.x,
                        y: f29.y + (b9.y || 0) + ({
                            top: 0,
                            middle: 0.5,
                            bottom: 1
                        })[b9.verticalAlign] * f29.height
                    }, v4(m12), c15[g12 ? "attr" : "animate"](m12).attr({
                        align: t8
                    }), v4 = (r10 + 720) % 360, v4 = 180 < v4 && 360 > v4, "left" === t8 ? m12.y -= v4 ? p14.height : 0 : "center" === t8 ? (m12.x -= p14.width / 2, m12.y -= p14.height / 2) : "right" === t8 && (m12.x -= p14.width, m12.y -= v4 ? 0 : p14.height), c15.placed = !0, c15.alignAttr = m12) : (v4(f29), c15.align(b9, void 0, f29), m12 = c15.alignAttr);
                    B2 && 0 <= f29.height ? this.justifyDataLabel(c15, b9, m12, p14, f29, g12) : e5(b9.crop, !0) && (x4 = h12.isInsidePlot(m12.x, m12.y, {
                        paneCoordinates: !0,
                        series: d5
                    }) && h12.isInsidePlot(m12.x + p14.width, m12.y + p14.height, {
                        paneCoordinates: !0,
                        series: d5
                    }));
                    if (b9.shape && !r10) c15[g12 ? "attr" : "animate"]({
                        anchorX: k22 ? h12.plotWidth - a10.plotY : a10.plotX,
                        anchorY: k22 ? h12.plotHeight - a10.plotX : a10.plotY
                    });
                }
                g12 && l17 && (c15.placed = !1);
                x4 || l17 && !B2 || (c15.hide(!0), c15.placed = !1);
            }
            function k22(a10, c15) {
                var b9 = c15.filter;
                return b9 ? (c15 = b9.operator, a10 = a10[b9.property], b9 = b9.value, ">" === c15 && a10 > b9 || "<" === c15 && a10 < b9 || ">=" === c15 && a10 >= b9 || "<=" === c15 && a10 <= b9 || "==" === c15 && a10 == b9 || "===" === c15 && a10 === b9 ? !0 : !1) : !0;
            }
            function v4() {
                var a10 = this, d5 = a10.chart, b9 = a10.options, f29 = a10.points, g12 = a10.hasRendered || 0, t8 = d5.renderer, q10 = b9.dataLabels, v7, u9 = q10.animation;
                u9 = q10.defer ? r2(d5, u9, a10) : {
                    defer: 0,
                    duration: 0
                };
                q10 = B3(B3(d5.options.plotOptions && d5.options.plotOptions.series && d5.options.plotOptions.series.dataLabels, d5.options.plotOptions && d5.options.plotOptions[a10.type] && d5.options.plotOptions[a10.type].dataLabels), q10);
                n13(this, "drawDataLabels");
                if (m7(q10) || q10.enabled || a10._hasPointLabels) {
                    var w5 = a10.plotGroup("dataLabelsGroup", "data-labels", g12 ? "inherit" : "hidden", q10.zIndex || 6);
                    w5.attr({
                        opacity: +g12
                    });
                    !g12 && (g12 = a10.dataLabelsGroup) && (a10.visible && w5.show(!0), g12[b9.animation ? "animate" : "attr"]({
                        opacity: 1
                    }, u9));
                    f29.forEach(function(f30) {
                        v7 = l16(B3(q10, f30.dlOptions || f30.options && f30.options.dataLabels));
                        v7.forEach(function(h12, g13) {
                            var l17 = h12.enabled && (!f30.isNull || f30.dataLabelOnNull) && k22(f30, h12), m12 = f30.connectors ? f30.connectors[g13] : f30.connector, n15 = f30.dataLabels ? f30.dataLabels[g13] : f30.dataLabel, p14 = e5(h12.distance, f30.labelDistance), r10 = !n15;
                            if (l17) {
                                var q11 = f30.getLabelConfig();
                                var v8 = e5(h12[f30.formatPrefix + "Format"], h12.format);
                                q11 = J2(v8) ? x2(v8, q11, d5) : (h12[f30.formatPrefix + "Formatter"] || h12.formatter).call(q11, h12);
                                v8 = h12.style;
                                var u10 = h12.rotation;
                                d5.styledMode || (v8.color = e5(h12.color, v8.color, a10.color, C2.neutralColor100), "contrast" === v8.color ? (f30.contrastColor = t8.getContrast(f30.color || a10.color), v8.color = !J2(p14) && h12.inside || 0 > p14 || b9.stacking ? f30.contrastColor : C2.neutralColor100) : delete f30.contrastColor, b9.cursor && (v8.cursor = b9.cursor));
                                var B2 = {
                                    r: h12.borderRadius || 0,
                                    rotation: u10,
                                    padding: h12.padding,
                                    zIndex: 1
                                };
                                d5.styledMode || (B2.fill = h12.backgroundColor, B2.stroke = h12.borderColor, B2["stroke-width"] = h12.borderWidth);
                                c3(B2, function(a13, b11) {
                                    "undefined" === typeof a13 && delete B2[b11];
                                });
                            }
                            !n15 || l17 && J2(q11) ? l17 && J2(q11) && (n15 ? B2.text = q11 : (f30.dataLabels = f30.dataLabels || [], n15 = f30.dataLabels[g13] = u10 ? t8.text(q11, 0, -9999, h12.useHTML).addClass("highcharts-data-label") : t8.label(q11, 0, -9999, h12.shape, null, null, h12.useHTML, null, "data-label"), g13 || (f30.dataLabel = n15), n15.addClass(" highcharts-data-label-color-" + f30.colorIndex + " " + (h12.className || "") + (h12.useHTML ? " highcharts-tracker" : ""))), n15.options = h12, n15.attr(B2), d5.styledMode || n15.css(v8).shadow(h12.shadow), n15.added || n15.add(w5), h12.textPath && !h12.useHTML && (n15.setTextPath(f30.getDataLabelPath && f30.getDataLabelPath(n15) || f30.graphic, h12.textPath), f30.dataLabelPath && !h12.textPath.enabled && (f30.dataLabelPath = f30.dataLabelPath.destroy())), a10.alignDataLabel(f30, n15, h12, null, r10)) : (f30.dataLabel = f30.dataLabel && f30.dataLabel.destroy(), f30.dataLabels && (1 === f30.dataLabels.length ? delete f30.dataLabels : delete f30.dataLabels[g13]), g13 || delete f30.dataLabel, m12 && (f30.connector = f30.connector.destroy(), f30.connectors && (1 === f30.connectors.length ? delete f30.connectors : delete f30.connectors[g13])));
                        });
                    });
                }
                n13(this, "afterDrawDataLabels");
            }
            function w6(a10, c15, b9, e16, f29, g12) {
                var d5 = this.chart, h12 = c15.align, k24 = c15.verticalAlign, l17 = a10.box ? 0 : a10.padding || 0, m12 = c15.x;
                m12 = (void 0) === m12 ? 0 : m12;
                var n15 = c15.y;
                n15 = (void 0) === n15 ? 0 : n15;
                var p14 = (b9.x || 0) + l17;
                if (0 > p14) {
                    "right" === h12 && 0 <= m12 ? (c15.align = "left", c15.inside = !0) : m12 -= p14;
                    var r10 = !0;
                }
                p14 = (b9.x || 0) + e16.width - l17;
                p14 > d5.plotWidth && ("left" === h12 && 0 >= m12 ? (c15.align = "right", c15.inside = !0) : m12 += d5.plotWidth - p14, r10 = !0);
                p14 = b9.y + l17;
                0 > p14 && ("bottom" === k24 && 0 <= n15 ? (c15.verticalAlign = "top", c15.inside = !0) : n15 -= p14, r10 = !0);
                p14 = (b9.y || 0) + e16.height - l17;
                p14 > d5.plotHeight && ("top" === k24 && 0 >= n15 ? (c15.verticalAlign = "bottom", c15.inside = !0) : n15 += d5.plotHeight - p14, r10 = !0);
                r10 && (c15.x = m12, c15.y = n15, a10.placed = !g12, a10.align(c15, void 0, f29));
                return r10;
            }
            function B3(a10, c15) {
                var b9 = [], d5;
                if (m7(a10) && !m7(c15)) b9 = a10.map(function(a13) {
                    return g2(a13, c15);
                });
                else if (m7(c15) && !m7(a10)) b9 = c15.map(function(b11) {
                    return g2(a10, b11);
                });
                else if (m7(a10) || m7(c15)) for(d5 = Math.max(a10.length, c15.length); d5--;)b9[d5] = g2(a10[d5], c15[d5]);
                else b9 = g2(a10, c15);
                return b9;
            }
            function z2(a10, c15, b9, e16, f29) {
                var d5 = this.chart, h12 = d5.inverted, g12 = this.xAxis, k24 = g12.reversed, l17 = h12 ? c15.height / 2 : c15.width / 2;
                a10 = (a10 = a10.pointWidth) ? a10 / 2 : 0;
                c15.startXPos = h12 ? f29.x : k24 ? -l17 - a10 : g12.width - l17 + a10;
                c15.startYPos = h12 ? k24 ? this.yAxis.height - l17 + a10 : -l17 - a10 : f29.y;
                e16 ? "hidden" === c15.visibility && (c15.show(), c15.attr({
                    opacity: 0
                }).animate({
                    opacity: 1
                })) : c15.attr({
                    opacity: 1
                }).animate({
                    opacity: 0
                }, void 0, c15.hide);
                d5.hasRendered && (b9 && c15.attr({
                    x: c15.startXPos,
                    y: c15.startYPos
                }), c15.placed = !0);
            }
            var t8 = [];
            a9.compose = function(a10) {
                if (-1 === t8.indexOf(a10)) {
                    var c15 = a10.prototype;
                    t8.push(a10);
                    c15.alignDataLabel = f28;
                    c15.drawDataLabels = v4;
                    c15.justifyDataLabel = w6;
                    c15.setDataLabelStartPos = z2;
                }
            };
        })(f26 || (f26 = {
        }));
        return f26;
    });
    M(a3, "Series/Column/ColumnDataLabel.js", [
        a3["Core/Series/DataLabel.js"],
        a3["Core/Series/SeriesRegistry.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w2, C2) {
        var r2 = w2.series, z2 = C2.merge, x2 = C2.pick, J2;
        (function(u7) {
            function n13(a9, c3, e5, l16, f26) {
                var g2 = this.chart.inverted, m7 = a9.series, k22 = a9.dlBox || a9.shapeArgs, n15 = x2(a9.below, a9.plotY > x2(this.translatedThreshold, m7.yAxis.len)), u9 = x2(e5.inside, !!this.options.stacking);
                k22 && (l16 = z2(k22), 0 > l16.y && (l16.height += l16.y, l16.y = 0), k22 = l16.y + l16.height - m7.yAxis.len, 0 < k22 && k22 < l16.height && (l16.height -= k22), g2 && (l16 = {
                    x: m7.yAxis.len - l16.y - l16.height,
                    y: m7.xAxis.len - l16.x - l16.width,
                    width: l16.height,
                    height: l16.width
                }), u9 || (g2 ? (l16.x += n15 ? 0 : l16.width, l16.width = 0) : (l16.y += n15 ? l16.height : 0, l16.height = 0)));
                e5.align = x2(e5.align, !g2 || u9 ? "center" : n15 ? "right" : "left");
                e5.verticalAlign = x2(e5.verticalAlign, g2 || u9 ? "middle" : n15 ? "top" : "bottom");
                r2.prototype.alignDataLabel.call(this, a9, c3, e5, l16, f26);
                e5.inside && a9.contrastColor && c3.css({
                    color: a9.contrastColor
                });
            }
            var m7 = [];
            u7.compose = function(g2) {
                a1.compose(r2);
                -1 === m7.indexOf(g2) && (m7.push(g2), g2.prototype.alignDataLabel = n13);
            };
        })(J2 || (J2 = {
        }));
        return J2;
    });
    M(a3, "Series/Bar/BarSeries.js", [
        a3["Series/Column/ColumnSeries.js"],
        a3["Core/Series/SeriesRegistry.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w2, C2) {
        var r2 = this && this.__extends || function() {
            var a9 = function(r11, n13) {
                a9 = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(a10, g2) {
                    a10.__proto__ = g2;
                } || function(a10, g2) {
                    for(var c3 in g2)g2.hasOwnProperty(c3) && (a10[c3] = g2[c3]);
                };
                return a9(r11, n13);
            };
            return function(r11, n13) {
                function m7() {
                    this.constructor = r11;
                }
                a9(r11, n13);
                r11.prototype = null === n13 ? Object.create(n13) : (m7.prototype = n13.prototype, new m7);
            };
        }(), z2 = C2.extend, x2 = C2.merge;
        C2 = (function(w6) {
            function u7() {
                var a9 = null !== w6 && w6.apply(this, arguments) || this;
                a9.data = void 0;
                a9.options = void 0;
                a9.points = void 0;
                return a9;
            }
            r2(u7, w6);
            u7.defaultOptions = x2(a1.defaultOptions, {
            });
            return u7;
        })(a1);
        z2(C2.prototype, {
            inverted: !0
        });
        w2.registerSeriesType("bar", C2);
        return C2;
    });
    M(a3, "Series/Scatter/ScatterSeries.js", [
        a3["Series/Column/ColumnSeries.js"],
        a3["Series/Line/LineSeries.js"],
        a3["Core/Series/SeriesRegistry.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w2, C2, E2) {
        var r2 = this && this.__extends || function() {
            var a9 = function(m7, g2) {
                a9 = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(a10, e5) {
                    a10.__proto__ = e5;
                } || function(a10, e5) {
                    for(var c3 in e5)e5.hasOwnProperty(c3) && (a10[c3] = e5[c3]);
                };
                return a9(m7, g2);
            };
            return function(m7, g2) {
                function c3() {
                    this.constructor = m7;
                }
                a9(m7, g2);
                m7.prototype = null === g2 ? Object.create(g2) : (c3.prototype = g2.prototype, new c3);
            };
        }(), x2 = E2.addEvent, J2 = E2.extend, u7 = E2.merge;
        E2 = (function(a9) {
            function m7() {
                var g2 = null !== a9 && a9.apply(this, arguments) || this;
                g2.data = void 0;
                g2.options = void 0;
                g2.points = void 0;
                return g2;
            }
            r2(m7, a9);
            m7.prototype.applyJitter = function() {
                var a10 = this, c3 = this.options.jitter, e5 = this.points.length;
                c3 && this.points.forEach(function(g2, f26) {
                    [
                        "x",
                        "y"
                    ].forEach(function(l16, m12) {
                        var k22 = "plot" + l16.toUpperCase();
                        if (c3[l16] && !g2.isNull) {
                            var n13 = a10[l16 + "Axis"];
                            var r11 = c3[l16] * n13.transA;
                            if (n13 && !n13.isLog) {
                                var q10 = Math.max(0, g2[k22] - r11);
                                n13 = Math.min(n13.len, g2[k22] + r11);
                                m12 = 10000 * Math.sin(f26 + m12 * e5);
                                g2[k22] = q10 + (n13 - q10) * (m12 - Math.floor(m12));
                                "x" === l16 && (g2.clientX = g2.plotX);
                            }
                        }
                    });
                });
            };
            m7.prototype.drawGraph = function() {
                this.options.lineWidth ? a9.prototype.drawGraph.call(this) : this.graph && (this.graph = this.graph.destroy());
            };
            m7.defaultOptions = u7(w2.defaultOptions, {
                lineWidth: 0,
                findNearestPointBy: "xy",
                jitter: {
                    x: 0,
                    y: 0
                },
                marker: {
                    enabled: !0
                },
                tooltip: {
                    headerFormat: '<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {series.name}</span><br/>',
                    pointFormat: "x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"
                }
            });
            return m7;
        })(w2);
        J2(E2.prototype, {
            drawTracker: a1.prototype.drawTracker,
            sorted: !1,
            requireSorting: !1,
            noSharedTooltip: !0,
            trackerGroups: [
                "group",
                "markerGroup",
                "dataLabelsGroup"
            ],
            takeOrdinalPosition: !1
        });
        x2(E2, "afterTranslate", function() {
            this.applyJitter();
        });
        C2.registerSeriesType("scatter", E2);
        return E2;
    });
    M(a3, "Mixins/CenteredSeries.js", [
        a3["Core/Globals.js"],
        a3["Core/Series/Series.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w2, C2) {
        var r2 = C2.isNumber, z2 = C2.pick, x2 = C2.relativeLength, J2 = a1.deg2rad;
        return a1.CenteredSeriesMixin = {
            getCenter: function() {
                var a9 = this.options, n15 = this.chart, m7 = 2 * (a9.slicedOffset || 0), g2 = n15.plotWidth - 2 * m7, c3 = n15.plotHeight - 2 * m7, e5 = a9.center, l16 = Math.min(g2, c3), f26 = a9.size, r12 = a9.innerSize || 0;
                "string" === typeof f26 && (f26 = parseFloat(f26));
                "string" === typeof r12 && (r12 = parseFloat(r12));
                a9 = [
                    z2(e5[0], "50%"),
                    z2(e5[1], "50%"),
                    z2(f26 && 0 > f26 ? void 0 : a9.size, "100%"),
                    z2(r12 && 0 > r12 ? void 0 : a9.innerSize || 0, "0%")
                ];
                !n15.angular || this instanceof w2 || (a9[3] = 0);
                for(e5 = 0; 4 > e5; ++e5)f26 = a9[e5], n15 = 2 > e5 || 2 === e5 && /%$/.test(f26), a9[e5] = x2(f26, [
                    g2,
                    c3,
                    l16,
                    a9[2]
                ][e5]) + (n15 ? m7 : 0);
                a9[3] > a9[2] && (a9[3] = a9[2]);
                return a9;
            },
            getStartAndEndRadians: function(a9, n15) {
                a9 = r2(a9) ? a9 : 0;
                n15 = r2(n15) && n15 > a9 && 360 > n15 - a9 ? n15 : a9 + 360;
                return {
                    start: J2 * (a9 + -90),
                    end: J2 * (n15 + -90)
                };
            }
        };
    });
    M(a3, "Series/Pie/PiePoint.js", [
        a3["Core/Animation/AnimationUtilities.js"],
        a3["Core/Series/Point.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w2, C2) {
        var r2 = this && this.__extends || function() {
            var a9 = function(c3, e5) {
                a9 = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(a10, c16) {
                    a10.__proto__ = c16;
                } || function(a10, c16) {
                    for(var e16 in c16)c16.hasOwnProperty(e16) && (a10[e16] = c16[e16]);
                };
                return a9(c3, e5);
            };
            return function(c3, e5) {
                function g2() {
                    this.constructor = c3;
                }
                a9(c3, e5);
                c3.prototype = null === e5 ? Object.create(e5) : (g2.prototype = e5.prototype, new g2);
            };
        }(), z2 = a1.setAnimation, x2 = C2.addEvent, J2 = C2.defined;
        a1 = C2.extend;
        var u7 = C2.isNumber, n15 = C2.pick, m7 = C2.relativeLength;
        w2 = (function(a9) {
            function c3() {
                var c16 = null !== a9 && a9.apply(this, arguments) || this;
                c16.labelDistance = void 0;
                c16.options = void 0;
                c16.series = void 0;
                return c16;
            }
            r2(c3, a9);
            c3.prototype.getConnectorPath = function() {
                var a10 = this.labelPosition, c16 = this.series.options.dataLabels, f26 = this.connectorShapes, g2 = c16.connectorShape;
                f26[g2] && (g2 = f26[g2]);
                return g2.call(this, {
                    x: a10.final.x,
                    y: a10.final.y,
                    alignment: a10.alignment
                }, a10.connectorPosition, c16);
            };
            c3.prototype.getTranslate = function() {
                return this.sliced ? this.slicedTranslation : {
                    translateX: 0,
                    translateY: 0
                };
            };
            c3.prototype.haloPath = function(a10) {
                var c16 = this.shapeArgs;
                return this.sliced || !this.visible ? [] : this.series.chart.renderer.symbols.arc(c16.x, c16.y, c16.r + a10, c16.r + a10, {
                    innerR: c16.r - 1,
                    start: c16.start,
                    end: c16.end
                });
            };
            c3.prototype.init = function() {
                var c16 = this;
                a9.prototype.init.apply(this, arguments);
                this.name = n15(this.name, "Slice");
                var g2 = function(a10) {
                    c16.slice("select" === a10.type);
                };
                x2(this, "select", g2);
                x2(this, "unselect", g2);
                return this;
            };
            c3.prototype.isValid = function() {
                return u7(this.y) && 0 <= this.y;
            };
            c3.prototype.setVisible = function(a10, c16) {
                var e5 = this, g2 = this.series, l16 = g2.chart, k22 = g2.options.ignoreHiddenPoint;
                c16 = n15(c16, k22);
                a10 !== this.visible && (this.visible = this.options.visible = a10 = "undefined" === typeof a10 ? !this.visible : a10, g2.options.data[g2.data.indexOf(this)] = this.options, [
                    "graphic",
                    "dataLabel",
                    "connector",
                    "shadowGroup"
                ].forEach(function(c17) {
                    if (e5[c17]) e5[c17][a10 ? "show" : "hide"](a10);
                }), this.legendItem && l16.legend.colorizeItem(this, a10), a10 || "hover" !== this.state || this.setState(""), k22 && (g2.isDirty = !0), c16 && l16.redraw());
            };
            c3.prototype.slice = function(a10, c16, f26) {
                var e5 = this.series;
                z2(f26, e5.chart);
                n15(c16, !0);
                this.sliced = this.options.sliced = J2(a10) ? a10 : !this.sliced;
                e5.options.data[e5.data.indexOf(this)] = this.options;
                this.graphic && this.graphic.animate(this.getTranslate());
                this.shadowGroup && this.shadowGroup.animate(this.getTranslate());
            };
            return c3;
        })(w2);
        a1(w2.prototype, {
            connectorShapes: {
                fixedOffset: function(a9, c3, e5) {
                    var g2 = c3.breakAt;
                    c3 = c3.touchingSliceAt;
                    return [
                        [
                            "M",
                            a9.x,
                            a9.y
                        ],
                        e5.softConnector ? [
                            "C",
                            a9.x + ("left" === a9.alignment ? -5 : 5),
                            a9.y,
                            2 * g2.x - c3.x,
                            2 * g2.y - c3.y,
                            g2.x,
                            g2.y
                        ] : [
                            "L",
                            g2.x,
                            g2.y
                        ],
                        [
                            "L",
                            c3.x,
                            c3.y
                        ]
                    ];
                },
                straight: function(a9, c3) {
                    c3 = c3.touchingSliceAt;
                    return [
                        [
                            "M",
                            a9.x,
                            a9.y
                        ],
                        [
                            "L",
                            c3.x,
                            c3.y
                        ]
                    ];
                },
                crookedLine: function(a9, c3, e5) {
                    c3 = c3.touchingSliceAt;
                    var g2 = this.series, f26 = g2.center[0], n16 = g2.chart.plotWidth, r12 = g2.chart.plotLeft;
                    g2 = a9.alignment;
                    var k22 = this.shapeArgs.r;
                    e5 = m7(e5.crookDistance, 1);
                    n16 = "left" === g2 ? f26 + k22 + (n16 + r12 - f26 - k22) * (1 - e5) : r12 + (f26 - k22) * e5;
                    e5 = [
                        "L",
                        n16,
                        a9.y
                    ];
                    f26 = !0;
                    if ("left" === g2 ? n16 > a9.x || n16 < c3.x : n16 < a9.x || n16 > c3.x) f26 = !1;
                    a9 = [
                        [
                            "M",
                            a9.x,
                            a9.y
                        ]
                    ];
                    f26 && a9.push(e5);
                    a9.push([
                        "L",
                        c3.x,
                        c3.y
                    ]);
                    return a9;
                }
            }
        });
        return w2;
    });
    M(a3, "Series/Pie/PieSeries.js", [
        a3["Mixins/CenteredSeries.js"],
        a3["Series/Column/ColumnSeries.js"],
        a3["Core/Globals.js"],
        a3["Core/Legend/LegendSymbol.js"],
        a3["Core/Color/Palette.js"],
        a3["Series/Pie/PiePoint.js"],
        a3["Core/Series/Series.js"],
        a3["Core/Series/SeriesRegistry.js"],
        a3["Core/Renderer/SVG/Symbols.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w2, C2, E2, z2, x2, J2, u7, n15, m7) {
        var g2 = this && this.__extends || function() {
            var a9 = function(c3, e5) {
                a9 = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(a10, c16) {
                    a10.__proto__ = c16;
                } || function(a10, c16) {
                    for(var e16 in c16)c16.hasOwnProperty(e16) && (a10[e16] = c16[e16]);
                };
                return a9(c3, e5);
            };
            return function(c3, e5) {
                function f26() {
                    this.constructor = c3;
                }
                a9(c3, e5);
                c3.prototype = null === e5 ? Object.create(e5) : (f26.prototype = e5.prototype, new f26);
            };
        }(), c3 = a1.getStartAndEndRadians;
        C2 = C2.noop;
        var e5 = m7.clamp, l16 = m7.extend, f26 = m7.fireEvent, r2 = m7.merge, q12 = m7.pick, k22 = m7.relativeLength;
        m7 = (function(a9) {
            function l17() {
                var c16 = null !== a9 && a9.apply(this, arguments) || this;
                c16.center = void 0;
                c16.data = void 0;
                c16.maxLabelDistance = void 0;
                c16.options = void 0;
                c16.points = void 0;
                return c16;
            }
            g2(l17, a9);
            l17.prototype.animate = function(a10) {
                var c16 = this, e16 = c16.points, f28 = c16.startAngleRad;
                a10 || e16.forEach(function(a13) {
                    var b9 = a13.graphic, d5 = a13.shapeArgs;
                    b9 && d5 && (b9.attr({
                        r: q12(a13.startR, c16.center && c16.center[3] / 2),
                        start: f28,
                        end: f28
                    }), b9.animate({
                        r: d5.r,
                        start: d5.start,
                        end: d5.end
                    }, c16.options.animation));
                });
            };
            l17.prototype.drawEmpty = function() {
                var a10 = this.startAngleRad, c16 = this.endAngleRad, e16 = this.options;
                if (0 === this.total && this.center) {
                    var f28 = this.center[0];
                    var d5 = this.center[1];
                    this.graph || (this.graph = this.chart.renderer.arc(f28, d5, this.center[1] / 2, 0, a10, c16).addClass("highcharts-empty-series").add(this.group));
                    this.graph.attr({
                        d: n15.arc(f28, d5, this.center[2] / 2, 0, {
                            start: a10,
                            end: c16,
                            innerR: this.center[3] / 2
                        })
                    });
                    this.chart.styledMode || this.graph.attr({
                        "stroke-width": e16.borderWidth,
                        fill: e16.fillColor || "none",
                        stroke: e16.color || z2.neutralColor20
                    });
                } else this.graph && (this.graph = this.graph.destroy());
            };
            l17.prototype.drawPoints = function() {
                var a10 = this.chart.renderer;
                this.points.forEach(function(c16) {
                    c16.graphic && c16.hasNewShapeType() && (c16.graphic = c16.graphic.destroy());
                    c16.graphic || (c16.graphic = a10[c16.shapeType](c16.shapeArgs).add(c16.series.group), c16.delayedRendering = !0);
                });
            };
            l17.prototype.generatePoints = function() {
                a9.prototype.generatePoints.call(this);
                this.updateTotals();
            };
            l17.prototype.getX = function(a10, c16, f29) {
                var h12 = this.center, d6 = this.radii ? this.radii[f29.index] || 0 : h12[2] / 2;
                a10 = Math.asin(e5((a10 - h12[1]) / (d6 + f29.labelDistance), -1, 1));
                return h12[0] + (c16 ? -1 : 1) * Math.cos(a10) * (d6 + f29.labelDistance) + (0 < f29.labelDistance ? (c16 ? -1 : 1) * this.options.dataLabels.padding : 0);
            };
            l17.prototype.hasData = function() {
                return !!this.processedXData.length;
            };
            l17.prototype.redrawPoints = function() {
                var a10 = this, c16 = a10.chart, e16 = c16.renderer, f29 = a10.options.shadow, d6, b9, g12, k24;
                this.drawEmpty();
                !f29 || a10.shadowGroup || c16.styledMode || (a10.shadowGroup = e16.g("shadow").attr({
                    zIndex: -1
                }).add(a10.group));
                a10.points.forEach(function(h12) {
                    var l18 = {
                    };
                    b9 = h12.graphic;
                    if (!h12.isNull && b9) {
                        var m12 = void 0;
                        k24 = h12.shapeArgs;
                        d6 = h12.getTranslate();
                        c16.styledMode || (m12 = h12.shadowGroup, f29 && !m12 && (m12 = h12.shadowGroup = e16.g("shadow").add(a10.shadowGroup)), m12 && m12.attr(d6), g12 = a10.pointAttribs(h12, h12.selected && "select"));
                        h12.delayedRendering ? (b9.setRadialReference(a10.center).attr(k24).attr(d6), c16.styledMode || b9.attr(g12).attr({
                            "stroke-linejoin": "round"
                        }).shadow(f29, m12), h12.delayedRendering = !1) : (b9.setRadialReference(a10.center), c16.styledMode || r2(!0, l18, g12), r2(!0, l18, k24, d6), b9.animate(l18));
                        b9.attr({
                            visibility: h12.visible ? "inherit" : "hidden"
                        });
                        b9.addClass(h12.getClassName(), !0);
                    } else b9 && (h12.graphic = b9.destroy());
                });
            };
            l17.prototype.sortByAngle = function(a10, c16) {
                a10.sort(function(a13, e16) {
                    return "undefined" !== typeof a13.angle && (e16.angle - a13.angle) * c16;
                });
            };
            l17.prototype.translate = function(a10) {
                this.generatePoints();
                var e16 = this.options, g12 = e16.slicedOffset, h12 = g12 + (e16.borderWidth || 0), d6 = c3(e16.startAngle, e16.endAngle), b9 = this.startAngleRad = d6.start;
                d6 = (this.endAngleRad = d6.end) - b9;
                var l18 = this.points, m13 = e16.dataLabels.distance;
                e16 = e16.ignoreHiddenPoint;
                var n16 = l18.length, r12, v4 = 0;
                a10 || (this.center = a10 = this.getCenter());
                for(r12 = 0; r12 < n16; r12++){
                    var u9 = l18[r12];
                    var x4 = b9 + v4 * d6;
                    !u9.isValid() || e16 && !u9.visible || (v4 += u9.percentage / 100);
                    var w6 = b9 + v4 * d6;
                    var B3 = {
                        x: a10[0],
                        y: a10[1],
                        r: a10[2] / 2,
                        innerR: a10[3] / 2,
                        start: Math.round(1000 * x4) / 1000,
                        end: Math.round(1000 * w6) / 1000
                    };
                    u9.shapeType = "arc";
                    u9.shapeArgs = B3;
                    u9.labelDistance = q12(u9.options.dataLabels && u9.options.dataLabels.distance, m13);
                    u9.labelDistance = k22(u9.labelDistance, B3.r);
                    this.maxLabelDistance = Math.max(this.maxLabelDistance || 0, u9.labelDistance);
                    w6 = (w6 + x4) / 2;
                    w6 > 1.5 * Math.PI ? w6 -= 2 * Math.PI : w6 < -Math.PI / 2 && (w6 += 2 * Math.PI);
                    u9.slicedTranslation = {
                        translateX: Math.round(Math.cos(w6) * g12),
                        translateY: Math.round(Math.sin(w6) * g12)
                    };
                    B3 = Math.cos(w6) * a10[2] / 2;
                    var z4 = Math.sin(w6) * a10[2] / 2;
                    u9.tooltipPos = [
                        a10[0] + 0.7 * B3,
                        a10[1] + 0.7 * z4
                    ];
                    u9.half = w6 < -Math.PI / 2 || w6 > Math.PI / 2 ? 1 : 0;
                    u9.angle = w6;
                    x4 = Math.min(h12, u9.labelDistance / 5);
                    u9.labelPosition = {
                        natural: {
                            x: a10[0] + B3 + Math.cos(w6) * u9.labelDistance,
                            y: a10[1] + z4 + Math.sin(w6) * u9.labelDistance
                        },
                        "final": {
                        },
                        alignment: 0 > u9.labelDistance ? "center" : u9.half ? "right" : "left",
                        connectorPosition: {
                            breakAt: {
                                x: a10[0] + B3 + Math.cos(w6) * x4,
                                y: a10[1] + z4 + Math.sin(w6) * x4
                            },
                            touchingSliceAt: {
                                x: a10[0] + B3,
                                y: a10[1] + z4
                            }
                        }
                    };
                }
                f26(this, "afterTranslate");
            };
            l17.prototype.updateTotals = function() {
                var a10 = this.points, c16 = a10.length, e16 = this.options.ignoreHiddenPoint, f29, d6 = 0;
                for(f29 = 0; f29 < c16; f29++){
                    var b9 = a10[f29];
                    !b9.isValid() || e16 && !b9.visible || (d6 += b9.y);
                }
                this.total = d6;
                for(f29 = 0; f29 < c16; f29++)b9 = a10[f29], b9.percentage = 0 < d6 && (b9.visible || !e16) ? b9.y / d6 * 100 : 0, b9.total = d6;
            };
            l17.defaultOptions = r2(J2.defaultOptions, {
                center: [
                    null,
                    null
                ],
                clip: !1,
                colorByPoint: !0,
                dataLabels: {
                    allowOverlap: !0,
                    connectorPadding: 5,
                    connectorShape: "fixedOffset",
                    crookDistance: "70%",
                    distance: 30,
                    enabled: !0,
                    formatter: function() {
                        return this.point.isNull ? void 0 : this.point.name;
                    },
                    softConnector: !0,
                    x: 0
                },
                fillColor: void 0,
                ignoreHiddenPoint: !0,
                inactiveOtherPoints: !0,
                legendType: "point",
                marker: null,
                size: null,
                showInLegend: !1,
                slicedOffset: 10,
                stickyTracking: !1,
                tooltip: {
                    followPointer: !0
                },
                borderColor: z2.backgroundColor,
                borderWidth: 1,
                lineWidth: void 0,
                states: {
                    hover: {
                        brightness: 0.1
                    }
                }
            });
            return l17;
        })(J2);
        l16(m7.prototype, {
            axisTypes: [],
            directTouch: !0,
            drawGraph: void 0,
            drawLegendSymbol: E2.drawRectangle,
            drawTracker: w2.prototype.drawTracker,
            getCenter: a1.getCenter,
            getSymbol: C2,
            isCartesian: !1,
            noSharedTooltip: !0,
            pointAttribs: w2.prototype.pointAttribs,
            pointClass: x2,
            requireSorting: !1,
            searchPoint: C2,
            trackerGroups: [
                "group",
                "dataLabelsGroup"
            ]
        });
        u7.registerSeriesType("pie", m7);
        return m7;
    });
    M(a3, "Series/Pie/PieDataLabel.js", [
        a3["Core/Series/DataLabel.js"],
        a3["Core/Globals.js"],
        a3["Core/Color/Palette.js"],
        a3["Core/Renderer/RendererUtilities.js"],
        a3["Core/Series/SeriesRegistry.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w2, C2, E2, z2, x2) {
        var r2 = w2.noop, u7 = E2.distribute, n15 = z2.series, m7 = x2.arrayMax, g2 = x2.clamp, c3 = x2.defined, e5 = x2.merge, l16 = x2.pick, f26 = x2.relativeLength, v4;
        (function(q12) {
            function k22() {
                var a9 = this, f29 = a9.data, d6 = a9.chart, b11 = a9.options.dataLabels || {
                }, g12 = b11.connectorPadding, k24 = d6.plotWidth, r12 = d6.plotHeight, q13 = d6.plotLeft, v7 = Math.round(d6.chartWidth / 3), w7 = a9.center, x5 = w7[2] / 2, B4 = w7[1], z5 = [
                    [],
                    []
                ], D2 = [
                    0,
                    0,
                    0,
                    0
                ], E3 = a9.dataLabelPositioners, I, J2, M1, O, Z, A5, U, N2, W, X, Y, T;
                a9.visible && (b11.enabled || a9._hasPointLabels) && (f29.forEach(function(a10) {
                    a10.dataLabel && a10.visible && a10.dataLabel.shortened && (a10.dataLabel.attr({
                        width: "auto"
                    }).css({
                        width: "auto",
                        textOverflow: "clip"
                    }), a10.dataLabel.shortened = !1);
                }), n15.prototype.drawDataLabels.apply(a9), f29.forEach(function(a10) {
                    a10.dataLabel && (a10.visible ? (z5[a10.half].push(a10), a10.dataLabel._pos = null, !c3(b11.style.width) && !c3(a10.options.dataLabels && a10.options.dataLabels.style && a10.options.dataLabels.style.width) && a10.dataLabel.getBBox().width > v7 && (a10.dataLabel.css({
                        width: Math.round(0.7 * v7) + "px"
                    }), a10.dataLabel.shortened = !0)) : (a10.dataLabel = a10.dataLabel.destroy(), a10.dataLabels && 1 === a10.dataLabels.length && delete a10.dataLabels));
                }), z5.forEach(function(e16, f30) {
                    var h12 = e16.length, m13 = [], n16;
                    if (h12) {
                        a9.sortByAngle(e16, f30 - 0.5);
                        if (0 < a9.maxLabelDistance) {
                            var p14 = Math.max(0, B4 - x5 - a9.maxLabelDistance);
                            var t8 = Math.min(B4 + x5 + a9.maxLabelDistance, d6.plotHeight);
                            e16.forEach(function(a10) {
                                0 < a10.labelDistance && a10.dataLabel && (a10.top = Math.max(0, B4 - x5 - a10.labelDistance), a10.bottom = Math.min(B4 + x5 + a10.labelDistance, d6.plotHeight), n16 = a10.dataLabel.getBBox().height || 21, a10.distributeBox = {
                                    target: a10.labelPosition.natural.y - a10.top + n16 / 2,
                                    size: n16,
                                    rank: a10.y
                                }, m13.push(a10.distributeBox));
                            });
                            p14 = t8 + n16 - p14;
                            u7(m13, p14, p14 / 5);
                        }
                        for(Y = 0; Y < h12; Y++){
                            I = e16[Y];
                            A5 = I.labelPosition;
                            O = I.dataLabel;
                            X = !1 === I.visible ? "hidden" : "inherit";
                            W = p14 = A5.natural.y;
                            m13 && c3(I.distributeBox) && ("undefined" === typeof I.distributeBox.pos ? X = "hidden" : (U = I.distributeBox.size, W = E3.radialDistributionY(I)));
                            delete I.positionIndex;
                            if (b11.justify) N2 = E3.justify(I, x5, w7);
                            else switch(b11.alignTo){
                                case "connectors":
                                    N2 = E3.alignToConnectors(e16, f30, k24, q13);
                                    break;
                                case "plotEdges":
                                    N2 = E3.alignToPlotEdges(O, f30, k24, q13);
                                    break;
                                default:
                                    N2 = E3.radialDistributionX(a9, I, W, p14);
                            }
                            O._attr = {
                                visibility: X,
                                align: A5.alignment
                            };
                            T = I.options.dataLabels || {
                            };
                            O._pos = {
                                x: N2 + l16(T.x, b11.x) + (({
                                    left: g12,
                                    right: -g12
                                })[A5.alignment] || 0),
                                y: W + l16(T.y, b11.y) - 10
                            };
                            A5.final.x = N2;
                            A5.final.y = W;
                            l16(b11.crop, !0) && (Z = O.getBBox().width, p14 = null, N2 - Z < g12 && 1 === f30 ? (p14 = Math.round(Z - N2 + g12), D2[3] = Math.max(p14, D2[3])) : N2 + Z > k24 - g12 && 0 === f30 && (p14 = Math.round(N2 + Z - k24 + g12), D2[1] = Math.max(p14, D2[1])), 0 > W - U / 2 ? D2[0] = Math.max(Math.round(-W + U / 2), D2[0]) : W + U / 2 > r12 && (D2[2] = Math.max(Math.round(W + U / 2 - r12), D2[2])), O.sideOverflow = p14);
                        }
                    }
                }), 0 === m7(D2) || this.verifyDataLabelOverflow(D2)) && (this.placeDataLabels(), this.points.forEach(function(c16) {
                    T = e5(b11, c16.options.dataLabels);
                    if (J2 = l16(T.connectorWidth, 1)) {
                        var f30;
                        M1 = c16.connector;
                        if ((O = c16.dataLabel) && O._pos && c16.visible && 0 < c16.labelDistance) {
                            X = O._attr.visibility;
                            if (f30 = !M1) c16.connector = M1 = d6.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-" + c16.colorIndex + (c16.className ? " " + c16.className : "")).add(a9.dataLabelsGroup), d6.styledMode || M1.attr({
                                "stroke-width": J2,
                                stroke: T.connectorColor || c16.color || C2.neutralColor60
                            });
                            M1[f30 ? "attr" : "animate"]({
                                d: c16.getConnectorPath()
                            });
                            M1.attr("visibility", X);
                        } else M1 && (c16.connector = M1.destroy());
                    }
                }));
            }
            function v7() {
                this.points.forEach(function(a9) {
                    var c16 = a9.dataLabel, d6;
                    c16 && a9.visible && ((d6 = c16._pos) ? (c16.sideOverflow && (c16._attr.width = Math.max(c16.getBBox().width - c16.sideOverflow, 0), c16.css({
                        width: c16._attr.width + "px",
                        textOverflow: (this.options.dataLabels.style || {
                        }).textOverflow || "ellipsis"
                    }), c16.shortened = !0), c16.attr(c16._attr), c16[c16.moved ? "animate" : "attr"](d6), c16.moved = !0) : c16 && c16.attr({
                        y: -9999
                    }));
                    delete a9.distributeBox;
                }, this);
            }
            function w7(a9) {
                var c16 = this.center, d6 = this.options, b11 = d6.center, e16 = d6.minSize || 80, k24 = null !== d6.size;
                if (!k24) {
                    if (null !== b11[0]) var l17 = Math.max(c16[2] - Math.max(a9[1], a9[3]), e16);
                    else l17 = Math.max(c16[2] - a9[1] - a9[3], e16), c16[0] += (a9[3] - a9[1]) / 2;
                    null !== b11[1] ? l17 = g2(l17, e16, c16[2] - Math.max(a9[0], a9[2])) : (l17 = g2(l17, e16, c16[2] - a9[0] - a9[2]), c16[1] += (a9[0] - a9[2]) / 2);
                    l17 < c16[2] ? (c16[2] = l17, c16[3] = Math.min(f26(d6.innerSize || 0, l17), l17), this.translate(c16), this.drawDataLabels && this.drawDataLabels()) : k24 = !0;
                }
                return k24;
            }
            var x5 = [], z5 = {
                radialDistributionY: function(a9) {
                    return a9.top + a9.distributeBox.pos;
                },
                radialDistributionX: function(a9, c16, d6, b11) {
                    return a9.getX(d6 < c16.top + 2 || d6 > c16.bottom - 2 ? b11 : d6, c16.half, c16);
                },
                justify: function(a9, c16, d6) {
                    return d6[0] + (a9.half ? -1 : 1) * (c16 + a9.labelDistance);
                },
                alignToPlotEdges: function(a9, c16, d6, b11) {
                    a9 = a9.getBBox().width;
                    return c16 ? a9 + b11 : d6 - a9 - b11;
                },
                alignToConnectors: function(a9, c16, d6, b11) {
                    var e16 = 0, f29;
                    a9.forEach(function(a10) {
                        f29 = a10.dataLabel.getBBox().width;
                        f29 > e16 && (e16 = f29);
                    });
                    return c16 ? e16 + b11 : d6 - e16 - b11;
                }
            };
            q12.compose = function(c16) {
                a1.compose(n15);
                -1 === x5.indexOf(c16) && (x5.push(c16), c16 = c16.prototype, c16.dataLabelPositioners = z5, c16.alignDataLabel = r2, c16.drawDataLabels = k22, c16.placeDataLabels = v7, c16.verifyDataLabelOverflow = w7);
            };
        })(v4 || (v4 = {
        }));
        return v4;
    });
    M(a3, "Extensions/OverlappingDataLabels.js", [
        a3["Core/Chart/Chart.js"],
        a3["Core/Utilities.js"]
    ], function(a1, w2) {
        function r2(a9, g2) {
            var c3 = !1;
            if (a9) {
                var e5 = a9.newOpacity;
                a9.oldOpacity !== e5 && (a9.alignAttr && a9.placed ? (a9[e5 ? "removeClass" : "addClass"]("highcharts-data-label-hidden"), c3 = !0, a9.alignAttr.opacity = e5, a9[a9.isOld ? "animate" : "attr"](a9.alignAttr, null, function() {
                    g2.styledMode || a9.css({
                        pointerEvents: e5 ? "auto" : "none"
                    });
                }), z2(g2, "afterHideOverlappingLabel")) : a9.attr({
                    opacity: e5
                }));
                a9.isOld = !0;
            }
            return c3;
        }
        var E2 = w2.addEvent, z2 = w2.fireEvent, x2 = w2.isArray, J2 = w2.isNumber, u7 = w2.objectEach, n15 = w2.pick;
        E2(a1, "render", function() {
            var a9 = this, g2 = [];
            (this.labelCollectors || []).forEach(function(a10) {
                g2 = g2.concat(a10());
            });
            (this.yAxis || []).forEach(function(a10) {
                a10.stacking && a10.options.stackLabels && !a10.options.stackLabels.allowOverlap && u7(a10.stacking.stacks, function(a13) {
                    u7(a13, function(a14) {
                        a14.label && "hidden" !== a14.label.visibility && g2.push(a14.label);
                    });
                });
            });
            (this.series || []).forEach(function(c3) {
                var e16 = c3.options.dataLabels;
                c3.visible && (!1 !== e16.enabled || c3._hasPointLabels) && (e16 = function(c16) {
                    return c16.forEach(function(c17) {
                        c17.visible && (x2(c17.dataLabels) ? c17.dataLabels : c17.dataLabel ? [
                            c17.dataLabel
                        ] : []).forEach(function(e18) {
                            var f26 = e18.options;
                            e18.labelrank = n15(f26.labelrank, c17.labelrank, c17.shapeArgs && c17.shapeArgs.height);
                            f26.allowOverlap ? (e18.oldOpacity = e18.opacity, e18.newOpacity = 1, r2(e18, a9)) : g2.push(e18);
                        });
                    });
                }, e16(c3.nodes || []), e16(c3.points));
            });
            this.hideOverlappingLabels(g2);
        });
        a1.prototype.hideOverlappingLabels = function(a9) {
            var g2 = this, c3 = a9.length, e16 = g2.renderer, l16, f26, m7, n16 = !1;
            var k22 = function(a10) {
                var c16, f29 = a10.box ? 0 : a10.padding || 0, g12 = c16 = 0, d6;
                if (a10 && (!a10.alignAttr || a10.placed)) {
                    var b11 = a10.alignAttr || {
                        x: a10.attr("x"),
                        y: a10.attr("y")
                    };
                    var k24 = a10.parentGroup;
                    a10.width || (c16 = a10.getBBox(), a10.width = c16.width, a10.height = c16.height, c16 = e16.fontMetrics(null, a10.element).h);
                    var l18 = a10.width - 2 * f29;
                    (d6 = ({
                        left: "0",
                        center: "0.5",
                        right: "1"
                    })[a10.alignValue]) ? g12 = +d6 * l18 : J2(a10.x) && Math.round(a10.x) !== a10.translateX && (g12 = a10.x - a10.translateX);
                    return {
                        x: b11.x + (k24.translateX || 0) + f29 - (g12 || 0),
                        y: b11.y + (k24.translateY || 0) + f29 - c16,
                        width: a10.width - 2 * f29,
                        height: a10.height - 2 * f29
                    };
                }
            };
            for(f26 = 0; f26 < c3; f26++)if (l16 = a9[f26]) l16.oldOpacity = l16.opacity, l16.newOpacity = 1, l16.absoluteBox = k22(l16);
            a9.sort(function(a10, c16) {
                return (c16.labelrank || 0) - (a10.labelrank || 0);
            });
            for(f26 = 0; f26 < c3; f26++){
                var u11 = (k22 = a9[f26]) && k22.absoluteBox;
                for(l16 = f26 + 1; l16 < c3; ++l16){
                    var w7 = (m7 = a9[l16]) && m7.absoluteBox;
                    !u11 || !w7 || k22 === m7 || 0 === k22.newOpacity || 0 === m7.newOpacity || w7.x >= u11.x + u11.width || w7.x + w7.width <= u11.x || w7.y >= u11.y + u11.height || w7.y + w7.height <= u11.y || ((k22.labelrank < m7.labelrank ? k22 : m7).newOpacity = 0);
                }
            }
            a9.forEach(function(a10) {
                r2(a10, g2) && (n16 = !0);
            });
            n16 && z2(g2, "afterHideAllOverlappingLabels");
        };
    });
    M(a3, "Core/Responsive.js", [
        a3["Core/Utilities.js"]
    ], function(a1) {
        var r2 = a1.extend, C2 = a1.find, E2 = a1.isArray, z2 = a1.isObject, x2 = a1.merge, J2 = a1.objectEach, u7 = a1.pick, n15 = a1.splat, m7 = a1.uniqueKey, g2;
        (function(a9) {
            var c3 = [];
            a9.compose = function(a10) {
                -1 === c3.indexOf(a10) && (c3.push(a10), r2(a10.prototype, g12.prototype));
                return a10;
            };
            var g12 = function() {
                function a10() {
                }
                a10.prototype.currentOptions = function(a13) {
                    function c16(a14, f26, g13, k22) {
                        var h12;
                        J2(a14, function(a15, b12) {
                            if (!k22 && -1 < e16.collectionsWithUpdate.indexOf(b12) && f26[b12]) for(a15 = n15(a15), g13[b12] = [], h12 = 0; h12 < Math.max(a15.length, f26[b12].length); h12++)f26[b12][h12] && ((void 0) === a15[h12] ? g13[b12][h12] = f26[b12][h12] : (g13[b12][h12] = {
                            }, c16(a15[h12], f26[b12][h12], g13[b12][h12], k22 + 1)));
                            else z2(a15) ? (g13[b12] = E2(a15) ? [] : {
                            }, c16(a15, f26[b12] || {
                            }, g13[b12], k22 + 1)) : g13[b12] = "undefined" === typeof f26[b12] ? null : f26[b12];
                        });
                    }
                    var e16 = this, f26 = {
                    };
                    c16(a13, this.options, f26, 0);
                    return f26;
                };
                a10.prototype.matchResponsiveRule = function(a13, c16) {
                    var e16 = a13.condition;
                    (e16.callback || function() {
                        return this.chartWidth <= u7(e16.maxWidth, Number.MAX_VALUE) && this.chartHeight <= u7(e16.maxHeight, Number.MAX_VALUE) && this.chartWidth >= u7(e16.minWidth, 0) && this.chartHeight >= u7(e16.minHeight, 0);
                    }).call(this) && c16.push(a13._id);
                };
                a10.prototype.setResponsive = function(a13, c16) {
                    var e16 = this, f26 = this.options.responsive, g13 = this.currentResponsive, l16 = [];
                    !c16 && f26 && f26.rules && f26.rules.forEach(function(a14) {
                        "undefined" === typeof a14._id && (a14._id = m7());
                        e16.matchResponsiveRule(a14, l16);
                    }, this);
                    c16 = x2.apply(void 0, l16.map(function(a14) {
                        return C2((f26 || {
                        }).rules || [], function(c17) {
                            return c17._id === a14;
                        });
                    }).map(function(a14) {
                        return a14 && a14.chartOptions;
                    }));
                    c16.isResponsiveOptions = !0;
                    l16 = l16.toString() || void 0;
                    l16 !== (g13 && g13.ruleIds) && (g13 && this.update(g13.undoOptions, a13, !0), l16 ? (g13 = this.currentOptions(c16), g13.isResponsiveOptions = !0, this.currentResponsive = {
                        ruleIds: l16,
                        mergedOptions: c16,
                        undoOptions: g13
                    }, this.update(c16, a13, !0)) : this.currentResponsive = void 0);
                };
                return a10;
            }();
        })(g2 || (g2 = {
        }));
        return g2;
    });
    M(a3, "masters/highcharts.src.js", [
        a3["Core/Globals.js"],
        a3["Core/Utilities.js"],
        a3["Core/DefaultOptions.js"],
        a3["Core/Animation/Fx.js"],
        a3["Core/Animation/AnimationUtilities.js"],
        a3["Core/Renderer/HTML/AST.js"],
        a3["Core/FormatUtilities.js"],
        a3["Core/Renderer/RendererUtilities.js"],
        a3["Core/Renderer/SVG/SVGElement.js"],
        a3["Core/Renderer/SVG/SVGRenderer.js"],
        a3["Core/Renderer/HTML/HTMLElement.js"],
        a3["Core/Renderer/HTML/HTMLRenderer.js"],
        a3["Core/Axis/Axis.js"],
        a3["Core/Axis/DateTimeAxis.js"],
        a3["Core/Axis/LogarithmicAxis.js"],
        a3["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"],
        a3["Core/Axis/Tick.js"],
        a3["Core/Tooltip.js"],
        a3["Core/Series/Point.js"],
        a3["Core/Pointer.js"],
        a3["Core/MSPointer.js"],
        a3["Core/Legend/Legend.js"],
        a3["Core/Chart/Chart.js"],
        a3["Core/Series/Series.js"],
        a3["Core/Series/SeriesRegistry.js"],
        a3["Series/Column/ColumnSeries.js"],
        a3["Series/Column/ColumnDataLabel.js"],
        a3["Series/Pie/PieSeries.js"],
        a3["Series/Pie/PieDataLabel.js"],
        a3["Core/Series/DataLabel.js"],
        a3["Core/Responsive.js"],
        a3["Core/Color/Color.js"],
        a3["Core/Time.js"]
    ], function(a1, w2, C2, E2, z2, x2, J2, u7, n15, m7, g2, c3, e16, l16, f26, v4, q12, k22, I, D2, B4, M1, t9, h12, d6, b12, p15, G8, y, L4, F8, P2, S) {
        a1.animate = z2.animate;
        a1.animObject = z2.animObject;
        a1.getDeferredAnimation = z2.getDeferredAnimation;
        a1.setAnimation = z2.setAnimation;
        a1.stop = z2.stop;
        a1.timers = E2.timers;
        a1.AST = x2;
        a1.Axis = e16;
        a1.Chart = t9;
        a1.chart = t9.chart;
        a1.Fx = E2;
        a1.Legend = M1;
        a1.PlotLineOrBand = v4;
        a1.Point = I;
        a1.Pointer = B4.isRequired() ? B4 : D2;
        a1.Series = h12;
        a1.SVGElement = n15;
        a1.SVGRenderer = m7;
        a1.Tick = q12;
        a1.Time = S;
        a1.Tooltip = k22;
        a1.Color = P2;
        a1.color = P2.parse;
        c3.compose(m7);
        g2.compose(n15);
        a1.defaultOptions = C2.defaultOptions;
        a1.getOptions = C2.getOptions;
        a1.time = C2.defaultTime;
        a1.setOptions = C2.setOptions;
        a1.dateFormat = J2.dateFormat;
        a1.format = J2.format;
        a1.numberFormat = J2.numberFormat;
        a1.addEvent = w2.addEvent;
        a1.arrayMax = w2.arrayMax;
        a1.arrayMin = w2.arrayMin;
        a1.attr = w2.attr;
        a1.clearTimeout = w2.clearTimeout;
        a1.correctFloat = w2.correctFloat;
        a1.createElement = w2.createElement;
        a1.css = w2.css;
        a1.defined = w2.defined;
        a1.destroyObjectProperties = w2.destroyObjectProperties;
        a1.discardElement = w2.discardElement;
        a1.distribute = u7.distribute;
        a1.erase = w2.erase;
        a1.error = w2.error;
        a1.extend = w2.extend;
        a1.extendClass = w2.extendClass;
        a1.find = w2.find;
        a1.fireEvent = w2.fireEvent;
        a1.getMagnitude = w2.getMagnitude;
        a1.getStyle = w2.getStyle;
        a1.inArray = w2.inArray;
        a1.isArray = w2.isArray;
        a1.isClass = w2.isClass;
        a1.isDOMElement = w2.isDOMElement;
        a1.isFunction = w2.isFunction;
        a1.isNumber = w2.isNumber;
        a1.isObject = w2.isObject;
        a1.isString = w2.isString;
        a1.keys = w2.keys;
        a1.merge = w2.merge;
        a1.normalizeTickInterval = w2.normalizeTickInterval;
        a1.objectEach = w2.objectEach;
        a1.offset = w2.offset;
        a1.pad = w2.pad;
        a1.pick = w2.pick;
        a1.pInt = w2.pInt;
        a1.relativeLength = w2.relativeLength;
        a1.removeEvent = w2.removeEvent;
        a1.seriesType = d6.seriesType;
        a1.splat = w2.splat;
        a1.stableSort = w2.stableSort;
        a1.syncTimeout = w2.syncTimeout;
        a1.timeUnits = w2.timeUnits;
        a1.uniqueKey = w2.uniqueKey;
        a1.useSerialIds = w2.useSerialIds;
        a1.wrap = w2.wrap;
        p15.compose(b12);
        L4.compose(h12);
        l16.compose(e16);
        f26.compose(e16);
        y.compose(G8);
        v4.compose(e16);
        F8.compose(t9);
        return a1;
    });
    a3["masters/highcharts.src.js"]._modules = a3;
    return a3["masters/highcharts.src.js"];
});


// tslint:disable:object-literal-sort-keys
const $602e6be15ef65726$var$option1 = {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: "<tr><td style=\"color:{series.color};padding:0\">{series.name}: </td><td style=\"padding:0\"><b>{point.y:.1f} mm</b></td></tr>",
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [
        {
            name: 'Tokyo',
            data: [
                49.9,
                71.5,
                106.4,
                129.2,
                144,
                176,
                135.6,
                148.5,
                216.4,
                194.1,
                95.6,
                54.4
            ]
        },
        {
            name: 'New York',
            data: [
                83.6,
                78.8,
                98.5,
                93.4,
                106,
                84.5,
                105,
                104.3,
                91.2,
                83.5,
                106.6,
                92.3
            ]
        },
        {
            name: 'London',
            data: [
                48.9,
                38.8,
                39.3,
                41.4,
                47,
                48.3,
                59,
                59.6,
                52.4,
                65.2,
                59.3,
                51.2
            ]
        },
        {
            name: 'Berlin',
            data: [
                42.4,
                33.2,
                34.5,
                39.7,
                52.6,
                75.5,
                57.4,
                60.4,
                47.6,
                39.1,
                46.8,
                51.1
            ]
        }, 
    ]
};
const $602e6be15ef65726$var$option2 = {
    chart: {
        type: 'line'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ]
    },
    yAxis: {
        title: {
            text: ''
        }
    },
    plotOptions: {
    },
    series: [
        {
            name: 'Tokyo',
            data: [
                7,
                6.9,
                9.5,
                14.5,
                18.4,
                21.5,
                25.2,
                26.5,
                23.3,
                18.3,
                13.9,
                9.6
            ]
        },
        {
            name: 'London',
            data: [
                3.9,
                4.2,
                5.7,
                8.5,
                11.9,
                15.2,
                17,
                16.6,
                14.2,
                10.3,
                6.6,
                4.8
            ]
        }, 
    ]
};
const $602e6be15ef65726$var$option3 = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser market shares in January, 2018'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [
        {
            name: 'Brands',
            colorByPoint: true,
            data: [
                {
                    name: 'Chrome',
                    y: 61.41,
                    sliced: true,
                    selected: true
                },
                {
                    name: 'Internet Explorer',
                    y: 11.84
                },
                {
                    name: 'Firefox',
                    y: 10.85
                },
                {
                    name: 'Edge',
                    y: 4.67
                },
                {
                    name: 'Safari',
                    y: 4.18
                },
                {
                    name: 'Sogou Explorer',
                    y: 1.64
                },
                {
                    name: 'Opera',
                    y: 1.6
                },
                {
                    name: 'QQ',
                    y: 1.2
                },
                {
                    name: 'Other',
                    y: 2.61
                }, 
            ]
        }, 
    ]
};
const $602e6be15ef65726$var$option4 = {
    chart: {
        type: 'bar'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: [
            'Apples',
            'Oranges',
            'Pears',
            'Grapes',
            'Bananas'
        ]
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [
        {
            name: 'John',
            data: [
                5,
                3,
                4,
                7,
                2
            ]
        },
        {
            name: 'Jane',
            data: [
                2,
                2,
                3,
                2,
                1
            ]
        },
        {
            name: 'Joe',
            data: [
                3,
                4,
                4,
                2,
                5
            ]
        }, 
    ]
};
var // tslint:enable:object-literal-sort-keys
$602e6be15ef65726$export$9099ad97b570f7c = [
    $602e6be15ef65726$var$option1,
    $602e6be15ef65726$var$option2,
    $602e6be15ef65726$var$option3,
    $602e6be15ef65726$var$option4
];


let $ea4828d40e484091$var$optionIndex = 0;
const $ea4828d40e484091$export$7806c7ec05c1ec22 = (ctx)=>{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const option = $602e6be15ef65726$export$9099ad97b570f7c[$ea4828d40e484091$var$optionIndex];
    $ea4828d40e484091$var$optionIndex = ($ea4828d40e484091$var$optionIndex + 1) % $602e6be15ef65726$export$9099ad97b570f7c.length;
    return (/*@__PURE__*/$parcel$interopDefault($d24923853890643b$exports)).chart(ctx, option);
};


function $885154c3de97d42e$export$40f3d9558cf6e846(elements, callback) {
    Array.prototype.forEach.call(elements, callback);
}
function $885154c3de97d42e$export$16f1cf26c931d50f(el, key, value) {
    const attr = (el.getAttribute(key) || '').trim().replace(/\s+/g, ' ').split(' ');
    const index = attr.indexOf(value);
    index === -1 ? attr.push(value) : attr.splice(index, 1);
    el.setAttribute(key, attr.join(' ').trim());
}
const $885154c3de97d42e$export$dd20c6dad8c9f5a3 = ()=>{
    try {
        return window.self !== window.top;
    } catch (e) {
        return true;
    }
};


var $2c62ff1d62a6fed1$exports = {};
/* **********************************************
     Begin prism-core.js
********************************************** */ /// <reference lib="WebWorker"/>
var $2c62ff1d62a6fed1$var$_self = typeof window !== 'undefined' ? window // if in browser
 : typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope ? self // if in worker
 : {
} // if in node js
;
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */ var $2c62ff1d62a6fed1$var$Prism = function(_self) {
    // Private helper vars
    var lang = /\blang(?:uage)?-([\w-]+)\b/i;
    var uniqueId = 0;
    // The grammar object for plaintext
    var plainTextGrammar = {
    };
    var _ = {
        /**
		 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
		 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
		 * additional languages or plugins yourself.
		 *
		 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
		 *
		 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.manual = true;
		 * // add a new <script> to load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */ manual: _self.Prism && _self.Prism.manual,
        disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,
        /**
		 * A namespace for utility methods.
		 *
		 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
		 * change or disappear at any time.
		 *
		 * @namespace
		 * @memberof Prism
		 */ util: {
            encode: function encode(tokens) {
                if (tokens instanceof Token) return new Token(tokens.type, encode(tokens.content), tokens.alias);
                else if (Array.isArray(tokens)) return tokens.map(encode);
                else return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
            },
            /**
			 * Returns the name of the type of the given value.
			 *
			 * @param {any} o
			 * @returns {string}
			 * @example
			 * type(null)      === 'Null'
			 * type(undefined) === 'Undefined'
			 * type(123)       === 'Number'
			 * type('foo')     === 'String'
			 * type(true)      === 'Boolean'
			 * type([1, 2])    === 'Array'
			 * type({})        === 'Object'
			 * type(String)    === 'Function'
			 * type(/abc+/)    === 'RegExp'
			 */ type: function(o) {
                return Object.prototype.toString.call(o).slice(8, -1);
            },
            /**
			 * Returns a unique number for the given object. Later calls will still return the same number.
			 *
			 * @param {Object} obj
			 * @returns {number}
			 */ objId: function(obj) {
                if (!obj['__id']) Object.defineProperty(obj, '__id', {
                    value: ++uniqueId
                });
                return obj['__id'];
            },
            /**
			 * Creates a deep clone of the given object.
			 *
			 * The main intended use of this function is to clone language definitions.
			 *
			 * @param {T} o
			 * @param {Record<number, any>} [visited]
			 * @returns {T}
			 * @template T
			 */ clone: function deepClone(o, visited) {
                visited = visited || {
                };
                var clone;
                var id;
                switch(_.util.type(o)){
                    case 'Object':
                        id = _.util.objId(o);
                        if (visited[id]) return visited[id];
                        clone = {
                        };
                        visited[id] = clone;
                        for(var key in o)if (o.hasOwnProperty(key)) clone[key] = deepClone(o[key], visited);
                        return clone;
                    case 'Array':
                        id = _.util.objId(o);
                        if (visited[id]) return visited[id];
                        clone = [];
                        visited[id] = clone;
                        o.forEach(function(v, i) {
                            clone[i] = deepClone(v, visited);
                        });
                        return clone;
                    default:
                        return o;
                }
            },
            /**
			 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
			 *
			 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
			 *
			 * @param {Element} element
			 * @returns {string}
			 */ getLanguage: function(element) {
                while(element && !lang.test(element.className))element = element.parentElement;
                if (element) return (element.className.match(lang) || [
                    ,
                    'none'
                ])[1].toLowerCase();
                return 'none';
            },
            /**
			 * Returns the script element that is currently executing.
			 *
			 * This does __not__ work for line script element.
			 *
			 * @returns {HTMLScriptElement | null}
			 */ currentScript: function() {
                if (typeof document === 'undefined') return null;
                if ('currentScript' in document && true /* hack to trip TS' flow analysis */ ) return document.currentScript;
                // IE11 workaround
                // we'll get the src of the current script by parsing IE11's error stack trace
                // this will not work for inline scripts
                try {
                    throw new Error();
                } catch (err) {
                    // Get file src url from stack. Specifically works with the format of stack traces in IE.
                    // A stack will look like this:
                    //
                    // Error
                    //    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
                    //    at Global code (http://localhost/components/prism-core.js:606:1)
                    var src = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(err.stack) || [])[1];
                    if (src) {
                        var scripts = document.getElementsByTagName('script');
                        for(var i in scripts){
                            if (scripts[i].src == src) return scripts[i];
                        }
                    }
                    return null;
                }
            },
            /**
			 * Returns whether a given class is active for `element`.
			 *
			 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
			 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
			 * given class is just the given class with a `no-` prefix.
			 *
			 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
			 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
			 * ancestors have the given class or the negated version of it, then the default activation will be returned.
			 *
			 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
			 * version of it, the class is considered active.
			 *
			 * @param {Element} element
			 * @param {string} className
			 * @param {boolean} [defaultActivation=false]
			 * @returns {boolean}
			 */ isActive: function(element, className, defaultActivation) {
                var no = 'no-' + className;
                while(element){
                    var classList = element.classList;
                    if (classList.contains(className)) return true;
                    if (classList.contains(no)) return false;
                    element = element.parentElement;
                }
                return !!defaultActivation;
            }
        },
        /**
		 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
		 *
		 * @namespace
		 * @memberof Prism
		 * @public
		 */ languages: {
            /**
			 * The grammar for plain, unformatted text.
			 */ plain: plainTextGrammar,
            plaintext: plainTextGrammar,
            text: plainTextGrammar,
            txt: plainTextGrammar,
            /**
			 * Creates a deep copy of the language with the given id and appends the given tokens.
			 *
			 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
			 * will be overwritten at its original position.
			 *
			 * ## Best practices
			 *
			 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
			 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
			 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
			 *
			 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
			 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
			 *
			 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
			 * @param {Grammar} redef The new tokens to append.
			 * @returns {Grammar} The new language created.
			 * @public
			 * @example
			 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
			 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
			 *     // at its original position
			 *     'comment': { ... },
			 *     // CSS doesn't have a 'color' token, so this token will be appended
			 *     'color': /\b(?:red|green|blue)\b/
			 * });
			 */ extend: function(id, redef) {
                var lang1 = _.util.clone(_.languages[id]);
                for(var key in redef)lang1[key] = redef[key];
                return lang1;
            },
            /**
			 * Inserts tokens _before_ another token in a language definition or any other grammar.
			 *
			 * ## Usage
			 *
			 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
			 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
			 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
			 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
			 * this:
			 *
			 * ```js
			 * Prism.languages.markup.style = {
			 *     // token
			 * };
			 * ```
			 *
			 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
			 * before existing tokens. For the CSS example above, you would use it like this:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'cdata', {
			 *     'style': {
			 *         // token
			 *     }
			 * });
			 * ```
			 *
			 * ## Special cases
			 *
			 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
			 * will be ignored.
			 *
			 * This behavior can be used to insert tokens after `before`:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'comment', {
			 *     'comment': Prism.languages.markup.comment,
			 *     // tokens after 'comment'
			 * });
			 * ```
			 *
			 * ## Limitations
			 *
			 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
			 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
			 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
			 * deleting properties which is necessary to insert at arbitrary positions.
			 *
			 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
			 * Instead, it will create a new object and replace all references to the target object with the new one. This
			 * can be done without temporarily deleting properties, so the iteration order is well-defined.
			 *
			 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
			 * you hold the target object in a variable, then the value of the variable will not change.
			 *
			 * ```js
			 * var oldMarkup = Prism.languages.markup;
			 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
			 *
			 * assert(oldMarkup !== Prism.languages.markup);
			 * assert(newMarkup === Prism.languages.markup);
			 * ```
			 *
			 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
			 * object to be modified.
			 * @param {string} before The key to insert before.
			 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
			 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
			 * object to be modified.
			 *
			 * Defaults to `Prism.languages`.
			 * @returns {Grammar} The new grammar object.
			 * @public
			 */ insertBefore: function(inside, before, insert, root) {
                root = root || _.languages;
                var grammar = root[inside];
                /** @type {Grammar} */ var ret = {
                };
                for(var token in grammar)if (grammar.hasOwnProperty(token)) {
                    if (token == before) {
                        for(var newToken in insert)if (insert.hasOwnProperty(newToken)) ret[newToken] = insert[newToken];
                    }
                    // Do not insert token which also occur in insert. See #1525
                    if (!insert.hasOwnProperty(token)) ret[token] = grammar[token];
                }
                var old = root[inside];
                root[inside] = ret;
                // Update references in other language definitions
                _.languages.DFS(_.languages, function(key, value) {
                    if (value === old && key != inside) this[key] = ret;
                });
                return ret;
            },
            // Traverse a language definition with Depth First Search
            DFS: function DFS(o, callback, type, visited) {
                visited = visited || {
                };
                var objId = _.util.objId;
                for(var i in o)if (o.hasOwnProperty(i)) {
                    callback.call(o, i, o[i], type || i);
                    var property = o[i];
                    var propertyType = _.util.type(property);
                    if (propertyType === 'Object' && !visited[objId(property)]) {
                        visited[objId(property)] = true;
                        DFS(property, callback, null, visited);
                    } else if (propertyType === 'Array' && !visited[objId(property)]) {
                        visited[objId(property)] = true;
                        DFS(property, callback, i, visited);
                    }
                }
            }
        },
        plugins: {
        },
        /**
		 * This is the most high-level function in Prism’s API.
		 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
		 * each one of them.
		 *
		 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
		 *
		 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
		 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
		 * @memberof Prism
		 * @public
		 */ highlightAll: function(async, callback) {
            _.highlightAllUnder(document, async, callback);
        },
        /**
		 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
		 * {@link Prism.highlightElement} on each one of them.
		 *
		 * The following hooks will be run:
		 * 1. `before-highlightall`
		 * 2. `before-all-elements-highlight`
		 * 3. All hooks of {@link Prism.highlightElement} for each element.
		 *
		 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
		 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
		 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
		 * @memberof Prism
		 * @public
		 */ highlightAllUnder: function(container, async, callback) {
            var env = {
                callback: callback,
                container: container,
                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            _.hooks.run('before-highlightall', env);
            env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));
            _.hooks.run('before-all-elements-highlight', env);
            for(var i = 0, element; element = env.elements[i++];)_.highlightElement(element, async === true, env.callback);
        },
        /**
		 * Highlights the code inside a single element.
		 *
		 * The following hooks will be run:
		 * 1. `before-sanity-check`
		 * 2. `before-highlight`
		 * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
		 * 4. `before-insert`
		 * 5. `after-highlight`
		 * 6. `complete`
		 *
		 * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
		 * the element's language.
		 *
		 * @param {Element} element The element containing the code.
		 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
		 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
		 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
		 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
		 *
		 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
		 * asynchronous highlighting to work. You can build your own bundle on the
		 * [Download page](https://prismjs.com/download.html).
		 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
		 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
		 * @memberof Prism
		 * @public
		 */ highlightElement: function(element, async, callback) {
            // Find language
            var language = _.util.getLanguage(element);
            var grammar = _.languages[language];
            // Set language on the element, if not present
            element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
            // Set language on the parent, for styling
            var parent = element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === 'pre') parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
            var code = element.textContent;
            var env = {
                element: element,
                language: language,
                grammar: grammar,
                code: code
            };
            function insertHighlightedCode(highlightedCode) {
                env.highlightedCode = highlightedCode;
                _.hooks.run('before-insert', env);
                env.element.innerHTML = env.highlightedCode;
                _.hooks.run('after-highlight', env);
                _.hooks.run('complete', env);
                callback && callback.call(env.element);
            }
            _.hooks.run('before-sanity-check', env);
            // plugins may change/add the parent/element
            parent = env.element.parentElement;
            if (parent && parent.nodeName.toLowerCase() === 'pre' && !parent.hasAttribute('tabindex')) parent.setAttribute('tabindex', '0');
            if (!env.code) {
                _.hooks.run('complete', env);
                callback && callback.call(env.element);
                return;
            }
            _.hooks.run('before-highlight', env);
            if (!env.grammar) {
                insertHighlightedCode(_.util.encode(env.code));
                return;
            }
            if (async && _self.Worker) {
                var worker = new Worker(_.filename);
                worker.onmessage = function(evt) {
                    insertHighlightedCode(evt.data);
                };
                worker.postMessage(JSON.stringify({
                    language: env.language,
                    code: env.code,
                    immediateClose: true
                }));
            } else insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
        },
        /**
		 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
		 * and the language definitions to use, and returns a string with the HTML produced.
		 *
		 * The following hooks will be run:
		 * 1. `before-tokenize`
		 * 2. `after-tokenize`
		 * 3. `wrap`: On each {@link Token}.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @param {string} language The name of the language definition passed to `grammar`.
		 * @returns {string} The highlighted HTML.
		 * @memberof Prism
		 * @public
		 * @example
		 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
		 */ highlight: function(text, grammar, language) {
            var env = {
                code: text,
                grammar: grammar,
                language: language
            };
            _.hooks.run('before-tokenize', env);
            env.tokens = _.tokenize(env.code, env.grammar);
            _.hooks.run('after-tokenize', env);
            return Token.stringify(_.util.encode(env.tokens), env.language);
        },
        /**
		 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
		 * and the language definitions to use, and returns an array with the tokenized code.
		 *
		 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
		 *
		 * This method could be useful in other contexts as well, as a very crude parser.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @returns {TokenStream} An array of strings and tokens, a token stream.
		 * @memberof Prism
		 * @public
		 * @example
		 * let code = `var foo = 0;`;
		 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
		 * tokens.forEach(token => {
		 *     if (token instanceof Prism.Token && token.type === 'number') {
		 *         console.log(`Found numeric literal: ${token.content}`);
		 *     }
		 * });
		 */ tokenize: function(text, grammar) {
            var rest = grammar.rest;
            if (rest) {
                for(var token in rest)grammar[token] = rest[token];
                delete grammar.rest;
            }
            var tokenList = new LinkedList();
            addAfter(tokenList, tokenList.head, text);
            matchGrammar(text, tokenList, grammar, tokenList.head, 0);
            return toArray(tokenList);
        },
        /**
		 * @namespace
		 * @memberof Prism
		 * @public
		 */ hooks: {
            all: {
            },
            /**
			 * Adds the given callback to the list of callbacks for the given hook.
			 *
			 * The callback will be invoked when the hook it is registered for is run.
			 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
			 *
			 * One callback function can be registered to multiple hooks and the same hook multiple times.
			 *
			 * @param {string} name The name of the hook.
			 * @param {HookCallback} callback The callback function which is given environment variables.
			 * @public
			 */ add: function(name, callback) {
                var hooks = _.hooks.all;
                hooks[name] = hooks[name] || [];
                hooks[name].push(callback);
            },
            /**
			 * Runs a hook invoking all registered callbacks with the given environment variables.
			 *
			 * Callbacks will be invoked synchronously and in the order in which they were registered.
			 *
			 * @param {string} name The name of the hook.
			 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
			 * @public
			 */ run: function(name, env) {
                var callbacks = _.hooks.all[name];
                if (!callbacks || !callbacks.length) return;
                for(var i = 0, callback; callback = callbacks[i++];)callback(env);
            }
        },
        Token: Token
    };
    _self.Prism = _;
    // Typescript note:
    // The following can be used to import the Token type in JSDoc:
    //
    //   @typedef {InstanceType<import("./prism-core")["Token"]>} Token
    /**
	 * Creates a new token.
	 *
	 * @param {string} type See {@link Token#type type}
	 * @param {string | TokenStream} content See {@link Token#content content}
	 * @param {string|string[]} [alias] The alias(es) of the token.
	 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
	 * @class
	 * @global
	 * @public
	 */ function Token(type, content, alias, matchedStr) {
        /**
		 * The type of the token.
		 *
		 * This is usually the key of a pattern in a {@link Grammar}.
		 *
		 * @type {string}
		 * @see GrammarToken
		 * @public
		 */ this.type = type;
        /**
		 * The strings or tokens contained by this token.
		 *
		 * This will be a token stream if the pattern matched also defined an `inside` grammar.
		 *
		 * @type {string | TokenStream}
		 * @public
		 */ this.content = content;
        /**
		 * The alias(es) of the token.
		 *
		 * @type {string|string[]}
		 * @see GrammarToken
		 * @public
		 */ this.alias = alias;
        // Copy of the full string this token was created from
        this.length = (matchedStr || '').length | 0;
    }
    /**
	 * A token stream is an array of strings and {@link Token Token} objects.
	 *
	 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
	 * them.
	 *
	 * 1. No adjacent strings.
	 * 2. No empty strings.
	 *
	 *    The only exception here is the token stream that only contains the empty string and nothing else.
	 *
	 * @typedef {Array<string | Token>} TokenStream
	 * @global
	 * @public
	 */ /**
	 * Converts the given token or token stream to an HTML representation.
	 *
	 * The following hooks will be run:
	 * 1. `wrap`: On each {@link Token}.
	 *
	 * @param {string | Token | TokenStream} o The token or token stream to be converted.
	 * @param {string} language The name of current language.
	 * @returns {string} The HTML representation of the token or token stream.
	 * @memberof Token
	 * @static
	 */ Token.stringify = function stringify(o, language) {
        if (typeof o == 'string') return o;
        if (Array.isArray(o)) {
            var s = '';
            o.forEach(function(e) {
                s += stringify(e, language);
            });
            return s;
        }
        var env = {
            type: o.type,
            content: stringify(o.content, language),
            tag: 'span',
            classes: [
                'token',
                o.type
            ],
            attributes: {
            },
            language: language
        };
        var aliases = o.alias;
        if (aliases) {
            if (Array.isArray(aliases)) Array.prototype.push.apply(env.classes, aliases);
            else env.classes.push(aliases);
        }
        _.hooks.run('wrap', env);
        var attributes = '';
        for(var name in env.attributes)attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
        return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
    };
    /**
	 * @param {RegExp} pattern
	 * @param {number} pos
	 * @param {string} text
	 * @param {boolean} lookbehind
	 * @returns {RegExpExecArray | null}
	 */ function matchPattern(pattern, pos, text, lookbehind) {
        pattern.lastIndex = pos;
        var match = pattern.exec(text);
        if (match && lookbehind && match[1]) {
            // change the match to remove the text matched by the Prism lookbehind group
            var lookbehindLength = match[1].length;
            match.index += lookbehindLength;
            match[0] = match[0].slice(lookbehindLength);
        }
        return match;
    }
    /**
	 * @param {string} text
	 * @param {LinkedList<string | Token>} tokenList
	 * @param {any} grammar
	 * @param {LinkedListNode<string | Token>} startNode
	 * @param {number} startPos
	 * @param {RematchOptions} [rematch]
	 * @returns {void}
	 * @private
	 *
	 * @typedef RematchOptions
	 * @property {string} cause
	 * @property {number} reach
	 */ function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
        for(var token in grammar){
            if (!grammar.hasOwnProperty(token) || !grammar[token]) continue;
            var patterns = grammar[token];
            patterns = Array.isArray(patterns) ? patterns : [
                patterns
            ];
            for(var j = 0; j < patterns.length; ++j){
                if (rematch && rematch.cause == token + ',' + j) return;
                var patternObj = patterns[j];
                var inside = patternObj.inside;
                var lookbehind = !!patternObj.lookbehind;
                var greedy = !!patternObj.greedy;
                var alias = patternObj.alias;
                if (greedy && !patternObj.pattern.global) {
                    // Without the global flag, lastIndex won't work
                    var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
                    patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
                }
                /** @type {RegExp} */ var pattern = patternObj.pattern || patternObj;
                for(var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next){
                    if (rematch && pos >= rematch.reach) break;
                    var str = currentNode.value;
                    if (tokenList.length > text.length) // Something went terribly wrong, ABORT, ABORT!
                    return;
                    if (str instanceof Token) continue;
                    var removeCount = 1; // this is the to parameter of removeBetween
                    var match;
                    if (greedy) {
                        match = matchPattern(pattern, pos, text, lookbehind);
                        if (!match) break;
                        var from = match.index;
                        var to = match.index + match[0].length;
                        var p = pos;
                        // find the node that contains the match
                        p += currentNode.value.length;
                        while(from >= p){
                            currentNode = currentNode.next;
                            p += currentNode.value.length;
                        }
                        // adjust pos (and p)
                        p -= currentNode.value.length;
                        pos = p;
                        // the current node is a Token, then the match starts inside another Token, which is invalid
                        if (currentNode.value instanceof Token) continue;
                        // find the last node which is affected by this match
                        for(var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === 'string'); k = k.next){
                            removeCount++;
                            p += k.value.length;
                        }
                        removeCount--;
                        // replace with the new match
                        str = text.slice(pos, p);
                        match.index -= pos;
                    } else {
                        match = matchPattern(pattern, 0, str, lookbehind);
                        if (!match) continue;
                    }
                    // eslint-disable-next-line no-redeclare
                    var from = match.index;
                    var matchStr = match[0];
                    var before = str.slice(0, from);
                    var after = str.slice(from + matchStr.length);
                    var reach = pos + str.length;
                    if (rematch && reach > rematch.reach) rematch.reach = reach;
                    var removeFrom = currentNode.prev;
                    if (before) {
                        removeFrom = addAfter(tokenList, removeFrom, before);
                        pos += before.length;
                    }
                    removeRange(tokenList, removeFrom, removeCount);
                    var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
                    currentNode = addAfter(tokenList, removeFrom, wrapped);
                    if (after) addAfter(tokenList, currentNode, after);
                    if (removeCount > 1) {
                        // at least one Token object was removed, so we have to do some rematching
                        // this can only happen if the current pattern is greedy
                        /** @type {RematchOptions} */ var nestedRematch = {
                            cause: token + ',' + j,
                            reach: reach
                        };
                        matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
                        // the reach might have been extended because of the rematching
                        if (rematch && nestedRematch.reach > rematch.reach) rematch.reach = nestedRematch.reach;
                    }
                }
            }
        }
    }
    /**
	 * @typedef LinkedListNode
	 * @property {T} value
	 * @property {LinkedListNode<T> | null} prev The previous node.
	 * @property {LinkedListNode<T> | null} next The next node.
	 * @template T
	 * @private
	 */ /**
	 * @template T
	 * @private
	 */ function LinkedList() {
        /** @type {LinkedListNode<T>} */ var head = {
            value: null,
            prev: null,
            next: null
        };
        /** @type {LinkedListNode<T>} */ var tail = {
            value: null,
            prev: head,
            next: null
        };
        head.next = tail;
        /** @type {LinkedListNode<T>} */ this.head = head;
        /** @type {LinkedListNode<T>} */ this.tail = tail;
        this.length = 0;
    }
    /**
	 * Adds a new node with the given value to the list.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {T} value
	 * @returns {LinkedListNode<T>} The added node.
	 * @template T
	 */ function addAfter(list, node, value) {
        // assumes that node != list.tail && values.length >= 0
        var next = node.next;
        var newNode = {
            value: value,
            prev: node,
            next: next
        };
        node.next = newNode;
        next.prev = newNode;
        list.length++;
        return newNode;
    }
    /**
	 * Removes `count` nodes after the given node. The given node will not be removed.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {number} count
	 * @template T
	 */ function removeRange(list, node, count) {
        var next = node.next;
        for(var i = 0; i < count && next !== list.tail; i++)next = next.next;
        node.next = next;
        next.prev = node;
        list.length -= i;
    }
    /**
	 * @param {LinkedList<T>} list
	 * @returns {T[]}
	 * @template T
	 */ function toArray(list) {
        var array = [];
        var node = list.head.next;
        while(node !== list.tail){
            array.push(node.value);
            node = node.next;
        }
        return array;
    }
    if (!_self.document) {
        if (!_self.addEventListener) // in Node.js
        return _;
        if (!_.disableWorkerMessageHandler) // In worker
        _self.addEventListener('message', function(evt) {
            var message = JSON.parse(evt.data);
            var lang1 = message.language;
            var code = message.code;
            var immediateClose = message.immediateClose;
            _self.postMessage(_.highlight(code, _.languages[lang1], lang1));
            if (immediateClose) _self.close();
        }, false);
        return _;
    }
    // Get current script and highlight
    var script = _.util.currentScript();
    if (script) {
        _.filename = script.src;
        if (script.hasAttribute('data-manual')) _.manual = true;
    }
    function highlightAutomaticallyCallback() {
        if (!_.manual) _.highlightAll();
    }
    if (!_.manual) {
        // If the document state is "loading", then we'll use DOMContentLoaded.
        // If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
        // DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
        // might take longer one animation frame to execute which can create a race condition where only some plugins have
        // been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
        // See https://github.com/PrismJS/prism/issues/2102
        var readyState = document.readyState;
        if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
        else if (window.requestAnimationFrame) window.requestAnimationFrame(highlightAutomaticallyCallback);
        else window.setTimeout(highlightAutomaticallyCallback, 16);
    }
    return _;
}($2c62ff1d62a6fed1$var$_self);
if ("object" !== 'undefined' && $2c62ff1d62a6fed1$exports) $2c62ff1d62a6fed1$exports = $2c62ff1d62a6fed1$var$Prism;
// hack for components to work correctly in node.js
if (typeof $parcel$global !== 'undefined') $parcel$global.Prism = $2c62ff1d62a6fed1$var$Prism;
// some additional documentation/types
/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 *
 * @typedef GrammarToken
 * @property {RegExp} pattern The regular expression of the token.
 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
 * @property {boolean} [greedy=false] Whether the token is greedy.
 * @property {string|string[]} [alias] An optional alias or list of aliases.
 * @property {Grammar} [inside] The nested grammar of this token.
 *
 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
 *
 * This can be used to make nested and even recursive language definitions.
 *
 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
 * each another.
 * @global
 * @public
 */ /**
 * @typedef Grammar
 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
 * @global
 * @public
 */ /**
 * A function which will invoked after an element was successfully highlighted.
 *
 * @callback HighlightCallback
 * @param {Element} element The element successfully highlighted.
 * @returns {void}
 * @global
 * @public
 */ /**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 */ /* **********************************************
     Begin prism-markup.js
********************************************** */ $2c62ff1d62a6fed1$var$Prism.languages.markup = {
    'comment': /<!--[\s\S]*?-->/,
    'prolog': /<\?[\s\S]+?\?>/,
    'doctype': {
        // https://www.w3.org/TR/xml/#NT-doctypedecl
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: true,
        inside: {
            'internal-subset': {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: true,
                greedy: true,
                inside: null // see below
            },
            'string': {
                pattern: /"[^"]*"|'[^']*'/,
                greedy: true
            },
            'punctuation': /^<!|>$|[[\]]/,
            'doctype-tag': /^DOCTYPE/,
            'name': /[^\s<>'"]+/
        }
    },
    'cdata': /<!\[CDATA\[[\s\S]*?\]\]>/i,
    'tag': {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: true,
        inside: {
            'tag': {
                pattern: /^<\/?[^\s>\/]+/,
                inside: {
                    'punctuation': /^<\/?/,
                    'namespace': /^[^\s>\/:]+:/
                }
            },
            'special-attr': [],
            'attr-value': {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                    'punctuation': [
                        {
                            pattern: /^=/,
                            alias: 'attr-equals'
                        },
                        /"|'/
                    ]
                }
            },
            'punctuation': /\/?>/,
            'attr-name': {
                pattern: /[^\s>\/]+/,
                inside: {
                    'namespace': /^[^\s>\/:]+:/
                }
            }
        }
    },
    'entity': [
        {
            pattern: /&[\da-z]{1,8};/i,
            alias: 'named-entity'
        },
        /&#x?[\da-f]{1,8};/i
    ]
};
$2c62ff1d62a6fed1$var$Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = $2c62ff1d62a6fed1$var$Prism.languages.markup['entity'];
$2c62ff1d62a6fed1$var$Prism.languages.markup['doctype'].inside['internal-subset'].inside = $2c62ff1d62a6fed1$var$Prism.languages.markup;
// Plugin to make entity title show the real entity, idea by Roman Komarov
$2c62ff1d62a6fed1$var$Prism.hooks.add('wrap', function(env) {
    if (env.type === 'entity') env.attributes['title'] = env.content.replace(/&amp;/, '&');
});
Object.defineProperty($2c62ff1d62a6fed1$var$Prism.languages.markup.tag, 'addInlined', {
    /**
	 * Adds an inlined language to markup.
	 *
	 * An example of an inlined language is CSS with `<style>` tags.
	 *
	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addInlined('style', 'css');
	 */ value: function addInlined(tagName, lang) {
        var includedCdataInside = {
        };
        includedCdataInside['language-' + lang] = {
            pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
            lookbehind: true,
            inside: $2c62ff1d62a6fed1$var$Prism.languages[lang]
        };
        includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
        var inside = {
            'included-cdata': {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: includedCdataInside
            }
        };
        inside['language-' + lang] = {
            pattern: /[\s\S]+/,
            inside: $2c62ff1d62a6fed1$var$Prism.languages[lang]
        };
        var def = {
        };
        def[tagName] = {
            pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
                return tagName;
            }), 'i'),
            lookbehind: true,
            greedy: true,
            inside: inside
        };
        $2c62ff1d62a6fed1$var$Prism.languages.insertBefore('markup', 'cdata', def);
    }
});
Object.defineProperty($2c62ff1d62a6fed1$var$Prism.languages.markup.tag, 'addAttribute', {
    /**
	 * Adds an pattern to highlight languages embedded in HTML attributes.
	 *
	 * An example of an inlined language is CSS with `style` attributes.
	 *
	 * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addAttribute('style', 'css');
	 */ value: function(attrName, lang) {
        $2c62ff1d62a6fed1$var$Prism.languages.markup.tag.inside['special-attr'].push({
            pattern: RegExp(/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, 'i'),
            lookbehind: true,
            inside: {
                'attr-name': /^[^\s=]+/,
                'attr-value': {
                    pattern: /=[\s\S]+/,
                    inside: {
                        'value': {
                            pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                            lookbehind: true,
                            alias: [
                                lang,
                                'language-' + lang
                            ],
                            inside: $2c62ff1d62a6fed1$var$Prism.languages[lang]
                        },
                        'punctuation': [
                            {
                                pattern: /^=/,
                                alias: 'attr-equals'
                            },
                            /"|'/
                        ]
                    }
                }
            }
        });
    }
});
$2c62ff1d62a6fed1$var$Prism.languages.html = $2c62ff1d62a6fed1$var$Prism.languages.markup;
$2c62ff1d62a6fed1$var$Prism.languages.mathml = $2c62ff1d62a6fed1$var$Prism.languages.markup;
$2c62ff1d62a6fed1$var$Prism.languages.svg = $2c62ff1d62a6fed1$var$Prism.languages.markup;
$2c62ff1d62a6fed1$var$Prism.languages.xml = $2c62ff1d62a6fed1$var$Prism.languages.extend('markup', {
});
$2c62ff1d62a6fed1$var$Prism.languages.ssml = $2c62ff1d62a6fed1$var$Prism.languages.xml;
$2c62ff1d62a6fed1$var$Prism.languages.atom = $2c62ff1d62a6fed1$var$Prism.languages.xml;
$2c62ff1d62a6fed1$var$Prism.languages.rss = $2c62ff1d62a6fed1$var$Prism.languages.xml;
(function(Prism) {
    var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
    Prism.languages.css = {
        'comment': /\/\*[\s\S]*?\*\//,
        'atrule': {
            pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
            inside: {
                'rule': /^@[\w-]+/,
                'selector-function-argument': {
                    pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                    lookbehind: true,
                    alias: 'selector'
                },
                'keyword': {
                    pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                    lookbehind: true
                }
            }
        },
        'url': {
            // https://drafts.csswg.org/css-values-3/#urls
            pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
            greedy: true,
            inside: {
                'function': /^url/i,
                'punctuation': /^\(|\)$/,
                'string': {
                    pattern: RegExp('^' + string.source + '$'),
                    alias: 'url'
                }
            }
        },
        'selector': {
            pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
            lookbehind: true
        },
        'string': {
            pattern: string,
            greedy: true
        },
        'property': {
            pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: true
        },
        'important': /!important\b/i,
        'function': {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: true
        },
        'punctuation': /[(){};:,]/
    };
    Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
    var markup = Prism.languages.markup;
    if (markup) {
        markup.tag.addInlined('style', 'css');
        markup.tag.addAttribute('style', 'css');
    }
})($2c62ff1d62a6fed1$var$Prism);
/* **********************************************
     Begin prism-clike.js
********************************************** */ $2c62ff1d62a6fed1$var$Prism.languages.clike = {
    'comment': [
        {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: true,
            greedy: true
        },
        {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: true,
            greedy: true
        }
    ],
    'string': {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: true
    },
    'class-name': {
        pattern: /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: true,
        inside: {
            'punctuation': /[.\\]/
        }
    },
    'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    'boolean': /\b(?:true|false)\b/,
    'function': /\b\w+(?=\()/,
    'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    'punctuation': /[{}[\];(),.:]/
};
/* **********************************************
     Begin prism-javascript.js
********************************************** */ $2c62ff1d62a6fed1$var$Prism.languages.javascript = $2c62ff1d62a6fed1$var$Prism.languages.extend('clike', {
    'class-name': [
        $2c62ff1d62a6fed1$var$Prism.languages.clike['class-name'],
        {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
            lookbehind: true
        }
    ],
    'keyword': [
        {
            pattern: /((?:^|\})\s*)catch\b/,
            lookbehind: true
        },
        {
            pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: true
        }, 
    ],
    // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
    'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
    'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
$2c62ff1d62a6fed1$var$Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
$2c62ff1d62a6fed1$var$Prism.languages.insertBefore('javascript', 'keyword', {
    'regex': {
        // eslint-disable-next-line regexp/no-dupe-characters-character-class
        pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
        lookbehind: true,
        greedy: true,
        inside: {
            'regex-source': {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: true,
                alias: 'language-regex',
                inside: $2c62ff1d62a6fed1$var$Prism.languages.regex
            },
            'regex-delimiter': /^\/|\/$/,
            'regex-flags': /^[a-z]+$/
        }
    },
    // This must be declared before keyword because we use "function" inside the look-forward
    'function-variable': {
        pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
        alias: 'function'
    },
    'parameter': [
        {
            pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
            lookbehind: true,
            inside: $2c62ff1d62a6fed1$var$Prism.languages.javascript
        },
        {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
            lookbehind: true,
            inside: $2c62ff1d62a6fed1$var$Prism.languages.javascript
        },
        {
            pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
            lookbehind: true,
            inside: $2c62ff1d62a6fed1$var$Prism.languages.javascript
        },
        {
            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
            lookbehind: true,
            inside: $2c62ff1d62a6fed1$var$Prism.languages.javascript
        }
    ],
    'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
$2c62ff1d62a6fed1$var$Prism.languages.insertBefore('javascript', 'string', {
    'hashbang': {
        pattern: /^#!.*/,
        greedy: true,
        alias: 'comment'
    },
    'template-string': {
        pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
        greedy: true,
        inside: {
            'template-punctuation': {
                pattern: /^`|`$/,
                alias: 'string'
            },
            'interpolation': {
                pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                lookbehind: true,
                inside: {
                    'interpolation-punctuation': {
                        pattern: /^\$\{|\}$/,
                        alias: 'punctuation'
                    },
                    rest: $2c62ff1d62a6fed1$var$Prism.languages.javascript
                }
            },
            'string': /[\s\S]+/
        }
    }
});
if ($2c62ff1d62a6fed1$var$Prism.languages.markup) {
    $2c62ff1d62a6fed1$var$Prism.languages.markup.tag.addInlined('script', 'javascript');
    // add attribute support for all DOM events.
    // https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
    $2c62ff1d62a6fed1$var$Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, 'javascript');
}
$2c62ff1d62a6fed1$var$Prism.languages.js = $2c62ff1d62a6fed1$var$Prism.languages.javascript;
(function() {
    if (typeof $2c62ff1d62a6fed1$var$Prism === 'undefined' || typeof document === 'undefined') return;
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
    if (!Element.prototype.matches) Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    var LOADING_MESSAGE = 'Loading…';
    var FAILURE_MESSAGE = function(status, message) {
        return '✖ Error ' + status + ' while fetching file: ' + message;
    };
    var FAILURE_EMPTY_MESSAGE = '✖ Error: File does not exist or is empty';
    var EXTENSIONS = {
        'js': 'javascript',
        'py': 'python',
        'rb': 'ruby',
        'ps1': 'powershell',
        'psm1': 'powershell',
        'sh': 'bash',
        'bat': 'batch',
        'h': 'c',
        'tex': 'latex'
    };
    var STATUS_ATTR = 'data-src-status';
    var STATUS_LOADING = 'loading';
    var STATUS_LOADED = 'loaded';
    var STATUS_FAILED = 'failed';
    var SELECTOR = 'pre[data-src]:not([' + STATUS_ATTR + '="' + STATUS_LOADED + '"])' + ':not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';
    var lang = /\blang(?:uage)?-([\w-]+)\b/i;
    /**
	 * Sets the Prism `language-xxxx` or `lang-xxxx` class to the given language.
	 *
	 * @param {HTMLElement} element
	 * @param {string} language
	 * @returns {void}
	 */ function setLanguageClass(element, language) {
        var className = element.className;
        className = className.replace(lang, ' ') + ' language-' + language;
        element.className = className.replace(/\s+/g, ' ').trim();
    }
    $2c62ff1d62a6fed1$var$Prism.hooks.add('before-highlightall', function(env) {
        env.selector += ', ' + SELECTOR;
    });
    $2c62ff1d62a6fed1$var$Prism.hooks.add('before-sanity-check', function(env) {
        var pre = env.element;
        if (pre.matches(SELECTOR)) {
            env.code = ''; // fast-path the whole thing and go to complete
            pre.setAttribute(STATUS_ATTR, STATUS_LOADING); // mark as loading
            // add code element with loading message
            var code = pre.appendChild(document.createElement('CODE'));
            code.textContent = LOADING_MESSAGE;
            var src = pre.getAttribute('data-src');
            var language = env.language;
            if (language === 'none') {
                // the language might be 'none' because there is no language set;
                // in this case, we want to use the extension as the language
                var extension = (/\.(\w+)$/.exec(src) || [
                    ,
                    'none'
                ])[1];
                language = EXTENSIONS[extension] || extension;
            }
            // set language classes
            setLanguageClass(code, language);
            setLanguageClass(pre, language);
            // preload the language
            var autoloader = $2c62ff1d62a6fed1$var$Prism.plugins.autoloader;
            if (autoloader) autoloader.loadLanguages(language);
            // load file
            var xhr = new XMLHttpRequest();
            xhr.open('GET', src, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4) {
                    if (xhr.status < 400 && xhr.responseText) {
                        // mark as loaded
                        pre.setAttribute(STATUS_ATTR, STATUS_LOADED);
                        // highlight code
                        code.textContent = xhr.responseText;
                        $2c62ff1d62a6fed1$var$Prism.highlightElement(code);
                    } else {
                        // mark as failed
                        pre.setAttribute(STATUS_ATTR, STATUS_FAILED);
                        if (xhr.status >= 400) code.textContent = FAILURE_MESSAGE(xhr.status, xhr.statusText);
                        else code.textContent = FAILURE_EMPTY_MESSAGE;
                    }
                }
            };
            xhr.send(null);
        }
    });
    $2c62ff1d62a6fed1$var$Prism.plugins.fileHighlight = {
        /**
		 * Executes the File Highlight plugin for all matching `pre` elements under the given container.
		 *
		 * Note: Elements which are already loaded or currently loading will not be touched by this method.
		 *
		 * @param {ParentNode} [container=document]
		 */ highlight: function highlight(container) {
            var elements = (container || document).querySelectorAll(SELECTOR);
            for(var i = 0, element; element = elements[i++];)$2c62ff1d62a6fed1$var$Prism.highlightElement(element);
        }
    };
    var logged = false;
    /** @deprecated Use `Prism.plugins.fileHighlight.highlight` instead. */ $2c62ff1d62a6fed1$var$Prism.fileHighlight = function() {
        if (!logged) {
            console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.');
            logged = true;
        }
        $2c62ff1d62a6fed1$var$Prism.plugins.fileHighlight.highlight.apply(this, arguments);
    };
})();


const $9af17402501e1fa6$export$f8f9eee34331e492 = ()=>{
    const source = document.querySelector('.demo-layout__playground');
    if (!source) return;
    const sourceCode = $9af17402501e1fa6$export$abfb94f6f217252e($9af17402501e1fa6$export$a1e64b98f6defbf8(source.innerHTML));
    const wrapper = document.createElement('div');
    wrapper.innerHTML = '<pre class="demo-layout__code"><code></code></pre>';
    const code = wrapper.querySelector('code');
    code.dataset.sourceCode = sourceCode; // Store the initial source code for further modifification...
    code.innerHTML = $2c62ff1d62a6fed1$exports.highlight(code.dataset.sourceCode, $2c62ff1d62a6fed1$exports.languages.html, $2c62ff1d62a6fed1$exports.languages.html);
    let desc = document.querySelector('.demo-layout__desc');
    if (!desc) {
        desc = document.createElement('div');
        desc.className = 'demo-layout__desc';
        document.body.insertBefore(desc, document.body.firstChild);
    }
    desc.appendChild(wrapper.firstChild);
};
const $9af17402501e1fa6$export$37e467e40b54f566 = (code)=>{
    return {
        sourceCode: code.dataset.sourceCode,
        update: (sourceCode)=>$9af17402501e1fa6$export$3629f60f8c4a3eaa(code, sourceCode)
    };
};
const $9af17402501e1fa6$export$3629f60f8c4a3eaa = (code, sourceCode)=>{
    code.dataset.sourceCode = $9af17402501e1fa6$export$abfb94f6f217252e($9af17402501e1fa6$export$a1e64b98f6defbf8(sourceCode));
    code.innerHTML = $2c62ff1d62a6fed1$exports.highlight(code.dataset.sourceCode, $2c62ff1d62a6fed1$exports.languages.html, $2c62ff1d62a6fed1$exports.languages.html);
};
function $9af17402501e1fa6$export$a1e64b98f6defbf8(code) {
    let lines = code.split('\n');
    const indent = lines.reduce((idt, currLine)=>{
        if (currLine.trim()) {
            const currIndent = (currLine.match(/^[\s]+/) || [
                ''
            ])[0].length;
            idt = idt === -1 ? currIndent : Math.min(idt, currIndent);
        }
        return idt;
    }, -1);
    if (indent > 0) lines = lines.map((line)=>line.substr(indent)
    );
    return lines.join('\n').trim().replace(/\n{2,}/g, '\n\n');
}
function $9af17402501e1fa6$export$abfb94f6f217252e(code) {
    return code.replace(/=""/g, '');
}


/* ===== Helpers ===== */ const $bbf69772a00c71b7$var$container = document.createElement('div');
$bbf69772a00c71b7$var$container.className = 'demo-toolbox';
const $bbf69772a00c71b7$var$getAnchor = (popOver, bemModifier, text = '', textActive = text)=>{
    const anchor = document.createElement('a');
    anchor.href = '#';
    anchor.title = popOver;
    anchor.className = `demo-toolbox__action demo-toolbox__action--${bemModifier}`;
    anchor.dataset.text = anchor.innerHTML = text;
    anchor.dataset.textActive = textActive;
    return anchor;
};
const $bbf69772a00c71b7$export$ac622ed92eeab375 = (anchor, callback)=>{
    anchor.addEventListener('click', (event)=>{
        event.preventDefault();
        anchor.classList.toggle('demo-toolbox__action--active');
        const isActive = anchor.classList.contains('demo-toolbox__action--active');
        anchor.innerHTML = isActive ? anchor.dataset.textActive || '' : anchor.dataset.text || '';
        callback(isActive);
    });
    $bbf69772a00c71b7$var$container.appendChild(anchor);
};
const $bbf69772a00c71b7$export$bf4c249ff278f2d4 = (delay = 0)=>setTimeout(()=>{
        try {
            window.dispatchEvent(new Event('resize'));
        } catch (e) {
            // For IE11 support
            const event = document.createEvent('Event');
            event.initEvent('resize', true, true);
            window.dispatchEvent(event);
        }
    }, delay)
;
// Quick fix to `triggerResize` after the end of the transition.
// Should be the same value as: `$demo-duration` in `src/styles/variables.scss`.
const $bbf69772a00c71b7$var$FULL_WIDTH_SWITCHER_DURATION = 300;
/* ===== Actions ===== */ const $bbf69772a00c71b7$var$fullWidthSwitcher = ()=>{
    const output = document.querySelector('.demo-layout__output');
    $bbf69772a00c71b7$export$ac622ed92eeab375($bbf69772a00c71b7$var$getAnchor('Full screen', 'full-screen'), ()=>{
        output.classList.toggle('demo-layout__output--full');
        // Finally redraw Charts if any.
        $bbf69772a00c71b7$export$bf4c249ff278f2d4($bbf69772a00c71b7$var$FULL_WIDTH_SWITCHER_DURATION);
    });
};
const $bbf69772a00c71b7$var$autoHeightSwitcher = ()=>{
    const playground = document.querySelector('.demo-layout__playground');
    $bbf69772a00c71b7$export$ac622ed92eeab375($bbf69772a00c71b7$var$getAnchor('Auto height', 'auto-height'), ()=>{
        playground.classList.toggle('demo-layout__playground--auto');
        // Finally redraw Charts if any.
        $bbf69772a00c71b7$export$bf4c249ff278f2d4();
    });
};
const $bbf69772a00c71b7$var$toggleBfgDirection = (target)=>{
    let bfgs = target.querySelectorAll('.bfg--row, .bfg--col');
    $885154c3de97d42e$export$40f3d9558cf6e846(bfgs, (bfg)=>{
        bfg.classList.toggle('bfg--row');
        bfg.classList.toggle('bfg--col');
    });
    bfgs = target.querySelectorAll('[bfg~="row"], [bfg~="col"]');
    $885154c3de97d42e$export$40f3d9558cf6e846(bfgs, (bfg)=>{
        $885154c3de97d42e$export$16f1cf26c931d50f(bfg, 'bfg', 'row');
        $885154c3de97d42e$export$16f1cf26c931d50f(bfg, 'bfg', 'col');
    });
};
const $bbf69772a00c71b7$var$gridDirectionSwitcher = ()=>{
    const playground = document.querySelector('.demo-layout__playground');
    const code = document.querySelector('.demo-layout__code > code');
    $bbf69772a00c71b7$export$ac622ed92eeab375($bbf69772a00c71b7$var$getAnchor('Grid direction', 'grid-direction'), ()=>{
        // Update output
        $bbf69772a00c71b7$var$toggleBfgDirection(playground);
        // Update source code (from original source code)
        const handler = $9af17402501e1fa6$export$37e467e40b54f566(code);
        const wrapper = document.createElement('div');
        wrapper.innerHTML = handler.sourceCode;
        $bbf69772a00c71b7$var$toggleBfgDirection(wrapper);
        handler.update(wrapper.innerHTML);
        // Finally redraw Charts if any.
        $bbf69772a00c71b7$export$bf4c249ff278f2d4();
    });
};
const $bbf69772a00c71b7$var$toggleBfgGap = (target)=>{
    let bfg = target.querySelector('.bfg'); // Find the first (main) grid
    if (bfg) bfg.classList.toggle('bfg--gap');
    bfg = target.querySelector('[bfg]'); // Find the first (main) grid
    if (bfg) $885154c3de97d42e$export$16f1cf26c931d50f(bfg, 'bfg', 'gap');
};
const $bbf69772a00c71b7$var$gridGapSwitcher = ()=>{
    const playground = document.querySelector('.demo-layout__playground');
    const code = document.querySelector('.demo-layout__code > code');
    $bbf69772a00c71b7$export$ac622ed92eeab375($bbf69772a00c71b7$var$getAnchor('Grid gap', 'grid-gap'), ()=>{
        // Update output
        $bbf69772a00c71b7$var$toggleBfgGap(playground);
        // Update source code (from original source code)
        const handler = $9af17402501e1fa6$export$37e467e40b54f566(code);
        const wrapper = document.createElement('div');
        wrapper.innerHTML = handler.sourceCode;
        $bbf69772a00c71b7$var$toggleBfgGap(wrapper);
        handler.update(wrapper.innerHTML);
    });
};
const $bbf69772a00c71b7$export$ce2c71063d26630d = (actions, action)=>{
    return actions.indexOf('all') !== -1 || actions.indexOf(action) !== -1;
};
const $bbf69772a00c71b7$export$ca268d3564bac223 = (actions = [
    'all'
])=>{
    if ($bbf69772a00c71b7$export$ce2c71063d26630d(actions, 'fullWidth')) $bbf69772a00c71b7$var$fullWidthSwitcher();
    if ($bbf69772a00c71b7$export$ce2c71063d26630d(actions, 'autoHeight')) $bbf69772a00c71b7$var$autoHeightSwitcher();
    if ($bbf69772a00c71b7$export$ce2c71063d26630d(actions, 'gridDirection')) $bbf69772a00c71b7$var$gridDirectionSwitcher();
    if ($bbf69772a00c71b7$export$ce2c71063d26630d(actions, 'gridGap')) $bbf69772a00c71b7$var$gridGapSwitcher();
    document.querySelector('.demo-layout__output').appendChild($bbf69772a00c71b7$var$container);
};



const $ef4fdcba15e63dfd$var$fillTypeIndex = {
    get: ()=>parseInt(window.sessionStorage.getItem('Demo.fillTypeIndex'), 10) || 0
    ,
    set: (index)=>window.sessionStorage.setItem('Demo.fillTypeIndex', index + '')
};
const $ef4fdcba15e63dfd$var$fillTypes = [
    'container',
    'text'
];
const $ef4fdcba15e63dfd$var$getFillType = ()=>{
    const index = $ef4fdcba15e63dfd$var$fillTypeIndex.get();
    if (!$885154c3de97d42e$export$dd20c6dad8c9f5a3()) $ef4fdcba15e63dfd$var$fillTypeIndex.set((index + 1) % $ef4fdcba15e63dfd$var$fillTypes.length);
    return $ef4fdcba15e63dfd$var$fillTypes[index];
};
const $ef4fdcba15e63dfd$var$fillType = $ef4fdcba15e63dfd$var$getFillType();
const $ef4fdcba15e63dfd$var$texts = [
    // tslint:disable:max-line-length
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lobortis libero ut augue sagittis ornare. Integer nisl ligula, porttitor non bibendum eget, varius non enim. Mauris et ex id lacus mollis lacinia id eget lacus. In convallis aliquet tortor eget luctus. Morbi eu ultrices nulla. Vestibulum luctus magna quis tellus vulputate, id gravida elit efficitur. Donec pharetra ultrices arcu, vitae porttitor enim congue nec.',
    'Integer feugiat mauris non magna malesuada ornare. Suspendisse consectetur massa elementum, sodales turpis at, mollis ex. Vestibulum sed quam dignissim, consequat orci sed, pellentesque felis. Suspendisse fermentum quam pharetra elit euismod dapibus. Nam interdum, turpis non posuere tempus, diam urna luctus justo, ut suscipit urna odio at velit. Maecenas bibendum porta ante, vitae faucibus lectus consectetur non. Donec molestie quam libero, sit amet rutrum libero egestas sit amet.',
    'Proin nec neque non turpis convallis feugiat quis ut elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce malesuada, nisi blandit viverra tristique, turpis lectus malesuada tortor, non vestibulum arcu nibh non massa. Vivamus hendrerit nibh tortor, vel venenatis risus hendrerit quis. Nam facilisis, risus a fringilla vehicula, justo purus congue dolor, et tincidunt metus est ac nisl. In finibus a nulla in iaculis. Fusce vel dui nisi. Aenean efficitur risus diam, sit amet molestie augue luctus id.',
    'Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque ligula lorem, consequat quis turpis in, auctor luctus leo. Nullam accumsan blandit tempor. Nunc suscipit est nunc, a dignissim sem luctus in. Donec fringilla sodales mollis. Morbi non dolor ultrices, congue lorem id, suscipit elit. Etiam vestibulum, ligula vitae finibus dictum, elit arcu molestie eros, in condimentum turpis orci eu risus.',
    'Suspendisse egestas velit sit amet cursus cursus. Ut ultricies porttitor sapien quis eleifend. Fusce lobortis lacinia sem, eget tempor magna porta id. Pellentesque a congue nisi, in euismod erat. Cras consectetur, lectus nec eleifend tempor, augue dolor laoreet ante, ut condimentum dui nunc nec sem. Cras rutrum feugiat erat, ut porttitor tellus aliquam vitae. Proin at efficitur dui, sodales volutpat leo.'
];
let $ef4fdcba15e63dfd$var$textIndex = -1;
const $ef4fdcba15e63dfd$var$getText = (color = true)=>{
    $ef4fdcba15e63dfd$var$textIndex = ($ef4fdcba15e63dfd$var$textIndex + 1) % $ef4fdcba15e63dfd$var$texts.length;
    const text = $ef4fdcba15e63dfd$var$texts[$ef4fdcba15e63dfd$var$textIndex];
    const css = [
        'demo-text'
    ];
    if (color) css.push(`demo-text__bg-${$ef4fdcba15e63dfd$var$textIndex + 1}`);
    return `<div class="${css.join(' ')}">${text} ${text}</div>`;
};
const $ef4fdcba15e63dfd$var$getContainer = ()=>'<div class="demo-container" title="Switch size"></div>'
;
const $ef4fdcba15e63dfd$var$fillGridOptions = {
    type: null,
    textColor: true
};
const $ef4fdcba15e63dfd$var$fillElement = (element, options = {
    ...$ef4fdcba15e63dfd$var$fillGridOptions
})=>{
    if (!element.childElementCount) {
        const type = options.type || $ef4fdcba15e63dfd$var$fillType;
        switch(type){
            case 'text':
                element.innerHTML = `${$ef4fdcba15e63dfd$var$getText(options.textColor)}`;
                break;
            case 'container':
                element.innerHTML = $ef4fdcba15e63dfd$var$getContainer();
                break;
        }
    }
};
const $ef4fdcba15e63dfd$export$f687eee0e8048e8f = (options = {
})=>{
    const opts = {
        ...$ef4fdcba15e63dfd$var$fillGridOptions,
        ...options
    };
    $885154c3de97d42e$export$40f3d9558cf6e846(document.querySelectorAll('.bfg__box, [bfg__box]'), (element)=>$ef4fdcba15e63dfd$var$fillElement(element, opts)
    );
    $885154c3de97d42e$export$40f3d9558cf6e846(document.querySelectorAll('.bfg-card__content, [bfg-card__content]'), (element)=>$ef4fdcba15e63dfd$var$fillElement(element, opts)
    );
};
window.addEventListener('click', (event)=>{
    const target = event.target;
    if (target.classList.contains('demo-container')) target.classList.toggle('demo-container--alt');
});



const $0151182b700eda01$export$69617f3bdbe545f8 = ()=>{
    const element = document.querySelector('.docs-showcase');
    const mapper = (anchor, count)=>{
        const filename = anchor.href.match(/\/([^/]+)\.html$/)[1];
        const id = `demo-${filename}`;
        const css = 'demo-toolbox__action demo-toolbox__action--open-link';
        return `\n  <div class="docs-showcase__item">\n    <iframe data-src="${anchor.href}" class="docs-showcase__iframe"></iframe>\n    <a href="${anchor.href}" id="${id}" class="${css}" title="Open">${count}</a>\n  </div>`;
    };
    const mappedHtml = [];
    $885154c3de97d42e$export$40f3d9558cf6e846(element.querySelectorAll('a'), (anchor, index)=>mappedHtml.push(mapper(anchor, index + 1))
    );
    element.innerHTML = mappedHtml.join('\n') + '\n';
    let buffer = [];
    $885154c3de97d42e$export$40f3d9558cf6e846(element.querySelectorAll('.docs-showcase__item'), (elem)=>{
        buffer.push({
            elem: elem,
            iframe: elem.querySelector('iframe')
        });
    });
    const loadIframes = ()=>{
        const delta = 100;
        const pageYOffset = window.pageYOffset || document.documentElement.scrollTop;
        const Ytop = pageYOffset - delta;
        const Ybottom = pageYOffset + window.innerHeight + delta;
        buffer = buffer.filter((item)=>{
            const itemTop = item.elem.offsetTop;
            const itemBottom = item.elem.offsetTop + item.elem.offsetHeight;
            const inViewport = itemTop > Ytop && itemTop < Ybottom || itemBottom > Ytop && itemBottom < Ybottom;
            if (inViewport) {
                const src = item.iframe.getAttribute('data-src');
                item.iframe.src = src;
            }
            return !inViewport;
        });
        if (!buffer.length) window.removeEventListener('scroll', debounce);
    };
    let timeout;
    const debounce = ()=>{
        clearTimeout(timeout);
        timeout = setTimeout(loadIframes, 100);
    };
    window.addEventListener('scroll', debounce);
    loadIframes();
};




const $76e3878fd8e4da8b$export$92c43f0c4637eec = ()=>{
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `<div class="demo-layout__tabs-nav">\n    <a href="#" class="demo-layout__tabs-nav-item" data-tab="demo-layout__readme">Description</a>\n    <a href="#" class="demo-layout__tabs-nav-item" data-tab="demo-layout__code">Code</a>\n    <a href="#" class="demo-layout__tabs-nav-item" data-tab="demo-layout__output">Output</a>\n  </div>`;
    // ===== Tabs Nav =====
    const navItems = wrapper.querySelectorAll('.demo-layout__tabs-nav-item');
    const openNavItem = (navItem)=>{
        $885154c3de97d42e$export$40f3d9558cf6e846(navItems, (element)=>{
            element.classList[element === navItem ? 'add' : 'remove']('demo-layout__tabs-nav-item--open');
        });
    };
    // ===== Tabs content =====
    const contents = document.querySelectorAll('.demo-layout__readme, .demo-layout__code, .demo-layout__output');
    $885154c3de97d42e$export$40f3d9558cf6e846(contents, (content)=>content.classList.add('demo-layout__tabs-content')
    );
    const openContent = (tab)=>{
        $885154c3de97d42e$export$40f3d9558cf6e846(contents, (element)=>{
            element.classList[element.classList.contains(tab) ? 'add' : 'remove']('demo-layout__tabs-content--open');
        });
        // Hack to redraw Charts if any.
        $bbf69772a00c71b7$export$bf4c249ff278f2d4();
    };
    // ===== Event handler =====
    wrapper.querySelector('.demo-layout__tabs-nav').addEventListener('click', (event)=>{
        event.preventDefault();
        const navItem = event.target;
        openNavItem(navItem);
        openContent(navItem.dataset.tab);
    });
    navItems.item(0).click();
    document.body.appendChild(wrapper.firstChild);
};




/* ===== Export as global ===== */ window['Demo'] = {
    chart: $ea4828d40e484091$export$7806c7ec05c1ec22,
    enableActions: $bbf69772a00c71b7$export$ca268d3564bac223,
    fillGrid: $ef4fdcba15e63dfd$export$f687eee0e8048e8f,
    handleAction: $bbf69772a00c71b7$export$ac622ed92eeab375,
    showcase: $0151182b700eda01$export$69617f3bdbe545f8,
    viewCode: $9af17402501e1fa6$export$f8f9eee34331e492
};
/* ===== Enable tabs-navigation and back-button ===== */ if (!window.location.pathname.match(/\/demo\.html/)) document.addEventListener('DOMContentLoaded', ()=>{
    $76e3878fd8e4da8b$export$92c43f0c4637eec();
    if (!$885154c3de97d42e$export$dd20c6dad8c9f5a3()) $c977bb2ab633c24c$export$942ed9735dae0de1();
});


//# sourceMappingURL=demo.fb8e72a6.js.map
