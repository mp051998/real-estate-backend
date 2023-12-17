import { Request, Response } from 'express';

import { RealEstatePropertiesModel } from '../models/realEstatePropertiesModel';

// interface RealEstateProperty {
//   id: number;
//   name: string;
//   price: string;
//   propertyType: string;
//   locality: string;
//   state: string;
//   area: string;
//   bedrooms: string;
//   images: string[];
//   description?: string;
// }

export class RealEstatePropertiesRoute {
  app: any;
  
  constructor(app:any) {
    this.registerRoutes(app);
  }

  registerRoutes(app:any) {
    app.get('/api/real-estate-properties', this.getAllProperties);
    app.get('/api/real-estate-properties/:id', this.getPropertyById);
    
    console.log("Registered both RealEstateProperties route");
  }

  async getAllProperties(req: Request, res: Response) {
    // Logic to fetch all real estate properties from the database
    const realEstatePropertiesModel = new RealEstatePropertiesModel();
    const properties = await realEstatePropertiesModel.getAllProperties();

    // Send back the properties as the response
    res.json(properties);
  }

  async getPropertyById(req: Request, res: Response) {
    // Logic to fetch a single real estate property from the database
    const realEstatePropertiesModel = new RealEstatePropertiesModel();
    const property = await realEstatePropertiesModel.getPropertyById(req.params.id);

    // Send back the property as the response
    res.json(property);
  }
}

