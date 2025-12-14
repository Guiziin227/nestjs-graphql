import { Module } from '@nestjs/common';
import { AuthorResolver } from './author.resolver';
import { AuthorService } from './author.service';
import { PostModule } from 'src/post/post.module';

@Module({
  imports: [PostModule],
  providers: [AuthorResolver, AuthorService],
})
export class AuthorModule {}
