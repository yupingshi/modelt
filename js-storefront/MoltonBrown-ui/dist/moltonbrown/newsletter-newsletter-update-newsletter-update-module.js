(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newsletter-newsletter-update-newsletter-update-module"],{

/***/ "./src/app/newsletter/newsletter-update/newsletter-update.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/newsletter/newsletter-update/newsletter-update.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"conatiner newsletter-body\">\r\n  <div class=\"checkout-content\">\r\n    <div class=\"samples-container\">\r\n      <div class=\"innerSampleContainer\">\r\n        <form \r\n        [formGroup]=\"newsLetterForm\"\r\n        (ngSubmit)=\"onSubmitForm($event)\"\r\n        custom-focus\r\n          class=\"newsletter-update-form\">\r\n          <fieldset>\r\n            <h2>Tell us more...</h2>\r\n            <h4 class=\"mobile-center\">\r\n              Please enter your details below so that we can personalise your\r\n              experience to tell you more about what you love.\r\n            </h4>\r\n            <div class=\"form-group\">\r\n              <input\r\n                formControlName=\"firstName\"\r\n                autocorrect=\"off\"\r\n                autocomplete=\"off\"\r\n                placeholder=\"First Name*\"\r\n                type=\"text\"\r\n                class=\"form-control  mandatory\"\r\n                \r\n              />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input\r\n                formControlName=\"lastName\"\r\n                autocorrect=\"off\"\r\n                autocomplete=\"off\"\r\n                placeholder=\"Last Name*\"\r\n                type=\"text\"\r\n                class=\"form-control  mandatory\"\r\n\r\n              />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input\r\n                formControlName=\"emailAddress\"\r\n                autocorrect=\"off\"\r\n                autocomplete=\"off\"\r\n                placeholder=\"Email Address*\"\r\n                type=\"text\"\r\n                class=\"form-control  mandatory\"\r\n              />\r\n            </div>\r\n            <h4 class=\"margin-space\">\r\n              Date of birth<span class=\"lighter\"\r\n                >(For an extra special treat on your birthday)</span\r\n              >\r\n            </h4>\r\n            <div class=\"form-group split-input\">\r\n              <select   formControlName=\"day\" class=\"mandatory form-control\">\r\n                <option  selected>Day</option>       \r\n                <option *ngFor=\"let day of days\">{{ day.day }}</option>    \r\n            </select>\r\n            </div>\r\n            <div class=\"form-group split-input\">\r\n              <select formControlName=\"month\" class=\"mandatory form-control\">\r\n                <option>Month</option>\r\n                <option *ngFor=\"let month of months\">{{ month.month }}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group split-input\">\r\n              <select formControlName=\"year\" class=\"mandatory form-control\">\r\n                <option>Year</option>\r\n                <option *ngFor=\"let year of years\">{{ year.year }}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group clearfix mobile-margin\">\r\n              <h4 class=\"\">Gender</h4>\r\n              <div class=\"radio gender-radio\">\r\n                <input name=\"gender\" formControlName=\"gender\" type=\"radio\" value=\"F\" />\r\n                <label for=\"genderfemale\">Female</label>\r\n              </div>\r\n              <div class=\"radio\">\r\n                <input name=\"gender\"  formControlName=\"gender\" type=\"radio\" value=\"M\" />\r\n                <label for=\"gendermale\">Male</label>\r\n              </div>\r\n              <div class=\"radio\">\r\n                <input name=\"gender\" formControlName=\"gender\" value=\"NM\" type=\"radio\" />\r\n                <label for=\"genderneutral\">Non-binary</label>\r\n              </div>\r\n            </div>\r\n            <h4>\r\n              Postal address&nbsp;<span class=\"lighter\"\r\n                >(For exclusive invitations and updates straight to your\r\n                door)</span\r\n              >\r\n            </h4>\r\n            <div class=\"form-group\">\r\n              <input\r\n                autocorrect=\"off\"\r\n                autocomplete=\"off\"\r\n                placeholder=\"House Number / Name\"\r\n                type=\"text\"\r\n                formControlName=\"line1\"\r\n                class=\"form-control  mandatory\"\r\n                \r\n              />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input\r\n                autocorrect=\"off\"\r\n                autocomplete=\"off\"\r\n                placeholder=\"Street\"\r\n                type=\"text\"\r\n                formControlName=\"line2\"\r\n                class=\"form-control  mandatory\"\r\n                \r\n              />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input\r\n                autocorrect=\"off\"\r\n                autocomplete=\"off\"\r\n                placeholder=\"Town or City\"\r\n                type=\"text\"\r\n                formControlName=\"town\"\r\n                class=\"form-control  mandatory\"\r\n                \r\n              />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input\r\n                autocorrect=\"off\"\r\n                autocomplete=\"off\"\r\n                placeholder=\"County, state or region\"\r\n                type=\"text\"\r\n                formControlName=\"district\"\r\n                class=\"form-control  mandatory\"\r\n                \r\n              />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input\r\n                autocorrect=\"off\"\r\n                autocomplete=\"off\"\r\n                placeholder=\"Postcode or zip code\"\r\n                type=\"text\"\r\n                formControlName=\"postalCode\"\r\n                class=\"form-control  mandatory\"\r\n                \r\n              />\r\n            </div>\r\n            <div class=\"form-group countrySelect\">\r\n              <select class=\"mandatory form-control\">\r\n                <option value=\"\">Please select</option>\r\n                <option *ngFor=\"let data of countries\">{{data.name}}</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <input type=\"submit\" value=\"update\" class=\"btn btn-default\" />\r\n            </div>\r\n          </fieldset>\r\n        </form>\r\n       \r\n        <p class=\"lighter\">*Required field</p>\r\n        <br />\r\n        <p>\r\n          To <strong>unsubscribe</strong> from Molton Brown completely please\r\n          <a (click)=\"onUnsubsribe()\">click here</a>\r\n        </p>\r\n        <br />\r\n        <p>\r\n          We will only use your information for marketing purposes. Molton Brown\r\n          does not share your information with third parties and you can\r\n          unsubscribe at any time.\r\n        </p>\r\n      </div>\r\n      <ng-template #newsUnsubscribe>\r\n        <div class=\"confirmation-content thankyou\">\r\n          <h1>Sorry you're leaving</h1>\r\n          <h4>\r\n            You have been removed from our mailing list, but don't worry - if\r\n            you change your mind you can sign up on our website\r\n            <a routerLink=\"/store\" class=\"cta\" title=\"\">here</a> or in one of\r\n            our stores.\r\n          </h4>\r\n          <a routerLink=\"/store/newsletter-sign-up\" class=\"cta\" title=\"\">Continue Shopping</a>\r\n        </div>\r\n      </ng-template>\r\n      <div class=\"inner-container-RightBlock\">\r\n        <img src=\"//images.moltonbrown.co.uk/MBPromoImages/email-signup_desktop.jpg\" class=\"desk-block\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n -->\r\n\r\n <div class=\"sapCpBody\">\r\n    <form id=\"application-MarketingContent-manage-component---ObjectView--DesignView--ContentPage\" data-sap-cp-key=\"9CD4DD6BAA5989AE4F7917282477AC20C4DA7D2A\" class=\"sapCRLPage sapCRLPageEditable sapCpContentPage sapCpContentPageEditable sapCpContentPageLoading\" data-sap-cp-lpkey=\"\" data-sap-cp-prefill-data=\"true\" data-sap-cp-version=\"11.12.12\">\r\n    <div id=\"application-MarketingContent-manage-component---ObjectView--DesignView--ContentPage-0L\" data-sap-cp-key=\"36F678F75D0CDD1AA5AC98D498418D35193EA576\" class=\"sapCRLLayout sapCRLLayoutEditable sapCRLLayoutVertical sapCpLayout\">\r\n        <div id=\"application-MarketingContent-manage-component---ObjectView--DesignView--ContentPage-0L-0W\" data-sap-cp-key=\"D5CED831982FCC6691EEEDC1F5B8C1AA21AE97AF\" class=\"sapCRLWidget sapCRLWidgetEditable sapCpInputWidget sapCpWidget sapCpWidgetEditable\">\r\n            <div class=\"sapCRLWidgetContent sapCRLWidgetContentLeft sapCpWidgetContent sapCpWidgetContentLeft\" style=\"width:20%\">\r\n                <label id=\"__label14\" class=\"sapCpLabel\" for=\"__input5\">First Name</label>\r\n            </div>\r\n            <div class=\"sapCRLWidgetContent sapCRLWidgetContentRight sapCpWidgetContent sapCpWidgetContentRight\" style=\"padding-left:20%\">\r\n                <input id=\"__input5\" class=\"sapCpInput\" type=\"text\" placeholder=\"First Name\" maxlength=\"40\">\r\n            </div>\r\n            <div class=\"sapCRLWidgetFixContent sapCpWidgetFixContent\"></div>\r\n        </div>\r\n        <div id=\"application-MarketingContent-manage-component---ObjectView--DesignView--ContentPage-0L-1W\" data-sap-cp-key=\"6071639B842EA882CF7C632B0C93B44AAF8F5292\" class=\"sapCRLWidget sapCRLWidgetEditable sapCpInputWidget sapCpWidget sapCpWidgetEditable\">\r\n            <div class=\"sapCRLWidgetContent sapCRLWidgetContentLeft sapCpWidgetContent sapCpWidgetContentLeft\" style=\"width:20%\">\r\n                <label id=\"__label15\" class=\"sapCpLabel\" for=\"__input6\">Last Name</label>\r\n            </div>\r\n            <div class=\"sapCRLWidgetContent sapCRLWidgetContentRight sapCpWidgetContent sapCpWidgetContentRight\" style=\"padding-left:20%\">\r\n                <input id=\"__input6\" class=\"sapCpInput\" type=\"text\" maxlength=\"40\">\r\n            </div>\r\n            <div class=\"sapCRLWidgetFixContent sapCpWidgetFixContent\"></div>\r\n        </div>\r\n        <div id=\"application-MarketingContent-manage-component---ObjectView--DesignView--ContentPage-0L-2W\" data-sap-cp-key=\"6A6EAFBDCA76F6E3AB88F685B6ABEAE492E432F7\" class=\"sapCRLWidget sapCRLWidgetEditable sapCpInputWidget sapCpWidget sapCpWidgetEditable sapCpWidgetMandatory\">\r\n            <div class=\"sapCRLWidgetContent sapCRLWidgetContentLeft sapCpWidgetContent sapCpWidgetContentLeft\" style=\"width:20%\">\r\n                <label id=\"__label16\" class=\"sapCpLabel sapCpLabelRequired\" for=\"__input7\">E-Mail Address</label>\r\n            </div>\r\n            <div class=\"sapCRLWidgetContent sapCRLWidgetContentRight sapCpWidgetContent sapCpWidgetContentRight\" style=\"padding-left:20%\">\r\n                <input id=\"__input7\" class=\"sapCpInput\" type=\"text\" required=\"required\" maxlength=\"241\">\r\n            </div>\r\n            <div class=\"sapCRLWidgetFixContent sapCpWidgetFixContent\"></div>\r\n        </div>\r\n        <div id=\"application-MarketingContent-manage-component---ObjectView--DesignView--ContentPage-0L-3W\" data-sap-cp-key=\"C81BA6D004E168295F18E2C92722D1387085B0D8\" class=\"sapCRLWidget sapCRLWidgetEditable sapCpInputWidget sapCpWidget sapCpWidgetEditable\">\r\n            <div class=\"sapCRLWidgetContent sapCRLWidgetContentLeft sapCpWidgetContent sapCpWidgetContentLeft\" style=\"width:20%\">\r\n                <label id=\"__label17\" class=\"sapCpLabel\">Date of birth </label>\r\n            </div>\r\n            <div class=\"sapCRLWidgetContent sapCRLWidgetContentRight sapCpWidgetContent sapCpWidgetContentRight\" style=\"padding-left:20%\">\r\n                <div id=\"__picker1\" class=\"sapCpDatePicker\">\r\n                    <select id=\"__down5\" class=\"sapCpDatePickerDay sapCpDropDown sapCpDropDownPlaceholder\" data-sap-cp-dropdowntype=\"Date-Day\">\r\n                        <option label=\"Day\" value=\"\" selected=\"selected\">Day</option>\r\n                    </select>\r\n                    <select id=\"__down6\" class=\"sapCpDatePickerMonth sapCpDropDown sapCpDropDownPlaceholder\" data-sap-cp-dropdowntype=\"Date-Month\">\r\n                        <option label=\"Month\" value=\"\" selected=\"selected\">Month</option>\r\n                        <option label=\"January\" value=\"01\">January</option>\r\n                        <option label=\"February\" value=\"02\">February</option>\r\n                        <option label=\"March\" value=\"03\">March</option>\r\n                        <option label=\"April\" value=\"04\">April</option>\r\n                        <option label=\"May\" value=\"05\">May</option>\r\n                        <option label=\"June\" value=\"06\">June</option>\r\n                        <option label=\"July\" value=\"07\">July</option>\r\n                        <option label=\"August\" value=\"08\">August</option>\r\n                        <option label=\"September\" value=\"09\">September</option>\r\n                        <option label=\"October\" value=\"10\">October</option>\r\n                        <option label=\"November\" value=\"11\">November</option>\r\n                        <option label=\"December\" value=\"12\">December</option>\r\n                    </select>\r\n                    <select id=\"__down7\" class=\"sapCpDatePickerYear sapCpDropDown sapCpDropDownPlaceholder\" data-sap-cp-dropdowntype=\"Date-Year-0-120\">\r\n                        <option label=\"Year\" value=\"\" selected=\"selected\">Year</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"sapCRLWidgetFixContent sapCpWidgetFixContent\"></div>\r\n        </div>\r\n        <div id=\"application-MarketingContent-manage-component---ObjectView--DesignView--ContentPage-0L-4W\" data-sap-cp-key=\"9066DEA2C7FB54039EBA50A4C703399EBDAF5E9F\" class=\"sapCRLWidget sapCRLWidgetEditable sapCpInputWidget sapCpWidget sapCpWidgetEditable\">\r\n            <div class=\"sapCRLWidgetContent sapCRLWidgetContentLeft sapCpWidgetContent sapCpWidgetContentLeft\" style=\"width:20%\">\r\n                <label id=\"__label18\" class=\"sapCpLabel\" for=\"__down8\">Gender</label>\r\n            </div>\r\n            <div class=\"sapCRLWidgetContent sapCRLWidgetContentRight sapCpWidgetContent sapCpWidgetContentRight\" style=\"padding-left:20%\">\r\n                <select id=\"__down8\" class=\"sapCpDropDown\">\r\n                    <option label=\"Male\" value=\"1\" selected=\"selected\">Male</option>\r\n                    <option label=\" \" value=\"\"> </option>\r\n                    <option label=\"Female\" value=\"2\">Female</option>\r\n                    <option label=\"Gender not known\" value=\"\">Gender not known</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"sapCRLWidgetFixContent sapCpWidgetFixContent\"></div>\r\n        </div>\r\n        <div id=\"application-MarketingContent-manage-component---ObjectView--DesignView--ContentPage-0L-5W\" data-sap-cp-key=\"FE348CF17E89864906518F6B24C8E1D6F10CB691\" class=\"sapCRLWidget sapCRLWidgetEditable sapCpTextWidget sapCpWidget sapCpWidgetEditable\">\r\n            <div class=\"sapCRLWidgetContentNoIndent sapCpWidgetContentNoIndent\">\r\n                <h4><strong>Postal address&nbsp;(For exclusive invitations and updates straight to your door)</strong></h4></div>\r\n        </div>\r\n        <div id=\"application-MarketingContent-manage-component---ObjectView--DesignView--ContentPage-0L-6W\" data-sap-cp-key=\"DB28C659316F0B9C898F254D648BCFD0C046B76D\" class=\"sapCRLWidget sapCRLWidgetEditable sapCpInputWidget sapCpWidget sapCpWidgetEditable\">\r\n            <div class=\"sapCRLWidgetContent sapCRLWidgetContentLeft sapCpWidgetContent sapCpWidgetContentLeft\" style=\"width:20%\">\r\n                <label id=\"__label19\" class=\"sapCpLabel\" for=\"__input8\">House Number</label>\r\n            </div>\r\n            <div class=\"sapCRLWidgetContent sapCRLWidgetContentRight sapCpWidgetContent sapCpWidgetContentRight\" style=\"padding-left:20%\">\r\n                <input id=\"__input8\" class=\"sapCpInput\" type=\"number\" max=\"9999999999\">\r\n            </div>\r\n            <div class=\"sapCRLWidgetFixContent sapCpWidgetFixContent\"></div>\r\n        </div>\r\n        <div id=\"application-MarketingContent-manage-component---ObjectView--DesignView--ContentPage-0L-7W\" data-sap-cp-key=\"D4C2A657CB63F27BD8C281870C552C5AE36412B5\" class=\"sapCRLWidget sapCRLWidgetEditable sapCpInputWidget sapCpWidget sapCpWidgetEditable\">\r\n            <div class=\"sapCRLWidgetContent sapCRLWidgetContentLeft sapCpWidgetContent sapCpWidgetContentLeft\" style=\"width:20%\">\r\n                <label id=\"__label20\" class=\"sapCpLabel\" for=\"__input9\">Street</label>\r\n            </div>\r\n            <div class=\"sapCRLWidgetContent sapCRLWidgetContentRight sapCpWidgetContent sapCpWidgetContentRight\" style=\"padding-left:20%\">\r\n                <input id=\"__input9\" class=\"sapCpInput\" type=\"text\" maxlength=\"60\">\r\n            </div>\r\n            <div class=\"sapCRLWidgetFixContent sapCpWidgetFixContent\"></div>\r\n        </div>\r\n        <div id=\"application-MarketingContent-manage-component---ObjectView--DesignView--ContentPage-0L-8W\" data-sap-cp-key=\"047D80AD8D206D26BE1F513ABEE5015BCCB7F0C1\" class=\"sapCRLWidget sapCRLWidgetEditable sapCpInputWidget sapCpWidget sapCpWidgetEditable\">\r\n            <div class=\"sapCRLWidgetContent sapCRLWidgetContentLeft sapCpWidgetContent sapCpWidgetContentLeft\" style=\"width:20%\">\r\n                <label id=\"__label21\" class=\"sapCpLabel\" for=\"__down9\">Country</label>\r\n            </div>\r\n            <div class=\"sapCRLWidgetContent sapCRLWidgetContentRight sapCpWidgetContent sapCpWidgetContentRight\" style=\"padding-left:20%\">\r\n                <select id=\"__down9\" class=\"sapCpDropDown sapCpDropDownPlaceholder\">\r\n                    <option label=\"Country\" value=\"\" selected=\"selected\">Country</option>\r\n                    <option label=\"Afghanistan\" value=\"AF\">Afghanistan</option>\r\n                    <option label=\"Aland Islands\" value=\"AX\">Aland Islands</option>\r\n                    <option label=\"Albania\" value=\"AL\">Albania</option>\r\n                    <option label=\"Algeria\" value=\"DZ\">Algeria</option>\r\n                    <option label=\"Amer.Virgin Is.\" value=\"VI\">Amer.Virgin Is.</option>\r\n                    <option label=\"Andorra\" value=\"AD\">Andorra</option>\r\n                    <option label=\"Angola\" value=\"AO\">Angola</option>\r\n                    <option label=\"Anguilla\" value=\"AI\">Anguilla</option>\r\n                    <option label=\"Antarctica\" value=\"AQ\">Antarctica</option>\r\n                    <option label=\"Antigua/Barbuda\" value=\"AG\">Antigua/Barbuda</option>\r\n                    <option label=\"Argentina\" value=\"AR\">Argentina</option>\r\n                    <option label=\"Armenia\" value=\"AM\">Armenia</option>\r\n                    <option label=\"Aruba\" value=\"AW\">Aruba</option>\r\n                    <option label=\"Australia\" value=\"AU\">Australia</option>\r\n                    <option label=\"Austria\" value=\"AT\">Austria</option>\r\n                    <option label=\"Azerbaijan\" value=\"AZ\">Azerbaijan</option>\r\n                    <option label=\"Bahamas\" value=\"BS\">Bahamas</option>\r\n                    <option label=\"Bahrain\" value=\"BH\">Bahrain</option>\r\n                    <option label=\"Bangladesh\" value=\"BD\">Bangladesh</option>\r\n                    <option label=\"Barbados\" value=\"BB\">Barbados</option>\r\n                    <option label=\"Belarus\" value=\"BY\">Belarus</option>\r\n                    <option label=\"Belgium\" value=\"BE\">Belgium</option>\r\n                    <option label=\"Belize\" value=\"BZ\">Belize</option>\r\n                    <option label=\"Benin\" value=\"BJ\">Benin</option>\r\n                    <option label=\"Bermuda\" value=\"BM\">Bermuda</option>\r\n                    <option label=\"Bhutan\" value=\"BT\">Bhutan</option>\r\n                    <option label=\"Bolivia\" value=\"BO\">Bolivia</option>\r\n                    <option label=\"Bonaire, Saba\" value=\"BQ\">Bonaire, Saba</option>\r\n                    <option label=\"Bosnia-Herz.\" value=\"BA\">Bosnia-Herz.</option>\r\n                    <option label=\"Botswana\" value=\"BW\">Botswana</option>\r\n                    <option label=\"Bouvet Islands\" value=\"BV\">Bouvet Islands</option>\r\n                    <option label=\"Brazil\" value=\"BR\">Brazil</option>\r\n                    <option label=\"Brit.Ind.Oc.Ter\" value=\"IO\">Brit.Ind.Oc.Ter</option>\r\n                    <option label=\"Brit.Virgin Is.\" value=\"VG\">Brit.Virgin Is.</option>\r\n                    <option label=\"Brunei Daruss.\" value=\"BN\">Brunei Daruss.</option>\r\n                    <option label=\"Bulgaria\" value=\"BG\">Bulgaria</option>\r\n                    <option label=\"Burkina Faso\" value=\"BF\">Burkina Faso</option>\r\n                    <option label=\"Burundi\" value=\"BI\">Burundi</option>\r\n                    <option label=\"Cambodia\" value=\"KH\">Cambodia</option>\r\n                    <option label=\"Cameroon\" value=\"CM\">Cameroon</option>\r\n                    <option label=\"Canada\" value=\"CA\">Canada</option>\r\n                    <option label=\"Cape Verde\" value=\"CV\">Cape Verde</option>\r\n                    <option label=\"CAR\" value=\"CF\">CAR</option>\r\n                    <option label=\"Cayman Islands\" value=\"KY\">Cayman Islands</option>\r\n                    <option label=\"Chad\" value=\"TD\">Chad</option>\r\n                    <option label=\"Chile\" value=\"CL\">Chile</option>\r\n                    <option label=\"China\" value=\"CN\">China</option>\r\n                    <option label=\"Christmas Islnd\" value=\"CX\">Christmas Islnd</option>\r\n                    <option label=\"Cocos Islands\" value=\"CC\">Cocos Islands</option>\r\n                    <option label=\"Colombia\" value=\"CO\">Colombia</option>\r\n                    <option label=\"Comoros\" value=\"KM\">Comoros</option>\r\n                    <option label=\"Cook Islands\" value=\"CK\">Cook Islands</option>\r\n                    <option label=\"Costa Rica\" value=\"CR\">Costa Rica</option>\r\n                    <option label=\"Cote d'Ivoire\" value=\"CI\">Cote d'Ivoire</option>\r\n                    <option label=\"Croatia\" value=\"HR\">Croatia</option>\r\n                    <option label=\"Cuba\" value=\"CU\">Cuba</option>\r\n                    <option label=\"Curaçao\" value=\"CW\">Curaçao</option>\r\n                    <option label=\"Cyprus\" value=\"CY\">Cyprus</option>\r\n                    <option label=\"Czech Republic\" value=\"CZ\">Czech Republic</option>\r\n                    <option label=\"Dem. Rep. Congo\" value=\"CD\">Dem. Rep. Congo</option>\r\n                    <option label=\"Denmark\" value=\"DK\">Denmark</option>\r\n                    <option label=\"Djibouti\" value=\"DJ\">Djibouti</option>\r\n                    <option label=\"Dominica\" value=\"DM\">Dominica</option>\r\n                    <option label=\"Dominican Rep.\" value=\"DO\">Dominican Rep.</option>\r\n                    <option label=\"Ecuador\" value=\"EC\">Ecuador</option>\r\n                    <option label=\"Egypt\" value=\"EG\">Egypt</option>\r\n                    <option label=\"El Salvador\" value=\"SV\">El Salvador</option>\r\n                    <option label=\"Equatorial Guin\" value=\"GQ\">Equatorial Guin</option>\r\n                    <option label=\"Eritrea\" value=\"ER\">Eritrea</option>\r\n                    <option label=\"Estonia\" value=\"EE\">Estonia</option>\r\n                    <option label=\"Eswatini\" value=\"SZ\">Eswatini</option>\r\n                    <option label=\"Ethiopia\" value=\"ET\">Ethiopia</option>\r\n                    <option label=\"Falkland Islnds\" value=\"FK\">Falkland Islnds</option>\r\n                    <option label=\"Faroe Islands\" value=\"FO\">Faroe Islands</option>\r\n                    <option label=\"Fiji\" value=\"FJ\">Fiji</option>\r\n                    <option label=\"Finland\" value=\"FI\">Finland</option>\r\n                    <option label=\"France\" value=\"FR\">France</option>\r\n                    <option label=\"Frenc.Polynesia\" value=\"PF\">Frenc.Polynesia</option>\r\n                    <option label=\"French Guayana\" value=\"GF\">French Guayana</option>\r\n                    <option label=\"French S.Territ\" value=\"TF\">French S.Territ</option>\r\n                    <option label=\"Gabon\" value=\"GA\">Gabon</option>\r\n                    <option label=\"Gambia\" value=\"GM\">Gambia</option>\r\n                    <option label=\"Georgia\" value=\"GE\">Georgia</option>\r\n                    <option label=\"Germany\" value=\"DE\">Germany</option>\r\n                    <option label=\"Ghana\" value=\"GH\">Ghana</option>\r\n                    <option label=\"Gibraltar\" value=\"GI\">Gibraltar</option>\r\n                    <option label=\"Greece\" value=\"GR\">Greece</option>\r\n                    <option label=\"Greenland\" value=\"GL\">Greenland</option>\r\n                    <option label=\"Grenada\" value=\"GD\">Grenada</option>\r\n                    <option label=\"Guadeloupe\" value=\"GP\">Guadeloupe</option>\r\n                    <option label=\"Guam\" value=\"GU\">Guam</option>\r\n                    <option label=\"Guatemala\" value=\"GT\">Guatemala</option>\r\n                    <option label=\"Guernsey\" value=\"GG\">Guernsey</option>\r\n                    <option label=\"Guinea\" value=\"GN\">Guinea</option>\r\n                    <option label=\"Guinea-Bissau\" value=\"GW\">Guinea-Bissau</option>\r\n                    <option label=\"Guyana\" value=\"GY\">Guyana</option>\r\n                    <option label=\"Haiti\" value=\"HT\">Haiti</option>\r\n                    <option label=\"Heard/McDon.Isl\" value=\"HM\">Heard/McDon.Isl</option>\r\n                    <option label=\"Honduras\" value=\"HN\">Honduras</option>\r\n                    <option label=\"Hong Kong\" value=\"HK\">Hong Kong</option>\r\n                    <option label=\"Hungary\" value=\"HU\">Hungary</option>\r\n                    <option label=\"Iceland\" value=\"IS\">Iceland</option>\r\n                    <option label=\"India\" value=\"IN\">India</option>\r\n                    <option label=\"Indonesia\" value=\"ID\">Indonesia</option>\r\n                    <option label=\"Iran\" value=\"IR\">Iran</option>\r\n                    <option label=\"Iraq\" value=\"IQ\">Iraq</option>\r\n                    <option label=\"Ireland\" value=\"IE\">Ireland</option>\r\n                    <option label=\"Isle of Man\" value=\"IM\">Isle of Man</option>\r\n                    <option label=\"Israel\" value=\"IL\">Israel</option>\r\n                    <option label=\"Italy\" value=\"IT\">Italy</option>\r\n                    <option label=\"Jamaica\" value=\"JM\">Jamaica</option>\r\n                    <option label=\"Japan\" value=\"JP\">Japan</option>\r\n                    <option label=\"Jersey\" value=\"JE\">Jersey</option>\r\n                    <option label=\"Jordan\" value=\"JO\">Jordan</option>\r\n                    <option label=\"Kazakhstan\" value=\"KZ\">Kazakhstan</option>\r\n                    <option label=\"Kenya\" value=\"KE\">Kenya</option>\r\n                    <option label=\"Kiribati\" value=\"KI\">Kiribati</option>\r\n                    <option label=\"Kuwait\" value=\"KW\">Kuwait</option>\r\n                    <option label=\"Kyrgyzstan\" value=\"KG\">Kyrgyzstan</option>\r\n                    <option label=\"Laos\" value=\"LA\">Laos</option>\r\n                    <option label=\"Latvia\" value=\"LV\">Latvia</option>\r\n                    <option label=\"Lebanon\" value=\"LB\">Lebanon</option>\r\n                    <option label=\"Lesotho\" value=\"LS\">Lesotho</option>\r\n                    <option label=\"Liberia\" value=\"LR\">Liberia</option>\r\n                    <option label=\"Libya\" value=\"LY\">Libya</option>\r\n                    <option label=\"Liechtenstein\" value=\"LI\">Liechtenstein</option>\r\n                    <option label=\"Lithuania\" value=\"LT\">Lithuania</option>\r\n                    <option label=\"Luxembourg\" value=\"LU\">Luxembourg</option>\r\n                    <option label=\"Macao\" value=\"MO\">Macao</option>\r\n                    <option label=\"Madagascar\" value=\"MG\">Madagascar</option>\r\n                    <option label=\"Malawi\" value=\"MW\">Malawi</option>\r\n                    <option label=\"Malaysia\" value=\"MY\">Malaysia</option>\r\n                    <option label=\"Maldives\" value=\"MV\">Maldives</option>\r\n                    <option label=\"Mali\" value=\"ML\">Mali</option>\r\n                    <option label=\"Malta\" value=\"MT\">Malta</option>\r\n                    <option label=\"Marshall Islnds\" value=\"MH\">Marshall Islnds</option>\r\n                    <option label=\"Martinique\" value=\"MQ\">Martinique</option>\r\n                    <option label=\"Mauretania\" value=\"MR\">Mauretania</option>\r\n                    <option label=\"Mauritius\" value=\"MU\">Mauritius</option>\r\n                    <option label=\"Mayotte\" value=\"YT\">Mayotte</option>\r\n                    <option label=\"Mexico\" value=\"MX\">Mexico</option>\r\n                    <option label=\"Micronesia\" value=\"FM\">Micronesia</option>\r\n                    <option label=\"Minor Outl.Isl.\" value=\"UM\">Minor Outl.Isl.</option>\r\n                    <option label=\"Moldova\" value=\"MD\">Moldova</option>\r\n                    <option label=\"Monaco\" value=\"MC\">Monaco</option>\r\n                    <option label=\"Mongolia\" value=\"MN\">Mongolia</option>\r\n                    <option label=\"Montenegro\" value=\"ME\">Montenegro</option>\r\n                    <option label=\"Montserrat\" value=\"MS\">Montserrat</option>\r\n                    <option label=\"Morocco\" value=\"MA\">Morocco</option>\r\n                    <option label=\"Mozambique\" value=\"MZ\">Mozambique</option>\r\n                    <option label=\"Myanmar\" value=\"MM\">Myanmar</option>\r\n                    <option label=\"N.Mariana Islnd\" value=\"MP\">N.Mariana Islnd</option>\r\n                    <option label=\"Namibia\" value=\"NA\">Namibia</option>\r\n                    <option label=\"Nauru\" value=\"NR\">Nauru</option>\r\n                    <option label=\"Nepal\" value=\"NP\">Nepal</option>\r\n                    <option label=\"Netherlands\" value=\"NL\">Netherlands</option>\r\n                    <option label=\"New Caledonia\" value=\"NC\">New Caledonia</option>\r\n                    <option label=\"New Zealand\" value=\"NZ\">New Zealand</option>\r\n                    <option label=\"Nicaragua\" value=\"NI\">Nicaragua</option>\r\n                    <option label=\"Niger\" value=\"NE\">Niger</option>\r\n                    <option label=\"Nigeria\" value=\"NG\">Nigeria</option>\r\n                    <option label=\"Niue\" value=\"NU\">Niue</option>\r\n                    <option label=\"Norfolk Islands\" value=\"NF\">Norfolk Islands</option>\r\n                    <option label=\"North Korea\" value=\"KP\">North Korea</option>\r\n                    <option label=\"North Macedonia\" value=\"MK\">North Macedonia</option>\r\n                    <option label=\"Norway\" value=\"NO\">Norway</option>\r\n                    <option label=\"Oman\" value=\"OM\">Oman</option>\r\n                    <option label=\"Pakistan\" value=\"PK\">Pakistan</option>\r\n                    <option label=\"Palau\" value=\"PW\">Palau</option>\r\n                    <option label=\"Palestine\" value=\"PS\">Palestine</option>\r\n                    <option label=\"Panama\" value=\"PA\">Panama</option>\r\n                    <option label=\"Pap. New Guinea\" value=\"PG\">Pap. New Guinea</option>\r\n                    <option label=\"Paraguay\" value=\"PY\">Paraguay</option>\r\n                    <option label=\"Peru\" value=\"PE\">Peru</option>\r\n                    <option label=\"Philippines\" value=\"PH\">Philippines</option>\r\n                    <option label=\"Pitcairn Islnds\" value=\"PN\">Pitcairn Islnds</option>\r\n                    <option label=\"Poland\" value=\"PL\">Poland</option>\r\n                    <option label=\"Portugal\" value=\"PT\">Portugal</option>\r\n                    <option label=\"Puerto Rico\" value=\"PR\">Puerto Rico</option>\r\n                    <option label=\"Qatar\" value=\"QA\">Qatar</option>\r\n                    <option label=\"Rep.of Congo\" value=\"CG\">Rep.of Congo</option>\r\n                    <option label=\"Reunion\" value=\"RE\">Reunion</option>\r\n                    <option label=\"Romania\" value=\"RO\">Romania</option>\r\n                    <option label=\"Russian Fed.\" value=\"RU\">Russian Fed.</option>\r\n                    <option label=\"Rwanda\" value=\"RW\">Rwanda</option>\r\n                    <option label=\"S. Sandwich Ins\" value=\"GS\">S. Sandwich Ins</option>\r\n                    <option label=\"S.Tome,Principe\" value=\"ST\">S.Tome,Principe</option>\r\n                    <option label=\"Saint Helena\" value=\"SH\">Saint Helena</option>\r\n                    <option label=\"Saint Martin\" value=\"MF\">Saint Martin</option>\r\n                    <option label=\"Samoa\" value=\"WS\">Samoa</option>\r\n                    <option label=\"Samoa, America\" value=\"AS\">Samoa, America</option>\r\n                    <option label=\"San Marino\" value=\"SM\">San Marino</option>\r\n                    <option label=\"Saudi Arabia\" value=\"SA\">Saudi Arabia</option>\r\n                    <option label=\"Senegal\" value=\"SN\">Senegal</option>\r\n                    <option label=\"Serbia\" value=\"RS\">Serbia</option>\r\n                    <option label=\"Seychelles\" value=\"SC\">Seychelles</option>\r\n                    <option label=\"Sierra Leone\" value=\"SL\">Sierra Leone</option>\r\n                    <option label=\"Singapore\" value=\"SG\">Singapore</option>\r\n                    <option label=\"Sint Maarten\" value=\"SX\">Sint Maarten</option>\r\n                    <option label=\"Slovakia\" value=\"SK\">Slovakia</option>\r\n                    <option label=\"Slovenia\" value=\"SI\">Slovenia</option>\r\n                    <option label=\"Solomon Islands\" value=\"SB\">Solomon Islands</option>\r\n                    <option label=\"Somalia\" value=\"SO\">Somalia</option>\r\n                    <option label=\"South Africa\" value=\"ZA\">South Africa</option>\r\n                    <option label=\"South Korea\" value=\"KR\">South Korea</option>\r\n                    <option label=\"South Sudan\" value=\"SS\">South Sudan</option>\r\n                    <option label=\"Spain\" value=\"ES\">Spain</option>\r\n                    <option label=\"Sri Lanka\" value=\"LK\">Sri Lanka</option>\r\n                    <option label=\"St Barthelemy\" value=\"BL\">St Barthelemy</option>\r\n                    <option label=\"St Kitts&amp;Nevis\" value=\"KN\">St Kitts&amp;Nevis</option>\r\n                    <option label=\"St. Lucia\" value=\"LC\">St. Lucia</option>\r\n                    <option label=\"St. Vincent\" value=\"VC\">St. Vincent</option>\r\n                    <option label=\"St.Pier,Miquel.\" value=\"PM\">St.Pier,Miquel.</option>\r\n                    <option label=\"Sudan\" value=\"SD\">Sudan</option>\r\n                    <option label=\"Suriname\" value=\"SR\">Suriname</option>\r\n                    <option label=\"Svalbard\" value=\"SJ\">Svalbard</option>\r\n                    <option label=\"Sweden\" value=\"SE\">Sweden</option>\r\n                    <option label=\"Switzerland\" value=\"CH\">Switzerland</option>\r\n                    <option label=\"Syria\" value=\"SY\">Syria</option>\r\n                    <option label=\"Taiwan\" value=\"TW\">Taiwan</option>\r\n                    <option label=\"Tajikistan\" value=\"TJ\">Tajikistan</option>\r\n                    <option label=\"Tanzania\" value=\"TZ\">Tanzania</option>\r\n                    <option label=\"Thailand\" value=\"TH\">Thailand</option>\r\n                    <option label=\"Timor-Leste\" value=\"TL\">Timor-Leste</option>\r\n                    <option label=\"Togo\" value=\"TG\">Togo</option>\r\n                    <option label=\"Tokelau Islands\" value=\"TK\">Tokelau Islands</option>\r\n                    <option label=\"Tonga\" value=\"TO\">Tonga</option>\r\n                    <option label=\"Trinidad,Tobago\" value=\"TT\">Trinidad,Tobago</option>\r\n                    <option label=\"Tunisia\" value=\"TN\">Tunisia</option>\r\n                    <option label=\"Turkey\" value=\"TR\">Turkey</option>\r\n                    <option label=\"Turkmenistan\" value=\"TM\">Turkmenistan</option>\r\n                    <option label=\"Turksh Caicosin\" value=\"TC\">Turksh Caicosin</option>\r\n                    <option label=\"Tuvalu\" value=\"TV\">Tuvalu</option>\r\n                    <option label=\"Uganda\" value=\"UG\">Uganda</option>\r\n                    <option label=\"Ukraine\" value=\"UA\">Ukraine</option>\r\n                    <option label=\"United Kingdom\" value=\"GB\">United Kingdom</option>\r\n                    <option label=\"Uruguay\" value=\"UY\">Uruguay</option>\r\n                    <option label=\"USA\" value=\"US\">USA</option>\r\n                    <option label=\"Utd.Arab Emir.\" value=\"AE\">Utd.Arab Emir.</option>\r\n                    <option label=\"Uzbekistan\" value=\"UZ\">Uzbekistan</option>\r\n                    <option label=\"Vanuatu\" value=\"VU\">Vanuatu</option>\r\n                    <option label=\"Vatican City\" value=\"VA\">Vatican City</option>\r\n                    <option label=\"Venezuela\" value=\"VE\">Venezuela</option>\r\n                    <option label=\"Vietnam\" value=\"VN\">Vietnam</option>\r\n                    <option label=\"Wallis,Futuna\" value=\"WF\">Wallis,Futuna</option>\r\n                    <option label=\"West Sahara\" value=\"EH\">West Sahara</option>\r\n                    <option label=\"Yemen\" value=\"YE\">Yemen</option>\r\n                    <option label=\"Zambia\" value=\"ZM\">Zambia</option>\r\n                    <option label=\"Zimbabwe\" value=\"ZW\">Zimbabwe</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"sapCRLWidgetFixContent sapCpWidgetFixContent\"></div>\r\n        </div>\r\n        <div id=\"application-MarketingContent-manage-component---ObjectView--DesignView--ContentPage-0L-9W\" data-sap-cp-key=\"8911557A1B6564AFA442BD408B44B628F2627CBF\" class=\"sapCRLWidget sapCRLWidgetEditable sapCpButtonWidget sapCpWidget sapCpWidgetEditable\" data-sap-cp-follow-up-action=\"02\">\r\n            <div class=\"sapCRLWidgetContent sapCRLWidgetContentLeft sapCpWidgetContent sapCpWidgetContentLeft\" style=\"width:20%\"></div>\r\n            <div class=\"sapCRLWidgetContent sapCRLWidgetContentRight sapCpWidgetContent sapCpWidgetContentRight\" style=\"padding-left:20%\">\r\n                <button id=\"__button17\" class=\"sapCpButton\" type=\"button\">UPDATE</button><span id=\"__text211\" class=\"sapCpButtonWidgetExtraText sapCpMissingMandatoryFieldLabel sapCpMissingMandatoryFieldText sapCpText\">Fill in all fields correctly.</span><span id=\"__text212\" class=\"sapCpButtonWidgetExtraText sapCpErrorMessageText sapCpText\">A technical error has occurred</span><span id=\"__text213\" class=\"sapCpButtonWidgetExtraText sapCpSuccessMessageLabel sapCpSuccessMessageText sapCpText\">Thank you for your submission</span></div>\r\n            <div class=\"sapCRLWidgetFixContent sapCpWidgetFixContent\"></div>\r\n        </div>\r\n        <div id=\"application-MarketingContent-manage-component---ObjectView--DesignView--ContentPage-0L-10W\" data-sap-cp-key=\"792047677CAC0DD80CB809480BF5901DAB70E85F\" class=\"sapCRLWidget sapCRLWidgetEditable sapCpTextWidget sapCpWidget sapCpWidgetEditable\">\r\n            <div class=\"sapCRLWidgetContentNoIndent sapCpWidgetContentNoIndent\">\r\n                <p>&nbsp;</p>\r\n                <fieldset>\r\n                    <div>\r\n                        <h4>To&nbsp;<strong>unsubscribe</strong>&nbsp;from Molton Brown completely please&nbsp;<a title=\"click here\" href=\"http://10.22.63.60:4200/store/update-your-preferences/unsubscribe\">click here</a>.</h4>\r\n                    </div>\r\n                    <p>We will only use your information for marketing purposes. Molton Brown does not share your information with third parties and you can unsubscribe at any time.</p>\r\n                </fieldset>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/newsletter/newsletter-update/newsletter-update.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/newsletter/newsletter-update/newsletter-update.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@font-face {\n  font-family: 'Century Gothic';\n  src: url(\"/assets/fonts/Century/fonts/CENTURY.ttf\") format(\"ttf\"), url(\"/assets/fonts/Century/fonts/CENTURY.woff2\") format(\"woff2\"), url(\"/assets/fonts/Century/fonts/CENTURY.woff\") format(\"woff\"), url(\"/assets/fonts/Century/fonts/CENTURY.svg\") format(\"svg\"); }\n\n@font-face {\n  font-family: 'Century Gothic Regular';\n  src: url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.ttf\") format(\"ttf\"), url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.woff2\") format(\"woff2\"), url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.woff\") format(\"woff\"), url(\"/assets/fonts/CenturyGothic/fonts/GOTHIC.svg\") format(\"svg\"); }\n\n@font-face {\n  font-family: 'Century Gothic Bold';\n  src: url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.ttf\") format(\"ttf\"), url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.woff2\") format(\"woff2\"), url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.woff\") format(\"woff\"), url(\"/assets/fonts/CenturyGothic-Bold/fonts/GOTHICB.svg\") format(\"svg\"); }\n\n@font-face {\n  font-family: 'Century Gothic Italic';\n  src: url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.ttf\") format(\"ttf\"), url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.woff2\") format(\"woff2\"), url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.woff\") format(\"woff\"), url(\"/assets/fonts/CenturyGothic-Italic/fonts/GOTHICI.svg\") format(\"svg\"); }\n\n.padding-top-1 {\n  padding-top: 1px; }\n\n.pt-1 {\n  padding-top: 1px; }\n\n.margin-top-1 {\n  margin-top: 1px; }\n\n.ml-1 {\n  margin-left: 1px; }\n\n.mt-1 {\n  margin-top: 1px; }\n\n.margin-bottom-1 {\n  margin-top: 1px; }\n\n.padding-top-2 {\n  padding-top: 2px; }\n\n.pt-2 {\n  padding-top: 2px; }\n\n.margin-top-2 {\n  margin-top: 2px; }\n\n.ml-2 {\n  margin-left: 2px; }\n\n.mt-2 {\n  margin-top: 2px; }\n\n.margin-bottom-2 {\n  margin-top: 2px; }\n\n.padding-top-3 {\n  padding-top: 3px; }\n\n.pt-3 {\n  padding-top: 3px; }\n\n.margin-top-3 {\n  margin-top: 3px; }\n\n.ml-3 {\n  margin-left: 3px; }\n\n.mt-3 {\n  margin-top: 3px; }\n\n.margin-bottom-3 {\n  margin-top: 3px; }\n\n.padding-top-4 {\n  padding-top: 4px; }\n\n.pt-4 {\n  padding-top: 4px; }\n\n.margin-top-4 {\n  margin-top: 4px; }\n\n.ml-4 {\n  margin-left: 4px; }\n\n.mt-4 {\n  margin-top: 4px; }\n\n.margin-bottom-4 {\n  margin-top: 4px; }\n\n.padding-top-5 {\n  padding-top: 5px; }\n\n.pt-5 {\n  padding-top: 5px; }\n\n.margin-top-5 {\n  margin-top: 5px; }\n\n.ml-5 {\n  margin-left: 5px; }\n\n.mt-5 {\n  margin-top: 5px; }\n\n.margin-bottom-5 {\n  margin-top: 5px; }\n\n.padding-top-6 {\n  padding-top: 6px; }\n\n.pt-6 {\n  padding-top: 6px; }\n\n.margin-top-6 {\n  margin-top: 6px; }\n\n.ml-6 {\n  margin-left: 6px; }\n\n.mt-6 {\n  margin-top: 6px; }\n\n.margin-bottom-6 {\n  margin-top: 6px; }\n\n.padding-top-7 {\n  padding-top: 7px; }\n\n.pt-7 {\n  padding-top: 7px; }\n\n.margin-top-7 {\n  margin-top: 7px; }\n\n.ml-7 {\n  margin-left: 7px; }\n\n.mt-7 {\n  margin-top: 7px; }\n\n.margin-bottom-7 {\n  margin-top: 7px; }\n\n.padding-top-8 {\n  padding-top: 8px; }\n\n.pt-8 {\n  padding-top: 8px; }\n\n.margin-top-8 {\n  margin-top: 8px; }\n\n.ml-8 {\n  margin-left: 8px; }\n\n.mt-8 {\n  margin-top: 8px; }\n\n.margin-bottom-8 {\n  margin-top: 8px; }\n\n.padding-top-9 {\n  padding-top: 9px; }\n\n.pt-9 {\n  padding-top: 9px; }\n\n.margin-top-9 {\n  margin-top: 9px; }\n\n.ml-9 {\n  margin-left: 9px; }\n\n.mt-9 {\n  margin-top: 9px; }\n\n.margin-bottom-9 {\n  margin-top: 9px; }\n\n.padding-top-10 {\n  padding-top: 10px; }\n\n.pt-10 {\n  padding-top: 10px; }\n\n.margin-top-10 {\n  margin-top: 10px; }\n\n.ml-10 {\n  margin-left: 10px; }\n\n.mt-10 {\n  margin-top: 10px; }\n\n.margin-bottom-10 {\n  margin-top: 10px; }\n\n.padding-top-11 {\n  padding-top: 11px; }\n\n.pt-11 {\n  padding-top: 11px; }\n\n.margin-top-11 {\n  margin-top: 11px; }\n\n.ml-11 {\n  margin-left: 11px; }\n\n.mt-11 {\n  margin-top: 11px; }\n\n.margin-bottom-11 {\n  margin-top: 11px; }\n\n.padding-top-12 {\n  padding-top: 12px; }\n\n.pt-12 {\n  padding-top: 12px; }\n\n.margin-top-12 {\n  margin-top: 12px; }\n\n.ml-12 {\n  margin-left: 12px; }\n\n.mt-12 {\n  margin-top: 12px; }\n\n.margin-bottom-12 {\n  margin-top: 12px; }\n\n.padding-top-13 {\n  padding-top: 13px; }\n\n.pt-13 {\n  padding-top: 13px; }\n\n.margin-top-13 {\n  margin-top: 13px; }\n\n.ml-13 {\n  margin-left: 13px; }\n\n.mt-13 {\n  margin-top: 13px; }\n\n.margin-bottom-13 {\n  margin-top: 13px; }\n\n.padding-top-14 {\n  padding-top: 14px; }\n\n.pt-14 {\n  padding-top: 14px; }\n\n.margin-top-14 {\n  margin-top: 14px; }\n\n.ml-14 {\n  margin-left: 14px; }\n\n.mt-14 {\n  margin-top: 14px; }\n\n.margin-bottom-14 {\n  margin-top: 14px; }\n\n.padding-top-15 {\n  padding-top: 15px; }\n\n.pt-15 {\n  padding-top: 15px; }\n\n.margin-top-15 {\n  margin-top: 15px; }\n\n.ml-15 {\n  margin-left: 15px; }\n\n.mt-15 {\n  margin-top: 15px; }\n\n.margin-bottom-15 {\n  margin-top: 15px; }\n\n.padding-top-16 {\n  padding-top: 16px; }\n\n.pt-16 {\n  padding-top: 16px; }\n\n.margin-top-16 {\n  margin-top: 16px; }\n\n.ml-16 {\n  margin-left: 16px; }\n\n.mt-16 {\n  margin-top: 16px; }\n\n.margin-bottom-16 {\n  margin-top: 16px; }\n\n.padding-top-17 {\n  padding-top: 17px; }\n\n.pt-17 {\n  padding-top: 17px; }\n\n.margin-top-17 {\n  margin-top: 17px; }\n\n.ml-17 {\n  margin-left: 17px; }\n\n.mt-17 {\n  margin-top: 17px; }\n\n.margin-bottom-17 {\n  margin-top: 17px; }\n\n.padding-top-18 {\n  padding-top: 18px; }\n\n.pt-18 {\n  padding-top: 18px; }\n\n.margin-top-18 {\n  margin-top: 18px; }\n\n.ml-18 {\n  margin-left: 18px; }\n\n.mt-18 {\n  margin-top: 18px; }\n\n.margin-bottom-18 {\n  margin-top: 18px; }\n\n.padding-top-19 {\n  padding-top: 19px; }\n\n.pt-19 {\n  padding-top: 19px; }\n\n.margin-top-19 {\n  margin-top: 19px; }\n\n.ml-19 {\n  margin-left: 19px; }\n\n.mt-19 {\n  margin-top: 19px; }\n\n.margin-bottom-19 {\n  margin-top: 19px; }\n\n.padding-top-20 {\n  padding-top: 20px; }\n\n.pt-20 {\n  padding-top: 20px; }\n\n.margin-top-20 {\n  margin-top: 20px; }\n\n.ml-20 {\n  margin-left: 20px; }\n\n.mt-20 {\n  margin-top: 20px; }\n\n.margin-bottom-20 {\n  margin-top: 20px; }\n\n.padding-top-21 {\n  padding-top: 21px; }\n\n.pt-21 {\n  padding-top: 21px; }\n\n.margin-top-21 {\n  margin-top: 21px; }\n\n.ml-21 {\n  margin-left: 21px; }\n\n.mt-21 {\n  margin-top: 21px; }\n\n.margin-bottom-21 {\n  margin-top: 21px; }\n\n.padding-top-22 {\n  padding-top: 22px; }\n\n.pt-22 {\n  padding-top: 22px; }\n\n.margin-top-22 {\n  margin-top: 22px; }\n\n.ml-22 {\n  margin-left: 22px; }\n\n.mt-22 {\n  margin-top: 22px; }\n\n.margin-bottom-22 {\n  margin-top: 22px; }\n\n.padding-top-23 {\n  padding-top: 23px; }\n\n.pt-23 {\n  padding-top: 23px; }\n\n.margin-top-23 {\n  margin-top: 23px; }\n\n.ml-23 {\n  margin-left: 23px; }\n\n.mt-23 {\n  margin-top: 23px; }\n\n.margin-bottom-23 {\n  margin-top: 23px; }\n\n.padding-top-24 {\n  padding-top: 24px; }\n\n.pt-24 {\n  padding-top: 24px; }\n\n.margin-top-24 {\n  margin-top: 24px; }\n\n.ml-24 {\n  margin-left: 24px; }\n\n.mt-24 {\n  margin-top: 24px; }\n\n.margin-bottom-24 {\n  margin-top: 24px; }\n\n.padding-top-25 {\n  padding-top: 25px; }\n\n.pt-25 {\n  padding-top: 25px; }\n\n.margin-top-25 {\n  margin-top: 25px; }\n\n.ml-25 {\n  margin-left: 25px; }\n\n.mt-25 {\n  margin-top: 25px; }\n\n.margin-bottom-25 {\n  margin-top: 25px; }\n\n.padding-top-26 {\n  padding-top: 26px; }\n\n.pt-26 {\n  padding-top: 26px; }\n\n.margin-top-26 {\n  margin-top: 26px; }\n\n.ml-26 {\n  margin-left: 26px; }\n\n.mt-26 {\n  margin-top: 26px; }\n\n.margin-bottom-26 {\n  margin-top: 26px; }\n\n.padding-top-27 {\n  padding-top: 27px; }\n\n.pt-27 {\n  padding-top: 27px; }\n\n.margin-top-27 {\n  margin-top: 27px; }\n\n.ml-27 {\n  margin-left: 27px; }\n\n.mt-27 {\n  margin-top: 27px; }\n\n.margin-bottom-27 {\n  margin-top: 27px; }\n\n.padding-top-28 {\n  padding-top: 28px; }\n\n.pt-28 {\n  padding-top: 28px; }\n\n.margin-top-28 {\n  margin-top: 28px; }\n\n.ml-28 {\n  margin-left: 28px; }\n\n.mt-28 {\n  margin-top: 28px; }\n\n.margin-bottom-28 {\n  margin-top: 28px; }\n\n.padding-top-29 {\n  padding-top: 29px; }\n\n.pt-29 {\n  padding-top: 29px; }\n\n.margin-top-29 {\n  margin-top: 29px; }\n\n.ml-29 {\n  margin-left: 29px; }\n\n.mt-29 {\n  margin-top: 29px; }\n\n.margin-bottom-29 {\n  margin-top: 29px; }\n\n.padding-top-30 {\n  padding-top: 30px; }\n\n.pt-30 {\n  padding-top: 30px; }\n\n.margin-top-30 {\n  margin-top: 30px; }\n\n.ml-30 {\n  margin-left: 30px; }\n\n.mt-30 {\n  margin-top: 30px; }\n\n.margin-bottom-30 {\n  margin-top: 30px; }\n\n.padding-top-31 {\n  padding-top: 31px; }\n\n.pt-31 {\n  padding-top: 31px; }\n\n.margin-top-31 {\n  margin-top: 31px; }\n\n.ml-31 {\n  margin-left: 31px; }\n\n.mt-31 {\n  margin-top: 31px; }\n\n.margin-bottom-31 {\n  margin-top: 31px; }\n\n.padding-top-32 {\n  padding-top: 32px; }\n\n.pt-32 {\n  padding-top: 32px; }\n\n.margin-top-32 {\n  margin-top: 32px; }\n\n.ml-32 {\n  margin-left: 32px; }\n\n.mt-32 {\n  margin-top: 32px; }\n\n.margin-bottom-32 {\n  margin-top: 32px; }\n\n.padding-top-33 {\n  padding-top: 33px; }\n\n.pt-33 {\n  padding-top: 33px; }\n\n.margin-top-33 {\n  margin-top: 33px; }\n\n.ml-33 {\n  margin-left: 33px; }\n\n.mt-33 {\n  margin-top: 33px; }\n\n.margin-bottom-33 {\n  margin-top: 33px; }\n\n.padding-top-34 {\n  padding-top: 34px; }\n\n.pt-34 {\n  padding-top: 34px; }\n\n.margin-top-34 {\n  margin-top: 34px; }\n\n.ml-34 {\n  margin-left: 34px; }\n\n.mt-34 {\n  margin-top: 34px; }\n\n.margin-bottom-34 {\n  margin-top: 34px; }\n\n.padding-top-35 {\n  padding-top: 35px; }\n\n.pt-35 {\n  padding-top: 35px; }\n\n.margin-top-35 {\n  margin-top: 35px; }\n\n.ml-35 {\n  margin-left: 35px; }\n\n.mt-35 {\n  margin-top: 35px; }\n\n.margin-bottom-35 {\n  margin-top: 35px; }\n\n.padding-top-36 {\n  padding-top: 36px; }\n\n.pt-36 {\n  padding-top: 36px; }\n\n.margin-top-36 {\n  margin-top: 36px; }\n\n.ml-36 {\n  margin-left: 36px; }\n\n.mt-36 {\n  margin-top: 36px; }\n\n.margin-bottom-36 {\n  margin-top: 36px; }\n\n.padding-top-37 {\n  padding-top: 37px; }\n\n.pt-37 {\n  padding-top: 37px; }\n\n.margin-top-37 {\n  margin-top: 37px; }\n\n.ml-37 {\n  margin-left: 37px; }\n\n.mt-37 {\n  margin-top: 37px; }\n\n.margin-bottom-37 {\n  margin-top: 37px; }\n\n.padding-top-38 {\n  padding-top: 38px; }\n\n.pt-38 {\n  padding-top: 38px; }\n\n.margin-top-38 {\n  margin-top: 38px; }\n\n.ml-38 {\n  margin-left: 38px; }\n\n.mt-38 {\n  margin-top: 38px; }\n\n.margin-bottom-38 {\n  margin-top: 38px; }\n\n.padding-top-39 {\n  padding-top: 39px; }\n\n.pt-39 {\n  padding-top: 39px; }\n\n.margin-top-39 {\n  margin-top: 39px; }\n\n.ml-39 {\n  margin-left: 39px; }\n\n.mt-39 {\n  margin-top: 39px; }\n\n.margin-bottom-39 {\n  margin-top: 39px; }\n\n.padding-top-40 {\n  padding-top: 40px; }\n\n.pt-40 {\n  padding-top: 40px; }\n\n.margin-top-40 {\n  margin-top: 40px; }\n\n.ml-40 {\n  margin-left: 40px; }\n\n.mt-40 {\n  margin-top: 40px; }\n\n.margin-bottom-40 {\n  margin-top: 40px; }\n\n.padding-top-41 {\n  padding-top: 41px; }\n\n.pt-41 {\n  padding-top: 41px; }\n\n.margin-top-41 {\n  margin-top: 41px; }\n\n.ml-41 {\n  margin-left: 41px; }\n\n.mt-41 {\n  margin-top: 41px; }\n\n.margin-bottom-41 {\n  margin-top: 41px; }\n\n.padding-top-42 {\n  padding-top: 42px; }\n\n.pt-42 {\n  padding-top: 42px; }\n\n.margin-top-42 {\n  margin-top: 42px; }\n\n.ml-42 {\n  margin-left: 42px; }\n\n.mt-42 {\n  margin-top: 42px; }\n\n.margin-bottom-42 {\n  margin-top: 42px; }\n\n.padding-top-43 {\n  padding-top: 43px; }\n\n.pt-43 {\n  padding-top: 43px; }\n\n.margin-top-43 {\n  margin-top: 43px; }\n\n.ml-43 {\n  margin-left: 43px; }\n\n.mt-43 {\n  margin-top: 43px; }\n\n.margin-bottom-43 {\n  margin-top: 43px; }\n\n.padding-top-44 {\n  padding-top: 44px; }\n\n.pt-44 {\n  padding-top: 44px; }\n\n.margin-top-44 {\n  margin-top: 44px; }\n\n.ml-44 {\n  margin-left: 44px; }\n\n.mt-44 {\n  margin-top: 44px; }\n\n.margin-bottom-44 {\n  margin-top: 44px; }\n\n.padding-top-45 {\n  padding-top: 45px; }\n\n.pt-45 {\n  padding-top: 45px; }\n\n.margin-top-45 {\n  margin-top: 45px; }\n\n.ml-45 {\n  margin-left: 45px; }\n\n.mt-45 {\n  margin-top: 45px; }\n\n.margin-bottom-45 {\n  margin-top: 45px; }\n\n.padding-top-46 {\n  padding-top: 46px; }\n\n.pt-46 {\n  padding-top: 46px; }\n\n.margin-top-46 {\n  margin-top: 46px; }\n\n.ml-46 {\n  margin-left: 46px; }\n\n.mt-46 {\n  margin-top: 46px; }\n\n.margin-bottom-46 {\n  margin-top: 46px; }\n\n.padding-top-47 {\n  padding-top: 47px; }\n\n.pt-47 {\n  padding-top: 47px; }\n\n.margin-top-47 {\n  margin-top: 47px; }\n\n.ml-47 {\n  margin-left: 47px; }\n\n.mt-47 {\n  margin-top: 47px; }\n\n.margin-bottom-47 {\n  margin-top: 47px; }\n\n.padding-top-48 {\n  padding-top: 48px; }\n\n.pt-48 {\n  padding-top: 48px; }\n\n.margin-top-48 {\n  margin-top: 48px; }\n\n.ml-48 {\n  margin-left: 48px; }\n\n.mt-48 {\n  margin-top: 48px; }\n\n.margin-bottom-48 {\n  margin-top: 48px; }\n\n.padding-top-49 {\n  padding-top: 49px; }\n\n.pt-49 {\n  padding-top: 49px; }\n\n.margin-top-49 {\n  margin-top: 49px; }\n\n.ml-49 {\n  margin-left: 49px; }\n\n.mt-49 {\n  margin-top: 49px; }\n\n.margin-bottom-49 {\n  margin-top: 49px; }\n\n.padding-top-50 {\n  padding-top: 50px; }\n\n.pt-50 {\n  padding-top: 50px; }\n\n.margin-top-50 {\n  margin-top: 50px; }\n\n.ml-50 {\n  margin-left: 50px; }\n\n.mt-50 {\n  margin-top: 50px; }\n\n.margin-bottom-50 {\n  margin-top: 50px; }\n\n.padding-top-51 {\n  padding-top: 51px; }\n\n.pt-51 {\n  padding-top: 51px; }\n\n.margin-top-51 {\n  margin-top: 51px; }\n\n.ml-51 {\n  margin-left: 51px; }\n\n.mt-51 {\n  margin-top: 51px; }\n\n.margin-bottom-51 {\n  margin-top: 51px; }\n\n.padding-top-52 {\n  padding-top: 52px; }\n\n.pt-52 {\n  padding-top: 52px; }\n\n.margin-top-52 {\n  margin-top: 52px; }\n\n.ml-52 {\n  margin-left: 52px; }\n\n.mt-52 {\n  margin-top: 52px; }\n\n.margin-bottom-52 {\n  margin-top: 52px; }\n\n.padding-top-53 {\n  padding-top: 53px; }\n\n.pt-53 {\n  padding-top: 53px; }\n\n.margin-top-53 {\n  margin-top: 53px; }\n\n.ml-53 {\n  margin-left: 53px; }\n\n.mt-53 {\n  margin-top: 53px; }\n\n.margin-bottom-53 {\n  margin-top: 53px; }\n\n.padding-top-54 {\n  padding-top: 54px; }\n\n.pt-54 {\n  padding-top: 54px; }\n\n.margin-top-54 {\n  margin-top: 54px; }\n\n.ml-54 {\n  margin-left: 54px; }\n\n.mt-54 {\n  margin-top: 54px; }\n\n.margin-bottom-54 {\n  margin-top: 54px; }\n\n.padding-top-55 {\n  padding-top: 55px; }\n\n.pt-55 {\n  padding-top: 55px; }\n\n.margin-top-55 {\n  margin-top: 55px; }\n\n.ml-55 {\n  margin-left: 55px; }\n\n.mt-55 {\n  margin-top: 55px; }\n\n.margin-bottom-55 {\n  margin-top: 55px; }\n\n.padding-top-56 {\n  padding-top: 56px; }\n\n.pt-56 {\n  padding-top: 56px; }\n\n.margin-top-56 {\n  margin-top: 56px; }\n\n.ml-56 {\n  margin-left: 56px; }\n\n.mt-56 {\n  margin-top: 56px; }\n\n.margin-bottom-56 {\n  margin-top: 56px; }\n\n.padding-top-57 {\n  padding-top: 57px; }\n\n.pt-57 {\n  padding-top: 57px; }\n\n.margin-top-57 {\n  margin-top: 57px; }\n\n.ml-57 {\n  margin-left: 57px; }\n\n.mt-57 {\n  margin-top: 57px; }\n\n.margin-bottom-57 {\n  margin-top: 57px; }\n\n.padding-top-58 {\n  padding-top: 58px; }\n\n.pt-58 {\n  padding-top: 58px; }\n\n.margin-top-58 {\n  margin-top: 58px; }\n\n.ml-58 {\n  margin-left: 58px; }\n\n.mt-58 {\n  margin-top: 58px; }\n\n.margin-bottom-58 {\n  margin-top: 58px; }\n\n.padding-top-59 {\n  padding-top: 59px; }\n\n.pt-59 {\n  padding-top: 59px; }\n\n.margin-top-59 {\n  margin-top: 59px; }\n\n.ml-59 {\n  margin-left: 59px; }\n\n.mt-59 {\n  margin-top: 59px; }\n\n.margin-bottom-59 {\n  margin-top: 59px; }\n\n.padding-top-60 {\n  padding-top: 60px; }\n\n.pt-60 {\n  padding-top: 60px; }\n\n.margin-top-60 {\n  margin-top: 60px; }\n\n.ml-60 {\n  margin-left: 60px; }\n\n.mt-60 {\n  margin-top: 60px; }\n\n.margin-bottom-60 {\n  margin-top: 60px; }\n\n.padding-top-61 {\n  padding-top: 61px; }\n\n.pt-61 {\n  padding-top: 61px; }\n\n.margin-top-61 {\n  margin-top: 61px; }\n\n.ml-61 {\n  margin-left: 61px; }\n\n.mt-61 {\n  margin-top: 61px; }\n\n.margin-bottom-61 {\n  margin-top: 61px; }\n\n.padding-top-62 {\n  padding-top: 62px; }\n\n.pt-62 {\n  padding-top: 62px; }\n\n.margin-top-62 {\n  margin-top: 62px; }\n\n.ml-62 {\n  margin-left: 62px; }\n\n.mt-62 {\n  margin-top: 62px; }\n\n.margin-bottom-62 {\n  margin-top: 62px; }\n\n.padding-top-63 {\n  padding-top: 63px; }\n\n.pt-63 {\n  padding-top: 63px; }\n\n.margin-top-63 {\n  margin-top: 63px; }\n\n.ml-63 {\n  margin-left: 63px; }\n\n.mt-63 {\n  margin-top: 63px; }\n\n.margin-bottom-63 {\n  margin-top: 63px; }\n\n.padding-top-64 {\n  padding-top: 64px; }\n\n.pt-64 {\n  padding-top: 64px; }\n\n.margin-top-64 {\n  margin-top: 64px; }\n\n.ml-64 {\n  margin-left: 64px; }\n\n.mt-64 {\n  margin-top: 64px; }\n\n.margin-bottom-64 {\n  margin-top: 64px; }\n\n.padding-top-65 {\n  padding-top: 65px; }\n\n.pt-65 {\n  padding-top: 65px; }\n\n.margin-top-65 {\n  margin-top: 65px; }\n\n.ml-65 {\n  margin-left: 65px; }\n\n.mt-65 {\n  margin-top: 65px; }\n\n.margin-bottom-65 {\n  margin-top: 65px; }\n\n.padding-top-66 {\n  padding-top: 66px; }\n\n.pt-66 {\n  padding-top: 66px; }\n\n.margin-top-66 {\n  margin-top: 66px; }\n\n.ml-66 {\n  margin-left: 66px; }\n\n.mt-66 {\n  margin-top: 66px; }\n\n.margin-bottom-66 {\n  margin-top: 66px; }\n\n.padding-top-67 {\n  padding-top: 67px; }\n\n.pt-67 {\n  padding-top: 67px; }\n\n.margin-top-67 {\n  margin-top: 67px; }\n\n.ml-67 {\n  margin-left: 67px; }\n\n.mt-67 {\n  margin-top: 67px; }\n\n.margin-bottom-67 {\n  margin-top: 67px; }\n\n.padding-top-68 {\n  padding-top: 68px; }\n\n.pt-68 {\n  padding-top: 68px; }\n\n.margin-top-68 {\n  margin-top: 68px; }\n\n.ml-68 {\n  margin-left: 68px; }\n\n.mt-68 {\n  margin-top: 68px; }\n\n.margin-bottom-68 {\n  margin-top: 68px; }\n\n.padding-top-69 {\n  padding-top: 69px; }\n\n.pt-69 {\n  padding-top: 69px; }\n\n.margin-top-69 {\n  margin-top: 69px; }\n\n.ml-69 {\n  margin-left: 69px; }\n\n.mt-69 {\n  margin-top: 69px; }\n\n.margin-bottom-69 {\n  margin-top: 69px; }\n\n.padding-top-70 {\n  padding-top: 70px; }\n\n.pt-70 {\n  padding-top: 70px; }\n\n.margin-top-70 {\n  margin-top: 70px; }\n\n.ml-70 {\n  margin-left: 70px; }\n\n.mt-70 {\n  margin-top: 70px; }\n\n.margin-bottom-70 {\n  margin-top: 70px; }\n\n.padding-top-71 {\n  padding-top: 71px; }\n\n.pt-71 {\n  padding-top: 71px; }\n\n.margin-top-71 {\n  margin-top: 71px; }\n\n.ml-71 {\n  margin-left: 71px; }\n\n.mt-71 {\n  margin-top: 71px; }\n\n.margin-bottom-71 {\n  margin-top: 71px; }\n\n.padding-top-72 {\n  padding-top: 72px; }\n\n.pt-72 {\n  padding-top: 72px; }\n\n.margin-top-72 {\n  margin-top: 72px; }\n\n.ml-72 {\n  margin-left: 72px; }\n\n.mt-72 {\n  margin-top: 72px; }\n\n.margin-bottom-72 {\n  margin-top: 72px; }\n\n.padding-top-73 {\n  padding-top: 73px; }\n\n.pt-73 {\n  padding-top: 73px; }\n\n.margin-top-73 {\n  margin-top: 73px; }\n\n.ml-73 {\n  margin-left: 73px; }\n\n.mt-73 {\n  margin-top: 73px; }\n\n.margin-bottom-73 {\n  margin-top: 73px; }\n\n.padding-top-74 {\n  padding-top: 74px; }\n\n.pt-74 {\n  padding-top: 74px; }\n\n.margin-top-74 {\n  margin-top: 74px; }\n\n.ml-74 {\n  margin-left: 74px; }\n\n.mt-74 {\n  margin-top: 74px; }\n\n.margin-bottom-74 {\n  margin-top: 74px; }\n\n.padding-top-75 {\n  padding-top: 75px; }\n\n.pt-75 {\n  padding-top: 75px; }\n\n.margin-top-75 {\n  margin-top: 75px; }\n\n.ml-75 {\n  margin-left: 75px; }\n\n.mt-75 {\n  margin-top: 75px; }\n\n.margin-bottom-75 {\n  margin-top: 75px; }\n\n.padding-top-76 {\n  padding-top: 76px; }\n\n.pt-76 {\n  padding-top: 76px; }\n\n.margin-top-76 {\n  margin-top: 76px; }\n\n.ml-76 {\n  margin-left: 76px; }\n\n.mt-76 {\n  margin-top: 76px; }\n\n.margin-bottom-76 {\n  margin-top: 76px; }\n\n.padding-top-77 {\n  padding-top: 77px; }\n\n.pt-77 {\n  padding-top: 77px; }\n\n.margin-top-77 {\n  margin-top: 77px; }\n\n.ml-77 {\n  margin-left: 77px; }\n\n.mt-77 {\n  margin-top: 77px; }\n\n.margin-bottom-77 {\n  margin-top: 77px; }\n\n.padding-top-78 {\n  padding-top: 78px; }\n\n.pt-78 {\n  padding-top: 78px; }\n\n.margin-top-78 {\n  margin-top: 78px; }\n\n.ml-78 {\n  margin-left: 78px; }\n\n.mt-78 {\n  margin-top: 78px; }\n\n.margin-bottom-78 {\n  margin-top: 78px; }\n\n.padding-top-79 {\n  padding-top: 79px; }\n\n.pt-79 {\n  padding-top: 79px; }\n\n.margin-top-79 {\n  margin-top: 79px; }\n\n.ml-79 {\n  margin-left: 79px; }\n\n.mt-79 {\n  margin-top: 79px; }\n\n.margin-bottom-79 {\n  margin-top: 79px; }\n\n.padding-top-80 {\n  padding-top: 80px; }\n\n.pt-80 {\n  padding-top: 80px; }\n\n.margin-top-80 {\n  margin-top: 80px; }\n\n.ml-80 {\n  margin-left: 80px; }\n\n.mt-80 {\n  margin-top: 80px; }\n\n.margin-bottom-80 {\n  margin-top: 80px; }\n\n.padding-top-81 {\n  padding-top: 81px; }\n\n.pt-81 {\n  padding-top: 81px; }\n\n.margin-top-81 {\n  margin-top: 81px; }\n\n.ml-81 {\n  margin-left: 81px; }\n\n.mt-81 {\n  margin-top: 81px; }\n\n.margin-bottom-81 {\n  margin-top: 81px; }\n\n.padding-top-82 {\n  padding-top: 82px; }\n\n.pt-82 {\n  padding-top: 82px; }\n\n.margin-top-82 {\n  margin-top: 82px; }\n\n.ml-82 {\n  margin-left: 82px; }\n\n.mt-82 {\n  margin-top: 82px; }\n\n.margin-bottom-82 {\n  margin-top: 82px; }\n\n.padding-top-83 {\n  padding-top: 83px; }\n\n.pt-83 {\n  padding-top: 83px; }\n\n.margin-top-83 {\n  margin-top: 83px; }\n\n.ml-83 {\n  margin-left: 83px; }\n\n.mt-83 {\n  margin-top: 83px; }\n\n.margin-bottom-83 {\n  margin-top: 83px; }\n\n.padding-top-84 {\n  padding-top: 84px; }\n\n.pt-84 {\n  padding-top: 84px; }\n\n.margin-top-84 {\n  margin-top: 84px; }\n\n.ml-84 {\n  margin-left: 84px; }\n\n.mt-84 {\n  margin-top: 84px; }\n\n.margin-bottom-84 {\n  margin-top: 84px; }\n\n.padding-top-85 {\n  padding-top: 85px; }\n\n.pt-85 {\n  padding-top: 85px; }\n\n.margin-top-85 {\n  margin-top: 85px; }\n\n.ml-85 {\n  margin-left: 85px; }\n\n.mt-85 {\n  margin-top: 85px; }\n\n.margin-bottom-85 {\n  margin-top: 85px; }\n\n.padding-top-86 {\n  padding-top: 86px; }\n\n.pt-86 {\n  padding-top: 86px; }\n\n.margin-top-86 {\n  margin-top: 86px; }\n\n.ml-86 {\n  margin-left: 86px; }\n\n.mt-86 {\n  margin-top: 86px; }\n\n.margin-bottom-86 {\n  margin-top: 86px; }\n\n.padding-top-87 {\n  padding-top: 87px; }\n\n.pt-87 {\n  padding-top: 87px; }\n\n.margin-top-87 {\n  margin-top: 87px; }\n\n.ml-87 {\n  margin-left: 87px; }\n\n.mt-87 {\n  margin-top: 87px; }\n\n.margin-bottom-87 {\n  margin-top: 87px; }\n\n.padding-top-88 {\n  padding-top: 88px; }\n\n.pt-88 {\n  padding-top: 88px; }\n\n.margin-top-88 {\n  margin-top: 88px; }\n\n.ml-88 {\n  margin-left: 88px; }\n\n.mt-88 {\n  margin-top: 88px; }\n\n.margin-bottom-88 {\n  margin-top: 88px; }\n\n.padding-top-89 {\n  padding-top: 89px; }\n\n.pt-89 {\n  padding-top: 89px; }\n\n.margin-top-89 {\n  margin-top: 89px; }\n\n.ml-89 {\n  margin-left: 89px; }\n\n.mt-89 {\n  margin-top: 89px; }\n\n.margin-bottom-89 {\n  margin-top: 89px; }\n\n.padding-top-90 {\n  padding-top: 90px; }\n\n.pt-90 {\n  padding-top: 90px; }\n\n.margin-top-90 {\n  margin-top: 90px; }\n\n.ml-90 {\n  margin-left: 90px; }\n\n.mt-90 {\n  margin-top: 90px; }\n\n.margin-bottom-90 {\n  margin-top: 90px; }\n\n.padding-top-91 {\n  padding-top: 91px; }\n\n.pt-91 {\n  padding-top: 91px; }\n\n.margin-top-91 {\n  margin-top: 91px; }\n\n.ml-91 {\n  margin-left: 91px; }\n\n.mt-91 {\n  margin-top: 91px; }\n\n.margin-bottom-91 {\n  margin-top: 91px; }\n\n.padding-top-92 {\n  padding-top: 92px; }\n\n.pt-92 {\n  padding-top: 92px; }\n\n.margin-top-92 {\n  margin-top: 92px; }\n\n.ml-92 {\n  margin-left: 92px; }\n\n.mt-92 {\n  margin-top: 92px; }\n\n.margin-bottom-92 {\n  margin-top: 92px; }\n\n.padding-top-93 {\n  padding-top: 93px; }\n\n.pt-93 {\n  padding-top: 93px; }\n\n.margin-top-93 {\n  margin-top: 93px; }\n\n.ml-93 {\n  margin-left: 93px; }\n\n.mt-93 {\n  margin-top: 93px; }\n\n.margin-bottom-93 {\n  margin-top: 93px; }\n\n.padding-top-94 {\n  padding-top: 94px; }\n\n.pt-94 {\n  padding-top: 94px; }\n\n.margin-top-94 {\n  margin-top: 94px; }\n\n.ml-94 {\n  margin-left: 94px; }\n\n.mt-94 {\n  margin-top: 94px; }\n\n.margin-bottom-94 {\n  margin-top: 94px; }\n\n.padding-top-95 {\n  padding-top: 95px; }\n\n.pt-95 {\n  padding-top: 95px; }\n\n.margin-top-95 {\n  margin-top: 95px; }\n\n.ml-95 {\n  margin-left: 95px; }\n\n.mt-95 {\n  margin-top: 95px; }\n\n.margin-bottom-95 {\n  margin-top: 95px; }\n\n.padding-top-96 {\n  padding-top: 96px; }\n\n.pt-96 {\n  padding-top: 96px; }\n\n.margin-top-96 {\n  margin-top: 96px; }\n\n.ml-96 {\n  margin-left: 96px; }\n\n.mt-96 {\n  margin-top: 96px; }\n\n.margin-bottom-96 {\n  margin-top: 96px; }\n\n.padding-top-97 {\n  padding-top: 97px; }\n\n.pt-97 {\n  padding-top: 97px; }\n\n.margin-top-97 {\n  margin-top: 97px; }\n\n.ml-97 {\n  margin-left: 97px; }\n\n.mt-97 {\n  margin-top: 97px; }\n\n.margin-bottom-97 {\n  margin-top: 97px; }\n\n.padding-top-98 {\n  padding-top: 98px; }\n\n.pt-98 {\n  padding-top: 98px; }\n\n.margin-top-98 {\n  margin-top: 98px; }\n\n.ml-98 {\n  margin-left: 98px; }\n\n.mt-98 {\n  margin-top: 98px; }\n\n.margin-bottom-98 {\n  margin-top: 98px; }\n\n.padding-top-99 {\n  padding-top: 99px; }\n\n.pt-99 {\n  padding-top: 99px; }\n\n.margin-top-99 {\n  margin-top: 99px; }\n\n.ml-99 {\n  margin-left: 99px; }\n\n.mt-99 {\n  margin-top: 99px; }\n\n.margin-bottom-99 {\n  margin-top: 99px; }\n\n.padding-top-100 {\n  padding-top: 100px; }\n\n.pt-100 {\n  padding-top: 100px; }\n\n.margin-top-100 {\n  margin-top: 100px; }\n\n.ml-100 {\n  margin-left: 100px; }\n\n.mt-100 {\n  margin-top: 100px; }\n\n.margin-bottom-100 {\n  margin-top: 100px; }\n\n/*for targetting small screens */\n\n.newsletter-body {\n  border-top: 1px #acacac solid;\n  width: 964px;\n  margin-right: auto;\n  margin-left: auto;\n  text-rendering: optimizeLegibility; }\n\n.newsletter-body .checkout-content {\n    width: 100%;\n    position: relative;\n    display: inline-block;\n    padding: 12px; }\n\n@media screen and (max-width: 768px) {\n      .newsletter-body .checkout-content {\n        padding: 0px; } }\n\n.newsletter-body .samples-container {\n    height: auto;\n    border: 0;\n    overflow: visible;\n    margin-top: 5px;\n    padding: 15px;\n    width: 100%;\n    overflow: hidden;\n    min-height: 300px;\n    background: #ffffff;\n    float: left;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    position: relative; }\n\n.newsletter-body .samples-container .innerSampleContainer {\n      width: 50%;\n      float: left;\n      margin: 0 0 35px 24px; }\n\n@media screen and (max-width: 768px) {\n        .newsletter-body .samples-container .innerSampleContainer {\n          width: 48%;\n          margin: 0 1%; } }\n\n.newsletter-body .samples-container .innerSampleContainer p {\n        font-size: 14px; }\n\n@media screen and (max-width: 425px) {\n        .newsletter-body .samples-container .innerSampleContainer {\n          width: 96% !important;\n          padding: 0 2%;\n          margin: auto;\n          float: none; } }\n\n.newsletter-body .samples-container .innerSampleContainer a {\n        cursor: pointer; }\n\n.newsletter-body .samples-container .inner-container-RightBlock {\n      width: auto;\n      float: right;\n      background-size: auto;\n      background-position: -59px 0; }\n\n@media screen and (max-width: 768px) {\n        .newsletter-body .samples-container .inner-container-RightBlock {\n          width: 48%;\n          margin: 0 1%; } }\n\n@media screen and (max-width: 425px) {\n        .newsletter-body .samples-container .inner-container-RightBlock {\n          width: 96% !important;\n          margin: 25px 2% 0 2%;\n          float: none; } }\n\n.newsletter-body .samples-container .inner-container-ResultBlock {\n      width: 69%;\n      float: right;\n      background-size: auto;\n      background-position: -59px 0; }\n\n@media screen and (max-width: 425px) {\n        .newsletter-body .samples-container .inner-container-ResultBlock {\n          width: 100% !important;\n          margin-top: 25px; } }\n\n.newsletter-body .samples-container .inner-container-ResultBlock img {\n        width: 100%; }\n\n.newsletter-body .samples-container .confirmation-content {\n      background-color: #ffffff;\n      width: 30% !important;\n      float: left; }\n\n.newsletter-body .samples-container .confirmation-content h1 {\n        margin: 20px 15px;\n        font-style: italic;\n        font-size: 36px; }\n\n.newsletter-body .samples-container .confirmation-content h4 {\n        margin-left: 20px;\n        width: 270px;\n        font-size: 18px; }\n\n.newsletter-body .samples-container .confirmation-content .cta {\n        width: 180px;\n        font-weight: normal;\n        background-color: #464646;\n        color: #ffffff !important;\n        display: inline-block;\n        font-size: 14px;\n        height: 48px;\n        line-height: 50px;\n        padding: 0;\n        margin: 20px 0 10px 20px;\n        text-decoration: none;\n        text-align: center;\n        text-transform: uppercase; }\n\n.newsletter-body .samples-container .newsletter-update-form {\n      margin: 0 0 0px 5px;\n      box-shadow: none; }\n\n.newsletter-body .samples-container .newsletter-update-form h2 {\n        margin-bottom: 10px;\n        font-family: Georgia,'Times New Roman',Times,serif;\n        font-style: italic; }\n\n.newsletter-body .samples-container .newsletter-update-form h4 {\n        margin-bottom: 20px;\n        font-size: 1em;\n        line-height: 1.1;\n        font-weight: normal; }\n\n.newsletter-body .samples-container .newsletter-update-form h4.margin-space {\n          margin: 20px 0 10px; }\n\n.newsletter-body .samples-container .newsletter-update-form fieldset {\n        padding: 0;\n        margin: 0;\n        border: 0;\n        min-width: 0;\n        margin-bottom: 2px; }\n\n@media screen and (max-width: 768px) {\n      .newsletter-body .samples-container img.desk-block {\n        width: 100%; } }\n\n.newsletter-body .form-group .radio {\n    display: inline-block;\n    width: auto;\n    margin-top: 10px !important;\n    margin-right: 35px; }\n\n.newsletter-body .newsletter-update-form .form-checkbox .checkbox label {\n    color: #000000; }\n\n.newsletter-body .newsletter-update-form .form-checkbox .checkbox label a {\n      color: inherit !important;\n      text-decoration: underline; }\n\n.newsletter-body .btn-default {\n    background-color: #464646;\n    color: #ffffff; }\n\n.newsletter-body .lighter {\n    color: #666666; }\n\n.newsletter-body .mobile-margin {\n    display: inline-block; }\n\n.newsletter-body .checkbox label {\n    line-height: 12px; }\n\n.split-input {\n  float: left;\n  margin-right: 10px;\n  width: 115px; }\n\n@media screen and (max-width: 768px) {\n  .innerSampleContainer {\n    width: 70%; }\n  .innerSampleContainer1 {\n    width: 30%; }\n  .newsletter-body {\n    width: 100%; }\n    .newsletter-body .samples-container .newsletter-update-form {\n      margin: 0;\n      padding: 0; }\n    .newsletter-body .newsletter-update-form h2 {\n      display: block;\n      overflow: hidden;\n      padding: 15px;\n      margin: 0;\n      font-size: 15px;\n      font-weight: bold;\n      color: #ffffff;\n      background: #90d2c5; }\n    .newsletter-body .samples-container {\n      padding: 0; } }\n\n.newsletter-update-form input[type=\"text\"].form-control {\n  display: block;\n  width: 335px;\n  height: 48px;\n  border: 1px solid #c2c2c2;\n  border-radius: 0;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857;\n  color: #555;\n  background-color: #ffffff;\n  background-image: none;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);\n  -webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s; }\n\n.newsletter-update-form .countrySelect select.form-control {\n  width: 335px;\n  height: 48px; }\n\n/* SAP Hybris Marketing Landing Pages Runtime Styles: sapCp */\n\n/* Base */\n\n.sapCpRuntime {\n  width: 100%;\n  height: 100%; }\n\n.sapCpRuntime .sapCpBody {\n  margin: 0;\n  width: 100%;\n  height: 100%; }\n\n/* Content Page */\n\n.sapCpContentPage {\n  box-sizing: border-box;\n  width: 100%; }\n\n.sapCpContentPageLoading {\n  cursor: wait; }\n\n/* Layout */\n\n.sapCpLayout {\n  box-sizing: inherit;\n  width: 100%;\n  padding: 8px; }\n\n/* Widget */\n\n.sapCpWidget {\n  box-sizing: inherit;\n  min-height: 30px;\n  padding: 8px; }\n\n.sapCpContentPage .sapCpWidget.sapCpWidgetHidden {\n  display: none; }\n\n.sapCpWidget ~ .sapCpWidget {\n  margin-top: 8px; }\n\n.sapCpWidgetContentLeft {\n  min-height: 1px;\n  float: left;\n  text-align: right; }\n\n.sapCpWidgetContentRight {\n  min-height: 1px;\n  text-align: left;\n  vertical-align: top; }\n\n.sapCRLWidgetFixContent {\n  clear: both; }\n\n.sapCpWidgetContentNoIndent {\n  min-height: 1px; }\n\n.sapCpWidgetContentLeft .sapCpLabel {\n  margin-top: 6px;\n  margin-right: 10px; }\n\n.sapCpWidgetMandatoryMissing {\n  background-color: lightcoral; }\n\n.sapCpWidgetInvalid {\n  background-color: orange; }\n\n/* Button Widget */\n\n.sapCpButtonWidget .sapCpButtonWidgetExtraText {\n  display: block;\n  padding-top: 5px; }\n\n.sapCpButtonWidget .sapCpMissingMandatoryFieldLabel {\n  display: block;\n  color: red; }\n\n.sapCpContentPage:not(.sapCpMissingMandatoryField) .sapCpButtonWidget .sapCpMissingMandatoryFieldLabel {\n  display: none; }\n\n.sapCpButtonWidget .sapCpErrorMessageText {\n  display: block;\n  color: red; }\n\n.sapCpContentPage:not(.sapCpSubmitError) .sapCpButtonWidget .sapCpErrorMessageText {\n  display: none; }\n\n.sapCpButtonWidget .sapCpSuccessMessageLabel {\n  display: block;\n  color: green; }\n\n.sapCpContentPage:not(.sapCpSubmitCompleted) .sapCpButtonWidget .sapCpSuccessMessageLabel {\n  display: none; }\n\n.sapCpContentPage:not(.sapCpSubmitCompleted) .sapCpButtonWidget .sapCpButtonWidgetDownloadLink {\n  display: none; }\n\n.sapCpButtonWidget .sapCpButtonWidgetDownloadLink:not(.sapCpButtonWidgetDownloadLinkVisible) {\n  display: none; }\n\n.sapCpButtonWidget.sapCpButtonWidgetLoading button {\n  cursor: wait; }\n\n/* Label */\n\n.sapCpLabel {\n  position: relative;\n  display: block;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.sapCpLabelRequiredBefore {\n  padding-left: 10px; }\n\n.sapCpLabel:not(.sapCpLabelRequiredBefore):after {\n  content: \"*\";\n  color: RoyalBlue;\n  visibility: hidden; }\n\n.sapCpWidgetContentLeft .sapCpLabel:not(.sapCpLabelRequiredBefore):after {\n  position: absolute; }\n\n.sapCpLabel:not(.sapCpLabelRequiredBefore).sapCpLabelRequired:after {\n  visibility: visible; }\n\n.sapCpLabel.sapCpLabelRequiredBefore:before {\n  content: \"*\";\n  color: RoyalBlue;\n  visibility: hidden;\n  position: absolute;\n  left: 1px;\n  top: -2px; }\n\n.sapCpLabel.sapCpLabelRequiredBefore.sapCpLabelRequired:before {\n  visibility: visible; }\n\n.sapCpCheckBox ~ .sapCpLabel {\n  margin-left: 2px; }\n\n/* Input */\n\n.sapCpInput {\n  font-size: inherit;\n  font-family: inherit;\n  padding: 4px 8px;\n  text-overflow: ellipsis; }\n\n/* CheckBox */\n\n.sapCpCheckBox {\n  vertical-align: top;\n  min-width: 20px;\n  float: left; }\n\n.sapCpCheckBox input {\n  font-size: inherit;\n  font-family: inherit; }\n\n/* DropDown */\n\n.sapCpDropDown {\n  font-size: inherit;\n  font-family: inherit;\n  padding: 4px 8px;\n  min-width: 215px; }\n\n.sapCpDropDown > option {\n  color: black; }\n\n.sapCpDropDownPlaceholder {\n  color: gray; }\n\n/* Date Picker */\n\n.sapCpDatePicker option {\n  color: black; }\n\n.sapCpDatePicker .sapCpDropDown ~ .sapCpDropDown {\n  margin-left: 10px; }\n\n.sapCpDatePicker .sapCpDatePickerDay {\n  min-width: 50px;\n  width: 23%;\n  max-width: 100px; }\n\n.sapCpInputWidget .sapCpDatePickerMonth {\n  min-width: 100px;\n  width: 43%;\n  max-width: 200px; }\n\n.sapCpInputWidget .sapCpDatePickerYear {\n  min-width: 50px;\n  width: 23%;\n  max-width: 100px; }\n\n/* Button */\n\n.sapCpButton {\n  font-size: inherit;\n  font-family: inherit;\n  padding: 6px 10px; }\n\n/*  For usage in landing Pages */\n\n.sapCpContentPage {\n  box-sizing: border-box;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 16px;\n  color: grey;\n  -webkit-font-smoothing: auto; }\n\n.sapCpContentPage *,\n.sapCpContentPage *:before,\n.sapCpContentPage *:after {\n  box-sizing: inherit; }\n\n.sapCpWidget input[type=checkbox] {\n  -webkit-appearance: checkbox;\n  font-size: inherit;\n  margin-top: 0px; }\n\n.sapCpCheckBox {\n  line-height: 18px; }\n\n.sapCpInputWidget select {\n  -webkit-appearance: menulist;\n  background-image: none;\n  height: 38px;\n  font-family: inherit;\n  font-size: inherit;\n  color: inherit;\n  width: auto; }\n\n.sapCpInputWidget .sapCpInput {\n  font-family: inherit;\n  font-size: inherit;\n  width: auto;\n  border: lightgrey solid 1px;\n  height: 38px; }\n\n.sapCpLabel {\n  font-family: inherit;\n  font-weight: 400;\n  font-size: inherit;\n  color: inherit;\n  line-height: 22px; }\n\n.sapCpButton {\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: 400;\n  color: inherit;\n  border-radius: 5px;\n  border-style: solid;\n  border-color: lightgrey;\n  border-width: 1px;\n  padding: 8px 20px;\n  width: auto; }\n\n/* Responsive layout */\n\n@media screen and (min-width: 481px) {\n  .sapCpLabel:not(.sapCpLabelRequiredBefore):after {\n    right: 1px;\n    top: -2px; }\n  .sapCpLabel:not(.sapCpLabelRequiredBefore) {\n    padding-right: 10px; } }\n\n@media screen and (max-width: 480px) {\n  /* Widget */\n  .sapCpWidgetContent {\n    width: 100% !important;\n    text-align: left; }\n  /* Input */\n  .sapCpWidgetContent .sapCpInput {\n    width: 95%; }\n  /* Text Area */\n  .sapCpWidgetContent .sapCpTextArea {\n    width: 98%; }\n  /* DropDown */\n  .sapCpWidgetContent .sapCpDropDown {\n    width: 100%; }\n  /* Date Picker */\n  .sapCpWidgetContent .sapCpDatePicker .sapCpDatePickerDay {\n    width: 23%; }\n  .sapCpWidgetContent .sapCpDatePicker .sapCpDatePickerMonth {\n    width: 43%; }\n  .sapCpWidgetContent .sapCpDatePicker .sapCpDatePickerYear {\n    width: 23%; }\n  .sapCpWidgetContentRight {\n    padding-left: 0% !important; } }\n"

/***/ }),

/***/ "./src/app/newsletter/newsletter-update/newsletter-update.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/newsletter/newsletter-update/newsletter-update.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NewsletterUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterUpdateComponent", function() { return NewsletterUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _forms_registration_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../forms/registration.form */ "./src/app/forms/registration.form.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_singleton_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/singleton.service */ "./src/app/services/singleton.service.ts");
/* harmony import */ var _newsletter_signup_newsletter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../newsletter-signup/newsletter.service */ "./src/app/newsletter-signup/newsletter.service.ts");
/* harmony import */ var _services_meta_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/meta.service */ "./src/app/services/meta.service.ts");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app.constant */ "./src/app/app.constant.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_js_sapContentPage_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../assets/js/sapContentPage.js */ "./src/assets/js/sapContentPage.js");
/* harmony import */ var _assets_js_sapContentPage_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_js_sapContentPage_js__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var NewsletterUpdateComponent = /** @class */ (function () {
    function NewsletterUpdateComponent(router, route, customerForm, fb, ymarketingServ, singletonServ, metaService) {
        this.router = router;
        this.route = route;
        this.customerForm = customerForm;
        this.fb = fb;
        this.ymarketingServ = ymarketingServ;
        this.singletonServ = singletonServ;
        this.metaService = metaService;
        this.newsLetterForm = this.fb.group(customerForm.ymarketingUnsubscribeForm());
        var days = [];
        for (var i = 1; i <= 31; i++) {
            var count = '';
            if (i >= 10) {
                var obj = { day: '' + i };
                days.push(obj);
            }
            else {
                var obj = { day: '0' + i };
                days.push(obj);
            }
        }
        this.days = days;
        var monthBox = [];
        var yearBox = [];
        for (var i = 1; i <= 12; i++) {
            if (i >= 10) {
                var obj = { month: '' + i };
                monthBox.push(obj);
            }
            else {
                var obj = { month: '0' + i };
                monthBox.push(obj);
            }
        }
        this.months = monthBox;
        var date = new Date();
        var birthYear = date.getFullYear() - 14;
        var _year = birthYear;
        for (var k = 1; k <= 65; k++) {
            _year = _year - 1;
            var obj = { year: _year };
            yearBox.push(obj);
        }
        this.years = yearBox;
    }
    NewsletterUpdateComponent.prototype.ngOnInit = function () {
        this.metaService.createCanonicalURL();
        this.setCountry();
    };
    NewsletterUpdateComponent.prototype.ngAfterViewInit = function () {
        var url = "assets/js/sapContentPage.js";
        this.appendScript(url);
    };
    NewsletterUpdateComponent.prototype.nestedCopy = function (array) {
        return JSON.parse(JSON.stringify(array));
    };
    NewsletterUpdateComponent.prototype.setCountry = function () {
        var baseSite = this.singletonServ.catalogVersion;
        if (baseSite.isoCode === "GB") {
            this.ukSpecificForm = true;
            this.usSpecificForm = false;
            this.countries = this.nestedCopy(_app_constant__WEBPACK_IMPORTED_MODULE_7__["countries"]);
            var _isoCode_1 = baseSite.isoCode;
            var _index = lodash__WEBPACK_IMPORTED_MODULE_8__["findIndex"](this.countries, function (o) {
                return o.isocode == _isoCode_1;
            });
            if (_index != -1) {
                this.newsLetterForm.controls["country"].patchValue(this.countries[_index]);
            }
        }
        else if (baseSite.isoCode === "EU") {
            this.ukSpecificForm = false;
            this.usSpecificForm = false;
            this.countries = this.nestedCopy(_app_constant__WEBPACK_IMPORTED_MODULE_7__["EUROPEAN_COUNTRIES"]);
        }
        else if (baseSite.isoCode === "DE") {
            this.ukSpecificForm = false;
            this.usSpecificForm = false;
            this.countries = this.nestedCopy(_app_constant__WEBPACK_IMPORTED_MODULE_7__["DE_COUNTRIES"]);
            this.newsLetterForm.controls["country"].patchValue(this.countries[0]);
        }
        else if (baseSite.isoCode === "US") {
            this.ukSpecificForm = false;
            this.usSpecificForm = true;
            this.countries = this.nestedCopy(_app_constant__WEBPACK_IMPORTED_MODULE_7__["US_COUNTRIES"]);
            var _isoCode_2 = baseSite.isoCode;
            var _index = lodash__WEBPACK_IMPORTED_MODULE_8__["findIndex"](this.countries, function (o) {
                return o.isocode == _isoCode_2;
            });
            if (_index != -1) {
                this.newsLetterForm.controls["country"].patchValue(this.countries[_index]);
            }
            this.newsLetterForm.controls["district"].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            this.newsLetterForm.controls['district'].updateValueAndValidity();
        }
    };
    NewsletterUpdateComponent.prototype.onSubmitForm = function (event) {
    };
    NewsletterUpdateComponent.prototype.appendScript = function (url) {
        var googleMapsScript = document.createElement('script');
        googleMapsScript.setAttribute('src', url);
        document.body.appendChild(googleMapsScript);
    };
    NewsletterUpdateComponent.prototype.isMyScriptLoaded = function (url) {
        if (!url)
            url = "../../../assets/js/sapContentPage.js";
        var scripts = document.getElementsByTagName('script');
        for (var i = scripts.length; i--;) {
            if (scripts[i].src == url)
                return true;
        }
        return false;
    };
    NewsletterUpdateComponent.prototype.onUnsubsribe = function () {
        var _this = this;
        this.ymarketingServ.generateToken().subscribe(function (tokenId) {
            var token = tokenId["access_token"];
            _this.ymarketingServ.unSubscribeNewsletter(token, 'vbnj@vbnj.com').subscribe(function (resposne) {
            }, function (err) {
            });
        });
    };
    NewsletterUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'appNewsletterUpdate',
            template: __webpack_require__(/*! ./newsletter-update.component.html */ "./src/app/newsletter/newsletter-update/newsletter-update.component.html"),
            styles: [__webpack_require__(/*! ./newsletter-update.component.scss */ "./src/app/newsletter/newsletter-update/newsletter-update.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _forms_registration_form__WEBPACK_IMPORTED_MODULE_2__["RegistrationForm"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _newsletter_signup_newsletter_service__WEBPACK_IMPORTED_MODULE_5__["NewsLetterComponentService"],
            _services_singleton_service__WEBPACK_IMPORTED_MODULE_4__["SingletonService"],
            _services_meta_service__WEBPACK_IMPORTED_MODULE_6__["MetaService"]])
    ], NewsletterUpdateComponent);
    return NewsletterUpdateComponent;
}());



/***/ }),

/***/ "./src/app/newsletter/newsletter-update/newsletter-update.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/newsletter/newsletter-update/newsletter-update.module.ts ***!
  \**************************************************************************/
/*! exports provided: NewsletterUpdateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsletterUpdateModule", function() { return NewsletterUpdateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _newsletter_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./newsletter-update.component */ "./src/app/newsletter/newsletter-update/newsletter-update.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', component: _newsletter_update_component__WEBPACK_IMPORTED_MODULE_4__["NewsletterUpdateComponent"], runGuardsAndResolvers: 'always' }
];
var NewsletterUpdateModule = /** @class */ (function () {
    function NewsletterUpdateModule() {
    }
    NewsletterUpdateModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [
                _newsletter_update_component__WEBPACK_IMPORTED_MODULE_4__["NewsletterUpdateComponent"]
            ],
            providers: []
        })
    ], NewsletterUpdateModule);
    return NewsletterUpdateModule;
}());



/***/ }),

/***/ "./src/assets/js/sapContentPage.js":
/*!*****************************************!*\
  !*** ./src/assets/js/sapContentPage.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * Copyright (C) 2009-2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
(function() {
    "use strict";
    var C = {
        BasePath: "https://my300363-api.s4hana.ondemand.com/sap/opu/odata/sap/CUAN_CONTENT_PAGE_RESULT_SRV",
        ResultHeadersPath: "ResultHeaders",
        CORS: true,
        CSRFTokenHeader: "",
        AppendScenarioParameter: "",
        Tenant: "https://my300363.s4hana.ondemand.com",
        Version: "11.12.20"
    };
    var R = {
        getConfig: function(c) {
            if (c) {
                var b = R.Setting.get(c, "lpi-base-path"),
                    t = R.Setting.get(c, "lpi-tenant");
                if (b && t) {
                    return {
                        BasePath: b,
                        ResultHeadersPath: "",
                        CORS: true,
                        CSRFTokenHeader: "",
                        AppendScenarioParameter: "_L54AD1F204_",
                        Tenant: t,
                        Version: C.Version
                    };
                }
            }
            return C;
        },
        initialize: function() {
            if (this.isInitializing() || this.isInitialized()) {
                return;
            }
            this.reset();
            var c = this.getPages(),
                i;
            for (i = 0; i < c.length; i++) {
                this.ContentPage.prepare(c[i]);
            }
            this.Request.fetchToken(c, this.handleFetchTokenResponse.bind(this));
        },
        handleFetchTokenResponse: function(c, s) {
            var i;
            if (s) {
                for (i = 0; i < c.length; i++) {
                    this.Result.sendOpen(c[i], this.handleOpenResponse.bind(this));
                }
            } else {
                for (i = 0; i < c.length; i++) {
                    R.ContentPage.toggleErrorMessage(c[i], true);
                }
            }
        },
        handleOpenResponse: function(c, r) {
            if (R.Request.isErrorResponse(r)) {
                R.ContentPage.toggleErrorMessage(c, true);
            } else {
                this.ContentPage.finishLoading(c, r);
            }
            c.sapCpInitializing = false;
            c.sapCpInitialized = true;
        },
        isInitializing: function() {
            var c = this.getPages(),
                i;
            for (i = 0; i < c.length; i++) {
                if (c[i].sapCpInitializing) {
                    return true;
                }
            }
            return false;
        },
        isInitialized: function() {
            var c = this.getPages(),
                i;
            for (i = 0; i < c.length; i++) {
                if (!c[i].sapCpInitialized) {
                    return false;
                }
            }
            return true;
        },
        getPages: function() {
            return R.Node.getAllWithClassName(document, "sapCpContentPage");
        },
        reset: function() {
            var c = this.getPages(),
                i, o;
            for (i = 0; i < c.length; i++) {
                o = c[i];
                delete o.sapCpInitializing;
                delete o.sapCpInitialized;
                delete o.sapCpCSRFToken;
            }
        },
        ContentPage: {
            prepare: function(c) {
                if (c.sapCpInitializing || c.sapCpInitialized) {
                    return;
                }
                c.sapCpInitializing = true;
                this.checkVersion(c);
                this.prepareWidgets(c);
                R.Event.registerListener(c, "submit", this.handleSubmitEvent.bind(this));
            },
            checkVersion: function(c) {
                var s = R.Setting.get(c, "version"),
                    m = R.getConfig(c);
                if (s > m.Version) {
                    R.Console.warn("You are using an outdated version of the landing page script");
                }
            },
            prepareWidgets: function(c) {
                var w = this.getWidgets(c),
                    i;
                for (i = 0; i < w.length; i++) {
                    R.Widget.prepare(w[i]);
                }
            },
            getWidgets: function(c) {
                return R.Node.getAllWithClassName(c, "sapCpWidget");
            },
            checkMissingMandatoryFieldsLabel: function(n) {
                var c = R.Util.findParentByClassName(n, "sapCpContentPage"),
                    m = R.Node.getAllWithClassName(c, "sapCpWidgetMandatoryMissing"),
                    h = (m.length > 0);
                R.ContentPage.toggleMissingMandatoryField(c, h);
            },
            finishLoading: function(c, r) {
                if (r && r.ContactPersonalizationData && r.ContactPersonalizationData.results) {
                    this.processPersonalizationData(c, r.ContactPersonalizationData.results);
                }
                this.toggleLoading(c, false);
            },
            processPersonalizationData: function(c, p) {
                var P, w = this.getWidgets(c),
                    W, i;
                for (i = 0; i < p.length; i++) {
                    P = p[i];
                    W = R.Util.findWidgetByKey(w, P.WidgetKeyHash);
                    if (W) {
                        R.Widget.applyPersonalization(W, P.Value);
                    }
                }
            },
            handleSubmitEvent: function(e) {
                if (e.preventDefault) {
                    e.preventDefault();
                }
            },
            collectAnswers: function(c, o) {
                var w = this.getWidgets(c),
                    W, a = [],
                    A, m = false,
                    i = false,
                    I;
                for (I = 0; I < w.length; I++) {
                    W = w[I];
                    A = R.Widget.collectAnswer(W, o);
                    if (A) {
                        a.push(A);
                    } else if (A === false) {
                        m = true;
                    } else if (A === null) {
                        i = true;
                    }
                }
                if (m || i) {
                    return false;
                }
                return a;
            },
            toggleLoading: function(c, s) {
                R.CSS.toggleClass(c, "sapCpContentPageLoading", s);
            },
            toggleMissingMandatoryField: function(c, s) {
                R.CSS.toggleClass(c, "sapCpMissingMandatoryField", s);
            },
            toggleInvalid: function(c, i) {
                R.CSS.toggleClass(c, "sapCpContentPageInvalid", i);
            },
            toggleErrorMessage: function(c, s) {
                R.CSS.toggleClass(c, "sapCpSubmitError", s);
            },
            toggleSuccessMessage: function(c, s) {
                R.CSS.toggleClass(c, "sapCpSubmitCompleted", s);
            },
            isProductiveTestMode: function(c) {
                var t = R.Setting.get(c, "test-mode"),
                    p = R.Setting.get(c, "productive");
                return (t && p);
            },
            setErrorMessage: function(c, e) {
                var E = R.Node.getFirstWithClassName(c, "sapCpErrorMessageText");
                if (E) {
                    E.sapCpErrorMessage = (E.sapCpErrorMessage || E.textContent);
                    E.textContent = (e || E.sapCpErrorMessage);
                }
            }
        },
        Layout: {},
        Widget: {
            prepare: function(w) {
                if (this.isInputWidget(w)) {
                    R.InputWidget.prepare(w);
                } else if (this.isCheckBoxWidget(w)) {
                    R.CheckBoxWidget.prepare(w);
                } else if (this.isDownloadWidget(w)) {
                    R.DownloadWidget.prepare(w);
                } else if (this.isButtonWidget(w)) {
                    R.ButtonWidget.prepare(w);
                } else if (this.isInteractionWidget(w)) {
                    R.InteractionWidget.prepare(w);
                }
            },
            applyPersonalization: function(w, v) {
                if (this.isInputWidget(w)) {
                    R.InputWidget.applyPersonalization(w, v);
                } else if (this.isCheckBoxWidget(w)) {
                    R.CheckBoxWidget.applyPersonalization(w, v);
                }
            },
            collectAnswer: function(w, c) {
                var a;
                if (this.isInputWidget(w)) {
                    a = R.InputWidget.collectAnswer(w);
                } else if (this.isNoteWidget(w)) {
                    a = R.NoteWidget.collectAnswer(w);
                } else if (this.isCheckBoxWidget(w)) {
                    a = R.CheckBoxWidget.collectAnswer(w);
                } else if (this.isDownloadWidget(w)) {
                    a = R.DownloadWidget.collectAnswer(w);
                } else if (this.isButtonWidget(w)) {
                    a = R.ButtonWidget.collectAnswer(w, c);
                } else if (this.isInteractionWidget(w)) {
                    a = R.InteractionWidget.collectAnswer(w);
                }
                if (a === false) {
                    R.Widget.toggleMissingMandatory(w, true);
                    R.Widget.toggleInvalid(w, false);
                } else if (a === null) {
                    R.Widget.toggleMissingMandatory(w, false);
                    R.Widget.toggleInvalid(w, true);
                } else {
                    R.Widget.toggleMissingMandatory(w, false);
                    R.Widget.toggleInvalid(w, false);
                }
                return a;
            },
            isMandatory: function(w) {
                return R.CSS.hasClass(w, "sapCpWidgetMandatory");
            },
            isTextWidget: function(w) {
                return R.CSS.hasClass(w, "sapCpTextWidget");
            },
            isInputWidget: function(w) {
                return R.CSS.hasClass(w, "sapCpInputWidget");
            },
            isNoteWidget: function(w) {
                return R.CSS.hasClass(w, "sapCpNoteWidget");
            },
            isCheckBoxWidget: function(w) {
                return R.CSS.hasClass(w, "sapCpCheckBoxWidget");
            },
            isDownloadWidget: function(w) {
                return R.CSS.hasClass(w, "sapCpDownloadWidget");
            },
            isButtonWidget: function(w) {
                return R.CSS.hasClass(w, "sapCpButtonWidget");
            },
            isInteractionWidget: function(w) {
                return R.CSS.hasClass(w, "sapCpInteractionWidget");
            },
            toggleMissingMandatory: function(w, m) {
                R.CSS.toggleClass(w, "sapCpWidgetMandatoryMissing", m);
            },
            toggleInvalid: function(w, i) {
                R.CSS.toggleClass(w, "sapCpWidgetInvalid", i);
            }
        },
        InputWidget: {
            prepare: function(i) {
                var I = R.Widget.isMandatory(i),
                    a, d, D, b;
                d = i.getElementsByTagName("select");
                for (b = 0; b < d.length; b++) {
                    R.Event.registerListener(d[b], "change", this.handleDropDownChangeEvent.bind(this));
                }
                D = R.Node.getFirstWithClassName(i, "sapCpDatePicker");
                if (D) {
                    this.prepareDatePicker(D);
                }
                if (!I) {
                    return;
                }
                a = i.getElementsByTagName("input");
                if (a[0]) {
                    R.Event.registerListener(a[0], "focusout", this.handleInputFocusOutEvent.bind(this));
                }
            },
            prepareDatePicker: function(d) {
                var D = R.Node.getAllWithClassName(d, "sapCpDropDown"),
                    o, i;
                for (i = 0; i < D.length; i++) {
                    o = D[i];
                    if (R.CSS.hasClass(o, "sapCpDatePickerDay")) {
                        this.prepareDatePickerDayDropDown(o);
                    } else if (R.CSS.hasClass(o, "sapCpDatePickerMonth")) {
                        R.Event.registerListener(o, "change", this.handleDatePickerDropDownChangeEvent.bind(this));
                    } else if (R.CSS.hasClass(o, "sapCpDatePickerYear")) {
                        this.prepareDatePickerYearDropDown(o);
                        R.Event.registerListener(o, "change", this.handleDatePickerDropDownChangeEvent.bind(this));
                    }
                }
            },
            prepareDatePickerDayDropDown: function(d) {
                var i;
                for (i = 1; i <= 31; i++) {
                    this.addDatePickerDropDownOption(d, i);
                }
            },
            prepareDatePickerYearDropDown: function(y) {
                var d = R.Setting.get(y, "dropdowntype"),
                    Y = d.split("-"),
                    i, a, c = new Date(),
                    b = c.getFullYear(),
                    e, I;
                if (Y.length === 4) {
                    i = (parseInt(Y[2], 10) || 0);
                    a = (parseInt(Y[3], 10) || 0);
                }
                if (i > 0) {
                    for (I = i; I > 0; I--) {
                        e = b + I;
                        this.addDatePickerDropDownOption(y, e);
                    }
                }
                this.addDatePickerDropDownOption(y, b);
                if (a > 0) {
                    for (I = 1; I <= a; I++) {
                        e = b - I;
                        this.addDatePickerDropDownOption(y, e);
                    }
                }
            },
            applyPersonalization: function(i, v) {
                var I = R.Node.getFirstWithClassName(i, "sapCpInput"),
                    c = R.Node.getFirstWithClassName(i, "sapCpCheckBox"),
                    d = R.Node.getFirstWithClassName(i, "sapCpDatePicker"),
                    D = R.Node.getFirstWithClassName(i, "sapCpDropDown"),
                    a;
                if (!v) {
                    return;
                }
                if (I) {
                    I.value = v;
                } else if (c) {
                    a = c.getElementsByTagName("input");
                    if (a[0]) {
                        a[0].checked = !!v;
                    }
                } else if (d) {
                    if (v !== "00000000") {
                        var y = R.Node.getFirstWithClassName(d, "sapCpDatePickerYear"),
                            m = R.Node.getFirstWithClassName(d, "sapCpDatePickerMonth"),
                            o = R.Node.getFirstWithClassName(d, "sapCpDatePickerDay");
                        if (y) {
                            y.value = v.substring(0, 4);
                        }
                        if (m) {
                            m.value = v.substring(4, 6);
                        }
                        if (o) {
                            o.value = v.substring(6, 8);
                        }
                    }
                } else if (D) {
                    D.value = v;
                    this.updateDropDownValue(D);
                }
            },
            handleInputFocusOutEvent: function(e) {
                var i = e.target,
                    I = R.Util.findParentByClassName(i, "sapCpInputWidget");
                if (i.value) {
                    R.Widget.toggleMissingMandatory(I, false);
                }
                R.ContentPage.checkMissingMandatoryFieldsLabel(I);
            },
            handleDropDownChangeEvent: function(e) {
                var d = e.target;
                this.updateDropDownValue(d);
            },
            handleDatePickerDropDownChangeEvent: function(e) {
                var d = e.target,
                    D = d.parentNode;
                this.updateDatePickerValues(D);
            },
            updateDropDownValue: function(d) {
                R.CSS.toggleClass(d, "sapCpDropDownPlaceholder", !d.value);
            },
            updateDatePickerValues: function(d) {
                var D = R.Node.getFirstWithClassName(d, "sapCpDatePickerDay"),
                    m = R.Node.getFirstWithClassName(d, "sapCpDatePickerMonth"),
                    y = R.Node.getFirstWithClassName(d, "sapCpDatePickerYear");
                if (!D || !m || !y) {
                    return;
                }
                var s = D.selectedOptions[0].value,
                    S = m.selectedOptions[0].value,
                    a = y.selectedOptions[0].value,
                    i = (parseInt(s, 10) || 0),
                    b = (parseInt(S, 10) || 0),
                    c = (parseInt(a, 10) || 0),
                    o = new Date(c, b, 0),
                    e = o.getDate(),
                    O = D.options.length,
                    f, I;
                if (i > e) {
                    D.selectedIndex = e.toString();
                }
                if (O > (e + 1)) {
                    for (I = O; I > (e + 1); I--) {
                        D.remove(I - 1);
                    }
                } else if (O < (e + 1)) {
                    for (I = O; I < (e + 1); I++) {
                        f = I;
                        this.addDatePickerDropDownOption(D, f);
                    }
                }
            },
            addDatePickerDropDownOption: function(d, v) {
                var V = v.toString(),
                    n;
                if (v < 10) {
                    V = "0" + V;
                }
                n = new Option(V, V);
                d.add(n);
            },
            checkValidity: function(i) {
                var r;
                var v = true;
                var I = "";
                if (i.type === "email") {
                    if (i.value) {
                        r = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
                        v = r.test(i.value);
                        if (!v) {
                            I = i.getAttribute("data-sap-cp-validationMessage");
                        }
                    }
                }
                if (i.type === "tel") {
                    if (i.value) {
                        r = new RegExp("^\\+(?:[0-9] ?){6,28}[0-9]$");
                        v = r.test(i.value);
                        if (!v) {
                            I = i.getAttribute("data-sap-cp-validationMessage");
                        }
                    }
                }
                if (i.setCustomValidity) {
                    i.setCustomValidity(I);
                    i.title = I;
                } else {
                    i.title = I;
                }
                return v;
            },
            collectAnswer: function(i) {
                var I = R.Widget.isMandatory(i),
                    o = R.Node.getFirstWithClassName(i, "sapCpInput"),
                    c = R.Node.getFirstWithClassName(i, "sapCpCheckBox"),
                    d = R.Node.getFirstWithClassName(i, "sapCpDatePicker"),
                    D = R.Node.getFirstWithClassName(i, "sapCpDropDown"),
                    a, s, b;
                if (o) {
                    b = !this.checkValidity(o);
                    s = o.value;
                } else if (c) {
                    a = c.getElementsByTagName("input");
                    if (a[0]) {
                        s = (a[0].checked ? "X" : "");
                    }
                } else if (d) {
                    var y = R.Node.getFirstWithClassName(d, "sapCpDatePickerYear"),
                        m = R.Node.getFirstWithClassName(d, "sapCpDatePickerMonth"),
                        e = R.Node.getFirstWithClassName(d, "sapCpDatePickerDay");
                    if (y && m && e) {
                        s = y.value + m.value + e.value;
                    }
                    if (!/^[0-9]{8}$/.test(s)) {
                        s = "";
                    }
                } else if (D) {
                    s = D.value;
                }
                if (I && !s) {
                    return false;
                }
                if (b) {
                    return null;
                }
                var A = {
                    WidgetKeyHash: R.Setting.get(i, "key"),
                    WidgetValueKeyHash: "",
                    Value: s
                };
                return A;
            }
        },
        CheckBoxWidget: {
            prepare: function(c) {
                var i = R.Widget.isMandatory(c),
                    o;
                if (!i) {
                    return;
                }
                o = c.getElementsByTagName("input")[0];
                if (o) {
                    R.Event.registerListener(o, "focusout", this.handleCheckBoxFocusOutEvent.bind(this));
                }
            },
            applyPersonalization: function(c, v) {
                var o;
                o = c.getElementsByTagName("input")[0];
                if (o) {
                    o.checked = (o.checked || !!v);
                }
            },
            handleCheckBoxFocusOutEvent: function(e) {
                var c = e.target,
                    o = R.Util.findParentByClassName(c, "sapCpCheckBoxWidget");
                if (c.checked) {
                    R.Widget.toggleMissingMandatory(o, false);
                }
                R.ContentPage.checkMissingMandatoryFieldsLabel(o);
            },
            collectAnswer: function(c) {
                var i = R.Widget.isMandatory(c),
                    o = c.getElementsByTagName("input")[0],
                    b = false;
                if (o) {
                    b = o.checked;
                }
                if (i && !b) {
                    return false;
                }
                var a = {
                    WidgetKeyHash: R.Setting.get(c, "key"),
                    WidgetValueKeyHash: "",
                    Value: (b ? "X" : "")
                };
                return a;
            }
        },
        NoteWidget: {
            collectAnswer: function(n) {
                var w = R.Widget.isMandatory(n),
                    t = n.getElementsByTagName("textarea"),
                    N;
                if (t[0]) {
                    N = t[0].value;
                }
                if (w && !N) {
                    return false;
                }
                var a = {
                    WidgetKeyHash: R.Setting.get(n, "key"),
                    WidgetValueKeyHash: "",
                    Value: N
                };
                return a;
            }
        },
        DownloadWidget: {
            prepare: function(d) {
                var w = R.Widget.isMandatory(d),
                    c;
                if (!w) {
                    return;
                }
                c = d.getElementsByTagName("input");
                if (c[0]) {
                    R.Event.registerListener(c[0], "focusout", this.handleCheckBoxFocusOutEvent.bind(this));
                }
            },
            handleCheckBoxFocusOutEvent: function(e) {
                var c = e.target,
                    d = R.Util.findParentByClassName(c, "sapCpDownloadWidget");
                if (c.checked) {
                    R.Widget.toggleMissingMandatory(d, false);
                }
                R.ContentPage.checkMissingMandatoryFieldsLabel(d);
            },
            collectAnswer: function(d) {
                var w = R.Widget.isMandatory(d),
                    c = d.getElementsByTagName("input"),
                    b = false;
                if (c[0]) {
                    b = c[0].checked;
                }
                if (w && !b) {
                    return false;
                }
                var a = {
                    WidgetKeyHash: R.Setting.get(d, "key"),
                    WidgetValueKeyHash: "",
                    Value: (b ? "X" : "")
                };
                return a;
            }
        },
        InteractionWidget: {
            prepare: function(i) {
                var w = R.Widget.isMandatory(i),
                    c;
                if (!w) {
                    return;
                }
                c = i.getElementsByTagName("input");
                if (c[0]) {
                    R.Event.registerListener(c[0], "focusout", this.handleCheckBoxFocusOutEvent.bind(this));
                }
            },
            handleCheckBoxFocusOutEvent: function(e) {
                var c = e.target,
                    i = R.Util.findParentByClassName(c, "sapCpInteractionWidget");
                if (c.checked) {
                    R.Widget.toggleMissingMandatory(i, false);
                }
                R.ContentPage.checkMissingMandatoryFieldsLabel(i);
            },
            collectAnswer: function(i) {
                var w = R.Widget.isMandatory(i),
                    c = i.getElementsByTagName("input"),
                    b = false;
                if (c[0]) {
                    b = c[0].checked;
                }
                if (w && !b) {
                    return false;
                }
                var a = {
                    WidgetKeyHash: R.Setting.get(i, "key"),
                    WidgetValueKeyHash: "",
                    Value: (b ? "X" : "")
                };
                return a;
            }
        },
        ButtonWidget: {
            prepare: function(b) {
                var B;
                B = b.getElementsByTagName("button");
                if (B[0]) {
                    R.Event.registerListener(B[0], "click", this.handleButtonClickEvent.bind(this));
                }
            },
            handleButtonClickEvent: function(e) {
                var b = e.target,
                    B = R.Util.findParentByClassName(b, "sapCpButtonWidget");
                if (e.preventDefault) {
                    e.preventDefault();
                }
                R.Result.sendSubmit(B);
            },
            collectAnswer: function(b, c) {
                var a;
                if (b === c) {
                    a = {
                        WidgetKeyHash: R.Setting.get(b, "key"),
                        WidgetValueKeyHash: "",
                        Value: "X"
                    };
                }
                return a;
            },
            performFollowUpAction: function(b, c, f) {
                var F = R.Setting.get(b, "follow-up-action");
                if (!F || F === R.Constants.FollowUpAction.FollowUpPage) {
                    this.openFollowUpPage(f);
                } else if (F === R.Constants.FollowUpAction.SuccessMessage) {
                    R.ContentPage.toggleSuccessMessage(c, true);
                }
            },
            openFollowUpPage: function(f) {
                R.Util.openPage(window, f);
            },
            toggleDownloadLinkVisible: function(l, s) {
                R.CSS.toggleClass(l, "sapCpButtonWidgetDownloadLinkVisible", s);
            },
            toggleLoading: function(b, l) {
                var L = (typeof l === "undefined" ? !R.CSS.hasClass(b, "sapCpButtonWidgetLoading") : l),
                    B = b.getElementsByTagName("button"),
                    i;
                R.CSS.toggleClass(b, "sapCpButtonWidgetLoading", L);
                for (i = 0; i < B.length; i++) {
                    if (L) {
                        B[i].setAttribute("disabled", "disabled");
                    } else {
                        B[i].removeAttribute("disabled");
                    }
                }
            }
        },
        Result: {
            sendOpen: function(c, f) {
                var p = (R.Setting.get(c, "prefill-data") === "true"),
                    o = R.Result.buildOpen(c, p);
                R.Request.postResult(c, o, function(r) {
                    f(c, r);
                });
                if (!p) {
                    f(c, true);
                }
            },
            sendSubmit: function(c) {
                var o = R.Util.findParentByClassName(c, "sapCpContentPage"),
                    s = R.Result.buildSubmit(o, c),
                    v = true;
                R.ContentPage.toggleErrorMessage(o, false);
                R.ContentPage.toggleSuccessMessage(o, false);
                if (o.checkValidity) {
                    v = o.checkValidity();
                    R.ContentPage.toggleInvalid(o, !v);
                    if (o.reportValidity) {
                        o.reportValidity();
                    }
                }
                if (v && s) {
                    R.ContentPage.toggleMissingMandatoryField(o, false);
                    R.ButtonWidget.toggleLoading(c, true);
                    R.Request.postResult(o, s, function(r) {
                        R.Result.handleSubmitResponse(r, o, c);
                        R.ButtonWidget.toggleLoading(c, false);
                    });
                } else {
                    R.ContentPage.toggleMissingMandatoryField(o, true);
                }
            },
            buildOpen: function(c, p) {
                var r = this.buildResult(c, "OPEN");
                if (p) {
                    r.ContactPersonalizationData = [];
                }
                return r;
            },
            buildSubmit: function(c, o) {
                var r, a, m;
                r = this.buildResult(c, "SUBMIT");
                a = R.ContentPage.collectAnswers(c, o);
                m = !a;
                R.ContentPage.toggleMissingMandatoryField(c, m);
                if (m) {
                    return null;
                }
                r.Answers = a;
                r.ResultValues = [];
                return r;
            },
            buildResult: function(c, e) {
                var l = c.getElementsByClassName("sapCpLayout")[0];
                var r = {
                    ResultEvent: e,
                    ContentPageKeyHash: R.Setting.get(c, "key"),
                    LayoutKeyHash: R.Setting.get(l, "key"),
                    Url: R.Util.getCurrentUrl()
                };
                if (R.Setting.get(c, "lpkey")) {
                    r.LandingPageKeyHash = R.Setting.get(c, "lpkey");
                }
                if (R.ContentPage.isProductiveTestMode(c)) {
                    r.ProductiveTestMode = true;
                }
                var o = R.Util.getOutboundId();
                if (o) {
                    r.OutboundId = o;
                }
                var s = R.Util.getCampaignId();
                if (s) {
                    r.CampaignId = s;
                }
                return r;
            },
            handleSubmitResponse: function(r, c, o) {
                if (R.Request.isErrorResponse(r)) {
                    var e = (r && r.error && r.error.message && r.error.message.value || "Error");
                    if (this.checkMessagePresentable(r)) {
                        R.ContentPage.setErrorMessage(c, e);
                    } else {
                        R.ContentPage.setErrorMessage(c);
                    }
                    R.Console.warn(e);
                    R.ContentPage.toggleErrorMessage(c, true);
                    return;
                }
                if (r.ResultValues && r.ResultValues.results) {
                    this.handleResultValues(r.ResultValues.results, o);
                }
                R.ButtonWidget.performFollowUpAction(o, c, r.FollowUpPage);
            },
            checkMessagePresentable: function(r) {
                var b = false;
                var e;
                if (r && r.error && r.error.code) {
                    if (r.error.code.indexOf("HPA_COMMON/") === 0) {
                        e = r.error.code.substring(11);
                        if (e === "415" || (e >= 420 && e <= 428)) {
                            b = true;
                        }
                    }
                }
                return b;
            },
            handleResultValues: function(r, c) {
                var m, i;
                for (i = 0; i < r.length; i++) {
                    m = r[i];
                    if (m.WidgetValueName === R.Constants.WidgetValueName.DownloadURI) {
                        this.handleDownloadURI(m, c);
                    }
                }
            },
            handleDownloadURI: function(d, b) {
                var D = d.Value,
                    l, L, s, i;
                R.Util.openDownload(window, D);
                l = R.Node.getAllWithClassName(b, "sapCpLink");
                for (i = 0; i < l.length; i++) {
                    L = l[i];
                    s = R.Setting.get(L, "download-key");
                    if (s === d.WidgetKeyHash) {
                        L.href = D;
                        R.ButtonWidget.toggleDownloadLinkVisible(L, true);
                        break;
                    }
                }
            }
        },
        Request: {
            buildRequest: function(c, m, p) {
                var M = m,
                    P = this.appendScenarioParameter(p, c),
                    h = new XMLHttpRequest();
                if (C.CORS && !("withCredentials" in h)) {
                    if (typeof XDomainRequest === "function") {
                        h = new XDomainRequest();
                        if (M === "HEAD") {
                            M = "GET";
                        }
                    } else {
                        R.Console.warn("Cross-Domain requests are not supported in your browser.");
                        return null;
                    }
                }
                h.open(M, P, true);
                this.setRequestHeaders(h, c);
                h.withCredentials = true;
                return h;
            },
            appendScenarioParameter: function(p, c) {
                var P = p,
                    m = R.getConfig(c);
                if (m.AppendScenarioParameter) {
                    var s = "scenario=LPI",
                        t = "tenant=" + m.Tenant,
                        a = [s, t].join("&");
                    P += "?" + m.AppendScenarioParameter + "=" + btoa(a);
                }
                return P;
            },
            setRequestHeaders: function(h, c) {
                if (h.setRequestHeader) {
                    var m = R.getConfig(c);
                    h.setRequestHeader("Content-Type", "application/json");
                    h.setRequestHeader("Accept", "application/json");
                    if (m.CSRFTokenHeader) {
                        h.setRequestHeader(m.CSRFTokenHeader, (c.sapCpCSRFToken || "Fetch"));
                    }
                    return true;
                }
                return false;
            },
            send: function(h, d, s, e) {
                if (h instanceof XMLHttpRequest) {
                    h.onreadystatechange = function() {
                        if (h.DONE && h.readyState !== h.DONE || h.readyState !== XMLHttpRequest.DONE) {
                            return;
                        }
                        if (h.status >= 200 && h.status < 300) {
                            s(h);
                        } else {
                            e(h);
                        }
                    };
                } else {
                    h.onload = function() {
                        s(h);
                    };
                    h.onerror = function() {
                        e(h);
                    };
                    h.onprogress = function() {};
                    h.ontimeout = function() {};
                }
                if (d) {
                    h.send(JSON.stringify(d));
                } else {
                    h.send();
                }
            },
            fetchToken: function(c, f, u) {
                var h = (u ? "GET" : "HEAD"),
                    i, o, m, H;
                for (i = 0; i < c.length; i++) {
                    o = c[i];
                    m = R.getConfig(o);
                    H = this.buildRequest(o, h, m.BasePath);
                    if (!m.CSRFTokenHeader) {
                        f([o], true);
                        return;
                    }
                    this.send(H, null, function() {
                        if (H.getResponseHeader) {
                            o.sapCpCSRFToken = H.getResponseHeader(m.CSRFTokenHeader);
                        }
                        f([o], true);
                    }, function() {
                        if (!u) {
                            R.Request.fetchToken([o], f, true);
                        } else {
                            R.Console.warn("Technical error occurred.");
                            f([o], false);
                        }
                    });
                }
            },
            postResult: function(c, r, f) {
                var m = R.getConfig(c),
                    s = m.BasePath + m.ResultHeadersPath,
                    h = this.buildRequest(c, "POST", s);
                this.send(h, r, function() {
                    var a = JSON.parse(h.responseText);
                    if (typeof a === "string") {
                        a = JSON.parse(a);
                    }
                    a = (a && a.d || a);
                    f(a);
                }, function() {
                    R.Console.warn("Technical error occurred.");
                    var a = null;
                    if (h.responseText) {
                        a = JSON.parse(h.responseText);
                    }
                    f(a);
                });
            },
            isErrorResponse: function(r) {
                if (!r) {
                    return true;
                }
                return !!r.error;
            }
        },
        Setting: {
            get: function(n, s) {
                return n.getAttribute("data-sap-cp-" + s);
            }
        },
        Node: {
            getAllWithClassName: function(n, c) {
                if (n.getElementsByClassName) {
                    return n.getElementsByClassName(c);
                }
                if (n.querySelectorAll) {
                    return n.querySelectorAll("." + c);
                }
                R.Console.warn("Browser not supported!");
                return [];
            },
            getFirstWithClassName: function(n, c) {
                var N = R.Node.getAllWithClassName(n, c);
                if (N && N[0]) {
                    return N[0];
                }
                return null;
            }
        },
        CSS: {
            getClasses: function(n) {
                if (n.classList) {
                    return n.classList;
                }
                var c = n.getAttribute("class");
                return c.split(" ");
            },
            setClasses: function(n, c) {
                var s = c.join(" ");
                n.setAttribute("class", s);
            },
            hasClass: function(n, c) {
                if (n.classList && n.classList.contains) {
                    return n.classList.contains(c);
                }
                var a = this.getClasses(n);
                var i = a.indexOf(c);
                return (i >= 0);
            },
            addClass: function(n, c) {
                if (n.classList && n.classList.add) {
                    n.classList.add(c);
                    return;
                }
                var h = this.hasClass(n, c);
                if (h) {
                    return;
                }
                var a = this.getClasses(n);
                a.push(c);
                this.setClasses(n, a);
            },
            removeClass: function(n, c) {
                if (n.classList && n.classList.remove) {
                    n.classList.remove(c);
                    return;
                }
                var h = this.hasClass(n, c);
                if (!h) {
                    return;
                }
                var a = this.getClasses(n);
                var i = a.indexOf(c);
                a.splice(i, 1);
                this.setClasses(n, a);
            },
            toggleClass: function(n, c, a) {
                var A = a;
                if (typeof A === "undefined") {
                    A = !this.hasClass(n, c);
                }
                if (A) {
                    return this.addClass(n, c);
                }
                return this.removeClass(n, c);
            }
        },
        Util: {
            findParentByClassName: function(n, c) {
                if (!n || !c) {
                    return null;
                }
                if (R.CSS.hasClass(n, c)) {
                    return n;
                }
                var p = n.parentNode;
                if (!p || p === n) {
                    return null;
                }
                return this.findParentByClassName(p, c);
            },
            findWidgetByKey: function(w, W) {
                var o, i;
                for (i = 0; i < w.length; i++) {
                    o = w[i];
                    if (R.Setting.get(o, "key") === W) {
                        return o;
                    }
                }
                return null;
            },
            getCurrentUrl: function() {
                if (window !== window.top) {
                    return document.referrer;
                }
                return window.location.href;
            },
            getOutboundId: function() {
                return this.getURLParameter("sap-outbound-id");
            },
            getCampaignId: function() {
                return this.getURLParameter("sap-campaign-id");
            },
            getURLParameter: function(p) {
                var q = window.location.search.substring(1).split("&");
                for (var i = 0; i < q.length; i++) {
                    var P = q[i].split("="),
                        n = decodeURIComponent(P[0]);
                    if (n === p) {
                        return decodeURIComponent(P[1]);
                    }
                }
                return null;
            },
            prefixHttpProtocol: function(u) {
                var s = u.indexOf("/"),
                    d = u.indexOf("."),
                    p = u.indexOf("://");
                if (s === 0 || d === 0) {
                    return u;
                }
                if (p < 0 || s !== p + 1) {
                    return "http://" + u;
                }
                return u;
            },
            openPage: function(w, p) {
                if (!p) {
                    return;
                }
                var P = R.Util.prefixHttpProtocol(p);
                w.location.href = P;
            },
            openDownload: function(w, d) {
                if (!d) {
                    return;
                }
                var D = this.prefixHttpProtocol(d);
                w.open(D, "_blank");
            }
        },
        Event: {
            registerListener: function(n, e, l) {
                if (n.addEventListener) {
                    return n.addEventListener(e, l);
                }
                if (n.attachEvent) {
                    return n.attachEvent("on" + e, l);
                }
                R.Console.warn("Browser not supported!");
                return false;
            }
        },
        Console: {
            warn: function(m) {
                if (window.console && window.console.warn) {
                    window.console.warn(m);
                }
            }
        },
        Constants: {
            WidgetValueName: {
                DownloadURI: "DOWNLOAD_URI"
            },
            FollowUpAction: {
                FollowUpPage: "01",
                SuccessMessage: "02"
            }
        }
    };
    window.sap = (window.sap || {});
    window.sap.hpa = (window.sap.hpa || {});
    window.sap.hpa.cei = (window.sap.hpa.cei || {});
    window.sap.hpa.cei.cntpg = (window.sap.hpa.cei.cntpg || {});
    window.sap.hpa.cei.cntpg.run = (window.sap.hpa.cei.cntpg.run || R);
    if (window.sap.hpa.cei.cntpg.testEnvironment) {
        return;
    }
    R.Event.registerListener(document, "DOMContentLoaded", function() {
        R.initialize();
    });
    if (document.readyState === "complete" || document.readyState === "loaded" || document.readyState === "interactive") {
        R.initialize();
    }
}());

/***/ })

}]);
//# sourceMappingURL=newsletter-newsletter-update-newsletter-update-module.js.map