(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/instrumentation-client.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/
__turbopack_context__.s({
    "onRouterTransitionStart": ()=>onRouterTransitionStart
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@sentry/nextjs/build/esm/client/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2d$internal$2f$replay$2f$build$2f$npm$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry-internal/replay/build/npm/esm/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$logs$2f$console$2d$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/core/build/esm/logs/console-integration.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$routing$2f$appRouterRoutingInstrumentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@sentry/nextjs/build/esm/client/routing/appRouterRoutingInstrumentation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$spotlightjs$2f$spotlight$2f$dist$2f$overlay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@spotlightjs/spotlight/dist/overlay.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$spotlightjs$2f$overlay$2f$dist$2f$sentry$2d$spotlight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@spotlightjs/overlay/dist/sentry-spotlight.js [app-client] (ecmascript)");
globalThis["_sentryRouteManifest"] = "{\"dynamicRoutes\":[{\"path\":\"/:locale/sign-in/:sign-in*?\",\"regex\":\"^/([^/]+)/sign-in(?:/(.*))?$\",\"paramNames\":[\"locale\",\"sign-in\"]},{\"path\":\"/:locale/sign-up/:sign-up*?\",\"regex\":\"^/([^/]+)/sign-up(?:/(.*))?$\",\"paramNames\":[\"locale\",\"sign-up\"]},{\"path\":\"/:locale/dashboard\",\"regex\":\"^/([^/]+)/dashboard$\",\"paramNames\":[\"locale\"]},{\"path\":\"/:locale/dashboard/user-profile/:user-profile*?\",\"regex\":\"^/([^/]+)/dashboard/user-profile(?:/(.*))?$\",\"paramNames\":[\"locale\",\"user-profile\"]},{\"path\":\"/:locale\",\"regex\":\"^/([^/]+)$\",\"paramNames\":[\"locale\"]},{\"path\":\"/:locale/about\",\"regex\":\"^/([^/]+)/about$\",\"paramNames\":[\"locale\"]},{\"path\":\"/:locale/counter\",\"regex\":\"^/([^/]+)/counter$\",\"paramNames\":[\"locale\"]},{\"path\":\"/:locale/portfolio\",\"regex\":\"^/([^/]+)/portfolio$\",\"paramNames\":[\"locale\"]},{\"path\":\"/:locale/portfolio/:slug\",\"regex\":\"^/([^/]+)/portfolio/([^/]+)$\",\"paramNames\":[\"locale\",\"slug\"]}],\"staticRoutes\":[]}";
;
;
if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SENTRY_DISABLED) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["init"]({
        dsn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_SENTRY_DSN,
        // Add optional integrations for additional features
        integrations: [
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2d$internal$2f$replay$2f$build$2f$npm$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["replayIntegration"](),
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$core$2f$build$2f$esm$2f$logs$2f$console$2d$integration$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["consoleLoggingIntegration"]()
        ],
        // Adds request headers and IP for users, for more info visit
        sendDefaultPii: true,
        // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
        tracesSampleRate: 1,
        // Define how likely Replay events are sampled.
        // This sets the sample rate to be 10%. You may want this to be 100% while
        // in development and sample at a lower rate in production
        replaysSessionSampleRate: 0.1,
        // Define how likely Replay events are sampled when an error occurs.
        replaysOnErrorSampleRate: 1.0,
        // Enable logs to be sent to Sentry
        _experiments: {
            enableLogs: true
        },
        // Setting this option to true will print useful information to the console while you're setting up Sentry.
        debug: false
    });
    if ("TURBOPACK compile-time truthy", 1) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$spotlightjs$2f$overlay$2f$dist$2f$sentry$2d$spotlight$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["init"]();
    }
}
const onRouterTransitionStart = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$sentry$2f$nextjs$2f$build$2f$esm$2f$client$2f$routing$2f$appRouterRoutingInstrumentation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["captureRouterTransitionStart"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_instrumentation-client_ts_4aba9a11._.js.map