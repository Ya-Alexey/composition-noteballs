import { watch } from 'vue';

export function useWatchChar(valueToWatch) {
  watch(valueToWatch, (newValue) => {
    console.log('newValue: ', newValue);
  });

  return {

  }
}