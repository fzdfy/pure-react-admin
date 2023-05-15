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
 * @interface TypesListMenuData
 */
export interface TypesListMenuData {
  /**
   * 创建人
   * @type {string}
   * @memberof TypesListMenuData
   */
  createBy: string
  /**
   * 创建时间
   * @type {string}
   * @memberof TypesListMenuData
   */
  createTime: string
  /**
   * 是否删除  -1：已删除  0：正常
   * @type {number}
   * @memberof TypesListMenuData
   */
  delFlag: number
  /**
   * 菜单图标
   * @type {string}
   * @memberof TypesListMenuData
   */
  icon: string
  /**
   * 编号
   * @type {number}
   * @memberof TypesListMenuData
   */
  id: number
  /**
   * 更新人
   * @type {string}
   * @memberof TypesListMenuData
   */
  lastUpdateBy: string
  /**
   * 更新时间
   * @type {string}
   * @memberof TypesListMenuData
   */
  lastUpdateTime: string
  /**
   * 菜单名称
   * @type {string}
   * @memberof TypesListMenuData
   */
  name: string
  /**
   * 排序
   * @type {number}
   * @memberof TypesListMenuData
   */
  orderNum: number
  /**
   * 父菜单ID，一级菜单为0
   * @type {number}
   * @memberof TypesListMenuData
   */
  parentId: number
  /**
   * 菜单URL,类型：1.普通页面（如用户管理， /sysmodel/user） 2.嵌套完整外部页面，以http(s)开头的链接 3.嵌套服务器页面，使用iframe:前缀+目标URL(如SQL监控， iframe:/druid/login.html, iframe:前缀会替换成服务器地址)
   * @type {string}
   * @memberof TypesListMenuData
   */
  path: string
  /**
   * 授权(多个用逗号分隔，如：sysmodel:user:add,sysmodel:user:edit)
   * @type {string}
   * @memberof TypesListMenuData
   */
  perms: string
  /**
   * 类型   0：目录   1：菜单   2：按钮
   * @type {number}
   * @memberof TypesListMenuData
   */
  type: number
}

/**
 * Check if a given object implements the TypesListMenuData interface.
 */
export function instanceOfTypesListMenuData(value: object): boolean {
  let isInstance = true
  isInstance = isInstance && 'createBy' in value
  isInstance = isInstance && 'createTime' in value
  isInstance = isInstance && 'delFlag' in value
  isInstance = isInstance && 'icon' in value
  isInstance = isInstance && 'id' in value
  isInstance = isInstance && 'lastUpdateBy' in value
  isInstance = isInstance && 'lastUpdateTime' in value
  isInstance = isInstance && 'name' in value
  isInstance = isInstance && 'orderNum' in value
  isInstance = isInstance && 'parentId' in value
  isInstance = isInstance && 'path' in value
  isInstance = isInstance && 'perms' in value
  isInstance = isInstance && 'type' in value

  return isInstance
}

export function TypesListMenuDataFromJSON(json: any): TypesListMenuData {
  return TypesListMenuDataFromJSONTyped(json, false)
}

export function TypesListMenuDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypesListMenuData {
  if (json === undefined || json === null) {
    return json
  }
  return {
    createBy: json['createBy'],
    createTime: json['createTime'],
    delFlag: json['delFlag'],
    icon: json['icon'],
    id: json['id'],
    lastUpdateBy: json['lastUpdateBy'],
    lastUpdateTime: json['lastUpdateTime'],
    name: json['name'],
    orderNum: json['orderNum'],
    parentId: json['parentId'],
    path: json['path'],
    perms: json['perms'],
    type: json['type'],
  }
}

export function TypesListMenuDataToJSON(value?: TypesListMenuData | null): any {
  if (value === undefined) {
    return undefined
  }
  if (value === null) {
    return null
  }
  return {
    createBy: value.createBy,
    createTime: value.createTime,
    delFlag: value.delFlag,
    icon: value.icon,
    id: value.id,
    lastUpdateBy: value.lastUpdateBy,
    lastUpdateTime: value.lastUpdateTime,
    name: value.name,
    orderNum: value.orderNum,
    parentId: value.parentId,
    path: value.path,
    perms: value.perms,
    type: value.type,
  }
}