import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class GetAuthorArgs {
  @Field({ nullable: true })
  fistName?: string;
  @Field({ defaultValue: 'Doe' })
  lastName: string;
}
