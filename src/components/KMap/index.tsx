'use client';

import { HorizontalAdSpaces } from '../HorizontalAdSpaces';
import { VerticalAdSpace } from '../VerticalAdSpace';

export function KMap() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Área principal com mapa-k e espaços para ads */}
      <div className="min-h-screen p-4 bg-gray-100 flex">
        {/* Área central para o mapa-k */}
        <div className="flex-1 mx-4 bg-white flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <span className="text-2xl font-bold">Main - Mapa-K</span>
          </div>
          <HorizontalAdSpaces />
        </div>
        <VerticalAdSpace />
      </div>
    </div>
  );
} 