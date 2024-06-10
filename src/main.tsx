import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { lazy, Suspense } from "react";
import {  QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "../store/index";
import { queryClient } from "./util/http.ts";
import { SpeedInsights } from "@vercel/speed-insights/next"
const Loading = lazy(() => import('./loadingPage/Loading.tsx'))
const root = document.getElementById("root");
ReactDOM.createRoot(root!).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <Suspense fallback={<Loading />}>
      <App />
      <SpeedInsights />
    </Suspense>
    </Provider>
  </QueryClientProvider>
);
