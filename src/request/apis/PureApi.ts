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

import * as runtime from '../runtime'
import type { TypesListMenuResp, TypesLoginReq, TypesLoginResp, TypesUserInfoResp } from '../models'
import {
  TypesListMenuRespFromJSON,
  TypesListMenuRespToJSON,
  TypesLoginReqFromJSON,
  TypesLoginReqToJSON,
  TypesLoginRespFromJSON,
  TypesLoginRespToJSON,
  TypesUserInfoRespFromJSON,
  TypesUserInfoRespToJSON,
} from '../models'

export interface MenuListRequest {
  name?: string
  path?: string
}

export interface UserInfoRequest {
  userId: string
}

export interface UserLoginRequest {
  body: TypesLoginReq
}

/**
 * PureApi - interface
 *
 * @export
 * @interface PureApiInterface
 */
export interface PureApiInterface {
  /**
   * menu list
   * @summary menu list logic
   * @param {string} [name] List Menu
   * @param {string} [path] List Menu
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PureApiInterface
   */
  menuListRaw(
    requestParameters: MenuListRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<TypesListMenuResp>>

  /**
   * menu list
   * menu list logic
   */
  menuList(
    requestParameters: MenuListRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<TypesListMenuResp>

  /**
   * user info
   * @summary user info logic
   * @param {string} userId userId
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PureApiInterface
   */
  userInfoRaw(
    requestParameters: UserInfoRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<TypesUserInfoResp>>

  /**
   * user info
   * user info logic
   */
  userInfo(
    requestParameters: UserInfoRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<TypesUserInfoResp>

  /**
   * user login
   * @summary user login logic
   * @param {TypesLoginReq} body Login info
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PureApiInterface
   */
  userLoginRaw(
    requestParameters: UserLoginRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<TypesLoginResp>>

  /**
   * user login
   * user login logic
   */
  userLogin(
    requestParameters: UserLoginRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<TypesLoginResp>
}

/**
 *
 */
export class PureApi extends runtime.BaseAPI implements PureApiInterface {
  /**
   * menu list
   * menu list logic
   */
  async menuListRaw(
    requestParameters: MenuListRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<TypesListMenuResp>> {
    const queryParameters: any = {}

    if (requestParameters.name !== undefined) {
      queryParameters['Name'] = requestParameters.name
    }

    if (requestParameters.path !== undefined) {
      queryParameters['Path'] = requestParameters.path
    }

    const headerParameters: runtime.HTTPHeaders = {}

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // ApiKeyAuth authentication
    }

    const response = await this.request(
      {
        path: `/api/sys/menu/list`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, (jsonValue) => TypesListMenuRespFromJSON(jsonValue))
  }

  /**
   * menu list
   * menu list logic
   */
  async menuList(
    requestParameters: MenuListRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<TypesListMenuResp> {
    const response = await this.menuListRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * user info
   * user info logic
   */
  async userInfoRaw(
    requestParameters: UserInfoRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<TypesUserInfoResp>> {
    if (requestParameters.userId === null || requestParameters.userId === undefined) {
      throw new runtime.RequiredError(
        'userId',
        'Required parameter requestParameters.userId was null or undefined when calling userInfo.',
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    if (requestParameters.userId !== undefined && requestParameters.userId !== null) {
      headerParameters['userId'] = String(requestParameters.userId)
    }

    if (this.configuration && this.configuration.apiKey) {
      headerParameters['Authorization'] = this.configuration.apiKey('Authorization') // ApiKeyAuth authentication
    }

    const response = await this.request(
      {
        path: `/api/sys/user/currentUser`,
        method: 'GET',
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, (jsonValue) => TypesUserInfoRespFromJSON(jsonValue))
  }

  /**
   * user info
   * user info logic
   */
  async userInfo(
    requestParameters: UserInfoRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<TypesUserInfoResp> {
    const response = await this.userInfoRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * user login
   * user login logic
   */
  async userLoginRaw(
    requestParameters: UserLoginRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<TypesLoginResp>> {
    if (requestParameters.body === null || requestParameters.body === undefined) {
      throw new runtime.RequiredError(
        'body',
        'Required parameter requestParameters.body was null or undefined when calling userLogin.',
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    const response = await this.request(
      {
        path: `/api/sys/user/login`,
        method: 'POST',
        headers: headerParameters,
        query: queryParameters,
        body: TypesLoginReqToJSON(requestParameters.body),
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, (jsonValue) => TypesLoginRespFromJSON(jsonValue))
  }

  /**
   * user login
   * user login logic
   */
  async userLogin(
    requestParameters: UserLoginRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<TypesLoginResp> {
    const response = await this.userLoginRaw(requestParameters, initOverrides)
    return await response.value()
  }
}