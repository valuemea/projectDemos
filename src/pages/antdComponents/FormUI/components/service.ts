import { request } from '@umijs/max';

export async function getAreaList(params: { parentCode?: string; }) {
  return request<API.Result_PageInfo_UserInfo__>('/api/v1/arealist', {
    method: 'GET',
    params: params
  });
}