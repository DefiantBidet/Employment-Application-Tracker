import { rest } from 'msw'
import { setupServer } from 'msw/node'

import {
  createMockCompany,
  createMockCompanyList,
  createMockContact,
  createMockContactList,
  createMockApplication,
  createMockApplicationList,
} from './utils';

export default setupServer(
  // Contact
  rest.get('/api/contact', (_, res, ctx) => {
    return res(
      ctx.delay(250),
      ctx.status(200),
      ctx.json(createMockContactList(5)),
    )
  }),
  rest.post('/api/contact', (req, res, ctx) => {
    return res(
      ctx.delay(250),
      ctx.status(200),
      ctx.json(req.json()),
    )
  }),
  rest.get('/api/contact/:contactId', (req, res, ctx) => {
    const { contactId } = req.params;
    const contact = createMockContact({ id: Number.parseInt(contactId as string,10) });

    return res(
      ctx.delay(250),
      ctx.status(200),
      ctx.json(contact),
    )
  }),
  rest.put('/api/contact/:contactId', (req, res, ctx) => {
    return res(
      ctx.delay(250),
      ctx.status(200),
      ctx.json(req.json()),
    )
  }),
  rest.delete('/api/contact/:contactId', (req, res, ctx) => {
    const { contactId } = req.params;

    return res(
      ctx.delay(250),
      ctx.status(200),
      ctx.json({
        deletedId: contactId,
      }),
    )
  }),

  // Company
  rest.get('/api/company', (_, res, ctx) => {
    return res(
      ctx.delay(250),
      ctx.status(200),
      ctx.json(createMockCompanyList(5)),
    )
  }),
  rest.post('/api/company', (req, res, ctx) => {
    return res(
      ctx.delay(250),
      ctx.status(200),
      ctx.json(req.json()),
    )
  }),
  rest.get('/api/company/:companyId', (req, res, ctx) => {
    const { companyId } = req.params;
    const company = createMockCompany({ id: Number.parseInt(companyId as string,10) });

    return res(
      ctx.delay(250),
      ctx.status(200),
      ctx.json(company),
    )
  }),
  rest.put('/api/company/:companyId', (req, res, ctx) => {
    return res(
      ctx.delay(250),
      ctx.status(200),
      ctx.json(req.json()),
    )
  }),
  rest.delete('/api/company/:companyId', (req, res, ctx) => {
    const { companyId } = req.params;

    return res(
      ctx.delay(250),
      ctx.status(200),
      ctx.json({
        deletedId: companyId,
      }),
    )
  }),

  // Application
  rest.get('/api/application', (_, res, ctx) => {
    return res(
      ctx.delay(250),
      ctx.status(200),
      ctx.json(createMockApplicationList(5)),
    )
  }),
  rest.post('/api/application', (req, res, ctx) => {
    return res(
      ctx.delay(250),
      ctx.status(200),
      ctx.json(req.json()),
    )
  }),
  rest.get('/api/application/:applicationId', (req, res, ctx) => {
    const { applicationId } = req.params;
    const application = createMockApplication({ id: Number.parseInt(applicationId as string,10) });

    return res(
      ctx.delay(250),
      ctx.status(200),
      ctx.json(application),
    )
  }),
  rest.put('/api/application/:applicationId', (req, res, ctx) => {
    return res(
      ctx.delay(250),
      ctx.status(200),
      ctx.json(req.json()),
    )
  }),
  rest.delete('/api/application/:applicationId', (req, res, ctx) => {
    const { applicationId } = req.params;

    return res(
      ctx.delay(250),
      ctx.status(200),
      ctx.json({
        deletedId: applicationId,
      }),
    )
  }),
);
