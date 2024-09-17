import getSets, { CardSet } from "@/actions/get-sets";
import Sets from "@/components/Sets/Sets";

// A função `SetsPage` agora será um componente assíncrono
export default async function SetsPage() {
  const { data } = await getSets();

  if (!data) {
    // Retorna 404 se não houver dados
    return <div>Página não encontrada</div>;
  }

  return (
    <div>
      <Sets sets={data} />
    </div>
  );
}

// Revalida a cada 86400 segundos (1 dia)
export const revalidate = 86400;
