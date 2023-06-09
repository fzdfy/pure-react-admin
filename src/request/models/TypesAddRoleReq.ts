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
 * @interface TypesAddRoleReq
 */
export interface TypesAddRoleReq {
  /**
   * 角色名称
   * @type {string}
   * @memberof TypesAddRoleReq
   */
  name: string
  /**
   * 备注
   * @type {string}
   * @memberof TypesAddRoleReq
   */
  remark: string
}

/**
 * Check if a given object implements the TypesAddRoleReq interface.
 */
export function instanceOfTypesAddRoleReq(value: object): boolean {
  let isInstance = true
  isInstance = isInstance && 'name' in value
  isInstance = isInstance && 'remark' in value

  return isInstance
}

export function TypesAddRoleReqFromJSON(json: any): TypesAddRoleReq {
  return TypesAddRoleReqFromJSONTyped(json, false)
}

export function TypesAddRoleReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypesAddRoleReq {
  if (json === undefined || json === null) {
    return json
  }
  return {
    name: json['name'],
    remark: json['remark'],
  }
}

export function TypesAddRoleReqToJSON(value?: TypesAddRoleReq | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    name: value.name,
    remark: value.remark,
  }
}
