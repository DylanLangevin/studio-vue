import { client } from '../../sanityClient'
import { CandleCardProps } from '@/components/CandleCard.vue';

export const fetchCandles = async () => {

    try {
        const data = await client.fetch(`
            *[_type == "candle" && !(_id in path('drafts.**'))] {
                "id": _id,
                "slug": slug.current,
                "title": name,
                "img": imageUrl,
                "candleSizeWidth": size.width,
                "candleSizeHeight": size.height,
                scentPrice,
                colorPrice,
                weight,
                "showDesc": defined(desc),
                "candlePrice": price,
                "width": select(
                    defined(size.width) => size.width,
                    null
                ),
                "height": select(
                    defined(size.height) => size.height,
                    null
                )
            }
        `);

        const validatedData: CandleCardProps[] = data.map((item: any) => ({
            id: item.id,
            slug: item.slug,
            name: item.title,
            imageUrl: item.img,
            candleSizeWidth: item.candleSizeWidth,
            candleSizeHeight: item.candleSizeHeight,
            scentPrice: item.scentPrice,
            colorPrice: item.colorPrice,
            weight: item.weight,
            showDesc: item.showDesc,
            candlePrice: item.candlePrice,
            width: item.width,
            height: item.height
        }));

        return validatedData;
    } catch (error) {

        console.error('Erreur de chargement des bougies', error)
        return null;
    }
}

export const fetchCandleById = async (slug:string) => {

    try {

        const data = await client.fetch(`*[_type == "candle" && slug.current == $slug][0]`, { slug: slug.value });

        return data;
    } catch (error) {
        console.error('Erreur de chargement de la bougie', error);
        return null;
    }
}

// export const testCreate = async (document:any) => {
//     try {
//         const result = await client.create(document)
//         console.log('Document créé:', result)
//         return result
//     } catch (error) {
//         console.error('Erreur lors de la création:', error)
//     }
// }
