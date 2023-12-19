import { Request, Response } from 'express';

import { RealEstatePropertiesModel } from '../models/realEstatePropertiesModel';

export class RealEstatePropertiesRoute {
  app: any;
  
  constructor(app:any) {
    this.registerRoutes(app);
  }

  registerRoutes(app:any) {
    app.get('/api/real-estate-properties', this.getProperties);
    app.get('/api/real-estate-properties/:id', this.getPropertyById);
    
    console.log("Registered RealEstateProperties route(s)");
  }

  async getProperties(req: Request, res: Response) {
    // Get the request arguments with default values
    const { page = '1', size = '10', states = '' } = req.query;
    const parsedStates = (typeof states === 'string') && states.length > 0 ? states.split(',') : [];
    const parsedPage = parseInt(page.toString(), 10);
    const parsedSize = parseInt(size.toString(), 10);

    // Logic to fetch all real estate properties from the database
    const realEstatePropertiesModel = new RealEstatePropertiesModel();
    const { results, count } = await realEstatePropertiesModel.getProperties(parsedStates, parsedPage, parsedSize);
    
    // Send back the properties as the response
    const responseData = {
      meta: {
        page: parsedPage,
        size: parsedSize,
        count: count,
      },
      data: results,
    }
    
    res.json(responseData);
  }

  async getPropertyById(req: Request, res: Response) {
    const { id } = req.params;

    // Logic to fetch a single real estate property from the database
    const realEstatePropertiesModel = new RealEstatePropertiesModel();
    const property = await realEstatePropertiesModel.getPropertyById(id);

    // Send back the property as the response
    const responseData = {
      meta: {
        id: id,
      },
      data: property,
    }
    res.json(responseData);
  }
}

