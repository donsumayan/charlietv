import AsyncStorage from "@react-native-async-storage/async-storage";

import storage from "./storage";

jest.mock("@react-native-async-storage/async-storage", () =>
  require("@react-native-async-storage/async-storage/jest/async-storage-mock"),
);

describe("AsyncStorage", () => {
  describe("getItem", () => {
    it("should return null if AsyncStorage.getItem returns null", async () => {
      const result = await storage.getItem("testKey");

      expect(result).toBeNull();
      expect(AsyncStorage.getItem).toHaveBeenCalledWith("testKey");
    });

    it("should return parsed value if AsyncStorage.getItem returns a string", async () => {
      const testValue = { foo: "bar" };
      const stringValue = JSON.stringify(testValue);
      AsyncStorage.getItem = jest.fn().mockResolvedValueOnce(stringValue);

      const result = await storage.getItem("testKey");

      expect(result).toEqual(testValue);
      expect(AsyncStorage.getItem).toHaveBeenCalledWith("testKey");
    });

    it("should catch errors and return null", async () => {
      const errorMessage = "AsyncStorage error";
      AsyncStorage.getItem = jest.fn().mockRejectedValueOnce(errorMessage);

      const result = await storage.getItem("testKey");

      expect(result).toBeNull();
    });
  });

  describe("setItem", () => {
    it("should call AsyncStorage.setItem with the provided key and value", async () => {
      const testValue = { foo: "bar" };

      await storage.setItem("testKey", testValue);

      expect(AsyncStorage.setItem).toHaveBeenCalledWith("testKey", JSON.stringify(testValue));
    });

    it("should catch errors and log them", async () => {
      const errorMessage = "AsyncStorage error";
      AsyncStorage.setItem = jest.fn().mockRejectedValueOnce(errorMessage);

      const log = jest.spyOn(console, "log").mockImplementationOnce(() => {});

      await storage.setItem("testKey", "testValue");

      expect(log).toHaveBeenCalledWith("Error setting data in AsyncStorage:", errorMessage);
    });
  });

  describe("removeItem", () => {
    it("should call AsyncStorage.removeItem with the provided key", async () => {
      await storage.removeItem("testKey");

      expect(AsyncStorage.removeItem).toHaveBeenCalledWith("testKey");
    });

    it("should catch errors and log them", async () => {
      const errorMessage = "AsyncStorage error";
      AsyncStorage.removeItem = jest.fn().mockRejectedValueOnce(new Error(errorMessage));

      const log = jest.spyOn(console, "log").mockImplementationOnce(() => {});

      await storage.removeItem("testKey");

      expect(log).toHaveBeenCalledWith("Error removing data from AsyncStorage:", expect.any(Error));
    });
  });
});
