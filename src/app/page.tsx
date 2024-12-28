export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Área principal com mapa-k e espaços para ads */}
      <div className="min-h-screen p-4 bg-gray-100 flex">
        {/* Área central para o mapa-k */}
        <div className="flex-1 mx-4 bg-white flex flex-col">
          <div className="flex-1 flex items-center justify-center">
            <span className="text-2xl font-bold">Main - Mapa-K</span>
          </div>
          <div className="h-[160px] flex gap-4 m-4">
            <div className="flex-1 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Ad Space</span>
            </div>
            <div className="flex-1 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Ad Space</span>
            </div>
            <div className="flex-1 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Ad Space</span>
            </div>
          </div>
        </div>

        {/* Espaço para ad direito */}
        <div className="w-[160px] bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">Ad Space</span>
        </div>
      </div>

      {/* Área de explicação técnica */}
      <div className="p-8 bg-white border-t">
        <h2 className="text-xl font-bold mb-4">Explicação Técnica</h2>
        <div className="text-gray-700">
          Conteúdo - Aqui irá a explicação técnica sobre o que é o Mapa-K
        </div>
      </div>
    </div>
  );
}