import { MonetaryValueObject } from '@domain/value-objects';
import { UserId } from '@domain/aggregates-root';
import { OrderStatusValueObject } from '@domain/value-objects';
import { DeliveryOrCollectionAddress } from '@domain/entities';
import { OrderIdValueObject } from '@domain/value-objects';
import { UserNameValueObject } from '@domain/value-objects';
import { CustomBasket, SeparateProduct } from '@domain/entities';

export interface OrderProps {
  orderNumber: OrderIdValueObject;
  clientName: UserNameValueObject;
  clientId: UserId;
  isTheOrderForCollection: boolean;
  deliveryOrCollectionAddress: DeliveryOrCollectionAddress;
  separateProducts: SeparateProduct[];
  customBaskets: CustomBasket[]; // Create Entity
  basketPacks: any[]; // Create Entity
  status: OrderStatusValueObject;
  CostOfFreight: MonetaryValueObject;
  includesEcobag: boolean;
  ecobagFee: MonetaryValueObject;
  amount: MonetaryValueObject;
}
