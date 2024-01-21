import { API } from './api';

class ResourcesAPI extends API {
    constructor() {
        super('/resources');
    }

    async getStaticFile(path: string) {
        return this.http.get(path);
    }
}

export default new ResourcesAPI();
