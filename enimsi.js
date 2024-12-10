class AESGCMBytes {
    constructor() {
        // Initialization code here
    }

    encrypt(data, key) {
        // Encryption logic here
    }

    decrypt(data, key) {
        // Decryption logic here
    }
}

// Create an instance of the class
const encrDecrClass = new AESGCMBytes();

// Example usage of the instance
const encryptedData = encrDecrClass.encrypt("some data", "encryption key");
const decryptedData = encrDecrClass.decrypt(encryptedData, "encryption key");

console.log(encryptedData);
console.log(decryptedData);
