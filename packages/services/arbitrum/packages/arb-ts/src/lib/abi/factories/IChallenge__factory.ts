/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from 'ethers'
import { Provider } from '@ethersproject/providers'

import type { IChallenge } from '../IChallenge'

export class IChallenge__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IChallenge {
    return new Contract(address, _abi, signerOrProvider) as IChallenge
  }
}

const _abi = [
  {
    inputs: [],
    name: 'asserter',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'challenger',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'currentResponderTimeLeft',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IOneStepProof[]',
        name: '_executors',
        type: 'address[]',
      },
      {
        internalType: 'address',
        name: '_resultReceiver',
        type: 'address',
      },
      {
        internalType: 'bytes32',
        name: '_executionHash',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: '_maxMessageCount',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_asserter',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_challenger',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_asserterTimeLeft',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_challengerTimeLeft',
        type: 'uint256',
      },
      {
        internalType: 'contract IBridge',
        name: '_bridge',
        type: 'address',
      },
    ],
    name: 'initializeChallenge',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lastMoveBlock',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'timeout',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
]
