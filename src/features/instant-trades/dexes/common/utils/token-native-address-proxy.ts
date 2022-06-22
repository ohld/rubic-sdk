import { Token } from '@core/blockchain/tokens/token';

export function createTokenNativeAddressProxy<T extends Token>(
    token: T,
    wrappedNativeAddress: string
): T {
    const wethAbleAddress = token.isNative ? wrappedNativeAddress : token.address;
    return new Proxy<T>(token, {
        get: (target, key) => {
            if (!(key in target)) {
                return undefined;
            }
            if (key === 'address') {
                return wethAbleAddress;
            }
            return target[key as keyof T];
        }
    });
}

export function createTokenNativeAddressProxyInPathStartAndEnd<T extends Token>(
    path: T[] | ReadonlyArray<T>,
    wrappedNativeAddress: string
): ReadonlyArray<T> {
    if (!path?.[0]) {
        throw new Error('');
    }
    const tokenAddress = path[path.length - 1];
    if (!tokenAddress) {
        throw new Error('[RUBIC SDK] Token has to be defined.');
    }

    return [createTokenNativeAddressProxy(path[0], wrappedNativeAddress)]
        .concat(path.slice(1, path.length - 1))
        .concat(createTokenNativeAddressProxy(tokenAddress, wrappedNativeAddress));
}