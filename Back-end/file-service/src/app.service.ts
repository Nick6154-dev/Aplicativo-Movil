import { Injectable } from '@nestjs/common';
import { OpenAI, OpenAIEmbeddings } from '@langchain/openai';
import { PDFLoader } from 'langchain/document_loaders/fs/pdf';
import { MemoryVectorStore } from 'langchain/vectorstores/memory';
import { RetrievalQAChain } from 'langchain/chains';
import * as process from 'node:process';

@Injectable()
export class AppService {
  constructor() {}
  
  process_doc = async (file: Express.Multer.File | undefined, question: string) => {
    try {
      const openAIApiKey = process.env.OPENAI_API_KEY;
      const model = new OpenAI({
        openAIApiKey: openAIApiKey,
      });
      const loader = new PDFLoader(`${file.path}`, {
        splitPages: false,
      });
      const doc = await loader.load();
      const vectorStore = await MemoryVectorStore.fromDocuments(
        doc,
        new OpenAIEmbeddings({
          openAIApiKey: openAIApiKey
        }),
        );
      const vectorStoreRetriever = vectorStore.asRetriever();
      const chain = RetrievalQAChain.fromLLM(model, vectorStoreRetriever);
      return await chain.call({
        query: question,
      });
    } catch (error) {
        return `Error inesperado: ${error}`;
    }
  };
}
