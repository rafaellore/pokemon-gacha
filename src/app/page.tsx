import getSets from "@/actions/get-sets";
import Sets from "@/components/Sets/Sets";

export default async function SetsPage() {
  const { data } = await getSets();

  if (!data) {
    return <div>Página não encontrada</div>;
  }

  return (
    <div>
      <Sets sets={data} />
    </div>
  );
}

export const revalidate = 86400;