const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    fb: '<a href="https://fb.com">Facebook</a>',
    form: {
      firstName: 'Chayanon',
      lastName: 'Thongpila',
      age: 13,
    },
  },
  computed: {
    doubleAge() {
      return this.form.age * 2
    },
    isEven() {
      return this.form.age % 2 === 0
    },
  },

  methods: {
    greeting: function () {
      console.log('Hello from greeting')
      return `a yo`
    },
    greeting2: () => `yo a`,
    greeting3(name) {
      return `a yooooo: ${name}`
    },
    change(age) {
      console.log(age, 'CLick')
      this.message = 'YIM'
    },

    onValueChange(e) {
      console.log(e)
    },
  },
  watch: {
    message(newVal, oldVal) {
      console.log(newVal, oldVal)
    },
    form: {
      handler: (newVal, oldVal) => {
        console.log(newVal, oldVal)
      },
      deep: true,
    },
  },
})

function ayo() {
  console.log('ayo')
}
