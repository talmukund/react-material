import { products } from '../mock-data'

export const getProductDetails = (body)=>{
    const { offset, limit } = body;
    const response = products.slice(offset, offset+limit);
    return Promise.resolve(response);
}