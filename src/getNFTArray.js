import * as web3 from '@solana/web3.js';
import {
    resolveToWalletAddress,
    getParsedNftAccountsByOwner,
} from "@nfteyez/sol-rayz";

const getNFTArray = async (publicKey) => {
    let connection = new web3.Connection(web3.clusterApiUrl('devnet'), 'confirmed');
    const publicAddress = await resolveToWalletAddress({
        text: publicKey
    });

    const nftArray = await getParsedNftAccountsByOwner({
        publicAddress,
        connection,
    });

    let resArray = [];
    await Promise.all(nftArray.map(async nft => {
        const response = await fetch(nft.data.uri);
        const metadata = await response.json();

        const nftObj = {
            name: nft.data.name,
            imgURL: metadata.image,
        };

        // TODO: filter array here based on skins that include our own metadata only
        // if (metadata.game !== "metaspacewars") {
        //     continue;
        // }
        resArray.push(nftObj);
    }));

    return resArray;
};

export { getNFTArray };