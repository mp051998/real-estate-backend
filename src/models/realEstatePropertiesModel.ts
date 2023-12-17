import { Collection } from "./collection";

export class RealEstatePropertiesModel extends Collection {
  constructor() {
    super('real_estate_properties');
  }

  // Function to get all the properties
  async getAllProperties() {
    return await this.findMany({}) || [];
  }

  // Function to get a property by id
  async getPropertyById(id: any) {
    return await this.findOne({id: id}) || {};
  }
}
