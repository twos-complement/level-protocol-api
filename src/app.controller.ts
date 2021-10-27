import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';
import metadataExample from './metadata/example';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('saveMetadata')
  public async storeMetadata(): Promise<void> {
    console.log('metadata example', metadataExample);
    const files = this.appService.makeFileObjects(metadataExample);
    const cid = await this.appService.storeFiles(files);
    console.log('Uploaded CAR file to Web3.Storage! CID:', cid);
  }
}
