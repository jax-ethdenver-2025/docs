---
title: Introduction
---

## What is Jax?

Jax is a decentralized storage protocol that takes a fundamentally different approach to solutions such as Arweave or Filecoin:
- Jax allows any Ethereum developer to integrate the protocol into their applications and smart contracts without bridging liquidity or fragmenting trust across chains.
- Incentives are completely decoupled from storage, allowing developers to fully customize their incentive models. No more hand-wavy perma-storage or vanilla bounty-collateral pairs. Layer on as much or as little DeFi as you want to power the distribution of your content.
- Participating as a storage provider on Jax requires no block building or collateral. Just spin up a node and start earning rewards!
- Data availability and retrievals are first class citizens of the protocol. No more worrying about whether or not you can get your data back from the network, we got you.

## What does Jax actually *do*?

At its core, Jax is a protocol for arriving at consensus over the behavior of peers in making content-addressed data available to other peers. This consensus is formed through a series of cryptographic challenges of the following form:

- peer `A` wants to gauge whether peer `B` is storing a piece of content-addressed data, `C`.
- peer `A` queries peer `B` for a zk-proof to that effect. This looks like a succinct merkelized proof of a single chunk of `C`.
- peer `B` may or may not respond to peer `A` with said proof within some time `T`.

At this point peer `A` can form an attestation to the effect that "`B` can (or cannot) prove to me that they have `C` within some time `T`". Peer `A` then can broadcast its attestation to other peers on the network that can then corroborate or challenge `A`'s assertion by also querying `B`. Note that `B` may or may not be a perfectly responsive peer (they may correctly respond to some peer `A`, but may drop the request of some other peer `A'`). However, over many interactions with `B` the network comes to consensus on whether or not `B` is making `C` available, and can assign a discrete score of `S` representing `B`'s behavior as peer.

We can further generalize this attestation across many peers who may be holding `C`. A peer set `A = [a_1, ..., a_n]` can each form local views of another peer set `B = [b_1, ..., b_m]`s aggregate ability to serve back successful responses for challenges over `C`. Members of `A` record their interactions and assign scores for peers in `B` to form a local view of the availability of `C` from peers in `B`. Let's call this set of local scores for a given peer `a`, `S = [s_1, ..., s_m]` and further require that `SUM(S) = 1`.

Peers in `A` then share their local views along with relevant records to other peers in `A`. Peers in `A` may then update their local scores in response, and further propagate their updated local scores to other peers in `A`. `A` eventually comes to consensus on a set of global scores `S_g` that represents an aggregated account of how well each peer in `B` is making `C` available to other peers.

Fundamentally, Jax works by implementing the process just described, and generates statements of the following form:

```
Within some window of time E, 
A has come to consensus over B's aggregate
ability to make C available, and can agree on a
discrete peer score s_b for each b in B
```

## Great ... so what?

The usefulness of the above statement is that it provides a trustless method of describing distributions from some treasury `T` that is meant to incentivize the availability of some piece of content `C`. That is, anyone can set up an arbitrary incentive structure to make some piece of content `C` available across an untrusted set of peers `B`, and Jax handles all the consensus and validation required to confirm that peers in `B` are actually serving `C` to the network, and provides a basis for peers in `B` to be rewarded for doing so. This pattern encourages peers to actively participate in the network in ways that contribute to the availability and retrievability of data. 

While a seemingly obscure concern, this actually has a number of interesting benefits when it comes to defining a decentralized storage protocol.

### Reputation and Stakeless Storage

**Reputation Through Behavior**: Jax builds trust profiles of peers based on their actual behavior over time. A peer's reputation emerges from consistent, verifiable actions rather than economic commitments.

**Stakeless Participation**: Peers are rewarded on the basis of their demonstrated ability to make data availability over time, without any long term commitments or lock-in on their part. There is no binary slashing condition for storage that would make staking make sense -- if you don't serve files, you just don't earn rewards. 

**Diverse Peer Sets**: Because there's no staking and no slashing mechanism for storage providers, there are basically no capital costs associated with providing storage space to the network and earning rewards. This means that pretty much anyone can run Jax without having to worry about up-front investment, up-time of their node, or other mundane concerns usually associated with participating in DePIn protocols. This allows the network to actually take advantage of the full-breadth of available storage space on any device, taking decentralized storage out of the data center and on to your mobile device.

### Availability 

**Availability as a First-Class Concern**: Jax directly measures and rewards data availability through its challenge system. This ensures that data isn't just being stored but is actually retrievable when needed.

**Verifiable Availability**: The global trust scores arrived at by Jax for a piece of content are also verifiable through auditing the records of interactions that peers report.

**No Secondary Market for Retrieval**: There's no need for a separate retrieval market because availability is built into the primary incentive structure. If you do not serve files as a storage provider, your rewards will be impacted.

### Your data, your incentives

**No more bounty hunting**: Storage contracts in Jax describe treasuries which are claimable by peers based on their demonstrated performance. You don't need to establish direct relationships with storage providers, commit to a set term, or lock up capital in order to make your files available on the network. If you create the right incentives, your data will propagate.

**Decoupled incentives**: Treasuries are just solidity contracts that can define their own:
- distribution schedules
- minimum service requirements
- payment tokens
- funding models
- etc.

Feel free to make your incentives as simple or complex as you want. If it can be described as a reward distribution, it can be deployed on Jax. Extend your treasuries to act as NFTs, minable tokens, or whatever else you can think of.

**Market-Driven Storage Allocation**: Resources naturally flow toward storing the most valued content. The network balances itself due to peers chasing down treasuries which align with their interests. Are there too few storage peers serving your content given the incentives in your treasury? Other peers will join the peer set and enhance availability. Are rewards too scant for a given treasury given the size of the peer set? Peers will leave in search of new opportunities.


**Permissionless Participation**: Feel like crowd-sourcing funds for your content? Make your treasury payable and allow any individual or DAO to participate in providing resources.

**You can do all of this, and more, with Jax**

## What Jax Doesn't Do (By Design)

Jax deliberately avoids certain mechanisms common in other decentralized storage solutions:

1. **No Proof of Replication**: Unlike Filecoin, Jax doesn't use cryptographic proofs to verify that multiple unique copies of data exist. 

2. **No Complex Tokenomics for Permanence**: Unlike Arweave, Jax doesn't rely on elaborate token economics to incentivize long-term storage. There's no endowment model or token burning mechanism trying to ensure "permanent" storage.

Jax does one thing and it does it well: it provides developers the ability to build highly customizable incentivize structures for availability on top of its core consensus mechanisms.

## Concluding thoughts

The fundamental insight of Jax is that you don't need complex weighty cryptographic primitives, staking, or mining in order to create effective decentralized storage. By directly measuring and rewarding the behaviors that make storage useful -- actual availability and retrievability -- Jax creates a system where economic incentives naturally align with user needs.

This trust-based approach creates a more accessible, flexible system where:
- Storage providers are evaluated on what matters most: making data available
- Users can set custom incentives for the content they care about
- The network naturally adapts to prioritize the most valued content
- Participation is open to anyone with storage capacity, regardless of capital resources

Through this mechanism, Jax builds a bridge between off-chain storage reality and on-chain consensus, creating a powerful new primitive for decentralized applications that need reliable access to data.

