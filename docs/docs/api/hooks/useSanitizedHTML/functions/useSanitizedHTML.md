[**enzo-bagneris---animateur-nature**](../../../README.md)

***

[enzo-bagneris---animateur-nature](../../../README.md) / [hooks/useSanitizedHTML](../README.md) / useSanitizedHTML

# Function: useSanitizedHTML()

> **useSanitizedHTML**(`html`): `object`

Defined in: [src/hooks/useSanitizedHTML.ts:14](https://github.com/iRyann/enzobagneris/blob/5f7deb86a0e5269233c5167282c96fddcf42dd4d/src/hooks/useSanitizedHTML.ts#L14)

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
