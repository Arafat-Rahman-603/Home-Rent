import { createSlice } from "@reduxjs/toolkit";
import { dummyProperties } from "../data/dummyProperties";

const initialState = {
  properties: dummyProperties,
  filteredProperties: dummyProperties,
  searchTerm: "",
  filterLocation: "",
  filterPriceRange: "",
  filterBedrooms: ""
};

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
      propertySlice.caseReducers.filterProperties(state);
    },
    setFilterLocation(state, action) {
      state.filterLocation = action.payload;
      propertySlice.caseReducers.filterProperties(state);
    },
    setFilterPriceRange(state, action) {
      state.filterPriceRange = action.payload;
      propertySlice.caseReducers.filterProperties(state);
    },
    setFilterBedrooms(state, action) {
      state.filterBedrooms = action.payload;
      propertySlice.caseReducers.filterProperties(state);
    },
    filterProperties(state) {
      const checkPriceRange = (price, range) => {
        switch (range) {
          case "0-5000": return price <= 5000;
          case "5000-10000": return price > 5000 && price <= 10000;
          case "10000-20000": return price > 10000 && price <= 20000;
          case "20000+": return price > 20000;
          default: return true;
        }
      };
      state.filteredProperties = state.properties.filter((property) => {
        const matchesSearch =
          property.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          property.description.toLowerCase().includes(state.searchTerm.toLowerCase());
        const matchesLocation =
          !state.filterLocation || property.location.toLowerCase().includes(state.filterLocation.toLowerCase());
        const matchesPrice =
          !state.filterPriceRange || checkPriceRange(property.price, state.filterPriceRange);
        const matchesBedrooms =
          !state.filterBedrooms || property.bedrooms.toString() === state.filterBedrooms;
        return matchesSearch && matchesLocation && matchesPrice && matchesBedrooms;
      });
    },
    clearFilters(state) {
      state.searchTerm = "";
      state.filterLocation = "";
      state.filterPriceRange = "";
      state.filterBedrooms = "";
      state.filteredProperties = state.properties;
    }
  }
});

export const { setSearchTerm, setFilterLocation, setFilterPriceRange, setFilterBedrooms, clearFilters } = propertySlice.actions;

export default propertySlice.reducer;
