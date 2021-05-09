import { ProductCategory as Aggregate } from '@domain/entities';
import { UniqueEntityID } from 'types-ddd';
import { CategoryMapper } from './category.mapper';
import { Category } from '../entities/category.schema';

describe('category.mapper', () => {
  //
  let domain: Aggregate;
  let persistence: Category;
  //
  beforeAll(() => {
    domain = Aggregate.create(
      {
        description: 'valid_description',
      },
      new UniqueEntityID('valid_id'),
    ).getResult();
    persistence = {
      id: 'valid_id',
      description: 'valid_description',
    };
  });
  //
  it('should be defined', () => {
    const mapper = new CategoryMapper();
    expect(mapper).toBeDefined();
  });

  it('should convert from domain to persistence ', () => {
    const mapper = new CategoryMapper();
    const result = mapper.toPersistence(domain);
    expect(result).toEqual(persistence);
  });

  it('should convert from persistence to domain ', () => {
    const mapper = new CategoryMapper();
    const result = mapper.toDomain(persistence);
    expect(result).toEqual(domain);
  });
});
