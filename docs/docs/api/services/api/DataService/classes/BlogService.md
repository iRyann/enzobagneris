[**enzo-bagneris---animateur-nature**](../../../../README.md)

***

[enzo-bagneris---animateur-nature](../../../../README.md) / [services/api/DataService](../README.md) / BlogService

# Class: BlogService

Defined in: [src/services/api/DataService.ts:9](https://github.com/iRyann/enzobagneris/blob/b22193ffc362c1ca9a04744a04e79e1af7da0f36/src/services/api/DataService.ts#L9)

## Extends

- [`BaseService`](../../BaseService/classes/BaseService.md)\<[`BlogPost`](../../../../types/blog.types/interfaces/BlogPost.md)\>

## Constructors

### Constructor

> **new BlogService**(): `BlogService`

#### Returns

`BlogService`

#### Inherited from

[`BaseService`](../../BaseService/classes/BaseService.md).[`constructor`](../../BaseService/classes/BaseService.md#constructor)

## Methods

### getAll()

> **getAll**(): `Promise`\<[`BlogPost`](../../../../types/blog.types/interfaces/BlogPost.md)[]\>

Defined in: [src/services/api/DataService.ts:16](https://github.com/iRyann/enzobagneris/blob/b22193ffc362c1ca9a04744a04e79e1af7da0f36/src/services/api/DataService.ts#L16)

#### Returns

`Promise`\<[`BlogPost`](../../../../types/blog.types/interfaces/BlogPost.md)[]\>

***

### getBySlug()

> **getBySlug**(`slug`): `Promise`\<[`BlogPost`](../../../../types/blog.types/interfaces/BlogPost.md) \| `null`\>

Defined in: [src/services/api/DataService.ts:20](https://github.com/iRyann/enzobagneris/blob/b22193ffc362c1ca9a04744a04e79e1af7da0f36/src/services/api/DataService.ts#L20)

#### Parameters

##### slug

`string`

#### Returns

`Promise`\<[`BlogPost`](../../../../types/blog.types/interfaces/BlogPost.md) \| `null`\>

***

### getFeatured()

> **getFeatured**(): `Promise`\<[`BlogPost`](../../../../types/blog.types/interfaces/BlogPost.md)[]\>

Defined in: [src/services/api/DataService.ts:25](https://github.com/iRyann/enzobagneris/blob/b22193ffc362c1ca9a04744a04e79e1af7da0f36/src/services/api/DataService.ts#L25)

#### Returns

`Promise`\<[`BlogPost`](../../../../types/blog.types/interfaces/BlogPost.md)[]\>
