import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/lib/NavigationTracker.jsx");import * as RefreshRuntime from "/@react-refresh";
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
  window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/app/src/lib/NavigationTracker.jsx");
  window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;
}
var _s = $RefreshSig$();
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=512b7d5e"; const useEffect = __vite__cjsImport2_react["useEffect"];
import { useLocation } from "/node_modules/.vite/deps/react-router-dom.js?v=5d62e1b7";
import { useAuth } from "/src/lib/AuthContext.jsx";
import { base44 } from "/src/api/base44Client.js";
import { pagesConfig } from "/src/pages.config.js";
export default function NavigationTracker() {
  _s();
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const { Pages, mainPage } = pagesConfig;
  const mainPageKey = mainPage ?? Object.keys(Pages)[0];
  useEffect(() => {
    const pathname = location.pathname;
    let pageName;
    if (pathname === "/" || pathname === "") {
      pageName = mainPageKey;
    } else {
      const pathSegment = pathname.replace(/^\//, "").split("/")[0];
      const pageKeys = Object.keys(Pages);
      const matchedKey = pageKeys.find(
        (key) => key.toLowerCase() === pathSegment.toLowerCase()
      );
      pageName = matchedKey || null;
    }
    if (isAuthenticated && pageName) {
      base44.appLogs.logUserInApp(pageName).catch(() => {
      });
    }
  }, [location, isAuthenticated, Pages, mainPageKey]);
  return null;
}
_s(NavigationTracker, "Gc8maRYtzOu552RrpjVx0DXh5KA=", false, function() {
  return [useLocation, useAuth];
});
_c = NavigationTracker;
var _c;
$RefreshReg$(_c, "NavigationTracker");
if (import.meta.hot && !inWebWorker) {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
if (import.meta.hot && !inWebWorker) {
  RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
    RefreshRuntime.registerExportsForReactRefresh("/app/src/lib/NavigationTracker.jsx", currentExports);
    import.meta.hot.accept((nextExports) => {
      if (!nextExports) return;
      const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/app/src/lib/NavigationTracker.jsx", currentExports, nextExports);
      if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
    });
  });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLGlCQUFpQjtBQUMxQixTQUFTQyxtQkFBbUI7QUFDNUIsU0FBU0MsZUFBZTtBQUN4QixTQUFTQyxjQUFjO0FBQ3ZCLFNBQVNDLG1CQUFtQjtBQUU1Qix3QkFBd0JDLG9CQUFvQjtBQUFBQyxLQUFBO0FBQzFDLFFBQU1DLFdBQVdOLFlBQVk7QUFDN0IsUUFBTSxFQUFFTyxnQkFBZ0IsSUFBSU4sUUFBUTtBQUNwQyxRQUFNLEVBQUVPLE9BQU9DLFNBQVMsSUFBSU47QUFDNUIsUUFBTU8sY0FBY0QsWUFBWUUsT0FBT0MsS0FBS0osS0FBSyxFQUFFLENBQUM7QUFHcERULFlBQVUsTUFBTTtBQUVkLFVBQU1jLFdBQVdQLFNBQVNPO0FBQzFCLFFBQUlDO0FBRUosUUFBSUQsYUFBYSxPQUFPQSxhQUFhLElBQUk7QUFDdkNDLGlCQUFXSjtBQUFBQSxJQUNiLE9BQU87QUFFTCxZQUFNSyxjQUFjRixTQUFTRyxRQUFRLE9BQU8sRUFBRSxFQUFFQyxNQUFNLEdBQUcsRUFBRSxDQUFDO0FBRzVELFlBQU1DLFdBQVdQLE9BQU9DLEtBQUtKLEtBQUs7QUFDbEMsWUFBTVcsYUFBYUQsU0FBU0U7QUFBQUEsUUFDMUIsQ0FBQ0MsUUFBUUEsSUFBSUMsWUFBWSxNQUFNUCxZQUFZTyxZQUFZO0FBQUEsTUFDekQ7QUFFQVIsaUJBQVdLLGNBQWM7QUFBQSxJQUMzQjtBQUVBLFFBQUlaLG1CQUFtQk8sVUFBVTtBQUMvQlosYUFBT3FCLFFBQVFDLGFBQWFWLFFBQVEsRUFBRVcsTUFBTSxNQUFNO0FBQUEsTUFFaEQsQ0FDRDtBQUFBLElBQUU7QUFBQSxFQUNQLEdBQUcsQ0FBQ25CLFVBQVVDLGlCQUFpQkMsT0FBT0UsV0FBVyxDQUFDO0FBRWxELFNBQU87QUFDVDtBQUFDTCxHQW5DdUJELG1CQUFpQjtBQUFBLFVBQ3RCSixhQUNXQyxPQUFPO0FBQUE7QUFBQXlCLEtBRmJ0QjtBQUFpQixJQUFBc0I7QUFBQUMsYUFBQUQsSUFBQSIsIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZUxvY2F0aW9uIiwidXNlQXV0aCIsImJhc2U0NCIsInBhZ2VzQ29uZmlnIiwiTmF2aWdhdGlvblRyYWNrZXIiLCJfcyIsImxvY2F0aW9uIiwiaXNBdXRoZW50aWNhdGVkIiwiUGFnZXMiLCJtYWluUGFnZSIsIm1haW5QYWdlS2V5IiwiT2JqZWN0Iiwia2V5cyIsInBhdGhuYW1lIiwicGFnZU5hbWUiLCJwYXRoU2VnbWVudCIsInJlcGxhY2UiLCJzcGxpdCIsInBhZ2VLZXlzIiwibWF0Y2hlZEtleSIsImZpbmQiLCJrZXkiLCJ0b0xvd2VyQ2FzZSIsImFwcExvZ3MiLCJsb2dVc2VySW5BcHAiLCJjYXRjaCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIk5hdmlnYXRpb25UcmFja2VyLmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4vQXV0aENvbnRleHQnO1xuaW1wb3J0IHsgYmFzZTQ0IH0gZnJvbSAnQC9hcGkvYmFzZTQ0Q2xpZW50JztcbmltcG9ydCB7IHBhZ2VzQ29uZmlnIH0gZnJvbSAnQC9wYWdlcy5jb25maWcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uVHJhY2tlcigpIHtcbiAgY29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuICBjb25zdCB7IGlzQXV0aGVudGljYXRlZCB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCB7IFBhZ2VzLCBtYWluUGFnZSB9ID0gcGFnZXNDb25maWc7XG4gIGNvbnN0IG1haW5QYWdlS2V5ID0gbWFpblBhZ2UgPz8gT2JqZWN0LmtleXMoUGFnZXMpWzBdO1xuXG4gIC8vIExvZyB1c2VyIGFjdGl2aXR5IHdoZW4gbmF2aWdhdGluZyB0byBhIHBhZ2VcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBFeHRyYWN0IHBhZ2UgbmFtZSBmcm9tIHBhdGhuYW1lXG4gICAgY29uc3QgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZTtcbiAgICBsZXQgcGFnZU5hbWU7XG5cbiAgICBpZiAocGF0aG5hbWUgPT09ICcvJyB8fCBwYXRobmFtZSA9PT0gJycpIHtcbiAgICAgIHBhZ2VOYW1lID0gbWFpblBhZ2VLZXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlbW92ZSBsZWFkaW5nIHNsYXNoIGFuZCBnZXQgdGhlIGZpcnN0IHNlZ21lbnRcbiAgICAgIGNvbnN0IHBhdGhTZWdtZW50ID0gcGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sICcnKS5zcGxpdCgnLycpWzBdO1xuXG4gICAgICAvLyBUcnkgY2FzZS1pbnNlbnNpdGl2ZSBsb29rdXAgaW4gUGFnZXMgY29uZmlnXG4gICAgICBjb25zdCBwYWdlS2V5cyA9IE9iamVjdC5rZXlzKFBhZ2VzKTtcbiAgICAgIGNvbnN0IG1hdGNoZWRLZXkgPSBwYWdlS2V5cy5maW5kKFxuICAgICAgICAoa2V5KSA9PiBrZXkudG9Mb3dlckNhc2UoKSA9PT0gcGF0aFNlZ21lbnQudG9Mb3dlckNhc2UoKVxuICAgICAgKTtcblxuICAgICAgcGFnZU5hbWUgPSBtYXRjaGVkS2V5IHx8IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKGlzQXV0aGVudGljYXRlZCAmJiBwYWdlTmFtZSkge1xuICAgICAgYmFzZTQ0LmFwcExvZ3MubG9nVXNlckluQXBwKHBhZ2VOYW1lKS5jYXRjaCgoKSA9PiB7XG5cbiAgICAgICAgLy8gU2lsZW50bHkgZmFpbCAtIGxvZ2dpbmcgc2hvdWxkbid0IGJyZWFrIHRoZSBhcHBcbiAgICAgIH0pO31cbiAgfSwgW2xvY2F0aW9uLCBpc0F1dGhlbnRpY2F0ZWQsIFBhZ2VzLCBtYWluUGFnZUtleV0pO1xuXG4gIHJldHVybiBudWxsO1xufSJdLCJmaWxlIjoiL2FwcC9zcmMvbGliL05hdmlnYXRpb25UcmFja2VyLmpzeCJ9