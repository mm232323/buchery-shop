import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {  QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "../store/index";
import { queryClient } from "./util/http.ts";
const root = document.getElementById("root");
ReactDOM.createRoot(root!).render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
    </Provider>
  </QueryClientProvider>
);
