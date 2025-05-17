import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Alert,
} from 'react-native';
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons';

const KoolAudioRecorder = ({ isVisible, onClose, accessibilityLabel }) => {
  const [recording, setRecording] = useState(null);
  const [audioUri, setAudioUri] = useState(null);
  const [sound, setSound] = useState(null);
  const [recordingTime, setRecordingTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  let timer;

  // Start Recording
  const startRecording = async () => {
    try {
      const permission = await Audio.requestPermissionsAsync();
      if (permission.status !== 'granted') {
        Alert.alert('Permission Denied', 'Microphone access is required.');
        return;
      }

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
      setRecordingTime(0);

      // Timer for recording duration
      timer = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    } catch (error) {
      console.error('Failed to start recording', error);
    }
  };

  // Stop Recording
  const stopRecording = async () => {
    if (!recording) return;
    clearInterval(timer);

    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    setAudioUri(uri);
    setRecording(null);
  };

  // Play Audio
  const playAudio = async () => {
    if (!audioUri) return;

    const { sound } = await Audio.Sound.createAsync({ uri: audioUri });
    setSound(sound);
    setIsPlaying(true);

    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.didJustFinish) {
        setIsPlaying(false);
      }
    });

    await sound.playAsync();
  };

  // Stop Audio
  const stopAudio = async () => {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
    }
  };

  // Upload Audio (Simulated)
  const uploadAudio = () => {
    if (!audioUri) {
      Alert.alert('Error', 'Please record an audio first.');
      return;
    }
    Alert.alert('Upload', 'Audio uploaded successfully!');
  };

  // Delete Recorded Audio
  const deleteAudio = () => {
    setAudioUri(null);
  };

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={isVisible}
      accessibilityLabel={accessibilityLabel}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {/* Modal Header */}
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Record Audio</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>

          {/* Recording Controls */}
          {!audioUri ? (
            <View style={styles.recordContainer}>
              <Ionicons name="mic-outline" size={50} color="#0077b6" />
              <Text style={styles.timerText}>{recordingTime}s</Text>

              {!recording ? (
                <TouchableOpacity
                  style={styles.startButton}
                  onPress={startRecording}
                >
                  <Ionicons
                    name="play-circle-outline"
                    size={24}
                    color="white"
                  />
                  <Text style={styles.buttonText}>Start</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={styles.stopButton}
                  onPress={stopRecording}
                >
                  <Ionicons
                    name="stop-circle-outline"
                    size={24}
                    color="white"
                  />
                  <Text style={styles.buttonText}>Stop</Text>
                </TouchableOpacity>
              )}
            </View>
          ) : (
            // Playback & Upload Section
            <View style={styles.audioContainer}>
              <View style={styles.audioWrapper}>
                <TouchableOpacity onPress={isPlaying ? stopAudio : playAudio}>
                  <Ionicons
                    name={
                      isPlaying ? 'pause-circle-outline' : 'play-circle-outline'
                    }
                    size={50}
                    color="#0077b6"
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={deleteAudio}
                >
                  <Ionicons name="close-circle" size={24} color="white" />
                </TouchableOpacity>
              </View>

              {/* Upload Button */}
              <TouchableOpacity
                style={styles.uploadButton}
                onPress={uploadAudio}
              >
                <Ionicons name="cloud-upload-outline" size={24} color="white" />
                <Text style={styles.uploadText}>Upload</Text>
              </TouchableOpacity>
            </View>
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
    fontFamily: 'lexend',
  },
  recordContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  timerText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  startButton: {
    backgroundColor: '#28a745',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  stopButton: {
    backgroundColor: '#e63946',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  audioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    justifyContent: 'space-between',
    width: '100%',
  },
  audioWrapper: {
    position: 'relative',
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

export default KoolAudioRecorder;
