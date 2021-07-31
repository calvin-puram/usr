export default function ({ store, redirect, route }) {
  if (store.state.auth.loggedIn) {
    if (['login', 'register'].includes(route.name)) {
      return redirect('/')
    }
  } else if (!['login', 'register'].includes(route.name)) {
    return redirect('/')
  }
}
