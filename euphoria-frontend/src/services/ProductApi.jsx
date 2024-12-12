import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext();

export default function ProductApi({ children }) {
  const [data, setData] = useState([]);  // State to store product data
  const [loading, setLoading] = useState(true);  // State to manage loading state
  const [error, setError] = useState(null);  // State to manage error message

  useEffect(() => {
    // Fetching product data from the API without authentication token
    axios
      .get("http://127.0.0.1:8000/api/v1/products/")  // Endpoint to get products
      .then((response) => {
        setData(response.data.data);  // Assuming the response contains a 'data' field for products
        setLoading(false);  // Set loading to false after data is fetched
      })
      .catch((err) => {
        console.error("Error fetching data:", err.response ? err.response.data : err.message);
        setError(err.response ? err.response.data : "Failed to fetch data");
        setLoading(false);  // Set loading to false if there's an error
      });
  }, []);  // Empty dependency array to fetch data once when the component mounts

  return (
    <DataContext.Provider value={{ data, loading, error }}>
      {children}  {/* Render children wrapped by the context provider */}
    </DataContext.Provider>
  );
}
