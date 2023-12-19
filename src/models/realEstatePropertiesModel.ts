import { Collection } from "./collection";

export class RealEstatePropertiesModel extends Collection {
  constructor() {
    super('real_estate_properties');
  }

  // Function to get all the properties
  async getProperties(states:string[]=[], page:number=1, size:number=10) {
    let query: { state?: { $in: string[] } } = {};

    if (states.length > 0) {
      query['state'] = { $in: states };
    }

    const count = await this.count(query);
    const results = await this.findManyPaginated(query, {}, page, size);
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
