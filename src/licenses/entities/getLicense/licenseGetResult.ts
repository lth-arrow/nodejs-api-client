import { ActionsGetData, ActionsGetResult } from './actionsGetResult';
import {
  ActionMessagesGetResult,
  ActionMessagesGetResultData,
} from './actionMessagesGetResult';
import { OrderGetData, OrderGetResult } from './orderGetResult';
import {
  LicensePriceGetData,
  LicensePriceGetResult,
} from './licensePriceGetResult';
import { AbstractEntity } from '../../../abstractEntity';
import {
  ActiveSeatsFindResult,
  ActiveSeatsFindResultData,
} from '../license/activeSeatsFindResult';

export enum LicenseGetFields {
  COLUMN_LICENSE_ID = 'license_id',
  COLUMN_PARENT_LICENSE_ID = 'parent_license_id',
  COLUMN_FRIENDLY_NAME = 'friendlyName',
  COLUMN_CUSTOMER_REF = 'customer_ref',
  COLUMN_STATE = 'state',
  COLUMN_STATUS_CODE = 'statusCode',
  COLUMN_IS_TRIAL = 'isTrial',
  COLUMN_IS_ADDON = 'isAddon',
  COLUMN_SERVICE_REF = 'service_ref',
  COLUMN_SKU = 'sku',
  COLUMN_NAME = 'name',
  COLUMN_SEATS = 'seats',
  COLUMN_ACTIVE_SEATS = 'activeSeats',
  COLUMN_ACTIVATION_DATETIME = 'activation_datetime',
  COLUMN_EXPIRY_DATETIME = 'expiry_datetime',
  COLUMN_AUTO_RENEW = 'autoRenew',
  COLUMN_MESSAGE = 'message',
  COLUMN_ACTIONS = 'actions',
  COLUMN_ACTION_MESSAGES = 'actionMessages',
  COLUMN_ORDER_REFERENCE = 'order_reference',
  COLUMN_ORDER = 'order',
  COLUMN_VENDOR_LICENSE_ID = 'vendor_license_id',
  COLUMN_PERIODICITY = 'periodicity',
  COLUMN_TERM = 'term',
  COLUMN_CATEGORY = 'category',
  COLUMN_PROGRAM = 'program',
  COLUMN_ASSOCIATED_SUBSCRIPTION_PROGRAM = 'associatedSubscriptionProgram',
  COLUMN_PRICE = 'price',
  COLUMN_ARROW_SUB_CATEGORIES = 'arrowSubCategories',
}

export type LicenseGetData = {
  [LicenseGetFields.COLUMN_LICENSE_ID]: string;
  [LicenseGetFields.COLUMN_PARENT_LICENSE_ID]: string | null;
  [LicenseGetFields.COLUMN_FRIENDLY_NAME]: string | null;
  [LicenseGetFields.COLUMN_CUSTOMER_REF]: string;
  [LicenseGetFields.COLUMN_STATE]: string;
  [LicenseGetFields.COLUMN_STATUS_CODE]: number;
  [LicenseGetFields.COLUMN_IS_TRIAL]: boolean;
  [LicenseGetFields.COLUMN_IS_ADDON]: boolean;
  [LicenseGetFields.COLUMN_SERVICE_REF]: string;
  [LicenseGetFields.COLUMN_SKU]: string;
  [LicenseGetFields.COLUMN_NAME]: string;
  [LicenseGetFields.COLUMN_SEATS]: number;
  [LicenseGetFields.COLUMN_ACTIVE_SEATS]: ActiveSeatsFindResultData;
  [LicenseGetFields.COLUMN_ACTIVATION_DATETIME]: string | null;
  [LicenseGetFields.COLUMN_EXPIRY_DATETIME]: string | null;
  [LicenseGetFields.COLUMN_AUTO_RENEW]?: boolean;
  [LicenseGetFields.COLUMN_MESSAGE]: string;
  [LicenseGetFields.COLUMN_ACTIONS]?: ActionsGetData;
  [LicenseGetFields.COLUMN_ACTION_MESSAGES]?: Array<ActionMessagesGetResultData>;
  [LicenseGetFields.COLUMN_ORDER_REFERENCE]: string;
  [LicenseGetFields.COLUMN_ORDER]: OrderGetData;
  [LicenseGetFields.COLUMN_VENDOR_LICENSE_ID]: string | null;
  [LicenseGetFields.COLUMN_PERIODICITY]: string;
  [LicenseGetFields.COLUMN_TERM]: string;
  [LicenseGetFields.COLUMN_CATEGORY]: string;
  [LicenseGetFields.COLUMN_PROGRAM]: string;
  [LicenseGetFields.COLUMN_ASSOCIATED_SUBSCRIPTION_PROGRAM]: string;
  [LicenseGetFields.COLUMN_PRICE]: LicensePriceGetData;
  [LicenseGetFields.COLUMN_ARROW_SUB_CATEGORIES]?: Array<string> | null;
};

export class LicenseGetResult extends AbstractEntity<LicenseGetData> {
  readonly #license_id: string;
  readonly #parent_license_id: string | null;
  readonly #friendlyName: string | null;
  readonly #customer_ref: string;
  readonly #state: string;
  readonly #statusCode: number;
  readonly #isTrial: boolean;
  readonly #isAddon: boolean;
  readonly #service_ref: string;
  readonly #sku: string;
  readonly #name: string;
  readonly #seats: number;
  readonly #activeSeats: ActiveSeatsFindResult;
  readonly #activation_datetime: string | null;
  readonly #expiry_datetime: string | null;
  readonly #autoRenew?: boolean;
  readonly #message: string;
  readonly #actions?: ActionsGetResult;
  readonly #actionMessages?: Array<ActionMessagesGetResult>;
  readonly #order_reference: string;
  readonly #order: OrderGetResult;
  readonly #vendor_license_id: string | null;
  readonly #periodicity: string;
  readonly #term: string;
  readonly #category: string;
  readonly #program: string;
  readonly #associatedSubscriptionProgram: string;
  readonly #price: LicensePriceGetResult;
  readonly #arrowSubCategories?: Array<string> | null;

  public constructor(licenseGetDataInput: LicenseGetData) {
    super(licenseGetDataInput);

    this.#license_id = licenseGetDataInput[LicenseGetFields.COLUMN_LICENSE_ID];
    this.#parent_license_id =
      licenseGetDataInput[LicenseGetFields.COLUMN_PARENT_LICENSE_ID];
    this.#friendlyName =
      licenseGetDataInput[LicenseGetFields.COLUMN_FRIENDLY_NAME];
    this.#customer_ref =
      licenseGetDataInput[LicenseGetFields.COLUMN_CUSTOMER_REF];
    this.#state = licenseGetDataInput[LicenseGetFields.COLUMN_STATE];
    this.#statusCode = licenseGetDataInput[LicenseGetFields.COLUMN_STATUS_CODE];
    this.#isTrial = licenseGetDataInput[LicenseGetFields.COLUMN_IS_TRIAL];
    this.#isAddon = licenseGetDataInput[LicenseGetFields.COLUMN_IS_ADDON];
    this.#service_ref =
      licenseGetDataInput[LicenseGetFields.COLUMN_SERVICE_REF];
    this.#sku = licenseGetDataInput[LicenseGetFields.COLUMN_SKU];
    this.#name = licenseGetDataInput[LicenseGetFields.COLUMN_NAME];
    this.#seats = licenseGetDataInput[LicenseGetFields.COLUMN_SEATS];
    this.#activeSeats = new ActiveSeatsFindResult(
      licenseGetDataInput[LicenseGetFields.COLUMN_ACTIVE_SEATS],
    );
    this.#activation_datetime =
      licenseGetDataInput[LicenseGetFields.COLUMN_ACTIVATION_DATETIME];
    this.#expiry_datetime =
      licenseGetDataInput[LicenseGetFields.COLUMN_EXPIRY_DATETIME];
    this.#autoRenew = licenseGetDataInput[LicenseGetFields.COLUMN_AUTO_RENEW];
    this.#message = licenseGetDataInput[LicenseGetFields.COLUMN_MESSAGE];
    this.#actions = licenseGetDataInput[LicenseGetFields.COLUMN_ACTIONS]
      ? new ActionsGetResult(
          licenseGetDataInput[
            LicenseGetFields.COLUMN_ACTIONS
          ] as ActionsGetData,
        )
      : undefined;
    this.#actionMessages = licenseGetDataInput[
      LicenseGetFields.COLUMN_ACTION_MESSAGES
    ]?.map((result) => new ActionMessagesGetResult(result));
    this.#order_reference =
      licenseGetDataInput[LicenseGetFields.COLUMN_ORDER_REFERENCE];
    this.#order = new OrderGetResult(
      licenseGetDataInput[LicenseGetFields.COLUMN_ORDER],
    );
    this.#vendor_license_id =
      licenseGetDataInput[LicenseGetFields.COLUMN_VENDOR_LICENSE_ID];
    this.#periodicity =
      licenseGetDataInput[LicenseGetFields.COLUMN_PERIODICITY];
    this.#term = licenseGetDataInput[LicenseGetFields.COLUMN_TERM];
    this.#category = licenseGetDataInput[LicenseGetFields.COLUMN_CATEGORY];
    this.#program = licenseGetDataInput[LicenseGetFields.COLUMN_PROGRAM];
    this.#associatedSubscriptionProgram =
      licenseGetDataInput[
        LicenseGetFields.COLUMN_ASSOCIATED_SUBSCRIPTION_PROGRAM
      ];
    this.#price = new LicensePriceGetResult(
      licenseGetDataInput[LicenseGetFields.COLUMN_PRICE],
    );
    this.#arrowSubCategories =
      licenseGetDataInput[LicenseGetFields.COLUMN_ARROW_SUB_CATEGORIES];
  }

  public get id(): string {
    return this.#license_id;
  }

  public get parentLicenseId(): string | null {
    return this.#parent_license_id;
  }

  public get friendlyName(): string | null {
    return this.#friendlyName;
  }

  public get customerRef(): string {
    return this.#customer_ref;
  }

  public get state(): string {
    return this.#state;
  }

  get statusCode(): number {
    return this.#statusCode;
  }

  get isTrial(): boolean {
    return this.#isTrial;
  }

  get isAddon(): boolean {
    return this.#isAddon;
  }

  public get serviceRef(): string {
    return this.#service_ref;
  }

  public get sku(): string {
    return this.#sku;
  }

  public get name(): string {
    return this.#name;
  }

  public get seats(): number {
    return this.#seats;
  }

  public get activeSeats(): ActiveSeatsFindResult {
    return this.#activeSeats;
  }

  public get activationDatetime(): string | null {
    return this.#activation_datetime;
  }

  public get expiryDatetime(): string | null {
    return this.#expiry_datetime;
  }

  public get autoRenew(): boolean | undefined {
    return this.#autoRenew;
  }

  public get message(): string {
    return this.#message;
  }

  public get actions(): ActionsGetResult | undefined {
    return this.#actions;
  }

  public get actionMessages(): Array<ActionMessagesGetResult> | undefined {
    return this.#actionMessages;
  }

  public get orderReference(): string {
    return this.#order_reference;
  }

  public get order(): OrderGetResult {
    return this.#order;
  }

  public get vendorLicenseId(): string | null {
    return this.#vendor_license_id;
  }

  public get periodicity(): string {
    return this.#periodicity;
  }

  public get term(): string {
    return this.#term;
  }

  public get category(): string {
    return this.#category;
  }

  public get program(): string {
    return this.#program;
  }

  public get associatedSubscriptionProgram(): string {
    return this.#associatedSubscriptionProgram;
  }

  public get price(): LicensePriceGetResult {
    return this.#price;
  }

  public get arrowSubCategories(): Array<string> | null | undefined {
    return this.#arrowSubCategories;
  }

  public toJSON(): LicenseGetData {
    return {
      [LicenseGetFields.COLUMN_LICENSE_ID]: this.id,
      [LicenseGetFields.COLUMN_PARENT_LICENSE_ID]: this.parentLicenseId,
      [LicenseGetFields.COLUMN_FRIENDLY_NAME]: this.friendlyName,
      [LicenseGetFields.COLUMN_CUSTOMER_REF]: this.customerRef,
      [LicenseGetFields.COLUMN_STATE]: this.state,
      [LicenseGetFields.COLUMN_STATUS_CODE]: this.statusCode,
      [LicenseGetFields.COLUMN_IS_TRIAL]: this.isTrial,
      [LicenseGetFields.COLUMN_IS_ADDON]: this.isAddon,
      [LicenseGetFields.COLUMN_SERVICE_REF]: this.serviceRef,
      [LicenseGetFields.COLUMN_SKU]: this.sku,
      [LicenseGetFields.COLUMN_NAME]: this.name,
      [LicenseGetFields.COLUMN_SEATS]: this.seats,
      [LicenseGetFields.COLUMN_ACTIVE_SEATS]: this.activeSeats.toJSON(),
      [LicenseGetFields.COLUMN_ACTIVATION_DATETIME]: this.activationDatetime,
      [LicenseGetFields.COLUMN_EXPIRY_DATETIME]: this.expiryDatetime,
      [LicenseGetFields.COLUMN_AUTO_RENEW]: this.autoRenew,
      [LicenseGetFields.COLUMN_MESSAGE]: this.message,
      [LicenseGetFields.COLUMN_ACTIONS]: this.actions?.toJSON(),
      [LicenseGetFields.COLUMN_ACTION_MESSAGES]: this.actionMessages?.map(
        (result) => result.toJSON(),
      ),
      [LicenseGetFields.COLUMN_ORDER_REFERENCE]: this.orderReference,
      [LicenseGetFields.COLUMN_ORDER]: this.order.toJSON(),
      [LicenseGetFields.COLUMN_VENDOR_LICENSE_ID]: this.vendorLicenseId,
      [LicenseGetFields.COLUMN_PERIODICITY]: this.periodicity,
      [LicenseGetFields.COLUMN_TERM]: this.term,
      [LicenseGetFields.COLUMN_CATEGORY]: this.category,
      [LicenseGetFields.COLUMN_PROGRAM]: this.program,
      [LicenseGetFields.COLUMN_ASSOCIATED_SUBSCRIPTION_PROGRAM]: this
        .associatedSubscriptionProgram,
      [LicenseGetFields.COLUMN_PRICE]: this.price.toJSON(),
      [LicenseGetFields.COLUMN_ARROW_SUB_CATEGORIES]: this.arrowSubCategories,
    };
  }
}
