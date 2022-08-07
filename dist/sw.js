if (!self.define) {
	let e,
		i = {};
	const s = (s, n) => (
		(s = new URL(s + ".js", n).href),
		i[s] ||
			new Promise((i) => {
				if ("document" in self) {
					const e = document.createElement("script");
					(e.src = s), (e.onload = i), document.head.appendChild(e);
				} else (e = s), importScripts(s), i();
			}).then(() => {
				let e = i[s];
				if (!e) throw new Error(`Module ${s} didn’t register its module`);
				return e;
			})
	);
	self.define = (n, r) => {
		const t =
			e ||
			("document" in self ? document.currentScript.src : "") ||
			location.href;
		if (i[t]) return;
		let d = {};
		const o = (e) => s(e, t),
			l = { module: { uri: t }, exports: d, require: o };
		i[t] = Promise.all(n.map((e) => l[e] || o(e))).then((e) => (r(...e), d));
	};
}
define(["./workbox-3ea082d2"], function (e) {
	"use strict";
	self.skipWaiting(),
		e.clientsClaim(),
		e.precacheAndRoute(
			[
				{ url: "assets/index.4ce663f4.css", revision: null },
				{ url: "assets/index.d0fe021a.js", revision: null },
				{
					url: "images/index.html",
					revision: "c576df5527e1c32be558fb3a00c41229",
				},
				{ url: "index.html", revision: "95fee72d60a12da9ddd5b55728c11402" },
				{ url: "registerSW.js", revision: "1872c500de691dce40960bb85481de07" },
				{
					url: "manifest.webmanifest",
					revision: "d0edbafd7890f5cf5277bfd87d9dc80a",
				},
			],
			{}
		),
		e.cleanupOutdatedCaches(),
		e.registerRoute(
			new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))
		);
});
