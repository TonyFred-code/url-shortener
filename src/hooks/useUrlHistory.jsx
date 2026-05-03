import { useState } from "react";
import { HISTORY_STORAGE_KEY } from "../constants/history.js";

function getDefaultHistory() {
  const stored = JSON.parse(localStorage.getItem(HISTORY_STORAGE_KEY));

  if (!stored || !Array.isArray(stored)) {
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify([]));
    return [];
  }

  return stored;
}

export default function useURLHistory() {
  const [history, setHistory] = useState(getDefaultHistory());

  function updateHistory(longUrl, shortUrl) {
    if (!history.every((linkItem) => linkItem.longUrl !== longUrl)) return;

    const newHistory = history.concat({ longUrl, shortUrl });
    setHistory(newHistory);
    localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(newHistory));
  }

  return { updateHistory, history };
}
