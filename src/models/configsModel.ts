import { Collection } from "./collection";

export class ConfigsModel extends Collection {
  constructor() {
    super('configs');
  }

  // Function to get all the configs
  async getConfigByID(id: string) {
    const query = {
      id: id
    };
    const result = await this.findOne(query) || {};
    return result;
  }

}
