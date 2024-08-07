; (function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o)
  new MutationObserver((o) => {
    for (const r of o)
      if (r.type === 'childList')
        for (const i of r.addedNodes) i.tagName === 'LINK' && i.rel === 'modulepreload' && s(i)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(o) {
    const r = {}

    return (
      o.integrity && (r.integrity = o.integrity),
      o.referrerPolicy && (r.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === 'use-credentials'
        ? (r.credentials = 'include')
        : o.crossOrigin === 'anonymous'
          ? (r.credentials = 'omit')
          : (r.credentials = 'same-origin'),
      r
    )
  }
  function s(o) {
    if (o.ep) return
    o.ep = !0
    const r = n(o)
    fetch(o.href, r)
  }
})()
/**
 * @vue/shared v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ /*! #__NO_SIDE_EFFECTS__ */ function ps(e, t) {
  const n = new Set(e.split(','))

  return (s) => n.has(s)
}
const Z = {},
  Et = [],
  Se = () => { },
  Qr = () => !1,
  wn = (e) =>
    e.charCodeAt(0) === 111 &&
    e.charCodeAt(1) === 110 &&
    (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97),
  ms = (e) => e.startsWith('onUpdate:'),
  le = Object.assign,
  gs = (e, t) => {
    const n = e.indexOf(t)
    n > -1 && e.splice(n, 1)
  },
  Jr = Object.prototype.hasOwnProperty,
  U = (e, t) => Jr.call(e, t),
  F = Array.isArray,
  xt = (e) => En(e) === '[object Map]',
  Lo = (e) => En(e) === '[object Set]',
  B = (e) => typeof e == 'function',
  oe = (e) => typeof e == 'string',
  mt = (e) => typeof e == 'symbol',
  ee = (e) => e !== null && typeof e == 'object',
  No = (e) => (ee(e) || B(e)) && B(e.then) && B(e.catch),
  Fo = Object.prototype.toString,
  En = (e) => Fo.call(e),
  Xr = (e) => En(e).slice(8, -1),
  jo = (e) => En(e) === '[object Object]',
  _s = (e) => oe(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  kt = ps(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  xn = (e) => {
    const t = Object.create(null)

    return (n) => t[n] || (t[n] = e(n))
  },
  Zr = /-(\w)/g,
  De = xn((e) => e.replace(Zr, (t, n) => (n ? n.toUpperCase() : ''))),
  ei = /\B([A-Z])/g,
  At = xn((e) => e.replace(ei, '-$1').toLowerCase()),
  Sn = xn((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  Hn = xn((e) => (e ? `on${Sn(e)}` : '')),
  ot = (e, t) => !Object.is(e, t),
  Bn = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t)
  },
  ko = (e, t, n, s = !1) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: s, value: n })
  },
  ti = (e) => {
    const t = parseFloat(e)

    return isNaN(t) ? e : t
  }
let ks
const Ho = () =>
  ks ||
  (ks =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof window < 'u'
          ? window
          : typeof global < 'u'
            ? global
            : {})
function He(e) {
  if (F(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        o = oe(s) ? ri(s) : He(s)
      if (o) for (const r in o) t[r] = o[r]
    }

    return t
  } else if (oe(e) || ee(e)) return e
}
const ni = /;(?![^(]*\))/g,
  si = /:([^]+)/,
  oi = /\/\*[^]*?\*\//g
function ri(e) {
  const t = {}

  return (
    e
      .replace(oi, '')
      .split(ni)
      .forEach((n) => {
        if (n) {
          const s = n.split(si)
          s.length > 1 && (t[s[0].trim()] = s[1].trim())
        }
      }),
    t
  )
}
function $t(e) {
  let t = ''
  if (oe(e)) t = e
  else if (F(e))
    for (let n = 0; n < e.length; n++) {
      const s = $t(e[n])
      s && (t += s + ' ')
    }
  else if (ee(e)) for (const n in e) e[n] && (t += n + ' ')

  return t.trim()
}
const ii = 'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  li = ps(ii)
function Bo(e) {
  return !!e || e === ''
}
const Qn = (e) =>
  oe(e)
    ? e
    : e == null
      ? ''
      : F(e) || (ee(e) && (e.toString === Fo || !B(e.toString)))
        ? JSON.stringify(e, Do, 2)
        : String(e),
  Do = (e, t) =>
    t && t.__v_isRef
      ? Do(e, t.value)
      : xt(t)
        ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, o], r) => ((n[Dn(s, r) + ' =>'] = o), n),
            {}
          )
        }
        : Lo(t)
          ? { [`Set(${t.size})`]: [...t.values()].map((n) => Dn(n)) }
          : mt(t)
            ? Dn(t)
            : ee(t) && !F(t) && !jo(t)
              ? String(t)
              : t,
  Dn = (e, t = '') => {
    var n

    return mt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  }
/**
 * @vue/reactivity v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ let Ce
class Vo {
  constructor(t = !1) {
    ; (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Ce),
      !t && Ce && (this.index = (Ce.scopes || (Ce.scopes = [])).push(this) - 1)
  }
  get active() {
    return this._active
  }
  run(t) {
    if (this._active) {
      const n = Ce
      try {
        return (Ce = this), t()
      } finally {
        Ce = n
      }
    }
  }
  on() {
    Ce = this
  }
  off() {
    Ce = this.parent
  }
  stop(t) {
    if (this._active) {
      let n, s
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop()
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]()
      if (this.scopes) for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0)
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop()
        o && o !== this && ((this.parent.scopes[this.index] = o), (o.index = this.index))
      }
      ; (this.parent = void 0), (this._active = !1)
    }
  }
}
function ci(e) {
  return new Vo(e)
}
function ui(e, t = Ce) {
  t && t.active && t.effects.push(e)
}
function ai() {
  return Ce
}
let dt
class vs {
  constructor(t, n, s, o) {
    ; (this.fn = t),
      (this.trigger = n),
      (this.scheduler = s),
      (this.active = !0),
      (this.deps = []),
      (this._dirtyLevel = 4),
      (this._trackId = 0),
      (this._runnings = 0),
      (this._shouldSchedule = !1),
      (this._depsLength = 0),
      ui(this, o)
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      ; (this._dirtyLevel = 1), rt()
      for (let t = 0; t < this._depsLength; t++) {
        const n = this.deps[t]
        if (n.computed && (fi(n.computed), this._dirtyLevel >= 4)) break
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), it()
    }

    return this._dirtyLevel >= 4
  }
  set dirty(t) {
    this._dirtyLevel = t ? 4 : 0
  }
  run() {
    if (((this._dirtyLevel = 0), !this.active)) return this.fn()
    let t = nt,
      n = dt
    try {
      return (nt = !0), (dt = this), this._runnings++, Hs(this), this.fn()
    } finally {
      Bs(this), this._runnings--, (dt = n), (nt = t)
    }
  }
  stop() {
    this.active && (Hs(this), Bs(this), this.onStop && this.onStop(), (this.active = !1))
  }
}
function fi(e) {
  return e.value
}
function Hs(e) {
  e._trackId++, (e._depsLength = 0)
}
function Bs(e) {
  if (e.deps.length > e._depsLength) {
    for (let t = e._depsLength; t < e.deps.length; t++) Uo(e.deps[t], e)
    e.deps.length = e._depsLength
  }
}
function Uo(e, t) {
  const n = e.get(t)
  n !== void 0 && t._trackId !== n && (e.delete(t), e.size === 0 && e.cleanup())
}
let nt = !0,
  Jn = 0
const Ko = []
function rt() {
  Ko.push(nt), (nt = !1)
}
function it() {
  const e = Ko.pop()
  nt = e === void 0 ? !0 : e
}
function bs() {
  Jn++
}
function ys() {
  for (Jn--; !Jn && Xn.length;) Xn.shift()()
}
function Wo(e, t, n) {
  if (t.get(e) !== e._trackId) {
    t.set(e, e._trackId)
    const s = e.deps[e._depsLength]
    s !== t ? (s && Uo(s, e), (e.deps[e._depsLength++] = t)) : e._depsLength++
  }
}
const Xn = []
function qo(e, t, n) {
  bs()
  for (const s of e.keys()) {
    let o
    s._dirtyLevel < t &&
      (o ?? (o = e.get(s) === s._trackId)) &&
      (s._shouldSchedule || (s._shouldSchedule = s._dirtyLevel === 0), (s._dirtyLevel = t)),
      s._shouldSchedule &&
      (o ?? (o = e.get(s) === s._trackId)) &&
      (s.trigger(),
        (!s._runnings || s.allowRecurse) &&
        s._dirtyLevel !== 2 &&
        ((s._shouldSchedule = !1), s.scheduler && Xn.push(s.scheduler)))
  }
  ys()
}
const zo = (e, t) => {
  const n = new Map()

  return (n.cleanup = e), (n.computed = t), n
},
  Zn = new WeakMap(),
  ht = Symbol(''),
  es = Symbol('')
function ve(e, t, n) {
  if (nt && dt) {
    let s = Zn.get(e)
    s || Zn.set(e, (s = new Map()))
    let o = s.get(n)
    o || s.set(n, (o = zo(() => s.delete(n)))), Wo(dt, o)
  }
}
function We(e, t, n, s, o, r) {
  const i = Zn.get(e)
  if (!i) return
  let c = []
  if (t === 'clear') c = [...i.values()]
  else if (n === 'length' && F(e)) {
    const l = Number(s)
    i.forEach((d, a) => {
      ; (a === 'length' || (!mt(a) && a >= l)) && c.push(d)
    })
  } else
    switch ((n !== void 0 && c.push(i.get(n)), t)) {
      case 'add':
        F(e) ? _s(n) && c.push(i.get('length')) : (c.push(i.get(ht)), xt(e) && c.push(i.get(es)))
        break
      case 'delete':
        F(e) || (c.push(i.get(ht)), xt(e) && c.push(i.get(es)))
        break
      case 'set':
        xt(e) && c.push(i.get(ht))
        break
    }
  bs()
  for (const l of c) l && qo(l, 4)
  ys()
}
const di = ps('__proto__,__v_isRef,__isVue'),
  Go = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(mt)
  ),
  Ds = hi()
function hi() {
  const e = {}

  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...n) {
        const s = z(this)
        for (let r = 0, i = this.length; r < i; r++) ve(s, 'get', r + '')
        const o = s[t](...n)

        return o === -1 || o === !1 ? s[t](...n.map(z)) : o
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...n) {
        rt(), bs()
        const s = z(this)[t].apply(this, n)

        return ys(), it(), s
      }
    }),
    e
  )
}
function pi(e) {
  mt(e) || (e = String(e))
  const t = z(this)

  return ve(t, 'has', e), t.hasOwnProperty(e)
}
class Yo {
  constructor(t = !1, n = !1) {
    ; (this._isReadonly = t), (this._isShallow = n)
  }
  get(t, n, s) {
    const o = this._isReadonly,
      r = this._isShallow
    if (n === '__v_isReactive') return !o
    if (n === '__v_isReadonly') return o
    if (n === '__v_isShallow') return r
    if (n === '__v_raw')
      return s === (o ? (r ? Pi : Zo) : r ? Xo : Jo).get(t) ||
        Object.getPrototypeOf(t) === Object.getPrototypeOf(s)
        ? t
        : void 0
    const i = F(t)
    if (!o) {
      if (i && U(Ds, n)) return Reflect.get(Ds, n, s)
      if (n === 'hasOwnProperty') return pi
    }
    const c = Reflect.get(t, n, s)

    return (mt(n) ? Go.has(n) : di(n)) || (o || ve(t, 'get', n), r)
      ? c
      : be(c)
        ? i && _s(n)
          ? c
          : c.value
        : ee(c)
          ? o
            ? tr(c)
            : Cn(c)
          : c
  }
}
class Qo extends Yo {
  constructor(t = !1) {
    super(!1, t)
  }
  set(t, n, s, o) {
    let r = t[n]
    if (!this._isShallow) {
      const l = Wt(r)
      if ((!_n(s) && !Wt(s) && ((r = z(r)), (s = z(s))), !F(t) && be(r) && !be(s)))
        return l ? !1 : ((r.value = s), !0)
    }
    const i = F(t) && _s(n) ? Number(n) < t.length : U(t, n),
      c = Reflect.set(t, n, s, o)

    return t === z(o) && (i ? ot(s, r) && We(t, 'set', n, s) : We(t, 'add', n, s)), c
  }
  deleteProperty(t, n) {
    const s = U(t, n)
    t[n]
    const o = Reflect.deleteProperty(t, n)

    return o && s && We(t, 'delete', n, void 0), o
  }
  has(t, n) {
    const s = Reflect.has(t, n)

    return (!mt(n) || !Go.has(n)) && ve(t, 'has', n), s
  }
  ownKeys(t) {
    return ve(t, 'iterate', F(t) ? 'length' : ht), Reflect.ownKeys(t)
  }
}
class mi extends Yo {
  constructor(t = !1) {
    super(!0, t)
  }
  set(t, n) {
    return !0
  }
  deleteProperty(t, n) {
    return !0
  }
}
const gi = new Qo(),
  _i = new mi(),
  vi = new Qo(!0)
const ws = (e) => e,
  Rn = (e) => Reflect.getPrototypeOf(e)
function nn(e, t, n = !1, s = !1) {
  e = e.__v_raw
  const o = z(e),
    r = z(t)
  n || (ot(t, r) && ve(o, 'get', t), ve(o, 'get', r))
  const { has: i } = Rn(o),
    c = s ? ws : n ? Ss : qt
  if (i.call(o, t)) return c(e.get(t))
  if (i.call(o, r)) return c(e.get(r))
  e !== o && e.get(t)
}
function sn(e, t = !1) {
  const n = this.__v_raw,
    s = z(n),
    o = z(e)

  return (
    t || (ot(e, o) && ve(s, 'has', e), ve(s, 'has', o)), e === o ? n.has(e) : n.has(e) || n.has(o)
  )
}
function on(e, t = !1) {
  return (e = e.__v_raw), !t && ve(z(e), 'iterate', ht), Reflect.get(e, 'size', e)
}
function Vs(e) {
  e = z(e)
  const t = z(this)

  return Rn(t).has.call(t, e) || (t.add(e), We(t, 'add', e, e)), this
}
function Us(e, t) {
  t = z(t)
  const n = z(this),
    { has: s, get: o } = Rn(n)
  let r = s.call(n, e)
  r || ((e = z(e)), (r = s.call(n, e)))
  const i = o.call(n, e)

  return n.set(e, t), r ? ot(t, i) && We(n, 'set', e, t) : We(n, 'add', e, t), this
}
function Ks(e) {
  const t = z(this),
    { has: n, get: s } = Rn(t)
  let o = n.call(t, e)
  o || ((e = z(e)), (o = n.call(t, e))), s && s.call(t, e)
  const r = t.delete(e)

  return o && We(t, 'delete', e, void 0), r
}
function Ws() {
  const e = z(this),
    t = e.size !== 0,
    n = e.clear()

  return t && We(e, 'clear', void 0, void 0), n
}
function rn(e, t) {
  return function (s, o) {
    const r = this,
      i = r.__v_raw,
      c = z(i),
      l = t ? ws : e ? Ss : qt

    return !e && ve(c, 'iterate', ht), i.forEach((d, a) => s.call(o, l(d), l(a), r))
  }
}
function ln(e, t, n) {
  return function (...s) {
    const o = this.__v_raw,
      r = z(o),
      i = xt(r),
      c = e === 'entries' || (e === Symbol.iterator && i),
      l = e === 'keys' && i,
      d = o[e](...s),
      a = n ? ws : t ? Ss : qt

    return (
      !t && ve(r, 'iterate', l ? es : ht),
      {
        next() {
          const { value: h, done: p } = d.next()

          return p ? { value: h, done: p } : { value: c ? [a(h[0]), a(h[1])] : a(h), done: p }
        },
        [Symbol.iterator]() {
          return this
        }
      }
    )
  }
}
function Ye(e) {
  return function (...t) {
    return e === 'delete' ? !1 : e === 'clear' ? void 0 : this
  }
}
function bi() {
  const e = {
    get(r) {
      return nn(this, r)
    },
    get size() {
      return on(this)
    },
    has: sn,
    add: Vs,
    set: Us,
    delete: Ks,
    clear: Ws,
    forEach: rn(!1, !1)
  },
    t = {
      get(r) {
        return nn(this, r, !1, !0)
      },
      get size() {
        return on(this)
      },
      has: sn,
      add: Vs,
      set: Us,
      delete: Ks,
      clear: Ws,
      forEach: rn(!1, !0)
    },
    n = {
      get(r) {
        return nn(this, r, !0)
      },
      get size() {
        return on(this, !0)
      },
      has(r) {
        return sn.call(this, r, !0)
      },
      add: Ye('add'),
      set: Ye('set'),
      delete: Ye('delete'),
      clear: Ye('clear'),
      forEach: rn(!0, !1)
    },
    s = {
      get(r) {
        return nn(this, r, !0, !0)
      },
      get size() {
        return on(this, !0)
      },
      has(r) {
        return sn.call(this, r, !0)
      },
      add: Ye('add'),
      set: Ye('set'),
      delete: Ye('delete'),
      clear: Ye('clear'),
      forEach: rn(!0, !0)
    }

  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((r) => {
      ; (e[r] = ln(r, !1, !1)),
        (n[r] = ln(r, !0, !1)),
        (t[r] = ln(r, !1, !0)),
        (s[r] = ln(r, !0, !0))
    }),
    [e, n, t, s]
  )
}
const [yi, wi, Ei, xi] = bi()
function Es(e, t) {
  const n = t ? (e ? xi : Ei) : e ? wi : yi

  return (s, o, r) =>
    o === '__v_isReactive'
      ? !e
      : o === '__v_isReadonly'
        ? e
        : o === '__v_raw'
          ? s
          : Reflect.get(U(n, o) && o in s ? n : s, o, r)
}
const Si = { get: Es(!1, !1) },
  Ri = { get: Es(!1, !0) },
  Ci = { get: Es(!0, !1) }
const Jo = new WeakMap(),
  Xo = new WeakMap(),
  Zo = new WeakMap(),
  Pi = new WeakMap()
function Oi(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function Ai(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Oi(Xr(e))
}
function Cn(e) {
  return Wt(e) ? e : xs(e, !1, gi, Si, Jo)
}
function er(e) {
  return xs(e, !1, vi, Ri, Xo)
}
function tr(e) {
  return xs(e, !0, _i, Ci, Zo)
}
function xs(e, t, n, s, o) {
  if (!ee(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const r = o.get(e)
  if (r) return r
  const i = Ai(e)
  if (i === 0) return e
  const c = new Proxy(e, i === 2 ? s : n)

  return o.set(e, c), c
}
function Ht(e) {
  return Wt(e) ? Ht(e.__v_raw) : !!(e && e.__v_isReactive)
}
function Wt(e) {
  return !!(e && e.__v_isReadonly)
}
function _n(e) {
  return !!(e && e.__v_isShallow)
}
function nr(e) {
  return e ? !!e.__v_raw : !1
}
function z(e) {
  const t = e && e.__v_raw

  return t ? z(t) : e
}
function sr(e) {
  return Object.isExtensible(e) && ko(e, '__v_skip', !0), e
}
const qt = (e) => (ee(e) ? Cn(e) : e),
  Ss = (e) => (ee(e) ? tr(e) : e)
class or {
  constructor(t, n, s, o) {
    ; (this.getter = t),
      (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this.__v_isReadonly = !1),
      (this.effect = new vs(
        () => t(this._value),
        () => an(this, this.effect._dirtyLevel === 2 ? 2 : 3)
      )),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !o),
      (this.__v_isReadonly = s)
  }
  get value() {
    const t = z(this)

    return (
      (!t._cacheable || t.effect.dirty) && ot(t._value, (t._value = t.effect.run())) && an(t, 4),
      rr(t),
      t.effect._dirtyLevel >= 2 && an(t, 2),
      t._value
    )
  }
  set value(t) {
    this._setter(t)
  }
  get _dirty() {
    return this.effect.dirty
  }
  set _dirty(t) {
    this.effect.dirty = t
  }
}
function $i(e, t, n = !1) {
  let s, o
  const r = B(e)

  return r ? ((s = e), (o = Se)) : ((s = e.get), (o = e.set)), new or(s, o, r || !o, n)
}
function rr(e) {
  var t
  nt &&
    dt &&
    ((e = z(e)),
      Wo(
        dt,
        (t = e.dep) != null ? t : (e.dep = zo(() => (e.dep = void 0), e instanceof or ? e : void 0))
      ))
}
function an(e, t = 4, n) {
  e = z(e)
  const s = e.dep
  s && qo(s, t)
}
function be(e) {
  return !!(e && e.__v_isRef === !0)
}
function we(e) {
  return ir(e, !1)
}
function Ii(e) {
  return ir(e, !0)
}
function ir(e, t) {
  return be(e) ? e : new Ti(e, t)
}
class Ti {
  constructor(t, n) {
    ; (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : z(t)),
      (this._value = n ? t : qt(t))
  }
  get value() {
    return rr(this), this._value
  }
  set value(t) {
    const n = this.__v_isShallow || _n(t) || Wt(t)
      ; (t = n ? t : z(t)),
        ot(t, this._rawValue) && ((this._rawValue = t), (this._value = n ? t : qt(t)), an(this, 4))
  }
}
function he(e) {
  return be(e) ? e.value : e
}
const Mi = {
  get: (e, t, n) => he(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t]

    return be(o) && !be(n) ? ((o.value = n), !0) : Reflect.set(e, t, n, s)
  }
}
function lr(e) {
  return Ht(e) ? e : new Proxy(e, Mi)
}
/**
 * @vue/runtime-core v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ function st(e, t, n, s) {
  try {
    return s ? e(...s) : e()
  } catch (o) {
    Pn(o, t, n)
  }
}
function Ae(e, t, n, s) {
  if (B(e)) {
    const o = st(e, t, n, s)

    return (
      o &&
      No(o) &&
      o.catch((r) => {
        Pn(r, t, n)
      }),
      o
    )
  }
  if (F(e)) {
    const o = []
    for (let r = 0; r < e.length; r++) o.push(Ae(e[r], t, n, s))

    return o
  }
}
function Pn(e, t, n, s = !0) {
  const o = t ? t.vnode : null
  if (t) {
    let r = t.parent
    const i = t.proxy,
      c = `https://vuejs.org/error-reference/#runtime-${n}`
    for (; r;) {
      const d = r.ec
      if (d) {
        for (let a = 0; a < d.length; a++) if (d[a](e, i, c) === !1) return
      }
      r = r.parent
    }
    const l = t.appContext.config.errorHandler
    if (l) {
      rt(), st(l, null, 10, [e, i, c]), it()

      return
    }
  }
  Li(e, n, o, s)
}
function Li(e, t, n, s = !0) {
  console.error(e)
}
let zt = !1,
  ts = !1
const ue = []
let ke = 0
const St = []
let Je = null,
  ft = 0
const cr = Promise.resolve()
let Rs = null
function ur(e) {
  const t = Rs || cr

  return e ? t.then(this ? e.bind(this) : e) : t
}
function Ni(e) {
  let t = ke + 1,
    n = ue.length
  for (; t < n;) {
    const s = (t + n) >>> 1,
      o = ue[s],
      r = Gt(o)
    r < e || (r === e && o.pre) ? (t = s + 1) : (n = s)
  }

  return t
}
function Cs(e) {
  ; (!ue.length || !ue.includes(e, zt && e.allowRecurse ? ke + 1 : ke)) &&
    (e.id == null ? ue.push(e) : ue.splice(Ni(e.id), 0, e), ar())
}
function ar() {
  !zt && !ts && ((ts = !0), (Rs = cr.then(dr)))
}
function Fi(e) {
  const t = ue.indexOf(e)
  t > ke && ue.splice(t, 1)
}
function ji(e) {
  F(e) ? St.push(...e) : (!Je || !Je.includes(e, e.allowRecurse ? ft + 1 : ft)) && St.push(e), ar()
}
function qs(e, t, n = zt ? ke + 1 : 0) {
  for (; n < ue.length; n++) {
    const s = ue[n]
    if (s && s.pre) {
      if (e && s.id !== e.uid) continue
      ue.splice(n, 1), n--, s()
    }
  }
}
function fr(e) {
  if (St.length) {
    const t = [...new Set(St)].sort((n, s) => Gt(n) - Gt(s))
    if (((St.length = 0), Je)) {
      Je.push(...t)

      return
    }
    for (Je = t, ft = 0; ft < Je.length; ft++) Je[ft]()
      ; (Je = null), (ft = 0)
  }
}
const Gt = (e) => (e.id == null ? 1 / 0 : e.id),
  ki = (e, t) => {
    const n = Gt(e) - Gt(t)
    if (n === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }

    return n
  }
function dr(e) {
  ; (ts = !1), (zt = !0), ue.sort(ki)
  try {
    for (ke = 0; ke < ue.length; ke++) {
      const t = ue[ke]
      t && t.active !== !1 && st(t, null, 14)
    }
  } finally {
    ; (ke = 0), (ue.length = 0), fr(), (zt = !1), (Rs = null), (ue.length || St.length) && dr()
  }
}
function Hi(e, t, ...n) {
  if (e.isUnmounted) return
  const s = e.vnode.props || Z
  let o = n
  const r = t.startsWith('update:'),
    i = r && t.slice(7)
  if (i && i in s) {
    const a = `${i === 'modelValue' ? 'model' : i}Modifiers`,
      { number: h, trim: p } = s[a] || Z
    p && (o = n.map((b) => (oe(b) ? b.trim() : b))), h && (o = n.map(ti))
  }
  let c,
    l = s[(c = Hn(t))] || s[(c = Hn(De(t)))]
  !l && r && (l = s[(c = Hn(At(t)))]), l && Ae(l, e, 6, o)
  const d = s[c + 'Once']
  if (d) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[c]) return
      ; (e.emitted[c] = !0), Ae(d, e, 6, o)
  }
}
function hr(e, t, n = !1) {
  const s = t.emitsCache,
    o = s.get(e)
  if (o !== void 0) return o
  const r = e.emits
  let i = {},
    c = !1
  if (!B(e)) {
    const l = (d) => {
      const a = hr(d, t, !0)
      a && ((c = !0), le(i, a))
    }
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l)
  }

  return !r && !c
    ? (ee(e) && s.set(e, null), null)
    : (F(r) ? r.forEach((l) => (i[l] = null)) : le(i, r), ee(e) && s.set(e, i), i)
}
function On(e, t) {
  return !e || !wn(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      U(e, t[0].toLowerCase() + t.slice(1)) || U(e, At(t)) || U(e, t))
}
let Pe = null,
  An = null
function vn(e) {
  const t = Pe

  return (Pe = e), (An = (e && e.type.__scopeId) || null), t
}
function It(e) {
  An = e
}
function Tt() {
  An = null
}
function tt(e, t = Pe, n) {
  if (!t || e._n) return e
  const s = (...o) => {
    s._d && so(-1)
    const r = vn(t)
    let i
    try {
      i = e(...o)
    } finally {
      vn(r), s._d && so(1)
    }

    return i
  }

  return (s._n = !0), (s._c = !0), (s._d = !0), s
}
function Vn(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [r],
    slots: i,
    attrs: c,
    emit: l,
    render: d,
    renderCache: a,
    props: h,
    data: p,
    setupState: b,
    ctx: A,
    inheritAttrs: N
  } = e,
    D = vn(e)
  let T, M
  try {
    if (n.shapeFlag & 4) {
      const W = o || s,
        ne = W
        ; (T = je(d.call(ne, W, a, h, b, p, A))), (M = c)
    } else {
      const W = t
        ; (T = je(W.length > 1 ? W(h, { attrs: c, slots: i, emit: l }) : W(h, null))),
          (M = t.props ? c : Bi(c))
    }
  } catch (W) {
    ; (Vt.length = 0), Pn(W, e, 1), (T = K(pt))
  }
  let k = T
  if (M && N !== !1) {
    const W = Object.keys(M),
      { shapeFlag: ne } = k
    W.length && ne & 7 && (r && W.some(ms) && (M = Di(M, r)), (k = Ct(k, M, !1, !0)))
  }

  return (
    n.dirs && ((k = Ct(k, null, !1, !0)), (k.dirs = k.dirs ? k.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (k.transition = n.transition),
    (T = k),
    vn(D),
    T
  )
}
const Bi = (e) => {
  let t
  for (const n in e) (n === 'class' || n === 'style' || wn(n)) && ((t || (t = {}))[n] = e[n])

  return t
},
  Di = (e, t) => {
    const n = {}
    for (const s in e) (!ms(s) || !(s.slice(9) in t)) && (n[s] = e[s])

    return n
  }
function Vi(e, t, n) {
  const { props: s, children: o, component: r } = e,
    { props: i, children: c, patchFlag: l } = t,
    d = r.emitsOptions
  if (t.dirs || t.transition) return !0
  if (n && l >= 0) {
    if (l & 1024) return !0
    if (l & 16) return s ? zs(s, i, d) : !!i
    if (l & 8) {
      const a = t.dynamicProps
      for (let h = 0; h < a.length; h++) {
        const p = a[h]
        if (i[p] !== s[p] && !On(d, p)) return !0
      }
    }
  } else
    return (o || c) && (!c || !c.$stable) ? !0 : s === i ? !1 : s ? (i ? zs(s, i, d) : !0) : !!i

  return !1
}
function zs(e, t, n) {
  const s = Object.keys(t)
  if (s.length !== Object.keys(e).length) return !0
  for (let o = 0; o < s.length; o++) {
    const r = s[o]
    if (t[r] !== e[r] && !On(n, r)) return !0
  }

  return !1
}
function Ui({ vnode: e, parent: t }, n) {
  for (; t;) {
    const s = t.subTree
    if ((s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e))
      ((e = t.vnode).el = n), (t = t.parent)
    else break
  }
}
const Ki = 'components'
function $n(e, t) {
  return qi(Ki, e, !0, t) || e
}
const Wi = Symbol.for('v-ndc')
function qi(e, t, n = !0, s = !1) {
  const o = Pe || ae
  if (o) {
    const r = o.type
    {
      const c = Bl(r, !1)
      if (c && (c === t || c === De(t) || c === Sn(De(t)))) return r
    }
    const i = Gs(o[e] || r[e], t) || Gs(o.appContext[e], t)

    return !i && s ? r : i
  }
}
function Gs(e, t) {
  return e && (e[t] || e[De(t)] || e[Sn(De(t))])
}
const zi = (e) => e.__isSuspense
function Gi(e, t) {
  t && t.pendingBranch ? (F(e) ? t.effects.push(...e) : t.effects.push(e)) : ji(e)
}
const Yi = Symbol.for('v-scx'),
  Qi = () => Be(Yi),
  cn = {}
function fn(e, t, n) {
  return pr(e, t, n)
}
function pr(e, t, { immediate: n, deep: s, flush: o, once: r, onTrack: i, onTrigger: c } = Z) {
  if (t && r) {
    const H = t
    t = (...fe) => {
      H(...fe), ne()
    }
  }
  const l = ae,
    d = (H) => (s === !0 ? H : wt(H, s === !1 ? 1 : void 0))
  let a,
    h = !1,
    p = !1
  if (
    (be(e)
      ? ((a = () => e.value), (h = _n(e)))
      : Ht(e)
        ? ((a = () => d(e)), (h = !0))
        : F(e)
          ? ((p = !0),
            (h = e.some((H) => Ht(H) || _n(H))),
            (a = () =>
              e.map((H) => {
                if (be(H)) return H.value
                if (Ht(H)) return d(H)
                if (B(H)) return st(H, l, 2)
              })))
          : B(e)
            ? t
              ? (a = () => st(e, l, 2))
              : (a = () => (b && b(), Ae(e, l, 3, [A])))
            : (a = Se),
      t && s)
  ) {
    const H = a
    a = () => wt(H())
  }
  let b,
    A = (H) => {
      b = k.onStop = () => {
        st(H, l, 4), (b = k.onStop = void 0)
      }
    },
    N
  if (Ln)
    if (((A = Se), t ? n && Ae(t, l, 3, [a(), p ? [] : void 0, A]) : a(), o === 'sync')) {
      const H = Qi()
      N = H.__watcherHandles || (H.__watcherHandles = [])
    } else return Se
  let D = p ? new Array(e.length).fill(cn) : cn
  const T = () => {
    if (!(!k.active || !k.dirty))
      if (t) {
        const H = k.run()
          ; (s || h || (p ? H.some((fe, xe) => ot(fe, D[xe])) : ot(H, D))) &&
            (b && b(), Ae(t, l, 3, [H, D === cn ? void 0 : p && D[0] === cn ? [] : D, A]), (D = H))
      } else k.run()
  }
  T.allowRecurse = !!t
  let M
  o === 'sync'
    ? (M = T)
    : o === 'post'
      ? (M = () => me(T, l && l.suspense))
      : ((T.pre = !0), l && (T.id = l.uid), (M = () => Cs(T)))
  const k = new vs(a, Se, M),
    W = ai(),
    ne = () => {
      k.stop(), W && gs(W.effects, k)
    }

  return (
    t ? (n ? T() : (D = k.run())) : o === 'post' ? me(k.run.bind(k), l && l.suspense) : k.run(),
    N && N.push(ne),
    ne
  )
}
function Ji(e, t, n) {
  const s = this.proxy,
    o = oe(e) ? (e.includes('.') ? mr(s, e) : () => s[e]) : e.bind(s, s)
  let r
  B(t) ? (r = t) : ((r = t.handler), (n = t))
  const i = en(this),
    c = pr(o, r.bind(s), n)

  return i(), c
}
function mr(e, t) {
  const n = t.split('.')

  return () => {
    let s = e
    for (let o = 0; o < n.length && s; o++) s = s[n[o]]

    return s
  }
}
function wt(e, t = 1 / 0, n) {
  if (t <= 0 || !ee(e) || e.__v_skip || ((n = n || new Set()), n.has(e))) return e
  if ((n.add(e), t--, be(e))) wt(e.value, t, n)
  else if (F(e)) for (let s = 0; s < e.length; s++) wt(e[s], t, n)
  else if (Lo(e) || xt(e))
    e.forEach((s) => {
      wt(s, t, n)
    })
  else if (jo(e)) for (const s in e) wt(e[s], t, n)

  return e
}
function ut(e, t, n, s) {
  const o = e.dirs,
    r = t && t.dirs
  for (let i = 0; i < o.length; i++) {
    const c = o[i]
    r && (c.oldValue = r[i].value)
    let l = c.dir[s]
    l && (rt(), Ae(l, n, 8, [e.el, c, e, t]), it())
  }
}
/*! #__NO_SIDE_EFFECTS__ */ function Ee(e, t) {
  return B(e) ? le({ name: e.name }, t, { setup: e }) : e
}
const dn = (e) => !!e.type.__asyncLoader,
  gr = (e) => e.type.__isKeepAlive
function Xi(e, t) {
  _r(e, 'a', t)
}
function Zi(e, t) {
  _r(e, 'da', t)
}
function _r(e, t, n = ae) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let o = n
      for (; o;) {
        if (o.isDeactivated) return
        o = o.parent
      }

      return e()
    })
  if ((In(t, s, n), n)) {
    let o = n.parent
    for (; o && o.parent;) gr(o.parent.vnode) && el(s, t, n, o), (o = o.parent)
  }
}
function el(e, t, n, s) {
  const o = In(t, e, s, !0)
  Zt(() => {
    gs(s[t], o)
  }, n)
}
function In(e, t, n = ae, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []),
      r =
        t.__weh ||
        (t.__weh = (...i) => {
          if (n.isUnmounted) return
          rt()
          const c = en(n),
            l = Ae(t, n, e, i)

          return c(), it(), l
        })

    return s ? o.unshift(r) : o.push(r), r
  }
}
const qe =
  (e) =>
    (t, n = ae) =>
      (!Ln || e === 'sp') && In(e, (...s) => t(...s), n),
  tl = qe('bm'),
  Tn = qe('m'),
  nl = qe('bu'),
  sl = qe('u'),
  ol = qe('bum'),
  Zt = qe('um'),
  rl = qe('sp'),
  il = qe('rtg'),
  ll = qe('rtc')
function cl(e, t = ae) {
  In('ec', e, t)
}
function ul(e, t, n, s) {
  let o
  const r = n
  if (F(e) || oe(e)) {
    o = new Array(e.length)
    for (let i = 0, c = e.length; i < c; i++) o[i] = t(e[i], i, void 0, r)
  } else if (typeof e == 'number') {
    o = new Array(e)
    for (let i = 0; i < e; i++) o[i] = t(i + 1, i, void 0, r)
  } else if (ee(e))
    if (e[Symbol.iterator]) o = Array.from(e, (i, c) => t(i, c, void 0, r))
    else {
      const i = Object.keys(e)
      o = new Array(i.length)
      for (let c = 0, l = i.length; c < l; c++) {
        const d = i[c]
        o[c] = t(e[d], d, c, r)
      }
    }
  else o = []

  return o
}
const ns = (e) => (e ? (Tr(e) ? $s(e) || e.proxy : ns(e.parent)) : null),
  Bt = le(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ns(e.parent),
    $root: (e) => ns(e.root),
    $emit: (e) => e.emit,
    $options: (e) => Ps(e),
    $forceUpdate: (e) =>
      e.f ||
      (e.f = () => {
        ; (e.effect.dirty = !0), Cs(e.update)
      }),
    $nextTick: (e) => e.n || (e.n = ur.bind(e.proxy)),
    $watch: (e) => Ji.bind(e)
  }),
  Un = (e, t) => e !== Z && !e.__isScriptSetup && U(e, t),
  al = {
    get({ _: e }, t) {
      if (t === '__v_skip') return !0
      const { ctx: n, setupState: s, data: o, props: r, accessCache: i, type: c, appContext: l } = e
      let d
      if (t[0] !== '$') {
        const b = i[t]
        if (b !== void 0)
          switch (b) {
            case 1:
              return s[t]
            case 2:
              return o[t]
            case 4:
              return n[t]
            case 3:
              return r[t]
          }
        else {
          if (Un(s, t)) return (i[t] = 1), s[t]
          if (o !== Z && U(o, t)) return (i[t] = 2), o[t]
          if ((d = e.propsOptions[0]) && U(d, t)) return (i[t] = 3), r[t]
          if (n !== Z && U(n, t)) return (i[t] = 4), n[t]
          ss && (i[t] = 0)
        }
      }
      const a = Bt[t]
      let h, p
      if (a) return t === '$attrs' && ve(e.attrs, 'get', ''), a(e)
      if ((h = c.__cssModules) && (h = h[t])) return h
      if (n !== Z && U(n, t)) return (i[t] = 4), n[t]
      if (((p = l.config.globalProperties), U(p, t))) return p[t]
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: o, ctx: r } = e

      return Un(o, t)
        ? ((o[t] = n), !0)
        : s !== Z && U(s, t)
          ? ((s[t] = n), !0)
          : U(e.props, t) || (t[0] === '$' && t.slice(1) in e)
            ? !1
            : ((r[t] = n), !0)
    },
    has(
      { _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: r } },
      i
    ) {
      let c

      return (
        !!n[i] ||
        (e !== Z && U(e, i)) ||
        Un(t, i) ||
        ((c = r[0]) && U(c, i)) ||
        U(s, i) ||
        U(Bt, i) ||
        U(o.config.globalProperties, i)
      )
    },
    defineProperty(e, t, n) {
      return (
        n.get != null ? (e._.accessCache[t] = 0) : U(n, 'value') && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      )
    }
  }
function Ys(e) {
  return F(e) ? e.reduce((t, n) => ((t[n] = null), t), {}) : e
}
let ss = !0
function fl(e) {
  const t = Ps(e),
    n = e.proxy,
    s = e.ctx
    ; (ss = !1), t.beforeCreate && Qs(t.beforeCreate, e, 'bc')
  const {
    data: o,
    computed: r,
    methods: i,
    watch: c,
    provide: l,
    inject: d,
    created: a,
    beforeMount: h,
    mounted: p,
    beforeUpdate: b,
    updated: A,
    activated: N,
    deactivated: D,
    beforeDestroy: T,
    beforeUnmount: M,
    destroyed: k,
    unmounted: W,
    render: ne,
    renderTracked: H,
    renderTriggered: fe,
    errorCaptured: xe,
    serverPrefetch: lt,
    expose: Ie,
    inheritAttrs: ze,
    components: ct,
    directives: Te,
    filters: Mt
  } = t
  if ((d && dl(d, s, null), i))
    for (const Q in i) {
      const q = i[Q]
      B(q) && (s[Q] = q.bind(n))
    }
  if (o) {
    const Q = o.call(n, n)
    ee(Q) && (e.data = Cn(Q))
  }
  if (((ss = !0), r))
    for (const Q in r) {
      const q = r[Q],
        Ue = B(q) ? q.bind(n, n) : B(q.get) ? q.get.bind(n, n) : Se,
        Ge = !B(q) && B(q.set) ? q.set.bind(n) : Se,
        Me = ge({ get: Ue, set: Ge })
      Object.defineProperty(s, Q, {
        enumerable: !0,
        configurable: !0,
        get: () => Me.value,
        set: (pe) => (Me.value = pe)
      })
    }
  if (c) for (const Q in c) vr(c[Q], s, n, Q)
  if (l) {
    const Q = B(l) ? l.call(n) : l
    Reflect.ownKeys(Q).forEach((q) => {
      hn(q, Q[q])
    })
  }
  a && Qs(a, e, 'c')
  function re(Q, q) {
    F(q) ? q.forEach((Ue) => Q(Ue.bind(n))) : q && Q(q.bind(n))
  }
  if (
    (re(tl, h),
      re(Tn, p),
      re(nl, b),
      re(sl, A),
      re(Xi, N),
      re(Zi, D),
      re(cl, xe),
      re(ll, H),
      re(il, fe),
      re(ol, M),
      re(Zt, W),
      re(rl, lt),
      F(Ie))
  )
    if (Ie.length) {
      const Q = e.exposed || (e.exposed = {})
      Ie.forEach((q) => {
        Object.defineProperty(Q, q, { get: () => n[q], set: (Ue) => (n[q] = Ue) })
      })
    } else e.exposed || (e.exposed = {})
  ne && e.render === Se && (e.render = ne),
    ze != null && (e.inheritAttrs = ze),
    ct && (e.components = ct),
    Te && (e.directives = Te)
}
function dl(e, t, n = Se) {
  F(e) && (e = os(e))
  for (const s in e) {
    const o = e[s]
    let r
    ee(o)
      ? 'default' in o
        ? (r = Be(o.from || s, o.default, !0))
        : (r = Be(o.from || s))
      : (r = Be(o)),
      be(r)
        ? Object.defineProperty(t, s, {
          enumerable: !0,
          configurable: !0,
          get: () => r.value,
          set: (i) => (r.value = i)
        })
        : (t[s] = r)
  }
}
function Qs(e, t, n) {
  Ae(F(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n)
}
function vr(e, t, n, s) {
  const o = s.includes('.') ? mr(n, s) : () => n[s]
  if (oe(e)) {
    const r = t[e]
    B(r) && fn(o, r)
  } else if (B(e)) fn(o, e.bind(n))
  else if (ee(e))
    if (F(e)) e.forEach((r) => vr(r, t, n, s))
    else {
      const r = B(e.handler) ? e.handler.bind(n) : t[e.handler]
      B(r) && fn(o, r, e)
    }
}
function Ps(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: o,
      optionsCache: r,
      config: { optionMergeStrategies: i }
    } = e.appContext,
    c = r.get(t)
  let l

  return (
    c
      ? (l = c)
      : !o.length && !n && !s
        ? (l = t)
        : ((l = {}), o.length && o.forEach((d) => bn(l, d, i, !0)), bn(l, t, i)),
    ee(t) && r.set(t, l),
    l
  )
}
function bn(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t
  r && bn(e, r, n, !0), o && o.forEach((i) => bn(e, i, n, !0))
  for (const i in t)
    if (!(s && i === 'expose')) {
      const c = hl[i] || (n && n[i])
      e[i] = c ? c(e[i], t[i]) : t[i]
    }

  return e
}
const hl = {
  data: Js,
  props: Xs,
  emits: Xs,
  methods: jt,
  computed: jt,
  beforeCreate: de,
  created: de,
  beforeMount: de,
  mounted: de,
  beforeUpdate: de,
  updated: de,
  beforeDestroy: de,
  beforeUnmount: de,
  destroyed: de,
  unmounted: de,
  activated: de,
  deactivated: de,
  errorCaptured: de,
  serverPrefetch: de,
  components: jt,
  directives: jt,
  watch: ml,
  provide: Js,
  inject: pl
}
function Js(e, t) {
  return t
    ? e
      ? function () {
        return le(B(e) ? e.call(this, this) : e, B(t) ? t.call(this, this) : t)
      }
      : t
    : e
}
function pl(e, t) {
  return jt(os(e), os(t))
}
function os(e) {
  if (F(e)) {
    const t = {}
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n]

    return t
  }

  return e
}
function de(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function jt(e, t) {
  return e ? le(Object.create(null), e, t) : t
}
function Xs(e, t) {
  return e
    ? F(e) && F(t)
      ? [...new Set([...e, ...t])]
      : le(Object.create(null), Ys(e), Ys(t ?? {}))
    : t
}
function ml(e, t) {
  if (!e) return t
  if (!t) return e
  const n = le(Object.create(null), e)
  for (const s in t) n[s] = de(e[s], t[s])

  return n
}
function br() {
  return {
    app: null,
    config: {
      isNativeTag: Qr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap()
  }
}
let gl = 0
function _l(e, t) {
  return function (s, o = null) {
    B(s) || (s = le({}, s)), o != null && !ee(o) && (o = null)
    const r = br(),
      i = new WeakSet()
    let c = !1
    const l = (r.app = {
      _uid: gl++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: Vl,
      get config() {
        return r.config
      },
      set config(d) { },
      use(d, ...a) {
        return (
          i.has(d) ||
          (d && B(d.install) ? (i.add(d), d.install(l, ...a)) : B(d) && (i.add(d), d(l, ...a))),
          l
        )
      },
      mixin(d) {
        return r.mixins.includes(d) || r.mixins.push(d), l
      },
      component(d, a) {
        return a ? ((r.components[d] = a), l) : r.components[d]
      },
      directive(d, a) {
        return a ? ((r.directives[d] = a), l) : r.directives[d]
      },
      mount(d, a, h) {
        if (!c) {
          const p = K(s, o)

          return (
            (p.appContext = r),
            h === !0 ? (h = 'svg') : h === !1 && (h = void 0),
            a && t ? t(p, d) : e(p, d, h),
            (c = !0),
            (l._container = d),
            (d.__vue_app__ = l),
            $s(p.component) || p.component.proxy
          )
        }
      },
      unmount() {
        c && (e(null, l._container), delete l._container.__vue_app__)
      },
      provide(d, a) {
        return (r.provides[d] = a), l
      },
      runWithContext(d) {
        const a = Dt
        Dt = l
        try {
          return d()
        } finally {
          Dt = a
        }
      }
    })

    return l
  }
}
let Dt = null
function hn(e, t) {
  if (ae) {
    let n = ae.provides
    const s = ae.parent && ae.parent.provides
    s === n && (n = ae.provides = Object.create(s)), (n[e] = t)
  }
}
function Be(e, t, n = !1) {
  const s = ae || Pe
  if (s || Dt) {
    const o = s
      ? s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides
      : Dt._context.provides
    if (o && e in o) return o[e]
    if (arguments.length > 1) return n && B(t) ? t.call(s && s.proxy) : t
  }
}
const yr = {},
  wr = () => Object.create(yr),
  Er = (e) => Object.getPrototypeOf(e) === yr
function vl(e, t, n, s = !1) {
  const o = {},
    r = wr()
    ; (e.propsDefaults = Object.create(null)), xr(e, t, o, r)
  for (const i in e.propsOptions[0]) i in o || (o[i] = void 0)
  n ? (e.props = s ? o : er(o)) : e.type.props ? (e.props = o) : (e.props = r), (e.attrs = r)
}
function bl(e, t, n, s) {
  const {
    props: o,
    attrs: r,
    vnode: { patchFlag: i }
  } = e,
    c = z(o),
    [l] = e.propsOptions
  let d = !1
  if ((s || i > 0) && !(i & 16)) {
    if (i & 8) {
      const a = e.vnode.dynamicProps
      for (let h = 0; h < a.length; h++) {
        let p = a[h]
        if (On(e.emitsOptions, p)) continue
        const b = t[p]
        if (l)
          if (U(r, p)) b !== r[p] && ((r[p] = b), (d = !0))
          else {
            const A = De(p)
            o[A] = rs(l, c, A, b, e, !1)
          }
        else b !== r[p] && ((r[p] = b), (d = !0))
      }
    }
  } else {
    xr(e, t, o, r) && (d = !0)
    let a
    for (const h in c)
      (!t || (!U(t, h) && ((a = At(h)) === h || !U(t, a)))) &&
        (l
          ? n && (n[h] !== void 0 || n[a] !== void 0) && (o[h] = rs(l, c, h, void 0, e, !0))
          : delete o[h])
    if (r !== c) for (const h in r) (!t || !U(t, h)) && (delete r[h], (d = !0))
  }
  d && We(e.attrs, 'set', '')
}
function xr(e, t, n, s) {
  const [o, r] = e.propsOptions
  let i = !1,
    c
  if (t)
    for (let l in t) {
      if (kt(l)) continue
      const d = t[l]
      let a
      o && U(o, (a = De(l)))
        ? !r || !r.includes(a)
          ? (n[a] = d)
          : ((c || (c = {}))[a] = d)
        : On(e.emitsOptions, l) || ((!(l in s) || d !== s[l]) && ((s[l] = d), (i = !0)))
    }
  if (r) {
    const l = z(n),
      d = c || Z
    for (let a = 0; a < r.length; a++) {
      const h = r[a]
      n[h] = rs(o, l, h, d[h], e, !U(d, h))
    }
  }

  return i
}
function rs(e, t, n, s, o, r) {
  const i = e[n]
  if (i != null) {
    const c = U(i, 'default')
    if (c && s === void 0) {
      const l = i.default
      if (i.type !== Function && !i.skipFactory && B(l)) {
        const { propsDefaults: d } = o
        if (n in d) s = d[n]
        else {
          const a = en(o)
            ; (s = d[n] = l.call(null, t)), a()
        }
      } else s = l
    }
    i[0] && (r && !c ? (s = !1) : i[1] && (s === '' || s === At(n)) && (s = !0))
  }

  return s
}
function Sr(e, t, n = !1) {
  const s = t.propsCache,
    o = s.get(e)
  if (o) return o
  const r = e.props,
    i = {},
    c = []
  let l = !1
  if (!B(e)) {
    const a = (h) => {
      l = !0
      const [p, b] = Sr(h, t, !0)
      le(i, p), b && c.push(...b)
    }
    !n && t.mixins.length && t.mixins.forEach(a),
      e.extends && a(e.extends),
      e.mixins && e.mixins.forEach(a)
  }
  if (!r && !l) return ee(e) && s.set(e, Et), Et
  if (F(r))
    for (let a = 0; a < r.length; a++) {
      const h = De(r[a])
      Zs(h) && (i[h] = Z)
    }
  else if (r)
    for (const a in r) {
      const h = De(a)
      if (Zs(h)) {
        const p = r[a],
          b = (i[h] = F(p) || B(p) ? { type: p } : le({}, p))
        if (b) {
          const A = no(Boolean, b.type),
            N = no(String, b.type)
            ; (b[0] = A > -1), (b[1] = N < 0 || A < N), (A > -1 || U(b, 'default')) && c.push(h)
        }
      }
    }
  const d = [i, c]

  return ee(e) && s.set(e, d), d
}
function Zs(e) {
  return e[0] !== '$' && !kt(e)
}
function eo(e) {
  return e === null
    ? 'null'
    : typeof e == 'function'
      ? e.name || ''
      : (typeof e == 'object' && e.constructor && e.constructor.name) || ''
}
function to(e, t) {
  return eo(e) === eo(t)
}
function no(e, t) {
  return F(t) ? t.findIndex((n) => to(n, e)) : B(t) && to(t, e) ? 0 : -1
}
const Rr = (e) => e[0] === '_' || e === '$stable',
  Os = (e) => (F(e) ? e.map(je) : [je(e)]),
  yl = (e, t, n) => {
    if (t._n) return t
    const s = tt((...o) => Os(t(...o)), n)

    return (s._c = !1), s
  },
  Cr = (e, t, n) => {
    const s = e._ctx
    for (const o in e) {
      if (Rr(o)) continue
      const r = e[o]
      if (B(r)) t[o] = yl(o, r, s)
      else if (r != null) {
        const i = Os(r)
        t[o] = () => i
      }
    }
  },
  Pr = (e, t) => {
    const n = Os(t)
    e.slots.default = () => n
  },
  wl = (e, t) => {
    const n = (e.slots = wr())
    if (e.vnode.shapeFlag & 32) {
      const s = t._
      s ? (le(n, t), ko(n, '_', s, !0)) : Cr(t, n)
    } else t && Pr(e, t)
  },
  El = (e, t, n) => {
    const { vnode: s, slots: o } = e
    let r = !0,
      i = Z
    if (s.shapeFlag & 32) {
      const c = t._
      c
        ? n && c === 1
          ? (r = !1)
          : (le(o, t), !n && c === 1 && delete o._)
        : ((r = !t.$stable), Cr(t, o)),
        (i = t)
    } else t && (Pr(e, t), (i = { default: 1 }))
    if (r) for (const c in o) !Rr(c) && i[c] == null && delete o[c]
  }
function is(e, t, n, s, o = !1) {
  if (F(e)) {
    e.forEach((p, b) => is(p, t && (F(t) ? t[b] : t), n, s, o))

    return
  }
  if (dn(s) && !o) return
  const r = s.shapeFlag & 4 ? $s(s.component) || s.component.proxy : s.el,
    i = o ? null : r,
    { i: c, r: l } = e,
    d = t && t.r,
    a = c.refs === Z ? (c.refs = {}) : c.refs,
    h = c.setupState
  if (
    (d != null &&
      d !== l &&
      (oe(d) ? ((a[d] = null), U(h, d) && (h[d] = null)) : be(d) && (d.value = null)),
      B(l))
  )
    st(l, c, 12, [i, a])
  else {
    const p = oe(l),
      b = be(l)
    if (p || b) {
      const A = () => {
        if (e.f) {
          const N = p ? (U(h, l) ? h[l] : a[l]) : l.value
          o
            ? F(N) && gs(N, r)
            : F(N)
              ? N.includes(r) || N.push(r)
              : p
                ? ((a[l] = [r]), U(h, l) && (h[l] = a[l]))
                : ((l.value = [r]), e.k && (a[e.k] = l.value))
        } else p ? ((a[l] = i), U(h, l) && (h[l] = i)) : b && ((l.value = i), e.k && (a[e.k] = i))
      }
      i ? ((A.id = -1), me(A, n)) : A()
    }
  }
}
const me = Gi
function xl(e) {
  return Sl(e)
}
function Sl(e, t) {
  const n = Ho()
  n.__VUE__ = !0
  const {
    insert: s,
    remove: o,
    patchProp: r,
    createElement: i,
    createText: c,
    createComment: l,
    setText: d,
    setElementText: a,
    parentNode: h,
    nextSibling: p,
    setScopeId: b = Se,
    insertStaticContent: A
  } = e,
    N = (u, f, m, v = null, g = null, E = null, R = void 0, w = null, x = !!f.dynamicChildren) => {
      if (u === f) return
      u && !Nt(u, f) && ((v = _(u)), pe(u, g, E, !0), (u = null)),
        f.patchFlag === -2 && ((x = !1), (f.dynamicChildren = null))
      const { type: y, ref: P, shapeFlag: L } = f
      switch (y) {
        case Mn:
          D(u, f, m, v)
          break
        case pt:
          T(u, f, m, v)
          break
        case pn:
          u == null && M(f, m, v, R)
          break
        case Fe:
          ct(u, f, m, v, g, E, R, w, x)
          break
        default:
          L & 1
            ? ne(u, f, m, v, g, E, R, w, x)
            : L & 6
              ? Te(u, f, m, v, g, E, R, w, x)
              : (L & 64 || L & 128) && y.process(u, f, m, v, g, E, R, w, x, $)
      }
      P != null && g && is(P, u && u.ref, E, f || u, !f)
    },
    D = (u, f, m, v) => {
      if (u == null) s((f.el = c(f.children)), m, v)
      else {
        const g = (f.el = u.el)
        f.children !== u.children && d(g, f.children)
      }
    },
    T = (u, f, m, v) => {
      u == null ? s((f.el = l(f.children || '')), m, v) : (f.el = u.el)
    },
    M = (u, f, m, v) => {
      ;[u.el, u.anchor] = A(u.children, f, m, v, u.el, u.anchor)
    },
    k = ({ el: u, anchor: f }, m, v) => {
      let g
      for (; u && u !== f;) (g = p(u)), s(u, m, v), (u = g)
      s(f, m, v)
    },
    W = ({ el: u, anchor: f }) => {
      let m
      for (; u && u !== f;) (m = p(u)), o(u), (u = m)
      o(f)
    },
    ne = (u, f, m, v, g, E, R, w, x) => {
      f.type === 'svg' ? (R = 'svg') : f.type === 'math' && (R = 'mathml'),
        u == null ? H(f, m, v, g, E, R, w, x) : lt(u, f, g, E, R, w, x)
    },
    H = (u, f, m, v, g, E, R, w) => {
      let x, y
      const { props: P, shapeFlag: L, transition: I, dirs: j } = u
      if (
        ((x = u.el = i(u.type, E, P && P.is, P)),
          L & 8 ? a(x, u.children) : L & 16 && xe(u.children, x, null, v, g, Kn(u, E), R, w),
          j && ut(u, null, v, 'created'),
          fe(x, u, u.scopeId, R, v),
          P)
      ) {
        for (const J in P) J !== 'value' && !kt(J) && r(x, J, null, P[J], E, u.children, v, g, ce)
        'value' in P && r(x, 'value', null, P.value, E), (y = P.onVnodeBeforeMount) && Ne(y, v, u)
      }
      j && ut(u, null, v, 'beforeMount')
      const V = Rl(g, I)
      V && I.beforeEnter(x),
        s(x, f, m),
        ((y = P && P.onVnodeMounted) || V || j) &&
        me(() => {
          y && Ne(y, v, u), V && I.enter(x), j && ut(u, null, v, 'mounted')
        }, g)
    },
    fe = (u, f, m, v, g) => {
      if ((m && b(u, m), v)) for (let E = 0; E < v.length; E++) b(u, v[E])
      if (g) {
        let E = g.subTree
        if (f === E) {
          const R = g.vnode
          fe(u, R, R.scopeId, R.slotScopeIds, g.parent)
        }
      }
    },
    xe = (u, f, m, v, g, E, R, w, x = 0) => {
      for (let y = x; y < u.length; y++) {
        const P = (u[y] = w ? Xe(u[y]) : je(u[y]))
        N(null, P, f, m, v, g, E, R, w)
      }
    },
    lt = (u, f, m, v, g, E, R) => {
      const w = (f.el = u.el)
      let { patchFlag: x, dynamicChildren: y, dirs: P } = f
      x |= u.patchFlag & 16
      const L = u.props || Z,
        I = f.props || Z
      let j
      if (
        (m && at(m, !1),
          (j = I.onVnodeBeforeUpdate) && Ne(j, m, f, u),
          P && ut(f, u, m, 'beforeUpdate'),
          m && at(m, !0),
          y
            ? Ie(u.dynamicChildren, y, w, m, v, Kn(f, g), E)
            : R || q(u, f, w, null, m, v, Kn(f, g), E, !1),
          x > 0)
      ) {
        if (x & 16) ze(w, f, L, I, m, v, g)
        else if (
          (x & 2 && L.class !== I.class && r(w, 'class', null, I.class, g),
            x & 4 && r(w, 'style', L.style, I.style, g),
            x & 8)
        ) {
          const V = f.dynamicProps
          for (let J = 0; J < V.length; J++) {
            const X = V[J],
              ie = L[X],
              Re = I[X]
              ; (Re !== ie || X === 'value') && r(w, X, ie, Re, g, u.children, m, v, ce)
          }
        }
        x & 1 && u.children !== f.children && a(w, f.children)
      } else !R && y == null && ze(w, f, L, I, m, v, g)
        ; ((j = I.onVnodeUpdated) || P) &&
          me(() => {
            j && Ne(j, m, f, u), P && ut(f, u, m, 'updated')
          }, v)
    },
    Ie = (u, f, m, v, g, E, R) => {
      for (let w = 0; w < f.length; w++) {
        const x = u[w],
          y = f[w],
          P = x.el && (x.type === Fe || !Nt(x, y) || x.shapeFlag & 70) ? h(x.el) : m
        N(x, y, P, null, v, g, E, R, !0)
      }
    },
    ze = (u, f, m, v, g, E, R) => {
      if (m !== v) {
        if (m !== Z)
          for (const w in m) !kt(w) && !(w in v) && r(u, w, m[w], null, R, f.children, g, E, ce)
        for (const w in v) {
          if (kt(w)) continue
          const x = v[w],
            y = m[w]
          x !== y && w !== 'value' && r(u, w, y, x, R, f.children, g, E, ce)
        }
        'value' in v && r(u, 'value', m.value, v.value, R)
      }
    },
    ct = (u, f, m, v, g, E, R, w, x) => {
      const y = (f.el = u ? u.el : c('')),
        P = (f.anchor = u ? u.anchor : c(''))
      let { patchFlag: L, dynamicChildren: I, slotScopeIds: j } = f
      j && (w = w ? w.concat(j) : j),
        u == null
          ? (s(y, m, v), s(P, m, v), xe(f.children || [], m, P, g, E, R, w, x))
          : L > 0 && L & 64 && I && u.dynamicChildren
            ? (Ie(u.dynamicChildren, I, m, g, E, R, w),
              (f.key != null || (g && f === g.subTree)) && Or(u, f, !0))
            : q(u, f, m, P, g, E, R, w, x)
    },
    Te = (u, f, m, v, g, E, R, w, x) => {
      ; (f.slotScopeIds = w),
        u == null
          ? f.shapeFlag & 512
            ? g.ctx.activate(f, m, v, R, x)
            : Mt(f, m, v, g, E, R, x)
          : gt(u, f, x)
    },
    Mt = (u, f, m, v, g, E, R) => {
      const w = (u.component = Nl(u, v, g))
      if ((gr(u) && (w.ctx.renderer = $), Fl(w), w.asyncDep)) {
        if ((g && g.registerDep(w, re), !u.el)) {
          const x = (w.subTree = K(pt))
          T(null, x, f, m)
        }
      } else re(w, u, f, m, g, E, R)
    },
    gt = (u, f, m) => {
      const v = (f.component = u.component)
      if (Vi(u, f, m))
        if (v.asyncDep && !v.asyncResolved) {
          Q(v, f, m)

          return
        } else (v.next = f), Fi(v.update), (v.effect.dirty = !0), v.update()
      else (f.el = u.el), (v.vnode = f)
    },
    re = (u, f, m, v, g, E, R) => {
      const w = () => {
        if (u.isMounted) {
          let { next: P, bu: L, u: I, parent: j, vnode: V } = u
          {
            const bt = Ar(u)
            if (bt) {
              P && ((P.el = V.el), Q(u, P, R)),
                bt.asyncDep.then(() => {
                  u.isUnmounted || w()
                })

              return
            }
          }
          let J = P,
            X
          at(u, !1),
            P ? ((P.el = V.el), Q(u, P, R)) : (P = V),
            L && Bn(L),
            (X = P.props && P.props.onVnodeBeforeUpdate) && Ne(X, j, P, V),
            at(u, !0)
          const ie = Vn(u),
            Re = u.subTree
            ; (u.subTree = ie),
              N(Re, ie, h(Re.el), _(Re), u, g, E),
              (P.el = ie.el),
              J === null && Ui(u, ie.el),
              I && me(I, g),
              (X = P.props && P.props.onVnodeUpdated) && me(() => Ne(X, j, P, V), g)
        } else {
          let P
          const { el: L, props: I } = f,
            { bm: j, m: V, parent: J } = u,
            X = dn(f)
          if (
            (at(u, !1),
              j && Bn(j),
              !X && (P = I && I.onVnodeBeforeMount) && Ne(P, J, f),
              at(u, !0),
              L && te)
          ) {
            const ie = () => {
              ; (u.subTree = Vn(u)), te(L, u.subTree, u, g, null)
            }
            X ? f.type.__asyncLoader().then(() => !u.isUnmounted && ie()) : ie()
          } else {
            const ie = (u.subTree = Vn(u))
            N(null, ie, m, v, u, g, E), (f.el = ie.el)
          }
          if ((V && me(V, g), !X && (P = I && I.onVnodeMounted))) {
            const ie = f
            me(() => Ne(P, J, ie), g)
          }
          ; (f.shapeFlag & 256 || (J && dn(J.vnode) && J.vnode.shapeFlag & 256)) &&
            u.a &&
            me(u.a, g),
            (u.isMounted = !0),
            (f = m = v = null)
        }
      },
        x = (u.effect = new vs(w, Se, () => Cs(y), u.scope)),
        y = (u.update = () => {
          x.dirty && x.run()
        })
        ; (y.id = u.uid), at(u, !0), y()
    },
    Q = (u, f, m) => {
      f.component = u
      const v = u.vnode.props
        ; (u.vnode = f), (u.next = null), bl(u, f.props, v, m), El(u, f.children, m), rt(), qs(u), it()
    },
    q = (u, f, m, v, g, E, R, w, x = !1) => {
      const y = u && u.children,
        P = u ? u.shapeFlag : 0,
        L = f.children,
        { patchFlag: I, shapeFlag: j } = f
      if (I > 0) {
        if (I & 128) {
          Ge(y, L, m, v, g, E, R, w, x)

          return
        } else if (I & 256) {
          Ue(y, L, m, v, g, E, R, w, x)

          return
        }
      }
      j & 8
        ? (P & 16 && ce(y, g, E), L !== y && a(m, L))
        : P & 16
          ? j & 16
            ? Ge(y, L, m, v, g, E, R, w, x)
            : ce(y, g, E, !0)
          : (P & 8 && a(m, ''), j & 16 && xe(L, m, v, g, E, R, w, x))
    },
    Ue = (u, f, m, v, g, E, R, w, x) => {
      ; (u = u || Et), (f = f || Et)
      const y = u.length,
        P = f.length,
        L = Math.min(y, P)
      let I
      for (I = 0; I < L; I++) {
        const j = (f[I] = x ? Xe(f[I]) : je(f[I]))
        N(u[I], j, m, null, g, E, R, w, x)
      }
      y > P ? ce(u, g, E, !0, !1, L) : xe(f, m, v, g, E, R, w, x, L)
    },
    Ge = (u, f, m, v, g, E, R, w, x) => {
      let y = 0
      const P = f.length
      let L = u.length - 1,
        I = P - 1
      for (; y <= L && y <= I;) {
        const j = u[y],
          V = (f[y] = x ? Xe(f[y]) : je(f[y]))
        if (Nt(j, V)) N(j, V, m, null, g, E, R, w, x)
        else break
        y++
      }
      for (; y <= L && y <= I;) {
        const j = u[L],
          V = (f[I] = x ? Xe(f[I]) : je(f[I]))
        if (Nt(j, V)) N(j, V, m, null, g, E, R, w, x)
        else break
        L--, I--
      }
      if (y > L) {
        if (y <= I) {
          const j = I + 1,
            V = j < P ? f[j].el : v
          for (; y <= I;) N(null, (f[y] = x ? Xe(f[y]) : je(f[y])), m, V, g, E, R, w, x), y++
        }
      } else if (y > I) for (; y <= L;) pe(u[y], g, E, !0), y++
      else {
        const j = y,
          V = y,
          J = new Map()
        for (y = V; y <= I; y++) {
          const ye = (f[y] = x ? Xe(f[y]) : je(f[y]))
          ye.key != null && J.set(ye.key, y)
        }
        let X,
          ie = 0
        const Re = I - V + 1
        let bt = !1,
          Ns = 0
        const Lt = new Array(Re)
        for (y = 0; y < Re; y++) Lt[y] = 0
        for (y = j; y <= L; y++) {
          const ye = u[y]
          if (ie >= Re) {
            pe(ye, g, E, !0)
            continue
          }
          let Le
          if (ye.key != null) Le = J.get(ye.key)
          else
            for (X = V; X <= I; X++)
              if (Lt[X - V] === 0 && Nt(ye, f[X])) {
                Le = X
                break
              }
          Le === void 0
            ? pe(ye, g, E, !0)
            : ((Lt[Le - V] = y + 1),
              Le >= Ns ? (Ns = Le) : (bt = !0),
              N(ye, f[Le], m, null, g, E, R, w, x),
              ie++)
        }
        const Fs = bt ? Cl(Lt) : Et
        for (X = Fs.length - 1, y = Re - 1; y >= 0; y--) {
          const ye = V + y,
            Le = f[ye],
            js = ye + 1 < P ? f[ye + 1].el : v
          Lt[y] === 0
            ? N(null, Le, m, js, g, E, R, w, x)
            : bt && (X < 0 || y !== Fs[X] ? Me(Le, m, js, 2) : X--)
        }
      }
    },
    Me = (u, f, m, v, g = null) => {
      const { el: E, type: R, transition: w, children: x, shapeFlag: y } = u
      if (y & 6) {
        Me(u.component.subTree, f, m, v)

        return
      }
      if (y & 128) {
        u.suspense.move(f, m, v)

        return
      }
      if (y & 64) {
        R.move(u, f, m, $)

        return
      }
      if (R === Fe) {
        s(E, f, m)
        for (let L = 0; L < x.length; L++) Me(x[L], f, m, v)
        s(u.anchor, f, m)

        return
      }
      if (R === pn) {
        k(u, f, m)

        return
      }
      if (v !== 2 && y & 1 && w)
        if (v === 0) w.beforeEnter(E), s(E, f, m), me(() => w.enter(E), g)
        else {
          const { leave: L, delayLeave: I, afterLeave: j } = w,
            V = () => s(E, f, m),
            J = () => {
              L(E, () => {
                V(), j && j()
              })
            }
          I ? I(E, V, J) : J()
        }
      else s(E, f, m)
    },
    pe = (u, f, m, v = !1, g = !1) => {
      const {
        type: E,
        props: R,
        ref: w,
        children: x,
        dynamicChildren: y,
        shapeFlag: P,
        patchFlag: L,
        dirs: I
      } = u
      if ((w != null && is(w, null, m, u, !0), P & 256)) {
        f.ctx.deactivate(u)

        return
      }
      const j = P & 1 && I,
        V = !dn(u)
      let J
      if ((V && (J = R && R.onVnodeBeforeUnmount) && Ne(J, f, u), P & 6)) tn(u.component, m, v)
      else {
        if (P & 128) {
          u.suspense.unmount(m, v)

          return
        }
        j && ut(u, null, f, 'beforeUnmount'),
          P & 64
            ? u.type.remove(u, f, m, g, $, v)
            : y && (E !== Fe || (L > 0 && L & 64))
              ? ce(y, f, m, !1, !0)
              : ((E === Fe && L & 384) || (!g && P & 16)) && ce(x, f, m),
          v && _t(u)
      }
      ; ((V && (J = R && R.onVnodeUnmounted)) || j) &&
        me(() => {
          J && Ne(J, f, u), j && ut(u, null, f, 'unmounted')
        }, m)
    },
    _t = (u) => {
      const { type: f, el: m, anchor: v, transition: g } = u
      if (f === Fe) {
        vt(m, v)

        return
      }
      if (f === pn) {
        W(u)

        return
      }
      const E = () => {
        o(m), g && !g.persisted && g.afterLeave && g.afterLeave()
      }
      if (u.shapeFlag & 1 && g && !g.persisted) {
        const { leave: R, delayLeave: w } = g,
          x = () => R(m, E)
        w ? w(u.el, E, x) : x()
      } else E()
    },
    vt = (u, f) => {
      let m
      for (; u !== f;) (m = p(u)), o(u), (u = m)
      o(f)
    },
    tn = (u, f, m) => {
      const { bum: v, scope: g, update: E, subTree: R, um: w } = u
      v && Bn(v),
        g.stop(),
        E && ((E.active = !1), pe(R, u, f, m)),
        w && me(w, f),
        me(() => {
          u.isUnmounted = !0
        }, f),
        f &&
        f.pendingBranch &&
        !f.isUnmounted &&
        u.asyncDep &&
        !u.asyncResolved &&
        u.suspenseId === f.pendingId &&
        (f.deps--, f.deps === 0 && f.resolve())
    },
    ce = (u, f, m, v = !1, g = !1, E = 0) => {
      for (let R = E; R < u.length; R++) pe(u[R], f, m, v, g)
    },
    _ = (u) =>
      u.shapeFlag & 6
        ? _(u.component.subTree)
        : u.shapeFlag & 128
          ? u.suspense.next()
          : p(u.anchor || u.el)
  let C = !1
  const S = (u, f, m) => {
    u == null
      ? f._vnode && pe(f._vnode, null, null, !0)
      : N(f._vnode || null, u, f, null, null, null, m),
      C || ((C = !0), qs(), fr(), (C = !1)),
      (f._vnode = u)
  },
    $ = { p: N, um: pe, m: Me, r: _t, mt: Mt, mc: xe, pc: q, pbc: Ie, n: _, o: e }
  let G, te

  return { render: S, hydrate: G, createApp: _l(S, G) }
}
function Kn({ type: e, props: t }, n) {
  return (n === 'svg' && e === 'foreignObject') ||
    (n === 'mathml' && e === 'annotation-xml' && t && t.encoding && t.encoding.includes('html'))
    ? void 0
    : n
}
function at({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n
}
function Rl(e, t) {
  return (!e || (e && !e.pendingBranch)) && t && !t.persisted
}
function Or(e, t, n = !1) {
  const s = e.children,
    o = t.children
  if (F(s) && F(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r]
      let c = o[r]
      c.shapeFlag & 1 &&
        !c.dynamicChildren &&
        ((c.patchFlag <= 0 || c.patchFlag === 32) && ((c = o[r] = Xe(o[r])), (c.el = i.el)),
          n || Or(i, c)),
        c.type === Mn && (c.el = i.el)
    }
}
function Cl(e) {
  const t = e.slice(),
    n = [0]
  let s, o, r, i, c
  const l = e.length
  for (s = 0; s < l; s++) {
    const d = e[s]
    if (d !== 0) {
      if (((o = n[n.length - 1]), e[o] < d)) {
        ; (t[s] = o), n.push(s)
        continue
      }
      for (r = 0, i = n.length - 1; r < i;) (c = (r + i) >> 1), e[n[c]] < d ? (r = c + 1) : (i = c)
      d < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), (n[r] = s))
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0;) (n[r] = i), (i = t[i])

  return n
}
function Ar(e) {
  const t = e.subTree.component
  if (t) return t.asyncDep && !t.asyncResolved ? t : Ar(t)
}
const Pl = (e) => e.__isTeleport,
  Fe = Symbol.for('v-fgt'),
  Mn = Symbol.for('v-txt'),
  pt = Symbol.for('v-cmt'),
  pn = Symbol.for('v-stc'),
  Vt = []
let Oe = null
function se(e = !1) {
  Vt.push((Oe = e ? null : []))
}
function Ol() {
  Vt.pop(), (Oe = Vt[Vt.length - 1] || null)
}
let Yt = 1
function so(e) {
  Yt += e
}
function $r(e) {
  return (e.dynamicChildren = Yt > 0 ? Oe || Et : null), Ol(), Yt > 0 && Oe && Oe.push(e), e
}
function _e(e, t, n, s, o, r) {
  return $r(O(e, t, n, s, o, r, !0))
}
function Rt(e, t, n, s, o) {
  return $r(K(e, t, n, s, o, !0))
}
function ls(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function Nt(e, t) {
  return e.type === t.type && e.key === t.key
}
const Ir = ({ key: e }) => e ?? null,
  mn = ({ ref: e, ref_key: t, ref_for: n }) => (
    typeof e == 'number' && (e = '' + e),
    e != null ? (oe(e) || be(e) || B(e) ? { i: Pe, r: e, k: t, f: !!n } : e) : null
  )
function O(e, t = null, n = null, s = 0, o = null, r = e === Fe ? 0 : 1, i = !1, c = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ir(t),
    ref: t && mn(t),
    scopeId: An,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Pe
  }

  return (
    c ? (As(l, n), r & 128 && e.normalize(l)) : n && (l.shapeFlag |= oe(n) ? 8 : 16),
    Yt > 0 && !i && Oe && (l.patchFlag > 0 || r & 6) && l.patchFlag !== 32 && Oe.push(l),
    l
  )
}
const K = Al
function Al(e, t = null, n = null, s = 0, o = null, r = !1) {
  if (((!e || e === Wi) && (e = pt), ls(e))) {
    const c = Ct(e, t, !0)

    return (
      n && As(c, n),
      Yt > 0 && !r && Oe && (c.shapeFlag & 6 ? (Oe[Oe.indexOf(e)] = c) : Oe.push(c)),
      (c.patchFlag |= -2),
      c
    )
  }
  if ((Dl(e) && (e = e.__vccOpts), t)) {
    t = $l(t)
    let { class: c, style: l } = t
    c && !oe(c) && (t.class = $t(c)),
      ee(l) && (nr(l) && !F(l) && (l = le({}, l)), (t.style = He(l)))
  }
  const i = oe(e) ? 1 : zi(e) ? 128 : Pl(e) ? 64 : ee(e) ? 4 : B(e) ? 2 : 0

  return O(e, t, n, s, o, i, r, !0)
}
function $l(e) {
  return e ? (nr(e) || Er(e) ? le({}, e) : e) : null
}
function Ct(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: c, transition: l } = e,
    d = t ? Tl(o || {}, t) : o,
    a = {
      __v_isVNode: !0,
      __v_skip: !0,
      type: e.type,
      props: d,
      key: d && Ir(d),
      ref: t && t.ref ? (n && r ? (F(r) ? r.concat(mn(t)) : [r, mn(t)]) : mn(t)) : r,
      scopeId: e.scopeId,
      slotScopeIds: e.slotScopeIds,
      children: c,
      target: e.target,
      targetAnchor: e.targetAnchor,
      staticCount: e.staticCount,
      shapeFlag: e.shapeFlag,
      patchFlag: t && e.type !== Fe ? (i === -1 ? 16 : i | 16) : i,
      dynamicProps: e.dynamicProps,
      dynamicChildren: e.dynamicChildren,
      appContext: e.appContext,
      dirs: e.dirs,
      transition: l,
      component: e.component,
      suspense: e.suspense,
      ssContent: e.ssContent && Ct(e.ssContent),
      ssFallback: e.ssFallback && Ct(e.ssFallback),
      el: e.el,
      anchor: e.anchor,
      ctx: e.ctx,
      ce: e.ce
    }

  return l && s && (a.transition = l.clone(a)), a
}
function cs(e = ' ', t = 0) {
  return K(Mn, null, e, t)
}
function Il(e, t) {
  const n = K(pn, null, e)

  return (n.staticCount = t), n
}
function us(e = '', t = !1) {
  return t ? (se(), Rt(pt, null, e)) : K(pt, null, e)
}
function je(e) {
  return e == null || typeof e == 'boolean'
    ? K(pt)
    : F(e)
      ? K(Fe, null, e.slice())
      : typeof e == 'object'
        ? Xe(e)
        : K(Mn, null, String(e))
}
function Xe(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : Ct(e)
}
function As(e, t) {
  let n = 0
  const { shapeFlag: s } = e
  if (t == null) t = null
  else if (F(t)) n = 16
  else if (typeof t == 'object')
    if (s & 65) {
      const o = t.default
      o && (o._c && (o._d = !1), As(e, o()), o._c && (o._d = !0))

      return
    } else {
      n = 32
      const o = t._
      !o && !Er(t)
        ? (t._ctx = Pe)
        : o === 3 && Pe && (Pe.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    B(t)
      ? ((t = { default: t, _ctx: Pe }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [cs(t)])) : (n = 8))
      ; (e.children = t), (e.shapeFlag |= n)
}
function Tl(...e) {
  const t = {}
  for (let n = 0; n < e.length; n++) {
    const s = e[n]
    for (const o in s)
      if (o === 'class') t.class !== s.class && (t.class = $t([t.class, s.class]))
      else if (o === 'style') t.style = He([t.style, s.style])
      else if (wn(o)) {
        const r = t[o],
          i = s[o]
        i && r !== i && !(F(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i)
      } else o !== '' && (t[o] = s[o])
  }

  return t
}
function Ne(e, t, n, s = null) {
  Ae(e, t, 7, [n, s])
}
const Ml = br()
let Ll = 0
function Nl(e, t, n) {
  const s = e.type,
    o = (t ? t.appContext : e.appContext) || Ml,
    r = {
      uid: Ll++,
      vnode: e,
      type: s,
      parent: t,
      appContext: o,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Vo(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(o.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Sr(s, o),
      emitsOptions: hr(s, o),
      emit: null,
      emitted: null,
      propsDefaults: Z,
      inheritAttrs: s.inheritAttrs,
      ctx: Z,
      data: Z,
      props: Z,
      attrs: Z,
      slots: Z,
      refs: Z,
      setupState: Z,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    }

  return (
    (r.ctx = { _: r }), (r.root = t ? t.root : r), (r.emit = Hi.bind(null, r)), e.ce && e.ce(r), r
  )
}
let ae = null,
  yn,
  as
{
  const e = Ho(),
    t = (n, s) => {
      let o

      return (
        (o = e[n]) || (o = e[n] = []),
        o.push(s),
        (r) => {
          o.length > 1 ? o.forEach((i) => i(r)) : o[0](r)
        }
      )
    }
    ; (yn = t('__VUE_INSTANCE_SETTERS__', (n) => (ae = n))),
      (as = t('__VUE_SSR_SETTERS__', (n) => (Ln = n)))
}
const en = (e) => {
  const t = ae

  return (
    yn(e),
    e.scope.on(),
    () => {
      e.scope.off(), yn(t)
    }
  )
},
  oo = () => {
    ae && ae.scope.off(), yn(null)
  }
function Tr(e) {
  return e.vnode.shapeFlag & 4
}
let Ln = !1
function Fl(e, t = !1) {
  t && as(t)
  const { props: n, children: s } = e.vnode,
    o = Tr(e)
  vl(e, n, o, t), wl(e, s)
  const r = o ? jl(e, t) : void 0

  return t && as(!1), r
}
function jl(e, t) {
  const n = e.type
    ; (e.accessCache = Object.create(null)), (e.proxy = new Proxy(e.ctx, al))
  const { setup: s } = n
  if (s) {
    const o = (e.setupContext = s.length > 1 ? Hl(e) : null),
      r = en(e)
    rt()
    const i = st(s, e, 0, [e.props, o])
    if ((it(), r(), No(i))) {
      if ((i.then(oo, oo), t))
        return i
          .then((c) => {
            ro(e, c, t)
          })
          .catch((c) => {
            Pn(c, e, 0)
          })
      e.asyncDep = i
    } else ro(e, i, t)
  } else Mr(e, t)
}
function ro(e, t, n) {
  B(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : ee(t) && (e.setupState = lr(t)),
    Mr(e, n)
}
let io
function Mr(e, t, n) {
  const s = e.type
  if (!e.render) {
    if (!t && io && !s.render) {
      const o = s.template || Ps(e).template
      if (o) {
        const { isCustomElement: r, compilerOptions: i } = e.appContext.config,
          { delimiters: c, compilerOptions: l } = s,
          d = le(le({ isCustomElement: r, delimiters: c }, i), l)
        s.render = io(o, d)
      }
    }
    e.render = s.render || Se
  }
  {
    const o = en(e)
    rt()
    try {
      fl(e)
    } finally {
      it(), o()
    }
  }
}
const kl = {
  get(e, t) {
    return ve(e, 'get', ''), e[t]
  }
}
function Hl(e) {
  const t = (n) => {
    e.exposed = n || {}
  }

  return { attrs: new Proxy(e.attrs, kl), slots: e.slots, emit: e.emit, expose: t }
}
function $s(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(lr(sr(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n]
          if (n in Bt) return Bt[n](e)
        },
        has(t, n) {
          return n in t || n in Bt
        }
      }))
    )
}
function Bl(e, t = !0) {
  return B(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function Dl(e) {
  return B(e) && '__vccOpts' in e
}
const ge = (e, t) => $i(e, t, Ln)
function Lr(e, t, n) {
  const s = arguments.length

  return s === 2
    ? ee(t) && !F(t)
      ? ls(t)
        ? K(e, null, [t])
        : K(e, t)
      : K(e, null, t)
    : (s > 3 ? (n = Array.prototype.slice.call(arguments, 2)) : s === 3 && ls(n) && (n = [n]),
      K(e, t, n))
}
const Vl = '3.4.27'
/**
 * @vue/runtime-dom v3.4.27
 * (c) 2018-present Yuxi (Evan) You and Vue contributors
 * @license MIT
 **/ const Ul = 'http://www.w3.org/2000/svg',
  Kl = 'http://www.w3.org/1998/Math/MathML',
  Ze = typeof document < 'u' ? document : null,
  lo = Ze && Ze.createElement('template'),
  Wl = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, n, s) => {
      const o =
        t === 'svg'
          ? Ze.createElementNS(Ul, e)
          : t === 'mathml'
            ? Ze.createElementNS(Kl, e)
            : Ze.createElement(e, n ? { is: n } : void 0)

      return e === 'select' && s && s.multiple != null && o.setAttribute('multiple', s.multiple), o
    },
    createText: (e) => Ze.createTextNode(e),
    createComment: (e) => Ze.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => Ze.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, n, s, o, r) {
      const i = n ? n.previousSibling : t.lastChild
      if (o && (o === r || o.nextSibling))
        for (; t.insertBefore(o.cloneNode(!0), n), !(o === r || !(o = o.nextSibling)););
      else {
        lo.innerHTML = s === 'svg' ? `<svg>${e}</svg>` : s === 'mathml' ? `<math>${e}</math>` : e
        const c = lo.content
        if (s === 'svg' || s === 'mathml') {
          const l = c.firstChild
          for (; l.firstChild;) c.appendChild(l.firstChild)
          c.removeChild(l)
        }
        t.insertBefore(c, n)
      }

      return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
    }
  },
  ql = Symbol('_vtc')
function zl(e, t, n) {
  const s = e[ql]
  s && (t = (t ? [t, ...s] : [...s]).join(' ')),
    t == null ? e.removeAttribute('class') : n ? e.setAttribute('class', t) : (e.className = t)
}
const co = Symbol('_vod'),
  Gl = Symbol('_vsh'),
  Yl = Symbol(''),
  Ql = /(^|;)\s*display\s*:/
function Jl(e, t, n) {
  const s = e.style,
    o = oe(n)
  let r = !1
  if (n && !o) {
    if (t)
      if (oe(t))
        for (const i of t.split(';')) {
          const c = i.slice(0, i.indexOf(':')).trim()
          n[c] == null && gn(s, c, '')
        }
      else for (const i in t) n[i] == null && gn(s, i, '')
    for (const i in n) i === 'display' && (r = !0), gn(s, i, n[i])
  } else if (o) {
    if (t !== n) {
      const i = s[Yl]
      i && (n += ';' + i), (s.cssText = n), (r = Ql.test(n))
    }
  } else t && e.removeAttribute('style')
  co in e && ((e[co] = r ? s.display : ''), e[Gl] && (s.display = 'none'))
}
const uo = /\s*!important$/
function gn(e, t, n) {
  if (F(n)) n.forEach((s) => gn(e, t, s))
  else if ((n == null && (n = ''), t.startsWith('--'))) e.setProperty(t, n)
  else {
    const s = Xl(e, t)
    uo.test(n) ? e.setProperty(At(s), n.replace(uo, ''), 'important') : (e[s] = n)
  }
}
const ao = ['Webkit', 'Moz', 'ms'],
  Wn = {}
function Xl(e, t) {
  const n = Wn[t]
  if (n) return n
  let s = De(t)
  if (s !== 'filter' && s in e) return (Wn[t] = s)
  s = Sn(s)
  for (let o = 0; o < ao.length; o++) {
    const r = ao[o] + s
    if (r in e) return (Wn[t] = r)
  }

  return t
}
const fo = 'http://www.w3.org/1999/xlink'
function Zl(e, t, n, s, o) {
  if (s && t.startsWith('xlink:'))
    n == null ? e.removeAttributeNS(fo, t.slice(6, t.length)) : e.setAttributeNS(fo, t, n)
  else {
    const r = li(t)
    n == null || (r && !Bo(n)) ? e.removeAttribute(t) : e.setAttribute(t, r ? '' : n)
  }
}
function ec(e, t, n, s, o, r, i) {
  if (t === 'innerHTML' || t === 'textContent') {
    s && i(s, o, r), (e[t] = n ?? '')

    return
  }
  const c = e.tagName
  if (t === 'value' && c !== 'PROGRESS' && !c.includes('-')) {
    const d = c === 'OPTION' ? e.getAttribute('value') || '' : e.value,
      a = n ?? ''
      ; (d !== a || !('_value' in e)) && (e.value = a),
        n == null && e.removeAttribute(t),
        (e._value = n)

    return
  }
  let l = !1
  if (n === '' || n == null) {
    const d = typeof e[t]
    d === 'boolean'
      ? (n = Bo(n))
      : n == null && d === 'string'
        ? ((n = ''), (l = !0))
        : d === 'number' && ((n = 0), (l = !0))
  }
  try {
    e[t] = n
  } catch { }
  l && e.removeAttribute(t)
}
function tc(e, t, n, s) {
  e.addEventListener(t, n, s)
}
function nc(e, t, n, s) {
  e.removeEventListener(t, n, s)
}
const ho = Symbol('_vei')
function sc(e, t, n, s, o = null) {
  const r = e[ho] || (e[ho] = {}),
    i = r[t]
  if (s && i) i.value = s
  else {
    const [c, l] = oc(t)
    if (s) {
      const d = (r[t] = lc(s, o))
      tc(e, c, d, l)
    } else i && (nc(e, c, i, l), (r[t] = void 0))
  }
}
const po = /(?:Once|Passive|Capture)$/
function oc(e) {
  let t
  if (po.test(e)) {
    t = {}
    let s
    for (; (s = e.match(po));)
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0)
  }

  return [e[2] === ':' ? e.slice(3) : At(e.slice(2)), t]
}
let qn = 0
const rc = Promise.resolve(),
  ic = () => qn || (rc.then(() => (qn = 0)), (qn = Date.now()))
function lc(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now()
    else if (s._vts <= n.attached) return
    Ae(cc(s, n.value), t, 5, [s])
  }

  return (n.value = e), (n.attached = ic()), n
}
function cc(e, t) {
  if (F(t)) {
    const n = e.stopImmediatePropagation

    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0)
      }),
      t.map((s) => (o) => !o._stopped && s && s(o))
    )
  } else return t
}
const mo = (e) =>
  e.charCodeAt(0) === 111 &&
  e.charCodeAt(1) === 110 &&
  e.charCodeAt(2) > 96 &&
  e.charCodeAt(2) < 123,
  uc = (e, t, n, s, o, r, i, c, l) => {
    const d = o === 'svg'
    t === 'class'
      ? zl(e, s, d)
      : t === 'style'
        ? Jl(e, n, s)
        : wn(t)
          ? ms(t) || sc(e, t, n, s, i)
          : (
            t[0] === '.'
              ? ((t = t.slice(1)), !0)
              : t[0] === '^'
                ? ((t = t.slice(1)), !1)
                : ac(e, t, s, d)
          )
            ? ec(e, t, s, r, i, c, l)
            : (t === 'true-value' ? (e._trueValue = s) : t === 'false-value' && (e._falseValue = s),
              Zl(e, t, s, d))
  }
function ac(e, t, n, s) {
  if (s) return !!(t === 'innerHTML' || t === 'textContent' || (t in e && mo(t) && B(n)))
  if (
    t === 'spellcheck' ||
    t === 'draggable' ||
    t === 'translate' ||
    t === 'form' ||
    (t === 'list' && e.tagName === 'INPUT') ||
    (t === 'type' && e.tagName === 'TEXTAREA')
  )
    return !1
  if (t === 'width' || t === 'height') {
    const o = e.tagName
    if (o === 'IMG' || o === 'VIDEO' || o === 'CANVAS' || o === 'SOURCE') return !1
  }

  return mo(t) && oe(n) ? !1 : t in e
}
const fc = le({ patchProp: uc }, Wl)
let go
function dc() {
  return go || (go = xl(fc))
}
const hc = (...e) => {
  const t = dc().createApp(...e),
    { mount: n } = t

  return (
    (t.mount = (s) => {
      const o = mc(s)
      if (!o) return
      const r = t._component
      !B(r) && !r.render && !r.template && (r.template = o.innerHTML), (o.innerHTML = '')
      const i = n(o, !1, pc(o))

      return (
        o instanceof Element && (o.removeAttribute('v-cloak'), o.setAttribute('data-v-app', '')), i
      )
    }),
    t
  )
}
function pc(e) {
  if (e instanceof SVGElement) return 'svg'
  if (typeof MathMLElement == 'function' && e instanceof MathMLElement) return 'mathml'
}
function mc(e) {
  return oe(e) ? document.querySelector(e) : e
}
var gc = !1
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const _c = Symbol()
var _o
  ; (function (e) {
    ; (e.direct = 'direct'), (e.patchObject = 'patch object'), (e.patchFunction = 'patch function')
  })(_o || (_o = {}))
function vc() {
  const e = ci(!0),
    t = e.run(() => we({}))
  let n = [],
    s = []
  const o = sr({
    install(r) {
      ; (o._a = r),
        r.provide(_c, o),
        (r.config.globalProperties.$pinia = o),
        s.forEach((i) => n.push(i)),
        (s = [])
    },
    use(r) {
      return !this._a && !gc ? s.push(r) : n.push(r), this
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t
  })

  return o
}
const Ve = (e, t) => {
  const n = e.__vccOpts || e
  for (const [s, o] of t) n[s] = o

  return n
},
  bc = {}
function yc(e, t) {
  const n = $n('RouterView')

  return se(), Rt(n, { id: 'router' })
}
const wc = Ve(bc, [
  ['render', yc],
  ['__scopeId', 'data-v-f585a491']
])
/*!
 * vue-router v4.3.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */ const yt = typeof document < 'u'
function Ec(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module'
}
const Y = Object.assign
function zn(e, t) {
  const n = {}
  for (const s in t) {
    const o = t[s]
    n[s] = $e(o) ? o.map(e) : e(o)
  }

  return n
}
const Ut = () => { },
  $e = Array.isArray,
  Nr = /#/g,
  xc = /&/g,
  Sc = /\//g,
  Rc = /=/g,
  Cc = /\?/g,
  Fr = /\+/g,
  Pc = /%5B/g,
  Oc = /%5D/g,
  jr = /%5E/g,
  Ac = /%60/g,
  kr = /%7B/g,
  $c = /%7C/g,
  Hr = /%7D/g,
  Ic = /%20/g
function Is(e) {
  return encodeURI('' + e)
    .replace($c, '|')
    .replace(Pc, '[')
    .replace(Oc, ']')
}
function Tc(e) {
  return Is(e).replace(kr, '{').replace(Hr, '}').replace(jr, '^')
}
function fs(e) {
  return Is(e)
    .replace(Fr, '%2B')
    .replace(Ic, '+')
    .replace(Nr, '%23')
    .replace(xc, '%26')
    .replace(Ac, '`')
    .replace(kr, '{')
    .replace(Hr, '}')
    .replace(jr, '^')
}
function Mc(e) {
  return fs(e).replace(Rc, '%3D')
}
function Lc(e) {
  return Is(e).replace(Nr, '%23').replace(Cc, '%3F')
}
function Nc(e) {
  return e == null ? '' : Lc(e).replace(Sc, '%2F')
}
function Qt(e) {
  try {
    return decodeURIComponent('' + e)
  } catch { }

  return '' + e
}
const Fc = /\/$/,
  jc = (e) => e.replace(Fc, '')
function Gn(e, t, n = '/') {
  let s,
    o = {},
    r = '',
    i = ''
  const c = t.indexOf('#')
  let l = t.indexOf('?')

  return (
    c < l && c >= 0 && (l = -1),
    l > -1 && ((s = t.slice(0, l)), (r = t.slice(l + 1, c > -1 ? c : t.length)), (o = e(r))),
    c > -1 && ((s = s || t.slice(0, c)), (i = t.slice(c, t.length))),
    (s = Dc(s ?? t, n)),
    { fullPath: s + (r && '?') + r + i, path: s, query: o, hash: Qt(i) }
  )
}
function kc(e, t) {
  const n = t.query ? e(t.query) : ''

  return t.path + (n && '?') + n + (t.hash || '')
}
function vo(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || '/'
}
function Hc(e, t, n) {
  const s = t.matched.length - 1,
    o = n.matched.length - 1

  return (
    s > -1 &&
    s === o &&
    Pt(t.matched[s], n.matched[o]) &&
    Br(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  )
}
function Pt(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function Br(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const n in e) if (!Bc(e[n], t[n])) return !1

  return !0
}
function Bc(e, t) {
  return $e(e) ? bo(e, t) : $e(t) ? bo(t, e) : e === t
}
function bo(e, t) {
  return $e(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t
}
function Dc(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const n = t.split('/'),
    s = e.split('/'),
    o = s[s.length - 1]
    ; (o === '..' || o === '.') && s.push('')
  let r = n.length - 1,
    i,
    c
  for (i = 0; i < s.length; i++)
    if (((c = s[i]), c !== '.'))
      if (c === '..') r > 1 && r--
      else break

  return n.slice(0, r).join('/') + '/' + s.slice(i).join('/')
}
var Jt
  ; (function (e) {
    ; (e.pop = 'pop'), (e.push = 'push')
  })(Jt || (Jt = {}))
var Kt
  ; (function (e) {
    ; (e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
  })(Kt || (Kt = {}))
function Vc(e) {
  if (!e)
    if (yt) {
      const t = document.querySelector('base')
        ; (e = (t && t.getAttribute('href')) || '/'), (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'

  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), jc(e)
}
const Uc = /^[^#]+#/
function Kc(e, t) {
  return e.replace(Uc, '#') + t
}
function Wc(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect()

  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0)
  }
}
const Nn = () => ({ left: window.scrollX, top: window.scrollY })
function qc(e) {
  let t
  if ('el' in e) {
    const n = e.el,
      s = typeof n == 'string' && n.startsWith('#'),
      o =
        typeof n == 'string'
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n
    if (!o) return
    t = Wc(o, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
      t.left != null ? t.left : window.scrollX,
      t.top != null ? t.top : window.scrollY
    )
}
function yo(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const ds = new Map()
function zc(e, t) {
  ds.set(e, t)
}
function Gc(e) {
  const t = ds.get(e)

  return ds.delete(e), t
}
let Yc = () => location.protocol + '//' + location.host
function Dr(e, t) {
  const { pathname: n, search: s, hash: o } = t,
    r = e.indexOf('#')
  if (r > -1) {
    let c = o.includes(e.slice(r)) ? e.slice(r).length : 1,
      l = o.slice(c)

    return l[0] !== '/' && (l = '/' + l), vo(l, '')
  }

  return vo(n, e) + s + o
}
function Qc(e, t, n, s) {
  let o = [],
    r = [],
    i = null
  const c = ({ state: p }) => {
    const b = Dr(e, location),
      A = n.value,
      N = t.value
    let D = 0
    if (p) {
      if (((n.value = b), (t.value = p), i && i === A)) {
        i = null

        return
      }
      D = N ? p.position - N.position : 0
    } else s(b)
    o.forEach((T) => {
      T(n.value, A, {
        delta: D,
        type: Jt.pop,
        direction: D ? (D > 0 ? Kt.forward : Kt.back) : Kt.unknown
      })
    })
  }
  function l() {
    i = n.value
  }
  function d(p) {
    o.push(p)
    const b = () => {
      const A = o.indexOf(p)
      A > -1 && o.splice(A, 1)
    }

    return r.push(b), b
  }
  function a() {
    const { history: p } = window
    p.state && p.replaceState(Y({}, p.state, { scroll: Nn() }), '')
  }
  function h() {
    for (const p of r) p()
      ; (r = []),
        window.removeEventListener('popstate', c),
        window.removeEventListener('beforeunload', a)
  }

  return (
    window.addEventListener('popstate', c),
    window.addEventListener('beforeunload', a, { passive: !0 }),
    { pauseListeners: l, listen: d, destroy: h }
  )
}
function wo(e, t, n, s = !1, o = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: o ? Nn() : null
  }
}
function Jc(e) {
  const { history: t, location: n } = window,
    s = { value: Dr(e, n) },
    o = { value: t.state }
  o.value ||
    r(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
      },
      !0
    )
  function r(l, d, a) {
    const h = e.indexOf('#'),
      p = h > -1 ? (n.host && document.querySelector('base') ? e : e.slice(h)) + l : Yc() + e + l
    try {
      t[a ? 'replaceState' : 'pushState'](d, '', p), (o.value = d)
    } catch (b) {
      console.error(b), n[a ? 'replace' : 'assign'](p)
    }
  }
  function i(l, d) {
    const a = Y({}, t.state, wo(o.value.back, l, o.value.forward, !0), d, {
      position: o.value.position
    })
    r(l, a, !0), (s.value = l)
  }
  function c(l, d) {
    const a = Y({}, o.value, t.state, { forward: l, scroll: Nn() })
    r(a.current, a, !0)
    const h = Y({}, wo(s.value, l, null), { position: a.position + 1 }, d)
    r(l, h, !1), (s.value = l)
  }

  return { location: s, state: o, push: c, replace: i }
}
function Xc(e) {
  e = Vc(e)
  const t = Jc(e),
    n = Qc(e, t.state, t.location, t.replace)
  function s(r, i = !0) {
    i || n.pauseListeners(), history.go(r)
  }
  const o = Y({ location: '', base: e, go: s, createHref: Kc.bind(null, e) }, t, n)

  return (
    Object.defineProperty(o, 'location', { enumerable: !0, get: () => t.location.value }),
    Object.defineProperty(o, 'state', { enumerable: !0, get: () => t.state.value }),
    o
  )
}
function Zc(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function Vr(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const Qe = {
  path: '/',
  name: void 0,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: void 0
},
  Ur = Symbol('')
var Eo
  ; (function (e) {
    ; (e[(e.aborted = 4)] = 'aborted'),
      (e[(e.cancelled = 8)] = 'cancelled'),
      (e[(e.duplicated = 16)] = 'duplicated')
  })(Eo || (Eo = {}))
function Ot(e, t) {
  return Y(new Error(), { type: e, [Ur]: !0 }, t)
}
function Ke(e, t) {
  return e instanceof Error && Ur in e && (t == null || !!(e.type & t))
}
const xo = '[^/]+?',
  eu = { sensitive: !1, strict: !1, start: !0, end: !0 },
  tu = /[.+*?^${}()[\]/\\]/g
function nu(e, t) {
  const n = Y({}, eu, t),
    s = []
  let o = n.start ? '^' : ''
  const r = []
  for (const d of e) {
    const a = d.length ? [] : [90]
    n.strict && !d.length && (o += '/')
    for (let h = 0; h < d.length; h++) {
      const p = d[h]
      let b = 40 + (n.sensitive ? 0.25 : 0)
      if (p.type === 0) h || (o += '/'), (o += p.value.replace(tu, '\\$&')), (b += 40)
      else if (p.type === 1) {
        const { value: A, repeatable: N, optional: D, regexp: T } = p
        r.push({ name: A, repeatable: N, optional: D })
        const M = T || xo
        if (M !== xo) {
          b += 10
          try {
            new RegExp(`(${M})`)
          } catch (W) {
            throw new Error(`Invalid custom RegExp for param "${A}" (${M}): ` + W.message)
          }
        }
        let k = N ? `((?:${M})(?:/(?:${M}))*)` : `(${M})`
        h || (k = D && d.length < 2 ? `(?:/${k})` : '/' + k),
          D && (k += '?'),
          (o += k),
          (b += 20),
          D && (b += -8),
          N && (b += -20),
          M === '.*' && (b += -50)
      }
      a.push(b)
    }
    s.push(a)
  }
  if (n.strict && n.end) {
    const d = s.length - 1
    s[d][s[d].length - 1] += 0.7000000000000001
  }
  n.strict || (o += '/?'), n.end ? (o += '$') : n.strict && (o += '(?:/|$)')
  const i = new RegExp(o, n.sensitive ? '' : 'i')
  function c(d) {
    const a = d.match(i),
      h = {}
    if (!a) return null
    for (let p = 1; p < a.length; p++) {
      const b = a[p] || '',
        A = r[p - 1]
      h[A.name] = b && A.repeatable ? b.split('/') : b
    }

    return h
  }
  function l(d) {
    let a = '',
      h = !1
    for (const p of e) {
      ; (!h || !a.endsWith('/')) && (a += '/'), (h = !1)
      for (const b of p)
        if (b.type === 0) a += b.value
        else if (b.type === 1) {
          const { value: A, repeatable: N, optional: D } = b,
            T = A in d ? d[A] : ''
          if ($e(T) && !N)
            throw new Error(
              `Provided param "${A}" is an array but it is not repeatable (* or + modifiers)`
            )
          const M = $e(T) ? T.join('/') : T
          if (!M)
            if (D) p.length < 2 && (a.endsWith('/') ? (a = a.slice(0, -1)) : (h = !0))
            else throw new Error(`Missing required param "${A}"`)
          a += M
        }
    }

    return a || '/'
  }

  return { re: i, score: s, keys: r, parse: c, stringify: l }
}
function su(e, t) {
  let n = 0
  for (; n < e.length && n < t.length;) {
    const s = t[n] - e[n]
    if (s) return s
    n++
  }

  return e.length < t.length
    ? e.length === 1 && e[0] === 80
      ? -1
      : 1
    : e.length > t.length
      ? t.length === 1 && t[0] === 80
        ? 1
        : -1
      : 0
}
function ou(e, t) {
  let n = 0
  const s = e.score,
    o = t.score
  for (; n < s.length && n < o.length;) {
    const r = su(s[n], o[n])
    if (r) return r
    n++
  }
  if (Math.abs(o.length - s.length) === 1) {
    if (So(s)) return 1
    if (So(o)) return -1
  }

  return o.length - s.length
}
function So(e) {
  const t = e[e.length - 1]

  return e.length > 0 && t[t.length - 1] < 0
}
const ru = { type: 0, value: '' },
  iu = /[a-zA-Z0-9_]/
function lu(e) {
  if (!e) return [[]]
  if (e === '/') return [[ru]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(b) {
    throw new Error(`ERR (${n})/"${d}": ${b}`)
  }
  let n = 0,
    s = n
  const o = []
  let r
  function i() {
    r && o.push(r), (r = [])
  }
  let c = 0,
    l,
    d = '',
    a = ''
  function h() {
    d &&
      (n === 0
        ? r.push({ type: 0, value: d })
        : n === 1 || n === 2 || n === 3
          ? (r.length > 1 &&
            (l === '*' || l === '+') &&
            t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),
            r.push({
              type: 1,
              value: d,
              regexp: a,
              repeatable: l === '*' || l === '+',
              optional: l === '*' || l === '?'
            }))
          : t('Invalid state to consume buffer'),
        (d = ''))
  }
  function p() {
    d += l
  }
  for (; c < e.length;) {
    if (((l = e[c++]), l === '\\' && n !== 2)) {
      ; (s = n), (n = 4)
      continue
    }
    switch (n) {
      case 0:
        l === '/' ? (d && h(), i()) : l === ':' ? (h(), (n = 1)) : p()
        break
      case 4:
        p(), (n = s)
        break
      case 1:
        l === '('
          ? (n = 2)
          : iu.test(l)
            ? p()
            : (h(), (n = 0), l !== '*' && l !== '?' && l !== '+' && c--)
        break
      case 2:
        l === ')' ? (a[a.length - 1] == '\\' ? (a = a.slice(0, -1) + l) : (n = 3)) : (a += l)
        break
      case 3:
        h(), (n = 0), l !== '*' && l !== '?' && l !== '+' && c--, (a = '')
        break
      default:
        t('Unknown state')
        break
    }
  }

  return n === 2 && t(`Unfinished custom RegExp for param "${d}"`), h(), i(), o
}
function cu(e, t, n) {
  const s = nu(lu(e.path), n),
    o = Y(s, { record: e, parent: t, children: [], alias: [] })

  return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o
}
function uu(e, t) {
  const n = [],
    s = new Map()
  t = Po({ strict: !1, end: !0, sensitive: !1 }, t)
  function o(a) {
    return s.get(a)
  }
  function r(a, h, p) {
    const b = !p,
      A = au(a)
    A.aliasOf = p && p.record
    const N = Po(t, a),
      D = [A]
    if ('alias' in a) {
      const k = typeof a.alias == 'string' ? [a.alias] : a.alias
      for (const W of k)
        D.push(
          Y({}, A, {
            components: p ? p.record.components : A.components,
            path: W,
            aliasOf: p ? p.record : A
          })
        )
    }
    let T, M
    for (const k of D) {
      const { path: W } = k
      if (h && W[0] !== '/') {
        const ne = h.record.path,
          H = ne[ne.length - 1] === '/' ? '' : '/'
        k.path = h.record.path + (W && H + W)
      }
      if (
        ((T = cu(k, h, N)),
          p
            ? p.alias.push(T)
            : ((M = M || T), M !== T && M.alias.push(T), b && a.name && !Co(T) && i(a.name)),
          A.children)
      ) {
        const ne = A.children
        for (let H = 0; H < ne.length; H++) r(ne[H], T, p && p.children[H])
      }
      ; (p = p || T),
        ((T.record.components && Object.keys(T.record.components).length) ||
          T.record.name ||
          T.record.redirect) &&
        l(T)
    }

    return M
      ? () => {
        i(M)
      }
      : Ut
  }
  function i(a) {
    if (Vr(a)) {
      const h = s.get(a)
      h && (s.delete(a), n.splice(n.indexOf(h), 1), h.children.forEach(i), h.alias.forEach(i))
    } else {
      const h = n.indexOf(a)
      h > -1 &&
        (n.splice(h, 1),
          a.record.name && s.delete(a.record.name),
          a.children.forEach(i),
          a.alias.forEach(i))
    }
  }
  function c() {
    return n
  }
  function l(a) {
    let h = 0
    for (
      ;
      h < n.length && ou(a, n[h]) >= 0 && (a.record.path !== n[h].record.path || !Kr(a, n[h]));

    )
      h++
    n.splice(h, 0, a), a.record.name && !Co(a) && s.set(a.record.name, a)
  }
  function d(a, h) {
    let p,
      b = {},
      A,
      N
    if ('name' in a && a.name) {
      if (((p = s.get(a.name)), !p)) throw Ot(1, { location: a })
        ; (N = p.record.name),
          (b = Y(
            Ro(
              h.params,
              p.keys
                .filter((M) => !M.optional)
                .concat(p.parent ? p.parent.keys.filter((M) => M.optional) : [])
                .map((M) => M.name)
            ),
            a.params &&
            Ro(
              a.params,
              p.keys.map((M) => M.name)
            )
          )),
          (A = p.stringify(b))
    } else if (a.path != null)
      (A = a.path), (p = n.find((M) => M.re.test(A))), p && ((b = p.parse(A)), (N = p.record.name))
    else {
      if (((p = h.name ? s.get(h.name) : n.find((M) => M.re.test(h.path))), !p))
        throw Ot(1, { location: a, currentLocation: h })
        ; (N = p.record.name), (b = Y({}, h.params, a.params)), (A = p.stringify(b))
    }
    const D = []
    let T = p
    for (; T;) D.unshift(T.record), (T = T.parent)

    return { name: N, path: A, params: b, matched: D, meta: du(D) }
  }

  return (
    e.forEach((a) => r(a)),
    { addRoute: r, resolve: d, removeRoute: i, getRoutes: c, getRecordMatcher: o }
  )
}
function Ro(e, t) {
  const n = {}
  for (const s of t) s in e && (n[s] = e[s])

  return n
}
function au(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: fu(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components: 'components' in e ? e.components || null : e.component && { default: e.component }
  }
}
function fu(e) {
  const t = {},
    n = e.props || !1
  if ('component' in e) t.default = n
  else for (const s in e.components) t[s] = typeof n == 'object' ? n[s] : n

  return t
}
function Co(e) {
  for (; e;) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }

  return !1
}
function du(e) {
  return e.reduce((t, n) => Y(t, n.meta), {})
}
function Po(e, t) {
  const n = {}
  for (const s in e) n[s] = s in t ? t[s] : e[s]

  return n
}
function Kr(e, t) {
  return t.children.some((n) => n === e || Kr(e, n))
}
function hu(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const s = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let o = 0; o < s.length; ++o) {
    const r = s[o].replace(Fr, ' '),
      i = r.indexOf('='),
      c = Qt(i < 0 ? r : r.slice(0, i)),
      l = i < 0 ? null : Qt(r.slice(i + 1))
    if (c in t) {
      let d = t[c]
      $e(d) || (d = t[c] = [d]), d.push(l)
    } else t[c] = l
  }

  return t
}
function Oo(e) {
  let t = ''
  for (let n in e) {
    const s = e[n]
    if (((n = Mc(n)), s == null)) {
      s !== void 0 && (t += (t.length ? '&' : '') + n)
      continue
    }
    ; ($e(s) ? s.map((r) => r && fs(r)) : [s && fs(s)]).forEach((r) => {
      r !== void 0 && ((t += (t.length ? '&' : '') + n), r != null && (t += '=' + r))
    })
  }

  return t
}
function pu(e) {
  const t = {}
  for (const n in e) {
    const s = e[n]
    s !== void 0 &&
      (t[n] = $e(s) ? s.map((o) => (o == null ? null : '' + o)) : s == null ? s : '' + s)
  }

  return t
}
const mu = Symbol(''),
  Ao = Symbol(''),
  Fn = Symbol(''),
  Wr = Symbol(''),
  hs = Symbol('')
function Ft() {
  let e = []
  function t(s) {
    return (
      e.push(s),
      () => {
        const o = e.indexOf(s)
        o > -1 && e.splice(o, 1)
      }
    )
  }
  function n() {
    e = []
  }

  return { add: t, list: () => e.slice(), reset: n }
}
function et(e, t, n, s, o, r = (i) => i()) {
  const i = s && (s.enterCallbacks[o] = s.enterCallbacks[o] || [])

  return () =>
    new Promise((c, l) => {
      const d = (p) => {
        p === !1
          ? l(Ot(4, { from: n, to: t }))
          : p instanceof Error
            ? l(p)
            : Zc(p)
              ? l(Ot(2, { from: t, to: p }))
              : (i && s.enterCallbacks[o] === i && typeof p == 'function' && i.push(p), c())
      },
        a = r(() => e.call(s && s.instances[o], t, n, d))
      let h = Promise.resolve(a)
      e.length < 3 && (h = h.then(d)), h.catch((p) => l(p))
    })
}
function Yn(e, t, n, s, o = (r) => r()) {
  const r = []
  for (const i of e)
    for (const c in i.components) {
      let l = i.components[c]
      if (!(t !== 'beforeRouteEnter' && !i.instances[c]))
        if (gu(l)) {
          const a = (l.__vccOpts || l)[t]
          a && r.push(et(a, n, s, i, c, o))
        } else {
          let d = l()
          r.push(() =>
            d.then((a) => {
              if (!a)
                return Promise.reject(new Error(`Couldn't resolve component "${c}" at "${i.path}"`))
              const h = Ec(a) ? a.default : a
              i.components[c] = h
              const b = (h.__vccOpts || h)[t]

              return b && et(b, n, s, i, c, o)()
            })
          )
        }
    }

  return r
}
function gu(e) {
  return typeof e == 'object' || 'displayName' in e || 'props' in e || '__vccOpts' in e
}
function $o(e) {
  const t = Be(Fn),
    n = Be(Wr),
    s = ge(() => {
      const l = he(e.to)

      return t.resolve(l)
    }),
    o = ge(() => {
      const { matched: l } = s.value,
        { length: d } = l,
        a = l[d - 1],
        h = n.matched
      if (!a || !h.length) return -1
      const p = h.findIndex(Pt.bind(null, a))
      if (p > -1) return p
      const b = Io(l[d - 2])

      return d > 1 && Io(a) === b && h[h.length - 1].path !== b
        ? h.findIndex(Pt.bind(null, l[d - 2]))
        : p
    }),
    r = ge(() => o.value > -1 && yu(n.params, s.value.params)),
    i = ge(() => o.value > -1 && o.value === n.matched.length - 1 && Br(n.params, s.value.params))
  function c(l = {}) {
    return bu(l) ? t[he(e.replace) ? 'replace' : 'push'](he(e.to)).catch(Ut) : Promise.resolve()
  }

  return { route: s, href: ge(() => s.value.href), isActive: r, isExactActive: i, navigate: c }
}
const _u = Ee({
  name: 'RouterLink',
  compatConfig: { MODE: 3 },
  props: {
    to: { type: [String, Object], required: !0 },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: { type: String, default: 'page' }
  },
  useLink: $o,
  setup(e, { slots: t }) {
    const n = Cn($o(e)),
      { options: s } = Be(Fn),
      o = ge(() => ({
        [To(e.activeClass, s.linkActiveClass, 'router-link-active')]: n.isActive,
        [To(e.exactActiveClass, s.linkExactActiveClass, 'router-link-exact-active')]:
          n.isExactActive
      }))

    return () => {
      const r = t.default && t.default(n)

      return e.custom
        ? r
        : Lr(
          'a',
          {
            'aria-current': n.isExactActive ? e.ariaCurrentValue : null,
            href: n.href,
            onClick: n.navigate,
            class: o.value
          },
          r
        )
    }
  }
}),
  vu = _u
function bu(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }

    return e.preventDefault && e.preventDefault(), !0
  }
}
function yu(e, t) {
  for (const n in t) {
    const s = t[n],
      o = e[n]
    if (typeof s == 'string') {
      if (s !== o) return !1
    } else if (!$e(o) || o.length !== s.length || s.some((r, i) => r !== o[i])) return !1
  }

  return !0
}
function Io(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const To = (e, t, n) => e ?? t ?? n,
  wu = Ee({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = Be(hs),
        o = ge(() => e.route || s.value),
        r = Be(Ao, 0),
        i = ge(() => {
          let d = he(r)
          const { matched: a } = o.value
          let h
          for (; (h = a[d]) && !h.components;) d++

          return d
        }),
        c = ge(() => o.value.matched[i.value])
      hn(
        Ao,
        ge(() => i.value + 1)
      ),
        hn(mu, c),
        hn(hs, o)
      const l = we()

      return (
        fn(
          () => [l.value, c.value, e.name],
          ([d, a, h], [p, b, A]) => {
            a &&
              ((a.instances[h] = d),
                b &&
                b !== a &&
                d &&
                d === p &&
                (a.leaveGuards.size || (a.leaveGuards = b.leaveGuards),
                  a.updateGuards.size || (a.updateGuards = b.updateGuards))),
              d && a && (!b || !Pt(a, b) || !p) && (a.enterCallbacks[h] || []).forEach((N) => N(d))
          },
          { flush: 'post' }
        ),
        () => {
          const d = o.value,
            a = e.name,
            h = c.value,
            p = h && h.components[a]
          if (!p) return Mo(n.default, { Component: p, route: d })
          const b = h.props[a],
            A = b ? (b === !0 ? d.params : typeof b == 'function' ? b(d) : b) : null,
            D = Lr(
              p,
              Y({}, A, t, {
                onVnodeUnmounted: (T) => {
                  T.component.isUnmounted && (h.instances[a] = null)
                },
                ref: l
              })
            )

          return Mo(n.default, { Component: D, route: d }) || D
        }
      )
    }
  })
function Mo(e, t) {
  if (!e) return null
  const n = e(t)

  return n.length === 1 ? n[0] : n
}
const Eu = wu
function xu(e) {
  const t = uu(e.routes, e),
    n = e.parseQuery || hu,
    s = e.stringifyQuery || Oo,
    o = e.history,
    r = Ft(),
    i = Ft(),
    c = Ft(),
    l = Ii(Qe)
  let d = Qe
  yt && e.scrollBehavior && 'scrollRestoration' in history && (history.scrollRestoration = 'manual')
  const a = zn.bind(null, (_) => '' + _),
    h = zn.bind(null, Nc),
    p = zn.bind(null, Qt)
  function b(_, C) {
    let S, $

    return Vr(_) ? ((S = t.getRecordMatcher(_)), ($ = C)) : ($ = _), t.addRoute($, S)
  }
  function A(_) {
    const C = t.getRecordMatcher(_)
    C && t.removeRoute(C)
  }
  function N() {
    return t.getRoutes().map((_) => _.record)
  }
  function D(_) {
    return !!t.getRecordMatcher(_)
  }
  function T(_, C) {
    if (((C = Y({}, C || l.value)), typeof _ == 'string')) {
      const f = Gn(n, _, C.path),
        m = t.resolve({ path: f.path }, C),
        v = o.createHref(f.fullPath)

      return Y(f, m, { params: p(m.params), hash: Qt(f.hash), redirectedFrom: void 0, href: v })
    }
    let S
    if (_.path != null) S = Y({}, _, { path: Gn(n, _.path, C.path).path })
    else {
      const f = Y({}, _.params)
      for (const m in f) f[m] == null && delete f[m]
        ; (S = Y({}, _, { params: h(f) })), (C.params = h(C.params))
    }
    const $ = t.resolve(S, C),
      G = _.hash || ''
    $.params = a(p($.params))
    const te = kc(s, Y({}, _, { hash: Tc(G), path: $.path })),
      u = o.createHref(te)

    return Y({ fullPath: te, hash: G, query: s === Oo ? pu(_.query) : _.query || {} }, $, {
      redirectedFrom: void 0,
      href: u
    })
  }
  function M(_) {
    return typeof _ == 'string' ? Gn(n, _, l.value.path) : Y({}, _)
  }
  function k(_, C) {
    if (d !== _) return Ot(8, { from: C, to: _ })
  }
  function W(_) {
    return fe(_)
  }
  function ne(_) {
    return W(Y(M(_), { replace: !0 }))
  }
  function H(_) {
    const C = _.matched[_.matched.length - 1]
    if (C && C.redirect) {
      const { redirect: S } = C
      let $ = typeof S == 'function' ? S(_) : S

      return (
        typeof $ == 'string' &&
        (($ = $.includes('?') || $.includes('#') ? ($ = M($)) : { path: $ }), ($.params = {})),
        Y({ query: _.query, hash: _.hash, params: $.path != null ? {} : _.params }, $)
      )
    }
  }
  function fe(_, C) {
    const S = (d = T(_)),
      $ = l.value,
      G = _.state,
      te = _.force,
      u = _.replace === !0,
      f = H(S)
    if (f)
      return fe(
        Y(M(f), { state: typeof f == 'object' ? Y({}, G, f.state) : G, force: te, replace: u }),
        C || S
      )
    const m = S
    m.redirectedFrom = C
    let v

    return (
      !te && Hc(s, $, S) && ((v = Ot(16, { to: m, from: $ })), Me($, $, !0, !1)),
      (v ? Promise.resolve(v) : Ie(m, $))
        .catch((g) => (Ke(g) ? (Ke(g, 2) ? g : Ge(g)) : q(g, m, $)))
        .then((g) => {
          if (g) {
            if (Ke(g, 2))
              return fe(
                Y({ replace: u }, M(g.to), {
                  state: typeof g.to == 'object' ? Y({}, G, g.to.state) : G,
                  force: te
                }),
                C || m
              )
          } else g = ct(m, $, !0, u, G)

          return ze(m, $, g), g
        })
    )
  }
  function xe(_, C) {
    const S = k(_, C)

    return S ? Promise.reject(S) : Promise.resolve()
  }
  function lt(_) {
    const C = vt.values().next().value

    return C && typeof C.runWithContext == 'function' ? C.runWithContext(_) : _()
  }
  function Ie(_, C) {
    let S
    const [$, G, te] = Su(_, C)
    S = Yn($.reverse(), 'beforeRouteLeave', _, C)
    for (const f of $)
      f.leaveGuards.forEach((m) => {
        S.push(et(m, _, C))
      })
    const u = xe.bind(null, _, C)

    return (
      S.push(u),
      ce(S)
        .then(() => {
          S = []
          for (const f of r.list()) S.push(et(f, _, C))

          return S.push(u), ce(S)
        })
        .then(() => {
          S = Yn(G, 'beforeRouteUpdate', _, C)
          for (const f of G)
            f.updateGuards.forEach((m) => {
              S.push(et(m, _, C))
            })

          return S.push(u), ce(S)
        })
        .then(() => {
          S = []
          for (const f of te)
            if (f.beforeEnter)
              if ($e(f.beforeEnter)) for (const m of f.beforeEnter) S.push(et(m, _, C))
              else S.push(et(f.beforeEnter, _, C))

          return S.push(u), ce(S)
        })
        .then(
          () => (
            _.matched.forEach((f) => (f.enterCallbacks = {})),
            (S = Yn(te, 'beforeRouteEnter', _, C, lt)),
            S.push(u),
            ce(S)
          )
        )
        .then(() => {
          S = []
          for (const f of i.list()) S.push(et(f, _, C))

          return S.push(u), ce(S)
        })
        .catch((f) => (Ke(f, 8) ? f : Promise.reject(f)))
    )
  }
  function ze(_, C, S) {
    c.list().forEach(($) => lt(() => $(_, C, S)))
  }
  function ct(_, C, S, $, G) {
    const te = k(_, C)
    if (te) return te
    const u = C === Qe,
      f = yt ? history.state : {}
    S &&
      ($ || u
        ? o.replace(_.fullPath, Y({ scroll: u && f && f.scroll }, G))
        : o.push(_.fullPath, G)),
      (l.value = _),
      Me(_, C, S, u),
      Ge()
  }
  let Te
  function Mt() {
    Te ||
      (Te = o.listen((_, C, S) => {
        if (!tn.listening) return
        const $ = T(_),
          G = H($)
        if (G) {
          fe(Y(G, { replace: !0 }), $).catch(Ut)

          return
        }
        d = $
        const te = l.value
        yt && zc(yo(te.fullPath, S.delta), Nn()),
          Ie($, te)
            .catch((u) =>
              Ke(u, 12)
                ? u
                : Ke(u, 2)
                  ? (fe(u.to, $)
                    .then((f) => {
                      Ke(f, 20) && !S.delta && S.type === Jt.pop && o.go(-1, !1)
                    })
                    .catch(Ut),
                    Promise.reject())
                  : (S.delta && o.go(-S.delta, !1), q(u, $, te))
            )
            .then((u) => {
              ; (u = u || ct($, te, !1)),
                u &&
                (S.delta && !Ke(u, 8)
                  ? o.go(-S.delta, !1)
                  : S.type === Jt.pop && Ke(u, 20) && o.go(-1, !1)),
                ze($, te, u)
            })
            .catch(Ut)
      }))
  }
  let gt = Ft(),
    re = Ft(),
    Q
  function q(_, C, S) {
    Ge(_)
    const $ = re.list()

    return $.length ? $.forEach((G) => G(_, C, S)) : console.error(_), Promise.reject(_)
  }
  function Ue() {
    return Q && l.value !== Qe
      ? Promise.resolve()
      : new Promise((_, C) => {
        gt.add([_, C])
      })
  }
  function Ge(_) {
    return Q || ((Q = !_), Mt(), gt.list().forEach(([C, S]) => (_ ? S(_) : C())), gt.reset()), _
  }
  function Me(_, C, S, $) {
    const { scrollBehavior: G } = e
    if (!yt || !G) return Promise.resolve()
    const te =
      (!S && Gc(yo(_.fullPath, 0))) || (($ || !S) && history.state && history.state.scroll) || null

    return ur()
      .then(() => G(_, C, te))
      .then((u) => u && qc(u))
      .catch((u) => q(u, _, C))
  }
  const pe = (_) => o.go(_)
  let _t
  const vt = new Set(),
    tn = {
      currentRoute: l,
      listening: !0,
      addRoute: b,
      removeRoute: A,
      hasRoute: D,
      getRoutes: N,
      resolve: T,
      options: e,
      push: W,
      replace: ne,
      go: pe,
      back: () => pe(-1),
      forward: () => pe(1),
      beforeEach: r.add,
      beforeResolve: i.add,
      afterEach: c.add,
      onError: re.add,
      isReady: Ue,
      install(_) {
        const C = this
        _.component('RouterLink', vu),
          _.component('RouterView', Eu),
          (_.config.globalProperties.$router = C),
          Object.defineProperty(_.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => he(l)
          }),
          yt && !_t && l.value === Qe && ((_t = !0), W(o.location).catch((G) => { }))
        const S = {}
        for (const G in Qe) Object.defineProperty(S, G, { get: () => l.value[G], enumerable: !0 })
        _.provide(Fn, C), _.provide(Wr, er(S)), _.provide(hs, l)
        const $ = _.unmount
        vt.add(_),
          (_.unmount = function () {
            vt.delete(_),
              vt.size < 1 &&
              ((d = Qe), Te && Te(), (Te = null), (l.value = Qe), (_t = !1), (Q = !1)),
              $()
          })
      }
    }
  function ce(_) {
    return _.reduce((C, S) => C.then(() => lt(S)), Promise.resolve())
  }

  return tn
}
function Su(e, t) {
  const n = [],
    s = [],
    o = [],
    r = Math.max(t.matched.length, e.matched.length)
  for (let i = 0; i < r; i++) {
    const c = t.matched[i]
    c && (e.matched.find((d) => Pt(d, c)) ? s.push(c) : n.push(c))
    const l = e.matched[i]
    l && (t.matched.find((d) => Pt(d, l)) || o.push(l))
  }

  return [n, s, o]
}
function Ru() {
  return Be(Fn)
}
const qr = '/studio-vue/assets/569ACEB2-B0F7-4C66-9A63-420E804809293-DvbJ6PQa.png',
  Cu = '/studio-vue/assets/7F94ABB3-3AAE-41E4-863E-102B0FF05D56-D28jCBKw.png',
  jn = (e) => (It('data-v-36dcd89b'), (e = e()), Tt(), e),
  Pu = { id: 'navlink-section', class: 'flex-center' },
  Ou = jn(() => O('div', { id: 'logo-icon' }, null, -1)),
  Au = jn(() => O('h3', null, 'STUDIO BOUGIE', -1)),
  $u = { id: 'navlink-section-right' },
  Iu = jn(() => O('p', null, 'Collection', -1)),
  Tu = jn(() => O('p', null, 'Contact', -1)),
  Mu = Ee({
    __name: 'Navbar',
    props: { isScrolled: { type: Boolean } },
    setup(e) {
      const t = e,
        n = ge(() => window.innerWidth < 768)

      return (s, o) => {
        const r = $n('router-link')

        return (
          se(),
          _e(
            'main',
            {
              id: 'navbar',
              class: $t([
                'flex-center',
                [{ 'position-fixed': t.isScrolled, 'position-absolute': !t.isScrolled }]
              ])
            },
            [
              O('div', Pu, [
                n.value
                  ? (se(),
                    Rt(
                      r,
                      { key: 0, class: 'navlinks', to: '/' },
                      { default: tt(() => [Ou]), _: 1 }
                    ))
                  : (se(),
                    Rt(
                      r,
                      { key: 1, class: 'navlinks', to: '/' },
                      { default: tt(() => [Au]), _: 1 }
                    )),
                O('div', $u, [
                  K(r, { class: 'navlinks', to: '/collection' }, { default: tt(() => [Iu]), _: 1 }),
                  K(r, { class: 'navlinks', to: '/contact' }, { default: tt(() => [Tu]), _: 1 })
                ])
              ])
            ],
            2
          )
        )
      }
    }
  }),
  Ts = Ve(Mu, [['__scopeId', 'data-v-36dcd89b']]),
  Lu = Ee({
    __name: 'Button',
    props: { text: {}, color: {} },
    setup(e) {
      const t = e

      return (n, s) => (
        se(),
        _e(
          'main',
          { id: 'button', class: $t('button-' + t.color) },
          [O('p', null, Qn(t.text), 1)],
          2
        )
      )
    }
  }),
  Xt = Ve(Lu, [['__scopeId', 'data-v-6c06aa36']]),
  zr = (e) => (It('data-v-dc670e4d'), (e = e()), Tt(), e),
  Nu = { id: 'img-background', class: 'filter' },
  Fu = { id: 'heroic-content' },
  ju = zr(() => O('span', null, null, -1)),
  ku = zr(() => O('h1', { id: 'h1-title' }, [cs('BOUGIES '), O('br'), cs('ARTISANALES')], -1)),
  Hu = Ee({
    __name: 'Heroic',
    emits: ['scrollToSection'],
    setup(e, { emit: t }) {
      const n = t,
        s = (o) => {
          n('scrollToSection', o)
        }

      return (o, r) => (
        se(),
        _e('main', null, [
          O('div', Nu, [
            O('div', Fu, [
              ju,
              ku,
              K(Xt, {
                onClick: r[0] || (r[0] = (i) => s('preview-section')),
                class: 'btn',
                text: 'Découvrir mes bougies',
                color: 'white'
              })
            ])
          ])
        ])
      )
    }
  }),
  Bu = Ve(Hu, [['__scopeId', 'data-v-dc670e4d']]),
  Du = { id: 'card-title' },
  Vu = { key: 0, id: 'card-desc' },
  Uu = Ee({
    __name: 'CandleCard',
    props: { title: {}, img: {}, desc: {} },
    setup(e) {
      const t = we(!1),
        n = e,
        s = n.img,
        o = ge(() => ({
          backgroundImage: `url(${s})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }))

      return (r, i) => (
        se(),
        _e('main', null, [
          O(
            'div',
            {
              class: $t({ 'background-darker': t.value }),
              onMouseover: i[0] || (i[0] = (c) => (t.value = !0)),
              onMouseleave: i[1] || (i[1] = (c) => (t.value = !1)),
              style: He(o.value),
              id: 'card'
            },
            [
              O('h2', Du, Qn(n.title.toLocaleUpperCase()), 1),
              t.value ? (se(), _e('div', Vu, [O('p', null, Qn(n.desc) + ' eee', 1)])) : us('', !0)
            ],
            38
          )
        ])
      )
    }
  }),
  Ku = Ve(Uu, [['__scopeId', 'data-v-7c628aea']]),
  un = '/studio-vue/assets/IMG_0333_1-CO5SOwRj.png',
  Wu = [
    { id: 1, name: 'Bougie', img: un, desc: 'blablablablablaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
    { id: 2, name: 'Bougie', img: un, desc: 'blablablablabla' },
    { id: 3, name: 'Bougie', img: un, desc: 'blablablablabla' },
    { id: 4, name: 'Bougie', img: un, desc: 'blablablablabla' }
  ],
  Ms = (e) => (It('data-v-23b2c6fe'), (e = e()), Tt(), e),
  qu = Ms(() => O('span', { id: 'bcg-green' }, null, -1)),
  zu = { id: 'preview-section' },
  Gu = { id: 'preview-content' },
  Yu = { id: 'preview-heading' },
  Qu = Ms(() => O('h3', { id: 'h3-title' }, 'Petit aperçu de mes produits', -1)),
  Ju = Ms(() => O('p', null, 'Voir tout', -1)),
  Xu = { key: 0, id: 'btn-wrapper' },
  Zu = Ee({
    __name: 'Preview',
    setup(e) {
      const t = ge(() => window.innerWidth < 768),
        n = Ru(),
        s = we(null),
        o = we(0),
        r = (c) => {
          n.push(c)
        },
        i = (c) => {
          if (s.value) {
            const l = c.deltaY,
              d = s.value.scrollLeft
              ; (s.value.scrollLeft = d + l), c.preventDefault()
          }
        }

      return (
        Tn(() => {
          s.value && s.value.addEventListener('wheel', i)
        }),
        Zt(() => {
          s.value && s.value.removeEventListener('wheel', i)
        }),
        (c, l) => {
          const d = $n('router-link')

          return (
            se(),
            _e('main', null, [
              qu,
              O('div', zu, [
                O('div', Gu, [
                  O('div', Yu, [
                    Qu,
                    t.value
                      ? us('', !0)
                      : (se(),
                        Rt(
                          d,
                          { key: 0, id: 'p-see-more', to: '/collection' },
                          { default: tt(() => [Ju]), _: 1 }
                        ))
                  ]),
                  O(
                    'div',
                    {
                      id: 'cards-container',
                      ref_key: 'containerRef',
                      ref: s,
                      style: He({ left: o.value + 'px' })
                    },
                    [
                      (se(!0),
                        _e(
                          Fe,
                          null,
                          ul(
                            he(Wu),
                            (a) => (
                              se(),
                              Rt(
                                Ku,
                                { title: a.name, img: a.img, desc: a.desc, key: a.id },
                                null,
                                8,
                                ['title', 'img', 'desc']
                              )
                            )
                          ),
                          128
                        ))
                    ],
                    4
                  ),
                  t.value
                    ? (se(),
                      _e('div', Xu, [
                        K(Xt, {
                          onClick: l[0] || (l[0] = (a) => r('/collection')),
                          class: 'btn',
                          text: 'Voir tous mes produits',
                          color: 'green'
                        })
                      ]))
                    : us('', !0)
                ])
              ])
            ])
          )
        }
      )
    }
  }),
  ea = Ve(Zu, [['__scopeId', 'data-v-23b2c6fe']]),
  ta = '/studio-vue/assets/IMG_0327_2-De8GrB96.png',
  na = '/studio-vue/assets/9CEE5C54-5045-44D8-B17C-813D073E50C6-DXYCC-NT.png',
  Gr = (e) => (It('data-v-6d1c5589'), (e = e()), Tt(), e),
  sa = { id: 'my-story-section' },
  oa = { id: 'my-story-content' },
  ra = { id: 'imgs-wrapper' },
  ia = { id: 'first-img-wrapper' },
  la = { id: 'first-img-wrapper' },
  ca = { id: 'third-img-wrapper' },
  ua = { id: 'second-img-wrapper' },
  aa = { id: 'text-wrapper' },
  fa = Gr(() => O('h3', null, 'Mon Histoire', -1)),
  da = Gr(() =>
    O(
      'p',
      null,
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti facilis quam, in libero est rem corporis, amet unde ipsa deserunt sint aliquam excepturi nobis dicta non. Recusandae accusamus rerum dolorum. Inventore, mollitia provident quo corporis voluptatibus consequatur voluptatum blanditiis dignissimos dolor beatae tempore exercitationem odit similique cum. Ipsa, non incidunt at accusantium enim fugit quaerat ratione libero pariatur? Quaerat, porro. ',
      -1
    )
  ),
  ha = { id: 'btn-wrapper' },
  pa = Ee({
    __name: 'MyStory',
    emits: ['scrollToSection'],
    setup(e, { emit: t }) {
      const n = t,
        s = (d) => {
          n('scrollToSection', d)
        },
        o = we(!1),
        r = we(0)
      let i = we(55),
        c = we(30)
      const l = () => {
        ; (r.value = document.documentElement.scrollTop),
          (o.value = r.value > 850),
          (i.value = -55 + r.value / 14),
          (c.value = -30 + r.value / 14),
          console.log(r.value, i.value)
      }

      return (
        Tn(() => {
          window.addEventListener('scroll', l)
        }),
        Zt(() => {
          window.removeEventListener('scroll', l)
        }),
        (d, a) => (
          se(),
          _e('main', null, [
            O('div', sa, [
              O('div', oa, [
                O('div', ra, [
                  O('div', ia, [
                    O('div', la, [
                      O(
                        'img',
                        {
                          id: 'first-img',
                          src: ta,
                          alt: '',
                          class: 'img',
                          style: He({ transform: `translateY(${he(i)}px)` })
                        },
                        null,
                        4
                      )
                    ]),
                    O('div', ca, [
                      O(
                        'img',
                        {
                          id: 'third-img',
                          src: na,
                          alt: '',
                          class: 'img',
                          style: He({ transform: `translateY(${he(i)}px)` })
                        },
                        null,
                        4
                      )
                    ])
                  ]),
                  O('div', ua, [
                    O(
                      'img',
                      {
                        id: 'second-img',
                        src: qr,
                        alt: '',
                        class: 'img',
                        style: He({ transform: `translateY(${he(c)}px)` })
                      },
                      null,
                      4
                    )
                  ])
                ]),
                O('div', aa, [
                  fa,
                  da,
                  O('div', ha, [
                    K(Xt, {
                      onClick: a[0] || (a[0] = (h) => s('preview-section')),
                      class: 'btn',
                      text: 'Button',
                      color: 'green'
                    }),
                    K(Xt, {
                      onClick: a[1] || (a[1] = (h) => s('preview-section')),
                      class: 'btn',
                      text: 'Button',
                      color: 'green'
                    })
                  ])
                ])
              ])
            ])
          ])
        )
      )
    }
  }),
  ma = Ve(pa, [['__scopeId', 'data-v-6d1c5589']]),
  Yr = (e) => (It('data-v-4ca11e20'), (e = e()), Tt(), e),
  ga = { id: 'explanation-section' },
  _a = { id: 'explanation-content' },
  va = Yr(() => O('h3', null, "Commander une bougie c'est très simple !", -1)),
  ba = { id: 'icons-wrapper' },
  ya = Il(
    '<div class="icon-wrapper" data-v-4ca11e20><div class="icon" id="candle-icon" data-v-4ca11e20></div><p class="icon-text" data-v-4ca11e20>Choisissez votre bougie</p></div><div class="icon-wrapper" data-v-4ca11e20><div class="icon" id="color-icon" data-v-4ca11e20></div><p class="icon-text" data-v-4ca11e20>Sa couleur</p></div><div class="icon-wrapper" data-v-4ca11e20><div class="icon" id="parfum-icon" data-v-4ca11e20></div><p class="icon-text" data-v-4ca11e20>Son parfum</p></div>',
    3
  ),
  wa = { class: 'icon-btn-wrapper' },
  Ea = { class: 'icon-wrapper' },
  xa = Yr(() => O('div', { class: 'icon', id: 'contact-icon' }, null, -1)),
  Sa = Ee({
    __name: 'Explanation',
    setup(e) {
      function t() {
        window.open('https://www.instagram.com/studio_bougie_artisanale/?hl=fr', '_blank')
      }

      return (n, s) => (
        se(),
        _e('main', null, [
          O('div', ga, [
            O('div', _a, [
              va,
              O('div', ba, [
                ya,
                O('div', wa, [
                  O('div', Ea, [
                    xa,
                    K(Xt, {
                      onClick: s[0] || (s[0] = (o) => t()),
                      class: 'btn',
                      text: 'Commandez sur instagram',
                      color: 'green'
                    })
                  ])
                ])
              ])
            ])
          ])
        ])
      )
    }
  }),
  Ra = Ve(Sa, [['__scopeId', 'data-v-4ca11e20']]),
  kn = (e) => (It('data-v-2a8c8940'), (e = e()), Tt(), e),
  Ca = { id: 'footer-section' },
  Pa = { id: 'footer-content' },
  Oa = { class: 'footer-text-wrapper' },
  Aa = kn(() => O('h3', null, 'Informations', -1)),
  $a = { class: 'navlinks-wrapper' },
  Ia = kn(() => O('p', null, 'Mes produits', -1)),
  Ta = kn(() => O('p', null, 'Me contacter', -1)),
  Ma = { class: 'footer-text-wrapper' },
  La = kn(() => O('h3', null, 'Suivez moi', -1)),
  Na = { id: 'contact-icons' },
  Fa = Ee({
    __name: 'Footer',
    setup(e) {
      const t = 'https://www.instagram.com/studio_bougie_artisanale/?hl=fr',
        n = 'https://www.facebook.com/profile.php?id=100094274216753',
        s = 'https://www.threads.net/@studio_bougie_artisanale'
      function o(r) {
        window.open(r, '_blank')
      }

      return (r, i) => {
        const c = $n('router-link')

        return (
          se(),
          _e('main', null, [
            O('div', Ca, [
              O('div', Pa, [
                O('div', Oa, [
                  Aa,
                  O('div', $a, [
                    K(
                      c,
                      { class: 'navlinks', to: '/collection' },
                      { default: tt(() => [Ia]), _: 1 }
                    ),
                    K(c, { class: 'navlinks', to: '/contact' }, { default: tt(() => [Ta]), _: 1 })
                  ])
                ]),
                O('div', Ma, [
                  La,
                  O('div', Na, [
                    O('div', {
                      onClick: i[0] || (i[0] = (l) => o(he(t))),
                      class: 'contact-icon',
                      id: 'instagram-icon'
                    }),
                    O('div', {
                      onClick: i[1] || (i[1] = (l) => o(he(n))),
                      class: 'contact-icon',
                      id: 'facebook-icon'
                    }),
                    O('div', {
                      onClick: i[2] || (i[2] = (l) => o(he(s))),
                      class: 'contact-icon',
                      id: 'threads-icon'
                    })
                  ])
                ])
              ])
            ])
          ])
        )
      }
    }
  }),
  ja = Ve(Fa, [['__scopeId', 'data-v-2a8c8940']]),
  ka = { id: 'homepage' },
  Ha = { class: 'banner-filter' },
  Ba = { class: 'banner-filter' },
  Da = Ee({
    __name: 'Homepage',
    setup(e) {
      const t = we(!1),
        n = we(0)
      let s = we(200),
        o = we(199)
      const r = () => {
        ; (n.value = document.documentElement.scrollTop),
          (t.value = n.value > 850),
          (s.value = -200 + n.value / 4),
          (o.value = -199 + n.value / 4),
          console.log(n.value, s)
      },
        i = (c) => {
          const l = document.getElementById(c)
          l && l.scrollIntoView({ behavior: 'smooth' })
        }

      return (
        Tn(() => {
          window.addEventListener('scroll', r)
        }),
        Zt(() => {
          window.removeEventListener('scroll', r)
        }),
        (c, l) => (
          se(),
          _e('main', ka, [
            K(Ts, { ref: 'scrollContainer', onScroll: r, isScrolled: t.value }, null, 8, [
              'isScrolled'
            ]),
            K(Bu, { onScrollToSection: i, id: 'heroic-section' }),
            K(ea),
            O('div', Ha, [
              O(
                'img',
                {
                  id: 'img-banner',
                  src: qr,
                  alt: '',
                  style: He({ transform: `translateY(${he(s)}px)` })
                },
                null,
                4
              )
            ]),
            K(ma),
            O('div', Ba, [
              O(
                'img',
                {
                  id: 'img-banner-2',
                  src: Cu,
                  alt: '',
                  style: He({ transform: `translateY(${he(o)}px)` })
                },
                null,
                4
              )
            ]),
            K(Ra),
            K(ja)
          ])
        )
      )
    }
  }),
  Va = Ve(Da, [['__scopeId', 'data-v-fd2a877f']]),
  Ua = O('h1', null, 'Collection', -1),
  Ka = Ee({
    __name: 'Collection',
    setup(e) {
      return (t, n) => (
        se(),
        _e('main', null, [
          K(Ts, { ref: 'scrollContainer', isScrolled: !0, id: 'navbar' }, null, 512),
          Ua
        ])
      )
    }
  }),
  Wa = O('h1', null, 'Contact', -1),
  qa = Ee({
    __name: 'Contact',
    setup(e) {
      return (t, n) => (
        se(), _e('main', null, [K(Ts, { ref: 'scrollContainer', isScrolled: !0 }, null, 512), Wa])
      )
    }
  }),
  za = xu({
    history: Xc('/studio-vue/'),
    routes: [
      { path: '/', name: 'home', component: Va },
      { path: '/collection', name: 'collection', component: Ka },
      { path: '/contact', name: 'contact', component: qa }
    ]
  }),
  Ls = hc(wc)
Ls.use(vc())
Ls.use(za)
Ls.mount('#app')
