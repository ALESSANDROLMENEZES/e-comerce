import { IMapper, UniqueEntityID } from 'types-ddd';
import { BasketCategory as Aggregate } from '@domain/entities';
import { BasketCategory } from '../entities/basket-category.schema';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BasketCategoryMapper
  implements IMapper<Aggregate, BasketCategory>
{
  //
  toDomain(target: BasketCategory): Aggregate {
    return Aggregate.create(
      {
        description: target.description,
        changesLimit: target.changesLimit,
        createdAt: target.createdAt,
        updatedAt: target.updatedAt,
      },
      new UniqueEntityID(target.id),
    ).getResult();
  }
  //
  toPersistence(target: Aggregate): BasketCategory {
    return {
      id: target.id.toString(),
      description: target.description,
      changesLimit: target.changesLimit,
      createdAt: target.createdAt,
      updatedAt: target.updatedAt,
    };
  }
  //
}
