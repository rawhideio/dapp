import contract from 'truffle-contract'
import NFTokenABI from '../../../build/contracts/NFToken.json'
import stringTo32Bytes from '@/string-to-32bytes'

const nfToken = contract(NFTokenABI)

export default async function () {
  nfToken.setProvider(web3.currentProvider)
  nfToken.web3.eth.defaultAccount = web3.eth.accounts[0]

  // TODO: Will need to get this from networks json array
  // return nfToken.at()
  return nfToken
}
