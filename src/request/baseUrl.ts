const environment = process.env.NODE_ENV;

let baseURL: string = '';

switch (environment) {
    case 'development':
        baseURL = 'http://127.0.0.1:7001/api/v1';
        break;
    case 'test':
        baseURL = 'http://127.0.0.1:7001/api/v1';
        break;
    case 'production':
        baseURL = 'http://127.0.0.1:7001/api/v1';
        break;
    default:
        break;
}

export default baseURL;