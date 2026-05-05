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

export default function useURLHistory() {
  const [history, setHistory] = useState(getDefaultHistory);

  function updateHistory(longUrl, shortUrl) {
    if (!history.every((linkItem) => linkItem.longUrl !== longUrl)) return;

    const newHistory = history.concat({ longUrl, shortUrl });
    setHistory(newHistory);
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(newHistory));
  }

  return { updateHistory, history };
}
