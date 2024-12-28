'use client';

import { useState } from 'react';

export function MainKMap() {
  const [variables, setVariables] = useState<number>(2);
  //   const [truthTable, setTruthTable] = useState<boolean[]>([]);

  return (
    <>
      {/* Controles de variáveis */}
      <div className="p-4 border-b">
        <label className="mr-4">Número de variáveis:</label>
        <select 
          value={variables} 
          onChange={(e) => setVariables(Number(e.target.value))}
          className="border p-1 rounded"
        >
          <option value={2}>2 variáveis</option>
          <option value={3}>3 variáveis</option>
          <option value={4}>4 variáveis</option>
        </select>
      </div>

      {/* Área principal com tabela verdade e resultado */}
      <div className="flex-1 flex gap-8 p-4">
        {/* Tabela Verdade */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Tabela Verdade</h2>
          <div className="border rounded p-4">
            {/* Aqui virá a implementação da tabela verdade */}
            <p>Tabela com {variables} variáveis</p>
          </div>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
            Simplificar
          </button>
        </div>

        {/* Resultado do Mapa-K */}
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-4">Mapa de Karnaugh</h2>
          <div className="border rounded p-4">
            {/* Aqui virá a implementação do mapa-k */}
            <p>Resultado do mapa-k</p>
          </div>
        </div>
      </div>
    </>
  );
} 