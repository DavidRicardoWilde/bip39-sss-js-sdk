import {generateMnemonic, mnemonicToEntropy} from 'bip39'

export function generateTwelveWordsMnemonic(): string {
    return generateMnemonic();
}

export function getEntropyByMnemonic(mnemonic: string): string {
    return mnemonicToEntropy(mnemonic);
}
