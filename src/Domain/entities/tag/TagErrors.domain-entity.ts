import {
  TAG_DESCRIPTION_MAX_STRING_LENGTH,
  TAG_DESCRIPTION_MIN_STRING_LENGTH,
} from './Tag.domain-entity';

export const ERROR_TAG_DESCRIPTION_LENGTH = `Tag Description length Should be between ${TAG_DESCRIPTION_MIN_STRING_LENGTH} and ${TAG_DESCRIPTION_MAX_STRING_LENGTH}`;
