import { Request, Response } from 'express';

import { ConfigsModel } from '../models/configsModel';

export class ConfigsRoute {
  app: any;
  
  constructor(app:any) {
    this.registerRoutes(app);
  }

  registerRoutes(app:any) {
    app.get('/api/configs/:id', this.getConfigByID);
    
    console.log("Registered Configs route(s)");
  }

  async getConfigByID(req: Request, res: Response) {
    const { id } = req.params;

    // Logic to fetch a single config from the database
    const configsModel = new ConfigsModel();
    const config = await configsModel.getConfigByID(id);

    // Send back the config as the response
    const responseData = {
      meta: {
        id: id,
      },
      data: config,
    }
    res.json(responseData);
  }
}
