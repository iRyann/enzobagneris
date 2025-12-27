[**enzo-bagneris---animateur-nature**](../../../README.md)

***

[enzo-bagneris---animateur-nature](../../../README.md) / [hooks/useSanitizedHTML](../README.md) / useSanitizedHTML

# Function: useSanitizedHTML()

> **useSanitizedHTML**(`html`): `object`

Defined in: [src/hooks/useSanitizedHTML.ts:14](https://github.com/iRyann/enzobagneris/blob/b22193ffc362c1ca9a04744a04e79e1af7da0f36/src/hooks/useSanitizedHTML.ts#L14)

Hook pour sanitizer du HTML brut et prevenir les attaques XSS.

## Parameters

### html

`string`

Chaine HTML a sanitizer

## Returns

`object`

HTML securise pret pour dangerouslySetInnerHTML

### sanitized

> **sanitized**: `string`

### error

> **error**: `string` \| `null`

## Example

```ts
const { sanitized } = useSanitizedHTML(post.content);
return <div dangerouslySetInnerHTML={{ __html: sanitized }} />;
```
