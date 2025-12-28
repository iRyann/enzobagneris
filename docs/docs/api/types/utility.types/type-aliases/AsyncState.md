[**enzo-bagneris---animateur-nature**](../../../README.md)

***

[enzo-bagneris---animateur-nature](../../../README.md) / [types/utility.types](../README.md) / AsyncState

# Type Alias: AsyncState\<T\>

> **AsyncState**\<`T`\> = \{ `status`: `"idle"`; \} \| \{ `status`: `"loading"`; \} \| \{ `status`: `"success"`; `data`: `T`; \} \| \{ `status`: `"error"`; `error`: [`APIError`](../../error.types/interfaces/APIError.md); \}

Defined in: [src/types/utility.types.ts:5](https://github.com/iRyann/enzobagneris/blob/b22193ffc362c1ca9a04744a04e79e1af7da0f36/src/types/utility.types.ts#L5)

## Type Parameters

### T

`T`
