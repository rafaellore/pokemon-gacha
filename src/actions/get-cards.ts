import { CardSet } from "./get-sets";
import apiError from "./utils/api-error";

export interface PokemonCard {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  hp?: string;
  types?: string[];
  evolvesFrom?: string;
  abilities?: string[];
  attacks?: string[];
  weaknesses?: string[];
  resistances?: string[];
  retreatCost?: string[];
  set: CardSet;
  number: string;
  artist: string;
  rarity: string;
  flavorText?: string;
  nationalPokedexNumbers: number[];
  legalities: string[];
  images: {
    small: string;
    large: string;
  };
}

export default async function getCards(setId: string) {
  try {
    const fetchCardsByRarity = async (rarity: string, count: number) => {
      const response = await fetch(
        `https://api.pokemontcg.io/v2/cards?q=set.id:${setId}+rarity:${rarity}`,
        {
          method: "GET",
          headers: {
            "X-Api-Key": process.env.NEXT_PUBLIC_POKEMONTCG_API_KEY,
          } as HeadersInit,
        }
      );

      if (!response.ok)
        throw new Error(
          `Erro ao pegar cartas de raridade: ${rarity} para o set: ${setId}.`
        );

      const data = await response.json();
      const cards = data.data as PokemonCard[];

      return cards.sort(() => 0.5 - Math.random()).slice(0, count);
    };

    const commonCards = await fetchCardsByRarity("Common", 3);

    const rareCards = await fetchCardsByRarity(
      "Rare",
      commonCards.length === 0 ? 7 : 1
    );

    const uncommonCards = await fetchCardsByRarity("Uncommon", 2);

    const boosterPack = [...commonCards, ...uncommonCards, ...rareCards];

    return { data: boosterPack, ok: true, error: "" };
  } catch (error) {
    return apiError(error);
  }
}
