import {
  ContentCardBuiltResponseDto,
  ContentCardDto,
  Comment,
} from '../dtos/content-card.dto';

export const contentCardsMock: ContentCardDto[] = [
  {
    id: 'id1',
    imageUri: 'imageUri1',
    textData: {
      title: 'title1',
      subTitle: 'subtitle1',
      body: 'content1',
      author: {
        first: 'firstName1',
        last: 'lastName1',
      },
    },
    metadata: { priority: 4, publishDate: 'publishDate1' },
    comments: [new Comment()],
  },
  {
    id: 'id2',
    imageUri: 'imageUri2',
    textData: {
      title: 'title2',
      subTitle: 'subtitle2',
      body: 'content2',
      author: {
        first: 'firstName2',
        last: 'lastName2',
      },
    },
    metadata: { priority: 9, publishDate: 'publishDate2' },
    comments: [new Comment()],
  },
];

export const expectedResponse: ContentCardBuiltResponseDto[] = [
  {
    id: 'id2',
    imageUri: 'imageUri2',
    title: 'title2',
    subtitle: 'subtitle2',
    author: 'firstName2 lastName2',
    content: 'content2',
    comments: [new Comment()],
  },
  {
    id: 'id1',
    imageUri: 'imageUri1',
    title: 'title1',
    subtitle: 'subtitle1',
    author: 'firstName1 lastName1',
    content: 'content1',
    comments: [new Comment()],
  },
];
