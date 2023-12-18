import { Collection } from "./collection";

export class RealEstatePropertiesModel extends Collection {
  constructor() {
    super('real_estate_properties');
  }

  // Function to get all the properties
  async getProperties(page:number=1, size:number=10) {
    const count = await this.count({});
    const project = {
      '_id': 0
    };
    const results = await this.findManyPaginated({}, project, page, size);
    return { results, count };
  }

  // Function to get a property by id
  async getPropertyById(propertyID: any) {
    const query = {
      id: parseInt(propertyID)
    };
    const result = await this.findOne(query) || {};
    return result;
  }

}
