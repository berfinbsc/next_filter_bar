
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model STKKART
 * 
 */
export type STKKART = $Result.DefaultSelection<Prisma.$STKKARTPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more STKKARTS
 * const sTKKARTS = await prisma.sTKKART.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more STKKARTS
   * const sTKKARTS = await prisma.sTKKART.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.sTKKART`: Exposes CRUD operations for the **STKKART** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more STKKARTS
    * const sTKKARTS = await prisma.sTKKART.findMany()
    * ```
    */
  get sTKKART(): Prisma.STKKARTDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    STKKART: 'STKKART'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'sTKKART'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      STKKART: {
        payload: Prisma.$STKKARTPayload<ExtArgs>
        fields: Prisma.STKKARTFieldRefs
        operations: {
          findUnique: {
            args: Prisma.STKKARTFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$STKKARTPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.STKKARTFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$STKKARTPayload>
          }
          findFirst: {
            args: Prisma.STKKARTFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$STKKARTPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.STKKARTFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$STKKARTPayload>
          }
          findMany: {
            args: Prisma.STKKARTFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$STKKARTPayload>[]
          }
          create: {
            args: Prisma.STKKARTCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$STKKARTPayload>
          }
          createMany: {
            args: Prisma.STKKARTCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.STKKARTDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$STKKARTPayload>
          }
          update: {
            args: Prisma.STKKARTUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$STKKARTPayload>
          }
          deleteMany: {
            args: Prisma.STKKARTDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.STKKARTUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.STKKARTUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$STKKARTPayload>
          }
          aggregate: {
            args: Prisma.STKKARTAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSTKKART>
          }
          groupBy: {
            args: Prisma.STKKARTGroupByArgs<ExtArgs>,
            result: $Utils.Optional<STKKARTGroupByOutputType>[]
          }
          count: {
            args: Prisma.STKKARTCountArgs<ExtArgs>,
            result: $Utils.Optional<STKKARTCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model STKKART
   */

  export type AggregateSTKKART = {
    _count: STKKARTCountAggregateOutputType | null
    _min: STKKARTMinAggregateOutputType | null
    _max: STKKARTMaxAggregateOutputType | null
  }

  export type STKKARTMinAggregateOutputType = {
    STKKOD: string | null
    STKCINSI: string | null
    STKOZKOD1: string | null
    CARGRADE: string | null
    CARCATEGORY: string | null
  }

  export type STKKARTMaxAggregateOutputType = {
    STKKOD: string | null
    STKCINSI: string | null
    STKOZKOD1: string | null
    CARGRADE: string | null
    CARCATEGORY: string | null
  }

  export type STKKARTCountAggregateOutputType = {
    STKKOD: number
    STKCINSI: number
    STKOZKOD1: number
    CARGRADE: number
    CARCATEGORY: number
    _all: number
  }


  export type STKKARTMinAggregateInputType = {
    STKKOD?: true
    STKCINSI?: true
    STKOZKOD1?: true
    CARGRADE?: true
    CARCATEGORY?: true
  }

  export type STKKARTMaxAggregateInputType = {
    STKKOD?: true
    STKCINSI?: true
    STKOZKOD1?: true
    CARGRADE?: true
    CARCATEGORY?: true
  }

  export type STKKARTCountAggregateInputType = {
    STKKOD?: true
    STKCINSI?: true
    STKOZKOD1?: true
    CARGRADE?: true
    CARCATEGORY?: true
    _all?: true
  }

  export type STKKARTAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which STKKART to aggregate.
     */
    where?: STKKARTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of STKKARTS to fetch.
     */
    orderBy?: STKKARTOrderByWithRelationInput | STKKARTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: STKKARTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` STKKARTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` STKKARTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned STKKARTS
    **/
    _count?: true | STKKARTCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: STKKARTMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: STKKARTMaxAggregateInputType
  }

  export type GetSTKKARTAggregateType<T extends STKKARTAggregateArgs> = {
        [P in keyof T & keyof AggregateSTKKART]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSTKKART[P]>
      : GetScalarType<T[P], AggregateSTKKART[P]>
  }




  export type STKKARTGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: STKKARTWhereInput
    orderBy?: STKKARTOrderByWithAggregationInput | STKKARTOrderByWithAggregationInput[]
    by: STKKARTScalarFieldEnum[] | STKKARTScalarFieldEnum
    having?: STKKARTScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: STKKARTCountAggregateInputType | true
    _min?: STKKARTMinAggregateInputType
    _max?: STKKARTMaxAggregateInputType
  }

  export type STKKARTGroupByOutputType = {
    STKKOD: string
    STKCINSI: string | null
    STKOZKOD1: string | null
    CARGRADE: string | null
    CARCATEGORY: string | null
    _count: STKKARTCountAggregateOutputType | null
    _min: STKKARTMinAggregateOutputType | null
    _max: STKKARTMaxAggregateOutputType | null
  }

  type GetSTKKARTGroupByPayload<T extends STKKARTGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<STKKARTGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof STKKARTGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], STKKARTGroupByOutputType[P]>
            : GetScalarType<T[P], STKKARTGroupByOutputType[P]>
        }
      >
    >


  export type STKKARTSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    STKKOD?: boolean
    STKCINSI?: boolean
    STKOZKOD1?: boolean
    CARGRADE?: boolean
    CARCATEGORY?: boolean
  }, ExtArgs["result"]["sTKKART"]>

  export type STKKARTSelectScalar = {
    STKKOD?: boolean
    STKCINSI?: boolean
    STKOZKOD1?: boolean
    CARGRADE?: boolean
    CARCATEGORY?: boolean
  }



  export type $STKKARTPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "STKKART"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      STKKOD: string
      STKCINSI: string | null
      STKOZKOD1: string | null
      CARGRADE: string | null
      CARCATEGORY: string | null
    }, ExtArgs["result"]["sTKKART"]>
    composites: {}
  }


  type STKKARTGetPayload<S extends boolean | null | undefined | STKKARTDefaultArgs> = $Result.GetResult<Prisma.$STKKARTPayload, S>

  type STKKARTCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<STKKARTFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: STKKARTCountAggregateInputType | true
    }

  export interface STKKARTDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['STKKART'], meta: { name: 'STKKART' } }
    /**
     * Find zero or one STKKART that matches the filter.
     * @param {STKKARTFindUniqueArgs} args - Arguments to find a STKKART
     * @example
     * // Get one STKKART
     * const sTKKART = await prisma.sTKKART.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends STKKARTFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, STKKARTFindUniqueArgs<ExtArgs>>
    ): Prisma__STKKARTClient<$Result.GetResult<Prisma.$STKKARTPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one STKKART that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {STKKARTFindUniqueOrThrowArgs} args - Arguments to find a STKKART
     * @example
     * // Get one STKKART
     * const sTKKART = await prisma.sTKKART.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends STKKARTFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, STKKARTFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__STKKARTClient<$Result.GetResult<Prisma.$STKKARTPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first STKKART that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STKKARTFindFirstArgs} args - Arguments to find a STKKART
     * @example
     * // Get one STKKART
     * const sTKKART = await prisma.sTKKART.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends STKKARTFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, STKKARTFindFirstArgs<ExtArgs>>
    ): Prisma__STKKARTClient<$Result.GetResult<Prisma.$STKKARTPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first STKKART that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STKKARTFindFirstOrThrowArgs} args - Arguments to find a STKKART
     * @example
     * // Get one STKKART
     * const sTKKART = await prisma.sTKKART.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends STKKARTFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, STKKARTFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__STKKARTClient<$Result.GetResult<Prisma.$STKKARTPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more STKKARTS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STKKARTFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all STKKARTS
     * const sTKKARTS = await prisma.sTKKART.findMany()
     * 
     * // Get first 10 STKKARTS
     * const sTKKARTS = await prisma.sTKKART.findMany({ take: 10 })
     * 
     * // Only select the `STKKOD`
     * const sTKKARTWithSTKKODOnly = await prisma.sTKKART.findMany({ select: { STKKOD: true } })
     * 
    **/
    findMany<T extends STKKARTFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, STKKARTFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$STKKARTPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a STKKART.
     * @param {STKKARTCreateArgs} args - Arguments to create a STKKART.
     * @example
     * // Create one STKKART
     * const STKKART = await prisma.sTKKART.create({
     *   data: {
     *     // ... data to create a STKKART
     *   }
     * })
     * 
    **/
    create<T extends STKKARTCreateArgs<ExtArgs>>(
      args: SelectSubset<T, STKKARTCreateArgs<ExtArgs>>
    ): Prisma__STKKARTClient<$Result.GetResult<Prisma.$STKKARTPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many STKKARTS.
     * @param {STKKARTCreateManyArgs} args - Arguments to create many STKKARTS.
     * @example
     * // Create many STKKARTS
     * const sTKKART = await prisma.sTKKART.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends STKKARTCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, STKKARTCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a STKKART.
     * @param {STKKARTDeleteArgs} args - Arguments to delete one STKKART.
     * @example
     * // Delete one STKKART
     * const STKKART = await prisma.sTKKART.delete({
     *   where: {
     *     // ... filter to delete one STKKART
     *   }
     * })
     * 
    **/
    delete<T extends STKKARTDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, STKKARTDeleteArgs<ExtArgs>>
    ): Prisma__STKKARTClient<$Result.GetResult<Prisma.$STKKARTPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one STKKART.
     * @param {STKKARTUpdateArgs} args - Arguments to update one STKKART.
     * @example
     * // Update one STKKART
     * const sTKKART = await prisma.sTKKART.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends STKKARTUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, STKKARTUpdateArgs<ExtArgs>>
    ): Prisma__STKKARTClient<$Result.GetResult<Prisma.$STKKARTPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more STKKARTS.
     * @param {STKKARTDeleteManyArgs} args - Arguments to filter STKKARTS to delete.
     * @example
     * // Delete a few STKKARTS
     * const { count } = await prisma.sTKKART.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends STKKARTDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, STKKARTDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more STKKARTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STKKARTUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many STKKARTS
     * const sTKKART = await prisma.sTKKART.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends STKKARTUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, STKKARTUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one STKKART.
     * @param {STKKARTUpsertArgs} args - Arguments to update or create a STKKART.
     * @example
     * // Update or create a STKKART
     * const sTKKART = await prisma.sTKKART.upsert({
     *   create: {
     *     // ... data to create a STKKART
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the STKKART we want to update
     *   }
     * })
    **/
    upsert<T extends STKKARTUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, STKKARTUpsertArgs<ExtArgs>>
    ): Prisma__STKKARTClient<$Result.GetResult<Prisma.$STKKARTPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of STKKARTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STKKARTCountArgs} args - Arguments to filter STKKARTS to count.
     * @example
     * // Count the number of STKKARTS
     * const count = await prisma.sTKKART.count({
     *   where: {
     *     // ... the filter for the STKKARTS we want to count
     *   }
     * })
    **/
    count<T extends STKKARTCountArgs>(
      args?: Subset<T, STKKARTCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], STKKARTCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a STKKART.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STKKARTAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends STKKARTAggregateArgs>(args: Subset<T, STKKARTAggregateArgs>): Prisma.PrismaPromise<GetSTKKARTAggregateType<T>>

    /**
     * Group by STKKART.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {STKKARTGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends STKKARTGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: STKKARTGroupByArgs['orderBy'] }
        : { orderBy?: STKKARTGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, STKKARTGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSTKKARTGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the STKKART model
   */
  readonly fields: STKKARTFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for STKKART.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__STKKARTClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the STKKART model
   */ 
  interface STKKARTFieldRefs {
    readonly STKKOD: FieldRef<"STKKART", 'String'>
    readonly STKCINSI: FieldRef<"STKKART", 'String'>
    readonly STKOZKOD1: FieldRef<"STKKART", 'String'>
    readonly CARGRADE: FieldRef<"STKKART", 'String'>
    readonly CARCATEGORY: FieldRef<"STKKART", 'String'>
  }
    

  // Custom InputTypes
  /**
   * STKKART findUnique
   */
  export type STKKARTFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STKKART
     */
    select?: STKKARTSelect<ExtArgs> | null
    /**
     * Filter, which STKKART to fetch.
     */
    where: STKKARTWhereUniqueInput
  }

  /**
   * STKKART findUniqueOrThrow
   */
  export type STKKARTFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STKKART
     */
    select?: STKKARTSelect<ExtArgs> | null
    /**
     * Filter, which STKKART to fetch.
     */
    where: STKKARTWhereUniqueInput
  }

  /**
   * STKKART findFirst
   */
  export type STKKARTFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STKKART
     */
    select?: STKKARTSelect<ExtArgs> | null
    /**
     * Filter, which STKKART to fetch.
     */
    where?: STKKARTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of STKKARTS to fetch.
     */
    orderBy?: STKKARTOrderByWithRelationInput | STKKARTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for STKKARTS.
     */
    cursor?: STKKARTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` STKKARTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` STKKARTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of STKKARTS.
     */
    distinct?: STKKARTScalarFieldEnum | STKKARTScalarFieldEnum[]
  }

  /**
   * STKKART findFirstOrThrow
   */
  export type STKKARTFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STKKART
     */
    select?: STKKARTSelect<ExtArgs> | null
    /**
     * Filter, which STKKART to fetch.
     */
    where?: STKKARTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of STKKARTS to fetch.
     */
    orderBy?: STKKARTOrderByWithRelationInput | STKKARTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for STKKARTS.
     */
    cursor?: STKKARTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` STKKARTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` STKKARTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of STKKARTS.
     */
    distinct?: STKKARTScalarFieldEnum | STKKARTScalarFieldEnum[]
  }

  /**
   * STKKART findMany
   */
  export type STKKARTFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STKKART
     */
    select?: STKKARTSelect<ExtArgs> | null
    /**
     * Filter, which STKKARTS to fetch.
     */
    where?: STKKARTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of STKKARTS to fetch.
     */
    orderBy?: STKKARTOrderByWithRelationInput | STKKARTOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing STKKARTS.
     */
    cursor?: STKKARTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` STKKARTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` STKKARTS.
     */
    skip?: number
    distinct?: STKKARTScalarFieldEnum | STKKARTScalarFieldEnum[]
  }

  /**
   * STKKART create
   */
  export type STKKARTCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STKKART
     */
    select?: STKKARTSelect<ExtArgs> | null
    /**
     * The data needed to create a STKKART.
     */
    data: XOR<STKKARTCreateInput, STKKARTUncheckedCreateInput>
  }

  /**
   * STKKART createMany
   */
  export type STKKARTCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many STKKARTS.
     */
    data: STKKARTCreateManyInput | STKKARTCreateManyInput[]
  }

  /**
   * STKKART update
   */
  export type STKKARTUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STKKART
     */
    select?: STKKARTSelect<ExtArgs> | null
    /**
     * The data needed to update a STKKART.
     */
    data: XOR<STKKARTUpdateInput, STKKARTUncheckedUpdateInput>
    /**
     * Choose, which STKKART to update.
     */
    where: STKKARTWhereUniqueInput
  }

  /**
   * STKKART updateMany
   */
  export type STKKARTUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update STKKARTS.
     */
    data: XOR<STKKARTUpdateManyMutationInput, STKKARTUncheckedUpdateManyInput>
    /**
     * Filter which STKKARTS to update
     */
    where?: STKKARTWhereInput
  }

  /**
   * STKKART upsert
   */
  export type STKKARTUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STKKART
     */
    select?: STKKARTSelect<ExtArgs> | null
    /**
     * The filter to search for the STKKART to update in case it exists.
     */
    where: STKKARTWhereUniqueInput
    /**
     * In case the STKKART found by the `where` argument doesn't exist, create a new STKKART with this data.
     */
    create: XOR<STKKARTCreateInput, STKKARTUncheckedCreateInput>
    /**
     * In case the STKKART was found with the provided `where` argument, update it with this data.
     */
    update: XOR<STKKARTUpdateInput, STKKARTUncheckedUpdateInput>
  }

  /**
   * STKKART delete
   */
  export type STKKARTDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STKKART
     */
    select?: STKKARTSelect<ExtArgs> | null
    /**
     * Filter which STKKART to delete.
     */
    where: STKKARTWhereUniqueInput
  }

  /**
   * STKKART deleteMany
   */
  export type STKKARTDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which STKKARTS to delete
     */
    where?: STKKARTWhereInput
  }

  /**
   * STKKART without action
   */
  export type STKKARTDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the STKKART
     */
    select?: STKKARTSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const STKKARTScalarFieldEnum: {
    STKKOD: 'STKKOD',
    STKCINSI: 'STKCINSI',
    STKOZKOD1: 'STKOZKOD1',
    CARGRADE: 'CARGRADE',
    CARCATEGORY: 'CARCATEGORY'
  };

  export type STKKARTScalarFieldEnum = (typeof STKKARTScalarFieldEnum)[keyof typeof STKKARTScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type STKKARTWhereInput = {
    AND?: STKKARTWhereInput | STKKARTWhereInput[]
    OR?: STKKARTWhereInput[]
    NOT?: STKKARTWhereInput | STKKARTWhereInput[]
    STKKOD?: StringFilter<"STKKART"> | string
    STKCINSI?: StringNullableFilter<"STKKART"> | string | null
    STKOZKOD1?: StringNullableFilter<"STKKART"> | string | null
    CARGRADE?: StringNullableFilter<"STKKART"> | string | null
    CARCATEGORY?: StringNullableFilter<"STKKART"> | string | null
  }

  export type STKKARTOrderByWithRelationInput = {
    STKKOD?: SortOrder
    STKCINSI?: SortOrderInput | SortOrder
    STKOZKOD1?: SortOrderInput | SortOrder
    CARGRADE?: SortOrderInput | SortOrder
    CARCATEGORY?: SortOrderInput | SortOrder
  }

  export type STKKARTWhereUniqueInput = Prisma.AtLeast<{
    STKKOD?: string
    AND?: STKKARTWhereInput | STKKARTWhereInput[]
    OR?: STKKARTWhereInput[]
    NOT?: STKKARTWhereInput | STKKARTWhereInput[]
    STKCINSI?: StringNullableFilter<"STKKART"> | string | null
    STKOZKOD1?: StringNullableFilter<"STKKART"> | string | null
    CARGRADE?: StringNullableFilter<"STKKART"> | string | null
    CARCATEGORY?: StringNullableFilter<"STKKART"> | string | null
  }, "STKKOD">

  export type STKKARTOrderByWithAggregationInput = {
    STKKOD?: SortOrder
    STKCINSI?: SortOrderInput | SortOrder
    STKOZKOD1?: SortOrderInput | SortOrder
    CARGRADE?: SortOrderInput | SortOrder
    CARCATEGORY?: SortOrderInput | SortOrder
    _count?: STKKARTCountOrderByAggregateInput
    _max?: STKKARTMaxOrderByAggregateInput
    _min?: STKKARTMinOrderByAggregateInput
  }

  export type STKKARTScalarWhereWithAggregatesInput = {
    AND?: STKKARTScalarWhereWithAggregatesInput | STKKARTScalarWhereWithAggregatesInput[]
    OR?: STKKARTScalarWhereWithAggregatesInput[]
    NOT?: STKKARTScalarWhereWithAggregatesInput | STKKARTScalarWhereWithAggregatesInput[]
    STKKOD?: StringWithAggregatesFilter<"STKKART"> | string
    STKCINSI?: StringNullableWithAggregatesFilter<"STKKART"> | string | null
    STKOZKOD1?: StringNullableWithAggregatesFilter<"STKKART"> | string | null
    CARGRADE?: StringNullableWithAggregatesFilter<"STKKART"> | string | null
    CARCATEGORY?: StringNullableWithAggregatesFilter<"STKKART"> | string | null
  }

  export type STKKARTCreateInput = {
    STKKOD: string
    STKCINSI?: string | null
    STKOZKOD1?: string | null
    CARGRADE?: string | null
    CARCATEGORY?: string | null
  }

  export type STKKARTUncheckedCreateInput = {
    STKKOD: string
    STKCINSI?: string | null
    STKOZKOD1?: string | null
    CARGRADE?: string | null
    CARCATEGORY?: string | null
  }

  export type STKKARTUpdateInput = {
    STKKOD?: StringFieldUpdateOperationsInput | string
    STKCINSI?: NullableStringFieldUpdateOperationsInput | string | null
    STKOZKOD1?: NullableStringFieldUpdateOperationsInput | string | null
    CARGRADE?: NullableStringFieldUpdateOperationsInput | string | null
    CARCATEGORY?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type STKKARTUncheckedUpdateInput = {
    STKKOD?: StringFieldUpdateOperationsInput | string
    STKCINSI?: NullableStringFieldUpdateOperationsInput | string | null
    STKOZKOD1?: NullableStringFieldUpdateOperationsInput | string | null
    CARGRADE?: NullableStringFieldUpdateOperationsInput | string | null
    CARCATEGORY?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type STKKARTCreateManyInput = {
    STKKOD: string
    STKCINSI?: string | null
    STKOZKOD1?: string | null
    CARGRADE?: string | null
    CARCATEGORY?: string | null
  }

  export type STKKARTUpdateManyMutationInput = {
    STKKOD?: StringFieldUpdateOperationsInput | string
    STKCINSI?: NullableStringFieldUpdateOperationsInput | string | null
    STKOZKOD1?: NullableStringFieldUpdateOperationsInput | string | null
    CARGRADE?: NullableStringFieldUpdateOperationsInput | string | null
    CARCATEGORY?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type STKKARTUncheckedUpdateManyInput = {
    STKKOD?: StringFieldUpdateOperationsInput | string
    STKCINSI?: NullableStringFieldUpdateOperationsInput | string | null
    STKOZKOD1?: NullableStringFieldUpdateOperationsInput | string | null
    CARGRADE?: NullableStringFieldUpdateOperationsInput | string | null
    CARCATEGORY?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type STKKARTCountOrderByAggregateInput = {
    STKKOD?: SortOrder
    STKCINSI?: SortOrder
    STKOZKOD1?: SortOrder
    CARGRADE?: SortOrder
    CARCATEGORY?: SortOrder
  }

  export type STKKARTMaxOrderByAggregateInput = {
    STKKOD?: SortOrder
    STKCINSI?: SortOrder
    STKOZKOD1?: SortOrder
    CARGRADE?: SortOrder
    CARCATEGORY?: SortOrder
  }

  export type STKKARTMinOrderByAggregateInput = {
    STKKOD?: SortOrder
    STKCINSI?: SortOrder
    STKOZKOD1?: SortOrder
    CARGRADE?: SortOrder
    CARCATEGORY?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use STKKARTDefaultArgs instead
     */
    export type STKKARTArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = STKKARTDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}