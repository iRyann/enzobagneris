[**enzo-bagneris---animateur-nature**](../../../README.md)

***

[enzo-bagneris---animateur-nature](../../../README.md) / [types/utility.types](../README.md) / AsyncState

# Type Alias: AsyncState\<T\>

> **AsyncState**\<`T`\> = \{ `status`: `"idle"`; \} \| \{ `status`: `"loading"`; \} \| \{ `status`: `"success"`; `data`: `T`; \} \| \{ `status`: `"error"`; `error`: [`APIError`](../../error.types/interfaces/APIError.md); \}

Defined in: [src/types/utility.types.ts:5](https://github.com/iRyann/enzobagneris/blob/5f7deb86a0e5269233c5167282c96fddcf42dd4d/src/types/utility.types.ts#L5)

## Type Parameters

### T

`T`
