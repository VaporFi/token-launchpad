export const addresses: {
  [key: string]: {
    [chainId: number]: string;
  };
} = {
  teamMultiSig: {
    43_113: "0xCf00c1ac6D26d52054ec89bE6e093F2E270D61d9",
    43_114: "0x6769DB4e3E94A63089f258B9500e0695586315bA",
  },
  vaporDexRouter: {
    43_113: "0x19C0FC4562A4b76F27f86c676eF5a7e38D12a20d",
    43_114: "0x19C0FC4562A4b76F27f86c676eF5a7e38D12a20d",
  },
  stratosphereNFT: {
    43_113: "0x65eB37AeB1F2a9cE39556F80044607dD969b0336",
    43_114: "0x08e287adCf9BF6773a87e1a278aa9042BEF44b60",
  },
  vaporDexAggregatorRouter: {
    43_113: "0x184eaB8D97cE56Cf77e2571e8f1D6F697076a831",
    43_114: "0xDef9ee39FD82ee57a1b789Bc877E2Cbd88fd5caE",
  },
  vaporDexAggregatorAdapter: {
    43_113: "0x3F1aF4D92c91511A0BCe4B21bc256bF63bcab470",
    43_114: "0x01e5C45cB25E30860c2Fb80369A9C27628911a2b",
  },
} as const;
