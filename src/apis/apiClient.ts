import { initializeKonnector } from '../../konnector';

export const BASE_URL = 'http://192.168.1.136:8080/kstage/';
console.log("BASE_URL", BASE_URL);

const konnector = initializeKonnector(BASE_URL);

export default konnector;
