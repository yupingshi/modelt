import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { patternValidator } from './pattern-validator';
import * as _ from 'lodash';
import { compareValidator } from './custom-validator.directive';
@Injectable({
  providedIn: 'root'
})
export class ContactFeedbackEnquiry {
  enquiryForm() {
    return {
      jobTitle: new FormControl(null, { validators: Validators.required, updateOn: 'blur' }),
      companyName: new FormControl(null, { validators: Validators.required, updateOn: 'blur' }),
      businessType: new FormControl(null, { validators: Validators.required, updateOn: 'blur' }),
      uid: new FormControl('', {
        validators: [Validators.required,
        patternValidator(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)],
        updateOn: 'blur'
      }),
      confirmemail: new FormControl('', {
        validators: [Validators.required,
        compareValidator('uid')], updateOn: 'blur'
      }),
      message: new FormControl(null, { validators: Validators.required, updateOn: 'blur' }),
      titleCode: new FormControl(null, { validators: Validators.required, updateOn: 'blur' }),

      firstName: new FormControl('', {
        validators: [
          Validators.required,
          patternValidator(/^[a-zA-Z][a-zA-Z0-9!@&()+-.,/?:;' ]+$/)
        ],
        updateOn: 'blur'
      }),
      lastName: new FormControl('', {
        validators: [
          Validators.required,
          patternValidator(/^[a-zA-Z][a-zA-Z0-9!@&()+-.,/?:;' ]+$/)
        ], updateOn: 'blur'
      }),
      country: new FormControl(null, { validators: Validators.required, updateOn: 'blur' }),
      postalCode: new FormControl('', { validators: [Validators.required, patternValidator(/^[a-zA-Z0-9 ]*$/)] }),
      address: [''],
      line1: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
      line2: [''],
      webSite: [''],
      faxNumber: [''],
      district: [''],
      town: new FormControl('', { validators: Validators.required, updateOn: 'blur' }),
      phone: new FormControl('', { validators: [Validators.required, patternValidator(/^\s*(?:\+?(\d{1,3}))?[- (]*(\d{3})[- )]*(\d{3})[- ]*(\d{4})(?: *[x/#]{1}(\d+))?\s*$/)], updateOn: 'blur' }),

    }
  }

}