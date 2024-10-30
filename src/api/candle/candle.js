import { client } from '../../sanityClient'

export const fetchCandles = async () => {

    try {

        const data = await client.fetch(`*[_type == "candle"]`)

        return data;
    } catch (error) {

        console.error('Erreur de chargement des bougies', error)
        return null;
    }
}

export const fetchCandleById = async (id) => {

    try {
        const data = await client.fetch(`*[_type == "candle" && candleId == $id][0]`, { id: id });

        return data;
    } catch (error) {
        console.error('Erreur de chargement de la bougie', error);
        return null;
    }
}
