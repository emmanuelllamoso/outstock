<template>
  <section class="checkout-area pb-70">
    <div class="container">
      <Form @submit="handleFormSubmit" :validation-schema="schema">
        <div class="row">
          <div class="col-lg-6">
            <div class="checkbox-form">
              <h3>Billing Details</h3>
              <!-- billing details start -->
              <billing-details />
              <!-- billing details end -->

              <!-- different address start -->
              <different-address />
              <!-- different address end -->
            </div>
          </div>
          <div class="col-lg-6">
            <!-- order area start -->
            <order-area />
            <!-- order area end -->
          </div>
        </div>
      </Form>
    </div>
  </section>
</template>

<script lang="ts">
import BillingDetails from "./BillingDetails.vue";
import DifferentAddress from "./DifferentAddress.vue";
import OrderArea from "./OrderArea.vue";
import * as yup from "yup";
import { useCartStore } from "../../store/useCart";
import { Form } from "vee-validate";

export default {
  components: { OrderArea, BillingDetails, DifferentAddress,Form },
  setup() {
    const cartStore = useCartStore();

    const schema = yup.object({
      firstName: yup.string().required().label("First Name"),
      lastName: yup.string().required().label("Last Name"),
      company: yup.string().label("Company"),
      country: yup.string().required().label("Country"),
      address: yup.string().required().label("Address"),
      city: yup.string().required().label("City"),
      state: yup.string().required().label("State"),
      zipCode: yup.string().required().label("zipCode"),
      phone: yup.string().required().label("Phone"),
      orderNote: yup.string().label("Order Note"),
      email: yup.string().required().email().label("Email"),
    });

    const handleFormSubmit = () => {};

    return {
      handleFormSubmit,
      schema,
      cartStore,
    }
  },
};
</script>
