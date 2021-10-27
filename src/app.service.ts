import { Injectable } from '@nestjs/common';
import { Web3Storage } from 'web3.storage';
import { File } from 'web3.storage';

const API_TOKEN = process.env.API_TOKEN;

@Injectable()
export class AppService {
  public client: Web3Storage;

  constructor() {
    console.log('api token', API_TOKEN);
    this.client = new Web3Storage({
      token: API_TOKEN,
    });
  }

  public makeFileObjects(metadata) {
    const buffer = Buffer.from(JSON.stringify(metadata));
    const files = [new File([buffer], 'metadata.json')];
    return files;
  }

  public async storeFiles(files) {
    const client = this.client;
    const cid = await client.put(files);
    console.log('stored files with cid:', cid);
    return cid;
  }
}
