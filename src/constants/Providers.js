import Config from 'react-native-config';

const ethers = require('ethers');

const getNetworkProvider = async (network) => {
  const provider = await new ethers.providers.InfuraProvider(network, Config.INFURA_API_KEY);
  return provider;
};
//Where to provide INFURA_API_KEY = "5360ec7f835141b0bfa74eb029b61425"
export default getNetworkProvider;
