[**enzo-bagneris---animateur-nature**](../../../../README.md)

***

[enzo-bagneris---animateur-nature](../../../../README.md) / [lib/queries/blogQueries](../README.md) / blogKeys

# Variable: blogKeys

> `const` **blogKeys**: `object`

Defined in: [src/lib/queries/blogQueries.ts:5](https://github.com/iRyann/enzobagneris/blob/b22193ffc362c1ca9a04744a04e79e1af7da0f36/src/lib/queries/blogQueries.ts#L5)

## Type Declaration

### all

> **all**: readonly \[`"blog"`\]

### lists()

> **lists**: () => readonly \[`"blog"`, `"list"`\]

#### Returns

readonly \[`"blog"`, `"list"`\]

### list()

> **list**: (`filters`) => readonly \[`"blog"`, `"list"`, \{ `filters`: `string`; \}\]

#### Parameters

##### filters

`string`

#### Returns

readonly \[`"blog"`, `"list"`, \{ `filters`: `string`; \}\]

### details()

> **details**: () => readonly \[`"blog"`, `"detail"`\]

#### Returns

readonly \[`"blog"`, `"detail"`\]

### detail()

> **detail**: (`slug`) => readonly \[`"blog"`, `"detail"`, `string`\]

#### Parameters

##### slug

`string`

#### Returns

readonly \[`"blog"`, `"detail"`, `string`\]
