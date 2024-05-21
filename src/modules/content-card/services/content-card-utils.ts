import {
  Author,
  ContentCardBuiltResponseDto,
  ContentCardDto,
} from '../dtos/content-card.dto';

export const buildName = ({ first, last }: Author) => {
  const name = `${first} ${last}`;
  return name.trim();
};

export const builtContentCards = (contentCards: ContentCardDto[]) => {
  const sortedContentCards = contentCards.sort(
    (a, b) => b.metadata.priority - a.metadata.priority,
  );

  return sortedContentCards.map((contentCardRawResponse) => {
    const builtContentCard: ContentCardBuiltResponseDto = {
      id: contentCardRawResponse.id,
      imageUri: contentCardRawResponse.imageUri,
      author: buildName(contentCardRawResponse?.textData?.author),
      title: contentCardRawResponse.textData.title,
      subtitle: contentCardRawResponse.textData.subTitle,
      content: contentCardRawResponse.textData.body,
      comments: contentCardRawResponse.comments,
    };
    return builtContentCard;
  });
};
