import { CardSet } from "./get-sets";
import apiError from "./utils/api-error";

export interface PokemonCard {
  id: string; // Identificador único da carta
  name: string; // Nome do Pokémon
  supertype: string; // Supertipo, como "Pokémon", "Trainer", "Energy"
  subtypes: string[]; // Subtipos, como "Basic", "Stage 1", "Stage 2"
  hp?: string; // Pontos de vida (HP) do Pokémon
  types?: string[]; // Tipos de energia associados, como "Fire", "Water"
  evolvesFrom?: string; // Nome do Pokémon do qual este evolui
  abilities?: string[]; // Lista de habilidades especiais da carta
  attacks?: string[]; // Lista de ataques disponíveis na carta
  weaknesses?: string[]; // Lista de fraquezas do Pokémon
  resistances?: string[]; // Lista de resistências do Pokémon
  retreatCost?: string[]; // Custo de recuo da carta
  set: CardSet; // Informações sobre o set ao qual a carta pertence
  number: string; // Número da carta dentro do set
  artist: string; // Artista que ilustrou a carta
  rarity: string; // Raridade da carta, como "Common", "Uncommon", "Rare"
  flavorText?: string; // Texto flavor, se disponível
  nationalPokedexNumbers: number[]; // Números da Pokédex nacional
  legalities: string[]; // Legalidade da carta em diferentes formatos de jogo
  images: {
    small: string; // URL da imagem pequena da carta
    large: string; // URL da imagem grande da carta
  }; // URLs das imagens da carta
}

const API_URL = "https://api.pokemontcg.io/v2/cards";

async function getCardsByRarity(rarity: string, count: number) {
  const response = await fetch(`${API_URL}?q=rarity:${rarity}`, {
    method: "GET",
    headers: {
      "X-Api-Key": process.env.NEXT_PUBLIC_POKEMONTCG_API_KEY,
    } as HeadersInit,
  });

  const data = await response.json();

  const cards = data.data as PokemonCard[];

  // Randomiza e seleciona 'count' cartas
  return cards.sort(() => 0.5 - Math.random()).slice(0, count);
}

export default async function getCards(setId: string) {
  try {
    // Função auxiliar para fazer a requisição e retornar cartas por raridade
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

      // Randomizar e selecionar 'count' cartas
      return cards.sort(() => 0.5 - Math.random()).slice(0, count);
    };

    // Buscar cartas conforme as raridades típicas de um booster pack
    const rareCards = await fetchCardsByRarity("Rare", 1);
    const uncommonCards = await fetchCardsByRarity("Uncommon", 3);
    const commonCards = await fetchCardsByRarity("Common", 5);

    // Concatenar todas as cartas para formar o booster pack
    // Ajustar a ordem: comum -> incomum -> raro
    const boosterPack = [...commonCards, ...uncommonCards, ...rareCards];

    return { data: boosterPack, ok: true, error: "" };
  } catch (error) {
    return apiError(error);
  }
}
