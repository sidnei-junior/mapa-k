'use client';

import { MainKMap } from './MainKMap';
import { HorizontalAdSpaces } from '../HorizontalAdSpaces';
import { VerticalAdSpace } from '../VerticalAdSpace';

export function KMap() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="min-h-screen p-4 bg-gray-100 flex">
        <div className="flex-1 mx-4 bg-white flex flex-col">
          <MainKMap />
          <HorizontalAdSpaces />
        </div>
        <VerticalAdSpace />
      </div>
    </div>
  );
} 