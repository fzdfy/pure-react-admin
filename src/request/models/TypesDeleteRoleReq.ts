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
 * @interface TypesDeleteRoleReq
 */
export interface TypesDeleteRoleReq {
  /**
   *
   * @type {number}
   * @memberof TypesDeleteRoleReq
   */
  id: number
}

/**
 * Check if a given object implements the TypesDeleteRoleReq interface.
 */
export function instanceOfTypesDeleteRoleReq(value: object): boolean {
  let isInstance = true
  isInstance = isInstance && 'id' in value

  return isInstance
}

export function TypesDeleteRoleReqFromJSON(json: any): TypesDeleteRoleReq {
  return TypesDeleteRoleReqFromJSONTyped(json, false)
}

export function TypesDeleteRoleReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypesDeleteRoleReq {
  if (json === undefined || json === null) {
    return json
  }
  return {
    id: json['id'],
  }
}

export function TypesDeleteRoleReqToJSON(value?: TypesDeleteRoleReq | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    id: value.id,
  }
}
