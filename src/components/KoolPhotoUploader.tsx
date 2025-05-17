import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Modal, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

const KoolPhotoUploader = ({ isVisible, onClose }) => {
    const [image, setImage] = useState(null);

    // Open Camera
    const takePhoto = async () => {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission Denied', 'Camera access is required.');
            return;
        }

        const result = await ImagePicker.launchCameraAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    // Open Gallery
    const pickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission Denied', 'Gallery access is required.');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
        }
    };

    // Remove Image
    const removeImage = () => {
        setImage(null);
    };

    // Upload Image (Simulated)
    const uploadImage = () => {
        if (!image) {
            Alert.alert('Error', 'Please select an image first.');
            return;
        }
        Alert.alert('Upload', 'Image uploaded successfully!');
    };

    return (
        <Modal transparent={true} animationType="slide" visible={isVisible}>
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    {/* Modal Header */}
                    <View style={styles.modalHeader}>
                        <Text style={styles.modalTitle}>Upload Image</Text>
                        <TouchableOpacity onPress={onClose}>
                            <Ionicons name="close" size={24} color="black" />
                        </TouchableOpacity>
                    </View>

                    {/* Image Preview with Delete Button */}
                    {image ? (
                        <View style={styles.imageContainer}>
                            <View style={styles.imageWrapper}>
                                <Image source={{ uri: image }} style={styles.imagePreview} />
                                <TouchableOpacity style={styles.deleteButton} onPress={removeImage}>
                                    <Ionicons name="close-circle" size={24} color="white" />
                                </TouchableOpacity>
                            </View>

                            {/* Upload Button on Right Side */}
                            <TouchableOpacity style={styles.uploadButton} onPress={uploadImage}>
                                <Ionicons name="cloud-upload-outline" size={24} color="white" />
                                <Text style={styles.uploadText}>Upload</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <>
                            <TouchableOpacity style={styles.option} onPress={takePhoto}>
                                <Text style={styles.optionText}>Take Picture</Text>
                                <Ionicons name="camera-outline" size={24} color="#0077b6" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.option} onPress={pickImage}>
                                <Text style={styles.optionText}>Select from Gallery</Text>
                                <Ionicons name="image-outline" size={24} color="#0077b6" />
                            </TouchableOpacity>
                        </>
                    )}
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    modalContainer: {
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingVertical: 10,
        alignItems: 'center',
    },
    optionText: {
        fontSize: 16,
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        justifyContent: 'space-between',
        width: '100%',
    },
    imageWrapper: {
        position: 'relative',
    },
    imagePreview: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    deleteButton: {
        position: 'absolute',
        top: -5,
        right: -5,
        backgroundColor: 'red',
        borderRadius: 12,
        padding: 2,
    },
    uploadButton: {
        backgroundColor: '#0077b6',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    },
    uploadText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
    },
});

export default KoolPhotoUploader;
