export class CreateItemDto {
  title: string;
  type: string; // book | article
  author?: string;
  description?: string;
}
