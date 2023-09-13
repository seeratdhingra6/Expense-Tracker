import { useState } from "react";
import FullHistory from "./components/History/partials/FullHistory";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage/Index";

function App() {
  const [transactions, setTransactions] = useState([]);
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <HomePage
          transactions={transactions}
          setTransactions={setTransactions}
        />
      ),
    },
    {
      path: "/transactions",
      element: <FullHistory transactions={transactions} />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
