import { MenuPosition } from "@/types/types";
import { MouseEvent, useState } from "react";

export default function useMenu() {
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [menuPosition, setMenuPosition] = useState<MenuPosition>({
    top: 0,
    left: 0,
  });

  function handleBoxClick(e: MouseEvent<HTMLDivElement>, boxName) {
    const { clientX, clientY } = e;
    console.log(`
      clientX: ${e.clientX}
      clientY: ${e.clientY}
      `);
    setMenuPosition({ top: clientY, left: clientX });
    setMenuVisible(true);
    console.log(boxName);
  }

  function handleMenuClose() {
    setMenuVisible(false);
  }

  return {
    menuVisible,
    handleBoxClick,
    handleMenuClose,
    menuPosition,
  };
}
