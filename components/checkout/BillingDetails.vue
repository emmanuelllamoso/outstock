<template>
  <div class="row">
    <div class="col-md-12">
      <country-select />
    </div>
    <div class="col-md-6">
      <div class="checkout-form-list">
        <label>First Name <span class="required">*</span></label>
        <Field name="firstName" type="text" placeholder="First Name" />
        <ErrorMessage name="firstName" class="error" />
      </div>
    </div>
    <div class="col-md-6">
      <div class="checkout-form-list">
        <label>Last Name <span class="required">*</span></label>
        <Field name="lastName" type="text" placeholder="Last Name" />
        <ErrorMessage name="lastName" class="error" />
      </div>
    </div>
    <div class="col-md-12">
      <div class="checkout-form-list">
        <label>Company Name</label>
        <Field name="company" type="text" placeholder="example LTD." />
      </div>
    </div>
    <div class="col-md-12">
      <div class="checkout-form-list">
        <label>Address <span class="required">*</span></label>
        <Field name="address" type="text" placeholder="Street address" />
        <ErrorMessage name="address" class="error" />
      </div>
    </div>
    <div class="col-md-12">
      <div class="checkout-form-list">
        <input
          type="text"
          placeholder="Apartment, suite, unit etc. (optional)"
        />
      </div>
    </div>
    <div class="col-md-12">
      <div class="checkout-form-list">
        <label>Town / City <span class="required">*</span></label>
        <Field name="city" type="text" placeholder="Town / City" />
        <ErrorMessage name="city" class="error" />
      </div>
    </div>
    <div class="col-md-6">
      <div class="checkout-form-list">
        <label>State / County <span class="required">*</span></label>
        <Field name="state" type="text" placeholder="State / County" />
        <ErrorMessage name="state" class="error" />
      </div>
    </div>
    <div class="col-md-6">
      <div class="checkout-form-list">
        <label>Postcode / Zip <span class="required">*</span></label>
        <Field name="zipCode" type="text" placeholder="Postcode / Zip" />
        <ErrorMessage name="zipCode" class="error" />
      </div>
    </div>
    <div class="col-md-6">
      <div class="checkout-form-list">
        <label>Email Address <span class="required">*</span></label>
        <Field name="email" type="email" placeholder="Your Email" />
        <ErrorMessage name="email" class="error" />
      </div>
    </div>
    <div class="col-md-6">
      <div class="checkout-form-list">
        <label>Phone <span class="required">*</span></label>
        <Field name="phone" type="text" placeholder="Phone number" />
        <ErrorMessage name="phone" class="error" />
      </div>
    </div>
    <div class="col-md-12">
      <div class="checkout-form-list create-acc">
        <input @click="handleCreateAccount" id="cbox" type="checkbox" />
        <label for="cbox">Create an account?</label>
      </div>
      <div v-if="createAccount" id="cbox_info" class="checkout-form-list create-account">
        <p>
          Create an account by entering the information below. If you are a
          returning customer please login at the top of the page.
        </p>
        <label>Account password <span class="required">*</span></label>
        <input type="password" placeholder="password" />
      </div>
    </div>
  </div>
</template>

<script>
import CountrySelect from "./CountrySelect.vue";
import { Field, ErrorMessage } from 'vee-validate';

export default {
  components: { CountrySelect, Field, ErrorMessage },
  data() {
    return {
      createAccount: false,
    };
  },
  setup() {
    return {

    };
  },
  methods :{
    handleCreateAccount () {
      this.createAccount = !this.createAccount
    }
  }
};
</script>
