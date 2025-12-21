'use client';

import { useEffect } from 'react';

export default function ImageProtection() {
  useEffect(() => {
    // 우클릭 방지
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG' || target.closest('img')) {
        e.preventDefault();
        return false;
      }
    };

    // 드래그 방지
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'IMG') {
        e.preventDefault();
        return false;
      }
    };

    // 키보드 단축키 방지 (Ctrl+S, Ctrl+U, Ctrl+Shift+I 등)
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+S (저장)
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault();
        return false;
      }
      // Ctrl+U (소스 보기)
      if (e.ctrlKey && e.key === 'u') {
        e.preventDefault();
        return false;
      }
      // F12 (개발자 도구) - 선택적
      // if (e.key === 'F12') {
      //   e.preventDefault();
      //   return false;
      // }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return null;
}
