/* tslint:disable */
/* eslint-disable */
/**
 * Swagger Example API
 * This is a sample server celler server.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime'
/**
 *
 * @export
 * @interface TypesUpdateMenuResp
 */
export interface TypesUpdateMenuResp {
  /**
   *
   * @type {string}
   * @memberof TypesUpdateMenuResp
   */
  code: string
  /**
   *
   * @type {string}
   * @memberof TypesUpdateMenuResp
   */
  message: string
}

/**
 * Check if a given object implements the TypesUpdateMenuResp interface.
 */
export function instanceOfTypesUpdateMenuResp(value: object): boolean {
  let isInstance = true
  isInstance = isInstance && 'code' in value
  isInstance = isInstance && 'message' in value

  return isInstance
}

export function TypesUpdateMenuRespFromJSON(json: any): TypesUpdateMenuResp {
  return TypesUpdateMenuRespFromJSONTyped(json, false)
}

export function TypesUpdateMenuRespFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypesUpdateMenuResp {
  if (json === undefined || json === null) {
    return json
  }
  return {
    code: json['code'],
    message: json['message'],
  }
}

export function TypesUpdateMenuRespToJSON(value?: TypesUpdateMenuResp | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    code: value.code,
    message: value.message,
  }
}
