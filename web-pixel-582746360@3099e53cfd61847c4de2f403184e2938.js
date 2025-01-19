(() => {
    var k = Object.defineProperty,
        w = Object.defineProperties;
    var T = Object.getOwnPropertyDescriptors;
    var C = Object.getOwnPropertySymbols;
    var v = Object.prototype.hasOwnProperty,
        x = Object.prototype.propertyIsEnumerable;
    var I = (e, t, n) => t in e ? k(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n
        }) : e[t] = n,
        g = (e, t) => {
            for (var n in t || (t = {})) v.call(t, n) && I(e, n, t[n]);
            if (C)
                for (var n of C(t)) x.call(t, n) && I(e, n, t[n]);
            return e
        },
        D = (e, t) => w(e, T(t));
    var s = (e, t, n) => new Promise((r, i) => {
        var o = a => {
                try {
                    p(n.next(a))
                } catch (m) {
                    i(m)
                }
            },
            c = a => {
                try {
                    p(n.throw(a))
                } catch (m) {
                    i(m)
                }
            },
            p = a => a.done ? r(a.value) : Promise.resolve(a.value).then(o, c);
        p((n = n.apply(e, t)).next())
    });
    var u = "WebPixel::Render";
    var f = e => shopify.extend(u, e);

    function y(e, t) {
        return fetch(e, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(t),
            keepalive: !0
        })
    }

    function l(e, t) {
        return fetch(e + "?" + new URLSearchParams(t), {
            method: "GET",
            mode: "cors",
            keepalive: !0
        })
    }
    var d = class {
        constructor(t, n, r, i, o) {
            this.appURL = t;
            this.trackingURL = n;
            this.brandID = r;
            this.cookie = i;
            this.shopDomain = o
        }
        identify(t) {
            return s(this, null, function*() {
                var i;
                return this.trackingURL && ((i = (yield(yield l(`${this.trackingURL}/REST/inShop/v1/identifyContact`, D(g({}, t), {
                    brandID: this.brandID,
                    shopType: "shopify",
                    responseType: "json"
                }))).json()).data) == null ? void 0 : i.contactID) || ""
            })
        }
        saveCartContact(t) {
            return s(this, null, function*() {
                yield y(`${this.appURL}/shopify/${this.brandID}/carts/contacts`, {
                    brandID: this.brandID,
                    contactID: t.omnisendContactID,
                    cartToken: t.cartToken,
                    shopifyClientID: t.shopifyClientID
                })
            })
        }
        setOmnisendContactIDCookie(t) {
            return s(this, null, function*() {
                if (!t) return;
                let n = 24 * 60 * 60 * 1e3;
                yield this.cookie.set(`omnisendContactID=${t}; path=/; domain=.${this.shopDomain}; expires=${new Date(Date.now()+30*n).toUTCString()}`)
            })
        }
    };

    function h(e, t, n, r, i) {
        return s(this, null, function*() {
            var c, p, a, m;
            let o = (c = e == null ? void 0 : e.data) == null ? void 0 : c.checkout;
            (p = o == null ? void 0 : o.lineItems) != null && p.length && (yield R(t, r, o), i && (yield O(t, r, (m = (a = n.data) == null ? void 0 : a.cart) == null ? void 0 : m.id)))
        })
    }

    function R(e, t, n) {
        return s(this, null, function*() {
            let r = (yield e.cookie.get("omnisendContactID")) || "",
                i = (n == null ? void 0 : n.email) || "",
                o = (n == null ? void 0 : n.phone) || "";
            if (o && !E(o) && (o = ""), !i && !o) return;
            let c = yield t.identify({
                email: i,
                phone: o,
                currentContactID: r
            });
            yield t.setOmnisendContactIDCookie(c)
        })
    }

    function E(e) {
        return e.startsWith("+") || e.startsWith("00")
    }

    function O(e, t, n) {
        return s(this, null, function*() {
            let r = n || (yield e.cookie.get("cart")) || "",
                i = (yield e.cookie.get("_shopify_y")) || "",
                o = (yield e.cookie.get("omnisendContactID")) || "";
            !o || !r || (yield t.saveCartContact({
                omnisendContactID: o,
                cartToken: decodeURIComponent(r).split("?")[0],
                shopifyClientID: i
            }))
        })
    }
    f(({
        analytics: e,
        browser: t,
        init: n,
        settings: r
    }) => {
        let i = new d(r.appURL, r.trackingURL, r.brandID, t.cookie, n.context.document.location.hostname);
        n.context.document.location.pathname.startsWith("/checkouts") && (e.subscribe("checkout_started", o => {
            h(o, t, n, i, !0)
        }), e.subscribe("checkout_contact_info_submitted", o => {
            h(o, t, n, i, !1)
        }))
    });
})();