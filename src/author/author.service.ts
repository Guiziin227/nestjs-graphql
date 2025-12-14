import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorService {
  constructor() {}

  findOneById(id: number): string {
    return `Author with ID: ${id}`;
  }

  findAll(): string[] {
    return ['Author 1', 'Author 2', 'Author 3'];
  }
}
