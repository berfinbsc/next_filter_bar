import {create, set} from 'zustand';



const useCategoryStore = create(set => ({
    selectedFilters: {},
    
    addFilter: (category, filter) => set(state => ({
      selectedFilters: {
        ...state.selectedFilters,
        [category]: state.selectedFilters[category]
          ? [...state.selectedFilters[category], filter]
          : [filter]
      }
    })),
    
    removeFilter: (category, filter) => set(state => ({
      selectedFilters: {
        ...state.selectedFilters,
        [category]: state.selectedFilters[category].filter(f => f !== filter)
      }
    }))
  }));
  
  export default useCategoryStore;
  