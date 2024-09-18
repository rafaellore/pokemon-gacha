import apiError from "./utils/api-error";

export interface CardSet {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: Record<string, string>;
  ptcgoCode: string;
  releaseDate: string;
  updatedAt: string;
  images: Record<string, string>;
}

export default async function getSets() {
  try {
    const response = await fetch(`https://api.pokemontcg.io/v2/sets`, {
      method: "GET",
      headers: {
        "X-Api-Key": process.env.NEXT_PUBLIC_POKEMONTCG_API_KEY,
      } as HeadersInit,
    });

    if (!response.ok) throw new Error(`Error when fetching sets.`);

    const data = await response.json();

    const sets = data.data as CardSet[];

    return { data: sets, ok: true, error: "" };
  } catch (error) {
    return apiError(error);
  }
}
