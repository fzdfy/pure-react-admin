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
 * @interface TypesAddRoleResp
 */
export interface TypesAddRoleResp {
  /**
   *
   * @type {string}
   * @memberof TypesAddRoleResp
   */
  code: string
  /**
   *
   * @type {string}
   * @memberof TypesAddRoleResp
   */
  message: string
}

/**
 * Check if a given object implements the TypesAddRoleResp interface.
 */
export function instanceOfTypesAddRoleResp(value: object): boolean {
  let isInstance = true
  isInstance = isInstance && 'code' in value
  isInstance = isInstance && 'message' in value

  return isInstance
}

export function TypesAddRoleRespFromJSON(json: any): TypesAddRoleResp {
  return TypesAddRoleRespFromJSONTyped(json, false)
}

export function TypesAddRoleRespFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypesAddRoleResp {
  if (json === undefined || json === null) {
    return json
  }
  return {
    code: json['code'],
    message: json['message'],
  }
}

export function TypesAddRoleRespToJSON(value?: TypesAddRoleResp | null): any {
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