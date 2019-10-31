export const PATH = {  
  JWT_TOKEN:'/users/:email/carts/:cartCode/generateJWT',
  PAYMENT_AUTHENTICATION:'/users/:email/carts/:cartCode/securepayment?sessionID=:sessionID',  
  VALIDATE_PAYMENT:'/users/:email/carts/:cartCode/validatepayment?responseJWT=:responseJWT&transactionID=:transactionID',
  EXPRESS_PAYMENT:"/users/:email/carts/:cartCode/securepayment?sessionID=:sessionID&isExpresscheckout=true&profileID=:profileID",
  EXPRESS_VALIDATE_PAYMENT:'/users/:email/carts/:cartCode/validatepayment?responseJWT=:responseJWT&transactionID=:transactionID&isExpresscheckout=true&profileID=:profileID',



  STOREPORTAL_LOGIN:'/storelogin?storeName=:storeName&password=:password',
  STORE_ORDERS:'/storeorders?storeName=:storeName&orderStatus=:orderStatus',
  ORDER_CHECKIN:'/ordercheckin?storeName=:storeName&status=:status',

  ORDERCONFIRMATION: "/orders/:orderId/?fields=FULL",
  ORDER_DETAILS: "/users/:email/orders/:orderCode/?fields=FULL",
  GIFT_CARD:"/users/:email/carts/:cartCode/giftcard",
  GIVEX_LOGIN:"/users/:email/givexlogin",
  GIVEX_REGISTRATION:"/users/:email/givexlogin/givexregister/newregistration",
  CHECK_BALANCE:"/users/:email/givexlogin/checkbalance",
  TRANSFER_BALANCE:"/users/:email/transferbalance?FromGiftCardNumber=:FromGiftCardNumber&ToGiftCardNumber=:ToGiftCardNumber",
  REG_GIVEX_PAYMENT_DETAIL:"/users/:email/carts/:cartCode/paymentdetails",

  EXPRESS_CHECK_PATH:"/users/:email/expressCheckout",
  PAYPAL_PLACEORDER:"/users/:email/carts/:cartCode/paypalOrderPlace?payerID=:payerID&gUID=:gUID",

  PAYERID_PATH:"/users/:email/carts/:cartCode/paypalpayment?payerID=:PayerID&fields=FULL",
  PAYPAL_PATH:"/users/:email/carts/:cartCode/paypalsetservice",

  PICK_MIX_BUNDLEPRICE: "/getBundlePrice",

  RETRIEVE_PASSWORD: "/forgottenpasswordtokens?userId=:email",

  STORES: "/kao/stores",
  CHECK_STORE_PATH: "/stores/:storeName",

  FIND_POSTCODE:"https://services.postcodeanywhere.co.uk/PostcodeAnywhere/Interactive/FindByPostcode/v1.00/json3.ws?&Postcode=:postCode&Key=PZ52-UH91-BW19-BT37",
  POSTAL_ADDRESS:"https://services.postcodeanywhere.co.uk/PostcodeAnywhere/Interactive/RetrieveById/v1.20/json3.ws?&Key=PZ52-UH91-BW19-BT37&Id=:postCode",

  REG_DEBIT_PAYMENT: "/users/:email/carts/:cartCode/payment",
  SPLIT_PAYMENT:"/users/:email/carts/:cartCode/giftcard/splitpayment?firstName=:firstName&lastName=:lastName&givexCardNumber=:givexCardNumber&givexPinNumber=:givexPinNumber&amount=:amount",
  EXPRESS_SPLIT_PAYMENT:"/users/:email/carts/:cartCode/giftcard/splitpayment?firstName=:firstName&lastName=:lastName&givexCardNumber=:givexCardNumber&givexPinNumber=:givexPinNumber&amount=:amount&isExpresscheckout=true&profileID=:profileID",
  EXPRESS_DBPAYMENT:"/users/:email/carts/:cartCode/payment?isExpresscheckout=true&profileID=:profileID",
  
  EDIT_CARD: "/users/:email/editCreditCards?profileID=:profileID",
  CREATE_CARD: "/users/:email/postcreditcards",
  REMOVE_CARD: "/users/:email/deleteCreditCard?profileID=:profileID",
  CREATE_USER_OC_PATH :"/users?orderCode=:orderCode",
  CREATE_USER_PATH: function() {
    let url = "/users";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "?access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  DEFAULT_CARD: function() {
    let url = "/users/:email/setDefaultCard?profileID=:profileID";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "&access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  REG_ORDER_YMKT: function() {
    let url = "/users/:email/sendOrderDataToYmkt/orders/:orderCode";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "?access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  GUEST_ORDER_YMKT: function() {
    let url = "/users/anonymous/sendOrderDataToYmkt/orders/:orderCode";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "?access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },

  Y_MARKETING_SIGNUP: function() {
    let url = "/sendRegistrationDataToYmkt";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "?access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  NEWSLETTER_SIGNUP: function() {
    let url = "/sendNewsLetterToYmkt";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "?access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },

  ORDER_HISTORY_DETAILS: function() {
    let url = "/users/:email/orders/:orderCode/?fields=FULL";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "&access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  ORDER_HISTORY_PATH: function() {
    let url = "/users/:email/orders?pageSize=123&fields=FULL&sort=:sort";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem ("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "&access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },

  PICK_MIX_PATH: function() {
    let url = "/products/search?query=:relavance:category:categoryId";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "&access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },

  DELIVERY_METHODS: function() {
    let url = "/users/:email/carts/:cartCode/expDeliveryMethods";
    return url;
  },
  EU_DL_METHODS: function() {
    let url = "/users/:email/carts/:cartCode/expdeliveryMethodsDEandEU?countryCode=:countryCode";
    return url;
  },

  US_DELIVERY_SERVICES: function() {
    // let url = "/users/:email/usdeliveryservices?deliveryGroup=:deliveryGroup";
    let url = '/users/:email/carts/:cartCode/expusdeliveryservices?deliveryGroup=:deliveryGroup';
    return url;
  },

  SET_DELIVERY_METHOD: function() {
    let url = "/users/:email/saveDefaultDeliveryMethod?deliveryMethod=:deliveryMethod";
    return url;
  },
  OS_FULLCART:function(){
    let _path='/users/:email/carts/:cartCode?fields=FULL&deliveryGroup=';
    
    if (localStorage.getItem("prefered_lng")) {
      const _data = JSON.parse(localStorage.getItem("prefered_lng"));
      if (_data.isoCode == "GB") {
        let url = _path + "KaoDeliveryModes&isOrderSummary=true";
        return url;
      } else {
        let url = _path + "KaoUSDeliveryModes&isOrderSummary=true";
        return url;
      }
    } else {
      let url = _path + "KaoDeliveryModes&isOrderSummary=true";
      return url;
    }
    return _path;
 
 
  },
  DELIVERY_MEHOD_TYPES: function() {
    const _path =
      "/users/:email/carts/:cartCode/DeliveryServices?deliveryGroup=";
    if (localStorage.getItem("prefered_lng")) {
      const _data = JSON.parse(localStorage.getItem("prefered_lng"));
      if (_data.isoCode == "GB") {
        let url = _path + "KaoDeliveryModes";
        return url;
      } else {
        let url = _path + "KaoUSDeliveryModes";
        return url;
      }
    } else {
      let url = _path + "KaoDeliveryModes";
      return url;
    }
    return _path;
  },

  GET_INTERNATIONAL_DELIVERY_METHOD: function() {
    let url =
      "/users/:email/carts/:cartCode/InternationalDelivery?countryCode=:countryCode";
    return url;
  },
  SET_INTERNATIONAL_DELIVERY_METHOD: function() {
    let url =
      "/users/:email/carts/:cartCode/SetIntDeliveryModeToCart?countryCode=:countryCode&deliveryCode=International-Delivery";
    return url;
  },

  GFS_PATH: function() {
    let url =
      "/users/:email/carts/:cartCode/gfs/stores?postCode=:postalCode&latitude=:latitude&longitude=:longitude";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "&access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  GUEST_CART_SHIFTING_PATH: function() {
    let url =
      "/users/anonymous/carts/:cartCode/doubleLoginCartMerge/?oldCartId=:oldCartCode&toMergeCartGuid=:mergeCartGuid";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "&access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },

  FIND_STORE: function() {
    let url = "/stores/?latitude=:latitude&longitude=:longitude";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "&access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  SET_STORE: function() {
    let url =
      "/users/:email/carts/:cartCode/setStore?deliveryCode=ClickAndCollect";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "&access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  SET_PHONENUMBER: function() {
    let url =
      "/users/:email/carts/:cartCode/gfs/setPhoneNumber?phoneNumber=:phoneNumber";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "&access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  CLICKANDCOLLECT_ADDRESS_PATH: function() {
    let url =
      "/users/:email/carts/:cartCode/clickAndCollect/addresses/delivery";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "?access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  SHIPPING_ADDRESS: function() {
    let url = "/users/:email/carts/:cartCode/addresses/delivery";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "?access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  PRODUCT_DATA_PATH: function() {
    let url = "/products/:productCode?categoryCode=:categoryCode";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "&access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  SAMPLE_PRODUCTS_PATH:
    "/products/search?query=:relevance:category:0101&sort=:sort&fields=FULL",
  CATEGORY_PRODUCTS: function() {
    let url =
      "/products/:categoryCode&pageSize=:pageSize&fields=FULL&sort=:sort";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "&access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  DELIVERY_SERVICE: function() {
    const _path =
      "/users/:email/carts/:cartCode/NamedDeliveryServices?baseSiteId=";
    if (localStorage.getItem("prefered_lng")) {
      const _data = JSON.parse(localStorage.getItem("prefered_lng"));
      let url = _path + _data.catalogversionId;
      return url;
    } else {
      let url = _path + "moltonbrown-gb";
      return url;
    }
  },
  DELIVERY_METHOD_TO_CART: function() {
    let url =
      "/users/:email/carts/:cartCode/selectDeliveryMethod?deliveryCode=:deliverycode";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "&access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },

  CATEGORY_SEARCH_PRODUCTS: function() {
    let url =
      "/products/search?query=:searchValue&pageSize=:pageSize&fields=FULL";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "&access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  CATEGORY_SEARCH_RESULTS: function() {
    let url = "/products/search?query=:searchValue";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "&access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  CHANGE_BILLING_ADDRESS: function() {
    let url = "/users/:email/carts/:cartCode/addresses/changeBillingAddress";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "?access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  CARD_DETAILS: function() {
    let url = "/users/:email/getCardDetails";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "?access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  US_DELIVERY_MODES: function() {
    let url =
      "/users/:email/carts/:cartCode/usdeliveryservices?deliveryGroup=:deliveryGroup";
    return url;
  },
  DELIVERY_METHOD: function() {
    let url = "/users/:email/carts/:cartCode/DeliveryMethods";
    return url;
  },
  USER_CARTDETAILS: function() {
    let url = "/users/:email/carts/:cartID/?fields=FULL";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "&access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  DELIVERY_NAMED_DAY_SERVICE: function() {
    let url =
      "/users/:email/carts/:cartCode/SetNamedDeliveryModeToCart?deliveryCode=:deliveryCode";
    return url;
  },
  GUEST_SHIPPING_ADDRESS: function() {
    let url = "/users/anonymous/carts/:cartId/addresses/delivery";
    // if (sessionStorage.getItem("csCustomer")) {
    //   const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
    //   let _agnetToken = _csCustomer["agentToken"];
    //   let agentUrl = url + "&access_token=" + _agnetToken;
    //   return agentUrl;
    // }
    return url;
  },

  CONFIRM_ADDRESS: function() {
    let url =
      "/users/:email/carts/:cartCode/confirmAddress?addressCode=:addressId";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "&access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  PICK_MIX_BUNDLE_PATH: function() {
    let url = "/users/:email/carts/:cartCode/addBundle";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "?access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  GIFT_BOX: function() {
    let url = "/users/:email/carts/:cartCode/giftBox";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "?access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },

  UPDATE_ENTRY: "/users/:email/carts/:cartCode/entries/:entry",

  REMOVE_BUNDLE_PATH: function() {
    let url = "/users/:email/carts/:cartCode/removeBundle?bundleNo=:bundleNo";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "&access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  UPDATE_BUNDLE: function() {
    let url =
      "/users/:email/carts/:cartCode/entries/bundleNo/:bundleNo?qty=:qty";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "&access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  ADD_TO_BASKET: function() {
    let url = "/users/:email/carts/:cartCode/entries";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "?access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },

  GENERATTE_CART: function() {
    let url = "/users/:email/carts";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "?access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  ADD_FAVOURITES: function() {
    let url = "/users/:email/wishlist/add?code=:code";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "&access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  CHANGE_PASSWORD: function() {
    let url =
      "/users/:email/password?userId=:userId&old=:currentPassword&new=:newPassword";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "&access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },

  UNSUBSCRIBE: function() {
    let url = "/users/:email/unsubscription";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "?access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  ANANONYMOUSCART: function() {
    let url = "/users/anonymous/carts/:cartCode/email?email=:email";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "&access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  REPEAT_ORDER: function() {
    let url =
      "/users/:email/carts/:cartCode/repeatOrder?code=:orderCode&cartId=:cartId";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "&access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  PROMOCODE: function() {
    let url = "/users/:email/carts/:cartCode/applyPromo?voucherId=:voucherId";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "&access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  REMOVE_PROMO: function() {
    let url = "/users/:email/carts/:cartCode/vouchers/:coupon";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "?access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },

  PROFILE: function() {
    let url = "/users/:email";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "?access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },

  REMOVE_FAVOURITE: function() {
    let url = "/users/:email/wishlist/remove/?code=:productCode";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "&access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },

  FAVOURITES: function() {
    let url = "/users/:email/wishlist/retrieve";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "?access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  MERGE_CART: function() {
    let url =
      "/users/:email/carts?oldCartId=:oldCartId&toMergeCartGuid=:newCartId";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "&access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  CREATE_ADDRESS: function() {
    let url = "/users/:email/addresses";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];

      let agentUrl = url + "?access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
 RETREIVE_ADDRESS: function() {
    let url = "/users/:email/profile/addresses";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];

      let agentUrl = url + "?access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  UPDATE_ADDRESS: function() {
    let url = "/users/:email/addresses/:addressId";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];

      let agentUrl = url + "?access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  REGISTER_CART: function() {
    let url = "/users/:email/carts";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];

      let agentUrl = url + "?access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  SITE_AUTENTICATION: function() {
    let url =
      "oauth/token?client_id=clientcq&client_secret=password&grant_type=password&username=:uid&password=:password&siteID=:siteId";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "&access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  CART_TOKEN_PATH: function() {
    let url =
      "oauth/token?client_id=clientcq&client_secret=password&grant_type=client_credentials";
    return url;
  },
  catalog: function() {
    let url = "/catalogs";
    if (sessionStorage.getItem("csCustomer")) {
      const _csCustomer = JSON.parse(sessionStorage.getItem("csCustomer"));
      let _agnetToken = _csCustomer["agentToken"];
      let agentUrl = url + "?access_token=" + _agnetToken;
      return agentUrl;
    }
    return url;
  },
  CS_ORDER_SEARCH:'/assistedservicewebservices/customers/search?orderId=:orderId&baseSite=:baseSite&access_token=:agentToken',
  CS_SEARCH:"/assistedservicewebservices/customers/search?query=:email&baseSite=:baseSite&access_token=:agentToken",
  CS_OAUTH_GRANT:"oauth/token?client_id=asm&client_secret=password&grant_type=password&username=:agent&password=:password",
  CS_OAUTH:"oauth/token?client_id=asm&client_secret=password&grant_type=password&username=:agent&password=:password"
};

export const SERVER_PATHS = {
  DEV: "https://10.22.63.60:9002/kaowebservices/v2/"
};
export const gme = {
  googleMapKey: "AIzaSyDHfkdOsaMspf8lm0fNW_GyGb7MdAM5gs0"
};
export const US_COUNTRIES = [
  {
    name: "United States",
    isocode: "US",
    id: "US-US",
    states: [
      { name: "Alabama", isocode: "AL" },
      { name: "Alaska", isocode: "AK" },
      { name: "Arizona", isocode: "AZ" },
      { name: "Arkansas", isocode: "AR" },
      { name: "California", isocode: "CA" },
      { name: "Colorado", isocode: "CO" },
      { name: "Connecticut", isocode: "CT" },
      { name: "Delaware", isocode: "DE" },
      { name: "District of Columbia", isocode: "DC" },
      { name: "Florida", isocode: "FL" },
      { name: "Georgia", isocode: "GA" },
      { name: "Hawaii", isocode: "HI" },
      { name: "Idaho", isocode: "ID" },
      { name: "Illinois", isocode: "IL" },
      { name: "Indiana", isocode: "IN" },
      { name: "Iowa", isocode: "IA" },
      { name: "Kansas", isocode: "KS" },
      { name: "Kentucky", isocode: "KY" },
      { name: "Louisiana", isocode: "LA" },
      { name: "Maine", isocode: "ME" },
      { name: "Maryland", isocode: "MD" },
      { name: "Massachusetts", isocode: "MA" },
      { name: "Michigan", isocode: "MI" },
      { name: "Minnesota", isocode: "MN" },
      { name: "Mississippi", isocode: "MS" },
      { name: "Missouri", isocode: "MO" },
      { name: "Montana", isocode: "MT" },
      { name: "Nebraska", isocode: "NE" },
      { name: "Nevada", isocode: "NV" },
      { name: "New Hampshire", isocode: "NH" },
      { name: "New Jersey", isocode: "NJ" },
      { name: "New Mexico", isocode: "NM" },
      { name: "New York", isocode: "NY" },
      { name: "North Carolina", isocode: "NC" },
      { name: "North Dakota", isocode: "ND" },
      { name: "Ohio", isocode: "OH" },
      { name: "Oklahoma", isocode: "OK" },
      { name: "Oregon", isocode: "OR" },
      { name: "Pennsylvania", isocode: "PA" },
      { name: "Rhode Island", isocode: "RI" },
      { name: "South Carolina", isocode: "SC" },
      { name: "South Dakota", isocode: "SD" },
      { name: "Tennessee", isocode: "TN" },
      { name: "Texas", isocode: "TX" },
      { name: "Utah", isocode: "UT" },
      { name: "Vermont", isocode: "VT" },
      { name: "Virginia", isocode: "VA" },
      { name: "Washington", isocode: "WA" },
      { name: "West Virginia", isocode: "WV" },
      { name: "Wisconsin", isocode: "WI" },
      { name: "Wyoming", isocode: "WY" }
    ]
  },
  {
    name: "Canada",
    isocode: "CA",
    id: "US-CA",
    states: [
      {
        name: "Alberta",
        isocode: "AB"
      },
      {
        name: "British Columbia",
        isocode: "BC"
      },
      {
        name: "Manitoba",
        isocode: "MB"
      },
      {
        name: "New Brunswick",
        isocode: "NB"
      },
      {
        name: "Newfoundland and Labrador",
        isocode: "NL"
      },
      {
        name: "Northwest Territories",
        isocode: "NT"
      },
      {
        name: "Nova Scotia",
        isocode: "NS"
      },
      {
        name: "Nunavut",
        isocode: "NU"
      },
      {
        name: "Ontario",
        isocode: "ON"
      },
      {
        name: "Prince Edward Island",
        isocode: "PE"
      },
      {
        name: "Quebec",
        isocode: "QC"
      },
      {
        name: "Saskatchewan",
        isocode: "SK"
      },
      {
        name: "Yukon Territory",
        isocode: "YT"
      }
    ]
  },
  { name: "US Minor Outlying Islands", isocode: "UM", id: "US-UM" },
  { name: "US Virgin Islands", isocode: "VI", id: "US-VI" }
];
export const countries = [
  {
    name: "Albania",

    isocode: "AL"
  },
  {
    name: "American Samoa",

    isocode: "AS"
  },
  {
    name: "Andorra",

    isocode: "AD"
  },
  {
    name: "Anguilla",

    isocode: "AI"
  },
  {
    name: "Antigua",

    isocode: "AG"
  },
  {
    name: "Argentina",

    isocode: "AR"
  },
  {
    name: "Aruba",

    isocode: "AW"
  },
  {
    name: "Australia",

    isocode: "AU"
  },
  {
    name: "Austria",

    isocode: "AT"
  },
  {
    name: "Bahamas",

    isocode: "BS"
  },
  {
    name: "Barbados",

    isocode: "BB"
  },
  {
    name: "Belgium",

    isocode: "BE"
  },
  {
    name: "Belize",

    isocode: "BZ"
  },
  {
    name: "Bermuda",

    isocode: "BM"
  },
  {
    name: "Bhutan",

    isocode: "BT"
  },
  {
    name: "Bolivia",

    isocode: "BO"
  },
  {
    name: "Brazil",

    isocode: "BR"
  },
  {
    name: "British Virgin Islands",

    isocode: "VG"
  },
  {
    name: "Bulgaria",

    isocode: "BG"
  },
  {
    name: "Canada",

    isocode: "CA"
  },
  {
    name: "CapeVerde",

    isocode: "CV"
  },
  {
    name: "Cayman Islands",

    isocode: "KY"
  },
  {
    name: "Chile",

    isocode: "CL"
  },
  {
    name: "China",

    isocode: "CN"
  },
  {
    name: "Colombia",

    isocode: "CO"
  },
  {
    name: "CookIslands",

    isocode: "CK"
  },
  {
    name: "Corsica",

    isocode: "XE"
  },
  {
    name: "CostaRica",

    isocode: "CR"
  },
  {
    name: "Croatia",

    isocode: "HR"
  },
  {
    name: "Cyprus",

    isocode: "CY"
  },
  {
    name: "Czech Republic",

    isocode: "CZ"
  },
  {
    name: "Denmark",

    isocode: "DK"
  },
  {
    name: "Dominica",

    isocode: "DM"
  },
  {
    name: "Dominican Republic",

    isocode: "DO"
  },
  {
    name: "Ecuador",

    isocode: "EC"
  },
  {
    name: "El Salvador",

    isocode: "SV"
  },
  {
    name: "Estonia",

    isocode: "EE"
  },
  {
    name: "Falkland Islands (Malvinas)",

    isocode: "FK"
  },
  {
    name: "Faroe Islands",

    isocode: "FO"
  },
  {
    name: "Fiji",

    isocode: "FJ"
  },
  {
    name: "Finland",

    isocode: "FI"
  },
  {
    name: "France (Includes Monaco)",

    isocode: "FR"
  },
  {
    name: "French Guiana",

    isocode: "GF"
  },
  {
    name: "French Polynesia",

    isocode: "PF"
  },
  {
    name: "Georgia",

    isocode: "GE"
  },
  {
    name: "Germany",

    isocode: "DE"
  },
  {
    name: "Gibraltar",

    isocode: "GI"
  },
  {
    name: "Greece",

    isocode: "GR"
  },
  {
    name: "Greenland",

    isocode: "GL"
  },
  {
    name: "Grenada",

    isocode: "GD"
  },
  {
    name: "Guadeloupe",

    isocode: "GP"
  },
  {
    name: "Guam",

    isocode: "GU"
  },
  {
    name: "Guatemala",

    isocode: "GT"
  },
  {
    name: "Guyana",

    isocode: "GY"
  },
  {
    name: "Honduras",

    isocode: "HN"
  },
  {
    name: "Hong Kong",

    isocode: "HK"
  },
  {
    name: "Hungary",

    isocode: "HU"
  },
  {
    name: "Iceland",

    isocode: "IS"
  },
  {
    name: "India",

    isocode: "IN"
  },
  {
    name: "Ireland",

    isocode: "IE"
  },
  {
    name: "Israel",

    isocode: "IL"
  },
  {
    name: "Italy",

    isocode: "IT"
  },
  {
    name: "Japan",

    isocode: "JP"
  },
  {
    name: "Liechtenstein",

    isocode: "LI"
  },
  {
    name: "Lithuania",

    isocode: "LT"
  },
  {
    name: "Luxembourg",

    isocode: "LU"
  },
  {
    name: "Macao",

    isocode: "MO"
  },
  {
    name: "Macedonia",

    isocode: "MK"
  },
  {
    name: "Malaysia",

    isocode: "MY"
  },
  {
    name: "Maldives",

    isocode: "MV"
  },
  {
    name: "Malta",

    isocode: "MT"
  },
  {
    name: "Marshall Islands",

    isocode: "MH"
  },
  {
    name: "Martinique",

    isocode: "MQ"
  },
  {
    name: "Mauritius",

    isocode: "MU"
  },
  {
    name: "Mexico",

    isocode: "MX"
  },
  {
    name: "Moldova Republic Of",

    isocode: "MD"
  },
  {
    name: "Monaco",

    isocode: "MC"
  },
  {
    name: "Montserrat",

    isocode: "MS"
  },
  {
    name: "Morocco",

    isocode: "MA"
  },
  {
    name: "Myanmar (Burma)",

    isocode: "MM"
  },
  {
    name: "Nepal",

    isocode: "NP"
  },
  {
    name: "Netherlands",

    isocode: "NL"
  },
  {
    name: "Netherlands Antilles",

    isocode: "AN"
  },
  {
    name: "New Caledonia",

    isocode: "NC"
  },
  {
    name: "New Zealand",

    isocode: "NZ"
  },
  {
    name: "Nicaragua",

    isocode: "NI"
  },
  {
    name: "Niue",

    isocode: "NU"
  },
  {
    name: "Norfolk Island",

    isocode: "NF"
  },
  {
    name: "Northern Mariana Islands",

    isocode: "MP"
  },
  {
    name: "Norway",

    isocode: "NO"
  },
  {
    name: "Palau",

    isocode: "PW"
  },
  {
    name: "Panama",

    isocode: "PA"
  },
  {
    name: "Papua New Guinea",

    isocode: "PG"
  },
  {
    name: "Paraguay",

    isocode: "PY"
  },
  {
    name: "Peru",

    isocode: "PE"
  },
  {
    name: "Philippines",

    isocode: "PH"
  },
  {
    name: "Poland",

    isocode: "PL"
  },
  {
    name: "Portugal",

    isocode: "PT"
  },
  {
    name: "Puerto Rico",

    isocode: "PR"
  },
  {
    name: "Western Samoa",

    isocode: "WS"
  },
  {
    name: "Saint Kitts And Nevis",

    isocode: "KN"
  },
  {
    name: "SanMarino",

    isocode: "SM"
  },
  {
    name: "Serbia",

    isocode: "RS"
  },
  {
    name: "Singapore",

    isocode: "SG"
  },
  {
    name: "Solomon Islands",

    isocode: "SB"
  },
  {
    name: "Slovak Republic",

    isocode: "SK"
  },
  {
    name: "Spain",

    isocode: "ES"
  },
  {
    name: "South Africa",

    isocode: "ZA"
  },
  {
    name: "South Korea",

    isocode: "KR"
  },
  {
    name: "Slovenia",

    isocode: "SI"
  },
  {
    name: "Seychelles",

    isocode: "SC"
  },
  {
    name: "Sri Lanka",

    isocode: "LK"
  },
  {
    name: "Suriname",

    isocode: "SR"
  },
  {
    name: "St.Lucia",

    isocode: "LC"
  },
  {
    name: "St.Pierre and Miquelon",

    isocode: "PM"
  },
  {
    name: "St.Vincent and the Grenadines",

    isocode: "VC"
  },
  {
    name: "Sweden",

    isocode: "SE"
  },
  {
    name: "Switzerland",

    isocode: "CH"
  },
  {
    name: "Taiwan",

    isocode: "TW"
  },
  {
    name: "Tajikistan",

    isocode: "TJ"
  },
  {
    name: "Tonga",

    isocode: "TO"
  },
  {
    name: "Trinidad and Tobago",

    isocode: "TT"
  },
  {
    name: "Turkmenistan",

    isocode: "TM"
  },
  {
    name: "Turks and Caicos Islands",

    isocode: "TC"
  },
  {
    name: "Tuvalu",

    isocode: "TV"
  },
  {
    name: "United Kingdom",

    isocode: "GB"
  },
  {
    name: "United States",

    isocode: "US"
  },
  {
    name: "Uruguay",

    isocode: "UY"
  },
  {
    name: "Virgin Islands (U.S.)",

    isocode: "VI"
  },
  {
    name: "Venezuela",

    isocode: "VE"
  }
];

export const DE_COUNTRIES = [
  {
    name: "Germany",

    isocode: "DE"
  },
  {
    name: "Austria",

    isocode: "AT"
  }
];
export const EUROPEAN_COUNTRIES = [
  {
    name: "Albania",

    isocode: "AL"
  },
  {
    name: "Armenia",

    isocode: "AM"
  },
  {
    name: "Austria",

    isocode: "AT"
  },
  {
    name: "Belarus",

    isocode: "BY"
  },
  {
    name: "Belgium",

    isocode: "BE"
  },
  {
    name: "Bosnia And Herzegowina",

    isocode: "BA"
  },
  {
    name: "Bulgaria",

    isocode: "BG"
  },
  {
    name: "Croatia",

    isocode: "HR"
  },
  {
    name: "Cyprus",

    isocode: "CY"
  },
  {
    name: "Czech Republic",

    isocode: "CZ"
  },
  {
    name: "Denmark",

    isocode: "DK"
  },
  {
    name: "Estonia",

    isocode: "EE"
  },
  {
    name: "Finland",

    isocode: "FI"
  },
  {
    name: "France (Includes Monaco)",

    isocode: "FR"
  },
  {
    name: "Georgia",

    isocode: "GE"
  },
  {
    name: "Germany",

    isocode: "DE"
  },
  {
    name: "Gibraltar",

    isocode: "GI"
  },
  {
    name: "Greece",

    isocode: "GR"
  },
  {
    name: "Greenland",

    isocode: "GL"
  },
  {
    name: "Hungary",

    isocode: "HU"
  },
  {
    name: "Iceland",

    isocode: "IS"
  },
  {
    name: "Ireland",

    isocode: "IE"
  },
  {
    name: "Italy",

    isocode: "IT"
  },
  {
    name: "Kazakhstan",

    isocode: "KZ"
  },
  {
    name: "Kyrgyzstan",

    isocode: "KG"
  },
  {
    name: "Liechtenstein",

    isocode: "LI"
  },
  {
    name: "Lithuania",

    isocode: "LT"
  },
  {
    name: "Luxembourg",

    isocode: "LU"
  },
  {
    name: "Macedonia",

    isocode: "MK"
  },
  {
    name: "Malta",

    isocode: "MT"
  },
  {
    name: "Monaco",

    isocode: "MC"
  },
  {
    name: "Netherlands",

    isocode: "NL"
  },
  {
    name: "Norway",

    isocode: "NO"
  },
  {
    name: "Poland",

    isocode: "PL"
  },
  {
    name: "Portugal",

    isocode: "PT"
  },
  {
    name: "Moldova Republic Of ",

    isocode: "MD"
  },
  {
    name: "San Marino",

    isocode: "SM"
  },
  {
    name: "Serbia",

    isocode: "RS"
  },
  {
    name: "Slovak Republic",

    isocode: "SK"
  },
  {
    name: "Slovenia",

    isocode: "SI"
  },
  {
    name: "Spain",

    isocode: "ES"
  },
  {
    name: "Sweden",

    isocode: "SE"
  },
  {
    name: "Switzerland",

    isocode: "CH"
  },
  {
    name: "Tajikistan",

    isocode: "TJ"
  },
  {
    name: "Turkmenistan",

    isocode: "TM"
  },
  {
    name: "Ukraine",

    isocode: "UA"
  },
  {
    name: "Uzbekistan",

    isocode: "UZ"
  }
];
