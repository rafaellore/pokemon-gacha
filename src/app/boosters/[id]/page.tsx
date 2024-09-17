import getCards from "@/actions/get-cards";
import Cards from "@/components/Cards/cards";
import { Suspense } from "react";
import Loading from "./loading";

interface BoosterPageParams {
  params: {
    id: string;
  };
};

export default async function BoosterPage({ params }: BoosterPageParams) {
  const { data } = await getCards(params.id);



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-32">
      <Suspense fallback={<Loading />}>
        {data && <Cards cards={data} />}
      </Suspense>
    </main>
  );
}
