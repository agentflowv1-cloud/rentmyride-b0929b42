import create from 'zustand';

interface State {
  data: any;
  error: any;
}

const useStore = create<State>(() => ({
  data: null,
  error: null,
}));

export { useStore };