---
title: Introduction
---

Jax is a decentralized storage protocol that aims to:
- be highly customizable in terms of defining storage incentives
- allow a variety of storage providers to participate trustlessly without the need for collateral
- make data availability and retrievals first class citizens within the protocol
- and allow for truly decentralized data storage across a network of diverse peers, allowing everyone from a data center to a mobile phone to contribute storage, provide files, and earn rewards.

Jax allows for this by being Ethereum native and by using EigenLayer in order

a fundamentally different approach to decentralized storage compared to systems like Filecoin and Arweave. Rather than focusing on cryptographic proofs of storage or complex tokenomics, JAX prioritizes ongoing trust-building through verifiable peer behavior.

### The Trust-First Approach

At its core, JAX ensures that peers are actively participating in the network in ways that contribute to the availability and retrievability of data. It does this by evaluating peers based on their responses to real-time challenges that verify they're actually storing and serving the files they claim to have.

This approach differs significantly from other systems:

1. **Challenge-Response Verification**: JAX constantly tests peers by challenging them to provide Blake3 hashes of specific chunks of content. A peer can only respond correctly if it actually has the data, creating an ongoing verification of storage.

2. **Reputation Through Behavior**: Unlike systems that rely on staking or upfront commitments, JAX builds trust profiles of peers based on their actual behavior over time. A peer's reputation emerges from consistent, verifiable actions rather than economic commitments.

3. **Availability as a First-Class Concern**: JAX directly measures and rewards data availability through its challenge system. This ensures that data isn't just being stored but is actually retrievable when needed.

4. **Dynamic Trust Calculation**: Using an EigenTrust-like algorithm, JAX aggregates peer assessments into global reputation scores that determine reward distribution. This creates a system where economic incentives directly align with beneficial network behavior.

### What JAX Doesn't Do (By Design)

JAX deliberately avoids certain mechanisms common in other decentralized storage solutions:

1. **No Proof of Replication**: Unlike Filecoin, JAX doesn't use cryptographic proofs to verify that multiple unique copies of data exist. This means JAX doesn't have a cryptographic guarantee against peers colluding to store a single copy while claiming multiple storage rewards.

2. **No Complex Tokenomics for Permanence**: Unlike Arweave, JAX doesn't rely on elaborate token economics to incentivize long-term storage. There's no endowment model or token burning mechanism trying to ensure "permanent" storage.

3. **No Heavy Staking Requirements**: JAX doesn't require peers to lock up large amounts of capital to participate. This dramatically lowers the barrier to entry for new storage providers.

### What JAX Does Incentivize

JAX rewards peers for demonstrating trustworthy behavior through:

1. **Consistent Challenge Responses**: Peers who reliably respond to storage challenges build trust scores that translate directly into rewards.

2. **Network Participation**: Active participation in the challenge-verification process itself (both issuing challenges and responding to them) helps establish a peer's reputation.

3. **Verifiable Availability**: The ability to consistently serve data when challenged directly impacts a peer's earning potential.

## What This Approach Enables

This trust-based paradigm creates several unique capabilities:

### Decoupling Rewards from Storage Parameters

Storage contracts in JAX can set bounties based on their specific needs without having to establish direct relationships with storage providers. This creates a more fluid marketplace where:

1. **Flexible Incentive Structures**: Different files can have different reward structures based on their importance, size, or other parameters.

2. **Market-Driven Storage Allocation**: Resources naturally flow toward storing the most valued content.

3. **Permissionless Participation**: Any peer can join and start earning by storing high-value content without needing approval from existing participants.

### Availability as a Core Metric

Unlike systems where miners can earn by merely proving they have allocated sectors (without necessarily serving the data), JAX makes actual availability a prerequisite for earning rewards:

1. **Retrieval is First-Class**: The challenge mechanism directly verifies that content can be retrieved, not just that space has been allocated.

2. **No Secondary Market Needed**: There's no need for a separate retrieval market because availability is built into the primary incentive structure.

3. **User-Centric Design**: This approach aligns incentives with what users actually care about—being able to access their data when needed.

### Stakeless Participation with Bounded Risk

JAX creates an environment where:

1. **Low Capital Requirements**: Peers can join and start earning without significant upfront investment.

2. **Limited Downside**: Since slashing is constrained to reputation within the network consensus rather than direct financial penalties, the risks of participation are bounded.

3. **Merit-Based Earnings**: Rewards are tied to actual service quality rather than stake size, creating a more equitable system.

### On-Chain Consensus of Data Availability

Perhaps most importantly, JAX creates a mechanism to:

1. **Bring Off-Chain Storage Status On-Chain**: The trust scores generated through the challenge-response system become a consensus view of file availability that can be used by smart contracts.

2. **Enable Conditional Logic Based on Availability**: Smart contracts can make decisions based on whether specific content is available in the network.

3. **Create Semantic Meaning for Hashes**: A content hash in JAX isn't just an identifier; it's associated with a dynamic trust score that indicates its current availability in the network.

## The Core Innovation

The fundamental insight of JAX is that you don't need complex cryptographic proofs or elaborate tokenomics to create effective decentralized storage. By directly measuring and rewarding the behaviors that make storage useful—actual availability and retrievability—JAX creates a system where economic incentives naturally align with user needs.

This trust-based approach creates a more accessible, flexible system where:
- Storage providers are evaluated on what matters most: making data available
- Users can set custom incentives for the content they care about
- The network naturally adapts to prioritize the most valued content
- Participation is open to anyone with storage capacity, regardless of capital resources

Through this mechanism, JAX builds a bridge between off-chain storage reality and on-chain consensus, creating a powerful new primitive for decentralized applications that need reliable access to data.
