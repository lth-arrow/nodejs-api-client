import nock from 'nock';

import {
  ContactFields,
  DetailsFields,
  CustomerFields,
  GetResult,
  GetResultFields,
  Parameters,
  PublicApiClient,
  DataCustomersFields,
} from '../../src/';
import { expect } from 'chai';
import { PaginationFields } from '../../src/pagination';

export const CUSTOMERS_MOCK_URL = 'https://customers.localhost';
export const CUSTOMERS_GET_CUSTOMERS_URL = new RegExp('/customers.*');

export const PAYLOAD_GET_CUSTOMERS = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: {
    [DataCustomersFields.COLUMN_CUSTOMERS]: [
      {
        [CustomerFields.COLUMN_REFERENCE]: 'reference',
        [CustomerFields.COLUMN_COMPANY_NAME]: 'company_name',
        [CustomerFields.COLUMN_PARTNER_COMPANY_ID]: 'partner_company_id',
        [CustomerFields.COLUMN_ADDRESS_LINE_1]: 'address_line_1',
        [CustomerFields.COLUMN_ADDRESS_LINE_2]: 'address_line_2',
        [CustomerFields.COLUMN_ZIP]: '12345',
        [CustomerFields.COLUMN_CITY]: 'city',
        [CustomerFields.COLUMN_COUNTRY_CODE]: 'country_code',
        [CustomerFields.COLUMN_STATE]: 'state',
        [CustomerFields.COLUMN_RECEPTION_PHONE]: 'reception_phone',
        [CustomerFields.COLUMN_WEBSITE_URL]: 'website_url',
        [CustomerFields.COLUMN_EMAIL_CONTACT]: 'email_contact',
        [CustomerFields.COLUMN_HEADCOUNT]: 12345,
        [CustomerFields.COLUMN_TAX_NUMBER]: 'tax_number',
        [CustomerFields.COLUMN_REF]: 'ref',
        [CustomerFields.COLUMN_BILLING_ID]: 12345,
        [CustomerFields.COLUMN_INTERNAL_REFERENCE]: 'internal_reference',
        [CustomerFields.COLUMN_CONTACT]: {
          [ContactFields.COLUMN_FIRSTNAME]: 'firstname',
          [ContactFields.COLUMN_LASTNAME]: 'lastname',
          [ContactFields.COLUMN_EMAIL]: 'email',
          [ContactFields.COLUMN_PHONE]: 'phone',
          [ContactFields.COLUMN_SYNC_PARTNER_CONTACT_REF_ID]:
            'sync_partner_contact_ref_id',
          [ContactFields.COLUMN_CONTACT_PERSON_ID]: 'contact_person_id',
        },
        [CustomerFields.COLUMN_DETAILS]: {
          [DetailsFields.COLUMN_MIGRATION]: true,
          [DetailsFields.COLUMN_DOMAIN_NAME]: 'domain_name',
          [DetailsFields.COLUMN_ORACLE_ONLINE_KEY]: 'oracle_online_key',
          [DetailsFields.COLUMN_IBM_CE_ID]: 'ibm_ce_id',
          [DetailsFields.COLUMN_MASS_360_RESELLER_ID]: 'mass_360_reseller_id',
          [DetailsFields.COLUMN_TENANT_ID]: 'tenant_id',
        },
        [CustomerFields.COLUMN_DELETED_AT]: 'deleted_at',
      },
    ],
  },
  [GetResultFields.COLUMN_PAGINATION]: {
    [PaginationFields.COLUMN_PER_PAGE]: 15,
    [PaginationFields.COLUMN_CURRENT_PAGE]: 1,
    [PaginationFields.COLUMN_TOTAL_PAGE]: 10,
    [PaginationFields.COLUMN_TOTAL]: 155,
    [PaginationFields.COLUMN_NEXT]: '/customers?per_page=15&page=3',
    [PaginationFields.COLUMN_PREVIOUS]: '/customers?per_page=15&page=1',
  },
};

export const PAYLOAD_GET_CUSTOMERS_WITHOUT_OPTIONAL_FIELDS = {
  [GetResultFields.COLUMN_STATUS]: 200,
  [GetResultFields.COLUMN_DATA]: {
    [DataCustomersFields.COLUMN_CUSTOMERS]: [
      {
        [CustomerFields.COLUMN_REFERENCE]: 'reference',
        [CustomerFields.COLUMN_COMPANY_NAME]: 'company_name',
        [CustomerFields.COLUMN_PARTNER_COMPANY_ID]: 'partner_company_id',
        [CustomerFields.COLUMN_ZIP]: '12345',
        [CustomerFields.COLUMN_CITY]: 'city',
        [CustomerFields.COLUMN_COUNTRY_CODE]: 'country_code',
        [CustomerFields.COLUMN_STATE]: 'state',
        [CustomerFields.COLUMN_RECEPTION_PHONE]: 'reception_phone',
        [CustomerFields.COLUMN_WEBSITE_URL]: 'website_url',
        [CustomerFields.COLUMN_EMAIL_CONTACT]: 'email_contact',
        [CustomerFields.COLUMN_HEADCOUNT]: 12345,
        [CustomerFields.COLUMN_TAX_NUMBER]: 'tax_number',
        [CustomerFields.COLUMN_REF]: 'ref',
        [CustomerFields.COLUMN_BILLING_ID]: 12345,
        [CustomerFields.COLUMN_INTERNAL_REFERENCE]: 'internal_reference',
        [CustomerFields.COLUMN_CONTACT]: {
          [ContactFields.COLUMN_FIRSTNAME]: 'firstname',
          [ContactFields.COLUMN_LASTNAME]: 'lastname',
          [ContactFields.COLUMN_EMAIL]: 'email',
          [ContactFields.COLUMN_PHONE]: 'phone',
          [ContactFields.COLUMN_CONTACT_PERSON_ID]: 'contact_person_id',
        },
        [CustomerFields.COLUMN_DETAILS]: {},
      },
    ],
  },
  [GetResultFields.COLUMN_PAGINATION]: {
    [PaginationFields.COLUMN_PER_PAGE]: 15,
    [PaginationFields.COLUMN_CURRENT_PAGE]: 1,
    [PaginationFields.COLUMN_TOTAL_PAGE]: 10,
    [PaginationFields.COLUMN_TOTAL]: 155,
    [PaginationFields.COLUMN_NEXT]: '/customers?per_page=15&page=3',
    [PaginationFields.COLUMN_PREVIOUS]: '/customers?per_page=15&page=1',
  },
};

describe('CustomersClients', () => {
  describe('getCustomers', () => {
    const client = new PublicApiClient()
      .getCustomersClient()
      .setUrl(CUSTOMERS_MOCK_URL);

    it('call get method without parameters', async () => {
      nock(CUSTOMERS_MOCK_URL)
        .get(CUSTOMERS_GET_CUSTOMERS_URL)
        .reply(200, PAYLOAD_GET_CUSTOMERS);

      const result = await client.getCustomers();
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_GET_CUSTOMERS);
    });

    it('call get method with parameters', async () => {
      nock(CUSTOMERS_MOCK_URL)
        .get(CUSTOMERS_GET_CUSTOMERS_URL)
        .reply(200, PAYLOAD_GET_CUSTOMERS);

      const parameters: Parameters = {
        email: 'test.test@test.test',
      };
      const result = await client.getCustomers(parameters);
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(PAYLOAD_GET_CUSTOMERS);
    });

    it('call get method without parameters and without optional fields', async () => {
      nock(CUSTOMERS_MOCK_URL)
        .get(CUSTOMERS_GET_CUSTOMERS_URL)
        .reply(200, PAYLOAD_GET_CUSTOMERS_WITHOUT_OPTIONAL_FIELDS);

      const result = await client.getCustomers();
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(
        PAYLOAD_GET_CUSTOMERS_WITHOUT_OPTIONAL_FIELDS,
      );
    });

    it('call get method with parameters and without optional fields', async () => {
      nock(CUSTOMERS_MOCK_URL)
        .get(CUSTOMERS_GET_CUSTOMERS_URL)
        .reply(200, PAYLOAD_GET_CUSTOMERS_WITHOUT_OPTIONAL_FIELDS);

      const parameters: Parameters = {
        email: 'test.test@test.test',
      };
      const result = await client.getCustomers(parameters);
      expect(result).to.be.instanceof(GetResult);
      expect(result.toJSON()).to.eql(
        PAYLOAD_GET_CUSTOMERS_WITHOUT_OPTIONAL_FIELDS,
      );
    });
  });
});
