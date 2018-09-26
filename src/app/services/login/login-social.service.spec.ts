import { TestBed, inject } from '@angular/core/testing';

import { LoginSocialService } from './login-social.service';

describe('LoginSocialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginSocialService]
    });
  });

  it('should be created', inject([LoginSocialService], (service: LoginSocialService) => {
    expect(service).toBeTruthy();
  }));
});
