import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { useRef, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as MediaLibrary from "expo-media-library";

export default function Camera() {
  const cameraRef = useRef<CameraView>(null);
  const [facing, setFacing] = useState<CameraType>("back");
  const [torchEnabled, setTorchEnabled] = useState(false);
  const [permission, requestPermission] = useCameraPermissions();
  const [permissionMedia, requestMediaPermission] =
    MediaLibrary.usePermissions();

  if (!permission || !permissionMedia) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted || !permissionMedia.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          We need your permission to show the camera
        </Text>
        <Button
          onPress={() => {
            requestPermission();
            requestMediaPermission();
          }}
          title="grant permission"
        />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  function toggleTorch() {
    setTorchEnabled((current) => !current);
  }

  async function takePhoto() {
    try {
      const photo = await cameraRef.current?.takePictureAsync();

      if (photo) {
        await MediaLibrary.saveToLibraryAsync(photo.uri);
        return;
      }

      throw new Error("Photo capture failed");
    } catch {
      alert("Failed to take photo. Please try again.");
    }
  }

  return (
    <View style={styles.container}>
      <CameraView
        style={styles.camera}
        facing={facing}
        enableTorch={torchEnabled}
        ref={cameraRef}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={toggleTorch}>
            <Text style={styles.text}>
              {torchEnabled ? "Torch Off" : "Torch On"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.takePhoto} onPress={takePhoto} />
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  takePhoto: {
    position: "absolute",
    bottom: 40,
    left: "50%",
    transform: [{ translateX: "-50%" }],
    backgroundColor: "white",
    borderRadius: 50,
    width: 70,
    height: 70,
  },
});
