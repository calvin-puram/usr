export default function ({ $axios, redirect, $toast }) {
  $axios.onError((error) => {
    // const code = parseInt(error.response && error.response.status)
    $toast.error(error.response.data.msg, {
      duration: 5000,
    })
  })
}
