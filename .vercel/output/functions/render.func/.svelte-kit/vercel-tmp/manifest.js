export const manifest = {
	appDir: "_app",
	assets: new Set([".nojekyll","creatoDisplay.woff","data.ts","favicon.png"]),
	mimeTypes: {".woff":"font/woff",".ts":"video/mp2t",".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-fe2b4554.js","imports":["_app/immutable/start-fe2b4554.js","_app/immutable/chunks/index-d5c04e56.js"],"stylesheets":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
