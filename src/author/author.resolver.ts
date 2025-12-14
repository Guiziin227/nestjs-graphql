import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { AuthorService } from './author.service';
import { PostService } from 'src/post/post.service';
import { Author } from './models/author.model';
import { Post } from 'src/post/models/post.model';

@Resolver(() => Author)
export class AuthorResolver {
  constructor(
    private readonly authorService: AuthorService,
    private readonly postService: PostService,
  ) {}

  @Query(() => Author, { name: 'author' })
  getAuthor(@Args('id', { type: () => Int }) id: number) {
    return this.authorService.findOneById(id);
  }

  @ResolveField('posts', () => [Post])
  getPosts(@Parent() autor: Author) {
    const { id } = autor;
    return this.postService.findPostsByAuthorId(id);
  }
}
