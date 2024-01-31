import {
  Controller,
  Post,
  UploadedFile,
  Body,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('/fileService')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file', { dest: './uploads/' }))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body('question') question: string,
  ) {
    if (!file || !question) {
      return { error: 'File or question not provided' };
    }
    const response = await this.appService.process_doc(file, question);
    return response;
  }
}
