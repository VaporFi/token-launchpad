import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { addresses } from "../config";

const func: DeployFunction = async function ({
  getNamedAccounts,
  deployments,
  network,
}: HardhatRuntimeEnvironment) {
  const chainId = network.config.chainId;

  if (!chainId) {
    throw new Error("ChainId not found");
  }

  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();
  await deploy("MemeFactory", {
    from: deployer,
    args: [
      addresses.teamMultiSig[chainId],
      addresses.vaporDexRouter[chainId],
      addresses.stratosphereNFT[chainId],
      [
        addresses.vaporDexAggregatorRouter[chainId],
        addresses.vaporDexAggregatorAdapter[chainId],
      ],
    ],
    log: true,
  });
};
export default func;
