import React, { useState, useEffect } from "react";
import { getUserDetails } from "../Services/AppService";

export const useArtistDetail = (id) => {
  const [isLoading, setIsLoading] = useState(false);
  const [artist, setArtist] = useState(null);
  const [error, setError] = useState(null);

  const handleFetch = async (id) => {
    try {
      setIsLoading(true);
      const result = await getUserDetails(id);
      console.log("results", result);
      setArtist(result);
    } catch (error) {
      console.log("error", error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!id) {
      return;
    }
    handleFetch(id);
  }, [id]);

  return { artist, isLoading, error };
};
