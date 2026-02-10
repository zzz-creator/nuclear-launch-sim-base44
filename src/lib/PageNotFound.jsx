import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/lib/PageNotFound.jsx");import __vite__cjsImport0_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=512b7d5e"; const jsxDEV = __vite__cjsImport0_react_jsxDevRuntime["jsxDEV"];
import * as RefreshRuntime from "/@react-refresh";
const inWebWorker = typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope;
let prevRefreshReg;
let prevRefreshSig;
if (import.meta.hot && !inWebWorker) {
  if (!window.$RefreshReg$) {
    throw new Error(
      "@vitejs/plugin-react can't detect preamble. Something is wrong."
    );
  }
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/lib/PageNotFound.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import { useLocation } from "/node_modules/.vite/deps/react-router-dom.js?v=5d62e1b7";
import { base44 } from "/src/api/base44Client.js";
import { useQuery } from "/node_modules/.vite/deps/@tanstack_react-query.js?v=1865cf94";
export default function PageNotFound({}) {
  _s();
  const location = useLocation();
  const pageName = location.pathname.substring(1);
  const { data: authData, isFetched } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const user = await base44.auth.me();
        return { user, isAuthenticated: true };
      } catch (error) {
        return { user: null, isAuthenticated: false };
      }
    }
  });
  return /* @__PURE__ */ jsxDEV("div", { "data-source-location": "PageNotFound:23:8", "data-dynamic-content": "true", className: "min-h-screen flex items-center justify-center p-6 bg-slate-50", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "PageNotFound:24:12", "data-dynamic-content": "true", className: "max-w-md w-full", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "PageNotFound:25:16", "data-dynamic-content": "true", className: "text-center space-y-6", children: [
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "PageNotFound:27:20", "data-dynamic-content": "false", className: "space-y-2", children: [
      /* @__PURE__ */ jsxDEV("h1", { "data-source-location": "PageNotFound:28:24", "data-dynamic-content": "false", className: "text-7xl font-light text-slate-300", children: "404" }, void 0, false, {
        fileName: "/app/src/lib/PageNotFound.jsx",
        lineNumber: 47,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "PageNotFound:29:24", "data-dynamic-content": "false", className: "h-0.5 w-16 bg-slate-200 mx-auto" }, void 0, false, {
        fileName: "/app/src/lib/PageNotFound.jsx",
        lineNumber: 48,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/lib/PageNotFound.jsx",
      lineNumber: 46,
      columnNumber: 21
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "PageNotFound:33:20", "data-dynamic-content": "true", className: "space-y-3", children: [
      /* @__PURE__ */ jsxDEV("h2", { "data-source-location": "PageNotFound:34:24", "data-dynamic-content": "false", className: "text-2xl font-medium text-slate-800", children: "Page Not Found" }, void 0, false, {
        fileName: "/app/src/lib/PageNotFound.jsx",
        lineNumber: 53,
        columnNumber: 25
      }, this),
      /* @__PURE__ */ jsxDEV("p", { "data-source-location": "PageNotFound:37:24", "data-dynamic-content": "true", className: "text-slate-600 leading-relaxed", children: [
        "The page ",
        /* @__PURE__ */ jsxDEV("span", { "data-source-location": "PageNotFound:38:37", "data-dynamic-content": "true", className: "font-medium text-slate-700", children: [
          '"',
          pageName,
          '"'
        ] }, void 0, true, {
          fileName: "/app/src/lib/PageNotFound.jsx",
          lineNumber: 57,
          columnNumber: 38
        }, this),
        " could not be found in this application."
      ] }, void 0, true, {
        fileName: "/app/src/lib/PageNotFound.jsx",
        lineNumber: 56,
        columnNumber: 25
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/lib/PageNotFound.jsx",
      lineNumber: 52,
      columnNumber: 21
    }, this),
    isFetched && authData.isAuthenticated && authData.user?.role === "admin" && /* @__PURE__ */ jsxDEV("div", { "data-source-location": "PageNotFound:44:24", "data-dynamic-content": "false", className: "mt-8 p-4 bg-slate-100 rounded-lg border border-slate-200", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "PageNotFound:45:28", "data-dynamic-content": "false", className: "flex items-start space-x-3", children: [
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "PageNotFound:46:32", "data-dynamic-content": "false", className: "flex-shrink-0 w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center mt-0.5", children: /* @__PURE__ */ jsxDEV("div", { "data-source-location": "PageNotFound:47:36", "data-dynamic-content": "false", className: "w-2 h-2 rounded-full bg-orange-400" }, void 0, false, {
        fileName: "/app/src/lib/PageNotFound.jsx",
        lineNumber: 66,
        columnNumber: 37
      }, this) }, void 0, false, {
        fileName: "/app/src/lib/PageNotFound.jsx",
        lineNumber: 65,
        columnNumber: 33
      }, this),
      /* @__PURE__ */ jsxDEV("div", { "data-source-location": "PageNotFound:49:32", "data-dynamic-content": "false", className: "text-left space-y-1", children: [
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "PageNotFound:50:36", "data-dynamic-content": "false", className: "text-sm font-medium text-slate-700", children: "Admin Note" }, void 0, false, {
          fileName: "/app/src/lib/PageNotFound.jsx",
          lineNumber: 69,
          columnNumber: 37
        }, this),
        /* @__PURE__ */ jsxDEV("p", { "data-source-location": "PageNotFound:51:36", "data-dynamic-content": "false", className: "text-sm text-slate-600 leading-relaxed", children: "This could mean that the AI hasn't implemented this page yet. Ask it to implement it in the chat." }, void 0, false, {
          fileName: "/app/src/lib/PageNotFound.jsx",
          lineNumber: 70,
          columnNumber: 37
        }, this)
      ] }, void 0, true, {
        fileName: "/app/src/lib/PageNotFound.jsx",
        lineNumber: 68,
        columnNumber: 33
      }, this)
    ] }, void 0, true, {
      fileName: "/app/src/lib/PageNotFound.jsx",
      lineNumber: 64,
      columnNumber: 29
    }, this) }, void 0, false, {
      fileName: "/app/src/lib/PageNotFound.jsx",
      lineNumber: 63,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ jsxDEV("div", { "data-source-location": "PageNotFound:60:20", "data-dynamic-content": "true", className: "pt-6", children: /* @__PURE__ */ jsxDEV(
      "button",
      {
        "data-source-location": "PageNotFound:61:24",
        "data-dynamic-content": "false",
        onClick: () => window.location.href = "/",
        className: "inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 hover:border-slate-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500",
        children: [
          /* @__PURE__ */ jsxDEV("svg", { "data-source-location": "PageNotFound:65:28", "data-dynamic-content": "false", className: "w-4 h-4 mr-2", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV("path", { "data-source-location": "PageNotFound:66:32", "data-dynamic-content": "false", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" }, void 0, false, {
            fileName: "/app/src/lib/PageNotFound.jsx",
            lineNumber: 85,
            columnNumber: 33
          }, this) }, void 0, false, {
            fileName: "/app/src/lib/PageNotFound.jsx",
            lineNumber: 84,
            columnNumber: 29
          }, this),
          "Go Home"
        ]
      },
      void 0,
      true,
      {
        fileName: "/app/src/lib/PageNotFound.jsx",
        lineNumber: 80,
        columnNumber: 25
      },
      this
    ) }, void 0, false, {
      fileName: "/app/src/lib/PageNotFound.jsx",
      lineNumber: 79,
      columnNumber: 21
    }, this)
  ] }, void 0, true, {
    fileName: "/app/src/lib/PageNotFound.jsx",
    lineNumber: 44,
    columnNumber: 17
  }, this) }, void 0, false, {
    fileName: "/app/src/lib/PageNotFound.jsx",
    lineNumber: 43,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "/app/src/lib/PageNotFound.jsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}
_s(PageNotFound, "CdQhHkZI31BBysnji9DTEvRGLEE=", false, function() {
  return [useLocation, useQuery];
});
_c = PageNotFound;
var _c;
$RefreshReg$(_c, "PageNotFound");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/lib/PageNotFound.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/lib/PageNotFound.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,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LCJ1c2VRdWVyeSIsIlBhZ2VOb3RGb3VuZCIsIl9zIiwibG9jYXRpb24iLCJwYWdlTmFtZSIsInBhdGhuYW1lIiwic3Vic3RyaW5nIiwiZGF0YSIsImF1dGhEYXRhIiwiaXNGZXRjaGVkIiwicXVlcnlLZXkiLCJxdWVyeUZuIiwidXNlciIsImF1dGgiLCJtZSIsImlzQXV0aGVudGljYXRlZCIsImVycm9yIiwicm9sZSIsIndpbmRvdyIsImhyZWYiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyJQYWdlTm90Rm91bmQuanN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBiYXNlNDQgfSBmcm9tICdAL2FwaS9iYXNlNDRDbGllbnQnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdAdGFuc3RhY2svcmVhY3QtcXVlcnknO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2VOb3RGb3VuZCh7fSkge1xuICBjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG4gIGNvbnN0IHBhZ2VOYW1lID0gbG9jYXRpb24ucGF0aG5hbWUuc3Vic3RyaW5nKDEpO1xuXG4gIGNvbnN0IHsgZGF0YTogYXV0aERhdGEsIGlzRmV0Y2hlZCB9ID0gdXNlUXVlcnkoe1xuICAgIHF1ZXJ5S2V5OiBbJ3VzZXInXSxcbiAgICBxdWVyeUZuOiBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgYmFzZTQ0LmF1dGgubWUoKTtcbiAgICAgICAgcmV0dXJuIHsgdXNlciwgaXNBdXRoZW50aWNhdGVkOiB0cnVlIH07XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyB1c2VyOiBudWxsLCBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlIH07XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJQYWdlTm90Rm91bmQ6MjM6OFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cIm1pbi1oLXNjcmVlbiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLTYgYmctc2xhdGUtNTBcIj5cbiAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJQYWdlTm90Rm91bmQ6MjQ6MTJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJtYXgtdy1tZCB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiUGFnZU5vdEZvdW5kOjI1OjE2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJ0cnVlXCIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgc3BhY2UteS02XCI+XG4gICAgICAgICAgICAgICAgICAgIHsvKiA0MDQgRXJyb3IgQ29kZSAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIlBhZ2VOb3RGb3VuZDoyNzoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJzcGFjZS15LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIlBhZ2VOb3RGb3VuZDoyODoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LTd4bCBmb250LWxpZ2h0IHRleHQtc2xhdGUtMzAwXCI+NDA0PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJQYWdlTm90Rm91bmQ6Mjk6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiaC0wLjUgdy0xNiBiZy1zbGF0ZS0yMDAgbXgtYXV0b1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHsvKiBNYWluIE1lc3NhZ2UgKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJQYWdlTm90Rm91bmQ6MzM6MjBcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJzcGFjZS15LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIlBhZ2VOb3RGb3VuZDozNDoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTgwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBhZ2UgTm90IEZvdW5kXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJQYWdlTm90Rm91bmQ6Mzc6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cInRydWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXNsYXRlLTYwMCBsZWFkaW5nLXJlbGF4ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgcGFnZSA8c3BhbiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIlBhZ2VOb3RGb3VuZDozODozN1wiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNzAwXCI+XCJ7cGFnZU5hbWV9XCI8L3NwYW4+IGNvdWxkIG5vdCBiZSBmb3VuZCBpbiB0aGlzIGFwcGxpY2F0aW9uLlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHsvKiBBZG1pbiBOb3RlICovfVxuICAgICAgICAgICAgICAgICAgICB7aXNGZXRjaGVkICYmIGF1dGhEYXRhLmlzQXV0aGVudGljYXRlZCAmJiBhdXRoRGF0YS51c2VyPy5yb2xlID09PSAnYWRtaW4nICYmXG4gICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIlBhZ2VOb3RGb3VuZDo0NDoyNFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJtdC04IHAtNCBiZy1zbGF0ZS0xMDAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXNsYXRlLTIwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJQYWdlTm90Rm91bmQ6NDU6MjhcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1zdGFydCBzcGFjZS14LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIlBhZ2VOb3RGb3VuZDo0NjozMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIHctNSBoLTUgcm91bmRlZC1mdWxsIGJnLW9yYW5nZS0xMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbXQtMC41XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGRhdGEtc291cmNlLWxvY2F0aW9uPVwiUGFnZU5vdEZvdW5kOjQ3OjM2XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctMiBoLTIgcm91bmRlZC1mdWxsIGJnLW9yYW5nZS00MDBcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJQYWdlTm90Rm91bmQ6NDk6MzJcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1sZWZ0IHNwYWNlLXktMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgZGF0YS1zb3VyY2UtbG9jYXRpb249XCJQYWdlTm90Rm91bmQ6NTA6MzZcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCIgY2xhc3NOYW1lPVwidGV4dC1zbSBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTcwMFwiPkFkbWluIE5vdGU8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIlBhZ2VOb3RGb3VuZDo1MTozNlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtc2xhdGUtNjAwIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgY291bGQgbWVhbiB0aGF0IHRoZSBBSSBoYXNuJ3QgaW1wbGVtZW50ZWQgdGhpcyBwYWdlIHlldC4gQXNrIGl0IHRvIGltcGxlbWVudCBpdCBpbiB0aGUgY2hhdC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7LyogQWN0aW9uIEJ1dHRvbiAqL31cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIlBhZ2VOb3RGb3VuZDo2MDoyMFwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwidHJ1ZVwiIGNsYXNzTmFtZT1cInB0LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gZGF0YS1zb3VyY2UtbG9jYXRpb249XCJQYWdlTm90Rm91bmQ6NjE6MjRcIiBkYXRhLWR5bmFtaWMtY29udGVudD1cImZhbHNlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIHB4LTQgcHktMiB0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNzAwIGJnLXdoaXRlIGJvcmRlciBib3JkZXItc2xhdGUtMjAwIHJvdW5kZWQtbGcgaG92ZXI6Ymctc2xhdGUtNTAgaG92ZXI6Ym9yZGVyLXNsYXRlLTMwMCB0cmFuc2l0aW9uLWNvbG9ycyBkdXJhdGlvbi0yMDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLW9mZnNldC0yIGZvY3VzOnJpbmctc2xhdGUtNTAwXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGRhdGEtc291cmNlLWxvY2F0aW9uPVwiUGFnZU5vdEZvdW5kOjY1OjI4XCIgZGF0YS1keW5hbWljLWNvbnRlbnQ9XCJmYWxzZVwiIGNsYXNzTmFtZT1cInctNCBoLTQgbXItMlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkYXRhLXNvdXJjZS1sb2NhdGlvbj1cIlBhZ2VOb3RGb3VuZDo2NjozMlwiIGRhdGEtZHluYW1pYy1jb250ZW50PVwiZmFsc2VcIiBzdHJva2VMaW5lY2FwPVwicm91bmRcIiBzdHJva2VMaW5lam9pbj1cInJvdW5kXCIgc3Ryb2tlV2lkdGg9ezJ9IGQ9XCJNMyAxMmwyLTJtMCAwbDctNyA3IDdNNSAxMHYxMGExIDEgMCAwMDEgMWgzbTEwLTExbDIgMm0tMi0ydjEwYTEgMSAwIDAxLTEgMWgtM20tNiAwYTEgMSAwIDAwMS0xdi00YTEgMSAwIDAxMS0xaDJhMSAxIDAgMDExIDF2NGExIDEgMCAwMDEgMW0tNiAwaDZcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdvIEhvbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj4pO1xuXG59Il0sImZpbGUiOiIvYXBwL3NyYy9saWIvUGFnZU5vdEZvdW5kLmpzeCJ9