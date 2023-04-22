import React, { useState, useEffect } from "react";
import { searchUsers } from "../Services/AppService";

export const useArtists = (filters = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [artists, setArtists] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (filters) => {
    try {
      setIsLoading(true);
      const result = await searchUsers(filters);
      setArtists(result);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleSearch(filters);
  }, [filters]);

  return { artists, isLoading, error };
};
