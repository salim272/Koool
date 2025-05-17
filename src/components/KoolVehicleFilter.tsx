"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, SafeAreaView, StatusBar } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import type { Brand, Model, FilterState } from "../type"
import { useTheme } from "../theme/useTheme"

// Props interface for our reusable component
interface KoolFilterProps {
  // Data props
  filterCategories: string[]
  brands: Brand[]
  fuelTypes: string[]
  years: string[]
  getModelsByBrand: (brand: string) => Model[]
  
  // Optional callback props
  onApplyFilters?: (filterState: FilterState) => void
  onClearFilters?: () => void
  onBackPress?: () => void
  
  // Optional initial state
  initialFilterState?: Partial<FilterState>
}

const KoolVehicleFilter: React.FC<KoolFilterProps> = ({
  filterCategories,
  brands,
  fuelTypes,
  years,
  getModelsByBrand,
  onApplyFilters,
  onClearFilters,
  onBackPress,
  initialFilterState = {}
}) => {
  // State with proper typing
  const [filterState, setFilterState] = useState<FilterState>({
    selectedCategory: "Brand",
    selectedBrand: null,
    selectedModel: null,
    selectedFuelType: null,
    selectedYear: null,
    ...initialFilterState
  })

  const { AppFont, wp, hp, Colors } = useTheme();
  const styles = makeStyles({ wp, hp, Colors });

  // Destructure state for easier access
  const { selectedCategory, selectedBrand, selectedModel, selectedFuelType, selectedYear } = filterState

  // Get models based on selected brand
  const models: Model[] = selectedBrand ? getModelsByBrand(selectedBrand) : []

  // Auto-redirect to Model filter after brand selection
  useEffect(() => {
    if (selectedBrand) {
      setFilterState((prev) => ({
        ...prev,
        selectedCategory: "Model",
      }))
    }
  }, [selectedBrand])

  // Update a single field in the filter state
  const updateFilterState = (key: keyof FilterState, value: string | null): void => {
    setFilterState((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  // Reset all filters
  const resetFilters = (): void => {
    setFilterState({
      selectedCategory: "Brand",
      selectedBrand: null,
      selectedModel: null,
      selectedFuelType: null,
      selectedYear: null,
    })
    
    // Call the callback if provided
    if (onClearFilters) {
      onClearFilters()
    }
  }

  // Handle apply button press
  const handleApplyFilters = (): void => {
    if (onApplyFilters) {
      onApplyFilters(filterState)
    }
  }

  const renderFilterContent = (): JSX.Element => {
    switch (selectedCategory) {
      case "Brand":
        return (
          <View style={styles.gridContainer}>
            {brands.map((brand) => (
              <TouchableOpacity
                key={brand.id}
                style={styles.brandItem}
                onPress={() => updateFilterState("selectedBrand", brand.name)}
              >
                <Image source={{ uri: brand.logo }} style={styles.brandLogo} resizeMode="contain" />
                <Text style={styles.brandName}>{brand.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )

      case "Model":
        // Only show models if a brand is selected
        if (!selectedBrand) {
          return (
            <View style={styles.emptyStateContainer}>
              <Text style={styles.emptyStateText}>Please select a brand first</Text>
            </View>
          )
        }

        return (
          <View style={styles.gridContainer}>
            {models.map((model) => (
              <TouchableOpacity
                key={model.id}
                style={styles.modelItem}
                onPress={() => updateFilterState("selectedModel", model.name)}
              >
                <Image source={{ uri: model.image }} style={styles.modelImage} resizeMode="contain" />
                <Text style={styles.modelName}>{model.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )

      case "Fuel Type":
        return (
          <View style={styles.fuelTypeContainer}>
            {fuelTypes.map((fuelType, index) => (
              <TouchableOpacity
                key={index}
                style={styles.fuelTypeItem}
                onPress={() => updateFilterState("selectedFuelType", fuelType)}
              >
                <Text style={styles.fuelTypeText}>{fuelType}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )

      case "Year of Mfg":
        return (
          <View style={styles.yearContainer}>
            {years.map((year, index) => (
              <TouchableOpacity
                key={index}
                style={styles.yearItem}
                onPress={() => updateFilterState("selectedYear", year)}
              >
                <Text style={styles.yearText}>{year}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )

      default:
        return (
          <View style={styles.emptyStateContainer}>
            <Text style={styles.emptyStateText}>Select options to filter</Text>
          </View>
        )
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Filters</Text>
      </View>

      <View style={styles.content}>
        {/* Left sidebar - Filter categories */}
        <View style={styles.sidebar}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {filterCategories.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={[styles.categoryItem, selectedCategory === category && styles.selectedCategoryItem]}
                onPress={() => {
                  // Only allow Model selection if Brand is selected
                  if (category === "Model" && !selectedBrand) {
                    return
                  }
                  updateFilterState("selectedCategory", category)
                }}
              >
                <Text style={[styles.categoryText, selectedCategory === category && styles.selectedCategoryText]}>
                  {category}
                </Text>
                {selectedCategory === category && <View style={styles.activeCategoryIndicator} />}
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Right content - Filter options */}
        <View style={styles.filterContent}>
          <ScrollView showsVerticalScrollIndicator={false}>{renderFilterContent()}</ScrollView>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.clearButton} onPress={resetFilters}>
          <Text style={styles.clearButtonText}>Clear</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.applyButton} onPress={handleApplyFilters}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const makeStyles = ({ wp, hp, Colors }: any) =>
  StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 56,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 8,
  },
  content: {
    flex: 1,
    flexDirection: "row",
  },
  sidebar: {
    width: 120,
    borderRightWidth: 1,
    borderRightColor: "#e0e0e0",
  },
  categoryItem: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    position: "relative",
  },
  selectedCategoryItem: {
    backgroundColor: Colors.background,
  },
  categoryText: {
    fontSize: 14,
    color: "#666",
  },
  selectedCategoryText: {
    color: "#0077cc",
    fontWeight: "500",
  },
  activeCategoryIndicator: {
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    width: 3,
    backgroundColor: "#0077cc",
  },
  filterContent: {
    flex: 1,
    padding: 16,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  brandItem: {
    width: "48%",
    aspectRatio: 1.5,
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    padding: 8,
  },
  brandLogo: {
    width: "70%",
    height: "70%",
  },
  brandName: {
    marginTop: 8,
    fontSize: 12,
    textAlign: "center",
  },
  modelItem: {
    width: "48%",
    aspectRatio: 1,
    marginBottom: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    padding: 8,
  },
  modelImage: {
    width: "80%",
    height: "70%",
  },
  modelName: {
    marginTop: 8,
    fontSize: 12,
    textAlign: "center",
  },
  fuelTypeContainer: {
    flexDirection: "column",
  },
  fuelTypeItem: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    marginBottom: 12,
  },
  fuelTypeText: {
    fontSize: 14,
    textAlign: "center",
  },
  yearContainer: {
    flexDirection: "column",
  },
  yearItem: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    marginBottom: 12,
  },
  yearText: {
    fontSize: 14,
    textAlign: "center",
  },
  emptyStateContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  emptyStateText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
  },
  footer: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
    padding: 16,
  },
  clearButton: {
    flex: 1,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 4,
    marginRight: 8,
  },
  clearButtonText: {
    fontSize: 16,
    color: "#333",
  },
  applyButton: {
    flex: 1,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0077cc",
    borderRadius: 4,
    marginLeft: 8,
  },
  applyButtonText: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: "500",
  },
})

export default KoolVehicleFilter