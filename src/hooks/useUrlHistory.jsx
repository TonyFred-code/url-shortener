import { useState } from "react";
import { HISTORY_STORAGE_KEY } from "../constants/history.js";

function getDefaultHistory() {
  const rawStored = localStorage.getItem(HISTORY_STORAGE_KEY);

  try {
    const stored = JSON.parse(rawStored);

    if (!stored || !Array.isArray(stored)) {
      localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify([]));
      return [];
    }

    return stored;
  } catch {
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify([]));
    return [];
  }
}

export default function useUrlHistory() {
  const [history, setHistory] = useState(getDefaultHistory);

  function updateHistory(longUrl, shortUrl) {
    setHistory((prev) => {
      if (!prev.every((linkItem) => linkItem.longUrl !== longUrl)) return prev;

      const newHistory = prev.concat({ longUrl, shortUrl });
      localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(newHistory));
      return newHistory;
    });
  }

  return { updateHistory, history };
}
