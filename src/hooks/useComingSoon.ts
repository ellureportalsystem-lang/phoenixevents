import { useState } from "react";
import { BLOCKED_PAGES } from "@/constants/routes";

export const useComingSoon = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const isBlocked = (path: string) => {
    return BLOCKED_PAGES.includes(path);
  };

  const handleBlockedClick = (e: React.MouseEvent, path: string) => {
    if (isBlocked(path)) {
      e.preventDefault();
      setShowComingSoon(true);
    }
  };

  return {
    isBlocked,
    handleBlockedClick,
    showComingSoon,
    setShowComingSoon,
  };
};
