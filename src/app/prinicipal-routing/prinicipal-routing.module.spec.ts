import { PrinicipalRoutingModule } from './prinicipal-routing.module';

describe('PrinicipalRoutingModule', () => {
  let prinicipalRoutingModule: PrinicipalRoutingModule;

  beforeEach(() => {
    prinicipalRoutingModule = new PrinicipalRoutingModule();
  });

  it('should create an instance', () => {
    expect(prinicipalRoutingModule).toBeTruthy();
  });
});
