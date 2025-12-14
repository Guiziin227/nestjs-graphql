import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
  constructor() {}

  getOneById(id: number): string {
    return `Post with ID: ${id}`;
  }

  getPosts(): string[] {
    return ['Post 1', 'Post 2', 'Post 3'];
  }

  findPostsByAuthorId(id: number) {
    return [`Posts by Author ${id}`];
  }
}
