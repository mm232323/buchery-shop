import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Suspense } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/http.ts";
import Loading from "./pages/loadingPage/Loading.tsx";
const root = document.getElementById("root");
ReactDOM.createRoot(root!).render(
  <QueryClientProvider client={queryClient}>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </QueryClientProvider>
);
