import { handleAPI, API_VERSION_STOREFRONT } from '../../library/utils/apiUtils';

export function accountCreate(data, filters={}) {
  const url = `/${API_VERSION_STOREFRONT}/account/`;
  const method = 'POST';
  return {
    type: 'ACCOUNT_CREATE',
    payload: handleAPI(url, filters, method, data)
  };
}

export function getOrders(filters={}) {
  const url = `/${API_VERSION_STOREFRONT}/account/orders`;
  const method = 'GET';
  const params = {
    include: 'line_items'
  }
  return {
    type: 'GET_ORDERS',
    payload: handleAPI(url, params, method)
  };
}