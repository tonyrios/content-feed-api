class Metadata {
  priority: number;
  publishDate: string;
}

export class Comment {
  text: string;
  author: string;
  profilePic: string;
  likes: number;
}

class TextData {
  title: string;
  subTitle: string;
  body: string;
  author: Author;
}

export class Author {
  first: string;
  last: string;
}

export class ContentCardDto {
  'id': string;
  'imageUri': string;
  'textData': TextData;
  'metadata': Metadata;
  'comments': Comment[];
}

export class ContentCardRawResponseDto {
  'contentCards': ContentCardDto[];
}

export class ContentCardBuiltResponseDto {
  'id': string;
  'imageUri': string;
  'author': string;
  'title': string;
  'subtitle': string;
  'content': string;
  'comments': Comment[];
}
