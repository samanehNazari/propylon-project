import { render, screen } from "@testing-library/react";
import { App } from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
const Renderer = () => (
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);

test("App", () => {
  render(<Renderer />);
  const linkElement = screen.getByTestId("app-container");
  expect(linkElement).toBeInTheDocument();
});
