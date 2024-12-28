export function TechnicalContent() {
  return (
    <section className="min-h-screen p-8 bg-white border-t">
      <h2 className="text-2xl font-bold mb-6">Explicação Técnica: Mapa de Karnaugh</h2>
      
      <div className="space-y-6 text-gray-700">
        <div>
          <h3 className="text-xl font-semibold mb-3">O que é o Mapa de Karnaugh?</h3>
          <p className="leading-relaxed">
            O Mapa de Karnaugh é uma técnica desenvolvida para simplificar expressões lógicas e converter tabelas verdade em circuitos lógicos de forma simples e metódica. 
            É especialmente útil para problemas com até quatro variáveis de entrada, tornando-se mais complexo acima disso.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Organização do Mapa</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>As variáveis são distribuídas com as mais significativas (MSB) na vertical e as menos significativas (LSB) na horizontal</li>
            <li>A diferença entre linhas e colunas adjacentes deve ser de apenas uma variável</li>
            <li>Cada quadrado do mapa corresponde a uma linha da tabela verdade</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Processo de Simplificação</h3>
          <ol className="list-decimal pl-6 space-y-2">
            <li>Construir o mapa e preencher com 1s e 0s conforme a tabela verdade</li>
            <li>Agrupar 1s adjacentes (podem ser grupos de 2, 4 ou 8 quadros)</li>
            <li>Usar o menor número possível de agrupamentos</li>
            <li>Eliminar as variáveis redundantes e combinar os termos com OR</li>
          </ol>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-3">Tipos de Agrupamentos</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <ul className="space-y-2">
              <li>• 2 quadros: elimina uma variável</li>
              <li>• 4 quadros: elimina duas variáveis</li>
              <li>• 8 quadros: elimina três variáveis</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
} 