const {ChainId, Fetcher} = require('@uniswap/sdk');

const chainId = ChainId.MAINNET;
const tokenAddress = '0x6B175474E89094C44Da98b954EedeAC495271d0F';

const init = async()=> {
    const dai = await Fetcher.fetchTokenData(chainId, tokenAddress);
    console.log(dai, 'dai')
}
