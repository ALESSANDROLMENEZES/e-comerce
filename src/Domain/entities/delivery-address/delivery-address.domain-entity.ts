import { BaseDomainEntity, Entity, Result, UniqueEntityID } from 'types-ddd';
import { AddressComplementValueObject } from '@domain/value-objects';
import { AddressNumberValueObject } from '@domain/value-objects';
import { StreetNameValueObject } from '@domain/value-objects';
import { ZipCodeValueObject } from '@domain/value-objects';
import { RegionId } from '@domain/aggregates-root';

export interface DeliveryAddressProps extends BaseDomainEntity {
  zipCode: ZipCodeValueObject;
  street: StreetNameValueObject;
  number: AddressNumberValueObject;
  complement: AddressComplementValueObject;
  regionId: RegionId;
}

export class DeliveryOrCollectionAddress extends Entity<DeliveryAddressProps> {
  private constructor(props: DeliveryAddressProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create(
    props: DeliveryAddressProps,
    id?: UniqueEntityID,
  ): Result<DeliveryOrCollectionAddress> {
    return Result.ok<DeliveryOrCollectionAddress>(
      new DeliveryOrCollectionAddress(props, id),
    );
  }
}
