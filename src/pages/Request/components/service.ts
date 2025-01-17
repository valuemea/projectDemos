
import { request } from '@umijs/max';
export async function getReqMuData(params: { index: number; },) {
  return request<API.Result>('/api/v1/reqApi', {
    method: 'GET',
    params: params,
  });
}

