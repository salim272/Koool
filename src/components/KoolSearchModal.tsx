"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Modal, View, Text, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import KoolSearchBar from "./KoolSearchBar"
import KoolButton from "./KoolButton"

interface Suggestion {
  id: string
  name: string
}

interface KoolSearchModalProps {
  visible: boolean
  onClose: () => void
  onPress: () => void
  onSearch: (text: string) => void
  onManualSelect: () => void
  fetchSuggestions?: (query: string) => Promise<Suggestion[]>
  onSuggestionSelect?: (suggestion: Suggestion) => void
  placeholder?: string
}

const KoolSearchModal: React.FC<KoolSearchModalProps> = ({
  visible,
  onClose,
  onSearch,
  onManualSelect,
  onPress,
  fetchSuggestions,
  onSuggestionSelect,
  placeholder = "Search by Vehicle registration number",
}) => {
  const [searchText, setSearchText] = useState("")
  const [suggestions, setSuggestions] = useState<Suggestion[]>([])
  const [loading, setLoading] = useState(false)

  // Handle search text changes and fetch suggestions
  const handleSearchChange = async (text: string) => {
    setSearchText(text)

    if (text.length > 0 && fetchSuggestions) {
      setLoading(true)
      try {
        const results = await fetchSuggestions(text)
        setSuggestions(results)
      } catch (error) {
        console.error("Error fetching suggestions:", error)
        setSuggestions([])
      } finally {
        setLoading(false)
      }
    } else {
      setSuggestions([])
    }
  }

  // Handle suggestion selection
  const handleSuggestionPress = (suggestion: Suggestion) => {
    setSearchText(suggestion.name)
    setSuggestions([])
    if (onSuggestionSelect) {
      onSuggestionSelect(suggestion)
    }
  }

  // Handle search submission
  const handleSearch = () => {
    onSearch(searchText)
    setSuggestions([])
  }

  // Clear suggestions when modal closes
  useEffect(() => {
    if (!visible) {
      setSearchText("")
      setSuggestions([])
    }
  }, [visible])

  // Render each suggestion item
  const renderSuggestionItem = ({ item }: { item: Suggestion }) => (
    <TouchableOpacity style={styles.suggestionItem} onPress={() => handleSuggestionPress(item)}>
      <Text style={styles.suggestionText}>{item.name}</Text>
    </TouchableOpacity>
  )

  return (
    <Modal visible={visible} animationType="fade" transparent onRequestClose={onClose}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          {/* Close Button */}
          <TouchableOpacity onPress={onClose} style={styles.closeIcon}>
            <Ionicons name="close" size={20} color="black" />
          </TouchableOpacity>

          {/* Title */}
          <Text style={styles.title}>By Car</Text>

          {/* Search Input */}
          <KoolSearchBar
            value={searchText}
            onChangeText={handleSearchChange}
            placeholder={placeholder}
            onSearch={handleSearch}
          />

          {/* Suggestions List */}
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="small" color="#007EA7" />
            </View>
          ) : suggestions.length > 0 ? (
            <View style={styles.suggestionsContainer}>
              <FlatList
                data={suggestions}
                renderItem={renderSuggestionItem}
                keyExtractor={(item) => item.id}
                keyboardShouldPersistTaps="handled"
                style={styles.suggestionsList}
              />
            </View>
          ) : null}

          {/* OR Text */}
          <Text style={styles.or}>Or</Text>

          {/* Manual Select Button */}
          <KoolButton text="Select Manually" onPress={onPress} />
        </View>
      </View>
    </Modal>
  )
}

export default KoolSearchModal

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    width: "90%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    position: "relative",
    elevation: 5,
    maxHeight: "80%",
  },
  closeIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
  },
  or: {
    textAlign: "center",
    color: "#888",
    marginVertical: 10,
  },
  suggestionsContainer: {
    marginTop: 5,
    maxHeight: 200,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
  },
  suggestionsList: {
    width: "100%",
  },
  suggestionItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  suggestionText: {
    fontSize: 14,
  },
  loadingContainer: {
    padding: 10,
    alignItems: "center",
  },
})



