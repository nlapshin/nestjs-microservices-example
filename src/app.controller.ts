import { createHash } from 'crypto';

import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { GenerateHashRequest, GenerateHashResponse } from './proto/app/app';

@Controller()
export class AppController {
  @GrpcMethod('TaskService', 'GenerateHash')
  generateHash(request: GenerateHashRequest): GenerateHashResponse {
    const hash = createHash('sha256').update(request.data).digest('hex');

    return {
      id: request.id,
      hash,
    };
  }
}
