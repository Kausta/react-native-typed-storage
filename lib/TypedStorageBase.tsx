/**
 * react-native-typed-storage
 * @file TypedStorageBase.tsx
 * ----------------------------
 *
 * Copyright 2018 Caner Korkmaz
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */

import { AsyncStorage } from 'react-native'
import { Converter } from './Converters'

/**
 * Typed storage wrapper for Async Storage with name prefixes
 * with given converter type
 *
 * @class TypedStorageBase
 * @type T Converter type
 */
export class TypedStorageBase<C extends Converter> {
  /**
   * Creates Typed Storage with the key prefix
   * @param _keyPrefix Prefix of the storage
   * @param _converter Used to convert the values to and from string
   */
  constructor(private _keyPrefix: string = '@typed', private _converter: C) {}

  /**
   * Name prefix for the typed storage
   */
  public get keyPrefix() {
    return this._keyPrefix
  }

  /**
   * Converts key to prefixed key
   * @param key Key to convert
   */
  public convertKey(key: string): string {
    return `${this.keyPrefix}:${key}`
  }

  /**
   * Gets an item from this typed storage
   * @param key Key
   */
  public async get<T>(key: string): Promise<T | null> {
    const value = await AsyncStorage.getItem(this.convertKey(key))
    // tslint:disable-next-line:strict-type-predicates
    if (value === null || value === undefined) {
      return null
    }
    return this._converter.decode(value)
  }

  /**
   * Get multiple items from this typed storage
   * @param keys The keys to get
   */
  public async multiGet(keys: Array<{ key: string }>): Promise<Array<any | null>> {
    const values = await AsyncStorage.multiGet(keys.map(({ key }) => this.convertKey(key)))
    const decode = this._converter.decode
    return values.map(([key, value]) => {
      // tslint:disable-next-line:strict-type-predicates
      if (value === null || value === undefined) {
        return null
      }
      return decode(value)
    })
  }

  /**
   * Get all keys contained in this typed storage unit
   */
  public async getAllKeys(): Promise<string[]> {
    const keys = await AsyncStorage.getAllKeys()
    const prefix = this.keyPrefix
    const prefixLength = prefix.length
    return keys.filter((key) => key.startsWith(prefix)).map((key) => key.substring(prefixLength))
  }

  /**
   * Set the specific key
   * @param key Key
   * @param value Value to convert to string and store, cannot be undefined
   */
  public async set<T>(key: string, value: T | null): Promise<void> {
    // tslint:disable-next-line:strict-type-predicates
    if (value === undefined) {
      throw new Error('Set value cannot be undefined')
    }
    await AsyncStorage.setItem(this.convertKey(key), this._converter.encode(value))
  }

  /**
   * Set the keys
   * @param values Keys and values to set in [{key, value}, ...] format, value's cannot be undefined
   */
  public async multiSet(values: Array<{ key: string; value: null | any }>): Promise<void> {
    const encode = this._converter.encode
    const stringValues = values.map(({ key, value }) => {
      // tslint:disable-next-line:strict-type-predicates
      if (value === undefined) {
        throw new Error('Multi Set value cannot be undefined')
      }
      return [this.convertKey(key), encode(value)]
    })
    await AsyncStorage.multiSet(stringValues)
  }

  /**
   * Merge the value into the previous value of the key
   * @param key Key
   * @param value Value to merge, cannot be undefined
   */
  public async merge<T>(key: string, value: T | null): Promise<void> {
    // tslint:disable-next-line:strict-type-predicates
    if (value === undefined) {
      throw new Error('Merge value cannot be undefined')
    }
    await AsyncStorage.mergeItem(this.convertKey(key), this._converter.encode(value))
  }

  /**
   * Merges all the values into their previous valus
   * @param values Values to merge in [{key, value}, ...] format, value's cannot be undefined
   */
  public async multiMerge(values: Array<{ key: string; value: null | any }>): Promise<void> {
    const encode = this._converter.encode
    const stringValues = values.map(({ key, value }) => {
      // tslint:disable-next-line:strict-type-predicates
      if (value === undefined) {
        throw new Error('Multi Merge value cannot be undefined')
      }
      return [this.convertKey(key), encode(value)]
    })
    await AsyncStorage.multiMerge(stringValues)
  }

  /**
   * Remove the key from the storage
   * @param key Key to remove
   */
  public async remove(key: string): Promise<void> {
    await AsyncStorage.removeItem(this.convertKey(key))
  }

  /**
   * Remove all of the keys from the storage
   * @param keys Keys to remove
   */
  public async multiRemove(keys: Array<{ key: string }>): Promise<void> {
    await AsyncStorage.multiRemove(keys.map(({ key }) => this.convertKey(key)))
  }

  /**
   * Remove keys of this storage unit from async storage
   */
  public async clear(): Promise<void> {
    const keys = await AsyncStorage.getAllKeys()
    const prefix = this.keyPrefix
    await AsyncStorage.multiRemove(keys.filter((key) => key.startsWith(prefix)))
  }
}

/**
 * Creates a typed storage with given prefix and given converter
 * @param keyPrefix Prefix for keys in the storage
 * @param converter The converter to convert objects and string
 */
export function createCustomTypedStorage<T extends Converter>(keyPrefix: string, converter: T): TypedStorageBase<T> {
  return new TypedStorageBase(keyPrefix, converter)
}
