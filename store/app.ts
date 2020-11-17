interface AppState {
  counter: number
}

export const state = (): AppState => ({
  counter: 0,
})
