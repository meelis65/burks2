<template>
    <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="">
            Cart ({{ $store.state.cartCount }})
        </a>

        <div v-if="$Store.state.cart.length > 0" class="navbar-dropdown is-boxed is-right">
            <a v-for="item in $Store.state.cart"
                :key="item.id"
                class="navbar-item"
                href=""
            >
                {{ item.title }} x{{ item.quantity }} - €{{ item.totalPrice }}
            </a>

            <a class="navbar-item" href="">
                Total: €{{ totalPrice }}
            </a>

            <hr class="navbar-divider">

            <a class="navbar-item" href="">
                Checkout
            </a>
        </div>

        <div v-else class="navbar-dropdown is-boxed is-right">
            <a class="navbar-item" href="">
                Cart is empty!
            </a>
        </div>
    </div>
</template>
<script>
import { defineComponent } from "vue";
import { ref } from "vue";
import axios from "axios";
import router from "./../router";
export default defineComponent({
  setup() {
    let titel = ref(''),
    let totalPrice = ref('');
  }
    return {
      titel,
      totalPrice,
    };
});
  methods: {
    checkout (products) 
      this.$store.dispatch('cart/checkout', products)
    };
  };
};
</script>