<template>
  <div id="app">
    <div class="flex items-center h-screen w-full bg-blue-lighter">
      <div class="w-full bg-white rounded shadow-lg p-8 m-4 max-w-xs mx-auto">
        <SignalMatch :data="signal">
          <template #none>
            <SignalLight color="bg-grey-dark" />
          </template>
          <template #stopping>
            <SignalLight color="bg-red-dark" />
          </template>
          <template #warning>
            <SignalLight color="bg-orange-dark" />
          </template>
          <template #passing>
            <SignalLight color="bg-green-dark" />
          </template>
        </SignalMatch>
        <form class="my-4 flex-wrap" @submit.prevent>
          <div class="flex flex-col mb-4">
            <button
              @click="onStop"
              class="btn btn-blue uppercase">
              Stop
            </button>
          </div>
          <div class="flex flex-col mb-4">
            <button
              @click="onWarn"
              class="btn btn-blue uppercase">
              Warn
            </button>
          </div>
          <div class="flex flex-col mb-4">
            <button
              @click="onPass"
              class="btn btn-blue uppercase">
              Pass
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import SignalLight from '../components/SignalLight.vue'
import { SignalMatch, Signal } from './signal'

export default {
  name: 'app',
  components: {
    SignalLight,
    SignalMatch
  },
  data() {
    return {
      signal: Signal.None,
    }
  },
  methods: {
    onStop() {
      this.signal = Signal.Stopping
    },
    onWarn() {
      this.signal = Signal.Warning
    },
    onPass() {
      this.signal = Signal.Passing
    }
  }
}
</script>

<style>
.btn {
  @apply font-bold py-2 px-4 rounded;
}
.btn-blue {
  @apply bg-blue text-white;
}
.btn-blue:hover {
  @apply bg-blue-dark;
}
.btn-blue:disabled {
  @apply opacity-50 cursor-not-allowed;
}
</style>

