import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthorService {
  constructor() {}

  findOneById(id: number) {
    const author1 = {
      id: 1,
      firstName: 'Jane',
      lastName: 'Austen',
    };

    if (id === 1) {
      return author1;
    }

    const author2 = {
      id: 2,
      firstName: 'Mark',
      lastName: 'Twain',
    };

    if (id === 2) {
      return author2;
    }
  }

  findAll(): string[] {
    return ['Author 1', 'Author 2', 'Author 3'];
  }
}
