---
sidebar_position: 1
---

# Getting Started

> copy read me
>
> additional page for OpenSea AI Key
> workflow on how to file issues
> where to find support

---

## Installation

```bash
# install peer dependencies if not already in your project
npm install @solana/spl-token @solana/web3.js

npm install @audius/fetch-nft
```

## Basic Usage

```ts
import { FetchNFTClient } from "@audius/fetch-nft";

// Initialize fetch client
const fetchClient = new FetchNFTClient();

// Fetching all collectibles for the given wallets
fetchClient
  .getCollectibles({
    ethWallets: ["0x5A8443f456f490dceeAD0922B0Cc89AFd598cec9"],
    solWallets: ["GrWNH9qfwrvoCEoTm65hmnSh4z3CD96SfhtfQY6ZKUfY"],
  })
  .then((res) => console.log(res));
```

By default, fetch-nft uses the public Opensea API and the Solana mainnet RPC endpoint. To configure API keys and endpoints, see [Usage With Configs](#usage-with-configs).
