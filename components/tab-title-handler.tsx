'use client';

import { useEffect } from 'react';

export default function TabTitleHandler() {
  useEffect(() => {
    const originalTitle = document.title;
    
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.title = 'No te valla 🤧💔!! ';
      } else {
        document.title = originalTitle;
      }
    };

    // Configurar el evento de cambio de visibilidad
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Configurar el evento beforeunload
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
      document.title = 'No te vallas 🤧💔!! ';
      return '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Limpiar los event listeners al desmontar el componente
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.title = originalTitle; // Restaurar el título original
    };
  }, []);

  return null; // Este componente no renderiza nada
}
