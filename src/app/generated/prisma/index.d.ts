
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
 * Model Currencies
 * 
 */
export type Currencies = $Result.DefaultSelection<Prisma.$CurrenciesPayload>
/**
 * Model LastUpdate
 * 
 */
export type LastUpdate = $Result.DefaultSelection<Prisma.$LastUpdatePayload>
/**
 * Model CurrenciesTicks
 * 
 */
export type CurrenciesTicks = $Result.DefaultSelection<Prisma.$CurrenciesTicksPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Currencies
 * const currencies = await prisma.currencies.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Currencies
   * const currencies = await prisma.currencies.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.currencies`: Exposes CRUD operations for the **Currencies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Currencies
    * const currencies = await prisma.currencies.findMany()
    * ```
    */
  get currencies(): Prisma.CurrenciesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lastUpdate`: Exposes CRUD operations for the **LastUpdate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LastUpdates
    * const lastUpdates = await prisma.lastUpdate.findMany()
    * ```
    */
  get lastUpdate(): Prisma.LastUpdateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.currenciesTicks`: Exposes CRUD operations for the **CurrenciesTicks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CurrenciesTicks
    * const currenciesTicks = await prisma.currenciesTicks.findMany()
    * ```
    */
  get currenciesTicks(): Prisma.CurrenciesTicksDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Currencies: 'Currencies',
    LastUpdate: 'LastUpdate',
    CurrenciesTicks: 'CurrenciesTicks'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "currencies" | "lastUpdate" | "currenciesTicks"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Currencies: {
        payload: Prisma.$CurrenciesPayload<ExtArgs>
        fields: Prisma.CurrenciesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurrenciesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrenciesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurrenciesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrenciesPayload>
          }
          findFirst: {
            args: Prisma.CurrenciesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrenciesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurrenciesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrenciesPayload>
          }
          findMany: {
            args: Prisma.CurrenciesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrenciesPayload>[]
          }
          create: {
            args: Prisma.CurrenciesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrenciesPayload>
          }
          createMany: {
            args: Prisma.CurrenciesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CurrenciesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrenciesPayload>
          }
          update: {
            args: Prisma.CurrenciesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrenciesPayload>
          }
          deleteMany: {
            args: Prisma.CurrenciesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CurrenciesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CurrenciesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrenciesPayload>
          }
          aggregate: {
            args: Prisma.CurrenciesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurrencies>
          }
          groupBy: {
            args: Prisma.CurrenciesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurrenciesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CurrenciesCountArgs<ExtArgs>
            result: $Utils.Optional<CurrenciesCountAggregateOutputType> | number
          }
        }
      }
      LastUpdate: {
        payload: Prisma.$LastUpdatePayload<ExtArgs>
        fields: Prisma.LastUpdateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LastUpdateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LastUpdatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LastUpdateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LastUpdatePayload>
          }
          findFirst: {
            args: Prisma.LastUpdateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LastUpdatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LastUpdateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LastUpdatePayload>
          }
          findMany: {
            args: Prisma.LastUpdateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LastUpdatePayload>[]
          }
          create: {
            args: Prisma.LastUpdateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LastUpdatePayload>
          }
          createMany: {
            args: Prisma.LastUpdateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LastUpdateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LastUpdatePayload>
          }
          update: {
            args: Prisma.LastUpdateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LastUpdatePayload>
          }
          deleteMany: {
            args: Prisma.LastUpdateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LastUpdateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LastUpdateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LastUpdatePayload>
          }
          aggregate: {
            args: Prisma.LastUpdateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLastUpdate>
          }
          groupBy: {
            args: Prisma.LastUpdateGroupByArgs<ExtArgs>
            result: $Utils.Optional<LastUpdateGroupByOutputType>[]
          }
          count: {
            args: Prisma.LastUpdateCountArgs<ExtArgs>
            result: $Utils.Optional<LastUpdateCountAggregateOutputType> | number
          }
        }
      }
      CurrenciesTicks: {
        payload: Prisma.$CurrenciesTicksPayload<ExtArgs>
        fields: Prisma.CurrenciesTicksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CurrenciesTicksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrenciesTicksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CurrenciesTicksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrenciesTicksPayload>
          }
          findFirst: {
            args: Prisma.CurrenciesTicksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrenciesTicksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CurrenciesTicksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrenciesTicksPayload>
          }
          findMany: {
            args: Prisma.CurrenciesTicksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrenciesTicksPayload>[]
          }
          create: {
            args: Prisma.CurrenciesTicksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrenciesTicksPayload>
          }
          createMany: {
            args: Prisma.CurrenciesTicksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CurrenciesTicksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrenciesTicksPayload>
          }
          update: {
            args: Prisma.CurrenciesTicksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrenciesTicksPayload>
          }
          deleteMany: {
            args: Prisma.CurrenciesTicksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CurrenciesTicksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CurrenciesTicksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CurrenciesTicksPayload>
          }
          aggregate: {
            args: Prisma.CurrenciesTicksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCurrenciesTicks>
          }
          groupBy: {
            args: Prisma.CurrenciesTicksGroupByArgs<ExtArgs>
            result: $Utils.Optional<CurrenciesTicksGroupByOutputType>[]
          }
          count: {
            args: Prisma.CurrenciesTicksCountArgs<ExtArgs>
            result: $Utils.Optional<CurrenciesTicksCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    currencies?: CurrenciesOmit
    lastUpdate?: LastUpdateOmit
    currenciesTicks?: CurrenciesTicksOmit
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
    | 'updateManyAndReturn'
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
   * Model Currencies
   */

  export type AggregateCurrencies = {
    _count: CurrenciesCountAggregateOutputType | null
    _avg: CurrenciesAvgAggregateOutputType | null
    _sum: CurrenciesSumAggregateOutputType | null
    _min: CurrenciesMinAggregateOutputType | null
    _max: CurrenciesMaxAggregateOutputType | null
  }

  export type CurrenciesAvgAggregateOutputType = {
    id: number | null
    value: Decimal | null
  }

  export type CurrenciesSumAggregateOutputType = {
    id: number | null
    value: Decimal | null
  }

  export type CurrenciesMinAggregateOutputType = {
    id: number | null
    currency: string | null
    name: string | null
    value: Decimal | null
  }

  export type CurrenciesMaxAggregateOutputType = {
    id: number | null
    currency: string | null
    name: string | null
    value: Decimal | null
  }

  export type CurrenciesCountAggregateOutputType = {
    id: number
    currency: number
    name: number
    value: number
    _all: number
  }


  export type CurrenciesAvgAggregateInputType = {
    id?: true
    value?: true
  }

  export type CurrenciesSumAggregateInputType = {
    id?: true
    value?: true
  }

  export type CurrenciesMinAggregateInputType = {
    id?: true
    currency?: true
    name?: true
    value?: true
  }

  export type CurrenciesMaxAggregateInputType = {
    id?: true
    currency?: true
    name?: true
    value?: true
  }

  export type CurrenciesCountAggregateInputType = {
    id?: true
    currency?: true
    name?: true
    value?: true
    _all?: true
  }

  export type CurrenciesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Currencies to aggregate.
     */
    where?: CurrenciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrenciesOrderByWithRelationInput | CurrenciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurrenciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Currencies
    **/
    _count?: true | CurrenciesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CurrenciesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CurrenciesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurrenciesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurrenciesMaxAggregateInputType
  }

  export type GetCurrenciesAggregateType<T extends CurrenciesAggregateArgs> = {
        [P in keyof T & keyof AggregateCurrencies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurrencies[P]>
      : GetScalarType<T[P], AggregateCurrencies[P]>
  }




  export type CurrenciesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurrenciesWhereInput
    orderBy?: CurrenciesOrderByWithAggregationInput | CurrenciesOrderByWithAggregationInput[]
    by: CurrenciesScalarFieldEnum[] | CurrenciesScalarFieldEnum
    having?: CurrenciesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurrenciesCountAggregateInputType | true
    _avg?: CurrenciesAvgAggregateInputType
    _sum?: CurrenciesSumAggregateInputType
    _min?: CurrenciesMinAggregateInputType
    _max?: CurrenciesMaxAggregateInputType
  }

  export type CurrenciesGroupByOutputType = {
    id: number
    currency: string
    name: string | null
    value: Decimal | null
    _count: CurrenciesCountAggregateOutputType | null
    _avg: CurrenciesAvgAggregateOutputType | null
    _sum: CurrenciesSumAggregateOutputType | null
    _min: CurrenciesMinAggregateOutputType | null
    _max: CurrenciesMaxAggregateOutputType | null
  }

  type GetCurrenciesGroupByPayload<T extends CurrenciesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurrenciesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurrenciesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurrenciesGroupByOutputType[P]>
            : GetScalarType<T[P], CurrenciesGroupByOutputType[P]>
        }
      >
    >


  export type CurrenciesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    currency?: boolean
    name?: boolean
    value?: boolean
  }, ExtArgs["result"]["currencies"]>



  export type CurrenciesSelectScalar = {
    id?: boolean
    currency?: boolean
    name?: boolean
    value?: boolean
  }

  export type CurrenciesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "currency" | "name" | "value", ExtArgs["result"]["currencies"]>

  export type $CurrenciesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Currencies"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      currency: string
      name: string | null
      value: Prisma.Decimal | null
    }, ExtArgs["result"]["currencies"]>
    composites: {}
  }

  type CurrenciesGetPayload<S extends boolean | null | undefined | CurrenciesDefaultArgs> = $Result.GetResult<Prisma.$CurrenciesPayload, S>

  type CurrenciesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CurrenciesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CurrenciesCountAggregateInputType | true
    }

  export interface CurrenciesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Currencies'], meta: { name: 'Currencies' } }
    /**
     * Find zero or one Currencies that matches the filter.
     * @param {CurrenciesFindUniqueArgs} args - Arguments to find a Currencies
     * @example
     * // Get one Currencies
     * const currencies = await prisma.currencies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CurrenciesFindUniqueArgs>(args: SelectSubset<T, CurrenciesFindUniqueArgs<ExtArgs>>): Prisma__CurrenciesClient<$Result.GetResult<Prisma.$CurrenciesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Currencies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CurrenciesFindUniqueOrThrowArgs} args - Arguments to find a Currencies
     * @example
     * // Get one Currencies
     * const currencies = await prisma.currencies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CurrenciesFindUniqueOrThrowArgs>(args: SelectSubset<T, CurrenciesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CurrenciesClient<$Result.GetResult<Prisma.$CurrenciesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Currencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrenciesFindFirstArgs} args - Arguments to find a Currencies
     * @example
     * // Get one Currencies
     * const currencies = await prisma.currencies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CurrenciesFindFirstArgs>(args?: SelectSubset<T, CurrenciesFindFirstArgs<ExtArgs>>): Prisma__CurrenciesClient<$Result.GetResult<Prisma.$CurrenciesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Currencies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrenciesFindFirstOrThrowArgs} args - Arguments to find a Currencies
     * @example
     * // Get one Currencies
     * const currencies = await prisma.currencies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CurrenciesFindFirstOrThrowArgs>(args?: SelectSubset<T, CurrenciesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CurrenciesClient<$Result.GetResult<Prisma.$CurrenciesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Currencies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrenciesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Currencies
     * const currencies = await prisma.currencies.findMany()
     * 
     * // Get first 10 Currencies
     * const currencies = await prisma.currencies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const currenciesWithIdOnly = await prisma.currencies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CurrenciesFindManyArgs>(args?: SelectSubset<T, CurrenciesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrenciesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Currencies.
     * @param {CurrenciesCreateArgs} args - Arguments to create a Currencies.
     * @example
     * // Create one Currencies
     * const Currencies = await prisma.currencies.create({
     *   data: {
     *     // ... data to create a Currencies
     *   }
     * })
     * 
     */
    create<T extends CurrenciesCreateArgs>(args: SelectSubset<T, CurrenciesCreateArgs<ExtArgs>>): Prisma__CurrenciesClient<$Result.GetResult<Prisma.$CurrenciesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Currencies.
     * @param {CurrenciesCreateManyArgs} args - Arguments to create many Currencies.
     * @example
     * // Create many Currencies
     * const currencies = await prisma.currencies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CurrenciesCreateManyArgs>(args?: SelectSubset<T, CurrenciesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Currencies.
     * @param {CurrenciesDeleteArgs} args - Arguments to delete one Currencies.
     * @example
     * // Delete one Currencies
     * const Currencies = await prisma.currencies.delete({
     *   where: {
     *     // ... filter to delete one Currencies
     *   }
     * })
     * 
     */
    delete<T extends CurrenciesDeleteArgs>(args: SelectSubset<T, CurrenciesDeleteArgs<ExtArgs>>): Prisma__CurrenciesClient<$Result.GetResult<Prisma.$CurrenciesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Currencies.
     * @param {CurrenciesUpdateArgs} args - Arguments to update one Currencies.
     * @example
     * // Update one Currencies
     * const currencies = await prisma.currencies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CurrenciesUpdateArgs>(args: SelectSubset<T, CurrenciesUpdateArgs<ExtArgs>>): Prisma__CurrenciesClient<$Result.GetResult<Prisma.$CurrenciesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Currencies.
     * @param {CurrenciesDeleteManyArgs} args - Arguments to filter Currencies to delete.
     * @example
     * // Delete a few Currencies
     * const { count } = await prisma.currencies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CurrenciesDeleteManyArgs>(args?: SelectSubset<T, CurrenciesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrenciesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Currencies
     * const currencies = await prisma.currencies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CurrenciesUpdateManyArgs>(args: SelectSubset<T, CurrenciesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Currencies.
     * @param {CurrenciesUpsertArgs} args - Arguments to update or create a Currencies.
     * @example
     * // Update or create a Currencies
     * const currencies = await prisma.currencies.upsert({
     *   create: {
     *     // ... data to create a Currencies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Currencies we want to update
     *   }
     * })
     */
    upsert<T extends CurrenciesUpsertArgs>(args: SelectSubset<T, CurrenciesUpsertArgs<ExtArgs>>): Prisma__CurrenciesClient<$Result.GetResult<Prisma.$CurrenciesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrenciesCountArgs} args - Arguments to filter Currencies to count.
     * @example
     * // Count the number of Currencies
     * const count = await prisma.currencies.count({
     *   where: {
     *     // ... the filter for the Currencies we want to count
     *   }
     * })
    **/
    count<T extends CurrenciesCountArgs>(
      args?: Subset<T, CurrenciesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurrenciesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrenciesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CurrenciesAggregateArgs>(args: Subset<T, CurrenciesAggregateArgs>): Prisma.PrismaPromise<GetCurrenciesAggregateType<T>>

    /**
     * Group by Currencies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrenciesGroupByArgs} args - Group by arguments.
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
      T extends CurrenciesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurrenciesGroupByArgs['orderBy'] }
        : { orderBy?: CurrenciesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CurrenciesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurrenciesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Currencies model
   */
  readonly fields: CurrenciesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Currencies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurrenciesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Currencies model
   */
  interface CurrenciesFieldRefs {
    readonly id: FieldRef<"Currencies", 'Int'>
    readonly currency: FieldRef<"Currencies", 'String'>
    readonly name: FieldRef<"Currencies", 'String'>
    readonly value: FieldRef<"Currencies", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * Currencies findUnique
   */
  export type CurrenciesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currencies
     */
    select?: CurrenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currencies
     */
    omit?: CurrenciesOmit<ExtArgs> | null
    /**
     * Filter, which Currencies to fetch.
     */
    where: CurrenciesWhereUniqueInput
  }

  /**
   * Currencies findUniqueOrThrow
   */
  export type CurrenciesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currencies
     */
    select?: CurrenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currencies
     */
    omit?: CurrenciesOmit<ExtArgs> | null
    /**
     * Filter, which Currencies to fetch.
     */
    where: CurrenciesWhereUniqueInput
  }

  /**
   * Currencies findFirst
   */
  export type CurrenciesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currencies
     */
    select?: CurrenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currencies
     */
    omit?: CurrenciesOmit<ExtArgs> | null
    /**
     * Filter, which Currencies to fetch.
     */
    where?: CurrenciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrenciesOrderByWithRelationInput | CurrenciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Currencies.
     */
    cursor?: CurrenciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Currencies.
     */
    distinct?: CurrenciesScalarFieldEnum | CurrenciesScalarFieldEnum[]
  }

  /**
   * Currencies findFirstOrThrow
   */
  export type CurrenciesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currencies
     */
    select?: CurrenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currencies
     */
    omit?: CurrenciesOmit<ExtArgs> | null
    /**
     * Filter, which Currencies to fetch.
     */
    where?: CurrenciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrenciesOrderByWithRelationInput | CurrenciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Currencies.
     */
    cursor?: CurrenciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Currencies.
     */
    distinct?: CurrenciesScalarFieldEnum | CurrenciesScalarFieldEnum[]
  }

  /**
   * Currencies findMany
   */
  export type CurrenciesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currencies
     */
    select?: CurrenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currencies
     */
    omit?: CurrenciesOmit<ExtArgs> | null
    /**
     * Filter, which Currencies to fetch.
     */
    where?: CurrenciesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Currencies to fetch.
     */
    orderBy?: CurrenciesOrderByWithRelationInput | CurrenciesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Currencies.
     */
    cursor?: CurrenciesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Currencies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Currencies.
     */
    skip?: number
    distinct?: CurrenciesScalarFieldEnum | CurrenciesScalarFieldEnum[]
  }

  /**
   * Currencies create
   */
  export type CurrenciesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currencies
     */
    select?: CurrenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currencies
     */
    omit?: CurrenciesOmit<ExtArgs> | null
    /**
     * The data needed to create a Currencies.
     */
    data: XOR<CurrenciesCreateInput, CurrenciesUncheckedCreateInput>
  }

  /**
   * Currencies createMany
   */
  export type CurrenciesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Currencies.
     */
    data: CurrenciesCreateManyInput | CurrenciesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Currencies update
   */
  export type CurrenciesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currencies
     */
    select?: CurrenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currencies
     */
    omit?: CurrenciesOmit<ExtArgs> | null
    /**
     * The data needed to update a Currencies.
     */
    data: XOR<CurrenciesUpdateInput, CurrenciesUncheckedUpdateInput>
    /**
     * Choose, which Currencies to update.
     */
    where: CurrenciesWhereUniqueInput
  }

  /**
   * Currencies updateMany
   */
  export type CurrenciesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Currencies.
     */
    data: XOR<CurrenciesUpdateManyMutationInput, CurrenciesUncheckedUpdateManyInput>
    /**
     * Filter which Currencies to update
     */
    where?: CurrenciesWhereInput
  }

  /**
   * Currencies upsert
   */
  export type CurrenciesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currencies
     */
    select?: CurrenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currencies
     */
    omit?: CurrenciesOmit<ExtArgs> | null
    /**
     * The filter to search for the Currencies to update in case it exists.
     */
    where: CurrenciesWhereUniqueInput
    /**
     * In case the Currencies found by the `where` argument doesn't exist, create a new Currencies with this data.
     */
    create: XOR<CurrenciesCreateInput, CurrenciesUncheckedCreateInput>
    /**
     * In case the Currencies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurrenciesUpdateInput, CurrenciesUncheckedUpdateInput>
  }

  /**
   * Currencies delete
   */
  export type CurrenciesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currencies
     */
    select?: CurrenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currencies
     */
    omit?: CurrenciesOmit<ExtArgs> | null
    /**
     * Filter which Currencies to delete.
     */
    where: CurrenciesWhereUniqueInput
  }

  /**
   * Currencies deleteMany
   */
  export type CurrenciesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Currencies to delete
     */
    where?: CurrenciesWhereInput
  }

  /**
   * Currencies without action
   */
  export type CurrenciesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Currencies
     */
    select?: CurrenciesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Currencies
     */
    omit?: CurrenciesOmit<ExtArgs> | null
  }


  /**
   * Model LastUpdate
   */

  export type AggregateLastUpdate = {
    _count: LastUpdateCountAggregateOutputType | null
    _avg: LastUpdateAvgAggregateOutputType | null
    _sum: LastUpdateSumAggregateOutputType | null
    _min: LastUpdateMinAggregateOutputType | null
    _max: LastUpdateMaxAggregateOutputType | null
  }

  export type LastUpdateAvgAggregateOutputType = {
    id: number | null
  }

  export type LastUpdateSumAggregateOutputType = {
    id: number | null
  }

  export type LastUpdateMinAggregateOutputType = {
    id: number | null
    date: Date | null
  }

  export type LastUpdateMaxAggregateOutputType = {
    id: number | null
    date: Date | null
  }

  export type LastUpdateCountAggregateOutputType = {
    id: number
    date: number
    _all: number
  }


  export type LastUpdateAvgAggregateInputType = {
    id?: true
  }

  export type LastUpdateSumAggregateInputType = {
    id?: true
  }

  export type LastUpdateMinAggregateInputType = {
    id?: true
    date?: true
  }

  export type LastUpdateMaxAggregateInputType = {
    id?: true
    date?: true
  }

  export type LastUpdateCountAggregateInputType = {
    id?: true
    date?: true
    _all?: true
  }

  export type LastUpdateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LastUpdate to aggregate.
     */
    where?: LastUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LastUpdates to fetch.
     */
    orderBy?: LastUpdateOrderByWithRelationInput | LastUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LastUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LastUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LastUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LastUpdates
    **/
    _count?: true | LastUpdateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LastUpdateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LastUpdateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LastUpdateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LastUpdateMaxAggregateInputType
  }

  export type GetLastUpdateAggregateType<T extends LastUpdateAggregateArgs> = {
        [P in keyof T & keyof AggregateLastUpdate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLastUpdate[P]>
      : GetScalarType<T[P], AggregateLastUpdate[P]>
  }




  export type LastUpdateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LastUpdateWhereInput
    orderBy?: LastUpdateOrderByWithAggregationInput | LastUpdateOrderByWithAggregationInput[]
    by: LastUpdateScalarFieldEnum[] | LastUpdateScalarFieldEnum
    having?: LastUpdateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LastUpdateCountAggregateInputType | true
    _avg?: LastUpdateAvgAggregateInputType
    _sum?: LastUpdateSumAggregateInputType
    _min?: LastUpdateMinAggregateInputType
    _max?: LastUpdateMaxAggregateInputType
  }

  export type LastUpdateGroupByOutputType = {
    id: number
    date: Date
    _count: LastUpdateCountAggregateOutputType | null
    _avg: LastUpdateAvgAggregateOutputType | null
    _sum: LastUpdateSumAggregateOutputType | null
    _min: LastUpdateMinAggregateOutputType | null
    _max: LastUpdateMaxAggregateOutputType | null
  }

  type GetLastUpdateGroupByPayload<T extends LastUpdateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LastUpdateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LastUpdateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LastUpdateGroupByOutputType[P]>
            : GetScalarType<T[P], LastUpdateGroupByOutputType[P]>
        }
      >
    >


  export type LastUpdateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
  }, ExtArgs["result"]["lastUpdate"]>



  export type LastUpdateSelectScalar = {
    id?: boolean
    date?: boolean
  }

  export type LastUpdateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date", ExtArgs["result"]["lastUpdate"]>

  export type $LastUpdatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LastUpdate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: Date
    }, ExtArgs["result"]["lastUpdate"]>
    composites: {}
  }

  type LastUpdateGetPayload<S extends boolean | null | undefined | LastUpdateDefaultArgs> = $Result.GetResult<Prisma.$LastUpdatePayload, S>

  type LastUpdateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LastUpdateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LastUpdateCountAggregateInputType | true
    }

  export interface LastUpdateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LastUpdate'], meta: { name: 'LastUpdate' } }
    /**
     * Find zero or one LastUpdate that matches the filter.
     * @param {LastUpdateFindUniqueArgs} args - Arguments to find a LastUpdate
     * @example
     * // Get one LastUpdate
     * const lastUpdate = await prisma.lastUpdate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LastUpdateFindUniqueArgs>(args: SelectSubset<T, LastUpdateFindUniqueArgs<ExtArgs>>): Prisma__LastUpdateClient<$Result.GetResult<Prisma.$LastUpdatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LastUpdate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LastUpdateFindUniqueOrThrowArgs} args - Arguments to find a LastUpdate
     * @example
     * // Get one LastUpdate
     * const lastUpdate = await prisma.lastUpdate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LastUpdateFindUniqueOrThrowArgs>(args: SelectSubset<T, LastUpdateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LastUpdateClient<$Result.GetResult<Prisma.$LastUpdatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LastUpdate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LastUpdateFindFirstArgs} args - Arguments to find a LastUpdate
     * @example
     * // Get one LastUpdate
     * const lastUpdate = await prisma.lastUpdate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LastUpdateFindFirstArgs>(args?: SelectSubset<T, LastUpdateFindFirstArgs<ExtArgs>>): Prisma__LastUpdateClient<$Result.GetResult<Prisma.$LastUpdatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LastUpdate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LastUpdateFindFirstOrThrowArgs} args - Arguments to find a LastUpdate
     * @example
     * // Get one LastUpdate
     * const lastUpdate = await prisma.lastUpdate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LastUpdateFindFirstOrThrowArgs>(args?: SelectSubset<T, LastUpdateFindFirstOrThrowArgs<ExtArgs>>): Prisma__LastUpdateClient<$Result.GetResult<Prisma.$LastUpdatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LastUpdates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LastUpdateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LastUpdates
     * const lastUpdates = await prisma.lastUpdate.findMany()
     * 
     * // Get first 10 LastUpdates
     * const lastUpdates = await prisma.lastUpdate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lastUpdateWithIdOnly = await prisma.lastUpdate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LastUpdateFindManyArgs>(args?: SelectSubset<T, LastUpdateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LastUpdatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LastUpdate.
     * @param {LastUpdateCreateArgs} args - Arguments to create a LastUpdate.
     * @example
     * // Create one LastUpdate
     * const LastUpdate = await prisma.lastUpdate.create({
     *   data: {
     *     // ... data to create a LastUpdate
     *   }
     * })
     * 
     */
    create<T extends LastUpdateCreateArgs>(args: SelectSubset<T, LastUpdateCreateArgs<ExtArgs>>): Prisma__LastUpdateClient<$Result.GetResult<Prisma.$LastUpdatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LastUpdates.
     * @param {LastUpdateCreateManyArgs} args - Arguments to create many LastUpdates.
     * @example
     * // Create many LastUpdates
     * const lastUpdate = await prisma.lastUpdate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LastUpdateCreateManyArgs>(args?: SelectSubset<T, LastUpdateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LastUpdate.
     * @param {LastUpdateDeleteArgs} args - Arguments to delete one LastUpdate.
     * @example
     * // Delete one LastUpdate
     * const LastUpdate = await prisma.lastUpdate.delete({
     *   where: {
     *     // ... filter to delete one LastUpdate
     *   }
     * })
     * 
     */
    delete<T extends LastUpdateDeleteArgs>(args: SelectSubset<T, LastUpdateDeleteArgs<ExtArgs>>): Prisma__LastUpdateClient<$Result.GetResult<Prisma.$LastUpdatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LastUpdate.
     * @param {LastUpdateUpdateArgs} args - Arguments to update one LastUpdate.
     * @example
     * // Update one LastUpdate
     * const lastUpdate = await prisma.lastUpdate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LastUpdateUpdateArgs>(args: SelectSubset<T, LastUpdateUpdateArgs<ExtArgs>>): Prisma__LastUpdateClient<$Result.GetResult<Prisma.$LastUpdatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LastUpdates.
     * @param {LastUpdateDeleteManyArgs} args - Arguments to filter LastUpdates to delete.
     * @example
     * // Delete a few LastUpdates
     * const { count } = await prisma.lastUpdate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LastUpdateDeleteManyArgs>(args?: SelectSubset<T, LastUpdateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LastUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LastUpdateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LastUpdates
     * const lastUpdate = await prisma.lastUpdate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LastUpdateUpdateManyArgs>(args: SelectSubset<T, LastUpdateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LastUpdate.
     * @param {LastUpdateUpsertArgs} args - Arguments to update or create a LastUpdate.
     * @example
     * // Update or create a LastUpdate
     * const lastUpdate = await prisma.lastUpdate.upsert({
     *   create: {
     *     // ... data to create a LastUpdate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LastUpdate we want to update
     *   }
     * })
     */
    upsert<T extends LastUpdateUpsertArgs>(args: SelectSubset<T, LastUpdateUpsertArgs<ExtArgs>>): Prisma__LastUpdateClient<$Result.GetResult<Prisma.$LastUpdatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LastUpdates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LastUpdateCountArgs} args - Arguments to filter LastUpdates to count.
     * @example
     * // Count the number of LastUpdates
     * const count = await prisma.lastUpdate.count({
     *   where: {
     *     // ... the filter for the LastUpdates we want to count
     *   }
     * })
    **/
    count<T extends LastUpdateCountArgs>(
      args?: Subset<T, LastUpdateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LastUpdateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LastUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LastUpdateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LastUpdateAggregateArgs>(args: Subset<T, LastUpdateAggregateArgs>): Prisma.PrismaPromise<GetLastUpdateAggregateType<T>>

    /**
     * Group by LastUpdate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LastUpdateGroupByArgs} args - Group by arguments.
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
      T extends LastUpdateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LastUpdateGroupByArgs['orderBy'] }
        : { orderBy?: LastUpdateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LastUpdateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLastUpdateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LastUpdate model
   */
  readonly fields: LastUpdateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LastUpdate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LastUpdateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the LastUpdate model
   */
  interface LastUpdateFieldRefs {
    readonly id: FieldRef<"LastUpdate", 'Int'>
    readonly date: FieldRef<"LastUpdate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LastUpdate findUnique
   */
  export type LastUpdateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LastUpdate
     */
    select?: LastUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LastUpdate
     */
    omit?: LastUpdateOmit<ExtArgs> | null
    /**
     * Filter, which LastUpdate to fetch.
     */
    where: LastUpdateWhereUniqueInput
  }

  /**
   * LastUpdate findUniqueOrThrow
   */
  export type LastUpdateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LastUpdate
     */
    select?: LastUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LastUpdate
     */
    omit?: LastUpdateOmit<ExtArgs> | null
    /**
     * Filter, which LastUpdate to fetch.
     */
    where: LastUpdateWhereUniqueInput
  }

  /**
   * LastUpdate findFirst
   */
  export type LastUpdateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LastUpdate
     */
    select?: LastUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LastUpdate
     */
    omit?: LastUpdateOmit<ExtArgs> | null
    /**
     * Filter, which LastUpdate to fetch.
     */
    where?: LastUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LastUpdates to fetch.
     */
    orderBy?: LastUpdateOrderByWithRelationInput | LastUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LastUpdates.
     */
    cursor?: LastUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LastUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LastUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LastUpdates.
     */
    distinct?: LastUpdateScalarFieldEnum | LastUpdateScalarFieldEnum[]
  }

  /**
   * LastUpdate findFirstOrThrow
   */
  export type LastUpdateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LastUpdate
     */
    select?: LastUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LastUpdate
     */
    omit?: LastUpdateOmit<ExtArgs> | null
    /**
     * Filter, which LastUpdate to fetch.
     */
    where?: LastUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LastUpdates to fetch.
     */
    orderBy?: LastUpdateOrderByWithRelationInput | LastUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LastUpdates.
     */
    cursor?: LastUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LastUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LastUpdates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LastUpdates.
     */
    distinct?: LastUpdateScalarFieldEnum | LastUpdateScalarFieldEnum[]
  }

  /**
   * LastUpdate findMany
   */
  export type LastUpdateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LastUpdate
     */
    select?: LastUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LastUpdate
     */
    omit?: LastUpdateOmit<ExtArgs> | null
    /**
     * Filter, which LastUpdates to fetch.
     */
    where?: LastUpdateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LastUpdates to fetch.
     */
    orderBy?: LastUpdateOrderByWithRelationInput | LastUpdateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LastUpdates.
     */
    cursor?: LastUpdateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LastUpdates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LastUpdates.
     */
    skip?: number
    distinct?: LastUpdateScalarFieldEnum | LastUpdateScalarFieldEnum[]
  }

  /**
   * LastUpdate create
   */
  export type LastUpdateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LastUpdate
     */
    select?: LastUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LastUpdate
     */
    omit?: LastUpdateOmit<ExtArgs> | null
    /**
     * The data needed to create a LastUpdate.
     */
    data: XOR<LastUpdateCreateInput, LastUpdateUncheckedCreateInput>
  }

  /**
   * LastUpdate createMany
   */
  export type LastUpdateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LastUpdates.
     */
    data: LastUpdateCreateManyInput | LastUpdateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LastUpdate update
   */
  export type LastUpdateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LastUpdate
     */
    select?: LastUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LastUpdate
     */
    omit?: LastUpdateOmit<ExtArgs> | null
    /**
     * The data needed to update a LastUpdate.
     */
    data: XOR<LastUpdateUpdateInput, LastUpdateUncheckedUpdateInput>
    /**
     * Choose, which LastUpdate to update.
     */
    where: LastUpdateWhereUniqueInput
  }

  /**
   * LastUpdate updateMany
   */
  export type LastUpdateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LastUpdates.
     */
    data: XOR<LastUpdateUpdateManyMutationInput, LastUpdateUncheckedUpdateManyInput>
    /**
     * Filter which LastUpdates to update
     */
    where?: LastUpdateWhereInput
  }

  /**
   * LastUpdate upsert
   */
  export type LastUpdateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LastUpdate
     */
    select?: LastUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LastUpdate
     */
    omit?: LastUpdateOmit<ExtArgs> | null
    /**
     * The filter to search for the LastUpdate to update in case it exists.
     */
    where: LastUpdateWhereUniqueInput
    /**
     * In case the LastUpdate found by the `where` argument doesn't exist, create a new LastUpdate with this data.
     */
    create: XOR<LastUpdateCreateInput, LastUpdateUncheckedCreateInput>
    /**
     * In case the LastUpdate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LastUpdateUpdateInput, LastUpdateUncheckedUpdateInput>
  }

  /**
   * LastUpdate delete
   */
  export type LastUpdateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LastUpdate
     */
    select?: LastUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LastUpdate
     */
    omit?: LastUpdateOmit<ExtArgs> | null
    /**
     * Filter which LastUpdate to delete.
     */
    where: LastUpdateWhereUniqueInput
  }

  /**
   * LastUpdate deleteMany
   */
  export type LastUpdateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LastUpdates to delete
     */
    where?: LastUpdateWhereInput
  }

  /**
   * LastUpdate without action
   */
  export type LastUpdateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LastUpdate
     */
    select?: LastUpdateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LastUpdate
     */
    omit?: LastUpdateOmit<ExtArgs> | null
  }


  /**
   * Model CurrenciesTicks
   */

  export type AggregateCurrenciesTicks = {
    _count: CurrenciesTicksCountAggregateOutputType | null
    _avg: CurrenciesTicksAvgAggregateOutputType | null
    _sum: CurrenciesTicksSumAggregateOutputType | null
    _min: CurrenciesTicksMinAggregateOutputType | null
    _max: CurrenciesTicksMaxAggregateOutputType | null
  }

  export type CurrenciesTicksAvgAggregateOutputType = {
    id: number | null
    close: Decimal | null
  }

  export type CurrenciesTicksSumAggregateOutputType = {
    id: number | null
    close: Decimal | null
  }

  export type CurrenciesTicksMinAggregateOutputType = {
    id: number | null
    currency: string | null
    close: Decimal | null
    date: Date | null
  }

  export type CurrenciesTicksMaxAggregateOutputType = {
    id: number | null
    currency: string | null
    close: Decimal | null
    date: Date | null
  }

  export type CurrenciesTicksCountAggregateOutputType = {
    id: number
    currency: number
    close: number
    date: number
    _all: number
  }


  export type CurrenciesTicksAvgAggregateInputType = {
    id?: true
    close?: true
  }

  export type CurrenciesTicksSumAggregateInputType = {
    id?: true
    close?: true
  }

  export type CurrenciesTicksMinAggregateInputType = {
    id?: true
    currency?: true
    close?: true
    date?: true
  }

  export type CurrenciesTicksMaxAggregateInputType = {
    id?: true
    currency?: true
    close?: true
    date?: true
  }

  export type CurrenciesTicksCountAggregateInputType = {
    id?: true
    currency?: true
    close?: true
    date?: true
    _all?: true
  }

  export type CurrenciesTicksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CurrenciesTicks to aggregate.
     */
    where?: CurrenciesTicksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurrenciesTicks to fetch.
     */
    orderBy?: CurrenciesTicksOrderByWithRelationInput | CurrenciesTicksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CurrenciesTicksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurrenciesTicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurrenciesTicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CurrenciesTicks
    **/
    _count?: true | CurrenciesTicksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CurrenciesTicksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CurrenciesTicksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CurrenciesTicksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CurrenciesTicksMaxAggregateInputType
  }

  export type GetCurrenciesTicksAggregateType<T extends CurrenciesTicksAggregateArgs> = {
        [P in keyof T & keyof AggregateCurrenciesTicks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCurrenciesTicks[P]>
      : GetScalarType<T[P], AggregateCurrenciesTicks[P]>
  }




  export type CurrenciesTicksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CurrenciesTicksWhereInput
    orderBy?: CurrenciesTicksOrderByWithAggregationInput | CurrenciesTicksOrderByWithAggregationInput[]
    by: CurrenciesTicksScalarFieldEnum[] | CurrenciesTicksScalarFieldEnum
    having?: CurrenciesTicksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CurrenciesTicksCountAggregateInputType | true
    _avg?: CurrenciesTicksAvgAggregateInputType
    _sum?: CurrenciesTicksSumAggregateInputType
    _min?: CurrenciesTicksMinAggregateInputType
    _max?: CurrenciesTicksMaxAggregateInputType
  }

  export type CurrenciesTicksGroupByOutputType = {
    id: number
    currency: string
    close: Decimal
    date: Date
    _count: CurrenciesTicksCountAggregateOutputType | null
    _avg: CurrenciesTicksAvgAggregateOutputType | null
    _sum: CurrenciesTicksSumAggregateOutputType | null
    _min: CurrenciesTicksMinAggregateOutputType | null
    _max: CurrenciesTicksMaxAggregateOutputType | null
  }

  type GetCurrenciesTicksGroupByPayload<T extends CurrenciesTicksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CurrenciesTicksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CurrenciesTicksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CurrenciesTicksGroupByOutputType[P]>
            : GetScalarType<T[P], CurrenciesTicksGroupByOutputType[P]>
        }
      >
    >


  export type CurrenciesTicksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    currency?: boolean
    close?: boolean
    date?: boolean
  }, ExtArgs["result"]["currenciesTicks"]>



  export type CurrenciesTicksSelectScalar = {
    id?: boolean
    currency?: boolean
    close?: boolean
    date?: boolean
  }

  export type CurrenciesTicksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "currency" | "close" | "date", ExtArgs["result"]["currenciesTicks"]>

  export type $CurrenciesTicksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CurrenciesTicks"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      currency: string
      close: Prisma.Decimal
      date: Date
    }, ExtArgs["result"]["currenciesTicks"]>
    composites: {}
  }

  type CurrenciesTicksGetPayload<S extends boolean | null | undefined | CurrenciesTicksDefaultArgs> = $Result.GetResult<Prisma.$CurrenciesTicksPayload, S>

  type CurrenciesTicksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CurrenciesTicksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CurrenciesTicksCountAggregateInputType | true
    }

  export interface CurrenciesTicksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CurrenciesTicks'], meta: { name: 'CurrenciesTicks' } }
    /**
     * Find zero or one CurrenciesTicks that matches the filter.
     * @param {CurrenciesTicksFindUniqueArgs} args - Arguments to find a CurrenciesTicks
     * @example
     * // Get one CurrenciesTicks
     * const currenciesTicks = await prisma.currenciesTicks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CurrenciesTicksFindUniqueArgs>(args: SelectSubset<T, CurrenciesTicksFindUniqueArgs<ExtArgs>>): Prisma__CurrenciesTicksClient<$Result.GetResult<Prisma.$CurrenciesTicksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CurrenciesTicks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CurrenciesTicksFindUniqueOrThrowArgs} args - Arguments to find a CurrenciesTicks
     * @example
     * // Get one CurrenciesTicks
     * const currenciesTicks = await prisma.currenciesTicks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CurrenciesTicksFindUniqueOrThrowArgs>(args: SelectSubset<T, CurrenciesTicksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CurrenciesTicksClient<$Result.GetResult<Prisma.$CurrenciesTicksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CurrenciesTicks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrenciesTicksFindFirstArgs} args - Arguments to find a CurrenciesTicks
     * @example
     * // Get one CurrenciesTicks
     * const currenciesTicks = await prisma.currenciesTicks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CurrenciesTicksFindFirstArgs>(args?: SelectSubset<T, CurrenciesTicksFindFirstArgs<ExtArgs>>): Prisma__CurrenciesTicksClient<$Result.GetResult<Prisma.$CurrenciesTicksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CurrenciesTicks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrenciesTicksFindFirstOrThrowArgs} args - Arguments to find a CurrenciesTicks
     * @example
     * // Get one CurrenciesTicks
     * const currenciesTicks = await prisma.currenciesTicks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CurrenciesTicksFindFirstOrThrowArgs>(args?: SelectSubset<T, CurrenciesTicksFindFirstOrThrowArgs<ExtArgs>>): Prisma__CurrenciesTicksClient<$Result.GetResult<Prisma.$CurrenciesTicksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CurrenciesTicks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrenciesTicksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CurrenciesTicks
     * const currenciesTicks = await prisma.currenciesTicks.findMany()
     * 
     * // Get first 10 CurrenciesTicks
     * const currenciesTicks = await prisma.currenciesTicks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const currenciesTicksWithIdOnly = await prisma.currenciesTicks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CurrenciesTicksFindManyArgs>(args?: SelectSubset<T, CurrenciesTicksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CurrenciesTicksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CurrenciesTicks.
     * @param {CurrenciesTicksCreateArgs} args - Arguments to create a CurrenciesTicks.
     * @example
     * // Create one CurrenciesTicks
     * const CurrenciesTicks = await prisma.currenciesTicks.create({
     *   data: {
     *     // ... data to create a CurrenciesTicks
     *   }
     * })
     * 
     */
    create<T extends CurrenciesTicksCreateArgs>(args: SelectSubset<T, CurrenciesTicksCreateArgs<ExtArgs>>): Prisma__CurrenciesTicksClient<$Result.GetResult<Prisma.$CurrenciesTicksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CurrenciesTicks.
     * @param {CurrenciesTicksCreateManyArgs} args - Arguments to create many CurrenciesTicks.
     * @example
     * // Create many CurrenciesTicks
     * const currenciesTicks = await prisma.currenciesTicks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CurrenciesTicksCreateManyArgs>(args?: SelectSubset<T, CurrenciesTicksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CurrenciesTicks.
     * @param {CurrenciesTicksDeleteArgs} args - Arguments to delete one CurrenciesTicks.
     * @example
     * // Delete one CurrenciesTicks
     * const CurrenciesTicks = await prisma.currenciesTicks.delete({
     *   where: {
     *     // ... filter to delete one CurrenciesTicks
     *   }
     * })
     * 
     */
    delete<T extends CurrenciesTicksDeleteArgs>(args: SelectSubset<T, CurrenciesTicksDeleteArgs<ExtArgs>>): Prisma__CurrenciesTicksClient<$Result.GetResult<Prisma.$CurrenciesTicksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CurrenciesTicks.
     * @param {CurrenciesTicksUpdateArgs} args - Arguments to update one CurrenciesTicks.
     * @example
     * // Update one CurrenciesTicks
     * const currenciesTicks = await prisma.currenciesTicks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CurrenciesTicksUpdateArgs>(args: SelectSubset<T, CurrenciesTicksUpdateArgs<ExtArgs>>): Prisma__CurrenciesTicksClient<$Result.GetResult<Prisma.$CurrenciesTicksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CurrenciesTicks.
     * @param {CurrenciesTicksDeleteManyArgs} args - Arguments to filter CurrenciesTicks to delete.
     * @example
     * // Delete a few CurrenciesTicks
     * const { count } = await prisma.currenciesTicks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CurrenciesTicksDeleteManyArgs>(args?: SelectSubset<T, CurrenciesTicksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CurrenciesTicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrenciesTicksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CurrenciesTicks
     * const currenciesTicks = await prisma.currenciesTicks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CurrenciesTicksUpdateManyArgs>(args: SelectSubset<T, CurrenciesTicksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CurrenciesTicks.
     * @param {CurrenciesTicksUpsertArgs} args - Arguments to update or create a CurrenciesTicks.
     * @example
     * // Update or create a CurrenciesTicks
     * const currenciesTicks = await prisma.currenciesTicks.upsert({
     *   create: {
     *     // ... data to create a CurrenciesTicks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CurrenciesTicks we want to update
     *   }
     * })
     */
    upsert<T extends CurrenciesTicksUpsertArgs>(args: SelectSubset<T, CurrenciesTicksUpsertArgs<ExtArgs>>): Prisma__CurrenciesTicksClient<$Result.GetResult<Prisma.$CurrenciesTicksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CurrenciesTicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrenciesTicksCountArgs} args - Arguments to filter CurrenciesTicks to count.
     * @example
     * // Count the number of CurrenciesTicks
     * const count = await prisma.currenciesTicks.count({
     *   where: {
     *     // ... the filter for the CurrenciesTicks we want to count
     *   }
     * })
    **/
    count<T extends CurrenciesTicksCountArgs>(
      args?: Subset<T, CurrenciesTicksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CurrenciesTicksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CurrenciesTicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrenciesTicksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CurrenciesTicksAggregateArgs>(args: Subset<T, CurrenciesTicksAggregateArgs>): Prisma.PrismaPromise<GetCurrenciesTicksAggregateType<T>>

    /**
     * Group by CurrenciesTicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CurrenciesTicksGroupByArgs} args - Group by arguments.
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
      T extends CurrenciesTicksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CurrenciesTicksGroupByArgs['orderBy'] }
        : { orderBy?: CurrenciesTicksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CurrenciesTicksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCurrenciesTicksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CurrenciesTicks model
   */
  readonly fields: CurrenciesTicksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CurrenciesTicks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CurrenciesTicksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CurrenciesTicks model
   */
  interface CurrenciesTicksFieldRefs {
    readonly id: FieldRef<"CurrenciesTicks", 'Int'>
    readonly currency: FieldRef<"CurrenciesTicks", 'String'>
    readonly close: FieldRef<"CurrenciesTicks", 'Decimal'>
    readonly date: FieldRef<"CurrenciesTicks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CurrenciesTicks findUnique
   */
  export type CurrenciesTicksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrenciesTicks
     */
    select?: CurrenciesTicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrenciesTicks
     */
    omit?: CurrenciesTicksOmit<ExtArgs> | null
    /**
     * Filter, which CurrenciesTicks to fetch.
     */
    where: CurrenciesTicksWhereUniqueInput
  }

  /**
   * CurrenciesTicks findUniqueOrThrow
   */
  export type CurrenciesTicksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrenciesTicks
     */
    select?: CurrenciesTicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrenciesTicks
     */
    omit?: CurrenciesTicksOmit<ExtArgs> | null
    /**
     * Filter, which CurrenciesTicks to fetch.
     */
    where: CurrenciesTicksWhereUniqueInput
  }

  /**
   * CurrenciesTicks findFirst
   */
  export type CurrenciesTicksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrenciesTicks
     */
    select?: CurrenciesTicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrenciesTicks
     */
    omit?: CurrenciesTicksOmit<ExtArgs> | null
    /**
     * Filter, which CurrenciesTicks to fetch.
     */
    where?: CurrenciesTicksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurrenciesTicks to fetch.
     */
    orderBy?: CurrenciesTicksOrderByWithRelationInput | CurrenciesTicksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CurrenciesTicks.
     */
    cursor?: CurrenciesTicksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurrenciesTicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurrenciesTicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CurrenciesTicks.
     */
    distinct?: CurrenciesTicksScalarFieldEnum | CurrenciesTicksScalarFieldEnum[]
  }

  /**
   * CurrenciesTicks findFirstOrThrow
   */
  export type CurrenciesTicksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrenciesTicks
     */
    select?: CurrenciesTicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrenciesTicks
     */
    omit?: CurrenciesTicksOmit<ExtArgs> | null
    /**
     * Filter, which CurrenciesTicks to fetch.
     */
    where?: CurrenciesTicksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurrenciesTicks to fetch.
     */
    orderBy?: CurrenciesTicksOrderByWithRelationInput | CurrenciesTicksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CurrenciesTicks.
     */
    cursor?: CurrenciesTicksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurrenciesTicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurrenciesTicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CurrenciesTicks.
     */
    distinct?: CurrenciesTicksScalarFieldEnum | CurrenciesTicksScalarFieldEnum[]
  }

  /**
   * CurrenciesTicks findMany
   */
  export type CurrenciesTicksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrenciesTicks
     */
    select?: CurrenciesTicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrenciesTicks
     */
    omit?: CurrenciesTicksOmit<ExtArgs> | null
    /**
     * Filter, which CurrenciesTicks to fetch.
     */
    where?: CurrenciesTicksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CurrenciesTicks to fetch.
     */
    orderBy?: CurrenciesTicksOrderByWithRelationInput | CurrenciesTicksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CurrenciesTicks.
     */
    cursor?: CurrenciesTicksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CurrenciesTicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CurrenciesTicks.
     */
    skip?: number
    distinct?: CurrenciesTicksScalarFieldEnum | CurrenciesTicksScalarFieldEnum[]
  }

  /**
   * CurrenciesTicks create
   */
  export type CurrenciesTicksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrenciesTicks
     */
    select?: CurrenciesTicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrenciesTicks
     */
    omit?: CurrenciesTicksOmit<ExtArgs> | null
    /**
     * The data needed to create a CurrenciesTicks.
     */
    data: XOR<CurrenciesTicksCreateInput, CurrenciesTicksUncheckedCreateInput>
  }

  /**
   * CurrenciesTicks createMany
   */
  export type CurrenciesTicksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CurrenciesTicks.
     */
    data: CurrenciesTicksCreateManyInput | CurrenciesTicksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CurrenciesTicks update
   */
  export type CurrenciesTicksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrenciesTicks
     */
    select?: CurrenciesTicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrenciesTicks
     */
    omit?: CurrenciesTicksOmit<ExtArgs> | null
    /**
     * The data needed to update a CurrenciesTicks.
     */
    data: XOR<CurrenciesTicksUpdateInput, CurrenciesTicksUncheckedUpdateInput>
    /**
     * Choose, which CurrenciesTicks to update.
     */
    where: CurrenciesTicksWhereUniqueInput
  }

  /**
   * CurrenciesTicks updateMany
   */
  export type CurrenciesTicksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CurrenciesTicks.
     */
    data: XOR<CurrenciesTicksUpdateManyMutationInput, CurrenciesTicksUncheckedUpdateManyInput>
    /**
     * Filter which CurrenciesTicks to update
     */
    where?: CurrenciesTicksWhereInput
  }

  /**
   * CurrenciesTicks upsert
   */
  export type CurrenciesTicksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrenciesTicks
     */
    select?: CurrenciesTicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrenciesTicks
     */
    omit?: CurrenciesTicksOmit<ExtArgs> | null
    /**
     * The filter to search for the CurrenciesTicks to update in case it exists.
     */
    where: CurrenciesTicksWhereUniqueInput
    /**
     * In case the CurrenciesTicks found by the `where` argument doesn't exist, create a new CurrenciesTicks with this data.
     */
    create: XOR<CurrenciesTicksCreateInput, CurrenciesTicksUncheckedCreateInput>
    /**
     * In case the CurrenciesTicks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CurrenciesTicksUpdateInput, CurrenciesTicksUncheckedUpdateInput>
  }

  /**
   * CurrenciesTicks delete
   */
  export type CurrenciesTicksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrenciesTicks
     */
    select?: CurrenciesTicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrenciesTicks
     */
    omit?: CurrenciesTicksOmit<ExtArgs> | null
    /**
     * Filter which CurrenciesTicks to delete.
     */
    where: CurrenciesTicksWhereUniqueInput
  }

  /**
   * CurrenciesTicks deleteMany
   */
  export type CurrenciesTicksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CurrenciesTicks to delete
     */
    where?: CurrenciesTicksWhereInput
  }

  /**
   * CurrenciesTicks without action
   */
  export type CurrenciesTicksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CurrenciesTicks
     */
    select?: CurrenciesTicksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CurrenciesTicks
     */
    omit?: CurrenciesTicksOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CurrenciesScalarFieldEnum: {
    id: 'id',
    currency: 'currency',
    name: 'name',
    value: 'value'
  };

  export type CurrenciesScalarFieldEnum = (typeof CurrenciesScalarFieldEnum)[keyof typeof CurrenciesScalarFieldEnum]


  export const LastUpdateScalarFieldEnum: {
    id: 'id',
    date: 'date'
  };

  export type LastUpdateScalarFieldEnum = (typeof LastUpdateScalarFieldEnum)[keyof typeof LastUpdateScalarFieldEnum]


  export const CurrenciesTicksScalarFieldEnum: {
    id: 'id',
    currency: 'currency',
    close: 'close',
    date: 'date'
  };

  export type CurrenciesTicksScalarFieldEnum = (typeof CurrenciesTicksScalarFieldEnum)[keyof typeof CurrenciesTicksScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type CurrenciesWhereInput = {
    AND?: CurrenciesWhereInput | CurrenciesWhereInput[]
    OR?: CurrenciesWhereInput[]
    NOT?: CurrenciesWhereInput | CurrenciesWhereInput[]
    id?: IntFilter<"Currencies"> | number
    currency?: StringFilter<"Currencies"> | string
    name?: StringNullableFilter<"Currencies"> | string | null
    value?: DecimalNullableFilter<"Currencies"> | Decimal | DecimalJsLike | number | string | null
  }

  export type CurrenciesOrderByWithRelationInput = {
    id?: SortOrder
    currency?: SortOrder
    name?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
  }

  export type CurrenciesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    currency?: string
    AND?: CurrenciesWhereInput | CurrenciesWhereInput[]
    OR?: CurrenciesWhereInput[]
    NOT?: CurrenciesWhereInput | CurrenciesWhereInput[]
    name?: StringNullableFilter<"Currencies"> | string | null
    value?: DecimalNullableFilter<"Currencies"> | Decimal | DecimalJsLike | number | string | null
  }, "id" | "currency">

  export type CurrenciesOrderByWithAggregationInput = {
    id?: SortOrder
    currency?: SortOrder
    name?: SortOrderInput | SortOrder
    value?: SortOrderInput | SortOrder
    _count?: CurrenciesCountOrderByAggregateInput
    _avg?: CurrenciesAvgOrderByAggregateInput
    _max?: CurrenciesMaxOrderByAggregateInput
    _min?: CurrenciesMinOrderByAggregateInput
    _sum?: CurrenciesSumOrderByAggregateInput
  }

  export type CurrenciesScalarWhereWithAggregatesInput = {
    AND?: CurrenciesScalarWhereWithAggregatesInput | CurrenciesScalarWhereWithAggregatesInput[]
    OR?: CurrenciesScalarWhereWithAggregatesInput[]
    NOT?: CurrenciesScalarWhereWithAggregatesInput | CurrenciesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Currencies"> | number
    currency?: StringWithAggregatesFilter<"Currencies"> | string
    name?: StringNullableWithAggregatesFilter<"Currencies"> | string | null
    value?: DecimalNullableWithAggregatesFilter<"Currencies"> | Decimal | DecimalJsLike | number | string | null
  }

  export type LastUpdateWhereInput = {
    AND?: LastUpdateWhereInput | LastUpdateWhereInput[]
    OR?: LastUpdateWhereInput[]
    NOT?: LastUpdateWhereInput | LastUpdateWhereInput[]
    id?: IntFilter<"LastUpdate"> | number
    date?: DateTimeFilter<"LastUpdate"> | Date | string
  }

  export type LastUpdateOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
  }

  export type LastUpdateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LastUpdateWhereInput | LastUpdateWhereInput[]
    OR?: LastUpdateWhereInput[]
    NOT?: LastUpdateWhereInput | LastUpdateWhereInput[]
    date?: DateTimeFilter<"LastUpdate"> | Date | string
  }, "id">

  export type LastUpdateOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    _count?: LastUpdateCountOrderByAggregateInput
    _avg?: LastUpdateAvgOrderByAggregateInput
    _max?: LastUpdateMaxOrderByAggregateInput
    _min?: LastUpdateMinOrderByAggregateInput
    _sum?: LastUpdateSumOrderByAggregateInput
  }

  export type LastUpdateScalarWhereWithAggregatesInput = {
    AND?: LastUpdateScalarWhereWithAggregatesInput | LastUpdateScalarWhereWithAggregatesInput[]
    OR?: LastUpdateScalarWhereWithAggregatesInput[]
    NOT?: LastUpdateScalarWhereWithAggregatesInput | LastUpdateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LastUpdate"> | number
    date?: DateTimeWithAggregatesFilter<"LastUpdate"> | Date | string
  }

  export type CurrenciesTicksWhereInput = {
    AND?: CurrenciesTicksWhereInput | CurrenciesTicksWhereInput[]
    OR?: CurrenciesTicksWhereInput[]
    NOT?: CurrenciesTicksWhereInput | CurrenciesTicksWhereInput[]
    id?: IntFilter<"CurrenciesTicks"> | number
    currency?: StringFilter<"CurrenciesTicks"> | string
    close?: DecimalFilter<"CurrenciesTicks"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"CurrenciesTicks"> | Date | string
  }

  export type CurrenciesTicksOrderByWithRelationInput = {
    id?: SortOrder
    currency?: SortOrder
    close?: SortOrder
    date?: SortOrder
  }

  export type CurrenciesTicksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CurrenciesTicksWhereInput | CurrenciesTicksWhereInput[]
    OR?: CurrenciesTicksWhereInput[]
    NOT?: CurrenciesTicksWhereInput | CurrenciesTicksWhereInput[]
    currency?: StringFilter<"CurrenciesTicks"> | string
    close?: DecimalFilter<"CurrenciesTicks"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeFilter<"CurrenciesTicks"> | Date | string
  }, "id">

  export type CurrenciesTicksOrderByWithAggregationInput = {
    id?: SortOrder
    currency?: SortOrder
    close?: SortOrder
    date?: SortOrder
    _count?: CurrenciesTicksCountOrderByAggregateInput
    _avg?: CurrenciesTicksAvgOrderByAggregateInput
    _max?: CurrenciesTicksMaxOrderByAggregateInput
    _min?: CurrenciesTicksMinOrderByAggregateInput
    _sum?: CurrenciesTicksSumOrderByAggregateInput
  }

  export type CurrenciesTicksScalarWhereWithAggregatesInput = {
    AND?: CurrenciesTicksScalarWhereWithAggregatesInput | CurrenciesTicksScalarWhereWithAggregatesInput[]
    OR?: CurrenciesTicksScalarWhereWithAggregatesInput[]
    NOT?: CurrenciesTicksScalarWhereWithAggregatesInput | CurrenciesTicksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CurrenciesTicks"> | number
    currency?: StringWithAggregatesFilter<"CurrenciesTicks"> | string
    close?: DecimalWithAggregatesFilter<"CurrenciesTicks"> | Decimal | DecimalJsLike | number | string
    date?: DateTimeWithAggregatesFilter<"CurrenciesTicks"> | Date | string
  }

  export type CurrenciesCreateInput = {
    currency: string
    name?: string | null
    value?: Decimal | DecimalJsLike | number | string | null
  }

  export type CurrenciesUncheckedCreateInput = {
    id?: number
    currency: string
    name?: string | null
    value?: Decimal | DecimalJsLike | number | string | null
  }

  export type CurrenciesUpdateInput = {
    currency?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CurrenciesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CurrenciesCreateManyInput = {
    id?: number
    currency: string
    name?: string | null
    value?: Decimal | DecimalJsLike | number | string | null
  }

  export type CurrenciesUpdateManyMutationInput = {
    currency?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type CurrenciesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    value?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type LastUpdateCreateInput = {
    date: Date | string
  }

  export type LastUpdateUncheckedCreateInput = {
    id?: number
    date: Date | string
  }

  export type LastUpdateUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LastUpdateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LastUpdateCreateManyInput = {
    id?: number
    date: Date | string
  }

  export type LastUpdateUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LastUpdateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurrenciesTicksCreateInput = {
    currency: string
    close: Decimal | DecimalJsLike | number | string
    date: Date | string
  }

  export type CurrenciesTicksUncheckedCreateInput = {
    id?: number
    currency: string
    close: Decimal | DecimalJsLike | number | string
    date: Date | string
  }

  export type CurrenciesTicksUpdateInput = {
    currency?: StringFieldUpdateOperationsInput | string
    close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurrenciesTicksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurrenciesTicksCreateManyInput = {
    id?: number
    currency: string
    close: Decimal | DecimalJsLike | number | string
    date: Date | string
  }

  export type CurrenciesTicksUpdateManyMutationInput = {
    currency?: StringFieldUpdateOperationsInput | string
    close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CurrenciesTicksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    close?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CurrenciesCountOrderByAggregateInput = {
    id?: SortOrder
    currency?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type CurrenciesAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type CurrenciesMaxOrderByAggregateInput = {
    id?: SortOrder
    currency?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type CurrenciesMinOrderByAggregateInput = {
    id?: SortOrder
    currency?: SortOrder
    name?: SortOrder
    value?: SortOrder
  }

  export type CurrenciesSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
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

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type LastUpdateCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
  }

  export type LastUpdateAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LastUpdateMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
  }

  export type LastUpdateMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
  }

  export type LastUpdateSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type CurrenciesTicksCountOrderByAggregateInput = {
    id?: SortOrder
    currency?: SortOrder
    close?: SortOrder
    date?: SortOrder
  }

  export type CurrenciesTicksAvgOrderByAggregateInput = {
    id?: SortOrder
    close?: SortOrder
  }

  export type CurrenciesTicksMaxOrderByAggregateInput = {
    id?: SortOrder
    currency?: SortOrder
    close?: SortOrder
    date?: SortOrder
  }

  export type CurrenciesTicksMinOrderByAggregateInput = {
    id?: SortOrder
    currency?: SortOrder
    close?: SortOrder
    date?: SortOrder
  }

  export type CurrenciesTicksSumOrderByAggregateInput = {
    id?: SortOrder
    close?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
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

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }



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