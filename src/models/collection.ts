import { Db, Document, Filter, OptionalId, UpdateFilter } from 'mongodb'; // Import the Document type from the mongodb package

import { db as _db } from '../app';

// Create a class that represents a collection in the mongodb database
export class Collection {
  name: any;
  db: Db = _db;

  constructor(name: any) {
    this.name = name;
    console.log(`Collection ${this.name} initialized`);
    console.log(`db: ${this.db}`);
  }

  async insertOne(data: OptionalId<Document>) {
    await this.ensureCollectionExists();
    return await this.db.collection(this.name).insertOne(data);
  }

  async findOne(query: Filter<Document>) {
    await this.ensureCollectionExists();
    return await this.db.collection(this.name).findOne(query);
  }

  async findMany(query: Filter<Document>) {
    await this.ensureCollectionExists();
    return await this.db.collection(this.name).find(query).toArray();
  }

  async updateOne(query: Filter<Document>, data: UpdateFilter<Document> | Partial<Document>) {
    await this.ensureCollectionExists();
    return await this.db.collection(this.name).updateOne(query, data);
  }

  async deleteOne(query: Filter<Document> | undefined) {
    await this.ensureCollectionExists();
    return await this.db.collection(this.name).deleteOne(query);
  }

  private async ensureCollectionExists() {
    const collections = await this.db.collections();
    const collectionExists = collections.some((collection) => collection.collectionName === this.name);
    if (!collectionExists) {
      console.log(`Creating collection ${this.name}`);
      await this.db.createCollection(this.name);
    }
    else {
      console.log(`Collection ${this.name} already exists`);
    }
  }
}

