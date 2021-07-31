export default function ({ $axios, redirect, $toast }) {
  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url)
  })

  $axios.onError((error) => {
    // const code = parseInt(error.response && error.response.status)
    $toast.error(error.response.data.msg, {
      duration: 5000,
    })
  })
}
