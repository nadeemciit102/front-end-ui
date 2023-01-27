<template>
  <div class="hello">
    <div v-if="arr.length !== 0">
      <h1>
        Name :
        <span class="form">
          {{ arr[count].first_name }} {{ arr[count].last_name }}
        </span>
      </h1>
      <h1>
        ID :
        <span class="form">
          {{ arr[count].id }}
        </span>
      </h1>
      <h1>
        User ID :
        <span class="form">
          {{ arr[count].user_id }}
        </span>
      </h1>
      <h1>
        Email ID :
        <span class="form">
          {{ arr[count].email }}
        </span>
      </h1>
      <h1>
        Password :
        <span class="form">
          {{ arr[count].password }}
        </span>
      </h1>
      <h4>{{ remainingUsers }} more users to display</h4>
    </div>
    <div class="error">{{ err }}</div>

    <button class="button" @click="handleCountDec" :disabled="decDisable">
      Prev
    </button>
    <button
      class="button"
      @click="handleCountInc"
      :disabled="disable || arr.length === 0"
    >
      Next
    </button>
  </div>
</template>
------------------------------------------------------------------------------------------------
<script>
// @ is an alias to /src

import { ref, onMounted } from "vue";

export default {
  name: "Home",
  setup() {
    const count = ref(0);
    const disable = ref(false);
    const decDisable = ref(true);
    const error = ref(null);
    const array = ref([]); //Please check this
    let limit = 0; ///Check this line
    const remainingUsers = ref(0);
    //console.log(limit);

    function handleCountInc() {
      count.value++;
      remainingUsers.value--;

      if (count.value == limit) {
        disable.value = true;
        //console.log("condition met");
      }
      if (count.value > 0) {
        decDisable.value = false;
      }
    }

    function handleCountDec() {
      count.value--;
      disable.value = false;
      remainingUsers.value++;
      // console.log(count.value);
      if (count.value == 0) {
        decDisable.value = true;

        //console.log("condition met");
      }
    }
    const load = async () => {
      try {
        let data = await fetch("http://192.168.0.44:1880/users?api_key=12345");
        if (!data.ok) {
          throw Error(
            "Unable to Fetch data Please check endpoint, Server or URL used"
          );
        }
        array.value = await data.json();
        limit = array.value.length - 1;
        remainingUsers.value = limit;
      } catch (err) {
        error.value = err.message;
        //console.log(error.value);
      }
    };
    load();
    // onMounted(() => {
    //   console.log("onMounted it is running");
    // });
    return {
      arr: array,
      count,
      disable: disable,
      handleCountInc,
      handleCountDec,
      decDisable: decDisable,
      remainingUsers: remainingUsers,
      err: error,
    };
  },
  created() {},
  mounted() {},
};
</script>

<style scoped>
.button {
  background-color: #4caf50; /* Green */
  border: 3px;
  color: white;
  padding: 15px 40px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 12px;
  font-size: 18px;
  border-radius: 8px;
}
.button:hover {
  /* background-color: #555555; */
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
.button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
.form {
  border: 1px solid #4caf50;
}
.error {
  color: red;
  font-size: large;
}
</style>
