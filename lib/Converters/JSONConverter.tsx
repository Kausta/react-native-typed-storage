/**
 * react-native-typed-storage
 * @file JSONConverter.tsx
 * ----------------------------
 *
 * Copyright 2018 - 2021 Caner Korkmaz
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

import { Converter } from './IConverter'

export class JSONConverter implements Converter {
  decode<T>(str: string): T | null {
    return JSON.parse(str) as T
  }

  encode<T>(value: T | null): string {
    return JSON.stringify(value)
  }
}
