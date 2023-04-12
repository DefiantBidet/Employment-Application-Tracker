import * as DefiantBidetAPI from 'DefiantBidet';

/**
 * Generate a random number from min to max - inclusive.
 * @param  {number} min Minimum bound of Random - inclusive
 * @param  {number} max Maximum bound of Random - inclusive
 * @return {number}     Random Number between min and max
 * @function
 */
function randomNumber(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Generates a mock Company Name string based on random values from
 * multiple arrays containing generic string data.
 * @return {string} A Fake Company Name
 * @function
*/
export function generateMockCompanyName(): string {
  const randoSet1 = ['Kowalski', 'Fooby', 'Saitama'];
  const randoSet2 = ['Inc.', 'PLC', 'Ltd.', '& Foo', '& Bar', 'web8'];

  const firstWord = randoSet1[randomNumber(0, randoSet1.length - 1)];
  const secondWord = randoSet2[randomNumber(0, randoSet2.length - 1)];

  return `${firstWord} ${secondWord}`;
}

/**
 * Generates a mock [FirstName LastName] string
 * @return {string} A Fake Person Name
 * @function
*/
export function generateMockContactName() {
  const firstNames = ['Anon', 'Fooby', 'Test'];
  const LastNames = ['Smith', 'McBar-Baz', 'Jones'];

  const firstName = firstNames[randomNumber(0, firstNames.length - 1)];
  const LastName = LastNames[randomNumber(0, LastNames.length - 1)];

  return `${firstName} ${LastName}`;
}

/**
 * Creates a mock DefiantBidetAPI.Company Object
 * @param  {Partial<DefiantBidetAPI.Company>} mockCompanyData Partial Company Data [optional]
 * @return {DefiantBidetAPI.Company}                          Mock Company Data
 * @function
*/
export function createMockCompany(mockCompanyData?: Partial<DefiantBidetAPI.Company>): DefiantBidetAPI.Company {
  const mockCompany: DefiantBidetAPI.Company = {
    id: mockCompanyData?.id ?? randomNumber(0, 100),
    name: mockCompanyData?.name ?? generateMockCompanyName(),
    notes: mockCompanyData?.notes ?? '',
  };

  return mockCompany;
}

/**
 * Creates a mock DefiantBidetAPI.Contact Object
 * @param  {Partial<DefiantBidetAPI.Contact>} mockContactData Partial Contact Data [optional]
 * @return {DefiantBidetAPI.Contact}                          Mock Contact Data
 * @function
*/
export function createMockContact(mockContactData?: Partial<DefiantBidetAPI.Contact>) {
  const mockContact: DefiantBidetAPI.Contact = {
    id: mockContactData?.id ?? randomNumber(0, 100),
    company_id: mockContactData?.company_id ?? randomNumber(0, 100),
    name: mockContactData?.name ?? generateMockContactName(),
    email: mockContactData?.email ?? 'test@test.com',
    notes: mockContactData?.notes ?? '',
  };

  return mockContact;
}

/**
 * Creates  a mock DefiantBidetAPI.Application Object
 * @param  {Partial<DefiantBidetAPI.Application>} mockApplicationData Partial Application Data [optional]
 * @return {DefiantBidetAPI.Application}                              Mock Application Data
 * @function
*/
export function createMockApplication(mockApplicationData?: Partial<DefiantBidetAPI.Application>) {
  const mockApplication: DefiantBidetAPI.Application = {
    id: mockApplicationData?.id ?? randomNumber(0, 100),
    company_id: mockApplicationData?.company_id ?? randomNumber(0, 100),
    role: mockApplicationData?.role ?? 'Chief Foo Officer',
    status: mockApplicationData?.status ?? DefiantBidetAPI.ApplicationStatus.APPLIED,
    salary: mockApplicationData?.salary ?? 200000.00,
    applied_date: mockApplicationData?.applied_date ?? new Date().toISOString().slice(0, 10),
    notes: mockApplicationData?.notes ?? '',
    red_flag: mockApplicationData?.red_flag ?? false,
  };

  return mockApplication;
}
