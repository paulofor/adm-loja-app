import { AdmRoutingModule } from './adm-routing.module';

describe('AdmRoutingModule', () => {
  let admRoutingModule: AdmRoutingModule;

  beforeEach(() => {
    admRoutingModule = new AdmRoutingModule();
  });

  it('should create an instance', () => {
    expect(admRoutingModule).toBeTruthy();
  });
});
